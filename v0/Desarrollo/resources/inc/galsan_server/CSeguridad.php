<?php

/////////////////////////////////////////////////////////////////////////////////////////
///////Aqui se hayan todas las funcionalidades de seguridad del sistema     ////////////
///////////////////////////////////////////////////////////////////////////////////////


class CSeguridad
{

    private $MasterKey = "ASDFAESD&/(/&(&/(&("; //TODO: HSM
    private $useKeys = false; //Claves de uso

    private $CTraces = false;

    private $IV = false; //Vector de Inicialización
    private $Cryptogram = false;

    //CONSTANTS
    public const bytesIV = 16;
    public const KEY_CIPHER = "CipherKey"; //Clave derivada 1 **KEY NAMES USES AS PARAMETERS IN KEY DERIVATION PROCCESS **
    public const KEY_COM = "COMKey"; //Clave derivada 2
    public const KEY_FREE = "FreeKey"; //Clave derivada 3
    public const DEFAULT_KEYS = array(CSeguridad::KEY_CIPHER => null,CSeguridad::KEY_COM => null, CSeguridad::KEY_FREE => null); //DEFAULT_KEYS


    //MODES SSL ENCRYPT.. TODO


    //Singleton Logic
    private static $Singleton_dir = false;

    public static function getInstance($ProtoKeys=[])
    {

         if (CSeguridad::$Singleton_dir == false) {

            CSeguridad::$Singleton_dir = new CSeguridad($ProtoKeys);
        }

        return CSeguridad::$Singleton_dir;

    }    


    function __construct($ProtoKeys=[])
    {
        $this->CTraces = new CTraces(CTraces::PRINT_FILE);
        $this->IV = random_bytes(CSeguridad::bytesIV);
        $this->derivedKeys($ProtoKeys);

    }

    private function derivedKeys($ProtoKeys){ //TODO: Always IV changed
    
    $ProtoKeys = CSeguridad::DEFAULT_KEYS + $ProtoKeys; //add new keys (if exist) to default keys

    //Proceso de Derivacion/Diversificación de Claves a partir de la maestra (HSM)
    $this->CTraces->LogTrace(CTraces::LEVEL_INFO, "Vector IV: " . $this->IV, __FILE__, __FUNCTION__, __LINE__);

    foreach ($ProtoKeys as $key => $value) { 
    
        $this->useKeys[$key] = hash_pbkdf2("sha256", $this->MasterKey ^ $key, $this->IV, 100000, 32, true);
    
        $this->CTraces->LogTrace(CTraces::LEVEL_INFO, "Key Derived (". SELF::mask($key) .") from MasterKey: " . SELF::mask($this->useKeys[$key]),
                __FILE__, __FUNCTION__, __LINE__);
    } 

    //$this->useKeys = $ProtoKeys; //Store keys 
    }

    public function hash_message($password) {
        return password_hash($password, PASSWORD_DEFAULT, ['cost' => 15]);

        //¿Y qué ocurre con las contraseñas antiguas? Para eso está la función _password_needsrehash(), 
        //que detecta si una contraseña almacenada no cumple con las necesidades de seguridad de la aplicación. en login

        //return password_needs_rehash($password, PASSWORD_DEFAULT, ['cost' => 15]);
    }
    public function verify_pass($password, $hash) {

        return password_verify($password, $hash);

    }

    public function If_Pass_Need_Rehash($password, $hash) {

        if (password_needs_rehash($hash, PASSWORD_DEFAULT,  ['cost' => 15])) {
            // Si es así, crear un nuevo hash y reemplazar el antiguo
            return password_hash($password, PASSWORD_DEFAULT,  ['cost' => 15]);
        } else {
            return "NO_REHASH";
        }
    }


    public function verification($param, $pattern) {

        if(preg_match($pattern, $param)) {

            echo "formato no permitido";
        }

        return htmlspecialchars($param);



    }

    public function Hash($Algorithm = 'sha256', $Data = '1234'){
    
        $this->CTraces->LogTrace(CTraces::LEVEL_INFO, "Hash (" . $Algorithm . ") Calculation over (" . $Data . ") data",
         __FILE__, __FUNCTION__, __LINE__);

        $hash = hash($Algorithm, $Data);

        $this->CTraces->LogTrace(CTraces::LEVEL_INFO, "Hash Result (" . $Algorithm . ")"  . $hash, __FILE__, __FUNCTION__, __LINE__);

        return $hash;
    }

    public function encrypt($plaintext, $mode='AES-256-CBC', $key=CSeguridad::KEY_CIPHER){
        

        $this->CTraces->LogTrace(CTraces::LEVEL_INFO, "encrypt | plaintext ". $plaintext . " mode " . $mode . " KEY[ " . CSeguridad::KEY_CIPHER .
        $this->useKeys[$key] . " Vector IV " . $this->IV, __FILE__, __FUNCTION__, __LINE__);

        switch($mode){

            case 'AES-256-CBC':

            // Cifrar los datos
            $this->Cryptogram = openssl_encrypt(
            $plaintext,
            $mode,
            $this->useKeys[$key],
            OPENSSL_RAW_DATA,
            $this->IV
            );

            break;


            default:
            break;
        }


        if ($this->Cryptogram === false) {
            throw new Exception('Error al cifrar los datos');
        }
        
        // Combinar IV y texto cifrado (base64 para facilitar almacenamiento)
        return base64_encode($this->IV . $this->Cryptogram);
    }


    public function decrypt(string $Cryptogram, $mode='AES-256-CBC', $key=CSeguridad::KEY_CIPHER){
        
        $this->readIV($Cryptogram);

        switch($mode){

            case 'AES-256-CBC':

                
            $this->CTraces->LogTrace(CTraces::LEVEL_INFO, "Decrypt | Cryptogram ". $this->Cryptogram . " mode " . $mode . " KEY " . 
            $this->useKeys[$key] . " Vector IV " . $this->IV, __FILE__, __FUNCTION__, __LINE__);

            // Cifrar los datos
            $plaintext = openssl_decrypt(
                $this->Cryptogram,
                $mode,
                $this->useKeys[$key],
                OPENSSL_RAW_DATA,
                $this->IV
            );

            break;


            default:
            break;
        }

    $this->CTraces->LogTrace(CTraces::LEVEL_INFO, "Plaintext: " . $plaintext, __FILE__, __FUNCTION__, __LINE__);

    if ($plaintext === false) {
        throw new Exception('Error al descifrar los datos');
    }
            

    
    return $plaintext;
    }


    private function readIV(string $Cryptogram, $bytesIV = CSeguridad::bytesIV){

    // Decodificar de base64
    $data = base64_decode($Cryptogram);
    
    // Extraer IV (primeros 16 bytes) y texto cifrado
    $this->IV = substr($data, 0, $bytesIV);
    $this->Cryptogram = substr($data, $bytesIV);
    $this->CTraces->LogTrace(CTraces::LEVEL_INFO, "Vector IV: " . $this->IV, __FILE__, __FUNCTION__, __LINE__);

    $this->derivedKeys([]); //Derived Keys With New IV
    }


//For mask sensitive data
static function mask($data, $visibleStart = 3, $visibleEnd = 3, $maskChar = '*') {
    // Si el dato es muy corto, no lo enmascara
    if (strlen($data) < ($visibleStart + $visibleEnd)) {
        return $data;
    }
    
    // Extraer los primeros y últimos caracteres visibles
    $start = substr($data, 0, $visibleStart);
    $end = substr($data, -$visibleEnd);
    $maskedLength = strlen($data) - $visibleStart - $visibleEnd;
    
    // Crear la máscara con el carácter especificado
    $mask = str_repeat($maskChar, $maskedLength);
    
    return $start . $mask . $end;
}
}

?>



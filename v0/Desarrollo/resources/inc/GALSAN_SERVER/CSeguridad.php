<?php

/////////////////////////////////////////////////////////////////////////////////////////
///////Aqui se hayan todas las funcionalidades de seguridad del sistema     ////////////
///////////////////////////////////////////////////////////////////////////////////////


class CSeguridad
{

    private $CTraces = false;

    private static $Singleton_dir = false;

    public static function getInstance()
    {

         if (CSeguridad::$Singleton_dir == false) {

            CSeguridad::$Singleton_dir = new CSeguridad();
        }

        return CSeguridad::$Singleton_dir;

    }    


    function __construct()
    {
        $this->CTraces = new CTraces(CTraces::PRINT_FILE);

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

}

?>
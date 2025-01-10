<?php
CSession::Open_Server_Sessions();
require_once 'CConstants.php';
require_once 'CUtils.php';


class CSession
{

    private $CTraces_o = false;


    private const SESSION_FIELD_USER = 'USER';
    private const SESSION_FIELD_VERIFICATION = 'NUM_Confirm';
    private const SESSION_FIELD_ROL = 'ROL';
    private const SESSION_FIELD_DOMAIN = "DOMAIN";


    //Comprobaciones de session
    private const BIT_USER = 0b0000001; //1 User bit check  ✓
    private const BIT_ROL = 0b0000010; //2 Rol bit check  ✓
    private const BIT_DOMAIN = 0b0000100; //3 Domain bit check  ✓

    function __construct()
    {
        //Set False Session fields if theirs are not set previously
/*         if(isset($_SESSION[CSession::SESSION_FIELD_USER])) $this->Set_SESSION_FIELD(CSession::SESSION_FIELD_USER, false);
        if(isset($_SESSION[CSession::SESSION_FIELD_VERIFICATION])) $this->Set_SESSION_FIELD(CSession::SESSION_FIELD_VERIFICATION, false);
        if(isset($_SESSION[CSession::SESSION_FIELD_ROL])) $this->Set_SESSION_FIELD(CSession::SESSION_FIELD_ROL, false);
        if(isset($_SESSION[CSession::SESSION_FIELD_DOMAIN])) $this->Set_SESSION_FIELD(CSession::SESSION_FIELD_DOMAIN, false);

 */

        $this->CTraces_o = new CTraces(CTraces::PRINT_FILE);


    }

    static function Open_Server_Sessions()
    {
        return session_start();
    }

    static function Close_Server_Sessions()
    {
        return session_destroy();
    }


    public function Set_SESSION_FIELD($SESSION_FIELD_NAME, $VALUE)
    {
        $_SESSION[$SESSION_FIELD_NAME] = $VALUE;
    }

    private function Check_Server_Sessions_Status()
    {
        return (session_status() === PHP_SESSION_NONE) ?  false : true;
    }




    public function Is_Account_Verified()
    {

        if ($this->Is_Account_Logged() != false) {

            return ($_SESSION[CSession::SESSION_FIELD_VERIFICATION] !== 0 ? false : true);
        } else {

            return CConstants::ERR_USER_NOT_VERIFIED;
        }
    }


    //Get And Setters SSESSION PARAMETERS
    public function Get_User_Name()
    {

        return $_SESSION[CSession::SESSION_FIELD_USER];
    }

    public function Get_User_Rol()
    {

        return $_SESSION[CSession::SESSION_FIELD_ROL];
    }

    public function Logged_User($USER, $ROL)
    {

        $_SESSION[CSession::SESSION_FIELD_USER] = $USER;
        $_SESSION[CSession::SESSION_FIELD_ROL] = $ROL;
        $_SESSION[CSession::SESSION_FIELD_DOMAIN] = $_SERVER['HTTP_HOST']; //Dominio desde el cual se inicia session Ej login.yourdomain.es...
        //Obtener IP
        //Navegador

        $this->CTraces_o->LogTrace(CTraces::LEVEL_INFO, 
        " SESSION ID: " . session_id() . "\n" .        
        " USER: " . $_SESSION[CSession::SESSION_FIELD_USER] . "\n" .
        " ROL: " . $_SESSION[CSession::SESSION_FIELD_ROL] . "\n" .
        " URL: " . $_SESSION[CSession::SESSION_FIELD_DOMAIN] . "\n",
         __FILE__, __FUNCTION__, __LINE__
        );
    }


    public function Is_User_Logged($ROL = CConstants::ROL_ADMIN){

        $this->CTraces_o->LogTrace(CTraces::LEVEL_INFO, "SESSION ID: " . session_id() . "\n" . __FILE__, __FUNCTION__, __LINE__);

        $ret = CConstants::GALSAN_KO;
        $checks_result = 0b0000000; //plantilla bit

        $checks_result |= ($this->Get_FIELD(CSession::SESSION_FIELD_USER)) ? CSession::BIT_USER : 0; //User bit tick ✓
        $checks_result |= ($this->Get_FIELD(CSession::SESSION_FIELD_ROL) >= $ROL) ? CSession::BIT_ROL : 0; //Rol bit tick ✓
        $checks_result |= ($this->Get_FIELD(CSession::SESSION_FIELD_DOMAIN) == $_SERVER['HTTP_HOST']) ? CSession::BIT_DOMAIN : 0; //Domain bit tick ✓

        //Ahora analizamos el checks result y comprobamos si algunas comprobaciones han fallado o han ido todas bien
        if ($checks_result & CSession::BIT_USER){ //BIT_USER (BIT 1) =  0-0-0-0-0-0-[1]

            //Check OK
        }else{

            $this->CTraces_o->LogTrace(CTraces::LEVEL_INFO, "ERROR CHECKING SESSION: BIT_USER: " . 
            $this->Get_FIELD(CSession::SESSION_FIELD_USER) . "CheckResult: " . $checks_result,
             __FILE__, __FUNCTION__, __LINE__);

            return CConstants::GALSAN_KO;
        }

        if ($checks_result & CSession::BIT_ROL){ //BIT_ROL (BIT 2) =  0-0-0-0-0-[1]-0

            //Check OK
        }else{

            $this->CTraces_o->LogTrace(CTraces::LEVEL_INFO, "ERROR CHECKING SESSION: BIT_USER: " . 
            $this->Get_FIELD(CSession::SESSION_FIELD_ROL) . "CheckResult: " . $checks_result,
             __FILE__, __FUNCTION__, __LINE__);

            return CConstants::GALSAN_KO;

        }


        if ($checks_result & CSession::BIT_DOMAIN){ //BIT_ROL (BIT 3) =  0-0-0-0-[1]-0-0

            //Check OK
        }else{

            $this->CTraces_o->LogTrace(CTraces::LEVEL_INFO, "ERROR CHECKING SESSION: BIT_USER: " . 
            $this->Get_FIELD(CSession::SESSION_FIELD_DOMAIN) . "CheckResult: " . $checks_result,
             __FILE__, __FUNCTION__, __LINE__);

            return CConstants::GALSAN_KO;
        }

        return CConstants::getInstance()->CODE('GALSAN', 'OK');
    }

    public function Check_Only_Logged_Users($ROL = CConstants::ROL_ADMIN, $Go_to_URL = "index.php")
    {

        if(CSession::Is_User_Logged($ROL)){


        } else {
            //header('Location: ./index.php');
            //echo $_SESSION[CSession::SESSION_FIELD_USER];
            //echo "FORBIDDEN";
            $this->Close_Server_Sessions();
            CUtils::redirect($Go_to_URL);
            exit;
        }
    }

    static function Get_Session_IP()
    {
        // Get real visitor IP behind CloudFlare network
        if (isset($_SERVER["HTTP_CF_CONNECTING_IP"])) {
            $_SERVER['REMOTE_ADDR'] = $_SERVER["HTTP_CF_CONNECTING_IP"];
            $_SERVER['HTTP_CLIENT_IP'] = $_SERVER["HTTP_CF_CONNECTING_IP"];
        }
        $client  = @$_SERVER['HTTP_CLIENT_IP'];
        $forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
        $remote  = $_SERVER['REMOTE_ADDR'];

        if (filter_var($client, FILTER_VALIDATE_IP)) {
            $ip = $client;
        } elseif (filter_var($forward, FILTER_VALIDATE_IP)) {
            $ip = $forward;
        } else {
            $ip = $remote;
        }

        return $ip;
    }


    public function Set_Session_Request_Page()
    {
        $Session_Request_Page = $_SERVER["HTTP_REFERER"];
    }


    private function Get_FIELD($SesionParameter){
    
        return isset($_SESSION[$SesionParameter]) ? $_SESSION[$SesionParameter] : false;
      
    }
}

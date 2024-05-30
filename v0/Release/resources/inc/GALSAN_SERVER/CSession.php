<?php
CSession::Open_Server_Sessions();
require_once 'CConstants.php';
require_once 'CUtils.php';


class CSession
{
    private const SESSION_FIELD_USER = 'USER';
    private const SESSION_FIELD_PASS = 'PASS';
    private const SESSION_FIELD_VERIFICATION = 'NUM_Confirm';
    private const SESSION_FIELD_ROL = 'ROL';

    private $Session_Status_;
    private $Session_IP_;
    private $Session_Request_Page;

    function __construct()
    {
        //CSession::Open_Server_Sessions();
    }

    static function Open_Server_Sessions()
    {
        return session_start();
    }

    public function Close_Server_Sessions()
    {
        return session_destroy();
    }

    public function Get_SESSION_FIELD($SESSION_FIELD_NAME)
    {
        return $_SESSION[$SESSION_FIELD_NAME];
    }

    public function Set_SESSION_FIELD($SESSION_FIELD_NAME, $VALUE)
    {
        $_SESSION[$SESSION_FIELD_NAME] = $VALUE;
    }

    private function Check_Server_Sessions_Status()
    {
        return (session_status() === PHP_SESSION_NONE) ?  false : true;
    }


    static function Is_Account_Logged()
    {
        return isset($_SESSION[CSession::SESSION_FIELD_USER]);
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

    public function Logged_User($USER)
    {

        $_SESSION[CSession::SESSION_FIELD_USER] = $USER;
    }

    public function Check_Only_Logged_Users($Go_to_URL = "index.php")
    {

        if (isset($_SESSION[CSession::SESSION_FIELD_USER])) {
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
}

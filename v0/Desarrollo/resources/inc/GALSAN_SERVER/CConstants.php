<?php
require_once 'CUtils.php';
require_once 'CBBDD.php';



class CConstants
{
    private $CODES = false;

    ///////////////////////////////////////////////////////
    ///////////////////////Singleton engine///////////////
    //////////////////////////////////////////////////////

    private static $Singleton_dir = false;

    public static function getInstance()
    {

         if (CConstants::$Singleton_dir == false) {

            CConstants::$Singleton_dir = new CConstants();
        }

        return CConstants::$Singleton_dir;

    }    


    function __construct()
    {
        $this->ChargeCodes();
    }

    public function CODE($Family='', $ID='', $Info=false){


        return $this->CODES[$Family . '_' . $ID];


    }

    static $PROJECT_DOMAIN_NAME = "PaulBlackSmiths.es";
    static $PROJECT_SchemaBD_NAME = "NULL";

    static $MySQL_SERVER_DIR = "146.59.197.28"; //Dirección del server MySQL

    ////////////////////////////////////////////////////////////////////
///////////////////// DATA BASE NAME ///////////////////////////////
////////////////////////////////////////////////////////////////////

    static $MySQL_HEGALPA_DB_NAME = "HegalpaBD"; //TESTS
//static $MySQL_HEGALPA_DB_NAME = "MellitusForum";  //PRODUCTION


    static $MySQL_USER = "PabloHEGALPA";

    static $MySQL_door = "Informatica124**";


    /////////////////////////////////////////////////////////////////////
/////////////IDENTIFICADOR DEL ROL DE CADA USUARIO //////////////////
/////////////////////////////////////////////////////////////////////
    static $USER_ROL = array("ADMIN" => 2, "CLIENT" => 1);


    const GALSAN_OK = 1; //Generic OK
    const GALSAN_KO = 0; //Generic KO

    //400 hacia delante e
    const ERR_USER_NOT_LOGGED = -500;
    const ERR_USER_NOT_VERIFIED = -501;
    const USER_REGISTER_KO = -502;
    const USER_REGISTER_OK = -503;
    const USER_NOT_FOUND = -504;
    const USER_PASS_INCORRECT = -505;
    const USER_ACCES_DENIED = -506;
    const NOT_ENOUGH_USER_PERMISSIONS = -507;


    const ROL_ADMIN = "99";
    const ROL_USER = "0";
    const ROL_MODERATOR = "90";

    private function ChargeCodes(){

        $this->CODES = array(
        'GALSAN_OK'=> 1,
        'GALSAN_KO' => -1,


        'API_SUPERUSER_REQUIRED' => -200,

        'LOGIN_USER_LOGGED_OK' => 500,
        'LOGIN_ERR_USER_NOT_LOGGED' => -500,
        'LOGIN_ERR_USER_NOT_VERIFIED' => -501,
        'LOGIN_USER_REGISTER_OK' => 502,
        'LOGIN_USER_REGISTER_KO' => -502,
        'LOGIN_USER_NOT_FOUND' => -503,
        'LOGIN_USER_PASS_INCORRECT' => -504,
        'LOGIN_USER_ACCES_DENIED' => -505,
        'LOGIN_NOT_ENOUGH_USER_PERMISSIONS' => -506,


        'ROL_USER' => 1,
        'ROL_MODERATOR' => 8,
        'ROL_ADMIN' => 9,
        'ROL_SUPERUSER' => 10,

        );
    }

    function GetCodes()
    {

       return $this->CODES;

    }
    function GetParameters()
    {



    }

    function GetMessages()
    {



    }

}

/* CConstants::$PROJECT_DOMAIN_NAME = CUtils::Get_Domain_Name();
CConstants::$PROJECT_SchemaBD_NAME = $CSolutionINFO->Get_SchemaBD_NAME(); */

?>
<?php
require_once 'CSession.php';
require_once 'CCommandReciever.php';
require_once 'CBBDD.php';
require_once 'CMailManager.php';
require_once 'CImage_Manager.php';
require_once 'CSeguridad.php';
require_once 'CTraces.php';
require_once 'CConstants.php';

class CRestAPI
{
    private $o_COMMANDS_VALIDER_; 

    static private $o_BBDD_CONECTION_;

    public $a_OPERATIONS_Functions_;

    private $Request_Method_;

    static private $o_Mail_;

    static private $o_Image_;

    static private $o_Seguridad_;

    static private $o_Session_;

    static private $o_Traces_;


    function __constructor()
    {

        /*         $this->o_aduao_Aduanas_Commands_Validernas_ = new CADUANAS_COMMANDS_RECEIVER(); //Aduanas revisan que todo lo que llegue 
 */
    }
    //Listener Ajax request of any type
    function CommandListener()
    {

        if (isset($_SERVER["REQUEST_METHOD"])) {

            switch ($_SERVER["REQUEST_METHOD"]) {

                case 'POST':

                    if (isset($_POST["OPERATION"])) {
                        $this->CommandProcessor($_POST["OPERATION"])();
                    } else {

                        //echo "Key `operation` not found on POST vector";
                    }
                    exit; //To avoid print html with echo on Post Ajax requests...
                    break;
                case 'GET':

                    if (isset($_GET["OPERATION"])) {
                        $this->CommandProcessor($_GET["OPERATION"])();
                    }

                    break;
                default:

                    //echo "Unknow request method";
                    break;
            }
        } else {

            echo "ERROR: Request Method not found";
        }
    }


    function CommandProcessor($Command)
    {

        //Buscamos si el comando que nos llega corresponde con alguna de nuestras funciones
        if (array_key_exists($Command, $this->a_OPERATIONS_Functions_)) {

            return $this->a_OPERATIONS_Functions_[$Command];
        } else {

            echo "This operation: " . $Command . " not exits";
        }
    }

    function Create_Mail_Server($From = "", $To = "", $Subject = "", $Message = "") //SMTP Server
    {
        CRestAPI::$o_Mail_ = new CMailManager($From, $To, $Subject, $Message);
    }

    function Create_Image_Server($path) //SMTP Server
    {
        CRestAPI::$o_Image_ = new CImage_Manager($path);
    }

    function Create_Seguridad_Server() //SMTP Server
    {
        CRestAPI::$o_Seguridad_ = new CSeguridad();
    }

    function Create_SQLiteBD_CONECTION($PathBD)
    {
        CRestAPI::$o_BBDD_CONECTION_ = new CBBDD_SQLite($PathBD);
    }

    function Create_MySQL_CONECTION($SERVER, $DB_NAME, $USERNAME, $PASS)
    {
        CRestAPI::$o_BBDD_CONECTION_ = new CBBDD_MySQL($SERVER, $DB_NAME, $USERNAME, $PASS);
    }

    function Create_LogTraces_Server() //SMTP Server
    {
        ///Singleton class no tiene sentido esto
    }

    function Get_OPERATIONS_Functions()
    {
        return $this->a_OPERATIONS_Functions_;
    }

    function Set_OPERATIONS_Functions($a_OPERATIONS_Functions)
    {
        $this->a_OPERATIONS_Functions_ = $a_OPERATIONS_Functions;
    }


    function Get_Request_Method()
    {
        return $this->Request_Method_;
    }

    function Set_Resquest_Method($Request_Method)
    {
        $this->Request_Method_ = $Request_Method;
    }

    static function Get_Mail_Server()
    {
        return CRestAPI::$o_Mail_;
    }

    static function Get_Image_Server()
    {
        return CRestAPI::$o_Image_;
    }

    static function Get_Seguridad_Server()
    {
        return CRestAPI::$o_Seguridad_;
    }


    function Set_BBDD_CONECTION($o_BBDD_CONECTION)
    {
        CRestAPI::$o_BBDD_CONECTION_ = $o_BBDD_CONECTION;
    }


    static function Get_BBDD_CONECTION()
    {
        return CRestAPI::$o_BBDD_CONECTION_;
    }

    static function Get_LogTraces_Server()
    {
        return CTraces::getInstance();
    }

    static function InitServerSessions()
    {
        CRestAPI::$o_Session_ = new CSession();
    }

    static function Get_Session_Object()
    {
        return CRestAPI::$o_Session_;
    }
}

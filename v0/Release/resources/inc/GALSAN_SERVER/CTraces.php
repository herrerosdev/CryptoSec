<?php
require_once 'CFileManager.php';

/////////////////////////////////////////////////////////////////////////////////////////
///////Aqui se hayan todas las funcionalidades de seguridad del sistema     ////////////
///////////////////////////////////////////////////////////////////////////////////////


class CTraces
{


    ///////////////////////////////////////////////////////
    ///////////////////////Singleton engine///////////////
    //////////////////////////////////////////////////////

    private static $Singleton_dir = false;

    public static function getInstance()
    {

        if (CTraces::$Singleton_dir == false) {

            CTraces::$Singleton_dir = new CTraces();
        }

        return CTraces::$Singleton_dir;
    }    

    ////////////////////////////////////////////////////////////
    /////////////////////   VARIABLES/Atributos  //////////////
    //////////////////////////////////////////////////////////

    private $path = HEGALPA_DOCUMENT_LogsProd_PATH;

    private $nameScriptFile;

    private $Hour;

    private $IPUser;

    private $NameUser;

    private $Message;

    private $nameFile;

    /////////////////////////////////////////////////////////
    ///////////////////  METODOS DE LA CLASE  //////////////
    ///////////////////////////////////////////////////////


    //////////////////////// CONSTRUCTOR /////////////////
    function __construct()
    {
        $this->nameFile = date('dmY');
        if (!empty($_SESSION['login_user'])) {
            $this->NameUser = $_SESSION['login_user'];
        }




        $this->Get_Script_File_Name();
    }

    function LogTrace($message = "")
    {
        $o_FileManager = new CFileManager($this->path . $this->nameFile . ".txt");
        $HoraActual = date('G:i:s');
        $this->Get_Script_File_Name();


        $o_FileManager->WriteFile($HoraActual . "  " . $this->IPUser . " " . $this->nameScriptFile . "  " . $message . "  " . $this->NameUser . "\n");
    }


    function Get_Script_File_Name()
    {
        $aux = $_SERVER['SCRIPT_NAME'];
        $this->nameScriptFile = basename($aux);
    }

    function Get_path()
    {
        return $this->path;
    }

    function Set_path($path)
    {
        $this->path = $path;
    }
}

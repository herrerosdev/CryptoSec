<?php
require_once PATH_DEFINES_FILE;
require_once 'CFileManager.php';

/////////////////////////////////////////////////////////////////////////////////////////
///////Aqui se hayan todas las funcionalidades de seguridad del sistema     ////////////
///////////////////////////////////////////////////////////////////////////////////////


class CTraces
{

    //Print Print_Mode
    public const PRINT_FILE = 0b0000001;

    public const PRINT_ECHO = 0b0000010;

    //Trace Levels
    public const LEVEL_INFO = 0b0000001;

    public const LEVEL_ERROR = 0b0000010;

    public const LEVEL_DEBUG = 0b0000100;

    public const LEVEL_HEADER = 0b0001000;

    public const LEVEL_WARNING = 0b0010000;

    public const LEVEL_TEXT = 0b0100000;

    public const LEVEL_SEPARATOR = 0b1000000;




    //Colours
    private static $foreground = array(
        'black' => '0;30',
        'dark_gray' => '1;30',
        'red' => '0;31',
        'bold_red' => '1;31',
        'green' => '0;32',
        'bold_green' => '1;32',
        'brown' => '0;33',
        'yellow' => '1;33',
        'blue' => '0;34',
        'bold_blue' => '1;34',
        'purple' => '0;35',
        'bold_purple' => '1;35',
        'cyan' => '0;36',
        'bold_cyan' => '1;36',
        'white' => '1;37',
        'bold_gray' => '0;37',
       );
      
    private static $background = array(
        'black' => '40',
        'red' => '41',
        'magenta' => '45',
        'yellow' => '43',
        'green' => '42',
        'blue' => '44',
        'cyan' => '46',
        'light_gray' => '47',
       );
      

    ///////////////////////////////////////////////////////
    ///////////////////////Singleton engine///////////////
    //////////////////////////////////////////////////////

    private static $Singleton_dir = false;

    public static function getInstance($Print_Mode = CTraces::PRINT_FILE )
    {

         if (CTraces::$Singleton_dir == false) {

            CTraces::$Singleton_dir = new CTraces($Print_Mode);
        }

        return CTraces::$Singleton_dir;

        //return new CTraces();
    }    


    private $path = PATH_LOGS_FOLDER;

    private $nameScriptFile = "";

    private $Hour = "";

    private $IPUser = "";

    private $NameUser = "";

    private $nameFile = "";

    private $Print_Mode = "";
    private $Level = "";
    private $Message = "";
    private $File = "";
    private $Function = "";
    private $Line = "";

    function __construct($Print_Mode = CTraces::PRINT_FILE )
    {
        $this->Print_Mode = $Print_Mode;
        $this->nameFile = date('dmY');


        if (!file_exists($this->path)) {
            mkdir($this->path, 0777, true);
        }
    }

    public function setPath($path){

    $this->path = $path;

    
    if (!file_exists($this->path)) {
        mkdir($this->path, 0777, true);
    }
    
    }


    public function LogTrace($Level, 
        $message = "", 
        $File = __FILE__, 
        $Function = __FUNCTION__,  
        $Line = __LINE__
        )
    {
        $this->Level = $Level;
        $this->Message = $message;
        $this->File = $File;
        $this->Function =  $Function;
        $this->Line = $Line;

        $o_FileManager = new CFileManager($this->path . $this->nameFile . ".log");

        //Format in function of log level.
        $this->FormatLogMessage(); 

        //At the End, Print message depending of Print_Mode
        if(($this->Print_Mode & CTraces::PRINT_FILE) > 0){
            $o_FileManager->WriteFile($this->Message);
        }

        if(($this->Print_Mode & CTraces::PRINT_ECHO) > 0){
            echo nl2br($this->Message);
        }

    }

    private function FormatLogMessage()
        
    {
        $HoraActual = date('G:i:s:ms');

        //Create Log Format Depend of the LEVEL
        switch($this->Level){

            case CTraces::LEVEL_WARNING:
            case CTraces::LEVEL_INFO:
            case CTraces::LEVEL_DEBUG:
            
            $this->Message =  '[' . $HoraActual . '] ' .
                basename($this->File) . '::' . $this->Function .
                '(' . $this->Line . ') '.  "\n" .
                $this->IPUser . " " . "  " . 
                $this->Message . "  " . 
                $this->NameUser . 
                "\n";
            
            break;
            
            case CTraces::LEVEL_ERROR:
            
            break;
            
            case CTraces::LEVEL_TEXT:

                $this->Message = $this->Message . 
                "\n";

            break;

            case CTraces::LEVEL_SEPARATOR:

                $this->Message = 
                "\n\n          " .
                "...---- ***" . $this->Message . "*** ----..." . 
                "          \n\n";

            break;
        }

        return $this->Message;
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

?>
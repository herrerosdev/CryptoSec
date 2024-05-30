<?php
class CFileManager
{
    ////////////////////////////////////////////////////////////
    /////////////////////   VARIABLES/Atributos  //////////////
    //////////////////////////////////////////////////////////

    private $path; //Atributo privado, solo puede ser modificado por metodos de la propia clase.

    /////////////////////////////////////////////////////////
    ///////////////////  METODOS DE LA CLASE  //////////////
    ///////////////////////////////////////////////////////


    //////////////////////// CONSTRUCTOR /////////////////
    function __construct($path)
    {
        $this->path = $path;
    }

    public function WriteFile($txt)
    {

        $myfile = fopen($this->path, "a") or die("Unable to open file!");
        fwrite($myfile, $txt);
        fclose($myfile);
    }


    public function ReadFile()
    {
        $myfile = fopen($this->path, "r") or die("Unable to open file!");

        if (filesize($this->path) > 0) {
            $txt = fread($myfile, filesize($this->path));
            fclose($myfile);

            return $txt;
        }
    }

    public function DeleteFile()
    {
        if (unlink($this->path)) {
            return "OK";
        } else {
            return "KO";
        }
    }

    public function CheckFile()
    {

        if (file_exists($this->path)) {
          return "OK";

        } else {
            return "KO";

        }
    }
}

?>
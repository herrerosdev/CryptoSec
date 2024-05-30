<?php

/////////////////////////////////////////////////////////////////////////////////////////
///////Aqui se hayan todas las funcionalidades de seguridad del sistema     ////////////
///////////////////////////////////////////////////////////////////////////////////////


class CFiles_Uploads
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



    public function Upload_pdf($Data)
    {

        if ($Data['tmp_name']) {


            $mime_type = mime_content_type($Data['tmp_name']);


            $arr_file_types = ['application/pdf'];



            if (!in_array($mime_type, $arr_file_types)) {
                echo "false";
                return;
            }

            $nombreArchivo = $Data["name"];

            move_uploaded_file($Data['tmp_name'], $this->path . $nombreArchivo);

            echo "Pdf subido correctamente";
        }
    }


    function Set_path($new_Path) {
        $this->path = $new_Path;
    }
}

?>
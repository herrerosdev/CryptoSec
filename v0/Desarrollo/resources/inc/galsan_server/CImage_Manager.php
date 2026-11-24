<?php

/////////////////////////////////////////////////////////////////////////////////////////
///////Aqui se hayan todas las funcionalidades de seguridad del sistema     ////////////
///////////////////////////////////////////////////////////////////////////////////////


class CImage_Manager
{

    ////////////////////////////////////////////////////////////
    /////////////////////   VARIABLES/Atributos  //////////////
    //////////////////////////////////////////////////////////

    private $path;

    private $ImageOrientation_Enum_ = array(
        "Vertical" => 6,
        "HorizontalCameraRight" => 3,
        "HorizontalCameraLeft" => 1,
        "VerticalInvert" => 8,
    );


    /////////////////////////////////////////////////////////
    ///////////////////  METODOS DE LA CLASE  //////////////
    ///////////////////////////////////////////////////////


    //////////////////////// CONSTRUCTOR /////////////////
    function __construct($path)
    {
        $this->path = $path;
    }
    /*    Upload_image($_FILES['file']); */


    public function Upload_image($DataPhoto, $ID_Unique)
    {



        if ($DataPhoto['tmp_name']) {

            /* $ID_Unique = isset($_POST["id"]) ? $_POST["id"] : $Ret_value += "PK not Found"; */

            $mime_type = mime_content_type($DataPhoto['tmp_name']);


            $arr_file_types = ['image/png', 'image/gif', 'image/jpg', 'image/jpeg'];

            $fichero = $DataPhoto['size'];


            if (!in_array($mime_type, $arr_file_types)) {
                echo "false";
                return;
            }


            /* Si pesa mas de 20 Mb no lo aceptamos */
            if ($fichero < 20 * 1000000) {

                $image_info = getimagesize($DataPhoto['tmp_name']);
                $type = $image_info[2];


                if ($type == 2) {


                    if ($return = exif_read_data($_FILES['file']['tmp_name'])) {


                        if ($return['Orientation']) {

                            move_uploaded_file($DataPhoto['tmp_name'], $this->path . $DataPhoto['name']);
                            $ret = $this->image_fix_orientation($this->path . $DataPhoto['name']);
                        } else {
                            $ret = move_uploaded_file($DataPhoto['tmp_name'], $this->path . $DataPhoto['name']);
                        }
                    } else {

                        $ret = move_uploaded_file($DataPhoto['tmp_name'], $this->path . $DataPhoto['name']);
                    }
                } else {

                    $ret = move_uploaded_file($DataPhoto['tmp_name'], $this->path . $DataPhoto['name']);
                }

                chmod($this->path . $DataPhoto['name'], 0755);

                if ($ret) {

                    $quality_decrementer = 50;

                    while (1) {

                        $this->compress($this->path . $DataPhoto['name'],  $this->path . $ID_Unique . 'COMPRESSED_' . $DataPhoto['name'], $quality_decrementer);

                        if ((filesize($this->path . $ID_Unique . 'COMPRESSED_' .  $DataPhoto['name']) < 1000000) || ($quality_decrementer <= 20)) {
                            break;
                        } else {
                            $quality_decrementer -= 15;
                        }
                    }
                }
            } else {
                echo 'No se admiten imagenes superiores a 20 MB';
            }
            $borrar = @unlink($this->path . $_FILES['file']['name']);



            echo "Producto subido correctamente";
        }
    }


    public function Upload_image1($DataPhoto)
    {



        if ($DataPhoto['tmp_name']) {

            /* $ID_Unique = isset($_POST["id"]) ? $_POST["id"] : $Ret_value += "PK not Found"; */

            $mime_type = mime_content_type($DataPhoto['tmp_name']);


            $arr_file_types = ['image/png', 'image/gif', 'image/jpg', 'image/jpeg'];

            $fichero = $DataPhoto['size'];


            if (!in_array($mime_type, $arr_file_types)) {
                echo "false";
                return;
            }


            /* Si pesa mas de 20 Mb no lo aceptamos */
            if ($fichero < 20 * 1000000) {

                $image_info = getimagesize($DataPhoto['tmp_name']);
                $type = $image_info[2];


                if ($type == 2) {


                    if ($return = exif_read_data($_FILES['file']['tmp_name'])) {


                        if ($return['Orientation']) {

                            move_uploaded_file($DataPhoto['tmp_name'], $this->path . $DataPhoto['name']);
                            $ret = $this->image_fix_orientation($this->path . $DataPhoto['name']);
                        } else {
                            $ret = move_uploaded_file($DataPhoto['tmp_name'], $this->path . $DataPhoto['name']);
                        }
                    } else {

                        $ret = move_uploaded_file($DataPhoto['tmp_name'], $this->path . $DataPhoto['name']);
                    }
                } else {

                    $ret = move_uploaded_file($DataPhoto['tmp_name'], $this->path . $DataPhoto['name']);
                }

                chmod($this->path . $DataPhoto['name'], 0755);

                if ($ret) {

                    $quality_decrementer = 50;

                    while (1) {

                        $this->compress($this->path . $DataPhoto['name'],  $this->path . 'COMPRESSED_' . $DataPhoto['name'], $quality_decrementer);

                        if ((filesize($this->path . 'COMPRESSED_' .  $DataPhoto['name']) < 1000000) || ($quality_decrementer <= 20)) {
                            break;
                        } else {
                            $quality_decrementer -= 15;
                        }
                    }
                }
            } else {
                echo 'No se admiten imagenes superiores a 20 MB';
            }
            $borrar = @unlink($this->path . $_FILES['file']['name']);



            echo "Producto subido correctamente";
        }
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

            $nombreArchivo = uniqid() . $Data["name"];

            move_uploaded_file($Data['tmp_name'], $this->path . $nombreArchivo);

            echo "Pdf subido correctamente";
        }
    }

    public function DeleteImage($ruta)
    {
        return @unlink($ruta);
    }

    public function redimensionar($photo)
    {

        $image_info = getimagesize($photo);
        /* $image_type = exif_imagetype($photo); */
        $width = $new_width = $image_info[0];
        $height = $new_height = $image_info[1];
        $type = $image_info[2];

        if ($type != 3) {
            $this->image_fix_orientation($photo);
        }

        switch ($type) {
            case IMAGETYPE_JPEG:
                $image = imagecreatefromjpeg($photo);
                break;
            case IMAGETYPE_GIF:
                $image = imagecreatefromgif($photo);
                break;
            case IMAGETYPE_PNG:
                $image = imagecreatefrompng($photo);
                break;
            default:
                die('Error loading ' . $photo . ' - File type ' . $type . ' not supported');
        }

        $new_height = 236;
        $new_width = $width / ($height / $new_height);
        $new_image = imagecreatetruecolor($new_width, $new_height);
        imagecopyresampled($new_image, $image, 0, 0, 0, 0, $new_width, $new_height, $width, $height);



        // Save the new image over the top of the original photo
        switch ($type) {
            case IMAGETYPE_JPEG:
                imagejpeg($new_image, $photo);
                break;
            case IMAGETYPE_GIF:
                imagegif($new_image, $photo);
                break;
            case IMAGETYPE_PNG:
                imagepng($new_image, $photo);
                break;
            default:
                die('Error saving image: ' . $photo);
        }

        return $photo;
    }

    public function image_fix_orientation($filename)
    {
        /*         echo "imagenrecibida";
        var_dump($filename); */

        $exif = exif_read_data($filename);
        /*         var_dump($exif); */
        if (!empty($exif['Orientation'])) {
            var_dump($exif['Orientation']);
            $image = imagecreatefromjpeg($filename);

            switch ($exif['Orientation']) {
                case $this->ImageOrientation_Enum_["HorizontalCameraRight"]:
                    $image = imagerotate($image, 180, 0);
                    break;
                case $this->ImageOrientation_Enum_["Vertical"]:
                    $image = imagerotate($image, 270, 0);
                    break;
                case $this->ImageOrientation_Enum_["VerticalInvert"]:
                    $image = imagerotate($image, -270, 0);
                    break;
                case $this->ImageOrientation_Enum_["HorizontalCameraLeft"]:
                    $image = imagerotate($image, 0, 0);
                    break;
            }
            imagejpeg($image, $filename);
            return $filename;
        }
    }


    function compress($source, $destination, $quality)
    {
        /* echo "Trace 5.1"; */

        $info = getimagesize($source);

        /*  echo $info;

        echo "Trace 5.2"; */

        if ($info['mime'] == 'image/jpeg')
            $image = imagecreatefromjpeg($source);

        elseif ($info['mime'] == 'image/gif')
            $image = imagecreatefromgif($source);

        elseif ($info['mime'] == 'image/png')
            $image = imagecreatefrompng($source);

        /* echo "Trace 5.3"; */

        $info = imagejpeg($image, $destination, $quality);

        /* echo $info;

        echo "Trace 5.4"; */

        return $destination;
    }


    function Set_path($new_Path) {
        $this->path = $new_Path;
    }
}

?>
<?php

/////////////////////////////////////////////////////////////////////////////////////////
///////Aqui se hayan todas las funcionalidades de seguridad del sistema     ////////////
///////////////////////////////////////////////////////////////////////////////////////


class CSeguridad
{

    ////////////////////////////////////////////////////////////
    /////////////////////   VARIABLES/Atributos  //////////////
    //////////////////////////////////////////////////////////


    /////////////////////////////////////////////////////////
    ///////////////////  METODOS DE LA CLASE  //////////////
    ///////////////////////////////////////////////////////


    //////////////////////// CONSTRUCTOR /////////////////
    function __construct()
    {
        /* $this->path = $path; */
    }
 /*    Upload_image($_FILES['file']); */


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

}

?>
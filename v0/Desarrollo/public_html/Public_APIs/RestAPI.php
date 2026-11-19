<?php
require_once PATH_DEFINES_FILE;
require_once HEGALPA_ROOT_PATH . 'resources/inc/GALSAN_SERVER/CRestAPI.php';
require_once HEGALPA_ROOT_PATH . 'resources/inc/Hegalpa/CReporters.php';
require_once HEGALPA_ROOT_PATH . 'resources/inc/Hegalpa/CSolutionINFO.php';


$o_RestAPI = new CRestAPI();
$o_RestAPI->InitConstants();
$o_RestAPI->InitServerSessions();
//$o_RestAPI->Create_SQLiteBD_CONECTION(HEGALPA_ROOT_PATH . "resources/data/PaulCVV.db");
$o_RestAPI->Create_SQLiteBD_CONECTION(HEGALPA_ROOT_PATH . "resources/data/bitbugtheory.db");
$o_RestAPI->Create_Seguridad_Server();
$o_RestAPI->Create_Image_Server("../assets/img/customers/PhotoGerz/");
$o_RestAPI->Get_BBDD_CONECTION()->SetQueriesArray(array(

    //Config Parameters or Messages queries
    "GET_PARAMETERS_QUERY" => "SELECT * FROM PARAMETERS;",
    "GET_PUBLIC_PARAMETERS_QUERY" => "SELECT * FROM PARAMETERS WHERE PRIVACY = 'PUBLIC';",
    "GET_A_PARAMETER_QUERY" => "SELECT * FROM PARAMETERS WHERE PARAM_NAME = :0;",
    "GET_MESSAGES_QUERY" => "SELECT * FROM MESSAGES;",
    "GET_PUBLIC_MESSAGES_QUERY" => "SELECT * FROM MESSAGES WHERE PRIVACY = 'PUBLIC';",
    "GET_A_MESSAGE_QUERY" => "SELECT * FROM MESSAGES WHERE MSG_NAME = :0;",

    //Datos sensibles
    "GET_CRYPTOGRAM_QUERY" => "SELECT dataCrypt, saveMode FROM Sensible_Data WHERE user = :0 and Concept = :1;",
    "SET_SDATA_QUERY" => "INSERT INTO Sensible_Data(user, concept, dataCrypt, saveMode, token, last_update) VALUES(:0, :1, :2, :3, :4, CURRENT_TIMESTAMP);",
    "GET_USER_SD_QUERY" => "SELECT user, concept, substr(dataCrypt, 1, 4), saveMode, last_update FROM Sensible_Data WHERE USER = :0;",

    //Usuarios
    "CHECK_ACCES_OPERATION" => "SELECT * FROM Access WHERE username = :0 AND user_rol = :1",
    "GET_ACCESS_QUERY" => "SELECT username, user_rol, SUBSTR(pass_hash, LENGTH(pass_hash) - 4), last_acces FROM Access;",
    "GET_A_ACCES_QUERY" => "SELECT username, user_rol, SUBSTR(pass_hash, LENGTH(pass_hash) - 4), last_acces FROM Access WHERE username = :0;",
    "UPDATE_LAST_ACCESS" => "UPDATE Access SET last_acces = CURRENT_TIMESTAMP WHERE username = :0 AND user_rol = :1;",
    "REGISTER_ACCES_QUERY" => "INSERT INTO Access(username, pass_hash, user_rol, verified, last_acces) VALUES(:0, :1, :2, :3, CURRENT_TIMESTAMP);",
    "DELETE_ALL_Users_QUERY" => "DELETE FROM Access WHERE user_rol != 10;",

));

//TODO CHANGE THIS IN ALL APIs SOLUTIONS
CRestAPI::Set_API_OPERATIONS(array(


    /**
    * \brief API Function: GET_SDATA_OPERATION
    * Get cryptogram associated by ID provided.
    * 
    * \param dataId Sensible data Id associated.
    * \return Id associated cryptogram.
    */

    "GET_SDATA_OPERATION" => function ($User = "notsert", $Concept = false) {

        $Concept = isset($_POST['Concept']) == true ? ($_POST['Concept']) : $Concept;
        $User = isset($_POST['User']) == true ? ($_POST['User']) : $User;

        if($ret = CRestAPI::Get_Session_Object()->Is_User_Logged(CRestAPI::GetConstants()->CODE('ROL', 'ADMIN'))
         == CConstants::GALSAN_OK){

            $result = CRestAPI::Get_BBDD_CONECTION()->ExecuteQuery("GET_CRYPTOGRAM_QUERY", array($User, $Concept));

        CTraces::getInstance()->LogTrace(CTraces::LEVEL_INFO, " - PREDecrypt Data String : " . $result[0]['dataCrypt'], __FILE__, __FUNCTION__, __LINE__);

            switch($result[0]['saveMode']){
                case "AES_SYS_PASS":
                    $result[0]['dataCrypt'] = CSeguridad::getInstance()->decrypt($result[0]['dataCrypt']);
                break;
            }

        CTraces::getInstance()->LogTrace(CTraces::LEVEL_INFO, " - Decrypted Data : " . $result[0]['dataCrypt'], __FILE__, __FUNCTION__, __LINE__);

        return json_encode($result[0]['dataCrypt']); //Devolvemos cryptograma que será descifrado en el cliente con la contraseña
                                       //del usuario la cual solo él conoce

        }else{  //Error case: we return the specific: Error to Front

        return json_encode($ret);

        }

    },


    /**
    * \brief API Function: GET_SDATA_OPERATION
    * Get cryptogram associated by ID provided.
    * 
    * \param dataId Sensible data Id associated.
    * \return Id associated cryptogram.

    * TOOD: Añadir tipos de datos del usuario TEXTOPLANO | CIFRADO: USER_PASSWORD_DERIVATION | SYSTEM_KEY_DERIVATION
    */


    "SET_SDATA_OPERATION" => function ($dataOwner = false, $dataConcept = false, $dataCryptogram = false, $saveMode = false, $authRequired = true) {

        $dataOwner = isset($_POST['dataOwner']) == true ? ($_POST['dataOwner']) : $dataOwner;
        $dataConcept = isset($_POST['dataConcept']) == true ? ($_POST['dataConcept']) : $dataConcept;
        $dataCryptogram = isset($_POST['dataCryptogram']) == true ? ($_POST['dataCryptogram']) : $dataCryptogram;
        $saveMode = isset($_POST['saveMode']) == true ? ($_POST['saveMode']) : $saveMode;

        CTraces::getInstance()->LogTrace(CTraces::LEVEL_INFO, "dataOwner:" . $dataOwner . " - dataConcept:" . $dataConcept . 
        " - dataCryptogram:" . CSeguridad::mask($dataCryptogram) . " - saveMode:" . $saveMode, __FILE__, __FUNCTION__, __LINE__);
        
        if(($ret = CRestAPI::Get_Session_Object()->Is_User_Logged(CRestAPI::GetConstants()->CODE('ROL', 'ADMIN'))
         == CConstants::GALSAN_OK) || !$authRequired){

            switch($saveMode){

                case "AES_SYS_PASS":
                    $dataCryptogram = CSeguridad::getInstance()->encrypt($dataCryptogram);
                break;
            }

        CTraces::getInstance()->LogTrace(CTraces::LEVEL_INFO, " - Cipher Data: " . CSeguridad::mask($dataCryptogram), __FILE__, __FUNCTION__, __LINE__);

        $token = CSeguridad::getInstance()->Hash('sha256', $dataOwner . $dataConcept); //Hash compuesto por la clave primaria irrepetible por lo tanto identifica el dato inequivocamente 
        $ret = CRestAPI::Get_BBDD_CONECTION()->ExecuteQuery("SET_SDATA_QUERY", array($dataOwner, $dataConcept, $dataCryptogram, $saveMode, $token));

        return CRestAPI::GetConstants()->CODE('GALSAN', 'OK'); //Devolvemos success

        }else{  //Error case: we return the specific: Error to Front

        return json_encode($ret);

        }

    },

    "GET_A_ACCES_OPERATION" => function ($username = false) {

        $username = isset($_GET['usr']) == true ? ($_GET['usr']) : $username;

        
        if($ret = CRestAPI::Get_Session_Object()->Is_User_Logged(CRestAPI::GetConstants()->CODE('ROL', 'ADMIN'))
         == CConstants::GALSAN_OK){


        $Results = CRestAPI::Get_BBDD_CONECTION()->ExecuteQuery("GET_A_ACCES_QUERY", array($username));

        return json_encode($Results);

        }else{  //Error case: we return the specific: Error to Front

        return json_encode($ret);

        }

    },

    "GET_USER_SD_OPERATION" => function ($username = false) {
        
        $username = isset($_GET['usr']) == true ? ($_GET['usr']) : $username;

        if($ret = CRestAPI::Get_Session_Object()->Is_User_Logged(CRestAPI::GetConstants()->CODE('ROL', 'ADMIN'))
         == CConstants::GALSAN_OK){

        $Results = CRestAPI::Get_BBDD_CONECTION()->ExecuteQuery("GET_USER_SD_QUERY", array($username));

        return json_encode($Results);

        }else{  //Error case: we return the specific: Error to Front

        return json_encode($ret);

        }

    },

    "DELETE_ALL_Users_OPERATION" => function () {
        
        if($ret = CRestAPI::Get_Session_Object()->Is_User_Logged(CRestAPI::GetConstants()->CODE('ROL', 'SUPERUSER'))
         == CConstants::GALSAN_OK){

            $Results = CRestAPI::Get_BBDD_CONECTION()->ExecuteQuery("DELETE_ALL_Users_QUERY", array());

            return CRestAPI::GetConstants()->CODE('GALSAN', 'OK'); //Devolvemos success

        }else{ 

            return CRestAPI::GetConstants()->CODE('API', 'SUPERUSER_REQUIRED');

        }

    },


    "CHECK_SESSION" => function () {
        
        if($ret = CRestAPI::Get_Session_Object()->Is_User_Logged(CRestAPI::GetConstants()->CODE('LOGIN', 'ADMIN'))
         == CConstants::GALSAN_OK){

            $Results = CRestAPI::Get_BBDD_CONECTION()->ExecuteQuery("GET_ACCESS_QUERY", array());

            return json_encode($Results);

        }else{  //Error case: we return the specific: Error to Front

            return json_encode($ret);

        }

    },


    "GET_ALL_ACCESS_OPERATION" => function () {
        
        if($ret = CRestAPI::Get_Session_Object()->Is_User_Logged(CRestAPI::GetConstants()->CODE('ROL', 'ADMIN'))
         == CConstants::GALSAN_OK){


        $Results = CRestAPI::Get_BBDD_CONECTION()->ExecuteQuery("GET_ACCESS_QUERY", array());

        return json_encode($Results);

        }else{  //Error case: we return the specific: Error to Front

        return json_encode($ret);

        }

    },


    "REGISTER_ACCES_OPERATION" => function ($NAME = false, $PASS = false, $ROL = CConstants::ROL_USER, $CORREO = false) {


        $NAME = isset($_POST['NAME']) == true ? ($_POST['NAME']) :  $NAME;
        $PASS = isset($_POST['PASS']) == true ? ($_POST['PASS']) :  $PASS;
        $ROL = isset($_POST['ROL']) == true ? ($_POST['ROL']) :  $ROL;
        $CORREO = isset($_POST['E-MAIL']) == true ? ($_POST['E-MAIL']) : $CORREO;


        $HASH = CRestAPI::Get_Seguridad_Server()->hash_message($PASS);

        //$HASH = CRestAPI::Get_Seguridad_Server()->If_Pass_Need_Rehash($PASS, $HASH);
        CTraces::getInstance()->LogTrace(CTraces::LEVEL_INFO, "NAME:" . $NAME . "HASH:" . $HASH . "ROL:" . $ROL .
        "CORREO:" . $CORREO, __FILE__, __FUNCTION__, __LINE__);

        //CODIGO DE CONFIRMACION GENERATOR
        $codigoConfirmacionEmail = rand ( 100000 , 999999 ); //Seria conveniente comprobar si en bbdd ya hay alguien esperando confirmar con ese codigo... improbable pero bueno
        $codigoConfirmacionEmail_HASH = md5(md5($codigoConfirmacionEmail)); // md5 x2

        CRestAPI::CommandProcessor("SET_SDATA_OPERATION")($NAME, "[2FA:MAIL]", $CORREO, "AES_SYS_PASS", false);

        CTraces::getInstance()->LogTrace(CTraces::LEVEL_INFO, "VERIFY CODE" . $codigoConfirmacionEmail_HASH , __FILE__, __FUNCTION__, __LINE__);

        if ($Result = CRestAPI::Get_BBDD_CONECTION()->ExecuteQuery("REGISTER_ACCES_QUERY", array($NAME, $HASH, $ROL, $codigoConfirmacionEmail_HASH))) {

            
            CTraces::getInstance()->LogTrace(CTraces::LEVEL_ERROR, "ERROR REGISTER_ACCES_QUERY Result: " . $Result,
            __FILE__, __FUNCTION__, __LINE__);
            
           return CRestAPI::GetConstants()->CODE('LOGIN', 'USER_REGISTER_KO');

        } else {

           return CRestAPI::GetConstants()->CODE('LOGIN', 'USER_REGISTER_OK');
           
           CTraces::getInstance()->LogTrace(CTraces::LEVEL_INFO, "OK REGISTER_ACCES_QUERY Result: " . $Result,
           __FILE__, __FUNCTION__, __LINE__);

        }
    },

    "REGISTER_SUPERUSER_OPERATION" => function ($NAME = false, $PASS = false, $ROL = false) {


        $NAME = isset($_POST['NAME']) == true ? ($_POST['NAME']) :  $NAME;
        $PASS = isset($_POST['PASS']) == true ? ($_POST['PASS']) :  $PASS;
        $ROL = CRestAPI::GetConstants()->CODE('ROL', 'SUPERUSER');

        $HASH = CRestAPI::Get_Seguridad_Server()->hash_message($PASS);

        //$HASH = CRestAPI::Get_Seguridad_Server()->If_Pass_Need_Rehash($PASS, $HASH);

        if ($Result = CRestAPI::Get_BBDD_CONECTION()->ExecuteQuery("REGISTER_ACCES_QUERY", array($NAME, $HASH, $ROL))) {

           return CRestAPI::GetConstants()->CODE('LOGIN', 'USER_REGISTER_KO');

        } else {

           return CRestAPI::GetConstants()->CODE('LOGIN', 'USER_REGISTER_OK');

        }
    },

    /**
    * \brief API Function: CHECK_PASS_LIVE_USER_OPERATION
    * Check if password passed match with live user pass
    * 
    * \param Password to be checked
    * \return Id associated cryptogram.
    */

    "CHECK_PASS_LIVE_USER_OPERATION" => function ($PASS = false) {

        $PASS = isset($_POST['PASS']) == true ? ($_POST['PASS']) :  $PASS;
        $ROL = CRestAPI::GetConstants()->CODE('ROL', 'SUPERUSER');

        $HASH = CRestAPI::Get_Seguridad_Server()->hash_message($PASS);

        //$HASH = CRestAPI::Get_Seguridad_Server()->If_Pass_Need_Rehash($PASS, $HASH);

        if (CRestAPI::Get_BBDD_CONECTION()->ExecuteQuery("REGISTER_ACCES_QUERY", array($NAME, $HASH, $ROL))) {

           return CRestAPI::GetConstants()->CODE('LOGIN', 'USER_REGISTER_KO');

        } else {

           return CRestAPI::GetConstants()->CODE('LOGIN', 'USER_REGISTER_OK');

        }
    },

    "LOG_USER_OPERATION" => function ($NAME = false, $PASS = false, $ROL = CConstants::ROL_USER) {

        
        $NAME = isset($_POST['NAME']) == true ? ($_POST['NAME']) :  $NAME;
        $PASS = isset($_POST['PASS']) == true ? ($_POST['PASS']) :  $PASS;
        $ROL = isset($_POST['ROL']) == true ? ($_POST['ROL']) :  $ROL;
        
        
        $Results = CRestAPI::Get_BBDD_CONECTION()->ExecuteQuery("CHECK_ACCES_OPERATION", array($NAME, $ROL));

        //Si hemos encontrado el único usuario que buscamos Y si la contraseña coincide...
        if(count($Results) == 1){
        
            CTraces::getInstance()->LogTrace(CTraces::LEVEL_INFO, "User " . $NAME . " found in data base",
             __FILE__, __FUNCTION__, __LINE__);

            if(CRestAPI::Get_Seguridad_Server()->verify_pass($PASS, $Results[0]["pass_hash"])){ //Comparamos para comprobar que la pass sea correcta
                
                CTraces::getInstance()->LogTrace(CTraces::LEVEL_INFO, "PASS OK",
                __FILE__, __FUNCTION__, __LINE__);

                CRestAPI::Get_BBDD_CONECTION()->ExecuteQuery("UPDATE_LAST_ACCESS", array($NAME, $ROL)); //Update date of last acces 

                CRestAPI::Get_Session_Object()->Logged_User($Results[0]["username"], $Results[0]["user_rol"]); //Do Login on server
                
                return CRestAPI::GetConstants()->CODE('GALSAN', 'OK'); //Devolvemos success
                
            }else{

                return CRestAPI::GetConstants()->CODE('LOGIN', 'USER_PASS_INCORRECT');

            }

        }else{

            return CRestAPI::GetConstants()->CODE('LOGIN', 'USER_NOT_FOUND');
            
        }

    },


    "CHECK_LOGIN_AS_OPERATION" => function () {

        $ROL = isset($_POST['ROL']) == true ? ($_POST['ROL']) :  $ROL;

        if($ret = CRestAPI::Get_Session_Object()->Is_User_Logged($ROL) == CConstants::GALSAN_OK){

            return CRestAPI::GetConstants()->CODE('LOGIN', 'USER_LOGGED_OK');


         }else{

            return CRestAPI::GetConstants()->CODE('LOGIN', 'ERR_USER_NOT_LOGGED');

         }
    },

    "CHANGE_PASS_ACCES_OPERATION" => function () {

        //Si nos viene por GET, no lo cogemos del argumento, sino sí
        $NAME = "Peprgrgito";
        $PASS = "HASH";
        $ROL = "Pringao";
        
        $Results = CRestAPI::Get_BBDD_CONECTION()->ExecuteQuery("REGISTER_ACCES_QUERY", array($NAME, $PASS, $ROL));

        return $Results;
    },

    "CHANGE_USERNAME_ACCES_OPERATION" => function () {

        //Si nos viene por GET, no lo cogemos del argumento, sino sí
        $NAME = "Pepito";
        $PASS = "HASH";
        $ROL = "Pringao";
        
        $Results = CRestAPI::Get_BBDD_CONECTION()->ExecuteQuery("REGISTER_ACCES_QUERY", array($NAME, $PASS, $ROL));

        return $Results;
    },


    //======================================================================
    // API for Config parameters and messages
    //======================================================================


    "GET_A_MESSAGE_OPERATION" => function ($MSG_NAME, $IDIOM = "") {

        //Si nos viene por GET, no lo cogemos del argumento, sino sí
        $MSG_NAME = isset($_GET["MSG_NAME"]) == true ? ($_GET["MSG_NAME"]) : $MSG_NAME;
        
        $Results = CRestAPI::Get_BBDD_CONECTION()->ExecuteQuery("GET_A_MESSAGE_QUERY", array($MSG_NAME));
        
        return $Results[0]["TEXT"]; //Encode JSON->String. Decode String->JSON
        //return $Results[0];
        
        //exit;
        
        },
        
        "GET_A_PARAMETER_OPERATION" => function ($PARAM_NAME, $IDIOM = "") {
        
        //Si nos viene por GET, no lo cogemos del argumento, sino sí
        //$PARAM_NAME = isset($_GET["PARAM_NAME"]) == true ? ($_GET["PARAM_NAME"]) : $PARAM_NAME;
        
        $Results = CRestAPI::Get_BBDD_CONECTION()->ExecuteQuery("GET_A_PARAMETER_QUERY", array($PARAM_NAME));
        
        return $Results[0]["VALUE"]; //Encode JSON->String. Decode String->JSON
        //return $Results[0];
        
        //exit;
        
        },
        "GET_MESSAGES_OPERATION" => function () {
        
        $Results = CRestAPI::Get_BBDD_CONECTION()->ExecuteQuery("GET_MESSAGES_QUERY", array());
        
        return json_encode($Results); //Encode JSON->String. Decode String->JSON
        //return $Results[0];
        //exit;
        
        },
        
        "GET_PUBLIC_MESSAGES_OPERATION" => function () {
        
        $Results = CRestAPI::Get_BBDD_CONECTION()->ExecuteQuery("GET_PUBLIC_MESSAGES_QUERY", array());
        
        return json_encode($Results); //Encode JSON->String. Decode String->JSON
        //return $Results[0];
        //exit;
        
        },
        "GET_PARAMETERS_OPERATION" => function () {
        
        $Results = CRestAPI::Get_BBDD_CONECTION()->ExecuteQuery("GET_PARAMETERS_QUERY", array());
        
        return json_encode($Results); //Encode JSON->String. Decode String->JSON
        //return $Results[0];
        //exit;
        
        },
        "GET_PUBLIC_PARAMETERS_OPERATION" => function () {
        CRestAPI::Get_LogTraces_Server()->LogTrace(__LINE__ . ": Init GET_PUBLIC_PARAMETERS_OPERATION");
        
        
        $Results = CRestAPI::Get_BBDD_CONECTION()->ExecuteQuery("GET_PUBLIC_PARAMETERS_QUERY", array());
        
        
        //CRestAPI::Get_LogTraces_Server()->LogTrace(__LINE__ . ": RESULTS QUERY =  " . $Results);
        
        return json_encode($Results); //Encode JSON->String. Decode String->JSON
        //return $Results[0];
        //exit;
        
        CRestAPI::Get_LogTraces_Server()->LogTrace(__LINE__ . ": End GET_PUBLIC_PARAMETERS_OPERATION");
        
        
        },
));


CRestAPI::CommandListener();
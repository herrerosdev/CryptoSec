<?php
require_once PATH_DEFINES_FILE;
require_once HEGALPA_ROOT_PATH . 'resources/inc/GALSAN_SERVER/CRestAPI.php';
require_once HEGALPA_ROOT_PATH . 'resources/inc/Hegalpa/CReporters.php';
require_once HEGALPA_ROOT_PATH . 'resources/inc/Hegalpa/CSolutionINFO.php';


$o_RestAPI = new CRestAPI();
$o_RestAPI->InitServerSessions();
//$o_RestAPI->Create_SQLiteBD_CONECTION(HEGALPA_ROOT_PATH . "resources/data/PaulCVV.db");
$o_RestAPI->Create_SQLiteBD_CONECTION(HEGALPA_ROOT_PATH . "resources/data/" . CSolutionINFO::$PROJECT_SchemaBD_NAME);
$o_RestAPI->Create_Seguridad_Server();
$o_RestAPI->InitConstants();
$o_RestAPI->Create_Image_Server("../assets/img/customers/PhotoGerz/");
$o_RestAPI->Get_BBDD_CONECTION()->SetQueriesArray(array(
    "ADD_PHOTO_QUERY" => "INSERT INTO Photos(NAME) VALUES(:0);",
    "GET_ARTICLE_BY_ID" => "SELECT ID, NAME, FATHER, STRFTIME('%d/%m/%Y ', DATE) AS DATE, VISIBILITY, INFO FROM ARTICLES WHERE ID = :0;", //%H:%M
    "GET_ALL_ARTICLES" => "SELECT * FROM ARTICLES;",
    "GET_CONTENTS_BY_ArticleID" => "SELECT * FROM CONTENTS WHERE ARTICLE_ID = :0 ORDER BY [ORDER] ASC;",
    "COUNT_IMGs_QUERY" => "SELECT COUNT(*) FROM Photos",
    "GET_FOLDERS_QUERY" => "SELECT * FROM GROUPS;",
    "GET_FOLDERS_AND_FILES_QUERY" => "SELECT * FROM GROUPS WHERE ID != 'NULL' UNION SELECT ID, NAME, FATHER, INFO FROM ARTICLES;",
    "GET_PARAMETERS_QUERY" => "SELECT * FROM PARAMETERS;",
    "GET_PUBLIC_PARAMETERS_QUERY" => "SELECT * FROM PARAMETERS WHERE PRIVACY = 'PUBLIC';",
    "GET_A_PARAMETER_QUERY" => "SELECT * FROM PARAMETERS WHERE PARAM_NAME = :0;",
    "GET_MESSAGES_QUERY" => "SELECT * FROM MESSAGES;",
    "GET_PUBLIC_MESSAGES_QUERY" => "SELECT * FROM MESSAGES WHERE PRIVACY = 'PUBLIC';",
    "GET_A_MESSAGE_QUERY" => "SELECT * FROM MESSAGES WHERE MSG_NAME = :0;",
    "GET_USER_QUERY" => "SELECT * FROM USERS WHERE NAME = :0 AND PASS = :1",
    "GET_BLOCKS_AND_PARAMETERS" => "SELECT * FROM Blocks_Parameters UNION SELECT * FROM Blocks ORDER BY BLOCK_ID, BLOCK_NAME DESC;",
    "REGISTER_ACCES_QUERY" => "INSERT INTO Access(username, pass_hash, user_rol, last_acces) VALUES(:0, :1, :2, CURRENT_TIMESTAMP);",
    "DELETE_ALL_Users_QUERY" => "DELETE FROM Access WHERE user_rol != 10;",
    "CHECK_ACCES_OPERATION" => "SELECT * FROM Access WHERE username = :0 AND user_rol = :1",
    "GET_ACCESS_QUERY" => "SELECT username, user_rol, SUBSTR(pass_hash, LENGTH(pass_hash) - 4), last_acces FROM Access;",
    "UPDATE_LAST_ACCESS" => "UPDATE Access SET last_acces = CURRENT_TIMESTAMP WHERE username = :0 AND user_rol = :1;"


));
$o_RestAPI->Set_OPERATIONS_Functions(array(


    "DELETE_ALL_Users_OPERATION" => function () {
        
        if($ret = CRestAPI::Get_Session_Object()->Is_User_Logged(CRestAPI::GetConstants()->CODE('ROL', 'SUPERUSER'))
         == CConstants::GALSAN_OK){

            $Results = CRestAPI::Get_BBDD_CONECTION()->ExecuteQuery("DELETE_ALL_Users_QUERY", array());

            echo CRestAPI::GetConstants()->CODE('GALSAN', 'OK'); //Devolvemos success

        }else{ 

            echo CRestAPI::GetConstants()->CODE('API', 'SUPERUSER_REQUIRED');

        }

    },


    "CHECK_SESSION" => function () {
        
        if($ret = CRestAPI::Get_Session_Object()->Is_User_Logged(CRestAPI::GetConstants()->CODE('LOGIN', 'ADMIN'))
         == CConstants::GALSAN_OK){

            $Results = CRestAPI::Get_BBDD_CONECTION()->ExecuteQuery("GET_ACCESS_QUERY", array());

            echo json_encode($Results);

        }else{  //Error case: we return the specific: Error to Front

            echo json_encode($ret);

        }

    },

    "GET_ALL_ACCESS_OPERATION" => function () {
        
        if($ret = CRestAPI::Get_Session_Object()->Is_User_Logged(CRestAPI::GetConstants()->CODE('LOGIN', 'ADMIN'))
         == CConstants::GALSAN_OK){


        $Results = CRestAPI::Get_BBDD_CONECTION()->ExecuteQuery("GET_ACCESS_QUERY", array());

        echo json_encode($Results);

        }else{  //Error case: we return the specific: Error to Front

        echo json_encode($ret);

        }

    },


    "REGISTER_ACCES_OPERATION" => function ($NAME = "NOTSET", $PASS = "NOTSET", $ROL = CConstants::ROL_USER) {


        $NAME = isset($_POST['NAME']) == true ? ($_POST['NAME']) :  $NAME;
        $PASS = isset($_POST['PASS']) == true ? ($_POST['PASS']) :  $PASS;
        $ROL = isset($_POST['ROL']) == true ? ($_POST['ROL']) :  $ROL;

        $HASH = CRestAPI::Get_Seguridad_Server()->hash_message($PASS);

        //$HASH = CRestAPI::Get_Seguridad_Server()->If_Pass_Need_Rehash($PASS, $HASH);

        if (CRestAPI::Get_BBDD_CONECTION()->ExecuteQuery("REGISTER_ACCES_QUERY", array($NAME, $HASH, $ROL))) {

           echo CRestAPI::GetConstants()->CODE('LOGIN', 'USER_REGISTER_KO');

        } else {

           echo CRestAPI::GetConstants()->CODE('LOGIN', 'USER_REGISTER_OK');

        }
    },

    "REGISTER_SUPERUSER_OPERATION" => function ($NAME = "NOTSET", $PASS = "NOTSET", $ROL = "NOTSET") {


        $NAME = isset($_POST['NAME']) == true ? ($_POST['NAME']) :  $NAME;
        $PASS = isset($_POST['PASS']) == true ? ($_POST['PASS']) :  $PASS;
        $ROL = CRestAPI::GetConstants()->CODE('ROL', 'SUPERUSER');

        $HASH = CRestAPI::Get_Seguridad_Server()->hash_message($PASS);

        //$HASH = CRestAPI::Get_Seguridad_Server()->If_Pass_Need_Rehash($PASS, $HASH);

        if (CRestAPI::Get_BBDD_CONECTION()->ExecuteQuery("REGISTER_ACCES_QUERY", array($NAME, $HASH, $ROL))) {

           echo CRestAPI::GetConstants()->CODE('LOGIN', 'USER_REGISTER_KO');

        } else {

           echo CRestAPI::GetConstants()->CODE('LOGIN', 'USER_REGISTER_OK');

        }
    },

    "Request_API_Token_Access" => function ($NAME = "NOTSET", $PASS = "NOTSET", $ROL = CConstants::ROL_USER) {

        $NAME = isset($_POST['NAME']) == true ? ($_POST['NAME']) :  $NAME;
        $PASS = isset($_POST['PASS']) == true ? ($_POST['PASS']) :  $PASS;
        $ROL = CRestAPI::GetConstants()->CODE('ROL', 'AUTHORIZED_API_CLIENT');

        $HASH = CRestAPI::Get_Seguridad_Server()->hash_message($PASS);

        //$HASH = CRestAPI::Get_Seguridad_Server()->If_Pass_Need_Rehash($PASS, $HASH);

        if (CRestAPI::Get_BBDD_CONECTION()->ExecuteQuery("REGISTER_ACCES_QUERY", array($NAME, $HASH, $ROL))) {

           echo CRestAPI::GetConstants()->CODE('LOGIN', 'USER_REGISTER_KO');

        } else {

           echo CRestAPI::GetConstants()->CODE('LOGIN', 'USER_REGISTER_OK');

        }

    },

    "LOG_USER_OPERATION" => function ($NAME = "NOTSET", $PASS = "NOTSET", $ROL = CConstants::ROL_USER) {

        
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
                
                echo CRestAPI::GetConstants()->CODE('GALSAN', 'OK'); //Devolvemos success
                
            }else{

                echo CRestAPI::GetConstants()->CODE('LOGIN', 'USER_PASS_INCORRECT');

            }

        }else{

            echo CRestAPI::GetConstants()->CODE('LOGIN', 'USER_NOT_FOUND');
            
        }

    },


    "CHECK_LOGIN_AS_OPERATION" => function () {

        $ROL = isset($_POST['ROL']) == true ? ($_POST['ROL']) :  $ROL;

        if($ret = CRestAPI::Get_Session_Object()->Is_User_Logged($ROL) == CConstants::GALSAN_OK){

            echo CRestAPI::GetConstants()->CODE('LOGIN', 'LOGIN_USER_LOGGED_OK');


         }else{

            echo CRestAPI::GetConstants()->CODE('LOGIN', 'LOGIN_ERR_USER_NOT_LOGGED');

         }
    },

    "CHANGE_PASS_ACCES_OPERATION" => function () {

        //Si nos viene por GET, no lo cogemos del argumento, sino sí
        $NAME = "Peprgrgito";
        $PASS = "HASH";
        $ROL = "Pringao";
        
        $Results = CRestAPI::Get_BBDD_CONECTION()->ExecuteQuery("REGISTER_ACCES_QUERY", array($NAME, $PASS, $ROL));

        echo $Results;
    },

    "CHANGE_USERNAME_ACCES_OPERATION" => function () {

        //Si nos viene por GET, no lo cogemos del argumento, sino sí
        $NAME = "Pepito";
        $PASS = "HASH";
        $ROL = "Pringao";
        
        $Results = CRestAPI::Get_BBDD_CONECTION()->ExecuteQuery("REGISTER_ACCES_QUERY", array($NAME, $PASS, $ROL));

        echo $Results;
    },

    "DO_LOGIN_OPERATION" => function () {

        //Si nos viene por GET, no lo cogemos del argumento, sino sí
        $NAME = isset($_POST['NAME']) == true ? ($_POST['NAME']) : exit;
        $PASS = isset($_POST['PASS']) == true ? ($_POST['PASS']) : exit;
        
        $RET = 0; //0 no login 1 login correct

        $Results = CRestAPI::Get_BBDD_CONECTION()->ExecuteQuery("GET_USER_QUERY", array($NAME, $PASS));

       if(count($Results) == 1){ //Si el encontrmaos el unico usuario que buscamos..

        CRestAPI::Get_Session_Object()->Logged_User($Results[0]["NAME"]);
        $RET = 1;
        }

        echo $RET;
    },
));


$o_RestAPI->CommandListener();
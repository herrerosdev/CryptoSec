<?php
require_once './config.php';
require_once HEGALPA_ROOT_PATH . 'resources/inc/GALSAN_SERVER/CRestAPI.php';
require_once HEGALPA_ROOT_PATH . 'resources/inc/Hegalpa/CReporters.php';
require_once HEGALPA_ROOT_PATH . 'resources/inc/Hegalpa/CSolutionINFO.php';


$o_RestAPI = new CRestAPI();
$o_RestAPI->InitServerSessions();
//$o_RestAPI->Create_SQLiteBD_CONECTION(HEGALPA_ROOT_PATH . "resources/data/PaulCVV.db");
$o_RestAPI->Create_SQLiteBD_CONECTION(HEGALPA_ROOT_PATH . "resources/data/" . CSolutionINFO::$PROJECT_SchemaBD_NAME);
$o_RestAPI->Create_Seguridad_Server();
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
    "CHECK_ACCES_OPERATION" => "SELECT * FROM Access WHERE username = :0 AND user_rol = :1",
    "GET_ACCESS_QUERY" => "SELECT username, user_rol, SUBSTR(pass_hash, LENGTH(pass_hash) - 4), last_acces FROM Access;",
    "UPDATE_LAST_ACCESS" => "UPDATE Access SET last_acces = CURRENT_TIMESTAMP WHERE username = :0 AND user_rol = :1;"


));
$o_RestAPI->Set_OPERATIONS_Functions(array(

    "GET_ALL_ACCESS_OPERATION" => function () {
        
        if($ret = CRestAPI::Get_Session_Object()->Is_User_Logged(CConstants::ROL_ADMIN) == CConstants::GALSAN_OK){


        $Results = CRestAPI::Get_BBDD_CONECTION()->ExecuteQuery("GET_ACCESS_QUERY", array());

        echo json_encode($Results);

        }else{  //Error case: we return the specific: Error to Front

        echo json_encode($ret);

        }

    },


    "REGISTER_ACCES_OPERATION" => function ($NAME = "NOTSET", $PASS = "NOTSET", $ROL = CConstants::ROL_USER) {
        CRestAPI::Get_LogTraces_Server()->LogTrace(__LINE__ . ": Init REGISTER_ACCES_OPERATION");


        $NAME = isset($_POST['NAME']) == true ? ($_POST['NAME']) :  $NAME;
        $PASS = isset($_POST['PASS']) == true ? ($_POST['PASS']) :  $PASS;
        $ROL = isset($_POST['ROL']) == true ? ($_POST['ROL']) :  $ROL;

        $HASH = CRestAPI::Get_Seguridad_Server()->hash_message($PASS);

        //$HASH = CRestAPI::Get_Seguridad_Server()->If_Pass_Need_Rehash($PASS, $HASH);

        if (CRestAPI::Get_BBDD_CONECTION()->ExecuteQuery("REGISTER_ACCES_QUERY", array($NAME, $HASH, $ROL))) {

            echo CConstants::USER_REGISTER_KO;

        } else {

            echo CConstants::USER_REGISTER_OK;

        }

    },

    "CHECK_ACCES_OPERATION" => function ($NAME = "NOTSET", $PASS = "NOTSET", $ROL = CConstants::ROL_USER) {

        CRestAPI::Get_LogTraces_Server()->LogTrace(__LINE__ . ": Init CHECK_ACCES_OPERATION");
        CRestAPI::Get_LogTraces_Server()->LogTrace(__LINE__ . ": Init CHECK_ACCES_OPERATION");


        $NAME = isset($_POST['NAME']) == true ? ($_POST['NAME']) :  $NAME;
        $PASS = isset($_POST['PASS']) == true ? ($_POST['PASS']) :  $PASS;
        $ROL = isset($_POST['ROL']) == true ? ($_POST['ROL']) :  $ROL;
        
        
        $Results = CRestAPI::Get_BBDD_CONECTION()->ExecuteQuery("CHECK_ACCES_OPERATION", array($NAME, $ROL));

        //Si hemos encontrado el único usuario que buscamos Y si la contraseña coincide...
        if(count($Results) == 1){
        
            if(CRestAPI::Get_Seguridad_Server()->verify_pass($PASS, $Results[0]["pass_hash"])){ //Comparamos para comprobar que la pass sea correcta
                
                CRestAPI::Get_BBDD_CONECTION()->ExecuteQuery("UPDATE_LAST_ACCESS", array($NAME, $ROL)); //Update date of last acces 

                CRestAPI::Get_Session_Object()->Logged_User($Results[0]["username"], $Results[0]["user_rol"]); //Do Login on server
                
                echo CConstants::GALSAN_OK;

            }else{

                echo CConstants::USER_PASS_INCORRECT;

            }

        }else{

            echo CConstants::USER_NOT_FOUND;

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
    "GET_A_MESSAGE_OPERATION" => function ($MSG_NAME, $IDIOM = "") {

        //Si nos viene por GET, no lo cogemos del argumento, sino sí
        $MSG_NAME = isset($_GET["MSG_NAME"]) == true ? ($_GET["MSG_NAME"]) : $MSG_NAME;

        $Results = CRestAPI::Get_BBDD_CONECTION()->ExecuteQuery("GET_A_MESSAGE_QUERY", array($MSG_NAME));

        echo $Results[0]["TEXT"]; //Encode JSON->String. Decode String->JSON
        //return $Results[0];

        //exit;

    },

    "GET_A_PARAMETER_OPERATION" => function ($PARAM_NAME, $IDIOM = "") {

        //Si nos viene por GET, no lo cogemos del argumento, sino sí
        //$PARAM_NAME = isset($_GET["PARAM_NAME"]) == true ? ($_GET["PARAM_NAME"]) : $PARAM_NAME;

        $Results = CRestAPI::Get_BBDD_CONECTION()->ExecuteQuery("GET_A_PARAMETER_QUERY", array($PARAM_NAME));

        echo $Results[0]["VALUE"]; //Encode JSON->String. Decode String->JSON
        //return $Results[0];

        //exit;

    },
    "GET_MESSAGES_OPERATION" => function () {

        $Results = CRestAPI::Get_BBDD_CONECTION()->ExecuteQuery("GET_MESSAGES_QUERY", array());

        echo json_encode($Results); //Encode JSON->String. Decode String->JSON
        //return $Results[0];
        //exit;

    },

    "GET_PUBLIC_MESSAGES_OPERATION" => function () {

        $Results = CRestAPI::Get_BBDD_CONECTION()->ExecuteQuery("GET_PUBLIC_MESSAGES_QUERY", array());

        echo json_encode($Results); //Encode JSON->String. Decode String->JSON
        //return $Results[0];
        //exit;

    },
    "GET_PARAMETERS_OPERATION" => function () {

        $Results = CRestAPI::Get_BBDD_CONECTION()->ExecuteQuery("GET_PARAMETERS_QUERY", array());

        echo json_encode($Results); //Encode JSON->String. Decode String->JSON
        //return $Results[0];
        //exit;

    },
    "GET_PUBLIC_PARAMETERS_OPERATION" => function () {
        CRestAPI::Get_LogTraces_Server()->LogTrace(__LINE__ . ": Init GET_PUBLIC_PARAMETERS_OPERATION");


        $Results = CRestAPI::Get_BBDD_CONECTION()->ExecuteQuery("GET_PUBLIC_PARAMETERS_QUERY", array());


        //CRestAPI::Get_LogTraces_Server()->LogTrace(__LINE__ . ": RESULTS QUERY =  " . $Results);

        echo json_encode($Results); //Encode JSON->String. Decode String->JSON

        CRestAPI::Get_LogTraces_Server()->LogTrace(__LINE__ . ": End GET_PUBLIC_PARAMETERS_OPERATION");


    },
    "GET_BLOCKS_AND_PARAMETERS_OPERATION" => function () {

        CRestAPI::Get_LogTraces_Server()->LogTrace(__LINE__ . ": Init GET_BLOCKS_AND_PARAMETERS_OPERATION");

        //CRestAPI::Get_Session_Object()->Check_Only_Logged_Users();

        $Results = CRestAPI::Get_BBDD_CONECTION()->ExecuteQuery("GET_BLOCKS_AND_PARAMETERS", array());

        CRestAPI::Get_LogTraces_Server()->LogTrace(__LINE__ . ": RESULTS QUERY =  " . json_encode($Results));

        echo json_encode($Results);

        CRestAPI::Get_LogTraces_Server()->LogTrace(__LINE__ . ": End GET_BLOCKS_AND_PARAMETERS_OPERATION");
    },
    "UPLOAD_IMG_OPERATION" => function () {

        if (isset($_SESSION['Username']) && $_SESSION['Logged_in'] == true) {

            $photo = $_FILES['file'];
            $name = $_POST['name'];

            $ID_UNIQUE = rand(0, 9999);

            CRestAPI::Get_Image_Server()->Upload_image_WM($photo, $ID_UNIQUE);

            $result = CRestAPI::Get_BBDD_CONECTION()->ExecuteQuery("ADD_PHOTO_QUERY", array($ID_UNIQUE . "COMPRESSED_" . $photo['name'])); //Obtiene los elementos de la pagina

        } else {

            echo "Error. Inicie sesión";
        }
    },
    "GET_PAGE_OPERATION" => function () {


        $Page_index = $_POST["PageIndex"];
        $Page_tam = $_POST["PageTam"];

        $Offset = $Page_index * $Page_tam;

        /*         echo $Offset;
        echo  $Page_tam; */

        $Results = CRestAPI::Get_BBDD_CONECTION()->ExecuteQuery("GET_PAGE_QUERY", array($Page_tam, $Offset));

        echo json_encode($Results); //Encode JSON->String. Decode String->JSON
    },
    "COUNT_IMGs_OPERATION" =>  function () {

        $Results = CRestAPI::Get_BBDD_CONECTION()->ExecuteQuery("COUNT_IMGs_QUERY");

        echo json_encode($Results[0]);
    },
    "DO_ORDER_OPERATION" =>  function () {

        $ShoppingCar_Products_serialized = $_POST["ShoppingCar_Products"];
        $Order_name = $_POST["Order_name"];
        $Order_mail = $_POST["Order_mail"];
        $Order_phonenum = $_POST["Order_phonenum"];

        $ShoppingCar_Products = json_decode($ShoppingCar_Products_serialized); //Encode JSON->String. Decode String->JSON

        $Message = ""; //Declare message to send (email) string

        $Message .= 'Datos cliente: ' . "\n";
        $Message .= 'Nombre: ' . $Order_name . "\n";
        $Message .= 'Mail: ' . $Order_mail . "\n";
        $Message .= 'Tlf: ' . $Order_phonenum . "\n";

        foreach ($ShoppingCar_Products as $product) {

            $Message .= 'Producto ID: ' . $product->ID . ' Formato: ' .  $product->TYPE . ' Precio: ' . $product->PRICE . '€' . ' Cantidad: ' . $product->LOT . "\n";
        }

        CRestAPI::Get_Mail_Server()->Set_Email_Message($Message);
        CRestAPI::Get_Mail_Server()->SendMail();
    },
));
$o_RestAPI->CommandListener();
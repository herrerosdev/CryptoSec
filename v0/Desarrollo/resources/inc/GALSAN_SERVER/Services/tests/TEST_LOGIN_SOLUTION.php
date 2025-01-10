<?php 
require_once PATH_DEFINES_FILE;
require_once HEGALPA_ROOT_PATH . 'resources/inc/GALSAN_SERVER/Services/LOGIN_SOLUTION.php';
require_once HEGALPA_ROOT_PATH . 'resources/inc/GALSAN_SERVER/CTest.php';
require_once HEGALPA_ROOT_PATH . 'resources/inc/GALSAN_SERVER/CTraces.php';
require_once PATH_SEGURIDAD_CLASS;
require_once PATH_SESSION_CLASS;


$Cons_o = CConstants::getInstance();
$TestLogin_Service = new CTest("SERVICE LOGIN SOLUTION TESTS");

//"https://login.bitbugtheory.es"
CTest::$EndPoint = 'localhost';


$TestLogin_Service->Set_Test_Functions(

    [

        "TEST: DELETE ALL Users WithOut SuperUser" => [
            
            'Function' => function () {

                $Test = new LOGIN_SOLUTION();

                return $Test->DELETE_ALL_Users_OPERATION(
                    array(), 
                    CTest::$EndPoint
                    );
                }, 


            'SUCCESS_RESULT' => $Cons_o->CODE('API', 'SUPERUSER_REQUIRED'), 
            'POSSIBLE_RESULTS' => ARRAY($Cons_o->CODE('GALSAN', 'OK')),
        ],

        "TEST: Register SUPERUSER" => [
            
            'Function' => function () {

                $Test = new LOGIN_SOLUTION();

                return $Test->REGISTER_SUPERUSER_OPERATION(
                    array(
                    'NAME' => 'SUPERUSER', 
                    'PASS' => CSeguridad::getInstance()->HASH('sha256', 'SUPERUSER'),
                    ),

                    CTest::$EndPoint
                );
            }, 


            'SUCCESS_RESULT' => $Cons_o->CODE('LOGIN', 'USER_REGISTER_OK'), 
            'POSSIBLE_RESULTS' => ARRAY($Cons_o->CODE('LOGIN', 'USER_REGISTER_KO')),
        ],


        "Logging with SUPERUSER" => [
            
            'Function' => function () {

                $Test = new LOGIN_SOLUTION();

                return $Test->LOG_USER_OPERATION(
                    array('NAME' => 'SUPERUSER', 
                    'PASS' => CSeguridad::getInstance()->HASH('sha256', 'SUPERUSER'),
                    'ROL' => CConstants::getInstance()->CODE('ROL', 'SUPERUSER'),
                    ), 
                    CTest::$EndPoint

                );

            }, 

            
            'SUCCESS_RESULT' => $Cons_o->CODE('GALSAN', 'OK'), 
            'POSSIBLE_RESULTS' => ARRAY($Cons_o->CODE('LOGIN', 'USER_PASS_INCORRECT'), $Cons_o->CODE('LOGIN', 'USER_NOT_FOUND')),
        ],

        "Delete ALL USER With SuperUser Logged" => [
            
            'Function' => function () {

                $Test = new LOGIN_SOLUTION();

                return $Test->DELETE_ALL_Users_OPERATION(
                    array(), 
                    CTest::$EndPoint
                    );
            }, 


            'SUCCESS_RESULT' => $Cons_o->CODE('GALSAN', 'OK'),
            'POSSIBLE_RESULTS' => ARRAY($Cons_o->CODE('API', 'SUPERUSER_REQUIRED')), 
        ],


        "TEST: Register User John Doe (ROL: USER)" => [
            
            'Function' => function () {

            $Test = new LOGIN_SOLUTION();

            return $Test->REGISTER_ACCES_OPERATION(
                array('NAME' => 'John Doe', 
                'PASS' => CSeguridad::getInstance()->HASH('sha256', 'PassWORD123'),
                'ROL' => CConstants::getInstance()->CODE('ROL', 'USER')), 
                //"https://login.bitbugtheory.es"
                "localhost"
                );
            }, 


            'SUCCESS_RESULT' => $Cons_o->CODE('LOGIN', 'USER_REGISTER_OK'), 
            'POSSIBLE_RESULTS' => ARRAY($Cons_o->CODE('LOGIN', 'USER_REGISTER_KO')),
        ],



        "Logging with John Doe (ROL: USER)" => [
            
            'Function' => function () {

                $Test = new LOGIN_SOLUTION();

                return $Test->LOG_USER_OPERATION(
                    array('NAME' => 'John Doe', 
                    'PASS' => CSeguridad::getInstance()->HASH('sha256', 'PassWORD123'),
                    'ROL' => CConstants::getInstance()->CODE('ROL', 'USER'),
                    ), 
                    CTest::$EndPoint

                );

            }, 

            
            'SUCCESS_RESULT' => $Cons_o->CODE('GALSAN', 'OK'), 
            'POSSIBLE_RESULTS' => ARRAY($Cons_o->CODE('LOGIN', 'USER_PASS_INCORRECT'), $Cons_o->CODE('LOGIN', 'USER_NOT_FOUND')),
        ],



        "Check if I am Logged as USER ROL" => [
            
            'Function' => function () {

            $Test = new LOGIN_SOLUTION();

            return $Test->CHECK_LOGIN_AS_OPERATION(
                array('ROL' => CConstants::getInstance()->CODE('ROL', 'USER')), 
                //"https://login.bitbugtheory.es"
                "localhost"
                );
            }, 


            'SUCCESS_RESULT' => $Cons_o->CODE('LOGIN', 'USER_LOGGED_OK'), 
            'POSSIBLE_RESULTS' => ARRAY($Cons_o->CODE('LOGIN', 'ERR_USER_NOT_LOGGED')),
        ],
    ],

);

$TestLogin_Service->Execute_TestSet();


?>
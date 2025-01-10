<?php 
require_once PATH_DEFINES_FILE;
require_once HEGALPA_ROOT_PATH . 'resources/inc/GALSAN_SERVER/CTraces.php';
require_once HEGALPA_ROOT_PATH . 'resources/inc/GALSAN_SERVER/CCOM.php';
require_once HEGALPA_ROOT_PATH . 'resources/inc/GALSAN_SERVER/CAPIs.php';

class LOGIN_SOLUTION
{

    private $CTraces;


    function __construct()
    {
        $this->CTraces = new CTraces(CTraces::PRINT_FILE);
    }

    public function REGISTER_ACCES_OPERATION($Data = array(), $URL_EndPoint = "./index.php")
    {

        $Data['OPERATION'] = 'REGISTER_ACCES_OPERATION';

        
        $CURL_Params = array(
            CURLOPT_URL            => $URL_EndPoint,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_POST           => true,
            CURLOPT_POSTFIELDS => http_build_query($Data), //array('postvar1' => 'value1')
            CURLOPT_COOKIESESSION   => true,
        );


        return CCOM::CURL_Petition($CURL_Params);
    }

    public function LOG_USER_OPERATION($Data = array(), $URL_EndPoint = "./index.php")
    {

        $this->CTraces->LogTrace(CTraces::LEVEL_INFO, "LOG_USER_OPERATION", __FILE__, __FUNCTION__, __LINE__);
        
        $Data['OPERATION'] = 'LOG_USER_OPERATION';


        $useragent = $_SERVER['HTTP_USER_AGENT'];
        $strCookie = 'PHPSESSID=' . $_COOKIE['PHPSESSID'] . '; path=/';
       
       session_write_close();

        $CURL_Params = array(
            CURLOPT_URL            => $URL_EndPoint,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_POST           => true,
            CURLOPT_POSTFIELDS => http_build_query($Data), //array('postvar1' => 'value1')
            CURLOPT_COOKIESESSION   => true,
            //CURLOPT_COOKIEJAR       => PATH_ROOT_FOLDER . '/tmp/cookies/'. session_id()  .'.txt', // Guarda las cookies
            //CURLOPT_COOKIEFILE      => PATH_ROOT_FOLDER . '/tmp/cookies/'. session_id()  .'.txt',
            CURLOPT_USERAGENT       => $useragent,
            CURLOPT_COOKIE          => $strCookie,

        );

        return CCOM::CURL_Petition($CURL_Params);
    
    }


    public function DELETE_ALL_Users_OPERATION($Data = array(), $URL_EndPoint = "./index.php")
    {
    
        $this->CTraces->LogTrace(CTraces::LEVEL_INFO, "DELETE_ALL_Users_OPERATION", __FILE__, __FUNCTION__, __LINE__);
                
        $Data['OPERATION'] = 'DELETE_ALL_Users_OPERATION';

        $useragent = $_SERVER['HTTP_USER_AGENT'];
        $strCookie = 'PHPSESSID=' . $_COOKIE['PHPSESSID'] . '; path=/';
       
       session_write_close();

        $CURL_Params = array(
            CURLOPT_URL            => $URL_EndPoint,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_POST           => true,
            CURLOPT_POSTFIELDS => http_build_query($Data), //array('postvar1' => 'value1')
            CURLOPT_COOKIESESSION   => true,
            //CURLOPT_COOKIEFILE      => PATH_ROOT_FOLDER . '/tmp/cookies/'. session_id()  .'.txt',
            CURLOPT_USERAGENT       => $useragent,
            CURLOPT_COOKIE          => $strCookie,

        );

        return CCOM::CURL_Petition($CURL_Params);
    }

    public function REGISTER_SUPERUSER_OPERATION($Data = array(), $URL_EndPoint = "./index.php")
    {
    
        $this->CTraces->LogTrace(CTraces::LEVEL_INFO, "REGISTER_SUPERUSER_OPERATION", __FILE__, __FUNCTION__, __LINE__);
        
        $Data['OPERATION'] = 'REGISTER_SUPERUSER_OPERATION';


        $CURL_Params = array(
            CURLOPT_URL            => $URL_EndPoint,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_POST           => true,
            CURLOPT_POSTFIELDS => http_build_query($Data), //array('postvar1' => 'value1')
            CURLOPT_COOKIESESSION   => true,
        );


        return CCOM::CURL_Petition($CURL_Params);
    }


    public function CHECK_LOGIN_AS_OPERATION($Data = array(), $URL_EndPoint = "./index.php")
    {
    
        $this->CTraces->LogTrace(CTraces::LEVEL_INFO, "CHECK_LOGIN_AS_OPERATION", __FILE__, __FUNCTION__, __LINE__);
        
        $Data['OPERATION'] = 'CHECK_LOGIN_AS_OPERATION';

        $useragent = $_SERVER['HTTP_USER_AGENT'];
        $strCookie = 'PHPSESSID=' . $_COOKIE['PHPSESSID'] . '; path=/';


        $CURL_Params = array(
            CURLOPT_URL            => $URL_EndPoint,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_POST           => true,
            CURLOPT_POSTFIELDS => http_build_query($Data), //array('postvar1' => 'value1')
            CURLOPT_COOKIESESSION   => true,
            CURLOPT_USERAGENT       => $useragent,
            CURLOPT_COOKIE          => $strCookie,
        );




        return CCOM::CURL_Petition($CURL_Params);
    }

}

?>
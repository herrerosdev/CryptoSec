<?php

class CCOM{


static function Response2Client($Response){

echo $Response;

exit;
}


static function CURL_Petition($CURL_Params)
{
    $ch = curl_init();

 /*    CTraces::getInstance(CTraces::PRINT_FILE)->
    LogTrace(CTraces::LEVEL_INFO, "CURL Petition Data (to $EndPoint): " . print_r($POSTData, true) . "/ Http_build_query: " . http_build_query($POSTData), __FILE__, __FUNCTION__, __LINE__);

    CTraces::getInstance()->
    LogTrace(CTraces::LEVEL_INFO, "EndPoint CURLOPT_URL:" . $EndPoint, __FILE__, __FUNCTION__, __LINE__);


 */

    curl_setopt_array($ch, $CURL_Params);

    // Executa Curl Petition ...
    $server_output = curl_exec($ch);

    CTraces::getInstance()->
    LogTrace(CTraces::LEVEL_INFO, "Server_output: " . $server_output, __FILE__, __FUNCTION__, __LINE__);
    
    curl_close($ch);
    
    // Further processing ...
    return $server_output;
}


}

?>
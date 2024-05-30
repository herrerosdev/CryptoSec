<?php 
define('HEGALPA_ROOT_Complete_PATH', $_SERVER['DOCUMENT_ROOT']);
$substrHegalpa = substr(HEGALPA_ROOT_Complete_PATH, 0, -11);
define('HEGALPA_ROOT_PATH', $substrHegalpa);
define('QUERY_PATH', 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js');
define('HEGALPA_DOCUMENT_LogsLocal_PATH', HEGALPA_ROOT_Complete_PATH . '/MellitusForum/logs/');
define('HEGALPA_DOCUMENT_LogsProd_PATH', HEGALPA_ROOT_Complete_PATH . '/logs/');
?>
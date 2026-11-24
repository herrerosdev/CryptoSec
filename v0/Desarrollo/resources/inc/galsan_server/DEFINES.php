<?php 

//======================================================================
// DEFINES: Uses for paths
//======================================================================


//-----------------------------------------------------
// OLD: PReserve for avoid problems (solved in future )
//-----------------------------------------------------

define('HEGALPA_ROOT_PATH', dirname($_SERVER['DOCUMENT_ROOT']) . '/');

define('QUERY_PATH', 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js');
define('HEGALPA_DOCUMENT_LogsLocal_PATH', HEGALPA_ROOT_PATH . 'public_html/MellitusForum/logs/');
define('HEGALPA_DOCUMENT_LogsProd_PATH', HEGALPA_ROOT_PATH . 'public_html/logs/');

//-----------------------------------------------------
// PATHs
//-----------------------------------------------------

define('PATH_ROOT_FOLDER', dirname($_SERVER['DOCUMENT_ROOT']) . '/');

    define('PATH_PUBLIC_FOLDER', PATH_ROOT_FOLDER . 'public_html/');

    define('PATH_PRIVATE_FOLDER', PATH_ROOT_FOLDER . 'resources/');
        define('PATH_INCLUDES_FOLDER', PATH_PRIVATE_FOLDER . 'inc/');
            define('PATH_GALSAN_SERVER_FOLDER', PATH_INCLUDES_FOLDER . 'galsan_server/');
                define('PATH_SEGURIDAD_CLASS', PATH_GALSAN_SERVER_FOLDER . 'CSeguridad.php');
                define('PATH_TEST_CLASS', PATH_GALSAN_SERVER_FOLDER . 'CTest.php');
                define('PATH_TRACES_CLASS', PATH_GALSAN_SERVER_FOLDER . 'CTraces.php');
                define('PATH_SESSION_CLASS', PATH_GALSAN_SERVER_FOLDER . 'CSession.php');
                define('PATH_CRestAPI_CLASS', PATH_GALSAN_SERVER_FOLDER . 'CRestAPI.php');



                define('PATH_DEFINES_FILE', PATH_GALSAN_SERVER_FOLDER . 'DEFINES.php');
        
        define('PATH_TESTs_REPORTS_FOLDER', PATH_PRIVATE_FOLDER . 'test_reports/');

    define('PATH_REPORTS_FOLDER', PATH_ROOT_FOLDER . '/reports/');
        define('PATH_LOGS_FOLDER', PATH_REPORTS_FOLDER . 'logs/');
        define('PATH_TESTS_FOLDER', PATH_REPORTS_FOLDER . 'tests/');


//-----------------------------------------------------
// Class names Better iterate dinamically the directory and check the real names of files´?
//-----------------------------------------------------
//-----------------------------------------------------
// PROJECT DETECTION (AUTOMATIC FROM DOMAIN)
//-----------------------------------------------------

// 1. Obtener el host actual (ej: "hegalpa.com", "www.hegalpa.es" o "localhost")
$host = isset($_SERVER['HTTP_HOST']) ? $_SERVER['HTTP_HOST'] : 'default';
$host = str_replace('www.', '', $host);

$partesDominio = explode('.', $host);
$nombreDetectado = $partesDominio[0];

// 2. CONTROL ESTRICTO PARA LOCALHOST
// Si estás en localhost, forzamos que busque la carpeta raíz del proyecto (ej: /Hegalpa/index.php)
if ($nombreDetectado === 'localhost') {
        $nombreDetectado = 'Hegalpa';
}

// 3. Asegurar formato limpio (Primera letra Mayúscula y resto minúsculas)
$projectNameFinal = ucfirst(strtolower($nombreDetectado));

// 4. Definimos tu constante global
define('APP_PROJECT_NAME', $projectNameFinal);

// --- Rutas de Assets basadas en tu DEFINES.php ---
define('PATH_ASSETS_UPLOAD_FOLDER', PATH_PUBLIC_FOLDER . 'assets/' . APP_PROJECT_NAME . '/');
define('URL_ASSETS_PUBLIC_BASE', '/assets/' . APP_PROJECT_NAME . '/');

?>
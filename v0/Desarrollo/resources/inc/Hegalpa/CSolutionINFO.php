<?php
require_once './config.php';
require_once HEGALPA_ROOT_PATH . 'resources/inc/GALSAN_SERVER/CConstants.php';
require_once HEGALPA_ROOT_PATH . 'resources/inc/GALSAN_SERVER/CUtils.php';

//Stadistics reporters
class CSolutionINFO
{

    private $o_BBDD_CONECTION_;
    static $PROJECT_SchemaBD_NAME = "NULL";

    function __construct()
    {
        CTraces::getInstance()->LogTrace(__LINE__ . ": Init CSolutionINFO Class");

        //Open connection with Hegalpa MySql BBDD and chargue neccesary queries
        $this->o_BBDD_CONECTION_ = new CBBDD_MySQL(CConstants::$MySQL_SERVER_DIR, CConstants::$MySQL_HEGALPA_DB_NAME, CConstants::$MySQL_USER, CConstants::$MySQL_door);

        $this->o_BBDD_CONECTION_->SetQueriesArray(array(
            "GET_SchemaBD_QUERY" => "SELECT BD_SCHEMA FROM ACTIVE_SOLUTIONS WHERE DOMAIN = :0",
        ));

        $this->Get_SchemaBD_NAME();

        CSolutionINFO::$PROJECT_SchemaBD_NAME =  $this->Get_SchemaBD_NAME();
    }

    function Get_SchemaBD_NAME(){

        CTraces::getInstance()->LogTrace(__LINE__ . ": Init GetSchemaBB Functions");

        $result = $this->o_BBDD_CONECTION_->ExecuteQuery("GET_SchemaBD_QUERY", array(preg_replace('#^www\.|$#', '', CUtils::Get_Domain_Name()))); //Mockear aqui para probar en desarrollo

        CTraces::getInstance()->LogTrace(__LINE__ . ": SchemaBD_Name Getted = " .  $result[0]["BD_SCHEMA"]);

        return $result[0]["BD_SCHEMA"];
    }

}

$CSolutionINFO = new CSolutionINFO();
?>
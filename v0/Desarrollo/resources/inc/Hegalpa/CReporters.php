<?php
require_once './config.php';
require_once HEGALPA_ROOT_PATH . 'resources/inc/Hegalpa/CSolutionINFO.php';

//Stadistics reporters
class CHegalpaReporters
{

    private $o_BBDD_CONECTION_;


    function __construct()
    {
        CTraces::getInstance()->LogTrace(__LINE__ . ": Init CReporters Class");

        //Open connection with Hegalpa MySql BBDD and chargue neccesary queries
        $this->o_BBDD_CONECTION_ = new CBBDD_MySQL(CConstants::$MySQL_SERVER_DIR, CConstants::$MySQL_HEGALPA_DB_NAME, CConstants::$MySQL_USER, CConstants::$MySQL_door);

        $this->o_BBDD_CONECTION_->SetQueriesArray(array(
            "REGISTER_VISIT_QUERY" => "INSERT INTO Visitas (Project, Page, IP, DATE) VALUES(:0, :1, :2, NOW());",
        ));

    }

    function Register_Visit($Page_Name){

        CTraces::getInstance()->LogTrace(__LINE__ . ": Init Register Visit Functions");

        $this->o_BBDD_CONECTION_->ExecuteQuery("REGISTER_VISIT_QUERY", array(CUtils::Get_Domain_Name(), $Page_Name, CSession::Get_Session_IP()));

    }


}

$CHegalpaReporters_o = new CHegalpaReporters();
?>
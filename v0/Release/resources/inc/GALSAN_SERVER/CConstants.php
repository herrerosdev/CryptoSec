<?php
require_once 'CUtils.php';
/* require_once 'Hegalpa/CSolutionINFO.php';
 */
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Constantes: Hay que cambiar hacia donde apunta cada vez que cambiemos de enviroment. Por ejemplo de desarrollo a produccion////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class CConstants {

static $PROJECT_DOMAIN_NAME = "PaulBlackSmiths.es";
static $PROJECT_SchemaBD_NAME = "NULL";

static $MySQL_SERVER_DIR = "146.59.197.28"; //Dirección del server MySQL

////////////////////////////////////////////////////////////////////
///////////////////// DATA BASE NAME ///////////////////////////////
////////////////////////////////////////////////////////////////////

static $MySQL_HEGALPA_DB_NAME = "HegalpaBD"; //TESTS
//static $MySQL_HEGALPA_DB_NAME = "MellitusForum";  //PRODUCTION


static $MySQL_USER= "PabloHEGALPA";

static $MySQL_door= "Informatica124**";


/////////////////////////////////////////////////////////////////////
/////////////IDENTIFICADOR DEL ROL DE CADA USUARIO //////////////////
/////////////////////////////////////////////////////////////////////
static $USER_ROL =  Array("ADMIN"=> 2, "CLIENT" => 1);


//0 
//400 hacia delante e
const ERR_USER_NOT_LOGGED = "500";
const ERR_USER_NOT_VERIFIED = "501";

}

/* CConstants::$PROJECT_DOMAIN_NAME = CUtils::Get_Domain_Name();
CConstants::$PROJECT_SchemaBD_NAME = $CSolutionINFO->Get_SchemaBD_NAME(); */

?>
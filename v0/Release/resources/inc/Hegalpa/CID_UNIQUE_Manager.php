<?php

class CID_UNIQUE_Manager 
{

    protected $o_Biblioteca;
    

    ////////////////////////////////////////////////////////////
    /////////////////////   VARIABLES/Atributos  //////////////
    //////////////////////////////////////////////////////////

    private $path; //Atributo privado, solo puede ser modificado por metodos de la propia clase.


    /////////////////////////////////////////////////////////
    ///////////////////  METODOS DE LA CLASE  //////////////
    ///////////////////////////////////////////////////////


    //////////////////////// CONSTRUCTOR /////////////////
    ///abrimos conexion con bbdd
    function __construct()
    {
        $this->o_Biblioteca = new CBBDD_MySQL(CConstants::$MySQL_SERVER_DIR, CConstants::$MySQL_HEGALPA_DB_NAME, "PabloHEGALPA", "Informatica124**");
        $this->o_Biblioteca->SetQueriesArray(array(
            "AddTOKEN_QUERY" => "INSERT INTO Tokens_table (TOKEN, t_Status) VALUES (:0,:1)",
            "DeleteTOKEN_QUERY" => "DELETE FROM Tokens_table WHERE TOKEN LIKE :0",
            "FreeTOKEN_QUERY" => "UPDATE Tokens_table SET t_Status = 'FREE', Concept = :1 WHERE TOKEN = :0",
            "TakeTOKEN_QUERY" => "UPDATE Tokens_table SET t_Status = 'TAKEN', Concept = :1 WHERE TOKEN = :0",
            "GetFreeTOKEN_QUERY" => "SELECT TOKEN FROM Tokens_table WHERE t_Status = 'FREE' LIMIT 1"
        ));
    }




     public function GetFreeTOKEN($CONCEPT)
    {
            $data = $this->o_Biblioteca->ExecuteQuery("GetFreeTOKEN_QUERY"); //Busca un token que este libre y lo devuelve
             
            
            foreach ($data as $row) {
                 $this->o_Biblioteca->ExecuteQuery("TakeTOKEN_QUERY", array($row['TOKEN'], $CONCEPT));
                 return $row['TOKEN'];
                
             
            }
         

    }


    public function FreeTOKEN($TOKEN)
    {

        $this->o_Biblioteca->ExecuteQuery("FreeTOKEN_QUERY", array($TOKEN, NULL)); //Libera una ID para ser usado

    }
    



}
/* $o_Biblio = new CID_UNIQUE_Manager();
$o_Biblio->FreeTOKEN(2);
 */

///////
//herencia de clases
//privadas: estas variables/metodos solo pueden ser accedidas por los metodos de la clase en la que se definen
//no se heredan a las clases hijas por lo tanto no se puede acceder a ellas mediante las clases hijas a 
//diferencia de las variables y metodos protegidas.

//variables y metodos protected: al igual que en las variables/metodos privados no se puede acceder a ellos desde
//fuera de las clases, pero a diferencia de los privados SI se heredan a las clases hijas.

//variables y metodos publicos: se puede acceder a ellos desde cualquier sitio y se heredan a las clases hijas.
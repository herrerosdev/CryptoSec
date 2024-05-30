<?php

/* include_once 'CConstans.php';*/
//Requires habilite PDO extension on PHP.ini for mysqlite and mysql etc..

/////////////////////////////////////////////////////////////////////////////////////////
///////LAS BIBLIOTECAS CORRESPONDEN A LAS BASES DE DATOS DE NUESTRO SISTEMA ////////////
///////////////////////////////////////////////////////////////////////////////////////

class CBIBLIOTECA_BBDD
{

    ///////////////////////
    //VARIABLES DE CLASE///
    //////////////////////

    protected $queries_array_ = false; //ADD Queries here to save it
    protected $path_ = false; //Path Where BBDD is stored
    protected $PDO_BBDD_Connection_; //BD object: Connecction object

    ///////////////////////
    ////METODOS DE CLASE///
    ///////////////////////

    //Constructor 
    function __construct()
    {
        CTraces::getInstance()->LogTrace(__LINE__ . ": Init BBDD Father Class");

    }

    //Getters and Setters
    public function SetPath($path)
    {
        $this->path_ = $path;
    }

    public function SetQueriesArray($queries_array)
    {

        $this->queries_array_ =  $queries_array;
    }

    public function AddQuery($key, $query)
    {

        $this->queries_array_[$key] = $query;
    }

    public function ExecuteQuery($Query_Key, $ParamsVector = array())
    {

        try {
            CTraces::getInstance()->LogTrace(__LINE__ . " " ."Query Key: ". $Query_Key);
            CTraces::getInstance()->LogTrace(__LINE__ . " " ."Query Before treatment: ". $this->queries_array_[$Query_Key]);
            /*              
            echo "Key Query $Query_Key \n";
            echo "Query:  ".$this->queries_array_[$Query_Key]."\n";
             */

            //TODO:: CHECK IF QUERY EXIST in ARRAY
            //Prepare Stament
            $stm = $this->PDO_BBDD_Connection_->prepare($this->queries_array_[$Query_Key]);


            //Sustitute params on statement
            foreach ($ParamsVector as $key => $value) {
                $stm->bindValue(':' . $key, trim($value));
            }

            CTraces::getInstance()->LogTrace(__LINE__ . " " ."Query after treatment: ". $stm->queryString);

            //Execute query
            $stm->execute();

            //Return result if would be
            return $stm->fetchAll();
        } catch (Exception $e) {
            ///TODO: OPEN BBDD by PATH
            echo 'Error: ';
            echo $e->getMessage();
            die();
        }
    }
};


class CBBDD_SQLite extends CBIBLIOTECA_BBDD
{


    public function __construct($path)
    {

        CTraces::getInstance()->LogTrace(__LINE__ . ": Init BBDD SQLite Class");

        try {
            /* echo "BD path $path\n"; */
            $this->path_ = $path;

            //Nos conectamos a nuestra base de datos a través de una conexion PDO 
            $this->PDO_BBDD_Connection_ = new PDO("sqlite:$path");
            //echo $this->PDO_BBDD_Connection_;
            $this->PDO_BBDD_Connection_->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (Exception $e) {
            echo 'Error: ';
            echo $e->getMessage();
            die();
        }
    }
}


class CBBDD_MySQL extends CBIBLIOTECA_BBDD
{

    ///////////////////////
    //VARIABLES DE CLASE///
    //////////////////////

    private $host_; //Direccion del servidor MySQL
    private $db_;  //Nombre de la base de datos dentro del servidor MySQL
    private $user_; // User to access to MySQL data base SERVER
    private $password_; //User password

    public function __construct($host, $db, $user, $password)
    {

        CTraces::getInstance()->LogTrace(__LINE__ . ": Init BBDD MySQL Class");

        $dsn = "mysql:host=$host;dbname=$db;charset=UTF8";

        try {
            $this->PDO_BBDD_Connection_ = new PDO($dsn, $user, $password);
            $this->PDO_BBDD_Connection_->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

            if (!$this->PDO_BBDD_Connection_) {
                echo "ERROR: Connected to the $db database unsuccessfully!";
            }
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
    }
}

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
        CTraces::getInstance()->LogTrace(CTraces::LEVEL_INFO, ": Init BBDD Father Class",
        __FILE__, __FUNCTION__, __LINE__); 
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

       public function beginTransaction() {
 
        return $this->PDO_BBDD_Connection_->beginTransaction();
    }

    public function commit() {
        if (!$this->PDO_BBDD_Connection_) return false;
        return $this->PDO_BBDD_Connection_->commit();
    }

    public function rollBack() {
        if (!$this->PDO_BBDD_Connection_) return false;
        return $this->PDO_BBDD_Connection_->rollBack();
    }

    public function lastInsertRowID() {
    if ($this->PDO_BBDD_Connection_) {
        return $this->PDO_BBDD_Connection_->lastInsertId(); 
    }
    return 0;
}
public function lastErrorMsg() {
    if ($this->PDO_BBDD_Connection_) {
        $errorInfo = $this->PDO_BBDD_Connection_->errorInfo();
        return $errorInfo[2]; // El mensaje de error está en el índice 2
    }
    return 0;
}


    public function ExecuteQuery($Query_Key, $ParamsVector = array(), $Options = PDO::FETCH_BOTH)
    {

        try {

            CTraces::getInstance()->LogTrace(CTraces::LEVEL_INFO, "Query Key: ". $Query_Key,
                
            __FILE__, __FUNCTION__, __LINE__); 
            
            CTraces::getInstance()->LogTrace(CTraces::LEVEL_INFO, "Query Before treatment: ". $this->queries_array_[$Query_Key],
                
            __FILE__, __FUNCTION__, __LINE__); 
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

            CTraces::getInstance()->LogTrace(CTraces::LEVEL_INFO, "Query after treatment: ". $stm->queryString,
                
            __FILE__, __FUNCTION__, __LINE__); 
            //Execute query
            $stm->execute();

            $affected = $stm->rowCount();

            CTraces::getInstance()->LogTrace(CTraces::LEVEL_INFO, "Query rows affected: ". $affected,
                
            __FILE__, __FUNCTION__, __LINE__); 
       

            //Return result if would be
            return $stm->fetchAll($Options);   
        } catch (Exception $e) {
            ///TODO: OPEN BBDD by PATH
            CTraces::getInstance()->LogTrace(CTraces::LEVEL_INFO, "Error: " . $e->getMessage(),
                
            __FILE__, __FUNCTION__, __LINE__); 
            return "Error: " . $e->getMessage();
            die();
        }
    }
};


class CBBDD_SQLite extends CBIBLIOTECA_BBDD
{


    public function __construct($path)
    {

        CTraces::getInstance()->LogTrace(CTraces::LEVEL_INFO, ": Init BBDD SQLite Class",
        __FILE__, __FUNCTION__, __LINE__); 

        try {
            /* echo "BD path $path\n"; */
            $this->path_ = $path;


            //Nos conectamos a nuestra base de datos a través de una conexion PDO 
            $this->PDO_BBDD_Connection_ = new PDO("sqlite:$path");


            //echo $this->PDO_BBDD_Connection_;
            $this->PDO_BBDD_Connection_->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->PDO_BBDD_Connection_->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
            $this->PDO_BBDD_Connection_->setAttribute(PDO::ATTR_STRINGIFY_FETCHES, false);

        } catch (Exception $e) {
        
            CTraces::getInstance()->LogTrace(CTraces::LEVEL_INFO, "Error: " . $e->getMessage(),
            __FILE__, __FUNCTION__, __LINE__); 
            return "Error: " . $e->getMessage();
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

        CTraces::getInstance()->LogTrace(CTraces::LEVEL_INFO, ": Init BBDD MySQL Class",
        __FILE__, __FUNCTION__, __LINE__); 

        $dsn = "mysql:host=$host;dbname=$db;charset=UTF8";

        try {
            $this->PDO_BBDD_Connection_ = new PDO($dsn, $user, $password);
            $this->PDO_BBDD_Connection_->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

            if (!$this->PDO_BBDD_Connection_) {
                echo "ERROR: Connected to the $db database unsuccessfully!";
            }
        } catch (PDOException $e) {
            CTraces::getInstance()->LogTrace(CTraces::LEVEL_INFO, "Error: " . $e->getMessage(),
            __FILE__, __FUNCTION__, __LINE__); 
            return "Error: " . $e->getMessage();
        }
    }
}

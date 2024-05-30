
<?php


///////////////////////////////////////////////////////////////////////////////////////////////////////
//LAS ADUANAS CONTROLAN TODAS LAS PETICIONES (ENTRADAS DE DATOS) QUE SE HACEN A NUESTRO SISTEMA
// ELLAS ACEPTAN A RECHAZAN LA PETICION EN FUNCIÓN DE SI CUMPLE LA SEGURIDAD O NO 
// TODO LO QUE ENTRE AL SERVIDOR TIENE QUE PASAR POR LAS ADUANAS!!!!!!!
///////////////////////////////////////////////////////////////////////////////////////////////////////

// **** LLamaos indistintamente operaciones y comandos por igual

class CADUANAS_COMMANDS_RECEIVER
{

    private $Comando_; //Comando asociado a una operacion, se guardará en esta variable
    private $Data_; //Datos asociados al comando, se guardarán en esta variable


    //Solo aceptamos las operaciones/comandos incluidas/os aqui
    private $ListaOperaciones_  = array();


    ////////////////////////////////////////////////////////////
    //////////////////////////CONSTRUCTORS/////////////////////
    //////////////////////////////////////////////////////////

    function __CADUANAS_COMMANDS_RECEIVER($ListaOperaciones)
    {
        $this->ListaOperaciones_ = $ListaOperaciones;
    }

    //GETTERS AND SETTERS
    public function SetCommand($Comando)
    {
        $this->Comando_ = $Comando;
    }

    public function SetData($Data)
    {
        $this->Data_ = $Data;
    }

    public function Validator()
    {
        if ($this->OperationValidator() && $this->DataValidator()) {

            return true;
        } else {

            return false;
        }
    }


    private function OperationValidator()
    {
        //TODO: HACER LAS COMPROBACIONES NECESARIAS PARA ACEPTAR LOS DATOS
        //1 Comprobar que las operaciones estan la lista de operaciones permitidas

        return true;
    }

    private function DataValidator()
    {


        //TODO: HACER LAS COMPROBACIONES NECESARIAS PARA ACEPTAR LOS DATOS
        //PASARLE LAS EXPRESIONES REGULARES NECESARIAS PARA EVITAR CUALQUIER ATAQUE/VULNERABILIDAD
        return true;
    }
};


?>
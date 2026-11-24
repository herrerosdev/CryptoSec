<?php
require_once PATH_DEFINES_FILE;
require_once 'CTraces.php';
require_once 'CConstants.php';

class CTest
{

    private $CTraces_o = false;

    public $a_OPERATIONS_Functions_ = false;

    static public $EndPoint = false;

    function __construct($Name_TestSet = "New Group of Tests")
    {

        $this->CTraces_o = new CTraces(CTraces::PRINT_FILE | CTraces::PRINT_ECHO);
        $this->CTraces_o->setPath(PATH_TESTS_FOLDER);

        
        $this->CTraces_o->LogTrace(CTraces::LEVEL_INFO, $Name_TestSet, __FILE__, __FUNCTION__, __LINE__);
    }


    public function Execute_TestSet()
    {
        $Counter = 0; //Number the tests to facilitate their analysis


        foreach ($this->a_OPERATIONS_Functions_ as $Test_Name => $Test) {
            $this->CTraces_o->LogTrace(CTraces::LEVEL_SEPARATOR, "Start Test", __FILE__, __FUNCTION__, __LINE__);


            $this->CTraces_o->LogTrace(CTraces::LEVEL_TEXT, "Executing Test #". $Counter++ . " [" . $Test_Name . "]\n", __FILE__, __FUNCTION__, __LINE__);

            //Execute test And Check Results
            $Result = $Test['Function']();



            $this->CTraces_o->LogTrace(CTraces::LEVEL_TEXT, "EXPECTED RESULT = " . $Test['SUCCESS_RESULT'] . 
            " (" . array_search($Test['SUCCESS_RESULT'], CConstants::getInstance()->getCodes()) . ")\n", __FILE__, __FUNCTION__, __LINE__);


            $this->CTraces_o->LogTrace(CTraces::LEVEL_TEXT, "TEST EXECUTION RESULT = " . $Result .
             " (" . array_search($Result, CConstants::getInstance()->getCodes()) . ")\n\n",
              __FILE__, __FUNCTION__, __LINE__);


            $this->CTraces_o->LogTrace(CTraces::LEVEL_TEXT, "Conclusion:", __FILE__, __FUNCTION__, __LINE__);


            if($Result == $Test['SUCCESS_RESULT']){

                $this->CTraces_o->LogTrace(CTraces::LEVEL_TEXT, "SUCCESS (EXPECTED RESULT)", __FILE__, __FUNCTION__, __LINE__);

            } 
            else if(in_array($Result, $Test['POSSIBLE_RESULTS'])){

                $this->CTraces_o->LogTrace(CTraces::LEVEL_TEXT, "FAILURE (UNEXPECTED BUT KNOWED RESULT)", __FILE__, __FUNCTION__, __LINE__);

            } else{

                $this->CTraces_o->LogTrace(CTraces::LEVEL_TEXT, "CRITICAL FAILURE (UNEXPECTED AND UNKNOWED RESULT)", __FILE__, __FUNCTION__, __LINE__);

            }
            $this->CTraces_o->LogTrace(CTraces::LEVEL_SEPARATOR, "End Test", __FILE__, __FUNCTION__, __LINE__);

        }

    }

    public function Get_Test_Functions()
    {
        return $this->a_OPERATIONS_Functions_;
    }

    public function Set_Test_Functions($a_OPERATIONS_Functions)
    {
        $this->a_OPERATIONS_Functions_ = $a_OPERATIONS_Functions;
    }

}


?>
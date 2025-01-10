<?php

/////////////////////////////////////////////////////////////////////////////////////////
///////Aqui se hayan todas las funcionalidades de seguridad del sistema     ////////////
///////////////////////////////////////////////////////////////////////////////////////


class CMailManager
{

    //////////////////////////////////////
    /////////Constructor /////////////////
    //////////////////////////////////////
    private $To_; //Send Mail To...
    private $From_;
    private $Subject_;
    private $Message_;

    //////////////////////////////////////
    /////////Constructor /////////////////
    //////////////////////////////////////
    function __construct($From = "", $To = "", $Subject = "", $Message = "")
    {
        $this->From_ = $From;
        $this->To_ = $To;
        $this->Subject_ = $Subject;
        $this->Message_ = $Message;
    }
    //////////////////////////////////////
    /////////Class Methods ///////////////
    //////////////////////////////////////

    function SendMail()
    {
        mail($this->To_, $this->Subject_, $this->Message_, "From: $this->From_" . "\r\n" . "Reply-To: $this->From_" . "\r\n" . 'X-Mailer: PHP/' . phpversion() . "\r\n" . 'MIME-Version: 1.0' . "\r\n" . 'Content-type: text/html; charset=iso-8859-1' . "\r\n");
    }

    /*     public function SendQuick_MAIL($QuickName)
    {
        mail($this->to, $this->subject, $this->message, $this->headers);
    } */

    //////////////////////////////////////
    /////////Getters&Setters /////////////
    //////////////////////////////////////

    function Get_Email_To()
    {
        return $this->To_;
    }

    function Set_Email_To($To)
    {

        $this->To_ = $To;
    }

    function Get_Email_From()
    {
        return $this->From_;
    }

    function Set_Email_From($From)
    {

        $this->From_ = $From;
    }

    function Get_Email_Subject()
    {
        return $this->Subject_;
    }

    function Set_Email_Subject($Subject)
    {

        $this->Subject_ = $Subject;
    }

    function Get_Email_Message()
    {
        return $this->Message_;
    }

    function Set_Email_Message($Message)
    {

        $this->Message_ = $Message;
    }
};


/* $o_mailTest = new CCorrespondencia_MailManager("HerrerosGPa@hegalpa.es", "hegalpainfo@gmail.com", "Asunto", "Mensaje.....");

$o_mailTest->SendMail(); */

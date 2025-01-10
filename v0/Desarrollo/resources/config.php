<?php 

//======================================================================
// CONFIG Structure: For global configuration
//======================================================================


//-----------------------------------------------------
// CONFIG: Traces
//-----------------------------------------------------
        

    /* Traces level MASK */

    # BIT 1 Print FILE
    # BIT 2 Print by ECHO

$CONFIG['CTraces']['SuperBITMASK_Printing_Modes'] = 0b0000011; //By Default allowed FILE and ECHO but in PRODUCTION Better only FILE
$CONFIG['CTraces']['SuperBITMASK_Printing_Modes'] = 0b0000011; //By Default allowed FILE and ECHO but in PRODUCTION Better only FILE


//-----------------------------------------------------
// CONFIG: Login_SOLUTION
//-----------------------------------------------------


return $CONFIG
?>
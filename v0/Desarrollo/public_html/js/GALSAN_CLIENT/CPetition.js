//Requires JQuery Include...
//<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>


/* Escta clase encapsula las principlaes interfaces de comunicacion web y aplica una primera barrera de seguridad web
Controlando el numero de peticiones / tiempo
y los textos maliciosos
 */

class CPetition {
    ////////////////
    //CONSTRUCTOR///
    ////////////////
    constructor() {}

    ///////////
    //METHODS//
    ///////////
    static Petitions = 0; //Number of petitions launched on this sesion
    static Time_Init = 0; //Time first petition
    static Time_Last = 0; //Time second petition
    static Time_Lapse = 0; //Diference between first and second petitions
    static Time_Lapse_Limit = 1000 //Minimun time between both petitions accepted (1000ms =One second)


    //JQuery
    static $Ajax_PETITION(_url = "", formdata = new FormData(), _type = "POST", async_ = false) {
        
        if(CPetition.WhatDogPetitions()==false){ //Limit petitions exceded
            CUtils.sleep(CPetition.Time_Lapse_Limit); //Wait for a limit time between petition setted
        } 
        
            return CUtils.RemoveSpaces($.ajax({
               type: _type,
                url: _url,

                processData: false,
                contentType: false,

                async: async_,
                data: formdata,

                success: function(response) {
                    alert(response);
                    console.log(response);
                },
                
                error: function(response) {
                    alert(response);
                    console.log(response);
                },
            }).responseText);

    }

//Esta funcion calcula el intervalo de tiempo que transcurre entre las dos ultimas peticiones
//Si este es menor al tiempo limite se hace esperar a la peticion lo que dure el tiempo limite 
//para asi espaciar mas las peticiones y sobrecargar menos el servidor
    static WhatDogPetitions(){

        var Result = false
        CPetition.Petitions++; //Petition detected: Increase of number of petitions launched

        if(CPetition.Petitions == 1){ //If is the first petition...
            
            CPetition.Time_Init = Date.now();
            Result = true;

        }else{
            CPetition.Time_Last = Date.now();
            CPetition.Time_lapse =  CPetition.Time_Last - CPetition.Time_Init; //Time Lapse between last petition and this petition


            //alert(`Time Init: ${CPetition.Time_Init}`)
            //alert(`Time Last: ${CPetition.Time_Last}`)
            //alert(`Time Lapse between last petition and this petition: ${CPetition.Time_lapse} ms`)
            
            if(CPetition.Time_lapse > CPetition.Time_Lapse_Limit){

            //alert(`Time Lapse between two petitions ${CPetition.Time_lapse} more than ${CPetition.Time_Lapse_Limit} ms OK`)   
                Result = true;

            }else{

            //alert(`Time Lapse between two petitions ${CPetition.Time_lapse} less than ${CPetition.Time_Lapse_Limit} ms KO`)   
                Result = false;
            }

            //Gett it again to not altered value real with alerts messages
            CPetition.Time_Init = Date.now(); //Prepare Time init for the next petition
        }

        return Result;
    };


    ///Funcion que crea un canal Cifrado punto a punto

    static SecureChannel(milliseconds) {

      }
      
}
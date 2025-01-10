class CAPIs {

    static Send_Operation_Command(Operation = "INFO_API_OPERATION", Parameters = {}, EndPoint = "./index.php") {

              //ajax api session
              var form_data = new FormData();
              form_data.append("OPERATION", Operation);

              for( var key in Parameters )  //Key is the parameter name and Parameters[key] the value  
              form_data.append(key, Parameters[key]);

        return CPetition.$Ajax_PETITION(EndPoint, form_data)
    }
}

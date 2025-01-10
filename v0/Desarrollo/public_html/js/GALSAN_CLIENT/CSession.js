//CLASE CLOGIN Se usara para hacer logins de forma segura

class CSession {

  constructor() {

    this.API_Token = 346;
  }
  
   static DoLogin(UserName, PASS, TwoFA = "", EndPoint = "./index.php", NextStep = "./welcome.php"){     //Set callback Button login
        //ajax api session
        var form_data = new FormData();
  
        form_data.append("OPERATION", "DO_LOGIN_OPERATION");
/*         form_data.append("NAME", LoginPaul.GetName());
        form_data.append("PASS", LoginPaul.GetPass());
         */
        form_data.append("NAME", UserName);
        form_data.append("PASS", PASS);

        let TextResp = CPetition.$Ajax_PETITION(EndPoint, form_data)
  
        //let TextResp = CUtils.RemoveSpaces(Response_o.responseText);
  
        if(TextResp == "1"){
          window.location.href = NextStep;
        }else{
          //ShowFail on login..
        }
    
    }

    static GALSAN_Register(UserName, Pass, RepeatPass, rol = 0, EndPoint = "index.php"){

              if(!(Pass === RepeatPass))
              return -1

              let hash_pass = CSecurity.Hash_sha256(Pass)
              alert(hash_pass)
              let TextResp = CAPIs.Send_Operation_Command("REGISTER_ACCES_OPERATION", {"NAME": UserName, "PASS":hash_pass, "ROL":rol});

              return TextResp;
    }


    static GALSAN_DoLogin(UserName, PASS, ROL, TwoFA = "", EndPoint = "./index.php", NextStep = "./welcome.php"){     //Set callback Button login

      let hash_pass = CSecurity.Hash_sha256(PASS);

      let TextResp = CAPIs.Send_Operation_Command("CHECK_ACCES_OPERATION", {"NAME": UserName, "PASS":hash_pass, "ROL":ROL});

      if(TextResp == "1"){
        window.location.href = NextStep;
      }else{
        //ShowFail on login..
      }
  
  }

}
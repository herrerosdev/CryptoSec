class CConstants {


          /* = {
      "cType_Text": "0000",
      "cType_Img": "0001",
      "cType_Title": "0002"
      ...
    } */

    static Parameters = {
        "cType_Text": "0000",
        "cType_Img": "0001",
        "cType_Title": "0002",
        "ROL_USER": "1",
        "ROL_ADMIN": "2"
      };
  
      static Messages = {
        "MSG_FootterRight": "Mellitus Forum es una comunidad online impulsada por y para diabétic@s, y para cualquier persona que desee visibilizar o concienciarse aprendiendo sobre esta enfermedad tan condicionante.",
        "MSG_PassDontMath": "Las contraseñas no coinciden",
        "MSG_PopUp_Anti_AddBlock": "Le recomendamos desactivar su bloqueador de anuncios para mejorar su experiencia y colaborar con la web, gracias."
      };
  
  
    ///////////////////////////////PATHs
    ///////////////////////////////APIs
    static API_AreaPersonal = null;
    static API_Carrousel_Encuestas_Flip = "./index.php";
    static API_Carrousel_Images = null;
    static API_Create_Post = null;
    static API_Espacios = null;
    static API_HeaderMenuItems = "./index.php";
    static API_Hilo = null;
    static API_Login = "./index.php";
    static API_Table = "./index.php";
  
    ///////////////////////////////Messages
    ///////////////////////////////
  
    static MSG_No_Register = "Inicia sesión o regístrate para poder participar";
    static MSG_Register_Question = "¿Desea registrarse ahora?";
    static MSG_Log_In = "Inicia sesión";
    static MSG_Register = "Regístrate";
    static MSG_Page_Title = "Mellitus Forum";
    static MSG_Page_Subtitle = "Foro y comunidad de diabetes"
    static MSG_PopUp_Title_INFO  = "Información";
    static MSG_PopUp_Register_Needed = "Necesitas estar registrado para realizar esta acción"
  
    //////////////////////////Link_pages
    static PAGE_Productos = "./productos.php";
    static PAGE_Index = "./index.php";
  

    /* = {
      "cType_Text": "0000",
      "cType_Img": "0001",
      "cType_Title": "0002"
      ...
    } */

    static Parameters = [];
    static Messages = [];


    //PARSED PARAMETES PROCEDET_N FROM BBDD
    static GetBBDD_Parameters(Recived_Parameters) {
        for (let i = 0; i < Recived_Parameters.length; i++)
            CConstants.Parameters[Recived_Parameters[i].PARAM_NAME] = Recived_Parameters[i].VALUE;
    }

    //PARSED PARAMETES PROCEDET_N FROM BBDD
    static GetBBDD_Messages(Recived_Messages) {
        for (let i = 0; i < Recived_Messages.length; i++)
            CConstants.Messages[Recived_Messages[i].MSG_NAME] = Recived_Messages[i].TEXT;
    }
}
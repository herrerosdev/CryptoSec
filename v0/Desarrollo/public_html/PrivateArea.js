/*!
 * Language
 * Declare the root class
 * \class Language
 */

/*!
 * definitions is a property in the Language class
 * \property Definitions Definitions
 */

/*!
 * Document the Definitions static class that used as property in the Language class
 * \Class Definitions
 */

/*!
 * Replaces strings
 * Document the static method for the Definitions class
 * \fn string replaceStrings(translation, parameters)
 * \memberof Definitions
 * \param string translation Translation string
 * \param array parameters (optional) List of parameters
 * \return string replaced string
 */

class PageManager {
  //Singleton Class
  static SingletonInstance = null;

  /*
  @brief hola
*/

  static GetInstance() {
    if (PageManager.SingletonInstance == null) {
      PageManager.SingletonInstance = new PageManager();
    }

    return PageManager.SingletonIsntance;
  }

  constructor(Title, Subtitle, Photo) {
    
  let Header = new HeaderLandingIT("https://drive.hegalpa.es/hegalpa%20paginas%20web%20informatica.png", "Hegalpa", "https://drive.hegalpa.es/hegalpa%20paginas%20web%20informatica.png");


  var PopupContents =   [
    {
        "Type": POPUP_Dynamic.Type_Title,
        "Name": "Registro",
        "Action_CallBack": ""
    },

    {
      "Type": POPUP_Dynamic.Type_Input_Text,
      "Name": "Username",
      "Action_CallBack": ""
    },

    {
      "Type": POPUP_Dynamic.Type_Input_Text_PassWord,
      "Name": "Password",
      "Action_CallBack": ""
    },

    {
      "Type": POPUP_Dynamic.Type_Input_Text_PassWord,
      "Name": "Repeat password",
      "Action_CallBack": ""
    },

    {
      "Type": POPUP_Dynamic.Type_Button,
      "Name": "OK",
      "Action_CallBack": function(){CSession.GALSAN_Register(POPUP_Dynamic.GetValue("Username"), POPUP_Dynamic.GetValue("Password"), POPUP_Dynamic.GetValue("Repeat password"), 0)}
    }
  ]

   let DinamicPop_Up =  new POPUP_Dynamic(PopupContents);



   let RegisterButton = new Button_AtulPrajapati();

   // RegisterButton.addButton(Text, link = -1, _function = -1, Style_Button = 1) {

   RegisterButton.addButton("Registrar Usuario", -1, "POPUP_Dynamic.ShowLoginFADE()");


   let Phrase = new SimpleOneLineFoot("Usuario Registrados");

   let Tabla_Registros = new CBlock_ModernTable("Usuario Registrados", 4);

   Tabla_Registros.CreateColumn("Username");
   Tabla_Registros.CreateColumn("PassHash");
   Tabla_Registros.CreateColumn("Rol");
   Tabla_Registros.CreateColumn("Last");

   var reuslt = JSON.parse(CAPIs.Send_Operation_Command("GET_ALL_ACCESS_OPERATION"));

   for(let i = 0; i < reuslt.length; i++)
    Tabla_Registros.AddRow(reuslt[i].username, reuslt[i][2] /*Last 5 hash digits*/, reuslt[i].user_rol, reuslt[i].last_acces)


    Phrase = new SimpleOneLineFoot("Usuarios conectados");
   
    Tabla_Registros = new CBlock_ModernTable("Usuarios conectados", 4);
  
    Tabla_Registros.CreateColumn("Username");
    Tabla_Registros.CreateColumn("PassHash");
    Tabla_Registros.CreateColumn("Rol");
    Tabla_Registros.CreateColumn("Last");
  
    reuslt = JSON.parse(CAPIs.Send_Operation_Command("GET_ALL_ACCESS_OPERATION"));
  
    for(let i = 0; i < reuslt.length; i++)
    Tabla_Registros.AddRow(reuslt[i].username, reuslt[i][2], reuslt[i].user_rol, reuslt[i].last_acces)
  

  }




  

}

var o_loader_block = new LoaderPaul();

$(window).on("load", function () {
  PageManager.GetInstance();
  CUtils.sleep(2000);
  o_loader_block.HideLoader();
});

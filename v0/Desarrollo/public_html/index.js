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
    
    let login = new POPUP_Login(
      "Acceso",
      "username",
      "password",
      "Entrar",
      "Ayuda",
      "",
      POPUP_Login.StartShow,
      function(){CSession.GALSAN_DoLogin(POPUP_Login.GetName(), POPUP_Login.GetPass(), 99, "", "./index.php", "./PrivateArea.php")}
    );

    POPUP_Login.ShowLoginFADE();


    let RegisterButton = new Button_AtulPrajapati();


  }
}

var o_loader_block = new LoaderPaul();

$(window).on("load", function () {
  PageManager.GetInstance();
  CUtils.sleep(2000);
  o_loader_block.HideLoader();
});

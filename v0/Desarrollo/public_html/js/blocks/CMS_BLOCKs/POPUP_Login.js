class POPUP_Login {
  constructor(Params , StartMode = POPUP_Login.StartShow, LoginButton_CALLBACK = function(){CSession.DoLogin(POPUP_Login.GetName(), POPUP_Login.GetPass())}) {

    //CallBack to signed css properties with name of the class
    this.CreateElement_ = GALSAN_CreateBlock.CreateElementSigned;
    this.add_CSS_Class = GALSAN_CreateBlock.add_CSS_Class_SIGNED;

    this.Title_ = Params.Title;
    this.userNameText_ = Params.userNameText;
    this.passText_ = Params.passText;
    this.Text_Button_ = Params.Text_Button;
    this.Text_AuxLink_ = Params.Text_AuxLink;
    this.Delay_ = Params.Delay;
    this.Action_AuxLink_ = Params.Action_AuxLink;
    this.PrincipalContainerElement = null;
    this.LoginButton_CALLBACK_ = LoginButton_CALLBACK;
    //Create View: Dynamic HTMLL CSS: Node
    this.CreateView();

    POPUP_Login.HideLogin()
  }

  static FLAG_BlockHidden = false; //Mientras esta variable este activa la funciona hide login no tiene efecto

  static StartHidden = "1"
  static StartShow = "0"
  ////////////////////////////
  ///////CreateView//////////
  //////////////////////////

  static ShowLoginFADE() {
    $(document).ready(function () {
      //$("#PrincipalContainerElement").hide();
      $("#PrincipalContainerLogin").fadeIn(1000);
    });
  }

  static HideLoginFADE() {
    if (POPUP_Login.FLAG_BlockHidden != true) {
      $(document).ready(function () {
        //$("#PrincipalContainerElement").hide();
        $("#PrincipalContainerLogin").fadeOut(1000);
      });
    } else {
      POPUP_Login.FLAG_BlockHidden = false;
    }
  }

  static HideLogin() {
    if (POPUP_Login.FLAG_BlockHidden != true) {

    $("#PrincipalContainerLogin").hide();

  } else {
    POPUP_Login.FLAG_BlockHidden = false;
  }
  }


  static GetName() {
    return document.getElementById('Name').value;
  }

  static GetPass() {
    return document.getElementById('Clave').value;
  }

  CreateView() {
    //Add fonts
    GALSAN_CreateBlock.addFont("FontHeader", this.font_);
    GALSAN_CreateBlock.addFont("FontHeader", "IndieFlower-Regular");
    GALSAN_CreateBlock.addFont("FontSubtitle", "ComicRelief");

    //Create element and associate a classes
    this.add_CSS_Class(
      `.background`,
      `
      position: fixed;
      min-height: 100vh;
      bottom: 0%;
      width: 100%;
      background-color: #46768f96;
      z-index: 999;
  
              `
    );

    this.add_CSS_Class(
      `.FormDiv`,
      `
        /* width: 40vh; */
        text-align: center;
        width: fit-content;
        height: fit-content;
        max-width: 425px;
        max-height: 485px;
        /* height: 50vh; */
        /* align-items: center; */
        background-color: #f1f1f1;
        margin: 29vh auto;
        /* text-align: center; */
        border-radius: 20px;
              `
    );

    this.add_CSS_Class(
      `.inputContainer`,
      `
      display: flex;
      flex-direction: column;
      /* margin-top: 0vh; */
      /* margin-left: 10vw; */
      padding-left: 30px;
      padding-right: 30px;
      /* margin-right: 1vw; */
      margin-bottom: 2vw;

              `
    );
    this.add_CSS_Class(
      `.input`,
      `
      margin-top: 3vh;
      width: 40vw;
      min-height: 25px;
      max-width: 200px;
      min-width: 100px;

              `
    );

    this.add_CSS_Class(
      `.TitleContainer`,
      `
        display: flex;
        flex-direction: column;
        margin-top: 3vh;
        text-align: center;
        width: 100%;

              `
    );

    this.add_CSS_Class(
      `.Title`,
      `
        font-family: FontSubtitle;
        font-family: FontSubtitle;
        font-size: 25px;


              `
    );

    this.add_CSS_Class(
      `.button`,
      `


              `
    );

    this.add_CSS_Class(
      `.RequestLogin`,
      `
        display: grid;
        margin-top: 5vh;
        padding: 2vh;
        font-size: 15px;
        margin-bottom: 99;
              `
    );

    this.PrincipalContainerElement = this.CreateElement_(
      "div",
      "background",
      null,
      GALSAN_CreateBlock.Site_Body
    );

    this.PrincipalContainerElement.onclick = function () {
      POPUP_Login.HideLoginFADE();
    }; //Cerrar login pulsando en el fondo
    this.PrincipalContainerElement.id = "PrincipalContainerLogin";

    var PopupContainer = this.CreateElement_("div", "FormDiv", null, null);

    PopupContainer.onclick = function () {
      POPUP_Login.FLAG_BlockHidden = true;
    }; //Evita que se cierre si se pulsa sobre el popup

    var TitleContainer = this.CreateElement_(
      "div",
      "TitleContainer",
      null,
      null
    );

    var Title = this.CreateElement_("p", "Title", this.Title_, null);

    var buttonlogin = this.CreateElement_("button", "button", this.Text_Button_, null);
    buttonlogin.onclick = this.LoginButton_CALLBACK_;
    var RequestLogin = this.CreateElement_(
      "a",
      "RequestLogin",
      this.Text_AuxLink_,
      null
    );

    RequestLogin.href = this.Action_AuxLink_;
    RequestLogin.target = "_blank"; // open link in anothr tab

    TitleContainer.appendChild(Title);

    PopupContainer.appendChild(TitleContainer);

    var InputsContainer = this.CreateElement_(
      "div",
      "inputContainer",
      null,
      null
    );

    var Input = this.CreateElement_("input", "input", null, null);
    Input.placeholder = this.userNameText_;
    Input.id = "Name";
    InputsContainer.appendChild(Input);

    Input = this.CreateElement_("input", "input", null, null);
    Input.placeholder = this.passText_;
    Input.id = "Clave";
    Input.type = "password"
    InputsContainer.appendChild(Input);

    PopupContainer.appendChild(InputsContainer);

    PopupContainer.appendChild(buttonlogin);

    PopupContainer.appendChild(RequestLogin);

    this.PrincipalContainerElement.appendChild(PopupContainer);


    ///POPUP_Login.HideLoginFADE();
  }
}

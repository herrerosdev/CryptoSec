CBlocks.Processor(
  [
    {
      BLOCK_NAME: "Loader_Block",
      BLOCK_PARAMS: '{ "Delay": 6000, "BackGroundColor": "#f7ebf7bf", "Num_Loader": 1, "Color": "#006d7a" }',
    }
  ],
);



let login = new POPUP_Login(
  {
    Title: "Acceso",
    userNameText: "username",
    passText: "password",
    Text_Button: "Entrar",
    Text_AuxLink: "Ayuda",
    Action_AuxLink: "hegalpa.es",
    Delay: 6000,
},
  POPUP_Login.StartShow,
  function () { CSession.GALSAN_DoLogin(POPUP_Login.GetName(), POPUP_Login.GetPass(), 10, "", "./index.php", "./PrivateArea.php") }
);

POPUP_Login.ShowLoginFADE();


let RegisterButton = new Button_AtulPrajapati();
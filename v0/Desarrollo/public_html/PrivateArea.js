CBlocks.Processor(
  [
    {
      BLOCK_NAME: "Loader_Block",
      BLOCK_PARAMS: '{ "Delay": 6000, "BackGroundColor": "#f7ebf7bf", "Num_Loader": 1, "Color": "#006d7a" }',
    }
  ],
);

var PopupContents = [
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
    "Action_CallBack": function () { CSession.GALSAN_Register(POPUP_Dynamic.GetValue("Username"), POPUP_Dynamic.GetValue("Password"), POPUP_Dynamic.GetValue("Repeat password"), 0) }
  }
]

let DinamicPop_Up = new POPUP_Dynamic(PopupContents);


let RegisterButton = new Button_AtulPrajapati();

RegisterButton.addButton(
  {
    Text: "Registrar Usuario",
    link: - 1,
    function: "POPUP_Dynamic.ShowLoginFADE()"
  }
);

let Phrase = new SimpleOneLineFoot("Usuario Registrados");

let Tabla_Registros = new CBlock_ModernTable("Usuario Registrados", 4);

Tabla_Registros.CreateColumn("Username");
Tabla_Registros.CreateColumn("PassHash");
Tabla_Registros.CreateColumn("Rol");
Tabla_Registros.CreateColumn("Last");

var reuslt = JSON.parse(CAPIs.Send_Operation_Command("GET_ALL_ACCESS_OPERATION"));

for (let i = 0; i < reuslt.length; i++)
  Tabla_Registros.AddRow(reuslt[i].username, reuslt[i][2] /*Last 5 hash digits*/, reuslt[i].user_rol, reuslt[i].last_acces)


Phrase = new SimpleOneLineFoot("Usuarios conectados");

Tabla_Registros = new CBlock_ModernTable("Usuarios conectados", 4);

Tabla_Registros.CreateColumn("Username");
Tabla_Registros.CreateColumn("PassHash");
Tabla_Registros.CreateColumn("Rol");
Tabla_Registros.CreateColumn("Last");

reuslt = JSON.parse(CAPIs.Send_Operation_Command("GET_ALL_ACCESS_OPERATION"));

for (let i = 0; i < reuslt.length; i++)
  Tabla_Registros.AddRow(reuslt[i].username, reuslt[i][2], reuslt[i].user_rol, reuslt[i].last_acces)







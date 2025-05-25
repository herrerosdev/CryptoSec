let Block_obj = CBlocks.Processor(
  [
    {
      BLOCK_NAME: "HeaderLandingIT",
      BLOCK_PARAMS: '{"Title":"yeah","Subtitle":"yeag", "Photo": "https://drive.hegalpa.es/hegalpa%20paginas%20web%20informatica.png"}',
    },


    {
      BLOCK_NAME: null,
      BLOCK_PARAMS: '{"Name":"Execute Tests","Action":"./RunTest.php "}',
    },

    {
      BLOCK_NAME: null,
      BLOCK_PARAMS: '{"Name":"Exit","Action":"https://doc.hegalpa.es/ "}',
    },

    
    {
      BLOCK_NAME: null,
      BLOCK_PARAMS: '{"Name":"General View","Action":"./index "}',
    },
    
    {
      BLOCK_NAME: null,
      BLOCK_PARAMS: '{"Name":"Main Page","Action":"./index"}',
    },
  ],
);

Block_obj = CBlocks.Processor(
  [
    {
      BLOCK_NAME: "Loader_Block",
      BLOCK_PARAMS: '{ "Delay": 6000, "BackGroundColor": "#f7ebf7bf", "Num_Loader": 1, "Color": "#006d7a" }',
    }
  ],
);

Block_obj = CBlocks.Processor(
  [
    {
      BLOCK_NAME: "POPUP",
      BLOCK_PARAMS: `[
        {
          "Type": ${POPUP.Type_PopUp_ID},
          "Name": "AddUser",
          "Action_CallBack": ""
        },
        {
          "Type": ${POPUP.Type_Title},
          "Name": "Registro",
          "Action_CallBack": ""
        },
      
        {
          "Type": ${POPUP.Type_Input_Text},
          "Name": "Username",
          "Action_CallBack": ""
        },
      
        {
          "Type": ${POPUP.Type_Input_Text_PassWord},
          "Name": "Password",
          "Action_CallBack": ""
        },
      
        {
          "Type": ${POPUP.Type_Input_Text_PassWord},
          "Name": "Repeat password",
          "Action_CallBack": ""
        },

        {
          "Type": ${POPUP.Type_Input_Text},
          "Name": "E-mail",
          "Action_CallBack": ""
        },

        {
          "Type": ${POPUP.Type_CheckBox},
          "Name": "Verification required",
          "Action_CallBack": ""
        },

        {
          "Type": ${POPUP.Type_Button},
          "Name": "OK",
          "Action_CallBack": "{let obj = new LOGIN_SOLUTION(); obj.REGISTER_USER_OPERATION({'NAME': POPUP.GetValue('Username'), 'ROL': 1, 'E-MAIL': POPUP.GetValue('E-mail'), 'PASS': POPUP.GetValue('Password')} )}"
        }
      ]`,
    }
  ],
);


CBlocks.Processor(
  [
    {
      BLOCK_NAME: "Button_AtulPrajapati",
      BLOCK_PARAMS: '{}'
    },
    {
      BLOCK_NAME: null,
      BLOCK_PARAMS: `{"Text":"Registrar Usuario","link":-1,"function":"POPUP.Show('AddUser')"}`
    }
  ]
)


Phrase = new SimpleOneLineFoot("Usuarios conectados");

Tabla_Registros = new Dynamic_Table( 
  
  JSON.parse(CAPIs.Send_Operation_Command("GET_ALL_ACCESS_OPERATION")), 

[
  {
    COLUM_NAME: "Username",
    ACTION: `{window.location.href = 'DetailedView.php?usr=${Dynamic_Table.RowField}Username*'}`,
    CONFIG: null,
  },
  {
    COLUM_NAME: "Rol",
    ACTION: null,
    CONFIG: null,

  },  
  {
    COLUM_NAME: "PassHash",
    ACTION: null,
    CONFIG: null,
  },
  {
    COLUM_NAME: "Last",
    ACTION: null,
    CONFIG: null,
  }
],

{
  TABLE_ID: "Nombre de la Tabla",
  TYPE: null,
  CONFIG: null,
  PARAMETERS: null,
 }
);






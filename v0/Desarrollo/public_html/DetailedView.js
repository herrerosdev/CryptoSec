let Block_obj = CBlocks.Processor(
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
      BLOCK_NAME: "POPUP",
      BLOCK_PARAMS: `[
        {
          "Type": ${POPUP.Type_PopUp_ID},
          "Name": "NewData",
          "Action_CallBack": ""
        },
        {
          "Type": ${POPUP.Type_Title},
          "Name": "Add Data",
          "Action_CallBack": ""
        },
        {
          "Type": ${POPUP.Type_Input_Text},
          "Name": "Data Name",
          "Action_CallBack": ""
        },
        {
          "Type": ${POPUP.Type_Input_Text},
          "Name": "Data Value",
          "Action_CallBack": ""
        },
      
        {
          "Type": ${POPUP.Type_Input_Text_PassWord},
          "Name": "User Password",
          "Action_CallBack": ""
        },
        {
          "Type": ${POPUP.Type_DropDown},
          "Name": {"Parameters": {"title": "Save Mode"}, "Options": [{"name": "PlainText", "value": "PLAINTEXT"}, {"name": "AES by USER PASS", "value": "AES_USR_PASS"}, {"name": "AES by SYS PASS", "value": "AES_SYS_PASS"}, {"name": "RSA by SYS PASS", "value": "RSA_SYS_PASS"}]},
          "Action_CallBack": ""
        },
        {
          "Type": ${POPUP.Type_Button},
          "Name": "Save",
          "Action_CallBack": "{let obj = new LOGIN_SOLUTION(); obj.WRITE_SENSITIVE_DATA_OPERATION({'dataOwner': CUtils.findGetParameter('usr'),'dataConcept': POPUP.GetValue('Data Name'), 'dataCryptogram': POPUP.GetValue('Data Value'), 'saveMode': POPUP.GetValue('Save Mode')}, {'UserPassword': POPUP.GetValue('User Password')});}"
        }
      ]`,
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
          "Name": "DeleteUser",
          "Action_CallBack": ""
        },
        {
          "Type": ${POPUP.Type_Title},
          "Name": "Borrar Usuario",
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
          "Type": ${POPUP.Type_Button},
          "Name": "OK",
          "Action_CallBack": "{CSession.GALSAN_Register(POPUP.GetValue('Username'), POPUP.GetValue('Password'), POPUP.GetValue('Repeat password'), 0)}"
        }
      ]`,
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
          "Name": "ChangeUserPass",
          "Action_CallBack": ""
        },
        {
          "Type": ${POPUP.Type_Input_Text_PassWord},
          "Name": "Password",
          "Action_CallBack": ""
        },
        {
        "Type": ${POPUP.Type_Input_Text_PassWord},
        "Name": "New Password",
        "Action_CallBack": ""
        },
        {
          "Type": ${POPUP.Type_Input_Text_PassWord},
          "Name": "Repeat New Password",
          "Action_CallBack": ""
        },
      
        {
          "Type": ${POPUP.Type_Button},
          "Name": "OK",
          "Action_CallBack": "{CSession.GALSAN_Register(POPUP.GetValue('Username'), POPUP.GetValue('Password'), POPUP.GetValue('Repeat password'), 0)}"
        }
      ]`,
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
          "Name": "Decrypt",
          "Action_CallBack": ""
        },
        {
          "Type": ${POPUP.Type_Title},
          "Name": "Get Sensitive Data",
          "Action_CallBack": ""
        },
      
        {
          "Type": ${POPUP.Type_Input_Text_PassWord},
          "Name": "UserPassword",
          "Action_CallBack": ""
        },
      
        {
          "Type": ${POPUP.Type_Button},
          "Name": "Decrypt",
          "Action_CallBack": "{let obj = new LOGIN_SOLUTION(); obj.READ_SENSITIVE_DATA_OPERATION({'User': POPUP.GetValue('User'),'Concept': POPUP.GetValue('Concept')}, {'UserPassword': POPUP.GetValue('UserPassword'), 'saveMode': POPUP.GetValue('saveMode')} )}"
        },
      
        {
          "Type": ${POPUP.Type_Hidden_Value},
          "Name": "Concept",
          "Action_CallBack": ""
        },
      
        {
          "Type": ${POPUP.Type_Hidden_Value},
          "Name": "User",
          "Action_CallBack": ""
        },

        {
          "Type": ${POPUP.Type_Hidden_Value},
          "Name": "saveMode",
          "Action_CallBack": ""
        }
      ]`,
    }
  ],
);


//'dataCryptogram': Aes.Ctr.encrypt(POPUP.GetValue('Data Value'), toASCII(pbkdf2('password', '', 13, 32)), 256)
CBlocks.Processor(
  [
    {
      BLOCK_NAME: "Button_AtulPrajapati",
      BLOCK_PARAMS: '{}'
    },
    {
      BLOCK_NAME: null,
      BLOCK_PARAMS: `{"Text":"Eliminar usuario","link":-1,"function":"POPUP.Show('DeleteUser')"}`
    },
    {
      BLOCK_NAME: null,
      BLOCK_PARAMS: `{"Text":"Cambiar Contraseña ","link":-1,"function":"POPUP.Show('ChangeUserPass')"}`
    },
    {
      BLOCK_NAME: null,
      BLOCK_PARAMS: `{"Text":"Agregar Dato Sensible","link":-1,"function":"POPUP.Show('NewData')"}`
    }


  ]
)


Tabla_Registros = new Dynamic_Table(

  Access_Table_Data,
  [
    {
      COLUM_NAME: "Username",
      ACTION: null,
      CONFIG: null
    },
    {
      COLUM_NAME: "Rol",
      ACTION: null,
      CONFIG: null
    },
    {
      COLUM_NAME: "PassHash",
      ACTION: null,
      CONFIG: null
    },
    {
      COLUM_NAME: "Last",
      ACTION: null,
      CONFIG: null
    }
  ],

  {
    TABLE_ID: "DatosUsuario",
    TYPE: null,
    CONFIG: null,
    PARAMETERS: null,
  });



Tabla_Registros = new Dynamic_Table(

  SD_Table_Data,
  [
    {
      COLUM_NAME: "Owner",
      ACTION: null,
      CONFIG: null

    },
    {
      COLUM_NAME: "Concept",
      ACTION: null,
      CONFIG: null

    },
    {
      COLUM_NAME: "Cryptogram",
      ACTION: `{POPUP.Show('Decrypt'); POPUP.SetValue('${Dynamic_Table.RowField}Save Mode*', 'saveMode'); POPUP.SetValue('${Dynamic_Table.RowField}Concept*', 'Concept'); POPUP.SetValue('${Dynamic_Table.RowField}Owner*', 'User')}`,
      CONFIG: null

    },

    {
      COLUM_NAME: "Save Mode",
      ACTION: null,
      CONFIG: null

    },
    {
      COLUM_NAME: "Preview",
      ACTION: null,
      CONFIG: null

    }
  ],

  {
    TABLE_ID: "Datos Sensibles Usuario",
    TYPE: null,
    CONFIG: null,
    PARAMETERS: null,
  }
);



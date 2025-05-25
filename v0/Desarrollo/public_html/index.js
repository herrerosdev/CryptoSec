CBlocks.Processor(
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
          "Name": "DoLogin",
          "Action_CallBack": ""
        },
        {
          "Type": ${POPUP.Type_Title},
          "Name": "Iniciar Sesion",
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
          "Type": ${POPUP.Type_Button},
          "Name": "Login",
          "Action_CallBack": "{CSession.GALSAN_DoLogin(POPUP.GetValue('Username'), POPUP.GetValue('Password'), 10, '', './index.php', './PrivateArea.php')}"
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
      BLOCK_PARAMS: `{"Text":"Do Login","link":-1,"function":"POPUP.Show('DoLogin')"}`
    }
  ]
)

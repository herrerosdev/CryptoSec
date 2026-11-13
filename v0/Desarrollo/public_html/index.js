/* CBlocks.Processor(
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
 */


var Login_solution = [{
      "block": "block-popup-0004",
      "view": "popup-blue-0000",
      "order": 1,
      "autoincrement": "1",
      "config": {

      },
      "item": [
  // ==================== CABECERA PRINCIPAL ====================
  {
    "item": get.item(ID.ITEM.TITLE).bd_key,
    "innerHtml": "Concurrencia extrema en C++20: Patrones sin bloqueos (lock-free) para sistemas de alta frecuencia",
    "tag": "h1",
    "attributes": { "class": ["Title"] },
    "targetNodeId": "post-title"
  },

// ==================== SECCIÓN 1 ====================
  {
    "item": get.item(ID.ITEM.INPUT_TEXT).bd_key,
    "innerHtml": "",
    "attributes": { "class": [], "placeholder": "Username"}
  },
  {
    "item": get.item(ID.ITEM.PASSWORD).bd_key,
    "innerHtml": "",
       "attributes": {
      "class": [],
      "type": "password",
      "required": "",
      "id": "Password",
      "placeholder": "Password"
    }
  },
  {
    "item": get.item(ID.ITEM.BUTTON).bd_key,
    "innerHtml": "LOGIN",
    "attributes": { "class": [""] },
    "action": {
        click: `
             CSession.GALSAN_DoLogin(POPUP.GetValue('Username'), POPUP.GetValue('Password'), 10, '', './index.php', './PrivateArea.php')
          `}
   
  },
],
        }]

/* plasma.page[0].item = popup;  
  let CMSPage = new HandlerCMS();   */
   Login_solution.config = {
            baseEvent: false,
            featureEvent: true,
            isSpa: false,
            template: LAYOUT_TEMPLATE_DEFAULT,
            initPointer: {x: 0, y: 0}

        };
  this.LOGIN_SOLUTION = new Builder(Login_solution)
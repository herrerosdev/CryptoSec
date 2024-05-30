class OverlayInformationBlock {
  ////////////////
  //CONSTRUCTOR///
  ////////////////



  constructor() {
    //Create View: Dynamic HTMLL CSS: Node
    this.ViewConstructor();

          
  
  }

  static CALLBACK_BOTON_1 = function () {};

  static CALLBACK_BOTON_2 = function () {};

  static CALLBACK_BOTON_Info = function () {};

  static SET_BOTON_1(CALLBACK_FUNCTION) {
    OverlayInformationBlock.CALLBACK_BOTON_1 = CALLBACK_FUNCTION;
  }

  static SET_BOTON_2(CALLBACK_FUNCTION) {
    OverlayInformationBlock.CALLBACK_BOTON_2 = CALLBACK_FUNCTION;
  }

  static SET_BOTON_Info(CALLBACK_FUNCTION) {
    OverlayInformationBlock.CALLBACK_BOTON_Info = CALLBACK_FUNCTION;
  }



  static Clean_Modal() {
    var ContentModalID = document.getElementById("BackgroundOverlayID");

    if (ContentModalID != null) {
      ContentModalID.remove();
    }
  }

  static Set_Information_Modal(ModalHeader, ModalBody, TextButton) {

    var BackgroundOverlay = GALSAN_CreateBlock.CreateElement(
      "div",
      "BackgroundOverlay"
    );
    GALSAN_CreateBlock.AttachID(
      BackgroundOverlay,
      "BackgroundOverlayID"
    );

    // this.Clean_Modal();

    var modal = GALSAN_CreateBlock.CreateElement("div", "modal");
    GALSAN_CreateBlock.AttachID(modal, "ContentModalID");

    BackgroundOverlay.appendChild(modal);

    var modal_content = GALSAN_CreateBlock.CreateElement(
      "div",
      "modal_content"
    );

    modal.appendChild(modal_content);

    var modal_header = GALSAN_CreateBlock.CreateElement("div", "modal_header");
    modal_content.appendChild(modal_header);

    var modal_title = GALSAN_CreateBlock.CreateElement(
      "h1",
      "modal_title",
      ModalHeader
    );
    modal_header.appendChild(modal_title);

    var modal_body = GALSAN_CreateBlock.CreateElement("div", "modal_body");
    modal_content.appendChild(modal_body);

    var modal_p = GALSAN_CreateBlock.CreateElement("p", "modal_p", ModalBody);
    modal_body.appendChild(modal_p);

    var modal_footer = GALSAN_CreateBlock.CreateElement("div", "modal_footer");
    modal_content.appendChild(modal_footer);

    var modal_button = GALSAN_CreateBlock.CreateElement(
      "button",
      "modal_button",
      TextButton
    );

    GALSAN_CreateBlock.Attach_Attribute_onClick(
      modal_button,
      "OverlayInformationBlock.CALLBACK_BOTON_Info()"
    );

    modal_footer.appendChild(modal_button);
  }

  static Set_Confirmation_Modal(ModalHeader, ModalBody, Button1, Button2) {
    var BackgroundOverlay = GALSAN_CreateBlock.CreateElement(
      "div",
      "BackgroundOverlay"
    );
    GALSAN_CreateBlock.AttachID(
      BackgroundOverlay,
      "BackgroundOverlayID"
    );


    // this.Clean_Modal();

    var modal = GALSAN_CreateBlock.CreateElement("div", "modal");
    GALSAN_CreateBlock.AttachID(modal, "ContentModalID");//"ContentModalID");

    BackgroundOverlay.appendChild(modal);

    var modal_content = GALSAN_CreateBlock.CreateElement(
      "div",
      "modal_content"
    );

    modal.appendChild(modal_content);

    var modal_header = GALSAN_CreateBlock.CreateElement("div", "modal_header");
    modal_content.appendChild(modal_header);

    var modal_title = GALSAN_CreateBlock.CreateElement(
      "h1",
      "modal_title",
      ModalHeader
    );
    modal_header.appendChild(modal_title);

    var modal_body = GALSAN_CreateBlock.CreateElement("div", "modal_body");
    modal_content.appendChild(modal_body);

    var modal_p = GALSAN_CreateBlock.CreateElement("p", "modal_p", ModalBody);
    modal_body.appendChild(modal_p);

    var modal_footer = GALSAN_CreateBlock.CreateElement("div", "modal_footer");
    modal_content.appendChild(modal_footer);

    var modal_button = GALSAN_CreateBlock.CreateElement(
      "button",
      "modal_button",
      Button1
    );
    GALSAN_CreateBlock.Attach_Attribute_onClick(
      modal_button,
      "OverlayInformationBlock.CALLBACK_BOTON_1()"
    );
    modal_footer.appendChild(modal_button);

    var modal_button = GALSAN_CreateBlock.CreateElement(
      "button",
      "modal_button",
      Button2
    );
    GALSAN_CreateBlock.Attach_Attribute_onClick(
      modal_button,
      "OverlayInformationBlock.CALLBACK_BOTON_2()"
    );
    modal_footer.appendChild(modal_button);
  }

  static CloseMessage(OverlayID = "No_definido") {

    let Elemento_OverlayID = document.getElementById(OverlayID);
    Elemento_OverlayID.style.display = "none";
  }

  static OpenMessage(OverlayID = "No_definido") {
    let Elemento_OverlayID = document.getElementById(OverlayID);
    Elemento_OverlayID.style.display = "block";
  }


  // CloseMessage() {
  //   OverlayInformationBlock.o_BackgroundOverlay.style.display = "none";
  // }

  // OpenMessage() {
  //   OverlayInformationBlock.o_BackgroundOverlay.style.display = "block";
  // }
  

  ViewConstructor() {
    GALSAN_CreateBlock.add_CSS_Class(
      ".BackgroundOverlay",
      `
        position: fixed;
        width: 100%;
       
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 9;
        cursor: pointer;


    
    `
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".modal",
      `
display: flex;
align-items: center;
justify-content: center;
min-height: calc(100% - 1rem);
position: relative;
width: auto;
pointer-events: none;
transition: transform .3s ease-out;
transform: translate(0,-50px);

`
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".modal_content",
      `
position: relative;
display: flex;
flex-direction: column;
width: 80%;
pointer-events: auto;
background-color: #fff;
border: 1px solid rgba(0,0,0,.2);
border-radius: 0.3rem;
outline: 0;

`
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".modal_header",
      `
display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1rem;
    border-bottom: 1px solid #dee2e6;
    border-top-left-radius: calc(0.3rem - 1px);
    border-top-right-radius: calc(0.3rem - 1px);

`
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".modal_title",
      `
margin-bottom: 0;
line-height: 1.5;

`
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".modal_body",
      `
position: relative;
flex: 1 1 auto;
padding: 1rem;

`
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".modal_p",
      `
margin-top: 0;
    margin-bottom: 1rem;

`
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".modal_footer",
      `
display: flex;
// flex-wrap: wrap;
flex-shrink: 0;
align-items: center;
justify-content: flex-end;
padding: 0.75rem;
border-top: 1px solid #dee2e6;
border-bottom-right-radius: calc(0.3rem - 1px);
border-bottom-left-radius: calc(0.3rem - 1px);

`
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".modal_p",
      `
display: inline-block;
font-weight: 400;
line-height: 1.5;
color: #212529;
text-align: center;
text-decoration: none;
vertical-align: middle;
cursor: pointer;
-webkit-user-select: none;
-moz-user-select: none;
user-select: none;
background-color: transparent;
border: 1px solid transparent;
padding: 0.375rem 0.75rem;
font-size: 1rem;
border-radius: 0.25rem;
transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;

`
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".modal_button",
      `
            width: auto;
            margin-right: 2%;
  `
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".modal_button",
      `
        width: auto;
      
    `,
      GALSAN_CreateBlock.Screen_Mobile
    );
  }
}

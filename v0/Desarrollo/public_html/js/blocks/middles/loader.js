class LoaderBlock {
  ////////////////
  //CONSTRUCTOR///
  ////////////////

  constructor() {
    //Create View: Dynamic HTMLL CSS: Node
    this.ViewConstructor();
  }

  ////functions

  //show Loader

  ShowLoader() {
    document.getElementById("LoaderID").style.display = "inline-block";

/*     setTimeout(10);
 */
  }

  //hide loader

  HideLoader() {
    document.getElementById("LoaderID").style.display = "none";

/*     setTimeout(10);
 */  }

  //Create view of carrusel
  ViewConstructor() {
    //Add CSS

    GALSAN_CreateBlock.add_CSS_Class(
      ".Background_Loader",
      `
        width: 100%;
        display: none;
        height: 100%;
        position: fixed;
        /* background-color: #eaeaea4a; */
        z-index: 9999;

`
    );
    GALSAN_CreateBlock.add_CSS_Class(
      ".lds-roller",
      `
            display: inline-block;
            position: absolute;
            width: 30%;
            margin: 0 auto;
            height: 80px;
            /* position: absolute; */
            left: 0;
            bottom: 0;
            right: 0;
            top: 15%;
    
    `
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".lds-roller",
      `
        width: 20%;


`,
      GALSAN_CreateBlock.Screen_Mobile
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".lds-roller div",
      `
        animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        transform-origin: 40px 40px;

`
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".lds-roller div:after",
      `
    content: " ";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #29556b;
    margin: -4px 0 0 -4px;

`
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".lds-roller div:nth-child(1)",
      `
animation-delay: -0.036s;

`
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".lds-roller div:nth-child(1):after",
      `
top: 63px;
left: 63px;

`
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".lds-roller div:nth-child(2)",
      `
animation-delay: -0.072s;

`
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".lds-roller div:nth-child(2):after",
      `
top: 68px;
left: 56px;

`
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".lds-roller div:nth-child(3)",
      `
animation-delay: -0.108s;

`
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".lds-roller div:nth-child(3):after",
      `
top: 71px;
  left: 48px;

`
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".lds-roller div:nth-child(4)",
      `
animation-delay: -0.144s;

`
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".lds-roller div:nth-child(4):after",
      `
top: 72px;
left: 40px;

`
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".lds-roller div:nth-child(5)",
      `
animation-delay: -0.18s;

`
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".lds-roller div:nth-child(5):after",
      `
top: 71px;
left: 32px;
`
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".lds-roller div:nth-child(6)",
      `
animation-delay: -0.216s;

`
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".lds-roller div:nth-child(6):after",
      `
top: 68px;
left: 24px;

`
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".lds-roller div:nth-child(7)",
      `
animation-delay: -0.252s;

`
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".lds-roller div:nth-child(7):after",
      `
top: 63px;
left: 17px;
`
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".lds-roller div:nth-child(8)",
      `
animation-delay: -0.288s;

`
    );

    GALSAN_CreateBlock.add_CSS_Class(
      ".lds-roller div:nth-child(8):after",
      `
top: 56px;
left: 12px;
`
    );

    GALSAN_CreateBlock.add_CSS_Class(
      "@keyframes lds-roller",
      `
0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
    );

    var ContenedorPrincipal = GALSAN_CreateBlock.CreateElement(
      "div",
      "Background_Loader",
      null,
      GALSAN_CreateBlock.Site_Column_Center
    );

    GALSAN_CreateBlock.AttachID(ContenedorPrincipal, "LoaderID");

    var roller = GALSAN_CreateBlock.CreateElement(
      "div",
      "lds-roller",
      null,
      GALSAN_CreateBlock.Site_Column_Center
    );

    ContenedorPrincipal.appendChild(roller);
    var div = GALSAN_CreateBlock.CreateElement("div", null, null);
    roller.appendChild(div);

    var div = GALSAN_CreateBlock.CreateElement("div", null, null);
    roller.appendChild(div);

    var div = GALSAN_CreateBlock.CreateElement("div", null, null);
    roller.appendChild(div);

    var div = GALSAN_CreateBlock.CreateElement("div", null, null);
    roller.appendChild(div);

    var div = GALSAN_CreateBlock.CreateElement("div", null, null);
    roller.appendChild(div);

    var div = GALSAN_CreateBlock.CreateElement("div", null, null);
    roller.appendChild(div);

    var div = GALSAN_CreateBlock.CreateElement("div", null, null);
    roller.appendChild(div);

    var div = GALSAN_CreateBlock.CreateElement("div", null, null);
    roller.appendChild(div);
  }
}

/* o_Carrousel_Encuestas_Flip = new LoaderBlock(); */

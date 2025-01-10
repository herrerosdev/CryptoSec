class MaquinaEscribir {
  constructor() {
    //CallBack to signed css properties with name of the class
    this.CreateElement_ = GALSAN_CreateBlock.CreateElementSigned;
    this.add_CSS_Class = GALSAN_CreateBlock.add_CSS_Class_SIGNED;
    this.ContenedorPrincipal;
    this.CreateView();
  }

  New_Line(Params) {

    var text = Params.text || "Bienvenido a la pagina oficial de Paul Blacksmiths";
    var Title_Level = Params.Title_Level || "h2";
    var Texto = this.CreateElement_(Title_Level, "p", text, GALSAN_CreateBlock.Site_Column_Center);

   this.ContenedorPrincipal.appendChild(Texto);
  }

  CreateView() {
    ////////////////////////////////////////
    //***************CSS*****************//
    ////////////////////////////////////////

    this.add_CSS_Class(
      `.body`,
      `
      padding: -4px;
      min-height: 0vh;
      display: grid;
      width: 75%;
      place-items: center;
      background-color: cornsilk;
      text-align: center;
      margin: 0 auto;
      box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 9px;

      `
    );

    this.add_CSS_Class(
      `.body`,
      `


  `,
      GALSAN_CreateBlock.Screen_Middle
    );

    this.add_CSS_Class(
      `.body`,
      `


`,
      GALSAN_CreateBlock.Screen_Mobile
    );

    this.add_CSS_Class(
      `.p`,
      `
      width: 0;
      overflow: hidden;
      /* min-height: 5vw; */
      white-space: nowrap;
      font-size: 3vw;
      /* margin: 21px auto; */
      margin-top: 4vh;
      margin-bottom: 3vh;
      font-family: "Courier New";
      border-right: 0.15em solid #b3b3b31c;
      animation: typing 4s steps(38) 1s 1 normal both, blink 1s steps(1) 7;
      `
    );

    this.add_CSS_Class(
      `.p`,
      `
      font-size: 5vw;`,
      GALSAN_CreateBlock.Screen_Middle
    );

    this.add_CSS_Class(
      `.p`,
      `
    font-size: 5vw;`,
      GALSAN_CreateBlock.Screen_Mobile
    );

    this.add_CSS_Class(
      `@keyframes typing`,
      `
            from {
                width: 0;
              }
              to {
                width: 100%;
              }

      `
    );

    this.add_CSS_Class(
      `@keyframes blink`,
      `
            50% {
                border-color: transparent;
              }

      `
    );

    this.ContenedorPrincipal = this.CreateElement_(
      "div",
      "body",
      null,
      this.Site_
    );
  }
}

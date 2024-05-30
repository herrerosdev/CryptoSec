class GridItemBlock {
    ////////////////
    //CONSTRUCTOR///
    ////////////////

    constructor() {
        //Create View: Dynamic HTMLL CSS: Node
        this.ViewConstructor();
    }

    Put_Space(Name, Img = "assets/img/2.png", Link) {
        var Container_Grid_WrapperID = document.getElementById(
            "Container_Grid_WrapperID"
        );

        var Content_Grid_Wrapper = GALSAN_CreateBlock.CreateElement(
            "div",
            "Content_Grid_Wrapper"
        );
        Container_Grid_WrapperID.appendChild(Content_Grid_Wrapper);

        var Link_Grid_Wrapper = GALSAN_CreateBlock.CreateElement(
            "a",
            "Link_Grid_Wrapper"
        );

        Link_Grid_Wrapper.setAttribute("href", Link);

        Content_Grid_Wrapper.appendChild(Link_Grid_Wrapper);

        var Portada_Grid_Wrapper = GALSAN_CreateBlock.CreateElement(
            "img",
            "Portada_Grid_Wrapper",
            Img
        );
        Link_Grid_Wrapper.appendChild(Portada_Grid_Wrapper);

        var h4_Grid_Wrapper = GALSAN_CreateBlock.CreateElement(
            "h4",
            "h4Title",
            Name
        );
        Link_Grid_Wrapper.appendChild(h4_Grid_Wrapper);
    }

    ViewConstructor() {
        GALSAN_CreateBlock.add_CSS_Class(
            ".Container_Grid_Wrapper",
            `
      display: grid;
      row-gap: 55px;
      grid-auto-rows: minmax(35vh, auto);
      /* background-color: rgba(39, 124, 223, 0.4); */
      text-align: center;
      width: 72vw;
      grid-template-columns: 33.3% 33.3% 33.3%;
      align-items: center;
      margin: auto;
      margin-top: 5%;
      margin-bottom: 5%;
      justifyitems: center;
`
        );

        GALSAN_CreateBlock.add_CSS_Class(
            ".Container_Grid_Wrapper",
            `
        width: 100%;
        grid-template-columns: 50vw 50vw;

        `,
            GALSAN_CreateBlock.Screen_Middle
        );

        GALSAN_CreateBlock.add_CSS_Class(
            ".Container_Grid_Wrapper",
            `
            grid-template-columns: 100vw;
            grid-auto-rows: minmax(40vw, auto);

        `,
            GALSAN_CreateBlock.Screen_Mobile
        );

        GALSAN_CreateBlock.add_CSS_Class(
            ".Content_Grid_Wrapper",
            `
        /* background: #458ee3; */
        padding: 0vw;
        cursor: pointer;
        height: auto;
        /* border: 1vw solid white;

`
        );

        GALSAN_CreateBlock.add_CSS_Class(
            ".Portada_Grid_Wrapper",
            `
      width: 100%;
      max-width: 89%;
      height: 80%;

`
        );

        GALSAN_CreateBlock.add_CSS_Class(
            ".Link_Grid_Wrapper",
            `
margin-top: 1vw;
text-decoration: none;

`
        );

        GALSAN_CreateBlock.add_CSS_Class(
            ".h4Title",
            `
font-size: 2.5vw;
  color: #29556b;
  margin: auto;
`
        );

        GALSAN_CreateBlock.add_CSS_Class(
            ".h4Title",
            `
font-size: 3.5vw;

`,
            GALSAN_CreateBlock.Screen_Middle
        );

        GALSAN_CreateBlock.add_CSS_Class(
            ".h4Title",
            `
font-size: 4.5vw;

`,
            GALSAN_CreateBlock.Screen_Mobile
        );

        var container = GALSAN_CreateBlock.CreateElement(
            "div",
            "Container_Grid_Wrapper"
        );
        GALSAN_CreateBlock.AttachID(container, "Container_Grid_WrapperID");
    }
}
class GridItemBlock {
    ////////////////
    //CONSTRUCTOR///
    ////////////////

    constructor() {

         // Estructura
          // {}
        this.PrincipalContainer = null
            //Create View: Dynamic HTMLL CSS: Node
        this.ViewConstructor();
    }

    Put_Space(Params) {

         // Estructura
      //  {"Img": "", "Link": "", "Name": ""}

        var Img = Params.Img || "https://drive.hegalpa.es/commons/DEFAULT_Img.png";
        /*         var Container_Grid_WrapperID = document.getElementById(
                    "Container_Grid_WrapperID"
                ); */

        var Container_Grid_WrapperID = this.PrincipalContainer

        var Content_Grid_Wrapper = GALSAN_CreateBlock.CreateElement(
            "div",
            "Content_Grid_Wrapper"
        );
        Container_Grid_WrapperID.appendChild(Content_Grid_Wrapper);

        var Link_Grid_Wrapper = GALSAN_CreateBlock.CreateElement(
            "a",
            "Link_Grid_Wrapper"
        );

        Link_Grid_Wrapper.setAttribute("href", Params.Link);

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
            Params.Name
        );
        Link_Grid_Wrapper.appendChild(h4_Grid_Wrapper);
    }

    ViewConstructor() {
        GALSAN_CreateBlock.add_CSS_Class(
            ".Container_Grid_Wrapper",
            `
            display: grid;
            row-gap: 3vw;
            grid-auto-rows: minmax(27vh, auto);
            text-align: center;
            width: fit-content;
            grid-template-columns: 50% 50%;
            align-items: center;
            margin: 11vw auto;
            justifyitems: center;
`
        );

        GALSAN_CreateBlock.add_CSS_Class(
            ".Container_Grid_Wrapper",
            `
            grid-template-columns: 100vw;
            grid-auto-rows: minmax(40vw, auto);
            margin: 8vw -4vw;


        `,
            GALSAN_CreateBlock.Screen_Middle
        );

        GALSAN_CreateBlock.add_CSS_Class(
            ".Container_Grid_Wrapper",
            `
            grid-template-columns: 100vw;
            grid-auto-rows: minmax(40vw, auto);
            margin: 8vw 0vw;


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
            width: 34vw;
            height: 24vw;
            margin: 0 auto;
            .ServiceElementHeaderA2: ;
`
        );

        GALSAN_CreateBlock.add_CSS_Class(
            ".Portada_Grid_Wrapper",
            `
            width: 100vw;
            height: 60vw;
            margin: 0 auto;
            `,
            GALSAN_CreateBlock.Screen_Middle
        );

        GALSAN_CreateBlock.add_CSS_Class(
            ".Portada_Grid_Wrapper",
            `
            width: 100vw;
            height: 60vw;
            margin: 0 auto;
            `,
            GALSAN_CreateBlock.Screen_Mobile
        );


        GALSAN_CreateBlock.add_CSS_Class(
            `.Link_Grid_Wrapper:hover`,
            `
            box-shadow: 0px 0px 20px 0px #000;
            transition-duration: 1s;

          `
        );


        GALSAN_CreateBlock.add_CSS_Class(
            ".Link_Grid_Wrapper",
            `
            display: grid;
            /* width: 24vw; */
            height: auto;
            text-decoration: none;
            margin: 20px;
            background: white;
            box-shadow: 0px 0px 1px 0px #000;
            transition-duration: 2s;

`
        );

        GALSAN_CreateBlock.add_CSS_Class(
            ".Link_Grid_Wrapper",
            `
                width: 100vw;    
                margin: auto;

            `,
            GALSAN_CreateBlock.Screen_Middle
        );

        GALSAN_CreateBlock.add_CSS_Class(
            ".Link_Grid_Wrapper",
            `
                width: 100vw;    
                margin: auto;

            `,
            GALSAN_CreateBlock.Screen_Mobile
        );


        GALSAN_CreateBlock.add_CSS_Class(
            ".h4Title",
            `
            font-size: 1.5vw;
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

        this.PrincipalContainer = GALSAN_CreateBlock.CreateElement(
            "div",
            "Container_Grid_Wrapper"
        );


        //GALSAN_CreateBlock.AttachID(container, "Container_Grid_WrapperID");
    }
}
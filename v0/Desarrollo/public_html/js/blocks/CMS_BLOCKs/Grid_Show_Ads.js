class Grid_Show_Ads {
    ////////////////
    //CONSTRUCTOR///
    ////////////////

    constructor() {

         // Estructura
          // {}
        this.PrincipalContainer = null
        this.CreateElement_ = GALSAN_CreateBlock.CreateElementSigned;
        this.add_CSS_Class = GALSAN_CreateBlock.add_CSS_Class_SIGNED;

            //Create View: Dynamic HTMLL CSS: Node
        this.ViewConstructor();
    }

    Put_Space(Params) {

         // Estructura
      //  {"Img": "", "Link": "", "Name": "", "Description": "", "ButtonText": ""}

        var Img = Params.Img;

        var Container_Grid_WrapperID = document.getElementById("Container_Grid_WrapperID");

        var Content_Grid_Wrapper = this.CreateElement_(
            "div",
            "Content_Grid_Wrapper"
        );
        Container_Grid_WrapperID.appendChild(Content_Grid_Wrapper);

     

        var Portada_Grid_Wrapper = this.CreateElement_(
            "img",
            "Portada_Grid_Wrapper",
            Img
        );
        Content_Grid_Wrapper.appendChild(Portada_Grid_Wrapper);

        var h4_Grid_Wrapper = this.CreateElement_(
            "h2",
            "h4Title",
            Params.Name
        );
        Content_Grid_Wrapper.appendChild(h4_Grid_Wrapper);

        var h4_Grid_Wrapper = this.CreateElement_(
            "h5",
            "h5Text",
            Params.Description
        );
        Content_Grid_Wrapper.appendChild(h4_Grid_Wrapper);

        var ButtonLink = this.CreateElement_(
            "button",
            "ButtonLink"
        );
        Content_Grid_Wrapper.appendChild(ButtonLink);
     
        ButtonLink.onclick = function () { window.location.href = `${Params.Link}`; };

        var Link = this.CreateElement_(
            "a",
            "Link",
            Params.ButtonText
        );
        ButtonLink.appendChild(Link);


    }

    ViewConstructor() {
        this.add_CSS_Class(
            ".Container_Grid_Wrapper",
            `
        display: grid;
    row-gap: 3vw;
    column-gap: 0.5vw;
    grid-auto-rows: minmax(27vh, auto);
    text-align: center;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    margin: 3vw auto;
        justify-content: center;
    justify-items: center;
`
        );

        this.add_CSS_Class(
            ".ButtonLink",
            `
    align-items: center;
    background-clip: padding-box;
    background-color: #8ea7b5;
    overflow: hidden;
    border: 1px solid transparent;
    border-radius: .25rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    box-sizing: border-box;
    color: #000;
    cursor: pointer;
    display: inline-flex;
    font-family: system-ui, -apple-system, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 1.2vw;
    font-weight: 600;
    justify-content: center;
    margin: 0 auto;
    min-height: 3rem;
    padding: 2%;
    position: relative;
    text-decoration: none;
    transition: all 250ms;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: baseline;
    min-width: 50%;
    width: fit-content;

`
        );

        this.add_CSS_Class(
            ".ButtonLink::after",
            `
content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #634c30b8;
    transform-origin: bottom;
    transition: all 600ms cubic-bezier(0.48, 0, 0.12, 1);
    transform: skewY(9.3deg) scaleY(1) translateY(150%);
    border-top: 1px solid white;
`
        );


        this.add_CSS_Class(
            ".ButtonLink:hover::after",
            `
    transform-origin: bottom center;
    transform: skewY(9.3deg) scaleY(1) translateY(50%);
        
`
        );

        this.add_CSS_Class(
            ".ButtonLink:hover",
            `
    box-shadow: 0px 0px 20px 0px #000;
            
`
        );
        

        this.add_CSS_Class(
            ".Link",
            `
   z-index: 999;
`
        );
     


        this.add_CSS_Class(
            ".Container_Grid_Wrapper",
            `
            grid-template-columns: 100vw;
            grid-auto-rows: minmax(40vw, auto);
            margin: 8vw -4vw;


        `,
            GALSAN_CreateBlock.Screen_Middle
        );

        this.add_CSS_Class(
            ".Container_Grid_Wrapper",
            `
            grid-template-columns: 100vw;
            grid-auto-rows: minmax(40vw, auto);
            margin: 8vw 0vw;


        `,
            GALSAN_CreateBlock.Screen_Mobile
        );

        this.add_CSS_Class(
            ".Content_Grid_Wrapper",
            `
     
        padding: 0vw;
        cursor: pointer;
        height: auto;
        display: flex;
            justify-content: center;
               display: grid;
    width: 94%;
    height: auto;
    text-decoration: none;
    background: white;
        grid-template-rows: auto max-content max-content max-content;
     

`
        );

        this.add_CSS_Class(
            ".Portada_Grid_Wrapper",
            `
         width: 100%;
    height: auto;
    margin: 0 auto;
        transition-duration: 2s;
`
        );

        this.add_CSS_Class(
            ".Portada_Grid_Wrapper",
            `
            width: 100vw;
            height: 60vw;
            margin: 0 auto;
            `,
            GALSAN_CreateBlock.Screen_Middle
        );

        this.add_CSS_Class(
            ".Portada_Grid_Wrapper",
            `
            width: 100vw;
            height: 60vw;
            margin: 0 auto;

            `,
            GALSAN_CreateBlock.Screen_Mobile
        );


        this.add_CSS_Class(
            `.Portada_Grid_Wrapper:hover`,
            `
            box-shadow: 0px 0px 20px 0px #000;
            transition-duration: 1s;

          `
        );




        this.add_CSS_Class(
            ".h5Text",
            `
    font-size: 1vw;
    text-align: justify;
    padding: 2%;
    color: black;
    margin: 0;
    font-weight: normal;

`
        );



        this.add_CSS_Class(
            ".h5Text",
            `
         font-size: 4vw;
    text-align: justify;

`,
GALSAN_CreateBlock.Screen_Mobile
        );


        this.add_CSS_Class(
            ".h4Title",
            `
            font-size: 1.5vw;
              color: black;
               margin-top: 5%;
                   text-align: left;
            
`
        );

        this.add_CSS_Class(
            ".h4Title",
            `
font-size: 3.5vw;

`,
            GALSAN_CreateBlock.Screen_Middle
        );

        this.add_CSS_Class(
            ".h4Title",
            `
font-size: 4.5vw;

`,
            GALSAN_CreateBlock.Screen_Mobile
        );


        this.add_CSS_Class(
            ".h5Text",
            `
font-size: 3vw;

`,
            GALSAN_CreateBlock.Screen_Middle
        );
 
        this.add_CSS_Class(
            ".h5Text",
            `
font-size: 4vw;

`,
            GALSAN_CreateBlock.Screen_Mobile
        );


        this.add_CSS_Class(
            ".ButtonLink",
            `

    font-size: 3.2vw;
 

`
        );

        var PrincipalContainer = this.CreateElement_(
            "div",
            `Container_Grid_Wrapper`,
            null,
            GALSAN_CreateBlock.Site_Column_Center
          );
      
        GALSAN_CreateBlock.AttachID(PrincipalContainer, "Container_Grid_WrapperID");
    }
}
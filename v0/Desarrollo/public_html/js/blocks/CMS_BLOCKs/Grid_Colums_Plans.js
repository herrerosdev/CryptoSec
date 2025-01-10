class Grid_Plans {
    ////////////////
    //CONSTRUCTOR///
    ////////////////

    constructor() {

        //Estructura
        //{}

        this.CreateElement_ = GALSAN_CreateBlock.CreateElementSigned;
        this.add_CSS_Class = GALSAN_CreateBlock.add_CSS_Class_SIGNED;
        this.PrincipalContainer = null
        //Create View: Dynamic HTMLL CSS: Node
        this.ViewConstructor();
    }

    Offer_plan(Params) {

           //Estructura
        //{"Title":"", "Description": "", "Price": "", "Properties": ["", "", "", "", ""], "Button_select": ""}

        var Container_Grid_WrapperID = document.getElementById("PrincipalContainerID");

        var Content_Grid_Wrapper = this.CreateElement_(
            "div",
            "Content_Grid_Wrapper"
        );
        Container_Grid_WrapperID.appendChild(Content_Grid_Wrapper);

        var Link_Grid_Wrapper = this.CreateElement_(
            "p",
            "Link_Grid_Wrapper_Title",
            Params.Title
        );


        Content_Grid_Wrapper.appendChild(Link_Grid_Wrapper);

        var Link_Grid_Wrapper = this.CreateElement_(
            "p",
            "Link_Grid_Wrapper_Description",
            Params.Description
        );


        Content_Grid_Wrapper.appendChild(Link_Grid_Wrapper);


        var Link_Grid_Wrapper = this.CreateElement_(
            "p",
            "Link_Grid_Wrapper_Title",
            Params.Price
        );


        Content_Grid_Wrapper.appendChild(Link_Grid_Wrapper);

        var Link_Grid_Wrapper = this.CreateElement_(
            "button",
            "mybutton",
            Params.Button_select
        );


        Content_Grid_Wrapper.appendChild(Link_Grid_Wrapper);

        for (let index = 0; index < Params.Properties.length; index++) {
            
            var Link_Grid_Wrapper = this.CreateElement_(
                "p",
                "Link_Grid_Wrapper_Description",
                Params.Properties[index]
            );
    
    
            Content_Grid_Wrapper.appendChild(Link_Grid_Wrapper);
            
        }

      
    }

    ViewConstructor() {
        this.add_CSS_Class(
            ".Container_Grid_Wrapper",
            `
display: grid;
    row-gap: 3vw;
    column-gap: 2%;
    text-align: center;
    grid-auto-rows: minmax(27vh, auto);
    width: 56%;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    margin: 11vw 20%;
`
        );

        this.add_CSS_Class(
            ".Container_Grid_Wrapper",
            `
            overflow-x: scroll;
           margin: 11vw auto;
             width: 96%;


        `,
            GALSAN_CreateBlock.Screen_Middle
        );

        this.add_CSS_Class(
            ".Container_Grid_Wrapper",
            `
            overflow-x: scroll;
             margin: 11vw 0%;
             width: 96%;

        `,
            GALSAN_CreateBlock.Screen_Mobile
        );

        this.add_CSS_Class(
            ".Content_Grid_Wrapper",
            `
    background: white;
       padding: 8% 2%;
    cursor: pointer;
    height: auto;
    border: 1px solid black;
    border-radius: 25px;
    width: 96%;
    -webkit-box-shadow: 0px 15px 5px 0px rgba(4, 13, 105, 0.46);
    -moz-box-shadow: 0px 15px 5px 0px rgba(4, 13, 105, 0.46);
    box-shadow: 0px 15px 5px 0px rgba(4, 13, 105, 0.46);



`
        );

        this.add_CSS_Class(
            ".Content_Grid_Wrapper:nth-child(odd)",
            `
    background: #8bb4d7;

`
        );

        

        this.add_CSS_Class(
            ".Portada_Grid_Wrapper",
            `
          width: 100%;
    height: 24vw;
    margin: 0 auto;
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
            `.Link_Grid_Wrapper:hover`,
            `
            box-shadow: 0px 0px 20px 0px #000;
            transition-duration: 1s;

          `
        );


        this.add_CSS_Class(
            ".Link_Grid_Wrapper_Title",
            `
    display: grid;
    width: 100%;
    height: auto;
    text-decoration: none;
    margin: 20px 0px;
    font-family: Courier New;
    text-align: justify;
    font-size: 24px;
    font-weight: bold;

`
        );

        this.add_CSS_Class(
            ".Link_Grid_Wrapper_Description",
            `
    display: grid;
    width: calc(100% - 24px);
    height: auto;
    text-decoration: none;
    margin: 20px 0px;
    font-family: sans-serif;
    text-align: justify;
    font-size: 16px;
    padding: 0px 12px;
    

`
        );


        this.add_CSS_Class(
            ".mybutton",
            `
       background:linear-gradient(to bottom, #153fab 5%, #71a4e3 100%);
            background-color:#153fab;
            border-radius:28px;
            border:2px solid #000000;
            display:inline-block;
            cursor:pointer;
            color:#ffffff;
            font-family:Courier New;
            font-size:17px;
            font-weight:bold;
            padding:24px 32px;
            text-decoration:none;
            text-shadow:0px 0px 9px #283966;

`
        );

        this.add_CSS_Class(
            ".mybutton:hover",
            `
    background:linear-gradient(to bottom, #71a4e3 5%, #153fab 100%);
            background-color:#71a4e3;

`
        );

        this.add_CSS_Class(
            ".mybutton:active",
            `
        position:relative;
            top:1px;

`
        );
     
        
                

        this.add_CSS_Class(
            ".Link_Grid_Wrapper",
            `
                width: 100vw;    
                margin: auto;

            `,
            GALSAN_CreateBlock.Screen_Middle
        );

        this.add_CSS_Class(
            ".Link_Grid_Wrapper",
            `
                width: 100vw;    
                margin: auto;

            `,
            GALSAN_CreateBlock.Screen_Mobile
        );

        this.add_CSS_Class(
            ".mybutton",
            `
                 padding: 20px 16px;

            `,
            GALSAN_CreateBlock.Screen_Middle
        );

        this.add_CSS_Class(
            ".mybutton",
            `
                 padding: 20px 16px;

            `,
            GALSAN_CreateBlock.Screen_Mobile
        );

        this.add_CSS_Class(
            ".mybutton",
            `
                 padding: 20px 16px;

            `,
            GALSAN_CreateBlock.Screen_Middle
        );

        this.add_CSS_Class(
            ".mybutton",
            `
                 padding: 20px 16px;

            `,
            GALSAN_CreateBlock.Screen_Mobile
        );

        
        this.add_CSS_Class(
            ".h4Title",
            `
            font-size: 1.5vw;
            color: #29556b;
            margin: auto;
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

        var PrincipalContainer = this.CreateElement_(
            "div",
            "Container_Grid_Wrapper"
        );
        GALSAN_CreateBlock.AttachID(PrincipalContainer, "PrincipalContainerID");


        //GALSAN_CreateBlock.AttachID(container, "Container_Grid_WrapperID");
    }
}
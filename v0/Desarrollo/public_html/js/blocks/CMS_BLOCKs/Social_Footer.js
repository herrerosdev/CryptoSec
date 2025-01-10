class Social_Footer {

    constructor(Params) {

        //Estructura
        //{"BackGroundColor": "", "Color": ""}

        //CallBack to signed css properties with name of the class
        this.CreateElement_ = GALSAN_CreateBlock.CreateElementSigned;
        this.add_CSS_Class = GALSAN_CreateBlock.add_CSS_Class_SIGNED;

  
        this.BackGroundColor = Params.BackGroundColor;

        this.Color = Params.Color;

        //Create View: Dynamic HTMLL CSS: Node
        this.CreateView();
    }


    Add_Social_Foot(Params) {

        //Estructura
        //{"icon": "", "Link": ""}

        var Container_Social_footID_ = document.getElementById("Container_Social_footID_");
      
      
            var Link_a = this.CreateElement_(
                "a",
                null,
                null,
            );
    
            Container_Social_footID_.appendChild(Link_a);
    
            var img_icon = this.CreateElement_(
                "img",
                "img_icon",
                Params.icon,
            );
    
            Link_a.appendChild(img_icon);
            

            if(Params.Link) {
                Link_a.style.cursor = 'pointer';
                Link_a.target = "_blank";
                Link_a.href = Params.Link;
              }
            
          
            

      
        }


    CreateView() {
        this.add_CSS_Class(
            ".generalFoot",
            `     
     background-color: ${this.BackGroundColor};
               
    width: 100%;
     margin: 0 auto;
    background-color: #000;
    position: relative;
    bottom: 0;
    height: auto;
    z-index: 9;
    display: inline-flex;
    flex-direction: row;
    justify-content: center;

        `
        );

        this.add_CSS_Class(
            ".img_icon",
            `
                color: ${this.Color};
    width: 2vw;
    border-radius: 35%;
    padding: 8%;
    margin: 1vw 2vw;
    border: ${this.Color} 2px solid;
            cursor: pointer;
        `
        );

        this.add_CSS_Class(
            ".img_icon",
            `
   width: 4vw;

        `, GALSAN_CreateBlock.Screen_Mobile
        );
     


        //Create html elements (Using DOM)

        //Create element and associate a classes
        var ContenedorPrincipal = this.CreateElement_(
            "div",
            `generalFoot`,
            null,
            GALSAN_CreateBlock.Site_Column_Center
        );

        GALSAN_CreateBlock.AttachID(ContenedorPrincipal, "Container_Social_footID_"); 
    

    }
}
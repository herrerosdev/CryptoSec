class SimpleOneLineFoot {

    constructor(Params) {

        //Estructura
        //{"BackGroundColor": "", "Color": "", "id": 0}

        //CallBack to signed css properties with name of the class
        this.CreateElement_ = GALSAN_CreateBlock.CreateElementSigned;
        this.add_CSS_Class = GALSAN_CreateBlock.add_CSS_Class_SIGNED;

       
        this.id_ = Params.id;
 
        this.TextRight_ = Params.TextRight;

        this.BackGroundColor = Params.BackGroundColor;

        this.Color = Params.Color;

        //Create View: Dynamic HTMLL CSS: Node
        this.CreateView();
    }


    Add_Text(Params) {

        //Estructura
        //{"site": "", "Text": "", "Link": ""}

        var Container_OneLineFoot_ID = document.getElementById("Container_OneLineFoot_" + this.id_);
      
        switch (Params.site) {

            case "Left":
      
            var Link_a = this.CreateElement_(
                "a",
                null,
                null,
            );
    
    
    
            var Link_H6 = this.CreateElement_(
                "h6",
                "CSS_EncabezadoH6left",
                Params.Text,
            );
    
            Link_a.appendChild(Link_H6);
            Container_OneLineFoot_ID.appendChild(Link_a);

            if(Params.Link) {
                Link_a.style.cursor = 'pointer';
                Link_a.href = Params.Link;
              }
            
          
              break;
      
            case "Right":

            var Link_a = this.CreateElement_(
                "a",
                null,
                null,
            );
      
            var Link_H5 = this.CreateElement_(
                "h6",
                "CSS_EncabezadoH6",
                Params.Text,
            );
    
            Link_a.appendChild(Link_H5);
    
            Container_OneLineFoot_ID.appendChild(Link_a);
            
            if(Params.Link) {
                Link_a.style.cursor = 'pointer';
                Link_a.target = "_blank";
                Link_a.href = Params.Link;
              }
      
              break;
      
      
            default:
      
              break;
            }

      
        }


    CreateView() {
        this.add_CSS_Class(
            ".generalFoot",
            `
                width: 100%;
                margin: 0 auto;
                background-color: ${this.BackGroundColor};
                bottom: 0;
                height: auto;
                z-index: 9;
        `
        );

        this.add_CSS_Class(
            ".CSS_EncabezadoH6",
            `
                color: ${this.Color};
                padding: 0.4vw;
                float: right;
                margin: 0;
        `
        );

        this.add_CSS_Class(
            ".CSS_EncabezadoH6left",
            `
                color: ${this.Color};
                padding: 0.4vw;
                float: left;
                margin: 0;
        `
        );

        //Create html elements (Using DOM)

        //Create element and associate a classes
        var ContenedorPrincipal = this.CreateElement_(
            "div",
            `generalFoot`,
            null,
            GALSAN_CreateBlock.Site_Column_Center
        );

        GALSAN_CreateBlock.AttachID(ContenedorPrincipal, "Container_OneLineFoot_" + this.id_); 
    

    }
}
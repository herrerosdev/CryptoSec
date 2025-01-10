class SeparatorIT {
    static MenuOpenFlag = false;
  
    constructor(Params) {
      this.Title_ = Params.Title;
      this.Photo_ = Params.Photo || "https://drive.hegalpa.es/commons/BACKGROUND/SeparatorIT.png";
      //CallBack to signed css properties with name of the class
      this.CreateElement_ = GALSAN_CreateBlock.CreateElementSigned;
      this.add_CSS_Class = GALSAN_CreateBlock.add_CSS_Class_SIGNED;
  

      this.ContenedorPrincipal = null;

      //Create View: Dynamic HTMLL CSS: Node
      this.CreateView();
    }


    AddFeature(Params){

      var Text = Params.Text || "Default text";
      let NewFeature = this.CreateElement_(
        "div",
        `Feature`,
         `· ${Text}`,
        GALSAN_CreateBlock.Site_Column_Center
      );
    

      
            this.ContenedorPrincipal.appendChild(NewFeature);
    }


    CreateView() {
      //Add fonts
      GALSAN_CreateBlock.addFont("FontHeadered", "Tiemann_Light");
      GALSAN_CreateBlock.addFont("FontSubtitle", "ComicRelief");
  
      //Add CSS
  
      //Add CSS

  
      this.add_CSS_Class(
        `.SEPARATOR_DIV`,
        `

        background-image: url(${this.Photo_});
        display: grid;
        grid-template-columns: 50% 50%;
        width: 100%;
        align-items: center;
        margin: 5% 0;
        magin: 0 auto;
        /* min-height: 159%; */
        /* padding-top: 10%; */
        /* padding-bottom: 7%; */
        /* margin: 11%; */

                `
      );



      this.add_CSS_Class(
        `.SEPARATOR_DIV`,
        `
        grid-template-columns: 50%;
        justify-content: center;

                `,

            GALSAN_CreateBlock.Screen_Middle
        );



      this.add_CSS_Class(
        `.SEPARATOR_DIV`,
        `
        grid-template-columns: 50%;
        justify-content: center;

                `,

            GALSAN_CreateBlock.Screen_Mobile
        );


                  //Border cornered
                  let NewFeature =  this.add_CSS_Class(
                    `.Feature`,
                    `
          
                    display: grid;
                    margin: 3% auto;
          
                  `
                  );
  

      //Create html elements (Using DOM)

      this.ContenedorPrincipal = this.CreateElement_(
        "div",
        `SEPARATOR_DIV`,
         null,
        GALSAN_CreateBlock.Site_Column_Center
      );
    
      //p_TITLE.id = "ServicesCartHeader";
      //ContenedorPrincipal.id = "ServicesCartHeaderGlobal";
    }
  }
  
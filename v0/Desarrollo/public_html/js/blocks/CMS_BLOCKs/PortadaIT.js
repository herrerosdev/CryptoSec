class PortadaIT {
    static MenuOpenFlag = false;
  
    constructor(Params) {
      this.Title_ = Params.Title;
      this.Photo_ = Params.Photo;
      //CallBack to signed css properties with name of the class
      this.CreateElement_ = GALSAN_CreateBlock.CreateElementSigned;
      this.add_CSS_Class = GALSAN_CreateBlock.add_CSS_Class_SIGNED;
  
      //Create View: Dynamic HTMLL CSS: Node
      this.CreateView();
    }
  
    ////////////////////////////
    ///////CreateView//////////
    //////////////////////////
  
    CreateView() {
      //Add fonts
      GALSAN_CreateBlock.addFont("FontHeadered", "Tiemann_Light");
      GALSAN_CreateBlock.addFont("FontSubtitle", "ComicRelief");
  
      //Add CSS
  
      //Add CSS

  
      this.add_CSS_Class(
        `.IMANGEN_EMPRESA`,
        `
        background-image: url(${this.Photo_});

          /* width: 100%; */
          /* height: 100%; */
          margin: 10% 0;
          height: 16vw;
          padding-top: 6vw;
          padding-left: 5%;
          color: white;
          font-size: 6VW;
          max-width: 100%;
  
              `
      );

  
      //Border cornered
      this.add_CSS_Class(
          `.BUTTON:hover`,
          `
  

  
  
        `
        );
  
      //Create html elements (Using DOM)

      var ContenedorPrincipal = this.CreateElement_(
        "div",
        `IMANGEN_EMPRESA`,
        `${this.Title_}`,
        GALSAN_CreateBlock.Site_Column_Center
      );
    
      //p_TITLE.id = "ServicesCartHeader";
      //ContenedorPrincipal.id = "ServicesCartHeaderGlobal";
    }
  }
  
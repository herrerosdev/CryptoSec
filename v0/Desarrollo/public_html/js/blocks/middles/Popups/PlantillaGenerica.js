class GenericTemplate {
    constructor(Delay = 6000) {
      //CallBack to signed css properties with name of the class
      this.CreateElement_ = GALSAN_CreateBlock.CreateElementSigned;
      this.add_CSS_Class = GALSAN_CreateBlock.add_CSS_Class_SIGNED;
      this.Delay_ = Delay;
      this.PrincipalContainerElement = null;
      
      //Create View: Dynamic HTMLL CSS: Node
      this.CreateView();
    }
  
    static item_counter = 0;
    ////////////////////////////
    ///////CreateView//////////
    //////////////////////////
  
    ShowLoader() {
      $(document).ready(function () {
        //$("#PrincipalContainerElement").hide();
        $("#PrincipalContainerElement").fadeIn(this.Delay_);
      });
    }
  
    HideLoader() {
      $(document).ready(function () {
        //$("#PrincipalContainerElement").hide();
        $("#PrincipalContainerElement").fadeOut(this.Delay_);
      });
    }
  
    CreateView() {
      //Add fonts
      GALSAN_CreateBlock.addFont("FontHeader", this.font_);
  
      //Create element and associate a classes
      this.add_CSS_Class(
        `.background`,
        `
            position: fixed;
            min-height: 100vh;
            width: 100%;
            background-color: #46768f96;
            z-index: 99;
        }
  
              `
      );
  
      this.add_CSS_Class(
        `.FormDiv`,
        `
            width: 45vh;
            height: 50vh;
            /* align-items: center; */
            background-color: #f1f1f1;
            margin: 29vh auto;
            /* text-align: center; */
  
              `
      );
  
      this.PrincipalContainerElement = this.CreateElement_(
        "div",
        "background",
        null,
        GALSAN_CreateBlock.Site_Body
      );
  
      this.PrincipalContainerElement.id = "PrincipalContainerLogin";
  
      var Spinner = this.CreateElement_("div", "FormDiv", null, null);
  
      this.PrincipalContainerElement.appendChild(Spinner);
        
      //$("#PrincipalContainerElement").hide();

/*       Spinner.animate(
        [
          // keyframes
          { transform: "rotate(-360deg)" },
          { transform: "rotate(360deg)" },
        ],
        {
          // timing options
          duration: 900,
          iterations: 999999999999999999999,
        }
      ); */
    }
  }
  
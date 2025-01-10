class POPUP_Info {
    constructor(Params, Title)
    {
  
      //CallBack to signed css properties with name of the class
      this.CreateElement_ = GALSAN_CreateBlock.CreateElementSigned;
      this.add_CSS_Class = GALSAN_CreateBlock.add_CSS_Class_SIGNED;
  
      this.Title_ = Title;

      this.BackGroundColor_ = Params.BackGroundColor;

      //this.Font_family_ = Params.Font_family

      //Create View: Dynamic HTMLL CSS: Node
      this.CreateView();
  
    }
  
    static FLAG_BlockHidden = false; //Mientras esta variable este activa la funciona hide login no tiene efecto
  
    static StartHidden = 1
    static StartShow = 0
    ////////////////////////////
    ///////CreateView//////////
    //////////////////////////
  
    static ShowLoginFADE() {
      $(document).ready(function () {
        //$("#PrincipalContainerElement").hide();
        $("#POPUPrincipalContainerInfo").fadeIn(1000);
      });
    }
  
    static HideLoginFADE() {
      if (POPUP_Info.FLAG_BlockHidden != true) {
        $(document).ready(function () {
          //$("#PrincipalContainerElement").hide();
          $("#POPUPrincipalContainerInfo").fadeOut(1000);
        });
      } else {
        POPUP_Info.FLAG_BlockHidden = false;
      }
    }
  
    static HideLogin() {
      if (POPUP_Info.FLAG_BlockHidden != true) {
  
      $("#POPUPrincipalContainerInfo").hide();
  
    } else {
      POPUP_Info.FLAG_BlockHidden = false;
    }
    }
  
  
    static GetName() {
      return document.getElementById('Name').value;
    }
  
    static GetPass() {
      return document.getElementById('Clave').value;
    }
  
    CreateView() {
      //Add fonts
      GALSAN_CreateBlock.addFont("FontHeader", this.font_);
      GALSAN_CreateBlock.addFont("FontHeader", "IndieFlower-Regular");
      GALSAN_CreateBlock.addFont("FontSubtitle", "ComicRelief");
  
      //Create element and associate a classes
      this.add_CSS_Class(
        `.background`,
        `
        position: fixed;
        min-height: 100vh;
        bottom: 0%;
        width: 100%;
        background-color: ${this.BackGroundColor_};
        z-index: 999;
    
                `
      );
  
      this.add_CSS_Class(
        `.FormDiv`,
        `
        /* width: 40vh; */
        text-align: center;
         width: 90%;
        height: fit-content;
        max-width: 425px;
        /* max-height: 649px; */
        /* height: 50vh; */
        /* align-items: center; */
        background-color: #f1f1f1;
        margin: 10vh auto;
            padding: 2%;
        /* text-align: center; */
        border-radius: 20px;
                `
      );
  
      this.add_CSS_Class(
        `.inputContainer`,
        `
        display: flex;
        flex-direction: column;
        /* margin-top: 0vh; */
        /* margin-left: 10vw; */
        padding-left: 30px;
        padding-right: 30px;
        /* margin-right: 1vw; */
        margin-bottom: 2vw;
  
                `
      );
      this.add_CSS_Class(
        `.input`,
        `
        margin-top: 3vh;
        width: 40vw;
        min-height: 25px;
        max-width: 200px;
        min-width: 100px;
  
                `
      );
  
      this.add_CSS_Class(
        `.TitleContainer`,
        `
          margin-top: 3vh;
          text-align: center;
          width: 100%;
  
                `
      );
  
      this.add_CSS_Class(
        `.Title`,
        `
          font-family: FontSubtitle;
          font-family: FontSubtitle;
          font-size: 25px;
  
  
                `
      );

      this.add_CSS_Class(
        `.Title`,
        `
          font-family: FontSubtitle;
          font-family: FontSubtitle;
          font-size: 20px;
  
  
                `,
        GALSAN_CreateBlock.Screen_Mobile

      );


  
      this.add_CSS_Class(
        `.button`,
        `
  
  
                `
      );
  
      this.add_CSS_Class(
        `.RequestLogin`,
        `
          display: grid;
          margin-top: 5vh;
          padding: 2vh;
          font-size: 15px;
          margin-bottom: 99;
                `
      );
  
      this.PrincipalContainerElement = this.CreateElement_(
        "div",
        "background",
        null,
        GALSAN_CreateBlock.Site_Body
      );
  
      this.PrincipalContainerElement.onclick = function () {
        POPUP_Info.HideLoginFADE();
      }; //Cerrar login pulsando en el fondo
      this.PrincipalContainerElement.id = "POPUPrincipalContainerInfo";
  
      var PopupContainer = this.CreateElement_("div", "FormDiv", null, null);
  
      PopupContainer.onclick = function () {
        POPUP_Info.FLAG_BlockHidden = true;
      }; //Evita que se cierre si se pulsa sobre el popup
  
      var TitleContainer = this.CreateElement_(
        "div",
        "TitleContainer",
        null,
        null
      );
  
      var Title = this.CreateElement_("p", "Title", this.Title_, null);


      TitleContainer.appendChild(Title);

      PopupContainer.appendChild(TitleContainer);
  

      this.PrincipalContainerElement.appendChild(PopupContainer);

    }
  }
  
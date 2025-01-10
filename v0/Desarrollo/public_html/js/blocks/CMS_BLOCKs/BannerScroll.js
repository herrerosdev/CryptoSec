
class BannerScroll {
    constructor(Params) {

      //Estructura
      //{"text": "", "Id_to_scroll": ""} ///Texto del banner y id del elemento al que quieres que haga scroll al clickar
  
      this.text_ = Params.text;
      this.Id_to_scroll_ = Params.Id_to_scroll;

      //CallBack to signed css properties with name of the class
      this.CreateElement_ = GALSAN_CreateBlock.CreateElementSigned;
      this.add_CSS_Class = GALSAN_CreateBlock.add_CSS_Class_SIGNED;
  
  
      this.ViewConstructor();
    }
  
    getClassName() {
      return this.constructor.name;
    }
  

  
    HoverContent() {
     var Span_lineID = document.getElementById("Span_lineID");

     Span_lineID.classList.add(`${this.getClassName()}UpAndDown`);

    }

    UnHoverContent() {
      var Span_lineID = document.getElementById("Span_lineID");
 
      Span_lineID.classList.remove(`${this.getClassName()}UpAndDown`);
 
     }
  
    ViewConstructor() {
  
  
      this.add_CSS_Class(
        `.Main_Container`,
        `
height: auto;
    width: 100%;
    background-color: #487071;
  
          `
      );
  

      this.add_CSS_Class(
        `.Text_Container`,
        `
    color: #ffffff;
    margin: 0 auto;
    display: flex;
    width: auto;
    padding: 1% 0;
    align-items: center;
    align-content: center;
    justify-content: center;     
          `
      );

      this.add_CSS_Class(
        `.Text`,
        `
font-size: 1.5vw;
    margin: 0;
          `
      );

      this.add_CSS_Class(
        `.Text_Container:hover ~ .Span_Menu_toggle::before`,
        `
  top: calc(48% - 0px);
          `
      );


      this.add_CSS_Class(
        `.Text_Container:hover ~ .Span_Menu_toggle::after`,
        `
    top: calc(48% - 0px);
          `
      );

      this.add_CSS_Class(
        `.Span_Menu_toggle`,
        `
    display: inline-block;
    width: 30px;
    position: relative;
    height: 40px;
    margin: 0px 2%;
          `
      ); 


      this.add_CSS_Class(
        `.Span_Menu_toggle::before`,
        `
        position: absolute;
        top: calc(50% - 0px);
        right: 5px;
        width: 20px;
        height: 5px;
        background:  #ffffff;
        content: "";
        will-change: transform;
        transition: all .2s ease;
        transform: rotate(45deg) translate(-5px, 5px);
          `
      ); 
    
      this.add_CSS_Class(
        `.Span_Menu_toggle::after`,
        `
        position: absolute; 
        top: calc(50% - 0px);
        left: 3px;
        width: 20px;
        height: 5px;
        background:  #ffffff;
        content: "";
        will-change: transform;
        transition: all .2s ease;
        position: absolute;
        transform: rotate(-45deg) translate(5px, 5px);
      
          `
      ); 

      this.add_CSS_Class(
        `.UpAndDown`,
        `
         animation: bounce 2s both infinite;
         animation-delay: 0s;
           -webkit-animation: bounce 2s both infinite;
  -moz-animation: bounce 2s both infinite;
  -o-animation: bounce 2s both infinite;
  -ms-animation: bounce 2s both infinite;
      
          `
      ); 

      this.add_CSS_Class(
        `@-webkit-keyframes bounce`,
        `
         20% { transform:translateY(0%); }
      40% { transform:translateY(-20%); }
      60% { transform:translateY(5%); }
      80% { transform:translateY(-20%); }
      90% { transform:translateY(5%); }
      95% { transform:translateY(-10%); }
  
      100% { transform:translateY(0); }
      
          `
      );
  
      this.add_CSS_Class(
        `@keyframes bounce`,
        `
          20% { transform:translateY(0%); }
      40% { transform:translateY(-20%); }
      60% { transform:translateY(5%); }
      80% { transform:translateY(-20%); }
      90% { transform:translateY(5%); }
      95% { transform:translateY(-10%); }
  
      100% { transform:translateY(0); }
          `
      );
      
          ///////////////////////////////////////////////////////////////
          //////////////////middle///////////////////////////////////////
          ///////////////////////////////////////////////////////////////
  

    this.add_CSS_Class(
      `.Text`,
      `

         font-size: 4vw;
        `, GALSAN_CreateBlock.Screen_Middle
    );


            ///////////////////////////////////////////////////////////////
          //////////////////mobile///////////////////////////////////////
          ///////////////////////////////////////////////////////////////
  


        this.add_CSS_Class(
          `.Text`,
          `
  
             font-size: 4vw;
            `, GALSAN_CreateBlock.Screen_Mobile
        );

  
      var Container_principal = this.CreateElement_(
        "div",
        `Main_Container`,
        null,
        GALSAN_CreateBlock.Site_Column_Center
      );
  
      /////Container_principal.alt = this.alt_

        var Text_Container = this.CreateElement_(
          "div",
          `Text_Container`
        );
    
        Container_principal.appendChild(Text_Container);

       

        var Text = this.CreateElement_(
            "h5",
            `Text`,
            this.text_
          );
      
          Text_Container.appendChild(Text);


          var Span_Menu_toggle = this.CreateElement_(
            "span",
            `Span_Menu_toggle`
          );
      
          Text_Container.appendChild(Span_Menu_toggle);
         GALSAN_CreateBlock.AttachID(Span_Menu_toggle, "Span_lineID");
      
         // Span_Menu_toggle.classList.add(`${this.getClassName()}line_1`););
         GALSAN_CreateBlock.Attach_Attribute_onmouseover(Text_Container, "BannerScroll.Banner.HoverContent()");
         GALSAN_CreateBlock.Attach_Attribute_onmouseout(Text_Container, "BannerScroll.Banner.UnHoverContent()");
    
         // GALSAN_CreateBlock.Attach_Attribute_onClick(Container_principal, `Asked_Questions.Asked.ToggleNav(`+ '"' + `${this.getClassName()}` + '",' + Params.Number + `)`);
         Text_Container.onclick = function () { 
          var element = document.getElementById(BannerScroll.Banner.Id_to_scroll_);
  
          element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
         }
    }
  }
  
  
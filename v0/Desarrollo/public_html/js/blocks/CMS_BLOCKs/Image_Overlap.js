
class ImageOverlapBlock {
    constructor(Params) {
  
      //Estructura Gallery
      //{"Direction": "Left", "BacKColor": ""}  //Left or Right //


     /////                ------
      /////               | Img|  ____
      /////               |----- |_Text|
      ////                  | Img|
     ////                    ------

      this.Direction_ = Params.Direction;
      this.BacKColor_ = Params.BacKColor;
      //CallBack to signed css properties with name of the class
      this.CreateElement_ = GALSAN_CreateBlock.CreateElementSigned;
      this.add_CSS_Class = GALSAN_CreateBlock.add_CSS_Class_SIGNED;
  
  
      this.ViewConstructor();
    }
  
    getClassName() {
      return this.constructor.name;
    }
  
    AddBlock(Params) {
  
      //Estructura
      //{"Photo": "", "alt": "", "Title": "", "Text": ""}
  
      var Main_Container_ID = document.getElementById("Container_Image_Overlap_ID");
  
      var Container_Panel = this.CreateElement_(
        "div",
        `Container_Panel`
  
  
      );
  
      Main_Container_ID.appendChild(Container_Panel);
  
  
      var Container_Image = this.CreateElement_(
        "div",
        `Container_Image`


      );

      Container_Panel.appendChild(Container_Image);


      var Image = this.CreateElement_(
        "img",
        `Image`,
        Params.Photo


      );

      Container_Image.appendChild(Image);
      this.ElementIsVisible(Image, "FadeIn");

      Image.alt = Params.alt;
      this.add_CSS_Class(`.Image`,`top: 0;width: 60%;`);   
      this.add_CSS_Class(`.Image`,`top: 8vw; width: 60%;`,GALSAN_CreateBlock.Screen_Middle);   

      var Image2 = this.CreateElement_(
        "img",
        `Image2`,
        Params.Photo2


      );

      Container_Image.appendChild(Image2);

      Image2.alt = Params.alt2;
      this.ElementIsVisible(Image2, "FadeIn2");
    
      this.add_CSS_Class(`.Image2`,`top: -20%;;width: 50%; left: 50%;`);   
      this.add_CSS_Class(`.Image2`,`width: 50%; left: 50%;`,GALSAN_CreateBlock.Screen_Middle);  

      var Container_Text = this.CreateElement_(
        "div",
        `Container_Text`


      );

      Container_Panel.appendChild(Container_Text);

      var Text_Title = this.CreateElement_(
        "h3",
        `Text`,
        Params.Title


      );

      Container_Text.appendChild(Text_Title);

      var Text = this.CreateElement_(
        "p",
        `Text_Append`,
        Params.Text


      );

      Container_Text.appendChild(Text);
  
      switch (this.Direction_) {
  
        case "Left":

        Container_Image.classList.add(`${this.getClassName()}Left`);
        Container_Text.classList.add(`${this.getClassName()}Left`);

          this.ElementIsVisible(Container_Text, "SlideLeft");
          this.Direction_ = "Right";

           this.add_CSS_Class(`.Container_Image.Left`,`order: 1; left: 2%;`);
          this.add_CSS_Class(`.Container_Image.Left`,`left: 0; width: 100%; padding: 0;`,GALSAN_CreateBlock.Screen_Middle);
          this.add_CSS_Class(`.Container_Text.Left`,`order: 2; left: -10%; min-height: 30%; height: fit-content; transform: translateY(30%) translateX(100%);`);
          this.add_CSS_Class(`.Container_Text.Left`,`width: 60%;top: -12vw;left: 10%;`,GALSAN_CreateBlock.Screen_Middle);
          this.add_CSS_Class(`.Container_Text.Left`,`width: 80%;left: 5%; top: -20vw;`,GALSAN_CreateBlock.Screen_Mobile);

  
          break;
  
        case "Right":
  
       this.add_CSS_Class(`.Container_Image`,`order: 2; left: -2%;`);
        this.add_CSS_Class(`.Container_Text`,`order: 1; left: 10%; min-height: 30%; height: fit-content; transform: translateY(35%) translateX(-100%);`);
        this.add_CSS_Class(`.Container_Text`,`width: 60%;top: 6vw;left: 10%;`,GALSAN_CreateBlock.Screen_Middle);
        this.add_CSS_Class(`.Container_Text`,`width: 80%;top: 0vw;left: 0%;`,GALSAN_CreateBlock.Screen_Mobile);

          this.ElementIsVisible(Container_Text, "SlideRight");
          this.Direction_ = "Left";

          break;
  
  
        default:
  
          break;
      };
  
  
    }
  
  
  
    ElementIsVisible(elem, EffectName) {
  
      var ClassName = this.getClassName();
      var observer = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting === true)
          elem.classList.add(ClassName + EffectName);
      }, { threshold: [0] });
  
      observer.observe(elem);
    }
  
  
  
  
    ViewConstructor() {
  
  
      this.add_CSS_Class(
        `.Main_Container`,
        `
      width: 100%;
      margin-top: 3vh
  
          `
      );
  
      this.add_CSS_Class(
        `.Container_Panel`,
        `
display: inline-flex;
    width: 100%;
    flex-direction: row;
    padding: 5% 0%;
    position: relative;
    height: auto;
      overflow-x: hidden;
          `
      );
  
      this.add_CSS_Class(
        `.Container_Image`,
        `
          width: 66.66%;
              padding: 0% 5%;
  position: relative;
  
      
          `
      );
  
      this.add_CSS_Class(
        `.Image`,
        `
         
        position:relative;
        opacity:0;
      
          `
      );
  

      this.add_CSS_Class(
        `.Image2`,
        `
         
        position:relative;
          opacity:0;
          `
      );
  
  
  
      this.add_CSS_Class(
        `.Container_Text`,
        `
    width: 33.33%;
    padding: 5% 5%;
    background-color: ${this.BacKColor_};
    position: relative;
    z-index: 3;
    overflow-x: hidden;
      
          `
      );
  
  
      this.add_CSS_Class(
        `.Container_Text`,
        `
        text-align: justify;
  
    
        `
      );


      this.add_CSS_Class(
        `.FadeIn`,
        `
     -webkit-animation-name: fadeIn;
      animation-name: fadeIn;
      -webkit-animation-duration: 2s;
      animation-duration: 2s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
         -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
        `
      );
 
      this.add_CSS_Class(
        `.FadeIn2`,
        `
     -webkit-animation-name: fadeIn;
      animation-name: fadeIn;
      -webkit-animation-duration: 2s;
      animation-duration: 2s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
        -webkit-animation-delay: 1s;
  animation-delay: 1s;
        `
      );

      this.add_CSS_Class(
        `@-webkit-keyframes fadeIn`,
        `
   0% {opacity: 0;}
    100% {opacity: 1;}
      
          `
      );
  
      this.add_CSS_Class(
        `@keyframes fadeIn`,
        `
   0% {opacity: 0;}
    100% {opacity: 1;}
      
          `
      );
  
 
  
      this.add_CSS_Class(
        `.SlideLeft`,
        `
    -webkit-animation-name: SlideLeft;
    animation-name: SlideLeft;
    -webkit-animation-duration: 3s;
    animation-duration: 3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  
    
        `
      );
  
      this.add_CSS_Class(
        `.SlideRight`,
        `
    -webkit-animation-name: SlideRight;
    animation-name: SlideRight;
    -webkit-animation-duration: 3s;
    animation-duration: 3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  
    
        `
      );
  
  
      this.add_CSS_Class(
        `@-webkit-keyframes SlideRight`,
        `
  0% {
    -webkit-transform: translateX(-100%) translateY(35%);
    transform: translateX(-100%) translateY(35%);
    visibility: visible;
    }
    100% {
    -webkit-transform: translateX(0) translateY(35%);
    transform: translateX(0) translateY(35%);
    }
      
          `
      );
  
      this.add_CSS_Class(
        `@keyframes SlideRight`,
        `
  0% {
    -webkit-transform: translateX(-100%) translateY(35%);
    transform: translateX(-100%) translateY(35%);
    visibility: visible;
    }
    100% {
    -webkit-transform: translateX(0) translateY(35%);
    transform: translateX(0) translateY(35%);
    }
          `
      );
  
      this.add_CSS_Class(
        `@-webkit-keyframes SlideLeft`,
        `
   0% {
    -webkit-transform: translateX(100%) translateY(30%);
    transform: translateX(100%) translateY(30%);
    visibility: visible;
    }
    100% {
    -webkit-transform: translateX(0) translateY(30%);
    transform: translateX(0) translateY(30%);
    }
      
          `
      );
  
      this.add_CSS_Class(
        `@keyframes SlideLeft`,
        `
           0% {
    -webkit-transform: translateX(100%) translateY(30%);
    transform: translateX(100%) translateY(30%);
    visibility: visible;
    }
    100% {
    -webkit-transform: translateX(0) translateY(30%);
    transform: translateX(0) translateY(30%);
    }
          `
      );
  
          ///////////////////////////////////////////////////////////////
          //////////////////middle///////////////////////////////////////
          ///////////////////////////////////////////////////////////////
  
  
          this.add_CSS_Class(
          `.Container_Panel`,
        `
    flex-direction: column;

  
              `, GALSAN_CreateBlock.Screen_Middle
          );

          this.add_CSS_Class(
            `.Container_Image`,
          `
       left: 0; 
       width: 100%;
  
    
                `, GALSAN_CreateBlock.Screen_Middle
            );
    
  
         
      
      
          this.add_CSS_Class(
            `.Container_Text`,
            `
          width: 40%;
      padding: 0% 2%;
              `, GALSAN_CreateBlock.Screen_Middle
          );
  
          this.add_CSS_Class(
            `.Text`,
            `
          font-size: 3vw;
              `, GALSAN_CreateBlock.Screen_Middle
          );
  
          this.add_CSS_Class(
            `.Text_Append`,
            `
          font-size: 2vw;
              `, GALSAN_CreateBlock.Screen_Middle
          );
  
  
  
        ///////////////////////////////////////////////////////////////
        //////////////////mobile///////////////////////////////////////
        ///////////////////////////////////////////////////////////////
  
  
          this.add_CSS_Class(
            `.Container_Panel`,
          `
    
        flex-direction: column;
          align-items: center;
          
          
                `, GALSAN_CreateBlock.Screen_Mobile
            );
    
            this.add_CSS_Class(
              `.Container_Image`,
              `
     width: 100%;
   
            
                `, GALSAN_CreateBlock.Screen_Mobile
            );
        
        
        
            this.add_CSS_Class(
              `.Container_Text`,
              `
                width: 90%;
              
    +
                `, GALSAN_CreateBlock.Screen_Mobile
            );
  
            this.add_CSS_Class(
              `.Text`,
              `
            font-size: 5vw;
                `, GALSAN_CreateBlock.Screen_Mobile
            );
    
            this.add_CSS_Class(
              `.Text_Append`,
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
  
      GALSAN_CreateBlock.AttachID(Container_principal, "Container_Image_Overlap_ID");
  
  
  
  
  
  
  
    }
  }
  
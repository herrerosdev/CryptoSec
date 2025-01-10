class Portada_Carrousel_Restaurant {
    constructor(Params) {

      //Estructura
      //{"Color": "","Title": "", "Subtitle": "", "Number_items": 3}
  
      this.Title_ = Params.Title;
      this.Subtitle_ = Params.Subtitle;
      this.Color_ = Params.Color;
      this.Carrousel_items_ = [];
      this.Number_items_ = Params.Number_items;

      //CallBack to signed css properties with name of the class
      this.CreateElement_ = GALSAN_CreateBlock.CreateElementSigned;
      this.add_CSS_Class = GALSAN_CreateBlock.add_CSS_Class_SIGNED;
  
  
      this.ViewConstructor();
    }
  
    getClassName() {
      return this.constructor.name;
    }
  
    AddItemCarrousel(Params) {

        //Estructura
      //{"Main_Image":"","Aux_text":"", "Id": ""}
  

      var slider_controls_pointsID = document.getElementById("slider_controls_pointsID");
      var Container_imageID = document.getElementById("Container_imageID");
      var Cont_dinamic_textID = document.getElementById("Cont_dinamic_textID");
      
      

      var label_control = this.CreateElement_(
        "span",
        "label_control"
  
      );
  
      slider_controls_pointsID.appendChild(label_control);

      GALSAN_CreateBlock.AttachID(label_control, Params.Id);

      GALSAN_CreateBlock.Attach_Attribute_onClick(label_control, `Portada_Carrousel_Restaurant.o_Port_.Change(`+ '"' + Params.Id + '"' + `)`);
    


      var Aux_text = this.CreateElement_(
        "h3",
        "Aux_text",
        Params.Aux_text
  
      );
  
      Cont_dinamic_textID.appendChild(Aux_text);

      GALSAN_CreateBlock.AttachID(Aux_text, "h3ID" + Params.Id);

      var Main_Image = this.CreateElement_(
        "img",
        "Main_Image",
        Params.Main_Image
  
      );
  
      Container_imageID.appendChild(Main_Image);


      GALSAN_CreateBlock.AttachID(Main_Image, "Main_ImageID" + Params.Id);

      this.Carrousel_items_.push(Params.Id);

      if(this.Carrousel_items_.length == this.Number_items_) {
        
        $(window).on("load", function() {
          $(document).ready(function () {
            Portada_Carrousel_Restaurant.o_Port_.Start_Carrousel();
          });;
      });
   
      
      }

  
    }

    Change(Id) {

      

      for (let index = 0; index < this.Carrousel_items_.length; index++) {
        if(this.Carrousel_items_[index] == Id) {

          var Dot = document.getElementById(this.Carrousel_items_[index]);
          var Text = document.getElementById("h3ID" + this.Carrousel_items_[index]);
          var Image = document.getElementById("Main_ImageID" +  this.Carrousel_items_[index]);


          Dot.classList.add(`${Portada_Carrousel_Restaurant.o_Port_.getClassName()}active`);
          Text.classList.add(`${Portada_Carrousel_Restaurant.o_Port_.getClassName()}active`);
          Image.classList.add(`${Portada_Carrousel_Restaurant.o_Port_.getClassName()}active`);
          
          

        } else {

          var Dot = document.getElementById(this.Carrousel_items_[index]);
          var Text = document.getElementById("h3ID" + this.Carrousel_items_[index]);
          var Image = document.getElementById("Main_ImageID" +  this.Carrousel_items_[index]);

         
          Dot.classList.remove(`${Portada_Carrousel_Restaurant.o_Port_.getClassName()}active`);
          Text.classList.remove(`${Portada_Carrousel_Restaurant.o_Port_.getClassName()}active`);
          Image.classList.remove(`${Portada_Carrousel_Restaurant.o_Port_.getClassName()}active`);

        }
        
      }
      
    }

    addActive(Element) {
      var Dot = document.getElementById(Element);
      var Text = document.getElementById("h3ID" + Element);
      var Image = document.getElementById("Main_ImageID" +  Element);
        
        
      Dot.classList.add(`${Portada_Carrousel_Restaurant.o_Port_.getClassName()}active`);
      Text.classList.add(`${Portada_Carrousel_Restaurant.o_Port_.getClassName()}active`);
      Image.classList.add(`${Portada_Carrousel_Restaurant.o_Port_.getClassName()}active`);

     }

     removeActive (Element) {

      var Dot = document.getElementById(Element);
      var Text = document.getElementById("h3ID" + Element);
      var Image = document.getElementById("Main_ImageID" +  Element);
        
        
      Dot.classList.remove(`${Portada_Carrousel_Restaurant.o_Port_.getClassName()}active`);
      Text.classList.remove(`${Portada_Carrousel_Restaurant.o_Port_.getClassName()}active`);
      Image.classList.remove(`${Portada_Carrousel_Restaurant.o_Port_.getClassName()}active`);

     }

    Start_Carrousel() {

      Portada_Carrousel_Restaurant.o_Port_.addActive(Portada_Carrousel_Restaurant.o_Port_.Carrousel_items_[0]);
      setInterval(function () {
        for (let i = 0; i < Portada_Carrousel_Restaurant.o_Port_.Carrousel_items_.length; i++) {
          if(i +1 == Portada_Carrousel_Restaurant.o_Port_.Carrousel_items_.length) {
         
           Portada_Carrousel_Restaurant.o_Port_.addActive(Portada_Carrousel_Restaurant.o_Port_.Carrousel_items_[0]);
           
           Portada_Carrousel_Restaurant.o_Port_.removeActive( Portada_Carrousel_Restaurant.o_Port_.Carrousel_items_[i]);
            break;
           
          } 
          var image = document.getElementById("Main_ImageID" + Portada_Carrousel_Restaurant.o_Port_.Carrousel_items_[i]);
          if(image.classList.contains(`${Portada_Carrousel_Restaurant.o_Port_.getClassName()}active`)) {
           Portada_Carrousel_Restaurant.o_Port_.removeActive( Portada_Carrousel_Restaurant.o_Port_.Carrousel_items_[i]);
          
            Portada_Carrousel_Restaurant.o_Port_.addActive(Portada_Carrousel_Restaurant.o_Port_.Carrousel_items_[i + 1]);
            break;
          
          }

        } 
    }, 20000);


    }
  

  
    ViewConstructor() {
  
  
      this.add_CSS_Class(
        `.Container`,
        `
      
      padding-top: 0px !important;
      width: 100%;
      position: relative;
      padding-bottom: 160px !important;
      min-height: 62vh;
      -webkit-align-content: center;
      align-content: center;
         flex-direction: row;
    align-items: center;
       background-color: ${this.Color_};
  
          `
      );
  
  
  
  
      this.add_CSS_Class(
        `.Title`,
        `
      color: Black;
  
        animation: ZoomIn 6s both;
           animation-delay: 10s;
             -webkit-animation: ZoomIn 6s both;
    -moz-animation: ZoomIn 6s both;
    -o-animation: ZoomIn 6s both;
    -ms-animation: ZoomIn 6s both;
    font-size: 3vw;
    text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
               1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
      
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
        `.Subtitle`,
        `
      
    color: white;
             animation: ZoomIn 6s both;
           animation-delay: 10s;
             -webkit-animation: ZoomIn 6s both;
    -moz-animation: ZoomIn 6s both;
    -o-animation: ZoomIn 6s both;
    -ms-animation: ZoomIn 6s both;
    font-size: 2vw;
      
          `
      );
  
      this.add_CSS_Class(
        `@-webkit-keyframes ZoomIn`,
        `
    0% {
    opacity: 0;
    -webkit-transform: scale3d(.3, .3, .3);
    transform: scale3d(.3, .3, .3);
    }
    50% {
    opacity: 1;
    }
    
        `
      );
  
      this.add_CSS_Class(
        `@keyframes ZoomIn`,
        `
    0% {
    opacity: 0;
    -webkit-transform: scale3d(.3, .3, .3);
    transform: scale3d(.3, .3, .3);
    }
    50% {
    opacity: 1;
    }
  
      `
      );
  
  
      this.add_CSS_Class(
        `.slider_controls_points`,
        `
    position: absolute;
    bottom: 50%;
    transform: translate(0%, 50%);
    left: 2%;
    display: flex;
    width: 8%;
    z-index: 100;
    list-style: none;
    text-align: center;
    flex-direction: column;
        grid-column: 1;

          `
      );


      this.add_CSS_Class(
        `.label_control`,
        `
    display: inline-block;
    border: none;
    height: 1.4vw;
    margin: 0.5vw 0;
    width:  1.4vw;
    border-radius: 50%;
    cursor: pointer;
    background-color: white;
    transition: background-color 0.2s linear;
          `
      );

      

      this.add_CSS_Class(
        `.Container_content`,
        `
   
    display: grid;
    width: 100%;
    grid-template-columns: 10% 50% 40%;
    /* float: right; */
    /* margin-left: 10%; */
    position: relative;
    flex-direction: row;
    align-content: center;
    justify-content: flex-end;
    height: 100%;
    align-items: center;
  
          `
      );

        
      this.add_CSS_Class(
        `.Container_text`,
        `
    display: flex;
    /* height: 100%; */
    position: relative;
    width: 100%;
    justify-items: center;
    justify-content: space-evenly;
    align-content: center;
    grid-column: 2;
    flex-direction: column;

      
          `
      );

        
      this.add_CSS_Class(
        `.Container_fix`,
        `
      display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 60%;
          `
      );



      this.add_CSS_Class(
        `.Aux_text`,
        `
       color: white;
      text-transform: uppercase;
      text-decoration: none;
      letter-spacing: 0.05em;
      display: inline-block;
      position: absolute;
      opacity: 0;
      font-size: 2vw;
        `
      );

      this.add_CSS_Class(
        `.Cont_dinamic_text`,
        `

    display: flex;
    position: relative;
    height: 40%;
    width: 90%;
    justify-content: center;
    align-items: flex-start;

  
          `
      );


      this.add_CSS_Class(
        `.Main_Image`,
        `


        display: flex;
    position: absolute;
    opacity: 0;
    visibility: hidden;
    width: 50%;
    height: auto;


  
          `
      );
      this.add_CSS_Class(
        `.Container_image`,
        `
    width: 100%;
    position: relative;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    min-height: 50vh;
        clip-path: inset(0 0 0 -100vw);
    grid-column: 3;
          `
      );



      this.add_CSS_Class(
        `.Aux_text.active`,
        `
-webkit-animation-name: SlideRightCarrousel;
  animation-name: SlideRightCarrousel;
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
          `
      );

      this.add_CSS_Class(
        `.Main_Image.active`,
        `

        opacity:1;
        visibility: visible;
     animation: Translate 4s linear both 0s, rotateIn 10s linear infinite; 
    -webkit-animation: Translate 4s linear both 0s, rotateIn 10s linear infinite; 
  -moz-animation: Translate 4s linear both 0s, rotateIn 10s linear infinite; 
  -o-animation: Translate 4s linear both 0s, rotateIn 10s linear infinite; 
  -ms-animation: Translate 4s linear both 0s, rotateIn 10s linear infinite; 
-webkit-animation-delay: 0s, 4s;
animation-delay: 0s, 4s;
 
 
  
          `
      );


      
      this.add_CSS_Class(
        `@-webkit-keyframes SlideRightCarrousel`,
        `
 0% {
 -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
  visibility: visible;
  }
  50% {
  opacity: 1;
  }
  100% {
  -webkit-transform: translateX(0);
  transform: translateX(0);
  opacity: 1;
  }

          `
      );
  
      this.add_CSS_Class(
        `@keyframes SlideRightCarrousel`,
        `
 0% {
 -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
  visibility: visible;
  }
  50% {
  opacity: 1;
  }
  100% {
  -webkit-transform: translateX(0);
  transform: translateX(0);
  opacity: 1;
  }
  
    `
      );



      this.add_CSS_Class(
        `@-webkit-keyframes rotateIn`,
        `
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  
  }

          `
      );
  
      this.add_CSS_Class(
        `@keyframes rotateIn`,
        `
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  
  }

    `
      );

      this.add_CSS_Class(
        `@-webkit-keyframes Translate`,
        `
 0% {

 transform: translateX(100%) rotateZ(0deg);
 opacity: 1;
  }
  
     55% {
   transform: translateX(-30%) translateY(0%) rotateZ(250deg);
    opacity: 1;
  }

   60% {
   transform: translateX(-30%)  translateY(-10%) rotateZ(250deg);
    opacity: 1;
  }

       65% {
   transform: translateX(-30%) translateY(0%) rotateZ(250deg);
    opacity: 1;
  }

  100% {
     transform: translateX(0) rotateZ(0deg);
    opacity: 1;
  }


          `
      );
  
      this.add_CSS_Class(
        `@keyframes Translate`,
        `
 0% {

 transform: translateX(100%) rotateZ(0deg);
 opacity: 1;
  }
  
     55% {
   transform: translateX(-30%) translateY(0%) rotateZ(250deg);
    opacity: 1;
  }

   60% {
   transform: translateX(-30%)  translateY(-10%) rotateZ(250deg);
    opacity: 1;
  }

       65% {
   transform: translateX(-30%) translateY(0%) rotateZ(250deg);
    opacity: 1;
  }

  100% {
     transform: translateX(0) rotateZ(0deg);
    opacity: 1;
  }

    
    `
      );





      this.add_CSS_Class(
        `.label_control.active`,
        `
background: rgb(255,218,0);
background: -moz-radial-gradient(circle, rgba(255,218,0,1) 0%, rgba(167,166,166,1) 60%, rgba(0,0,0,1) 100%);
background: -webkit-radial-gradient(circle, rgba(255,218,0,1) 0%, rgba(167,166,166,1) 60%, rgba(0,0,0,1) 100%);
background: radial-gradient(circle, rgba(255,218,0,1) 0%, rgba(167,166,166,1) 60%, rgba(0,0,0,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffda00",endColorstr="#000000",GradientType=1);       `
      );

     
  
          ///////////////////////////////////////////////////////////////
          //////////////////middle///////////////////////////////////////
          ///////////////////////////////////////////////////////////////
  
    
          this.add_CSS_Class(
            `.Container`,
            `
        
            min-height: 50vh;
        padding-bottom: 20px !important;
        
              `, GALSAN_CreateBlock.Screen_Middle
          );

    this.add_CSS_Class(
      `.Title`,
      `
  
          font-size: 5vw;
  
  
        `, GALSAN_CreateBlock.Screen_Middle
    );
  
    this.add_CSS_Class(
      `.Subtitle`,
      `
  
          font-size: 2vw;
  
  
        `, GALSAN_CreateBlock.Screen_Middle
    );
  

    this.add_CSS_Class(
      `.Aux_text`,
      `
  
          font-size: 2vw;
  
  
        `, GALSAN_CreateBlock.Screen_Middle
    );

    this.add_CSS_Class(
      `.label_control`,
      `
   height: 2vw;
  
    width: 2vw;
  
  
        `, GALSAN_CreateBlock.Screen_Middle
    );
    

    this.add_CSS_Class(
      `.Container_text`,
      `
      width: 100%;

  
        `, GALSAN_CreateBlock.Screen_Middle
    );


    this.add_CSS_Class(
      `.Container_image`,
      `
      width: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
  
        `, GALSAN_CreateBlock.Screen_Middle
    );
    
    this.add_CSS_Class(
      `.Main_Image`,
      `

width: 80%;


        `, GALSAN_CreateBlock.Screen_Middle
    );

            ///////////////////////////////////////////////////////////////
          //////////////////mobile///////////////////////////////////////
          ///////////////////////////////////////////////////////////////
  



        this.add_CSS_Class(
          `.Container_content`,
          `
               display: grid;
        width: 100%;
        margin-left: 0;
        grid-template-rows: 55% 45%;
        grid-template-columns: 5% 95%;
        min-height: 80vh;
            `, GALSAN_CreateBlock.Screen_Mobile
        );
      
        this.add_CSS_Class(
          `.Container_text`,
          `
        width: 70%;
        height: 100%;
        margin: 0 15%;
        text-align: justify;
        
            `, GALSAN_CreateBlock.Screen_Mobile
        );
      
        this.add_CSS_Class(
          `.Container_image`,
          `
        width: 100%;
        display: flex;
        overflow-x: hidden;
        align-content: center;
        height: 100%;
        justify-content: center;
        align-items: center;
            grid-column: 2;

        
            `, GALSAN_CreateBlock.Screen_Mobile
        );

        this.add_CSS_Class(
          `.Main_Image`,
          `
   display: flex;

        width: 40%;

        
            `, GALSAN_CreateBlock.Screen_Mobile
        );

        this.add_CSS_Class(
          `.Container`,
          `
 min-height: 80vh;
            padding-bottom: 0px !important;
      
      
            `, GALSAN_CreateBlock.Screen_Mobile
        );

        this.add_CSS_Class(
          `.Title`,
          `
      
              font-size: 7vw;
      
      
            `, GALSAN_CreateBlock.Screen_Mobile
        );
      
        this.add_CSS_Class(
          `.Subtitle`,
          `
      
              font-size: 4vw;
      
      
            `, GALSAN_CreateBlock.Screen_Mobile
        );
      
    
        this.add_CSS_Class(
          `.Aux_text`,
          `
      
              font-size: 3vw;
      
      
            `, GALSAN_CreateBlock.Screen_Mobile
        );


    this.add_CSS_Class(
      `.label_control`,
      `
   height: 3vw;
  
    width: 3vw;
  
  
        `, GALSAN_CreateBlock.Screen_Mobile
    );
      
        
  
        
      var Container_principal = this.CreateElement_(
        "div",
        `Container`,
        null,
        GALSAN_CreateBlock.Site_Column_Center
      );
  
      /////Container_principal.alt = this.alt_
  
      GALSAN_CreateBlock.AttachID(Container_principal, "Container_Portada_Carrousel_ID");
  
  
  
      var Container_content = this.CreateElement_(
        "div",
        `Container_content`
      );
  
      Container_principal.appendChild(Container_content);

      GALSAN_CreateBlock.AttachID(Container_content, "Container_contentID");



      var slider_controls_points = this.CreateElement_(
        "div",
        `slider_controls_points`
      );
  
      Container_content.appendChild(slider_controls_points);

      GALSAN_CreateBlock.AttachID(slider_controls_points, "slider_controls_pointsID");
  


         var Container_text = this.CreateElement_(
          "div",
          `Container_text`
        );
    
        Container_content.appendChild(Container_text);
        GALSAN_CreateBlock.AttachID(Container_text, "Container_textID");
    

        var Container_fix = this.CreateElement_(
          "div",
          `Container_fix`
        );
    
        Container_text.appendChild(Container_fix);


        var Title = this.CreateElement_(
          "h1",
          `Title`,
          this.Title_
    
    
        );
    
        Container_fix.appendChild(Title);
    
    
        var Subtitle = this.CreateElement_(
          "h3",
          `Subtitle`,
          this.Subtitle_
    
    
        );
    
        Container_fix.appendChild(Subtitle);

        var Cont_dinamic_text = this.CreateElement_(
          "div",
          `Cont_dinamic_text`
        );
    
        Container_text.appendChild(Cont_dinamic_text); 

        GALSAN_CreateBlock.AttachID(Cont_dinamic_text, "Cont_dinamic_textID")

     
        var Container_image = this.CreateElement_(
          "div",
          `Container_image`
        );
    
        Container_content.appendChild(Container_image);


    GALSAN_CreateBlock.AttachID(Container_image, "Container_imageID")
    
      
  
  
  
  
    }
  }
  
  
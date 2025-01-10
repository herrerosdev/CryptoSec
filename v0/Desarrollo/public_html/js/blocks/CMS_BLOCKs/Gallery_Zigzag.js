
class Gallery_Zigzag {
  constructor(Params) {

    //Estructura Gallery
    //{"Direction": "Left"}  //Left or Right //Determina direccion por la que empieza el zigzag

    this.Direction = Params.Direction
    //CallBack to signed css properties with name of the class
    this.CreateElement_ = GALSAN_CreateBlock.CreateElementSigned;
    this.add_CSS_Class = GALSAN_CreateBlock.add_CSS_Class_SIGNED;


    this.ViewConstructor();
  }

  getClassName() {
    return this.constructor.name;
  }

  Add_Panel(Params) {

    //Estructura
    //{"Photo": "", "alt": "", "Title": "", "Text": ""}

    var Main_Container_ID = document.getElementById("Main_Container_ID");

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

    Image.alt = Params.alt;

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

    switch (this.Direction) {

      case "Left":

        Container_Image.classList.add(`${this.getClassName()}Left`);
        Container_Text.classList.add(`${this.getClassName()}Left`);
        this.ElementIsVisible(Text, "SlideLeft");
        this.Direction = "Right";

        this.add_CSS_Class(`.Container_Image.Left`,`order: 1;`);
        this.add_CSS_Class(`.Container_Text.Left`,`order: 2;`);


        break;

      case "Right":

        this.ElementIsVisible(Text, "SlideRight");
        this.Direction = "Left";

        this.add_CSS_Class(`.Container_Image`,`order: 2;`);
        this.add_CSS_Class(`.Container_Text`,`order: 1;`);

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
    margin-top: 9vh

        `
    );

    this.add_CSS_Class(
      `.Container_Panel`,
      `
    
        display:flex;
    width: 100%;
    flex-direction: row;
    padding: 5% 0%;
        `
    );

    this.add_CSS_Class(
      `.Container_Image`,
      `
        width: 66.66%;
            padding: 0% 5%;

    
        `
    );

    this.add_CSS_Class(
      `.Image`,
      `
        width: 100%;

    
        `
    );



    this.add_CSS_Class(
      `.Container_Text`,
      `
        width: 33.33%;
    padding: 0% 5%;
    
        `
    );


    this.add_CSS_Class(
      `.Container_Text`,
      `
      text-align: justify;

  
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
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
  visibility: visible;
  }
  100% {
  -webkit-transform: translateX(0);
  transform: translateX(0);
  }
    
        `
    );

    this.add_CSS_Class(
      `@keyframes SlideRight`,
      `
0% {
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
  visibility: visible;
  }
  100% {
  -webkit-transform: translateX(0);
  transform: translateX(0);
  }
        `
    );

    this.add_CSS_Class(
      `@-webkit-keyframes SlideLeft`,
      `
 0% {
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
  visibility: visible;
  }
  100% {
  -webkit-transform: translateX(0);
  transform: translateX(0);
  }
    
        `
    );

    this.add_CSS_Class(
      `@keyframes SlideLeft`,
      `
         0% {
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
  visibility: visible;
  }
  100% {
  -webkit-transform: translateX(0);
  transform: translateX(0);
  }
        `
    );

        ///////////////////////////////////////////////////////////////
        //////////////////middle///////////////////////////////////////
        ///////////////////////////////////////////////////////////////


        this.add_CSS_Class(
        `.Container_Panel`,
      `

            `, GALSAN_CreateBlock.Screen_Middle
        );

        this.add_CSS_Class(
          `.Container_Image`,
          `
    width: 60%;
    padding: 0% 2%;
}

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
   width: 90%;
    order:2;
          
              `, GALSAN_CreateBlock.Screen_Mobile
          );
      
      
      
          this.add_CSS_Class(
            `.Container_Text`,
            `
              width: 90%;
              order:1;
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

    GALSAN_CreateBlock.AttachID(Container_principal, "Main_Container_ID");







  }
}

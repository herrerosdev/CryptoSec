class Card_3D {


  constructor(Params) {

    //Estructura
    //{"Title": ""}

    this.Title_ = Params.Title;

    // this.ID_IMG_TAG_ = ID_IMG_TAG;
    //CallBack to signed css properties with name of the class
    this.CreateElement_ = GALSAN_CreateBlock.CreateElementSigned;
    this.add_CSS_Class = GALSAN_CreateBlock.add_CSS_Class_SIGNED;


    this.ViewConstructor();
  }

  getClassName() {
    return this.constructor.name;
  }


  //////////FUNCIONES////////////
  Add_Card(Params) {

     //Estructura
     ///    !!!!!Cuidado con los saltos de línea al meterlo en la base de datos!!!!
    ///      Array Images with class and img properties and styles for all devices properties (paste in line styles of the element 3D)

    //{"Photo": "", "Name": "", "Images":[
    //{"class": "plancha", "img": "/assets/salon/equi3.png", "style": "width: 3vw; left: 0; bottom: -1.5vw; transform: rotate(-15deg);", "styleMiddle": "width: 6vw;", "styleMobile": "width: 9vw;"}, //ej sin borrar
    //{"class":"","img": "", "style":  "", "styleMiddle": "", "styleMobile": ""},  //ej vacío para introducir datos
    //{"class":"","img": "", "style":  "", "styleMiddle": "", "styleMobile": ""}, 
    //]}


    var Ul_Container_ID = document.getElementById("Ul_Container_ID");


    var li_Container_Image = this.CreateElement_(
      "li",
      `li_Container_Image`
    );

    Ul_Container_ID.appendChild(li_Container_Image);

    var Name_Card = this.CreateElement_(
      "div",
      `Name_Card`,
      Params.Name
    );

    li_Container_Image.appendChild(Name_Card);


    var Image_Card = this.CreateElement_(
      "img",
      `Image_Card`,
      Params.Photo
    );

    li_Container_Image.appendChild(Image_Card);


    for (let index = 0; index < Params.Images.length; index++) {


      var Image_Card = this.CreateElement_(
        "img",
        `img_1`,
        Params.Images[index].img
      );

      Image_Card.classList.add(Params.Images[index].class);

      li_Container_Image.appendChild(Image_Card);

      //Image_Card.setAttribute('style', Params.Images[index].style);

      GALSAN_CreateBlock.add_CSS_Class(
        `.${Params.Images[index].class}`,
        `
         ${Params.Images[index].style}
                  `
      );
      
      GALSAN_CreateBlock.add_CSS_Class(
        `.${Params.Images[index].class}`,
        `
         ${Params.Images[index].styleMiddle}
                  `,
                  GALSAN_CreateBlock.Screen_Middle
      );

      GALSAN_CreateBlock.add_CSS_Class(
        `.${Params.Images[index].class}`,
        `
         ${Params.Images[index].styleMobile}
                  `,
                  GALSAN_CreateBlock.Screen_Mobile
      );
  

    }



  };


  ViewConstructor() {

    ////////////////////////////
    ///////carrouselBlock////////// 
    ////////////////////////////

    this.add_CSS_Class(
      `.Container_3D`,
      `
                  width: 95%;
      margin: 0 auto;
      margin-top: 9vh;
                `
    );



    this.add_CSS_Class(
      `.ul_Container_Image`,
      `
    display: grid;
    padding: 16px;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
    justify-items: center;

                `
    );

    this.add_CSS_Class(
      `.li_Container_Image`,
      `

    width: 90%;
    min-height: 45vw;
        margin-top: 6vh;
    scroll-snap-align: center;
    position: relative;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
        border: 6px solid black;
    border-radius: 25px;
        background: rgb(255 255 255);
    background: -moz-linear-gradient(0deg, rgb(255 255 255) 0%, #2b542a73 100%);
    background: -webkit-linear-gradient(0deg, rgb(255 255 255) 0%, #2b542a73 100%);
    background: linear-gradient(0deg, rgb(255 255 255) 0%, #2b542a73 100%);
                `
    );



    this.add_CSS_Class(
      `.Image_Card`,
      `
  display: flex;
    justify-content: center;
    height: 80%;
    position: absolute;
    width: auto;
    max-width: 90%;
    bottom: 0;
  
                `
    );

    this.add_CSS_Class(
      `.Name_Card`,
      `
position: absolute;
    top: 4.5vw;
    z-index: 2;
    font-size: 1.5vw;
                `
    );

    this.add_CSS_Class(
      `.Name_Card::before`,
      `
position: absolute;
    content: '';
    z-index: -1;
       background: linear-gradient(217deg, #742858, #cecbd7);
    width: 70px;
    height: 60px;
    display: block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 6px 20px 0 rgba(16, 39, 112, .3);
    animation: border-transform 6s linear infinite;
}

                `
    );

    this.add_CSS_Class(
      `@-webkit-keyframes border-transform`,
      `
  0%,100% { border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%; } 
  14% { border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%; } 
  28% { border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%; } 
  42% { border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%; } 
  56% { border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%; } 
  70% { border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%; } 
  84% { border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%; }
            
                `
    );

    this.add_CSS_Class(
      `@keyframes border-transform`,
      `
    0%,100% { border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%; } 
  14% { border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%; } 
  28% { border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%; } 
  42% { border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%; } 
  56% { border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%; } 
  70% { border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%; } 
  84% { border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%; }
                `
    );


    this.add_CSS_Class(
      `.img_1`,
      `
   position: absolute;
            display: block;
            right: -50px;
            bottom: -60px;
            z-index: 5;
            width: 14vw;
            /* transform: translate3d(0, 0, 140px); */
            opacity: 1;
            pointer-events: auto;
  
                `
    );


    this.add_CSS_Class(
      `.Container_Text`,
      `
          width: 90%;
          padding: 0% 5%;
          display: flex;
          flex-direction: column;
          align-items: center;
                `
    );

    //////////////////////////////////////////
    //////////////////MIDDLE CSS /////////////
    //////////////////////////////////////////

    this.add_CSS_Class(
      `.ul_Container_Image`,
      `
    display: grid;
    padding: 16px;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    justify-items: center;

                `,
                GALSAN_CreateBlock.Screen_Middle
    );


    this.add_CSS_Class(
      `.li_Container_Image`,
      `
  
          width: 90%;
           min-height: 60vw;
  
              `,
      GALSAN_CreateBlock.Screen_Middle
    );

    this.add_CSS_Class(
      `.Name_Card`,
      `
    font-size: 2.5vw;
                `,
                GALSAN_CreateBlock.Screen_Middle
    );
    //////////////////////////////////////////
    //////////////////MOBILE CSS /////////////
    //////////////////////////////////////////

    this.add_CSS_Class(
      `.ul_Container_Image`,
      `

    grid-template-columns: repeat(1, 1fr);


                `,
                GALSAN_CreateBlock.Screen_Mobile
    );


    this.add_CSS_Class(
      `.li_Container_Image`,
      `
  
              width: 75%;
        min-height: 85vw;
  
              `,
      GALSAN_CreateBlock.Screen_Mobile
    );


    this.add_CSS_Class(
      `.Name_Card`,
      `
    font-size: 4vw;
     top: 7.5vw;
                `,
                GALSAN_CreateBlock.Screen_Mobile
    );






    //Create element and associate a classes
    var Container_principal = this.CreateElement_(
      "div",
      `Container_3D`,
      null,
      GALSAN_CreateBlock.Site_Column_Center
    );

    var Container_Text = this.CreateElement_(
      "div",
      `Container_Text`
    );

    Container_principal.appendChild(Container_Text);


    var Questions_title = this.CreateElement_(
      "h2",
      `Title`,
      this.Title_
    );

    Container_Text.appendChild(Questions_title);


    var ul_Container_Image = this.CreateElement_(
      "ul",
      `ul_Container_Image`
    );

    Container_principal.appendChild(ul_Container_Image);

    GALSAN_CreateBlock.AttachID(ul_Container_Image, "Ul_Container_ID");


  }

}
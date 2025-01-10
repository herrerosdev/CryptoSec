class CarrouselBlock {


  static ActualIndexImage_ = 0;
  static SingletonObject_ = null;

    constructor(Params) {

      //Estructura
      //{"Title": ""}

        this.Title_ = Params.Title;

        this.ImagesArray_ = [];
        this.Steps = 0;
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
    Add_Image(Params) {


      //Estructura
      //{"Photo": "", "Title": "", "Description": ""} //Description and title visible in pc device on hover

        var Ul_Container_ID = document.getElementById("Ul_Container_ID");


        var li_Container_Image = this.CreateElement_(
            "li",
            `li_Container_Image`
          );
      
          Ul_Container_ID.appendChild(li_Container_Image);

          li_Container_Image.onclick = function(){window.location.href =`${Params.Link}`;};

          var Image_Carrousel = this.CreateElement_(
            "img",
            `Image_Carrousel`,
            Params.Photo
          );
      
          li_Container_Image.appendChild(Image_Carrousel);

          var div_Text = this.CreateElement_(
            "div",
            `div_Text`
          );
      
          li_Container_Image.appendChild(div_Text);

          var div_padding = this.CreateElement_(
            "div",
            `div_padding`
          );
      
          div_Text.appendChild(div_padding);

          var Text = this.CreateElement_(
            "h3",
            `h3_Text`,
            Params.Title
          );
      
          div_padding.appendChild(Text);

          var Text = this.CreateElement_(
            "p",
            `Text`,
            Params.Description
          );
      
          div_padding.appendChild(Text);
        
          
        this.ImagesArray_.push(Params.Photo);
    };


    Slide(direction) {

      //Slide function only pc
      //
      const list = document.getElementById("Ul_Container_ID");
      const button_prev = document.getElementById("button_previous_ID");
      const button_next = document.getElementById("button_next_ID");
      
      
      // We want to know the width of one of the items. We'll use this to decide how many pixels we want our carousel to scroll.
      const item = document.getElementsByClassName(`${this.getClassName()}Image_Carrousel`);
      const itemWidth = item[0].offsetWidth; ///ancho de un elemento del carrousel

      const listWidth = list.offsetWidth;  //ancho del contenedor (visible) donde estan todos los elementos del carrousel
      const Math_Sup = Math.ceil(listWidth/itemWidth); //redondea hacia arriba el numero de elementos que entran en la pantalla (visibles)
      const Content_max = itemWidth * Math_Sup; // Ancho máximo que alcanzarían los elementos visibles sin que ninguno de ellos este parcialmente escondido
      const Rest = Content_max - listWidth; //Restante Ancho máximo para que todos los elementos sean visibles menos el ancho real

      var Steps_calc = this.ImagesArray_.length - Math.round(listWidth/itemWidth); //número de clicks para recorrer todos los elementos

        // Based on the direction we call `scrollBy` with the item width we got earlier
        if(direction === "previous") {
          this.Steps = this.Steps - 1; //Restamos pasos

          list.scrollBy({ left: -itemWidth, behavior: "smooth" }); //desplazamos el ancho del elemento en el contenedor
              button_next.style.display = "flex";

              if(this.Steps == 0) {   //escondemos flecha previa y desplazamos el valor de resto calculado para que la img quede totalmente visible
                this.Steps = 0;
                button_prev.style.display = "none";
                list.scrollBy({ left: -Rest, behavior: "smooth" });
              };
            
        } else {
          this.Steps = this.Steps + 1; //Sumamos pasos

          if(this.Steps < Steps_calc) {
            button_prev.style.display = "flex";
            list.scrollBy({ left: itemWidth, behavior: "smooth" }); //desplazamos el ancho del elemento en el contenedor
             
          } else if(this.Steps == Steps_calc) { //escondemos flecha previa y desplazamos el ancho del elem mas el resto calculado  para que la img quede totalmente visible
            list.scrollBy({ left: itemWidth + Rest, behavior: "smooth" });
            button_next.style.display = "none";
            //disable arrow
          }
        }
      };
        
    




    //Create view of carrusel
    ViewConstructor() {

        ////////////////////////////
        ///////carrouselBlock////////// 
        ////////////////////////////

        this.add_CSS_Class(
            `.Carrousel_Container`,
            `
                width: 80%;
    margin: 0 auto;
    margin-top: 9vh;
              `
          );

          this.add_CSS_Class(
            `.slider-wrapper`,
            `
    position: relative;
              `
          );

          this.add_CSS_Class(
            `.ul_Container_Image`,
            `
  display: flex;

  padding: 16px;

  list-style: none;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
   scrollbar-width: none;

  -ms-overflow-style: none;
              `
          );

          this.add_CSS_Class(
            `.li_Container_Image`,
            `
 flex-shrink: 0;
          width: 30%;

          background-color: #FFF;
        
          scroll-snap-align: center;
          position: relative;
              `
          );

         
          this.add_CSS_Class(
            `.ul_Container_Image::-webkit-scrollbar`,
            `
display: none;
              `
          );
          this.add_CSS_Class(
            `.div_Text`,
            `
    width: 90%;
    color: white;
    position: absolute;
    background-color: #615c5c9e;
    bottom: -10%;
    left: 5%;
     visibility:hidden;
     opacity: 0;
     transition: bottom 0.8s, opacity 0.8s;

              `
          );

          this.add_CSS_Class(
            `.li_Container_Image:hover > .div_Text`,
            `
    display:flex;
     bottom: 0px;
          visibility:visible;
     opacity: 1;
              `
          );

          this.add_CSS_Class(
            `.div_padding`,
            `
  padding-left: 2%;
              `
          );
          
         
          this.add_CSS_Class(
            `.ul_Container_Image::-webkit-scrollbar`,
            `
display: none;
              `
          );
          
                 
          this.add_CSS_Class(
            `.Arrow_Left`,
            `
            position: absolute;
            width: 6vw;
            left: 8vw;
            z-index: 4;
            transform: rotate(180deg);
            filter: invert(1);
              `
          );

          this.add_CSS_Class(
            `.Arrow_Right`,
            `
              width: 6vw;
            position: absolute;
            z-index: 4;
            right: 8vw;
            filter: invert(1);
              `
          );

          this.add_CSS_Class(
            `.Image_Carrousel`,
            `
            
          display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
width: 90%;
padding: 0 5%;

              `
          );

          this.add_CSS_Class(
            `.button_next`,
            `
            
position: absolute;
    top: 50%;
    right: 10px;
    outline: none;
    border: none;
    height: 50px;
    width: 50px;
    z-index: 5;
    display: flex;
    cursor: pointer;
    background: transparent;
    align-items: center;
    justify-content: center;
    transform: translateY(-50%);

              `
          );

          this.add_CSS_Class(
            `.button_previous`,
            `
position: absolute;
    top: 50%;
    outline: none;
    left: 10px;
    border: none;
    height: 50px;
    width: 50px;
    z-index: 5;
    display: none;
    cursor: pointer;
    background: transparent;
    align-items: center;
    justify-content: center;
    transform: translateY(-50%);

              `
          );

          this.add_CSS_Class(
            `.button_next::before`,
            `
           position: absolute;
    top: calc(50% - 0px);
    width: 35px;
        border-bottom: 2px solid black;
    border-top: 2px solid black;
    border-right: 2px solid black;
    border-left: none;
    border-radius: 25px;
    height: 6px;
    background: #b7b7b7;
    content: "";
    will-change: transform;
    transition: all .2s ease;
    transform: rotate(-120deg) translate(10px, 10px);
              `
          ); 
        
          this.add_CSS_Class(
            `.button_next::after`,
            `
    position: absolute;
    top: calc(50% - 0px);
    width: 35px;
      border-bottom: 2px solid black;
    border-top: 2px solid black;
    border-right: 2px solid black;
    border-left: none;
    border-radius: 25px;
    height: 6px;
    background: #b7b7b7;
    content: "";
    will-change: transform;
    transition: all .2s ease;
    transform: rotate(120deg) translate(10px, -10px);
          
              `
          ); 
           
      
          this.add_CSS_Class(
            `.button_previous::before`,
            `
    position: absolute;
    top: calc(50% - 0px);
    width: 35px;
       border-bottom: 2px solid black;
    border-top: 2px solid black;
    border-right: 2px solid black;
    border-left: none;
    border-radius: 25px;
    height: 6px;
    background: #b7b7b7;
    content: "";
    will-change: transform;
    transition: all .2s ease;
    transform: rotate(60deg) translate(10px, 10px);
              `
          ); 
        
          this.add_CSS_Class(
            `.button_previous::after`,
            `
    position: absolute;
    top: calc(50% - 0px);
    width: 35px;
       border-bottom: 2px solid black;
    border-top: 2px solid black;
    border-right: 2px solid black;
    border-left: none;
    border-radius: 25px;
    height: 6px;
    background: #b7b7b7;
    content: "";
    will-change: transform;
    transition: all .2s ease;
    transform: rotate(-60deg) translate(10px, -10px);
          
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
          `.li_Container_Image`,
          `

        width: 40%;

            `,
            GALSAN_CreateBlock.Screen_Middle
        );


        this.add_CSS_Class(
          `.button_previous`,
          `

    width: 40px;
      height: 40px;
         left: 0px;
        
            `,
            GALSAN_CreateBlock.Screen_Middle
        );

        this.add_CSS_Class(
          `.button_previous::before`,
          `

          top: calc(50% - 10px);
      width: 20px;
        height: 3px;
            `,
            GALSAN_CreateBlock.Screen_Middle
        ); 
      
        this.add_CSS_Class(
          `.button_previous::after`,
          `
  top: calc(50% + 1px);
      width: 20px;
        height: 3px;
        
            `,
            GALSAN_CreateBlock.Screen_Middle
        ); 
        this.add_CSS_Class(
          `.button_next`,
          `

    width: 40px;
      height: 40px;
         right: 0px;
            `,
            GALSAN_CreateBlock.Screen_Middle
        ); 


          this.add_CSS_Class(
            `.button_next::before`,
            `
      top: calc(50% + 1px);
      width: 20px;
        height: 3px;
          
              `,
              GALSAN_CreateBlock.Screen_Middle
          ); 
     

          this.add_CSS_Class(
            `.button_next::after`,
            `
      top: calc(50% - 10px);
      width: 20px;
        height: 3px;
          
              `,
              GALSAN_CreateBlock.Screen_Middle
          ); 

          this.add_CSS_Class(
            `.Text`,
            `
    font-size: 2vw;
              `,
              GALSAN_CreateBlock.Screen_Middle
          );
         
          this.add_CSS_Class(
            `.h3_Text`,
            `
   font-size: 2.5vw;
              `,
              GALSAN_CreateBlock.Screen_Middle
          );
        //////////////////////////////////////////
        //////////////////MOBILE CSS /////////////
        //////////////////////////////////////////
        this.add_CSS_Class(
          `.li_Container_Image`,
          `
          width: 50%;
            `,
            GALSAN_CreateBlock.Screen_Mobile
        );

        this.add_CSS_Class(
          `.Text`,
          `
  display:none;
            `,
            GALSAN_CreateBlock.Screen_Mobile
        );
       
        this.add_CSS_Class(
          `.h3_Text`,
          `
 font-size: 3vw;
            `,
            GALSAN_CreateBlock.Screen_Mobile
        );

        this.add_CSS_Class(
          `.div_Text`,
          `
 display:flex;
   bottom: 0px;
        visibility:visible;
   opacity: 1;

            `,
            GALSAN_CreateBlock.Screen_Mobile
        );
        this.add_CSS_Class(
          `.ul_Container_Image`,
          `
padding-left: 0px;
            `
        );
        this.add_CSS_Class(
          `.Carrousel_Container`,
          `
              width: 95%;

            `,
            GALSAN_CreateBlock.Screen_Mobile
        );



        this.add_CSS_Class(
          `.button_next`,
          `
  display: none !important;

            `,
            GALSAN_CreateBlock.Screen_Mobile
        );

        this.add_CSS_Class(
          `.button_previous`,
          `
  display: none !important;

            `,
            GALSAN_CreateBlock.Screen_Mobile
        );
        this.add_CSS_Class(
            `.mainImage`,
            `
               max-width: 100vw;
            width: 100vw;
            max-height: 40vh;
            border-radius: 0px;
            box-shadow: 0 0 15px #ddd;
            background: #fff;
              `,
              GALSAN_CreateBlock.Screen_Mobile
          );

          this.add_CSS_Class(
            `.carrousel_images`,
            `
    margin: 0;
              `,
              GALSAN_CreateBlock.Screen_Mobile
          );
 

          this.add_CSS_Class(
            `.Arrow_Right`,
            `
    right: 2vw;
              `,
              GALSAN_CreateBlock.Screen_Mobile
          );


          this.add_CSS_Class(
            `.Arrow_Left`,
            `
    left: 2vw;
              `,
              GALSAN_CreateBlock.Screen_Mobile
          );




        //Create element and associate a classes
        var Container_principal = this.CreateElement_(
            "div",
            `Carrousel_Container`,
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

          var wrapper = this.CreateElement_(
            "div",
            `slider-wrapper`
          );

          Container_principal.appendChild(wrapper);


          var button_previous = this.CreateElement_(
            "button",
            `button_previous`
          );
      
          wrapper.appendChild(button_previous);

          GALSAN_CreateBlock.AttachID(button_previous, "button_previous_ID");

          GALSAN_CreateBlock.Attach_Attribute_onClick(button_previous, 'CarrouselBlock.o_Carrousel.Slide('+ '"' + 'previous' + '"' +')');

        var ul_Container_Image = this.CreateElement_(
            "ul",
            `ul_Container_Image`
          );
      
          wrapper.appendChild(ul_Container_Image);

          GALSAN_CreateBlock.AttachID(ul_Container_Image, "Ul_Container_ID");


          var button_next = this.CreateElement_(
            "button",
            `button_next`
          );
          wrapper.appendChild(button_next);
          GALSAN_CreateBlock.AttachID(button_next, "button_next_ID");
          
          GALSAN_CreateBlock.Attach_Attribute_onClick(button_next, 'CarrouselBlock.o_Carrousel.Slide('+ '"' + 'next' + '"' +')');
       

    }

}
class List_In_Movement_Menu {
    constructor(Params) {
  
      //Estructura
      //{"Title": "", "ColorPalette": ["", "", "", ""], "Photos_Mov": [{"Photo":"", "style": "", "EffectName": ""}, {"Photo":"", "style": "", "EffectName": ""}]} 
  
      this.Title_ = Params.Title;
      this.Photos_Mov_ = Params.Photos_Mov;
      this.ColorPalette_ = Params.ColorPalette;

//ColorPalette_
//["rgb(142 167 181 / 69%)", "#b39064", "black", "antiquewhite", "#634c30", "#fff", "rgb(142 167 181)"]
//
// (BackColor Contenedor principal) 
//                  (Border Cont Principal y img expandida) 
//                               (Color texto productos)
//                                             (color subtitles)
//                                                          (text_shadow subtitles)
//                                                                    (text_shadow Title)
//                                                                                 (BackColor fullscreen)
      //CallBack to signed css properties with name of the class
      this.CreateElement_ = GALSAN_CreateBlock.CreateElementSigned;
      this.add_CSS_Class = GALSAN_CreateBlock.add_CSS_Class_SIGNED;
  
  
      this.ViewConstructor();
    }
  
    getClassName() {
      return this.constructor.name;
    }
  
    Add_Category_And_Items(Params) {
  
      //Estructura
      //{"Title": "", "Section": "", "Array_Json_Items": [{"Product": "", "Price": "", "Photo": "", "Ingredients": "", "Alergens": ["", ""]}, {"Product": "", "Price": "", "Photo": "", "Ingredients": "", "Alergens": ["", ""]}]}
      //"Ingredients": "", "Alergens": ["", ""] //optional

      var Main_Container_ID = document.getElementById("Main_Container_ID");
  
      var Container_Panel = this.CreateElement_(
        "div",
        `Container_Panel`
  
  
      );
  
      Main_Container_ID.appendChild(Container_Panel);

  
  
  
      var Container_Title = this.CreateElement_(
        "div",
        `Container_Title`
  
  
      );
  
      Container_Panel.appendChild(Container_Title);
  
  
      var h3Title = this.CreateElement_(
        "h3",
        `h3Title`,
        Params.Title
  
  
      );
  
      Container_Title.appendChild(h3Title);

  
      var Container_Text = this.CreateElement_(
        "div",
        `Container_Text`
  
  
      );
  
      Container_Panel.appendChild(Container_Text);

      var Array_Json_Items = Params.Array_Json_Items;

      for (let index = 0; index < Array_Json_Items.length; index++) {

            var Content_Text = this.CreateElement_(
            "div",
            "Content_Text"
        );
        Container_Text.appendChild(Content_Text);

        var Content_Image_Expand = this.CreateElement_(
          "div",
          "Content_Image_Expand"
      );


      Content_Text.appendChild(Content_Image_Expand);

      GALSAN_CreateBlock.AttachID(Content_Image_Expand, Params.Section + index);

        var img_Product = this.CreateElement_(
          "img",
          "img_Product",
          Array_Json_Items[index].Photo
      );


      Content_Image_Expand.appendChild(img_Product);

      var div_Text = this.CreateElement_(
        "div",
        `div_Text2`
      );
  
      Content_Image_Expand.appendChild(div_Text);


      if(Array_Json_Items[index].Alergens) {

      var Alergens = Array_Json_Items[index].Alergens;

      for (let index = 0; index < Alergens.length; index++) {

  
        var Text = this.CreateElement_(
          "img",
          `img_icon`,
          Alergens[index]
        );
    
        div_Text.appendChild(Text);
        
      }

      var div_Text = this.CreateElement_(
        "div",
        `div_Text`
      );
  
      Content_Image_Expand.appendChild(div_Text);


      var Text = this.CreateElement_(
        "p",
        `Text`,
        Array_Json_Items[index].Ingredients
      );
  
      div_Text.appendChild(Text);

    }

      
        var Content_flex = this.CreateElement_(
            "div",
            "Content_flex"
        );
        Content_Text.appendChild(Content_flex);

        var Link_Grid_Wrapper = this.CreateElement_(
            "p",
            "Link_Grid_Wrapper_Title",
            Array_Json_Items[index].Product
        );


        Content_flex.appendChild(Link_Grid_Wrapper);

        GALSAN_CreateBlock.Attach_Attribute_onClick(Link_Grid_Wrapper, `List_In_Movement_Menu.o_Res_Mov.Expand_Image(`+ '"' + Params.Section + index + '"' +`)`);

        var dotted_line = this.CreateElement_(
            "p",
            "dotted_line"
        );


        Content_flex.appendChild(dotted_line);

        

        var Link_Grid_Wrapper = this.CreateElement_(
            "p",
            "Link_Grid_Wrapper_Price",
            Array_Json_Items[index].Price
        );


        Content_Text.appendChild(Link_Grid_Wrapper);
    
 
      }
  

  
  
    }


    Expand_Image(ID_Tag) {

  
      var ClassName = this.getClassName();
  
      const Container_Image = document.getElementById(ID_Tag);
  
      Container_Image.classList.add(ClassName + 'active');
  
      const fullscreenID = document.getElementById("fullscreenID_Restaurant");
  
      fullscreenID.classList.add(ClassName + 'active');
  
      GALSAN_CreateBlock.Attach_Attribute_onClick(fullscreenID, `List_In_Movement_Menu.o_Res_Mov.Close_Fullscreen(`+ '"' + ID_Tag + '"' + `)`);

    }



    Close_Fullscreen(Clone_tag) {

      var ClassName = this.getClassName();
     var Clone_tag = document.getElementById(Clone_tag);
      const fullscreenID = document.getElementById("fullscreenID_Restaurant");
      fullscreenID.classList.remove(ClassName + 'active');
      Clone_tag.classList.remove(ClassName + 'active');
     
  
  
    };

  
  
  
  
    ViewConstructor() {
  
    
  
      this.add_CSS_Class(
        `.Main_Container`,
        `
width: 90%;
    margin: 7vh auto 4vh auto;
    background-color: ${this.ColorPalette_[0]};
    border: 2px solid ${this.ColorPalette_[1]};
    border-radius: 25px;
        box-shadow: 0px 0px 20px 7px rgb(0 0 0);
        position: relative;
  
          `
      );
  
      this.add_CSS_Class(
        `.Container_Panel`,
        `
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 5% 0%;
    align-content: center;
    position: relative;
    align-items: center;
    justify-content: center;
          `
      );
  
      this.add_CSS_Class(
        ".Content_Text",
        `
display: grid;
grid-template-columns: 88% 12%;
align-content: center;
align-items: center;
width: 100%;
justify-content: center;
position:relative;
`
    );


    this.add_CSS_Class(
        ".Content_Image_Expand",
        `
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
    position: fixed;
`
    );


    this.add_CSS_Class(
      ".Content_Image_Expand.active",
      `
    visibility: visible;
    opacity: 1;
    pointer-events: none;
    position: fixed;
    top: 50% !important;
    display: flex;
    left: 50%;
    z-index: 99999999;
    width: 40%;
    transform: translate(-50%, -50%);
    justify-content: center;

`
  );
    

    this.add_CSS_Class(
      ".img_Product",
      `

    border: 2px solid ${this.ColorPalette_[1]};
    width: calc(100% - 4px);
    border-radius: 25px 25px 15px 15px;
    box-shadow: 0px 0px 20px 7px rgb(0 0 0);


`
  );



this.add_CSS_Class(
  `.fullscreen`,
  `
    position: fixed;
z-index: 999;
top: 0;
left: 0;
right: 0;
bottom: 0;
width: 100%;
height: 100vh;
background: ${this.ColorPalette_[6]};
visibility: hidden;
transition:
background .25s ease-out
    `
);


this.add_CSS_Class(
  `.fullscreen.active`,
  `
visibility: visible;
    `
);

this.add_CSS_Class(
  `.div_Text`,
  `
    position: absolute;
    bottom: 2px !important;
    width: calc(96% - 4px);
    border-radius: 0px 0px 15px 15px;
    background-color: rgb(155 155 155 / 71%);
    padding: 2% 2%;

    `
);



this.add_CSS_Class(
  `.div_Text2`,
  `
    position: absolute;
    top: 2px !important;
    right: 0;
    width: calc(96% - 4px);
    padding: 2% 2%;
    display: flex;
    flex-direction: row;
    `
);

this.add_CSS_Class(
  `.img_icon`,
  `
    width: 10%;
    height: 10%;
    `
);

/* this.add_CSS_Class(
  `.li_Container_Image:hover > .div_Text`,
  `
display:flex;
bottom: 0px;
visibility:visible;
opacity: 1;
    `
); */

this.add_CSS_Class(
  `.Text`,
  `
margin: 0;
    font-size: 1.5vw;

    `
);


    this.add_CSS_Class(
      ".Content_flex",
      `
display: grid;
    flex-direction: row;
    grid-template-columns: max-content auto;
    align-content: center;
    align-items: center;
    width: 100%;
}
`
  );


  
    this.add_CSS_Class(
      ".dotted_line",
      `
margin-left: 2%;
margin-right: 2%;
width: 100%;
border-top: 3px dotted ${this.ColorPalette_[2]};
overflow: hidden;
position: relative;
`
  );
  
  this.add_CSS_Class(
    ".Link_Grid_Wrapper_Price",
    `
display: grid;
    width: 100%;
    height: auto;
    text-decoration: none;
    margin: 0 auto;
    font-family: Courier New;
    text-align: center;
    font-size: 2vw;
    font-weight: bold;
color: ${this.ColorPalette_[2]};
  
`
);

this.add_CSS_Class(
  ".Link_Grid_Wrapper_Title",
  `
  cursor: pointer;
display: grid;
width: 100%;
margin: auto 0;
height: auto;
text-decoration: none;
margin: 20px 0px;
font-family: Courier New;
text-align: justify;
font-size: 2vw;
font-weight: bold;
position: relative;
font-variant: all-petite-caps;
 color: ${this.ColorPalette_[2]};
   

`
);







this.add_CSS_Class(
  ".h3Title",
  `
      width: 100%;
    font-family: Courier New;
    text-align: center;
    font-size: 3vw;
    color: ${this.ColorPalette_[3]};
    font-weight: bold;
    font-variant: all-petite-caps;
    text-shadow: 2px 0 ${this.ColorPalette_[4]}, -2px 0 ${this.ColorPalette_[4]}, 
    0 2px ${this.ColorPalette_[4]}, 0 -2px ${this.ColorPalette_[4]}, 1px 1px ${this.ColorPalette_[4]}, -1px -1px , 1px -1px ${this.ColorPalette_[4]}, -1px 1px ${this.ColorPalette_[4]};

`
);


      this.add_CSS_Class(
        `.Container_Text`,
        `
          width:70%;
      padding: 0% 5%;
        text-align: justify;
      
          `
      );
      this.add_CSS_Class(
        `.div_title`,
        `
 
      margin: 3vh auto;
      text-align: center;
      
          `
      );

      

      this.add_CSS_Class(
        `.Main_Title`,
        `
 
  font-style: italic;
      font-family: cursive;
      font-size: 4vw;
          text-shadow: 2px 0 ${this.ColorPalette_[5]}, -2px 0 ${this.ColorPalette_[5]}, 0 2px ${this.ColorPalette_[5]},
           0 -2px ${this.ColorPalette_[5]}, 1px 1px ${this.ColorPalette_[5]}, -1px -1px ${this.ColorPalette_[5]}, 1px -1px ${this.ColorPalette_[5]}, -1px 1px ${this.ColorPalette_[5]};
          `
      );

      this.add_CSS_Class(
        `.img_In_Mov`,
        `
 
position: absolute;
width:10%;
height: auto;
          `
      );

 
      this.add_CSS_Class(
        `.SwingPlate`,
        `
         -webkit-transform-origin: top center;
            -ms-transform-origin: top center;
            transform-origin: top center;
            -webkit-animation-name: SwingPlate;
            animation-name: SwingPlate;
            -webkit-animation-duration: 10s;
            animation-duration: 10s;
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
            animation-delay: 1s;
                animation-iteration-count: infinite;

          

          `
      );



      this.add_CSS_Class(
        `@-webkit-keyframes SwingPlate`,
        `
0% {
        -webkit-transform: rotate3d(0, 0, 1, 15deg);
        transform: rotate3d(0, 0, 1, 15deg);
        }

        20% {
        -webkit-transform: rotate3d(0, 0, 1, 5deg);
        transform: rotate3d(0, 0, 1, 5deg);
        }

        40% {
        -webkit-transform: rotate3d(0, 0, 1, -15deg);
        transform: rotate3d(0, 0, 1, -15deg);
        }
        60% {
        -webkit-transform: rotate3d(0, 0, 1, 15deg);
        transform: rotate3d(0, 0, 1, 15deg);
        }
        80% {
        -webkit-transform: rotate3d(0, 0, 1, -15deg);
        transform: rotate3d(0, 0, 1, -15deg);
        }
        100% {
        -webkit-transform: rotate3d(0, 0, 1, 15deg);
        transform: rotate3d(0, 0, 1, 15deg);
        }
          `
      );

      this.add_CSS_Class(
        `@keyframes SwingPlate`,
        `
0% {
        -webkit-transform: rotate3d(0, 0, 1, 15deg);
        transform: rotate3d(0, 0, 1, 15deg);
        }

        20% {
        -webkit-transform: rotate3d(0, 0, 1, 5deg);
        transform: rotate3d(0, 0, 1, 5deg);
        }

        40% {
        -webkit-transform: rotate3d(0, 0, 1, -15deg);
        transform: rotate3d(0, 0, 1, -15deg);
        }
        60% {
        -webkit-transform: rotate3d(0, 0, 1, 15deg);
        transform: rotate3d(0, 0, 1, 15deg);
        }
        80% {
        -webkit-transform: rotate3d(0, 0, 1, -15deg);
        transform: rotate3d(0, 0, 1, -15deg);
        }
        100% {
        -webkit-transform: rotate3d(0, 0, 1, 15deg);
        transform: rotate3d(0, 0, 1, 15deg);
        }
          `
      );  

    
      this.add_CSS_Class(
        `.rotatePlate`,
        `

            -webkit-animation-name: rotatePlate;
            animation-name: rotatePlate;
            -webkit-animation-duration: 10s;
            animation-duration: 10s;
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both;

              animation-iteration-count: infinite;

          

          `
      );


      this.add_CSS_Class(
        `@-webkit-keyframes rotatePlate`,
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
        `@keyframes rotatePlate`,
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
        `.Pendular_Plate`,
        `

    animation: Pendular_Plate 2s infinite alternate;

          `
      );


      this.add_CSS_Class(
        `@keyframes Pendular_Plate`,
        `
90%,100% {transform: rotate(100deg)}

          `
      );
      

      this.add_CSS_Class(
        `@-webkit-keyframes Pendular_Plate`,
        `
90%,100% {transform: rotate(100deg)}
          `
      );


      this.add_CSS_Class(
        `.Pendular_PlateR`,
        `
          -webkit-animation-name: Pendular_PlateR;
            animation-name: Pendular_PlateR;
            -webkit-animation-duration: 2s;
            animation-duration: 2s;
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
    animation-delay: 1s;
    animation-direction: alternate;
              animation-iteration-count: infinite;

 

          `
      );


      this.add_CSS_Class(
        `@keyframes Pendular_PlateR`,
        `
90%,100% {transform: rotate(-100deg)}

          `
      );
      

      this.add_CSS_Class(
        `@-webkit-keyframes Pendular_PlateR`,
        `
90%,100% {transform: rotate(-100deg)}
          `
      );


      this.add_CSS_Class(
        `.ChinChinR`,
        `
          -webkit-animation-name: ChinChinR;
            animation-name: ChinChinR;
            -webkit-animation-duration: 2s;
            animation-duration: 2s;
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
    animation-delay: 1s;
    animation-direction: alternate;
              animation-iteration-count: infinite;

 

          `
      );


      this.add_CSS_Class(
        `@keyframes ChinChinR`,
        `
90%,100% {transform: rotate(-35deg)}

          `
      );
      

      this.add_CSS_Class(
        `@-webkit-keyframes ChinChinR`,
        `
90%,100% {transform: rotate(-35deg)}
          `
      );



      this.add_CSS_Class(
        `.ChinChin`,
        `
          -webkit-animation-name: ChinChin;
            animation-name: ChinChin;
            -webkit-animation-duration: 2s;
            animation-duration: 2s;
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
    animation-delay: 1s;
    animation-direction: alternate;
              animation-iteration-count: infinite;

 

          `
      );


      this.add_CSS_Class(
        `@keyframes ChinChin`,
        `
90%,100% {transform: rotate(40deg)}

          `
      );
      

      this.add_CSS_Class(
        `@-webkit-keyframes ChinChin`,
        `
90%,100% {transform: rotate(40deg)}
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
            ".dotted_line",
            `
    border-top: 2px dotted ${this.ColorPalette_[2]};
`,GALSAN_CreateBlock.Screen_Middle
        );

        this.add_CSS_Class(
            ".Link_Grid_Wrapper_Price",
            `
   font-size: 3vw;

`,GALSAN_CreateBlock.Screen_Middle
        );

      

        this.add_CSS_Class(
          ".Link_Grid_Wrapper_Title",
          `
 font-size: 3vw;
`,GALSAN_CreateBlock.Screen_Middle
      );

          this.add_CSS_Class(
            `.Container_Text`,
            `
          width: 90%;
      padding: 0% 2%;
              `, GALSAN_CreateBlock.Screen_Middle
          );
  

          this.add_CSS_Class(
            `.Main_Container`,
            `
          width: 95%;
   
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
              ".Link_Grid_Wrapper_Price",
              `
     font-size: 4.5vw;
  
  `,GALSAN_CreateBlock.Screen_Mobile
          );
  

          this.add_CSS_Class(
              ".Link_Grid_Wrapper_Title",
              `
     font-size: 4.5vw;
  `,GALSAN_CreateBlock.Screen_Mobile
          );

          this.add_CSS_Class(
            ".Content_Image_Expand.active",
            `

          width: 70%;
   
      
      `,GALSAN_CreateBlock.Screen_Mobile
        );

        this.add_CSS_Class(
          `.img_icon`,
          `
            width: 15%;
    height: 15%;

            `,GALSAN_CreateBlock.Screen_Mobile
        );


        this.add_CSS_Class(
          `.Text`,
          `
       font-family: fantasy;
font-style: italic;
font-size: 3.5vw;
    

            `,GALSAN_CreateBlock.Screen_Mobile
        );


        this.add_CSS_Class(
          `.img_In_Mov`,
          `
  width:25%;

            `,GALSAN_CreateBlock.Screen_Mobile
        );
  

        this.add_CSS_Class(
          `.Main_Title`,
          `
        font-size: 10vw;
           
            `,GALSAN_CreateBlock.Screen_Mobile
        );

        this.add_CSS_Class(
          ".dotted_line",
          `
  border-top: 3px dotted ${this.ColorPalette_[2]};
`,GALSAN_CreateBlock.Screen_Mobile
      );


this.add_CSS_Class(
  ".h3Title",
  `
    font-size: 6vw;

    text-shadow: 1px 0 ${this.ColorPalette_[4]}, -1px 0 ${this.ColorPalette_[4]}, 
    0 1px ${this.ColorPalette_[4]}, 0 -1px ${this.ColorPalette_[4]}, 1px 1px ${this.ColorPalette_[4]}, -1px -1px , 1px -1px ${this.ColorPalette_[4]}, -1px 1px ${this.ColorPalette_[4]};

`,GALSAN_CreateBlock.Screen_Mobile
);



      

  
      var Container_principal = this.CreateElement_(
        "div",
        `Main_Container`,
        null,
        GALSAN_CreateBlock.Site_Column_Center
      );
  
      /////Container_principal.alt = this.alt_
  
      GALSAN_CreateBlock.AttachID(Container_principal, "Main_Container_ID");
  
      var div_title = this.CreateElement_(
        "div",
        `div_title`
  
      );
  
      Container_principal.appendChild(div_title);
  
      var Main_Title = this.CreateElement_(
        "h2",
        `Main_Title`,
        this.Title_
  
  
      );
  
      div_title.appendChild(Main_Title);

      for (let index = 0; index < this.Photos_Mov_.length; index++) {
    
        var img_In_Mov = this.CreateElement_(
          "img",
          `img_In_Mov`,
          this.Photos_Mov_[index].Photo
    
    
        );
    
        Container_principal.appendChild(img_In_Mov);


        img_In_Mov.classList.add(`${this.getClassName()}` + this.Photos_Mov_[index].EffectName);

        img_In_Mov.setAttribute('style', this.Photos_Mov_[index].style);
        


      }


      var fullscreen = this.CreateElement_(
        "div",
        `fullscreen`


      );

      Container_principal.appendChild(fullscreen);
  
      GALSAN_CreateBlock.AttachID(fullscreen, "fullscreenID_Restaurant");
  
  
  
    }
  }
  
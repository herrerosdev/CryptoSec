class Parallax_Block {
    ////////////////
    //CONSTRUCTOR///
    ////////////////

    constructor() {

         //Estructura
      //{}

            //Create View: Dynamic HTMLL CSS: Node
            this.CreateElement_ = GALSAN_CreateBlock.CreateElementSigned;
            this.add_CSS_Class = GALSAN_CreateBlock.add_CSS_Class_SIGNED;
        
        
            this.ViewConstructor();
    }

    Add_Section(Params) {


      //Estructura
      //{"Section": "Parallax", "Photo": "", "Message": 1, "Text_message": "", "Buttons": [{"Text": "", "Link": ""},{"Text": "", "Link": ""}], "styleMessage": ""}
     var Container_Parallax_BlockID = document.getElementById("Container_Parallax_BlockID"); 

     switch (Params.Section) {
      case "Parallax":

      var Section_Parallax = this.CreateElement_(
        "section",
        `Section_Parallax`
      );
  
      Container_Parallax_BlockID.appendChild(Section_Parallax);


      Section_Parallax.style.backgroundImage = `url(${Params.Photo})`;

      if(Params.Message) {

      var Div_message = this.CreateElement_(
        "div",
        `Div_message`
      );
  
      Section_Parallax.appendChild(Div_message);

      Div_message.setAttribute('style', Params.styleMessage);



      var message = this.CreateElement_(
        "h4",
        `message`,
        Params.Text_message
      );
  
      Div_message.appendChild(message);


      var Div_buttons = this.CreateElement_(
        "div",
        `Div_buttons`
        
      );
  
      Div_message.appendChild(Div_buttons);


      for (let index = 0; index < Params.Buttons.length; index++) {
      
        
        var ul_Nav = this.CreateElement_(
          "button",
          `button_Nav`
          
        );
    
        Div_buttons.appendChild(ul_Nav);
  
        var li_Nav = this.CreateElement_(
          "a",
          `a_Nav`,
          Params.Buttons[index].Text
          
        );
    
        ul_Nav.appendChild(li_Nav);

        ul_Nav.onclick = function () { window.location.href = `${Params.Buttons[index].Link}`; };
      }
     
    }
  

        break;

        case "Static":

        //{"Section": "Static", "Text": "", "Photo": "", "Color": ""}
        
        var Section_static = this.CreateElement_(
          "section",
          `Section_static`
        );
    
        Container_Parallax_BlockID.appendChild(Section_static);

        Section_static.style.backgroundColor = Params.Color;

        var div_text = this.CreateElement_(
          "div",
          `div_text`
        );
    
        Section_static.appendChild(div_text);

        var text = this.CreateElement_(
          "div",
          `text`,
          Params.Text
        );
    
        div_text.appendChild(text);

        var div_blur = this.CreateElement_(
          "div",
          `div_blur`
        );
    
        Section_static.appendChild(div_blur);

      var img_blur = this.CreateElement_(
          "img",
          `img_blur`,
          Params.Photo
        );
    
        div_blur.appendChild(img_blur); 

        var block = this.CreateElement_(
          "div",
          `block`
        );
    
        div_blur.appendChild(block); 

        block.setAttribute('style', `  border-right: 2vw solid ${Params.Color};  border-left: 2vw solid ${Params.Color};  border-bottom: 1vw solid ${Params.Color};  border-top: 1vw solid ${Params.Color}; box-shadow: inset 0px 0px 3vw 7vw ${Params.Color};`);

       
        
        break;
     
      default:
        break;
     }

    }

    ViewConstructor() {


        this.add_CSS_Class(
            `.Container_Parallax`,
            `
        height: auto;
         min-height: 100vh;
 /*  overflow-x: hidden;
  overflow-y: auto; */
  perspective: 2px;
              `
          );

          this.add_CSS_Class(
            `.Section_Parallax`,
            `
position: relative;
    background-position: top;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
        background-attachment: fixed;
    min-height: 75vh;
    height: auto;
        
              `
          );

          this.add_CSS_Class(
            `.h1_text`,
            `
      color: #fff;
    font-size: 5vw;
    text-align: center;
    font-weight: bold;
    margin: 0 auto;
    /* width: 800px; */
    position: relative;
    /* top: 50%; */
    /* left: 50%; */
    /* margin-top: -20%; */
    /* margin-left: -400px; */
    opacity: 0.8;

              `
          );
     

          this.add_CSS_Class(
            `.Section_static`,
            `
    position: relative;
    height: auto;
    padding: 3vh 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    align-content: center;
   

              `
          );
          
          this.add_CSS_Class(
            `.div_text`,
            `
width: 50%;
    
              `
          );


          this.add_CSS_Class(
            `.text`,
            `
    text-align: justify;
    padding: 2% 6%;
    font-size: 1.5vw;
    font-family: cursive;

    
              `
          );


          this.add_CSS_Class(
            `.div_blur`,
            `
margin: 0 auto;
    width: 50%;
    height: auto;
    max-height: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;

    
              `
          );


          this.add_CSS_Class(
            `.block`,
            `
width: 70%;
    position: absolute;
    max-height: 100%;
    bottom: 0px;
    border-radius: 25%;
    border-right: 2vw solid white;
    top: 0px;
    border-left: 2vw solid white;
    border-top: 1vw solid white;
    border-bottom: 1vw solid white;
    box-shadow: inset 0px 0px 3vw 7vw white;
              `
          );

          

          this.add_CSS_Class(
            `.img_blur`,
            `
width: 70%;
    max-height: 60vh;
    top: 0;
    height: auto;
    border-radius: 50%;
    display: flex;
    position: relative;
}
    
              `
          );

       

          this.add_CSS_Class(
            `.Div_message`,
            `
    width: 40%;
    min-height: 10vw;
    background-color: #e3c37b;
    padding: 1vw 3vw;
    position: absolute;
    border-radius: 2vw;
    top: -8vw;
    left: 6vw;

              `
          );
          
          this.add_CSS_Class(
            `.message`,
            `
font-size: 1.5vw;
          font-family: fantasy;
          font-style: italic;
          line-height: 4vw;
              text-align: center;


              `
          );

          this.add_CSS_Class(
            `.a_Nav`,
            `
         font-size: 2vw;
    padding: 2%;
    font-variant: all-small-caps;

              `
          );


          this.add_CSS_Class(
            `.Div_buttons`,
            `
    display: flex;
          flex-direction: row;
          align-content: center;
          justify-content: center;
          align-items: center;
      

              `
          );


          this.add_CSS_Class(
            `.button_Nav`,
            `
          font-family: "apparat", Sans-serif;
    font-weight: 500;
    fill: #fff;
    background-color: #61CE7000;
    border-style: solid;
    border-width: 3px 0;
    border-color: #000000;
    margin: 0 2vw;
    border-radius: 0;
    cursor:pointer;
              `
          );
           

      


        this.add_CSS_Class(
            ".Link_Grid_Wrapper",
            `
           

            `,
            GALSAN_CreateBlock.Screen_Middle
        );

        this.add_CSS_Class(
            ".h4Title",
            `


`,
            GALSAN_CreateBlock.Screen_Mobile
        );


        this.add_CSS_Class(
          `.button_Nav`,
          `

  border-width: 1px 0;

            `,
            GALSAN_CreateBlock.Screen_Mobile
        );



        this.add_CSS_Class(
          `.Div_message`,
          `
  width: 50%;
            `,
            GALSAN_CreateBlock.Screen_Mobile
        );
        
        this.add_CSS_Class(
          `.message`,
          `
font-size: 3.5vw;
            `,
            GALSAN_CreateBlock.Screen_Mobile
        );

        this.add_CSS_Class(
          `.a_Nav`,
          `
font-size: 3vw;
            `,
            GALSAN_CreateBlock.Screen_Mobile
        );

        this.add_CSS_Class(
          `.text`,
          `   
        padding: 2% 2% 2% 6%;
        font-size: 3.5vw;
   
            `,
            GALSAN_CreateBlock.Screen_Mobile
        );
  

        this.add_CSS_Class(
          `.Section_Parallax`,
          `

  min-height: 80vh;
      
            `,
            GALSAN_CreateBlock.Screen_Mobile
        );

        this.add_CSS_Class(
          `.block`,
          `
width: 80%;

            `,
            GALSAN_CreateBlock.Screen_Mobile
        );

        

        this.add_CSS_Class(
          `.img_blur`,
          `
width: 80%;

            `,
            GALSAN_CreateBlock.Screen_Mobile
        );



        var Container_principal = this.CreateElement_(
            "div",
            `Container_Parallax`,
            null,
            GALSAN_CreateBlock.Site_Column_Center
          );

          GALSAN_CreateBlock.AttachID(Container_principal, "Container_Parallax_BlockID");
  


    }
}
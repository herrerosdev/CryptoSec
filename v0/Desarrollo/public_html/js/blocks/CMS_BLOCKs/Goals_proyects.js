
class Goals_proyect {
    constructor(Params) {
  
      //Estructura
      //{"location": "", "reform": "", "meters": "", "Goals": ["", "", ""], "Result": ""}
      
      this.location_ = Params.location;
      this.meters_ = Params.meters;
      this.reform_ = Params.reform;
      this.goals_ = Params.Goals;
      this.result_ = Params.Result;
      //CallBack to signed css properties with name of the class
      this.CreateElement_ = GALSAN_CreateBlock.CreateElementSigned;
      this.add_CSS_Class = GALSAN_CreateBlock.add_CSS_Class_SIGNED;
  
  
      this.ViewConstructor();
    }
  
    getClassName() {
      return this.constructor.name;
    }
 
    AnimateObject() { //onclick effect swing


      var Card_ID = document.getElementById("Card_ID");

      Card_ID.classList.remove(`${this.getClassName()}Swing_Class`);
      void Card_ID.offsetWidth; // trigger reflow
      Card_ID.classList.add(`${this.getClassName()}Swing_Class`);
    }



  
    ViewConstructor() {
  
  
        this.add_CSS_Class(
            `.Main_Container`,
            `
                display: flex;
    width: 80%;
    flex-direction: row;
    margin: 0 auto;
              `
          );

          this.add_CSS_Class(
            `.Container_card`,
            `
    width: 50%;


              `
          );


          this.add_CSS_Class(
            `.Container_results`,
            `
display: flex;
     width: 60%;
  
    flex-direction: row;
              `
          );


        this.add_CSS_Class(
          `@keyframes typing`,
          `
                from {
                    width: 0;
                   
                  }
                  to {
                    width: 100%;
                  
                  }
    
          `
        );
    
        this.add_CSS_Class(
          `@keyframes blink`,
          `
               from, to {  border-right: .15em solid transparent; }
  50% { border-color: black } 100% { border: none }
    
          `
        );

        this.add_CSS_Class(
          `.Container_Goals .p_Data`,
          `
    margin: 0.5vw 0;
            

            `
        );

          this.add_CSS_Class(
            `.Container_res`,
            `

     width: 50%;
 
              `
          );


          this.add_CSS_Class(
            `.Container_res .p_Data`,
            `

     width: 100%;
     opacity:0;
     visibility: hidden;
  -webkit-animation-name: SlideLeft;
  animation-name: SlideLeft;
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-delay: 5s;
  animation-delay: 5s;
 
              `
          );



          this.add_CSS_Class(
            `@-webkit-keyframes SlideLeft`,
            `
       0% {
        -webkit-transform: translateX(200%);
        transform: translateX(200%);
       
          opacity:0;
     visibility: hidden;
  /*   width: 0%; */
     

        }
       95% {       
          opacity:1;
     visibility: visible;
    /*   width: auto; */

        }
        100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
                  opacity:1;
     visibility: visible;
        }
          
              `
          );
      
          this.add_CSS_Class(
            `@keyframes SlideLeft`,
            `
        0% {
        -webkit-transform: translateX(200%);
        transform: translateX(200%);
  /*      width: 0%; */
          opacity:0;
     visibility: hidden;
  

        }
      95% {       
          opacity:1;
     visibility: visible;
     /*  width: auto; */

        }
        100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
               opacity:1;
     visibility: visible;
        }
              `
          );
          this.add_CSS_Class(
            `.Container_Goals`,
            `

     width: 40%;
    font-size: 1.5vw;
        display: flex;
        flex-direction: column;
   
              `
          );

          this.add_CSS_Class(
            `.Card`,
            `
    width: 60%;
    background-color: #e8ded2;
    padding: 5%;
   
    top: -100px;
    position: relative;


              `
          );

          this.add_CSS_Class(
            `.Swing_Class`,
            `
        -webkit-transform-origin: top center;
            -ms-transform-origin: top center;
            transform-origin: top center;
            -webkit-animation-name: swing;
            animation-name: swing;
            -webkit-animation-duration: 2s;
            animation-duration: 2s;
            -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
             -webkit-animation-delay: 3s;
  animation-delay: 3s;


              `
          );


          this.add_CSS_Class(
            `.Data > .h3_Data:first-child `,
            `
 font-size: 2vw;
              `
          );

          this.add_CSS_Class(
            `.Data > .p_Data:first-child `,
            `
 font-size: 1vw;
              `
          );

          this.add_CSS_Class(
            `.Data_first > .h3_Data:first-child `,
            `
 font-size: 2vw;
              `
          );

          this.add_CSS_Class(
            `.Data_first > .p_Data:first-child `,
            `
 font-size: 1vw;
              `
          );

          this.add_CSS_Class(
            `.Data_first `,
            `
            margin-top: 20%;
              `
          );

          

          this.add_CSS_Class(
            `.h3_Data`,
            `
 font-size: 2vw;
              `
          );

          this.add_CSS_Class(
            `.p_Data`,
            `
 font-size: 1vw;
              `
          );

          this.add_CSS_Class(
            `@-webkit-keyframes swing`,
            `
 20% {
            -webkit-transform: rotate3d(0, 0, 1, 25deg);
            transform: rotate3d(0, 0, 1, 15deg);
            }
            40% {
            -webkit-transform: rotate3d(0, 0, 1, -20deg);
            transform: rotate3d(0, 0, 1, -10deg);
            }
            60% {
            -webkit-transform: rotate3d(0, 0, 1, 9deg);
            transform: rotate3d(0, 0, 1, 5deg);
            }
            80% {
            -webkit-transform: rotate3d(0, 0, 1, -5deg);
            transform: rotate3d(0, 0, 1, -5deg);
            }
            100% {
            -webkit-transform: rotate3d(0, 0, 1, 0deg);
            transform: rotate3d(0, 0, 1, 0deg);
            }
              `
          );

          this.add_CSS_Class(
            `@keyframes swing`,
            `
 20% {
            -webkit-transform: rotate3d(0, 0, 1, 25deg);
            transform: rotate3d(0, 0, 1, 15deg);
            }
            40% {
            -webkit-transform: rotate3d(0, 0, 1, -20deg);
            transform: rotate3d(0, 0, 1, -10deg);
            }
            60% {
            -webkit-transform: rotate3d(0, 0, 1, 9deg);
            transform: rotate3d(0, 0, 1, 5deg);
            }
            80% {
            -webkit-transform: rotate3d(0, 0, 1, -5deg);
            transform: rotate3d(0, 0, 1, -5deg);
            }
            100% {
            -webkit-transform: rotate3d(0, 0, 1, 0deg);
            transform: rotate3d(0, 0, 1, 0deg);
            }
              `
          );  

          this.add_CSS_Class(
            `.hole`,
          `
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    border-radius: 25px;
  background: rgb(117,111,111);
background: -moz-radial-gradient(circle, rgba(117,111,111,1) 0%, rgba(103,101,101,1) 15%, rgba(0,0,0,1) 80%, rgba(195,195,195,1) 100%);
background: -webkit-radial-gradient(circle, rgba(117,111,111,1) 0%, rgba(103,101,101,1) 15%, rgba(0,0,0,1) 80%, rgba(195,195,195,1) 100%);
background: radial-gradient(circle, rgba(117,111,111,1) 0%, rgba(103,101,101,1) 15%, rgba(0,0,0,1) 80%, rgba(195,195,195,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#756f6f",endColorstr="#c3c3c3",GradientType=1);
    width: 20px;
    height: 20px;
   
}

                `
            );

          ///////////////////////////////////////////////////////////////
          //////////////////middle///////////////////////////////////////
          ///////////////////////////////////////////////////////////////
  
  
          this.add_CSS_Class(
          `.Main_Container`,
        `
  
    width: 80%;
           
    flex-direction: column;
              `, GALSAN_CreateBlock.Screen_Middle
          );
  
          this.add_CSS_Class(
            `.Container_card`,
          `
    
      width: 90%;
  
                `, GALSAN_CreateBlock.Screen_Middle
            );


          this.add_CSS_Class(
            `.hole`,
          `
left: 50%;
        width: 10px;
        height: 10px;


                `, GALSAN_CreateBlock.Screen_Middle
            );

            this.add_CSS_Class(
              `.Card`,
            `
top: -50px;
    width: 60%;
 
    padding: 4%;
                  `, GALSAN_CreateBlock.Screen_Middle
              );
              this.add_CSS_Class(
                `.Data > .h3_Data:first-child `,
                `
     font-size: 3vw;
                  `, GALSAN_CreateBlock.Screen_Middle
              );
    
              this.add_CSS_Class(
                `.Data > .p_Data:first-child `,
                `
     font-size: 2vw;
                  `, GALSAN_CreateBlock.Screen_Middle
              );
    
              this.add_CSS_Class(
                `.Data_first > .h3_Data:first-child `,
                `
     font-size: 3vw;
                  `, GALSAN_CreateBlock.Screen_Middle
              );
    
              this.add_CSS_Class(
                `.Data_first > .p_Data:first-child `,
                `
     font-size: 2vw;
                  `, GALSAN_CreateBlock.Screen_Middle
              );
    
              this.add_CSS_Class(
                `.Data_first `,
                `
                margin-top: 15%;
                  `, GALSAN_CreateBlock.Screen_Middle
              );
    
              
    
              this.add_CSS_Class(
                `.h3_Data`,
                `
     font-size: 3vw;
                  `, GALSAN_CreateBlock.Screen_Middle
              );
    
              this.add_CSS_Class(
                `.p_Data`,
                `
     font-size: 2vw;
                  `, GALSAN_CreateBlock.Screen_Middle
              );


              this.add_CSS_Class(
                `.Container_results`,
                `
    
         width: 100%;
          overflow-x: hidden;
     
                  `, GALSAN_CreateBlock.Screen_Middle
              );
            

              this.add_CSS_Class(
                `.Container_res`,
                `
    
 width: 44%;
        margin: 0 auto;
     
                  `, GALSAN_CreateBlock.Screen_Middle
              );

              this.add_CSS_Class(
                `.Container_Goals`,
                `
    
         width: 44%;
        margin: 0 auto;
     
                  `, GALSAN_CreateBlock.Screen_Middle
              );
        ///////////////////////////////////////////////////////////////
        //////////////////mobile///////////////////////////////////////
        ///////////////////////////////////////////////////////////////
  


            this.add_CSS_Class(
              `.Data_first > .h3_Data:first-child `,
              `
   font-size: 3.5vw;
   font-weight: 600;
                `, GALSAN_CreateBlock.Screen_Mobile
            );

            this.add_CSS_Class(
              `.Data > .h3_Data `,
              `
   font-size: 3.5vw;
                `, GALSAN_CreateBlock.Screen_Mobile
            );

            this.add_CSS_Class(
              `.p_Data`,
              `
   font-size: 3.5vw;
                `, GALSAN_CreateBlock.Screen_Mobile
            );

            this.add_CSS_Class(
              `.Container_results`,
              `
  
       display:flex;
       flex-direction: column;
   
                `, GALSAN_CreateBlock.Screen_Mobile
            );

            this.add_CSS_Class(
              `.Container_res`,
              `
  
width: 100%;
 
   
                `, GALSAN_CreateBlock.Screen_Mobile
            );

            this.add_CSS_Class(
              `.Container_Goals`,
              `
  
       width: 100%;

   
                `, GALSAN_CreateBlock.Screen_Mobile
            );

            this.add_CSS_Class(
              `.h3_Data`,
              `
   font-size: 4vw;
                `, GALSAN_CreateBlock.Screen_Mobile
            );

            this.add_CSS_Class(
              `.Container_res .p_Data`,
              `
  
       width: 90%;
margin-left: 10%;
text-align: justify;
   
                `, GALSAN_CreateBlock.Screen_Mobile
            );

    
      var Container_principal = this.CreateElement_(
        "div",
        `Main_Container`,
        null,
        GALSAN_CreateBlock.Site_Column_Center
      );
  
      /////Container_principal.alt = this.alt_
  
      var Container_card = this.CreateElement_(
        "div",
        `Container_card`
      );
  
      Container_principal.appendChild(Container_card);

      var Container_results = this.CreateElement_(
        "div",
        `Container_results`
      );
  
      Container_principal.appendChild(Container_results);
  
      var Card = this.CreateElement_(
        "div",
        `Card`
      );
  
      Container_card.appendChild(Card);

      GALSAN_CreateBlock.AttachID(Card, "Card_ID");

      
      Card.classList.add(`${this.getClassName()}Swing_Class`);
      

      GALSAN_CreateBlock.Attach_Attribute_onClick(Card, `Goals_proyect.o_Goals.AnimateObject()`);
    

  
      var hole = this.CreateElement_(
        "div",
        `hole`
      );
  
      Card.appendChild(hole);
      
      var Data = this.CreateElement_(
        "div",
        `Data_first`
      );
  
      Card.appendChild(Data);


      var p_Data = this.CreateElement_(
        "p",
        `h3_Data`,
        "Localización"
      );
  
      Data.appendChild(p_Data);

      var p_Data = this.CreateElement_(
        "p",
        `p_Data`,
        this.location_
      );
  
      Data.appendChild(p_Data);

      var Data = this.CreateElement_(
        "div",
        `Data`
      );
  
      Card.appendChild(Data);

      var p_Data = this.CreateElement_(
        "p",
        `h3_Data`,
        "Zonas a reformar"
      );
  
      Data.appendChild(p_Data);

      var p_Data = this.CreateElement_(
        "p",
        `p_Data`,
        this.reform_
      );
  
      Data.appendChild(p_Data);

      var Data = this.CreateElement_(
        "div",
        `Data`
      );
  
      Card.appendChild(Data);

      var p_Data = this.CreateElement_(
        "p",
        `h3_Data`,
        "Metros cuadrados"
      );
  
      Data.appendChild(p_Data);

      var p_Data = this.CreateElement_(
        "p",
        `p_Data`,
        this.meters_
      );
  
      Data.appendChild(p_Data);


      var Container_Goals = this.CreateElement_(
        "div",
        `Container_Goals`
      );
  
      Container_results.appendChild(Container_Goals);

      var p_Data = this.CreateElement_(
        "h3",
        `h3_Data`,
        "Objetivos"
      );
      Container_Goals.appendChild(p_Data);

      

      for (let index = 0; index < this.goals_.length; index++) {
        var divs = this.CreateElement_(
          "div",
          ``
        );
        Container_Goals.appendChild(divs);
        divs.setAttribute('style', `display: inline-block; width: fit-content; margin-left: 10%;`);
        
        var p_Data = this.CreateElement_(
            "p",
            `p_Data`,
            this.goals_[index]
          );
          divs.appendChild(p_Data);

          var time_delay = 4 + index;
          
          p_Data.setAttribute('style', `white-space: nowrap; animation: typing 3s steps(${this.goals_[index].length}, end) ${time_delay}s 1 normal both, blink 2s steps(${this.goals_[index].length}) ${time_delay}s 7; width: 0; 
     overflow: hidden;`);
      }


      var Container_res = this.CreateElement_(
        "div",
        `Container_res`
      );
  
      Container_results.appendChild(Container_res);

      var p_Data = this.CreateElement_(
        "h3",
        `h3_Data`,
        "Resultados"
      );
      Container_res.appendChild(p_Data);


      var p_Data = this.CreateElement_(
        "p",
        `p_Data`,
        this.result_
      );
      Container_res.appendChild(p_Data);

    }
  }
  
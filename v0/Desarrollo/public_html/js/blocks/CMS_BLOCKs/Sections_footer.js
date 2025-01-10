class Sections_footer {
    constructor() {
  
    //Estructura
    //{}

      //CallBack to signed css properties with name of the class
      this.CreateElement_ = GALSAN_CreateBlock.CreateElementSigned;
      this.add_CSS_Class = GALSAN_CreateBlock.add_CSS_Class_SIGNED;
  
  
      this.ViewConstructor();
    }
  
    getClassName() {
      return this.constructor.name;
    }
  
    AddSection(Params) {

    //Estructura
    //{{"Section": "", "Effect": "", "Options": [{"Text": "", "Link": ""}, {"Text": "", "Link": ""}, {"Text": "", "Link": ""}]}}


    var Container_Main_Sections_ID = document.getElementById("Container_Main_Sections_ID");
  
    var Container_Section = this.CreateElement_(
      "div",
      `Container_Section`
    );

    Container_Main_Sections_ID.appendChild(Container_Section);

  
    this.ElementIsVisible(Container_Section, Params.Effect);


    var h2Section = this.CreateElement_(
        "h2",
        "h2Section",
        Params.Section
    );
    Container_Section.appendChild(h2Section);

  

    for (let index = 0; index < Params.Options.length; index++) {
      
      var Text = this.CreateElement_(
        "p",
        `Text`,
        Params.Options[index].Text
      );
  
      Container_Section.appendChild(Text);

      if(Params.Options[index].Link) {
        Text.style.cursor = 'pointer';
        Text.onclick = function () { window.location.href = `${Params.Options[index].Link}`; };
      }

      
    }


  
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
        `.Container_Main`,
        `
      
    display: grid;
    grid-template-columns: 25% 50% 25%;
    margin: 0% 10% 0% 10%;
    border-top: 1px solid black;
    text-align: justify;
    width: 80%;
    height: auto;

          `
      );
  
  
      this.add_CSS_Class(
        `.Container_Section`,
        `

    flex-direction: column;
padding: 0 5%;
display:flex;
visibility: hidden;

        `
      );

      this.add_CSS_Class(
        `.SlideUp`,
        `
       -webkit-animation-name: slideInUp;
        animation-name: slideInUp;
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: forwards;
         animation-delay: 0s;
         animation-timing-function: linear;
        `
      );


      this.add_CSS_Class(
        `.SlideUp2s`,
        `
       -webkit-animation-name: slideInUp;
        animation-name: slideInUp;
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: forwards;
         animation-delay: 0.5s;
         animation-timing-function: linear;
        `
      );

      this.add_CSS_Class(
        `.SlideUp3s`,
        `
       -webkit-animation-name: slideInUp;
        animation-name: slideInUp;
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: forwards;
         animation-delay: 1s;
         animation-timing-function: linear;
        `
      );
      
  
  
      this.add_CSS_Class(
        `.h2Section`,
        `

        `
      );
  


  
      this.add_CSS_Class(
        `.Text`,
        `
          margin: 0.5em;
    color: darkgrey;

          `
      );


    this.add_CSS_Class(
      `@-webkit-keyframes slideInUp`,
      `
     0% {
        -webkit-transform: translateY(100%);
        transform: translateY(100%);
       visibility:hidden;
          height: 30%;
        
        }
                   50% {
        -webkit-transform: translateY(50%);
        transform: translateY(50%);
         visibility:hidden;
            height: 50%;
         
        }

                           75% {
        -webkit-transform: translateY(20%);
        transform: translateY(20%);
            height: 50%;
         
        }
        100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        height: 100%;
        visibility:visible;
        }
        `
    );

    this.add_CSS_Class(
      `@keyframes slideInUp`,
      `
        0% {
        -webkit-transform: translateY(100%);
        transform: translateY(100%);
  visibility:hidden;
            height: 30%;
         
        }
            50% {
        -webkit-transform: translateY(50%);
        transform: translateY(50%);
            height: 50%;
             visibility:hidden;
         
        }
                               75% {
        -webkit-transform: translateY(20%);
        transform: translateY(20%);
            height: 70%;
         
        }
        100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        height: 100%;
        visibility:visible;
        }
    
        `
    );
  
        ///////////////////////////////////////////////////////////////
        //////////////////middle///////////////////////////////////////
        ///////////////////////////////////////////////////////////////
      
        this.add_CSS_Class(
          `.Container_Main`,
          `
        grid-template-columns: 50% 50%;
        margin: 0% 5% 0% 5%;
        width: 90%;  
            `, GALSAN_CreateBlock.Screen_Middle
        );
    
    

    this.add_CSS_Class(
      `.h2Section`,
      `
    

  font-size: 4vw;


        `, GALSAN_CreateBlock.Screen_Middle
    );

    this.add_CSS_Class(
      `.Text`,
      `
    
    margin: 0.5em 0;
 font-size: 2.3vw;


        `, GALSAN_CreateBlock.Screen_Middle
    );
                ///////////////////////////////////////////////////////////////
              //////////////////mobile///////////////////////////////////////
              ///////////////////////////////////////////////////////////////

              this.add_CSS_Class(
                `.h2Section`,
                `
              
          
            font-size: 5vw;
          
          
                  `, GALSAN_CreateBlock.Screen_Mobile
              );

    this.add_CSS_Class(
      `.Text`,
      `

 font-size: 3.5vw;


        `, GALSAN_CreateBlock.Screen_Mobile
    );


              this.add_CSS_Class(
                `.Container_Main`,
                `

            grid-template-columns: 100%;
        margin: 0% 15% 0% 15%;
        width: 70%;
            
                  `, GALSAN_CreateBlock.Screen_Mobile
              );
  
      var Container_principal = this.CreateElement_(
        "div",
        `Container_Main`,
        null,
        GALSAN_CreateBlock.Site_Column_Center
      );
  
      /////Container_principal.alt = this.alt_
  
      GALSAN_CreateBlock.AttachID(Container_principal, "Container_Main_Sections_ID"); 
  
    }
  }
  
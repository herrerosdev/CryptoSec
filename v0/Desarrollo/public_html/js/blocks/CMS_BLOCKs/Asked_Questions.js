
class Asked_Questions {
    constructor(Params) {

        //Estructura
      //{"Photo": "", "Title": ""}
  
      this.Photo_ = Params.Photo;
      this.Title_ = Params.Title;
      //CallBack to signed css properties with name of the class
      this.CreateElement_ = GALSAN_CreateBlock.CreateElementSigned;
      this.add_CSS_Class = GALSAN_CreateBlock.add_CSS_Class_SIGNED;
  
  
      this.ViewConstructor();
    }
  
    getClassName() {
      return this.constructor.name;
    }
  


    Add_Question(Params) {

          //Estructura
      //{"Question": "", "Number": 1, "Answer": ""}

      var Container_Questions_ID = document.getElementById("Container_Questions_ID");

      var Container_General = this.CreateElement_(
        "div",
        `Container_General`
      );
  
      Container_Questions_ID.appendChild(Container_General);


      var Container_Question = this.CreateElement_(
        "div",
        `Container_Question`
      );
  
      Container_General.appendChild(Container_Question);

      GALSAN_CreateBlock.Attach_Attribute_onClick(Container_Question, `Asked_Questions.Asked.ToggleNav(`+ '"' + `${this.getClassName()}` + '",' + Params.Number + `)`);
    

      var Question = this.CreateElement_(
        "p",
        `Question`,
        Params.Question
      );
  
      Container_Question.appendChild(Question);

      var Nav_Menu_toggle = this.CreateElement_(
        "div",
        `Question_toggle`
      );
  
      Container_Question.appendChild(Nav_Menu_toggle);

      var Span_Menu_toggle = this.CreateElement_(
        "span",
        `Span_Menu_toggle`
      );
  
      Nav_Menu_toggle.appendChild(Span_Menu_toggle);
  
      Span_Menu_toggle.classList.add(`${this.getClassName()}line_1`);
      GALSAN_CreateBlock.AttachID(Span_Menu_toggle, "Span_line1" + Params.Number);
  

      

      var Container_Answer = this.CreateElement_(
        "div",
        `Container_Answer`
      );
  
      Container_General.appendChild(Container_Answer);
      GALSAN_CreateBlock.AttachID(Container_Answer, "Container_Answer" + Params.Number);

      var Answer = this.CreateElement_(
        "p",
        `Answer`,
        Params.Answer
      );
  
      Container_Answer.appendChild(Answer);

    }



  
     ToggleNav(ClassName, Number) {

      var Container_Answer = document.getElementById("Container_Answer" + Number);
  
      var Span_line1 = document.getElementById("Span_line1" + Number);

      Span_line1.classList.toggle(ClassName + 'active');
   
      Container_Answer.classList.toggle(ClassName + 'active');
    }
  
  
    ViewConstructor() {
  
  
        this.add_CSS_Class(
            `.Main_Container`,
            `
          width: 100%;
          margin-top: 9vh;
          
            display: grid;
            grid-template-columns: 40% 60%;
              `
          );


  
      this.add_CSS_Class(
        `.Container_Image`,
        `
          width: 90%;
              padding: 0% 5%;
  
      
          `
      );
  
      this.add_CSS_Class(
        `.Image`,
        `
     width: 100%;
    padding: 2% 2% 2% 2%;
    border-style: solid;
        max-height: 90%;
    border-width: 1px 1px 1px 1px;
    border-color: #2D2521;
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
  

      this.add_CSS_Class(
        `.Container_General`,
        `
    width: 80%;
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    border-radius: 25px;
    padding: 1vw 0;
    justify-content: space-evenly;
    margin-bottom: 2vw;
    align-items: center;
          `
      );
  

      this.add_CSS_Class(
        `.Container_Question`,
        `
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
          `
      );
     
      this.add_CSS_Class(
        `.Question`,
        `
      font-size: 1.5vw;
          `
      );

      this.add_CSS_Class(
        `.Answer`,
        `
      font-size: 1vw;
          `
      );


  this.add_CSS_Class(
    `.Span_Menu_toggle`,
    `
    display: inline-block;
    width: 30px;
    position: relative;
    height: 40px;
  
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
    background: black;
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
    background: black;
    content: "";
    will-change: transform;
    transition: all .2s ease;
    position: absolute;
    transform: rotate(-45deg) translate(5px, 5px);
  
      `
  ); 



  this.add_CSS_Class(
    `.line_1.active::before`,
    `
     transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    top: 50%;
    right: 5px;
    transition: right .1s linear 0.9s, transform .2s ease-out 0.3s;
    -webkit-transition: right .1s linear 0.9s, transform .2s ease-out 0.3s;
    -moz-transition: right .1s linear 0.9s, transform .2s ease-out 0.3s;
      `
  );


  this.add_CSS_Class(
    `.line_1.active::after`,
    `
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    top: 50%;
    left: 5px;
    transition: left .1s linear 0.9s, transform .2s ease-out 0.3s;
    -webkit-transition: left .1s linear 0.4s, transform .2s ease-out 0.3s;
    -moz-transition: left .1s linear 0.4s, transform .2s ease-out 0.3s;
      `
  );
  


  this.add_CSS_Class(
    `.Container_Answer`,
    `
        width: 100%;
        display: inline-flex;
        max-height: 0px;
        opacity: 0;
        visibility: hidden;
        height: fit-content;
        flex-direction: column;
        justify-content: flex-start;
        position: relative;
        align-items: center;

          transition: opacity 0.9s linear, max-height 0.9s ease-out, visibility 0.9s linear;

      
      `
  );
  
  this.add_CSS_Class(
    `.Container_Answer.active`,
    `
  visibility: visible;
  opacity: 1;
     max-height: 900px;
     transition: opacity 0.9s linear, max-height 0.7s ease-in, visibility 0.9s linear;

      
      `
  );


          ///////////////////////////////////////////////////////////////
          //////////////////middle///////////////////////////////////////
          ///////////////////////////////////////////////////////////////
  
  
          this.add_CSS_Class(
          `.Main_Container`,
        `
 
              `, GALSAN_CreateBlock.Screen_Middle
          );
  
          this.add_CSS_Class(
            `.Container_Image`,
            `
      width: 96%;
      padding: 0% 2%;
  
              `, GALSAN_CreateBlock.Screen_Middle
          );
      
      
      
          this.add_CSS_Class(
            `.Container_Text`,
            `
          width: 96%;
      padding: 0% 2%;
              `, GALSAN_CreateBlock.Screen_Middle
          );
  


          this.add_CSS_Class(
            `.Question`,
            `
          font-size: 2vw;
              `, GALSAN_CreateBlock.Screen_Middle
          );
  
          this.add_CSS_Class(
            `.Answer`,
            `
          font-size: 1.5vw;
              `, GALSAN_CreateBlock.Screen_Middle
          );
  
  
        ///////////////////////////////////////////////////////////////
        //////////////////mobile///////////////////////////////////////
        ///////////////////////////////////////////////////////////////
  
  
          this.add_CSS_Class(
            `.Main_Container`,
          `
    
        flex-direction: column;
          align-items: center;
           grid-template-columns: 100%;
          
                `, GALSAN_CreateBlock.Screen_Mobile
            );

            this.add_CSS_Class(
              `.Container_General`,
              `
          width: 96%;

                `, GALSAN_CreateBlock.Screen_Mobile
            );
    
            this.add_CSS_Class(
              `.Container_Image`,
              `
        width: 95%;
            
                `, GALSAN_CreateBlock.Screen_Mobile
            );
        
        
        
            this.add_CSS_Class(
              `.Container_Text`,
              `
                width: 95%;

                `, GALSAN_CreateBlock.Screen_Mobile
            );
  
            this.add_CSS_Class(
              `.Question`,
              `
            font-size: 5vw;
                `, GALSAN_CreateBlock.Screen_Mobile
            );
    
            this.add_CSS_Class(
              `.Answer`,
              `
            font-size: 4vw;
                `, GALSAN_CreateBlock.Screen_Mobile
            );


            this.add_CSS_Class(
              `.Image`,
              `
           width: 94%;
    
                `, GALSAN_CreateBlock.Screen_Mobile
            );
  
      var Container_principal = this.CreateElement_(
        "div",
        `Main_Container`,
        null,
        GALSAN_CreateBlock.Site_Column_Center
      );
  
      /////Container_principal.alt = this.alt_
  
      var Container_Image = this.CreateElement_(
        "div",
        `Container_Image`
      );
  
      Container_principal.appendChild(Container_Image);
  
      var Image = this.CreateElement_(
        "img",
        `Image`,
        this.Photo_
      );
  
      Container_Image.appendChild(Image);
  
      var Container_Text = this.CreateElement_(
        "div",
        `Container_Text`
      );
  
      Container_principal.appendChild(Container_Text);

      GALSAN_CreateBlock.AttachID(Container_Text, "Container_Questions_ID");


      var Questions_title = this.CreateElement_(
        "h2",
        `Title`,
        this.Title_
      );
  
      Container_Text.appendChild(Questions_title);
  



     
    
    }
  }
  
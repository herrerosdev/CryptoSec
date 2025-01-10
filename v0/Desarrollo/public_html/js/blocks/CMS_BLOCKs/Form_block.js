class Form_block {
    constructor(Params) {
  
      this.Title_ = Params.Title;
      this.Placeholder_Name_ = Params.Placeholder_Name;
      this.Placeholder_Mail_ = Params.Placeholder_Mail;
      this.Placeholder_Phone_ = Params.Placeholder_Phone;
      this.Placeholder_Description_ = Params.Placeholder_Description;
      this.Mail_ = Params.Mail;
      this.Phone_ = Params.Phone;
      //CallBack to signed css properties with name of the class
      this.CreateElement_ = GALSAN_CreateBlock.CreateElementSigned;
      this.add_CSS_Class = GALSAN_CreateBlock.add_CSS_Class_SIGNED;
  
  
      this.ViewConstructor();
    }
  
    getClassName() {
      return this.constructor.name;
    }
  

  
  
    ViewConstructor() {
  
  
      this.add_CSS_Class(
        `.Container`,
        `
             margin: 0% 15%;
    display: grid;
    justify-content: center;
    align-items: center;
    justify-items: stretch;
    grid-template-columns: 55% 45%;
          `
      );
  
  
      this.add_CSS_Class(
        `.Container_Title`,
        `
text-align: start;
    padding: 0 8%;
          `
      );

      this.add_CSS_Class(
        `.Title`,
        `
font-size: 60px;
font-weight: 600;
    font-family: "Abel", Sans-serif;
        line-height: 1.4em;

          `
      );



      this.add_CSS_Class(
        `.Container_inputs`,
        `
      
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-around;
    align-items: center;
    background-color: #c2bbbb1c;
    height: 60%;
    border: 1px solid black;
    padding: 10% 5%;
        background-position: center !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    background: url(/assets/studio/manchas.jpg);

          `
      );
  
      this.add_CSS_Class(
        `.input_Fill`,
        `
    margin: 1vh auto;
    width: 70%;
    border-radius: 0px !important;
    border: 0px solid transparent !important;
    border-bottom: 1px solid black !important;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 0%);
    outline: 0;
    font-family: monospace;
    font-size: 14px;
    border-width: 1px;
         background-color: transparent;
  
          `
      );

      this.add_CSS_Class(
        `.input_Fill::placeholder`,
        `
    color: black;
  
          `
      );
      
      this.add_CSS_Class(
        `.textarea_Fill`,
        `
    margin: 1vh auto;
    width: 70%;
    border-radius: 0px !important;
    border: 0px solid transparent !important;
    border-bottom: 1px solid black !important;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 0%);
    outline: 0;

    font-size: 14px;
    border-width: 1px;
         background-color: transparent;
     height: 56px;
    min-block-size: 12rem;
          `
      );

      this.add_CSS_Class(
        `.textarea_Fill::placeholder`,
        `
    color: black;
  
          `
      );
      

      this.add_CSS_Class(
        `.p_data`,
        `
    font-family: monospace;
    color: darkgrey;
    margin: 25px 0;
    font-size: 16px;

          `
      );

      this.add_CSS_Class(
        `.button_form`,
        `
      min-width: 130px;
    height: 40px;
    color: #fff;
    padding: 5px 10px;
    font-weight: bold;
    cursor: pointer;
    transition: all 1.5s ease;
    position: relative;
    display: inline-block;
    outline: none;
    border-radius: 5px;
    z-index: 0;
    background: #eaeaea;
    overflow: hidden;
    border: 2px solid #495057;
    color: #495057;
    border-radius: 0px 15px;


          `
      );

      this.add_CSS_Class(
        `.button_form:active`,
        `
position:relative;
        top:1px;
          `
      );

      this.add_CSS_Class(
        `.button_form:hover`,
        `
color: #fff;
          `
      );

      this.add_CSS_Class(
        `.button_form:hover::after`,
        `
width: 100%;
          `
      );

      this.add_CSS_Class(
        `.button_form::after`,
        `
content: "";
    position: absolute;
    z-index: -1;
    transition: all 1.5s ease;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
    background: #495057;
          `
      );


              ///////////////////////////////////////////////////////////////
        //////////////////middle///////////////////////////////////////
        ///////////////////////////////////////////////////////////////

        this.add_CSS_Class(
          `.Container`,
          `
        margin: 150px 5%;
        grid-template-columns: 100%;
            `, GALSAN_CreateBlock.Screen_Middle
        );
    
        

    
        this.add_CSS_Class(
          `.Container_Title`,
          `

    padding: 0 2%;
            `, GALSAN_CreateBlock.Screen_Middle
        );
  
        this.add_CSS_Class(
          `.Title`,
          `
      font-size: 5vw;

            `, GALSAN_CreateBlock.Screen_Middle
        );
  
  
  
        this.add_CSS_Class(
          `.Container_inputs`,
          `
      height: 95%;
       padding: 5% 3%;
            `, GALSAN_CreateBlock.Screen_Middle
        );

        this.add_CSS_Class(
          `.input_Fill`,
          `
  
      width: 85%;
      border-bottom: 2px solid black !important;
      font-size: 2vw;

    
            `, GALSAN_CreateBlock.Screen_Middle
        );


        
        this.add_CSS_Class(
          `.textarea_Fill`,
          `
                width: 85%;
      border-bottom: 2px solid black !important;
      font-size: 2vw;

            `, GALSAN_CreateBlock.Screen_Middle
        );
  

  
        this.add_CSS_Class(
          `.p_data`,
          `
    font-size: 2vw;
  
            `, GALSAN_CreateBlock.Screen_Middle
        );
  
        this.add_CSS_Class(
          `.button_form`,
          `
      height: 45px;
      font-size: 2vw;
            `, GALSAN_CreateBlock.Screen_Middle
        );

        ///////////////////////////////////////////////////////////////
        //////////////////mobile///////////////////////////////////////
        ///////////////////////////////////////////////////////////////

  
        this.add_CSS_Class(
          `.Title`,
          `
      font-size: 7vw;

            `, GALSAN_CreateBlock.Screen_Mobile
        );
  

        this.add_CSS_Class(
          `.input_Fill`,
          `
      font-size: 4vw;

    
            `, GALSAN_CreateBlock.Screen_Mobile
        );


        
        this.add_CSS_Class(
          `.textarea_Fill`,
          `
      font-size: 4vw;

            `, GALSAN_CreateBlock.Screen_Mobile
        );
  

  
        this.add_CSS_Class(
          `.p_data`,
          `
    font-size: 4vw;
  
            `, GALSAN_CreateBlock.Screen_Mobile
        );
  
        this.add_CSS_Class(
          `.button_form`,
          `
      font-size: 4vw;
            `, GALSAN_CreateBlock.Screen_Mobile
        );


      var Container_principal = this.CreateElement_(
        "div",
        `Container`,
        null,
        GALSAN_CreateBlock.Site_Column_Center
      );
  
      /////Container_principal.alt = this.alt_
  
      GALSAN_CreateBlock.AttachID(Container_principal, "Container_Form_ID");

  
      var Container_Title = this.CreateElement_(
        "div",
        `Container_Title`
      );
  
      Container_principal.appendChild(Container_Title);

      var Title = this.CreateElement_(
        "h3",
        `Title`,
        this.Title_

      );
  
      Container_Title.appendChild(Title);

      var p_data = this.CreateElement_(
        "p",
        `p_data`,
        this.Mail_

      );
  
      Container_Title.appendChild(p_data);


      var p_data = this.CreateElement_(
        "p",
        `p_data`,
        this.Phone_

      );
  
      Container_Title.appendChild(p_data);
  

      var Container_inputs = this.CreateElement_(
        "div",
        `Container_inputs`
      );
  
      Container_principal.appendChild(Container_inputs);

      var input_Fill = this.CreateElement_(
        "input",
        `input_Fill`
    );

 
    Container_inputs.appendChild(input_Fill);

    input_Fill.type = "text";
    input_Fill.placeholder = this.Placeholder_Name_;


    var input_Fill = this.CreateElement_(
        "input",
        `input_Fill`
    );

 
    Container_inputs.appendChild(input_Fill);

    input_Fill.type = "text";
    input_Fill.placeholder = this.Placeholder_Mail_;


    var input_Fill = this.CreateElement_(
        "input",
        `input_Fill`
    );

 
    Container_inputs.appendChild(input_Fill);

    input_Fill.type = "text";
    input_Fill.placeholder = this.Placeholder_Phone_;



    var input_Fill = this.CreateElement_(
        "textarea",
        `textarea_Fill`
    );

 
    Container_inputs.appendChild(input_Fill);

    
    input_Fill.placeholder = this.Placeholder_Description_;
  
  
    var button_form = this.CreateElement_(
      "button",
      `button_form`,
      "ENVIAR"
  );


  Container_inputs.appendChild(button_form);
  
    }
  }


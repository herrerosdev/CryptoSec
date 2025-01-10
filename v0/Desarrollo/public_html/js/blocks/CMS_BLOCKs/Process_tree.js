class Process_tree {
    constructor(Params) {
  
      this.Title_ = Params.Title;
      this.N_Steps_ = Params.N_Steps;
      //CallBack to signed css properties with name of the class
      this.CreateElement_ = GALSAN_CreateBlock.CreateElementSigned;
      this.add_CSS_Class = GALSAN_CreateBlock.add_CSS_Class_SIGNED;
  
  
      this.ViewConstructor();
    }
  
    getClassName() {
      return this.constructor.name;
    }
  

    AddSection(Params) {

      

     var Line_tree_ID = document.getElementById("Line_tree_ID");
     var Number_items = document.getElementsByClassName(`${this.getClassName()}Section_item`);

     if(Number_items.length == this.N_Steps_) {

      var Section = this.CreateElement_(
        "div",
        `Final_item`
  
  
      );
  
      Line_tree_ID.appendChild(Section);
      
      var icon = this.CreateElement_(
        "img",
        `icon_Step`,
        Params.iconFinal
  
  
      );
  
      Section.appendChild(icon);


      var Container_text = this.CreateElement_(
        "div",
        `Container_text`
  
  
      );
  
      Section.appendChild(Container_text);
  
      var p_Step = this.CreateElement_(
        "div",
        `p_Step`,
        Params.Text
  
  
      );
      Container_text.appendChild(p_Step);
    } else {

     var Section = this.CreateElement_(
      "div",
      `Section_item`


    );

    Line_tree_ID.appendChild(Section);
    
     var icon = this.CreateElement_(
      "img",
      `icon_Step`,
      Params.icon


    );

    Section.appendChild(icon);

    var Container_text = this.CreateElement_(
      "div",
      `Container_text`


    );

    Section.appendChild(Container_text);

    var p_Step = this.CreateElement_(
      "div",
      `p_Step`,
      Params.Text


    );

    Container_text.appendChild(p_Step);

    var p_Step = this.CreateElement_(
      "div",
      `Step_Description`,
      Params.Description


    );

    Container_text.appendChild(p_Step);

  }
    
    if(Number_items.length == this.N_Steps_) {

    

    }
    

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
        `.Main_Container::before`,
        `

  box-sizing: border-box;
          `
      );

      this.add_CSS_Class(
        `.Main_Container::after`,
        `
 box-sizing: border-box;
  
          `
      );

      this.add_CSS_Class(
        `.Container_tree`,
        `
    margin: 0px 3%;
          `
      );

      this.add_CSS_Class(
        `.Container_text`,
        `
        display: flex;
    padding: 2%;
    position: relative;
    float: left;
    width: 42%;
    text-align: justify;
    font-size: 1.5vw;
    font-family: monospace;
    flex-direction: column;
          `
      );
      this.add_CSS_Class(
        `.Step_Description`,
        `
    font-size: 1vw;
          `
      );
      
      this.add_CSS_Class(
        `.Container_tree::after`,
        `
      
 box-sizing: border-box;
          `
      );

      this.add_CSS_Class(
        `.Container_tree::before`,
        `
       box-sizing: border-box;

          `
      );
  

     
      this.add_CSS_Class(
        `.line_tree`,
        `
    width: 100%;
    margin: 30px auto;
    position: relative;
          `
      );

      this.add_CSS_Class(
        `.line_tree::before`,
        `
    content: "";
    display: block;
  		width: 3px;
    height: 100%;
    background: #c6c6c6;
    margin: 0 auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

          `
      );


      this.add_CSS_Class(
        `.line_tree::after`,
        `
 content: "";
        clear: both;
        display: table;
        width: 100%;

          `
      );



      this.add_CSS_Class(
        `.Section_item`,
        `
    margin-bottom: 2vh;
    position: relative;
    min-height: 10vw;
          `
      );


      this.add_CSS_Class(
        ".Section_item:nth-child(even) .Container_text",
        `
float: right;

`
    );

      this.add_CSS_Class(
        `.Section_item::after`,
        `
      content: '';
      display: block;
      width: 100%;
      clear: both;
          `
      );
      this.add_CSS_Class(
        `.Section_item::before`,
        `
      content: '';
      display: block;
      width: 100%;
      clear: both;
          `
      );

      this.add_CSS_Class(
        `.Final_item`,
        `
     	    margin-bottom: 0;
		position: relative;
        display: flex;
    flex-direction: column;
    align-items: center;

          `
      );

      this.add_CSS_Class(
        `.Final_item .Container_text`,
        `
  width: fit-content;
      top: 6vw;
          `
      );
    
  
      this.add_CSS_Class(
        `.Final_item::after`,
        `
      content: '';
      display: block;
      width: 100%;
      clear: both;
          `
      );
      this.add_CSS_Class(
        `.Final_item::before`,
        `
      content: '';
      display: block;
      width: 100%;
      clear: both;
          `
      );

     
      this.add_CSS_Class(
        `.Title_Text`,
        `

      text-align: center;
          `
      );

      this.add_CSS_Class(
        `.icon_Step`,
        `
      width: 4%;
    height: auto;
    position: absolute;
    top: 0;
    left: 47%;
    background-color: white;
    padding: 1%;
    border-radius: 15px;
    border: 1px solid black;



          `
      );

      this.add_CSS_Class(
        `.icon_Step::before`,
        `
content: "";
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    background: #a9a8a8;
    border: 2px solid #232323;
        line-height: 18px;

          `
      );


      this.add_CSS_Class(
        `.p_Step`,
        `

    font-size: 1.5vw;
    margin-bottom: 2%;

    
          `
      );

    

      this.add_CSS_Class(
        `.p_Step::after`,
        `
      content: "";
      display: block;
      clear: both;
    
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
  

  
        ///////////////////////////////////////////////////////////////
        //////////////////mobile///////////////////////////////////////
        ///////////////////////////////////////////////////////////////
  
        this.add_CSS_Class(
          `.Section_item`,
          `

      min-height: 20vw;
            `, GALSAN_CreateBlock.Screen_Mobile
        );
  
        this.add_CSS_Class(
          `.icon_Step`,
          `
        width: 12%;
      left: 43%;

            `, GALSAN_CreateBlock.Screen_Mobile
        );

        this.add_CSS_Class(
          `.p_Step`,
          `
  
      font-size: 3.5vw;
      margin-bottom: 2%;
      font-weight: bold;
  
      
            `, GALSAN_CreateBlock.Screen_Mobile
        );
  
  

        this.add_CSS_Class(
          `.Container_text`,
          `    
      padding: 0%;
      text-align: center;
      margin-top: 5%;

            `, GALSAN_CreateBlock.Screen_Mobile
        );
    

        this.add_CSS_Class(
          `.Step_Description`,
          `
      display: none;
            `, GALSAN_CreateBlock.Screen_Mobile
        );

        this.add_CSS_Class(
          `.Final_item .Container_text`,
          `

        top: 14vw;
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
  
      var Title_Text = this.CreateElement_(
        "h3",
        `Title_Text`,
        this.Title_
  
  
      );
  
      Container_principal.appendChild(Title_Text);

      var Container_tree = this.CreateElement_(
        "div",
        `Container_tree`
  
  
      );
  
      Container_principal.appendChild(Container_tree);
  
    
      var line_tree = this.CreateElement_(
        "div",
        `line_tree`
  
  
      );
  
      Container_tree.appendChild(line_tree);

      GALSAN_CreateBlock.AttachID(line_tree, "Line_tree_ID");

        
   
  
    }
  }
  
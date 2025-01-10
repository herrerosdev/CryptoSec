
  class Map_Block {
    constructor(Params) {

     // {{"src": "", "activate_Second_Div": 0, "width": "", "height": "","number": ""}}

      this.src = Params.src;
      this.width = Params.width;
      this.height = Params.height;
      this.Title = Params.Title;
      this.Schedule = Params.Schedule;
      this.number = Params.number;
      this.activate_Second_Div = Params.activate_Second_Div;
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
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 5% 0%;
      position: relative;
  
          `
      );


      this.add_CSS_Class(
        `.Map`,
        `
      width: ${this.width};
      height: ${this.height};
        border: 0;
  
          `
      );

  
      this.add_CSS_Class(
        `.Container_Schedule`,
        `
    width: 50%;
    height: ${this.height};
  
    background-color: #48707161;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  
          `
      );

      this.add_CSS_Class(
        `.Text_2`,
        `
      font-style: italic;
      font-family: fantasy;
        font-size: 1.5vw;
      font-variant-caps: petite-caps;
      font-weight: 900;
      margin: 2vw 0;
  
          `
      );

      this.add_CSS_Class(
        `.Text`,
        `
      font-style: italic;
      font-family: fantasy;
      font-size: 2.5vw;
      font-variant-caps: petite-caps;
      font-weight: 900;
  
          `
      );

                ///////////////////////////////////////////////////////////////
          //////////////////middle///////////////////////////////////////
          ///////////////////////////////////////////////////////////////

      this.add_CSS_Class(
        `.Container`,
        `

    flex-direction: column;

          `, GALSAN_CreateBlock.Screen_Middle
      );

      this.add_CSS_Class(
        `.Map`,
        `

    width: 100%;
    height: 450px;

          `, GALSAN_CreateBlock.Screen_Middle
      );

      this.add_CSS_Class(
        `.Container_Schedule`,
        `

    width: 100%;
    height: auto
          `, GALSAN_CreateBlock.Screen_Middle
      );


      this.add_CSS_Class(
        `.Text_2`,
        `
 font-size: 2vw;

          `, GALSAN_CreateBlock.Screen_Middle
      );

      this.add_CSS_Class(
        `.Text`,
        `
 font-size: 4vw;
          `, GALSAN_CreateBlock.Screen_Middle
      );

            ///////////////////////////////////////////////////////////////
          //////////////////mobile///////////////////////////////////////
          ///////////////////////////////////////////////////////////////

      this.add_CSS_Class(
        `.Text_2`,
        `
 font-size: 3vw;

          `, GALSAN_CreateBlock.Screen_Mobile
      );

      this.add_CSS_Class(
        `.Text`,
        `
 font-size: 5.5vw;
          `, GALSAN_CreateBlock.Screen_Mobile
      );

        var Container_principal = this.CreateElement_(
            "div",
            `Container`,
            null,
            GALSAN_CreateBlock.Site_Column_Center
        );

        GALSAN_CreateBlock.AttachID(Container_principal, "MapBlockID");

        

      var Map_frame = this.CreateElement_(
        "iframe",
        `Map`,
        this.src
    
    
    
      );
    
      Container_principal.appendChild(Map_frame);


      Map_frame.loading = "lazy";
      Map_frame.referrerpolicy = "no-referrer-when-downgrade";

      if(this.activate_Second_Div == 1) {

      var Container_Schedule = this.CreateElement_(
        "div",
        `Container_Schedule`
    
    
    
      );
    
      Container_principal.appendChild(Container_Schedule);


      var Text_overlay = this.CreateElement_(
        "div",
        `Text`,
        this.Title
    
    
      );
    
      Container_Schedule.appendChild(Text_overlay);

for (let index = 0; index < this.Schedule.length; index++) {
  var Text_overlay = this.CreateElement_(
    "div",
    `Text_2`,
    this.Schedule[index]


  );

  Container_Schedule.appendChild(Text_overlay);
  
}



      var Text_overlay = this.CreateElement_(
        "div",
        `Text_2`,
        this.number
    
    
      );
    
      Container_Schedule.appendChild(Text_overlay);


    }
    
    }
  }


  //<iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

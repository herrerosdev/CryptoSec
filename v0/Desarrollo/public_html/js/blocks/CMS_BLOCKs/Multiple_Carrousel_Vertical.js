class Multiple_Carrousel_Vertical {
    constructor(Params) {

      //Estructura
      //{"Color": "#a9c2d5","Title": "", "Number_grids": 4, "height": "500"}
  
      this.Title_ = Params.Title;
    
      this.Color_ = Params.Color;
 
      this.Number_grids_ = Params.Number_grids;
      this.Direction = "Up";
    
      this.height_ = Params.height
      

      //CallBack to signed css properties with name of the class
      this.CreateElement_ = GALSAN_CreateBlock.CreateElementSigned;
      this.add_CSS_Class = GALSAN_CreateBlock.add_CSS_Class_SIGNED;
  
  
      this.ViewConstructor();
    }
  
    getClassName() {
      return this.constructor.name;
    }
  
    AddItemCarrousel(Params) {

        //Estructura
      //{"Main_Image":[{"Id": "Photo1", "Img": "/assets/studio/Photo2.jpg"}],"Time":"18s", "Id": "1"}
  
      this.Carrousel_items_ = [];

      var ClassName = this.getClassName();


      var Container_contentID = document.getElementById("Container_contentID");
   
 

     var Div_absolute_grid = this.CreateElement_(
        "div",
        "Div_absolute_grid"
  
      );
  
      Container_contentID.appendChild(Div_absolute_grid);



      for (let index = 0; index < Params.Main_Image.length; index++) {
  
        var Container_image = this.CreateElement_(
          "div",
          "Container_image"
    
        );
    
        Div_absolute_grid.appendChild(Container_image);

        GALSAN_CreateBlock.AttachID(Container_image, "Container_imageID" + Params.Main_Image[index].Id);

      var Main_Image = this.CreateElement_(
        "img",
        "Main_Image",
        Params.Main_Image[index].Img
  
      );
  
      Container_image.appendChild(Main_Image);


      this.Carrousel_items_.push("Container_imageID" + Params.Main_Image[index].Id);


   

    }

    for (let index = 0; index < this.Carrousel_items_.length; index++) {
     
      var Element = document.getElementById(this.Carrousel_items_[index]);

      const clonedElement = Element.cloneNode(true);
      Div_absolute_grid.appendChild(clonedElement);
      
    }


                    
    this.add_CSS_Class(
      `.Div_absolute_grid`,
      `
  height: calc(${this.height_}px* ${Div_absolute_grid.children.length});
 
        `
    );

    switch (this.Direction) {
      case "Up":

      this.add_CSS_Class(
        `.ScrollUP${Params.Id}`,
        `
    animation: slider ${Params.Time}  linear infinite;
    animation-delay: 10s;
    -webkit-animation: slider ${Params.Time}  linear infinite;
    -moz-animation: slider ${Params.Time}  linear infinite;
    -o-animation: slider ${Params.Time}  linear infinite;
    -ms-animation: slider ${Params.Time}  linear infinite;
          `
      );

      this.add_CSS_Class(
        `@-webkit-keyframes slider`,
        `
	0% { transform: translateY(0); }
	100% { transform: translateY(calc(-${this.height_}px * ${this.Carrousel_items_.length}))}
    
          `
      );
  
      this.add_CSS_Class(
        `@keyframes slider`,
        `
	0% { transform: translateY(0); }
	100% { transform: translateY(calc(-${this.height_}px * ${this.Carrousel_items_.length}))}
          `
      );

      Div_absolute_grid.classList.add(ClassName + 'ScrollUP' + Params.Id); 

      this.Direction = "Down"
        
        break;

      case "Down":


  Div_absolute_grid.style.bottom = "50%";

      this.add_CSS_Class(
        `.ScrollDOWN${Params.Id}`,
        `
         
                      animation: slider${Params.Id} ${Params.Time}  linear infinite;
    animation-delay: 10s;
    -webkit-animation: slider2 ${Params.Time}  linear infinite;
    -moz-animation: slider2 ${Params.Time}  linear infinite;
    -o-animation: slider2 ${Params.Time}  linear infinite;
    -ms-animation: slider2 ${Params.Time} linear infinite;

       
          `
      );

      this.add_CSS_Class(
        `@-webkit-keyframes slider2`,
        `
	0% { transform: translateY(0); }
		100% { transform: translateY(calc(${this.height_}px * ${this.Carrousel_items_.length}))}
    
          `
      );
  
      this.add_CSS_Class(
        `@keyframes slider2`,
        `
	0% { transform: translateY(0); }
	100% { transform: translateY(calc(${this.height_}px * ${this.Carrousel_items_.length}))}
          `
      );

     
      Div_absolute_grid.classList.add(ClassName + 'ScrollDOWN' + Params.Id); 

      this.Direction = "Up"
        
        break;
    
      default:
        break;
    }


  
    }

 
  
    ViewConstructor() {
  
  
      this.add_CSS_Class(
        `.Container`,
        `
      padding-top: 0px !important;
    width: 100%;
    position: relative;
      height: 75vh;
    -webkit-align-content: center;
    align-content: center;
         flex-direction: row;
    align-items: center;
       background-color: ${this.Color_};
  
          `
      );
  
        

      this.add_CSS_Class(
        `.Container_content`,
        `
 display: grid;
 grid-template-columns: repeat(${this.Number_grids_[0]}, 1fr);

    column-gap: 0.5vw;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;

          `
      );



        
      this.add_CSS_Class(
        `.Container_text`,
        `
    display: flex;
    margin: 0 auto;
    position: relative;
    width: 50%;
    /* height: 100%; */
    z-index: 99999999;
    z-index: 99;
    justify-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    align-content: center;
    flex-wrap: wrap;
      
          `
      );

        
      this.add_CSS_Class(
        `.Container_fix`,
        `
         display: flex;
    flex-direction: column;
    justify-content: center;
          `
      );
  
  
      this.add_CSS_Class(
        `.Title`,
        `
        text-align: center;
         color: #957C3D;
    animation: ZoomIn 6s both;
    animation-delay: 10s;
    -webkit-animation: ZoomIn 6s both;
    -moz-animation: ZoomIn 6s both;
    -o-animation: ZoomIn 6s both;
    -ms-animation: ZoomIn 6s both;
    font-size: 3vw;
  
          `
      );




            
      this.add_CSS_Class(
        `.Div_absolute_grid`,
        `
             position:relative;

    flex-direction: column;
   
          `
      );
      
  


  

      this.add_CSS_Class(
        `@-webkit-keyframes ZoomIn`,
        `
    0% {
    opacity: 0;
    -webkit-transform: scale3d(.3, .3, .3);
    transform: scale3d(.3, .3, .3);
    }
    50% {
    opacity: 1;
    }
    
        `
      );
  
      this.add_CSS_Class(
        `@keyframes ZoomIn`,
        `
    0% {
    opacity: 0;
    -webkit-transform: scale3d(.3, .3, .3);
    transform: scale3d(.3, .3, .3);
    }
    50% {
    opacity: 1;
    }
  
      `
      );
  
  

      this.add_CSS_Class(
        `.Container_image:nth-child(odd) .Main_Image`,
        `
      animation: zoooom 5s infinite;
    animation-delay: 0s;
    -webkit-animation: zoooom 5s infinite;
    -moz-animation: zoooom 5s infinite;
    -o-animation: zoooom 5s infinite;
    -ms-animation: zoooom 5s infinite;
    
          `
      );



        
      this.add_CSS_Class(
        `@keyframes zoooom`,
        `

    50% {
      -webkit-transform: scale(1.1);
    transform: scale(1.1);
    }
  
      `
      );
  





      this.add_CSS_Class(
        `.Main_Image`,
        `
display: flex;
    min-height: 50%;
    max-height: 80%;
    max-width: 80%;
    margin: 6% auto;
   
    border-radius: 25px;
          `
      );
      this.add_CSS_Class(
        `.Container_image`,
        `
    height: 500px;
    width: 100%;
    position: relative;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;

    
          `
      );







  
          ///////////////////////////////////////////////////////////////
          //////////////////middle///////////////////////////////////////
          ///////////////////////////////////////////////////////////////
  
    
          this.add_CSS_Class(
            `.Container`,
            `
        

        
              `, GALSAN_CreateBlock.Screen_Middle
          );


      this.add_CSS_Class(
        `.Container_content`,
        `

 grid-template-columns: repeat(${this.Number_grids_[1]}, 1fr);

          `, GALSAN_CreateBlock.Screen_Middle
      );

    this.add_CSS_Class(
      `.Title`,
      `
  
          font-size: 5vw;
  
  
        `, GALSAN_CreateBlock.Screen_Middle
    );
  


    this.add_CSS_Class(
      `.Container_text`,
      `
      width: 45%;

  
        `, GALSAN_CreateBlock.Screen_Middle
    );


    this.add_CSS_Class(
      `.Container_image`,
      `

        `, GALSAN_CreateBlock.Screen_Middle
    );
    
    this.add_CSS_Class(
      `.Main_Image`,
      `




        `, GALSAN_CreateBlock.Screen_Middle
    );

            ///////////////////////////////////////////////////////////////
          //////////////////mobile///////////////////////////////////////
          ///////////////////////////////////////////////////////////////
  
        this.add_CSS_Class(
          `.Container_content`,
          `
grid-template-columns: repeat(${this.Number_grids_[2]}, 1fr);
            `, GALSAN_CreateBlock.Screen_Mobile
        );
      
        this.add_CSS_Class(
          `.Container_text`,
          `
        width: 70%;
        height: 100%;
        margin: 0 15%;
        text-align: justify;
        
            `, GALSAN_CreateBlock.Screen_Mobile
        );
      
        this.add_CSS_Class(
          `.Container_image`,
          `

        
            `, GALSAN_CreateBlock.Screen_Mobile
        );

        this.add_CSS_Class(
          `.Main_Image`,
          `


        
            `, GALSAN_CreateBlock.Screen_Mobile
        );

        this.add_CSS_Class(
          `.Container`,
          `

            padding-bottom: 0px !important;
      
      
            `, GALSAN_CreateBlock.Screen_Mobile
        );

        this.add_CSS_Class(
          `.Title`,
          `
      
              font-size: 7vw;
      
      
            `, GALSAN_CreateBlock.Screen_Mobile
        );
      

        
  
        
      var Container_principal = this.CreateElement_(
        "div",
        `Container`,
        null,
        GALSAN_CreateBlock.Site_Column_Center
      );
  
      /////Container_principal.alt = this.alt_
  
      GALSAN_CreateBlock.AttachID(Container_principal, "Container_Portada_Carrousel_ID");


      var Container_text = this.CreateElement_(
        "div",
        `Container_text`
      );
  
      Container_principal.appendChild(Container_text);
      GALSAN_CreateBlock.AttachID(Container_text, "Container_textID");
  


      var Container_fix = this.CreateElement_(
        "div",
        `Container_fix`
      );
  
      Container_text.appendChild(Container_fix);

      var Title = this.CreateElement_(
        "h1",
        `Title`,
        this.Title_
  
  
      );
  
      Container_fix.appendChild(Title);
  
  
      var Subtitle = this.CreateElement_(
        "h3",
        `Subtitle`,
        this.Subtitle_
  
  
      );
  
      Container_fix.appendChild(Subtitle);
  
  
  
      var Container_content = this.CreateElement_(
        "div",
        `Container_content`
      );
  
      Container_principal.appendChild(Container_content);

      GALSAN_CreateBlock.AttachID(Container_content, "Container_contentID");




  
    }
  }
  
  
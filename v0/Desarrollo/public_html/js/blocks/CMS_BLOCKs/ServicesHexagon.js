class ServicesHexagon {
    constructor(Params) {
  
    //Estructura
    //{"Title": "", "Number_items": 5}


      this.Title_ = Params.Title;
      this.Hexagon_items_ = [];
      this.Number_items_ = Params.Number_items;
      //CallBack to signed css properties with name of the class
      this.CreateElement_ = GALSAN_CreateBlock.CreateElementSigned;
      this.add_CSS_Class = GALSAN_CreateBlock.add_CSS_Class_SIGNED;
  
  
      this.ViewConstructor();

      
    }
  
    getClassName() {
      return this.constructor.name;
    }
  

    Add_Hexagon(Params) {

      //Estructura
    // {"Photo": "", "Text": "", "Title_Service": "", "Text_Service": [{"Serv": "", "Price": ""}, {"Serv": "", "Price": ""}]}

      var Json_Hexagon_item = {};

        var Main_Grid_ID = document.getElementById("Main_Grid_ID");

        var grid_item = this.CreateElement_(
            "div",
            `grid_item`
          );
      
          Main_Grid_ID.appendChild(grid_item);

          GALSAN_CreateBlock.AttachID(grid_item, "Grid_item" + this.Hexagon_items_.length);

          var Image = this.CreateElement_(
            "img",
            `Image`,
            Params.Photo
          );
      
          grid_item.appendChild(Image);

          var Container_text = this.CreateElement_(
            "div",
            `Container_text`
          );
      
          grid_item.appendChild(Container_text);


          var Text = this.CreateElement_(
            "h2",
            `Text`,
            Params.Text
          );
      
          Container_text.appendChild(Text);


          var Back_Container = this.CreateElement_(
            "div",
            `Back_Container`
          );
      
          Container_text.appendChild(Back_Container);


          var Container_Description_ID = document.getElementById("Container_Description_ID");

          var Service = this.CreateElement_(
            "div",
            `Service`
          );
      
          Container_Description_ID.appendChild(Service);

          GALSAN_CreateBlock.AttachID(Service, "Service" + this.Hexagon_items_.length);

          var Title_Service = this.CreateElement_(
            "h4",
            `Title_Service`,
            Params.Title_Service
          );
      
          Service.appendChild(Title_Service);

          var Container_Text_Service = this.CreateElement_(
            "div",
            `Container_Text_Service`
          );
      
          Service.appendChild(Container_Text_Service);

          for (let index = 0; index < Params.Text_Service.length; index++) {
     
            var Container_flex = this.CreateElement_(
              "div",
              `Container_flex`
            );
        
            Container_Text_Service.appendChild(Container_flex);

          var Text_Service = this.CreateElement_(
            "div",
            `Text_Service`,
            Params.Text_Service[index].Serv + ':'
          );
      
          Container_flex.appendChild(Text_Service);

          var Text_Service = this.CreateElement_(
            "div",
            `Text_Service`,
            Params.Text_Service[index].Price
          );
      
          Container_flex.appendChild(Text_Service);
        }

          Json_Hexagon_item.id_Grid = "Grid_item" + this.Hexagon_items_.length;
          Json_Hexagon_item.id_Service = "Service" + this.Hexagon_items_.length;


          this.Hexagon_items_.push(Json_Hexagon_item);

          if(this.Hexagon_items_.length == this.Number_items_) {this.Start_Carrousel();}
     }

     addActive(Element) {
      var Grid = document.getElementById(Element.id_Grid);
        var Service = document.getElementById(Element.id_Service);
        
        Grid.classList.add(`${ServicesHexagon.o_Hexagon.getClassName()}active`);
        Service.classList.add(`${ServicesHexagon.o_Hexagon.getClassName()}active`);

     }

     removeActive (Element) {

      var Grid = document.getElementById(Element.id_Grid);
      var Service = document.getElementById(Element.id_Service);
      
     Grid.classList.remove(`${ServicesHexagon.o_Hexagon.getClassName()}active`);
      Service.classList.remove(`${ServicesHexagon.o_Hexagon.getClassName()}active`);

     }

    Start_Carrousel() {

      ServicesHexagon.o_Hexagon.addActive(ServicesHexagon.o_Hexagon.Hexagon_items_[0]);
      setInterval(function () {
        for (let i = 0; i < ServicesHexagon.o_Hexagon.Hexagon_items_.length; i++) {
          if(i +1 == ServicesHexagon.o_Hexagon.Hexagon_items_.length) {
         
           ServicesHexagon.o_Hexagon.addActive(ServicesHexagon.o_Hexagon.Hexagon_items_[0]);
           
           ServicesHexagon.o_Hexagon.removeActive( ServicesHexagon.o_Hexagon.Hexagon_items_[i]);
            break;
           
          } 
          var Grid = document.getElementById(ServicesHexagon.o_Hexagon.Hexagon_items_[i].id_Service);
          if(Grid.classList.contains(`${ServicesHexagon.o_Hexagon.getClassName()}active`)) {
           ServicesHexagon.o_Hexagon.removeActive( ServicesHexagon.o_Hexagon.Hexagon_items_[i]);
          
            ServicesHexagon.o_Hexagon.addActive(ServicesHexagon.o_Hexagon.Hexagon_items_[i + 1]);
            break;
          
          }

        } 
    }, 6000);


    }

  
  
    ViewConstructor() {
  

      
      this.add_CSS_Class(
        `.Container_Principal`,
        `
      
display: grid;
    grid-template-columns: 60% 40%;
    width: 100%;
    align-items: center;
    justify-content: center;
    justify-items: center;
    align-content: center;
  
          `
      );
      this.add_CSS_Class(
        `.Main_Grid`,
        `
      

	width: 100%;
  margin: 5% 0;
  
          `
      );

      this.add_CSS_Class(
        `.Container_flex`,
        `
      

    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    margin: 1vw 0;
    margin-left: 0.5vw;
    justify-content: space-between;
          `
      );
      
      this.add_CSS_Class(
        `.Container_Description`,
        `
    display: grid;
    width: 95%;
    height: auto;
    margin: auto auto;
    align-content: center;
        justify-content: center;
       
    position: relative;
          `
      );

  
  
      this.add_CSS_Class(
        `.grid_item`,
        `
    position: relative;
    margin-left: 5px;
    width: calc(33.33% - 10px);
    float: right;
    transition: all 0.5s;
    overflow: hidden;
    -webkit-clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
    clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
    -webkit-shape-outside: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
  
          `
      ); 

      this.add_CSS_Class(
        `.grid_item::before`,
        `
     display: block;
    padding-top: 100%;
    content: '';

          `
      );   

      this.add_CSS_Class(
        `.grid_item:nth-child(1)`,
        `
     margin-top: 0;
    margin-right: calc(33.33% / 2);
    top: 2vw;
          `
      );  

      this.add_CSS_Class(
        `.grid_item:nth-child(2)`,
        `
    margin-left: calc(33.33% / 2);
    top: 2vw;
          `
      ); 

      this.add_CSS_Class(
        `.grid_item:nth-child(3n)`,
        `
    top: -2vw;
   left: -0.2vw;
          `
      ); 
      
      this.add_CSS_Class(
        `.grid_item:nth-child(4n)`,
        `
     top: -2vw;
    left: -0.2vw;
          `
      ); 



      this.add_CSS_Class(
        `.grid_item:nth-child(5n)`,
        `
     top: -2vw;
    left: -0.2vw;
          `
      ); 


    
  
      
      this.add_CSS_Class(
        `.Image`,
        `
position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    right: 0;
    bottom: 0;
    left: 0;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
	
          `
      ); 
      

      this.add_CSS_Class(
        `.Image::before`,
        `
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		content: '';
		opacity: 0;
		transition: opacity 0.5s;
        	background: rgba(purple, 0.25);
  
          `
      ); 
      
      this.add_CSS_Class(
        `.Image::after`,
        `
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		content: '';
		opacity: 0;
		transition: opacity 0.5s;
        		background: linear-gradient(to top, transparent, rgba(black, 0.5), transparent);
  
          `
      ); 
      
      
      this.add_CSS_Class(
        `.Container_text`,
        `
	    top: 50%;
    left: 50%;
    color: white;
    position: absolute;
    width: 100%;
    opacity: 0;
    text-align: center;
    will-change: transform;
    backface-visibility: hidden;
    transform: translate(-50%, -50%) scale(0.9);
    transition: all 0.5s;
    -webkit-shape-outside: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
    shape-outside: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
  
          `
      );


      this.add_CSS_Class(
        `.Back_Container`,
        `
   margin: 1em 0 0;
      font-family: 'ATC Overlook';
      letter-spacing: 0.1em;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 11px;
      line-height: 1.5;
      color: turquoise;
  
          `
      );


      this.add_CSS_Class(
        `.Text`,
        `

      font-size: 2.5vw;
      text-shadow: 2px -2px #7b118d;
 
  
          `
      );
   


      this.add_CSS_Class(
        `.grid_item:hover .Image::before`,
        `
      opacity: 1;
          `
      ); 

      this.add_CSS_Class(
        `.grid_item:hover .Image::after`,
        `
      opacity: 1;
          `
      ); 

      this.add_CSS_Class(
        `.Title_Service`,
        `
    font-style: italic;
      font-family: fantasy;
      font-size: 2.5vw;
      font-variant-caps: petite-caps;
      font-weight: 900;
          `
      ); 

      
      this.add_CSS_Class(
        `.grid_item.active .Container_text`,
        `
  
      -webkit-animation-name: pulse;
  animation-name: pulse;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
      

          `
      );

      this.add_CSS_Class(
        `@-webkit-keyframes pulse`,
        `
  0% {
  -webkit-transform:  translate(-50%, -50%) scale3d(1, 1, 1);
  transform:  translate(-50%, -50%) scale3d(1, 1, 1);
  opacity:1
  }
  50% {
  -webkit-transform:  translate(-50%, -50%) scale3d(1.05, 1.05, 1.05);
  transform:  translate(-50%, -50%) scale3d(1.05, 1.05, 1.05);
  }
  100% {
  -webkit-transform:  translate(-50%, -50%) scale3d(1, 1, 1);
  transform:  translate(-50%, -50%) scale3d(1, 1, 1);
    opacity:1
  }
  

          `
      );
  
      this.add_CSS_Class(
        `@keyframes pulse`,
        `
  0% {
  -webkit-transform:  translate(-50%, -50%) scale3d(1, 1, 1);
  transform:  translate(-50%, -50%) scale3d(1, 1, 1);
  opacity:1
  }
  50% {
  -webkit-transform:  translate(-50%, -50%) scale3d(1.05, 1.05, 1.05);
  transform:  translate(-50%, -50%) scale3d(1.05, 1.05, 1.05);
  }
  100% {
  -webkit-transform:  translate(-50%, -50%) scale3d(1, 1, 1);
  transform:  translate(-50%, -50%) scale3d(1, 1, 1);
    opacity:1
  }
    `
      );

      this.add_CSS_Class(
        `.Text_Service`,
        `
  
      font-family: fantasy;
      font-size: 1.5vw;
      

          `
      ); 

      this.add_CSS_Class(
        `.Service`,
        `
opacity: 0;
    visibility: hidden;
    grid-area: 1 / 1;
    width: 100%;
    height: fit-content;
    align-content: center;
    justify-self: center;
    align-self: center;


          `
      ); 

      this.add_CSS_Class(
        `.Service:nth-child(1).active`,
        `
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipInXDown;
  animation-name: flipInXDown;
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;

          `
      ); 
      

      this.add_CSS_Class(
        `.Service:nth-child(2).active`,
        `
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipInX;
  animation-name: flipInX;
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
          `
      ); 
      


      this.add_CSS_Class(
        `.Service:nth-child(3).active`,
        `
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipInY;
  animation-name: flipInY;
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
          `
      ); 
      



      this.add_CSS_Class(
        `.Service:nth-child(4).active`,
        `
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipInXDown;
  animation-name: flipInXDown;
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;

          `
      ); 
      


      this.add_CSS_Class(
        `.Service:nth-child(5).active`,
        `

  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipInYR;
  animation-name: flipInYR;
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;

          `
      ); 
      
      this.add_CSS_Class(
        `@-webkit-keyframes rotateIn`,
        `
0% {
  -webkit-transform-origin: center;
  transform-origin: center;
  -webkit-transform: rotate3d(0, 0, 1, -200deg);
  transform: rotate3d(0, 0, 1, -200deg);
  opacity: 0;
  visibility: hidden;

  }
  100% {
  -webkit-transform-origin: center;
  transform-origin: center;
  -webkit-transform: none;
  transform: none;
  opacity: 1;
  visibility: visible;
  }
  }
  @keyframes rotateIn {
  0% {
  -webkit-transform-origin: center;
  transform-origin: center;
  -webkit-transform: rotate3d(0, 0, 1, -200deg);
  transform: rotate3d(0, 0, 1, -200deg);
  opacity: 0;
  visibility: hidden;
  }
  100% {
  -webkit-transform-origin: center;
  transform-origin: center;
  -webkit-transform: none;
  transform: none;
  opacity: 1;
  visibility: visible;
  }
          `
      );
  
      this.add_CSS_Class(
        `@keyframes rotateIn`,
        `
0% {
  -webkit-transform-origin: center;
  transform-origin: center;
  -webkit-transform: rotate3d(0, 0, 1, -200deg);
  transform: rotate3d(0, 0, 1, -200deg);
  opacity: 0;
  visibility: hidden;

  }
  100% {
  -webkit-transform-origin: center;
  transform-origin: center;
  -webkit-transform: none;
  transform: none;
  opacity: 1;
  visibility: visible;
  }
  }
  @keyframes rotateIn {
  0% {
  -webkit-transform-origin: center;
  transform-origin: center;
  -webkit-transform: rotate3d(0, 0, 1, -200deg);
  transform: rotate3d(0, 0, 1, -200deg);
  opacity: 0;
  visibility: hidden;
  }
  100% {
  -webkit-transform-origin: center;
  transform-origin: center;
  -webkit-transform: none;
  transform: none;
  opacity: 1;
  visibility: visible;
  }
    `
      );


      this.add_CSS_Class(
        `@-webkit-keyframes flipInX`,
        `
     0% {
  -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
  transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
  -webkit-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
  opacity: 0;
  visibility: hidden;
  }
  40% {
  -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 0deg);
  transform: perspective(400px) rotate3d(1, 0, 0, 0deg);
  -webkit-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
  }
  60% {
  -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 0deg);
  transform: perspective(400px) rotate3d(1, 0, 0, 0deg);
  opacity: 1;
   visibility: visible;
  }
  80% {
  -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 0deg);
  transform: perspective(400px) rotate3d(1, 0, 0, 0deg);
  }
  100% {
  -webkit-transform: perspective(400px);
  transform: perspective(400px);
    opacity: 1;
  visibility: visible;
  }
          `
      );
  
      this.add_CSS_Class(
        `@keyframes flipInX`,
        `
    0% {
  -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
  transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
  -webkit-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
  opacity: 0;
  visibility: hidden;
  }
  40% {
  -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 0deg);
  transform: perspective(400px) rotate3d(1, 0, 0, 0deg);
  -webkit-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
  }
  60% {
  -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 0deg);
  transform: perspective(400px) rotate3d(1, 0, 0, 0deg);
  opacity: 1;
   visibility: visible;
  }
  80% {
  -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 0deg);
  transform: perspective(400px) rotate3d(1, 0, 0, 0deg);
  }
  100% {
  -webkit-transform: perspective(400px);
  transform: perspective(400px);
    opacity: 1;
  visibility: visible;
  }
    `
      );


      this.add_CSS_Class(
        `@-webkit-keyframes flipInXDown`,
        `
    0% {
  -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -90deg);
  transform: perspective(400px) rotate3d(1, 0, 0, -90deg);
  -webkit-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
  opacity: 0;
  visibility: hidden;
  }
  40% {
  -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 0deg);
  transform: perspective(400px) rotate3d(1, 0, 0, 0deg);
  -webkit-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
  }
  60% {
  -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 0deg);
  transform: perspective(400px) rotate3d(1, 0, 0, 0deg);
  opacity: 1;
   visibility: visible;
  }
  80% {
  -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 0deg);
  transform: perspective(400px) rotate3d(1, 0, 0, 0deg);
  }
  100% {
  -webkit-transform: perspective(400px);
  transform: perspective(400px);
    opacity: 1;
  visibility: visible;
  }
          `
      );
  
      this.add_CSS_Class(
        `@keyframes flipInXDown`,
        `
    0% {
  -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -90deg);
  transform: perspective(400px) rotate3d(1, 0, 0, -90deg);
  -webkit-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
  opacity: 0;
  visibility: hidden;
  }
  40% {
  -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 0deg);
  transform: perspective(400px) rotate3d(1, 0, 0, 0deg);
  -webkit-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
  }
  60% {
  -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 0deg);
  transform: perspective(400px) rotate3d(1, 0, 0, 0deg);
  opacity: 1;
   visibility: visible;
  }
  80% {
  -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 0deg);
  transform: perspective(400px) rotate3d(1, 0, 0, 0deg);
  }
  100% {
  -webkit-transform: perspective(400px);
  transform: perspective(400px);
    opacity: 1;
  visibility: visible;
  }
    `
      );

      this.add_CSS_Class(
        `@-webkit-keyframes flipInY`,
        `
 0% {
  -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
  transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
  -webkit-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
  opacity: 0;
     visibility: hidden;
  }
  40% {
  -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 0deg);
  transform: perspective(400px) rotate3d(0, 1, 0, 0deg);
  -webkit-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
  }
  60% {
  -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 0deg);
  transform: perspective(400px) rotate3d(0, 1, 0, 0deg);
  opacity: 1;
     visibility: visible;
  }
  80% {
  -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 0deg);
  transform: perspective(400px) rotate3d(0, 1, 0, 0deg);
  }
  100% {
  -webkit-transform: perspective(400px);
  transform: perspective(400px);
    opacity: 1;
  visibility: visible;
  }
          `
      );
  
      this.add_CSS_Class(
        `@keyframes flipInY`,
        `
  0% {
  -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
  transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
  -webkit-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
  opacity: 0;
     visibility: hidden;
  }
  40% {
  -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 0deg);
  transform: perspective(400px) rotate3d(0, 1, 0, 0deg);
  -webkit-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
  }
  60% {
  -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 0deg);
  transform: perspective(400px) rotate3d(0, 1, 0, 0deg);
  opacity: 1;
     visibility: visible;
  }
  80% {
  -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 0deg);
  transform: perspective(400px) rotate3d(0, 1, 0, 0deg);
  }
  100% {
  -webkit-transform: perspective(400px);
  transform: perspective(400px);
    opacity: 1;
  visibility: visible;
  }
    `
      );

      this.add_CSS_Class(
        `@-webkit-keyframes flipInYR`,
        `
 0% {
  -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -90deg);
  transform: perspective(400px) rotate3d(0, 1, 0, -90deg);
  -webkit-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
  opacity: 0;
     visibility: hidden;
  }
  40% {
  -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 0deg);
  transform: perspective(400px) rotate3d(0, 1, 0, 0deg);
  -webkit-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
  }
  60% {
  -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 0deg);
  transform: perspective(400px) rotate3d(0, 1, 0, 0deg);
  opacity: 1;
     visibility: visible;
  }
  80% {
  -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 0deg);
  transform: perspective(400px) rotate3d(0, 1, 0, 0deg);
  }
  100% {
  -webkit-transform: perspective(400px);
  transform: perspective(400px);
    opacity: 1;
  visibility: visible;
  }
          `
      );
  
      this.add_CSS_Class(
        `@keyframes flipInYR`,
        `
  0% {
  -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -90deg);
  transform: perspective(400px) rotate3d(0, 1, 0, -90deg);
  -webkit-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
  opacity: 0;
     visibility: hidden;
  }
  40% {
  -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 0deg);
  transform: perspective(400px) rotate3d(0, 1, 0, 0deg);
  -webkit-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
  }
  60% {
  -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 0deg);
  transform: perspective(400px) rotate3d(0, 1, 0, 0deg);
  opacity: 1;
     visibility: visible;
  }
  80% {
  -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 0deg);
  transform: perspective(400px) rotate3d(0, 1, 0, 0deg);
  }
  100% {
  -webkit-transform: perspective(400px);
  transform: perspective(400px);
    opacity: 1;
  visibility: visible;
  }
    `
      );

          ///////////////////////////////////////////////////////////////
          //////////////////middle///////////////////////////////////////
          ///////////////////////////////////////////////////////////////
  
  
/*     this.add_CSS_Class(
      `.Nav`,
      `
  
  
  
        `, GALSAN_CreateBlock.Screen_Middle
    ); */
  

            ///////////////////////////////////////////////////////////////
          //////////////////mobile///////////////////////////////////////
          ///////////////////////////////////////////////////////////////

          this.add_CSS_Class(
            `.Container_Principal`,
            `
          
        grid-template-columns: 100%;

      
              `, GALSAN_CreateBlock.Screen_Mobile
          );

        this.add_CSS_Class(
          `.Title`,
          `
  
      font-size: 10vw;
            `, GALSAN_CreateBlock.Screen_Mobile
        );

        this.add_CSS_Class(
          `.Main_Grid`,
          `
        
      width: 95%;
    margin: 5% 0px;
    margin-right: 5%;
    order: 2;
    
            `, GALSAN_CreateBlock.Screen_Mobile
        );

        this.add_CSS_Class(
          `.Title_Service`,
          `

        font-size: 4.5vw;

            `, GALSAN_CreateBlock.Screen_Mobile
        ); 


        this.add_CSS_Class(
          `.Text_Service`,
          `

        font-size: 3.5vw;

            `, GALSAN_CreateBlock.Screen_Mobile
        ); 

        this.add_CSS_Class(
          `.Container_Description`,
          `
  width: 100%;
     order: 1;
            `, GALSAN_CreateBlock.Screen_Mobile
        );

        this.add_CSS_Class(
          `.Text`,
          `
  font-size: 4vw;
    text-shadow: 2px -2px #7b118d;
            `, GALSAN_CreateBlock.Screen_Mobile
        );
        
  
  
         var Container_principal = this.CreateElement_(
          "div",
          `Container_Principal`,
          null,
          GALSAN_CreateBlock.Site_Column_Center
        );
         

      var Main_Grid = this.CreateElement_(
        "div",
        `Main_Grid`,
        null,
        GALSAN_CreateBlock.Site_Column_Center
      );
  
      Container_principal.appendChild(Main_Grid);
      
      GALSAN_CreateBlock.AttachID(Main_Grid, "Main_Grid_ID");



      var Container_Description = this.CreateElement_(
        "div",
        `Container_Description`
      );
  
      Container_principal.appendChild(Container_Description);

      GALSAN_CreateBlock.AttachID(Container_Description, "Container_Description_ID");
 


    }
  }
  

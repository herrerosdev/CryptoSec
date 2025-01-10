
class Portada_Collage {
    constructor(Params) {
  
      //{"CollagePhotos": ["", "", "", "", "", ""],"Title": "", "Subtitle": ""}
      this.Title_ = Params.Title;
      this.Subtitle_ = Params.Subtitle;
      this.CollagePhotos_ = Params.CollagePhotos;

   
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
        `.Main_Container`,
        `
      
    position: relative;
    overflow: hidden;
    height: 50vw;
    background: #fff;
  
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
  
          `
      );
  
  
  
      this.add_CSS_Class(
        `.Container`,
        `
      
display: flex;
	align-items: flex-end;
	position: absolute;
	top: -20vw;
	left: -8vw;
	transform: rotateZ(45deg);
	height: 100vw;
	width: 107vw;
  
          `
      );
  
      
      this.add_CSS_Class(
        `.Column`,
        `
overflow: hidden;
	position: relative;
  
          `
      );
      
      this.add_CSS_Class(
        `.Column:nth-of-type(1)`,
        `
border-right: 8px solid white;
    width: 25%;
    height: 66vw;
  
          `
      );

      this.add_CSS_Class(
        `.Column:nth-of-type(1):hover`,
        `
	opacity: 0.75;
	cursor: pointer;
  
          `
      );


      this.add_CSS_Class(
        `.Column:nth-of-type(1):before`,
        `
    position: absolute;
    top: -5.6vw;
    left: 3.1vw;
    background-repeat: no-repeat;
    background-size: cover;
    transform: rotateZ(-45deg) scaleX(-1);
    content: "";
    width: 47vw;
    height: 100%;
	background-image: url(${this.CollagePhotos_[4]});

  
          `
      );

      this.add_CSS_Class(
        `.Column:nth-of-type(2)`,
        `
    display: flex;
    flex-direction: column-reverse;
    width: 75%;
    height: 109.1vw;
  
          `
      );


      this.add_CSS_Class(
        `.Column:nth-of-type(2) .Row`,
        `
border-top: 8px solid #fff;
  
          `
      );

      this.add_CSS_Class(
        `.Column:nth-of-type(2) .Row:nth-of-type(1)`,
        `
position: relative;
    overflow: hidden;
    height: 48vw;

  
          `
      );


      this.add_CSS_Class(
        `.Column:nth-of-type(2) .Row:nth-of-type(1):hover`,
        `
	opacity: 0.75;
	cursor: pointer;
  
          `
      );


      this.add_CSS_Class(
        `.Column:nth-of-type(2) .Row:nth-of-type(1):before`,
        `
    position: absolute;
        top: -7.1vw;
    left: -32.3vw;
    background-repeat: no-repeat;
    background-size: cover;
    transform: rotateZ(-45deg);
    content: "";
    width: 87vw;
    height: 100%;
	background-image: url(${this.CollagePhotos_[1]});

          `
      );

      this.add_CSS_Class(
        `.Column:nth-of-type(2) .Row:nth-of-type(2)`,
        `
    display: flex;
    height: 31vw;
}
          `
      );

      this.add_CSS_Class(
        `.Column:nth-of-type(2) .Row:nth-of-type(3)`,
        `
border-top: none;
          `
      );


      this.add_CSS_Class(
        `.Column:nth-of-type(2) .Row:nth-of-type(3)`,
        `
border-top: none;
          `
      );

      this.add_CSS_Class(
        `.Column:nth-of-type(2) .Row:nth-of-type(2)  div:nth-of-type(1)`,
        `
    overflow: hidden;
    width: 40%;
    
    position: relative;
          `
      );
     

      this.add_CSS_Class(
        `.Column:nth-of-type(2) .Row:nth-of-type(2)  div:nth-of-type(1):before`,
        `
	overflow: hidden;

		background-image: url(${this.CollagePhotos_[0]});
    position: absolute;
  top: -30px;
    left: -2vw;
    width: 50.1vw;
    height: 148%;
    background-repeat: no-repeat;
    background-size: cover;
    transform: rotateZ(-45deg);
    content: "";
}
          `
      );

      this.add_CSS_Class(
        `.Column:nth-of-type(2) .Row:nth-of-type(2)  div:nth-of-type(1):hover`,
        `
	opacity: 0.75;
	cursor: pointer;
          `
      );


      this.add_CSS_Class(
        `.Column:nth-of-type(2) .Row:nth-of-type(2)  div:nth-of-type(2)`,
        `
position: relative;
    width: 60%;
    border-left: 8px solid white;
    overflow: hidden;
          `
      );

      this.add_CSS_Class(
        `.Column:nth-of-type(2) .Row:nth-of-type(2)  div:nth-of-type(2):hover`,
        `
	opacity: 0.75;
	cursor: pointer;
          `
      );

      this.add_CSS_Class(
        `.Column:nth-of-type(2) .Row:nth-of-type(2)  div:nth-of-type(2):before`,
        `
    position: absolute;
      top: -6vw;
    left: -31vw;
    width: 83.1vw;
    height: 148%;
    background-repeat: no-repeat;
    background-size: cover;
    transform: rotateZ(-45deg);
    content: "";
   background-image: url(${this.CollagePhotos_[2]});

          `
      );

      this.add_CSS_Class(
        `.Column:nth-of-type(2) .Row:nth-of-type(3)`,
        `
    position: relative;
    height: 31vw;
    overflow: hidden;
          `
      );

      this.add_CSS_Class(
        `.Column:nth-of-type(2) .Row:nth-of-type(3):before`,
        `
    position: absolute;
    top: 1.5vw;
    left: 13vw;
    width: 72vw;
    height: 45vw;
    background-repeat: no-repeat;
    background-size: cover;
    transform: rotateZ(-45deg) scaleX(-1);
    content: "";
	background-image: url(${this.CollagePhotos_[3]});

          `
      );

      this.add_CSS_Class(
        `.Column:nth-of-type(2) .Row:nth-of-type(3):hover`,
        `
 	opacity: 0.75;
	cursor: pointer;
          `
      );


      this.add_CSS_Class(
        `.Container_text`,
        `
display: flex;
    align-content: center;
    text-align: center;
    justify-content: center;
    margin: 0 auto;
    height: 30%;
    width: 30%;
    background-color: #abafb29e;
    flex-direction: column;
    position: relative;
    border-radius: 30px;
-webkit-backface-visibility: visible;
  backface-visibility: visible;
  -webkit-animation-name: flip;
  animation-name: flip;
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
    -webkit-animation-delay: 2s;
  animation-delay: 2s;
          `
      );

      this.add_CSS_Class(
        `@-webkit-keyframes flip`,
        `
  0% {
  -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
  transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
  -webkit-animation-timing-function: ease-out;
  animation-timing-function: ease-out;
  }
  40% {
  -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
  transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
  -webkit-animation-timing-function: ease-out;
  animation-timing-function: ease-out;
  }
  50% {
  -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
  transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
  -webkit-animation-timing-function: ease-in;
  animation-timing-function: ease-in;
  }
  80% {
  -webkit-transform: perspective(400px) scale3d(.85, .85, .85);
  transform: perspective(400px) scale3d(.85, .85, .85);
  -webkit-animation-timing-function: ease-in;
  animation-timing-function: ease-in;
  }

    70% {
  -webkit-transform: perspective(400px) scale3d(1.2, 1.2, 1.2);
  transform: perspective(400px) scale3d(1.2, 1.2, 1.2);
  -webkit-animation-timing-function: ease-in;
  animation-timing-function: ease-in;
  }
  100% {
  -webkit-transform: perspective(400px);
  transform: perspective(400px);
  -webkit-animation-timing-function: ease-in;
  animation-timing-function: ease-in;
  }
      
          `
      );
  
      this.add_CSS_Class(
        `@keyframes flip`,
        `
 0% {
  -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
  transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
  -webkit-animation-timing-function: ease-out;
  animation-timing-function: ease-out;
  }
  40% {
  -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
  transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
  -webkit-animation-timing-function: ease-out;
  animation-timing-function: ease-out;
  }
  50% {
  -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
  transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
  -webkit-animation-timing-function: ease-in;
  animation-timing-function: ease-in;
  }
  70% {
  -webkit-transform: perspective(400px) scale3d(.85, .85, .85);
  transform: perspective(400px) scale3d(.85, .85, .85);
  -webkit-animation-timing-function: ease-in;
  animation-timing-function: ease-in;
  }
      90% {
  -webkit-transform: perspective(400px) scale3d(1.2, 1.2, 1.2);
  transform: perspective(400px) scale3d(1.2, 1.2, 1.2);
  -webkit-animation-timing-function: ease-in;
  animation-timing-function: ease-in;
  }
  100% {
  -webkit-transform: perspective(400px);
  transform: perspective(400px);
  -webkit-animation-timing-function: ease-in;
  animation-timing-function: ease-in;
  }
          `
      );

      this.add_CSS_Class(
        `.Title`,
        `
    color: #da00ff;
   font-size: 4em;
   text-shadow: 2px 3px #487071;


      
          `
      );


          ///////////////////////////////////////////////////////////////
          //////////////////middle///////////////////////////////////////
          ///////////////////////////////////////////////////////////////
  
  

    this.add_CSS_Class(
      `.Container_text`,
      `

  height: auto;
width: 70%;
border-radius: 10px;
        `, GALSAN_CreateBlock.Screen_Middle
    );

    this.add_CSS_Class(
      `.Title`,
      `
  color: #da00ff;
font-size: 10vw;
margin: 0;
        `, GALSAN_CreateBlock.Screen_Middle
    );




            ///////////////////////////////////////////////////////////////
          //////////////////mobile///////////////////////////////////////
          ///////////////////////////////////////////////////////////////


        this.add_CSS_Class(
          `.Container_text`,
          `
  
      height: auto;
    width: 54%;
    border-radius: 10px;
            `, GALSAN_CreateBlock.Screen_Mobile
        );

        this.add_CSS_Class(
          `.Title`,
          `
      color: #da00ff;
    font-size: 8vw;
    margin: 0;
            `, GALSAN_CreateBlock.Screen_Mobile
        );




    this.add_CSS_Class(
      `.Column:nth-of-type(1)`,
      `
border-right: 4px solid white;


        `, GALSAN_CreateBlock.Screen_Mobile
    );

    this.add_CSS_Class(
      `.Column:nth-of-type(2) .Row`,
      `
border-top: 4px solid #fff;

        `, GALSAN_CreateBlock.Screen_Mobile
    );


    this.add_CSS_Class(
      `.Column:nth-of-type(2) .Row:nth-of-type(2)  div:nth-of-type(2)`,
      `
  border-left: 4px solid white;
        `, GALSAN_CreateBlock.Screen_Mobile
    );
  

  
      var Container_principal = this.CreateElement_(
        "div",
        `Main_Container`,
        null,
        GALSAN_CreateBlock.Site_Column_Center
      );

      
        var Container = this.CreateElement_(
          "div",
          `Container`
        );
    
        Container_principal.appendChild(Container);
    

        var Column = this.CreateElement_(
            "div",
            `Column`
          );
      
          Container.appendChild(Column);

          var Column = this.CreateElement_(
            "div",
            `Column`
          );
      
          Container.appendChild(Column);

          var Row = this.CreateElement_(
            "div",
            `Row`
          );
      
          Column.appendChild(Row);


          var Row = this.CreateElement_(
            "div",
            `Row`
          );
      
          Column.appendChild(Row);

          var sf = this.CreateElement_(
            "div",
            `sf`
          );
      
          Row.appendChild(sf);



          var sf = this.CreateElement_(
            "div",
            `sf`
          );
      
          Row.appendChild(sf);


          var Row = this.CreateElement_(
            "div",
            `Row`
          );
      
          Column.appendChild(Row);


          var Container_text = this.CreateElement_(
            "div",
            `Container_text`
          );
      
          Container_principal.appendChild(Container_text);

          var Title = this.CreateElement_(
            "h1",
            `Title`,
            this.Title_
      
      
          );
      
          Container_text.appendChild(Title);
      

    }
  }
  
  
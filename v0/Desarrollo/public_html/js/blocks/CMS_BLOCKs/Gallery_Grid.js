
class Gallery_Grid {
    constructor(Params) {

      //Estructura Gallery Array Photos
     // {"Photos": ["", "", ""]}
  
      this.Photos_ = Params.Photos
      //CallBack to signed css properties with name of the class
      this.CreateElement_ = GALSAN_CreateBlock.CreateElementSigned;
      this.add_CSS_Class = GALSAN_CreateBlock.add_CSS_Class_SIGNED;
  
  
      this.ViewConstructor();
    }
  
    getClassName() {
      return this.constructor.name;
    }

  
  Expand_Image(ID_Tag) {

    if (window.matchMedia('(max-width: 480px)').matches) {
    
  } else {

    var ClassName = this.getClassName();

    const Container_Image = document.getElementById(ID_Tag);

    const originalImage = Container_Image.firstChild;
    const clonedImage = originalImage.cloneNode(true);
    originalImage.parentNode.appendChild(clonedImage); 

    clonedImage.classList.add(ClassName + 'TransitionImage'); 

    clonedImage.classList.toggle(ClassName + 'active');

    GALSAN_CreateBlock.AttachID(clonedImage, "cloneID");

    const fullscreenID = document.getElementById("fullscreenID");

    fullscreenID.classList.toggle(ClassName + 'active');

    GALSAN_CreateBlock.Attach_Attribute_onClick(fullscreenID, `Gallery_Grid.o_Gallery.Close_Fullscreen(`+ '"' + "cloneID" + '"' + `)`);
        
  }
  }

  Close_Fullscreen(Clone_tag) {

    var ClassName = this.getClassName();
   var Clone_tag = document.getElementById(Clone_tag);
    const fullscreenID = document.getElementById("fullscreenID");
    fullscreenID.classList.toggle(ClassName + 'active');

    Clone_tag.remove();


  };
  
    ViewConstructor() {
  
  
      this.add_CSS_Class(
        `.Main_Container`,
        `
      width: 100%;
      margin-top: 9vh
  
          `
      );
  
      this.add_CSS_Class(
        `.grid_Container`,
        `
      column-count: 4;
    column-fill: balance;
    column-gap: 1.5rem;
    width: 80%;
    margin: 0 auto;
          `
      );
  
      this.add_CSS_Class(
        `.Container_Image`,
        `
margin: 0 1% 1% 0;
    display: inline-block;
    width: 96%;
    border: solid 2px black;
    padding: 2%;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    transition: all .25s ease-in-out;
    height: fit-content;
  
      
          `
      );
  
      this.add_CSS_Class(
        `.Image`,
        `
            width: 100%;
        filter: grayscale(100%);
        border-radius: 5px;
        transition: all .2s linear;
         transition: top 2s ease-out 0.3s, transform 2s ease-out 0.3s;
    -webkit-transition: top 2s ease-out 0.3s, transform 2s ease-out 0.3s;
    -moz-transition: top .2s ease-out 0.3s, transform 2s ease-out 0.3s;
    top: 0;
    position: relative;
  
      
          `
      );
  
      this.add_CSS_Class(
        `.Container_Image .Image:hover`,
        `
      filter: grayscale(0);
          `
      );
  
      this.add_CSS_Class(
        `.fullscreen`,
        `
      		position: fixed;
		z-index: 999;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100vh;
		background: rgb(0 0 0 / 95%);
		visibility: hidden;
		transition:
			background .25s ease-out
          `
      );


      this.add_CSS_Class(
        `.fullscreen.active`,
        `
visibility: visible;
          `
      );




      this.add_CSS_Class(
        `.Image.active`,
        `
    pointer-events: none;
    position: fixed;
    transform-origin: left top;
    top: 50% !important;
    left: 50%;
    z-index: 9999;
    width: auto;
    max-height: 70%;
    max-width: 80%;
    transform: translate(-50%, -50%);
    filter: grayscale(0);
          `
      );

      this.add_CSS_Class(
        `.Image.TransitionImage`,
        `
   
    top: -50%;
     
          `
      );

  

      
          ///////////////////////////////////////////////////////////////
          //////////////////middle///////////////////////////////////////
          ///////////////////////////////////////////////////////////////
  
          this.add_CSS_Class(
            `.Main_Container`,
            `
          margin-top: 1vh
      
              `, GALSAN_CreateBlock.Screen_Middle
          );
      
          this.add_CSS_Class(
            `.grid_Container`,
            `
          column-count: 3;
        width: 90%;
            column-gap: 1rem;
              `, GALSAN_CreateBlock.Screen_Middle
          );

        
      
        ///////////////////////////////////////////////////////////////
        //////////////////mobile///////////////////////////////////////
        ///////////////////////////////////////////////////////////////


      
          this.add_CSS_Class(
            `.grid_Container`,
            `
          column-count: 1;
        width: 95%;
          column-gap: 0.5rem;
              `, GALSAN_CreateBlock.Screen_Mobile
          );

          this.add_CSS_Class(
            `.Image`,
            `
            width: 100%;
            filter: none;
            border-radius: 5px;
            transition: none;
    
              `, GALSAN_CreateBlock.Screen_Mobile
          );

        
      var Container_principal = this.CreateElement_(
        "div",
        `Main_Container`,
        null,
        GALSAN_CreateBlock.Site_Column_Center
      );
  
      
      var grid_Container = this.CreateElement_(
        "div",
        `grid_Container`


      );

      Container_principal.appendChild(grid_Container);





      for (let index = 0; index < this.Photos_.length; index++) {

        var Container_Image = this.CreateElement_(
            "div",
            `Container_Image`
    
    
          );
    
          grid_Container.appendChild(Container_Image);

        var Image = this.CreateElement_(
            "img",
            `Image`,
            this.Photos_[index]
    
    
          );
    
          Container_Image.appendChild(Image);

          GALSAN_CreateBlock.AttachID(Container_Image, "PhotoGrid" + index);

          GALSAN_CreateBlock.Attach_Attribute_onClick(Container_Image, `Gallery_Grid.o_Gallery.Expand_Image(`+ '"' + "PhotoGrid" + index + '"' +`)`);
        
      }

  
      var fullscreen = this.CreateElement_(
        "div",
        `fullscreen`


      );

      Container_principal.appendChild(fullscreen);
  
      GALSAN_CreateBlock.AttachID(fullscreen, "fullscreenID");
     
  
    }
  }

  
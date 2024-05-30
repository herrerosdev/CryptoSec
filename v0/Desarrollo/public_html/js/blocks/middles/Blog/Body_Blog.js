class Body_Blog {
  constructor(Title, Font = null) {
    this.title_ = Title;
    this.font_ = Font;
    //CallBack to signed css properties with name of the class
    this.CreateElement_ = GALSAN_CreateBlock.CreateElementSigned;
    this.add_CSS_Class = GALSAN_CreateBlock.add_CSS_Class_SIGNED;

    //Create View: Dynamic HTMLL CSS: Node
    this.CreateView();
  }

  static item_counter = 0;
  ////////////////////////////
  ///////CreateView//////////
  //////////////////////////

  CreateView() {
    //Add fonts
    GALSAN_CreateBlock.addFont("FontHeader", this.font_);

    //Create element and associate a classes
    this.add_CSS_Class(
      `.ContainerBody`,
      `
        margin-left: 5%;
        margin-right: 5%;
        margin-top: 0vw;
        margin-bottom: 0vw;

            `
    );

    this.add_CSS_Class(
      `.ContainerBody p`,
      `
        font-family: FontHeader;
        font-size: 2vw;
        text-align: justify;
        color: #4f4f4f;

        white-space: pre-wrap;      /* CSS3 */   
        white-space: -moz-pre-wrap; /* Firefox */    
        white-space: -pre-wrap;     /* Opera <7 */   
        white-space: -o-pre-wrap;   /* Opera 7 */    
        word-wrap: break-word;      /* IE */
        width: 70vw;

            `
    );

    this.add_CSS_Class(
      `.ContainerBody p`,
      `
        width: 75vw;
        
      `,

      GALSAN_CreateBlock.Screen_Middle
    );

    this.add_CSS_Class(
      `.ContainerBody p`,
      `
        font-family: FontHeader;
        font-size: 5vw;
        text-align: justify;
        width: 80vw;

            `,

      GALSAN_CreateBlock.Screen_Mobile
    );

    var ContainerTitle = this.CreateElement_(
      "div",
      "ContainerBody",
      null,
      GALSAN_CreateBlock.Site_Column_Center
    );

    var Title = this.CreateElement_("p", null, this.title_);
    ContainerTitle.appendChild(Title);
  }
}

// <div><a href="#">LINK</a><span></span></div>

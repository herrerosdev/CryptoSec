class Img_Blog {
  constructor(Img_path, Img_Foot, Font = null) {
    this.Img_path_ = Img_path;
    this.font_ = Font;
    this.img_foot_ = Img_Foot;
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
      `.ContainerImg`,
      `
        margin-top: 4vh;
        margin-bottom: 4vh;
        align-items: center;
        text-align: center;
              `
    );

    this.add_CSS_Class(
      `.ContainerImg img`,
      `
        max-width: 80%;
    `
    );

    this.add_CSS_Class(
      `.ContainerImg p`,
      `
          font-family: FontHeader;
    
              `
    );
    var ContainerImg_path = this.CreateElement_(
      "div",
      "ContainerImg",
      null,
      GALSAN_CreateBlock.Site_Column_Center
    );

    var Img_path = this.CreateElement_("img", null, this.Img_path_);
    ContainerImg_path.appendChild(Img_path);

    var Img_foot = this.CreateElement_("p", null, this.img_foot_);
    ContainerImg_path.appendChild(Img_foot);
  }
}


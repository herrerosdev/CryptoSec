class Titulo_Blog {
    constructor(ID = null, Title, Font = null) {
        this.ID_ = ID;
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
            `.ContainerTile`,
            `
              margin-left: 5vw;
              margin-right: 5vw;
              margin-top: 5vw;
              margin-bottom: 0vw;
              /* border: 10px aliceblue; */
              border-style: solid;
              border-width: 2px 0px 3px 0px;
              border-color: #b8b8b8;
          `
        );

        this.add_CSS_Class(
            `.ContainerTile span`,
            `
        font-family: FontHeader;
        font-size: 5vw;
        color: #6a6969;
          `,

        );


        this.add_CSS_Class(
            `.ContainerTile span`,
            `
        font-size: 11vw;
          `,
            GALSAN_CreateBlock.Screen_Mobile
        );

        var ContainerTitle = this.CreateElement_(
            "div",
            "ContainerTile",
            null,
            GALSAN_CreateBlock.Site_Column_Center
        );

        
        let Ancla = this.CreateElement_(
            "a",
            null,
            null,

        );

        Ancla.name = this.ID_;
        ContainerTitle.appendChild(Ancla);
        
        var Title = this.CreateElement_("span", null, this.title_);

        ContainerTitle.appendChild(Title);


    }
}
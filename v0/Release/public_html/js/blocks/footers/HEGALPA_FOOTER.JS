class HegalpaFooter {
    static MenuOpenFlag = false;

    constructor() {
        //CallBack to signed css properties with name of the class
        this.CreateElement_ = GALSAN_CreateBlock.CreateElementSigned;
        this.add_CSS_Class = GALSAN_CreateBlock.add_CSS_Class_SIGNED;

        //Create View: Dynamic HTMLL CSS: Node
        this.PrincipalContainerElement = null;

        this.CreateView();
    }


    AddSocialLink(Photo = "./assets/img/footer/instagram.png", Link = "https://www.instagram.com/hegalpa/"){

        var SocialImagen_a = this.CreateElement_(
            "a",
            null,
        );
        SocialImagen_a.target = "_blank"
        SocialImagen_a.href = Link;



        var SocialImagen = this.CreateElement_(
            "img",
            `img`,
            Photo
        );

        SocialImagen_a.appendChild(SocialImagen);
        this.PrincipalContainerElement.appendChild(SocialImagen_a);

    }
    CreateView() {
        this.add_CSS_Class(
            ".footer-bottom",
            `
                padding: 15px 0;
                border-top: 1px solid #000000;
                background-color: #000000 !important;
                color: #000000;
                font-family: rubik;
        `
        );

        this.add_CSS_Class(
            ".socials",
            `
        /* text-align: right; */
        /* margin: 0 -7px; */
        /* display: inline-block; */
        text-align: center;
        /* margin: 0px auto; */
        /* vertical-align: middle; */
    
    `
        );

        this.add_CSS_Class(
            ".img",
            `
          /* text-align: right; */
          width: 10%;
          text-align: center;
          margin: 0px auto;
          cursor: pointer;
          padding: 1%;
          /* display: initial; */
          margin-right: 10px;
          /* vertical-align: middle; */
      
      `
        );


        //Create html elements (Using DOM)

        //Create element and associate a classes
        var ContenedorPrincipal = this.CreateElement_(
            "div",
            `footer-bottom`,
            null,
            GALSAN_CreateBlock.Site_Column_Center
        );


        this.PrincipalContainerElement = this.CreateElement_(
            "div",
            `socials`,
            null,
        );

        ContenedorPrincipal.appendChild(this.PrincipalContainerElement);


/*         var SocialImagen = this.CreateElement_(
            "img",
            `img`,
            "./assets/img/footer/facebook.png"
        );

        this.PrincipalContainerElement.appendChild(SocialImagen);


        var SocialImagen_a = this.CreateElement_(
            "a",
            null,
        );
        SocialImagen_a.target = "_blank"
        SocialImagen_a.href = "https://www.instagram.com/hegalpa/";



        var SocialImagen = this.CreateElement_(
            "img",
            `img`,
            "./assets/img/footer/instagram.png"
        );

        SocialImagen_a.appendChild(SocialImagen);
        this.PrincipalContainerElement.appendChild(SocialImagen_a);


        var SocialImagen = this.CreateElement_(
            "img",
            `img`,
            "./assets/img/footer/twitter.png"
        );

        this.PrincipalContainerElement.appendChild(SocialImagen);
*/
    }
}


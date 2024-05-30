class AutorBox {
    constructor(Name, Rol, Info, profile_img) {
        //CallBack to signed css properties with name of the class
        this.CreateElement_ = GALSAN_CreateBlock.CreateElementSigned;
        this.add_CSS_Class = GALSAN_CreateBlock.add_CSS_Class_SIGNED;

        this.Name_ = Name;
        this.Rol_ = Rol;
        this.Info_ = Info;
        this.profile_img_ = profile_img;
        this.CreateView();
    }

    ////////////////////////////
    ///////CreateView///////////
    ////////////////////////////

    CreateView() {

        ////////////////////////////////////////
        //***************CSS*****************//
        ////////////////////////////////////////

        this.add_CSS_Class(
            `.AutorBox_Container`,
            `
                width: fit-content;
                display: flex;
                max-width: 62%;
                padding: 1vw;
                margin: 10vw auto;
                justify-content: center;
                box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 9px;
      `
        );

        this.add_CSS_Class(
            `.AutorBox_IMG`,
            `
                width: 22%;
                height: 22%;
      `
        );


        this.add_CSS_Class(
            `.sudoname_p`,
            `

      `
        );


        this.add_CSS_Class(
            `.name_p`,

            `
                color: #888a8a;
      `
        );


        this.add_CSS_Class(
            `.Identification_Block`,
            `

      `
        );


        this.add_CSS_Class(
            `.Content_Block`,
            `
                margin-left: 2vw;
                min-width: 40%;
      `
        );


        this.add_CSS_Class(
            `.Info_Box`,
            `
                font-size: 12px;
                background-color: #e2e2e200;
                margin-top: 1vw;
                padding: 8px;
                box-shadow: rgb(50 50 93 / 25%) 0px -11px 30px -80px inset, rgb(0 0 0 / 30%) 0px 1px 7px 2px inset;
                min-height: 7vw;
      `
        );


        var ContenedorPrincipal = this.CreateElement_(
            "div",
            `AutorBox_Container`,
            null,
            GALSAN_CreateBlock.Site_Column_Center
        );

        let Content_Info = this.CreateElement_(
            "div",
            "Content_Block",
            null
        );


        let Img_Profile = this.CreateElement_(
            "img",
            "AutorBox_IMG",
            this.profile_img_
        );

        ContenedorPrincipal.appendChild(Img_Profile)

        var Id_Div = this.CreateElement_(
            "div",
            `Identification_Block`,
            null
        );

        let Sudoname_P = this.CreateElement_(
            "p",
            "sudoname_p",
            this.Name_
        );

        Id_Div.appendChild(Sudoname_P)


        let Name_P = this.CreateElement_(
            "p",
            "name_p",
            this.Rol_
        );

        Id_Div.appendChild(Name_P)

        let Info_div = this.CreateElement_(
            "div",
            "Info_Box",
            this.Info_
        );

        Id_Div.appendChild(Info_div)

        //   "Pablo Herreros Gálvez es un Ingeniero Informático especializado en el desarrollo de software. Durante su casi una decada de experiencia parece que estoy llevando bien el trabajo de olla express: llevarle los sprints a la mesa al cliente, catar el codigo de los recien llegados (¡Ags!, esto le sobra), depurar las grasas saturadas del plato, poner los fuegos en su justa medida para la ejecucion; e se ha formado como analista-desarrollador polivalente, dominando lenguages altamente complejos como C/C++, pasando por programación web (REST, PHP, JS, HTML...) y llegando incluso a abarcar conocimientos en SERVIDORES UBUNTU, APACHE, GIT, SVN y MySQL; resumiendo la parte técnica de su formación. - Desarrollé este blog de fines de semana a mano para dar un toque original a mi presentación y para probar un framework web que estoy implementando -"
        Content_Info.appendChild(Id_Div);
        ContenedorPrincipal.appendChild(Content_Info);
    }

}
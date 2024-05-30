////////////////////////////
///////FooterBlock////////// 
////////////////////////////
//Add CSS

class MellitusForumFooter {

    constructor() {
        this.CreateView();
    }

    getClassName() {
        return this.constructor.name;
    }

    Typing_On_Right_Box(text = null, link = null, _function = null) {

        var ContenedorDerecho = document.getElementById(
            `${this.getClassName}ContenedorIza`
        );

        var a_Link = GALSAN_CreateBlock.CreateElement("a", null, text);

        if (link != null && _function == null) {
            a_Link.setAttribute("href", link); //Add Link to button
        } else if (_function != null && link == null) {
            a_Link.setAttribute("onclick", _function); //Add function to button
        }

        //Add To General button content
        ContenedorDerecho.appendChild(a_Link);
    }


    CreateView() {
        GALSAN_CreateBlock.add_CSS_Class('.footer',
            `
                color: white;
                height: auto;
                min-height: 20vh;
                /* position: absolute; */
                display: inline-block;
                width: 100%;
                bottom: 0;
                background-color: rgb(125 164 184);
                margin-top: 0vh;
    
    `
        );


        GALSAN_CreateBlock.add_CSS_Class('.ContainerFooter',
            `

    color: white;
    height: 80%;
    padding-bottom: 2%;
    padding-top: 1%;
    position: relative;
    display: inline-flex;
    width: 100%;
    align-items: center;
    
    `
        );



        GALSAN_CreateBlock.add_CSS_Class('.ContainerFooter',
            `

    height: auto;
    flex-direction: column;
    
    `, GALSAN_CreateBlock.Screen_Mobile
        );

        GALSAN_CreateBlock.add_CSS_Class('.ContainerFooter2',
            `

    color: white;
    height: 10%;
    position: relative;
    margin: 0 auto;
    align-items: center;
    display: flex;
    width: 95%;
    border-top: 2px solid white;
    
    `
        );


        GALSAN_CreateBlock.add_CSS_Class('.datos',
            `
    width: 30%;
    position: relative;
    height: auto;
    /* left: 2vw; */
    margin-left: 2.5vw;
    display: block;

    
    `
        );


        GALSAN_CreateBlock.add_CSS_Class('.datos',
            `
    width: 80%;
    margin: 2vw auto;
    text-align: center;
    
    `, GALSAN_CreateBlock.Screen_Mobile
        );

        GALSAN_CreateBlock.add_CSS_Class('.TitleDatos',
            `
    color: rgb(203 205 148);
    width: 100%;
    display: block;
    font-size: 2vw;

    
    `
        );


        GALSAN_CreateBlock.add_CSS_Class('.TitleDatos',
            `
    font-size: 4.5vw;
    `, GALSAN_CreateBlock.Screen_Mobile
        );

        GALSAN_CreateBlock.add_CSS_Class('.SpanDatos',
            `
    color: rgb(255, 255, 255);
    width: 100%;
    display: block;
    padding-top: 1vw;
    text-decoration: none;
    padding-bottom: 1vw;
    font-size: 1.2vw;
    
    `
        );


        GALSAN_CreateBlock.add_CSS_Class('.SpanDatos',
            `
    font-size: 3.5vw;
    `, GALSAN_CreateBlock.Screen_Mobile
        );



        GALSAN_CreateBlock.add_CSS_Class('.CopyRight',
            `
    font-size: 1.2vw;
    
    `
        );


        GALSAN_CreateBlock.add_CSS_Class('.CopyRight',
            `
    font-size: 2.2vw;
    `, GALSAN_CreateBlock.Screen_Mobile
        );



        GALSAN_CreateBlock.add_CSS_Class('.Contenedor2',
            `
    
    width: 35%;
    position: relative;
    height: auto;
    display: block;
    
    `
        );

        GALSAN_CreateBlock.add_CSS_Class('.Contenedor2',
            `
    width: 80%;
    justify-content: center;
    margin: 2vw auto;
    display: flex;

    
    `, GALSAN_CreateBlock.Screen_Mobile
        );

        GALSAN_CreateBlock.add_CSS_Class('.Contenedor3',
            `
    
    width: 34%;
    position: relative;
    display: block;
    margin-right: 2.5vw;
    text-align: justify;
    
    `
        );


        GALSAN_CreateBlock.add_CSS_Class('.Contenedor3',
            `
    width: 80%;
    display: flex;
    justify-content: center;
    margin: 2vw auto;
    text-align: center;
    flex-direction: column;

    
    `, GALSAN_CreateBlock.Screen_Mobile
        );


        GALSAN_CreateBlock.add_CSS_Class('.ImgContenedor2',
            `
    
    width: auto;
    height: 17vw;
    position: relative;
    display: block;

    
    `
        );


        GALSAN_CreateBlock.add_CSS_Class('.ImgContenedor2',
            `
    height: 30vw;
    `, GALSAN_CreateBlock.Screen_Mobile
        );






        //Create element Cpntainer div for footer

        let ContenedorPrincipal = GALSAN_CreateBlock.CreateElement("div", "footer", null, GALSAN_CreateBlock.Site_Footer);

        let ContainerFooter = GALSAN_CreateBlock.CreateElement("div", "ContainerFooter");
        ContenedorPrincipal.appendChild(ContainerFooter);


        //Create element Data in footer 
        let ContenedorDatosContacto = GALSAN_CreateBlock.CreateElement("div", "datos");
        ContainerFooter.appendChild(ContenedorDatosContacto);

        let TitleDatos = GALSAN_CreateBlock.CreateElement("p", "TitleDatos", "Enlaces");
        ContenedorDatosContacto.appendChild(TitleDatos);

        //creates text as many as you want

        let span = GALSAN_CreateBlock.CreateElement("a", "SpanDatos", "Inicio");

        span.setAttribute("href", "index.php");

        TitleDatos.appendChild(span);

        span = GALSAN_CreateBlock.CreateElement("a", "SpanDatos", "Aviso Legal");

        span.setAttribute("href", "Aviso.php");

        TitleDatos.appendChild(span);

        span = GALSAN_CreateBlock.CreateElement("a", "SpanDatos", "Normas");

        span.setAttribute("href", "Normas.php");

        TitleDatos.appendChild(span);

        let Contenedor2 = GALSAN_CreateBlock.CreateElement("div", "Contenedor2");
        ContainerFooter.appendChild(Contenedor2);

        let ImgContenedor2 = GALSAN_CreateBlock.CreateElement("img", "ImgContenedor2", "./assets/img/icon/diaLogo.png");
        Contenedor2.appendChild(ImgContenedor2);

        let Contenedor3 = GALSAN_CreateBlock.CreateElement("div", "Contenedor3");
        ContainerFooter.appendChild(Contenedor3);

        TitleDatos = GALSAN_CreateBlock.CreateElement("p", "TitleDatos", "Sobre nosotros");

        Contenedor3.appendChild(TitleDatos);

        let SpanDatos = GALSAN_CreateBlock.CreateElement("div", "SpanDatos", "");
        SpanDatos.id = `${this.getClassName}ContenedorIza`;

        Contenedor3.appendChild(SpanDatos);

        ContainerFooter = GALSAN_CreateBlock.CreateElement("div", "ContainerFooter2");
        ContenedorPrincipal.appendChild(ContainerFooter);

        span = GALSAN_CreateBlock.CreateElement("p", "CopyRight", "Copyright © 2022");

        ContainerFooter.appendChild(span);
    }
}
////////////////////////////
///////WrapperBlock////////// 
////////////////////////////
class CWrapper {


    constructor() {
        this.GenerateView();

    }

    GenerateView() {
        //Add CSS
        GALSAN_CreateBlock.add_CSS_Class('.Wrapper',
            `
            z-index: 1;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            width: auto;
            grid-auto-rows: minmax(20vw, auto);
            margin: auto;
            background-color: rgb(0 0 0 / 36%);
            position: relative;
    
    `
        );

        GALSAN_CreateBlock.add_CSS_Class('.Col1Row1_Transparent',
            `
    z-index    : 5;
    grid-column: 1;
    grid-row   : 1;
    cursor: pointer;
    
    `
        );


        GALSAN_CreateBlock.add_CSS_Class('.Col1Row1_Container',
            `
    grid-row       : 1;
    grid-column    : 1;
    position       : relative;
    transition     : all 1s ease;
    transform-style: preserve-3d;
    transition     : 0.6s;
    
    `
        );



        GALSAN_CreateBlock.add_CSS_Class('.Col1Row1_Transparent:hover+.Col1Row1_Container',
            `
    transform: rotateX(180deg);
    
    `
        );


        GALSAN_CreateBlock.add_CSS_Class('.Col1Row1_Transparent:hover+.Col1Row1_Container+.Col1Row2',
            `
    background-color  : rgb(131 182 241 / 68%);
    display           : block;
    grid-column       : 1;
    grid-row          : 2;
    animation-name    : DivPersianaOne;
    animation-duration: 2000ms;
    z-index           : -2;
    
    `
        );

        GALSAN_CreateBlock.add_CSS_Class(' @keyframes DivPersianaOne',
            `
    0% {
        transform: translate(0px, -20vw);
    }

    100% {
        transform: translate(0px, 0vw);
    }
    
    `
        );

        GALSAN_CreateBlock.add_CSS_Class('.Col1Row1_Front',
            `
            z-index: 2;
            grid-column: 1;
            text-align: center;
            display: flex;
            justify-content: center;
            width: 97%;
            height: 97%;
            align-items: center;
            background-color: rgb(131 182 241 / 68%);
            border: 0.4vw solid white;
            position: absolute;
            backface-visibility: hidden;
    
    `
        );

        GALSAN_CreateBlock.add_CSS_Class('.Col1Row1_Back',
            `
    grid-column        : 1;
    text-align         : center;
    display            : flex;
    justify-content    : center;
    width              : 97%;
    height             : 97%;
    align-items        : center;
    background-color: rgb(131 182 241 / 68%);
    border             : 0.4vw solid white;
    position           : absolute;
    backface-visibility: hidden;
    transform          : rotateX(180deg);
    
    `
        );

        GALSAN_CreateBlock.add_CSS_Class('.ContenidoTextWrapper',
            `
    font-size: 4vw;
    color    : white;
    height: auto;
    width: auto;
    z-index: 2;
    
    `
        );

        GALSAN_CreateBlock.add_CSS_Class('.Col1Row1_Background',
            `
    z-index         : -1;
    background-image: url(assets/img/infantiles1.jpeg);
    width              : 100%;
    height             : 100%;
    background-size : cover;
    position        : absolute;
    filter          : brightness(35%) hue-rotate(180deg) opacity(50%);
    
    `
        );


        GALSAN_CreateBlock.add_CSS_Class('.Col1Row2',
            `
    grid-column     : 1;
    grid-row        : 2;
    text-align      : center;
    display         : none;
    justify-content : center;
    width              : 97%;
    height             : 97%;
    align-items     : center;
    background-color: rgb(131 182 241 / 68%);
    border          : 0.4vw solid white;
    
    `
        );




        //////////////////Column 2////////////////

        GALSAN_CreateBlock.add_CSS_Class('.Col2Row2_Transparent',
            `
    z-index    : 5;
    grid-column: 2;
    grid-row   : 2;
    cursor: pointer;
    
    `
        );


        GALSAN_CreateBlock.add_CSS_Class('.Col2Row2_Container',
            `
    position       : relative;
    grid-column    : 2;
    grid-row       : 2;
    transition     : all 1s ease;
    transform-style: preserve-3d;
    transition     : 0.6s;
    
    `
        );



        GALSAN_CreateBlock.add_CSS_Class('.Col2Row2_Transparent:hover+.Col2Row2_Container',
            `
    transform: rotateX(180deg);
    
    `
        );


        GALSAN_CreateBlock.add_CSS_Class('.Col2Row2_Transparent:hover+.Col2Row2_Container+.Col2Row1',
            `
    background-color  : rgb(131 182 241 / 68%);
    display           : block;
    grid-column       : 2;
    grid-row          : 1;
    animation-name    : DivPersianaTwo;
    animation-duration: 2000ms;
    z-index           : -2;
    
    `
        );

        GALSAN_CreateBlock.add_CSS_Class('@keyframes DivPersianaTwo',
            `
    0% {
        transform: translate(0px, 20vw);
    }

    100% {
        transform: translate(0px, 0vw);
    }
    
    `
        );





        GALSAN_CreateBlock.add_CSS_Class('.Col2Row2_Front',
            `
    z-index            : 2;
    grid-column        : 2;
    grid-row           : 2;
    text-align         : center;
    display            : flex;
    justify-content    : center;
    align-items        : center;
    width              : 97%;
    height             : 97%;
    background-color: rgb(131 182 241 / 68%);
    border             : 0.4vw solid white;
    position           : absolute;
    backface-visibility: hidden;
    
    `
        );

        GALSAN_CreateBlock.add_CSS_Class('.Col2Row2_Back',
            `
    grid-column        : 2;
    text-align         : center;
    display            : flex;
    justify-content    : center;
    width              : 97%;
    height             : 97%;
    align-items        : center;
    background-color: rgb(131 182 241 / 68%);
    border             : 0.4vw solid white;
    position           : absolute;
    backface-visibility: hidden;
    transform          : rotateX(180deg);
    
    `
        );



        GALSAN_CreateBlock.add_CSS_Class('.Col2Row2_Background',
            `
    z-index         : -1;
    background-image: url(assets/img/infantiles1.jpeg);
    width              : 100%;
    height             : 100%;
    background-size : cover;
    position        : absolute;
    filter          : brightness(35%) hue-rotate(180deg) opacity(50%);
    
    `
        );


        GALSAN_CreateBlock.add_CSS_Class('.Col2Row1',
            `
    grid-column     : 2;
    grid-row        : 1;
    text-align      : center;
    display         : none;
    justify-content : center;
    width              : 97%;
    height             : 97%;
    align-items     : center;
    background-color: rgba(39, 124, 223, 0.9);
    border          : 0.4vw solid white;
    
    `
        );









        //////////////////Column 3////////////////

        GALSAN_CreateBlock.add_CSS_Class('.Col3Row1_Transparent',
            `
    z-index    : 5;
    grid-column: 3;
    grid-row   : 1;
    cursor: pointer;
    
    `
        );


        GALSAN_CreateBlock.add_CSS_Class('.Col3Row1_Container',
            `
    position       : relative;
    transition     : all 1s ease;
    grid-column    : 3;
    grid-row       : 1;
    transform-style: preserve-3d;
    transition     : 0.6s;
    
    `
        );



        GALSAN_CreateBlock.add_CSS_Class('.Col3Row1_Transparent:hover+.Col3Row1_Container',
            `
    transform: rotateX(180deg);
    
    `
        );


        GALSAN_CreateBlock.add_CSS_Class('.Col3Row1_Transparent:hover+.Col3Row1_Container+.Col3Row2',
            `
    background-color  : rgb(131 182 241 / 68%);
    display           : block;
    grid-column       : 3;
    grid-row          : 2;
    animation-name    : DivPersianaThree;
    animation-duration: 2000ms;
    z-index           : -2;
    
    `
        );


        GALSAN_CreateBlock.add_CSS_Class('@keyframes DivPersianaThree',
            `
    0% {
        transform: translate(0px, -20vw);
    }

    100% {
        transform: translate(0px, 0vw);
    }
    
    `
        );




        GALSAN_CreateBlock.add_CSS_Class('.Col3Row1_Front',
            `
    z-index            : 2;
    grid-column        : 3;
    grid-row           : 1;
    text-align         : center;
    display            : flex;
    width              : 97%;
    height             : 97%;
    justify-content    : center;
    align-items        : center;
    background-color: rgb(131 182 241 / 68%);
    border             : 0.4vw solid white;
    position           : absolute;
    backface-visibility: hidden;
    
    `
        );

        GALSAN_CreateBlock.add_CSS_Class('.Col3Row1_Back',
            `
    grid-column        : 3;
    text-align         : center;
    display            : flex;
    justify-content    : center;
    width              : 97%;
    height             : 97%;
    align-items        : center;
    background-color   : rgb(131 182 241 / 68%);
    border             : 0.5vw solid white;
    position           : absolute;
    backface-visibility: hidden;
    transform          : rotateX(180deg);
    
    `
        );



        GALSAN_CreateBlock.add_CSS_Class('.Col3Row1_Background',
            `
    z-index         : -1;
    background-image: url(assets/img/infantiles1.jpeg);
    width              : 100%;
    height             : 100%;
    background-size : cover;
    position        : absolute;
    filter          : brightness(35%) opacity(50%);
    
    `
        );


        GALSAN_CreateBlock.add_CSS_Class('.Col3Row2',
            `
    grid-column     : 3;
    grid-row        : 2;
    text-align      : center;
    display         : none;
    justify-content : center;
    width              : 97%;
    height             : 97%;
    align-items     : center;
    background-color: rgb(131 182 241 / 68%);
    border          : 0.4vw solid white;
    
    `
        );





        //Create element and associate a classes
        var ContenedorPrincipal = GALSAN_CreateBlock.CreateElement("div", "Wrapper");

        var Col1Row1_Transparent = GALSAN_CreateBlock.CreateElement("div", "Col1Row1_Transparent");
        ContenedorPrincipal.appendChild(Col1Row1_Transparent);
        GALSAN_CreateBlock.Attach_Attribute_onClick(Col1Row1_Transparent, "location.href='EnlaceAqui'");





        var Col1Row1_Container = GALSAN_CreateBlock.CreateElement("div", "Col1Row1_Container");
        ContenedorPrincipal.appendChild(Col1Row1_Container);





        var Col1Row1_Front = GALSAN_CreateBlock.CreateElement("div", "Col1Row1_Front");
        Col1Row1_Container.appendChild(Col1Row1_Front);

        var text = GALSAN_CreateBlock.CreateElement("p", "ContenidoTextWrapper", "Nombre");
        Col1Row1_Front.appendChild(text);

        var Col1Row1_Background = GALSAN_CreateBlock.CreateElement("div", "Col1Row1_Background");
        Col1Row1_Front.appendChild(Col1Row1_Background);

        var Col1Row1_Back = GALSAN_CreateBlock.CreateElement("div", "Col1Row1_Back");
        Col1Row1_Container.appendChild(Col1Row1_Back);

        var text = GALSAN_CreateBlock.CreateElement("p", "ContenidoTextWrapper", "Nombre");
        Col1Row1_Back.appendChild(text);





        var Col1Row2 = GALSAN_CreateBlock.CreateElement("div", "Col1Row2");
        ContenedorPrincipal.appendChild(Col1Row2);

        var text = GALSAN_CreateBlock.CreateElement("p", "ContenidoTextWrapper", "Nombre");
        Col1Row2.appendChild(text);



        ///////////////////////Colunm 2////////////////




        var Col2Row2_Transparent = GALSAN_CreateBlock.CreateElement("div", "Col2Row2_Transparent");
        ContenedorPrincipal.appendChild(Col2Row2_Transparent);
        GALSAN_CreateBlock.Attach_Attribute_onClick(Col2Row2_Transparent, "location.href='EnlaceAqui'");





        var Col2Row2_Container = GALSAN_CreateBlock.CreateElement("div", "Col2Row2_Container");
        ContenedorPrincipal.appendChild(Col2Row2_Container);





        var Col2Row2_Front = GALSAN_CreateBlock.CreateElement("div", "Col2Row2_Front");
        Col2Row2_Container.appendChild(Col2Row2_Front);

        var text = GALSAN_CreateBlock.CreateElement("p", "ContenidoTextWrapper", "Nombre");
        Col2Row2_Front.appendChild(text);

        var Col2Row2_Background = GALSAN_CreateBlock.CreateElement("div", "Col2Row2_Background");
        Col2Row2_Front.appendChild(Col2Row2_Background);

        var Col2Row2_Back = GALSAN_CreateBlock.CreateElement("div", "Col2Row2_Back");
        Col2Row2_Container.appendChild(Col2Row2_Back);

        var text = GALSAN_CreateBlock.CreateElement("p", "ContenidoTextWrapper", "Nombre");
        Col2Row2_Back.appendChild(text);





        var Col2Row1 = GALSAN_CreateBlock.CreateElement("div", "Col2Row1");
        ContenedorPrincipal.appendChild(Col2Row1);

        var text = GALSAN_CreateBlock.CreateElement("p", "ContenidoTextWrapper", "Nombre");
        Col2Row1.appendChild(text);





        ///////////////////////Colunm 3////////////////




        var Col3Row1_Transparent = GALSAN_CreateBlock.CreateElement("div", "Col3Row1_Transparent");
        ContenedorPrincipal.appendChild(Col3Row1_Transparent);
        GALSAN_CreateBlock.Attach_Attribute_onClick(Col3Row1_Transparent, "location.href='EnlaceAqui'");



        var Col3Row1_Container = GALSAN_CreateBlock.CreateElement("div", "Col3Row1_Container");
        ContenedorPrincipal.appendChild(Col3Row1_Container);


        var Col3Row1_Front = GALSAN_CreateBlock.CreateElement("div", "Col3Row1_Front");
        Col3Row1_Container.appendChild(Col3Row1_Front);

        var text = GALSAN_CreateBlock.CreateElement("p", "ContenidoTextWrapper", "Nombre");
        Col3Row1_Front.appendChild(text);

        var Col3Row1_Background = GALSAN_CreateBlock.CreateElement("div", "Col3Row1_Background");
        Col3Row1_Front.appendChild(Col3Row1_Background);

        var Col3Row1_Back = GALSAN_CreateBlock.CreateElement("div", "Col3Row1_Back");
        Col3Row1_Container.appendChild(Col3Row1_Back);

        text = GALSAN_CreateBlock.CreateElement("p", "ContenidoTextWrapper", "Nombre");
        Col3Row1_Back.appendChild(text);





        var Col3Row2 = GALSAN_CreateBlock.CreateElement("div", "Col3Row2");
        ContenedorPrincipal.appendChild(Col3Row2);

        var text = GALSAN_CreateBlock.CreateElement("p", "ContenidoTextWrapper", "Nombre");
        Col3Row2.appendChild(text);

    }

}

o_Wrapeer = new CWrapper();
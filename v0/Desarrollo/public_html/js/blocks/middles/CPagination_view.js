/*clase que crea  Crea un panel de botones */

class CPagination_view {
    constructor() {
        this.ViewConstructor();
    }

    getClassName() {
        return this.constructor.name;
    }


    Left_Arrow(_Href = "./") {

        var ContenedorPrincipal = document.getElementById(`${this.getClassName()}Container`);
        let Left_Arrow;
        let Arrow;

        Left_Arrow = GALSAN_CreateBlock.CreateElement(
            "a",
            null,
            null,
            GALSAN_CreateBlock.Site_Column_Center
        );

        Left_Arrow.href = _Href;

        Arrow = GALSAN_CreateBlock.CreateElement(
            "img",
            "ArrowLeft",
            "./assets/img/icon/right.png"
        );

        ContenedorPrincipal.appendChild(Left_Arrow);
        Left_Arrow.appendChild(Arrow);

    }


    Right_Arrow(_Href = "./") {


        var ContenedorPrincipal = document.getElementById(`${this.getClassName()}Container`);
        let Rigt_Arrow;
        let Arrow;

        Rigt_Arrow = GALSAN_CreateBlock.CreateElement(
            "a",
            null,
            null,
            GALSAN_CreateBlock.Site_Column_Center
        );

        Rigt_Arrow.href = _Href;


        Arrow = GALSAN_CreateBlock.CreateElement(
            "img",
            "ArrowRight",
            "./assets/img/icon/right.png"
        );

        ContenedorPrincipal.appendChild(Rigt_Arrow);
        Rigt_Arrow.appendChild(Arrow);

    }

    AddPage(_Number = 0, _Href = "../MellitusForum", SelectedPage = false) {


        let ContenedorPrincipal = document.getElementById(`${this.getClassName()}Container`);
        let Page_a;


        if (SelectedPage) {

            Page_a = GALSAN_CreateBlock.CreateElement(
                "a",
                `${this.getClassName()}is-active`,
                _Number,
                GALSAN_CreateBlock.Site_Column_Center
            );

        } else {
            Page_a = GALSAN_CreateBlock.CreateElement(
                "a",
                null,
                _Number,
                GALSAN_CreateBlock.Site_Column_Center
            );
        }

        Page_a.href = _Href;

        ContenedorPrincipal.appendChild(Page_a);

    }

    ViewConstructor() {
        GALSAN_CreateBlock.add_CSS_Class(
            `.${this.getClassName()}pagination`,
            `
            padding-top: 2%;
            display: inline-flex;
            width: 100%;
            justify-content: center;
            align-items: center;
            margin-bottom: 5vh;
          `
        );



        GALSAN_CreateBlock.add_CSS_Class(
            `.${this.getClassName()}pagination a`,
            `
            color: black;
            font-weight: 700;
            font-size: 2.5vw;
            padding: 0.5vw 1.5vw;
            text-decoration: none;
          `
        );

        GALSAN_CreateBlock.add_CSS_Class(
            `.${this.getClassName()}pagination a .ArrowLeft`,
            `
            width: 4vw;
            height: auto;
            transform: rotate(180deg);
          `
        );

        GALSAN_CreateBlock.add_CSS_Class(
            `.${this.getClassName()}pagination a .ArrowRight`,
            `
            width: 4vw;
            height: auto;

          `
        );

        GALSAN_CreateBlock.add_CSS_Class(
            `.${this.getClassName()}is-active`,
            `
      border: 1vw solid #178ece;
      border-radius: 100%;
        `
        );

        var ContenedorPrincipal = GALSAN_CreateBlock.CreateElement(
            "div",
            `${this.getClassName()}pagination`,
            null,
            GALSAN_CreateBlock.Site_Column_Center
        );


        ContenedorPrincipal.id = `${this.getClassName()}Container`;
    }
}
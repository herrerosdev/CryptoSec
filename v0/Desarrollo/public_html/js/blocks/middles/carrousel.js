class CarrouselBlock {

    ////////////////
    //CONSTRUCTOR///
    ////////////////

    static ActualIndexImage_ = 0;
    static SingletonObject_ = null;

    constructor(ID_IMG_TAG) {

        this.ID_IMG_TAG_ = ID_IMG_TAG;

        this.ImagesArray_ = [];

        //variables used by effects
        this.Effect_Direction_ = true; //true go next, false go previouS

        //Create View: Dynamic HTMLL CSS: Node
        this.ViewConstructor();
    }


    //////////FUNCIONES////////////
    Add_Image(Image_Path) {
        this.ImagesArray_.push(Image_Path);
    };


    Go_To_Image(Image_Index) {

        Image_Index = Image_Index < 0 ? (this.ImagesArray_.length - 1) : Image_Index;

        CarrouselBlock.ActualIndexImage_ = Image_Index;

        this.Refresh_Gallery();

        $(`#${this.ID_IMG_TAG}`).fadeOut(100);

        $(`#${this.ID_IMG_TAG}`).fadeIn(3000);

    };

    Is_Last_Image() {
        if (CarrouselBlock.ActualIndexImage_ == this.ImagesArray_.length - 1) {
            return true;
        } else {
            return false;
        }
    };

    Is_First_Image() {
        if (CarrouselBlock.ActualIndexImage_ == 0) {
            return true;
        } else {
            return false;
        }
    };

    Next_Image() {
        this.Go_To_Image(++CarrouselBlock.ActualIndexImage_ % (this.ImagesArray_.length));
    };

    Prev_Image() {
        this.Go_To_Image(--CarrouselBlock.ActualIndexImage_);
    }

    //Return Actual Imagen indicate by iterator
    Get_Actual_Image() {
        return this.ImagesArray_[CarrouselBlock.ActualIndexImage_];
    }

    //Print actual Image
    Refresh_Gallery() {
        document.getElementById(this.ID_IMG_TAG_).src = this.Get_Actual_Image();
    };

    //Create view of carrusel
    ViewConstructor() {

        ////////////////////////////
        ///////carrouselBlock////////// 
        ////////////////////////////

        //Add CSS
        GALSAN_CreateBlock.add_CSS_Class('.carrousel_images',
            `
        width          : 100%;
        display        : flex;
        justify-content: center;
        align-items    : center;
        height: auto;
        position: relative;
    
    `
        );

        GALSAN_CreateBlock.add_CSS_Class('.Arrow_Left',
            `
            position: absolute;
            width: 6vw;
            left: 8vw;
            z-index: 4;
            transform: rotate(180deg);
            filter: invert(1);
    `
        );

        GALSAN_CreateBlock.add_CSS_Class('.Arrow_Right',
            `
            width: 6vw;
            position: absolute;
            z-index: 4;
            right: 8vw;
            filter: invert(1);
    `
        );


        GALSAN_CreateBlock.add_CSS_Class('.mainImage',
            `
            max-width: 75vw;
            width: 60vw;
            height: 60vh;
            max-width: 650px;
            z-index: 3;
            border-radius: 0px;
            box-shadow: 0 0 15px #ddd;
            background: #fff;
            `
        );

        //////////////////////////////////////////
        //////////////////MOBILE CSS /////////////
        //////////////////////////////////////////

        GALSAN_CreateBlock.add_CSS_Class('.mainImage',
            `
            max-width: 100vw;
            width: 100vw;
            max-height: 40vh;
            border-radius: 0px;
            box-shadow: 0 0 15px #ddd;
            background: #fff;

            `,
            GALSAN_CreateBlock.Screen_Mobile
        );


        GALSAN_CreateBlock.add_CSS_Class('.carrousel_images',
            `
            margin: 0;

            `,
            GALSAN_CreateBlock.Screen_Mobile

        );

        GALSAN_CreateBlock.add_CSS_Class('.Arrow_Right',
            `
        right: 2vw;
        `,

            GALSAN_CreateBlock.Screen_Mobile
        );


        GALSAN_CreateBlock.add_CSS_Class('.Arrow_Left',
            `
            left: 2vw;
        `,
            GALSAN_CreateBlock.Screen_Mobile
        );



        //Create element and associate a classes
        var ContenedorPrincipal = GALSAN_CreateBlock.CreateElement("div", "carrousel_images");

        var FlechaIzquierda = GALSAN_CreateBlock.CreateElement("img", "Arrow_Left", "assets/img/ArrowNext.png");
        ContenedorPrincipal.appendChild(FlechaIzquierda);
        GALSAN_CreateBlock.Attach_Attribute_onClick(FlechaIzquierda, "PageManager.o_Carrousel.Prev_Image()");

        var FlechaDerecha = GALSAN_CreateBlock.CreateElement("img", "Arrow_Right", "assets/img/ArrowNext.png");
        ContenedorPrincipal.appendChild(FlechaDerecha);
        GALSAN_CreateBlock.Attach_Attribute_onClick(FlechaDerecha, "PageManager.o_Carrousel.Next_Image()");

        //Marco de la imagen
        var MarcoImagen = GALSAN_CreateBlock.CreateElement("div", "marco_imagen");
        ContenedorPrincipal.appendChild(MarcoImagen);

        var ImagenPrincipal = GALSAN_CreateBlock.CreateElement("img", "mainImage");
        GALSAN_CreateBlock.AttachID(ImagenPrincipal, this.ID_IMG_TAG_);
        MarcoImagen.appendChild(ImagenPrincipal);

    }

}
class HEGALPA_CARROUSEL {

    static MenuOpenFlag = false;

    constructor() {
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

    addNewItem(Photo, text) {

        HEGALPA_CARROUSEL.item_counter++;


        if (HEGALPA_CARROUSEL.item_counter <= 5) {

            this.add_CSS_Class(
                `.card:nth-of-type(${HEGALPA_CARROUSEL.item_counter}) .image-container`,

                `background-image: url(${Photo});
                box-shadow: 0px 7px 7px #00000047;
                `
            );

            var ContenedorPrincipal_Carrousel = document.getElementById("ContenedorPrincipal_Carrousel");

            var card_Carrousel = document.getElementById("card_Carrousel");

            var card_ = this.CreateElement_(
                "div",
                `card`,
                null,
            );

            card_.id = HEGALPA_CARROUSEL.item_counter;

            var imageContainer_ = this.CreateElement_(
                "div",
                `image-container`,
                null,
            );

            card_.appendChild(imageContainer_);

            var p__ = this.CreateElement_(
                "p",
                null,
                text,
            );

            card_.appendChild(p__);

            card_Carrousel.appendChild(card_);

            ContenedorPrincipal_Carrousel.appendChild(card_Carrousel);

        } else {
            alert('Max Item on carrousel reached (5)')
        }



    }

    static ChargeCarouselEngine() {
        const cardsContainer = document.querySelector(".HEGALPA_CARROUSELcard-carousel");
        const cardsController = document.querySelector(".HEGALPA_CARROUSELcard-carousel + .HEGALPA_CARROUSELcard-controller")

        const carousel = new CardCarousel(cardsContainer);

    }
    //Add css class
    CreateView() {

        //Add CSS
        this.add_CSS_Class(
            `*`,
            `
            box-sizing: border-box;
            margin: 0;
            padding: 0;
    
    `
        );

/*         this.add_CSS_Class(
            `html`,
            `
            font-family: system-ui;
            background: #3d76d9;

         `
        );
 */
        this.add_CSS_Class(
            `.visuallyhidden`,
            `
            position: absolute;
            z-index: -1;
            right: 0;
            opacity: 0;
             `
        );

        this.add_CSS_Class(
            `h1`,
            `
            color: white;
            text-align: center;
            margin-top: 1 em;
        `
        );

        this.add_CSS_Class(
            `.container`,
            `
                overflow: hidden;
                /* background: rgba(0, 0, 0, .1); */
                margin-left: 3%;
        `
        );

        this.add_CSS_Class(
            `.card-carousel`,
            `
                --card-width: 80%;
                --card-max-width: 280px;
                --card-height: 350px;
                --carousel-min-width: 600px;
                z-index: 1;
                position: relative;
                margin: 0 auto;
                width: 100%;
                height: var(--card-height);
                margin-top: 75px;
                margin-bottom: 75px;
                min-width: var(--carousel-min-width);
                transition: filter .3s ease;
        `
        );

        //Contenedor que contiene todos los botones
        this.add_CSS_Class(
            `.card-carousel`,
            `
            margin-left: calc((100vw - var(--carousel-min-width) - 40px) / 2);

    `,
            `@media screen and (max-width: 640px)`
        );


        this.add_CSS_Class(
            `.card-carousel .smooth-return`,
            `
            transition: all .2s ease;

        `
        );

        this.add_CSS_Class(
            `.card-carousel .card`,
            `
                background: whitesmoke;
                width: var(--card-width);
                max-width: var(--card-max-width);
                text-align: center;
                padding: 1em;
                min-width: 50%;
                height: var(--card-height);
                position: absolute;
                margin: 0 auto;
                color: rgba(0,0,0,.5);
                /* width: 117%; */
                transition: inherit;
                -webkit-box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
                -moz-box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
                box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
                border-radius: 1em;
                filter: brightness(.9);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

        `
        );

        this.add_CSS_Class(
            `.card .highlight`,
            `
            filter: brightness(1)
        `
        );

        // this.add_CSS_Class(
        //     `.card:nth-of-type(1) .image-container`,
        //     `
        //     background-image: url("https://static.addtoany.com/images/dracaena-cinnabari.jpg");
        // `
        // );

        // this.add_CSS_Class(
        //     `.card:nth-of-type(2) .image-container`,
        //     `
        //     background-image: url("https://static.addtoany.com/images/dracaena-cinnabari.jpg");
        // `
        // );

        // this.add_CSS_Class(
        //     `.card:nth-of-type(3) .image-container`,
        //     `
        //     background-image: url("https://static.addtoany.com/images/dracaena-cinnabari.jpg");
        // `
        // );

        // this.add_CSS_Class(
        //     `.card:nth-of-type(4) .image-container`,
        //     `
        //     background-image: url("https://static.addtoany.com/images/dracaena-cinnabari.jpg");
        // `
        // );

        // this.add_CSS_Class(
        //     `.card:nth-of-type(5) .image-container`,
        //     `
        //     background-image: url("https://static.addtoany.com/images/dracaena-cinnabari.jpg");
        // `
        // );


        this.add_CSS_Class(
            `.image-container`,
            `
                width: 28em;
                height: 18em;
                position: relative;
                background-size: cover;
                margin-bottom: 3em;
                /* border-radius: 100%; */
                padding: 1em;
                bottom: 10%;
                -webkit-box-shadow: inset 0px 0px 17px 0px rgba(0,0,0,0.3);
                -moz-box-shadow: inset 0px 0px 17px 0px rgba(0,0,0,0.3);
                box-shadow: inset 0px 0px 17px 0px rgba(0,0,0,0.3);
        `
        );


        this.add_CSS_Class(
            `.image-container`,
            `
            width: 16em;
            height: 13em;
            position: relative;
            background-size: cover;
            margin-bottom: 3em;
            /* border-radius: 100%; */
            padding: -20em;
            bottom: 10%;
            -webkit-box-shadow: inset 0px 0px 17px 0px rgba(0,0,0,0.3);
            -moz-box-shadow: inset 0px 0px 17px 0px rgba(0,0,0,0.3);
            box-shadow: inset 0px 0px 17px 0px rgba(0,0,0,0.3);

        `,
        GALSAN_CreateBlock.Screen_Middle
        );


        this.add_CSS_Class(
            `.image-container`,
            `
            width: 16em;
            height: 13em;
            position: relative;
            background-size: cover;
            margin-bottom: 3em;
            /* border-radius: 100%; */
            padding: -20em;
            bottom: 10%;
            -webkit-box-shadow: inset 0px 0px 17px 0px rgba(0,0,0,0.3);
            -moz-box-shadow: inset 0px 0px 17px 0px rgba(0,0,0,0.3);
            box-shadow: inset 0px 0px 17px 0px rgba(0,0,0,0.3);

        `,
        GALSAN_CreateBlock.Screen_Mobile
        );


        this.add_CSS_Class(
            `.image-container::after`,
            `
                content: "";
                display: block;
                width: 120%;
                height: 120%;
                /* border: solid 3px rgba(0,0,0,.1); */
                /* border-radius: 100%; */
                box-shadow: 0px 0px 16px #ffffff47;
                position: absolute;
                top: calc(-10% - 3px);
                left: calc(-10% - 3px);
        `
        );


        this.add_CSS_Class(
            `h2`,
            `
            padding: 1em;
            margin-top: 1em;
            background: rgba(0,0,0,.3);
            text-align: center;
            color: white;
            border-radius: .2em;
            display: inline-block;
            transform: translateX(calc((100vw - 100%) / 2))

        `
        );

        this.add_CSS_Class(
            `h2 a`,
            `
            color: #f5b916;

        `
        );

        //Create html elements (Using DOM)

        //Create element and associate a classes
        var ContenedorPrincipal = this.CreateElement_(
            "div",
            `container`,
            null,
            GALSAN_CreateBlock.Site_Column_Center
        );

        ContenedorPrincipal.id = "ContenedorPrincipal_Carrousel";


        var card_Carrousel = this.CreateElement_(
            "div",
            `card-carousel`,
            null,
        );

        card_Carrousel.id = "card_Carrousel";

        /////////////////////////////
        // var card_ = this.CreateElement_(
        //     "div",
        //     `card`,
        //     null,
        // );

        // card_.id = 1;

        // var imageContainer_ = this.CreateElement_(
        //     "div",
        //     `image-container`,
        //     null,
        // );

        // card_.appendChild(imageContainer_);

        // var p__ = this.CreateElement_(
        //     "p",
        //     null,
        //     "FOTO 1",
        // );

        // card_.appendChild(p__);

        // card_Carrousel.appendChild(card_);


        // ////////////////
        // var card_ = this.CreateElement_(
        //     "div",
        //     `card`,
        //     null,
        // );

        // card_.id = 2;

        // var imageContainer_ = this.CreateElement_(
        //     "div",
        //     `image-container`,
        //     null,
        // );

        // card_.appendChild(imageContainer_);

        // var p__ = this.CreateElement_(
        //     "p",
        //     null,
        //     "FOTO 2",
        // );

        // card_.appendChild(p__);

        // card_Carrousel.appendChild(card_);



        // ////////////////
        // var card_ = this.CreateElement_(
        //     "div",
        //     `card`,
        //     null,
        // );

        // card_.id = 3;

        // var imageContainer_ = this.CreateElement_(
        //     "div",
        //     `image-container`,
        //     null,
        // );

        // card_.appendChild(imageContainer_);

        // var p__ = this.CreateElement_(
        //     "p",
        //     null,
        //     "FOTO 3",
        // );

        // card_.appendChild(p__);

        // card_Carrousel.appendChild(card_);


        // ////////////////
        // var card_ = this.CreateElement_(
        //     "div",
        //     `card`,
        //     null,
        // );

        // card_.id = 4;

        // var imageContainer_ = this.CreateElement_(
        //     "div",
        //     `image-container`,
        //     null,
        // );

        // card_.appendChild(imageContainer_);

        // var p__ = this.CreateElement_(
        //     "p",
        //     null,
        //     "FOTO 4",
        // );

        // card_.appendChild(p__);

        // card_Carrousel.appendChild(card_);

        // ////////////////
        // var card_ = this.CreateElement_(
        //     "div",
        //     `card`,
        //     null,
        // );

        // card_.id = 5;

        // var imageContainer_ = this.CreateElement_(
        //     "div",
        //     `image-container`,
        //     null,
        // );

        // card_.appendChild(imageContainer_);

        // var p__ = this.CreateElement_(
        //     "p",
        //     null,
        //     "FOTO 5",
        // );

        // card_.appendChild(p__);

        // card_Carrousel.appendChild(card_);

        ////////////////
        ////////////////FIN
        ContenedorPrincipal.appendChild(card_Carrousel);

        //ContenedorPrincipal.appendChild(Container_SUBTITLE);
    }
}

class DraggingEvent {
    constructor(target = undefined) {
        this.target = target;
    }

    event(callback) {
        let handler;

        this.target.addEventListener("mousedown", e => {
            e.preventDefault()

            handler = callback(e)

            window.addEventListener("mousemove", handler)

            document.addEventListener("mouseleave", clearDraggingEvent)

            window.addEventListener("mouseup", clearDraggingEvent)

            function clearDraggingEvent() {
                window.removeEventListener("mousemove", handler)
                window.removeEventListener("mouseup", clearDraggingEvent)

                document.removeEventListener("mouseleave", clearDraggingEvent)

                handler(null)
            }
        })

        this.target.addEventListener("touchstart", e => {
            handler = callback(e)

            window.addEventListener("touchmove", handler)

            window.addEventListener("touchend", clearDraggingEvent)

            document.body.addEventListener("mouseleave", clearDraggingEvent)

            function clearDraggingEvent() {
                window.removeEventListener("touchmove", handler)
                window.removeEventListener("touchend", clearDraggingEvent)

                handler(null)
            }
        })
    }

    // Get the distance that the user has dragged
    getDistance(callback) {
        function distanceInit(e1) {
            let startingX, startingY;

            if ("touches" in e1) {
                startingX = e1.touches[0].clientX
                startingY = e1.touches[0].clientY
            } else {
                startingX = e1.clientX
                startingY = e1.clientY
            }


            return function(e2) {
                if (e2 === null) {
                    return callback(null)
                } else {

                    if ("touches" in e2) {
                        return callback({
                            x: e2.touches[0].clientX - startingX,
                            y: e2.touches[0].clientY - startingY
                        })
                    } else {
                        return callback({
                            x: e2.clientX - startingX,
                            y: e2.clientY - startingY
                        })
                    }
                }
            }
        }

        this.event(distanceInit)
    }
}


class CardCarousel extends DraggingEvent {
    constructor(container, controller = undefined) {
        super(container)

        // DOM elements
        this.container = container
        this.controllerElement = controller
        this.cards = container.querySelectorAll(".HEGALPA_CARROUSELcard")

        // Carousel data
        this.centerIndex = (this.cards.length - 1) / 2;
        this.cardWidth = this.cards[0].offsetWidth / this.container.offsetWidth * 100
        this.xScale = {};

        // Resizing
        window.addEventListener("resize", this.updateCardWidth.bind(this))

        if (this.controllerElement) {
            this.controllerElement.addEventListener("keydown", this.controller.bind(this))
        }


        // Initializers
        this.build()

        // Bind dragging event
        super.getDistance(this.moveCards.bind(this))
    }

    updateCardWidth() {
        this.cardWidth = this.cards[0].offsetWidth / this.container.offsetWidth * 100

        this.build()
    }

    build(fix = 0) {
        for (let i = 0; i < this.cards.length; i++) {
            const x = i - this.centerIndex;
            const scale = this.calcScale(x)
            const scale2 = this.calcScale2(x)
            const zIndex = -(Math.abs(i - this.centerIndex))

            const leftPos = this.calcPos(x, scale2)


            this.xScale[x] = this.cards[i]

            this.updateCards(this.cards[i], {
                x: x,
                scale: scale,
                leftPos: leftPos,
                zIndex: zIndex
            })
        }
    }


    controller(e) {
        const temp = {
            ...this.xScale
        };

        if (e.keyCode === 39) {
            // Left arrow
            for (let x in this.xScale) {
                const newX = (parseInt(x) - 1 < -this.centerIndex) ? this.centerIndex : parseInt(x) - 1;

                temp[newX] = this.xScale[x]
            }
        }

        if (e.keyCode == 37) {
            // Right arrow
            for (let x in this.xScale) {
                const newX = (parseInt(x) + 1 > this.centerIndex) ? -this.centerIndex : parseInt(x) + 1;

                temp[newX] = this.xScale[x]
            }
        }

        this.xScale = temp;

        for (let x in temp) {
            const scale = this.calcScale(x),
                scale2 = this.calcScale2(x),
                leftPos = this.calcPos(x, scale2),
                zIndex = -Math.abs(x)

            this.updateCards(this.xScale[x], {
                x: x,
                scale: scale,
                leftPos: leftPos,
                zIndex: zIndex
            })
        }
    }

    calcPos(x, scale) {
        let formula;

        if (x < 0) {
            formula = (scale * 100 - this.cardWidth) / 2

            return formula

        } else if (x > 0) {
            formula = 100 - (scale * 100 + this.cardWidth) / 2

            return formula
        } else {
            formula = 100 - (scale * 100 + this.cardWidth) / 2

            return formula
        }
    }

    updateCards(card, data) {
        if (data.x || data.x == 0) {
            card.setAttribute("data-x", data.x)
        }

        if (data.scale || data.scale == 0) {
            card.style.transform = `scale(${data.scale})`

            if (data.scale == 0) {
                card.style.opacity = data.scale
            } else {
                card.style.opacity = 1;
            }
        }

        if (data.leftPos) {
            card.style.left = `${data.leftPos}%`
        }

        if (data.zIndex || data.zIndex == 0) {
            if (data.zIndex == 0) {
                card.classList.add("HEGALPA_CARROUSELhighlight")
            } else {
                card.classList.remove("HEGALPA_CARROUSELhighlight")
            }

            card.style.zIndex = data.zIndex
        }
    }

    calcScale2(x) {
        let formula;

        if (x <= 0) {
            formula = 1 - -1 / 5 * x

            return formula
        } else if (x > 0) {
            formula = 1 - 1 / 5 * x

            return formula
        }
    }

    calcScale(x) {
        const formula = 1 - 1 / 5 * Math.pow(x, 2)

        if (formula <= 0) {
            return 0
        } else {
            return formula
        }
    }

    checkOrdering(card, x, xDist) {
        const original = parseInt(card.dataset.x)
        const rounded = Math.round(xDist)
        let newX = x

        if (x !== x + rounded) {
            if (x + rounded > original) {
                if (x + rounded > this.centerIndex) {

                    newX = ((x + rounded - 1) - this.centerIndex) - rounded + -this.centerIndex
                }
            } else if (x + rounded < original) {
                if (x + rounded < -this.centerIndex) {

                    newX = ((x + rounded + 1) + this.centerIndex) - rounded + this.centerIndex
                }
            }

            this.xScale[newX + rounded] = card;
        }

        const temp = -Math.abs(newX + rounded)

        this.updateCards(card, {
            zIndex: temp
        })

        return newX;
    }

    moveCards(data) {
        let xDist;

        if (data != null) {
            this.container.classList.remove("HEGALPA_CARROUSELsmooth-return")
            xDist = data.x / 250;
        } else {


            this.container.classList.add("HEGALPA_CARROUSELsmooth-return")
            xDist = 0;

            for (let x in this.xScale) {
                this.updateCards(this.xScale[x], {
                    x: x,
                    zIndex: Math.abs(Math.abs(x) - this.centerIndex)
                })
            }
        }

        for (let i = 0; i < this.cards.length; i++) {
            const x = this.checkOrdering(this.cards[i], parseInt(this.cards[i].dataset.x), xDist),
                scale = this.calcScale(x + xDist),
                scale2 = this.calcScale2(x + xDist),
                leftPos = this.calcPos(x + xDist, scale2)


            this.updateCards(this.cards[i], {
                scale: scale,
                leftPos: leftPos
            })
        }
    }
}
/* 



var test = new HEGALPA_CARROUSEL();

test.addNewItem("./assets/img/carrousel/landing.png", "Una página de presentención es la opción ideal para tu negocio si tu intención es solo tener presencia en internet; mostrando tus productos y proporcionando opciones de contacto");
test.addNewItem("./assets/img/carrousel/tienda.jpg", "La tienda online te permitirá vender tus productos o serivios por internet y recibir pagos online a través de una pasarela bancaria");
test.addNewItem("./assets/img/carrousel/afiliados.jpg", "Página de productos afiliados. Anuncia productos de diversas tiendas online y recibe comisión por cada venta realizada a través de tu web");
test.addNewItem("./assets/img/carrousel/carta.jpg", "Carta digital para bar o restaurante. Creamos tu carta digital, la cual podrás actualizar tú mismo en cualquier momento y por si fuera poco, ¡también incluimos en este pack la web de presentacion de tu negocio!");
test.addNewItem("./assets/img/carrousel/paginawebb.jpg", "¿No encuentras aquí la solución digital a tu negocio? ¡Ningún problema! Nuestro equipo de desarrollo digital a medida te ayudará después de escuchar tu idea; tú nos cuentas y nosotros lo hacemos.");

HEGALPA_CARROUSEL.ChargeCarouselEngine(); 


*/
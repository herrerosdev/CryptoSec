class CEffects {


    ////////////////
    //CONSTRUCTOR///
    ////////////////
    constructor() {

    }


    //Movement div right to left and left to right
    static Horizontal_Movement_effect(id) {

        var element = document.getElementById(id);

        element.animate(
            [
                // keyframes
                { transform: "translateX(-50px)" },
                { transform: "translateX(50px)" },
                { transform: "translateX(-50px)" },
            ], {
                // timing options
                duration: 2000,
                iterations: 50,
            }
        );

    }

    static Rotate_Movement_effect(id) {

        var element = document.getElementById(id);

        element.animate(
            [
                // keyframes
                { transform: "rotate(-25deg)" },
                { transform: "rotate(25deg)" },
                { transform: "rotate(-25deg)" },
                { transform: "rotate(25deg)" },
                { transform: "rotate(-25deg)" },
                { transform: "rotate(-25deg)" },
                { transform: "rotate(-25deg)" },
                /*                 { transform: "rotate(0deg)" },
                 */
            ], {
                // timing options
                duration: 2000,
                iterations: 99
            }
        );

    }

//////Aplica el efecto fade a toda la pagina (bonito para iniciar)
    static Fade_Effect(Delay) {
        //Fade efect
        $(document).ready(function() {
            //$("body").hide();
            $("body").fadeIn(Delay);
        });
    }


    //////////Hace algo en eun elemento cuando el scroll llega a un punto
    static DoSomething_WhenScroll(id_header, level){

        let Semaphore = true;
        var element = document.getElementById(id_header);
        var elem = document.getElementById("ServicesCartHeaderGlobal");
        var collection = document.getElementById("ServicesCartHeaderSubtitle");


        window.addEventListener("scroll", function() {
            if(window.pageYOffset > level && Semaphore == true) {
           
                elem.classList.add(`ServicesCartHeaderHeaderTransformation`);
                elem.classList.remove(`ServicesCartHeaderHeader`);

                element.classList.add(`ServicesCartHeaderHegalpaMainHeaderTranformation`);
                element.classList.remove(`ServicesCartHeaderHegalpaMainHeader`);

                collection.classList.add(`ServicesCartHeaderSubtitleTransformation`);
                collection.classList.remove(`ServicesCartHeaderSubtitle`);

                Semaphore = false;

            }else if(window.pageYOffset <= level && Semaphore == false){

                elem.classList.add(`ServicesCartHeaderHeader`);
                elem.classList.remove(`ServicesCartHeaderHeaderTransformation`);

                element.classList.add(`ServicesCartHeaderHegalpaMainHeader`);
                element.classList.remove(`ServicesCartHeaderHegalpaMainHeaderTranformation`);

                collection.classList.add(`ServicesCartHeaderSubtitle`);
                collection.classList.remove(`ServicesCartHeaderSubtitleTransformation`);

                Semaphore = true;

            }
          })

    }


    static On_Scroll_height_Transform(Array_elements){

        var Main_element = document.getElementById(Array_elements[0].id)
        var Main_elementHeight = Main_element.offsetHeight;

        $(window).scroll(function() {
            var currentScroll = $(window).scrollTop();
            if (currentScroll >= Main_elementHeight) {
                for (let index = 0; index < Array_elements.length; index++) {
                    var element = document.getElementById(Array_elements[index].id);

                    if(Array_elements[index].Class_Transform) {
                     element.classList.add(Array_elements[index].Class_Transform);
          
                     }
                }           



            } else {
      
                for (let index = 0; index < Array_elements.length; index++) {
                    var element = document.getElementById(Array_elements[index].id);

                     if(Array_elements[index].Class_Transform) {
                        element.classList.remove(Array_elements[index].Class_Transform);
           
                    }
                }


            }
    });


    }


    ///not functional
    static On_Scroll_top_Transform(Array_elements){

        var Main_element = document.getElementById(Array_elements[0].id)
        var Main_elementTop = Main_element.offsetHeight;
        var bb = Main_element.getBoundingClientRect();
        var sdf = !(bb.top > innerHeight || bb.bottom < 0);
        var top_of_element = Main_element.offsetTop;
        var bottom_of_element = Main_element.offsetTop;+ $(`#Container_Main_Sections_ID`).outerHeight();
        var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
        var top_of_screen = $(window).scrollTop();

        if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
           
            console.log('if cond');
          } else {      
          
            console.log('else cond');
          }
        

        $(window).scroll(function() {
            var currentScroll = $(window).scrollTop();
            if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
                       
                for (let index = 0; index < Array_elements.length; index++) {
                    var element = document.getElementById(Array_elements[index].id);

                    if(Array_elements[index].Class_Transform) {
                     element.classList.add(Array_elements[index].Class_Transform);
          
                     }
                }   



            } else {
      


                for (let index = 0; index < Array_elements.length; index++) {
                    var element = document.getElementById(Array_elements[index].id);

                     if(Array_elements[index].Class_Transform) {
                        element.classList.remove(Array_elements[index].Class_Transform);
           
                    }
                }

            }
    });


    }
    

    


}
class NormasBlock {

    ////////////////
    //CONSTRUCTOR///
    ////////////////


    constructor() {

        //Create View: Dynamic HTMLL CSS: Node
        this.ViewConstructor();
    }




    //Create view of carrusel
    ViewConstructor() {

        //Add CSS
        GALSAN_CreateBlock.add_CSS_Class('.ContainerAvisoLegal',
            `
            width: 90%;
            height: auto;
            display: block;
            margin: 0 auto;

    
    `
        );

        GALSAN_CreateBlock.add_CSS_Class('.DivApartadoLegal',
        `
        width: 100%;
        display: block;
        padding: 2vw 0;


`
    );

    GALSAN_CreateBlock.add_CSS_Class('.ApartadoAvisoLegal',
    `

    font-size: 4vw;
    font-weight: bold;

`
);


    GALSAN_CreateBlock.add_CSS_Class('.TextoAvisoLegal',
    `
    text-align: justify;
    font-size: 3.5vw;
    padding: 1vw 0;


`
);





        //Create element and associate a classes

        var ContainerAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "ContainerAvisoLegal", null, GALSAN_CreateBlock.Site_Column_Center);

        var DivApartadoLegal = GALSAN_CreateBlock.CreateElement("div", "DivApartadoLegal");
        ContainerAvisoLegal.appendChild(DivApartadoLegal);

        var TextoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "TextoAvisoLegal", "El foro es un espacio de encuentro para todos, un lugar donde compartir informacion sobre la diabetes, explicar experiencias personales y hacer preguntas, todos los que formamos parte del foro intentaremos responderlas desde nuestra experiencia y con la mayor rigurosidad posible.");
        DivApartadoLegal.appendChild(TextoAvisoLegal);


        var TextoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "TextoAvisoLegal", "El foro esta ABIERTO PARA TODOS LOS PUBLICOS, lo que incluye a niños, jovenes y adultos, por lo que es muy importante expresarse adecuadamente, evitando palabras malsonantes, descalificaciones, publicidad, etc...");
        DivApartadoLegal.appendChild(TextoAvisoLegal);


        var TextoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "TextoAvisoLegal", "Con el fin de mantener estos principios, existe un equipo de moderadores del foro, que de forma altruista y desinteresada, vela por el cumplimiento de estos principios y las normas que se describen a continuación.")
        DivApartadoLegal.appendChild(TextoAvisoLegal);






        var DivApartadoLegal = GALSAN_CreateBlock.CreateElement("div", "DivApartadoLegal");
        ContainerAvisoLegal.appendChild(DivApartadoLegal);

        var ApartadoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "ApartadoAvisoLegal", "Normas del foro:");
        DivApartadoLegal.appendChild(ApartadoAvisoLegal);



        var TextoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "TextoAvisoLegal", "- Los Temas y Comentarios que incumplan las normas de uso del foro están sujetos a revisión por el equipo de moderadores del foro, quienes a su mejor criterio, decidirán y tomarán las medidas que se consideren necesarias para corregir dicha infracción.")
        DivApartadoLegal.appendChild(TextoAvisoLegal);

        var TextoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "TextoAvisoLegal", "- En ningún momento, vamos a hacer públicos: nombres, motivos, mensajes privados, etc... que vayan dirigidos a los moderadores, en especial en casos de Denuncia de temas o comentarios. Ni de manera pública, ni de manera privada.")
        DivApartadoLegal.appendChild(TextoAvisoLegal);

        var TextoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "TextoAvisoLegal", "- Las decisiones que tomamos como moderadores van encaminadas a que el foro tenga la máxima participación y máxima cordialidad posible.")
        DivApartadoLegal.appendChild(TextoAvisoLegal);

        var TextoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "TextoAvisoLegal", "- En este sentido, pedimos a todos los participantes del foro que en sus respuestas valoren y respeten al máximo a los foreros que inician un hilo o emiten una opinión, entendiendo que contar una experiencia personal, exponer una duda o solicitar ayuda es el fin de este foro.")
        DivApartadoLegal.appendChild(TextoAvisoLegal);

        var TextoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "TextoAvisoLegal", "- Pensamos que, en el contexto del foro, a veces vale más un poco de cariño y comprensión que una explicación racional o médica sobre una situación.")
        DivApartadoLegal.appendChild(TextoAvisoLegal);

        var TextoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "TextoAvisoLegal", "- Nos reafirmamos en nuestra intención de borrar y banear a todos aquellos que pretendan lucrarse vendiendo cualquier tipo de cura milagrosa para la diabetes, incluyendo webs, correos, libros o cualquier otro medio no aceptado por la comunidad científica, y que por tanto, carezca de una base demostrable.")
        DivApartadoLegal.appendChild(TextoAvisoLegal);


        var TextoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "TextoAvisoLegal", "- También se considerará como publicidad el uso reiterado del foro con enlaces a otras webs, cuando se manifieste de forma clara que la intención de estos mensajes es la de obtener visitas y/o usuarios.")
        DivApartadoLegal.appendChild(TextoAvisoLegal);

        
        var TextoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "TextoAvisoLegal", "- LLegados a este punto, banearemos a los usuarios infractores y/o editaremos o borraremos los mensajes que incumplan estas normas.")
        DivApartadoLegal.appendChild(TextoAvisoLegal);



        var TextoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "TextoAvisoLegal", "Esperamos que siguiendo estas buenas prácticas y el sentido común, para el objetivo que el foro persigue, consigamos entre todos, la mejor calidad de los contenidos publicados, y sea así de mayor ayuda para diabéticos, padres, familiares y amigos!")
        DivApartadoLegal.appendChild(TextoAvisoLegal);




    }
}




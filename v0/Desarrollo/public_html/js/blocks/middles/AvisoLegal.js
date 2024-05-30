class AvisoLegalBlock {

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
    font-size: 2vw;
    padding: 1vw 0;


`
);


GALSAN_CreateBlock.add_CSS_Class('.TextoAvisoLegal',
`
text-align: justify;
font-size: 3.5vw;
padding: 1vw 0;


`, GALSAN_CreateBlock.Screen_Middle
);





        //Create element and associate a classes

        var ContainerAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "ContainerAvisoLegal", null, GALSAN_CreateBlock.Site_Column_Center);

        var DivApartadoLegal = GALSAN_CreateBlock.CreateElement("div", "DivApartadoLegal");
        ContainerAvisoLegal.appendChild(DivApartadoLegal);

        var ApartadoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "ApartadoAvisoLegal", "1. Datos de identificación");
        DivApartadoLegal.appendChild(ApartadoAvisoLegal);

        var TextoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "TextoAvisoLegal", "Usted está visitando la página Web www.MellitusForum.com, (en adelante EL FORO).");
        DivApartadoLegal.appendChild(TextoAvisoLegal);

        var DivApartadoLegal = GALSAN_CreateBlock.CreateElement("div", "DivApartadoLegal");
        ContainerAvisoLegal.appendChild(DivApartadoLegal);

        var ApartadoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "ApartadoAvisoLegal", "2.  Aceptación del Usuario");
        DivApartadoLegal.appendChild(ApartadoAvisoLegal);


        var TextoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "TextoAvisoLegal", "Este Aviso Legal regula el acceso y utilización de la página web www.MellitusForum.com (en adelante la “Web”) que EL FORO pone a disposición de los usuarios de Internet. Se entiende por usuario la persona que acceda, navegue, utilice o participe en los servicios y actividades de la Web. El acceso y navegación de un usuario por la Web implica la aceptación sin reservas del presente Aviso Legal. EL FORO puede ofrecer a través de la página web servicios que podrán encontrarse sometidos a unas condiciones particulares propias sobre las cuales se informará al Usuario en cada caso concreto");
        DivApartadoLegal.appendChild(TextoAvisoLegal);


        var DivApartadoLegal = GALSAN_CreateBlock.CreateElement("div", "DivApartadoLegal");
        ContainerAvisoLegal.appendChild(DivApartadoLegal);

        var ApartadoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "ApartadoAvisoLegal", "3. Utilización de la Web");
        DivApartadoLegal.appendChild(ApartadoAvisoLegal);


        var TextoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "TextoAvisoLegal", "3.1. El usuario se compromete a utilizar la Web, los contenidos y servicios de conformidad con la Ley, el presente Aviso Legal, las buenas costumbres y el orden público. Del mismo modo el Usuario se obliga a no utilizar la Web o los servicios que se presten a través de él con fines o efectos ilícitos o contrarios al contenido del presente Aviso Legal, lesivos de los intereses o derechos de terceros, o que de cualquier forma pueda dañar, inutilizar o deteriorar la Web o sus servicios o impedir un normal disfrute de la Web por otros Usuarios.")
        DivApartadoLegal.appendChild(TextoAvisoLegal);

        
        var TextoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "TextoAvisoLegal", "3.2. El usuario se compromete expresamente a no destruir, alterar, inutilizar o, de cualquier otra forma, dañar los datos, programas o documentos electrónicos y demás que se encuentren en la Web.")
        DivApartadoLegal.appendChild(TextoAvisoLegal);

                
        var TextoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "TextoAvisoLegal", "3.3. El usuario se compromete a no obstaculizar el acceso a otros usuarios al servicio de acceso mediante el consumo masivo de los recursos informáticos a través de los cuales EL FORO presta el servicio, así como realizar acciones que dañen, interrumpan o generen errores en dichos sistemas o servicios.")
        DivApartadoLegal.appendChild(TextoAvisoLegal);

        var TextoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "TextoAvisoLegal", "3.4. El usuario se compromete a no introducir programas, virus, macros, applets, controles ActiveX o cualquier otro dispositivo lógico o secuencia de caracteres que causen o sean susceptibles de causar cualquier tipo de alteración en los sistemas informáticos de EL FORO o de terceros.")
        DivApartadoLegal.appendChild(TextoAvisoLegal);

        var TextoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "TextoAvisoLegal", "3.5. El usuario se compromete a no obtener informaciones, mensajes, gráficos, dibujos, archivos de sonido y/o imagen, fotografías, grabaciones, software y en general, cualquier clase de material accesible a través de la Web o de los servicios ofrecidos en el mismo.")
        DivApartadoLegal.appendChild(TextoAvisoLegal);

        var TextoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "TextoAvisoLegal", "3.6. Se entiende que el acceso o utilización de la Web por parte del usuario implica la aceptación por éste del Aviso Legal que EL FORO tenga publicadas en el momento del acceso, las cuales estarán siempre disponibles para los usuarios.")
        DivApartadoLegal.appendChild(TextoAvisoLegal);

        var TextoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "TextoAvisoLegal", "3.7. El usuario se compromete a hacer un uso adecuado de los contenidos y servicios (como por ejemplo los comentarios, foros de opinión o páginas abiertas al lector) que EL FORO ofrece en su sede Web y a no emplearlos para incurrir en actividades ilícitas o contrarias a la buena fe y al ordenamiento legal; difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico-ilegal, de apología del terrorismo o atentatorio contra los derechos humanos.")
        DivApartadoLegal.appendChild(TextoAvisoLegal);




        var DivApartadoLegal = GALSAN_CreateBlock.CreateElement("div", "DivApartadoLegal");
        ContainerAvisoLegal.appendChild(DivApartadoLegal);

        var ApartadoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "ApartadoAvisoLegal", "4. Acceso a la Web y Contraseñas");
        DivApartadoLegal.appendChild(ApartadoAvisoLegal);


        var TextoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "TextoAvisoLegal", "4.1. El acceso a la Web por parte de los usuarios tiene carácter libre y gratuito. Algunos de los servicios y contenidos ofrecidos por EL FORO pueden encontrarse sujetos a contratación previa del servicio y al pago de una cantidad de dinero en la forma que se determine en las Condiciones Generales de Contratación, en cuyo caso se pondrán a su disposición de forma clara.")
        DivApartadoLegal.appendChild(TextoAvisoLegal);

        var TextoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "TextoAvisoLegal", "4.2. Cuando sea necesario que el usuario se registre o aporte datos personales para poder acceder a alguno de los servicios, la recogida y el tratamiento de los datos personales de los usuarios será de aplicación lo dispuesto en el apartado 9 de este Aviso Legal, así como lo dispuesto en las Condiciones de Registro.")
        DivApartadoLegal.appendChild(TextoAvisoLegal);

        var TextoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "TextoAvisoLegal", "4.3. Queda prohibida la contratación de productos o servicios a través de la Web por parte de menores de edad, debiendo obtener debidamente y con anterioridad, el consentimiento de sus padres, tutores o representantes legales, los cuales serán considerados como responsables de los actos que lleven a cabo los menores a su cargo.")
        DivApartadoLegal.appendChild(TextoAvisoLegal);

        var TextoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "TextoAvisoLegal", "4.4. Si para la utilización de un servicio en la Web, el usuario debiera proceder a su registro, éste será responsable de aportar información veraz y lícita. Si como consecuencia del registro, se dotará al usuario de una contraseña, éste se compromete a hacer un uso diligente y a mantener en secreto la contraseña para acceder a estos servicios. Los usuarios son responsables de la adecuada custodia y confidencialidad de cualesquiera identificadores y/o contraseñas que le sean suministradas por EL FORO y se comprometen a no ceder su uso a terceros, ya sea temporal o permanente, ni a permitir su acceso a personas ajenas. Será responsabilidad del usuario la utilización de los servicios por cualquier tercero ilegítimo que emplee a tal efecto una contraseña a causa de una utilización no diligente o de la pérdida de la misma por el usuario.")
        DivApartadoLegal.appendChild(TextoAvisoLegal);

        var TextoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "TextoAvisoLegal", "4.5. El usuario está obligado a notificar de forma inmediata a EL FORO cualquier hecho que permita el uso indebido de los identificadores y/o contraseñas, tales como el robo, extravío, o el acceso no autorizado a los mismos, con el fin de proceder a su inmediata cancelación. Mientras no se comuniquen tales hechos, EL FORO quedará eximida de cualquier responsabilidad que pudiera derivarse del uso indebido de los identificadores y/o contraseñas por terceros no autorizados.")
        DivApartadoLegal.appendChild(TextoAvisoLegal);





        var DivApartadoLegal = GALSAN_CreateBlock.CreateElement("div", "DivApartadoLegal");
        ContainerAvisoLegal.appendChild(DivApartadoLegal);

        var ApartadoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "ApartadoAvisoLegal", "5. Modificación de las condiciones del Aviso Legal");
        DivApartadoLegal.appendChild(ApartadoAvisoLegal);


        var TextoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "TextoAvisoLegal", "EL FORO se reserva expresamente el derecho a modificar el presente Aviso Legal. El usuario reconoce y acepta que es su responsabilidad revisar la Web y el presente Aviso Legal.")
        DivApartadoLegal.appendChild(TextoAvisoLegal);






        var DivApartadoLegal = GALSAN_CreateBlock.CreateElement("div", "DivApartadoLegal");
        ContainerAvisoLegal.appendChild(DivApartadoLegal);

        var ApartadoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "ApartadoAvisoLegal", "6. Limitación de garantías y responsabilidades");
        DivApartadoLegal.appendChild(ApartadoAvisoLegal);


        var TextoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "TextoAvisoLegal", "6.1. EL FORO se compromete a realizar sus mejores esfuerzos para evitar cualquier error en los contenidos que pudieran aparecer en la Web. En cualquier caso, EL FORO estará exenta de cualquier responsabilidad derivada de eventuales errores en los contenidos que pudieran aparecer en la Web, siempre que no le sean imputables.")
        DivApartadoLegal.appendChild(TextoAvisoLegal);

        
        var TextoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "TextoAvisoLegal", "6.2. EL FORO no garantiza que la Web y el servidor estén libres de virus y no se hace responsable de los posibles daños o perjuicios que se puedan derivar de interferencias, omisiones, interrupciones, virus informáticos, averías telefónicas o desconexiones en el funcionamiento operativo de este sistema electrónico, motivado por causas ajenas a EL FORO, de retrasos o bloqueos en el uso de este sistema electrónico causados por deficiencias de líneas telefónicas o sobrecargas en el sistema de Internet o en otros sistemas electrónicos, así como también de daños que puedan ser causados por terceras personas mediante intromisiones ilegítimas fuera del control de EL FORO.")
        DivApartadoLegal.appendChild(TextoAvisoLegal);







        var DivApartadoLegal = GALSAN_CreateBlock.CreateElement("div", "DivApartadoLegal");
        ContainerAvisoLegal.appendChild(DivApartadoLegal);

        var ApartadoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "ApartadoAvisoLegal", "7. Propiedad Intelectual e Industrial. Todos los derechos reservados.");
        DivApartadoLegal.appendChild(ApartadoAvisoLegal);


        var TextoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "TextoAvisoLegal", "7.1. Todos los derechos de Propiedad Industrial e Intelectual de la Web www.MellitusForum.com y de sus contenidos (textos, imágenes, sonidos, audio, vídeo, diseños, creatividades, software) pertenecen, como autor de obra colectiva o como cesionaria, a EL FORO o, en su caso, a terceras personas.")
        DivApartadoLegal.appendChild(TextoAvisoLegal);

        var TextoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "TextoAvisoLegal", "7.2. Quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página Web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de EL FORO. El usuario se compromete a respetar los derechos de Propiedad Industrial e Intelectual titularidad de EL FORO y de terceros.")
        DivApartadoLegal.appendChild(TextoAvisoLegal);

        var TextoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "TextoAvisoLegal", "7.3. A los efectos de lo previsto en el artículo 32.1 del Texto Refundido de la Ley de Propiedad Intelectual, EL FORO se opone expresamente a la utilización de cualesquiera contenidos de este diario con la finalidad de realizar reseñas o revistas de prensa con fines comerciales (press-clipping) sin contar con la previa autorización de EL FORO.")
        DivApartadoLegal.appendChild(TextoAvisoLegal);

        var TextoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "TextoAvisoLegal", "7.4. El usuario puede visualizar todos los elementos, imprimirlos, copiarlos y almacenarlos en el disco duro de su ordenador o en cualquier otro soporte físico siempre y cuando sea, única y exclusivamente, para su uso personal y privado, quedando, por tanto, terminantemente prohibida su utilización con fines comerciales, su distribución, así como su modificación, alteración o descompilación.")
        DivApartadoLegal.appendChild(TextoAvisoLegal);

        var TextoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "TextoAvisoLegal", "7.5. EL FORO proporciona el acceso a todo tipo de informaciones, servicios, programas o datos en Internet que pueden pertenecer a terceras personas, en cuyo caso EL FORO no se hace responsable de dichos contenidos ni de cuantas reclamaciones puedan derivarse de la calidad, fiabilidad, exactitud o corrección de los mismos.")
        DivApartadoLegal.appendChild(TextoAvisoLegal);






        var DivApartadoLegal = GALSAN_CreateBlock.CreateElement("div", "DivApartadoLegal");
        ContainerAvisoLegal.appendChild(DivApartadoLegal);

        var ApartadoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "ApartadoAvisoLegal", "8. Enlaces de terceros");
        DivApartadoLegal.appendChild(ApartadoAvisoLegal);


        var TextoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "TextoAvisoLegal", "8.1. En el supuesto de que en la Web se dispusieran enlaces o hipervínculos hacia otros lugares de Internet, EL FORO no ejercerá ningún tipo de control sobre estos lugares y contenidos. En ningún caso EL FORO asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente a un lugar Web ajeno, ni garantizará la disponibilidad técnica, calidad, fiabilidad, exactitud, amplitud, veracidad, validez y constitucionalidad de cualquier material o información contenida en cabeza de los hipervínculos u otros lugares de Internet.")
        DivApartadoLegal.appendChild(TextoAvisoLegal);

        var TextoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "TextoAvisoLegal", "8.2. Estos enlaces se proporcionan únicamente para informar al Usuario sobre la existencia de otras fuentes de información sobre un tema concreto, y la inclusión de un enlace no implica la aprobación de la página web enlazada por parte de EL FORO.")
        DivApartadoLegal.appendChild(TextoAvisoLegal);

        var TextoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "TextoAvisoLegal", "8.3. EL FORO tan sólo autoriza menciones a sus contenidos en otras sedes Web, con el tratamiento que éstas consideren siempre que sea respetuoso, cumpla la legislación vigente y en ningún caso reproduzcan, sin la debida autorización, los contenidos de EL FORO.")
        DivApartadoLegal.appendChild(TextoAvisoLegal);



        var DivApartadoLegal = GALSAN_CreateBlock.CreateElement("div", "DivApartadoLegal");
        ContainerAvisoLegal.appendChild(DivApartadoLegal);

        var ApartadoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "ApartadoAvisoLegal", "9. Protección de Datos Personales");
        DivApartadoLegal.appendChild(ApartadoAvisoLegal);


        var TextoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "TextoAvisoLegal", "9.1. EL FORO adopta las medidas técnicas y organizativas necesarias para garantizar la protección de los datos de carácter personal y evitar su alteración, pérdida, tratamiento y/o acceso no autorizado, habida cuenta del estado de la técnica, la naturaleza de los datos almacenados y los riesgos a que están expuestos, todo ello, conforme a lo establecido por la legislación española de Protección de Datos de Carácter Personal.")
        DivApartadoLegal.appendChild(TextoAvisoLegal);

        var TextoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "TextoAvisoLegal", "9.2. El usuario podrá remitir a EL FORO sus datos de carácter personal a través de los distintos formularios que a tal efecto aparecen en la Web. Dichos formularios incorporan un texto legal en materia de protección de datos personales que da cumplimiento a las exigencias establecidas en la Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal, y en su Reglamento de Desarrollo, aprobado por el Real Decreto 1720/2007, de 21 de diciembre.")
        DivApartadoLegal.appendChild(TextoAvisoLegal);

        var TextoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "TextoAvisoLegal", "9.3. Rogamos lea atentamente los textos legales antes de facilitar sus datos de carácter personal.")
        DivApartadoLegal.appendChild(TextoAvisoLegal);



        var DivApartadoLegal = GALSAN_CreateBlock.CreateElement("div", "DivApartadoLegal");
        ContainerAvisoLegal.appendChild(DivApartadoLegal);

        var ApartadoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "ApartadoAvisoLegal", "10. Ley y jurisdicción");
        DivApartadoLegal.appendChild(ApartadoAvisoLegal);


        var TextoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "TextoAvisoLegal", "Todas las cuestiones que se susciten entre EL FORO y el usuario relativas a la interpretación, cumplimiento y validez del presente Aviso Legal se regirán por sus propias cláusulas y, en lo que en ellas no estuviere previsto, de acuerdo con la legislación española, sometiéndose expresamente las partes a la jurisdicción de los Juzgados y Tribunales del domicilio de EL FORO.")
        DivApartadoLegal.appendChild(TextoAvisoLegal);





        var DivApartadoLegal = GALSAN_CreateBlock.CreateElement("div", "DivApartadoLegal");
        ContainerAvisoLegal.appendChild(DivApartadoLegal);

        var ApartadoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "ApartadoAvisoLegal", "11. Política de Cookies");
        DivApartadoLegal.appendChild(ApartadoAvisoLegal);


        var TextoAvisoLegal = GALSAN_CreateBlock.CreateElement("div", "TextoAvisoLegal", "Esta web utiliza cookies propias y de terceros para mejorar la experiencia de usuario y ofrecer contenidos adaptados a sus intereses, mediante la personalización de espacios publicitarios. Con el registro en la web y/o la mera navegación (con el navegador habilitado para aceptar cookies), el usuario acepta la instalación de cookies, salvo que se oponga, según se detalla en esta Política de Cookies. Nuestra Política de Cookies esta sujeta a actualizaciones periódicas. Su propósito es ayudarle a comprender el uso que hacemos de las cookies, la finalidad de las cookies utilizadas, así como las opciones que tiene el usuario para gestionarlas. Los usuarios pueden acceder a esta información en todo momento a través del link habilitado en la web (información legal ) . Asimismo, podrán modificar sus preferencias sobre la aceptación de cookies a través de las opciones de su navegador. La Política de Cookies del FORO comprende tanto el dominio MellitusForum.com, como otra serie de dominios titularidad del FORO, (operativos actualmente o que puedan habilitarse en un futuro) para ofrecer servicios similares o complementarios a los de MellitusForum.com.")
        DivApartadoLegal.appendChild(TextoAvisoLegal);


    }
}








class CBlocks {

    static Separator_Char = " # "; //Separador que divide los valores de los parametros en la base de datos

    static Selector = {
        "PortadaIT": {
            "Init": function(Params = null, Obj = null) { return new PortadaIT(Params);},
            "addItem": function(Params = null, Obj = null) { return 0 }
        },
        "SeparatorIT": {
            "Init": function(Params = null, Obj = null) { return new SeparatorIT(Params);},
            "addItem": function(Params = null, Obj = null) { return Obj.AddFeature(Params);}
        },
        "HeaderLandingIT": {
            "Init": function(Params = null, Obj = null) { return new HeaderLandingIT(Params)},
            "addItem": function(Params = null, Obj = null) { return Obj.AddButton(Params);}
        },
        "GridItemBlock": {
            "Init": function(Params = null, Obj = null) { return new GridItemBlock()},
            "addItem": function(Params = null, Obj = null) {
                return Obj.Put_Space(Params);
            }
        },
        "Grid_Plans": {
            "Init": function(Params = null, Obj = null) { return new Grid_Plans()},
            "addItem": function(Params = null, Obj = null) {
                return Obj.Offer_plan(Params);
            }
        },
        "SimpleOneLineFoot": {
            "Init": function(Params = null, Obj = null) { return new SimpleOneLineFoot(Params);},
            "addItem": function(Params = null, Obj = null) { return Obj.Add_Text(Params);}
        },
        "HegalpaFooter": {
            "Init": function(Params = null, Obj = null) { return new HegalpaFooter();},
            "addItem": function(Params = null, Obj = null) { return Obj.AddSocialLink(Params);}
        },
        "ButtonsContactBlock": {
            "Init": function(Params = null, Obj = null) { return new ButtonsContactBlock(); },
            "addItem": function(Params = null, Obj = null) { return Obj.Set_Links_Contacts(Params); }
        },
        "CabeceraProfesional": {
            "Init": function(Params = null, Obj = null) { return new CabeceraProfesional(Params); },
            "addItem": function(Params = null, Obj = null) {return 0; }
        },
        "MaquinaEscribir": {
            "Init": function(Params = null, Obj = null) { return new MaquinaEscribir(); },
            "addItem": function(Params = null, Obj = null) {CUtils.Delay(function(){Obj.New_Line(Params)})
            ; }
        },
        "Button_AtulPrajapati": {
            "Init": function(Params = null, Obj = null) { return new Button_AtulPrajapati(0); },
            "addItem": function(Params = null, Obj = null) {Obj.addButton(Params)
            ; }
        },
        "POPUP_Login": {
            "Init": function(Params = null, Obj = null) { return new POPUP_Login(Params); },
            "addItem": function(Params = null, Obj = null) {return 0;}
        },
        "BlogPost": {
            "Init": function(Params = null, Obj = null) { return new BlogPost(Params, CTEXTProcessor.TAGs_Flipping(Params.Text)); },
            "addItem": function(Params = null, Obj = null) {return 0;}
        },
        "POPUP_Info": {
            "Init": function(Params = null, Obj = null) { return new POPUP_Info(Params, CTEXTProcessor.TAGs_Flipping(Params.Title)) },
            "addItem": function(Params = null, Obj = null) {return 0;}
        },

        "Grid_Buttons_List": {
            "Init": function(Params = null, Obj = null) { return new Grid_Buttons_List() },
            "addItem": function(Params = null, Obj = null) {return Obj.AddButton(Params);}
        },

        "Bill_Block": {
            "Init": function(Params = null, Obj = null) { return new CBill_Block(Params) },
            "addItem": function(Params = null, Obj = null) { return Obj.AddButton(Params[0], Params[1]); }
        },

        "Sidebar_Social": {
            "Init": function(Params = null, Obj = null) { return new Social_Media_Sidebar(Params) },
            "addItem": function(Params = null, Obj = null) { return Obj.Add_Social_Media(Params);}
        },

        "Cookies_Panel": {
            "Init": function(Params = null, Obj = null) { return new Cookies_Panel(Params) },
            "addItem": function(Params = null, Obj = null) { return Obj.Add_Panel(Params);}
        },

        "Portada_Image": {
            "Init": function(Params = null, Obj = null) { return new Portada_Image(Params) },
            "addItem": function(Params = null, Obj = null) { return Obj.AddButton(Params); }
        },

        "Gallery_Zigzag": {
            "Init": function(Params = null, Obj = null) { return new Gallery_Zigzag(Params) },
            "addItem": function(Params = null, Obj = null) { return Obj.Add_Panel(Params);}
        },

        
        "Map_Block": {
            "Init": function(Params = null, Obj = null) { return new Map_Block(Params) },
            "addItem": function(Params = null, Obj = null) {return 0;}
        },

        "Loader_Block": {
            "Init": function(Params = null, Obj = null) { return new LoaderPaul(Params);},
            "addItem": function(Params = null, Obj = null) { return 0;}
        },

        "Sections_footer": {
            "Init": function(Params = null, Obj = null) { return new Sections_footer(Params) },
            "addItem": function(Params = null, Obj = null) { return Obj.AddSection(Params);}
        },

        "Form_block": {
            "Init": function(Params = null, Obj = null) { return new Form_block(Params) },
            "addItem": function(Params = null, Obj = null) {return 0;}
        },

        "Process_tree": {
            "Init": function(Params = null, Obj = null) { return new Process_tree(Params) },
            "addItem": function(Params = null, Obj = null) {return Obj.AddSection(Params);}
        },
        
        "Asked_Questions": {
            "Init": function(Params = null, Obj = null) {return Asked_Questions.Asked = new Asked_Questions(Params);},
            "addItem": function(Params = null, Obj = null) {return Obj.Add_Question(Params);}
        },
        
        "Carrousel_Block": {
            "Init": function(Params = null, Obj = null) {return CarrouselBlock.o_Carrousel = new CarrouselBlock(Params);},
            "addItem": function(Params = null, Obj = null) {return Obj.Add_Image(Params);}
        },

        "Goals": {
            "Init": function(Params = null, Obj = null) {return Goals_proyect.o_Goals = new Goals_proyect(Params);},
            "addItem": function(Params = null, Obj = null)  {return 0;}
        },

        "Gallery_Grid": {
            "Init": function(Params = null, Obj = null) {return Gallery_Grid.o_Gallery = new Gallery_Grid(Params);},
            "addItem": function(Params = null, Obj = null)  {return 0;}
        },

        "Portada_Collage": {
            "Init": function(Params = null, Obj = null) { return new Portada_Collage(Params) },
            "addItem": function(Params = null, Obj = null) {return 0;}
        },

        "BannerScroll": {
            "Init": function(Params = null, Obj = null) {return BannerScroll.Banner = new BannerScroll(Params) },
            "addItem": function(Params = null, Obj = null) {return 0;}
        },

        "ServicesHexagon": {
            "Init": function(Params = null, Obj = null) {return ServicesHexagon.o_Hexagon = new ServicesHexagon(Params) },
            "addItem": function(Params = null, Obj = null) {return Obj.Add_Hexagon(Params);}
        },
        "Social_Footer": {
            "Init": function(Params = null, Obj = null) {return new Social_Footer(Params) },
            "addItem": function(Params = null, Obj = null) {return Obj.Add_Social_Foot(Params);}
        },

        "Card_3D": {
            "Init": function(Params = null, Obj = null) {return Card_3D.o_3D = new Card_3D(Params);},
            "addItem": function(Params = null, Obj = null) {return Obj.Add_Card(Params);}
        },

        "Parallax_Block": {
            "Init": function(Params = null, Obj = null) {return new Parallax_Block(Params);},
            "addItem": function(Params = null, Obj = null) {return Obj.Add_Section(Params);}
        },

        "Portada_Carrousel_Restaurant": {
            "Init": function(Params = null, Obj = null) { return Portada_Carrousel_Restaurant.o_Port_ = new Portada_Carrousel_Restaurant(Params) },
            "addItem": function(Params = null, Obj = null) { return Obj.AddItemCarrousel(Params); }
        },

        "Basic_Nav": {
            "Init": function(Params = null, Obj = null) { return Basic_Nav.o_Nav_ = new Basic_Nav(Params) },
            "addItem": function(Params = null, Obj = null) { return Obj.AddButton(Params); }
        },

        "Recommendations": {
            "Init": function(Params = null, Obj = null) { return Recommendations.o_Rec_ =new Recommendations(Params) },
            "addItem": function(Params = null, Obj = null) { return Obj.AddRecommendation(Params); }
        },

        "Image_Overlap": {
            "Init": function(Params = null, Obj = null) { return new ImageOverlapBlock(Params) },
            "addItem": function(Params = null, Obj = null) { return Obj.AddBlock(Params); }
        },

        "Grid_Show_Ads": {
            "Init": function(Params = null, Obj = null) { return new Grid_Show_Ads()},
            "addItem": function(Params = null, Obj = null) {return Obj.Put_Space(Params);}
        },

        "List_In_Movement_Menu": {
            "Init": function(Params = null, Obj = null) { return List_In_Movement_Menu.o_Res_Mov = new List_In_Movement_Menu(Params)},
            "addItem": function(Params = null, Obj = null) {return Obj.Add_Category_And_Items(Params);}
        },

        "Multiple_Carrousel_Vertical": {
            "Init": function(Params = null, Obj = null) { return Multiple_Carrousel_Vertical.o_Mult_Carrousel= new Multiple_Carrousel_Vertical(Params)},
            "addItem": function(Params = null, Obj = null) {return Obj.AddItemCarrousel(Params);}
        },

        
        "Caracteristics_List": {
            "Init": function(Params = null, Obj = null) { return Caracteristics_List.o_Caracteristics_List= new Caracteristics_List(Params)},
            "addItem": function(Params = null, Obj = null) {return Obj.AddCaracteristic(Params);}
        },

        "Recommendations2": {
            "Init": function(Params = null, Obj = null) { return Recommendations2.o_Rec_2 =new Recommendations2(Params) },
            "addItem": function(Params = null, Obj = null) { return Obj.AddRecommendation(Params); }

        },
        "HeaderClassicMF": {
            "Init": function(Params = null, Obj = null) {return new CClassicHeader(Params);},
            "addItem": function(Params = null, Obj = null) {return Obj.Add_Card(Params);}
        },

    }

    //Procesa y parsea los datos cuando vienen de la base de datos 
    static Processor(dataBlocks) {
        var BLOCK_NAME = null;
        var Obj = null;

        for (let i = 0; i < dataBlocks.length; i++) {

            if (dataBlocks[i].BLOCK_NAME !== null) {

                BLOCK_NAME = dataBlocks[i].BLOCK_NAME;

                //sanitize if null param is received
                dataBlocks[i].BLOCK_PARAMS = dataBlocks[i].BLOCK_PARAMS !== null ? dataBlocks[i].BLOCK_PARAMS : "";

               
                //Inicializamos el bloque con su parametros si tiene
                Obj = CBlocks.Selector[BLOCK_NAME].Init(JSON.parse(dataBlocks[i].BLOCK_PARAMS));
            

            } else {
               
                CBlocks.Selector[BLOCK_NAME].addItem(JSON.parse(dataBlocks[i].BLOCK_PARAMS), Obj); //Inicializamos el bloque con su parametros si tiene
               // dataBlocks[i].BLOCK_PARAMS.split(CBlocks.Separator_Char)
            }
        }
    }

}
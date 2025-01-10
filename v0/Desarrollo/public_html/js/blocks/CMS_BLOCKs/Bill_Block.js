class CBill_Block {

    constructor(Json_Data_bill) {

        this.Json_Data_bill_ = Json_Data_bill;

        this.CreateElement_ = GALSAN_CreateBlock.CreateElementSigned;
        this.add_CSS_Class = GALSAN_CreateBlock.add_CSS_Class_SIGNED;


        this.CreateView();
    }


    static Type_Date = 0;
    static Type_Text = 1;
    static Type_Text_None = 2
    static Type_Selector = 3;
    static Type_Expiry_Date = 4;


    getClassName() {
        return this.constructor.name;
    }



    static callback_Service_Add = function() {};


    callback_Add_line(CALLBACK_FUNCTION) {

        CBill_Block.callback_Service_Add = CALLBACK_FUNCTION;

    }

    static Check_Fields_CALLBACK = function() {};

    Callback_Check(CALLBACK_FUNCTION) {

        CBill_Block.Check_Fields_CALLBACK = CALLBACK_FUNCTION;

    }

    static Calculate_CALLBACK = function() {};

    callback_Calculate_All_Parameters(CALLBACK_FUNCTION) {

        CBill_Block.Calculate_CALLBACK = CALLBACK_FUNCTION;

    }

    


   
   GenerateContent(){

    var Container_fluidID = document.getElementById("Container_fluidID");

    var ContenedorPrincipal = this.CreateElement_(
        "div",
        `Container_fluid`,
        null,
        GALSAN_CreateBlock.Site_Column_Center
    );

    Container_fluidID.appendChild(ContenedorPrincipal);

    var div_Container_header = this.CreateElement_(
        "div",
        `div_Container_header`
    );

    ContenedorPrincipal.appendChild(div_Container_header);

    var div_col_title = this.CreateElement_(
        "div",
        `div_col_title`
    );

    div_Container_header.appendChild(div_col_title);


    var h1_tile = this.CreateElement_(
        "h1",
        `h1_tile`,
        this.Json_Data_bill_.Header
    );

    div_col_title.appendChild(h1_tile);

    var div_row = this.CreateElement_(
        "div",
        `div_row`
    );

    div_col_title.appendChild(div_row);


    var p_Data = this.CreateElement_(
        "p",
        `p_Data_header`,
        this.Json_Data_bill_.Date
    );

    div_row.appendChild(p_Data);

    var Input = this.Select_input(this.Json_Data_bill_.Type_Date); 

    GALSAN_CreateBlock.AttachID(Input.firstChild, "Date_Register");

    GALSAN_CreateBlock.Attach_Attribute_onchange(Input, 'CBill_Block.Add_Expiry_Date()');

    div_row.appendChild(Input);

    var div_row = this.CreateElement_(
        "div",
        `div_row`
    );

    div_col_title.appendChild(div_row);

    var p_Data = this.CreateElement_(
        "p",
        `p_Data_header`,
        this.Json_Data_bill_.Bill_ID
    );

    div_row.appendChild(p_Data);

    var Input = this.Select_input(this.Json_Data_bill_.Type_Bill_ID); 
    div_row.appendChild(Input);




    var div_Container_data = this.CreateElement_(
        "div",
        `div_Container_data`
    );

    ContenedorPrincipal.appendChild(div_Container_data);

    var div_col_data_Left = this.CreateElement_(
        "div",
        `div_col_data_Left`
    );

    div_Container_data.appendChild(div_col_data_Left);

    var div_row = this.CreateElement_(
        "div",
        `div_row`
    );

    div_col_data_Left.appendChild(div_row);

    var h1_tile = this.CreateElement_(
        "p",
        `p_data`,
        this.Json_Data_bill_.Emisor_Data.Name
    );

    div_row.appendChild(h1_tile);

    var h1_tile = this.CreateElement_(
        "p",
        `p_data`,
        this.Json_Data_bill_.Emisor_Data.Type_Name
    );

    div_row.appendChild(h1_tile);

/*     var Input = this.Select_input(this.Json_Data_bill_.Emisor_Data.Type_Name); 
    div_row.appendChild(Input); */

    var div_row = this.CreateElement_(
        "div",
        `div_row`
    );

    div_col_data_Left.appendChild(div_row);

    var h1_tile = this.CreateElement_(
        "p",
        `p_data`,
        this.Json_Data_bill_.Emisor_Data.NIF
    );

    div_row.appendChild(h1_tile);

    var Input = this.Select_input(this.Json_Data_bill_.Emisor_Data.Type_NIF); 
    div_row.appendChild(Input);

 
    var div_row = this.CreateElement_(
        "div",
        `div_row`
    );

    div_col_data_Left.appendChild(div_row);

    var h1_tile = this.CreateElement_(
        "p",
        `p_data`,
        this.Json_Data_bill_.Emisor_Data.Address
    );

    div_row.appendChild(h1_tile);

    var Input = this.Select_input(this.Json_Data_bill_.Emisor_Data.Type_Address); 
    div_row.appendChild(Input);

    var div_row = this.CreateElement_(
        "div",
        `div_row`
    );

    div_col_data_Left.appendChild(div_row);

    var h1_tile = this.CreateElement_(
        "p",
        `p_data`,
        this.Json_Data_bill_.Emisor_Data.Phone
    );

    div_row.appendChild(h1_tile);

    var Input = this.Select_input(this.Json_Data_bill_.Emisor_Data.Type_Phone); 
    div_row.appendChild(Input);


    var div_row = this.CreateElement_(
        "div",
        `div_row`
    );

    div_col_data_Left.appendChild(div_row);

    var h1_tile = this.CreateElement_(
        "p",
        `p_data`,
        this.Json_Data_bill_.Emisor_Data.mail
    );

    div_row.appendChild(h1_tile);

    var Input = this.Select_input(this.Json_Data_bill_.Emisor_Data.Type_mail); 
    div_row.appendChild(Input);











    var div_col_data_Right = this.CreateElement_(
        "div",
        `div_col_data_Right`
    );

    div_Container_data.appendChild(div_col_data_Right);

    var div_row = this.CreateElement_(
        "div",
        `div_row`
    );

    div_col_data_Right.appendChild(div_row);

    var h1_tile = this.CreateElement_(
        "p",
        `p_data`,
        this.Json_Data_bill_.Customer_Data.Name
    );

    div_row.appendChild(h1_tile);

    var Input = this.Select_input(this.Json_Data_bill_.Customer_Data.Type_Name); 
    div_row.appendChild(Input);

    var div_row = this.CreateElement_(
        "div",
        `div_row`
    );

    div_col_data_Right.appendChild(div_row);

    var h1_tile = this.CreateElement_(
        "p",
        `p_data`,
        this.Json_Data_bill_.Customer_Data.NIF
    );

    div_row.appendChild(h1_tile);

    var Input = this.Select_input(this.Json_Data_bill_.Customer_Data.Type_NIF); 
    div_row.appendChild(Input);

 
    var div_row = this.CreateElement_(
        "div",
        `div_row`
    );

    div_col_data_Right.appendChild(div_row);

    var h1_tile = this.CreateElement_(
        "p",
        `p_data`,
        this.Json_Data_bill_.Customer_Data.Address
    );

    div_row.appendChild(h1_tile);

    var Input = this.Select_input(this.Json_Data_bill_.Customer_Data.Type_Address); 
    div_row.appendChild(Input);

    var div_row = this.CreateElement_(
        "div",
        `div_row`
    );

    div_col_data_Right.appendChild(div_row);

    var h1_tile = this.CreateElement_(
        "p",
        `p_data`,
        this.Json_Data_bill_.Customer_Data.Phone
    );

    div_row.appendChild(h1_tile);

    var Input = this.Select_input(this.Json_Data_bill_.Customer_Data.Type_Phone); 
    div_row.appendChild(Input);


    var div_row = this.CreateElement_(
        "div",
        `div_row`
    );

    div_col_data_Right.appendChild(div_row);

    var h1_tile = this.CreateElement_(
        "p",
        `p_data`,
        this.Json_Data_bill_.Customer_Data.mail
    );

    div_row.appendChild(h1_tile);

    var Input = this.Select_input(this.Json_Data_bill_.Customer_Data.Type_mail); 
    div_row.appendChild(Input);



    var div_bill = this.CreateElement_(
        "div",
        `div_bill`
    );

    ContenedorPrincipal.appendChild(div_bill);

    var Button = this.CreateElement_(
        "button",
        `Button_Add_line_Service`,
        this.Json_Data_bill_.Table_Services.New_Row
    );

    div_bill.appendChild(Button);

    GALSAN_CreateBlock.Attach_Attribute_onClick(Button, 'CBill_Block.callback_Service_Add()');

    var Table = this.CreateElement_(
        "table",
        `table_Container`
    );

    div_bill.appendChild(Table);


    GALSAN_CreateBlock.AttachID(Table, "TableID");

  
    var thead_Table = this.CreateElement_(
        "thead",
        `thead_Table`
    );

    Table.appendChild(thead_Table);

    var tr_Table = this.CreateElement_(
        "tr",
        `tr_Table`
    );

    thead_Table.appendChild(tr_Table);

    var th_Table = this.CreateElement_(
        "th",
        `th_Table`,
        this.Json_Data_bill_.Table_Services.Duty
    );

    tr_Table.appendChild(th_Table);



    var th_Table = this.CreateElement_(
        "th",
        `th_Table`,
        this.Json_Data_bill_.Table_Services.Quantity
    );

    tr_Table.appendChild(th_Table);



    var th_Table = this.CreateElement_(
        "th",
        `th_Table`,
        this.Json_Data_bill_.Table_Services.Base
    );

    tr_Table.appendChild(th_Table);



    var th_Table = this.CreateElement_(
        "th",
        `th_Table`,
        this.Json_Data_bill_.Table_Services.IVA
    );

    tr_Table.appendChild(th_Table);


    var th_Table = this.CreateElement_(
        "th",
        `th_Table`,
        this.Json_Data_bill_.Table_Services.Total
    );

    tr_Table.appendChild(th_Table);


    var t_body = this.CreateElement_(
        "tbody",
        `t_body_table`
    );

    Table.appendChild(t_body);

GALSAN_CreateBlock.AttachID(t_body, "t_body_ID");






    var div_Container_foot = this.CreateElement_(
        "div",
        `div_Container_foot`
    );

    ContenedorPrincipal.appendChild(div_Container_foot);

    var div_Container_Payment = this.CreateElement_(
        "div",
        `div_Container_Payment`
    );

    div_Container_foot.appendChild(div_Container_Payment);

    var div_Forma_pago = this.CreateElement_(
        "div",
        `div_Forma_pago`
    );

    div_Container_Payment.appendChild(div_Forma_pago);


    var p_data = this.CreateElement_(
        "p",
        `p_data`,
        this.Json_Data_bill_.Payment_method.Message
    );

    div_Forma_pago.appendChild(p_data); 


    var p_data = this.CreateElement_(
        "p",
        `p_data`,
        this.Json_Data_bill_.Payment_method.Method
    );

    div_Forma_pago.appendChild(p_data); 

    var p_data = this.CreateElement_(
        "p",
        `p_data`,
        this.Json_Data_bill_.Payment_method.IBAN
    );

    div_Forma_pago.appendChild(p_data);

    var p_data = this.CreateElement_(
        "p",
        `p_data`,
        "Vencimiento"
    );

    div_Forma_pago.appendChild(p_data); 


    var Input = this.Select_input(this.Json_Data_bill_.Payment_method.Expiry_Date);
    GALSAN_CreateBlock.AttachID(Input.firstChild, "Date_Expiry");
    div_Forma_pago.appendChild(Input); 

    var div_Container_Impuestos = this.CreateElement_(
        "div",
        `div_Container_Impuestos`
    );

    div_Container_foot.appendChild(div_Container_Impuestos);

    var p_data = this.CreateElement_(
        "p",
        `p_data`,
        this.Json_Data_bill_.Tax_summary.Message
    );

    div_Container_Impuestos.appendChild(p_data);

    var div_desglose_IVA = this.CreateElement_(
        "div",
        `div_desglose_IVA`
    );

    div_Container_Impuestos.appendChild(div_desglose_IVA);

    GALSAN_CreateBlock.AttachID(div_desglose_IVA, "Desglose_IVA");

    var p_data = this.CreateElement_(
        "p",
        `p_data`,
        this.Json_Data_bill_.Tax_summary.Base
    );

    div_desglose_IVA.appendChild(p_data); 


    var p_data = this.CreateElement_(
        "p",
        `p_data`,
        this.Json_Data_bill_.Tax_summary.IVA
    );

    div_desglose_IVA.appendChild(p_data); 


    var p_data = this.CreateElement_(
        "p",
        `p_data`,
        this.Json_Data_bill_.Tax_summary.Total_IVA
    );

    div_desglose_IVA.appendChild(p_data); 




    var div_Container_Pagos = this.CreateElement_(
        "div",
        `div_Container_Pagos`
    );

    div_Container_foot.appendChild(div_Container_Pagos);


    var p_data = this.CreateElement_(
        "p",
        `p_data`,
        "Base Imponible"
    );

    div_Container_Pagos.appendChild(p_data); 


    var p_data = this.CreateElement_(
        "p",
        `p_data`,
        "IVA"
    );

    div_Container_Pagos.appendChild(p_data); 

    var p_data = this.CreateElement_(
        "p",
        `p_data`,
        "IRPF"
    );

    div_Container_Pagos.appendChild(p_data); 


    var p_data = this.CreateElement_(
        "p",
        `p_data`,
        "Total"
    );

    div_Container_Pagos.appendChild(p_data); 



    var Container_button = this.CreateElement_(
        "div",
        `Container_button`,
        null,
        GALSAN_CreateBlock.Site_Column_Center
    );

    Container_fluidID.appendChild(Container_button);

    var Button = this.CreateElement_(
        "button",
        `Button_Add_line_Service`,
        'Calcular Factura'
    );

    Container_button.appendChild(Button);

    GALSAN_CreateBlock.Attach_Attribute_onClick(Button, 'CBill_Block.Calculate_CALLBACK()');

}

    static Add_Expiry_Date(dias_Expiracion = 30) {


        var fecha_Registro = document.getElementById("Date_Register").valueAsDate;
        var Día_Registro =fecha_Registro.getDate();

        // Creamos la fecha de devolucion
        var fecha_Expiracion = new Date();
        // Sumamos los dias a la fecha
        fecha_Expiracion.setDate(Día_Registro + dias_Expiracion);
        document.getElementById("Date_Expiry").valueAsDate = fecha_Expiracion; 


}

Add_line_Service() {

    var TableID = document.getElementById("TableID");

    var t_body = document.getElementById("t_body_ID");

    var tbodyRowCount = TableID.tBodies[0].rows.length;

    if(tbodyRowCount < 10) {

    var tr_Table = this.CreateElement_(
        "tr",
        `tr_Table`
    );

    t_body.appendChild(tr_Table);

    GALSAN_CreateBlock.AttachID(tr_Table, 'tr_' + tbodyRowCount);

    GALSAN_CreateBlock.Attach_Attribute_onchange(tr_Table, 'CBill_Block.Check_Fields_CALLBACK(' + tbodyRowCount + ')');

    var td_Table = this.CreateElement_(
        "td",
        `td_Table`
    );

    tr_Table.appendChild(td_Table);

    var Input = this.Select_input(this.Json_Data_bill_.Table_Services.Type_Duty, this.Json_Data_bill_.Table_Services.Options_duty); 
    td_Table.appendChild(Input);

    GALSAN_CreateBlock.AttachID(Input, 'Service_' + tbodyRowCount);

    var td_Table = this.CreateElement_(
        "td",
        `td_Table`
    );

    tr_Table.appendChild(td_Table);

    var Input = this.Select_input(this.Json_Data_bill_.Table_Services.Type_Quantity); 
    td_Table.appendChild(Input);

    GALSAN_CreateBlock.AttachID(Input.firstChild, 'Quantity_' + tbodyRowCount);

    var td_Table = this.CreateElement_(
        "td",
        `td_Table`
    );

    tr_Table.appendChild(td_Table);

    var Input = this.Select_input(this.Json_Data_bill_.Table_Services.Type_Base); 
    td_Table.appendChild(Input);

    GALSAN_CreateBlock.AttachID(Input.firstChild, 'Base_' + tbodyRowCount);

    var td_Table = this.CreateElement_(
        "td",
        `td_Table`
    );

    tr_Table.appendChild(td_Table);

    var Input = this.Select_input(this.Json_Data_bill_.Table_Services.Type_tax_IVA, this.Json_Data_bill_.Table_Services.Options_taxes); 
    td_Table.appendChild(Input);

    GALSAN_CreateBlock.AttachID(Input, 'IVA_' + tbodyRowCount);

    var td_Table = this.CreateElement_(
        "td",
        `td_Table`
    );

    tr_Table.appendChild(td_Table);

    var Input = this.Select_input(this.Json_Data_bill_.Table_Services.Type_Total); 
    td_Table.appendChild(Input);

    GALSAN_CreateBlock.AttachID(Input.firstChild, 'Total_' + tbodyRowCount);
}
}
   

    Select_input(Input, Options = null) {

        switch (Input) {

            case CBill_Block.Type_Date:

            var Div_fill = this.CreateElement_(
                "div",
                `div_Fill_Property`

            );


            var input_Fill = this.CreateElement_(
                "input",
                `input_Fill`
            );

         
            Div_fill.appendChild(input_Fill);

            input_Fill.type = "date";
            input_Fill.valueAsDate = new Date();

            return Div_fill;

            break;

            case CBill_Block.Type_Expiry_Date:

            var Div_fill = this.CreateElement_(
                "div",
                `div_Fill_Property`

            );


            var input_Fill = this.CreateElement_(
                "input",
                `input_Fill`
            );

         
            Div_fill.appendChild(input_Fill);

            input_Fill.type = "date";

          var dias_Expiracion = 30;
          // Creamos la fecha de devolucion
          var fecha_Expiracion = new Date();
          // Sumamos los dias a la fecha
         
          fecha_Expiracion.setDate(fecha_Expiracion.getDate() + dias_Expiracion);
          input_Fill.valueAsDate = fecha_Expiracion;




            return Div_fill;

            break;
            
            case CBill_Block.Input_Check:


                break;

            case CBill_Block.Type_Text:

            var Div_fill = this.CreateElement_(
                "div",
                `div_Fill_Property`

            );


            var input_Fill = this.CreateElement_(
                "input",
                `input_Fill`
            );

         
            Div_fill.appendChild(input_Fill);

            return Div_fill;


                break;
                
                case CBill_Block.Type_Text_None:

                var Div_fill = this.CreateElement_(
                    "div",
                    `div_Fill_Property`
    
                );
    
    
                var input_Fill = this.CreateElement_(
                    "input",
                    `input_Table`
                );
    
             
                Div_fill.appendChild(input_Fill);
    
                return Div_fill;
    
    
                    break;

            case CBill_Block.Type_Selector:

            var selector = this.CreateElement_(
                "select",
                `input_Table`

            );


            for (let index = 0; index < Options.length; index++) {
                var option = this.CreateElement_(
                    "option",
                    ``,
                    Options[index]
                );
    
             
                selector.appendChild(option);
                
            }
   
            return selector;

                break;

            default:
                alert("Error");
                break;
        }

    }

    Check_Fields_Completed_Row_Table(ID_ROW) {

       var Duty = document.getElementById('Service_' + ID_ROW);
       var Quantity = document.getElementById('Quantity_' + ID_ROW);
       var Price = document.getElementById('Base_' + ID_ROW);
       var Tax = document.getElementById('IVA_' + ID_ROW);
       var Total = document.getElementById('Total_' + ID_ROW);

       if((Duty.value || Duty.value === 0) && (Quantity.value || Quantity.value === 0) && (Price.value || Price.value === 0) && (Tax.value || Tax.value === 0)) {
       
        switch (Tax.value) {

            case 21:
                var Price_ind =(1.21 * Price.value);
                Total.value= Price_ind * Quantity.value;
        

            break;

            case 10:
                var Price_ind =(1.10 * Price.value);
                Total.value = Price_ind * Quantity.value;

            break;
            
            case 4:
                var Price_ind =(1.04 * Price.value);
                Total.value = Price_ind * Quantity.value;

            break;

 
            default:
                
                break;
        };

        } else {

        Total.value = '';

       }

    }

   

    Calculate_All_Parameters() {

        var Rows_Array = TableID.tBodies[0].rows;
        var Array_Subtotal = [];

      
        var Suma_IVA_21 =0;
        var Suma_Base_21 = 0
        var Suma_IVA_10 =0;
        var Suma_Base_10 = 0
        var Suma_IVA_4 =0;
        var Suma_Base_4 = 0


        for (let index = 0; index < Rows_Array.length; index++) {
            var ID_ROW = Rows_Array[index].id;

            var Number_ID = ID_ROW.slice(3);

            var Total = document.getElementById('Total_' + Number_ID);
            var Quantity = document.getElementById('Quantity_' + Number_ID);
            var Price = document.getElementById('Base_' + Number_ID);
            var Tax = document.getElementById('IVA_' + Number_ID);

            if(Total.value != 0 && Total.value) {

                var Base = Price.value * Quantity.value;

                if (Tax.value == 21) {
                    var IVA =(0.21 * Base);

                 Suma_IVA_21 = Suma_IVA_21 + IVA;
                 Suma_Base_21 = Suma_Base_21 + Base;
            
        
                } else if(Tax.value == 10) {
                    var IVA =(0.10 * Base);
                     Suma_IVA_10 = Suma_IVA_10 + IVA;
                     Suma_Base_10 = Suma_Base_10 + Base;
          
         
                }else if(Tax.value == 4) {
                    var IVA =(0.04 * Base);
                     Suma_IVA_4 = Suma_IVA_4 + IVA;
                     Suma_Base_4 = Suma_Base_4 + Base;

                
                }
               


            }
            
        }

        Array_Subtotal.push(
            {"Base": Suma_Base_21,
            "Tax": Suma_IVA_21,
            "IVA_Ap": Tax.value
            }
        );
        Array_Subtotal.push(
            {"Base": Suma_Base_10,
            "Tax": Suma_IVA_10,
            "IVA_Ap": Tax.value
            }
        );

        Array_Subtotal.push(
            {"Base": Suma_Base_4,
            "Tax": Suma_IVA_4,
            "IVA_Ap": Tax.value
            }
        );


        var Desglose = document.getElementById("Desglose_IVA");

        
        for (let index = 0; index < Array_Subtotal.length; index++) {
            if(Array_Subtotal[index].Base != 0) {
                var p_data = this.CreateElement_(
                    "p",
                    `p_data`,
                    Array_Subtotal[index].Base
                );
            
                Desglose.appendChild(p_data); 

                var p_data = this.CreateElement_(
                    "p",
                    `p_data`,
                    Array_Subtotal[index].IVA_Ap
                );
            
            
                Desglose.appendChild(p_data); 


                var p_data = this.CreateElement_(
                    "p",
                    `p_data`,
                    Array_Subtotal[index].Tax
                );
            
                Desglose.appendChild(p_data); 
            };
            
        }


       


    }



    ////////////////////////////
    ///////CreateView//////////
    //////////////////////////
    CreateView() {


        //Add CSS


        this.add_CSS_Class(
            `.Container_fluid`,
            `
            display: grid;
            width: 70% !important; 
            grid-template-columns: 30% auto 30%;
            grid-template-areas:
                "header header header"
                "data data data"
                "bill bill bill"
                "foot foot foot";
            grid-template-rows: auto;
            margin: 3vw auto;
            padding: 2vw;
            row-gap: 2vw;
            border: 2px solid black;
            `
        );



        this.add_CSS_Class(
            `.div_Container_header`,
            `
            grid-area: header;
            grid-template-columns: 30% auto 30%;
            display: grid;
            grid-template-areas: "header-left .. header-right";
            border-bottom: 2px solid #b9b5b5;
            padding-bottom: 2vw;
                
            `
        );


        this.add_CSS_Class(
            `.div_Container_data`,
            `
            grid-area: data;
            grid-template-columns: 45% auto 45%;
            display: grid;
            grid-template-areas: "data-left . data-right";
            border-bottom: 2px solid #b9b5b5;
                
            `
        );


        this.add_CSS_Class(
            `.div_col_title`,
            `
            grid-area: header-left;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
            `
        );

        this.add_CSS_Class(
            `.div_col_logo`,
            `
            grid-area: header-right;
    display: flex;
    justify-content: center;
    align-items: center;
            `
        );


        this.add_CSS_Class(
            `.div_col_data_Left`,
            `
            grid-area: data-left;
            display: flex;
            flex-direction: column;
         
            `
        );


        this.add_CSS_Class(
            `.div_col_data_Right`,
            `
            grid-area: data-right;
            display: flex;
            flex-direction: column;
      
            `
        );


        this.add_CSS_Class(
            `.div_img`,
            `
            width: 40%;
            `
        );

        this.add_CSS_Class(
            `.div_bill`,
            `
            grid-area: bill;

            `
        );



        this.add_CSS_Class(
            `.p_data`,
            `
            font-size: 1vw !important;
            margin: 0.7vw 0;
      margin-right: 2%;

            `
        );


        this.add_CSS_Class(
            `.p_Data_header`,
            `
            font-size: 1vw !important;
            margin: 0.7vw 0;
    

            `
        );

        this.add_CSS_Class(
            `.div_row`,
            `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
            `
        );


        this.add_CSS_Class(
            `.div_Fill_Property`,
            `
      display: flex;
  
 
            `
        );


        this.add_CSS_Class(
            `.div_Container_foot`,
            `
            grid-area: foot;
            grid-template-areas: "foot-left foot-middle foot-right";
            grid-template-columns: auto auto 25%;
            display: grid;
            

            `
        );

        this.add_CSS_Class(
            `.div_Container_Payment`,
            `
            display: flex;
            flex-direction: column;
            margin: 0 1vw;
             grid-area: foot-left;

            `
        );

        this.add_CSS_Class(
            `.div_Container_Impuestos`,
            `
                flex-direction: column;
            display: flex;
             margin: 0 1vw;
              grid-area: foot-middle;
         
            `
        );

        this.add_CSS_Class(
            `.div_desglose_IVA`,
            `
        display: grid;
    grid-template-columns: repeat(3, 1fr);
            `
        );

        this.add_CSS_Class(
            `.div_Container_Pagos`,
            `
            display: flex;
            flex-direction: column;
             margin: 0 1vw;
            grid-area: foot-right;
            `
        );



        this.add_CSS_Class(
            `.table_Container`,
            `
    width: fit-content;
            min-width: 75%;
            max-width: 90%;
            margin: 0 auto;
            border: 1px solid #ddd;
            border-collapse: collapse;
            `
        );


        this.add_CSS_Class(
            `.th_Table`,
            `
border: 1px solid #ddd;
padding: 10px;
font-size: 1.7vw;
            `
        );


        this.add_CSS_Class(
            `.input_Fill`,
            `
min-width: 5vw;
            max-width:10vw;
            `
        );

        this.add_CSS_Class(
            `.input_Table`,
            `
      width: 100%;
    border: none;
            `
        );
  
        this.add_CSS_Class(
            `.td_Table`,
            `
      padding: 2px 0;

            `
        );
        
        
        ///////////////////////////////////////////////////////////////
        //////////////////middle///////////////////////////////////////
        ///////////////////////////////////////////////////////////////



        this.add_CSS_Class(
            `.Container_fluid`,
            `
            width: 80% !important;
        
    
    `, GALSAN_CreateBlock.Screen_Middle
        );



        ///////////////////////////////////////////////////////////////
        //////////////////mobile///////////////////////////////////////
        ///////////////////////////////////////////////////////////////




        this.add_CSS_Class(

            `.Container_fluid`,
            `
    
            width: 90% !important;
            `,
            GALSAN_CreateBlock.Screen_Mobile
        );
        this.add_CSS_Class(
            `.th_Table`,
            `
   
            font-size: 1.7vw !important;
            `,
            GALSAN_CreateBlock.Screen_Mobile
        );





        //Create element and associate a classes

        var Container_principal = this.CreateElement_(
            "div",
            `Container_principal`,
            null,
            GALSAN_CreateBlock.Site_Column_Center
        );

        GALSAN_CreateBlock.AttachID(Container_principal, "Container_fluidID");



        this.GenerateContent();

    }
}
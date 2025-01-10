//Opciones generales de la web
//True Enabled
//Flase Disabled

class CGeneralOptions {
    ////////////////
    //CONSTRUCTOR///
    ////////////////
    static Master_On = 0; //Habilite the option
    static Master_Close = 1; //Master Close do Nothing, so depend of the call
    static Master_Off = 2; //Deshabilite pption

    constructor() {
        //Control panel
        this.MASTER_CONTROL_Right_Mouse_Buttom = CGeneralOptions.Master_Close; ///true/false Habilite/dehabilite functions
        this.MASTER_CONTROL_Mouse_Selection = CGeneralOptions.Master_On;
    }

    ///////////
    //METHODS//
    ///////////

    //Habilita/Deshabilita el botón derecho del ratón
    Right_Mouse_Buttom(Option) {

        if (this.MASTER_CONTROL_Right_Mouse_Buttom == CGeneralOptions.Master_On) {

            document.oncontextmenu = function() { return true };

        } else if (this.MASTER_CONTROL_Right_Mouse_Buttom == CGeneralOptions.Master_Off) {

            document.oncontextmenu = function() { return false };

        } else if (this.MASTER_CONTROL_Right_Mouse_Buttom == CGeneralOptions.Master_Close) {

            if (Option == true) {
                document.oncontextmenu = function() { return true };

            } else if (Option == false) {
                document.oncontextmenu = function() { return false };

            }

        }

        return 0;
    }


    //Habilita/Deshabilita la seleccion de contenido
    Mouse_Selection(Option) {

        if (this.MASTER_CONTROL_Mouse_Selection == CGeneralOptions.Master_On) {

            document.onmousedown = function() { return true };

        } else if (this.MASTER_CONTROL_Mouse_Selection == CGeneralOptions.Master_Off) {

            document.onmousedown = function() { return false };

        } else if (this.MASTER_CONTROL_Mouse_Selection == CGeneralOptions.Master_Close) {

            if (Option == true) {
                document.onmousedown = function() { return true };

            } else if (Option == false) {
                document.onmousedown = function() { return false };

            }

        }

        return 0;
    }
}
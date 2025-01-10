//Requires JQuery Include...
//<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>

class CTraces {
    ////////////////
    //CONSTRUCTOR///
    ////////////////
    constructor() {}

    ///////////
    //METHODS//
    ///////////

    //Parameters
    static Type = { 
        Alert: 0, 
        ConsoleLog: 1,
      };

    //Constants
    static Level = {
        INFO: 0, 
        DEBUG: 1,
        ERROR: 2,
      };

    //Parameters
    static Config = {
        LOGS_STATUS: true, //1 ON - 0 OFF
        INFO_Level_Status: true, //1 ON - 0 OFF
        DEBUG_Level_Status: false, //1 ON - 0 OFF
        ERROR_Level_Status: false, //1 ON - 0 OFF
    }
    static Level_Alert = 0;
    static Level
    //Modes
    //-1: Deshabilite
    //0: Alert
    //1: Logs

    static Traces_On = true; //False: Deshabilita trazas de forma general desde la clase CTraces (Afecta a todas)
    //True: Depende de la llamada que emita la traza

//Level
    static LogTrace(Trace = "", Traces_Open = false, Type = CTraces.Type.Alert) {

        if (CTraces.Config.LOGS_STATUS && Traces_Open) {
            switch (Type) {

                case CTraces.Type.Alert:
                    alert(Trace);
                    break;
                    
                case CTraces.Type.ConsoleLog:
                    ConsoleLog(Trace);
                    break;

                default:
                    break;

            }
        }
    }

}
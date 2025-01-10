class CUtils {
  ////Ejemplo min range 0 max range 3: puede generar 012
  static GeneraNumeroAleatorio(max_Range = 10, min_range = 0) {
    return min_range + Math.floor(Math.random() * max_Range);
  }

  static findGetParameter(parameterName) {
    var result = null,
      tmp = [];
    location.search
      .substr(1)
      .split("&")
      .forEach(function (item) {
        tmp = item.split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
      });
    return result;
  }

  ///Function to sleep on native JS
  static sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

  static Delay(callback, milliseconds) {
    setTimeout(() => {
      callback();
    }, milliseconds);
  }

  static RemoveSpaces(String) {
    return String.replace(/\s/g, "");
  }

  static executeFunctionByName(functionName, context /*, args */) {
    var args = Array.prototype.slice.call(arguments, 2);
    var namespaces = functionName.split(".");
    var func = namespaces.pop();
    for (var i = 0; i < namespaces.length; i++) {
      context = context[namespaces[i]];
    }
    return context[func].apply(context, args);
  }

  static makeid(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  static GetTodayDate() {
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);

    return hoy.toDateString();
  }

  ///Function to sleep on native JS

  static sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

  
}

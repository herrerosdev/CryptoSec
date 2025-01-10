class CAds {
  static async detectarBloqueador() {
    const bloqueadorActivo = await this.checkAdBlocker();
    return bloqueadorActivo;
  }

  static checkAdBlocker() {
    let bloqueador;

    try {
      return fetch(
        new Request(
          "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
          {
            method: "HEAD",
            mode: "no-cors",
          }
        )
      )
        .then(function (response) {
          bloqueador = false;
          return bloqueador;
        })
        .catch(function (e) {
          bloqueador = true;
          return bloqueador;
        });
    } catch (error) {
      console.log(error);
      bloqueador = true;
      return bloqueador;
    }
  }
}

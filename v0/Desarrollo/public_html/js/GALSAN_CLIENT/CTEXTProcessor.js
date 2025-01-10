class CTEXTProcessor {

  /*Se Buscan los tags en el texto y se sustituyen por el codigo que le indicamos (para darle forma de html por ejemplo: www.youtube ..... -> div..href= www.youtube)*/


    static TAGs_v = {
      TAG_Break: { RegexPattern_To_Search: "#BREAK ", Sutitute_Code: "<br><br>" },
      TAG_Link: { RegexPattern_To_Search: "#LINK", Sutitute_Code: "<br><br>" },
      TAG_Link: { RegexPattern_To_Search: "#TODAYDATE", Sutitute_Code: CUtils.GetTodayDate() },


    };



  static TAGs_Flipping(Text) {

    for (var Iterator in  CTEXTProcessor.TAGs_v) {

      var Regex = new RegExp(CTEXTProcessor.TAGs_v[Iterator].RegexPattern_To_Search, "g");

      var Text = Text.replace(Regex, CTEXTProcessor.TAGs_v[Iterator].Sutitute_Code);
    }

    return Text;
  }
}
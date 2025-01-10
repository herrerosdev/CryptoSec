class CTrees{


    static  Parse_Nodes_On_Tree_Structure(PredecesorsVector, ResultTreeStructure){

    var Nodos_Huerfanos = [];

    //First Save First Level Parent Into a vector
    for (let i = 0; i < PredecesorsVector.length; i++) {

      //Si no tiene padre... Son nodos principales y los guardamos directamente
      if(PredecesorsVector[i]["FATHER"] == null){
        ResultTreeStructure.push({ID: PredecesorsVector[i]["ID"], Deep_level: 0, Name: PredecesorsVector[i]["NAME"], Info: PredecesorsVector[i]["INFO"], Content: null});
      //Si tiene padre... Lo guardams en eun vector para buscar luego el padre de los nodos huerfanos
      }else if(PredecesorsVector[i]["FATHER"] != null){
        Nodos_Huerfanos.push({ID: PredecesorsVector[i]["ID"], Deep_level: null, Father: PredecesorsVector[i]["FATHER"], Info: PredecesorsVector[i]["INFO"], Name: PredecesorsVector[i]["NAME"], Content: null})
      }
    }

    // buscar luego el padre de los nodos huerfanos
    for(let i = 0; Nodos_Huerfanos.length > 0;) {

      //Caso en el que encontramos a su padre
      if(CTrees.Deep_Search(Nodos_Huerfanos[i], ResultTreeStructure) == true){

      Nodos_Huerfanos.splice(i, 1); //Si encontramos a su padre lo sacamos de la lista de nodos huerfanos

      //Caso en el que no lo encontramos y pasamos al siguiente
      }else{

        //Padre no encontrado
        i = i +1;
      }

      i = i%Nodos_Huerfanos.length; //Nos aseguramos que el indice este dentro de rango ( ya que vamos eliminando elementos del vector cada vez que le encontramos un padre y si no, aumentando el indice)

    }

  }

  //Deep Level por defecto a uno porque el nivel 0 son los padres primitivos que ya se han guardado antes
  static Deep_Search(Search_this_,  Into_this, Deep_level = 1){

    for(let i = 0; i < Into_this.length; i++){
      
      //Caso de que encontremos a su padre un nodo principal
      if((Search_this_.Father == Into_this[i].ID)){

        Into_this[i].Content = Into_this[i].Content == null ? [] : Into_this[i].Content;
        Search_this_.Deep_level = Deep_level;
        Into_this[i].Content.push(Search_this_);
        return true;
        
      //En el caso de que tenga descendencia buscamos en ella
      }else if(Into_this[i].Content != null){

        //Si lo encontramos salimos con true
        if(CTrees.Deep_Search(Search_this_, Into_this[i].Content, ++Deep_level) == true){
          return true;
        }

      //Si no lo encontramos pasamos al siguiente nodo
      } else if(Into_this[i].Content == null){


      }
    }
    //Si no hemos encontrado a su padre en ningun nodo del arbol salimos con false
    return false;
  }


  
  static Read_Tree(Tree_To_Read, callback_WhatToDO_OnEachNode = function(Nodo){ }){


    for(let i = 0; i < Tree_To_Read.length; i++){
      
      callback_WhatToDO_OnEachNode(Tree_To_Read[i]);
     

     if(Tree_To_Read[i].Content != null){

        //Si lo encontramos salimos con true
        CTrees.Read_Tree(Tree_To_Read[i].Content, callback_WhatToDO_OnEachNode)


      //Si no lo encontramos pasamos al siguiente nodo
      } else if(Tree_To_Read[i].Content == null){


      }
    }
    //Si no hemos encontrado a su padre en ningun nodo del arbol salimos con false
    return true;

  }


}
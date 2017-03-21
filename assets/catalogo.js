/*---------- AGREGAR UN ELEMENTO A UNA LISTA CON MÈTODO appendChild -------------*/

function agregarFrutasALista() {
    // variable que crea un elemento li de la lista ordenada ol
    var elementoDeLaLista = document.createElement("li");
    // variable que guarda los elementos que provengan del input
    var agregarFrutasALista = document.getElementById("agregarFruta");
    // el elemento se vuelve valor de la lista de frutas y se reconoce como string
    elementoDeLaLista.innerHTML = agregarFrutasALista.value;
    agregarFrutasALista.value = "";
    // appendChild es un mètodo que permite agregar elementos a la lista ol
    //pues los añade o concatena, como si fueran una serie de nodos que se
    //conectan entre sí
    document.getElementById("listaDeFrutas").appendChild(elementoDeLaLista);
}

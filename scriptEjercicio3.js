
let textosArray = []
const lista = document.getElementById('listaTextos')

function guardarTextos(){
    let texto = document.getElementById('textoIngresado').value
    textosArray.push(texto)

    document.getElementById("textoIngresado").value = '';

    // for(let i = 1; i< textosArray.length; i++){
        

        actualizarLista()
    }
// }
console.log(textosArray)


function actualizarLista(){

    const lista = document.getElementById("listaTextos");
    lista.innerHTML = ''; 

    textosArray.forEach((element, index) => {
        const li = document.createElement('li');
        li.textContent = element;
        li.ondblclick = () => eliminarComentarios(index);
        lista.appendChild(li);
    });
}

function eliminarComentarios(indice){
    const confirmar = confirm("¿Esta seguro que quiere eliminar este elemento?")
    if(confirmar){
        textosArray.splice(indice, 1); // Eliminar del array
        actualizarLista();
    }
    
}

actualizarLista();

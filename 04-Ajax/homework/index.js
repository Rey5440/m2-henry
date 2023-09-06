

//let [ boton ] = $('#boton');
let [ boton ] = $('#boton');
let [ lista ] = $('#lista');
let [ search ] = $('#search');
let [ eliminar ] = $('#delete'); // boton delete
//           'http://localhost:5000/amigos'



const mostrarAmigos = (response) => {

    lista.innerHTML = '';

    response.forEach(amigo => {
        unLi = document.createElement('li');
        unLi.innerHTML = amigo.name;
        lista.appendChild(unLi)
    });
}

const traerAmigos = () => {
    lista.innerHTML = '';
    $.get('http://localhost:5000/amigos', mostrarAmigos);
}

const buscarAmigo = () => {
    const [ input ] = $('#input');
    const id = input.value;
    input.value = '';
    //console.log('soy el id', id);
    $.get('http://localhost:5000/amigos/' + id, (response)=> {
       //console.log(response);
       const [ friend ] = $('#amigo');
       friend.innerHTML = response.name;
    })
}

const eliminarAmigo = () => {
    const [ inputEliminar ] = $('#inputDelete');
    const id = inputEliminar.value;
    inputEliminar.value = '';
    $.ajax({
        type: 'DELETE',
        url: 'http://localhost:5000/amigos/' + id,
        success: (response) => mostrarAmigos(response)

    })
}

boton.addEventListener('click', traerAmigos);
search.addEventListener('click', buscarAmigo);
eliminar.addEventListener('click', eliminarAmigo); //al tocar eliminarAmigo




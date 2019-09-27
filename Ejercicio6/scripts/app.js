// Funcion que nos permite abrir y cerrar el menu hamburguesa - Mateo Rios Diaz 1037628160

const hamburger = document.querySelector(".hamburger"); //guardamos el elemento con la clase .hamburger en la variable hamburger 
const navLinks = document.querySelector(".nav-links"); //guardamos el elemento con la clase .nav-links en la varialble navLink
const links = document.querySelectorAll(".nav-links li"); //gurdamos todos los elementos li hijos de .nav-links (arreglo de todos los li)

hamburger.addEventListener('click', () => { // le asignamos un eventlistener que nos permite estar escuchando que sucede sobre el elemento hamburger
    navLinks.classList.toggle("open"); // cada vez que se haga click sobre el elemento hamburgues se ejecuta la arrow function que nos permite
    // adicionarle y quitarle con el .classlist.toogle la clase open quien es la encargada de abrir y cerrar el menu
    links.forEach(link => {  // con el arreglo de li realizamos un foreach recorremos todo el array colocandole la clase fade con el 
        link.classList.toggle("fade"); //  fin de que cada vez q se haga click sobre el menu hamburguesa se le agrege esta clase a los li y dalres un efecto. 
    })
});
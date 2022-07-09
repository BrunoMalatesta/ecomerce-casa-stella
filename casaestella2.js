/* ARRAY PRODUCTOS*/
const lista_productos =[
    {
        id: 0,
        img: "/productos/tijeras.jpg",
        nombre: "Tijera",
        precio: 300,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 1,
        img: "/productos/plasticola.jpg",
        nombre: "Plasticola",
        precio: 150,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 2,
        img: "/productos/lapicera.jpg",
        nombre: "Lapicera",
        precio: 100,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 3,
        img: "/productos/pinceles.jpg",          
        nombre: "Pinceles",
        precio: 200,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 4,
        img:  "/productos/acrilicos.jpg",        
        nombre: "Acrilicos",
        precio: 500,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 5,
        img: "/productos/resma.jpg",     
        nombre: "Resma",
        precio: 600,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 6,
        img: "/productos/lapiz.jpg",
        nombre: "Lapiz",                             
        precio: 85,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 7,
        img: "/productos/regla.jpg",
        nombre: "Regla",
        precio: 100,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 8,
        img: "/productos/mapa.jpg",
        nombre: "Mapa",
        precio: 50,
        cantidad: 1,
        stock: 100,
    },
];


/* ARRAY VACIO CARRITO*/
let carrito = [];


/* VARIABLES*/
let contenedorCarrito = document.getElementById('carrito-contenedor')
let contenedorProductos = document.getElementById('contenedor-Productos')
let contadorCarrito = document.getElementById('contadorCarrito')
const botonVaciar = document.getElementById('vaciar-carrito')


/* INJECTAR PRODUCTOS*/
lista_productos.forEach((info) => {

    let div = document.createElement('div');
    div.classList.add('producto')
    div.innerHTML = `
    <img src=${info.img} alt="">
    <h5>${info.nombre}</h5>
    <p>Precio: ${info.precio}</p>
    <button id="agg-producto${info.id}" class="boton-agg"><i class="fas fa-shopping-cart"></i></button>
    `
    contenedorProductos.appendChild(div)

    let boton = document.getElementById(`agg-producto${info.id}`)

    boton.addEventListener('click', () => {
        agregarAlCarrito(info.id)
    })
});


/* AGG AL CARRITO SIN QUE SE REPITA*/
const agregarAlCarrito = (prodId) => {

    const existe = carrito.some (prod => prod.id === prodId) 

    if (existe){ 
        const prod = carrito.map (prod => {
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else { 
        const item = lista_productos.find((prod) => prod.id === prodId)
        carrito.push(item)
    }

    actualizarCarrito() 

};


/*VACIAR CARRITO*/
botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
    localStorage.removeItem('carrito', JSON.stringify(carrito))
});


/* ACTUALIZAR CARRITO*/
const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""
    carrito.forEach((info) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${info.nombre}</p>
        <p>Precio:$${info.precio}</p>
        <p>Cantidad: <span id="cantidad">${info.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${info.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarrito.appendChild(div)

        localStorage.setItem('carrito', JSON.stringify(carrito))

    })
    
    contadorCarrito.innerText = carrito.length

    console.log(carrito)
    precioTotal.innerText = carrito.reduce((acc, info) => acc + info.cantidad * info.precio, 0)
    
};


document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})


/* ELIMINAR DEL CARRITO*/
const eliminarDelCarrito = (infoId) => {
    const item = carrito.find((info) => info.id === infoId)

    const indice = carrito.indexOf(item) 

    carrito.splice(indice, 1) 
    
    actualizarCarrito()
  
    console.log(carrito)
};


/* CODIGO DEL MODAL*/
const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]


botonAbrir.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
});
botonCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
});

contenedorModal.addEventListener('click', (event) =>{
    contenedorModal.classList.toggle('modal-active')

});
modalCarrito.addEventListener('click', (event) => {
    event.stopPropagation() 
});
/* ARRAY PRODUCTOS*/
const lista_productos =[
    {
        id: 0,
        img: "/productos/tijeras.jpg",
        nombre: "Tijera",
        precio: 550,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 1,
        img: "/productos/plasticola.jpg",
        nombre: "Plasticola",
        precio: 200,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 2,
        img: "/productos/lapicera.jpg",
        nombre: "Lapicera",
        precio: 190,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 3,
        img: "/productos/pinceles.jpg",          
        nombre: "Pinceles",
        precio: 400,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 4,
        img:  "/productos/acrilicos.jpg",        
        nombre: "Acrilicos",
        precio: 2800,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 5,
        img: "/productos/resma.jpg",     
        nombre: "Resma",
        precio: 890,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 6,
        img: "/productos/lapiz.jpg",
        nombre: "Lapiz",                             
        precio: 160,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 7,
        img: "/productos/regla.jpg",
        nombre: "Regla",
        precio: 330,
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
    {
        id: 9,
        img: "/productos/goma.jpg",
        nombre: "Goma Maped",
        precio: 180,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 10,
        img: "/productos/mochila.jpg",
        nombre: "Mochila Verde Musgo",
        precio: 7699,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 11,
        img: "/productos/mochila2.jpg",
        nombre: "Mochila Wilson",
        precio: 6100,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 12,
        img: "/productos/mochila3.jpg",
        nombre: "Mochila Wilson Bicolor",
        precio: 6900,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 13,
        img: "/productos/billetera.jpg",
        nombre: "Billetera Hombre Duogan",
        precio: 2980,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 14,
        img: "/productos/billetera2.jpg",
        nombre: "Billetera Hombre Duogan Eco Cuero",
        precio: 2980,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 15,
        img: "/productos/billetera3.jpg",
        nombre: "Billetera  PlayStation One",
        precio: 3000,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 16,
        img: "/productos/cajalapicez.jpg",
        nombre: "Lápíces De Colores Filgo",
        precio: 2500,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 17,
        img: "/productos/sharpie.jpg",
        nombre: "Marcador Sharpie",
        precio: 250,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 18,
        img: "/productos/kit.jpg",
        nombre: "Kit Set Utiles Escolares Gloria",
        precio: 1000,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 19,
        img: "/productos/lapicescolores.jpg",
        nombre: "Lapices Filgo Color",
        precio: 300,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 20,
        img: "/productos/marcadorescolores.jpg",
        nombre: "20 Colores De Resaltador Filgo",
        precio: 1650,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 21,
        img: "/productos/tintamarcador.jpg",
        nombre:"Tinta Trabi 30 Ml",
        precio: 900,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 2,
        img: "/productos/kit2.jpg",
        nombre: "Kit Utiles Escolares K26",
        precio: 2420,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 23,
        img: "/productos/marcadorpizzarra.jpg",
        nombre: "Marcador Pizarra Negro Imantado",
        precio: 2100,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 24,
        img: "/productos/plumaparker.jpg",
        nombre: "Boligrafo Parker Jotter Acero",
        precio: 4000,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 25,
        img: "/productos/kitcolorcastell.jpg",
        nombre: "Lapices De Color FaberCastell",
        precio: 6000,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 26,
        img: "/productos/sello.jpg",
        nombre: "Sellos Personalizados Automatico",
        precio: 800,
        cantidad: 11,
        stock: 100,
    },
    {
        id: 27,
        img: "/productos/cartulina.jpg",
        nombre: "Papel Afiche 70 X 100 X 10 Unidades ",
        precio: 600,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 28,
        img: "/productos/separadores.jpg",
        nombre: "Separador Cartulina A4",
        precio: 200,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 29,
        img: "/productos/pizarra1.jpg",
        nombre: "Pizarra Blanca 60x80cm",
        precio: 3000,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 30,
        img: "/productos/pizarra2.jpg",
        nombre: "Pizarra Blanca 80x120cm",
        precio: 6000,
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
    <img src=${info.img} class="img-produ">
    <h5>${info.nombre}</h5>
    <p>Precio: ${info.precio}$</p>
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
/* ARRAY PRODUCTOS*/
const lista_productos =[
    {
        id: 0,
        img: "./productos/tijeras.jpg",
        nombre: "Tijera",
        precio: 550,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 1,
        img: "./productos/plasticola.jpg",
        nombre: "Plasticola",
        precio: 200,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 2,
        img: "./productos/lapicera.jpg",
        nombre: "Lapicera",
        precio: 190,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 3,
        img: "./productos/pinceles.jpg",          
        nombre: "Pinceles",
        precio: 400,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 4,
        img:  "./productos/acrilicos.jpg",        
        nombre: "Acrilicos",
        precio: 2800,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 5,
        img: "./productos/resma.jpg",     
        nombre: "Resma",
        precio: 890,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 6,
        img: "./productos/lapiz.jpg",
        nombre: "Lapiz",                             
        precio: 160,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 7,
        img: "./productos/regla.jpg",
        nombre: "Regla",
        precio: 330,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 8,
        img: "./productos/mapa.jpg",
        nombre: "Mapa",
        precio: 50,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 9,
        img: "./productos/goma.jpg",
        nombre: "Goma Maped",
        precio: 180,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 10,
        img: "./productos/mochila.jpg",
        nombre: "Mochila Verde Musgo",
        precio: 7699,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 11,
        img: "./productos/mochila2.jpg",
        nombre: "Mochila Wilson",
        precio: 6100,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 12,
        img: "./productos/mochila3.jpg",
        nombre: "Mochila Wilson Bicolor",
        precio: 6900,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 13,
        img: "./productos/billetera.jpg",
        nombre: "Billetera Hombre Duogan",
        precio: 2980,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 14,
        img: "./productos/billetera2.jpg",
        nombre: "Billetera Hombre Duogan Eco Cuero",
        precio: 2980,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 15,
        img: "./productos/billetera3.jpg",
        nombre: "Billetera  PlayStation One",
        precio: 3000,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 16,
        img: "./productos/cajalapicez.jpg",
        nombre: "Lápíces De Colores Filgo",
        precio: 2500,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 17,
        img: "./productos/sharpie.jpg",
        nombre: "Marcador Sharpie",
        precio: 250,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 18,
        img: "./productos/kit.jpg",
        nombre: "Kit Set Utiles Escolares Gloria",
        precio: 1000,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 19,
        img: "./productos/lapicescolores.jpg",
        nombre: "Lapices Filgo Color",
        precio: 300,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 20,
        img: "./productos/marcadorescolores.jpg",
        nombre: "Colores De Resaltador Filgo",
        precio: 1650,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 21,
        img: "./productos/tintamarcador.jpg",
        nombre:"Tinta Trabi 30 Ml",
        precio: 900,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 22,
        img: "./productos/kit2.jpg",
        nombre: "Kit Utiles Escolares K26",
        precio: 2420,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 23,
        img: "./productos/marcadorpizzarra.jpg",
        nombre: "Marcador Pizarra Negro Imantado",
        precio: 2100,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 24,
        img: "./productos/plumaparker.jpg",
        nombre: "Boligrafo Parker Jotter Acero",
        precio: 4000,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 25,
        img: "./productos/kitcolorcastell.jpg",
        nombre: "Lapices De Color FaberCastell",
        precio: 6000,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 26,
        img: "./productos/sello.jpg",
        nombre: "Sellos Personalizados",
        precio: 800,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 27,
        img: "./productos/cartulina.jpg",
        nombre: "Papel Afiche 70 X 100 X 10 Unidades ",
        precio: 600,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 28,
        img: "./productos/separadores.jpg",
        nombre: "Separador Cartulina A4",
        precio: 200,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 29,
        img: "./productos/pizarra1.jpg",
        nombre: "Pizarra Blanca 60x80cm",
        precio: 3000,
        cantidad: 1,
        stock: 100,
    },
    {
        id: 30,
        img: "./productos/pizarra2.jpg",
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
let botonVaciar = document.getElementById('vaciar-carrito')
let botonComprar = document.getElementById('comprar-carrito')
let botonTachito = document.getElementsByClassName('boton-eliminar')       
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
        Toastify({
            text: "Se agrego al Carrito",
            duration: 2000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "blue",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    })
});


/* AGG AL CARRITO SIN QUE SE REPITA*/
const agregarAlCarrito = (prodId) => {
    let agregar_producto = lista_productos.find(prod => prod.id == prodId)
    let existe = carrito.some(prod => prod.id === prodId)

    existe == true ? agregar_producto.cantidad++ : carrito.push(agregar_producto); //reducimos un if a la nomenclatura de operador ternario

    actualizarCarrito() 

};



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
    
    

    console.log(carrito)
    precioTotal.innerText = carrito.reduce((acc, info) => acc + info.cantidad * info.precio, 0)
    
};


document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

/* EliminardelCARRITO*/
const eliminarDelCarrito = (infoId) => {
    const existe = carrito.some(prod => prod.id ===infoId)
    if(existe){
        const prod = carrito.map(prod => {
            if(prod.id === infoId){
                prod.cantidad = 1;
                const item = carrito.find((info) => info.id === infoId)
                const indice = carrito.indexOf(item) 
                carrito.splice(indice, 1) 
                actualizarCarrito()
            }

            Toastify({
                text: "Producto Eliminado",
                duration: 2000,
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "red",
                },
                onClick: function(){} // Callback after click
              }).showToast();
        })
     
    }

    else {
        const item = lista_productos.find((prod) => prod.id === infoId)
        carrito.push(item)
    }
    
};





/*VACIAR CARRITO*/
botonVaciar.addEventListener('click', () => {

    location.reload();
   
    localStorage.removeItem('carrito', JSON.stringify(carrito))
});



/*VACIAR CARRITO*/
botonComprar.addEventListener('click', () => {
    
const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
    title: 'Confirmar Compra?',
    text: "no puede cancelar si confirma!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Confirmar',
    cancelButtonText: 'Cancelar',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        'Compra Confirmada',
        'se realizo la compra :)',
        'success'
      )
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Compra Cancelada',
        'cancelo su compra :(',
        'error'
      )
    }
  })

});

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





  anime({
    targets: '.producto',
    scale: [
      {value: .6, easing: 'easeOutSine', duration: 500},
      {value: 1, easing: 'easeInOutQuad', duration: 1200}
    ],
    delay: anime.stagger(200, {grid: [14, 5], from: 'center'})
  });

  anime({
    targets: '.animated',
    translateX: 2000,
    easing: 'easeInOutExpo'
  });
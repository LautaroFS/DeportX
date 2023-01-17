const prod = [{
    "id": 1,
    "title": "Pelota de futbol N° 5",
    "precio": 4500,
    "img": "https://www.digitalsport.com.ar/files/products/624b1bc16431e-565339-1200x1200.jpg",
    "categoria": "futbol"
},
{
    "id": 2,
    "title": "Remera de River Plate",
    "precio": 9000,
    "img": "https://www.digitalsport.com.ar/files/products/624b1bc16431e-565339-1200x1200.jpg",
    "categoria": "futbol"
},
{
    "id": 3,
    "title": "Remera de Boca Junior",
    "precio": 8500,
    "img": "https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/G/U/GU1883_0.jpg",
    "categoria": "futbol"
},
{
    "id": 4,
    "title": "Paleta BULLPADEL VERTEX 03 ",
    "precio": 23000,
    "img": "https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/G/U/GU1883_0.jpg",
    "categoria": "padel"
},
{
    "id": 5,
    "title": "Tubo de pelota de padel ADIDAS",
    "precio": 1000,
    "img": "https://www.opensports.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/G/U/GU1883_0.jpg",
    "categoria": "padel"
},
{
    "id": 6,
    "title": "Antiparras ADIDAS adulto",
    "precio": 2300,
    "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/be372814a58446b3a85da76d00babe52_9366/Antiparras_adidas_persistar_180_unmirrored_UNISEX_Gris_BR1130_01_standard.jpg",
    "categoria": "natacion"
},
{
    "id": 7,
    "title": "Paleta de padel STARVIE RAPTOR",
    "precio": 22950,
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ64ZqKzVBYn9J1Z_JTfuWFVHGFsqvPruxHAK5iCmoBV43v9Pv7fjWTMIXoi8KDwGBafWw&usqp=CAU",
    "categoria": "padel"
},
{
    "id": 8,
    "title": "BOTINES ADIDAS PREDATOR 20.3 TACOS DE TIERRA FIRME HOMBRE",
    "precio": 6700,
    "img": "https://assets.adidas.com/images/w_600,f_auto,q_auto/70ae150b4f51490d8d87ab2001505c1f_9366/Botines_de_futbol_Predator_20.3_cesped_natural_seco_Negro_EF1929_01_standard.jpg",
    "categoria": "futbol"
}
]

const productos = document.getElementById("productos")
const saludos = document.getElementById("saludo")

function viewProd() {
    if (prod.length > 0) {
        prod.forEach(element => {
            function cards() {
                // console.log(element);
                return (
                    `<div class="card" style="width: 18rem;">
                    <img src="${element.img}" class="card-img-top img" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${element.title}</h5>
                            <h6> ${element.precio} </h6>
                            <a href="#" class="btn btn-primary">DETALLE</a>
                        </div>
                    </div>`)
            }
            productos.innerHTML = cards()
        });
    } else {
        const cards = `<h1>NO HAY PRODUCTOS EN STOCK</h1>`
        productos.innerHTML = cards
    }
}

function saludo() {
    const name = prompt('Ingrese su nombre:')
    const text = `<h1 class="title"> Bienvenido ${name}</h1>`
    saludos.innerHTML = text
}

viewProd()
saludo()
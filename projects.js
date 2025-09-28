// 1. Definir los datos de los productos usando un arreglo de objetos
// (id, nombre, descripcion, precio, imagen)
const Productos = [
    // Frutas
    {
        id: "fresas",
        nombre: "Fresas Frescas",
        descripcion: "Jugosas y dulces, cultivadas de manera natural sin químicos",
        precio: "S/ 3.50 x kg",
        imagen: "https://static.vecteezy.com/system/resources/thumbnails/048/028/742/small_2x/a-bunch-of-strawberries-on-a-transparent-background-png.png"
    },
    {
        id: "pina",
        nombre: "Piña Golden",
        descripcion: "Refrescante, jugosa y con un equilibrio entre dulzor y acidez. Rica en vitamina C y bromelina, ideal para jugos, ensaladas de frutas y postres naturales.",
        precio: "S/ 6.00 x kg",
        imagen: "https://plazavea.vteximg.com.br/arquivos/ids/226392-1000-1000/124441.jpg?v=636977073976730000"
    },
    {
        id: "mango",
        nombre: "Mango Kent",
        descripcion: "Dulce, aromático y jugoso. Una excelente fuente de antioxidantes, vitamina A y C; perfecto para jugos, ensaladas o como snack fresco.",
        precio: "S/ 4.50 x kg",
        imagen: "https://img.freepik.com/fotos-premium/mango-aislado-fondo-blanco_646510-2572.jpg"
    },
    {
        id: "palta",
        nombre: "Palta Hass",
        descripcion: "Cremosa y nutritiva, rica en grasas saludables, potasio y fibra. Versátil en ensaladas, tostadas o como base de guacamoles y cremas.",
        precio: "S/ 8.80 x kg",
        imagen: "https://image.vegaenlinea.cl/cache/data/productos/verduras/palta-hass-600x600.jpg"
    },
    {
        id: "papaya",
        nombre: "Papaya",
        descripcion: "De sabor suave y digestiva gracias a su enzima papaína. Rica en fibra, vitamina A y antioxidantes, excelente para jugos y ensaladas.",
        precio: "S/ 5.00 x kg",
        imagen: "https://tse1.mm.bing.net/th/id/OIP.igF3B1u0XrdkQ6-m8FeqXwHaGl?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        id: "uva",
        nombre: "Uva",
        descripcion: "Sabor dulce y su uso en la producción de vino, así como en la alimentación fresca y en jugos.",
        precio: "S/ 4.50 x kg",
        imagen: "https://img.freepik.com/fotos-premium/uva-fresca-fondo-llanura-blanca_30489-6340.jpg"
    },
    {
        id: "maracuya",
        nombre: "Maracuayá",
        descripcion: "Ácida, aromática y muy refrescante. Rica en vitamina C y antioxidantes, ideal para jugos, postres y salsas tropicales.",
        precio: "S/ 6.50 x kg",
        imagen: "https://tse2.mm.bing.net/th/id/OIP.4lAan2VRDknDmBboPxUSAgHaHE?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        id: "platano",
        nombre: "Plátano de Seda",
        descripcion: "Dulce, suave y lleno de energía natural. Aporta potasio, magnesio y fibra, perfecto como snack, en batidos o postres.",
        precio: "S/ 3.20 x kg",
        imagen: "https://plazavea.vteximg.com.br/arquivos/ids/1233647-1000-1000/929551.jpg?v=637515093589100000"
    },
    {
        id: "papa-amarilla",
        nombre: "Papa Amarilla",
        descripcion: "Cremosa, de textura suave y sabor único. Rica en carbohidratos complejos y vitamina C, ideal para purés, guisos y platos típicos peruanos.",
        precio: "S/ 3.30 x kg",
        imagen: "https://toorfood.com/wp-content/uploads/2022/02/Papa-Amarilla-ToorFood.jpg"
    },
    {
        id: "camote-amarillo",
        nombre: "Camote amarillo",
        descripcion: "Dulce y nutritivo, cargado de fibra, antioxidantes y betacarotenos. Perfecto para acompañar guisos, al horno o en postres tradicionales.",
        precio: "S/ 3.90 x kg",
        imagen: "https://ingredienta.com/wp-content/uploads/2022/10/camote-amar.png"
    },
    {
        id: "yuca",
        nombre: "Yuca Fresca",
        descripcion: "Harinosa, versátil y muy energética. Rica en almidón y vitamina C, se consume frita, sancochada o en sopas.",
        precio: "S/ 3.50 x kg",
        imagen: "https://tse4.mm.bing.net/th/id/OIP.7BTdA-qH0FJsQuxNH4WHBAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        id: "zapallo-macre",
        nombre: "Zapallo Macre",
        descripcion: "De pulpa anaranjada, dulce y suave. Muy nutritivo, rico en vitamina A y fibra, ideal para cremas, sopas y guisos.",
        precio: "S/ 4.20 x kg",
        imagen: "https://corporacionliderperu.com/46134-large_default/zapallo-macre-a-granel-x-kg-exo-igv.jpg"
    },
    {
        id: "cebolla-roja",
        nombre: "Cebolla Roja",
        descripcion: "De sabor intenso y fresco. Rica en antioxidantes y compuestos azufrados, perfecta para ensaladas, aderezos y guisos criollos.",
        precio: "S/ 2.50 x kg",
        imagen: "https://www.gastronomiavasca.net/uploads/image/file/3338/w700_cebolla_roja.jpg"
    },
    {
        id: "Zanahoria",
        nombre: "Zanahoria",
        descripcion: "Crujiente, ligeramente dulce y muy versátil. Rica en betacarotenos, vitamina A y fibra, ideal para ensaladas, jugos y guisos.",
        precio: "S/ 2.80 x kg",
        imagen: "https://consejoaldia.com/wp-content/uploads/2019/11/zanahoria.jpg"
    },
    {
        id: "tomate-italiano",
        nombre: "Tomate Italiano",
        descripcion: "Carnoso, jugoso y de sabor intenso. Excelente fuente de licopeno y vitamina C, muy usado en salsas, ensaladas y guisos.",
        precio: "S/ 3.85 x kg",
        imagen: "https://tse2.mm.bing.net/th/id/OIP.MdCDHWNNT8HJD2e7vPv6sQHaEb?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        id: "lechuga-criolla",
        nombre: "Lechuga Criolla",
        descripcion: "Fresca, ligera y de hojas tiernas. Rica en agua, fibra y minerales, perfecta para ensaladas saludables y acompañamientos ligeros.",
        precio: "S/ 1.80 x c/u",
        imagen: "https://tse4.mm.bing.net/th/id/OIP.5v15EJ0doXsdsjb7mwfWIgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        id: "lenteja-serrana",
        nombre: "Lenteja Serrana",
        descripcion: "Pequeña, sabrosa y fácil de cocinar. Rica en hierro, proteínas y fibra, ideal para sopas, guisos y ensaladas.",
        precio: "S/ 6.50 x kg",
        imagen: "https://tse3.mm.bing.net/th/id/OIP.yhghynCbxnomAfcYSywV5QHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        id: "frijol-canario",
        nombre: "Frijol Canario",
        descripcion: "De textura cremosa y sabor suave. Muy nutritivo, alto en proteínas y minerales, base de guisos tradicionales como el tacu tacu.",
        precio: "S/ 7.80 x kg",
        imagen: "https://www.nor3peru.com/wp-content/uploads/2019/11/frijol-canario-1750-1280x841.png"
    },
    {
        id: "arveja-verde",
        nombre: "Arveja Verde Partida",
        descripcion: "Versátil y ligera, rica en proteínas vegetales, vitaminas del grupo B y fibra. Perfecta para sopas, purés y guisos.",
        precio: "S/ 6.80 x kg",
        imagen: "https://d26lpennugtm8s.cloudfront.net/stores/914/913/products/1010061-ddc49e3f30849f0b7315445545892210-1024-1024.jpg"
    },
    {
        id: "haba-verde",
        nombre: "Haba Verde",
        descripcion: "Tierna y fresca, rica en hierro, proteínas y fibra. Muy usada en guisos andinos, sopas y ensaladas.",
        precio: "S/ 4.80 x kg",
        imagen: "https://moisaner.com/wp-content/uploads/2020/02/Haba-verde.jpg"
    },
    {
        id: "quinoa-blanca",
        nombre: "Quinua Blanca",
        descripcion: "Superalimento andino, rica en proteínas completas, fibra y minerales. Ideal para ensaladas, guisos, desayunos y postres saludables.",
        precio: "S/ 12.00 x kg",
        imagen: "https://thumbs.dreamstime.com/b/quinoa-blanca-cruda-lat-blanco-crudo-de-las-semillas-la-chenopodium-en-placa-madera-con-el-foco-selectivo-cuchara-una-mitad-152983895.jpg"
    },
    {
        id: "kiwicha",
        nombre: "Kiwicha",
        descripcion: "Grano pequeño y ligero, con alto contenido de proteínas, calcio y antioxidantes. Perfecta en desayunos, barras energéticas y panes.",
        precio: "S/ 9.50 x kg",
        imagen: "https://portal.andina.pe/EDPfotografia3/Thumbnail/2021/06/02/000778971W.jpg"
    },
    {
        id: "maiz-morado",
        nombre: "Maiz Morado",
        descripcion: "Grano típico del Perú, base de la chicha morada y postres como la mazamorra. Muy rico en antioxidantes y beneficioso para la salud cardiovascular.",
        precio: "S/ 5.50 x kg",
        imagen: "https://th.bing.com/th/id/R.a0ee56f5010a1f067dcd20163b6c0efb?rik=uXidEGbmveujQQ&riu=http%3a%2f%2fmiagroexport.com.pe%2fassets%2fimages%2fproductos%2fmaiz-morado-11.jpg&ehk=c60fzIuxazZm15zDKFj%2bT%2fJqbOvJ2q2TN5yIkik71uw%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        id: "avena",
        nombre: "Avena Grano",
        descripcion: "Natural y energética, rica en fibra soluble, proteínas y minerales. Perfecta para desayunos, sopas y recetas nutritivas.",
        precio: "S/ 7.70 x kg",
        imagen: "https://2.bp.blogspot.com/-Xp73qgl6eQ0/WcFM_QSa03I/AAAAAAAAS7g/8n0cLFoNyX8MM8maev9MSLsJjDmID5i9ACLcBGAs/s1600/avena3.jpg"
    },

];

//2. Función para obtener parámetros de la URL
function obtenerParametroURL(nombre) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nombre);
}

// 3. Obtener el id del producto desde la URL
const productoId = obtenerParametroURL('id');

// 4. Buscar el producto correspondiente
const productoActual = Productos.find(producto => producto.id === productoId);

// 5. Contenedor de detalles
const ProductoDetalleContainer = document.getElementById('detalles-productos');

if (productoActual) {
    // Cambiar título de pestaña
    document.getElementById('project-title').textContent = productoActual.nombre;

    // Generar HTML dinámico
    const htmlContent = `
        <div class="row g-4">
        <div class="col-md-5 text-center">
        <img src="${productoActual.imagen}" class="img-fluid rounded shadow-sm border" alt="${productoActual.nombre}" style="max-height: 350px; object fit: contain;">
            </div>

            <div class="col-md-7 d-flex flex-column justify-content-center">
                <h2 class="fw-bold text-success mb-3">${productoActual.nombre}</h2>
                <p class="text-muted fs-5">${productoActual.descripcion}</p>
                <div class="d-flex text-centeralign-items-center mb-3">
                    <h4 class="text-primary text-center fw-bold me-3">${productoActual.precio}</h4>
                    <span class="badge bg-warning text-dark fs-6">Disponible</span>
                </div>

                <div class="d-flex gap-3 text-center">
                <button class="btn btn-lg btn-success btn-add-cart" 
                        data-id="${productoActual.id}" 
                        data-name="${productoActual.nombre}" 
                        data-price="${productoActual.precio.replace('S/','').replace('x kg','').trim()}">
                    🛒 Agregar al carrito
                </button>

                <button class="btn btn-lg btn-outline-danger btn-fav" 
                        data-id="${productoActual.id}" 
                        data-name="${productoActual.nombre}">
                    ❤️ Favorito
                </button>
            </div>

            </div>
        </div>

        <div class="row mt-5">
        <div class="col-12">
        <h4 class="fw-bold">Más información sobre ${productoActual.nombre}</h4>
        <p class="text-muted">Este producto es 100% orgánico y proviene de agricultores locales. Ideal para mantener una alimentación saludable y sostenible.
        Puedes incluirlo en tus recetas diarias o disfrutarlos frescos.</p>
        </div>
    </div>
    `;

    ProductoDetalleContainer.innerHTML = htmlContent;
} else {
    // Producto no encontrado
    ProductoDetalleContainer.innerHTML = `
        <div class="alert alert-danger" role="alert">
            Producto no encontrado. Revisa el enlace ingresado.
        </div>
    `;
}

//CARRITO
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

const cartItemsContainer = document.getElementById("cart-items");
const cartTotalElement = document.getElementById("cart-total");
const cartCountElement = document.getElementById("contador-carrito");

// Render carrito
function renderCarrito() {
    if (!cartItemsContainer) return;

    cartItemsContainer.innerHTML = "";
    let total = 0;

    carrito.forEach((item, index) => {
        total += item.precio;

        const li = document.createElement("div");
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        li.innerHTML = `
            ${item.nombre} - S/ ${item.precio.toFixed(2)}
            <button class="btn btn-sm btn-danger" onclick="eliminarProducto(${index})">X</button>
        `;
        cartItemsContainer.appendChild(li);
    });

    if (cartTotalElement) {
        cartTotalElement.innerText = "S/ " + total.toFixed(2);
    }

    actualizarContador();
}

// Agregar producto
function agregarAlCarrito(producto) {
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderCarrito();
}

// Eliminar producto
function eliminarProducto(index) {
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderCarrito();
    
}

// Contador carrito
function actualizarContador() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const contador = document.getElementById("cart-count");
    if (contador) {
        contador.textContent = carrito.length;
    }
    if (cartCountElement) {
        cartCountElement.innerText = carrito.length;
    }
}

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-add-cart")) {
        const producto = {
            id: e.target.dataset.id,
            nombre: e.target.dataset.name,
            precio: parseFloat(e.target.dataset.price)
        };
        agregarAlCarrito(producto);
        
    }

    // Botón favorito
    if (e.target.classList.contains("btn-fav")) {
        const id = e.target.dataset.id;
        const nombre = e.target.dataset.name;

        if (!favoritos.find(f => f.id === id)) {
            favoritos.push({ id, nombre });
            e.target.textContent = "💔 Quitar de favoritos";
            e.target.classList.remove("btn-outline-danger");
            e.target.classList.add("btn-danger");
        } else {
            favoritos = favoritos.filter(f => f.id !== id);
            e.target.textContent = "❤️ Favorito";
            e.target.classList.remove("btn-danger");
            e.target.classList.add("btn-outline-danger");
        }

        localStorage.setItem("favoritos", JSON.stringify(favoritos));
    }
});
renderCarrito();


document.getElementById("checkout-btn").addEventListener("click", () => {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío. Agrega productos antes de continuar.");
    return;
  }

  alert("¡Gracias por tu compra en EcoMarket!\nTu pedido está en proceso.");

  carrito.length = 0;
  renderCarrito();
});


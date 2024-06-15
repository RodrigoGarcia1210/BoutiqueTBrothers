const paginadiv = document.getElementById("pagina3");

function cargarContenido() {
    
    // Crear Header
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.textContent = "Sedan"; // Cambia el título según sea necesario
    header.appendChild(h1);
    document.body.appendChild(header);

    // Crear Nav
    const nav = document.createElement("nav");
    const links = [
        { href: "Prototipo.html", text: "Pagina Principal" },
        { href: "pickup.html", text: "Pick-Up" },
        { href: "suv.html", text: "Suv" },
        { href: "deluxe.html", text: "Deluxe" }
    ];

    links.forEach(linkData => {
        const link = document.createElement("a");
        link.href = linkData.href;
        link.textContent = linkData.text;
        nav.appendChild(link);
    });

    document.body.appendChild(nav);

    // Crear Contenedor de Tarjetas de Carros
    const carContainer = document.createElement("div");
    carContainer.id = "car-container";
    document.body.appendChild(carContainer);

    const sedanCars = [
        {
            imgSrc: "img/civic.jpeg",
            altText: "sedan 1",
            model: "Honda Civic Touring 2022",
            price: "$720,000",
            year: 2022,
            mileage: "25,000 km",
            description:
                "Pantalla de 10.2 pulgadas,Camara de reversa, Camara de punto ciego, Motor 4 cil turbo,176 HP, Paleta de cambios al volante, Modos de manejo, Sensores de estacionamiento delanteros y traseros, Control de velocidad crucero adaptativo, Cargador inalámbrico para smartphone, Quemacocos electricoSistema de sonido BOSE, Interior en piel",
        },
        {
            imgSrc: "img/audi.jpeg",
            altText: "sedan 2",
            model: "Audi RS Q8 2023",
            price: "$1,150,000",
            year: 2023,
            mileage: "5,000 km",
            description:
                "Impecable, Entrega inmediata Pantalla, Camara de reversa y frontal, Acabados exteriores en aluminio brillante, Calipers en color rojo brillante, Cristales de privacidad, Lavafaros, Techo panorámico en cristal, Acabados rs en aluminio, Spoiler trasero, Faros matrix led, Rines de aleación de 23”, Aire acondicionado de 4 zonas, Asistente de estacionamiento con vista 360•, Motor 4.0 T con 600 HP590 lb-pue torque, Transmisión automatica de 8 velocidades.",
        },
        {
            imgSrc: "img/jetta.jpeg",
            altText: "sedan 3",
            model: "Jetta Highline 2019",
            price: "$400,000",
            year: 2019,
            mileage: "5,000 km",
            description:
                "El mas equipado, Impecable, Factura de agencia, Unico dueño, 2 juegos de llave, Pantalla, Camara de reversa, Quemacocos, Motor turbo 1.4L.",
        },
        {
            imgSrc: "img/camry.jpeg",
            altText: "sedan 4",
            model: "Toyota Camry LE 2023",
            price: "$520,000",
            year: 2023,
            mileage: "4,000 km",
            description: "Impecable, Pantalla, Camara de reversa, Sistema android auto y apple carplay, Interior en tela, Motor 4 cil de 2.5 L, Transmisión automática, 201 HP, Control crucero.",
        },
    ];

    sedanCars.forEach((car) => {
        const carCard = document.createElement("div");
        carCard.className = "car-card";

        const carImg = document.createElement("img");
        carImg.src = car.imgSrc;
        carImg.alt = car.altText;

        const carDetails = document.createElement("div");
        carDetails.className = "car-details";

        const carModel = document.createElement("h2");
        carModel.textContent = car.model;

        const carPrice = document.createElement("p");
        carPrice.textContent = `Precio: ${car.price}`;

        const carYear = document.createElement("p");
        carYear.textContent = `Año: ${car.year}`;

        const carMileage = document.createElement("p");
        carMileage.textContent = `Kilometraje: ${car.mileage}`;

        const carDescription = document.createElement("p");
        carDescription.textContent = `Descripción: ${car.description}`;

        const contactButton = document.createElement("button");
        contactButton.textContent = "Contactar";

        // Manejar el clic en el botón de contacto
        contactButton.addEventListener('click', () => {
            const telefono = '526444074487'; // Reemplaza con tu número de WhatsApp
            const mensaje = `¡Hola! Estoy interesado en obtener más información sobre ${car.model}.`;
            const whatsappLink = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
            window.open(whatsappLink, '_blank');
        });

        carDetails.appendChild(carModel);
        carDetails.appendChild(carPrice);
        carDetails.appendChild(carYear);
        carDetails.appendChild(carMileage);
        carDetails.appendChild(carDescription);
        carDetails.appendChild(contactButton);

        carCard.appendChild(carImg);
        carCard.appendChild(carDetails);

        carContainer.appendChild(carCard);
    });

    // Crear Footer
    const footer = document.createElement("footer");
    const p = document.createElement("p");
    p.textContent = "© 2024 Equipo CODIGO 4AMPr";
    footer.appendChild(p);

    // Crear y actualizar Reloj dentro del footer
    function crearReloj() {
        const reloj = document.createElement("div");
        reloj.id = "reloj";
        footer.appendChild(reloj); // Añadir el reloj al footer

        function actualizarHora() {
            const ahora = new Date();
            const horas = agregarCero(ahora.getHours());
            const minutos = agregarCero(ahora.getMinutes());
            const segundos = agregarCero(ahora.getSeconds());
            reloj.textContent = `${horas}:${minutos}:${segundos}`;
        }

        function agregarCero(numero) {
            return numero < 10 ? "0" + numero : numero;
        }

        actualizarHora(); // Inicializa el reloj con la hora actual
        setInterval(actualizarHora, 1000); // Actualiza cada segundo
    }

    // Llamar a la función para crear el reloj
    crearReloj();

    // Añadir el footer al body después de añadir el reloj
    document.body.appendChild(footer);
}

// Cargar el contenido cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", cargarContenido);
const paginadiv = document.getElementById("pagina4");

// Función para cargar todo el contenido de la página
function cargarContenido() {
    
    // Crear Header
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.textContent = "SUV";
    header.appendChild(h1);
    document.body.appendChild(header);

    // Crear Nav
    const nav = document.createElement("nav");
    const links = [
        { href: "Prototipo.html", text: "Pagina Principal" },
        { href: "pickup.html", text: "Pick-Up" },
        { href: "sedan.html", text: "Sedan" },
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

    const suvCars = [
        {
            imgSrc: "img/siunna.jpeg",
            altText: "suv 1",
            model: "Toyota Sienna XSE Hybrid 2024",
            price: "$1,320,000",
            year: 2024,
            mileage: "5,000 km",
            description: "Nueva de paquete, Entrega inmediata Pantalla, Camara de reversa 360°, Compatible con apple carplay y android auto, Monitoreo de punto ciego, Motor 4 cil de 2.5L240 HP, Acceso smartkey, Aire accionado de 3 zonas, Apertura de cajuela y puertas laterales con manos libres (kick sensor), Asistencia de mantenimiento de carril."
        },
        {
            imgSrc: "img/suburban.jpg",
            altText: "suv 2",
            model: "Chevrolet Suburban LTZ 2015",
            price: "$750,000",
            year: 2015,
            mileage: "5,000 km",
            description: "Impecable, Pantalla, Camara de reversa, Motor 5.3L V8355 HP, Transmision automatica, 7 pasajeros, 4x4, Asistencia de estacionamiento frontal y trasera, Sensor de punto ciego."
        },
        {
            imgSrc: "img/yukkon.jpeg",
            altText: "suv 3",
            model: "GMC Yukon Denali 2022",
            price: "$400,000",
            year: 2022,
            mileage: "5,000 km",
            description: "Impecable, Pantalla Apple carplay y android auto, Camara de reversa y vision 360°, Estribos eléctricos 3 filas de asientos, Wrap negro matte (color original negro brillante), Motor 6.2L420HP, Transmision automatica de 10 velocidades Interior en piel, 4x4, Aire acondicionado de 3 zonas, Asistente de aparcamiento, Alerta de cambio de carril."
        },
        {
            imgSrc: "img/tahoe.jpeg",
            altText: "suv 4",
            model: "Chevrolet Tahoe RST 2021",
            price: "$950,000",
            year: 2021,
            mileage: "10,000 km",
            description: "Impecable, Pantalla, Camara de reversa, Motor 5.3L, 355 HP, 4x4, Transmisión automatica, 10 velocidades, Suspension trasera independiente, 3 filas de asientos, Contamos con financiamiento."
        }
    ];

    suvCars.forEach((car) => {
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

document.addEventListener("DOMContentLoaded", cargarContenido);
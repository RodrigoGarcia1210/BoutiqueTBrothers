const paginadiv = document.getElementById("pagina5");

function cargarContenido() {
    
    // Crear Header
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.textContent = "Deluxe";
    header.appendChild(h1);
    document.body.appendChild(header);

    // Crear Nav
    const nav = document.createElement("nav");
    const links = [
        { href: "Prototipo.html", text: "Pagina Principal" },
        { href: "pickup.html", text: "Pick-Up" },
        { href: "sedan.html", text: "Sedan" },
        { href: "suv.html", text: "Suv" }
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

    const deluxeCars = [
        {
            imgSrc: "img/corvet.jpeg",
            altText: "deluxe 1",
            model: "Corvette Stingray 2023 z51 70th Aniversario",
            price: "$1,320,000",
            year: 2023,
            mileage: "5,000 km",
            description: "Nuevo de paquete, Entrega inmediata, Pantalla de 12”, Carga inalámbrica de dispositivos Interior bitono, Detalles en alcantara, Motor 6.2L, 495 HP, Transmision automatica de doble embrague, 8 velocidades, 0-100 en 2.9 segundos, Diferentes modos de manejo, Tour, sport y track, Cambios al volante, Elevador de nariz ajustable.",
        },
        {
            imgSrc: "img/bmw.jpeg",
            altText: "deluxe 2",
            model: "BMW m2 Coupe 2024",
            price: "$1,200,000",
            year: 2024,
            mileage: "5,000 km",
            description: "Nuevo de paquete, Entrega inmediata, Pantalla, Camara de reversa, Motor 6 cil M twinpower turbo, Transmisión automática de 8 velocidades 460 Hp, Asientos deportivos forrado en piel, Acabado de interiores M iluminadosApertura/cierre de puertas sin utilizar llave, Techo en fibra de carbono, Paleta de cambios al volante, Suspension adaptativa M.",
        },
        {
            imgSrc: "img/mustang.jpeg",
            altText: "deluxe 3",
            model: "Ford Mustang Shelby GT500 2022",
            price: "$750,000",
            year: 2022,
            mileage: "5,000 km",
            description: "Impecable, Pantalla, Camara de reversa, Motor V8 5.2L, 760 HP y 625 Lb pie torque, Transmisión automatica de 7 velocidades, Asientos deportivos para conductor y copiloto.",
        },
        {
            imgSrc: "img/challenger.jpeg",
            altText: "deluxe 4",
            model: "Dodge Challenger SRT Hellcat 2019 Red Eye",
            price: "$870,000",
            year: 2019,
            mileage: "4,000 km",
            description: "Impecable, Pantalla, PantallaCamara de reversa, Motor v8 hemi de 6.2L, 797 HP y 707 lb-pie Torque, Transmisión automatica de 8 velocidades, Super cargador de 2.7L",
        },
    ];

    deluxeCars.forEach((car) => {
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
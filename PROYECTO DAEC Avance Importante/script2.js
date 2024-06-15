const paginadiv = document.getElementById("pagina2");

function cargarContenido() {
    
    // Crear Header
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.textContent = "Pick-Up"; // Título para la sección de Pick-Up
    header.appendChild(h1);
    document.body.appendChild(header);

    // Crear Nav
    const nav = document.createElement("nav");
    const links = [
        { href: 'Prototipo.html', text: 'Pagina Principal' },
        { href: 'sedan.html', text: 'Sedan' },
        { href: 'suv.html', text: 'Suv' },
        { href: 'deluxe.html', text: 'Deluxe' }
    ];

    links.forEach(linkData => {
        const link = document.createElement("a");
        link.href = linkData.href;
        link.textContent = linkData.text;
        nav.appendChild(link);
    });

    document.body.appendChild(nav);

    // Crear Contenedor de Tarjetas de Pick-Up
    const carContainer = document.createElement('div');
    carContainer.id = 'car-container';
    document.body.appendChild(carContainer);

    const pickupCars = [
        {
            imgSrc: 'img/lobo.jpeg',
            altText: 'Pick-Up 1',
            model: 'Ford Lobo Tremor 2022',
            price: '$1,600,000',
            year: 2022,
            mileage: '15,000 km',
            description: 'Impecable Pantalla de 12” y applink, Apple carplay y android auto, Camara de visión 360•, Estribos,  Roll bar, Motor 3.5L ecoboost v6431, HP577 lb-pie torque, 7 modos de manejo, Capacidad de arrastre de 6,350 Kg, Diferencial bloqueable, Control automatico de velocidad para offroad.'
        },
        {
            imgSrc: 'img/ranger.jpeg',
            altText: 'Pick-Up 2',
            model: 'Ford Ranger Raptor 2023',
            price: '$1,150,000',
            year: 2023,
            mileage: '5,000 km',
            description: 'Impecable, Pantalla táctil de 12”Rines y llanta nuevos, BeadlockLift,  kitPrograma, Compatible con apple carplay y android auto, Cámara de reversa y visión 360•, Sensores delanteros y traseros, Motor 3.0L v6 twin turbo, Transmision automatica de 10 velocidades, 394 HP y 362 LB-pie torque, Modos de manejo, Diferenciales bloqueables, Sistema avanzado de tracción 4x4, Suspensión fox live valve, Faros led automáticos, Estribos.'
        },
        {
            imgSrc: 'img/raptor.jpeg',
            altText: 'Pick-Up 3',
            model: 'Tacoma TRD sport 2024 4x4',
            price: '$1,450,000',
            year: 2024,
            mileage: '5,000 km',
            description: 'Nueva de paquete, Entrega inmediata Pantalla de 14”, Camara de reversaAsientos en tela bicolor, Sensores de proximidad, Estribos, Rines 18”, Luces led, Motor 4 cil 2.4L278HP y 317 Lb-pie torque, Transmision automatica de 8 velocidades, Toyota safety sense con freno autonomo de emergencia, Monitor de punto ciego .'
        },
        {
            imgSrc: 'img/silverado.jpeg',
            altText: 'Pick-Up 4',
            model: 'Chevrolet Silverado 2021',
            price: '$1,100,000',
            year: 2021,
            mileage: '10,000 km',
            description: 'Excelentes condiciones, Pantalla, Camara de reversa, Motor 6cil, Transmisión automática, 4x4, Rines de lujo, Llantas all terrain'
        }
    ];

    pickupCars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.className = 'car-card';

        const carImg = document.createElement('img');
        carImg.src = car.imgSrc;
        carImg.alt = car.altText;

        const carDetails = document.createElement('div');
        carDetails.className = 'car-details';

        const carModel = document.createElement('h2');
        carModel.textContent = car.model;

        const carPrice = document.createElement('p');
        carPrice.textContent = `Precio: ${car.price}`;

        const carYear = document.createElement('p');
        carYear.textContent = `Año: ${car.year}`;

        const carMileage = document.createElement('p');
        carMileage.textContent = `Kilometraje: ${car.mileage}`;

        const carDescription = document.createElement('p');
        carDescription.textContent = `Descripción: ${car.description}`;

        const contactButton = document.createElement('button');
        contactButton.textContent = 'Contactar';

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
    document.body.appendChild(footer);
}

// Cargar el contenido cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', cargarContenido);
document.addEventListener("DOMContentLoaded", function() {
    crearHeader();
    crearNavegacion();
    crearPresentacion();
    crearImagenEmpresa();
    crearTestimonios();
    crearFormularioContacto();
    crearMapa();
    crearSeccionRedesSociales();
    crearFooter();
});

function crearHeader() {
    const header = document.createElement("header");
    header.innerHTML = `
        <h1>Premium Motors Cajeme</h1>
        <img src="img/Logo.jpeg" alt="Logo de Premium Motors Cajeme">
    `;
    document.body.appendChild(header);
}

function crearNavegacion() {
    const nav = document.createElement("nav");
    nav.innerHTML = `
        <a href="pickUp.html">Pick-Up</a>
        <a href="sedan.html">Sedan</a>
        <a href="suv.html">Suv</a>
        <a href="deluxe.html">Deluxe</a>
    `;
    document.body.appendChild(nav);
}

function crearPresentacion() {
    const presentacion = document.createElement("section");
    presentacion.id = "presentacion";
    presentacion.innerHTML = `
        <h2>Bienvenidos a Premium Motors Cajeme</h2>
        <p>¡Bienvenidos a Premium Motors Cajeme! En el corazón de la encantadora ciudad de Cajeme, Sonora, les damos la más cálida bienvenida a Premium Motors, donde la excelencia automotriz y el servicio excepcional se fusionan para ofrecerle una experiencia única en la búsqueda de su vehículo ideal.</p>
        <p>Sumérjase en el mundo del automóvil mientras exploramos juntos las emocionantes posibilidades que ofrecemos. Desde robustas camionetas pick-up hasta elegantes sedanes, y desde espaciosos SUV hasta lujosos modelos deluxe, en Premium Motors encontrará una amplia selección de vehículos que se adaptan a cada estilo de vida y necesidad.</p>
        <p>Nuestro compromiso con la calidad y la satisfacción del cliente es insuperable. Cada automóvil en nuestro lote ha sido cuidadosamente seleccionado y sometido a rigurosas pruebas para garantizar su rendimiento y fiabilidad. Estamos aquí para ayudarlo a encontrar no solo un vehículo, sino su compañero de viaje perfecto, listo para llevarlo a donde quiera ir con seguridad y estilo.</p>
    `;
    document.body.appendChild(presentacion);
}

function crearImagenEmpresa() {
    const imagenEm = document.createElement("section");
    imagenEm.id = "imagenEm";
    imagenEm.innerHTML = `
        <div class="galeria-item">
            <img src="img/empresa1.jpg" alt="Imagen de la Empresa">
        </div>
    `;
    document.body.appendChild(imagenEm);
}

function crearTestimonios() {
    const testimonios = document.createElement("section");
    testimonios.className = "testimonios";
    testimonios.innerHTML = `
        <h2>Lo que nuestros clientes dicen</h2>
        <blockquote>Excelente servicio y atención personalizada.<cite>- Armando Casas</cite></blockquote>
        <blockquote>Gran variedad de autos y precios competitivos.<cite>- Elena Nito</cite></blockquote>
        <blockquote>Recomiendo Premium Motors a todos mis amigos.<cite>- Zacarias Flores Del Campo</cite></blockquote>
    `;
    document.body.appendChild(testimonios);
}

function crearFormularioContacto() {
    const formularioContacto = document.createElement("form");
    formularioContacto.id = "formularioContacto";
    formularioContacto.setAttribute("action", "https://formsubmit.co/garciatorres.luisrodrigo.cb37@email.com");
    formularioContacto.setAttribute("method", "POST");
    formularioContacto.innerHTML = `
        <h2>Formulario para Opiniones</h2>
        <div>
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required>
        </div>
        <div>
            <label for="email">Correo electrónico:</label>
            <input type="email" id="email" name="email" required>
        </div>
        <div>
            <label for="asunto">Asunto:</label>
            <input type="text" id="asunto" name="asunto" required>
        </div>
        <div>
            <label for="mensaje">Mensaje:</label>
            <textarea id="mensaje" name="mensaje" rows="4" required></textarea>
        </div>
        <input type="submit" value="Enviar">
    `;
    document.body.appendChild(formularioContacto);
}

function crearMapa() {
    const mapaContainer = document.createElement("div");
    mapaContainer.id = "mapa-container";
    mapaContainer.innerHTML = `
        <h2>Encuéntranos en nuestra ubicación</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14158.29155140226!2d-109.949429!3d27.4825534!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86c815f8a65cab41%3A0x2b033666b0f31892!2sPremium%20Motors!5e0!3m2!1ses-419!2smx!4v1718289233594!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `;
    document.body.appendChild(mapaContainer);
}

function crearSeccionRedesSociales() {
    const seccionRedesSociales = document.createElement("div");
    seccionRedesSociales.id = "seccionRedesSociales";
    seccionRedesSociales.innerHTML = `
        <h2>Contáctanos en nuestras redes sociales:</h2>
        <a href="https://www.facebook.com/PremiumMotorsOficial" target="_blank"><img src="img/facebook.jpeg" alt="Facebook"></a>
        <a href="https://www.instagram.com/premiummotors_obr/" target="_blank"><img src="img/instagram.png" alt="Instagram"></a>
        <a href="https://www.tiktok.com/@premiummotorsobre" target="_blank"><img src="img/tiktok.png" alt="TikTok"></a>
    `;
    document.body.appendChild(seccionRedesSociales);
}

function crearFooter() {
    const footer = document.createElement("footer");
    footer.innerHTML = `
        <p>© 2024 Equipo CODIGO 4AMPr</p>
        <div id="reloj"></div>
    `;
    document.body.appendChild(footer);
}
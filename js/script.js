// Validación y manejo del formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    
    // Simulación de envío
    if(nombre && email) {
        alert('Gracias ' + nombre + '. Hemos recibido tu mensaje, te contactaremos pronto.');
        this.reset();
    }
});

// Efecto en la barra de navegación al hacer scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if(window.scrollY > 50) {
        navbar.style.padding = '1rem 5%';
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        navbar.style.padding = '1.5rem 5%';
        navbar.style.background = '#fff';
    }
});

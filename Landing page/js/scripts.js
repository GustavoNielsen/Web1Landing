window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    document
    .getElementById("ContatoForm")
    .addEventListener("submit", function(event){
        event.preventDefault();
        const formData = {
            nome: document.getElementById("name").value,
            email: document.getElementById("email").value,
            cell: document.getElementById("phone").value,
            msg : document.getElementById("message").value,  
        };
        console.log("Dados:", formData);
        fetch("https://localhost:3333/mensagem", {
            method: "POST",
            headers:
              "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    )
    .then((response) => response.json ())
    .then((data) => {
        console.log("Success:", data);
        alert("Mensagem enviada com sucesso!");
    })
    .catch((error) => {
        console.error("Error:", error);
        alert("Ocorreu um erro ao enviar a mensagem.");
    });
    });

});

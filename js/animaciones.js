
$(document).ready(function () {

    function mostrarElementos() {

        $(".reveal").each(function () {

            const posicion = $(this).offset().top;
            const pantalla = $(window).scrollTop() + $(window).height();

            if (pantalla > posicion + 80) {

                $(this).addClass("is-visible");

            }

        });

    }

    
    mostrarElementos();

    
    $(window).on("scroll", function () {

        mostrarElementos();

    });

});

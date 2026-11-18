
$(document).ready(function () {


    $(window).on("scroll", function () {

        if ($(this).scrollTop() > 50) {
            $(".navbar").addClass("scrolled");
        } else {
            $(".navbar").removeClass("scrolled");
        }


        if ($(this).scrollTop() > 400) {
            $("#btnArriba").addClass("visible");
        } else {
            $("#btnArriba").removeClass("visible");
        }

    });


    $(".navbar-nav .nav-link").on("click", function () {

        $(".navbar-collapse").collapse("hide");

    });


    $("#btnArriba").on("click", function () {

        $("html, body").animate({
            scrollTop: 0
        }, 700);

    });


    $("#formContacto").on("submit", function (event) {

        const nombre = $("#nombre").val().trim();
        const correo = $("#correo").val().trim();
        const mensaje = $("#mensaje").val().trim();

        if (nombre === "" || correo === "" || mensaje === "") {

            event.preventDefault();

            $("#respuestaFormulario")
                .text("Por favor, completa los campos obligatorios.")
                .css("color", "#DC2626");

            return;
        }

    });
});

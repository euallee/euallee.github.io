$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
    });

    var typed = new Typed(".typing", {
        strings: ["MultiFunções", "Desenvolvedor Front-end", "Desenvolvedor Back-end", "Assistente de TI"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["MultiFunções", "Desenvolvedor Front-end", "Desenvolvedor Back-end", "Assistente de TI"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 1000,
        autoplayHoverPauser: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

    $(document).ready(function () {
        $(".btn-submit").on("click", function () {
            //cria uma serialização com os dados do formulário
            var dados = $("#contato").serialize();

            $.ajax({
                url: "/pages/sendMsg.php",
                data: dados,
                dataType: "HTML",
                method: "POST"
            }).done(function (retorno) {
                //aqui mostrará o retorno se bem sucedido
                alert(retorno);
            }).fail(function (retorno) {
                //aqui mostrará o retorno se mal sucedido
                alert(retorno);
            });

        });
    });
});
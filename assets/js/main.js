$(document).ready(function () {
    //Preloader
    $(window).on('load', function () {
        $('#loaderContainer').delay(500).fadeOut(500);
    });

    //navigation-none
    let bottom = document.querySelector('#bottom-navigation')
    $(window).scroll(function () {
        if ($(this).scrollTop() > 6000) {
            $(bottom).addClass('hidden');
        }
        else {
            $(bottom).removeClass('hidden');
        }
    });


    //search-sidebar
    $('#sidebar').on('click', function () {
        $('#separator-sidebar').toggle('hidden')
        $("#overlay").toggle('hidden')
    })
    $('#overlay').on('click', function () {
        $('#separator-sidebar').toggle('hidden')
        $("#overlay").toggle('hidden')

    })



    //bonus-slider
    if ($(".bonus").length !== 0) {
        $(".bonus").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            dots: false,
            arrows: false,
        });
    }

    //testominal-slider
    if ($(".project-testominal").length !== 0) {
        $(".project-testominal").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            dots: false,
            arrows: false,
        });
    }

    //service-slider
    if ($(".project-new").length !== 0) {
        $(".project-new").slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            dots: false,
            arrows: true,
            prevArrow: '.prev-new',
            nextArrow: '.next-new',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
    }

    //service-slider
    if ($(".project-pop").length !== 0) {
        $(".project-pop").slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            dots: false,
            arrows: true,
            prevArrow: '.prev-pop',
            nextArrow: '.next-pop',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
    }

    //service-slider
    if ($(".slider").length !== 0) {
        $(".slider").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            dots: true,
            arrows: false,
            centerMode: true,
            centerPadding: '20px',
        });
    }

})

// Mobile menu js
const toggleMenu = () => {
    const menus = document.querySelector('.menus');
    const overlay = document.querySelector('.overlay');
    menus.classList.toggle('open-menus');
    overlay.classList.toggle('hidden');
};


// Scroll to top
const scrollToTop = () => {
    document.documentElement.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

window.onscroll = function () {
    setOnScroll();
};

const setOnScroll = () => {
    let scrollpos = window.scrollY;
    if (scrollpos > 100) {
        document.getElementById('scrollToTopBtn')?.classList.remove('hidden');
        document.getElementById('top-header')?.classList.add('sticky-header');
    } else {
        document.getElementById('scrollToTopBtn')?.classList.add('hidden');
        document.getElementById('top-header')?.classList.remove('sticky-header');
    }
};
setOnScroll();

//Tab
const tabs = document.querySelector(".wrapper");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");

tabs.onclick = e => {
    const id = e.target.dataset.id;
    if (id) {
        tabButton.forEach(btn => {
            btn.classList.remove("active");
        });
        e.target.classList.add("active");

        contents.forEach(content => {
            content.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
}



//counter
function decrement(e) {
    const btn = e.target.parentNode.parentElement.querySelector(
        'button[data-action="decrement"]'
    );
    const target = btn.nextElementSibling;
    let value = Number(target.value);
    value--;
    target.value = value;
    if ($('#input').val() <= 1) {
        $('#input').val(1);
    }
}
function increment(e) {
    const btn = e.target.parentNode.parentElement.querySelector(
        'button[data-action="decrement"]'
    );
    const target = btn.nextElementSibling;
    let value = Number(target.value);
    value++;
    target.value = value;
}
const decrementButtons = document.querySelectorAll(
    `button[data-action="decrement"]`
);
const incrementButtons = document.querySelectorAll(
    `button[data-action="increment"]`
);
decrementButtons.forEach(btn => {
    btn.addEventListener("click", decrement);
});
incrementButtons.forEach(btn => {
    btn.addEventListener("click", increment);
});

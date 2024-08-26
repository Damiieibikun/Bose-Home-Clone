$(document).ready(() => {
    let lastScrollTop = 0;
    const nav = $('#fixedNav');

    $(window).on('scroll', function() {
        let currentScroll = $(this).scrollTop();
        nav.stop();

        if (currentScroll > lastScrollTop) {
            nav.slideUp(100, 'linear')
        } else {

            nav.slideDown(100, 'linear')
        }

        lastScrollTop = currentScroll;
    });
    // mega menu
    $('#shop').mouseover(function(e) {
        e.stopPropagation()
        $('#show-shop').removeClass('hidden');
        $('#show-shop').addClass('grid');
        $('#show-explore').addClass('hidden');
        $('#show-support').addClass('hidden');
        $('body').addClass('overflow-hidden')
    })
    $('#explore').mouseover(function(e) {
        e.stopPropagation()
        $('#show-explore').removeClass('hidden');
        $('#show-explore').addClass('grid');
        $('#show-shop').addClass('hidden');
        $('#show-support').addClass('hidden');
        $('body').addClass('overflow-hidden')
    })
    $('#support').mouseover(function(e) {
        e.stopPropagation()
        $('#show-support').removeClass('hidden');
        $('#show-support').addClass('grid');
        $('#show-shop').addClass('hidden');
        $('#show-explore').addClass('hidden');
        $('body').addClass('overflow-hidden')
    })
    $('#main-nav').mouseover(function() {
        $('#show-shop').addClass('hidden');
        $('#show-explore').addClass('hidden');
        $('#show-support').addClass('hidden');
        $('body').removeClass('overflow-hidden')
    })

    // first slick
    $('.multiple-items').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }

        ],
        prevArrow: ".previous ",
        nextArrow: ".next ",
    });

    // second slick
    $('.responsive').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
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

        ],
        prevArrow: ".previous2 ",
        nextArrow: ".next2 ",
    });


    // third slick
    $('.second-responsive').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ],
        prevArrow: ".previous3 ",
        nextArrow: ".next3 ",
    });


    // fourth slick
    $('.third-responsive').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
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

        ],
        prevArrow: ".previous4 ",
        nextArrow: ".next4",
    });


    // responsive dropdown footer
    $('.dropdown-list').click(function() {
        $(this).next().toggleClass('hidden')
        $(this).find('.bi-plus-lg').toggleClass('hidden flex')
        $(this).find('.bi-dash-lg').toggleClass('hidden flex')

    })

    //form validation
    $('#floatingInput').blur(function() {
        if ($(this).val() == '') {
            $('#input-error').removeClass('hidden')
            $('#input-error').text('*Please fill out this field.')
        } else {
            $('#input-error').addClass('hidden')
        }

    })

    //test
    document.querySelectorAll('.offcanvas-link').forEach(link => {
        link.addEventListener('click', function() {
            let offcanvasElement = document.querySelector('#offcanvasNavbar');
            let bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
            bsOffcanvas.hide(); 
        });        
    });
})
(function($) {

    $(document).ready(function () {
    
    // Banner Slider
    $('.banner-slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: true,
        });


        // Categories Nav
        $(".have-sub-menu.categories").click(function(){
            $(this).toggleClass("active");
        });

        $(".close-menu").click(function(){
            $(".mobile-nav").removeClass("is-visible");
            $(".menu-wrapper").removeClass("is-visible");
            $(".list-wrapper").removeClass("is-visible");
        });

        $(".toggle-menu").click(function(){
            $(".mobile-nav").addClass("is-visible");
        });

        $(".toggle-menu").click(function(){
            $(".list-wrapper:first-child").toggleClass("is-visible");
        });

        // Mobile Cart
        $(".shopping-btn").click(function(){
            $("body").toggleClass("cart-active");
        });

        $(".shopping-cart .close").click(function(){
            $("body").removeClass("cart-active");
        });


    // Mobile Only Slider - Products
    mobileOnlySlider(".mobileSlider", true, false, 640);
    function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
        var slider = $($slidername);
        var settings = {
            mobileFirst: true,
            dots: $dots,
            arrows: $arrows,
            responsive: [
                {
                    breakpoint: $breakpoint,
                    settings: "unslick"
                }
            ]
        };

        slider.slick(settings);

        $(window).on("resize", function () {
            if ($(window).width() > $breakpoint) {
                return;
            }
            if (!slider.hasClass("slick-initialized")) {
                return slider.slick(settings);
            }
        });
    } 


      $(document).on('click', '.back-one-level', function() {
        var $this = $(".list-wrapper.is-visible");
        if ($this.hasClass('first-item')) {
            
            $(".mobile-nav").removeClass("is-visible");
            $(".menu-wrapper").removeClass("is-visible");
            $(".list-wrapper").removeClass("is-visible");
        }else{
            $this.prev(".list-wrapper").addClass("is-visible");
            $this.removeClass("is-visible");

        }
    });





});

})(jQuery);


// Jquery Fix for Speed Insights
jQuery.event.special.touchstart = {
    setup: function( _, ns, handle ) {
        this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault") });
    }
};
jQuery.event.special.touchmove = {
    setup: function( _, ns, handle ) {
        this.addEventListener("touchmove", handle, { passive: !ns.includes("noPreventDefault") });
    }
};
jQuery.event.special.wheel = {
    setup: function( _, ns, handle ){
        this.addEventListener("wheel", handle, { passive: true });
    }
};
jQuery.event.special.mousewheel = {
    setup: function( _, ns, handle ){
        this.addEventListener("mousewheel", handle, { passive: true });
    }
};


// Multi level Mobile Nav
const pageHeader = document.querySelector(".page-header");
const toggleMenu = document.querySelector(".toggle-menu");
const menuWrapper = pageHeader.querySelector(".menu-wrapper");
const level1Links = pageHeader.querySelectorAll(".level-1 > li > a");
const listWrapper = pageHeader.querySelector(".list-wrapper:first-child");
const listWrapper2 = pageHeader.querySelector(".list-wrapper:nth-child(2)");
const listWrapper3 = pageHeader.querySelector(".list-wrapper:nth-child(3)");
const listWrapper4 = pageHeader.querySelector(".list-wrapper:nth-child(4)");
const subMenuWrapper2 = listWrapper2.querySelector(".sub-menu-wrapper");
const subMenuWrapper3 = listWrapper3.querySelector(".sub-menu-wrapper");
const subMenuWrapper4 = listWrapper4.querySelector(".sub-menu-wrapper");
const backOneLevelBtns = pageHeader.querySelectorAll(".back-one-level");
const isVisibleClass = "is-visible";
const isActiveClass = "is-active";



for (const level1Link of level1Links) {
level1Link.addEventListener("click", function (e) {
    const siblingList = level1Link.nextElementSibling;
    if (siblingList) {
    e.preventDefault();
    this.classList.add(isActiveClass);
    const cloneSiblingList = siblingList.cloneNode(true);
    subMenuWrapper2.innerHTML = "";
    subMenuWrapper2.append(cloneSiblingList);
    listWrapper2.classList.add(isVisibleClass);
    listWrapper.classList.remove(isVisibleClass);
    
    }
});
}

listWrapper2.addEventListener("click", function (e) {
const target = e.target;
if (target.tagName.toLowerCase() === "a" && target.nextElementSibling) {
    const siblingList = target.nextElementSibling;
    e.preventDefault();
    target.classList.add(isActiveClass);
    const cloneSiblingList = siblingList.cloneNode(true);
    subMenuWrapper3.innerHTML = "";
    subMenuWrapper3.append(cloneSiblingList);
    listWrapper3.classList.add(isVisibleClass);
    listWrapper2.classList.remove(isVisibleClass);
    listWrapper2.classList.remove(isVisibleClass);
}
});

listWrapper3.addEventListener("click", function (e) {
const target = e.target;
if (target.tagName.toLowerCase() === "a" && target.nextElementSibling) {
    const siblingList = target.nextElementSibling;
    e.preventDefault();
    target.classList.add(isActiveClass);
    const cloneSiblingList = siblingList.cloneNode(true);
    subMenuWrapper4.innerHTML = "";
    subMenuWrapper4.append(cloneSiblingList);
    listWrapper4.classList.add(isVisibleClass);
    listWrapper3.classList.remove(isVisibleClass);
}
});


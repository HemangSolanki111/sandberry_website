// Scroll Arrow Back to Top
$(window).scroll(function () {
	if ($(this).scrollTop() >= 80) {        // If page is scrolled more than 80px
		$('#back_to_top_arrow').fadeIn(200);    // Fade in the arrow
	} else {
		$('#back_to_top_arrow').fadeOut(200);   // Else fade out the arrow
	}
});

$('#back_to_top_arrow').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
});


// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
} 


// Nav Hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapes = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
    a.addEventListener("click", function (){
        navCollapes.classList.remove("show");
    });
});


$(document).click(function(event) {
    if(!$(event.target).is('.navbar-collapse *')) {
        $('.navbar-collapse').collapse('hide');
    }
});


// Header carousel
$(".header-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    items: 1,
    dots: true,
    loop: true,
    nav : true,
    // navText : [
    //     '<i class="bi bi-chevron-left"></i>',
    //     '<i class="bi bi-chevron-right"></i>'
    // ]
});



// Counter 
// function updateCounter() {
//     let count = parseInt(localStorage.getItem('counter1')) || 2543258;

//     document.getElementById('counter1').innerText = count;

//     count++;

//     localStorage.setItem('counter1', count);

// }

// function refreshPage() {
//     setTimeout(function () {
//         updateCounter();
//         refreshPage();
//     }, 1000);
// }
// refreshPage();


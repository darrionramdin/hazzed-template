$(function() {
	"use strict";

	// data-image functionality
	const imageElements = $('[data-image]');
    for(let element of imageElements) {
        $(element).css("background-image",`url(${$(element).data('image')})`);
    }

    // Smooth Scrolling
    $('.navbar .nav-link, .scroll-link').on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 1000);
        e.preventDefault();
        
    });

	// Animate on scroll
    AOS.init({
    	delay: 300,
    	once: true
    });

    // Portfolio lightbox - remove to return to default linking (no lightbox)
    $('.portfolio-grid a, .portfolio-grid-normal a').featherlight({
    	targetAttr: 'data-image'
    })

})
;
(function ($) {
	"use strict";

	const newsSlider = $('.ba-news-slider');
	newsSlider.slick({
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplaySpeed: 4000,
		prevArrow: '.ba-hot-slider-prev',
		nextArrow: '.ba-hot-slider-next',
	});

	$(document).ready(function () {
		$("a[href*='#']:not([href='#'])").on("click", function (event) {
			event.preventDefault();
			var id = $(this).attr('href'),
				top = $(id).offset().top;
			$('body,html').animate({
				scrollTop: top
			}, 1000);
		});
	});
})(jQuery);
//init Map
function initMap() {
// center map
	const center = {lat: 40.694626, lng: -73.897717};
//create map
	const baMap = new google.maps.Map(
		document.querySelector('.ba-map'), {
			styles: [
				{
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#f5f5f5"
					}
				  ]
				},
				{
				  "elementType": "labels.icon",
				  "stylers": [
					{
					  "visibility": "off"
					}
				  ]
				},
				{
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#616161"
					}
				  ]
				},
				{
				  "elementType": "labels.text.stroke",
				  "stylers": [
					{
					  "color": "#f5f5f5"
					}
				  ]
				},
				{
				  "featureType": "administrative.land_parcel",
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#bdbdbd"
					}
				  ]
				},
				{
				  "featureType": "poi",
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#eeeeee"
					}
				  ]
				},
				{
				  "featureType": "poi",
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#757575"
					}
				  ]
				},
				{
				  "featureType": "poi.park",
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#e5e5e5"
					}
				  ]
				},
				{
				  "featureType": "poi.park",
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#9e9e9e"
					}
				  ]
				},
				{
				  "featureType": "road",
				  "stylers": [
					{
					  "visibility": "off"
					}
				  ]
				},
				{
				  "featureType": "road",
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#ffffff"
					}
				  ]
				},
				{
				  "featureType": "road.arterial",
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#757575"
					}
				  ]
				},
				{
				  "featureType": "road.highway",
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#dadada"
					}
				  ]
				},
				{
				  "featureType": "road.highway",
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#616161"
					}
				  ]
				},
				{
				  "featureType": "road.local",
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#9e9e9e"
					}
				  ]
				},
				{
				  "featureType": "transit.line",
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#e5e5e5"
					}
				  ]
				},
				{
				  "featureType": "transit.station",
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#eeeeee"
					}
				  ]
				},
				{
				  "featureType": "water",
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#c9c9c9"
					}
				  ]
				},
				{
				  "featureType": "water",
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#9e9e9e"
					}
				  ]
				}
			  ],
			zoom: 13,
			center: center,
			disableDefaultUI: true
		});
//create marker
		const marker = new google.maps.Marker({
			position: center,
			map: baMap,
			icon: './img/Pin.png',
			animation: google.maps.Animation.DROP
		});
}

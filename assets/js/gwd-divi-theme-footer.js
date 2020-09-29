// Add Loaded Class to Body
document.body.classList.add("gwd_loaded");

jQuery(document).ready(function($) { 
	// Sticky Navbar
    var navbarHeight = $('#primary_navbar').height(),
          breadcrumbPad = navbarHeight + 10;
    document.documentElement.style.setProperty('--navbarHeight', navbarHeight + 'px');
    document.documentElement.style.setProperty('--breadcrumbPad', breadcrumbPad + 'px');
    
    var $body = $('body');
  	$(window).scroll(function(){

      	if( $(window).scrollTop() > 100 ){
          $body.addClass('gwd_window_scrolled');
        }else{
          $body.removeClass('gwd_window_scrolled');
        }
      
      	var navHeight = $('#primary_navbar').height(),
            breadPad = navHeight + 10;
      
      	document.documentElement.style.setProperty('--navbarHeight', navHeight + 'px');
    	document.documentElement.style.setProperty('--breadcrumbPad', breadPad + 'px');
    });
});


/*
* Shuffle jQuery array of elements - see Fisher-Yates algorithm
*/
jQuery.fn.shuffle = function () {
    var j;
    for (var i = 0; i < this.length; i++) {
        j = Math.floor(Math.random() * this.length);
        jQuery(this[i]).before(jQuery(this[j]));
    }
    return this;
};
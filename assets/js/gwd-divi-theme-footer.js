jQuery(document).ready(function($) { 
	console.log('doc ready | 0.9.08');
	
  
  	// LightGallery
  	console.log( $('.gwd_child__image_lightbox').length );
  	/*$('.gwd_child__image_lightbox').lightGallery({
      	selector: '.et_pb_lightbox_image',
    });*/
    /*$('.gwd_lightGallery_img').lightGallery({
    });*/
    
    
    var $lg = $('.gwd_lightGallery_img');
 
	$lg.lightGallery();
	 
	// Perform any action just before opening the gallery
	$lg.on('onBeforeOpen.lg',function(event){
	    alert('onBeforeOpen');
	});
	 
	// custom event with extra parameters 
	// index - index of the slide
	// fromTouch - true if slide function called via touch event or mouse drag
	// fromThumb - true if slide function called via thumbnail click
	$lg.on('onBeforeSlide.lg',function(event, index, fromTouch, fromThumb){
	    console.log(index, fromTouch, fromThumb);
	});
    
    console.log('after lG call');
});
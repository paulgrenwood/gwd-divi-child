<?php

function gwd_divi_theme_scripts(){
	// Divi Main Theme CSS
	wp_enqueue_style( 'parent-css', get_template_directory_uri() . '/style.css' );
	
	// bxSlider
	//wp_enqueue_style( 'bxSlider-css', get_stylesheet_directory_uri() . '/assets/vendor/bxslider/jquery.bxslider.css', false, '4.2.12' );
	//wp_enqueue_script('bxSlider-js', get_stylesheet_directory_uri() . '/assets/vendor/bxslider/jquery.bxslider.js', array('jquery'), '4.2.12', true );
	
	
	// lightSlider
	wp_enqueue_style( 'lightSlider-css', get_stylesheet_directory_uri() . '/assets/vendor/lightslider/css/lightslider.css', false, '1.1.6' );
	wp_enqueue_script( 'lightSlider', get_stylesheet_directory_uri() . '/assets/vendor/lightslider/js/lightslider.js', array('jquery'), '1.1.6', true );
	
	// lightGallery
	wp_enqueue_style( 'lightGallery-css', get_stylesheet_directory_uri() . '/assets/vendor/lightgallery/css/lightgallery.css', false, '1.8.2' );
	wp_enqueue_script( 'lightGallery', get_stylesheet_directory_uri() . '/assets/vendor/lightgallery/js/lightgallery.js', array('jquery'), '1.8.2', false );
	wp_enqueue_script( 'lightGallery-thumbnail', get_stylesheet_directory_uri() . '/assets/vendor/lightgallery/modules/lg-thumbnail.js', array('jquery', 'lightGallery'), '1.8.2', false );
	
	
	// Child Theme Assets
	wp_dequeue_style( 'divi-style-css' );
	//wp_enqueue_script( 'gwd-divi-theme-js', get_stylesheet_directory_uri() . '/assets/js/gwd-divi-theme-footer.js', array('jquery', 'lightGallery-js'), '0.9.08', true );
	wp_enqueue_style( 'gwd-divi-theme-css', get_stylesheet_directory_uri() . '/assets/css/gwd-divi-theme-style.css', false, '0.9.17' );
}
add_action('wp_enqueue_scripts', 'gwd_divi_theme_scripts');
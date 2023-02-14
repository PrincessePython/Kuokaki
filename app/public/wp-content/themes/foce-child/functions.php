<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
}

// Get customizer options form parent theme
if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; // prevent update to child theme mods
    }, 10, 2 );
    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    } );
}

// Ajoute le JS sur toutes les pages
function my_scripts() {
    wp_enqueue_script( 'style.js', get_stylesheet_directory_uri() . '/js/style.js', array(),  true );
    wp_enqueue_script( 'style.js', get_stylesheet_directory_uri() . '/js/dom.js', array(),  true );
  }
  add_action( 'wp_enqueue_scripts', 'my_scripts' );

// Ajoute du CSS

  
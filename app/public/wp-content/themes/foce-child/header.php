<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">


    <!-- ajoute des fichiers CSS -->
    <link rel="stylesheet" href="wp-content/themes/foce-child/style.css">

    <!-- Ajout de Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@700&family=Syne:wght@400;700;800&display=swap" rel="stylesheet">

    <!-- ajoute de jQuery -->
    <!-- <script
        src="https://code.jquery.com/jquery-3.6.3.min.js"
        integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU="
        crossorigin="anonymous">
    </script> -->


    <!-- CDN de Swiper -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" />
    <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <div id="page" class="site">
        <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e('Skip to content', 'foce'); ?></a>

        <header id="masthead" class="site-header">
            <nav id="site-navigation" class="main-navigation">
                <!-- <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="true">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </button> -->
                <div class="site-name">
                    <ul>
                        <li class="site-title"><a href="<?php echo esc_url(home_url('/')); ?>" rel="home"><?php bloginfo('name'); ?></a></li>
                    </ul>
                </div>

                <div class="burger-menu-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </nav>
                <!-- <div class="burger-menu-opened">
                    <div class="logo-burger-opened">
                        <img src="../../uploads/2023/02/LOGO-150x97.png" alt="logo studio d'animation">
                        <img src="../foce-child/assets/images/logo.png" alt="logo studio d'animation">
                        <img src="http://koukaki.local/wp-content/uploads/2023/02/LOGO.png" alt="logo studio d'animation"> 
    
                    </div>
                    <ul class="burger-menu-links">
                        <li><a href="#story">Histoire</a></li>
                        <li><a href="#characters">Personnages</a></li>
                        <li><a href="#place">Lieu</a></li>
                        <li><a href="#studio">Studio Koukaki</a></li>
                    </ul>

                    <div class="footer-link">
                        <ul class="burger-menu-footer-link">
                            <li><a href="#">STUDIO KOUKAKI</a></li>
                        </ul>
                    </div>

                </div>
    
                <div class="burger-overlay"></div> -->
        </header>


        <!----------------------------------- VO  -------------------------------------------------->
        <!-- <header id="masthead" class="site-header">
            <nav id="site-navigation" class="main-navigation">
                <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </button>
                <ul>
                    <li><a href="#story">Histoire</a></li>
                    <li><a href="#characters">Personnages</a></li>
                    <li class="site-title"><a href="<?php echo esc_url(home_url('/')); ?>" rel="home"><?php bloginfo('name'); ?></a></li>
                    <li><a href="#place">Lieu</a></li>
                    <li><a href="#studio">Studio Koukaki</a></li>
                </ul>
            </nav>
        </header> -->
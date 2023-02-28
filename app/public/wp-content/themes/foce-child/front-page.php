<?php

get_header();
?>

<main id="primary" class="site-main">
    <!-- <div class="burger-menu-opened">
        <div class="logo-burger-opened">
            <img src="../../uploads/2023/02/LOGO-150x97.png" alt="logo studio d'animation">
        </div>
        <ul class="burger-menu-links">
            <li><a href="#story">Histoire</a></li>
            <li><a href="#characters">Personnages</a></li>
            <li><a href="#place">Lieu</a></li>
            <li><a href="#studio">Studio Koukaki</a></li>
        </ul>
    </div> -->

    <!-- <div class="burger-overlay"></div> -->


    <section class="banner section">
        <img id="banner-logo" src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?> " alt="logo Fleurs d'oranger & chats errants">
    </section>

    <section id="#story" class="story section">
        <h2 class="fade-in-scroll">L'histoire</h2>
        <article id="" class="story__article">
            <p><?php echo get_theme_mod('story'); ?></p>
        </article>

        <article id="characters">
            <div class="main-character">
                <h3 class="fade-in-scroll">Les personnages</h3>
                <!---------------------- carrousel swiper ------------------------>
                <?php get_template_part('carrousel'); ?>
                <!------------------------ fin carrousel swiper ------------------>
            </div>
        </article>

        <article id="place">
            <div>
                <h3 class="fade-in-scroll">Le Lieu</h3>
                <p><?php echo get_theme_mod('place'); ?></p>
            </div>
            <div class="clouds">
                <img class="cloud-1" src="http://koukaki.local/wp-content/uploads/2023/02/big_cloud.png" alt="grande nuage">
                <img class="cloud-2" src="http://koukaki.local/wp-content/uploads/2023/02/little_cloud.png" alt="petite nuage">
            </div>

        </article>
    </section>


    <section id="studio" class="section">
        <h2 class="fade-in-scroll">Studio Koukaki</h2>
        <div>
            <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
            <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
        </div>
    </section>

    <?php get_template_part('nomination-section'); ?>

</main><!-- #main -->

<?php
get_footer();

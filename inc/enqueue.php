<?php

// add_action( 'wp_enqueue_scripts', 'hq_page_style' );
// function hq_page_style( $hook ) {
//     $style_page = plugin_dir_url( __DIR__ ) . 'assets/css/page-style.css';
//     $style_page_hq = plugin_dir_url( __DIR__ ) . 'assets/css/style_hq_front.css';
//     wp_enqueue_style('hq_style_bootstrap',  $bootstrap, array(), '1.0.0','all' );
//     wp_enqueue_style('hq_style_page',  $style_page, array(), '1.0.0','all' );
// }
// add_action( 'admin_enqueue_scripts', 'hq_admin_layout' );


add_action('hq-script-admin', 'hq_admin_layout');
function hq_admin_layout()
{
    $style_page_hq = plugin_dir_url(__DIR__) . 'assets/css/style_hq_admin.css';
    $scrits = plugin_dir_url(__DIR__) . 'assets/js/admin-layout.js';

    wp_enqueue_style('hq_style_page_hq',  $style_page_hq, array(), '1.0.0', 'all');
    wp_register_script('hq_script_admin_layout',  $scrits, array('jquery'), '1.0.0', 'all');
    wp_enqueue_script('hq_script_admin_layout');
}

function hq_add_google_fonts()
{
    $url =  'https://fonts.googleapis.com/css2?family=Bangers&family=Comic+Neue:ital,wght@0,700;1,400&display=swap';
    wp_enqueue_style('wpb-google-fonts', $url, false);
}
add_action('wp_enqueue_scripts', 'hq_add_google_fonts');



function hq_admin_cpt($hook)
{
    if (!did_action('wp_enqueue_media')) {
        wp_enqueue_media();
    }
    $style = plugin_dir_url(__DIR__) . 'assets/css/style_hq_admin.css';
    $scrits = plugin_dir_url(__DIR__) . 'assets/js/admin-cpt.js';


    wp_register_script('hq_script_admin',  $scrits, array('jquery-ui-core'), '1.0.0', 'all');
    wp_enqueue_script('hq_script_admin');

    wp_enqueue_style('hq_style_admin',  $style, array(), '1.0.0', 'all');
}
add_action('hq-script-admin', 'hq_admin_cpt');


function hq_admin()
{
    $plguin_path =  plugin_dir_path(__DIR__);
    $plguin_url =  plugin_dir_url(__DIR__);

    $path = $plguin_path . 'build/config/index.asset.php';
    $asset_file = include($path);

    if (!did_action('wp_enqueue_media')) {
        wp_enqueue_media();
    }

    $style = $plguin_url . 'build/config/style-index.css';
    $scrits = $plguin_url . 'build/config/index.js';

    wp_register_script('hq_script_admin',  $scrits, $asset_file['dependencies'], $asset_file['version'], 'all');
    wp_enqueue_script('hq_script_admin');

    $args = array('post_type' => 'quadrinhos', "posts_per_page" => -1);
    $pages =  get_posts($args);

    foreach ($pages as &$pg) {
        $pg->thumbnail = get_the_post_thumbnail_url($pg->ID, 'post_thumbnail');
    }


    wp_localize_script(
        'hq_script_admin',
        'data',
        array(
            'ajaxurl' => admin_url('admin-ajax.php'),
            'pages' => $pages,
            'pgs' => get_option('hq-pages'),
            'config' => get_option('hq-config'),
        )
    );

    wp_enqueue_style('hq_style_admin',  $style, array(), $asset_file['version'], 'all');
    wp_enqueue_style('wp-edit-blocks');
}



function hq_front_end($hook)
{
    $scrits = plugin_dir_url(__DIR__) . 'assets/js/script.js';
    $style_front = plugin_dir_url(__DIR__) . 'assets/css/style_hq_front.css';

    wp_register_style('hq_style_front_end',  $style_front, array(), '1.0.0', 'all');
    wp_enqueue_style('hq_style_front_end');

    wp_register_script('hq_script_front',  $scrits, array('jquery'), '1.0.0', 'all');
    wp_enqueue_script('hq_script_front');

    $ajax_path =  array(
        "hq_url" => admin_url('admin-ajax.php')
    );
    wp_localize_script('hq_script_front', 'hq_ajax', $ajax_path);
}
add_action('wp_enqueue_scripts', 'hq_front_end');

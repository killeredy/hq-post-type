<?php 
    function hq_get_page(){
        echo PageDetalhe::get_page($_POST['cod']);
        die();
    }

    add_action('wp_ajax_hq_get_page', 'hq_get_page');
    add_action('wp_ajax_nopriv_hq_get_page', 'hq_get_page');

    
    function hq_save_adm(){

        $new_config = json_decode(stripslashes($_POST['config']), ARRAY_N);        
        $new_pages = json_decode(stripslashes($_POST['pages']), ARRAY_N);        
        update_option('hq-pages', $new_pages );
        update_option('hq-config', $new_config );

        die();
    }

    add_action('wp_ajax_hq_save_adm', 'hq_save_adm');
    add_action('wp_ajax_nopriv_hq_save_adm', 'hq_save_adm');

?>
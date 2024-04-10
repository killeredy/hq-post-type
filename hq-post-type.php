<?php
/**
 * Plugin Name: HQ list.
 * Plugin URI: http://www.linhaartistica.com.br
 * Description: Criação de lista de quadrinhos
 * Version: 1.0
 * Author: Kleber Santos
 */

//require_once 'PageOption/Registros.php';

$files = array(
    'function.php',
    'inc/web_ajax.php',
    'inc/cpt/register.php',
    'inc/cpt/metabox-descricao.php',
    // 'metabox-thumbs_pg.php',
    'inc/cpt/metabox-save-post.php',
    'inc/enqueue.php',
    'inc/class/PageOption/Registros.php',
    'inc/class/PageDetalhe.php'
);

foreach($files as $file){
    require_once plugin_dir_path( __DIR__ ) . '/hq-post-type/' . $file;
}

add_action( "init", function(){
    $page_admin = new RegistrosPgAdminHq();
});



function wpdocs_create_blocks_mysite_block_init() {
	
        register_block_type(  __DIR__ . '/build/block-show-page' , [
            "render_callback" => null,
            'attributes' => [
                'pages' => [
                    'type'    => 'string',
                    'defaunt' => "teste",
                    'pages'  => get_option('hq-pages'),
                ],
            ]
        ] );

}
add_action( 'init', 'wpdocs_create_blocks_mysite_block_init' );



<?php



function linha_layout_page(){
    if( !array_key_exists('json', $_POST ) &&  $_POST['json'] == ""  ){
        echo ("<p>Erro com post</p>");
        die();
    }

    $sucess = update_option('linha-quadrinho', trim( $_POST['json'] ));
   
    echo json_encode( $sucess );
    die();

}

add_action("wp_ajax_linha_layout_page", 'linha_layout_page');
add_action("wp_ajax_nopriv_linha_layout_page", 'linha_layout_page');



add_shortcode( 'linha_hq_render', 'linha_hq_render' );
function linha_hq_render( $atts ) {
    $page = new PageLayout();
    $page->render_page_front();
}



function hq_console_log($output, $with_script_tags = true) {
        $js_code = 'console.log(' . json_encode($output, JSON_HEX_TAG) . ');';
        if ($with_script_tags) {
            $js_code = '<script>' . $js_code . '</script>';
        }
        echo $js_code;
}

function pprint($output) {
        echo '<pre>';
        print_r($output);
        echo '</pre>';
}






?>



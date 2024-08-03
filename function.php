<?php



function linha_layout_page()
{
    if (!array_key_exists('json', $_POST) &&  $_POST['json'] == "") {
        echo ("<p>Erro com post</p>");
        die();
    }

    $success = update_option('linha-quadrinho', trim($_POST['json']));

    echo json_encode($success);
    die();
}

add_action("wp_ajax_linha_layout_page", 'linha_layout_page');
add_action("wp_ajax_nopriv_linha_layout_page", 'linha_layout_page');



add_shortcode('linha_hq_render', 'linha_hq_render');
function linha_hq_render($atts)
{
    $page = new PageLayout();
    return $page->render_page_front();
}

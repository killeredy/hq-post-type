<?php 

function hq_meta_save_metas(){
        $post_id = get_the_ID();

        // pprint($_POST);
        // die();

        $list =  array(
                'linha_hq_tipo', 'linha_hq_quant-pag', 'linha_hq_autor', 'linha_hq_descri-hq', 'linha_hq_galeria'
        );

        foreach($list as $value){
                $valor = isset($_POST[$value] ) ? $_POST[$value]  : '';
                // if(gettype($valor) ==  'array'){
                //         $valor =  implode(',', $valor);
                // };
                update_post_meta($post_id, $value,  $valor);

        }
}


add_action('save_post', 'hq_meta_save_metas');


?>


<?php 
    

    add_action( 'add_meta_boxes', 'hq_meta_box_add' );
    function hq_meta_box_add() {
        add_meta_box( 'hq-meta', 'Detalhes da HQ', 'render_metabox', 'quadrinhos',  'normal', 'high' );
    }



    function render_metabox(){
        $post_id = get_the_ID();
        do_action("hq-script-admin");     
        echo '<div class="hq-flex row" style="display: flex">';
            render_tipo($post_id);
            render_quant_pg($post_id);
            render_autor($post_id);
        echo '</div>';
        render_descricao($post_id);
        render_galeria($post_id);
        
    }


    function render_descricao($post_id){
            $values = get_post_meta( $post_id, 'linha_hq_descri-hq', true );
            $arg = array(
                'media_buttons' => false ,
                'textarea_name' => 'linha_hq_descri-hq',
                'textarea_rows'=>'4',
            );
            ?>
                <p>
                    <div class="">
                        <h4>DESCRIÇÃO HQS</h4>
                        <div style="margin-top: -40px">
                            <?php wp_editor(  html_entity_decode($values) , 'linha_hq_descri-hq', $arg); ?>
                        </div>

                    </div> 
                </p>

            <?php
    }


    function render_tipo($post_id){
            $val = get_post_meta( $post_id, 'linha_hq_tipo', true );
            $ops = array(
                'n' => 'Normal',
                'a' => 'Animados',
             )
            ?>
                <div class="form-group col-3">
                    <label for="linha_hq_tipo">Tipos</label></br>
                    <select class="form-control" name="linha_hq_tipo">
                        <option value=''>Selecio o tipo..</option>
                        <?php foreach($ops as $key=>$op ): ?>
                            <option value='<?php echo $key?>' <?php if($key == $val){ echo 'selected';} ?> ><?php echo $op?></option>
                        <?php endforeach ?>
                    </select>
                </div>
            <?php
    }


    function render_quant_pg($post_id){
        $values = get_post_meta( $post_id, 'linha_hq_quant-pag', true );
        ?>
            <div class="form-group col-2">
                <label for="linha_hq_quant-pag">Quant pag:</label></br>
                <input type="number" class="form-control" name='linha_hq_quant-pag' value='<?php echo $values ?>'/>
            </div> 
        <?php
    }


    function render_autor($post_id){
        $values = get_post_meta( $post_id, 'linha_hq_autor', true );
        ?>
            <div class="form-group col-5">
                <label for="linha_hq_autor">Autor(a):</label></br>
                <input type="text" class="form-control" name='linha_hq_autor' value='<?php echo $values ?>'/>
            </div> 
        <?php
    }


    function render_galeria($post_id){
        $img_json =  get_post_meta( $post_id, 'linha_hq_galeria', true );
        // $img_json =  explode(',', $img_json);
        $url_close =   plugins_url() . '/hq-post-type/assets/img/lixo.svg';
        ?>
   
        <div class="">
            <h4>Galeria</h4>
            <button  id='btn-galeia' class='button button-primary button-large'>ADICIONAR IMAGEM(s)</button>
            <div id='my-galery' class="hq-galery-cpt">
                <?php  if( $img_json != null && $img_json != '' ):?>
                    <?php foreach($img_json as $key=>$value ) :?>
                        <div class="img-prev-content" style="">
                            <img class="img-prev"  src='<?php echo wp_get_attachment_image_url($value) ?>'  onclick='apagarPg(this)'  />
                            <img class='btn trash' onclick='this.closest(".img-prev-content").remove(); return false' src='<?php echo $url_close ?>' />
                            <img class='btn sortle' src='<?php echo $url_close ?>' />
                            <input type='hidden' value='<?php echo $value; ?>'  name='linha_hq_galeria[]' />
                        </div>
                    <?php endforeach;?>
                <?php else:?>
                    <h3 class="text-center">Sem imagens</h3>
                <?php endif;?>
            </div>
        </div>
        
        <script>
            var apagarBtn = "<?php echo $url_close;?>"
        </script>

        <?php 
    }


?>
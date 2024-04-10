<?php 
class PageDetalhe
{
    private static $metas = array(
                 'linha_hq_descri-hq', 'linha_hq_galeria'
        );

    private static $attr = array();

    static function get_page($id){
        self::$attr =  array(
            'title' => get_the_title($id),
            'type' => get_post_meta($id,'linha_hq_tipo' ,true ),
            'qt_pg' => get_post_meta($id,'linha_hq_quant-pag' ,true ),
            'autor' => get_post_meta($id,'linha_hq_autor' ,true ),
            'desc' => get_post_meta($id,'linha_hq_descri-hq' ,true ),
            'galeria' => get_post_meta($id,'linha_hq_galeria' ,true ),
             'first_img' => wp_get_attachment_url( $galeria[0] ),
             'thumb' => get_the_post_thumbnail_url($id),
        );
        $path_imgs = plugins_url() . "/hq-post-type/assets/img/"; 
        ob_start();
       ?>

       <div class="hq-bg-dark">

            <img class="hq-img-bg rachura" src="<?=  $path_imgs . "rachura.png" ?>" alt="">
            <img class="hq-img-bg line" src="<?=  $path_imgs . "lines.png" ?>" alt="">

            <div id="hq-container" class="hq-container">
                <button onclick="closest('.hq-bg-dark').remove()" class="hq-btn close"><span class="dashicons dashicons-no-alt"></span></button>
                <?php self::get_content_container(); ?>
            </div>
            <script>
          
            </script>
       </div>

       <?php

        $html = ob_get_contents ();
        ob_end_clean();
        return trim( $html);
    }


     static function get_content_container(){
        $attr =  self::$attr;
        $has_galery =  isset($attr['galeria']) && is_array($attr['galeria']) && !empty($attr['galeria']);
      ?>

        <div class="hq-detail-content" >
            <h2 style=""><?= $attr['title'] ?></h2>

            <nav class="btn-content mob">
                <button class="hq-btn nav" onclick="showMobDesc('hq-description')">Detail</button>
                <button class="hq-btn nav" onclick="showMobDesc('hq-gallery')">Galery</button>                
            </nav>

            <div class="hq-detail">   
                <?php 
                    self::get_description(); 
                    if( $has_galery ){
                        self::get_galery();
                    }
                ?>
            </div>
        </div>
    <?php

    }



    static function get_description(){
        $attr= self::$attr;
?>
         <div class="hq-content hq-description"> 
            
            <img src="<?php echo $attr['thumb']?>" alt="" class="capa" style="width: 100%">
            <div class="technics" >
                <p>Autor: <span><?= $attr['autor ']?></span></p>
                <p>Quant: <span><?= $attr['qt_pg'] ?></span> pg.</p>
                <!-- <p><?= $attr['tipo'] ?></p>                    -->
            </div>
            <div class="box-comic">
                <div>
                    <?= $attr['desc'] ?>
                </div>
            </div>
                   
        </div>
                
<?php

    }

    static function get_galery(){
        $attr =  self::$attr;
        $is_fisrt = true;
        
        ?>
        <div class="hq-content hq-gallery hide">
       
            <ul>
                <?php foreach($attr['galeria'] as $img): ?>
                    <li class="<?php echo $is_fisrt? 'hq-show' : "" ?>">
                        <img src="<?= wp_get_attachment_url( $img );  ?>" alt="" srcset="" class="img-destaque">
                        <?php $is_fisrt =  false?>
                    </li>
                <?php endforeach; ?>
            </ul>
            <nav class="btn-content"> 
                <button class="hq-btn nav-img" onclick="navImg('ant')" ><</button>
                <button class="hq-btn nav-img" onclick="navImg('prox')" >></button>
            </div>
             
        </div>

<?php

    }
    

}    
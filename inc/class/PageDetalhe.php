<?php
class PageDetalhe
{
    private static $metas = array(
        'linha_hq_descri-hq', 'linha_hq_galeria'
    );

    private static $attr = array();

    static function get_page($id)
    {
        self::$attr =  array(
            'title' => get_the_title($id),
            'type' => get_post_meta($id, 'linha_hq_tipo', true),
            'qt_pg' => get_post_meta($id, 'linha_hq_quant-pag', true),
            'autor' => get_post_meta($id, 'linha_hq_autor', true),
            'desc' => get_post_meta($id, 'linha_hq_descri-hq', true),
            'galeria' => get_post_meta($id, 'linha_hq_galeria', true),
            'first_img' => wp_get_attachment_url($galeria[0]),
            'thumb' => get_the_post_thumbnail_url($id),
        );
        $path_imgs = plugins_url() . "/hq-post-type/assets/img/";
        ob_start();
?>

        <div class="hq-container-show-details hq-bg-dark">

            <img class="hq-img-bg rachura" src="<?= $path_imgs . "rachura.png" ?>" alt="">
            <img class="hq-img-bg line" src="<?= $path_imgs . "lines.png" ?>" alt="">

            <div id="hq-container" class="hq-container">
                <nav class="hq-btn-content btn-content-header">
                    <div class="hq-btns-mob">
                        <button class="hq-btn nav mob" onclick="showMobDesc('hq-description')">Detalhes</button>
                        <button class="hq-btn nav mob" onclick="showMobDesc('hq-gallery')">Galeria</button>
                    </div>

                    <button onclick="closest('.hq-bg-dark').remove()" class="hq-btn close">X</button>
                </nav>
                <?php self::get_content_container(); ?>
            </div>
        </div>

    <?php

        $html = ob_get_contents();
        ob_end_clean();
        return trim($html);
    }


    static function get_content_container()
    {
        $attr =  self::$attr;
        $has_galery =  isset($attr['galeria']) && is_array($attr['galeria']) && !empty($attr['galeria']);
    ?>

        <div class="hq-detail-content">
            <h2 style=""><?= $attr['title'] ?></h2>
            <div class="hq-detail">
                <?php
                self::get_description();
                if ($has_galery) {
                    self::get_galery();
                }
                ?>
            </div>
        </div>
    <?php

    }



    static function get_description()
    {
        $attr = self::$attr;
    ?>
        <div class="hq-content hq-description">

            <!-- <img src="<?php echo $attr['thumb'] ?>" alt="" class="capa" style="width: 100%"> -->
            <div class="box-comic">
                <div>
                    <?= wpautop($attr['desc']) ?>
                </div>
            </div>
            <div class="technics">
                <p>Roteiro: <strong><?= $attr['autor'] ?></strong></p>
                <p><span><?= $attr['qt_pg'] ?></span> pg.</p>
                <!-- <p><?= $attr['tipo'] ?></p>                    -->
            </div>


        </div>

    <?php

    }

    static function get_galery()
    {
        $attr =  self::$attr;
        $is_fisrt = true;

    ?>
        <div class="hq-content hq-gallery hide">
            <ul>
                <?php foreach ($attr['galeria'] as $img) : ?>
                    <li class="<?php echo $is_fisrt ? 'hq-show' : "" ?>">
                        <img src="<?= wp_get_attachment_url($img);  ?>" alt="" srcset="" class="img-destaque">
                        <?php $is_fisrt =  false ?>
                    </li>
                <?php endforeach; ?>
            </ul>
            <nav class="hq-btn-content btn-content-footer">
                <div>
                    <button class="hq-btn nav-img" onclick="navImg('ant')">
                        < </button>
                </div>
                <div>
                    <button class="hq-btn nav-img" onclick="navImg('prox')">></button>
                </div>
            </nav>
        </div>

        </div>

<?php

    }
}

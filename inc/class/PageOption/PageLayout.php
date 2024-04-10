<?php 
class PageLayout
{
    private $width = 750;
    private $content = array();
    private $page_template =
    array(
        array(
            0 => array(
                'post_id' => null,
                'w' => 2,
                'h' => 3,
            ),
            1 => array(
                'post_id' => null,
                'w' => 2,
                'h' => 3,
            ),
            2 => array(
                'post_id' => null,
                'w' => 2,
                'h' => 3,
            ),
            3 => array(
                'post_id' => null,
                'w' => 2,
                'h' => 3,
            ),
            4 => array(
                'post_id' => null,
                'w' => 2,
                'h' => 3,
            ),
            5 => array(
                'post_id' => null,
                'w' => 2,
                'h' => 3,
            ),
        ),
        array(
            0 => array(
                'post_id' => null,
                'w' => 2,
                'h' => 3,
            ),
            1 => array(
                'post_id' => null,
                'w' => 2,
                'h' => 3,
            ),
            2 => array(
                'post_id' => null,
                'w' => 2,
                'h' => 3,
            ),
            3 => array(
                'post_id' => null,
                'w' => 2,
                'h' => 3,
            ),
            4 => array(
                'post_id' => null,
                'w' => 2,
                'h' => 3,
            ),
            5 => array(
                'post_id' => null,
                'w' => 2,
                'h' => 3,
            ),
        )
    );


    private $size = array(
        'desk' => array(
            'larg' => 800,
            'alt' => 900,
        ),
        'mob' => array(
            'larg' => 800,
            'alt' => 900,
        ),
    );

    function __construct(){
        $this->content =  $this->get_content();
        
    }

     function get_pages(){
        $pages = get_option('hq-pages');   
        $config = get_option('hq-config');

       
        
        if(empty( $pages )){
            $pages =  $this->page_template ;
        }
        
        
        if(empty( $config )){
            $config =  $this->size ;
        }
        
        $pages =  array(
            // 'config' => $this->page_template,
            'pages' => $pages ,
            'size' => $config,
        );

        return $pages;
    }

    function get_content(){
        $cpts =  $this->get_cpts();
        $content =  array();
        foreach($cpts as $value){
            $id =  $value->ID;
            $content[$id ] = array(
                'img' => get_the_post_thumbnail_url($id),
                'txt' => get_the_title($id),
            );
        }

        return  $content;
    }

    function get_style_tag(){
        $pages = $this->get_pages()['size'];
        $cor =   !empty( $pages ) ? $pages['bg_color'] : 'white';
        ?>
            <style>

                .page-comic-book{
                    width: 100vw;
                    aspect-ratio: <?php echo $pages['page_size']?>;
                    display: flex;
                    justify-content: center;
                }

                .area-page{
                    width: 90%;
                    height: 90%;
                }

                .hq-pg-content{
                    height: 100%;
                    display: block;
                    background-color: <?php echo $cor ?> ;
                }

                @media (min-width: 768px) {
                    .page-comic-book{
                        max-width: 800px;
                        width: 100%
                    }
                }

            </style>

        <?php
    }

   
    function get_id($key_p, $key_q){
        echo "p-" . $key_p . "_q-" . $key_q;
    }


    function render_page_front(){
        $pages = $this->get_pages()['pages']; 
        echo $this->get_style_tag();
        $notFirst =  false;
        $path_img = plugins_url() . '/hq-post-type/assets/img/angle-right-solid.svg';
        ob_start();  
        ?>
        <style>
            .page-comic-book{

            }

            .hq-pg-content{
                display: none;
                transform: translateX(50px) rotate(5deg);
                opacity: 0;
                transition: transform 0.5s linear, opacity 0.5s linear;
                z-index: 1;
                top: 0;
                left: 0;
            }
            .hq-pg-content.in-out{
                z-index: 3;
                display: block;
            }
            .hq-pg-content.hq-show{
                display: block;
                transform: translateX(0px) rotate(0deg) !important;
                opacity: 1;
                z-index: 3;
            }

        </style>
        <div style="position: relative" class="page-comic-book">

            <div class="hq-btn-nav" onclick="nexPag('ant')" style="margin-left: 20px">
                <img style="transform: rotate(180deg);"src="<?php echo $path_img?>" alt="">
            </div>

            <div class="hq-btn-nav prox" onclick="nexPag('prox')">
                <img style=""src="<?php echo $path_img?>" alt="">
            </div>

            <div class="area-page">
                <?php foreach($pages as $key=>$page): ?>   
                    <div class='hq-pg-content hq-page-layout <?php echo $notFirst? '' : 'hq-show' ?>' >
                        <?php 
                        $this->render_page($page, $key, 8, false);
                        $notFirst =  true;
                        ?>
                    </div>   
                <?php endforeach; ?>   
            </div>
         </div>   

         <script>
            navImg = function(sentido){
                var atual =  document.querySelector('.hq-gallery').querySelector('.hq-show');
                var list = document.querySelector('.hq-gallery').querySelectorAll('li');
                var index = 0;
                for(var i = 0; i<list.length; i++){
                    if(atual ==  list[i]){
                        index = i;
                    }

                    list[i].classList.remove('hq-show');
                }
                
                index +=  (sentido ==  'prox')? +1 : -1
                console.log(sentido)
                index = (index > list.length - 1)? 0 : index;
                index = (index < 0)? list.length -1  : index;              
                 list[index].classList.add('hq-show');
            }
           
                function showMobDesc(classBlock){
                    document.querySelectorAll(".hq-content").forEach(function (elem){
                        elem.classList.add("hide");
                    }) 
                    document.querySelector("." + classBlock ).classList.remove('hide');
                }

         </script>
        <?php
                    
        return ob_end_flush();
    }

   
    function render_page($page, $key_p,  $col_style = 5, $previu){
        $imgs =  $this->get_content();
       
        ?>
        
            <?php  if($previu): ?>
                <button class='trash-pg' onclick="removePage(this); return false" data-pg="<?php echo $key_p ?>">apagar</button>
            <?php endif?>
            <div class='page-style' style='background-color: '>
                <?php foreach($page['boxList'] as $key_q=>$quad){
                    $img = $imgs[ $quad['postId'] ];
                    $this->render_box($key_q, $key_p, $quad, $img,  $previu);
                } ?>
            </div>            
        

        <?php
    }

    function render_box($key_q,$key_p, $quad, $img, $previu){
            $grid_colums =  'grid-column: span ' . $quad['width'] . ";";
            $grid_row =  'grid-row: span '. $quad['height'] ;
            $style =  $grid_colums . $grid_row;
            $onclick =  $previu ? "" : 'onclick="openHqcontent('. $quad['postId'] .')"'
            
        ?>
        
        <div id="<?php $this->get_id($key_p, $key_q) ?>" class="hq-quad-img" style="<?php echo  $style ?>" >
            <div class="page-box" style="background-image: url('<?php echo $img['img']  ?>')" >
            <?php if($previu):?>
                <div class=""style="display: flex; justify-content: center; align-items: center;">
                    <h2><?php echo $key_q +1 ?></h2>
                </div>

                
            <?php endif;?>
                <div <?php echo $onclick  ?> style="width: 100%; height: 100%">
                    <p class="ballon open" style="font-size: 1.2rem">
                        <?php echo  $img['txt'] ; ?>
                    </p>
                </div>

            </div>
        </div>
        <?php
    }


    function get_cpts(){
        $args =  array(
            'numberposts' => -1,
            'post_type'   => 'quadrinhos'
        );

        return get_posts($args );    
    }
    
}
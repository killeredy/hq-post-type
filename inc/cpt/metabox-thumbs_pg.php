<?php 
    

    add_action( 'add_meta_boxes', 'hq_thumbs_meta_box_add' );
    function hq_thumbs_meta_box_add() {
        add_meta_box( 'hq-thumbs-meta', 'Thumb PG', 'render_thumbs_metabox', 'hq',  'normal', 'high' );
    }

    function render_thumbs_metabox(){
        render_img_metabox();
    }

    function render_img_metabox(){
        global $post;
        $saved = get_post_meta( $post->ID, 'img_url', true );
        $url = esc_attr( $saved );
        ?>
            <div class="form-group">
                <img src="<?php echo $url ?>" alt="">
                <input type="hidden" class="large-text" name="myplugin_media" id="myplugin_media" value="<?php echo  $url; ?>"><br>
                <button type="button" class="button" id="events_video_upload_btn" data-media-uploader-target="#myplugin_media"><?php _e( 'Upload Media', 'myplugin' )?></button>
            </div>
        <?php 
    }


    function render_img_size_metabox(){
        global $post;
        $saved = get_post_meta( $post->ID, 'img_url', true );
        $url = esc_attr( $saved );
        ?>

            <div class="hq-flex">

                    <div class="form-group">
                        <label for="">Lagura2</label>
                        <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="">
                    </div>
                    
                    <div class="form-group">
                        <label for="">Altura</label>
                        <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="">
                    </div>

            </div>
        <?php 

    }







?>
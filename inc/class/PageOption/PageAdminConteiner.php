<?php 
class PageAdminConteiner 
{
    /*
    public function create(){
        ?>
        <div class='admin-form'>

                    <?php 
                        \settings_fields( 'linha-hq-groups' );
                        \do_settings_sections( 'page_admin_hq' );
                    ?>

            </div>
        <?php
    }
    */

    public static function create(){
        hq_admin();
        echo '<div id="hq-form-admin"></div>';
    }
}
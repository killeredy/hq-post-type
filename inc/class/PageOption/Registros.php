<?php 

include 'PageLayout.php';
include 'PageAdminConteiner.php';

class RegistrosPgAdminHq extends PageLayout
{

    function hq_settings(){   
        // register_setting( "linha-hq-groups", 'local_input' );    
        // add_settings_section( 'linha-hq-options', 'LAYOUT', null,  'page_admin_hq'  );
        // add_settings_field( 'size-page-hq', 'Titulo no menu',   array( $this, 'input_page'),'page_admin_hq' , 'linha-hq-options' );
    }

    function linha_hq_page_render(){
        $pageConteiner = new PageAdminConteiner();
        $pageConteiner->create();
    }

    public function add_page_admin(){
        add_submenu_page( 'edit.php?post_type=quadrinhos', 'HQ layout page', 'Configure Layout', 'manage_options',  'page-admin-hq' , array($this, 'linha_hq_page_render' )  );
        // add_menu_page( 'hq-layout', 'HQ layout page', 'manage_options',  'page-admin-hq' , array($this, 'linha_hq_page_render' ), 'dashicons-businessman', 6  );
    }
 
    function __construct(){
        add_action('admin_menu',array($this,'add_page_admin'));
        add_action( "admin_init", array($this, "hq_settings") );
    }



}
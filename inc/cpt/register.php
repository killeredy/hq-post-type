<?php

function hq_post_type()
{
	$labels = array(
		'name'                  => _x('HQ', 'Post Type General Name', 'text_domain'),
		'singular_name'         => _x('HQ', 'Post Type Singular Name', 'text_domain'),
		'menu_name'             => __('HQ', 'text_domain'),
		'name_admin_bar'        => __('HQ', 'text_domain'),
		'archives'              => __('HQ', 'text_domain'),
		'attributes'            => __('HQ', 'text_domain'),
		'parent_item_colon'     => __('Parent Item:', 'text_domain'),
		'all_items'             => __('Todas hqs', 'text_domain'),
		'add_new_item'          => __('Nova HQ', 'text_domain'),
		'add_new'               => __('adicionar HQ', 'text_domain'),
		'new_item'              => __('Nova HQ', 'text_domain'),
		'edit_item'             => __('Editar HQ', 'text_domain'),
		'update_item'           => __('Atualizar HQ', 'text_domain'),
		'view_item'             => __('ver HQ', 'text_domain'),
		'view_items'            => __('ver HQs', 'text_domain'),
		'search_items'          => __('Procura HQs', 'text_domain'),
		'not_found'             => __('não encontrado', 'text_domain'),
		'not_found_in_trash'    => __('não encontrado no lixo', 'text_domain'),
		'featured_image'        => __('imagem destaque', 'text_domain'),
		'set_featured_image'    => __('set imagem destaque', 'text_domain'),
		'remove_featured_image' => __('remover imagem destaque', 'text_domain'),
		'use_featured_image'    => __('usar imagem de destaque', 'text_domain'),
		'insert_into_item'      => __('Insert into item', 'text_domain'),
		'uploaded_to_this_item' => __('Uploaded to this item', 'text_domain'),
		'items_list'            => __('Items list', 'text_domain'),
		'items_list_navigation' => __('Items list navigation', 'text_domain'),
		'filter_items_list'     => __('Filter items list', 'text_domain'),
	);
	$args = array(
		'label'                 => __('hq', 'text_domain'),
		'description'           => __('Informação hq o artista', 'text_domain'),
		'labels'                => $labels,
		'supports'              => array('title', 'thumbnail'),
		'taxonomies'            => array('hq'),
		'hierarchical'          => false,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 5,
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => true,
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
		'capability_type'       => 'page',
		'show_in_rest' 			=> true,
		'rest_base'          	=> 'hqs',
		'rest_controller_class' => 'WP_REST_Posts_Controller',
	);
	register_post_type('quadrinhos', $args);
}
add_action('init', 'hq_post_type', 0);


add_theme_support('post-thumbnails', array('quadrinhos'));

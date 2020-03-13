<?php

// Documenting ode from functions.php in WordPress child theme:
// Currently working function for child theme styles

function my_theme_enqueue_styles() {
    $parent_style = 'twentytwenty-style'; 
    $child_style = 'twentytwenty-clark-child-style';
    wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( $child-style, get_stylesheet_uri() );
}

// Working function to get featured image alt text added to api without a plugin

function post_featured_image_alt( $data, $post, $context ) {
        $featured_image_id = $data->data['featured_media']; // get featured image id
        $featured_image_alt = get_post_meta( $featured_image_id, '_wp_attachment_image_alt', true );

        if( $featured_image_alt ) {
            $data->data['featured_image_alt'] = $featured_image_alt;
        }

        return $data;
    }
    add_filter( 'rest_prepare_post', 'post_featured_image_alt', 10, 3 );

?>
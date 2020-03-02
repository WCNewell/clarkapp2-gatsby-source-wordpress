<?php

// Storing code for functions.php in WordPress child theme:
    
function my_theme_enqueue_styles() {
    $parent_style = 'twentytwenty-style'; 
    $child_style = 'twentytwenty-clark-child-style';
    wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( $child-style, get_stylesheet_uri() );
}

add_action('rest_api_init', 'register_rest_images' );
function register_rest_images(){
    register_rest_field( array('post'),
        'fimg_url',
        array(
            'get_callback'    => 'get_rest_featured_image',
            'update_callback' => null,
            'schema'          => null,
        )
    );
}
function get_rest_featured_image( $object, $field_name, $request ) {
    if( $object['featured_media'] ){
        $img = wp_get_attachment_image_src( $object['featured_media'], 'app-thumb' );
        return $img[0];
    }
    return false;
}

//Add in functions.php, this hook is for  my 'regions' post type
add_action( 'rest_api_init', 'create_api_posts_meta_field' );

function create_api_posts_meta_field() {
  register_rest_field( 'regions', 'group', array(
         'get_callback'    => 'get_post_meta_for_api',
         'schema'          => null,
      )
  );
}

//Use the post ID to query the image and add it to your payload
function get_post_meta_for_api( $object ) {
  $post_id = $object['id'];
  $post_meta = get_post_meta( $post_id );
  $post_image = get_post_thumbnail_id( $post_id );      
  $post_meta["group_image"] = wp_get_attachment_image_src($post_image)[0];

  return $post_meta;
}

// add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );
// function my_theme_enqueue_styles() {
 
//     $parent_style = 'twentytwenty-style';
 
//     wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );
//     wp_enqueue_style( 'child-style',
//         get_stylesheet_directory_uri() . '/style.css',
//         array( $parent_style ),
//         wp_get_theme()->get('Version')
//     );
// }

?>
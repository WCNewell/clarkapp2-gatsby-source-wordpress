<?php

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

// This function works to get featured image

function post_featured_image_json( $data, $post, $context ) {
        $featured_image_id = $data->data['featured_media']; // get featured image id
        $featured_image_url = wp_get_attachment_image_src( $featured_image_id, 'original' ); // get url of the original size

        if( $featured_image_url ) {
            $data->data['featured_image_url'] = $featured_image_url[0];
        }

        return $data;
    }
    add_filter( 'rest_prepare_post', 'post_featured_image_json', 10, 3 );


// This action and function also works to get featured image

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

// None of these actions or function have been successfull in getting the feature image alt text


add_action('rest_api_init', 'register_image_alt' );
function register_image_alt(){
    register_rest_field( array('post'),
        'fimg_alt',
        array(
            'get_callback'    => 'get_rest_image_alt',
            'update_callback' => null,
            'schema'          => null,
        )
    );
}

function get_rest_image_alt( $object, $field_name, $request ) {
    if( $object['featured_media'] ){
        $alt = get_post_meta_for_api( $object['featured_media'], '_wp_attachment_image_alt', true );
        return $alt[0];
    }
    return false;
}

// Experimental function to get featured image with alt text

    function post_featured_image_json( $data, $post, $context ) {
        $featured_image_id = $data->data['featured_media']; // get featured image id
        $featured_image_url = wp_get_attachment_image_src( $featured_image_id, 'original' ); // get url of the original size
        $featured_image_alt = get_post_meta($featured_image_id, '_wp_attachment_image_alt', true);

        if( $featured_image_url ) {
            $data->data['featured_image_url'] = $featured_image_url[0];
        }

        if( $featured_image_alt ) {
            $data->data['featured_image_alt'] = $featured_image_url[0]
        }

        return $data;
    }
    add_filter( 'rest_prepare_post', 'post_featured_image_json', 10, 3 );

// Some other ideas for adding to json api:

//Add in functions.php, this hook is for  my 'regions' post type

// add_action( 'rest_api_init', 'create_api_posts_meta_field' );
// function create_api_posts_meta_field() {
//   register_rest_field( 'regions', 'group', array(
//          'get_callback'    => 'get_post_meta_for_api',
//          'schema'          => null,
//       )
//   );
// }

// //Use the post ID to query the image and add it to your payload
// function get_post_meta_for_api( $object ) {
//   $post_id = $object['id'];
//   $post_meta = get_post_meta( $post_id );
//   $post_image = get_post_thumbnail_id( $post_id );      
//   $post_meta["group_image"] = wp_get_attachment_image_src($post_image)[0];

//   return $post_meta;
// }

// Old code for child theme

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
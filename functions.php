<?php

add_action(
	'default_wp_template_part_areas',
	function( $default_area_definitions ) {
		$default_area_definitions[] = [
			'area'        => 'sidebar',
			'area_tag'    => 'section',
			'label'       => __( 'Sidebar', 'ide' ),
			'description' => __( 'The Sidebar template defines a page area that typically contains widget-like content', 'ide' ),
			'icon'        => 'sidebar'
		];
		$default_area_definitions[] = [
			'area'        => 'comments',
			'area_tag'    => 'section',
			'label'       => __( 'Comments', 'ide' ),
			'description' => __( 'The Comments template defines a page area that typically contains the post comments list and form.', 'ide' ),
			'icon'        => 'comments'
		];
		return $default_area_definitions;
	}
);

add_action(
	'init',
	function() {
		// Registers a base `theme` category.
		register_block_pattern_category( 'theme', [
			'label'       => __( 'Theme', 'ide' ),
			'description' => __( 'Patterns registered by the IDE theme.', 'ide' )
		] );

		register_block_pattern_category( 'code', [
			'label'       => __( 'Code', 'ide' ),
			'description' => __( 'Code related patterns registered by the IDE theme.', 'ide' )
		] );
	}
);


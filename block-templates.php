<?php

/**
 * Plugin Name:       Block Templates
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       block-templates
 *
 * @package CreateBlock
 */

if (! defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the blocks using the metadata loaded from the `block.json` file
 */
function block_templates_register_blocks_loop()
{
	$custom_blocks = [
		'card-grid',
		'card-innerblock',
	];

	foreach ($custom_blocks as $block) {
		register_block_type(__DIR__ . '/build/blocks/' . $block);
	}
}
add_action('init', 'block_templates_register_blocks_loop');

import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	const blockProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		allowedBlocks: ["core/image"],
		template: [["core/image"], ["core/image"]],
		templateLock: "all",
	});

	return <div {...innerBlocksProps}></div>;

	// return (
	// 	<p { ...useBlockProps() }>
	// 		{ __( 'Block Templates: Card Innerblock', 'block-templates' ) }
	// 	</p>
	// );
}

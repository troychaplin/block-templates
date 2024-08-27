import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	const blockProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		allowedBlocks: [ 'core/paragraph' ],
		template: [ [ 'core/paragraph' ] ],
		templateLock: 'all',
	} );

	return <div { ...innerBlocksProps }></div>;
}

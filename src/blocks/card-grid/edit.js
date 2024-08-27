import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InnerBlocks,
	// useInnerBlocksProps,
	InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody, RangeControl, TextControl } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { numberOfColumns, blockHeader } = attributes;

	// const blockProps = useBlockProps();
	// const innerBlocksProps = useInnerBlocksProps( blockProps, {
	// 	allowedBlocks: [ 'core/paragraph' ],
	// 	template: [ [ 'core/paragraph' ], [ 'core/paragraph' ] ],
	// 	templateLock: 'all',
	// } );

	return (
		<>
			<InspectorControls>
				<PanelBody title="Display Options">
					<TextControl
						label="Card Grid Header"
						onChange={(value) =>
							setAttributes({ blockHeader: value })
						}
						type="text"
						value={blockHeader}
					/>
					<RangeControl
						initialPosition={numberOfColumns}
						label="Grid Columns"
						max={5}
						min={2}
						onChange={(value) =>
							setAttributes({ numberOfColumns: value })
						}
					/>
				</PanelBody>
			</InspectorControls>

			{ /* <div {...innerBlocksProps}> */}

			<div
				{...useBlockProps({
					className: `has-${numberOfColumns}-columns`,
				})}
			>
				<div>
					{blockHeader && <h2>{blockHeader}</h2>}
					<InnerBlocks
						allowedBlocks={['block-templates/card-innerblock']}
						template={[
							['block-templates/card-innerblock'],
							['block-templates/card-innerblock'],
						]}
					/>
				</div>
			</div>
		</>
	);
}

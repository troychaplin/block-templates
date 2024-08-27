import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps, RichText } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { info, desc } = attributes

	return (
		<div
			{...useBlockProps({
				className: `card-innerblock`,
			})}
		>
			<RichText
				placeholder="Add some information"
				style={{ border: 'none', padding: '0', backgroundColor: 'transparent' }}
				onChange={(value) => setAttributes({ info: value })}
				value={info}
				allowedFormats={[]}
				disableLineBreaks={true}
			/>
			<RichText
				placeholder="Add a description of the information"
				style={{ border: 'none', padding: '0', backgroundColor: 'transparent' }}
				onChange={(value) => setAttributes({ desc: value })}
				value={desc}
				allowedFormats={[]}
				disableLineBreaks={true}
			/>
		</div>
	)

	// const blockProps = useBlockProps();
	// const innerBlocksProps = useInnerBlocksProps(blockProps, {
	// 	allowedBlocks: ['core/paragraph'],
	// 	template: [['core/paragraph']],
	// 	templateLock: 'all',
	// });

	// return <div {...innerBlocksProps}></div>;
}

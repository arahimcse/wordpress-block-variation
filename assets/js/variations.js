wp.blocks.registerBlockVariation(
	'core/columns',
	{
		name: 'reverse-direction-on-mobile',
		title: 'Columns ( Reverse on Mobile)',
		attributes: {
			className:'is-style-reverse-direction-on-mobile'
		},
        scope:['block', 'inserter', 'transform']
	}
);
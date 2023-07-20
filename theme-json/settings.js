module.exports = {
	border: {},
	shadow: {},
	appearanceTools: true,
	layout: {
		contentSize: '40rem',
		wideSize: '64rem',
	},
	color: {
		palette: [
			{
				color: '#2d2b55',
				name: 'Editor Background',
				slug: 'editor-background',
			},
			{
				color: '#FFFFFF',
				name: 'Editor Foreground',
				slug: 'editor-foreground',
			},
			{
				color: '#FAD000',
				name: 'Editor Headlines',
				slug: 'editor-headlines',
			},
		],
	},
	typography: {
		fontFamilies: [
			{
				fontFamily: "Menlo, Monaco, 'Courier New', monospace",
				name: 'Primary',
				slug: 'primary',
				fontFace: [
					{
						fontFamily: 'Menlo',
						fontStyle: 'normal',
						fontWeight: 'normal',
						src: [ 'file:./assets/fonts/menlo/Menlo-Regular.woff' ],
					},
				],
			},
		],
	},
	custom: {},
	useRootPaddingAwareAlignments: true,
};

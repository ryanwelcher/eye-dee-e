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
			{
				color: '#1E1E3F',
				name: 'Editor Dark',
				slug: 'editor-dark',
			},
		],
	},
	typography: {
		fontFamilies: [
			{
				fontFamily: "Menlo, Monaco, 'Courier New', monospace",
				name: 'Menlo',
				slug: 'menlo',
				fontFace: [
					{
						fontFamily: 'Menlo',
						fontStyle: 'normal',
						fontWeight: 'normal',
						src: [ 'file:./assets/fonts/menlo/Menlo-Regular.woff' ],
					},
				],
			},
			{
				fontFamily: 'Fira Code, monospace',
				name: 'Fira Code',
				slug: 'fira-code',
				fontFace: [
					{
						fontFamily: 'Fira Code',
						fontStyle: 'normal',
						fontWeight: '300',
						src: [
							'file:./assets/fonts/fira_code/FiraCode-Light.woff2',
						],
					},
					{
						fontFamily: 'Fira Code',
						fontStyle: 'normal',
						fontWeight: '400',
						src: [
							'file:./assets/fonts/fira_code/FiraCode-Regular.woff2',
						],
					},
					{
						fontFamily: 'Fira Code',
						fontStyle: 'normal',
						fontWeight: '500',
						src: [
							'file:./assets/fonts/fira_code/FiraCode-Medium.woff2',
						],
					},
					{
						fontFamily: 'Fira Code',
						fontStyle: 'normal',
						fontWeight: '600',
						src: [
							'file:./assets/fonts/fira_code/FiraCode-SemiBold.woff2',
						],
					},
					{
						fontFamily: 'Fira Code',
						fontStyle: 'normal',
						fontWeight: '700',
						src: [
							'file:./assets/fonts/fira_code/FiraCode-Bold.woff2',
						],
					},
					{
						fontFamily: 'Fira Code',
						fontStyle: 'normal',
						fontWeight: '300 700',
						src: [
							'file:./assets/fonts/fira_code/FiraCode-VF.woff2',
						],
					},
				],
			},
		],
	},
	custom: {},
	useRootPaddingAwareAlignments: true,
};

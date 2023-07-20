module.exports = {
	color: {
		background: 'var( --wp--preset--color--editor-background )',
		text: 'var( --wp--preset--color--editor-foreground )',
	},
	typography: {
		fontFamily: 'var( --wp--preset--font-family--primary )',
	},
	spacing: {
		blockGap: '2rem',
		padding: {
			bottom: '0',
			left: '2rem',
			right: '2rem',
			top: '0',
		},
	},
	elements: {
		heading: {
			color: {
				text: 'var( --wp--preset--color--editor-headlines )',
			},
			typography: {
				fontFamily: 'var( --wp--preset--font-family--headings )',
				fontWeight: '400',
			},
		},
		link: {
			':focus': {
				color: {
					text: 'var( --wp--preset--color--editor-headlines )',
				},
			},
			':hover': {
				color: {
					text: 'var( --wp--preset--color--editor-headlines )',
				},
			},
			color: {
				text: 'var( --wp--preset--color--editor-headlines )',
			},
		},
		button: {
			color: {
				background: 'var( --wp--preset--color--editor-headlines )',
			},
		},
	},
	blocks: {},
};

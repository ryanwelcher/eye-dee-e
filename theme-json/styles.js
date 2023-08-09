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
			bottom: '1rem',
			left: '2rem',
			right: '2rem',
			top: '1rem',
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
				text: 'var( --wp--preset--color--editor-dark )',
			},
		},
	},
	blocks: {
		'core/site-logo': {
			border: {
				color: 'var( --wp--preset--color--editor-headlines )',
				style: 'solid',
				width: '2px',
			},
		},
		'core/code': {
			color: {
				background: 'var( --wp--preset--color--editor-dark )',
			},
			border: {
				color: 'var( --wp--preset--color--editor-headlines )',
				style: 'solid',
				width: '1px',
			},
			spacing: {
				padding: {
					bottom: '1rem',
					left: '1rem',
					right: '1rem',
					top: '1rem',
				},
			},
		},
	},
};

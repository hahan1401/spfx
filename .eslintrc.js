module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: true,
		tsconfigRootDir: __dirname,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended',
	],
	plugins: ['@typescript-eslint', 'react', 'prettier'],
	rules: {
		'no-var': ['error'],
		'no-unused-vars': 'off',
		curly: ['error', 'multi-line'],
		'no-empty': ['error', { allowEmptyCatch: true }],
		'no-extra-boolean-cast': 'off',
		eqeqeq: 'error',

		'@typescript-eslint/no-unused-vars': ['error'],
		'@typescript-eslint/keyword-spacing': 'off',
		'@typescript-eslint/member-delimiter-style': 'off',

		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				semi: true,
				endOfLine: 'auto',
			},
		],
	},
	ignorePatterns: ['*.config.{js,ts}', '**/*.{css,scss}', '.eslintrc.js', '.*ignore*', 'prettier.config.cjs'],
};

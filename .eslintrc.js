module.exports = {
    extends: 'erb',
    rules: {
        'import/no-extraneous-dependencies': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': 'off',
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'import/no-import-module-exports': 'off',
        'import/no-duplicates': 'off',
        'import/no-self-import': 'off',
        'import/no-useless-path-segments': 'off',
        'import/order': 'off',
        'import/no-cycle': 'off',
        'import/no-relative-packages': 'off',
        'import/no-named-as-default': 'off',
        'import/no-named-as-default-member': 'off',
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        createDefaultProgram: true,
    },
    settings: {
        'import/resolver': {
            node: {},
            webpack: {
                config: require.resolve('./.erb/configs/webpack.config.eslint.ts'),
            },
            typescript: {},
        },
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
    },
};

module.exports = {
  extends: ['erb', 'eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended' ],
  rules: {
    'arrow-parens': 0,
    semi: [ 'error', 'always' ],
    indent: [
      'error',
      4,
      {
        SwitchCase: 1,
      },
    ],
    'brace-style': [ 'error', '1tbs' ],
    'object-curly-spacing': [ 'error', 'always' ],
    'block-spacing': [ 'error', 'always' ],
    'space-before-blocks': [ 'error', 'always' ],
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'semi-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'space-infix-ops': [
      'error',
      {
        int32Hint: false,
      },
    ],
    'space-unary-ops': [
      2,
      {
        words: true,
        nonwords: false,
        overrides: {
          new: false,
          '++': false,
        },
      },
    ],
    'spaced-comment': [
      'error',
      'always',
      {
        exceptions: [ '-', '+' ],
      },
    ],
    'template-tag-spacing': [ 'error', 'never' ],
    'space-before-function-paren': 0,
    'no-undef': 0,
    'no-debugger': 0,
    quotes: 0,
    'react/jsx-indent': [ 'error', 4 ],
    'react/jsx-indent-props': [ 'error', 4 ],
    'react/jsx-first-prop-new-line': [ 2, 'multiline' ],
    'react/jsx-no-target-blank': 0,
    'no-unused-vars': 0,
    'no-dupe-class-members': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-extra-non-null-assertion': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  parser: '@typescript-eslint/parser',
  plugins: [ 'react', 'typescript', '@typescript-eslint' ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    createDefaultProgram: true
  },
  settings: {
    'import/resolver': {
      // See https://github.com/benmosher/eslint-plugin-import/issues/1396#issuecomment-575727774 for line below
      node: {},
      webpack: {
        config: require.resolve('./.erb/configs/webpack.config.eslint.ts')
      },
      typescript: {}
    },
    'import/parsers': {
      '@typescript-eslint/parser': [ '.ts', '.tsx' ]
    }
  }
};

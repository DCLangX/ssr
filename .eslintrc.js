module.exports = {
  root: true,
  extends: ['standard-with-typescript', 'plugin:prettier/recommended'],
  parserOptions: {
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname, // important option
    // createDefaultProgram: true
  },
  globals: {
    context: true,
    beforeEach: true,
    afterEach: true,
    Cypress: true,
    cy: true,
    expect: true,
    it: true,
    describe: true,
  },
  rules: {
    // '@typescript-eslint/dot-notation': ['off'],
    // 'padded-blocks': ['off'],
    // '@typescript-eslint/no-base-to-string': ['off'],
    // '@typescript-eslint/restrict-plus-operands': ['off'],
    // 'react-hooks/rules-of-hooks': ['off'],
    // '@typescript-eslint/no-var-requires': ['off'],
    // '@typescript-eslint/no-namespace': ['error', { allowDeclarations: true }]
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/strict-boolean-expressions': 'warn',
    '@typescript-eslint/await-thenable': 'off',
    '@typescript-eslint/no-confusing-void-expression': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/restrict-template-expressions': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    'import/export': 'warn',
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
      },
    },
  ],
}

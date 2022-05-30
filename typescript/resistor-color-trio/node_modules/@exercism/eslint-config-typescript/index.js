module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  globals: {
    Atomics: 'readonly',
    BigInt: true,
    SharedArrayBuffer: 'readonly',
  },
  rules: {
    // @typescript-eslint rules to prevent bugs
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowExpressions: false,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
      },
    ],

    '@typescript-eslint/no-inferrable-types': [
      'error',
      {
        ignoreParameters: true,
      },
    ],

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'warn',

    // @typescript-eslint rules: code style not forced upon the student
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    semi: 'off',
    '@typescript-eslint/semi': 'off',

    // @typescript-eslint rules: exceptions.
    // Only disallow readonly without an access modifier
    '@typescript-eslint/no-parameter-properties': [
      'warn',
      {
        allows: [
          'private',
          'protected',
          'public',
          'private readonly',
          'protected readonly',
          'public readonly',
        ],
      },
    ],

    // Covered by the tsc compiler (noUnusedLocals)
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',

    // Prevent bugs, not styling
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        typedefs: false,
      },
    ],

    // eslint rules
    'array-callback-return': ['warn', { checkForEach: false }],
    'default-param-last': 'error',
    eqeqeq: ['warn', 'smart'],
    'linebreak-style': 'off',
    'no-eval': ['error', { allowIndirect: true }],
    'no-extend-native': 'warn',
    'no-implicit-coercion': 'warn',
    'no-promise-executor-return': 'warn',
    'no-unreachable-loop': 'warn',
    'no-unsafe-optional-chaining': 'error',
    'require-atomic-updates': 'warn',

    // plugin:import rules
    'import/extensions': 'off',
    'import/no-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
  },
};

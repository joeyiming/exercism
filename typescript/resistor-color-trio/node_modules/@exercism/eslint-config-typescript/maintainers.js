module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
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
    // @typescript-eslint rules
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowExpressions: false,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
      },
    ],
    '@typescript-eslint/explicit-member-accessibility': [
      'warn',
      {
        accessibility: 'no-public',
        overrides: {
          accessors: 'explicit',
          constructors: 'no-public',
          methods: 'explicit',
          properties: 'explicit',
          parameterProperties: 'off',
        },
      },
    ],
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/no-inferrable-types': [
      'error',
      {
        ignoreParameters: true,
      },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
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

    // covered by the tsc compiler (noUnusedLocals)
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        typedefs: false,
      },
    ],

    // stylistic choice
    semi: 'off',
    '@typescript-eslint/semi': ['error', 'never'],

    // disable the rule for all* (js) files (see overrides for enabling it)
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // eslint rules
    'array-callback-return': ['error', { checkForEach: true }],
    'default-param-last': 'error',
    eqeqeq: ['error', 'smart'],
    'linebreak-style': 'off',
    'no-eval': ['error', { allowIndirect: true }],
    'no-extend-native': 'error',
    'no-implicit-coercion': 'error',
    'no-promise-executor-return': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-optional-chaining': 'error',
    'require-atomic-updates': 'error',

    // plugin:import rules
    'import/extensions': ['error', { ts: 'never', json: 'always' }],
    'import/no-default-export': 'warn',
    'import/no-unresolved': 'error',
    'import/prefer-default-export': 'off',

    // eslint style rules, all covered by prettier
    // indent: ['error', 2],
    // 'linebreak-style': ['error', 'unix'],
    // quotes: ['error', 'single'],
    // semi: ['error', 'always'],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts'],
      },
    },
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'error',
      },
    },
  ],
};

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    serviceworker: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',

    // 'plugin:vue/vue3-recommended',
    // 'eslint:recommended',
    // '@vue/typescript/recommended',
    // '@vue/prettier',
    // '@vue/prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: ['import'],
  rules: {
    // 'gdx-lint/vue-setup-sorting': 1,
    'import/order': [
      1,
      {
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
          },
        ],
        groups: ['external', 'internal', ['parent', 'sibling', 'index']],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/prefer-default-export': 0,
    'import/no-cycle': 0,
    'max-len': 0,
    'class-methods-use-this': 0,
    'no-shadow': 0,
    'lines-between-class-members': 0,
    'no-use-before-define': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'vue/no-v-html': 0,

    // Disable this rule according to this doc
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
    'no-undef': 0,

    // There is no way to make `self` work in ServiceWorker
    // https://github.com/airbnb/javascript/issues/1632
    'no-restricted-globals': 0,

    // Prevent CRLF errors for Windows projects.
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],

    'vue/multi-word-component-names': 'off',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};

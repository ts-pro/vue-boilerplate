module.exports = {
  extends: [
    // Here we have all the stylelint rules.
    'stylelint-config-standard-scss',

    // Here are the configuration for *.vue files.
    'stylelint-config-standard-vue/scss',
  ],

  rules: {
    // Prevent tailwindcss errors.
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'apply',
          'layer',
          'responsive',
          'screen',
          'tailwind',
          'variants',
        ],
      },
    ],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
  },

  // `stylelint-config-standard-vue/scss` is already configured this option
  // but here we ensure that it would work event if we change the order of extends
  // where `stylelint-config-standard-vue/scss` should be always the last one.
  // https://github.com/ota-meshi/stylelint-config-recommended-vue#book-usage
  // Uncomment this if your `stylelint-config-standard-vue/scss` is not the last one
  // and you facing `Unknown word (CssSyntaxError)` error.
  // overrides: [
  //   {
  //     files: ['**/*.vue'],
  //     customSyntax: 'postcss-html',
  //   },
  // ],
};

// @flow strict
const OFF = 'off';
const ERROR = 'error';
const ALWAYS = 'always';
const NEVER = 'never';
const VERBOSE = 'verbose';

module.exports = {
  'extends': [
    'airbnb',
    'plugin:@next/next/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:flowtype/recommended',
    'plugin:jest/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  'env': {
    'browser': true,
    'es6': true,
  },
  'parser': '@babel/eslint-parser',
  'plugins': [
    'eslint-comments',
    'flowtype',
    'import',
    'jest',
    'jsx-a11y',
    'react',
    'react-hooks',
    'testing-library',
    'validate-jsx-nesting',
  ],
  'settings': {
    'next': {
      'rootDir': 'docs/',
    },
  },
  'rules': {
    'eslint-comments/no-unused-disable': ERROR,
    'flowtype/array-style-complex-type': [ERROR, VERBOSE],
    'flowtype/array-style-simple-type': [ERROR, VERBOSE],
    'flowtype/define-flow-type': ERROR,
    'flowtype/no-mutable-array': ERROR,
    'flowtype/no-types-missing-file-annotation': ERROR,
    'flowtype/require-exact-type': [ERROR, ALWAYS],
    'flowtype/require-valid-file-annotation': [
      ERROR,
      ALWAYS,
      {
        'annotationStyle': 'line',
        'strict': true,
      },
    ],
    'flowtype/space-after-type-colon': [ERROR, ALWAYS, { 'allowLineBreak': true }],
    'flowtype/space-before-type-colon': [ERROR, NEVER],
    'flowtype/type-import-style': ERROR,
    'import/extensions': [ERROR, ALWAYS, { 'ignorePackages': true }],
    'import/no-anonymous-default-export': ERROR,
    'import/no-extraneous-dependencies': OFF,
    'import/no-namespace': ERROR,
    'import/no-relative-parent-imports': OFF,
    'import/no-unresolved': OFF,
    'import/order': [
      ERROR,
      {
        'groups': [
          'index',
          'builtin',
          'external',
          'parent',
          'sibling',
          'internal',
          'object',
          'type',
        ],
        'alphabetize': { 'order': 'asc', 'caseInsensitive': true },
        'newlines-between': 'never',
        'pathGroups': [
          {
            'pattern': 'react',
            'group': 'builtin',
            'position': 'before',
          },
          {
            'pattern': './*.css',
            'group': 'sibling',
            'position': 'before',
          },
          {
            'pattern': './*/*.js',
            'group': 'sibling',
            'position': 'after',
          },
        ],
        'pathGroupsExcludedImportTypes': ['react'],
      },
    ],
    'jsx-a11y/label-has-associated-control': [
      ERROR,
      {
        'labelComponents': ['Label'],
        'labelAttributes': ['htmlFor'],
        'controlComponents': ['CheckBox'],
        'depth': 3,
      },
    ],
    'jsx-a11y/label-has-for': [ERROR, { 'components': ['label'], 'allowChildren': true }],
    'no-await-in-loop': OFF,
    'no-constant-condition': ERROR,
    'no-return-await': OFF,
    'prefer-arrow-callback': OFF,
    'react-hooks/exhaustive-deps': ERROR,
    'react-hooks/rules-of-hooks': ERROR,
    'react/destructuring-assignment': OFF,
    'react/jsx-filename-extension': OFF,
    'react/jsx-fragments': [ERROR, 'element'],
    'react/jsx-key': [ERROR, { 'checkFragmentShorthand': true }],
    'react/jsx-props-no-spreading': OFF,
    'react/no-access-state-in-setstate': ERROR,
    'react/no-array-index-key': ERROR,
    'react/react-in-jsx-scope': OFF,
    'react/require-default-props': OFF,
    'react/sort-comp': OFF,
    'react/state-in-constructor': [ERROR, NEVER],
    'react/static-property-placement': [ERROR, 'static public field'],
    'validate-jsx-nesting/no-invalid-jsx-nesting': ERROR,
  },
  'overrides': [
    {
      'files': ['scripts/templates/*.js'],
      'rules': {
        'import/no-unresolved': OFF,
      },
    },
    {
      'files': ['packages/gestalt-codemods/**/*.js', 'scripts/**/*.js'],
      'rules': {
        'flowtype/no-mutable-array': OFF,
        'flowtype/require-exact-type': OFF,
        'flowtype/require-valid-file-annotation': OFF,
      },
    },
    {
      'files': ['packages/**/*.js'],
      'rules': {
        '@next/next/no-img-element': OFF,
      },
    },
    {
      'files': ['docs/examples/**/*.js'],
      'rules': {
        // Allows us to avoid directing the user off our docs site in examples
        'jsx-a11y/anchor-is-valid': OFF,
      },
    },
    {
      'files': ['**/*.test.js'],
      'env': {
        'jest': true,
      },
      'extends': ['plugin:testing-library/react'],
      'globals': {
        'page': true,
        'browser': true,
      },
      'rules': {
        'jest/expect-expect': [
          ERROR,
          { 'assertFunctionNames': ['expect', 'runInlineTest', 'runTest'] },
        ],
      },
    },
    {
      'files': ['**/*.flowtest.js'],
      'rules': {
        'no-unused-vars': OFF,
      },
    },
    {
      'files': ['playwright/**/*.mjs', 'scripts/templates/*.spec.mjs'],
      'extends': ['plugin:playwright/playwright-test'],
      'rules': {
        'playwright/missing-playwright-await': ERROR,
        'playwright/no-element-handle': ERROR,
        'playwright/no-eval': ERROR,
        'playwright/no-focused-test': ERROR,
        'playwright/no-force-option': ERROR,
        'playwright/no-page-pause': ERROR,
        'playwright/no-skipped-test': OFF, // Can be turned on when what's new is removed
        'playwright/no-wait-for-timeout': ERROR,
        'flowtype/require-valid-file-annotation': OFF,
        'jest/expect-expect': OFF,
        'jest/no-done-callback': OFF,
        'jest/valid-expect': OFF,
      },
    },
  ],
};
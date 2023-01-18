const indexConfig = require('./index.js');

module.exports = {
  ...indexConfig,

  extends: [...indexConfig.extends, 'react-app', 'plugin:react/recommended'],

  plugins: ['node-imports'],

  rules: {
    ...indexConfig.rules,

    'node-imports/no-node-import': 'error',

    'react/button-has-type': 'error',
    'react/destructuring-assignment': ['warn', 'never'],
    'react/function-component-definition': [
      'error',
      { namedComponents: 'arrow-function' },
    ],
    'react/hook-use-state': 'error',
    'react/jsx-boolean-value': 'warn',
    'react/jsx-fragments': ['warn', 'element'],
    'react/jsx-sort-props': [
      'warn',
      {
        noSortAlphabetically: true,
        reservedFirst: true,
        shorthandLast: true,
        callbacksLast: true,
      },
    ],
    'react/no-array-index-key': 'error',
    'react/no-unstable-nested-components': 'error',
    'react/self-closing-comp': ['warn', { html: false }],
    'react/void-dom-elements-no-children': 'error',
  },
};

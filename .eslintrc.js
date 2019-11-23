module.exports = {
  env: {
    browser: true,
    es6: true,
    jquery: true,
    node: true,
  },
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    //added
    'prefer-arrow-callback': 0,
    'no-tabs': 0,
    'no-alert':0,
    'spaced-comment':0,
    'prefer-destructuring':0,
    'key-spacing':0,
    'indent' :0,
    'no-trailing-spaces':0,
    'camelcase':0,
    'no-loop-func' : 0,


    'no-restricted-syntax': 0,
    'no-console': 0,
    'no-plusplus': 0,
    'vars-on-top': 0,
    'func-names': 0,
    'linebreak-style': 0,
    'max-len': [
      'error',
      80,
      {
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'import/prefer-default-export': 0
  },
};

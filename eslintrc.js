'use strict';

const MAX_LINE_LEN = 140;
const INDENT_DEPTH = 4;

exports = module.exports = {
    extends: 'eslint-config-ghornich-es5',
    env: {
        es6: true,
    },
    rules: {
        // ECMAScript 6

        'arrow-spacing':      ['error'],
        'constructor-super':  ['error'],
        'no-var':             ['error'],
        'prefer-const':       ['error'],
        'prefer-rest-params': ['error'],
        'prefer-spread':      ['error'],
        'prefer-template':    ['error'],
    },
};

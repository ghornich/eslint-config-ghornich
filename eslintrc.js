'use strict';

const MAX_LINE_LEN = 140;
const INDENT_DEPTH = 4;

exports = module.exports = {
    extends: 'eslint:recommended',
    rules: {
        // from http://eslint.org/docs/rules/

        // Possible Errors

        'no-console': ['warn'],

        // Best Practices
        'complexity':           ['error'],
        'curly':                ['error', 'all'],
        'default-case':         ['error'],
        'eqeqeq':               ['error', 'always'],
        'no-caller':            ['error'],
        'no-else-return':       ['error'],
        'no-eq-null':           ['error'],
        'no-eval':              ['error'],
        'no-extend-native':     ['error'],
        'no-extra-bind':        ['error'],
        'no-floating-decimal':  ['error'],
        'no-global-assign':     ['error'],
        'no-implicit-coercion': ['error'],
        'no-implicit-globals':  ['error'],
        'no-implied-eval':      ['error'],
        'no-iterator':          ['error'],
        'no-lone-blocks':       ['error'],
        'no-loop-func':         ['error'],
        'no-magic-numbers':     ['error'],
        'no-multi-spaces':      ['error'],
        'no-multi-str':         ['error'],
        'no-new':               ['error'],
        'no-new-func':          ['error'],
        'no-new-wrappers':      ['error'],
        'no-octal':             ['error'],
        'no-octal-escape':      ['error'],
        'no-param-reassign':    ['error'],
        'no-proto':             ['error'],
        'no-redeclare':         ['error'],
        'no-return-assign':     ['error'],
        'no-return-await':      ['error'],
        'no-script-url':        ['error'],
        'no-self-assign':       ['error'],
        'no-self-compare':      ['error'],
        'no-sequences':         ['error'],
        'no-throw-literal':     ['error'],
        'no-unmodified-loop-condition': ['error'],
        'no-unused-expressions': ['error'],
        'no-useless-call':       ['error'],
        'no-useless-concat':     ['error'],
        'no-useless-escape':     ['error'],
        'no-useless-return':     ['error'],
        'no-void':               ['error'],
        'no-warning-comments':   ['warn'],
        'no-with':               ['error'],
        'prefer-promise-reject-errors': ['error'],
        'radix':         ['error'],
        'require-await': ['error'],
        'wrap-iife':     ['error'],
        'yoda':          ['error'],

        // Strict Mode
        // 'strict': ['error', 'safe'],

        // Variables
        'no-catch-shadow':      ['error'],
        'no-delete-var':        ['error'],
        'no-label-var':         ['error'],
        'no-shadow':            ['error'],
        'no-undef':             ['error'],
        'no-undef-init':        ['error'],
        'no-unused-vars':       ['error'],
        'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],

        // Node.js and CommonJS

        'no-buffer-constructor': ['error'],
        'no-path-concat':        ['error'],
        'no-sync':               ['error'],

        // Stylistic Issues

        'array-bracket-spacing': ['error'],
        'brace-style':           ['error', 'stroustrup'],
        'camelcase':             ['error'],
        'comma-dangle':          ['error', 'always-multiline'],
        'comma-spacing':         ['error'],
        'comma-style':           ['error'],
        'consistent-this':       ['error'],
        'eol-last':              ['error'],
        'func-call-spacing':     ['error'],
        'indent':                ['error', INDENT_DEPTH],
        'jsx-quotes':            ['error'],
        'key-spacing':           ['error', { mode: 'minimum' }],
        'line-comment-position': ['error'],
        'linebreak-style':       ['error'],
        'max-depth':             ['error'],
        'max-len':               ['error', MAX_LINE_LEN],
        'max-params':            ['error'],
        'max-statements':        ['error'],
        'multiline-ternary':     ['error'],
        'new-cap':               ['error'],
        'new-parens':            ['error'],
        'no-array-constructor':  ['error'],
        'no-bitwise':            ['error'],
        'no-inline-comments':    ['error'],
        'no-lonely-if':          ['error'],
        'no-mixed-operators':    ['error'],
        'no-nested-ternary':     ['error'],
        'no-new-object':         ['error'],
        'no-tabs':               ['error'],
        'no-trailing-spaces':    ['error'],
        'no-unneeded-ternary':   ['error'],
        'no-whitespace-before-property': ['error'],
        'object-curly-spacing':        ['error', 'always'],
        'operator-linebreak':          ['error'],
        'quote-props':                 ['error', 'as-needed', { unnecessary: false }],
        'quotes':                      ['error', 'single'],
        'semi':                        ['error'],
        'semi-spacing':                ['error'],
        'semi-style':                  ['error'],
        'space-before-blocks':         ['error'],
        'space-before-function-paren': ['error', {anonymous: 'always', named: 'never', asyncArrow: 'always'}],
        'space-in-parens':             ['error'],
        'space-infix-ops':             ['error'],
        'space-unary-ops':             ['error'],
        'spaced-comment':              ['error'],
        'switch-colon-spacing':        ['error'],

        // ECMAScript 6

        'constructor-super':  ['error'],
        'no-var':             ['error'],
        'prefer-const':       ['error'],
        'prefer-rest-params': ['error'],
        'prefer-spread':      ['error'],
        'prefer-template':    ['error'],
    },
};

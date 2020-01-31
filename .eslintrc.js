module.exports = {
    env: {
        es6: true,
        node: true,
    },
    extends: ['airbnb-base', 'prettier'],
    plugins: ['prettier'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        "prettier/prettier": "error",
        "class-methods-use_this": 0,
        "no-param-reassign": 0,
        "camelcase": "off",
        "no-unused-vars": ["error", { "argsIgnorePattern": "next" }],
        "linebreak-style": 0,
        "global-require": 0,
    },
}

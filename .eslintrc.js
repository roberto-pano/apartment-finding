module.exports = {
    "root": true,
    "parser": "@babel/eslint-parser",
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "globals": {
        "browser": true,
        "shallow": true,
        "mount": true
    },
    "plugins": [
        "react",
        "react-refresh"
    ],
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "extends": [
        "eslint:recommended",
        "prettier",
        "plugin:react/recommended"
    ],
    "rules": {
        "max-len": [
            "error",
            100
        ],
        "comma-dangle": 2,
        "no-cond-assign": 2,
        "no-console": 2,
        "no-dupe-args": 2,
        "no-dupe-keys": 2,
        "no-duplicate-case": 2,
        "no-empty": 2,
        "no-ex-assign": 2,
        "no-extra-boolean-cast": 2,
        "no-extra-parens": 0,
        "no-extra-semi": 2,
        "valid-typeof": 2,
        "no-undef": 2,
        "no-undefined": 0,
        "no-unused-vars": 1,
        "comma-spacing": 1,
        "comma-style": 1,
        "indent": [
            "error",
            2,
            {
                "SwitchCase": 1
            }
        ],
        "jsx-quotes": 1,
        "key-spacing": 1,
        "keyword-spacing": 1,
        "linebreak-style": 1,
        "lines-around-comment": 1,
        "new-cap": 1,
        "semi": ["error"],
        "@typescript-eslint/semi": ["error"],
        "quotes": [2, "single"],
        "react-refresh/only-export-components": ["warn", { "allowConstantExports" : true}],
        "prettier.singleQuote": true,
        "prettier.printWidth": 100
    }
}
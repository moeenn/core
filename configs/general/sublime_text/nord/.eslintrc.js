/*
 * Copyright (c) 2016-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2016-present Sven Greb <code@svengreb.de>

 * Project:    Nord Tilix
 * Repository: https://github.com/arcticicestudio/nord-tilix
 * License:    MIT
 * References:
 *   http://eslint.org/docs/user-guide/configuring
 *   http://eslint.org/docs/user-guide/configuring#using-configuration-files
 *   http://eslint.org/docs/user-guide/configuring#specifying-environments
 *   http://eslint.org/docs/user-guide/configuring#configuring-plugins
 *   http://eslint.org/docs/rules
 */

module.exports = {
  "env": {
    "node": true,
    "es6": true,
    "browser": true
  },
  "plugins": ["json"],
  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "extends": [
    "eslint:recommended"
  ],
  "rules": {
    // Style Guide
    "array-bracket-spacing": ["error", "never"],
    "comma-dangle": ["error", "never"],
    "curly":["error", "all"],
    "func-call-spacing": ["error", "never"],
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "no-duplicate-imports": "error",
    "no-tabs": "error",
    "no-var": "error",
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    // Error Prevention
    "no-cond-assign": ["error", "always"],
    "no-console": "off",
    // Code Performance
    "global-require": "warn",
    // Documentation
    "require-jsdoc": ["warn", {
      "require": {
        "FunctionDeclaration": true,
        "MethodDefinition": false,
        "ClassDeclaration": true,
        "ArrowFunctionExpression": false
      }
    }],
    "valid-jsdoc": ["error", {
      "prefer": {
        "arg": "param",
        "argument": "param",
        "class": "constructor",
        "virtual": "abstract"
      },
      "requireParamDescription": true,
      "requireReturnDescription": true
    }]
  }
}

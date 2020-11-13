// SPDX-License-Identifier: MIT
// Solhint Configuration
"use strict";

module.exports = {
  extends: "solhint:recommended",
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "code-complexity": ["error", 7],
    "compiler-version": ["error", "^0.7.0"],
    "const-name-snakecase": "off",
    "func-name-mixedcase": "off",
    "constructor-syntax": "error",
    "func-visibility": [
      "error",
      {
        ignoreConstructors: true,
      },
    ],
    "not-rely-on-time": "off",
    "reason-string": [
      "warn",
      {
        maxLength: 64,
      },
    ],
  },
};

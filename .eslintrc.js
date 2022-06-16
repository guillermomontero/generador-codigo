module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "airbnb-base",
    "@open-wc",
    "prettier"
  ],
  rules: {
    "no-useless-escape": "off",
    "no-trailing-spaces": "off",
    "object-property-newline": "off",
    "import/no-cycle": "off",
    "no-nested-ternary": "off",
    "no-lonely-if": "off",
    "no-shadow": "off",
    "comma-dangle": "off",
    "object-curly-brace": "off",
    "object-curly-newline": "off",
    "no-confusing-arrow": "off",
    "import/prefer-default-export": "off",
    "padded-blocks": "off",
    "arrow-body-style": "off",
    "no-unused-expressions": "off",
    "prefer-destructuring": ["error", {
      "array": false,
    }],
    "max-len": "off",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "linebreak-style": 0,
    "object-shorthand": ["error", "always", { ignoreConstructors: true }],
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsFor: ["state"]
      }
    ],
    "import/extensions": 'off',
    "operator-assignment": 'off',
    "import/order": 'off',
    "no-plusplus": "off",
    "parser": "@babel/eslint-parser",
  }
}
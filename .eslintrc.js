module.exports = {
    "extends": "airbnb",
    "env": {
        "browser": true,
        "node": true
      },
      "parser": "babel-eslint",
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/prefer-stateless-function":0,
        "react/forbid-prop-types":0,
        "import/extensions":0
      }
};
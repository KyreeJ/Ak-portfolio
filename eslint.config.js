module.exports = {
  "parserOptions": {
    "ecmaVersion": 2020,
    "jsx": true,
  },
  "env": {
    "browser": true,
    "node": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime" 
  ],
  "rules": {
    "react/react-in-jsx-scope": "off", 
  }
};

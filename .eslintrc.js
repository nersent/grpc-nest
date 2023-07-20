
module.exports = {
  "parser": "@typescript-eslint/parser",
  "extends": [
    "@nersent/eslint-config-ts"
  ],
  "settings": {
    "import/resolver": {
      "typescript": {}
    }
  },
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": ['./tsconfig.json', './tsconfig.lib.json', './tsconfig.cli.json', './tsconfig.example.json'],
  }
}

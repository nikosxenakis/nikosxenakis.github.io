const globals = require("globals");
const pluginJs = require("@eslint/js");

module.exports = [
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
];

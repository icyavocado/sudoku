// craco.config.js
const path = require(`path`);
const alias = require(`./src/config/aliases`);
const fromEntries = require('object.fromentries');

const SRC = `./src`;
const aliases = alias(SRC);

const resolvedAliases = fromEntries(
  Object.entries(aliases).map(([key, value]) => [key, path.resolve(__dirname, value)]),
);

module.exports = {
  webpack: {
    alias: resolvedAliases,
  },
};
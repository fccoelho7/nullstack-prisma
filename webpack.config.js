const path = require("path");
const [server, client] = require("nullstack/webpack.config");
const CopyWebpackPlugin = require("copy-webpack-plugin");

function customServer(...args) {
  const config = server(...args);

  if (config.mode === "production") {
    config.plugins.push(
      new CopyWebpackPlugin({
        patterns: ["./prisma/schema.prisma"],
      })
    );

    config.externals = ["@prisma/client"];
  }

  return config;
}

function customClient(...args) {
  const config = client(...args);

  return config;
}

module.exports = [customServer, customClient];

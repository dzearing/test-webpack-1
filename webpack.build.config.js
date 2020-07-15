const path = require("path");
module.exports = {
  mode: "production", // "production" | "development" | "none"
  entry: "./index.tsx", // string | object | array
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"), // string
    filename: "bundle.js", // string
    publicPath: "/assets/", // string
    library: "MyLibrary", // string,
    libraryTarget: "umd", // universal module definition
  },
  context: __dirname, // string (absolute path!)
  target: "web", // enum
  externals: ["react", "react-dom"],
  plugins: [],
};

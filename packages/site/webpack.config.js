const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

const getCssLoaders = () => {
  const loaders = [
    {
      loader: "css-loader",
    },
    {
      loader: "sass-loader",
    },
  ];

  if (devMode) {
    // 开发环境使用style-loader
    loaders.unshift({
      loader: "style-loader",
    });
  } else {
    // 生产环境提取css文件
    loaders.unshift({
      loader: MiniCssExtractPlugin.loader,
    });
  }
  return loaders;
};

const cdnjs = [
  "https://cdn.bootcdn.net/ajax/libs/react/17.0.2/umd/react.production.min.js",
  "https://cdn.bootcdn.net/ajax/libs/react-dom/17.0.2/umd/react-dom.production.min.js",
]
  .map((url) => {
    return `<script crossorigin src="${url}"></script>`;
  })
  .join("");

module.exports = {
  entry: {
    main: "./src/main/index.js",
    demo: "./src/demo/index.js"
  },

  devtool: devMode ? "inline-source-map" : false,

  mode: devMode ? "development" : "production",

  externals: devMode
    ? {}
    : {
        react: "React",
        "react-dom": "ReactDOM",
      },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
      Styles: path.resolve(__dirname, "../src/assets/styles/"),
    },
  },

  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: getCssLoaders(),
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "assets/images",
        },
      },
      {
        test: /\.(svg|eot|ttf|woff)\w*/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "assets/fonts",
        },
      },
      {
        test: /\.md*/,
        loader: "raw-loader"
      },
      {
        test: /\.tsx*/,
        loader: "raw-loader"
      }
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: "xun-components",
      template: "./src/template.html",
      minify: false,
      inject: "body",
      cdnjs: cdnjs,
      chunks: ['main'],
    }),
     new HtmlWebpackPlugin({
      filename: 'demo.html',
      title: "xun-components",
      template: "./src/template.html",
      minify: false,
      inject: "body",
      cdnjs: cdnjs,
      chunks: ['demo'],
    }),
    new MiniCssExtractPlugin({
      filename: "assets/styles/[name].[contenthash].css",
    }),
  ],

  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 9002,
    historyApiFallback: true,
  },
};

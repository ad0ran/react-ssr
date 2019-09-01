module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/app/index.tsx":
/*!**********************************!*\
  !*** ./src/client/app/index.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _default = function _default() {\n  return _react.default.createElement(\"h1\", null, \"Hello World!\");\n};\n\nexports.default = _default;\n\n//# sourceURL=webpack://react-ssr-server/./src/client/app/index.tsx?");

/***/ }),

/***/ "./src/client/assets/favicon.ico":
/*!***************************************!*\
  !*** ./src/client/assets/favicon.ico ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"client/favicon.ico\";\n\n//# sourceURL=webpack://react-ssr-server/./src/client/assets/favicon.ico?");

/***/ }),

/***/ "./src/server/index.tsx":
/*!******************************!*\
  !*** ./src/server/index.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\n\n__webpack_require__(/*! core-js/modules/es.array.flat-map */ \"core-js/modules/es.array.flat-map\");\n\n__webpack_require__(/*! core-js/modules/es.array.map */ \"core-js/modules/es.array.map\");\n\n__webpack_require__(/*! core-js/modules/es.array.unscopables.flat-map */ \"core-js/modules/es.array.unscopables.flat-map\");\n\nvar _express = _interopRequireDefault(__webpack_require__(/*! express */ \"express\"));\n\nvar _path = _interopRequireDefault(__webpack_require__(/*! path */ \"path\"));\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _webpack = _interopRequireDefault(__webpack_require__(/*! webpack */ \"webpack\"));\n\nvar _webpack2 = _interopRequireDefault(__webpack_require__(/*! ./../../webpack.config */ \"./webpack.config.ts\"));\n\nvar _app = _interopRequireDefault(__webpack_require__(/*! ./../client/app */ \"./src/client/app/index.tsx\"));\n\nvar _template = _interopRequireDefault(__webpack_require__(/*! ./template */ \"./src/server/template.tsx\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express.default)();\n\nvar init = function init(err, stats) {\n  if (err) {\n    throw err;\n  }\n\n  if (stats.hasErrors()) {\n    throw stats.toJson().errors;\n  }\n\n  var something = stats.toJson(); // console.log('chunks', something.chunks);\n\n  app.use(_express.default.static(_path.default.resolve(__dirname, '..', '..', 'build', 'client')));\n  app.use('*', function (req, res, next) {\n    var template = (0, _template.default)({\n      body: _react.default.createElement(_app.default, null),\n      scripts: something.chunks.flatMap(function (x) {\n        return x.files.map(function (file, i) {\n          return _react.default.createElement(\"script\", {\n            key: i,\n            src: file,\n            defer: true\n          });\n        });\n      })\n    });\n    res.setHeader('Content-Type', 'text/html');\n    res.send(template);\n    res.end();\n  });\n  app.listen(3000, function () {\n    console.log('listening on port 3000');\n  });\n};\n\n(0, _webpack.default)(_webpack2.default.client, init);\n/* WEBPACK VAR INJECTION */}.call(this, \"src\\\\server\"))\n\n//# sourceURL=webpack://react-ssr-server/./src/server/index.tsx?");

/***/ }),

/***/ "./src/server/template.tsx":
/*!*********************************!*\
  !*** ./src/server/template.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! core-js/modules/es.array.concat */ \"core-js/modules/es.array.concat\");\n\n__webpack_require__(/*! core-js/modules/es.array.map */ \"core-js/modules/es.array.map\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\n__webpack_require__(/*! ./../client/assets/favicon.ico */ \"./src/client/assets/favicon.ico\");\n\nvar _default = function _default(template) {\n  var body = template.body,\n      _template$title = template.title,\n      title = _template$title === void 0 ? 'React SSR' : _template$title,\n      _template$scripts = template.scripts,\n      scripts = _template$scripts === void 0 ? [] : _template$scripts,\n      _template$css = template.css,\n      css = _template$css === void 0 ? [] : _template$css;\n  return \"\\n        <!DOCTYPE html>\\n        <html>\\n            <head>\\n                <title>\".concat(title, \"</title>\\n                <meta name=\\\"viewport\\\" content=\\\"width=device-width,initial-scale=1\\\" />\\n                <link rel=\\\"icon\\\" href=\\\"favicon.ico\\\" type=\\\"image/x-icon\\\" />\\n                \").concat(css.map(function (x) {\n    return (0, _server.renderToStaticMarkup)(x);\n  }), \"\\n            </head>\\n            <body>\\n                <div id=\\\"app-root\\\">\").concat((0, _server.renderToString)(body), \"</div>\\n                \").concat(scripts.map(function (x) {\n    return (0, _server.renderToStaticMarkup)(x);\n  }), \"\\n            </body>\\n        </html>\\n    \");\n};\n\nexports.default = _default;\n\n//# sourceURL=webpack://react-ssr-server/./src/server/template.tsx?");

/***/ }),

/***/ "./webpack.config.ts":
/*!***************************!*\
  !*** ./webpack.config.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _cleanWebpackPlugin = __webpack_require__(/*! clean-webpack-plugin */ \"clean-webpack-plugin\");\n\nvar _path = _interopRequireDefault(__webpack_require__(/*! path */ \"path\"));\n\nvar _webpackMerge = __webpack_require__(/*! webpack-merge */ \"webpack-merge\");\n\nvar _webpackNodeExternals = _interopRequireDefault(__webpack_require__(/*! webpack-node-externals */ \"webpack-node-externals\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar client = {\n  mode: 'development',\n  name: 'client-configuration',\n  context: process.cwd(),\n  node: {\n    __dirname: true,\n    process: true\n  },\n  resolve: {\n    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']\n  },\n  entry: {\n    app: _path.default.resolve(process.cwd(), 'src', 'client', 'index.tsx')\n  },\n  output: {\n    path: _path.default.resolve(process.cwd(), 'build', 'client'),\n    publicPath: '/',\n    filename: '[name].js',\n    chunkFilename: '[name]-[chunkhash].js'\n  },\n  module: {\n    rules: [{\n      test: /\\.tsx?$/i,\n      exclude: /node_modules/ig,\n      use: {\n        loader: 'babel-loader',\n        options: {\n          cwd: process.cwd(),\n          babelrc: false,\n          presets: [['@babel/preset-env', {\n            targets: {\n              browsers: ['defaults'],\n              node: process.versions.node\n            },\n            modules: 'cjs',\n            useBuiltIns: 'usage',\n            corejs: {\n              version: 3,\n              proposals: true\n            }\n          }], '@babel/preset-react', '@babel/preset-typescript'],\n          plugins: ['@babel/plugin-syntax-dynamic-import', ['@babel/plugin-proposal-decorators', {\n            legacy: true\n          }], ['@babel/plugin-proposal-class-properties', {\n            loose: true\n          }]]\n        }\n      }\n    }, {\n      test: /\\.(ico)$/,\n      use: {\n        loader: 'file-loader'\n      }\n    }]\n  }\n};\nvar _default = {\n  client: client,\n  server: (0, _webpackMerge.smartStrategy)({\n    output: 'replace',\n    entry: 'replace'\n  })(client, {\n    entry: {\n      server: _path.default.resolve(__dirname, 'src', 'server', 'index.tsx')\n    },\n    output: {\n      path: _path.default.resolve(__dirname, 'build'),\n      filename: '[name].js',\n      chunkFilename: '[name]-[chunkhash].js',\n      library: 'react-ssr-server',\n      libraryTarget: 'commonjs2'\n    },\n    target: 'node',\n    plugins: [new _cleanWebpackPlugin.CleanWebpackPlugin()],\n    externals: [(0, _webpackNodeExternals.default)()],\n    module: {\n      rules: [{\n        test: /\\.(ico)$/,\n        use: {\n          loader: 'file-loader',\n          options: {\n            name: '[name].[ext]',\n            outputPath: 'client'\n          }\n        }\n      }]\n    }\n  })\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, \"\"))\n\n//# sourceURL=webpack://react-ssr-server/./webpack.config.ts?");

/***/ }),

/***/ "clean-webpack-plugin":
/*!***************************************!*\
  !*** external "clean-webpack-plugin" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"clean-webpack-plugin\");\n\n//# sourceURL=webpack://react-ssr-server/external_%22clean-webpack-plugin%22?");

/***/ }),

/***/ "core-js/modules/es.array.concat":
/*!**************************************************!*\
  !*** external "core-js/modules/es.array.concat" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.array.concat\");\n\n//# sourceURL=webpack://react-ssr-server/external_%22core-js/modules/es.array.concat%22?");

/***/ }),

/***/ "core-js/modules/es.array.flat-map":
/*!****************************************************!*\
  !*** external "core-js/modules/es.array.flat-map" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.array.flat-map\");\n\n//# sourceURL=webpack://react-ssr-server/external_%22core-js/modules/es.array.flat-map%22?");

/***/ }),

/***/ "core-js/modules/es.array.map":
/*!***********************************************!*\
  !*** external "core-js/modules/es.array.map" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.array.map\");\n\n//# sourceURL=webpack://react-ssr-server/external_%22core-js/modules/es.array.map%22?");

/***/ }),

/***/ "core-js/modules/es.array.unscopables.flat-map":
/*!****************************************************************!*\
  !*** external "core-js/modules/es.array.unscopables.flat-map" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es.array.unscopables.flat-map\");\n\n//# sourceURL=webpack://react-ssr-server/external_%22core-js/modules/es.array.unscopables.flat-map%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack://react-ssr-server/external_%22express%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack://react-ssr-server/external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack://react-ssr-server/external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack://react-ssr-server/external_%22react-dom/server%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack://react-ssr-server/external_%22webpack%22?");

/***/ }),

/***/ "webpack-merge":
/*!********************************!*\
  !*** external "webpack-merge" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-merge\");\n\n//# sourceURL=webpack://react-ssr-server/external_%22webpack-merge%22?");

/***/ }),

/***/ "webpack-node-externals":
/*!*****************************************!*\
  !*** external "webpack-node-externals" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-node-externals\");\n\n//# sourceURL=webpack://react-ssr-server/external_%22webpack-node-externals%22?");

/***/ })

/******/ });
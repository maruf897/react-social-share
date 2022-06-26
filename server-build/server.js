/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _src_App_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/App.js */ \"./src/App.js\");\n/* harmony import */ var _src_app_about_about_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/app/about/about.jsx */ \"./src/app/about/about.jsx\");\n/* harmony import */ var _src_app_about_test_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/app/about/test.js */ \"./src/app/about/test.js\");\n\n\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(cors__WEBPACK_IMPORTED_MODULE_1___default()());\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"](\"dist\"));\napp.get(\"*\", function (req, res, next) {\n  var markup = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_3__.renderToStaticNodeStream)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.StaticRouter, {\n    location: req.url\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_src_App_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null)));\n  res.send(\"\\n  <!DOCTYPE html>\\n  <html>\\n    <head>\\n      <meta charset=\\\"utf-8\\\" />\\n      <title>SSR App: \".concat(req.url, \"</title>\\n    </head>\\n  \\n    <body>\\n      <div id=\\\"root\\\">\").concat(markup, \"</div>\\n      <script src=\\\"bundle.js\\\"></script>\\n    </body>\\n  </html>\\n    \"));\n});\napp.listen(3000, function () {\n  console.log(\"Server is listening on port: 3000\");\n});\n/*\r\n  1) Just get shared App rendering to string on server then taking over on client.\r\n  2) Pass data to <App /> on server. Show diff. Add data to window then pick it up on the client too.\r\n  3) Instead of static data move to dynamic data (github gists)\r\n  4) add in routing.\r\n*/\n\n//# sourceURL=webpack://react-share/./index.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _app_home_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/home/home */ \"./src/app/home/home.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_about_about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/about/about */ \"./src/app/about/about.jsx\");\n/* harmony import */ var _components_MetaDecorator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/MetaDecorator */ \"./src/components/MetaDecorator.js\");\n/* harmony import */ var _components_content_share_ContentShare__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/content-share/ContentShare */ \"./src/components/content-share/ContentShare.jsx\");\n/* harmony import */ var _app_about_shadhin_labs_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app/about/shadhin-labs.png */ \"./src/app/about/shadhin-labs.png\");\n/* harmony import */ var _app_about_dash_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app/about/dash.png */ \"./src/app/about/dash.png\");\n/* harmony import */ var _app_about_small_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app/about/small.jpg */ \"./src/app/about/small.jpg\");\n\n\n\n\n\n\n\n\n\n\n\n\nfunction App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"title\", null, \"App Title\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"meta\", {\n    name: \"og:title\",\n    content: \"React share\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"meta\", {\n    name: \"description\",\n    content: \"App Description\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"meta\", {\n    name: \"theme-color\",\n    content: \"#008f68\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {\n    to: \"/\"\n  }, \"Home\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {\n    to: \"/about\"\n  }, \"About\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {\n    to: \"/dashboard\"\n  }, \"Dashboard\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {\n    exact: true,\n    path: \"/\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_app_home_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {\n    path: \"/about\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_app_about_about__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {\n    path: \"/dashboard\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Dashboard, null)))));\n} // You can think of these components as \"pages\"\n// in your app.\n// function Home() {\n//     return (\n//         <div>\n//             <h2>Home</h2>\n//         </div>\n//     );\n// }\n// function About() {\n//     return (\n//         <div>\n//             <h2>About</h2>\n//         </div>\n//     );\n// }\n\n\nfunction Dashboard() {\n  var userIdShare = window.location.href;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"h2\", null, \"Dashboard\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_MetaDecorator__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    description: \"This is dash page description\",\n    imageUrl: _app_about_small_jpg__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n    imageAlt: \"dash image\",\n    title: \"dash Page\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"img\", {\n    src: _app_about_dash_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n  }), \"About pagess\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_content_share_ContentShare__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    url: userIdShare\n  })), \";\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://react-share/./src/App.js?");

/***/ }),

/***/ "./src/app/about/about.jsx":
/*!*********************************!*\
  !*** ./src/app/about/about.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ About)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_content_share_ContentShare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/content-share/ContentShare */ \"./src/components/content-share/ContentShare.jsx\");\n/* harmony import */ var _components_MetaDecorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/MetaDecorator */ \"./src/components/MetaDecorator.js\");\n/* harmony import */ var _home_static_image_image_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home/static/image/image.jpg */ \"./src/app/home/static/image/image.jpg\");\n/* harmony import */ var _shadhin_labs_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shadhin-labs.png */ \"./src/app/about/shadhin-labs.png\");\n/* harmony import */ var _dash_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dash.png */ \"./src/app/about/dash.png\");\n\n\n\n\n\n\nfunction About() {\n  var userIdShare = window.location.href;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_MetaDecorator__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    description: \"This is about page description\",\n    imageUrl: _dash_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    imageAlt: \"about image\",\n    title: \"About Page\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    src: _home_static_image_image_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }), \"About pagess\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_content_share_ContentShare__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    url: userIdShare\n  }));\n}\n\n//# sourceURL=webpack://react-share/./src/app/about/about.jsx?");

/***/ }),

/***/ "./src/app/about/test.js":
/*!*******************************!*\
  !*** ./src/app/about/test.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Test)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Test() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"test\");\n}\n\n//# sourceURL=webpack://react-share/./src/app/about/test.js?");

/***/ }),

/***/ "./src/app/home/home.jsx":
/*!*******************************!*\
  !*** ./src/app/home/home.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _static_image_image_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./static/image/image.jpg */ \"./src/app/home/static/image/image.jpg\");\n/* harmony import */ var _components_MetaDecorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/MetaDecorator */ \"./src/components/MetaDecorator.js\");\n/* harmony import */ var _components_content_share_ContentShare__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/content-share/ContentShare */ \"./src/components/content-share/ContentShare.jsx\");\n/* harmony import */ var _about_small_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../about/small.jpg */ \"./src/app/about/small.jpg\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\nvar Home = function Home() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),\n      _useState2 = _slicedToArray(_useState, 2),\n      data = _useState2[0],\n      setData = _useState2[1];\n\n  console.log(window.location);\n  var userIdShare = window.location.href;\n  console.log(userIdShare); // useEffect(async () => {\n  //     setTimeout(() => {\n  //         setData({\n  //             description: \"Lorem Ipsum is simply dummy text of the printing and typesetting industry\",\n  //             image: Image,\n  //             imageAlt: \"home Image\",\n  //             title: \"home image\"\n  //         })\n  //     }, 1000)\n  // }, []);\n\n  console.log(data);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_MetaDecorator__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    description: \"Lorem Ipsum is simply dummy text of the printing and typesetting industry\",\n    imageUrl: _static_image_image_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    imageAlt: \"home image\",\n    title: \"Home Page\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    className: \"text-center\"\n  }, \"Lorem Ipsum\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"\\\"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...\\\" \\\"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...\\\"\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: \"img-fluid\",\n    style: {\n      height: \"400px!important\"\n    },\n    src: _about_small_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    alt: \"\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"col-md-6\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"What is Lorem Ipsum?\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"col-md-6\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"What is Lorem Ipsum?\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"col-md-6\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"What is Lorem Ipsum?\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"col-md-6\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"What is Lorem Ipsum?\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_content_share_ContentShare__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    url: userIdShare\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack://react-share/./src/app/home/home.jsx?");

/***/ }),

/***/ "./src/components/MetaDecorator.js":
/*!*****************************************!*\
  !*** ./src/components/MetaDecorator.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar MetaDecorator = function MetaDecorator(_ref) {\n  var title = _ref.title,\n      description = _ref.description,\n      imageUrl = _ref.imageUrl,\n      imageAlt = _ref.imageAlt;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"title\", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"meta\", {\n    property: \"og:title\",\n    content: title\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"meta\", {\n    name: \"description\",\n    content: description\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"meta\", {\n    property: \"og:description\",\n    content: description\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"meta\", {\n    property: \"og:image\",\n    content: window.location.origin + imageUrl\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"meta\", {\n    property: \"og:url\",\n    content: window.location.pathname + window.location.search\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"meta\", {\n    name: \"twitter:card\",\n    content: \"summary_large_image\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"meta\", {\n    name: \"twitter:image:alt\",\n    content: imageAlt\n  }));\n};\n\nMetaDecorator.propTypes = {\n  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),\n  description: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),\n  imageUrl: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),\n  imageAlt: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MetaDecorator);\n\n//# sourceURL=webpack://react-share/./src/components/MetaDecorator.js?");

/***/ }),

/***/ "./src/components/content-share/ContentShare.jsx":
/*!*******************************************************!*\
  !*** ./src/components/content-share/ContentShare.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-share */ \"react-share\");\n/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_share__WEBPACK_IMPORTED_MODULE_1__);\n // import \"./static/ContentShare.scss\"\n\n\n\nvar ContentShare = function ContentShare(props) {\n  var popupMood = props.popupMood,\n      url = props.url,\n      noWidth = props.noWidth;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", {\n    className: popupMood ? \"dropdown-menu d-block\" : \"plain-mood p-0 m-0\",\n    style: props.noWidth ? {} : {\n      minWidth: \"140px\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n    className: \"text-center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_share__WEBPACK_IMPORTED_MODULE_1__.FacebookShareButton, {\n    url: url\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", {\n    viewBox: \"0 0 64 64\",\n    width: \"32\",\n    height: \"32\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"circle\", {\n    cx: \"32\",\n    cy: \"32\",\n    r: \"31\",\n    fill: \"#3b5998\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    d: \"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z\",\n    fill: \"white\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_share__WEBPACK_IMPORTED_MODULE_1__.LinkedinShareButton, {\n    url: url\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", {\n    viewBox: \"0 0 64 64\",\n    width: \"32\",\n    height: \"32\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"circle\", {\n    cx: \"32\",\n    cy: \"32\",\n    r: \"31\",\n    fill: \"#007fb1\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    d: \"M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z\",\n    fill: \"white\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_share__WEBPACK_IMPORTED_MODULE_1__.TwitterShareButton, {\n    url: url\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", {\n    viewBox: \"0 0 64 64\",\n    width: \"32\",\n    height: \"32\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"circle\", {\n    cx: \"32\",\n    cy: \"32\",\n    r: \"31\",\n    fill: \"#00aced\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    d: \"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z\",\n    fill: \"white\"\n  })))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentShare);\n\n//# sourceURL=webpack://react-share/./src/components/content-share/ContentShare.jsx?");

/***/ }),

/***/ "./src/app/about/dash.png":
/*!********************************!*\
  !*** ./src/app/about/dash.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"static/media/dash.bc987357.png\");\n\n//# sourceURL=webpack://react-share/./src/app/about/dash.png?");

/***/ }),

/***/ "./src/app/about/shadhin-labs.png":
/*!****************************************!*\
  !*** ./src/app/about/shadhin-labs.png ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"static/media/shadhin-labs.85219198.png\");\n\n//# sourceURL=webpack://react-share/./src/app/about/shadhin-labs.png?");

/***/ }),

/***/ "./src/app/about/small.jpg":
/*!*********************************!*\
  !*** ./src/app/about/small.jpg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"data:image/jpeg;base64,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\");\n\n//# sourceURL=webpack://react-share/./src/app/about/small.jpg?");

/***/ }),

/***/ "./src/app/home/static/image/image.jpg":
/*!*********************************************!*\
  !*** ./src/app/home/static/image/image.jpg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"static/media/image.75df924a.jpg\");\n\n//# sourceURL=webpack://react-share/./src/app/home/static/image/image.jpg?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-share":
/*!******************************!*\
  !*** external "react-share" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-share");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("serialize-javascript");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;
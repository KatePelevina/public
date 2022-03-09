/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function() {

eval("// const sum = require(\"./module/sum.js\");\n// console.log(sum(2,10));\n// console.log(sum(12,5));\n\n$('.single-item').slick({\n    autoplay: true,\n    autoplaySpeed: 5000,\n    speed: 1500,\n    dots: true,\n    responsive: [\n      {\n        breakpoint: 1024,\n        settings: {\n          slidesToShow: 1,\n          slidesToScroll: 1,\n          infinite: true,\n          dots: true\n        }\n      },\n      {\n        breakpoint: 600,\n        settings: {\n          slidesToShow: 1,\n          slidesToScroll: 1\n        }\n      },\n      {\n        breakpoint: 480,\n        settings: {\n          slidesToShow: 1,\n          slidesToScroll: 1\n        }\n      }\n    ]\n  });\n\n\n  let menuBtn = document.querySelector('.menu-btn');\n  let menu = document.querySelector('.menu');\n\n  menuBtn.addEventListener('click', function(){\n\t  menuBtn.classList.toggle('active');\n\t  menu.classList.toggle('active');\n  })\n\n\n  \n\n//# sourceURL=webpack://codequest_gulp/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;
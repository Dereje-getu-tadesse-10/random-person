/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (() => {

eval("const generatedName = document.querySelector('.name');\nconst generatedLastName = document.querySelector('.last-name');\nconst generatedEmail = document.querySelector('.email');\nconst genratedLocation = document.querySelector('.location');\nconst generatedPhone = document.querySelector('.number-phone');\nconst generatePerson = document.querySelector('.btn-generate');\n// random person api\nconst url = 'https://randomuser.me/api/';\nfunction getRandomPerson(url) {\n    fetch(url)\n        .then(response => response.json())\n        .then(data => {\n        // destructuring data\n        const { name, lastname, email, location, phone } = data.results[0];\n        generatedName.textContent = `First name : ${name.first}`;\n        generatedLastName.textContent = `Last name : ${name.last}`;\n        generatedEmail.textContent = `Email : ${email}`;\n        genratedLocation.textContent = `Location : ${location.city}`;\n        generatedPhone.textContent = `Phone : ${phone}`;\n    });\n}\n// get new person\ngeneratePerson.addEventListener(\"click\", () => {\n    getRandomPerson(url);\n});\n// call by default\ngetRandomPerson(url);\n\n\n//# sourceURL=webpack://random-person/./src/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.ts"]();
/******/ 	
/******/ })()
;
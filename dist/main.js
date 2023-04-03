/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/fileController.ts":
/*!***********************************!*\
  !*** ./src/app/fileController.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);

var FileControllerClass = /** @class */ (function () {
    function FileControllerClass() {
    }
    FileControllerClass.prototype.createAlbum = function (name) {
        fs__WEBPACK_IMPORTED_MODULE_0__.mkdirSync("./albums/".concat(name));
    };
    FileControllerClass.prototype.uploadPhoto = function (name, album) {
        if (!fs__WEBPACK_IMPORTED_MODULE_0__.existsSync("./albums/".concat(album)))
            this.createAlbum(album);
        fs__WEBPACK_IMPORTED_MODULE_0__.renameSync("./temp/".concat(name), "./albums/".concat(album, "/").concat(name));
    };
    return FileControllerClass;
}());
var FileController = new FileControllerClass();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FileController);


/***/ }),

/***/ "./src/app/getRequestData.ts":
/*!***********************************!*\
  !*** ./src/app/getRequestData.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPostData": () => (/* binding */ getPostData)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function getPostData(req) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    try {
                        var body_1 = "";
                        req.on("data", function (part) {
                            body_1 += part.toString();
                        });
                        req.on("end", function () {
                            resolve(body_1);
                        });
                    }
                    catch (err) {
                        reject(err);
                    }
                })];
        });
    });
}


/***/ }),

/***/ "./src/app/imageRouter.ts":
/*!********************************!*\
  !*** ./src/app/imageRouter.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ imageRouter)
/* harmony export */ });
/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formidable */ "formidable");
/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fileController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fileController */ "./src/app/fileController.ts");
/* harmony import */ var _getRequestData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getRequestData */ "./src/app/getRequestData.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



function imageRouter(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, path, params, form, body;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = req.method;
                    switch (_a) {
                        case "GET": return [3 /*break*/, 1];
                        case "POST": return [3 /*break*/, 2];
                        case "DELETE": return [3 /*break*/, 3];
                        case "PATCH": return [3 /*break*/, 4];
                    }
                    return [3 /*break*/, 7];
                case 1:
                    _b = req.url.split(/\?/), path = _b[0], params = _b[1];
                    if (path == "/api/photos") {
                        res.statusCode = 200;
                        res.setHeader("content-type", "image/jpg");
                        //pobierz wszystkie
                        res.end();
                    }
                    else if (req.url.match(/api\/photos\/[0-9]*/)) {
                        res.statusCode = 200;
                        res.setHeader("content-type", "image/jpg");
                        //pobierz jedno zdjęcie
                        res.end();
                    }
                    return [3 /*break*/, 7];
                case 2:
                    if (req.url == "/api/photos") {
                        form = formidable__WEBPACK_IMPORTED_MODULE_0__({ multiples: true, uploadDir: "./temp" });
                        form.parse(req, function (err, fields, files) {
                            if (err) {
                                res.statusCode = err.httpCode || 404;
                                res.statusMessage = String(err);
                                res.end();
                                return;
                            }
                            _fileController__WEBPACK_IMPORTED_MODULE_1__["default"].uploadPhoto(files.file.newFilename, fields.album);
                            res.statusCode = 200;
                            res.setHeader("content-type", "application/json");
                            res.end(JSON.stringify({ ok: "ok" }));
                        });
                    }
                    return [3 /*break*/, 7];
                case 3:
                    if (req.url.match(/api\/photos\/[0-9a-zA-Z]*/)) {
                        res.statusCode = 200;
                        res.setHeader("content-type", "application/json");
                        //usun zdjecie i zwroc jego json
                        res.end();
                    }
                    return [3 /*break*/, 7];
                case 4:
                    if (!req.url.match(/api\/photos\/[0-9]*/)) return [3 /*break*/, 6];
                    res.statusCode = 200;
                    res.setHeader("content-type", "application/json");
                    return [4 /*yield*/, (0,_getRequestData__WEBPACK_IMPORTED_MODULE_2__.getPostData)(req)
                        //edytuj jedno zdjecie
                    ];
                case 5:
                    body = _c.sent();
                    //edytuj jedno zdjecie
                    res.end(JSON.stringify(body));
                    _c.label = 6;
                case 6: return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}


/***/ }),

/***/ "./src/app/model.ts":
/*!**************************!*\
  !*** ./src/app/model.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "photoList": () => (/* binding */ photoList),
/* harmony export */   "tagsList": () => (/* binding */ tagsList)
/* harmony export */ });
var tagsList = [
    {
        "id": 0,
        "name": "#love",
        "popularity": 0
    },
    {
        "id": 1,
        "name": "#instagood",
        "popularity": 0
    },
    {
        "id": 2,
        "name": "#fashion",
        "popularity": 0
    },
    {
        "id": 3,
        "name": "#photooftheday",
        "popularity": 0
    },
    {
        "id": 4,
        "name": "#beautiful",
        "popularity": 0
    },
    {
        "id": 5,
        "name": "#art",
        "popularity": 0
    }
];
var photoList = [];


/***/ }),

/***/ "./src/app/tagsRouter.ts":
/*!*******************************!*\
  !*** ./src/app/tagsRouter.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ tagRouter)
/* harmony export */ });
/* harmony import */ var _getRequestData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getRequestData */ "./src/app/getRequestData.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/app/model.ts");


function tagRouter(req, res) {
    switch (req.method) {
        case "GET":
            var _a = req.url.split("?"), path = _a[0], args = _a[1];
            if (path.match(/raw/)) {
                res.statusCode = 200;
                res.statusMessage = "ok";
                res.setHeader("content-type", "application/json");
                var stringList = _model__WEBPACK_IMPORTED_MODULE_1__.tagsList.map(function (tag) {
                    return tag.name;
                });
                res.write(JSON.stringify(stringList));
                res.end();
            }
            else if (path.match(/tags$/)) {
                res.statusCode = 200;
                res.statusMessage = "ok";
                res.setHeader("content-type", "application/json");
                res.write(JSON.stringify(_model__WEBPACK_IMPORTED_MODULE_1__.tagsList));
                res.end();
            }
            else if (path.match(/tag\/[0-9]*/)) {
                var id_1 = path.split(/\/tags\//)[1];
                var tag = _model__WEBPACK_IMPORTED_MODULE_1__.tagsList.find(function (tag) { return tag.id == id_1; });
                res.statusCode = 200;
                res.statusMessage = "ok";
                res.setHeader("content-type", "application/json");
                res.write(JSON.stringify(tag));
                res.end();
            }
            break;
        case "POST":
            if (path.match(/^\/api\/tags$/)) {
                (0,_getRequestData__WEBPACK_IMPORTED_MODULE_0__.getPostData)(req).then(function (body) {
                    var params = new URLSearchParams(body);
                    var obj = Object.fromEntries(params);
                    if (_model__WEBPACK_IMPORTED_MODULE_1__.tagsList.findIndex(function (tag) { return tag.name == obj.name; }) == -1) {
                        res.statusCode = 201;
                        res.statusMessage = "ok";
                        res.setHeader("content-type", "text/txt");
                        res.end("Dodano tag: ".concat(obj.name));
                    }
                    else {
                        res.statusCode = 400;
                        res.statusMessage = "already exists";
                        res.setHeader("content-type", "text/txt");
                        res.end("Tag ".concat(obj.name, " ju\u017C istnieje"));
                    }
                });
            }
            break;
        case "PATCH":
            if (req.url.match(/api\/photos\/tags/))
                break;
    }
    return;
}


/***/ }),

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("formidable");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_imageRouter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/imageRouter */ "./src/app/imageRouter.ts");
/* harmony import */ var _app_tagsRouter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/tagsRouter */ "./src/app/tagsRouter.ts");

var PORT = 3000;


var server = (0,http__WEBPACK_IMPORTED_MODULE_0__.createServer)(function (req, res) {
    if (req.url.match(/tags/))
        (0,_app_tagsRouter__WEBPACK_IMPORTED_MODULE_2__["default"])(req, res);
    else if (req.url.match(/\/api\/photos/))
        (0,_app_imageRouter__WEBPACK_IMPORTED_MODULE_1__["default"])(req, res);
});
server.listen(PORT, function () {
    console.log("Start on " + PORT);
});

})();

/******/ })()
;
//# sourceMappingURL=main.js.map
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/controller/fileController.ts":
/*!**********************************************!*\
  !*** ./src/app/controller/fileController.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model */ "./src/app/model.ts");


var FileControllerClass = /** @class */ (function () {
    function FileControllerClass() {
    }
    FileControllerClass.prototype.createAlbum = function (name) {
        fs__WEBPACK_IMPORTED_MODULE_0__.mkdirSync("./albums/".concat(name));
    };
    FileControllerClass.prototype.uploadPhoto = function (name, album, userId) {
        if (!fs__WEBPACK_IMPORTED_MODULE_0__.existsSync("./albums/".concat(album)))
            this.createAlbum(album);
        fs__WEBPACK_IMPORTED_MODULE_0__.renameSync("./temp/".concat(name), "./albums/".concat(album, "/").concat(name));
        _model__WEBPACK_IMPORTED_MODULE_1__.photoList.push({
            id: _model__WEBPACK_IMPORTED_MODULE_1__.nextPhotoId.id,
            album: album,
            originalName: name,
            url: "./albums/".concat(album, "/").concat(name),
            lastChange: Date.now().toLocaleString(),
            history: [],
            tagList: [],
            userId: userId,
        });
        return _model__WEBPACK_IMPORTED_MODULE_1__.photoList[_model__WEBPACK_IMPORTED_MODULE_1__.photoList.length - 1];
    };
    FileControllerClass.prototype.findPhotoById = function (id) {
        return _model__WEBPACK_IMPORTED_MODULE_1__.photoList.find(function (el) { return el.id == id; });
    };
    FileControllerClass.prototype.createNewPost = function (title, content, photoId, email) {
        var user = _model__WEBPACK_IMPORTED_MODULE_1__.userList.find(function (val) { return val.email == email; });
        var post = {
            title: title,
            content: content,
            photoId: photoId,
            id: _model__WEBPACK_IMPORTED_MODULE_1__.nextPostId.id,
            userId: user.id,
            email: user.email,
        };
        _model__WEBPACK_IMPORTED_MODULE_1__.postList.push(post);
        return;
    };
    FileControllerClass.prototype.deletePost = function (id, email) {
        var post = _model__WEBPACK_IMPORTED_MODULE_1__.postList.findIndex(function (val) { return val.id == id; });
        if (_model__WEBPACK_IMPORTED_MODULE_1__.postList[post].email == email) {
            var x = _model__WEBPACK_IMPORTED_MODULE_1__.postList.slice(post, post + 1)[0];
            return x;
        }
        return false;
    };
    FileControllerClass.prototype.deletePhoto = function (id) { };
    return FileControllerClass;
}());
var FileController = new FileControllerClass();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FileController);
// export interface PhotoData {
//     id: String,
//     album: String,
//     originalName: String,
//     url: String,
//     lastChange: String,
//     history: singleChange[]
// }


/***/ }),

/***/ "./src/app/controller/filtersController.ts":
/*!*************************************************!*\
  !*** ./src/app/controller/filtersController.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "crop": () => (/* binding */ crop),
/* harmony export */   "flip": () => (/* binding */ flip),
/* harmony export */   "flop": () => (/* binding */ flop),
/* harmony export */   "getMetadata": () => (/* binding */ getMetadata),
/* harmony export */   "grayScale": () => (/* binding */ grayScale),
/* harmony export */   "negate": () => (/* binding */ negate),
/* harmony export */   "reformat": () => (/* binding */ reformat),
/* harmony export */   "resize": () => (/* binding */ resize),
/* harmony export */   "rotate": () => (/* binding */ rotate),
/* harmony export */   "tint": () => (/* binding */ tint)
/* harmony export */ });
/* harmony import */ var sharp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sharp */ "sharp");
/* harmony import */ var sharp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sharp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fileController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fileController */ "./src/app/controller/fileController.ts");
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


function getMetadata(photoId) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                    var photo, meta, err_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 4, , 5]);
                                photo = _fileController__WEBPACK_IMPORTED_MODULE_1__["default"].findPhotoById(photoId);
                                if (!(photo !== undefined)) return [3 /*break*/, 2];
                                return [4 /*yield*/, sharp__WEBPACK_IMPORTED_MODULE_0___default()(photo.url).metadata()];
                            case 1:
                                meta = _a.sent();
                                resolve(meta);
                                return [3 /*break*/, 3];
                            case 2:
                                resolve("not found");
                                _a.label = 3;
                            case 3: return [3 /*break*/, 5];
                            case 4:
                                err_1 = _a.sent();
                                reject(err_1.message);
                                return [3 /*break*/, 5];
                            case 5: return [2 /*return*/];
                        }
                    });
                }); })];
        });
    });
}
//toDo edutuj historie zdjecia zamiast tworzyc nowe dane po filtrze
function rotate(photoId, angle) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                    var photo, newPhoto, err_2;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 4, , 5]);
                                photo = _fileController__WEBPACK_IMPORTED_MODULE_1__["default"].findPhotoById(photoId);
                                if (!(photo !== undefined)) return [3 /*break*/, 2];
                                return [4 /*yield*/, sharp__WEBPACK_IMPORTED_MODULE_0___default()(photo.url)
                                        .rotate(angle)
                                        .toFile("temp/".concat(photo.originalName, "_rotate.jpg"))];
                            case 1:
                                _a.sent();
                                newPhoto = _fileController__WEBPACK_IMPORTED_MODULE_1__["default"].uploadPhoto(photo.originalName + "_rotate.jpg", photo.album, photo.userId);
                                resolve(newPhoto.id);
                                return [3 /*break*/, 3];
                            case 2:
                                reject("not found");
                                _a.label = 3;
                            case 3: return [3 /*break*/, 5];
                            case 4:
                                err_2 = _a.sent();
                                reject(err_2);
                                return [3 /*break*/, 5];
                            case 5: return [2 /*return*/];
                        }
                    });
                }); })];
        });
    });
}
function resize(photoId, width, height) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                    var photo, newPhoto, err_3;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 4, , 5]);
                                photo = _fileController__WEBPACK_IMPORTED_MODULE_1__["default"].findPhotoById(photoId);
                                if (!(photo !== undefined)) return [3 /*break*/, 2];
                                return [4 /*yield*/, sharp__WEBPACK_IMPORTED_MODULE_0___default()(photo.url)
                                        .resize(width, height)
                                        .toFile("temp/".concat(photo.originalName, "_resize.jpg"))];
                            case 1:
                                _a.sent();
                                newPhoto = _fileController__WEBPACK_IMPORTED_MODULE_1__["default"].uploadPhoto(photo.originalName + "_resize.jpg", photo.album, photo.userId);
                                resolve(newPhoto.id);
                                return [3 /*break*/, 3];
                            case 2:
                                reject("not found");
                                _a.label = 3;
                            case 3: return [3 /*break*/, 5];
                            case 4:
                                err_3 = _a.sent();
                                reject(err_3);
                                return [3 /*break*/, 5];
                            case 5: return [2 /*return*/];
                        }
                    });
                }); })];
        });
    });
}
//toDo funkcja uploadPhoto i tak zrobi z tego jpg, napraw potem
function reformat(photoId) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                    var photo, newPhoto, err_4;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 4, , 5]);
                                photo = _fileController__WEBPACK_IMPORTED_MODULE_1__["default"].findPhotoById(photoId);
                                if (!(photo !== undefined)) return [3 /*break*/, 2];
                                return [4 /*yield*/, sharp__WEBPACK_IMPORTED_MODULE_0___default()(photo.url).toFile("temp/".concat(photo.originalName, ".png"))];
                            case 1:
                                _a.sent();
                                newPhoto = _fileController__WEBPACK_IMPORTED_MODULE_1__["default"].uploadPhoto(photo.originalName + ".png", photo.album, photo.userId);
                                resolve(newPhoto.id);
                                return [3 /*break*/, 3];
                            case 2:
                                reject("not found");
                                _a.label = 3;
                            case 3: return [3 /*break*/, 5];
                            case 4:
                                err_4 = _a.sent();
                                reject(err_4);
                                return [3 /*break*/, 5];
                            case 5: return [2 /*return*/];
                        }
                    });
                }); })];
        });
    });
}
function crop(photoId, region) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                    var photo, newPhoto, err_5;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 4, , 5]);
                                photo = _fileController__WEBPACK_IMPORTED_MODULE_1__["default"].findPhotoById(photoId);
                                if (!(photo !== undefined)) return [3 /*break*/, 2];
                                return [4 /*yield*/, sharp__WEBPACK_IMPORTED_MODULE_0___default()(photo.url)
                                        .extract(region)
                                        .toFile("temp/".concat(photo.originalName, "_crop.jpg"))];
                            case 1:
                                _a.sent();
                                newPhoto = _fileController__WEBPACK_IMPORTED_MODULE_1__["default"].uploadPhoto(photo.originalName + "_crop.jpg", photo.album, photo.userId);
                                resolve(newPhoto.id);
                                return [3 /*break*/, 3];
                            case 2:
                                reject("not found");
                                _a.label = 3;
                            case 3: return [3 /*break*/, 5];
                            case 4:
                                err_5 = _a.sent();
                                reject(err_5);
                                return [3 /*break*/, 5];
                            case 5: return [2 /*return*/];
                        }
                    });
                }); })];
        });
    });
}
function grayScale(photoId) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                    var photo, newPhoto, err_6;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 4, , 5]);
                                photo = _fileController__WEBPACK_IMPORTED_MODULE_1__["default"].findPhotoById(photoId);
                                if (!(photo !== undefined)) return [3 /*break*/, 2];
                                return [4 /*yield*/, sharp__WEBPACK_IMPORTED_MODULE_0___default()(photo.url)
                                        .grayscale()
                                        .toFile("temp/".concat(photo.originalName, "_grayScale.jpg"))];
                            case 1:
                                _a.sent();
                                newPhoto = _fileController__WEBPACK_IMPORTED_MODULE_1__["default"].uploadPhoto(photo.originalName + "_grayScale.jpg", photo.album, photo.userId);
                                resolve(newPhoto.id);
                                return [3 /*break*/, 3];
                            case 2:
                                reject("not found");
                                _a.label = 3;
                            case 3: return [3 /*break*/, 5];
                            case 4:
                                err_6 = _a.sent();
                                reject(err_6);
                                return [3 /*break*/, 5];
                            case 5: return [2 /*return*/];
                        }
                    });
                }); })];
        });
    });
}
function flip(photoId) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                    var photo, newPhoto, err_7;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 4, , 5]);
                                photo = _fileController__WEBPACK_IMPORTED_MODULE_1__["default"].findPhotoById(photoId);
                                if (!(photo !== undefined)) return [3 /*break*/, 2];
                                return [4 /*yield*/, sharp__WEBPACK_IMPORTED_MODULE_0___default()(photo.url)
                                        .flip()
                                        .toFile("temp/".concat(photo.originalName, "_flip.jpg"))];
                            case 1:
                                _a.sent();
                                newPhoto = _fileController__WEBPACK_IMPORTED_MODULE_1__["default"].uploadPhoto(photo.originalName + "_flip.jpg", photo.album, photo.userId);
                                resolve(newPhoto.id);
                                return [3 /*break*/, 3];
                            case 2:
                                reject("not found");
                                _a.label = 3;
                            case 3: return [3 /*break*/, 5];
                            case 4:
                                err_7 = _a.sent();
                                reject(err_7);
                                return [3 /*break*/, 5];
                            case 5: return [2 /*return*/];
                        }
                    });
                }); })];
        });
    });
}
function flop(photoId) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                    var photo, newPhoto, err_8;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 4, , 5]);
                                photo = _fileController__WEBPACK_IMPORTED_MODULE_1__["default"].findPhotoById(photoId);
                                if (!(photo !== undefined)) return [3 /*break*/, 2];
                                return [4 /*yield*/, sharp__WEBPACK_IMPORTED_MODULE_0___default()(photo.url)
                                        .flop()
                                        .toFile("temp/".concat(photo.originalName, "_flop.jpg"))];
                            case 1:
                                _a.sent();
                                newPhoto = _fileController__WEBPACK_IMPORTED_MODULE_1__["default"].uploadPhoto(photo.originalName + "_flop.jpg", photo.album, photo.userId);
                                resolve(newPhoto.id);
                                return [3 /*break*/, 3];
                            case 2:
                                reject("not found");
                                _a.label = 3;
                            case 3: return [3 /*break*/, 5];
                            case 4:
                                err_8 = _a.sent();
                                reject(err_8);
                                return [3 /*break*/, 5];
                            case 5: return [2 /*return*/];
                        }
                    });
                }); })];
        });
    });
}
function negate(photoId) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                    var photo, newPhoto, err_9;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 4, , 5]);
                                photo = _fileController__WEBPACK_IMPORTED_MODULE_1__["default"].findPhotoById(photoId);
                                if (!(photo !== undefined)) return [3 /*break*/, 2];
                                return [4 /*yield*/, sharp__WEBPACK_IMPORTED_MODULE_0___default()(photo.url)
                                        .grayscale()
                                        .toFile("temp/".concat(photo.originalName, "_negate.jpg"))];
                            case 1:
                                _a.sent();
                                newPhoto = _fileController__WEBPACK_IMPORTED_MODULE_1__["default"].uploadPhoto(photo.originalName + "_negate.jpg", photo.album, photo.userId);
                                resolve(newPhoto.id);
                                return [3 /*break*/, 3];
                            case 2:
                                reject("not found");
                                _a.label = 3;
                            case 3: return [3 /*break*/, 5];
                            case 4:
                                err_9 = _a.sent();
                                reject(err_9);
                                return [3 /*break*/, 5];
                            case 5: return [2 /*return*/];
                        }
                    });
                }); })];
        });
    });
}
function tint(photoId, color) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                    var photo, newPhoto, err_10;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 4, , 5]);
                                photo = _fileController__WEBPACK_IMPORTED_MODULE_1__["default"].findPhotoById(photoId);
                                if (!(photo !== undefined)) return [3 /*break*/, 2];
                                return [4 /*yield*/, sharp__WEBPACK_IMPORTED_MODULE_0___default()(photo.url)
                                        .tint(color)
                                        .toFile("temp/".concat(photo.originalName, "_tint.jpg"))];
                            case 1:
                                _a.sent();
                                newPhoto = _fileController__WEBPACK_IMPORTED_MODULE_1__["default"].uploadPhoto(photo.originalName + "_tint.jpg", photo.album, photo.userId);
                                resolve(newPhoto.id);
                                return [3 /*break*/, 3];
                            case 2:
                                reject("not found");
                                _a.label = 3;
                            case 3: return [3 /*break*/, 5];
                            case 4:
                                err_10 = _a.sent();
                                reject(err_10);
                                return [3 /*break*/, 5];
                            case 5: return [2 /*return*/];
                        }
                    });
                }); })];
        });
    });
}


/***/ }),

/***/ "./src/app/controller/tagsController.ts":
/*!**********************************************!*\
  !*** ./src/app/controller/tagsController.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTag": () => (/* binding */ addTag),
/* harmony export */   "bindTag": () => (/* binding */ bindTag)
/* harmony export */ });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model */ "./src/app/model.ts");

function addTag(name, popularity) {
    if (_model__WEBPACK_IMPORTED_MODULE_0__.tagsList.findIndex(function (tag) { return tag.name == name; }) == -1) {
        _model__WEBPACK_IMPORTED_MODULE_0__.tagsList.push({
            name: name,
            popularity: popularity !== null && popularity !== void 0 ? popularity : 0,
            id: _model__WEBPACK_IMPORTED_MODULE_0__.nextTagId.id
        });
        return true;
    }
    return false;
}
function bindTag(photoId, tagId) {
    var success = true;
    var photo = _model__WEBPACK_IMPORTED_MODULE_0__.photoList.find(function (photo) { return photo.id == photoId; });
    tagId.forEach(function (id) {
        var tag = _model__WEBPACK_IMPORTED_MODULE_0__.tagsList.find(function (tag) { return tag.id == id; });
        if (tag !== undefined && !photo.tagList.includes(tag.name))
            photo.tagList.push(tag.name);
        else
            success = false;
    });
    return success;
}


/***/ }),

/***/ "./src/app/controller/userController.ts":
/*!**********************************************!*\
  !*** ./src/app/controller/userController.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model */ "./src/app/model.ts");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ "bcryptjs");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);
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



(__webpack_require__(/*! dotenv */ "dotenv").config)();
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.reqisterUser = function (name, lastName, email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var encPassword, newUser, token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().hash(password, 10)];
                    case 1:
                        encPassword = _a.sent();
                        newUser = {
                            name: name,
                            lastName: lastName,
                            email: email,
                            password: encPassword,
                            confirmed: false,
                            id: _model__WEBPACK_IMPORTED_MODULE_0__.nextUserId.id,
                            photosId: [],
                            profilePic: null,
                        };
                        _model__WEBPACK_IMPORTED_MODULE_0__.userList.push(newUser);
                        return [4 /*yield*/, this.createToken(newUser.email, "5m")];
                    case 2:
                        token = _a.sent();
                        return [2 /*return*/, token];
                }
            });
        });
    };
    UserController.prototype.confirmUser = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var turnOut_1, toConfirm, _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _b.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, this.checkToken(token)];
                                case 1:
                                    turnOut_1 = (_b.sent());
                                    console.log(turnOut_1);
                                    toConfirm = _model__WEBPACK_IMPORTED_MODULE_0__.userList.find(function (el) { return el.email == turnOut_1.email; });
                                    toConfirm.confirmed = true;
                                    console.log(toConfirm);
                                    resolve(true);
                                    return [3 /*break*/, 3];
                                case 2:
                                    _a = _b.sent();
                                    resolve(false);
                                    return [3 /*break*/, 3];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    UserController.prototype.createToken = function (email, time) {
        return __awaiter(this, void 0, void 0, function () {
            var token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__.sign({ email: email }, process.env.SECRET_KEY, // powinno być w .env
                        {
                            expiresIn: time, // "1m", "1d", "24h"
                        })];
                    case 1:
                        token = _a.sent();
                        console.log({ token: token });
                        return [2 /*return*/, token];
                }
            });
        });
    };
    UserController.prototype.checkToken = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var decode;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__.verify(token, process.env.SECRET_KEY)];
                    case 1:
                        decode = _a.sent();
                        return [2 /*return*/, decode];
                }
            });
        });
    };
    UserController.prototype.login = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var toCheck, passCheck, userId, token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        toCheck = _model__WEBPACK_IMPORTED_MODULE_0__.userList.find(function (el) { return el.email == email; });
                        return [4 /*yield*/, bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().compare(password, toCheck.password)];
                    case 1:
                        passCheck = _a.sent();
                        console.log(passCheck, toCheck.confirmed);
                        if (!(passCheck && toCheck.confirmed)) return [3 /*break*/, 3];
                        userId = toCheck.id;
                        return [4 /*yield*/, this.createToken(email, "1h")];
                    case 2:
                        token = _a.sent();
                        _model__WEBPACK_IMPORTED_MODULE_0__.tokenBinding.push({ userId: userId, token: token });
                        return [2 /*return*/, token];
                    case 3: return [2 /*return*/, false];
                }
            });
        });
    };
    UserController.prototype.checkLoginToken = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var decode;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__.verify(token, process.env.SECRET_KEY)];
                    case 1:
                        decode = _a.sent();
                        return [2 /*return*/, decode];
                }
            });
        });
    };
    UserController.prototype.verifyLogin = function (req) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var tokenInsights_1, now, user;
                        return __generator(this, function (_a) {
                            console.log(req.headers);
                            if (req.headers.authorization) {
                                try {
                                    tokenInsights_1 = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__.decode(req.headers.authorization);
                                    now = Math.floor(Date.now() / 1000);
                                    user = _model__WEBPACK_IMPORTED_MODULE_0__.userList.find(function (us) { return us.email == tokenInsights_1.email; });
                                    if (now < tokenInsights_1.exp && user != undefined) {
                                        resolve(tokenInsights_1);
                                    }
                                    else {
                                        reject("token expired");
                                    }
                                }
                                catch (_b) {
                                    reject("incorrect token");
                                }
                            }
                            reject("no authorization token");
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    return UserController;
}());
var userController = new UserController();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userController);


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

/***/ "./src/app/model.ts":
/*!**************************!*\
  !*** ./src/app/model.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nextPhotoId": () => (/* binding */ nextPhotoId),
/* harmony export */   "nextPostId": () => (/* binding */ nextPostId),
/* harmony export */   "nextTagId": () => (/* binding */ nextTagId),
/* harmony export */   "nextUserId": () => (/* binding */ nextUserId),
/* harmony export */   "photoList": () => (/* binding */ photoList),
/* harmony export */   "postList": () => (/* binding */ postList),
/* harmony export */   "tagsList": () => (/* binding */ tagsList),
/* harmony export */   "tokenBinding": () => (/* binding */ tokenBinding),
/* harmony export */   "userList": () => (/* binding */ userList)
/* harmony export */ });
var nextUserId = {
    _id: 6,
    get id() {
        this._id += 1;
        return this._id;
    },
};
var userList = [];
var tokenBinding = [];
var tagsList = [
    {
        id: 0,
        name: "#love",
        popularity: 0,
    },
    {
        id: 1,
        name: "#instagood",
        popularity: 0,
    },
    {
        id: 2,
        name: "#fashion",
        popularity: 0,
    },
    {
        id: 3,
        name: "#photooftheday",
        popularity: 0,
    },
    {
        id: 4,
        name: "#beautiful",
        popularity: 0,
    },
    {
        id: 5,
        name: "#art",
        popularity: 0,
    },
];
var nextTagId = {
    _id: 6,
    get id() {
        this._id += 1;
        return this._id;
    },
};
var photoList = [];
var nextPhotoId = {
    _id: 0,
    get id() {
        this._id += 1;
        return this._id;
    },
};
var nextPostId = {
    _id: 0,
    get id() {
        this._id += 1;
        return this._id;
    },
};
var postList = [];


/***/ }),

/***/ "./src/app/router/filtersRouter.ts":
/*!*****************************************!*\
  !*** ./src/app/router/filtersRouter.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ filtersRouter)
/* harmony export */ });
/* harmony import */ var _controller_filtersController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller/filtersController */ "./src/app/controller/filtersController.ts");
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

function filtersRouter(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var temp, id, meta, temp, newID, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(req.method === "GET")) return [3 /*break*/, 22];
                    if (!req.url.match(/metadata\/[0-9]*$/)) return [3 /*break*/, 2];
                    temp = req.url.split("/");
                    id = temp[temp.length - 1];
                    return [4 /*yield*/, (0,_controller_filtersController__WEBPACK_IMPORTED_MODULE_0__.getMetadata)(id)];
                case 1:
                    meta = _b.sent();
                    res.statusCode = 200;
                    res.statusMessage = "ok";
                    res.write(JSON.stringify(meta));
                    res.end();
                    return [3 /*break*/, 21];
                case 2:
                    if (!req.url.match(/getfile\/[0-9]\//)) return [3 /*break*/, 21];
                    temp = req.url.split("/");
                    newID = void 0;
                    _a = temp[temp.length - 1];
                    switch (_a) {
                        case "rotate": return [3 /*break*/, 3];
                        case "resize": return [3 /*break*/, 5];
                        case "reformat": return [3 /*break*/, 7];
                        case "crop": return [3 /*break*/, 9];
                        case "grayScale": return [3 /*break*/, 11];
                        case "flip": return [3 /*break*/, 13];
                        case "flop": return [3 /*break*/, 15];
                        case "negate": return [3 /*break*/, 17];
                        case "tint": return [3 /*break*/, 19];
                    }
                    return [3 /*break*/, 21];
                case 3: return [4 /*yield*/, (0,_controller_filtersController__WEBPACK_IMPORTED_MODULE_0__.rotate)(temp[temp.length - 2], 90)];
                case 4:
                    newID = _b.sent();
                    res.statusCode = 200;
                    res.statusMessage = "ok";
                    res.end(newID + "");
                    return [3 /*break*/, 21];
                case 5: return [4 /*yield*/, (0,_controller_filtersController__WEBPACK_IMPORTED_MODULE_0__.resize)(temp[temp.length - 2], 200, 200)];
                case 6:
                    newID = _b.sent();
                    res.statusCode = 200;
                    res.statusMessage = "ok";
                    res.end(newID + "");
                    return [3 /*break*/, 21];
                case 7: return [4 /*yield*/, (0,_controller_filtersController__WEBPACK_IMPORTED_MODULE_0__.reformat)(temp[temp.length - 2])];
                case 8:
                    newID = _b.sent();
                    res.statusCode = 200;
                    res.statusMessage = "ok";
                    res.end(newID + "");
                    return [3 /*break*/, 21];
                case 9: return [4 /*yield*/, (0,_controller_filtersController__WEBPACK_IMPORTED_MODULE_0__.crop)(temp[temp.length - 2], {
                        width: 100,
                        height: 100,
                        left: 0,
                        top: 0,
                    })];
                case 10:
                    newID = _b.sent();
                    res.statusCode = 200;
                    res.statusMessage = "ok";
                    res.end(newID + "");
                    return [3 /*break*/, 21];
                case 11: return [4 /*yield*/, (0,_controller_filtersController__WEBPACK_IMPORTED_MODULE_0__.grayScale)(temp[temp.length - 2])];
                case 12:
                    newID = _b.sent();
                    res.statusCode = 200;
                    res.statusMessage = "ok";
                    res.end(newID + "");
                    return [3 /*break*/, 21];
                case 13: return [4 /*yield*/, (0,_controller_filtersController__WEBPACK_IMPORTED_MODULE_0__.flip)(temp[temp.length - 2])];
                case 14:
                    newID = _b.sent();
                    res.statusCode = 200;
                    res.statusMessage = "ok";
                    res.end(newID + "");
                    return [3 /*break*/, 21];
                case 15: return [4 /*yield*/, (0,_controller_filtersController__WEBPACK_IMPORTED_MODULE_0__.flop)(temp[temp.length - 2])];
                case 16:
                    newID = _b.sent();
                    res.statusCode = 200;
                    res.statusMessage = "ok";
                    res.end(newID + "");
                    return [3 /*break*/, 21];
                case 17: return [4 /*yield*/, (0,_controller_filtersController__WEBPACK_IMPORTED_MODULE_0__.negate)(temp[temp.length - 2])];
                case 18:
                    newID = _b.sent();
                    res.statusCode = 200;
                    res.statusMessage = "ok";
                    res.end(newID + "");
                    return [3 /*break*/, 21];
                case 19: return [4 /*yield*/, (0,_controller_filtersController__WEBPACK_IMPORTED_MODULE_0__.tint)(temp[temp.length - 2], "red")];
                case 20:
                    newID = _b.sent();
                    res.statusCode = 200;
                    res.statusMessage = "ok";
                    res.end(newID + "");
                    return [3 /*break*/, 21];
                case 21: return [3 /*break*/, 23];
                case 22:
                    if (req.method === "PATCH") {
                    }
                    _b.label = 23;
                case 23: return [2 /*return*/];
            }
        });
    });
}


/***/ }),

/***/ "./src/app/router/imageRouter.ts":
/*!***************************************!*\
  !*** ./src/app/router/imageRouter.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ imageRouter)
/* harmony export */ });
/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formidable */ "formidable");
/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controller_fileController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller/fileController */ "./src/app/controller/fileController.ts");
/* harmony import */ var _getRequestData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getRequestData */ "./src/app/getRequestData.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model */ "./src/app/model.ts");
/* harmony import */ var _controller_userController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controller/userController */ "./src/app/controller/userController.ts");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_5__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
        var _a, _b, path, params, xd, id_1, photo, url, readStream, token_1, user, form, body, data, token, err_1, url, id, token, post, err_2, body;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = req.method;
                    switch (_a) {
                        case "GET": return [3 /*break*/, 1];
                        case "POST": return [3 /*break*/, 7];
                        case "DELETE": return [3 /*break*/, 13];
                        case "PATCH": return [3 /*break*/, 20];
                    }
                    return [3 /*break*/, 23];
                case 1:
                    _b = req.url.split(/\?/), path = _b[0], params = _b[1];
                    if (!(path == "/api/photos")) return [3 /*break*/, 2];
                    res.statusCode = 200;
                    res.setHeader("content-type", "application/json");
                    res.end(JSON.stringify(_model__WEBPACK_IMPORTED_MODULE_3__.photoList));
                    //pobierz wszystkie
                    res.end();
                    return [3 /*break*/, 6];
                case 2:
                    if (!req.url.match(/api\/photos\/[0-9]+/)) return [3 /*break*/, 3];
                    xd = req.url.split(/\//g);
                    id_1 = parseInt(xd[xd.length - 1]);
                    photo = _model__WEBPACK_IMPORTED_MODULE_3__.photoList.find(function (img) { return img.id == id_1; });
                    url = __dirname + photo.url;
                    url = url.replace(/\/\//g, "/");
                    res.setHeader("content-type", "image/jpg");
                    res.statusCode = 200;
                    readStream = fs__WEBPACK_IMPORTED_MODULE_5___default().createReadStream(url);
                    readStream.pipe(res);
                    //pobierz jedno zdjęcie
                    res.end();
                    return [3 /*break*/, 6];
                case 3:
                    if (!req.url.match(/api\/photos\/post/)) return [3 /*break*/, 4];
                    console.log("xd");
                    res.statusCode = 200;
                    res.end(JSON.stringify(_model__WEBPACK_IMPORTED_MODULE_3__.postList));
                    return [3 /*break*/, 6];
                case 4:
                    if (!req.url.match(/api\/photos\/profile/)) return [3 /*break*/, 6];
                    return [4 /*yield*/, _controller_userController__WEBPACK_IMPORTED_MODULE_4__["default"].verifyLogin(req)];
                case 5:
                    token_1 = _c.sent();
                    user = _model__WEBPACK_IMPORTED_MODULE_3__.userList.find(function (us) { return us.email == token_1.email; });
                    res.statusCode = 200;
                    res.end(JSON.stringify({
                        name: user.name,
                        lastName: user.lastName,
                        photoId: user.profilePic,
                        email: user.email,
                    }));
                    _c.label = 6;
                case 6: return [3 /*break*/, 23];
                case 7:
                    if (req.url == "/api/photos") {
                        form = formidable__WEBPACK_IMPORTED_MODULE_0__({ multiples: true, uploadDir: "./temp" });
                        console.log(form);
                        form.parse(req, function (err, fields, files) {
                            if (err) {
                                console.log(res);
                                res.statusCode = err.httpCode || 404;
                                res.statusMessage = String(err);
                                res.end();
                                return;
                            }
                            _controller_userController__WEBPACK_IMPORTED_MODULE_4__["default"].verifyLogin(req)
                                .then(function (token) {
                                var user = _model__WEBPACK_IMPORTED_MODULE_3__.userList.find(function (val) { return val.email == token.email; });
                                var photo = _controller_fileController__WEBPACK_IMPORTED_MODULE_1__["default"].uploadPhoto(files.file.newFilename, fields.album, user.id);
                                res.statusCode = 200;
                                res.setHeader("content-type", "application/json");
                                res.end(JSON.stringify(__assign({ ok: "ok" }, photo)));
                            })
                                .catch(function (err) {
                                res.statusCode = 400;
                                res.end(err);
                            });
                        });
                    }
                    if (!req.url.match(/photos\/post/)) return [3 /*break*/, 12];
                    return [4 /*yield*/, (0,_getRequestData__WEBPACK_IMPORTED_MODULE_2__.getPostData)(req)];
                case 8:
                    body = _c.sent();
                    data = JSON.parse(body);
                    _c.label = 9;
                case 9:
                    _c.trys.push([9, 11, , 12]);
                    return [4 /*yield*/, _controller_userController__WEBPACK_IMPORTED_MODULE_4__["default"].verifyLogin(req)];
                case 10:
                    token = _c.sent();
                    _controller_fileController__WEBPACK_IMPORTED_MODULE_1__["default"].createNewPost(data.title, data.content, data.photoId, token.email);
                    res.statusCode = 201;
                    res.statusMessage = "ok";
                    res.end();
                    return [3 /*break*/, 12];
                case 11:
                    err_1 = _c.sent();
                    res.statusCode = 401;
                    res.statusMessage = "invalid token";
                    res.end(err_1);
                    return [3 /*break*/, 12];
                case 12: return [3 /*break*/, 23];
                case 13:
                    if (!req.url.match(/api\/photos\/post\/[0-9]*/)) return [3 /*break*/, 18];
                    _c.label = 14;
                case 14:
                    _c.trys.push([14, 16, , 17]);
                    url = req.url.split(/\//g);
                    id = parseInt(url[url.length - 1]);
                    return [4 /*yield*/, _controller_userController__WEBPACK_IMPORTED_MODULE_4__["default"].verifyLogin(req)];
                case 15:
                    token = _c.sent();
                    post = _controller_fileController__WEBPACK_IMPORTED_MODULE_1__["default"].deletePost(id, token.email);
                    if (post) {
                        res.statusCode = 200;
                        res.setHeader("content-type", "application/json");
                        res.end(post);
                    }
                    else {
                        res.statusCode = 403;
                        res.statusMessage = "forbidden";
                        res.end("You can only delete your own posts");
                    }
                    return [3 /*break*/, 17];
                case 16:
                    err_2 = _c.sent();
                    res.statusCode = 401;
                    res.statusMessage = "err";
                    res.end(err_2);
                    return [3 /*break*/, 17];
                case 17: return [3 /*break*/, 19];
                case 18:
                    if (req.url.match(/photos\/[0-9]*/)) {
                    }
                    _c.label = 19;
                case 19: return [3 /*break*/, 23];
                case 20:
                    if (!req.url.match(/api\/photos\/[0-9]*/)) return [3 /*break*/, 22];
                    res.statusCode = 200;
                    res.setHeader("content-type", "application/json");
                    return [4 /*yield*/, (0,_getRequestData__WEBPACK_IMPORTED_MODULE_2__.getPostData)(req)];
                case 21:
                    body = _c.sent();
                    //edytuj jedno zdjecie
                    res.end(JSON.stringify(body));
                    _c.label = 22;
                case 22: return [3 /*break*/, 23];
                case 23: return [2 /*return*/];
            }
        });
    });
}


/***/ }),

/***/ "./src/app/router/tagsRouter.ts":
/*!**************************************!*\
  !*** ./src/app/router/tagsRouter.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ tagRouter)
/* harmony export */ });
/* harmony import */ var _getRequestData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getRequestData */ "./src/app/getRequestData.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model */ "./src/app/model.ts");
/* harmony import */ var _controller_tagsController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controller/tagsController */ "./src/app/controller/tagsController.ts");
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



function tagRouter(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, path, args, stringList, id_1, photo, tag, body, obj_1, tagId, body, obj, tagId;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = req.method;
                    switch (_a) {
                        case "GET": return [3 /*break*/, 1];
                        case "POST": return [3 /*break*/, 2];
                        case "PATCH": return [3 /*break*/, 3];
                    }
                    return [3 /*break*/, 7];
                case 1:
                    _b = req.url.split("?"), path = _b[0], args = _b[1];
                    console.log(path);
                    if (path.match(/raw/)) {
                        res.statusCode = 200;
                        res.statusMessage = "ok";
                        res.setHeader("content-type", "application/json");
                        stringList = _model__WEBPACK_IMPORTED_MODULE_1__.tagsList.map(function (tag) {
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
                    else if (path.match(/tags\/[0-9]*/)) {
                        id_1 = path.split(/\/tags\//)[1];
                        photo = _model__WEBPACK_IMPORTED_MODULE_1__.photoList.find(function (photo) { return photo.id == id_1; });
                        if (photo === undefined) {
                            res.statusMessage = "I'm not ok";
                            res.statusCode = 403;
                            res.end();
                            return [2 /*return*/];
                        }
                        tag = photo.tagList.map(function (name) {
                            var tag = _model__WEBPACK_IMPORTED_MODULE_1__.tagsList.find(function (tag) { return tag.name == name; });
                            if (tag !== undefined)
                                return tag;
                        });
                        res.statusCode = 200;
                        res.statusMessage = "ok";
                        res.setHeader("content-type", "application/json");
                        res.write(JSON.stringify(tag));
                        res.end();
                    }
                    return [3 /*break*/, 7];
                case 2:
                    if (req.url.match(/^\/api\/tags$/)) {
                        (0,_getRequestData__WEBPACK_IMPORTED_MODULE_0__.getPostData)(req).then(function (body) {
                            console.log(body);
                            var obj = JSON.parse(body);
                            obj.name = "#" + obj.name.replace(/\#/g, "");
                            console.log(obj);
                            var ok = (0,_controller_tagsController__WEBPACK_IMPORTED_MODULE_2__.addTag)(obj.name, obj.popularity);
                            if (ok) {
                                res.statusCode = 200;
                                res.statusMessage = "ok";
                                res.end();
                            }
                            else {
                                res.statusCode = 400;
                                res.statusMessage = "this tag probably already exists";
                                res.end();
                            }
                        });
                    }
                    return [3 /*break*/, 7];
                case 3:
                    if (!req.url.match(/api\/photos\/tags$/)) return [3 /*break*/, 5];
                    return [4 /*yield*/, (0,_getRequestData__WEBPACK_IMPORTED_MODULE_0__.getPostData)(req)];
                case 4:
                    body = _c.sent();
                    obj_1 = JSON.parse(body);
                    obj_1.tagName = "#" + obj_1.tagName.replace(/\#/g, "");
                    tagId = _model__WEBPACK_IMPORTED_MODULE_1__.tagsList.find(function (tag) { return tag.name == obj_1.tagName; }).id;
                    if ((0,_controller_tagsController__WEBPACK_IMPORTED_MODULE_2__.bindTag)(obj_1.photoId, [tagId])) {
                        res.statusMessage = "ok";
                        res.statusCode = 200;
                    }
                    else {
                        res.statusMessage = "I'm not ok";
                        res.statusCode = 403;
                    }
                    res.end();
                    return [3 /*break*/, 7];
                case 5:
                    if (!req.url.match(/api\/photos\/tags\/mass$/)) return [3 /*break*/, 7];
                    return [4 /*yield*/, (0,_getRequestData__WEBPACK_IMPORTED_MODULE_0__.getPostData)(req)];
                case 6:
                    body = _c.sent();
                    obj = JSON.parse(body);
                    tagId = obj.tagName.map(function (name) {
                        var tag = _model__WEBPACK_IMPORTED_MODULE_1__.tagsList.find(function (el) { return name == el.name; });
                        if (tag !== undefined)
                            return tag.id;
                    });
                    if ((0,_controller_tagsController__WEBPACK_IMPORTED_MODULE_2__.bindTag)(obj.photoId, tagId)) {
                        res.statusMessage = "ok";
                        res.statusCode = 200;
                    }
                    else {
                        res.statusMessage = "I'm not ok";
                        res.statusCode = 403;
                    }
                    res.end();
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}


/***/ }),

/***/ "./src/app/router/userRouter.ts":
/*!**************************************!*\
  !*** ./src/app/router/userRouter.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ userRouter)
/* harmony export */ });
/* harmony import */ var _controller_userController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller/userController */ "./src/app/controller/userController.ts");
/* harmony import */ var _getRequestData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getRequestData */ "./src/app/getRequestData.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model */ "./src/app/model.ts");
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



function userRouter(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, body, user_1, test, token, body, data, result, phases, token, status_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.method;
                    switch (_a) {
                        case "POST": return [3 /*break*/, 1];
                        case "GET": return [3 /*break*/, 9];
                    }
                    return [3 /*break*/, 11];
                case 1:
                    if (!req.url.match(/\/register/)) return [3 /*break*/, 5];
                    return [4 /*yield*/, (0,_getRequestData__WEBPACK_IMPORTED_MODULE_1__.getPostData)(req)];
                case 2:
                    body = _b.sent();
                    user_1 = JSON.parse(body);
                    test = _model__WEBPACK_IMPORTED_MODULE_2__.userList.find(function (val) { return val.email == user_1.email; });
                    if (!(user_1.name != undefined &&
                        user_1.lastName != undefined &&
                        user_1.email != undefined &&
                        user_1.password != undefined &&
                        test == undefined)) return [3 /*break*/, 4];
                    return [4 /*yield*/, _controller_userController__WEBPACK_IMPORTED_MODULE_0__["default"].reqisterUser(user_1.name, user_1.lastName, user_1.email, user_1.password)];
                case 3:
                    token = _b.sent();
                    res.statusCode = 201;
                    res.statusMessage = "ok";
                    res.end(token);
                    _b.label = 4;
                case 4:
                    res.statusCode = 400;
                    res.statusMessage = "im not ok";
                    res.end();
                    _b.label = 5;
                case 5:
                    if (!req.url.match(/\/login/)) return [3 /*break*/, 8];
                    return [4 /*yield*/, (0,_getRequestData__WEBPACK_IMPORTED_MODULE_1__.getPostData)(req)];
                case 6:
                    body = _b.sent();
                    data = JSON.parse(body);
                    return [4 /*yield*/, _controller_userController__WEBPACK_IMPORTED_MODULE_0__["default"].login(data.email, data.password)];
                case 7:
                    result = _b.sent();
                    if (result) {
                        res.statusCode = 200;
                        res.statusMessage = "pomyslnie zalogowano";
                        res.end(result);
                    }
                    else {
                        res.statusCode = 400;
                        res.statusMessage = "err";
                        res.end("upewnij się że hasło jest poprawne, a adres email potwierdzony");
                    }
                    _b.label = 8;
                case 8: return [3 /*break*/, 11];
                case 9:
                    if (!req.url.match(/\/confirm\/.+$/)) return [3 /*break*/, 11];
                    phases = req.url.split("/");
                    token = phases[phases.length - 1];
                    return [4 /*yield*/, _controller_userController__WEBPACK_IMPORTED_MODULE_0__["default"].confirmUser(token)];
                case 10:
                    status_1 = _b.sent();
                    if (status_1) {
                        res.statusCode = 200;
                        res.statusMessage = "successfully confirmed";
                        console.log("confirm");
                        res.end(JSON.stringify("successfully confirmed"));
                    }
                    else {
                        res.statusCode = 401;
                        res.statusMessage = "bad token";
                        res.end("err");
                    }
                    _b.label = 11;
                case 11: return [2 /*return*/];
            }
        });
    });
}


/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

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

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "sharp":
/*!************************!*\
  !*** external "sharp" ***!
  \************************/
/***/ ((module) => {

module.exports = require("sharp");

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
/* harmony import */ var _app_controller_userController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/controller/userController */ "./src/app/controller/userController.ts");
/* harmony import */ var _app_router_filtersRouter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/router/filtersRouter */ "./src/app/router/filtersRouter.ts");
/* harmony import */ var _app_router_imageRouter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/router/imageRouter */ "./src/app/router/imageRouter.ts");
/* harmony import */ var _app_router_tagsRouter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/router/tagsRouter */ "./src/app/router/tagsRouter.ts");
/* harmony import */ var _app_router_userRouter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/router/userRouter */ "./src/app/router/userRouter.ts");






(__webpack_require__(/*! dotenv */ "dotenv").config)();
var server = (0,http__WEBPACK_IMPORTED_MODULE_0__.createServer)(function (req, res) {
    _app_controller_userController__WEBPACK_IMPORTED_MODULE_1__["default"].verifyLogin(req).then(function (token) {
        if (req.url.match(/tags/))
            (0,_app_router_tagsRouter__WEBPACK_IMPORTED_MODULE_4__["default"])(req, res);
        else if (req.url.match(/\/api\/photos/))
            (0,_app_router_imageRouter__WEBPACK_IMPORTED_MODULE_3__["default"])(req, res);
        else if (req.url.match(/api\/filters/))
            (0,_app_router_filtersRouter__WEBPACK_IMPORTED_MODULE_2__["default"])(req, res);
        else {
            res.statusCode = 400;
            res.statusMessage = "bad request";
            res.end();
        }
    }, function (reason) {
        if ((reason = "no authorization token")) {
            console.log(req.url);
            if (req.url.match(/api\/user/))
                (0,_app_router_userRouter__WEBPACK_IMPORTED_MODULE_5__["default"])(req, res);
        }
        else if (reason == "token expired") {
            res.statusCode = 403;
            res.statusMessage = "token expired";
            res.end(JSON.stringify(""));
        }
        else {
            res.statusCode = 400;
            res.statusMessage = "bad request";
            res.end(reason);
        }
    });
});
server.listen(process.env.APP_PORT, function () {
    console.log("Start on " + process.env.APP_PORT);
});

})();

/******/ })()
;
//# sourceMappingURL=main.js.map
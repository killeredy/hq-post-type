/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config/BoxesEdit.js":
/*!*********************************!*\
  !*** ./src/config/BoxesEdit.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BoxesEdit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);



function BoxesEdit({
  box,
  setBox,
  remove
}) {
  const {
    pages
  } = data;
  const [marks, setMarks] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const [selPages, setSelPages] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    let mark = [];
    for (let i = 1; i <= 12; i++) {
      mark.push({
        value: i,
        label: i.toString()
      });
    }
    setMarks(mark);
    const selPages = pages.map(pg => {
      return {
        label: pg.post_title,
        value: pg.ID
      };
    });
    setSelPages(selPages);
  }, []);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      padding: "0 3rem"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: "Select page",
    value: box.postId,
    onChange: e => {
      setBox([e, 'postId']);
    },
    options: selPages
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: "Widtth",
    help: "Additional info about this.",
    step: 1,
    withInputField: false,
    marks: marks,
    value: box.width,
    onChange: e => setBox([e, 'width']),
    min: 1,
    max: 12
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: "Heigth",
    help: "Additional info about this.",
    step: 1,
    withInputField: false,
    marks: marks,
    value: box.height,
    onChange: e => setBox([e, 'height']),
    min: 1,
    max: 8
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: 'flex',
      justifyContent: "center"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "btn-remove",
    onClick: e => remove()
  }, "Remove Box")));
}

/***/ }),

/***/ "./src/config/Edits.js":
/*!*****************************!*\
  !*** ./src/config/Edits.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./object */ "./src/config/object.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _BoxesEdit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BoxesEdit */ "./src/config/BoxesEdit.js");
/* harmony import */ var _PageConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PageConfig */ "./src/config/PageConfig.js");
/* harmony import */ var _pageRender_PageList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pageRender/PageList */ "./src/pageRender/PageList.js");






// import { creatNewPage, Pages, Box } from "../pageRender/PageList";

function Edit() {
  const {
    pgs,
    config
  } = data;
  const [pagesList, setPagesList] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [configuer, setConfiguer] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(config);
  const [currentPageId, setCurrentPageId] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const [currentBoxId, setCurrentBoxId] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const handleSetBox = ([e, index], pgIndex, boxIndex) => {
    const newPageList = [...pagesList];
    newPageList[pgIndex].boxList[boxIndex][index] = e;
    setPagesList(newPageList);
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (pgs == undefined || pgs == "") {
      const newPage = (0,_pageRender_PageList__WEBPACK_IMPORTED_MODULE_6__.creatNewPage)(0);
      setPagesList([newPage]);
    } else {
      setPagesList(pgs);
    }
    if (config != undefined && config != "") {
      setConfiguer(config);
    } else {
      setConfiguer(new _object__WEBPACK_IMPORTED_MODULE_2__.configDb());
    }
    setCurrentBoxId(0);
  }, []);
  const handleAddPage = () => {
    const newPgsList = [...pagesList];
    const newId = pagesList.length;
    newPgsList.push((0,_pageRender_PageList__WEBPACK_IMPORTED_MODULE_6__.creatNewPage)(newId));
    setCurrentPageId(newId);
    setPagesList(newPgsList);
  };
  const handleRemovePage = id => {
    const newPgsList1 = pagesList.filter(pg => {
      return pg.id != currentPageId;
    });
    const newPgsList2 = newPgsList1.map((pg, index) => {
      const newPg = new _object__WEBPACK_IMPORTED_MODULE_2__.PagesOb(index);
      newPg.boxList = pg.boxList;
      return newPg;
    });
    let newCurrentPageId = currentPageId;
    if (newPgsList2.length == 0) {
      const newPage = (0,_pageRender_PageList__WEBPACK_IMPORTED_MODULE_6__.creatNewPage)(0);
      setPagesList([newPage]);
      setCurrentPageId(0);
      return;
    }
    if (1 <= newCurrentPageId) {
      newCurrentPageId -= 1;
    } else {
      newCurrentPageId = 1;
    }
    setCurrentPageId(newCurrentPageId);
    setPagesList(newPgsList2);
  };
  const removeBox = () => {
    const newPagList = [...pagesList];
    newPagList[currentPageId].boxList = pagesList[currentPageId].boxList.filter(box => {
      return box.id != currentBoxId;
    });
    setPagesList(newPagList);
  };
  const handleAddBlock = () => {
    const newPagList = [...pagesList];
    const id = newPagList[currentPageId].boxList.length;
    newPagList[currentPageId].boxList.push(new _object__WEBPACK_IMPORTED_MODULE_2__.boxOb(id));
    setPagesList(newPagList);
    setCurrentBoxId(id);
  };
  const handleSalve = () => {
    const request = {
      action: "hq_save_adm",
      pages: JSON.stringify(pagesList),
      config: JSON.stringify(configuer)
    };
    fetch(data.ajaxurl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams(request).toString()
    }).then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      let txt = "Save Success!";
      if (response.success) {
        txt = "Error to save!";
      }
      alert(txt);
      return;
    }).catch(error => {
      console.error("There was a problem with the fetch operation:", error);
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "form-hq-content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pagesList-container"
  }, pagesList.filter((pag, index) => {
    return pag.id == currentPageId;
  }).map(page => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_pageRender_PageList__WEBPACK_IMPORTED_MODULE_6__.Pages, {
      boxList: page.boxList,
      config: configuer,
      setBox: e => setCurrentBoxId(e),
      currentBoxId: currentBoxId,
      removePage: () => handleRemovePage()
    });
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Panel, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Panel, {
    header: "Config"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "btn-action success",
    onClick: handleSalve,
    style: {
      margin: "auto",
      display: "flex",
      padding: "0.2rem 6rem"
    }
  }, "Salve")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      height: "calc(100vh - 200px)",
      overflowY: "scroll"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PageConfig__WEBPACK_IMPORTED_MODULE_5__["default"], {
    pagesList: pagesList,
    currentPageId: currentPageId,
    setConfiguer: e => setConfiguer(e),
    setCurrentPageId: e => setCurrentPageId(e),
    configuer: configuer,
    handleSalve: e => handleSalve(e),
    handleAddPage: e => handleAddPage(e)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Panel, {
    header: "Page Content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, pagesList[currentPageId]?.boxList.map((bx, bxIndex) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, bxIndex == currentBoxId && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_BoxesEdit__WEBPACK_IMPORTED_MODULE_4__["default"], {
      box: bx,
      setBox: e => handleSetBox(e, currentPageId, currentBoxId),
      remove: () => removeBox()
    }));
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    className: "btn-success",
    onClick: () => handleAddBlock()
  }, "Add Box"))))))));
}

/***/ }),

/***/ "./src/config/PageConfig.js":
/*!**********************************!*\
  !*** ./src/config/PageConfig.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PageCongig)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


function PageCongig({
  pagesList,
  currentPageId,
  setCurrentPageId,
  configuer,
  setConfiguer,
  handleAddPage
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Pages"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.NavigableMenu, {
    cycle: true
  }, pagesList.map((btn, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      onClick: () => setCurrentPageId(index),
      className: `btn-add-pg ${index == currentPageId ? "active" : ""}`
    }, index + 1);
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: e => handleAddPage()
  }, "add")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Panel, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      padding: "0 50px"
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: "Size",
    value: configuer.page_size,
    onChange: e => setConfiguer({
      ...configuer,
      page_size: e
    }),
    options: [{
      label: "A4",
      value: "1/1.414"
    }, {
      label: "letter",
      value: "8.5/11"
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPicker, {
    value: configuer.bg_color,
    onChange: e => setConfiguer({
      ...configuer,
      bg_color: e
    })
  })))));
}

/***/ }),

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HqApp)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/config/style.scss");
/* harmony import */ var _Edits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Edits */ "./src/config/Edits.js");

// import { createRoot } from "@wordpress/wp-scripts";



function HqApp() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Edits__WEBPACK_IMPORTED_MODULE_3__["default"], null);
}
const doom = document.getElementById("hq-form-admin");
(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createRoot)(doom).render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(HqApp, null));

/***/ }),

/***/ "./src/config/object.js":
/*!******************************!*\
  !*** ./src/config/object.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PagesOb: () => (/* binding */ PagesOb),
/* harmony export */   boxOb: () => (/* binding */ boxOb),
/* harmony export */   configDb: () => (/* binding */ configDb)
/* harmony export */ });
class PagesOb {
  id = "";
  boxList = [];
  constructor(id) {
    this.id = id;
  }
}
class boxOb {
  width = 6;
  height = 4;
  postId = "";
  id = "";
  constructor(id) {
    this.id = id;
  }
}
class configDb {
  bg_color = "white";
  page_size = "1/1.414";
}

/***/ }),

/***/ "./src/pageRender/PageList.js":
/*!************************************!*\
  !*** ./src/pageRender/PageList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Box: () => (/* binding */ Box),
/* harmony export */   Pages: () => (/* binding */ Pages),
/* harmony export */   creatNewPage: () => (/* binding */ creatNewPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);



function Pages({
  boxList,
  setBox,
  currentBoxId,
  config,
  removePage,
  editor = true
}) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "page-content",
    style: {
      backgroundColor: config.bg_color,
      aspectRatio: config.page_size
    }
  }, boxList.map((box, bIndex) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Box, {
      box: box,
      onClick: e => setBox(bIndex),
      showBorder: currentBoxId == bIndex
    });
  })), editor && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    onClick: () => removePage(),
    className: "btn-remove"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    class: "dashicons dashicons-trash"
  })));
}
function Box({
  box,
  onClick,
  showBorder
}) {
  const {
    pages
  } = data;
  const [imgSrc, setImgSrc] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)();
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const img = pages.filter(pg => {
      return pg.ID == box.postId;
    })[0];
    if (img) {
      setImgSrc(img["thumbnail"]);
    } else {
      setImgSrc(null);
    }
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "box-content",
    style: {
      gridColumn: `span ${box.width}`,
      gridRow: `span ${box.height}`,
      color: "white",
      fontSize: "5rem",
      border: showBorder ? "3px solid green" : "2px solid black"
    },
    onClick: e => onClick()
  }, imgSrc ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "show-img",
    style: {
      backgroundImage: `url("${imgSrc}")`
    }
  }) : "+");
}
const creatNewPage = id => {
  const newPage = new PagesOb(id);
  for (let i = 0; i < 6; i++) {
    newPage.boxList.push(new boxOb(i));
  }
  return newPage;
};

/***/ }),

/***/ "./src/config/style.scss":
/*!*******************************!*\
  !*** ./src/config/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"config/index": 0,
/******/ 			"config/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunk"] = globalThis["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["config/style-index"], () => (__webpack_require__("./src/config/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map
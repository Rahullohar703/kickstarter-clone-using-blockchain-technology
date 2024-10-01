"use strict";
exports.id = 184;
exports.ids = [184];
exports.modules = {

/***/ 544:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(831);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(215);
;// CONCATENATED MODULE: ./components/Header.js




/* harmony default export */ const Header = (()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Menu, {
        style: {
            marginTop: "20px"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(routes.Link, {
                route: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "item",
                    children: "CrowdCoin"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Menu.Menu, {
                position: "right",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(routes.Link, {
                        route: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "item",
                            children: "Campaigns"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(routes.Link, {
                        route: "/campaigns/new",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "item",
                            children: "+"
                        })
                    })
                ]
            })
        ]
    });
});

;// CONCATENATED MODULE: ./components/Layout.js





/* harmony default export */ const Layout = ((props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "stylesheet",
                href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            props.children
        ]
    });
});


/***/ }),

/***/ 508:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(325);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([web3__WEBPACK_IMPORTED_MODULE_0__]);
web3__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// ethereum/web3.js

let web3;
if (false) {} else {
    const provider = new web3__WEBPACK_IMPORTED_MODULE_0__["default"].providers.HttpProvider("https://sepolia.infura.io/v3/09f799bc191341f7b809f509e453f6f6");
    web3 = new web3__WEBPACK_IMPORTED_MODULE_0__["default"](provider);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (web3);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 215:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const routes = __webpack_require__(662)();
routes.add("/campaigns/new", "/campaigns/new").add("/campaigns/:address", "/campaigns/show").add("/campaigns/:address/requests", "/campaigns/requests/index").add("/campaigns/:address/requests/new", "/campaigns/requests/new");
module.exports = routes;


/***/ })

};
;
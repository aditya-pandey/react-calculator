(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],[,,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_DELL_Desktop_Aditya_freecodecamp_projects_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),C_Users_DELL_Desktop_Aditya_freecodecamp_projects_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),C_Users_DELL_Desktop_Aditya_freecodecamp_projects_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),C_Users_DELL_Desktop_Aditya_freecodecamp_projects_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5),C_Users_DELL_Desktop_Aditya_freecodecamp_projects_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_Button__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(9),_UpperDisplay__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(10),_BottomDisplay__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(11),Calculator=function(_React$Component){Object(C_Users_DELL_Desktop_Aditya_freecodecamp_projects_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(Calculator,_React$Component);var _super=Object(C_Users_DELL_Desktop_Aditya_freecodecamp_projects_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__.a)(Calculator);function Calculator(e){var t;return Object(C_Users_DELL_Desktop_Aditya_freecodecamp_projects_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Calculator),(t=_super.call(this,e)).state={upperDisplay:"",bottomDisplay:"0",expression:[],decAllowed:!0,solved:!1},t.clearAll=t.clearAll.bind(Object(C_Users_DELL_Desktop_Aditya_freecodecamp_projects_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(t)),t.handleOperator=t.handleOperator.bind(Object(C_Users_DELL_Desktop_Aditya_freecodecamp_projects_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(t)),t.handleNumber=t.handleNumber.bind(Object(C_Users_DELL_Desktop_Aditya_freecodecamp_projects_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(t)),t.solver=t.solver.bind(Object(C_Users_DELL_Desktop_Aditya_freecodecamp_projects_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(t)),t.handleDecimal=t.handleDecimal.bind(Object(C_Users_DELL_Desktop_Aditya_freecodecamp_projects_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(t)),t.maxDigitWarning=t.maxDigitWarning.bind(Object(C_Users_DELL_Desktop_Aditya_freecodecamp_projects_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(t)),t}return Object(C_Users_DELL_Desktop_Aditya_freecodecamp_projects_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Calculator,[{key:"clearAll",value:function(){this.setState({upperDisplay:"",bottomDisplay:"0",decAllowed:!0,solved:!1})}},{key:"maxDigitWarning",value:function(){var e=this;this.setState({bottomDisplay:"Digit Limit Met",upperDisplay:this.state.bottomDisplay}),setTimeout((function(){return e.setState({bottomDisplay:e.state.upperDisplay})}),1e3)}},{key:"handleOperator",value:function(e){if(!this.state.bottomDisplay.includes("Limit")){var t=e.target.textContent,_=this.state.upperDisplay.replace("x","*").replace("\xf7","/"),a=_.charAt(_.length-1),s=_.charAt(_.length-2);t===a?console.log("trying..."):["+","-","*","/"].includes(a)?"-"===t?["+","-","*","/"].includes(s)||this.setState({upperDisplay:_+t}):"-"!==a?this.setState({upperDisplay:_.replace(a,t)}):this.setState({upperDisplay:_.replace(/\+|\-|\*|\//g,"")+t}):this.state.solved?this.setState({upperDisplay:this.state.bottomDisplay+t,bottomDisplay:t,decAllowed:!0,solved:!1}):this.setState({upperDisplay:_+t,bottomDisplay:t,decAllowed:!0})}}},{key:"handleNumber",value:function(e){this.state.bottomDisplay.includes("Limit")||("0"===this.state.upperDisplay?this.setState({upperDisplay:this.state.upperDisplay.replace("0",e.target.textContent)}):this.state.bottomDisplay.length>21?this.maxDigitWarning():this.state.solved?this.setState({upperDisplay:e.target.textContent,bottomDisplay:e.target.textContent,solved:!1}):"0"===this.state.bottomDisplay||this.state.bottomDisplay.toString().split("").some((function(e){return["+","-","*","/"].includes(e)}))?this.setState({upperDisplay:this.state.upperDisplay+e.target.textContent,bottomDisplay:e.target.textContent,solved:!1}):this.setState({upperDisplay:this.state.upperDisplay+e.target.textContent,bottomDisplay:this.state.bottomDisplay+e.target.textContent,solved:!1}))}},{key:"solver",value:function solver(){if(!this.state.bottomDisplay.includes("Limit")){var t=this.state.upperDisplay.replace("x","*").replace("\xf7","/");this.state.solved||(/[+*-/]$/.test(this.state.upperDisplay)||/^[+*\-/]/.test(this.state.upperDisplay)?this.setState({upperDisplay:t.replace(/\+|\-|\*|\//g,""),solved:!0}):this.setState({upperDisplay:t.replace("*","x").replace("/","\xf7")+"\n= "+eval(t),bottomDisplay:eval(t).toString(),decAllowed:!0,solved:!0}))}}},{key:"handleDecimal",value:function(e){this.state.bottomDisplay.includes("Limit")||(this.state.solved?this.setState({upperDisplay:"0.",bottomDisplay:"0.",solved:!1}):this.state.decAllowed&&this.setState({upperDisplay:this.state.upperDisplay+e.target.textContent,bottomDisplay:this.state.bottomDisplay+e.target.textContent,decAllowed:!1,solved:!1}))}},{key:"render",value:function(){var e=this;return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"container"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_UpperDisplay__WEBPACK_IMPORTED_MODULE_7__.a,{upperDisplay:this.state.upperDisplay}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_BottomDisplay__WEBPACK_IMPORTED_MODULE_8__.a,{bottomDisplay:this.state.bottomDisplay}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_6__.a,{clear:this.clearAll,operatorInput:function(t){return e.handleOperator(t)},numberInput:function(t){return e.handleNumber(t)},solve:this.solver,decimal:function(t){return e.handleDecimal(t)}}))}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);__webpack_exports__.a=Calculator},function(e,t,_){"use strict";var a=_(2),s=_(3),r=_(5),l=_(4),o=_(0),i=_.n(o),p=function(e){Object(r.a)(_,e);var t=Object(l.a)(_);function _(){return Object(a.a)(this,_),t.apply(this,arguments)}return Object(s.a)(_,[{key:"render",value:function(){return i.a.createElement("div",{className:"pad"},i.a.createElement("button",{onClick:this.props.clear,id:"clear",className:"spanned-column"},"AC"),i.a.createElement("button",{onClick:this.props.operatorInput,id:"divide",className:"operator",value:"/"},"\xf7"),i.a.createElement("button",{onClick:this.props.operatorInput,id:"multiply",className:"operator",value:"*"},"x"),i.a.createElement("button",{onClick:this.props.numberInput,id:"seven"},"7"),i.a.createElement("button",{onClick:this.props.numberInput,id:"eight"},"8"),i.a.createElement("button",{onClick:this.props.numberInput,id:"nine"},"9"),i.a.createElement("button",{onClick:this.props.operatorInput,id:"add",className:"operator",value:"+"},"+"),i.a.createElement("button",{onClick:this.props.numberInput,id:"four"},"4"),i.a.createElement("button",{onClick:this.props.numberInput,id:"five"},"5"),i.a.createElement("button",{onClick:this.props.numberInput,id:"six"},"6"),i.a.createElement("button",{onClick:this.props.operatorInput,id:"subtract",className:"operator",value:"-"},"-"),i.a.createElement("button",{onClick:this.props.numberInput,id:"one"},"1"),i.a.createElement("button",{onClick:this.props.numberInput,id:"two"},"2"),i.a.createElement("button",{onClick:this.props.numberInput,id:"three"},"3"),i.a.createElement("button",{id:"equals",className:"spanned-row",onClick:this.props.solve},"="),i.a.createElement("button",{onClick:this.props.numberInput,id:"zero",className:"spanned-column"},"0"),i.a.createElement("button",{id:"decimal",onClick:this.props.decimal},"."))}}]),_}(i.a.Component);t.a=p},function(e,t,_){"use strict";var a=_(0),s=_.n(a);t.a=function(e){return s.a.createElement("div",{className:"upperDisplay"},e.upperDisplay)}},function(e,t,_){"use strict";var a=_(0),s=_.n(a);t.a=function(e){return s.a.createElement("div",{id:"display",className:"bottomDisplay"},e.bottomDisplay)}},function(e,t,_){e.exports=_(19)},,,,,function(e,t,_){},function(e,t,_){},function(e,t,_){"use strict";_.r(t);var a=_(0),s=_.n(a),r=_(7),l=_.n(r),o=(_(17),_(2)),i=_(3),p=_(5),n=_(4),c=(_(18),_(8)),u=function(e){Object(p.a)(_,e);var t=Object(n.a)(_);function _(){return Object(o.a)(this,_),t.apply(this,arguments)}return Object(i.a)(_,[{key:"render",value:function(){return s.a.createElement(c.a,null)}}]),_}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.2fdd911c.chunk.js.map
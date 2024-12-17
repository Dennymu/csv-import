/*! For license information please see 588.901d2c65.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkcsv_import_react_dennis=self.webpackChunkcsv_import_react_dennis||[]).push([[588],{"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}__webpack_require__.d(__webpack_exports__,{A:()=>_extends})},"./node_modules/@chakra-ui/alert/dist/chunk-3KCBMPN5.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{F:()=>Alert});var chunk_ZJJGQIVY=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),chunk_DMO4EI7P=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-DMO4EI7P.mjs"),chunk_ZHQNHOQS=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),dist=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),fallbackIcon={path:(0,jsx_runtime.jsxs)("g",{stroke:"currentColor",strokeWidth:"1.5",children:[(0,jsx_runtime.jsx)("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),(0,jsx_runtime.jsx)("path",{fill:"currentColor",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),(0,jsx_runtime.jsx)("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})]}),viewBox:"0 0 24 24"},Icon=(0,chunk_ZJJGQIVY.R)(((props,ref)=>{const{as:element,viewBox,color="currentColor",focusable=!1,children,className,__css,...rest}=props,shared={ref,focusable,className:(0,dist.cx)("chakra-icon",className),__css:{w:"1em",h:"1em",display:"inline-block",lineHeight:"1em",flexShrink:0,color,...__css,...(0,chunk_DMO4EI7P.Vl)("Icon",props)}},_viewBox=null!=viewBox?viewBox:fallbackIcon.viewBox;if(element&&"string"!=typeof element)return(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.B.svg,{as:element,...shared,...rest});const _path=null!=children?children:fallbackIcon.path;return(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.B.svg,{verticalAlign:"middle",viewBox:_viewBox,...shared,...rest,children:_path})}));Icon.displayName="Icon";function WarningIcon(props){return(0,jsx_runtime.jsx)(Icon,{viewBox:"0 0 24 24",...props,children:(0,jsx_runtime.jsx)("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})})}var react_context_dist=__webpack_require__("./node_modules/@chakra-ui/react-context/dist/index.mjs"),chunk_5PH6ULNP=__webpack_require__("./node_modules/@chakra-ui/spinner/dist/chunk-5PH6ULNP.mjs"),[AlertProvider,useAlertContext]=(0,react_context_dist.q)({name:"AlertContext",hookName:"useAlertContext",providerName:"<Alert />"}),[AlertStylesProvider,useAlertStyles]=(0,react_context_dist.q)({name:"AlertStylesContext",hookName:"useAlertStyles",providerName:"<Alert />"}),STATUSES={info:{icon:function InfoIcon(props){return(0,jsx_runtime.jsx)(Icon,{viewBox:"0 0 24 24",...props,children:(0,jsx_runtime.jsx)("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"})})},colorScheme:"blue"},warning:{icon:WarningIcon,colorScheme:"orange"},success:{icon:function CheckIcon(props){return(0,jsx_runtime.jsx)(Icon,{viewBox:"0 0 24 24",...props,children:(0,jsx_runtime.jsx)("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"})})},colorScheme:"green"},error:{icon:WarningIcon,colorScheme:"red"},loading:{icon:chunk_5PH6ULNP.y,colorScheme:"blue"}};var styled_system_dist=__webpack_require__("./node_modules/@chakra-ui/system/node_modules/@chakra-ui/styled-system/dist/index.mjs"),Alert=(0,chunk_ZJJGQIVY.R)((function Alert2(props,ref){var _a;const{status="info",addRole=!0,...rest}=(0,styled_system_dist.MN)(props),colorScheme=null!=(_a=props.colorScheme)?_a:function getStatusColorScheme(status){return STATUSES[status].colorScheme}(status),styles=(0,chunk_DMO4EI7P.o5)("Alert",{...props,colorScheme}),alertStyles={width:"100%",display:"flex",alignItems:"center",position:"relative",overflow:"hidden",...styles.container};return(0,jsx_runtime.jsx)(AlertProvider,{value:{status},children:(0,jsx_runtime.jsx)(AlertStylesProvider,{value:styles,children:(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.B.div,{"data-status":status,role:addRole?"alert":void 0,ref,...rest,className:(0,dist.cx)("chakra-alert",props.className),__css:alertStyles})})})}));Alert.displayName="Alert"},"./node_modules/@chakra-ui/button/dist/chunk-6QYXN73V.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{K:()=>IconButton});var _chunk_UVUR7MCU_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/button/dist/chunk-UVUR7MCU.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),IconButton=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.R)(((props,ref)=>{const{icon,children,isRound,"aria-label":ariaLabel,...rest}=props,element=icon||children,_children=(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(element)?(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(element,{"aria-hidden":!0,focusable:!1}):null;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chunk_UVUR7MCU_mjs__WEBPACK_IMPORTED_MODULE_3__.$,{padding:"0",borderRadius:isRound?"full":void 0,ref,"aria-label":ariaLabel,...rest,children:_children})}));IconButton.displayName="IconButton"},"./node_modules/@chakra-ui/button/dist/chunk-UVUR7MCU.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>Button});var react=__webpack_require__("./node_modules/react/index.js");var dist=__webpack_require__("./node_modules/@chakra-ui/react-context/dist/index.mjs"),[ButtonGroupProvider,useButtonGroup]=(0,dist.q)({strict:!1,name:"ButtonGroupContext"}),chunk_ZHQNHOQS=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZHQNHOQS.mjs"),shared_utils_dist=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ButtonIcon(props){const{children,className,...rest}=props,_children=(0,react.isValidElement)(children)?(0,react.cloneElement)(children,{"aria-hidden":!0,focusable:!1}):children,_className=(0,shared_utils_dist.cx)("chakra-button__icon",className);return(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.B.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...rest,className:_className,children:_children})}ButtonIcon.displayName="ButtonIcon";var chunk_5PH6ULNP=__webpack_require__("./node_modules/@chakra-ui/spinner/dist/chunk-5PH6ULNP.mjs");function ButtonSpinner(props){const{label,placement,spacing="0.5rem",children=(0,jsx_runtime.jsx)(chunk_5PH6ULNP.y,{color:"currentColor",width:"1em",height:"1em"}),className,__css,...rest}=props,_className=(0,shared_utils_dist.cx)("chakra-button__spinner",className),marginProp="start"===placement?"marginEnd":"marginStart",spinnerStyles=(0,react.useMemo)((()=>({display:"flex",alignItems:"center",position:label?"relative":"absolute",[marginProp]:label?spacing:0,fontSize:"1em",lineHeight:"normal",...__css})),[__css,label,marginProp,spacing]);return(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.B.div,{className:_className,...rest,__css:spinnerStyles,children})}function mergeRefs(...refs){return node=>{refs.forEach((ref=>{!function assignRef(ref,value){if(null!=ref)if("function"!=typeof ref)try{ref.current=value}catch(error){throw new Error(`Cannot assign value '${value}' to ref '${ref}'`)}else ref(value)}(ref,node)}))}}function useMergeRefs(...refs){return(0,react.useMemo)((()=>mergeRefs(...refs)),refs)}ButtonSpinner.displayName="ButtonSpinner";var chunk_ZJJGQIVY=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-ZJJGQIVY.mjs"),chunk_DMO4EI7P=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-DMO4EI7P.mjs"),styled_system_dist=__webpack_require__("./node_modules/@chakra-ui/system/node_modules/@chakra-ui/styled-system/dist/index.mjs"),Button=(0,chunk_ZJJGQIVY.R)(((props,ref)=>{const group=useButtonGroup(),styles=(0,chunk_DMO4EI7P.Vl)("Button",{...group,...props}),{isDisabled=null==group?void 0:group.isDisabled,isLoading,isActive,children,leftIcon,rightIcon,loadingText,iconSpacing="0.5rem",type,spinner,spinnerPlacement="start",className,as,...rest}=(0,styled_system_dist.MN)(props),buttonStyles=(0,react.useMemo)((()=>{const _focus={...null==styles?void 0:styles._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...styles,...!!group&&{_focus}}}),[styles,group]),{ref:_ref,type:defaultType}=function useButtonType(value){const[isButton,setIsButton]=(0,react.useState)(!value);return{ref:(0,react.useCallback)((node=>{node&&setIsButton("BUTTON"===node.tagName)}),[]),type:isButton?"button":void 0}}(as),contentProps={rightIcon,leftIcon,iconSpacing,children};return(0,jsx_runtime.jsxs)(chunk_ZHQNHOQS.B.button,{ref:useMergeRefs(ref,_ref),as,type:null!=type?type:defaultType,"data-active":(0,shared_utils_dist.sE)(isActive),"data-loading":(0,shared_utils_dist.sE)(isLoading),__css:buttonStyles,className:(0,shared_utils_dist.cx)("chakra-button",className),...rest,disabled:isDisabled||isLoading,children:[isLoading&&"start"===spinnerPlacement&&(0,jsx_runtime.jsx)(ButtonSpinner,{className:"chakra-button__spinner--start",label:loadingText,placement:"start",spacing:iconSpacing,children:spinner}),isLoading?loadingText||(0,jsx_runtime.jsx)(chunk_ZHQNHOQS.B.span,{opacity:0,children:(0,jsx_runtime.jsx)(ButtonContent,{...contentProps})}):(0,jsx_runtime.jsx)(ButtonContent,{...contentProps}),isLoading&&"end"===spinnerPlacement&&(0,jsx_runtime.jsx)(ButtonSpinner,{className:"chakra-button__spinner--end",label:loadingText,placement:"end",spacing:iconSpacing,children:spinner})]})}));function ButtonContent(props){const{leftIcon,rightIcon,children,iconSpacing}=props;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[leftIcon&&(0,jsx_runtime.jsx)(ButtonIcon,{marginEnd:iconSpacing,children:leftIcon}),children,rightIcon&&(0,jsx_runtime.jsx)(ButtonIcon,{marginStart:iconSpacing,children:rightIcon})]})}Button.displayName="Button"},"./node_modules/@chakra-ui/color-mode/dist/chunk-UQDW7KKV.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{G6:()=>useColorMode});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),ColorModeContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});function useColorMode(){const context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ColorModeContext);if(void 0===context)throw new Error("useColorMode must be used within a ColorModeProvider");return context}ColorModeContext.displayName="ColorModeContext"},"./node_modules/@chakra-ui/react-context/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{q:()=>createContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function createContext(options={}){const{name,strict=!0,hookName="useContext",providerName="Provider",errorMessage,defaultValue}=options,Context=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultValue);return Context.displayName=name,[Context.Provider,function useContext(){var _a;const context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(!context&&strict){const error=new Error(null!=errorMessage?errorMessage:function getErrorMessage(hook,provider){return`${hook} returned \`undefined\`. Seems you forgot to wrap component within ${provider}`}(hookName,providerName));throw error.name="ContextError",null==(_a=Error.captureStackTrace)||_a.call(Error,error,useContext),error}return context},Context]}},"./node_modules/@chakra-ui/react/dist/esm/box/box.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>Box});const Box=(0,__webpack_require__("./node_modules/@chakra-ui/react/dist/esm/system/factory.mjs").B)("div");Box.displayName="Box"},"./node_modules/@chakra-ui/react/dist/esm/chakra-provider.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{s:()=>ChakraProvider});var esm=__webpack_require__("./node_modules/@chakra-ui/react/node_modules/@chakra-ui/theme/dist/esm/index.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");var emotion_element_f0de968e_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-element-f0de968e.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),react_default=__webpack_require__.n(react),color_mode_context=__webpack_require__("./node_modules/@chakra-ui/react/dist/esm/color-mode/color-mode-context.mjs");const classNames_light="chakra-ui-light",classNames_dark="chakra-ui-dark";const localStorageManager=function createLocalStorageManager(key){return{ssr:!1,type:"localStorage",get(init){if(!globalThis?.document)return init;let value;try{value=localStorage.getItem(key)||init}catch(e){}return value||init},set(value){try{localStorage.setItem(key,value)}catch(e){}}}}("chakra-ui-color-mode");function parseCookie(cookie,key){const match=cookie.match(new RegExp(`(^| )${key}=([^;]+)`));return match?.[2]}function createCookieStorageManager(key,cookie){return{ssr:!!cookie,type:"cookie",get:init=>cookie?parseCookie(cookie,key):globalThis?.document&&parseCookie(document.cookie,key)||init,set(value){document.cookie=`${key}=${value}; max-age=31536000; path=/`}}}createCookieStorageManager("chakra-ui-color-mode");const noop=()=>{},color_mode_provider_useSafeLayoutEffect=function isBrowser(){return Boolean(globalThis?.document)}()?react.useLayoutEffect:react.useEffect;function getTheme(manager,fallback){return"cookie"===manager.type&&manager.ssr?manager.get(fallback):fallback}const ColorModeProvider=(0,emotion_element_f0de968e_browser_esm.w)((function ColorModeProvider2(props,cache){const{value,children,options:{useSystemColorMode,initialColorMode,disableTransitionOnChange}={},colorModeManager=localStorageManager}=props,defaultColorMode="dark"===initialColorMode?"dark":"light",[colorMode,rawSetColorMode]=(0,react.useState)((()=>getTheme(colorModeManager,defaultColorMode))),[resolvedColorMode,setResolvedColorMode]=(0,react.useState)((()=>getTheme(colorModeManager))),{getSystemTheme,setClassName,setDataset,addListener}=(0,react.useMemo)((()=>function getColorModeUtils(options={}){const{preventTransition=!0,nonce}=options,utils={setDataset:value=>{const cleanup=preventTransition?utils.preventTransition():void 0;document.documentElement.dataset.theme=value,document.documentElement.style.colorScheme=value,cleanup?.()},setClassName(dark){document.body.classList.add(dark?classNames_dark:classNames_light),document.body.classList.remove(dark?classNames_light:classNames_dark)},query:()=>window.matchMedia("(prefers-color-scheme: dark)"),getSystemTheme:fallback=>utils.query().matches??"dark"===fallback?"dark":"light",addListener(fn){const mql=utils.query(),listener=e=>{fn(e.matches?"dark":"light")};return"function"==typeof mql.addListener?mql.addListener(listener):mql.addEventListener("change",listener),()=>{"function"==typeof mql.removeListener?mql.removeListener(listener):mql.removeEventListener("change",listener)}},preventTransition(){const css=document.createElement("style");return css.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),void 0!==nonce&&(css.nonce=nonce),document.head.appendChild(css),()=>{window.getComputedStyle(document.body),requestAnimationFrame((()=>{requestAnimationFrame((()=>{document.head.removeChild(css)}))}))}}};return utils}({preventTransition:disableTransitionOnChange,nonce:cache?.nonce})),[disableTransitionOnChange,cache?.nonce]),resolvedValue="system"!==initialColorMode||colorMode?colorMode:resolvedColorMode,setColorMode=(0,react.useCallback)((value2=>{const resolved="system"===value2?getSystemTheme():value2;rawSetColorMode(resolved),setClassName("dark"===resolved),setDataset(resolved),colorModeManager.set(resolved)}),[colorModeManager,getSystemTheme,setClassName,setDataset]);color_mode_provider_useSafeLayoutEffect((()=>{"system"===initialColorMode&&setResolvedColorMode(getSystemTheme())}),[]),(0,react.useEffect)((()=>{const managerValue=colorModeManager.get();setColorMode(managerValue||("system"!==initialColorMode?defaultColorMode:"system"))}),[colorModeManager,defaultColorMode,initialColorMode,setColorMode]);const toggleColorMode=(0,react.useCallback)((()=>{setColorMode("dark"===resolvedValue?"light":"dark")}),[resolvedValue,setColorMode]);(0,react.useEffect)((()=>{if(useSystemColorMode)return addListener(setColorMode)}),[useSystemColorMode,addListener,setColorMode]);const context=(0,react.useMemo)((()=>({colorMode:value??resolvedValue,toggleColorMode:value?noop:toggleColorMode,setColorMode:value?noop:setColorMode,forced:void 0!==value})),[resolvedValue,toggleColorMode,setColorMode,value]);return(0,jsx_runtime.jsx)(color_mode_context.Ig.Provider,{value:context,children})}));ColorModeProvider.displayName="ColorModeProvider";var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");const css=String.raw,vhPolyfill=css`
  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
`,CSSPolyfill=()=>(0,jsx_runtime.jsx)(emotion_react_browser_esm.mL,{styles:vhPolyfill}),CSSReset=({scope=""})=>(0,jsx_runtime.jsx)(emotion_react_browser_esm.mL,{styles:css`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-feature-settings: "kern";
      }

      ${scope} :where(*, *::before, *::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      main {
        display: block;
      }

      ${scope} hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${scope} :where(pre, code, kbd,samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${scope} a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${scope} abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${scope} :where(b, strong) {
        font-weight: bold;
      }

      ${scope} small {
        font-size: 80%;
      }

      ${scope} :where(sub,sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${scope} sub {
        bottom: -0.25em;
      }

      ${scope} sup {
        top: -0.5em;
      }

      ${scope} img {
        border-style: none;
      }

      ${scope} :where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${scope} :where(button, input) {
        overflow: visible;
      }

      ${scope} :where(button, select) {
        text-transform: none;
      }

      ${scope} :where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${scope} fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      ${scope} legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${scope} progress {
        vertical-align: baseline;
      }

      ${scope} textarea {
        overflow: auto;
      }

      ${scope} :where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${scope} input[type="number"]::-webkit-inner-spin-button,
      ${scope} input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      ${scope} input[type="number"] {
        -moz-appearance: textfield;
      }

      ${scope} input[type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${scope} input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${scope} ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${scope} details {
        display: block;
      }

      ${scope} summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      ${scope} :where(
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre
        ) {
        margin: 0;
      }

      ${scope} button {
        background: transparent;
        padding: 0;
      }

      ${scope} fieldset {
        margin: 0;
        padding: 0;
      }

      ${scope} :where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${scope} textarea {
        resize: vertical;
      }

      ${scope} :where(button, [role="button"]) {
        cursor: pointer;
      }

      ${scope} button::-moz-focus-inner {
        border: 0 !important;
      }

      ${scope} table {
        border-collapse: collapse;
      }

      ${scope} :where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${scope} :where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${scope} :where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${scope} :where(img, video) {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${scope} select::-ms-expand {
        display: none;
      }

      ${vhPolyfill}
//# sourceMappingURL=588.901d2c65.iframe.bundle.js.map
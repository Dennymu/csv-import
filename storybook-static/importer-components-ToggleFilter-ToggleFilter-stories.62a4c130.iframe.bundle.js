"use strict";(self.webpackChunkcsv_import_react_dennis=self.webpackChunkcsv_import_react_dennis||[]).push([[308],{"./src/importer/components/ToggleFilter/ToggleFilter.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithCustomOptions:()=>WithCustomOptions,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ToggleFilter_stories});var react=__webpack_require__("./node_modules/react/index.js"),classes=__webpack_require__("./src/importer/utils/classes.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ToggleFilter_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/importer/components/ToggleFilter/style/ToggleFilter.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ToggleFilter_module.A,options);const style_ToggleFilter_module=ToggleFilter_module.A&&ToggleFilter_module.A.locals?ToggleFilter_module.A.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ToggleFilter({options,onChange,className}){const[selectedOption,setSelectedOption]=(0,react.useState)(null),toggleFilterClassName=(0,classes.A)([style_ToggleFilter_module.toggleFilter,className]);(0,react.useEffect)((()=>{const defaultSelected=options.find((option=>option.selected));setSelectedOption(defaultSelected?defaultSelected.label:options[0]?.label)}),[options]);const getOptionColor=option=>option.color?option.color:selectedOption===option.label?"var(--color-tertiary)":"var(--color-text)";return(0,jsx_runtime.jsx)("div",{className:toggleFilterClassName,children:options.map((option=>(0,jsx_runtime.jsx)("button",{className:(0,classes.A)([style_ToggleFilter_module.toggleOption,selectedOption===option.label&&style_ToggleFilter_module.selected,option.color&&style_ToggleFilter_module[option.color]]),onClick:()=>(option=>{setSelectedOption(option.label),onChange&&onChange(option.filterValue)})(option),style:{color:getOptionColor(option)},children:option.label},option.label)))})}ToggleFilter.displayName="ToggleFilter";const components_ToggleFilter=ToggleFilter;try{ToggleFilter.displayName="ToggleFilter",ToggleFilter.__docgenInfo={description:"",displayName:"ToggleFilter",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"Option[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(option: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/importer/components/ToggleFilter/index.tsx#ToggleFilter"]={docgenInfo:ToggleFilter.__docgenInfo,name:"ToggleFilter",path:"src/importer/components/ToggleFilter/index.tsx#ToggleFilter"})}catch(__react_docgen_typescript_loader_error){}const ToggleFilter_stories={title:"User Interface/ToggleFilter",component:components_ToggleFilter,argTypes:{options:{control:{type:"object"}},onChange:{action:"changed"}}},Default=()=>(0,jsx_runtime.jsx)(components_ToggleFilter,{options:[{label:"Option 1",filterValue:"One",selected:!0},{label:"Option 2",filterValue:"Two",selected:!1},{label:"Option 3",filterValue:"Three",selected:!1,color:"#F04438"}],onChange:option=>console.log(option)});Default.displayName="Default";const WithCustomOptions=()=>(0,jsx_runtime.jsx)(components_ToggleFilter,{options:[{label:"Custom 1",filterValue:"One",selected:!1},{label:"Custom 2",filterValue:"Two",selected:!0}],onChange:option=>console.log(option)});WithCustomOptions.displayName="WithCustomOptions",Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"() => <ToggleFilter options={[{\n  label: 'Option 1',\n  filterValue: 'One',\n  selected: true\n}, {\n  label: 'Option 2',\n  filterValue: 'Two',\n  selected: false\n}, {\n  label: 'Option 3',\n  filterValue: 'Three',\n  selected: false,\n  color: \"#F04438\"\n}]} onChange={option => console.log(option)} />",...Default.parameters?.docs?.source}}},WithCustomOptions.parameters={...WithCustomOptions.parameters,docs:{...WithCustomOptions.parameters?.docs,source:{originalSource:"() => <ToggleFilter options={[{\n  label: 'Custom 1',\n  filterValue: 'One',\n  selected: false\n}, {\n  label: 'Custom 2',\n  filterValue: 'Two',\n  selected: true\n}]} onChange={option => console.log(option)} />",...WithCustomOptions.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithCustomOptions"]},"./src/importer/utils/classes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=(a,separator=" ")=>a.filter((c=>c)).map((c=>c.toString().trim())).join(separator)},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/importer/components/ToggleFilter/style/ToggleFilter.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".ToggleFilter-module__toggleFilter--wN1vL{display:flex;align-items:center;background-color:var(--color-input-background);border-radius:20px;overflow:hidden;min-height:36px}.ToggleFilter-module__toggleOption--xwFuO{padding:8px 16px;cursor:pointer}.ToggleFilter-module__toggleOption--xwFuO.ToggleFilter-module__selected--X_rxg{background-color:var(--color-text-on-tertiary);border-radius:20px;transition:background-color .2s,color .2s}.ToggleFilter-module__toggleOption--xwFuO .ToggleFilter-module__defaultColor--Y7WLC{color:var(--color-text)}","",{version:3,sources:["webpack://./src/importer/components/ToggleFilter/style/ToggleFilter.module.scss"],names:[],mappings:"AAAA,0CACI,YAAA,CACA,kBAAA,CACA,8CAAA,CACA,kBAAA,CACA,eAAA,CACA,eAAA,CAGF,0CACE,gBAAA,CACA,cAAA,CAEA,+EACI,8CAAA,CACA,kBAAA,CACA,yCAAA,CAGJ,oFACI,uBAAA",sourcesContent:[".toggleFilter {\r\n    display: flex;\r\n    align-items: center;\r\n    background-color: var(--color-input-background);\r\n    border-radius: 20px;\r\n    overflow: hidden;\r\n    min-height: 36px;\r\n  }\r\n  \r\n  .toggleOption {\r\n    padding: 8px 16px;\r\n    cursor: pointer;\r\n    \r\n    &.selected {\r\n        background-color: var(--color-text-on-tertiary);\r\n        border-radius: 20px;\r\n        transition: background-color 0.2s, color 0.2s;\r\n    }\r\n\r\n    .defaultColor {\r\n        color: var(--color-text);\r\n    }\r\n  }\r\n  "],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={toggleFilter:"ToggleFilter-module__toggleFilter--wN1vL",toggleOption:"ToggleFilter-module__toggleOption--xwFuO",selected:"ToggleFilter-module__selected--X_rxg",defaultColor:"ToggleFilter-module__defaultColor--Y7WLC"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);
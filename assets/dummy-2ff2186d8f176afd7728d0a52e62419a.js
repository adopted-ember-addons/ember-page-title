"use strict"
define("dummy/app",["exports","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,l){Object.defineProperty(e,"__esModule",{value:!0})
var a=Ember.Application.extend({modulePrefix:l.default.modulePrefix,podModulePrefix:l.default.podModulePrefix,Resolver:t.default,engines:{addonDocs:{dependencies:{services:["config"]}}}});(0,n.default)(a,l.default.modulePrefix),e.default=a}),define("dummy/components/boolean-field/component",["exports","dummy/components/boolean-field/template"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0})
var n=Ember.get
e.default=Ember.Component.extend({layout:t.default,classNames:["boolean-field"],click:function(){return n(this,"onchange")(!n(this,"value")),!1}})}),define("dummy/components/boolean-field/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"c4Dh1r7D",block:'{"symbols":[],"statements":[[4,"if",[[19,0,["value"]]],null,{"statements":[[0,"true"]],"parameters":[]},{"statements":[[0,"false"]],"parameters":[]}]],"hasEval":false}',meta:{moduleName:"dummy/components/boolean-field/template.hbs"}})}),define("dummy/components/head-content",["exports","dummy/templates/head"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Component.extend({tagName:"",model:Ember.inject.service("head-data"),layout:t.default})}),define("dummy/components/head-layout",["exports","ember-cli-head/templates/components/head-layout"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Component.extend({tagName:"",headElement:Ember.computed(function(){return Ember.getOwner(this).lookup("service:-document").head}),layout:t.default})}),define("dummy/components/page-title-pane/component",["exports","ember-page-title/services/page-title-list"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0})
var n=Ember.get,l=Ember.set,a=Ember.computed
e.default=Ember.Component.extend({tagName:"",titleList:a({get:function(){return t.default.create()}}),lastIndex:a("titleList.tokens.length",{get:function(){return n(this,"titleList.sortedTokens.length")-1}}),actions:{highlight:function(e){var t=Ember.A(n(this,"titleList.sortedTokens")),a=e.active
n(this,"titleList.tokens").setEach("active",!1),t.setEach("active",!1),a||(l(t.findBy("id",e.id),"active",!0),l(e,"active",!0))}}})}),define("dummy/components/page-title-pane/matryoshka/component",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0})
var t=Ember.get,n=Ember.computed
e.default=Ember.Component.extend({item:n("items",{get:function(){return t(this,"items")[0]}}),nextItems:n("items",{get:function(){return t(this,"items").slice(1)}})})}),define("dummy/components/page-title-pane/matryoshka/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"4T07IO1D",block:'{"symbols":["value","&default"],"statements":[[4,"page-title-pane/nested-template",null,[["title","replace","prepend","separator","onactivate","titleList"],[[19,0,["item","value"]],[19,0,["item","replace"]],[19,0,["item","prepend"]],[19,0,["item","separator"]],[19,0,["onactivate"]],[19,0,["titleList"]]]],{"statements":[[0,"  "],[11,2,[[19,0,["item"]]]],[0,"\\n"],[4,"if",[[19,0,["nextItems","length"]]],null,{"statements":[[4,"page-title-pane/matryoshka",[[19,0,["componentName"]]],[["items","onactivate","titleList"],[[19,0,["nextItems"]],[19,0,["onactivate"]],[19,0,["titleList"]]]],{"statements":[[0,"      "],[11,2,[[19,1,[]]]],[0,"\\n"]],"parameters":[1]},null]],"parameters":[]},null]],"parameters":[]},null]],"hasEval":false}',meta:{moduleName:"dummy/components/page-title-pane/matryoshka/template.hbs"}})}),define("dummy/components/page-title-pane/nested-template/component",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0})
var t=Ember.get,n=Ember.set,l=Ember.computed,a=Ember.run.scheduleOnce
e.default=Ember.Component.extend({classNames:["nested-template"],classNameBindings:["active:active"],active:l("token.id","titleList.tokens.@each.active",{get:function(){var e=Ember.A(t(this,"titleList.sortedTokens")).findBy("id",t(this,"token.id"))
return t(e||{},"active")}}),didReceiveAttrs:function(){var e=this
n(this,"token",{id:t(this,"elementId"),title:t(this,"title"),replace:t(this,"replace"),separator:t(this,"separator"),prepend:t(this,"prepend"),active:t(this,"token.active")}),a("afterRender",function(){t(e,"titleList").push(t(e,"token"))})},click:function(){return t(this,"onactivate")(t(this,"token")),!1}})}),define("dummy/components/page-title-pane/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"t/hpP7M1",block:'{"symbols":["token","idx","&default"],"statements":[[6,"div"],[9,"class","window-pane has-title"],[7],[0,"\\n  "],[6,"header"],[7],[0,"\\n    "],[6,"span"],[9,"class","close button"],[7],[8],[0,"\\n    "],[6,"span"],[9,"class","minimize button"],[7],[8],[0,"\\n    "],[6,"span"],[9,"class","maximize button"],[7],[8],[0,"\\n"],[4,"each",[[19,0,["titleList","sortedTokens"]]],null,{"statements":[[0,"      "],[6,"span"],[10,"class",[26,["title-token ",[25,"if",[[19,1,["active"]],"active"],null]]]],[10,"onclick",[25,"action",[[19,0,[]],"highlight",[19,1,[]]],null],null],[7],[1,[19,1,["title"]],false],[8],[0,"\\n      "],[4,"if",[[25,"lt",[[19,2,[]],[19,0,["lastIndex"]]],null]],null,{"statements":[[1,[19,1,["separator"]],false]],"parameters":[]},null],[0,"\\n"]],"parameters":[1,2]},null],[0,"  "],[8],[0,"\\n  "],[6,"div"],[7],[0,"\\n    "],[11,3,[[25,"hash",null,[["template","matryoshka"],[[25,"component",["page-title-pane/nested-template"],[["titleList","onactivate"],[[19,0,["titleList"]],[25,"action",[[19,0,[]],"highlight"],null]]]],[25,"component",["page-title-pane/matryoshka"],[["titleList","onactivate"],[[19,0,["titleList"]],[25,"action",[[19,0,[]],"highlight"],null]]]]]]]]],[0,"\\n  "],[8],[0,"\\n"],[8],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/components/page-title-pane/template.hbs"}})}),define("dummy/components/text-field/component",["exports","ember-autoresize/mixins/autoresize","dummy/components/text-field/template"],function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0})
var l=Ember.get,a=Ember.set
e.default=Ember.Component.extend(t.default,{layout:n.default,classNames:["text-field"],name:null,disabled:!1,shouldResizeWidth:!0,significantWhitespace:!0,autoResizeText:Ember.computed("value",{get:function(){return l(this,"value")||""}}),didInsertElement:function(){a(this,"autoresizeElement",this.get("element").querySelector("input")),Ember.run.later(this,function(){a(this,"autoresizeElement",this.get("element").querySelector("input")),Ember.run.later(this,"measureSize",100)})},didRender:function(){this._updateDisplayValue(this._getValue())},_getValue:function(){return l(this,"value")},_setValue:function(e){Ember.isEmpty(e)||null==e?l(this,"onchange")(null):l(this,"onchange")(e),this._updateDisplayValue(e)},_updateDisplayValue:function(e){var t=l(this,"element").querySelector("input"),n=t.selectionStart,a=t.selectionEnd
t.value=e||"",t.selectionStart=n,t.selectionEnd=a},actions:{reformat:function(){var e=l(this,"element").querySelector("input")
this._setValue(e.value)},blackHole:function(e){return e.stopPropagation(),!1}}})}),define("dummy/components/text-field/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"oJ3BF0uh",block:'{"symbols":[],"statements":[[6,"input"],[9,"type","text"],[10,"id",[18,"inputId"],null],[10,"name",[18,"name"],null],[10,"placeholder",[18,"placeholder"],null],[9,"autocomplete","off"],[10,"onclick",[25,"action",[[19,0,[]],"blackHole"],null],null],[10,"onpaste",[25,"action",[[19,0,[]],"reformat"],null],null],[10,"onchange",[25,"action",[[19,0,[]],"reformat"],null],null],[10,"oninput",[25,"action",[[19,0,[]],"reformat"],null],null],[10,"disabled",[18,"disabled"],null],[7],[8]],"hasEval":false}',meta:{moduleName:"dummy/components/text-field/template.hbs"}})}),define("dummy/components/window-pane/component",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Component.extend({tagName:""})}),define("dummy/components/window-pane/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"a3SByKhd",block:'{"symbols":["&default"],"statements":[[6,"div"],[10,"class",[26,["window-pane ",[25,"if",[[19,0,["title"]],"has-title"],null]]]],[7],[0,"\\n  "],[6,"header"],[7],[0,"\\n    "],[6,"span"],[9,"class","close button"],[7],[8],[0,"\\n    "],[6,"span"],[9,"class","minimize button"],[7],[8],[0,"\\n    "],[6,"span"],[9,"class","maximize button"],[7],[8],[0,"\\n    "],[1,[18,"title"],false],[0,"\\n  "],[8],[0,"\\n  "],[6,"div"],[7],[11,1,[[19,0,[]]]],[8],[0,"\\n"],[8],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/components/window-pane/template.hbs"}})}),define("dummy/helpers/equals",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0})
var t=function(){function e(e,t){var n=[],l=!0,a=!1,i=void 0
try{for(var s,o=e[Symbol.iterator]();!(l=(s=o.next()).done)&&(n.push(s.value),!t||n.length!==t);l=!0);}catch(e){a=!0,i=e}finally{try{!l&&o.return&&o.return()}finally{if(a)throw i}}return n}return function(t,n){if(Array.isArray(t))return t
if(Symbol.iterator in Object(t))return e(t,n)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()
e.default=Ember.Helper.helper(function(e){var n=t(e,2),l=n[0],a=n[1]
return Ember.isEqual(l,a)})}),define("dummy/helpers/highlight",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0})
var t=Ember.String.htmlSafe
e.default=Ember.Helper.helper(function(e){return t(e.join("").replace(/([a-z]+)=/g,function(e,t){return"<span class='attribute'>"+t+"</span>="}).replace(/("[^"]*"|true|false)/g,function(e){return"<span class='string'>"+e+"</span>"}).replace(/title/,function(e){return'<span class="helper">'+e+"</span>"}).replace(/[a-z]+\.[a-z]+/g,function(e){return'<span class="literal">'+e+"</span>"}))})}),define("dummy/helpers/inline-svg",["exports","ember-inline-svg/helpers/inline-svg","dummy/svgs"],function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0})
var l=function(){function e(e,t){var n=[],l=!0,a=!1,i=void 0
try{for(var s,o=e[Symbol.iterator]();!(l=(s=o.next()).done)&&(n.push(s.value),!t||n.length!==t);l=!0);}catch(e){a=!0,i=e}finally{try{!l&&o.return&&o.return()}finally{if(a)throw i}}return n}return function(t,n){if(Array.isArray(t))return t
if(Symbol.iterator in Object(t))return e(t,n)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=void 0
a=Ember.Helper&&Ember.Helper.helper?Ember.Helper.helper(function(e,a){var i=l(e,1)[0]
return(0,t.inlineSvg)(n.default,i,a)}):Ember.Handlebars.makeBoundHelper(function(e,l){return(0,t.inlineSvg)(n.default,e,l.hash||{})}),e.default=a}),define("dummy/helpers/lt",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0})
var t=function(){function e(e,t){var n=[],l=!0,a=!1,i=void 0
try{for(var s,o=e[Symbol.iterator]();!(l=(s=o.next()).done)&&(n.push(s.value),!t||n.length!==t);l=!0);}catch(e){a=!0,i=e}finally{try{!l&&o.return&&o.return()}finally{if(a)throw i}}return n}return function(t,n){if(Array.isArray(t))return t
if(Symbol.iterator in Object(t))return e(t,n)
throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()
e.default=Ember.Helper.helper(function(e){var n=t(e,2)
return n[0]<n[1]})}),define("dummy/helpers/page-title",["exports","ember-page-title/helpers/page-title"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("dummy/index/controller",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0})
var t=Ember.set
e.default=Ember.Controller.extend({actions:{add:function(e){var n=e.slice(-1)[0]
t(this,"model.tokens",e.concat({separator:n.separator,prepend:n.prepend}))}}})}),define("dummy/index/route",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({model:function(){return{tokens:[{value:"ember-page-title",separator:" | "}],title:"Blog",post:{title:"Ember.js"}}}})}),define("dummy/index/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"SyF3WfnE",block:'{"symbols":["p","p","p","p","p","p","p","p","p","token"],"statements":[[6,"div"],[9,"id","index"],[7],[0,"\\n  "],[6,"header"],[7],[0,"\\n    "],[6,"h1"],[7],[1,[25,"inline-svg",["icon"],null],false],[0," ember-page-title"],[8],[6,"nav"],[7],[0,"\\n      "],[6,"a"],[9,"href","#usage"],[7],[0,"Usage"],[8],[0,"\\n      "],[6,"a"],[9,"href","#playground"],[7],[0,"Playground"],[8],[0,"\\n      "],[6,"a"],[9,"href","https://github.com/tim-evans/ember-page-title"],[9,"target","__blank"],[7],[0,"GitHub"],[8],[0,"\\n    "],[8],[0,"\\n  "],[8],[0,"\\n\\n  "],[6,"div"],[9,"class","hero"],[7],[0,"\\n    "],[6,"p"],[7],[0,"Page title management"],[6,"br"],[7],[8],[0,"for "],[1,[25,"inline-svg",["ember-logo"],[["title"],["Ember"]]],false],[0," apps"],[8],[0,"\\n    "],[6,"a"],[9,"class","more"],[9,"href","#installation"],[7],[1,[25,"inline-svg",["arrow"],null],false],[8],[0,"\\n  "],[8],[0,"\\n\\n  "],[6,"main"],[7],[0,"\\n    "],[6,"section"],[9,"id","installation"],[7],[0,"\\n      "],[6,"h2"],[7],[0,"Installation"],[8],[0,"\\n      "],[6,"div"],[9,"class","grid"],[7],[0,"\\n"],[4,"window-pane",null,null,{"statements":[[0,"          "],[6,"span"],[9,"class","ps1"],[7],[0,"> "],[8],[0,"ember install ember-page-title\\n"]],"parameters":[]},null],[0,"      "],[8],[0,"\\n    "],[8],[0,"\\n\\n    "],[6,"section"],[9,"id","playground"],[7],[0,"\\n      "],[6,"h2"],[7],[0,"Playground"],[8],[0,"\\n      "],[6,"div"],[9,"class","grid"],[7],[0,"\\n"],[4,"page-title-pane",null,null,{"statements":[[4,"component",[[19,9,["matryoshka"]]],[["items"],[[19,0,["model","tokens"]]]],{"statements":[[0,"            "],[6,"code"],[7],[0,"\\n              "],[1,[25,"page-title",[[19,10,["value"]]],[["replace","prepend","separator"],[[19,10,["replace"]],[19,10,["prepend"]],[19,10,["separator"]]]]],false],[0,"\\n              "],[0,"{{"],[6,"span"],[9,"class","helper"],[7],[0,"title"],[8],[0," \\""],[1,[25,"text-field",null,[["class","value","onchange","autoresize"],["string",[19,10,["value"]],[25,"action",[[19,0,[]],[25,"mut",[[19,10,["value"]]],null]],null],true]]],false],[0,"\\"\\n              "],[6,"span"],[9,"class","literal"],[7],[0,"separator"],[8],[0,"=\\""],[1,[25,"text-field",null,[["class","value","onchange","autoresize"],["string",[19,10,["separator"]],[25,"action",[[19,0,[]],[25,"mut",[[19,10,["separator"]]],null]],null],true]]],false],[0,"\\"\\n              "],[6,"span"],[9,"class","literal"],[7],[0,"prepend"],[8],[0,"="],[1,[25,"boolean-field",null,[["class","value","onchange"],["attribute",[19,10,["prepend"]],[25,"action",[[19,0,[]],[25,"mut",[[19,10,["prepend"]]],null]],null]]]],false],[0,"\\n              "],[6,"span"],[9,"class","literal"],[7],[0,"replace"],[8],[0,"="],[1,[25,"boolean-field",null,[["class","value","onchange"],["attribute",[19,10,["replace"]],[25,"action",[[19,0,[]],[25,"mut",[[19,10,["replace"]]],null]],null]]]],false],[0,"}}\\n            "],[8],[0,"\\n"]],"parameters":[10]},null],[0,"\\n          "],[6,"button"],[10,"onclick",[25,"action",[[19,0,[]],"add",[19,0,["model","tokens"]]],null],null],[7],[0,"Add title"],[8],[0,"\\n"]],"parameters":[9]},null],[0,"      "],[8],[0,"\\n    "],[8],[0,"\\n\\n    "],[6,"section"],[9,"id","usage"],[7],[0,"\\n      "],[6,"h2"],[7],[0,"Usage"],[8],[0,"\\n      "],[6,"div"],[9,"class","grid"],[7],[0,"\\n        "],[6,"div"],[9,"class","info"],[7],[0,"\\n          "],[6,"p"],[7],[0,"To start using ember-page-title, add the name of your application into "],[6,"code"],[9,"class","inline"],[7],[0,"application.hbs"],[8],[8],[0,"\\n          "],[6,"p"],[7],[0,"This sets the title for your application. When your application loads, you should see the title “"],[1,[20,["model","title"]],false],[0,"” appear in the window. Try changing the value below to change the title of this page."],[8],[0,"\\n\\n          "],[1,[25,"input",null,[["type","value","placeholder"],["text",[19,0,["model","title"]],"My App"]]],false],[0,"\\n        "],[8],[0,"\\n\\n"],[4,"window-pane",null,[["title"],["templates/application.hbs"]],{"statements":[[0,"          "],[6,"code"],[7],[1,[25,"highlight",["{{title \\"",[19,0,["model","title"]],"\\"}}"],null],false],[8],[0,"\\n"]],"parameters":[]},null],[0,"      "],[8],[0,"\\n\\n      "],[6,"div"],[9,"class","grid"],[7],[0,"\\n        "],[6,"div"],[9,"class","info"],[7],[0,"\\n          "],[6,"p"],[7],[0,"By default, using the helper will allow an interaction where additional titles are appended to the root:"],[8],[0,"\\n        "],[8],[0,"\\n\\n"],[4,"page-title-pane",null,null,{"statements":[[4,"component",[[19,8,["template"]]],[["title"],[[19,0,["model","title"]]]],{"statements":[[0,"            "],[6,"code"],[7],[1,[25,"highlight",["{{title \\"",[19,0,["model","title"]],"\\"}}"],null],false],[8],[0,"\\n"],[4,"component",[[19,8,["template"]]],[["title"],["Posts"]],{"statements":[[0,"              "],[6,"code"],[7],[1,[25,"highlight",["{{title \\"Posts\\"}}"],null],false],[8],[0,"\\n"],[4,"component",[[19,8,["template"]]],[["title"],[[19,0,["model","post","title"]]]],{"statements":[[0,"                "],[6,"code"],[7],[1,[25,"highlight",["{{title post.title}}"],null],false],[8],[0,"\\n"]],"parameters":[]},null]],"parameters":[]},null]],"parameters":[]},null]],"parameters":[8]},null],[0,"      "],[8],[0,"\\n\\n      "],[6,"div"],[9,"class","grid"],[7],[0,"\\n        "],[6,"div"],[9,"class","info"],[7],[0,"\\n          "],[6,"p"],[7],[0,"You can change the separator by specifying the "],[6,"code"],[9,"class","inline"],[7],[6,"span"],[9,"class","attribute"],[7],[0,"separator"],[8],[8],[0," attribute."],[8],[0,"\\n        "],[8],[0,"\\n\\n"],[4,"page-title-pane",null,null,{"statements":[[4,"component",[[19,7,["template"]]],[["title","separator"],[[19,0,["model","title"]]," > "]],{"statements":[[0,"            "],[6,"code"],[7],[1,[25,"highlight",["{{title \\"",[19,0,["model","title"]],"\\" separator=\\" > \\"}}"],null],false],[8],[0,"\\n"],[4,"component",[[19,7,["template"]]],[["title"],["Posts"]],{"statements":[[0,"              "],[6,"code"],[7],[1,[25,"highlight",["{{title \\"Posts\\"}}"],null],false],[8],[0,"\\n"],[4,"component",[[19,7,["template"]]],[["title"],[[19,0,["model","post","title"]]]],{"statements":[[0,"                "],[6,"code"],[7],[1,[25,"highlight",["{{title post.title}}"],null],false],[8],[0,"\\n"]],"parameters":[]},null]],"parameters":[]},null]],"parameters":[]},null]],"parameters":[7]},null],[0,"      "],[8],[0,"\\n\\n      "],[6,"div"],[9,"class","grid"],[7],[0,"\\n        "],[6,"div"],[9,"class","info"],[7],[0,"\\n          "],[6,"p"],[7],[0,"Separators can be changed at arbitrary levels:"],[8],[0,"\\n        "],[8],[0,"\\n\\n"],[4,"page-title-pane",null,null,{"statements":[[4,"component",[[19,6,["template"]]],[["title","separator"],[[19,0,["model","title"]],": "]],{"statements":[[0,"            "],[6,"code"],[7],[1,[25,"highlight",["{{title \\"",[19,0,["model","title"]],"\\" separator=\\": \\"}}"],null],false],[8],[0,"\\n"],[4,"component",[[19,6,["template"]]],[["title","separator"],["Posts"," > "]],{"statements":[[0,"              "],[6,"code"],[7],[1,[25,"highlight",["{{title \\"Posts\\" separator=\\" > \\"}}"],null],false],[8],[0,"\\n"],[4,"component",[[19,6,["template"]]],[["title"],[[19,0,["model","post","title"]]]],{"statements":[[0,"                "],[6,"code"],[7],[1,[25,"highlight",["{{title post.title}}"],null],false],[8],[0,"\\n"]],"parameters":[]},null]],"parameters":[]},null]],"parameters":[]},null]],"parameters":[6]},null],[0,"      "],[8],[0,"\\n\\n      "],[6,"div"],[9,"class","grid"],[7],[0,"\\n        "],[6,"div"],[9,"class","info"],[7],[0,"\\n          "],[6,"p"],[7],[0,"Titles can be prepended to the parent, by setting the "],[6,"code"],[9,"class","inline"],[7],[6,"span"],[9,"class","attribute"],[7],[0,"prepend"],[8],[8],[0," attribute to "],[6,"code"],[9,"class","inline"],[7],[1,[25,"highlight",["true"],null],false],[8],[0,"."],[8],[0,"\\n        "],[8],[0,"\\n\\n"],[4,"page-title-pane",null,null,{"statements":[[4,"component",[[19,5,["template"]]],[["title","prepend"],[[19,0,["model","title"]],true]],{"statements":[[0,"            "],[6,"code"],[7],[1,[25,"highlight",["{{title \\"",[19,0,["model","title"]],"\\" prepend=true}}"],null],false],[8],[0,"\\n"],[4,"component",[[19,5,["template"]]],[["title"],["Posts"]],{"statements":[[0,"              "],[6,"code"],[7],[1,[25,"highlight",["{{title \\"Posts\\"}}"],null],false],[8],[0,"\\n"],[4,"component",[[19,5,["template"]]],[["title"],[[19,0,["model","post","title"]]]],{"statements":[[0,"                "],[6,"code"],[7],[1,[25,"highlight",["{{title post.title}}"],null],false],[8],[0,"\\n"]],"parameters":[]},null]],"parameters":[]},null]],"parameters":[]},null]],"parameters":[5]},null],[0,"      "],[8],[0,"\\n\\n      "],[6,"div"],[9,"class","grid"],[7],[0,"\\n        "],[6,"div"],[9,"class","info"],[7],[0,"\\n          "],[6,"p"],[7],[0,"This allows one to swap the order at arbitrary levels:"],[8],[0,"\\n        "],[8],[0,"\\n\\n"],[4,"page-title-pane",null,null,{"statements":[[4,"component",[[19,4,["template"]]],[["title"],[[19,0,["model","title"]]]],{"statements":[[0,"            "],[6,"code"],[7],[1,[25,"highlight",["{{title \\"",[19,0,["model","title"]],"\\"}}"],null],false],[8],[0,"\\n"],[4,"component",[[19,4,["template"]]],[["title","prepend"],["Posts",true]],{"statements":[[0,"              "],[6,"code"],[7],[1,[25,"highlight",["{{title \\"Posts\\" prepend=true}}"],null],false],[8],[0,"\\n"],[4,"component",[[19,4,["template"]]],[["title"],[[19,0,["model","post","title"]]]],{"statements":[[0,"                "],[6,"code"],[7],[1,[25,"highlight",["{{title post.title}}"],null],false],[8],[0,"\\n"]],"parameters":[]},null]],"parameters":[]},null]],"parameters":[]},null]],"parameters":[4]},null],[0,"      "],[8],[0,"\\n\\n      "],[6,"div"],[9,"class","grid"],[7],[0,"\\n        "],[6,"div"],[9,"class","info"],[7],[0,"\\n          "],[6,"p"],[7],[0,"And for special templates that need to complete control over the title, set the "],[6,"code"],[9,"class","inline"],[7],[6,"span"],[9,"class","attribute"],[7],[0,"replace"],[8],[8],[0," attribute to "],[6,"code"],[9,"class","inline"],[7],[1,[25,"highlight",["true"],null],false],[8],[0,". This will only apply for that level."],[8],[0,"\\n        "],[8],[0,"\\n\\n"],[4,"page-title-pane",null,null,{"statements":[[4,"component",[[19,3,["template"]]],[["title"],[[19,0,["model","title"]]]],{"statements":[[0,"            "],[6,"code"],[7],[1,[25,"highlight",["{{title \\"",[19,0,["model","title"]],"\\"}}"],null],false],[8],[0,"\\n"],[4,"component",[[19,3,["template"]]],[["title","replace"],["Posts",true]],{"statements":[[0,"              "],[6,"code"],[7],[1,[25,"highlight",["{{title \\"Posts\\" replace=true}}"],null],false],[8],[0,"\\n"],[4,"component",[[19,3,["template"]]],[["title"],[[19,0,["model","post","title"]]]],{"statements":[[0,"                "],[6,"code"],[7],[1,[25,"highlight",["{{title model.post.title}}"],null],false],[8],[0,"\\n"]],"parameters":[]},null]],"parameters":[]},null]],"parameters":[]},null]],"parameters":[3]},null],[0,"      "],[8],[0,"\\n\\n      "],[6,"div"],[9,"class","grid"],[7],[0,"\\n        "],[6,"div"],[9,"class","info"],[7],[0,"\\n          "],[6,"p"],[7],[0,"In addition, there\'s no limit to the amount of titles you can put in a route:"],[8],[0,"\\n        "],[8],[0,"\\n\\n"],[4,"page-title-pane",null,null,{"statements":[[4,"component",[[19,2,["template"]]],[["title"],[[19,0,["model","title"]]]],{"statements":[[0,"            "],[6,"code"],[7],[1,[25,"highlight",["{{title \\"",[19,0,["model","title"]],"\\"}}"],null],false],[8],[0,"\\n"],[4,"component",[[19,2,["template"]]],[["title"],[[25,"concat",["Posts | ",[19,0,["model","post","title"]]],null]]],{"statements":[[0,"              "],[6,"code"],[7],[1,[25,"highlight",["{{title \\"Posts\\"}}"],null],false],[8],[0,"\\n              "],[6,"code"],[7],[1,[25,"highlight",["{{title model.post.title}}"],null],false],[8],[0,"\\n"]],"parameters":[]},null]],"parameters":[]},null]],"parameters":[2]},null],[0,"      "],[8],[0,"\\n\\n      "],[6,"div"],[9,"class","grid"],[7],[0,"\\n        "],[6,"div"],[9,"class","info"],[7],[0,"\\n          "],[6,"p"],[7],[0,"Dynamic tokens are available by providing multiple parameters to the helper:"],[8],[0,"\\n        "],[8],[0,"\\n"],[4,"page-title-pane",null,null,{"statements":[[4,"component",[[19,1,["template"]]],[["title"],["Tim Evans (@timmyce)"]],{"statements":[[0,"            "],[6,"code"],[7],[1,[25,"highlight",["{{title blogger.name \\" (\\" blogger.handle \\")\\"}}"],null],false],[8],[0,"\\n"]],"parameters":[]},null]],"parameters":[1]},null],[0,"      "],[8],[0,"\\n    "],[8],[0,"\\n  "],[8],[0,"\\n"],[8],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/index/template.hbs"}})}),define("dummy/initializers/autoresize",["exports","ember-autoresize/ext/text-field","ember-autoresize/ext/text-area"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"autoresize",initialize:function(){}}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/instance-initializers/head-browser",["exports","dummy/config/environment"],function(e,t){function n(){if(t.default["ember-cli-head"]&&t.default["ember-cli-head"].suppressBrowserRender)return!0
var e=document.querySelector('meta[name="ember-cli-head-start"]'),n=document.querySelector('meta[name="ember-cli-head-end"]')
if(e&&n){for(var l=e.nextSibling;l&&l!==n;)document.head.removeChild(l),l=e.nextSibling
document.head.removeChild(e),document.head.removeChild(n)}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=void 0,e.initialize=n,e.default={name:"head-browser",initialize:function(){"undefined"==typeof FastBoot&&n.apply(void 0,arguments)}}}),define("dummy/instance-initializers/page-title-setup",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"page-title-setup-browser",before:"head-browser",initialize:function(){if("undefined"==typeof FastBoot)for(var e=document.getElementsByTagName("title"),t=0;t<e.length;t++){var n=e[t]
n.parentNode.removeChild(n)}}}}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("dummy/router",["exports","dummy/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0})
var n=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
n.map(function(){this.route("about",function(){this.route("authors",function(){this.route("profile")})}),this.route("posts"),this.route("post",{path:"/posts/:post_id"}),this.route("author",{path:"/authors/:author_id"}),this.route("hollywood",{path:"/hollywood"}),this.route("feed",{path:"/feeds/:name"}),this.mount&&this.mount("addon-docs",{path:"/docs"})}),e.default=n}),define("dummy/routes/author",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({model:function(){return{name:"Tomster"}}})}),define("dummy/routes/feed",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0})
var t=Ember.String.capitalize
e.default=Ember.Route.extend({model:function(e){return new Ember.RSVP.Promise(function(n){setTimeout(function(){n({name:t(e.name),handle:"@"+e.name})},100)})}})})
define("dummy/routes/hollywood",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({model:function(){return{}}})}),define("dummy/routes/post",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0})
var t=Ember.RSVP,n=Ember.run.later
e.default=Ember.Route.extend({model:function(){var e=t.defer()
return n(function(){e.resolve({title:"Rails is Omakase"})},200),e.promise}})}),define("dummy/services/config",["exports","dummy/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Service.extend(t.default)}),define("dummy/services/head-data",["exports","ember-cli-head/services/head-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/services/page-title-list",["exports","ember-page-title/services/page-title-list","dummy/config/environment"],function(e,t,n){function l(e){return e.charAt(0).toUpperCase()+e.slice(1)}Object.defineProperty(e,"__esModule",{value:!0})
var a={};["separator","prepend","replace"].forEach(function(e){n.default.pageTitle&&n.default.pageTitle[e]&&(a["default"+l(e)]=n.default.pageTitle[e])}),e.default=t.default.extend(a)}),define("dummy/svgs",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={arrow:'<svg width="32" height="12" viewBox="0 0 32 12" xmlns="http://www.w3.org/2000/svg"><path d="M15.982 10.793L1 2.145l.542-.938L16 9.553l.287-.166 14.171-8.18.542.938-15.018 8.648z" fill="#FFF" fill-rule="evenodd"/></svg>',icon:'<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14 5v11H2V0h7l2 2v1h1l2 2zm-2 0v9H4V2h5v3h3z" fill="#FFF" fill-rule="evenodd"/></svg>'}}),define("dummy/templates/about",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"pSF83cUt",block:'{"symbols":[],"statements":[[1,[25,"page-title",["About My App"],[["replace","separator"],[true," > "]]],false],[0,"\\n"],[1,[18,"outlet"],false]],"hasEval":false}',meta:{moduleName:"dummy/templates/about.hbs"}})}),define("dummy/templates/about/authors",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"2s3NFZWS",block:'{"symbols":[],"statements":[[1,[25,"page-title",["Authors"],null],false],[0,"\\n\\n"],[1,[18,"outlet"],false]],"hasEval":false}',meta:{moduleName:"dummy/templates/about/authors.hbs"}})}),define("dummy/templates/about/authors/profile",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"YOg022BN",block:'{"symbols":[],"statements":[[1,[25,"page-title",["Profile"],null],false]],"hasEval":false}',meta:{moduleName:"dummy/templates/about/authors/profile.hbs"}})}),define("dummy/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"gzPxyhZA",block:'{"symbols":[],"statements":[[1,[18,"head-layout"],false],[0,"\\n"],[4,"unless",[[25,"equals",[[19,0,["currentRouteName"]],"index"],null]],null,{"statements":[[0,"  "],[1,[25,"page-title",["My App"],null],false],[0,"\\n"]],"parameters":[]},null],[1,[18,"outlet"],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/application.hbs"}})}),define("dummy/templates/author",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"rjjO7C58",block:'{"symbols":[],"statements":[[1,[25,"page-title",["Authors"],[["prepend","separator"],[true," < "]]],false],[0,"\\n"],[1,[25,"page-title",[[19,0,["model","name"]]],null],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/author.hbs"}})}),define("dummy/templates/feed",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"kGtkJmaD",block:'{"symbols":[],"statements":[[1,[25,"page-title",[[19,0,["model","name"]]," (",[19,0,["model","handle"]],")"],[["replace"],[true]]],false],[0,"\\n\\n\\n"],[4,"link-to",["feed","tomster"],[["id"],["tomster"]],{"statements":[[0,"@tomster"]],"parameters":[]},null],[0,"\\n"],[4,"link-to",["feed","zoey"],[["id"],["zoey"]],{"statements":[[0,"@zoey"]],"parameters":[]},null]],"hasEval":false}',meta:{moduleName:"dummy/templates/feed.hbs"}})}),define("dummy/templates/head",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"lLKcPdJx",block:'{"symbols":[],"statements":[[6,"title"],[7],[1,[20,["model","title"]],false],[8]],"hasEval":false}',meta:{moduleName:"dummy/templates/head.hbs"}})}),define("dummy/templates/hollywood",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"5MaQrE6d",block:'{"symbols":[],"statements":[[1,[25,"page-title",["Hollywood"],[["prepend","separator"],[true," ★ "]]],false],[0,"\\n"],[1,[25,"page-title",["Hollywood ★ Stars everywhere"],[["replace"],[true]]],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/hollywood.hbs"}})}),define("dummy/templates/loading",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"KlkDA//r",block:'{"symbols":[],"statements":[[0,"Loading..."]],"hasEval":false}',meta:{moduleName:"dummy/templates/loading.hbs"}})}),define("dummy/templates/post",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"czXouagi",block:'{"symbols":[],"statements":[[1,[25,"page-title",["Posts"],null],false],[0,"\\n"],[1,[25,"page-title",[[19,0,["model","title"]]],null],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/post.hbs"}})}),define("dummy/templates/posts",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"lIvBpfYt",block:'{"symbols":[],"statements":[[1,[25,"page-title",["Posts"],null],false]],"hasEval":false}',meta:{moduleName:"dummy/templates/posts.hbs"}})}),define("dummy/config/environment",[],function(){try{var e="dummy/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),n={default:JSON.parse(unescape(t))}
return Object.defineProperty(n,"__esModule",{value:!0}),n}catch(t){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("dummy/app").default.create({})
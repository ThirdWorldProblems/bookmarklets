!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var o=r(6),a=n(o),i=r(2),u=r(9),l=r(4),s=r(3);!function(){function e(e,t){var r={title:"INTERACTIVE INFO",element:l.getElementInfo(e),accName:u.getAccessibleName(e),role:s.getAriaRole(e)};return r}function t(e,t){t.color=null===e.accName?"maroon":"#008080"}var r=[{selector:"a",color:"olive",label:"a"},{selector:"audio[controls]",color:"olive",label:"audio"},{selector:"button",color:"olive",label:"button"},{selector:"embed",color:"purple",label:"embed"},{selector:"iframe",color:"teal",label:"iframe"},{selector:"img[usemap]",color:"maroon",label:"img"},{selector:"input",color:"navy",label:"input"},{selector:"keygen",color:"teal",label:"keygen"},{selector:"label",color:"purple",label:"label"},{selector:"object[usemap]",color:"gray",label:"object"},{selector:"select",color:"green",label:"select"},{selector:"textarea",color:"navy",label:"textarea"},{selector:"video[controls]",color:"navy",label:"video"},{selector:"meter",color:"maroon",label:"meter"},{selector:"output",color:"brown",label:"output"},{selector:"progress",color:"gray",label:"progress"},{selector:"area",color:"brown",label:"area"},{selector:"details",color:"purple",label:"details"},{selector:"svg",color:"green",label:"svg"},{selector:"[tabindex]",color:"teal",label:"tabindex"}],n=r.map(function(e){return e.selector}).join(", "),o={msgTitle:"Interactive",msgText:"No interactive elements ("+n+") found.",targetList:r,cssClass:i.interactiveCss,getInfo:e,evalInfo:t,dndFlag:!0},c=new a["default"]("a11yInteractive",o);c.run()}()},function(e,t,r){"use strict";function n(e){var t=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;return e.replace(t,"").replace(/\s+/g," ")}function o(e,t){var r=e.getAttribute(t);return null===r?"":n(r)}function a(e){var t=e.tagName.toLowerCase();switch(t){case"img":case"area":return!0;case"input":return e.type&&"image"===e.type}return!1}function i(e){var t=e.getAttribute("alt");return null!==t?0===n(t).length:!1}function u(e){var t=e.tagName.toLowerCase(),r=e.type;switch(t){case"input":return"hidden"!==r;case"button":case"keygen":case"meter":case"output":case"progress":case"select":case"textarea":return!0;default:return!1}}function l(e){function t(e,r){var i=void 0,u=void 0,l=void 0;switch(e.nodeType){case Node.ELEMENT_NODE:a(e)?(i=o(e,"alt"),i.length&&r.push(i)):v.isEmbeddedControl(e)?(l=v.getEmbeddedControlValue(e),l.length&&r.push(l)):e.hasChildNodes()&&Array.prototype.forEach.call(e.childNodes,function(e){t(e,r)});break;case Node.TEXT_NODE:u=n(e.textContent),u.length&&r.push(u)}return r}var r=void 0;return r=t(e,[]),r.length?r.join(" "):""}function s(e,t){var r=[],o=void 0;return Array.prototype.forEach.call(e.childNodes,function(e){switch(e.nodeType){case Node.ELEMENT_NODE:t(e)&&(o=l(e),o.length&&r.push(o));break;case Node.TEXT_NODE:o=n(e.textContent),o.length&&r.push(o)}}),r.length?r.join(" "):""}function c(e,t){var r=void 0;return r=o(e,t),r.length?{name:r,source:t}:null}function m(e){var t=e.getAttribute("alt");return null!==t?(t=n(t),t.length?{name:t,source:"alt"}:{name:"<empty>",source:"alt"}):null}function d(e){var t=void 0;return t=l(e),t.length?{name:t,source:"contents"}:null}function f(e){return e.length?{name:e,source:"default"}:null}function b(e,t){var r=e.querySelector(t);if(r){var n=l(r);if(n.length)return{name:n,source:t+" element"}}return null}function p(e){var t=void 0,r=void 0;return e.id&&(r=document.querySelector('[for="'+e.id+'"]'),r&&(t=l(r),t.length))?{name:t,source:"label [for=id]"}:"function"==typeof e.closest&&(r=e.closest("label"),r&&(t=l(r),t.length))?{name:t,source:"label container"}:null}function g(e){function t(e){return e.hasAttribute("open")}var r=void 0,n=void 0;if(n=e.querySelector("summary"),n&&(r=l(n)),t(e)){if(r+=s(e,function(e){return"summary"!==e.tagName.toLowerCase()}),r.length)return{name:r,source:"contents"}}else if(r.length)return{name:r,source:"summary element"};return null}Object.defineProperty(t,"__esModule",{value:!0}),t.getAttributeValue=o,t.hasEmptyAltText=i,t.isLabelableElement=u,t.getElementContents=l,t.nameFromAttribute=c,t.nameFromAltAttribute=m,t.nameFromContents=d,t.nameFromDefault=f,t.nameFromDescendant=b,t.nameFromLabelElement=p,t.nameFromDetailsOrSummary=g;var v=r(8)},function(e,t,r){"use strict";function n(e){function t(e){for(var t=!0;t;){var r=e;if(n=o=a=i=u=void 0,t=!1,r.nodeType===Node.DOCUMENT_NODE)return!0;var n=window.getComputedStyle(r,null),o=n.getPropertyValue("display"),a=n.getPropertyValue("visibility"),i=r.getAttribute("hidden"),u=r.getAttribute("aria-hidden");if("none"===o||"hidden"===a||null!==i||"true"===u)return!1;e=r.parentNode,t=!0}}return t(e)}function o(e,t){for(var r=0,n=e.firstElementChild;n;)t.indexOf(n.tagName)>-1&&(r+=1),n=n.nextElementSibling;return r}function a(e,t){return"function"==typeof e.closest?t.some(function(t){return null!==e.closest(t)}):!1}function i(e,t){var r=e.parentElement.tagName.toLowerCase();return r?t.some(function(e){return r===e}):!1}function u(e){var t=e.targetList,r=e.cssClass,o=e.getInfo,a=e.evalInfo,i=e.dndFlag,u=0;return t.forEach(function(e){var t=document.querySelectorAll(e.selector);"function"==typeof e.filter&&(t=Array.prototype.filter.call(t,e.filter)),Array.prototype.forEach.call(t,function(t){if(n(t)){var l=o(t,e);a&&a(l,e);var m=t.getBoundingClientRect(),d=s.createOverlay(e,m,r);i&&s.addDragAndDrop(d),d.title=c.formatInfo(l),document.body.appendChild(d),u+=1}})}),u}function l(e){var t="div."+e,r=document.querySelectorAll(t);Array.prototype.forEach.call(r,function(e){document.body.removeChild(e)})}Object.defineProperty(t,"__esModule",{value:!0}),t.countChildrenWithTagNames=o,t.isDescendantOf=a,t.hasParentWithName=i,t.addNodes=u,t.removeNodes=l;var s=r(10),c=r(4),m="a11yGfdXALm0";t.formsCss=m;var d="a11yGfdXALm1";t.headingsCss=d;var f="a11yGfdXALm2";t.imagesCss=f;var b="a11yGfdXALm3";t.landmarksCss=b;var p="a11yGfdXALm4";t.listsCss=p;var g="a11yGfdXALm5";t.interactiveCss=g},function(e,t,r){"use strict";function n(e){var t=e.parentElement,r=t.tagName.toLowerCase(),n=t.parentElement.tagName.toLowerCase();return"select"===r?!0:"optgroup"===r&&"select"===n?!0:"datalist"===r?!0:!1}function o(e){for(var t=e.split(" "),r=function(e){var r=t[e].toLowerCase(),n=s.find(function(e){return e===r});return n?{v:n}:void 0},n=0;n<t.length;n++){var o=r(n);if("object"==typeof o)return o.v}return null}function a(e){var t=e.tagName.toLowerCase(),r=e.type;if(e.hasAttribute("role"))return o(l.getAttributeValue(e,"role"));switch(t){case"a":if(e.hasAttribute("href"))return"link";break;case"area":if(e.hasAttribute("href"))return"link";break;case"article":return"article";case"aside":return"complementary";case"body":return"document";case"button":return"button";case"datalist":return"listbox";case"details":return"group";case"dialog":return"dialog";case"dl":return"list";case"fieldset":return"group";case"footer":if(!u.isDescendantOf(e,["article","section"]))return"contentinfo";break;case"form":return"form";case"h1":return"heading";case"h2":return"heading";case"h3":return"heading";case"h4":return"heading";case"h5":return"heading";case"h6":return"heading";case"header":if(!u.isDescendantOf(e,["article","section"]))return"banner";break;case"hr":return"separator";case"img":if(!l.hasEmptyAltText(e))return"img";break;case"input":if("button"===r)return"button";if("checkbox"===r)return"checkbox";if("email"===r)return e.hasAttribute("list")?"combobox":"textbox";if("image"===r)return"button";if("number"===r)return"spinbutton";if("password"===r)return"textbox";if("radio"===r)return"radio";if("range"===r)return"slider";if("reset"===r)return"button";if("search"===r)return e.hasAttribute("list")?"combobox":"textbox";if("submit"===r)return"button";if("tel"===r)return e.hasAttribute("list")?"combobox":"textbox";if("text"===r)return e.hasAttribute("list")?"combobox":"textbox";if("url"===r)return e.hasAttribute("list")?"combobox":"textbox";break;case"li":if(u.hasParentWithName(e,["ol","ul"]))return"listitem";break;case"link":if(e.hasAttribute("href"))return"link";break;case"main":return"main";case"menu":if("toolbar"===r)return"toolbar";break;case"menuitem":if("command"===r)return"menuitem";if("checkbox"===r)return"menuitemcheckbox";if("radio"===r)return"menuitemradio";break;case"meter":return"progressbar";case"nav":return"navigation";case"ol":return"list";case"option":if(n(e))return"option";break;case"output":return"status";case"progress":return"progressbar";case"section":return"region";case"select":return"listbox";case"summary":return"button";case"tbody":return"rowgroup";case"tfoot":return"rowgroup";case"thead":return"rowgroup";case"textarea":return"textbox";case"th":return"columnheader";case"ul":return"list"}return null}function i(e){var t=a(e);if(null===t)return!1;var r=["button","cell","checkbox","columnheader","directory","gridcell","heading","link","listitem","menuitem","menuitemcheckbox","menuitemradio","option","radio","row","rowgroup","rowheader","switch","tab","text","tooltip","treeitem"],n=r.find(function(e){return e===t});return"undefined"!=typeof n}Object.defineProperty(t,"__esModule",{value:!0}),t.getValidRole=o,t.getAriaRole=a,t.nameFromIncludesContents=i;var u=r(2),l=r(1),s=["application","banner","complementary","contentinfo","form","main","navigation","search","alert","alertdialog","button","checkbox","dialog","gridcell","link","log","marquee","menuitem","menuitemcheckbox","menuitemradio","option","progressbar","radio","scrollbar","searchbox","slider","spinbutton","status","switch","tab","tabpanel","textbox","timer","tooltip","treeitem","combobox","grid","listbox","menu","menubar","radiogroup","tablist","tree","treegrid","article","cell","columnheader","definition","directory","document","group","heading","img","list","listitem","math","none","note","presentation","region","row","rowgroup","rowheader","separator","table","text","toolbar"]},function(e,t,r){"use strict";function n(e){var t=e.tagName.toLowerCase(),r=t;if("input"===t){var n=e.type;n&&n.length&&(r+=' [type="'+n+'"]')}if("label"===t){var o=a.getAttributeValue(e,"for");o.length&&(r+=' [for="'+o+'"]')}if(a.isLabelableElement(e)){var i=e.id;i&&i.length&&(r+=' [id="'+i+'"]')}if(e.hasAttribute("role")){var u=a.getAttributeValue(e,"role");u.length&&(r+=' [role="'+u+'"]')}return r}function o(e){var t="",r=e.title,n=e.element,o=e.accName,a=e.role,i=e.props;return t+="=== "+r+" ===",n&&(t+="\nELEMENT: "+n),o&&(t+="\nACC. NAME: "+o.name+"\nFROM: "+o.source),a&&(t+="\nROLE: "+a),i&&(t+="\nPROPERTIES: "+i),t}Object.defineProperty(t,"__esModule",{value:!0}),t.getElementInfo=n,t.formatInfo=o;var a=r(1)},function(e,t){"use strict";function r(){var e,t="undefined"==typeof window.pageXOffset?(((e=document.documentElement)||(e=document.body.parentNode))&&"number"==typeof e.ScrollLeft?e:document.body).ScrollLeft:window.pageXOffset,r="undefined"==typeof window.pageYOffset?(((e=document.documentElement)||(e=document.body.parentNode))&&"number"==typeof e.ScrollTop?e:document.body).ScrollTop:window.pageYOffset;return{x:t,y:r}}function n(e,t,n){function o(t){t||(t=window.event);var n=r();e.style.left=t.clientX+n.x-m+"px",e.style.top=t.clientY+n.y-d+"px",e.style.cursor="move",t.stopPropagation?t.stopPropagation():t.cancelBubble=!0}function a(t){t||(t=window.event),e.style.cursor="grab",e.style.cursor="-moz-grab",e.style.cursor="-webkit-grab",document.removeEventListener?(document.removeEventListener("mouseup",a,!0),document.removeEventListener("mousemove",o,!0)):document.detachEvent&&(e.detachEvent("onlosecapture",a),e.detachEvent("onmouseup",a),e.detachEvent("onmousemove",o),e.releaseCapture()),t.stopPropagation?t.stopPropagation():t.cancelBubble=!0}var i=r(),u=n.clientX+i.x,l=n.clientY+i.y,s=e.offsetLeft,c=e.offsetTop,m=u-s,d=l-c;t&&t(e),document.addEventListener?(document.addEventListener("mousemove",o,!0),document.addEventListener("mouseup",a,!0)):document.attachEvent&&(e.setCapture(),e.attachEvent("onmousemove",o),e.attachEvent("onmouseup",a),e.attachEvent("onlosecapture",a)),n.stopPropagation?n.stopPropagation():n.cancelBubble=!0,n.preventDefault?n.preventDefault():n.returnValue=!1}Object.defineProperty(t,"__esModule",{value:!0}),t.getScrollOffsets=r,t.drag=n},function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(2),u=r(7),l=n(u),s=function(){function e(t,r){var n=this;return o(this,e),"object"==typeof window[t]?window[t]:(this.cssClass=r.cssClass,this.msgTitle=r.msgTitle,this.msgText=r.msgText,this.params=r,this.show=!1,window.addEventListener("resize",function(e){i.removeNodes(n.cssClass),l.resize(),n.show=!1}),void(window[t]=this))}return a(e,[{key:"run",value:function(){l.hide(),this.show=!this.show,this.show?0===i.addNodes(this.params)&&(l.show(this.msgTitle,this.msgText),this.show=!1):i.removeNodes(this.cssClass)}}]),e}();t["default"]=s,e.exports=t["default"]},function(e,t,r){"use strict";function n(e){var t=window.innerWidth/3.2,r=window.innerWidth/2-t/2,n=s.getScrollOffsets();e.style.width=t+"px",e.style.left=n.x+r+"px",e.style.top=n.y+30+"px"}function o(e){var t=document.createElement("div"),r=document.createElement("button");return t.className="oaa-message-dialog",n(t),r.onclick=e,t.appendChild(r),document.body.appendChild(t),t}function a(e){e&&document.body.removeChild(e)}function i(e,t){var r,n;window[c]||(window[c]=o(u)),r=document.createElement("h2"),r.innerHTML=e,window[c].appendChild(r),n=document.createElement("div"),n.innerHTML=t,window[c].appendChild(n)}function u(){window[c]&&(a(window[c]),delete window[c])}function l(){window[c]&&n(window[c])}Object.defineProperty(t,"__esModule",{value:!0}),t.show=i,t.hide=u,t.resize=l;var s=r(5),c="a11yMessageDialog"},function(e,t,r){"use strict";function n(e){var t=["email","password","search","tel","text","url"],r=e.tagName.toLowerCase(),n=e.type;return"input"===r&&-1!==t.indexOf(n)?e.value:"textarea"===r?m.getElementContents(e):""}function o(e){var t=["email","search","tel","text","url"],r=e.tagName.toLowerCase(),n=e.type;return"input"===r&&-1!==t.indexOf(n)?e.value:""}function a(e){var t=e.tagName.toLowerCase(),r=e.type;return"input"===t&&"range"===r?e.value:""}function i(e){var t=e.tagName.toLowerCase(),r=e.type;return"input"===t&&"number"===r?e.value:""}function u(e){var t=e.tagName.toLowerCase();if("select"===t){for(var r=[],n=e.selectedOptions,o=0;o<n.length;o++){var a=n[o];a.value.length&&r.push(a.value)}if(r.length)return r.join(" ")}return""}function l(e){var t=["textbox","combobox","listbox","slider","spinbutton"],r=c.getAriaRole(e);return-1!==t.indexOf(r)}function s(e){var t=c.getAriaRole(e);switch(t){case"textbox":return n(e);case"combobox":return o(e);case"listbox":return u(e);case"slider":return a(e);case"spinbutton":return i(e)}return""}Object.defineProperty(t,"__esModule",{value:!0}),t.isEmbeddedControl=l,t.getEmbeddedControlValue=s;var c=r(3),m=r(1)},function(e,t,r){"use strict";function n(e,t){for(var r=!0;r;){var n=e,o=t;a=i=l=void 0,r=!1;var a=void 0,i=void 0,l=void 0;if("function"!=typeof n.closest||!(a=n.closest("fieldset")))return o;i=a.querySelector("legend"),i&&(l=u.getElementContents(i),l.length&&(o?(o.name=l+" "+o.name,o.source="fieldset/legend + "+o.source):o={name:l,source:"fieldset/legend"})),e=a.parentNode,t=o,r=!0}}function o(e){var t=arguments.length<=1||void 0===arguments[1]?!1:arguments[1],r=e.tagName.toLowerCase(),n=l.getAriaRole(e),o=null;if(n&&("presentation"===n||"none"===n))return null;switch(r){case"input":switch(e.type){case"hidden":t&&(o=u.nameFromLabelElement(e));break;case"email":case"password":case"search":case"tel":case"text":case"url":o=u.nameFromLabelElement(e),null===o&&(o=u.nameFromAttribute(e,"placeholder"));break;case"button":o=u.nameFromAttribute(e,"value");break;case"reset":o=u.nameFromAttribute(e,"value"),null===o&&(o=u.nameFromDefault("Reset"));break;case"submit":o=u.nameFromAttribute(e,"value"),null===o&&(o=u.nameFromDefault("Submit"));break;case"image":o=u.nameFromAltAttribute(e),null===o&&(o=u.nameFromAttribute(e,"value"));break;default:o=u.nameFromLabelElement(e)}break;case"button":o=u.nameFromContents(e);break;case"label":o=u.nameFromContents(e);break;case"keygen":case"meter":case"output":case"progress":case"select":o=u.nameFromLabelElement(e);break;case"textarea":o=u.nameFromLabelElement(e),null===o&&(o=u.nameFromAttribute(e,"placeholder"));break;case"audio":o={name:"NOT YET IMPLEMENTED",source:""};break;case"embed":o={name:"NOT YET IMPLEMENTED",source:""};break;case"iframe":o=u.nameFromAttribute(e,"title");break;case"img":case"area":o=u.nameFromAltAttribute(e);break;case"object":o={name:"NOT YET IMPLEMENTED",source:""};break;case"svg":o=u.nameFromDescendant(e,"title");break;case"video":o={name:"NOT YET IMPLEMENTED",source:""};break;case"a":o=u.nameFromContents(e);break;case"details":o=u.nameFromDetailsOrSummary(e);break;case"figure":o=u.nameFromDescendant(e,"figcaption");break;case"table":o=u.nameFromDescendant(e,"caption");break;default:(l.nameFromIncludesContents(e)||t)&&(o=u.nameFromContents(e))}return null===o&&(o=u.nameFromAttribute(e,"title")),o}function a(e){var t=e.getAttribute("aria-labelledby"),r=void 0,n=void 0,o=void 0,a=void 0,u=[];if(t&&t.length)for(r=t.split(" "),n=0;n<r.length;n++)o=document.getElementById(r[n]),a=i(o,!0),a&&a.name.length&&u.push(a.name);return u.length?{name:u.join(" "),source:"aria-labelledby"}:null}function i(e){var t=arguments.length<=1||void 0===arguments[1]?!1:arguments[1],r=null;return t||(r=a(e)),null===r&&(r=u.nameFromAttribute(e,"aria-label")),null===r&&(r=o(e,t)),u.isLabelableElement(e)&&(r=n(e,r)),r}Object.defineProperty(t,"__esModule",{value:!0}),t.nameFromNativeSemantics=o,t.getAccessibleName=i;var u=r(1),l=r(3)},function(e,t,r){"use strict";function n(e,t,r){var n=document.createElement("div"),o=a.getScrollOffsets(),u="background-color: "+e.color,l=34,s=27;return n.setAttribute("class",[r,"oaa-element-overlay"].join(" ")),n.startLeft=t.left+o.x+"px",n.startTop=t.top+o.y+"px",n.style.left=n.startLeft,n.style.top=n.startTop,n.style.width=Math.max(t.width,l)+"px",n.style.height=Math.max(t.height,s)+"px",n.style.borderColor=e.color,n.style.zIndex=i,n.innerHTML='<div style="'+u+'">'+e.label+"</div>",n}function o(e){function t(e){var t=100;e.style.zIndex=i+=t}function r(e){e.style.left=e.startLeft,e.style.top=e.startTop}var n=e.firstChild;n.onmousedown=function(e){a.drag(this.parentNode,t,e)},n.ondblclick=function(e){r(this.parentNode)}}Object.defineProperty(t,"__esModule",{value:!0}),t.createOverlay=n,t.addDragAndDrop=o;var a=r(5),i=1e5}]);
this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["attribute-filter"]=function(e){function t(t){for(var n,l,a=t[0],s=t[1],i=t[2],b=0,d=[];b<a.length;b++)l=a[b],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&d.push(o[l][0]),o[l]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(u&&u(t);d.length;)d.shift()();return r.push.apply(r,i||[]),c()}function c(){for(var e,t=0;t<r.length;t++){for(var c=r[t],n=!0,a=1;a<c.length;a++){var s=c[a];0!==o[s]&&(n=!1)}n&&(r.splice(t--,1),e=l(l.s=c[0]))}return e}var n={},o={18:0},r=[];function l(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,l),c.l=!0,c.exports}l.m=e,l.c=n,l.d=function(e,t,c){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(l.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(c,n,function(t){return e[t]}.bind(null,n));return c},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var a=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var i=0;i<a.length;i++)t(a[i]);var u=s;return r.push([787,0]),c()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},10:function(e,t){e.exports=window.wp.data},102:function(e,t,c){"use strict";c.d(t,"a",(function(){return b})),c.d(t,"b",(function(){return d})),c.d(t,"c",(function(){return p}));var n=c(19),o=c(10),r=c(0),l=c(31),a=c.n(l),s=c(52),i=c(142),u=c(68);const b=e=>{const t=Object(u.a)();e=e||t;const c=Object(o.useSelect)(t=>t(n.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0),[e]),{setValueForQueryContext:l}=Object(o.useDispatch)(n.QUERY_STATE_STORE_KEY);return[c,Object(r.useCallback)(t=>{l(e,t)},[e,l])]},d=(e,t,c)=>{const l=Object(u.a)();c=c||l;const a=Object(o.useSelect)(o=>o(n.QUERY_STATE_STORE_KEY).getValueForQueryKey(c,e,t),[c,e]),{setQueryValue:s}=Object(o.useDispatch)(n.QUERY_STATE_STORE_KEY);return[a,Object(r.useCallback)(t=>{s(c,e,t)},[c,e,s])]},p=(e,t)=>{const c=Object(u.a)();t=t||c;const[n,o]=b(t),l=Object(s.a)(n),d=Object(s.a)(e),p=Object(i.a)(d),m=Object(r.useRef)(!1);return Object(r.useEffect)(()=>{a()(p,d)||(o(Object.assign({},l,d)),m.current=!0)},[l,d,p,o]),m.current?[n,o]:[e,o]}},11:function(e,t){e.exports=window.wp.apiFetch},115:function(e,t){},116:function(e,t){e.exports=window.wp.coreData},117:function(e,t){},12:function(e,t){e.exports=window.wp.compose},121:function(e,t,c){"use strict";var n=c(0),o=c(6),r=c(1),l=c(4);function a(e){let{level:t}=e;const c={1:"M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z",2:"M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z",3:"M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z",4:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm10-2h-1v2h-2v-2h-5v-2l4-6h3v6h1v2zm-3-2V7l-2.8 4H16z",5:"M12.1 12.2c.4.3.7.5 1.1.7.4.2.9.3 1.3.3.5 0 1-.1 1.4-.4.4-.3.6-.7.6-1.1 0-.4-.2-.9-.6-1.1-.4-.3-.9-.4-1.4-.4H14c-.1 0-.3 0-.4.1l-.4.1-.5.2-1-.6.3-5h6.4v1.9h-4.3L14 8.8c.2-.1.5-.1.7-.2.2 0 .5-.1.7-.1.5 0 .9.1 1.4.2.4.1.8.3 1.1.6.3.2.6.6.8.9.2.4.3.9.3 1.4 0 .5-.1 1-.3 1.4-.2.4-.5.8-.9 1.1-.4.3-.8.5-1.3.7-.5.2-1 .3-1.5.3-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1-.1-.1 1-1.5 1-1.5zM9 15H7v-4H3v4H1V5h2v4h4V5h2v10z",6:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm8.6-7.5c-.2-.2-.5-.4-.8-.5-.6-.2-1.3-.2-1.9 0-.3.1-.6.3-.8.5l-.6.9c-.2.5-.2.9-.2 1.4.4-.3.8-.6 1.2-.8.4-.2.8-.3 1.3-.3.4 0 .8 0 1.2.2.4.1.7.3 1 .6.3.3.5.6.7.9.2.4.3.8.3 1.3s-.1.9-.3 1.4c-.2.4-.5.7-.8 1-.4.3-.8.5-1.2.6-1 .3-2 .3-3 0-.5-.2-1-.5-1.4-.9-.4-.4-.8-.9-1-1.5-.2-.6-.3-1.3-.3-2.1s.1-1.6.4-2.3c.2-.6.6-1.2 1-1.6.4-.4.9-.7 1.4-.9.6-.3 1.1-.4 1.7-.4.7 0 1.4.1 2 .3.5.2 1 .5 1.4.8 0 .1-1.3 1.4-1.3 1.4zm-2.4 5.8c.2 0 .4 0 .6-.1.2 0 .4-.1.5-.2.1-.1.3-.3.4-.5.1-.2.1-.5.1-.7 0-.4-.1-.8-.4-1.1-.3-.2-.7-.3-1.1-.3-.3 0-.7.1-1 .2-.4.2-.7.4-1 .7 0 .3.1.7.3 1 .1.2.3.4.4.6.2.1.3.3.5.3.2.1.5.2.7.1z"};return c.hasOwnProperty(t)?Object(n.createElement)(l.SVG,{width:"20",height:"20",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},Object(n.createElement)(l.Path,{d:c[t]})):null}class s extends n.Component{createLevelControl(e,t,c){const o=e===t;return{icon:Object(n.createElement)(a,{level:e}),title:Object(r.sprintf)(
/* translators: %s: heading level e.g: "2", "3", "4" */
Object(r.__)("Heading %d",'woocommerce'),e),isActive:o,onClick:()=>c(e)}}render(){const{isCollapsed:e=!0,minLevel:t,maxLevel:c,selectedLevel:r,onChange:s}=this.props;return Object(n.createElement)(l.ToolbarGroup,{isCollapsed:e,icon:Object(n.createElement)(a,{level:r}),controls:Object(o.range)(t,c).map(e=>this.createLevelControl(e,r,s))})}}t.a=s},126:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var n=c(0);const o=()=>{const[,e]=Object(n.useState)();return Object(n.useCallback)(t=>{e(()=>{throw t})},[])}},128:function(e,t,c){"use strict";var n=c(0),o=c(1),r=c(37);c(330),t.a=e=>{let{name:t,count:c}=e;return Object(n.createElement)(n.Fragment,null,t,Number.isFinite(c)&&Object(n.createElement)(r.a,{label:c,screenReaderLabel:Object(o.sprintf)(
/* translators: %s number of products. */
Object(o._n)("%s product","%s products",c,'woocommerce'),c),wrapperElement:"span",wrapperProps:{className:"wc-filter-element-label-list-count"}}))}},13:function(e,t){e.exports=window.wp.url},14:function(e,t){e.exports=window.wp.blocks},140:function(e,t,c){"use strict";var n=c(0),o=(c(2),c(9)),r=c(12),l=c(1);c(194),t.a=Object(r.withInstanceId)(e=>{let{className:t,headingLevel:c,onChange:r,heading:a,instanceId:s}=e;const i="h"+c;return Object(n.createElement)(i,{className:t},Object(n.createElement)("label",{className:"screen-reader-text",htmlFor:"block-title-"+s},Object(l.__)("Block title",'woocommerce')),Object(n.createElement)(o.PlainText,{id:"block-title-"+s,className:"wc-block-editor-components-title",value:a,onChange:r}))})},142:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var n=c(8);function o(e,t){const c=Object(n.useRef)();return Object(n.useEffect)(()=>{c.current===e||t&&!t(e,c.current)||(c.current=e)},[e,t]),c.current}},149:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));var n=c(19),o=c(10),r=c(0),l=c(52),a=c(126);const s=e=>{const{namespace:t,resourceName:c,resourceValues:s=[],query:i={},shouldSelect:u=!0}=e;if(!t||!c)throw new Error("The options object must have valid values for the namespace and the resource properties.");const b=Object(r.useRef)({results:[],isLoading:!0}),d=Object(l.a)(i),p=Object(l.a)(s),m=Object(a.a)(),w=Object(o.useSelect)(e=>{if(!u)return null;const o=e(n.COLLECTIONS_STORE_KEY),r=[t,c,d,p],l=o.getCollectionError(...r);return l&&m(l),{results:o.getCollection(...r),isLoading:!o.hasFinishedResolution("getCollection",r)}},[t,c,p,d,u]);return null!==w&&(b.current=w),b.current}},161:function(e,t,c){"use strict";var n=c(0),o=c(18);const r=Object(n.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(n.createElement)("mask",{id:"external-mask",width:"24",height:"24",x:"0",y:"0",maskUnits:"userSpaceOnUse"},Object(n.createElement)("path",{fill:"#fff",d:"M6.3431 6.3431v1.994l7.8984.0072-8.6055 8.6054 1.4142 1.4143 8.6055-8.6055.0071 7.8984h1.994V6.3431H6.3431z"})),Object(n.createElement)("g",{mask:"url(#external-mask)"},Object(n.createElement)("path",{d:"M0 0h24v24H0z"})));t.a=r},179:function(e,t,c){"use strict";var n=c(0),o=c(1),r=(c(2),c(5)),l=c.n(r),a=c(37);c(241);const s=e=>{let{className:t,disabled:c,label:
/* translators: Submit button text for filters. */
r=Object(o.__)("Go",'woocommerce'),onClick:s,screenReaderLabel:i=Object(o.__)("Apply filter",'woocommerce')}=e;return Object(n.createElement)("button",{type:"submit",className:l()("wc-block-filter-submit-button","wc-block-components-filter-submit-button",t),disabled:c,onClick:s},Object(n.createElement)(a.a,{label:r,screenReaderLabel:i}))};s.defaultProps={disabled:!1},t.a=s},18:function(e,t){e.exports=window.wp.primitives},19:function(e,t){e.exports=window.wc.wcBlocksData},194:function(e,t){},195:function(e,t){},20:function(e,t){e.exports=window.wp.htmlEntities},21:function(e,t){e.exports=window.moment},241:function(e,t){},246:function(e,t,c){"use strict";c.d(t,"a",(function(){return r})),c.d(t,"b",(function(){return l}));var n=c(3);const o=Object(n.getSetting)("attributes",[]).reduce((e,t)=>{const c=(n=t)&&n.attribute_name?{id:parseInt(n.attribute_id,10),name:n.attribute_name,taxonomy:"pa_"+n.attribute_name,label:n.attribute_label}:null;var n;return c.id&&e.push(c),e},[]),r=e=>{if(e)return o.find(t=>t.id===e)},l=e=>{if(e)return o.find(t=>t.taxonomy===e)}},247:function(e,t,c){"use strict";c.d(t,"a",(function(){return o})),c.d(t,"b",(function(){return r}));var n=c(6);const o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:()=>{},c=arguments.length>2?arguments[2]:void 0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";const r=e.filter(e=>e.attribute===c.taxonomy),l=r.length?r[0]:null;if(!(l&&l.slug&&Array.isArray(l.slug)&&l.slug.includes(o)))return;const a=l.slug.filter(e=>e!==o),s=e.filter(e=>e.attribute!==c.taxonomy);a.length>0&&(l.slug=a.sort(),s.push(l)),t(Object(n.sortBy)(s,"attribute"))},r=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:()=>{},c=arguments.length>2?arguments[2]:void 0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"in";const l=e.filter(e=>e.attribute!==c.taxonomy);0===o.length?t(l):(l.push({attribute:c.taxonomy,operator:r,slug:o.map(e=>{let{slug:t}=e;return t}).sort()}),t(Object(n.sortBy)(l,"attribute")))}},248:function(e,t,c){"use strict";var n=c(0),o=c(1),r=c(5),l=c.n(r);c(332),t.a=e=>{let{className:t,onChange:c=(()=>{}),options:r=[],checked:a=[],isLoading:s=!1,isDisabled:i=!1,limit:u=10}=e;const[b,d]=Object(n.useState)(!1),p=Object(n.useMemo)(()=>[...Array(5)].map((e,t)=>Object(n.createElement)("li",{key:t,style:{width:Math.floor(75*Math.random())+25+"%"}})),[]),m=Object(n.useMemo)(()=>{const e=r.length-u;return!b&&Object(n.createElement)("li",{key:"show-more",className:"show-more"},Object(n.createElement)("button",{onClick:()=>{d(!0)},"aria-expanded":!1,"aria-label":Object(o.sprintf)(
/* translators: %s is referring the remaining count of options */
Object(o._n)("Show %s more option","Show %s more options",e,'woocommerce'),e)},Object(o.sprintf)(
/* translators: %s number of options to reveal. */
Object(o._n)("Show %s more","Show %s more",e,'woocommerce'),e)))},[r,u,b]),w=Object(n.useMemo)(()=>b&&Object(n.createElement)("li",{key:"show-less",className:"show-less"},Object(n.createElement)("button",{onClick:()=>{d(!1)},"aria-expanded":!0,"aria-label":Object(o.__)("Show less options",'woocommerce')},Object(o.__)("Show less",'woocommerce'))),[b]),g=Object(n.useMemo)(()=>{const e=r.length>u+5;return Object(n.createElement)(n.Fragment,null,r.map((t,o)=>Object(n.createElement)(n.Fragment,{key:t.value},Object(n.createElement)("li",e&&!b&&o>=u&&{hidden:!0},Object(n.createElement)("input",{type:"checkbox",id:t.value,value:t.value,onChange:e=>{c(e.target.value)},checked:a.includes(t.value),disabled:i}),Object(n.createElement)("label",{htmlFor:t.value},t.label)),e&&o===u-1&&m)),e&&w)},[r,c,a,b,u,w,m,i]),h=l()("wc-block-checkbox-list","wc-block-components-checkbox-list",{"is-loading":s},t);return Object(n.createElement)("ul",{className:h},s?p:g)}},256:function(e,t,c){"use strict";var n=c(7),o=c.n(n),r=c(0),l=c(5),a=c.n(l),s=c(1),i=c(55),u=c(331);c(195);var b=e=>{let{text:t,screenReaderText:c="",element:n="li",className:l="",radius:s="small",children:i=null,...u}=e;const b=n,d=a()(l,"wc-block-components-chip","wc-block-components-chip--radius-"+s),p=Boolean(c&&c!==t);return Object(r.createElement)(b,o()({className:d},u),Object(r.createElement)("span",{"aria-hidden":p,className:"wc-block-components-chip__text"},t),p&&Object(r.createElement)("span",{className:"screen-reader-text"},c),i)};t.a=e=>{let{ariaLabel:t="",className:c="",disabled:n=!1,onRemove:l=(()=>{}),removeOnAnyClick:d=!1,text:p,screenReaderText:m="",...w}=e;const g=d?"span":"button";if(!t){const e=m&&"string"==typeof m?m:p;t="string"!=typeof e?
/* translators: Remove chip. */
Object(s.__)("Remove",'woocommerce'):Object(s.sprintf)(
/* translators: %s text of the chip to remove. */
Object(s.__)('Remove "%s"','woocommerce'),e)}const h={"aria-label":t,disabled:n,onClick:l,onKeyDown:e=>{"Backspace"!==e.key&&"Delete"!==e.key||l()}},O=d?h:{},j=d?{"aria-hidden":!0}:h;return Object(r.createElement)(b,o()({},w,O,{className:a()(c,"is-removable"),element:d?"button":w.element,screenReaderText:m,text:p}),Object(r.createElement)(g,o()({className:"wc-block-components-chip__remove"},j),Object(r.createElement)(i.a,{className:"wc-block-components-chip__remove-icon",srcElement:u.a,size:16})))}},3:function(e,t){e.exports=window.wc.wcSettings},30:function(e,t){e.exports=window.wp.dataControls},31:function(e,t){e.exports=window.wp.isShallowEqual},330:function(e,t){},331:function(e,t,c){"use strict";var n=c(7),o=c.n(n),r=c(0),l=c(18);const a=Object(r.createElement)(e=>{let{className:t,size:c,...n}=e;return Object(r.createElement)(l.SVG,o()({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",className:t,width:c,height:c},n),Object(r.createElement)("path",{d:"M14.95 6.46L11.41 10l3.54 3.54-1.41 1.41L10 11.42l-3.53 3.53-1.42-1.42L8.58 10 5.05 6.47l1.42-1.42L10 8.58l3.54-3.53z"}))},null);t.a=a},332:function(e,t){},37:function(e,t,c){"use strict";var n=c(0),o=c(5),r=c.n(o);t.a=e=>{let t,{label:c,screenReaderLabel:o,wrapperElement:l,wrapperProps:a={}}=e;const s=null!=c,i=null!=o;return!s&&i?(t=l||"span",a={...a,className:r()(a.className,"screen-reader-text")},Object(n.createElement)(t,a,o)):(t=l||n.Fragment,s&&i&&c!==o?Object(n.createElement)(t,a,Object(n.createElement)("span",{"aria-hidden":"true"},c),Object(n.createElement)("span",{className:"screen-reader-text"},o)):Object(n.createElement)(t,a,c))}},38:function(e,t){e.exports=window.wp.keycodes},4:function(e,t){e.exports=window.wp.components},45:function(e,t){e.exports=window.wp.hooks},488:function(e,t,c){"use strict";c.d(t,"a",(function(){return u}));var n=c(0),o=c(365),r=c(6),l=c(52),a=c(102),s=c(149),i=c(68);const u=e=>{let{queryAttribute:t,queryPrices:c,queryStock:u,queryState:b}=e,d=Object(i.a)();d+="-collection-data";const[p]=Object(a.a)(d),[m,w]=Object(a.b)("calculate_attribute_counts",[],d),[g,h]=Object(a.b)("calculate_price_range",null,d),[O,j]=Object(a.b)("calculate_stock_status_counts",null,d),f=Object(l.a)(t||{}),v=Object(l.a)(c),_=Object(l.a)(u);Object(n.useEffect)(()=>{"object"==typeof f&&Object.keys(f).length&&(m.find(e=>e.taxonomy===f.taxonomy)||w([...m,f]))},[f,m,w]),Object(n.useEffect)(()=>{g!==v&&void 0!==v&&h(v)},[v,h,g]),Object(n.useEffect)(()=>{O!==_&&void 0!==_&&j(_)},[_,j,O]);const[k,y]=Object(n.useState)(!1),[E]=Object(o.a)(k,200);k||y(!0);const x=Object(n.useMemo)(()=>(e=>{const t=e;return e.calculate_attribute_counts&&(t.calculate_attribute_counts=Object(r.sortBy)(e.calculate_attribute_counts.map(e=>{let{taxonomy:t,queryType:c}=e;return{taxonomy:t,query_type:c}}),["taxonomy","query_type"])),t})(p),[p]);return Object(s.a)({namespace:"/wc/store",resourceName:"products/collection-data",query:{...b,page:void 0,per_page:void 0,orderby:void 0,order:void 0,...x},shouldSelect:E})}},51:function(e,t){e.exports=window.wp.deprecated},52:function(e,t,c){"use strict";c.d(t,"a",(function(){return l}));var n=c(0),o=c(31),r=c.n(o);function l(e){const t=Object(n.useRef)(e);return r()(e,t.current)||(t.current=e),t.current}},55:function(e,t,c){"use strict";var n=c(0);t.a=function(e){let{srcElement:t,size:c=24,...o}=e;return Object(n.isValidElement)(t)?Object(n.cloneElement)(t,{width:c,height:c,...o}):null}},6:function(e,t){e.exports=window.lodash},61:function(e,t){e.exports=window.wp.dom},62:function(e,t){e.exports=window.wp.a11y},64:function(e,t){e.exports=window.regeneratorRuntime},68:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var n=c(0);const o=Object(n.createContext)("page"),r=()=>Object(n.useContext)(o);o.Provider},787:function(e,t,c){e.exports=c(850)},788:function(e,t,c){"use strict";var n=c(0),o=c(18);const r=Object(n.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},Object(n.createElement)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(n.createElement)("path",{d:"M19 15v4H5v-4h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 18.5c-.82 0-1.5-.67-1.5-1.5s.68-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM19 5v4H5V5h14m1-2H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 8.5c-.82 0-1.5-.67-1.5-1.5S6.18 5.5 7 5.5s1.5.68 1.5 1.5S7.83 8.5 7 8.5z"}));t.a=r},789:function(e,t){},79:function(e,t){e.exports=window.ReactDOM},790:function(e,t){},791:function(e,t){},8:function(e,t){e.exports=window.React},80:function(e,t,c){"use strict";var n=c(7),o=c.n(n),r=c(0),l=c(6),a=c(5),s=c.n(a),i=c(4),u=c(12);c(117);class b extends r.Component{constructor(){super(...arguments),this.onClick=this.onClick.bind(this)}onClick(e){this.props.onChange&&this.props.onChange(e.target.value)}render(){const{label:e,checked:t,instanceId:c,className:n,help:a,options:u,value:b}=this.props,d="inspector-toggle-button-control-"+c;let p;return a&&(p=Object(l.isFunction)(a)?a(t):a),Object(r.createElement)(i.BaseControl,{id:d,help:p,className:s()("components-toggle-button-control",n)},Object(r.createElement)("label",{id:d+"__label",htmlFor:d,className:"components-toggle-button-control__label"},e),Object(r.createElement)(i.ButtonGroup,{"aria-labelledby":d+"__label"},u.map((t,c)=>{const n={};return b===t.value?(n.isPrimary=!0,n["aria-pressed"]=!0):(n.isSecondary=!0,n["aria-pressed"]=!1),Object(r.createElement)(i.Button,o()({key:`${t.label}-${t.value}-${c}`,value:t.value,onClick:this.onClick,"aria-label":e+": "+t.label},n),t.label)})))}}t.a=Object(u.withInstanceId)(b)},82:function(e,t){e.exports=window.wp.viewport},850:function(e,t,c){"use strict";c.r(t);var n=c(7),o=c.n(n),r=c(0),l=c(1),a=c(14),s=c(55),i=c(788),u=c(5),b=c.n(u),d=c(9),p=c(4),m=c(161),w=c(40),g=c(6),h=c(3),O=c(121),j=c(140),f=c(80),v=c(62),_=c(52),k=c(142),y=c(102),E=c(149),x=c(488),C=c(248),S=(c(2),c(218)),N=e=>{let{checked:t,getInputProps:c,inputRef:n,isDisabled:o,onFocus:l,onRemoveItem:a,placeholder:s,tabIndex:i,value:u}=e;return Object(r.createElement)("input",c({ref:n,className:"wc-block-dropdown-selector__input wc-block-components-dropdown-selector__input",disabled:o,onFocus:l,onKeyDown(e){"Backspace"===e.key&&!u&&t.length>0&&a(t[t.length-1])},placeholder:s,tabIndex:i}))},P=e=>{let{children:t,onClick:c}=e;return Object(r.createElement)("div",{className:"wc-block-dropdown-selector__input-wrapper wc-block-components-dropdown-selector__input-wrapper",onClick:c},t)},R=e=>{let{checked:t,getItemProps:c,getMenuProps:n,highlightedIndex:o,options:a}=e;return Object(r.createElement)("ul",n({className:"wc-block-dropdown-selector__list wc-block-components-dropdown-selector__list"}),a.map((e,n)=>{const a=t.includes(e.value);return Object(r.createElement)("li",c({key:e.value,className:b()("wc-block-dropdown-selector__list-item","wc-block-components-dropdown-selector__list-item",{"is-selected":a,"is-highlighted":o===n}),index:n,item:e.value,"aria-label":a?Object(l.sprintf)(
/* translators: %s is referring to the filter option being removed. */
Object(l.__)("Remove %s filter",'woocommerce'),e.name):null}),e.label)}))},L=c(256),T=e=>{let{onRemoveItem:t,option:c}=e;return Object(r.createElement)(L.a,{className:"wc-block-dropdown-selector__selected-chip wc-block-components-dropdown-selector__selected-chip",removeOnAnyClick:!0,onRemove:()=>{t(c.value)},ariaLabel:Object(l.sprintf)(
/* translators: %s is referring to the filter option being removed. */
Object(l.__)("Remove %s filter",'woocommerce'),c.name),text:c.label,radius:"large"})},I=c(331),B=e=>{let{onClick:t,onRemoveItem:c,option:n}=e;const o=Object(r.useRef)(null);return Object(r.useEffect)(()=>{o.current.focus()},[o]),Object(r.createElement)("div",{className:"wc-block-dropdown-selector__selected-value wc-block-components-dropdown-selector__selected-value"},Object(r.createElement)("button",{ref:o,className:"wc-block-dropdown-selector__selected-value__label wc-block-components-dropdown-selector__selected-value__label",onClick:e=>{e.stopPropagation(),t(n.value)},"aria-label":Object(l.sprintf)(
/* translators: %s attribute value used in the filter. For example: yellow, green, small, large. */
Object(l.__)("Replace current %s filter",'woocommerce'),n.name)},n.label),Object(r.createElement)("button",{className:"wc-block-dropdown-selector__selected-value__remove wc-block-components-dropdown-selector__selected-value__remove",onClick:()=>{c(n.value)},onKeyDown:e=>{"Backspace"!==e.key&&"Delete"!==e.key||c(n.value)},"aria-label":Object(l.sprintf)(
/* translators: %s attribute value used in the filter. For example: yellow, green, small, large. */
Object(l.__)("Remove %s filter",'woocommerce'),n.name)},Object(r.createElement)(s.a,{srcElement:I.a,size:16})))};c(791);var V=e=>{let{attributeLabel:t="",className:c,checked:n=[],inputLabel:o="",isDisabled:a=!1,isLoading:s=!1,multiple:i=!1,onChange:u=(()=>{}),options:d=[]}=e;const p=Object(r.useRef)(null),m=b()(c,"wc-block-dropdown-selector","wc-block-components-dropdown-selector",{"is-disabled":a,"is-loading":s}),w=Object(r.useCallback)((e,t)=>{switch(t.type){case S.a.stateChangeTypes.keyDownEnter:case S.a.stateChangeTypes.clickItem:return{...t,highlightedIndex:e.highlightedIndex,isOpen:i,inputValue:""};case S.a.stateChangeTypes.blurInput:case S.a.stateChangeTypes.mouseUp:return{...t,inputValue:e.inputValue};default:return t}},[i]);return Object(r.createElement)(S.a,{onChange:u,selectedItem:null,stateReducer:w},e=>{let{getInputProps:c,getItemProps:s,getLabelProps:w,getMenuProps:g,highlightedIndex:h,inputValue:O,isOpen:j,openMenu:f}=e;return Object(r.createElement)("div",{className:b()(m,{"is-multiple":i,"is-single":!i,"has-checked":n.length>0,"is-open":j})},Object(r.createElement)("label",w({className:"screen-reader-text"}),o),Object(r.createElement)(P,{isOpen:j,onClick:()=>p.current.focus()},n.map(e=>{const t=d.find(t=>t.value===e),c=e=>{u(e),p.current.focus()};return i?Object(r.createElement)(T,{key:e,onRemoveItem:c,option:t}):Object(r.createElement)(B,{key:e,onClick:()=>p.current.focus(),onRemoveItem:c,option:t})}),Object(r.createElement)(N,{checked:n,getInputProps:c,inputRef:p,isDisabled:a,onFocus:f,onRemoveItem:e=>{u(e),p.current.focus()},placeholder:n.length>0&&i?null:Object(l.sprintf)(
/* translators: %s attribute name. */
Object(l.__)("Any %s",'woocommerce'),t),tabIndex:!i&&n.length>0?"-1":"0",value:O})),j&&!a&&Object(r.createElement)(R,{checked:n,getItemProps:s,getMenuProps:g,highlightedIndex:h,options:d.filter(e=>!O||e.value.startsWith(O))}))})},F=c(128),M=c(179),A=c(31),H=c.n(A),z=c(20),D=c(246),q=c(247);const G=[{value:"preview-1",name:"Blue",label:Object(r.createElement)(F.a,{name:"Blue",count:3})},{value:"preview-2",name:"Green",label:Object(r.createElement)(F.a,{name:"Green",count:3})},{value:"preview-3",name:"Red",label:Object(r.createElement)(F.a,{name:"Red",count:2})}],Y={id:0,name:"preview",taxonomy:"preview",label:"Preview"};c(790);var K=e=>{let{attributes:t,isEditor:c=!1}=e;const n=t.isPreview&&!t.attributeId?Y:Object(D.a)(t.attributeId),[o,a]=Object(r.useState)([]),[s,i]=Object(r.useState)(t.isPreview&&!t.attributeId?G:[]),[u]=Object(y.a)(),[b,d]=Object(y.b)("attributes",[]),{results:m,isLoading:w}=Object(E.a)({namespace:"/wc/store",resourceName:"products/attributes/terms",resourceValues:[(null==n?void 0:n.id)||0],shouldSelect:t.attributeId>0}),g="dropdown"!==t.displayStyle&&"and"===t.queryType,{results:h,isLoading:O}=Object(x.a)({queryAttribute:{taxonomy:null==n?void 0:n.taxonomy,queryType:t.queryType},queryState:{...u,attributes:g?u.attributes:null}}),j=Object(r.useCallback)(e=>h.attribute_counts?h.attribute_counts.find(t=>{let{term:c}=t;return c===e}):null,[h]);Object(r.useEffect)(()=>{if(w||O)return;const e=m.map(e=>{const c=j(e.id);if(!(c||o.includes(e.slug)||(l=e.slug,null!=u&&u.attributes&&u.attributes.some(e=>{let{attribute:t,slug:c=[]}=e;return t===n.taxonomy&&c.includes(l)}))))return null;var l;const a=c?c.count:0;return{value:e.slug,name:Object(z.decodeEntities)(e.name),label:Object(r.createElement)(F.a,{name:Object(z.decodeEntities)(e.name),count:t.showCounts?a:null})}}).filter(Boolean);i(e)},[null==n?void 0:n.taxonomy,m,w,t.showCounts,O,j,o,u.attributes]);const f=Object(r.useCallback)(e=>m.reduce((t,c)=>(e.includes(c.slug)&&t.push(c),t),[]),[m]),S=Object(r.useCallback)(e=>{c||Object(q.b)(b,d,n,f(e),"or"===t.queryType?"in":"and")},[c,b,d,n,f,t.queryType]),N=Object(r.useMemo)(()=>b.filter(e=>{let{attribute:t}=e;return t===(null==n?void 0:n.taxonomy)}).flatMap(e=>{let{slug:t}=e;return t}),[b,null==n?void 0:n.taxonomy]),P=Object(_.a)(N),R=Object(k.a)(P);Object(r.useEffect)(()=>{H()(R,P)||H()(o,P)||(a(P),t.showFilterButton||S(P))},[o,P,R,S,t.showFilterButton]);const L="dropdown"!==t.displayStyle||"or"===t.queryType,T=Object(r.useCallback)(e=>{const c=e=>{const{name:t}=s.find(t=>t.value===e);return t},n=e=>{let{filterAdded:t,filterRemoved:n}=e;const o=t?c(t):null,r=n?c(n):null;o&&r?Object(v.speak)(Object(l.sprintf)(
/* translators: %1$s and %2$s are attribute terms (for example: 'red', 'blue', 'large'...). */
Object(l.__)("%1$s filter replaced with %2$s.",'woocommerce'),o,r)):o?Object(v.speak)(Object(l.sprintf)(
/* translators: %s attribute term (for example: 'red', 'blue', 'large'...) */
Object(l.__)("%s filter added.",'woocommerce'),o)):r&&Object(v.speak)(Object(l.sprintf)(
/* translators: %s attribute term (for example: 'red', 'blue', 'large'...) */
Object(l.__)("%s filter removed.",'woocommerce'),r))},r=o.includes(e);let i;L?(i=o.filter(t=>t!==e),r?n({filterRemoved:e}):(i.push(e),i.sort(),n({filterAdded:e}))):(i=r?[]:[e],n({filterAdded:r?null:e,filterRemoved:1===o.length?o[0]:null})),a(i),t.showFilterButton||S(i)},[o,s,L,S,t.showFilterButton]);if(!n)return c?Object(r.createElement)(p.Notice,{status:"warning",isDismissible:!1},Object(r.createElement)("p",null,Object(l.__)("Please select an attribute to use this filter!",'woocommerce'))):null;if(0===s.length&&!w)return c?Object(r.createElement)(p.Notice,{status:"warning",isDismissible:!1},Object(r.createElement)("p",null,Object(l.__)("The selected attribute does not have any term assigned to products.",'woocommerce'))):null;const I="h"+t.headingLevel,B=!t.isPreview&&w,A=!t.isPreview&&O;return Object(r.createElement)(r.Fragment,null,!c&&t.heading&&s.length>0&&Object(r.createElement)(I,{className:"wc-block-attribute-filter__title"},t.heading),Object(r.createElement)("div",{className:"wc-block-attribute-filter style-"+t.displayStyle},"dropdown"===t.displayStyle?Object(r.createElement)(V,{attributeLabel:n.label,checked:o,className:"wc-block-attribute-filter-dropdown",inputLabel:t.heading,isLoading:B,multiple:L,onChange:T,options:s}):Object(r.createElement)(C.a,{className:"wc-block-attribute-filter-list",options:s,checked:o,onChange:T,isLoading:B,isDisabled:A}),t.showFilterButton&&Object(r.createElement)(M.a,{className:"wc-block-attribute-filter__button",disabled:B||A,onClick:()=>S(o)})))};c(789);const Q=Object(h.getSetting)("attributes",[]);var U=Object(p.withSpokenMessages)(e=>{let{attributes:t,setAttributes:c,debouncedSpeak:n}=e;const{attributeId:o,className:a,displayStyle:u,heading:b,headingLevel:v,isPreview:_,queryType:k,showCounts:y,showFilterButton:E}=t,[x,C]=Object(r.useState)(!o&&!_),S=e=>{if(!e||!e.length)return;const t=e[0].id,n=Q.find(e=>e.attribute_id===t.toString());if(!n||o===t)return;const r=n.attribute_label;c({attributeId:t,heading:Object(l.sprintf)(
/* translators: %s attribute name. */
Object(l.__)("Filter by %s",'woocommerce'),r)})},N=e=>{let{isCompact:t}=e;const c={clear:Object(l.__)("Clear selected attribute",'woocommerce'),list:Object(l.__)("Product Attributes",'woocommerce'),noItems:Object(l.__)("Your store doesn't have any product attributes.",'woocommerce'),search:Object(l.__)("Search for a product attribute:",'woocommerce'),selected:e=>Object(l.sprintf)(
/* translators: %d is the number of attributes selected. */
Object(l._n)("%d attribute selected","%d attributes selected",e,'woocommerce'),e),updated:Object(l.__)("Product attribute search results updated.",'woocommerce')},n=Object(g.sortBy)(Object(g.toArray)(Object(g.mapValues)(Q,e=>({id:parseInt(e.attribute_id,10),name:e.attribute_label}))),"name");return Object(r.createElement)(w.b,{className:"woocommerce-product-attributes",list:n,selected:n.filter(e=>{let{id:t}=e;return t===o}),onChange:S,messages:c,isSingle:!0,isCompact:t})};return 0===Object.keys(Q).length?Object(r.createElement)(p.Placeholder,{className:"wc-block-attribute-filter",icon:Object(r.createElement)(s.a,{srcElement:i.a}),label:Object(l.__)("Filter Products by Attribute",'woocommerce'),instructions:Object(l.__)("Display a list of filters based on a chosen attribute.",'woocommerce')},Object(r.createElement)("p",null,Object(l.__)("Attributes are needed for filtering your products. You haven't created any attributes yet.",'woocommerce')),Object(r.createElement)(p.Button,{className:"wc-block-attribute-filter__add-attribute-button",isSecondary:!0,href:Object(h.getAdminLink)("edit.php?post_type=product&page=product_attributes")},Object(l.__)("Add new attribute",'woocommerce')+" ",Object(r.createElement)(s.a,{srcElement:m.a})),Object(r.createElement)(p.Button,{className:"wc-block-attribute-filter__read_more_button",isTertiary:!0,href:"https://docs.woocommerce.com/document/managing-product-taxonomies/"},Object(l.__)("Learn more",'woocommerce'))):Object(r.createElement)(r.Fragment,null,Object(r.createElement)(d.BlockControls,null,Object(r.createElement)(p.ToolbarGroup,{controls:[{icon:"edit",title:Object(l.__)("Edit",'woocommerce'),onClick:()=>C(!x),isActive:x}]})),Object(r.createElement)(d.InspectorControls,{key:"inspector"},Object(r.createElement)(p.PanelBody,{title:Object(l.__)("Content",'woocommerce')},Object(r.createElement)(p.ToggleControl,{label:Object(l.__)("Product count",'woocommerce'),help:y?Object(l.__)("Product count is visible.",'woocommerce'):Object(l.__)("Product count is hidden.",'woocommerce'),checked:y,onChange:()=>c({showCounts:!y})}),Object(r.createElement)("p",null,Object(l.__)("Heading Level",'woocommerce')),Object(r.createElement)(O.a,{isCollapsed:!1,minLevel:2,maxLevel:7,selectedLevel:v,onChange:e=>c({headingLevel:e})})),Object(r.createElement)(p.PanelBody,{title:Object(l.__)("Block Settings",'woocommerce')},Object(r.createElement)(f.a,{label:Object(l.__)("Query Type",'woocommerce'),help:"and"===k?Object(l.__)("Products that have all of the selected attributes will be shown.",'woocommerce'):Object(l.__)("Products that have any of the selected attributes will be shown.",'woocommerce'),value:k,options:[{label:Object(l.__)("And",'woocommerce'),value:"and"},{label:Object(l.__)("Or",'woocommerce'),value:"or"}],onChange:e=>c({queryType:e})}),Object(r.createElement)(f.a,{label:Object(l.__)("Display Style",'woocommerce'),value:u,options:[{label:Object(l.__)("List",'woocommerce'),value:"list"},{label:Object(l.__)("Dropdown",'woocommerce'),value:"dropdown"}],onChange:e=>c({displayStyle:e})}),Object(r.createElement)(p.ToggleControl,{label:Object(l.__)("Filter button",'woocommerce'),help:E?Object(l.__)("Products will only update when the button is pressed.",'woocommerce'):Object(l.__)("Products will update as options are selected.",'woocommerce'),checked:E,onChange:e=>c({showFilterButton:e})})),Object(r.createElement)(p.PanelBody,{title:Object(l.__)("Filter Products by Attribute",'woocommerce'),initialOpen:!1},N({isCompact:!0}))),x?Object(r.createElement)(p.Placeholder,{className:"wc-block-attribute-filter",icon:Object(r.createElement)(s.a,{srcElement:i.a}),label:Object(l.__)("Filter Products by Attribute",'woocommerce'),instructions:Object(l.__)("Display a list of filters based on a chosen attribute.",'woocommerce')},Object(r.createElement)("div",{className:"wc-block-attribute-filter__selection"},N({isCompact:!1}),Object(r.createElement)(p.Button,{isPrimary:!0,onClick:()=>{C(!1),n(Object(l.__)("Showing Filter Products by Attribute block preview.",'woocommerce'))}},Object(l.__)("Done",'woocommerce')))):Object(r.createElement)("div",{className:a},Object(r.createElement)(j.a,{className:"wc-block-attribute-filter__title",headingLevel:v,heading:b,onChange:e=>c({heading:e})}),Object(r.createElement)(p.Disabled,null,Object(r.createElement)(K,{attributes:t,isEditor:!0}))))});Object(a.registerBlockType)("woocommerce/attribute-filter",{title:Object(l.__)("Filter Products by Attribute",'woocommerce'),icon:{src:Object(r.createElement)(s.a,{srcElement:i.a}),foreground:"#7f54b3"},category:"woocommerce",keywords:[Object(l.__)("WooCommerce",'woocommerce')],description:Object(l.__)("Allow customers to filter the grid by product attribute, such as color. Works in combination with the All Products block.",'woocommerce'),supports:{html:!1},example:{attributes:{isPreview:!0}},attributes:{attributeId:{type:"number",default:0},showCounts:{type:"boolean",default:!0},queryType:{type:"string",default:"or"},heading:{type:"string",default:Object(l.__)("Filter by attribute",'woocommerce')},headingLevel:{type:"number",default:3},displayStyle:{type:"string",default:"list"},showFilterButton:{type:"boolean",default:!1},isPreview:{type:"boolean",default:!1}},edit:U,save(e){let{attributes:t}=e;const{className:c,showCounts:n,queryType:l,attributeId:a,heading:s,headingLevel:i,displayStyle:u,showFilterButton:d}=t,p={"data-attribute-id":a,"data-show-counts":n,"data-query-type":l,"data-heading":s,"data-heading-level":i};return"list"!==u&&(p["data-display-style"]=u),d&&(p["data-show-filter-button"]=d),Object(r.createElement)("div",o()({className:b()("is-loading",c)},p),Object(r.createElement)("span",{"aria-hidden":!0,className:"wc-block-product-attribute-filter__placeholder"}))}})},89:function(e,t){e.exports=window.wp.date},9:function(e,t){e.exports=window.wp.blockEditor}});
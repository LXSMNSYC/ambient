import{c as chroma,s as styled,d as delegateEvents,a as splitProps,b as createComponent,m as mergeProps,e as memo,i as insert,f as toast,t as template,g as createSignal,h as textColorScale,j as createEffect,F as For,k as Flex,l as arrSize,n as createRenderEffect,o as createComputed,C as ColorShades,p as ColorMix,q as ColorRelative,r as ColorLegacy,u as untrack,v as createRoot,w as onCleanup,x as colorScale,y as setAttribute,z as setColorScale,A as setTextColorScale}from"./index.068ea19c.js";const mainTRC=2.4,sRco=.2126729,sGco=.7151522,sBco=.072175,normBG=.56,normTXT=.57,revTXT=.62,revBG=.65,blkThrs=.022,blkClmp=1.414,scaleBoW=1.14,scaleWoB=1.14,loBoWthresh=.035991,loWoBthresh=.035991,loBoWfactor=27.7847239587675,loWoBfactor=27.7847239587675,loBoWoffset=.027,loWoBoffset=.027,loClip=.001,deltaYmin=5e-4;function sRGBtoY(t){let r=(t&16711680)>>16,n=(t&65280)>>8,o=t&255;function i(s){return Math.pow(s/255,mainTRC)}return sRco*i(r)+sGco*i(n)+sBco*i(o)}function APCAcontrast(t,r){var n=0,o=0;return t=t>blkThrs?t:t+Math.pow(blkThrs-t,blkClmp),r=r>blkThrs?r:r+Math.pow(blkThrs-r,blkClmp),Math.abs(r-t)<deltaYmin?0:(r>t?(n=(Math.pow(r,normBG)-Math.pow(t,normTXT))*scaleBoW,o=n<loClip?0:n<loBoWthresh?n-n*loBoWfactor*loBoWoffset:n-loBoWoffset):(n=(Math.pow(r,revBG)-Math.pow(t,revTXT))*scaleWoB,o=n>-loClip?0:n>-loWoBthresh?n-n*loWoBfactor*loWoBoffset:n+loWoBoffset),o*100)}const calcWCAG=(t,r)=>chroma.contrast(t,r),calcMaxWCAG=(t,r)=>{let n=0,o="",i="";return Object.entries(t).forEach(([s,l])=>{let c=calcWCAG(l,r);c>n&&(n=c,o=s,i=l)}),[n.toFixed(2),o,i]},calcAPCA=(t,r)=>{const n=parseInt(`0x${t.substring(1)}`,16),o=parseInt(`0x${r.substring(1)}`,16);return APCAcontrast(sRGBtoY(n),sRGBtoY(o))},calcMaxAPCA=(t,r)=>{let n=0,o="",i="";return Object.entries(t).forEach(([s,l])=>{let c=Math.abs(calcAPCA(l,r));c>n&&(n=c,o=s,i=l)}),[n.toFixed(2),o,i]},ColorIdentifier=styled("div")`
  width: 16px;
  height: 16px;
  border-radius: 3px;
  background-color: ${t=>t.color?t.color:"white"};
  border: 1px solid rgba(255, 255, 255, 0.14);
`,_tmpl$$9=template("<p></p>"),_tmpl$2$9=template('<a><i class="bi bi-x"></i></a>'),Toast=t=>{const[r,n]=splitProps(t,["children","toast","color","showExit","box"]),o=()=>{switch(t.color){case"warning":return"#674d0f";case"error":return"#5d000a";case"info":return"#040e1f"}return"black"},i=styled("div")`
    display: flex;
    background-color: ${o};
    border-radius: 3px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    padding: 10px 10px 6px 10px;
    gap: 8px;

    @media only screen and (max-width: 780px) {
      padding: 8px 8px 6px 8px;
    }
  `;return createComponent(i,mergeProps(n,{get children(){return[memo(()=>memo(()=>!!r.box,!0)()&&createComponent(ColorIdentifier,{get color(){return t.box}})),(()=>{const s=_tmpl$$9.cloneNode(!0);return insert(s,()=>t.children),s})(),memo(()=>memo(()=>!!r.showExit,!0)()&&(()=>{const s=_tmpl$2$9.cloneNode(!0);return s.$$click=()=>toast.dismiss(t.toast.id),s})())]}}))};delegateEvents(["click"]);const _tmpl$$8=template('<i class="bi bi-x-circle"></i>'),_tmpl$2$8=template('<i class="bi bi-dash-circle"></i>'),_tmpl$3$6=template('<i class="bi bi-exclamation-circle"></i>'),_tmpl$4$3=template('<i class="bi bi-check-circle"></i>'),_tmpl$5$3=template("<div></div>"),_tmpl$6$2=template("<p></p>"),_tmpl$7$1=template('<p class="contrast"><object><strong>WCAG: </strong> </object><br><object><strong>APCA: </strong> </object><br><object><strong>APCA TEXT: </strong> </object></p>'),_tmpl$8$1=template('<p class="helper"><strong></strong><br></p>'),ColorSwatch=t=>{const r=()=>t.colorSwatch,[n,o]=createSignal(textColorScale());createEffect(()=>{o(textColorScale())});const i=p=>{navigator.clipboard.writeText(p).then(()=>{toast.custom(u=>createComponent(Toast,{box:p,showExit:!0,toast:u,get children(){return["Pallette Copied! ",p]}}))},()=>{toast.custom(u=>createComponent(Toast,{color:"error",showExit:!0,toast:u,children:"Copying Failed"}))})},s=(p,u,b)=>{const v=Number(calcMaxWCAG(p,b)[0]),S=Number(calcMaxAPCA(p,b)[0]),m=Number(calcMaxWCAG(u,b)[0]),C=Number(calcMaxAPCA(u,b)[0]);return m<4.5||v<4.5?C<60?_tmpl$$8.cloneNode(!0):S<60?_tmpl$2$8.cloneNode(!0):_tmpl$3$6.cloneNode(!0):_tmpl$4$3.cloneNode(!0)},l=styled("div")`
    display:flex;
    column-gap: 10px;
    padding: 5px 0;

    .helper {
      font-size: 10px;
      line-height: 12px;
      align-self: flex-end;
      margin-top: 8px;
      width: 100%;
    }
  `,c=styled("div")`
    position: absolute;
    top: 0px;
    right: 6px;
    i {
      font-size: 12px;
    }
  `,h=styled("div")`
    background-color: ${p=>p.color};
    height: 84px;
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 5px 8px;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    border: 1px solid ${p=>calcMaxAPCA(n(),p.color)[2]=="#FFFFFF"?chroma(p.color).brighten(1.02).hex():chroma(p.color).darken(1.02).hex()};
    width: 100%;

    p {
      color: ${p=>calcMaxAPCA(n(),p.color)[2]} !important;
      font-size: 10px;
      line-height: 12px;
    }
    .contrast {
      opacity: 0;
      align-self: flex-start;
      width: 100%;
      color: white;
      transition: opacity 100ms ease-in-out;
    }

    &:hover {
      .contrast {
        opacity: 1;
      }
    }
  `;return(()=>{const p=_tmpl$5$3.cloneNode(!0);return insert(p,createComponent(For,{get each(){return Object.entries(r())},children:([u,b],v)=>[(()=>{const S=_tmpl$6$2.cloneNode(!0);return insert(S,u),S})(),createComponent(l,{get children(){return createComponent(For,{get each(){return Object.entries(b)},children:([S,m],C)=>createComponent(Flex,{flexDirection:"column",style:{"flex-basis":"100%",overflow:"hidden"},get children(){return[createComponent(h,{color:m,get style(){return{border:C()==Math.floor(arrSize()/2)?"1px solid rgba(256, 256, 256, 1)":"",flex:C()==arrSize()/2?"none":"1","border-radius":(C()==Math.floor(arrSize()/2),"3px")}},onClick:()=>i(m),get children(){return[createComponent(c,{get style(){return{color:calcMaxAPCA(n(),m)[2]}},get children(){return s(b,n(),m)}}),(()=>{const w=_tmpl$7$1.cloneNode(!0),A=w.firstChild;A.firstChild.nextSibling;const I=A.nextSibling,E=I.nextSibling;E.firstChild.nextSibling;const O=E.nextSibling,L=O.nextSibling;return L.firstChild.nextSibling,insert(A,()=>calcMaxWCAG(b,m)[0],null),insert(E,()=>calcMaxAPCA(b,m)[0],null),insert(L,()=>calcMaxAPCA(n(),m)[0],null),createRenderEffect(D=>{const Q=calcMaxWCAG(b,m)[2],_=calcMaxAPCA(b,m)[2],M=calcMaxAPCA(n(),m)[2];return Q!==D._v$&&A.style.setProperty("color",D._v$=Q),_!==D._v$2&&E.style.setProperty("color",D._v$2=_),M!==D._v$3&&L.style.setProperty("color",D._v$3=M),D},{_v$:void 0,_v$2:void 0,_v$3:void 0}),w})()]}}),(()=>{const w=_tmpl$8$1.cloneNode(!0),A=w.firstChild;return A.nextSibling,insert(A,S),insert(w,m,null),w})()]}})})}})]})),p})()},_tmpl$$7=template("<h5></h5>"),_tmpl$2$7=template("<br>"),SwatchList=t=>{const[r,n]=createSignal(t.swatchList);return createComputed(()=>{n(t.swatchList)}),createComponent(For,{get each(){return r()},children:o=>[(()=>{const i=_tmpl$$7.cloneNode(!0);return insert(i,()=>o.name),i})(),createComponent(ColorSwatch,{get colorSwatch(){return o.swatch}}),_tmpl$2$7.cloneNode(!0)]})},Button=styled("button")`
  background: none;
  color: inherit;
  letter-spacing: -0.45px;
  font-weight: bold !important;
  cursor: pointer !important;
  outline: none;
  padding: 6px 12px;
  background-color: rgba(255, 255, 255, 0.14);
  border-radius: 3px;
  border: none;
  max-width: auto;
  flex: none;
  transition: all 100ms ease-in-out;
  outline: 0;
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.14);
  margin-top: 12px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.09);
  }
  &:active {
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.14);
  }
`,_tmpl$$6=template("<h3>Generated Colors</h3>"),_tmpl$2$6=template("<br>"),ColorListPage=()=>{const t=()=>{const i=JSON.stringify(n()),s=new Blob([i],{type:"text/plain"}),l=URL.createObjectURL(s),c=document.createElement("a");c.download="ambientcolors-full.json",c.href=l,c.click()},r=()=>{const i=JSON.stringify(n()[0].swatch),s=new Blob([i],{type:"text/plain"}),l=URL.createObjectURL(s),c=document.createElement("a");c.download="ambientcolors-full.json",c.href=l,c.click()},[n,o]=createSignal([{name:"Shades Corrected (RGB)",swatch:ColorShades()},{name:"Blended (Lab Color Mix)",swatch:ColorMix()},{name:"Relative (HSV & Relative Luminance)",swatch:ColorRelative()},{name:"Brighten and Darken (Legacy)",swatch:ColorLegacy()}]);return createEffect(()=>{console.log("master update"),o([{name:"Shades Corrected (RGB)",swatch:ColorShades()},{name:"Blended (Lab Color Mix)",swatch:ColorMix()},{name:"Relative (HSV & Relative Luminance)",swatch:ColorRelative()},{name:"Brighten and Darken (Legacy)",swatch:ColorLegacy()}])}),[_tmpl$$6.cloneNode(!0),createComponent(Flex,{flexDirection:"row",gap:8,style:{margin:"0 0 24px -2px"},get children(){return[createComponent(Button,{type:"submit",onclick:t,children:"Export colors"}),createComponent(Button,{type:"submit",onclick:r,children:"Export colors (Tailwind)"})]}}),createComponent(SwatchList,{get swatchList(){return n()}}),_tmpl$2$6.cloneNode(!0)]};function subscribe(t,...r){const n=t.subscribe(...r);return n.unsubscribe?()=>n.unsubscribe():n}function get(t){let r;return subscribe(t,n=>r=n)(),r}class FelteSubmitError extends Error{constructor(r,n){super(r),this.name="FelteSubmitError",this.response=n}}function _some(t,r){return Object.keys(t).some(o=>r(t[o]))}function _mapValues(t,r){return Object.keys(t).reduce((o,i)=>Object.assign(Object.assign({},o),{[i]:r(t[i])}),{})}function _isPlainObject(t){return Object.prototype.toString.call(t)==="[object Object]"}function _cloneDeep(t){return Object.keys(t||{}).reduce((r,n)=>Object.assign(Object.assign({},r),{[n]:_isPlainObject(t[n])?_cloneDeep(t[n]):Array.isArray(t[n])?[...t[n]]:t[n]}),{})}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function __rest$2(t,r){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&r.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,o=Object.getOwnPropertySymbols(t);i<o.length;i++)r.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(t,o[i])&&(n[o[i]]=t[o[i]]);return n}function handleArray(t){return function(r){if(_isPlainObject(r)){const n=deepSet(r,t);return __rest$2(n,["key"])}return t}}function deepSet(t,r){return _mapValues(t,n=>_isPlainObject(n)?deepSet(n,r):Array.isArray(n)?n.map(handleArray(r)):r)}function _mergeWith(...t){const r=t.pop(),n=_cloneDeep(t.shift());if(t.length===0)return n;for(const o of t){if(!o)continue;let i=r(n,o);if(typeof i<"u")return i;const s=Array.from(new Set(Object.keys(n).concat(Object.keys(o))));for(const l of s)if(i=r(n[l],o[l]),typeof i<"u")n[l]=i;else if(_isPlainObject(o[l])&&_isPlainObject(n[l]))n[l]=_mergeWith(n[l],o[l],r);else if(Array.isArray(o[l]))n[l]=o[l].map((c,h)=>{if(!_isPlainObject(c))return c;const p=Array.isArray(n[l])?n[l][h]:n[l];return _mergeWith(p,c,r)});else if(_isPlainObject(o[l])){const c=deepSet(_cloneDeep(o[l]),void 0);n[l]=_mergeWith(c,o[l],r)}else typeof o[l]<"u"&&(n[l]=o[l])}return n}function defaultsCustomizer(t,r){if(!(_isPlainObject(t)&&_isPlainObject(r))){if(Array.isArray(r)){if(r.some(_isPlainObject))return;const n=Array.isArray(t)?t:[];return r.map((o,i)=>{var s;return(s=n[i])!==null&&s!==void 0?s:o})}if(typeof t<"u")return t}}function _defaultsDeep(...t){return _mergeWith(...t,defaultsCustomizer)}function _merge(...t){return _mergeWith(...t,()=>{})}function _get(t,r,n){const o=s=>String.prototype.split.call(r,s).filter(Boolean).reduce((l,c)=>l!=null?l[c]:l,t),i=o(/[,[\]]+?/)||o(/[,[\].]+?/);return i===void 0||i===t?n:i}function _update(t,r,n){t&&(t=_cloneDeep(t)),_isPlainObject(t)||(t={});const o=Array.isArray(r)?r:r.match(/[^.[\]]+/g)||[],i=o[o.length-1];if(!i)return t;let s=t;for(let l=0;l<o.length-1;l++){const c=o[l];if(!s[c]||!_isPlainObject(s[c])&&!Array.isArray(s[c])){const h=o[l+1];isNaN(Number(h))?s[c]={}:s[c]=[]}s=s[c]}return s[i]=n(s[i]),t}function _set(t,r,n){return _update(t,r,()=>n)}function _unset(t,r){if(!t||Object(t)!==t)return;typeof t<"u"&&(t=_cloneDeep(t));const n=Array.isArray(r)?r:r.toString().match(/[^.[\]]+/g)||[],o=n.length===1?t:_get(t,n.slice(0,-1).join("."));return Array.isArray(o)?o.splice(Number(n[n.length-1]),1):o==null||delete o[n[n.length-1]],t}function deepSome(t,r){return _some(t,n=>_isPlainObject(n)?deepSome(n,r):Array.isArray(n)?n.length===0||n.every(o=>typeof o=="string")?r(n):n.some(o=>_isPlainObject(o)?deepSome(o,r):r(o)):r(n))}function isInputElement(t){var r;return((r=t)===null||r===void 0?void 0:r.nodeName)==="INPUT"}function isTextAreaElement(t){var r;return((r=t)===null||r===void 0?void 0:r.nodeName)==="TEXTAREA"}function isSelectElement(t){var r;return((r=t)===null||r===void 0?void 0:r.nodeName)==="SELECT"}function isFieldSetElement(t){var r;return((r=t)===null||r===void 0?void 0:r.nodeName)==="FIELDSET"}function isFormControl(t){return isInputElement(t)||isTextAreaElement(t)||isSelectElement(t)}function isElement(t){return t.nodeType===Node.ELEMENT_NODE}function getPath(t,r){return r??(isFormControl(t)?t.name:"")}function shouldIgnore(t){let r=t;for(;r&&r.nodeName!=="FORM";){if(r.hasAttribute("data-felte-ignore"))return!0;r=r.parentElement}return!1}function getValue(t,r){return!_isPlainObject(t)||!r?t:typeof r=="string"?_get(t,r):r(t)}function executeCustomizer(t,r){if(!(_isPlainObject(t)||_isPlainObject(r))){if(t===null||t==="")return r;if(r===null||r===""||!r)return t;if(!(!t||!r)){if(Array.isArray(t)){if(!Array.isArray(r))return[...t,r];const n=[],o=Math.max(r.length,t.length);for(let i=0;i<o;i++){let s=t[i],l=r[i];!_isPlainObject(s)&&!_isPlainObject(l)?(Array.isArray(s)||(s=[s]),Array.isArray(l)||(l=[l]),n.push(...s,...l)):n.push(mergeErrors([s??{},l??{}]))}return n.filter(Boolean)}return Array.isArray(r)||(r=[r]),[t,...r].reduce((n,o)=>n.concat(o),[]).filter(Boolean)}}}function mergeErrors(t){return _mergeWith(...t,executeCustomizer)}function runValidations(t,r){return r?(Array.isArray(r)?r:[r]).map(o=>o(t)):[]}function executeTransforms(t,r){return r?Array.isArray(r)?r.reduce((n,o)=>o(n),t):r(t):t}function createId(t=8){const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let n="";for(let o=0;o<t;o++)n+=r.charAt(Math.floor(Math.random()*r.length));return n}function isEqual(t,r){if(t===r)return!0;if(Array.isArray(t)&&Array.isArray(r))return t.length!==r.length?!1:t.every((n,o)=>isEqual(n,r[o]));if(_isPlainObject(t)&&_isPlainObject(r)){const n=Object.keys(t),o=Object.keys(r);return n.length!==o.length?!1:n.every(i=>isEqual(t[i],r[i]))}return!1}function debounce(t,r,{onInit:n,onEnd:o}={}){let i;return(...s)=>{i||n?.(),i&&clearTimeout(i),i=setTimeout(()=>{t.apply(this,s),i=void 0,o?.()},r)}}function getFormControls(t){if(isFormControl(t))return[t];if(t.childElementCount===0)return[];const r=new Set;for(const n of t.children){if(isFormControl(n)&&r.add(n),isFieldSetElement(n))for(const o of n.elements)isFormControl(o)&&r.add(o);n.childElementCount>0&&getFormControls(n).forEach(o=>r.add(o))}return Array.from(r)}function addAttrsFromFieldset(t){for(const r of t.elements)!isFormControl(r)&&!isFieldSetElement(r)||t.hasAttribute("data-felte-keep-on-remove")&&!r.hasAttribute("data-felte-keep-on-remove")&&(r.dataset.felteKeepOnRemove=t.dataset.felteKeepOnRemove)}function getInputTextOrNumber(t){return t.type.match(/^(number|range)$/)?t.value?+t.value:void 0:t.value}function getFormDefaultValues(t){var r;let n={},o={};for(const i of t.elements){if(isFieldSetElement(i)&&addAttrsFromFieldset(i),!isFormControl(i)||!i.name)continue;const s=getPath(i);if(isInputElement(i)){if(i.type==="checkbox"){if(typeof _get(n,s)>"u"){if(Array.from(t.querySelectorAll(`[name="${i.name}"]`)).filter(h=>isFormControl(h)?s===getPath(h):!1).length===1){n=_set(n,s,i.checked),o=_set(o,s,!1);continue}n=_set(n,s,i.checked?[i.value]:[]),o=_set(o,s,!1);continue}Array.isArray(_get(n,s))&&i.checked&&(n=_update(n,s,c=>[...c,i.value]));continue}if(i.type==="radio"){if(_get(n,s))continue;n=_set(n,s,i.checked?i.value:void 0),o=_set(o,s,!1);continue}if(i.type==="file"){n=_set(n,s,i.multiple?Array.from(i.files||[]):(r=i.files)===null||r===void 0?void 0:r[0]),o=_set(o,s,!1);continue}}else if(isSelectElement(i)){if(!i.multiple)n=_set(n,s,i.value);else{const h=Array.from(i.options).filter(p=>p.selected).map(p=>p.value);n=_set(n,s,h)}o=_set(o,s,!1);continue}const l=getInputTextOrNumber(i);n=_set(n,s,l),o=_set(o,s,!1)}return{defaultData:n,defaultTouched:o}}function setControlValue(t,r){var n;if(!isFormControl(t))return;const o=r;if(isInputElement(t)){if(t.type==="checkbox"){const i=o;if(typeof i>"u"||typeof i=="boolean"){t.checked=!!i;return}Array.isArray(i)&&(i.includes(t.value)?t.checked=!0:t.checked=!1);return}if(t.type==="radio"){const i=o;t.value===i?t.checked=!0:t.checked=!1;return}if(t.type==="file"){t.files=null,t.value="";return}}else if(isSelectElement(t)){if(t.multiple){if(Array.isArray(o)){t.value=String((n=o[0])!==null&&n!==void 0?n:"");for(const s of t.options)o.includes(s.value)?s.selected=!0:s.selected=!1}}else{t.value=String(o??"");for(const s of t.options)s.value===o?s.selected=!0:s.selected=!1}return}t.value=String(o??"")}function setForm(t,r){for(const n of t.elements){if(isFieldSetElement(n)&&addAttrsFromFieldset(n),!isFormControl(n)||!n.name)continue;const o=getPath(n);setControlValue(n,_get(r,o))}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function __rest$1(t,r){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&r.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,o=Object.getOwnPropertySymbols(t);i<o.length;i++)r.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(t,o[i])&&(n[o[i]]=t[o[i]]);return n}function deepSetTouched(t,r){return _mapValues(t,n=>_isPlainObject(n)?deepSetTouched(n,r):Array.isArray(n)?n.length===0||n.every(o=>typeof o=="string")?r:n.map(o=>{const i=deepSetTouched(o,r);return __rest$1(i,["key"])}):r)}function deepSetKey(t){return t?_mapValues(t,r=>_isPlainObject(r)?deepSetKey(r):Array.isArray(r)?r.length===0||r.every(n=>typeof n=="string")?r:r.map(n=>{if(!_isPlainObject(n))return n;const o=deepSetKey(n);return o.key||(o.key=createId()),o}):r):{}}function deepRemoveKey(t){return t?_mapValues(t,r=>_isPlainObject(r)?deepSetKey(r):Array.isArray(r)?r.length===0||r.every(n=>typeof n=="string")?r:r.map(n=>{if(!_isPlainObject(n))return n;const o=deepSetKey(n);return __rest$1(o,["key"])}):r):{}}function createEventConstructors(){class t extends CustomEvent{constructor(i){super("feltesuccess",{detail:i})}}class r extends CustomEvent{constructor(i){super("felteerror",{detail:i,cancelable:!0})}setErrors(i){this.preventDefault(),this.errors=i}}class n extends Event{constructor(){super("feltesubmit",{cancelable:!0})}handleSubmit(i){this.onSubmit=i}handleError(i){this.onError=i}handleSuccess(i){this.onSuccess=i}}return{createErrorEvent:o=>new r(o),createSubmitEvent:()=>new n,createSuccessEvent:o=>new t(o)}}function createDefaultSubmitHandler(t){if(!!t)return async function(){let n=new FormData(t);const o=new URL(t.action),i=t.method.toLowerCase()==="get"?"get":o.searchParams.get("_method")||t.method;let s=t.enctype;t.querySelector('input[type="file"]')&&(s="multipart/form-data"),(i==="get"||s==="application/x-www-form-urlencoded")&&(n=new URLSearchParams(n));let l;i==="get"?(n.forEach((h,p)=>{o.searchParams.append(p,h)}),l={method:i,headers:{Accept:"application/json"}}):l={method:i,body:n,headers:{"Content-Type":s,Accept:"application/json"}};const c=await window.fetch(o.toString(),l);if(c.ok)return c;throw new FelteSubmitError("An error occurred while submitting the form",c)}}function addAtIndex(t,r,n,o){return _update(t,r,i=>(typeof i<"u"&&!Array.isArray(i)||(i||(i=[]),typeof o>"u"?i.push(n):i.splice(o,0,n)),i))}function swapInArray(t,r,n,o){return _update(t,r,i=>(!i||!Array.isArray(i)||([i[n],i[o]]=[i[o],i[n]]),i))}function moveInArray(t,r,n,o){return _update(t,r,i=>(!i||!Array.isArray(i)||i.splice(o,0,i.splice(n,1)[0]),i))}function isUpdater(t){return typeof t=="function"}function createSetHelper(t){return(n,o)=>{if(typeof n=="string"){const i=n;t(s=>{const l=isUpdater(o)?o(_get(s,i)):o;return _set(s,i,l)})}else t(i=>isUpdater(n)?n(i):n)}}function createHelpers({stores:t,config:r,validateErrors:n,validateWarnings:o,_getCurrentExtenders:i}){var s;let l,c=deepSetKey((s=r.initialValues)!==null&&s!==void 0?s:{});const{data:h,touched:p,errors:u,warnings:b,isDirty:v,isSubmitting:S,interacted:m}=t,C=createSetHelper(h.update),w=createSetHelper(p.update),A=createSetHelper(u.update),K=createSetHelper(b.update);function I(d){C(x=>{const $=d(x);return l&&setForm(l,$),$})}const E=(d,x,$)=>{createSetHelper(I)(d,x),typeof d=="string"&&$&&w(d,!0)};function V(d,x,$){const N=_isPlainObject(x)?deepSetTouched(x,!1):!1,W=_isPlainObject(N)?deepSet(N,[]):[];x=_isPlainObject(x)?Object.assign(Object.assign({},x),{key:createId()}):x,u.update(k=>addAtIndex(k,d,W,$)),b.update(k=>addAtIndex(k,d,W,$)),p.update(k=>addAtIndex(k,d,N,$)),h.update(k=>{const X=addAtIndex(k,d,x,$);return setTimeout(()=>l&&setForm(l,X)),X})}function O(d){u.update(d),b.update(d),p.update(d),h.update(x=>{const $=d(x);return setTimeout(()=>l&&setForm(l,$)),$})}function L(d){O(x=>_unset(x,d))}function J(d,x,$){O(N=>swapInArray(N,d,x,$))}function D(d,x,$){O(N=>moveInArray(N,d,x,$))}function Q(d){const x=_get(c,d),$=_isPlainObject(x)?deepSetTouched(x,!1):!1,N=_isPlainObject($)?deepSet($,[]):[];h.update(W=>{const k=_set(W,d,x);return l&&setForm(l,k),k}),p.update(W=>_set(W,d,$)),u.update(W=>_set(W,d,N)),b.update(W=>_set(W,d,N))}const _=createSetHelper(S.update),M=createSetHelper(v.update),ee=createSetHelper(m.update);async function ne(){const d=get(h);p.set(deepSetTouched(d,!0)),m.set(null);const x=await n(d);return await o(d),x}function oe(){E(_cloneDeep(c)),w(d=>deepSet(d,!1)),m.set(null),v.set(!1)}function T(d){return async function($){var N,W,k,X,ie,ce,ue;const{createErrorEvent:fe,createSubmitEvent:be,createSuccessEvent:g}=createEventConstructors(),a=be();l?.dispatchEvent(a);const f=(W=(N=a.onError)!==null&&N!==void 0?N:d?.onError)!==null&&W!==void 0?W:r.onError,y=(X=(k=a.onSuccess)!==null&&k!==void 0?k:d?.onSuccess)!==null&&X!==void 0?X:r.onSuccess,H=(ue=(ce=(ie=a.onSubmit)!==null&&ie!==void 0?ie:d?.onSubmit)!==null&&ce!==void 0?ce:r.onSubmit)!==null&&ue!==void 0?ue:createDefaultSubmitHandler(l);if(!H||($?.preventDefault(),a.defaultPrevented))return;S.set(!0),m.set(null);const G=deepRemoveKey(get(h)),le=await n(G,d?.validate),q=await o(G,d?.warn);if(q&&b.set(_merge(deepSet(G,[]),q)),p.set(deepSetTouched(G,!0)),le&&(p.set(deepSetTouched(le,!0)),deepSome(le,j=>Array.isArray(j)?j.length>=1:!!j))){await new Promise(j=>setTimeout(j)),i().forEach(j=>{var z;return(z=j.onSubmitError)===null||z===void 0?void 0:z.call(j,{data:G,errors:le})}),S.set(!1);return}const re={setFields:E,setData:C,setTouched:w,setErrors:A,setWarnings:K,unsetField:L,addField:V,resetField:Q,reset:oe,setInitialValues:te.setInitialValues,moveField:D,swapFields:J,form:l,controls:l&&Array.from(l.elements).filter(isFormControl),config:Object.assign(Object.assign({},r),d)};try{const Z=await H(G,re);l?.dispatchEvent(g(Object.assign({response:Z},re))),await y?.(Z,re)}catch(Z){const j=fe(Object.assign({error:Z},re));if(l?.dispatchEvent(j),!f&&!j.defaultPrevented)throw Z;if(!f&&!j.errors)return;const z=j.errors||await f?.(Z,re);z&&(p.set(deepSetTouched(z,!0)),u.set(z),await new Promise(de=>setTimeout(de)),i().forEach(de=>{var he;return(he=de.onSubmitError)===null||he===void 0?void 0:he.call(de,{data:G,errors:get(u)})}))}finally{S.set(!1)}}}const te={setData:C,setFields:E,setTouched:w,setErrors:A,setWarnings:K,setIsSubmitting:_,setIsDirty:M,setInteracted:ee,validate:ne,reset:oe,unsetField:L,resetField:Q,addField:V,swapFields:J,moveField:D,createSubmitHandler:T,handleSubmit:T(),setInitialValues:d=>{c=deepSetKey(d)}};return{public:te,private:{_setFormNode(d){l=d},_getInitialValues:()=>c}}}function createFormAction({helpers:t,stores:r,config:n,extender:o,createSubmitHandler:i,handleSubmit:s,_setFormNode:l,_getInitialValues:c,_setCurrentExtenders:h,_getCurrentExtenders:p}){const{setFields:u,setTouched:b,reset:v,setInitialValues:S}=t,{addValidator:m,addTransformer:C,validate:w}=t,{data:A,errors:K,warnings:I,touched:E,isSubmitting:V,isDirty:O,interacted:L,isValid:J,isValidating:D}=r;function Q(_){_.requestSubmit||(_.requestSubmit=s);function M(g){return function(a){return a({form:_,stage:g,controls:Array.from(_.elements).filter(isFormControl),data:A,errors:K,warnings:I,touched:E,isValid:J,isValidating:D,isSubmitting:V,isDirty:O,interacted:L,config:n,addValidator:m,addTransformer:C,setFields:u,validate:w,reset:v,createSubmitHandler:i,handleSubmit:s})}}h(o.map(M("MOUNT"))),_.noValidate=!!n.validate;const{defaultData:ee,defaultTouched:ne}=getFormDefaultValues(_);l(_),S(_merge(_cloneDeep(ee),c())),u(c()),E.set(ne);function oe(g){const a=getPath(g),f=Array.from(_.querySelectorAll(`[name="${g.name}"]`)).filter(y=>isFormControl(y)?a===getPath(y):!1);if(f.length!==0)return f.length===1?A.update(y=>_set(y,getPath(g),g.checked)):A.update(y=>_set(y,getPath(g),f.filter(isInputElement).filter(H=>H.checked).map(H=>H.value)))}function T(g){const a=_.querySelectorAll(`[name="${g.name}"]`),f=Array.from(a).find(y=>isInputElement(y)&&y.checked);A.update(y=>_set(y,getPath(g),f?.value))}function te(g){var a;const f=Array.from((a=g.files)!==null&&a!==void 0?a:[]);A.update(y=>_set(y,getPath(g),g.multiple?f:f[0]))}function se(g){if(!g.multiple)A.update(a=>_set(a,getPath(g),g.value));else{const a=Array.from(g.options).filter(f=>f.selected).map(f=>f.value);A.update(f=>_set(f,getPath(g),a))}}function d(g){const a=g.target;if(!a||!isFormControl(a)||isSelectElement(a)||shouldIgnore(a)||["checkbox","radio","file"].includes(a.type)||!a.name)return;O.set(!0);const f=getInputTextOrNumber(a);L.set(a.name),A.update(y=>_set(y,getPath(a),f))}function x(g){const a=g.target;if(!(!a||!isFormControl(a)||shouldIgnore(a))&&!!a.name)if(b(getPath(a),!0),L.set(a.name),(isSelectElement(a)||["checkbox","radio","file","hidden"].includes(a.type))&&O.set(!0),a.type==="hidden"&&A.update(f=>_set(f,getPath(a),a.value)),isSelectElement(a))se(a);else if(isInputElement(a))a.type==="checkbox"?oe(a):a.type==="radio"?T(a):a.type==="file"&&te(a);else return}function $(g){const a=g.target;!a||!isFormControl(a)||shouldIgnore(a)||!a.name||(b(getPath(a),!0),L.set(a.name))}function N(g){g.preventDefault(),v()}const W={childList:!0,subtree:!0};function k(g){let a=get(A),f=get(E),y=get(K),H=get(I);for(const G of g.reverse()){if(G.hasAttribute("data-felte-keep-on-remove")&&G.dataset.felteKeepOnRemove!=="false")continue;const le=/.*(\[[0-9]+\]|\.[0-9]+)\.[^.]+$/;let q=getPath(G);const re=get(E);if(le.test(q)){const j=q.split(".").slice(0,-1).join("."),z=_get(re,j);_isPlainObject(z)&&Object.keys(z).length<=1&&(q=j)}a=_unset(a,q),f=_unset(f,q),y=_unset(y,q),H=_unset(H,q)}A.set(a),E.set(f),K.set(y),I.set(H)}const X=debounce(()=>{p().forEach(f=>{var y;return(y=f.destroy)===null||y===void 0?void 0:y.call(f)}),h(o.map(M("UPDATE")));const{defaultData:g,defaultTouched:a}=getFormDefaultValues(_);A.update(f=>_defaultsDeep(f,g)),E.update(f=>_defaultsDeep(f,a))},0);let ie=[];const ce=debounce(()=>{p().forEach(g=>{var a;return(a=g.destroy)===null||a===void 0?void 0:a.call(g)}),h(o.map(M("UPDATE"))),k(ie),ie=[]},0);function ue(g){for(const a of g)if(a.type==="childList"){if(a.addedNodes.length>0){if(!Array.from(a.addedNodes).some(y=>isElement(y)?isFormControl(y)?!0:getFormControls(y).length>0:!1))continue;X()}if(a.removedNodes.length>0)for(const f of a.removedNodes){if(!isElement(f))continue;const y=getFormControls(f);y.length!==0&&(ie.push(...y),ce())}}}const fe=new MutationObserver(ue);fe.observe(_,W),_.addEventListener("input",d),_.addEventListener("change",x),_.addEventListener("focusout",$),_.addEventListener("submit",s),_.addEventListener("reset",N);const be=K.subscribe(g=>{for(const a of _.elements){if(!isFormControl(a)||!a.name)continue;const f=_get(g,getPath(a)),y=Array.isArray(f)?f.join(`
`):typeof f=="string"?f:void 0;y!==a.dataset.felteValidationMessage&&(y?(a.dataset.felteValidationMessage=y,a.setAttribute("aria-invalid","true")):(delete a.dataset.felteValidationMessage,a.removeAttribute("aria-invalid")))}});return{destroy(){fe.disconnect(),_.removeEventListener("input",d),_.removeEventListener("change",x),_.removeEventListener("focusout",$),_.removeEventListener("submit",s),_.removeEventListener("reset",N),be(),p().forEach(g=>{var a;return(a=g.destroy)===null||a===void 0?void 0:a.call(g)})}}}return{form:Q}}function createValidationController(t){const r={aborted:!1,priority:t};return{signal:r,abort(){r.aborted=!0}}}function errorFilterer(t,r){if(_isPlainObject(t))return!r||_isPlainObject(r)&&Object.keys(r).length===0?deepSet(t,null):void 0;if(Array.isArray(t)){if(t.some(_isPlainObject))return;const n=Array.isArray(r)?r:[];return t.map((o,i)=>{const s=n[i];return Array.isArray(s)&&s.length===0?null:o&&s||null})}return Array.isArray(r)&&r.length===0?null:Array.isArray(r)?t?r:null:t&&r?[r]:null}function warningFilterer(t,r){if(_isPlainObject(t))return!r||_isPlainObject(r)&&Object.keys(r).length===0?deepSet(t,null):void 0;if(Array.isArray(t)){if(t.some(_isPlainObject))return;const n=Array.isArray(r)?r:[];return t.map((o,i)=>{const s=n[i];return Array.isArray(s)&&s.length===0?null:s||null})}return Array.isArray(r)&&r.length===0?null:Array.isArray(r)?r:r?[r]:null}function filterErrors([t,r]){return _mergeWith(r,t,errorFilterer)}function filterWarnings([t,r]){return _mergeWith(r,t,warningFilterer)}function createDerivedFactory(t){return function(n,o,i){const s=Array.isArray(n)?n:[n],l=new Array(s.length),c=t(i),h=c.set,p=c.subscribe;let u;function b(){u=s.map((S,m)=>S.subscribe(C=>{l[m]=C,h(o(l))}))}function v(){u?.forEach(S=>S())}return c.subscribe=function(m){const C=p(m);return()=>{C()}},[c,b,v]}}function createStores(t,r){var n,o,i,s,l,c,h,p,u;const b=createDerivedFactory(t),v=r.initialValues=r.initialValues?deepSetKey(executeTransforms(_cloneDeep(r.initialValues),r.transform)):{},S=deepSetTouched(deepRemoveKey(v),!1),m=t(S),C=t(0),[w,A,K]=b([m,C],([F,P])=>deepSome(F,U=>!!U)&&P>=1,!1);delete w.set,delete w.update;function I(F){let P;return async function(U,Y,B,pe=!1){if(!B||!U)return;let ae=Y&&Object.keys(Y).length>0?Y:deepSet(U,[]);const me=createValidationController(pe);if((!P?.signal.priority||pe)&&(P?.abort(),P=me),P.signal.priority&&!pe)return;C.update(ge=>ge+1);const ye=runValidations(U,B);return ye.forEach(async ge=>{const _e=await ge;me.signal.aborted||(ae=mergeErrors([ae,_e]),F.set(ae))}),await Promise.all(ye),P=void 0,C.update(ge=>ge-1),ae}}let E=deepSet(S,[]);const V=t(v),O=deepSet(S,[]),L=t(O),J=t(_cloneDeep(O)),[D,Q,_]=b([L,J],mergeErrors,_cloneDeep(O)),M=deepSet(S,[]),ee=t(M),ne=t(_cloneDeep(M)),[oe,T,te]=b([ee,ne],mergeErrors,_cloneDeep(M)),[se,d,x]=b([D,m],filterErrors,_cloneDeep(O)),[$,N,W]=b([oe,m],filterWarnings,_cloneDeep(M));let k=!1;const[X,ie,ce]=b(D,([F])=>{var P;return k?!deepSome(F,R=>Array.isArray(R)?R.length>=1:!!R):(k=!0,!r.validate&&!(!((P=r.debounced)===null||P===void 0)&&P.validate))},!r.validate&&!(!((n=r.debounced)===null||n===void 0)&&n.validate));delete X.set,delete X.update;const ue=t(!1),fe=t(!1),be=t(null),g=I(L),a=I(ee),f=I(J),y=I(ne),H=debounce(f,(l=(i=(o=r.debounced)===null||o===void 0?void 0:o.validateTimeout)!==null&&i!==void 0?i:(s=r.debounced)===null||s===void 0?void 0:s.timeout)!==null&&l!==void 0?l:300,{onInit:()=>{C.update(F=>F+1)},onEnd:()=>{C.update(F=>F-1)}}),G=debounce(y,(u=(h=(c=r.debounced)===null||c===void 0?void 0:c.warnTimeout)!==null&&h!==void 0?h:(p=r.debounced)===null||p===void 0?void 0:p.timeout)!==null&&u!==void 0?u:300);async function le(F,P){var R;const U=deepRemoveKey(F),Y=g(U,E,P??r.validate,!0);if(P)return Y;const B=f(U,E,(R=r.debounced)===null||R===void 0?void 0:R.validate,!0);return mergeErrors(await Promise.all([Y,B]))}async function q(F,P){var R;const U=deepRemoveKey(F),Y=a(U,E,P??r.warn,!0);if(P)return Y;const B=y(U,E,(R=r.debounced)===null||R===void 0?void 0:R.warn,!0);return mergeErrors(await Promise.all([Y,B]))}let re=O,Z=M;function j(){const F=V.subscribe(B=>{var pe,ae;const me=deepRemoveKey(B);g(me,E,r.validate),a(me,E,r.warn),H(me,E,(pe=r.debounced)===null||pe===void 0?void 0:pe.validate),G(me,E,(ae=r.debounced)===null||ae===void 0?void 0:ae.warn)}),P=m.subscribe(B=>{E=deepSet(B,[])}),R=D.subscribe(B=>{re=B}),U=oe.subscribe(B=>{Z=B});Q(),ie(),T(),d(),N(),A();function Y(){F(),x(),_(),te(),W(),ce(),K(),P(),R(),U()}return Y}function z(F){L.set(F(re)),J.set({})}function de(F){ee.set(F(Z)),ne.set({})}function he(F){z(()=>F)}function ve(F){de(()=>F)}return se.set=he,se.update=z,$.set=ve,$.update=de,{data:V,errors:se,warnings:$,touched:m,isValid:X,isSubmitting:ue,isDirty:fe,isValidating:w,interacted:be,validateErrors:le,validateWarnings:q,cleanup:r.preventStoreStart?()=>{}:j(),start:j}}function createForm$1(t,r){var n,o;(n=t.extend)!==null&&n!==void 0||(t.extend=[]),(o=t.debounced)!==null&&o!==void 0||(t.debounced={}),t.validate&&!Array.isArray(t.validate)&&(t.validate=[t.validate]),t.debounced.validate&&!Array.isArray(t.debounced.validate)&&(t.debounced.validate=[t.debounced.validate]),t.transform&&!Array.isArray(t.transform)&&(t.transform=[t.transform]),t.warn&&!Array.isArray(t.warn)&&(t.warn=[t.warn]),t.debounced.warn&&!Array.isArray(t.debounced.warn)&&(t.debounced.warn=[t.debounced.warn]);function i(T,{debounced:te,level:se}={debounced:!1,level:"error"}){var d;const x=se==="error"?"validate":"warn";(d=t.debounced)!==null&&d!==void 0||(t.debounced={});const $=te?t.debounced:t;$[x]?$[x]=[...$[x],T]:$[x]=[T]}function s(T){t.transform?t.transform=[...t.transform,T]:t.transform=[T]}const l=Array.isArray(t.extend)?t.extend:[t.extend];let c=[];const h=()=>c,p=T=>{c=T},{isSubmitting:u,isValidating:b,data:v,errors:S,warnings:m,touched:C,isValid:w,isDirty:A,cleanup:K,start:I,validateErrors:E,validateWarnings:V,interacted:O}=createStores(r.storeFactory,t),L=v.update,J=v.set,D=T=>L(te=>deepSetKey(executeTransforms(T(te),t.transform))),Q=T=>J(deepSetKey(executeTransforms(T,t.transform)));v.update=D,v.set=Q;const _=createHelpers({extender:l,config:t,addValidator:i,addTransformer:s,validateErrors:E,validateWarnings:V,_getCurrentExtenders:h,stores:{data:v,errors:S,warnings:m,touched:C,isValid:w,isValidating:b,isSubmitting:u,isDirty:A,interacted:O}}),{createSubmitHandler:M,handleSubmit:ee}=_.public;c=l.map(T=>T({stage:"SETUP",errors:S,warnings:m,touched:C,data:v,isDirty:A,isValid:w,isValidating:b,isSubmitting:u,interacted:O,config:t,addValidator:i,addTransformer:s,setFields:_.public.setFields,reset:_.public.reset,validate:_.public.validate,handleSubmit:ee,createSubmitHandler:M}));const ne=Object.assign({config:t,stores:{data:v,touched:C,errors:S,warnings:m,isSubmitting:u,isValidating:b,isValid:w,isDirty:A,interacted:O},createSubmitHandler:M,handleSubmit:ee,helpers:Object.assign(Object.assign({},_.public),{addTransformer:s,addValidator:i}),extender:l,_getCurrentExtenders:h,_setCurrentExtenders:p},_.private),{form:oe}=createFormAction(ne);return Object.assign({data:v,errors:S,warnings:m,touched:C,isValid:w,isSubmitting:u,isValidating:b,isDirty:A,interacted:O,form:oe,cleanup:K,startStores:I},_.public)}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function __rest(t,r){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&r.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,o=Object.getOwnPropertySymbols(t);i<o.length;i++)r.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(t,o[i])&&(n[o[i]]=t[o[i]]);return n}function createAccessor(t){const r={},n={};function o(i){if(!i)return t();if(!r[i.toString()]){const l=createSignal(getValue(untrack(t),i));n[i.toString()]=l,r[i.toString()]=i}const[s]=n[i.toString()];return s()}return createEffect(()=>{const i=t(),s=Object.keys(r);for(const l of s){const c=r[l],h=getValue(i,c),[p,u]=n[c.toString()];isEqual(h,untrack(p))||u(h)}}),o}function createSubscriber(t){return function(n){return createRoot(o=>(createEffect(()=>n(t())),o))}}const storeFactory=t=>{const[r,n]=createSignal(t);function o(c){n(()=>c)}function i(c){n(c)}const s=createAccessor(r),l=createSubscriber(r);return s.subscribe=l,s.set=o,s.update=i,s};function createForm(t){const r=createForm$1(t??{},{storeFactory}),{form:n,cleanup:o,startStores:i,data:s,errors:l,warnings:c,touched:h}=r,p=__rest(r,["form","cleanup","startStores","data","errors","warnings","touched"]);function u(b){const{destroy:v}=n(b);return onCleanup(v),{destroy:v}}return onCleanup(o),Object.assign(Object.assign({},p),{data:s,errors:l,warnings:c,touched:h,form:u})}const _tmpl$$5=template('<form><a><i class="bi bi-plus-circle-fill"></i> Add Color</a></form>'),_tmpl$2$5=template('<i class="bi bi-cloud-arrow-down-fill"></i>'),_tmpl$3$5=template('<label><input type="file"><i class="bi bi-cloud-arrow-up-fill"></i> Import Color Set</label>'),_tmpl$4$2=template("<div></div>"),_tmpl$5$2=template("<label></label>"),_tmpl$6$1=template('<div class="form-element"><label for="colorName">Name</label><input type="text"></div>'),_tmpl$7=template('<div class="form-element"><label for="colorHEX">HEX</label><input type="text" maxlength="7" style="text-transform:uppercase"></div>'),_tmpl$8=template('<a><i class="bi bi-trash3-fill"></i></a>'),ColorSelector=()=>{const[colors,setColors]=createSignal(Object.entries(colorScale())),[jsonFile,setJsonFile]=createSignal(),addColor=()=>{setColors([...colors(),["NAME","#ffffff"]])},removeColor=t=>{setColors([...colors().slice(0,t),...colors().slice(t+1)])},FormGroup=styled("div")`
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
    .form-element {
      display: flex;
      flex-direction: row;
      width: auto;
      align-items: center;
      position: relative;
      margin-left: 4px;
      label {
        width: 50px;
        position: absolute;
        padding: 4px;
        padding-left: 8px;
        background-color: rgba(255, 255, 255, 0.14);
        left: 1px;
        border-radius: 2px 0 0 2px;
      }
      input {
        padding: 4px 8px;
        padding-left: 60px;
        background-color:rgba(255, 255, 255, 0.02);
        border: 1px solid rgba(255, 255, 255, 0.14);
        color: white;
        border-radius: 3px;
        outline: none;
        width: 180px;
        &:focus {
          box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.14);
          font-weight: bold;
        }
        @media only screen and (max-width: 472px) {
        & {
            width: 120px;
          }
        }
      }
    }
  `,arrToObj=t=>{let r={};for(let n=0;n<t.length;n+=2)r[t[n]]=t[n+1];return r},arrToArr=t=>{let r=[];for(let n=0;n<t.length;n+=2)r.push(t[n]);return r},{form,data,errors,isSubmitting,isValid}=createForm({onSubmit:t=>{setColorScale(arrToObj(Object.values(t)))},validate:t=>{const r={};let n=arrToArr(Object.values(t));return n.length!==new Set(n).size&&(r.duplicate="There are duplicates in the color names!"),isSubmitting&&!isValid&&(console.log("wow"),toast.custom(o=>createComponent(Toast,{color:"error",showExit:!0,toast:o,children:"Something Happened"})),console.log("lmao")),r}});createEffect(()=>{setColors(Object.entries(colorScale()))});const fileDownload=()=>{const t=JSON.stringify(colorScale()),r=new Blob([t],{type:"text/plain"}),n=URL.createObjectURL(r),o=document.createElement("a");o.download="ambientcolors.json",o.href=n,o.click()},fileChange=e=>{const fileReader=new FileReader;fileReader.readAsText(e.target.files[0]),fileReader.onload=e=>{setJsonFile(eval(`(${e.target?.result})`)),setColors(Object.entries(jsonFile()))}};return[(()=>{const t=_tmpl$$5.cloneNode(!0),r=t.firstChild;return form(t,()=>!0),t.style.setProperty("display","flex"),t.style.setProperty("flex-direction","column"),t.style.setProperty("gap","8px"),t.style.setProperty("padding","4px 0 8px 0"),t.style.setProperty("align-items","flex-start"),insert(t,createComponent(For,{get each(){return colors()},children:([n,o],i)=>createComponent(FormGroup,{get children(){return[(()=>{const s=_tmpl$4$2.cloneNode(!0);return s.style.setProperty("width","12px"),insert(s,()=>i()+1),s})(),(()=>{const s=_tmpl$5$2.cloneNode(!0);return insert(s,createComponent(ColorIdentifier,{get color(){return colors()[i()][1]}})),s})(),(()=>{const s=_tmpl$6$1.cloneNode(!0),l=s.firstChild,c=l.nextSibling;return c.value=n,createRenderEffect(()=>setAttribute(c,"name",`colorName${i()}`)),s})(),(()=>{const s=_tmpl$7.cloneNode(!0),l=s.firstChild,c=l.nextSibling;return c.value=o,createRenderEffect(()=>setAttribute(c,"name",`colorHEX${i()}`)),s})(),(()=>{const s=_tmpl$8.cloneNode(!0);return s.$$click=()=>removeColor(i()),s})()]}})}),r),r.$$click=()=>addColor(),insert(t,createComponent(Button,{type:"submit",children:"Generate Color Set"}),null),t})(),createComponent(Flex,{flexDirection:"row",gap:12,style:{"padding-bottom":"20px"},get children(){return[createComponent(Button,{type:"submit",onclick:fileDownload,get children(){return[_tmpl$2$5.cloneNode(!0)," Export Color Set"]}}),createComponent(Button,{type:"submit",get children(){const t=_tmpl$3$5.cloneNode(!0),r=t.firstChild;return t.style.setProperty("font-weight","bold"),t.style.setProperty("cursor","pointer"),r.addEventListener("change",fileChange),r.style.setProperty("display","none"),t}})]}})]};delegateEvents(["click"]);const LuminanceCalc=t=>(chroma(t).luminance()*100).toFixed(2),normalize=(t,r,n)=>(t-n)/(r-n),normalizeArr=(t,r)=>{const n={},o=Object.values(t),i=o[Math.floor(o.length/2)],s=Math.min(...o),l=Math.max(...o),c=Object.entries(t);let h=0;if(r=="to-primary")for(var[p,u]of c)h>Math.floor(o.length/2)&&(n[p]=Number(normalize(u,i,s).toFixed(2))*.5),h==Math.floor(o.length/2)&&(n[p]=.5),h<Math.floor(o.length/2)&&(n[p]=Number(normalize(u,l,i).toFixed(2))*.5+.5),h+=1;if(r=="to-min-max")for(var[p,u]of c)n[p]=Number(normalize(u,l,s).toFixed(2));if(r=="none")for(var[p,u]of c)n[p]=Number((u/100).toFixed(2));return n},relativeLuminanceCalc=(t,r)=>{const n={};for(var o of Object.values(t))n[o]=Number(LuminanceCalc(o));return normalizeArr(n,r)},_tmpl$$4=template('<div class="start"><p>1</p></div>'),_tmpl$2$4=template('<div class="end"><p>0</p></div>'),_tmpl$3$4=template("<br>"),ColorGraph=t=>{const r=()=>t.colorSwatch,n=()=>t.displayType,[o,i]=createSignal(relativeLuminanceCalc(r(),n()));createEffect(()=>{i(relativeLuminanceCalc(r(),n()))});const s=styled("p")`
    margin-top: -22px;
    font-size: 10px;
    opacity: 0;
    transition: opacity 100ms ease-in-out;
    line-height: 2;
    &:hover {
      opacity: 1;
    }
  `,l=styled("div")`
    width: 100%;
    height: 1px;
    background-color: rgba(256, 256, 256, 0.14);
    margin-top: 8px;
    display: flex;
    justify-content: space-between;

    .start, .end {
      height: 10px;
      margin-top: -4px;
      p {
        margin-top: -4px;
      }
    }

    .start{
      border-left: 1px solid rgba(256, 256, 256, 0.14);
      margin-left: -1px;
      p {
        margin-left: -28px;
      }
    }

    .end {
      border-right: 1px solid rgba(256, 256, 256, 0.14);
      margin-right: -1px;
      p {
        transform: translateX(28px);
      }
    }
  `;return createComponent(Flex,{style:{width:"100%",height:"33px",position:"relative","padding-top":"16px",cursor:"crosshair"},get children(){return[createComponent(l,{get children(){return[_tmpl$$4.cloneNode(!0),_tmpl$2$4.cloneNode(!0)]}}),createComponent(For,{get each(){return Object.entries(o())},children:([c,h],p)=>createComponent(ColorIdentifier,{color:c,style:{position:"absolute",left:`calc(${100-h*100}% - 8px)`},get children(){return createComponent(s,{get children(){return[c,_tmpl$3$4.cloneNode(!0),_tmpl$3$4.cloneNode(!0),h]}})}})})]}})},Select=styled("select")`
  background: none;
  color: inherit;
  font-weight: bold !important;
  cursor: pointer !important;
  outline: none;
  padding: 6px 12px;
  background-color: rgba(255, 255, 255, 0.14);
  border-radius: 3px;
  border: none;
  max-width: auto;
  flex: none;
  transition: all 100ms ease-in-out;
  outline: 0;
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.14);
  margin-top: 12px;


  -webkit-appearance: none;


  &:hover {
    background-color: rgba(255, 255, 255, 0.09);
  }
  &:active {
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.14);
  }
  &::after {
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='sprites'%3E%3Csymbol id='select-arrow-down' viewbox='0 0 10 6'%3E%3Cpolyline points='1 1 5 5 9 1'%3E%3C/polyline%3E%3C/symbol%3E%3C/svg%3E");
    position: absolute;
    right: 12px;
    top: calc(50% - 3px);
    width: 10px;
    height: 6px;
    stroke-width: 2px;
    stroke: #9098a9;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    pointer-events: none;
  }
`,_tmpl$$3=template("<br>"),_tmpl$2$3=template('<option value="to-primary" selected>Primary Normalization (Recommended)</option>'),_tmpl$3$3=template('<option value="to-min-max">Min Max Normalization</option>'),_tmpl$4$1=template('<option value="none">No Normalization</option>'),_tmpl$5$1=template("<p>Graph Normalization Techniques:<br><strong>No Normalization:</strong> All colors represent the raw 0 to 1 value in luminance.<br><strong>Min Max Normalization:</strong> All data is normalized to min and max of each color group from 0 to 1.<br><strong>Primary Normalization (Recommended):</strong> Luminance values are normalized based on the primary color's luminance value as 0.5 (center).</p>"),GraphList=t=>{const r=()=>t.colorSwatch,[n,o]=createSignal("to-primary"),i=s=>{o(s.target.value)};return[createComponent(Flex,{flexDirection:"column",gap:10,style:{padding:"0 28px"},get children(){return createComponent(For,{get each(){return Object.entries(r())},children:([s,l],c)=>createComponent(ColorGraph,{colorSwatch:l,get displayType(){return n()}})})}}),_tmpl$$3.cloneNode(!0),createComponent(Select,{get value(){return n()},onChange:i,get children(){return[_tmpl$2$3.cloneNode(!0),_tmpl$3$3.cloneNode(!0),_tmpl$4$1.cloneNode(!0)]}}),_tmpl$$3.cloneNode(!0),(()=>{const s=_tmpl$5$1.cloneNode(!0);return s.style.setProperty("padding-top","12px"),s.style.setProperty("color","rgba(256, 256, 256, 0.5)"),s})()]},_tmpl$$2=template("<h3>Ambient Color Generation Tool</h3>"),_tmpl$2$2=template("<p>This tool is designed to generate <strong>contrast ready</strong> color pallets built specifically for UIUX design. Unlike other pallette generation tools, Ambient generates the colors <strong>based on the primary color</strong>. Hues, saturation, and relative lightness adjustments are made automatically using our <a>algorithm</a>. These values can be adjusted by adjusting the base functions.styled.tsx file located inside the styles folder. As ambient relies on the primary color for alternative color generation, primary colors <strong>must be contrast compliant</strong>. Ambient displays both WACG and APCA definitions of text contrast, a 4.5:1(WACG) or 60Lc(APCA) is recommended for text contrast. Please remember that for the best results, contrast in colors or differences in color should not represent meaningful information in UIUX design to prevent accessability issues. </p>"),_tmpl$3$2=template("<br>"),Introduction=()=>[_tmpl$$2.cloneNode(!0),_tmpl$2$2.cloneNode(!0),_tmpl$3$2.cloneNode(!0)],_tmpl$$1=template("<form></form>"),_tmpl$2$1=template("<br>"),_tmpl$3$1=template("<div></div>"),_tmpl$4=template("<label></label>"),_tmpl$5=template('<div class="form-element"><label for="colorName">Name</label><input type="text"></div>'),_tmpl$6=template('<div class="form-element"><label for="colorHEX">HEX</label><input type="text" maxlength="7" style="text-transform:uppercase"></div>'),TextColorSelector=()=>{const[t,r]=createSignal(Object.entries(textColorScale())),n=styled("div")`
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
    .form-element {
      display: flex;
      flex-direction: row;
      width: auto;
      align-items: center;
      position: relative;
      margin-left: 4px;
      label {
        width: 50px;
        position: absolute;
        padding: 4px;
        padding-left: 8px;
        background-color: rgba(255, 255, 255, 0.14);
        left: 1px;
        border-radius: 2px 0 0 2px;
      }
      input {
        padding: 4px 8px;
        padding-left: 60px;
        background-color:rgba(255, 255, 255, 0.02);
        border: 1px solid rgba(255, 255, 255, 0.14);
        color: white;
        border-radius: 3px;
        outline: none;
        width: 180px;
        &:focus {
          box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.14);
          font-weight: bold;
        }
        @media only screen and (max-width: 472px) {
        & {
            width: 120px;
          }
        }
      }
    }
  `,o=u=>{let b={};for(let v=0;v<u.length;v+=2)b[u[v]]=u[v+1];return b},i=u=>{let b=[];for(let v=0;v<u.length;v+=2)b.push(u[v]);return b},{form:s,data:l,errors:c,isSubmitting:h,isValid:p}=createForm({onSubmit:u=>{setTextColorScale(o(Object.values(u)))},validate:u=>{const b={};let v=i(Object.values(u));return v.length!==new Set(v).size&&(b.duplicate="There are duplicates in the color names!"),h&&!p&&(console.log("wow"),toast.custom(S=>createComponent(Toast,{color:"error",showExit:!0,toast:S,children:"Something Happened"})),console.log("lmao")),b}});return createEffect(()=>{r(Object.entries(textColorScale()))}),[(()=>{const u=_tmpl$$1.cloneNode(!0);return s(u,()=>!0),u.style.setProperty("display","flex"),u.style.setProperty("flex-direction","column"),u.style.setProperty("gap","8px"),u.style.setProperty("padding","4px 0 16px 0"),u.style.setProperty("align-items","flex-start"),insert(u,createComponent(For,{get each(){return t()},children:([b,v],S)=>createComponent(n,{get children(){return[(()=>{const m=_tmpl$3$1.cloneNode(!0);return m.style.setProperty("width","auto"),insert(m,b),m})(),(()=>{const m=_tmpl$4.cloneNode(!0);return insert(m,createComponent(ColorIdentifier,{get color(){return t()[S()][1]}})),m})(),(()=>{const m=_tmpl$5.cloneNode(!0),C=m.firstChild,w=C.nextSibling;return m.style.setProperty("display","none"),w.value=b,createRenderEffect(()=>setAttribute(w,"name",`colorName${S()}`)),m})(),(()=>{const m=_tmpl$6.cloneNode(!0),C=m.firstChild,w=C.nextSibling;return w.value=v,createRenderEffect(()=>setAttribute(w,"name",`colorHEX${S()}`)),m})()]}})}),null),insert(u,createComponent(Button,{type:"submit",children:"Change Text Colors"}),null),u})(),_tmpl$2$1.cloneNode(!0)]},_tmpl$=template("<div><h3>Color Table</h3><p>Color table of generated colors can be edited here. Only the primary color is considered. <strong>Color names must be unique.</strong></p><br><h4>Text Colors</h4></div>"),_tmpl$2=template("<div><h3>Color Graph</h3><p>These values are the calculated luminance values of each color. The graph does not update until the color set is generated. </p><br><br></div>"),_tmpl$3=template("<br>"),Home=()=>[createComponent(Introduction,{}),createComponent(Flex,{flexDirection:"row",gap:16,get children(){return[(()=>{const t=_tmpl$.cloneNode(!0),r=t.firstChild,n=r.nextSibling,o=n.nextSibling,i=o.nextSibling;return t.style.setProperty("width","auto"),insert(t,createComponent(ColorSelector,{}),i),insert(t,createComponent(TextColorSelector,{}),null),t})(),(()=>{const t=_tmpl$2.cloneNode(!0),r=t.firstChild,n=r.nextSibling,o=n.nextSibling;return t.style.setProperty("width","100%"),n.style.setProperty("padding-bottom","12px"),insert(t,createComponent(GraphList,{get colorSwatch(){return ColorShades()}}),o),t})()]}}),createComponent(ColorListPage,{}),_tmpl$3.cloneNode(!0)];export{Home as default};

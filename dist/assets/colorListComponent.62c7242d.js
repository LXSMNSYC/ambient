import{b as m,s as N,d as se,e as ie,c,m as ce,f as L,i as v,g as W,t as r,h as pe,j as S,k as H,F as T,l as A,n as de,p as j,C as ue,q as xe,r as he,u as ge,S as U,v as J,w as V}from"./index.99ac64be.js";const be=2.4,me=.2126729,fe=.7151522,$e=.072175,Ce=.56,we=.57,ve=.62,_e=.65,E=.022,K=1.414,ye=1.14,Se=1.14,Ne=.035991,ke=.035991,Ae=27.7847239587675,Fe=27.7847239587675,q=.027,Q=.027,Z=.001,Pe=5e-4;function Y(t){let n=(t&16711680)>>16,e=(t&65280)>>8,l=t&255;function a(d){return Math.pow(d/255,be)}return me*a(n)+fe*a(e)+$e*a(l)}function Be(t,n){var e=0,l=0;return t=t>E?t:t+Math.pow(E-t,K),n=n>E?n:n+Math.pow(E-n,K),Math.abs(n-t)<Pe?0:(n>t?(e=(Math.pow(n,Ce)-Math.pow(t,we))*ye,l=e<Z?0:e<Ne?e-e*Ae*q:e-q):(e=(Math.pow(n,_e)-Math.pow(t,ve))*Se,l=e>-Z?0:e>-ke?e-e*Fe*Q:e+Q),l*100)}const Le=(t,n)=>m.contrast(t,n),F=(t,n)=>{let e=0,l="",a="";for(const[d,f]of Object.entries(t)){let h=Le(f,n);if(h<e){if(e>4.5&&k()==1)return[e.toFixed(2),l,a]}else if(e=h,l=d,a=f,e>4.5&&k()==1)return[e.toFixed(2),l,a]}return e>4.5?[e.toFixed(2),l,a]:["NA","NA",a]},re=(t,n)=>{const e=parseInt(`0x${t.substring(1)}`,16),l=parseInt(`0x${n.substring(1)}`,16);return Be(Y(e),Y(l))},w=(t,n)=>{let e=0,l="",a="";for(const[d,f]of Object.entries(t)){let h=Math.abs(re(f,n));if(h<e){if(e>60&&k()==1)return[e.toFixed(2),l,a]}else if(e=h,l=d,a=f,e>60&&k()==1)return[e.toFixed(2),l,a]}return e>60?[e.toFixed(2),l,a]:["NA","NA",a]},G=(t,n)=>{let e=0,l="",a="";for(const[d,f]of Object.entries(t)){let h=Math.abs(re(n,f));if(h>e&&(e=h,l=d,a=f,e>60&&k()==1))return[e.toFixed(2),l,a]}return e>60?[e.toFixed(2),l,a]:["NA","NA",a]},Ee=N("div")`
  width: 16px;
  height: 16px;
  border-radius: 3px;
  background-color: ${t=>t.color?t.color:"white"};
  border: 1px solid rgba(255, 255, 255, 0.14);
`,Me=r("<p></p>"),Te=r('<a><i class="bi bi-x"></i></a>'),ee=t=>{const[n,e]=ie(t,["children","toast","color","showExit","box"]),l=()=>{switch(t.color){case"warning":return"#674d0f";case"error":return"#5d000a";case"info":return"#040e1f"}return"black"},a=N("div")`
    display: flex;
    background-color: ${l};
    border-radius: 3px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    padding: 10px 10px 6px 10px;
    gap: 8px;

    @media only screen and (max-width: 780px) {
      padding: 8px 8px 6px 8px;
    }
  `;return c(a,ce(e,{get children(){return[L(()=>L(()=>!!n.box,!0)()&&c(Ee,{get color(){return t.box}})),(()=>{const d=Me.cloneNode(!0);return v(d,()=>t.children),d})(),L(()=>L(()=>!!n.showExit,!0)()&&(()=>{const d=Te.cloneNode(!0);return d.$$click=()=>W.dismiss(t.toast.id),d})())]}}))};se(["click"]);const je=r('<i class="bi bi-x-circle"></i>'),Oe=r('<i class="bi bi-dash-circle"></i>'),Ge=r('<i class="bi bi-exclamation-circle"></i>'),We=r('<i class="bi bi-check-circle"></i>'),He=r("<div></div>"),Re=r("<p></p>"),te=r("<p>BG Color Safe</p>"),De=r('<p class="contrast"><object><strong>WCAG: </strong> </object><br><object><strong>APCA: </strong> </object><br><object><strong>APCA TEXT: </strong> </object><br><object><strong>APCA BG: </strong> </object></p>'),Xe=r('<p class="helper"><strong></strong><br></p>'),ze=t=>{const n=()=>t.colorSwatch;pe(()=>{S()});const e=s=>{navigator.clipboard.writeText(s).then(()=>{W.custom(C=>c(ee,{box:s,showExit:!0,toast:C,get children(){return["Pallette Copied! ",s]}}),{unmountDelay:0})},()=>{W.custom(C=>c(ee,{color:"error",showExit:!0,toast:C,children:"Copying Failed!"}))})},l=(s,C,u)=>{const P=F(s,u)[0],o=w(s,u)[0],i=F(C,u)[0],g=w(C,u)[0],p=G(C,u)[0];return i=="NA"||P=="NA"?g=="NA"&&p?je.cloneNode(!0):o=="NA"?Oe.cloneNode(!0):Ge.cloneNode(!0):We.cloneNode(!0)},a=N("div")`
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

    .left {
      background-color: aliceblue;
      height: 110px;
      width: 500px;
    }
  `,d=N("div")`
    position: absolute;
    top: 0px;
    right: 6px;
    i {
      font-size: 12px;
    }
  `,f=s=>s==0?{"border-radius":"5px 0 0 5px",padding:"5px 5px 5px 5px","border-width":"1px 0 1px 1px","margin-right":"-5px"}:s==1?{"border-radius":"0 5px 5px 0",padding:"5px 5px 5px 5px","border-width":"1px 1px 1px 0",margin:"0 -5px"}:s==A()-2?{"border-radius":"5px 0 0 5px",padding:"5px 5px 5px 5px","border-width":"1px 0 1px 1px",margin:"0 -5px"}:s==A()-1?{"border-radius":"0 5px 5px 0",padding:"5px 5px 5px 5px","border-width":"1px 1px 1px 0","margin-left":"-5px"}:{padding:"5px 0"},h=N("div")`
    background-color: ${s=>s.color};
    height: 84px;
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 5px 8px;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    border: 1px solid ${s=>w(S(),s.color)[2]=="#FFFFFF"?m(s.color).brighten(1.02).hex():m(s.color).darken(1.02).hex()};
    width: 100%;

    p {
      color: ${s=>w(S(),s.color)[2]} !important;
      font-size: 10px;
      line-height: 12px;
    }
    .contrast {
      opacity: ${()=>ne()};
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
  `;return(()=>{const s=He.cloneNode(!0);return v(s,c(H,{get each(){return Object.entries(n())},children:([C,u],P)=>[(()=>{const o=Re.cloneNode(!0);return v(o,C),o})(),c(a,{get children(){return c(H,{get each(){return Object.entries(u)},children:([o,i],g)=>c(T,{flexDirection:"column",get style(){return Object.assign({"flex-basis":"100%",overflow:"hidden","border-style":"solid","border-color":"rgba(256, 256, 256, 0.14)"},f(g()))},get children(){return[c(h,{color:i,get style(){return{border:g()==Math.floor(A()/2)?"1px solid rgba(256, 256, 256, 1)":"",flex:g()==A()/2?"none":"1","border-radius":(g()==Math.floor(A()/2),"3px")}},onClick:()=>e(i),get children(){return[c(d,{get style(){return{color:w(S(),i)[2]}},get children(){return l(u,S(),i)}}),(()=>{const p=De.cloneNode(!0),_=p.firstChild;_.firstChild.nextSibling;const b=_.nextSibling,x=b.nextSibling;x.firstChild.nextSibling;const le=x.nextSibling,B=le.nextSibling;B.firstChild.nextSibling;const ae=B.nextSibling,O=ae.nextSibling;return O.firstChild.nextSibling,v(_,()=>`${F(u,i)[1]} (${F(u,i)[0]})`,null),v(x,()=>`${w(u,i)[1]} (${w(u,i)[0]})`,null),v(B,()=>w(S(),i)[0],null),v(O,()=>G(S(),i)[0],null),de(y=>{const D=F(u,i)[2],X=w(u,i)[2],z=w(S(),i)[2],I=G(S(),i)[2];return D!==y._v$&&_.style.setProperty("color",y._v$=D),X!==y._v$2&&x.style.setProperty("color",y._v$2=X),z!==y._v$3&&B.style.setProperty("color",y._v$3=z),I!==y._v$4&&O.style.setProperty("color",y._v$4=I),y},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),p})()]}}),(()=>{const p=Xe.cloneNode(!0),_=p.firstChild;return _.nextSibling,v(_,o),v(p,i,null),p})()]}})})}}),c(T,{flexDirection:"row",flexJustify:"space-between",style:{color:"rgba(256, 256, 256, 0.4)","margin-top":"-3px",padding:"0 5px 9px 5px"},get children(){return[(()=>{const o=te.cloneNode(!0);return o.style.setProperty("font-size","12px"),o})(),(()=>{const o=te.cloneNode(!0);return o.style.setProperty("font-size","12px"),o})()]}})]})),s})()},Ie=r("<h5></h5>"),Ue=r("<br>"),Je=t=>{const n=()=>t.swatchList;return c(H,{get each(){return n()},children:e=>[(()=>{const l=Ie.cloneNode(!0);return v(l,()=>e.name),l})(),c(ze,{get colorSwatch(){return e.swatch}}),Ue.cloneNode(!0)]})},oe=N("button")`
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
`,M=N("select")`
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
`,Ve=r("<h3>Generated Colors</h3>"),Ke=r("<p>Export color type:</p>"),qe=r('<option value="hex" selected>HEX (Default)</option>'),Qe=r('<option value="rgb">RGB</option>'),Ze=r('<option value="hsl">HSL</option>'),Ye=r('<option value="hsv">HSV</option>'),et=r('<option value="hsi">HSI</option>'),tt=r('<option value="lab">LAB</option>'),ot=r('<option value="oklab">OKLAB</option>'),rt=r('<option value="lch">LCH</option>'),nt=r('<option value="hcl">HCL</option>'),lt=r('<option value="okhcl">OKHCL</option>'),at=r("<p>Color Shade Length:</p>"),st=r('<option value="7" selected>7 (Default)</option>'),it=r('<option value="9">9</option>'),ct=r("<p>Contrast Color Method:</p>"),pt=r('<option value="0" selected>Most Contrasting Color (Default)</option>'),dt=r('<option value="1">First Compliant Color</option>'),ut=r("<p>Always Show Contrast Info</p>"),xt=r('<option value="0" selected>False (Default)</option>'),ht=r('<option value="1">True</option>'),gt=r("<br>"),[ne,bt]=j("0"),[k,mt]=j(0),wt=()=>{const[t,n]=j("hex"),[e,l]=j(7),a=()=>{let o=[];for(const i of h()){let g={};g.name=i.name;let p={};for(const[_,R]of Object.entries(i.swatch)){let b={};for(const[x,$]of Object.entries(R))switch(b[x]=$,t()){case"hex":b[x]=m($).hex();break;case"rgb":b[x]=`rgb(${m($).rgb().toString()})`;break;case"hsl":b[x]=`hsl(${m($).hsl().toString()})`;break;case"hsv":b[x]=`hsv(${m($).hsv().toString()})`;break;case"hsi":b[x]=`hsi(${m($).hsi().toString()})`;break;case"lab":b[x]=`lab(${m($).lab().toString()})`;break;case"oklab":b[x]=`oklab(${m($).oklab().toString()})`;break;case"lch":b[x]=`lch(${m($).lch().toString()})`;break;case"hcl":b[x]=`hcl(${m($).hcl().toString()})`;break;case"okhcl":b[x]=`okhcl(${m($).okhcl().toString()})`;break}p[_]=b}g.swatch=p,o.push(g)}return o},d=()=>{console.log(a());const o=JSON.stringify(h()),i=new Blob([o],{type:"text/plain"}),g=URL.createObjectURL(i),p=document.createElement("a");p.download="ambientcolors-full.json",p.href=g,p.click()},f=()=>{const o=JSON.stringify(a()[0].swatch),i=new Blob([o],{type:"text/plain"}),g=URL.createObjectURL(i),p=document.createElement("a");p.download="ambientcolors-full.json",p.href=g,p.click()},h=()=>[{name:"Shades Corrected (RGB)",swatch:ue()},{name:"Blended (Lab Color Mix)",swatch:xe()},{name:"Relative (HSV & Relative Luminance)",swatch:he()},{name:"Brighten and Darken (Legacy)",swatch:ge()}],s=o=>{n(o.target.value)},C=o=>{l(o.target.value),e()==9&&(U([1.7,1.3,1.2,1.1,1,.9,.8,.7,.1]),J([1.3,1.2,1.15,1.1,1,.9,.85,.6,.5]),V([.4,.6,.8,.9,1,1.1,1.2,1.4,1.6])),e()==7&&(U([1.7,1.3,1.1,1,.9,.7,.1]),J([1.3,1.2,1.1,1,.9,.6,.5]),V([.4,.6,.9,1,1.1,1.4,1.6]))},u=o=>{bt(o.target.value)},P=o=>{mt(o.target.value)};return[Ve.cloneNode(!0),c(T,{flexDirection:"row",gap:8,style:{margin:"0 0 8px -2px"},get children(){return[c(oe,{type:"submit",onclick:d,children:"Export colors"}),c(oe,{type:"submit",onclick:f,children:"Export colors (Tailwind)"}),(()=>{const o=Ke.cloneNode(!0);return o.style.setProperty("padding","18px 0 0 12px"),o})(),c(M,{get value(){return t()},onChange:s,get children(){return[qe.cloneNode(!0),Qe.cloneNode(!0),Ze.cloneNode(!0),Ye.cloneNode(!0),et.cloneNode(!0),tt.cloneNode(!0),ot.cloneNode(!0),rt.cloneNode(!0),nt.cloneNode(!0),lt.cloneNode(!0)]}}),(()=>{const o=at.cloneNode(!0);return o.style.setProperty("padding","18px 0 0 12px"),o})(),c(M,{get value(){return e()},onChange:C,get children(){return[st.cloneNode(!0),it.cloneNode(!0)]}})]}}),c(T,{flexDirection:"row",gap:8,style:{margin:"0 0 24px -2px"},get children(){return[(()=>{const o=ct.cloneNode(!0);return o.style.setProperty("padding","18px 0 0 0"),o})(),c(M,{get value(){return k()},onChange:P,get children(){return[pt.cloneNode(!0),dt.cloneNode(!0)]}}),(()=>{const o=ut.cloneNode(!0);return o.style.setProperty("padding","18px 0 0 12px"),o})(),c(M,{get value(){return ne()},onChange:u,get children(){return[xt.cloneNode(!0),ht.cloneNode(!0)]}})]}}),c(Je,{get swatchList(){return h()}}),gt.cloneNode(!0)]};export{oe as B,ze as C,M as S,ee as T,bt as a,Ee as b,wt as c,ne as s};

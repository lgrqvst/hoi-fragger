(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(n,t,e){n.exports=e.p+"static/media/bulge.8c680e74.svg"},24:function(n,t,e){n.exports=e(34)},34:function(n,t,e){"use strict";e.r(t);var r=e(0),i=e.n(r),a=e(7),o=e.n(a),c=e(14),u=e(6),l=e(8),d=e(9),s=e(11),f=e(10),b=e(12),m=e(1),v=e(2),g=e(4),h=e(5);function p(){var n=Object(m.a)(["\n  position: absolute;\n  z-index: 15;\n  overflow: hidden;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: transparent;\n  border: 0;\n\n  span {\n    position: absolute;\n    bottom: 110%;\n    right: 110%;\n  }\n"]);return p=function(){return n},n}function O(){var n=Object(m.a)(["\n  font-size: 1.25rem;\n  font-family: 'Dosis', sans-serif;\n"]);return O=function(){return n},n}function j(){var n=Object(m.a)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 10;\n  width: 100%;\n  height: 100%;\n"]);return j=function(){return n},n}function w(){var n=Object(m.a)(["\n      background: rgba(255, 255, 255, 0.5);\n      border: 1px solid rgba(0, 0, 0, 0.5);\n    "]);return w=function(){return n},n}function k(){var n=Object(m.a)(["\n  background: transparent;\n  // color: black;\n  border: 1px solid transparent;\n  transition: 0.25s;\n  padding: 0.25rem;\n  border-radius: 0.25rem;\n  box-shadow: none;\n  -webkit-appearance: none;\n\n  &[disabled] {\n    color: black;\n  }\n\n  ","\n"]);return k=function(){return n},n}function E(){var n=Object(m.a)(["\n      left: 1.5rem;\n      opacity: 1;\n    "]);return E=function(){return n},n}function y(){var n=Object(m.a)(["\n  position: absolute;\n  top: 50%;\n  left: -1rem;\n  border: 0;\n  padding: 0.5rem;\n  background: transparent;\n  color: red;\n  opacity: 1;\n  transform: translate(-50%, -50%) scale(1);\n  cursor: pointer;\n  transition: 0.25s;\n\n  ","\n"]);return y=function(){return n},n}function S(){var n=Object(m.a)(["\n      opacity: 0.5;\n    "]);return S=function(){return n},n}function x(){var n=Object(m.a)([""]);return x=function(){return n},n}function A(){var n=Object(m.a)(["\n      background: orange;\n    "]);return A=function(){return n},n}function I(){var n=Object(m.a)(["\n      left: 2rem;\n    "]);return I=function(){return n},n}function z(){var n=Object(m.a)(["\n  position: relative;\n  left: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0 1rem;\n  padding: 0.25rem 0.5rem 0.25rem 0.25rem;\n  background: #efefef;\n  border-radius: 0.25rem;\n  opacity: 1;\n  transition: 0.25s;\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n"]);return z=function(){return n},n}function C(){var n=Object(m.a)(["\n  position: relative;\n  width: 100%;\n  margin: 0.5rem 0;\n"]);return C=function(){return n},n}var N=v.c.div(C()),M=v.c.div(z(),function(n){return"edit"===n.mode&&Object(v.b)(I())},function(n){return!0===n.current&&Object(v.b)(A())},function(n){return!0===n.willgo&&Object(v.b)(x())},function(n){return!0===n.went&&Object(v.b)(S())}),D=v.c.button(y(),function(n){return"edit"===n.mode&&Object(v.b)(E())}),R=v.c.input(k(),function(n){return"edit"===n.mode&&Object(v.b)(w())}),T=v.c.div(j()),L=v.c.div(O()),H=v.c.button(p()),J=function(n){var t=n.mode,e=n.name,r=n.id,a=n.initiative,o=n.showInitiativeSpinner,c=n.editActor,u=n.removeActor,l=n.current,d=n.went,s=n.willgo;return i.a.createElement(N,{mode:t},i.a.createElement(D,{type:"button",onClick:function(){return u(r)},mode:t},i.a.createElement(g.a,{icon:h.k})),i.a.createElement(M,{mode:t,current:l,willgo:s,went:d},i.a.createElement(R,{type:"text",value:e,onChange:function(n){return c(n,r)},mode:t}),i.a.createElement(L,null,i.a.createElement("span",null,a)),"edit"!==t&&i.a.createElement(T,null),"input"===t&&i.a.createElement(H,{type:"button",onClick:function(){return o(r)}},i.a.createElement("span",null,"Set initiative"))))};function P(){var n=Object(m.a)(["\n  position: relative;\n  z-index: 10;\n  margin: 1rem 0;\n  padding: 0 0 7rem 0;\n"]);return P=function(){return n},n}var X=v.c.div(P()),B=function(n){var t=n.actors,e=n.mode,r=n.showInitiativeSpinner,a=n.removeActor,o=n.editActor,c=n.current;return t=(t="tracking"!==e?t.sort(function(n,t){return n.name.toLowerCase()<t.name.toLowerCase()?-1:n.name.toLowerCase()>t.name.toLowerCase()?1:0}):t.sort(function(n,t){return n.initiative>t.initiative?-1:n.initiative<t.initiative?1:0}).filter(function(n){return n.initiative>0})).map(function(n){return i.a.createElement(J,{key:n.id,id:n.id,name:n.name,initiative:n.initiative,mode:e,showInitiativeSpinner:r,removeActor:a,editActor:o,current:n.initiative===c,willgo:n.initiative<c&&null!==c,went:n.initiative>c&&null!==c})}),i.a.createElement(X,null,t)};function F(){var n=Object(m.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 20;\n  width: 100vw;\n  background: black;\n  color: white;\n  padding: 0.5em 0;\n  text-align: center;\n  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.25);\n  font-family: 'Pacifico', cursive;\n  font-size: 1.5rem;\n  line-height: 1;\n"]);return F=function(){return n},n}var W=v.c.div(F()),G=function(){return i.a.createElement(W,null,"Hoi, fragger!")},Y=e(22),$=e.n(Y);function q(){var n=Object(m.a)(["\n      right: 1rem;\n    "]);return q=function(){return n},n}function K(){var n=Object(m.a)(["\n  right: -3rem;\n  bottom: 8.5rem;\n  transition: right ",";\n  ","\n"]);return K=function(){return n},n}function Q(){var n=Object(m.a)(["\n      right: 1rem;\n    "]);return Q=function(){return n},n}function U(){var n=Object(m.a)(["\n  right: -3rem;\n  bottom: 5rem;\n  transition: right ",";\n  ","\n"]);return U=function(){return n},n}function V(){var n=Object(m.a)(["\n      left: 2rem;\n    "]);return V=function(){return n},n}function Z(){var n=Object(m.a)(["\n  left: -3rem;\n  bottom: 5rem;\n  transition: left ",";\n  ","\n"]);return Z=function(){return n},n}function _(){var n=Object(m.a)(["\n      left: 50%;\n    "]);return _=function(){return n},n}function nn(){var n=Object(m.a)(["\n  left: -5rem;\n  bottom: 5rem;\n  transform: translateX(-50%);\n  transition: left ",";\n  ","\n"]);return nn=function(){return n},n}function tn(){var n=Object(m.a)(["\n      right: 1rem;\n    "]);return tn=function(){return n},n}function en(){var n=Object(m.a)(["\n  right: -3rem;\n  bottom: 5rem;\n  transition: right ",";\n  ","\n"]);return en=function(){return n},n}function rn(){var n=Object(m.a)(["\n      left: 1rem;\n    "]);return rn=function(){return n},n}function an(){var n=Object(m.a)(["\n  left: -3rem;\n  bottom: 5rem;\n  transition: left ",";\n  ","\n"]);return an=function(){return n},n}function on(){var n=Object(m.a)(["\n      left: 50%;\n    "]);return on=function(){return n},n}function cn(){var n=Object(m.a)(["\n  left: -5rem;\n  bottom: 5rem;\n  transform: translateX(-50%);\n  transition: left ",";\n  ","\n"]);return cn=function(){return n},n}function un(){var n=Object(m.a)(["\n  width: 5rem;\n  font-size: 2rem;\n"]);return un=function(){return n},n}function ln(){var n=Object(m.a)(["\n        transform: scale(1.5);\n      "]);return ln=function(){return n},n}function dn(){var n=Object(m.a)(["\n        transform: scale(1.5);\n      "]);return dn=function(){return n},n}function sn(){var n=Object(m.a)(["\n        transform: scale(1.5);\n      "]);return sn=function(){return n},n}function fn(){var n=Object(m.a)(["\n  position: relative;\n  background: none;\n  transition: transform ",";\n  &:nth-child(1) {\n    ","\n  }\n  &:nth-child(2) {\n    ","\n  }\n  &:nth-child(3) {\n    ","\n  }\n"]);return fn=function(){return n},n}function bn(){var n=Object(m.a)(["\n  apperance: none;\n  position: fixed;\n  z-index: 15;\n  width: 3rem;\n  border: 0;\n  padding: 0;\n  border-radius: 100px;\n  background: black;\n  color: white;\n  outline: none;\n\n  &:before {\n    content: '';\n    display: block;\n    width: 100%;\n    padding-top: 100%;\n  }\n\n  span {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n"]);return bn=function(){return n},n}function mn(){var n=Object(m.a)(["\n      &:before {\n        left: 82.5%;\n      }\n    "]);return mn=function(){return n},n}function vn(){var n=Object(m.a)(["\n      &:before {\n        left: 17.5%;\n      }\n    "]);return vn=function(){return n},n}function gn(){var n=Object(m.a)(["\n  position: fixed;\n  z-index: 10;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 100vw;\n  padding: 0.25rem;\n  background: black;\n  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.25);\n\n  &:before {\n    content: '';\n    position: absolute;\n    bottom: 100%;\n    left: 50%;\n    display: block;\n    width: calc(100% / 2);\n    transform: translateX(-50%);\n    height: 1rem;\n    background: url(",") no-repeat bottom/auto;\n    transition: left ",";\n  }\n\n  ","\n  ","\n"]);return gn=function(){return n},n}var hn="0.5s cubic-bezier(1, 0, 0.17, 1.4)",pn=v.c.div(gn(),$.a,hn,function(n){return"edit"===n.mode&&Object(v.b)(vn())},function(n){return"tracking"===n.mode&&Object(v.b)(mn())}),On=v.c.button(bn()),jn=Object(v.c)(On)(fn(),hn,function(n){return"edit"===n.mode&&Object(v.b)(sn())},function(n){return"input"===n.mode&&Object(v.b)(dn())},function(n){return"tracking"===n.mode&&Object(v.b)(ln())}),wn=Object(v.c)(On)(un()),kn=Object(v.c)(wn)(cn(),hn,function(n){return"edit"===n.mode&&Object(v.b)(on())}),En=Object(v.c)(On)(an(),hn,function(n){return"edit"===n.mode&&Object(v.b)(rn())}),yn=Object(v.c)(On)(en(),hn,function(n){return"input"===n.mode&&Object(v.b)(tn())}),Sn=Object(v.c)(wn)(nn(),hn,function(n){return"tracking"===n.mode&&Object(v.b)(_())}),xn=Object(v.c)(On)(Z(),hn,function(n){return"tracking"===n.mode&&Object(v.b)(V())}),An=Object(v.c)(On)(U(),hn,function(n){return"tracking"===n.mode&&Object(v.b)(Q())}),In=Object(v.c)(On)(K(),hn,function(n){return"tracking"===n.mode&&Object(v.b)(q())}),zn=function(n){var t=n.mode,e=n.setModeEdit,r=n.setModeTracking,a=n.setModeInput,o=n.reset,c=n.softReset,u=n.addActor,l=n.nextActor,d=n.previousActor,s=n.nextTurn,f=n.previousTurn;return i.a.createElement(i.a.Fragment,null,i.a.createElement(pn,{mode:t},i.a.createElement(jn,{type:"button",onClick:e,mode:t},i.a.createElement("span",null,i.a.createElement(g.a,{icon:h.h}))),i.a.createElement(jn,{type:"button",onClick:a,mode:t},i.a.createElement("span",null,i.a.createElement(g.a,{icon:h.g}))),i.a.createElement(jn,{type:"button",onClick:r,mode:t},i.a.createElement("span",null,i.a.createElement(g.a,{icon:h.i})))),i.a.createElement(En,{type:"button",mode:t,onClick:o},i.a.createElement("span",null,i.a.createElement(g.a,{icon:h.l}))),i.a.createElement(kn,{type:"button",mode:t,onClick:u},i.a.createElement("span",null,i.a.createElement(g.a,{icon:h.j}))),i.a.createElement(yn,{type:"button",mode:t,onClick:c},i.a.createElement("span",null,i.a.createElement(g.a,{icon:h.f}))),i.a.createElement(Sn,{type:"button",mode:t,onClick:l},i.a.createElement("span",null,i.a.createElement(g.a,{icon:h.c}))),i.a.createElement(xn,{type:"button",mode:t,onClick:d},i.a.createElement("span",null,i.a.createElement(g.a,{icon:h.d}))),i.a.createElement(An,{type:"button",mode:t,onClick:s},i.a.createElement("span",null,i.a.createElement(g.a,{icon:h.b}))),i.a.createElement(In,{type:"button",mode:t,onClick:f},i.a.createElement("span",null,i.a.createElement(g.a,{icon:h.a}))))};function Cn(){var n=Object(m.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 999;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.7);\n"]);return Cn=function(){return n},n}var Nn=v.c.div(Cn()),Mn=function(n){var t=n.click;return i.a.createElement(Nn,{onClick:t})};function Dn(){var n=Object(m.a)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  z-index: 1000;\n  transform: translate(-50%, -50%);\n  width: 80vmin;\n  background: white;\n  padding: 0 0 1rem 0;\n  border-radius: 0.25rem;\n\n  h3 {\n    font-size: 1rem;\n    font-weight: bold;\n    margin: 0 0 1rem;\n    padding: 0.5rem;\n    background: rgba(0, 0, 0, 0.25);\n  }\n\n  input {\n    display: block;\n    border: 1px solid rgba(0, 0, 0, 0.25);\n    width: calc(100% - 2rem);\n    margin: 1rem auto;\n    padding: 0.5rem;\n    text-align: center;\n  }\n\n  form button {\n    display: block;\n    width: 4rem;\n    background: rgba(0, 0, 0, 0.25);\n    margin: 0 1rem 0 auto;\n    padding: 0.5rem;\n    border: 0;\n  }\n"]);return Dn=function(){return n},n}var Rn=v.c.div(Dn()),Tn=function(n){var t=n.close,e=n.confirm,r=n.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(Mn,{click:t}),i.a.createElement(Rn,null,i.a.createElement("form",{onSubmit:function(n){return e(n)}},i.a.createElement("h3",null,r),i.a.createElement("input",{type:"text",name:"promptInput"}),i.a.createElement("button",{type:"submit"},i.a.createElement(g.a,{icon:h.e})))))};function Ln(){var n=Object(m.a)(["\n  text-decoration: underline;\n  color: black;\n"]);return Ln=function(){return n},n}function Hn(){var n=Object(m.a)(["\n  position: relative;\n  z-index: 10;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 75vh;\n  padding: 0 1rem;\n  text-align: center;\n\n  span {\n    text-decoration: underline;\n  }\n"]);return Hn=function(){return n},n}var Jn=v.c.div(Hn()),Pn=v.c.a(Ln()),Xn=function(n){var t=n.type,e="";return"empty"===t?e=i.a.createElement("p",null,"Add some actors. Click edit to add some one by one, or"," ",i.a.createElement(Pn,{onClick:n.loadDefault},"load the default set.")):"allzero"===t&&(e=i.a.createElement("p",null,"No actors with initiative over 0.")),i.a.createElement(Jn,null,e)};function Bn(){var n=Object(m.a)(["\n  position: absolute;\n  z-index: 15;\n  left: 50%;\n  // top: 50%;\n  bottom: 100%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 6rem;\n  height: 6rem;\n  border-radius: 6rem;\n  background: black;\n  color: white;\n  font-size 1.5rem;\n  line-height: 1;\n"]);return Bn=function(){return n},n}function Fn(){var n=Object(m.a)(["\n  width: 2rem;\n"]);return Fn=function(){return n},n}function Wn(){var n=Object(m.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: calc(101 * 2rem + 100vw);\n  padding: 2rem 50vw;\n"]);return Wn=function(){return n},n}function Gn(){var n=Object(m.a)(["\n  position: relative;\n  z-index: 10;\n  width: 100vw;\n  overflow-x: scroll;\n  -webkit-overflow-scrolling: touch;\n"]);return Gn=function(){return n},n}function Yn(){var n=Object(m.a)(["\n  position: absolute;\n  z-index: 5;\n  top: 0;\n  left: 50%;\n  width: 75%;\n  height: 100%;\n  transform: translateX(-50%);\n  // border-top: 1px solid black;\n  // border-bottom: 1px solid black;\n\n  &:before,\n  &:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 50%;\n    width: 0;\n    height: 0;\n    border-right: 0.25rem solid transparent;\n    border-left: 0.25rem solid transparent;\n    border-top: 0.25rem solid black;\n    transform: translateX(-50%);\n  }\n\n  &:after {\n    top: auto;\n    bottom: 0;\n    border-top: 0;\n    border-right: 0.25rem solid transparent;\n    border-left: 0.25rem solid transparent;\n    border-bottom: 0.25rem solid black;\n  }\n"]);return Yn=function(){return n},n}function $n(){var n=Object(m.a)(["\n  position: relative;\n  width: 100vw;\n"]);return $n=function(){return n},n}function qn(){var n=Object(m.a)(["\n  position: absolute;\n  top: calc(100% + 1rem);\n  left: 50%;\n  width: 4rem;\n  padding: 0;\n  border: 0;\n  border-radius: 100px;\n  background: white;\n  font-size: 1.25rem;\n  transform: translateX(-50%);\n\n  &:before {\n    content: '';\n    display: block;\n    width: 100%;\n    padding-top: 100%;\n  }\n\n  span {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n  }\n"]);return qn=function(){return n},n}function Kn(){var n=Object(m.a)(["\n  position: absolute;\n  z-index: 1000;\n  top: 50%;\n  left: 0;\n  width: 100%;\n  padding: 1rem 0;\n  background: white;\n  text-align: center;\n  transform: translateY(-50%);\n  font-family: 'Dosis', sans-serif;\n\n  h3 {\n    margin: 0 0 1rem;\n  }\n"]);return Kn=function(){return n},n}var Qn=v.c.div(Kn()),Un=v.c.button(qn()),Vn=v.c.div($n()),Zn=v.c.div(Yn()),_n=v.c.div(Gn()),nt=v.c.div(Wn()),tt=v.c.div(Fn()),et=v.c.div(Bn()),rt=function(n){function t(n){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(f.a)(t).call(this,n))).state={initiative:0},e.storeInitiative=function(n){var t=n;t<0&&(t=0),t>100&&(t=100),e.setState({initiative:t})},e.scrollRef=i.a.createRef(),e}return Object(b.a)(t,n),Object(d.a)(t,[{key:"componentDidMount",value:function(){var n=this.props,t=n.id,e=n.actors.filter(function(n){return n.id===t})[0];this.scrollRef.current.scrollLeft=32*e.initiative+16}},{key:"render",value:function(){var n=this,t=this.props,e=t.id,r=t.hideInitiativeSpinner,a=t.setInitiative,o=this.state.initiative,c=Object(u.a)(Array(101).keys()).map(function(n){return i.a.createElement(tt,{key:n},n)});return i.a.createElement(i.a.Fragment,null,i.a.createElement(Mn,{click:r}),i.a.createElement(Qn,null,i.a.createElement(Vn,null,i.a.createElement(Zn,null),i.a.createElement(et,null,o),i.a.createElement(_n,{ref:this.scrollRef,onScroll:function(t){n.storeInitiative(Math.floor(t.target.scrollLeft/32))}},i.a.createElement(nt,null,c))),i.a.createElement(Un,{type:"button",onClick:function(){return a(e,o)}},i.a.createElement("span",null,i.a.createElement(g.a,{icon:h.e})))))}}]),t}(i.a.Component);function it(){var n=Object(m.a)(["\n      background: black;\n      &:before {\n        left: -100%;\n      }\n      &:after {\n        right: 0;\n      }\n    "]);return it=function(){return n},n}function at(){var n=Object(m.a)(["\n      background: black;\n      &:before {\n        left: 0;\n      }\n      &:after {\n        right: -100%;\n      }\n    "]);return at=function(){return n},n}function ot(){var n=Object(m.a)(["\n      &:before {\n        left: -100%;\n      }\n      &:after {\n        right: -100%;\n      }\n    "]);return ot=function(){return n},n}function ct(){var n=Object(m.a)(['\n  position: relative;\n  height: 100vh;\n  overflow: hidden;\n  overflow-y: auto;\n  padding: 3rem 0;\n  background-color: #abe9cd;;\n  background-image: linear-gradient(-20deg, \n      rgba(255,255,255,0) 33%, \n      rgba(255,255,255,0.2) 33%, \n      rgba(255,255,255,0) 67%, \n      rgba(255,255,255,0) 67%), \n    linear-gradient(160deg, \n      rgba(0,0,0,0) 15%, \n      rgba(0,0,0,0.1) 15%, \n      rgba(0,0,0,0) 67%), \n    linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%);\n  transition: background 1s;\n  \n  &:before, &:after {\n    content: "";\n    position: fixed;\n    z-index: 1;\n    top: 0;\n    width: 100vw;\n    height: 100vh;\n    transition: left ',", right ",";\n  }\n\n  &:after {\n    background-color: #fc9842;\n    background-image: linear-gradient(-20deg, \n        rgba(255,255,255,0) 33%, \n        rgba(255,255,255,0.2) 33%, \n        rgba(255,255,255,0) 67%, \n        rgba(255,255,255,0) 67%), \n      linear-gradient(160deg, \n        rgba(0,0,0,0) 15%, \n        rgba(0,0,0,0.1) 15%, \n        rgba(0,0,0,0) 67%), \n      linear-gradient(315deg, \n          #fc9842 0%, \n          #fe5f75 74%);\n  }\n\n  &:before {\n    background-color: #bf3a30;\n    background-image: linear-gradient(-20deg, \n        rgba(255,255,255,0) 33%, \n        rgba(255,255,255,0.2) 33%, \n        rgba(255,255,255,0) 67%, \n        rgba(255,255,255,0) 67%), \n      linear-gradient(160deg, \n        rgba(0,0,0,0) 15%, \n        rgba(0,0,0,0.1) 15%, \n        rgba(0,0,0,0) 67%), \n      linear-gradient(315deg, \n          #bf3a30 0%, \n          #864ba2 74%);\n  }\n\n  ","\n\n  ","\n    \n  ","\n"]);return ct=function(){return n},n}function ut(){var n=Object(m.a)(["\n  body {\n    height: 100vh;\n    overscroll-behavior: none;\n    background: black;\n    font-family: 'Merriweather Sans', serif;\n  }\n"]);return ut=function(){return n},n}var lt=Object(v.a)(ut()),dt=v.c.div(ct(),"0.5s cubic-bezier(1, 0, 0.17, 1.4)","0.5s cubic-bezier(1, 0, 0.17, 1.4)",function(n){return"input"===n.mode&&Object(v.b)(ot())},function(n){return"edit"===n.mode&&Object(v.b)(at())},function(n){return"tracking"===n.mode&&Object(v.b)(it())}),st=function(n){function t(){var n,e;Object(l.a)(this,t);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(e=Object(s.a)(this,(n=Object(f.a)(t)).call.apply(n,[this].concat(i)))).state={actors:[],addingNewActor:!1,settingInitiative:!1,settingInitiativeOf:null,current:null,mode:"input"},e.handleReset=function(){e.setState({actors:[]}),localStorage.clear()},e.handleSoftReset=function(){var n=Object(u.a)(e.state.actors).map(function(n){var t=Object(c.a)({},n);return t.initiative=0,t});e.setState({actors:n,current:null}),localStorage.setItem("actors",JSON.stringify(n))},e.handleLoadStoredActors=function(){if(localStorage.actors){var n=JSON.parse(localStorage.actors);e.setState({actors:n})}},e.handleLoadDefaultActors=function(){var n=[{id:1,name:"Bad Guys",initiative:0},{id:2,name:"Chrome Blue",initiative:0},{id:3,name:"Edge",initiative:0},{id:4,name:"Flick",initiative:0},{id:5,name:"Plug",initiative:0},{id:6,name:"Pomph",initiative:0},{id:7,name:"vand4l",initiative:0}];e.setState({actors:n}),localStorage.setItem("actors",JSON.stringify(n))},e.handleShowHideAddActor=function(){e.setState(function(n){return{addingNewActor:!n.addingNewActor}})},e.handleAddActor=function(n){n.preventDefault(),e.handleShowHideAddActor();var t={id:Date.now(),name:n.target.promptInput.value,initiative:0},r=Object(u.a)(e.state.actors);r.push(t),e.setState({actors:r}),localStorage.setItem("actors",JSON.stringify(r))},e.handleEditActor=function(n,t){var r=Object(u.a)(e.state.actors).filter(function(e){return e.id===t&&(e.name=n.target.value),e});e.setState({actors:r}),localStorage.setItem("actors",JSON.stringify(r))},e.handleRemoveActor=function(n){var t=Object(u.a)(e.state.actors).filter(function(t){return t.id!==n&&t});e.setState({actors:t}),localStorage.setItem("actors",JSON.stringify(t))},e.handleShowHideInitiativeSpinner=function(n){e.setState(function(t){return{settingInitiative:!t.settingInitiative,settingInitiativeOf:t.settingInitiative?null:n}})},e.setInitiative=function(n,t){var r=Object(u.a)(e.state.actors).filter(function(e){return e.id===n&&(e.initiative=t),e});e.setState({actors:r}),localStorage.setItem("actors",JSON.stringify(r)),e.handleShowHideInitiativeSpinner()},e.handleNextActor=function(){var n=e.state.current,t=Object(u.a)(e.state.actors).filter(function(n){return n.initiative>0}),r=t.filter(function(t){return t.initiative<n});if(0===t.length&&e.setMode("input"),r.length>0){var i=r[0].initiative;e.setState({current:i})}else e.handleNextTurn()},e.handlePreviousActor=function(){var n=e.state.current,t=Object(u.a)(e.state.actors).filter(function(n){return n.initiative>0}),r=t.filter(function(t){return t.initiative>n});if(0===t.length&&e.setMode("input"),!(r.length>0))return!1;var i=r[r.length-1].initiative;e.setState({current:i})},e.handleNextTurn=function(){var n=Object(u.a)(e.state.actors).map(function(n){var t=Object(c.a)({},n);return t.initiative-=10,t}).sort(function(n,t){return n.initiative<t.initiative?1:n.initiative>t.initiative?-1:0}),t=!1;n.filter(function(n){return n.initiative>0}).length>0&&(t=n[0].initiative),t?e.setState({actors:n,current:t}):(e.setState({actors:n}),e.setMode("input"))},e.handlePreviousTurn=function(){var n=Object(u.a)(e.state.actors).map(function(n){var t=Object(c.a)({},n);return t.initiative+=10,t}).sort(function(n,t){return n.initiative<t.initiative?1:n.initiative>t.initiative?-1:0}),t=n[0].initiative;e.setState({actors:n,current:t})},e.handleNewTurn=function(){},e}return Object(b.a)(t,n),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.handleLoadStoredActors()}},{key:"setMode",value:function(n){var t=null;"tracking"===n&&this.state.actors.length>0&&(t=Object(u.a)(this.state.actors).sort(function(n,t){return n.initiative<t.initiative?1:n.initiative>t.initiative?-1:0})[0].initiative);this.setState({mode:n,current:t})}},{key:"render",value:function(){var n=this,t=this.state,e=t.actors,r=t.mode,a=t.addingNewActor,o=t.settingInitiative,c=t.settingInitiativeOf,u=t.current;return i.a.createElement(dt,{mode:r},i.a.createElement(lt,null),i.a.createElement(G,null),0===e.length&&i.a.createElement(Xn,{type:"empty",loadDefault:this.handleLoadDefaultActors}),a&&i.a.createElement(Tn,{close:this.handleShowHideAddActor,confirm:this.handleAddActor},"Name of actor:"),0===e.filter(function(n){return n.initiative>0}).length&&"tracking"===r&&e.length>0?i.a.createElement(Xn,{type:"allzero",loadDefault:this.handleLoadDefaultActors}):i.a.createElement(B,{actors:e,mode:r,editActor:this.handleEditActor,removeActor:this.handleRemoveActor,showInitiativeSpinner:this.handleShowHideInitiativeSpinner,current:u}),o&&i.a.createElement(rt,{id:c,hideInitiativeSpinner:this.handleShowHideInitiativeSpinner,setInitiative:this.setInitiative,actors:e}),i.a.createElement(zn,{mode:r,setModeInput:function(){return n.setMode("input")},setModeEdit:function(){return n.setMode("edit")},setModeTracking:function(){return n.setMode("tracking")},reset:this.handleReset,softReset:this.handleSoftReset,addActor:this.handleShowHideAddActor,nextActor:this.handleNextActor,previousActor:this.handlePreviousActor,nextTurn:this.handleNextTurn,previousTurn:this.handlePreviousTurn}))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(st,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[24,2,1]]]);
//# sourceMappingURL=main.20c29635.chunk.js.map
(function(e){function t(t){for(var r,a,i=t[0],c=t[1],u=t[2],l=0,f=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},s=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var p=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},["SUCCESS"==e.judgement?n("img",{attrs:{src:"https://placehold.jp/150/ffffff/bd2626/150x150.png?text=○"}}):e._e(),"FAILURE"==e.judgement?n("img",{attrs:{src:"https://placehold.jp/150/ffffff/0033ff/150x150.png?text=×"}}):e._e(),"-"==e.judgement?n("img",{attrs:{src:"https://placehold.jp/150/ffffff/000000/150x150.png?text=-"}}):e._e(),n("br"),e._v(" sentence "),n("br"),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.sentence,expression:"sentence"}],attrs:{id:"sentenceArea",cols:"40",rows:"1"},domProps:{value:e.sentence},on:{input:function(t){t.target.composing||(e.sentence=t.target.value)}}}),n("br"),e._v(" speak text "),n("br"),n("textarea",{attrs:{id:"speakArea",cols:"40",rows:"1",readonly:""},domProps:{textContent:e._s(e.speakResult)}}),n("br"),n("button",{on:{click:e.recordSpeaking}},[e._v("speak")]),n("br")])},s=[],a=(n("498a"),{name:"App",data:function(){return{sentence:"",speakResult:"",recogniton:null,judgement:"-"}},created:function(){var e=e||window.webkitSpeechRecognition;this.recognition=new e,this.recognition.lang="en"},methods:{recordSpeaking:function(){this.judgement="-",this.speakResult="",this.recognition.start();var e=this;this.recognition.onresult=function(t){e.speakResult=t.results[0][0].transcript,e.speakResult.trim().toLowerCase()==e.sentence.trim().toLowerCase()?e.judgement="SUCCESS":e.judgement="FAILURE"}}}}),i=a,c=(n("034f"),n("2877")),u=Object(c["a"])(i,o,s,!1,null,null,null),p=u.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(p)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.8b6c05c5.js.map
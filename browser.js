// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(r){"use strict";var t,n="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,a=o.__lookupGetter__,c=o.__lookupSetter__;t=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,n){var e,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(a.call(r,t)||c.call(r,t)?(e=r.__proto__,r.__proto__=o,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,t,n.get),p&&f&&f.call(r,t,n.set),r};var l=t;function y(r){return r!=r}var p=Math.floor;function v(r){return p(r)===r}function b(r){return v(r/2)}function d(r){return b(r>0?r-1:r+1)}var w=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;function _(r){return r===w||r===s}var A=Math.sqrt;function m(r){return Math.abs(r)}var h,U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),j=Object.prototype.toString,g=Object.prototype.hasOwnProperty,N="function"==typeof Symbol?Symbol.toStringTag:"";h=U&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e,o,u;if(null==r)return j.call(r);n=r[N],u=N,t=null!=(o=r)&&g.call(o,u);try{r[N]=void 0}catch(t){return j.call(r)}return e=j.call(r),t?r[N]=n:delete r[N],e}:function(r){return j.call(r)};var I,O=h,S="function"==typeof Uint32Array,E="function"==typeof Uint32Array?Uint32Array:null,F="function"==typeof Uint32Array?Uint32Array:void 0;I=function(){var r,t,n;if("function"!=typeof E)return!1;try{t=new E(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(S&&n instanceof Uint32Array||"[object Uint32Array]"===O(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?F:function(){throw new Error("not implemented")};var T,H=I,G="function"==typeof Float64Array,P="function"==typeof Float64Array?Float64Array:null,M="function"==typeof Float64Array?Float64Array:void 0;T=function(){var r,t,n;if("function"!=typeof P)return!1;try{t=new P([1,3.14,-3.14,NaN]),n=t,r=(G&&n instanceof Float64Array||"[object Float64Array]"===O(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?M:function(){throw new Error("not implemented")};var x,L=T,V="function"==typeof Uint8Array,W="function"==typeof Uint8Array?Uint8Array:null,k="function"==typeof Uint8Array?Uint8Array:void 0;x=function(){var r,t,n;if("function"!=typeof W)return!1;try{t=new W(t=[1,3.14,-3.14,256,257]),n=t,r=(V&&n instanceof Uint8Array||"[object Uint8Array]"===O(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?k:function(){throw new Error("not implemented")};var Y,q=x,C="function"==typeof Uint16Array,z="function"==typeof Uint16Array?Uint16Array:null,B="function"==typeof Uint16Array?Uint16Array:void 0;Y=function(){var r,t,n;if("function"!=typeof z)return!1;try{t=new z(t=[1,3.14,-3.14,65536,65537]),n=t,r=(C&&n instanceof Uint16Array||"[object Uint16Array]"===O(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?B:function(){throw new Error("not implemented")};var D,J={uint16:Y,uint8:q};(D=new J.uint16(1))[0]=4660;var K,Q,R=52===new J.uint8(D.buffer)[0];!0===R?(K=1,Q=0):(K=0,Q=1);var X={HIGH:K,LOW:Q},Z=new L(1),$=new H(Z.buffer),rr=X.HIGH,tr=X.LOW;function nr(r,t){return Z[0]=t,r[0]=$[rr],r[1]=$[tr],r}function er(r,t){return 1===arguments.length?nr([0,0],r):nr(r,t)}var or=!0===R?0:1,ur=new L(1),ir=new H(ur.buffer);function fr(r,t){return ur[0]=r,ir[or]=t>>>0,ur[0]}function ar(r){return 0|r}var cr,lr,yr=!0===R?1:0,pr=new L(1),vr=new H(pr.buffer);function br(r){return pr[0]=r,vr[yr]}!0===R?(cr=1,lr=0):(cr=0,lr=1);var dr={HIGH:cr,LOW:lr},wr=new L(1),sr=new H(wr.buffer),_r=dr.HIGH,Ar=dr.LOW;function mr(r,t){return sr[_r]=r,sr[Ar]=t,wr[0]}var hr=[0,0];function Ur(r,t){var n,e;return er(hr,r),n=hr[0],n&=2147483647,e=br(t),mr(n|=e&=2147483648,hr[1])}var jr=!0===R?1:0,gr=new L(1),Nr=new H(gr.buffer);function Ir(r,t){return gr[0]=r,Nr[jr]=t>>>0,gr[0]}var Or=1023,Sr=1048576,Er=[1,1.5],Fr=[0,.5849624872207642],Tr=[0,1.350039202129749e-8];function Hr(r,t){return y(t)||_(t)?(r[0]=t,r[1]=0,r):0!==t&&m(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)}var Gr=[0,0],Pr=[0,0];function Mr(r,t){var n,e;return 0===t||0===r||y(r)||_(r)?r:(function(r,t){1===arguments.length?Hr([0,0],r):Hr(r,t)}(Gr,r),t+=Gr[1],t+=function(r){var t=br(r);return(t=(2146435072&t)>>>20)-Or|0}(r=Gr[0]),t<-1074?Ur(0,r):t>1023?r<0?s:w:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,er(Pr,r),n=Pr[0],n&=2148532223,e*mr(n|=t+Or<<20,Pr[1])))}var xr=2147483647,Lr=1048575,Vr=1048576,Wr=2147483647,kr=1083179008,Yr=1e300,qr=1e-300,Cr=[0,0],zr=[0,0];function Br(r,t){var n,e,o,u,i,f,a,c,l,p,b,h,U,j;if(y(r)||y(t))return NaN;if(er(Cr,t),i=Cr[0],0===Cr[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return A(r);if(-.5===t)return 1/A(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(_(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:m(r)<1==(t===w)?0:w}(r,t)}if(er(Cr,r),u=Cr[0],0===Cr[1]){if(0===u)return function(r,t){return t===s?w:t===w?0:t>0?d(t)?r:0:d(t)?Ur(w,r):w}(r,t);if(1===r)return 1;if(-1===r&&d(t))return-1;if(_(r))return r===s?Br(-0,-t):t<0?0:w}if(r<0&&!1===v(t))return(r-r)/(r-r);if(o=m(r),n=u&Wr|0,e=i&Wr|0,a=i>>>31|0,f=(f=u>>>31|0)&&d(t)?-1:1,e>1105199104){if(e>1139802112)return function(r,t){return(2147483647&br(r))<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(n<1072693247)return 1===a?f*Yr*Yr:f*qr*qr;if(n>1072693248)return 0===a?f*Yr*Yr:f*qr*qr;b=function(r,t){var n,e,o,u,i,f;return n=(i=1.9259629911266175e-8*(o=t-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=fr(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=n,r}(zr,o)}else b=function(r,t,n){var e,o,u,i,f,a,c,l,y,p,v,b,d,w,s,_,A,m,h,U,j;return m=0,n<Sr&&(m-=53,n=br(t*=9007199254740992)),m+=(n>>20)-Or|0,n=1072693248|(h=1048575&n|0),h<=235662?U=0:h<767610?U=1:(U=0,m+=1,n-=Sr),i=fr(o=(_=(t=Ir(t,n))-(c=Er[U]))*(A=1/(t+c)),0),e=524288+(n>>1|536870912),a=Ir(0,e+=U<<18),s=(u=o*o)*u*(0===(j=u)?.5999999999999946:.5999999999999946+j*(.4285714285785502+j*(.33333332981837743+j*(.272728123808534+j*(.23066074577556175+.20697501780033842*j))))),a=fr(a=3+(u=i*i)+(s+=(f=A*(_-i*a-i*(t-(a-c))))*(i+o)),0),d=(v=-7.028461650952758e-9*(y=fr(y=(_=i*a)+(A=f*a+(s-(a-3-u))*o),0))+.9617966939259756*(A-(y-_))+Tr[U])-((b=fr(b=(p=.9617967009544373*y)+v+(l=Fr[U])+(w=m),0))-w-l-p),r[0]=b,r[1]=d,r}(zr,o,n);if(p=(t-(c=fr(t,0)))*b[0]+t*b[1],l=c*b[0],er(Cr,h=p+l),U=ar(Cr[0]),j=ar(Cr[1]),U>=kr){if(0!=(U-kr|j))return f*Yr*Yr;if(p+8008566259537294e-32>h-l)return f*Yr*Yr}else if((U&Wr)>=1083231232){if(0!=(U-3230714880|j))return f*qr*qr;if(p<=h-l)return f*qr*qr}return h=function(r,t,n){var e,o,u,i,f,a,c,l,y,p;return y=((l=r&xr|0)>>20)-Or|0,c=0,l>1071644672&&(o=Ir(0,((c=r+(Vr>>y+1)>>>0)&~(Lr>>(y=((c&xr)>>20)-Or|0)))>>>0),c=(c&Lr|Vr)>>20-y>>>0,r<0&&(c=-c),t-=o),r=ar(r=br(a=1-((a=(u=.6931471824645996*(o=fr(o=n+t,0)))+(i=.6931471805599453*(n-(o-t))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=i-(a-u))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?Mr(a,c):Ir(a,r)}(U,l,p),f*h}var Dr=Math.ceil;function Jr(r){return r<0?Dr(r):p(r)}var Kr=1.4426950408889634,Qr=1/(1<<28);function Rr(r){var t;return y(r)||r===w?r:r===s?0:r>709.782712893384?w:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Qr?1+r:function(r,t,n){var e,o,u,i;return Mr(1-(t-(e=r-t)*(u=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),n)}(r-.6931471803691238*(t=Jr(r<0?Kr*r-.5:Kr*r+.5)),1.9082149292705877e-10*t,t)}function Xr(r,t,n){var e;return y(t)||y(n)||t<=0||n<=0?NaN:r<0||r===w||r===s?0:0===r?1===t?t/n:0:t/n*Br(e=r/n,t-1)*Rr(-Br(e,t))}function Zr(r,t){return y(r)||y(t)||r<=0||t<=0?(n=NaN,function(){return n}):function(n){var e,o;return n<0||n===w||n===s?0:0===n?1===r?r/t:0:(o=Br(e=n/t,r-1),r/t*o*Rr(-Br(e,r)))};var n}l(Xr,"factory",{configurable:!1,enumerable:!1,writable:!1,value:Zr}),r.default=Xr,r.factory=Zr,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((r="undefined"!=typeof globalThis?globalThis:r||self).pdf={});
//# sourceMappingURL=browser.js.map

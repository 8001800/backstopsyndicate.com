(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("IlR1")}])},IlR1:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));n("OmL/");var r=n("q1tI"),o=n.n(r),a=n("c1iP"),s=n("JwsL"),i=o.a.createElement;function c(e){var t=e.Component,n=e.pageProps;return i("div",null,i(a.a,null),i(t,n),i(s.a,null))}},JwsL:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n("MX0m"),o=n.n(r),a=n("q1tI"),s=n.n(a),i=n("YFqc"),c=n.n(i),l=s.a.createElement;function f(){return l("footer",{className:"jsx-1863012969"},l("div",{className:"jsx-1863012969 footer-container"},l(c.a,{href:"/faq"},l("a",{className:"jsx-1863012969"},"FAQ")),l("span",{className:"jsx-1863012969"},"|"),l(c.a,{href:"/reward"},l("a",{className:"jsx-1863012969"},"REWARD DETAILS")),l("span",{className:"jsx-1863012969"},"|"),l(c.a,{href:"/etherscan"},l("a",{className:"jsx-1863012969"},"ETHERSCAN")),l("span",{className:"jsx-1863012969"},"|"),l("a",{href:"https://github.com/backstop-syndicate",title:"Github Page",className:"jsx-1863012969"},"GITHUB |"),l("span",{className:"jsx-1863012969"},"|"),l("a",{href:"https://t.me/backstopsyndicate",className:"jsx-1863012969"},"TELEGRAM")),l(o.a,{id:"1863012969"},[".footer-container.jsx-1863012969{margin:auto;width:450px;}",".footer-container.jsx-1863012969 a.jsx-1863012969,.footer-container.jsx-1863012969 span.jsx-1863012969{text-align:center;color:#FFFFFF;font-family:Futura;font-style:normal;font-weight:500;font-size:14px;line-height:19px;}",".footer-container.jsx-1863012969 a.jsx-1863012969{padding:0 5px;}"]))}},"OmL/":function(e,t,n){},YFqc:function(e,t,n){e.exports=n("cTJO")},c1iP:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n("q1tI"),o=n.n(r),a=n("iXDz"),s=n.n(a),i=o.a.createElement;function c(){return i("img",{className:"logo",src:s.a,alt:"Logo"})}var l=o.a.createElement;function f(){return l("div",{className:"logo-header"},l("div",null,l(c,null)),l("div",{className:"logo-header-container"},l("h1",{className:"logo-title"},"DAI BACKSTOP SYNDICATE"),l("span",{className:"logo-subtitle"},"Made with ",l("span",{className:"logo-subtitle-heart"},"\u2665")," by the DeFi community")))}},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),a=n("a1gu"),s=n("Nsbk"),i=n("7W2i"),c=n("TqRt"),l=n("284h");t.__esModule=!0,t.default=void 0;var f,u=l(n("q1tI")),p=n("QmWs"),h=n("g/15"),d=c(n("nOHt"));function m(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var v=new Map,g=window.IntersectionObserver,x={};function w(){return f||(g?f=new g((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var y=function(e){function t(e){var n;return r(this,t),(n=a(this,s(t).call(this,e))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,r=null;return function(o,a){if(r&&o===t&&a===n)return r;var s=e(o,a);return t=o,n=a,r=s,s}}((function(e,t){return{href:m(e),as:t?m(t):t}})),n.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,o=t.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=n.formatUrls(n.props.href,n.props.as),s=a.href,i=a.as;if(function(e){var t=(0,p.parse)(e,!1,!0),n=(0,p.parse)((0,h.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(s)){var c=window.location.pathname;s=(0,p.resolve)(c,s),i=i?(0,p.resolve)(c,i):s,e.preventDefault();var l=n.props.scroll;null==l&&(l=i.indexOf("#")<0),d.default[n.props.replace?"replace":"push"](s,i,{shallow:n.props.shallow}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==e.prefetch,n}return i(t,e),o(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,o=(0,p.resolve)(e,n);return[o,r?(0,p.resolve)(e,r):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&g&&e&&e.tagName&&(this.cleanUpListeners(),x[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=w();return n?(n.observe(e),v.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}v.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();d.default.prefetch(t[0],t[1],e).catch((function(e){0})),x[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=u.default.createElement("a",null,t));var a=u.Children.only(t),s={ref:function(t){e.handleRef(t),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(t):"object"===typeof a.ref&&(a.ref.current=t))},onMouseEnter:function(t){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(s.href=o||r),u.default.cloneElement(a,s)}}]),t}(u.Component);t.default=y},iXDz:function(e,t){e.exports="/_next/static/images/flat-logo-245355995851daa5443050683300e75d.png"}},[[0,0,1,3,2]]]);
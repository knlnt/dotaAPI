(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"1TCz":function(e,t,a){"use strict";a.r(t);var n=a("0iUn"),r=a("sLSF"),o=a("MI3g"),i=a("a7VT"),c=a("AT/M"),l=a("Tit0"),s=a("vYYK"),d=a("q1tI"),p=a.n(d),u=a("8Bbg"),m=a.n(u),f=a("wx14"),b=(a("17x9"),a("2W6z"),a("OKji")),h=a("aXM8"),g=a("hfi/");var v=function(e){var t=e.children,a=e.theme,n=Object(h.a)(),r=p.a.useMemo(function(){var e=null===n?a:function(e,t){return"function"===typeof t?t(e):Object(f.a)({},e,{},t)}(n,a);return null!==n&&e&&(e[g.a]=!0),e},[a,n]);return p.a.createElement(b.a.Provider,{value:r},t)},O=a("RD7I"),y=a("cNwE");var x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(O.a)(e,Object(f.a)({defaultTheme:y.a},t))}(function(e){return{"@global":{html:{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:"bolder"},body:Object(f.a)({margin:0,color:e.palette.text.primary},e.typography.body2,{backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white}})}}},{name:"MuiCssBaseline"});var j=function(e){var t=e.children,a=void 0===t?null:t;return x(),p.a.createElement(p.a.Fragment,null,a)},k=a("Ff2n"),E=a("iuhU"),w=a("H2TA"),S=a("mVKy"),C=a("kKAo"),T=p.a.forwardRef(function(e,t){var a=e.classes,n=e.className,r=e.color,o=void 0===r?"primary":r,i=e.position,c=void 0===i?"fixed":i,l=Object(k.a)(e,["classes","className","color","position"]);return p.a.createElement(C.a,Object(f.a)({square:!0,component:"header",elevation:4,className:Object(E.a)(a.root,a["position".concat(Object(S.a)(c))],n,"inherit"!==o&&a["color".concat(Object(S.a)(o))],{fixed:"mui-fixed"}[c]),ref:t},l))}),N=Object(w.a)(function(e){var t="light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:e.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:t,color:e.palette.getContrastText(t)},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText}}},{name:"MuiAppBar"})(T),R=a("rePB"),I=p.a.forwardRef(function(e,t){var a=e.classes,n=e.className,r=e.component,o=void 0===r?"div":r,i=e.disableGutters,c=void 0!==i&&i,l=e.variant,s=void 0===l?"regular":l,d=Object(k.a)(e,["classes","className","component","disableGutters","variant"]),u=Object(E.a)(a.root,a[s],n,!c&&a.gutters);return p.a.createElement(o,Object(f.a)({className:u,ref:t},d))}),P=Object(w.a)(function(e){return{root:{position:"relative",display:"flex",alignItems:"center"},gutters:Object(R.a)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),regular:e.mixins.toolbar,dense:{minHeight:48}}},{name:"MuiToolbar"})(I),z=a("ye/S"),M=a("VD++"),A=p.a.forwardRef(function(e,t){var a=e.edge,n=void 0!==a&&a,r=e.children,o=e.classes,i=e.className,c=e.color,l=void 0===c?"default":c,s=e.disabled,d=void 0!==s&&s,u=e.disableFocusRipple,m=void 0!==u&&u,b=e.size,h=void 0===b?"medium":b,g=Object(k.a)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return p.a.createElement(M.a,Object(f.a)({className:Object(E.a)(o.root,i,"default"!==l&&o["color".concat(Object(S.a)(l))],d&&o.disabled,{small:o["size".concat(Object(S.a)(h))]}[h],{start:o.edgeStart,end:o.edgeEnd}[n]),centerRipple:!0,focusRipple:!m,disabled:d,ref:t},g),p.a.createElement("span",{className:o.label},r))}),D=Object(w.a)(function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:Object(z.b)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(z.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(z.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}},{name:"MuiIconButton"})(A),W=p.a.forwardRef(function(e,t){var a=e.classes,n=e.className,r=e.color,o=void 0===r?"inherit":r,i=e.component,c=void 0===i?"span":i,l=e.fontSize,s=void 0===l?"default":l,d=Object(k.a)(e,["classes","className","color","component","fontSize"]);return p.a.createElement(c,Object(f.a)({className:Object(E.a)("material-icons",a.root,n,"inherit"!==o&&a["color".concat(Object(S.a)(o))],"default"!==s&&a["fontSize".concat(Object(S.a)(s))]),"aria-hidden":!0,ref:t},d))});W.muiName="Icon";var B=Object(w.a)(function(e){return{root:{userSelect:"none",fontSize:e.typography.pxToRem(24),width:"1em",height:"1em",overflow:"hidden",flexShrink:0},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(36)}}},{name:"MuiIcon"})(W),L=function(e){var t=e.onClick;return p.a.createElement(N,null,p.a.createElement(P,null,p.a.createElement(D,{onClick:function(){t&&t()}},p.a.createElement(B,null,"menu"))))},_=a("vOnD"),q=a("Xt1q"),F=a("dRu9"),X=a("wpWl"),H=a("tr08"),Y=a("4Hym"),G=a("OMPe"),K={entering:{opacity:1},entered:{opacity:1}},V={enter:X.b.enteringScreen,exit:X.b.leavingScreen},U=p.a.forwardRef(function(e,t){var a=e.children,n=e.in,r=e.onEnter,o=e.onExit,i=e.style,c=e.timeout,l=void 0===c?V:c,s=Object(k.a)(e,["children","in","onEnter","onExit","style","timeout"]),d=Object(H.a)(),u=Object(G.c)(a.ref,t);return p.a.createElement(F.a,Object(f.a)({appear:!0,in:n,onEnter:function(e){Object(Y.b)(e);var t=Object(Y.a)({style:i,timeout:l},{mode:"enter"});e.style.webkitTransition=d.transitions.create("opacity",t),e.style.transition=d.transitions.create("opacity",t),r&&r(e)},onExit:function(e){var t=Object(Y.a)({style:i,timeout:l},{mode:"exit"});e.style.webkitTransition=d.transitions.create("opacity",t),e.style.transition=d.transitions.create("opacity",t),o&&o(e)},timeout:l},s),function(e,t){return p.a.cloneElement(a,Object(f.a)({style:Object(f.a)({opacity:0,visibility:"exited"!==e||n?void 0:"hidden"},K[e],{},i,{},a.props.style),ref:u},t))})}),$=p.a.forwardRef(function(e,t){var a=e.classes,n=e.className,r=e.invisible,o=void 0!==r&&r,i=e.open,c=e.transitionDuration,l=Object(k.a)(e,["classes","className","invisible","open","transitionDuration"]);return p.a.createElement(U,Object(f.a)({in:i,timeout:c},l),p.a.createElement("div",{className:Object(E.a)(a.root,n,o&&a.invisible),"aria-hidden":!0,ref:t}))}),J=Object(w.a)({root:{zIndex:-1,position:"fixed",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent",touchAction:"none"},invisible:{backgroundColor:"transparent"}},{name:"MuiBackdrop"})($),Q=a("i8i4"),Z=a.n(Q),ee=a("l3Wi");function te(e,t){var a=function(e,t){var a,n=t.getBoundingClientRect();if(t.fakeTransform)a=t.fakeTransform;else{var r=window.getComputedStyle(t);a=r.getPropertyValue("-webkit-transform")||r.getPropertyValue("transform")}var o=0,i=0;if(a&&"none"!==a&&"string"===typeof a){var c=a.split("(")[1].split(")")[0].split(",");o=parseInt(c[4],10),i=parseInt(c[5],10)}return"left"===e?"translateX(".concat(window.innerWidth,"px) translateX(-").concat(n.left-o,"px)"):"right"===e?"translateX(-".concat(n.left+n.width-o,"px)"):"up"===e?"translateY(".concat(window.innerHeight,"px) translateY(-").concat(n.top-i,"px)"):"translateY(-".concat(n.top+n.height-i,"px)")}(e,t);a&&(t.style.webkitTransform=a,t.style.transform=a)}var ae={enter:X.b.enteringScreen,exit:X.b.leavingScreen},ne=p.a.forwardRef(function(e,t){var a=e.children,n=e.direction,r=void 0===n?"down":n,o=e.in,i=e.onEnter,c=e.onEntering,l=e.onExit,s=e.onExited,d=e.style,u=e.timeout,m=void 0===u?ae:u,b=Object(k.a)(e,["children","direction","in","onEnter","onEntering","onExit","onExited","style","timeout"]),h=Object(H.a)(),g=p.a.useRef(null),v=p.a.useCallback(function(e){g.current=Z.a.findDOMNode(e)},[]),O=Object(G.c)(a.ref,v),y=Object(G.c)(O,t),x=p.a.useCallback(function(){g.current&&te(r,g.current)},[r]);return p.a.useEffect(function(){if(!o&&"down"!==r&&"right"!==r){var e=Object(ee.a)(function(){g.current&&te(r,g.current)});return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}},[r,o]),p.a.useEffect(function(){o||x()},[o,x]),p.a.createElement(F.a,Object(f.a)({onEnter:function(){var e=g.current;te(r,e),Object(Y.b)(e),i&&i(e)},onEntering:function(){var e=g.current,t=Object(Y.a)({timeout:m,style:d},{mode:"enter"});e.style.webkitTransition=h.transitions.create("-webkit-transform",Object(f.a)({},t,{easing:h.transitions.easing.easeOut})),e.style.transition=h.transitions.create("transform",Object(f.a)({},t,{easing:h.transitions.easing.easeOut})),e.style.webkitTransform="none",e.style.transform="none",c&&c(e)},onExit:function(){var e=g.current,t=Object(Y.a)({timeout:m,style:d},{mode:"exit"});e.style.webkitTransition=h.transitions.create("-webkit-transform",Object(f.a)({},t,{easing:h.transitions.easing.sharp})),e.style.transition=h.transitions.create("transform",Object(f.a)({},t,{easing:h.transitions.easing.sharp})),te(r,e),l&&l(e)},onExited:function(){var e=g.current;e.style.webkitTransition="",e.style.transition="",s&&s(e)},appear:!0,in:o,timeout:m},b),function(e,t){return p.a.cloneElement(a,Object(f.a)({ref:y,style:Object(f.a)({visibility:"exited"!==e||o?void 0:"hidden"},d,{},a.props.style)},t))})}),re={left:"right",right:"left",top:"down",bottom:"up"};var oe={enter:X.b.enteringScreen,exit:X.b.leavingScreen},ie=p.a.forwardRef(function(e,t){var a=e.anchor,n=void 0===a?"left":a,r=e.BackdropProps,o=e.children,i=e.classes,c=e.className,l=e.elevation,s=void 0===l?16:l,d=e.ModalProps,u=(d=void 0===d?{}:d).BackdropProps,m=Object(k.a)(d,["BackdropProps"]),b=e.onClose,h=e.open,g=void 0!==h&&h,v=e.PaperProps,O=e.SlideProps,y=e.theme,x=e.transitionDuration,j=void 0===x?oe:x,w=e.variant,T=void 0===w?"temporary":w,N=Object(k.a)(e,["anchor","BackdropProps","children","classes","className","elevation","ModalProps","onClose","open","PaperProps","SlideProps","theme","transitionDuration","variant"]),R=p.a.useRef(!1);p.a.useEffect(function(){R.current=!0},[]);var I=function(e,t){return"rtl"===e.direction&&function(e){return-1!==["left","right"].indexOf(e)}(t)?re[t]:t}(y,n),P=p.a.createElement(C.a,Object(f.a)({elevation:"temporary"===T?s:0,square:!0,className:Object(E.a)(i.paper,i["paperAnchor".concat(Object(S.a)(I))],"temporary"!==T&&i["paperAnchorDocked".concat(Object(S.a)(I))])},v),o);if("permanent"===T)return p.a.createElement("div",Object(f.a)({className:Object(E.a)(i.root,i.docked,c),ref:t},N),P);var z=p.a.createElement(ne,Object(f.a)({in:g,direction:re[I],timeout:j,appear:R.current},O),P);return"persistent"===T?p.a.createElement("div",Object(f.a)({className:Object(E.a)(i.root,i.docked,c)},N),z):p.a.createElement(q.a,Object(f.a)({BackdropProps:Object(f.a)({},r,{},u,{transitionDuration:j}),BackdropComponent:J,className:Object(E.a)(i.root,i.modal,c),open:g,onClose:b,ref:t},N,m),z)}),ce=Object(w.a)(function(e){return{root:{},docked:{flex:"0 0 auto"},paper:{overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:e.zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:"none"},paperAnchorLeft:{left:0,right:"auto"},paperAnchorRight:{left:"auto",right:0},paperAnchorTop:{top:0,left:0,bottom:"auto",right:0,height:"auto",maxHeight:"100%"},paperAnchorBottom:{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},paperAnchorDockedLeft:{borderRight:"1px solid ".concat(e.palette.divider)},paperAnchorDockedTop:{borderBottom:"1px solid ".concat(e.palette.divider)},paperAnchorDockedRight:{borderLeft:"1px solid ".concat(e.palette.divider)},paperAnchorDockedBottom:{borderTop:"1px solid ".concat(e.palette.divider)},modal:{}}},{name:"MuiDrawer",flip:!1,withTheme:!0})(ie),le=a("eD//"),se=a("YFqc"),de=a.n(se),pe=a("tVbE"),ue=a("56Ss"),me=a("IsqK"),fe=function(e){var t=e.link;return p.a.createElement(de.a,{href:t.link},p.a.createElement(pe.a,{button:!0},p.a.createElement(ue.a,null,p.a.createElement(B,null,t.icon)),p.a.createElement(me.a,null,t.name)))},be=_.a.img.withConfig({displayName:"Navigation__Logo",componentId:"i8ssph-0"})(["width:340px;padding:30px 80px;background:#141414;"]),he=[{id:1,name:"\u0422\u043e\u043f \u0438\u0433\u0440\u043e\u043a\u043e\u0432 \u043f\u043e \u0433\u0435\u0440\u043e\u044f\u043c",link:"/",icon:"star"}],ge=function(e){var t=e.isOpen,a=e.onClick;return p.a.createElement(ce,{anchor:"left",open:t,onClick:function(){a&&a()}},p.a.createElement(be,{src:"http://cdn.dota2.com/apps/dota2/images/nav/logo.png"}),p.a.createElement(le.a,null,he.map(function(e){return p.a.createElement(fe,{link:e,key:e.id})})))},ve=p.a.forwardRef(function(e,t){var a=e.classes,n=e.className,r=e.component,o=void 0===r?"div":r,i=e.fixed,c=void 0!==i&&i,l=e.maxWidth,s=void 0===l?"lg":l,d=Object(k.a)(e,["classes","className","component","fixed","maxWidth"]);return p.a.createElement(o,Object(f.a)({className:Object(E.a)(a.root,n,c&&a.fixed,!1!==s&&a["maxWidth".concat(Object(S.a)(String(s)))]),ref:t},d))}),Oe=Object(w.a)(function(e){var t;return{root:(t={width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},Object(R.a)(t,e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),Object(R.a)(t,e.breakpoints.up("md"),{paddingLeft:e.spacing(4),paddingRight:e.spacing(4)}),t),fixed:Object.keys(e.breakpoints.values).reduce(function(t,a){var n=e.breakpoints.values[a];return 0!==n&&(t[e.breakpoints.up(a)]={maxWidth:n}),t},{}),maxWidthXs:Object(R.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:Object(R.a)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:Object(R.a)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:Object(R.a)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:Object(R.a)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}},{name:"MuiContainer"})(ve),ye=Object(_.a)(Oe).withConfig({displayName:"Main__StyledMain",componentId:"sc-1m89iw5-0"})(["padding-top:88px;"]),xe=function(e){var t=e.children;return p.a.createElement(ye,null,t)},je=a("viY9"),ke=a("dl/7"),Ee=Object(je.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:ke.a.A400},background:{default:"#e0e0e0"}}}),we=function(e){function t(){var e,a;Object(n.default)(this,t);for(var r=arguments.length,l=new Array(r),d=0;d<r;d++)l[d]=arguments[d];return a=Object(o.default)(this,(e=Object(i.default)(t)).call.apply(e,[this].concat(l))),Object(s.a)(Object(c.default)(a),"state",{navigationIsOpen:!1}),Object(s.a)(Object(c.default)(a),"handleOpenNavigation",function(){a.setState({navigationIsOpen:!0})}),Object(s.a)(Object(c.default)(a),"handleCloseNavigation",function(){a.setState({navigationIsOpen:!1})}),a}return Object(l.default)(t,e),Object(r.default)(t,[{key:"componentDidMount",value:function(){var e=document.querySelector("#jss-server-side");e&&e.parentNode.removeChild(e)}},{key:"render",value:function(){var e=this.state.navigationIsOpen,t=this.props,a=t.Component,n=t.pageProps;return p.a.createElement(u.Container,null,p.a.createElement(v,{theme:Ee},p.a.createElement(j,null),p.a.createElement(L,{onClick:this.handleOpenNavigation}),p.a.createElement(ge,{isOpen:e,onClick:this.handleCloseNavigation}),p.a.createElement(xe,null,p.a.createElement(a,n))))}}]),t}(m.a);t.default=we},"8Bbg":function(e,t,a){e.exports=a("B5Ud")},B5Ud:function(e,t,a){"use strict";var n=a("KI45"),r=n(a("0iUn")),o=n(a("sLSF")),i=n(a("MI3g")),c=n(a("a7VT")),l=n(a("Tit0")),s=n(a("ln6h")),d=a("KI45");t.__esModule=!0,t.Container=y,t.createUrl=j,t.default=void 0;var p=d(a("htGi")),u=d(a("+oT+")),m=d(a("q1tI")),f=d(a("17x9")),b=a("Bu4q");t.AppInitialProps=b.AppInitialProps;var h=a("nOHt");function g(e){return v.apply(this,arguments)}function v(){return(v=(0,u.default)(s.default.mark(function e(t){var a,n,r;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.Component,n=t.ctx,e.next=3,(0,b.loadGetInitialProps)(a,n);case 3:return r=e.sent,e.abrupt("return",{pageProps:r});case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}var O=function(e){function t(){return(0,r.default)(this,t),(0,i.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,l.default)(t,e),(0,o.default)(t,[{key:"getChildContext",value:function(){return{router:(0,h.makePublicRouterInstance)(this.props.router)}}},{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,a=e.Component,n=e.pageProps,r=j(t);return m.default.createElement(y,null,m.default.createElement(a,(0,p.default)({},n,{url:r})))}}]),t}(m.default.Component);function y(e){return e.children}t.default=O,O.childContextTypes={router:f.default.object},O.origGetInitialProps=g,O.getInitialProps=g;var x=(0,b.execOnce)(function(){0});function j(e){var t=e.pathname,a=e.asPath,n=e.query;return{get query(){return x(),n},get pathname(){return x(),t},get asPath(){return x(),a},back:function(){x(),e.back()},push:function(t,a){return x(),e.push(t,a)},pushTo:function(t,a){x();var n=a?t:"",r=a||t;return e.push(n,r)},replace:function(t,a){return x(),e.replace(t,a)},replaceTo:function(t,a){x();var n=a?t:"",r=a||t;return e.replace(n,r)}}}},GcxT:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){var e=a("1TCz");return{page:e.default||e}}])}},[["GcxT",1,0]]]);
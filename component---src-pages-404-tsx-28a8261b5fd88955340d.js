(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[218],{6132:function(e,t,n){"use strict";var a=n(4836);t.__esModule=!0,t.default=void 0;var r=a(n(6115)),l=a(n(7867)),o=a(n(8416)),i=a(n(7294)),u=a(n(5697)),c=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return t=e.call.apply(e,[this].concat(a))||this,(0,o.default)((0,r.default)(t),"state",{theme:"undefined"!=typeof window?window.__theme:null}),t}(0,l.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;window.__onThemeChange=function(){e.setState({theme:window.__theme})}},n.toggleTheme=function(e){window.__setPreferredTheme(e)},n.render=function(){return i.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},t}(i.default.Component);c.propTypes={children:u.default.func.isRequired};var s=c;t.default=s},3071:function(e,t,n){"use strict";var a=n(4836)(n(6132));t.L=a.default},9104:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(7294),r=n(1597),l=n(3071),o=function(){return a.createElement(l.L,null,(function(e){var t=e.theme,n=e.toggleTheme;return a.createElement("div",{className:"darkmodeBtn",onClick:function(e){return n("dark"===t?"light":"dark")}},"dark"===t?"WHITE":"DARK")}))},i=function(e){var t,n=e.location,l=e.title,i=e.children,u="/"===n.pathname;return t=u?a.createElement("h1",{className:"main-heading"},a.createElement(r.Link,{to:"/"},l)):a.createElement(r.Link,{className:"header-link-home",to:"/"},l),a.createElement("div",{className:"global-wrapper","data-is-root-path":u},a.createElement(o,null),a.createElement("header",{className:"global-header"},t),a.createElement("main",null,i),a.createElement("footer",{style:{color:"var(--textNormal)"}},"© ",(new Date).getFullYear(),", Built with"," ",a.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby")))}},2513:function(e,t,n){"use strict";n.r(t);var a=n(7294),r=n(9104);t.default=function(e){var t=e.data,n=e.location,l=t.site.siteMetadata.title;return a.createElement(r.Z,{location:n,title:l},a.createElement("h1",null,"404: Not Found"),a.createElement("p",null,"페이지를 찾을 수 없네요 !"))}},8416:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-pages-404-tsx-28a8261b5fd88955340d.js.map
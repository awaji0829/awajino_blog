(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[218],{6132:function(e,t,n){"use strict";var a=n(4836);t.__esModule=!0,t.default=void 0;var r=a(n(6115)),o=a(n(7867)),l=a(n(8416)),i=a(n(7294)),c=a(n(5697)),u=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return t=e.call.apply(e,[this].concat(a))||this,(0,l.default)((0,r.default)(t),"state",{theme:"undefined"!=typeof window?window.__theme:null}),t}(0,o.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;window.__onThemeChange=function(){e.setState({theme:window.__theme})}},n.toggleTheme=function(e){window.__setPreferredTheme(e)},n.render=function(){return i.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},t}(i.default.Component);u.propTypes={children:c.default.func.isRequired};var s=u;t.default=s},3071:function(e,t,n){"use strict";var a=n(4836)(n(6132));t.L=a.default},9104:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(7294),r=n(1597),o=n(3071),l=function(){return a.createElement(o.L,null,(function(e){var t=e.theme,n=e.toggleTheme;return a.createElement("div",{className:"darkmodeBtn",onClick:function(e){return n("dark"===t?"light":"dark")}},"dark"===t?"WHITE":"DARK")}))},i=function(e){var t,n=e.location,o=e.title,i=e.children,c="/"===n.pathname;return t=c?a.createElement("h1",{className:"main-heading"},a.createElement(r.Link,{to:"/"},o)):a.createElement(r.Link,{className:"header-link-home",to:"/"},o),a.createElement("div",{className:"global-wrapper","data-is-root-path":c},a.createElement(l,null)," ",a.createElement("header",{className:"global-header",style:{backgroundColor:"var(--bg)",color:"var(--point)"}},t),a.createElement("main",null,i),a.createElement("footer",{style:{color:"var(--textNormal)"}},"© ",(new Date).getFullYear(),", Built with"," ",a.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby")))}},4001:function(e,t,n){"use strict";var a=n(7294),r=n(1597),o=function(e){var t,n,o,l=e.description,i=e.title,c=e.children,u=(0,r.useStaticQuery)("2841359383").site,s=l||u.siteMetadata.description,m=null===(t=u.siteMetadata)||void 0===t?void 0:t.title;return a.createElement(a.Fragment,null,a.createElement("title",null,m?i+" | "+m:i),a.createElement("meta",{name:"description",content:s}),a.createElement("meta",{name:"google-site-verification",content:"PpF0Q2ZYamo3M5yXIBwlt-R9bIpkmRfXj2w9nzLT1go"}),a.createElement("meta",{property:"og:title",content:i}),a.createElement("meta",{property:"og:description",content:s}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:(null===(n=u.siteMetadata)||void 0===n||null===(o=n.social)||void 0===o?void 0:o.twitter)||""}),a.createElement("meta",{name:"twitter:title",content:i}),a.createElement("meta",{name:"twitter:description",content:s}),c)};o.defaultProps={description:""},t.Z=o},2513:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return l}});var a=n(7294),r=n(9104),o=n(4001),l=function(){return a.createElement(o.Z,{title:"404: Not Found"})};t.default=function(e){var t=e.data,n=e.location,o=t.site.siteMetadata.title;return a.createElement(r.Z,{location:n,title:o},a.createElement("h1",null,"404: Not Found"),a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},8416:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-pages-404-tsx-00fa76703be0fe4688d9.js.map
(this.webpackJsonpcoding=this.webpackJsonpcoding||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(3),s=n.n(a),i=(n(12),n(4)),o=n(5),h=n(7),u=n(6),j=(n(13),n(0)),l=function(e){var t=e.alias,n=e.age;return Object(j.jsx)(c.Fragment,{children:Object(j.jsxs)("div",{className:"hot",children:[Object(j.jsx)("img",{src:"https://robohash.org/".concat(t),alt:"Robots"}),Object(j.jsxs)("p",{children:["Name:",t]}),Object(j.jsxs)("p",{children:["Email: ",n]})]})})},b=function(e){var t=e.filtera.map((function(e,t){return Object(j.jsx)(l,{alias:e.name,age:e.email},t)}));return Object(j.jsx)(c.Fragment,{children:t})},d=function(e){var t=e.searchChange;return Object(j.jsx)("input",{type:"search",name:"search",placeholder:"Search",onChange:t})},f=(n(15),function(e){return Object(j.jsx)(c.Fragment,{children:Object(j.jsx)("div",{className:"Rig",children:e.children})})}),g=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).search=function(t){e.setState({search:t.target.value})},e.state={robots:[],search:""},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.includes(e.state.search)}));return Object(j.jsxs)(r.a.Fragment,{children:[Object(j.jsx)(d,{sear:this.search}),Object(j.jsx)(f,{children:Object(j.jsx)(b,{filtera:t})})]})}}]),n}(r.a.Component),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(j.jsx)(g,{}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.7c440a40.chunk.js.map
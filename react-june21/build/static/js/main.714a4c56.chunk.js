(this["webpackJsonpreact-june21"]=this["webpackJsonpreact-june21"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),o=n(3),r=n.n(o),a=(n(12),n(4)),i=n(5),u=n(7),h=n(6),l=(n.p,n(13),n(14),n(0)),j=function(e){return Object(l.jsxs)("div",{className:"card-container",children:[Object(l.jsx)("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set2"),alt:""}),Object(l.jsxs)("h2",{children:[" ",e.monster.name," "]}),Object(l.jsxs)("span",{children:[" ",e.monster.email," "]})]})},d=(n(16),function(e){return Object(l.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(l.jsx)(j,{monster:e},e.id)}))})}),f=(n(17),function(e){var t=e.placeholder,n=e.handleChange;return Object(l.jsx)("input",{type:"search",className:"search",placeholder:t,onChange:n})}),b=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value},(function(){console.log(e.state)}))},e.state={monsters:[],searchField:"",count:48},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,c=t.searchField,s=n.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())}));return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Monsters Rolodex"}),Object(l.jsx)(f,{placeholder:"Search Monster",handleChange:this.handleChange}),Object(l.jsx)(d,{monsters:s}),Object(l.jsx)("span",{children:this.state.count}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{onClick:function(){e.setState((function(e,t){return{count:e.count+1}}),(function(){return console.log(e.state.count)}))},children:"Click here to update"})]})}}]),n}(c.Component),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),o(e),r(e)}))};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),m()}],[[18,1,2]]]);
//# sourceMappingURL=main.714a4c56.chunk.js.map
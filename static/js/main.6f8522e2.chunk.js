(this.webpackJsonpgitpop3=this.webpackJsonpgitpop3||[]).push([[0],{103:function(t,e,n){"use strict";n.r(e);var c=n(5),r=n(0),a=n.n(r),o=n(32),s=n.n(o),i=(n(89),n(90),n(91),n(35)),j=n(82),b=n(83),h=n(37),d=n(108),l=n(110),u=n(105),O=n(73),x=n(106),f=n(22),p=/https?:\/\/github.com\/(\w+)\/(\w+)/,m=function(t){return t&&t.match(p)},g=function(t){var e=t.onSubmit,n=Object(r.useState)(),a=Object(h.a)(n,2),o=a[0],s=a[1],i=function(t){t.preventDefault(),null===m(o)?t.stopPropagation():e(o)};return Object(c.jsx)(l.a,{onSubmit:i,children:Object(c.jsxs)(u.a,{className:"mb-3",children:[Object(c.jsx)(O.a,{placeholder:"https://github.com/django/django",onChange:function(t){return s(t.target.value)},isInvalid:null===m(o)}),Object(c.jsx)(u.a.Append,{children:Object(c.jsx)(x.a,{type:"submit",variant:"outline-secondary",onClick:i,children:Object(c.jsx)(f.a,{icon:"search"})})})]})})},k=n(107),v=function(t){var e=Math.floor((new Date-t)/1e3),n=e/31536e3;return n>1?"".concat(Math.floor(n)," years ago"):(n=e/2592e3)>1?"".concat(Math.floor(n)," months ago"):(n=e/86400)>1?"".concat(Math.floor(n)," days ago"):(n=e/3600)>1?"".concat(Math.floor(n)," hours ago"):(n=e/60)>1?"".concat(Math.floor(n)," minutes ago"):"".concat(Math.floor(e)," seconds ago")},w=function(t){var e=t.info;return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:e.nameWithOwner}),Object(c.jsx)("td",{children:e.stargazerCount}),Object(c.jsx)("td",{children:e.forkCount}),Object(c.jsx)("td",{children:e.object.history.totalCount}),Object(c.jsx)("td",{children:v(Date.parse(e.pushedAt))})]})},y=function(t){var e=t.forks;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(k.a,{striped:!0,bordered:!0,hover:!0,children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsxs)("th",{children:[Object(c.jsx)(f.a,{icon:["fab","github-alt"]})," ","Repo"]}),Object(c.jsxs)("th",{children:[Object(c.jsx)(f.a,{icon:"star"})," ","Stars"]}),Object(c.jsxs)("th",{children:[Object(c.jsx)(f.a,{icon:"code-branch"})," ","Forks"]}),Object(c.jsxs)("th",{children:[Object(c.jsx)(f.a,{icon:"dot-circle"})," ","Commits"]}),Object(c.jsxs)("th",{children:[Object(c.jsx)(f.a,{icon:"calendar-alt"})," ","Modified"]})]})}),Object(c.jsx)("tbody",{children:e.map((function(t){return Object(c.jsx)(w,{info:t},t.nameWithOwner)}))})]})})},M=n(74),C=n(59),S=n(38),N=n(75);function A(){var t=Object(M.a)(['\n  query Forks($owner: String! $name: String!) {\n    repository(owner: $owner, name: $name) {\n      forks(first: 100, orderBy: {field: STARGAZERS, direction: DESC}) {\n        nodes {\n          nameWithOwner\n          stargazerCount\n          forkCount\n          pushedAt\n          object(expression: "master") {\n            ... on Commit {\n              history {\n                totalCount\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n']);return A=function(){return t},t}var Z=Object(S.createHttpLink)({uri:"https://api.github.com/graphql"}),E=atob("ZWJiYjZmNmEwYjgzNTMzMjE0ZjEwZDdkZjVmNjQ0MTdkZjJhNGMyNw=="),q=Object(N.a)((function(t,e){var n=e.headers;return{headers:Object(C.a)(Object(C.a)({},n),{},{authorization:E?"Bearer ".concat(E):""})}})),z=new S.ApolloClient({link:q.concat(Z),cache:new S.InMemoryCache}),D=Object(S.gql)(A()),J=function(t,e){var n=function(t){return m(t).slice(1,3)}(t),c=Object(h.a)(n,2),r=c[0],a=c[1];z.query({query:D,variables:{owner:r,name:a}}).then((function(t){return e(t)}))},B=function(){var t=Object(r.useState)(),e=Object(h.a)(t,2),n=e[0],a=e[1],o=function(t){return a(t.data.repository.forks.nodes)},s=n?Object(c.jsx)(y,{forks:n}):null;return Object(c.jsxs)(d.a,{children:[Object(c.jsx)(g,{onSubmit:function(t){return J(t,o)}}),s]})},T=n(79),W=function(){return Object(c.jsx)("footer",{className:"footer d-none d-md-block",children:Object(c.jsx)(d.a,{className:"text-center",children:Object(c.jsxs)("span",{children:["Copyright \xa9 Andre Miras 2020 - gitpop3 v",T.a]})})})},$=n(109),F=n(111),G=function(){return Object(c.jsx)($.a,{bg:"dark",variant:"dark",expand:"sm",className:"mb-4",children:Object(c.jsxs)(d.a,{children:[Object(c.jsxs)($.a.Brand,{href:"/gitpop3",children:[Object(c.jsx)(f.a,{icon:"code-branch"})," ","GitPop3"]}),Object(c.jsx)($.a.Toggle,{}),Object(c.jsx)($.a.Collapse,{children:Object(c.jsxs)(F.a,{className:"mr-auto",children:[Object(c.jsxs)(F.a.Link,{href:"/gitpop3",children:[Object(c.jsx)(f.a,{icon:"home"})," ","Home"]}),Object(c.jsxs)(F.a.Link,{href:"https://github.com/AndreMiras/gitpop3",children:[Object(c.jsx)(f.a,{icon:["fab","github-alt"]})," ","About"]})]})})]})})};i.b.add(j.a,b.a);var I=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(G,{}),Object(c.jsx)(B,{}),Object(c.jsx)(W,{})]})};s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(I,{})}),document.getElementById("root"))},79:function(t){t.exports=JSON.parse('{"a":"0.1.0"}')},89:function(t,e,n){},90:function(t,e,n){}},[[103,1,2]]]);
//# sourceMappingURL=main.6f8522e2.chunk.js.map
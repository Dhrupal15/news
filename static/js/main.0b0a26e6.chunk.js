(this.webpackJsonpnews=this.webpackJsonpnews||[]).push([[0],{137:function(e,t,n){},147:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(46),s=n.n(c),i=(n(137),n(43)),l=n.n(i),o=n(70),h=n(74),u=n(75),j=n(99),p=n(93),d="51331d9960ec4d5eab165fda8e805372",b=function(){var e=Object(o.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://thingproxy.freeboard.io/fetch/https://newsapi.org/v2/everything?q=".concat(t,"&sortBy=publishedAt&apiKey=").concat(d));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=n(161),x=n(164),O=n(165),g=n(120),y=n(9),v=function(e){var t=e.article;return Object(y.jsx)(f.a.Item,{style:{padding:30},children:Object(y.jsxs)(x.a,{children:[Object(y.jsxs)(x.a.Column,{width:11,style:{display:"flex",flexDirection:"column",justifyContent:"flex-start"},children:[Object(y.jsx)(O.a,{as:"h3",children:t.title}),Object(y.jsx)(f.a.Description,{style:{margin:"20px 0"},children:t.description}),Object(y.jsxs)(f.a,{bulleted:!0,horizontal:!0,children:[Object(y.jsx)(f.a.Item,{children:Object(y.jsx)("a",{href:t.url,children:t.source.name})}),Object(y.jsx)(f.a.Item,{children:t.publishedAt.split("T")[0]})]})]}),Object(y.jsx)(x.a.Column,{width:5,children:Object(y.jsx)(g.a,{src:t.urlToImage})})]})})},m=function(e){return Object(y.jsx)(f.a,{divided:!0,style:{margin:"0 auto"},children:e.articles.map((function(e,t){return Object(y.jsx)(v,{article:e},e.title+t)}))})},T=n(160),C=n(162),S=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).handleChange=function(e){r.setState({searchTopic:e.target.value})},r.handleSubmit=function(e){e.preventDefault(),r.props.searchForTopic(r.state.searchTopic)},r.state={searchTopic:""},r}return Object(u.a)(n,[{key:"render",value:function(){return Object(y.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(y.jsx)(T.a,{onSubmit:this.handleSubmit,children:Object(y.jsxs)(T.a.Group,{children:[Object(y.jsx)(T.a.Input,{placeholder:"Search topic",name:"topic",value:this.state.searchTopic,onChange:this.handleChange}),Object(y.jsx)(C.a,{type:"submit",color:"green",children:"Search"})]})})})}}]),n}(a.a.Component),w=n(159),F=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(h.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={articles:[],searchTopic:"",totalResults:"",loading:!1,apiError:""},e.searchForTopic=function(){var t=Object(o.a)(l.a.mark((function t(n){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.setState({loading:!0}),t.next=4,b(n);case 4:r=t.sent,e.setState({articles:r.articles,searchTopic:n,totalResults:r.totalResults}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),e.setState({apiError:"Could not find any articles"});case 11:e.setState({loading:!1});case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.articles,n=e.apiError,r=e.loading,a=e.searchTopic,c=e.totalResults;return Object(y.jsxs)(w.a,{children:[Object(y.jsx)(O.a,{as:"h2",style:{textAlign:"center",margin:20},children:"Search for articles"}),Object(y.jsx)(S,{searchForTopic:this.searchForTopic}),r&&Object(y.jsx)("p",{style:{textAlign:"center"},children:"Searching for articles..."}),t.length>0&&Object(y.jsxs)(O.a,{as:"h4",style:{textAlign:"center",margin:20},children:["Found ",c,' articles on "',a,'"']}),t.length>0&&Object(y.jsx)(m,{articles:t}),n&&Object(y.jsx)("p",{children:"Could not fetch any articles. Please try again."})]})}}]),n}(a.a.Component),k=(n(146),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,166)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))});s.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(F,{})}),document.getElementById("root")),k()}},[[147,1,2]]]);
//# sourceMappingURL=main.0b0a26e6.chunk.js.map
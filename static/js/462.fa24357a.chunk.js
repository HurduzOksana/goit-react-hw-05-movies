"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[462],{713:function(e,r,t){t.d(r,{HI:function(){return s},Hg:function(){return o},M1:function(){return l},Tn:function(){return m},lU:function(){return i}});var n=t(861),a=t(757),c=t.n(a),u=t(263).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"b6da31fc92a69bac7a66403e27502d5d"}}),o=function(){var e=(0,n.Z)(c().mark((function e(){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/trending/movie/day");case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/search/movie",{params:{query:r}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(c().mark((function e(r,t){var n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(r),{params:t});case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(r,t){var n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(r,"/credits"),{params:t});case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),m=function(){var e=(0,n.Z)(c().mark((function e(r,t){var n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(r,"/reviews"),{params:t});case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()},462:function(e,r,t){t.r(r),t.d(r,{default:function(){return _}});var n=t(439),a=t(791),c=t(713),u="SearchBox_Searchbar__B+SID",o="SearchBox_SearchForm__NFq2Z",s="SearchBox_SearchForm-button__0JGD9",i="SearchBox_SearchForm-button-label__u-Ni2",l="SearchBox_SearchForm-input__STG8Q",m=t(184),h=function(e){var r=e.handleSubmit;return(0,m.jsx)("div",{className:u,children:(0,m.jsxs)("form",{className:o,onSubmit:r,children:[(0,m.jsx)("button",{type:"submit",className:s,children:(0,m.jsx)("span",{className:i,children:"Search"})}),(0,m.jsx)("input",{className:l,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies...",name:"search"})]})})},p=t(87),f={Container:"Movies_Container__d7JFU",Searchbar:"Movies_Searchbar__485Hv",SearchForm:"Movies_SearchForm__EKSZc","SearchForm-button":"Movies_SearchForm-button__+FWo6","SearchForm-button-label":"Movies_SearchForm-button-label__mUtId","SearchForm-input":"Movies_SearchForm-input__27oAB",PosterGallery:"Movies_PosterGallery__F4sYl","ImageGalleryItem-image":"Movies_ImageGalleryItem-image__4uEjc"},_=function(){var e=(0,a.useState)(null),r=(0,n.Z)(e,2),t=r[0],u=r[1],o=(0,p.lr)(),s=(0,n.Z)(o,2),i=s[0],l=s[1],_=i.get("search");return(0,a.useEffect)((function(){_&&(0,c.HI)(_).then((function(e){return u(e.results)})).catch((function(e){return console.log(e)}))}),[_]),(0,m.jsxs)("div",{className:f.Container,children:[(0,m.jsx)(h,{handleSubmit:function(e){if(e.preventDefault(),""===(null===_||void 0===_?void 0:_.trim()))return alert("Nothing");var r=e.currentTarget;l({search:r.elements.search.value}),r.reset()}}),t&&(0,m.jsx)("ul",{className:f.PosterGallery,children:t.map((function(e){return(0,m.jsx)(p.rU,{to:"/movies/".concat(e.id),children:(0,m.jsx)("li",{className:f.ImageGalleryItem,children:(0,m.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(e.poster_path),alt:e.title,style:{width:"300px"},className:f["ImageGalleryItem-image"]})})},e.id)}))})]})}}}]);
//# sourceMappingURL=462.fa24357a.chunk.js.map
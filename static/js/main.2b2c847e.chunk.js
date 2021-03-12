(this["webpackJsonpreact-movies-app"]=this["webpackJsonpreact-movies-app"]||[]).push([[0],{23:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(2),r=n.n(c),s=n(16),i=n.n(s),o=(n(23),n(3)),u=n.n(o),l=n(4),j=n(6),b=n(5),f=n.n(b);n(43);var d=function(e){var t=Object(c.useState)(""),n=Object(j.a)(t,2),r=n[0],s=n[1],i=function(){var t=Object(l.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,f.a.get("https://api.themoviedb.org/3/search/movie?api_key=c9fd3a3ff02ea8c83f2640c4e7ec0e2e&query="+r).then((function(t){e.data(t.data.results)}));case 3:s("");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("form",{onSubmit:function(e){return i(e)},children:Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)("p",{}),Object(a.jsxs)("div",{className:"search",children:[Object(a.jsx)("i",{className:"fa fa-search"}),Object(a.jsx)("input",{type:"text",className:"search-text",onChange:function(e){return function(e){s(e.target.value)}(e)},value:r,name:"search",placeholder:"Search..."})]})]})})})};n(44);var p=function(e){var t=e.data,n=(t.original_language,t.original_title,t.backdrop_path,t.overview),c=(t.popularity,t.poster_path),r=(t.release_date,t.title),s=t.vote_average,i=s<=4?"rating-red":s<7?"rating-orange":s>=7?"rating-green":"";return Object(a.jsx)("div",{className:"movie-container",children:Object(a.jsxs)("div",{className:"movie-block",children:[Object(a.jsx)("img",{src:c?"https://image.tmdb.org/t/p/w500"+c:"https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3440&q=80",alt:r}),Object(a.jsxs)("div",{className:"movie-info",children:[Object(a.jsxs)("span",{className:"movie-title",children:[" ",r.length>20?r.substring(0,20)+"...":r," "]}),Object(a.jsxs)("span",{className:"movie-rating "+i,children:[" ",s," "]})]}),Object(a.jsx)("div",{className:"movie-overview",children:n?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h5",{className:"text-center pt-2",children:"Overview"}),Object(a.jsxs)("p",{children:[" ",n," "]})]}):Object(a.jsx)("b",{children:"No overview available"})})]})})};n(17),n(45),n(46);n(47);var h="https://api.themoviedb.org/3/discover/movie?api_key=c9fd3a3ff02ea8c83f2640c4e7ec0e2e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=";var x=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(1),i=Object(j.a)(s,2),o=i[0],b=i[1];Object(c.useEffect)(Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(h+o).then((function(e){r(e.data.results)}));case 2:case"end":return e.stop()}}),e)}))),[]);var x=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((o-=1)<=0)){e.next=7;break}return b(o=1),e.abrupt("return");case 7:return b(o),e.next=10,f.a.get(h+o).then((function(e){r(e.data.results)}));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((o+=1)>500)){e.next=7;break}return b(o=500),e.abrupt("return");case 7:return b(o),e.next=10,f.a.get(h+o).then((function(e){r(e.data.results)}));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(d,{data:function(e){r(e)}}),Object(a.jsxs)("div",{className:"next_back pt-4",children:[Object(a.jsx)("span",{className:"backword-button",children:Object(a.jsxs)("button",{className:"button btn-prev",onClick:function(){return x()},children:[Object(a.jsx)("i",{class:"fas fa-angle-double-left"}),Object(a.jsx)("span",{className:"texto prev-text",children:"Prev"})]})}),Object(a.jsx)("span",{className:"forword-button",children:Object(a.jsxs)("button",{className:"button btn-next",onClick:function(){return v()},children:[Object(a.jsx)("span",{className:"texto next-text",children:"Next"}),Object(a.jsx)("i",{className:"fas fa-angle-double-right"})]})})]}),Object(a.jsx)("div",{className:"movies-container",children:n.map((function(e){return Object(a.jsx)(p,{data:e},e.id)}))})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root")),v()}},[[48,1,2]]]);
//# sourceMappingURL=main.2b2c847e.chunk.js.map
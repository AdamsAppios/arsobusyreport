(this.webpackJsonparsoreact=this.webpackJsonparsoreact||[]).push([[0],{117:function(e,t,n){},119:function(e,t,n){},249:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(32),s=n.n(r),o=(n(117),n(118),n.p,n(119),n(5)),i=n(6),l=n(12),j=n(13),b=n(7),u=n(14),d=n(36),h=n(11),p=n(0),O=function(e){var t=Object(h.e)(),n=t.values,a=n.date,r=n.dealer,s=n.pickup,o=n.small,i=n.container,l=n.CTO,j=n.ctaken,d=n.expenses,O=n.contend,m=n.capbeg,x=n.capend,f=n.tds,v=n.duty,g=(t.touched,t.setFieldValue),C=Object(c.useRef)(null),y=Object(h.d)(e),S=Object(u.a)(y,2),k=S[0],T=S[1];return Object(c.useEffect)((function(){g(e.name,function(){var e=9*r+10*s+150*i+5*o,t=o>0?"\nSmall : ".concat(o,"*5 = ").concat(5*o):"",n=i>0?"\nCont ".concat(i,"x150=").concat(150*i):"",c=O>0?"\nContainer Ending: ".concat(O):"",b=m-x-(r+s+i)>0?"= Short ug ".concat(m-x-(r+s+i),"\n"):"",u="\nCapseal beg: ".concat(m,", Capseal End:").concat(x," ").concat(b),h="\nTDS : ".concat(f),p=0;try{d.split(",").map((function(e){null!==e.match(/=(\d*\.?\d*)/)?p+=parseFloat(e.match(/=(\d*\.?\d*)/)[1])||0:p+=0}))}catch(T){p=0}var g=d.length>0?"\nExpenses: ".concat(d," \nTotal Expenses: ").concat(p||0," "):"",C=j>0?"\nCash taken ".concat(j):"",y=e-p-j,S=l-y>=0?"Over ug ".concat(l-y,"\n"):"Short ug ".concat(l-y,"\n"),k="\nCTO ".concat(l," , CTO Calculated ").concat(y," = ").concat(S);return"Date: ".concat(a,"\nDealer ").concat(r,"x9=").concat(9*r,"\nPickup ").concat(s,"x10=").concat(10*s).concat(t).concat(n).concat(C,"\nTotal Amount : ").concat(e).concat(g).concat(k).concat(c).concat(u).concat(h,"\nDuty: ").concat(v)}())}),[r,s,o,v,i,l,j,d,O,m,x,f,g,e.name]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("label",{children:["Report Result:",Object(p.jsx)("br",{}),Object(p.jsx)("button",{onClick:function(){return C.current.select(),void document.execCommand("copy")},children:"Copy"}),Object(p.jsx)("br",{}),Object(p.jsx)("textarea",Object(b.a)(Object(b.a)({rows:"10",cols:"70",ref:C},e),k))]}),!!T.touched&&!!T.error&&Object(p.jsx)("div",{children:T.error})]})},m=n(17),x=["label"],f=function(e){var t=e.label,n=Object(d.a)(e,x),c=Object(h.d)(n),a=Object(u.a)(c,2),r=a[0],s=a[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("label",{htmlFor:n.id||n.name,children:t}),Object(p.jsx)("input",Object(b.a)(Object(b.a)({className:"text-input"},r),n)),s.touched&&s.error?Object(p.jsx)("div",{className:"error",children:s.error}):null]})},v=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Talamban Report"}),Object(p.jsx)(h.c,{initialValues:{date:(new Date).toISOString().slice(0,10),dealer:"",pickup:"",small:"",container:"",expenses:"",ctaken:"",CTO:"",contend:"",capbeg:"",capend:"",TDS:"",duty:""},validationSchema:m.d({date:m.b(),dealer:m.c(),pickup:m.c(),small:m.c(),container:m.c(),expenses:m.e().max(250,"Must be 250 characters or less"),ctaken:m.c(),CTO:m.c(),contend:m.c(),capbeg:m.c(),capend:m.c(),TDS:m.c(),duty:m.e().max(240,"Must be 240 characters or less")}),onSubmit:function(e,t){var n=t.setSubmitting;setTimeout((function(){n(!1)}),400)},children:Object(p.jsxs)(h.b,{children:[Object(p.jsx)("button",{type:"reset",children:"Erase All"}),Object(p.jsx)("br",{}),Object(p.jsx)(f,{label:"date",name:"date",type:"date"}),Object(p.jsx)("br",{}),Object(p.jsx)(f,{label:"dealer",name:"dealer",type:"number",placeholder:"0"}),Object(p.jsx)("br",{}),Object(p.jsx)(f,{label:"pickup",name:"pickup",type:"number",placeholder:"0"}),Object(p.jsx)("br",{}),Object(p.jsx)(f,{label:"small",name:"small",type:"number",placeholder:"0"}),Object(p.jsx)("br",{}),Object(p.jsx)(f,{label:"container",name:"container",type:"number",placeholder:"0"}),Object(p.jsx)("br",{}),Object(p.jsx)(f,{label:"expenses",name:"expenses",type:"text",size:"90",placeholder:"Example: Load=100, Sweldo Juan=2000, CA Juan=500"}),Object(p.jsx)("br",{}),Object(p.jsx)(f,{label:"Cash Taken",name:"ctaken",type:"number",placeholder:""}),Object(p.jsx)("br",{}),Object(p.jsx)(f,{label:"CTO",name:"CTO",type:"number",placeholder:""}),Object(p.jsx)("br",{}),Object(p.jsx)(f,{label:"Container Ending",name:"contend",type:"number",placeholder:""}),Object(p.jsx)("br",{}),Object(p.jsx)(f,{label:"Capseal Beg",name:"capbeg",type:"number",placeholder:""}),Object(p.jsx)("br",{}),Object(p.jsx)(f,{label:"Capseal End",name:"capend",type:"number",placeholder:""}),Object(p.jsx)("br",{}),Object(p.jsx)(f,{label:"TDS",name:"tds",type:"number",placeholder:"Pilay TDS"}),Object(p.jsx)("br",{}),Object(p.jsx)(f,{label:"Duty",name:"duty",type:"text",size:"50",placeholder:"Example: Aljohn, Renanty, Christian"}),Object(p.jsx)("br",{}),Object(p.jsx)(O,{name:"reportResult"})]})})]})},g=n(35),C=n.n(g),y=n(58),S=function(e){var t=Object(h.e)(),n=t.values,c=n.textA,r=n.textB,s=t.touched,o=t.setFieldValue,i=Object(h.d)(e),l=Object(u.a)(i,2),j=l[0],d=l[1];return a.a.useEffect((function(){""!==c.trim()&&""!==r.trim()&&s.textA&&s.textB&&o(e.name,"textA: ".concat(c,", textB: ").concat(r))}),[r,c,s.textA,s.textB,o,e.name]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("textarea",Object(b.a)(Object(b.a)({rows:"5",cols:"20"},e),j)),!!d.touched&&!!d.error&&Object(p.jsx)("div",{children:d.error})]})};function k(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(h.c,{initialValues:{textA:"",textB:"",textC:""},onSubmit:function(){var e=Object(y.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",alert(JSON.stringify(t,null,2)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:Object(p.jsxs)("div",{className:"section",children:[Object(p.jsx)("h1",{children:"Dependent Formik Field Example"}),Object(p.jsxs)(h.b,{children:[Object(p.jsxs)("label",{children:["textA",Object(p.jsx)(h.a,{name:"textA"})]}),Object(p.jsxs)("label",{children:["textB",Object(p.jsx)(h.a,{name:"textB"})]}),Object(p.jsxs)("label",{children:["textC",Object(p.jsx)(S,{name:"textC"})]}),Object(p.jsx)("button",{type:"submit",children:"Submit"})]})]})})})}var T=function(){return Object(p.jsx)("div",{children:Object(p.jsx)(k,{})})},I=n(31),E=n.n(I),N=n(42),R="query=",F=function(e,t){return"".concat("https://hn.algolia.com/api/v1").concat("/search","?").concat(R).concat(e,"&").concat("page=").concat(t)},w=function(e){return e.substring(e.lastIndexOf("?")+1,e.lastIndexOf("&")).replace(R,"")},L=function(e,t){switch(t.type){case"STORIES_FETCH_INIT":return Object(b.a)(Object(b.a)({},e),{},{isLoading:!0,isError:!1});case"STORIES_FETCH_SUCCESS":return Object(b.a)(Object(b.a)({},e),{},{isLoading:!1,isError:!1,data:0===t.payload.page?t.payload.list:e.data.concat(t.payload.list),page:t.payload.page});case"STORIES_FETCH_FAILURE":return Object(b.a)(Object(b.a)({},e),{},{isLoading:!1,isError:!0});case"REMOVE_STORY":return Object(b.a)(Object(b.a)({},e),{},{data:e.data.filter((function(e){return t.payload.objectID!==e.objectID}))});default:throw new Error}},A=function(e){var t=e.lastSearches,n=e.onLastSearch;return Object(p.jsx)(p.Fragment,{children:t.map((function(e,t){return Object(p.jsx)("button",{type:"button",onClick:function(){return n(e)},children:e},e+t)}))})},D=function(e){var t=e.searchTerm,n=e.onSearchInput,c=e.onSearchSubmit;return Object(p.jsxs)("form",{onSubmit:c,children:[Object(p.jsx)(_,{id:"search",value:t,isFocused:!0,onInputChange:n,children:Object(p.jsx)("strong",{children:"Search:"})}),Object(p.jsx)("button",{type:"submit",disabled:!t,children:"Submit"})]})},_=function(e){var t=e.id,n=e.value,a=e.type,r=void 0===a?"text":a,s=e.onInputChange,o=e.isFocused,i=e.children,l=c.useRef();return c.useEffect((function(){console.log("focisus ".concat(o,", ref ").concat(l)),o&&l.current&&l.current.focus()}),[o]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("label",{htmlFor:t,children:i}),"\xa0",Object(p.jsx)("input",{ref:l,id:t,type:r,value:n,onChange:s})]})},B={NONE:function(e){return e},TITLE:function(e){return Object(N.sortBy)(e,"title")},AUTHOR:function(e){return Object(N.sortBy)(e,"author")},COMMENT:function(e){return Object(N.sortBy)(e,"num_comments").reverse()},POINT:function(e){return Object(N.sortBy)(e,"points").reverse()}},M=function(e){var t=e.list,n=e.onRemoveItem,a=c.useState({sortKey:"NONE",isReverse:!1}),r=Object(u.a)(a,2),s=r[0],o=r[1],i=function(e){var t=s.sortKey===e&&!s.isReverse;o({sortKey:e,isReverse:t})},l=B[s.sortKey],j=s.isReverse?l(t).reverse():l(t);return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("span",{children:Object(p.jsx)("button",{type:"button",onClick:function(){return i("TITLE")},children:"Title"})}),Object(p.jsx)("span",{children:Object(p.jsx)("button",{type:"button",onClick:function(){return i("AUTHOR")},children:"Author"})}),Object(p.jsx)("span",{children:Object(p.jsx)("button",{type:"button",onClick:function(){return i("COMMENT")},children:"Comments"})}),Object(p.jsx)("span",{children:Object(p.jsx)("button",{type:"button",onClick:function(){return i("POINT")},children:"Points"})}),Object(p.jsx)("span",{children:"Actions"})]}),j.map((function(e){return Object(p.jsx)(H,{item:e,onRemoveItem:n},e.objectID)}))]})},H=function(e){var t=e.item,n=e.onRemoveItem;return Object(p.jsxs)("div",{children:[Object(p.jsx)("span",{children:Object(p.jsx)("a",{href:t.url,children:t.title})}),Object(p.jsx)("span",{children:t.author}),Object(p.jsx)("span",{children:t.num_comments}),Object(p.jsx)("span",{children:t.points}),Object(p.jsx)("span",{children:Object(p.jsx)("button",{type:"button",onClick:function(){return n(t)},children:"Dismiss"})})]})},P=function(){var e=function(e,t){var n=c.useState(localStorage.getItem(e)||t),a=Object(u.a)(n,2),r=a[0],s=a[1];return c.useEffect((function(){localStorage.setItem(e,r)}),[r,e]),[r,s]}("search","React"),t=Object(u.a)(e,2),n=t[0],a=t[1],r=c.useState([F(n,0)]),s=Object(u.a)(r,2),o=s[0],i=s[1],l=c.useReducer(L,{data:[],page:0,isLoading:!1,isError:!1}),j=Object(u.a)(l,2),b=j[0],d=j[1],h=c.useCallback(Object(y.a)(C.a.mark((function e(){var t,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d({type:"STORIES_FETCH_INIT"}),e.prev=1,t=o[o.length-1],e.next=5,E.a.get(t);case 5:n=e.sent,d({type:"STORIES_FETCH_SUCCESS",payload:{list:n.data.hits,page:n.data.page}}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),d({type:"STORIES_FETCH_FAILURE"});case 12:case"end":return e.stop()}}),e,null,[[1,9]])}))),[o]);c.useEffect((function(){h()}),[h]);var O=function(e,t){var n=F(e,t);i(o.concat(n))},m=function(e){return e.reduce((function(e,t,n){var c=w(t);return 0===n?e.concat(c):c===e[e.length-1]?e:e.concat(c)}),[]).slice(-6).slice(0,-1)}(o);return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"My Hacker Stories"}),Object(p.jsx)(D,{searchTerm:n,onSearchInput:function(e){a(e.target.value)},onSearchSubmit:function(e){O(n,0),e.preventDefault()}}),Object(p.jsx)(A,{lastSearches:m,onLastSearch:function(e){a(e),O(e,0)}}),Object(p.jsx)("hr",{}),b.isError&&Object(p.jsx)("p",{children:"Something went wrong ..."}),Object(p.jsx)(M,{list:b.data,onRemoveItem:function(e){d({type:"REMOVE_STORY",payload:e})}}),b.isLoading?Object(p.jsx)("p",{children:"Loading ..."}):Object(p.jsx)("button",{type:"button",onClick:function(){var e=o[o.length-1],t=w(e);O(t,b.page+1)},children:"More"})]})},U=n(54),V=n(259),J=n(251),K=n(252),X=n(253),z=n(254),Y=n(255),q=n(256),G=n(257),Q=n(258),W=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).handleChange=function(e){var t=e.target,n=t.name,a=t.value;"checkbox"===e.target.type&&(a=e.target.checked);var r=Object(b.a)(Object(b.a)({},c.state.activeItem),{},Object(U.a)({},n,a));c.setState({activeItem:r})},c.state={activeItem:c.props.activeItem},c}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.toggle,c=t.onSave;return Object(p.jsxs)(V.a,{isOpen:!0,toggle:n,children:[Object(p.jsx)(J.a,{toggle:n,children:"Todo Item"}),Object(p.jsx)(K.a,{children:Object(p.jsxs)(X.a,{children:[Object(p.jsxs)(z.a,{children:[Object(p.jsx)(Y.a,{for:"todo-title",children:"Title"}),Object(p.jsx)(q.a,{type:"text",id:"todo-title",name:"title",value:this.state.activeItem.title,onChange:this.handleChange,placeholder:"Enter Todo Title"})]}),Object(p.jsxs)(z.a,{children:[Object(p.jsx)(Y.a,{for:"todo-description",children:"Description"}),Object(p.jsx)(q.a,{type:"text",id:"todo-description",name:"description",value:this.state.activeItem.description,onChange:this.handleChange,placeholder:"Enter Todo description"})]}),Object(p.jsx)(z.a,{check:!0,children:Object(p.jsxs)(Y.a,{check:!0,children:[Object(p.jsx)(q.a,{type:"checkbox",name:"completed",checked:this.state.activeItem.completed,onChange:this.handleChange}),"Completed"]})})]})}),Object(p.jsx)(G.a,{children:Object(p.jsx)(Q.a,{color:"success",onClick:function(){return c(e.state.activeItem)},children:"Save"})})]})}}]),n}(c.Component),Z="http://localhost:8000",$=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).getCookie=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),c=0;c<n.length;c++){var a=n[c].trim();if(a.substring(0,e.length+1)===e+"="){t=decodeURIComponent(a.substring(e.length+1));break}}return t},c.refreshList=function(){E.a.get("".concat(Z,"/api/todos/"),{headers:{"X-CSRFToken":c.getCookie("csrftoken")}}).then((function(e){return c.setState({todoList:e.data})})).catch((function(e){return console.log(e)}))},c.displayCompleted=function(e){return e?c.setState({viewCompleted:!0}):c.setState({viewCompleted:!1})},c.renderTabList=function(){return Object(p.jsxs)("div",{className:"my-5 tab-list",children:[Object(p.jsx)("span",{onClick:function(){return c.displayCompleted(!0)},className:c.state.viewCompleted?"active":"",children:"complete"}),Object(p.jsx)("span",{onClick:function(){return c.displayCompleted(!1)},className:c.state.viewCompleted?"":"active",children:"Incomplete"})]})},c.renderItems=function(){var e=c.state.viewCompleted;return c.state.todoList.filter((function(t){return t.completed===e})).map((function(e){return Object(p.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:[Object(p.jsx)("span",{className:"todo-title mr-2 ".concat(c.state.viewCompleted?"completed-todo":""),title:e.description,children:e.title}),Object(p.jsxs)("span",{children:[Object(p.jsxs)("button",{onClick:function(){return c.editItem(e)},className:"btn btn-secondary mr-2",children:[" ","Edit"," "]}),Object(p.jsxs)("button",{onClick:function(){return c.handleDelete(e)},className:"btn btn-danger",children:["Delete"," "]})]})]},e.id)}))},c.toggle=function(){c.setState({modal:!c.state.modal})},c.handleSubmit=function(e){c.toggle(),e.id?E.a.put("".concat(Z,"/api/todos/").concat(e.id,"/"),e,{headers:{"X-CSRFToken":c.getCookie("csrftoken")}}).then((function(e){return c.refreshList()})):E.a.post("".concat(Z,"/api/todos/"),e,{headers:{"X-CSRFToken":c.getCookie("csrftoken")}}).then((function(e){return c.refreshList()}))},c.handleDelete=function(e){E.a.delete("".concat(Z,"/api/todos/").concat(e.id),{headers:{"X-CSRFToken":c.getCookie("csrftoken")}}).then((function(e){return c.refreshList()}))},c.createItem=function(){c.setState({activeItem:{title:"",description:"",completed:!1},modal:!c.state.modal})},c.editItem=function(e){c.setState({activeItem:e,modal:!c.state.modal})},c.state={viewCompleted:!1,activeItem:{title:"",description:"",completed:!1},todoList:[]},c}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.refreshList()}},{key:"render",value:function(){return Object(p.jsxs)("main",{className:"content",children:[Object(p.jsx)("h1",{className:"text-white text-uppercase text-center my-4",children:"Todo app"}),Object(p.jsx)("div",{className:"row ",children:Object(p.jsx)("div",{className:"col-md-6 col-sm-10 mx-auto p-0",children:Object(p.jsxs)("div",{className:"card p-3",children:[Object(p.jsx)("div",{className:"",children:Object(p.jsx)("button",{onClick:this.createItem,className:"btn btn-primary",children:"Add task"})}),this.renderTabList(),Object(p.jsx)("ul",{className:"list-group list-group-flush",children:this.renderItems()})]})})}),this.state.modal?Object(p.jsx)(W,{activeItem:this.state.activeItem,toggle:this.toggle,onSave:this.handleSubmit}):null]})}}]),n}(c.Component),ee=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).onClick=function(){var t=e.props,n=t.label;(0,t.onClick)(n)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.onClick,t=this.props,n=t.activeTab,c=t.label,a="tab-list-item";return n===c&&(a+=" tab-list-active"),Object(p.jsx)("li",{className:a,onClick:e,children:c})}}]),n}(c.Component),te=ee,ne=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).onClickTabItem=function(e){c.setState({activeTab:e})},c.state={activeTab:c.props.children[0].props.label},c}return Object(i.a)(n,[{key:"render",value:function(){var e=this.onClickTabItem,t=this.props.children,n=this.state.activeTab;return Object(p.jsxs)("div",{className:"tabs",children:[Object(p.jsx)("ol",{className:"tab-list",children:t.map((function(t){var c=t.props.label;return Object(p.jsx)(te,{activeTab:n,label:c,onClick:e},c)}))}),Object(p.jsx)("div",{className:"tab-content",children:t.map((function(e){if(e.props.label===n)return e.props.children}))})]})}}]),n}(c.Component);var ce=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Tabs Demo"}),Object(p.jsxs)(ne,{children:[Object(p.jsxs)("div",{label:"Gator",children:["See ya later, ",Object(p.jsx)("em",{children:"Alligator"}),"!"]}),Object(p.jsxs)("div",{label:"Croc",children:["After 'while, ",Object(p.jsx)("em",{children:"Crocodile"}),"!"]}),Object(p.jsxs)("div",{label:"Sarcosuchus",children:["Nothing to see here, this tab is ",Object(p.jsx)("em",{children:"extinct"}),"!"]})]})]})},ae=n(112),re=n(16),se=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(i.a)(n,[{key:"render",value:function(){return Object(p.jsx)(ae.a,{children:Object(p.jsxs)(re.c,{children:[Object(p.jsx)(re.a,{exact:!0,path:"/",children:"Please use another url"}),Object(p.jsx)(re.a,{path:"/talamban",component:v}),Object(p.jsx)(re.a,{path:"/formex",component:T}),Object(p.jsx)(re.a,{path:"/todos",component:$}),Object(p.jsx)(re.a,{path:"/rtr",component:P}),Object(p.jsx)(re.a,{path:"/rtab",component:ce})]})})}}]),n}(c.Component);var oe=function(){return Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(se,{})})})},ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,260)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(p.jsx)(oe,{}),document.getElementById("arsoreact")),ie()}},[[249,1,2]]]);
//# sourceMappingURL=main.8ecd0cc4.chunk.js.map
(this.webpackJsonparsoreact=this.webpackJsonparsoreact||[]).push([[0],{117:function(e,t,c){},119:function(e,t,c){},249:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(32),s=c.n(r),i=(c(117),c(118),c.p,c(119),c(5)),o=c(6),l=c(12),j=c(13),b=c(7),u=c(14),d=c(36),h=c(11),p=c(0),O=function(e){var t=Object(h.e)(),c=t.values,a=c.date,r=c.dealer,s=c.pickup,i=c.small,o=c.container,l=c.CTO,j=c.ctaken,d=c.expenses,O=c.contend,m=c.capbeg,x=c.capend,f=c.tds,v=c.duty,g=(t.touched,t.setFieldValue),C=Object(n.useRef)(null),y=Object(h.d)(e),S=Object(u.a)(y,2),T=S[0],I=S[1];return Object(n.useEffect)((function(){g(e.name,function(){var e=9*r+10*s+150*o+5*i,t=i>0?"\nSmall : ".concat(i,"*5 = ").concat(5*i):"",c=o>0?"\nCont ".concat(o,"x150=").concat(150*o):"",n=O>0?"\nContainer Ending: ".concat(O):"",b=m-x-(r+s+o)>0?"= Short ug ".concat(m-x-(r+s+o),"\n"):"",u="\nCapseal beg: ".concat(m,", Capseal End:").concat(x," ").concat(b),h="\nTDS : ".concat(f),p=0;try{d.split(",").map((function(e){null!==e.match(/=(\d*\.?\d*)/)?p+=parseFloat(e.match(/=(\d*\.?\d*)/)[1])||0:p+=0}))}catch(I){p=0}var g=d.length>0?"\nExpenses: ".concat(d," \nTotal Expenses: ").concat(p||0," "):"",C=j>0?"\nCash taken ".concat(j):"",y=e-p-j,S=l-y>=0?"Over ug ".concat(l-y,"\n"):"Short ug ".concat(l-y,"\n"),T="\nCTO ".concat(l," , CTO Calculated ").concat(y," = ").concat(S);return"Date: ".concat(a,"\nDealer ").concat(r,"x9=").concat(9*r,"\nPickup ").concat(s,"x10=").concat(10*s).concat(t).concat(c).concat(C,"\nTotal Amount : ").concat(e).concat(g).concat(T).concat(n).concat(u).concat(h,"\nDuty: ").concat(v)}())}),[r,s,i,v,o,l,j,d,O,m,x,f,g,e.name]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("label",{children:["Report Result:",Object(p.jsx)("br",{}),Object(p.jsx)("button",{onClick:function(){return C.current.select(),void document.execCommand("copy")},children:"Copy"}),Object(p.jsx)("br",{}),Object(p.jsx)("textarea",Object(b.a)(Object(b.a)({rows:"10",cols:"70",ref:C},e),T))]}),!!I.touched&&!!I.error&&Object(p.jsx)("div",{children:I.error})]})},m=c(17),x=["label"],f=function(e){var t=e.label,c=Object(d.a)(e,x),n=Object(h.d)(c),a=Object(u.a)(n,2),r=a[0],s=a[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("label",{htmlFor:c.id||c.name,children:t}),Object(p.jsx)("input",Object(b.a)(Object(b.a)({className:"text-input"},r),c)),s.touched&&s.error?Object(p.jsx)("div",{className:"error",children:s.error}):null]})},v=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Talamban Report"}),Object(p.jsx)(h.c,{initialValues:{date:(new Date).toISOString().slice(0,10),dealer:"",pickup:"",small:"",container:"",expenses:"",ctaken:"",CTO:"",contend:"",capbeg:"",capend:"",TDS:"",duty:""},validationSchema:m.d({date:m.b(),dealer:m.c(),pickup:m.c(),small:m.c(),container:m.c(),expenses:m.e().max(250,"Must be 250 characters or less"),ctaken:m.c(),CTO:m.c(),contend:m.c(),capbeg:m.c(),capend:m.c(),TDS:m.c(),duty:m.e().max(240,"Must be 240 characters or less")}),onSubmit:function(e,t){var c=t.setSubmitting;setTimeout((function(){c(!1)}),400)},children:Object(p.jsxs)(h.b,{children:[Object(p.jsx)("button",{type:"reset",children:"Erase All"}),Object(p.jsx)("br",{}),Object(p.jsx)(f,{label:"date",name:"date",type:"date"}),Object(p.jsx)("br",{}),Object(p.jsx)(f,{label:"dealer",name:"dealer",type:"number",placeholder:"0"}),Object(p.jsx)("br",{}),Object(p.jsx)(f,{label:"pickup",name:"pickup",type:"number",placeholder:"0"}),Object(p.jsx)("br",{}),Object(p.jsx)(f,{label:"small",name:"small",type:"number",placeholder:"0"}),Object(p.jsx)("br",{}),Object(p.jsx)(f,{label:"container",name:"container",type:"number",placeholder:"0"}),Object(p.jsx)("br",{}),Object(p.jsx)(f,{label:"expenses",name:"expenses",type:"text",size:"90",placeholder:"Example: Load=100, Sweldo Juan=2000, CA Juan=500"}),Object(p.jsx)("br",{}),Object(p.jsx)(f,{label:"Cash Taken",name:"ctaken",type:"number",placeholder:""}),Object(p.jsx)("br",{}),Object(p.jsx)(f,{label:"CTO",name:"CTO",type:"number",placeholder:""}),Object(p.jsx)("br",{}),Object(p.jsx)(f,{label:"Container Ending",name:"contend",type:"number",placeholder:""}),Object(p.jsx)("br",{}),Object(p.jsx)(f,{label:"Capseal Beg",name:"capbeg",type:"number",placeholder:""}),Object(p.jsx)("br",{}),Object(p.jsx)(f,{label:"Capseal End",name:"capend",type:"number",placeholder:""}),Object(p.jsx)("br",{}),Object(p.jsx)(f,{label:"TDS",name:"tds",type:"number",placeholder:"Pilay TDS"}),Object(p.jsx)("br",{}),Object(p.jsx)(f,{label:"Duty",name:"duty",type:"text",size:"50",placeholder:"Example: Aljohn, Renanty, Christian"}),Object(p.jsx)("br",{}),Object(p.jsx)(O,{name:"reportResult"})]})})]})},g=c(35),C=c.n(g),y=c(58),S=function(e){var t=Object(h.e)(),c=t.values,n=c.textA,r=c.textB,s=t.touched,i=t.setFieldValue,o=Object(h.d)(e),l=Object(u.a)(o,2),j=l[0],d=l[1];return a.a.useEffect((function(){""!==n.trim()&&""!==r.trim()&&s.textA&&s.textB&&i(e.name,"textA: ".concat(n,", textB: ").concat(r))}),[r,n,s.textA,s.textB,i,e.name]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("textarea",Object(b.a)(Object(b.a)({rows:"5",cols:"20"},e),j)),!!d.touched&&!!d.error&&Object(p.jsx)("div",{children:d.error})]})};function T(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(h.c,{initialValues:{textA:"",textB:"",textC:""},onSubmit:function(){var e=Object(y.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",alert(JSON.stringify(t,null,2)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:Object(p.jsxs)("div",{className:"section",children:[Object(p.jsx)("h1",{children:"Dependent Formik Field Example"}),Object(p.jsxs)(h.b,{children:[Object(p.jsxs)("label",{children:["textA",Object(p.jsx)(h.a,{name:"textA"})]}),Object(p.jsxs)("label",{children:["textB",Object(p.jsx)(h.a,{name:"textB"})]}),Object(p.jsxs)("label",{children:["textC",Object(p.jsx)(S,{name:"textC"})]}),Object(p.jsx)("button",{type:"submit",children:"Submit"})]})]})})})}var I=function(){return Object(p.jsx)("div",{children:Object(p.jsx)(T,{})})},k=c(31),E=c.n(k),N=c(42),R="query=",w=function(e,t){return"".concat("https://hn.algolia.com/api/v1").concat("/search","?").concat(R).concat(e,"&").concat("page=").concat(t)},F=function(e){return e.substring(e.lastIndexOf("?")+1,e.lastIndexOf("&")).replace(R,"")},L=function(e,t){switch(t.type){case"STORIES_FETCH_INIT":return Object(b.a)(Object(b.a)({},e),{},{isLoading:!0,isError:!1});case"STORIES_FETCH_SUCCESS":return Object(b.a)(Object(b.a)({},e),{},{isLoading:!1,isError:!1,data:0===t.payload.page?t.payload.list:e.data.concat(t.payload.list),page:t.payload.page});case"STORIES_FETCH_FAILURE":return Object(b.a)(Object(b.a)({},e),{},{isLoading:!1,isError:!0});case"REMOVE_STORY":return Object(b.a)(Object(b.a)({},e),{},{data:e.data.filter((function(e){return t.payload.objectID!==e.objectID}))});default:throw new Error}},A=function(e){var t=e.lastSearches,c=e.onLastSearch;return Object(p.jsx)(p.Fragment,{children:t.map((function(e,t){return Object(p.jsx)("button",{type:"button",onClick:function(){return c(e)},children:e},e+t)}))})},D=function(e){var t=e.searchTerm,c=e.onSearchInput,n=e.onSearchSubmit;return Object(p.jsxs)("form",{onSubmit:n,children:[Object(p.jsx)(_,{id:"search",value:t,isFocused:!0,onInputChange:c,children:Object(p.jsx)("strong",{children:"Search:"})}),Object(p.jsx)("button",{type:"submit",disabled:!t,children:"Submit"})]})},_=function(e){var t=e.id,c=e.value,a=e.type,r=void 0===a?"text":a,s=e.onInputChange,i=e.isFocused,o=e.children,l=n.useRef();return n.useEffect((function(){console.log("focisus ".concat(i,", ref ").concat(l)),i&&l.current&&l.current.focus()}),[i]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("label",{htmlFor:t,children:o}),"\xa0",Object(p.jsx)("input",{ref:l,id:t,type:r,value:c,onChange:s})]})},B={NONE:function(e){return e},TITLE:function(e){return Object(N.sortBy)(e,"title")},AUTHOR:function(e){return Object(N.sortBy)(e,"author")},COMMENT:function(e){return Object(N.sortBy)(e,"num_comments").reverse()},POINT:function(e){return Object(N.sortBy)(e,"points").reverse()}},M=function(e){var t=e.list,c=e.onRemoveItem,a=n.useState({sortKey:"NONE",isReverse:!1}),r=Object(u.a)(a,2),s=r[0],i=r[1],o=function(e){var t=s.sortKey===e&&!s.isReverse;i({sortKey:e,isReverse:t})},l=B[s.sortKey],j=s.isReverse?l(t).reverse():l(t);return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("span",{children:Object(p.jsx)("button",{type:"button",onClick:function(){return o("TITLE")},children:"Title"})}),Object(p.jsx)("span",{children:Object(p.jsx)("button",{type:"button",onClick:function(){return o("AUTHOR")},children:"Author"})}),Object(p.jsx)("span",{children:Object(p.jsx)("button",{type:"button",onClick:function(){return o("COMMENT")},children:"Comments"})}),Object(p.jsx)("span",{children:Object(p.jsx)("button",{type:"button",onClick:function(){return o("POINT")},children:"Points"})}),Object(p.jsx)("span",{children:"Actions"})]}),j.map((function(e){return Object(p.jsx)(H,{item:e,onRemoveItem:c},e.objectID)}))]})},H=function(e){var t=e.item,c=e.onRemoveItem;return Object(p.jsxs)("div",{children:[Object(p.jsx)("span",{children:Object(p.jsx)("a",{href:t.url,children:t.title})}),Object(p.jsx)("span",{children:t.author}),Object(p.jsx)("span",{children:t.num_comments}),Object(p.jsx)("span",{children:t.points}),Object(p.jsx)("span",{children:Object(p.jsx)("button",{type:"button",onClick:function(){return c(t)},children:"Dismiss"})})]})},P=function(){var e=function(e,t){var c=n.useState(localStorage.getItem(e)||t),a=Object(u.a)(c,2),r=a[0],s=a[1];return n.useEffect((function(){localStorage.setItem(e,r)}),[r,e]),[r,s]}("search","React"),t=Object(u.a)(e,2),c=t[0],a=t[1],r=n.useState([w(c,0)]),s=Object(u.a)(r,2),i=s[0],o=s[1],l=n.useReducer(L,{data:[],page:0,isLoading:!1,isError:!1}),j=Object(u.a)(l,2),b=j[0],d=j[1],h=n.useCallback(Object(y.a)(C.a.mark((function e(){var t,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d({type:"STORIES_FETCH_INIT"}),e.prev=1,t=i[i.length-1],e.next=5,E.a.get(t);case 5:c=e.sent,d({type:"STORIES_FETCH_SUCCESS",payload:{list:c.data.hits,page:c.data.page}}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),d({type:"STORIES_FETCH_FAILURE"});case 12:case"end":return e.stop()}}),e,null,[[1,9]])}))),[i]);n.useEffect((function(){h()}),[h]);var O=function(e,t){var c=w(e,t);o(i.concat(c))},m=function(e){return e.reduce((function(e,t,c){var n=F(t);return 0===c?e.concat(n):n===e[e.length-1]?e:e.concat(n)}),[]).slice(-6).slice(0,-1)}(i);return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"My Hacker Stories"}),Object(p.jsx)(D,{searchTerm:c,onSearchInput:function(e){a(e.target.value)},onSearchSubmit:function(e){O(c,0),e.preventDefault()}}),Object(p.jsx)(A,{lastSearches:m,onLastSearch:function(e){a(e),O(e,0)}}),Object(p.jsx)("hr",{}),b.isError&&Object(p.jsx)("p",{children:"Something went wrong ..."}),Object(p.jsx)(M,{list:b.data,onRemoveItem:function(e){d({type:"REMOVE_STORY",payload:e})}}),b.isLoading?Object(p.jsx)("p",{children:"Loading ..."}):Object(p.jsx)("button",{type:"button",onClick:function(){var e=i[i.length-1],t=F(e);O(t,b.page+1)},children:"More"})]})},U=c(54),V=c(259),J=c(251),K=c(252),q=c(253),z=c(254),Y=c(255),G=c(256),Q=c(257),W=c(258),X=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(e){var n;return Object(i.a)(this,c),(n=t.call(this,e)).handleChange=function(e){var t=e.target,c=t.name,a=t.value;"checkbox"===e.target.type&&(a=e.target.checked);var r=Object(b.a)(Object(b.a)({},n.state.activeItem),{},Object(U.a)({},c,a));n.setState({activeItem:r})},n.state={activeItem:n.props.activeItem},n}return Object(o.a)(c,[{key:"render",value:function(){var e=this,t=this.props,c=t.toggle,n=t.onSave;return Object(p.jsxs)(V.a,{isOpen:!0,toggle:c,children:[Object(p.jsx)(J.a,{toggle:c,children:"Todo Item"}),Object(p.jsx)(K.a,{children:Object(p.jsxs)(q.a,{children:[Object(p.jsxs)(z.a,{children:[Object(p.jsx)(Y.a,{for:"todo-title",children:"Title"}),Object(p.jsx)(G.a,{type:"text",id:"todo-title",name:"title",value:this.state.activeItem.title,onChange:this.handleChange,placeholder:"Enter Todo Title"})]}),Object(p.jsxs)(z.a,{children:[Object(p.jsx)(Y.a,{for:"todo-description",children:"Description"}),Object(p.jsx)(G.a,{type:"text",id:"todo-description",name:"description",value:this.state.activeItem.description,onChange:this.handleChange,placeholder:"Enter Todo description"})]}),Object(p.jsx)(z.a,{check:!0,children:Object(p.jsxs)(Y.a,{check:!0,children:[Object(p.jsx)(G.a,{type:"checkbox",name:"completed",checked:this.state.activeItem.completed,onChange:this.handleChange}),"Completed"]})})]})}),Object(p.jsx)(Q.a,{children:Object(p.jsx)(W.a,{color:"success",onClick:function(){return n(e.state.activeItem)},children:"Save"})})]})}}]),c}(n.Component),Z="http://localhost:8000",$=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(e){var n;return Object(i.a)(this,c),(n=t.call(this,e)).refreshList=function(){E.a.get("".concat(Z,"/api/todos/")).then((function(e){return n.setState({todoList:e.data})})).catch((function(e){console.log("Err is ".concat(e)),e.includes("Request failed with status code 403")&&(window.location.href="/login/?next=/todos")}))},n.displayCompleted=function(e){return e?n.setState({viewCompleted:!0}):n.setState({viewCompleted:!1})},n.renderTabList=function(){return Object(p.jsxs)("div",{className:"my-5 tab-list",children:[Object(p.jsx)("span",{onClick:function(){return n.displayCompleted(!0)},className:n.state.viewCompleted?"active":"",children:"complete"}),Object(p.jsx)("span",{onClick:function(){return n.displayCompleted(!1)},className:n.state.viewCompleted?"":"active",children:"Incomplete"})]})},n.renderItems=function(){var e=n.state.viewCompleted;return n.state.todoList.filter((function(t){return t.completed===e})).map((function(e){return Object(p.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:[Object(p.jsx)("span",{className:"todo-title mr-2 ".concat(n.state.viewCompleted?"completed-todo":""),title:e.description,children:e.title}),Object(p.jsxs)("span",{children:[Object(p.jsxs)("button",{onClick:function(){return n.editItem(e)},className:"btn btn-secondary mr-2",children:[" ","Edit"," "]}),Object(p.jsxs)("button",{onClick:function(){return n.handleDelete(e)},className:"btn btn-danger",children:["Delete"," "]})]})]},e.id)}))},n.toggle=function(){n.setState({modal:!n.state.modal})},n.handleSubmit=function(e){n.toggle(),e.id?E.a.put("".concat(Z,"/api/todos/").concat(e.id,"/"),e).then((function(e){return n.refreshList()})):E.a.post("".concat(Z,"/api/todos/"),e).then((function(e){return n.refreshList()}))},n.handleDelete=function(e){E.a.delete("".concat(Z,"/api/todos/").concat(e.id)).then((function(e){return n.refreshList()}))},n.createItem=function(){n.setState({activeItem:{title:"",description:"",completed:!1},modal:!n.state.modal})},n.editItem=function(e){n.setState({activeItem:e,modal:!n.state.modal})},n.state={viewCompleted:!1,activeItem:{title:"",description:"",completed:!1},todoList:[]},n}return Object(o.a)(c,[{key:"componentDidMount",value:function(){this.refreshList()}},{key:"render",value:function(){return Object(p.jsxs)("main",{className:"content",children:[Object(p.jsx)("h1",{className:"text-white text-uppercase text-center my-4",children:"Todo app"}),Object(p.jsx)("div",{className:"row ",children:Object(p.jsx)("div",{className:"col-md-6 col-sm-10 mx-auto p-0",children:Object(p.jsxs)("div",{className:"card p-3",children:[Object(p.jsx)("div",{className:"",children:Object(p.jsx)("button",{onClick:this.createItem,className:"btn btn-primary",children:"Add task"})}),this.renderTabList(),Object(p.jsx)("ul",{className:"list-group list-group-flush",children:this.renderItems()})]})})}),this.state.modal?Object(p.jsx)(X,{activeItem:this.state.activeItem,toggle:this.toggle,onSave:this.handleSubmit}):null]})}}]),c}(n.Component),ee=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(i.a)(this,c);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).onClick=function(){var t=e.props,c=t.label;(0,t.onClick)(c)},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this.onClick,t=this.props,c=t.activeTab,n=t.label,a="tab-list-item";return c===n&&(a+=" tab-list-active"),Object(p.jsx)("li",{className:a,onClick:e,children:n})}}]),c}(n.Component),te=ee,ce=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(e){var n;return Object(i.a)(this,c),(n=t.call(this,e)).onClickTabItem=function(e){n.setState({activeTab:e})},n.state={activeTab:n.props.children[0].props.label},n}return Object(o.a)(c,[{key:"render",value:function(){var e=this.onClickTabItem,t=this.props.children,c=this.state.activeTab;return Object(p.jsxs)("div",{className:"tabs",children:[Object(p.jsx)("ol",{className:"tab-list",children:t.map((function(t){var n=t.props.label;return Object(p.jsx)(te,{activeTab:c,label:n,onClick:e},n)}))}),Object(p.jsx)("div",{className:"tab-content",children:t.map((function(e){if(e.props.label===c)return e.props.children}))})]})}}]),c}(n.Component);var ne=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Tabs Demo"}),Object(p.jsxs)(ce,{children:[Object(p.jsxs)("div",{label:"Gator",children:["See ya later, ",Object(p.jsx)("em",{children:"Alligator"}),"!"]}),Object(p.jsxs)("div",{label:"Croc",children:["After 'while, ",Object(p.jsx)("em",{children:"Crocodile"}),"!"]}),Object(p.jsxs)("div",{label:"Sarcosuchus",children:["Nothing to see here, this tab is ",Object(p.jsx)("em",{children:"extinct"}),"!"]})]})]})},ae=c(112),re=c(16),se=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(e){return Object(i.a)(this,c),t.call(this,e)}return Object(o.a)(c,[{key:"render",value:function(){return Object(p.jsx)(ae.a,{children:Object(p.jsxs)(re.c,{children:[Object(p.jsx)(re.a,{exact:!0,path:"/",children:"Please use another url"}),Object(p.jsx)(re.a,{path:"/talamban",component:v}),Object(p.jsx)(re.a,{path:"/formex",component:I}),Object(p.jsx)(re.a,{path:"/todos",component:$}),Object(p.jsx)(re.a,{path:"/rtr",component:P}),Object(p.jsx)(re.a,{path:"/rtab",component:ne})]})})}}]),c}(n.Component);var ie=function(){return Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(se,{})})})},oe=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,260)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(p.jsx)(ie,{}),document.getElementById("arsoreact")),oe()}},[[249,1,2]]]);
//# sourceMappingURL=main.f1992e57.chunk.js.map
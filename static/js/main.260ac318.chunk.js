(this.webpackJsonparsoreact=this.webpackJsonparsoreact||[]).push([[0],{117:function(e,t,n){},119:function(e,t,n){},249:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(32),s=n.n(r),i=(n(117),n(118),n.p,n(119),n(6)),o=n(7),l=n(13),j=n(14),b=n(8),u=n(5),d=n(0),h=n(36),p=n(12),O=function(e){var t=Object(p.e)(),n=t.values,a=n.date,r=n.dealer,s=n.pickup,i=n.small,o=n.container,l=n.CTO,j=n.ctaken,h=n.expenses,O=n.contend,m=n.capbeg,x=n.capend,f=n.tds,v=n.duty,g=(t.touched,t.setFieldValue),C=Object(c.useRef)(null),y=Object(p.d)(e),S=Object(b.a)(y,2),T=S[0],I=S[1];return Object(c.useEffect)((function(){g(e.name,function(){var e=9*r+10*s+150*o+5*i,t=i>0?"\nSmall : ".concat(i,"*5 = ").concat(5*i):"",n=o>0?"\nCont ".concat(o,"x150=").concat(150*o):"",c=O>0?"\nContainer Ending: ".concat(O):"",b=m-x-(r+s+o)>0?"= Short ug ".concat(m-x-(r+s+o),"\n"):"",u="\nCapseal beg: ".concat(m,", Capseal End:").concat(x," ").concat(b),d="\nTDS : ".concat(f),p=0;try{h.split(",").map((function(e){null!==e.match(/=(\d*\.?\d*)/)?p+=parseFloat(e.match(/=(\d*\.?\d*)/)[1])||0:p+=0}))}catch(I){p=0}var g=h.length>0?"\nExpenses: ".concat(h," \nTotal Expenses: ").concat(p||0," "):"",C=j>0?"\nCash taken ".concat(j):"",y=e-p-j,S=l-y>=0?"Over ug ".concat(l-y,"\n"):"Short ug ".concat(l-y,"\n"),T="\nCTO ".concat(l," , CTO Calculated ").concat(y," = ").concat(S);return"Date: ".concat(a,"\nDealer ").concat(r,"x9=").concat(9*r,"\nPickup ").concat(s,"x10=").concat(10*s).concat(t).concat(n).concat(C,"\nTotal Amount : ").concat(e).concat(g).concat(T).concat(c).concat(u).concat(d,"\nDuty: ").concat(v)}())}),[r,s,i,v,o,l,j,h,O,m,x,f,g,e.name]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("label",{children:["Report Result:",Object(d.jsx)("br",{}),Object(d.jsx)("button",{onClick:function(){return C.current.select(),void document.execCommand("copy")},children:"Copy"}),Object(d.jsx)("br",{}),Object(d.jsx)("textarea",Object(u.a)(Object(u.a)({rows:"10",cols:"70",ref:C},e),T))]}),!!I.touched&&!!I.error&&Object(d.jsx)("div",{children:I.error})]})},m=n(17),x=["label"],f=function(e){var t=e.label,n=Object(h.a)(e,x),c=Object(p.d)(n),a=Object(b.a)(c,2),r=a[0],s=a[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("label",{htmlFor:n.id||n.name,children:t}),Object(d.jsx)("input",Object(u.a)(Object(u.a)({className:"text-input"},r),n)),s.touched&&s.error?Object(d.jsx)("div",{className:"error",children:s.error}):null]})},v=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"Talamban Report"}),Object(d.jsx)(p.c,{initialValues:{date:(new Date).toISOString().slice(0,10),dealer:"",pickup:"",small:"",container:"",expenses:"",ctaken:"",CTO:"",contend:"",capbeg:"",capend:"",TDS:"",duty:""},validationSchema:m.d({date:m.b(),dealer:m.c(),pickup:m.c(),small:m.c(),container:m.c(),expenses:m.e().max(250,"Must be 250 characters or less"),ctaken:m.c(),CTO:m.c(),contend:m.c(),capbeg:m.c(),capend:m.c(),TDS:m.c(),duty:m.e().max(240,"Must be 240 characters or less")}),onSubmit:function(e,t){var n=t.setSubmitting;setTimeout((function(){n(!1)}),400)},children:Object(d.jsxs)(p.b,{children:[Object(d.jsx)("button",{type:"reset",children:"Erase All"}),Object(d.jsx)("br",{}),Object(d.jsx)(f,{label:"date",name:"date",type:"date"}),Object(d.jsx)("br",{}),Object(d.jsx)(f,{label:"dealer",name:"dealer",type:"number",placeholder:"0"}),Object(d.jsx)("br",{}),Object(d.jsx)(f,{label:"pickup",name:"pickup",type:"number",placeholder:"0"}),Object(d.jsx)("br",{}),Object(d.jsx)(f,{label:"small",name:"small",type:"number",placeholder:"0"}),Object(d.jsx)("br",{}),Object(d.jsx)(f,{label:"container",name:"container",type:"number",placeholder:"0"}),Object(d.jsx)("br",{}),Object(d.jsx)(f,{label:"expenses",name:"expenses",type:"text",size:"90",placeholder:"Example: Load=100, Sweldo Juan=2000, CA Juan=500"}),Object(d.jsx)("br",{}),Object(d.jsx)(f,{label:"Cash Taken",name:"ctaken",type:"number",placeholder:""}),Object(d.jsx)("br",{}),Object(d.jsx)(f,{label:"CTO",name:"CTO",type:"number",placeholder:""}),Object(d.jsx)("br",{}),Object(d.jsx)(f,{label:"Container Ending",name:"contend",type:"number",placeholder:""}),Object(d.jsx)("br",{}),Object(d.jsx)(f,{label:"Capseal Beg",name:"capbeg",type:"number",placeholder:""}),Object(d.jsx)("br",{}),Object(d.jsx)(f,{label:"Capseal End",name:"capend",type:"number",placeholder:""}),Object(d.jsx)("br",{}),Object(d.jsx)(f,{label:"TDS",name:"tds",type:"number",placeholder:"Pilay TDS"}),Object(d.jsx)("br",{}),Object(d.jsx)(f,{label:"Duty",name:"duty",type:"text",size:"50",placeholder:"Example: Aljohn, Renanty, Christian"}),Object(d.jsx)("br",{}),Object(d.jsx)(O,{name:"reportResult"})]})})]})},g=n(35),C=n.n(g),y=n(58),S=function(e){var t=Object(p.e)(),n=t.values,c=n.textA,r=n.textB,s=t.touched,i=t.setFieldValue,o=Object(p.d)(e),l=Object(b.a)(o,2),j=l[0],h=l[1];return a.a.useEffect((function(){""!==c.trim()&&""!==r.trim()&&s.textA&&s.textB&&i(e.name,"textA: ".concat(c,", textB: ").concat(r))}),[r,c,s.textA,s.textB,i,e.name]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("textarea",Object(u.a)(Object(u.a)({rows:"5",cols:"20"},e),j)),!!h.touched&&!!h.error&&Object(d.jsx)("div",{children:h.error})]})};function T(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(p.c,{initialValues:{textA:"",textB:"",textC:""},onSubmit:function(){var e=Object(y.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",alert(JSON.stringify(t,null,2)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:Object(d.jsxs)("div",{className:"section",children:[Object(d.jsx)("h1",{children:"Dependent Formik Field Example"}),Object(d.jsxs)(p.b,{children:[Object(d.jsxs)("label",{children:["textA",Object(d.jsx)(p.a,{name:"textA"})]}),Object(d.jsxs)("label",{children:["textB",Object(d.jsx)(p.a,{name:"textB"})]}),Object(d.jsxs)("label",{children:["textC",Object(d.jsx)(S,{name:"textC"})]}),Object(d.jsx)("button",{type:"submit",children:"Submit"})]})]})})})}var I=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(T,{})})},k=n(31),E=n.n(k),N=n(42),R="query=",w=function(e,t){return"".concat("https://hn.algolia.com/api/v1").concat("/search","?").concat(R).concat(e,"&").concat("page=").concat(t)},F=function(e){return e.substring(e.lastIndexOf("?")+1,e.lastIndexOf("&")).replace(R,"")},L=function(e,t){switch(t.type){case"STORIES_FETCH_INIT":return Object(u.a)(Object(u.a)({},e),{},{isLoading:!0,isError:!1});case"STORIES_FETCH_SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{isLoading:!1,isError:!1,data:0===t.payload.page?t.payload.list:e.data.concat(t.payload.list),page:t.payload.page});case"STORIES_FETCH_FAILURE":return Object(u.a)(Object(u.a)({},e),{},{isLoading:!1,isError:!0});case"REMOVE_STORY":return Object(u.a)(Object(u.a)({},e),{},{data:e.data.filter((function(e){return t.payload.objectID!==e.objectID}))});default:throw new Error}},A=function(e){var t=e.lastSearches,n=e.onLastSearch;return Object(d.jsx)(d.Fragment,{children:t.map((function(e,t){return Object(d.jsx)("button",{type:"button",onClick:function(){return n(e)},children:e},e+t)}))})},D=function(e){var t=e.searchTerm,n=e.onSearchInput,c=e.onSearchSubmit;return Object(d.jsxs)("form",{onSubmit:c,children:[Object(d.jsx)(_,{id:"search",value:t,isFocused:!0,onInputChange:n,children:Object(d.jsx)("strong",{children:"Search:"})}),Object(d.jsx)("button",{type:"submit",disabled:!t,children:"Submit"})]})},_=function(e){var t=e.id,n=e.value,a=e.type,r=void 0===a?"text":a,s=e.onInputChange,i=e.isFocused,o=e.children,l=c.useRef();return c.useEffect((function(){console.log("focisus ".concat(i,", ref ").concat(l)),i&&l.current&&l.current.focus()}),[i]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("label",{htmlFor:t,children:o}),"\xa0",Object(d.jsx)("input",{ref:l,id:t,type:r,value:n,onChange:s})]})},B={NONE:function(e){return e},TITLE:function(e){return Object(N.sortBy)(e,"title")},AUTHOR:function(e){return Object(N.sortBy)(e,"author")},COMMENT:function(e){return Object(N.sortBy)(e,"num_comments").reverse()},POINT:function(e){return Object(N.sortBy)(e,"points").reverse()}},M=function(e){var t=e.list,n=e.onRemoveItem,a=c.useState({sortKey:"NONE",isReverse:!1}),r=Object(b.a)(a,2),s=r[0],i=r[1],o=function(e){var t=s.sortKey===e&&!s.isReverse;i({sortKey:e,isReverse:t})},l=B[s.sortKey],j=s.isReverse?l(t).reverse():l(t);return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:Object(d.jsx)("button",{type:"button",onClick:function(){return o("TITLE")},children:"Title"})}),Object(d.jsx)("span",{children:Object(d.jsx)("button",{type:"button",onClick:function(){return o("AUTHOR")},children:"Author"})}),Object(d.jsx)("span",{children:Object(d.jsx)("button",{type:"button",onClick:function(){return o("COMMENT")},children:"Comments"})}),Object(d.jsx)("span",{children:Object(d.jsx)("button",{type:"button",onClick:function(){return o("POINT")},children:"Points"})}),Object(d.jsx)("span",{children:"Actions"})]}),j.map((function(e){return Object(d.jsx)(H,{item:e,onRemoveItem:n},e.objectID)}))]})},H=function(e){var t=e.item,n=e.onRemoveItem;return Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{children:Object(d.jsx)("a",{href:t.url,children:t.title})}),Object(d.jsx)("span",{children:t.author}),Object(d.jsx)("span",{children:t.num_comments}),Object(d.jsx)("span",{children:t.points}),Object(d.jsx)("span",{children:Object(d.jsx)("button",{type:"button",onClick:function(){return n(t)},children:"Dismiss"})})]})},P=function(){var e=function(e,t){var n=c.useState(localStorage.getItem(e)||t),a=Object(b.a)(n,2),r=a[0],s=a[1];return c.useEffect((function(){localStorage.setItem(e,r)}),[r,e]),[r,s]}("search","React"),t=Object(b.a)(e,2),n=t[0],a=t[1],r=c.useState([w(n,0)]),s=Object(b.a)(r,2),i=s[0],o=s[1],l=c.useReducer(L,{data:[],page:0,isLoading:!1,isError:!1}),j=Object(b.a)(l,2),u=j[0],h=j[1],p=c.useCallback(Object(y.a)(C.a.mark((function e(){var t,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h({type:"STORIES_FETCH_INIT"}),e.prev=1,t=i[i.length-1],e.next=5,E.a.get(t);case 5:n=e.sent,h({type:"STORIES_FETCH_SUCCESS",payload:{list:n.data.hits,page:n.data.page}}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),h({type:"STORIES_FETCH_FAILURE"});case 12:case"end":return e.stop()}}),e,null,[[1,9]])}))),[i]);c.useEffect((function(){p()}),[p]);var O=function(e,t){var n=w(e,t);o(i.concat(n))},m=function(e){return e.reduce((function(e,t,n){var c=F(t);return 0===n?e.concat(c):c===e[e.length-1]?e:e.concat(c)}),[]).slice(-6).slice(0,-1)}(i);return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"My Hacker Stories"}),Object(d.jsx)(D,{searchTerm:n,onSearchInput:function(e){a(e.target.value)},onSearchSubmit:function(e){O(n,0),e.preventDefault()}}),Object(d.jsx)(A,{lastSearches:m,onLastSearch:function(e){a(e),O(e,0)}}),Object(d.jsx)("hr",{}),u.isError&&Object(d.jsx)("p",{children:"Something went wrong ..."}),Object(d.jsx)(M,{list:u.data,onRemoveItem:function(e){h({type:"REMOVE_STORY",payload:e})}}),u.isLoading?Object(d.jsx)("p",{children:"Loading ..."}):Object(d.jsx)("button",{type:"button",onClick:function(){var e=i[i.length-1],t=F(e);O(t,u.page+1)},children:"More"})]})},U=n(54),V=n(259),J=n(251),K=n(252),z=n(253),Y=n(254),q=n(255),G=n(256),Q=n(257),W=n(258),X=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).handleChange=function(e){var t=e.target,n=t.name,a=t.value;"checkbox"===e.target.type&&(a=e.target.checked);var r=Object(u.a)(Object(u.a)({},c.state.activeItem),{},Object(U.a)({},n,a));c.setState({activeItem:r})},c.state={activeItem:c.props.activeItem},c}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.toggle,c=t.onSave;return Object(d.jsxs)(V.a,{isOpen:!0,toggle:n,children:[Object(d.jsx)(J.a,{toggle:n,children:"Todo Item"}),Object(d.jsx)(K.a,{children:Object(d.jsxs)(z.a,{children:[Object(d.jsxs)(Y.a,{children:[Object(d.jsx)(q.a,{for:"todo-title",children:"Title"}),Object(d.jsx)(G.a,{type:"text",id:"todo-title",name:"title",value:this.state.activeItem.title,onChange:this.handleChange,placeholder:"Enter Todo Title"})]}),Object(d.jsxs)(Y.a,{children:[Object(d.jsx)(q.a,{for:"todo-description",children:"Description"}),Object(d.jsx)(G.a,{type:"text",id:"todo-description",name:"description",value:this.state.activeItem.description,onChange:this.handleChange,placeholder:"Enter Todo description"})]}),Object(d.jsx)(Y.a,{check:!0,children:Object(d.jsxs)(q.a,{check:!0,children:[Object(d.jsx)(G.a,{type:"checkbox",name:"completed",checked:this.state.activeItem.completed,onChange:this.handleChange}),"Completed"]})})]})}),Object(d.jsx)(Q.a,{children:Object(d.jsx)(W.a,{color:"success",onClick:function(){return c(e.state.activeItem)},children:"Save"})})]})}}]),n}(c.Component),Z="http://localhost:8000",$=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).refreshList=function(){E.a.get("".concat(Z,"/api/todos/")).then((function(e){return c.setState({todoList:e.data})})).catch((function(e){console.log(e),window.location.href="/login/?next=/todos/"}))},c.displayCompleted=function(e){return e?c.setState({viewCompleted:!0}):c.setState({viewCompleted:!1})},c.renderTabList=function(){return Object(d.jsxs)("div",{className:"my-5 tab-list",children:[Object(d.jsx)("span",{onClick:function(){return c.displayCompleted(!0)},className:c.state.viewCompleted?"active":"",children:"complete"}),Object(d.jsx)("span",{onClick:function(){return c.displayCompleted(!1)},className:c.state.viewCompleted?"":"active",children:"Incomplete"})]})},c.renderItems=function(){var e=c.state.viewCompleted;return c.state.todoList.filter((function(t){return t.completed===e})).map((function(e){return Object(d.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:[Object(d.jsx)("span",{className:"todo-title mr-2 ".concat(c.state.viewCompleted?"completed-todo":""),title:e.description,children:e.title}),Object(d.jsxs)("span",{children:[Object(d.jsxs)("button",{onClick:function(){return c.editItem(e)},className:"btn btn-secondary mr-2",children:[" ","Edit"," "]}),Object(d.jsxs)("button",{onClick:function(){return c.handleDelete(e)},className:"btn btn-danger",children:["Delete"," "]})]})]},e.id)}))},c.toggle=function(){c.setState({modal:!c.state.modal})},c.handleSubmit=function(e){c.toggle(),e.id?E.a.put("".concat(Z,"/api/todos/").concat(e.id,"/"),e).then((function(e){return c.refreshList()})):E.a.post("".concat(Z,"/api/todos/"),e).then((function(e){return c.refreshList()}))},c.handleDelete=function(e){E.a.delete("".concat(Z,"/api/todos/").concat(e.id)).then((function(e){return c.refreshList()}))},c.createItem=function(){c.setState({activeItem:{title:"",description:"",completed:!1},modal:!c.state.modal})},c.editItem=function(e){c.setState({activeItem:e,modal:!c.state.modal})},c.state={viewCompleted:!1,activeItem:{title:"",description:"",completed:!1},todoList:[]},c}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.refreshList()}},{key:"render",value:function(){return Object(d.jsxs)("main",{className:"content",children:[Object(d.jsx)("h1",{className:"text-white text-uppercase text-center my-4",children:"Todo app"}),Object(d.jsx)("div",{className:"row ",children:Object(d.jsx)("div",{className:"col-md-6 col-sm-10 mx-auto p-0",children:Object(d.jsxs)("div",{className:"card p-3",children:[Object(d.jsx)("div",{className:"",children:Object(d.jsx)("button",{onClick:this.createItem,className:"btn btn-primary",children:"Add task"})}),this.renderTabList(),Object(d.jsx)("ul",{className:"list-group list-group-flush",children:this.renderItems()})]})})}),this.state.modal?Object(d.jsx)(X,{activeItem:this.state.activeItem,toggle:this.toggle,onSave:this.handleSubmit}):null]})}}]),n}(c.Component),ee=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).onClick=function(){var t=e.props,n=t.label;(0,t.onClick)(n)},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.onClick,t=this.props,n=t.activeTab,c=t.label,a="tab-list-item";return n===c&&(a+=" tab-list-active"),Object(d.jsx)("li",{className:a,onClick:e,children:c})}}]),n}(c.Component),te=ee,ne=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(i.a)(this,n),(c=t.call(this,e)).onClickTabItem=function(e){c.setState({activeTab:e})},c.state={activeTab:c.props.children[0].props.label},c}return Object(o.a)(n,[{key:"render",value:function(){var e=this.onClickTabItem,t=this.props.children,n=this.state.activeTab;return Object(d.jsxs)("div",{className:"tabs",children:[Object(d.jsx)("ol",{className:"tab-list",children:t.map((function(t){var c=t.props.label;return Object(d.jsx)(te,{activeTab:n,label:c,onClick:e},c)}))}),Object(d.jsx)("div",{className:"tab-content",children:t.map((function(e){if(e.props.label===n)return e.props.children}))})]})}}]),n}(c.Component);var ce=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Tabs Demo"}),Object(d.jsxs)(ne,{children:[Object(d.jsxs)("div",{label:"Gator",children:["See ya later, ",Object(d.jsx)("em",{children:"Alligator"}),"!"]}),Object(d.jsxs)("div",{label:"Croc",children:["After 'while, ",Object(d.jsx)("em",{children:"Crocodile"}),"!"]}),Object(d.jsxs)("div",{label:"Sarcosuchus",children:["Nothing to see here, this tab is ",Object(d.jsx)("em",{children:"extinct"}),"!"]})]})]})},ae=n(112),re=n(16),se=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){return Object(i.a)(this,n),t.call(this,e)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsx)(ae.a,{children:Object(d.jsxs)(re.c,{children:[Object(d.jsx)(re.a,{exact:!0,path:"/",children:Object(d.jsx)("p",{children:"This is the home page"})}),Object(d.jsx)(re.a,{path:"/talamban",component:v}),Object(d.jsx)(re.a,{path:"/formex",component:I}),Object(d.jsx)(re.a,{path:"/todos",component:$}),Object(d.jsx)(re.a,{path:"/rtr",component:P}),Object(d.jsx)(re.a,{path:"/tabs",Component:ce})]})})}}]),n}(c.Component);var ie=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(se,{})})},oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,260)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(ie,{}),document.getElementById("arsoreact")),oe()}},[[249,1,2]]]);
//# sourceMappingURL=main.260ac318.chunk.js.map
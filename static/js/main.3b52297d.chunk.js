(this.webpackJsonparsoreact=this.webpackJsonparsoreact||[]).push([[0],{117:function(e,t,n){},119:function(e,t,n){},248:function(e,t,n){},250:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(34),l=n.n(r),s=(n(117),n(118),n.p,n(119),n(6)),o=n(7),i=n(13),u=n(14),d=n(3),j=n(8),b=n(38),p=n(12),h=n(0),O=function(e){var t=Object(p.e)(),n=t.values,c=n.date,r=n.dealer,l=n.pickup,s=n.small,o=n.container,i=n.CTO,u=n.ctaken,b=n.expenses,O=n.contend,m=n.capbeg,x=n.capend,v=n.tds,f=n.duty,g=(t.touched,t.setFieldValue),y=Object(a.useRef)(null),C=Object(p.d)(e),k=Object(j.a)(C,2),S=k[0],T=k[1];return Object(a.useEffect)((function(){g(e.name,function(){var e=9*r+10*l+150*o+5*s,t=s>0?"\nSmall : ".concat(s,"*5 = ").concat(5*s):"",n=o>0?"\nCont ".concat(o,"x150=").concat(150*o):"",a=O>0?"\nContainer Ending: ".concat(O):"",d=m-x-(r+l+o)>0?"= Short ug ".concat(m-x-(r+l+o),"\n"):"",j="\nCapseal beg: ".concat(m,", Capseal End:").concat(x," ").concat(d),p="\nTDS : ".concat(v),h=0;try{b.split(",").map((function(e){null!==e.match(/=(\d*\.?\d*)/)?h+=parseFloat(e.match(/=(\d*\.?\d*)/)[1])||0:h+=0}))}catch(T){h=0}var g=b.length>0?"\nExpenses: ".concat(b," \nTotal Expenses: ").concat(h||0," "):"",y=u>0?"\nCash taken ".concat(u):"",C=e-h-u,k=i-C>=0?"Over ug ".concat(i-C,"\n"):"Short ug ".concat(i-C,"\n"),S="\nCTO ".concat(i," , CTO Calculated ").concat(C," = ").concat(k);return"Date: ".concat(c,"\nDealer ").concat(r,"x9=").concat(9*r,"\nPickup ").concat(l,"x10=").concat(10*l).concat(t).concat(n).concat(y,"\nTotal Amount : ").concat(e).concat(g).concat(S).concat(a).concat(j).concat(p,"\nDuty: ").concat(f)}())}),[r,l,s,f,o,i,u,b,O,m,x,v,g,e.name]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("label",{children:["Report Result:",Object(h.jsx)("br",{}),Object(h.jsx)("button",{onClick:function(){return y.current.select(),void document.execCommand("copy")},children:"Copy"}),Object(h.jsx)("br",{}),Object(h.jsx)("textarea",Object(d.a)(Object(d.a)({rows:"10",cols:"70",ref:y},e),S))]}),!!T.touched&&!!T.error&&Object(h.jsx)("div",{children:T.error})]})},m=n(17),x=["label"],v=function(e){var t=e.label,n=Object(b.a)(e,x),a=Object(p.d)(n),c=Object(j.a)(a,2),r=c[0],l=c[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("label",{htmlFor:n.id||n.name,children:t}),Object(h.jsx)("input",Object(d.a)(Object(d.a)({className:"text-input"},r),n)),l.touched&&l.error?Object(h.jsx)("div",{className:"error",children:l.error}):null]})},f=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Talamban Report"}),Object(h.jsx)(p.c,{initialValues:{date:(new Date).toISOString().slice(0,10),dealer:"",pickup:"",small:"",container:"",expenses:"",ctaken:"",CTO:"",contend:"",capbeg:"",capend:"",TDS:"",duty:""},validationSchema:m.d({date:m.b(),dealer:m.c(),pickup:m.c(),small:m.c(),container:m.c(),expenses:m.e().max(250,"Must be 250 characters or less"),ctaken:m.c(),CTO:m.c(),contend:m.c(),capbeg:m.c(),capend:m.c(),TDS:m.c(),duty:m.e().max(240,"Must be 240 characters or less")}),onSubmit:function(e,t){var n=t.setSubmitting;setTimeout((function(){n(!1)}),400)},children:Object(h.jsxs)(p.b,{children:[Object(h.jsx)("button",{type:"reset",children:"Erase All"}),Object(h.jsx)("br",{}),Object(h.jsx)(v,{label:"date",name:"date",type:"date"}),Object(h.jsx)("br",{}),Object(h.jsx)(v,{label:"dealer",name:"dealer",type:"number",placeholder:"0"}),Object(h.jsx)("br",{}),Object(h.jsx)(v,{label:"pickup",name:"pickup",type:"number",placeholder:"0"}),Object(h.jsx)("br",{}),Object(h.jsx)(v,{label:"small",name:"small",type:"number",placeholder:"0"}),Object(h.jsx)("br",{}),Object(h.jsx)(v,{label:"container",name:"container",type:"number",placeholder:"0"}),Object(h.jsx)("br",{}),Object(h.jsx)(v,{label:"expenses",name:"expenses",type:"text",size:"90",placeholder:"Example: Load=100, Sweldo Juan=2000, CA Juan=500"}),Object(h.jsx)("br",{}),Object(h.jsx)(v,{label:"Cash Taken",name:"ctaken",type:"number",placeholder:""}),Object(h.jsx)("br",{}),Object(h.jsx)(v,{label:"CTO",name:"CTO",type:"number",placeholder:""}),Object(h.jsx)("br",{}),Object(h.jsx)(v,{label:"Container Ending",name:"contend",type:"number",placeholder:""}),Object(h.jsx)("br",{}),Object(h.jsx)(v,{label:"Capseal Beg",name:"capbeg",type:"number",placeholder:""}),Object(h.jsx)("br",{}),Object(h.jsx)(v,{label:"Capseal End",name:"capend",type:"number",placeholder:""}),Object(h.jsx)("br",{}),Object(h.jsx)(v,{label:"TDS",name:"tds",type:"number",placeholder:"Pilay TDS"}),Object(h.jsx)("br",{}),Object(h.jsx)(v,{label:"Duty",name:"duty",type:"text",size:"50",placeholder:"Example: Aljohn, Renanty, Christian"}),Object(h.jsx)("br",{}),Object(h.jsx)(O,{name:"reportResult"})]})})]})},g=n(20),y=n.n(g),C=n(27),k=function(e){var t=Object(p.e)(),n=t.values,a=n.textA,r=n.textB,l=t.touched,s=t.setFieldValue,o=Object(p.d)(e),i=Object(j.a)(o,2),u=i[0],b=i[1];return c.a.useEffect((function(){""!==a.trim()&&""!==r.trim()&&l.textA&&l.textB&&s(e.name,"textA: ".concat(a,", textB: ").concat(r))}),[r,a,l.textA,l.textB,s,e.name]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("textarea",Object(d.a)(Object(d.a)({rows:"5",cols:"20"},e),u)),!!b.touched&&!!b.error&&Object(h.jsx)("div",{children:b.error})]})};function S(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(p.c,{initialValues:{textA:"",textB:"",textC:""},onSubmit:function(){var e=Object(C.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",alert(JSON.stringify(t,null,2)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:Object(h.jsxs)("div",{className:"section",children:[Object(h.jsx)("h1",{children:"Dependent Formik Field Example"}),Object(h.jsxs)(p.b,{children:[Object(h.jsxs)("label",{children:["textA",Object(h.jsx)(p.a,{name:"textA"})]}),Object(h.jsxs)("label",{children:["textB",Object(h.jsx)(p.a,{name:"textB"})]}),Object(h.jsxs)("label",{children:["textC",Object(h.jsx)(k,{name:"textC"})]}),Object(h.jsx)("button",{type:"submit",children:"Submit"})]})]})})})}var T=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(S,{})})},I=n(21),w=n.n(I),E=n(44),R="query=",B=function(e,t){return"".concat("https://hn.algolia.com/api/v1").concat("/search","?").concat(R).concat(e,"&").concat("page=").concat(t)},L=function(e){return e.substring(e.lastIndexOf("?")+1,e.lastIndexOf("&")).replace(R,"")},N=function(e,t){switch(t.type){case"STORIES_FETCH_INIT":return Object(d.a)(Object(d.a)({},e),{},{isLoading:!0,isError:!1});case"STORIES_FETCH_SUCCESS":return Object(d.a)(Object(d.a)({},e),{},{isLoading:!1,isError:!1,data:0===t.payload.page?t.payload.list:e.data.concat(t.payload.list),page:t.payload.page});case"STORIES_FETCH_FAILURE":return Object(d.a)(Object(d.a)({},e),{},{isLoading:!1,isError:!0});case"REMOVE_STORY":return Object(d.a)(Object(d.a)({},e),{},{data:e.data.filter((function(e){return t.payload.objectID!==e.objectID}))});default:throw new Error}},F=function(e){var t=e.lastSearches,n=e.onLastSearch;return Object(h.jsx)(h.Fragment,{children:t.map((function(e,t){return Object(h.jsx)("button",{type:"button",onClick:function(){return n(e)},children:e},e+t)}))})},M=function(e){var t=e.searchTerm,n=e.onSearchInput,a=e.onSearchSubmit;return Object(h.jsxs)("form",{onSubmit:a,children:[Object(h.jsx)(D,{id:"search",value:t,isFocused:!0,onInputChange:n,children:Object(h.jsx)("strong",{children:"Search:"})}),Object(h.jsx)("button",{type:"submit",disabled:!t,children:"Submit"})]})},D=function(e){var t=e.id,n=e.value,c=e.type,r=void 0===c?"text":c,l=e.onInputChange,s=e.isFocused,o=e.children,i=a.useRef();return a.useEffect((function(){console.log("focisus ".concat(s,", ref ").concat(i)),s&&i.current&&i.current.focus()}),[s]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("label",{htmlFor:t,children:o}),"\xa0",Object(h.jsx)("input",{ref:i,id:t,type:r,value:n,onChange:l})]})},A={NONE:function(e){return e},TITLE:function(e){return Object(E.sortBy)(e,"title")},AUTHOR:function(e){return Object(E.sortBy)(e,"author")},COMMENT:function(e){return Object(E.sortBy)(e,"num_comments").reverse()},POINT:function(e){return Object(E.sortBy)(e,"points").reverse()}},_=function(e){var t=e.list,n=e.onRemoveItem,c=a.useState({sortKey:"NONE",isReverse:!1}),r=Object(j.a)(c,2),l=r[0],s=r[1],o=function(e){var t=l.sortKey===e&&!l.isReverse;s({sortKey:e,isReverse:t})},i=A[l.sortKey],u=l.isReverse?i(t).reverse():i(t);return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:Object(h.jsx)("button",{type:"button",onClick:function(){return o("TITLE")},children:"Title"})}),Object(h.jsx)("span",{children:Object(h.jsx)("button",{type:"button",onClick:function(){return o("AUTHOR")},children:"Author"})}),Object(h.jsx)("span",{children:Object(h.jsx)("button",{type:"button",onClick:function(){return o("COMMENT")},children:"Comments"})}),Object(h.jsx)("span",{children:Object(h.jsx)("button",{type:"button",onClick:function(){return o("POINT")},children:"Points"})}),Object(h.jsx)("span",{children:"Actions"})]}),u.map((function(e){return Object(h.jsx)(q,{item:e,onRemoveItem:n},e.objectID)}))]})},q=function(e){var t=e.item,n=e.onRemoveItem;return Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:Object(h.jsx)("a",{href:t.url,children:t.title})}),Object(h.jsx)("span",{children:t.author}),Object(h.jsx)("span",{children:t.num_comments}),Object(h.jsx)("span",{children:t.points}),Object(h.jsx)("span",{children:Object(h.jsx)("button",{type:"button",onClick:function(){return n(t)},children:"Dismiss"})})]})},P=function(){var e=function(e,t){var n=a.useState(localStorage.getItem(e)||t),c=Object(j.a)(n,2),r=c[0],l=c[1];return a.useEffect((function(){localStorage.setItem(e,r)}),[r,e]),[r,l]}("search","React"),t=Object(j.a)(e,2),n=t[0],c=t[1],r=a.useState([B(n,0)]),l=Object(j.a)(r,2),s=l[0],o=l[1],i=a.useReducer(N,{data:[],page:0,isLoading:!1,isError:!1}),u=Object(j.a)(i,2),d=u[0],b=u[1],p=a.useCallback(Object(C.a)(y.a.mark((function e(){var t,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b({type:"STORIES_FETCH_INIT"}),e.prev=1,t=s[s.length-1],e.next=5,w.a.get(t);case 5:n=e.sent,b({type:"STORIES_FETCH_SUCCESS",payload:{list:n.data.hits,page:n.data.page}}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),b({type:"STORIES_FETCH_FAILURE"});case 12:case"end":return e.stop()}}),e,null,[[1,9]])}))),[s]);a.useEffect((function(){p()}),[p]);var O=function(e,t){var n=B(e,t);o(s.concat(n))},m=function(e){return e.reduce((function(e,t,n){var a=L(t);return 0===n?e.concat(a):a===e[e.length-1]?e:e.concat(a)}),[]).slice(-6).slice(0,-1)}(s);return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"My Hacker Stories"}),Object(h.jsx)(M,{searchTerm:n,onSearchInput:function(e){c(e.target.value)},onSearchSubmit:function(e){O(n,0),e.preventDefault()}}),Object(h.jsx)(F,{lastSearches:m,onLastSearch:function(e){c(e),O(e,0)}}),Object(h.jsx)("hr",{}),d.isError&&Object(h.jsx)("p",{children:"Something went wrong ..."}),Object(h.jsx)(_,{list:d.data,onRemoveItem:function(e){b({type:"REMOVE_STORY",payload:e})}}),d.isLoading?Object(h.jsx)("p",{children:"Loading ..."}):Object(h.jsx)("button",{type:"button",onClick:function(){var e=s[s.length-1],t=L(e);O(t,d.page+1)},children:"More"})]})},H=n(36),V=n(260),U=n(252),z=n(253),K=n(254),J=n(255),X=n(256),G=n(257),Y=n(258),Q=n(259),W=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=e.target,n=t.name,c=t.value;"checkbox"===e.target.type&&(c=e.target.checked);var r=Object(d.a)(Object(d.a)({},a.state.activeItem),{},Object(H.a)({},n,c));a.setState({activeItem:r})},a.state={activeItem:a.props.activeItem},a}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.toggle,a=t.onSave;return Object(h.jsxs)(V.a,{isOpen:!0,toggle:n,children:[Object(h.jsx)(U.a,{toggle:n,children:"Todo Item"}),Object(h.jsx)(z.a,{children:Object(h.jsxs)(K.a,{children:[Object(h.jsxs)(J.a,{children:[Object(h.jsx)(X.a,{for:"todo-title",children:"Title"}),Object(h.jsx)(G.a,{type:"text",id:"todo-title",name:"title",value:this.state.activeItem.title,onChange:this.handleChange,placeholder:"Enter Todo Title"})]}),Object(h.jsxs)(J.a,{children:[Object(h.jsx)(X.a,{for:"todo-description",children:"Description"}),Object(h.jsx)(G.a,{type:"text",id:"todo-description",name:"description",value:this.state.activeItem.description,onChange:this.handleChange,placeholder:"Enter Todo description"})]}),Object(h.jsx)(J.a,{check:!0,children:Object(h.jsxs)(X.a,{check:!0,children:[Object(h.jsx)(G.a,{type:"checkbox",name:"completed",checked:this.state.activeItem.completed,onChange:this.handleChange}),"Completed"]})})]})}),Object(h.jsx)(Y.a,{children:Object(h.jsx)(Q.a,{color:"success",onClick:function(){return a(e.state.activeItem)},children:"Save"})})]})}}]),n}(a.Component),Z=window.location.origin,$=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).getCookie=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),a=0;a<n.length;a++){var c=n[a].trim();if(c.substring(0,e.length+1)===e+"="){t=decodeURIComponent(c.substring(e.length+1));break}}return t},a.refreshList=function(){w.a.get("".concat(Z,"/api/todos/"),{headers:{"X-CSRFToken":a.getCookie("csrftoken")}}).then((function(e){return a.setState({todoList:e.data})})).catch((function(e){console.log(e),window.location.href="/login?next=/todos"}))},a.displayCompleted=function(e){return e?a.setState({viewCompleted:!0}):a.setState({viewCompleted:!1})},a.renderTabList=function(){return Object(h.jsxs)("div",{className:"my-5 tab-list",children:[Object(h.jsx)("span",{onClick:function(){return a.displayCompleted(!0)},className:a.state.viewCompleted?"active":"",children:"complete"}),"\xa0\xa0",Object(h.jsx)("span",{onClick:function(){return a.displayCompleted(!1)},className:a.state.viewCompleted?"":"active",children:"Incomplete"})]})},a.renderItems=function(){var e=a.state.viewCompleted;return a.state.todoList.filter((function(t){return t.completed===e})).map((function(e){return Object(h.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:[Object(h.jsx)("span",{className:"todo-title mr-2 ".concat(a.state.viewCompleted?"completed-todo":""),title:e.description,children:e.title}),Object(h.jsxs)("span",{children:[Object(h.jsxs)("button",{onClick:function(){return a.editItem(e)},className:"btn btn-secondary mr-2",children:[" ","Edit"," "]}),Object(h.jsxs)("button",{onClick:function(){return a.handleDelete(e)},className:"btn btn-danger",children:["Delete"," "]})]})]},e.id)}))},a.toggle=function(){a.setState({modal:!a.state.modal})},a.handleSubmit=function(e){a.toggle(),e.id?w.a.put("".concat(Z,"/api/todos/").concat(e.id,"/"),e,{headers:{"X-CSRFToken":a.getCookie("csrftoken")}}).then((function(e){return a.refreshList()})):w.a.post("".concat(Z,"/api/todos/"),e,{headers:{"X-CSRFToken":a.getCookie("csrftoken")}}).then((function(e){return a.refreshList()}))},a.handleDelete=function(e){w.a.delete("".concat(Z,"/api/todos/").concat(e.id),{headers:{"X-CSRFToken":a.getCookie("csrftoken")}}).then((function(e){return a.refreshList()}))},a.createItem=function(){a.setState({activeItem:{title:"",description:"",completed:!1},modal:!a.state.modal})},a.editItem=function(e){a.setState({activeItem:e,modal:!a.state.modal})},a.state={viewCompleted:!1,activeItem:{title:"",description:"",completed:!1},todoList:[]},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.refreshList()}},{key:"render",value:function(){return Object(h.jsxs)("main",{className:"content",children:[Object(h.jsx)("h1",{className:"text-white text-uppercase text-center my-4",children:"Todo app"}),Object(h.jsx)("div",{className:"row ",children:Object(h.jsx)("div",{className:"col-md-6 col-sm-10 mx-auto p-0",children:Object(h.jsxs)("div",{className:"card p-3",children:[Object(h.jsx)("div",{className:"",children:Object(h.jsx)("button",{onClick:this.createItem,className:"btn btn-primary",children:"Add task"})}),this.renderTabList(),Object(h.jsx)("ul",{className:"list-group list-group-flush",children:this.renderItems()})]})})}),this.state.modal?Object(h.jsx)(W,{activeItem:this.state.activeItem,toggle:this.toggle,onSave:this.handleSubmit}):null]})}}]),n}(a.Component),ee=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).onClick=function(){var t=e.props,n=t.label;(0,t.onClick)(n)},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.onClick,t=this.props,n=t.activeTab,a=t.label,c="tab-list-item";return n===a&&(c+=" tab-list-active"),Object(h.jsx)("li",{className:c,onClick:e,children:a})}}]),n}(a.Component),te=ee,ne=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).onClickTabItem=function(e){a.setState({activeTab:e})},a.state={activeTab:a.props.children[0].props.label},a}return Object(o.a)(n,[{key:"render",value:function(){var e=this.onClickTabItem,t=this.props.children,n=this.state.activeTab;return Object(h.jsxs)("div",{className:"tabs",children:[Object(h.jsx)("ol",{className:"tab-list",children:t.map((function(t){var a=t.props.label;return Object(h.jsx)(te,{activeTab:n,label:a,onClick:e},a)}))}),Object(h.jsx)("div",{className:"tab-content",children:t.map((function(e){if(e.props.label===n)return e.props.children}))})]})}}]),n}(a.Component);var ae=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Tabs Demo"}),Object(h.jsxs)(ne,{children:[Object(h.jsxs)("div",{label:"Gator",children:["See ya later, ",Object(h.jsx)("em",{children:"Alligator"}),"!"]}),Object(h.jsxs)("div",{label:"Croc",children:["After 'while, ",Object(h.jsx)("em",{children:"Crocodile"}),"!"]}),Object(h.jsxs)("div",{label:"Sarcosuchus",children:["Nothing to see here, this tab is ",Object(h.jsx)("em",{children:"extinct"}),"!"]})]})]})},ce=function(e){e.state;var t=e.dispatch;return Object(h.jsx)("button",{onClick:function(){t({type:"reset"})},children:"Clear State"})},re=function(e){var t=e.moneyval,n=e.handleChange,a=e.state;return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{class:"input-group input-group-sm mb-3",children:[Object(h.jsx)("div",{class:"input-group-prepend",children:Object(h.jsx)("span",{class:"input-group-text",id:"inputGroup-sizing-sm",children:t})}),Object(h.jsx)("input",{type:"number",class:"form-control","aria-label":"Small","aria-describedby":"inputGroup-sizing-sm",id:"ch".concat(t),name:"ch".concat(t),onChange:function(e){return n({type:"ch".concat(t),value:parseInt(e.target.value)})},onBlur:function(e){""==e.target.value&&n({type:e.target.name,value:0})},onFocus:function(e){""!=e.target.value&&n({type:e.target.name,value:""})},value:a["val".concat(t)]})]})})},le=function(e){var t=e.state,n=e.dispatch;return Object(h.jsxs)("div",{children:[Object(h.jsx)(re,{moneyval:"1",handleChange:n,state:t}),Object(h.jsx)(re,{moneyval:"5",handleChange:n,state:t}),Object(h.jsx)(re,{moneyval:"10",handleChange:n,state:t}),Object(h.jsx)(re,{moneyval:"20",handleChange:n,state:t}),Object(h.jsx)(re,{moneyval:"50",handleChange:n,state:t}),Object(h.jsx)(re,{moneyval:"100",handleChange:n,state:t}),Object(h.jsx)(re,{moneyval:"200",handleChange:n,state:t}),Object(h.jsx)(re,{moneyval:"500",handleChange:n,state:t}),Object(h.jsx)(re,{moneyval:"1000",handleChange:n,state:t}),Object(h.jsx)("br",{}),Object(h.jsxs)("nav",{class:"navbar fixed-bottom navbar-light bg-light",children:[Object(h.jsxs)("div",{id:"displayTotal",children:["Total (pesos) : ",function(e){var t=0;for(var n in e)e.hasOwnProperty(n)&&"totalCash"!=n&&(t+=parseInt(n.match(/\d+/)[0])*e[n]);return t}(t)]}),Object(h.jsx)(ce,{state:t,dispatch:n})]})]})},se=function(e){var t=e.handleTextChange,n=e.handleSetMultiple,a=e.state;return Object(h.jsxs)("nav",{class:"navbar fixed-bottom navbar-light bg-light",children:[Object(h.jsx)("span",{class:"navbar-text",children:"Count:"}),Object(h.jsx)("div",{class:"input-group-sm",children:Object(h.jsx)("input",{class:"form-control",type:"text",size:"5",id:"totalCount",name:"totalCount",onChange:function(e){return t(e)},value:a.largeButton})}),Object(h.jsx)("span",{class:"navbar-text",children:"Multiple:"}),Object(h.jsx)("div",{class:"input-group-sm",children:Object(h.jsx)("input",{class:"form-control",type:"text",size:"5",name:"multiple",id:"multiple",onChange:function(e){return t(e)},value:a.multiple})}),Object(h.jsx)("button",{type:"button",class:"btn btn-success btn-sm",id:"left",onClick:n,name:"btnleft",children:"<<"}),Object(h.jsx)("button",{type:"button",class:"btn btn-success btn-sm",id:"right",name:"btnright",onClick:n,children:">>"}),Object(h.jsx)("button",{type:"button",class:"btn btn-success btn-sm",id:"clearCnt",name:"reset",onClick:n,children:"CLR"})]})},oe=function(e){var t=e.handleIncrement,n=e.largeButton;return Object(h.jsx)("div",{id:"largestbuttonever",onClick:function(e){return t(1)},children:n})},ie=function(e){var t=new SpeechSynthesisUtterance,n=navigator.vendor&&navigator.vendor.indexOf("Apple")>-1&&navigator.userAgent&&-1==navigator.userAgent.indexOf("CriOS")&&-1==navigator.userAgent.indexOf("FxiOS"),a=n?1.5:2.9,c=window.speechSynthesis.getVoices();t.voice=n?c[11]:c[1],t.text=e,t.volume=1,t.rate=a,t.pitch=1,window.speechSynthesis.cancel(),window.speechSynthesis.speak(t)},ue=(n(248),function(e){var t=e.state,n=e.dispatch,r=c.a.useState(""),l=Object(j.a)(r,2),s=l[0],o=(l[1],function(e){var a,c;a="red",c="largestbuttonever",document.getElementById(c).style.backgroundColor=a,setTimeout((function(){document.getElementById(c).style.backgroundColor="white"}),120);var r=t.largeButton+t.multiple*e;ie(r),n({type:"increment",payload:{largeButton:r}})}),i=function(e){console.log("Keypress ".concat(t.largeButton));e.key;var n=e.keyCode;13===n?o(1):109==n&&o(-1)};Object(a.useEffect)((function(){return window.addEventListener("keydown",i),function(){console.log("Effect ".concat(t.largeButton)),window.removeEventListener("keydown",i)}}),[i]);return Object(h.jsxs)("div",{children:[s,Object(h.jsx)(oe,{handleIncrement:o,largeButton:t.largeButton}),Object(h.jsx)(se,{handleTextChange:function(e){switch(e.target.name){case"totalCount":n({type:"textChanged",payload:{largeButton:parseInt(e.target.value)}});break;case"multiple":n({type:"textChanged",payload:{multiple:parseInt(e.target.value)}})}},handleSetMultiple:function(e){var a=t.indexMultiple,c=t.multiple;switch(e.target.name){case"btnleft":a=0==t.indexMultiple?t.arrayMultiple.length-1:t.indexMultiple-1,c=t.arrayMultiple[a],n({type:"setMultiple",payload:{multiple:c,indexMultiple:a}});break;case"btnright":a=t.indexMultiple==t.arrayMultiple.length-1?0:t.indexMultiple+1,c=t.arrayMultiple[a],n({type:"setMultiple",payload:{multiple:c,indexMultiple:a}});break;case"reset":n({type:"reset"})}},state:t})]})}),de={largeButton:0,multiple:10,indexMultiple:1,arrayMultiple:[5,10,50,100]},je=function(e,t){switch(t.type){case"increment":case"textChanged":case"setMultiple":return Object(d.a)(Object(d.a)({},e),t.payload);case"reset":return Object(d.a)(Object(d.a)({},e),de)}},be={val1:0,val5:0,val10:0,val20:0,val50:0,val100:0,val200:0,val500:0,val1000:0,totalCash:0},pe=function(e,t){switch(t.type){case"ch1":return Object(d.a)(Object(d.a)({},e),{},{val1:t.value});case"ch5":return Object(d.a)(Object(d.a)({},e),{},{val5:t.value});case"ch10":return Object(d.a)(Object(d.a)({},e),{},{val10:t.value});case"ch20":return Object(d.a)(Object(d.a)({},e),{},{val20:t.value});case"ch50":return Object(d.a)(Object(d.a)({},e),{},{val50:t.value});case"ch100":return Object(d.a)(Object(d.a)({},e),{},{val100:t.value});case"ch200":return Object(d.a)(Object(d.a)({},e),{},{val200:t.value});case"ch500":return Object(d.a)(Object(d.a)({},e),{},{val500:t.value});case"ch1000":return Object(d.a)(Object(d.a)({},e),{},{val1000:t.value});case"reset":return be;default:return e}},he=function(){var e=Object(a.useReducer)(je,de),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(a.useReducer)(pe,be),l=Object(j.a)(r,2),s=l[0],o=l[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Money Counter"}),Object(h.jsxs)(ne,{children:[Object(h.jsx)("div",{label:"Billcounter",children:Object(h.jsx)(le,{state:s,dispatch:o})}),Object(h.jsx)("div",{label:"Coincounter",children:Object(h.jsx)(ue,{state:n,dispatch:c})}),Object(h.jsx)("div",{label:"Sarcosuchus",children:Object(h.jsx)("div",{children:" To be decided "})})]})]})},Oe=function(e){var t=e.radioState,n=e.radioDispatch;return Object(h.jsxs)("div",{onChange:function(e){console.log("changed to ".concat(e.target.value)),n({type:"changeRadio",value:e.target.value})},children:[Object(h.jsx)("input",{type:"radio",id:"rdealer",name:"radyo",value:"dealer",checked:"dealer"===t.radioOption}),Object(h.jsx)("label",{for:"html",children:"Dealer"}),"\xa0",Object(h.jsx)("input",{type:"radio",id:"rpickup",name:"radyo",value:"pickup"}),Object(h.jsx)("label",{for:"css",children:"Pickup"}),"\xa0",Object(h.jsx)("input",{type:"radio",id:"rround",name:"radyo",value:"round"}),Object(h.jsx)("label",{for:"javascript",children:"Round"}),"\xa0",Object(h.jsx)("input",{type:"radio",id:"rsmall",name:"radyo",value:"small"}),Object(h.jsx)("label",{for:"javascript",children:"Small"}),"\xa0",Object(h.jsx)("input",{type:"radio",id:"rsquare",name:"radyo",value:"square"}),Object(h.jsx)("label",{for:"javascript",children:"Square"})]})},me=function(e){var t=e.buttonsDispatch,n=e.handleRadioOptions;return Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{onClick:function(){return t({type:"incdec",val:n(1)})},children:"Increment"}),Object(h.jsx)("button",{onClick:function(){return t({type:"incdec",val:n(-1)})},children:"Decrement"}),Object(h.jsx)("button",{onClick:function(){return t({type:"reset"})},children:"Reset"})]})},xe=function(e){var t=e.state,n=e.handleSelect;return Object(h.jsx)("div",{children:Object(h.jsxs)("select",{name:"selectlocations",id:"selectlocations",value:t.dropSelectLocation,onChange:n,children:[Object(h.jsx)("option",{value:"talamban",children:"Talamban"}),Object(h.jsx)("option",{value:"labangon",children:"Labangon"}),Object(h.jsx)("option",{value:"kalimpio",children:"Kalimpio"})]})})},ve={multiple:1,date_monitored:"",cctvTime:"",dealer:0,pickup:0,rnd:0,square:0,squareSmall:0,small:0,dayparts:"",suspicious:"",radioOption:"dealer",dropSelectLocation:"talamban"},fe=function(e,t){switch(t.type){case"incdec":return Object(d.a)(Object(d.a)({},e),t.val);case"changeRadio":return Object(d.a)(Object(d.a)({},e),{},{radioOption:t.value});case"changeTextBox":return Object(d.a)(Object(d.a)({},e),t.value);case"loadData":return Object(d.a)(Object(d.a)({},e),t.dataToLoad);case"reset":return document.getElementById("rdealer").checked=!0,ve;default:return e}},ge=function(e){var t=e.handleBlur,n=e.handleFocus,a=e.Value,c=e.Handlechange;return Object(h.jsxs)("div",{children:["Multiple:",Object(h.jsx)("input",{name:"multiple",type:"number",value:a,onBlur:t,onFocus:n,onChange:function(e){return c(e)}})]})},ye=function(e){var t=e.txtstate,n=e.handleChange;return Object(h.jsxs)("div",{children:["Dealer",Object(h.jsx)("input",{name:"dealer",type:"number",value:t.dealer,onChange:n}),Object(h.jsx)("br",{}),"Pickup",Object(h.jsx)("input",{name:"pickup",type:"number",value:t.pickup,onChange:n}),Object(h.jsx)("br",{}),"Round",Object(h.jsx)("input",{name:"round",type:"number",value:t.rnd,onChange:n}),Object(h.jsx)("br",{}),"Small",Object(h.jsx)("input",{name:"small",type:"number",value:t.small,onChange:n}),Object(h.jsx)("br",{}),"Square",Object(h.jsx)("input",{name:"square",type:"number",value:t.square,onChange:n}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{class:"input-group-text",id:"",children:"Suspicion"}),Object(h.jsx)("textarea",{id:"suspectText",cols:"100",rows:"14"}),Object(h.jsx)("br",{})]})};var Ce=function(e){return Object(h.jsx)("button",{className:e.class,type:e.type,onClick:function(){return e.handleLoadClick(e.state.date_monitored)},children:"Load"})};var ke=function(e){return Object(h.jsx)("button",{className:e.class,type:e.type,onClick:e.handleSaveClick,children:e.children})};var Se=function(){var e=Object(a.useReducer)(fe,ve),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(n.dropSelectLocation),l=Object(j.a)(r,2),s=l[0],o=l[1],i=Object(a.useState)(n.dropSelectLocation),u=Object(j.a)(i,2),d=u[0],b=u[1],p=["dealer","pickup","round","small","square"],O=function(e){e.key;var t=e.keyCode,a=p.indexOf(n.radioOption),r=function(e){document.getElementById("r".concat(p[a])).checked=!0,c({type:"changeRadio",value:p[a]})};13===t?c({type:"incdec",val:x(1)}):109==t?c({type:"incdec",val:x(-1)}):37==t?(0==a?a=p.length-1:a--,r(p[a])):39==t&&(a==p.length-1?a=0:a++,r(p[a]))};Object(a.useEffect)((function(){return window.addEventListener("keydown",O),function(){window.removeEventListener("keydown",O)}}),[O]),Object(a.useEffect)((function(){"talamban"===n.dropSelectLocation?(o("/api/talambansave/"),b("/api/talambanload/")):"labangon"===n.dropSelectLocation?(o("/api/labangonsave/"),b("/api/labangonload/")):"kalimpio"===n.dropSelectLocation&&(o("/api/kalimpiosave/"),b("/api/kalimpioload/")),console.log(d)}),[n.dropSelectLocation]);var m=function(e){switch(e.target.name){case"multiple":c({type:"changeTextBox",value:{multiple:parseInt(e.target.value)}});break;case"dealer":c({type:"changeTextBox",value:{dealer:parseInt(e.target.value)}});break;case"pickup":c({type:"changeTextBox",value:{pickup:parseInt(e.target.value)}});break;case"round":c({type:"changeTextBox",value:{round:parseInt(e.target.value)}});break;case"small":c({type:"changeTextBox",value:{small:parseInt(e.target.value)}});break;case"square":c({type:"changeTextBox",value:{square:parseInt(e.target.value)}});break;case"date":c({type:"changeTextBox",value:{date_monitored:e.target.value}});break;case"time-input":c({type:"changeTextBox",value:{cctvTime:e.target.value}});break;case"selectlocations":console.log("locations selected to ".concat(e.target.value)),c({type:"changeTextBox",value:{dropSelectLocation:e.target.value}})}},x=function(e){var t,a="";switch(a+=e>0?"Plus":"Minus",a+=" ".concat(n.radioOption),ie(a),t=e>0?"blue":"red",document.body.style.backgroundColor=t,setTimeout((function(){document.body.style.backgroundColor="white"}),120),n.radioOption){case"dealer":return{dealer:n.dealer+e*n.multiple,multiple:1};case"pickup":return{pickup:n.pickup+e*n.multiple,multiple:1};case"round":return{round:n.round+e*n.multiple,multiple:1};case"small":return{small:n.small+e*n.multiple,multiple:1};case"square":return{square:n.square+e*n.multiple,multiple:1}}},v=function(){var e=Object(C.a)(y.a.mark((function e(t){var n,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get("".concat(d).concat(t,"/"));case 3:return n=e.sent,delete(a=n.data).id,c({type:"loadData",dataToLoad:a}),console.log(a),e.abrupt("return",n.data);case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(C.a)(y.a.mark((function e(t){var a,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=document.querySelector("[name=csrfmiddlewaretoken]").value,w.a.defaults.headers.common["X-CSRFToken"]=a,e.prev=3,e.next=6,w.a.post("".concat(s),n);case 6:c=e.sent,console.log(c.data),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("input",{type:"date",name:"date",id:"date",value:n.date_monitored,onChange:m}),Object(h.jsx)("input",{type:"time",id:"time-input",name:"time-input",value:n.cctvTime,onChange:m}),Object(h.jsx)(xe,{state:n,handleSelect:m}),Object(h.jsx)(me,{buttonsDispatch:c,handleRadioOptions:x}),Object(h.jsx)(Oe,{radioState:n,radioDispatch:c}),Object(h.jsx)(ge,{handleBlur:function(e){if("multiple"===e.target.name)""==e.target.value&&c({type:"changeTextBox",value:{multiple:"1"}})},handleFocus:function(e){if("multiple"===e.target.name)""!=e.target.value&&c({type:"changeTextBox",value:{multiple:""}})},Value:n.multiple,Handlechange:m}),Object(h.jsx)(ye,{txtstate:n,handleChange:m,state:n}),Object(h.jsx)(Ce,{class:"btn btn-outline-info",type:"button",id:"loadBtn",state:n,handleLoadClick:v,children:"Load"}),Object(h.jsx)(ke,{class:"btn btn-outline-info",type:"button",id:"saveBtn",handleSaveClick:f,children:"Save"})]})};var Te=n(112),Ie=n(16),we=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(s.a)(this,n),t.call(this,e)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsx)(Te.a,{children:Object(h.jsxs)(Ie.c,{children:[Object(h.jsx)(Ie.a,{exact:!0,path:"/",children:"Please use another url"}),Object(h.jsx)(Ie.a,{path:"/talamban",component:f}),Object(h.jsx)(Ie.a,{path:"/formex",component:T}),Object(h.jsx)(Ie.a,{path:"/todos",component:$}),Object(h.jsx)(Ie.a,{path:"/rtr",component:P}),Object(h.jsx)(Ie.a,{path:"/rtab",component:ae}),Object(h.jsx)(Ie.a,{path:"/moncount",component:he}),Object(h.jsx)(Ie.a,{path:"/cctv/talamban-model",component:Se})]})})}}]),n}(a.Component);var Ee=function(){return Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(we,{})})})},Re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,261)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;n(e),a(e),c(e),r(e),l(e)}))};l.a.render(Object(h.jsx)(Ee,{}),document.getElementById("arsoreact")),Re()}},[[250,1,2]]]);
//# sourceMappingURL=main.3b52297d.chunk.js.map
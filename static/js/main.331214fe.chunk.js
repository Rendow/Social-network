(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,s){e.exports={wrap:"Users_wrap__1FBbp",photo:"Users_photo__1nnq1",pagination:"Users_pagination__o7o7S",selectedPage:"Users_selectedPage__TkLP_"}},16:function(e,t,s){e.exports={content:"Post_content__3DGyO",img:"Post_img__kHxfE",message:"Post_message__3QPS7",like:"Post_like__1Xkw_"}},19:function(e,t,s){e.exports={content:"MyPosts_content__1DqSy",item:"MyPosts_item__WB3A_",posts:"MyPosts_posts__aBbYw"}},23:function(e,t,s){e.exports={header:"Header_header__1SEQZ",logo:"Header_logo__VwJNW"}},26:function(e,t,s){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__1J6dA",description:"ProfileInfo_description__1e9aD"}},39:function(e,t,s){e.exports={content:"Profile_content__2BDJ4"}},4:function(e,t,s){e.exports={nav:"Navbar_nav__3IHOI",item:"Navbar_item__3-xYg",active:"Navbar_active__ItIae"}},46:function(e,t,s){},51:function(e,t,s){},74:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s(1),c=s.n(a),i=(s(46),s(14)),r={},o=s(12),l=s(2),d="UPDATE_NEW_MESSAGE_BODY",j="SEND_MESSAGE",u={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrey"},{id:3,name:"Anya"},{id:4,name:"Sveta"},{id:5,name:"Viktor"},{id:6,name:"Valera"}],messages:[{id:1,messages:"Hi"},{id:2,messages:"How are you?"},{id:3,messages:"Good"}],newMessageBody:""},b="UPDATE-NEW-POST-TEXT",p="ADD-POST",g={posts:[{id:1,messages:"Hi,how are you?",likesCount:11},{id:2,messages:"its my first posts",likesCount:41}],newPostText:""},O="FOLLOW",h="UNFOLLOW",m="SET_USERS",v="SET_CURRENT_PAGE",x="SET_TOTAL_USERS_COUNT",f={users:[],pageSize:5,totalUsersCount:0,currentPage:2},_=Object(i.b)({sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r;return e},dialogsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(l.a)(Object(l.a)({},e),{},{newMessageBody:t.body});case j:var s=e.newMessageBody;return Object(l.a)(Object(l.a)({},e),{},{newMessageBody:"",messages:[].concat(Object(o.a)(e.messages),[{id:(new Date).getTime(),messages:s}])});default:return e}},profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:var s={id:(new Date).getTime(),messages:e.newPostText,likesCount:0};return Object(l.a)(Object(l.a)({},e),{},{posts:[].concat(Object(o.a)(e.posts),[s]),newPostText:""});case b:return Object(l.a)(Object(l.a)({},e),{},{newPostText:t.newText});default:return e}},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(l.a)(Object(l.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(l.a)(Object(l.a)({},e),{},{followed:!0}):e}))});case h:return Object(l.a)(Object(l.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(l.a)(Object(l.a)({},e),{},{followed:!1}):e}))});case m:return Object(l.a)(Object(l.a)({},e),{},{users:Object(o.a)(t.users)});case v:return Object(l.a)(Object(l.a)({},e),{},{currentPage:t.currentPage});case x:return Object(l.a)(Object(l.a)({},e),{},{totalUsersCount:t.totalCount});default:return e}}}),P=Object(i.c)(_),w=s(17),N=s.n(w),y=s(7),C=(s(51),s(23)),k=s.n(C);var S=function(){return Object(n.jsx)("header",{className:k.a.header,children:Object(n.jsx)("div",{className:k.a.logo})})},T=s(4),D=s.n(T);var U=function(){return Object(n.jsxs)("nav",{className:D.a.nav,children:[Object(n.jsx)("div",{className:D.a.item,children:Object(n.jsx)(y.b,{to:"/profile",activeClassName:D.a.active,children:"Profile"})}),Object(n.jsx)("div",{className:D.a.item,children:Object(n.jsx)(y.b,{to:"/dialogs",activeClassName:D.a.active,children:" Messages"})}),Object(n.jsx)("div",{className:D.a.item,children:Object(n.jsx)(y.b,{to:"/users",activeClassName:D.a.active,children:" Users"})}),Object(n.jsx)("div",{className:D.a.item,children:Object(n.jsx)(y.b,{to:"/news",activeClassName:D.a.active,children:"News"})}),Object(n.jsx)("div",{className:D.a.item,children:Object(n.jsx)(y.b,{to:"/music",activeClassName:D.a.active,children:"Music"})}),Object(n.jsx)("div",{className:D.a.item,children:Object(n.jsx)(y.b,{to:"/settings",activeClassName:D.a.active,children:"Settings"})})]})},M=s(19),B=s.n(M),E=s(16),A=s.n(E),I=s.p+"static/media/img.1c5b1442.webp";var H=function(e){return Object(n.jsxs)("div",{className:A.a.content,children:[Object(n.jsx)("div",{className:A.a.img,children:Object(n.jsx)("img",{src:I,alt:""})}),Object(n.jsxs)("div",{className:A.a.message,children:[" ",e.message]}),Object(n.jsxs)("div",{className:A.a.like,children:["like ",e.like]})]})};var L=function(e){var t=e.posts.map((function(e){return Object(n.jsx)(H,{message:e.messages,like:e.likesCount})})),s=c.a.createRef();return Object(n.jsxs)("div",{className:B.a.content,children:[Object(n.jsxs)("div",{className:B.a.postBlock,children:[Object(n.jsx)("div",{children:Object(n.jsx)("h4",{children:"My publications"})}),Object(n.jsx)("div",{children:Object(n.jsx)("textarea",{onChange:function(t){var s=t.currentTarget.value;e.onChange(s)},value:e.newPostText,ref:s,children:" "})}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{onClick:function(){e.onClick()},children:" Publish"})})]}),Object(n.jsx)("div",{className:B.a.posts,children:t})]})},z=s(10),G=Object(z.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{onClick:function(){e({type:p})},onChange:function(t){var s=function(e){return{type:b,newText:e}}(t);e(s)}}}))(L),R=s(26),W=s.n(R);var F=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:"https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg",alt:""})}),Object(n.jsxs)("div",{className:W.a.descriptionBlock,children:[Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:I,alt:""})}),Object(n.jsx)("div",{className:W.a.description,children:"  Hello! Nice to meet you on my page. There is will be description about my page. You should wait for this."})]})]})},J=s(39),X=s.n(J);var Y=function(){return Object(n.jsxs)("div",{className:X.a.content,children:[Object(n.jsx)(F,{}),Object(n.jsx)(G,{})]})},V=s(3);var q=function(){return Object(n.jsx)("div",{children:"news"})};var Q=function(){return Object(n.jsx)("div",{children:"music"})};var Z=function(){return Object(n.jsx)("div",{children:"Settings"})},K=s(9),$=s.n(K);var ee=function(e){var t="/dialogs/"+e.id;return Object(n.jsx)("div",{className:$.a.dialog+" "+$.a.active,children:Object(n.jsxs)(y.b,{to:t,children:[" ",e.name]})})};var te=function(e){return Object(n.jsx)("div",{className:$.a.dialog,children:e.message})};var se=function(e){var t=e.dialogsPage.dialogs.map((function(e){return Object(n.jsx)(ee,{name:e.name,id:e.id},e.id)})),s=e.dialogsPage.messages.map((function(e){return Object(n.jsx)(te,{message:e.messages},e.id)})),a=c.a.createRef(),i=e.dialogsPage.newMessageBody;return Object(n.jsxs)("div",{className:$.a.dialogs,children:[Object(n.jsx)("div",{className:$.a.dialogsItems,children:t}),Object(n.jsxs)("div",{className:$.a.messages,children:[s,Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:Object(n.jsx)("textarea",{onChange:function(t){var s=t.currentTarget.value;e.updateNewMessageBody(s)},value:i,ref:a,children:" "})}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{onClick:function(){e.sendMessage()},children:" Send message"})})]})]})]})},ne=Object(z.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{updateNewMessageBody:function(t){var s=function(e){return{type:d,body:e}}(t);e(s)},sendMessage:function(){e({type:j})}}}))(se),ae=s(40),ce=s(41),ie=s(43),re=s(42),oe=s(13),le=s.n(oe),de=s.p+"static/media/logo.ef2c408a.png",je=s(27),ue=s.n(je),be=function(e){Object(ie.a)(s,e);var t=Object(re.a)(s);function s(){var e;Object(ae.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.setCurrentPage(t),ue.a.get("https://social-network.samuraijs.com/api/1.0/users?page=".concat(t,"&count=").concat(e.props.pageSize)).then((function(t){e.props.setUsers(t.data.items)}))},e}return Object(ce.a)(s,[{key:"componentDidMount",value:function(){var e=this;ue.a.get("https://social-network.samuraijs.com/api/1.0/users?page=".concat(this.props.currentPage,"&count=").concat(this.props.pageSize)).then((function(t){e.props.setUsers(t.data.items),e.props.setTotalUsersCount(t.data.totalCount)}))}},{key:"render",value:function(){for(var e=this,t=le.a.selectedPage+" "+le.a.pagination,s=Math.ceil(this.props.totalUsersCount/this.props.pageSize),a=[],c=1;c<=s;c++)a.push(c);return Object(n.jsxs)("div",{children:[this.props.users.map((function(t){return Object(n.jsxs)("div",{className:le.a.wrap,children:[Object(n.jsxs)("span",{children:[Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:null!=t.photos.small?t.photos.small:de,className:le.a.photo})}),Object(n.jsx)("div",{children:t.followed?Object(n.jsx)("button",{onClick:function(){e.props.unfollow(t.id)},children:"Unfollow"}):Object(n.jsx)("button",{onClick:function(){e.props.follow(t.id)},children:"Follow"})})]}),Object(n.jsxs)("span",{children:[Object(n.jsxs)("span",{children:[Object(n.jsxs)("div",{children:[" ",t.name]}),Object(n.jsxs)("div",{children:[" ",t.status]})]}),Object(n.jsxs)("span",{children:[Object(n.jsx)("div",{children:"u.location.country"}),Object(n.jsx)("div",{children:"u.location.city"})]})]})]},t.id)})),Object(n.jsx)("div",{children:a.map((function(s){return s<15&&Object(n.jsxs)("span",{className:e.props.currentPage===s?t:le.a.pagination,onClick:function(){e.onPageChanged(s)},children:[s," "]})}))})]})}}]),s}(c.a.Component),pe=Object(z.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage}}),(function(e){return{follow:function(t){e({type:O,userID:t})},unfollow:function(t){e({type:h,userID:t})},setUsers:function(t){e(function(e){return{type:m,users:e}}(t))},setCurrentPage:function(t){e(function(e){return{type:v,currentPage:e}}(t))},setTotalUsersCount:function(t){e({type:x,totalCount:t})}}}))(be);var ge=function(){return Object(n.jsxs)("div",{className:"app-wrapper",children:[Object(n.jsx)(S,{}),Object(n.jsx)(U,{}),Object(n.jsxs)("div",{className:"app-wrapper-content",children:[Object(n.jsx)(V.a,{path:"/profile",render:function(){return Object(n.jsx)(Y,{})}}),Object(n.jsx)(V.a,{path:"/dialogs",render:function(){return Object(n.jsx)(ne,{})}}),Object(n.jsx)(V.a,{path:"/users",render:function(){return Object(n.jsx)(pe,{})}}),Object(n.jsx)(V.a,{path:"/news",render:function(){return Object(n.jsx)(q,{})}}),Object(n.jsx)(V.a,{path:"/music",render:function(){return Object(n.jsx)(Q,{})}}),Object(n.jsx)(V.a,{path:"/settings",render:function(){return Object(n.jsx)(Z,{})}})]})]})};N.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(y.a,{children:Object(n.jsx)(z.a,{store:P,children:Object(n.jsx)(ge,{})})})}),document.getElementById("root"))},9:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__Wwmq0",dialogsItems:"Dialogs_dialogsItems__k-GXX",active:"Dialogs_active__1JhBv",dialog:"Dialogs_dialog__11cD9",messages:"Dialogs_messages__3zY0R"}}},[[74,1,2]]]);
//# sourceMappingURL=main.331214fe.chunk.js.map
(this.webpackJsonp01=this.webpackJsonp01||[]).push([[0],Array(26).concat([function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=(a(65),function(e){var t=e.label;return r.a.createElement("div",{className:"loading"},r.a.createElement("div",{className:"loadingio-spinner-magnify-li0b6b0l9c"},r.a.createElement("div",{className:"ldio-ttz3fxdnbtl"},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null),r.a.createElement("div",null))))),r.a.createElement("h2",{className:"loading__descr"},t))});t.a=s},,,,,,,function(e,t,a){e.exports=a.p+"static/media/user.4dbbb887.png"},,,,,,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(114)},,,,,function(e,t,a){},,,,,function(e,t,a){},,,function(e,t,a){},,,,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(31),c=a.n(s),l=(a(60),a(9)),o=a(16),u=a(14),i=a(13),m=a(12),p=a(8),f=a(7),d=a(26),b=function(e){return function(t){return r.a.createElement(n.Suspense,{fallback:r.a.createElement(d.a,{label:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c\u0441\u044f..."})},r.a.createElement(e,t))}},E=a(6),g=a(11),_=(a(68),function(e){var t=e.email,a=e.login,n=e.isLoading,s=e.isAuth,c=e.logout,l=s?r.a.createElement("div",{className:"header__links"},r.a.createElement(m.b,{to:"/profile"},r.a.createElement("div",{className:"header__user-info"},r.a.createElement("div",{className:"header__user-name"},a),r.a.createElement("div",{className:"header__user-email"},t))),r.a.createElement(m.b,{to:"/login"},r.a.createElement("div",{onClick:c,className:"header__exit"},r.a.createElement("span",null,"\u0412\u044b\u0439\u0442\u0438 "),r.a.createElement("span",{className:"header__exit-icon"},r.a.createElement(g.a,{icon:E.d}))))):r.a.createElement(m.b,{to:"/login"},r.a.createElement("div",{className:"header__login"},r.a.createElement("span",null,"\u0412\u043e\u0439\u0442\u0438"),r.a.createElement("span",{className:"header__login-icon"},r.a.createElement(g.a,{icon:E.c}))));return r.a.createElement("header",{className:"header"},r.a.createElement(m.b,{to:"/"},r.a.createElement("img",{className:"header__logo",alt:"logo",src:"https://image.flaticon.com/icons/svg/3214/3214850.svg"}),r.a.createElement("span",{className:"header__logo-descr"},"\u0427\u0430-\u0447\u0430-\u0447\u0430\u0442 ")),r.a.createElement("div",{className:"header__user"},n?r.a.createElement("span",{className:"header__spin"},r.a.createElement(g.a,{spin:!0,icon:E.m})):l))}),h=a(5),v=a.n(h),O=a(10),N=function(e,t){return{type:"auth/SET_AUTH_USER_DATA",data:{email:e,userId:t}}},S=function(e){return{type:"auth/SET_USER_LOGIN",login:e}},j=function(e){return{type:"auth/AUTH_USER",isAuth:e}},w=function(e){return{type:"auth/SET_LOADING",isLoading:e}},y=a(52),x=a.n(y),k=function e(){var t=this;Object(l.a)(this,e),this.getUsers=function(){var e=Object(O.a)(v.a.mark((function e(a,n){var r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._usersApi.get("/users?page=".concat(a,"&count=").concat(n));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),this.followUser=function(){var e=Object(O.a)(v.a.mark((function e(a){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._usersApi.post("/follow/".concat(a));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.unfollowUser=function(){var e=Object(O.a)(v.a.mark((function e(a){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._usersApi.delete("/follow/".concat(a));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getUserProfile=function(){var e=Object(O.a)(v.a.mark((function e(a){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._usersApi.get("/profile/".concat(a));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.authUser=Object(O.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._usersApi.get("/auth/me");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),this.getUserStatus=function(){var e=Object(O.a)(v.a.mark((function e(a){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._usersApi.get("/profile/status/".concat(a));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.updateUserStatus=function(){var e=Object(O.a)(v.a.mark((function e(a){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._usersApi.put("/profile/status",{status:a});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.loginUser=function(){var e=Object(O.a)(v.a.mark((function e(a,n,r){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._usersApi.post("/auth/login",{email:a,password:n,rememberMe:r});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),this.logoutUser=Object(O.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._usersApi.delete("/auth/login");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),this._usersApi=x.a.create({baseURL:"https://social-network.samuraijs.com/api/1.0",withCredentials:!0,headers:{"API-KEY":"4ac1ad81-cb42-457d-aca2-bea22b6918b1"}})},P=new k,T=Object(f.b)((function(e){var t=e.auth;return{email:t.email,login:t.login,isAuth:t.isAuth,isLoading:t.isLoading}}),{logout:function(){return function(){var e=Object(O.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(w(!0)),e.next=3,P.logoutUser();case 3:a=e.sent,0===a.data.resultCode&&(t(j(!1)),t(N(null,null)),t(S(null))),t(w(!1));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){return r.a.createElement(_,e)})),A=T,I=(a(87),function(e){var t=e.label,a=e.to,n=e.icon,s=Object(p.g)({path:a});return r.a.createElement("div",{className:s?"navbar active ":"navbar"},r.a.createElement(m.b,{to:a},t,r.a.createElement("span",{className:"navbar__icon"},r.a.createElement(g.a,{icon:n}))))}),U=I,C=(a(88),a(89),function(e){var t=e.img,a=e.label;return r.a.createElement("div",{className:"friend"},r.a.createElement("div",{className:"friend__img"},r.a.createElement("img",{src:t,alt:"friend"})),a&&r.a.createElement("span",{className:"friend__name"},a))}),D=function(e){var t=e.friends;return r.a.createElement("div",{className:"sidebar"},t.map((function(e){return r.a.createElement(C,{key:e.id,label:e.label,img:e.img})})))},L=Object(f.b)((function(e){return{friends:e.sidebar.friends}}))(D),R=(a(90),function(e){var t=e.isAuth;return r.a.createElement("aside",{className:"aside"},r.a.createElement("nav",null,t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(U,{icon:E.q,to:"/profile",label:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"}),r.a.createElement(U,{icon:E.e,to:"/dialogs",label:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"}),r.a.createElement(U,{icon:E.k,to:"/news",label:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"}),r.a.createElement(U,{icon:E.s,to:"/friends",label:"\u0414\u0440\u0443\u0437\u044c\u044f"}),r.a.createElement(U,{icon:E.j,to:"/music",label:"\u041c\u0443\u0437\u044b\u043a\u0430"}),r.a.createElement(U,{icon:E.v,to:"/users",label:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"}),r.a.createElement(U,{icon:E.b,to:"/settings",label:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"}),r.a.createElement(L,null)),!t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(U,{icon:E.q,to:"/login",label:"\u0412\u043e\u0439\u0442\u0438"}),r.a.createElement(U,{icon:E.k,to:"/news",label:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"}),r.a.createElement(U,{icon:E.v,to:"/users",label:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"}),r.a.createElement(U,{icon:E.j,to:"/music",label:"\u041c\u0443\u0437\u044b\u043a\u0430"}),r.a.createElement(U,{icon:E.b,to:"/settings",label:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"}))))}),z="profile/ADD_POST",F=function(e){return{type:"profile/SET_USER_STATUS",userStatus:e}},M=new k,G=function(e){return Object(f.b)((function(e){return{isAuth:e.auth.isAuth}}))((function(t){return t.isAuth?r.a.createElement(e,t):r.a.createElement(p.a,{to:"/login"})}))},W=(a(91),function(e){var t=e.label,a=e.icon,n=e.color;return r.a.createElement("a",{href:"https://www.".concat(t),target:"_blank",rel:"noopener noreferrer",className:"social"},r.a.createElement("div",{className:"social__icon"},r.a.createElement("p",{style:{border:"1px solid ".concat(n),color:"".concat(n)}},r.a.createElement(g.a,{icon:a}))),r.a.createElement("span",{className:"social__link"},t))}),H=a(33),K=a.n(H),J=a(34),q=(a(92),a(22)),B=(a(93),function(e){var t=e.updateStatus,a=e.userStatus,s=Object(n.useState)(!1),c=Object(q.a)(s,2),l=c[0],o=c[1],u=Object(n.useState)(a),i=Object(q.a)(u,2),m=i[0],p=i[1];Object(n.useEffect)((function(){p(a)}),[a]);return r.a.createElement("span",{className:"profile-status"},r.a.createElement("span",null,r.a.createElement("strong",null,"\u0421\u0442\u0430\u0442\u0443\u0441:")),l?r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(m),o(!1)}(e)}},r.a.createElement("input",{className:"profile-status__input",autoFocus:!0,value:m,onChange:function(e){return function(e){p(e.target.value)}(e)},onBlur:function(){return o(!1)}}),r.a.createElement("button",{className:"profile-status__btn"},"^")):r.a.createElement("span",{onDoubleClick:function(){return o(!0)}},m||"\u043d\u0435\u0442 \u0441\u0442\u0430\u0442\u0443\u0441\u0430"))}),X=function(e){var t=e.userProfile,a=e.userStatus,n=e.updateStatus;return t?r.a.createElement("section",{className:"info"},r.a.createElement("div",{className:"info__avatar"},r.a.createElement("img",{alt:"avatar",src:t.photos.large?t.photos.large:K.a})),r.a.createElement("div",{className:"info__descr"},r.a.createElement("h2",null,t.fullName),r.a.createElement("ul",null,r.a.createElement("span",null,r.a.createElement("strong",null,"\u041e\u0431\u043e \u043c\u043d\u0435:")),r.a.createElement("span",null,t.aboutMe)),r.a.createElement("ul",null,r.a.createElement(B,{updateStatus:n,userStatus:a})),r.a.createElement("ul",null,r.a.createElement("span",null,r.a.createElement("strong",null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435:")),r.a.createElement("span",null,t.lookingForAJobDescription)),r.a.createElement("ul",null,r.a.createElement("span",null,r.a.createElement("strong",null,"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b:")),r.a.createElement("span",null,r.a.createElement("div",null,t.contacts.facebook?r.a.createElement(W,{color:"#2980b9",label:t.contacts.facebook,icon:J.a}):null,t.contacts.github?r.a.createElement(W,{color:"#34495e",label:t.contacts.github,icon:J.b}):null,t.contacts.vk?r.a.createElement(W,{color:"#3498db",label:t.contacts.vk,icon:J.c}):null))))):r.a.createElement(d.a,{label:"\u041f\u043e\u0434\u0433\u0440\u0443\u0436\u0430\u0435\u043c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435..."})},V=a(17),Y=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.match,a=e.userId,n=e.getProfile,r=e.getStatus,s=t.params.userId;s||(s=a),n(a),r(a)}},{key:"render",value:function(){var e=this.props,t=e.userProfile,a=e.updateStatus,n=e.userStatus;return r.a.createElement(X,{userProfile:t,updateStatus:a,userStatus:n})}}]),a}(n.Component),Q=Object(V.d)(p.h,G,Object(f.b)((function(e){var t=e.profile,a=e.auth;return{userProfile:t.userProfile,userStatus:t.userStatus,userId:a.userId}}),{getProfile:function(e){return function(){var t=Object(O.a)(v.a.mark((function t(a){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M.getUserProfile(e);case 2:n=t.sent,a({type:"profile/SET_USER_PROFILE",userProfile:n.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(t){M.getUserStatus(e).then((function(e){t(F(e.data))}))}},updateStatus:function(e){return function(t){M.updateUserStatus(e).then((function(e){0===e.resultCode&&t(F(e.data))}))}}}))(Y),Z=(a(94),function(){return r.a.createElement("div",{className:"wallpaper"},r.a.createElement("img",{alt:"wallpaper",src:"https://cdn.pixabay.com/photo/2020/07/01/17/56/chamomile-5360418_960_720.jpg"}))}),$=(a(95),a(96),function(e){var t=e.icon,a=e.color,n=e.cl;return r.a.createElement("button",{style:{backgroundColor:"".concat(a)},className:"icon-button icon-button_".concat(n)},r.a.createElement(g.a,{icon:t}))}),ee=(a(97),function(e){var t=e.post,a=e.likeCount,n=e.dislikeCount;return r.a.createElement("div",{className:"post"},r.a.createElement("div",{className:"post__del"},r.a.createElement($,{icon:E.p,color:"#e74c3c"})),r.a.createElement("div",{className:"post__content"},t),r.a.createElement("div",{className:"post__stat"},r.a.createElement("span",{className:"post__count"},a),r.a.createElement("button",{className:"post__btn"},r.a.createElement(g.a,{icon:E.o})),r.a.createElement("span",{className:"post__count"},n),r.a.createElement("button",{className:"post__btn post__btn_dislike"},r.a.createElement(g.a,{icon:E.n}))))}),te=(a(98),function(e){var t=e.label,a=e.type,n=e.disabled;return r.a.createElement("button",{disabled:n,type:a,className:"send-button"},r.a.createElement("span",null,t))}),ae=a(23),ne=(a(99),function(e){var t=e.onSubmit,a=e.settings,n=e.name,s=a.placeholder,c=a.rows,l=function(e){return e?void 0:""};return r.a.createElement(ae.b,{onSubmit:t,render:function(e){var t=e.handleSubmit,a=e.form,o=e.submitting,u=e.pristine;return r.a.createElement("form",{onSubmit:t,className:"type-form"},r.a.createElement(ae.a,{afterSubmit:function(){a.reset()},name:n,validate:l},(function(e){var t=e.input;return r.a.createElement("div",null,r.a.createElement("textarea",Object.assign({rows:c},t,{placeholder:s,className:"type-form__textarea"})))})),r.a.createElement("div",null,r.a.createElement(te,{type:"submit",disabled:o||u,label:"\u270e"})))}})}),re=(a(100),r.a.memo((function(e){var t=e.postData,a=e.addPost;return r.a.createElement("section",{className:"posts"},r.a.createElement("h2",{className:"posts__title"},"\u041c\u043e\u0438 \u043f\u043e\u0441\u0442\u044b"),r.a.createElement(ne,{settings:{placeholder:"\u0412\u0430\u0448\u0438 \u043d\u043e\u0432\u043e\u0441\u0442\u0438",rows:"1"},onSubmit:function(e){console.log(e),a(e.postText)},name:"postText"}),t.map((function(e){return r.a.createElement(ee,{key:e.id,id:e.id,post:e.text,likeCount:e.likeCount,dislikeCount:e.dislikeCount})})))}))),se=Object(f.b)((function(e){return{postData:e.profile.postData}}),{addPost:function(e){return{type:z,postText:e}}})(re),ce=function(){return r.a.createElement("main",{className:"profile"},r.a.createElement(Z,null),r.a.createElement(Q,null),r.a.createElement(se,null))},le=(a(101),function(e){var t=e.id,a=e.label,n=Object(p.g)({path:"/dialogs/".concat(t)});return r.a.createElement(m.b,{className:n?"dialog-list__item active":"dialog-list__item",to:"/dialogs/".concat(t)},a)}),oe=(a(102),function(e){var t=e.dialogsData;return r.a.createElement("section",{className:"dialog-list"},r.a.createElement("div",null,t.map((function(e){return r.a.createElement(le,{key:e.id,label:e.label,id:e.id})}))))}),ue=Object(f.b)((function(e){return{dialogsData:e.dialogs.dialogsData}}))(oe),ie=(a(103),function(e){var t=e.id,a=e.label,n=e.text,s=e.img;return r.a.createElement(p.b,{path:"/dialogs/".concat(t)},r.a.createElement("div",{className:"message"},r.a.createElement(C,{label:a,img:s}),r.a.createElement("div",{className:"message__box"},r.a.createElement("span",{className:"message__item"},n))))}),me=(a(104),function(e){var t=e.messageData,a=e.dispatchedSendMessage;return r.a.createElement("section",{className:"messages"},r.a.createElement("div",{className:"messages__box"},t.map((function(e){return r.a.createElement(ie,{id:e.id,addressId:e.addressId,key:e.id,label:e.label,text:e.text,img:e.img})})),r.a.createElement(ne,{settings:{placeholder:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",rows:"3"},onSubmit:function(e){a(e.messageText)},name:"messageText"})))}),pe=Object(V.d)(G,Object(f.b)((function(e){return{messageData:e.dialogs.messageData}}),(function(e){return{dispatchedSendMessage:function(t){e(function(e){return{type:"dialogs/SEND_MESSAGE",messageText:e}}(t))}}})))(me),fe=(a(105),function(){return r.a.createElement("main",{className:"dialogs"},r.a.createElement(ue,null),r.a.createElement(pe,null))}),de=function(e){var t=e.validator,a=e.name,n=e.label,s=e.inputType,c=e.inputPlaceholder;return r.a.createElement(ae.a,{validate:t,name:a},(function(e){var t=e.input,a=e.meta,l=a.error&&a.touched;return r.a.createElement("div",{className:"login__field"},r.a.createElement("label",{className:"login__label"},n),r.a.createElement("input",Object.assign({},t,{type:s,className:l?"login__input login__input_validate":"login__input",placeholder:c})),l&&r.a.createElement("span",{className:"login__error"},a.error))}))},be=function(e){return e?void 0:"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"},Ee=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return function(e){return t.reduce((function(t,a){return t||a(e)}),void 0)}},ge=(a(106),function(e){var t=e.onSubmit,a=Object(n.useState)(!1),s=Object(q.a)(a,2),c=s[0],l=s[1],o=Object(n.useState)(!1),u=Object(q.a)(o,2),i=u[0],m=u[1];return r.a.createElement(ae.b,{onSubmit:t,render:function(e){return r.a.createElement("form",{className:"login__form",onSubmit:e.handleSubmit},r.a.createElement(de,{validator:be,name:"email",label:"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",inputPlaceholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",inputType:"email"}),r.a.createElement("div",{className:"login__password"},r.a.createElement(de,{validator:Ee(be,(a=5,function(e){return e.length<=a?"\u0421\u043b\u0430\u0431\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c":void 0})),name:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",inputPlaceholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",inputType:c?"text":"password"}),r.a.createElement("span",{onClick:function(){return l(!c)},className:"login__password-eye"},r.a.createElement(g.a,{icon:c?E.f:E.g}))),r.a.createElement("div",{className:"login__password"},r.a.createElement(de,{validator:Ee(be,(t=e.values.password,function(e){return e===t?void 0:"\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442"})),name:"confirm",label:"\u041f\u043e\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u043e\u043b\u044f",inputPlaceholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c \u0437\u0430\u043d\u043e\u0432\u043e",inputType:i?"text":"password"}),r.a.createElement("span",{onClick:function(){return m(!i)},className:"login__password-eye"},r.a.createElement(g.a,{icon:i?E.f:E.g}))),r.a.createElement(ae.a,{name:"rememberMe",type:"checkbox"},(function(e){var t=e.input,a=e.meta;return r.a.createElement("div",{className:"login__field login__field_checkbox"},r.a.createElement("label",{className:"login__label"},"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f"),r.a.createElement("input",Object.assign({},t,{type:"checkbox",className:"login__input"})),a.error&&a.touched&&r.a.createElement("span",{className:"login__error"},a.error))})),r.a.createElement("div",{className:"login__field login__field_buttons"},r.a.createElement("button",{className:"login__btn",type:"submit",disabled:e.submitting||e.pristine},"Submit"),r.a.createElement("button",{className:"login__btn login__btn_reset",type:"button",onClick:e.form.reset,disabled:e.submitting||e.pristine},"Reset")),e.submitError&&r.a.createElement("div",null,e.submitError));var t,a}})}),_e=Object(f.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,a){return function(){var n=Object(O.a)(v.a.mark((function n(r){var s;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(w(!0)),n.next=3,P.loginUser(e,t,a);case 3:s=n.sent,0===s.data.resultCode&&(r(N(e,s.data.data.userId)),r(j(!0)),r(function(){var e=Object(O.a)(v.a.mark((function e(t){var a,n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(w(!0)),e.next=3,P.authUser();case 3:a=e.sent,n=a.data,r=n.data,0===n.resultCode&&t(S(r.login)),t(w(!1));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),r(w(!1));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})((function(e){var t=e.login,a=e.isAuth;return r.a.createElement("div",{className:"login"},a?r.a.createElement(p.a,{to:"/profile"}):r.a.createElement(ge,{onSubmit:function(e){t(e.email,e.password,e.rememberMe)}}))})),he=a(40),ve=(a(107),function(){var e=Object(n.useState)(!0),t=Object(q.a)(e,2),a=t[0],s=t[1],c=Object(he.b)({from:{x:0},x:a?1:0,config:{duration:1e3}}).x;return r.a.createElement("div",{onClick:function(){return s(!a)},className:"welcome"},r.a.createElement(he.a.div,{style:{opacity:c.interpolate({range:[0,1],output:[.3,1]}),transform:c.interpolate({range:[0,.25,.35,.45,.55,.65,.75,1],output:[1,.97,.9,1.1,.9,1.1,1.03,1]}).interpolate((function(e){return"scale(".concat(e,")")}))}},"Welcome"),r.a.createElement("img",{className:"welcome__img",src:"https://cdn.pixabay.com/photo/2016/11/23/17/22/illuminated-1853924_960_720.jpg",alt:"welcome"}))}),Oe=function(e){return{type:"users/FOLLOW_USER",userId:e}},Ne=function(e){return{type:"users/UNFOLLOW_USER",userId:e}},Se=function(e){return{type:"users/SET_CURRENT_PAGE",currentPage:e}},je=function(e){return{type:"users/SET_IS_LOADING",isLoading:e}},we=function(e,t){return{type:"users/SET_FOLLOWING_IN_PROCESS",followingProcess:e,userId:t}},ye=new k,xe=function(e,t,a){a===Oe?ye.followUser(t).then((function(a){0===a.data.resultCode&&e(Oe(t)),e(we(!1,t))})):a===Ne&&ye.unfollowUser(t).then((function(a){0===a.data.resultCode&&e(Ne(t)),e(we(!1,t))}))},ke=(a(108),function(e){var t=e.userId,a=e.userFollow,n=e.userName,s=e.status,c=e.img,l=e.followingInProcess,o=e.follow,u=e.unfollow;return r.a.createElement("div",{className:"user"},r.a.createElement("div",{className:"user__avatar"},r.a.createElement(m.b,{to:"profile/".concat(t)},r.a.createElement(C,{img:c||K.a})),a?r.a.createElement("button",{disabled:l.some((function(e){return e===t})),onClick:function(){return u(t)},className:"user__btn user__btn_sub"},"\u043e\u0442\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"):r.a.createElement("button",{disabled:l.some((function(e){return e===t})),onClick:function(){return o(t)},className:"user__btn user__btn_unsub"},"\u043f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f")),r.a.createElement("div",{className:"user__box"},r.a.createElement("div",{className:"user__info"},r.a.createElement("h2",{className:"user__name"},n),r.a.createElement("span",{className:"user__status"},s))))}),Pe=(a(109),a(110),function(e){for(var t=e.totalCount,a=e.pageSize,s=e.setPage,c=e.currentPage,l=e.portionSize,o=void 0===l?5:l,u=[],i=Math.ceil(t/a),m=1;m<=i;m++)u.push(m);var p=Object(n.useState)(1),f=Object(q.a)(p,2),d=f[0],b=f[1],E=Math.ceil(i/o),g=(d-1)*a+1,_=d*a;return r.a.createElement("div",null,r.a.createElement("div",null,d>1&&r.a.createElement("button",{className:"paginator paginator_nav",onClick:function(){return b(d-1)}},"Prev"),u.filter((function(e){return e>=g&&e<=_})).map((function(e){return r.a.createElement("button",{onClick:function(){return s(e)},key:e,className:c===e?"paginator active":"paginator"},e)})),E>d&&r.a.createElement("button",{className:"paginator paginator_nav",onClick:function(){return b(d+1)}},"Next")))}),Te=function(e){var t=e.usersData,a=e.totalCount,n=e.pageSize,s=e.currentPage,c=e.setPage,l=e.isLoading,o=e.followingInProcess,u=e.follow,i=e.unfollow;return r.a.createElement("div",{className:"users"},r.a.createElement("h2",{className:"users__title"},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"),r.a.createElement(Pe,{totalCount:a,pageSize:n,currentPage:s,setPage:c}),l?r.a.createElement(d.a,{label:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c \u0441\u043f\u0438\u0441\u043e\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439..."}):t.map((function(e){return r.a.createElement(ke,{followingInProcess:o,userFollow:e.followed,userId:e.id,key:e.id,img:e.photos.small,follow:u,unfollow:i,status:e.status,userName:e.name})})))},Ae=a(53),Ie=function(e){return e.users.usersData},Ue=function(e){return e.users.currentPage},Ce=function(e){return e.users.totalCount},De=function(e){return e.users.pageSize},Le=function(e){return e.users.isLoading},Re=function(e){return e.users.followingInProcess},ze=(Object(Ae.a)(Ie,(function(e){return e.filter((function(e){return!0}))})),function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).setPage=function(t){var a=e.props,n=a.pageSize;(0,a.getUsers)(t,n)},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,a=e.pageSize;(0,e.getUsers)(t,a)}},{key:"render",value:function(){var e=this.props,t=e.usersData,a=e.totalCount,n=e.pageSize,s=e.currentPage,c=e.isLoading,l=e.followingInProcess,o=e.follow,u=e.unfollow;return r.a.createElement(Te,{usersData:t,totalCount:a,pageSize:n,currentPage:s,setPage:this.setPage,follow:o,followingInProcess:l,unfollow:u,isLoading:c})}}]),a}(n.Component)),Fe=Object(f.b)((function(e){return{usersData:Ie(e),currentPage:Ue(e),totalCount:Ce(e),pageSize:De(e),isLoading:Le(e),followingInProcess:Re(e)}}),{getUsers:function(e,t){return function(){var a=Object(O.a)(v.a.mark((function a(n){var r;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(je(!0)),a.next=3,ye.getUsers(e,t);case 3:r=a.sent,n({type:"users/SET_USERS",users:r.items}),n(je(!1)),n({type:"users/SET_TOTAL_COUNT",totalCount:r.totalCount}),n(Se(e));case 8:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},follow:function(e){return function(t){xe(t,e,Oe)}},unfollow:function(e){return function(t){xe(t,e,Ne)}}})(ze),Me=(a(111),function(e){var t=e.userName,a=e.userSurname,n=e.img;return r.a.createElement("div",{className:"friend-item"},r.a.createElement(C,{img:n}),r.a.createElement("div",{className:"friend-item__name"},t," ",a),r.a.createElement("div",{className:"friend-item__fit"},r.a.createElement($,{cl:"edit",color:"#3498db",icon:E.r}),r.a.createElement($,{cl:"star",color:"#f1c40f",icon:E.l}),r.a.createElement($,{cl:"lock",color:"#34495e",icon:E.t}),r.a.createElement($,{cl:"times",color:"#e74c3c",icon:E.u})))}),Ge=(a(112),Object(V.d)(G,Object(f.b)((function(e){return{friends:e.users.friends}})))((function(e){var t=e.friends;return r.a.createElement("div",{className:"friends"},r.a.createElement("h2",{className:"friends__title"},"\u0414\u0440\u0443\u0437\u044c\u044f"),t.map((function(e){return r.a.createElement(Me,{key:e.userId,userName:e.userName,userSurname:e.userSurname,img:e.img})})))}))),We=(a(113),Object(n.lazy)((function(){return a.e(3).then(a.bind(null,119))}))),He=Object(n.lazy)((function(){return a.e(4).then(a.bind(null,120))})),Ke=Object(n.lazy)((function(){return a.e(5).then(a.bind(null,121))})),Je=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(m.a,null,r.a.createElement(A,null),r.a.createElement(R,{isAuth:this.props.isAuth}),r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/profile/:userId?"},r.a.createElement(ce,null)),r.a.createElement(p.b,{path:"/dialogs"},r.a.createElement(fe,null)),r.a.createElement(p.b,{path:"/news"},b(Ke)),r.a.createElement(p.b,{path:"/friends"},r.a.createElement(Ge,null)),r.a.createElement(p.b,{path:"/music"},b(We)),r.a.createElement(p.b,{path:"/users"},r.a.createElement(Fe,null)),r.a.createElement(p.b,{path:"/settings"},b(He)),r.a.createElement(p.b,{path:"/login"},r.a.createElement(_e,null)),r.a.createElement(p.b,{path:"/"},r.a.createElement(ve,null)))))}}]),a}(n.Component),qe=Object(f.b)((function(e){return{isAuth:e.auth.isAuth}}))(Je),Be=a(54),Xe=a(20),Ve=a(2),Ye={dialogsData:[{id:1,label:"\u0410\u043d\u0434\u0440\u0435\u0439"}],messageData:[{id:1,label:"\u0410\u043d\u0434\u0440\u0435\u0439",text:"\u041f\u0440\u0438\u0432\u0435\u0442 \u043a\u0430\u043a \u0434\u0435\u043b\u0430? \u042f \u0438\u0437\u0443\u0447\u0430\u044e)",img:"https://images.pexels.com/photos/4597126/pexels-photo-4597126.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}]},Qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"dialogs/SEND_MESSAGE":var a={id:1,label:e.messageData[0].label,text:t.messageText,img:e.messageData[0].img};return""===t.messageText?e:Object(Ve.a)(Object(Ve.a)({},e),{},{messageData:[].concat(Object(Xe.a)(e.messageData),[a])});default:return e}},Ze={postData:[],userProfile:null,userStatus:""},$e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:var a={id:6,text:t.postText,likeCount:0,dislikeCount:0};return Object(Ve.a)(Object(Ve.a)({},e),{},{postData:[].concat(Object(Xe.a)(e.postData),[a])});case"profile/SET_USER_PROFILE":return Object(Ve.a)(Object(Ve.a)({},e),{},{userProfile:t.userProfile});case"profile/SET_USER_STATUS":return Object(Ve.a)(Object(Ve.a)({},e),{},{userStatus:t.userStatus});default:return e}},et={friends:[{id:1,label:"\u0410\u043d\u0434\u0440\u0435\u0439",img:"https://images.pexels.com/photos/4597126/pexels-photo-4597126.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},{id:2,label:"\u0421\u0430\u0448\u0430",img:"https://images.pexels.com/photos/213780/pexels-photo-213780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},{id:3,label:"\u0410\u043b\u0435\u043a\u0441",img:"https://images.pexels.com/photos/1122409/pexels-photo-1122409.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}]},tt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et,t=arguments.length>1?arguments[1]:void 0;return t.type,e},at={usersData:[],friends:[{userId:1,follow:!1,userName:"\u0410\u043d\u0434\u0440\u0435\u0439",userSurname:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u043e\u0432",status:"\u041f\u0440\u0438\u0432\u0435\u0442 \u0432\u0441\u0435\u043c!",img:"https://images.pexels.com/photos/4597126/pexels-photo-4597126.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",location:{cityName:"Temirtay",countryName:"Kazakhstan"}},{userId:2,follow:!1,userName:"\u0421\u0430\u0448\u0430",userSurname:"\u0418\u0432\u0430\u043d\u043e\u0432",status:"\u041f\u0440\u0438\u0432\u0435\u0442 \u0432\u0441\u0435\u043c!!",img:"https://images.pexels.com/photos/213780/pexels-photo-213780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",location:{cityName:"Temirtay",countryName:"Kazakhstan"}},{userId:3,follow:!1,userName:"\u0410\u043b\u0435\u043a\u0441",userSurname:"\u0420\u0438\u043a",status:"\u041f\u0440\u0438\u0432\u0435\u0442 \u0432\u0441\u0435\u043c!!",img:"https://images.pexels.com/photos/1122409/pexels-photo-1122409.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",location:{cityName:"Aktau",countryName:"Kazakhstan"}}],pageSize:5,totalCount:0,currentPage:1,isLoading:!1,followingInProcess:[]},nt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:at,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"users/FOLLOW_USER":return Object(Ve.a)(Object(Ve.a)({},e),{},{usersData:e.usersData.map((function(e){return e.id===t.userId?Object(Ve.a)(Object(Ve.a)({},e),{},{followed:!0}):e}))});case"users/UNFOLLOW_USER":return Object(Ve.a)(Object(Ve.a)({},e),{},{usersData:e.usersData.map((function(e){return e.id===t.userId?Object(Ve.a)(Object(Ve.a)({},e),{},{followed:!1}):e}))});case"users/SET_USERS":return Object(Ve.a)(Object(Ve.a)({},e),{},{usersData:Object(Xe.a)(t.users)});case"users/SET_TOTAL_COUNT":return Object(Ve.a)(Object(Ve.a)({},e),{},{totalCount:t.totalCount});case"users/SET_CURRENT_PAGE":return Object(Ve.a)(Object(Ve.a)({},e),{},{currentPage:t.currentPage});case"users/SET_IS_LOADING":return Object(Ve.a)(Object(Ve.a)({},e),{},{isLoading:t.isLoading});case"users/SET_FOLLOWING_IN_PROCESS":return Object(Ve.a)(Object(Ve.a)({},e),{},{followingInProcess:t.followingProcess?[].concat(Object(Xe.a)(e.followingInProcess),[t.userId]):e.followingInProcess.filter((function(e){return t.userId!==e}))});default:return e}},rt={email:null,userId:null,login:null,isAuth:!1,isLoading:!1},st=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_AUTH_USER_DATA":return Object(Ve.a)(Object(Ve.a)({},e),t.data);case"auth/AUTH_USER":return Object(Ve.a)(Object(Ve.a)({},e),{},{isAuth:t.isAuth});case"auth/SET_LOADING":return Object(Ve.a)(Object(Ve.a)({},e),{},{isLoading:t.isLoading});case"auth/SET_USER_LOGIN":return Object(Ve.a)(Object(Ve.a)({},e),{},{login:t.login});default:return e}},ct=Object(V.c)({profile:$e,dialogs:Qe,sidebar:tt,users:nt,auth:st}),lt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||V.d,ot=Object(V.e)(ct,lt(Object(V.a)(Be.a)));c.a.render(r.a.createElement(f.a,{store:ot},r.a.createElement(qe,null)),document.getElementById("root"))}]),[[55,1,2]]]);
//# sourceMappingURL=main.c6cad166.chunk.js.map
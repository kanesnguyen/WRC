(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{225:function(e,t,n){},226:function(e,t,n){},227:function(e,t,n){},265:function(e,t){},267:function(e,t){},32:function(e,t,n){e.exports={options:"Options_options__pQ0gU",inputgroup:"Options_inputgroup__e89m-",btn:"Options_btn__3u3As",btnDiv:"Options_btnDiv__1P46K",phone:"Options_phone__3-u2v",answer:"Options_answer__OUXhl",decline:"Options_decline__31PIw",share_icon:"Options_share_icon__1K_rm",share_border:"Options_share_border__1XntX"}},518:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(26),s=n.n(i),o=(n(225),n(226),n(210)),r=n(22),l=n(117),d=n(27),u=Object(c.createContext)(),j=(n(227),n(527)),b=n(218),m=n(528),h=(n.p,n.p+"static/media/video.efc11746.svg"),f=n(141),O=n.p+"static/media/video-off.34efe227.svg",v=n.p+"static/media/profile.15422c43.svg",p=n.p+"static/media/msg_illus.ff502f13.svg",g=n.p+"static/media/msg.da92dd7a.svg",x=n(530),y=n(142),_=n.n(y),w=n(6),C=Object(f.io)("https://video-chat-india.herokuapp.com/"),N=function(e){var t=e.children,n=Object(c.useState)(!1),a=Object(d.a)(n,2),i=a[0],s=a[1],o=Object(c.useState)(!1),r=Object(d.a)(o,2),j=r[0],b=r[1],m=Object(c.useState)(),h=Object(d.a)(m,2),f=h[0],O=h[1],v=Object(c.useState)([]),p=Object(d.a)(v,2),g=p[0],x=p[1],y=Object(c.useState)(""),N=Object(d.a)(y,2),k=N[0],S=N[1],R=Object(c.useState)({}),A=Object(d.a)(R,2),U=A[0],E=A[1],I=Object(c.useState)(""),z=Object(d.a)(I,2),D=z[0],P=z[1],T=Object(c.useState)(""),V=Object(d.a)(T,2),W=V[0],L=V[1],M=Object(c.useState)(""),J=Object(d.a)(M,2),B=J[0],F=J[1],X=Object(c.useRef)(),H=Object(c.useRef)(),K=Object(c.useRef)();Object(c.useEffect)((function(){navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){O(e),X.current.srcObject=e})),localStorage.getItem("name")&&S(localStorage.getItem("name")),C.on("me",(function(e){return P(e)})),C.on("endCall",(function(){window.location.reload()})),C.on("callUser",(function(e){var t=e.from,n=e.name,c=e.signal;E({isReceivingCall:!0,from:t,name:n,signal:c})})),C.on("msgRcv",(function(e){e.name;var t=e.msg,n=e.sender;F({value:t,sender:n}),setTimeout((function(){F({})}),2e3)}))}),[]);return Object(w.jsx)(u.Provider,{value:{call:U,callAccepted:i,myVideo:X,userVideo:H,stream:f,name:k,setName:S,callEnded:j,me:D,callUser:function(e){var t=new _.a({initiator:!0,trickle:!1,stream:f});L(e),t.on("signal",(function(t){C.emit("callUser",{userToCall:e,signalData:t,from:D,name:k})})),t.on("stream",(function(e){H.current.srcObject=e})),C.on("callAccepted",(function(e){s(!0),t.signal(e)})),K.current=t},leaveCall:function(){b(!0),K.current.destroy(),C.emit("endCall",{id:W}),window.location.reload()},answerCall:function(){s(!0),L(U.from);var e=new _.a({initiator:!1,trickle:!1,stream:f});e.on("signal",(function(e){C.emit("answerCall",{signal:e,to:U.from})})),e.on("stream",(function(e){H.current.srcObject=e})),e.signal(U.signal),K.current=e},sendMsg:function(e){C.emit("msgUser",{name:k,to:W,msg:e,sender:k});var t={};t.msg=e,t.type="sent",t.timestamp=Date.now(),t.sender=k,x([].concat(Object(l.a)(g),[t]))},msgRcv:B,chat:g,setChat:x,setMsgRcv:F,setOtherUser:L,leaveCall1:function(){C.emit("endCall",{id:W})}},children:t})},k=j.a.Search,S=function(){var e=Object(c.useContext)(u),t=e.call,n=e.callAccepted,a=e.myVideo,i=e.userVideo,s=e.stream,o=e.name,r=(e.setName,e.callEnded),j=(e.me,e.callUser,e.leaveCall,e.answerCall,e.sendMsg),f=e.msgRcv,y=e.chat,_=e.setChat,N=Object(c.useState)(!0),S=Object(d.a)(N,2),R=S[0],A=S[1],U=Object(c.useState)(!0),E=Object(d.a)(U,2),I=E[0],z=E[1],D=Object(c.useState)(!0),P=Object(d.a)(D,2),T=(P[0],P[1],Object(c.useState)("")),V=Object(d.a)(T,2),W=V[0],L=V[1],M=Object(c.useState)(!1),J=Object(d.a)(M,2),B=J[0],F=J[1];C.on("msgRcv",(function(e){e.name;var t=e.msg,n=e.sender,c={};c.msg=t,c.type="rcv",c.sender=n,c.timestamp=Date.now(),_([].concat(Object(l.a)(y),[c]))}));var X=Object(c.useRef)();Object(c.useEffect)((function(){(null===X||void 0===X?void 0:X.current)&&X.current.scrollIntoView({behavior:"smooth"})}),[y]);return Object(c.useEffect)((function(){f.value&&!B&&b.a.open({message:"",description:"".concat(f.sender,": ").concat(f.value),icon:Object(w.jsx)(x.a,{style:{color:"#108ee9"}})})}),[f]),Object(w.jsxs)("div",{className:"grid",children:[s?Object(w.jsxs)("div",{style:{textAlign:"center"},className:"card",children:[Object(w.jsx)("div",{style:{placeSelf:"center"},children:Object(w.jsx)("h3",{children:o})}),Object(w.jsxs)("div",{style:{position:"relative"},children:[Object(w.jsx)("video",{playsInline:!0,muted:!0,ref:a,autoPlay:!0,className:I?"card1":"hidden"}),!I&&Object(w.jsx)("img",{src:v,alt:"user avatar",className:"avatar"})]}),Object(w.jsxs)("div",{className:"iconsDiv",children:[Object(w.jsx)("div",{className:"icons",onClick:function(){s.getAudioTracks()[0].enabled=!R,A(!R)},children:R?Object(w.jsx)("i",{class:"fa fa-microphone ",id:"icon","aria-hidden":"true"}):Object(w.jsx)("i",{className:"fa fa-microphone-slash",id:"icon","aria-hidden":"true"})}),n&&!r&&Object(w.jsx)("div",{className:"icons",onClick:function(){F(!B)},children:Object(w.jsx)("img",{src:g,alt:"chat icon"})}),Object(w.jsxs)(m.a,{title:"Chat",footer:null,visible:B,onOk:function(){F(!1)},onCancel:function(){F(!1)},style:{maxHeight:"100px"},children:[y.length?Object(w.jsxs)("div",{className:"msg_flex",children:[y.map((function(e){return Object(w.jsx)("div",{className:"sent"==e.type?"msg_sent":"msg_rcv",children:e.msg})})),Object(w.jsx)("div",{ref:X,id:"no_border"})]}):Object(w.jsx)("div",{className:"chat_img_div",children:Object(w.jsx)("img",{src:p,alt:"msg_illus",className:"img_illus"})}),Object(w.jsx)(k,{placeholder:"your message",allowClear:!0,className:"input_msg",enterButton:"Send \ud83d\ude80",onChange:function(e){return L(e.target.value)},value:W,size:"large",onSearch:function(e){e&&e.length&&j(e),L("")}})]}),Object(w.jsx)("div",{className:"icons",onClick:function(){s.getVideoTracks()[0].enabled=!s.getVideoTracks()[0].enabled,z(!I)},children:I?Object(w.jsx)("img",{src:h,alt:"video icon",id:"icon"}):Object(w.jsx)("img",{src:O,alt:"video icon",id:"icon"})})]})]}):Object(w.jsxs)("div",{class:"bouncing-loader",children:[Object(w.jsx)("div",{}),Object(w.jsx)("div",{}),Object(w.jsx)("div",{})]}),n&&!r&&i&&Object(w.jsxs)("div",{className:"card2",style:{textAlign:"center"},children:[Object(w.jsx)("div",{style:{alignSelf:"center"},children:Object(w.jsx)("h3",{style:{alignSelf:"center"},children:t.name})}),Object(w.jsx)("div",{style:{position:"relative"},children:Object(w.jsx)("video",{playsInline:!0,autoPlay:!0,ref:i,className:i?"card1":"hidden"})})]})]})},R=n(206),A=n.n(R),U=n(61),E=n(213),I=n(529),z=n.p+"static/media/phone.8cb1f203.gif",D=n.p+"static/media/teams.23d1d865.mp3",P=n(32),T=n(207),V=n.p+"static/media/hang.786cd8c4.svg",W=n(521),L=n(522),M=n(523),J=n(524),B=n(525),F=n(526),X=n(531),H=n(532),K=n(122),Y=n(533),Q=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(!1),s=Object(d.a)(i,2),o=s[0],r=s[1],l=Object(c.useRef)(),b=Object(c.useContext)(u),h=b.call,f=b.callAccepted,O=(b.myVideo,b.userVideo,b.stream,b.name),v=b.setName,p=b.callEnded,g=b.me,x=b.callUser,y=b.leaveCall,_=b.answerCall,C=(b.otherUser,b.setOtherUser),N=b.leaveCall1;Object(c.useEffect)((function(){var e,t;o?null===l||void 0===l||null===(t=l.current)||void 0===t||t.play():null===l||void 0===l||null===(e=l.current)||void 0===e||e.pause()}),[o]);return Object(c.useEffect)((function(){h.isReceivingCall&&!f?r(!0):r(!1)}),[h.isReceivingCall]),Object(w.jsxs)("div",{className:P.options,children:[Object(w.jsxs)("div",{children:[Object(w.jsx)("h2",{children:"Account Info"}),Object(w.jsx)(j.a,{size:"large",placeholder:"Your name",prefix:Object(w.jsx)(X.a,{}),value:O,onChange:function(e){v(e.target.value),localStorage.setItem("name",e.target.value)},className:P.inputgroup}),Object(w.jsx)("br",{}),Object(w.jsx)(T.CopyToClipboard,{text:g,children:Object(w.jsx)(U.a,{type:"primary",icon:Object(w.jsx)(H.a,{}),className:P.btn,onClick:function(){return E.b.success("Code copied successfully!")},children:"Copy code"})}),Object(w.jsxs)("div",{className:P.share_icons,children:[Object(w.jsx)(W.a,{url:"https://video-chat-mihir.web.app/",title:'Join this meeting with the given code "'.concat(g,'"\n'),separator:"Link: ",className:P.share_icon,children:Object(w.jsx)(L.a,{size:24,round:!0})}),Object(w.jsx)(M.a,{url:"https://video-chat-mihir.web.app/",title:'Join this meeting with the given code "'.concat(g,'"\n'),className:P.share_icon,children:Object(w.jsx)(J.a,{size:24,round:!0})}),Object(w.jsx)(B.a,{url:"https://video-chat-mihir.web.app/",title:"Join this meeting with the given code ".concat(g," \n"),className:P.share_icon,children:Object(w.jsx)(F.a,{size:24,round:!0,className:P.share_border})})]})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("h2",{children:"Make a call"}),Object(w.jsx)(j.a,{placeholder:"Enter code to call",size:"large",className:P.inputgroup,value:n,onChange:function(e){return a(e.target.value)},prefix:Object(w.jsx)(X.a,{className:"site-form-item-icon"}),suffix:Object(w.jsx)(I.a,{title:"Enter code of the other user",children:Object(w.jsx)(K.a,{style:{color:"rgba(0,0,0,.45)"}})})}),Object(w.jsx)("br",{}),f&&!p?Object(w.jsxs)(U.a,{type:"primary",onClick:y,className:P.btn,children:[Object(w.jsx)("img",{src:V,alt:"hang up",style:{height:"15px"}}),"\xa0 Hang up"]}):Object(w.jsx)(U.a,{type:"primary",icon:Object(w.jsx)(Y.a,{}),onClick:function(){O.length?x(n):E.b.error("Please enter your name to call!")},className:P.btn,children:"Call"})]}),Object(w.jsx)("audio",{src:D,loop:!0,autpolay:!0,ref:l}),h.isReceivingCall&&!f&&Object(w.jsxs)(m.a,{title:"Incoming Call",visible:o,onOk:function(){r(!1)},onCancel:function(){r(!1),N(),window.location.reload()},footer:null,children:[C(h.from),Object(w.jsx)("div",{style:{display:"flex",justifyContent:"space-around"},children:Object(w.jsxs)("h1",{children:[h.name," is calling you:"," ",Object(w.jsx)("img",{src:z,alt:"phone ringing",className:P.phone,style:{display:"inline-block"}})]})}),Object(w.jsxs)("div",{className:P.btnDiv,children:[Object(w.jsx)(U.a,{variant:"contained",className:P.answer,color:"#29bb89",icon:Object(w.jsx)(Y.a,{}),onClick:function(){_(),l.current.pause()},children:"Answer"}),Object(w.jsx)(U.a,{variant:"contained",className:P.decline,color:"#29bb89",icon:Object(w.jsx)(Y.a,{}),onClick:function(){r(!1),l.current.pause()},children:"Decline"})]})]})]})},$=function(){return Object(c.useEffect)((function(){navigator.onLine||alert("Connect to internet!")}),[navigator]),Object(w.jsx)(N,{children:Object(w.jsxs)("div",{className:"App",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},children:[Object(w.jsx)(A.a,{params:{particles:{number:{value:25,density:{enable:!0,value_area:1803.4120608655228}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:2,color:"#ffffff"},polygon:{nb_sides:4},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:5,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!1,distance:0,color:"#ffffff",opacity:.3687847739990702,width:.6413648243462091},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"repulse"},onclick:{enable:!1,mode:"bubble"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:50,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}}),Object(w.jsxs)("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},children:[Object(w.jsx)(S,{}),Object(w.jsx)(Q,{})]})]})})},q=(n(513),n(514),function(){return Object(w.jsx)(o.a,{children:Object(w.jsx)(r.c,{children:Object(w.jsx)(r.a,{path:"/",component:$})})})}),G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,534)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))},Z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ee(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(q,{})}),document.getElementById("root")),G(),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Z?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ee(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ee(t,e)}))}}()}},[[518,1,2]]]);
//# sourceMappingURL=main.ebc8066e.chunk.js.map
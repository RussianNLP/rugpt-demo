(this["webpackJsonprugpt-demo"]=this["webpackJsonprugpt-demo"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),c=n(8),s=n(9),i=n(4),u=n(5),o=n(7),l=n(6),d=n(1),j=n.n(d),p=n(10),h=n.n(p),b=(n(17),n(0)),v=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState(Object(s.a)({},e.target.name,e.target.value))},a.handleSubmit=function(){var e=Object(c.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.mainInput.value="Loading...",t.preventDefault(),e.next=4,fetch("https://api.aicloud.sbercloud.ru/public/v1/public_inference/gpt3/predict",{headers:{"Content-Type":"application/json"},credentials:"same-origin",method:"POST",body:JSON.stringify({text:a.state.text_to_generate})}).catch((function(e){if(e.response){var t=n.json();console.log("Smth: ",t),a.setState({receivedMessage:t.predictions});var r=a.state.text_to_generate+"\nRuGPT3: "+a.state.receivedMessage;a.mainInput.value=r}else a.mainInput.value="\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u043d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0432\u0430\u0448 \u0437\u0430\u043f\u0440\u043e\u0441 \u0438\u0437-\u0437\u0430 \u0437\u0430 \u0432\u044b\u0441\u043e\u043a\u043e\u0439 \u043d\u0430\u0433\u0440\u0443\u0437\u043a\u0438. \u041f\u0440\u0438\u043d\u043e\u0441\u0438\u043c \u0441\u0432\u043e\u0438 \u0438\u0437\u0432\u0438\u043d\u0435\u043d\u0438\u044f. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0436\u0435"}));case 4:n=e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={text_to_generate:null,receivedMessage:"Loading"},a.mainInput={},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("form",{onSubmit:this.handleSubmit,id:"demoform",class:"w-100 justify-content-center",children:[Object(b.jsx)("div",{children:Object(b.jsx)("p",{class:"text-center",children:Object(b.jsx)("b",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442:"})})}),Object(b.jsx)("div",{class:"row",children:Object(b.jsx)("textarea",{ref:function(t){return e.mainInput=t},value:this.state.value,name:"text_to_generate",onChange:this.handleChange,rows:"15",class:"textareacls"})}),Object(b.jsx)("div",{class:"row",children:Object(b.jsx)("input",{type:"submit",value:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u044c",class:"btn btn-success"})})]})}}]),n}(j.a.Component),m=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state="\u041d\u0430 \u0441\u043b\u043e\u0432\u0430\u0445 \u0442\u044b \u041b\u0435\u0432 \u0422\u043e\u043b\u0441\u0442\u043e\u0439, \u0430 \u043d\u0430 \u0434\u0435\u043b\u0435 ",a}return Object(u.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)("header",{className:"App-header",children:Object(b.jsx)(v,{})})})}}]),n}(j.a.Component);h.a.render(Object(b.jsx)(j.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root"))},17:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.e33ec27a.chunk.js.map
(this["webpackJsonprugpt-demo"]=this["webpackJsonprugpt-demo"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),s=n(8),c=n(9),i=n(4),o=n(5),u=n(7),l=n(6),d=n(1),j=n.n(d),p=n(10),b=n.n(p),h=(n(17),n(0)),x=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState(Object(c.a)({},e.target.name,e.target.value))},a.handleSubmit=function(){var e=Object(s.a)(r.a.mark((function e(t){var n,s,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Text prompt: ",{text:JSON.stringify(a.state.text_to_generate)}),a.mainInput.value="Loading...",t.preventDefault(),e.next=5,fetch("https://api.aicloud.sbercloud.ru/public/v1/public_inference/gpt3/predict",{headers:{"Content-Type":"application/json"},credentials:"same-origin",method:"POST",body:JSON.stringify({text:a.state.text_to_generate})});case 5:return n=e.sent,e.next=8,n.json();case 8:s=e.sent,a.setState({receivedMessage:s.predictions}),c=a.state.text_to_generate+"\nRuGPT3: "+a.state.receivedMessage,console.log("response: ",c),a.mainInput.value=c;case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={text_to_generate:null,receivedMessage:"Loading"},a.mainInput={},a}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("form",{onSubmit:this.handleSubmit,id:"demoform",class:"w-100 justify-content-center",children:[Object(h.jsx)("div",{children:Object(h.jsx)("p",{class:"text-center",children:Object(h.jsx)("b",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442:"})})}),Object(h.jsx)("div",{class:"row",children:Object(h.jsx)("textarea",{ref:function(t){return e.mainInput=t},value:this.state.value,name:"text_to_generate",onChange:this.handleChange,rows:"15",class:"textareacls"})}),Object(h.jsx)("div",{class:"row",children:Object(h.jsx)("input",{type:"submit",value:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u044c",class:"btn btn-success"})})]})}}]),n}(j.a.Component),v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state="\u041d\u0430 \u0441\u043b\u043e\u0432\u0430\u0445 \u0442\u044b \u041b\u0435\u0432 \u0422\u043e\u043b\u0441\u0442\u043e\u0439, \u0430 \u043d\u0430 \u0434\u0435\u043b\u0435 ",a}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)("header",{className:"App-header",children:Object(h.jsx)(x,{})})})}}]),n}(j.a.Component);b.a.render(Object(h.jsx)(j.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root"))},17:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.a7a8010b.chunk.js.map
(this["webpackJsonprugpt-demo"]=this["webpackJsonprugpt-demo"]||[]).push([[0],{15:function(e,t,n){},9:function(e,t,n){"use strict";n.r(t);var a=n(7),c=n(3),s=n(4),r=n(6),i=n(5),o=n(0),u=n.n(o),l=n(8),d=n.n(l),b=(n(14),n(15),n(1)),j=function(e){Object(r.a)(n,e);var t=Object(i.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).handleChange=function(e){s.setState(Object(a.a)({},e.target.name,e.target.value))},s.handleSubmit=function(e){console.log("Text prompt: ",{text:JSON.stringify(s.state.text_to_generate)}),fetch("https://api.aicloud.sbercloud.ru/public/v1/public_inference/docs",{method:"POST",body:{text:JSON.stringify(s.state.text_to_generate)},mode:"no-cors"}).then((function(e){console.log("response: ",e)}));var t=s.state.text_to_generate+"\nRuGPT3: "+s.state.receivedMessage;e.preventDefault(),s.mainInput.value=t,console.log(s.state.receivedMessage)},s.state={text_to_generate:"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043d\u0430\u0447\u0430\u043b\u043e",receivedMessage:"Text to added"},s.mainInput={},s}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("form",{onSubmit:this.handleSubmit,id:"demoform",class:"w-100 justify-content-center",children:[Object(b.jsx)("div",{children:Object(b.jsx)("p",{class:"text-center",children:Object(b.jsx)("b",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442:"})})}),Object(b.jsx)("div",{class:"row",children:Object(b.jsx)("textarea",{ref:function(t){return e.mainInput=t},value:this.state.value,name:"text_to_generate",onChange:this.handleChange,cols:"100",rows:"15"})}),Object(b.jsx)("div",{class:"row",children:Object(b.jsx)("input",{type:"submit",value:"Submit",class:"btn btn-success"})})]})}}]),n}(u.a.Component),h=function(e){Object(r.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state="\u041d\u0430 \u0441\u043b\u043e\u0432\u0430\u0445 \u0442\u044b \u041b\u0435\u0432 \u0422\u043e\u043b\u0441\u0442\u043e\u0439, \u0430 \u043d\u0430 \u0434\u0435\u043b\u0435 ",a}return Object(s.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)("header",{className:"App-header",children:Object(b.jsx)(j,{})})})}}]),n}(u.a.Component);d.a.render(Object(b.jsx)(u.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.bcbcecb4.chunk.js.map
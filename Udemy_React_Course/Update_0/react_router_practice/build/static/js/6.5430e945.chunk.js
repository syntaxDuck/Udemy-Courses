(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[6],{45:function(e,t,c){e.exports={card:"Card_card__qqahu"}},46:function(e,t,c){e.exports={form:"QuoteForm_form__1VVCF",loading:"QuoteForm_loading__FOgaO",control:"QuoteForm_control__2pFyP",actions:"QuoteForm_actions__3JPBX"}},58:function(e,t,c){"use strict";c.r(t);var n=c(0),o=c(2),r=c(38),a=c(39),s=c(40),u=c(45),i=c.n(u),l=c(1),d=function(e){return Object(l.jsx)("div",{className:i.a.card,children:e.children})},j=c(15),b=c(46),h=c.n(b),O=function(e){var t=Object(n.useState)(!1),c=Object(s.a)(t,2),r=c[0],a=c[1],u=Object(n.useRef)(),i=Object(n.useRef)();return Object(l.jsxs)(n.Fragment,{children:[Object(l.jsx)(o.a,{when:r,message:function(e){return"Are you sure you want to leave? All your entered data will be lost!"}}),Object(l.jsx)(d,{children:Object(l.jsxs)("form",{onFocus:function(){a(!0)},className:h.a.form,onSubmit:function(t){t.preventDefault();var c=u.current.value,n=i.current.value;e.onAddQuote({author:c,text:n})},children:[e.isLoading&&Object(l.jsx)("div",{className:h.a.loading,children:Object(l.jsx)(j.a,{})}),Object(l.jsxs)("div",{className:h.a.control,children:[Object(l.jsx)("label",{htmlFor:"author",children:"Author"}),Object(l.jsx)("input",{type:"text",id:"author",ref:u})]}),Object(l.jsxs)("div",{className:h.a.control,children:[Object(l.jsx)("label",{htmlFor:"text",children:"Text"}),Object(l.jsx)("textarea",{id:"text",rows:"5",ref:i})]}),Object(l.jsx)("div",{className:h.a.actions,children:Object(l.jsx)("button",{onClick:function(){a(!1)},className:"btn",children:"Add Quote"})})]})})]})};t.default=function(){var e=Object(r.a)(a.b),t=e.sendRequest,c=e.status,s=Object(o.h)();Object(n.useEffect)((function(){"completed"===c&&s.push("/quotes")}),[c,s]);return Object(l.jsx)(O,{isLoading:"pending"===c,onAddQuote:function(e){t(e)}})}}}]);
//# sourceMappingURL=6.5430e945.chunk.js.map
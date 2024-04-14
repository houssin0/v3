(this["webpackJsonpuko-react"]=this["webpackJsonpuko-react"]||[]).push([[35],{1022:function(e,t,r){"use strict";var n=r(3),o=r(12),a=r(4),i=r(0),c=(r(21),r(235)),l=r(182),s=r(309),d=r(18),b=r(66),u=r(1),j=Object(b.a)(Object(u.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),m=Object(b.a)(Object(u.jsx)("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),h=r(8),O=Object(h.a)("span")({position:"relative",display:"flex"}),f=Object(h.a)(j,{skipSx:!0})({transform:"scale(1)"}),x=Object(h.a)(m,{skipSx:!0})((function(e){var t=e.theme,r=e.ownerState;return Object(a.a)({left:0,position:"absolute",transform:"scale(0)",transition:t.transitions.create("transform",{easing:t.transitions.easing.easeIn,duration:t.transitions.duration.shortest})},r.checked&&{transform:"scale(1)",transition:t.transitions.create("transform",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.shortest})})}));var p=function(e){var t=e.checked,r=void 0!==t&&t,n=e.classes,o=void 0===n?{}:n,i=e.fontSize,c=Object(a.a)({},e,{checked:r});return Object(u.jsxs)(O,{className:o.root,ownerState:c,children:[Object(u.jsx)(f,{fontSize:i,className:o.background,ownerState:c}),Object(u.jsx)(x,{fontSize:i,className:o.dot,ownerState:c})]})},v=r(22),g=r(312),y=r(943);var C=r(113),k=r(130);function w(e){return Object(C.a)("MuiRadio",e)}var T=Object(k.a)("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary"]),F=["checked","checkedIcon","color","icon","name","onChange","size"],S=Object(h.a)(s.a,{shouldForwardProp:function(e){return Object(h.b)(e)||"classes"===e},name:"MuiRadio",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t["color".concat(Object(v.a)(r.color))]]}})((function(e){var t=e.theme,r=e.ownerState;return Object(a.a)({color:t.palette.text.secondary,"&:hover":{backgroundColor:Object(l.a)("default"===r.color?t.palette.action.active:t.palette[r.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&Object(n.a)({},"&.".concat(T.checked),{color:t.palette[r.color].main}),Object(n.a)({},"&.".concat(T.disabled),{color:t.palette.action.disabled}))}));var P=Object(u.jsx)(p,{checked:!0}),R=Object(u.jsx)(p,{}),B=i.forwardRef((function(e,t){var r,n,l,s,b=Object(d.a)({props:e,name:"MuiRadio"}),j=b.checked,m=b.checkedIcon,h=void 0===m?P:m,O=b.color,f=void 0===O?"primary":O,x=b.icon,p=void 0===x?R:x,C=b.name,k=b.onChange,T=b.size,B=void 0===T?"medium":T,W=Object(o.a)(b,F),A=Object(a.a)({},b,{color:f,size:B}),N=function(e){var t=e.classes,r=e.color,n={root:["root","color".concat(Object(v.a)(r))]};return Object(a.a)({},t,Object(c.a)(n,w,t))}(A),q=i.useContext(y.a),I=j,z=Object(g.a)(k,q&&q.onChange),M=C;return q&&("undefined"===typeof I&&(l=q.value,I="object"===typeof(s=b.value)&&null!==s?l===s:String(l)===String(s)),"undefined"===typeof M&&(M=q.name)),Object(u.jsx)(S,Object(a.a)({type:"radio",icon:i.cloneElement(p,{fontSize:null!=(r=R.props.fontSize)?r:B}),checkedIcon:i.cloneElement(h,{fontSize:null!=(n=P.props.fontSize)?n:B}),ownerState:A,classes:N,name:M,checked:I,onChange:z,ref:t},W))}));t.a=B},1024:function(e,t,r){"use strict";var n=r(14),o=r(4),a=r(12),i=r(0),c=(r(21),r(9)),l=r(235),s=r(8),d=r(18),b=r(113),u=r(130);function j(e){return Object(b.a)("MuiFormGroup",e)}Object(u.a)("MuiFormGroup",["root","row"]);var m=r(1),h=["className","row"],O=Object(s.a)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,r.row&&t.row]}})((function(e){var t=e.ownerState;return Object(o.a)({display:"flex",flexDirection:"column",flexWrap:"wrap"},t.row&&{flexDirection:"row"})})),f=i.forwardRef((function(e,t){var r=Object(d.a)({props:e,name:"MuiFormGroup"}),n=r.className,i=r.row,s=void 0!==i&&i,b=Object(a.a)(r,h),u=Object(o.a)({},r,{row:s}),f=function(e){var t=e.classes,r={root:["root",e.row&&"row"]};return Object(l.a)(r,j,t)}(u);return Object(m.jsx)(O,Object(o.a)({className:Object(c.a)(f.root,n),ownerState:u,ref:t},b))})),x=r(30),p=r(86),v=r(943),g=r(189),y=["actions","children","defaultValue","name","onChange","value"],C=i.forwardRef((function(e,t){var r=e.actions,c=e.children,l=e.defaultValue,s=e.name,d=e.onChange,b=e.value,u=Object(a.a)(e,y),j=i.useRef(null),h=Object(p.a)({controlled:b,default:l,name:"RadioGroup"}),O=Object(n.a)(h,2),C=O[0],k=O[1];i.useImperativeHandle(r,(function(){return{focus:function(){var e=j.current.querySelector("input:not(:disabled):checked");e||(e=j.current.querySelector("input:not(:disabled)")),e&&e.focus()}}}),[]);var w=Object(x.a)(t,j),T=Object(g.a)(s);return Object(m.jsx)(v.a.Provider,{value:{name:T,onChange:function(e){k(e.target.value),d&&d(e,e.target.value)},value:C},children:Object(m.jsx)(f,Object(o.a)({role:"radiogroup",ref:w},u,{children:c}))})}));t.a=C},1068:function(e,t,r){"use strict";r.r(t);var n=r(15),o=r(3),a=r(1080),i=r(8),c=r(816),l=r(157),s=r(815),d=r(1024),b=r(1022),u=r(469),j=r(890),m=r(806),h=r(46),O=r(237),f=r(32),x=r(308),p=r(912),v=r(0),g=r(904),y=r(34),C=r(38),k=r(186),w=r(1),T=Object(i.a)(c.a)((function(){return{"& .MuiTypography-root":{fontWeight:600}}})),F=Object(i.a)(h.a)((function(e){var t,r=e.theme;return t={marginBottom:30},Object(o.a)(t,r.breakpoints.down(750),{"& .MuiFormGroup-root":{marginBottom:10}}),Object(o.a)(t,r.breakpoints.down(394),{"& .MuiButton-root, & .buttonWrapper":{width:"100%"},"& .MuiButton-outlined":{marginRight:0,marginBottom:10}}),t}));t.default=function(){Object(p.a)("Add Invoice");var e=Object(g.a)().t,t=Object(y.g)(),r=function(){return t("/dashboard/invoice-list")},o={orderNo:Object(C.a)(),orderDate:new Date,billTo:"",billToAddress:"",billToPhone:"",billFrom:"",billFromAddress:"",billFromPhone:"",status:"Pending",items:[{id:1,itemName:"",itemPrice:0,itemQuantity:0}]},i=k.e().shape({billTo:k.f().required("Bill To is Required!"),billToAddress:k.f().required("Address is Required!"),billToPhone:k.d().positive().required("Phone is Required!"),billFrom:k.f().required("Bill From is Required!"),billFromAddress:k.f().required("Address is Required!"),billFromPhone:k.d().positive().required("Phone is Required!"),status:k.f().default((function(){return"Pending"})),items:k.a().of(k.e().shape({itemName:k.f().required("Item Name Required"),itemPrice:k.d().required("Item Name Required"),itemQuantity:k.d().required("Item Name Required")}))});return Object(w.jsx)(l.a,{pt:2,pb:4,children:Object(w.jsxs)(s.a,{sx:{padding:4},children:[Object(w.jsx)(f.c,{marginBottom:2,children:e("Order Status")}),Object(w.jsx)(x.c,{initialValues:o,validationSchema:i,onSubmit:function(e){console.log(e)},children:function(t){var o=t.values,i=t.errors,c=t.touched,s=t.setFieldValue,p=t.handleChange,g=t.handleSubmit;return Object(w.jsxs)("form",{onSubmit:g,children:[Object(w.jsxs)(F,{justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",children:[Object(w.jsx)(d.a,{row:!0,name:"status",defaultValue:o.status,onChange:p,children:["Pending","Processing","Delivered"].map((function(t){return Object(w.jsx)(T,{value:t,label:e(t),control:Object(w.jsx)(b.a,{})},t)}))}),Object(w.jsxs)(l.a,{className:"buttonWrapper",children:[Object(w.jsx)(u.a,{fullWidth:!0,variant:"outlined",onClick:r,sx:{fontSize:12,width:124,color:"text.disabled",borderColor:"text.disabled",marginRight:2},children:e("Cancel")}),Object(w.jsx)(u.a,{fullWidth:!0,type:"submit",variant:"contained",sx:{width:124,fontSize:12},children:e("Save")})]})]}),Object(w.jsxs)(j.a,{container:!0,spacing:3,children:[Object(w.jsxs)(j.a,{item:!0,md:4,sm:6,xs:12,children:[Object(w.jsx)(f.h,{display:"block",mb:1,children:"Order Number"}),Object(w.jsx)(O.a,{fullWidth:!0,disabled:!0,name:"orderNo",value:o.orderNo,onChange:p})]}),Object(w.jsxs)(j.a,{item:!0,md:4,sm:6,xs:12,children:[Object(w.jsx)(f.h,{display:"block",mb:1,children:"Order Date"}),Object(w.jsx)(a.a,{value:o.orderDate,onChange:function(e){return s("orderDate",e)},renderInput:function(e){return Object(w.jsx)(O.a,Object(n.a)(Object(n.a)({},e),{},{fullWidth:!0}))}})]})]}),Object(w.jsx)(m.a,{sx:{my:4}}),Object(w.jsxs)(j.a,{container:!0,spacing:3,children:[Object(w.jsxs)(j.a,{item:!0,md:4,sm:6,xs:12,children:[Object(w.jsxs)(l.a,{marginBottom:2,children:[Object(w.jsx)(f.h,{display:"block",mb:1,children:"Bill To"}),Object(w.jsx)(O.a,{fullWidth:!0,name:"billTo",value:o.billTo,onChange:p,error:Boolean(c.billTo&&i.billTo),helperText:c.billTo&&i.billTo})]}),Object(w.jsxs)(l.a,{marginBottom:2,children:[Object(w.jsx)(f.h,{display:"block",mb:1,children:"Bill To Address"}),Object(w.jsx)(O.a,{fullWidth:!0,name:"billToAddress",value:o.billToAddress,onChange:p,error:Boolean(c.billToAddress&&i.billToAddress),helperText:c.billToAddress&&i.billToAddress})]}),Object(w.jsxs)(l.a,{children:[Object(w.jsx)(f.h,{display:"block",mb:1,children:"Phone Number"}),Object(w.jsx)(O.a,{fullWidth:!0,type:"number",name:"billToPhone",value:o.billToPhone,onChange:p,error:Boolean(c.billToPhone&&i.billToPhone),helperText:c.billToPhone&&i.billToPhone})]})]}),Object(w.jsxs)(j.a,{item:!0,md:4,sm:6,xs:12,children:[Object(w.jsxs)(l.a,{marginBottom:2,children:[Object(w.jsx)(f.h,{display:"block",mb:1,children:"Bill From"}),Object(w.jsx)(O.a,{fullWidth:!0,name:"billFrom",value:o.billFrom,onChange:p,error:Boolean(c.billFrom&&i.billFrom),helperText:c.billFrom&&i.billFrom})]}),Object(w.jsxs)(l.a,{marginBottom:2,children:[Object(w.jsx)(f.h,{display:"block",mb:1,children:"Bill From Address"}),Object(w.jsx)(O.a,{fullWidth:!0,name:"billFromAddress",value:o.billFromAddress,onChange:p,error:Boolean(c.billFromAddress&&i.billFromAddress),helperText:c.billFromAddress&&i.billTo})]}),Object(w.jsxs)(l.a,{children:[Object(w.jsx)(f.h,{display:"block",mb:1,children:"Phone Number"}),Object(w.jsx)(O.a,{fullWidth:!0,type:"number",name:"billFromPhone",value:o.billFromPhone,onChange:p,error:Boolean(c.billFromPhone&&i.billFromPhone),helperText:c.billFromPhone&&i.billFromPhone})]})]})]}),Object(w.jsx)(m.a,{sx:{my:4}}),Object(w.jsx)(j.a,{container:!0,spacing:2,alignItems:"flex-end",children:Object(w.jsx)(x.b,{name:"items",render:function(t){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(j.a,{item:!0,xs:12,children:Object(w.jsx)(u.a,{variant:"contained",size:"small",onClick:function(){return t.push({id:Date.now(),itemName:"",itemPrice:0,itemQuantity:0})},sx:{marginBottom:2},children:e("Add New Item")})}),o.items.map((function(r,n){return Object(w.jsxs)(v.Fragment,{children:[Object(w.jsxs)(j.a,{item:!0,md:4,sm:4,xs:12,children:[Object(w.jsx)(f.h,{display:"block",mb:1,children:"Item Name"}),Object(w.jsx)(O.a,{fullWidth:!0,name:"items.".concat(n,".itemName"),value:r.itemName,onChange:p}),Object(w.jsx)(x.a,{name:"items.".concat(n,".itemName"),render:function(e){return Object(w.jsx)(f.h,{color:"secondary.red",mx:2,children:e})}})]}),Object(w.jsxs)(j.a,{item:!0,md:2,sm:3,xs:6,children:[Object(w.jsx)(f.h,{display:"block",mb:1,children:"Item Price"}),Object(w.jsx)(O.a,{fullWidth:!0,type:"number",name:"items.".concat(n,".itemPrice"),value:r.itemPrice,onChange:p})]}),Object(w.jsxs)(j.a,{item:!0,md:2,sm:3,xs:6,children:[Object(w.jsx)(f.h,{display:"block",mb:1,children:"Quantity"}),Object(w.jsx)(O.a,{type:"number",fullWidth:!0,name:"items.".concat(n,".itemQuantity"),value:r.itemQuantity,onChange:p})]}),Object(w.jsx)(j.a,{item:!0,md:2,sm:2,xs:12,children:Object(w.jsx)(u.a,{onClick:function(){return t.remove(n)},variant:"contained",sx:{backgroundColor:function(e){return e.palette.primary.red},"&:hover":{backgroundColor:function(e){return e.palette.primary.red}}},children:e("Delete")})})]},r.id)}))]})}})}),Object(w.jsx)(m.a,{sx:{my:4}}),Object(w.jsxs)(l.a,{maxWidth:320,children:[Object(w.jsx)(f.d,{fontWeight:600,children:e("Amount")}),Object(w.jsxs)(h.a,{alignItems:"center",justifyContent:"space-between",my:1,children:[Object(w.jsx)(f.f,{fontWeight:500,children:e("Subtotal")}),Object(w.jsx)(f.f,{fontWeight:500,children:"$428.00"})]}),Object(w.jsxs)(h.a,{alignItems:"center",justifyContent:"space-between",my:1,children:[Object(w.jsxs)(f.f,{fontWeight:500,children:[e("Discount"),Object(w.jsx)(f.i,{color:"text.disabled",children:" (BLACKFRIDAY)"})]}),Object(w.jsx)(f.f,{fontWeight:500,children:"-$8.00"})]}),Object(w.jsxs)(h.a,{alignItems:"center",justifyContent:"space-between",my:1,children:[Object(w.jsx)(f.f,{fontWeight:500,children:"VAT"}),Object(w.jsx)(f.f,{fontWeight:500,children:"$20.00"})]}),Object(w.jsx)(m.a,{sx:{my:2}}),Object(w.jsxs)(h.a,{alignItems:"center",justifyContent:"space-between",my:1,children:[Object(w.jsx)(f.f,{children:e("Total")}),Object(w.jsx)(f.f,{children:"$20.00"})]})]})]})}})]})})}},912:function(e,t,r){"use strict";var n=r(184),o=r(0);t.a=function(e){var t=Object(o.useContext)(n.a),r=t.title,a=t.setTitle;return Object(o.useEffect)((function(){return a(e)}),[e,a]),r}},943:function(e,t,r){"use strict";var n=r(0),o=n.createContext();t.a=o}}]);
//# sourceMappingURL=35.272ceb61.chunk.js.map
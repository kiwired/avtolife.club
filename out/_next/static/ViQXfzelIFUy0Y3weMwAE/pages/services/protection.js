(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"0CiD":function(e,t,a){e.exports={container:"price_container__2ZG-n",flex:"price_flex__3cS6E",row:"price_row__3t7N5",bg:"price_bg__1b9l8",title:"price_title__3K5xk",desc:"price_desc__1Flr0",price:"price_price__4FlbT",list:"price_list__1aNrH",item:"price_item__1ZS16"}},"433J":function(e,t,a){"use strict";var n=a("rePB"),i=a("q1tI"),l=a.n(i),r=a("wEEd"),c=a("YJnR"),u=a.n(c),s=l.a.createElement;function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}t.a=function(e){var t=e.list;t=t.map((function(e,t){return m(m({},e),{},{id:t})}));var a=Object(i.useState)(0),n=a[0],l=a[1],c=Object(i.useCallback)((function(e){return function(){l(e)}})),o=Object(r.e)(t[n],(function(e){return e.id}),{from:{opacity:0},enter:{opacity:1},leave:{opacity:0}});return s("div",{className:u.a.container},o.map((function(e){var t=e.item,a=e.props,n=e.key;return s(r.a.div,{key:n,className:u.a.bg,style:m(m({},a),{},{backgroundImage:"url(".concat(t.thumb,")")})})})),s("div",{className:u.a.inner},t.map((function(e,t){return s("div",{key:t,className:t===n?"".concat(u.a.item," ").concat(u.a.active):u.a.item},s("div",{className:u.a.wrap,onClick:c(t)},s("div",{className:u.a.index},t+1," \u0448\u0430\u0433"),s("div",{className:u.a.value},e.value),s("div",{className:u.a.label},e.label)))}))))}},BsWD:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("a3WO");function i(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(n.a)(e,t):void 0}}},"KA/H":function(e,t,a){"use strict";var n=a("Ff2n"),i=a("q1tI"),l=a.n(i),r=a("qKL8"),c=a.n(r),u=l.a.createElement;t.a=function(e){var t=e.title,a=e.thumb,i=Object(n.a)(e,["title","thumb"]);return u("div",{className:c.a.container},u("div",{className:c.a.flex},a&&u("div",null,u("img",{className:c.a.thumb,src:a})),u("div",null,t&&u("h2",{className:c.a.title},t),u("div",i))))}},"Kbu/":function(e,t,a){e.exports={container:"about_container__pupjd",title:"about_title__1bvW9",inner:"about_inner__1vaSk",item:"about_item__dK8uY",wrap:"about_wrap__B8Buf",index:"about_index__1B-1g",value:"about_value__qX1YA",desc:"about_desc__38Z-Z",descWrap:"about_descWrap__1_5a8",descList:"about_descList__2kNWv",descItem:"about_descItem__2mfrI"}},MP88:function(e,t,a){"use strict";var n=a("wx14"),i=a("Ff2n"),l=a("a3WO");var r=a("BsWD");function c(e){return function(e){if(Array.isArray(e))return Object(l.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u=a("rePB"),s=a("q1tI"),o=a.n(s),m=a("wEEd"),_=a("ddPq"),b=a("0CiD"),v=a.n(b),p=o.a.createElement;function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}t.a=function(e){var t=e.title,a=e.label,n=e.list,i=void 0===n?[]:n;i=i.map((function(e,t){return f(f({},e),{},{id:t})}));var l=null,r=Object(s.useState)([0]),u=r[0],o=r[1],b=Object(s.useState)(0),d=b[0],N=b[1],y=Object(s.useCallback)((function(e,t){return function(a){return o((function(a){var n=a.includes(e);if(t&&!n)for(var l=function(e){i[e].multi||(a=c(a.filter((function(t){return t!==e}))))},r=0;r<i.length;r++)l(r);return a=n?c(a.filter((function(t){return t!==e}))):[].concat(c(a),[e])}))}}));Object(s.useEffect)((function(){for(var e=l.querySelectorAll("input:checked"),t=0,a=0;a<e.length;a++)t+=1*e[a].value;t=new Intl.NumberFormat("ru-RU").format(t),N(t)}));var h=Object(m.e)(i[0],(function(e){return e.id}),{from:{opacity:0},enter:{opacity:1},leave:{opacity:0}});return p("div",{className:v.a.container},p("div",{className:v.a.flex},p("div",{className:v.a.row},p("h2",{className:v.a.title},t),p("div",{className:v.a.desc},a),p("div",{className:v.a.list,ref:function(e){return l=e}},i.map((function(e,t){var a=e.multi?"checkbox":"radio",n=e.multi?"price[".concat(t,"]"):"price[]";return p(g,{key:t,type:a,name:n,value:e.value,label:e.label,onClick:y(t,!e.multi),onChange:function(){},checked:u.includes(t)})}))),p("div",{className:v.a.price},"\u043e\u0442 ",d," \u20bd"),p("div",{className:v.a.call},p(_.a,{action:"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u0437\u0432\u043e\u043d\u043e\u043a"}))),p("div",{className:v.a.row},h.map((function(e){var t=e.item,a=e.props,n=e.key;return p(m.a.div,{key:n,className:v.a.bg,style:f(f({},a),{},{backgroundImage:"url(".concat(t.thumb,")")})})})))))};var g=function(e){var t=e.name,a=e.value,l=e.label,r=e.type,c=void 0===r?"radio":r,u=Object(i.a)(e,["name","value","label","type"]);return p("label",{className:v.a.item},p("input",Object(n.a)({type:c,name:t,value:a},u)),p("span",null,l))}},NnRf:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/services/protection",function(){return a("vtLL")}])},SSwK:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),l=a("ddPq"),r=a("rsgE"),c=a.n(r),u=i.a.createElement;t.a=function(e){var t=e.list,a=void 0===t?[]:t,n=e.hint;return u("div",{className:c.a.container},u("h2",{className:c.a.title},"\u041f\u043e\u0447\u0435\u043c\u0443 \u044d\u0442\u043e \u0432\u044b\u0433\u043e\u0434\u043d\u043e?"),u("div",{className:c.a.list},a.map((function(e,t){return u("div",{key:t,className:c.a.item},u("div",{className:c.a.inner},u("div",{className:c.a.label},e.label),u("div",{className:c.a.value},e.value)))}))),n&&u("div",{className:c.a.hint},u("span",null,"*")," ",n),u("div",{className:c.a.call},u(l.a,{action:"\u0417\u0430\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"})))}},"Sjz/":function(e,t,a){e.exports={team:"team_team__2DoCy",inner:"team_inner__1eyeC",title:"team_title__24z1b",list:"team_list__3qFrL",item:"team_item__2qAhX",img:"team_img__362bD",name:"team_name__3Ck_c",position:"team_position__1Xsng"}},UGUO:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),l=a("bJlq"),r=a.n(l),c=i.a.createElement;t.a=function(e){var t=e.list;return c("div",{className:r.a.container},c("div",{className:r.a.inner},t.map((function(e,t){return c("div",{key:t,className:r.a.item},c("div",{className:r.a.wrap},c("div",{className:r.a.img},c("img",{src:e.img,alt:"".concat(e.value," - ").concat(e.label)})),c("div",{className:r.a.value},e.value),c("div",{className:r.a.label},e.label)))}))))}},"Xn/1":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),l=a("aqT/"),r=a.n(l),c=a("wEEd"),u=a("Kbu/"),s=a.n(u),o=i.a.createElement;t.a=function(){var e=Object(n.useState)(!1),t=e[0],a=e[1];return o("div",{className:s.a.container},o("div",{className:s.a.inner},o("h2",{className:s.a.title},"\u041a\u0430\u043a \u043c\u044b \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u043c?"),o("div",{className:s.a.inner},[{index:1,value:"\u0417\u0432\u043e\u043d\u043e\u043a \u0438\u043b\u0438 \u0437\u0430\u044f\u0432\u043a\u0430",label:"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0430\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043a \u043d\u0430\u043c \u043d\u0430 \u0443\u0441\u043b\u0443\u0433\u0443 \u0447\u0435\u0440\u0435\u0437 \u0441\u0430\u0439\u0442"},{index:2,value:"\u0421\u043e\u0433\u043b\u0430\u0441\u043e\u0432\u0430\u043d\u0438\u0435 \u0432\u0440\u0435\u043c\u0435\u043d\u0438",label:"\u041c\u044b \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u043c \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u043e\u0435 \u0438 \u0443\u0434\u043e\u0431\u043d\u043e\u0435 \u0434\u043b\u044f \u0432\u0430\u0441 \u0432\u0440\u0435\u043c\u044f"},{index:3,value:"\u041f\u0440\u0438\u0435\u043c \u0430\u0432\u0442\u043e \u0432 \u0440\u0430\u0431\u043e\u0442\u0443",label:"\u041a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0438 \u043f\u0440\u0438\u0435\u043c \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f \u0432 \u0440\u0430\u0431\u043e\u0442\u0443"},{index:4,value:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c \u0430\u0432\u0442\u043e",label:"\u041f\u043e\u0441\u043b\u0435 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u0435\u043d\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u0432\u044b \u0437\u0430\u0431\u0438\u0440\u0430\u0435\u0442\u0435 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c"}].map((function(e,t){return o("div",{key:t,className:s.a.item},o("div",{className:s.a.wrap},o("div",{className:s.a.index},e.index),o("div",{className:s.a.value},e.value),o("div",{className:s.a.label},e.label)))})))),o("div",{className:s.a.descWrap},o("div",{className:s.a.desc},o("h2",{className:s.a.title},"\u041e \u041d\u0430\u0441"),o(r.a,{onChange:function(e){return a(e||t)},partialVisibility:!0},o("div",{className:s.a.descList},[{label:70,postfix:"+",value:"\u0411\u0440\u0435\u043d\u0434\u043e\u0432-\u043f\u0430\u0440\u0442\u043d\u0435\u0440\u043e\u0432 \u0441 \u043c\u0438\u0440\u043e\u0432\u044b\u043c \u0438\u043c\u0435\u043d\u0435\u043c"},{label:850,postfix:"+",value:"\u0410\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u0435\u0439 \u0442\u0435\u043f\u0435\u0440\u044c \u043a\u0430\u043a \u043d\u043e\u0432\u044b\u0435"},{label:0,postfix:null,value:"\u0421\u043b\u0443\u0447\u0430\u0435\u0432 \u043f\u043e\u0440\u0447\u0438 \u044d\u043b\u0435\u043a\u0442\u0440\u0438\u043a\u0438 \u0438\u043b\u0438 \u0441\u0430\u043b\u043e\u043d\u0430"},{label:125,postfix:"+",value:"\u0420\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0438 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432"}].map((function(e,a){var n=Object(c.d)({val:e.label,from:{val:0},reset:t});return o("div",{key:a,className:s.a.descItem},o(c.a.span,null,n.val.interpolate((function(e){return(e=Math.floor(e))>0&&(e+="+"),e})))," ",e.value)})))))))}},YJnR:function(e,t,a){e.exports={container:"steps_container__2-PsM",inner:"steps_inner__1eiUC",bg:"steps_bg__1CiIC",item:"steps_item__2clIn",active:"steps_active__-4TsE",wrap:"steps_wrap__3bBlv",index:"steps_index__1gUbC",value:"steps_value__2SYGu",label:"steps_label__1t5DW"}},a3WO:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}a.d(t,"a",(function(){return n}))},bJlq:function(e,t,a){e.exports={container:"edge_container__homZ_",inner:"edge_inner__3C_Ta",item:"edge_item__ax7S9",img:"edge_img__38HHI",wrap:"edge_wrap__md74P",value:"edge_value__3H14_"}},hd63:function(e,t,a){e.exports={container:"insta_container__19C7N"}},qKL8:function(e,t,a){e.exports={container:"result_container__2kMw9",flex:"result_flex__19Vg7",thumb:"result_thumb__3tWfu",title:"result_title__1zAEb"}},rsgE:function(e,t,a){e.exports={container:"profit_container__1x-5a",title:"profit_title__1ub4u",list:"profit_list__2IKtV",item:"profit_item__2i3Jz",inner:"profit_inner__3GlBk",label:"profit_label__1Tjkl",hint:"profit_hint__1arMB",call:"profit_call__XzsyB"}},uwhF:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),l=a("Sjz/"),r=a.n(l),c=i.a.createElement;t.a=function(){return c("div",{className:r.a.team},c("div",{className:r.a.inner},c("h2",{className:r.a.title},"\u041d\u0430\u0448\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0430"),c("div",{className:r.a.list},[{picture:"/img/team/04.jpg",name:"\u042f\u043a\u043e\u0432",position:"\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442 \u043f\u043e \u0442\u043e\u043d\u0438\u0440\u043e\u0432\u043a\u0435"},{picture:"/img/team/01.jpg",name:"\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440",position:"\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442 \u043f\u043e \u0442\u043e\u043d\u0438\u0440\u043e\u0432\u043a\u0435"},{picture:"/img/team/02.jpg",name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",position:"\u0414\u0435\u0442\u0435\u0439\u043b\u0438\u043d\u0433-\u043c\u0430\u0441\u0442\u0435\u0440"}].map((function(e,t){return c("div",{key:t,className:r.a.item},e.picture&&c("img",{className:r.a.img,src:e.picture}),c("div",{className:r.a.name},e.name),c("div",{className:r.a.position},e.position))})))))}},vtLL:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),l=a("ffb8"),r=(a("YFqc"),a("ddPq"),a("Ivb1")),c=a("3FXg"),u=a("N1HZ"),s=a("UGUO"),o=a("433J"),m=a("Xn/1"),_=a("MP88"),b=a("SSwK"),v=a("yeLp"),p=a("KA/H"),d=a("uwhF"),f=a("bJhQ"),g=i.a.createElement,N={title:"\u0411\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f \u043f\u043b\u0435\u043d\u043a\u043e\u0439 \u0432 \u041e\u043c\u0441\u043a\u0435",keywords:"\u0411\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f \u043f\u043b\u0435\u043d\u043a\u043e\u0439 \u041e\u043c\u0441\u043a",description:"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f \xabAvtoLife\xbb \u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0443\u0441\u043b\u0443\u0433\u0438 \u043f\u043e \u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044e \u0430\u0432\u0442\u043e \u043f\u043b\u0435\u043d\u043a\u043e\u0439 \u0432 \u041e\u043c\u0441\u043a\u0435. \u0411\u0440\u043e\u043d\u0438\u0440\u0443\u044e\u0449\u0430\u044f \u043f\u043b\u0435\u043d\u043a\u0430 \u043f\u043e\u0437\u0432\u043e\u043b\u0438\u0442 \u0437\u0430\u0449\u0438\u0442\u0438\u0442\u044c \u043a\u0443\u0437\u043e\u0432 \u0430\u0432\u0442\u043e \u043e\u0442 \u043c\u0435\u043b\u043a\u0438\u0445 \u0441\u043a\u043e\u043b\u043e\u0432 \u0438 \u0446\u0430\u0440\u0430\u043f\u0438\u043d"};t.default=function(){return g(i.a.Fragment,null,g(l.NextSeo,N),g(r.a,null),g(u.a,{title:"\u0411\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0430\u0432\u0442\u043e",text:"\u043c\u044b \u0434\u0430\u0435\u043c 100% \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u044e",thumb:"/img/full/protection.jpg",action:"\u0420\u0430\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c"}),g(s.a,{list:[{img:"/img/edge-01.svg",value:"\u0411\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e",label:"\u0418\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u043e\u0434\u0431\u043e\u0440 \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u0445 \u0437\u0430\u0449\u0438\u0442\u043d\u044b\u0445 \u043f\u043b\u0435\u043d\u043e\u043a"},{img:"/img/edge-02.svg",value:"\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0447\u043d\u043e",label:"\u0420\u0430\u0431\u043e\u0442\u0430\u0435\u043c \u0441 \u043b\u0443\u0447\u0448\u0438\u043c\u0438 \u0431\u0440\u0435\u043d\u0434\u0430\u043c\u0438: Koch Chemie, Meguiars, Chemical Guys"},{img:"/img/edge-03.svg",value:"\u0413\u0430\u0440\u0430\u043d\u0442\u0438\u044f",label:"\u0413\u0430\u0440\u0430\u043d\u0442\u0438\u044f \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u0438 \u0441\u0440\u043e\u043a\u043e\u0432 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"}]}),g(o.a,{list:[{value:"\u0414\u0438\u0430\u0433\u043d\u043e\u0441\u0442\u0438\u043a\u0430 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u0430\u0432\u0442\u043e",label:"\u041e\u0446\u0435\u043d\u043a\u0430 \u043e\u0431\u0449\u0435\u0433\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u043a\u0443\u0437\u043e\u0432\u0430 \u0438 \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u043f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u0435\u0439 \u043a \u0440\u0430\u0431\u043e\u0442\u0435.",thumb:"/img/step/protection/01.jpg"},{value:"\u041f\u043e\u043a\u043b\u0435\u0439\u043a\u0430 \u043f\u043b\u0435\u043d\u043a\u043e\u0439 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0435 \u0443\u0447\u0430\u0441\u0442\u043a\u0438 \u043a\u0443\u0437\u043e\u0432\u0430",label:"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u0430\u044f \u043f\u043e\u043a\u043b\u0435\u0439\u043a\u0430 \u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u043e\u0447\u043d\u043e\u0439 \u043f\u043b\u0435\u043d\u043a\u0438 \u043f\u043e \u043f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u0438 \u043a\u0443\u0437\u043e\u0432\u0430 \u0430\u0432\u0442\u043e.",thumb:"/img/step/protection/01.jpg"},{value:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0445 \u0440\u0430\u0431\u043e\u0442",thumb:"/img/step/protection/01.jpg"}]}),g(m.a,null),g(_.a,{title:"\u0423\u0437\u043d\u0430\u0442\u044c \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f",label:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043c\u0435\u0441\u0442\u0430 \u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f:",list:[{thumb:"",label:"\u041a\u043e\u043c\u043f\u043b\u0435\u043a\u0441 1",value:12500},{thumb:"",label:"\u041a\u043e\u043c\u043f\u043b\u0435\u043a\u0441 2",value:33e3},{thumb:"",label:"\u041a\u043e\u043c\u043f\u043b\u0435\u043a\u0441 3",value:52500},{thumb:"",label:"\u041a\u0430\u043f\u043e\u0442",value:14e3,multi:!0},{thumb:"",label:"\u041f\u043e\u043b\u043e\u0441\u0430 \u043d\u0430 \u043a\u0430\u043f\u043e\u0442",value:5e3,multi:!0},{thumb:"",label:"\u0411\u0430\u043c\u043f\u0435\u0440",value:12e3,multi:!0},{thumb:"",label:"\u041f\u0435\u0440\u0435\u0434\u043d\u0438\u0435 \u043a\u0440\u044b\u043b\u044c\u044f",value:12e3,multi:!0},{thumb:"",label:"\u041e\u043f\u0442\u0438\u043a\u0430",value:3500,multi:!0},{thumb:"",label:"\u041f\u043e\u0440\u043e\u0433\u0438",value:4e3,multi:!0},{thumb:"",label:"\u0421\u0442\u043e\u0439\u043a\u0438",value:2e3,multi:!0},{thumb:"",label:"\u041a\u043e\u043b\u0435\u0441\u043d\u044b\u0435 \u0430\u0440\u043a\u0438",value:2500,multi:!0},{thumb:"",label:"\u0417\u043e\u043d\u0430 \u043f\u043e\u0433\u0440\u0443\u0437\u043a\u0438",value:2e3,multi:!0},{thumb:"",label:"\u041c\u0435\u0441\u0442\u0430 \u043f\u043e\u0434 \u0440\u0443\u0447\u043a\u0438",value:1500,multi:!0},{thumb:"",label:"\u0414\u0432\u0435\u0440\u044c",value:7500,multi:!0}]}),g(b.a,{list:[{label:"+90%",value:"\u041f\u0440\u043e\u0434\u043b\u0435\u0432\u0430\u0435\u0442 \u0441\u0440\u043e\u043a \u0441\u043b\u0443\u0436\u0431\u044b \u041b\u041a\u041f \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f"},{label:"-99%",value:"\u0412\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u044c \u0441\u043a\u043e\u043b\u043e\u0432 \u0438 \u043f\u043e\u0440\u0447\u0438 \u041b\u041a\u041f \u0432 \u043c\u0435\u0441\u0442\u0430\u0445 \u043d\u0430\u043d\u0435\u0441\u0435\u043d\u0438\u044f \u043f\u043b\u0435\u043d\u043a\u0438"},{label:"1 \u0433\u043e\u0434",value:"\u0413\u0430\u0440\u0430\u043d\u0442\u0438\u0440\u0443\u0435\u043c \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u0438 \u0434\u043e\u043b\u0433\u0438\u0439 \u0441\u0440\u043e\u043a \u0441\u043b\u0443\u0436\u0431\u044b \u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f"},{label:"99%",value:"\u041a\u043b\u0438\u0435\u043d\u0442\u043e\u0432 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u044e\u0442 \u043d\u0430\u0441 \u0434\u0440\u0443\u0437\u044c\u044f\u043c"}]}),g(v.a,{keys:"\u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"}),g(p.a,{title:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0411\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f",thumb:"/img/results/protection.jpg"},g("p",null,"\u0411\u0440\u043e\u043d\u0438\u0440\u0443\u044e\u0449\u0430\u044f \u043f\u043b\u0435\u043d\u043a\u0430 \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043d\u0435\u0437\u0430\u043c\u0435\u0442\u043d\u0430 \u043d\u0430 \u043a\u0443\u0437\u043e\u0432\u0435, \u043d\u043e \u0435\u0435 \u0442\u043e\u043b\u0449\u0438\u043d\u044b (110-330 \u043c\u043a\u043c) \u0432\u043f\u043e\u043b\u043d\u0435 \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0435\u0434\u043e\u0442\u0432\u0440\u0430\u0442\u0438\u0442\u044c \u0446\u0430\u0440\u0430\u043f\u0438\u043d\u044b \u0438\u043b\u0438 \u043c\u0435\u043b\u043a\u0438\u0435 \u0441\u043a\u043e\u043b\u044b. \u0414\u043b\u044f \u0438\u0437\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u043b\u0435\u043d\u043a\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0432\u044b\u0441\u043e\u043a\u043e\u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u043f\u043e\u043b\u0438\u0443\u0440\u0435\u0442\u0430\u043d \u0443\u0441\u0442\u043e\u0439\u0447\u0438\u0432\u044b\u0439 \u043a \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u043d\u044b\u043c \u043f\u0435\u0440\u0435\u043f\u0430\u0434\u0430\u043c \u0438 \u043c\u0435\u0445\u0430\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u043c\u0443 \u0432\u043e\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044e."),g("p",null,"\u041f\u043b\u0435\u043d\u043a\u0430 \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u043e \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u0441\u043e\u043b\u043d\u0435\u0447\u043d\u043e\u0435 \u0438\u0437\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0432 \u0443\u043b\u044c\u0442\u0440\u0430\u0444\u0438\u043e\u043b\u0435\u0442\u043e\u0432\u043e\u0439 \u0447\u0430\u0441\u0442\u0438 \u0441\u043f\u0435\u043a\u0442\u0440\u0430. \u0414\u0430\u0436\u0435 \u0435\u0441\u043b\u0438 \u0432\u044b \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0447\u0430\u0441\u0442\u0438\u0447\u043d\u043e\u0435 \u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u0443\u0437\u043e\u0432\u0430 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f, \u043c\u043e\u0436\u0435\u0442\u0435 \u0431\u044b\u0442\u044c \u0443\u0432\u0435\u0440\u0435\u043d\u044b \u2013 \u043d\u0438\u043a\u0430\u043a\u0438\u0445 \u0441\u043b\u0435\u0434\u043e\u0432 \u0432\u044b\u0433\u043e\u0440\u0430\u043d\u0438\u044f \u043f\u043e\u0441\u043b\u0435 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u043f\u043b\u0435\u043d\u043a\u0438 \u043d\u0430 \u043a\u0443\u0437\u043e\u0432\u0435 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442. \u041a\u0443\u0437\u043e\u0432, \u043e\u043a\u043b\u0435\u0435\u043d\u043d\u044b\u0439 \u043f\u043b\u0435\u043d\u043a\u043e\u0439, \u043c\u043e\u0436\u043d\u043e \u043c\u044b\u0442\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0445\u0438\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0441\u043e\u0441\u0442\u0430\u0432\u043e\u0432 \u0438 \u0434\u0430\u0436\u0435 \u043f\u043e\u0434\u0432\u0435\u0440\u0433\u0430\u0442\u044c \u043f\u043e\u043b\u0438\u0440\u043e\u0432\u043a\u0435.")),g(d.a,null),g(f.a,null),g(c.a,null))}},yeLp:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),l=a("hd63"),r=a.n(l),c=i.a.createElement;t.a=function(e){e.keys;return c("div",{className:r.a.container},c("div",{className:r.a.list}))}}},[["NnRf",0,2,1,3,4,5,6]]]);
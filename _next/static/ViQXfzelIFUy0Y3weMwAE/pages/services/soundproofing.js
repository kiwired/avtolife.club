(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"0CiD":function(e,t,a){e.exports={container:"price_container__2ZG-n",flex:"price_flex__3cS6E",row:"price_row__3t7N5",bg:"price_bg__1b9l8",title:"price_title__3K5xk",desc:"price_desc__1Flr0",price:"price_price__4FlbT",list:"price_list__1aNrH",item:"price_item__1ZS16"}},"433J":function(e,t,a){"use strict";var n=a("rePB"),i=a("q1tI"),r=a.n(i),l=a("wEEd"),c=a("YJnR"),s=a.n(c),u=r.a.createElement;function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}t.a=function(e){var t=e.list;t=t.map((function(e,t){return m(m({},e),{},{id:t})}));var a=Object(i.useState)(0),n=a[0],r=a[1],c=Object(i.useCallback)((function(e){return function(){r(e)}})),o=Object(l.e)(t[n],(function(e){return e.id}),{from:{opacity:0},enter:{opacity:1},leave:{opacity:0}});return u("div",{className:s.a.container},o.map((function(e){var t=e.item,a=e.props,n=e.key;return u(l.a.div,{key:n,className:s.a.bg,style:m(m({},a),{},{backgroundImage:"url(".concat(t.thumb,")")})})})),u("div",{className:s.a.inner},t.map((function(e,t){return u("div",{key:t,className:t===n?"".concat(s.a.item," ").concat(s.a.active):s.a.item},u("div",{className:s.a.wrap,onClick:c(t)},u("div",{className:s.a.index},t+1," \u0448\u0430\u0433"),u("div",{className:s.a.value},e.value),u("div",{className:s.a.label},e.label)))}))))}},BsWD:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("a3WO");function i(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(n.a)(e,t):void 0}}},D0wD:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),r=a("ffb8"),l=(a("YFqc"),a("ddPq"),a("Ivb1")),c=a("3FXg"),s=a("N1HZ"),u=a("UGUO"),o=a("433J"),m=a("Xn/1"),_=a("MP88"),p=a("SSwK"),v=a("yeLp"),b=a("KA/H"),d=a("uwhF"),f=a("bJhQ"),g=i.a.createElement,N={title:"\u0428\u0443\u043c\u043e\u0438\u0437\u043e\u043b\u044f\u0446\u0438\u044f \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f \u0432 \u041e\u043c\u0441\u043a\u0435",keywords:"\u0428\u0443\u043c\u043e\u0438\u0437\u043e\u043b\u044f\u0446\u0438\u044f \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f",description:"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f \xabAvtoLife\xbb \u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0443\u0441\u043b\u0443\u0433\u0438 \u043f\u043e \u0448\u0443\u043c\u043e\u0438\u0437\u043e\u043b\u044f\u0446\u0438\u0438 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u0435\u0439 \u0432\u0441\u0435\u0445 \u0442\u0438\u043f\u043e\u0432 \u0438 \u043a\u043b\u0430\u0441\u0441\u043e\u0432 \u0432 \u041e\u043c\u0441\u043a\u0435. \u041d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u0438\u0434\u043e\u0432 \u0448\u0443\u043c\u043e\u0438\u0437\u043e\u043b\u044f\u0446\u0438\u0438 \u2013 \u0446\u0435\u043d\u043e\u0432\u044b\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043e\u0442 \u044d\u043a\u043e\u043d\u043e\u043c \u0434\u043e \u043b\u044e\u043a\u0441. \u041f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0444\u043e\u0442\u043e\u043e\u0442\u0447\u0435\u0442"};t.default=function(){return g(i.a.Fragment,null,g(r.NextSeo,N),g(l.a,null),g(s.a,{title:"\u0428\u0443\u043c\u043e\u0438\u0437\u043e\u043b\u044f\u0446\u0438\u044f \u0430\u0432\u0442\u043e",text:"\u043c\u044b \u0434\u0430\u0435\u043c 100% \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u044e",thumb:"/img/full/soundproofing.jpg",action:"\u0420\u0430\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c"}),g(u.a,{list:[{img:"/img/edge-01.svg",value:"\u0411\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e",label:"\u0418\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u043e\u0434\u0431\u043e\u0440 \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u0445 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u043e\u0432"},{img:"/img/edge-02.svg",value:"\u042d\u043a\u043e\u043b\u043e\u0433\u0438\u0447\u043d\u043e",label:"\u0420\u0430\u0431\u043e\u0442\u0430\u0435\u043c \u0441 \u043b\u0443\u0447\u0448\u0438\u043c\u0438 \u0431\u0440\u0435\u043d\u0434\u0430\u043c\u0438: ***********"},{img:"/img/edge-03.svg",value:"\u0413\u0430\u0440\u0430\u043d\u0442\u0438\u044f",label:"\u0413\u0430\u0440\u0430\u043d\u0442\u0438\u044f \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u0438 \u0441\u0440\u043e\u043a\u043e\u0432 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"}]}),g(o.a,{list:[{value:"\u0414\u0438\u0430\u0433\u043d\u043e\u0441\u0442\u0438\u043a\u0430 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u0441\u0430\u043b\u043e\u043d\u0430",label:"",thumb:"/img/step/soundproofing/01.jpg"},{value:"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u0441\u0430\u043b\u043e\u043d\u0430 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f",label:"",thumb:"/img/step/soundproofing/01.jpg"},{value:"\u041d\u0430\u043d\u0435\u0441\u0435\u043d\u0438\u0435 \u0432\u0438\u0431\u0440\u043e \u0438 \u0448\u0443\u043c\u043e \u0438\u0437\u043e\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u0445 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u043e\u0432",thumb:"/img/step/soundproofing/01.jpg"}]}),g(m.a,null),g(_.a,{title:"\u0423\u0437\u043d\u0430\u0442\u044c \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0448\u0443\u043c\u043e\u0438\u0437\u043e\u043b\u044f\u0446\u0438\u0438",label:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043c\u0435\u0441\u0442\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438:",list:[{thumb:"",label:"\u0421\u0430\u043b\u043e\u043d",value:28e3},{thumb:"",label:"\u0414\u0432\u0435\u0440\u0438",value:3e3,multi:!0},{thumb:"",label:"\u041f\u043e\u043b",value:12e3,multi:!0},{thumb:"",label:"\u041f\u043e\u0442\u043e\u043b\u043e\u043a",value:5e3,multi:!0},{thumb:"",label:"\u0411\u0430\u0433\u0430\u0436\u043d\u0438\u043a",value:7e3,multi:!0},{thumb:"",label:"\u041a\u043e\u043b\u0435\u0441\u043d\u044b\u0435 \u0430\u0440\u043a\u0438 \u0441\u043d\u0430\u0440\u0443\u0436\u0438",value:3e3,multi:!0}]}),g(p.a,{list:[{label:"+50%",value:"\u0423\u043b\u0443\u0447\u0448\u0430\u0435\u0442 \u043a\u043e\u043c\u0444\u043e\u0440\u0442 \u043e\u0442 \u0435\u0437\u0434\u044b"},{label:"-70%",value:"\u041f\u043e\u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0445 \u0448\u0443\u043c\u043e\u0432 \u0438\u0437 \u043e\u043a\u0440\u0443\u0436\u0430\u044e\u0449\u0435\u0439 \u0441\u0440\u0435\u0434\u044b"},{label:"1 \u0433\u043e\u0434",value:"\u0413\u0430\u0440\u0430\u043d\u0442\u0438\u0440\u0443\u0435\u043c \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u0438 \u0434\u043e\u043b\u0433\u0438\u0439 \u044d\u0444\u0444\u0435\u043a\u0442 \u043e\u0442 \u0448\u0443\u043c\u043e\u0438\u0437\u043e\u043b\u044f\u0446\u0438\u0438"},{label:"99%",value:"\u041a\u043b\u0438\u0435\u043d\u0442\u043e\u0432 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u044e\u0442 \u043d\u0430\u0441 \u0434\u0440\u0443\u0437\u044c\u044f\u043c"}]}),g(v.a,{keys:"\u0448\u0443\u043c\u043e\u0438\u0437\u043e\u043b\u044f\u0446\u0438\u044f"}),g(b.a,{title:"\u0428\u0443\u043c\u043e\u0438\u0437\u043e\u043b\u044f\u0446\u0438\u044f \u0430\u0432\u0442\u043e",thumb:"/img/results/soundproofing.jpg"},g("p",null,"\u0412 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435 \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u044f \u043f\u043e \u0434\u043e\u0440\u043e\u0433\u0435, \u0432 \u0441\u0430\u043b\u043e\u043d \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f \u043f\u0440\u043e\u043d\u0438\u043a\u0430\u0435\u0442 \u0431\u043e\u043b\u044c\u0448\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0448\u0443\u043c\u043e\u0432. \u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0430\u043c\u0438 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0448\u0438\u043d\u044b, \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0438\u0440\u0443\u044e\u0449\u0438\u0435 \u0441 \u0434\u043e\u0440\u043e\u0436\u043d\u044b\u043c \u043f\u043e\u043a\u0440\u044b\u0442\u0438\u0435\u043c, \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043b\u044c, \u043a\u043e\u0440\u043e\u0431\u043a\u0430 \u043f\u0435\u0440\u0435\u0434\u0430\u0447, \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u043f\u043e\u0434\u0432\u0435\u0441\u043a\u0438, \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0432\u044b\u0445\u043b\u043e\u043f\u043d\u044b\u0445 \u0433\u0430\u0437\u043e\u0432. \u041a\u0440\u043e\u043c\u0435 \u0442\u043e\u0433\u043e, \u0441\u0438\u043b\u044c\u043d\u044b\u0439 \u0432\u043d\u0435\u0448\u043d\u0438\u0439 \u0448\u0443\u043c \u0441\u043e\u0437\u0434\u0430\u044e\u0442 \u0433\u0440\u0443\u0437\u043e\u0432\u044b\u0435 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u0438 \u0438 \u0430\u0432\u0442\u043e\u0431\u0443\u0441\u044b. \u0421\u0438\u0442\u0443\u0430\u0446\u0438\u044f \u043a\u0430\u0440\u0434\u0438\u043d\u0430\u043b\u044c\u043d\u043e \u0443\u0445\u0443\u0434\u0448\u0430\u0435\u0442\u0441\u044f \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u044f \u043f\u043e \u0433\u0440\u0443\u043d\u0442\u043e\u0432\u043e\u0439 \u0442\u0440\u0430\u0441\u0441\u0435 \u0438\u043b\u0438 \u0433\u0440\u0430\u0432\u0438\u044e."),g("p",null,"\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043d\u044b\u0435 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b \u0434\u043b\u044f \u0448\u0443\u043c\u043e\u0438\u0437\u043e\u043b\u044f\u0446\u0438\u0438 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f \u0438\u0434\u0435\u0430\u043b\u044c\u043d\u043e \u0441\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0441 \u043f\u043e\u0433\u043b\u043e\u0449\u0435\u043d\u0438\u0435\u043c \u0437\u0432\u0443\u043a\u043e\u0432, \u0432\u043e\u0437\u043d\u0438\u043a\u0430\u044e\u0449\u0438\u0445 \u0432\u043d\u0443\u0442\u0440\u0438 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f, \u0430 \u0442\u0430\u043a\u0436\u0435 \u043f\u043e\u0441\u0442\u0443\u043f\u0430\u044e\u0449\u0438\u0445 \u043e\u0442 \u0432\u043d\u0435\u0448\u043d\u0438\u0445 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u043e\u0432. \u041f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0448\u0443\u043c\u043e\u0438\u0437\u043e\u043b\u044f\u0446\u0438\u0438 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u043e\u0432\u0430\u043d\u043e \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430\u043c \u043b\u044e\u0431\u044b\u0445 \u043c\u0430\u0440\u043e\u043a \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u0435\u0439, \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u044e \u043e\u0442\u0435\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u0435\u0439.")),g(d.a,null),g(f.a,null),g(c.a,null))}},"KA/H":function(e,t,a){"use strict";var n=a("Ff2n"),i=a("q1tI"),r=a.n(i),l=a("qKL8"),c=a.n(l),s=r.a.createElement;t.a=function(e){var t=e.title,a=e.thumb,i=Object(n.a)(e,["title","thumb"]);return s("div",{className:c.a.container},s("div",{className:c.a.flex},a&&s("div",null,s("img",{className:c.a.thumb,src:a})),s("div",null,t&&s("h2",{className:c.a.title},t),s("div",i))))}},"Kbu/":function(e,t,a){e.exports={container:"about_container__pupjd",title:"about_title__1bvW9",inner:"about_inner__1vaSk",item:"about_item__dK8uY",wrap:"about_wrap__B8Buf",index:"about_index__1B-1g",value:"about_value__qX1YA",desc:"about_desc__38Z-Z",descWrap:"about_descWrap__1_5a8",descList:"about_descList__2kNWv",descItem:"about_descItem__2mfrI"}},KcFn:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/services/soundproofing",function(){return a("D0wD")}])},MP88:function(e,t,a){"use strict";var n=a("wx14"),i=a("Ff2n"),r=a("a3WO");var l=a("BsWD");function c(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(l.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s=a("rePB"),u=a("q1tI"),o=a.n(u),m=a("wEEd"),_=a("ddPq"),p=a("0CiD"),v=a.n(p),b=o.a.createElement;function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}t.a=function(e){var t=e.title,a=e.label,n=e.list,i=void 0===n?[]:n;i=i.map((function(e,t){return f(f({},e),{},{id:t})}));var r=null,l=Object(u.useState)([0]),s=l[0],o=l[1],p=Object(u.useState)(0),d=p[0],N=p[1],y=Object(u.useCallback)((function(e,t){return function(a){return o((function(a){var n=a.includes(e);if(t&&!n)for(var r=function(e){i[e].multi||(a=c(a.filter((function(t){return t!==e}))))},l=0;l<i.length;l++)r(l);return a=n?c(a.filter((function(t){return t!==e}))):[].concat(c(a),[e])}))}}));Object(u.useEffect)((function(){for(var e=r.querySelectorAll("input:checked"),t=0,a=0;a<e.length;a++)t+=1*e[a].value;t=new Intl.NumberFormat("ru-RU").format(t),N(t)}));var O=Object(m.e)(i[0],(function(e){return e.id}),{from:{opacity:0},enter:{opacity:1},leave:{opacity:0}});return b("div",{className:v.a.container},b("div",{className:v.a.flex},b("div",{className:v.a.row},b("h2",{className:v.a.title},t),b("div",{className:v.a.desc},a),b("div",{className:v.a.list,ref:function(e){return r=e}},i.map((function(e,t){var a=e.multi?"checkbox":"radio",n=e.multi?"price[".concat(t,"]"):"price[]";return b(g,{key:t,type:a,name:n,value:e.value,label:e.label,onClick:y(t,!e.multi),onChange:function(){},checked:s.includes(t)})}))),b("div",{className:v.a.price},"\u043e\u0442 ",d," \u20bd"),b("div",{className:v.a.call},b(_.a,{action:"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u0437\u0432\u043e\u043d\u043e\u043a"}))),b("div",{className:v.a.row},O.map((function(e){var t=e.item,a=e.props,n=e.key;return b(m.a.div,{key:n,className:v.a.bg,style:f(f({},a),{},{backgroundImage:"url(".concat(t.thumb,")")})})})))))};var g=function(e){var t=e.name,a=e.value,r=e.label,l=e.type,c=void 0===l?"radio":l,s=Object(i.a)(e,["name","value","label","type"]);return b("label",{className:v.a.item},b("input",Object(n.a)({type:c,name:t,value:a},s)),b("span",null,r))}},SSwK:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("ddPq"),l=a("rsgE"),c=a.n(l),s=i.a.createElement;t.a=function(e){var t=e.list,a=void 0===t?[]:t,n=e.hint;return s("div",{className:c.a.container},s("h2",{className:c.a.title},"\u041f\u043e\u0447\u0435\u043c\u0443 \u044d\u0442\u043e \u0432\u044b\u0433\u043e\u0434\u043d\u043e?"),s("div",{className:c.a.list},a.map((function(e,t){return s("div",{key:t,className:c.a.item},s("div",{className:c.a.inner},s("div",{className:c.a.label},e.label),s("div",{className:c.a.value},e.value)))}))),n&&s("div",{className:c.a.hint},s("span",null,"*")," ",n),s("div",{className:c.a.call},s(r.a,{action:"\u0417\u0430\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"})))}},"Sjz/":function(e,t,a){e.exports={team:"team_team__2DoCy",inner:"team_inner__1eyeC",title:"team_title__24z1b",list:"team_list__3qFrL",item:"team_item__2qAhX",img:"team_img__362bD",name:"team_name__3Ck_c",position:"team_position__1Xsng"}},UGUO:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("bJlq"),l=a.n(r),c=i.a.createElement;t.a=function(e){var t=e.list;return c("div",{className:l.a.container},c("div",{className:l.a.inner},t.map((function(e,t){return c("div",{key:t,className:l.a.item},c("div",{className:l.a.wrap},c("div",{className:l.a.img},c("img",{src:e.img,alt:"".concat(e.value," - ").concat(e.label)})),c("div",{className:l.a.value},e.value),c("div",{className:l.a.label},e.label)))}))))}},"Xn/1":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("aqT/"),l=a.n(r),c=a("wEEd"),s=a("Kbu/"),u=a.n(s),o=i.a.createElement;t.a=function(){var e=Object(n.useState)(!1),t=e[0],a=e[1];return o("div",{className:u.a.container},o("div",{className:u.a.inner},o("h2",{className:u.a.title},"\u041a\u0430\u043a \u043c\u044b \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u043c?"),o("div",{className:u.a.inner},[{index:1,value:"\u0417\u0432\u043e\u043d\u043e\u043a \u0438\u043b\u0438 \u0437\u0430\u044f\u0432\u043a\u0430",label:"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0430\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043a \u043d\u0430\u043c \u043d\u0430 \u0443\u0441\u043b\u0443\u0433\u0443 \u0447\u0435\u0440\u0435\u0437 \u0441\u0430\u0439\u0442"},{index:2,value:"\u0421\u043e\u0433\u043b\u0430\u0441\u043e\u0432\u0430\u043d\u0438\u0435 \u0432\u0440\u0435\u043c\u0435\u043d\u0438",label:"\u041c\u044b \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u043c \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u043e\u0435 \u0438 \u0443\u0434\u043e\u0431\u043d\u043e\u0435 \u0434\u043b\u044f \u0432\u0430\u0441 \u0432\u0440\u0435\u043c\u044f"},{index:3,value:"\u041f\u0440\u0438\u0435\u043c \u0430\u0432\u0442\u043e \u0432 \u0440\u0430\u0431\u043e\u0442\u0443",label:"\u041a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0438 \u043f\u0440\u0438\u0435\u043c \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044f \u0432 \u0440\u0430\u0431\u043e\u0442\u0443"},{index:4,value:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c \u0430\u0432\u0442\u043e",label:"\u041f\u043e\u0441\u043b\u0435 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u0435\u043d\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u0432\u044b \u0437\u0430\u0431\u0438\u0440\u0430\u0435\u0442\u0435 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u044c"}].map((function(e,t){return o("div",{key:t,className:u.a.item},o("div",{className:u.a.wrap},o("div",{className:u.a.index},e.index),o("div",{className:u.a.value},e.value),o("div",{className:u.a.label},e.label)))})))),o("div",{className:u.a.descWrap},o("div",{className:u.a.desc},o("h2",{className:u.a.title},"\u041e \u041d\u0430\u0441"),o(l.a,{onChange:function(e){return a(e||t)},partialVisibility:!0},o("div",{className:u.a.descList},[{label:70,postfix:"+",value:"\u0411\u0440\u0435\u043d\u0434\u043e\u0432-\u043f\u0430\u0440\u0442\u043d\u0435\u0440\u043e\u0432 \u0441 \u043c\u0438\u0440\u043e\u0432\u044b\u043c \u0438\u043c\u0435\u043d\u0435\u043c"},{label:850,postfix:"+",value:"\u0410\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u0435\u0439 \u0442\u0435\u043f\u0435\u0440\u044c \u043a\u0430\u043a \u043d\u043e\u0432\u044b\u0435"},{label:0,postfix:null,value:"\u0421\u043b\u0443\u0447\u0430\u0435\u0432 \u043f\u043e\u0440\u0447\u0438 \u044d\u043b\u0435\u043a\u0442\u0440\u0438\u043a\u0438 \u0438\u043b\u0438 \u0441\u0430\u043b\u043e\u043d\u0430"},{label:125,postfix:"+",value:"\u0420\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0438 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432"}].map((function(e,a){var n=Object(c.d)({val:e.label,from:{val:0},reset:t});return o("div",{key:a,className:u.a.descItem},o(c.a.span,null,n.val.interpolate((function(e){return(e=Math.floor(e))>0&&(e+="+"),e})))," ",e.value)})))))))}},YJnR:function(e,t,a){e.exports={container:"steps_container__2-PsM",inner:"steps_inner__1eiUC",bg:"steps_bg__1CiIC",item:"steps_item__2clIn",active:"steps_active__-4TsE",wrap:"steps_wrap__3bBlv",index:"steps_index__1gUbC",value:"steps_value__2SYGu",label:"steps_label__1t5DW"}},a3WO:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}a.d(t,"a",(function(){return n}))},bJlq:function(e,t,a){e.exports={container:"edge_container__homZ_",inner:"edge_inner__3C_Ta",item:"edge_item__ax7S9",img:"edge_img__38HHI",wrap:"edge_wrap__md74P",value:"edge_value__3H14_"}},hd63:function(e,t,a){e.exports={container:"insta_container__19C7N"}},qKL8:function(e,t,a){e.exports={container:"result_container__2kMw9",flex:"result_flex__19Vg7",thumb:"result_thumb__3tWfu",title:"result_title__1zAEb"}},rsgE:function(e,t,a){e.exports={container:"profit_container__1x-5a",title:"profit_title__1ub4u",list:"profit_list__2IKtV",item:"profit_item__2i3Jz",inner:"profit_inner__3GlBk",label:"profit_label__1Tjkl",hint:"profit_hint__1arMB",call:"profit_call__XzsyB"}},uwhF:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("Sjz/"),l=a.n(r),c=i.a.createElement;t.a=function(){return c("div",{className:l.a.team},c("div",{className:l.a.inner},c("h2",{className:l.a.title},"\u041d\u0430\u0448\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0430"),c("div",{className:l.a.list},[{picture:"/img/team/04.jpg",name:"\u042f\u043a\u043e\u0432",position:"\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442 \u043f\u043e \u0442\u043e\u043d\u0438\u0440\u043e\u0432\u043a\u0435"},{picture:"/img/team/01.jpg",name:"\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440",position:"\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442 \u043f\u043e \u0442\u043e\u043d\u0438\u0440\u043e\u0432\u043a\u0435"},{picture:"/img/team/02.jpg",name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",position:"\u0414\u0435\u0442\u0435\u0439\u043b\u0438\u043d\u0433-\u043c\u0430\u0441\u0442\u0435\u0440"}].map((function(e,t){return c("div",{key:t,className:l.a.item},e.picture&&c("img",{className:l.a.img,src:e.picture}),c("div",{className:l.a.name},e.name),c("div",{className:l.a.position},e.position))})))))}},yeLp:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("hd63"),l=a.n(r),c=i.a.createElement;t.a=function(e){e.keys;return c("div",{className:l.a.container},c("div",{className:l.a.list}))}}},[["KcFn",0,2,1,3,4,5,6]]]);
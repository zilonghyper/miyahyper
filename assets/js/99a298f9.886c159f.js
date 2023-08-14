"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[749],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||s;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[m]="string"==typeof e?e:i,a[1]=o;for(var p=2;p<s;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8834:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const s={sidebar_position:4},a="Entity Component System (ECS)",o={unversionedId:"basics/ecs",id:"basics/ecs",title:"Entity Component System (ECS)",description:"ECS, or Entity Component System, is the system Biomes uses to store dynamic data in game. (Bikkie is the system for static data).",source:"@site/docs/basics/ecs.md",sourceDirName:"basics",slug:"/basics/ecs",permalink:"/docs/basics/ecs",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Bikkie",permalink:"/docs/basics/bikkie"},next:{title:"Server Architecture",permalink:"/docs/basics/server-overview"}},c={},p=[{value:"ECS schemas",id:"ecs-schemas",level:2},{value:"Updating schemas",id:"updating-schemas",level:2}],l={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"entity-component-system-ecs"},"Entity Component System (ECS)"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ill-inc/biomes-game/tree/main/src/shared/ecs"},"ECS"),", or ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Entity_component_system"},"Entity Component System"),", is the system Biomes uses to store ",(0,i.kt)("strong",{parentName:"p"},"dynamic")," data in game. (",(0,i.kt)("a",{parentName:"p",href:"/docs/basics/bikkie"},"Bikkie")," is the system for static data)."),(0,i.kt)("h2",{id:"ecs-schemas"},"ECS schemas"),(0,i.kt)("p",null,"ECS schemas are defined in Python, in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ill-inc/biomes-game/tree/main/ecs/defs.py"},(0,i.kt)("inlineCode",{parentName:"a"},"src/ecs/defs.py")),"."),(0,i.kt)("p",null,"These definitions are code-genned into TypeScript definitions that live in ",(0,i.kt)("inlineCode",{parentName:"p"},"src/shared/ecs/gen"),"."),(0,i.kt)("p",null,"A single Entity, such as a Player or NPC, is made up of many reusable components such as an Inventory or Position. Multiple different types of Entities will share different sets of components."),(0,i.kt)("p",null,"In addition to data definitions, we also define:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ECS events that players (and privileged services) may send as events to the ",(0,i.kt)("a",{parentName:"li",href:"./server-overview"},"logic server")),(0,i.kt)("li",{parentName:"ul"},"Selectors to select groups of components at once")),(0,i.kt)("h2",{id:"updating-schemas"},"Updating schemas"),(0,i.kt)("p",null,"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"./b gen:ecs")," to update ECS definitions after updating a schema."))}u.isMDXComponent=!0}}]);
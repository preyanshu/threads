(()=>{var e={};e.id=728,e.ids=[728],e.modules={11185:e=>{"use strict";e.exports=require("mongoose")},47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},57147:e=>{"use strict";e.exports=require("fs")},72254:e=>{"use strict";e.exports=require("node:buffer")},6005:e=>{"use strict";e.exports=require("node:crypto")},87561:e=>{"use strict";e.exports=require("node:fs")},88849:e=>{"use strict";e.exports=require("node:http")},22286:e=>{"use strict";e.exports=require("node:https")},87503:e=>{"use strict";e.exports=require("node:net")},49411:e=>{"use strict";e.exports=require("node:path")},97742:e=>{"use strict";e.exports=require("node:process")},84492:e=>{"use strict";e.exports=require("node:stream")},72477:e=>{"use strict";e.exports=require("node:stream/web")},41041:e=>{"use strict";e.exports=require("node:url")},47261:e=>{"use strict";e.exports=require("node:util")},65628:e=>{"use strict";e.exports=require("node:zlib")},71017:e=>{"use strict";e.exports=require("path")},77282:e=>{"use strict";e.exports=require("process")},12781:e=>{"use strict";e.exports=require("stream")},57310:e=>{"use strict";e.exports=require("url")},71267:e=>{"use strict";e.exports=require("worker_threads")},59796:e=>{"use strict";e.exports=require("zlib")},18507:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>c,pages:()=>d,routeModule:()=>x,tree:()=>u});var s=r(50482),i=r(69108),o=r(62563),n=r.n(o),a=r(68300),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let u=["",{children:["(root)",{children:["profile",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,13857)),"C:\\Users\\pmish\\Desktop\\threads\\app\\(root)\\profile\\[id]\\page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,42313)),"C:\\Users\\pmish\\Desktop\\threads\\app\\(root)\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\pmish\\Desktop\\threads\\app\\(root)\\profile\\[id]\\page.tsx"],c="/(root)/profile/[id]/page",p={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/(root)/profile/[id]/page",pathname:"/profile/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},36203:(e,t,r)=>{Promise.resolve().then(r.bind(r,47125)),Promise.resolve().then(r.bind(r,15746)),Promise.resolve().then(r.bind(r,38085)),Promise.resolve().then(r.bind(r,65102)),Promise.resolve().then(r.bind(r,22315)),Promise.resolve().then(r.bind(r,34910)),Promise.resolve().then(r.t.bind(r,31900,23)),Promise.resolve().then(r.t.bind(r,61476,23))},13857:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x});var s=r(25036),i=r(15904),o=r.n(i),n=r(78502),a=r(44551),l=r(71832),u=r(43280),d=r(28944),c=r(76367),p=r(86840);let x=async function({params:e}){let t=await (0,n.ar)();if(!t)return null;let r=await (0,p.fetchUser)(e.id);return r?.onboarded||(0,a.redirect)("/onboarding"),(0,s.jsxs)("section",{children:[s.jsx(d.Z,{accountId:r.id,authUserId:t.id,name:r.name,username:r.username,imgUrl:r.image,bio:r.bio}),s.jsx("div",{className:"mt-9",children:(0,s.jsxs)(c.mQ,{defaultValue:"threads",className:"w-full",children:[s.jsx(c.dr,{className:"tab",children:l.ox.map(e=>(0,s.jsxs)(c.SP,{value:e.value,className:"tab",children:[s.jsx(o(),{src:e.icon,alt:e.label,width:24,height:24,className:"object-contain"}),s.jsx("p",{className:"max-sm:hidden",children:e.label}),"Threads"===e.label&&s.jsx("p",{className:"ml-1 rounded-sm bg-light-4 px-2 py-1 !text-tiny-medium text-light-2",children:r.threads.length})]},e.label))}),l.ox.map(e=>s.jsx(c.nU,{value:e.value,className:"w-full text-light-1",children:s.jsx(u.Z,{currentUserId:t.id,accountId:r.id,accountType:"User"})},`content-${e.label}`))]})})]})}}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,661,502,356,437,500,819,39,345,674,253,245,878],()=>r(18507));module.exports=s})();
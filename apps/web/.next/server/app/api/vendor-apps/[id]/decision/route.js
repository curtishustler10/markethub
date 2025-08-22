"use strict";(()=>{var e={};e.id=937,e.ids=[937],e.modules={72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},92761:e=>{e.exports=require("node:async_hooks")},22037:e=>{e.exports=require("os")},85477:e=>{e.exports=require("punycode")},12781:e=>{e.exports=require("stream")},76224:e=>{e.exports=require("tty")},35034:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},59796:e=>{e.exports=require("zlib")},79630:(e,r,t)=>{t.r(r),t.d(r,{originalPathname:()=>_,patchFetch:()=>y,requestAsyncStorage:()=>f,routeModule:()=>x,serverHooks:()=>v,staticGenerationAsyncStorage:()=>g});var i={};t.r(i),t.d(i,{POST:()=>m,dynamic:()=>c});var n=t(63036),a=t(5736),o=t(15262),s=t(60942),d=t(53244),p=t(78503),u=t(66456),l=t(45010);let c="force-dynamic";async function m(e,{params:r}){try{let t=await (0,p.JQ)();if(!t)return s.NextResponse.json({error:"Unauthorized"},{status:401});let i=await e.json(),{status:n,message:a}=u.Qk.parse(i),o=(0,d.e)(),{data:c,error:m}=await o.from("vendor_applications").select(`
        *,
        market:markets!market_id (
          id,
          name,
          owner_id
        ),
        vendor:profiles!vendor_id (
          id,
          name,
          email
        )
      `).eq("id",r.id).single();if(m){if("PGRST116"===m.code)return s.NextResponse.json({error:"Application not found"},{status:404});throw m}if(c.market.owner_id!==t.id&&"admin"!==t.role)return s.NextResponse.json({error:"Insufficient permissions"},{status:403});let{data:x,error:f}=await o.from("vendor_applications").update({status:n,message:a||null,decided_at:new Date().toISOString(),decided_by:t.id}).eq("id",r.id).select(`
        *,
        market:markets!market_id (
          id,
          name,
          owner_id
        ),
        vendor:profiles!vendor_id (
          id,
          name,
          email
        ),
        decided_by_profile:profiles!decided_by (
          id,
          name
        )
      `).single();if(f)throw f;try{await l.inngest.send({name:"email/send",data:{template:"application-decision",to_email:c.vendor.email,data:{vendor_name:c.vendor.name||"Vendor",market_name:c.market.name,status:n,message:a,market_contact_email:t.email}}})}catch(e){console.error("Error sending decision email:",e)}return s.NextResponse.json(x)}catch(e){return console.error("Error updating application decision:",e),s.NextResponse.json({error:"Failed to update application"},{status:500})}}let x=new n.AppRouteRouteModule({definition:{kind:a.x.APP_ROUTE,page:"/api/vendor-apps/[id]/decision/route",pathname:"/api/vendor-apps/[id]/decision",filename:"route",bundlePath:"app/api/vendor-apps/[id]/decision/route"},resolvedPagePath:"/Users/gwendolyn/Downloads/markethub/apps/web/app/api/vendor-apps/[id]/decision/route.ts",nextConfigOutput:"",userland:i}),{requestAsyncStorage:f,staticGenerationAsyncStorage:g,serverHooks:v}=x,_="/api/vendor-apps/[id]/decision/route";function y(){return(0,o.patchFetch)({serverHooks:v,staticGenerationAsyncStorage:g})}},78503:(e,r,t)=>{t.d(r,{JQ:()=>n,xv:()=>a});var i=t(53244);async function n(){let e=(0,i.e)(),{data:{user:r}}=await e.auth.getUser();if(!r)return null;let{data:t}=await e.from("profiles").select("*").eq("id",r.id).single();return t}async function a(e,r,t,n){let a=(0,i.e)(),{data:o,error:s}=await a.from("profiles").insert({id:e,email:r,name:t,role:n}).select().single();if(s)throw s;return o}},45010:(e,r,t)=>{t.r(r),t.d(r,{inngest:()=>i});let i=new(t(27039)).Inngest({id:"markethub",name:"MarketHub",signingKey:process.env.INNGEST_SIGNING_KEY||"build-time-dummy-key"})}};var r=require("../../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),i=r.X(0,[522,515,193,942,401,39,509],()=>t(79630));module.exports=i})();
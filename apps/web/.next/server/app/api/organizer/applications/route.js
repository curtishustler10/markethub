"use strict";(()=>{var e={};e.id=9312,e.ids=[9312],e.modules={72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},85477:e=>{e.exports=require("punycode")},12781:e=>{e.exports=require("stream")},35034:e=>{e.exports=require("url")},59796:e=>{e.exports=require("zlib")},71309:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>f,patchFetch:()=>w,requestAsyncStorage:()=>m,routeModule:()=>d,serverHooks:()=>x,staticGenerationAsyncStorage:()=>g});var i={};r.r(i),r.d(i,{GET:()=>u,dynamic:()=>l});var a=r(63036),o=r(5736),s=r(15262),n=r(60942),p=r(53244),c=r(78503);let l="force-dynamic";async function u(e){try{let t=await (0,c.JQ)();if(!t||"market_organizer"!==t.role&&"admin"!==t.role)return n.NextResponse.json({error:"Insufficient permissions"},{status:403});let r=(0,p.e)(),{searchParams:i}=new URL(e.url),a=i.get("market"),o=i.get("status"),s=r.from("vendor_applications").select(`
        *,
        market:markets!market_id (
          id,
          name,
          slug,
          city,
          state,
          status,
          owner_id
        ),
        vendor:profiles!vendor_id (
          id,
          name,
          email,
          phone
        ),
        decided_by_profile:profiles!decided_by (
          id,
          name
        )
      `);"admin"!==t.role&&(s=s.eq("market.owner_id",t.id)),a&&(s=s.eq("market_id",a)),o&&"all"!==o&&(s=s.eq("status",o));let{data:l,error:u}=await s.order("created_at",{ascending:!1});if(u)throw u;let d=l?.filter(e=>"admin"===t.role||e.market?.owner_id===t.id)||[];return n.NextResponse.json({applications:d,total:d.length})}catch(e){return console.error("Error fetching organizer applications:",e),n.NextResponse.json({error:"Failed to fetch applications"},{status:500})}}let d=new a.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/organizer/applications/route",pathname:"/api/organizer/applications",filename:"route",bundlePath:"app/api/organizer/applications/route"},resolvedPagePath:"/Users/gwendolyn/Downloads/markethub/apps/web/app/api/organizer/applications/route.ts",nextConfigOutput:"",userland:i}),{requestAsyncStorage:m,staticGenerationAsyncStorage:g,serverHooks:x}=d,f="/api/organizer/applications/route";function w(){return(0,s.patchFetch)({serverHooks:x,staticGenerationAsyncStorage:g})}},78503:(e,t,r)=>{r.d(t,{JQ:()=>a,xv:()=>o});var i=r(53244);async function a(){let e=(0,i.e)(),{data:{user:t}}=await e.auth.getUser();if(!t)return null;let{data:r}=await e.from("profiles").select("*").eq("id",t.id).single();return r}async function o(e,t,r,a){let o=(0,i.e)(),{data:s,error:n}=await o.from("profiles").insert({id:e,email:t,name:r,role:a}).select().single();if(n)throw n;return s}},53244:(e,t,r)=>{r.d(t,{e:()=>o,m:()=>s});var i=r(76994),a=r(9362);function o(){let e=(0,a.cookies)();return(0,i.lx)("https://wpawqkvfcwbocliwbcaq.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndwYXdxa3ZmY3dib2NsaXdiY2FxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1MjE5NTcsImV4cCI6MjA3MTA5Nzk1N30.RNhc1X4blqoXbgUpeJV-A_hVgWYQIVa0wTk40j-FDgo",{cookies:{get:t=>e.get(t)?.value,set(t,r,i){e.set({name:t,value:r,...i})},remove(t,r){e.set({name:t,value:"",...r})}}})}function s(){return(0,i.lx)("https://wpawqkvfcwbocliwbcaq.supabase.co",process.env.SUPABASE_SERVICE_ROLE_KEY,{cookies:{get(){},set(){},remove(){}}})}}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[4522,3515,942,7193],()=>r(71309));module.exports=i})();
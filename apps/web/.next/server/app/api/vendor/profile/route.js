"use strict";(()=>{var e={};e.id=297,e.ids=[297],e.modules={72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},85477:e=>{e.exports=require("punycode")},12781:e=>{e.exports=require("stream")},57310:e=>{e.exports=require("url")},59796:e=>{e.exports=require("zlib")},19327:(e,r,t)=>{t.r(r),t.d(r,{originalPathname:()=>_,patchFetch:()=>g,requestAsyncStorage:()=>v,routeModule:()=>f,serverHooks:()=>x,staticGenerationAsyncStorage:()=>m});var o={};t.r(o),t.d(o,{GET:()=>u,PUT:()=>c});var n=t(49303),i=t(88716),s=t(60670),a=t(87070),d=t(19692),p=t(90455),l=t(51709);async function u(e){try{let e=await (0,p.JQ)();if(!e||"vendor"!==e.role&&"admin"!==e.role)return a.NextResponse.json({error:"Insufficient permissions"},{status:403});let r=(0,d.e)(),{data:t,error:o}=await r.from("vendor_profiles").select(`
        *,
        vendor:profiles!vendor_id (
          id,
          name,
          email,
          phone
        ),
        documents:vendor_documents (
          id,
          type,
          region,
          verification_status,
          expiry_date,
          created_at
        )
      `).eq("vendor_id",e.id).single();if(o&&"PGRST116"!==o.code)throw o;return a.NextResponse.json(t||null)}catch(e){return console.error("Error fetching vendor profile:",e),a.NextResponse.json({error:"Failed to fetch vendor profile"},{status:500})}}async function c(e){try{let r;let t=await (0,p.JQ)();if(!t||"vendor"!==t.role&&"admin"!==t.role)return a.NextResponse.json({error:"Insufficient permissions"},{status:403});let o=await e.json(),n=(0,d.e)(),{data:i}=await n.from("vendor_profiles").select("vendor_id").eq("vendor_id",t.id).single();if(i){let e=l.P5.parse(o),{data:i,error:s}=await n.from("vendor_profiles").update(e).eq("vendor_id",t.id).select(`
          *,
          vendor:profiles!vendor_id (
            id,
            name,
            email,
            phone
          ),
          documents:vendor_documents (
            id,
            type,
            region,
            verification_status,
            expiry_date,
            created_at
          )
        `).single();if(s)throw s;r=i}else{let e=l.Bh.parse(o),{data:i,error:s}=await n.from("vendor_profiles").insert({...e,vendor_id:t.id}).select(`
          *,
          vendor:profiles!vendor_id (
            id,
            name,
            email,
            phone
          ),
          documents:vendor_documents (
            id,
            type,
            region,
            verification_status,
            expiry_date,
            created_at
          )
        `).single();if(s)throw s;r=i}return a.NextResponse.json(r)}catch(e){return console.error("Error updating vendor profile:",e),a.NextResponse.json({error:"Failed to update vendor profile"},{status:500})}}let f=new n.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/vendor/profile/route",pathname:"/api/vendor/profile",filename:"route",bundlePath:"app/api/vendor/profile/route"},resolvedPagePath:"/Users/gwendolyn/Downloads/markethub/apps/web/app/api/vendor/profile/route.ts",nextConfigOutput:"",userland:o}),{requestAsyncStorage:v,staticGenerationAsyncStorage:m,serverHooks:x}=f,_="/api/vendor/profile/route";function g(){return(0,s.patchFetch)({serverHooks:x,staticGenerationAsyncStorage:m})}},90455:(e,r,t)=>{t.d(r,{JQ:()=>n,xv:()=>i});var o=t(19692);async function n(){let e=(0,o.e)(),{data:{user:r}}=await e.auth.getUser();if(!r)return null;let{data:t}=await e.from("profiles").select("*").eq("id",r.id).single();return t}async function i(e,r,t,n){let i=(0,o.e)(),{data:s,error:a}=await i.from("profiles").insert({id:e,email:r,name:t,role:n}).select().single();if(a)throw a;return s}}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),o=r.X(0,[948,265,775,70,20,238],()=>t(19327));module.exports=o})();
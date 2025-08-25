"use strict";(()=>{var e={};e.id=7297,e.ids=[7297],e.modules={72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},85477:e=>{e.exports=require("punycode")},12781:e=>{e.exports=require("stream")},35034:e=>{e.exports=require("url")},59796:e=>{e.exports=require("zlib")},86336:(e,r,i)=>{i.r(r),i.d(r,{originalPathname:()=>g,patchFetch:()=>h,requestAsyncStorage:()=>m,routeModule:()=>_,serverHooks:()=>x,staticGenerationAsyncStorage:()=>v});var t={};i.r(t),i.d(t,{GET:()=>u,PUT:()=>f,dynamic:()=>c});var o=i(63036),n=i(5736),s=i(15262),a=i(60942),d=i(53244),l=i(78503),p=i(66456);let c="force-dynamic";async function u(e){try{let e=await (0,l.JQ)();if(!e||"vendor"!==e.role&&"admin"!==e.role)return a.NextResponse.json({error:"Insufficient permissions"},{status:403});let r=(0,d.e)(),{data:i,error:t}=await r.from("vendor_profiles").select(`
        *,
        vendor:profiles!claimed_profile_id (
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
      `).or(`vendor_id.eq.${e.id},claimed_profile_id.eq.${e.id}`).single();if(t&&"PGRST116"!==t.code)throw t;return a.NextResponse.json(i||null)}catch(e){return console.error("Error fetching vendor profile:",e),a.NextResponse.json({error:"Failed to fetch vendor profile"},{status:500})}}async function f(e){try{let r;let i=await (0,l.JQ)();if(!i||"vendor"!==i.role&&"admin"!==i.role)return a.NextResponse.json({error:"Insufficient permissions"},{status:403});let t=await e.json(),o=(0,d.e)(),{data:n}=await o.from("vendor_profiles").select("vendor_id, claimed_profile_id, is_verified").or(`vendor_id.eq.${i.id},claimed_profile_id.eq.${i.id}`).single();if(n){let e={...p.P5.parse(t)};n.is_verified||n.claimed_profile_id||(e.claimed_profile_id=i.id,e.is_verified=!0,e.verified_at=new Date().toISOString(),e.verified_by=i.id);let{data:s,error:a}=await o.from("vendor_profiles").update(e).or(`vendor_id.eq.${i.id},claimed_profile_id.eq.${i.id}`).select(`
          *,
          vendor:profiles!claimed_profile_id (
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
        `).single();if(a)throw a;r=s}else{let e=p.Bh.parse(t),{data:n,error:s}=await o.from("vendor_profiles").insert({...e,vendor_id:i.id,claimed_profile_id:i.id,is_verified:!0,verified_at:new Date().toISOString(),verified_by:i.id}).select(`
          *,
          vendor:profiles!claimed_profile_id (
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
        `).single();if(s)throw s;r=n}return a.NextResponse.json(r)}catch(e){return console.error("Error updating vendor profile:",e),a.NextResponse.json({error:"Failed to update vendor profile"},{status:500})}}let _=new o.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/vendor/profile/route",pathname:"/api/vendor/profile",filename:"route",bundlePath:"app/api/vendor/profile/route"},resolvedPagePath:"/Users/gwendolyn/Downloads/markethub/apps/web/app/api/vendor/profile/route.ts",nextConfigOutput:"",userland:t}),{requestAsyncStorage:m,staticGenerationAsyncStorage:v,serverHooks:x}=_,g="/api/vendor/profile/route";function h(){return(0,s.patchFetch)({serverHooks:x,staticGenerationAsyncStorage:v})}},78503:(e,r,i)=>{i.d(r,{JQ:()=>o,xv:()=>n});var t=i(53244);async function o(){let e=(0,t.e)(),{data:{user:r}}=await e.auth.getUser();if(!r)return null;let{data:i}=await e.from("profiles").select("*").eq("id",r.id).single();return i}async function n(e,r,i,o){let n=(0,t.e)(),{data:s,error:a}=await n.from("profiles").insert({id:e,email:r,name:i,role:o}).select().single();if(a)throw a;return s}}};var r=require("../../../../webpack-runtime.js");r.C(e);var i=e=>r(r.s=e),t=r.X(0,[4522,3515,942,7193,2401,6509],()=>i(86336));module.exports=t})();
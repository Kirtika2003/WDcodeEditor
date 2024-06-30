import{l as h,r as l,f as m,_ as j,j as e,g as v,Y as $,L as g,B as i,h as y}from"./index-5oeJ5Vbv.js";import{C as N,D,a as _,b as C,c as b,d as k}from"./dialog-CAzZp_gQ.js";/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=h("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]),c="horizontal",T=["horizontal","vertical"],d=l.forwardRef((t,r)=>{const{decorative:n,orientation:a=c,...o}=t,s=f(a)?a:c,u=n?{role:"none"}:{"aria-orientation":s==="vertical"?s:void 0,role:"separator"};return l.createElement(m.div,j({"data-orientation":s},u,o,{ref:r}))});d.propTypes={orientation(t,r,n){const a=t[r],o=String(a);return a&&!f(a)?new Error(E(o,n)):null}};function E(t,r){return`Invalid prop \`orientation\` of value \`${t}\` supplied to \`${r}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${c}\`.`}function f(t){return T.includes(t)}const p=d,x=l.forwardRef(({className:t,orientation:r="horizontal",decorative:n=!0,...a},o)=>e.jsx(p,{ref:o,decorative:n,orientation:r,className:v("shrink-0 bg-border",r==="horizontal"?"h-[1px] w-full":"h-full w-[1px]",t),...a}));x.displayName=p.displayName;function L({data:t,deleteBtn:r}){const[n,{isLoading:a}]=$(),o=async()=>{try{const s=await n(t._id).unwrap();console.log(s)}catch(s){y(s)}};return e.jsxs("div",{className:"p-3 rounded cursor-pointer bg-slate-900 flex justify-start items-center flex-col gap-3",children:[e.jsxs("div",{className:"__top flex justify-start items-start gap-3 w-full",children:[e.jsx(N,{}),e.jsx("p",{className:"font-mono font-bold text-lg",children:t.title})]}),e.jsx(x,{}),e.jsxs("div",{className:"__btn_container flex gap-3",children:[e.jsx(g,{target:"_blank",to:`/compiler/${t._id}`,children:e.jsx(i,{variant:"secondary",children:"Open Code"})}),r&&e.jsxs(D,{children:[e.jsx(_,{asChild:!0,children:e.jsx(i,{variant:"destructive",loading:!1,children:"Delete"})}),e.jsx(C,{children:e.jsxs(b,{children:[e.jsxs(k,{className:"flex gap-1 justify-center items-center",children:[e.jsx(w,{}),"Delete Code confirmation!"]}),e.jsxs("div",{className:"__url flex justify-center items-center flex-col gap-1",children:[e.jsx("p",{children:"Are you sure, that you want to delete this code, this action is not reversible."}),e.jsx(i,{variant:"destructive",className:"h-full",onClick:o,loading:a,children:"Confirm Delete"})]})]})})]})]})]})}export{L as C};

import{h as _,A as V,i as f,r as c,o as U,c as k,a as l,w as v,b as w,d as b,l as C}from"./index-17af02a4.js";import{u as S,a as g}from"./vee-validate.esm-51871194.js";import{_ as M}from"./_plugin-vue_export-helper-c27b6911.js";let h;const I=new Uint8Array(16);function D(){if(!h&&(h=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!h))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return h(I)}const t=[];for(let o=0;o<256;++o)t.push((o+256).toString(16).slice(1));function R(o,e=0){return(t[o[e+0]]+t[o[e+1]]+t[o[e+2]]+t[o[e+3]]+"-"+t[o[e+4]]+t[o[e+5]]+"-"+t[o[e+6]]+t[o[e+7]]+"-"+t[o[e+8]]+t[o[e+9]]+"-"+t[o[e+10]]+t[o[e+11]]+t[o[e+12]]+t[o[e+13]]+t[o[e+14]]+t[o[e+15]]).toLowerCase()}const N=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),y={randomUUID:N};function P(o,e,u){if(y.randomUUID&&!e&&!o)return y.randomUUID();o=o||{};const s=o.random||(o.rng||D)();if(s[6]=s[6]&15|64,s[8]=s[8]&63|128,e){u=u||0;for(let n=0;n<16;++n)e[u+n]=s[n];return e}return R(s)}const A={setup(){const{handleSubmit:o,handleReset:e}=S({validationSchema:{name(a){return(a==null?void 0:a.length)>=2?!0:"Name needs to be at least 2 characters."},email(a){return/^[a-z.0-9.]+@[a-z.-]+\.[a-z]+$/i.test(a)?!0:"Must be a valid e-mail."},password(a){return(a==null?void 0:a.length)>9&&/[0-9-]+/.test(a)?!0:"Password needs to be at least 9 digits."},passwordConfirm(a){if((a==null?void 0:a.length)>9&&/[0-9-]+/.test(a)&&n.value.value==a)return!0;if((a==null?void 0:a.length)<9)return"Password needs to be at least 9 digits.";if(n.value.value!=a)return"Password and password confirm must be the same."},checkbox(a){return a==="1"?!0:"Must be checked."}}}),u=g("name"),s=g("email"),n=g("password"),x=g("passwordConfirm"),d=g("checkbox"),i=_([]);V.get(f+"/users",a=>i.value=a.data).then(()=>{});const p=o(()=>{const a={id:P(),username:u.value.value,email:s.value.value,password:n.value.value,avatar:`https://xsgames.co/randomusers/assets/avatars/pixel/${i.value.length+1}.jpg`,isAdmin:!1,isLogin:!0},m=_(!1);i.value.map(r=>{r.email.includes(s.value.value)===!0&&(m.value=!0)}),m.value===!1?(i.value=[...i.value,a],V.post(f+"/users",a).then(()=>{localStorage.setItem("authedUser",a.id),setTimeout(()=>{window.location.href="/"},1e3)})):m.value===!0&&alert("Email exists! Try again.")});return{name:u,password:n,passwordConfirm:x,email:s,checkbox:d,submit:p,handleReset:e}}},E={class:"signup"},T=w("h1",null,"Signup",-1),z={class:"mt-5"};function B(o,e,u,s,n,x){const d=c("v-text-field"),i=c("v-checkbox"),p=c("v-btn"),a=c("router-link"),m=c("v-sheet");return U(),k("div",E,[T,l(m,{width:"300",class:"mx-auto mt-15"},{default:v(()=>[w("form",{onSubmit:e[5]||(e[5]=C((...r)=>s.submit&&s.submit(...r),["prevent"]))},[l(d,{modelValue:s.name.value.value,"onUpdate:modelValue":e[0]||(e[0]=r=>s.name.value.value=r),counter:10,"error-messages":s.name.errorMessage.value,label:"Name"},null,8,["modelValue","error-messages"]),l(d,{modelValue:s.email.value.value,"onUpdate:modelValue":e[1]||(e[1]=r=>s.email.value.value=r),"error-messages":s.email.errorMessage.value,label:"E-mail"},null,8,["modelValue","error-messages"]),l(d,{modelValue:s.password.value.value,"onUpdate:modelValue":e[2]||(e[2]=r=>s.password.value.value=r),counter:7,"error-messages":s.password.errorMessage.value,label:"Password"},null,8,["modelValue","error-messages"]),l(d,{modelValue:s.passwordConfirm.value.value,"onUpdate:modelValue":e[3]||(e[3]=r=>s.passwordConfirm.value.value=r),counter:7,"error-messages":s.passwordConfirm.errorMessage.value,label:"Confirm Password"},null,8,["modelValue","error-messages"]),l(i,{modelValue:s.checkbox.value.value,"onUpdate:modelValue":e[4]||(e[4]=r=>s.checkbox.value.value=r),"error-messages":s.checkbox.errorMessage.value,value:"1",label:"I am not a bot",type:"checkbox"},null,8,["modelValue","error-messages"]),l(p,{class:"me-4",type:"submit"},{default:v(()=>[b(" Signup ")]),_:1}),l(p,{onClick:s.handleReset},{default:v(()=>[b(" Clear Form ")]),_:1},8,["onClick"]),w("p",z,[b("Do you have an account? "),l(a,{style:{"text-decoration":"none"},to:"/login"},{default:v(()=>[b("Login")]),_:1})])],32)]),_:1})])}const H=M(A,[["render",B]]);export{H as default};

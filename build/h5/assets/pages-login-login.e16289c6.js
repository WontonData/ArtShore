import{_ as e,l,A as a,h as s,r as t,a as o,b as r,c as i,o as d,d as n,w as u,e as c,j as g,f as m,B as f,s as p,I as b,u as h,g as x}from"./index.96faabba.js";var v=e({name:"Login",data:()=>({imgUrl:"../../static/img/bg.jpg",form:{username:"",password:"",role:"1"},rules:{username:[{required:!0,message:"账号不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}],role:[{required:!0,message:"请选择角色",trigger:"blur"}]},dialogVisible:!1,value1:"false"}),methods:{onSubmit(e){l({url:"http://124.222.242.75:8080/login",data:{username:this.form.username,password:this.form.password},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:e=>{console.log(e.data.data.token),this.$notify({title:"登录成功",message:"欢迎回来~",type:"success"}),a({key:"token",data:e.data.data.token,success:function(){console.log("success")}}),s({url:"../../pages/index/index"})}})},goRegister(){this.$router.push("/pages/register/register")}},onLoad(){}},[["render",function(e,l,a,s,v,w){const y=t(r("all-header"),o),k=b,_=i("el-switch"),V=h,j=i("el-form"),S=i("el-button"),C=i("el-dialog"),q=x;return d(),n(q,{class:"body"},{default:u((()=>[c(q,{class:"outer"},{default:u((()=>[g(" <el-header> "),c(y),g(" </el-header> "),c(q,{class:"outer__inner"},{default:u((()=>[m("div",{style:f({backgroundImage:"url(https://nft-1306406918.cos.ap-shanghai.myqcloud.com/ArtShore/login-bg-Y.png)",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center center",position:"fixed",width:"101%",height:"100%",top:-10,left:-10,objectFit:"cover"}),class:"-z-10absolute"},null,4),m("div",{class:"flex align-middle justify-items-center w-full justify-center text-xl"},[g(" <div>123</div> "),c(j,{ref:"loginForm",model:v.form,rules:v.rules,"label-width":"80px",class:"login-box backdrop-filter backdrop-blur-2xl backdrop-saturate-10 bg-white bg-opacity-70 mt-[30vh] rounded-[2rem] shadow-lg"},{default:u((()=>[m("h3",{class:"login-title"},"欢迎登录"),m("div",{class:"flex felx-row justify-center gap-2"},[m("div",{class:"flex align-middle items-center text-lg font-bold"},[m("div",null,"账号:")]),c(k,{type:"text",class:"",placeholder:"请输入账号",modelValue:v.form.username,"onUpdate:modelValue":l[0]||(l[0]=e=>v.form.username=e)},null,8,["modelValue"])]),m("div",{class:"flex felx-row justify-center gap-2 mt-3"},[m("div",{class:"flex align-middle items-center text-lg font-bold"},[m("div",null,"密码:")]),c(k,{type:"text",class:"",placeholder:"请输入密码",modelValue:v.form.password,"onUpdate:modelValue":l[1]||(l[1]=e=>v.form.password=e)},null,8,["modelValue"])]),m("div",{class:"flex felx-row justify-left gap-2 mt-3"},[m("div",{class:"flex align-middle items-center text-lg font-bold"},[m("div",null,"IP品牌方:")]),c(_,{modelValue:v.value1,"onUpdate:modelValue":l[2]||(l[2]=e=>v.value1=e)},null,8,["modelValue"])]),m("div",{class:"btn-group flex felx-row mt-8 mt-3"},[c(V,{class:"btn bg-yellow-400 leading-6 hover:bg-yellow-600",onClick:l[3]||(l[3]=e=>w.onSubmit("loginForm"))},{default:u((()=>[p(" 登录 ")])),_:1}),g(' <el-button type="primary" @click="onSubmit(\'loginForm\')"\n            >登录</el-button\n          > '),c(V,{class:"btn leading-6",onClick:w.goRegister},{default:u((()=>[p("注册")])),_:1},8,["onClick"]),g(' <el-button @click="goRegister">注册</el-button> ')])])),_:1},8,["model","rules"]),c(C,{title:"温馨提示",visible:v.dialogVisible,width:"30%","before-close":e.handleClose,"append-to-body":""},{default:u((()=>[m("span",null,"请输入账号和密码"),m("span",{slot:"footer",class:"dialog-footer"},[c(S,{type:"primary",onClick:l[4]||(l[4]=e=>v.dialogVisible=!1)},{default:u((()=>[p("确 定")])),_:1})])])),_:1},8,["visible","before-close"])])])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-dfed474e"]]);export{v as default};

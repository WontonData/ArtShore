<template>
  <div :style="{
     backgroundImage:imgUrl ,
     backgroundSize:'cover',
     backgroundRepeat:'no-repeat',
     backgroundPosition:'center center',
     position:'fixed',
     width: '100%',
     height: '100%',
     objectFit: 'cover'
  }">
    <el-form ref="registerForm" :model="form" :rules="rules" label-width="80px" class="login-box">
      <h3 class="login-title">欢迎注册</h3>
      <el-form-item label="账号" prop="username">
        <el-input type="text" placeholder="请输入账号" v-model="form.username"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password"/>
      </el-form-item>
      <el-form-item label="确认密码" prop="repassword">
        <el-input type="password" placeholder="请再次输入密码" v-model="form.repassword"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" v-on:click="onSubmit('registerForm')">立即注册</el-button>
        <el-button @click="goLogin">取消</el-button>
      </el-form-item>
    </el-form>

    <el-dialog
        title="温馨提示"
        v-model="dialogVisible"
        width="30%"
        :before-close="handleClose" append-to-body>
      <span>请输入账号和密码</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// import axios from 'axios'
// import {checkRegister} from "../network/login";
export  default {
  name:"Register",
  data(){
    var repasswordValidator = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.form.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      imgUrl:'url(' + require('../../static/img/bg.jpg') + ')',
      form:{
        username: '',
        password: '',
        repassword: ''
      },

      //表单验证，需要再el-form-item 元素中增加prop属性
      rules:{
        username: [
          {required:true,message:'账号不能为空',trigger:'blur'}
        ],
        password: [
          {required: true,message: '密码不能为空',trigger:'blur'}
        ],
        repassword: [
          {required: true,message: '请再次输入密码',trigger:'blur'},
          {validator: repasswordValidator,trigger: ['blur','change']},
        ]
      },
      //对话框显示和隐藏
      dialogVisible:false
    }
  },
  methods:{
    onSubmit(formName) {
      //为表单绑定验证功能
      this.$refs[formName].validate((valid) =>{
        if (valid){
          //注册检查
          checkRegister(this.form)
              .then(res => {
                console.log(res.data)
                /*弹出侧边通知*/
                this.$notify({
                  title: '注册成功',
                  message: '请登录~',
                  type: 'success'
                });
                //使用 vue-router路由到指定页面，该方式称之为编程式导航
                this.$router.push("/login");
              })
              .catch(err => {
                console.log(err)
                this.$notify({
                  title: '注册失败',
                  message: '该用户名已存在！',
                  type: 'error'
                });
              })
        } else {
          this.dialogVisible = true;
          return false;
        }
      });
    },
    goLogin(){
      this.$router.push("/login");
    }
  },onLoad() {
		uni.request({
		    url: 'https://api.unsplash.com/photos/random', //仅为示例，并非真实接口地址。
		    data: {
		        client_id: 'g_oHhnbTypzI3jl8OE6mIuLNMqru4QhmZh5xErT9YoU'
		    },
		    header: {
		    },
		    success: (res) => {
				this.imgUrl = 'url(' + res.data.urls.raw + ')';
		        console.log(res.data.urls.raw);
		        this.text = 'request success';
		    }
		});
	}
}
</script>

<style scoped>
.login-box{
  background-color: white;
  opacity: 0.85 ;
  border: 1px solid #DCDFE6;
  width: 350px;
  margin:120px 660px;
  padding:30px 35px 15px 35px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  box-shadow:0 0 25px #909399;
}

.login-title{
  text-align:center;
  margin:0 auto 30px auto;
  color:#303133;
}
</style>


<template>
	<view class="body">
		<view class="outer">
			<!-- <el-header> -->
			<all-header></all-header>
			<!-- </el-header> -->
			<view class="outer__inner">
				<div :style="{
        backgroundImage:
          'url(https://nft-1306406918.cos.ap-shanghai.myqcloud.com/ArtShore/login-bg-Y.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        position: 'fixed',
        width: '101%',
        height: '100%',
        top: -10,
        left: -10,
        objectFit: 'cover',
      }" class="-z-10absolute"></div>
				<div class="flex align-middle justify-items-center w-full justify-center text-xl">
					<!-- <div>123</div> -->
					<el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="
          login-box
          backdrop-filter backdrop-blur-2xl backdrop-saturate-10
           bg-white bg-opacity-70
          mt-[30vh]
          rounded-[2rem]
          shadow-lg
        ">
						<h3 class="login-title">欢迎登录</h3>
						<div class="grid grid-cols-3 gap-1 mt-3">
							<div class="col-start-1 align-middle items-center text-lg font-bold text-right">
								<div>账号:</div>
							</div>
							<input type="text" class="col-start-2 col-span-2" placeholder="请输入账号"
								v-model="form.username" />
						</div>
						<div class="grid grid-cols-3 gap-1 mt-3">
							<div class="col-start-1 align-middle items-center text-lg font-bold text-right">
								<div>密码:</div>
							</div>
							<input type="password" class="col-start-2 col-span-2" placeholder="请输入密码"
								v-model="form.password" />
						</div>

						<div class="grid grid-cols-3 gap-1 mt-3">
							<div class="col-start-1 align-middle items-center text-lg font-bold text-right">
								<div>IP品牌方:</div>
							</div>
							<el-switch v-model="value1" />
						</div>

						<div class="btn-group flex felx-row mt-8 mt-3">
							<button class="btn bg-yellow-400 leading-6 hover:bg-yellow-600"
								@click="onSubmit('loginForm')">
								登录
							</button>
							<!-- <el-button type="primary" @click="onSubmit('loginForm')"
            >登录</el-button
          > -->
							<button class="btn leading-6" @click="goRegister">注册</button>
							<!-- <el-button @click="goRegister">注册</el-button> -->
						</div>
					</el-form>

					<el-dialog title="温馨提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose"
						append-to-body>
						<span>请输入账号和密码</span>
						<span slot="footer" class="dialog-footer">
							<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
						</span>
					</el-dialog>
				</div>
			</view>
		</view>
	</view>
</template>

<script>
	// import axios from 'axios'
	//import {checkLogin} from '../network/login'

	export default {
		name: "Login",
		data() {
			return {
				imgUrl: "../../static/img/bg.jpg",
				form: {
					username: "",
					password: "",
					role: "1",
				},
				//表单验证，需要再el-form-item 元素中增加prop属性
				rules: {
					username: [{
						required: true,
						message: "账号不能为空",
						trigger: "blur"
					}, ],
					password: [{
						required: true,
						message: "密码不能为空",
						trigger: "blur"
					}, ],
					role: [{
						required: true,
						message: "请选择角色",
						trigger: "blur"
					}],
				},
				//对话框显示和隐藏
				dialogVisible: false,
				value1: "false"
			};
		},
		methods: {
			onSubmit(formName) {
				uni.request({
					url: "http://124.222.242.75:8080/login", //仅为示例，并非真实接口地址。
					data: {
						username: this.form.username,
						password: this.form.password,
					},
					method: "POST",
					header: {
						"content-type": "application/x-www-form-urlencoded",
					},
					success: (res) => {
						if(res.statusCode==200){
							this.$notify({
								title: "登录成功",
								message: "欢迎回来~",
								type: "success",
							});
							uni.setStorage({
								key: "token",
								data: res.data.data.token,
								success: function() {
									console.log("success");
								},
							});
							uni.redirectTo({
								url: "../../pages/index/index",
							});
						}else{
							this.$notify({
								title: "登录失败",
								message: "账号密码错误~",
								type: "error",
							});
						}
						//弹出侧边通知窗
						
					}
				});
			},
			goRegister() {
				this.$router.push("/pages/register/register");
			},
		},
		onLoad() {
			// uni.request({
			//   url: "https://api.unsplash.com/photos/random", //仅为示例，并非真实接口地址。
			//   data: {
			//     client_id: "g_oHhnbTypzI3jl8OE6mIuLNMqru4QhmZh5xErT9YoU",
			//   },
			//   header: {},
			//   success: (res) => {
			//     this.imgUrl = "url(" + res.data.urls.raw + ")";
			//     console.log(res.data.urls.raw);
			//     this.text = "request success";
			//   },
			// });
		},
	};
</script>

<style scoped>
	.login-box {
		/* background-color: white; */
		/* opacity: 0.85; */
		border: 1px solid rgba(0, 0, 0, 0.1);
		width: 350px;
		/* margin: 120px 660px; */
		padding: 25px 35px 25px 35px;
		/* border-radius: 5px; */
		/* -webkit-border-radius: 5px; */
		/* -moz-border-radius: 5px; */
		/* box-shadow: 0 0 25px #909399; */
	}

	.login-title {
		text-align: center;
		margin: 0 auto 30px auto;
		color: #303133;
	}

	.btn-group {
		text-align: center;
		/* margin: 0 auto 5px auto; */
		align-items: center;
	}
</style>

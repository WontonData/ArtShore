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
					<el-form ref="registerForm" :model="form" :rules="rules" label-width="80px" class="
          login-box
          backdrop-filter backdrop-blur-2xl backdrop-saturate-10
           bg-white bg-opacity-70
          mt-[30vh]
          rounded-[2rem]
          shadow-lg
        ">
						<h3 class="login-title">注册</h3>

						<!-- <el-form :model="form" label-width="120px" >
							<el-form-item label="手机号">
								<el-input v-model="form.name" />
							</el-form-item>
							<el-form-item label="邮箱">
								<el-input v-model="form.name" />
							</el-form-item>
						</el-form> -->
						<div class="grid grid-cols-3 gap-1 mt-3">
							<div class="col-start-1 align-middle items-center text-lg font-bold text-right">
								<div>昵称:</div>
							</div>
							<input type="text" class="col-start-2 col-span-2" placeholder="请输入昵称"
								v-model="form.nickname" />
						</div>

						<div class="grid grid-cols-3 gap-1 mt-3">
							<div class="col-start-1 align-middle items-center text-lg font-bold text-right">
								<div>手机号:</div>
							</div>
							<input type="text" class="col-start-2 col-span-2" placeholder="请输入手机号"
								v-model="form.username" />
						</div>
						<div class="grid grid-cols-3 gap-1 mt-3">
							<div class="col-start-1 align-middle items-center text-lg font-bold text-right">
								<div>邮箱:</div>
							</div>
							<input type="text" class="col-start-2 col-span-2" placeholder="请输入邮箱" v-model="form.mail" />
						</div>

						<div class="grid grid-cols-3 gap-1 mt-3">
							<div class="col-start-1 align-middle items-center text-lg font-bold text-right">
								<div>身份证号:</div>
							</div>
							<input type="text" class="col-start-2 col-span-2" placeholder="请输入身份证号"
								v-model="form.id_crad" />
						</div>

						<div class="grid grid-cols-3 gap-1 mt-3">
							<div class="col-start-1 align-middle items-center text-lg font-bold text-right">
								<div>真实姓名:</div>
							</div>
							<input type="text" class="col-start-2 col-span-2" placeholder="请输入真实姓名"
								v-model="form.id_crad" />
						</div>

						<div class="grid grid-cols-3 gap-1 mt-3">
							<div class="col-start-1 align-middle items-center text-lg font-bold text-right">
								<div>个性签名:</div>
							</div>
							<input type="text" class="col-start-2 col-span-2" placeholder="请输入签名"
								v-model="form.slogan" />
						</div>

						<div class="grid grid-cols-3 gap-1 mt-3s">
							<div class="col-start-1 align-middle items-center text-lg font-bold text-right">
								<div>性别:</div>
							</div>
							<el-select v-model="form.sex" class="m-2" placeholder="男">
								<el-option key="1" label="男" value="1" />
								<el-option key="2" label="女" value="2" />
								<el-option key="3" label="保密" value="3" />
							</el-select>
						</div>
						<div class="grid grid-cols-3 gap-1 mt-3">
							<div class="col-start-1 align-middle items-center text-lg font-bold text-right">
								<div>密码:</div>
							</div>
							<input type="text" class="col-start-2 col-span-2" placeholder="请输入密码"
								v-model="form.password" />
						</div>
						<div class="grid grid-cols-3 gap-1 mt-3">
							<div class="col-start-1 align-middle items-center text-lg font-bold text-right">
								<div>确认密码:</div>
							</div>
							<input type="text" class="col-start-2 col-span-2" placeholder="请输入密码"
								v-model="form.password" />
						</div>

						<div class="btn-group flex felx-row mt-8 mt-3">
							<button class="btn bg-yellow-400 leading-6 hover:bg-yellow-600"
								@click="onRegisterSubmit('registerForm')">
								提交注册
							</button>
							<!-- <el-button type="primary" @click="onSubmit('loginForm')"
            >登录</el-button
          > -->
							<button class="btn leading-6" @click="goLogin">返回登录</button>
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
	export default {
		name: "Login",
		data() {
			return {
				imgUrl: "../../static/img/bg.jpg",
				form: {
					username: "",
					password: "",
					role: "1",
					sex: "",
					age: 0,
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
			onRegisterSubmit(formName) {
				this.$notify({
					title: "内测阶段",
					message: "请联系管理员获取账号~",
					type: "success",
				});
			},
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
						console.log(res.data.data.token);
						//弹出侧边通知窗
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
					},
				});
			},
			goLogin() {
				this.$router.push("/pages/login/login");
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
		width: 500px;
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

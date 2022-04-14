<template>

	<view class="body">
		<view class="outer">
			<!-- <el-header> -->
			<all-header></all-header>
			<!-- </el-header> -->
			<view class="outer__inner">




				<!--  <div>task</div>-->
				<div class="task">
					<!--    标题-->
					<el-row>
						<el-col :span="24">
							<div class="title">创作者中心</div>
						</el-col>
					</el-row>

					<!--    日常任务模块-->
					<div class="daily_task">
						<!--标题部分-->
						<el-row>
							<el-col :span="12">
								<div class="daily_task1_left">日常任务</div>
							</el-col>
							<el-col :span="12">
								<div class="daily_task1_right">
									<span>玩法说明 </span>
									<i class="el-icon-question"></i>
								</div>
							</el-col>
						</el-row>

						<!--主体部分1-->
						<el-row :gutter="20" class="daily_task_main">
							<el-col :span="6">
								<div class="daily_task_icon">
									<img src="@/static/img/content/photo.png">
								</div>
							</el-col>
							<el-col :span="7">
								<div class="daily_task_title">
									<!--            任务-->
									<el-row>
										<el-col :span="24">
											<div class="daily_task_title1">完善个人资料与实名认证</div>
										</el-col>
									</el-row>
									<!--            任务说明-->
									<el-row>
										<el-col :span="24">
											<div class="daily_task_title2"><img
													src="@/static/img/content/fire.png">完成任务，人气+100</div>
										</el-col>
									</el-row>
								</div>
							</el-col>
							<el-col :span="7">
								<div class="daily_task_progress">
									<el-progress :percentage="50" :color="'#e79c45'" :format="format"></el-progress>
								</div>
							</el-col>
							<el-col :span="4">
								<div></div>
							</el-col>
						</el-row>
						<!--主体部分2-->
						<el-row :gutter="20" class="daily_task_main">
							<el-col :span="6">
								<div class="daily_task_icon">
									<img src="@/static/img/content/fabu.png">
								</div>
							</el-col>
							<el-col :span="7">
								<div class="daily_task_title">
									<!--            任务-->
									<el-row>
										<el-col :span="24">
											<div class="daily_task_title1">发布首个数字藏品</div>
										</el-col>
									</el-row>
									<!--            任务说明-->
									<el-row>
										<el-col :span="24">
											<div class="daily_task_title2"><img
													src="@/static/img/content/fire.png">完成任务，人气+20</div>
										</el-col>
									</el-row>
								</div>
							</el-col>
							<el-col :span="7">
								<div class="daily_task_progress">
									<el-progress :percentage="100" :color="'#67C23A'" :format="format"></el-progress>
								</div>
							</el-col>
							<el-col :span="4">
								<div></div>
							</el-col>
						</el-row>
						<!--主体部分3-->
						<el-row :gutter="20" class="daily_task_main">
							<el-col :span="6">
								<div class="daily_task_icon">
									<img src="@/static/img/content/heart.png">
								</div>
							</el-col>
							<el-col :span="7">
								<div class="daily_task_title">
									<!--            任务-->
									<el-row>
										<el-col :span="24">
											<div class="daily_task_title1">发布1个盲盒NFT集合</div>
										</el-col>
									</el-row>
									<!--            任务说明-->
									<el-row>
										<el-col :span="24">
											<div class="daily_task_title2"><img
													src="@/static/img/content/fire.png">完成任务，人气+100</div>
										</el-col>
									</el-row>
								</div>
							</el-col>
							<el-col :span="7">
								<div class="daily_task_progress">
									<el-progress :percentage="0" :color="'#ffffff'" :format="format"></el-progress>
								</div>
							</el-col>
							<el-col :span="4">
								<div></div>
							</el-col>
						</el-row>
						<!--主体部分4-->
						<el-row :gutter="20" class="daily_task_main">
							<el-col :span="6">
								<div class="daily_task_icon">
									<img src="@/static/img/content/good.png">
								</div>
							</el-col>
							<el-col :span="7">
								<div class="daily_task_title">
									<!--            任务-->
									<el-row>
										<el-col :span="24">
											<div class="daily_task_title1">作品获得10人点赞</div>
										</el-col>
									</el-row>
									<!--            任务说明-->
									<el-row>
										<el-col :span="24">
											<div class="daily_task_title2"><img
													src="@/static/img/content/fire.png">完成任务，人气+20</div>
										</el-col>
									</el-row>
								</div>
							</el-col>
							<el-col :span="7">
								<div class="daily_task_progress">
									<el-progress :percentage="80" :format="format"></el-progress>
								</div>
							</el-col>
							<el-col :span="4">
								<div></div>
							</el-col>
						</el-row>
						<!--主体部分5-->
						<el-row :gutter="20" class="daily_task_main">
							<el-col :span="6">
								<div class="daily_task_icon">
									<img src="@/static/img/content/people.png">
								</div>
							</el-col>
							<el-col :span="7">
								<div class="daily_task_title">
									<!--            任务-->
									<el-row>
										<el-col :span="24">
											<div class="daily_task_title1">拥有50粉丝关注
											</div>
										</el-col>
									</el-row>
									<!--            任务说明-->
									<el-row>
										<el-col :span="24">
											<div class="daily_task_title2"><img
													src="@/static/img/content/fire.png">完成任务，人气+20</div>
										</el-col>
									</el-row>
								</div>
							</el-col>
							<el-col :span="7">
								<div class="daily_task_progress">
									<el-progress :percentage="30" :color="'#e76259'" :format="format"></el-progress>
								</div>
							</el-col>
							<el-col :span="4">
								<div></div>
							</el-col>
						</el-row>

					</div>

					<!--    特别任务模块-->
					<div class="special_task">
						<!--      标题部分-->
						<el-row>
							<el-col :span="24">
								<div class="special_task_top1">特别任务</div>
							</el-col>
						</el-row>
						<el-row>
							<el-col :span="24">
								<div class="special_task_top2">为你独家准备的人气任务，完成它，人气升级更快速</div>
							</el-col>
						</el-row>
						<!--      主体部分-->
						<div class="card">
							<el-row>
								<!--1-->
								<el-col :span="12">
									<div>
										<el-card class="box-card1">
											<!--第1部分-->
											<el-row>
												<el-col :span="24">
													<div class="card1">1周新增100个粉丝</div>
												</el-col>
											</el-row>
											<!--第2部分-->
											<el-row>
												<el-col :span="24">
													<div class="card2">100 <span>个</span></div>
												</el-col>
											</el-row>
											<!--第3部分-->
											<el-row>
												<el-col :span="24">
													<div class="card3">
														<img src="@/static/img/content/fire.png"> 完成任务，人气+2000
														<el-button size="small" round>0 / 100</el-button>
													</div>
												</el-col>
											</el-row>
										</el-card>
									</div>
								</el-col>
								<!--2-->
								<el-col :span="11">
									<div>
										<el-card class="box-card2">
											<!--第1部分-->
											<el-row>
												<el-col :span="24">
													<div class="card1">上传中国风数字藏品</div>
												</el-col>
											</el-row>
											<!--第2部分-->
											<el-row>
												<el-col :span="24">
													<div class="card2">3 <span>个</span></div>
												</el-col>
											</el-row>
											<!--第3部分-->
											<el-row>
												<el-col :span="24">
													<div class="card3">
														<img src="@/static/img/content/fire.png"> 完成任务，人气+200
														<el-button size="small" round>0 / 3</el-button>
													</div>
												</el-col>
											</el-row>
										</el-card>
									</div>
								</el-col>
								<!--3-->
								<el-col :span="1">
									<div class="card_test">
										<img src="@/static/img/content/hand.png">
										查看更多
									</div>
								</el-col>
							</el-row>
						</div>

					</div>

				</div>



			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "Task",
		methods: {
			format(percentage) {
				if (percentage == 50) {
					return percentage === 50 ? '1/2' : `${percentage}%`;
				} else if (percentage == 30) {
					return percentage === 30 ? '15/50' : `${percentage}%`;
				} else if (percentage == 100) {
					return percentage === 100 ? '1/1' : `${percentage}%`;
				} else if (percentage == 80) {
					return percentage === 80 ? '8/10' : `${percentage}%`;
				} else if (percentage == 0) {
					return percentage === 0 ? '0/1' : `${percentage}%`;
				}
			}
		}
	}
</script>

<style scoped>
	.title {
		margin-bottom: 20px;
		padding-bottom: 3px;
		float: left;
		font-size: x-large;
		font-weight: bolder;
		border-bottom: 3px solid rgb(94, 94, 94);

		/*被可恶李诚勒令去掉的阴影*/
		/*font-family: helvetica,arial,sans-serif;*/
		/*color: #ffffff;*/
		/*text-shadow:0 0 0.2em #212121,*/
		/*-0 -0 0.2em #21222c;*/

	}

	.task {
		background-color: rgb(238, 238, 238);
		padding: 20px 20%;
	}

	.daily_task {
		height: 410px;
		background-color: #ffffff;
		margin-bottom: 10px;
		padding: 30px 50px;
		border-radius: 10px;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
	}

	.special_task {
		height: 240px;
		background-color: white;
		padding: 30px 40px;
		border-radius: 10px;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
	}

	.daily_task1_left {
		float: left;
		font-size: 20px;
		font-weight: bold;
		/*padding-left: 100px;*/
	}

	.daily_task1_right {
		float: right;
		color: #909399;
		font-size: 13px;
	}

	.special_task_top1 {
		float: left;
		font-size: 20px;
		font-weight: bold;
	}

	.special_task_top2 {
		float: left;
		color: #909399;
		font-size: 13px;
		margin-top: 8px;
	}

	.daily_task_main {
		height: 38px;
		margin-top: 35px;
	}

	.daily_task_icon {
		background-color: rgb(238, 238, 238);
		padding: 5px;
		height: 42px;
		width: 42px;
		border-radius: 50%;
		float: right;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.daily_task_icon img {
		height: 28px;
		width: 28px;
	}

	.daily_task_title {
		/*background-color: lightblue;*/
		margin: 5px 0px;
		float: left;
	}

	.daily_task_title1 {
		font-weight: 600;
		font-size: 17px;
		float: left;
		color: #373737;
	}

	.daily_task_title2 {
		margin-top: 5px;
		font-size: 13px;
		float: left;
		color: #909399;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.daily_task_title2 img {
		height: 20px;
		width: 20px;
		margin-right: 8px;
	}

	.daily_task_progress {
		/*background-color: beige;*/
		margin: 15px 20px;
		/*float: left;*/
	}

	.box-card1 {
		width: 300px;
		height: 180px;
		background: linear-gradient(135deg, #0e698e, #89c2ba);
		/*background: linear-gradient(135deg, #456d8e, #94bccb);*/
		border-radius: 8px;
	}

	.box-card2 {
		width: 300px;
		height: 180px;
		background: linear-gradient(135deg, #9460d0, #94bccb);
		border-radius: 8px;
	}

	.card {
		margin: 20px 0px;
	}

	.card_test {
		font-size: 10px;
		color: #909399;
	}

	.card1 {
		font-size: 15px;
		color: #ebebeb;
		float: left;
	}

	.card2 {
		font-size: 45px;
		float: left;
		color: #ebebeb;
		margin-top: 20px;
	}

	.card2 span {
		font-size: 15px;
	}

	.card3 {
		margin-top: 25px;
		font-size: 12px;
		color: #ebebeb;
		float: left;
	}

	.card3 button {
		margin-left: 50px;
		background-color: rgba(0, 0, 0, 0);
		color: white;
	}
</style>

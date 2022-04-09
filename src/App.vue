<script>
uni.addInterceptor("request", {
  invoke(args) {
    // request 触发前拼接 url
    if (args.url.indexOf("://") < 0) {
      args.url = "http://124.222.242.75:8080/" + args.url;
      // args.url = "http://127.0.0.1:8080/" + args.url;
    }
    const token = uni.getStorageSync("token");
    args.header.token = token;

    console.log("args", args);
    //
  },
  success(args) {
    // 请求成功后，修改code值为1
    // args.data.code = 1
  },
  fail(err) {
    // console.log('interceptor-fail',err)
  },
  complete(res) {
    // console.log('interceptor-complete', res)
  },
});
export default {
  onLaunch: function () {
    console.warn(
      "当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！"
    );
    console.log("App Launch");
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
};
</script>


<style>

@tailwind base;
@tailwind components;
/* @tailwind utilities; */
@layer components {
  .btn {
    @apply py-2 px-4 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75 cursor-pointer;
  }
}
</style>

<style lang="scss">
/*每个页面公共css */
// @import "@/uni_modules/uni-scss/index.scss";
/* #ifndef APP-NVUE */
// @import "@/static/customicons.css";

@import "tailwindcss/base";
@import "tailwindcss/utilities";
@import "tailwindcss/tailwind.css";
// 设置整个项目的背景色
page {
  background-color: #f5f5f5;
}

/* #endif */
.example-info {
  font-size: 14px;
  color: #333;
  padding: 10px;
}

.menu-item {
  height: 100%;
  font-family: 'DM Sans', sans-serif;
  font-weight: bolder;
  font-size: 1rem;
  display: flex;
  align-items: center;
  line-height: var(--el-menu-item-height);
  color: var(--el-menu-text-color);
  padding: 0 20px;
  list-style: none;
  cursor: pointer;
  position: relative;
  transition: border-color var(--el-transition-duration),
  background-color var(--el-transition-duration),
  color var(--el-transition-duration);
  box-sizing: border-box;
  white-space: nowrap;
}
.menu-item:hover {
  outline: none;
  color: var(--el-menu-hover-text-color);
  background-color: rgba(129, 140, 255, 0.2);
}
</style>

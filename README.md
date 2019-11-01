# h5脚手架

> 纯h5脚手架

## 功能简述

1. 主界面包含: Home；Test(发送请求、样式定制、Toast、Vuex）。
2. 主功能包含: vue-router、vuex、less、eslint、axios、请求配置、网络监听、全局过滤器、引入Vant、懒加载、vconsole...

## 安装预览

```bash
# 安装依赖
npm i || yarn || cnpm

# 建议使用npm，如果你偏要用 yarn 的话，可能会遇到无法热更新的问题（包括但不仅限于热更新问题），对于热更新问题暂时可以在 package.json 里增加 resolutions 字段锁版本解决：
"resolutions": {
  "webpack-dev-server": "3.1.10"
}

# 启动本地调试
npm run dev || npm start || npm run serve

# 打包压缩
npm run build

# eslint格式校验
npm run lint
```

## 项目结构

```
.
├── README.md  ------------------------ 说明文件
├── package.json  --------------------- 项目配置
├── vue.config.js  -------------------- webpack配置入口
├── public  --------------------------- 入口文件
├──  └── index.html ------------------- 入口页面
└── src  ------------------------------ 源码目录
    ├── api  -------------------------- 请求
    ├──  └── index  ------------------- 公共引入接口
    ├──  └── modules ------------------ 所有接口（按模块区分）
    ├──  └── config ------------------- 请求配置
    ├──  └── setup  ------------------- axios封装
    ├── assets  ----------------------- 项目静态资源文件目录（图片、公共样式、字体等）
    ├── components -------------------- 业务模块集合目录（组件）
    ├── plugins ----------------------- vue-cli插件自动生成目录
    ├── router  ----------------------- 路由配置
    ├── store  ------------------------ 状态管理
    ├──  └── index   ------------------ 公共引入
    ├──  └── modules ------------------ 所有store（按模块区分）
    ├── utils  ------------------------ 状态管理
    ├──  └── debounce ----------------- 防抖函数
    ├──  └── filters ------------------ 全局过滤器
    ├──  └── index   ------------------ 所有公共函数
    ├──  └── networkListening --------- 网络监听器
    ├── views  ------------------------ 页面集合目录
    ├── App.vue  ---------------------- 主组件
    └── main.js  ---------------------- 项目级入口配置文件
```

## 常见问题说明

1. 路由切换时默认自动回到上次浏览的位置，如需要让其回到顶部，解决办法：[参考链接](https://router.vuejs.org/zh/guide/advanced/scroll-behavior.html#%E5%BC%82%E6%AD%A5%E6%BB%9A%E5%8A%A8)

````js
// 可以在router.js中，添加scrollBehavior选项
const router = new VueRouter({
     routes: [...],
     scrollBehavior (to, from, savedPosition) {
           return new Promise((resolve, reject) => {
               setTimeout(() => {
                     resolve({ x: 0, y: 0 })
               }, 0)
           })
     }
})
````

2. 运行前，编辑器请先安装eslint插件，框架中已配置了githooks，即代码commit到git之前会预检查并按照.eslinttrc.js规则自动修复代码，不通过不能提交到git中，配置githooks详情vue.config.js
# 锌防腐平台

这是一个使用Vue.js 3构建的锌防腐平台前端应用程序。

## 功能特点

- 基于Vue 3框架开发
- 使用Vuex进行状态管理
- 使用Vue Router进行路由管理
- 集成Element Plus UI组件库
- 支持国际化（i18n）
- 响应式设计，适配不同设备

## 安装和使用

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run serve

# 构建生产环境版本
npm run build

# 运行代码检查
npm run lint
```

## 项目结构

```
├── public            # 静态资源
├── src               # 源代码
│   ├── assets        # 资源文件
│   ├── components    # 组件
│   ├── i18n          # 国际化
│   ├── locales       # 语言文件
│   ├── router        # 路由
│   ├── store         # Vuex状态
│   ├── views         # 页面视图
│   ├── App.vue       # 主应用组件
│   └── main.js       # 入口文件
├── .eslintrc.js      # ESLint配置
├── package.json      # 项目依赖
└── README.md         # 项目说明
```
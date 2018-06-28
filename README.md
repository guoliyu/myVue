# vue-cli 脚手架

    vue-cli 是一个vue脚手架工具，用于快速构建项目结构
    vue-cli 本身集成了多种项目模板
    simple 很少简单
    webpack 包含ESLint 代码规范检查和unit单元测试
    webpack-simple 没有代码规范和单元测试
    browserify
    browserify-simple

## 1.1

    安装 vue-cli，配置 vue 命令环境
    cnpm install vue-cli -g
    vue --version
    vue list

## 1.2 初始化项目，生成项目模板

    语法 vue init 模板名称 项目名称
    进入生成的项目目录
    cnpm install安装相关依赖

## 1.3 运行

    npm run dev //启动测试服务
    npm run build //将项目文件打包输出dist目录 项目上线的话将dist 目录拷贝到服务器上

### 2 使用 webpack 模板

    vue init webpack vue-cli-demo2
    ESlint 是用来统一代码风格的工具，要求比较严格

[官网](http://eslint.org)

### 3 vue-router 模块化

    cnpm install vue-router -S //生产依赖
    1.编辑组件引入组件 main.js
    2.编写路由组件 .vue
    3.编写路由配置 router Config
    4.创建路由实例
    5.引用路由实例

### 4 axios 模块化

    cnpm install axios -S //生产依赖
    使用的两种方式：
    方式1.在每一个组件中引入axios 没有全局
    方式2.在main.js全局引入axios并添加到vue的原型中
    Vue.prototype.$http = axios; //定义Vue属性axios

### 5 为自定义组件添加事件

    1.定义自定义组件
    2.引入自定义组件
    3.注册自定义组件
    4.添加方法需要修饰符//自定义事件需要加修饰符 <myButton@click.native="sendAjax"></myButton>

### 6 Element UI （PC 端）

    Element UI 由饿了么团队提供的一套基于 Vue2.0 的组件库
    可以快速搭建网站
    MintUI(移动端)
    1.安装生产
    2.引入并使用
    如果报字体错误，需要cnpm install url-loader -D
    然后
    {
    test: /\.(woff|svg|eot|ttf)\??.\*$/,
    loader: 'url-loader'
    }
    即可
    3.css样式和字体图标都需要loader解析
    style-loader/url-loader

### 7 less 使用

    安装loader，需要两个：less ; less-loader
    cnpm install less less-loader -D

### 8 自定义全局组件（插件）

    1.全局组件（插件）：就是指可以在main.js中使用Vue.use()惊醒全局引入，然后再其他组件中都可以使用，如vue-router
    import VueRouter from 'vue-router'
    2.普通组件（插件）：每次使用是都需要引入，如axios
    import axios from 'axios'


    二.编写插件
    1.编写自定义组件login.vue
    2.导出组件
    import Login from './login.vue'
    export default {
        install: function (Vue) {
            Vue.component('Login', Login)
        }
    }
    3.main.js引入组件，然后使用组件
    import Login from './compontents/user'
    Vue.use(Login);
    4.App.vue使用组件
    <Login></Login>

### 9 安装 Vuex

    1.cnpm install vuex -S
    2.创建store.js文件，在mian.js中导入配置store选项
    3.编写store.js

Vuex 的核心是 Store（仓库），相当于一个容器，一个 store 实例中包含一下属性的方法。

    store       定义属性（状态，数据）
    getter      用来获取属性
    actions     定义方法（动作）
    commit      提交变化，修改数据的唯一方法就是提交mutation
    mutation    定义变化
    注：不能直接修改数据，必须显式提交变化，目的是为了追踪到状态的变化

    4.编写App.vue
    在子组件中访问Store对象的两种方式：
    方式一：通过this.$store访问
    方式二：通过mapState,mapGetters,mapActions访问，vuex提供了两种方法
        mapState        获取state
        mapGetters      获取gettres
        mapActions      获取actions

### 9 管理 vuex

    ├── index.html
    ├── main.js
    ├── api
    │   └── ... # 抽取出API请求
    ├── components
    │   ├── App.vue
    │   └── ...
    └── store
        ├── index.js          # 我们组装模块并导出 store 的地方
        ├── actions.js        # 根级别的 action
        ├── mutations.js      # 根级别的 mutation
        └── modules
            ├── cart.js       # 购物车模块
            └── products.js   # 产品模块

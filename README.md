# vue-ssr(nuxt.js)

> My stellar Nuxt.js project

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## nuxt 使用 vant 按需加载

[https://juejin.im/post/5e012778518825127f085da8][按需引用 vant]

## nuxt 中的路由

- 动态创建，不需要手动配置(详细看 .nuxt/router.js)
- query 传参，直接在路由跳转加 query 即可 this.\$router.push({name: "", query: {}})
- params 传参，文件命名时使用下划线开头 \_id.vue /xxx/:id
- 嵌套路由 统一文件夹下有 detail.vue 文件和 detail 文件夹，那么 detail 文件夹下的文件默认为子路由 子路由视图 <nuxt-child />
- 全局路由拦截 可以在 plugins 中加一个 router.js 文件, 具体使用参考 plugins/router.js

## layouts 公共布局

- 所有公共的页面可以写在这里，default 会所有页面都是应用，其他命名的，需要在引用的页面注明一下 layout: xxx 参考 layout/user 与 pages/user
- 利用这个特性，可以做一些类似组件的通用布局。比如：错误页面

## head 的配置 可以在每个页面配置(参考 paegs/user)，也可以在 nuxt.config.js 全局配置

## asyncData 的使用

- 仅限于在页面组件使用， 在 layouts 下面的那些不能使用
- 能够在渲染组件之前异步获取数据
- 需要把数据返回，返回的数据包裹在 {} 中， 最后会和 data 合并
- 第一个参数为当前上下文对象
- 由于是在组件初始化钱被调用，所以无法使用 this

## nuxt 整合 axios（主要使用 modules 的 @nuxtjs/@axios） 也可以使用 plugins 形式自定义一个 axios

- 安装 npm install @nuxtjs/axios 安装完成会默认在上下文中有一个 \$axios
- 在 nuxt.config.js 中配置

```
modules: [
    '@nuxtjs/axios'
],
axios: {
    proxy: true
},
proxy: {
    "/api/": "http://localhost:3001/"
}
```

- axios 拦截器 参考 plugins/axios 需要在 nuxt.config.js 的 plugins 中声明使用

## nuxt 的 vuex

- 应用根目录如果存在 store 目录，nuxt 将启用 vuex 状态树
- 按照 store/index.js 中的写法，必须具名导出

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

#### nuxt 中的路由

###### 动态创建，不需要手动配置(详细看 .nuxt/router.js)

###### query 传参，直接在路由跳转加 query 即可   this.\$router.push({name: "", query: {}})

###### params 传参，文件命名时使用下划线开头    _id.vue /xxx/:id

###### 嵌套路由 统一文件夹下有 detail.vue 文件和 detail 文件夹，那么 detail 文件夹下的文件默认为子路由  子路由视图 <nuxt-child />

###### 全局路由拦截 可以在 plugins 中加一个 router.js 文件, 具体使用参考 plugins/router.js
const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router({
  prefix: '/api/users'
})

const userList = [{
  id: "01",
  name: "小明"
}, {
  id: "02",
  name: "小兰"
}]


router.get('/', ctx => {
  ctx.body = {
    code: 200,
    data: userList
  }
})

app.use(router.routes())
app.listen(3001)

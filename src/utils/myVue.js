import { createApp } from 'vue'
import api from "@/api/index.js"
import antdNeed from "./antdNeed"
const echarts = require("echarts")


function myVue(app){
  const myApp = createApp(app)
  // 按需引入antd2.0组件
  for(let item of antdNeed){
    myApp.use(item)
  }

  // 注入到vue中
  myApp.config.globalProperties.$echarts = echarts;
  myApp.config.globalProperties.$api = api
  return myApp
}

export default myVue
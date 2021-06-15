import hotReload from '@/utils/hotReload'
import api from "@/api/index.js"

hotReload()
api.testApi.test()
console.log('this is background main.js')


// chrome长连接消息发送
async function longConnectMsgSend(type,data){
  let connectObj = {
    content:"sulg-long-connect-content",
    popup:"sulg-long-connect-popup"
  }
  let tabId = await getCurrentTabId()
  let port = chrome.tabs.connect(tabId, {name: connectObj[type]});
  port.postMessage(data)
}
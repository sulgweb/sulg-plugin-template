function setSync(params) {
  return new Promise((resolve, reject) => {
    chrome.storage.local.set(params, res => {
      resolve("success");
    })
  })
}

function getSync(params) {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(params, res => {
      resolve(res);
    })
  })
}

// 获取当前选项卡ID
function getCurrentTabId() {
  return new Promise((resolve, reject) => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      resolve(tabs.length ? tabs[0].id : null)
    });
  })
}

async function sortConnectMsgSend(data){
  return await new Promise((resovle,reject)=>{
    chrome.runtime.sendMessage(data,res =>  resovle(res));
  })
}

export { setSync, getSync, getCurrentTabId,sortConnectMsgSend}
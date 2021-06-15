import axios from "@/utils/http.js"

class Test{
  test(){
    return axios.get("https://api.apiopen.top/getJoke?page=1&count=2&type=video").then(res=>{
      console.log(res)
      return res
    })
  }
}

const test = new Test()
export default test
const commonApiObj = {}

let files = require.context('./modules', true, /\.js$/)
files.keys().forEach(key=>{
    let newKey = key.replace(/(\.\/|\.js)/g, '')
    commonApiObj[newKey+"Api"] = require(`./modules/${newKey}`).default;
})
export default commonApiObj

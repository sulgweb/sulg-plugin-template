module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    // 按需引入
    [
      "import", 
      { 
        "libraryName": "ant-design-vue",
        "libraryDirectory": "es", 
        "style": "css" 
      }
    ] // `style: true` 会加载 less 文件
  ]
}

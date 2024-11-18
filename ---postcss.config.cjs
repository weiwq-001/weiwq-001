module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: [
        "Android 4.1",
        "iOS 7.1",
        "Chrome > 31",
        "ff > 31",
        "ie >= 8",
        "last 10 versions", // 所有主流浏览器最近10版本用
      ],
      grid: true,
    },
    "postcss-pxtorem": {
      rootValue: 90, // 根据设计稿调整，375px宽设计稿设置为37.5，750px宽设置为75
      propList: ["*"], // 需要转换的属性
      unitPrecision: 5, // 保留小数位数
      minPixelValue: 2, // 小于或等于 2px 的值不转换
    },
  },
};

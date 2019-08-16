module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/YunNet-Frontend/" : "",
  devServer: {
    proxy: {
      "/api": {
        target: "https://yunnet-boom.dorm.yuntech.edu.tw",
        secure: false
      }
    }
  }
};

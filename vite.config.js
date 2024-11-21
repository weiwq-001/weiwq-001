import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  base: '/', // 修改为你的部署路径（如 '/subpath/'），如果项目部署在子目录中
  resolve: {
    alias: {
      src: path.resolve(__dirname, "./src"),
      components: path.resolve(__dirname, "src/components"),
      pages: path.resolve(__dirname, "src/views"),
      apis: path.resolve(__dirname, "src/apis"),
    },
  },
  server: {
    hmr: true, // 热更新
    watch: {
      usePolling: true, // 启用轮询模式
      interval: 100, // 轮询间隔时间
    },
    proxy: {
      "/test": {
        target: "http://apis.juhe.cn", // 后端 API 服务的地址
        changeOrigin: true, // 是否修改请求头中的 Origin 字段
        secure: false, // 如果后端是 HTTPS，但证书不受信任时设置为 false
        rewrite: (path) => path.replace(/^\/api/, ""), // 可选：重写路径，如果需要去掉 /api 前缀
      },
      "/api": {
        target: "http://kkls.zaidaxue.com:9909", // 后端 API 服务的地址
        changeOrigin: true, // 是否修改请求头中的 Origin 字段
        secure: false, // 如果后端是 HTTPS，但证书不受信任时设置为 false
        rewrite: (path) => path.replace(/^\/api/, ""), // 可选：重写路径，如果需要去掉 /api 前缀
      },
    },
  },
  plugins: [react()],
  // 最大兼容性，为 iOS Safari >= 10 和 Chrome >= 49：
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          chrome: "49",
          ios: "10",
        },
      },
    ],
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$gradual-blue: #0057da;$gradual-pink: #f621b9;`,
      },
    },
  },  
});                       
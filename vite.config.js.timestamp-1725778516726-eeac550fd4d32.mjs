// vite.config.js
import { defineConfig } from "file:///C:/Users/USER/Desktop/%E5%85%AD%E8%A7%92%E4%B8%8A%E8%AA%B2/w5/node_modules/vite/dist/node/index.js";
import { ViteEjsPlugin } from "file:///C:/Users/USER/Desktop/%E5%85%AD%E8%A7%92%E4%B8%8A%E8%AA%B2/w5/node_modules/vite-plugin-ejs/index.js";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { glob } from "file:///C:/Users/USER/Desktop/%E5%85%AD%E8%A7%92%E4%B8%8A%E8%AA%B2/w5/node_modules/glob/dist/mjs/index.js";
import liveReload from "file:///C:/Users/USER/Desktop/%E5%85%AD%E8%A7%92%E4%B8%8A%E8%AA%B2/w5/node_modules/vite-plugin-live-reload/dist/index.js";
var __vite_injected_original_import_meta_url = "file:///C:/Users/USER/Desktop/%E5%85%AD%E8%A7%92%E4%B8%8A%E8%AA%B2/w5/vite.config.js";
function moveOutputPlugin() {
  return {
    name: "move-output",
    enforce: "post",
    apply: "build",
    async generateBundle(options, bundle) {
      for (const fileName in bundle) {
        if (fileName.startsWith("/")) {
          const newFileName = fileName.slice("/".length);
          bundle[fileName].fileName = newFileName;
        }
      }
    }
  };
}
var vite_config_default = defineConfig({
  // base 的寫法：
  // base: '/Repository 的名稱/'
  base: "/w5/",
  plugins: [
    liveReload(["./layout/**/*.ejs", "./pages/**/*.ejs", "./**/*.html"]),
    ViteEjsPlugin(),
    moveOutputPlugin()
  ],
  server: {
    // 啟動 server 時預設開啟的頁面
    open: "pages/index.html"
  },
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        glob.sync("/**/*.html").map((file) => [
          path.relative("", file.slice(0, file.length - path.extname(file).length)),
          fileURLToPath(new URL(file, __vite_injected_original_import_meta_url))
        ])
      )
    },
    outDir: "dist"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxVU0VSXFxcXERlc2t0b3BcXFxcXHU1MTZEXHU4OUQyXHU0RTBBXHU4QUIyXFxcXHc1XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxVU0VSXFxcXERlc2t0b3BcXFxcXHU1MTZEXHU4OUQyXHU0RTBBXHU4QUIyXFxcXHc1XFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9VU0VSL0Rlc2t0b3AvJUU1JTg1JUFEJUU4JUE3JTkyJUU0JUI4JThBJUU4JUFBJUIyL3c1L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCB7IFZpdGVFanNQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1lanMnO1xyXG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAnbm9kZTp1cmwnO1xyXG5pbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnO1xyXG5pbXBvcnQgeyBnbG9iIH0gZnJvbSAnZ2xvYic7XHJcblxyXG5pbXBvcnQgbGl2ZVJlbG9hZCBmcm9tICd2aXRlLXBsdWdpbi1saXZlLXJlbG9hZCc7XHJcblxyXG5mdW5jdGlvbiBtb3ZlT3V0cHV0UGx1Z2luKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lOiAnbW92ZS1vdXRwdXQnLFxyXG4gICAgZW5mb3JjZTogJ3Bvc3QnLFxyXG4gICAgYXBwbHk6ICdidWlsZCcsXHJcbiAgICBhc3luYyBnZW5lcmF0ZUJ1bmRsZShvcHRpb25zLCBidW5kbGUpIHtcclxuICAgICAgZm9yIChjb25zdCBmaWxlTmFtZSBpbiBidW5kbGUpIHtcclxuICAgICAgICBpZiAoZmlsZU5hbWUuc3RhcnRzV2l0aCgnLycpKSB7XHJcbiAgICAgICAgICBjb25zdCBuZXdGaWxlTmFtZSA9IGZpbGVOYW1lLnNsaWNlKCcvJy5sZW5ndGgpO1xyXG4gICAgICAgICAgYnVuZGxlW2ZpbGVOYW1lXS5maWxlTmFtZSA9IG5ld0ZpbGVOYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIC8vIGJhc2UgXHU3Njg0XHU1QkVCXHU2Q0Q1XHVGRjFBXHJcbiAgLy8gYmFzZTogJy9SZXBvc2l0b3J5IFx1NzY4NFx1NTQwRFx1N0EzMS8nXHJcbiAgYmFzZTogJy93NS8nLFxyXG4gIHBsdWdpbnM6IFtcclxuICAgIGxpdmVSZWxvYWQoWycuL2xheW91dC8qKi8qLmVqcycsICcuL3BhZ2VzLyoqLyouZWpzJywgJy4vKiovKi5odG1sJ10pLFxyXG4gICAgVml0ZUVqc1BsdWdpbigpLFxyXG4gICAgbW92ZU91dHB1dFBsdWdpbigpLFxyXG4gIF0sXHJcbiAgc2VydmVyOiB7XHJcbiAgICAvLyBcdTU1NUZcdTUyRDUgc2VydmVyIFx1NjY0Mlx1OTgxMFx1OEEyRFx1OTU4Qlx1NTU1Rlx1NzY4NFx1OTgwMVx1OTc2MlxyXG4gICAgb3BlbjogJ3BhZ2VzL2luZGV4Lmh0bWwnLFxyXG4gIH0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgaW5wdXQ6IE9iamVjdC5mcm9tRW50cmllcyhcclxuICAgICAgICBnbG9iXHJcbiAgICAgICAgICAuc3luYygnLyoqLyouaHRtbCcpXHJcbiAgICAgICAgICAubWFwKChmaWxlKSA9PiBbXHJcbiAgICAgICAgICAgIHBhdGgucmVsYXRpdmUoJycsIGZpbGUuc2xpY2UoMCwgZmlsZS5sZW5ndGggLSBwYXRoLmV4dG5hbWUoZmlsZSkubGVuZ3RoKSksXHJcbiAgICAgICAgICAgIGZpbGVVUkxUb1BhdGgobmV3IFVSTChmaWxlLCBpbXBvcnQubWV0YS51cmwpKSxcclxuICAgICAgICAgIF0pXHJcbiAgICAgICksXHJcbiAgICB9LFxyXG4gICAgb3V0RGlyOiAnZGlzdCcsXHJcbiAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBcVQsU0FBUyxvQkFBb0I7QUFDbFYsU0FBUyxxQkFBcUI7QUFDOUIsU0FBUyxxQkFBcUI7QUFDOUIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsWUFBWTtBQUVyQixPQUFPLGdCQUFnQjtBQU5zSixJQUFNLDJDQUEyQztBQVE5TixTQUFTLG1CQUFtQjtBQUMxQixTQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxPQUFPO0FBQUEsSUFDUCxNQUFNLGVBQWUsU0FBUyxRQUFRO0FBQ3BDLGlCQUFXLFlBQVksUUFBUTtBQUM3QixZQUFJLFNBQVMsV0FBVyxHQUFHLEdBQUc7QUFDNUIsZ0JBQU0sY0FBYyxTQUFTLE1BQU0sSUFBSSxNQUFNO0FBQzdDLGlCQUFPLFFBQVEsRUFBRSxXQUFXO0FBQUEsUUFDOUI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjtBQUVBLElBQU8sc0JBQVEsYUFBYTtBQUFBO0FBQUE7QUFBQSxFQUcxQixNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsSUFDUCxXQUFXLENBQUMscUJBQXFCLG9CQUFvQixhQUFhLENBQUM7QUFBQSxJQUNuRSxjQUFjO0FBQUEsSUFDZCxpQkFBaUI7QUFBQSxFQUNuQjtBQUFBLEVBQ0EsUUFBUTtBQUFBO0FBQUEsSUFFTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLE1BQ2IsT0FBTyxPQUFPO0FBQUEsUUFDWixLQUNHLEtBQUssWUFBWSxFQUNqQixJQUFJLENBQUMsU0FBUztBQUFBLFVBQ2IsS0FBSyxTQUFTLElBQUksS0FBSyxNQUFNLEdBQUcsS0FBSyxTQUFTLEtBQUssUUFBUSxJQUFJLEVBQUUsTUFBTSxDQUFDO0FBQUEsVUFDeEUsY0FBYyxJQUFJLElBQUksTUFBTSx3Q0FBZSxDQUFDO0FBQUEsUUFDOUMsQ0FBQztBQUFBLE1BQ0w7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsRUFDVjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==

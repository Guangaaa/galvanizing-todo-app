import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './assets/styles.css'

// 替换ResizeObserver以完全解决循环通知问题
const _ResizeObserver = window.ResizeObserver;
window.ResizeObserver = class PatchedResizeObserver extends _ResizeObserver {
  constructor(callback) {
    super((entries, observer) => {
      // 过滤掉可能导致循环的通知
      window.requestAnimationFrame(() => {
        if (!Array.isArray(entries)) {
          return;
        }
        
        // 避免在调用回调之前页面重新计算布局
        if (callback) {
          callback(entries, observer);
        }
      });
    });
  }
};

// 为ResizeObserver错误添加全局处理（作为后备）
const prevError = window.onerror;
window.onerror = function(msg, url, line, col, error) {
  // 忽略ResizeObserver错误
  if (msg && typeof msg === 'string' && msg.includes('ResizeObserver')) {
    console.warn('忽略ResizeObserver错误:', msg);
    return true; // 阻止错误继续传播
  }
  
  // 使用原有的错误处理
  return prevError ? prevError(msg, url, line, col, error) : false;
};

// 处理未捕获的promise错误
window.addEventListener('unhandledrejection', function(event) {
  if (event.reason && event.reason.message && 
      typeof event.reason.message === 'string' && 
      event.reason.message.includes('ResizeObserver')) {
    console.warn('忽略ResizeObserver Promise错误:', event.reason.message);
    event.preventDefault();
    event.stopPropagation();
  }
});

const app = createApp(App)

// 注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router)
app.use(store)
app.use(i18n)
app.use(ElementPlus, {
  locale: zhCn,
})

app.mount('#app')
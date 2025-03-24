/* eslint-disable */
<template>
  <div class="app-container">
    <router-view />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

// 初始化语言设置
const initLocale = () => {
  const savedLocale = localStorage.getItem('locale')
  if (savedLocale) {
    locale.value = savedLocale
  }
}

// 在组件挂载时初始化语言设置
onMounted(() => {
  initLocale()
})
</script>

<style>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

#app {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

:root {
  /* 全局颜色变量 - 工业风格 */
  --primary-color: #2b5d80; /* 锌防腐蓝 */
  --secondary-color: #a0b4c5; /* 锌金属银灰 */
  --accent-color: #5a8db8; /* 强调色 */
  --warning-color: #e69d00; /* 警告色 */
  --danger-color: #c94b4b; /* 危险色 */
  --success-color: #4caf50; /* 成功色 */
  --background-color: #f5f7f9; /* 背景色 */
  --text-color: #333; /* 文本色 */
  --border-color: #dcdfe6; /* 边框色 */
}

body {
  background-color: var(--background-color);
  color: var(--text-color);
  font-family: Arial, Helvetica, sans-serif;
  min-width: 100%;
  min-height: 100vh;
}

/* 响应式布局 */
@media screen and (max-width: 1200px) {
  .container {
    width: 100%;
    padding: 0 15px;
  }
}

/* 确保所有页面级别的容器都能占满宽度 */
.container-fluid {
  width: 100%;
  padding-right: 0;
  padding-left: 0;
  margin-right: auto;
  margin-left: auto;
}

/* 更好的图片自适应 */
img {
  max-width: 100%;
  height: auto;
}
</style>
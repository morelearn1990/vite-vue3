<template>
  <div>about</div>
  <p>message: {{ t('hello') }}</p>
  <div class="flex flex-row bg-black">
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </div>
  <router-view></router-view>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { locale } = useI18n({ useScope: 'global' });
const { t } = useI18n();
setTimeout(() => {
  locale.value = 'en';
}, 2000);
</script>
<i18n lang="jsonc">
{
  "zh": {
    // 注释
    "hello": "你好，世界去！"
  },
  "en": {
    "hello": "hello world!"
  },
  "ja": {
    "hello": "こんにちは、世界！"
  }
}
</i18n>
<route lang="jsonc">
{
  "name": "about-setting",
  "meta": {
    // asdfsadf
    "requiresAuth": false
  }
}
</route>

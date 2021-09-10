<template>
  <div>setting</div>
  <p>message: {{ t('hello') }}</p>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();
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

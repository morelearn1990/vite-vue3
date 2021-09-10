<script lang="ts" setup>
import Demo from '@/components/demo.vue';

const aaa = true;

const aaaa = { a: 1 };
</script>

<template>
  <div>about</div>
  <Demo props1="aaa" :props2="aaa" :props4="aaaa" />
  <router-view></router-view>
</template>

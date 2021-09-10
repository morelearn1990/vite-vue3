<script lang="ts" setup>
import Demo from '@/components/demo.vue';

const aaa = true;
</script>

<template>
  <div>about</div>
  <Demo props1="aaa" :props2="aaa" />
  <router-view></router-view>
</template>

<template>
  <div>
    portal
    {{ token }}
    <button @click="setTokenStr">12323</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useTitle } from '@vueuse/core';
import { useAxios } from '@vueuse/integrations/useAxios';

export default defineComponent({
  name: 'App',
  setup(props) {
    const { data } = useAxios('/aaa');
    useTitle('aaaa');
    return {};
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

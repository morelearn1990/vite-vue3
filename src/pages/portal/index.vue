<template>
    <div>
        {{ token }}
        <button @click="setTokenStr">12323</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useModule, useStore } from 'vue3-reactive-store';
import tokenHook, { tokenHookType } from '@/store/auth';

console.log('tokenHook', tokenHook);

export default defineComponent({
    name: 'App',
    setup(props) {
        const { token, setToken } = useModule<tokenHookType, string>(tokenHook, '');
        const setTokenStr = () => setToken(token.value + 'dfdf');
        return {
            token,
            setToken,
            setTokenStr,
        };
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

<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import { useModule, useStore } from 'vue3-reactive-store';
import hookModule, { HookFnType } from '@/store/auth';

export default defineComponent({
    name: 'App',
    components: {
        HelloWorld,
    },
    setup(props) {
        const [token, setToken] = useModule<HookFnType, number>(hookModule, 10);

        // 或者希望使用 store 时, 可以借助 `useStore`
        // const store = useStore()
        // const { state, add } = store.injectModule<HookFnType>(hookModule);

        return {
            token,
            setToken,
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

import { reactive, ref } from 'vue';
import { exportGlobalModule } from 'vue3-reactive-store';

const tokenHook = () => {
    // const state = reactive({ token: '' });
    const tokenRef = ref('');

    const setToken = (token: string) => {
        tokenRef.value = token;
    };

    return { token: tokenRef, setToken };
};

export type tokenHookType = typeof tokenHook;
export default exportGlobalModule<tokenHookType>(tokenHook);

import { exportGlobalModule } from 'vue3-reactive-store';
import { reactive } from 'vue';

const tokenHook = () => {
    const state = reactive({ token: '' });

    const setToken = (token: string) => {
        state.token = token;
    };

    return [state, setToken];
};

export type HookFnType = typeof tokenHook;
export default exportGlobalModule<HookFnType>(tokenHook);

<script lang="ts" setup>
import {} from 'vue';

interface DemoProps {
  props1: string | number;
  props2: boolean;
  props3: Array<string>;
  props4?: {
    [key: string]: number;
  };
}

const props = withDefaults(defineProps<DemoProps>(), {
  props1: '01',
  props2: false,
  props3: () => ['11', '1', '1'],
});
console.log('验证搜索');

const a = props.props4?.aaa;

const emit = defineEmits<{
  'update:value1': (value: string) => void;
}>();

emit['update:value1']('aaaaa');

const emit2 = defineEmits(['aaa', 'bbbb']);

emit2('aaa', 'aaa', 1);
emit2('aaa', 'aaa');
</script>
<template>
  <div class="flex flex-col bg-black">demo components</div>
</template>
<style lang="less" scoped></style>

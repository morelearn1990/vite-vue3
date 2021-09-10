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

const a = props.props4?.aaa;

const emit = defineEmits<{
  (e: 'change', id: number): void;
  (e: 'update', value: string): void;
}>();

const update = () => {
  emit('update', '11');
};
</script>
<template>
  <div class="flex flex-row bg-black aaa" @click="update">
    demo components
    <div>1</div>
    <div>2</div>
  </div>
</template>
<style lang="less" scoped>
.aaa {
  &.bbb {
    color: red;
  }
}
</style>

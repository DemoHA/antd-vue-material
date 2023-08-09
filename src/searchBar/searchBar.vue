<template>
  <div class="search-bar-conatainer">
    <div class="show-op-area">
      <div class="left-wraper">
        <slot></slot>
        <span class="more-text-btn" v-if="showMore" @click="switchShowMoreStatus">
          {{ showMoreStatus ? '收起 ^' : '更多 >' }}
        </span>
      </div>
      <div class="right-wraper">
        <slot name="rightNode"></slot>
      </div>
    </div>
    <div class="hidden-op-area" v-if="showMoreStatus">
      <slot name="moreNode"></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const showMoreStatus = ref(false);
const switchShowMoreStatus = () => {
  showMoreStatus.value = !showMoreStatus.value;
};

withDefaults(
  defineProps<{
    showMore: boolean;
  }>(),
  { showMore: false }
);
defineSlots<{
  default(): any;
  rightNode(): any;
  moreNode(): any;
}>();
</script>
<style lang="less" scoped>
.search-bar-conatainer {
  .show-op-area {
    display: flex;
    align-items: center;
    .left-wraper {
      flex: 1;
      .more-text-btn {
        color: #4b82f1;
        font-size: 12px;
        white-space: nowrap;
        cursor: pointer;
        margin-left: 8px;
      }
    }
  }
  .hidden-op-area {
    min-height: 30px;
  }
}
</style>

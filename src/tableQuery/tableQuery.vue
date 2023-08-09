<template>
  <div class="table-query-container" ref="tableQueryRef">
    <origin-table v-bind="{ ...$attrs, scroll }" ref="tableRef">
      <template v-for="(item, key) in $slots" :key="key" #[key]="scoped">
        <slot :name="key" v-bind="scoped"></slot>
      </template>
    </origin-table>
  </div>
</template>

<script lang="ts" setup>
import { Table as OriginTable } from 'ant-design-vue';
import type { TableProps } from 'ant-design-vue';
import { onMounted, ref, useAttrs, useSlots } from 'vue';
import { useResizeObserver, useDebounceFn } from '@vueuse/core';
import type { ResizeObserverEntry } from '@vueuse/core';
import './cover.css';

// const props = defineProps<>();
const attr = useAttrs();
console.log('attr', attr);
useSlots();
// console.log('table query props:', props);
const minH = 100,
  rowHeight = 25;
// table query container node ref
const tableQueryRef = ref<HTMLDivElement | null>(null);
const tableRef = ref<HTMLDivElement | null>(null);
// collection of container node height
const collectionHeight = ref({
  tableQueryH: 0,
});
const scroll = ref<TableProps['scroll']>({ scrollToFirstRowOnChange: true, y: minH });
const pagination = ref<TableProps['pagination']>(attr.pagination || {});
console.log(pagination.value, 99999);
let minPaginationHeight = 0;
if (pagination.value) {
  if (!pagination.value.hideOnSinglePage && pagination.value.total === 0) {
    minPaginationHeight = 36;
  }
}
// change table body height
const onTableBodyHeightChange = useDebounceFn(() => {
  // 由于ant-design-vue中的table中包含着title,footer,pagination,tableHeader,tableBody,Summary
  const titleNode = tableQueryRef.value?.querySelector('.ant-table-title') as HTMLElement;
  const titleNodeH = titleNode?.offsetHeight || 0;
  const footerNode = tableQueryRef.value?.querySelector(
    '.ant-table-footer'
  ) as HTMLElement;
  const footerNodeH = footerNode?.offsetHeight || 0;
  const paginationNode = tableQueryRef.value?.querySelector(
    '.ant-table-pagination'
  ) as HTMLElement;
  const paginationNodeH = paginationNode?.offsetHeight || minPaginationHeight;
  const tableHeaderNode = tableQueryRef.value?.querySelector(
    '.ant-table-header'
  ) as HTMLElement;
  const tableHeaderNodeH = tableHeaderNode?.offsetHeight || 0;
  const summaryNode = tableQueryRef.value?.querySelector(
    '.ant-table-summary'
  ) as HTMLElement;
  const summaryNodeH = summaryNode?.offsetHeight || 0;
  const tableBodyNode = tableQueryRef.value?.querySelector(
    '.ant-table-body'
  ) as HTMLElement;
  const tableBodyNodeH =
    collectionHeight.value.tableQueryH -
    titleNodeH -
    footerNodeH -
    paginationNodeH -
    tableHeaderNodeH -
    summaryNodeH;
  const setH = tableBodyNodeH >= minH ? tableBodyNodeH : minH;
  if (scroll.value) {
    scroll.value.y = Math.floor(setH);
  }
  if (pagination.value) {
    const size = Math.floor(setH / rowHeight);
    pagination.value.onChange &&
      pagination.value.onChange(pagination.value.current || 0, size);
  }
  tableBodyNode.style.height = setH + 'px';
}, 200);
// dom ResizeObserver callback
const onNodeResizeObserver = (entries: ReadonlyArray<ResizeObserverEntry>) => {
  const entry = entries[0];
  const { height } = entry.contentRect;
  const mathFloorHeight = Math.ceil(height);

  if (collectionHeight.value.tableQueryH !== mathFloorHeight) {
    collectionHeight.value.tableQueryH = mathFloorHeight;
    onTableBodyHeightChange();
  }
};

onMounted(() => {
  // init table query container height
  const parentNode = tableQueryRef.value?.parentNode as HTMLElement;
  if (parentNode) {
    const offsetHeight = parentNode.offsetHeight;
    const tableQueryHeight = tableQueryRef.value?.offsetHeight;
    if (offsetHeight !== tableQueryHeight) {
      (tableQueryRef.value as HTMLDivElement).style.height = '100%';
    }
  }
});
useResizeObserver(tableQueryRef, onNodeResizeObserver);
</script>

import type { IPublicTypeComponentMetadata } from '@alilc/lowcode-types';

export default <IPublicTypeComponentMetadata>{
  componentName: 'ASearchBar',
  npm: {
    destructuring: true,
    componentName: 'ASearchBar',
  },
  title: '搜索bar',
  group: '自定义组件',
  category: '数据展示',
  configure: {
    component: {
      isContainer: true,
    },
    props: [
      {
        title: '是否展示更多',
        name: 'showMore',
        setter: 'BoolSetter',
        defaultValue: false,
      },
      {
        title: '左侧内容',
        name: 'children',
        setter: 'SlotSetter',
      },
      {
        title: '右侧内容',
        name: 'rightNode',
        setter: 'SlotSetter',
      },
      {
        title: '更多区域',
        name: 'moreNode',
        setter: 'SlotSetter',
        condition: {
          type: 'JSFunction',
          value: 'target => !!target.getProps().getPropValue("showMore")',
        },
      },
    ],
  },
  snippets: [
    {
      title: '搜索bar',
      schema: {
        componentName: 'ASearchBar',
        props: {
          children: [
            {
              componentName: 'AButton',
              children: '新增',
            },
          ],
        },
      },
    },
  ],
};

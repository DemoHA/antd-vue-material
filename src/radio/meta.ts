import avatarImage from './__screenshots__/img.png';

export default {
  group: 'Antd',
  componentName: 'ARadio',
  title: '单选框',
  category: '表单',
  npm: {
    destructuring: true,
    componentName: 'ARadio',
  },
  props: [
    {
      name: 'children',
      title: { label: '内容', tip: '内容' },
      propType: 'string',
      setter: 'StringSetter',
      supportVariable: true,
    },
    {
      name: 'v-model:checked',
      title: { label: '是否选中', tip: 'v-model:checked | 指定当前是否选中' },
      setter: 'ExpressionSetter',
      supportVariable: true,
    },
    {
      name: 'autoFocus',
      title: { label: '自动聚焦', tip: '自动获取焦点' },
      propType: 'bool',
      setter: 'BoolSetter',
    },
    {
      name: 'disabled',
      title: { label: '是否禁用', tip: '是否为禁用状态' },
      propType: 'bool',
      setter: 'BoolSetter',
      supportVariable: true,
    },
    {
      name: 'value',
      title: { label: 'value值', tip: 'value | 根据 value 进行比较，判断是否选中' },
      setter: 'ExpressionSetter',
    },
  ],
  configure: {
    supports: {
      style: true,
    },
  },
  snippets: [
    {
      title: '单选框',
      screenshot: avatarImage,
      schema: {
        componentName: 'ARadio',
        props: {
          children: 'Radio',
        },
      },
    },
  ],
};

import avatarImage from './__screenshots__/img.png';

export default {
  group: 'Antd',
  componentName: 'ACheckbox',
  title: '多选框',
  category: '表单',
  npm: {
    destructuring: true,
    componentName: 'ACheckbox',
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
      title: { label: '自动聚焦', tip: 'autoFocus | 自动获取焦点' },
      propType: 'bool',
      setter: 'BoolSetter',
      supportVariable: true,
    },
    {
      name: 'disabled',
      title: { label: '是否禁用', tip: '是否为禁用状态' },
      propType: 'bool',
      setter: 'BoolSetter',
      supportVariable: true,
    },
    {
      name: 'indeterminate',
      title: { label: '不确定状态', tip: 'indeterminate状态' },
      propType: 'bool',
      setter: 'BoolSetter',
      supportVariable: true,
    },
    {
      name: 'value',
      title: { label: 'value值', tip: 'value | 与 CheckboxGroup 组合使用时的值' },
      setter: 'ExpressionSetter',
    },
  ],
  configure: {
    supports: {
      style: true,
      events: [
        {
          name: 'onChange',
          template:
            "onChange(event,${extParams}){\n// 变化时回调函数\nconsole.log('onChange', event);}",
        },
      ],
    },
  },
  snippets: [
    {
      title: '多选框',
      screenshot: avatarImage,
      schema: {
        componentName: 'ACheckbox',
        props: {
          children: 'checkbox',
        },
      },
    },
  ],
};

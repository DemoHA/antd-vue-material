import avatarImage from './__screenshots__/tag.png';

const meta = {
  group: 'Antd',
  componentName: 'ATag',
  title: '标签',
  category: '反馈',
  props: [
    {
      name: 'children',
      title: { label: '内容', tip: '内容' },
      propType: 'string',
    },
    {
      name: 'closable',
      title: { label: '可关闭', tip: '标签是否可以关闭' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'color',
      title: { label: '标签色', tip: '标签色' },
      propType: 'string',
    },
    {
      name: 'closeIcon',
      title: { label: '自定义关闭按钮', tip: 'closeIcon | 自定义关闭按钮' },
      propType: 'node',
      setter: 'SlotSetter',
    },
    {
      name: 'v-model:visible',
      title: { label: '是否显示标签', tip: 'v-model:visible | 是否显示标签' },
      propType: 'bool',
      setter: ['BoolSetter', 'VariableSetter'],
    },
    {
      name: 'icon',
      title: { label: '设置图标', tip: 'icon | 设置图标' },
      propType: 'node',
      setter: 'SlotSetter',
    },
  ],
  configure: {
    supports: {
      style: true,
      events: [
        {
          name: 'onClose',
          template:
            "onClose(event,${extParams}){\n// 关闭时的回调\nconsole.log('onClose',event);}",
        },
      ],
    },
  },
  snippets: [
    {
      title: '标签',
      screenshot: avatarImage,
      schema: {
        componentName: 'ATag',
        props: {
          color: 'magenta',
          children: '标签',
        },
      },
    },
  ],
};

export default meta;

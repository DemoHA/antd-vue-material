export default {
  group: 'Antd',
  componentName: 'AMenuItem',
  title: '菜单项',
  category: '导航',
  npm: {
    destructuring: true,
    componentName: 'AMenuItem',
  },
  props: [
    {
      name: 'children',
      title: { label: '内容', tip: 'children | 内容' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'disabled',
      title: { label: '是否禁用', tip: 'disabled | 是否为禁用状态' },
      propType: 'bool',
      defaultValue: false,
    },
    {
      name: 'icon',
      title: { label: '菜单图标', tip: 'icon | 菜单图标' },
      propType: 'node',
    },
    {
      name: 'key',
      title: { label: '唯一标志', tip: 'item 的唯一标志' },
      propType: 'string',
    },
    {
      name: 'title',
      title: {
        label: '悬浮标题',
        tip: '设置收缩时展示的悬浮标题',
      },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
  ],
  configure: {
    component: {
      isContainer: true,
      nestingRule: { parentWhitelist: ['AMenu'] },
    },
    supports: {
      style: true,
    },
  },
  snippets: [
    {
      title: '菜单项',
      screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/menu-1.jpg',
      schema: {
        componentName: 'AMenuItem',
        props: {},
      },
    },
  ],
};

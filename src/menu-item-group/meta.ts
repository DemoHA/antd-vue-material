export default {
  group: 'Antd',
  componentName: 'AMenuItemGroup',
  title: '菜单组',
  category: '导航',
  npm: {
    destructuring: true,
    componentName: 'AMenuItemGroup',
  },
  props: [
    {
      name: 'title',
      title: { label: '分组标题', tip: '分组标题' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
  ],
  configure: {
    component: {
      isContainer: true,
      nestingRule: { parentWhitelist: ['AMenu', 'ASubMenu'] },
    },
    supports: {
      style: true,
    },
  },
  snippets: [
    {
      title: '菜单组',
      screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/menu-1.jpg',
      schema: {
        componentName: 'AMenuItemGroup',
        props: {},
      },
    },
  ],
};

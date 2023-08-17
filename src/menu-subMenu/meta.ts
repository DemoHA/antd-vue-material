export default {
  group: 'Antd',
  componentName: 'ASubMenu',
  title: '子菜单',
  category: '导航',
  npm: {
    destructuring: true,
    componentName: 'ASubMenu',
  },
  props: [
    {
      name: 'key',
      title: { label: '唯一标志', tip: 'item 的唯一标志' },
      propType: 'string',
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
      name: 'expandIcon',
      title: { label: '展开收起图标', tip: 'icon | 自定义 Menu 展开收起图标' },
      propType: 'node',
    },
    {
      name: 'title',
      title: {
        label: '子菜单项值',
        tip: 'title | 子菜单项值',
      },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'h-gutter',
      title: {
        label: '水平偏移',
        tip: 'popupOffset[0] | popupOffset第一个值',
      },
      propType: 'number',
      setter: {
        componentName: 'NumberSetter',
        props: {
          min: 0,
        },
      },
      extraProps: {
        getValue(target: any) {
          const { node } = target;
          const gutter = node.getPropValue('popupOffset');
          if (typeof gutter === 'number') {
            return gutter;
          } else if (Array.isArray(gutter)) {
            return gutter[0];
          }
          return 0;
        },
        setValue(target: any, value: any) {
          const { node } = target;
          const gutter = node.getPropValue('popupOffset');
          if (Array.isArray(gutter)) {
            gutter[0] = value;
            node.setPropValue('popupOffset', gutter);
          } else {
            node.setPropValue('popupOffset', [value, 0]);
          }
        },
      },
    },
    {
      name: 'v-gutter',
      title: {
        label: '垂直偏移',
        tip: 'popupOffset[1] | popupOffset[1]，单位为像素(px)',
      },
      propType: 'number',
      setter: {
        componentName: 'NumberSetter',
        props: {
          min: 0,
        },
      },
      defaultValue: 0,
      extraProps: {
        getValue(target: any) {
          const { node } = target;
          const gutter = node.getPropValue('popupOffset');
          if (typeof gutter === 'number') {
            return 0;
          } else if (Array.isArray(gutter)) {
            return gutter[1];
          }
          return 0;
        },
        setValue(target: any, value: any) {
          const { node } = target;
          const gutter = node.getPropValue('popupOffset');
          if (Array.isArray(gutter)) {
            gutter[1] = value;
            node.setPropValue('popupOffset', gutter);
          } else {
            node.setPropValue('popupOffset', [gutter, value]);
          }
        },
      },
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
      title: '子菜单',
      screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/menu-1.jpg',
      schema: {
        componentName: 'ASubMenu',
        props: {},
      },
    },
  ],
};

export default {
  group: 'Antd',
  componentName: 'AMenu',
  title: '菜单',
  category: '导航',
  npm: {
    destructuring: true,
    componentName: 'AMenu',
  },
  props: [
    {
      name: 'mode',
      title: {
        label: '菜单类型',
        tip: '菜单类型，现在支持垂直、水平、和内嵌模式三种',
      },
      propType: { type: 'oneOf', value: ['vertical', 'horizontal', 'inline'] },
    },
    {
      name: 'inlineIndent',
      title: { label: '缩进宽度', tip: 'inline 模式的菜单缩进宽度' },
      propType: 'number',
      condition: {
        type: 'JSFunction',
        value: 'target => target.getProps().getPropValue("mode") === "inline"',
      },
      defaultValue: 24,
    },
    {
      name: 'inlineCollapsed',
      title: {
        label: 'inline时是否收起',
        tip: 'inlineCollapsed | inline 时菜单是否收起状态',
      },
      propType: 'bool',
      condition: {
        type: 'JSFunction',
        value: 'target => target.getProps().getPropValue("mode") === "inline"',
      },
    },
    {
      name: 'forceSubMenuRender',
      title: {
        label: '渲染时机',
        tip: 'forceSubMenuRender | 在子菜单展示之前就渲染进 DOM',
      },
      propType: 'bool',
    },
    {
      name: 'multiple',
      title: { label: '是否多选', tip: 'multiple | 是否允许多选' },
      propType: 'bool',
    },
    {
      name: 'v-model:openKeys',
      title: {
        label: '当前展开的菜单项',
        tip: 'v-model:openKeys | 当前展开的 SubMenu 菜单项 key 数组',
      },
      propType: { type: 'arrayOf', value: 'string' },
    },
    {
      name: 'selectable',
      title: { label: '是否允许选中', tip: 'selectable | 是否允许选中' },
      propType: 'bool',
    },
    {
      name: 'v-model:selectedKeys',
      title: {
        label: '当前选中项',
        tip: 'v-model:selectedKeys | 当前选中的菜单项 key 数组',
      },
      propType: { type: 'arrayOf', value: 'string' },
    },
    {
      name: 'subMenuCloseDelay',
      title: {
        label: '关闭延时',
        tip: 'subMenuCloseDelay | 用户鼠标离开子菜单后关闭延时，单位：秒',
      },
      propType: 'number',
    },
    {
      name: 'subMenuOpenDelay',
      title: {
        label: '开启延时',
        tip: 'subMenuOpenDelay | 用户鼠标进入子菜单后开启延时，单位：秒',
      },
      propType: 'number',
    },
    {
      name: 'theme',
      title: { label: '主题颜色', tip: 'theme | 主题颜色' },
      propType: { type: 'oneOf', value: ['light', 'dark'] },
    },
    {
      name: 'triggerSubMenuAction',
      title: {
        label: '触发方式',
        tip: 'triggerSubMenuAction | 修改 Menu 子菜单的触发方式',
      },
      propType: { type: 'oneOf', value: ['hover', 'click'] },
    },
    {
      name: 'overflowedIndicator',
      title: {
        label: '省略收缩的图标',
        tip: 'overflowedIndicator | 用于自定义 Menu 水平空间不足时的省略收缩的图标',
      },
      propType: 'node',
    },
  ],
  configure: {
    component: {
      isContainer: true,
    },
    supports: {
      style: true,
      events: [
        {
          name: 'onClick',
          template:
            "click({ item, key, keyPath },${extParams}){\n// 点击 MenuItem 调用此函数\nconsole.log('click',item,key,keyPath);\n}",
        },
        {
          name: 'onDeselect',
          template:
            "deselect({ item, key, selectedKeys },${extParams}){\n// 取消选中时调用，仅在 multiple 生效\nconsole.log('deselect',item,key,selectedKeys);\n}",
        },
        {
          name: 'onOpenChange',
          template:
            "openChange(openKeys,${extParams}){\n// SubMenu 展开/关闭的回调\nconsole.log('openChange',openKeys);\n}",
        },
        {
          name: 'onSelect',
          template:
            "select({ item, key, selectedKeys },${extParams}){\n// 被选中时调用\nconsole.log('select',item, key, selectedKeys);\n}",
        },
      ],
    },
  },
  snippets: [
    {
      title: '菜单',
      screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/menu-1.jpg',
      schema: {
        componentName: 'AMenu',
        props: {},
      },
    },
  ],
};

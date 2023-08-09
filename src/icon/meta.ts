import avatarImage from './__screenshots__/icon.svg';

const meta = {
  group: 'Antd',
  componentName: 'AIcon',
  title: '图标',
  category: '基础组件',
  props: [
    {
      name: 'class',
      title: { label: '设置图标的样式名', tip: '设置图标的样式名' },
      propType: 'string',
    },
    {
      name: 'type',
      description: '图标',
      propType: 'string',
      setter: 'AntdIconSetter',
    },
    {
      name: 'size',
      description: '大小',
      propType: 'number',
      defaultValue: 20,
    },
    {
      name: 'color',
      description: '颜色',
      propType: 'string',
      setter: 'ColorSetter',
    },
    {
      name: 'rotate',
      title: {
        label: '旋转角度',
        tip: '图标旋转角度',
      },
      propType: 'number',
      defaultValue: 0,
    },
    {
      name: 'spin',
      title: { label: '旋转动画', tip: '是否有旋转动画' },
      propType: 'bool',
      defaultValue: false,
    },
  ],
  configure: {
    supports: {
      style: true,
    },
  },
  snippets: [
    {
      title: '图标',
      screenshot: avatarImage,
      schema: {
        componentName: 'AIcon',
        props: {
          type: 'SmileOutlined',
          size: 20,
        },
      },
    },
  ],
};

export default meta;

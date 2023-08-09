import avatarImage from './__screenshots__/divider.png';

const meta = {
  group: 'Antd',
  componentName: 'ADivider',
  title: '分割线',
  category: '布局',
  configure: {
    supports: {
      style: true,
    },
    props: [
      {
        name: 'children',
        title: { label: '文案', tip: '自定义分割线文本内容' },
        setter: 'StringSetter',
        supportVariable: true,
      },
      {
        name: 'plain',
        title: { label: '是否正文样式', tip: 'plain | 文字是否显示为普通正文样式' },
        setter: 'BoolSetter',
      },
      {
        name: 'dashed',
        title: { label: '是否虚线', tip: '是否虚线' },
        setter: 'BoolSetter',
      },
      {
        name: 'type',
        title: {
          label: '方向',
          tip: 'type | 水平还是垂直方向',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              { title: '水平', value: 'horizontal' },
              { title: '垂直', value: 'vertical' },
            ],
          },
        },
        defaultValue: 'horizontal',
      },
      {
        name: 'orientation',
        title: {
          label: '标题位置',
          tip: 'orientation | 分割线内容的位置',
        },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              { title: 'left', value: 'left' },
              { title: 'right', value: 'right' },
              { title: 'center', value: 'center' },
            ],
          },
        },
        defaultValue: 'center',
      },
      {
        name: 'orientationMargin',
        title: {
          label: '边框之间的距离',
          tip: 'orientationMargin | 标题和最近 left/right 边框之间的距离',
        },
        setter: ['StringSetter', 'NumberSetter'],
        condition: {
          type: 'JSFunction',
          value: 'target => target.getProps().getPropValue("orientation") !== "center"',
        },
      },
    ],
  },
  snippets: [
    {
      title: '分割线',
      schema: {
        componentName: 'ADivider',
        props: {
          plain: false,
          direction: 'horizontal',
        },
      },
    },
    {
      title: '带文字分割线',
      screenshot: avatarImage,
      schema: {
        componentName: 'ADivider',
        props: {
          children: [
            {
              componentName: 'ATypographyText',
              props: {
                children: '分割文字',
              },
            },
          ],
        },
      },
    },
  ],
};

export default meta;

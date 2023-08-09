const meta = {
  group: 'Antd',
  componentName: 'ASigleText',
  title: '简单文字',
  category: '基础组件',
  configure: {
    supports: {
      style: true,
    },
    props: [
      {
        name: 'children',
        title: { label: '文字内容', tip: '自定义文字内容' },
        setter: ['StringSetter', 'ExpressionSetter'],
        supportVariable: true,
      },
      {
        name: 'size',
        title: { label: '文字大小', tip: '文字大小' },
        setter: 'NumberSetter',
      },
      {
        name: 'unit',
        title: { label: '字体单位', tip: '字体单位' },
        setter: [
          {
            componentName: 'SelectSetter',
            props: {
              options: [
                {
                  title: 'px',
                  value: 'px',
                },
                {
                  title: 'em',
                  value: 'em',
                },
                {
                  title: 'rem',
                  value: 'rem',
                },
              ],
            },
            initialValue: 'px',
          },
          'VariableSetter',
        ],
      },
      {
        name: 'color',
        title: { label: '文字颜色', tip: '颜色' },
        setter: 'ColorSetter',
      },
    ],
  },
  snippets: [
    {
      title: '简单文字',
      schema: {
        componentName: 'ASigleText',
        props: {
          children: '简单文字',
          size: 12,
          color: '#000000',
          unit: 'px',
        },
      },
    },
  ],
};

export default meta;

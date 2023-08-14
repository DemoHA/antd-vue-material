const meta = {
  group: 'Antd',
  componentName: 'ASpace',
  title: '间距',
  category: '布局',
  configure: {
    component: {
      isContainer: true,
    },
    supports: {
      style: true,
    },
    props: [
      {
        name: 'align',
        title: {
          label: '对齐方式',
          tip: 'align | 值:start,end,center,baseline',
        },
        propType: {
          type: 'oneOf',
          value: ['start', 'end', 'center', 'baseline'],
        },
        setter: [
          {
            componentName: 'SelectSetter',
            props: {
              options: [
                {
                  title: '起始',
                  value: 'start',
                },
                {
                  title: '结尾',
                  value: 'end',
                },
                {
                  title: '居中',
                  value: 'center',
                },
                {
                  title: '基准线',
                  value: 'baseline',
                },
              ],
            },
          },
          'VariableSetter',
        ],
      },
      {
        name: 'direction',
        title: { label: '间距方向', tip: 'direction | 间距方向' },
        setter: {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              { label: '垂直', value: 'vertical' },
              { label: '水平', value: 'horizontal' },
            ],
          },
        },
      },
      {
        name: 'size',
        title: {
          label: '间距大小',
          tip: 'size | 间距大小',
        },
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'RadioGroupSetter',
                props: {
                  options: [
                    { label: '默认', value: 'small' },
                    { label: '中等', value: 'middle' },
                    { label: '更大', value: 'large' },
                  ],
                },
              },
              'NumberSetter',
            ],
          },
        },
        defaultValue: 'small',
      },
    ],
  },
  snippets: [
    {
      title: '间距',
      schema: {
        componentName: 'ASpace',
        props: {
          size: 'small',
          direction: 'horizontal',
        },
      },
    },
  ],
};

export default meta;

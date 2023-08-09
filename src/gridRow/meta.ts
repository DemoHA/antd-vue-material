// @ts-ignore
import avatarImage from './__screenshots__/img.png';
export default {
  group: 'Antd',
  componentName: 'ARow',
  title: '栅格',
  category: '布局',
  props: [
    {
      name: 'align',
      title: { label: '对齐方式', tip: 'align | 垂直对齐方式' },
      propType: { type: 'oneOf', value: ['top', 'middle', 'bottom'] },
      setter: {
        componentName: 'RadioGroupSetter',
        props: {
          options: [
            { label: '上', value: 'top' },
            { label: '中', value: 'middle' },
            { label: '下', value: 'bottom' },
          ],
        },
      },
    },
    {
      name: 'h-gutter',
      title: {
        label: '水平间隔',
        tip: '栅格水平间隔，单位为像素(px)',
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
          const gutter = node.getPropValue('gutter');
          if (typeof gutter === 'number') {
            return gutter;
          } else if (Array.isArray(gutter)) {
            return gutter[0];
          }
          return 0;
        },
        setValue(target: any, value: any) {
          const { node } = target;
          const gutter = node.getPropValue('gutter');
          if (Array.isArray(gutter)) {
            gutter[0] = value;
            node.setPropValue('gutter', gutter);
          } else {
            node.setPropValue('gutter', [value, 0]);
          }
        },
      },
    },
    {
      name: 'v-gutter',
      title: {
        label: '垂直间隔',
        tip: '栅格垂直间隔，单位为像素(px)',
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
          const gutter = node.getPropValue('gutter');
          if (typeof gutter === 'number') {
            return 0;
          } else if (Array.isArray(gutter)) {
            return gutter[1];
          }
          return 0;
        },
        setValue(target: any, value: any) {
          const { node } = target;
          const gutter = node.getPropValue('gutter');
          if (Array.isArray(gutter)) {
            gutter[1] = value;
            node.setPropValue('gutter', gutter);
          } else {
            node.setPropValue('gutter', [gutter, value]);
          }
        },
      },
    },
    {
      name: 'justify',
      title: { label: '水平排列方式', tip: 'justify | 水平排列方式' },
      propType: {
        type: 'oneOf',
        value: ['start', 'end', 'center', 'space-around', 'space-between'],
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
                title: 'space-around',
                value: 'space-around',
              },
              {
                title: 'space-between',
                value: 'space-between',
              },
            ],
          },
        },
        'VariableSetter',
      ],
    },
    {
      name: 'wrap',
      title: { label: '自动换行', tip: 'wrap | 是否自动换行' },
      propType: 'bool',
      setter: 'BoolSetter',
    },
  ],
  configure: {
    component: { isContainer: true, nestingRule: { childWhitelist: ['ACol'] } },
    supports: { style: true },
  },
  snippets: [
    {
      title: '栅格',
      screenshot: avatarImage,
      schema: {
        componentName: 'ARow',
        props: {},
        children: [
          {
            componentName: 'ACol',
            props: {
              span: 12,
            },
          },
          {
            componentName: 'ACol',
            props: {
              span: 12,
            },
          },
        ],
      },
    },
  ],
};

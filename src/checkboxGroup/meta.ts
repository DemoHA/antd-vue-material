import avatarImage from './__screenshots__/img.png';

export default {
  group: 'Antd',
  componentName: 'ACheckboxGroup',
  title: '多选框组',
  category: '表单',
  npm: {
    destructuring: true,
    componentName: 'ACheckboxGroup',
  },
  props: [
    {
      name: 'v-model:value',
      title: { label: '当前值', tip: 'v-model:value | 当前选中的选项' },
      propType: { type: 'arrayOf', value: 'string' },
      setter: 'ExpressionSetter',
      supportVariable: true,
    },
    {
      name: 'options',
      title: { label: '指定可选项', tip: '指定可选项' },
      propType: {
        type: 'arrayOf',
        value: {
          type: 'shape',
          value: [
            {
              name: 'label',
              description: '选项名',
              propType: 'string',
              defaultValue: '选项名',
            },
            {
              name: 'value',
              description: '选项值',
              propType: 'string',
              defaultValue: '选项值',
            },
            {
              name: 'disabled',
              description: '是否禁用',
              propType: 'bool',
              defaultValue: false,
            },
          ],
        },
      },
      setter: {
        componentName: 'ArraySetter',
        props: {
          itemSetter: {
            componentName: 'ObjectSetter',
            props: {
              config: {
                items: [
                  {
                    name: 'label',
                    title: '选项名',
                    setter: 'StringSetter',
                    isRequired: true,
                  },
                  {
                    name: 'value',
                    title: '选项值',
                    setter: 'StringSetter',
                    isRequired: true,
                  },
                  {
                    name: 'disabled',
                    title: '是否禁用',
                    setter: 'BoolSetter',
                  },
                ],
              },
            },
            initialValue: () => {
              return {
                label: '选项名',
                value: '多选框',
                disabled: false,
              };
            },
          },
        },
      },
      supportVariable: true,
    },
    {
      name: 'disabled',
      title: { label: '是否禁用', tip: '是否为禁用状态' },
      propType: 'bool',
      setter: 'BoolSetter',
      supportVariable: true,
    },
    {
      name: 'name',
      title: { label: 'name属性', tip: 'name属性' },
      propType: 'string',
      setter: 'StringSetter',
      supportVariable: true,
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
          name: 'onChange',
          template:
            "onChange(checkedValue,${extParams}){\n// 变化时回调函数\nconsole.log('onChange', checkedValue);}",
        },
      ],
    },
  },
  snippets: [
    {
      title: '多选框组',
      screenshot: avatarImage,
      schema: {
        componentName: 'ACheckboxGroup',
        props: {
          options: [
            { label: '选项一', value: '1' },
            { label: '选项二', value: '2' },
            { label: '选修三', value: '3' },
          ],
        },
      },
    },
  ],
};

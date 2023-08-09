import avatarImage from './__screenshots__/form.png';
import { uuid } from '../utils';

const meta = {
  group: 'Antd',
  componentName: 'AForm',
  title: '表单容器',
  category: '表单',
  props: [
    {
      name: 'model',
      title: '表单数据',
      setter: 'ExpressionSetter',
    },
    {
      name: 'ref',
      title: {
        label: 'ref',
        tip: "ref | 通过 this.$refs['xxx'] 获取到组件实例",
      },
      defaultValue: () => {
        return `form_${uuid()}`;
      },
      setter: 'StringSetter',
      supportVariable: true,
    },
    {
      name: 'rules',
      title: { label: '验证规则', tip: 'rules | 表单验证规则' },
      propType: 'object',
      setter: {
        componentName: 'MixedSetter',
        props: {
          setters: ['ExpressionSetter', 'JsonSetter'],
        },
      },
    },
    {
      name: 'name',
      title: {
        label: '表单名称',
        tip: 'name | 表单名称，会作为表单字段 `id` 前缀使用',
      },
      propType: 'string',
      setter: 'StringSetter',
    },
    {
      name: 'colon',
      title: '展示冒号',
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter',
      supportVariable: true,
    },
    {
      name: 'hideRequiredMark',
      title: { label: '隐藏必填标记', tip: 'hideRequiredMark | 隐藏必填标记' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
      supportVariable: true,
    },
    {
      name: 'validateOnRuleChange',
      title: {
        label: 'rules改变验证一次',
        tip: 'validateOnRuleChange | 是否在 rules 属性改变后立即触发一次验证',
      },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter',
      supportVariable: true,
    },
    {
      name: 'scrollToFirstError',
      title: {
        label: '滚至错误',
        tip: 'scrollToFirstError | 提交失败自动滚动到第一个错误字段',
      },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
      supportVariable: true,
    },
    {
      name: 'noStyle',
      title: {
        label: 'noStyle',
        tip: 'noStyle | 为 true 时不带样式，作为纯字段控件使用',
      },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
      supportVariable: true,
    },
    {
      name: 'labelAlign',
      title: {
        label: '标签对齐方式',
        tip: 'labelAlign | label 标签的文本对齐方式',
      },
      setter: {
        componentName: 'RadioGroupSetter',
        props: {
          options: [
            {
              title: '左',
              value: 'left',
            },
            {
              title: '右',
              value: 'right',
            },
          ],
        },
      },
      propType: { type: 'oneOf', value: ['left', 'right'] },
      defaultValue: 'right',
    },
    {
      name: 'layout',
      title: { label: '表单布局', tip: 'layout | 表单布局' },
      setter: {
        componentName: 'RadioGroupSetter',
        props: {
          options: [
            {
              title: '水平',
              value: 'horizontal',
            },
            {
              title: '垂直',
              value: 'vertical',
            },
            {
              title: '行内',
              value: 'inline',
            },
          ],
        },
      },
      propType: { type: 'oneOf', value: ['horizontal', 'vertical', 'inline'] },
      defaultValue: 'horizontal',
    },
    {
      name: 'validateTrigger',
      title: { label: '校验时机', tip: 'validateTrigger | 所有字段校验触发时机' },
      propType: {
        type: 'oneOf',
        value: ['onChange', 'onBlur'],
      },
      setter: {
        componentName: 'RadioGroupSetter',
        props: {
          options: [
            {
              title: '当前值变化时',
              value: 'onChange',
            },
            {
              title: '失去焦点时',
              value: 'onBlur',
            },
          ],
        },
      },
    },
    {
      type: 'group',
      title: '布局',
      display: 'accordion',
      items: [
        {
          name: 'labelCol',
          title: '标签栅格布局设置',
          display: 'inline',
          setter: {
            componentName: 'ObjectSetter',
            props: {
              config: {
                items: [
                  {
                    name: 'span',
                    title: '宽度',
                    setter: {
                      componentName: 'NumberSetter',
                      props: {
                        min: 0,
                        max: 24,
                      },
                    },
                  },
                  {
                    name: 'offset',
                    title: '偏移',
                    setter: {
                      componentName: 'NumberSetter',
                      props: {
                        min: 0,
                        max: 24,
                      },
                    },
                  },
                ],
              },
            },
          },
          description:
            'label 标签布局，同 `<Col>` 组件，设置 span offset 值，如 {span: 8, offset: 16}，该项仅在垂直表单有效',
        },
        {
          name: 'wrapperCol',
          title: '内容栅格布局设置',
          display: 'inline',
          setter: {
            componentName: 'ObjectSetter',
            props: {
              config: {
                items: [
                  {
                    name: 'span',
                    title: '宽度',
                    setter: {
                      componentName: 'NumberSetter',
                      props: {
                        min: 0,
                        max: 24,
                      },
                    },
                  },
                  {
                    name: 'offset',
                    title: '偏移',
                    setter: {
                      componentName: 'NumberSetter',
                      props: {
                        min: 0,
                        max: 24,
                      },
                    },
                  },
                ],
              },
            },
          },
          description: '需要为输入控件设置布局样式时，使用该属性，用法同 labelCol',
        },
      ],
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
          name: 'onFinish',
          template:
            "onFinish(values,${extParams}){\n// 提交表单且数据验证成功后回调事件\nconsole.log('onFinish',values);}",
        },
        {
          name: 'onFinishFailed',
          template:
            "onFinishFailed({values,errorFields,outOfDate},${extParams}){\n// 提交表单且数据验证失败后回调事件\nconsole.log('onFinishFailed',values, errorFields, outOfDate);}",
        },
        {
          name: 'onSubmit',
          template:
            "onSubmit(e,${extParams}){\n// 数据验证成功后回调事件\nconsole.log('onSubmit',e);}",
        },
        {
          name: 'onValidate',
          template:
            "onValidate(name,status,errorMsgs,${extParams}){\n// 任一表单项被校验后触发\nconsole.log('onValidate',name,status,errorMsgs);}",
        },
      ],
    },
  },
  snippets: [
    {
      title: '表单容器',
      screenshot: avatarImage,
      schema: {
        componentName: 'AForm',
        props: {},
        children: [
          {
            componentName: 'AFormItem',
            props: {
              label: '用户名',
            },
            children: [
              {
                componentName: 'AInput',
                props: {
                  placeholder: '请输入用户名',
                },
              },
            ],
          },
          {
            componentName: 'AFormItem',
            props: {
              label: '密码',
            },
            children: [
              {
                componentName: 'AInputPassword',
                props: {
                  placeholder: '请输入密码',
                },
              },
            ],
          },
        ],
      },
    },
  ],
};

export default meta;

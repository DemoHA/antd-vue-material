import avatarImage from './__screenshots__/input-text-area-1.png';
export default {
  group: 'Antd',
  componentName: 'ATextarea',
  title: 'Textarea',
  category: '表单',
  props: [
    {
      name: 'defaultValue',
      title: { label: '默认值', tip: '默认内容' },
      propType: 'string',
      setter: 'StringSetter',
    },
    {
      name: 'v-model:value',
      title: { label: '输入值', tip: 'v-modal:value | 输入值' },
      propType: 'string',
      setter: 'ExpressionSetter',
    },
    {
      name: 'allowClear',
      title: { label: '支持清除', tip: 'allowClear | 是否允许清除' },
      propType: 'bool',
      setter: 'BoolSetter',
    },
    {
      name: 'bordered',
      title: { label: '显示边框', tip: 'bordered | 是否有边框' },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter',
    },
    {
      name: 'disabled',
      title: { label: '是否禁用', tip: 'disabled | 是否为禁用状态' },
      propType: 'bool',
      setter: 'BoolSetter',
    },
    {
      name: 'placeholder',
      title: { label: '占位提示', tip: 'placeholder | 占位提示' },
      propType: 'string',
      defaultValue: '请输入',
      setter: 'StringSetter',
    },
    {
      name: 'maxlength',
      title: { label: '最大长度', tip: 'maxlength | 最大长度' },
      propType: 'number',
      setter: 'NumberSetter',
    },
    {
      name: 'showCount',
      title: { label: '展示字数', tip: 'showCount | 是否展示字数' },
      propType: 'bool',
      setter: 'BoolSetter',
    },
    {
      name: 'size',
      title: { label: '控件大小', tip: 'size | 控件大小' },
      setter: {
        componentName: 'RadioGroupSetter',
        props: {
          options: [
            {
              title: '大',
              value: 'large',
            },
            {
              title: '中',
              value: 'default',
            },
            {
              title: '小',
              value: 'small',
            },
          ],
        },
      },
      propType: { type: 'oneOf', value: ['large', 'default', 'small'] },
      defaultValue: 'default',
    },
    {
      name: 'autoSize',
      title: { label: '高度自适应设置', tip: 'autoSize | 高度自适应设置' },
      propType: {
        type: 'oneOfType',
        value: [
          'bool',
          {
            type: 'shape',
            value: [
              {
                name: 'minRows',
                title: '最小行数',
                setter: 'NumberSetter',
                defaultValue: 2,
              },
              {
                name: 'maxRows',
                title: '最大行数',
                setter: 'NumberSetter',
                defaultValue: 6,
              },
            ],
          },
        ],
      },
    },
  ],
  configure: {
    supports: {
      style: true,
      loop: true,
      events: [
        {
          name: 'onChange',
          template:
            "onChange(event,${extParams}){\n// 输入框内容变化时的回调\nconsole.log('onChange',event);}",
        },
        {
          name: 'onPressEnter',
          template:
            "onPressEnter(event,${extParams}){\n// 按下回车的回调\nconsole.log('onPressEnter',event);}",
        },
        {
          name: 'onFocus',
          template:
            "onFocus(event,${extParams}){\n// 获取焦点回调\nconsole.log('onFocus',event);}",
        },
        {
          name: 'onResize',
          template:
            "onResize({width,height},${extParams}){\n// resize 回调\nconsole.log('onResize',width,height);}",
        },
        {
          name: 'onKeyDown',
          template:
            "onKeyDown(event,${extParams}){\n// 按键按下时的回调\nconsole.log('onKeyDown',event);}",
        },
        {
          name: 'onKeyPress',
          template:
            "onKeyPress(event,${extParams}){\n// 按键按下后的回调\nconsole.log('onKeyPress',event);}",
        },
        {
          name: 'onKeyUp',
          template:
            "onKeyUp(event,${extParams}){\n// 按键释放回调\nconsole.log('onKeyUp',event);}",
        },
        {
          name: 'onBlur',
          template:
            "onBlur(event,${extParams}){\n// 按键释放回调\nconsole.log('onBlur',event);}",
        },
      ],
    },
  },
  snippets: [
    {
      title: 'Textarea',
      screenshot: avatarImage,
      schema: {
        componentName: 'ATextarea',
        props: {
          size: 'default',
          placeholder: '请输入',
          showCount: true,
          maxlength: 100,
        },
      },
    },
  ],
};

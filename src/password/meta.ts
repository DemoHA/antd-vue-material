import avatarImage from './__screenshots__/password.png';
export default {
  group: 'Antd',
  componentName: 'AInputPassword',
  title: '密码框',
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
      defaultValue: false,
      setter: 'BoolSetter',
    },
    {
      name: 'visibilityToggle',
      title: { label: '切换按钮', tip: 'visibilityToggle | 是否显示切换按钮' },
      propType: 'bool',
      defaultValue: true,
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
      name: 'maxLength',
      title: { label: '最大长度', tip: 'maxLength | 最大长度' },
      propType: 'number',
      setter: 'NumberSetter',
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
      name: 'addonAfter',
      title: { label: '后置标签', tip: 'addonAfter | 后置标签' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'addonBefore',
      title: { label: '前置标签', tip: 'addonBefore | 前置标签' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'prefix',
      title: { label: '前缀', tip: 'prefix | 前缀' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
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
      title: '密码框',
      screenshot: avatarImage,
      schema: {
        componentName: 'AInputPassword',
        props: {
          size: 'default',
          placeholder: '请输入',
        },
      },
    },
  ],
};

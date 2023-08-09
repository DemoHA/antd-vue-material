import avatarImage from './__screenshots__/dialog.png';
export default {
  group: 'Antd',
  componentName: 'AModal',
  title: '对话框',
  category: '反馈',
  npm: {
    destructuring: true,
    componentName: 'AModal',
  },
  props: [
    {
      name: 'title',
      title: { label: '标题', tip: 'title | 标题' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'cancelText',
      title: { label: '取消按钮文字', tip: 'cancelText | 取消按钮文字' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'okText',
      title: { label: '确认按钮文字', tip: 'okText | 确认按钮文字' },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'visible',
      title: { label: '是否可见', tip: 'visible | 对话框是否可见' },
      propType: 'bool',
      setter: 'BoolSetter',
      supportVariable: true,
    },
    {
      name: 'v-model:visible',
      title: { label: '是否可见(响应式)', tip: 'v-model:visible | 对话框是否可见' },
      propType: 'bool',
      setter: 'ExpressionSetter',
      supportVariable: true,
    },
    {
      name: 'width',
      title: { label: '宽度', tip: 'width | 宽度' },
      propType: { type: 'oneOfType', value: ['string', 'number'] },
    },
    {
      name: 'centered',
      title: { label: '垂直居中', tip: 'centered | 垂直居中展示 Modal' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
      supportVariable: true,
    },
    {
      name: 'closable',
      title: { label: '显示关闭按钮', tip: 'closable | 是否显示右上角的关闭按钮' },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter',
      supportVariable: true,
    },
    {
      name: 'closeIcon',
      title: { label: '关闭图标', tip: 'closeIcon | 自定义关闭图标' },
      propType: 'node',
    },
    {
      name: 'confirmLoading',
      title: { label: '确定按钮loading', tip: 'confirmLoading | 确定按钮loading' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
      supportVariable: true,
    },
    {
      name: 'destroyOnClose',
      title: { label: '销毁子元素', tip: 'destroyOnClose | 关闭时销毁 Modal 里的子元素' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
      supportVariable: true,
    },
    {
      name: 'forceRender',
      title: { label: '强制渲染Modal', tip: 'forceRender | 强制渲染Modal' },
      propType: 'bool',
      defaultValue: false,
      setter: 'BoolSetter',
      supportVariable: true,
    },
    {
      name: 'keyboard',
      title: { label: 'esc关闭', tip: 'keyboard | 是否支持键盘 esc 关闭' },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter',
      supportVariable: true,
    },
    {
      name: 'mask',
      title: { label: '是否展示遮罩', tip: 'mask | 是否展示遮罩' },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter',
      supportVariable: true,
    },
    {
      name: 'maskClosable',
      title: { label: '点击蒙层关闭', tip: 'maskClosable | 点击蒙层是否允许关闭' },
      propType: 'bool',
      defaultValue: true,
      setter: 'BoolSetter',
      supportVariable: true,
    },
    {
      name: 'zIndex',
      title: { label: 'z-index', tip: 'zIndex | 设置 Modal 的 `z-index`' },
      propType: 'number',
      setter: 'NumberSetter',
      supportVariable: true,
    },
    {
      name: 'footer',
      title: {
        label: '底部内容',
        tip: 'footer | 底部内容，当不需要默认底部按钮时，可以设为 `footer={null}`',
      },
      propType: { type: 'oneOfType', value: ['string', 'node'] },
    },
    {
      name: 'okType',
      title: { label: '确认按钮类型', tip: '确认按钮类型' },
      propType: { type: 'oneOf', value: ['default', 'small'] },
      setter: {
        componentName: 'RadioGroupSetter',
        props: {
          options: [
            {
              title: 'primary',
              value: 'primary',
            },
            {
              title: 'ghost',
              value: 'ghost',
            },
            {
              title: 'dashed',
              value: 'dashed',
            },
            {
              title: 'link',
              value: 'link',
            },
            {
              title: 'text',
              value: 'text',
            },
            {
              title: 'default',
              value: 'default',
            },
          ],
        },
      },
    },
    {
      name: 'okButtonProps',
      title: { label: '确认按钮props', tip: 'okButtonProps | 确认按钮props' },
      propType: 'object',
      setter: {
        componentName: 'ObjectSetter',
        props: {
          config: {
            items: [
              {
                name: 'disabled',
                title: { label: '是否可点击', tip: 'disabled' },
                propType: 'bool',
                setter: [
                  {
                    componentName: 'BoolSetter',

                    initialValue: false,
                  },
                  'VariableSetter',
                ],
                isRequired: true,
              },
            ],
          },
        },
      },
    },
    {
      name: 'cancelButtonProps',
      title: { label: '取消按钮props', tip: '取消按钮props' },
      propType: 'object',
      setter: {
        componentName: 'ObjectSetter',
        props: {
          config: {
            items: [
              {
                name: 'disabled',
                title: { label: '是否可点击', tip: 'disabled' },
                propType: 'bool',
                setter: [
                  {
                    componentName: 'BoolSetter',

                    initialValue: false,
                  },
                  'VariableSetter',
                ],
                isRequired: true,
              },
            ],
          },
        },
      },
    },
    {
      name: 'bodyStyle',
      title: { label: 'body样式', tip: 'bodyStyle | Modal body 样式' },
      propType: 'object',
      setter: 'JsonSetter',
    },
    {
      name: 'maskStyle',
      title: { label: '遮罩样式', tip: 'maskStyle | 遮罩样式' },
      propType: 'object',
      setter: 'JsonSetter',
    },
    {
      name: 'dialogStyle',
      title: {
        label: '浮层样式',
        tip: 'dialogStyle | 可用于设置浮层的样式，调整浮层位置等',
      },
      propType: 'object',
      setter: 'JsonSetter',
    },
    {
      name: 'dialogClass',
      title: { label: '浮层class', tip: 'dialogClass | 浮层类名' },
      propType: 'string',
      setter: 'StringSetter',
    },
    {
      name: 'wrapClassName',
      title: { label: '外层容器类名', tip: '对话框外层容器的类名' },
      propType: 'string',
      setter: 'StringSetter',
      supportVariable: true,
    },
    {
      name: 'getContainer',
      title: {
        label: '指定挂载节点',
        tip: '指定 Modal 挂载的 HTML 节点, false 为挂载在当前 dom',
      },
      propType: { type: 'oneOfType', value: ['node', 'func'] },
    },
    {
      name: 'afterClose',
      title: { label: '完全关闭后回调', tip: 'afterClose | 点击确定回调' },
      propType: 'func',
      setter: [
        {
          componentName: 'FunctionSetter',
          props: {
            template: 'afterClose(){\n// 完全关闭后回调\nreturn "完全关闭后回调";\n}',
          },
        },
        'VariableSetter',
      ],
    },
  ],
  configure: {
    component: {
      isContainer: true,
      isModal: true,
      rootSelector: '.ant-modal-content',
      nestingRule: {
        parentWhitelist: ['Page', 'Component'],
      },
    },
    supports: {
      style: true,
      events: [
        {
          name: 'onCancel',
          template:
            "onCancel(${extParams}){\n// 点击遮罩层或右上角叉或取消按钮的回调\nconsole.log('cancel');\n}",
        },
        {
          name: 'onOk',
          template: "onOk(${extParams}){\n// 点击确定回调\nconsole.log('ok');\n}",
        },
      ],
    },
  },
  snippets: [
    {
      title: '弹窗-普通型',
      screenshot: avatarImage,
      schema: {
        componentName: 'AModal',
        props: {
          title: 'Basic Modal',
          okText: '确认',
          cancelText: '取消',
          open: true,
          destroyOnClose: true,
        },
        children: [],
      },
    },
    {
      title: '弹窗-隐藏底部',
      screenshot: avatarImage,
      schema: {
        componentName: 'AModal',
        props: {
          title: 'Basic Modal',
          okText: '确认',
          cancelText: '取消',
          open: true,
          footer: null,
          destroyOnClose: true,
        },
        children: [],
      },
    },
  ],
};

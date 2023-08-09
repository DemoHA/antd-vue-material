import avatarImage from './__screenshots__/select.png';

const meta = {
  group: 'Antd',
  componentName: 'ASelect',
  title: '选择器',
  category: '表单',
  props: [
    {
      name: 'v-model:value',
      title: '表单数据对象',
      propType: {
        type: 'oneOfType',
        value: [
          'string',
          { type: 'arrayOf', value: 'string' },
          'number',
          { type: 'arrayOf', value: 'number' },
        ],
      },
    },
    {
      name: 'options',
      title: { label: '可选项', tip: 'options | 可选项' },
      propType: {
        type: 'arrayOf',
        value: {
          type: 'shape',
          value: [
            {
              name: 'label',
              propType: 'string',
              description: '选项名',
              defaultValue: '选项名',
            },
            {
              name: 'value',
              propType: ['string', 'number'],
              description: '选项值',
              defaultValue: '选项值',
            },
            {
              name: 'disabled',
              propType: 'bool',
              description: '是否禁用',
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
                    setter: ['StringSetter', 'VariableSetter'],
                    isRequired: true,
                  },
                  {
                    name: 'value',
                    title: '选项值',
                    setter: ['StringSetter', 'NumberSetter', 'VariableSetter'],
                    isRequired: true,
                  },
                  {
                    name: 'disabled',
                    title: '是否禁用',
                    setter: ['BoolSetter', 'VariableSetter'],
                  },
                ],
              },
            },
            initialValue: () => {
              return {
                label: '选项名',
                value: 'test',
                disabled: false,
              };
            },
          },
        },
      },
    },
    {
      title: { label: '模式', tip: 'mode | 模式为多选或标签' },
      name: 'mode',
      propType: { type: 'oneOf', value: ['multiple', 'tags', 'combobox'] },
      setter: {
        componentName: 'RadioGroupSetter',
        props: {
          options: [
            { title: '多选', value: 'multiple' },
            { title: '标签', value: 'tags' },
            { title: 'combobox', value: 'combobox' },
          ],
        },
      },
      supportVariable: true,
    },
    {
      title: '是否默认展开下拉菜单',
      name: 'defaultOpen',
      propType: 'bool',
      setter: 'BoolSetter',
    },
    {
      title: '是否默认展开下拉菜单',
      name: 'open',
      propType: 'bool',
      setter: 'BoolSetter',
    },
    {
      title: { label: '支持清除', tip: 'allowClear | 支持清除' },
      name: 'allowClear',
      propType: 'bool',
      setter: 'BoolSetter',
      supportVariable: true,
    },
    {
      title: { label: '获取焦点', tip: 'autofocus | 默认获取焦点' },
      name: 'autofocus',
      propType: 'bool',
      setter: 'BoolSetter',
    },
    {
      title: { label: '是否有边框', tip: 'bordered | 是否有边框' },
      name: 'bordered',
      propType: 'bool',
      setter: 'BoolSetter',
    },
    {
      title: { label: '是否禁用', tip: 'disabled | 是否禁用' },
      name: 'disabled',
      propType: 'bool',
      setter: 'BoolSetter',
    },
    {
      title: {
        label: '选项的label包装到 value',
        tip: 'labelInValue | 是否把每个选项的 label 包装到 value 中',
      },
      name: 'labelInValue',
      propType: 'bool',
      setter: 'BoolSetter',
    },
    {
      title: {
        label: '是否高亮第一项',
        tip: 'defaultActiveFirstOption | 是否高亮第一项',
      },
      name: 'defaultActiveFirstOption',
      propType: 'bool',
      setter: 'BoolSetter',
    },
    {
      name: 'showArrow',
      title: { label: '是否显示下拉箭头', tip: '是否显示下拉小箭头' },
      propType: 'bool',
      setter: 'BoolSetter',
    },
    {
      title: '是否可搜索',
      name: 'showSearch',
      propType: 'bool',
      setter: 'BoolSetter',
      supportVariable: true,
    },
    {
      title: '选择框大小',
      name: 'size',
      propType: {
        type: 'oneOf',
        value: ['default', 'large', 'small'],
      },
      setter: {
        componentName: 'RadioGroupSetter',
        props: {
          options: [
            { label: 'default', value: 'default' },
            { label: 'large', value: 'large' },
            { label: 'small', value: 'small' },
          ],
        },
      },
      defaultValue: 'default',
    },
    {
      name: 'firstActiveValue',
      title: '默认高亮的选项',
      propType: {
        type: 'oneOfType',
        value: ['string', { type: 'arrayOf', value: 'string' }],
      },
    },
    {
      name: 'getPopupContainer',
      title: {
        label: '菜单渲染父节点',
        tip: '默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位',
      },
      propType: 'func',
      defaultValue: () => {
        return () => document.body;
      },
    },
    {
      title: {
        label: '选中后清空搜索框',
        tip: '是否在选中项后清空搜索框，只在 mode 为 multiple 或 tags 时有效',
      },
      name: 'autoClearSearchValue',
      propType: 'bool',
      setter: 'BoolSetter',
      condition(target: any) {
        return (
          target.getProps().getPropValue('mode') === 'tags' ||
          target.getProps().getPropValue('mode') === 'multiple'
        );
      },
    },
    {
      title: { label: '下拉框classname', tip: 'dropdownClassName | 下拉框classname' },
      name: 'dropdownClassName',
      propType: 'string',
      setter: 'StringSetter',
    },
    {
      title: {
        label: '下拉菜单和选择器同宽',
        tip: 'dropdownMatchSelectWidth | 下拉菜单和选择器同宽',
      },
      name: 'dropdownMatchSelectWidth',
      propType: {
        type: 'oneOfType',
        value: ['bool', 'number'],
      },
      setter: ['BoolSetter', 'NumberSetter'],
    },
    {
      title: {
        label: '弹窗滚动高度',
        tip: 'listHeight | 设置弹窗滚动高度',
      },
      name: 'listHeight',
      propType: 'number',
      setter: 'NumberSetter',
    },
    {
      title: {
        label: '最多显示 tag',
        tip: 'maxTagCount | 最多显示多少个 tag',
      },
      name: 'maxTagCount',
      propType: 'number',
      setter: 'NumberSetter',
    },
    {
      title: {
        label: '最大tag文本长度',
        tip: 'maxTagTextLength | 最大显示的 tag 文本长度',
      },
      name: 'maxTagTextLength',
      propType: 'number',
      setter: 'NumberSetter',
    },
    {
      type: 'group',
      title: '自定义',
      display: 'accordion',
      items: [
        {
          title: {
            label: 'dropdown自定义样式',
            tip: 'dropdownMenuStyle | dropdown 菜单自定义样式',
          },
          name: 'dropdownMenuStyle',
          propType: 'object',
          setter: 'JsonSetter',
        },
        {
          title: {
            label: '下拉菜单style属性',
            tip: 'dropdownStyle | 下拉菜单的 style 属性',
          },
          name: 'dropdownStyle',
          propType: 'object',
          setter: 'JsonSetter',
        },
        {
          title: {
            label: '节点字段',
            tip: 'fieldNames | 自定义节点 label、value、options 的字段',
          },
          name: 'fieldNames',
          propType: 'object',
          setter: 'JsonSetter',
        },
        {
          title: {
            label: '清空图标',
            tip: 'clearIcon | 自定义的多选框清空图标',
          },
          name: 'clearIcon',
          propType: 'node',
          setter: 'SlotSetter',
        },
        {
          title: {
            label: '下拉框内容',
            tip: 'dropdownRender | 自定义下拉框内容',
          },
          name: 'dropdownRender',
          propType: {
            type: 'oneOfType',
            value: ['node', 'func'],
          },
          setter: [
            {
              componentName: 'SlotSetter',
              title: '自定义下拉框',
              initialValue: {
                type: 'JSSlot',
                params: ['scope'],
                value: [],
              },
            },
            {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'dropdownRender(funParams,${extParams}){\n// 自定义下拉框内容\nconsole.log("dropdownRender menuNode",menuNode,"props",props)\n}',
              },
            },
          ],
        },
        {
          title: {
            label: 'tag 内容',
            tip: 'tagRender | 自定义 tag 内容 render，仅在 mode 为 multiple 或 tags 时生效',
          },
          name: 'tagRender',
          condition(target: any) {
            return (
              target.getProps().getPropValue('mode') === 'tags' ||
              target.getProps().getPropValue('mode') === 'multiple'
            );
          },
          propType: {
            type: 'oneOfType',
            value: ['node', 'func'],
          },
          setter: [
            {
              componentName: 'SlotSetter',
              title: '自定义下拉框',
              initialValue: {
                type: 'JSSlot',
                params: ['scope'],
                value: [],
              },
            },
            {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'tagRender(props,${extParams}){\n// 自定义 tag 内容\nconsole.log("props",props)\n}',
              },
            },
          ],
        },
        {
          title: {
            label: '清空图标',
            tip: 'clearIcon | 自定义的多选框清空图标',
          },
          name: 'clearIcon',
          propType: 'node',
          setter: 'SlotSetter',
        },
        {
          title: {
            label: '多选框清除图标',
            tip: 'removeIcon | 自定义的多选框清除图标',
          },
          name: 'removeIcon',
          propType: 'node',
          setter: 'SlotSetter',
        },
        {
          title: '选择框后缀图标',
          name: 'suffixIcon',
          propType: 'node',
          setter: 'SlotSetter',
        },
        {
          title: {
            label: '选中的条目图标',
            tip: 'menuItemSelectedIcon | 自定义当前选中的条目图标',
          },
          name: 'menuItemSelectedIcon',
          propType: 'node',
          setter: 'SlotSetter',
        },
        {
          title: {
            label: '隐藏 tag 的内容',
            tip: 'maxTagPlaceholder | 隐藏 tag 时显示的内容',
          },
          name: 'maxTagPlaceholder',
          propType: {
            type: 'oneOfType',
            value: ['node', 'func'],
          },
          setter: [
            {
              componentName: 'SlotSetter',
              title: '隐藏 tag 的内容',
              initialValue: {
                type: 'JSSlot',
                params: ['scope'],
                value: [],
              },
            },
            {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'dropdownRender(omittedValues,${extParams}){\n// 隐藏 tag 的内容\nconsole.log("omittedValues",omittedValues)\n}',
              },
            },
          ],
        },
        {
          title: {
            label: '无内容节点',
            tip: 'notFoundContent | 当下拉列表为空时显示的内容',
          },
          name: 'notFoundContent',
          propType: {
            type: 'oneOfType',
            value: ['string', 'node'],
          },
          setter: ['StringSetter', 'SlotSetter'],
          defaultValue: '暂无内容',
        },
        {
          title: '选择框默认文字',
          name: 'placeholder',
          propType: {
            type: 'oneOfType',
            value: ['string', 'node'],
          },
          setter: ['StringSetter', 'SlotSetter'],
          defaultValue: '请选择',
        },
        {
          title: {
            label: 'option 插槽',
            tip: 'option | 通过 option 插槽，自定义节点',
          },
          name: 'option',
          propType: 'node',
          setter: {
            componentName: 'SlotSetter',
            title: 'option 插槽',
            initialValue: {
              type: 'JSSlot',
              params: ['scope'],
              value: [],
            },
          },
        },
        {
          name: 'tokenSeparators',
          title: { label: '自动分词的分隔符', tip: '自动分词的分隔符' },
          propType: { type: 'arrayOf', value: 'string' },
        },
      ],
    },
    {
      type: 'group',
      title: '筛选设置',
      display: 'accordion',
      items: [
        {
          title: {
            label: '是否根据输入项进行筛选',
            tip: 'filterOption | 是否根据输入项进行筛选',
          },
          name: 'filterOption',
          propType: {
            type: 'oneOfType',
            value: ['bool', 'func'],
          },
          setter: ['BoolSetter', 'FunctionSetter'],
        },
        {
          title: {
            label: '筛选函数',
            tip: 'filterSort | 是否根据输入项进行筛选',
          },
          name: 'filterSort',
          propType: 'func',
          setter: 'FunctionSetter',
        },
        {
          title: {
            label: '过滤对应的 option 属性',
            tip: 'optionFilterProp | 搜索时过滤对应的 option 属性，不支持 children',
          },
          name: 'optionFilterProp',
          propType: 'string',
          setter: 'StringSetter',
        },
        {
          title: {
            label: '回填Option属性值',
            tip: 'optionLabelProp | 回填到选择框的 Option 的属性值',
          },
          name: 'optionLabelProp',
          propType: 'string',
          setter: 'StringSetter',
        },
        {
          name: 'searchValue',
          title: '搜索文本',
          propType: 'string',
          setter: 'StringSetter',
        },
      ],
    },
  ],
  configure: {
    supports: {
      style: true,
      events: [
        'onBlur',
        'onChange',
        'onDeselect',
        'onDropdownVisibleChange',
        'onFocus',
        'onInputKeyDown',
        'onMouseenter',
        'onMouseleave',
        'onPopupScroll',
        'onSearch',
        'onSelect',
      ],
    },
  },
  snippets: [
    {
      title: '选择器',
      screenshot: avatarImage,
      schema: {
        componentName: 'ASelect',
        props: {
          style: {
            width: 200,
          },
          options: [
            {
              label: 'A',
              value: 'A',
            },
            {
              label: 'B',
              value: 'B',
            },
            {
              label: 'C',
              value: 'C',
            },
          ],
        },
      },
    },
  ],
};

export default meta;

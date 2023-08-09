import avatarImage from './__screenshots__/table-1.png';

const meta = {
  group: 'Antd',
  componentName: 'ATable',
  category: '数据展示',
  props: [
    {
      title: '数据源',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'dataSource',
          title: { label: '表格数据', tip: 'dataSource | 表格数据' },
          propType: 'object',
          setter: 'JsonSetter',
          supportVariable: true,
        },
        {
          name: 'loading',
          title: { label: '加载中', tip: 'loading | 是否加载中' },
          propType: 'bool',
          setter: 'BoolSetter',
          defaultValue: false,
          supportVariable: true,
        },
        {
          name: 'rowKey',
          title: {
            label: '行Key',
            tip: 'rowKey | 表格行 key 的取值，可以是字符串或一个函数',
          },
          propType: { type: 'oneOfType', value: ['string', 'func'] },
          setter: [
            'StringSetter',
            {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'getRowKey(record,index,${extParams}){\n// 通过函数获取表格行 key\nreturn record.id;\n}',
              },
            },
            'VariableSetter',
          ],
          defaultValue: 'id',
        },
        {
          name: 'childrenColumnName',
          title: {
            label: '树形结构列名',
            tip: 'childrenColumnName | 指定树形结构的列名',
          },
          propType: 'string',
          setter: 'StringSetter',
          defaultValue: 'children',
        },
      ],
    },
    {
      name: 'columns',
      title: { label: '表格列', tip: '表格列的配置描述，具体项见下表' },
      setter: {
        componentName: 'ArraySetter',
        props: {
          itemSetter: {
            componentName: 'ObjectSetter',
            props: {
              config: {
                items: [
                  {
                    name: 'title',
                    title: { label: '列标题', tip: 'title | 列标题' },
                    propType: { type: 'oneOfType', value: ['string', 'func'] },
                    setter: [
                      'StringSetter',
                      {
                        componentName: 'SlotSetter',
                        title: '列标题插槽',
                        initialValue: {
                          type: 'JSSlot',
                          params: ['options'],
                          value: [],
                        },
                      },
                    ],
                    isRequired: true,
                  },
                  {
                    name: 'dataIndex',
                    title: { label: '数据字段', tip: 'dataIndex | 数据字段' },
                    propType: 'string',
                    setter: 'StringSetter',
                    isRequired: true,
                  },
                  {
                    name: 'key',
                    title: {
                      label: 'Vue key',
                      tip: 'key | Vue 需要的 key，如果已经设置了唯一的 dataIndex，可以忽略这个属性',
                    },
                    propType: 'string',
                    setter: 'StringSetter',
                  },
                  {
                    name: 'colSpan',
                    title: {
                      label: '列合并',
                      tip: 'colSpan | 表头列合并,设置为 0 时，不渲染',
                    },
                    propType: 'number',
                    setter: 'NumberSetter',
                  },
                  {
                    name: 'resizable',
                    title: {
                      label: '是否可拖动调整宽度',
                      tip: 'resizable | 表头列合并,设置为 0 时，不渲染',
                    },
                    propType: 'bool',
                    defaultValue: false,
                    setter: 'BoolSetter',
                  },
                  {
                    name: 'align',
                    title: { label: '对齐方式', tip: 'align | 对齐方式' },
                    propType: {
                      type: 'oneOf',
                      value: ['left', 'right', 'center'],
                    },
                    defaultValue: 'left',
                    setter: [
                      {
                        componentName: 'RadioGroupSetter',
                        props: {
                          options: [
                            {
                              title: 'left',
                              value: 'left',
                            },
                            {
                              title: 'right',
                              value: 'right',
                            },
                            {
                              title: 'center',
                              value: 'center',
                            },
                          ],
                        },
                      },
                      'VariableSetter',
                    ],
                  },
                  {
                    name: 'fixed',
                    title: { label: '列是否固定', tip: 'fixed | 列是否固定' },
                    description:
                      '（IE 下无效）列是否固定，可选 true (等效于 left) left right',
                    defaultValue: '',
                    propType: {
                      type: 'oneOf',
                      value: ['', 'left', 'right'],
                    },
                    setter: [
                      {
                        componentName: 'RadioGroupSetter',
                        props: {
                          options: [
                            {
                              title: '不固定',
                              value: '',
                            },
                            {
                              title: '固定在左侧',
                              value: 'left',
                            },
                            {
                              title: '固定在右侧',
                              value: 'right',
                            },
                          ],
                        },
                      },
                      'VariableSetter',
                    ],
                  },
                  {
                    name: 'className',
                    title: {
                      label: '列样式类名',
                      tip: 'className | 列样式类名',
                    },
                    propType: 'string',
                    setter: 'StringSetter',
                  },
                  {
                    name: 'width',
                    title: { label: '宽度', tip: 'width | 宽度' },
                    propType: {
                      type: 'oneOfType',
                      value: ['number', 'string'],
                    },
                    setter: ['NumberSetter', 'StringSetter', 'VariableSetter'],
                  },
                  {
                    name: 'maxWidth',
                    title: {
                      label: '最大宽度',
                      tip: 'maxWidth | 拖动列最大宽度，会受到表格自动调整分配宽度影响',
                    },
                    propType: 'number',
                    setter: 'NumberSetter',
                  },
                  {
                    name: 'minWidth',
                    title: {
                      label: '最小宽度',
                      tip: 'minWidth | 拖动列最小宽度，会受到表格自动调整分配宽度影响',
                    },
                    propType: 'number',
                    defaultValue: 50,
                    setter: 'NumberSetter',
                  },
                  {
                    name: 'ellipsis',
                    title: {
                      label: '文本溢出',
                      tip: '文本溢出是否显示为...',
                    },
                    propType: 'bool',
                    setter: 'BoolSetter',
                  },
                  {
                    type: 'group',
                    title: '过滤设置',
                    display: 'accordion',
                    items: [
                      {
                        name: 'customFilterDropdown',
                        title: {
                          label: '是否自定义过滤菜单',
                          tip: 'customFilterDropdown | 启用 v-slot:customFilterDropdown，优先级低于 filterDropdown',
                        },
                        propType: 'bool',
                        setter: 'BoolSetter',
                      },
                      {
                        name: 'filters',
                        title: {
                          label: '筛选菜单项',
                          tip: 'filters | 表头的筛选菜单项',
                        },
                        propType: 'object',
                        setter: 'JsonSetter',
                      },
                      {
                        name: 'defaultFilteredValue',
                        title: {
                          label: '默认筛选值',
                          tip: 'defaultFilteredValue | 默认筛选值',
                        },
                        propType: {
                          type: 'oneOfType',
                          value: ['string', { type: 'arrayOf', value: 'string' }],
                        },
                      },
                      {
                        name: 'filterDropdownVisible',
                        title: {
                          label: '筛选菜单是否可见',
                          tip: 'filterDropdownVisible | 用于控制自定义筛选菜单是否可见',
                        },
                        propType: 'bool',
                        setter: 'BoolSetter',
                      },
                      {
                        name: 'filtered',
                        title: {
                          label: '是否经过过滤',
                          tip: 'filtered | 标识数据是否经过过滤，筛选图标会高亮',
                        },
                        propType: 'bool',
                        setter: 'BoolSetter',
                      },
                      {
                        name: 'filterMultiple',
                        title: {
                          label: '是否多选过滤',
                          tip: 'filterMultiple | 是否多选过滤',
                        },
                        propType: 'bool',
                        defaultValue: true,
                        setter: 'BoolSetter',
                      },
                      {
                        name: 'filterSearch',
                        title: {
                          label: '是否搜索过滤',
                          tip: 'filterSearch | 筛选菜单项是否可搜索',
                        },
                        propType: 'bool',
                        setter: 'BoolSetter',
                      },
                      {
                        name: 'filterMode',
                        title: {
                          label: '筛选菜单的方式',
                          tip: 'filterMode | 指定筛选菜单的用户界面',
                        },
                        propType: {
                          type: 'oneOf',
                          value: ['menu', 'tree'],
                        },
                        setter: [
                          {
                            componentName: 'RadioGroupSetter',
                            props: {
                              options: [
                                {
                                  title: 'menu',
                                  value: 'menu',
                                },
                                {
                                  title: 'tree',
                                  value: 'tree',
                                },
                              ],
                            },
                          },
                          'VariableSetter',
                        ],
                        defaultValue: 'menu',
                      },
                      {
                        name: 'filteredValue',
                        title: {
                          label: '默认筛选值',
                          tip: 'filteredValue | 默认筛选值',
                        },
                        propType: {
                          type: 'oneOfType',
                          value: ['string', { type: 'arrayOf', value: 'string' }],
                        },
                      },
                      {
                        name: 'filterDropdown',
                        title: {
                          label: '自定义筛选菜单',
                          tip: 'filterDropdown | 可以自定义筛选菜单，此函数只负责渲染图层，需要自行编写各种交互',
                        },
                        propType: 'func',
                        setter: [
                          {
                            componentName: 'SlotSetter',
                            title: '自定义筛选菜单',
                            initialValue: {
                              type: 'JSSlot',
                              params: [],
                              value: [],
                            },
                          },
                          {
                            componentName: 'FunctionSetter',
                            props: {
                              template:
                                'filterDropdown(){\n// 自定义筛选菜单\nreturn "自定义筛选菜单";\n}',
                            },
                          },
                          'VariableSetter',
                        ],
                      },
                      {
                        name: 'filterIcon',
                        title: {
                          label: '自定义筛选图标',
                          tip: 'filterIcon | 自定义 filter 图标',
                        },
                        propType: 'func',
                        setter: [
                          {
                            componentName: 'SlotSetter',
                            title: '自定义筛选菜单',
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
                                'filterDropdown({filtered, column}){\n// 自定义筛选图标\nreturn "自定义筛选图标";\n}',
                            },
                          },
                          'VariableSetter',
                        ],
                      },
                      {
                        name: 'onFilter',
                        title: {
                          label: '筛选的运行函数',
                          tip: 'onFilter | 本地模式下，确定筛选的运行函数, 使用 template 或 jsx 时作为filter事件使用',
                        },
                        propType: 'func',
                        setter: {
                          componentName: 'FunctionSetter',
                          props: {
                            template: 'onFilter(){\n// 筛选的运行函数}',
                          },
                        },
                      },
                      {
                        name: 'onFilterDropdownVisibleChange',
                        title: {
                          label: '筛选菜单可见变化',
                          tip: 'onFilterDropdownVisibleChange | 自定义筛选菜单可见变化时调用',
                        },
                        propType: 'func',
                        setter: {
                          componentName: 'FunctionSetter',
                          props: {
                            template:
                              'onFilterDropdownVisibleChange(){\n// 筛选菜单可见变化}',
                          },
                        },
                      },
                    ],
                  },
                  {
                    type: 'group',
                    title: '排序设置',
                    display: 'accordion',
                    items: [
                      {
                        name: 'sorter',
                        title: {
                          label: '排序规则',
                          tip: 'sorter | 排序函数，本地排序使用一个函数，需要服务端排序可设为 true',
                        },
                        propType: { type: 'oneOfType', value: ['bool', 'func'] },
                        setter: ['BoolSetter', 'FunctionSetter', 'VariableSetter'],
                      },
                      {
                        name: 'sortDirections',
                        title: {
                          label: '排序方式',
                          tip: 'sortDirections | 支持的排序方式，[ascend, descend]',
                        },
                        propType: 'array',
                        setter: 'ExpressionSetter',
                      },
                      {
                        name: 'sortOrder',
                        title: {
                          label: '排序方式',
                          tip: 'sortOrder | 排序的受控属性，外界可用此控制列的排序，可设置为 ascend descend false',
                        },
                        propType: { type: 'oneOfType', value: ['string', 'bool'] },
                        setter: ['StringSetter', 'BoolSetter', 'VariableSetter'],
                      },
                    ],
                  },
                  {
                    type: 'group',
                    title: '自定义列设置',
                    display: 'accordion',
                    items: [
                      {
                        name: 'customRender',
                        title: {
                          label: '自定义渲染',
                          tip: 'customRender | 插槽内的物料表达式可通过this.data.record获取当前行数据，this.data.index获取索引(该项用于自定义操作列)',
                        },
                        propType: {
                          type: 'oneOfType',
                          value: ['node', 'func'],
                        },
                        setter: [
                          {
                            componentName: 'SlotSetter',
                            title: '单元格插槽',
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
                                'customRender({text, record, index, column}){\n// 自定义渲染\n}',
                            },
                          },
                          'VariableSetter',
                        ],
                      },
                      {
                        name: 'customCell',
                        title: {
                          label: '自定义列属性',
                          tip: 'customCell | 自定义列属性',
                        },
                        propType: 'func',
                        setter: [
                          {
                            componentName: 'FunctionSetter',
                            props: {
                              template:
                                'customCell(record, rowIndex, column){\n// 自定义列属性\n}',
                            },
                          },
                          'VariableSetter',
                        ],
                      },
                      {
                        name: 'customHeaderCell',
                        title: {
                          label: '自定义头列属性',
                          tip: 'customHeaderCell | 设置头部单元格属性',
                        },
                        propType: 'func',
                        setter: [
                          {
                            componentName: 'FunctionSetter',
                            props: {
                              template:
                                'customHeaderCell(column){\n// 设置头部单元格属性\n}',
                            },
                          },
                          'VariableSetter',
                        ],
                      },
                    ],
                  },
                ],
              },
            },
            initialValue: { title: '标题' },
          },
        },
      },
    },
    {
      title: '外观',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'showHeader',
          title: { label: '显示表头', tip: 'showHeader | 是否显示表头' },
          propType: 'bool',
          setter: 'BoolSetter',
          defaultValue: true,
        },
        {
          name: 'bordered',
          title: {
            label: '显示边框',
            tip: 'bordered | 是否展示外边框和列边框',
          },
          propType: 'bool',
          setter: 'BoolSetter',
        },
        {
          name: 'showExpandColumn',
          title: {
            label: '展示行展开列',
            tip: 'showExpandColumn | 设置是否展示行展开列',
          },
          propType: 'bool',
          setter: 'BoolSetter',
        },
        {
          name: 'size',
          title: { label: '表格大小', tip: 'size | 表格大小' },
          propType: {
            type: 'oneOf',
            value: ['default', 'middle', 'small'],
          },
          setter: [
            {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: '默认',
                    value: 'default',
                  },
                  {
                    title: '中',
                    value: 'middle',
                  },
                  {
                    title: '小',
                    value: 'small',
                  },
                ],
              },
            },
            'VariableSetter',
          ],
          defaultValue: 'default',
        },
        {
          name: 'tableLayout',
          title: { label: '表格布局', tip: 'tableLayout | 表格布局' },
          defaultValue: '',
          propType: {
            type: 'oneOf',
            value: ['', 'auto', 'fixed'],
          },
          setter: [
            {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: '默认',
                    value: '',
                  },
                  {
                    title: '自动',
                    value: 'auto',
                  },
                  {
                    title: '固定',
                    value: 'fixed',
                  },
                ],
              },
            },
            'VariableSetter',
          ],
        },
        {
          name: 'sticky',
          title: {
            label: '粘性头部和滚动条',
            tip: 'sticky | 设置粘性头部和滚动条',
          },
          propType: { type: 'oneOfType', value: ['bool', 'object'] },
          setter: ['BoolSetter', 'VariableSetter'],
        },
        {
          name: 'customFilterDropdown',
          title: { label: '自定义筛选', tip: 'customFilterDropdown | 自定义筛选' },
          propType: 'node',
          setter: {
            componentName: 'SlotSetter',
            title: '自定义筛选',
            initialValue: {
              type: 'JSSlot',
              params: ['scope'],
              value: [],
            },
          },
        },
        {
          name: 'customFilterIcon',
          title: { label: '筛选图标', tip: 'customFilterIcon | 自定义筛选图标' },
          propType: 'node',
          setter: {
            componentName: 'SlotSetter',
            title: '筛选图标',
            initialValue: {
              type: 'JSSlot',
              params: ['scope'],
              value: [],
            },
          },
        },
      ],
    },
    {
      title: '分页',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'pagination',
          title: { label: '显示分页', tip: 'pagination | 显示分页' },
          propType: 'object',
          setter: 'BoolSetter',
          defaultValue: false,
          extraProps: {
            setValue: (target: any, value: any) => {
              if (value) {
                target.parent.setPropValue('pagination', {
                  pageSize: 10,
                });
              }
            },
          },
        },
        {
          name: 'pagination.pageSize',
          title: { label: '每页条数', tip: 'pagination.pageSize | 每页条数' },
          propType: 'number',
          setter: 'NumberSetter',
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("pagination")',
          },
        },
        {
          name: 'pagination.total',
          title: { label: '数据总数', tip: 'pagination.total | 数据总数' },
          propType: 'number',
          setter: 'NumberSetter',
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("pagination")',
          },
        },
        {
          name: 'pagination.defaultCurrent',
          title: {
            label: '默认当前页',
            tip: 'pagination.defaultCurrent | 默认的当前页数',
          },
          propType: 'number',
          setter: 'NumberSetter',
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("pagination")',
          },
        },
        {
          name: 'pagination.current',
          title: { label: '当前页数', tip: 'pagination.current | 当前页数' },
          propType: 'number',
          setter: 'NumberSetter',
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("pagination")',
          },
        },
        {
          name: 'pagination.showTotal',
          title: {
            label: '显示总数',
            tip: 'pagination.showTotal | 用于显示数据总量和当前数据顺序',
          },
          propType: 'func',
          setter: [
            {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'showTotal(total,range,${extParams}){\n// 用于格式化显示表格数据总量\nreturn `共 ${total} 条`;\n}',
              },
            },
            'VariableSetter',
          ],
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("pagination")',
          },
        },
        {
          name: 'pagination.showSizeChanger',
          title: {
            label: '页数切换',
            tip: 'pagination.showSizeChanger | 是否展示 pageSize 切换器',
          },
          propType: 'bool',
          setter: 'BoolSetter',
          defaultValue: false,
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("pagination")',
          },
        },
        {
          name: 'pagination.showQuickJumper',
          title: {
            label: '快速跳转',
            tip: 'pagination.showQuickJumper | 是否可以快速跳转至某页',
          },
          propType: 'bool',
          setter: 'BoolSetter',
          defaultValue: false,
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("pagination")',
          },
        },
        {
          name: 'pagination.simple',
          title: { label: '简单分页', tip: 'pagination.simple | 简单分页' },
          propType: 'bool',
          setter: 'BoolSetter',
          defaultValue: false,
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("pagination")',
          },
        },
        {
          name: 'pagination.size',
          title: { label: '分页尺寸', tip: 'pagination.size | 分页尺寸' },
          propType: {
            type: 'oneOf',
            value: ['default', 'small'],
          },
          setter: [
            {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: '默认',
                    value: 'default',
                  },
                  {
                    title: '小',
                    value: 'small',
                  },
                ],
              },
            },
            'VariableSetter',
          ],
          defaultValue: 'default',
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("pagination")',
          },
        },
        {
          name: 'pagination.position',
          title: { label: '分页位置', tip: 'pagination.position | 分页位置' },
          setter: {
            componentName: 'ArraySetter',
            props: {
              itemSetter: {
                componentName: 'SelectSetter',
                props: {
                  options: [
                    {
                      title: '上左',
                      value: 'topLeft',
                    },
                    {
                      title: '上中',
                      value: 'topCenter',
                    },
                    {
                      title: '上右',
                      value: 'topRight',
                    },
                    {
                      title: '下左',
                      value: 'bottomLeft',
                    },
                    {
                      title: '下中',
                      value: 'bottomCenter',
                    },
                    {
                      title: '下右',
                      value: 'bottomRight',
                    },
                  ],
                },
                initialValue: 'bottomRight',
              },
            },
          },
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("pagination")',
          },
        },
      ],
    },
    {
      title: '行选择器',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'rowSelection',
          title: { label: '行选择', tip: 'rowSelection | 行选择' },
          propType: 'object',
          setter: 'BoolSetter',
          extraProps: {
            setValue: (target: any, value: any) => {
              console.log(value, 9910);
              if (value) {
                target.parent.setPropValue('rowSelection', {
                  type: 'radio',
                });
              } else {
                target.parent.setPropValue('rowSelection', {});
              }
            },
          },
        },
        {
          name: 'rowSelection.type',
          title: { label: '行选择类型', tip: 'rowSelection.type | 多选/单选' },
          propType: {
            type: 'oneOf',
            value: ['checkbox', 'radio'],
          },
          setter: [
            {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: '多选',
                    value: 'checkbox',
                  },
                  {
                    title: '单选',
                    value: 'radio',
                  },
                ],
              },
            },
            'VariableSetter',
          ],
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("rowSelection")',
          },
        },
        {
          name: 'rowSelection.fixed',
          title: {
            label: '固定左边',
            tip: 'rowSelection.fixed | 把选择框列固定在左边',
          },
          propType: 'bool',
          setter: 'BoolSetter',
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("rowSelection")',
          },
        },
        {
          name: 'rowSelection.checkStrictly',
          title: {
            label: '节点选择是否受控',
            tip: 'rowSelection.checkStrictly | checkable 状态下节点选择完全受控（父子数据选中状态不再关联）',
          },
          propType: 'bool',
          setter: 'BoolSetter',
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("rowSelection")',
          },
        },
        {
          name: 'rowSelection.selectedRowKeys',
          title: {
            label: '选中行Key',
            tip: 'rowSelection.selectedRowKeys | 指定选中项的 key 数组',
          },
          propType: 'object',
          setter: 'JsonSetter',
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("rowSelection")',
          },
        },
        {
          name: 'rowSelection.preserveSelectedRowKeys',
          title: {
            label: '保留选项',
            tip: 'rowSelection.preserveSelectedRowKeys | 当数据被删除时仍然保留选项',
          },
          propType: 'bool',
          setter: 'BoolSetter',
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("rowSelection")',
          },
        },
        {
          name: 'rowSelection.columnTitle',
          title: {
            label: '列表选择框标题',
            tip: 'rowSelection.columnTitle | 自定义列表选择框标题',
          },
          propType: ['string', 'node'],
          setter: ['StringSetter', 'SlotSetter'],
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("rowSelection")',
          },
        },
        {
          name: 'rowSelection.columnWidth',
          title: {
            label: '列表选择框宽度',
            tip: 'rowSelection.columnWidth | 自定义列表选择框宽度',
          },
          propType: ['number', 'string'],
          setter: ['NumberSetter', 'StringSetter'],
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("rowSelection")',
          },
        },
        {
          name: 'rowSelection.getCheckboxProps',
          title: {
            label: '默认属性',
            tip: 'rowSelection.getCheckboxProps | 选择框的默认属性配置',
          },
          propType: 'func',
          setter: [
            {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'getCheckboxProps(record,${extParams}){\n// 选择框的默认属性配置\nreturn { disabled: false };\n}',
              },
            },
            'VariableSetter',
          ],
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("rowSelection")',
          },
        },
        {
          name: 'rowSelection.hideDefaultSelections',
          title: {
            label: '去掉默认选项',
            tip: 'rowSelection.hideDefaultSelections | 去掉『全选』『反选』两个默认选项',
          },
          propType: 'bool',
          setter: 'BoolSetter',
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("rowSelection")',
          },
        },
        {
          name: 'rowSelection.hideSelectAll',
          title: {
            label: '隐藏选择选项',
            tip: 'rowSelection.hideSelectAll | 隐藏全选勾选框与自定义选择项',
          },
          propType: 'bool',
          setter: 'BoolSetter',
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("rowSelection")',
          },
        },
        {
          name: 'rowSelection.selections',
          title: {
            label: '自定义选择项配置',
            tip: 'rowSelection.selections | 自定义选择项 配置项, 设为 true 时使用默认选择项',
          },
          propType: ['bool', 'array'],
          setter: ['BoolSetter', 'ExpressionSetter'],
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("rowSelection")',
          },
        },
        {
          name: 'rowSelection.onChange',
          title: {
            label: '选中变换回调',
            tip: 'rowSelection.onChange | 选中项发生变化时的回调',
          },
          propType: 'func',
          setter: [
            {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'onSelectChange(selectedRowKeys, selectedRows){\n// 选中变换回调}',
              },
            },
            'VariableSetter',
          ],
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("rowSelection")',
          },
        },
        {
          name: 'rowSelection.onSelect',
          title: {
            label: '手动选择变化回调',
            tip: 'rowSelection.onSelect | 用户手动选择/取消选择某列的回调',
          },
          propType: 'func',
          setter: [
            {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'onSelected(record, selected, selectedRows, nativeEvent){\n// 手动选择回调}',
              },
            },
            'VariableSetter',
          ],
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("rowSelection")',
          },
        },
        {
          name: 'rowSelection.onSelectAll',
          title: {
            label: '手动全选变化回调',
            tip: 'rowSelection.onSelectAll | 用户手动选择/取消选择某列的回调',
          },
          propType: 'func',
          setter: [
            {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'onSelectAll(selected, selectedRows, changeRows){\n// 手动全选变化回调}',
              },
            },
            'VariableSetter',
          ],
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("rowSelection")',
          },
        },
        {
          name: 'rowSelection.onSelectInvert',
          title: {
            label: '手动选择反选的回调',
            tip: 'rowSelection.onSelectInvert | 用户手动选择反选的回调',
          },
          propType: 'func',
          setter: [
            {
              componentName: 'FunctionSetter',
              props: {
                template: 'onSelectInvert(selectedRows){\n// 手动选择反选的回调}',
              },
            },
            'VariableSetter',
          ],
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("rowSelection")',
          },
        },
        {
          name: 'rowSelection.onSelectNone',
          title: {
            label: '清空选择的回调',
            tip: 'rowSelection.onSelectNone | 用户清空选择的回调',
          },
          propType: 'func',
          setter: [
            {
              componentName: 'FunctionSetter',
              props: {
                template: 'onSelectNone(){\n// 清空选择的回调}',
              },
            },
            'VariableSetter',
          ],
          condition: {
            type: 'JSFunction',
            value: 'target => !!target.getProps().getPropValue("rowSelection")',
          },
        },
      ],
    },
    {
      title: '行展开',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'expandedRowRender',
          title: {
            label: '展开行渲染',
            tip: 'expandedRowRender | 额外的展开行',
          },
          propType: 'func',
          setter: [
            {
              componentName: 'SlotSetter',
              title: '展开行插槽',
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
                  'onExpandedRowRender(record,index,indent,expanded,${extParams}){\n// 展开行渲染\nreturn `${record.id}`}',
              },
            },
            'VariableSetter',
          ],
        },
        {
          name: 'defaultExpandAllRows',
          title: {
            label: '初始是否展开所有行',
            tip: 'defaultExpandAllRows | 初始时，是否展开所有行',
          },
          propType: 'bool',
          setter: ['BoolSetter', 'VariableSetter'],
        },
        {
          name: 'v-model:expandedRowKeys',
          title: {
            label: '展开的行',
            tip: 'v-model:expandedRowKeys | 展开的行，控制属性',
          },
          propType: {
            type: 'arrayOf',
            value: 'string',
          },
        },
        {
          name: 'rowExpandable',
          title: {
            label: '是否可展开',
            tip: 'rowExpandable | 行是否可展开',
          },
          propType: 'func',
          setter: [
            {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'rowExpandable(record,${extParams}){\n// 行是否可展开\nreturn true;\n}',
              },
            },
            'VariableSetter',
          ],
        },
        {
          name: 'expandFixed',
          title: {
            label: '展开图标是否固定',
            tip: 'expandRowByClick | 控制展开图标是否固定',
          },
          propType: [
            'bool',
            {
              type: 'oneOf',
              value: ['left', 'right'],
            },
          ],
          setter: [
            'BoolSetter',
            {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: 'left',
                    value: 'left',
                  },
                  {
                    title: 'right',
                    value: 'right',
                  },
                ],
              },
            },
          ],
        },
        {
          name: 'expandIcon',
          title: { label: '展开图标', tip: 'expandIcon | 自定义展开图标' },
          propType: 'func',
          setter: [
            {
              componentName: 'SlotSetter',
              title: '自定义展开图标',
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
                  'renderTitle(props,${extParams}){\n// 自定义展开图标\nreturn "自定义展开图标";\n}',
              },
            },
            'VariableSetter',
          ],
        },
        {
          name: 'expandRowByClick',
          title: {
            label: '点击行展开子行',
            tip: 'expandRowByClick | 通过点击行来展开子行',
          },
          propType: 'bool',
          setter: 'BoolSetter',
        },
        {
          name: 'indentSize',
          title: {
            label: '缩进的宽度',
            tip: 'indentSize | 展示树形数据时，每层缩进的宽度，以 px 为单位',
          },
          propType: 'number',
          setter: 'NumberSetter',
        },
      ],
    },
    {
      title: '滚动',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'scroll.scrollToFirstRowOnChange',
          title: {
            label: '自动滚动',
            tip: 'scroll.scrollToFirstRowOnChange | 是否自动滚动到表格顶部',
          },
          propType: 'bool',
          setter: 'BoolSetter',
          defaultValue: true,
        },
        {
          name: 'scroll.x',
          title: {
            label: '横向滚动',
            tip: 'scroll.x | 	设置横向滚动，也可用于指定滚动区域的宽，可以设置为像素值，百分比，true 和 max-content',
          },
          propType: { type: 'oneOfType', value: ['number', 'bool'] },
          setter: ['NumberSetter', 'BoolSetter', 'VariableSetter'],
        },
        {
          name: 'scroll.y',
          title: {
            label: '纵向滚动',
            tip: 'scroll.y | 	设置纵向滚动，也可用于指定滚动区域的高，可以设置为像素值',
          },
          propType: 'number',
          setter: ['NumberSetter', 'VariableSetter'],
        },
      ],
    },
    {
      title: '默认文案配置',
      display: 'accordion',
      type: 'group',
      items: [
        {
          name: 'locale.filterConfirm',
          title: {
            label: '过滤确定按钮',
            tip: 'locale.filterConfirm | 过滤确定按钮文案',
          },
          propType: 'string',
          setter: 'StringSetter',
          defaultValue: '确定',
        },
        {
          name: 'locale.filterReset',
          title: {
            label: '过滤重置按钮',
            tip: 'locale.filterReset | 过滤重置按钮文案',
          },
          propType: 'string',
          setter: 'StringSetter',
          defaultValue: '重置',
        },
        {
          name: 'locale.emptyText',
          title: {
            label: '空数据文案',
            tip: 'locale.emptyText | 空数据文案',
          },
          propType: 'string',
          setter: 'StringSetter',
          defaultValue: '暂无内容',
        },
      ],
    },
    {
      title: '扩展',
      display: 'block',
      type: 'group',
      items: [
        {
          name: 'title',
          title: { label: '表格标题', tip: 'title | 表格标题' },
          propType: 'func',
          setter: [
            {
              componentName: 'SlotSetter',
              title: '表格标题插槽',
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
                  'renderTitle(currentPageData,${extParams}){\n// 自定义渲染表格顶部\nreturn "表格顶部";\n}',
              },
            },
            'VariableSetter',
          ],
        },
        {
          name: 'footer',
          title: { label: '表格尾部', tip: 'footer | 表格尾部' },
          propType: 'func',
          setter: [
            {
              componentName: 'SlotSetter',
              title: '表格尾部插槽',
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
                  'renderFooter(currentPageData,${extParams}){\n// 自定义渲染表格尾部\nreturn "表格尾部";\n}',
              },
            },
            'VariableSetter',
          ],
        },
        {
          name: 'summary',
          title: { label: '总结栏', tip: 'summary | 总结栏' },
          propType: 'node',
          setter: 'SlotSetter',
        },
        {
          name: 'emptyText',
          title: { label: '空数据内容', tip: 'emptyText | 自定义空数据时的显示内容' },
          propType: 'node',
          setter: [
            {
              componentName: 'SlotSetter',
              title: '空数据内容',
              initialValue: {
                type: 'JSSlot',
                params: ['scope'],
                value: [],
              },
            },
            'VariableSetter',
          ],
        },
        {
          name: 'getPopupContainer',
          title: {
            label: '浮层的渲染节点',
            tip: 'getPopupContainer | 设置表格内各类浮层的渲染节点，如筛选菜单',
          },
          propType: 'func',
          setter: [
            {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'getPopupContainer(triggerNode,${extParams}){\n// 设置表格内各类浮层的渲染节点;\n}',
              },
            },
            'VariableSetter',
          ],
        },
        {
          name: 'customHeaderRow',
          title: { label: '头部行属性', tip: 'customHeaderRow | 设置头部行属性' },
          propType: 'func',
          setter: [
            {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'customHeaderRow(columns,index,${extParams}){\n// 设置头部行属性\nreturn {onClick:()=>{}};\n}',
              },
            },
            'VariableSetter',
          ],
        },
        {
          name: 'customRow',
          title: { label: '行属性', tip: 'customRow | 设置行属性' },
          propType: 'func',
          setter: [
            {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'customRow(record,index,${extParams}){\n// 设置行属性\nreturn {onClick:event=>{}};\n}',
              },
            },
            'VariableSetter',
          ],
        },
        {
          name: 'rowClassName',
          title: { label: '行类名', tip: 'rowClassName | 表格行的类名' },
          propType: 'func',
          setter: [
            {
              componentName: 'FunctionSetter',
              props: {
                template:
                  'rowClassName(record,index,${extParams}){\n// 表格行的类名\nreturn `className-${record.type}`;\n}',
              },
            },
            'VariableSetter',
          ],
        },
      ],
    },
  ],
  configure: {
    supports: {
      style: true,
      events: [
        {
          name: 'onChange',
          template:
            "onChange(pagination,filters,sorter,extra,${extParams}){\n// 分页、排序、筛选变化时触发\nconsole.log('onChange', pagination);}",
        },
        {
          name: 'onExpandedRowsChange',
          template:
            "onExpandedRowsChange(expandedRows){\n// 展开的行变化时触发\nconsole.log('onExpandedRowsChange', expandedRows);}",
        },
        {
          name: 'onExpand',
          template:
            "onExpand(expanded,record){\n// 点击展开图标时触发\nconsole.log('onExpand', expanded, record);}",
        },
        {
          name: 'onResizeColumn',
          template:
            "onResizeColumn(width,column){\n// 点击展开图标时触发\nconsole.log('onExpand', expanded, record);}",
        },
      ],
    },
  },
  snippets: [
    {
      title: '表格',
      screenshot: avatarImage,
      schema: {
        componentName: 'ATable',
        props: {
          dataSource: [
            {
              id: '1',
              name: '毛不易',
              age: 32,
              address: '西湖区湖底公园1号',
            },
            {
              id: '2',
              name: '邓紫棋',
              age: 28,
              address: '滨江区网商路699号',
            },
          ],
          columns: [
            {
              title: '姓名',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: '年龄',
              dataIndex: 'age',
              key: 'age',
            },
            {
              title: '地址',
              dataIndex: 'address',
              key: 'address',
            },
            {
              title: '操作',
              align: 'left',
              fixed: 'right',
            },
          ],
          rowKey: 'id',
          pagination: {
            pageSize: 10,
            total: 15,
            current: 1,
          },
        },
      },
    },
  ],
};

export default meta;

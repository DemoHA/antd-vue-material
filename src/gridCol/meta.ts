function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

export default {
  group: 'Antd',
  componentName: 'ACol',
  title: '栅格-列',
  category: '布局',
  props: [
    {
      name: 'span',
      title: { label: '占位格数', tip: 'span | 栅格占位格数' },
      propType: 'number',
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
      title: { label: '左侧偏移格数', tip: 'offset | 间隔内不可以有栅格' },
      propType: 'number',
      setter: 'NumberSetter',
    },
    {
      name: 'order',
      title: { label: '栅格顺序', tip: 'order | flex 布局模式下有效' },
      propType: 'number',
      setter: 'NumberSetter',
    },
    {
      name: 'pull',
      title: { label: '向左移动', tip: 'pull | 栅格向左移动格数' },
      propType: 'number',
      setter: {
        componentName: 'NumberSetter',
        props: {
          min: 0,
          max: 24,
        },
      },
    },
    {
      name: 'push',
      title: { label: '向右移动', tip: 'push | 栅格向右移动格数' },
      propType: 'number',
      setter: {
        componentName: 'NumberSetter',
        props: {
          min: 0,
          max: 24,
        },
      },
    },
    {
      name: 'xxxl',
      title: {
        label: '≥2000px展示',
        tip: 'xxxl | 响应式栅格，可为栅格数或一个包含其他属性的对象',
      },
      propType: { type: 'oneOfType', value: ['object', 'number'] },
      setter: [
        {
          componentName: 'NumberSetter',
          props: {
            min: 0,
            max: 24,
          },
        },
        'VariableSetter',
      ],
    },
    {
      name: 'xxl',
      title: {
        label: '≥1600px展示',
        tip: 'xxl | 响应式栅格，可为栅格数或一个包含其他属性的对象',
      },
      propType: { type: 'oneOfType', value: ['number', 'object'] },
      setter: [
        {
          componentName: 'NumberSetter',
          props: {
            min: 0,
            max: 24,
          },
        },
        'VariableSetter',
      ],
    },
    {
      name: 'xl',
      title: {
        label: '≥1200px展示',
        tip: 'xl | 响应式栅格，可为栅格数或一个包含其他属性的对象',
      },
      propType: { type: 'oneOfType', value: ['number', 'object'] },
      setter: [
        {
          componentName: 'NumberSetter',
          props: {
            min: 0,
            max: 24,
          },
        },
        'VariableSetter',
      ],
    },
    {
      name: 'lg',
      title: {
        label: '≥992px展示',
        tip: 'lg | 响应式栅格，可为栅格数或一个包含其他属性的对象',
      },
      propType: { type: 'oneOfType', value: ['number', 'object'] },
      setter: [
        {
          componentName: 'NumberSetter',
          props: {
            min: 0,
            max: 24,
          },
        },
        'VariableSetter',
      ],
    },
    {
      name: 'md',
      title: {
        label: '≥768px展示',
        tip: 'md | 响应式栅格，可为栅格数或一个包含其他属性的对象',
      },
      propType: { type: 'oneOfType', value: ['number', 'object'] },
      setter: [
        {
          componentName: 'NumberSetter',
          props: {
            min: 0,
            max: 24,
          },
        },
        'VariableSetter',
      ],
    },
    {
      name: 'sm',
      title: {
        label: '≥576px展示',
        tip: 'sm | 响应式栅格，可为栅格数或一个包含其他属性的对象',
      },
      propType: { type: 'oneOfType', value: ['number', 'object'] },
      setter: [
        {
          componentName: 'NumberSetter',
          props: {
            min: 0,
            max: 24,
          },
        },
        'VariableSetter',
      ],
    },
    {
      name: 'xs',
      title: {
        label: '<576px展示',
        tip: 'xs | 响应式栅格，可为栅格数或一个包含其他属性的对象',
      },
      propType: { type: 'oneOfType', value: ['number', 'object'] },
      setter: [
        {
          componentName: 'NumberSetter',
          props: {
            min: 0,
            max: 24,
          },
        },
        'VariableSetter',
      ],
    },
  ],
  configure: {
    component: { isContainer: true, nestingRule: { parentWhitelist: ['ARow'] } },
    supports: { style: true },
    advanced: {
      getResizingHandlers: () => {
        return ['e'];
      },
      callbacks: {
        resizeStart: (
          e: any,
          currentNode: {
            parent: any;
            parentRect: any;
            beforeSpan: any;
            getPropValue: (arg0: string) => number;
            startRect: any;
            getRect: () => any;
          }
        ) => {
          const parent = currentNode.parent;
          if (parent) {
            const parentNode = parent.getDOMNode();
            if (parentNode) {
              currentNode.parentRect = parentNode.getBoundingClientRect();
            }
          }
          currentNode.beforeSpan = currentNode.getPropValue('span') || 24;
          currentNode.startRect = currentNode.getRect();
        },
        resize: (
          e: { deltaX: any },
          currentNode: {
            startRect: { width: any };
            beforeSpan: number;
            parentRect: { width: number };
            moveAColumn: number;
            targetAColumn: number;
            getDOMNode: () => any;
          }
        ) => {
          const { deltaX } = e;
          const startWidth = currentNode.startRect
            ? currentNode.startRect.width
            : currentNode.beforeSpan * (currentNode.parentRect.width / 24);
          let width = startWidth + deltaX;
          if (!currentNode.startRect) {
            currentNode.startRect = { width };
          }
          width = clamp(width, 0, currentNode.parentRect.width);
          const allowMoveX = Math.round(width - startWidth); // 实际被允许的x轴移动
          currentNode.moveAColumn = Math.round(
            allowMoveX / (currentNode.parentRect.width / 24)
          ); // 计算移动距离所占的列
          if (allowMoveX > 0) {
            currentNode.moveAColumn++;
          } else {
            currentNode.moveAColumn--;
          }
          currentNode.targetAColumn = clamp(
            currentNode.beforeSpan + currentNode.moveAColumn,
            1,
            24
          );
          // currentNode.setPropValue('span', currentNode.targetAColumn);
          const dom = currentNode.getDOMNode();
          dom.style.width = `${Math.round(width)}px`;
          dom.style.flex = 'none';
          dom.style.maxWidth = '100%';
        },
        resizeEnd: (
          e: any,
          currentNode: {
            getDOMNode: () => {
              (): any;
              new (): any;
              style: { (): any; new (): any; cssText: string };
            };
            targetAColumn: number;
            setPropValue: (arg0: string, arg1: any) => void;
          }
        ) => {
          currentNode.getDOMNode().style.cssText = '';
          currentNode.targetAColumn = clamp(currentNode.targetAColumn, 1, 24);
          currentNode.setPropValue('span', currentNode.targetAColumn);
        },
      },
    },
  },
  snippets: [],
};

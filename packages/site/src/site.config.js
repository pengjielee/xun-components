export const config = {
  general: {
    name: '通用',
    childs: [
      {
        key: 'Button',
        name: '按钮',
        md: () => import('xun-components/dist/Button/index.md'),
        code: () => import('xun-components/dist/Button/demo.tsx'),
        demo: () => import('xun-components/dist/Button/demo.js'),
      },
      {
        key: 'List',
        name: '列表',
        md: () => import('xun-components/dist/List/index.md'),
        code: () => import('xun-components/dist/List/demo.tsx'),
        demo: () => import('xun-components/dist/List/demo.js'),
      },
      {
        key: 'Cell',
        name: '单元格',
        md: () => import('xun-components/dist/Cell/index.md'),
        code: () => import('xun-components/dist/Cell/demo.tsx'),
        demo: () => import('xun-components/dist/Cell/demo.js'),
      },
    ],
  },
  form: {
    name: '数据录入',
    childs: [
      {
        key: 'AreaPicker',
        name: '地区选择器',
        md: () => import('xun-components/dist/AreaPicker/index.md'),
        code: () => import('xun-components/dist/AreaPicker/demo.tsx'),
        demo: () => import('xun-components/dist/AreaPicker/demo.js'),
      },
      {
        key: 'Checkbox',
        name: '复选框',
        md: () => import('xun-components/dist/Checkbox/index.md'),
        code: () => import('xun-components/dist/Checkbox/demo.tsx'),
        demo: () => import('xun-components/dist/Checkbox/demo.js'),
      },
      {
        key: 'FilePicker',
        name: '文件选择器',
        md: () => import('xun-components/dist/FilePicker/index.md'),
        code: () => import('xun-components/dist/FilePicker/demo.tsx'),
        demo: () => import('xun-components/dist/FilePicker/demo.js'),
      },
      {
        key: 'Keyboard',
        name: '键盘',
        md: () => import('xun-components/dist/Keyboard/index.md'),
        code: () => import('xun-components/dist/Keyboard/demo.tsx'),
        demo: () => import('xun-components/dist/Keyboard/demo.js'),
      },
      {
        key: 'PickerView',
        name: '选择器',
        md: () => import('xun-components/dist/PickerView/index.md'),
        code: () => import('xun-components/dist/PickerView/demo.tsx'),
        demo: () => import('xun-components/dist/PickerView/demo.js'),
      },
      {
        key: 'Radio',
        name: '单选框',
        md: () => import('xun-components/dist/Radio/index.md'),
        code: () => import('xun-components/dist/Radio/demo.tsx'),
        demo: () => import('xun-components/dist/Radio/demo.js'),
      },
      {
        key: 'Rate',
        name: '评分',
        md: () => import('xun-components/dist/Rate/index.md'),
        code: () => import('xun-components/dist/Rate/demo.tsx'),
        demo: () => import('xun-components/dist/Rate/demo.js'),
      },
      {
        key: 'SearchBar',
        name: '搜索框',
        md: () => import('xun-components/dist/SearchBar/index.md'),
        code: () => import('xun-components/dist/SearchBar/demo.tsx'),
        demo: () => import('xun-components/dist/SearchBar/demo.js'),
      },
      {
        key: 'Stepper',
        name: '步进器',
        md: () => import('xun-components/dist/Stepper/index.md'),
        code: () => import('xun-components/dist/Stepper/demo.tsx'),
        demo: () => import('xun-components/dist/Stepper/demo.js'),
      },
      {
        key: 'Switch',
        name: '开关',
        md: () => import('xun-components/dist/Switch/index.md'),
        code: () => import('xun-components/dist/Switch/demo.tsx'),
        demo: () => import('xun-components/dist/Switch/demo.js'),
      },
      {
        key: 'TextArea',
        name: '输入框',
        md: () => import('xun-components/dist/TextArea/index.md'),
        code: () => import('xun-components/dist/TextArea/demo.tsx'),
        demo: () => import('xun-components/dist/TextArea/demo.js'),
      },
    ],
  },
  feedback: {
    name: '操作反馈',
    childs: [
      {
        key: 'ActionSheet',
        name: '动作面板',
        md: () => import('xun-components/dist/ActionSheet/index.md'),
        code: () => import('xun-components/dist/ActionSheet/demo.tsx'),
        demo: () => import('xun-components/dist/ActionSheet/demo.js'),
      },
      {
        key: 'Dialog',
        name: '弹窗',
        md: () => import('xun-components/dist/Dialog/index.md'),
        code: () => import('xun-components/dist/Dialog/demo.tsx'),
        demo: () => import('xun-components/dist/Dialog/demo.js'),
      },
      {
        key: 'Empty',
        name: '暂无数据',
        md: () => import('xun-components/dist/Empty/index.md'),
        code: () => import('xun-components/dist/Empty/demo.tsx'),
        demo: () => import('xun-components/dist/Empty/demo.js'),
      },
      {
        key: 'Error',
        name: '出错了',
        md: () => import('xun-components/dist/Error/index.md'),
        code: () => import('xun-components/dist/Error/demo.tsx'),
        demo: () => import('xun-components/dist/Error/demo.js'),
      },
      {
        key: 'Loading',
        name: '加载中',
        md: () => import('xun-components/dist/Loading/index.md'),
        code: () => import('xun-components/dist/Loading/demo.tsx'),
        demo: () => import('xun-components/dist/Loading/demo.js'),
      },
      {
        key: 'Loader',
        name: '加载器',
        md: () => import('xun-components/dist/Loader/index.md'),
        code: () => import('xun-components/dist/Loader/demo.tsx'),
        demo: () => import('xun-components/dist/Loader/demo.js'),
      },
      {
        key: 'Message',
        name: '消息',
        md: () => import('xun-components/dist/Message/index.md'),
        code: () => import('xun-components/dist/Message/demo.tsx'),
        demo: () => import('xun-components/dist/Message/demo.js'),
      },
      {
        key: 'Popup',
        name: '弹出框',
        md: () => import('xun-components/dist/Popup/index.md'),
        code: () => import('xun-components/dist/Popup/demo.tsx'),
        demo: () => import('xun-components/dist/Popup/demo.js'),
      },
      {
        key: 'ProgressBar',
        name: '进度条',
        md: () => import('xun-components/dist/ProgressBar/index.md'),
        code: () => import('xun-components/dist/ProgressBar/demo.tsx'),
        demo: () => import('xun-components/dist/ProgressBar/demo.js'),
      },
      {
        key: 'Progress',
        name: '圆形进度条',
        md: () => import('xun-components/dist/Progress/index.md'),
        code: () => import('xun-components/dist/Progress/demo.tsx'),
        demo: () => import('xun-components/dist/Progress/demo.js'),
      },
      {
        key: 'PullToRefresh',
        name: '下拉刷新',
        md: () => import('xun-components/dist/PullToRefresh/index.md'),
        code: () => import('xun-components/dist/PullToRefresh/demo.tsx'),
        demo: () => import('xun-components/dist/PullToRefresh/demo.js'),
      },
      {
        key: 'Result',
        name: '结果',
        md: () => import('xun-components/dist/Result/index.md'),
        code: () => import('xun-components/dist/Result/demo.tsx'),
        demo: () => import('xun-components/dist/Result/demo.js'),
      },
      {
        key: 'SwipeAction',
        name: '滑动操作',
        md: () => import('xun-components/dist/SwipeAction/index.md'),
        code: () => import('xun-components/dist/SwipeAction/demo.tsx'),
        demo: () => import('xun-components/dist/SwipeAction/demo.js'),
      },
      {
        key: 'Toast',
        name: '轻提示',
        md: () => import('xun-components/dist/Toast/index.md'),
        code: () => import('xun-components/dist/Toast/demo.tsx'),
        demo: () => import('xun-components/dist/Toast/demo.js'),
      },
    ],
  },
  view: {
    name: '数据展示',
    childs: [
      {
        key: 'Card',
        name: '卡片',
        md: () => import('xun-components/dist/Card/index.md'),
        code: () => import('xun-components/dist/Card/demo.tsx'),
        demo: () => import('xun-components/dist/Card/demo.js'),
      },
      {
        key: 'Collapse',
        name: '折叠面板',
        md: () => import('xun-components/dist/Collapse/index.md'),
        code: () => import('xun-components/dist/Collapse/demo.tsx'),
        demo: () => import('xun-components/dist/Collapse/demo.js'),
      },
      {
        key: 'Divider',
        name: '分割线',
        md: () => import('xun-components/dist/Divider/index.md'),
        code: () => import('xun-components/dist/Divider/demo.tsx'),
        demo: () => import('xun-components/dist/Divider/demo.js'),
      },
      {
        key: 'ImageViewer',
        name: '图片查看器',
        md: () => import('xun-components/dist/ImageViewer/index.md'),
        code: () => import('xun-components/dist/ImageViewer/demo.tsx'),
        demo: () => import('xun-components/dist/ImageViewer/demo.js'),
      },
      {
        key: 'Marquee',
        name: '滚动',
        md: () => import('xun-components/dist/Marquee/index.md'),
        code: () => import('xun-components/dist/Marquee/demo.tsx'),
        demo: () => import('xun-components/dist/Marquee/demo.js'),
      },
      {
        key: 'NoticeBar',
        name: '通知栏',
        md: () => import('xun-components/dist/NoticeBar/index.md'),
        code: () => import('xun-components/dist/NoticeBar/demo.tsx'),
        demo: () => import('xun-components/dist/NoticeBar/demo.js'),
      },
      {
        key: 'Tag',
        name: '标签',
        md: () => import('xun-components/dist/Tag/index.md'),
        code: () => import('xun-components/dist/Tag/demo.tsx'),
        demo: () => import('xun-components/dist/Tag/demo.js'),
      },
      {
        key: 'WaterMark',
        name: '水印',
        md: () => import('xun-components/dist/WaterMark/index.md'),
        code: () => import('xun-components/dist/WaterMark/demo.tsx'),
        demo: () => import('xun-components/dist/WaterMark/demo.js'),
      },
    ],
  },
  navigation: {
    name: '导航',
    childs: [
      {
        key: 'Grid',
        name: '宫格',
        md: () => import('xun-components/dist/Grid/index.md'),
        code: () => import('xun-components/dist/Grid/demo.tsx'),
        demo: () => import('xun-components/dist/Grid/demo.js'),
      },
      {
        key: 'IndexBar',
        name: '索引栏',
        md: () => import('xun-components/dist/IndexBar/index.md'),
        code: () => import('xun-components/dist/IndexBar/demo.tsx'),
        demo: () => import('xun-components/dist/IndexBar/demo.js'),
      },
      {
        key: 'NavBar',
        name: '导航栏',
        md: () => import('xun-components/dist/NavBar/index.md'),
        code: () => import('xun-components/dist/NavBar/demo.tsx'),
        demo: () => import('xun-components/dist/NavBar/demo.js'),
      },
      {
        key: 'SideBar',
        name: '侧边导航',
        md: () => import('xun-components/dist/SideBar/index.md'),
        code: () => import('xun-components/dist/SideBar/demo.tsx'),
        demo: () => import('xun-components/dist/SideBar/demo.js'),
      },
      {
        key: 'TabBar',
        name: '标签栏',
        md: () => import('xun-components/dist/TabBar/index.md'),
        code: () => import('xun-components/dist/TabBar/demo.tsx'),
        demo: () => import('xun-components/dist/TabBar/demo.js'),
      },
      {
        key: 'Tabs',
        name: '标签页',
        md: () => import('xun-components/dist/Tabs/index.md'),
        code: () => import('xun-components/dist/Tabs/demo.tsx'),
        demo: () => import('xun-components/dist/Tabs/demo.js'),
      },
    ],
  },
  other: {
    name: '其他',
    childs: [
      {
        key: 'BackToTop',
        name: '返回顶部',
        md: () => import('xun-components/dist/BackToTop/index.md'),
        code: () => import('xun-components/dist/BackToTop/demo.tsx'),
        demo: () => import('xun-components/dist/BackToTop/demo.js'),
      },
    ],
  },
};

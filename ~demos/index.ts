// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';
import rawCode1 from '!!dumi-raw-code-loader!/Users/lipengjie/projects/xun-components/src/assets/utils/index.ts?dumi-raw-code';

export default {
  'ActionSheet-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _slicedToArray2 = _interopRequireDefault(require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

  var _react = _interopRequireWildcard(require("react"));

  var _xunComponents = require("xun-components");

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var actions = [{
    text: '操作一',
    onClick: function onClick() {
      return alert('点击操作一');
    }
  }, {
    text: '操作二',
    disabled: true,
    onClick: function onClick() {
      return alert('点击操作二');
    }
  }, {
    text: '操作三',
    type: 'success',
    onClick: function onClick() {
      return alert('点击操作三');
    }
  }, {
    text: '操作四',
    type: 'failure',
    onClick: function onClick() {
      return alert('点击操作四');
    }
  }];

  var Demo = function Demo() {
    var _useState = (0, _react.useState)(false),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        visible1 = _useState2[0],
        setVisible1 = _useState2[1];

    var _useState3 = (0, _react.useState)(false),
        _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
        visible2 = _useState4[0],
        setVisible2 = _useState4[1];

    var _useState5 = (0, _react.useState)(false),
        _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
        visible3 = _useState6[0],
        setVisible3 = _useState6[1];

    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-page"
    }, /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("h3", {
      className: "demo-page-title"
    }, "\u52A8\u4F5C\u9762\u677F")), /*#__PURE__*/_react["default"].createElement("main", null, /*#__PURE__*/_react["default"].createElement(_xunComponents.Cell, {
      title: "\u57FA\u672C",
      description: /*#__PURE__*/_react["default"].createElement(_xunComponents.Button, {
        size: "small",
        onClick: function onClick() {
          return setVisible1(true);
        }
      }, "\u5F00\u542F")
    }), /*#__PURE__*/_react["default"].createElement(_xunComponents.Cell, {
      title: "\u53D6\u6D88\u6309\u94AE",
      description: /*#__PURE__*/_react["default"].createElement(_xunComponents.Button, {
        size: "small",
        onClick: function onClick() {
          return setVisible2(true);
        }
      }, "\u5F00\u542F")
    }), /*#__PURE__*/_react["default"].createElement(_xunComponents.Cell, {
      title: "\u53D6\u6D88\u6309\u94AE\u548C\u6807\u9898",
      description: /*#__PURE__*/_react["default"].createElement(_xunComponents.Button, {
        size: "small",
        onClick: function onClick() {
          return setVisible3(true);
        }
      }, "\u5F00\u542F")
    }), /*#__PURE__*/_react["default"].createElement(_xunComponents.ActionSheet, {
      actions: actions,
      visible: visible1,
      onMaskClick: function onMaskClick() {
        return setVisible1(false);
      },
      onCancel: function onCancel() {
        return alert('cancel');
      }
    }), /*#__PURE__*/_react["default"].createElement(_xunComponents.ActionSheet, {
      actions: actions,
      visible: visible2,
      onMaskClick: function onMaskClick() {
        return setVisible2(false);
      },
      onCancel: function onCancel() {
        return alert('cancel');
      },
      cancelText: "\u53D6\u6D88"
    }), /*#__PURE__*/_react["default"].createElement(_xunComponents.ActionSheet, {
      title: "\u8BF7\u9009\u62E9\u8981\u6267\u884C\u7684\u64CD\u4F5C",
      actions: actions,
      visible: visible3,
      onMaskClick: function onMaskClick() {
        return setVisible3(false);
      },
      onCancel: function onCancel() {
        return alert('cancel');
      },
      cancelText: "\u53D6\u6D88"
    })));
  };

  var _default = Demo;
  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React, { useState } from 'react';\nimport { ActionSheet, Cell, Button } from 'xun-components';\n\nconst actions = [\n  {\n    text: '操作一',\n    onClick: () => alert('点击操作一'),\n  },\n  {\n    text: '操作二',\n    disabled: true,\n    onClick: () => alert('点击操作二'),\n  },\n  {\n    text: '操作三',\n    type: 'success',\n    onClick: () => alert('点击操作三'),\n  },\n  {\n    text: '操作四',\n    type: 'failure',\n    onClick: () => alert('点击操作四'),\n  },\n];\n\nconst Demo = () => {\n  const [visible1, setVisible1] = useState(false);\n  const [visible2, setVisible2] = useState(false);\n  const [visible3, setVisible3] = useState(false);\n\n  return (\n    <div className=\"demo-page\">\n      <header>\n        <h3 className=\"demo-page-title\">动作面板</h3>\n      </header>\n      <main>\n        <Cell\n          title=\"基本\"\n          description={\n            <Button size=\"small\" onClick={() => setVisible1(true)}>\n              开启\n            </Button>\n          }\n        ></Cell>\n\n        <Cell\n          title=\"取消按钮\"\n          description={\n            <Button size=\"small\" onClick={() => setVisible2(true)}>\n              开启\n            </Button>\n          }\n        ></Cell>\n\n        <Cell\n          title=\"取消按钮和标题\"\n          description={\n            <Button size=\"small\" onClick={() => setVisible3(true)}>\n              开启\n            </Button>\n          }\n        ></Cell>\n\n        <ActionSheet\n          actions={actions}\n          visible={visible1}\n          onMaskClick={() => setVisible1(false)}\n          onCancel={() => alert('cancel')}\n        ></ActionSheet>\n\n        <ActionSheet\n          actions={actions}\n          visible={visible2}\n          onMaskClick={() => setVisible2(false)}\n          onCancel={() => alert('cancel')}\n          cancelText=\"取消\"\n        ></ActionSheet>\n\n        <ActionSheet\n          title=\"请选择要执行的操作\"\n          actions={actions}\n          visible={visible3}\n          onMaskClick={() => setVisible3(false)}\n          onCancel={() => alert('cancel')}\n          cancelText=\"取消\"\n        ></ActionSheet>\n      </main>\n    </div>\n  );\n};\n\nexport default Demo;"}},"dependencies":{"react":{"version":"^17.0.2"},"xun-components":{"version":"1.0.2"},"classnames":{"version":"^2.3.1"},"react-dom":{"version":"^17.0.2"}},"componentName":"ActionSheet","identifier":"ActionSheet-demo"},
  },
  'AreaPicker-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _slicedToArray2 = _interopRequireDefault(require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

  var _react = _interopRequireWildcard(require("react"));

  var _xunComponents = require("xun-components");

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var Demo = function Demo() {
    var _useState = (0, _react.useState)(false),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        visible = _useState2[0],
        setVisible = _useState2[1];

    var _useState3 = (0, _react.useState)([]),
        _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
        result = _useState4[0],
        setResult = _useState4[1];

    var _useState5 = (0, _react.useState)(false),
        _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
        visible2 = _useState6[0],
        setVisible2 = _useState6[1];

    var _useState7 = (0, _react.useState)([]),
        _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
        result2 = _useState8[0],
        setResult2 = _useState8[1];

    var handleConfirm = function handleConfirm(result) {
      setResult(result);
      setVisible(false);
    };

    var handleConfirm2 = function handleConfirm2(result) {
      setResult2(result);
      setVisible2(false);
    };

    var resultNames = result && result.map(function (item) {
      return item.name;
    }).join(' ');
    var resultNames2 = result2 && result2.map(function (item) {
      return item.name;
    }).join(' ');
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-page"
    }, /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("h3", {
      className: "demo-page-title"
    }, "\u7701\u5E02\u533A\u9009\u62E9")), /*#__PURE__*/_react["default"].createElement("main", null, /*#__PURE__*/_react["default"].createElement(_xunComponents.Cell, {
      title: "\u9009\u62E9\u7701\u5E02\u533A",
      description: /*#__PURE__*/_react["default"].createElement(_xunComponents.Button, {
        size: "small",
        onClick: function onClick() {
          return setVisible(true);
        }
      }, "\u9009\u62E9")
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-result"
    }, resultNames), /*#__PURE__*/_react["default"].createElement(_xunComponents.Cell, {
      title: "\u53EA\u9009\u62E9\u7701",
      description: /*#__PURE__*/_react["default"].createElement(_xunComponents.Button, {
        size: "small",
        onClick: function onClick() {
          return setVisible2(true);
        }
      }, "\u9009\u62E9")
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-result"
    }, resultNames2), /*#__PURE__*/_react["default"].createElement(_xunComponents.AreaPicker, {
      visible: visible,
      onConfirm: handleConfirm,
      onMaskClick: function onMaskClick() {
        return setVisible(false);
      }
    }), /*#__PURE__*/_react["default"].createElement(_xunComponents.AreaPicker, {
      onlyProvince: true,
      visible: visible2,
      onConfirm: handleConfirm2,
      onMaskClick: function onMaskClick() {
        return setVisible2(false);
      }
    })));
  };

  var _default = Demo;
  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React, { useState } from 'react';\nimport { AreaPicker, Cell, Button } from 'xun-components';\n\nconst Demo = () => {\n  const [visible, setVisible] = useState(false);\n  const [result, setResult] = useState([]);\n  const [visible2, setVisible2] = useState(false);\n  const [result2, setResult2] = useState([]);\n\n  const handleConfirm = (result) => {\n    setResult(result);\n    setVisible(false);\n  };\n\n  const handleConfirm2 = (result) => {\n    setResult2(result);\n    setVisible2(false);\n  };\n\n  const resultNames = result && result.map((item) => item.name).join(' ');\n  const resultNames2 = result2 && result2.map((item) => item.name).join(' ');\n\n  return (\n    <div className=\"demo-page\">\n      <header>\n        <h3 className=\"demo-page-title\">省市区选择</h3>\n      </header>\n      <main>\n        <Cell\n          title=\"选择省市区\"\n          description={\n            <Button size=\"small\" onClick={() => setVisible(true)}>\n              选择\n            </Button>\n          }\n        />\n\n        <div className=\"demo-result\">{resultNames}</div>\n\n        <Cell\n          title=\"只选择省\"\n          description={\n            <Button size=\"small\" onClick={() => setVisible2(true)}>\n              选择\n            </Button>\n          }\n        />\n\n        <div className=\"demo-result\">{resultNames2}</div>\n\n        <AreaPicker\n          visible={visible}\n          onConfirm={handleConfirm}\n          onMaskClick={() => setVisible(false)}\n        ></AreaPicker>\n\n        <AreaPicker\n          onlyProvince={true}\n          visible={visible2}\n          onConfirm={handleConfirm2}\n          onMaskClick={() => setVisible2(false)}\n        ></AreaPicker>\n      </main>\n    </div>\n  );\n};\n\nexport default Demo;"}},"dependencies":{"react":{"version":"^17.0.2"},"xun-components":{"version":"1.0.2"},"classnames":{"version":"^2.3.1"},"react-dom":{"version":"^17.0.2"}},"componentName":"AreaPicker","identifier":"AreaPicker-demo"},
  },
  'BackToTop-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _slicedToArray2 = _interopRequireDefault(require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

  var _react = _interopRequireWildcard(require("react"));

  var _xunComponents = require("xun-components");

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var Demo = function Demo() {
    var _useState = (0, _react.useState)(false),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        visible = _useState2[0],
        setVisible = _useState2[1];

    var list = [];

    for (var i = 0; i < 100; i++) {
      list.push( /*#__PURE__*/_react["default"].createElement(_xunComponents.Cell, {
        key: +i
      }, "\u7B2C ", i + 1, " \u884C"));
    }

    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-page"
    }, /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("h3", {
      className: "demo-page-title"
    }, "\u8FD4\u56DE\u9876\u90E8")), /*#__PURE__*/_react["default"].createElement("main", null, list, /*#__PURE__*/_react["default"].createElement(_xunComponents.BackToTop, null, "Up")));
  };

  var _default = Demo;
  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React, { useState } from 'react';\nimport { BackToTop, Cell } from 'xun-components';\n\nconst Demo = () => {\n  const [visible, setVisible] = useState(false);\n  const list = [];\n  for (let i = 0; i < 100; i++) {\n    list.push(<Cell key={+i}>第 {i + 1} 行</Cell>);\n  }\n  return (\n    <div className=\"demo-page\">\n      <header>\n        <h3 className=\"demo-page-title\">返回顶部</h3>\n      </header>\n      <main>\n        {list}\n        <BackToTop>Up</BackToTop>\n      </main>\n    </div>\n  );\n};\n\nexport default Demo;"}},"dependencies":{"react":{"version":"^17.0.2"},"xun-components":{"version":"1.0.2"},"classnames":{"version":"^2.3.1"},"react-dom":{"version":"^17.0.2"}},"componentName":"BackToTop","identifier":"BackToTop-demo"},
  },
  'Button-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _slicedToArray2 = _interopRequireDefault(require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

  var _react = _interopRequireWildcard(require("react"));

  var _xunComponents = require("xun-components");

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var Demo = function Demo() {
    var _useState = (0, _react.useState)(false),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        visible = _useState2[0],
        setVisible = _useState2[1];

    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-page demo-page-button"
    }, /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("h3", {
      className: "demo-page-title"
    }, "\u6309\u94AE")), /*#__PURE__*/_react["default"].createElement("main", null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-title"
    }, "\u6309\u94AE\u7C7B\u578B"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Button, {
      type: "primary"
    }, "primary"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Button, {
      type: "secondary"
    }, "secondary"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Button, {
      type: "success"
    }, "success"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Button, {
      type: "warning"
    }, "warning"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Button, {
      type: "danger"
    }, "danger"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Button, {
      type: "info"
    }, "info")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-title"
    }, "\u6309\u94AE\u5C3A\u5BF8"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Button, {
      size: "small"
    }, "small"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Button, null, "normal"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Button, {
      size: "large"
    }, "large")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-title"
    }, "\u7981\u7528\u6309\u94AE"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Button, {
      disabled: true
    }, "disabled")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-title"
    }, "\u5757\u72B6\u6309\u94AE"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Button, {
      type: "primary",
      block: true
    }, "block")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-title"
    }, "\u5706\u89D2\u6309\u94AE"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Button, {
      round: true
    }, "round"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Button, {
      round: 10
    }, "round(10)"))));
  };

  var _default = Demo;
  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React, { useState } from 'react';\nimport { Button } from 'xun-components';\n\nconst Demo = () => {\n  const [visible, setVisible] = useState(false);\n  return (\n    <div className=\"demo-page demo-page-button\">\n      <header>\n        <h3 className=\"demo-page-title\">按钮</h3>\n      </header>\n      <main>\n        <div className=\"demo-block\">\n          <div className=\"demo-title\">按钮类型</div>\n          <Button type=\"primary\">primary</Button>\n          <Button type=\"secondary\">secondary</Button>\n\n          <Button type=\"success\">success</Button>\n\n          <Button type=\"warning\">warning</Button>\n\n          <Button type=\"danger\">danger</Button>\n          <Button type=\"info\">info</Button>\n        </div>\n\n        <div className=\"demo-block\">\n          <div className=\"demo-title\">按钮尺寸</div>\n          <Button size=\"small\">small</Button>\n          <Button>normal</Button>\n          <Button size=\"large\">large</Button>\n        </div>\n\n        <div className=\"demo-block\">\n          <div className=\"demo-title\">禁用按钮</div>\n          <Button disabled>disabled</Button>\n        </div>\n\n        <div className=\"demo-block\">\n          <div className=\"demo-title\">块状按钮</div>\n\n          <Button type=\"primary\" block>\n            block\n          </Button>\n        </div>\n\n        <div className=\"demo-block\">\n          <div className=\"demo-title\">圆角按钮</div>\n          <Button round>round</Button>\n          <Button round={10}>round(10)</Button>\n        </div>\n      </main>\n    </div>\n  );\n};\n\nexport default Demo;"}},"dependencies":{"react":{"version":"^17.0.2"},"xun-components":{"version":"1.0.2"},"classnames":{"version":"^2.3.1"},"react-dom":{"version":"^17.0.2"}},"componentName":"Button","identifier":"Button-demo"},
  },
  'Card-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _slicedToArray2 = _interopRequireDefault(require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

  var _react = _interopRequireWildcard(require("react"));

  var _xunComponents = require("xun-components");

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var Demo = function Demo() {
    var _useState = (0, _react.useState)(false),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        visible = _useState2[0],
        setVisible = _useState2[1];

    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-page demo-page-card"
    }, /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("h3", {
      className: "demo-page-title"
    }, "\u5361\u7247")), /*#__PURE__*/_react["default"].createElement("main", null, /*#__PURE__*/_react["default"].createElement(_xunComponents.Card, {
      title: "\u6807\u9898",
      more: /*#__PURE__*/_react["default"].createElement("a", null, "\u66F4\u591A")
    }, "\u5185\u5BB9")));
  };

  var _default = Demo;
  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React, { useState } from 'react';\nimport { Card } from 'xun-components';\n\nconst Demo = () => {\n  const [visible, setVisible] = useState(false);\n  return (\n    <div className=\"demo-page demo-page-card\">\n      <header>\n        <h3 className=\"demo-page-title\">卡片</h3>\n      </header>\n      <main>\n        <Card title=\"标题\" more={<a>更多</a>}>\n          内容\n        </Card>\n      </main>\n    </div>\n  );\n};\n\nexport default Demo;"}},"dependencies":{"react":{"version":"^17.0.2"},"xun-components":{"version":"1.0.2"},"classnames":{"version":"^2.3.1"},"react-dom":{"version":"^17.0.2"}},"componentName":"Card","identifier":"Card-demo"},
  },
  'Cell-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _react = _interopRequireDefault(require("react"));

  var _xunComponents = require("xun-components");

  var img = 'https://static.zhongan.com/website/health/zarm/images/icons/state.png';

  var Demo = function Demo() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-page demo-page-button"
    }, /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("h3", {
      className: "demo-page-title"
    }, "\u5217\u8868\u9879")), /*#__PURE__*/_react["default"].createElement("main", null, /*#__PURE__*/_react["default"].createElement(_xunComponents.Cell, {
      title: "\u6807\u9898\u6587\u5B57",
      description: "\u63CF\u8FF0\u6587\u5B57",
      hasArrow: true
    }), /*#__PURE__*/_react["default"].createElement(_xunComponents.Cell, {
      title: "\u6807\u9898\u6587\u5B57",
      description: "\u63CF\u8FF0\u6587\u5B57",
      hasArrow: true
    }), /*#__PURE__*/_react["default"].createElement(_xunComponents.Cell, {
      title: "\u6807\u9898\u6587\u5B57",
      description: "\u63CF\u8FF0\u6587\u5B57",
      icon: /*#__PURE__*/_react["default"].createElement("img", {
        alt: "",
        src: img,
        style: {
          width: 24,
          height: 24
        }
      }),
      hasArrow: true
    })));
  };

  var _default = Demo;
  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { Cell } from 'xun-components';\n\nconst img =\n  'https://static.zhongan.com/website/health/zarm/images/icons/state.png';\n\nconst Demo = () => (\n  <div className=\"demo-page demo-page-button\">\n    <header>\n      <h3 className=\"demo-page-title\">列表项</h3>\n    </header>\n    <main>\n      <Cell title=\"标题文字\" description=\"描述文字\" hasArrow={true}></Cell>\n      <Cell title=\"标题文字\" description=\"描述文字\" hasArrow={true}></Cell>\n      <Cell\n        title=\"标题文字\"\n        description=\"描述文字\"\n        icon={<img alt=\"\" src={img} style={{ width: 24, height: 24 }} />}\n        hasArrow={true}\n      ></Cell>\n    </main>\n  </div>\n);\n\nexport default Demo;"}},"dependencies":{"react":{"version":"^17.0.2"},"xun-components":{"version":"1.0.2"},"classnames":{"version":"^2.3.1"},"react-dom":{"version":"^17.0.2"}},"componentName":"Cell","identifier":"Cell-demo"},
  },
  'Checkbox-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _slicedToArray2 = _interopRequireDefault(require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

  var _react = _interopRequireWildcard(require("react"));

  var _xunComponents = require("xun-components");

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var Demo = function Demo() {
    var _useState = (0, _react.useState)(false),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        visible = _useState2[0],
        setVisible = _useState2[1];

    var _useState3 = (0, _react.useState)([]),
        _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
        value = _useState4[0],
        setValue = _useState4[1];

    var handleChange = function handleChange(result) {
      setValue(result);
    };

    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-page demo-page-checckbox"
    }, /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("h3", {
      className: "demo-page-title"
    }, "\u590D\u9009\u6846")), /*#__PURE__*/_react["default"].createElement("main", null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-title"
    }, "\u9ED8\u8BA4"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Checkbox, null, "Checkbox")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-title"
    }, "\u9009\u9879\u7EC4"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Checkbox.Group, {
      value: value,
      onChange: handleChange
    }, /*#__PURE__*/_react["default"].createElement(_xunComponents.Checkbox, {
      value: "red"
    }, "red"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Checkbox, {
      value: "green"
    }, "green"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Checkbox, {
      value: "blue"
    }, "blue")))));
  };

  var _default = Demo;
  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React, { useState } from 'react';\nimport { Checkbox } from 'xun-components';\n\nconst Demo = () => {\n  const [visible, setVisible] = useState(false);\n  const [value, setValue] = useState<string[]>([]);\n\n  const handleChange = (result) => {\n    setValue(result);\n  };\n  return (\n    <div className=\"demo-page demo-page-checckbox\">\n      <header>\n        <h3 className=\"demo-page-title\">复选框</h3>\n      </header>\n      <main>\n        <div className=\"demo-block\">\n          <div className=\"demo-title\">默认</div>\n          <Checkbox>Checkbox</Checkbox>\n        </div>\n\n        <div className=\"demo-block\">\n          <div className=\"demo-title\">选项组</div>\n          <Checkbox.Group value={value} onChange={handleChange}>\n            <Checkbox value=\"red\">red</Checkbox>\n            <Checkbox value=\"green\">green</Checkbox>\n            <Checkbox value=\"blue\">blue</Checkbox>\n          </Checkbox.Group>\n        </div>\n      </main>\n    </div>\n  );\n};\n\nexport default Demo;"}},"dependencies":{"react":{"version":"^17.0.2"},"xun-components":{"version":"1.0.2"},"classnames":{"version":"^2.3.1"},"react-dom":{"version":"^17.0.2"}},"componentName":"Checkbox","identifier":"Checkbox-demo"},
  },
  'Collapse-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _react = _interopRequireDefault(require("react"));

  var _xunComponents = require("xun-components");

  var Demo = function Demo() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-page demo-page-collapse"
    }, /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("h3", {
      className: "demo-page-title"
    }, "\u6298\u53E0\u9762\u677F")), /*#__PURE__*/_react["default"].createElement("main", null, /*#__PURE__*/_react["default"].createElement(_xunComponents.Collapse, null, /*#__PURE__*/_react["default"].createElement("span", {
      key: "1",
      title: "1"
    }, "Collapse1"), /*#__PURE__*/_react["default"].createElement("span", {
      key: "2",
      title: "2"
    }, "Collapse2"), /*#__PURE__*/_react["default"].createElement("span", {
      key: "3",
      title: "3"
    }, "Collapse3"), /*#__PURE__*/_react["default"].createElement("span", {
      key: "4",
      title: "4"
    }, "Collapse4"))));
  };

  var _default = Demo;
  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { Collapse } from 'xun-components';\n\nconst Demo = () => (\n  <div className=\"demo-page demo-page-collapse\">\n    <header>\n      <h3 className=\"demo-page-title\">折叠面板</h3>\n    </header>\n    <main>\n      <Collapse>\n        <span key=\"1\" title=\"1\">\n          Collapse1\n        </span>\n        <span key=\"2\" title=\"2\">\n          Collapse2\n        </span>\n        <span key=\"3\" title=\"3\">\n          Collapse3\n        </span>\n        <span key=\"4\" title=\"4\">\n          Collapse4\n        </span>\n      </Collapse>\n    </main>\n  </div>\n);\n\nexport default Demo;"}},"dependencies":{"react":{"version":"^17.0.2"},"xun-components":{"version":"1.0.2"},"classnames":{"version":"^2.3.1"},"react-dom":{"version":"^17.0.2"}},"componentName":"Collapse","identifier":"Collapse-demo"},
  },
  'Dialog-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _slicedToArray2 = _interopRequireDefault(require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

  var _react = _interopRequireWildcard(require("react"));

  var _xunComponents = require("xun-components");

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var Demo = function Demo() {
    var _useState = (0, _react.useState)(false),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        visible = _useState2[0],
        setVisible = _useState2[1];

    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-page demo-page-dialog"
    }, /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("h3", {
      className: "demo-page-title"
    }, "\u5F39\u7A97")), /*#__PURE__*/_react["default"].createElement("main", null, /*#__PURE__*/_react["default"].createElement(_xunComponents.Cell, {
      title: "\u7EC4\u4EF6\u8C03\u7528",
      description: /*#__PURE__*/_react["default"].createElement(_xunComponents.Button, {
        size: "small",
        onClick: function onClick() {
          return setVisible(true);
        }
      }, "\u5F00\u542F")
    }), /*#__PURE__*/_react["default"].createElement(_xunComponents.Cell, {
      title: "\u65B9\u6CD5\u8C03\u7528alert",
      description: /*#__PURE__*/_react["default"].createElement(_xunComponents.Button, {
        size: "small",
        onClick: function onClick() {
          return _xunComponents.Dialog.alert('标题');
        }
      }, "\u5F00\u542F")
    }), /*#__PURE__*/_react["default"].createElement(_xunComponents.Cell, {
      title: "\u65B9\u6CD5\u8C03\u7528alert",
      description: /*#__PURE__*/_react["default"].createElement(_xunComponents.Button, {
        size: "small",
        onClick: function onClick() {
          return _xunComponents.Dialog.alert('标题', '内容');
        }
      }, "\u5F00\u542F")
    }), /*#__PURE__*/_react["default"].createElement(_xunComponents.Cell, {
      title: "\u65B9\u6CD5\u8C03\u7528confirm",
      description: /*#__PURE__*/_react["default"].createElement(_xunComponents.Button, {
        size: "small",
        onClick: function onClick() {
          return _xunComponents.Dialog.confirm('标题');
        }
      }, "\u5F00\u542F")
    }), /*#__PURE__*/_react["default"].createElement(_xunComponents.Cell, {
      title: "\u65B9\u6CD5\u8C03\u7528confirm",
      description: /*#__PURE__*/_react["default"].createElement(_xunComponents.Button, {
        size: "small",
        onClick: function onClick() {
          return _xunComponents.Dialog.confirm('标题', '内容', function () {
            return alert('confirm');
          }, function () {
            return alert('cancel');
          });
        }
      }, "\u5F00\u542F")
    }), /*#__PURE__*/_react["default"].createElement(_xunComponents.Dialog, {
      visible: visible,
      showClose: true,
      width: 200,
      buttons: [/*#__PURE__*/_react["default"].createElement(_xunComponents.Button, {
        type: "danger"
      }, "\u53D6\u6D88"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Button, {
        type: "primary"
      }, "\u786E\u5B9A")],
      onClose: function onClose() {
        return setVisible(false);
      }
    }, "Dialog")));
  };

  var _default = Demo;
  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React, { useState } from 'react';\nimport { Dialog, Button, Cell } from 'xun-components';\n\nconst Demo = () => {\n  const [visible, setVisible] = useState(false);\n  return (\n    <div className=\"demo-page demo-page-dialog\">\n      <header>\n        <h3 className=\"demo-page-title\">弹窗</h3>\n      </header>\n      <main>\n        <Cell\n          title=\"组件调用\"\n          description={\n            <Button size=\"small\" onClick={() => setVisible(true)}>\n              开启\n            </Button>\n          }\n        ></Cell>\n        <Cell\n          title=\"方法调用alert\"\n          description={\n            <Button size=\"small\" onClick={() => Dialog.alert('标题')}>\n              开启\n            </Button>\n          }\n        ></Cell>\n        <Cell\n          title=\"方法调用alert\"\n          description={\n            <Button size=\"small\" onClick={() => Dialog.alert('标题', '内容')}>\n              开启\n            </Button>\n          }\n        ></Cell>\n        <Cell\n          title=\"方法调用confirm\"\n          description={\n            <Button size=\"small\" onClick={() => Dialog.confirm('标题')}>\n              开启\n            </Button>\n          }\n        ></Cell>\n        <Cell\n          title=\"方法调用confirm\"\n          description={\n            <Button\n              size=\"small\"\n              onClick={() =>\n                Dialog.confirm(\n                  '标题',\n                  '内容',\n                  () => alert('confirm'),\n                  () => alert('cancel'),\n                )\n              }\n            >\n              开启\n            </Button>\n          }\n        ></Cell>\n        <Dialog\n          visible={visible}\n          showClose={true}\n          width={200}\n          buttons={[\n            <Button type=\"danger\">取消</Button>,\n            <Button type=\"primary\">确定</Button>,\n          ]}\n          onClose={() => setVisible(false)}\n        >\n          Dialog\n        </Dialog>\n      </main>\n    </div>\n  );\n};\n\nexport default Demo;"}},"dependencies":{"react":{"version":"^17.0.2"},"xun-components":{"version":"1.0.2"},"classnames":{"version":"^2.3.1"},"react-dom":{"version":"^17.0.2"}},"componentName":"Dialog","identifier":"Dialog-demo"},
  },
  'Divider-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _react = _interopRequireDefault(require("react"));

  var _xunComponents = require("xun-components");

  var Demo = function Demo() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-page demo-page-divider"
    }, /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("h3", {
      className: "demo-page-title"
    }, "\u5206\u5272\u7EBF")), /*#__PURE__*/_react["default"].createElement("main", null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-title"
    }, "\u9ED8\u8BA4"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Divider, null)), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-title"
    }, "\u5C45\u4E2D"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Divider, null, "\u6211\u662F\u5185\u5BB9")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-title"
    }, "\u9760\u5DE6"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Divider, {
      position: "left"
    }, "\u6211\u662F\u5185\u5BB9")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-title"
    }, "\u9760\u53F3"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Divider, {
      position: "right"
    }, "\u6211\u662F\u5185\u5BB9"))));
  };

  var _default = Demo;
  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { Divider } from 'xun-components';\n\nconst Demo = () => (\n  <div className=\"demo-page demo-page-divider\">\n    <header>\n      <h3 className=\"demo-page-title\">分割线</h3>\n    </header>\n    <main>\n      <div className=\"demo-block\">\n        <div className=\"demo-title\">默认</div>\n        <Divider></Divider>\n      </div>\n      <div className=\"demo-block\">\n        <div className=\"demo-title\">居中</div>\n        <Divider>我是内容</Divider>\n      </div>\n      <div className=\"demo-block\">\n        <div className=\"demo-title\">靠左</div>\n        <Divider position=\"left\">我是内容</Divider>\n      </div>\n      <div className=\"demo-block\">\n        <div className=\"demo-title\">靠右</div>\n        <Divider position=\"right\">我是内容</Divider>\n      </div>\n    </main>\n  </div>\n);\n\nexport default Demo;"}},"dependencies":{"react":{"version":"^17.0.2"},"xun-components":{"version":"1.0.2"},"classnames":{"version":"^2.3.1"},"react-dom":{"version":"^17.0.2"}},"componentName":"Divider","identifier":"Divider-demo"},
  },
  'Empty-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _react = _interopRequireDefault(require("react"));

  var _xunComponents = require("xun-components");

  var Demo = function Demo() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-page demo-page-button"
    }, /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("h3", {
      className: "demo-page-title"
    }, "\u65E0\u6570\u636E")), /*#__PURE__*/_react["default"].createElement("main", null, /*#__PURE__*/_react["default"].createElement(_xunComponents.Empty, null), /*#__PURE__*/_react["default"].createElement(_xunComponents.Empty, {
      description: "\u6682\u65E0\u6570\u636E",
      descStyle: {
        fontSize: '10px'
      }
    }), /*#__PURE__*/_react["default"].createElement(_xunComponents.Empty, {
      description: "\u6682\u65E0\u6570\u636E",
      descStyle: {
        fontSize: '10px',
        color: 'red'
      }
    }), /*#__PURE__*/_react["default"].createElement(_xunComponents.Empty, {
      description: "\u6682\u65E0\u6570\u636E",
      imageStyle: {
        width: '120px'
      }
    })));
  };

  var _default = Demo;
  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { Empty } from 'xun-components';\n\nconst Demo = () => (\n  <div className=\"demo-page demo-page-button\">\n    <header>\n      <h3 className=\"demo-page-title\">无数据</h3>\n    </header>\n    <main>\n      <Empty></Empty>\n      <Empty description=\"暂无数据\" descStyle={{ fontSize: '10px' }}></Empty>\n      <Empty\n        description=\"暂无数据\"\n        descStyle={{ fontSize: '10px', color: 'red' }}\n      ></Empty>\n      <Empty description=\"暂无数据\" imageStyle={{ width: '120px' }}></Empty>\n    </main>\n  </div>\n);\n\nexport default Demo;"}},"dependencies":{"react":{"version":"^17.0.2"},"xun-components":{"version":"1.0.2"},"classnames":{"version":"^2.3.1"},"react-dom":{"version":"^17.0.2"}},"componentName":"Empty","identifier":"Empty-demo"},
  },
  'Error-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _react = _interopRequireDefault(require("react"));

  var _xunComponents = require("xun-components");

  var Demo = function Demo() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-page demo-page-error"
    }, /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("h3", {
      className: "demo-page-title"
    }, "\u9519\u8BEF")), /*#__PURE__*/_react["default"].createElement("main", null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement(_xunComponents.Error, {
      description: "\u9ED8\u8BA4\u9519\u8BEF"
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement(_xunComponents.Error, {
      type: "database",
      description: "\u6570\u636E\u5E93\u9519\u8BEF"
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement(_xunComponents.Error, {
      type: "wifi",
      description: "\u7F51\u7EDC\u9519\u8BEF"
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement(_xunComponents.Error, {
      type: "face",
      description: "\u51FA\u9519\u4E86"
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement(_xunComponents.Error, {
      type: "location",
      description: "\u4F4D\u7F6E\u9519\u8BEF"
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement(_xunComponents.Error, {
      description: "\u81EA\u5B9A\u4E49\u63CF\u8FF0\u4FE1\u606F\u6587\u5B57\u6837\u5F0F",
      descStyle: {
        fontSize: '20px',
        color: 'red'
      }
    }))));
  };

  var _default = Demo;
  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { Error } from 'xun-components';\n\nconst Demo = () => (\n  <div className=\"demo-page demo-page-error\">\n    <header>\n      <h3 className=\"demo-page-title\">错误</h3>\n    </header>\n    <main>\n      <div className=\"demo-block\">\n        <Error description=\"默认错误\"></Error>\n      </div>\n\n      <div className=\"demo-block\">\n        <Error type=\"database\" description=\"数据库错误\"></Error>\n      </div>\n\n      <div className=\"demo-block\">\n        <Error type=\"wifi\" description=\"网络错误\"></Error>\n      </div>\n      <div className=\"demo-block\">\n        <Error type=\"face\" description=\"出错了\"></Error>\n      </div>\n      <div className=\"demo-block\">\n        <Error type=\"location\" description=\"位置错误\"></Error>\n      </div>\n      <div className=\"demo-block\">\n        <Error\n          description=\"自定义描述信息文字样式\"\n          descStyle={{ fontSize: '20px', color: 'red' }}\n        ></Error>\n      </div>\n    </main>\n  </div>\n);\n\nexport default Demo;"}},"dependencies":{"react":{"version":"^17.0.2"},"xun-components":{"version":"1.0.2"},"classnames":{"version":"^2.3.1"},"react-dom":{"version":"^17.0.2"}},"componentName":"Error","identifier":"Error-demo"},
  },
  'FilePicker-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _react = _interopRequireDefault(require("react"));

  var _xunComponents = require("xun-components");

  var Demo = function Demo() {
    var handleChange = function handleChange(files) {
      console.log(files);
    };

    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-page demo-page-filepicker"
    }, /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("h3", {
      className: "demo-page-title"
    }, "\u6587\u4EF6\u9009\u62E9\u5668")), /*#__PURE__*/_react["default"].createElement("main", null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-title"
    }, "\u9ED8\u8BA4"), /*#__PURE__*/_react["default"].createElement(_xunComponents.FilePicker, {
      onChange: handleChange
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-title"
    }, "\u7981\u7528\u72B6\u6001"), /*#__PURE__*/_react["default"].createElement(_xunComponents.FilePicker, {
      disabled: true,
      onChange: handleChange
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-title"
    }, "\u53EA\u80FD\u9009\u62E9\u56FE\u7247"), /*#__PURE__*/_react["default"].createElement(_xunComponents.FilePicker, {
      accept: "image/*",
      onChange: handleChange
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-title"
    }, "\u652F\u6301\u9009\u53D6\u591A\u4E2A\u6587\u4EF6 "), /*#__PURE__*/_react["default"].createElement(_xunComponents.FilePicker, {
      multiple: true,
      onChange: handleChange
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-title"
    }, "\u5B9A\u5236\u4E2D\u95F4\u5185\u5BB9"), /*#__PURE__*/_react["default"].createElement(_xunComponents.FilePicker, {
      multiple: true,
      onChange: handleChange
    }, "\u9009\u62E9\u56FE\u7247"))));
  };

  var _default = Demo;
  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { FilePicker } from 'xun-components';\n\nconst Demo = () => {\n  const handleChange = (files) => {\n    console.log(files);\n  };\n  return (\n    <div className=\"demo-page demo-page-filepicker\">\n      <header>\n        <h3 className=\"demo-page-title\">文件选择器</h3>\n      </header>\n      <main>\n        <div className=\"demo-block\">\n          <div className=\"demo-title\">默认</div>\n          <FilePicker onChange={handleChange}></FilePicker>\n        </div>\n        <div className=\"demo-block\">\n          <div className=\"demo-title\">禁用状态</div>\n          <FilePicker disabled={true} onChange={handleChange}></FilePicker>\n        </div>\n        <div className=\"demo-block\">\n          <div className=\"demo-title\">只能选择图片</div>\n          <FilePicker accept=\"image/*\" onChange={handleChange}></FilePicker>\n        </div>\n        <div className=\"demo-block\">\n          <div className=\"demo-title\">支持选取多个文件 </div>\n          <FilePicker multiple onChange={handleChange}></FilePicker>\n        </div>\n        <div className=\"demo-block\">\n          <div className=\"demo-title\">定制中间内容</div>\n          <FilePicker multiple onChange={handleChange}>\n            选择图片\n          </FilePicker>\n        </div>\n      </main>\n    </div>\n  );\n};\n\nexport default Demo;"}},"dependencies":{"react":{"version":"^17.0.2"},"xun-components":{"version":"1.0.2"},"classnames":{"version":"^2.3.1"},"react-dom":{"version":"^17.0.2"}},"componentName":"FilePicker","identifier":"FilePicker-demo"},
  },
  'Grid-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _slicedToArray2 = _interopRequireDefault(require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

  var _react = _interopRequireWildcard(require("react"));

  var _xunComponents = require("xun-components");

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var Demo = function Demo() {
    var _useState = (0, _react.useState)(false),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        visible = _useState2[0],
        setVisible = _useState2[1];

    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-page demo-page-grid"
    }, /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("h3", {
      className: "demo-page-title"
    }, "\u6805\u683C")), /*#__PURE__*/_react["default"].createElement("main", null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-title"
    }, "\u4E00\u5217\uFF0C\u95F4\u8DDD\u4E3A5"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Grid, {
      gap: 5
    }, /*#__PURE__*/_react["default"].createElement(_xunComponents.Grid.Item, null, "1"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Grid.Item, null, "2"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Grid.Item, null, "3"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Grid.Item, null, "4"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Grid.Item, null, "5"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Grid.Item, null, "6"))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-title"
    }, "\u4E24\u5217\uFF0C\u95F4\u8DDD\u4E3A10"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Grid, {
      columns: 2,
      gap: 10
    }, /*#__PURE__*/_react["default"].createElement(_xunComponents.Grid.Item, null, "1"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Grid.Item, null, "2"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Grid.Item, null, "3"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Grid.Item, null, "4"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Grid.Item, null, "5"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Grid.Item, null, "6"))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-title"
    }, "\u4E24\u5217\uFF0C\u884C\u95F4\u8DDD\u4E3A5\uFF0C\u5217\u95F4\u8DDD\u4E3A10"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Grid, {
      columns: 2,
      gap: [5, 20]
    }, /*#__PURE__*/_react["default"].createElement(_xunComponents.Grid.Item, null, "1"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Grid.Item, null, "2"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Grid.Item, null, "3"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Grid.Item, null, "4"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Grid.Item, null, "5"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Grid.Item, null, "6"))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-title"
    }, "\u4E24\u5217"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Grid, {
      columns: 3,
      gap: ['2px', '15px']
    }, /*#__PURE__*/_react["default"].createElement(_xunComponents.Grid.Item, null, "1"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Grid.Item, null, "2"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Grid.Item, null, "3"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Grid.Item, {
      span: 2
    }, "4\uFF0C\u8DE82\u5217"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Grid.Item, null, "5"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Grid.Item, null, "6")))));
  };

  var _default = Demo;
  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React, { useState } from 'react';\nimport { Grid } from 'xun-components';\n\nconst Demo = () => {\n  const [visible, setVisible] = useState(false);\n  return (\n    <div className=\"demo-page demo-page-grid\">\n      <header>\n        <h3 className=\"demo-page-title\">栅格</h3>\n      </header>\n      <main>\n        <div className=\"demo-block\">\n          <div className=\"demo-title\">一列，间距为5</div>\n          <Grid gap={5}>\n            <Grid.Item>1</Grid.Item>\n            <Grid.Item>2</Grid.Item>\n            <Grid.Item>3</Grid.Item>\n            <Grid.Item>4</Grid.Item>\n            <Grid.Item>5</Grid.Item>\n            <Grid.Item>6</Grid.Item>\n          </Grid>\n        </div>\n\n        <div className=\"demo-block\">\n          <div className=\"demo-title\">两列，间距为10</div>\n\n          <Grid columns={2} gap={10}>\n            <Grid.Item>1</Grid.Item>\n            <Grid.Item>2</Grid.Item>\n            <Grid.Item>3</Grid.Item>\n            <Grid.Item>4</Grid.Item>\n            <Grid.Item>5</Grid.Item>\n            <Grid.Item>6</Grid.Item>\n          </Grid>\n        </div>\n\n        <div className=\"demo-block\">\n          <div className=\"demo-title\">两列，行间距为5，列间距为10</div>\n\n          <Grid columns={2} gap={[5, 20]}>\n            <Grid.Item>1</Grid.Item>\n            <Grid.Item>2</Grid.Item>\n            <Grid.Item>3</Grid.Item>\n            <Grid.Item>4</Grid.Item>\n            <Grid.Item>5</Grid.Item>\n            <Grid.Item>6</Grid.Item>\n          </Grid>\n        </div>\n\n        <div className=\"demo-block\">\n          <div className=\"demo-title\">两列</div>\n\n          <Grid columns={3} gap={['2px', '15px']}>\n            <Grid.Item>1</Grid.Item>\n            <Grid.Item>2</Grid.Item>\n            <Grid.Item>3</Grid.Item>\n            <Grid.Item span={2}>4，跨2列</Grid.Item>\n            <Grid.Item>5</Grid.Item>\n            <Grid.Item>6</Grid.Item>\n          </Grid>\n        </div>\n      </main>\n    </div>\n  );\n};\n\nexport default Demo;"}},"dependencies":{"react":{"version":"^17.0.2"},"xun-components":{"version":"1.0.2"},"classnames":{"version":"^2.3.1"},"react-dom":{"version":"^17.0.2"}},"componentName":"Grid","identifier":"Grid-demo"},
  },
  'ImageViewer-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _slicedToArray2 = _interopRequireDefault(require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

  var _react = _interopRequireWildcard(require("react"));

  var _xunComponents = require("xun-components");

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var images = ['https://images.unsplash.com/photo-1620476214170-1d8080f65cdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80', 'https://images.unsplash.com/photo-1601128533718-374ffcca299b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3128&q=80', 'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3113&q=80', 'https://images.unsplash.com/photo-1624993590528-4ee743c9896e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=1000&q=80'];

  var Demo = function Demo() {
    var _useState = (0, _react.useState)(false),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        visible = _useState2[0],
        setVisible = _useState2[1];

    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-page demo-page-grid"
    }, /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("h3", {
      className: "demo-page-title"
    }, "\u56FE\u7247\u67E5\u770B\u5668")), /*#__PURE__*/_react["default"].createElement("main", null, /*#__PURE__*/_react["default"].createElement(_xunComponents.Cell, {
      title: "\u9ED8\u8BA4",
      description: /*#__PURE__*/_react["default"].createElement(_xunComponents.Button, {
        size: "small",
        onClick: function onClick() {
          return setVisible(true);
        }
      }, "\u5F00\u542F")
    }), /*#__PURE__*/_react["default"].createElement(_xunComponents.ImageViewer, {
      visible: visible,
      images: images
    })));
  };

  var _default = Demo;
  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React, { useState } from 'react';\nimport { ImageViewer, Cell, Button } from 'xun-components';\n\nconst images = [\n  'https://images.unsplash.com/photo-1620476214170-1d8080f65cdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80',\n  'https://images.unsplash.com/photo-1601128533718-374ffcca299b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3128&q=80',\n  'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3113&q=80',\n  'https://images.unsplash.com/photo-1624993590528-4ee743c9896e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=1000&q=80',\n];\n\nconst Demo = () => {\n  const [visible, setVisible] = useState(false);\n  return (\n    <div className=\"demo-page demo-page-grid\">\n      <header>\n        <h3 className=\"demo-page-title\">图片查看器</h3>\n      </header>\n      <main>\n        <Cell\n          title=\"默认\"\n          description={\n            <Button size=\"small\" onClick={() => setVisible(true)}>\n              开启\n            </Button>\n          }\n        ></Cell>\n\n        <ImageViewer visible={visible} images={images}></ImageViewer>\n      </main>\n    </div>\n  );\n};\n\nexport default Demo;"}},"dependencies":{"react":{"version":"^17.0.2"},"xun-components":{"version":"1.0.2"},"classnames":{"version":"^2.3.1"},"react-dom":{"version":"^17.0.2"}},"componentName":"ImageViewer","identifier":"ImageViewer-demo"},
  },
  'IndexBar-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _slicedToArray2 = _interopRequireDefault(require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

  var _react = _interopRequireWildcard(require("react"));

  var _xunComponents = require("xun-components");

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var Demo = function Demo() {
    var _useState = (0, _react.useState)(false),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        visible = _useState2[0],
        setVisible = _useState2[1];

    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_xunComponents.IndexBar, null, "IndexBar"));
  };

  var _default = Demo;
  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React, { useState } from 'react';\nimport { IndexBar } from 'xun-components';\n\nconst Demo = () => {\n  const [visible, setVisible] = useState(false);\n  return (\n    <>\n      <IndexBar>IndexBar</IndexBar>\n    </>\n  );\n};\n\nexport default Demo;"}},"dependencies":{"react":{"version":"^17.0.2"},"xun-components":{"version":"1.0.2"},"classnames":{"version":"^2.3.1"},"react-dom":{"version":"^17.0.2"}},"componentName":"IndexBar","identifier":"IndexBar-demo"},
  },
  'Input-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _react = _interopRequireDefault(require("react"));

  var _xunComponents = require("xun-components");

  var Demo = function Demo() {
    return /*#__PURE__*/_react["default"].createElement(_xunComponents.Input, null, "Input");
  };

  var _default = Demo;
  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { Input } from 'xun-components';\n\nconst Demo = () => <Input>Input</Input>;\n\nexport default Demo;"}},"dependencies":{"react":{"version":"^17.0.2"},"xun-components":{"version":"1.0.2"},"classnames":{"version":"^2.3.1"},"react-dom":{"version":"^17.0.2"}},"componentName":"Input","identifier":"Input-demo"},
  },
  'Keyboard-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _slicedToArray2 = _interopRequireDefault(require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

  var _react = _interopRequireWildcard(require("react"));

  var _xunComponents = require("xun-components");

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var Demo = function Demo() {
    var _useState = (0, _react.useState)(false),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        visible = _useState2[0],
        setVisible = _useState2[1];

    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_xunComponents.Keyboard, null, "Keyboard"));
  };

  var _default = Demo;
  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React, { useState } from 'react';\nimport { Keyboard } from 'xun-components';\n\nconst Demo = () => {\n  const [visible, setVisible] = useState(false);\n  return (\n    <>\n      <Keyboard>Keyboard</Keyboard>\n    </>\n  );\n};\n\nexport default Demo;"}},"dependencies":{"react":{"version":"^17.0.2"},"xun-components":{"version":"1.0.2"},"classnames":{"version":"^2.3.1"},"react-dom":{"version":"^17.0.2"}},"componentName":"Keyboard","identifier":"Keyboard-demo"},
  },
  'List-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _slicedToArray2 = _interopRequireDefault(require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

  var _react = _interopRequireWildcard(require("react"));

  var _xunComponents = require("xun-components");

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var img = 'https://static.zhongan.com/website/health/zarm/images/icons/state.png';
  var users = [{
    avatar: 'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    name: 'Novalee Spicer',
    description: 'Deserunt dolor ea eaque eos'
  }, {
    avatar: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
    name: 'Sara Koivisto',
    description: 'Animi eius expedita, explicabo'
  }, {
    avatar: 'https://images.unsplash.com/photo-1542624937-8d1e9f53c1b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    name: 'Marco Gregg',
    description: 'Ab animi cumque eveniet ex harum nam odio omnis'
  }, {
    avatar: 'https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    name: 'Edith Koenig',
    description: 'Commodi earum exercitationem id numquam vitae'
  }];

  var Demo = function Demo() {
    var _useState = (0, _react.useState)(false),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        visible = _useState2[0],
        setVisible = _useState2[1];

    var renderUsers = function renderUsers() {
      return users.map(function (user) {
        return /*#__PURE__*/_react["default"].createElement(_xunComponents.List.Item, {
          icon: /*#__PURE__*/_react["default"].createElement("img", {
            alt: "",
            src: user.avatar,
            style: {
              width: 40,
              height: 40,
              borderRadius: '20px'
            }
          }),
          description: user.description
        }, user.name);
      });
    };

    return /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        margin: '0 10px'
      }
    }, /*#__PURE__*/_react["default"].createElement(_xunComponents.List, null, /*#__PURE__*/_react["default"].createElement(_xunComponents.List.Item, null, "1"), /*#__PURE__*/_react["default"].createElement(_xunComponents.List.Item, null, "2"), /*#__PURE__*/_react["default"].createElement(_xunComponents.List.Item, {
      clickable: true,
      onClick: function onClick() {
        return alert('click');
      }
    }, "3")), /*#__PURE__*/_react["default"].createElement(_xunComponents.List, null, /*#__PURE__*/_react["default"].createElement(_xunComponents.List.Item, {
      title: "\u6807\u98981"
    }, "1"), /*#__PURE__*/_react["default"].createElement(_xunComponents.List.Item, {
      title: "\u6807\u98982",
      icon: /*#__PURE__*/_react["default"].createElement("img", {
        alt: "",
        src: img,
        style: {
          width: 30,
          height: 30
        }
      })
    }, "2"), /*#__PURE__*/_react["default"].createElement(_xunComponents.List.Item, {
      clickable: true,
      onClick: function onClick() {
        return alert('click');
      }
    }, "3")), /*#__PURE__*/_react["default"].createElement(_xunComponents.List, null, renderUsers()));
  };

  var _default = Demo;
  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React, { useState } from 'react';\nimport { List } from 'xun-components';\n\nconst img =\n  'https://static.zhongan.com/website/health/zarm/images/icons/state.png';\n\nconst users = [\n  {\n    avatar:\n      'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',\n    name: 'Novalee Spicer',\n    description: 'Deserunt dolor ea eaque eos',\n  },\n  {\n    avatar:\n      'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',\n    name: 'Sara Koivisto',\n    description: 'Animi eius expedita, explicabo',\n  },\n  {\n    avatar:\n      'https://images.unsplash.com/photo-1542624937-8d1e9f53c1b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',\n    name: 'Marco Gregg',\n    description: 'Ab animi cumque eveniet ex harum nam odio omnis',\n  },\n  {\n    avatar:\n      'https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',\n    name: 'Edith Koenig',\n    description: 'Commodi earum exercitationem id numquam vitae',\n  },\n];\n\nconst Demo = () => {\n  const [visible, setVisible] = useState(false);\n\n  const renderUsers = () => {\n    return users.map((user) => {\n      return (\n        <List.Item\n          icon={\n            <img\n              alt=\"\"\n              src={user.avatar}\n              style={{ width: 40, height: 40, borderRadius: '20px' }}\n            />\n          }\n          description={user.description}\n        >\n          {user.name}\n        </List.Item>\n      );\n    });\n  };\n\n  return (\n    <div style={{ margin: '0 10px' }}>\n      <List>\n        <List.Item>1</List.Item>\n        <List.Item>2</List.Item>\n        <List.Item clickable onClick={() => alert('click')}>\n          3\n        </List.Item>\n      </List>\n\n      <List>\n        <List.Item title=\"标题1\">1</List.Item>\n        <List.Item\n          title=\"标题2\"\n          icon={<img alt=\"\" src={img} style={{ width: 30, height: 30 }} />}\n        >\n          2\n        </List.Item>\n        <List.Item clickable onClick={() => alert('click')}>\n          3\n        </List.Item>\n      </List>\n\n      <List>{renderUsers()}</List>\n    </div>\n  );\n};\n\nexport default Demo;"}},"dependencies":{"react":{"version":"^17.0.2"},"xun-components":{"version":"1.0.2"},"classnames":{"version":"^2.3.1"},"react-dom":{"version":"^17.0.2"}},"componentName":"List","identifier":"List-demo"},
  },
  'Loader-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _react = _interopRequireDefault(require("react"));

  var _xunComponents = require("xun-components");

  var Demo = function Demo() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-page demo-page-button"
    }, /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("h3", {
      className: "demo-page-title"
    }, "\u52A0\u8F7D\u5668")), /*#__PURE__*/_react["default"].createElement("main", null, /*#__PURE__*/_react["default"].createElement(_xunComponents.Cell, {
      title: "\u9ED8\u8BA4",
      description: /*#__PURE__*/_react["default"].createElement(_xunComponents.Loader, null)
    })));
  };

  var _default = Demo;
  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { Loader, Cell } from 'xun-components';\n\nconst Demo = () => {\n  return (\n    <div className=\"demo-page demo-page-button\">\n      <header>\n        <h3 className=\"demo-page-title\">加载器</h3>\n      </header>\n      <main>\n        <Cell title=\"默认\" description={<Loader />}></Cell>\n      </main>\n    </div>\n  );\n};\n\nexport default Demo;"}},"dependencies":{"react":{"version":"^17.0.2"},"xun-components":{"version":"1.0.2"},"classnames":{"version":"^2.3.1"},"react-dom":{"version":"^17.0.2"}},"componentName":"Loader","identifier":"Loader-demo"},
  },
  'Loading-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _react = _interopRequireDefault(require("react"));

  var _xunComponents = require("xun-components");

  var Demo = function Demo() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-page demo-page-button"
    }, /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("h3", {
      className: "demo-page-title"
    }, "\u52A0\u8F7D\u4E2D")), /*#__PURE__*/_react["default"].createElement("main", null, /*#__PURE__*/_react["default"].createElement(_xunComponents.Cell, {
      title: "\u9ED8\u8BA4",
      description: /*#__PURE__*/_react["default"].createElement(_xunComponents.Button, {
        size: "small",
        onClick: function onClick() {
          return _xunComponents.Loading.show();
        }
      }, "\u5F00\u542F")
    }), /*#__PURE__*/_react["default"].createElement(_xunComponents.Cell, {
      title: "\u8BBE\u7F6E\u5185\u5BB9\u548C\u6301\u7EED\u65F6\u95F4",
      description: /*#__PURE__*/_react["default"].createElement(_xunComponents.Button, {
        size: "small",
        onClick: function onClick() {
          return _xunComponents.Loading.show({
            content: 'loading',
            duration: 3000
          });
        }
      }, "\u5F00\u542F")
    })));
  };

  var _default = Demo;
  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { Loading, Cell, Button } from 'xun-components';\n\nconst Demo = () => (\n  <div className=\"demo-page demo-page-button\">\n    <header>\n      <h3 className=\"demo-page-title\">加载中</h3>\n    </header>\n    <main>\n      <Cell\n        title=\"默认\"\n        description={\n          <Button size=\"small\" onClick={() => Loading.show()}>\n            开启\n          </Button>\n        }\n      ></Cell>\n      <Cell\n        title=\"设置内容和持续时间\"\n        description={\n          <Button\n            size=\"small\"\n            onClick={() => Loading.show({ content: 'loading', duration: 3000 })}\n          >\n            开启\n          </Button>\n        }\n      ></Cell>\n    </main>\n  </div>\n);\n\nexport default Demo;"}},"dependencies":{"react":{"version":"^17.0.2"},"xun-components":{"version":"1.0.2"},"classnames":{"version":"^2.3.1"},"react-dom":{"version":"^17.0.2"}},"componentName":"Loading","identifier":"Loading-demo"},
  },
  'Marquee-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _slicedToArray2 = _interopRequireDefault(require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

  var _react = _interopRequireWildcard(require("react"));

  var _xunComponents = require("xun-components");

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var Demo = function Demo() {
    var _useState = (0, _react.useState)(false),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        visible = _useState2[0],
        setVisible = _useState2[1];

    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-page demo-page-button"
    }, /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("h3", {
      className: "demo-page-title"
    }, "\u6587\u5B57\u6EDA\u52A8")), /*#__PURE__*/_react["default"].createElement("main", null, /*#__PURE__*/_react["default"].createElement(_xunComponents.Cell, null, /*#__PURE__*/_react["default"].createElement(_xunComponents.Marquee, {
      delay: 2
    }, "\u6211\u5EF6\u8FDF\u6267\u884C2\u79D2\uFF0C\u4ECE\u53F3\u5411\u5DE6\u6EDA\u52A8")), /*#__PURE__*/_react["default"].createElement(_xunComponents.Cell, null, /*#__PURE__*/_react["default"].createElement(_xunComponents.Marquee, {
      direction: "right"
    }, "\u6211\u4ECE\u5DE6\u5411\u53F3\u6EDA\u52A8")), /*#__PURE__*/_react["default"].createElement(_xunComponents.Cell, null, /*#__PURE__*/_react["default"].createElement(_xunComponents.Marquee, {
      loop: 3
    }, "\u6211\u8D703\u6B21")), /*#__PURE__*/_react["default"].createElement(_xunComponents.Cell, null, /*#__PURE__*/_react["default"].createElement(_xunComponents.Marquee, {
      speed: 100
    }, "\u6211\u901F\u5EA6\u662F100"))));
  };

  var _default = Demo;
  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React, { useState } from 'react';\nimport { Marquee, Cell } from 'xun-components';\n\nconst Demo = () => {\n  const [visible, setVisible] = useState(false);\n  return (\n    <div className=\"demo-page demo-page-button\">\n      <header>\n        <h3 className=\"demo-page-title\">文字滚动</h3>\n      </header>\n      <main>\n        <Cell>\n          <Marquee delay={2}>我延迟执行2秒，从右向左滚动</Marquee>\n        </Cell>\n\n        <Cell>\n          <Marquee direction=\"right\">我从左向右滚动</Marquee>\n        </Cell>\n\n        <Cell>\n          <Marquee loop={3}>我走3次</Marquee>\n        </Cell>\n\n        <Cell>\n          <Marquee speed={100}>我速度是100</Marquee>\n        </Cell>\n      </main>\n    </div>\n  );\n};\n\nexport default Demo;"}},"dependencies":{"react":{"version":"^17.0.2"},"xun-components":{"version":"1.0.2"},"classnames":{"version":"^2.3.1"},"react-dom":{"version":"^17.0.2"}},"componentName":"Marquee","identifier":"Marquee-demo"},
  },
  'Mask-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _slicedToArray2 = _interopRequireDefault(require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

  var _react = _interopRequireWildcard(require("react"));

  var _xunComponents = require("xun-components");

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var Demo = function Demo() {
    var _useState = (0, _react.useState)(false),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        visible = _useState2[0],
        setVisible = _useState2[1];

    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-page demo-page-mask"
    }, /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("h3", {
      className: "demo-page-title"
    }, "\u906E\u7F69\u5C42")), /*#__PURE__*/_react["default"].createElement("main", null, /*#__PURE__*/_react["default"].createElement(_xunComponents.Cell, {
      title: "\u663E\u793A\u906E\u7F69\u5C42",
      description: /*#__PURE__*/_react["default"].createElement(_xunComponents.Button, {
        size: "small",
        onClick: function onClick() {
          return setVisible(true);
        }
      }, "\u5F00\u542F")
    }), /*#__PURE__*/_react["default"].createElement(_xunComponents.Mask, {
      visible: visible,
      onClick: function onClick() {
        return setVisible(false);
      }
    })));
  };

  var _default = Demo;
  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React, { useState } from 'react';\nimport { Mask, Cell, Button } from 'xun-components';\n\nconst Demo = () => {\n  const [visible, setVisible] = useState(false);\n  return (\n    <div className=\"demo-page demo-page-mask\">\n      <header>\n        <h3 className=\"demo-page-title\">遮罩层</h3>\n      </header>\n      <main>\n        <Cell\n          title=\"显示遮罩层\"\n          description={\n            <Button size=\"small\" onClick={() => setVisible(true)}>\n              开启\n            </Button>\n          }\n        ></Cell>\n\n        <Mask visible={visible} onClick={() => setVisible(false)}></Mask>\n      </main>\n    </div>\n  );\n};\n\nexport default Demo;"}},"dependencies":{"react":{"version":"^17.0.2"},"xun-components":{"version":"1.0.2"},"classnames":{"version":"^2.3.1"},"react-dom":{"version":"^17.0.2"}},"componentName":"Mask","identifier":"Mask-demo"},
  },
  'Message-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _react = _interopRequireDefault(require("react"));

  var _xunComponents = require("xun-components");

  var img = 'https://static.zhongan.com/website/health/zarm/images/icons/state.png';

  var Demo = function Demo() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-page demo-page-message"
    }, /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("h3", {
      className: "demo-page-title"
    }, "\u6D88\u606F")), /*#__PURE__*/_react["default"].createElement("main", null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement(_xunComponents.Message, null, "default")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement(_xunComponents.Message, {
      type: "success"
    }, "success")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement(_xunComponents.Message, {
      type: "fail"
    }, "fail")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement(_xunComponents.Message, {
      type: "warn"
    }, "warn")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement(_xunComponents.Message, {
      type: "info"
    }, "info")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement(_xunComponents.Message, {
      hasArrow: true
    }, "\u6709\u7BAD\u5934")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement(_xunComponents.Message, {
      icon: /*#__PURE__*/_react["default"].createElement("img", {
        alt: "",
        src: img,
        style: {
          width: 24,
          height: 24
        }
      })
    }, "\u8BBE\u7F6Eicon")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement(_xunComponents.Message, {
      closable: true
    }, "\u53EF\u5173\u95ED\u7684"))));
  };

  var _default = Demo;
  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { Message } from 'xun-components';\n\nconst img =\n  'https://static.zhongan.com/website/health/zarm/images/icons/state.png';\n\nconst Demo = () => (\n  <div className=\"demo-page demo-page-message\">\n    <header>\n      <h3 className=\"demo-page-title\">消息</h3>\n    </header>\n    <main>\n      <div className=\"demo-block\">\n        <Message>default</Message>\n      </div>\n      <div className=\"demo-block\">\n        <Message type=\"success\">success</Message>\n      </div>\n      <div className=\"demo-block\">\n        <Message type=\"fail\">fail</Message>\n      </div>\n      <div className=\"demo-block\">\n        <Message type=\"warn\">warn</Message>\n      </div>\n      <div className=\"demo-block\">\n        <Message type=\"info\">info</Message>\n      </div>\n      <div className=\"demo-block\">\n        <Message hasArrow={true}>有箭头</Message>\n      </div>\n      <div className=\"demo-block\">\n        <Message\n          icon={<img alt=\"\" src={img} style={{ width: 24, height: 24 }} />}\n        >\n          设置icon\n        </Message>\n      </div>\n      <div className=\"demo-block\">\n        <Message closable={true}>可关闭的</Message>\n      </div>\n    </main>\n  </div>\n);\n\nexport default Demo;"}},"dependencies":{"react":{"version":"^17.0.2"},"xun-components":{"version":"1.0.2"},"classnames":{"version":"^2.3.1"},"react-dom":{"version":"^17.0.2"}},"componentName":"Message","identifier":"Message-demo"},
  },
  'NavBar-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _slicedToArray2 = _interopRequireDefault(require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

  var _react = _interopRequireWildcard(require("react"));

  var _xunComponents = require("xun-components");

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var Demo = function Demo() {
    var _useState = (0, _react.useState)(false),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        visible = _useState2[0],
        setVisible = _useState2[1];

    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_xunComponents.NavBar, {
      right: "\u66F4\u591A"
    }, "NavBar"));
  };

  var _default = Demo;
  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React, { useState } from 'react';\nimport { NavBar } from 'xun-components';\n\nconst Demo = () => {\n  const [visible, setVisible] = useState(false);\n  return (\n    <>\n      <NavBar right=\"更多\">NavBar</NavBar>\n    </>\n  );\n};\n\nexport default Demo;"}},"dependencies":{"react":{"version":"^17.0.2"},"xun-components":{"version":"1.0.2"},"classnames":{"version":"^2.3.1"},"react-dom":{"version":"^17.0.2"}},"componentName":"NavBar","identifier":"NavBar-demo"},
  },
  'NoticeBar-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _slicedToArray2 = _interopRequireDefault(require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

  var _react = _interopRequireWildcard(require("react"));

  var _xunComponents = require("xun-components");

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var Demo = function Demo() {
    var _useState = (0, _react.useState)(false),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        visible = _useState2[0],
        setVisible = _useState2[1];

    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-page demo-page-noticebar"
    }, /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("h3", {
      className: "demo-page-title"
    }, "\u901A\u77E5\u680F")), /*#__PURE__*/_react["default"].createElement("main", null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement(_xunComponents.NoticeBar, null, "default")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement(_xunComponents.NoticeBar, {
      type: "primary"
    }, "primary")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement(_xunComponents.NoticeBar, {
      type: "success"
    }, "success")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement(_xunComponents.NoticeBar, {
      type: "warning"
    }, "warning")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement(_xunComponents.NoticeBar, {
      type: "danger"
    }, "danger")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement(_xunComponents.NoticeBar, {
      type: "info"
    }, "info")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement(_xunComponents.NoticeBar, {
      type: "light"
    }, "light")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement(_xunComponents.NoticeBar, {
      type: "dark"
    }, "dark"))));
  };

  var _default = Demo;
  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React, { useState } from 'react';\nimport { NoticeBar } from 'xun-components';\n\nconst Demo = () => {\n  const [visible, setVisible] = useState(false);\n  return (\n    <div className=\"demo-page demo-page-noticebar\">\n      <header>\n        <h3 className=\"demo-page-title\">通知栏</h3>\n      </header>\n      <main>\n        <div className=\"demo-block\">\n          <NoticeBar>default</NoticeBar>\n        </div>\n\n        <div className=\"demo-block\">\n          <NoticeBar type=\"primary\">primary</NoticeBar>\n        </div>\n\n        <div className=\"demo-block\">\n          <NoticeBar type=\"success\">success</NoticeBar>\n        </div>\n\n        <div className=\"demo-block\">\n          <NoticeBar type=\"warning\">warning</NoticeBar>\n        </div>\n\n        <div className=\"demo-block\">\n          <NoticeBar type=\"danger\">danger</NoticeBar>\n        </div>\n\n        <div className=\"demo-block\">\n          <NoticeBar type=\"info\">info</NoticeBar>\n        </div>\n\n        <div className=\"demo-block\">\n          <NoticeBar type=\"light\">light</NoticeBar>\n        </div>\n\n        <div className=\"demo-block\">\n          <NoticeBar type=\"dark\">dark</NoticeBar>\n        </div>\n      </main>\n    </div>\n  );\n};\n\nexport default Demo;"}},"dependencies":{"react":{"version":"^17.0.2"},"xun-components":{"version":"1.0.2"},"classnames":{"version":"^2.3.1"},"react-dom":{"version":"^17.0.2"}},"componentName":"NoticeBar","identifier":"NoticeBar-demo"},
  },
  'PickerView-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _slicedToArray2 = _interopRequireDefault(require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

  var _react = _interopRequireWildcard(require("react"));

  var _xunComponents = require("xun-components");

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var Demo = function Demo() {
    var _useState = (0, _react.useState)(false),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        visible = _useState2[0],
        setVisible = _useState2[1];

    var columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N'];

    var format = function format(columns) {
      return columns.map(function (item) {
        return typeof item === 'string' ? {
          label: item,
          value: item
        } : item;
      });
    };

    columns = format(columns);
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_xunComponents.PickerView, {
      columns: columns
    }, "PickerView"));
  };

  var _default = Demo;
  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React, { useState } from 'react';\nimport { PickerView } from 'xun-components';\n\nconst Demo = () => {\n  const [visible, setVisible] = useState(false);\n\n  let columns = [\n    'A',\n    'B',\n    'C',\n    'D',\n    'E',\n    'F',\n    'G',\n    'H',\n    'I',\n    'J',\n    'K',\n    'L',\n    'M',\n    'N',\n  ];\n\n  const format = (columns) => {\n    return columns.map((item) =>\n      typeof item === 'string'\n        ? {\n            label: item,\n            value: item,\n          }\n        : item,\n    );\n  };\n\n  columns = format(columns);\n\n  return (\n    <>\n      <PickerView columns={columns}>PickerView</PickerView>\n    </>\n  );\n};\n\nexport default Demo;"}},"dependencies":{"react":{"version":"^17.0.2"},"xun-components":{"version":"1.0.2"},"classnames":{"version":"^2.3.1"},"react-dom":{"version":"^17.0.2"}},"componentName":"PickerView","identifier":"PickerView-demo"},
  },
  'Popup-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _slicedToArray2 = _interopRequireDefault(require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

  var _react = _interopRequireWildcard(require("react"));

  var _xunComponents = require("xun-components");

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var Demo = function Demo() {
    var containerRef = (0, _react.useRef)(null);

    var _useState = (0, _react.useState)(false),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        visible1 = _useState2[0],
        setVisible1 = _useState2[1];

    var _useState3 = (0, _react.useState)(false),
        _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
        visible2 = _useState4[0],
        setVisible2 = _useState4[1];

    var _useState5 = (0, _react.useState)(false),
        _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
        visible3 = _useState6[0],
        setVisible3 = _useState6[1];

    var _useState7 = (0, _react.useState)(false),
        _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
        visible4 = _useState8[0],
        setVisible4 = _useState8[1];

    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-page"
    }, /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("h3", {
      className: "demo-page-title"
    }, "\u5F39\u51FA\u5C42")), /*#__PURE__*/_react["default"].createElement("main", null, /*#__PURE__*/_react["default"].createElement(_xunComponents.Cell, {
      title: "\u9876\u90E8\u5F39\u51FA",
      description: /*#__PURE__*/_react["default"].createElement(_xunComponents.Button, {
        size: "small",
        onClick: function onClick() {
          return setVisible1(true);
        }
      }, "\u5F00\u542F")
    }), /*#__PURE__*/_react["default"].createElement(_xunComponents.Cell, {
      title: "\u5E95\u90E8\u5F39\u51FA",
      description: /*#__PURE__*/_react["default"].createElement(_xunComponents.Button, {
        size: "small",
        onClick: function onClick() {
          return setVisible2(true);
        }
      }, "\u5F00\u542F")
    }), /*#__PURE__*/_react["default"].createElement(_xunComponents.Cell, {
      title: "\u5DE6\u4FA7\u5F39\u51FA",
      description: /*#__PURE__*/_react["default"].createElement(_xunComponents.Button, {
        size: "small",
        onClick: function onClick() {
          return setVisible3(true);
        }
      }, "\u5F00\u542F")
    }), /*#__PURE__*/_react["default"].createElement(_xunComponents.Cell, {
      title: "\u53F3\u4FA7\u5F39\u51FA",
      description: /*#__PURE__*/_react["default"].createElement(_xunComponents.Button, {
        size: "small",
        onClick: function onClick() {
          return setVisible4(true);
        }
      }, "\u5F00\u542F")
    }), /*#__PURE__*/_react["default"].createElement(_xunComponents.Cell, {
      title: "\u8BBE\u5B9Acontainer",
      description: /*#__PURE__*/_react["default"].createElement(_xunComponents.Button, {
        size: "small",
        onClick: function onClick() {
          return setVisible4(true);
        }
      }, "\u5F00\u542F")
    }), /*#__PURE__*/_react["default"].createElement("div", {
      id: "container"
    }), /*#__PURE__*/_react["default"].createElement(_xunComponents.Popup, {
      visible: visible1,
      position: "top",
      onMaskClick: function onMaskClick() {
        return setVisible1(false);
      },
      bodyStyle: {
        height: '40vh'
      }
    }, "Popup Top"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Popup, {
      visible: visible2,
      position: "bottom",
      onMaskClick: function onMaskClick() {
        return setVisible2(false);
      },
      bodyStyle: {
        height: '40vh'
      }
    }, "Popup Bottom"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Popup, {
      visible: visible3,
      position: "left",
      onMaskClick: function onMaskClick() {
        return setVisible3(false);
      },
      bodyStyle: {
        width: '40vh'
      }
    }, "Popup Left"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Popup, {
      visible: visible4,
      position: "right",
      onMaskClick: function onMaskClick() {
        return setVisible4(false);
      },
      bodyStyle: {
        width: '40vh'
      }
    }, "Popup Right"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Popup, {
      visible: visible4,
      position: "right",
      onMaskClick: function onMaskClick() {
        return setVisible4(false);
      },
      bodyStyle: {
        width: '40vh'
      },
      container: document.querySelector('#container')
    }, "Popup container")));
  };

  var _default = Demo;
  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React, { useState, useRef } from 'react';\nimport { Popup, Cell, Button } from 'xun-components';\n\nconst Demo = () => {\n  const containerRef = useRef(null);\n\n  const [visible1, setVisible1] = useState(false);\n  const [visible2, setVisible2] = useState(false);\n  const [visible3, setVisible3] = useState(false);\n  const [visible4, setVisible4] = useState(false);\n\n  return (\n    <div className=\"demo-page\">\n      <header>\n        <h3 className=\"demo-page-title\">弹出层</h3>\n      </header>\n      <main>\n        <Cell\n          title=\"顶部弹出\"\n          description={\n            <Button size=\"small\" onClick={() => setVisible1(true)}>\n              开启\n            </Button>\n          }\n        ></Cell>\n        <Cell\n          title=\"底部弹出\"\n          description={\n            <Button size=\"small\" onClick={() => setVisible2(true)}>\n              开启\n            </Button>\n          }\n        ></Cell>\n        <Cell\n          title=\"左侧弹出\"\n          description={\n            <Button size=\"small\" onClick={() => setVisible3(true)}>\n              开启\n            </Button>\n          }\n        ></Cell>\n        <Cell\n          title=\"右侧弹出\"\n          description={\n            <Button size=\"small\" onClick={() => setVisible4(true)}>\n              开启\n            </Button>\n          }\n        ></Cell>\n\n        <Cell\n          title=\"设定container\"\n          description={\n            <Button size=\"small\" onClick={() => setVisible4(true)}>\n              开启\n            </Button>\n          }\n        ></Cell>\n\n        <div id=\"container\"></div>\n\n        <Popup\n          visible={visible1}\n          position=\"top\"\n          onMaskClick={() => setVisible1(false)}\n          bodyStyle={{ height: '40vh' }}\n        >\n          Popup Top\n        </Popup>\n        <Popup\n          visible={visible2}\n          position=\"bottom\"\n          onMaskClick={() => setVisible2(false)}\n          bodyStyle={{ height: '40vh' }}\n        >\n          Popup Bottom\n        </Popup>\n        <Popup\n          visible={visible3}\n          position=\"left\"\n          onMaskClick={() => setVisible3(false)}\n          bodyStyle={{ width: '40vh' }}\n        >\n          Popup Left\n        </Popup>\n        <Popup\n          visible={visible4}\n          position=\"right\"\n          onMaskClick={() => setVisible4(false)}\n          bodyStyle={{ width: '40vh' }}\n        >\n          Popup Right\n        </Popup>\n\n        <Popup\n          visible={visible4}\n          position=\"right\"\n          onMaskClick={() => setVisible4(false)}\n          bodyStyle={{ width: '40vh' }}\n          container={document.querySelector('#container')}\n        >\n          Popup container\n        </Popup>\n      </main>\n    </div>\n  );\n};\n\nexport default Demo;"}},"dependencies":{"react":{"version":"^17.0.2"},"xun-components":{"version":"1.0.2"},"classnames":{"version":"^2.3.1"},"react-dom":{"version":"^17.0.2"}},"componentName":"Popup","identifier":"Popup-demo"},
  },
  'Progress-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _slicedToArray2 = _interopRequireDefault(require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

  var _react = _interopRequireWildcard(require("react"));

  var _xunComponents = require("xun-components");

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var Demo = function Demo() {
    var _useState = (0, _react.useState)(10),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        percent = _useState2[0],
        setPercent = _useState2[1];

    var handleAdd = function handleAdd() {
      if (percent >= 100) {
        return;
      }

      setPercent(percent + 10);
    };

    var handleMinus = function handleMinus() {
      if (percent <= 0) {
        return;
      }

      setPercent(percent - 10);
    };

    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-page"
    }, /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("h3", {
      className: "demo-page-title"
    }, "\u5706\u5F62\u8FDB\u5EA6\u6761")), /*#__PURE__*/_react["default"].createElement("main", null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-title"
    }, "\u57FA\u672C"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Progress, {
      percent: percent
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-title"
    }, "\u8BBE\u7F6E\u7EBF\u6761\u5BBD\u5EA6"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Progress, {
      percent: percent,
      strokeWidth: "2"
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-title"
    }, "\u8BBE\u7F6E\u7EBF\u6761\u989C\u8272"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Progress, {
      percent: percent,
      strokeWidth: "2",
      strokeColor: "red"
    })), /*#__PURE__*/_react["default"].createElement(_xunComponents.Button, {
      type: "primary",
      onClick: handleAdd
    }, "\u589E\u52A0"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Button, {
      onClick: handleMinus
    }, "\u51CF\u5C11")));
  };

  var _default = Demo;
  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React, { useState } from 'react';\nimport { Progress, Button } from 'xun-components';\n\nconst Demo = () => {\n  const [percent, setPercent] = useState(10);\n\n  const handleAdd = () => {\n    if (percent >= 100) {\n      return;\n    }\n    setPercent(percent + 10);\n  };\n\n  const handleMinus = () => {\n    if (percent <= 0) {\n      return;\n    }\n    setPercent(percent - 10);\n  };\n\n  return (\n    <div className=\"demo-page\">\n      <header>\n        <h3 className=\"demo-page-title\">圆形进度条</h3>\n      </header>\n      <main>\n        <div className=\"demo-block\">\n          <div className=\"demo-title\">基本</div>\n          <Progress percent={percent}></Progress>\n        </div>\n        <div className=\"demo-block\">\n          <div className=\"demo-title\">设置线条宽度</div>\n          <Progress percent={percent} strokeWidth=\"2\"></Progress>\n        </div>\n        <div className=\"demo-block\">\n          <div className=\"demo-title\">设置线条颜色</div>\n          <Progress\n            percent={percent}\n            strokeWidth=\"2\"\n            strokeColor=\"red\"\n          ></Progress>\n        </div>\n\n        <Button type=\"primary\" onClick={handleAdd}>\n          增加\n        </Button>\n        <Button onClick={handleMinus}>减少</Button>\n      </main>\n    </div>\n  );\n};\n\nexport default Demo;"}},"dependencies":{"react":{"version":"^17.0.2"},"xun-components":{"version":"1.0.2"},"classnames":{"version":"^2.3.1"},"react-dom":{"version":"^17.0.2"}},"componentName":"Progress","identifier":"Progress-demo"},
  },
  'ProgressBar-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _slicedToArray2 = _interopRequireDefault(require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

  var _react = _interopRequireWildcard(require("react"));

  var _xunComponents = require("xun-components");

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var Demo = function Demo() {
    var _useState = (0, _react.useState)(10),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        percent = _useState2[0],
        setPercent = _useState2[1];

    var handleAdd = function handleAdd() {
      if (percent >= 100) {
        return;
      }

      setPercent(percent + 10);
    };

    var handleMinus = function handleMinus() {
      if (percent <= 0) {
        return;
      }

      setPercent(percent - 10);
    };

    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-page"
    }, /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("h3", {
      className: "demo-page-title"
    }, "\u8FDB\u5EA6\u6761")), /*#__PURE__*/_react["default"].createElement("main", null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-title"
    }, "\u57FA\u672C"), /*#__PURE__*/_react["default"].createElement(_xunComponents.ProgressBar, {
      percent: percent
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-title"
    }, "\u8BBE\u7F6E\u7EBF\u6761\u5BBD\u5EA6"), /*#__PURE__*/_react["default"].createElement(_xunComponents.ProgressBar, {
      percent: percent,
      strokeWidth: "6"
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-title"
    }, "\u8BBE\u7F6E\u7EBF\u6761\u989C\u8272"), /*#__PURE__*/_react["default"].createElement(_xunComponents.ProgressBar, {
      percent: percent,
      strokeWidth: "8",
      strokeColor: "red"
    })), /*#__PURE__*/_react["default"].createElement(_xunComponents.Button, {
      type: "primary",
      onClick: handleAdd
    }, "\u589E\u52A0"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Button, {
      onClick: handleMinus
    }, "\u51CF\u5C11")));
  };

  var _default = Demo;
  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React, { useState } from 'react';\nimport { ProgressBar, Button } from 'xun-components';\n\nconst Demo = () => {\n  const [percent, setPercent] = useState(10);\n\n  const handleAdd = () => {\n    if (percent >= 100) {\n      return;\n    }\n    setPercent(percent + 10);\n  };\n\n  const handleMinus = () => {\n    if (percent <= 0) {\n      return;\n    }\n    setPercent(percent - 10);\n  };\n\n  return (\n    <div className=\"demo-page\">\n      <header>\n        <h3 className=\"demo-page-title\">进度条</h3>\n      </header>\n      <main>\n        <div className=\"demo-block\">\n          <div className=\"demo-title\">基本</div>\n          <ProgressBar percent={percent}></ProgressBar>\n        </div>\n        <div className=\"demo-block\">\n          <div className=\"demo-title\">设置线条宽度</div>\n          <ProgressBar percent={percent} strokeWidth=\"6\"></ProgressBar>\n        </div>\n        <div className=\"demo-block\">\n          <div className=\"demo-title\">设置线条颜色</div>\n          <ProgressBar\n            percent={percent}\n            strokeWidth=\"8\"\n            strokeColor=\"red\"\n          ></ProgressBar>\n        </div>\n\n        <Button type=\"primary\" onClick={handleAdd}>\n          增加\n        </Button>\n        <Button onClick={handleMinus}>减少</Button>\n      </main>\n    </div>\n  );\n};\n\nexport default Demo;"}},"dependencies":{"react":{"version":"^17.0.2"},"xun-components":{"version":"1.0.2"},"classnames":{"version":"^2.3.1"},"react-dom":{"version":"^17.0.2"}},"componentName":"ProgressBar","identifier":"ProgressBar-demo"},
  },
  'PullToRefresh-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _regenerator = _interopRequireDefault(require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/regenerator"));

  var _asyncToGenerator2 = _interopRequireDefault(require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/asyncToGenerator"));

  var _slicedToArray2 = _interopRequireDefault(require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

  var _react = _interopRequireWildcard(require("react"));

  var _xunComponents = require("xun-components");

  var _utils = require("/Users/lipengjie/projects/xun-components/src/assets/utils");

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var Demo = function Demo() {
    var createList = function createList() {
      var list = [];

      for (var i = 0; i < 100; i++) {
        list.push(Date.now() + i);
      }

      return list;
    };

    var _useState = (0, _react.useState)(createList()),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        list = _useState2[0],
        setList = _useState2[1];

    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_xunComponents.PullToRefresh, {
      onRefresh: /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _utils.sleep)(3000);

              case 2:
                setList(createList());

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })),
      completeDelay: 100
    }, list.map(function (item) {
      return /*#__PURE__*/_react["default"].createElement(_xunComponents.Cell, {
        key: item
      }, "\u7B2C ", item, " \u884C");
    })));
  };

  var _default = Demo;
  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React, { useState } from 'react';\nimport { PullToRefresh, Cell } from 'xun-components';\nimport { sleep } from '../assets/utils';\n\nconst Demo = () => {\n  const createList = () => {\n    const list = [];\n    for (let i = 0; i < 100; i++) {\n      list.push(Date.now() + i);\n    }\n    return list;\n  };\n\n  const [list, setList] = useState(createList());\n\n  return (\n    <>\n      <PullToRefresh\n        onRefresh={async () => {\n          await sleep(3000);\n          setList(createList());\n        }}\n        completeDelay={100}\n      >\n        {list.map((item) => {\n          return <Cell key={item}>第 {item} 行</Cell>;\n        })}\n      </PullToRefresh>\n    </>\n  );\n};\n\nexport default Demo;"},"assets/utils/index.ts":{"import":"../assets/utils","content":rawCode1}},"dependencies":{"react":{"version":"^17.0.2"},"xun-components":{"version":"1.0.2"},"classnames":{"version":"^2.3.1"},"react-dom":{"version":"^17.0.2"}},"componentName":"PullToRefresh","identifier":"PullToRefresh-demo"},
  },
  'Radio-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _slicedToArray2 = _interopRequireDefault(require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

  var _react = _interopRequireWildcard(require("react"));

  var _xunComponents = require("xun-components");

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var Demo = function Demo() {
    var _useState = (0, _react.useState)('1'),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        value = _useState2[0],
        setValue = _useState2[1];

    var handleChange = function handleChange(value) {
      console.log(value);
      setValue(value);
    };

    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-page demo-page-checckbox"
    }, /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("h3", {
      className: "demo-page-title"
    }, "\u5355\u9009\u6846")), /*#__PURE__*/_react["default"].createElement("main", null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-title"
    }, "\u9ED8\u8BA4"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Radio, null, "Radio")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-title"
    }, "\u9009\u9879\u7EC4"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Radio.Group, {
      value: value,
      onChange: handleChange
    }, /*#__PURE__*/_react["default"].createElement(_xunComponents.Radio, {
      value: "1"
    }, "Radio1"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Radio, {
      value: "2"
    }, "Radio2")))));
  };

  var _default = Demo;
  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React, { useState } from 'react';\nimport { Radio } from 'xun-components';\n\nconst Demo = () => {\n  const [value, setValue] = useState('1');\n\n  const handleChange = (value) => {\n    console.log(value);\n    setValue(value);\n  };\n  return (\n    <div className=\"demo-page demo-page-checckbox\">\n      <header>\n        <h3 className=\"demo-page-title\">单选框</h3>\n      </header>\n      <main>\n        <div className=\"demo-block\">\n          <div className=\"demo-title\">默认</div>\n          <Radio>Radio</Radio>\n        </div>\n        <div className=\"demo-block\">\n          <div className=\"demo-title\">选项组</div>\n          <Radio.Group value={value} onChange={handleChange}>\n            <Radio value=\"1\">Radio1</Radio>\n            <Radio value=\"2\">Radio2</Radio>\n          </Radio.Group>\n        </div>\n      </main>\n    </div>\n  );\n};\n\nexport default Demo;"}},"dependencies":{"react":{"version":"^17.0.2"},"xun-components":{"version":"1.0.2"},"classnames":{"version":"^2.3.1"},"react-dom":{"version":"^17.0.2"}},"componentName":"Radio","identifier":"Radio-demo"},
  },
  'Rate-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _slicedToArray2 = _interopRequireDefault(require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

  var _react = _interopRequireWildcard(require("react"));

  var _xunComponents = require("xun-components");

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var Demo = function Demo() {
    var _useState = (0, _react.useState)(0),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        value1 = _useState2[0],
        setValue1 = _useState2[1];

    var _useState3 = (0, _react.useState)(0),
        _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
        value2 = _useState4[0],
        setValue2 = _useState4[1];

    var _useState5 = (0, _react.useState)(3),
        _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
        value3 = _useState6[0],
        setValue3 = _useState6[1];

    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-page demo-page-rate"
    }, /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("h3", {
      className: "demo-page-title"
    }, "\u8BC4\u5206")), /*#__PURE__*/_react["default"].createElement("main", null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-title"
    }, "\u57FA\u672C"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Rate, {
      value: value1,
      onChange: function onChange(value1) {
        return setValue1(value1);
      }
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-title"
    }, "\u534A\u661F"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Rate, {
      value: value2,
      count: 10,
      allowHalf: true,
      onChange: function onChange(value2) {
        return setValue2(value2);
      }
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-title"
    }, "\u7981\u7528"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Rate, {
      value: value3,
      onChange: function onChange(value3) {
        return setValue3(value3);
      },
      disabled: true
    }))));
  };

  var _default = Demo;
  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React, { useState } from 'react';\nimport { Rate } from 'xun-components';\n\nconst Demo = () => {\n  const [value1, setValue1] = useState(0);\n  const [value2, setValue2] = useState(0);\n  const [value3, setValue3] = useState(3);\n  return (\n    <div className=\"demo-page demo-page-rate\">\n      <header>\n        <h3 className=\"demo-page-title\">评分</h3>\n      </header>\n      <main>\n        <div className=\"demo-block\">\n          <div className=\"demo-title\">基本</div>\n          <Rate value={value1} onChange={(value1) => setValue1(value1)}></Rate>\n        </div>\n        <div className=\"demo-block\">\n          <div className=\"demo-title\">半星</div>\n          <Rate\n            value={value2}\n            count={10}\n            allowHalf\n            onChange={(value2) => setValue2(value2)}\n          ></Rate>\n        </div>\n        <div className=\"demo-block\">\n          <div className=\"demo-title\">禁用</div>\n          <Rate\n            value={value3}\n            onChange={(value3) => setValue3(value3)}\n            disabled\n          ></Rate>\n        </div>\n      </main>\n    </div>\n  );\n};\n\nexport default Demo;"}},"dependencies":{"react":{"version":"^17.0.2"},"xun-components":{"version":"1.0.2"},"classnames":{"version":"^2.3.1"},"react-dom":{"version":"^17.0.2"}},"componentName":"Rate","identifier":"Rate-demo"},
  },
  'Result-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _react = _interopRequireDefault(require("react"));

  var _xunComponents = require("xun-components");

  var Demo = function Demo() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-page"
    }, /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("h3", {
      className: "demo-page-title"
    }, "\u7ED3\u679C")), /*#__PURE__*/_react["default"].createElement("main", null, /*#__PURE__*/_react["default"].createElement(_xunComponents.Result, {
      status: "success",
      title: "\u6210\u529F\u63D0\u793A",
      description: "\u5185\u5BB9\u8BE6\u60C5\u53EF\u6298\u884C\uFF0C\u5EFA\u8BAE\u4E0D\u8D85\u8FC7\u4E24\u884C\u5EFA\u8BAE\u4E0D\u8D85\u8FC7\u4E24\u884C\u5EFA\u8BAE\u4E0D\u8D85\u8FC7\u4E24\u884C"
    }, "Result"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Result, {
      status: "error",
      title: "\u9519\u8BEF\u63D0\u793A",
      description: "\u5185\u5BB9\u8BE6\u60C5\u53EF\u6298\u884C\uFF0C\u5EFA\u8BAE\u4E0D\u8D85\u8FC7\u4E24\u884C\u5EFA\u8BAE\u4E0D\u8D85\u8FC7\u4E24\u884C\u5EFA\u8BAE\u4E0D\u8D85\u8FC7\u4E24\u884C"
    }, "Result"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Result, {
      status: "warning",
      title: "\u8B66\u544A\u63D0\u793A",
      description: "\u5185\u5BB9\u8BE6\u60C5\u53EF\u6298\u884C\uFF0C\u5EFA\u8BAE\u4E0D\u8D85\u8FC7\u4E24\u884C\u5EFA\u8BAE\u4E0D\u8D85\u8FC7\u4E24\u884C\u5EFA\u8BAE\u4E0D\u8D85\u8FC7\u4E24\u884C"
    }, "Result"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Result, {
      status: "info",
      title: "\u4FE1\u606F\u63D0\u793A",
      description: "\u5185\u5BB9\u8BE6\u60C5\u53EF\u6298\u884C\uFF0C\u5EFA\u8BAE\u4E0D\u8D85\u8FC7\u4E24\u884C\u5EFA\u8BAE\u4E0D\u8D85\u8FC7\u4E24\u884C\u5EFA\u8BAE\u4E0D\u8D85\u8FC7\u4E24\u884C"
    }, "Result")));
  };

  var _default = Demo;
  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { Result } from 'xun-components';\n\nconst Demo = () => (\n  <div className=\"demo-page\">\n    <header>\n      <h3 className=\"demo-page-title\">结果</h3>\n    </header>\n    <main>\n      <Result\n        status=\"success\"\n        title=\"成功提示\"\n        description=\"内容详情可折行，建议不超过两行建议不超过两行建议不超过两行\"\n      >\n        Result\n      </Result>\n      <Result\n        status=\"error\"\n        title=\"错误提示\"\n        description=\"内容详情可折行，建议不超过两行建议不超过两行建议不超过两行\"\n      >\n        Result\n      </Result>\n      <Result\n        status=\"warning\"\n        title=\"警告提示\"\n        description=\"内容详情可折行，建议不超过两行建议不超过两行建议不超过两行\"\n      >\n        Result\n      </Result>\n      <Result\n        status=\"info\"\n        title=\"信息提示\"\n        description=\"内容详情可折行，建议不超过两行建议不超过两行建议不超过两行\"\n      >\n        Result\n      </Result>\n    </main>\n  </div>\n);\n\nexport default Demo;"}},"dependencies":{"react":{"version":"^17.0.2"},"xun-components":{"version":"1.0.2"},"classnames":{"version":"^2.3.1"},"react-dom":{"version":"^17.0.2"}},"componentName":"Result","identifier":"Result-demo"},
  },
  'SearchBar-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _slicedToArray2 = _interopRequireDefault(require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

  var _react = _interopRequireWildcard(require("react"));

  var _xunComponents = require("xun-components");

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var Demo = function Demo() {
    var _useState = (0, _react.useState)(false),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        visible = _useState2[0],
        setVisible = _useState2[1];

    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-page demo-page-searchbar"
    }, /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("h3", {
      className: "demo-page-title"
    }, "\u641C\u7D22\u680F")), /*#__PURE__*/_react["default"].createElement("main", null, /*#__PURE__*/_react["default"].createElement(_xunComponents.SearchBar, null, "SearchBar")));
  };

  var _default = Demo;
  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React, { useState } from 'react';\nimport { SearchBar } from 'xun-components';\n\nconst Demo = () => {\n  const [visible, setVisible] = useState(false);\n  return (\n    <div className=\"demo-page demo-page-searchbar\">\n      <header>\n        <h3 className=\"demo-page-title\">搜索栏</h3>\n      </header>\n      <main>\n        <SearchBar>SearchBar</SearchBar>\n      </main>\n    </div>\n  );\n};\n\nexport default Demo;"}},"dependencies":{"react":{"version":"^17.0.2"},"xun-components":{"version":"1.0.2"},"classnames":{"version":"^2.3.1"},"react-dom":{"version":"^17.0.2"}},"componentName":"SearchBar","identifier":"SearchBar-demo"},
  },
  'SideBar-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _slicedToArray2 = _interopRequireDefault(require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

  var _react = _interopRequireWildcard(require("react"));

  var _xunComponents = require("xun-components");

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var Demo = function Demo() {
    var _useState = (0, _react.useState)(false),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        visible = _useState2[0],
        setVisible = _useState2[1];

    var _useState3 = (0, _react.useState)('2'),
        _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
        activeKey = _useState4[0],
        setActiveKey = _useState4[1];

    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_xunComponents.SideBar, {
      activeKey: activeKey,
      onChange: function onChange(key) {
        return setActiveKey(key);
      }
    }, /*#__PURE__*/_react["default"].createElement(_xunComponents.SideBar.Item, {
      key: "1",
      title: "1"
    }, "1"), /*#__PURE__*/_react["default"].createElement(_xunComponents.SideBar.Item, {
      key: "2",
      title: "2"
    }, "2"), /*#__PURE__*/_react["default"].createElement(_xunComponents.SideBar.Item, {
      key: "3",
      title: "3"
    }, "3")));
  };

  var _default = Demo;
  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React, { useState } from 'react';\nimport { SideBar } from 'xun-components';\n\nconst Demo = () => {\n  const [visible, setVisible] = useState(false);\n  const [activeKey, setActiveKey] = useState('2');\n  return (\n    <>\n      <SideBar activeKey={activeKey} onChange={(key) => setActiveKey(key)}>\n        <SideBar.Item key=\"1\" title=\"1\">\n          1\n        </SideBar.Item>\n        <SideBar.Item key=\"2\" title=\"2\">\n          2\n        </SideBar.Item>\n        <SideBar.Item key=\"3\" title=\"3\">\n          3\n        </SideBar.Item>\n      </SideBar>\n    </>\n  );\n};\n\nexport default Demo;"}},"dependencies":{"react":{"version":"^17.0.2"},"xun-components":{"version":"1.0.2"},"classnames":{"version":"^2.3.1"},"react-dom":{"version":"^17.0.2"}},"componentName":"SideBar","identifier":"SideBar-demo"},
  },
  'Stepper-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _slicedToArray2 = _interopRequireDefault(require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

  var _react = _interopRequireWildcard(require("react"));

  var _xunComponents = require("xun-components");

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var Demo = function Demo() {
    var _useState = (0, _react.useState)(false),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        visible = _useState2[0],
        setVisible = _useState2[1];

    var _useState3 = (0, _react.useState)(1),
        _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
        value = _useState4[0],
        setValue = _useState4[1];

    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-page"
    }, /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("h3", {
      className: "demo-page-title"
    }, "\u6B65\u8FDB\u5668")), /*#__PURE__*/_react["default"].createElement("main", null, /*#__PURE__*/_react["default"].createElement(_xunComponents.Cell, {
      title: "\u57FA\u672C",
      description: /*#__PURE__*/_react["default"].createElement(_xunComponents.Stepper, {
        value: value,
        onChange: setValue
      })
    }), /*#__PURE__*/_react["default"].createElement(_xunComponents.Cell, {
      title: "\u9ED8\u8BA4\u503C",
      description: /*#__PURE__*/_react["default"].createElement(_xunComponents.Stepper, {
        defaultValue: 10
      })
    }), /*#__PURE__*/_react["default"].createElement(_xunComponents.Cell, {
      title: "\u8BBE\u7F6E\u4E0A\u4E0B\u9650\uFF08-3 - 3\uFF09",
      description: /*#__PURE__*/_react["default"].createElement(_xunComponents.Stepper, {
        min: -3,
        max: 3
      })
    }), /*#__PURE__*/_react["default"].createElement(_xunComponents.Cell, {
      title: "\u8BBE\u7F6E\u6B65\u957F",
      description: /*#__PURE__*/_react["default"].createElement(_xunComponents.Stepper, {
        step: 5
      })
    }), /*#__PURE__*/_react["default"].createElement(_xunComponents.Cell, {
      title: "\u7981\u7528",
      description: /*#__PURE__*/_react["default"].createElement(_xunComponents.Stepper, {
        disabled: true
      })
    }), /*#__PURE__*/_react["default"].createElement(_xunComponents.Cell, {
      title: "\u7981\u7528\u8F93\u5165",
      description: /*#__PURE__*/_react["default"].createElement(_xunComponents.Stepper, {
        disabledInput: true
      })
    })));
  };

  var _default = Demo;
  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React, { useState } from 'react';\nimport { Stepper, Cell } from 'xun-components';\n\nconst Demo = () => {\n  const [visible, setVisible] = useState(false);\n  const [value, setValue] = useState(1);\n\n  return (\n    <div className=\"demo-page\">\n      <header>\n        <h3 className=\"demo-page-title\">步进器</h3>\n      </header>\n      <main>\n        <Cell\n          title=\"基本\"\n          description={<Stepper value={value} onChange={setValue}></Stepper>}\n        />\n        <Cell\n          title=\"默认值\"\n          description={<Stepper defaultValue={10}></Stepper>}\n        />\n        <Cell\n          title=\"设置上下限（-3 - 3）\"\n          description={<Stepper min={-3} max={3}></Stepper>}\n        />\n        <Cell title=\"设置步长\" description={<Stepper step={5}></Stepper>} />\n        <Cell title=\"禁用\" description={<Stepper disabled></Stepper>} />\n        <Cell\n          title=\"禁用输入\"\n          description={<Stepper disabledInput></Stepper>}\n        />\n      </main>\n    </div>\n  );\n};\n\nexport default Demo;"}},"dependencies":{"react":{"version":"^17.0.2"},"xun-components":{"version":"1.0.2"},"classnames":{"version":"^2.3.1"},"react-dom":{"version":"^17.0.2"}},"componentName":"Stepper","identifier":"Stepper-demo"},
  },
  'SwipeAction-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _slicedToArray2 = _interopRequireDefault(require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

  var _react = _interopRequireWildcard(require("react"));

  var _xunComponents = require("xun-components");

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var Demo = function Demo() {
    var _useState = (0, _react.useState)(false),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        visible = _useState2[0],
        setVisible = _useState2[1];

    var numbers = [1, 2, 3, 4, 5];
    var actions = [{
      text: '删除',
      type: 'danger'
    }, {
      text: '置顶',
      type: 'primary'
    }];
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-page demo-page-swipeaction"
    }, /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("h3", {
      className: "demo-page-title"
    }, "\u5DE6\u6ED1")), /*#__PURE__*/_react["default"].createElement("main", null, /*#__PURE__*/_react["default"].createElement(_xunComponents.List, null, numbers.map(function (number) {
      return /*#__PURE__*/_react["default"].createElement(_xunComponents.SwipeAction, {
        actions: actions,
        key: number
      }, /*#__PURE__*/_react["default"].createElement(_xunComponents.List.Item, null, "\u5DE6\u6ED1\u8BD5\u8BD5 ", number));
    }))));
  };

  var _default = Demo;
  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React, { useState } from 'react';\nimport { SwipeAction, List } from 'xun-components';\n\nconst Demo = () => {\n  const [visible, setVisible] = useState(false);\n  const numbers = [1, 2, 3, 4, 5];\n\n  const actions = [\n    {\n      text: '删除',\n      type: 'danger',\n    },\n    {\n      text: '置顶',\n      type: 'primary',\n    },\n  ];\n\n  return (\n    <div className=\"demo-page demo-page-swipeaction\">\n      <header>\n        <h3 className=\"demo-page-title\">左滑</h3>\n      </header>\n      <main>\n        <List>\n          {numbers.map((number) => {\n            return (\n              <SwipeAction actions={actions} key={number}>\n                <List.Item>左滑试试 {number}</List.Item>\n              </SwipeAction>\n            );\n          })}\n        </List>\n      </main>\n    </div>\n  );\n};\n\nexport default Demo;"}},"dependencies":{"react":{"version":"^17.0.2"},"xun-components":{"version":"1.0.2"},"classnames":{"version":"^2.3.1"},"react-dom":{"version":"^17.0.2"}},"componentName":"SwipeAction","identifier":"SwipeAction-demo"},
  },
  'Switch-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _slicedToArray2 = _interopRequireDefault(require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

  var _react = _interopRequireWildcard(require("react"));

  var _xunComponents = require("xun-components");

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var Demo = function Demo() {
    var _useState = (0, _react.useState)(false),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        checked = _useState2[0],
        setChecked = _useState2[1];

    var handleChange = function handleChange(result) {
      console.log(result);
      setChecked(result);
    };

    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-page"
    }, /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("h3", {
      className: "demo-page-title"
    }, "\u5F00\u5173")), /*#__PURE__*/_react["default"].createElement("main", null, /*#__PURE__*/_react["default"].createElement(_xunComponents.Cell, {
      title: "\u57FA\u672C",
      description: /*#__PURE__*/_react["default"].createElement(_xunComponents.Switch, {
        checked: checked,
        onChange: handleChange
      })
    }), /*#__PURE__*/_react["default"].createElement(_xunComponents.Cell, {
      title: "\u9ED8\u8BA4\u5F00",
      description: /*#__PURE__*/_react["default"].createElement(_xunComponents.Switch, {
        defaultChecked: true
      })
    }), /*#__PURE__*/_react["default"].createElement(_xunComponents.Cell, {
      title: "\u7981\u7528\uFF08\u9ED8\u8BA4\u5173\uFF09",
      description: /*#__PURE__*/_react["default"].createElement(_xunComponents.Switch, {
        disabled: true
      })
    }), /*#__PURE__*/_react["default"].createElement(_xunComponents.Cell, {
      title: "\u7981\u7528\uFF08\u9ED8\u8BA4\u5F00\uFF09",
      description: /*#__PURE__*/_react["default"].createElement(_xunComponents.Switch, {
        defaultChecked: true,
        disabled: true
      })
    }), /*#__PURE__*/_react["default"].createElement(_xunComponents.Cell, {
      title: "\u81EA\u5B9A\u4E49\u989C\u8272",
      description: /*#__PURE__*/_react["default"].createElement(_xunComponents.Switch, {
        defaultChecked: true,
        checkedColor: "red",
        uncheckedColor: "blue"
      })
    }), /*#__PURE__*/_react["default"].createElement(_xunComponents.Cell, {
      title: "\u81EA\u5B9A\u4E49\u6587\u5B57",
      description: /*#__PURE__*/_react["default"].createElement(_xunComponents.Switch, {
        defaultChecked: true,
        checkedText: "\u5F00",
        uncheckedText: "\u5173"
      })
    })));
  };

  var _default = Demo;
  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React, { useState } from 'react';\nimport { Switch, Cell } from 'xun-components';\n\nconst Demo = () => {\n  const [checked, setChecked] = useState(false);\n\n  const handleChange = (result) => {\n    console.log(result);\n    setChecked(result);\n  };\n\n  return (\n    <div className=\"demo-page\">\n      <header>\n        <h3 className=\"demo-page-title\">开关</h3>\n      </header>\n      <main>\n        <Cell\n          title=\"基本\"\n          description={\n            <Switch checked={checked} onChange={handleChange}></Switch>\n          }\n        />\n        <Cell\n          title=\"默认开\"\n          description={<Switch defaultChecked={true}></Switch>}\n        />\n        <Cell title=\"禁用（默认关）\" description={<Switch disabled></Switch>} />\n        <Cell\n          title=\"禁用（默认开）\"\n          description={<Switch defaultChecked={true} disabled></Switch>}\n        />\n        <Cell\n          title=\"自定义颜色\"\n          description={\n            <Switch\n              defaultChecked={true}\n              checkedColor=\"red\"\n              uncheckedColor=\"blue\"\n            ></Switch>\n          }\n        />\n        <Cell\n          title=\"自定义文字\"\n          description={\n            <Switch\n              defaultChecked={true}\n              checkedText=\"开\"\n              uncheckedText=\"关\"\n            ></Switch>\n          }\n        />\n      </main>\n    </div>\n  );\n};\n\nexport default Demo;"}},"dependencies":{"react":{"version":"^17.0.2"},"xun-components":{"version":"1.0.2"},"classnames":{"version":"^2.3.1"},"react-dom":{"version":"^17.0.2"}},"componentName":"Switch","identifier":"Switch-demo"},
  },
  'TabBar-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _slicedToArray2 = _interopRequireDefault(require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

  var _react = _interopRequireWildcard(require("react"));

  var _xunComponents = require("xun-components");

  var _xunIcons = require("xun-icons");

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var Demo = function Demo() {
    var _useState = (0, _react.useState)('1'),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        activeKey = _useState2[0],
        setActiveKey = _useState2[1];

    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-page demo-page-tabbar"
    }, /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("h3", {
      className: "demo-page-title"
    }, "\u6807\u7B7E\u680F")), /*#__PURE__*/_react["default"].createElement("main", null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-title"
    }, "\u57FA\u672C\u7528\u6CD5"), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-body"
    }, /*#__PURE__*/_react["default"].createElement(_xunComponents.TabBar, {
      activeKey: activeKey,
      onChange: function onChange(key) {
        return setActiveKey(key);
      }
    }, /*#__PURE__*/_react["default"].createElement(_xunComponents.TabBar.Item, {
      title: "\u9996\u9875",
      key: "1",
      icon: /*#__PURE__*/_react["default"].createElement(_xunIcons.Home, null)
    }), /*#__PURE__*/_react["default"].createElement(_xunComponents.TabBar.Item, {
      title: "\u6D88\u606F",
      key: "2",
      icon: /*#__PURE__*/_react["default"].createElement(_xunIcons.Message, null)
    }), /*#__PURE__*/_react["default"].createElement(_xunComponents.TabBar.Item, {
      title: "\u5546\u57CE",
      key: "3",
      icon: /*#__PURE__*/_react["default"].createElement(_xunIcons.Shop, null)
    }), /*#__PURE__*/_react["default"].createElement(_xunComponents.TabBar.Item, {
      title: "\u6211\u7684",
      key: "4",
      icon: /*#__PURE__*/_react["default"].createElement(_xunIcons.Mine, null)
    }))))));
  };

  var _default = Demo;
  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React, { useState } from 'react';\nimport { TabBar } from 'xun-components';\nimport { Home, Message, Shop, Mine } from 'xun-icons';\n\nconst Demo = () => {\n  const [activeKey, setActiveKey] = useState('1');\n  return (\n    <div className=\"demo-page demo-page-tabbar\">\n      <header>\n        <h3 className=\"demo-page-title\">标签栏</h3>\n      </header>\n      <main>\n        <div className=\"demo-block\">\n          <div className=\"demo-title\">基本用法</div>\n          <div className=\"demo-body\">\n            <TabBar activeKey={activeKey} onChange={(key) => setActiveKey(key)}>\n              <TabBar.Item title=\"首页\" key=\"1\" icon={<Home />}></TabBar.Item>\n              <TabBar.Item\n                title=\"消息\"\n                key=\"2\"\n                icon={<Message />}\n              ></TabBar.Item>\n              <TabBar.Item title=\"商城\" key=\"3\" icon={<Shop />}></TabBar.Item>\n              <TabBar.Item title=\"我的\" key=\"4\" icon={<Mine />}></TabBar.Item>\n            </TabBar>\n          </div>\n        </div>\n      </main>\n    </div>\n  );\n};\n\nexport default Demo;"}},"dependencies":{"react":{"version":"^17.0.2"},"xun-components":{"version":"1.0.2"},"xun-icons":{"version":"1.0.3"},"classnames":{"version":"^2.3.1"},"react-dom":{"version":"^17.0.2"}},"componentName":"TabBar","identifier":"TabBar-demo"},
  },
  'Tabs-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _slicedToArray2 = _interopRequireDefault(require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

  var _react = _interopRequireWildcard(require("react"));

  var _xunComponents = require("xun-components");

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var Demo = function Demo() {
    var _useState = (0, _react.useState)(false),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        visible = _useState2[0],
        setVisible = _useState2[1];

    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_xunComponents.Tabs, null, /*#__PURE__*/_react["default"].createElement(_xunComponents.Tabs.TabPanel, {
      title: "1"
    }, "1"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Tabs.TabPanel, {
      title: "2"
    }, "2"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Tabs.TabPanel, {
      title: "3"
    }, "4"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Tabs.TabPanel, {
      title: "4"
    }, "5")));
  };

  var _default = Demo;
  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React, { useState } from 'react';\nimport { Tabs } from 'xun-components';\n\nconst Demo = () => {\n  const [visible, setVisible] = useState(false);\n  return (\n    <>\n      <Tabs>\n        <Tabs.TabPanel title=\"1\">1</Tabs.TabPanel>\n        <Tabs.TabPanel title=\"2\">2</Tabs.TabPanel>\n        <Tabs.TabPanel title=\"3\">4</Tabs.TabPanel>\n        <Tabs.TabPanel title=\"4\">5</Tabs.TabPanel>\n      </Tabs>\n    </>\n  );\n};\n\nexport default Demo;"}},"dependencies":{"react":{"version":"^17.0.2"},"xun-components":{"version":"1.0.2"},"classnames":{"version":"^2.3.1"},"react-dom":{"version":"^17.0.2"}},"componentName":"Tabs","identifier":"Tabs-demo"},
  },
  'Tag-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _react = _interopRequireDefault(require("react"));

  var _xunComponents = require("xun-components");

  var Demo = function Demo() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-page demo-page-tag"
    }, /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("h3", {
      className: "demo-page-title"
    }, "\u6807\u7B7E")), /*#__PURE__*/_react["default"].createElement("main", null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-title"
    }, "\u9ED8\u8BA4\u989C\u8272"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Tag, null, "default"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Tag, {
      color: "primary"
    }, "primary"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Tag, {
      color: "success"
    }, "success"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Tag, {
      color: "warning"
    }, "warning"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Tag, {
      color: "danger"
    }, "danger"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Tag, {
      color: "info"
    }, "info")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-title"
    }, "\u81EA\u5B9A\u4E49\u989C\u8272"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Tag, {
      color: "red"
    }, "red"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Tag, {
      color: "green"
    }, "green"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Tag, {
      color: "blue"
    }, "blue")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-title"
    }, "\u4F7F\u7528\u7EBF\u6846"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Tag, {
      color: "red",
      fill: "outline"
    }, "red"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Tag, {
      color: "green",
      fill: "outline"
    }, "green"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Tag, {
      color: "blue",
      fill: "outline"
    }, "blue")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-title"
    }, "\u8BBE\u7F6E\u5706\u89D2"), /*#__PURE__*/_react["default"].createElement(_xunComponents.Tag, {
      color: "blue",
      round: true
    }, "blue"))));
  };

  var _default = Demo;
  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { Tag } from 'xun-components';\n\nconst Demo = () => {\n  return (\n    <div className=\"demo-page demo-page-tag\">\n      <header>\n        <h3 className=\"demo-page-title\">标签</h3>\n      </header>\n\n      <main>\n        <div className=\"demo-block\">\n          <div className=\"demo-title\">默认颜色</div>\n          <Tag>default</Tag>\n          <Tag color=\"primary\">primary</Tag>\n          <Tag color=\"success\">success</Tag>\n          <Tag color=\"warning\">warning</Tag>\n          <Tag color=\"danger\">danger</Tag>\n          <Tag color=\"info\">info</Tag>\n        </div>\n        <div className=\"demo-block\">\n          <div className=\"demo-title\">自定义颜色</div>\n          <Tag color=\"red\">red</Tag>\n          <Tag color=\"green\">green</Tag>\n          <Tag color=\"blue\">blue</Tag>\n        </div>\n        <div className=\"demo-block\">\n          <div className=\"demo-title\">使用线框</div>\n          <Tag color=\"red\" fill=\"outline\">\n            red\n          </Tag>\n          <Tag color=\"green\" fill=\"outline\">\n            green\n          </Tag>\n          <Tag color=\"blue\" fill=\"outline\">\n            blue\n          </Tag>\n        </div>\n        <div className=\"demo-block\">\n          <div className=\"demo-title\">设置圆角</div>\n          <Tag color=\"blue\" round>\n            blue\n          </Tag>\n        </div>\n      </main>\n    </div>\n  );\n};\n\nexport default Demo;"}},"dependencies":{"react":{"version":"^17.0.2"},"xun-components":{"version":"1.0.2"},"classnames":{"version":"^2.3.1"},"react-dom":{"version":"^17.0.2"}},"componentName":"Tag","identifier":"Tag-demo"},
  },
  'TextArea-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _slicedToArray2 = _interopRequireDefault(require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray"));

  var _react = _interopRequireWildcard(require("react"));

  var _xunComponents = require("xun-components");

  function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

  function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var Demo = function Demo() {
    var _useState = (0, _react.useState)('hello'),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        value = _useState2[0],
        setValue = _useState2[1];

    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-page"
    }, /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("h3", {
      className: "demo-page-title"
    }, "\u6587\u672C\u8F93\u5165\u6846")), /*#__PURE__*/_react["default"].createElement("main", null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-title"
    }, "\u9ED8\u8BA4"), /*#__PURE__*/_react["default"].createElement(_xunComponents.TextArea, null)), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-title"
    }, "\u8BBE\u7F6Eplaceholder"), /*#__PURE__*/_react["default"].createElement(_xunComponents.TextArea, {
      placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9"
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-title"
    }, "\u53EA\u8BFB"), /*#__PURE__*/_react["default"].createElement(_xunComponents.TextArea, {
      placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
      value: "hello world",
      readOnly: true
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-title"
    }, "\u7981\u7528"), /*#__PURE__*/_react["default"].createElement(_xunComponents.TextArea, {
      placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
      value: "hello world",
      disabled: true
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-block"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-title"
    }, "\u66F4\u591A\u8BBE\u7F6E"), /*#__PURE__*/_react["default"].createElement(_xunComponents.TextArea, {
      focused: true,
      rows: 5,
      maxLength: 100,
      disabled: false,
      readOnly: false,
      value: value,
      onChange: function onChange(value) {
        return setValue(value);
      }
    }))));
  };

  var _default = Demo;
  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React, { useState } from 'react';\nimport { TextArea } from 'xun-components';\n\nconst Demo = () => {\n  const [value, setValue] = useState('hello');\n\n  return (\n    <div className=\"demo-page\">\n      <header>\n        <h3 className=\"demo-page-title\">文本输入框</h3>\n      </header>\n      <main>\n        <div className=\"demo-block\">\n          <div className=\"demo-title\">默认</div>\n          <TextArea></TextArea>\n        </div>\n        <div className=\"demo-block\">\n          <div className=\"demo-title\">设置placeholder</div>\n          <TextArea placeholder=\"请输入内容\"></TextArea>\n        </div>\n        <div className=\"demo-block\">\n          <div className=\"demo-title\">只读</div>\n          <TextArea\n            placeholder=\"请输入内容\"\n            value=\"hello world\"\n            readOnly={true}\n          ></TextArea>\n        </div>\n        <div className=\"demo-block\">\n          <div className=\"demo-title\">禁用</div>\n          <TextArea\n            placeholder=\"请输入内容\"\n            value=\"hello world\"\n            disabled={true}\n          ></TextArea>\n        </div>\n\n        <div className=\"demo-block\">\n          <div className=\"demo-title\">更多设置</div>\n          <TextArea\n            focused={true}\n            rows={5}\n            maxLength={100}\n            disabled={false}\n            readOnly={false}\n            value={value}\n            onChange={(value) => setValue(value)}\n          ></TextArea>\n        </div>\n      </main>\n    </div>\n  );\n};\n\nexport default Demo;"}},"dependencies":{"react":{"version":"^17.0.2"},"xun-components":{"version":"1.0.2"},"classnames":{"version":"^2.3.1"},"react-dom":{"version":"^17.0.2"}},"componentName":"TextArea","identifier":"TextArea-demo"},
  },
  'Toast-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _react = _interopRequireDefault(require("react"));

  var _xunComponents = require("xun-components");

  var Demo = function Demo() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "demo-page"
    }, /*#__PURE__*/_react["default"].createElement("header", null, /*#__PURE__*/_react["default"].createElement("h3", {
      className: "demo-page-title"
    }, "\u8F7B\u63D0\u793A")), /*#__PURE__*/_react["default"].createElement("main", null, /*#__PURE__*/_react["default"].createElement(_xunComponents.Cell, {
      title: "\u666E\u901A\u63D0\u793A\uFF0C\u6301\u7EED5\u79D2",
      description: /*#__PURE__*/_react["default"].createElement(_xunComponents.Button, {
        size: "small",
        onClick: function onClick() {
          return _xunComponents.Toast.show('普通提示', {
            duration: 5000
          });
        }
      }, "\u5F00\u542F")
    }), /*#__PURE__*/_react["default"].createElement(_xunComponents.Cell, {
      title: "\u6709\u906E\u7F69\u5C42",
      description: /*#__PURE__*/_react["default"].createElement(_xunComponents.Button, {
        size: "small",
        onClick: function onClick() {
          return _xunComponents.Toast.show('不可进行其他操作', {
            hasMask: true
          });
        }
      }, "\u5F00\u542F")
    }), /*#__PURE__*/_react["default"].createElement(_xunComponents.Cell, {
      title: "\u6210\u529F\u63D0\u793A",
      description: /*#__PURE__*/_react["default"].createElement(_xunComponents.Button, {
        size: "small",
        onClick: function onClick() {
          return _xunComponents.Toast.success('成功提示');
        }
      }, "\u5F00\u542F")
    }), /*#__PURE__*/_react["default"].createElement(_xunComponents.Cell, {
      title: "\u9519\u8BEF\u63D0\u793A",
      description: /*#__PURE__*/_react["default"].createElement(_xunComponents.Button, {
        size: "small",
        onClick: function onClick() {
          return _xunComponents.Toast.warning('错误提示');
        }
      }, "\u5F00\u542F")
    }), /*#__PURE__*/_react["default"].createElement(_xunComponents.Cell, {
      title: "\u4FE1\u606F\u63D0\u793A",
      description: /*#__PURE__*/_react["default"].createElement(_xunComponents.Button, {
        size: "small",
        onClick: function onClick() {
          return _xunComponents.Toast.info('信息提示');
        }
      }, "\u5F00\u542F")
    }), /*#__PURE__*/_react["default"].createElement(_xunComponents.Cell, {
      title: "\u5931\u8D25\u63D0\u793A",
      description: /*#__PURE__*/_react["default"].createElement(_xunComponents.Button, {
        size: "small",
        onClick: function onClick() {
          return _xunComponents.Toast.failure('失败提示');
        }
      }, "\u5F00\u542F")
    })));
  };

  var _default = Demo;
  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { Toast, Cell, Button } from 'xun-components';\n\nconst Demo = () => {\n  return (\n    <div className=\"demo-page\">\n      <header>\n        <h3 className=\"demo-page-title\">轻提示</h3>\n      </header>\n\n      <main>\n        <Cell\n          title=\"普通提示，持续5秒\"\n          description={\n            <Button\n              size=\"small\"\n              onClick={() => Toast.show('普通提示', { duration: 5000 })}\n            >\n              开启\n            </Button>\n          }\n        ></Cell>\n\n        <Cell\n          title=\"有遮罩层\"\n          description={\n            <Button\n              size=\"small\"\n              onClick={() => Toast.show('不可进行其他操作', { hasMask: true })}\n            >\n              开启\n            </Button>\n          }\n        ></Cell>\n\n        <Cell\n          title=\"成功提示\"\n          description={\n            <Button size=\"small\" onClick={() => Toast.success('成功提示')}>\n              开启\n            </Button>\n          }\n        ></Cell>\n\n        <Cell\n          title=\"错误提示\"\n          description={\n            <Button size=\"small\" onClick={() => Toast.warning('错误提示')}>\n              开启\n            </Button>\n          }\n        ></Cell>\n\n        <Cell\n          title=\"信息提示\"\n          description={\n            <Button size=\"small\" onClick={() => Toast.info('信息提示')}>\n              开启\n            </Button>\n          }\n        ></Cell>\n\n        <Cell\n          title=\"失败提示\"\n          description={\n            <Button size=\"small\" onClick={() => Toast.failure('失败提示')}>\n              开启\n            </Button>\n          }\n        ></Cell>\n      </main>\n    </div>\n  );\n};\n\nexport default Demo;"}},"dependencies":{"react":{"version":"^17.0.2"},"xun-components":{"version":"1.0.2"},"classnames":{"version":"^2.3.1"},"react-dom":{"version":"^17.0.2"}},"componentName":"Toast","identifier":"Toast-demo"},
  },
  'WaterMark-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("/Users/lipengjie/projects/xun-components/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _react = _interopRequireDefault(require("react"));

  var _xunComponents = require("xun-components");

  var Demo = function Demo() {
    return /*#__PURE__*/_react["default"].createElement(_xunComponents.WaterMark, null);
  };

  var _default = Demo;
  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from 'react';\nimport { WaterMark } from 'xun-components';\n\nconst Demo = () => {\n  return <WaterMark></WaterMark>;\n};\n\nexport default Demo;"}},"dependencies":{"react":{"version":"^17.0.2"},"xun-components":{"version":"1.0.2"},"classnames":{"version":"^2.3.1"},"react-dom":{"version":"^17.0.2"}},"componentName":"WaterMark","identifier":"WaterMark-demo"},
  },
};

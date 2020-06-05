'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var EVENT_NAMES = [
  'about_hide',
  'about_show',
  'animation_end',
  'animation_start',
  'animation_step',
  'beforedestroy',
  'bugreport_hide',
  'bugreport_show',
  'click',
  'complete',
  'data_export',
  'dataexport',
  'dataload',
  'dataparse',
  'dataready',
  'destroy',
  'dimension_change',
  'error',
  'feed_clear',
  'feed_interval_modify',
  'feed_start',
  'feed_stop',
  'gcomplete',
  'gload',
  'gparse',
  'guide_mousemove',
  'guide_mouseout',
  'guide_mouseout',
  'heatmap.mousemove',
  'history_back',
  'history_forward',
  'image_save',
  'label_click',
  'label_mousedown',
  'label_mouseout',
  'label_mouseover',
  'label_mouseup',
  'legend_hide',
  'legend_item_click',
  'legend_item_mousemove',
  'legend_item_mouseout',
  'legend_item_mouseout',
  'legend_item_mouseover',
  'legend_marker_click',
  'legend_marker_click',
  'legend_maximize',
  'legend_minimize',
  'legend_minimize_click',
  'legend_pagination_click',
  'legend_show',
  'legend-drag_mousedown',
  'lens_hide',
  'lens_show',
  'load',
  'maps.zoom',
  'menu_item_click',
  'modify',
  'modulesready',
  'mousewheel',
  'node_add',
  'node_click',
  'node_deselect',
  'node_doubleclick',
  'node_mousedown',
  'node_mouseout',
  'node_mouseover',
  'node_mouseup',
  'node_remove',
  'node_select',
  'node_set',
  'objectsinit',
  'objectsready',
  'overscroll',
  'plot_add',
  'plot_click',
  'plot_deselect',
  'plot_doubleclick',
  'plot_hide',
  'plot_modify',
  'plot_mouseout',
  'plot_mouseover',
  'plot_remove',
  'plot_select',
  'plot_show',
  'postzoom',
  'print',
  'reload',
  'render',
  'resize',
  'setdata',
  'shape_click',
  'shape_mousedown',
  'shape_mouseout',
  'shape_mouseover',
  'shape_mouseup',
  'source_hide',
  'source_show',
  'swipe',
  'touchemove',
  'touchend',
  'touchstart',
  'zingchart.plugins.selection-tool.mouseup',
  'zingchart.plugins.selection-tool.selection',
  'zoom'
];

var METHOD_NAMES = [
  'addgraph',
  'addmenuitem',
  'addnode',
  'addnote',
  'addobject',
  'addplot',
  'addrule',
  'addscalevalue',
  'appendseriesdata',
  'appendseriesvalues',
  'clearfeed',
  'clearscroll',
  'clearselection',
  'clicknode',
  'clicknode',
  'closemodal',
  'closemodal',
  'destroy/zcdestroy',
  'disable',
  'downloadCSV',
  'downloadRAW',
  'downloadXLS',
  'exitfullscreen',
  'exportdata',
  'exportimage',
  'fullscreen',
  'get3dview',
  'getbubblesize',
  'getcharttype',
  'getdata',
  'getgraphlength',
  'getimagedata',
  'getinterval',
  'getnodelength',
  'getnodevalue',
  'getobjectinfo',
  'getoriginaljson',
  'getpage',
  'getplotlength',
  'getplotvalues',
  'getrender',
  'getrules',
  'getscaleinfo',
  'getscales',
  'getseriesdata',
  'getseriesdata',
  'getseriesvalues',
  'getversion',
  'getxyinfo',
  'goback',
  'goforward',
  'hideguide',
  'hidemenu',
  'hideplot/plothide',
  'hidetooltip',
  'legendmaximize',
  'legendminimize',
  'legendscroll',
  'load',
  'loadstorage',
  'mapdata',
  'mapdata',
  'modify',
  'modifyplot',
  'openmodal',
  'print',
  'reload',
  'removegraph',
  'removenode',
  'removenote',
  'removeobject',
  'removeplot',
  'removerule',
  'removescalevalue',
  'repaintobjects',
  'resize',
  'saveasimage',
  'set3dview',
  'setcharttype',
  'setdata',
  'setguide',
  'setinterval',
  'setmode',
  'setnodevalue',
  'setpage',
  'setscalevalues',
  'setseriesdata',
  'setseriesvalues',
  'showhoverstate',
  'showmenu',
  'showplot/plotshow',
  'showtooltip',
  'startfeed',
  'stopfeed',
  'togglebugreport',
  'toggledimension',
  'togglelegend',
  'toggleplot',
  'unbinddocument',
  'update',
  'updatenote',
  'updateobject',
  'updaterule',
  'viewDataTable',
  'zoomin',
  'zoomout',
  'zoomto',
  'zoomtovalues'
];

var MARKER_NAMES = [
  'square',
  'parallelogram',
  'trapezoid',
  'circle',
  'diamond',
  'triangle',
  'ellipse',
  'star5',
  'star6',
  'star7',
  'star8',
  'rpoly5',
  'rpoly6',
  'rpoly7',
  'rpoly8',
  'gear5',
  'gear6',
  'gear7',
  'gear8',
  'pie',
];

var MISC = {
  DEFAULT_WIDTH: '100%',
  DEFAULT_HEIGHT: 480,
};

const {DEFAULT_WIDTH, DEFAULT_HEIGHT} = MISC;

var constants = {
  EVENT_NAMES,
  METHOD_NAMES,
  MARKER_NAMES,
  DEFAULT_WIDTH,
  DEFAULT_HEIGHT
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var DEFAULT_WIDTH$1 = constants.DEFAULT_WIDTH,
    DEFAULT_HEIGHT$1 = constants.DEFAULT_HEIGHT,
    DEFAULT_OUTPUT = constants.DEFAULT_OUTPUT,
    EVENT_NAMES$1 = constants.EVENT_NAMES,
    METHOD_NAMES$1 = constants.METHOD_NAMES;

// One time setup globally to handle all zingchart-react objects in the app space.

if (!window.ZCReact) {
  window.ZCReact = {
    instances: {},
    count: 0
  };
}

var ZingChart = function (_Component) {
  inherits(ZingChart, _Component);

  function ZingChart(props) {
    classCallCheck(this, ZingChart);

    var _this = possibleConstructorReturn(this, (ZingChart.__proto__ || Object.getPrototypeOf(ZingChart)).call(this, props));

    _this.id = _this.props.id || 'zingchart-react-' + window.ZCReact.count++;

    // Bind all methods available to zingchart to be accessed via Refs.
    METHOD_NAMES$1.forEach(function (name) {
      _this[name] = function (args) {
        return window.zingchart.exec(_this.id, name, args);
      };
    });
    _this.state = {
      style: {
        height: _this.props.height || DEFAULT_HEIGHT$1,
        width: _this.props.width || DEFAULT_WIDTH$1
      }
    };
    return _this;
  }

  createClass(ZingChart, [{
    key: 'render',
    value: function render() {
      return React__default.createElement('div', { id: this.id, style: this.state.style });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      // Bind all events registered.
      Object.keys(this.props).forEach(function (eventName) {
        if (EVENT_NAMES$1.includes(eventName)) {
          // Filter through the provided events list, then register it to zingchart.
          window.zingchart.bind(_this2.id, eventName, function (result) {
            _this2.props[eventName](result);
          });
        }
      });

      this.renderChart();
    }

    // Used to check the values being passed in to avoid unnecessary changes.

  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      // Data change
      if (JSON.stringify(nextProps.data) !== JSON.stringify(this.props.data)) {
        zingchart.exec(this.id, 'setdata', {
          data: nextProps.data
        });

        // Series change
      } else if (JSON.stringify(nextProps.series) !== JSON.stringify(this.props.series)) {
        zingchart.exec(this.id, 'setseriesdata', {
          graphid: 0,
          plotindex: 0,
          data: nextProps.series
        });

        // Resize
      } else if (nextProps.width !== this.props.width || nextProps.height !== this.props.height) {
        this.setState({
          style: {
            width: nextProps.width || DEFAULT_WIDTH$1,
            height: nextProps.height || DEFAULT_HEIGHT$1
          }
        });
        zingchart.exec(this.id, 'resize', {
          width: nextProps.width || DEFAULT_WIDTH$1,
          height: nextProps.height || DEFAULT_HEIGHT$1
        });
      }

      // React should never re-render since ZingChart controls this component.
      return false;
    }
  }, {
    key: 'renderChart',
    value: function renderChart() {
      var renderObject = {
        id: this.id,
        width: this.props.width || DEFAULT_WIDTH$1,
        height: this.props.height || DEFAULT_HEIGHT$1,
        data: this.props.data,
        output: this.props.output || DEFAULT_OUTPUT
      };

      if (this.props.series) {
        renderObject.data.series = this.props.series;
      }
      if (this.props.theme) {
        renderObject.defaults = this.props.theme;
      }
      zingchart.render(renderObject);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      zingchart.exec(this.id, 'destroy');
    }
  }]);
  return ZingChart;
}(React.Component);

module.exports = ZingChart;
//# sourceMappingURL=zingchart-react.js.map

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter) {if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;}}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.then(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

var CALLBACK_API_RE = /^on/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name);
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name);
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
      /* eslint-disable no-extend-native */
      if (!Promise.prototype.finally) {
        Promise.prototype.finally = function (callback) {
          var promise = this.constructor;
          return this.then(
          function (value) {return promise.resolve(callback()).then(function () {return value;});},
          function (reason) {return promise.resolve(callback()).then(function () {
              throw reason;
            });});

        };
      }
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      return 1;
    } else {
      return 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };




var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  interceptors: interceptors,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor });


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}
var protocols = {
  previewImage: previewImage,
  getSystemInfo: {
    returnValue: addSafeAreaInsets },

  getSystemInfoSync: {
    returnValue: addSafeAreaInsets } };


var todos = [
'vibrate'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      var returnValue = wx[options.name || methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  if (typeof getUniEmitter === 'function') {
    /* eslint-disable no-undef */
    return getUniEmitter;
  }
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });




var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}

Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('onLoad', options);
  return MPPage(options);
};

Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('created', options);
  return MPComponent(options);
};

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
    vueOptions = VueComponent.extendOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions['behaviors'];
  var vueExtends = vueOptions['extends'];
  var vueMixins = vueOptions['mixins'];

  var vueProps = vueOptions['props'];

  if (!vueProps) {
    vueOptions['props'] = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps['name'] = {
            type: String,
            default: '' };

          vueProps['value'] = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts['default'];
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor = dataPath ? vm.__get_value(dataPath, context) : context;

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn("\u4E8B\u4EF6\u4FE1\u606F\u4E0D\u5B58\u5728");
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn("\u4E8B\u4EF6\u4FE1\u606F\u4E0D\u5B58\u5728");
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (
          handlerCtx.$options.generic &&
          handlerCtx.$parent &&
          handlerCtx.$parent.$parent)
          {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = handlerCtx.$parent.$parent;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          ret.push(handler.apply(handlerCtx, processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName)));

        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound'];


function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (!wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      var components = mpInstance.selectAllComponents('.vue-ref');
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        $refs[ref] = component.$vm || component;
      });
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = {
    multipleSlots: true,
    addGlobalClass: true };


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin']['options']) {
      Object.assign(options, vueOptions['mp-weixin']['options']);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };



  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (args) {
    this.$vm.$mp.query = args; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', args);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (target[name]) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),

/***/ 14:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    options.components = Object.assign(components, options.components || {})
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 2:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    {
      if(vm.$scope && vm.$scope.is){
        return vm.$scope.is
      }
    }
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  // fixed by xxxxxx (nvue vuex)
  /* eslint-disable no-undef */
  if(typeof SharedObject !== 'undefined'){
    this.id = SharedObject.uid++;
  } else {
    this.id = uid++;
  }
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = typeof SharedObject !== 'undefined' ? SharedObject : {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i++, i)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    vm.mpHost !== 'mp-toutiao' && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    vm.mpHost !== 'mp-toutiao' && initProvide(vm); // resolve provide after data/props
    vm.mpHost !== 'mp-toutiao' && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);
  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  vm.mpHost !== 'mp-toutiao' && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err) {
    /* eslint-disable no-undef */
    var app = getApp();
    if (app && app.onError) {
      app.onError(err);
    } else {
      console.error(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string,number
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onError',
    //Page
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 21:
/*!***************************************!*\
  !*** F:/kxsz/pages/public/rongyun.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function chatLoad() {
  var RongIMLib = __webpack_require__(/*! ../../rongyunIM/rongyun.js */ 22);
  var Protobuf = __webpack_require__(/*! ../../rongyunIM/protobuf-2.3.5.min.js */ 23);
  var RongIMClient = RongIMLib.RongIMClient;
  var timer = new Date();
  var appkey = 'pwe86ga5p4d36';
  var userId = '924756420';
  var token = 'ZU5g/RRMEU2RUhfRT95FS0roF+1VR/NPRNBHO7cp39u44UVUi937DYiUHhlkx7cZdusSShxRe04zVZ0awUjVo2Y1rIY6tpSV';
  //初始化
  RongIMClient.init(appkey, null, {
    protobuf: Protobuf });

  //状态监听器
  RongIMClient.setConnectionStatusListener({
    onChanged: function onChanged(status) {
      // status 标识当前连接状态
      switch (status) {
        case RongIMLib.ConnectionStatus.CONNECTED:
          console.log('链接成功');
          break;
        case RongIMLib.ConnectionStatus.CONNECTING:
          console.log('正在链接');
          break;
        case RongIMLib.ConnectionStatus.DISCONNECTED:
          console.log('断开连接');
          break;
        case RongIMLib.ConnectionStatus.KICKED_OFFLINE_BY_OTHER_CLIENT:
          console.log('其他设备登录, 本端被踢');
          break;
        case RongIMLib.ConnectionStatus.DOMAIN_INCORRECT:
          console.log('域名不正确, 请至开发者后台查看安全域名配置');
          break;
        case RongIMLib.ConnectionStatus.NETWORK_UNAVAILABLE:
          console.log('网络不可用, 此时可调用 reconnect 进行重连');
          break;
        default:
          console.log('链接状态为', status);
          break;}

    } });

  //消息监听器
  RongIMClient.setOnReceiveMessageListener({
    // 接收到的消息
    onReceived: function onReceived(message) {
      var messageContent = message.content;
      // 判断消息类型
      switch (message.messageType) {
        case RongIMClient.MessageType.TextMessage: // 文字消息
          console.log('文字内容', messageContent.content);
          break;
        case RongIMClient.MessageType.ImageMessage: // 图片消息
          console.log('图片缩略图 base64', messageContent.content);
          console.log('原图 url', messageContent.imageUri);
          break;
        case RongIMClient.MessageType.HQVoiceMessage: // 音频消息
          console.log('音频 type ', messageContent.type); // 编解码类型，默认为 aac 音频
          console.log('音频 url', messageContent.remoteUrl); // 播放：<audio src={remoteUrl} />
          console.log('音频 时长', messageContent.duration);
          break;
        case RongIMClient.MessageType.RichContentMessage: // 富文本(图文)消息
          console.log('文本内容', messageContent.content);
          console.log('图片 base64', messageContent.imageUri);
          console.log('原图 url', messageContent.url);
          break;
        case RongIMClient.MessageType.UnknownMessage: // 未知消息
          console.log('未知消息, 请检查消息自定义格式是否正确', message);
          break;
        default:
          console.log('收到消息', message);
          break;}

    } });

  //连接，登录
  RongIMClient.connect(token, {
    onSuccess: function onSuccess(userId) {
      console.log('连接成功, 用户 id 为', userId);
      // 连接已成功, 此时可通过 getConversationList 获取会话列表并展示
    },
    onTokenIncorrect: function onTokenIncorrect() {
      console.log('连接失败, 失败原因: token 无效');
    },
    onError: function onError(errorCode) {
      var info = '';
      switch (errorCode) {
        case RongIMLib.ErrorCode.TIMEOUT:
          info = '链接超时';
          break;
        case RongIMLib.ConnectionState.UNACCEPTABLE_PAROTOCOL_VERSION:
          info = '不可接受的协议版本';
          break;
        case RongIMLib.ConnectionState.IDENTIFIER_REJECTED:
          info = 'appkey 不正确';
          break;
        case RongIMLib.ConnectionState.SERVER_UNAVAILABLE:
          info = '服务器不可用';
          break;
        default:
          info = errorCode;
          break;}

      console.log('连接失败, 失败原因: ', info);
    } });

  //获取消息列表
  var conversationTypes = [RongIMLib.ConversationType.PRIVATE];
  var count = 150;
  RongIMClient.getInstance().getConversationList({
    onSuccess: function onSuccess(list) {
      _self.linkList = list;
    },
    onError: function onError(error) {
      console.log('获取会话列表失败', error);
    } },
  conversationTypes, count);
  //获取历史消息
  var conversationType = RongIMLib.ConversationType.PRIVATE;
  var targetId = '123';
  var timestrap = null; // 默认传 null, 若从头开始获取历史消息, 请赋值为 0
  var count = 20;
  RongIMLib.RongIMClient.getInstance().getHistoryMessages(conversationType, targetId, timestrap, count, {
    onSuccess: function onSuccess(list, hasMsg) {
      /* 
                                                     list: 获取的历史消息列表
                                                     hasMsg: 是否还有历史消息可以获取
                                                   */
      console.log('获取历史消息成功', list);

    },
    onError: function onError(error) {
      // 请排查：单群聊消息云存储是否开通
      console.log('获取历史消息失败', error);
    } });

}

/***/ }),

/***/ 22:
/*!************************************!*\
  !*** F:/kxsz/rongyunIM/rongyun.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
!function (a, b) {if (true) module.exports = b();else { var g, f, c, d, e; }}(window, function () {var Polling = { SetUserStatusInput: function SetUserStatusInput() {var a = {};this.setStatus = function (b) {a.status = b;}, this.toArrayBuffer = function () {return a;};}, SetUserStatusOutput: function SetUserStatusOutput() {var a = {};this.setNothing = function (b) {a.nothing = b;}, this.toArrayBuffer = function () {return a;};}, GetUserStatusInput: function GetUserStatusInput() {var a = {};this.setNothing = function (b) {a.nothing = b;}, this.toArrayBuffer = function () {return a;};}, GetUserStatusOutput: function GetUserStatusOutput() {var a = {};this.setStatus = function (b) {a.status = b;}, this.setSubUserId = function (b) {a.subUserId = b;}, this.toArrayBuffer = function () {return a;};}, VoipDynamicInput: function VoipDynamicInput() {var a = {};this.setEngineType = function (b) {a.engineType = b;}, this.setChannelName = function (b) {a.channelName = b;}, this.setChannelExtra = function (b) {a.channelExtra = b;}, this.toArrayBuffer = function () {return a;};}, VoipDynamicOutput: function VoipDynamicOutput() {var a = {};this.setDynamicKey = function (b) {a.dynamicKey = b;}, this.toArrayBuffer = function () {return a;};}, SubUserStatusInput: function SubUserStatusInput() {var a = {};this.setUserid = function (b) {a.userid = b;}, this.toArrayBuffer = function () {return a;};}, SubUserStatusOutput: function SubUserStatusOutput() {var a = {};this.setNothing = function (b) {a.nothing = b;}, this.toArrayBuffer = function () {return a;};}, CleanHisMsgInput: function CleanHisMsgInput() {var a = {};this.setTargetId = function (b) {a.targetId = b;}, this.setDataTime = function (b) {a.dataTime = b;}, this.setConversationType = function (b) {a.conversationType = b;}, this.toArrayBuffer = function () {return a;};}, DeleteMsgInput: function DeleteMsgInput() {var a = {};this.setType = function (b) {a.type = b;}, this.setConversationId = function (b) {a.conversationId = b;}, this.setMsgs = function (b) {a.msgs = b;}, this.toArrayBuffer = function () {return a;};}, DeleteMsg: function DeleteMsg() {var a = {};this.setMsgId = function (b) {a.msgId = b;}, this.setMsgDataTime = function (b) {a.msgDataTime = b;}, this.setDirect = function (b) {a.direct = b;}, this.toArrayBuffer = function () {return a;};}, DeleteMsgOutput: function DeleteMsgOutput() {var a = {};this.setNothing = function (b) {a.nothing = b;}, this.toArrayBuffer = function () {return a;};}, SearchMpInput: function SearchMpInput() {var a = {};this.setType = function (b) {a.type = b;}, this.setId = function (b) {a.id = b;}, this.toArrayBuffer = function () {return a;};}, SearchMpOutput: function SearchMpOutput() {var a = {};this.setNothing = function (b) {a.nothing = b;}, this.setInfo = function (b) {a.info = b;}, this.toArrayBuffer = function () {return a;};}, MpInfo: function MpInfo() {var a = {};this.setMpid = function (b) {a.mpid = b;}, this.setName = function (b) {a.name = b;}, this.setType = function (b) {a.type = b;}, this.setTime = function (b) {a.time = b;}, this.setPortraitUri = function (b) {a.portraitUrl = b;}, this.setExtra = function (b) {a.extra = b;}, this.toArrayBuffer = function () {return a;};}, PullMpInput: function PullMpInput() {var a = {};this.setMpid = function (b) {a.mpid = b;}, this.setTime = function (b) {a.time = b;}, this.toArrayBuffer = function () {return a;};}, PullMpOutput: function PullMpOutput() {var a = {};this.setStatus = function (b) {a.status = b;}, this.setInfo = function (b) {a.info = b;}, this.toArrayBuffer = function () {return a;};}, MPFollowInput: function MPFollowInput() {var a = {};this.setId = function (b) {a.id = b;}, this.toArrayBuffer = function () {return a;};}, MPFollowOutput: function MPFollowOutput() {var a = {};this.setNothing = function (b) {a.nothing = b;}, this.setInfo = function (b) {a.info = b;}, this.toArrayBuffer = function () {return a;};}, NotifyMsg: function NotifyMsg() {var a = {};this.setType = function (b) {a.type = b;}, this.setTime = function (b) {a.time = b;}, this.setChrmId = function (b) {a.chrmId = b;}, this.toArrayBuffer = function () {return a;};}, SyncRequestMsg: function SyncRequestMsg() {var a = {};this.setSyncTime = function (b) {a.syncTime = b || 0;}, this.setIspolling = function (b) {a.ispolling = !!b;}, this.setIsweb = function (b) {a.isweb = !!b;}, this.setIsPullSend = function (b) {a.isPullSend = !!b;}, this.setSendBoxSyncTime = function (b) {a.sendBoxSyncTime = b;}, this.toArrayBuffer = function () {return a;};}, UpStreamMessage: function UpStreamMessage() {var a = {};this.setSessionId = function (b) {a.sessionId = b;}, this.setClassname = function (b) {a.classname = b;}, this.setContent = function (b) {b && (a.content = b);}, this.setPushText = function (b) {a.pushText = b;}, this.setUserId = function (b) {a.userId = b;}, this.setAppData = function (b) {a.appData = b;}, this.toArrayBuffer = function () {return a;};}, DownStreamMessages: function DownStreamMessages() {var a = {};this.setList = function (b) {a.list = b;}, this.setSyncTime = function (b) {a.syncTime = b;}, this.setFinished = function (b) {a.finished = b;}, this.toArrayBuffer = function () {return a;};}, DownStreamMessage: function DownStreamMessage() {var a = {};this.setFromUserId = function (b) {a.fromUserId = b;}, this.setType = function (b) {a.type = b;}, this.setGroupId = function (b) {a.groupId = b;}, this.setClassname = function (b) {a.classname = b;}, this.setContent = function (b) {b && (a.content = b);}, this.setDataTime = function (b) {a.dataTime = b;}, this.setStatus = function (b) {a.status = b;}, this.setMsgId = function (b) {a.msgId = b;}, this.toArrayBuffer = function () {return a;};}, CreateDiscussionInput: function CreateDiscussionInput() {var a = {};this.setName = function (b) {a.name = b;}, this.toArrayBuffer = function () {return a;};}, CreateDiscussionOutput: function CreateDiscussionOutput() {var a = {};this.setId = function (b) {a.id = b;}, this.toArrayBuffer = function () {return a;};}, ChannelInvitationInput: function ChannelInvitationInput() {var a = {};this.setUsers = function (b) {a.users = b;}, this.toArrayBuffer = function () {return a;};}, LeaveChannelInput: function LeaveChannelInput() {var a = {};this.setNothing = function (b) {a.nothing = b;}, this.toArrayBuffer = function () {return a;};}, QueryChatroomInfoInput: function QueryChatroomInfoInput() {var a = {};this.setCount = function (b) {a.count = b;}, this.setOrder = function (b) {a.order = b;}, this.toArrayBuffer = function () {return a;};}, QueryChatroomInfoOutput: function QueryChatroomInfoOutput() {var a = {};this.setUserTotalNums = function (b) {a.userTotalNums = b;}, this.setUserInfos = function (b) {a.userInfos = b;}, this.toArrayBuffer = function () {return a;};}, ChannelEvictionInput: function ChannelEvictionInput() {var a = {};this.setUser = function (b) {a.user = b;}, this.toArrayBuffer = function () {return a;};}, RenameChannelInput: function RenameChannelInput() {var a = {};this.setName = function (b) {a.name = b;}, this.toArrayBuffer = function () {return a;};}, ChannelInfoInput: function ChannelInfoInput() {var a = {};this.setNothing = function (b) {a.nothing = b;}, this.toArrayBuffer = function () {return a;};}, ChannelInfoOutput: function ChannelInfoOutput() {var a = {};this.setType = function (b) {a.type = b;}, this.setChannelId = function (b) {a.channelId = b;}, this.setChannelName = function (b) {a.channelName = b;}, this.setAdminUserId = function (b) {a.adminUserId = b;}, this.setFirstTenUserIds = function (b) {a.firstTenUserIds = b;}, this.setOpenStatus = function (b) {a.openStatus = b;}, this.toArrayBuffer = function () {return a;};}, ChannelInfosInput: function ChannelInfosInput() {var a = {};this.setPage = function (b) {a.page = b;}, this.setNumber = function (b) {a.number = b;}, this.toArrayBuffer = function () {return a;};}, ChannelInfosOutput: function ChannelInfosOutput() {var a = {};this.setChannels = function (b) {a.channels = b;}, this.setTotal = function (b) {a.total = b;}, this.toArrayBuffer = function () {return a;};}, MemberInfo: function MemberInfo() {var a = {};this.setUserId = function (b) {a.userId = b;}, this.setUserName = function (b) {a.userName = b;}, this.setUserPortrait = function (b) {a.userPortrait = b;}, this.setExtension = function (b) {a.extension = b;}, this.toArrayBuffer = function () {return a;};}, GroupMembersInput: function GroupMembersInput() {var a = {};this.setPage = function (b) {a.page = b;}, this.setNumber = function (b) {a.number = b;}, this.toArrayBuffer = function () {return a;};}, GroupMembersOutput: function GroupMembersOutput() {var a = {};this.setMembers = function (b) {a.members = b;}, this.setTotal = function (b) {a.total = b;}, this.toArrayBuffer = function () {return a;};}, GetUserInfoInput: function GetUserInfoInput() {var a = {};this.setNothing = function (b) {a.nothing = b;}, this.toArrayBuffer = function () {return a;};}, GetUserInfoOutput: function GetUserInfoOutput() {var a = {};this.setUserId = function (b) {a.userId = b;}, this.setUserName = function (b) {a.userName = b;}, this.setUserPortrait = function (b) {a.userPortrait = b;}, this.toArrayBuffer = function () {return a;};}, GetSessionIdInput: function GetSessionIdInput() {var a = {};this.setNothing = function (b) {a.nothing = b;}, this.toArrayBuffer = function () {return a;};}, GetSessionIdOutput: function GetSessionIdOutput() {var a = {};this.setSessionId = function (b) {a.sessionId = b;}, this.toArrayBuffer = function () {return a;};}, GetQNupTokenInput: function GetQNupTokenInput() {var a = {};this.setType = function (b) {a.type = b;}, this.toArrayBuffer = function () {return a;};}, GetQNupTokenOutput: function GetQNupTokenOutput() {var a = {};this.setDeadline = function (b) {a.deadline = b;}, this.setToken = function (b) {a.token = b;}, this.toArrayBuffer = function () {return a;};}, GetQNdownloadUrlInput: function GetQNdownloadUrlInput() {var a = {};this.setType = function (b) {a.type = b;}, this.setKey = function (b) {a.key = b;}, this.setFileName = function (b) {a.fileName = b;}, this.toArrayBuffer = function () {return a;};}, GetQNdownloadUrlOutput: function GetQNdownloadUrlOutput() {var a = {};this.setDownloadUrl = function (b) {a.downloadUrl = b;}, this.toArrayBuffer = function () {return a;};}, Add2BlackListInput: function Add2BlackListInput() {var a = {};this.setUserId = function (b) {a.userId = b;}, this.toArrayBuffer = function () {return a;};}, RemoveFromBlackListInput: function RemoveFromBlackListInput() {var a = {};this.setUserId = function (b) {a.userId = b;}, this.toArrayBuffer = function () {return a;};}, QueryBlackListInput: function QueryBlackListInput() {var a = {};this.setNothing = function (b) {a.nothing = b;}, this.toArrayBuffer = function () {return a;};}, QueryBlackListOutput: function QueryBlackListOutput() {var a = {};this.setUserIds = function (b) {a.userIds = b;}, this.toArrayBuffer = function () {return a;};}, BlackListStatusInput: function BlackListStatusInput() {var a = {};this.setUserId = function (b) {a.userId = b;}, this.toArrayBuffer = function () {return a;};}, BlockPushInput: function BlockPushInput() {var a = {};this.setBlockeeId = function (b) {a.blockeeId = b;}, this.toArrayBuffer = function () {return a;};}, ModifyPermissionInput: function ModifyPermissionInput() {var a = {};this.setOpenStatus = function (b) {a.openStatus = b;}, this.toArrayBuffer = function () {return a;};}, GroupInput: function GroupInput() {var a = {};this.setGroupInfo = function (b) {for (var c = 0, d = []; c < b.length; c++) {d.push({ id: b[c].getContent().id, name: b[c].getContent().name });}a.groupInfo = d;}, this.toArrayBuffer = function () {return a;};}, GroupOutput: function GroupOutput() {var a = {};this.setNothing = function (b) {a.nothing = b;}, this.toArrayBuffer = function () {return a;};}, GroupInfo: function GroupInfo() {var a = {};this.setId = function (b) {a.id = b;}, this.setName = function (b) {a.name = b;}, this.getContent = function () {return a;}, this.toArrayBuffer = function () {return a;};}, GroupHashInput: function GroupHashInput() {var a = {};this.setUserId = function (b) {a.userId = b;}, this.setGroupHashCode = function (b) {a.groupHashCode = b;}, this.toArrayBuffer = function () {return a;};}, GroupHashOutput: function GroupHashOutput() {var a = {};this.setResult = function (b) {a.result = b;}, this.toArrayBuffer = function () {return a;};}, ChrmInput: function ChrmInput() {var a = {};this.setNothing = function (b) {a.nothing = b;}, this.toArrayBuffer = function () {return a;};}, ChrmOutput: function ChrmOutput() {var a = {};this.setNothing = function (b) {a.nothing = b;}, this.toArrayBuffer = function () {return a;};}, ChrmPullMsg: function ChrmPullMsg() {var a = {};this.setSyncTime = function (b) {a.syncTime = b;}, this.setCount = function (b) {a.count = b;}, this.toArrayBuffer = function () {return a;};}, RelationsInput: function RelationsInput() {var a = {};this.setType = function (b) {a.type = b;}, this.setMsg = function (b) {a.msg = b;}, this.setCount = function (b) {a.count = b;}, this.toArrayBuffer = function () {return a;};}, RelationsOutput: function RelationsOutput() {var a = {};this.setInfo = function (b) {a.info = b;}, this.toArrayBuffer = function () {return a;};}, RelationInfo: function RelationInfo() {var a = {};this.setType = function (b) {a.type = b;}, this.setUserId = function (b) {a.userId = b;}, this.setMsg = function (b) {a.msg = b;}, this.toArrayBuffer = function () {return a;};}, HistoryMessageInput: function HistoryMessageInput() {var a = {};this.setTargetId = function (b) {a.targetId = b;}, this.setDataTime = function (b) {a.dataTime = b;}, this.setSize = function (b) {a.size = b;}, this.toArrayBuffer = function () {return a;};}, HistoryMessagesOuput: function HistoryMessagesOuput() {var a = {};this.setList = function (b) {a.list = b;}, this.setSyncTime = function (b) {a.syncTime = b;}, this.setHasMsg = function (b) {a.hasMsg = b;}, this.toArrayBuffer = function () {return a;};}, HistoryMsgInput: function HistoryMsgInput() {var a = {};this.setTargetId = function (b) {a.targetId = b;}, this.setTime = function (b) {a.time = b;}, this.setCount = function (b) {a.count = b;}, this.setOrder = function (b) {a.order = b;}, this.toArrayBuffer = function () {return a;};}, HistoryMsgOuput: function HistoryMsgOuput() {var a = {};this.setList = function (b) {a.list = b;}, this.setSyncTime = function (b) {a.syncTime = b;}, this.setHasMsg = function (b) {a.hasMsg = b;}, this.toArrayBuffer = function () {return a;};} };for (var f in Polling) {Polling[f].decode = function (b) {var back = {},val = JSON.parse(b) || eval("(" + b + ")");for (var i in val) {back[i] = val[i], back["get" + i.charAt(0).toUpperCase() + i.slice(1)] = function () {return val[i];};}return back;};}var md5 = function () {"use strict";function a(a, b) {var c = (65535 & a) + (65535 & b);return (a >> 16) + (b >> 16) + (c >> 16) << 16 | 65535 & c;}function b(a, b) {return a << b | a >>> 32 - b;}function c(c, d, e, f, g, h) {return a(b(a(a(d, c), a(f, h)), g), e);}function d(a, b, d, e, f, g, h) {return c(b & d | ~b & e, a, b, f, g, h);}function e(a, b, d, e, f, g, h) {return c(b & e | d & ~e, a, b, f, g, h);}function f(a, b, d, e, f, g, h) {return c(b ^ d ^ e, a, b, f, g, h);}function g(a, b, d, e, f, g, h) {return c(d ^ (b | ~e), a, b, f, g, h);}function h(b, c) {b[c >> 5] |= 128 << c % 32, b[14 + (c + 64 >>> 9 << 4)] = c;var h,i,j,k,l,m = 1732584193,n = -271733879,o = -1732584194,p = 271733878;for (h = 0; h < b.length; h += 16) {i = m, j = n, k = o, l = p, m = d(m, n, o, p, b[h], 7, -680876936), p = d(p, m, n, o, b[h + 1], 12, -389564586), o = d(o, p, m, n, b[h + 2], 17, 606105819), n = d(n, o, p, m, b[h + 3], 22, -1044525330), m = d(m, n, o, p, b[h + 4], 7, -176418897), p = d(p, m, n, o, b[h + 5], 12, 1200080426), o = d(o, p, m, n, b[h + 6], 17, -1473231341), n = d(n, o, p, m, b[h + 7], 22, -45705983), m = d(m, n, o, p, b[h + 8], 7, 1770035416), p = d(p, m, n, o, b[h + 9], 12, -1958414417), o = d(o, p, m, n, b[h + 10], 17, -42063), n = d(n, o, p, m, b[h + 11], 22, -1990404162), m = d(m, n, o, p, b[h + 12], 7, 1804603682), p = d(p, m, n, o, b[h + 13], 12, -40341101), o = d(o, p, m, n, b[h + 14], 17, -1502002290), n = d(n, o, p, m, b[h + 15], 22, 1236535329), m = e(m, n, o, p, b[h + 1], 5, -165796510), p = e(p, m, n, o, b[h + 6], 9, -1069501632), o = e(o, p, m, n, b[h + 11], 14, 643717713), n = e(n, o, p, m, b[h], 20, -373897302), m = e(m, n, o, p, b[h + 5], 5, -701558691), p = e(p, m, n, o, b[h + 10], 9, 38016083), o = e(o, p, m, n, b[h + 15], 14, -660478335), n = e(n, o, p, m, b[h + 4], 20, -405537848), m = e(m, n, o, p, b[h + 9], 5, 568446438), p = e(p, m, n, o, b[h + 14], 9, -1019803690), o = e(o, p, m, n, b[h + 3], 14, -187363961), n = e(n, o, p, m, b[h + 8], 20, 1163531501), m = e(m, n, o, p, b[h + 13], 5, -1444681467), p = e(p, m, n, o, b[h + 2], 9, -51403784), o = e(o, p, m, n, b[h + 7], 14, 1735328473), n = e(n, o, p, m, b[h + 12], 20, -1926607734), m = f(m, n, o, p, b[h + 5], 4, -378558), p = f(p, m, n, o, b[h + 8], 11, -2022574463), o = f(o, p, m, n, b[h + 11], 16, 1839030562), n = f(n, o, p, m, b[h + 14], 23, -35309556), m = f(m, n, o, p, b[h + 1], 4, -1530992060), p = f(p, m, n, o, b[h + 4], 11, 1272893353), o = f(o, p, m, n, b[h + 7], 16, -155497632), n = f(n, o, p, m, b[h + 10], 23, -1094730640), m = f(m, n, o, p, b[h + 13], 4, 681279174), p = f(p, m, n, o, b[h], 11, -358537222), o = f(o, p, m, n, b[h + 3], 16, -722521979), n = f(n, o, p, m, b[h + 6], 23, 76029189), m = f(m, n, o, p, b[h + 9], 4, -640364487), p = f(p, m, n, o, b[h + 12], 11, -421815835), o = f(o, p, m, n, b[h + 15], 16, 530742520), n = f(n, o, p, m, b[h + 2], 23, -995338651), m = g(m, n, o, p, b[h], 6, -198630844), p = g(p, m, n, o, b[h + 7], 10, 1126891415), o = g(o, p, m, n, b[h + 14], 15, -1416354905), n = g(n, o, p, m, b[h + 5], 21, -57434055), m = g(m, n, o, p, b[h + 12], 6, 1700485571), p = g(p, m, n, o, b[h + 3], 10, -1894986606), o = g(o, p, m, n, b[h + 10], 15, -1051523), n = g(n, o, p, m, b[h + 1], 21, -2054922799), m = g(m, n, o, p, b[h + 8], 6, 1873313359), p = g(p, m, n, o, b[h + 15], 10, -30611744), o = g(o, p, m, n, b[h + 6], 15, -1560198380), n = g(n, o, p, m, b[h + 13], 21, 1309151649), m = g(m, n, o, p, b[h + 4], 6, -145523070), p = g(p, m, n, o, b[h + 11], 10, -1120210379), o = g(o, p, m, n, b[h + 2], 15, 718787259), n = g(n, o, p, m, b[h + 9], 21, -343485551), m = a(m, i), n = a(n, j), o = a(o, k), p = a(p, l);}return [m, n, o, p];}function i(a) {var b,c = "";for (b = 0; b < 32 * a.length; b += 8) {c += String.fromCharCode(a[b >> 5] >>> b % 32 & 255);}return c;}function j(a) {var b,c = [];for (c[(a.length >> 2) - 1] = void 0, b = 0; b < c.length; b += 1) {c[b] = 0;}for (b = 0; b < 8 * a.length; b += 8) {c[b >> 5] |= (255 & a.charCodeAt(b / 8)) << b % 32;}return c;}function k(a) {return i(h(j(a), 8 * a.length));}function l(a, b) {var c,d,e = j(a),f = [],g = [];for (f[15] = g[15] = void 0, e.length > 16 && (e = h(e, 8 * a.length)), c = 0; c < 16; c += 1) {f[c] = 909522486 ^ e[c], g[c] = 1549556828 ^ e[c];}return d = h(f.concat(j(b)), 512 + 8 * b.length), i(h(g.concat(d), 640));}function m(a) {var b,c,d = "0123456789abcdef",e = "";for (c = 0; c < a.length; c += 1) {b = a.charCodeAt(c), e += d.charAt(b >>> 4 & 15) + d.charAt(15 & b);}return e;}function n(a) {return unescape(encodeURIComponent(a));}function o(a) {return k(n(a));}function p(a) {return m(o(a));}function q(a, b) {return l(n(a), n(b));}function r(a, b) {return m(q(a, b));}function s(a, b, c) {return b ? c ? q(b, a) : r(b, a) : c ? o(a) : p(a);}return s;}(),RongIMLib;!function (a) {!function (a) {a[a.ALL = 1] = "ALL", a[a.PART = 2] = "PART";}(a.MentionedType || (a.MentionedType = {}));a.MentionedType;!function (a) {a[a.CUSTOMER_SERVICE = 1] = "CUSTOMER_SERVICE", a[a.RECALL = 2] = "RECALL";}(a.MethodType || (a.MethodType = {}));a.MethodType;!function (a) {a[a.IN_BLACK_LIST = 0] = "IN_BLACK_LIST", a[a.NOT_IN_BLACK_LIST = 1] = "NOT_IN_BLACK_LIST";}(a.BlacklistStatus || (a.BlacklistStatus = {}));a.BlacklistStatus;!function (a) {a[a.XHR_POLLING = 0] = "XHR_POLLING", a[a.WEBSOCKET = 1] = "WEBSOCKET", a[a.HTTP = 0] = "HTTP", a[a.HTTPS = 1] = "HTTPS";}(a.ConnectionChannel || (a.ConnectionChannel = {}));a.ConnectionChannel;!function (a) {a[a.ONLY_ROBOT = 1] = "ONLY_ROBOT", a[a.ONLY_HUMAN = 2] = "ONLY_HUMAN", a[a.ROBOT_FIRST = 3] = "ROBOT_FIRST", a[a.HUMAN_FIRST = 4] = "HUMAN_FIRST";}(a.CustomerType || (a.CustomerType = {}));a.CustomerType;!function (a) {a[a.NONE = 0] = "NONE", a[a.SQQUENCE = 1] = "SQQUENCE", a[a.REVERSE = 2] = "REVERSE";}(a.GetChatRoomType || (a.GetChatRoomType = {}));a.GetChatRoomType;!function (a) {a[a.CONNECTED = 0] = "CONNECTED", a[a.CONNECTING = 1] = "CONNECTING", a[a.DISCONNECTED = 2] = "DISCONNECTED", a[a.KICKED_OFFLINE_BY_OTHER_CLIENT = 6] = "KICKED_OFFLINE_BY_OTHER_CLIENT", a[a.WEBSOCKET_UNAVAILABLE = 7] = "WEBSOCKET_UNAVAILABLE", a[a.NETWORK_UNAVAILABLE = 3] = "NETWORK_UNAVAILABLE", a[a.DOMAIN_INCORRECT = 12] = "DOMAIN_INCORRECT", a[a.APPKEY_IS_FAKE = 20] = "APPKEY_IS_FAKE", a[a.CONNECTION_CLOSED = 4] = "CONNECTION_CLOSED", a[a.ULTRALIMIT = 1101] = "ULTRALIMIT", a[a.REQUEST_NAVI = 201] = "REQUEST_NAVI", a[a.RESPONSE_NAVI = 202] = "RESPONSE_NAVI", a[a.RESPONSE_NAVI_ERROR = 203] = "RESPONSE_NAVI_ERROR", a[a.RESPONSE_NAVI_TIMEOUT = 204] = "RESPONSE_NAVI_TIMEOUT";}(a.ConnectionStatus || (a.ConnectionStatus = {}));a.ConnectionStatus;!function (a) {a[a.DO_NOT_DISTURB = 0] = "DO_NOT_DISTURB", a[a.NOTIFY = 1] = "NOTIFY";}(a.ConversationNotificationStatus || (a.ConversationNotificationStatus = {}));a.ConversationNotificationStatus;!function (a) {a[a.NONE = 0] = "NONE", a[a.PRIVATE = 1] = "PRIVATE", a[a.DISCUSSION = 2] = "DISCUSSION", a[a.GROUP = 3] = "GROUP", a[a.CHATROOM = 4] = "CHATROOM", a[a.CUSTOMER_SERVICE = 5] = "CUSTOMER_SERVICE", a[a.SYSTEM = 6] = "SYSTEM", a[a.APP_PUBLIC_SERVICE = 7] = "APP_PUBLIC_SERVICE", a[a.PUBLIC_SERVICE = 8] = "PUBLIC_SERVICE";}(a.ConversationType || (a.ConversationType = {}));a.ConversationType;!function (a) {a[a.OPENED = 0] = "OPENED", a[a.CLOSED = 1] = "CLOSED";}(a.DiscussionInviteStatus || (a.DiscussionInviteStatus = {}));a.DiscussionInviteStatus;!function (a) {a[a.RECALL_MESSAGE = 25101] = "RECALL_MESSAGE", a[a.SEND_FREQUENCY_TOO_FAST = 20604] = "SEND_FREQUENCY_TOO_FAST", a[a.RC_MSG_UNAUTHORIZED = 20406] = "RC_MSG_UNAUTHORIZED", a[a.RC_DISCUSSION_GROUP_ID_INVALID = 20407] = "RC_DISCUSSION_GROUP_ID_INVALID", a[a.FORBIDDEN_IN_GROUP = 22408] = "FORBIDDEN_IN_GROUP", a[a.NOT_IN_DISCUSSION = 21406] = "NOT_IN_DISCUSSION", a[a.NOT_IN_GROUP = 22406] = "NOT_IN_GROUP", a[a.NOT_IN_CHATROOM = 23406] = "NOT_IN_CHATROOM", a[a.FORBIDDEN_IN_CHATROOM = 23408] = "FORBIDDEN_IN_CHATROOM", a[a.RC_CHATROOM_USER_KICKED = 23409] = "RC_CHATROOM_USER_KICKED", a[a.RC_CHATROOM_NOT_EXIST = 23410] = "RC_CHATROOM_NOT_EXIST", a[a.RC_CHATROOM_IS_FULL = 23411] = "RC_CHATROOM_IS_FULL", a[a.RC_CHATROOM_PATAMETER_INVALID = 23412] = "RC_CHATROOM_PATAMETER_INVALID", a[a.CHATROOM_GET_HISTORYMSG_ERROR = 23413] = "CHATROOM_GET_HISTORYMSG_ERROR", a[a.CHATROOM_NOT_OPEN_HISTORYMSG_STORE = 23414] = "CHATROOM_NOT_OPEN_HISTORYMSG_STORE", a[a.SENSITIVE_SHIELD = 21501] = "SENSITIVE_SHIELD", a[a.SENSITIVE_REPLACE = 21502] = "SENSITIVE_REPLACE", a[a.TIMEOUT = -1] = "TIMEOUT", a[a.UNKNOWN = -2] = "UNKNOWN", a[a.JOIN_IN_DISCUSSION = 21407] = "JOIN_IN_DISCUSSION", a[a.CREATE_DISCUSSION = 21408] = "CREATE_DISCUSSION", a[a.INVITE_DICUSSION = 21409] = "INVITE_DICUSSION", a[a.GET_USERINFO_ERROR = 23407] = "GET_USERINFO_ERROR", a[a.REJECTED_BY_BLACKLIST = 405] = "REJECTED_BY_BLACKLIST", a[a.RC_NET_CHANNEL_INVALID = 30001] = "RC_NET_CHANNEL_INVALID", a[a.RC_NET_UNAVAILABLE = 30002] = "RC_NET_UNAVAILABLE", a[a.RC_MSG_RESP_TIMEOUT = 30003] = "RC_MSG_RESP_TIMEOUT", a[a.RC_HTTP_SEND_FAIL = 30004] = "RC_HTTP_SEND_FAIL", a[a.RC_HTTP_REQ_TIMEOUT = 30005] = "RC_HTTP_REQ_TIMEOUT", a[a.RC_HTTP_RECV_FAIL = 30006] = "RC_HTTP_RECV_FAIL", a[a.RC_NAVI_RESOURCE_ERROR = 30007] = "RC_NAVI_RESOURCE_ERROR", a[a.RC_NODE_NOT_FOUND = 30008] = "RC_NODE_NOT_FOUND", a[a.RC_DOMAIN_NOT_RESOLVE = 30009] = "RC_DOMAIN_NOT_RESOLVE", a[a.RC_SOCKET_NOT_CREATED = 30010] = "RC_SOCKET_NOT_CREATED", a[a.RC_SOCKET_DISCONNECTED = 30011] = "RC_SOCKET_DISCONNECTED", a[a.RC_PING_SEND_FAIL = 30012] = "RC_PING_SEND_FAIL", a[a.RC_PONG_RECV_FAIL = 30013] = "RC_PONG_RECV_FAIL", a[a.RC_MSG_SEND_FAIL = 30014] = "RC_MSG_SEND_FAIL", a[a.RC_CONN_ACK_TIMEOUT = 31e3] = "RC_CONN_ACK_TIMEOUT", a[a.RC_CONN_PROTO_VERSION_ERROR = 31001] = "RC_CONN_PROTO_VERSION_ERROR", a[a.RC_CONN_ID_REJECT = 31002] = "RC_CONN_ID_REJECT", a[a.RC_CONN_SERVER_UNAVAILABLE = 31003] = "RC_CONN_SERVER_UNAVAILABLE", a[a.RC_CONN_USER_OR_PASSWD_ERROR = 31004] = "RC_CONN_USER_OR_PASSWD_ERROR", a[a.RC_CONN_NOT_AUTHRORIZED = 31005] = "RC_CONN_NOT_AUTHRORIZED", a[a.RC_CONN_REDIRECTED = 31006] = "RC_CONN_REDIRECTED", a[a.RC_CONN_PACKAGE_NAME_INVALID = 31007] = "RC_CONN_PACKAGE_NAME_INVALID", a[a.RC_CONN_APP_BLOCKED_OR_DELETED = 31008] = "RC_CONN_APP_BLOCKED_OR_DELETED", a[a.RC_CONN_USER_BLOCKED = 31009] = "RC_CONN_USER_BLOCKED", a[a.RC_DISCONN_KICK = 31010] = "RC_DISCONN_KICK", a[a.RC_DISCONN_EXCEPTION = 31011] = "RC_DISCONN_EXCEPTION", a[a.RC_QUERY_ACK_NO_DATA = 32001] = "RC_QUERY_ACK_NO_DATA", a[a.RC_MSG_DATA_INCOMPLETE = 32002] = "RC_MSG_DATA_INCOMPLETE", a[a.BIZ_ERROR_CLIENT_NOT_INIT = 33001] = "BIZ_ERROR_CLIENT_NOT_INIT", a[a.BIZ_ERROR_DATABASE_ERROR = 33002] = "BIZ_ERROR_DATABASE_ERROR", a[a.BIZ_ERROR_INVALID_PARAMETER = 33003] = "BIZ_ERROR_INVALID_PARAMETER", a[a.BIZ_ERROR_NO_CHANNEL = 33004] = "BIZ_ERROR_NO_CHANNEL", a[a.BIZ_ERROR_RECONNECT_SUCCESS = 33005] = "BIZ_ERROR_RECONNECT_SUCCESS", a[a.BIZ_ERROR_CONNECTING = 33006] = "BIZ_ERROR_CONNECTING", a[a.MSG_ROAMING_SERVICE_UNAVAILABLE = 33007] = "MSG_ROAMING_SERVICE_UNAVAILABLE", a[a.MSG_INSERT_ERROR = 33008] = "MSG_INSERT_ERROR", a[a.MSG_DEL_ERROR = 33009] = "MSG_DEL_ERROR", a[a.CONVER_REMOVE_ERROR = 34001] = "CONVER_REMOVE_ERROR", a[a.CONVER_GETLIST_ERROR = 34002] = "CONVER_GETLIST_ERROR", a[a.CONVER_SETOP_ERROR = 34003] = "CONVER_SETOP_ERROR", a[a.CONVER_TOTAL_UNREAD_ERROR = 34004] = "CONVER_TOTAL_UNREAD_ERROR", a[a.CONVER_TYPE_UNREAD_ERROR = 34005] = "CONVER_TYPE_UNREAD_ERROR", a[a.CONVER_ID_TYPE_UNREAD_ERROR = 34006] = "CONVER_ID_TYPE_UNREAD_ERROR", a[a.CONVER_CLEAR_ERROR = 34007] = "CONVER_CLEAR_ERROR", a[a.CLEAR_HIS_ERROR = 34010] = "CLEAR_HIS_ERROR", a[a.CLEAR_HIS_TYPE_ERROR = 34008] = "CLEAR_HIS_TYPE_ERROR", a[a.CLEAR_HIS_TIME_ERROR = 34011] = "CLEAR_HIS_TIME_ERROR", a[a.CONVER_GET_ERROR = 34009] = "CONVER_GET_ERROR", a[a.GROUP_SYNC_ERROR = 35001] = "GROUP_SYNC_ERROR", a[a.GROUP_MATCH_ERROR = 35002] = "GROUP_MATCH_ERROR", a[a.CHATROOM_ID_ISNULL = 36001] = "CHATROOM_ID_ISNULL", a[a.CHARTOOM_JOIN_ERROR = 36002] = "CHARTOOM_JOIN_ERROR", a[a.CHATROOM_HISMESSAGE_ERROR = 36003] = "CHATROOM_HISMESSAGE_ERROR", a[a.BLACK_ADD_ERROR = 37001] = "BLACK_ADD_ERROR", a[a.BLACK_GETSTATUS_ERROR = 37002] = "BLACK_GETSTATUS_ERROR", a[a.BLACK_REMOVE_ERROR = 37003] = "BLACK_REMOVE_ERROR", a[a.DRAF_GET_ERROR = 38001] = "DRAF_GET_ERROR", a[a.DRAF_SAVE_ERROR = 38002] = "DRAF_SAVE_ERROR", a[a.DRAF_REMOVE_ERROR = 38003] = "DRAF_REMOVE_ERROR", a[a.SUBSCRIBE_ERROR = 39001] = "SUBSCRIBE_ERROR", a[a.QNTKN_FILETYPE_ERROR = 41001] = "QNTKN_FILETYPE_ERROR", a[a.QNTKN_GET_ERROR = 41002] = "QNTKN_GET_ERROR", a[a.COOKIE_ENABLE = 51001] = "COOKIE_ENABLE", a[a.GET_MESSAGE_BY_ID_ERROR = 61001] = "GET_MESSAGE_BY_ID_ERROR", a[a.HAVNODEVICEID = 24001] = "HAVNODEVICEID", a[a.DEVICEIDISHAVE = 24002] = "DEVICEIDISHAVE", a[a.SUCCESS = 0] = "SUCCESS", a[a.FEILD = 24009] = "FEILD", a[a.VOIPISNULL = 24013] = "VOIPISNULL", a[a.NOENGINETYPE = 24010] = "NOENGINETYPE", a[a.NULLCHANNELNAME = 24011] = "NULLCHANNELNAME", a[a.VOIPDYANMICERROR = 24012] = "VOIPDYANMICERROR", a[a.NOVOIP = 24014] = "NOVOIP", a[a.INTERNALERRROR = 24015] = "INTERNALERRROR", a[a.VOIPCLOSE = 24016] = "VOIPCLOSE", a[a.CLOSE_BEFORE_OPEN = 51001] = "CLOSE_BEFORE_OPEN", a[a.ALREADY_IN_USE = 51002] = "ALREADY_IN_USE", a[a.INVALID_CHANNEL_NAME = 51003] = "INVALID_CHANNEL_NAME", a[a.VIDEO_CONTAINER_IS_NULL = 51004] = "VIDEO_CONTAINER_IS_NULL", a[a.DELETE_MESSAGE_ID_IS_NULL = 61001] = "DELETE_MESSAGE_ID_IS_NULL", a[a.CANCEL = 1] = "CANCEL", a[a.REJECT = 2] = "REJECT", a[a.HANGUP = 3] = "HANGUP", a[a.BUSYLINE = 4] = "BUSYLINE", a[a.NO_RESPONSE = 5] = "NO_RESPONSE", a[a.ENGINE_UN_SUPPORTED = 6] = "ENGINE_UN_SUPPORTED", a[a.NETWORK_ERROR = 7] = "NETWORK_ERROR", a[a.REMOTE_CANCEL = 11] = "REMOTE_CANCEL", a[a.REMOTE_REJECT = 12] = "REMOTE_REJECT", a[a.REMOTE_HANGUP = 13] = "REMOTE_HANGUP", a[a.REMOTE_BUSYLINE = 14] = "REMOTE_BUSYLINE", a[a.REMOTE_NO_RESPONSE = 15] = "REMOTE_NO_RESPONSE", a[a.REMOTE_ENGINE_UN_SUPPORTED = 16] = "REMOTE_ENGINE_UN_SUPPORTED", a[a.REMOTE_NETWORK_ERROR = 17] = "REMOTE_NETWORK_ERROR", a[a.VOIP_NOT_AVALIABLE = 18] = "VOIP_NOT_AVALIABLE";}(a.ErrorCode || (a.ErrorCode = {}));a.ErrorCode;!function (a) {a[a.MEDIA_AUDIO = 1] = "MEDIA_AUDIO", a[a.MEDIA_VEDIO = 2] = "MEDIA_VEDIO";}(a.VoIPMediaType || (a.VoIPMediaType = {}));a.VoIPMediaType;!function (a) {a[a.IMAGE = 1] = "IMAGE", a[a.AUDIO = 2] = "AUDIO", a[a.VIDEO = 3] = "VIDEO", a[a.FILE = 100] = "FILE";}(a.MediaType || (a.MediaType = {}));a.MediaType;!function (a) {a[a.SEND = 1] = "SEND", a[a.RECEIVE = 2] = "RECEIVE";}(a.MessageDirection || (a.MessageDirection = {}));a.MessageDirection;!function (a) {a[a.IMAGE = 1] = "IMAGE", a[a.AUDIO = 2] = "AUDIO", a[a.VIDEO = 3] = "VIDEO", a[a.FILE = 4] = "FILE";}(a.FileType || (a.FileType = {}));a.FileType;!function (a) {a[a.RC_REAL_TIME_LOCATION_NOT_INIT = -1] = "RC_REAL_TIME_LOCATION_NOT_INIT", a[a.RC_REAL_TIME_LOCATION_SUCCESS = 0] = "RC_REAL_TIME_LOCATION_SUCCESS", a[a.RC_REAL_TIME_LOCATION_GPS_DISABLED = 1] = "RC_REAL_TIME_LOCATION_GPS_DISABLED", a[a.RC_REAL_TIME_LOCATION_CONVERSATION_NOT_SUPPORT = 2] = "RC_REAL_TIME_LOCATION_CONVERSATION_NOT_SUPPORT", a[a.RC_REAL_TIME_LOCATION_IS_ON_GOING = 3] = "RC_REAL_TIME_LOCATION_IS_ON_GOING", a[a.RC_REAL_TIME_LOCATION_EXCEED_MAX_PARTICIPANT = 4] = "RC_REAL_TIME_LOCATION_EXCEED_MAX_PARTICIPANT", a[a.RC_REAL_TIME_LOCATION_JOIN_FAILURE = 5] = "RC_REAL_TIME_LOCATION_JOIN_FAILURE", a[a.RC_REAL_TIME_LOCATION_START_FAILURE = 6] = "RC_REAL_TIME_LOCATION_START_FAILURE", a[a.RC_REAL_TIME_LOCATION_NETWORK_UNAVAILABLE = 7] = "RC_REAL_TIME_LOCATION_NETWORK_UNAVAILABLE";}(a.RealTimeLocationErrorCode || (a.RealTimeLocationErrorCode = {}));a.RealTimeLocationErrorCode;!function (a) {a[a.RC_REAL_TIME_LOCATION_STATUS_IDLE = 0] = "RC_REAL_TIME_LOCATION_STATUS_IDLE", a[a.RC_REAL_TIME_LOCATION_STATUS_INCOMING = 1] = "RC_REAL_TIME_LOCATION_STATUS_INCOMING", a[a.RC_REAL_TIME_LOCATION_STATUS_OUTGOING = 2] = "RC_REAL_TIME_LOCATION_STATUS_OUTGOING", a[a.RC_REAL_TIME_LOCATION_STATUS_CONNECTED = 3] = "RC_REAL_TIME_LOCATION_STATUS_CONNECTED";}(a.RealTimeLocationStatus || (a.RealTimeLocationStatus = {}));a.RealTimeLocationStatus;!function (a) {a[a.READ = 1] = "READ", a[a.LISTENED = 2] = "LISTENED", a[a.DOWNLOADED = 4] = "DOWNLOADED", a[a.RETRIEVED = 8] = "RETRIEVED", a[a.UNREAD = 0] = "UNREAD";}(a.ReceivedStatus || (a.ReceivedStatus = {}));a.ReceivedStatus;!function (a) {a[a.READ = 1] = "READ", a[a.LISTENED = 2] = "LISTENED", a[a.DOWNLOADED = 4] = "DOWNLOADED", a[a.RETRIEVED = 8] = "RETRIEVED", a[a.UNREAD = 0] = "UNREAD";}(a.ReadStatus || (a.ReadStatus = {}));a.ReadStatus;!function (a) {a[a.EXACT = 0] = "EXACT", a[a.FUZZY = 1] = "FUZZY";}(a.SearchType || (a.SearchType = {}));a.SearchType;!function (a) {a[a.SENDING = 10] = "SENDING", a[a.FAILED = 20] = "FAILED", a[a.SENT = 30] = "SENT", a[a.RECEIVED = 40] = "RECEIVED", a[a.READ = 50] = "READ", a[a.DESTROYED = 60] = "DESTROYED";}(a.SentStatus || (a.SentStatus = {}));a.SentStatus;!function (a) {a[a.ACCEPTED = 0] = "ACCEPTED", a[a.UNACCEPTABLE_PROTOCOL_VERSION = 1] = "UNACCEPTABLE_PROTOCOL_VERSION", a[a.IDENTIFIER_REJECTED = 2] = "IDENTIFIER_REJECTED", a[a.SERVER_UNAVAILABLE = 3] = "SERVER_UNAVAILABLE", a[a.TOKEN_INCORRECT = 4] = "TOKEN_INCORRECT", a[a.NOT_AUTHORIZED = 5] = "NOT_AUTHORIZED", a[a.REDIRECT = 6] = "REDIRECT", a[a.PACKAGE_ERROR = 7] = "PACKAGE_ERROR", a[a.APP_BLOCK_OR_DELETE = 8] = "APP_BLOCK_OR_DELETE", a[a.BLOCK = 9] = "BLOCK", a[a.TOKEN_EXPIRE = 10] = "TOKEN_EXPIRE", a[a.DEVICE_ERROR = 11] = "DEVICE_ERROR";}(a.ConnectionState || (a.ConnectionState = {}));a.ConnectionState;!function (a) {a[a.ROOM = 1] = "ROOM", a[a.PERSON = 2] = "PERSON";}(a.RTCAPIType || (a.RTCAPIType = {}));a.RTCAPIType;}(RongIMLib || (RongIMLib = {}));var RongIMLib;!function (a) {var b = function () {function b() {}return b.getInstance = function () {if (!b._instance) throw new Error("RongIMClient is not initialized. Call .init() method first.");return b._instance;}, b.showError = function (a) {console && console.error && console.error(JSON.stringify(a));}, b.logger = function (a) {var c = a.code,d = b.LogFactory[c] || a;d.funcName = a.funcName, d.msg = a.msg || d.msg, b._memoryStore.depend.showError && b.showError(d);}, b.logCallback = function (a, c) {return { onSuccess: a.onSuccess, onError: function onError(d) {b.logger({ code: d, funcName: c }), a.onError(d);} };}, b.logSendCallback = function (a, c) {return { onSuccess: a.onSuccess, onError: function onError(d, e) {b.logger({ code: d, funcName: c }), a.onError(d, e);}, onBefore: a.onBefore };}, b.init = function (c, d, e, f) {if (b._instance) return b._memoryStore.sdkInfo;b._instance = new b(), e = e || {};var g = "http://",h = "ws://";"https:" == location.protocol && (h = "wss://", g = "https://");var i = !1;"function" != typeof WebSocket && (i = !0);var j = function j() {var a = typeof WebSocket,b = "number" == typeof WebSocket.OPEN;return a && b;};"object" == typeof WebSocket && j() && (i = !1);var k = function k() {return document.documentElement.addBehavior;};a.RongUtil.supportLocalStorage() ? b._storageProvider = new a.LocalStorageProvider() : k() ? b._storageProvider = new a.UserDataProvider() : b._storageProvider = new a.MemeoryProvider();var l = b._storageProvider.getItem("serverIndex");b.serverStore.index = l || 0;var m = "{0}{1}",n = { api: "api.cn.ronghub.com" };a.RongUtil.forEach(n, function (b, c) {n[c] = a.RongUtil.stringFormat(m, [g, b]);}), a.RongUtil.forEach(n, function (b, c) {var d = c in e,f = { path: e[c], tmpl: m, protocol: g, sub: !0 };b = d ? a.RongUtil.formatProtoclPath(f) : b, e[c] = b;});var o = e.navigaters || [];e.navi && (o = [e.navi]), !e.navi && a.RongUtil.isEqual(o.length, 0) && (o = ["nav.cn.ronghub.com", "nav2-cn.ronghub.com"]), a.RongUtil.forEach(o, function (b, c) {var d = { path: b, tmpl: m, protocol: g, sub: !0 };b = a.RongUtil.formatProtoclPath(d), o[c] = b;});var p = { protobuf: "cdn.ronghub.com/protobuf-2.3.5.min.js" };a.RongUtil.forEach(p, function (b, c) {p[c] = a.RongUtil.stringFormat(m, [g, b]);}), a.RongUtil.extend(p, e);var q = { isPolling: i, wsScheme: h, protocol: g, showError: !0, openMp: !0, snifferTime: 2e3, naviTimeout: 5e3, navigaters: o, maxNaviRetry: 10 };delete e.navigaters, a.RongUtil.extend(q, e), a.RongUtil.isFunction(e.protobuf) && (b.Protobuf = e.protobuf), b.userStatusObserver = new a.RongObserver(), new a.FeaturePatcher().patchAll();var r = { token: "", callback: null, lastReadTime: new a.LimitableMap(), historyMessageLimit: new a.MemoryCache(), conversationList: [], appKey: c, publicServiceMap: new a.PublicServiceMap(), providerType: 1, deltaTime: 0, filterMessages: [], isSyncRemoteConverList: !0, otherDevice: !1, custStore: {}, converStore: { latestMessage: {} }, connectAckTime: 0, voipStategy: 0, isFirstPingMsg: !0, depend: e, listenerList: b._memoryStore.listenerList, notification: {} };b._memoryStore = r, d && "[object Object]" == Object.prototype.toString.call(d) ? b._dataAccessProvider = d : b._dataAccessProvider = new a.ServerDataProvider(), e.appCallback = f;var s = b._dataAccessProvider.init(c, e);return b._memoryStore.sdkInfo = s, b._dataAccessProvider.setServerInfo({ navi: location.protocol + e.navi + "/navi.xml" }), b.MessageParams = { TextMessage: { objectName: "RC:TxtMsg", msgTag: new a.MessageTag(!0, !0) }, ImageMessage: { objectName: "RC:ImgMsg", msgTag: new a.MessageTag(!0, !0) }, DiscussionNotificationMessage: { objectName: "RC:DizNtf", msgTag: new a.MessageTag(!1, !0) }, VoiceMessage: { objectName: "RC:VcMsg", msgTag: new a.MessageTag(!0, !0) }, RichContentMessage: { objectName: "RC:ImgTextMsg", msgTag: new a.MessageTag(!0, !0) }, FileMessage: { objectName: "RC:FileMsg", msgTag: new a.MessageTag(!0, !0) }, HQVoiceMessage: { objectName: "RC:HQVCMsg", msgTag: new a.MessageTag(!0, !0) }, HandshakeMessage: { objectName: "", msgTag: new a.MessageTag(!0, !0) }, UnknownMessage: { objectName: "", msgTag: new a.MessageTag(!0, !0) }, LocationMessage: { objectName: "RC:LBSMsg", msgTag: new a.MessageTag(!0, !0) }, InformationNotificationMessage: { objectName: "RC:InfoNtf", msgTag: new a.MessageTag(!1, !0) }, ContactNotificationMessage: { objectName: "RC:ContactNtf", msgTag: new a.MessageTag(!1, !0) }, ProfileNotificationMessage: { objectName: "RC:ProfileNtf", msgTag: new a.MessageTag(!1, !0) }, CommandNotificationMessage: { objectName: "RC:CmdNtf", msgTag: new a.MessageTag(!0, !0) }, PublicServiceRichContentMessage: { objectName: "RC:PSImgTxtMsg", msgTag: new a.MessageTag(!0, !0) }, PublicServiceMultiRichContentMessage: { objectName: "RC:PSMultiImgTxtMsg", msgTag: new a.MessageTag(!0, !0) }, JrmfRedPacketMessage: { objectName: "RCJrmf:RpMsg", msgTag: new a.MessageTag(!0, !0) }, JrmfRedPacketOpenedMessage: { objectName: "RCJrmf:RpOpendMsg", msgTag: new a.MessageTag(!0, !0) }, GroupNotificationMessage: { objectName: "RC:GrpNtf", msgTag: new a.MessageTag(!1, !0) }, CommandMessage: { objectName: "RC:CmdMsg", msgTag: new a.MessageTag(!1, !1) }, TypingStatusMessage: { objectName: "RC:TypSts", msgTag: new a.MessageTag(!1, !1) }, PublicServiceCommandMessage: { objectName: "RC:PSCmd",
            msgTag: new a.MessageTag(!1, !1) }, RecallCommandMessage: { objectName: "RC:RcCmd", msgTag: new a.MessageTag(!1, !0) }, SyncReadStatusMessage: { objectName: "RC:SRSMsg", msgTag: new a.MessageTag(!1, !1) }, ReadReceiptRequestMessage: { objectName: "RC:RRReqMsg", msgTag: new a.MessageTag(!1, !1) }, ReadReceiptResponseMessage: { objectName: "RC:RRRspMsg", msgTag: new a.MessageTag(!1, !1) }, ChangeModeResponseMessage: { objectName: "RC:CsChaR", msgTag: new a.MessageTag(!1, !1) }, ChangeModeMessage: { objectName: "RC:CSCha", msgTag: new a.MessageTag(!1, !1) }, EvaluateMessage: { objectName: "RC:CsEva", msgTag: new a.MessageTag(!1, !1) }, CustomerContact: { objectName: "RC:CsContact", msgTag: new a.MessageTag(!1, !1) }, HandShakeMessage: { objectName: "RC:CsHs", msgTag: new a.MessageTag(!1, !1) }, HandShakeResponseMessage: { objectName: "RC:CsHsR", msgTag: new a.MessageTag(!1, !1) }, SuspendMessage: { objectName: "RC:CsSp", msgTag: new a.MessageTag(!1, !1) }, TerminateMessage: { objectName: "RC:CsEnd", msgTag: new a.MessageTag(!1, !1) }, CustomerStatusUpdateMessage: { objectName: "RC:CsUpdate", msgTag: new a.MessageTag(!1, !1) }, ReadReceiptMessage: { objectName: "RC:ReadNtf", msgTag: new a.MessageTag(!1, !1) } }, b.MessageParams.AcceptMessage = { objectName: "RC:VCAccept", msgTag: new a.MessageTag(!1, !1) }, b.MessageParams.RingingMessage = { objectName: "RC:VCRinging", msgTag: new a.MessageTag(!1, !1) }, b.MessageParams.SummaryMessage = { objectName: "RC:VCSummary", msgTag: new a.MessageTag(!1, !1) }, b.MessageParams.HungupMessage = { objectName: "RC:VCHangup", msgTag: new a.MessageTag(!1, !1) }, b.MessageParams.InviteMessage = { objectName: "RC:VCInvite", msgTag: new a.MessageTag(!1, !1) }, b.MessageParams.MediaModifyMessage = { objectName: "RC:VCModifyMedia", msgTag: new a.MessageTag(!1, !1) }, b.MessageParams.MemberModifyMessage = { objectName: "RC:VCModifyMem", msgTag: new a.MessageTag(!1, !1) }, b.MessageType = { TextMessage: "TextMessage", ImageMessage: "ImageMessage", DiscussionNotificationMessage: "DiscussionNotificationMessage", VoiceMessage: "VoiceMessage", RichContentMessage: "RichContentMessage", HandshakeMessage: "HandshakeMessage", UnknownMessage: "UnknownMessage", LocationMessage: "LocationMessage", InformationNotificationMessage: "InformationNotificationMessage", ContactNotificationMessage: "ContactNotificationMessage", ProfileNotificationMessage: "ProfileNotificationMessage", CommandNotificationMessage: "CommandNotificationMessage", CommandMessage: "CommandMessage", TypingStatusMessage: "TypingStatusMessage", ChangeModeResponseMessage: "ChangeModeResponseMessage", ChangeModeMessage: "ChangeModeMessage", EvaluateMessage: "EvaluateMessage", HandShakeMessage: "HandShakeMessage", HandShakeResponseMessage: "HandShakeResponseMessage", SuspendMessage: "SuspendMessage", TerminateMessage: "TerminateMessage", CustomerContact: "CustomerContact", CustomerStatusUpdateMessage: "CustomerStatusUpdateMessage", SyncReadStatusMessage: "SyncReadStatusMessage", ReadReceiptRequestMessage: "ReadReceiptRequestMessage", ReadReceiptResponseMessage: "ReadReceiptResponseMessage", FileMessage: "FileMessage", HQVoiceMessage: "HQVoiceMessage", AcceptMessage: "AcceptMessage", RingingMessage: "RingingMessage", SummaryMessage: "SummaryMessage", HungupMessage: "HungupMessage", InviteMessage: "InviteMessage", MediaModifyMessage: "MediaModifyMessage", MemberModifyMessage: "MemberModifyMessage", JrmfRedPacketMessage: "JrmfRedPacketMessage", JrmfRedPacketOpenedMessage: "JrmfRedPacketOpenedMessage", GroupNotificationMessage: "GroupNotificationMessage", PublicServiceRichContentMessage: "PublicServiceRichContentMessage", PublicServiceMultiRichContentMessage: "PublicServiceMultiRichContentMessage", PublicServiceCommandMessage: "PublicServiceCommandMessage", RecallCommandMessage: "RecallCommandMessage", ReadReceiptMessage: "ReadReceiptMessage" }, b.LogFactory = { "-1": { code: "-1", msg: "æœåŠ¡å™¨è¶…æ—¶" }, "-2": { code: "-2", msg: "æœªçŸ¥åŽŸå› å¤±è´¥" }, "-3": { code: "-3", msg: "å‚æ•°é”™è¯¯" }, "-4": { code: "-4", msg: "å‚æ•°ä¸æ­£ç¡®æˆ–å°šæœªå®žä¾‹åŒ–" }, 25101: { code: "25101", msg: "æ’¤å›žæ¶ˆæ¯å‚æ•°é”™è¯¯", desc: "è¯·æ£€æŸ¥æ’¤å›žæ¶ˆæ¯å‚æ•° https://rongcloud.github.io/websdk-demo/api-test.html" }, 25102: { code: "25101", msg: "åªèƒ½æ’¤å›žè‡ªå‘å‘é€çš„æ¶ˆæ¯" }, 20604: { code: "20604", msg: "å‘é€é¢‘çŽ‡è¿‡å¿«", desc: "https://developer.rongcloud.cn/ticket/info/9Q3L6vRKd1cLS7rycA==?type=1" }, 20406: { code: "20406", msg: "è¢«ç¦è¨€" }, 23407: { code: "23407", msg: "èŽ·å–ç”¨æˆ·å¤±è´¥" }, 20407: { code: "20407", msg: "ç¾¤ç»„Idæ— æ•ˆ" }, 22408: { code: "22408", msg: "ç¾¤ç»„è¢«ç¦è¨€" }, 22406: { code: "22406", msg: "ä¸åœ¨ç¾¤ç»„" }, 35001: { code: "35001", msg: "ç¾¤ç»„åŒæ­¥å¼‚å¸¸" }, 35002: { code: "35002", msg: "åŒ¹é…ç¾¤ä¿¡æ¯å¼‚å¸¸" }, 21406: { code: "21406", msg: "ä¸åœ¨è®¨è®ºç»„" }, 21407: { code: "21407", msg: "åŠ å…¥è®¨è®ºå¤±è´¥" }, 21408: { code: "21408", msg: "åˆ›å»ºè®¨è®ºç»„å¤±è´¥" }, 21409: { code: "21409", msg: "è®¾ç½®è®¨è®ºç»„é‚€è¯·çŠ¶æ€å¤±è´¥" }, 23406: { code: "23406", msg: "ä¸åœ¨èŠå¤©å®¤" }, 23408: { code: "23408", msg: "èŠå¤©å®¤è¢«ç¦è¨€" }, 23409: { code: "23409", msg: "èŠå¤©å®¤ä¸­æˆå‘˜è¢«è¸¢å‡º" }, 23410: { code: "23410", msg: "èŠå¤©å®¤ä¸å­˜åœ¨" }, 23411: { code: "23411", msg: "èŠå¤©å®¤æˆå‘˜å·²æ»¡" }, 23412: { code: "23412", msg: "èŽ·å–èŠå¤©å®¤ä¿¡æ¯å‚æ•°æ— æ•ˆ" }, 23413: { code: "23413", msg: "èŠå¤©å®¤å¼‚å¸¸" }, 23414: { code: "23414", msg: "æ²¡æœ‰æ‰“å¼€èŠå¤©å®¤æ¶ˆæ¯å­˜å‚¨" }, 36001: { code: "36001", msg: "åŠ å…¥èŠå¤©å®¤Idä¸ºç©º" }, 36002: { code: "36002", msg: "åŠ å…¥èŠå¤©å®¤å¤±è´¥" }, 36003: { code: "36003", msg: "æ‹‰å–èŠå¤©å®¤åŽ†å²æ¶ˆæ¯å¤±è´¥" }, 24001: { code: "24001", msg: "æ²¡æœ‰æ³¨å†ŒDeviveId ä¹Ÿå°±æ˜¯ç”¨æˆ·æ²¡æœ‰ç™»é™†" }, 24002: { code: "24002", msg: "ç”¨æˆ·å·²ç»å­˜åœ¨" }, 0: { code: "0", msg: "æˆåŠŸ" }, 24009: { code: "24009", msg: "æ²¡æœ‰å¯¹åº”çš„ç”¨æˆ·æˆ–token" }, 24013: { code: "24013", msg: "voipä¸ºç©º" }, 24010: { code: "24010", msg: "ä¸æ”¯æŒçš„Voipå¼•æ“Ž" }, 24011: { code: "24011", msg: "channelName æ˜¯ç©º" }, 24012: { code: "24012", msg: "ç”ŸæˆVoipkeyå¤±è´¥" }, 24014: { code: "24014", msg: "æ²¡æœ‰é…ç½®voip" }, 24015: { code: "24015", msg: "æœåŠ¡å™¨å†…éƒ¨é”™è¯¯" }, 24016: { code: "24016", msg: "VOIP close" }, 30001: { code: "30001", msg: "é€šä¿¡è¿‡ç¨‹ä¸­ï¼Œå½“å‰Socketä¸å­˜åœ¨" }, 30002: { code: "30002", msg: "Socketè¿žæŽ¥ä¸å¯ç”¨" }, 30003: { code: "30003", msg: "é€šä¿¡è¶…æ—¶" }, 30004: { code: "30004", msg: "å¯¼èˆªæ“ä½œæ—¶ï¼ŒHttpè¯·æ±‚å¤±è´¥" }, 30005: { code: "30005", msg: "HTTPè¯·æ±‚å¤±è´¥" }, 30006: { code: "30006", msg: "HTTPæŽ¥æ”¶å¤±è´¥" }, 30007: { code: "30007", msg: "å¯¼èˆªèµ„æºé”™è¯¯" }, 30008: { code: "30008", msg: "æ²¡æœ‰æœ‰æ•ˆæ•°æ®" }, 30009: { code: "30009", msg: "ä¸å­˜åœ¨æœ‰æ•ˆ IP åœ°å€" }, 30010: { code: "30010", msg: "åˆ›å»º Socket å¤±è´¥" }, 30011: { code: "30011", msg: " Socket è¢«æ–­å¼€" }, 30012: { code: "30012", msg: "PING æ“ä½œå¤±è´¥" }, 30013: { code: "30013", msg: "PING è¶…æ—¶" }, 30014: { code: "30014", msg: "æ¶ˆæ¯å‘é€å¤±è´¥" }, 30016: { code: "30016", msg: "æ¶ˆæ¯å¤§å°è¶…é™ï¼Œæœ€å¤§ 128 KB" }, 31000: { code: "31000", msg: "åš connect è¿žæŽ¥æ—¶ï¼Œæ”¶åˆ°çš„ ACK è¶…æ—¶" }, 31001: { code: "31001", msg: "å‚æ•°é”™è¯¯" }, 31002: { code: "31002", msg: "å‚æ•°é”™è¯¯ï¼ŒApp Id é”™è¯¯" }, 31003: { code: "31003", msg: "æœåŠ¡å™¨ä¸å¯ç”¨" }, 31004: { code: "31004", msg: "Token é”™è¯¯" }, 31005: { code: "31005", msg: "App Id ä¸Ž Token ä¸åŒ¹é…" }, 31006: { code: "31006", msg: "é‡å®šå‘ï¼Œåœ°å€é”™è¯¯" }, 31007: { code: "31007", msg: "NAME ä¸ŽåŽå°æ³¨å†Œä¿¡æ¯ä¸ä¸€è‡´" }, 31008: { code: "31008", msg: "APP è¢«å±è”½ã€åˆ é™¤æˆ–ä¸å­˜åœ¨" }, 31009: { code: "31009", msg: "ç”¨æˆ·è¢«å±è”½" }, 31010: { code: "31010", msg: "Disconnectï¼Œç”±æœåŠ¡å™¨è¿”å›žï¼Œæ¯”å¦‚ç”¨æˆ·äº’è¸¢" }, 31011: { code: "31011", msg: "Disconnectï¼Œç”±æœåŠ¡å™¨è¿”å›žï¼Œæ¯”å¦‚ç”¨æˆ·äº’è¸¢" }, 32001: { code: "32001", msg: "åè®®å±‚å†…éƒ¨é”™è¯¯ã€‚queryï¼Œä¸Šä¼ ä¸‹è½½è¿‡ç¨‹ä¸­æ•°æ®é”™è¯¯" }, 32002: { code: "32002", msg: "åè®®å±‚å†…éƒ¨é”™è¯¯" }, 33001: { code: "33001", msg: "æœªè°ƒç”¨ init åˆå§‹åŒ–å‡½æ•°" }, 33002: { code: "33002", msg: "æ•°æ®åº“åˆå§‹åŒ–å¤±è´¥" }, 33003: { code: "33003", msg: "ä¼ å…¥å‚æ•°æ— æ•ˆ" }, 33004: { code: "33004", msg: "é€šé“æ— æ•ˆ" }, 33005: { code: "33005", msg: "é‡æ–°è¿žæŽ¥æˆåŠŸ" }, 33006: { code: "33006", msg: "è¿žæŽ¥ä¸­ï¼Œå†è°ƒç”¨ connect è¢«æ‹’ç»" }, 33007: { code: "33007", msg: "æ¶ˆæ¯æ¼«æ¸¸æœåŠ¡æœªå¼€é€š" }, 33008: { code: "33008", msg: "æ¶ˆæ¯æ·»åŠ å¤±è´¥" }, 33009: { code: "33009", msg: "æ¶ˆæ¯åˆ é™¤å¤±è´¥" }, 34001: { code: "34001", msg: "åˆ é™¤ä¼šè¯å¤±è´¥" }, 34002: { code: "34002", msg: "æ‹‰å–åŽ†å²æ¶ˆæ¯å¤±è´¥" }, 34003: { code: "34003", msg: "ä¼šè¯æŒ‡å®šå¼‚å¸¸" }, 34004: { code: "34004", msg: "èŽ·å–ä¼šè¯æœªè¯»æ¶ˆæ¯æ€»æ•°å¤±è´¥" }, 34005: { code: "34005", msg: "èŽ·å–æŒ‡å®šä¼šè¯ç±»åž‹æœªè¯»æ¶ˆæ¯æ•°å¼‚å¸¸" }, 34006: { code: "34006", msg: "èŽ·å–æŒ‡å®šç”¨æˆ·ID&ä¼šè¯ç±»åž‹æœªè¯»æ¶ˆæ¯æ•°å¼‚å¸¸" }, 34007: { code: "34007", msg: "æ¸…é™¤ä¼šè¯æ¶ˆæ¯å¼‚å¸¸" }, 34008: { code: "34008", msg: "èŽ·å–ä¼šè¯æ¶ˆæ¯å¼‚å¸¸" }, 34009: { code: "34009", msg: "æ¸…é™¤åŽ†å²æ¶ˆæ¯ä¼šè¯ç±»åž‹ä¸æ­£ç¡®" }, 34010: { code: "34010", msg: "æ¸…é™¤åŽ†å²æ¶ˆæ¯å¤±è´¥ï¼Œè¯·æ£€æŸ¥ä¼ å…¥å‚æ•°" }, 37001: { code: "37001", msg: "åŠ å…¥é»‘åå•å¼‚å¸¸" }, 37002: { code: "37002", msg: "èŽ·å¾—æŒ‡å®šäººå‘˜å†é»‘åå•ä¸­çš„çŠ¶æ€å¼‚å¸¸" }, 37003: { code: "37003", msg: "ç§»é™¤é»‘åå•å¼‚å¸¸" }, 405: { code: "405", msg: "åœ¨é»‘åå•ä¸­" }, 38001: { code: "38001", msg: "èŽ·å–è‰ç¨¿å¤±è´¥" }, 38002: { code: "38002", msg: "ä¿å­˜è‰ç¨¿å¤±è´¥" }, 38003: { code: "38003", msg: "åˆ é™¤è‰ç¨¿å¤±è´¥" }, 39001: { code: "39001", msg: "å…³æ³¨å…¬ä¼—å·å¤±è´¥" }, 41001: { code: "41001", msg: "æ–‡ä»¶ç±»åž‹é”™è¯¯" }, 41002: { code: "41002", msg: "èŽ·å–ä¸ƒç‰›tokenå¤±è´¥" }, 51001: { code: "51001", msg: "æœªå®‰è£…æˆ–æœªå¯åŠ¨æ’ä»¶" }, 51002: { code: "51002", msg: "è§†é¢‘å·²ç»å­˜åœ¨" }, 51003: { code: "51003", msg: "æ— æ•ˆçš„channelName" }, 51004: { code: "51004", msg: "è§†é¢‘å†…å®¹ä¸ºç©º" }, 61001: { code: "61001", msg: "åˆ é™¤æ¶ˆæ¯æ•°ç»„é•¿åº¦ä¸º 0" } }, s;}, b.initApp = function (a, c) {b.init(a.appkey, a.dataAccessProvider, a.opts, function () {var a = b._instance;c(null, a);});}, b.connect = function (c, d, e, f) {a.CheckParam.getInstance().check(["string", "object", "string|null|object|global|undefined", "object|null|global|undefined"], "connect", !0, arguments);var g = { onSuccess: d.onSuccess, onTokenIncorrect: d.onTokenIncorrect, onError: function onError(a) {b.logger({ code: a, funcName: "connect" }), d.onError(a);} };b._dataAccessProvider.connect(c, g, e, f);}, b.reconnect = function (a, c) {var d = { onSuccess: a.onSuccess, onTokenIncorrect: a.onTokenIncorrect, onError: function onError(c) {b.logger({ code: c, funcName: "connect" }), a.onError(c);} };b._dataAccessProvider.reconnect(d, c);}, b.registerMessageType = function (a, c, d, e, f) {b._dataAccessProvider.registerMessageType(a, c, d, e, f), b.RegisterMessage[a].messageName = a, b.MessageType[a] = a, b.MessageParams[a] = { objectName: c, msgTag: d };}, b.prototype.registerMessageTypes = function (a) {a = a || {}, b._dataAccessProvider.registerMessageTypes(a);}, b.setConnectionStatusListener = function (a) {b._dataAccessProvider ? b._dataAccessProvider.setConnectionStatusListener(a) : b._memoryStore.listenerList.push(a);}, b.statusWatch = function (a) {"function" == typeof a && b.statusListeners.push(a);}, b.setOnReceiveMessageListener = function (a) {b._dataAccessProvider ? b._dataAccessProvider.setOnReceiveMessageListener(a) : b._memoryStore.listenerList.push(a);}, b.prototype.logout = function () {b._dataAccessProvider.logout();}, b.prototype.disconnect = function () {b._dataAccessProvider.disconnect();}, b.prototype.startCustomService = function (c, d, e) {if (c && d) {var f = new a.HandShakeMessage(e),g = this;a.RongIMClient._memoryStore.custStore.isInit = !0, b.getInstance().sendMessage(a.ConversationType.CUSTOMER_SERVICE, c, f, { onSuccess: function onSuccess(a) {a.isBlack ? (d.onError(), g.stopCustomeService(c, { onSuccess: function onSuccess() {}, onError: function onError() {} })) : d.onSuccess();}, onError: function onError() {d.onError();}, onBefore: function onBefore() {} });}}, b.prototype.stopCustomeService = function (c, d) {if (c && d) {var e = b._memoryStore.custStore[c];if (e) {var f = new a.SuspendMessage({ sid: e.sid, uid: e.uid, pid: e.pid });this.sendCustMessage(c, f, { onSuccess: function onSuccess() {setTimeout(function () {d.onSuccess();});}, onError: function onError() {setTimeout(function () {d.onError();});} });}}}, b.prototype.switchToHumanMode = function (c, d) {if (c && d) {var e = b._memoryStore.custStore[c];if (e) {var f = new a.ChangeModeMessage({ sid: e.sid, uid: e.uid, pid: e.pid });this.sendCustMessage(c, f, d);}}}, b.prototype.evaluateRebotCustomService = function (c, d, e, f) {if (c && f) {var g = b._memoryStore.custStore[c];if (g) {var h = new a.EvaluateMessage({ sid: g.sid, uid: g.uid, pid: g.pid, isRobotResolved: d, sugest: e, type: 0 });this.sendCustMessage(c, h, f);}}}, b.prototype.evaluateHumanCustomService = function (c, d, e, f) {if (c && f) {var g = b._memoryStore.custStore[c];if (g) {var h = new a.EvaluateMessage({ sid: g.sid, uid: g.uid, pid: g.pid, humanValue: d, sugest: e, type: 1 });this.sendCustMessage(c, h, f);}}}, b.prototype.sendCustMessage = function (c, d, e) {b.getInstance().sendMessage(a.ConversationType.CUSTOMER_SERVICE, c, d, { onSuccess: function onSuccess(a) {e.onSuccess();}, onError: function onError() {e.onError();}, onBefore: function onBefore() {} });}, b.prototype.getCurrentConnectionStatus = function () {return b._dataAccessProvider.getCurrentConnectionStatus();}, b.prototype.getConnectionChannel = function () {return a.Transportations._TransportType == a.Socket.XHR_POLLING ? a.ConnectionChannel.XHR_POLLING : a.Transportations._TransportType == a.Socket.WEBSOCKET ? a.ConnectionChannel.WEBSOCKET : void 0;}, b.prototype.getStorageProvider = function () {return 1 == b._memoryStore.providerType ? "ServerDataProvider" : "OtherDataProvider";}, b.prototype.setFilterMessages = function (a) {"[object Array]" == Object.prototype.toString.call(a) && (b._memoryStore.filterMessages = a);}, b.prototype.getAgoraDynamicKey = function (a, c, d) {b._dataAccessProvider.getAgoraDynamicKey(a, c, d);}, b.prototype.getCurrentUserId = function () {return a.Bridge._client.userId;}, b.prototype.getDeltaTime = function () {return b._dataAccessProvider.getDelaTime();}, b.prototype.getMessage = function (a, c) {b._dataAccessProvider.getMessage(a, b.logCallback(c, "getMessage"));}, b.prototype.deleteLocalMessages = function (a, c, d, e) {b._dataAccessProvider.removeLocalMessage(a, c, d, b.logCallback(e, "deleteLocalMessages"));}, b.prototype.updateMessage = function (a, c) {b._dataAccessProvider.updateMessage(a, b.logCallback(c, "updateMessage"));}, b.prototype.clearData = function () {return b._dataAccessProvider.clearData();}, b.prototype.clearMessages = function (a, c, d) {b._dataAccessProvider.clearMessages(a, c, { onSuccess: function onSuccess(a) {setTimeout(function () {d.onSuccess(a);});}, onError: function onError(a) {setTimeout(function () {b.logger({ code: a, funcName: "clearMessages" }), d.onError(a);});} });}, b.prototype.clearMessagesUnreadStatus = function (a, c, d) {b._dataAccessProvider.updateMessages(a, c, "readStatus", null, { onSuccess: function onSuccess(a) {setTimeout(function () {d.onSuccess(a);});}, onError: function onError(a) {setTimeout(function () {b.logger({ code: a, funcName: "clearMessagesUnreadStatus" }), d.onError(a);});} });}, b.prototype.deleteRemoteMessages = function (c, d, e, f) {if (a.CheckParam.getInstance().check(["number", "string|number", "array", "object"], "deleteRemoteMessages", !1, arguments), 0 == e.length) {var g = a.ErrorCode.DELETE_MESSAGE_ID_IS_NULL;return b.logger({ code: g, funcName: "deleteRemoteMessages" }), void f.onError(a.ErrorCode.DELETE_MESSAGE_ID_IS_NULL);}e.length > 100 && (e.length = 100), f.onSuccess(!0);}, b.prototype.deleteMessages = function (a, c, d, e) {b._dataAccessProvider.removeMessage(a, c, d, { onSuccess: function onSuccess(a) {setTimeout(function () {e.onSuccess(a);});}, onError: function onError(a) {setTimeout(function () {b.logger({ code: a, funcName: "deleteMessages" }), e.onError(a);});} });}, b.prototype.sendLocalMessage = function (c, d) {a.CheckParam.getInstance().check(["object", "object"], "sendLocalMessage", !1, arguments), b._dataAccessProvider.updateMessage(c), this.sendMessage(c.conversationType, c.targetId, c.content, b.logSendCallback(d, "sendLocalMessage"));}, b.prototype.sendMessage = function (c, d, e, f, g, h, i, j, k) {a.CheckParam.getInstance().check(["number", "string|number", "object", "object", "undefined|object|null|global|boolean", "undefined|object|null|global|string", "undefined|object|null|global|string", "undefined|object|null|global|number", "undefined|object|null|global"], "sendMessage", !1, arguments), b._dataAccessProvider.sendMessage(c, d, e, b.logSendCallback(f, "sendMessage"), g, h, i, j, k);}, b.prototype.sendReceiptResponse = function (a, c, d) {b._dataAccessProvider.sendReceiptResponse(a, c, b.logSendCallback(d, "sendReceiptResponse"));}, b.prototype.sendTypingStatusMessage = function (a, c, d, e) {b._dataAccessProvider.sendTypingStatusMessage(a, c, d, b.logSendCallback(e, "sendTypingStatusMessage"));}, b.prototype.sendStatusMessage = function (a, b, c) {throw new Error("Not implemented yet");}, b.prototype.sendTextMessage = function (a, c, d, e) {b._dataAccessProvider.sendTextMessage(a, c, d, b.logSendCallback(e, "sendTextMessage"));}, b.prototype.sendRecallMessage = function (c, d) {var e = b.logSendCallback(d, "sendRecallMessage");if (c.senderUserId != a.Bridge._client.userId) {var e = b.logSendCallback(d, "sendRecallMessage");return void e.onError(a.ErrorCode.RECALL_MESSAGE, c);}b._dataAccessProvider.sendRecallMessage(c, e);}, b.prototype.insertMessage = function (a, c, d, e) {b._dataAccessProvider.addMessage(a, c, d, b.logCallback(e, "insertMessage"));}, b.prototype.setMessageContent = function (a, c, d) {b._dataAccessProvider.setMessageContent(a, c, d);}, b.prototype.setMessageSearchField = function (a, c, d) {b._dataAccessProvider.setMessageContent(a, c, d);}, b.prototype.getHistoryMessages = function (c, d, e, f, g, h, i) {if (a.CheckParam.getInstance().check(["number", "string|number", "number|null|global|object", "number", "object", "undefined|object|null|global|string", "number|null|global|object"], "getHistoryMessages", !1, arguments), f > 20) throw new Error("HistroyMessage count must be less than or equal to 20!");if (c.valueOf() < 0) throw new Error("ConversationType must be greater than -1");b._dataAccessProvider.getHistoryMessages(c, d, e, f, b.logCallback(g, "getHistoryMessages"), h, i);}, b.prototype.getRemoteHistoryMessages = function (c, d, e, f, g, h) {a.CheckParam.getInstance().check(["number", "string|number", "number|null|global|object", "number", "object", "undefined|null|global|object"], "getRemoteHistoryMessages", !1, arguments);var i = { errorCode: a.ErrorCode.RC_CONN_PROTO_VERSION_ERROR, funcName: "getRemoteHistoryMessages" };return f > 20 ? (b.logger(i), void g.onError(a.ErrorCode.RC_CONN_PROTO_VERSION_ERROR)) : c.valueOf() < 0 ? (b.logger(i), void g.onError(a.ErrorCode.RC_CONN_PROTO_VERSION_ERROR)) : void b._dataAccessProvider.getRemoteHistoryMessages(c, d, e, f, b.logCallback(g, "getRemoteHistoryMessages"), h);}, b.prototype.clearHistoryMessages = function (a, c) {b._dataAccessProvider.clearHistoryMessages(a, c);}, b.prototype.clearRemoteHistoryMessages = function (a, c) {b._dataAccessProvider.clearRemoteHistoryMessages(a, b.logCallback(c, "clearRemoteHistoryMessages"));}, b.prototype.hasRemoteUnreadMessages = function (a, c) {b._dataAccessProvider.hasRemoteUnreadMessages(a, b.logCallback(c, "hasRemoteUnreadMessages"));}, b.prototype.getTotalUnreadCount = function (a, c) {b._dataAccessProvider.getTotalUnreadCount({ onSuccess: function onSuccess(b) {setTimeout(function () {a.onSuccess(b);});}, onError: function onError(c) {setTimeout(function () {b.logger({ code: c, funcName: "getTotalUnreadCount" }), a.onError(c);});} }, c);}, b.prototype.getConversationUnreadCount = function (a, c) {b._dataAccessProvider.getConversationUnreadCount(a, { onSuccess: function onSuccess(a) {setTimeout(function () {c.onSuccess(a);});}, onError: function onError(a) {setTimeout(function () {b.logger({ code: a, funcName: "getConversationUnreadCount" }), c.onError(a);});} });}, b.prototype.getUnreadCount = function (a, c, d) {b._dataAccessProvider.getUnreadCount(a, c, { onSuccess: function onSuccess(a) {setTimeout(function () {d.onSuccess(a);});}, onError: function onError(a) {setTimeout(function () {b.logger({ code: a, funcName: "getUnreadCount" }), d.onError(a);});} });}, b.prototype.setUnreadCount = function (c, d, e) {a.CheckParam.getInstance().check(["number", "string", "number"], "setUnreadCount", !1, arguments), b._dataAccessProvider.setUnreadCount(c, d, e);}, b.prototype.clearUnreadCountByTimestamp = function (a, c, d, e) {b._dataAccessProvider.clearUnreadCountByTimestamp(a, c, d, b.logCallback(e, "clearUnreadCountByTimestamp"));}, b.prototype.clearUnreadCount = function (a, c, d) {b._dataAccessProvider.clearUnreadCount(a, c, { onSuccess: function onSuccess(a) {setTimeout(function () {d.onSuccess(a);});}, onError: function onError(a) {setTimeout(function () {b.logger({ code: a, funcName: "clearUnreadCount" }), d.onError(a);});} });}, b.prototype.clearTotalUnreadCount = function (a) {b._dataAccessProvider.clearTotalUnreadCount({ onSuccess: function onSuccess(b) {a.onSuccess(b);}, onError: function onError(c) {setTimeout(function () {b.logger({ code: c, funcName: "clearTotalUnreadCount" }), a.onError(c);});} });}, b.prototype.clearLocalStorage = function (a) {b._storageProvider.clearItem(), a();}, b.prototype.setMessageExtra = function (a, c, d) {b._dataAccessProvider.setMessageExtra(a, c, { onSuccess: function onSuccess(a) {setTimeout(function () {d.onSuccess(a);});}, onError: function onError(a) {setTimeout(function () {b.logger({ code: a, funcName: "setMessageExtra" }), d.onError(a);});} });}, b.prototype.setMessageReceivedStatus = function (a, c, d) {b._dataAccessProvider.setMessageReceivedStatus(a, c, { onSuccess: function onSuccess(a) {setTimeout(function () {d.onSuccess(a);});}, onError: function onError(a) {setTimeout(function () {b.logger({ code: a, funcName: "setMessageReceivedStatus" }), d.onError(a);});} });}, b.prototype.setMessageStatus = function (a, c, d, e, f) {b._dataAccessProvider.setMessageStatus(a, c, d, e, b.logCallback(f, "setMessageStatus"));}, b.prototype.setMessageSentStatus = function (a, c, d) {b._dataAccessProvider.setMessageSentStatus(a, c, { onSuccess: function onSuccess(a) {setTimeout(function () {d.onSuccess(a);});}, onError: function onError(a) {setTimeout(function () {b.logger({ code: a, funcName: "setMessageSentStatus" }), d.onError(a);});} });}, b.prototype.clearTextMessageDraft = function (c, d) {a.CheckParam.getInstance().check(["number", "string|number", "object"], "clearTextMessageDraft", !1, arguments);var e = "darf_" + c + "_" + d;return delete b._memoryStore[e], !0;}, b.prototype.getTextMessageDraft = function (c, d) {if (a.CheckParam.getInstance().check(["number", "string|number", "object"], "getTextMessageDraft", !1, arguments), "" == d || c < 0) throw new Error("params error : " + a.ErrorCode.DRAF_GET_ERROR);var e = "darf_" + c + "_" + d;return b._memoryStore[e];}, b.prototype.saveTextMessageDraft = function (c, d, e) {a.CheckParam.getInstance().check(["number", "string|number", "string", "object"], "saveTextMessageDraft", !1, arguments);var f = "darf_" + c + "_" + d;return b._memoryStore[f] = e, !0;}, b.prototype.searchConversationByContent = function (a, c, d) {b._dataAccessProvider.searchConversationByContent(a, b.logCallback(c, "searchConversationByContent"), d);}, b.prototype.searchMessageByContent = function (a, c, d, e, f, g, h) {b._dataAccessProvider.searchMessageByContent(a, c, d, e, f, g, b.logCallback(h, "searchMessageByContent"));}, b.prototype.clearCache = function () {b._dataAccessProvider.clearCache();}, b.prototype.clearConversations = function (c) {for (var d = [], e = 1; e < arguments.length; e++) {d[e - 1] = arguments[e];}0 == d.length && (d = [a.ConversationType.CHATROOM, a.ConversationType.CUSTOMER_SERVICE, a.ConversationType.DISCUSSION, a.ConversationType.GROUP, a.ConversationType.PRIVATE, a.ConversationType.SYSTEM, a.ConversationType.PUBLIC_SERVICE, a.ConversationType.APP_PUBLIC_SERVICE]), b._dataAccessProvider.clearConversations(d, { onSuccess: function onSuccess(a) {setTimeout(function () {c.onSuccess(a);});}, onError: function onError(a) {setTimeout(function () {b.logger({ code: a, funcName: "clearConversations" }), c.onError(a);});} });}, b.prototype.getConversation = function (c, d, e) {a.CheckParam.getInstance().check(["number", "string|number", "object"], "getConversation", !1, arguments), b._dataAccessProvider.getConversation(c, d, { onSuccess: function onSuccess(a) {setTimeout(function () {e.onSuccess(a);});}, onError: function onError(a) {setTimeout(function () {b.logger({ code: a, funcName: "getConversation" }), e.onError(a);});} });}, b.prototype.pottingConversation = function (c) {var d = this,e = !1;b._dataAccessProvider.getConversation(c.type, c.userId, { onSuccess: function onSuccess(f) {f ? e = !0 : f = new a.Conversation(), f.conversationType = c.type, f.targetId = c.userId, f.latestMessage = a.MessageUtil.messageParser(c.msg), f.latestMessageId = f.latestMessage.messageId, f.objectName = f.latestMessage.objectName, f.receivedStatus = f.latestMessage.receivedStatus, f.receivedTime = f.latestMessage.receiveTime, f.sentStatus = f.latestMessage.sentStatus, f.sentTime = f.latestMessage.sentTime;var g = b._storageProvider.getItem("mentioneds_" + a.Bridge._client.userId + "_" + f.conversationType + "_" + f.targetId);if (g) {var h = JSON.parse(g);f.mentionedMsg = h[c.type + "_" + c.userId];}if (!e) if (a.RongUtil.supportLocalStorage()) {var i = b._storageProvider.getItem("cu" + a.Bridge._client.userId + c.type + c.userId);f.unreadMessageCount = Number(i);} else f.unreadMessageCount = 0;f.conversationType == a.ConversationType.DISCUSSION && d.getDiscussion(c.userId, { onSuccess: function onSuccess(a) {f.conversationTitle = a.name;}, onError: function onError(a) {} }), b._dataAccessProvider.addConversation(f, { onSuccess: function onSuccess(a) {} });}, onError: function onError(a) {} });}, b.prototype.addConversation = function (a, c) {b._dataAccessProvider.addConversation(a, c);}, b.prototype.sortConversationList = function (a) {for (var c = [], d = 0, e = a.length; d < e; d++) {if (a[d]) if (a[d].isTop) c.push(a[d]), a.splice(d, 1);else for (var f = 0; f < e - d - 1; f++) {if (a[f].sentTime < a[f + 1].sentTime) {var g = a[f];a[f] = a[f + 1], a[f + 1] = g;}}}return b._memoryStore.conversationList = c.concat(a);}, b.prototype.getConversationList = function (c, d, e, f) {a.CheckParam.getInstance().check(["object", "null|undefined|array|object|global", "number|undefined|null|object|global", "boolean|undefined|null|object|global"], "getConversationList", !1, arguments);b._dataAccessProvider.getConversationList({ onSuccess: function onSuccess(a) {d || b._dataAccessProvider ? setTimeout(function () {c.onSuccess(a);}) : setTimeout(function () {c.onSuccess(b._memoryStore.conversationList);});}, onError: function onError(a) {setTimeout(function () {b.logger({ code: a, funcName: "getConversationList" }), c.onError(a);});} }, d, e, f);}, b.prototype.getRemoteConversationList = function (c, d, e, f) {a.CheckParam.getInstance().check(["object", "null|array|object|global", "number|undefined|null|object|global", "boolean|undefined|null|object|global"], "getRemoteConversationList", !1, arguments), b._dataAccessProvider.getRemoteConversationList(b.logCallback(c, "getRemoteConversationList"), d, e, f);}, b.prototype.updateConversation = function (a) {return b._dataAccessProvider.updateConversation(a);}, b.prototype.createConversation = function (b, c, d) {a.CheckParam.getInstance().check(["number", "string|number", "string"], "createConversation", !1, arguments);var e = new a.Conversation();return e.targetId = c, e.conversationType = b, e.conversationTitle = d, e.latestMessage = {}, e.unreadMessageCount = 0, e;}, b.prototype.removeConversation = function (c, d, e) {a.CheckParam.getInstance().check(["number", "string|number", "object"], "removeConversation", !1, arguments), b._dataAccessProvider.removeConversation(c, d, b.logCallback(e, "removeConversation"));}, b.prototype.setConversationHidden = function (c, d, e) {a.CheckParam.getInstance().check(["number", "string|number", "boolean"], "setConversationHidden", !1, arguments), b._dataAccessProvider.setConversationHidden(c, d, e);}, b.prototype.setConversationToTop = function (c, d, e, f) {a.CheckParam.getInstance().check(["number", "string|number", "boolean", "object"], "setConversationToTop", !1, arguments), b._dataAccessProvider.setConversationToTop(c, d, e, { onSuccess: function onSuccess(a) {setTimeout(function () {f.onSuccess(a);});}, onError: function onError(a) {setTimeout(function () {b.logger({ code: a, funcName: "setConversationToTop" }), f.onError(a);});} });}, b.prototype.getConversationNotificationStatus = function (a, c, d) {var e = { conversationType: a, targetId: c };b._dataAccessProvider.getConversationNotificationStatus(e, b.logCallback(d, "getConversationNotificationStatus"));}, b.prototype.setConversationNotificationStatus = function (a, c, d, e) {var f = { conversationType: a, targetId: c, status: status };b._dataAccessProvider.setConversationNotificationStatus(f, b.logCallback(e, "setConversationNotificationStatus"));}, b.prototype.getNotificationQuietHours = function (a) {throw new Error("Not implemented yet");}, b.prototype.removeNotificationQuietHours = function (a) {throw new Error("Not implemented yet");}, b.prototype.setNotificationQuietHours = function (a, b, c) {throw new Error("Not implemented yet");}, b.prototype.addMemberToDiscussion = function (c, d, e) {a.CheckParam.getInstance().check(["string", "array", "object"], "addMemberToDiscussion", !1, arguments), b._dataAccessProvider.addMemberToDiscussion(c, d, b.logCallback(e, "addMemberToDiscussion"));}, b.prototype.createDiscussion = function (c, d, e) {a.CheckParam.getInstance().check(["string", "array", "object"], "createDiscussion", !1, arguments), b._dataAccessProvider.createDiscussion(c, d, e);}, b.prototype.getDiscussion = function (c, d) {a.CheckParam.getInstance().check(["string", "object"], "getDiscussion", !1, arguments), b._dataAccessProvider.getDiscussion(c, b.logCallback(d, "getDiscussion"));}, b.prototype.quitDiscussion = function (c, d) {a.CheckParam.getInstance().check(["string", "object"], "quitDiscussion", !1, arguments), b._dataAccessProvider.quitDiscussion(c, b.logCallback(d, "quitDiscussion"));}, b.prototype.removeMemberFromDiscussion = function (c, d, e) {a.CheckParam.getInstance().check(["string", "string", "object"], "removeMemberFromDiscussion", !1, arguments), b._dataAccessProvider.removeMemberFromDiscussion(c, d, b.logCallback(e, "removeMemberFromDiscussion"));}, b.prototype.setDiscussionInviteStatus = function (c, d, e) {a.CheckParam.getInstance().check(["string", "number", "object"], "setDiscussionInviteStatus", !1, arguments), b._dataAccessProvider.setDiscussionInviteStatus(c, d, b.logCallback(e, "setDiscussionInviteStatus"));}, b.prototype.setDiscussionName = function (c, d, e) {a.CheckParam.getInstance().check(["string", "string", "object"], "setDiscussionName", !1, arguments), b._dataAccessProvider.setDiscussionName(c, d, b.logCallback(e, "setDiscussionName"));}, b.prototype.joinChatRoom = function (c, d, e) {if (a.CheckParam.getInstance().check(["string|number", "number", "object"], "joinChatRoom", !1, arguments), "" == c) return void setTimeout(function () {var c = a.ErrorCode.CHATROOM_ID_ISNULL;b.logger({ code: c, funcName: "joinChatRoom" }), e.onError(a.ErrorCode.CHATROOM_ID_ISNULL);});b._dataAccessProvider.joinChatRoom(c, d, b.logCallback(e, "joinChatRoom"));}, b.prototype.setDeviceInfo = function (a) {b._dataAccessProvider.setDeviceInfo(a);}, b.prototype.setChatroomHisMessageTimestamp = function (c, d) {a.CheckParam.getInstance().check(["string|number", "number"], "setChatroomHisMessageTimestamp", !1, arguments), b._dataAccessProvider.setChatroomHisMessageTimestamp(c, d);}, b.prototype.getChatRoomHistoryMessages = function (c, d, e, f) {a.CheckParam.getInstance().check(["string|number", "number", "number", "object"], "getChatRoomHistoryMessages", !1, arguments), b._dataAccessProvider.getChatRoomHistoryMessages(c, d, e, b.logCallback(f, "getChatRoomHistoryMessages"));}, b.prototype.getChatRoomInfo = function (c, d, e, f) {a.CheckParam.getInstance().check(["string|number", "number", "number", "object"], "getChatRoomInfo", !1, arguments), b._dataAccessProvider.getChatRoomInfo(c, d, e, b.logCallback(f, "getChatRoomInfo"));}, b.prototype.quitChatRoom = function (c, d) {a.CheckParam.getInstance().check(["string|number", "object"], "quitChatRoom", !1, arguments), b._dataAccessProvider.quitChatRoom(c, b.logCallback(d, "quitChatRoom"));}, b.prototype.getRemotePublicServiceList = function (a, c) {b._dataAccessProvider.getRemotePublicServiceList(b.logCallback(a, "getRemotePublicServiceList"), c);}, b.prototype.getPublicServiceList = function (c) {b._memoryStore.depend.openMp && (a.CheckParam.getInstance().check(["object"], "getPublicServiceList", !1, arguments), this.getRemotePublicServiceList(b.logCallback(c, "getPublicServiceList")));}, b.prototype.getPublicServiceProfile = function (c, d, e) {b._memoryStore.depend.openMp && (a.CheckParam.getInstance().check(["number", "string|number", "object"], "getPublicServiceProfile", !1, arguments), b._dataAccessProvider.getPublicServiceProfile(c, d, b.logCallback(e, "getPublicServiceProfile")));}, b.prototype.pottingPublicSearchType = function (a, c) {if (b._memoryStore.depend.openMp) {var d = 0;return 0 == a ? (d |= 3, d |= 0 == c ? 12 : 48) : 1 == a ? (d |= 1, d |= 0 == c ? 8 : 32) : (d |= 2, d |= 0 == a ? 4 : 16), d;}}, b.prototype.searchPublicService = function (c, d, e) {if (b._memoryStore.depend.openMp) {a.CheckParam.getInstance().check(["number", "string", "object"], "searchPublicService", !1, arguments);var f = new b.Protobuf.SearchMpInput();f.setType(this.pottingPublicSearchType(0, c)), f.setId(d), b.bridge.queryMsg(29, a.MessageUtil.ArrayForm(f.toArrayBuffer()), a.Bridge._client.userId, b.logCallback(e, "searchPublicService"), "SearchMpOutput");}}, b.prototype.searchPublicServiceByType = function (c, d, e, f) {if (b._memoryStore.depend.openMp) {a.CheckParam.getInstance().check(["number", "number", "string", "object"], "searchPublicServiceByType", !1, arguments);var g = c == a.ConversationType.APP_PUBLIC_SERVICE ? 2 : 1,h = new b.Protobuf.SearchMpInput();h.setType(this.pottingPublicSearchType(g, d)), h.setId(e), b.bridge.queryMsg(29, a.MessageUtil.ArrayForm(h.toArrayBuffer()), a.Bridge._client.userId, b.logCallback(f, "searchPublicServiceByType"), "SearchMpOutput");}}, b.prototype.subscribePublicService = function (c, d, e) {if (b._memoryStore.depend.openMp) {a.CheckParam.getInstance().check(["number", "string|number", "object"], "subscribePublicService", !1, arguments);var f = new b.Protobuf.MPFollowInput(),g = this,h = c == a.ConversationType.APP_PUBLIC_SERVICE ? "mcFollow" : "mpFollow";f.setId(d), b.bridge.queryMsg(h, a.MessageUtil.ArrayForm(f.toArrayBuffer()), a.Bridge._client.userId, { onSuccess: function onSuccess() {g.getRemotePublicServiceList({ onSuccess: function onSuccess() {}, onError: function onError() {} }), e.onSuccess();}, onError: function onError(a) {var c = a;b.logger({ code: c, funcName: "subscribePublicService" }), e.onError(a);} }, "MPFollowOutput");}}, b.prototype.unsubscribePublicService = function (c, d, e) {if (b._memoryStore.depend.openMp) {a.CheckParam.getInstance().check(["number", "string|number", "object"], "unsubscribePublicService", !1, arguments);var f = new b.Protobuf.MPFollowInput(),g = c == a.ConversationType.APP_PUBLIC_SERVICE ? "mcUnFollow" : "mpUnFollow";f.setId(d), b.bridge.queryMsg(g, a.MessageUtil.ArrayForm(f.toArrayBuffer()), a.Bridge._client.userId, { onSuccess: function onSuccess() {b._memoryStore.publicServiceMap.remove(c, d), e.onSuccess();}, onError: function onError(a) {var c = a;b.logger({ code: c, funcName: "unsubscribePublicService" }), e.onError(a);} }, "MPFollowOutput");}}, b.prototype.addToBlacklist = function (c, d) {a.CheckParam.getInstance().check(["string|number", "object"], "addToBlacklist", !1, arguments), b._dataAccessProvider.addToBlacklist(c, b.logCallback(d, "addToBlacklist"));}, b.prototype.getBlacklist = function (c) {a.CheckParam.getInstance().check(["object"], "getBlacklist", !1, arguments), b._dataAccessProvider.getBlacklist(c);}, b.prototype.getBlacklistStatus = function (c, d) {a.CheckParam.getInstance().check(["string|number", "object"], "getBlacklistStatus", !1, arguments), b._dataAccessProvider.getBlacklistStatus(c, b.logCallback(d, "getBlacklistStatus"));}, b.prototype.removeFromBlacklist = function (c, d) {
        a.CheckParam.getInstance().check(["string|number", "object"], "removeFromBlacklist", !1, arguments), b._dataAccessProvider.removeFromBlacklist(c, b.logCallback(d, "removeFromBlacklist"));}, b.prototype.getFileToken = function (c, d) {a.CheckParam.getInstance().check(["number", "object"], "getQngetFileTokenTkn", !1, arguments), b._dataAccessProvider.getFileToken(c, b.logCallback(d, "getFileToken"));}, b.prototype.getFileUrl = function (c, d, e, f) {a.CheckParam.getInstance().check(["number", "string", "string|global|object|null", "object"], "getFileUrl", !1, arguments), b._dataAccessProvider.getFileUrl(c, d, e, b.logCallback(f, "getFileUrl"));}, b.prototype.addRealTimeLocationListener = function (a, b, c) {throw new Error("Not implemented yet");}, b.prototype.getRealTimeLocation = function (a, b) {throw new Error("Not implemented yet");}, b.prototype.getRealTimeLocationCurrentState = function (a, b) {throw new Error("Not implemented yet");}, b.prototype.getRealTimeLocationParticipants = function (a, b) {throw new Error("Not implemented yet");}, b.prototype.joinRealTimeLocation = function (a, b) {throw new Error("Not implemented yet");}, b.prototype.quitRealTimeLocation = function (a, b) {throw new Error("Not implemented yet");}, b.prototype.startRealTimeLocation = function (a, b) {throw new Error("Not implemented yet");}, b.prototype.updateRealTimeLocationStatus = function (a, b, c, d) {throw new Error("Not implemented yet");}, b.prototype.startCall = function (c, d, e, f, g, h) {if (a.CheckParam.getInstance().check(["number", "string|number", "array", "number", "string", "object"], "startCall", !1, arguments), b._memoryStore.voipStategy) b._voipProvider.startCall(c, d, e, f, g, b.logCallback(h, "startCall"));else {var i = a.ErrorCode.VOIP_NOT_AVALIABLE;b.logger({ code: i, funcName: "startCall" }), h.onError(a.ErrorCode.VOIP_NOT_AVALIABLE);}}, b.prototype.joinCall = function (c, d) {if (a.CheckParam.getInstance().check(["number", "object"], "joinCall", !1, arguments), b._memoryStore.voipStategy) b._voipProvider.joinCall(c, b.logCallback(d, "joinCall"));else {var e = a.ErrorCode.VOIP_NOT_AVALIABLE;b.logger({ code: e, funcName: "joinCall" }), d.onError(a.ErrorCode.VOIP_NOT_AVALIABLE);}}, b.prototype.hungupCall = function (c, d, e) {a.CheckParam.getInstance().check(["number", "string", "number"], "hungupCall", !1, arguments), b._memoryStore.voipStategy && b._voipProvider.hungupCall(c, d, e);}, b.prototype.changeMediaType = function (c, d, e, f) {if (a.CheckParam.getInstance().check(["number", "string", "number", "object"], "changeMediaType", !1, arguments), b._memoryStore.voipStategy) b._voipProvider.changeMediaType(c, d, e, b.logCallback(f, "changeMediaType"));else {var g = a.ErrorCode.VOIP_NOT_AVALIABLE;b.logger({ code: g, funcName: "changeMediaType" }), f.onError(a.ErrorCode.VOIP_NOT_AVALIABLE);}}, b.prototype.getUnreadMentionedMessages = function (a, c) {return b._dataAccessProvider.getUnreadMentionedMessages(a, c);}, b.prototype.clearListeners = function () {b._dataAccessProvider.clearListeners();}, b.prototype.getUserStatus = function (a, c) {b._dataAccessProvider.getUserStatus(a, b.logCallback(c, "getUserStatus"));}, b.prototype.setUserStatus = function (a, c) {b._dataAccessProvider.setUserStatus(a, b.logCallback(c, "setUserStatus"));}, b.prototype.setUserStatusListener = function (a, c) {var d = a.userIds,e = a.multiple;b.userStatusObserver.watch({ key: d, func: c, multiple: e }), b._dataAccessProvider.setUserStatusListener(a, c);}, b.messageWatch = function (a) {b.RTCListener = a;}, b.prototype.getRTCUserInfoList = function (c, d) {a.CheckParam.getInstance().check(["object", "object"], "getRTCUserInfoList", !1, arguments), b._dataAccessProvider.getRTCUserInfoList(c, d);}, b.prototype.getRTCUserList = function (c, d) {a.CheckParam.getInstance().check(["object", "object"], "getRTCUserList", !1, arguments), b._dataAccessProvider.getRTCUserList(c, d);}, b.prototype.setRTCUserInfo = function (c, d, e) {a.CheckParam.getInstance().check(["object", "object", "object"], "setRTCUserInfo", !1, arguments), b._dataAccessProvider.setRTCUserInfo(c, d, e);}, b.prototype.removeRTCUserInfo = function (c, d, e) {a.CheckParam.getInstance().check(["object", "object", "object"], "removeRTCUserInfo", !1, arguments), b._dataAccessProvider.removeRTCUserInfo(c, d, e);}, b.prototype.getRTCRoomInfo = function (c, d) {a.CheckParam.getInstance().check(["object", "object"], "getRTCRoomInfo", !1, arguments), b._dataAccessProvider.getRTCRoomInfo(c, d);}, b.prototype.setRTCRoomInfo = function (c, d, e) {a.CheckParam.getInstance().check(["object", "object", "object"], "setRTCRoomInfo", !1, arguments), b._dataAccessProvider.setRTCRoomInfo(c, d, e);}, b.prototype.removeRTCRoomInfo = function (c, d, e) {a.CheckParam.getInstance().check(["object", "object", "object"], "removeRTCRoomInfo", !1, arguments), b._dataAccessProvider.removeRTCRoomInfo(c, d, e);}, b.prototype.joinRTCRoom = function (c, d) {a.CheckParam.getInstance().check(["object", "object"], "joinRTCRoom", !1, arguments), b._dataAccessProvider.joinRTCRoom(c, d);}, b.prototype.quitRTCRoom = function (c, d) {a.CheckParam.getInstance().check(["object", "object"], "quitRTCRoom", !1, arguments), b._dataAccessProvider.quitRTCRoom(c, d);}, b.prototype.RTCPing = function (c, d) {a.CheckParam.getInstance().check(["object", "object"], "RTCPing", !1, arguments), b._dataAccessProvider.RTCPing(c, d);}, b.prototype.setRTCUserData = function (c, d, e, f, g, h) {a.CheckParam.getInstance().check(["string", "string", "string", "boolean", "object", "global|object|null|undefined"], "setRTCUserData", !1, arguments), b._dataAccessProvider.setRTCUserData(c, d, e, f, g, h);}, b.prototype.getRTCUserData = function (c, d, e, f) {a.CheckParam.getInstance().check(["string", "array", "boolean", "object", "global|object|null"], "getRTCUserData", !1, arguments), b._dataAccessProvider.getRTCUserData(c, d, e, f);}, b.prototype.removeRTCUserData = function (c, d, e, f, g) {a.CheckParam.getInstance().check(["string", "array", "boolean", "object", "global|object|null|undefined"], "removeRTCUserData", !1, arguments), b._dataAccessProvider.removeRTCUserData(c, d, e, f, g);}, b.prototype.setRTCRoomData = function (c, d, e, f, g, h) {a.CheckParam.getInstance().check(["string", "string", "string", "boolean", "object", "global|object|null|undefined"], "setRTCRoomData", !1, arguments), b._dataAccessProvider.setRTCRoomData(c, d, e, f, g, h);}, b.prototype.getRTCRoomData = function (c, d, e, f) {a.CheckParam.getInstance().check(["string", "array", "boolean", "object"], "getRTCRoomData", !1, arguments), b._dataAccessProvider.getRTCRoomData(c, d, e, f);}, b.prototype.removeRTCRoomData = function (c, d, e, f, g) {a.CheckParam.getInstance().check(["string", "array", "boolean", "object", "global|object|null|undefined"], "removeRTCRoomData", !1, arguments), b._dataAccessProvider.removeRTCRoomData(c, d, e, f, g);}, b.prototype.getNavi = function () {return b._dataAccessProvider.getNavi();}, b.prototype.getRTCToken = function (c, d) {return a.CheckParam.getInstance().check(["object", "object"], "getRTCToken", !1, arguments), b._dataAccessProvider.getRTCToken(c, d);}, b.prototype.getAppInfo = function () {return { appKey: b._memoryStore.appKey };}, b.RTCListener = function () {}, b.currentServer = "", b.LogFactory = {}, b.MessageType = {}, b.RegisterMessage = {}, b._memoryStore = { listenerList: [], isPullFinished: !1, syncMsgQueue: [] }, b.isNotPullMsg = !1, b.userStatusObserver = null, b.sdkver = "2.5.0", b.otherDeviceLoginCount = 0, b.serverStore = { index: 0 }, b.isFirstConnect = !0, b.statusListeners = [], b.userStatusListener = null, b;}();a.RongIMClient = b;}(RongIMLib || (RongIMLib = {}));var RongIMLib;!function (a) {!function (a) {a[a.AT_MOST_ONCE = 0] = "AT_MOST_ONCE", a[a.AT_LEAST_ONCE = 1] = "AT_LEAST_ONCE", a[a.EXACTLY_ONCE = 2] = "EXACTLY_ONCE", a[a.DEFAULT = 3] = "DEFAULT";}(a.Qos || (a.Qos = {}));var b = a.Qos;!function (a) {a[a.CONNECT = 1] = "CONNECT", a[a.CONNACK = 2] = "CONNACK", a[a.PUBLISH = 3] = "PUBLISH", a[a.PUBACK = 4] = "PUBACK", a[a.QUERY = 5] = "QUERY", a[a.QUERYACK = 6] = "QUERYACK", a[a.QUERYCON = 7] = "QUERYCON", a[a.SUBSCRIBE = 8] = "SUBSCRIBE", a[a.SUBACK = 9] = "SUBACK", a[a.UNSUBSCRIBE = 10] = "UNSUBSCRIBE", a[a.UNSUBACK = 11] = "UNSUBACK", a[a.PINGREQ = 12] = "PINGREQ", a[a.PINGRESP = 13] = "PINGRESP", a[a.DISCONNECT = 14] = "DISCONNECT";}(a.Type || (a.Type = {}));var c = (a.Type, ["invtDiz", "crDiz", "qnUrl", "userInf", "dizInf", "userInf", "joinGrp", "quitDiz", "exitGrp", "evctDiz", ["", "ppMsgP", "pdMsgP", "pgMsgP", "chatMsg", "pcMsgP", "", "pmcMsgN", "pmpMsgN", "", "", "", "prMsgS"], "pdOpen", "rename", "uGcmpr", "qnTkn", "destroyChrm", "createChrm", "exitChrm", "queryChrm", "joinChrm", "pGrps", "addBlack", "rmBlack", "getBlack", "blackStat", "addRelation", "qryRelation", "delRelation", "pullMp", "schMp", "qnTkn", "qnUrl", "qryVoipK", "delMsg", "qryCHMsg", "getUserStatus", "setUserStatus", "subUserStatus", "cleanHisMsg"]),d = function () {function b(c, d) {this.connectionStatus = -1;var f = d.appId,g = encodeURIComponent(d.token),h = d.sdkVer,i = d.apiVer;this.self = d, this.socket = e.getInstance().createServer();var j = this,k = a.RongIMClient._storageProvider,l = k.getItem("servers");l = JSON.parse(l) || [];var m = a.RongIMClient._memoryStore.depend,n = function n(b) {j.url = a.RongUtil.tplEngine("{host}/websocket?appId={appId}&token={token}&sdkVer={sdkVer}&apiVer={apiVer}", { host: b, appId: f, token: g, sdkVer: h, apiVer: i }), j.socket.connect(j.url, c);var d = k.getItem("rong_current_user");a.Navigation.Endpoint = { host: b, userId: d };};({ ws: function ws() {for (var b = new a.Timer({ timeout: 15e3 }), c = [], d = [], e = !1, f = function f() {for (var a = 0; a < c.length; a++) {var b = c[a];clearTimeout(b);}for (var a = 0; a < d.length; a++) {d[a].abort();}c.length = 0, d.length = 0;}, g = function g(_g, h) {var i = _g.url,j = _g.time;if (!e) {var k = setTimeout(function () {var c = function c() {e || (f(), e = !0, b.pause(), h(i));},g = a.MessageUtil.detectCMP({ url: i, success: c, fail: function fail(a) {console.log(a);} });d.push(g);}, j);c.push(k);}}, h = function h(b) {var c = /(http|https):\/\/([^\/]+)/i,d = b.match(c)[2];a.RongIMClient.currentServer = d, n(d);}, i = "{protocol}{server}/ping?r={random}", k = 0; k < l.length; k++) {var o = l[k];o && (o = a.RongUtil.tplEngine(i, { protocol: m.protocol, server: o, random: a.RongUtil.getTimestamp() }), g({ url: o, time: 1e3 * k }, h));}b.resume(function () {a.Navigation.clear(), f(), j.socket.fire("StatusChanged", a.ConnectionStatus.NETWORK_UNAVAILABLE);});}, comet: function comet() {var a = l[0];n(a);} })[m.isPolling ? "comet" : "ws"]();var o = b._ConnectionStatusListener,p = "object" == typeof o,q = this;q.socket.on("StatusChanged", function (b) {if (!p) throw new Error("setConnectStatusListener:Parameter format is incorrect");var c = b == a.ConnectionStatus.NETWORK_UNAVAILABLE,e = !a.RongIMClient._memoryStore.depend.isPolling;if (a.RongIMClient.isFirstConnect && c && e && (b = a.ConnectionStatus.WEBSOCKET_UNAVAILABLE), c) {var f = a.RongIMClient._storageProvider,g = f.getItem("servers");g = JSON.parse(g);var h = a.RongIMClient.currentServer;if (h) {var i = a.RongUtil.indexOf(g, h);if (!a.RongUtil.isEqual(i, -1)) {var j = g.splice(i, 1)[0];g.push(j), f.setItem("servers", JSON.stringify(g));}}}q.connectionStatus = b, setTimeout(function () {o.onChanged(b);}), b == a.ConnectionStatus.DISCONNECTED && d.clearHeartbeat(), b == a.ConnectionStatus.KICKED_OFFLINE_BY_OTHER_CLIENT && a.RongIMClient.otherDeviceLoginCount++, b == a.ConnectionStatus.CONNECTED && (a.RongIMClient.isFirstConnect = !1), b == a.ConnectionStatus.WEBSOCKET_UNAVAILABLE && (q.changeConnectType(), a.RongIMClient.isFirstConnect = !1, a.RongIMClient.connect(d.token, a.RongIMClient._memoryStore.callback));}), this.socket.on("message", d.handler.handleMessage), this.socket.on("disconnect", function (a) {j.socket.fire("StatusChanged", a || 2);});}return b.prototype.changeConnectType = function () {a.RongIMClient._memoryStore.depend.isPolling = !a.RongIMClient._memoryStore.depend.isPolling, new a.FeatureDectector();}, b.prototype.writeAndFlush = function (a) {this.socket.send(a);}, b.prototype.reconnect = function (b) {a.MessageIdHandler.clearMessageId(), this.socket = this.socket.reconnect(), b && (this.self.reconnectObj = b);}, b.prototype.disconnect = function (a) {this.socket.disconnect(a);}, b;}();a.Channel = d;var e = function () {function b() {this.socket = null, this._events = {};}return b.getInstance = function () {return new b();}, b.prototype.connect = function (b, c) {return this.socket && (b && (a.RongIMClient._storageProvider.setItem("rongSDK", this.checkTransport()), this.on("connect", c || new Function())), b && (this.currentURL = b), this.socket.createTransport(b)), this;}, b.prototype.createServer = function () {var a = this.getTransport(this.checkTransport());if (null === a) throw new Error("the channel was not supported");return a;}, b.prototype.getTransport = function (c) {return c == b.XHR_POLLING ? this.socket = new a.PollingTransportation(this) : c == b.WEBSOCKET && (this.socket = new a.SocketTransportation(this)), this;}, b.prototype.send = function (a) {this.socket && (this.checkTransport() == b.WEBSOCKET ? this.socket.send(a) : this.socket.send(this._encode(a)));}, b.prototype.onMessage = function (a) {this.fire("message", a);}, b.prototype.disconnect = function (a) {return this.socket.disconnect(a), this.fire("disconnect", a), this;}, b.prototype.reconnect = function () {if (this.currentURL && a.RongIMClient._storageProvider.getItem("rongSDK")) return this.connect(this.currentURL, null);throw new Error("reconnect:no have URL");}, b.prototype.checkTransport = function () {return a.RongIMClient._memoryStore.depend.isPolling && (a.Transportations._TransportType = b.XHR_POLLING), a.Transportations._TransportType;}, b.prototype.fire = function (a, b) {if (a in this._events) for (var c = 0, d = this._events[a].length; c < d; c++) {this._events[a][c](b);}return this;}, b.prototype.on = function (b, c) {return "function" == typeof c && b ? (b in this._events ? -1 == a.MessageUtil.indexOf(this._events, c) && this._events[b].push(c) : this._events[b] = [c], this) : this;}, b.prototype.removeEvent = function (a, b) {if (a in this._events) for (var c = 0, d = this._events[a].length; c < d; c++) {this._events[a][c] == b && this._events[a].splice(c, 1);}return this;}, b.prototype._encode = function (b) {var c = "?messageid=" + b.getMessageId() + "&header=" + b.getHeaderFlag() + "&sessionid=" + a.RongIMClient._storageProvider.getItem("sId" + a.Navigation.Endpoint.userId);return /(PubAckMessage|QueryConMessage)/.test(b._name) || (c += "&topic=" + b.getTopic() + "&targetid=" + (b.getTargetId() || "")), { url: c, data: "getData" in b ? b.getData() : "" };}, b.XHR_POLLING = "xhr-polling", b.WEBSOCKET = "websocket", b;}();a.Socket = e;var f = function () {function c(b, c) {this.timeoutMillis = 6e3, this.timeout_ = 0, this.sdkVer = "", this.apiVer = Math.floor(1e6 * Math.random()), this.channel = null, this.handler = null, this.userId = "", this.reconnectObj = {}, this.heartbeat = 0, this.pullMsgHearbeat = 0, this.chatroomId = "", this.SyncTimeQueue = [], this.cacheMessageIds = [], this.token = b, this.appId = c, this.SyncTimeQueue.state = "complete", this.sdkVer = a.RongIMClient.sdkver;}return c.prototype.resumeTimer = function () {var b = this;this.timeout_ = setTimeout(function () {b.channel.disconnect(a.ConnectionStatus.NETWORK_UNAVAILABLE);}, this.timeoutMillis);}, c.prototype.pauseTimer = function () {this.timeout_ && (clearTimeout(this.timeout_), this.timeout_ = 0);}, c.prototype.connect = function (b) {this.handler = new h(this), this.handler.setConnectCallback(b);var c = this;this.channel = new d(function () {a.Transportations._TransportType == e.WEBSOCKET && c.keepLive();}, this), this.channel.socket.fire("StatusChanged", a.ConnectionStatus.CONNECTING);}, c.prototype.checkSocket = function (b) {this.channel.writeAndFlush(new a.PingReqMessage());var c = 0,d = setInterval(function () {a.RongIMClient._memoryStore.isFirstPingMsg ? c > 15 && (clearInterval(d), b.onError()) : (clearInterval(d), b.onSuccess()), c++;}, 100);}, c.prototype.keepLive = function () {this.heartbeat > 0 && clearInterval(this.heartbeat);var b = this;b.heartbeat = setInterval(function () {b.resumeTimer(), b.channel.writeAndFlush(new a.PingReqMessage());}, 3e4), b.pullMsgHearbeat > 0 && clearInterval(b.pullMsgHearbeat), b.pullMsgHearbeat = setInterval(function () {b.syncTime(!0, void 0, void 0, !1);}, 18e4);}, c.prototype.clearHeartbeat = function () {clearInterval(this.heartbeat), this.heartbeat = 0, this.pauseTimer(), clearInterval(this.pullMsgHearbeat), this.pullMsgHearbeat = 0;}, c.prototype.publishMessage = function (c, d, e, f, g) {var h = a.MessageIdHandler.messageIdPlus(this.channel.reconnect);if (h) {var i = new a.PublishMessage(c, d, e);i.setMessageId(h), f ? (i.setQos(b.AT_LEAST_ONCE), this.handler.putCallback(new a.PublishCallback(f.onSuccess, f.onError), i.getMessageId(), g)) : i.setQos(b.AT_MOST_ONCE), this.channel.writeAndFlush(i);}}, c.prototype.queryMessage = function (b, d, e, f, g, h) {if ("userInf" == b && c.userInfoMapping[e]) return void g.onSuccess(c.userInfoMapping[e]);var i = a.MessageIdHandler.messageIdPlus(this.channel.reconnect);if (i) {var j = new a.QueryMessage(b, d, e);j.setMessageId(i), j.setQos(f), this.handler.putCallback(new a.QueryCallback(g.onSuccess, g.onError), j.getMessageId(), h), this.channel.writeAndFlush(j);}}, c.prototype.invoke = function (c, d, e) {var f,h,i,j,k = this,l = this.SyncTimeQueue.shift();if (void 0 != l) {this.SyncTimeQueue.state = "pending";var m = a.SyncTimeUtil.get(),n = m.sent;if (2 != l.type) f = m.received, h = new a.RongIMClient.Protobuf.SyncRequestMsg(), h.setIspolling(!1), i = "pullMsg", j = this.userId, h.setSendBoxSyncTime(n);else if (j = l.chrmId || k.chatroomId, f = a.RongIMClient._memoryStore.lastReadTime.get(j + g._client.userId + "CST") || 0, h = new a.RongIMClient.Protobuf.ChrmPullMsg(), h.setCount(0), i = "chrmPull", !j) throw new Error("syncTime:Received messages of chatroom but was not init");if (l.pulltime <= f) return this.SyncTimeQueue.state = "complete", void this.invoke(c, j, e);c && "setIsPullSend" in h && h.setIsPullSend(!0), h.setSyncTime(f), this.queryMessage(i, a.MessageUtil.ArrayForm(h.toArrayBuffer()), j, b.AT_LEAST_ONCE, { onSuccess: function onSuccess(b) {var d = a.MessageUtil.int64ToTimestamp(b.syncTime),h = j,l = "chrmPull" == i;if (l) h += g._client.userId + "CST", a.RongIMClient._memoryStore.lastReadTime.set(h, d);else {var m = a.RongIMClient._storageProvider;d > m.getItem(h) && m.setItem(h, d);}var o = b.list,p = b.finished;l && (p = !0), void 0 === p && (p = !0), a.RongIMClient._memoryStore.isPullFinished = p;for (var q = a.RongIMClient._memoryStore.connectAckTime, r = 0, s = o.length, t = s; r < s; r++) {t -= 1;var u = o[r],v = a.MessageUtil.int64ToTimestamp(u.dataTime);if (v > (u.direction == a.MessageDirection.SEND ? n : f)) {var w = v < q;g._client.handler.onReceived(u, void 0, w, t, !1, p);}}k.SyncTimeQueue.state = "complete", k.invoke(c, j, e);}, onError: function onError(a) {k.SyncTimeQueue.state = "complete", k.invoke(c, j, e);} }, "DownStreamMessages");}}, c.prototype.syncTime = function (a, b, c, d) {this.SyncTimeQueue.push({ type: a, pulltime: b, chrmId: c }), 1 == this.SyncTimeQueue.length && "complete" == this.SyncTimeQueue.state && this.invoke(!a, c, d);}, c.prototype.__init = function (b) {this.handler = new h(this), this.handler.setConnectCallback(a.RongIMClient._memoryStore.callback), this.channel = new d(b, this);}, c.userInfoMapping = {}, c;}();a.Client = f;var g = function () {function e() {}return e.getInstance = function () {return new e();}, e.prototype.connect = function (b, c, d) {if (a.RongIMClient.Protobuf) return e._client = new a.Navigation().connect(b, c, d), e._client;}, e.prototype.setListener = function (a) {"object" == typeof a && ("function" == typeof a.onChanged ? d._ConnectionStatusListener = a : "function" == typeof a.onReceived && (d._ReceiveMessageListener = a));}, e.prototype.reconnect = function (a) {e._client.channel.reconnect(a);}, e.prototype.disconnect = function () {e._client.channel.disconnect(2);}, e.prototype.queryMsg = function (a, d, f, g, h) {"string" != typeof a && (a = c[a]), e._client.queryMessage(a, d, f, b.AT_MOST_ONCE, g, h);}, e.prototype.pubMsg = function (b, d, f, g, h, i) {"number" == typeof i ? i == a.MethodType.CUSTOMER_SERVICE ? e._client.publishMessage("pcuMsgP", d, f, g, h) : i == a.MethodType.RECALL && e._client.publishMessage("recallMsg", d, f, g, h) : e._client.publishMessage(c[10][b], d, f, g, h);}, e;}();a.Bridge = g;var h = function () {function b(a) {if (this.map = {}, this.connectCallback = null, !d._ReceiveMessageListener) throw new Error("please set onReceiveMessageListener");this._onReceived = d._ReceiveMessageListener.onReceived, this._client = a, this.syncMsgMap = new Object();}return b.prototype.putCallback = function (a, b, c) {var d = { Callback: a, Message: c };d.Callback.resumeTimer(), this.map[b] = d;}, b.prototype.setConnectCallback = function (b) {b && (this.connectCallback = new a.ConnectAck(b.onSuccess, b.onError, this._client));}, b.prototype.onReceived = function (b, c, d, e, f) {var h, i, j;if ("PublishMessage" != b._name) h = b, a.RongIMClient._storageProvider.setItem(this._client.userId, a.MessageUtil.int64ToTimestamp(h.dataTime));else {if ("s_ntf" == b.getTopic()) return h = a.RongIMClient.Protobuf.NotifyMsg.decode(b.getData()), void this._client.syncTime(h.type, a.MessageUtil.int64ToTimestamp(h.time), h.chrmId);if ("s_msg" == b.getTopic()) {h = a.RongIMClient.Protobuf.DownStreamMessage.decode(b.getData());var k = a.MessageUtil.int64ToTimestamp(h.dataTime);a.RongIMClient._storageProvider.setItem(this._client.userId, k), a.RongIMClient._memoryStore.lastReadTime.get(this._client.userId, k);} else {if ("s_stat" == b.getTopic()) return h = a.RongIMClient.Protobuf.GetUserStatusOutput.decode(b.getData()), h = a.RongInnerTools.convertUserStatus(h), void a.RongIMClient.userStatusObserver.notify({ key: h.userId, entity: h });if (g._client.sdkVer && "1.0.0" == g._client.sdkVer) return;h = a.RongIMClient.Protobuf.UpStreamMessage.decode(b.getData());var l = b.getTopic(),m = l.substr(0, 2);"pp" == m ? h.type = 1 : "pd" == m ? h.type = 2 : "pg" == m ? h.type = 3 : "ch" == m ? h.type = 4 : "pc" == m && (h.type = 5), h.groupId = b.getTargetId(), h.fromUserId = this._client.userId, h.dataTime = Date.parse(new Date().toString());}if (!h) return;}var n = a.RongIMClient._memoryStore.isPullFinished;if (n || d) {i = a.MessageUtil.messageParser(h, this._onReceived, d);if (12 == i.conversationType) return a.RongIMClient.RTCListener(i);if (b.getTopic && "recallMsg" == b.getTopic()) {var o = i.content;i.conversationType = o.conversationType, i.targetId = o.targetId, i.messageId = null;}if (c && (i.messageUId = c.getMessageUId(), i.sentTime = c.getTimestamp(), a.RongIMClient._storageProvider.setItem(this._client.userId, i.sentTime)), null !== i) {if (!(i.conversationType == a.ConversationType.CHATROOM)) {a.RongIMClient.MessageParams[i.messageType].msgTag.getMessageTag() >= 0 && a.SyncTimeUtil.set(i);if (i.messageDirection == a.MessageDirection.SEND) {var p = a.RongIMClient._storageProvider,q = a.Bridge._client.userId,r = p.getItem("last_sentTime_" + q) || 0;if (i.sentTime <= r && !f) return;}}if (a.RongIMClient.MessageParams[i.messageType].msgTag.getMessageTag() > 0) {if (j = a.RongIMClient._dataAccessProvider.getConversation(i.conversationType, i.targetId, { onSuccess: function onSuccess() {}, onError: function onError() {} }), j || (j = a.RongIMClient.getInstance().createConversation(i.conversationType, i.targetId, "")), i.messageDirection == a.MessageDirection.RECEIVE && 64 == (64 & h.status)) {var s = a.RongIMClient._storageProvider.getItem("mentioneds_" + g._client.userId + "_" + i.conversationType + "_" + i.targetId),t = i.conversationType + "_" + i.targetId,u = {};if (i.content && i.content.mentionedInfo && (u[t] = { uid: i.messageUId, time: i.sentTime, mentionedInfo: i.content.mentionedInfo }, a.RongIMClient._storageProvider.setItem("mentioneds_" + g._client.userId + "_" + i.conversationType + "_" + i.targetId, JSON.stringify(u)), s = JSON.stringify(u)), s) {var u = JSON.parse(s);j.mentionedMsg = u[t];}}if (i.messageDirection == a.MessageDirection.RECEIVE && i.senderUserId != g._client.userId && (j.unreadMessageCount = j.unreadMessageCount + 1, a.RongUtil.supportLocalStorage())) {var v = a.RongIMClient._storageProvider.getItem("cu" + g._client.userId + j.conversationType + j.targetId),w = Number(v) + 1;a.RongIMClient._storageProvider.setItem("cu" + g._client.userId + j.conversationType + i.targetId, w), j.unreadMessageCount = w;}j.receivedTime = new Date().getTime(), j.receivedStatus = i.receivedStatus, j.senderUserId = i.sendUserId, j.notificationStatus = a.ConversationNotificationStatus.DO_NOT_DISTURB, j.latestMessageId = i.messageId, j.latestMessage = i, j.sentTime = i.sentTime, a.RongIMClient._dataAccessProvider.addConversation(j, { onSuccess: function onSuccess(a) {}, onError: function onError() {} });}if (i.conversationType != a.ConversationType.CUSTOMER_SERVICE || "ChangeModeResponseMessage" != i.messageType && "SuspendMessage" != i.messageType && "HandShakeResponseMessage" != i.messageType && "TerminateMessage" != i.messageType && "CustomerStatusUpdateMessage" != i.messageType && "TextMessage" != i.messageType && "InformationNotificationMessage" != i.messageType || a.RongIMClient._memoryStore.custStore.isInit) {if (i.conversationType == a.ConversationType.CUSTOMER_SERVICE && "HandShakeResponseMessage" != i.messageType) {if (!a.RongIMClient._memoryStore.custStore[i.targetId]) return;if ("TerminateMessage" == i.messageType && a.RongIMClient._memoryStore.custStore[i.targetId].sid != i.content.sid) return;}if (i.messageType === a.RongIMClient.MessageType.HandShakeResponseMessage) {var x = i.content.data;a.RongIMClient._memoryStore.custStore[i.targetId] = x, x.serviceType != a.CustomerType.ONLY_HUMAN && x.serviceType != a.CustomerType.HUMAN_FIRST || "1" == x.notAutoCha && a.RongIMClient.getInstance().switchToHumanMode(i.targetId, { onSuccess: function onSuccess() {}, onError: function onError() {} });}var y = new Date(),z = y.getMonth() + 1,A = y.getFullYear() + "/" + (1 == z.toString().length ? "0" + z : z) + "/" + y.getDate(),B = new Date(A).getTime() - i.sentTime < 0;if (a.RongUtil.supportLocalStorage() && i.messageType === a.RongIMClient.MessageType.ReadReceiptRequestMessage && B && i.messageDirection == a.MessageDirection.SEND) {var C = g._client.userId + i.content.messageUId + "SENT";a.RongIMClient._storageProvider.setItem(C, JSON.stringify({ count: 0, dealtime: i.sentTime, userIds: {} }));} else if (a.RongUtil.supportLocalStorage() && i.messageType === a.RongIMClient.MessageType.ReadReceiptRequestMessage && B) {var D = g._client.userId + i.conversationType + i.targetId + "RECEIVED",E = JSON.parse(a.RongIMClient._storageProvider.getItem(D));if (E) {if (i.senderUserId in E) {if (!E[i.senderUserId].uIds || !E[i.senderUserId].uIds || -1 != E[i.senderUserId].uIds.indexOf(i.content.messageUId)) return;E[i.senderUserId].uIds.push(i.content.messageUId), E[i.senderUserId].dealtime = i.sentTime, E[i.senderUserId].isResponse = !1, a.RongIMClient._storageProvider.setItem(D, JSON.stringify(E));} else {var F = { uIds: [i.content.messageUId], dealtime: i.sentTime, isResponse: !1 };E[i.senderUserId] = F, a.RongIMClient._storageProvider.setItem(D, JSON.stringify(E));}} else {var G = {};G[i.senderUserId] = { uIds: [i.content.messageUId], dealtime: i.sentTime, isResponse: !1 }, a.RongIMClient._storageProvider.setItem(D, JSON.stringify(G));}}if (a.RongUtil.supportLocalStorage() && i.messageType === a.RongIMClient.MessageType.ReadReceiptResponseMessage && B) {var H,I = i.content,J = I.receiptMessageDic[g._client.userId],C = "";if (i.receiptResponse || (i.receiptResponse = {}), J) {for (var K = [], L = 0, M = J.length; L < M; L++) {C = g._client.userId + J[L] + "SENT", !(H = JSON.parse(a.RongIMClient._storageProvider.getItem(C))) || i.senderUserId in H.userIds || (K.push(J[L]), H.count += 1, H.userIds[i.senderUserId] = i.sentTime, i.receiptResponse[J[L]] = H.count, a.RongIMClient._storageProvider.setItem(C, JSON.stringify(H)));}I.receiptMessageDic[g._client.userId] = K, i.content = I;}}var N = this;if (a.RongIMClient._voipProvider && ["AcceptMessage", "RingingMessage", "HungupMessage", "InviteMessage", "MediaModifyMessage", "MemberModifyMessage"].indexOf(i.messageType) > -1) setTimeout(function () {a.RongIMClient._voipProvider.onReceived(i);});else {var O = e || 0,P = !n;setTimeout(function () {N._onReceived(i, O, P);});}}}}}, b.prototype.handleMessage = function (b) {if (b) switch (b._name) {case "ConnAckMessage":g._client.handler.connectCallback.process(b.getStatus(), b.getUserId(), b.getTimestamp());break;case "PublishMessage":b.getSyncMsg() || 0 == b.getQos() || g._client.channel.writeAndFlush(new a.PubAckMessage(b.getMessageId())), b.getSyncMsg() && !a.RongIMClient._memoryStore.depend.isPolling ? g._client.handler.syncMsgMap[b.getMessageId()] = b : g._client.handler.onReceived(b);break;case "QueryAckMessage":0 != b.getQos() && g._client.channel.writeAndFlush(new a.QueryConMessage(b.getMessageId()));var c = g._client.handler.map[b.getMessageId()];c && (c.Callback.process(b.getStatus(), b.getData(), b.getDate(), c.Message), delete g._client.handler.map[b.getMessageId()]);break;case "PubAckMessage":var d = g._client.handler.map[b.getMessageId()];if (d) d.Callback.process(b.getStatus() || 0, b.getMessageUId(), b.getTimestamp(), d.Message, b.getMessageId()), delete g._client.handler.map[b.getMessageId()];else {var e = a.Bridge._client.userId;a.RongIMClient._storageProvider.setItem("last_sentTime_" + e, b.timestamp), g._client.handler.onReceived(g._client.handler.syncMsgMap[b.messageId], b, null, null, !0), delete g._client.handler.syncMsgMap[b.getMessageId()];}break;case "PingRespMessage":a.RongIMClient._memoryStore.isFirstPingMsg ? a.RongIMClient._memoryStore.isFirstPingMsg = !1 : g._client.pauseTimer();break;case "DisconnectMessage":g._client.channel.disconnect(b.getStatus());}}, b;}();a.MessageHandler = h;}(RongIMLib || (RongIMLib = {}));var __extends = this && this.__extends || function (a, b) {function c() {this.constructor = a;}for (var d in b) {b.hasOwnProperty(d) && (a[d] = b[d]);}a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c());},RongIMLib;!function (a) {var b = function () {function b(a) {this.timeout = null, this.onError = null, a && "number" == typeof a ? this.timeoutMillis = a : (this.timeoutMillis = 3e4, this.onError = a);}return b.prototype.resumeTimer = function () {var a = this;this.timeoutMillis > 0 && !this.timeout && (this.timeout = setTimeout(function () {a.readTimeOut(!0);}, this.timeoutMillis));}, b.prototype.pauseTimer = function () {this.timeout && (clearTimeout(this.timeout), this.timeout = null);}, b.prototype.readTimeOut = function (b) {b && this.onError ? this.onError(a.ErrorCode.TIMEOUT) : this.pauseTimer();}, b;}();a.MessageCallback = b;var c = function () {function b() {this.publicServiceList = [];}return b.getInstance = function () {return new b();}, b.prototype.pottingProfile = function (b) {var c;this.profile = new a.PublicServiceProfile(), c = JSON.parse(b.extra), this.profile.isGlobal = c.isGlobal, this.profile.introduction = c.introduction, this.profile.menu = c.menu, this.profile.hasFollowed = c.follow, this.profile.publicServiceId = b.mpid, this.profile.name = b.name, this.profile.portraitUri = b.portraitUrl, this.profile.conversationType = "mc" == b.type ? a.ConversationType.APP_PUBLIC_SERVICE : a.ConversationType.PUBLIC_SERVICE, this.publicServiceList.push(this.profile);}, b.prototype.mapping = function (b, c) {switch (c) {case "GetUserInfoOutput":return new a.UserInfo(b.userId, b.userName, b.userPortrait);case "GetQNupTokenOutput":return { deadline: a.MessageUtil.int64ToTimestamp(b.deadline), token: b.token };case "GetQNdownloadUrlOutput":return { downloadUrl: b.downloadUrl };case "CreateDiscussionOutput":return b.id;case "ChannelInfoOutput":var d = new a.Discussion();return d.creatorId = b.adminUserId, d.id = b.channelId, d.memberIdList = b.firstTenUserIds, d.name = b.channelName, d.isOpen = b.openStatus, d;case "GroupHashOutput":return b.result;case "QueryBlackListOutput":return b.userIds;case "SearchMpOutput":case "PullMpOutput":if (b.info) {var e = this;Array.forEach(b.info, function (a) {setTimeout(function () {e.pottingProfile(a);}, 100);});}return this.publicServiceList;default:return b;}}, b;}();a.CallbackMapping = c;var d = function (c) {function d(a, b) {c.call(this, b), this._cb = a, this._timeout = b;}return __extends(d, c), d.prototype.process = function (b, c, d, e, f) {if (this.readTimeOut(), 0 == b) {e && (e.setSentStatus = b);if (a.RongIMClient._memoryStore.isPullFinished) {var g = a.Bridge._client.userId;a.RongIMClient._storageProvider.setItem("last_sentTime_" + g, d), a.SyncTimeUtil.set({ messageDirection: a.MessageDirection.SEND, sentTime: d });}this._cb({ messageUId: c, timestamp: d, messageId: f });} else this._timeout(b, { messageUId: c, sentTime: d });}, d.prototype.readTimeOut = function (a) {b.prototype.readTimeOut.call(this, a);}, d;}(b);a.PublishCallback = d;var e = function (d) {function e(a, b) {d.call(this, b), this._cb = a, this._timeout = b;}return __extends(e, d), e.prototype.process = function (b, d, e, f) {if (this.readTimeOut(), f && d && 0 == b) {try {d = c.getInstance().mapping(a.RongIMClient.Protobuf[f].decode(d), f);} catch (g) {return void this._timeout(a.ErrorCode.UNKNOWN);}"GetUserInfoOutput" == f && (a.Client.userInfoMapping[d.userId] = d), this._cb(d);} else b > 0 ? this._timeout(b) : this._cb(b);}, e.prototype.readTimeOut = function (a) {b.prototype.readTimeOut.call(this, a);}, e;}(b);a.QueryCallback = e;var f = function (c) {function d(a, b, d) {c.call(this, b), this._client = d, this._cb = a, this._timeout = b;}return __extends(d, c), d.prototype.process = function (b, c, d) {if (this.readTimeOut(), 0 == b) {this._client.userId = c;var e = this;if (!a.RongIMClient._memoryStore.depend.isPolling && a.RongIMClient._memoryStore.isFirstPingMsg ? a.Bridge._client.checkSocket({ onSuccess: function onSuccess() {a.RongIMClient.isNotPullMsg || e._client.syncTime(void 0, void 0, void 0, !0);}, onError: function onError() {a.RongIMClient._memoryStore.isFirstPingMsg = !1, a.RongIMClient.getInstance().disconnect(), a.RongIMClient.connect(a.RongIMClient._memoryStore.token, a.RongIMClient._memoryStore.callback);} }) : a.RongIMClient.isNotPullMsg || e._client.syncTime(void 0, void 0, void 0, !0), a.Bridge._client.channel.socket.fire("StatusChanged", 0), this._client.reconnectObj.onSuccess) this._client.reconnectObj.onSuccess(c), delete this._client.reconnectObj.onSuccess;else {var f = this;setTimeout(function () {f._cb(c);}, 500);}a.RongIMClient._memoryStore.connectAckTime = d, new Date().getTime() - d ? a.RongIMClient._memoryStore.deltaTime = new Date().getTime() - d : a.RongIMClient._memoryStore.deltaTime = 0;} else if (6 == b) {a.RongIMClient.getInstance().disconnect();var f = this,g = f._client,h = g.appId,i = g.token;
          new a.Navigation().requestNavi(i, h, function () {g.clearHeartbeat();var b = new a.Client(i, h);a.Bridge._client = b, b.__init(function () {"websocket" == a.Transportations._TransportType && b.keepLive();});}, f._timeout, !1);} else a.Bridge._client.channel.socket.socket._status = b, this._client.reconnectObj.onError ? (this._client.reconnectObj.onError(b), delete this._client.reconnectObj.onError) : this._timeout(b);}, d.prototype.readTimeOut = function (a) {b.prototype.readTimeOut.call(this, a);}, d;}(b);a.ConnectAck = f;}(RongIMLib || (RongIMLib = {}));var RongIMLib;!function (a) {var b = function () {function b() {}return b.clear = function () {var b = a.RongIMClient._storageProvider;b.removeItem("rc_uid"), b.removeItem("serverIndex"), b.removeItem("rongSDK");}, b.prototype.getNaviSuccess = function (b) {var c = a.RongIMClient._storageProvider;c.setItem("fullnavi", JSON.stringify(b));var d = b.server;d && (d += ",");var e = b.backupServer || "",f = "{server}{backupServer}",g = a.RongUtil.tplEngine(f, { server: d, backupServer: e });g = g.split(","), c.setItem("servers", JSON.stringify(g));var h = a.RongIMClient._memoryStore.token,i = a.InnerUtil.getUId(h);c.setItem("rc_uid", i);var j = b.userId;if (c.setItem("current_user", j), b.voipCallInfo) {var k = JSON.parse(b.voipCallInfo);a.RongIMClient._memoryStore.voipStategy = k.strategy, c.setItem("voipStrategy", k.strategy);}var l = b.openMp;c.setItem("openMp" + i, l), a.RongIMClient._memoryStore.depend.openMp = l;}, b.prototype.connect = function (b, c, d) {var e = a.RongIMClient._storageProvider.getItem("appId");e && e != b && (a.RongIMClient._storageProvider.clearItem(), a.RongIMClient._storageProvider.setItem("appId", b)), e || a.RongIMClient._storageProvider.setItem("appId", b);var f = new a.Client(c, b);return this.requestNavi(c, b, function () {f.connect(d);}, d.onError, !0), f;}, b.prototype.requestNavi = function (c, d, e, f, g) {if (g) {var h = md5(c).slice(8, 16),i = a.RongIMClient._storageProvider,j = i.getItem("rongSDK"),k = a.Transportations._TransportType == j,l = i.getItem("rc_uid"),m = l == h,n = i.getItem("servers"),o = "string" == typeof n;if (m && k && o) {a.RongIMClient._memoryStore.voipStategy = i.getItem("voipStrategy");var p = i.getItem("openMp" + h);return a.RongIMClient._memoryStore.depend.openMp = p, void e();}}b.clear();var q = a.Channel._ConnectionStatusListener,r = a.RongIMClient._memoryStore.depend,s = r.navigaters,t = r.naviTimeout,u = r.maxNaviRetry,v = this,w = new a.Timer({ timeout: t }),x = 1,y = function y() {return x >= u;},z = new a.IndexTools({ items: s, onwheel: function onwheel() {x += 1;} }),A = function A() {if (y()) return void f(a.ConnectionStatus.RESPONSE_NAVI_ERROR);var b = z.get(),g = s[b];z.add();var h = function h(b) {w.pause(), q.onChanged(a.ConnectionStatus.RESPONSE_NAVI);var c = b.code;a.RongUtil.isEqual(c, 200) && (v.getNaviSuccess(b), e()), a.RongUtil.isEqual(c, 401) && f(a.ConnectionState.TOKEN_INCORRECT), a.RongUtil.isEqual(c, 403) && q.onChanged(a.ConnectionStatus.APPKEY_IS_FAKE);},i = function i(b) {a.RongUtil.isEqual(b, 0) || (w.pause(), q.onChanged(a.ConnectionStatus.RESPONSE_NAVI_ERROR), A());};q.onChanged(a.ConnectionStatus.REQUEST_NAVI);var j = v.request(g, d, c, h, i);w.resume(function () {q.onChanged(a.ConnectionStatus.RESPONSE_NAVI_TIMEOUT), j.abort(), A();});};A();}, b.prototype.request = function (b, c, d, e, f) {var g = a.RongIMClient._memoryStore.depend,h = g.isPolling ? "cometnavi" : "navi";d = encodeURIComponent(d);var i = a.RongIMClient.sdkver,j = a.RongUtil.getTimestamp(),k = "{navi}/{path}.js?appId={appId}&token={token}&callBack=null&v={sdkver}&r={random}",l = a.RongUtil.tplEngine(k, { navi: b, path: h, appId: c, token: d, sdkver: i, random: j });return a.RongUtil.request({ url: l, success: function success(a) {a = a.replace("null(", "").replace(");", "");var b = a.lastIndexOf(")");b == a.length - 1 && (a = a.substr(0, b)), e(JSON.parse(a));}, error: function error(a, b) {401 == a || 403 == a ? e(JSON.parse(b)) : f(a);} });}, b.Endpoint = new Object(), b;}();a.Navigation = b;}(RongIMLib || (RongIMLib = {}));var RongIMLib;!function (a) {var b = function () {function b(b) {this._name = "BaseMessage", this.lengthSize = 0, b instanceof a.Header ? this._header = b : this._header = new a.Header(b, !1, a.Qos.AT_MOST_ONCE, !1);}return b.prototype.read = function (a, b) {this.readMessage(a, b);}, b.prototype.write = function (b) {var c = new a.BinaryHelper(),d = c.convertStream(b);return this._headerCode = this.getHeaderFlag(), d.write(this._headerCode), this.writeMessage(d), d;}, b.prototype.getHeaderFlag = function () {return this._header.encode();}, b.prototype.getLengthSize = function () {return this.lengthSize;}, b.prototype.toBytes = function () {return this.write([]).getBytesArray();}, b.prototype.isRetained = function () {return this._header.retain;}, b.prototype.setRetained = function (a) {this._header.retain = a;}, b.prototype.setQos = function (b) {this._header.qos = "[object Object]" == Object.prototype.toString.call(b) ? b : a.Qos[b];}, b.prototype.setDup = function (a) {this._header.dup = a;}, b.prototype.isDup = function () {return this._header.dup;}, b.prototype.getType = function () {return this._header.type;}, b.prototype.getQos = function () {return this._header.qos;}, b.prototype.messageLength = function () {return 0;}, b.prototype.writeMessage = function (a) {}, b.prototype.readMessage = function (a, b) {}, b.prototype.init = function (a) {var b,c,d = this;for (c in a) {a.hasOwnProperty(c) && (b = c.replace(/^\w/, function (a) {var b = a.charCodeAt(0);return "set" + (b >= 97 ? String.fromCharCode(-33 & b) : a);})) in d && ("status" == c ? d[b](disconnectStatus[a[c]] ? disconnectStatus[a[c]] : a[c]) : d[b](a[c]));}}, b;}();a.BaseMessage = b;var c = function (b) {function c(c) {switch (b.call(this, 0 == arguments.length || 3 == arguments.length ? a.Type.CONNECT : arguments[0]), this._name = "ConnectMessage", this.CONNECT_HEADER_SIZE = 12, this.protocolId = "RCloud", this.binaryHelper = new a.BinaryHelper(), this.protocolVersion = 3, arguments.length) {case 0:case 1:case 3:if (!arguments[0] || arguments[0].length > 64) throw new Error("ConnectMessage:Client Id cannot be null and must be at most 64 characters long: " + arguments[0]);this.clientId = arguments[0], this.cleanSession = arguments[1], this.keepAlive = arguments[2];}}return __extends(c, b), c.prototype.messageLength = function () {var a = this.binaryHelper.toMQttString(this.clientId).length;return a += this.binaryHelper.toMQttString(this.willTopic).length, a += this.binaryHelper.toMQttString(this.will).length, a += this.binaryHelper.toMQttString(this.appId).length, (a += this.binaryHelper.toMQttString(this.token).length) + this.CONNECT_HEADER_SIZE;}, c.prototype.readMessage = function (a) {this.protocolId = a.readUTF(), this.protocolVersion = a.readByte();var b = a.readByte();if (this.hasAppId = (128 & b) > 0, this.hasToken = (64 & b) > 0, this.retainWill = (32 & b) > 0, this.willQos = b >> 3 & 3, this.hasWill = (4 & b) > 0, this.cleanSession = (32 & b) > 0, this.keepAlive = 256 * a.read() + a.read(), this.clientId = a.readUTF(), this.hasWill && (this.willTopic = a.readUTF(), this.will = a.readUTF()), this.hasAppId) try {this.appId = a.readUTF();} catch (c) {throw new Error(c);}if (this.hasToken) try {this.token = a.readUTF();} catch (c) {throw new Error(c);}return a;}, c.prototype.writeMessage = function (a) {var b = this.binaryHelper.convertStream(a);b.writeUTF(this.protocolId), b.write(this.protocolVersion);var c = this.cleanSession ? 2 : 0;return c |= this.hasWill ? 4 : 0, c |= this.willQos ? this.willQos >> 3 : 0, c |= this.retainWill ? 32 : 0, c |= this.hasToken ? 64 : 0, c |= this.hasAppId ? 128 : 0, b.write(c), b.writeChar(this.keepAlive), b.writeUTF(this.clientId), this.hasWill && (b.writeUTF(this.willTopic), b.writeUTF(this.will)), this.hasAppId && b.writeUTF(this.appId), this.hasToken && b.writeUTF(this.token), b;}, c;}(b);a.ConnectMessage = c;var d = function (b) {function c(c) {b.call(this, 0 == arguments.length ? a.Type.CONNACK : 1 == arguments.length ? arguments[0] instanceof a.Header ? arguments[0] : a.Type.CONNACK : null), this._name = "ConnAckMessage", this.MESSAGE_LENGTH = 2, this.binaryHelper = new a.BinaryHelper();var d = this;switch (arguments.length) {case 0:case 1:if (!(arguments[0] instanceof a.Header) && arguments[0] in a.ConnectionState) {if (null == arguments[0]) throw new Error("ConnAckMessage:The status of ConnAskMessage can't be null");d.setStatus(arguments[0]);}}}return __extends(c, b), c.prototype.messageLength = function () {var a = this.MESSAGE_LENGTH;return this.userId && (a += this.binaryHelper.toMQttString(this.userId).length), a;}, c.prototype.readMessage = function (a, b) {a.read();var c = +a.read();if (!(c >= 0 && c <= 12)) throw new Error("Unsupported CONNACK code:" + c);if (this.setStatus(c), b > this.MESSAGE_LENGTH) {this.setUserId(a.readUTF());var d = (a.readUTF(), a.readLong());this.setTimestamp(d);}}, c.prototype.writeMessage = function (a) {var b = this.binaryHelper.convertStream(a);switch (b.write(128), +status) {case 0:case 1:case 2:case 5:case 6:b.write(+status);break;case 3:case 4:b.write(3);break;default:throw new Error("Unsupported CONNACK code:" + status);}return this.userId && b.writeUTF(this.userId), b;}, c.prototype.setStatus = function (a) {this.status = a;}, c.prototype.setUserId = function (a) {this.userId = a;}, c.prototype.getStatus = function () {return this.status;}, c.prototype.getUserId = function () {return this.userId;}, c.prototype.setTimestamp = function (a) {this.timestrap = a;}, c.prototype.getTimestamp = function () {return this.timestrap;}, c;}(b);a.ConnAckMessage = d;var e = function (b) {function c(c) {b.call(this, c instanceof a.Header ? c : a.Type.DISCONNECT), this._name = "DisconnectMessage", this.MESSAGE_LENGTH = 2, this.binaryHelper = new a.BinaryHelper(), c instanceof a.Header || c in a.ConnectionStatus && (this.status = c);}return __extends(c, b), c.prototype.messageLength = function () {return this.MESSAGE_LENGTH;}, c.prototype.readMessage = function (a) {a.read();var b = +a.read();if (!(b >= 0 && b <= 5)) throw new Error("Unsupported CONNACK code:" + b);this.setStatus(disconnectStatus[b] ? disconnectStatus[b] : b);}, c.prototype.writeMessage = function (a) {var b = this.binaryHelper.convertStream(a);if (b.write(0), !(+status >= 1 && +status <= 3)) throw new Error("Unsupported CONNACK code:" + status);b.write(+status - 1);}, c.prototype.setStatus = function (a) {this.status = a;}, c.prototype.getStatus = function () {return this.status;}, c;}(b);a.DisconnectMessage = e;var f = function (b) {function c(c) {b.call(this, c && c instanceof a.Header ? c : a.Type.PINGREQ), this._name = "PingReqMessage";}return __extends(c, b), c;}(b);a.PingReqMessage = f;var g = function (b) {function c(c) {b.call(this, c && c instanceof a.Header ? c : a.Type.PINGRESP), this._name = "PingRespMessage";}return __extends(c, b), c;}(b);a.PingRespMessage = g;var h = function (b) {function c(c) {b.call(this, c), this._name = "RetryableMessage", this.binaryHelper = new a.BinaryHelper();}return __extends(c, b), c.prototype.messageLength = function () {return 2;}, c.prototype.writeMessage = function (a) {var b = this.binaryHelper.convertStream(a),c = this.getMessageId(),d = 255 & c,e = (65280 & c) >> 8;return b.write(e), b.write(d), b;}, c.prototype.readMessage = function (a, b) {var c = 256 * a.read() + a.read();this.setMessageId(parseInt(c, 10));}, c.prototype.setMessageId = function (a) {this.messageId = a;}, c.prototype.getMessageId = function () {return this.messageId;}, c;}(b);a.RetryableMessage = h;var i = function (b) {function c(c) {b.call(this, c instanceof a.Header ? c : a.Type.PUBACK), this.msgLen = 2, this.date = 0, this.millisecond = 0, this.timestamp = 0, this.binaryHelper = new a.BinaryHelper(), this._name = "PubAckMessage", c instanceof a.Header || b.prototype.setMessageId.call(this, c);}return __extends(c, b), c.prototype.messageLength = function () {return this.msgLen;}, c.prototype.writeMessage = function (a) {var b = this.binaryHelper.convertStream(a);h.prototype.writeMessage.call(this, b);}, c.prototype.readMessage = function (a, b) {h.prototype.readMessage.call(this, a), this.date = a.readInt(), this.status = 256 * a.read() + a.read(), this.millisecond = 256 * a.read() + a.read(), this.timestamp = 1e3 * this.date + this.millisecond, this.messageUId = a.readUTF();}, c.prototype.setStatus = function (a) {this.status = a;}, c.prototype.setTimestamp = function (a) {this.timestamp = a;}, c.prototype.setMessageUId = function (a) {this.messageUId = a;}, c.prototype.getStatus = function () {return this.status;}, c.prototype.getDate = function () {return this.date;}, c.prototype.getTimestamp = function () {return this.timestamp;}, c.prototype.getMessageUId = function () {return this.messageUId;}, c;}(h);a.PubAckMessage = i;var j = function (b) {function c(c, d, e) {b.call(this, 1 == arguments.length && c instanceof a.Header ? c : 3 == arguments.length ? a.Type.PUBLISH : 0), this._name = "PublishMessage", this.binaryHelper = new a.BinaryHelper(), this.syncMsg = !1, 3 == arguments.length && (this.topic = c, this.targetId = e, this.data = "string" == typeof d ? this.binaryHelper.toMQttString(d) : d);}return __extends(c, b), c.prototype.messageLength = function () {var a = 10;return a += this.binaryHelper.toMQttString(this.topic).length, a += this.binaryHelper.toMQttString(this.targetId).length, a += this.data.length;}, c.prototype.writeMessage = function (a) {var b = this.binaryHelper.convertStream(a);b.writeUTF(this.topic), b.writeUTF(this.targetId), h.prototype.writeMessage.apply(this, arguments), b.write(this.data);}, c.prototype.readMessage = function (a, b) {var c = 6;this.date = a.readInt(), this.topic = a.readUTF(), c += this.binaryHelper.toMQttString(this.topic).length, this.targetId = a.readUTF(), c += this.binaryHelper.toMQttString(this.targetId).length, h.prototype.readMessage.apply(this, arguments), this.data = new Array(b - c), this.data = a.read(this.data);}, c.prototype.setTopic = function (a) {this.topic = a;}, c.prototype.setData = function (a) {this.data = a;}, c.prototype.setTargetId = function (a) {this.targetId = a;}, c.prototype.setDate = function (a) {this.date = a;}, c.prototype.setSyncMsg = function (a) {this.syncMsg = a;}, c.prototype.getSyncMsg = function () {return this.syncMsg;}, c.prototype.getTopic = function () {return this.topic;}, c.prototype.getData = function () {return this.data;}, c.prototype.getTargetId = function () {return this.targetId;}, c.prototype.getDate = function () {return this.date;}, c;}(h);a.PublishMessage = j;var k = function (b) {function c(c, d, e) {b.call(this, c instanceof a.Header ? c : 3 == arguments.length ? a.Type.QUERY : null), this.binaryHelper = new a.BinaryHelper(), this._name = "QueryMessage", 3 == arguments.length && (this.data = "string" == typeof d ? this.binaryHelper.toMQttString(d) : d, this.topic = c, this.targetId = e);}return __extends(c, b), c.prototype.messageLength = function () {var a = 0;return a += this.binaryHelper.toMQttString(this.topic).length, a += this.binaryHelper.toMQttString(this.targetId).length, a += 2, a += this.data.length;}, c.prototype.writeMessage = function (a) {var b = this.binaryHelper.convertStream(a);b.writeUTF(this.topic), b.writeUTF(this.targetId), h.prototype.writeMessage.call(this, b), b.write(this.data);}, c.prototype.readMessage = function (a, b) {var c = 0;this.topic = a.readUTF(), this.targetId = a.readUTF(), c += this.binaryHelper.toMQttString(this.topic).length, c += this.binaryHelper.toMQttString(this.targetId).length, this.readMessage.apply(this, arguments), c += 2, this.data = new Array(b - c), a.read(this.data);}, c.prototype.setTopic = function (a) {this.topic = a;}, c.prototype.setData = function (a) {this.data = a;}, c.prototype.setTargetId = function (a) {this.targetId = a;}, c.prototype.getTopic = function () {return this.topic;}, c.prototype.getData = function () {return this.data;}, c.prototype.getTargetId = function () {return this.targetId;}, c;}(h);a.QueryMessage = k;var l = function (b) {function c(c) {b.call(this, c instanceof a.Header ? c : a.Type.QUERYCON), this._name = "QueryConMessage", c instanceof a.Header || b.prototype.setMessageId.call(this, c);}return __extends(c, b), c;}(h);a.QueryConMessage = l;var m = function (b) {function c(c) {b.call(this, c), this._name = "QueryAckMessage", this.binaryHelper = new a.BinaryHelper();}return __extends(c, b), c.prototype.readMessage = function (a, b) {h.prototype.readMessage.call(this, a), this.date = a.readInt(), this.setStatus(256 * a.read() + a.read()), b > 0 && (this.data = new Array(b - 8), this.data = a.read(this.data));}, c.prototype.getData = function () {return this.data;}, c.prototype.getStatus = function () {return this.status;}, c.prototype.getDate = function () {return this.date;}, c.prototype.setDate = function (a) {this.date = a;}, c.prototype.setStatus = function (a) {this.status = a;}, c.prototype.setData = function (a) {this.data = a;}, c;}(h);a.QueryAckMessage = m;}(RongIMLib || (RongIMLib = {}));var RongIMLib;!function (a) {var b = function () {function b(b) {var c = new a.BinaryHelper();this.out = c.convertStream(b);}return b.prototype.writeMessage = function (b) {b instanceof a.BaseMessage && b.write(this.out);}, b;}();a.MessageOutputStream = b;var c = function () {function b(b, c) {if (c) this.flags = b.headerCode;else {var d = new a.BinaryHelper().convertStream(b);this.flags = d.readByte(), this._in = d;}this.header = new a.Header(this.flags), this.isPolling = c, this.In = b;}return b.prototype.readMessage = function () {switch (this.header.getType()) {case 1:this.msg = new a.ConnectMessage(this.header);break;case 2:this.msg = new a.ConnAckMessage(this.header);break;case 3:this.msg = new a.PublishMessage(this.header), this.msg.setSyncMsg(this.header.getSyncMsg());break;case 4:this.msg = new a.PubAckMessage(this.header);break;case 5:this.msg = new a.QueryMessage(this.header);break;case 6:this.msg = new a.QueryAckMessage(this.header);break;case 7:this.msg = new a.QueryConMessage(this.header);break;case 9:case 11:case 13:this.msg = new a.PingRespMessage(this.header);break;case 8:case 10:case 12:this.msg = new a.PingReqMessage(this.header);break;case 14:this.msg = new a.DisconnectMessage(this.header);break;default:throw new Error("No support for deserializing " + this.header.getType() + " messages");}return this.isPolling ? this.msg.init(this.In) : this.msg.read(this._in, this.In.length - 1), this.msg;}, b;}();a.MessageInputStream = c;var d = function () {function b(b, c, d, e) {this.retain = !1, this.qos = a.Qos.AT_LEAST_ONCE, this.dup = !1, this.syncMsg = !1, b && +b == b && 1 == arguments.length ? (this.retain = (1 & b) > 0, this.qos = (6 & b) >> 1, this.dup = (8 & b) > 0, this.type = b >> 4 & 15, this.syncMsg = 8 == (8 & b)) : (this.type = b, this.retain = c, this.qos = d, this.dup = e);}return b.prototype.getSyncMsg = function () {return this.syncMsg;}, b.prototype.getType = function () {return this.type;}, b.prototype.encode = function () {var b = this;switch (this.qos) {case a.Qos[0]:b.qos = a.Qos.AT_MOST_ONCE;break;case a.Qos[1]:b.qos = a.Qos.AT_LEAST_ONCE;break;case a.Qos[2]:b.qos = a.Qos.EXACTLY_ONCE;break;case a.Qos[3]:b.qos = a.Qos.DEFAULT;}var c = this.type << 4;return c |= this.retain ? 1 : 0, c |= this.qos << 1, c |= this.dup ? 8 : 0;}, b.prototype.toString = function () {return "Header [type=" + this.type + ",retain=" + this.retain + ",qos=" + this.qos + ",dup=" + this.dup + "]";}, b;}();a.Header = d;var e = function () {function a() {}return a.prototype.writeUTF = function (a, b) {for (var c = [], d = 0, e = 0, f = a.length; e < f; e++) {var g = a.charCodeAt(e);g >= 0 && g <= 127 ? (d += 1, c.push(g)) : g >= 128 && g <= 2047 ? (d += 2, c.push(192 | 31 & g >> 6), c.push(128 | 63 & g)) : g >= 2048 && g <= 65535 && (d += 3, c.push(224 | 15 & g >> 12), c.push(128 | 63 & g >> 6), c.push(128 | 63 & g));}for (var e = 0, f = c.length; e < f; e++) {c[e] > 255 && (c[e] &= 255);}return b ? c : d <= 255 ? [0, d].concat(c) : [d >> 8, 255 & d].concat(c);}, a.prototype.readUTF = function (a) {if ("[object String]" == Object.prototype.toString.call(a)) return a;for (var b = "", c = a, d = 0, e = c.length; d < e; d++) {c[d] < 0 && (c[d] += 256);var f = c[d].toString(2),g = f.match(/^1+?(?=0)/);if (g && 8 == f.length) {for (var h = g[0].length, i = "", j = 0; j < h; j++) {i += c[j + d].toString(2).slice(2);}b += String.fromCharCode(parseInt(i, 2)), d += h - 1;} else b += String.fromCharCode(c[d]);}return b;}, a.prototype.convertStream = function (a) {return a instanceof f ? a : new f(a);}, a.prototype.toMQttString = function (a) {return this.writeUTF(a);}, a;}();a.BinaryHelper = e;var f = function () {function a(a) {this.position = 0, this.writen = 0, this.poolLen = 0, this.binaryHelper = new e(), this.pool = a, this.poolLen = a.length;}return a.prototype.check = function () {return this.position >= this.pool.length;}, a.prototype.readInt = function () {if (this.check()) return -1;for (var a = "", b = 0; b < 4; b++) {var c = this.pool[this.position++].toString(16);1 == c.length && (c = "0" + c), a += c.toString(16);}return parseInt(a, 16);}, a.prototype.readLong = function () {if (this.check()) return -1;for (var a = "", b = 0; b < 8; b++) {var c = this.pool[this.position++].toString(16);1 == c.length && (c = "0" + c), a += c;}return parseInt(a, 16);}, a.prototype.readTimestamp = function () {if (this.check()) return -1;for (var a = "", b = 0; b < 8; b++) {a += this.pool[this.position++].toString(16);}return a = a.substring(2, 8), parseInt(a, 16);}, a.prototype.readUTF = function () {if (this.check()) return -1;var a = this.readByte() << 8 | this.readByte();return this.binaryHelper.readUTF(this.pool.subarray(this.position, this.position += a));}, a.prototype.readByte = function () {if (this.check()) return -1;var a = this.pool[this.position++];return a > 255 && (a &= 255), a;}, a.prototype.read = function (a) {return a ? this.pool.subarray(this.position, this.poolLen) : this.readByte();}, a.prototype.write = function (a) {var b = a;return "[object array]" == Object.prototype.toString.call(b).toLowerCase() ? [].push.apply(this.pool, b) : +b == b && (b > 255 && (b &= 255), this.pool.push(b), this.writen++), b;}, a.prototype.writeChar = function (a) {if (+a != a) throw new Error("writeChar:arguments type is error");this.write(a >> 8 & 255), this.write(255 & a), this.writen += 2;}, a.prototype.writeUTF = function (a) {var b = this.binaryHelper.writeUTF(a);[].push.apply(this.pool, b), this.writen += b.length;}, a.prototype.toComplements = function () {for (var a = this.pool, b = 0; b < this.poolLen; b++) {a[b] > 128 && (a[b] -= 256);}return a;}, a.prototype.getBytesArray = function (a) {return a ? this.toComplements() : this.pool;}, a;}();a.RongIMStream = f;}(RongIMLib || (RongIMLib = {}));var RongIMLib;!function (a) {var b = function () {function b(a) {return this.connected = !1, this.isClose = !1, this.queue = [], this.empty = new Function(), this._socket = a, this;}return b.prototype.createTransport = function (b, c) {if (!b) throw new Error("URL can't be empty");this.url = b;var d = a.RongIMClient._memoryStore.depend,e = d.wsScheme;return b = a.RongUtil.tplEngine("{wsScheme}{url}", { wsScheme: e, url: b }), this.socket = new WebSocket(b), this.socket.binaryType = "arraybuffer", this.addEvent(), this.socket;}, b.prototype.send = function (b) {if (!this.connected && !this.isClose) return void this.queue.push(b);if (this.isClose) return void this._socket.fire("StatusChanged", a.ConnectionStatus.CONNECTION_CLOSED);var c = new a.RongIMStream([]);new a.MessageOutputStream(c).writeMessage(b);var d = c.getBytesArray(!0),e = new Int8Array(d);return this.socket.send(e.buffer), this;}, b.prototype.onData = function (b) {return a.MessageUtil.isArray(b) ? this._socket.onMessage(new a.MessageInputStream(b).readMessage()) : this._socket.onMessage(new a.MessageInputStream(a.MessageUtil.ArrayFormInput(b)).readMessage()), "";}, b.prototype.onClose = function (b) {var c = this;c.isClose = !0, c.socket = this.empty, a.Bridge._client.clearHeartbeat(), 1006 != b.code || this._status ? c._status = 0 : c._socket.fire("StatusChanged", a.ConnectionStatus.NETWORK_UNAVAILABLE);}, b.prototype.onError = function (a) {throw new Error(a);}, b.prototype.addEvent = function () {var a = this;a.socket.onopen = function () {a.connected = !0, a.isClose = !1, a.doQueue(), a._socket.fire("connect");}, a.socket.onmessage = function (b) {"string" == typeof b.data ? a.onData(b.data.split(",")) : a.onData(b.data);}, a.socket.onerror = function (b) {a.onError(b);}, a.socket.onclose = function (b) {a.onClose(b);};}, b.prototype.doQueue = function () {for (var a = this, b = 0, c = a.queue.length; b < c; b++) {a.send(a.queue[b]);}}, b.prototype.disconnect = function (a) {var b = this;b.socket.readyState && (b.isClose = !0, a && (b._status = a), b.socket.close());}, b.prototype.reconnect = function () {this.disconnect(), this.createTransport(this.url);}, b.prototype.close = function () {this.socket.close();}, b;}();a.SocketTransportation = b;}(RongIMLib || (RongIMLib = {}));var RongIMLib;!function (a) {var b = function () {function b(a) {return this.empty = new Function(), this.connected = !1, this.pid = +new Date() + Math.random() + "", this.queue = [], this.socket = a, this;}return b.prototype.createTransport = function (b, c) {if (!b) throw new Error("Url is empty,Please check it!");this.url = b;var d = a.RongIMClient._storageProvider.getItem("sId" + a.Navigation.Endpoint.userId),e = this;return d ? (setTimeout(function () {e.onSuccess('{"status":0,"userId":"' + a.Navigation.Endpoint.userId + '","headerCode":32,"messageId":0,"sessionid":"' + d + '"}'), e.connected = !0;}, 500), this) : (this.getRequest(b, !0), this);}, b.prototype.requestFactory = function (b, c, d) {var e = this.XmlHttpRequest();return d && (e.multipart = !0), e.open(c || "GET", a.RongIMClient._memoryStore.depend.protocol + b), "POST" == c && "setRequestHeader" in e && e.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=utf-8"), e;}, b.prototype.getRequest = function (a, b) {var c = this;c.xhr = this.requestFactory(a + "&pid=" + encodeURIComponent(c.pid), "GET"), "onload" in c.xhr ? (c.xhr.onload = function () {c.xhr.onload = c.empty, "lost params" == this.responseText ? c.onError() : c.onSuccess(this.responseText, b);}, c.xhr.onerror = function () {c.disconnect();}) : c.xhr.onreadystatechange = function () {4 == c.xhr.readyState && (c.xhr.onreadystatechange = c.empty, /^(200|202)$/.test(c.xhr.status) ? c.onSuccess(c.xhr.responseText, b) : /^(400|403)$/.test(c.xhr.status) ? c.onError() : c.disconnect());}, c.xhr.send();}, b.prototype.send = function (b) {var c = this,d = c.sendxhr = this.requestFactory(a.Navigation.Endpoint.host + "/websocket" + b.url + "&pid=" + encodeURIComponent(c.pid), "POST");"onload" in d ? (d.onload = function () {d.onload = c.empty, c.onData(d.responseText);}, d.onerror = function () {d.onerror = c.empty;}) : d.onreadystatechange = function () {4 == d.readyState && (this.onreadystatechange = this.empty, /^(202|200)$/.test(d.status) && c.onData(d.responseText));}, d.send(JSON.stringify(b.data));}, b.prototype.onData = function (b, c) {if (b && "lost params" != b) {var d = this,e = JSON.parse(b);return e.userId && (a.Navigation.Endpoint.userId = e.userId), c && a.RongIMClient._storageProvider.setItem("sId" + a.Navigation.Endpoint.userId, c), a.MessageUtil.isArray(e) || (e = [e]), Array.forEach(e, function (b) {d.socket.fire("message", new a.MessageInputStream(b, !0).readMessage());}), "";}}, b.prototype.XmlHttpRequest = function () {var a = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest();return "undefined" != typeof XMLHttpRequest && a ? new XMLHttpRequest() : "undefined" != typeof XDomainRequest ? new XDomainRequest() : new ActiveXObject("Microsoft.XMLHTTP");}, b.prototype.onClose = function () {this.xhr && (this.xhr.onload ? this.xhr.onreadystatechange = this.xhr.onload = this.empty : this.xhr.onreadystatechange = this.empty, this.xhr.abort(), this.xhr = null), this.sendxhr && (this.sendxhr.onload ? this.sendxhr.onreadystatechange = this.sendxhr.onload = this.empty : this.sendxhr.onreadystatechange = this.empty, this.sendxhr.abort(), this.sendxhr = null);}, b.prototype.disconnect = function () {a.RongIMClient._storageProvider.removeItem("sId" + a.Navigation.Endpoint.userId), a.RongIMClient._storageProvider.removeItem(a.Navigation.Endpoint.userId + "msgId"), this.onClose();}, b.prototype.reconnect = function () {this.disconnect(), this.createTransport(this.url);}, b.prototype.onSuccess = function (b, c) {var d = b.match(/"sessionid":"\S+?(?=")/);if (this.onData(b, d ? d[0].slice(13) : 0), /"headerCode":-32,/.test(b)) return a.RongIMClient._storageProvider.removeItem("sId" + a.Navigation.Endpoint.userId), void a.RongIMClient._storageProvider.removeItem(a.Navigation.Endpoint.userId + "msgId");this.getRequest(a.Navigation.Endpoint.host + "/pullmsg.js?sessionid=" + a.RongIMClient._storageProvider.getItem("sId" + a.Navigation.Endpoint.userId) + "&timestrap=" + encodeURIComponent(new Date().getTime() + Math.random() + "")), this.connected = !0, c && this.socket.fire("connect");}, b.prototype.onError = function () {a.RongIMClient._storageProvider.removeItem("sId" + a.Navigation.Endpoint.userId), a.RongIMClient._storageProvider.removeItem(a.Navigation.Endpoint.userId + "msgId"), this.onClose(), this.connected = !1, this.socket.fire("disconnect");}, b.prototype.close = function () {this.xhr.abort(), this.sendxhr = null;}, b;}();a.PollingTransportation = b;}(RongIMLib || (RongIMLib = {}));var typeMapping = { "RC:TxtMsg": "TextMessage", "RC:ImgMsg": "ImageMessage", "RC:VcMsg": "VoiceMessage", "RC:ImgTextMsg": "RichContentMessage", "RC:FileMsg": "FileMessage", "RC:HQVCMsg": "HQVoiceMessage", "RC:LBSMsg": "LocationMessage", "RC:InfoNtf": "InformationNotificationMessage", "RC:ContactNtf": "ContactNotificationMessage", "RC:ProfileNtf": "ProfileNotificationMessage", "RC:CmdNtf": "CommandNotificationMessage", "RC:DizNtf": "DiscussionNotificationMessage", "RC:CmdMsg": "CommandMessage", "RC:TypSts": "TypingStatusMessage", "RC:CsChaR": "ChangeModeResponseMessage", "RC:CsHsR": "HandShakeResponseMessage", "RC:CsEnd": "TerminateMessage", "RC:CsSp": "SuspendMessage", "RC:CsUpdate": "CustomerStatusUpdateMessage", "RC:ReadNtf": "ReadReceiptMessage", "RC:VCAccept": "AcceptMessage", "RC:VCRinging": "RingingMessage", "RC:VCSummary": "SummaryMessage", "RC:VCHangup": "HungupMessage", "RC:VCInvite": "InviteMessage", "RC:VCModifyMedia": "MediaModifyMessage", "RC:VCModifyMem": "MemberModifyMessage", "RC:CsContact": "CustomerContact", "RC:PSImgTxtMsg": "PublicServiceRichContentMessage", "RC:PSMultiImgTxtMsg": "PublicServiceMultiRichContentMessage", "RC:GrpNtf": "GroupNotificationMessage", "RC:PSCmd": "PublicServiceCommandMessage", "RC:RcCmd": "RecallCommandMessage", "RC:SRSMsg": "SyncReadStatusMessage", "RC:RRReqMsg": "ReadReceiptRequestMessage", "RC:RRRspMsg": "ReadReceiptResponseMessage", "RCJrmf:RpMsg": "JrmfRedPacketMessage", "RCJrmf:RpOpendMsg": "JrmfRedPacketOpenedMessage" },registerMessageTypeMapping = {},HistoryMsgType = { 4: "qryCMsg", 2: "qryDMsg", 3: "qryGMsg", 1: "qryPMsg", 6: "qrySMsg", 7: "qryPMsg", 8: "qryPMsg", 5: "qryCMsg" },disconnectStatus = { 1: 6 },RongIMLib;!function (RongIMLib) {var Transportations = function () {function a() {}return a._TransportType = RongIMLib.Socket.WEBSOCKET, a;}();RongIMLib.Transportations = Transportations;var SyncTimeUtil = function () {function a() {}return a.$getKey = function (a) {var b = RongIMLib.Bridge._client,c = b.userId,d = 1 == a.messageDirection ? "send" : "receive",e = RongIMLib.RongIMClient._memoryStore.appKey;return RongIMLib.RongUtil.tplEngine("{appkey}_{userId}_{direction}box", { appkey: e, userId: c, direction: d });}, a.set = function (b) {var c = a.$getKey(b),d = b.sentTime;RongIMLib.RongIMClient._storageProvider.setItem(c, d);}, a.get = function () {var b = a.$getKey({ messageDirection: RongIMLib.MessageDirection.SEND }),c = a.$getKey({ messageDirection: RongIMLib.MessageDirection.RECEIVE }),d = RongIMLib.RongIMClient._storageProvider;return { sent: Number(d.getItem(b) || 0), received: Number(d.getItem(c) || 0) };}, a;}();RongIMLib.SyncTimeUtil = SyncTimeUtil;var MessageUtil = function () {function MessageUtil() {}return MessageUtil.checkStorageSize = function () {return JSON.stringify(localStorage).length < 468e4;}, MessageUtil.getFirstKey = function (a) {var b = "";for (var c in a) {b = c;break;}return b;}, MessageUtil.isEmpty = function (a) {var b = !0;for (var c in a) {b = !1;break;}return b;}, MessageUtil.ArrayForm = function (a) {if ("[object ArrayBuffer]" == Object.prototype.toString.call(a)) {var b = new Int8Array(a);return [].slice.call(b);}return a;}, MessageUtil.ArrayFormInput = function (a) {if ("[object ArrayBuffer]" == Object.prototype.toString.call(a)) {return new Uint8Array(a);}return a;}, MessageUtil.indexOf = function (a, b, c) {for (var d = a.length, e = c < 0 ? Math.max(0, +c) : c || 0; e < d; e++) {if (a[e] == b) return e;}return -1;}, MessageUtil.isArray = function (a) {return "[object Array]" == Object.prototype.toString.call(a);}, MessageUtil.forEach = function (a, b) {return [].forEach ? function (a, b) {[].forEach.call(a, b);} : function (a, b) {for (var c = 0; c < a.length; c++) {b.call(a, a[c], c, a);}};}, MessageUtil.remove = function (a, b) {for (var c = 0, d = a.length; c < d; c++) {if (b(a[c])) return a.splice(c, 1)[0];}return null;}, MessageUtil.int64ToTimestamp = function (a, b) {if (void 0 === a.low) return a;var c = a.low;c < 0 && (c += 4294967296), c = c.toString(16);var d = parseInt(a.high.toString(16) + "00000000".replace(new RegExp("0{" + c.length + "}$"), c), 16);return b ? new Date(d) : d;}, MessageUtil.messageParser = function (entity, onReceived, offlineMsg) {var message = new RongIMLib.Message(),content = entity.content,de,objectName = entity.classname,val,isUseDef = !1;try {RongIMLib.RongIMClient._memoryStore.depend.isPolling ? (val = new RongIMLib.BinaryHelper().readUTF(content.offset ? MessageUtil.ArrayForm(content.buffer).slice(content.offset, content.limit) : content), de = JSON.parse(val)) : (val = new RongIMLib.BinaryHelper().readUTF(content.offset ? MessageUtil.ArrayFormInput(content.buffer).subarray(content.offset, content.limit) : content), de = JSON.parse(val));} catch (ex) {de = val, isUseDef = !0;}if (objectName in typeMapping) {var str = "new RongIMLib." + typeMapping[objectName] + "(de)";message.content = eval(str), message.messageType = typeMapping[objectName];} else if (objectName in registerMessageTypeMapping) {var str = "new RongIMLib.RongIMClient.RegisterMessage." + registerMessageTypeMapping[objectName] + "(de)";message.content = isUseDef ? eval(str).decode(de) : eval(str), message.messageType = registerMessageTypeMapping[objectName];} else message.content = new RongIMLib.UnknownMessage({ content: de, objectName: objectName }), message.messageType = "UnknownMessage";var dateTime = MessageUtil.int64ToTimestamp(entity.dataTime);message.sentTime = dateTime > 0 ? dateTime : +new Date(), message.senderUserId = entity.fromUserId, message.conversationType = entity.type, entity.fromUserId == RongIMLib.Bridge._client.userId ? message.targetId = entity.groupId : message.targetId = /^[234]$/.test(entity.type || entity.getType()) ? entity.groupId : message.senderUserId;var selfUserId = RongIMLib.Bridge._client.userId,isSelfSend = 1 == entity.direction || message.senderUserId === selfUserId;
        isSelfSend ? (message.messageDirection = RongIMLib.MessageDirection.SEND, message.senderUserId = RongIMLib.Bridge._client.userId) : message.messageDirection = RongIMLib.MessageDirection.RECEIVE;var isSelfToSelf = message.senderUserId === selfUserId && message.targetId === selfUserId;return isSelfToSelf && (message.messageDirection = RongIMLib.MessageDirection.RECEIVE), message.messageUId = entity.msgId, message.receivedTime = new Date().getTime(), message.messageId = message.conversationType + "_" + ~~(16777215 * Math.random()), message.objectName = objectName, message.receivedStatus = RongIMLib.ReceivedStatus.READ, 2 == (2 & entity.status) && (message.receivedStatus = RongIMLib.ReceivedStatus.RETRIEVED), message.offLineMessage = !!offlineMsg, offlineMsg || RongIMLib.RongIMClient._memoryStore.connectAckTime > message.sentTime && (message.offLineMessage = !0), message;}, MessageUtil.detectCMP = function (a) {var b = new XMLHttpRequest();b.onreadystatechange = function () {if (4 == b.readyState) {200 == b.status ? a.success() : a.fail(b.status);}};var c = a.url,d = a.url,c = a.method || "GET";b.open(c, d);var e = a.headers;for (var f in e) {var g = e[f];b.setRequestHeader(f, g);}var h = JSON.stringify(a.body || {});return b.send(h), b;}, MessageUtil.sign = { converNum: 1, msgNum: 1, isMsgStart: !0, isConvStart: !0 }, MessageUtil;}();RongIMLib.MessageUtil = MessageUtil;var MessageIdHandler = function () {function a() {}return a.init = function () {this.messageId = +(RongIMLib.RongIMClient._storageProvider.getItem(RongIMLib.Navigation.Endpoint.userId + "msgId") || RongIMLib.RongIMClient._storageProvider.setItem(RongIMLib.Navigation.Endpoint.userId + "msgId", 0) || 0);}, a.messageIdPlus = function (a) {return RongIMLib.RongIMClient._memoryStore.depend.isPolling && this.init(), this.messageId >= 65535 ? (a(), !1) : (this.messageId++, RongIMLib.RongIMClient._memoryStore.depend.isPolling && RongIMLib.RongIMClient._storageProvider.setItem(RongIMLib.Navigation.Endpoint.userId + "msgId", this.messageId), this.messageId);}, a.clearMessageId = function () {this.messageId = 0, RongIMLib.RongIMClient._memoryStore.depend.isPolling && RongIMLib.RongIMClient._storageProvider.setItem(RongIMLib.Navigation.Endpoint.userId + "msgId", this.messageId);}, a.getMessageId = function () {return RongIMLib.RongIMClient._memoryStore.depend.isPolling && this.init(), this.messageId;}, a.messageId = 0, a;}();RongIMLib.MessageIdHandler = MessageIdHandler;var RongInnerTools = function () {function a() {}return a.convertUserStatus = function (a) {a = RongIMLib.RongUtil.rename(a, { subUserId: "userId" });var b = JSON.parse(a.status),c = b.us;return c ? (a.status = RongIMLib.RongUtil.rename(c, { o: "online", p: "platform", s: "status" }), a) : a;}, a;}();RongIMLib.RongInnerTools = RongInnerTools;}(RongIMLib || (RongIMLib = {}));var RongIMLib;!function (a) {var b = function () {function a(a) {throw new Error("This method is abstract, you must implement this method in inherited class.");}return a.obtain = function () {throw new Error("This method is abstract, you must implement this method in inherited class.");}, a;}();a.MessageContent = b;var c = function (a) {function b() {a.apply(this, arguments);}return __extends(b, a), b;}(b);a.NotificationMessage = c;var d = function (a) {function b() {a.apply(this, arguments);}return __extends(b, a), b;}(b);a.StatusMessage = d;var e = function () {function b() {}return b.modelClone = function (a) {var b = {};for (var c in a) {"messageName" != c && "encode" != c && (b[c] = a[c]);}return b;}, b.modleCreate = function (b, c) {var d = function d(e) {var f = this;for (var g in b) {f[b[g]] = e[b[g]];}d.prototype.messageName = c, d.prototype.encode = function () {return JSON.stringify(a.ModelUtil.modelClone(this));};};return d;}, b;}();a.ModelUtil = e;}(RongIMLib || (RongIMLib = {}));var RongIMLib;!function (a) {var b = function () {function b(a) {this.messageName = "CustomerStatusMessage", this.status = a.status;}return b.obtain = function () {return null;}, b.prototype.encode = function () {return JSON.stringify(a.ModelUtil.modelClone(this));}, b;}();a.CustomerStatusMessage = b;var c = function () {function b(a) {this.messageName = "ChangeModeResponseMessage", this.code = a.code, this.data = a.data, this.msg = a.msg;}return b.obtain = function () {return null;}, b.prototype.encode = function () {return JSON.stringify(a.ModelUtil.modelClone(this));}, b;}();a.ChangeModeResponseMessage = c;var d = function () {function b(a) {this.messageName = "ChangeModeMessage", this.uid = a.uid, this.sid = a.sid, this.pid = a.pid;}return b.obtain = function () {return null;}, b.prototype.encode = function () {return JSON.stringify(a.ModelUtil.modelClone(this));}, b;}();a.ChangeModeMessage = d;var e = function () {function b(a) {this.messageName = "CustomerStatusUpdateMessage", this.serviceStatus = a.serviceStatus, this.sid = a.sid;}return b.obtain = function () {return null;}, b.prototype.encode = function () {return JSON.stringify(a.ModelUtil.modelClone(this));}, b;}();a.CustomerStatusUpdateMessage = e;var f = function () {function b(a) {this.messageName = "HandShakeMessage", a && (this.requestInfo = a.requestInfo, this.userInfo = a.userInfo);}return b.obtain = function () {return null;}, b.prototype.encode = function () {return JSON.stringify(a.ModelUtil.modelClone(this));}, b;}();a.HandShakeMessage = f;var g = function () {function b(a) {this.messageName = "CustomerContact", this.page = a.page, this.nickName = a.nickName, this.routingInfo = a.routingInfo, this.info = a.info, this.requestInfo = a.requestInfo;}return b.prototype.encode = function () {return JSON.stringify(a.ModelUtil.modelClone(this));}, b;}();a.CustomerContact = g;var h = function () {function b(a) {this.messageName = "EvaluateMessage", this.uid = a.uid, this.sid = a.sid, this.pid = a.pid, this.source = a.source, this.suggest = a.suggest, this.isresolve = a.isresolve, this.type = a.type;}return b.obtain = function () {return null;}, b.prototype.encode = function () {return JSON.stringify(a.ModelUtil.modelClone(this));}, b;}();a.EvaluateMessage = h;var i = function () {function b(a) {this.messageName = "HandShakeResponseMessage", this.msg = a.msg, this.status = a.status, this.data = a.data;}return b.obtain = function () {return null;}, b.prototype.encode = function () {return JSON.stringify(a.ModelUtil.modelClone(this));}, b;}();a.HandShakeResponseMessage = i;var j = function () {function b(a) {this.messageName = "SuspendMessage", this.uid = a.uid, this.sid = a.sid, this.pid = a.pid;}return b.obtain = function () {return null;}, b.prototype.encode = function () {return JSON.stringify(a.ModelUtil.modelClone(this));}, b;}();a.SuspendMessage = j;var k = function () {function b(a) {this.messageName = "TerminateMessage", this.code = a.code, this.msg = a.msg, this.sid = a.sid;}return b.obtain = function () {return null;}, b.prototype.encode = function () {return JSON.stringify(a.ModelUtil.modelClone(this));}, b;}();a.TerminateMessage = k;}(RongIMLib || (RongIMLib = {}));var RongIMLib;!function (a) {var b = function () {function a(a) {this.messageName = "IsTypingStatusMessage";}return a.prototype.encode = function () {}, a.prototype.getMessage = function () {return null;}, a;}();a.IsTypingStatusMessage = b;}(RongIMLib || (RongIMLib = {}));var RongIMLib;!function (a) {var b = function () {function b(a) {if (this.messageName = "InformationNotificationMessage", 0 == arguments.length) throw new Error("Can not instantiate with empty parameters, use obtain method instead -> InformationNotificationMessage.");this.message = a.message, this.extra = a.extra, a.user && (this.user = a.user);}return b.obtain = function (a) {return new b({ message: a, extra: "" });}, b.prototype.encode = function () {return JSON.stringify(a.ModelUtil.modelClone(this));}, b;}();a.InformationNotificationMessage = b;var c = function () {function b(a) {if (this.messageName = "CommandMessage", 0 == arguments.length) throw new Error("Can not instantiate with empty parameters, use obtain method instead -> CommandMessage.");try {"[object String]" == Object.prototype.toString.call(a.data) ? this.data = JSON.parse(a.data) : this.data = a.data;} catch (b) {this.data = a.data;}this.name = a.name, this.extra = a.extra;}return b.obtain = function (a) {return new b({ data: a, extra: "" });}, b.prototype.encode = function () {return JSON.stringify(a.ModelUtil.modelClone(this));}, b;}();a.CommandMessage = c;var d = function () {function c(a) {if (this.messageName = "ContactNotificationMessage", 0 == arguments.length) throw new Error("Can not instantiate with empty parameters, use obtain method instead -> ContactNotificationMessage.");this.operation = a.operation, this.targetUserId = a.targetUserId, this.message = a.message, this.extra = a.extra, this.sourceUserId = a.sourceUserId, a.user && (this.user = a.user);}return c.obtain = function (a, c, d, e) {return new b({ operation: a, sourceUserId: c, targetUserId: d, message: e });}, c.prototype.encode = function () {return JSON.stringify(a.ModelUtil.modelClone(this));}, c.CONTACT_OPERATION_ACCEPT_RESPONSE = "ContactOperationAcceptResponse", c.CONTACT_OPERATION_REJECT_RESPONSE = "ContactOperationRejectResponse", c.CONTACT_OPERATION_REQUEST = "ContactOperationRequest", c;}();a.ContactNotificationMessage = d;var e = function () {function b(a) {if (this.messageName = "ProfileNotificationMessage", 0 == arguments.length) throw new Error("Can not instantiate with empty parameters, use obtain method instead -> ProfileNotificationMessage.");this.operation = a.operation;try {"[object String]" == Object.prototype.toString.call(a.data) ? this.data = JSON.parse(a.data) : this.data = a.data;} catch (b) {this.data = a.data;}this.extra = a.extra, a.user && (this.user = a.user);}return b.obtain = function (a, c) {return new b({ operation: a, data: c });}, b.prototype.encode = function () {return JSON.stringify(a.ModelUtil.modelClone(this));}, b;}();a.ProfileNotificationMessage = e;var f = function () {function b(a) {if (this.messageName = "CommandNotificationMessage", 0 == arguments.length) throw new Error("Can not instantiate with empty parameters, use obtain method instead -> ProfileNotificationMessage.");try {"[object String]" == Object.prototype.toString.call(a.data) ? this.data = JSON.parse(a.data) : this.data = a.data;} catch (b) {this.data = a.data;}this.name = a.name, this.extra = a.extra, a.user && (this.user = a.user);}return b.obtain = function (a, c) {return new b({ name: a, data: c, extra: "" });}, b.prototype.encode = function () {return JSON.stringify(a.ModelUtil.modelClone(this));}, b;}();a.CommandNotificationMessage = f;var g = function () {function b(a) {if (this.messageName = "DiscussionNotificationMessage", 0 == arguments.length) throw new Error("Can not instantiate with empty parameters, use obtain method instead -> DiscussionNotificationMessage.");this.extra = a.extra, this.extension = a.extension, this.type = a.type, this.isHasReceived = a.isHasReceived, this.operation = a.operation, this.user = a.user, a.user && (this.user = a.user);}return b.prototype.encode = function () {return JSON.stringify(a.ModelUtil.modelClone(this));}, b;}();a.DiscussionNotificationMessage = g;var h = function () {function b(a) {if (this.messageName = "GroupNotificationMessage", 0 == arguments.length) throw new Error("Can not instantiate with empty parameters, use obtain method instead -> GroupNotificationMessage.");a.operatorUserId && (this.operatorUserId = a.operatorUserId), a.operation && (this.operation = a.operation), a.data && (this.data = a.data), a.message && (this.message = a.message), a.extra && (this.extra = a.extra);}return b.prototype.encode = function () {return JSON.stringify(a.ModelUtil.modelClone(this));}, b;}();a.GroupNotificationMessage = h;}(RongIMLib || (RongIMLib = {}));var RongIMLib;!function (a) {var b = function () {function b(a) {if (this.messageName = "TextMessage", 0 == arguments.length) throw new Error("Can not instantiate with empty parameters, use obtain method instead -> TextMessage.");this.content = a.content, this.extra = a.extra, a.user && (this.user = a.user), a.mentionedInfo && (this.mentionedInfo = a.mentionedInfo);}return b.obtain = function (a) {return new b({ extra: "", content: a });}, b.prototype.encode = function () {return JSON.stringify(a.ModelUtil.modelClone(this));}, b;}();a.TextMessage = b;var c = function () {function b(a) {if (this.messageName = "TypingStatusMessage", 0 == arguments.length) throw new Error("Can not instantiate with empty parameters, use obtain method instead -> TypingStatusMessage.");this.typingContentType = a.typingContentType, this.data = a.data;}return b.obtain = function (a, c) {return new b({ typingContentType: a, data: c });}, b.prototype.encode = function () {return JSON.stringify(a.ModelUtil.modelClone(this));}, b;}();a.TypingStatusMessage = c;var d = function () {function b(a) {if (this.messageName = "ReadReceiptMessage", 0 == arguments.length) throw new Error("Can not instantiate with empty parameters, use obtain method instead -> ReadReceiptMessage.");this.lastMessageSendTime = a.lastMessageSendTime, this.messageUId = a.messageUId, this.type = a.type;}return b.obtain = function (a, c, d) {return new b({ messageUId: a, lastMessageSendTime: c, type: d });}, b.prototype.encode = function () {return JSON.stringify(a.ModelUtil.modelClone(this));}, b;}();a.ReadReceiptMessage = d;var e = function () {function b(a) {if (this.messageName = "VoiceMessage", 0 == arguments.length) throw new Error("Can not instantiate with empty parameters, use obtain method instead -> VoiceMessage.");this.content = a.content, this.duration = a.duration, this.extra = a.extra, a.user && (this.user = a.user), a.mentionedInfo && (this.mentionedInfo = a.mentionedInfo);}return b.obtain = function (a, c) {return new b({ content: a, duration: c, extra: "" });}, b.prototype.encode = function () {return JSON.stringify(a.ModelUtil.modelClone(this));}, b;}();a.VoiceMessage = e;var f = function () {function b(a) {this.messageName = "RecallCommandMessage", this.messageUId = a.messageUId, this.conversationType = a.conversationType, this.targetId = a.targetId, this.sentTime = a.sentTime, a.extra && (this.extra = a.extra), a.user && (this.user = a.user);}return b.prototype.encode = function () {return JSON.stringify(a.ModelUtil.modelClone(this));}, b;}();a.RecallCommandMessage = f;var g = function () {function b(a) {if (this.messageName = "ImageMessage", 0 == arguments.length) throw new Error("Can not instantiate with empty parameters, use obtain method instead -> ImageMessage.");this.content = a.content, this.imageUri = a.imageUri, a.extra && (this.extra = a.extra), a.user && (this.user = a.user), a.mentionedInfo && (this.mentionedInfo = a.mentionedInfo);}return b.obtain = function (a, c) {return new b({ content: a, imageUri: c, extra: "" });}, b.prototype.encode = function () {return JSON.stringify(a.ModelUtil.modelClone(this));}, b;}();a.ImageMessage = g;var h = function () {function b(a) {if (this.messageName = "LocationMessage", 0 == arguments.length) throw new Error("Can not instantiate with empty parameters, use obtain method instead -> LocationMessage.");this.latitude = a.latitude, this.longitude = a.longitude, this.poi = a.poi, this.content = a.content, this.extra = a.extra, a.user && (this.user = a.user), a.mentionedInfo && (this.mentionedInfo = a.mentionedInfo);}return b.obtain = function (a, c, d, e) {return new b({ latitude: a, longitude: c, poi: d, content: e, extra: "" });}, b.prototype.encode = function () {return JSON.stringify(a.ModelUtil.modelClone(this));}, b;}();a.LocationMessage = h;var i = function () {function b(a) {if (this.messageName = "RichContentMessage", 0 == arguments.length) throw new Error("Can not instantiate with empty parameters, use obtain method instead -> RichContentMessage.");this.title = a.title, this.content = a.content, this.imageUri = a.imageUri, this.extra = a.extra, this.url = a.url, a.user && (this.user = a.user);}return b.obtain = function (a, c, d, e) {return new b({ title: a, content: c, imageUri: d, url: e, extra: "" });}, b.prototype.encode = function () {return JSON.stringify(a.ModelUtil.modelClone(this));}, b;}();a.RichContentMessage = i;var j = function () {function a(a) {this.messageName = "JrmfRedPacketMessage", a && (this.message = a);}return a.prototype.encode = function () {return "";}, a;}();a.JrmfRedPacketMessage = j;var k = function () {function a(a) {this.messageName = "JrmfRedPacketOpenedMessage", a && (this.message = a);}return a.prototype.encode = function () {return "";}, a;}();a.JrmfRedPacketOpenedMessage = k;var l = function () {function a(a) {if (this.messageName = "UnknownMessage", 0 == arguments.length) throw new Error("Can not instantiate with empty parameters, use obtain method instead -> UnknownMessage.");this.message = a;}return a.prototype.encode = function () {return "";}, a;}();a.UnknownMessage = l;var m = function () {function b(a) {if (this.messageName = "PublicServiceCommandMessage", 0 == arguments.length) throw new Error("Can not instantiate with empty parameters, use obtain method instead -> PublicServiceCommandMessage.");this.content = a.content, this.extra = a.extra, this.menuItem = a.menuItem, a.user && (this.user = a.user), a.mentionedInfo && (this.mentionedInfo = a.mentionedInfo);}return b.obtain = function (a) {return new b({ content: "", command: "", menuItem: a, extra: "" });}, b.prototype.encode = function () {return JSON.stringify(a.ModelUtil.modelClone(this));}, b;}();a.PublicServiceCommandMessage = m;var n = function () {function a(a) {this.messageName = "PublicServiceMultiRichContentMessage", this.richContentMessages = a;}return a.prototype.encode = function () {return null;}, a;}();a.PublicServiceMultiRichContentMessage = n;var o = function () {function b(a) {this.messageName = "SyncReadStatusMessage", a.lastMessageSendTime && (this.lastMessageSendTime = a.lastMessageSendTime);}return b.prototype.encode = function () {return JSON.stringify(a.ModelUtil.modelClone(this));}, b;}();a.SyncReadStatusMessage = o;var p = function () {function b(a) {this.messageName = "ReadReceiptRequestMessage", a.messageUId && (this.messageUId = a.messageUId);}return b.prototype.encode = function () {return JSON.stringify(a.ModelUtil.modelClone(this));}, b;}();a.ReadReceiptRequestMessage = p;var q = function () {function b(a) {this.messageName = "ReadReceiptResponseMessage", a.receiptMessageDic && (this.receiptMessageDic = a.receiptMessageDic);}return b.prototype.encode = function () {return JSON.stringify(a.ModelUtil.modelClone(this));}, b;}();a.ReadReceiptResponseMessage = q;var r = function () {function b(a) {this.messageName = "PublicServiceRichContentMessage", this.richContentMessage = a;}return b.prototype.encode = function () {return JSON.stringify(a.ModelUtil.modelClone(this));}, b;}();a.PublicServiceRichContentMessage = r;var s = function () {function b(a) {this.messageName = "FileMessage", a.name && (this.name = a.name), a.size && (this.size = a.size), a.type && (this.type = a.type), a.fileUrl && (this.fileUrl = a.fileUrl), a.extra && (this.extra = a.extra), a.user && (this.user = a.user);}return b.obtain = function (a) {return new b({ name: a.name, size: a.size, type: a.type, fileUrl: a.fileUrl });}, b.prototype.encode = function () {return JSON.stringify(a.ModelUtil.modelClone(this));}, b;}();a.FileMessage = s;var t = function () {function b(a) {this.messageName = "HQVoiceMessage", this.type = a.type || "aac", a.localPath && (this.localPath = a.localPath), a.remoteUrl && (this.remoteUrl = a.remoteUrl), a.duration && (this.duration = a.duration), a.extra && (this.extra = a.extra), a.user && (this.user = a.user);}return b.prototype.encode = function () {return JSON.stringify(a.ModelUtil.modelClone(this));}, b;}();a.HQVoiceMessage = t;var u = function () {function b(a) {this.messageName = "AcceptMessage", this.mediaId = a.mediaId, this.callId = a.callId, this.mediaType = a.mediaType, this.mode = a.mode, this.subInfo = a.subInfo;}return b.prototype.encode = function () {return JSON.stringify(a.ModelUtil.modelClone(this));}, b;}();a.AcceptMessage = u;var v = function () {function b(a) {this.messageName = "RingingMessage", this.callId = a.callId;}return b.prototype.encode = function () {return JSON.stringify(a.ModelUtil.modelClone(this));}, b;}();a.RingingMessage = v;var w = function () {function b(a) {this.messageName = "SummaryMessage", this.caller = a.caller, this.inviter = a.inviter, this.mediaType = a.mediaType, this.memberIdList = a.memberIdList, this.startTime = a.startTime, this.connectedTime = a.connectedTime, this.duration = a.duration, this.status = a.status;}return b.prototype.encode = function () {return JSON.stringify(a.ModelUtil.modelClone(this));}, b;}();a.SummaryMessage = w;var x = function () {function b(a) {this.messageName = "HungupMessage", this.callId = a.callId, this.reason = a.reason, this.mode = a.mode, this.subInfo = a.subInfo;}return b.prototype.encode = function () {return JSON.stringify(a.ModelUtil.modelClone(this));}, b;}();a.HungupMessage = x;var y = function () {function b(a) {this.messageName = "InviteMessage", this.mediaId = a.mediaId, this.callId = a.callId, this.engineType = a.engineType, this.channelInfo = a.channelInfo, this.mediaType = a.mediaType, this.extra = a.extra, this.inviteUserIds = a.inviteUserIds, this.observerUserIds = a.observerUserIds, this.mode = a.mode, this.subInfo = a.subInfo;}return b.prototype.encode = function () {return JSON.stringify(a.ModelUtil.modelClone(this));}, b;}();a.InviteMessage = y;var z = function () {function b(a) {this.messageName = "MediaModifyMessage", this.callId = a.callId, this.mediaType = a.mediaType, this.mode = a.mode, this.subInfo = a.subInfo;}return b.prototype.encode = function () {return JSON.stringify(a.ModelUtil.modelClone(this));}, b;}();a.MediaModifyMessage = z;var A = function () {function b(a) {this.messageName = "MemberModifyMessage", this.modifyMemType = a.modifyMemType, this.callId = a.callId, this.caller = a.caller, this.engineType = a.engineType, this.channelInfo = a.channelInfo, this.mediaType = a.mediaType, this.extra = a.extra, this.inviteUserIds = a.inviteUserIds, this.existedMemberStatusList = a.existedMemberStatusList, this.existedUserPofiles = a.existedUserPofiles, this.observerUserIds = a.observerUserIds, this.mode = a.mode, this.subInfo = a.subInfo;}return b.prototype.encode = function () {return JSON.stringify(a.ModelUtil.modelClone(this));}, b;}();a.MemberModifyMessage = A;}(RongIMLib || (RongIMLib = {}));var RongIMLib;!function (a) {var b = function () {function a(a, b) {this.Id = a, this.Key = b;}return a;}();a.ChannelInfo = b;var c = function () {function a(a, b, c) {this.platform = a, this.online = b, this.status = c;}return a;}();a.UserStatus = c;var d = function () {function a(a, b, c) {}return a;}();a.MentionedInfo = d;var e = function () {function a(a, b, c) {this.msgId = a, this.msgDataTime = b, this.direct = c;}return a;}();a.DeleteMessage = e;var f = function () {function a(a, b, c) {}return a;}();a.CustomServiceConfig = f;var g = function () {function a(a, b, c, d, e, f, g) {}return a;}();a.CustomServiceSession = g;var h = function () {function b(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u) {this.conversationTitle = a, this.conversationType = b, this.draft = c, this.isTop = d, this.latestMessage = e, this.latestMessageId = f, this.notificationStatus = g, this.objectName = h, this.receivedStatus = i, this.receivedTime = j, this.senderUserId = k, this.senderUserName = l, this.sentStatus = m, this.sentTime = n, this.targetId = o, this.unreadMessageCount = p, this.senderPortraitUri = q, this.isHidden = r, this.mentionedMsg = s, this.hasUnreadMention = t, this._readTime = u;}return b.prototype.setTop = function () {a.RongIMClient._dataAccessProvider.addConversation(this, { onSuccess: function onSuccess(a) {} });}, b;}();a.Conversation = h;var i = function () {function a(a, b, c, d, e) {this.creatorId = a, this.id = b, this.memberIdList = c, this.name = d, this.isOpen = e;}return a;}();a.Discussion = i;var j = function () {function a(a, b, c) {this.id = a, this.name = b, this.portraitUri = c;}return a;}();a.Group = j;var k = function () {function a(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {this.content = a, this.conversationType = b, this.extra = c, this.objectName = d, this.messageDirection = e, this.messageId = f, this.receivedStatus = g, this.receivedTime = h, this.senderUserId = i, this.sentStatus = j, this.sentTime = k, this.targetId = l, this.messageType = m, this.messageUId = n, this.isLocalMessage = o, this.offLineMessage = p, this.receiptResponse = q;}return a;}();a.Message = k;var l = function () {function a(a, b) {this.isCounted = a, this.isPersited = b;}return a.prototype.getMessageTag = function () {return this.isCounted && this.isPersited ? 3 : this.isCounted ? 2 : this.isPersited ? 1 : this.isCounted || this.isPersited ? void 0 : 0;}, a.getTagByStatus = function (a) {var b = { 3: { isCounted: !0, isPersited: !0 }, 2: { isCounted: !0, isPersited: !1 }, 1: { isCounted: !0, isPersited: !0 }, 0: { isCounted: !0, isPersited: !0 } };return b[a] || b[3];}, a;}();a.MessageTag = l;var m = function () {function a(a, b, c, d, e) {this.id = a, this.name = b, this.type = c, this.sunMenuItems = d, this.url = e;}return a;}();a.PublicServiceMenuItem = m;var n = function () {function a(a, b, c, d, e, f, g, h) {this.conversationType = a, this.introduction = b, this.menu = c, this.name = d, this.portraitUri = e, this.publicServiceId = f, this.hasFollowed = g, this.isGlobal = h;}return a;}();a.PublicServiceProfile = n;var o = function () {function a(a, b, c) {this.id = a, this.name = b, this.portraitUri = c;}return a;}();a.UserInfo = o;var p = function () {function a(a, b) {this.id = a, this.token = b;}return a;}();a.User = p;var q = function () {function a(a, b, c) {this.id = a, this.user = b, this.mode = c;}return a;}();a.Room = q;}(RongIMLib || (RongIMLib = {}));var RongIMLib;!function (a) {var b = function () {function b() {this.userStatusListener = null;}return b.prototype.init = function (b, c) {new a.FeatureDectector(c.appCallback);}, b.prototype.connect = function (b, c, d, e) {a.RongIMClient.bridge = a.Bridge.getInstance(), a.RongIMClient._memoryStore.token = b, a.RongIMClient._memoryStore.callback = c, d = d || "", e = e || {};var f = !1,g = !1;if (a.Bridge._client && a.Bridge._client.channel && (f = a.Bridge._client.channel.connectionStatus == a.ConnectionStatus.CONNECTING, g = a.Bridge._client.channel.connectionStatus == a.ConnectionStatus.CONNECTED), !g && !f) {if (a.RongIMClient.otherDeviceLoginCount > 5) return void c.onError(a.ConnectionStatus.ULTRALIMIT);e.force && a.RongIMClient._storageProvider.removeItem("servers");for (var h = 0, i = a.RongIMClient._memoryStore.listenerList.length; h < i; h++) {a.RongIMClient.bridge.setListener(a.RongIMClient._memoryStore.listenerList[h]);}a.RongIMClient._memoryStore.listenerList.length = 0, a.RongIMClient.bridge.connect(a.RongIMClient._memoryStore.appKey, b, { onSuccess: function onSuccess(a) {setTimeout(function () {c.onSuccess(a);});}, onError: function onError(b) {b != a.ConnectionState.TOKEN_INCORRECT && b ? setTimeout(function () {c.onError(b);}) : setTimeout(function () {c.onTokenIncorrect();});} });}}, b.prototype.reconnect = function (b, c) {var d = a.RongIMClient._memoryStore,e = d.token;if (!e) throw new Error("reconnect: token is empty.");if (a.Bridge._client && a.Bridge._client.channel && a.Bridge._client.channel.connectionStatus != a.ConnectionStatus.CONNECTED && a.Bridge._client.channel.connectionStatus != a.ConnectionStatus.CONNECTING) {c = c || {};var f = c.auto ? "auto" : "custom";({ auto: function auto() {var d = function d(b) {var c = b.step(),d = b.url,e = function e() {a.RongUtil.request({ url: d, success: function success() {b.done();}, error: function error() {f();} });},f = function f() {var d = c();if ("done" == d) {var f = a.ConnectionStatus.NETWORK_UNAVAILABLE;return void b.done(f);}setTimeout(e, d);};f();},f = a.RongIMClient._memoryStore.depend.protocol,g = c.url || "cdn.ronghub.com/RongIMLib-2.2.6.min.js",h = { protocol: f, path: g };g = a.RongUtil.formatProtoclPath(h);var i = c.rate || [100, 1e3, 3e3, 6e3, 1e4, 18e3];i.push("done"), d({ url: g, step: function step() {var a = 0;return function () {var b = i[a];return a++, b;};}, done: function done(c) {if (c) return void b.onError(c);a.RongIMClient.connect(e, b);} });}, custom: function custom() {a.RongIMClient.connect(e, b);} })[f]();}}, b.prototype.logout = function () {a.RongIMClient.bridge.disconnect(), a.RongIMClient.bridge = null;}, b.prototype.disconnect = function () {a.RongIMClient.bridge.disconnect();}, b.prototype.sendReceiptResponse = function (b, c, d) {var e = a.Bridge._client.userId + b + c + "RECEIVED",f = this;if (a.RongUtil.supportLocalStorage()) {var g = JSON.parse(a.RongIMClient._storageProvider.getItem(e));if (g) {var h = [];for (var i in g) {var j = {};j[i] = g[i].uIds, g[i].isResponse || h.push(j);}if (0 == h.length) return void d.onSuccess();var k = setInterval(function () {1 == h.length && clearInterval(k);var i = h.splice(0, 1)[0],j = new a.ReadReceiptResponseMessage({ receiptMessageDic: i });f.sendMessage(b, c, j, { onSuccess: function onSuccess(b) {var c = a.MessageUtil.getFirstKey(i);g[c].isResponse = !0, a.RongIMClient._storageProvider.setItem(e, JSON.stringify(g)), d.onSuccess(b);}, onError: function onError(a, b) {d.onError(a, b);} });}, 200);} else d.onSuccess();} else d.onSuccess();}, b.prototype.sendTypingStatusMessage = function (b, c, d, e) {var f = this;d in a.RongIMClient.MessageParams && f.sendMessage(b, c, a.TypingStatusMessage.obtain(a.RongIMClient.MessageParams[d].objectName, ""), { onSuccess: function onSuccess() {setTimeout(function () {e.onSuccess();});}, onError: function onError(a) {setTimeout(function () {e.onError(a, null);});}, onBefore: function onBefore() {} });}, b.prototype.sendRecallMessage = function (b, c) {var d = new a.RecallCommandMessage({ conversationType: b.conversationType, targetId: b.targetId, sentTime: b.sentTime, messageUId: b.messageUId, extra: b.extra, user: b.user });this.sendMessage(b.conversationType, b.senderUserId, d, c, !1, null, null, 2);}, b.prototype.sendTextMessage = function (b, c, d, e) {var f = a.TextMessage.obtain(d);this.sendMessage(b, c, f, e);}, b.prototype.getRemoteHistoryMessages = function (b, c, d, e, f, g) {if (e <= 1) throw new Error("the count must be greater than 1.");g = g || {};var h = g.order || 0,i = function i() {return [b, c, "_", h].join("");},j = i();a.RongUtil.isNumber(d) || (d = a.RongIMClient._memoryStore.lastReadTime.get(j));var k = a.RongIMClient._memoryStore,l = k.historyMessageLimit,m = l.get(j) || {},n = m.hasMore;if (!n && m.time == d && 0 == h) return f.onSuccess([], n);var o = new a.RongIMClient.Protobuf.HistoryMsgInput();o.setTargetId(c), o.setTime(d), o.setCount(e), o.setOrder(h), a.RongIMClient.bridge.queryMsg(HistoryMsgType[b], a.MessageUtil.ArrayForm(o.toArrayBuffer()), c, { onSuccess: function onSuccess(b) {var d = a.MessageUtil.int64ToTimestamp(b.syncTime);a.RongIMClient._memoryStore.lastReadTime.set(j, d), l.set(j, { hasMore: !!b.hasMsg, time: d });var e,g = b.list.reverse(),h = null,i = a.SentStatus.READ;if (a.RongUtil.supportLocalStorage()) for (var k = 0, m = g.length; k < m; k++) {h = a.MessageUtil.messageParser(g[k]), e = JSON.parse(a.RongIMClient._storageProvider.getItem(a.Bridge._client.userId + h.messageUId + "SENT")), e && (h.receiptResponse || (h.receiptResponse = {}), h.receiptResponse[h.messageUId] = e.count), h.sentStatus = i, h.targetId = c, g[k] = h;} else for (var k = 0, m = g.length; k < m; k++) {var h = a.MessageUtil.messageParser(g[k]);h.sentStatus = i, g[k] = h;}setTimeout(function () {f.onSuccess(g, !!b.hasMsg);});}, onError: function onError(a) {setTimeout(function () {f.onError(a);});} }, "HistoryMessagesOuput");}, b.prototype.hasRemoteUnreadMessages = function (b, c) {var d = null;window.RCCallback = function (a) {setTimeout(function () {c.onSuccess(!!+a.status);}), d.parentNode.removeChild(d);}, d = document.createElement("script"), d.src = a.RongIMClient._memoryStore.depend.api + "/message/exist.js?appKey=" + encodeURIComponent(a.RongIMClient._memoryStore.appKey) + "&token=" + encodeURIComponent(b) + "&callBack=RCCallback&_=" + a.RongUtil.getTimestamp(), document.body.appendChild(d), d.onerror = function () {setTimeout(function () {c.onError(a.ErrorCode.UNKNOWN);}), d.parentNode.removeChild(d);};}, b.prototype.getRemoteConversationList = function (b, c, d) {var e = new a.RongIMClient.Protobuf.RelationsInput(),f = this;e.setType(1), void 0 === d ? e.setCount(0) : e.setCount(d), a.RongIMClient.bridge.queryMsg(26, a.MessageUtil.ArrayForm(e.toArrayBuffer()), a.Bridge._client.userId, { onSuccess: function onSuccess(d) {if (d.info) {d.info = d.info.reverse();for (var e = 0, g = d.info.length; e < g; e++) {a.RongIMClient.getInstance().pottingConversation(d.info[e]);}}var h = a.RongIMClient._memoryStore.conversationList;setTimeout(function () {if (c) return b.onSuccess(f.filterConversations(c, h));b.onSuccess(h);});}, onError: function onError(a) {b.onError(a);} }, "RelationsOutput");}, b.prototype.addMemberToDiscussion = function (b, c, d) {var e = new a.RongIMClient.Protobuf.ChannelInvitationInput();e.setUsers(c), a.RongIMClient.bridge.queryMsg(0, a.MessageUtil.ArrayForm(e.toArrayBuffer()), b, { onSuccess: function onSuccess() {setTimeout(function () {d.onSuccess();});}, onError: function onError(a) {setTimeout(function () {d.onError(a);});} });}, b.prototype.createDiscussion = function (b, c, d) {var e = new a.RongIMClient.Protobuf.CreateDiscussionInput(),f = this;e.setName(b), a.RongIMClient.bridge.queryMsg(1, a.MessageUtil.ArrayForm(e.toArrayBuffer()), a.Bridge._client.userId, { onSuccess: function onSuccess(a) {c.length > 0 && f.addMemberToDiscussion(a, c, { onSuccess: function onSuccess() {}, onError: function onError(a) {setTimeout(function () {d.onError(a);});} }), setTimeout(function () {d.onSuccess(a);});}, onError: function onError(a) {setTimeout(function () {d.onError(a);});} }, "CreateDiscussionOutput");}, b.prototype.getDiscussion = function (b, c) {var d = new a.RongIMClient.Protobuf.ChannelInfoInput();d.setNothing(1), a.RongIMClient.bridge.queryMsg(4, a.MessageUtil.ArrayForm(d.toArrayBuffer()), b, { onSuccess: function onSuccess(a) {setTimeout(function () {c.onSuccess(a);});}, onError: function onError(a) {setTimeout(function () {c.onError(a);});} }, "ChannelInfoOutput");}, b.prototype.quitDiscussion = function (b, c) {var d = new a.RongIMClient.Protobuf.LeaveChannelInput();d.setNothing(1), a.RongIMClient.bridge.queryMsg(7, a.MessageUtil.ArrayForm(d.toArrayBuffer()), b, { onSuccess: function onSuccess() {setTimeout(function () {c.onSuccess();});}, onError: function onError(a) {setTimeout(function () {c.onError(a);});} });}, b.prototype.removeMemberFromDiscussion = function (b, c, d) {var e = new a.RongIMClient.Protobuf.ChannelEvictionInput();e.setUser(c), a.RongIMClient.bridge.queryMsg(9, a.MessageUtil.ArrayForm(e.toArrayBuffer()), b, { onSuccess: function onSuccess() {setTimeout(function () {d.onSuccess();});}, onError: function onError(a) {setTimeout(function () {d.onError(a);});} });}, b.prototype.setDiscussionInviteStatus = function (b, c, d) {var e = new a.RongIMClient.Protobuf.ModifyPermissionInput();e.setOpenStatus(c.valueOf()), a.RongIMClient.bridge.queryMsg(11, a.MessageUtil.ArrayForm(e.toArrayBuffer()), b, { onSuccess: function onSuccess(a) {setTimeout(function () {d.onSuccess();});}, onError: function onError(a) {setTimeout(function () {d.onError(a);});} });}, b.prototype.setDiscussionName = function (b, c, d) {
        var e = new a.RongIMClient.Protobuf.RenameChannelInput();e.setName(c), a.RongIMClient.bridge.queryMsg(12, a.MessageUtil.ArrayForm(e.toArrayBuffer()), b, { onSuccess: function onSuccess() {setTimeout(function () {d.onSuccess();});}, onError: function onError(a) {d.onError(a);} });}, b.prototype.joinChatRoom = function (b, c, d) {var e = new a.RongIMClient.Protobuf.ChrmInput();e.setNothing(1), a.Bridge._client.chatroomId = b, a.RongIMClient.bridge.queryMsg(19, a.MessageUtil.ArrayForm(e.toArrayBuffer()), b, { onSuccess: function onSuccess() {setTimeout(function () {d.onSuccess();});var e = new a.RongIMClient.Protobuf.ChrmPullMsg();0 == c && (c = -1), e.setCount(c), e.setSyncTime(0), a.Bridge._client.queryMessage("chrmPull", a.MessageUtil.ArrayForm(e.toArrayBuffer()), b, 1, { onSuccess: function onSuccess(c) {var d = c.list,e = a.MessageUtil.int64ToTimestamp(c.syncTime),f = d[d.length - 1];f && (f = a.MessageUtil.messageParser(f), e = f.sentTime), a.RongIMClient._memoryStore.lastReadTime.set(b + a.Bridge._client.userId + "CST", e);for (var g = a.Bridge._client, h = 0, i = d.length; h < i; h++) {var j = "R" + d[h].msgId;if (!(j in g.cacheMessageIds)) {g.cacheMessageIds[j] = !0;var k = a.RongUtil.keys(g.cacheMessageIds);if (k.length > 10 && (j = k[0], delete g.cacheMessageIds[j]), a.RongIMClient._memoryStore.filterMessages.length > 0) for (var l = 0, m = a.RongIMClient._memoryStore.filterMessages.length; l < m; l++) {a.RongIMClient.MessageParams[a.RongIMClient._memoryStore.filterMessages[l]].objectName != d[h].classname && g.handler.onReceived(d[h]);} else g.handler.onReceived(d[h]);}}}, onError: function onError(b) {setTimeout(function () {d.onError(a.ErrorCode.CHATROOM_HISMESSAGE_ERROR);});} }, "DownStreamMessages");}, onError: function onError(a) {setTimeout(function () {d.onError(a);});} }, "ChrmOutput");}, b.prototype.getChatRoomInfo = function (b, c, d, e) {var f = new a.RongIMClient.Protobuf.QueryChatroomInfoInput();f.setCount(c), f.setOrder(d), a.RongIMClient.bridge.queryMsg("queryChrmI", a.MessageUtil.ArrayForm(f.toArrayBuffer()), b, { onSuccess: function onSuccess(b) {b.userInfos.forEach(function (b) {b.time = a.MessageUtil.int64ToTimestamp(b.time);}), setTimeout(function () {e.onSuccess(b);});}, onError: function onError(a) {setTimeout(function () {e.onError(a);});} }, "QueryChatroomInfoOutput");}, b.prototype.quitChatRoom = function (b, c) {var d = new a.RongIMClient.Protobuf.ChrmInput();d.setNothing(1), a.RongIMClient.bridge.queryMsg(17, a.MessageUtil.ArrayForm(d.toArrayBuffer()), b, { onSuccess: function onSuccess() {setTimeout(function () {c.onSuccess();});}, onError: function onError(a) {setTimeout(function () {c.onError(a);});} }, "ChrmOutput");}, b.prototype.setChatroomHisMessageTimestamp = function (b, c) {a.RongIMClient._memoryStore.lastReadTime.set("chrhis_" + b, c);}, b.prototype.getChatRoomHistoryMessages = function (b, c, d, e) {var f = new a.RongIMClient.Protobuf.HistoryMsgInput();f.setTargetId(b);var g = a.RongIMClient._memoryStore.lastReadTime.get("chrhis_" + b) || 0;f.setTime(g), f.setCount(c), f.setOrder(d), a.RongIMClient.bridge.queryMsg(34, a.MessageUtil.ArrayForm(f.toArrayBuffer()), a.Bridge._client.userId, { onSuccess: function onSuccess(c) {a.RongIMClient._memoryStore.lastReadTime.set("chrhis_" + b, a.MessageUtil.int64ToTimestamp(c.syncTime));for (var d = c.list.reverse(), f = 0, g = d.length; f < g; f++) {d[f] = a.MessageUtil.messageParser(d[f]);}setTimeout(function () {e.onSuccess(d, !!c.hasMsg);});}, onError: function onError(a) {setTimeout(function () {e.onError(a);});} }, "HistoryMsgOuput");}, b.prototype.setMessageStatus = function (a, b, c, d, e) {setTimeout(function () {e.onSuccess(!0);});}, b.prototype.addToBlacklist = function (b, c) {var d = new a.RongIMClient.Protobuf.Add2BlackListInput();d.setUserId(b), a.RongIMClient.bridge.queryMsg(21, a.MessageUtil.ArrayForm(d.toArrayBuffer()), b, { onSuccess: function onSuccess() {setTimeout(function () {c.onSuccess();});}, onError: function onError(a) {setTimeout(function () {c.onError(a);});} });}, b.prototype.getBlacklist = function (b) {var c = new a.RongIMClient.Protobuf.QueryBlackListInput();c.setNothing(1), a.RongIMClient.bridge.queryMsg(23, a.MessageUtil.ArrayForm(c.toArrayBuffer()), a.Bridge._client.userId, { onSuccess: function onSuccess(a) {setTimeout(function () {b.onSuccess(a);});}, onError: function onError(a) {setTimeout(function () {b.onError(a);});} }, "QueryBlackListOutput");}, b.prototype.getBlacklistStatus = function (b, c) {var d = new a.RongIMClient.Protobuf.BlackListStatusInput();d.setUserId(b), a.RongIMClient.bridge.queryMsg(24, a.MessageUtil.ArrayForm(d.toArrayBuffer()), b, { onSuccess: function onSuccess(b) {setTimeout(function () {c.onSuccess(a.BlacklistStatus[b]);});}, onError: function onError(a) {setTimeout(function () {c.onError(a);});} });}, b.prototype.removeFromBlacklist = function (b, c) {var d = new a.RongIMClient.Protobuf.RemoveFromBlackListInput();d.setUserId(b), a.RongIMClient.bridge.queryMsg(22, a.MessageUtil.ArrayForm(d.toArrayBuffer()), b, { onSuccess: function onSuccess() {setTimeout(function () {c.onSuccess();});}, onError: function onError(a) {setTimeout(function () {c.onError(a);});} });}, b.prototype.getFileToken = function (b, c) {if (!/(1|2|3|4)/.test(b.toString())) return void setTimeout(function () {c.onError(a.ErrorCode.QNTKN_FILETYPE_ERROR);});var d = new a.RongIMClient.Protobuf.GetQNupTokenInput();d.setType(b), a.RongIMClient.bridge.queryMsg(30, a.MessageUtil.ArrayForm(d.toArrayBuffer()), a.Bridge._client.userId, { onSuccess: function onSuccess(a) {setTimeout(function () {c.onSuccess(a);});}, onError: function onError(a) {setTimeout(function () {c.onError(a);});} }, "GetQNupTokenOutput");}, b.prototype.getFileUrl = function (b, c, d, e) {if (!/(1|2|3|4)/.test(b.toString())) return void setTimeout(function () {e.onError(a.ErrorCode.QNTKN_FILETYPE_ERROR);});var f = new a.RongIMClient.Protobuf.GetQNdownloadUrlInput();f.setType(b), f.setKey(c), d && f.setFileName(d), a.RongIMClient.bridge.queryMsg(31, a.MessageUtil.ArrayForm(f.toArrayBuffer()), a.Bridge._client.userId, { onSuccess: function onSuccess(a) {setTimeout(function () {e.onSuccess(a);});}, onError: function onError(a) {setTimeout(function () {e.onError(a);});} }, "GetQNdownloadUrlOutput");}, b.prototype.sendMessage = function (b, c, d, e, f, g, h, i, j) {if (!a.Bridge._client.channel) return void setTimeout(function () {e.onError(a.ErrorCode.RC_NET_UNAVAILABLE, null);});if (!a.Bridge._client.channel.socket.socket.connected) throw setTimeout(function () {e.onError(a.ErrorCode.TIMEOUT, null);}), new Error("connect is timeout! postion:sendMessage");var k = b == a.ConversationType.DISCUSSION || b == a.ConversationType.GROUP,l = new a.RongIMClient.Protobuf.UpStreamMessage();if (f && k ? l.setSessionId(7) : l.setSessionId(a.RongIMClient.MessageParams[d.messageName].msgTag.getMessageTag()), g && l.setPushText(g), h && l.setAppData(h), k && d.messageName == a.RongIMClient.MessageType.ReadReceiptResponseMessage) {var m = d;if (m.receiptMessageDic) {var n = [];for (var o in m.receiptMessageDic) {n.push(o);}l.setUserId(n);}}k && d.messageName == a.RongIMClient.MessageType.SyncReadStatusMessage && l.setUserId(a.Bridge._client.userId), j = j || {};var p = j.userIds;k && p && l.setUserId(p), l.setClassname(a.RongIMClient.MessageParams[d.messageName].objectName), l.setContent(d.encode());var q = l.toArrayBuffer();"[object ArrayBuffer]" == Object.prototype.toString.call(q) && (q = [].slice.call(new Int8Array(q)));var r = this,s = new a.Message(),t = this.getConversation(b, c);3 == a.RongIMClient.MessageParams[d.messageName].msgTag.getMessageTag() && (t || (t = a.RongIMClient.getInstance().createConversation(b, c, "")), t.sentTime = new Date().getTime(), t.sentStatus = a.SentStatus.SENDING, t.senderUserName = "", t.senderUserId = a.Bridge._client.userId, t.notificationStatus = a.ConversationNotificationStatus.DO_NOT_DISTURB, t.latestMessage = s, t.unreadMessageCount = 0, a.RongIMClient._dataAccessProvider.addConversation(t, { onSuccess: function onSuccess(a) {} })), a.RongIMClient._memoryStore.converStore = t, s.content = d, s.conversationType = b, s.senderUserId = a.Bridge._client.userId, s.objectName = a.RongIMClient.MessageParams[d.messageName].objectName, s.targetId = c, s.sentTime = new Date().getTime(), s.messageDirection = a.MessageDirection.SEND, s.sentStatus = a.SentStatus.SENT, s.messageType = d.messageName, a.RongIMClient.bridge.pubMsg(b.valueOf(), q, c, { onSuccess: function onSuccess(f) {if (f && f.timestamp && a.RongIMClient._memoryStore.lastReadTime.set("converST_" + a.Bridge._client.userId + b + c, f.timestamp), (b == a.ConversationType.DISCUSSION || b == a.ConversationType.GROUP) && d.messageName == a.RongIMClient.MessageType.ReadReceiptRequestMessage) {var g = s.content,h = a.Bridge._client.userId + g.messageUId + "SENT";a.RongIMClient._storageProvider.setItem(h, JSON.stringify({ count: 0, dealtime: f.timestamp, userIds: {} }));}if (3 == a.RongIMClient.MessageParams[s.messageType].msgTag.getMessageTag()) {var i = a.RongIMClient._memoryStore.converStore;i.sentStatus = s.sentStatus, i.latestMessage = s, r.updateConversation(i), a.RongIMClient._dataAccessProvider.addMessage(b, c, s, { onSuccess: function onSuccess(b) {s = b, s.messageUId = f.messageUId, s.sentTime = f.timestamp, s.sentStatus = a.SentStatus.SENT, s.messageId = f.messageId, a.RongIMClient._dataAccessProvider.updateMessage(s);}, onError: function onError() {} });}setTimeout(function () {i && r.updateConversation(i), s.sentTime = f.timestamp, s.messageUId = f.messageUId, e.onSuccess(s);});}, onError: function onError(d, f) {s.sentStatus = a.SentStatus.FAILED, f && (s.messageUId = f.messageUId, s.sentTime = f.sentTime), 3 == a.RongIMClient.MessageParams[s.messageType].msgTag.getMessageTag() && (a.RongIMClient._memoryStore.converStore.latestMessage = s), a.RongIMClient._dataAccessProvider.addMessage(b, c, s, { onSuccess: function onSuccess(b) {s.messageId = b.messageId, a.RongIMClient._dataAccessProvider.updateMessage(s);}, onError: function onError() {} }), setTimeout(function () {e.onError(d, s);});} }, null, i), e.onBefore && e.onBefore(a.MessageIdHandler.messageId), s.messageId = a.MessageIdHandler.messageId + "";}, b.prototype.setConnectionStatusListener = function (b) {var c = { onChanged: function onChanged(c) {b.onChanged(c), a.RongUtil.forEach(a.RongIMClient.statusListeners, function (a) {a(c);});} };a.RongIMClient.bridge ? a.RongIMClient.bridge.setListener(c) : a.RongIMClient._memoryStore.listenerList.push(c);}, b.prototype.setOnReceiveMessageListener = function (b) {a.RongIMClient.bridge ? a.RongIMClient.bridge.setListener(b) : a.RongIMClient._memoryStore.listenerList.push(b);}, b.prototype.registerMessageType = function (b, c, d, e, f) {if (!b) throw new Error("messageType can't be empty,postion -> registerMessageType");if (!c) throw new Error("objectName can't be empty,postion -> registerMessageType");if ("[object Array]" == Object.prototype.toString.call(e)) {var g = a.ModelUtil.modleCreate(e, b);a.RongIMClient.RegisterMessage[b] = g;} else {if ("[object Function]" != Object.prototype.toString.call(e) && "[object Object]" != Object.prototype.toString.call(e)) throw new Error("The index of 3 parameter was wrong type  must be object or function or array-> registerMessageType");if (!e.encode) throw new Error("encode method has not realized or messageName is undefined-> registerMessageType");if (!e.decode) throw new Error("decode method has not realized -> registerMessageType");}registerMessageTypeMapping[c] = b;}, b.prototype.registerMessageTypes = function (b) {var c = [],d = function d(a) {var b = [];for (var c in a) {b.push(c);}return b;};for (var e in b) {var f = b[e],g = f.proto,h = d(g),i = f.flag || 3,j = a.MessageTag.getTagByStatus(i);i = new a.MessageTag(j.isCounted, j.isPersited), c.push({ type: e, name: f.name, flag: i, protos: h });}for (var k = function k(b) {var c = b.type,d = b.name,e = b.flag,f = b.protos;a.RongIMClient.registerMessageType(c, d, e, f);}, l = 0, m = c.length; l < m; l++) {var f = c[l];k(f);}}, b.prototype.addConversation = function (b, c) {for (var d = !0, e = 0, f = a.RongIMClient._memoryStore.conversationList.length; e < f; e++) {if (a.RongIMClient._memoryStore.conversationList[e].conversationType === b.conversationType && a.RongIMClient._memoryStore.conversationList[e].targetId === b.targetId) {a.RongIMClient._memoryStore.conversationList.unshift(a.RongIMClient._memoryStore.conversationList.splice(e, 1)[0]), d = !1;break;}}d && a.RongIMClient._memoryStore.conversationList.unshift(b), c && c.onSuccess(!0);}, b.prototype.updateConversation = function (b) {for (var c, d = 0, e = a.RongIMClient._memoryStore.conversationList.length; d < e; d++) {var f = a.RongIMClient._memoryStore.conversationList[d];if (b.conversationType === f.conversationType && b.targetId === f.targetId) {b.conversationTitle && (f.conversationTitle = b.conversationTitle), b.senderUserName && (f.senderUserName = b.senderUserName), b.senderPortraitUri && (f.senderPortraitUri = b.senderPortraitUri), b.latestMessage && (f.latestMessage = b.latestMessage), b.sentStatus && (f.sentStatus = b.sentStatus);break;}}return c;}, b.prototype.removeConversation = function (b, c, d) {var e = new a.RongIMClient.Protobuf.RelationsInput();e.setType(b), a.RongIMClient.bridge.queryMsg(27, a.MessageUtil.ArrayForm(e.toArrayBuffer()), c, { onSuccess: function onSuccess() {for (var e = a.RongIMClient._memoryStore.conversationList, f = e.length, g = 0; g < f; g++) {if (e[g].conversationType == b && c == e[g].targetId) {e.splice(g, 1);break;}}d.onSuccess(!0);}, onError: function onError(a) {setTimeout(function () {d.onError(a);});} });}, b.prototype.getMessage = function (b, c) {c.onSuccess(new a.Message());}, b.prototype.addMessage = function (a, b, c, d) {d && d.onSuccess(c);}, b.prototype.removeMessage = function (b, c, d, e) {a.RongIMClient.getInstance().deleteRemoteMessages(b, c, d, e);}, b.prototype.removeLocalMessage = function (a, b, c, d) {d.onSuccess(!0);}, b.prototype.updateMessage = function (a, b) {b && b.onSuccess(a);}, b.prototype.clearRemoteHistoryMessages = function (b, c) {var d = new a.RongIMClient.Protobuf.CleanHisMsgInput(),e = b.conversationType,f = { 1: "cleanPMsg", 2: "cleanDMsg", 3: "cleanGMsg", 5: "cleanCMsg", 6: "cleanSMsg" },g = f[e];if (!g) return void c.onError(a.ErrorCode.CLEAR_HIS_TYPE_ERROR);var h = b.timestamp;if ("number" != typeof h) return void c.onError(a.ErrorCode.CLEAR_HIS_TIME_ERROR);d.setDataTime(h);var i = b.targetId;d.setTargetId(i), a.RongIMClient.bridge.queryMsg(g, a.MessageUtil.ArrayForm(d.toArrayBuffer()), i, { onSuccess: function onSuccess(a) {c.onSuccess(!a);}, onError: function onError(b) {1 == b && (b = a.ErrorCode.CLEAR_HIS_ERROR), setTimeout(function () {c.onError(b);});} });}, b.prototype.clearHistoryMessages = function (a, b) {this.clearRemoteHistoryMessages(a, b);}, b.prototype.clearMessages = function (a, b, c) {}, b.prototype.updateMessages = function (b, c, d, e, f) {var g = this;"readStatus" == d && a.RongIMClient._memoryStore.conversationList.length > 0 && g.getConversationList({ onSuccess: function onSuccess(a) {Array.forEach(a, function (a) {a.conversationType == b && a.targetId == c && (a.unreadMessageCount = 0);});}, onError: function onError(a) {setTimeout(function () {f.onError(a);});} }, null), setTimeout(function () {f.onSuccess(!0);});}, b.prototype.getConversation = function (b, c, d) {for (var e = null, f = 0, g = a.RongIMClient._memoryStore.conversationList.length; f < g; f++) {if (a.RongIMClient._memoryStore.conversationList[f].conversationType == b && a.RongIMClient._memoryStore.conversationList[f].targetId == c && (e = a.RongIMClient._memoryStore.conversationList[f], a.RongUtil.supportLocalStorage())) {var h = a.RongIMClient._storageProvider.getItem("cu" + a.Bridge._client.userId + b + c);0 == e.unreadMessageCount && (e.unreadMessageCount = Number(h));}}return setTimeout(function () {d && d.onSuccess(e);}), e;}, b.prototype.filterConversations = function (b, c) {var d = [];return a.RongUtil.forEach(b, function (b) {a.RongUtil.forEach(c, function (a) {a.conversationType == b && d.push(a);});}), d;}, b.prototype.getConversationList = function (b, c, d, e) {var f = this,g = a.RongIMClient._memoryStore.isSyncRemoteConverList,h = a.RongIMClient._memoryStore.conversationList,i = h.length > d;if (!g && i) return void setTimeout(function () {var a = h.slice(0, d);c && (a = f.filterConversations(c, a)), b.onSuccess(a);});a.RongIMClient.getInstance().getRemoteConversationList({ onSuccess: function onSuccess(c) {a.RongUtil.supportLocalStorage() && Array.forEach(a.RongIMClient._memoryStore.conversationList, function (b) {var c = a.RongIMClient._storageProvider.getItem("cu" + a.Bridge._client.userId + b.conversationType + b.targetId);0 == b.unreadMessageCount && (b.unreadMessageCount = Number(c));}), a.RongIMClient._memoryStore.isSyncRemoteConverList = !1, setTimeout(function () {b.onSuccess(c);});}, onError: function onError(a) {setTimeout(function () {b.onError(a);});} }, c, d, e);}, b.prototype.clearCache = function () {var b = a.RongIMClient._memoryStore || {};b.conversationList = [], b.isSyncRemoteConverList = !0;}, b.prototype.clearConversations = function (b, c) {Array.forEach(b, function (b) {Array.forEach(a.RongIMClient._memoryStore.conversationList, function (c) {b == c.conversationType && a.RongIMClient.getInstance().removeConversation(c.conversationType, c.targetId, { onSuccess: function onSuccess() {}, onError: function onError() {} });});}), setTimeout(function () {c.onSuccess(!0);});}, b.prototype.setMessageContent = function (a, b, c) {}, b.prototype.setMessageSearchField = function (a, b, c) {}, b.prototype.getHistoryMessages = function (b, c, d, e, f, g, h) {var i = { objectname: g, order: h };a.RongIMClient.getInstance().getRemoteHistoryMessages(b, c, d, e, f, i);}, b.prototype.getTotalUnreadCount = function (b, c) {var d = 0,e = a.RongIMClient._storageProvider;if (c) a.RongUtil.forEach(c, function (b) {var c = e.getItemKeyList("cu" + a.Bridge._client.userId + b);a.RongUtil.forEach(c, function (a) {var b = e.getItem(a),c = Number(b) || 0;d += c;});});else {var f = e.getItemKeyList("cu" + a.Bridge._client.userId);a.RongUtil.forEach(f, function (a) {var b = e.getItem(a),c = Number(b) || 0;d += c;});}b.onSuccess(d);}, b.prototype.getConversationUnreadCount = function (b, c) {var d = 0;Array.forEach(b, function (b) {Array.forEach(a.RongIMClient._memoryStore.conversationList, function (a) {a.conversationType == b && (d += a.unreadMessageCount);});}), setTimeout(function () {c.onSuccess(d);});}, b.prototype.setUnreadCount = function (b, c, d) {var e = a.RongIMClient._storageProvider,f = "cu" + a.Bridge._client.userId + b + c;e.setItem(f, d);}, b.prototype.getUnreadCount = function (b, c, d) {var e = "cu" + a.Bridge._client.userId + b + c,f = a.RongIMClient._storageProvider.getItem(e),g = Number(f);setTimeout(function () {d.onSuccess(g || 0);});}, b.prototype.cleanMentioneds = function (b) {if (b) {b.mentionedMsg = null;var c = b.targetId,d = b.conversationType,e = a.RongIMClient._storageProvider.getItem("mentioneds_" + a.Bridge._client.userId + "_" + d + "_" + c);if (e) {var f = JSON.parse(e);delete f[d + "_" + c], a.MessageUtil.isEmpty(f) ? a.RongIMClient._storageProvider.removeItem("mentioneds_" + a.Bridge._client.userId + "_" + d + "_" + c) : a.RongIMClient._storageProvider.setItem("mentioneds_" + a.Bridge._client.userId + "_" + d + "_" + c, JSON.stringify(f));}}}, b.prototype.clearUnreadCountByTimestamp = function (a, b, c, d) {setTimeout(function () {d.onSuccess(!0);});}, b.prototype.clearUnreadCount = function (b, c, d) {var e = this;a.RongIMClient._storageProvider.removeItem("cu" + a.Bridge._client.userId + b + c), this.getConversation(b, c, { onSuccess: function onSuccess(a) {a && (a.unreadMessageCount = 0, e.cleanMentioneds(a)), setTimeout(function () {d.onSuccess(!0);});}, onError: function onError(a) {setTimeout(function () {d.onError(a);});} });}, b.prototype.clearTotalUnreadCount = function (b) {var c = a.RongIMClient._memoryStore.conversationList,d = this;if (c) for (var e = 0; e < c.length; e++) {var f = c[e];f && (f.unreadMessageCount = 0, d.cleanMentioneds(f));}var g = a.RongIMClient._storageProvider.getItemKeyList("cu" + a.Bridge._client.userId);a.RongUtil.forEach(g, function (b) {a.RongIMClient._storageProvider.removeItem(b);}), setTimeout(function () {b.onSuccess(!0);});}, b.prototype.setConversationToTop = function (a, b, c, d) {var e = this;this.getConversation(a, b, { onSuccess: function onSuccess(a) {a.isTop = c, e.addConversation(a, d), setTimeout(function () {d.onSuccess(!0);});}, onError: function onError(a) {setTimeout(function () {d.onError(a);});} });}, b.prototype.getConversationNotificationStatus = function (b, c) {var d = b.targetId,e = b.conversationType,f = a.RongIMClient._memoryStore.notification,g = function g() {return e + "_" + d;},h = g(),i = f[h];if ("number" == typeof i) return void c.onSuccess(i);var j = { 1: "qryPPush", 3: "qryDPush" },k = j[e];if (!k) {return void c.onError(8001);}var l = new a.RongIMClient.Protobuf.BlockPushInput();l.setBlockeeId(d);var m = a.Bridge._client.userId,n = function n(a) {f[h] = a, setTimeout(function () {c.onSuccess(a);});};a.RongIMClient.bridge.queryMsg(k, a.MessageUtil.ArrayForm(l.toArrayBuffer()), m, { onSuccess: function onSuccess(a) {n(a);}, onError: function onError(a) {1 == a ? n(a) : setTimeout(function () {c.onError(a);});} });}, b.prototype.setConversationNotificationStatus = function (b, c) {var d = b.conversationType,e = b.targetId,f = b.status,g = function g() {return d + "_" + f;},h = { "1_1": "blkPPush", "3_1": "blkDPush", "1_0": "unblkPPush", "3_0": "unblkDPush" },i = g();a.RongIMClient._memoryStore.notification[i] = f;var j = h[i];if (!j) {return void setTimeout(function () {c.onError(8001);});}var k = new a.RongIMClient.Protobuf.BlockPushInput();k.setBlockeeId(e);var l = a.Bridge._client.userId;a.RongIMClient.bridge.queryMsg(j, a.MessageUtil.ArrayForm(k.toArrayBuffer()), l, { onSuccess: function onSuccess(a) {setTimeout(function () {c.onSuccess(a);});}, onError: function onError(a) {setTimeout(function () {c.onError(a);});} });}, b.prototype.getUserStatus = function (b, c) {var d = new a.RongIMClient.Protobuf.GetUserStatusInput();b = a.Bridge._client.userId, a.RongIMClient.bridge.queryMsg(35, a.MessageUtil.ArrayForm(d.toArrayBuffer()), b, { onSuccess: function onSuccess(b) {b = a.RongInnerTools.convertUserStatus(b), setTimeout(function () {c.onSuccess(b);});}, onError: function onError(a) {setTimeout(function () {c.onError(a);});} }, "GetUserStatusOutput");}, b.prototype.setUserStatus = function (b, c) {var d = new a.RongIMClient.Protobuf.SetUserStatusInput(),e = a.Bridge._client.userId;b && d.setStatus(b), a.RongIMClient.bridge.queryMsg(36, a.MessageUtil.ArrayForm(d.toArrayBuffer()), e, { onSuccess: function onSuccess(a) {setTimeout(function () {c.onSuccess(!0);});}, onError: function onError(a) {setTimeout(function () {c.onError(a);});} }, "SetUserStatusOutput");}, b.prototype.subscribeUserStatus = function (b, c) {var d = new a.RongIMClient.Protobuf.SubUserStatusInput(),e = a.Bridge._client.userId;d.setUserid(b), a.RongIMClient.bridge.queryMsg(37, a.MessageUtil.ArrayForm(d.toArrayBuffer()), e, { onSuccess: function onSuccess(a) {setTimeout(function () {c && c.onSuccess(!0);});}, onError: function onError(a) {setTimeout(function () {c && c.onError(a);});} }, "SubUserStatusOutput");}, b.prototype.setUserStatusListener = function (b, c) {a.RongIMClient.userStatusListener = c;var d = b.userIds || [];d.length && a.RongIMClient._dataAccessProvider.subscribeUserStatus(d);}, b.prototype.clearListeners = function () {}, b.prototype.setServerInfo = function (a) {}, b.prototype.getUnreadMentionedMessages = function (a, b) {return null;}, b.prototype.setConversationHidden = function (a, b, c) {}, b.prototype.setMessageExtra = function (a, b, c) {setTimeout(function () {c.onSuccess(!0);});}, b.prototype.setMessageReceivedStatus = function (a, b, c) {setTimeout(function () {c.onSuccess(!0);});}, b.prototype.setMessageSentStatus = function (a, b, c) {setTimeout(function () {c.onSuccess(!0);});}, b.prototype.getAllConversations = function (a) {setTimeout(function () {a.onSuccess([]);});}, b.prototype.getConversationByContent = function (a, b) {setTimeout(function () {b.onSuccess([]);});}, b.prototype.getMessagesFromConversation = function (a, b, c, d) {setTimeout(function () {d.onSuccess([]);});}, b.prototype.searchConversationByContent = function (a, b, c) {setTimeout(function () {b.onSuccess([]);});}, b.prototype.searchMessageByContent = function (a, b, c, d, e, f, g) {setTimeout(function () {g.onSuccess([]);});}, b.prototype.getDelaTime = function () {return a.RongIMClient._memoryStore.deltaTime;}, b.prototype.getCurrentConnectionStatus = function () {var b = a.Bridge._client || {},c = b.channel || {},d = a.ConnectionStatus.CONNECTION_CLOSED;return "number" == typeof c.connectionStatus && (d = c.connectionStatus), d;}, b.prototype.getAgoraDynamicKey = function (b, c, d) {var e = new a.RongIMClient.Protobuf.VoipDynamicInput();e.setEngineType(b), e.setChannelName(c), a.RongIMClient.bridge.queryMsg(32, a.MessageUtil.ArrayForm(e.toArrayBuffer()), a.Bridge._client.userId, { onSuccess: function onSuccess(a) {setTimeout(function () {d.onSuccess(a);});}, onError: function onError(a) {setTimeout(function () {d.onError(a);});} }, "VoipDynamicOutput");}, b.prototype.setDeviceInfo = function (a) {}, b.prototype.setEnvironment = function (a) {}, b.prototype.clearData = function () {return !0;}, b.prototype.getPublicServiceProfile = function (b, c, d) {var e = a.RongIMClient._memoryStore.publicServiceMap.get(b, c);setTimeout(function () {d.onSuccess(e);});}, b.prototype.getRemotePublicServiceList = function (b, c) {if (a.RongIMClient._memoryStore.depend.openMp) {var d = new a.RongIMClient.Protobuf.PullMpInput();c ? d.setTime(c) : d.setTime(0), d.setMpid(""), a.RongIMClient.bridge.queryMsg(28, a.MessageUtil.ArrayForm(d.toArrayBuffer()), a.Bridge._client.userId, { onSuccess: function onSuccess(c) {a.RongIMClient._memoryStore.publicServiceMap.publicServiceList.length = 0, a.RongIMClient._memoryStore.publicServiceMap.publicServiceList = c, setTimeout(function () {b && b.onSuccess(c);});}, onError: function onError(a) {setTimeout(function () {b && b.onError(a);});} }, "PullMpOutput");}}, b.prototype.getRTCUserInfoList = function (b, c) {var d = new a.RongIMClient.Protobuf.RtcQueryListInput();d.setOrder(2), a.RongIMClient.bridge.queryMsg("rtcUData", a.MessageUtil.ArrayForm(d.toArrayBuffer()), b.id, { onSuccess: function onSuccess(b) {var d = {},e = b.list;a.RongUtil.forEach(e, function (b) {var c = b.userId,e = {};a.RongUtil.forEach(b.userData, function (a) {var b = a.key,c = a.value;e[b] = c;}), d[c] = e;}), c.onSuccess(d);}, onError: function onError(a) {c.onError(a);} }, "RtcUserListOutput");}, b.prototype.getRTCUserList = function (b, c) {var d = new a.RongIMClient.Protobuf.RtcQueryListInput();d.setOrder(2), a.RongIMClient.bridge.queryMsg("rtcUList", a.MessageUtil.ArrayForm(d.toArrayBuffer()), b.id, { onSuccess: function onSuccess(a) {c.onSuccess({ users: a.list });}, onError: function onError(a) {c.onError(a);} }, "RtcUserListOutput");}, b.prototype.setRTCUserInfo = function (b, c, d) {var e = new a.RongIMClient.Protobuf.RtcValueInfo();e.setKey(c.key), e.setValue(c.value), a.RongIMClient.bridge.queryMsg("rtcUPut", a.MessageUtil.ArrayForm(e.toArrayBuffer()), b.id, { onSuccess: function onSuccess() {d.onSuccess(!0);}, onError: function onError(a) {d.onError(a);} });}, b.prototype.removeRTCUserInfo = function (b, c, d) {var e = new a.RongIMClient.Protobuf.RtcKeyDeleteInput(),f = c.keys || [];a.RongUtil.isArray(f) || (f = [f]), e.setKey(f), a.RongIMClient.bridge.queryMsg("rtcUDel", a.MessageUtil.ArrayForm(e.toArrayBuffer()), b.id, { onSuccess: function onSuccess() {d.onSuccess(!0);}, onError: function onError(a) {d.onError(a);} });}, b.prototype.getRTCRoomInfo = function (b, c) {var d = new a.RongIMClient.Protobuf.RtcQueryListInput();d.setOrder(2), a.RongIMClient.bridge.queryMsg("rtcRInfo", a.MessageUtil.ArrayForm(d.toArrayBuffer()), b.id, { onSuccess: function onSuccess(b) {var d = { id: b.roomId, total: b.userCount };a.RongUtil.forEach(b.roomData, function (a) {d[a.key] = a.value;}), c.onSuccess(d);}, onError: function onError(a) {c.onError(a);} }, "RtcRoomInfoOutput");}, b.prototype.setRTCRoomInfo = function (b, c, d) {var e = new a.RongIMClient.Protobuf.RtcValueInfo();e.setKey(c.key), e.setValue(c.value), a.RongIMClient.bridge.queryMsg("rtcRPut", a.MessageUtil.ArrayForm(e.toArrayBuffer()), b.id, { onSuccess: function onSuccess() {d.onSuccess(!0);}, onError: function onError(a) {d.onError(a);} });}, b.prototype.removeRTCRoomInfo = function (b, c, d) {var e = new a.RongIMClient.Protobuf.RtcKeyDeleteInput(),f = c.keys || [];a.RongUtil.isArray(f) || (f = [f]), e.setKey(f), a.RongIMClient.bridge.queryMsg("rtcRDel", a.MessageUtil.ArrayForm(e.toArrayBuffer()), b.id, { onSuccess: function onSuccess() {d.onSuccess(!0);}, onError: function onError(a) {d.onError(a);} });}, b.prototype.joinRTCRoom = function (b, c) {var d = new a.RongIMClient.Protobuf.RtcInput();d.setNothing(b.mode), a.RongIMClient.bridge.queryMsg("rtcRJoin_data", a.MessageUtil.ArrayForm(d.toArrayBuffer()), b.id, { onSuccess: function onSuccess(b) {var d = {},e = b.list,f = b.token;a.RongUtil.forEach(e, function (b) {var c = b.userId,e = {};a.RongUtil.forEach(b.userData, function (a) {var b = a.key,c = a.value;e[b] = c;}), d[c] = e;}), c.onSuccess({ users: d, token: f });}, onError: function onError(a) {c.onError(a);} }, "RtcUserListOutput");}, b.prototype.quitRTCRoom = function (b, c) {var d = new a.RongIMClient.Protobuf.SetUserStatusInput();a.RongIMClient.bridge.queryMsg("rtcRExit", a.MessageUtil.ArrayForm(d.toArrayBuffer()), b.id, { onSuccess: function onSuccess() {c.onSuccess(!0);}, onError: function onError(a) {c.onError(a);} });}, b.prototype.RTCPing = function (b, c) {var d = new a.RongIMClient.Protobuf.RtcInput();a.RongIMClient.bridge.queryMsg("rtcPing", a.MessageUtil.ArrayForm(d.toArrayBuffer()), b.id, c);}, b.prototype.setRTCData = function (b, c, d, e, f, g, h) {var i = new a.RongIMClient.Protobuf.RtcSetDataInput();i.setInterior(e), i.setTarget(f), i.setKey(c), i.setValue(d), h = h || {};var j = h.name,k = h.content;j && i.setObjectName(j), k && (a.RongUtil.isString(k) || (k = JSON.stringify(k)), i.setContent(k)), a.RongIMClient.bridge.queryMsg("rtcSetData", a.MessageUtil.ArrayForm(i.toArrayBuffer()), b, g, "RtcOutput");}, b.prototype.getRTCData = function (b, c, d, e, f) {var g = new a.RongIMClient.Protobuf.RtcDataInput();g.setInterior(d), g.setTarget(e), g.setKey(c), a.RongIMClient.bridge.queryMsg("rtcQryData", a.MessageUtil.ArrayForm(g.toArrayBuffer()), b, { onSuccess: function onSuccess(b) {var c = {},d = b.outInfo;a.RongUtil.forEach(d, function (a) {c[a.key] = a.value;}), f.onSuccess(c);}, onError: f.onError }, "RtcQryOutput");}, b.prototype.removeRTCData = function (b, c, d, e, f, g) {var h = new a.RongIMClient.Protobuf.RtcDataInput();h.setInterior(d), h.setTarget(e), h.setKey(c), g = g || {};var i = g.name,j = g.content;i && h.setObjectName(i), j && (a.RongUtil.isString(j) || (j = JSON.stringify(j)), h.setContent(j)), a.RongIMClient.bridge.queryMsg("rtcDelData", a.MessageUtil.ArrayForm(h.toArrayBuffer()), b, f, "RtcOutput");}, b.prototype.setRTCUserData = function (b, c, d, e, f, g) {this.setRTCData(b, c, d, e, a.RTCAPIType.PERSON, f, g);}, b.prototype.getRTCUserData = function (b, c, d, e, f) {this.getRTCData(b, c, d, a.RTCAPIType.PERSON, e);}, b.prototype.removeRTCUserData = function (b, c, d, e, f) {this.removeRTCData(b, c, d, a.RTCAPIType.PERSON, e, f);}, b.prototype.setRTCRoomData = function (b, c, d, e, f, g) {this.setRTCData(b, c, d, e, a.RTCAPIType.ROOM, f, g);}, b.prototype.getRTCRoomData = function (b, c, d, e, f) {this.getRTCData(b, c, d, a.RTCAPIType.ROOM, e);}, b.prototype.removeRTCRoomData = function (b, c, d, e, f) {this.removeRTCData(b, c, d, a.RTCAPIType.ROOM, e, f);}, b.prototype.getNavi = function () {var b = a.RongIMClient._storageProvider.getItem("fullnavi") || "{}";return JSON.parse(b);}, b.prototype.getRTCToken = function (b, c) {var d = new a.RongIMClient.Protobuf.RtcInput();a.RongIMClient.bridge.queryMsg("rtcToken", a.MessageUtil.ArrayForm(d.toArrayBuffer()), b.id, { onSuccess: function onSuccess(a) {c.onSuccess(a);}, onError: function onError(a) {c.onError(a);} }, "RtcTokenOutput");}, b;}();a.ServerDataProvider = b;}(RongIMLib || (RongIMLib = {}));var RongIMLib;!function (a) {var b = function () {function b(a) {this.version = "2.8.27", this.userId = "", this.useConsole = !1, this.appKey = "", this.token = "", this.addon = a;}return b.prototype.init = function (a, b) {this.appKey = a, this.useConsole && console.log("init"), b = b || {}, b.version = this.version;var c = this.addon.initWithAppkey(a, b.dbPath, b);return c && (c = JSON.parse(c)), this.addon.registerMessageType("RC:VcMsg", 3), this.addon.registerMessageType("RC:ImgTextMsg", 3), this.addon.registerMessageType("RC:FileMsg", 3), this.addon.registerMessageType("RC:LBSMsg", 3), this.addon.registerMessageType("RC:PSImgTxtMsg", 3), this.addon.registerMessageType("RC:PSMultiImgTxtMsg", 3), this.addon.registerMessageType("RCJrmf:RpMsg", 3), this.addon.registerMessageType("RCJrmf:RpOpendMsg", 1), this.addon.registerMessageType("RC:GrpNtf", 1), this.addon.registerMessageType("RC:DizNtf", 0), this.addon.registerMessageType("RC:InfoNtf", 0), this.addon.registerMessageType("RC:ContactNtf", 0), this.addon.registerMessageType("RC:ProfileNtf", 0), this.addon.registerMessageType("RC:CmdNtf", 0), this.addon.registerMessageType("RC:CmdMsg", 0), this.addon.registerMessageType("RC:TypSts", 0), this.addon.registerMessageType("RC:CsChaR", 0), this.addon.registerMessageType("RC:CsHsR", 0), this.addon.registerMessageType("RC:CsEnd", 0), this.addon.registerMessageType("RC:CsSp", 0), this.addon.registerMessageType("RC:CsUpdate", 0), this.addon.registerMessageType("RC:CsContact", 0), this.addon.registerMessageType("RC:ReadNtf", 0), this.addon.registerMessageType("RC:VCAccept", 0), this.addon.registerMessageType("RC:VCRinging", 0), this.addon.registerMessageType("RC:VCSummary", 0), this.addon.registerMessageType("RC:VCHangup", 0), this.addon.registerMessageType("RC:VCInvite", 0), this.addon.registerMessageType("RC:VCModifyMedia", 0), this.addon.registerMessageType("RC:VCModifyMem", 0), this.addon.registerMessageType("RC:PSCmd", 0), this.addon.registerMessageType("RC:RcCmd", 0), this.addon.registerMessageType("RC:SRSMsg", 0), this.addon.registerMessageType("RC:RRReqMsg", 0), this.addon.registerMessageType("RC:RRRspMsg", 0), c;}, b.prototype.connect = function (b, c, d, e) {this.useConsole && console.log("connect"), this.userId = d, this.connectCallback = c, a.Bridge._client = { userId: d }, e = e || {};var f = !!e.openMp,g = !!e.openUS;e.type && this.addon.setEnvironment(!0), this.addon.connectWithToken(b, d, e.serverList, f, g);}, b.prototype.setServerInfo = function (a) {"setServerInfo" in this.addon && this.addon.setServerInfo(a.navi);}, b.prototype.logout = function () {this.useConsole && console.log("logout"), this.disconnect();}, b.prototype.disconnect = function () {this.useConsole && console.log("disconnect"), this.addon.disconnect(!0);}, b.prototype.clearListeners = function () {this.addon.setOnReceiveStatusListener(), this.addon.setConnectionStatusListener(), this.addon.setOnReceiveMessageListener();}, b.prototype.clearData = function () {return this.useConsole && console.log("clearData"), this.addon.clearData();}, b.prototype.setConnectionStatusListener = function (b) {var c = this;c.connectListener = b, this.useConsole && console.log("setConnectionStatusListener"), c.addon && c.addon.setConnectionStatusListener(function (d) {switch (d) {
            case 10:setTimeout(function () {b.onChanged(a.ConnectionStatus.CONNECTING);});break;case 31004:setTimeout(function () {c.connectCallback.onTokenIncorrect();});break;case 1:case 8:case 9:case 11:case 12:case 31011:case 3e4:case 30002:setTimeout(function () {b.onChanged(a.ConnectionStatus.DISCONNECTED);});break;case 0:case 33005:setTimeout(function () {c.connectCallback.onSuccess(c.userId), b.onChanged(a.ConnectionStatus.CONNECTED);});break;case 6:setTimeout(function () {b.onChanged(a.ConnectionStatus.KICKED_OFFLINE_BY_OTHER_CLIENT);});break;default:setTimeout(function () {b.onChanged(d);});}});}, b.prototype.setOnReceiveMessageListener = function (b) {var c = this;c.messageListener = b, this.useConsole && console.log("setOnReceiveMessageListener"), c.addon && c.addon.setOnReceiveMessageListener(function (d, e, f, g) {var h = c.buildMessage(d);h.offLineMessage = f, setTimeout(function () {["AcceptMessage", "RingingMessage", "HungupMessage", "InviteMessage", "MediaModifyMessage", "MemberModifyMessage"].indexOf(h.messageType) > -1 ? a.RongIMClient._voipProvider && a.RongIMClient._voipProvider.onReceived(h) : b.onReceived(h, e, g);});});}, b.prototype.sendTypingStatusMessage = function (b, c, d, e) {var f = this;this.useConsole && console.log("sendTypingStatusMessage"), d in a.RongIMClient.MessageParams && f.sendMessage(b, c, a.TypingStatusMessage.obtain(a.RongIMClient.MessageParams[d].objectName, ""), { onSuccess: function onSuccess() {setTimeout(function () {e.onSuccess();});}, onError: function onError(a) {setTimeout(function () {e.onError(a, null);});}, onBefore: function onBefore() {} });}, b.prototype.setMessageStatus = function (a, b, c, d, e) {this.addon.updateMessageReceiptStatus(a, b, c), e.onSuccess(!0);}, b.prototype.sendTextMessage = function (b, c, d, e) {var f = a.TextMessage.obtain(d);this.useConsole && console.log("sendTextMessage"), this.sendMessage(b, c, f, e);}, b.prototype.getRemoteHistoryMessages = function (b, c, d, e, f, g) {try {var h = this;h.useConsole && console.log("getRemoteHistoryMessages"), h.addon.getRemoteHistoryMessages(b, c, d || 0, e, function (b, c) {var d = b ? JSON.parse(b).list : [],e = [];d.reverse();for (var g = 0, i = d.length; g < i; g++) {var j = h.buildMessage(d[g].obj);j.sentStatus = a.SentStatus.READ, e[g] = j;}f.onSuccess(e, !!c);}, function (a) {f.onError(a);});} catch (i) {f.onError(i);}}, b.prototype.getRemoteConversationList = function (a, b, c, d) {try {this.useConsole && console.log("getRemoteConversationList");var e = b || [1, 2, 3, 4, 5, 6, 7, 8],f = this.addon.getConversationList(e),g = JSON.parse(f).list,h = [],i = this,j = 0;g.reverse(), d = "boolean" == typeof d && d;for (var k = 0, l = g.length; k < l; k++) {var m = g[k].obj,n = JSON.parse(m);if ("" != n) {if (1 == n.isHidden && d) continue;h[j] = i.buildConversation(m), j++;}}h.reverse();var o = h.length;c = c || o, o > c && (h.length = c), a.onSuccess(h);} catch (p) {a.onError(p);}}, b.prototype.removeConversation = function (b, c, d) {try {this.useConsole && console.log("removeConversation"), this.addon.removeConversation(b, c);for (var e = a.RongIMClient._memoryStore.conversationList, f = e.length, g = 0; g < f; g++) {if (e[g].conversationType == b && c == e[g].targetId) {e.splice(g, 1);break;}}d.onSuccess(!0);} catch (h) {d.onError(h);}}, b.prototype.joinChatRoom = function (a, b, c) {this.useConsole && console.log("joinChatRoom"), this.addon.joinChatRoom(a, b, function () {c.onSuccess();}, function (a) {c.onError(a);});}, b.prototype.quitChatRoom = function (a, b) {this.useConsole && console.log("quitChatRoom"), this.addon.quitChatRoom(a, function () {b.onSuccess();}, function (a) {b.onError(a);});}, b.prototype.addToBlacklist = function (a, b) {this.useConsole && console.log("addToBlacklist"), this.addon.addToBlacklist(a, function () {b.onSuccess();}, function (a) {b.onError(a);});}, b.prototype.getBlacklist = function (a) {this.useConsole && console.log("getBlacklist"), this.addon.getBlacklist(function (b) {a.onSuccess(b);}, function (b) {a.onError(b);});}, b.prototype.getBlacklistStatus = function (a, b) {this.useConsole && console.log("getBlacklistStatus"), this.addon.getBlacklistStatus(a, function (a) {b.onSuccess(a);}, function (a) {b.onError(a);});}, b.prototype.removeFromBlacklist = function (a, b) {this.useConsole && console.log("removeFromBlacklist"), this.addon.removeFromBlacklist(a, function () {b.onSuccess();}, function (a) {b.onError(a);});}, b.prototype.sendMessage = function (b, c, d, e, f, g, h, i, j) {var k = this,l = [];k.useConsole && console.log("sendMessage"), j = j || {};var m = b == a.ConversationType.DISCUSSION || b == a.ConversationType.GROUP;if (m && d.messageName == a.RongIMClient.MessageType.ReadReceiptResponseMessage) {l = [];var n = d;if (n.receiptMessageDic) {var o = [];for (var p in n.receiptMessageDic) {o.push(p);}l = o;}}m && d.messageName == a.RongIMClient.MessageType.SyncReadStatusMessage && (l = [], l.push(k.userId));var q = j.userIds;m && q && (l = q);var r = k.addon.sendMessage(b, c, a.RongIMClient.MessageParams[d.messageName].objectName, d.encode(), g || "", h || "", function (a) {}, function (b, c) {var d = k.buildMessage(b),f = a.ErrorCode.SENSITIVE_REPLACE;if (c == f) return e.onError(f, d);e.onSuccess(d);}, function (a, b) {e.onError(b, k.buildMessage(a));}, l, f),s = JSON.parse(r);e.onBefore && e.onBefore(s.messageId), a.MessageIdHandler.messageId = s.messageId;}, b.prototype.registerMessageType = function (b, c, d, e, f) {this.useConsole && console.log("registerMessageType"), this.addon.registerMessageType(c, d.getMessageTag(), f);var g = a.ModelUtil.modleCreate(e, b);a.RongIMClient.RegisterMessage[b] = g, a.RongIMClient.RegisterMessage[b].messageName = b, registerMessageTypeMapping[c] = b, a.RongIMClient.MessageType[b] = b, a.RongIMClient.MessageParams[b] = { objectName: c, msgTag: d }, typeMapping[c] = b;}, b.prototype.registerMessageTypes = function (b) {var c = [],d = function d(a) {var b = [];for (var c in a) {b.push(c);}return b;};for (var e in b) {var f = b[e],g = f.proto,h = d(g),i = f.flag || 3,j = a.MessageTag.getTagByStatus(i);i = new a.MessageTag(j.isCounted, j.isPersited), c.push({ type: e, name: f.name, flag: i, protos: h });}for (var k = function k(b) {var c = b.type,d = b.name,e = b.flag,f = b.protos;a.RongIMClient.registerMessageType(c, d, e, f);}, l = 0, m = c.length; l < m; l++) {var f = c[l];k(f);}}, b.prototype.addMessage = function (b, c, d, e) {this.useConsole && console.log("addMessage");var f = d.direction,g = this.addon.insertMessage(b, c, d.senderUserId, d.objectName, JSON.stringify(d.content), function () {e.onSuccess(h.buildMessage(g));}, function () {e.onError(a.ErrorCode.MSG_INSERT_ERROR);}, f),h = this;}, b.prototype.removeMessage = function (a, b, c, d) {}, b.prototype.removeLocalMessage = function (a, b, c, d) {try {this.useConsole && console.log("removeLocalMessage"), this.addon.deleteMessages(c), d.onSuccess(!0);} catch (e) {d.onError(e);}}, b.prototype.getMessage = function (a, b) {try {this.useConsole && console.log("getMessage");var c = this.buildMessage(this.addon.getMessage(a));b.onSuccess(c);} catch (d) {b.onError(d);}}, b.prototype.clearMessages = function (a, b, c) {try {this.useConsole && console.log("clearMessages"), this.addon.clearMessages(a, b), c.onSuccess(!0);} catch (d) {c.onError(d);}}, b.prototype.setUnreadCount = function (a, b, c) {}, b.prototype.getConversation = function (a, b, c) {try {this.useConsole && console.log("getConversation");var d = this.addon.getConversation(a, b);c.onSuccess(this.buildConversation(d));} catch (e) {c.onError(e);}}, b.prototype.getConversationList = function (a, b, c, d) {this.useConsole && console.log("getConversationList"), this.getRemoteConversationList(a, b, c, d);}, b.prototype.clearCache = function () {var b = a.RongIMClient._memoryStore || {};b.conversationList = [], b.isSyncRemoteConverList;}, b.prototype.clearConversations = function (a, b) {try {this.useConsole && console.log("clearConversations"), this.addon.clearConversations(), b.onSuccess(!0);} catch (c) {b.onError(c);}}, b.prototype.setMessageContent = function (a, b, c) {b = JSON.stringify(b), this.addon.setMessageContent(a, b, c);}, b.prototype.setMessageSearchField = function (a, b, c) {b = JSON.stringify(b), this.addon.setMessageContent(a, b, c);}, b.prototype.getHistoryMessages = function (b, c, d, e, f, g, h) {if (this.useConsole && console.log("getHistoryMessages"), e <= 0) return void f.onError(a.ErrorCode.TIMEOUT);g = g || "", h = void 0 === h || h;try {var i = this.addon.getHistoryMessages(b, c, d || 0, e, g, h),j = i ? JSON.parse(i).list : [],k = [],l = this;j.reverse();for (var m = 0, n = j.length; m < n; m++) {var o = l.buildMessage(j[m].obj);k[m] = o;}f.onSuccess(k, n == e);} catch (p) {f.onError(p);}}, b.prototype.clearRemoteHistoryMessages = function (b, c) {var d = b.conversationType,e = b.targetId,f = b.timestamp;return { 1: !0, 2: !0, 3: !0, 5: !0, 6: !0 }[d] ? "number" != typeof f ? void c.onError(a.ErrorCode.CLEAR_HIS_TIME_ERROR) : void this.addon.clearRemoteHistoryMessages(+d, e, f, function () {c.onSuccess(!0);}, function (b) {1 == b && (b = a.ErrorCode.CLEAR_HIS_ERROR), c.onError(b);}) : void c.onError(a.ErrorCode.CLEAR_HIS_TYPE_ERROR);}, b.prototype.clearHistoryMessages = function (b, c) {var d = +b.conversationType,e = b.targetId;try {this.addon.clearMessages(d, e);c.onSuccess(!0);} catch (f) {console.log(f), c.onError(a.ErrorCode.CLEAR_HIS_ERROR);}}, b.prototype.getTotalUnreadCount = function (a, b) {try {var c;this.useConsole && console.log("getTotalUnreadCount"), c = b ? this.addon.getTotalUnreadCount(b) : this.addon.getTotalUnreadCount(), a.onSuccess(c);} catch (d) {a.onError(d);}}, b.prototype.getConversationUnreadCount = function (a, b) {this.useConsole && console.log("getConversationUnreadCount"), this.getTotalUnreadCount(b, a);}, b.prototype.getUnreadCount = function (a, b, c) {try {this.useConsole && console.log("getUnreadCount");var d = this.addon.getUnreadCount(a, b);c.onSuccess(d);} catch (e) {c.onError(e);}}, b.prototype.clearUnreadCount = function (a, b, c) {try {this.useConsole && console.log("clearUnreadCount");this.addon.clearUnreadCount(a, b);c.onSuccess(!0);} catch (d) {c.onError(d);}}, b.prototype.clearTotalUnreadCount = function (a) {this.useConsole && console.log("clearTotalUnreadCount");}, b.prototype.clearUnreadCountByTimestamp = function (a, b, c, d) {try {this.useConsole && console.log("clearUnreadCountByTimestamp");this.addon.clearUnreadCountByTimestamp(a, b, c);d.onSuccess(!0);} catch (e) {d.onError(e);}}, b.prototype.setConversationToTop = function (a, b, c, d) {try {this.useConsole && console.log("setConversationToTop"), this.addon.setConversationToTop(a, b, c), d.onSuccess(!0);} catch (e) {d.onError(e);}}, b.prototype.setConversationHidden = function (a, b, c) {this.addon.setConversationHidden(a, b, c);}, b.prototype.setMessageReceivedStatus = function (a, b, c) {try {this.useConsole && console.log("setMessageReceivedStatus"), this.addon.setMessageReceivedStatus(a, b), c.onSuccess(!0);} catch (d) {c.onError(d);}}, b.prototype.setMessageSentStatus = function (a, b, c) {try {this.useConsole && console.log("setMessageSentStatus"), this.addon.setMessageSentStatus(a, b), c.onSuccess(!0);} catch (d) {c.onError(d);}}, b.prototype.getFileToken = function (a, b) {this.useConsole && console.log("getFileToken"), this.addon.getUploadToken(a, function (a) {b.onSuccess({ token: a });}, function (a) {b.onError(a);});}, b.prototype.getFileUrl = function (a, b, c, d) {this.useConsole && console.log("getFileUrl"), this.addon.getDownloadUrl(a, b, c, function (a) {d.onSuccess({ downloadUrl: a });}, function (a) {d.onError(a);});}, b.prototype.searchConversationByContent = function (a, b, c) {var d = [];d = void 0 === c ? [1, 2, 3, 4, 5, 6, 7] : c;try {this.useConsole && console.log("searchConversationByContent");var e = this.addon.searchConversationByContent(d, a),f = JSON.parse(e).list,g = [],h = this;f.reverse();for (var i = 0, j = f.length; i < j; i++) {g[i] = h.buildConversation(f[i].obj);}b.onSuccess(g);} catch (k) {b.onError(k);}}, b.prototype.searchMessageByContent = function (a, b, c, d, e, f, g) {var h = this;try {this.useConsole && console.log("searchMessageByContent"), this.addon.searchMessageByContent(a, b, c, d, e, f, function (a, b) {var c = a ? JSON.parse(a).list : [],d = [];c.reverse();for (var e = 0, f = c.length; e < f; e++) {d[e] = h.buildMessage(c[e].obj);}g.onSuccess(d, b);});} catch (i) {g.onError(i);}}, b.prototype.getChatRoomInfo = function (a, b, c, d) {this.useConsole && console.log("getChatRoomInfo"), this.addon.getChatroomInfo(a, b, c, function (a, b) {var c = a ? JSON.parse(a).list : [],e = { userInfos: [], userTotalNums: b };if (c.length > 0) for (var f = 0, g = c.length; f < g; f++) {e.userInfos.push(JSON.parse(c[f].obj));}d.onSuccess(e);}, function (a) {d.onError(a);});}, b.prototype.setChatroomHisMessageTimestamp = function (a, b) {}, b.prototype.getChatRoomHistoryMessages = function (a, b, c, d) {}, b.prototype.getDelaTime = function () {return this.addon.getDeltaTime();}, b.prototype.getUserStatus = function (b, c) {this.addon.getUserStatus(b, function (b) {var d = a.RongInnerTools.convertUserStatus({ status: b, userId: "" });c.onSuccess(d);}, function (a) {c.onError(a);});}, b.prototype.setUserStatus = function (a, b) {this.addon.setUserStatus(a, function () {b.onSuccess(!0);}, function (a) {b.onError(a);});}, b.prototype.subscribeUserStatus = function (a, b) {this.addon.subscribeUserStatus(a, function () {b && b.onSuccess(!0);}, function (a) {b && b.onError(a);});}, b.prototype.setUserStatusListener = function (b, c) {this.addon.setOnReceiveStatusListener(function (b, c) {var d = a.RongInnerTools.convertUserStatus({ userId: b, status: c });a.RongIMClient.userStatusObserver.notify({ key: b, entity: d });});var d = b.userIds || [];d.length && a.RongIMClient._dataAccessProvider.subscribeUserStatus(d);}, b.prototype.getUnreadMentionedMessages = function (a, b) {for (var c = this, d = JSON.parse(c.addon.getUnreadMentionedMessages(a, b)).list, e = 0, f = d.length; e < f; e++) {var g = JSON.parse(d[e].obj);g.content = JSON.parse(g.content), d[e] = g;}return d;}, b.prototype.hasRemoteUnreadMessages = function (a, b) {b.onSuccess(!1);}, b.prototype.sendRecallMessage = function (a, b) {var c = this;c.addon.recallMessage("RC:RcCmd", JSON.stringify(a), a.push || "", function () {a.objectName = "RC:RcCmd", b.onSuccess(c.buildMessage(JSON.stringify(a)));}, function (a) {b.onError(a);});}, b.prototype.updateMessage = function (a, b) {}, b.prototype.updateMessages = function (a, b, c, d, e) {}, b.prototype.reconnect = function (a) {}, b.prototype.sendReceiptResponse = function (a, b, c) {}, b.prototype.setMessageExtra = function (a, b, c) {}, b.prototype.addMemberToDiscussion = function (a, b, c) {}, b.prototype.createDiscussion = function (a, b, c) {}, b.prototype.getDiscussion = function (a, b) {}, b.prototype.quitDiscussion = function (a, b) {}, b.prototype.removeMemberFromDiscussion = function (a, b, c) {}, b.prototype.setDiscussionInviteStatus = function (a, b, c) {}, b.prototype.setDiscussionName = function (a, b, c) {}, b.prototype.setEnvironment = function (a) {this.addon.setEnvironment(a);}, b.prototype.addConversation = function (a, b) {}, b.prototype.updateConversation = function (a) {return null;}, b.prototype.getConversationNotificationStatus = function (b, c) {var d = b.conversationType,e = b.targetId,f = a.RongIMClient._memoryStore.notification,g = d + "_" + e,h = f[g];if ("number" == typeof h) return void c.onSuccess(h);this.addon.getConversationNotificationStatus(d, e, function (a) {f[g] = a, c.onSuccess(a);}, function (a) {c.onError(a);});}, b.prototype.setConversationNotificationStatus = function (b, c) {var d = b.conversationType,e = b.targetId,f = b.status;a.RongIMClient._memoryStore.notification[d + "_" + e] = f;var g = !!f;this.addon.setConversationNotificationStatus(d, e, g, function () {c.onSuccess(f);}, function (a) {c.onError(a);});}, b.prototype.getCurrentConnectionStatus = function () {return this.addon.getConnectionStatus();}, b.prototype.getAgoraDynamicKey = function (a, b, c) {this.addon.getVoIPKey(a, b, "", function (a) {c.onSuccess(a);}, function (a) {c.onError(a);});}, b.prototype.getPublicServiceProfile = function (b, c, d) {var e = a.RongIMClient._memoryStore.publicServiceMap.get(b, c);d.onSuccess(e);}, b.prototype.setDeviceInfo = function (a) {var b = a.id || "";this.addon.setDeviceId(b);}, b.prototype.getRemotePublicServiceList = function (b, c) {var d = [],e = this.addon.getAccounts(),f = function f(a) {var b = { hasFollowed: !1, isGlobal: !1, menu: null };if (!a.obj) {var c = { error: a };throw new Error("å…¬ä¼—è´¦å·æ•°æ®æ ¼å¼é”™è¯¯: " + JSON.stringify(c));}var d = JSON.parse(a.obj),e = { aType: "conversationType", aId: "publicServiceId", aName: "introduction", aUri: "portraitUri", follow: "hasFollowed", isGlobal: "isGlobal" };for (var f in d) {var g = d[f];if ("aExtra" == f) {var h = JSON.parse(g);b.hasFollowed = h.follow, b.isGlobal = h.isGlobal, b.menu = h.menu;}var i = e[f];i && (b[i] = g);}return b;};if (e) {e = JSON.parse(e);for (var g = e.list, h = 0, i = g.length; h < i; h++) {var j = g[h];j = f(j), d.push(j);}}d.length > 0 && (a.RongIMClient._memoryStore.publicServiceMap.publicServiceList.length = 0, a.RongIMClient._memoryStore.publicServiceMap.publicServiceList = d), b.onSuccess(a.RongIMClient._memoryStore.publicServiceMap.publicServiceList);}, b.prototype.buildMessage = function (b) {var c = new a.Message(),d = JSON.parse(b);c.conversationType = d.conversationType, c.targetId = d.targetId, c.messageDirection = d.direction, c.senderUserId = d.senderUserId, d.direction == a.MessageDirection.RECEIVE ? c.receivedStatus = d.status : d.direction == a.MessageDirection.SEND && (c.sentStatus = d.status), c.sentTime = d.sentTime, c.objectName = d.objectName;var e = d.content ? JSON.parse(d.content) : d.content,f = typeMapping[d.objectName] || registerMessageTypeMapping[d.objectName];return e && (e.messageName = f), c.content = e, c.messageId = d.messageId, c.messageUId = d.messageUid, c.messageType = f, c;}, b.prototype.buildConversation = function (b) {if ("" === b) return null;var c = new a.Conversation(),d = JSON.parse(b),e = d.lastestMsg ? this.buildMessage(d.lastestMsg) : {};c.conversationTitle = d.title, c.conversationType = d.conversationType, c.draft = d.draft, c.isTop = d.isTop, c.isHidden = d.isHidden, e.conversationType = d.conversationType, e.targetId = d.targetId, c.latestMessage = e, c.latestMessageId = e.messageId, c.latestMessage.messageType = typeMapping[e.objectName] || registerMessageTypeMapping[e.objectName], c.objectName = e.objectName, c.receivedStatus = a.ReceivedStatus.READ, c.sentTime = e.sentTime, c.senderUserId = e.senderUserId, c.sentStatus = e.status, c.targetId = d.targetId, c.unreadMessageCount = d.unreadCount, c.hasUnreadMention = d.m_hasUnreadMention;var f = this.getUnreadMentionedMessages(d.conversationType, d.targetId);if (f.length > 0) {var g = f.pop();c.mentionedMsg = { uid: g.messageUid, time: g.sentTime, mentionedInfo: g.content.mentionedInfo, sendUserId: g.senderUserId };}return c;}, b.prototype.getRTCUserInfoList = function (a, b) {}, b.prototype.setRTCUserInfo = function (a, b, c) {}, b.prototype.removeRTCUserInfo = function (a, b, c) {}, b.prototype.getRTCUserList = function (a, b) {}, b.prototype.getRTCRoomInfo = function (a, b) {}, b.prototype.setRTCRoomInfo = function (a, b, c) {}, b.prototype.removeRTCRoomInfo = function (a, b, c) {}, b.prototype.joinRTCRoom = function (a, b) {}, b.prototype.quitRTCRoom = function (a, b) {}, b.prototype.RTCPing = function (a, b) {}, b.prototype.setRTCUserData = function (a, b, c, d, e, f) {}, b.prototype.getRTCUserData = function (a, b, c, d, e) {}, b.prototype.removeRTCUserData = function (a, b, c, d, e) {}, b.prototype.setRTCRoomData = function (a, b, c, d, e, f) {}, b.prototype.getRTCRoomData = function (a, b, c, d, e) {}, b.prototype.removeRTCRoomData = function (a, b, c, d, e) {}, b.prototype.getNavi = function () {}, b.prototype.getRTCToken = function (a, b) {}, b;}();a.VCDataProvider = b;}(RongIMLib || (RongIMLib = {}));var RongIMLib;!function (a) {var b = function () {function a() {this._memeoryStore = {}, this.prefix = "rong_";}return a.prototype.setItem = function (a, b) {this._memeoryStore[a] = decodeURIComponent(b);}, a.prototype.getItem = function (a) {return this._memeoryStore[a];}, a.prototype.removeItem = function (a) {this.getItem(a) && delete this._memeoryStore[a];}, a.prototype.getItemKey = function (a) {var b = this,c = null,d = new RegExp(a + "\\w+");for (var e in b._memeoryStore) {e.match(d) && (c = e);}return c;}, a.prototype.getItemKeyList = function (a) {var b = this.prefix,c = this,d = [],e = new RegExp(a + "\\w+");for (var f in c._memeoryStore) {f.match(e) && (f = f.substring(b.length), d.push(f));}return d;}, a.prototype.clearItem = function () {var a = this;for (var b in a._memeoryStore) {delete a._memeoryStore[b];}}, a.prototype.onOutOfQuota = function () {return 4096;}, a;}();a.MemeoryProvider = b;}(RongIMLib || (RongIMLib = {}));var RongIMLib;!function (a) {var b = function () {function b() {this.prefix = "rong_", this._host = "";var b = new Date(),c = b.getMonth() + 1,d = b.getFullYear() + "/" + (1 == c.toString().length ? "0" + c : c) + "/" + b.getDate(),e = new Date(d).getTime();for (var f in localStorage) {if (f.lastIndexOf("RECEIVED") > -1) {var g = JSON.parse(localStorage.getItem(f));for (var h in g) {e - g[h].dealtime > 0 && delete g[h];}a.RongUtil.isEmpty(g) ? localStorage.removeItem(f) : localStorage.setItem(f, JSON.stringify(g));}if (f.lastIndexOf("SENT") > -1) {e - JSON.parse(localStorage.getItem(f)).dealtime > 0 && localStorage.removeItem(f);}}}return b.prototype.setItem = function (a, b) {a && (-1 == a.indexOf(this.prefix) && (a = this.prefix + a), localStorage.setItem(a, b));}, b.prototype.getItem = function (a) {return a ? (-1 == a.indexOf(this.prefix) && (a = this.prefix + a), localStorage.getItem(a || "")) : "";}, b.prototype.getItemKey = function (a) {var b = "",c = this.prefix + a;for (var d in localStorage) {if (0 == d.indexOf(c)) {b = d;break;}}return b;}, b.prototype.getItemKeyList = function (a) {var b = [],c = this.prefix,d = c + a;for (var e in localStorage) {0 == e.indexOf(d) && (e = e.substring(c.length), b.push(e));}return b;}, b.prototype.removeItem = function (a) {a && (-1 == a.indexOf(this.prefix) && (a = this.prefix + a), localStorage.removeItem(a.toString()));}, b.prototype.clearItem = function () {var a = this;for (var b in localStorage) {b.indexOf(a.prefix) > -1 && a.removeItem(b);}}, b.prototype.onOutOfQuota = function () {return JSON.stringify(localStorage).length;}, b;}();a.LocalStorageProvider = b;}(RongIMLib || (RongIMLib = {}));var RongIMLib;!function (a) {var b = function () {function a() {this.opersistName = "RongIMLib", this.keyManager = "RongUserDataKeyManager", this._host = "", this.prefix = "rong_", this.oPersist = document.createElement("div"), this.oPersist.style.display = "none", this.oPersist.style.behavior = "url('#default#userData')", document.body.appendChild(this.oPersist), this.oPersist.load(this.opersistName);}return a.prototype.setItem = function (a, b) {a && -1 == a.indexOf(this.prefix) && (a = this.prefix + a), this.oPersist.setAttribute(a, b);var c = this.getItem(this.keyManager);c ? -1 == c.indexOf(a) && (c += "," + a) : c = a, this.oPersist.setAttribute(this.prefix + this.keyManager, c), this.oPersist.save(this.opersistName);}, a.prototype.getItem = function (a) {return a && -1 == a.indexOf(this.prefix) && (a = this.prefix + a), a ? this.oPersist.getAttribute(a) : a;}, a.prototype.removeItem = function (a) {a && -1 == a.indexOf(this.prefix) && (a = this.prefix + a), this.oPersist.removeAttribute(a), this.oPersist.save(this.opersistName);for (var b = this.getItem(this.keyManager), c = b && b.split(",") || [], d = 0, e = c.length; d < e; d++) {c[d] == a && c.splice(d, 1);}this.oPersist.setAttribute(this.prefix + this.keyManager, c.join(",")), this.oPersist.save(this.opersistName);}, a.prototype.getItemKey = function (a) {var b = null,c = this.getItem(this.keyManager),d = c && c.split(",") || [],e = this.prefix + a;if (d.length) for (var f = 0, g = d.length; f < g; f++) {if (d[f] && 0 == d[f].indexOf(e)) {b = d[f];break;}}return b;}, a.prototype.getItemKeyList = function (a) {var b = [],c = this.getItem(this.keyManager),d = c && c.split(",") || [],e = this.prefix,f = e + a;if (d.length) for (var g = 0, h = d.length; g < h; g++) {if (d[g] && 0 == d[g].indexOf(f)) {var i = d[g];i = i.substring(e.length), b.push(d[g]);}}return b;}, a.prototype.clearItem = function () {var a = this.getItem(this.keyManager),b = [],c = this;if (a && (b = a.split(",")), b.length) {for (var d = 0, e = b.length; d < e; d++) {b[d] && c.removeItem(b[d]);}c.removeItem(c.keyManager);}}, a.prototype.onOutOfQuota = function () {return 10485760;}, a;}();a.UserDataProvider = b;}(RongIMLib || (RongIMLib = {}));var RongIMLib;!function (a) {var b = function () {function b(b) {if (this.script = document.createElement("script"), this.head = document.getElementsByTagName("head")[0], "WebSocket" in window && "ArrayBuffer" in window && 3 === WebSocket.prototype.CLOSED && !a.RongIMClient._memoryStore.depend.isPolling) {if (a.Transportations._TransportType = a.Socket.WEBSOCKET, !a.RongIMClient.Protobuf) {var c = a.RongIMClient._memoryStore.depend.protobuf,d = this.script;d.src = c, this.head.appendChild(d), d.onload = d.onreadystatechange = function () {if (!(this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (d.onload = d.onreadystatechange = null, b && b(), b))) {var c = a.RongIMClient._memoryStore.token,e = a.RongIMClient._memoryStore.callback;c && a.RongIMClient.connect(c, e);}};}} else a.Transportations._TransportType = "xhr-polling", a.RongIMClient.Protobuf = Polling;}return b;}();a.FeatureDectector = b;}(RongIMLib || (RongIMLib = {}));var RongIMLib;!function (RongIMLib) {var FeaturePatcher = function () {function FeaturePatcher() {}return FeaturePatcher.prototype.patchAll = function () {this.patchJSON(), this.patchForEach();}, FeaturePatcher.prototype.patchForEach = function () {Array.forEach || (Array.forEach = function (a, b) {for (var c = 0; c < a.length; c++) {b.call(a, a[c], c, a);}});}, FeaturePatcher.prototype.patchJSON = function () {window.JSON || (window.JSON = function () {function JSON() {}return JSON.parse = function (sJSON) {return eval("(" + sJSON + ")");}, JSON.stringify = function (a) {return this.str("", { "": a });}, JSON.str = function (a, b) {var c,d,e,f,g,h = b[a],i = this;switch (h && "object" == typeof h && "function" == typeof h.toJSON && (h = h.toJSON(a)), typeof h) {case "string":return i.quote(h);case "number":return isFinite(h) ? String(h) : "null";case "boolean":case "null":return String(h);case "object":if (!h) return "null";if (g = [], "[object Array]" === Object.prototype.toString.apply(h)) {for (f = h.length, c = 0; c < f; c += 1) {g[c] = i.str(c, h) || "null";}return e = 0 === g.length ? "[]" : "[" + g.join(",") + "]";}for (d in h) {Object.prototype.hasOwnProperty.call(h, d) && (e = i.str(d, h)) && g.push(i.quote(d) + ":" + e);}return e = 0 === g.length ? "{}" : "{" + g.join(",") + "}";}}, JSON.quote = function (a) {var b = this;return b.rx_escapable.lastIndex = 0, b.rx_escapable.test(a) ? '"' + a.replace(b.rx_escapable, function (a) {var c = b.meta[a];return "string" == typeof c ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);}) + '"' : '"' + a + '"';}, JSON.rx_escapable = new RegExp("[\\\"\\\\\"\0-\x1F\x7F-\xC2\u0178\xC2\xAD\xD8\u20AC-\xD8\u201E\xDC\x8F\xE1\u017E\xB4\xE1\u017E\xB5\xE2\u20AC\u0152-\xE2\u20AC\x8F\u2028-\xE2\u20AC\xAF\xE2\x81 -\xE2\x81\xAF\uFEFF\xEF\xBF\xB0-\xEF\xBF\xBF]", "g"), JSON.meta = { "\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "''": "\\''", "\\": "\\\\" }, JSON;}());}, FeaturePatcher;}();RongIMLib.FeaturePatcher = FeaturePatcher;}(RongIMLib || (RongIMLib = {}));var RongIMLib;!function (a) {!function () {function a() {}a.prototype.load = function (a, b, c) {var d = document.createElement("script");d.async = !0, b && (d.addEventListener ? d.addEventListener("load", function (a) {var c = a.target || a.srcElement;b(c.src);}, !1) : d.readyState && (d.onreadystatechange = function (a) {var c = a.srcElement;b(c.src);})), c && (d.onerror = function (a) {var b = a.target || a.srcElement;c(b.src);}), (document.head || document.getElementsByTagName("head")[0]).appendChild(d), d.src = a;};}();}(RongIMLib || (RongIMLib = {}));var RongIMLib;return function (a) {var b = function () {function a() {this.publicServiceList = [];}return a.prototype.get = function (a, b) {for (var c = 0, d = this.publicServiceList.length; c < d; c++) {if (this.publicServiceList[c].conversationType == a && b == this.publicServiceList[c].publicServiceId) return this.publicServiceList[c];}}, a.prototype.add = function (a) {for (var b = !0, c = this, d = 0, e = this.publicServiceList.length; d < e; d++) {if (c.publicServiceList[d].conversationType == a.conversationType && a.publicServiceId == c.publicServiceList[d].publicServiceId) {this.publicServiceList.unshift(this.publicServiceList.splice(d, 1)[0]), b = !1;break;}}b && this.publicServiceList.unshift(a);}, a.prototype.replace = function (a) {for (var b = this, c = 0, d = this.publicServiceList.length; c < d; c++) {if (b.publicServiceList[c].conversationType == a.conversationType && a.publicServiceId == b.publicServiceList[c].publicServiceId) {b.publicServiceList.splice(c, 1, a);break;}}}, a.prototype.remove = function (a, b) {for (var c = this, d = 0, e = this.publicServiceList.length; d < e; d++) {if (c.publicServiceList[d].conversationType == a && b == c.publicServiceList[d].publicServiceId) {this.publicServiceList.splice(d, 1);break;}}}, a;}();a.PublicServiceMap = b;var c = function () {function a() {this.conversationList = [];}return a.prototype.get = function (a, b) {for (var c = 0, d = this.conversationList.length; c < d; c++) {if (this.conversationList[c].conversationType == a && this.conversationList[c].targetId == b) return this.conversationList[c];}return null;}, a.prototype.add = function (a) {for (var b = !0, c = 0, d = this.conversationList.length; c < d; c++) {if (this.conversationList[c].conversationType === a.conversationType && this.conversationList[c].targetId === a.targetId) {this.conversationList.unshift(this.conversationList.splice(c, 1)[0]), b = !1;break;}}b && this.conversationList.unshift(a);}, a.prototype.replace = function (a) {for (var b = 0, c = this.conversationList.length; b < c; b++) {if (this.conversationList[b].conversationType === a.conversationType && this.conversationList[b].targetId === a.targetId) {this.conversationList.splice(b, 1, a);break;}}}, a.prototype.remove = function (a) {for (var b = 0, c = this.conversationList.length; b < c; b++) {if (this.conversationList[b].conversationType === a.conversationType && this.conversationList[b].targetId === a.targetId) {this.conversationList.splice(b, 1);break;}}}, a;}();a.ConversationMap = c;var d = function () {function b() {}return b.getInstance = function () {return b._instance || (b._instance = new b()), b._instance;}, b.prototype.logger = function (b, c, d) {a.RongIMClient.logger({ code: b, funcName: c, msg: d });}, b.prototype.check = function (b, c, d, e) {if (a.RongIMClient._dataAccessProvider || d) {for (var f = 0, g = e.length; f < g; f++) {if (!new RegExp(this.getType(e[f])).test(b[f])) {var h = "ç¬¬" + (f + 1) + "ä¸ªå‚æ•°é”™è¯¯, é”™è¯¯ç±»åž‹ï¼š" + this.getType(e[f]) + " [" + b[f] + "] -> ä½ç½®:" + c;this.logger("-3", c, h);}}} else {var h = "è¯¥å‚æ•°ä¸æ­£ç¡®æˆ–å°šæœªå®žä¾‹åŒ–RongIMClient -> ä½ç½®:" + c;this.logger("-4", c, h);}}, b.prototype.getType = function (a) {var b = Object.prototype.toString.call(a).toLowerCase();return b.slice(8, b.length - 1);}, b.prototype.checkCookieDisable = function () {document.cookie = "checkCookie=1";var a = document.cookie.match(new RegExp("(^| )checkCookie=([^;]*)(;|$)")),b = !1;return a || (b = !0), document.cookie = "checkCookie=1;expires=Thu, 01-Jan-1970 00:00:01 GMT", b;}, b;}();a.CheckParam = d;var e = function () {function a(a) {this.map = {}, this.keys = [], this.limit = a || 10;}return a.prototype.set = function (a, b) {this.map[a] = b;}, a.prototype.get = function (a) {return this.map[a] || 0;}, a.prototype.remove = function (a) {delete this.map[a];}, a;}();a.LimitableMap = e;var f = function () {function a() {this.cache = {};}return a.prototype.set = function (a, b) {this.cache[a] = b;}, a.prototype.get = function (a) {return this.cache[a];}, a.prototype.remove = function (a) {delete this.cache[a];}, a;}();a.MemoryCache = f;var g = function () {function a(a) {var b = this;b.xmlhttp = null, b.options = a;var c = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest();"undefined" != typeof XMLHttpRequest && c ? b.xmlhttp = new XMLHttpRequest() : "undefined" != typeof XDomainRequest ? b.xmlhttp = new XDomainRequest() : b.xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");}return a.prototype.send = function (a) {var b = this;b.options.url || (b.options.url = "http://upload.qiniu.com/putb64/-1"), b.xmlhttp.onreadystatechange = function () {4 == b.xmlhttp.readyState && (b.options.type ? a() : a(JSON.parse(b.xmlhttp.responseText.replace(/'/g, '"'))));}, b.xmlhttp.open("POST", b.options.url, !0), b.xmlhttp.withCredentials = !1, "setRequestHeader" in b.xmlhttp && (b.options.type ? b.xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=utf-8") : (b.xmlhttp.setRequestHeader("Content-type", "application/octet-stream"), b.xmlhttp.setRequestHeader("Authorization", "UpToken " + b.options.token))), b.xmlhttp.send(b.options.type ? "appKey=" + b.options.appKey + "&deviceId=" + b.options.deviceId + "&timestamp=" + b.options.timestamp + "&deviceInfo=" + b.options.deviceInfo + "&privateInfo=" + JSON.stringify(b.options.privateInfo) : b.options.base64);}, a;}();a.RongAjax = g;var h = function () {function a() {}return a.noop = function () {}, a.isEmpty = function (a) {var b = !0;for (var c in a) {b = !1;break;}return b;}, a.MD5 = function (a, b, c) {return md5(a, b, c);}, a.isObject = function (a) {return "[object Object]" == Object.prototype.toString.call(a);}, a.isArray = function (a) {return "[object Array]" == Object.prototype.toString.call(a);}, a.isString = function (a) {return "[object String]" == Object.prototype.toString.call(a);}, a.isFunction = function (a) {return "[object Function]" == Object.prototype.toString.call(a);}, a.isUndefined = function (a) {return "[object Undefined]" == Object.prototype.toString.call(a);}, a.isEqual = function (a, b) {return a === b;}, a.indexOf = function (a, b) {for (var c = -1, d = 0; d < a.length; d++) {if (b === a[d]) {c = d;break;}}return c;}, a.stringFormat = function (a, b) {for (var c = 0, d = b.length; c < d; c++) {var e = b[c],f = new RegExp("\\{" + c + "\\}", "g");a = a.replace(f, e);}return a;}, a.tplEngine = function (a, b, c) {function d(b) {return a.replace(c || /{([^}]+)}/g, function (a, c) {return "\\" == a.charAt(0) ? a.slice(1) : void 0 != b[c] ? b[c] : "{" + c + "}";});}"[object Array]" !== Object.prototype.toString.call(b) && (b = [b]);for (var e = [], f = 0, g = b.length; f < g; f++) {e.push(d(b[f]));}return e.join("");}, a.forEach = function (b, c) {c = c || a.noop;var d = function d() {for (var a in b) {b.hasOwnProperty(a) && c(b[a], a, b);}},e = function e() {for (var a = 0, d = b.length; a < d; a++) {c(b[a], a);}};a.isObject(b) && d(), a.isArray(b) && e();}, a.extend = function (b, c, d, e) {return a.forEach(b, function (a, b) {var d = b in c;e && d && (c[b] = a), d || (c[b] = a);}), c;}, a.createXHR = function () {var a = { XMLHttpRequest: function (_XMLHttpRequest) {function XMLHttpRequest() {return _XMLHttpRequest.apply(this, arguments);}XMLHttpRequest.toString = function () {return _XMLHttpRequest.toString();};return XMLHttpRequest;}(function () {return new XMLHttpRequest();}), XDomainRequest: function (_XDomainRequest) {function XDomainRequest() {return _XDomainRequest.apply(this, arguments);}XDomainRequest.toString = function () {return _XDomainRequest.toString();};return XDomainRequest;}(function () {return new XDomainRequest();}), ActiveXObject: function (_ActiveXObject) {function ActiveXObject() {return _ActiveXObject.apply(this, arguments);}ActiveXObject.toString = function () {return _ActiveXObject.toString();};return ActiveXObject;}(function () {return new ActiveXObject("Microsoft.XMLHTTP");}) },b = "function" == typeof XMLHttpRequest,c = "function" == typeof XDomainRequest;return a[b ? "XMLHttpRequest" : c ? "XDomainRequest" : "ActiveXObject"]();}, a.request = function (b) {var c = b.url,d = b.success,e = b.error,f = b.method || "GET",g = a.createXHR();return g.onreadystatechange = function () {
          if (4 == g.readyState) {var a = g.status;200 == a ? d(g.responseText) : e(a, g.responseText);}}, g.open(f, c, !0), g.send(null), g;}, a.formatProtoclPath = function (b) {var c = b.path,d = b.protocol,e = b.tmpl || "{0}{1}",f = b.sub,g = "://",h = c.indexOf(g);(h > -1 && (h += g.length, c = c.substring(h)), f) && (h = c.indexOf("/")) > -1 && (c = c.substr(0, h));return a.stringFormat(e, [d, c]);}, a.supportLocalStorage = function () {var a = !1;if ("object" == typeof localStorage) try {var b = "RC_TMP_KEY",c = "RC_TMP_VAL";localStorage.setItem(b, c);localStorage.getItem(b) == c && (a = !0);} catch (d) {console.log("localStorage is disabled.");}return a;}, a.rename = function (b, c) {var d = a.isObject(b);d && (b = [b]), b = JSON.parse(JSON.stringify(b));var e = function e(a, b, d) {delete d[b], b = c[b], d[b] = a;};return a.forEach(b, function (b) {a.forEach(b, function (b, d, f) {(d in c ? e : a.noop)(b, d, f);});}), d ? b[0] : b;}, a.some = function (a, b) {for (var c = !1, d = 0, e = a.length; d < e; d++) {if (b(a[d])) {c = !0;break;}}return c;}, a.keys = function (a) {var b = [];for (var c in a) {b.push(c);}return b;}, a.isNumber = function (a) {return "[object Number]" == Object.prototype.toString.call(a);}, a.getTimestamp = function () {return new Date().getTime();}, a;}();a.RongUtil = h;var i = function () {function a() {this.watchers = {};}return a.prototype.genUId = function (a) {return [a, new Date().getTime()].join("_");}, a.prototype.watch = function (a) {var b = this,c = a.key,d = a.multiple;c = h.isArray(c) ? c : [c];var e = a.func;h.forEach(c, function (a) {a = d ? b.genUId(a) : a, b.watchers[a] = e;});}, a.prototype.notify = function (a) {var b = this,c = a.key,d = a.entity;for (var e in b.watchers) {0 == e.indexOf(c) && b.watchers[e](d);}}, a.prototype.remove = function () {}, a;}();a.RongObserver = i;var j = function () {function a(a) {this.timeout = 0, this.timers = [], this.timeout = a.timeout;}return a.prototype.resume = function (a) {var b = setTimeout(a, this.timeout);this.timers.push(b);}, a.prototype.pause = function () {h.forEach(this.timers, function (a) {clearTimeout(a);});}, a;}();a.Timer = j;var k = function () {function a(a) {this.items = [], this.index = 0, this.onwheel = function () {}, this.items = a.items, this.onwheel = a.onwheel;}return a.prototype.get = function () {var a = this,b = a.items,c = a.index,d = c >= b.length;return d && a.onwheel(), d ? 0 : c;}, a.prototype.add = function () {this.index += 1;}, a;}();a.IndexTools = k;var l = function () {function a() {}return a.getUId = function (a) {return md5(a).slice(8, 16);}, a;}();a.InnerUtil = l;}(RongIMLib || (RongIMLib = {})), RongIMLib;});

/***/ }),

/***/ 23:
/*!***********************************************!*\
  !*** F:/kxsz/rongyunIM/protobuf-2.3.5.min.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (c, d) {if (true) {!(__WEBPACK_AMD_DEFINE_FACTORY__ = (d),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));} else {}})(void 0, function (a) {var d = function () {function E(an, ap, ao) {this.low = an | 0;this.high = ap | 0;this.unsigned = !!ao;}E.prototype.__isLong__;Object.defineProperty(E.prototype, "__isLong__", { value: true, enumerable: false, configurable: false });function k(an) {return (an && an.__isLong__) === true;}E.isLong = k;var aa = {};var M = {};function ah(ap, ao) {var aq, ar, an;if (ao) {ap >>>= 0;if (an = 0 <= ap && ap < 256) {ar = M[ap];if (ar) {return ar;}}aq = S(ap, (ap | 0) < 0 ? -1 : 0, true);if (an) {M[ap] = aq;}return aq;} else {ap |= 0;if (an = -128 <= ap && ap < 128) {ar = aa[ap];if (ar) {return ar;}}aq = S(ap, ap < 0 ? -1 : 0, false);if (an) {aa[ap] = aq;}return aq;}}E.fromInt = ah;function q(ao, an) {if (isNaN(ao) || !isFinite(ao)) {return an ? m : F;}if (an) {if (ao < 0) {return m;}if (ao >= h) {return D;}} else {if (ao <= -C) {return T;}if (ao + 1 >= C) {return b;}}if (ao < 0) {return q(-ao, an).neg();}return S(ao % i | 0, ao / i | 0, an);}E.fromNumber = q;function S(an, ap, ao) {return new E(an, ap, ao);}E.fromBits = S;var B = Math.pow;function L(ar, ap, at) {if (ar.length === 0) {throw Error("empty string");}if (ar === "NaN" || ar === "Infinity" || ar === "+Infinity" || ar === "-Infinity") {return F;}if (typeof ap === "number") {at = ap, ap = false;} else {ap = !!ap;}at = at || 10;if (at < 2 || 36 < at) {throw RangeError("radix");}var ao;if ((ao = ar.indexOf("-")) > 0) {throw Error("interior hyphen");} else {if (ao === 0) {return L(ar.substring(1), ap, at).neg();}}var av = q(B(at, 8));var ax = F;for (var aq = 0; aq < ar.length; aq += 8) {var aw = Math.min(8, ar.length - aq),au = parseInt(ar.substring(aq, aq + aw), at);if (aw < 8) {var an = q(B(at, aw));ax = ax.mul(an).add(q(au));} else {ax = ax.mul(av);ax = ax.add(q(au));}}ax.unsigned = ap;return ax;}E.fromString = L;function K(an) {if (an instanceof E) {return an;}if (typeof an === "number") {return q(an);}if (typeof an === "string") {return L(an);}return S(an.low, an.high, an.unsigned);}E.fromValue = K;var ai = 1 << 16;var al = 1 << 24;var i = ai * ai;var h = i * i;var C = h / 2;var u = ah(al);var F = ah(0);E.ZERO = F;var m = ah(0, true);E.UZERO = m;var W = ah(1);E.ONE = W;var O = ah(1, true);E.UONE = O;var f = ah(-1);E.NEG_ONE = f;var b = S(4294967295 | 0, 2147483647 | 0, false);E.MAX_VALUE = b;var D = S(4294967295 | 0, 4294967295 | 0, true);E.MAX_UNSIGNED_VALUE = D;var T = S(0, 2147483648 | 0, false);E.MIN_VALUE = T;var z = E.prototype;z.toInt = function v() {return this.unsigned ? this.low >>> 0 : this.low;};z.toNumber = function ae() {if (this.unsigned) {return (this.high >>> 0) * i + (this.low >>> 0);}return this.high * i + (this.low >>> 0);};z.toString = function n(at) {at = at || 10;if (at < 2 || 36 < at) {throw RangeError("radix");}if (this.isZero()) {return "0";}if (this.isNegative()) {if (this.eq(T)) {var aq = q(at),an = this.div(aq),ap = an.mul(aq).sub(this);return an.toString(at) + ap.toInt().toString(at);} else {return "-" + this.neg().toString(at);}}var aw = q(B(at, 6), this.unsigned),av = this;var ax = "";while (true) {var au = av.div(aw),ar = av.sub(au.mul(aw)).toInt() >>> 0,ao = ar.toString(at);av = au;if (av.isZero()) {return ao + ax;} else {while (ao.length < 6) {ao = "0" + ao;}ax = "" + ao + ax;}}};z.getHighBits = function af() {return this.high;};z.getHighBitsUnsigned = function p() {return this.high >>> 0;};z.getLowBits = function y() {return this.low;};z.getLowBitsUnsigned = function U() {return this.low >>> 0;};z.getNumBitsAbs = function aj() {if (this.isNegative()) {return this.eq(T) ? 64 : this.neg().getNumBitsAbs();}var ao = this.high != 0 ? this.high : this.low;for (var an = 31; an > 0; an--) {if ((ao & 1 << an) != 0) {break;}}return this.high != 0 ? an + 33 : an + 1;};z.isZero = function R() {return this.high === 0 && this.low === 0;};z.isNegative = function X() {return !this.unsigned && this.high < 0;};z.isPositive = function ad() {return this.unsigned || this.high >= 0;};z.isOdd = function V() {return (this.low & 1) === 1;};z.isEven = function x() {return (this.low & 1) === 0;};z.equals = function N(an) {if (!k(an)) {an = K(an);}if (this.unsigned !== an.unsigned && this.high >>> 31 === 1 && an.high >>> 31 === 1) {return false;}return this.high === an.high && this.low === an.low;};z.eq = z.equals;z.notEquals = function ag(an) {return !this.eq(an);};z.neq = z.notEquals;z.lessThan = function t(an) {return this.comp(an) < 0;};z.lt = z.lessThan;z.lessThanOrEqual = function Z(an) {return this.comp(an) <= 0;};z.lte = z.lessThanOrEqual;z.greaterThan = function o(an) {return this.comp(an) > 0;};z.gt = z.greaterThan;z.greaterThanOrEqual = function Q(an) {return this.comp(an) >= 0;};z.gte = z.greaterThanOrEqual;z.compare = function s(ao) {if (!k(ao)) {ao = K(ao);}if (this.eq(ao)) {return 0;}var an = this.isNegative(),ap = ao.isNegative();if (an && !ap) {return -1;}if (!an && ap) {return 1;}if (!this.unsigned) {return this.sub(ao).isNegative() ? -1 : 1;}return ao.high >>> 0 > this.high >>> 0 || ao.high === this.high && ao.low >>> 0 > this.low >>> 0 ? -1 : 1;};z.comp = z.compare;z.negate = function w() {if (!this.unsigned && this.eq(T)) {return T;}return this.not().add(W);};z.neg = z.negate;z.add = function j(aq) {if (!k(aq)) {aq = K(aq);}var au = this.high >>> 16;var ao = this.high & 65535;var aw = this.low >>> 16;var ap = this.low & 65535;var ay = aq.high >>> 16;var ar = aq.high & 65535;var az = aq.low >>> 16;var at = aq.low & 65535;var aA = 0,av = 0,an = 0,ax = 0;ax += ap + at;an += ax >>> 16;ax &= 65535;an += aw + az;av += an >>> 16;an &= 65535;av += ao + ar;aA += av >>> 16;av &= 65535;aA += au + ay;aA &= 65535;return S(an << 16 | ax, aA << 16 | av, this.unsigned);};z.subtract = function r(an) {if (!k(an)) {an = K(an);}return this.add(an.neg());};z.sub = z.subtract;z.multiply = function I(az) {if (this.isZero()) {return F;}if (!k(az)) {az = K(az);}if (az.isZero()) {return F;}if (this.eq(T)) {return az.isOdd() ? T : F;}if (az.eq(T)) {return this.isOdd() ? T : F;}if (this.isNegative()) {if (az.isNegative()) {return this.neg().mul(az.neg());} else {return this.neg().mul(az).neg();}} else {if (az.isNegative()) {return this.mul(az.neg()).neg();}}if (this.lt(u) && az.lt(u)) {return q(this.toNumber() * az.toNumber(), this.unsigned);}var at = this.high >>> 16;var ao = this.high & 65535;var av = this.low >>> 16;var ap = this.low & 65535;var ax = az.high >>> 16;var aq = az.high & 65535;var ay = az.low >>> 16;var ar = az.low & 65535;var aA = 0,au = 0,an = 0,aw = 0;aw += ap * ar;an += aw >>> 16;aw &= 65535;an += av * ar;au += an >>> 16;an &= 65535;an += ap * ay;au += an >>> 16;an &= 65535;au += ao * ar;aA += au >>> 16;au &= 65535;au += av * ay;aA += au >>> 16;au &= 65535;au += ap * aq;aA += au >>> 16;au &= 65535;aA += at * ar + ao * ay + av * aq + ap * ax;aA &= 65535;return S(an << 16 | aw, aA << 16 | au, this.unsigned);};z.mul = z.multiply;z.divide = function J(an) {if (!k(an)) {an = K(an);}if (an.isZero()) {throw Error("division by zero");}if (this.isZero()) {return this.unsigned ? m : F;}var at, av, aq;if (!this.unsigned) {if (this.eq(T)) {if (an.eq(W) || an.eq(f)) {return T;} else {if (an.eq(T)) {return W;} else {var ao = this.shr(1);at = ao.div(an).shl(1);if (at.eq(F)) {return an.isNegative() ? W : f;} else {av = this.sub(an.mul(at));aq = at.add(av.div(an));return aq;}}}} else {if (an.eq(T)) {return this.unsigned ? m : F;}}if (this.isNegative()) {if (an.isNegative()) {return this.neg().div(an.neg());}return this.neg().div(an).neg();} else {if (an.isNegative()) {return this.div(an.neg()).neg();}}aq = F;} else {if (!an.unsigned) {an = an.toUnsigned();}if (an.gt(this)) {return m;}if (an.gt(this.shru(1))) {return O;}aq = m;}av = this;while (av.gte(an)) {at = Math.max(1, Math.floor(av.toNumber() / an.toNumber()));var aw = Math.ceil(Math.log(at) / Math.LN2),au = aw <= 48 ? 1 : B(2, aw - 48),ap = q(at),ar = ap.mul(an);while (ar.isNegative() || ar.gt(av)) {at -= au;ap = q(at, this.unsigned);ar = ap.mul(an);}if (ap.isZero()) {ap = W;}aq = aq.add(ap);av = av.sub(ar);}return aq;};z.div = z.divide;z.modulo = function ak(an) {if (!k(an)) {an = K(an);}return this.sub(this.div(an).mul(an));};z.mod = z.modulo;z.not = function ac() {return S(~this.low, ~this.high, this.unsigned);};z.and = function ab(an) {if (!k(an)) {an = K(an);}return S(this.low & an.low, this.high & an.high, this.unsigned);};z.or = function P(an) {if (!k(an)) {an = K(an);}return S(this.low | an.low, this.high | an.high, this.unsigned);};z.xor = function Y(an) {if (!k(an)) {an = K(an);}return S(this.low ^ an.low, this.high ^ an.high, this.unsigned);};z.shiftLeft = function A(an) {if (k(an)) {an = an.toInt();}if ((an &= 63) === 0) {return this;} else {if (an < 32) {return S(this.low << an, this.high << an | this.low >>> 32 - an, this.unsigned);} else {return S(0, this.low << an - 32, this.unsigned);}}};z.shl = z.shiftLeft;z.shiftRight = function l(an) {if (k(an)) {an = an.toInt();}if ((an &= 63) === 0) {return this;} else {if (an < 32) {return S(this.low >>> an | this.high << 32 - an, this.high >> an, this.unsigned);} else {return S(this.high >> an - 32, this.high >= 0 ? 0 : -1, this.unsigned);}}};z.shr = z.shiftRight;z.shiftRightUnsigned = function G(ap) {if (k(ap)) {ap = ap.toInt();}ap &= 63;if (ap === 0) {return this;} else {var ao = this.high;if (ap < 32) {var an = this.low;return S(an >>> ap | ao << 32 - ap, ao >>> ap, this.unsigned);} else {if (ap === 32) {return S(ao, 0, this.unsigned);} else {return S(ao >>> ap - 32, 0, this.unsigned);}}}};z.shru = z.shiftRightUnsigned;z.toSigned = function am() {if (!this.unsigned) {return this;}return S(this.low, this.high, false);};z.toUnsigned = function H() {if (this.unsigned) {return this;}return S(this.low, this.high, true);};z.toBytes = function (an) {return an ? this.toBytesLE() : this.toBytesBE();};z.toBytesLE = function () {var an = this.high,ao = this.low;return [ao & 255, ao >>> 8 & 255, ao >>> 16 & 255, ao >>> 24 & 255, an & 255, an >>> 8 & 255, an >>> 16 & 255, an >>> 24 & 255];};z.toBytesBE = function () {var an = this.high,ao = this.low;return [an >>> 24 & 255, an >>> 16 & 255, an >>> 8 & 255, an & 255, ao >>> 24 & 255, ao >>> 16 & 255, ao >>> 8 & 255, ao & 255];};return E;}();var c = function (k) {var n = function n(q, s, r) {if (typeof q === "undefined") {q = n.DEFAULT_CAPACITY;}if (typeof s === "undefined") {s = n.DEFAULT_ENDIAN;}if (typeof r === "undefined") {r = n.DEFAULT_NOASSERT;}if (!r) {q = q | 0;if (q < 0) {throw RangeError("Illegal capacity");}s = !!s;r = !!r;}this.buffer = q === 0 ? p : new ArrayBuffer(q);this.view = q === 0 ? null : new Uint8Array(this.buffer);this.offset = 0;this.markedOffset = -1;this.limit = q;this.littleEndian = s;this.noAssert = r;};n.VERSION = "5.0.1";n.LITTLE_ENDIAN = true;n.BIG_ENDIAN = false;n.DEFAULT_CAPACITY = 16;n.DEFAULT_ENDIAN = n.BIG_ENDIAN;n.DEFAULT_NOASSERT = false;n.Long = k || null;var l = n.prototype;l.__isByteBuffer__;Object.defineProperty(l, "__isByteBuffer__", { value: true, enumerable: false, configurable: false });var p = new ArrayBuffer(0);var m = String.fromCharCode;function b(r) {var q = 0;return function () {return q < r.length ? r.charCodeAt(q++) : null;};}function f() {var q = [],r = [];return function () {if (arguments.length === 0) {return r.join("") + m.apply(String, q);}if (q.length + arguments.length > 1024) {r.push(m.apply(String, q)), q.length = 0;}Array.prototype.push.apply(q, arguments);};}n.accessor = function () {return Uint8Array;};n.allocate = function (q, s, r) {return new n(q, s, r);};n.concat = function (z, s, r, y) {if (typeof s === "boolean" || typeof s !== "string") {y = r;r = s;s = undefined;}var q = 0;for (var w = 0, v = z.length, t; w < v; ++w) {if (!n.isByteBuffer(z[w])) {z[w] = n.wrap(z[w], s);}t = z[w].limit - z[w].offset;if (t > 0) {q += t;}}if (q === 0) {return new n(0, r, y);}var x = new n(q, r, y),u;w = 0;while (w < v) {u = z[w++];t = u.limit - u.offset;if (t <= 0) {continue;}x.view.set(u.view.subarray(u.offset, u.limit), x.offset);x.offset += t;}x.limit = x.offset;x.offset = 0;return x;};n.isByteBuffer = function (q) {return (q && q.__isByteBuffer__) === true;};n.type = function () {return ArrayBuffer;};n.wrap = function (q, s, u, t) {if (typeof s !== "string") {t = u;u = s;s = undefined;}if (typeof q === "string") {if (typeof s === "undefined") {s = "utf8";}switch (s) {case "base64":return n.fromBase64(q, u);case "hex":return n.fromHex(q, u);case "binary":return n.fromBinary(q, u);case "utf8":return n.fromUTF8(q, u);case "debug":return n.fromDebug(q, u);default:throw Error("Unsupported encoding: " + s);}}if (q === null || typeof q !== "object") {throw TypeError("Illegal buffer");}var v;if (n.isByteBuffer(q)) {v = l.clone.call(q);v.markedOffset = -1;return v;}if (q instanceof Uint8Array) {v = new n(0, u, t);if (q.length > 0) {v.buffer = q.buffer;v.offset = q.byteOffset;v.limit = q.byteOffset + q.byteLength;v.view = new Uint8Array(q.buffer);}} else {if (q instanceof ArrayBuffer) {v = new n(0, u, t);if (q.byteLength > 0) {v.buffer = q;v.offset = 0;v.limit = q.byteLength;v.view = q.byteLength > 0 ? new Uint8Array(q) : null;}} else {if (Object.prototype.toString.call(q) === "[object Array]") {v = new n(q.length, u, t);v.limit = q.length;for (var r = 0; r < q.length; ++r) {v.view[r] = q[r];}} else {throw TypeError("Illegal buffer");}}}return v;};l.writeBitSet = function (w, u) {var q = typeof u === "undefined";if (q) {u = this.offset;}if (!this.noAssert) {if (!(w instanceof Array)) {throw TypeError("Illegal BitSet: Not an array");}if (typeof u !== "number" || u % 1 !== 0) {throw TypeError("Illegal offset: " + u + " (not an integer)");}u >>>= 0;if (u < 0 || u + 0 > this.buffer.byteLength) {throw RangeError("Illegal offset: 0 <= " + u + " (+" + 0 + ") <= " + this.buffer.byteLength);}}var r = u,x = w.length,y = x >> 3,v = 0,t;u += this.writeVarint32(x, u);while (y--) {t = !!w[v++] & 1 | (!!w[v++] & 1) << 1 | (!!w[v++] & 1) << 2 | (!!w[v++] & 1) << 3 | (!!w[v++] & 1) << 4 | (!!w[v++] & 1) << 5 | (!!w[v++] & 1) << 6 | (!!w[v++] & 1) << 7;this.writeByte(t, u++);}if (v < x) {var s = 0;t = 0;while (v < x) {t = t | (!!w[v++] & 1) << s++;}this.writeByte(t, u++);}if (q) {this.offset = u;return this;}return u - r;};l.readBitSet = function (t) {var q = typeof t === "undefined";if (q) {t = this.offset;}var u = this.readVarint32(t),x = u.value,y = x >> 3,v = 0,w = [],s;t += u.length;while (y--) {s = this.readByte(t++);w[v++] = !!(s & 1);w[v++] = !!(s & 2);w[v++] = !!(s & 4);w[v++] = !!(s & 8);w[v++] = !!(s & 16);w[v++] = !!(s & 32);w[v++] = !!(s & 64);w[v++] = !!(s & 128);}if (v < x) {var r = 0;s = this.readByte(t++);while (v < x) {w[v++] = !!(s >> r++ & 1);}}if (q) {this.offset = t;}return w;};l.readBytes = function (q, t) {var r = typeof t === "undefined";if (r) {t = this.offset;}if (!this.noAssert) {if (typeof t !== "number" || t % 1 !== 0) {throw TypeError("Illegal offset: " + t + " (not an integer)");}t >>>= 0;if (t < 0 || t + q > this.buffer.byteLength) {throw RangeError("Illegal offset: 0 <= " + t + " (+" + q + ") <= " + this.buffer.byteLength);}}var s = this.slice(t, t + q);if (r) {this.offset += q;}return s;};l.writeBytes = l.append;l.writeInt8 = function (s, t) {var r = typeof t === "undefined";if (r) {t = this.offset;}if (!this.noAssert) {if (typeof s !== "number" || s % 1 !== 0) {throw TypeError("Illegal value: " + s + " (not an integer)");}s |= 0;if (typeof t !== "number" || t % 1 !== 0) {throw TypeError("Illegal offset: " + t + " (not an integer)");}t >>>= 0;if (t < 0 || t + 0 > this.buffer.byteLength) {throw RangeError("Illegal offset: 0 <= " + t + " (+" + 0 + ") <= " + this.buffer.byteLength);}}t += 1;var q = this.buffer.byteLength;if (t > q) {this.resize((q *= 2) > t ? q : t);}t -= 1;this.view[t] = s;if (r) {this.offset += 1;}return this;};l.writeByte = l.writeInt8;l.readInt8 = function (s) {var r = typeof s === "undefined";if (r) {s = this.offset;}if (!this.noAssert) {if (typeof s !== "number" || s % 1 !== 0) {throw TypeError("Illegal offset: " + s + " (not an integer)");}s >>>= 0;if (s < 0 || s + 1 > this.buffer.byteLength) {throw RangeError("Illegal offset: 0 <= " + s + " (+" + 1 + ") <= " + this.buffer.byteLength);}}var q = this.view[s];if ((q & 128) === 128) {q = -(255 - q + 1);}if (r) {this.offset += 1;}return q;};l.readByte = l.readInt8;l.writeUint8 = function (s, t) {var r = typeof t === "undefined";if (r) {t = this.offset;}if (!this.noAssert) {if (typeof s !== "number" || s % 1 !== 0) {throw TypeError("Illegal value: " + s + " (not an integer)");}s >>>= 0;if (typeof t !== "number" || t % 1 !== 0) {throw TypeError("Illegal offset: " + t + " (not an integer)");}t >>>= 0;if (t < 0 || t + 0 > this.buffer.byteLength) {throw RangeError("Illegal offset: 0 <= " + t + " (+" + 0 + ") <= " + this.buffer.byteLength);}}t += 1;var q = this.buffer.byteLength;if (t > q) {this.resize((q *= 2) > t ? q : t);}t -= 1;this.view[t] = s;if (r) {this.offset += 1;}return this;};l.writeUInt8 = l.writeUint8;l.readUint8 = function (s) {var r = typeof s === "undefined";if (r) {s = this.offset;}if (!this.noAssert) {if (typeof s !== "number" || s % 1 !== 0) {throw TypeError("Illegal offset: " + s + " (not an integer)");}s >>>= 0;if (s < 0 || s + 1 > this.buffer.byteLength) {throw RangeError("Illegal offset: 0 <= " + s + " (+" + 1 + ") <= " + this.buffer.byteLength);}}var q = this.view[s];if (r) {this.offset += 1;}return q;};l.readUInt8 = l.readUint8;l.writeInt16 = function (s, t) {var r = typeof t === "undefined";if (r) {t = this.offset;}if (!this.noAssert) {if (typeof s !== "number" || s % 1 !== 0) {throw TypeError("Illegal value: " + s + " (not an integer)");}s |= 0;if (typeof t !== "number" || t % 1 !== 0) {throw TypeError("Illegal offset: " + t + " (not an integer)");}t >>>= 0;if (t < 0 || t + 0 > this.buffer.byteLength) {throw RangeError("Illegal offset: 0 <= " + t + " (+" + 0 + ") <= " + this.buffer.byteLength);}}t += 2;var q = this.buffer.byteLength;if (t > q) {this.resize((q *= 2) > t ? q : t);}t -= 2;if (this.littleEndian) {this.view[t + 1] = (s & 65280) >>> 8;this.view[t] = s & 255;} else {this.view[t] = (s & 65280) >>> 8;this.view[t + 1] = s & 255;}if (r) {this.offset += 2;}return this;};l.writeShort = l.writeInt16;l.readInt16 = function (s) {var r = typeof s === "undefined";if (r) {s = this.offset;}if (!this.noAssert) {if (typeof s !== "number" || s % 1 !== 0) {throw TypeError("Illegal offset: " + s + " (not an integer)");}s >>>= 0;if (s < 0 || s + 2 > this.buffer.byteLength) {throw RangeError("Illegal offset: 0 <= " + s + " (+" + 2 + ") <= " + this.buffer.byteLength);}}var q = 0;if (this.littleEndian) {q = this.view[s];q |= this.view[s + 1] << 8;} else {q = this.view[s] << 8;q |= this.view[s + 1];}if ((q & 32768) === 32768) {q = -(65535 - q + 1);}if (r) {this.offset += 2;}return q;};l.readShort = l.readInt16;l.writeUint16 = function (s, t) {var r = typeof t === "undefined";if (r) {t = this.offset;}if (!this.noAssert) {if (typeof s !== "number" || s % 1 !== 0) {throw TypeError("Illegal value: " + s + " (not an integer)");}s >>>= 0;if (typeof t !== "number" || t % 1 !== 0) {throw TypeError("Illegal offset: " + t + " (not an integer)");}t >>>= 0;if (t < 0 || t + 0 > this.buffer.byteLength) {throw RangeError("Illegal offset: 0 <= " + t + " (+" + 0 + ") <= " + this.buffer.byteLength);}}t += 2;var q = this.buffer.byteLength;if (t > q) {this.resize((q *= 2) > t ? q : t);}t -= 2;if (this.littleEndian) {this.view[t + 1] = (s & 65280) >>> 8;this.view[t] = s & 255;} else {this.view[t] = (s & 65280) >>> 8;this.view[t + 1] = s & 255;}if (r) {this.offset += 2;}return this;};l.writeUInt16 = l.writeUint16;l.readUint16 = function (s) {var r = typeof s === "undefined";if (r) {s = this.offset;}if (!this.noAssert) {if (typeof s !== "number" || s % 1 !== 0) {throw TypeError("Illegal offset: " + s + " (not an integer)");}s >>>= 0;if (s < 0 || s + 2 > this.buffer.byteLength) {throw RangeError("Illegal offset: 0 <= " + s + " (+" + 2 + ") <= " + this.buffer.byteLength);}}var q = 0;if (this.littleEndian) {q = this.view[s];q |= this.view[s + 1] << 8;} else {q = this.view[s] << 8;q |= this.view[s + 1];}if (r) {this.offset += 2;}return q;};l.readUInt16 = l.readUint16;l.writeInt32 = function (s, t) {var r = typeof t === "undefined";if (r) {t = this.offset;}if (!this.noAssert) {if (typeof s !== "number" || s % 1 !== 0) {throw TypeError("Illegal value: " + s + " (not an integer)");}s |= 0;if (typeof t !== "number" || t % 1 !== 0) {throw TypeError("Illegal offset: " + t + " (not an integer)");}t >>>= 0;if (t < 0 || t + 0 > this.buffer.byteLength) {throw RangeError("Illegal offset: 0 <= " + t + " (+" + 0 + ") <= " + this.buffer.byteLength);}}t += 4;var q = this.buffer.byteLength;if (t > q) {this.resize((q *= 2) > t ? q : t);}t -= 4;if (this.littleEndian) {this.view[t + 3] = s >>> 24 & 255;this.view[t + 2] = s >>> 16 & 255;this.view[t + 1] = s >>> 8 & 255;this.view[t] = s & 255;} else {this.view[t] = s >>> 24 & 255;this.view[t + 1] = s >>> 16 & 255;this.view[t + 2] = s >>> 8 & 255;this.view[t + 3] = s & 255;}if (r) {this.offset += 4;}return this;};l.writeInt = l.writeInt32;l.readInt32 = function (s) {var r = typeof s === "undefined";if (r) {s = this.offset;}if (!this.noAssert) {if (typeof s !== "number" || s % 1 !== 0) {throw TypeError("Illegal offset: " + s + " (not an integer)");}s >>>= 0;if (s < 0 || s + 4 > this.buffer.byteLength) {throw RangeError("Illegal offset: 0 <= " + s + " (+" + 4 + ") <= " + this.buffer.byteLength);}}var q = 0;if (this.littleEndian) {q = this.view[s + 2] << 16;q |= this.view[s + 1] << 8;q |= this.view[s];q += this.view[s + 3] << 24 >>> 0;} else {q = this.view[s + 1] << 16;q |= this.view[s + 2] << 8;q |= this.view[s + 3];q += this.view[s] << 24 >>> 0;}q |= 0;if (r) {this.offset += 4;}return q;};l.readInt = l.readInt32;l.writeUint32 = function (s, t) {var r = typeof t === "undefined";if (r) {t = this.offset;}if (!this.noAssert) {if (typeof s !== "number" || s % 1 !== 0) {throw TypeError("Illegal value: " + s + " (not an integer)");}s >>>= 0;if (typeof t !== "number" || t % 1 !== 0) {throw TypeError("Illegal offset: " + t + " (not an integer)");}t >>>= 0;if (t < 0 || t + 0 > this.buffer.byteLength) {throw RangeError("Illegal offset: 0 <= " + t + " (+" + 0 + ") <= " + this.buffer.byteLength);}}t += 4;var q = this.buffer.byteLength;if (t > q) {this.resize((q *= 2) > t ? q : t);}t -= 4;if (this.littleEndian) {this.view[t + 3] = s >>> 24 & 255;this.view[t + 2] = s >>> 16 & 255;this.view[t + 1] = s >>> 8 & 255;this.view[t] = s & 255;} else {this.view[t] = s >>> 24 & 255;this.view[t + 1] = s >>> 16 & 255;this.view[t + 2] = s >>> 8 & 255;this.view[t + 3] = s & 255;}if (r) {this.offset += 4;}return this;};l.writeUInt32 = l.writeUint32;l.readUint32 = function (s) {var r = typeof s === "undefined";if (r) {s = this.offset;}if (!this.noAssert) {if (typeof s !== "number" || s % 1 !== 0) {throw TypeError("Illegal offset: " + s + " (not an integer)");}s >>>= 0;if (s < 0 || s + 4 > this.buffer.byteLength) {throw RangeError("Illegal offset: 0 <= " + s + " (+" + 4 + ") <= " + this.buffer.byteLength);}}var q = 0;if (this.littleEndian) {q = this.view[s + 2] << 16;q |= this.view[s + 1] << 8;q |= this.view[s];q += this.view[s + 3] << 24 >>> 0;} else {q = this.view[s + 1] << 16;q |= this.view[s + 2] << 8;q |= this.view[s + 3];q += this.view[s] << 24 >>> 0;}if (r) {this.offset += 4;}return q;};l.readUInt32 = l.readUint32;if (k) {l.writeInt64 = function (t, u) {var s = typeof u === "undefined";if (s) {u = this.offset;}if (!this.noAssert) {if (typeof t === "number") {t = k.fromNumber(t);} else {if (typeof t === "string") {t = k.fromString(t);} else {if (!(t && t instanceof k)) {throw TypeError("Illegal value: " + t + " (not an integer or Long)");}}}if (typeof u !== "number" || u % 1 !== 0) {throw TypeError("Illegal offset: " + u + " (not an integer)");}u >>>= 0;if (u < 0 || u + 0 > this.buffer.byteLength) {throw RangeError("Illegal offset: 0 <= " + u + " (+" + 0 + ") <= " + this.buffer.byteLength);}}if (typeof t === "number") {t = k.fromNumber(t);} else {if (typeof t === "string") {t = k.fromString(t);}}u += 8;var v = this.buffer.byteLength;if (u > v) {this.resize((v *= 2) > u ? v : u);}u -= 8;var r = t.low,q = t.high;if (this.littleEndian) {this.view[u + 3] = r >>> 24 & 255;this.view[u + 2] = r >>> 16 & 255;this.view[u + 1] = r >>> 8 & 255;this.view[u] = r & 255;u += 4;this.view[u + 3] = q >>> 24 & 255;this.view[u + 2] = q >>> 16 & 255;this.view[u + 1] = q >>> 8 & 255;this.view[u] = q & 255;} else {this.view[u] = q >>> 24 & 255;this.view[u + 1] = q >>> 16 & 255;this.view[u + 2] = q >>> 8 & 255;this.view[u + 3] = q & 255;u += 4;this.view[u] = r >>> 24 & 255;this.view[u + 1] = r >>> 16 & 255;this.view[u + 2] = r >>> 8 & 255;this.view[u + 3] = r & 255;}if (s) {this.offset += 8;}return this;};l.writeLong = l.writeInt64;l.readInt64 = function (u) {var t = typeof u === "undefined";if (t) {u = this.offset;}if (!this.noAssert) {if (typeof u !== "number" || u % 1 !== 0) {throw TypeError("Illegal offset: " + u + " (not an integer)");}u >>>= 0;if (u < 0 || u + 8 > this.buffer.byteLength) {throw RangeError("Illegal offset: 0 <= " + u + " (+" + 8 + ") <= " + this.buffer.byteLength);}}var r = 0,q = 0;if (this.littleEndian) {r = this.view[u + 2] << 16;r |= this.view[u + 1] << 8;r |= this.view[u];r += this.view[u + 3] << 24 >>> 0;u += 4;q = this.view[u + 2] << 16;q |= this.view[u + 1] << 8;q |= this.view[u];q += this.view[u + 3] << 24 >>> 0;} else {q = this.view[u + 1] << 16;q |= this.view[u + 2] << 8;q |= this.view[u + 3];q += this.view[u] << 24 >>> 0;u += 4;r = this.view[u + 1] << 16;r |= this.view[u + 2] << 8;r |= this.view[u + 3];r += this.view[u] << 24 >>> 0;}var s = new k(r, q, false);if (t) {this.offset += 8;}return s;};l.readLong = l.readInt64;l.writeUint64 = function (t, v) {var s = typeof v === "undefined";if (s) {v = this.offset;}if (!this.noAssert) {if (typeof t === "number") {t = k.fromNumber(t);} else {if (typeof t === "string") {t = k.fromString(t);} else {if (!(t && t instanceof k)) {throw TypeError("Illegal value: " + t + " (not an integer or Long)");}}}if (typeof v !== "number" || v % 1 !== 0) {throw TypeError("Illegal offset: " + v + " (not an integer)");}v >>>= 0;if (v < 0 || v + 0 > this.buffer.byteLength) {throw RangeError("Illegal offset: 0 <= " + v + " (+" + 0 + ") <= " + this.buffer.byteLength);}}if (typeof t === "number") {t = k.fromNumber(t);} else {if (typeof t === "string") {t = k.fromString(t);}}v += 8;var u = this.buffer.byteLength;if (v > u) {this.resize((u *= 2) > v ? u : v);}v -= 8;var r = t.low,q = t.high;if (this.littleEndian) {this.view[v + 3] = r >>> 24 & 255;this.view[v + 2] = r >>> 16 & 255;this.view[v + 1] = r >>> 8 & 255;this.view[v] = r & 255;v += 4;this.view[v + 3] = q >>> 24 & 255;this.view[v + 2] = q >>> 16 & 255;this.view[v + 1] = q >>> 8 & 255;this.view[v] = q & 255;} else {this.view[v] = q >>> 24 & 255;this.view[v + 1] = q >>> 16 & 255;this.view[v + 2] = q >>> 8 & 255;this.view[v + 3] = q & 255;v += 4;this.view[v] = r >>> 24 & 255;this.view[v + 1] = r >>> 16 & 255;this.view[v + 2] = r >>> 8 & 255;this.view[v + 3] = r & 255;}if (s) {this.offset += 8;}return this;};l.writeUInt64 = l.writeUint64;l.readUint64 = function (u) {var t = typeof u === "undefined";if (t) {u = this.offset;}if (!this.noAssert) {if (typeof u !== "number" || u % 1 !== 0) {throw TypeError("Illegal offset: " + u + " (not an integer)");}u >>>= 0;if (u < 0 || u + 8 > this.buffer.byteLength) {throw RangeError("Illegal offset: 0 <= " + u + " (+" + 8 + ") <= " + this.buffer.byteLength);}}var r = 0,q = 0;if (this.littleEndian) {r = this.view[u + 2] << 16;r |= this.view[u + 1] << 8;r |= this.view[u];r += this.view[u + 3] << 24 >>> 0;u += 4;q = this.view[u + 2] << 16;q |= this.view[u + 1] << 8;q |= this.view[u];q += this.view[u + 3] << 24 >>> 0;} else {q = this.view[u + 1] << 16;q |= this.view[u + 2] << 8;q |= this.view[u + 3];q += this.view[u] << 24 >>> 0;u += 4;r = this.view[u + 1] << 16;r |= this.view[u + 2] << 8;r |= this.view[u + 3];r += this.view[u] << 24 >>> 0;}var s = new k(r, q, true);if (t) {this.offset += 8;}return s;};l.readUInt64 = l.readUint64;}function i(x, w, t, r, A) {var B,v,u = A * 8 - r - 1,z = (1 << u) - 1,q = z >> 1,D = -7,y = t ? A - 1 : 0,C = t ? -1 : 1,E = x[w + y];y += C;B = E & (1 << -D) - 1;E >>= -D;D += u;for (; D > 0; B = B * 256 + x[w + y], y += C, D -= 8) {}v = B & (1 << -D) - 1;B >>= -D;D += r;for (; D > 0; v = v * 256 + x[w + y], y += C, D -= 8) {}if (B === 0) {B = 1 - q;} else {if (B === z) {return v ? NaN : (E ? -1 : 1) * Infinity;} else {v = v + Math.pow(2, r);B = B - q;}}return (E ? -1 : 1) * v * Math.pow(2, B - r);}function j(y, F, x, t, r, B) {var C,v,E,u = B * 8 - r - 1,A = (1 << u) - 1,q = A >> 1,w = r === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,z = t ? 0 : B - 1,D = t ? 1 : -1,G = F < 0 || F === 0 && 1 / F < 0 ? 1 : 0;F = Math.abs(F);if (isNaN(F) || F === Infinity) {v = isNaN(F) ? 1 : 0;C = A;} else {C = Math.floor(Math.log(F) / Math.LN2);if (F * (E = Math.pow(2, -C)) < 1) {C--;E *= 2;}if (C + q >= 1) {F += w / E;} else {F += w * Math.pow(2, 1 - q);}if (F * E >= 2) {C++;E /= 2;}if (C + q >= A) {v = 0;C = A;} else {if (C + q >= 1) {v = (F * E - 1) * Math.pow(2, r);C = C + q;} else {v = F * Math.pow(2, q - 1) * Math.pow(2, r);C = 0;}}}for (; r >= 8; y[x + z] = v & 255, z += D, v /= 256, r -= 8) {}C = C << r | v;u += r;for (; u > 0; y[x + z] = C & 255, z += D, C /= 256, u -= 8) {}y[x + z - D] |= G * 128;}l.writeFloat32 = function (r, t) {var q = typeof t === "undefined";if (q) {t = this.offset;}if (!this.noAssert) {if (typeof r !== "number") {throw TypeError("Illegal value: " + r + " (not a number)");}if (typeof t !== "number" || t % 1 !== 0) {throw TypeError("Illegal offset: " + t + " (not an integer)");}t >>>= 0;if (t < 0 || t + 0 > this.buffer.byteLength) {throw RangeError("Illegal offset: 0 <= " + t + " (+" + 0 + ") <= " + this.buffer.byteLength);}}t += 4;var s = this.buffer.byteLength;if (t > s) {this.resize((s *= 2) > t ? s : t);}t -= 4;j(this.view, r, t, this.littleEndian, 23, 4);if (q) {this.offset += 4;}return this;};l.writeFloat = l.writeFloat32;l.readFloat32 = function (s) {var r = typeof s === "undefined";if (r) {s = this.offset;}if (!this.noAssert) {if (typeof s !== "number" || s % 1 !== 0) {throw TypeError("Illegal offset: " + s + " (not an integer)");}s >>>= 0;if (s < 0 || s + 4 > this.buffer.byteLength) {throw RangeError("Illegal offset: 0 <= " + s + " (+" + 4 + ") <= " + this.buffer.byteLength);}}var q = i(this.view, s, this.littleEndian, 23, 4);if (r) {this.offset += 4;}return q;};l.readFloat = l.readFloat32;l.writeFloat64 = function (s, t) {var r = typeof t === "undefined";if (r) {t = this.offset;}if (!this.noAssert) {if (typeof s !== "number") {throw TypeError("Illegal value: " + s + " (not a number)");}if (typeof t !== "number" || t % 1 !== 0) {throw TypeError("Illegal offset: " + t + " (not an integer)");}t >>>= 0;if (t < 0 || t + 0 > this.buffer.byteLength) {throw RangeError("Illegal offset: 0 <= " + t + " (+" + 0 + ") <= " + this.buffer.byteLength);}}t += 8;var q = this.buffer.byteLength;if (t > q) {this.resize((q *= 2) > t ? q : t);}t -= 8;j(this.view, s, t, this.littleEndian, 52, 8);if (r) {this.offset += 8;}return this;};l.writeDouble = l.writeFloat64;l.readFloat64 = function (s) {var r = typeof s === "undefined";if (r) {s = this.offset;}if (!this.noAssert) {if (typeof s !== "number" || s % 1 !== 0) {throw TypeError("Illegal offset: " + s + " (not an integer)");}s >>>= 0;if (s < 0 || s + 8 > this.buffer.byteLength) {throw RangeError("Illegal offset: 0 <= " + s + " (+" + 8 + ") <= " + this.buffer.byteLength);}}var q = i(this.view, s, this.littleEndian, 52, 8);if (r) {this.offset += 8;}return q;};l.readDouble = l.readFloat64;n.MAX_VARINT32_BYTES = 5;n.calculateVarint32 = function (q) {q = q >>> 0;if (q < 1 << 7) {return 1;} else {if (q < 1 << 14) {return 2;} else {if (q < 1 << 21) {return 3;} else {if (q < 1 << 28) {return 4;} else {return 5;}}}}};n.zigZagEncode32 = function (q) {return ((q |= 0) << 1 ^ q >> 31) >>> 0;};n.zigZagDecode32 = function (q) {return q >>> 1 ^ -(q & 1) | 0;};l.writeVarint32 = function (u, v) {var t = typeof v === "undefined";if (t) {v = this.offset;}if (!this.noAssert) {if (typeof u !== "number" || u % 1 !== 0) {throw TypeError("Illegal value: " + u + " (not an integer)");}u |= 0;if (typeof v !== "number" || v % 1 !== 0) {throw TypeError("Illegal offset: " + v + " (not an integer)");}v >>>= 0;if (v < 0 || v + 0 > this.buffer.byteLength) {throw RangeError("Illegal offset: 0 <= " + v + " (+" + 0 + ") <= " + this.buffer.byteLength);}}var r = n.calculateVarint32(u),q;v += r;var s = this.buffer.byteLength;if (v > s) {this.resize((s *= 2) > v ? s : v);}v -= r;u >>>= 0;while (u >= 128) {q = u & 127 | 128;this.view[v++] = q;u >>>= 7;}this.view[v++] = u;if (t) {this.offset = v;return this;}return r;};l.writeVarint32ZigZag = function (q, r) {return this.writeVarint32(n.zigZagEncode32(q), r);};l.readVarint32 = function (u) {var t = typeof u === "undefined";if (t) {u = this.offset;}if (!this.noAssert) {if (typeof u !== "number" || u % 1 !== 0) {throw TypeError("Illegal offset: " + u + " (not an integer)");}u >>>= 0;if (u < 0 || u + 1 > this.buffer.byteLength) {throw RangeError("Illegal offset: 0 <= " + u + " (+" + 1 + ") <= " + this.buffer.byteLength);}}var v = 0,s = 0 >>> 0,q;do {if (!this.noAssert && u > this.limit) {var r = Error("Truncated");r.truncated = true;throw r;}q = this.view[u++];if (v < 5) {s |= (q & 127) << 7 * v;}++v;} while ((q & 128) !== 0);s |= 0;if (t) {this.offset = u;return s;}return { value: s, length: v };};l.readVarint32ZigZag = function (r) {var q = this.readVarint32(r);if (typeof q === "object") {q.value = n.zigZagDecode32(q.value);} else {q = n.zigZagDecode32(q);}return q;};if (k) {n.MAX_VARINT64_BYTES = 10;n.calculateVarint64 = function (r) {if (typeof r === "number") {r = k.fromNumber(r);} else {if (typeof r === "string") {r = k.fromString(r);}}var t = r.toInt() >>> 0,s = r.shiftRightUnsigned(28).toInt() >>> 0,q = r.shiftRightUnsigned(56).toInt() >>> 0;if (q == 0) {if (s == 0) {if (t < 1 << 14) {return t < 1 << 7 ? 1 : 2;} else {return t < 1 << 21 ? 3 : 4;}} else {if (s < 1 << 14) {return s < 1 << 7 ? 5 : 6;} else {return s < 1 << 21 ? 7 : 8;}}} else {return q < 1 << 7 ? 9 : 10;}};n.zigZagEncode64 = function (q) {if (typeof q === "number") {q = k.fromNumber(q, false);} else {if (typeof q === "string") {q = k.fromString(q, false);} else {if (q.unsigned !== false) {q = q.toSigned();}}}return q.shiftLeft(1).xor(q.shiftRight(63)).toUnsigned();};n.zigZagDecode64 = function (q) {if (typeof q === "number") {q = k.fromNumber(q, false);} else {if (typeof q === "string") {q = k.fromString(q, false);} else {if (q.unsigned !== false) {q = q.toSigned();}}}return q.shiftRightUnsigned(1).xor(q.and(k.ONE).toSigned().negate()).toSigned();};l.writeVarint64 = function (u, x) {var t = typeof x === "undefined";if (t) {x = this.offset;}if (!this.noAssert) {if (typeof u === "number") {u = k.fromNumber(u);} else {if (typeof u === "string") {u = k.fromString(u);} else {if (!(u && u instanceof k)) {throw TypeError("Illegal value: " + u + " (not an integer or Long)");}}}if (typeof x !== "number" || x % 1 !== 0) {throw TypeError("Illegal offset: " + x + " (not an integer)");}x >>>= 0;if (x < 0 || x + 0 > this.buffer.byteLength) {throw RangeError("Illegal offset: 0 <= " + x + " (+" + 0 + ") <= " + this.buffer.byteLength);}}if (typeof u === "number") {u = k.fromNumber(u, false);} else {if (typeof u === "string") {u = k.fromString(u, false);} else {if (u.unsigned !== false) {u = u.toSigned();}}}var q = n.calculateVarint64(u),w = u.toInt() >>> 0,v = u.shiftRightUnsigned(28).toInt() >>> 0,s = u.shiftRightUnsigned(56).toInt() >>> 0;x += q;var r = this.buffer.byteLength;if (x > r) {this.resize((r *= 2) > x ? r : x);}x -= q;switch (q) {case 10:this.view[x + 9] = s >>> 7 & 1;case 9:this.view[x + 8] = q !== 9 ? s | 128 : s & 127;case 8:this.view[x + 7] = q !== 8 ? v >>> 21 | 128 : v >>> 21 & 127;case 7:this.view[x + 6] = q !== 7 ? v >>> 14 | 128 : v >>> 14 & 127;case 6:this.view[x + 5] = q !== 6 ? v >>> 7 | 128 : v >>> 7 & 127;case 5:this.view[x + 4] = q !== 5 ? v | 128 : v & 127;case 4:this.view[x + 3] = q !== 4 ? w >>> 21 | 128 : w >>> 21 & 127;case 3:this.view[x + 2] = q !== 3 ? w >>> 14 | 128 : w >>> 14 & 127;case 2:this.view[x + 1] = q !== 2 ? w >>> 7 | 128 : w >>> 7 & 127;case 1:this.view[x] = q !== 1 ? w | 128 : w & 127;}if (t) {this.offset += q;return this;} else {return q;}};l.writeVarint64ZigZag = function (q, r) {return this.writeVarint64(n.zigZagEncode64(q), r);};l.readVarint64 = function (w) {var t = typeof w === "undefined";if (t) {w = this.offset;}if (!this.noAssert) {if (typeof w !== "number" || w % 1 !== 0) {throw TypeError("Illegal offset: " + w + " (not an integer)");}w >>>= 0;if (w < 0 || w + 1 > this.buffer.byteLength) {throw RangeError("Illegal offset: 0 <= " + w + " (+" + 1 + ") <= " + this.buffer.byteLength);}}var x = w,v = 0,u = 0,s = 0,q = 0;q = this.view[w++];v = q & 127;if (q & 128) {q = this.view[w++];v |= (q & 127) << 7;if (q & 128 || this.noAssert && typeof q === "undefined") {q = this.view[w++];v |= (q & 127) << 14;if (q & 128 || this.noAssert && typeof q === "undefined") {q = this.view[w++];v |= (q & 127) << 21;if (q & 128 || this.noAssert && typeof q === "undefined") {q = this.view[w++];u = q & 127;if (q & 128 || this.noAssert && typeof q === "undefined") {q = this.view[w++];u |= (q & 127) << 7;if (q & 128 || this.noAssert && typeof q === "undefined") {q = this.view[w++];u |= (q & 127) << 14;if (q & 128 || this.noAssert && typeof q === "undefined") {q = this.view[w++];u |= (q & 127) << 21;if (q & 128 || this.noAssert && typeof q === "undefined") {q = this.view[w++];s = q & 127;if (q & 128 || this.noAssert && typeof q === "undefined") {q = this.view[w++];s |= (q & 127) << 7;if (q & 128 || this.noAssert && typeof q === "undefined") {throw Error("Buffer overrun");}}}}}}}}}}var r = k.fromBits(v | u << 28, u >>> 4 | s << 24, false);if (t) {this.offset = w;return r;} else {return { value: r, length: w - x };}};l.readVarint64ZigZag = function (r) {var q = this.readVarint64(r);if (q && q.value instanceof k) {q.value = n.zigZagDecode64(q.value);} else {q = n.zigZagDecode64(q);}return q;};}l.writeCString = function (v, u) {var t = typeof u === "undefined";if (t) {u = this.offset;}var r,q = v.length;if (!this.noAssert) {if (typeof v !== "string") {throw TypeError("Illegal str: Not a string");}for (r = 0; r < q; ++r) {if (v.charCodeAt(r) === 0) {throw RangeError("Illegal str: Contains NULL-characters");}}if (typeof u !== "number" || u % 1 !== 0) {throw TypeError("Illegal offset: " + u + " (not an integer)");}u >>>= 0;if (u < 0 || u + 0 > this.buffer.byteLength) {throw RangeError("Illegal offset: 0 <= " + u + " (+" + 0 + ") <= " + this.buffer.byteLength);}}q = o.calculateUTF16asUTF8(b(v))[1];u += q + 1;var s = this.buffer.byteLength;if (u > s) {this.resize((s *= 2) > u ? s : u);}u -= q + 1;o.encodeUTF16toUTF8(b(v), function (w) {this.view[u++] = w;}.bind(this));this.view[u++] = 0;if (t) {this.offset = u;return this;}return q;};l.readCString = function (u) {var s = typeof u === "undefined";if (s) {u = this.offset;}if (!this.noAssert) {if (typeof u !== "number" || u % 1 !== 0) {throw TypeError("Illegal offset: " + u + " (not an integer)");}u >>>= 0;if (u < 0 || u + 1 > this.buffer.byteLength) {throw RangeError("Illegal offset: 0 <= " + u + " (+" + 1 + ") <= " + this.buffer.byteLength);}}var v = u,r;var t,q = -1;o.decodeUTF8toUTF16(function () {if (q === 0) {return null;}if (u >= this.limit) {throw RangeError("Illegal range: Truncated data, " + u + " < " + this.limit);}q = this.view[u++];return q === 0 ? null : q;}.bind(this), t = f(), true);if (s) {this.offset = u;return t();} else {return { string: t(), length: u - v };}};l.writeIString = function (u, t) {var s = typeof t === "undefined";if (s) {t = this.offset;}if (!this.noAssert) {if (typeof u !== "string") {throw TypeError("Illegal str: Not a string");}if (typeof t !== "number" || t % 1 !== 0) {throw TypeError("Illegal offset: " + t + " (not an integer)");}t >>>= 0;if (t < 0 || t + 0 > this.buffer.byteLength) {throw RangeError("Illegal offset: 0 <= " + t + " (+" + 0 + ") <= " + this.buffer.byteLength);}}var v = t,q;q = o.calculateUTF16asUTF8(b(u), this.noAssert)[1];t += 4 + q;var r = this.buffer.byteLength;if (t > r) {this.resize((r *= 2) > t ? r : t);}t -= 4 + q;if (this.littleEndian) {this.view[t + 3] = q >>> 24 & 255;this.view[t + 2] = q >>> 16 & 255;this.view[t + 1] = q >>> 8 & 255;this.view[t] = q & 255;} else {this.view[t] = q >>> 24 & 255;this.view[t + 1] = q >>> 16 & 255;this.view[t + 2] = q >>> 8 & 255;this.view[t + 3] = q & 255;}t += 4;o.encodeUTF16toUTF8(b(u), function (w) {this.view[t++] = w;}.bind(this));if (t !== v + 4 + q) {throw RangeError("Illegal range: Truncated data, " + t + " == " + (t + 4 + q));}if (s) {this.offset = t;return this;}return t - v;};l.readIString = function (t) {var r = typeof t === "undefined";if (r) {t = this.offset;}if (!this.noAssert) {if (typeof t !== "number" || t % 1 !== 0) {throw TypeError("Illegal offset: " + t + " (not an integer)");}t >>>= 0;if (t < 0 || t + 4 > this.buffer.byteLength) {throw RangeError("Illegal offset: 0 <= " + t + " (+" + 4 + ") <= " + this.buffer.byteLength);}}var u = t;var q = this.readUint32(t);var s = this.readUTF8String(q, n.METRICS_BYTES, t += 4);t += s.length;if (r) {this.offset = t;return s.string;} else {return { string: s.string, length: t - u };}};n.METRICS_CHARS = "c";n.METRICS_BYTES = "b";l.writeUTF8String = function (u, t) {var s = typeof t === "undefined";if (s) {t = this.offset;}if (!this.noAssert) {if (typeof t !== "number" || t % 1 !== 0) {throw TypeError("Illegal offset: " + t + " (not an integer)");}t >>>= 0;if (t < 0 || t + 0 > this.buffer.byteLength) {throw RangeError("Illegal offset: 0 <= " + t + " (+" + 0 + ") <= " + this.buffer.byteLength);}}var q;var v = t;q = o.calculateUTF16asUTF8(b(u))[1];t += q;var r = this.buffer.byteLength;if (t > r) {this.resize((r *= 2) > t ? r : t);}t -= q;o.encodeUTF16toUTF8(b(u), function (w) {this.view[t++] = w;}.bind(this));if (s) {this.offset = t;return this;}return t - v;};l.writeString = l.writeUTF8String;n.calculateUTF8Chars = function (q) {return o.calculateUTF16asUTF8(b(q))[0];};n.calculateUTF8Bytes = function (q) {return o.calculateUTF16asUTF8(b(q))[1];};n.calculateString = n.calculateUTF8Bytes;l.readUTF8String = function (t, s, w) {if (typeof s === "number") {w = s;s = undefined;}var u = typeof w === "undefined";if (u) {w = this.offset;}if (typeof s === "undefined") {s = n.METRICS_CHARS;}if (!this.noAssert) {if (typeof t !== "number" || t % 1 !== 0) {throw TypeError("Illegal length: " + t + " (not an integer)");}t |= 0;if (typeof w !== "number" || w % 1 !== 0) {throw TypeError("Illegal offset: " + w + " (not an integer)");}w >>>= 0;if (w < 0 || w + 0 > this.buffer.byteLength) {throw RangeError("Illegal offset: 0 <= " + w + " (+" + 0 + ") <= " + this.buffer.byteLength);}}var r = 0,x = w,v;if (s === n.METRICS_CHARS) {v = f();o.decodeUTF8(function () {return r < t && w < this.limit ? this.view[w++] : null;}.bind(this), function (y) {++r;o.UTF8toUTF16(y, v);});if (r !== t) {throw RangeError("Illegal range: Truncated data, " + r + " == " + t);}if (u) {this.offset = w;return v();} else {return { string: v(), length: w - x };}} else {if (s === n.METRICS_BYTES) {if (!this.noAssert) {if (typeof w !== "number" || w % 1 !== 0) {throw TypeError("Illegal offset: " + w + " (not an integer)");}w >>>= 0;if (w < 0 || w + t > this.buffer.byteLength) {throw RangeError("Illegal offset: 0 <= " + w + " (+" + t + ") <= " + this.buffer.byteLength);}}var q = w + t;o.decodeUTF8toUTF16(function () {return w < q ? this.view[w++] : null;}.bind(this), v = f(), this.noAssert);if (w !== q) {throw RangeError("Illegal range: Truncated data, " + w + " == " + q);}if (u) {this.offset = w;return v();} else {return { string: v(), length: w - x };}} else {throw TypeError("Unsupported metrics: " + s);}}};l.readString = l.readUTF8String;l.writeVString = function (v, u) {var t = typeof u === "undefined";if (t) {u = this.offset;}if (!this.noAssert) {if (typeof v !== "string") {throw TypeError("Illegal str: Not a string");}if (typeof u !== "number" || u % 1 !== 0) {throw TypeError("Illegal offset: " + u + " (not an integer)");}u >>>= 0;if (u < 0 || u + 0 > this.buffer.byteLength) {throw RangeError("Illegal offset: 0 <= " + u + " (+" + 0 + ") <= " + this.buffer.byteLength);}}var w = u,s,q;s = o.calculateUTF16asUTF8(b(v), this.noAssert)[1];q = n.calculateVarint32(s);u += q + s;var r = this.buffer.byteLength;if (u > r) {this.resize((r *= 2) > u ? r : u);}u -= q + s;u += this.writeVarint32(s, u);o.encodeUTF16toUTF8(b(v), function (x) {this.view[u++] = x;}.bind(this));if (u !== w + s + q) {throw RangeError("Illegal range: Truncated data, " + u + " == " + (u + s + q));}if (t) {this.offset = u;return this;}return u - w;};l.readVString = function (t) {var r = typeof t === "undefined";if (r) {t = this.offset;}if (!this.noAssert) {if (typeof t !== "number" || t % 1 !== 0) {throw TypeError("Illegal offset: " + t + " (not an integer)");}t >>>= 0;if (t < 0 || t + 1 > this.buffer.byteLength) {throw RangeError("Illegal offset: 0 <= " + t + " (+" + 1 + ") <= " + this.buffer.byteLength);}}var u = t;var q = this.readVarint32(t);var s = this.readUTF8String(q.value, n.METRICS_BYTES, t += q.length);t += s.length;if (r) {this.offset = t;return s.string;} else {return { string: s.string, length: t - u };}};l.append = function (u, s, v) {if (typeof s === "number" || typeof s !== "string") {v = s;s = undefined;}var t = typeof v === "undefined";if (t) {v = this.offset;}if (!this.noAssert) {if (typeof v !== "number" || v % 1 !== 0) {throw TypeError("Illegal offset: " + v + " (not an integer)");}v >>>= 0;if (v < 0 || v + 0 > this.buffer.byteLength) {throw RangeError("Illegal offset: 0 <= " + v + " (+" + 0 + ") <= " + this.buffer.byteLength);}}if (!(u instanceof n)) {u = n.wrap(u, s);}var r = u.limit - u.offset;if (r <= 0) {return this;}v += r;var q = this.buffer.byteLength;if (v > q) {this.resize((q *= 2) > v ? q : v);}v -= r;this.view.set(u.view.subarray(u.offset, u.limit), v);u.offset += r;if (t) {this.offset += r;}return this;};l.appendTo = function (q, r) {q.append(this, r);return this;};l.assert = function (q) {this.noAssert = !q;return this;};l.capacity = function () {return this.buffer.byteLength;};l.clear = function () {this.offset = 0;this.limit = this.buffer.byteLength;this.markedOffset = -1;return this;};l.clone = function (r) {var q = new n(0, this.littleEndian, this.noAssert);if (r) {q.buffer = new ArrayBuffer(this.buffer.byteLength);q.view = new Uint8Array(q.buffer);} else {q.buffer = this.buffer;q.view = this.view;}q.offset = this.offset;q.markedOffset = this.markedOffset;q.limit = this.limit;return q;};l.compact = function (u, t) {if (typeof u === "undefined") {u = this.offset;}if (typeof t === "undefined") {t = this.limit;}if (!this.noAssert) {if (typeof u !== "number" || u % 1 !== 0) {throw TypeError("Illegal begin: Not an integer");}u >>>= 0;if (typeof t !== "number" || t % 1 !== 0) {throw TypeError("Illegal end: Not an integer");}t >>>= 0;if (u < 0 || u > t || t > this.buffer.byteLength) {throw RangeError("Illegal range: 0 <= " + u + " <= " + t + " <= " + this.buffer.byteLength);}}if (u === 0 && t === this.buffer.byteLength) {return this;}var q = t - u;if (q === 0) {this.buffer = p;this.view = null;if (this.markedOffset >= 0) {this.markedOffset -= u;}this.offset = 0;this.limit = 0;return this;}var s = new ArrayBuffer(q);var r = new Uint8Array(s);r.set(this.view.subarray(u, t));this.buffer = s;this.view = r;if (this.markedOffset >= 0) {this.markedOffset -= u;}this.offset = 0;this.limit = q;return this;};l.copy = function (s, q) {if (typeof s === "undefined") {s = this.offset;}if (typeof q === "undefined") {q = this.limit;}if (!this.noAssert) {if (typeof s !== "number" || s % 1 !== 0) {throw TypeError("Illegal begin: Not an integer");}s >>>= 0;if (typeof q !== "number" || q % 1 !== 0) {throw TypeError("Illegal end: Not an integer");}q >>>= 0;if (s < 0 || s > q || q > this.buffer.byteLength) {throw RangeError("Illegal range: 0 <= " + s + " <= " + q + " <= " + this.buffer.byteLength);}}if (s === q) {return new n(0, this.littleEndian, this.noAssert);}var r = q - s,t = new n(r, this.littleEndian, this.noAssert);t.offset = 0;t.limit = r;if (t.markedOffset >= 0) {t.markedOffset -= s;}this.copyTo(t, 0, s, q);return t;};l.copyTo = function (u, w, s, v) {var t, r;if (!this.noAssert) {if (!n.isByteBuffer(u)) {throw TypeError("Illegal target: Not a ByteBuffer");}}w = (r = typeof w === "undefined") ? u.offset : w | 0;s = (t = typeof s === "undefined") ? this.offset : s | 0;v = typeof v === "undefined" ? this.limit : v | 0;if (w < 0 || w > u.buffer.byteLength) {throw RangeError("Illegal target range: 0 <= " + w + " <= " + u.buffer.byteLength);}if (s < 0 || v > this.buffer.byteLength) {throw RangeError("Illegal source range: 0 <= " + s + " <= " + this.buffer.byteLength);}var q = v - s;if (q === 0) {return u;}u.ensureCapacity(w + q);u.view.set(this.view.subarray(s, v), w);if (t) {this.offset += q;}if (r) {u.offset += q;}return this;};l.ensureCapacity = function (q) {var r = this.buffer.byteLength;if (r < q) {return this.resize((r *= 2) > q ? r : q);}return this;};l.fill = function (t, r, q) {var s = typeof r === "undefined";if (s) {r = this.offset;}if (typeof t === "string" && t.length > 0) {t = t.charCodeAt(0);}if (typeof r === "undefined") {r = this.offset;}if (typeof q === "undefined") {q = this.limit;}if (!this.noAssert) {if (typeof t !== "number" || t % 1 !== 0) {throw TypeError("Illegal value: " + t + " (not an integer)");}t |= 0;if (typeof r !== "number" || r % 1 !== 0) {throw TypeError("Illegal begin: Not an integer");}r >>>= 0;if (typeof q !== "number" || q % 1 !== 0) {throw TypeError("Illegal end: Not an integer");}q >>>= 0;if (r < 0 || r > q || q > this.buffer.byteLength) {throw RangeError("Illegal range: 0 <= " + r + " <= " + q + " <= " + this.buffer.byteLength);}}if (r >= q) {return this;}while (r < q) {this.view[r++] = t;}if (s) {this.offset = r;}return this;};l.flip = function () {this.limit = this.offset;this.offset = 0;return this;};l.mark = function (q) {q = typeof q === "undefined" ? this.offset : q;if (!this.noAssert) {if (typeof q !== "number" || q % 1 !== 0) {throw TypeError("Illegal offset: " + q + " (not an integer)");}q >>>= 0;if (q < 0 || q + 0 > this.buffer.byteLength) {throw RangeError("Illegal offset: 0 <= " + q + " (+" + 0 + ") <= " + this.buffer.byteLength);}}this.markedOffset = q;return this;};l.order = function (q) {if (!this.noAssert) {if (typeof q !== "boolean") {throw TypeError("Illegal littleEndian: Not a boolean");}}this.littleEndian = !!q;return this;};l.LE = function (q) {this.littleEndian = typeof q !== "undefined" ? !!q : true;return this;};l.BE = function (q) {this.littleEndian = typeof q !== "undefined" ? !q : false;return this;};l.prepend = function (q, s, t) {if (typeof s === "number" || typeof s !== "string") {t = s;s = undefined;}var r = typeof t === "undefined";if (r) {t = this.offset;}if (!this.noAssert) {if (typeof t !== "number" || t % 1 !== 0) {throw TypeError("Illegal offset: " + t + " (not an integer)");}t >>>= 0;if (t < 0 || t + 0 > this.buffer.byteLength) {throw RangeError("Illegal offset: 0 <= " + t + " (+" + 0 + ") <= " + this.buffer.byteLength);}}if (!(q instanceof n)) {q = n.wrap(q, s);}var v = q.limit - q.offset;if (v <= 0) {return this;}var y = v - t;if (y > 0) {var u = new ArrayBuffer(this.buffer.byteLength + y);var x = new Uint8Array(u);x.set(this.view.subarray(t, this.buffer.byteLength), v);this.buffer = u;this.view = x;this.offset += y;if (this.markedOffset >= 0) {this.markedOffset += y;}this.limit += y;t += y;} else {var w = new Uint8Array(this.buffer);}this.view.set(q.view.subarray(q.offset, q.limit), t - v);q.offset = q.limit;if (r) {this.offset -= v;}return this;};l.prependTo = function (q, r) {q.prepend(this, r);return this;};l.printDebug = function (q) {if (typeof q !== "function") {q = console.log.bind(console);}q(this.toString() + "\n-------------------------------------------------------------------\n" + this.toDebug(true));};l.remaining = function () {return this.limit - this.offset;};l.reset = function () {if (this.markedOffset >= 0) {this.offset = this.markedOffset;this.markedOffset = -1;} else {this.offset = 0;}return this;};l.resize = function (s) {if (!this.noAssert) {if (typeof s !== "number" || s % 1 !== 0) {throw TypeError("Illegal capacity: " + s + " (not an integer)");}s |= 0;if (s < 0) {throw RangeError("Illegal capacity: 0 <= " + s);}}if (this.buffer.byteLength < s) {var r = new ArrayBuffer(s);var q = new Uint8Array(r);q.set(this.view);this.buffer = r;this.view = q;}return this;};l.reverse = function (r, q) {if (typeof r === "undefined") {r = this.offset;}if (typeof q === "undefined") {q = this.limit;}if (!this.noAssert) {if (typeof r !== "number" || r % 1 !== 0) {throw TypeError("Illegal begin: Not an integer");}r >>>= 0;if (typeof q !== "number" || q % 1 !== 0) {throw TypeError("Illegal end: Not an integer");}q >>>= 0;if (r < 0 || r > q || q > this.buffer.byteLength) {throw RangeError("Illegal range: 0 <= " + r + " <= " + q + " <= " + this.buffer.byteLength);}}if (r === q) {return this;}Array.prototype.reverse.call(this.view.subarray(r, q));return this;};l.skip = function (q) {if (!this.noAssert) {if (typeof q !== "number" || q % 1 !== 0) {throw TypeError("Illegal length: " + q + " (not an integer)");}q |= 0;}var r = this.offset + q;if (!this.noAssert) {if (r < 0 || r > this.buffer.byteLength) {throw RangeError("Illegal length: 0 <= " + this.offset + " + " + q + " <= " + this.buffer.byteLength);}}this.offset = r;return this;};l.slice = function (r, q) {if (typeof r === "undefined") {r = this.offset;}if (typeof q === "undefined") {q = this.limit;}if (!this.noAssert) {if (typeof r !== "number" || r % 1 !== 0) {throw TypeError("Illegal begin: Not an integer");}r >>>= 0;if (typeof q !== "number" || q % 1 !== 0) {throw TypeError("Illegal end: Not an integer");}q >>>= 0;if (r < 0 || r > q || q > this.buffer.byteLength) {throw RangeError("Illegal range: 0 <= " + r + " <= " + q + " <= " + this.buffer.byteLength);}}var s = this.clone();s.offset = r;s.limit = q;return s;};l.toBuffer = function (q) {var t = this.offset,s = this.limit;if (!this.noAssert) {if (typeof t !== "number" || t % 1 !== 0) {throw TypeError("Illegal offset: Not an integer");}t >>>= 0;if (typeof s !== "number" || s % 1 !== 0) {throw TypeError("Illegal limit: Not an integer");}s >>>= 0;if (t < 0 || t > s || s > this.buffer.byteLength) {throw RangeError("Illegal range: 0 <= " + t + " <= " + s + " <= " + this.buffer.byteLength);}}if (!q && t === 0 && s === this.buffer.byteLength) {return this.buffer;}if (t === s) {return p;}var r = new ArrayBuffer(s - t);new Uint8Array(r).set(new Uint8Array(this.buffer).subarray(t, s), 0);return r;};l.toArrayBuffer = l.toBuffer;l.toString = function (s, r, q) {if (typeof s === "undefined") {return "ByteBufferAB(offset=" + this.offset + ",markedOffset=" + this.markedOffset + ",limit=" + this.limit + ",capacity=" + this.capacity() + ")";}if (typeof s === "number") {s = "utf8", r = s, q = r;}switch (s) {case "utf8":return this.toUTF8(r, q);case "base64":return this.toBase64(r, q);case "hex":return this.toHex(r, q);case "binary":return this.toBinary(r, q);case "debug":return this.toDebug();case "columns":return this.toColumns();default:throw Error("Unsupported encoding: " + s);}};var h = function () {var r = {};var u = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 47];var t = [];for (var s = 0, q = u.length; s < q; ++s) {t[u[s]] = s;}r.encode = function (x, y) {var v, w;while ((v = x()) !== null) {y(u[v >> 2 & 63]);w = (v & 3) << 4;if ((v = x()) !== null) {w |= v >> 4 & 15;y(u[(w | v >> 4 & 15) & 63]);w = (v & 15) << 2;if ((v = x()) !== null) {y(u[(w | v >> 6 & 3) & 63]), y(u[v & 63]);} else {y(u[w & 63]), y(61);}} else {y(u[w & 63]), y(61), y(61);}}};r.decode = function (y, A) {var z, x, w;function v(B) {throw Error("Illegal character code: " + B);}while ((z = y()) !== null) {x = t[z];if (typeof x === "undefined") {v(z);}if ((z = y()) !== null) {w = t[z];if (typeof w === "undefined") {v(z);}A(x << 2 >>> 0 | (w & 48) >> 4);if ((z = y()) !== null) {x = t[z];if (typeof x === "undefined") {if (z === 61) {break;} else {v(z);}}A((w & 15) << 4 >>> 0 | (x & 60) >> 2);if ((z = y()) !== null) {w = t[z];if (typeof w === "undefined") {if (z === 61) {break;} else {v(z);}}A((x & 3) << 6 >>> 0 | w);}}}}};r.test = function (v) {return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(v);};return r;}();l.toBase64 = function (r, q) {if (typeof r === "undefined") {r = this.offset;}if (typeof q === "undefined") {q = this.limit;}r = r | 0;q = q | 0;if (r < 0 || q > this.capacity || r > q) {throw RangeError("begin, end");}var s;h.encode(function () {return r < q ? this.view[r++] : null;}.bind(this), s = f());return s();};n.fromBase64 = function (t, r) {if (typeof t !== "string") {throw TypeError("str");}var s = new n(t.length / 4 * 3, r),q = 0;h.decode(b(t), function (u) {s.view[q++] = u;});s.limit = q;return s;};n.btoa = function (q) {return n.fromBinary(q).toBase64();};n.atob = function (q) {return n.fromBase64(q).toBinary();};l.toBinary = function (r, q) {if (typeof r === "undefined") {r = this.offset;}if (typeof q === "undefined") {q = this.limit;}r |= 0;q |= 0;if (r < 0 || q > this.capacity() || r > q) {throw RangeError("begin, end");}if (r === q) {return "";}var s = [],t = [];while (r < q) {s.push(this.view[r++]);if (s.length >= 1024) {t.push(String.fromCharCode.apply(String, s)), s = [];}}return t.join("") + String.fromCharCode.apply(String, s);};n.fromBinary = function (v, t) {if (typeof v !== "string") {throw TypeError("str");}var s = 0,r = v.length,q,u = new n(r, t);while (s < r) {q = v.charCodeAt(s);if (q > 255) {throw RangeError("illegal char code: " + q);}u.view[s++] = q;}u.limit = r;return u;};l.toDebug = function (u) {var t = -1,r = this.buffer.byteLength,q,w = "",v = "",s = "";while (t < r) {if (t !== -1) {q = this.view[t];if (q < 16) {w += "0" + q.toString(16).toUpperCase();} else {w += q.toString(16).toUpperCase();}if (u) {v += q > 32 && q < 127 ? String.fromCharCode(q) : ".";}}++t;if (u) {if (t > 0 && t % 16 === 0 && t !== r) {while (w.length < 3 * 16 + 3) {w += " ";}s += w + v + "\n";w = v = "";}}if (t === this.offset && t === this.limit) {w += t === this.markedOffset ? "!" : "|";} else {if (t === this.offset) {w += t === this.markedOffset ? "[" : "<";} else {if (t === this.limit) {w += t === this.markedOffset ? "]" : ">";} else {w += t === this.markedOffset ? "'" : u || t !== 0 && t !== r ? " " : "";}}}}if (u && w !== " ") {while (w.length < 3 * 16 + 3) {w += " ";}s += w + v + "\n";}return u ? s : w;};n.fromDebug = function (A, s, C) {var w = A.length,z = new n((w + 1) / 3 | 0, s, C);var y = 0,x = 0,q,B,v = false,D = false,r = false,t = false,u = false;while (y < w) {switch (q = A.charAt(y++)) {case "!":if (!C) {if (D || r || t) {u = true;break;}D = r = t = true;}z.offset = z.markedOffset = z.limit = x;v = false;break;case "|":if (!C) {if (D || t) {u = true;break;}D = t = true;}z.offset = z.limit = x;v = false;break;case "[":if (!C) {if (D || r) {u = true;break;}D = r = true;}z.offset = z.markedOffset = x;v = false;break;case "<":if (!C) {if (D) {u = true;break;}D = true;}z.offset = x;v = false;break;case "]":if (!C) {if (t || r) {u = true;break;}t = r = true;}z.limit = z.markedOffset = x;v = false;break;case ">":if (!C) {if (t) {u = true;break;}t = true;}z.limit = x;v = false;break;case "'":if (!C) {if (r) {u = true;break;}r = true;}z.markedOffset = x;v = false;break;case " ":v = false;break;default:if (!C) {if (v) {u = true;break;}}B = parseInt(q + A.charAt(y++), 16);if (!C) {if (isNaN(B) || B < 0 || B > 255) {throw TypeError("Illegal str: Not a debug encoded string");}}z.view[x++] = B;v = true;}if (u) {throw TypeError("Illegal str: Invalid symbol at " + y);}}if (!C) {if (!D || !t) {throw TypeError("Illegal str: Missing offset or limit");}if (x < z.buffer.byteLength) {throw TypeError("Illegal str: Not a debug encoded string (is it hex?) " + x + " < " + w);}}return z;};l.toHex = function (t, r) {t = typeof t === "undefined" ? this.offset : t;r = typeof r === "undefined" ? this.limit : r;if (!this.noAssert) {if (typeof t !== "number" || t % 1 !== 0) {throw TypeError("Illegal begin: Not an integer");}t >>>= 0;if (typeof r !== "number" || r % 1 !== 0) {throw TypeError("Illegal end: Not an integer");}r >>>= 0;if (t < 0 || t > r || r > this.buffer.byteLength) {throw RangeError("Illegal range: 0 <= " + t + " <= " + r + " <= " + this.buffer.byteLength);}}var s = new Array(r - t),q;while (t < r) {q = this.view[t++];if (q < 16) {s.push("0", q.toString(16));} else {s.push(q.toString(16));}}return s.join("");};n.fromHex = function (x, v, u) {if (!u) {if (typeof x !== "string") {throw TypeError("Illegal str: Not a string");}if (x.length % 2 !== 0) {throw TypeError("Illegal str: Length not a multiple of 2");}}var r = x.length,w = new n(r / 2 | 0, v),q;for (var t = 0, s = 0; t < r; t += 2) {q = parseInt(x.substring(t, t + 2), 16);if (!u) {if (!isFinite(q) || q < 0 || q > 255) {throw TypeError("Illegal str: Contains non-hex characters");}}w.view[s++] = q;}w.limit = s;return w;};var o = function () {var q = {};q.MAX_CODEPOINT = 1114111;q.encodeUTF8 = function (s, t) {var r = null;if (typeof s === "number") {r = s, s = function s() {return null;};}while (r !== null || (r = s()) !== null) {if (r < 128) {t(r & 127);} else {if (r < 2048) {t(r >> 6 & 31 | 192), t(r & 63 | 128);} else {if (r < 65536) {t(r >> 12 & 15 | 224), t(r >> 6 & 63 | 128), t(r & 63 | 128);} else {t(r >> 18 & 7 | 240), t(r >> 12 & 63 | 128), t(r >> 6 & 63 | 128), t(r & 63 | 128);}}}r = null;}};q.decodeUTF8 = function (v, x) {var t,r,w,u,s = function s(y) {y = y.slice(0, y.indexOf(null));var z = Error(y.toString());z.name = "TruncatedError";z.bytes = y;throw z;};while ((t = v()) !== null) {if ((t & 128) === 0) {x(t);} else {if ((t & 224) === 192) {(r = v()) === null && s([t, r]), x((t & 31) << 6 | r & 63);} else {if ((t & 240) === 224) {((r = v()) === null || (w = v()) === null) && s([t, r, w]), x((t & 15) << 12 | (r & 63) << 6 | w & 63);} else {if ((t & 248) === 240) {((r = v()) === null || (w = v()) === null || (u = v()) === null) && s([t, r, w, u]), x((t & 7) << 18 | (r & 63) << 12 | (w & 63) << 6 | u & 63);} else {throw RangeError("Illegal starting byte: " + t);}}}}}};q.UTF16toUTF8 = function (t, u) {var s,r = null;while (true) {if ((s = r !== null ? r : t()) === null) {break;}if (s >= 55296 && s <= 57343) {if ((r = t()) !== null) {if (r >= 56320 && r <= 57343) {u((s - 55296) * 1024 + r - 56320 + 65536);r = null;continue;}}}u(s);}if (r !== null) {u(r);}};q.UTF8toUTF16 = function (s, t) {var r = null;if (typeof s === "number") {r = s, s = function s() {return null;};}while (r !== null || (r = s()) !== null) {if (r <= 65535) {t(r);} else {r -= 65536, t((r >> 10) + 55296), t(r % 1024 + 56320);}r = null;}};q.encodeUTF16toUTF8 = function (r, s) {q.UTF16toUTF8(r, function (t) {q.encodeUTF8(t, s);});};q.decodeUTF8toUTF16 = function (r, s) {q.decodeUTF8(r, function (t) {q.UTF8toUTF16(t, s);});};q.calculateCodePoint = function (r) {return r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4;};q.calculateUTF8 = function (t) {var s,r = 0;while ((s = t()) !== null) {r += s < 128 ? 1 : s < 2048 ? 2 : s < 65536 ? 3 : 4;}return r;};q.calculateUTF16asUTF8 = function (s) {var t = 0,r = 0;q.UTF16toUTF8(s, function (u) {++t;r += u < 128 ? 1 : u < 2048 ? 2 : u < 65536 ? 3 : 4;});return [t, r];};return q;}();l.toUTF8 = function (r, q) {if (typeof r === "undefined") {r = this.offset;}if (typeof q === "undefined") {q = this.limit;}if (!this.noAssert) {if (typeof r !== "number" || r % 1 !== 0) {throw TypeError("Illegal begin: Not an integer");}r >>>= 0;if (typeof q !== "number" || q % 1 !== 0) {throw TypeError("Illegal end: Not an integer");}q >>>= 0;if (r < 0 || r > q || q > this.buffer.byteLength) {throw RangeError("Illegal range: 0 <= " + r + " <= " + q + " <= " + this.buffer.byteLength);}}var t;try {o.decodeUTF8toUTF16(function () {return r < q ? this.view[r++] : null;}.bind(this), t = f());} catch (s) {if (r !== q) {throw RangeError("Illegal range: Truncated data, " + r + " != " + q);}}return t();};n.fromUTF8 = function (u, s, r) {if (!r) {if (typeof u !== "string") {throw TypeError("Illegal str: Not a string");}}var t = new n(o.calculateUTF16asUTF8(b(u), true)[1], s, r),q = 0;o.encodeUTF16toUTF8(b(u), function (v) {t.view[q++] = v;});t.limit = q;return t;};return n;}(d);var e = function (j, k, f) {var l = {};l.ByteBuffer = j;l.c = j;var n = j;l.Long = k || null;l.VERSION = "5.0.1";l.WIRE_TYPES = {};l.WIRE_TYPES.VARINT = 0;l.WIRE_TYPES.BITS64 = 1;l.WIRE_TYPES.LDELIM = 2;l.WIRE_TYPES.STARTGROUP = 3;l.WIRE_TYPES.ENDGROUP = 4;l.WIRE_TYPES.BITS32 = 5;l.PACKABLE_WIRE_TYPES = [l.WIRE_TYPES.VARINT, l.WIRE_TYPES.BITS64, l.WIRE_TYPES.BITS32];l.TYPES = { int32: { name: "int32", wireType: l.WIRE_TYPES.VARINT, defaultValue: 0 }, uint32: { name: "uint32", wireType: l.WIRE_TYPES.VARINT, defaultValue: 0 }, sint32: { name: "sint32", wireType: l.WIRE_TYPES.VARINT, defaultValue: 0 }, int64: { name: "int64", wireType: l.WIRE_TYPES.VARINT, defaultValue: l.Long ? l.Long.ZERO : undefined }, uint64: { name: "uint64", wireType: l.WIRE_TYPES.VARINT, defaultValue: l.Long ? l.Long.UZERO : undefined }, sint64: { name: "sint64", wireType: l.WIRE_TYPES.VARINT, defaultValue: l.Long ? l.Long.ZERO : undefined }, bool: { name: "bool", wireType: l.WIRE_TYPES.VARINT, defaultValue: false }, "double": { name: "double", wireType: l.WIRE_TYPES.BITS64, defaultValue: 0 }, string: { name: "string", wireType: l.WIRE_TYPES.LDELIM, defaultValue: "" }, bytes: { name: "bytes", wireType: l.WIRE_TYPES.LDELIM, defaultValue: null }, fixed32: { name: "fixed32", wireType: l.WIRE_TYPES.BITS32, defaultValue: 0 }, sfixed32: { name: "sfixed32", wireType: l.WIRE_TYPES.BITS32, defaultValue: 0 }, fixed64: { name: "fixed64", wireType: l.WIRE_TYPES.BITS64, defaultValue: l.Long ? l.Long.UZERO : undefined }, sfixed64: { name: "sfixed64", wireType: l.WIRE_TYPES.BITS64, defaultValue: l.Long ? l.Long.ZERO : undefined }, "float": { name: "float", wireType: l.WIRE_TYPES.BITS32, defaultValue: 0 }, "enum": { name: "enum", wireType: l.WIRE_TYPES.VARINT, defaultValue: 0 }, message: { name: "message", wireType: l.WIRE_TYPES.LDELIM, defaultValue: null }, group: { name: "group", wireType: l.WIRE_TYPES.STARTGROUP, defaultValue: null } };l.MAP_KEY_TYPES = [l.TYPES.int32, l.TYPES.sint32, l.TYPES.sfixed32, l.TYPES.uint32, l.TYPES.fixed32, l.TYPES.int64, l.TYPES.sint64, l.TYPES.sfixed64, l.TYPES.uint64, l.TYPES.fixed64, l.TYPES.bool, l.TYPES.string, l.TYPES.bytes];l.ID_MIN = 1;l.ID_MAX = 536870911;l.convertFieldsToCamelCase = false;l.populateAccessors = true;l.populateDefaults = true;l.Util = function () {var b = {};b.IS_NODE = !!(typeof process === "object" && process + "" === "[object process]" && !process.browser);b.XHR = function () {var r = [function () {return new XMLHttpRequest();}, function () {return new ActiveXObject("Msxml2.XMLHTTP");}, function () {return new ActiveXObject("Msxml3.XMLHTTP");}, function () {return new ActiveXObject("Microsoft.XMLHTTP");}];var o = null;for (var q = 0; q < r.length; q++) {try {o = r[q]();} catch (p) {continue;}break;}if (!o) {throw Error("XMLHttpRequest is not supported");}return o;};b.fetch = function (q, o) {if (o && typeof o != "function") {o = null;}if (b.IS_NODE) {if (o) {g.readFile(q, function (t, s) {if (t) {o(null);} else {o("" + s);}});} else {try {return g.readFileSync(q);} catch (r) {return null;}}} else {var p = b.XHR();p.open("GET", q, o ? true : false);p.setRequestHeader("Accept", "text/plain");if (typeof p.overrideMimeType === "function") {p.overrideMimeType("text/plain");}if (o) {p.onreadystatechange = function () {if (p.readyState != 4) {return;}if (p.status == 200 || p.status == 0 && typeof p.responseText === "string") {o(p.responseText);} else {o(null);}};if (p.readyState == 4) {return;}p.send(null);} else {p.send(null);if (p.status == 200 || p.status == 0 && typeof p.responseText === "string") {return p.responseText;}return null;}}};b.toCamelCase = function (o) {return o.replace(/_([a-zA-Z])/g, function (p, q) {return q.toUpperCase();});};return b;}();l.Lang = { DELIM: /[\s\{\}=;:\[\],'"\(\)<>]/g, RULE: /^(?:required|optional|repeated|map)$/, TYPE: /^(?:double|float|int32|uint32|sint32|int64|uint64|sint64|fixed32|sfixed32|fixed64|sfixed64|bool|string|bytes)$/, NAME: /^[a-zA-Z_][a-zA-Z_0-9]*$/, TYPEDEF: /^[a-zA-Z][a-zA-Z_0-9]*$/, TYPEREF: /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)+$/, FQTYPEREF: /^(?:\.[a-zA-Z][a-zA-Z_0-9]*)+$/, NUMBER: /^-?(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+|([0-9]*(\.[0-9]*)?([Ee][+-]?[0-9]+)?)|inf|nan)$/, NUMBER_DEC: /^(?:[1-9][0-9]*|0)$/, NUMBER_HEX: /^0[xX][0-9a-fA-F]+$/, NUMBER_OCT: /^0[0-7]+$/, NUMBER_FLT: /^([0-9]*(\.[0-9]*)?([Ee][+-]?[0-9]+)?|inf|nan)$/, BOOL: /^(?:true|false)$/i, ID: /^(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+)$/, NEGID: /^\-?(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+)$/, WHITESPACE: /\s/, STRING: /(?:"([^"\\]*(?:\\.[^"\\]*)*)")|(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g, STRING_DQ: /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g, STRING_SQ: /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g };l.DotProto = function (s, t) {var q = {};var r = function r(o) {this.source = o + "";this.index = 0;this.line = 1;this.stack = [];this._stringOpen = null;};var b = r.prototype;b._readString = function () {var o = this._stringOpen === '"' ? t.STRING_DQ : t.STRING_SQ;o.lastIndex = this.index - 1;var y = o.exec(this.source);if (!y) {throw Error("unterminated string");}this.index = o.lastIndex;this.stack.push(this._stringOpen);this._stringOpen = null;return y[1];};b.next = function () {if (this.stack.length > 0) {return this.stack.shift();}if (this.index >= this.source.length) {return null;}if (this._stringOpen !== null) {return this._readString();}var y, z, A;do {y = false;while (t.WHITESPACE.test(A = this.source.charAt(this.index))) {if (A === "\n") {++this.line;}if (++this.index === this.source.length) {return null;}}if (this.source.charAt(this.index) === "/") {++this.index;if (this.source.charAt(this.index) === "/") {while (this.source.charAt(++this.index) !== "\n") {if (this.index == this.source.length) {return null;}}++this.index;++this.line;y = true;} else {if ((A = this.source.charAt(this.index)) === "*") {do {if (A === "\n") {++this.line;}if (++this.index === this.source.length) {return null;}z = A;A = this.source.charAt(this.index);} while (z !== "*" || A !== "/");++this.index;y = true;} else {return "/";}}}} while (y);if (this.index === this.source.length) {return null;}var C = this.index;t.DELIM.lastIndex = 0;var o = t.DELIM.test(this.source.charAt(C++));if (!o) {while (C < this.source.length && !t.DELIM.test(this.source.charAt(C))) {++C;}}var B = this.source.substring(this.index, this.index = C);if (B === '"' || B === "'") {this._stringOpen = B;}return B;};b.peek = function () {if (this.stack.length === 0) {var o = this.next();if (o === null) {return null;}this.stack.push(o);}return this.stack[0];};b.skip = function (y) {var o = this.next();if (o !== y) {throw Error("illegal '" + o + "', '" + y + "' expected");}};b.omit = function (o) {if (this.peek() === o) {this.next();return true;}return false;};b.toString = function () {return "Tokenizer (" + this.index + "/" + this.source.length + " at line " + this.line + ")";};q.Tokenizer = r;var u = function u(o) {this.tn = new r(o);this.proto3 = false;};var w = u.prototype;w.parse = function () {var A = { name: "[ROOT]", "package": null, messages: [], enums: [], imports: [], options: {}, services: [] };var y,z = true;try {while (y = this.tn.next()) {switch (y) {case "package":if (!z || A["package"] !== null) {throw Error("unexpected 'package'");}y = this.tn.next();if (!t.TYPEREF.test(y)) {throw Error("illegal package name: " + y);}this.tn.skip(";");A["package"] = y;break;case "import":if (!z) {throw Error("unexpected 'import'");}y = this.tn.peek();if (y === "public") {this.tn.next();}y = this._readString();this.tn.skip(";");A.imports.push(y);break;case "syntax":if (!z) {throw Error("unexpected 'syntax'");}this.tn.skip("=");if ((A.syntax = this._readString()) === "proto3") {this.proto3 = true;}this.tn.skip(";");break;case "message":this._parseMessage(A, null);z = false;break;case "enum":this._parseEnum(A);z = false;break;case "option":this._parseOption(A);break;case "service":this._parseService(A);break;case "extend":this._parseExtend(A);break;default:throw Error("unexpected '" + y + "'");}}} catch (o) {o.message = "Parse error at line " + this.tn.line + ": " + o.message;throw o;}delete A.name;return A;};u.parse = function (o) {return new u(o).parse();};function x(y, z) {var o = -1,A = 1;if (y.charAt(0) == "-") {A = -1;y = y.substring(1);}if (t.NUMBER_DEC.test(y)) {o = parseInt(y);} else {if (t.NUMBER_HEX.test(y)) {o = parseInt(y.substring(2), 16);} else {if (t.NUMBER_OCT.test(y)) {o = parseInt(y.substring(1), 8);} else {throw Error("illegal id value: " + (A < 0 ? "-" : "") + y);}}}o = A * o | 0;if (!z && o < 0) {throw Error("illegal id value: " + (A < 0 ? "-" : "") + y);}return o;}function p(o) {var y = 1;if (o.charAt(0) == "-") {y = -1;o = o.substring(1);}if (t.NUMBER_DEC.test(o)) {return y * parseInt(o, 10);} else {if (t.NUMBER_HEX.test(o)) {return y * parseInt(o.substring(2), 16);} else {if (t.NUMBER_OCT.test(o)) {return y * parseInt(o.substring(1), 8);} else {if (o === "inf") {return y * Infinity;} else {if (o === "nan") {return NaN;} else {if (t.NUMBER_FLT.test(o)) {return y * parseFloat(o);}}}}}}throw Error("illegal number value: " + (y < 0 ? "-" : "") + o);}w._readString = function () {var y = "",z,o;do {o = this.tn.next();if (o !== "'" && o !== '"') {throw Error("illegal string delimiter: " + o);}y += this.tn.next();this.tn.skip(o);z = this.tn.peek();} while (z === '"' || z === '"');return y;};w._readValue = function (z) {var y = this.tn.peek(),o;if (y === '"' || y === "'") {return this._readString();}this.tn.next();if (t.NUMBER.test(y)) {return p(y);}if (t.BOOL.test(y)) {return y.toLowerCase() === "true";}if (z && t.TYPEREF.test(y)) {return y;}throw Error("illegal value: " + y);};w._parseOption = function (z, o) {var A = this.tn.next(),y = false;if (A === "(") {y = true;A = this.tn.next();}if (!t.TYPEREF.test(A)) {throw Error("illegal option name: " + A);}var B = A;if (y) {this.tn.skip(")");B = "(" + B + ")";A = this.tn.peek();if (t.FQTYPEREF.test(A)) {B += A;this.tn.next();}}this.tn.skip("=");this._parseOptionValue(z, B);if (!o) {this.tn.skip(";");}};function v(y, z, o) {if (typeof y[z] === "undefined") {y[z] = o;} else {if (!Array.isArray(y[z])) {y[z] = [y[z]];}y[z].push(o);}}w._parseOptionValue = function (o, z) {var y = this.tn.peek();if (y !== "{") {v(o.options, z, this._readValue(true));} else {this.tn.skip("{");while ((y = this.tn.next()) !== "}") {if (!t.NAME.test(y)) {throw Error("illegal option name: " + z + "." + y);}if (this.tn.omit(":")) {v(o.options, z + "." + y, this._readValue(true));} else {this._parseOptionValue(o, z + "." + y);}}}};w._parseService = function (y) {var z = this.tn.next();if (!t.NAME.test(z)) {throw Error("illegal service name at line " + this.tn.line + ": " + z);}var A = z;var o = { name: A, rpc: {}, options: {} };this.tn.skip("{");while ((z = this.tn.next()) !== "}") {if (z === "option") {this._parseOption(o);} else {if (z === "rpc") {this._parseServiceRPC(o);} else {throw Error("illegal service token: " + z);}}}this.tn.omit(";");y.services.push(o);};w._parseServiceRPC = function (y) {var z = "rpc",A = this.tn.next();if (!t.NAME.test(A)) {throw Error("illegal rpc service method name: " + A);}var B = A;var o = { request: null, response: null, request_stream: false, response_stream: false, options: {} };this.tn.skip("(");A = this.tn.next();if (A.toLowerCase() === "stream") {o.request_stream = true;A = this.tn.next();}if (!t.TYPEREF.test(A)) {throw Error("illegal rpc service request type: " + A);}o.request = A;this.tn.skip(")");A = this.tn.next();if (A.toLowerCase() !== "returns") {throw Error("illegal rpc service request type delimiter: " + A);}this.tn.skip("(");A = this.tn.next();if (A.toLowerCase() === "stream") {o.response_stream = true;A = this.tn.next();}o.response = A;this.tn.skip(")");A = this.tn.peek();if (A === "{") {this.tn.next();while ((A = this.tn.next()) !== "}") {if (A === "option") {this._parseOption(o);} else {throw Error("illegal rpc service token: " + A);}}this.tn.omit(";");} else {this.tn.skip(";");}if (typeof y[z] === "undefined") {y[z] = {};}y[z][B] = o;};w._parseMessage = function (z, A) {var o = !!A,B = this.tn.next();var y = { name: "", fields: [], enums: [], messages: [], options: {}, services: [], oneofs: {} };if (!t.NAME.test(B)) {throw Error("illegal " + (o ? "group" : "message") + " name: " + B);}y.name = B;if (o) {this.tn.skip("=");A.id = x(this.tn.next());y.isGroup = true;}B = this.tn.peek();if (B === "[" && A) {this._parseFieldOptions(A);}this.tn.skip("{");while ((B = this.tn.next()) !== "}") {if (t.RULE.test(B)) {this._parseMessageField(y, B);} else {if (B === "oneof") {this._parseMessageOneOf(y);} else {if (B === "enum") {this._parseEnum(y);} else {if (B === "message") {this._parseMessage(y);} else {if (B === "option") {this._parseOption(y);} else {if (B === "service") {this._parseService(y);} else {if (B === "extensions") {y.extensions = this._parseExtensionRanges();} else {if (B === "reserved") {this._parseIgnored();} else {if (B === "extend") {this._parseExtend(y);} else {if (t.TYPEREF.test(B)) {if (!this.proto3) {throw Error("illegal field rule: " + B);}this._parseMessageField(y, "optional", B);} else {throw Error("illegal message token: " + B);}}}}}}}}}}}this.tn.omit(";");z.messages.push(y);return y;};w._parseIgnored = function () {while (this.tn.peek() !== ";") {this.tn.next();}this.tn.skip(";");};w._parseMessageField = function (o, y, z) {if (!t.RULE.test(y)) {throw Error("illegal message field rule: " + y);}var A = { rule: y, type: "", name: "", options: {}, id: 0 };var B;if (y === "map") {if (z) {throw Error("illegal type: " + z);}this.tn.skip("<");B = this.tn.next();if (!t.TYPE.test(B) && !t.TYPEREF.test(B)) {throw Error("illegal message field type: " + B);}A.keytype = B;this.tn.skip(",");B = this.tn.next();if (!t.TYPE.test(B) && !t.TYPEREF.test(B)) {throw Error("illegal message field: " + B);}A.type = B;this.tn.skip(">");B = this.tn.next();if (!t.NAME.test(B)) {throw Error("illegal message field name: " + B);}A.name = B;this.tn.skip("=");A.id = x(this.tn.next());B = this.tn.peek();if (B === "[") {this._parseFieldOptions(A);}this.tn.skip(";");} else {z = typeof z !== "undefined" ? z : this.tn.next();if (z === "group") {var C = this._parseMessage(o, A);if (!/^[A-Z]/.test(C.name)) {throw Error("illegal group name: " + C.name);}A.type = C.name;A.name = C.name.toLowerCase();this.tn.omit(";");} else {if (!t.TYPE.test(z) && !t.TYPEREF.test(z)) {throw Error("illegal message field type: " + z);}A.type = z;B = this.tn.next();if (!t.NAME.test(B)) {throw Error("illegal message field name: " + B);}A.name = B;this.tn.skip("=");A.id = x(this.tn.next());B = this.tn.peek();if (B === "[") {this._parseFieldOptions(A);}this.tn.skip(";");}}o.fields.push(A);return A;};w._parseMessageOneOf = function (o) {var y = this.tn.next();if (!t.NAME.test(y)) {throw Error("illegal oneof name: " + y);}var A = y,z;var B = [];this.tn.skip("{");while ((y = this.tn.next()) !== "}") {z = this._parseMessageField(o, "optional", y);z.oneof = A;B.push(z.id);}this.tn.omit(";");o.oneofs[A] = B;};w._parseFieldOptions = function (y) {this.tn.skip("[");var z,o = true;while ((z = this.tn.peek()) !== "]") {if (!o) {this.tn.skip(",");}this._parseOption(y, true);o = false;}this.tn.next();};w._parseEnum = function (o) {var A = { name: "", values: [], options: {} };var z = this.tn.next();if (!t.NAME.test(z)) {throw Error("illegal name: " + z);}A.name = z;this.tn.skip("{");while ((z = this.tn.next()) !== "}") {if (z === "option") {this._parseOption(A);} else {if (!t.NAME.test(z)) {throw Error("illegal name: " + z);}this.tn.skip("=");var y = { name: z, id: x(this.tn.next(), true) };z = this.tn.peek();if (z === "[") {this._parseFieldOptions({ options: {} });}this.tn.skip(";");A.values.push(y);}}this.tn.omit(";");o.enums.push(A);};w._parseExtensionRanges = function () {var A = [];var y, z, o;do {z = [];while (true) {y = this.tn.next();switch (y) {case "min":o = s.ID_MIN;break;case "max":o = s.ID_MAX;break;default:o = p(y);break;}z.push(o);if (z.length === 2) {break;}if (this.tn.peek() !== "to") {z.push(o);break;}this.tn.next();}A.push(z);} while (this.tn.omit(","));this.tn.skip(";");return A;};w._parseExtend = function (o) {var z = this.tn.next();if (!t.TYPEREF.test(z)) {throw Error("illegal extend reference: " + z);}var y = { ref: z, fields: [] };this.tn.skip("{");while ((z = this.tn.next()) !== "}") {if (t.RULE.test(z)) {this._parseMessageField(y, z);} else {if (t.TYPEREF.test(z)) {if (!this.proto3) {throw Error("illegal field rule: " + z);}this._parseMessageField(y, "optional", z);} else {throw Error("illegal extend token: " + z);}}}this.tn.omit(";");o.messages.push(y);return y;};w.toString = function () {return "Parser at line " + this.tn.line;};q.Parser = u;return q;}(l, l.Lang);l.Reflect = function (V) {var aa = {};var Z = function Z(q, o, p) {this.builder = q;this.parent = o;this.name = p;this.className;};var ab = Z.prototype;ab.fqn = function () {var p = this.name,o = this;do {o = o.parent;if (o == null) {break;}p = o.name + "." + p;} while (true);return p;};ab.toString = function (o) {return (o ? this.className + " " : "") + this.fqn();};ab.build = function () {throw Error(this.toString(true) + " cannot be built directly");};aa.T = Z;var P = function P(r, o, p, q, s) {Z.call(this, r, o, p);this.className = "Namespace";this.children = [];this.options = q || {};this.syntax = s || "proto2";};var H = P.prototype = Object.create(Z.prototype);H.getChildren = function (o) {o = o || null;if (o == null) {return this.children.slice();}var p = [];for (var q = 0, r = this.children.length; q < r; ++q) {if (this.children[q] instanceof o) {p.push(this.children[q]);}}return p;};H.addChild = function (o) {var p;if (p = this.getChild(o.name)) {if (p instanceof ad.Field && p.name !== p.originalName && this.getChild(p.originalName) === null) {p.name = p.originalName;} else {if (o instanceof ad.Field && o.name !== o.originalName && this.getChild(o.originalName) === null) {o.name = o.originalName;} else {throw Error("Duplicate name in namespace " + this.toString(true) + ": " + o.name);}}}this.children.push(o);};H.getChild = function (o) {var p = typeof o === "number" ? "id" : "name";for (var q = 0, r = this.children.length; q < r; ++q) {if (this.children[q][p] === o) {return this.children[q];}}return null;};H.resolve = function (q, t) {var s = typeof q === "string" ? q.split(".") : q,o = this,r = 0;if (s[r] === "") {while (o.parent !== null) {o = o.parent;}r++;}var p;do {do {if (!(o instanceof aa.Namespace)) {o = null;break;}p = o.getChild(s[r]);if (!p || !(p instanceof aa.T) || t && !(p instanceof aa.Namespace)) {o = null;break;}o = p;r++;} while (r < s.length);if (o != null) {break;}if (this.parent !== null) {return this.parent.resolve(q, t);}} while (o != null);return o;};H.qn = function (q) {var r = [],o = q;do {r.unshift(o.name);o = o.parent;} while (o !== null);for (var s = 1; s <= r.length; s++) {var p = r.slice(r.length - s);if (q === this.resolve(p, q instanceof aa.Namespace)) {return p.join(".");}}return q.fqn();};H.build = function () {var p = {};var q = this.children;for (var r = 0, s = q.length, o; r < s; ++r) {o = q[r];if (o instanceof P) {p[o.name] = o.build();}}if (Object.defineProperty) {Object.defineProperty(p, "$options", { value: this.buildOpt() });}return p;};H.buildOpt = function () {var q = {},p = Object.keys(this.options);for (var r = 0, t = p.length; r < t; ++r) {var s = p[r],o = this.options[p[r]];q[s] = o;}return q;};H.getOption = function (o) {if (typeof o === "undefined") {return this.options;}return typeof this.options[o] !== "undefined" ? this.options[o] : null;};aa.Namespace = P;var J = function J(o, q, p, r) {this.type = o;this.resolvedType = q;this.isMapKey = p;this.syntax = r;if (p && V.MAP_KEY_TYPES.indexOf(o) < 0) {throw Error("Invalid map key type: " + o.name);}};var b = J.prototype;function F(o) {if (typeof o === "string") {o = V.TYPES[o];}if (typeof o.defaultValue === "undefined") {throw Error("default value for type " + o.name + " is not supported");}if (o == V.TYPES.bytes) {return new n(0);}return o.defaultValue;}J.defaultFieldValue = F;function W(o, p) {if (o && typeof o.low === "number" && typeof o.high === "number" && typeof o.unsigned === "boolean" && o.low === o.low && o.high === o.high) {return new V.Long(o.low, o.high, typeof p === "undefined" ? o.unsigned : p);}if (typeof o === "string") {return V.Long.fromString(o, p || false, 10);}if (typeof o === "number") {return V.Long.fromNumber(o, p || false);}throw Error("not convertible to Long");}b.verifyValue = function (q) {var t = function (v, u) {throw Error("Illegal value for " + this.toString(true) + " of type " + this.type.name + ": " + v + " (" + u + ")");}.bind(this);switch (this.type) {case V.TYPES.int32:case V.TYPES.sint32:case V.TYPES.sfixed32:if (typeof q !== "number" || q === q && q % 1 !== 0) {t(typeof q, "not an integer");}return q > 4294967295 ? q | 0 : q;case V.TYPES.uint32:case V.TYPES.fixed32:if (typeof q !== "number" || q === q && q % 1 !== 0) {t(typeof q, "not an integer");}return q < 0 ? q >>> 0 : q;case V.TYPES.int64:case V.TYPES.sint64:case V.TYPES.sfixed64:if (V.Long) {try {return W(q, false);} catch (o) {t(typeof q, o.message);}} else {t(typeof q, "requires Long.js");}case V.TYPES.uint64:case V.TYPES.fixed64:if (V.Long) {try {return W(q, true);} catch (o) {t(typeof q, o.message);}} else {t(typeof q, "requires Long.js");}case V.TYPES.bool:if (typeof q !== "boolean") {t(typeof q, "not a boolean");}return q;case V.TYPES["float"]:case V.TYPES["double"]:if (typeof q !== "number") {t(typeof q, "not a number");}return q;case V.TYPES.string:if (typeof q !== "string" && !(q && q instanceof String)) {t(typeof q, "not a string");}return "" + q;case V.TYPES.bytes:if (j.isByteBuffer(q)) {return q;}return j.wrap(q);case V.TYPES["enum"]:var s = this.resolvedType.getChildren(V.Reflect.Enum.Value);for (r = 0; r < s.length; r++) {if (s[r].name == q) {return s[r].id;} else {if (s[r].id == q) {return s[r].id;}}}if (this.syntax === "proto3") {if (typeof q !== "number" || q === q && q % 1 !== 0) {t(typeof q, "not an integer");}if (q > 4294967295 || q < 0) {t(typeof q, "not in range for uint32");}return q;} else {t(q, "not a valid enum value");}case V.TYPES.group:case V.TYPES.message:if (!q || typeof q !== "object") {t(typeof q, "object expected");}if (q instanceof this.resolvedType.clazz) {return q;}if (q instanceof V.Builder.Message) {var p = {};for (var r in q) {if (q.hasOwnProperty(r)) {p[r] = q[r];}}q = p;}return new this.resolvedType.clazz(q);}throw Error("[INTERNAL] Illegal value for " + this.toString(true) + ": " + q + " (undefined type " + this.type + ")");};b.calculateLength = function (o, q) {if (q === null) {return 0;}var p;switch (this.type) {case V.TYPES.int32:return q < 0 ? n.calculateVarint64(q) : n.calculateVarint32(q);case V.TYPES.uint32:return n.calculateVarint32(q);case V.TYPES.sint32:return n.calculateVarint32(n.zigZagEncode32(q));case V.TYPES.fixed32:case V.TYPES.sfixed32:case V.TYPES["float"]:return 4;case V.TYPES.int64:case V.TYPES.uint64:return n.calculateVarint64(q);case V.TYPES.sint64:return n.calculateVarint64(n.zigZagEncode64(q));case V.TYPES.fixed64:case V.TYPES.sfixed64:return 8;case V.TYPES.bool:return 1;case V.TYPES["enum"]:return n.calculateVarint32(q);case V.TYPES["double"]:return 8;case V.TYPES.string:p = n.calculateUTF8Bytes(q);return n.calculateVarint32(p) + p;case V.TYPES.bytes:if (q.remaining() < 0) {throw Error("Illegal value for " + this.toString(true) + ": " + q.remaining() + " bytes remaining");}return n.calculateVarint32(q.remaining()) + q.remaining();case V.TYPES.message:p = this.resolvedType.calculate(q);return n.calculateVarint32(p) + p;case V.TYPES.group:p = this.resolvedType.calculate(q);return p + n.calculateVarint32(o << 3 | V.WIRE_TYPES.ENDGROUP);}throw Error("[INTERNAL] Illegal value to encode in " + this.toString(true) + ": " + q + " (unknown type)");};b.encodeValue = function (o, r, s) {if (r === null) {return s;}switch (this.type) {case V.TYPES.int32:if (r < 0) {s.writeVarint64(r);} else {s.writeVarint32(r);}break;case V.TYPES.uint32:s.writeVarint32(r);break;case V.TYPES.sint32:s.writeVarint32ZigZag(r);break;case V.TYPES.fixed32:s.writeUint32(r);break;case V.TYPES.sfixed32:s.writeInt32(r);break;case V.TYPES.int64:case V.TYPES.uint64:s.writeVarint64(r);break;case V.TYPES.sint64:s.writeVarint64ZigZag(r);break;case V.TYPES.fixed64:s.writeUint64(r);break;case V.TYPES.sfixed64:s.writeInt64(r);break;case V.TYPES.bool:if (typeof r === "string") {s.writeVarint32(r.toLowerCase() === "false" ? 0 : !!r);} else {s.writeVarint32(r ? 1 : 0);}break;case V.TYPES["enum"]:s.writeVarint32(r);break;case V.TYPES["float"]:s.writeFloat32(r);break;case V.TYPES["double"]:s.writeFloat64(r);break;case V.TYPES.string:s.writeVString(r);break;case V.TYPES.bytes:if (r.remaining() < 0) {throw Error("Illegal value for " + this.toString(true) + ": " + r.remaining() + " bytes remaining");}var q = r.offset;s.writeVarint32(r.remaining());s.append(r);r.offset = q;break;case V.TYPES.message:var p = new n().LE();this.resolvedType.encode(r, p);s.writeVarint32(p.offset);s.append(p.flip());break;case V.TYPES.group:this.resolvedType.encode(r, s);s.writeVarint32(o << 3 | V.WIRE_TYPES.ENDGROUP);break;default:throw Error("[INTERNAL] Illegal value to encode in " + this.toString(true) + ": " + r + " (unknown type)");}return s;};b.decode = function (r, s, o) {if (s != this.type.wireType) {throw Error("Unexpected wire type for element");}var q, p;switch (this.type) {case V.TYPES.int32:return r.readVarint32() | 0;case V.TYPES.uint32:return r.readVarint32() >>> 0;case V.TYPES.sint32:return r.readVarint32ZigZag() | 0;case V.TYPES.fixed32:return r.readUint32() >>> 0;case V.TYPES.sfixed32:return r.readInt32() | 0;case V.TYPES.int64:return r.readVarint64();case V.TYPES.uint64:return r.readVarint64().toUnsigned();case V.TYPES.sint64:return r.readVarint64ZigZag();case V.TYPES.fixed64:return r.readUint64();case V.TYPES.sfixed64:return r.readInt64();case V.TYPES.bool:return !!r.readVarint32();case V.TYPES["enum"]:return r.readVarint32();case V.TYPES["float"]:return r.readFloat();case V.TYPES["double"]:return r.readDouble();case V.TYPES.string:return r.readVString();case V.TYPES.bytes:p = r.readVarint32();if (r.remaining() < p) {throw Error("Illegal number of bytes for " + this.toString(true) + ": " + p + " required but got only " + r.remaining());}q = r.clone();q.limit = q.offset + p;r.offset += p;return q;case V.TYPES.message:p = r.readVarint32();return this.resolvedType.decode(r, p);case V.TYPES.group:return this.resolvedType.decode(r, -1, o);}throw Error("[INTERNAL] Illegal decode type");};b.valueFromString = function (o) {if (!this.isMapKey) {throw Error("valueFromString() called on non-map-key element");}switch (this.type) {case V.TYPES.int32:case V.TYPES.sint32:case V.TYPES.sfixed32:case V.TYPES.uint32:case V.TYPES.fixed32:return this.verifyValue(parseInt(o));case V.TYPES.int64:case V.TYPES.sint64:case V.TYPES.sfixed64:case V.TYPES.uint64:case V.TYPES.fixed64:return this.verifyValue(o);case V.TYPES.bool:return o === "true";case V.TYPES.string:return this.verifyValue(o);case V.TYPES.bytes:return n.fromBinary(o);}};b.valueToString = function (o) {if (!this.isMapKey) {throw Error("valueToString() called on non-map-key element");}if (this.type === V.TYPES.bytes) {return o.toString("binary");} else {return o.toString();}};aa.Element = J;var ad = function ad(s, p, q, r, o, t) {P.call(this, s, p, q, r, t);this.className = "Message";this.extensions = undefined;this.clazz = null;this.isGroup = !!o;this._fields = null;this._fieldsById = null;this._fieldsByName = null;};var L = ad.prototype = Object.create(P.prototype);L.build = function (s) {if (this.clazz && !s) {return this.clazz;}var q = function (y, E) {var A = E.getChildren(y.Reflect.Message.Field),v = E.getChildren(y.Reflect.Message.OneOf);var x = function x(ak, ag) {y.Builder.Message.call(this);for (var aj = 0, af = v.length; aj < af; ++aj) {this[v[aj].name] = null;}for (aj = 0, af = A.length; aj < af; ++aj) {var ah = A[aj];this[ah.name] = ah.repeated ? [] : ah.map ? new y.Map(ah) : null;if ((ah.required || E.syntax === "proto3") && ah.defaultValue !== null) {this[ah.name] = ah.defaultValue;}}if (arguments.length > 0) {var ai;if (arguments.length === 1 && ak !== null && typeof ak === "object" && (typeof ak.encode !== "function" || ak instanceof x) && !Array.isArray(ak) && !(ak instanceof y.Map) && !n.isByteBuffer(ak) && !(ak instanceof ArrayBuffer) && !(y.Long && ak instanceof y.Long)) {this.$set(ak);} else {for (aj = 0, af = arguments.length; aj < af; ++aj) {if (typeof (ai = arguments[aj]) !== "undefined") {this.$set(A[aj].name, ai);}}}}};var B = x.prototype = Object.create(y.Builder.Message.prototype);B.add = function (af, ai, ah) {var ag = E._fieldsByName[af];if (!ah) {if (!ag) {throw Error(this + "#" + af + " is undefined");}if (!(ag instanceof y.Reflect.Message.Field)) {throw Error(this + "#" + af + " is not a field: " + ag.toString(true));}if (!ag.repeated) {throw Error(this + "#" + af + " is not a repeated field");}ai = ag.verifyValue(ai, true);}if (this[af] === null) {this[af] = [];}this[af].push(ai);return this;};B.$add = B.add;B.set = function (ag, ak, ah) {if (ag && typeof ag === "object") {ah = ak;for (var aj in ag) {if (ag.hasOwnProperty(aj) && typeof (ak = ag[aj]) !== "undefined") {this.$set(aj, ak, ah);}}return this;}var ai = E._fieldsByName[ag];if (!ah) {if (!ai) {throw Error(this + "#" + ag + " is not a field: undefined");}if (!(ai instanceof y.Reflect.Message.Field)) {throw Error(this + "#" + ag + " is not a field: " + ai.toString(true));}this[ai.name] = ak = ai.verifyValue(ak);} else {this[ag] = ak;}if (ai && ai.oneof) {var af = this[ai.oneof.name];if (ak !== null) {if (af !== null && af !== ai.name) {this[af] = null;}this[ai.oneof.name] = ai.name;} else {if (af === ag) {this[ai.oneof.name] = null;}}}return this;};B.$set = B.set;B.get = function (af, ag) {if (ag) {return this[af];}var ah = E._fieldsByName[af];if (!ah || !(ah instanceof y.Reflect.Message.Field)) {throw Error(this + "#" + af + " is not a field: undefined");}if (!(ah instanceof y.Reflect.Message.Field)) {throw Error(this + "#" + af + " is not a field: " + ah.toString(true));}return this[ah.name];};B.$get = B.get;for (var D = 0; D < A.length; D++) {var w = A[D];if (w instanceof y.Reflect.Message.ExtensionField) {continue;}if (E.builder.options.populateAccessors) {(function (ai) {var aj = ai.originalName.replace(/(_[a-zA-Z])/g, function (ak) {return ak.toUpperCase().replace("_", "");});aj = aj.substring(0, 1).toUpperCase() + aj.substring(1);var ah = ai.originalName.replace(/([A-Z])/g, function (ak) {return "_" + ak;});var ag = function ag(al, ak) {this[ai.name] = ak ? al : ai.verifyValue(al);return this;};var af = function af() {return this[ai.name];};if (E.getChild("set" + aj) === null) {B["set" + aj] = ag;}if (E.getChild("set_" + ah) === null) {B["set_" + ah] = ag;}if (E.getChild("get" + aj) === null) {B["get" + aj] = af;}if (E.getChild("get_" + ah) === null) {B["get_" + ah] = af;}})(w);}}B.encode = function (aj, ai) {if (typeof aj === "boolean") {ai = aj, aj = undefined;}var af = false;if (!aj) {aj = new j(), af = true;}var ah = aj.littleEndian;try {E.encode(this, aj.LE(), ai);return (af ? aj.flip() : aj).LE(ah);} catch (ag) {aj.LE(ah);throw ag;}};x.encode = function (ag, af, ah) {return new x(ag).encode(af, ah);};B.calculate = function () {return E.calculate(this);};B.encodeDelimited = function (ah) {var af = false;if (!ah) {ah = new n(), af = true;}var ag = new n().LE();E.encode(this, ag).flip();ah.writeVarint32(ag.remaining());ah.append(ag);return af ? ah.flip() : ah;};B.encodeAB = function () {try {return this.encode().toArrayBuffer();} catch (af) {if (af.encoded) {af.encoded = af.encoded.toArrayBuffer();}throw af;}};B.toArrayBuffer = B.encodeAB;B.encodeNB = function () {try {return this.encode().toBuffer();} catch (af) {if (af.encoded) {af.encoded = af.encoded.toBuffer();}throw af;}};B.toBuffer = B.encodeNB;B.encode64 = function () {try {return this.encode().toBase64();} catch (af) {if (af.encoded) {af.encoded = af.encoded.toBase64();}throw af;}};B.toBase64 = B.encode64;B.encodeHex = function () {try {return this.encode().toHex();} catch (af) {if (af.encoded) {af.encoded = af.encoded.toHex();}throw af;}};B.toHex = B.encodeHex;function u(aj, aq, at, am) {if (aj === null || typeof aj !== "object") {if (am && am instanceof y.Reflect.Enum) {var al = y.Reflect.Enum.getName(am.object, aj);if (al !== null) {return al;}}return aj;}if (n.isByteBuffer(aj)) {return aq ? aj.toBase64() : aj.toBuffer();}if (y.Long.isLong(aj)) {return at ? aj.toString() : y.Long.fromValue(aj);}var ao;if (Array.isArray(aj)) {ao = [];aj.forEach(function (ag, af) {ao[af] = u(ag, aq, at, am);});return ao;}ao = {};if (aj instanceof y.Map) {var ai = aj.entries();for (var ar = ai.next(); !ar.done; ar = ai.next()) {ao[aj.keyElem.valueToString(ar.value[0])] = u(ar.value[1], aq, at, aj.valueElem.resolvedType);}return ao;}var ap = aj.$type,an = undefined;for (var ak in aj) {if (aj.hasOwnProperty(ak)) {if (ap && (an = ap.getChild(ak))) {ao[ak] = u(aj[ak], aq, at, an.resolvedType);} else {ao[ak] = u(aj[ak], aq, at);}}}return ao;}B.toRaw = function (af, ag) {return u(this, !!af, !!ag, this.$type);};B.encodeJSON = function () {return JSON.stringify(u(this, true, true, this.$type));};x.decode = function (af, aj) {if (typeof af === "string") {af = n.wrap(af, aj ? aj : "base64");}af = n.isByteBuffer(af) ? af : n.wrap(af);var ai = af.littleEndian;try {var ag = E.decode(af.LE());af.LE(ai);return ag;} catch (ah) {af.LE(ai);throw ah;}};x.decodeDelimited = function (ak, aj) {if (typeof ak === "string") {ak = n.wrap(ak, aj ? aj : "base64");}ak = n.isByteBuffer(ak) ? ak : n.wrap(ak);if (ak.remaining() < 1) {return null;}var ag = ak.offset,af = ak.readVarint32();if (ak.remaining() < af) {ak.offset = ag;return null;}try {var ah = E.decode(ak.slice(ak.offset, ak.offset + af).LE());ak.offset += af;return ah;} catch (ai) {ak.offset += af;throw ai;}};x.decode64 = function (af) {return x.decode(af, "base64");};x.decodeHex = function (af) {return x.decode(af, "hex");};x.decodeJSON = function (af) {return new x(JSON.parse(af));};B.toString = function () {return E.toString();};var ae;var C;var t;var z;if (Object.defineProperty) {Object.defineProperty(x, "$options", { value: E.buildOpt() }), Object.defineProperty(B, "$options", { value: x["$options"] }), Object.defineProperty(x, "$type", { value: E }), Object.defineProperty(B, "$type", { value: E });}return x;}(V, this);this._fields = [];this._fieldsById = {};this._fieldsByName = {};for (var p = 0, r = this.children.length, o; p < r; p++) {o = this.children[p];if (o instanceof M || o instanceof ad || o instanceof Q) {if (q.hasOwnProperty(o.name)) {throw Error("Illegal reflect child of " + this.toString(true) + ": " + o.toString(true) + " cannot override static property '" + o.name + "'");}q[o.name] = o.build();} else {if (o instanceof ad.Field) {o.build(), this._fields.push(o), this._fieldsById[o.id] = o, this._fieldsByName[o.name] = o;} else {if (!(o instanceof ad.OneOf) && !(o instanceof T)) {throw Error("Illegal reflect child of " + this.toString(true) + ": " + this.children[p].toString(true));}}}}return this.clazz = q;};L.encode = function (o, s, r) {var w = null,p;for (var q = 0, t = this._fields.length, v; q < t; ++q) {p = this._fields[q];v = o[p.name];if (p.required && v === null) {if (w === null) {w = p;}} else {p.encode(r ? v : p.verifyValue(v), s, o);}}if (w !== null) {var u = Error("Missing at least one required field for " + this.toString(true) + ": " + w);u.encoded = s;throw u;}return s;};L.calculate = function (r) {for (var o = 0, s = 0, t = this._fields.length, q, p; s < t; ++s) {q = this._fields[s];p = r[q.name];if (q.required && p === null) {throw Error("Missing at least one required field for " + this.toString(true) + ": " + q);} else {o += q.calculate(p, r);}}return o;};function O(p, q) {var r = q.readVarint32(),s = r & 7,o = r >>> 3;switch (s) {case V.WIRE_TYPES.VARINT:do {r = q.readUint8();} while ((r & 128) === 128);break;case V.WIRE_TYPES.BITS64:q.offset += 8;break;case V.WIRE_TYPES.LDELIM:r = q.readVarint32();q.offset += r;break;case V.WIRE_TYPES.STARTGROUP:O(o, q);break;case V.WIRE_TYPES.ENDGROUP:if (o === p) {return false;} else {throw Error("Illegal GROUPEND after unknown group: " + o + " (" + p + " expected)");}case V.WIRE_TYPES.BITS32:q.offset += 4;break;default:throw Error("Illegal wire type in unknown group " + p + ": " + s);}return true;}L.decode = function (w, A, u) {A = typeof A === "number" ? A : -1;var C = w.offset,z = new this.clazz(),o,p,B,r;while (w.offset < C + A || A === -1 && w.remaining() > 0) {o = w.readVarint32();p = o & 7;B = o >>> 3;if (p === V.WIRE_TYPES.ENDGROUP) {if (B !== u) {throw Error("Illegal group end indicator for " + this.toString(true) + ": " + B + " (" + (u ? u + " expected" : "not a group") + ")");}break;}if (!(r = this._fieldsById[B])) {switch (p) {case V.WIRE_TYPES.VARINT:w.readVarint32();break;case V.WIRE_TYPES.BITS32:w.offset += 4;break;case V.WIRE_TYPES.BITS64:w.offset += 8;break;case V.WIRE_TYPES.LDELIM:var t = w.readVarint32();w.offset += t;break;case V.WIRE_TYPES.STARTGROUP:while (O(B, w)) {}break;default:throw Error("Illegal wire type for unknown field " + B + " in " + this.toString(true) + "#decode: " + p);}continue;}if (r.repeated && !r.options.packed) {z[r.name].push(r.decode(p, w));} else {if (r.map) {var s = r.decode(p, w);z[r.name].set(s[0], s[1]);} else {z[r.name] = r.decode(p, w);if (r.oneof) {var q = z[r.oneof.name];if (q !== null && q !== r.name) {z[q] = null;}z[r.oneof.name] = r.name;}}}}for (var v = 0, x = this._fields.length; v < x; ++v) {r = this._fields[v];if (z[r.name] === null) {if (this.syntax === "proto3") {z[r.name] = r.defaultValue;} else {if (r.required) {var y = Error("Missing at least one required field for " + this.toString(true) + ": " + r.name);y.decoded = z;throw y;} else {if (V.populateDefaults && r.defaultValue !== null) {z[r.name] = r.defaultValue;}}}}}return z;};aa.Message = ad;var X = function X(t, p, q, v, r, x, w, o, s, u) {Z.call(this, t, p, x);this.className = "Message.Field";this.required = q === "required";this.repeated = q === "repeated";this.map = q === "map";this.keyType = v || null;this.type = r;this.resolvedType = null;this.id = w;this.options = o || {};this.defaultValue = null;this.oneof = s || null;this.syntax = u || "proto2";this.originalName = this.name;this.element = null;this.keyElement = null;if (this.builder.options.convertFieldsToCamelCase && !(this instanceof ad.ExtensionField)) {this.name = V.Util.toCamelCase(this.name);}};var N = X.prototype = Object.create(Z.prototype);N.build = function () {this.element = new J(this.type, this.resolvedType, false, this.syntax);if (this.map) {this.keyElement = new J(this.keyType, undefined, true, this.syntax);}if (this.syntax === "proto3" && !this.repeated && !this.map) {this.defaultValue = J.defaultFieldValue(this.type);} else {if (typeof this.options["default"] !== "undefined") {this.defaultValue = this.verifyValue(this.options["default"]);}}};N.verifyValue = function (o, r) {r = r || false;var s = function (t, u) {throw Error("Illegal value for " + this.toString(true) + " of type " + this.type.name + ": " + t + " (" + u + ")");}.bind(this);if (o === null) {if (this.required) {s(typeof o, "required");}if (this.syntax === "proto3" && this.type !== V.TYPES.message) {s(typeof o, "proto3 field without field presence cannot be null");}return null;}var p;if (this.repeated && !r) {if (!Array.isArray(o)) {o = [o];}var q = [];for (p = 0; p < o.length; p++) {q.push(this.element.verifyValue(o[p]));}return q;}if (this.map && !r) {if (!(o instanceof V.Map)) {if (!(o instanceof Object)) {s(typeof o, "expected ProtoBuf.Map or raw object for map field");}return new V.Map(this, o);} else {return o;}}if (!this.repeated && Array.isArray(o)) {s(typeof o, "no array expected");}return this.element.verifyValue(o);};N.hasWirePresence = function (o, p) {if (this.syntax !== "proto3") {return o !== null;}if (this.oneof && p[this.oneof.name] === this.name) {return true;}switch (this.type) {case V.TYPES.int32:case V.TYPES.sint32:case V.TYPES.sfixed32:case V.TYPES.uint32:case V.TYPES.fixed32:return o !== 0;case V.TYPES.int64:case V.TYPES.sint64:case V.TYPES.sfixed64:case V.TYPES.uint64:case V.TYPES.fixed64:return o.low !== 0 || o.high !== 0;case V.TYPES.bool:return o;case V.TYPES["float"]:case V.TYPES["double"]:return o !== 0;case V.TYPES.string:return o.length > 0;case V.TYPES.bytes:return o.remaining() > 0;case V.TYPES["enum"]:return o !== 0;case V.TYPES.message:return o !== null;default:return true;}};N.encode = function (p, t, o) {if (this.type === null || typeof this.type !== "object") {throw Error("[INTERNAL] Unresolved type in " + this.toString(true) + ": " + this.type);}if (p === null || this.repeated && p.length == 0) {return t;}try {if (this.repeated) {var s;if (this.options.packed && V.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0) {t.writeVarint32(this.id << 3 | V.WIRE_TYPES.LDELIM);t.ensureCapacity(t.offset += 1);var w = t.offset;for (s = 0; s < p.length; s++) {this.element.encodeValue(this.id, p[s], t);}var r = t.offset - w,u = n.calculateVarint32(r);if (u > 1) {var v = t.slice(w, t.offset);w += u - 1;t.offset = w;t.append(v);}t.writeVarint32(r, w - u);} else {for (s = 0; s < p.length; s++) {t.writeVarint32(this.id << 3 | this.type.wireType), this.element.encodeValue(this.id, p[s], t);}}} else {if (this.map) {p.forEach(function (x, z, A) {var y = n.calculateVarint32(1 << 3 | this.keyType.wireType) + this.keyElement.calculateLength(1, z) + n.calculateVarint32(2 << 3 | this.type.wireType) + this.element.calculateLength(2, x);t.writeVarint32(this.id << 3 | V.WIRE_TYPES.LDELIM);t.writeVarint32(y);t.writeVarint32(1 << 3 | this.keyType.wireType);this.keyElement.encodeValue(1, z, t);t.writeVarint32(2 << 3 | this.type.wireType);this.element.encodeValue(2, x, t);}, this);} else {if (this.hasWirePresence(p, o)) {t.writeVarint32(this.id << 3 | this.type.wireType);this.element.encodeValue(this.id, p, t);}}}} catch (q) {throw Error("Illegal value for " + this.toString(true) + ": " + p + " (" + q + ")");}return t;};N.calculate = function (q, r) {q = this.verifyValue(q);if (this.type === null || typeof this.type !== "object") {throw Error("[INTERNAL] Unresolved type in " + this.toString(true) + ": " + this.type);}if (q === null || this.repeated && q.length == 0) {return 0;}var o = 0;try {if (this.repeated) {var s, t;if (this.options.packed && V.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0) {o += n.calculateVarint32(this.id << 3 | V.WIRE_TYPES.LDELIM);t = 0;for (s = 0; s < q.length; s++) {t += this.element.calculateLength(this.id, q[s]);}o += n.calculateVarint32(t);o += t;} else {for (s = 0; s < q.length; s++) {o += n.calculateVarint32(this.id << 3 | this.type.wireType), o += this.element.calculateLength(this.id, q[s]);}}} else {if (this.map) {q.forEach(function (v, x, u) {var w = n.calculateVarint32(1 << 3 | this.keyType.wireType) + this.keyElement.calculateLength(1, x) + n.calculateVarint32(2 << 3 | this.type.wireType) + this.element.calculateLength(2, v);o += n.calculateVarint32(this.id << 3 | V.WIRE_TYPES.LDELIM);o += n.calculateVarint32(w);o += w;}, this);} else {if (this.hasWirePresence(q, r)) {o += n.calculateVarint32(this.id << 3 | this.type.wireType);o += this.element.calculateLength(this.id, q);}}}} catch (p) {throw Error("Illegal value for " + this.toString(true) + ": " + q + " (" + p + ")");}return o;};N.decode = function (s, x, v) {var t, w;var p = !this.map && s == this.type.wireType || !v && this.repeated && this.options.packed && s == V.WIRE_TYPES.LDELIM || this.map && s == V.WIRE_TYPES.LDELIM;if (!p) {throw Error("Illegal wire type for field " + this.toString(true) + ": " + s + " (" + this.type.wireType + " expected)");}if (s == V.WIRE_TYPES.LDELIM && this.repeated && this.options.packed && V.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0) {if (!v) {w = x.readVarint32();w = x.offset + w;var q = [];while (x.offset < w) {q.push(this.decode(this.type.wireType, x, true));}return q;}}if (this.map) {var r = J.defaultFieldValue(this.keyType);t = J.defaultFieldValue(this.type);w = x.readVarint32();if (x.remaining() < w) {throw Error("Illegal number of bytes for " + this.toString(true) + ": " + w + " required but got only " + x.remaining());}var u = x.clone();u.limit = u.offset + w;x.offset += w;while (u.remaining() > 0) {var o = u.readVarint32();s = o & 7;var y = o >>> 3;if (y === 1) {r = this.keyElement.decode(u, s, y);} else {if (y === 2) {t = this.element.decode(u, s, y);} else {throw Error("Unexpected tag in map field key/value submessage");}}}return [r, t];}return this.element.decode(x, s, this.id);};aa.Message.Field = X;var I = function I(u, q, p, r, s, o, t) {X.call(this, u, q, p, null, r, s, o, t);this.extension;};I.prototype = Object.create(X.prototype);aa.Message.ExtensionField = I;var G = function G(q, o, p) {Z.call(this, q, o, p);this.fields = [];};aa.Message.OneOf = G;var M = function M(r, o, p, q, s) {P.call(this, r, o, p, q, s);this.className = "Enum";this.object = null;};M.getName = function (s, o) {var p = Object.keys(s);for (var q = 0, r; q < p.length; ++q) {if (s[r = p[q]] === o) {return r;}}return null;};var Y = M.prototype = Object.create(P.prototype);Y.build = function (s) {if (this.object && !s) {return this.object;}var p = new V.Builder.Enum(),q = this.getChildren(M.Value);for (var o = 0, r = q.length; o < r; ++o) {p[q[o]["name"]] = q[o]["id"];}if (Object.defineProperty) {Object.defineProperty(p, "$options", { value: this.buildOpt(), enumerable: false });}return this.object = p;};aa.Enum = M;var R = function R(r, p, q, o) {Z.call(this, r, p, q);this.className = "Enum.Value";this.id = o;};R.prototype = Object.create(Z.prototype);aa.Enum.Value = R;var T = function T(r, p, q, o) {Z.call(this, r, p, q);this.field = o;};T.prototype = Object.create(Z.prototype);aa.Extension = T;var Q = function Q(q, r, o, p) {P.call(this, q, r, o, p);this.className = "Service";this.clazz = null;};var S = Q.prototype = Object.create(P.prototype);S.build = function (o) {if (this.clazz && !o) {return this.clazz;}return this.clazz = function (r, w) {var x = function x(z) {r.Builder.Service.call(this);this.rpcImpl = z || function (C, B, A) {setTimeout(A.bind(this, Error("Not implemented, see: https://github.com/dcodeIO/ProtoBuf.js/wiki/Services")), 0);};};var q = x.prototype = Object.create(r.Builder.Service.prototype);var t = w.getChildren(r.Reflect.Service.RPCMethod);for (var v = 0; v < t.length; v++) {(function (z) {q[z.name] = function (B, A) {try {try {B = z.resolvedRequestType.clazz.decode(n.wrap(B));} catch (C) {if (!(C instanceof TypeError)) {throw C;}}if (B === null || typeof B !== "object") {throw Error("Illegal arguments");}if (!(B instanceof z.resolvedRequestType.clazz)) {B = new z.resolvedRequestType.clazz(B);}this.rpcImpl(z.fqn(), B, function (E, ae) {if (E) {A(E);return;}try {ae = z.resolvedResponseType.clazz.decode(ae);} catch (D) {}if (!ae || !(ae instanceof z.resolvedResponseType.clazz)) {A(Error("Illegal response type received in service method " + w.name + "#" + z.name));return;}A(null, ae);});} catch (C) {setTimeout(A.bind(this, C), 0);}};x[z.name] = function (C, B, A) {new x(C)[z.name](B, A);};if (Object.defineProperty) {Object.defineProperty(x[z.name], "$options", { value: z.buildOpt() }), Object.defineProperty(q[z.name], "$options", { value: x[z.name]["$options"] });}})(t[v]);}var y;var u;var p;var s;if (Object.defineProperty) {Object.defineProperty(x, "$options", { value: w.buildOpt() }), Object.defineProperty(q, "$options", { value: x["$options"] }), Object.defineProperty(x, "$type", { value: w }), Object.defineProperty(q, "$type", { value: w });}return x;}(V, this);};aa.Service = Q;var ac = function ac(r, o, p, q) {Z.call(this, r, o, p);this.className = "Service.Method";this.options = q || {};};var U = ac.prototype = Object.create(Z.prototype);U.buildOpt = H.buildOpt;aa.Service.Method = ac;var K = function K(s, v, p, o, t, q, u, r) {ac.call(this, s, v, p, r);this.className = "Service.RPCMethod";this.requestName = o;this.responseName = t;this.requestStream = q;this.responseStream = u;this.resolvedRequestType = null;this.resolvedResponseType = null;};K.prototype = Object.create(ac.prototype);aa.Service.RPCMethod = K;return aa;}(l);l.Builder = function (p, q, b) {var o = function o(t) {this.ns = new b.Namespace(this, null, "");this.ptr = this.ns;this.resolved = false;this.result = null;this.files = {};this.importRoot = null;this.options = t || {};};var s = o.prototype;o.isMessage = function (t) {if (typeof t.name !== "string") {return false;}if (typeof t.values !== "undefined" || typeof t.rpc !== "undefined") {return false;}return true;};o.isMessageField = function (t) {if (typeof t.rule !== "string" || typeof t.name !== "string" || typeof t.type !== "string" || typeof t.id === "undefined") {return false;}return true;};o.isEnum = function (t) {if (typeof t.name !== "string") {return false;}if (typeof t.values === "undefined" || !Array.isArray(t.values) || t.values.length === 0) {return false;}return true;};o.isService = function (t) {if (typeof t.name !== "string" || typeof t.rpc !== "object" || !t.rpc) {return false;}return true;};o.isExtend = function (t) {if (typeof t.ref !== "string") {return false;}return true;};s.reset = function () {this.ptr = this.ns;return this;};s.define = function (t) {if (typeof t !== "string" || !q.TYPEREF.test(t)) {throw Error("illegal namespace: " + t);}t.split(".").forEach(function (u) {var v = this.ptr.getChild(u);if (v === null) {this.ptr.addChild(v = new b.Namespace(this, this.ptr, u));}this.ptr = v;}, this);return this;};s.create = function (t) {if (!t) {return this;}if (!Array.isArray(t)) {t = [t];} else {if (t.length === 0) {return this;}t = t.slice();}var u = [t];while (u.length > 0) {t = u.pop();if (!Array.isArray(t)) {throw Error("not a valid namespace: " + JSON.stringify(t));}while (t.length > 0) {var w = t.shift();if (o.isMessage(w)) {var v = new b.Message(this, this.ptr, w.name, w.options, w.isGroup, w.syntax);var x = {};if (w.oneofs) {Object.keys(w.oneofs).forEach(function (z) {v.addChild(x[z] = new b.Message.OneOf(this, v, z));}, this);}if (w.fields) {w.fields.forEach(function (A) {if (v.getChild(A.id | 0) !== null) {throw Error("duplicate or invalid field id in " + v.name + ": " + A.id);}if (A.options && typeof A.options !== "object") {throw Error("illegal field options in " + v.name + "#" + A.name);}var z = null;if (typeof A.oneof === "string" && !(z = x[A.oneof])) {throw Error("illegal oneof in " + v.name + "#" + A.name + ": " + A.oneof);}A = new b.Message.Field(this, v, A.rule, A.keytype, A.type, A.name, A.id, A.options, z, w.syntax);if (z) {z.fields.push(A);}v.addChild(A);}, this);}var y = [];if (w.enums) {w.enums.forEach(function (z) {y.push(z);});}if (w.messages) {w.messages.forEach(function (z) {y.push(z);});}if (w.services) {w.services.forEach(function (z) {y.push(z);});}if (w.extensions) {if (typeof w.extensions[0] === "number") {v.extensions = [w.extensions];} else {v.extensions = w.extensions;}}this.ptr.addChild(v);if (y.length > 0) {u.push(t);t = y;y = null;this.ptr = v;v = null;continue;}y = null;} else {if (o.isEnum(w)) {v = new b.Enum(this, this.ptr, w.name, w.options, w.syntax);w.values.forEach(function (z) {v.addChild(new b.Enum.Value(this, v, z.name, z.id));}, this);this.ptr.addChild(v);} else {if (o.isService(w)) {v = new b.Service(this, this.ptr, w.name, w.options);Object.keys(w.rpc).forEach(function (z) {var A = w.rpc[z];v.addChild(new b.Service.RPCMethod(this, v, z, A.request, A.response, !!A.request_stream, !!A.response_stream, A.options));}, this);this.ptr.addChild(v);} else {if (o.isExtend(w)) {v = this.ptr.resolve(w.ref, true);if (v) {w.fields.forEach(function (C) {if (v.getChild(C.id | 0) !== null) {throw Error("duplicate extended field id in " + v.name + ": " + C.id);}if (v.extensions) {var A = false;v.extensions.forEach(function (E) {if (C.id >= E[0] && C.id <= E[1]) {A = true;}});if (!A) {throw Error("illegal extended field id in " + v.name + ": " + C.id + " (not within valid ranges)");}}var D = C.name;if (this.options.convertFieldsToCamelCase) {D = p.Util.toCamelCase(D);}var z = new b.Message.ExtensionField(this, v, C.rule, C.type, this.ptr.fqn() + "." + D, C.id, C.options);var B = new b.Extension(this, this.ptr, C.name, z);z.extension = B;this.ptr.addChild(B);v.addChild(z);}, this);} else {if (!/\.?google\.protobuf\./.test(w.ref)) {throw Error("extended message " + w.ref + " is not defined");}}} else {throw Error("not a valid definition: " + JSON.stringify(w));}}}}w = null;v = null;}t = null;this.ptr = this.ptr.parent;}this.resolved = false;this.result = null;return this;};function r(t) {if (t.messages) {t.messages.forEach(function (u) {u.syntax = t.syntax;r(u);});}if (t.enums) {t.enums.forEach(function (u) {u.syntax = t.syntax;});}}s["import"] = function (D, C) {var A = "/";if (typeof C === "string") {if (p.Util.IS_NODE) {}if (this.files[C] === true) {return this.reset();}this.files[C] = true;} else {if (typeof C === "object") {var F = C.root;if (p.Util.IS_NODE) {}if (F.indexOf("\\") >= 0 || C.file.indexOf("\\") >= 0) {A = "\\";}var z = F + A + C.file;if (this.files[z] === true) {return this.reset();}this.files[z] = true;}}if (D.imports && D.imports.length > 0) {var x,G = false;if (typeof C === "object") {this.importRoot = C.root;G = true;x = this.importRoot;C = C.file;if (x.indexOf("\\") >= 0 || C.indexOf("\\") >= 0) {A = "\\";}} else {if (typeof C === "string") {if (this.importRoot) {x = this.importRoot;} else {if (C.indexOf("/") >= 0) {x = C.replace(/\/[^\/]*$/, "");if (x === "") {x = "/";}} else {if (C.indexOf("\\") >= 0) {x = C.replace(/\\[^\\]*$/, "");A = "\\";} else {x = ".";}}}} else {x = null;}}for (var w = 0; w < D.imports.length; w++) {if (typeof D.imports[w] === "string") {if (!x) {throw Error("cannot determine import root");}var E = D.imports[w];if (E === "google/protobuf/descriptor.proto") {continue;}E = x + A + E;if (this.files[E] === true) {continue;}if (/\.proto$/i.test(E) && !p.DotProto) {E = E.replace(/\.proto$/, ".json");}var y = p.Util.fetch(E);if (y === null) {throw Error("failed to import '" + E + "' in '" + C + "': file not found");}if (/\.json$/i.test(E)) {this["import"](JSON.parse(y + ""), E);} else {this["import"](p.DotProto.Parser.parse(y), E);}} else {if (!C) {this["import"](D.imports[w]);} else {if (/\.(\w+)$/.test(C)) {this["import"](D.imports[w], C.replace(/^(.+)\.(\w+)$/, function (t, u, v) {return u + "_import" + w + "." + v;}));} else {this["import"](D.imports[w], C + "_import" + w);}}}}if (G) {this.importRoot = null;}}if (D["package"]) {this.define(D["package"]);}if (D.syntax) {r(D);}var B = this.ptr;if (D.options) {Object.keys(D.options).forEach(function (t) {B.options[t] = D.options[t];});}if (D.messages) {this.create(D.messages), this.ptr = B;}if (D.enums) {this.create(D.enums), this.ptr = B;}if (D.services) {this.create(D.services), this.ptr = B;}if (D["extends"]) {this.create(D["extends"]);}return this.reset();};s.resolveAll = function () {var t;if (this.ptr == null || typeof this.ptr.type === "object") {return this;}if (this.ptr instanceof b.Namespace) {this.ptr.children.forEach(function (u) {this.ptr = u;this.resolveAll();}, this);} else {if (this.ptr instanceof b.Message.Field) {if (!q.TYPE.test(this.ptr.type)) {if (!q.TYPEREF.test(this.ptr.type)) {throw Error("illegal type reference in " + this.ptr.toString(true) + ": " + this.ptr.type);}t = (this.ptr instanceof b.Message.ExtensionField ? this.ptr.extension.parent : this.ptr.parent).resolve(this.ptr.type, true);if (!t) {throw Error("unresolvable type reference in " + this.ptr.toString(true) + ": " + this.ptr.type);}this.ptr.resolvedType = t;if (t instanceof b.Enum) {this.ptr.type = p.TYPES["enum"];if (this.ptr.syntax === "proto3" && t.syntax !== "proto3") {throw Error("proto3 message cannot reference proto2 enum");}} else {if (t instanceof b.Message) {this.ptr.type = t.isGroup ? p.TYPES.group : p.TYPES.message;} else {throw Error("illegal type reference in " + this.ptr.toString(true) + ": " + this.ptr.type);}}} else {this.ptr.type = p.TYPES[this.ptr.type];}if (this.ptr.map) {if (!q.TYPE.test(this.ptr.keyType)) {throw Error("illegal key type for map field in " + this.ptr.toString(true) + ": " + this.ptr.keyType);}this.ptr.keyType = p.TYPES[this.ptr.keyType];}} else {if (this.ptr instanceof p.Reflect.Service.Method) {if (this.ptr instanceof p.Reflect.Service.RPCMethod) {t = this.ptr.parent.resolve(this.ptr.requestName, true);if (!t || !(t instanceof p.Reflect.Message)) {throw Error("Illegal type reference in " + this.ptr.toString(true) + ": " + this.ptr.requestName);}this.ptr.resolvedRequestType = t;t = this.ptr.parent.resolve(this.ptr.responseName, true);if (!t || !(t instanceof p.Reflect.Message)) {throw Error("Illegal type reference in " + this.ptr.toString(true) + ": " + this.ptr.responseName);}this.ptr.resolvedResponseType = t;} else {throw Error("illegal service type in " + this.ptr.toString(true));}} else {if (!(this.ptr instanceof p.Reflect.Message.OneOf) && !(this.ptr instanceof p.Reflect.Extension) && !(this.ptr instanceof p.Reflect.Enum.Value)) {throw Error("illegal object in namespace: " + typeof this.ptr + ": " + this.ptr);}}}}return this.reset();};s.build = function (w) {this.reset();if (!this.resolved) {this.resolveAll(), this.resolved = true, this.result = null;}if (this.result === null) {this.result = this.ns.build();}if (!w) {return this.result;}var u = typeof w === "string" ? w.split(".") : w,v = this.result;for (var t = 0; t < u.length; t++) {if (v[u[t]]) {v = v[u[t]];} else {v = null;break;}}return v;};s.lookup = function (t, u) {return t ? this.ns.resolve(t, u) : this.ns;};s.toString = function () {return "Builder";};o.Message = function () {};o.Enum = function () {};o.Service = function () {};return o;}(l, l.Lang, l.Reflect);l.Map = function (q, b) {var r = function r(w, x) {if (!w.map) {throw Error("field is not a map");}this.field = w;this.keyElem = new b.Element(w.keyType, null, true, w.syntax);this.valueElem = new b.Element(w.type, w.resolvedType, false, w.syntax);this.map = {};Object.defineProperty(this, "size", { get: function get() {return Object.keys(this.map).length;} });if (x) {var s = Object.keys(x);for (var t = 0; t < s.length; t++) {var u = this.keyElem.valueFromString(s[t]);var v = this.valueElem.verifyValue(x[s[t]]);this.map[this.keyElem.valueToString(u)] = { key: u, value: v };}}};var p = r.prototype;function o(s) {var t = 0;return { next: function next() {if (t < s.length) {return { done: false, value: s[t++] };}return { done: true };} };}p.clear = function () {this.map = {};};p["delete"] = function (t) {var s = this.keyElem.valueToString(this.keyElem.verifyValue(t));var u = s in this.map;delete this.map[s];return u;};p.entries = function () {var u = [];var v = Object.keys(this.map);for (var t = 0, s; t < v.length; t++) {u.push([(s = this.map[v[t]]).key, s.value]);}return o(u);};p.keys = function () {var t = [];var s = Object.keys(this.map);for (var u = 0; u < s.length; u++) {t.push(this.map[s[u]].key);}return o(t);};p.values = function () {var u = [];var s = Object.keys(this.map);for (var t = 0; t < s.length; t++) {u.push(this.map[s[t]].value);}return o(u);};p.forEach = function (u, t) {var v = Object.keys(this.map);for (var s = 0, w; s < v.length; s++) {u.call(t, (w = this.map[v[s]]).value, w.key, this);}};p.set = function (u, s) {var v = this.keyElem.verifyValue(u);var t = this.valueElem.verifyValue(s);this.map[this.keyElem.valueToString(v)] = { key: v, value: t };return this;};p.get = function (t) {var s = this.keyElem.valueToString(this.keyElem.verifyValue(t));if (!(s in this.map)) {return undefined;}return this.map[s].value;};p.has = function (t) {var s = this.keyElem.valueToString(this.keyElem.verifyValue(t));return s in this.map;};return r;}(l, l.Reflect);l.loadProto = function (b, o, p) {if (typeof o === "string" || o && typeof o.file === "string" && typeof o.root === "string") {p = o, o = undefined;}return l.loadJson(l.DotProto.Parser.parse(b), o, p);};l.protoFromString = l.loadProto;l.loadProtoFile = function (p, b, q) {if (b && typeof b === "object") {q = b, b = null;} else {if (!b || typeof b !== "function") {b = null;}}if (b) {return l.Util.fetch(typeof p === "string" ? p : p.root + "/" + p.file, function (s) {if (s === null) {b(Error("Failed to fetch file"));return;}try {b(null, l.loadProto(s, q, p));} catch (r) {b(r);}});}var o = l.Util.fetch(typeof p === "object" ? p.root + "/" + p.file : p);return o === null ? null : l.loadProto(o, q, p);};l.protoFromFile = l.loadProtoFile;l.newBuilder = function (b) {b = b || {};if (typeof b.convertFieldsToCamelCase === "undefined") {b.convertFieldsToCamelCase = l.convertFieldsToCamelCase;}if (typeof b.populateAccessors === "undefined") {b.populateAccessors = l.populateAccessors;}return new l.Builder(b);};l.loadJson = function (b, o, p) {if (typeof o === "string" || o && typeof o.file === "string" && typeof o.root === "string") {p = o, o = null;}if (!o || typeof o !== "object") {o = l.newBuilder();}if (typeof b === "string") {b = JSON.parse(b);}o["import"](b, p);o.resolveAll();return o;};l.loadJsonFile = function (p, b, q) {if (b && typeof b === "object") {q = b, b = null;} else {if (!b || typeof b !== "function") {b = null;}}if (b) {return l.Util.fetch(typeof p === "string" ? p : p.root + "/" + p.file, function (s) {if (s === null) {b(Error("Failed to fetch file"));return;}try {b(null, l.loadJson(JSON.parse(s), q, p));} catch (r) {b(r);}});}var o = l.Util.fetch(typeof p === "object" ? p.root + "/" + p.file : p);return o === null ? null : l.loadJson(JSON.parse(o), q, p);};var m = function m(b) {var s,u,v,w,r,p,t,q = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);p = b.length;r = 0;t = "";while (r < p) {do {s = q[b.charCodeAt(r++) & 255];} while (r < p && s == -1);if (s == -1) {break;}do {u = q[b.charCodeAt(r++) & 255];} while (r < p && u == -1);if (u == -1) {break;}t += String.fromCharCode(s << 2 | (u & 48) >> 4);do {v = b.charCodeAt(r++) & 255;if (v == 61) {return t;}v = q[v];} while (r < p && v == -1);if (v == -1) {break;}t += String.fromCharCode((u & 15) << 4 | (v & 60) >> 2);do {w = b.charCodeAt(r++) & 255;if (w == 61) {return t;}w = q[w];} while (r < p && w == -1);if (w == -1) {break;}t += String.fromCharCode((v & 3) << 6 | w);}return t;};var h = m("cGFja2FnZSBNb2R1bGVzOwptZXNzYWdlIHByb2J1ZiB7CiAgICBtZXNzYWdlIFNldFVzZXJTdGF0dXNJbnB1dAogICAgewogICAgICAgIG9wdGlvbmFsIGludDMyIHN0YXR1cz0xOwogICAgfQoKICAgIG1lc3NhZ2UgU2V0VXNlclN0YXR1c091dHB1dAogICAgewogICAgICAgIG9wdGlvbmFsIGludDMyIG5vdGhpbmc9MTsKICAgIH0KCiAgICBtZXNzYWdlIEdldFVzZXJTdGF0dXNJbnB1dAogICAgewogICAgICAgIG9wdGlvbmFsIGludDMyIG5vdGhpbmc9MTsKICAgIH0KCiAgICBtZXNzYWdlIEdldFVzZXJTdGF0dXNPdXRwdXQKICAgIHsKICAgICAgICBvcHRpb25hbCBzdHJpbmcgc3RhdHVzPTE7Ly8mIzIzMTvClCYjMTY4OyYjMjMwO8KIJiMxODM7JiMyMjg7JiMxOTE7JiMxNjE7JiMyMzA7woEmIzE3NTsKICAgICAgICBvcHRpb25hbCBzdHJpbmcgc3ViVXNlcklkPTI7Ly8mIzIzMjsmIzE2MjsmIzE3MTsmIzIzMjsmIzE3NDsmIzE2MjsmIzIzMzvCmMKFJiMyMzI7woDChQogICAgfQoKICAgIG1lc3NhZ2UgU3ViVXNlclN0YXR1c0lucHV0CiAgICB7CiAgICAgICAgcmVwZWF0ZWQgc3RyaW5nIHVzZXJpZCA9MTsgIC8vJiMyMzE7wpQmIzE2ODsmIzIzMDvCiCYjMTgzOyYjMjI5O8KIwpcmIzIzMjsmIzE2MTsmIzE2ODsKICAgIH0KCiAgICBtZXNzYWdlIFN1YlVzZXJTdGF0dXNPdXRwdXQKICAgIHsKICAgICAgICBvcHRpb25hbCBpbnQzMiBub3RoaW5nPTE7ICAgIC8vJiMyMjk7wo0mIzE2MDsmIzIyODsmIzE4OTvCjQogICAgfQogICAgbWVzc2FnZSBWb2lwRHluYW1pY0lucHV0CiAgICB7CiAgICAgICAgcmVxdWlyZWQgaW50MzIgIGVuZ2luZVR5cGUgPSAxOwogICAgICAgIHJlcXVpcmVkIHN0cmluZyBjaGFubmVsTmFtZSA9IDI7CiAgICAgICAgb3B0aW9uYWwgc3RyaW5nIGNoYW5uZWxFeHRyYSA9IDM7CiAgICB9CgogICAgbWVzc2FnZSBWb2lwRHluYW1pY091dHB1dAogICAgewogICAgICAgICByZXF1aXJlZCBzdHJpbmcgZHluYW1pY0tleT0xOwogICAgfQogICAgbWVzc2FnZSBOb3RpZnlNc2cgewogICAgICAgIHJlcXVpcmVkIGludDMyIHR5cGUgPSAxOwogICAgICAgIG9wdGlvbmFsIGludDY0IHRpbWUgPSAyOwogICAgICAgIG9wdGlvbmFsIHN0cmluZyBjaHJtSWQ9MzsKICAgIH0KICAgIG1lc3NhZ2UgU3luY1JlcXVlc3RNc2cgewogICAgICAgIHJlcXVpcmVkIGludDY0IHN5bmNUaW1lID0gMTsKICAgICAgICByZXF1aXJlZCBib29sIGlzcG9sbGluZyA9IDI7CiAgICAgICAgb3B0aW9uYWwgYm9vbCBpc3dlYj0zOwogICAgICAgIG9wdGlvbmFsIGJvb2wgaXNQdWxsU2VuZD00OwogICAgICAgIG9wdGlvbmFsIGJvb2wgaXNLZWVwaW5nPTU7CiAgICAgICAgb3B0aW9uYWwgaW50NjQgc2VuZEJveFN5bmNUaW1lPTY7CiAgICB9CiAgICBtZXNzYWdlIFVwU3RyZWFtTWVzc2FnZSB7CiAgICAgICAgcmVxdWlyZWQgaW50MzIgc2Vzc2lvbklkID0gMTsKICAgICAgICByZXF1aXJlZCBzdHJpbmcgY2xhc3NuYW1lID0gMjsKICAgICAgICByZXF1aXJlZCBieXRlcyBjb250ZW50ID0gMzsKICAgICAgICBvcHRpb25hbCBzdHJpbmcgcHVzaFRleHQgPSA0OwogICAgICAgIG9wdGlvbmFsIHN0cmluZyBhcHBEYXRhID0gNTsKICAgICAgICByZXBlYXRlZCBzdHJpbmcgdXNlcklkID0gNjsKICAgIH0KICAgIG1lc3NhZ2UgRG93blN0cmVhbU1lc3NhZ2VzIHsKICAgICAgICByZXBlYXRlZCBEb3duU3RyZWFtTWVzc2FnZSBsaXN0ID0gMTsKICAgICAgICByZXF1aXJlZCBpbnQ2NCBzeW5jVGltZSA9IDI7CiAgICAgICAgb3B0aW9uYWwgYm9vbCBmaW5pc2hlZCA9IDM7CiAgICB9CiAgICBtZXNzYWdlIERvd25TdHJlYW1NZXNzYWdlIHsKICAgICAgICByZXF1aXJlZCBzdHJpbmcgZnJvbVVzZXJJZCA9IDE7CiAgICAgICAgcmVxdWlyZWQgQ2hhbm5lbFR5cGUgdHlwZSA9IDI7CiAgICAgICAgb3B0aW9uYWwgc3RyaW5nIGdyb3VwSWQgPSAzOwogICAgICAgIHJlcXVpcmVkIHN0cmluZyBjbGFzc25hbWUgPSA0OwogICAgICAgIHJlcXVpcmVkIGJ5dGVzIGNvbnRlbnQgPSA1OwogICAgICAgIHJlcXVpcmVkIGludDY0IGRhdGFUaW1lID0gNjsKICAgICAgICByZXF1aXJlZCBpbnQ2NCBzdGF0dXMgPSA3OwogICAgICAgIG9wdGlvbmFsIGludDY0IGV4dHJhID0gODsKICAgICAgICBvcHRpb25hbCBzdHJpbmcgbXNnSWQgPSA5OwogICAgICAgIG9wdGlvbmFsIGludDMyIGRpcmVjdGlvbiA9IDEwOyAKICAgIH0KICAgIGVudW0gQ2hhbm5lbFR5cGUgewogICAgICAgIFBFUlNPTiA9IDE7CiAgICAgICAgUEVSU09OUyA9IDI7CiAgICAgICAgR1JPVVAgPSAzOwogICAgICAgIFRFTVBHUk9VUCA9IDQ7CiAgICAgICAgQ1VTVE9NRVJTRVJWSUNFID0gNTsKICAgICAgICBOT1RJRlkgPSA2OwogICAgICAgIE1DPTc7CiAgICAgICAgTVA9ODsKICAgIH0KICAgIG1lc3NhZ2UgQ3JlYXRlRGlzY3Vzc2lvbklucHV0IHsKICAgICAgICBvcHRpb25hbCBzdHJpbmcgbmFtZSA9IDE7CiAgICB9CiAgICBtZXNzYWdlIENyZWF0ZURpc2N1c3Npb25PdXRwdXQgewogICAgICAgIHJlcXVpcmVkIHN0cmluZyBpZCA9IDE7CiAgICB9CiAgICBtZXNzYWdlIENoYW5uZWxJbnZpdGF0aW9uSW5wdXQgewogICAgICAgIHJlcGVhdGVkIHN0cmluZyB1c2VycyA9IDE7CiAgICB9CiAgICBtZXNzYWdlIExlYXZlQ2hhbm5lbElucHV0IHsKICAgICAgICByZXF1aXJlZCBpbnQzMiBub3RoaW5nID0gMTsKICAgIH0KICAgIG1lc3NhZ2UgQ2hhbm5lbEV2aWN0aW9uSW5wdXQgewogICAgICAgIHJlcXVpcmVkIHN0cmluZyB1c2VyID0gMTsKICAgIH0KICAgIG1lc3NhZ2UgUmVuYW1lQ2hhbm5lbElucHV0IHsKICAgICAgICByZXF1aXJlZCBzdHJpbmcgbmFtZSA9IDE7CiAgICB9CiAgICBtZXNzYWdlIENoYW5uZWxJbmZvSW5wdXQgewogICAgICAgIHJlcXVpcmVkIGludDMyIG5vdGhpbmcgPSAxOwogICAgfQogICAgbWVzc2FnZSBDaGFubmVsSW5mb091dHB1dCB7CiAgICAgICAgcmVxdWlyZWQgQ2hhbm5lbFR5cGUgdHlwZSA9IDE7CiAgICAgICAgcmVxdWlyZWQgc3RyaW5nIGNoYW5uZWxJZCA9IDI7CiAgICAgICAgcmVxdWlyZWQgc3RyaW5nIGNoYW5uZWxOYW1lID0gMzsKICAgICAgICByZXF1aXJlZCBzdHJpbmcgYWRtaW5Vc2VySWQgPSA0OwogICAgICAgIHJlcGVhdGVkIHN0cmluZyBmaXJzdFRlblVzZXJJZHMgPSA1OwogICAgICAgIHJlcXVpcmVkIGludDMyIG9wZW5TdGF0dXMgPSA2OwogICAgfQogICAgbWVzc2FnZSBDaGFubmVsSW5mb3NJbnB1dCB7CiAgICAgICAgcmVxdWlyZWQgaW50MzIgcGFnZSA9IDE7CiAgICAgICAgb3B0aW9uYWwgaW50MzIgbnVtYmVyID0gMjsKICAgIH0KICAgIG1lc3NhZ2UgQ2hhbm5lbEluZm9zT3V0cHV0IHsKICAgICAgICByZXBlYXRlZCBDaGFubmVsSW5mb091dHB1dCBjaGFubmVscyA9IDE7CiAgICAgICAgcmVxdWlyZWQgaW50MzIgdG90YWwgPSAyOwogICAgfQogICAgbWVzc2FnZSBNZW1iZXJJbmZvIHsKICAgICAgICByZXF1aXJlZCBzdHJpbmcgdXNlcklkID0gMTsKICAgICAgICByZXF1aXJlZCBzdHJpbmcgdXNlck5hbWUgPSAyOwogICAgICAgIHJlcXVpcmVkIHN0cmluZyB1c2VyUG9ydHJhaXQgPSAzOwogICAgICAgIHJlcXVpcmVkIHN0cmluZyBleHRlbnNpb24gPSA0OwogICAgfQogICAgbWVzc2FnZSBHcm91cE1lbWJlcnNJbnB1dCB7CiAgICAgICAgcmVxdWlyZWQgaW50MzIgcGFnZSA9IDE7CiAgICAgICAgb3B0aW9uYWwgaW50MzIgbnVtYmVyID0gMjsKICAgIH0KICAgIG1lc3NhZ2UgR3JvdXBNZW1iZXJzT3V0cHV0IHsKICAgICAgICByZXBlYXRlZCBNZW1iZXJJbmZvIG1lbWJlcnMgPSAxOwogICAgICAgIHJlcXVpcmVkIGludDMyIHRvdGFsID0gMjsKICAgIH0KICAgIG1lc3NhZ2UgR2V0VXNlckluZm9JbnB1dCB7CiAgICAgICAgcmVxdWlyZWQgaW50MzIgbm90aGluZyA9IDE7CiAgICB9CiAgICBtZXNzYWdlIEdldFVzZXJJbmZvT3V0cHV0IHsKICAgICAgICByZXF1aXJlZCBzdHJpbmcgdXNlcklkID0gMTsKICAgICAgICByZXF1aXJlZCBzdHJpbmcgdXNlck5hbWUgPSAyOwogICAgICAgIHJlcXVpcmVkIHN0cmluZyB1c2VyUG9ydHJhaXQgPSAzOwogICAgfQogICAgbWVzc2FnZSBHZXRTZXNzaW9uSWRJbnB1dCB7CiAgICAgICAgcmVxdWlyZWQgaW50MzIgbm90aGluZyA9IDE7CiAgICB9CiAgICBtZXNzYWdlIEdldFNlc3Npb25JZE91dHB1dCB7CiAgICAgICAgcmVxdWlyZWQgaW50MzIgc2Vzc2lvbklkID0gMTsKICAgIH0KICAgIGVudW0gRmlsZVR5cGUgewogICAgICAgIGltYWdlID0gMTsKICAgICAgICBhdWRpbyA9IDI7CiAgICAgICAgdmlkZW8gPSAzOwogICAgICAgIGZpbGUgPSA0OwogICAgfQogICAgbWVzc2FnZSBHZXRRTnVwVG9rZW5JbnB1dCB7CiAgICAgICAgcmVxdWlyZWQgRmlsZVR5cGUgdHlwZSA9IDE7CiAgICB9CiAgICBtZXNzYWdlIEdldFFOZG93bmxvYWRVcmxJbnB1dCB7CiAgICAgICAgcmVxdWlyZWQgRmlsZVR5cGUgdHlwZSA9IDE7CiAgICAgICAgcmVxdWlyZWQgc3RyaW5nIGtleSA9IDI7CiAgICAgICAgb3B0aW9uYWwgc3RyaW5nICBmaWxlTmFtZSA9IDM7CiAgICB9CiAgICBtZXNzYWdlIEdldFFOdXBUb2tlbk91dHB1dCB7CiAgICAgICAgcmVxdWlyZWQgaW50NjQgZGVhZGxpbmUgPSAxOwogICAgICAgIHJlcXVpcmVkIHN0cmluZyB0b2tlbiA9IDI7CiAgICB9CiAgICBtZXNzYWdlIEdldFFOZG93bmxvYWRVcmxPdXRwdXQgewogICAgICAgIHJlcXVpcmVkIHN0cmluZyBkb3dubG9hZFVybCA9IDE7CiAgICB9CiAgICBtZXNzYWdlIEFkZDJCbGFja0xpc3RJbnB1dCB7CiAgICAgICAgcmVxdWlyZWQgc3RyaW5nIHVzZXJJZCA9IDE7CiAgICB9CiAgICBtZXNzYWdlIFJlbW92ZUZyb21CbGFja0xpc3RJbnB1dCB7CiAgICAgICAgcmVxdWlyZWQgc3RyaW5nIHVzZXJJZCA9IDE7CiAgICB9CiAgICBtZXNzYWdlIFF1ZXJ5QmxhY2tMaXN0SW5wdXQgewogICAgICAgIHJlcXVpcmVkIGludDMyIG5vdGhpbmcgPSAxOwogICAgfQogICAgbWVzc2FnZSBRdWVyeUJsYWNrTGlzdE91dHB1dCB7CiAgICAgICAgcmVwZWF0ZWQgc3RyaW5nIHVzZXJJZHMgPSAxOwogICAgfQogICAgbWVzc2FnZSBCbGFja0xpc3RTdGF0dXNJbnB1dCB7CiAgICAgICAgcmVxdWlyZWQgc3RyaW5nIHVzZXJJZCA9IDE7CiAgICB9CiAgICBtZXNzYWdlIEJsb2NrUHVzaElucHV0IHsKICAgICAgICByZXF1aXJlZCBzdHJpbmcgYmxvY2tlZUlkID0gMTsKICAgIH0KICAgIG1lc3NhZ2UgTW9kaWZ5UGVybWlzc2lvbklucHV0IHsKICAgICAgICByZXF1aXJlZCBpbnQzMiBvcGVuU3RhdHVzID0gMTsKICAgIH0KICAgIG1lc3NhZ2UgR3JvdXBJbnB1dCB7CiAgICAgICAgcmVwZWF0ZWQgR3JvdXBJbmZvIGdyb3VwSW5mbyA9IDE7CiAgICB9CiAgICBtZXNzYWdlIEdyb3VwT3V0cHV0IHsKICAgICAgICByZXF1aXJlZCBpbnQzMiBub3RoaW5nID0gMTsKICAgIH0KICAgIG1lc3NhZ2UgR3JvdXBJbmZvIHsKICAgICAgICByZXF1aXJlZCBzdHJpbmcgaWQgPSAxOwogICAgICAgIHJlcXVpcmVkIHN0cmluZyBuYW1lID0gMjsKICAgIH0KICAgIG1lc3NhZ2UgR3JvdXBIYXNoSW5wdXQgewogICAgICAgIHJlcXVpcmVkIHN0cmluZyB1c2VySWQgPSAxOwogICAgICAgIHJlcXVpcmVkIHN0cmluZyBncm91cEhhc2hDb2RlID0gMjsKICAgIH0KICAgIG1lc3NhZ2UgR3JvdXBIYXNoT3V0cHV0IHsKICAgICAgICByZXF1aXJlZCBHcm91cEhhc2hUeXBlIHJlc3VsdCA9IDE7CiAgICB9CiAgICBlbnVtIEdyb3VwSGFzaFR5cGUgewogICAgICAgIGdyb3VwX3N1Y2Nlc3MgPSAweDAwOwogICAgICAgIGdyb3VwX2ZhaWx1cmUgPSAweDAxOwogICAgfQogICAgbWVzc2FnZSBDaHJtSW5wdXQgewogICAgICAgIHJlcXVpcmVkIGludDMyIG5vdGhpbmcgPSAxOwogICAgfQogICAgbWVzc2FnZSBDaHJtT3V0cHV0IHsKICAgICAgICByZXF1aXJlZCBpbnQzMiBub3RoaW5nID0gMTsKICAgIH0KICAgIG1lc3NhZ2UgQ2hybVB1bGxNc2cgewogICAgICAgIHJlcXVpcmVkIGludDY0IHN5bmNUaW1lID0gMTsKICAgICAgICByZXF1aXJlZCBpbnQzMiBjb3VudCA9IDI7CiAgICB9CiAgICAKICAgIG1lc3NhZ2UgQ2hybVB1bGxNc2dOZXcgIC8vJiMyMjk7JiMxNzQ7JiMxNjI7JiMyMzA7wogmIzE4MzsmIzIzMTsmIzE3MTsmIzE3NTsmIzIzMDvCliYjMTc2OyYjMjMxO8KawoQmIzIzMDvCi8KJJiMyMjk7wo/CliYjMjMyO8KBwoomIzIyOTsmIzE2NDsmIzE2OTsmIzIyOTsmIzE3NDsmIzE2NDsmIzIzMDsmIzE4MjvCiCYjMjMwO8KBJiMxNzU7CiAgICB7CiAgICAgcmVxdWlyZWQgaW50MzIgY291bnQgPSAxOy8vJiMyMzA7wovCiSYjMjI5O8KPwpYmIzIzMDvCnSYjMTYxOyYjMjMwO8KVJiMxNzY7ICAgMDomIzIzMzvCgMKaJiMyMzE7wp8mIzE2NTsmIzIzMDvCi8KJJiMyMjk7wo/CliAgICYjMjMzO8Kdwp4wJiMyMzk7JiMxODg7wpomIzIyODsmIzE4NDsmIzE4NzsmIzIyOTvCiiYjMTY4OyYjMjMwO8KLwokmIzIyOTvCj8KWJiMyMjk7wo7ChiYjMjI5O8KPJiMxNzg7JiMyMzA7JiMxODI7wogmIzIzMDvCgSYjMTc1OyYjMjMwO8KdJiMxNjE7JiMyMzA7wpUmIzE3NjsKICAgICByZXF1aXJlZCBpbnQ2NCBzeW5jVGltZSA9IDI7Ly8mIzIyOTvCkMKMJiMyMzA7JiMxNzM7JiMxNjU7JiMyMzA7wovCiSYjMjI5O8KPwpYmIzIzMDvClyYjMTgyOyYjMjMzO8KXJiMxODA7CiAgICAgb3B0aW9uYWwgc3RyaW5nIGNocm1JZD0zOy8vJiMyMzI7woHCiiYjMjI5OyYjMTY0OyYjMTY5OyYjMjI5OyYjMTc0OyYjMTY0O0lECiAgICB9CiAgICAKICAgIG1lc3NhZ2UgUmVsYXRpb25zSW5wdXQKICAgIHsKICAgICAgICByZXF1aXJlZCBDaGFubmVsVHlwZSB0eXBlID0gMTsKICAgICAgICBvcHRpb25hbCBEb3duU3RyZWFtTWVzc2FnZSBtc2cgPTI7CiAgICAgICAgb3B0aW9uYWwgaW50MzIgY291bnQgPSAzOwogICAgICAgIG9wdGlvbmFsIGludDMyIG9mZnNldCA9IDQ7CiAgICAgICAgb3B0aW9uYWwgaW50NjQgc3RhcnRUaW1lID0gNTsKICAgICAgICBvcHRpb25hbCBpbnQ2NCBlbmRUaW1lID0gNjsKICAgIH0KICAgIG1lc3NhZ2UgUmVsYXRpb25zT3V0cHV0CiAgICB7CiAgICAgICAgcmVwZWF0ZWQgUmVsYXRpb25JbmZvIGluZm8gPSAxOwogICAgfQogICAgbWVzc2FnZSBSZWxhdGlvbkluZm8KICAgIHsKICAgICAgICByZXF1aXJlZCBDaGFubmVsVHlwZSB0eXBlID0gMTsKICAgICAgICByZXF1aXJlZCBzdHJpbmcgdXNlcklkID0gMjsKICAgICAgICBvcHRpb25hbCBEb3duU3RyZWFtTWVzc2FnZSBtc2cgPTM7CiAgICAgICAgb3B0aW9uYWwgaW50NjQgcmVhZE1zZ1RpbWU9IDQ7CiAgICB9CiAgICBtZXNzYWdlIFJlbGF0aW9uSW5mb1JlYWRUaW1lCiAgICB7CiAgICAgICAgcmVxdWlyZWQgQ2hhbm5lbFR5cGUgdHlwZSA9IDE7CiAgICAgICAgcmVxdWlyZWQgaW50NjQgcmVhZE1zZ1RpbWU9IDI7CiAgICAgICAgcmVxdWlyZWQgc3RyaW5nIHRhcmdldElkID0gMzsKICAgIH0KICAgIG1lc3NhZ2UgQ2xlYW5IaXNNc2dJbnB1dAogICAgewogICAgICAgICByZXF1aXJlZCBzdHJpbmcgdGFyZ2V0SWQgPSAxOy8vJiMyMjk7wo8mIzE3NTsmIzIzMjvCgyYjMTg5OyYjMjMwO8KYJiMxNzU7JiMyMzE7wpQmIzE2ODsmIzIzMDvCiCYjMTgzO2lkJiMyMzk7JiMxODg7wowmIzIzMTsmIzE5MDsmIzE2NDsmIzIzMTsmIzE4NzvChGlkJiMyMzE7JiMxNzM7wokmIzIyNzvCgMKCCiAgICAgICAgIHJlcXVpcmVkIGludDY0IGRhdGFUaW1lID0gMjsvLyYjMjMwOyYjMTg0O8KFJiMyMzM7wpkmIzE2NDsmIzIzMDvClyYjMTgyOyYjMjMzO8KXJiMxODA7CiAgICAgICAgIG9wdGlvbmFsIGludDMyIGNvbnZlcnNhdGlvblR5cGU9IDM7Ly8gJiMyMjk7JiMxNjQ7wocmIzIzMzvCgMKJJiMyMjk7JiMxNzM7wpcmIzIzMDsmIzE3NDsmIzE4MTsmIzIzMDvCmsKCJiMyMjg7JiMxODQ7wo0mIzIzMzvCnMKAJiMyMzI7JiMxNjY7woEKICAgIH0KICAgIG1lc3NhZ2UgSGlzdG9yeU1lc3NhZ2VJbnB1dAogICAgewogICAgICAgIHJlcXVpcmVkIHN0cmluZyB0YXJnZXRJZCA9IDE7CiAgICAgICAgcmVxdWlyZWQgaW50NjQgZGF0YVRpbWUgPTI7CiAgICAgICAgcmVxdWlyZWQgaW50MzIgc2l6ZSAgPSAzOwogICAgfQoKICAgIG1lc3NhZ2UgSGlzdG9yeU1lc3NhZ2VzT3VwdXQKICAgIHsKICAgICAgICByZXBlYXRlZCBEb3duU3RyZWFtTWVzc2FnZSBsaXN0ID0gMTsKICAgICAgICByZXF1aXJlZCBpbnQ2NCBzeW5jVGltZSA9IDI7CiAgICAgICAgcmVxdWlyZWQgaW50MzIgaGFzTXNnID0gMzsKICAgIH0KICAgIG1lc3NhZ2UgUXVlcnlDaGF0cm9vbUluZm9JbnB1dAogICAgewogICAgIHJlcXVpcmVkIGludDMyIGNvdW50PSAxOy8vJiMyMzA7wpzCnyYjMjMwO8KcwpsmIzIzMjvCjiYjMTgzOyYjMjI5O8KPwpYmIzIzMjvCgcKKJiMyMjk7JiMxNjQ7JiMxNjk7JiMyMjk7JiMxNzQ7JiMxNjQ7JiMyMzE7wpQmIzE2ODsmIzIzMDvCiCYjMTgzOyYjMjMxO8KawoQmIzIyODsmIzE4NjsmIzE4NjsmIzIzMDvClSYjMTc2OyYjMjM5OyYjMTg4O8KMJiMyMzI7wozCgyYjMjI5O8KbJiMxODA7JiMyMjg7JiMxODQ7JiMxODY7MH4yMAogICAgIG9wdGlvbmFsIGludDMyIG9yZGVyPSAyOy8vJiMyMzA7wozCiSYjMjMwO8KXJiMxODI7JiMyMzM7wpcmIzE4MDsmIzIzMDvCjsKSJiMyMjk7JiMxODY7wo8mIzIzOTsmIzE4ODvCjCYjMjMyO8KMwoMmIzIyOTvCmyYjMTgwOyYjMjM5OyYjMTg4O8KaMCYjMjM5OyYjMTg4O8KMMSYjMjM5OyYjMTg4O8KMMi4mIzIzOTsmIzE4ODvCiDA6JiMyMjg7JiMxODQ7wo0mIzIzMjsmIzE5MTvClCYjMjI5O8Kbwp4mIzIzOTsmIzE4ODvCmzE6JiMyMzA7JiMxNzM7JiMxNjM7JiMyMjk7JiMxODY7wo8oJiMyMzA7wpzCgCYjMjMwO8KXJiMxNjk7JiMyMjk7woomIzE2MDsmIzIyOTvChSYjMTY1OykmIzIzOTsmIzE4ODvCmzI6JiMyMjk7woDCkiYjMjI5OyYjMTg2O8KPKCYjMjMwO8KcwoAmIzIzMDvCmcKaJiMyMjk7woomIzE2MDsmIzIyOTvChSYjMTY1OykmIzIzOTsmIzE4ODvCiQogICAgfQoKICAgIG1lc3NhZ2UgUXVlcnlDaGF0cm9vbUluZm9PdXRwdXQKICAgIHsKICAgICBvcHRpb25hbCBpbnQzMiB1c2VyVG90YWxOdW1zID0gMTsvLyYjMjI5OyYjMTg5O8KTJiMyMjk7wonCjSYjMjMyO8KBwoomIzIyOTsmIzE2NDsmIzE2OTsmIzIyOTsmIzE3NDsmIzE2NDsmIzIyODsmIzE4NDsmIzE3MzsmIzIzMTvCmsKEJiMyMzA7woAmIzE4NzsmIzIyODsmIzE4NjsmIzE4NjsmIzIzMDvClSYjMTc2OwogICAgIHJlcGVhdGVkIENocm1NZW1iZXIgdXNlckluZm9zID0gMjsvLyYjMjMyOyYjMTkxO8KUJiMyMjk7wpvCniYjMjMzO8KDJiMxNjg7JiMyMjk7wojChiYjMjMxO8KUJiMxNjg7JiMyMzA7wogmIzE4MzsmIzIyODsmIzE5MTsmIzE2MTsmIzIzMDvCgSYjMTc1OyYjMjI5O8KIwpcmIzIzMjsmIzE2MTsmIzE2ODsmIzIzOTsmIzE4ODvCiCYjMjI5O8KPJiMxNzA7JiMyMjk7wozChSYjMjI5O8KQJiMxNzE7dXNlcklkJiMyMjk7wpLCjGpvaW5UaW1lJiMyMjk7JiMxNzc7wp4mIzIzMDvCgCYjMTY3OyYjMjM5OyYjMTg4O8KJCiAgICB9CiAgICBtZXNzYWdlIENocm1NZW1iZXIKICAgIHsKICAgICByZXF1aXJlZCBpbnQ2NCB0aW1lID0gMTsvL01lbWJlciYjMjMxO8KawoRqb2luVGltZQogICAgIHJlcXVpcmVkIHN0cmluZyBpZCA9IDI7Ly9NZW1iZXImIzIzMTvCmsKEdXNlcklkCiAgICB9CiAgICBtZXNzYWdlIE1QRm9sbG93SW5wdXQgIC8vbXAmIzIyOTvChSYjMTc5OyYjMjMwOyYjMTc5OyYjMTY4Oy8mIzIyOTvCj8KWJiMyMzA7JiMxODI7wogmIzIyOTvChSYjMTc5OyYjMjMwOyYjMTc5OyYjMTY4OwogICAgewogICAgICAgIHJlcXVpcmVkIHN0cmluZyBpZCA9IDE7Ly9tcGlkCiAgICB9CgogICAgbWVzc2FnZSBNUEZvbGxvd091dHB1dAogICAgewogICAgICAgIHJlcXVpcmVkIGludDMyIG5vdGhpbmcgPSAxOy8vJiMyMjk7wo0mIzE2MDsmIzIyODsmIzE4OTvCjSYjMjI5OyYjMTczO8KXJiMyMzA7JiMxNzQ7JiMxODE7CiAgICAgICAgb3B0aW9uYWwgTXBJbmZvIGluZm8gPTI7Ly8mIzIyOTvChSYjMTc5OyYjMjMwOyYjMTc5OyYjMTY4OyYjMjMxO8KawoRtcGluZm8KICAgIH0KCiAgICBtZXNzYWdlIE1DRm9sbG93SW5wdXQgICAvL21jJiMyMjk7woUmIzE3OTsmIzIzMDsmIzE3OTsmIzE2ODsvJiMyMjk7wo/CliYjMjMwOyYjMTgyO8KIJiMyMjk7woUmIzE3OTsmIzIzMDsmIzE3OTsmIzE2ODsKICAgIHsKICAgICAgICByZXF1aXJlZCBzdHJpbmcgaWQgPSAxOy8vbWNpZAogICAgfQoKICAgIG1lc3NhZ2UgTUNGb2xsb3dPdXRwdXQKICAgIHsKICAgICAgICByZXF1aXJlZCBpbnQzMiBub3RoaW5nID0gMTsvLyYjMjI5O8KNJiMxNjA7JiMyMjg7JiMxODk7wo0mIzIyOTsmIzE3MzvClyYjMjMwOyYjMTc0OyYjMTgxOwogICAgICAgIG9wdGlvbmFsIE1wSW5mbyBpbmZvID0yOy8vJiMyMjk7woUmIzE3OTsmIzIzMDsmIzE3OTsmIzE2ODsmIzIzMTvCmsKEbXBpbmZvCiAgICB9CgogICAgbWVzc2FnZSBNcEluZm8gIC8vbXAmIzIyOTvCnyYjMTg2OyYjMjMwO8KcJiMxNzI7JiMyMjg7JiMxOTE7JiMxNjE7JiMyMzA7woEmIzE3NTsKICAgIHsKICAgICAgICByZXF1aXJlZCBzdHJpbmcgbXBpZD0xOy8vbXAvbWNpZAogICAgICAgIHJlcXVpcmVkIHN0cmluZyBuYW1lID0gMjsvL2Rpc3BsYXlOYW1lCiAgICAgICAgcmVxdWlyZWQgc3RyaW5nIHR5cGUgPSAzOy8vbXAvbWMKICAgICAgICByZXF1aXJlZCBpbnQ2NCB0aW1lPTQ7Ly8mIzIyOTvChSYjMTcyOyYjMjI4OyYjMTg4O8KXJiMyMjk7JiMxODQ7wpAmIzIyOTvCjyYjMTgzOyYjMjI4OyYjMTkxOyYjMTc0OyYjMjMwO8KUJiMxODU7JiMyMzA7wpcmIzE4MjsmIzIzMzvClyYjMTgwOwogICAgICAgIG9wdGlvbmFsIHN0cmluZyBwb3J0cmFpdFVybD01Oy8vJiMyMjk7JiMxNjQ7JiMxODA7JiMyMjk7woPCjwogICAgICAgIG9wdGlvbmFsIHN0cmluZyBleHRyYSA9NjsvLyYjMjI5O8KFJiMxODI7JiMyMjg7JiMxODc7wpYmIzIyODsmIzE5MTsmIzE2MTsmIzIzMDvCgSYjMTc1Oyhqc29uKSYjMjM5OyYjMTg4O8KMJiMyMzA7wovCiSYjMjI5O8KPwpYmIzIzMTvCmsKEJiMyMzA7wpcmIzE4MjsmIzIyOTvCgMKZJiMyMjk7wozChSYjMjI5O8KQJiMxNzE7JiMyMzI7wo/CnCYjMjI5O8KNwpUmIzIyNzvCgMKBJiMyMzE7JiMxNzQ7woAmIzIyODsmIzE4NzvCiyYjMjMxOyYjMTczO8KJJiMyMjg7JiMxOTE7JiMxNjE7JiMyMzA7woEmIzE3NTsmIzIyNzvCgMKCCiAgICB9CgogICAgbWVzc2FnZSBTZWFyY2hNcElucHV0IC8vJiMyMzA7JiMxNjA7JiMxODU7JiMyMzA7wo0mIzE3NDsmIzIyOTvChSYjMTcyOyYjMjI4OyYjMTg4O8KXJiMyMjk7JiMxODQ7wpAmIzIyOTvCjyYjMTgzO2lkJiMyMjk7JiMxNzQ7wowmIzIyOTvChSYjMTY4OyYjMjI5O8KMJiMxODU7JiMyMzM7woXCjSYjMjMwO8KfJiMxNjU7JiMyMzA7wokmIzE5MDsKICAgIHsKICAgICAgICByZXF1aXJlZCBpbnQzMiB0eXBlPTE7Ly8mIzIzMDsmIzE2MDvChyYjMjI5OyYjMTkxO8KXJiMyMjg7JiMxODk7wo0sJiMyMzA7wpcmIzE2NTsmIzIyOTvCkMKOJiMyMzA7wozCiSYjMjI4OyYjMTg5O8KNJiMyMzA7wp0mIzE2NTsmIzIyOTvCgcKaJiMyMzA7wokmIzE2OTsmIzIyOTsmIzE3NzvClQogICAgICAgIHJlcXVpcmVkIHN0cmluZyBpZD0yOy8vbXBpZC9tY2lkL2Rpc3BsYXlOYW1lCiAgICB9CgogICAgbWVzc2FnZSBTZWFyY2hNcE91dHB1dAogICAgewogICAgICAgIHJlcXVpcmVkIGludDMyIG5vdGhpbmc9MTsvLyYjMjI5O8KNJiMxNjA7JiMyMjg7JiMxODk7wo0mIzIzMTsmIzE3MjsmIzE2NjsKICAgICAgICByZXBlYXRlZCBNcEluZm8gaW5mbyA9IDI7Ly8mIzIyOTvChSYjMTcyOyYjMjI4OyYjMTg4O8KXJiMyMjk7JiMxODQ7wpAmIzIyOTvCjyYjMTgzOwogICAgfQoKICAgIG1lc3NhZ2UgUHVsbE1wSW5wdXQgLy8mIzIzMTsmIzE3MTsmIzE3NTsmIzIyODsmIzE4NDvCiiYjMjMwO8KLwokmIzIyOTvCj8KWJiMyMjk7woUmIzE3MjsmIzIyODsmIzE4ODvClyYjMjMyOyYjMTgwOyYjMTY2OyYjMjI5O8KPJiMxODM7JiMyMjg7JiMxOTE7JiMxNjE7JiMyMzA7woEmIzE3NTsKICAgIHsKICAgICAgICByZXF1aXJlZCBpbnQ2NCB0aW1lPTE7Ly8mIzIyOTvChSYjMTcyOyYjMjI4OyYjMTg4O8KXJiMyMjk7JiMxODQ7wpAmIzIyOTvCjyYjMTgzOyYjMjI4OyYjMTkxOyYjMTc0OyYjMjMwO8KUJiMxODU7JiMyMzA7wpcmIzE4MjsmIzIzMzvClyYjMTgwOwogICAgICAgIHJlcXVpcmVkIHN0cmluZyBtcGlkPTI7Ly8mIzIzMTsmIzE3MTsmIzE3NTsmIzIyODsmIzE4NDvCiiYjMjMxOyYjMTg4O8KTJiMyMjk7JiMxNzM7wpgmIzIyOTvChSYjMTcyOyYjMjI4OyYjMTg4O8KXJiMyMjk7JiMxODQ7wpAmIzIyOTvCjyYjMTgzOyYjMjMxO8KawoRpZCYjMjMxO8KawoRtZDUmIzIyODsmIzE4NDsmIzE3ODsKICAgIH0KCiAgICBtZXNzYWdlIFB1bGxNcE91dHB1dAogICAgewogICAgICAgIHJlcXVpcmVkIGludDMyIHN0YXR1cz0xOy8vJiMyMzA7wpgmIzE3NTsmIzIyOTvCkCYjMTY2OyYjMjMwO8KcwokmIzIzMDsmIzE4MzsmIzE4NzsmIzIyOTvCiiYjMTYwOyYjMjI5O8KSwowmIzIyOTvCiCYjMTYwOyYjMjMzO8KZJiMxNjQ7JiMyMzk7JiMxODg7wowmIzIyOTsmIzE2NjvCgiYjMjMwO8KewpwmIzIzMDvCnMKJJiMyMjk7wo/CmCYjMjI5O8KMwpYmIzIyOTvCiMKZJiMyMzI7JiMxOTE7wpQmIzIyOTvCm8KeJiMyMjk7woUmIzE2ODsmIzIzMzvCgyYjMTY4OyYjMjM5OyYjMTg4O8KMJiMyMjk7wpAmIzE2NjsmIzIyOTvCiMKZJiMyMzI7JiMxOTE7wpQmIzIyOTvCm8KeJiMyMzA7wpsmIzE4MDsmIzIzMDvCliYjMTc2OyYjMjMxO8KawoQKICAgICAgICByZXBlYXRlZCBNcEluZm8gaW5mbyA9IDI7Ly8mIzIyOTvChSYjMTcyOyYjMjI4OyYjMTg4O8KXJiMyMjk7JiMxODQ7wpAmIzIyOTvCjyYjMTgzOwogICAgfQogICAgbWVzc2FnZSBIaXN0b3J5TXNnSW5wdXQgIAogICAgewogICAgICAgIG9wdGlvbmFsIHN0cmluZyB0YXJnZXRJZCA9IDE7Ly8mIzIzMjvCgcKKJiMyMjk7JiMxNjQ7JiMxNjk7JiMyMjk7JiMxNzQ7JiMxNjQ7SUQKICAgICAgICBvcHRpb25hbCBpbnQ2NCB0aW1lID0gMjsvLyYjMjMwO8KfJiMxNjU7JiMyMzI7JiMxNzU7JiMxNjI7JiMyMzA7wpcmIzE4MjsmIzIzMzvClyYjMTgwOyYjMjMxO8KCJiMxODU7CiAgICAgICAgb3B0aW9uYWwgaW50MzIgY291bnQgID0gMzsvLyYjMjMwO8KLwokmIzIyOTvCj8KWJiMyMzA7wp0mIzE2MTsmIzIzMDvClSYjMTc2OwogICAgICAgIG9wdGlvbmFsIGludDMyIG9yZGVyID0gNDsvLyYjMjMwO8KLwokmIzIyOTvCj8KWJiMyMzM7JiMxNjE7JiMxODY7JiMyMjk7JiMxODY7wo8gKDEmIzIzOTsmIzE4ODvCmiYjMjMwOyYjMTczOyYjMTYzOyYjMjI5OyYjMTg2O8KPJiMyMzk7JiMxODg7wpswJiMyMzk7JiMxODg7wpomIzIyOTvCgMKSJiMyMjk7JiMxODY7wo8pCiAgICB9CgogICAgbWVzc2FnZSBIaXN0b3J5TXNnT3VwdXQgIC8vJiMyMzI7JiMxOTE7wpQmIzIyOTvCm8KeJiMyMzI7woHCiiYjMjI5OyYjMTY0OyYjMTY5OyYjMjI5OyYjMTc0OyYjMTY0OyYjMjI5O8KOwoYmIzIyOTvCjyYjMTc4OyYjMjMwOyYjMTgyO8KIJiMyMzA7woEmIzE3NTsKICAgIHsKICAgICAgICByZXBlYXRlZCBEb3duU3RyZWFtTWVzc2FnZSBsaXN0PTE7Ly8mIzIzMDvCicKAJiMyMzA7wosmIzE2NTsmIzIzMDvCnMKJJiMyMzE7wprChCYjMjMwOyYjMTgyO8KIJiMyMzA7woEmIzE3NTsmIzIzOTsmIzE4ODvCiGxpc3QmIzIyOTsmIzE2NDvCjSYjMjMxOyYjMTc3OyYjMTg3OyYjMjI5O8KewosmIzIzOTsmIzE4ODvCiQogICAgICAgIHJlcXVpcmVkIGludDY0IHN5bmNUaW1lPTI7Ly8mIzIyOTvCkMKMJiMyMzA7JiMxNzM7JiMxNjU7JiMyMzA7wpcmIzE4MjsmIzIzMzvClyYjMTgwOwogICAgICAgIHJlcXVpcmVkIGludDMyIGhhc01zZz0zOyAvLyYjMjMwO8KYJiMxNzU7JiMyMjk7wpAmIzE2NjsmIzIzMjsmIzE5MTvCmCYjMjMwO8KcwokmIzIyOTvCkMKOJiMyMzE7JiMxODc7JiMxNzM7JiMyMjk7wo7ChiYjMjI5O8KPJiMxNzg7JiMyMzA7JiMxODI7wogmIzIzMDvCgSYjMTc1OwogICAgfQogICAgbWVzc2FnZSBSdGNRdWVyeUxpc3RJbnB1dHsKICAgICAgb3B0aW9uYWwgaW50MzIgb3JkZXI9MTsgLy8mIzIzMDvCnSYjMTYxOyYjMjMwO8KVJiMxNzY7JiMyMzM7wpnCkCYjMjI5O8KIJiMxODI7JiMyMjk7wpwmIzE2ODsmIzIzMDvCnMKNJiMyMjk7woomIzE2MTsmIzIzMTsmIzE3MTsmIzE3NTsmIzIyOTvCgcKaIDEgJiMyMzA7wpgmIzE3NTsmIzIzMDsmIzE3MzsmIzE2MzsmIzIyOTsmIzE4NjvCjywyJiMyMzA7wpgmIzE3NTsmIzIyOTvCgMKSJiMyMjk7JiMxODY7wo8KICAgIH0KCiAgICBtZXNzYWdlIFJ0Y0tleURlbGV0ZUlucHV0ewogICAgICByZXBlYXRlZCBzdHJpbmcga2V5PTE7CiAgICB9CgogICAgbWVzc2FnZSBSdGNWYWx1ZUluZm97CiAgICAgIHJlcXVpcmVkIHN0cmluZyBrZXk9MTsKICAgICAgcmVxdWlyZWQgc3RyaW5nIHZhbHVlPTI7CiAgICB9CgogICAgbWVzc2FnZSBSdGNVc2VySW5mb3sKICAgICAgcmVxdWlyZWQgc3RyaW5nIHVzZXJJZD0xOwogICAgICByZXBlYXRlZCBSdGNWYWx1ZUluZm8gdXNlckRhdGE9MjsKICAgIH0KCiAgICBtZXNzYWdlIFJ0Y1VzZXJMaXN0T3V0cHV0ewogICAgICByZXBlYXRlZCBSdGNVc2VySW5mbyBsaXN0PTE7CiAgICAgIG9wdGlvbmFsIHN0cmluZyB0b2tlbj0yOwogICAgfQogICAgbWVzc2FnZSBSdGNSb29tSW5mb091dHB1dHsKICAgICAgICBvcHRpb25hbCBzdHJpbmcgcm9vbUlkID0gMTsKICAgICAgICByZXBlYXRlZCBSdGNWYWx1ZUluZm8gcm9vbURhdGEgPSAyOwogICAgICAgIG9wdGlvbmFsIGludDMyIHVzZXJDb3VudCA9IDM7CiAgICAgICAgcmVwZWF0ZWQgUnRjVXNlckluZm8gbGlzdD00OwogICAgfQogICAgbWVzc2FnZSBSdGNJbnB1dHsKICAgICAgb3B0aW9uYWwgaW50MzIgbm90aGluZz0xOwogICAgfQogICAgbWVzc2FnZSBSdGNRcnlJbnB1dHsgLy9xdWVyeSAmIzIyOTvCjyYjMTc1OyYjMjI4OyYjMTg3OyYjMTY1OyYjMjMwO8KYJiMxNzU7JiMyMzA7wp8mIzE2NTsmIzIzMjsmIzE3NTsmIzE2MjsmIzIyOTvCjcKVJiMyMjg7JiMxODQ7JiMxNzA7JiMyMjk7JiMxNzc7wp4mIzIzMDvCgCYjMTY3OyYjMjI4OyYjMTg1O8KfJiMyMjk7wo8mIzE3NTsmIzIyODsmIzE4NzsmIzE2NTsmIzIzMDvCnyYjMTY1OyYjMjMyOyYjMTc1OyYjMTYyOyYjMjI5OyYjMTY0O8KaJiMyMjg7JiMxODQ7JiMxNzA7JiMyMjk7JiMxNzc7wp4mIzIzMDvCgCYjMTY3OwogICAgICByZXF1aXJlZCBib29sIGlzSW50ZXJpb3I9MTsvLyYjMjMwO8KYJiMxNzU7JiMyMjk7wpAmIzE2NjsmIzIyODsmIzE4NDsmIzE4NjsmIzIzMjvCjiYjMTgzOyYjMjI5O8KPwpYmIzIyOTvChsKFJiMyMzM7woMmIzE2ODsmIzIzMDvClSYjMTc2OyYjMjMwO8KNJiMxNzQ7CiAgICAgIHJlcXVpcmVkIHRhcmdldFR5cGUgdGFyZ2V0PTI7CiAgICAgIHJlcGVhdGVkIHN0cmluZyBrZXk9MzsgLy8mIzIyOTvCiCYjMTYwOyYjMjMzO8KZJiMxNjQ7JiMyMzA7wozChyYjMjI5OyYjMTc0O8KaIHVzZXIgJiMyMzA7wojCliYjMjMyO8KAwoUgcm9vbSBJZCYjMjMxO8KawoQga2V5CiAgICB9CiAgICBtZXNzYWdlIFJ0Y1FyeU91dHB1dHsKICAgICAgcmVwZWF0ZWQgUnRjVmFsdWVJbmZvIG91dEluZm89MTsKICAgIH0KICAgIG1lc3NhZ2UgUnRjRGVsRGF0YUlucHV0ewogICAgICByZXBlYXRlZCBzdHJpbmcga2V5PTE7IC8vJiMyMjk7wogmIzE2MDsmIzIzMzvCmSYjMTY0OyYjMjMwO8KMwocmIzIyOTsmIzE3NDvCmiB1c2VyICYjMjMwO8KIwpYmIzIzMjvCgMKFIHJvb20gSWQmIzIzMTvCmsKEIGtleQogICAgICByZXF1aXJlZCBib29sIGlzSW50ZXJpb3I9MjsvLyYjMjMwO8KYJiMxNzU7JiMyMjk7wpAmIzE2NjsmIzIyODsmIzE4NDsmIzE4NjsmIzIyOTsmIzE2NDvChCYjMjMxO8KQwoYmIzIyOTvChsKFJiMyMzM7woMmIzE2ODsmIzIzMDvClSYjMTc2OyYjMjMwO8KNJiMxNzQ7CiAgICAgIHJlcXVpcmVkIHRhcmdldFR5cGUgdGFyZ2V0PTM7CiAgICB9CiAgICBtZXNzYWdlIFJ0Y0RhdGFJbnB1dHsgCiAgICAgIHJlcXVpcmVkIGJvb2wgaW50ZXJpb3I9MTsKICAgICAgLy8mIzIzMDvCmCYjMTc1OyYjMjI5O8KQJiMxNjY7JiMyMjg7JiMxODQ7JiMxODY7JiMyMzI7wo4mIzE4MzsmIzIyOTvCj8KWJiMyMjk7wobChSYjMjMzO8KDJiMxNjg7JiMyMzA7wpUmIzE3NjsmIzIzMDvCjSYjMTc0OwogICAgICByZXF1aXJlZCB0YXJnZXRUeXBlIHRhcmdldD0yOwogICAgICAvLyYjMjI5O8KIJiMxNjA7JiMyMzM7wpkmIzE2NDsmIzIzMDvCjMKHJiMyMjk7JiMxNzQ7wpogdXNlciAmIzIzMDvCiMKWJiMyMzI7woDChSByb29tIElkJiMyMzE7wprChCBrZXkKICAgICAgcmVwZWF0ZWQgc3RyaW5nIGtleT0zOwogICAgICBvcHRpb25hbCBzdHJpbmcgb2JqZWN0TmFtZT00OwogICAgICBvcHRpb25hbCBzdHJpbmcgY29udGVudD01OwogICAgfQogICAgbWVzc2FnZSBSdGNTZXREYXRhSW5wdXR7CiAgICAgIHJlcXVpcmVkIGJvb2wgaW50ZXJpb3I9MTsvLyYjMjMwO8KYJiMxNzU7JiMyMjk7wpAmIzE2NjsmIzIyODsmIzE4NDsmIzE4NjsmIzIyOTvCj8KRJiMyMjk7JiMxODQ7woMmIzIyOTvChsKFJiMyMzM7woMmIzE2ODsmIzIzMDvClSYjMTc2OyYjMjMwO8KNJiMxNzQ7CiAgICAgIHJlcXVpcmVkIHRhcmdldFR5cGUgdGFyZ2V0PTI7CiAgICAgIHJlcXVpcmVkIHN0cmluZyBrZXk9MzsKICAgICAgcmVxdWlyZWQgc3RyaW5nIHZhbHVlPTQ7CiAgICAgIG9wdGlvbmFsIHN0cmluZyBvYmplY3ROYW1lPTU7CiAgICAgIG9wdGlvbmFsIHN0cmluZyBjb250ZW50PTY7CiAgICB9CiAgICBtZXNzYWdlIFJ0Y091dHB1dAogICAgewogICAgICAgIG9wdGlvbmFsIGludDMyIG5vdGhpbmc9MTsgICAgLy8mIzIyOTvCjSYjMTYwOyYjMjI4OyYjMTg5O8KNCiAgICB9CiAgICBtZXNzYWdlIFJ0Y1Rva2VuT3V0cHV0ewogICAgICByZXF1aXJlZCBzdHJpbmcgcnRjVG9rZW49MTsKICAgIH0KICAgIGVudW0gdGFyZ2V0VHlwZSB7CiAgICAgIFJPT00gPTEgOwogICAgICBQRVJTT04gPSAyOwogICAgfQp9");var i = l.loadProto(h, undefined, "").build("Modules").probuf;return i;}(c, d, a);return e;});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../HBuilderX/plugins/uniapp-cli/node_modules/node-libs-browser/mock/process.js */ 24)))

/***/ }),

/***/ 24:
/*!********************************************************!*\
  !*** ./node_modules/node-libs-browser/mock/process.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
	setTimeout(fn, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__(/*! path */ 25);
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ 25:
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node-libs-browser/mock/process.js */ 24)))

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 363:
/*!***************************************************!*\
  !*** F:/kxsz/components/uni-calendar/calendar.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                     * @1900-2100区间内的公历、农历互转
                                                                                                     * @charset UTF-8
                                                                                                     * @github  https://github.com/jjonline/calendar.js
                                                                                                     * @Author  Jea杨(JJonline@JJonline.Cn)
                                                                                                     * @Time    2014-7-21
                                                                                                     * @Time    2016-8-13 Fixed 2033hex、Attribution Annals
                                                                                                     * @Time    2016-9-25 Fixed lunar LeapMonth Param Bug
                                                                                                     * @Time    2017-7-24 Fixed use getTerm Func Param Error.use solar year,NOT lunar year
                                                                                                     * @Version 1.0.3
                                                                                                     * @公历转农历：calendar.solar2lunar(1987,11,01); //[you can ignore params of prefix 0]
                                                                                                     * @农历转公历：calendar.lunar2solar(1987,09,10); //[you can ignore params of prefix 0]
                                                                                                     */
/* eslint-disable */
var calendar = {

  /**
                     * 农历1900-2100的润大小信息表
                     * @Array Of Property
                     * @return Hex
                     */
  lunarInfo: [0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2, // 1900-1909
  0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977, // 1910-1919
  0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970, // 1920-1929
  0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950, // 1930-1939
  0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557, // 1940-1949
  0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0, // 1950-1959
  0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0, // 1960-1969
  0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6, // 1970-1979
  0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570, // 1980-1989
  0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x05ac0, 0x0ab60, 0x096d5, 0x092e0, // 1990-1999
  0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5, // 2000-2009
  0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930, // 2010-2019
  0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530, // 2020-2029
  0x05aa0, 0x076a3, 0x096d0, 0x04afb, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45, // 2030-2039
  0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0, // 2040-2049
  /** Add By JJonline@JJonline.Cn**/
  0x14b63, 0x09370, 0x049f8, 0x04970, 0x064b0, 0x168a6, 0x0ea50, 0x06b20, 0x1a6c4, 0x0aae0, // 2050-2059
  0x0a2e0, 0x0d2e3, 0x0c960, 0x0d557, 0x0d4a0, 0x0da50, 0x05d55, 0x056a0, 0x0a6d0, 0x055d4, // 2060-2069
  0x052d0, 0x0a9b8, 0x0a950, 0x0b4a0, 0x0b6a6, 0x0ad50, 0x055a0, 0x0aba4, 0x0a5b0, 0x052b0, // 2070-2079
  0x0b273, 0x06930, 0x07337, 0x06aa0, 0x0ad50, 0x14b55, 0x04b60, 0x0a570, 0x054e4, 0x0d160, // 2080-2089
  0x0e968, 0x0d520, 0x0daa0, 0x16aa6, 0x056d0, 0x04ae0, 0x0a9d4, 0x0a2d0, 0x0d150, 0x0f252, // 2090-2099
  0x0d520], // 2100

  /**
      * 公历每个月份的天数普通表
      * @Array Of Property
      * @return Number
      */
  solarMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],

  /**
                                                                    * 天干地支之天干速查表
                                                                    * @Array Of Property trans["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"]
                                                                    * @return Cn string
                                                                    */
  Gan: ["\u7532", "\u4E59", "\u4E19", "\u4E01", "\u620A", "\u5DF1", "\u5E9A", "\u8F9B", "\u58EC", "\u7678"],

  /**
                                                                                                                 * 天干地支之地支速查表
                                                                                                                 * @Array Of Property
                                                                                                                 * @trans["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"]
                                                                                                                 * @return Cn string
                                                                                                                 */
  Zhi: ["\u5B50", "\u4E11", "\u5BC5", "\u536F", "\u8FB0", "\u5DF3", "\u5348", "\u672A", "\u7533", "\u9149", "\u620C", "\u4EA5"],

  /**
                                                                                                                                     * 天干地支之地支速查表<=>生肖
                                                                                                                                     * @Array Of Property
                                                                                                                                     * @trans["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"]
                                                                                                                                     * @return Cn string
                                                                                                                                     */
  Animals: ["\u9F20", "\u725B", "\u864E", "\u5154", "\u9F99", "\u86C7", "\u9A6C", "\u7F8A", "\u7334", "\u9E21", "\u72D7", "\u732A"],

  /**
                                                                                                                                         * 24节气速查表
                                                                                                                                         * @Array Of Property
                                                                                                                                         * @trans["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"]
                                                                                                                                         * @return Cn string
                                                                                                                                         */
  solarTerm: ["\u5C0F\u5BD2", "\u5927\u5BD2", "\u7ACB\u6625", "\u96E8\u6C34", "\u60CA\u86F0", "\u6625\u5206", "\u6E05\u660E", "\u8C37\u96E8", "\u7ACB\u590F", "\u5C0F\u6EE1", "\u8292\u79CD", "\u590F\u81F3", "\u5C0F\u6691", "\u5927\u6691", "\u7ACB\u79CB", "\u5904\u6691", "\u767D\u9732", "\u79CB\u5206", "\u5BD2\u9732", "\u971C\u964D", "\u7ACB\u51AC", "\u5C0F\u96EA", "\u5927\u96EA", "\u51AC\u81F3"],

  /**
                                                                                                                                                                                                                                                                                                                                                                                                                   * 1900-2100各年的24节气日期速查表
                                                                                                                                                                                                                                                                                                                                                                                                                   * @Array Of Property
                                                                                                                                                                                                                                                                                                                                                                                                                   * @return 0x string For splice
                                                                                                                                                                                                                                                                                                                                                                                                                   */
  sTermInfo: ['9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f',
  '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e',
  '97bcf97c359801ec95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa',
  '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f',
  'b027097bd097c36b0b6fc9274c91aa', '9778397bd19801ec9210c965cc920e', '97b6b97bd19801ec95f8c965cc920f',
  '97bd09801d98082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd197c36c9210c9274c91aa',
  '97b6b97bd19801ec95f8c965cc920e', '97bd09801d98082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2',
  '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec95f8c965cc920e', '97bcf97c3598082c95f8e1cfcc920f',
  '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec9210c965cc920e',
  '97bcf97c3598082c95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
  '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722',
  '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f',
  '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e',
  '97bcf97c359801ec95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
  '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd097bd07f595b0b6fc920fb0722',
  '9778397bd097c36b0b6fc9210c8dc2', '9778397bd19801ec9210c9274c920e', '97b6b97bd19801ec95f8c965cc920f',
  '97bd07f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c920e',
  '97b6b97bd19801ec95f8c965cc920f', '97bd07f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2',
  '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bd07f1487f595b0b0bc920fb0722',
  '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e',
  '97bcf7f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
  '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722',
  '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f531b0b0bb0b6fb0722',
  '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e',
  '97bcf7f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
  '97b6b97bd19801ec9210c9274c920e', '97bcf7f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722',
  '9778397bd097c36b0b6fc9210c91aa', '97b6b97bd197c36c9210c9274c920e', '97bcf7f0e47f531b0b0bb0b6fb0722',
  '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c920e',
  '97b6b7f0e47f531b0723b0b6fb0722', '7f0e37f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2',
  '9778397bd097c36b0b70c9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e37f1487f595b0b0bb0b6fb0722',
  '7f0e397bd097c35b0b6fc9210c8dc2', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721',
  '7f0e27f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
  '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722',
  '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722',
  '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721',
  '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
  '97b6b7f0e47f531b0723b0787b0721', '7f0e27f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722',
  '9778397bd097c36b0b6fc9210c91aa', '97b6b7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722',
  '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '977837f0e37f149b0723b0787b0721',
  '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f5307f595b0b0bc920fb0722', '7f0e397bd097c35b0b6fc9210c8dc2',
  '977837f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e37f1487f595b0b0bb0b6fb0722',
  '7f0e397bd097c35b0b6fc9210c8dc2', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721',
  '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '977837f0e37f14998082b0787b06bd',
  '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722',
  '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722',
  '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721',
  '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0787b06bd',
  '7f07e7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722',
  '977837f0e37f14998082b0723b06bd', '7f07e7f0e37f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722',
  '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b0721',
  '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f1487f595b0b0bb0b6fb0722', '7f0e37f0e37f14898082b0723b02d5',
  '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f1487f531b0b0bb0b6fb0722',
  '7f0e37f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721',
  '7f0e37f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd',
  '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b072297c35',
  '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722',
  '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f149b0723b0787b0721',
  '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0723b06bd',
  '7f07e7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e37f0e366aa89801eb072297c35',
  '7ec967f0e37f14998082b0723b06bd', '7f07e7f0e37f14998083b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722',
  '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14898082b0723b02d5', '7f07e7f0e37f14998082b0787b0721',
  '7f07e7f0e47f531b0723b0b6fb0722', '7f0e36665b66aa89801e9808297c35', '665f67f0e37f14898082b0723b02d5',
  '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e36665b66a449801e9808297c35',
  '665f67f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721',
  '7f0e36665b66a449801e9808297c35', '665f67f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd',
  '7f07e7f0e47f531b0723b0b6fb0721', '7f0e26665b66a449801e9808297c35', '665f67f0e37f1489801eb072297c35',
  '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722'],

  /**
                                                                                                             * 数字转中文速查表
                                                                                                             * @Array Of Property
                                                                                                             * @trans ['日','一','二','三','四','五','六','七','八','九','十']
                                                                                                             * @return Cn string
                                                                                                             */
  nStr1: ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D", "\u5341"],

  /**
                                                                                                                             * 日期转农历称呼速查表
                                                                                                                             * @Array Of Property
                                                                                                                             * @trans ['初','十','廿','卅']
                                                                                                                             * @return Cn string
                                                                                                                             */
  nStr2: ["\u521D", "\u5341", "\u5EFF", "\u5345"],

  /**
                                                       * 月份转农历称呼速查表
                                                       * @Array Of Property
                                                       * @trans ['正','一','二','三','四','五','六','七','八','九','十','冬','腊']
                                                       * @return Cn string
                                                       */
  nStr3: ["\u6B63", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D", "\u5341", "\u51AC", "\u814A"],

  /**
                                                                                                                                       * 返回农历y年一整年的总天数
                                                                                                                                       * @param lunar Year
                                                                                                                                       * @return Number
                                                                                                                                       * @eg:var count = calendar.lYearDays(1987) ;//count=387
                                                                                                                                       */
  lYearDays: function lYearDays(y) {
    var i;var sum = 348;
    for (i = 0x8000; i > 0x8; i >>= 1) {sum += this.lunarInfo[y - 1900] & i ? 1 : 0;}
    return sum + this.leapDays(y);
  },

  /**
         * 返回农历y年闰月是哪个月；若y年没有闰月 则返回0
         * @param lunar Year
         * @return Number (0-12)
         * @eg:var leapMonth = calendar.leapMonth(1987) ;//leapMonth=6
         */
  leapMonth: function leapMonth(y) {// 闰字编码 \u95f0
    return this.lunarInfo[y - 1900] & 0xf;
  },

  /**
         * 返回农历y年闰月的天数 若该年没有闰月则返回0
         * @param lunar Year
         * @return Number (0、29、30)
         * @eg:var leapMonthDay = calendar.leapDays(1987) ;//leapMonthDay=29
         */
  leapDays: function leapDays(y) {
    if (this.leapMonth(y)) {
      return this.lunarInfo[y - 1900] & 0x10000 ? 30 : 29;
    }
    return 0;
  },

  /**
         * 返回农历y年m月（非闰月）的总天数，计算m为闰月时的天数请使用leapDays方法
         * @param lunar Year
         * @return Number (-1、29、30)
         * @eg:var MonthDay = calendar.monthDays(1987,9) ;//MonthDay=29
         */
  monthDays: function monthDays(y, m) {
    if (m > 12 || m < 1) {return -1;} // 月份参数从1至12，参数错误返回-1
    return this.lunarInfo[y - 1900] & 0x10000 >> m ? 30 : 29;
  },

  /**
         * 返回公历(!)y年m月的天数
         * @param solar Year
         * @return Number (-1、28、29、30、31)
         * @eg:var solarMonthDay = calendar.leapDays(1987) ;//solarMonthDay=30
         */
  solarDays: function solarDays(y, m) {
    if (m > 12 || m < 1) {return -1;} // 若参数错误 返回-1
    var ms = m - 1;
    if (ms == 1) {// 2月份的闰平规律测算后确认返回28或29
      return y % 4 == 0 && y % 100 != 0 || y % 400 == 0 ? 29 : 28;
    } else {
      return this.solarMonth[ms];
    }
  },

  /**
        * 农历年份转换为干支纪年
        * @param  lYear 农历年的年份数
        * @return Cn string
        */
  toGanZhiYear: function toGanZhiYear(lYear) {
    var ganKey = (lYear - 3) % 10;
    var zhiKey = (lYear - 3) % 12;
    if (ganKey == 0) ganKey = 10; // 如果余数为0则为最后一个天干
    if (zhiKey == 0) zhiKey = 12; // 如果余数为0则为最后一个地支
    return this.Gan[ganKey - 1] + this.Zhi[zhiKey - 1];
  },

  /**
        * 公历月、日判断所属星座
        * @param  cMonth [description]
        * @param  cDay [description]
        * @return Cn string
        */
  toAstro: function toAstro(cMonth, cDay) {
    var s = "\u9B54\u7FAF\u6C34\u74F6\u53CC\u9C7C\u767D\u7F8A\u91D1\u725B\u53CC\u5B50\u5DE8\u87F9\u72EE\u5B50\u5904\u5973\u5929\u79E4\u5929\u874E\u5C04\u624B\u9B54\u7FAF";
    var arr = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
    return s.substr(cMonth * 2 - (cDay < arr[cMonth - 1] ? 2 : 0), 2) + "\u5EA7"; // 座
  },

  /**
         * 传入offset偏移量返回干支
         * @param offset 相对甲子的偏移量
         * @return Cn string
         */
  toGanZhi: function toGanZhi(offset) {
    return this.Gan[offset % 10] + this.Zhi[offset % 12];
  },

  /**
         * 传入公历(!)y年获得该年第n个节气的公历日期
         * @param y公历年(1900-2100)；n二十四节气中的第几个节气(1~24)；从n=1(小寒)算起
         * @return day Number
         * @eg:var _24 = calendar.getTerm(1987,3) ;//_24=4;意即1987年2月4日立春
         */
  getTerm: function getTerm(y, n) {
    if (y < 1900 || y > 2100) {return -1;}
    if (n < 1 || n > 24) {return -1;}
    var _table = this.sTermInfo[y - 1900];
    var _info = [
    parseInt('0x' + _table.substr(0, 5)).toString(),
    parseInt('0x' + _table.substr(5, 5)).toString(),
    parseInt('0x' + _table.substr(10, 5)).toString(),
    parseInt('0x' + _table.substr(15, 5)).toString(),
    parseInt('0x' + _table.substr(20, 5)).toString(),
    parseInt('0x' + _table.substr(25, 5)).toString()];

    var _calday = [
    _info[0].substr(0, 1),
    _info[0].substr(1, 2),
    _info[0].substr(3, 1),
    _info[0].substr(4, 2),

    _info[1].substr(0, 1),
    _info[1].substr(1, 2),
    _info[1].substr(3, 1),
    _info[1].substr(4, 2),

    _info[2].substr(0, 1),
    _info[2].substr(1, 2),
    _info[2].substr(3, 1),
    _info[2].substr(4, 2),

    _info[3].substr(0, 1),
    _info[3].substr(1, 2),
    _info[3].substr(3, 1),
    _info[3].substr(4, 2),

    _info[4].substr(0, 1),
    _info[4].substr(1, 2),
    _info[4].substr(3, 1),
    _info[4].substr(4, 2),

    _info[5].substr(0, 1),
    _info[5].substr(1, 2),
    _info[5].substr(3, 1),
    _info[5].substr(4, 2)];

    return parseInt(_calday[n - 1]);
  },

  /**
         * 传入农历数字月份返回汉语通俗表示法
         * @param lunar month
         * @return Cn string
         * @eg:var cnMonth = calendar.toChinaMonth(12) ;//cnMonth='腊月'
         */
  toChinaMonth: function toChinaMonth(m) {// 月 => \u6708
    if (m > 12 || m < 1) {return -1;} // 若参数错误 返回-1
    var s = this.nStr3[m - 1];
    s += "\u6708"; // 加上月字
    return s;
  },

  /**
         * 传入农历日期数字返回汉字表示法
         * @param lunar day
         * @return Cn string
         * @eg:var cnDay = calendar.toChinaDay(21) ;//cnMonth='廿一'
         */
  toChinaDay: function toChinaDay(d) {// 日 => \u65e5
    var s;
    switch (d) {
      case 10:
        s = "\u521D\u5341";break;
      case 20:
        s = "\u4E8C\u5341";break;
        break;
      case 30:
        s = "\u4E09\u5341";break;
        break;
      default:
        s = this.nStr2[Math.floor(d / 10)];
        s += this.nStr1[d % 10];}

    return s;
  },

  /**
         * 年份转生肖[!仅能大致转换] => 精确划分生肖分界线是“立春”
         * @param y year
         * @return Cn string
         * @eg:var animal = calendar.getAnimal(1987) ;//animal='兔'
         */
  getAnimal: function getAnimal(y) {
    return this.Animals[(y - 4) % 12];
  },

  /**
         * 传入阳历年月日获得详细的公历、农历object信息 <=>JSON
         * @param y  solar year
         * @param m  solar month
         * @param d  solar day
         * @return JSON object
         * @eg:console.log(calendar.solar2lunar(1987,11,01));
         */
  solar2lunar: function solar2lunar(y, m, d) {// 参数区间1900.1.31~2100.12.31
    // 年份限定、上限
    if (y < 1900 || y > 2100) {
      return -1; // undefined转换为数字变为NaN
    }
    // 公历传参最下限
    if (y == 1900 && m == 1 && d < 31) {
      return -1;
    }
    // 未传参  获得当天
    if (!y) {
      var objDate = new Date();
    } else {
      var objDate = new Date(y, parseInt(m) - 1, d);
    }
    var i;var leap = 0;var temp = 0;
    // 修正ymd参数
    var y = objDate.getFullYear();
    var m = objDate.getMonth() + 1;
    var d = objDate.getDate();
    var offset = (Date.UTC(objDate.getFullYear(), objDate.getMonth(), objDate.getDate()) - Date.UTC(1900, 0, 31)) / 86400000;
    for (i = 1900; i < 2101 && offset > 0; i++) {
      temp = this.lYearDays(i);
      offset -= temp;
    }
    if (offset < 0) {
      offset += temp;i--;
    }

    // 是否今天
    var isTodayObj = new Date();
    var isToday = false;
    if (isTodayObj.getFullYear() == y && isTodayObj.getMonth() + 1 == m && isTodayObj.getDate() == d) {
      isToday = true;
    }
    // 星期几
    var nWeek = objDate.getDay();
    var cWeek = this.nStr1[nWeek];
    // 数字表示周几顺应天朝周一开始的惯例
    if (nWeek == 0) {
      nWeek = 7;
    }
    // 农历年
    var year = i;
    var leap = this.leapMonth(i); // 闰哪个月
    var isLeap = false;

    // 效验闰月
    for (i = 1; i < 13 && offset > 0; i++) {
      // 闰月
      if (leap > 0 && i == leap + 1 && isLeap == false) {
        --i;
        isLeap = true;temp = this.leapDays(year); // 计算农历闰月天数
      } else {
        temp = this.monthDays(year, i); // 计算农历普通月天数
      }
      // 解除闰月
      if (isLeap == true && i == leap + 1) {isLeap = false;}
      offset -= temp;
    }
    // 闰月导致数组下标重叠取反
    if (offset == 0 && leap > 0 && i == leap + 1) {
      if (isLeap) {
        isLeap = false;
      } else {
        isLeap = true;--i;
      }
    }
    if (offset < 0) {
      offset += temp;--i;
    }
    // 农历月
    var month = i;
    // 农历日
    var day = offset + 1;
    // 天干地支处理
    var sm = m - 1;
    var gzY = this.toGanZhiYear(year);

    // 当月的两个节气
    // bugfix-2017-7-24 11:03:38 use lunar Year Param `y` Not `year`
    var firstNode = this.getTerm(y, m * 2 - 1); // 返回当月「节」为几日开始
    var secondNode = this.getTerm(y, m * 2); // 返回当月「节」为几日开始

    // 依据12节气修正干支月
    var gzM = this.toGanZhi((y - 1900) * 12 + m + 11);
    if (d >= firstNode) {
      gzM = this.toGanZhi((y - 1900) * 12 + m + 12);
    }

    // 传入的日期的节气与否
    var isTerm = false;
    var Term = null;
    if (firstNode == d) {
      isTerm = true;
      Term = this.solarTerm[m * 2 - 2];
    }
    if (secondNode == d) {
      isTerm = true;
      Term = this.solarTerm[m * 2 - 1];
    }
    // 日柱 当月一日与 1900/1/1 相差天数
    var dayCyclical = Date.UTC(y, sm, 1, 0, 0, 0, 0) / 86400000 + 25567 + 10;
    var gzD = this.toGanZhi(dayCyclical + d - 1);
    // 该日期所属的星座
    var astro = this.toAstro(m, d);

    return { 'lYear': year, 'lMonth': month, 'lDay': day, 'Animal': this.getAnimal(year), 'IMonthCn': (isLeap ? "\u95F0" : '') + this.toChinaMonth(month), 'IDayCn': this.toChinaDay(day), 'cYear': y, 'cMonth': m, 'cDay': d, 'gzYear': gzY, 'gzMonth': gzM, 'gzDay': gzD, 'isToday': isToday, 'isLeap': isLeap, 'nWeek': nWeek, 'ncWeek': "\u661F\u671F" + cWeek, 'isTerm': isTerm, 'Term': Term, 'astro': astro };
  },

  /**
         * 传入农历年月日以及传入的月份是否闰月获得详细的公历、农历object信息 <=>JSON
         * @param y  lunar year
         * @param m  lunar month
         * @param d  lunar day
         * @param isLeapMonth  lunar month is leap or not.[如果是农历闰月第四个参数赋值true即可]
         * @return JSON object
         * @eg:console.log(calendar.lunar2solar(1987,9,10));
         */
  lunar2solar: function lunar2solar(y, m, d, isLeapMonth) {// 参数区间1900.1.31~2100.12.1
    var isLeapMonth = !!isLeapMonth;
    var leapOffset = 0;
    var leapMonth = this.leapMonth(y);
    var leapDay = this.leapDays(y);
    if (isLeapMonth && leapMonth != m) {return -1;} // 传参要求计算该闰月公历 但该年得出的闰月与传参的月份并不同
    if (y == 2100 && m == 12 && d > 1 || y == 1900 && m == 1 && d < 31) {return -1;} // 超出了最大极限值
    var day = this.monthDays(y, m);
    var _day = day;
    // bugFix 2016-9-25
    // if month is leap, _day use leapDays method
    if (isLeapMonth) {
      _day = this.leapDays(y, m);
    }
    if (y < 1900 || y > 2100 || d > _day) {return -1;} // 参数合法性效验

    // 计算农历的时间差
    var offset = 0;
    for (var i = 1900; i < y; i++) {
      offset += this.lYearDays(i);
    }
    var leap = 0;var isAdd = false;
    for (var i = 1; i < m; i++) {
      leap = this.leapMonth(y);
      if (!isAdd) {// 处理闰月
        if (leap <= i && leap > 0) {
          offset += this.leapDays(y);isAdd = true;
        }
      }
      offset += this.monthDays(y, i);
    }
    // 转换闰月农历 需补充该年闰月的前一个月的时差
    if (isLeapMonth) {offset += day;}
    // 1900年农历正月一日的公历时间为1900年1月30日0时0分0秒(该时间也是本农历的最开始起始点)
    var stmap = Date.UTC(1900, 1, 30, 0, 0, 0);
    var calObj = new Date((offset + d - 31) * 86400000 + stmap);
    var cY = calObj.getUTCFullYear();
    var cM = calObj.getUTCMonth() + 1;
    var cD = calObj.getUTCDate();

    return this.solar2lunar(cY, cM, cD);
  } };var _default =


calendar;exports.default = _default;

/***/ }),

/***/ 378:
/*!*********************************************************!*\
  !*** F:/kxsz/components/w-picker/city-data/province.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /* eslint-disable */
var provinceData = [{
  "label": "北京市",
  "value": "11" },

{
  "label": "天津市",
  "value": "12" },

{
  "label": "河北省",
  "value": "13" },

{
  "label": "山西省",
  "value": "14" },

{
  "label": "内蒙古自治区",
  "value": "15" },

{
  "label": "辽宁省",
  "value": "21" },

{
  "label": "吉林省",
  "value": "22" },

{
  "label": "黑龙江省",
  "value": "23" },

{
  "label": "上海市",
  "value": "31" },

{
  "label": "江苏省",
  "value": "32" },

{
  "label": "浙江省",
  "value": "33" },

{
  "label": "安徽省",
  "value": "34" },

{
  "label": "福建省",
  "value": "35" },

{
  "label": "江西省",
  "value": "36" },

{
  "label": "山东省",
  "value": "37" },

{
  "label": "河南省",
  "value": "41" },

{
  "label": "湖北省",
  "value": "42" },

{
  "label": "湖南省",
  "value": "43" },

{
  "label": "广东省",
  "value": "44" },

{
  "label": "广西壮族自治区",
  "value": "45" },

{
  "label": "海南省",
  "value": "46" },

{
  "label": "重庆市",
  "value": "50" },

{
  "label": "四川省",
  "value": "51" },

{
  "label": "贵州省",
  "value": "52" },

{
  "label": "云南省",
  "value": "53" },

{
  "label": "西藏自治区",
  "value": "54" },

{
  "label": "陕西省",
  "value": "61" },

{
  "label": "甘肃省",
  "value": "62" },

{
  "label": "青海省",
  "value": "63" },

{
  "label": "宁夏回族自治区",
  "value": "64" },

{
  "label": "新疆维吾尔自治区",
  "value": "65" },

{
  "label": "台湾",
  "value": "66" },

{
  "label": "香港",
  "value": "67" },

{
  "label": "澳门",
  "value": "68" }];var _default =


provinceData;exports.default = _default;

/***/ }),

/***/ 379:
/*!*****************************************************!*\
  !*** F:/kxsz/components/w-picker/city-data/city.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /* eslint-disable */
var cityData = [
[{
  "label": "市辖区",
  "value": "1101" }],

[{
  "label": "市辖区",
  "value": "1201" }],

[{
  "label": "石家庄市",
  "value": "1301" },

{
  "label": "唐山市",
  "value": "1302" },

{
  "label": "秦皇岛市",
  "value": "1303" },

{
  "label": "邯郸市",
  "value": "1304" },

{
  "label": "邢台市",
  "value": "1305" },

{
  "label": "保定市",
  "value": "1306" },

{
  "label": "张家口市",
  "value": "1307" },

{
  "label": "承德市",
  "value": "1308" },

{
  "label": "沧州市",
  "value": "1309" },

{
  "label": "廊坊市",
  "value": "1310" },

{
  "label": "衡水市",
  "value": "1311" }],


[{
  "label": "太原市",
  "value": "1401" },

{
  "label": "大同市",
  "value": "1402" },

{
  "label": "阳泉市",
  "value": "1403" },

{
  "label": "长治市",
  "value": "1404" },

{
  "label": "晋城市",
  "value": "1405" },

{
  "label": "朔州市",
  "value": "1406" },

{
  "label": "晋中市",
  "value": "1407" },

{
  "label": "运城市",
  "value": "1408" },

{
  "label": "忻州市",
  "value": "1409" },

{
  "label": "临汾市",
  "value": "1410" },

{
  "label": "吕梁市",
  "value": "1411" }],


[{
  "label": "呼和浩特市",
  "value": "1501" },

{
  "label": "包头市",
  "value": "1502" },

{
  "label": "乌海市",
  "value": "1503" },

{
  "label": "赤峰市",
  "value": "1504" },

{
  "label": "通辽市",
  "value": "1505" },

{
  "label": "鄂尔多斯市",
  "value": "1506" },

{
  "label": "呼伦贝尔市",
  "value": "1507" },

{
  "label": "巴彦淖尔市",
  "value": "1508" },

{
  "label": "乌兰察布市",
  "value": "1509" },

{
  "label": "兴安盟",
  "value": "1522" },

{
  "label": "锡林郭勒盟",
  "value": "1525" },

{
  "label": "阿拉善盟",
  "value": "1529" }],


[{
  "label": "沈阳市",
  "value": "2101" },

{
  "label": "大连市",
  "value": "2102" },

{
  "label": "鞍山市",
  "value": "2103" },

{
  "label": "抚顺市",
  "value": "2104" },

{
  "label": "本溪市",
  "value": "2105" },

{
  "label": "丹东市",
  "value": "2106" },

{
  "label": "锦州市",
  "value": "2107" },

{
  "label": "营口市",
  "value": "2108" },

{
  "label": "阜新市",
  "value": "2109" },

{
  "label": "辽阳市",
  "value": "2110" },

{
  "label": "盘锦市",
  "value": "2111" },

{
  "label": "铁岭市",
  "value": "2112" },

{
  "label": "朝阳市",
  "value": "2113" },

{
  "label": "葫芦岛市",
  "value": "2114" }],


[{
  "label": "长春市",
  "value": "2201" },

{
  "label": "吉林市",
  "value": "2202" },

{
  "label": "四平市",
  "value": "2203" },

{
  "label": "辽源市",
  "value": "2204" },

{
  "label": "通化市",
  "value": "2205" },

{
  "label": "白山市",
  "value": "2206" },

{
  "label": "松原市",
  "value": "2207" },

{
  "label": "白城市",
  "value": "2208" },

{
  "label": "延边朝鲜族自治州",
  "value": "2224" }],


[{
  "label": "哈尔滨市",
  "value": "2301" },

{
  "label": "齐齐哈尔市",
  "value": "2302" },

{
  "label": "鸡西市",
  "value": "2303" },

{
  "label": "鹤岗市",
  "value": "2304" },

{
  "label": "双鸭山市",
  "value": "2305" },

{
  "label": "大庆市",
  "value": "2306" },

{
  "label": "伊春市",
  "value": "2307" },

{
  "label": "佳木斯市",
  "value": "2308" },

{
  "label": "七台河市",
  "value": "2309" },

{
  "label": "牡丹江市",
  "value": "2310" },

{
  "label": "黑河市",
  "value": "2311" },

{
  "label": "绥化市",
  "value": "2312" },

{
  "label": "大兴安岭地区",
  "value": "2327" }],


[{
  "label": "市辖区",
  "value": "3101" }],

[{
  "label": "南京市",
  "value": "3201" },

{
  "label": "无锡市",
  "value": "3202" },

{
  "label": "徐州市",
  "value": "3203" },

{
  "label": "常州市",
  "value": "3204" },

{
  "label": "苏州市",
  "value": "3205" },

{
  "label": "南通市",
  "value": "3206" },

{
  "label": "连云港市",
  "value": "3207" },

{
  "label": "淮安市",
  "value": "3208" },

{
  "label": "盐城市",
  "value": "3209" },

{
  "label": "扬州市",
  "value": "3210" },

{
  "label": "镇江市",
  "value": "3211" },

{
  "label": "泰州市",
  "value": "3212" },

{
  "label": "宿迁市",
  "value": "3213" }],


[{
  "label": "杭州市",
  "value": "3301" },

{
  "label": "宁波市",
  "value": "3302" },

{
  "label": "温州市",
  "value": "3303" },

{
  "label": "嘉兴市",
  "value": "3304" },

{
  "label": "湖州市",
  "value": "3305" },

{
  "label": "绍兴市",
  "value": "3306" },

{
  "label": "金华市",
  "value": "3307" },

{
  "label": "衢州市",
  "value": "3308" },

{
  "label": "舟山市",
  "value": "3309" },

{
  "label": "台州市",
  "value": "3310" },

{
  "label": "丽水市",
  "value": "3311" }],


[{
  "label": "合肥市",
  "value": "3401" },

{
  "label": "芜湖市",
  "value": "3402" },

{
  "label": "蚌埠市",
  "value": "3403" },

{
  "label": "淮南市",
  "value": "3404" },

{
  "label": "马鞍山市",
  "value": "3405" },

{
  "label": "淮北市",
  "value": "3406" },

{
  "label": "铜陵市",
  "value": "3407" },

{
  "label": "安庆市",
  "value": "3408" },

{
  "label": "黄山市",
  "value": "3410" },

{
  "label": "滁州市",
  "value": "3411" },

{
  "label": "阜阳市",
  "value": "3412" },

{
  "label": "宿州市",
  "value": "3413" },

{
  "label": "六安市",
  "value": "3415" },

{
  "label": "亳州市",
  "value": "3416" },

{
  "label": "池州市",
  "value": "3417" },

{
  "label": "宣城市",
  "value": "3418" }],


[{
  "label": "福州市",
  "value": "3501" },

{
  "label": "厦门市",
  "value": "3502" },

{
  "label": "莆田市",
  "value": "3503" },

{
  "label": "三明市",
  "value": "3504" },

{
  "label": "泉州市",
  "value": "3505" },

{
  "label": "漳州市",
  "value": "3506" },

{
  "label": "南平市",
  "value": "3507" },

{
  "label": "龙岩市",
  "value": "3508" },

{
  "label": "宁德市",
  "value": "3509" }],


[{
  "label": "南昌市",
  "value": "3601" },

{
  "label": "景德镇市",
  "value": "3602" },

{
  "label": "萍乡市",
  "value": "3603" },

{
  "label": "九江市",
  "value": "3604" },

{
  "label": "新余市",
  "value": "3605" },

{
  "label": "鹰潭市",
  "value": "3606" },

{
  "label": "赣州市",
  "value": "3607" },

{
  "label": "吉安市",
  "value": "3608" },

{
  "label": "宜春市",
  "value": "3609" },

{
  "label": "抚州市",
  "value": "3610" },

{
  "label": "上饶市",
  "value": "3611" }],


[{
  "label": "济南市",
  "value": "3701" },

{
  "label": "青岛市",
  "value": "3702" },

{
  "label": "淄博市",
  "value": "3703" },

{
  "label": "枣庄市",
  "value": "3704" },

{
  "label": "东营市",
  "value": "3705" },

{
  "label": "烟台市",
  "value": "3706" },

{
  "label": "潍坊市",
  "value": "3707" },

{
  "label": "济宁市",
  "value": "3708" },

{
  "label": "泰安市",
  "value": "3709" },

{
  "label": "威海市",
  "value": "3710" },

{
  "label": "日照市",
  "value": "3711" },

{
  "label": "莱芜市",
  "value": "3712" },

{
  "label": "临沂市",
  "value": "3713" },

{
  "label": "德州市",
  "value": "3714" },

{
  "label": "聊城市",
  "value": "3715" },

{
  "label": "滨州市",
  "value": "3716" },

{
  "label": "菏泽市",
  "value": "3717" }],


[{
  "label": "郑州市",
  "value": "4101" },

{
  "label": "开封市",
  "value": "4102" },

{
  "label": "洛阳市",
  "value": "4103" },

{
  "label": "平顶山市",
  "value": "4104" },

{
  "label": "安阳市",
  "value": "4105" },

{
  "label": "鹤壁市",
  "value": "4106" },

{
  "label": "新乡市",
  "value": "4107" },

{
  "label": "焦作市",
  "value": "4108" },

{
  "label": "濮阳市",
  "value": "4109" },

{
  "label": "许昌市",
  "value": "4110" },

{
  "label": "漯河市",
  "value": "4111" },

{
  "label": "三门峡市",
  "value": "4112" },

{
  "label": "南阳市",
  "value": "4113" },

{
  "label": "商丘市",
  "value": "4114" },

{
  "label": "信阳市",
  "value": "4115" },

{
  "label": "周口市",
  "value": "4116" },

{
  "label": "驻马店市",
  "value": "4117" },

{
  "label": "省直辖县级行政区划",
  "value": "4190" }],


[{
  "label": "武汉市",
  "value": "4201" },

{
  "label": "黄石市",
  "value": "4202" },

{
  "label": "十堰市",
  "value": "4203" },

{
  "label": "宜昌市",
  "value": "4205" },

{
  "label": "襄阳市",
  "value": "4206" },

{
  "label": "鄂州市",
  "value": "4207" },

{
  "label": "荆门市",
  "value": "4208" },

{
  "label": "孝感市",
  "value": "4209" },

{
  "label": "荆州市",
  "value": "4210" },

{
  "label": "黄冈市",
  "value": "4211" },

{
  "label": "咸宁市",
  "value": "4212" },

{
  "label": "随州市",
  "value": "4213" },

{
  "label": "恩施土家族苗族自治州",
  "value": "4228" },

{
  "label": "省直辖县级行政区划",
  "value": "4290" }],


[{
  "label": "长沙市",
  "value": "4301" },

{
  "label": "株洲市",
  "value": "4302" },

{
  "label": "湘潭市",
  "value": "4303" },

{
  "label": "衡阳市",
  "value": "4304" },

{
  "label": "邵阳市",
  "value": "4305" },

{
  "label": "岳阳市",
  "value": "4306" },

{
  "label": "常德市",
  "value": "4307" },

{
  "label": "张家界市",
  "value": "4308" },

{
  "label": "益阳市",
  "value": "4309" },

{
  "label": "郴州市",
  "value": "4310" },

{
  "label": "永州市",
  "value": "4311" },

{
  "label": "怀化市",
  "value": "4312" },

{
  "label": "娄底市",
  "value": "4313" },

{
  "label": "湘西土家族苗族自治州",
  "value": "4331" }],


[{
  "label": "广州市",
  "value": "4401" },

{
  "label": "韶关市",
  "value": "4402" },

{
  "label": "深圳市",
  "value": "4403" },

{
  "label": "珠海市",
  "value": "4404" },

{
  "label": "汕头市",
  "value": "4405" },

{
  "label": "佛山市",
  "value": "4406" },

{
  "label": "江门市",
  "value": "4407" },

{
  "label": "湛江市",
  "value": "4408" },

{
  "label": "茂名市",
  "value": "4409" },

{
  "label": "肇庆市",
  "value": "4412" },

{
  "label": "惠州市",
  "value": "4413" },

{
  "label": "梅州市",
  "value": "4414" },

{
  "label": "汕尾市",
  "value": "4415" },

{
  "label": "河源市",
  "value": "4416" },

{
  "label": "阳江市",
  "value": "4417" },

{
  "label": "清远市",
  "value": "4418" },

{
  "label": "东莞市",
  "value": "4419" },

{
  "label": "中山市",
  "value": "4420" },

{
  "label": "潮州市",
  "value": "4451" },

{
  "label": "揭阳市",
  "value": "4452" },

{
  "label": "云浮市",
  "value": "4453" }],


[{
  "label": "南宁市",
  "value": "4501" },

{
  "label": "柳州市",
  "value": "4502" },

{
  "label": "桂林市",
  "value": "4503" },

{
  "label": "梧州市",
  "value": "4504" },

{
  "label": "北海市",
  "value": "4505" },

{
  "label": "防城港市",
  "value": "4506" },

{
  "label": "钦州市",
  "value": "4507" },

{
  "label": "贵港市",
  "value": "4508" },

{
  "label": "玉林市",
  "value": "4509" },

{
  "label": "百色市",
  "value": "4510" },

{
  "label": "贺州市",
  "value": "4511" },

{
  "label": "河池市",
  "value": "4512" },

{
  "label": "来宾市",
  "value": "4513" },

{
  "label": "崇左市",
  "value": "4514" }],


[{
  "label": "海口市",
  "value": "4601" },

{
  "label": "三亚市",
  "value": "4602" },

{
  "label": "三沙市",
  "value": "4603" },

{
  "label": "儋州市",
  "value": "4604" },

{
  "label": "省直辖县级行政区划",
  "value": "4690" }],


[{
  "label": "市辖区",
  "value": "5001" },

{
  "label": "县",
  "value": "5002" }],


[{
  "label": "成都市",
  "value": "5101" },

{
  "label": "自贡市",
  "value": "5103" },

{
  "label": "攀枝花市",
  "value": "5104" },

{
  "label": "泸州市",
  "value": "5105" },

{
  "label": "德阳市",
  "value": "5106" },

{
  "label": "绵阳市",
  "value": "5107" },

{
  "label": "广元市",
  "value": "5108" },

{
  "label": "遂宁市",
  "value": "5109" },

{
  "label": "内江市",
  "value": "5110" },

{
  "label": "乐山市",
  "value": "5111" },

{
  "label": "南充市",
  "value": "5113" },

{
  "label": "眉山市",
  "value": "5114" },

{
  "label": "宜宾市",
  "value": "5115" },

{
  "label": "广安市",
  "value": "5116" },

{
  "label": "达州市",
  "value": "5117" },

{
  "label": "雅安市",
  "value": "5118" },

{
  "label": "巴中市",
  "value": "5119" },

{
  "label": "资阳市",
  "value": "5120" },

{
  "label": "阿坝藏族羌族自治州",
  "value": "5132" },

{
  "label": "甘孜藏族自治州",
  "value": "5133" },

{
  "label": "凉山彝族自治州",
  "value": "5134" }],


[{
  "label": "贵阳市",
  "value": "5201" },

{
  "label": "六盘水市",
  "value": "5202" },

{
  "label": "遵义市",
  "value": "5203" },

{
  "label": "安顺市",
  "value": "5204" },

{
  "label": "毕节市",
  "value": "5205" },

{
  "label": "铜仁市",
  "value": "5206" },

{
  "label": "黔西南布依族苗族自治州",
  "value": "5223" },

{
  "label": "黔东南苗族侗族自治州",
  "value": "5226" },

{
  "label": "黔南布依族苗族自治州",
  "value": "5227" }],


[{
  "label": "昆明市",
  "value": "5301" },

{
  "label": "曲靖市",
  "value": "5303" },

{
  "label": "玉溪市",
  "value": "5304" },

{
  "label": "保山市",
  "value": "5305" },

{
  "label": "昭通市",
  "value": "5306" },

{
  "label": "丽江市",
  "value": "5307" },

{
  "label": "普洱市",
  "value": "5308" },

{
  "label": "临沧市",
  "value": "5309" },

{
  "label": "楚雄彝族自治州",
  "value": "5323" },

{
  "label": "红河哈尼族彝族自治州",
  "value": "5325" },

{
  "label": "文山壮族苗族自治州",
  "value": "5326" },

{
  "label": "西双版纳傣族自治州",
  "value": "5328" },

{
  "label": "大理白族自治州",
  "value": "5329" },

{
  "label": "德宏傣族景颇族自治州",
  "value": "5331" },

{
  "label": "怒江傈僳族自治州",
  "value": "5333" },

{
  "label": "迪庆藏族自治州",
  "value": "5334" }],


[{
  "label": "拉萨市",
  "value": "5401" },

{
  "label": "日喀则市",
  "value": "5402" },

{
  "label": "昌都市",
  "value": "5403" },

{
  "label": "林芝市",
  "value": "5404" },

{
  "label": "山南市",
  "value": "5405" },

{
  "label": "那曲地区",
  "value": "5424" },

{
  "label": "阿里地区",
  "value": "5425" }],


[{
  "label": "西安市",
  "value": "6101" },

{
  "label": "铜川市",
  "value": "6102" },

{
  "label": "宝鸡市",
  "value": "6103" },

{
  "label": "咸阳市",
  "value": "6104" },

{
  "label": "渭南市",
  "value": "6105" },

{
  "label": "延安市",
  "value": "6106" },

{
  "label": "汉中市",
  "value": "6107" },

{
  "label": "榆林市",
  "value": "6108" },

{
  "label": "安康市",
  "value": "6109" },

{
  "label": "商洛市",
  "value": "6110" }],


[{
  "label": "兰州市",
  "value": "6201" },

{
  "label": "嘉峪关市",
  "value": "6202" },

{
  "label": "金昌市",
  "value": "6203" },

{
  "label": "白银市",
  "value": "6204" },

{
  "label": "天水市",
  "value": "6205" },

{
  "label": "武威市",
  "value": "6206" },

{
  "label": "张掖市",
  "value": "6207" },

{
  "label": "平凉市",
  "value": "6208" },

{
  "label": "酒泉市",
  "value": "6209" },

{
  "label": "庆阳市",
  "value": "6210" },

{
  "label": "定西市",
  "value": "6211" },

{
  "label": "陇南市",
  "value": "6212" },

{
  "label": "临夏回族自治州",
  "value": "6229" },

{
  "label": "甘南藏族自治州",
  "value": "6230" }],


[{
  "label": "西宁市",
  "value": "6301" },

{
  "label": "海东市",
  "value": "6302" },

{
  "label": "海北藏族自治州",
  "value": "6322" },

{
  "label": "黄南藏族自治州",
  "value": "6323" },

{
  "label": "海南藏族自治州",
  "value": "6325" },

{
  "label": "果洛藏族自治州",
  "value": "6326" },

{
  "label": "玉树藏族自治州",
  "value": "6327" },

{
  "label": "海西蒙古族藏族自治州",
  "value": "6328" }],


[{
  "label": "银川市",
  "value": "6401" },

{
  "label": "石嘴山市",
  "value": "6402" },

{
  "label": "吴忠市",
  "value": "6403" },

{
  "label": "固原市",
  "value": "6404" },

{
  "label": "中卫市",
  "value": "6405" }],


[{
  "label": "乌鲁木齐市",
  "value": "6501" },

{
  "label": "克拉玛依市",
  "value": "6502" },

{
  "label": "吐鲁番市",
  "value": "6504" },

{
  "label": "哈密市",
  "value": "6505" },

{
  "label": "昌吉回族自治州",
  "value": "6523" },

{
  "label": "博尔塔拉蒙古自治州",
  "value": "6527" },

{
  "label": "巴音郭楞蒙古自治州",
  "value": "6528" },

{
  "label": "阿克苏地区",
  "value": "6529" },

{
  "label": "克孜勒苏柯尔克孜自治州",
  "value": "6530" },

{
  "label": "喀什地区",
  "value": "6531" },

{
  "label": "和田地区",
  "value": "6532" },

{
  "label": "伊犁哈萨克自治州",
  "value": "6540" },

{
  "label": "塔城地区",
  "value": "6542" },

{
  "label": "阿勒泰地区",
  "value": "6543" },

{
  "label": "自治区直辖县级行政区划",
  "value": "6590" }],


[{
  "label": "台北",
  "value": "6601" },

{
  "label": "高雄",
  "value": "6602" },

{
  "label": "基隆",
  "value": "6603" },

{
  "label": "台中",
  "value": "6604" },

{
  "label": "台南",
  "value": "6605" },

{
  "label": "新竹",
  "value": "6606" },

{
  "label": "嘉义",
  "value": "6607" },

{
  "label": "宜兰",
  "value": "6608" },

{
  "label": "桃园",
  "value": "6609" },

{
  "label": "苗栗",
  "value": "6610" },

{
  "label": "彰化",
  "value": "6611" },

{
  "label": "南投",
  "value": "6612" },

{
  "label": "云林",
  "value": "6613" },

{
  "label": "屏东",
  "value": "6614" },

{
  "label": "台东",
  "value": "6615" },

{
  "label": "花莲",
  "value": "6616" },

{
  "label": "澎湖",
  "value": "6617" }],


[{
  "label": "香港岛",
  "value": "6701" },

{
  "label": "九龙",
  "value": "6702" },

{
  "label": "新界",
  "value": "6703" }],


[{
  "label": "澳门半岛",
  "value": "6801" },

{
  "label": "氹仔岛",
  "value": "6802" },

{
  "label": "路环岛",
  "value": "6803" },

{
  "label": "路氹城",
  "value": "6804" }]];var _default =



cityData;exports.default = _default;

/***/ }),

/***/ 380:
/*!*****************************************************!*\
  !*** F:/kxsz/components/w-picker/city-data/area.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /* eslint-disable */
var areaData = [
[
[{
  "label": "东城区",
  "value": "110101" },

{
  "label": "西城区",
  "value": "110102" },

{
  "label": "朝阳区",
  "value": "110105" },

{
  "label": "丰台区",
  "value": "110106" },

{
  "label": "石景山区",
  "value": "110107" },

{
  "label": "海淀区",
  "value": "110108" },

{
  "label": "门头沟区",
  "value": "110109" },

{
  "label": "房山区",
  "value": "110111" },

{
  "label": "通州区",
  "value": "110112" },

{
  "label": "顺义区",
  "value": "110113" },

{
  "label": "昌平区",
  "value": "110114" },

{
  "label": "大兴区",
  "value": "110115" },

{
  "label": "怀柔区",
  "value": "110116" },

{
  "label": "平谷区",
  "value": "110117" },

{
  "label": "密云区",
  "value": "110118" },

{
  "label": "延庆区",
  "value": "110119" }]],



[
[{
  "label": "和平区",
  "value": "120101" },

{
  "label": "河东区",
  "value": "120102" },

{
  "label": "河西区",
  "value": "120103" },

{
  "label": "南开区",
  "value": "120104" },

{
  "label": "河北区",
  "value": "120105" },

{
  "label": "红桥区",
  "value": "120106" },

{
  "label": "东丽区",
  "value": "120110" },

{
  "label": "西青区",
  "value": "120111" },

{
  "label": "津南区",
  "value": "120112" },

{
  "label": "北辰区",
  "value": "120113" },

{
  "label": "武清区",
  "value": "120114" },

{
  "label": "宝坻区",
  "value": "120115" },

{
  "label": "滨海新区",
  "value": "120116" },

{
  "label": "宁河区",
  "value": "120117" },

{
  "label": "静海区",
  "value": "120118" },

{
  "label": "蓟州区",
  "value": "120119" }]],



[
[{
  "label": "长安区",
  "value": "130102" },

{
  "label": "桥西区",
  "value": "130104" },

{
  "label": "新华区",
  "value": "130105" },

{
  "label": "井陉矿区",
  "value": "130107" },

{
  "label": "裕华区",
  "value": "130108" },

{
  "label": "藁城区",
  "value": "130109" },

{
  "label": "鹿泉区",
  "value": "130110" },

{
  "label": "栾城区",
  "value": "130111" },

{
  "label": "井陉县",
  "value": "130121" },

{
  "label": "正定县",
  "value": "130123" },

{
  "label": "行唐县",
  "value": "130125" },

{
  "label": "灵寿县",
  "value": "130126" },

{
  "label": "高邑县",
  "value": "130127" },

{
  "label": "深泽县",
  "value": "130128" },

{
  "label": "赞皇县",
  "value": "130129" },

{
  "label": "无极县",
  "value": "130130" },

{
  "label": "平山县",
  "value": "130131" },

{
  "label": "元氏县",
  "value": "130132" },

{
  "label": "赵县",
  "value": "130133" },

{
  "label": "石家庄高新技术产业开发区",
  "value": "130171" },

{
  "label": "石家庄循环化工园区",
  "value": "130172" },

{
  "label": "辛集市",
  "value": "130181" },

{
  "label": "晋州市",
  "value": "130183" },

{
  "label": "新乐市",
  "value": "130184" }],


[{
  "label": "路南区",
  "value": "130202" },

{
  "label": "路北区",
  "value": "130203" },

{
  "label": "古冶区",
  "value": "130204" },

{
  "label": "开平区",
  "value": "130205" },

{
  "label": "丰南区",
  "value": "130207" },

{
  "label": "丰润区",
  "value": "130208" },

{
  "label": "曹妃甸区",
  "value": "130209" },

{
  "label": "滦县",
  "value": "130223" },

{
  "label": "滦南县",
  "value": "130224" },

{
  "label": "乐亭县",
  "value": "130225" },

{
  "label": "迁西县",
  "value": "130227" },

{
  "label": "玉田县",
  "value": "130229" },

{
  "label": "唐山市芦台经济技术开发区",
  "value": "130271" },

{
  "label": "唐山市汉沽管理区",
  "value": "130272" },

{
  "label": "唐山高新技术产业开发区",
  "value": "130273" },

{
  "label": "河北唐山海港经济开发区",
  "value": "130274" },

{
  "label": "遵化市",
  "value": "130281" },

{
  "label": "迁安市",
  "value": "130283" }],


[{
  "label": "海港区",
  "value": "130302" },

{
  "label": "山海关区",
  "value": "130303" },

{
  "label": "北戴河区",
  "value": "130304" },

{
  "label": "抚宁区",
  "value": "130306" },

{
  "label": "青龙满族自治县",
  "value": "130321" },

{
  "label": "昌黎县",
  "value": "130322" },

{
  "label": "卢龙县",
  "value": "130324" },

{
  "label": "秦皇岛市经济技术开发区",
  "value": "130371" },

{
  "label": "北戴河新区",
  "value": "130372" }],


[{
  "label": "邯山区",
  "value": "130402" },

{
  "label": "丛台区",
  "value": "130403" },

{
  "label": "复兴区",
  "value": "130404" },

{
  "label": "峰峰矿区",
  "value": "130406" },

{
  "label": "肥乡区",
  "value": "130407" },

{
  "label": "永年区",
  "value": "130408" },

{
  "label": "临漳县",
  "value": "130423" },

{
  "label": "成安县",
  "value": "130424" },

{
  "label": "大名县",
  "value": "130425" },

{
  "label": "涉县",
  "value": "130426" },

{
  "label": "磁县",
  "value": "130427" },

{
  "label": "邱县",
  "value": "130430" },

{
  "label": "鸡泽县",
  "value": "130431" },

{
  "label": "广平县",
  "value": "130432" },

{
  "label": "馆陶县",
  "value": "130433" },

{
  "label": "魏县",
  "value": "130434" },

{
  "label": "曲周县",
  "value": "130435" },

{
  "label": "邯郸经济技术开发区",
  "value": "130471" },

{
  "label": "邯郸冀南新区",
  "value": "130473" },

{
  "label": "武安市",
  "value": "130481" }],


[{
  "label": "桥东区",
  "value": "130502" },

{
  "label": "桥西区",
  "value": "130503" },

{
  "label": "邢台县",
  "value": "130521" },

{
  "label": "临城县",
  "value": "130522" },

{
  "label": "内丘县",
  "value": "130523" },

{
  "label": "柏乡县",
  "value": "130524" },

{
  "label": "隆尧县",
  "value": "130525" },

{
  "label": "任县",
  "value": "130526" },

{
  "label": "南和县",
  "value": "130527" },

{
  "label": "宁晋县",
  "value": "130528" },

{
  "label": "巨鹿县",
  "value": "130529" },

{
  "label": "新河县",
  "value": "130530" },

{
  "label": "广宗县",
  "value": "130531" },

{
  "label": "平乡县",
  "value": "130532" },

{
  "label": "威县",
  "value": "130533" },

{
  "label": "清河县",
  "value": "130534" },

{
  "label": "临西县",
  "value": "130535" },

{
  "label": "河北邢台经济开发区",
  "value": "130571" },

{
  "label": "南宫市",
  "value": "130581" },

{
  "label": "沙河市",
  "value": "130582" }],


[{
  "label": "竞秀区",
  "value": "130602" },

{
  "label": "莲池区",
  "value": "130606" },

{
  "label": "满城区",
  "value": "130607" },

{
  "label": "清苑区",
  "value": "130608" },

{
  "label": "徐水区",
  "value": "130609" },

{
  "label": "涞水县",
  "value": "130623" },

{
  "label": "阜平县",
  "value": "130624" },

{
  "label": "定兴县",
  "value": "130626" },

{
  "label": "唐县",
  "value": "130627" },

{
  "label": "高阳县",
  "value": "130628" },

{
  "label": "容城县",
  "value": "130629" },

{
  "label": "涞源县",
  "value": "130630" },

{
  "label": "望都县",
  "value": "130631" },

{
  "label": "安新县",
  "value": "130632" },

{
  "label": "易县",
  "value": "130633" },

{
  "label": "曲阳县",
  "value": "130634" },

{
  "label": "蠡县",
  "value": "130635" },

{
  "label": "顺平县",
  "value": "130636" },

{
  "label": "博野县",
  "value": "130637" },

{
  "label": "雄县",
  "value": "130638" },

{
  "label": "保定高新技术产业开发区",
  "value": "130671" },

{
  "label": "保定白沟新城",
  "value": "130672" },

{
  "label": "涿州市",
  "value": "130681" },

{
  "label": "定州市",
  "value": "130682" },

{
  "label": "安国市",
  "value": "130683" },

{
  "label": "高碑店市",
  "value": "130684" }],


[{
  "label": "桥东区",
  "value": "130702" },

{
  "label": "桥西区",
  "value": "130703" },

{
  "label": "宣化区",
  "value": "130705" },

{
  "label": "下花园区",
  "value": "130706" },

{
  "label": "万全区",
  "value": "130708" },

{
  "label": "崇礼区",
  "value": "130709" },

{
  "label": "张北县",
  "value": "130722" },

{
  "label": "康保县",
  "value": "130723" },

{
  "label": "沽源县",
  "value": "130724" },

{
  "label": "尚义县",
  "value": "130725" },

{
  "label": "蔚县",
  "value": "130726" },

{
  "label": "阳原县",
  "value": "130727" },

{
  "label": "怀安县",
  "value": "130728" },

{
  "label": "怀来县",
  "value": "130730" },

{
  "label": "涿鹿县",
  "value": "130731" },

{
  "label": "赤城县",
  "value": "130732" },

{
  "label": "张家口市高新技术产业开发区",
  "value": "130771" },

{
  "label": "张家口市察北管理区",
  "value": "130772" },

{
  "label": "张家口市塞北管理区",
  "value": "130773" }],


[{
  "label": "双桥区",
  "value": "130802" },

{
  "label": "双滦区",
  "value": "130803" },

{
  "label": "鹰手营子矿区",
  "value": "130804" },

{
  "label": "承德县",
  "value": "130821" },

{
  "label": "兴隆县",
  "value": "130822" },

{
  "label": "滦平县",
  "value": "130824" },

{
  "label": "隆化县",
  "value": "130825" },

{
  "label": "丰宁满族自治县",
  "value": "130826" },

{
  "label": "宽城满族自治县",
  "value": "130827" },

{
  "label": "围场满族蒙古族自治县",
  "value": "130828" },

{
  "label": "承德高新技术产业开发区",
  "value": "130871" },

{
  "label": "平泉市",
  "value": "130881" }],


[{
  "label": "新华区",
  "value": "130902" },

{
  "label": "运河区",
  "value": "130903" },

{
  "label": "沧县",
  "value": "130921" },

{
  "label": "青县",
  "value": "130922" },

{
  "label": "东光县",
  "value": "130923" },

{
  "label": "海兴县",
  "value": "130924" },

{
  "label": "盐山县",
  "value": "130925" },

{
  "label": "肃宁县",
  "value": "130926" },

{
  "label": "南皮县",
  "value": "130927" },

{
  "label": "吴桥县",
  "value": "130928" },

{
  "label": "献县",
  "value": "130929" },

{
  "label": "孟村回族自治县",
  "value": "130930" },

{
  "label": "河北沧州经济开发区",
  "value": "130971" },

{
  "label": "沧州高新技术产业开发区",
  "value": "130972" },

{
  "label": "沧州渤海新区",
  "value": "130973" },

{
  "label": "泊头市",
  "value": "130981" },

{
  "label": "任丘市",
  "value": "130982" },

{
  "label": "黄骅市",
  "value": "130983" },

{
  "label": "河间市",
  "value": "130984" }],


[{
  "label": "安次区",
  "value": "131002" },

{
  "label": "广阳区",
  "value": "131003" },

{
  "label": "固安县",
  "value": "131022" },

{
  "label": "永清县",
  "value": "131023" },

{
  "label": "香河县",
  "value": "131024" },

{
  "label": "大城县",
  "value": "131025" },

{
  "label": "文安县",
  "value": "131026" },

{
  "label": "大厂回族自治县",
  "value": "131028" },

{
  "label": "廊坊经济技术开发区",
  "value": "131071" },

{
  "label": "霸州市",
  "value": "131081" },

{
  "label": "三河市",
  "value": "131082" }],


[{
  "label": "桃城区",
  "value": "131102" },

{
  "label": "冀州区",
  "value": "131103" },

{
  "label": "枣强县",
  "value": "131121" },

{
  "label": "武邑县",
  "value": "131122" },

{
  "label": "武强县",
  "value": "131123" },

{
  "label": "饶阳县",
  "value": "131124" },

{
  "label": "安平县",
  "value": "131125" },

{
  "label": "故城县",
  "value": "131126" },

{
  "label": "景县",
  "value": "131127" },

{
  "label": "阜城县",
  "value": "131128" },

{
  "label": "河北衡水经济开发区",
  "value": "131171" },

{
  "label": "衡水滨湖新区",
  "value": "131172" },

{
  "label": "深州市",
  "value": "131182" }]],



[
[{
  "label": "小店区",
  "value": "140105" },

{
  "label": "迎泽区",
  "value": "140106" },

{
  "label": "杏花岭区",
  "value": "140107" },

{
  "label": "尖草坪区",
  "value": "140108" },

{
  "label": "万柏林区",
  "value": "140109" },

{
  "label": "晋源区",
  "value": "140110" },

{
  "label": "清徐县",
  "value": "140121" },

{
  "label": "阳曲县",
  "value": "140122" },

{
  "label": "娄烦县",
  "value": "140123" },

{
  "label": "山西转型综合改革示范区",
  "value": "140171" },

{
  "label": "古交市",
  "value": "140181" }],


[{
  "label": "城区",
  "value": "140202" },

{
  "label": "矿区",
  "value": "140203" },

{
  "label": "南郊区",
  "value": "140211" },

{
  "label": "新荣区",
  "value": "140212" },

{
  "label": "阳高县",
  "value": "140221" },

{
  "label": "天镇县",
  "value": "140222" },

{
  "label": "广灵县",
  "value": "140223" },

{
  "label": "灵丘县",
  "value": "140224" },

{
  "label": "浑源县",
  "value": "140225" },

{
  "label": "左云县",
  "value": "140226" },

{
  "label": "大同县",
  "value": "140227" },

{
  "label": "山西大同经济开发区",
  "value": "140271" }],


[{
  "label": "城区",
  "value": "140302" },

{
  "label": "矿区",
  "value": "140303" },

{
  "label": "郊区",
  "value": "140311" },

{
  "label": "平定县",
  "value": "140321" },

{
  "label": "盂县",
  "value": "140322" },

{
  "label": "山西阳泉经济开发区",
  "value": "140371" }],


[{
  "label": "城区",
  "value": "140402" },

{
  "label": "郊区",
  "value": "140411" },

{
  "label": "长治县",
  "value": "140421" },

{
  "label": "襄垣县",
  "value": "140423" },

{
  "label": "屯留县",
  "value": "140424" },

{
  "label": "平顺县",
  "value": "140425" },

{
  "label": "黎城县",
  "value": "140426" },

{
  "label": "壶关县",
  "value": "140427" },

{
  "label": "长子县",
  "value": "140428" },

{
  "label": "武乡县",
  "value": "140429" },

{
  "label": "沁县",
  "value": "140430" },

{
  "label": "沁源县",
  "value": "140431" },

{
  "label": "山西长治高新技术产业园区",
  "value": "140471" },

{
  "label": "潞城市",
  "value": "140481" }],


[{
  "label": "城区",
  "value": "140502" },

{
  "label": "沁水县",
  "value": "140521" },

{
  "label": "阳城县",
  "value": "140522" },

{
  "label": "陵川县",
  "value": "140524" },

{
  "label": "泽州县",
  "value": "140525" },

{
  "label": "高平市",
  "value": "140581" }],


[{
  "label": "朔城区",
  "value": "140602" },

{
  "label": "平鲁区",
  "value": "140603" },

{
  "label": "山阴县",
  "value": "140621" },

{
  "label": "应县",
  "value": "140622" },

{
  "label": "右玉县",
  "value": "140623" },

{
  "label": "怀仁县",
  "value": "140624" },

{
  "label": "山西朔州经济开发区",
  "value": "140671" }],


[{
  "label": "榆次区",
  "value": "140702" },

{
  "label": "榆社县",
  "value": "140721" },

{
  "label": "左权县",
  "value": "140722" },

{
  "label": "和顺县",
  "value": "140723" },

{
  "label": "昔阳县",
  "value": "140724" },

{
  "label": "寿阳县",
  "value": "140725" },

{
  "label": "太谷县",
  "value": "140726" },

{
  "label": "祁县",
  "value": "140727" },

{
  "label": "平遥县",
  "value": "140728" },

{
  "label": "灵石县",
  "value": "140729" },

{
  "label": "介休市",
  "value": "140781" }],


[{
  "label": "盐湖区",
  "value": "140802" },

{
  "label": "临猗县",
  "value": "140821" },

{
  "label": "万荣县",
  "value": "140822" },

{
  "label": "闻喜县",
  "value": "140823" },

{
  "label": "稷山县",
  "value": "140824" },

{
  "label": "新绛县",
  "value": "140825" },

{
  "label": "绛县",
  "value": "140826" },

{
  "label": "垣曲县",
  "value": "140827" },

{
  "label": "夏县",
  "value": "140828" },

{
  "label": "平陆县",
  "value": "140829" },

{
  "label": "芮城县",
  "value": "140830" },

{
  "label": "永济市",
  "value": "140881" },

{
  "label": "河津市",
  "value": "140882" }],


[{
  "label": "忻府区",
  "value": "140902" },

{
  "label": "定襄县",
  "value": "140921" },

{
  "label": "五台县",
  "value": "140922" },

{
  "label": "代县",
  "value": "140923" },

{
  "label": "繁峙县",
  "value": "140924" },

{
  "label": "宁武县",
  "value": "140925" },

{
  "label": "静乐县",
  "value": "140926" },

{
  "label": "神池县",
  "value": "140927" },

{
  "label": "五寨县",
  "value": "140928" },

{
  "label": "岢岚县",
  "value": "140929" },

{
  "label": "河曲县",
  "value": "140930" },

{
  "label": "保德县",
  "value": "140931" },

{
  "label": "偏关县",
  "value": "140932" },

{
  "label": "五台山风景名胜区",
  "value": "140971" },

{
  "label": "原平市",
  "value": "140981" }],


[{
  "label": "尧都区",
  "value": "141002" },

{
  "label": "曲沃县",
  "value": "141021" },

{
  "label": "翼城县",
  "value": "141022" },

{
  "label": "襄汾县",
  "value": "141023" },

{
  "label": "洪洞县",
  "value": "141024" },

{
  "label": "古县",
  "value": "141025" },

{
  "label": "安泽县",
  "value": "141026" },

{
  "label": "浮山县",
  "value": "141027" },

{
  "label": "吉县",
  "value": "141028" },

{
  "label": "乡宁县",
  "value": "141029" },

{
  "label": "大宁县",
  "value": "141030" },

{
  "label": "隰县",
  "value": "141031" },

{
  "label": "永和县",
  "value": "141032" },

{
  "label": "蒲县",
  "value": "141033" },

{
  "label": "汾西县",
  "value": "141034" },

{
  "label": "侯马市",
  "value": "141081" },

{
  "label": "霍州市",
  "value": "141082" }],


[{
  "label": "离石区",
  "value": "141102" },

{
  "label": "文水县",
  "value": "141121" },

{
  "label": "交城县",
  "value": "141122" },

{
  "label": "兴县",
  "value": "141123" },

{
  "label": "临县",
  "value": "141124" },

{
  "label": "柳林县",
  "value": "141125" },

{
  "label": "石楼县",
  "value": "141126" },

{
  "label": "岚县",
  "value": "141127" },

{
  "label": "方山县",
  "value": "141128" },

{
  "label": "中阳县",
  "value": "141129" },

{
  "label": "交口县",
  "value": "141130" },

{
  "label": "孝义市",
  "value": "141181" },

{
  "label": "汾阳市",
  "value": "141182" }]],



[
[{
  "label": "新城区",
  "value": "150102" },

{
  "label": "回民区",
  "value": "150103" },

{
  "label": "玉泉区",
  "value": "150104" },

{
  "label": "赛罕区",
  "value": "150105" },

{
  "label": "土默特左旗",
  "value": "150121" },

{
  "label": "托克托县",
  "value": "150122" },

{
  "label": "和林格尔县",
  "value": "150123" },

{
  "label": "清水河县",
  "value": "150124" },

{
  "label": "武川县",
  "value": "150125" },

{
  "label": "呼和浩特金海工业园区",
  "value": "150171" },

{
  "label": "呼和浩特经济技术开发区",
  "value": "150172" }],


[{
  "label": "东河区",
  "value": "150202" },

{
  "label": "昆都仑区",
  "value": "150203" },

{
  "label": "青山区",
  "value": "150204" },

{
  "label": "石拐区",
  "value": "150205" },

{
  "label": "白云鄂博矿区",
  "value": "150206" },

{
  "label": "九原区",
  "value": "150207" },

{
  "label": "土默特右旗",
  "value": "150221" },

{
  "label": "固阳县",
  "value": "150222" },

{
  "label": "达尔罕茂明安联合旗",
  "value": "150223" },

{
  "label": "包头稀土高新技术产业开发区",
  "value": "150271" }],


[{
  "label": "海勃湾区",
  "value": "150302" },

{
  "label": "海南区",
  "value": "150303" },

{
  "label": "乌达区",
  "value": "150304" }],


[{
  "label": "红山区",
  "value": "150402" },

{
  "label": "元宝山区",
  "value": "150403" },

{
  "label": "松山区",
  "value": "150404" },

{
  "label": "阿鲁科尔沁旗",
  "value": "150421" },

{
  "label": "巴林左旗",
  "value": "150422" },

{
  "label": "巴林右旗",
  "value": "150423" },

{
  "label": "林西县",
  "value": "150424" },

{
  "label": "克什克腾旗",
  "value": "150425" },

{
  "label": "翁牛特旗",
  "value": "150426" },

{
  "label": "喀喇沁旗",
  "value": "150428" },

{
  "label": "宁城县",
  "value": "150429" },

{
  "label": "敖汉旗",
  "value": "150430" }],


[{
  "label": "科尔沁区",
  "value": "150502" },

{
  "label": "科尔沁左翼中旗",
  "value": "150521" },

{
  "label": "科尔沁左翼后旗",
  "value": "150522" },

{
  "label": "开鲁县",
  "value": "150523" },

{
  "label": "库伦旗",
  "value": "150524" },

{
  "label": "奈曼旗",
  "value": "150525" },

{
  "label": "扎鲁特旗",
  "value": "150526" },

{
  "label": "通辽经济技术开发区",
  "value": "150571" },

{
  "label": "霍林郭勒市",
  "value": "150581" }],


[{
  "label": "东胜区",
  "value": "150602" },

{
  "label": "康巴什区",
  "value": "150603" },

{
  "label": "达拉特旗",
  "value": "150621" },

{
  "label": "准格尔旗",
  "value": "150622" },

{
  "label": "鄂托克前旗",
  "value": "150623" },

{
  "label": "鄂托克旗",
  "value": "150624" },

{
  "label": "杭锦旗",
  "value": "150625" },

{
  "label": "乌审旗",
  "value": "150626" },

{
  "label": "伊金霍洛旗",
  "value": "150627" }],


[{
  "label": "海拉尔区",
  "value": "150702" },

{
  "label": "扎赉诺尔区",
  "value": "150703" },

{
  "label": "阿荣旗",
  "value": "150721" },

{
  "label": "莫力达瓦达斡尔族自治旗",
  "value": "150722" },

{
  "label": "鄂伦春自治旗",
  "value": "150723" },

{
  "label": "鄂温克族自治旗",
  "value": "150724" },

{
  "label": "陈巴尔虎旗",
  "value": "150725" },

{
  "label": "新巴尔虎左旗",
  "value": "150726" },

{
  "label": "新巴尔虎右旗",
  "value": "150727" },

{
  "label": "满洲里市",
  "value": "150781" },

{
  "label": "牙克石市",
  "value": "150782" },

{
  "label": "扎兰屯市",
  "value": "150783" },

{
  "label": "额尔古纳市",
  "value": "150784" },

{
  "label": "根河市",
  "value": "150785" }],


[{
  "label": "临河区",
  "value": "150802" },

{
  "label": "五原县",
  "value": "150821" },

{
  "label": "磴口县",
  "value": "150822" },

{
  "label": "乌拉特前旗",
  "value": "150823" },

{
  "label": "乌拉特中旗",
  "value": "150824" },

{
  "label": "乌拉特后旗",
  "value": "150825" },

{
  "label": "杭锦后旗",
  "value": "150826" }],


[{
  "label": "集宁区",
  "value": "150902" },

{
  "label": "卓资县",
  "value": "150921" },

{
  "label": "化德县",
  "value": "150922" },

{
  "label": "商都县",
  "value": "150923" },

{
  "label": "兴和县",
  "value": "150924" },

{
  "label": "凉城县",
  "value": "150925" },

{
  "label": "察哈尔右翼前旗",
  "value": "150926" },

{
  "label": "察哈尔右翼中旗",
  "value": "150927" },

{
  "label": "察哈尔右翼后旗",
  "value": "150928" },

{
  "label": "四子王旗",
  "value": "150929" },

{
  "label": "丰镇市",
  "value": "150981" }],


[{
  "label": "乌兰浩特市",
  "value": "152201" },

{
  "label": "阿尔山市",
  "value": "152202" },

{
  "label": "科尔沁右翼前旗",
  "value": "152221" },

{
  "label": "科尔沁右翼中旗",
  "value": "152222" },

{
  "label": "扎赉特旗",
  "value": "152223" },

{
  "label": "突泉县",
  "value": "152224" }],


[{
  "label": "二连浩特市",
  "value": "152501" },

{
  "label": "锡林浩特市",
  "value": "152502" },

{
  "label": "阿巴嘎旗",
  "value": "152522" },

{
  "label": "苏尼特左旗",
  "value": "152523" },

{
  "label": "苏尼特右旗",
  "value": "152524" },

{
  "label": "东乌珠穆沁旗",
  "value": "152525" },

{
  "label": "西乌珠穆沁旗",
  "value": "152526" },

{
  "label": "太仆寺旗",
  "value": "152527" },

{
  "label": "镶黄旗",
  "value": "152528" },

{
  "label": "正镶白旗",
  "value": "152529" },

{
  "label": "正蓝旗",
  "value": "152530" },

{
  "label": "多伦县",
  "value": "152531" },

{
  "label": "乌拉盖管委会",
  "value": "152571" }],


[{
  "label": "阿拉善左旗",
  "value": "152921" },

{
  "label": "阿拉善右旗",
  "value": "152922" },

{
  "label": "额济纳旗",
  "value": "152923" },

{
  "label": "内蒙古阿拉善经济开发区",
  "value": "152971" }]],



[
[{
  "label": "和平区",
  "value": "210102" },

{
  "label": "沈河区",
  "value": "210103" },

{
  "label": "大东区",
  "value": "210104" },

{
  "label": "皇姑区",
  "value": "210105" },

{
  "label": "铁西区",
  "value": "210106" },

{
  "label": "苏家屯区",
  "value": "210111" },

{
  "label": "浑南区",
  "value": "210112" },

{
  "label": "沈北新区",
  "value": "210113" },

{
  "label": "于洪区",
  "value": "210114" },

{
  "label": "辽中区",
  "value": "210115" },

{
  "label": "康平县",
  "value": "210123" },

{
  "label": "法库县",
  "value": "210124" },

{
  "label": "新民市",
  "value": "210181" }],


[{
  "label": "中山区",
  "value": "210202" },

{
  "label": "西岗区",
  "value": "210203" },

{
  "label": "沙河口区",
  "value": "210204" },

{
  "label": "甘井子区",
  "value": "210211" },

{
  "label": "旅顺口区",
  "value": "210212" },

{
  "label": "金州区",
  "value": "210213" },

{
  "label": "普兰店区",
  "value": "210214" },

{
  "label": "长海县",
  "value": "210224" },

{
  "label": "瓦房店市",
  "value": "210281" },

{
  "label": "庄河市",
  "value": "210283" }],


[{
  "label": "铁东区",
  "value": "210302" },

{
  "label": "铁西区",
  "value": "210303" },

{
  "label": "立山区",
  "value": "210304" },

{
  "label": "千山区",
  "value": "210311" },

{
  "label": "台安县",
  "value": "210321" },

{
  "label": "岫岩满族自治县",
  "value": "210323" },

{
  "label": "海城市",
  "value": "210381" }],


[{
  "label": "新抚区",
  "value": "210402" },

{
  "label": "东洲区",
  "value": "210403" },

{
  "label": "望花区",
  "value": "210404" },

{
  "label": "顺城区",
  "value": "210411" },

{
  "label": "抚顺县",
  "value": "210421" },

{
  "label": "新宾满族自治县",
  "value": "210422" },

{
  "label": "清原满族自治县",
  "value": "210423" }],


[{
  "label": "平山区",
  "value": "210502" },

{
  "label": "溪湖区",
  "value": "210503" },

{
  "label": "明山区",
  "value": "210504" },

{
  "label": "南芬区",
  "value": "210505" },

{
  "label": "本溪满族自治县",
  "value": "210521" },

{
  "label": "桓仁满族自治县",
  "value": "210522" }],


[{
  "label": "元宝区",
  "value": "210602" },

{
  "label": "振兴区",
  "value": "210603" },

{
  "label": "振安区",
  "value": "210604" },

{
  "label": "宽甸满族自治县",
  "value": "210624" },

{
  "label": "东港市",
  "value": "210681" },

{
  "label": "凤城市",
  "value": "210682" }],


[{
  "label": "古塔区",
  "value": "210702" },

{
  "label": "凌河区",
  "value": "210703" },

{
  "label": "太和区",
  "value": "210711" },

{
  "label": "黑山县",
  "value": "210726" },

{
  "label": "义县",
  "value": "210727" },

{
  "label": "凌海市",
  "value": "210781" },

{
  "label": "北镇市",
  "value": "210782" }],


[{
  "label": "站前区",
  "value": "210802" },

{
  "label": "西市区",
  "value": "210803" },

{
  "label": "鲅鱼圈区",
  "value": "210804" },

{
  "label": "老边区",
  "value": "210811" },

{
  "label": "盖州市",
  "value": "210881" },

{
  "label": "大石桥市",
  "value": "210882" }],


[{
  "label": "海州区",
  "value": "210902" },

{
  "label": "新邱区",
  "value": "210903" },

{
  "label": "太平区",
  "value": "210904" },

{
  "label": "清河门区",
  "value": "210905" },

{
  "label": "细河区",
  "value": "210911" },

{
  "label": "阜新蒙古族自治县",
  "value": "210921" },

{
  "label": "彰武县",
  "value": "210922" }],


[{
  "label": "白塔区",
  "value": "211002" },

{
  "label": "文圣区",
  "value": "211003" },

{
  "label": "宏伟区",
  "value": "211004" },

{
  "label": "弓长岭区",
  "value": "211005" },

{
  "label": "太子河区",
  "value": "211011" },

{
  "label": "辽阳县",
  "value": "211021" },

{
  "label": "灯塔市",
  "value": "211081" }],


[{
  "label": "双台子区",
  "value": "211102" },

{
  "label": "兴隆台区",
  "value": "211103" },

{
  "label": "大洼区",
  "value": "211104" },

{
  "label": "盘山县",
  "value": "211122" }],


[{
  "label": "银州区",
  "value": "211202" },

{
  "label": "清河区",
  "value": "211204" },

{
  "label": "铁岭县",
  "value": "211221" },

{
  "label": "西丰县",
  "value": "211223" },

{
  "label": "昌图县",
  "value": "211224" },

{
  "label": "调兵山市",
  "value": "211281" },

{
  "label": "开原市",
  "value": "211282" }],


[{
  "label": "双塔区",
  "value": "211302" },

{
  "label": "龙城区",
  "value": "211303" },

{
  "label": "朝阳县",
  "value": "211321" },

{
  "label": "建平县",
  "value": "211322" },

{
  "label": "喀喇沁左翼蒙古族自治县",
  "value": "211324" },

{
  "label": "北票市",
  "value": "211381" },

{
  "label": "凌源市",
  "value": "211382" }],


[{
  "label": "连山区",
  "value": "211402" },

{
  "label": "龙港区",
  "value": "211403" },

{
  "label": "南票区",
  "value": "211404" },

{
  "label": "绥中县",
  "value": "211421" },

{
  "label": "建昌县",
  "value": "211422" },

{
  "label": "兴城市",
  "value": "211481" }]],



[
[{
  "label": "南关区",
  "value": "220102" },

{
  "label": "宽城区",
  "value": "220103" },

{
  "label": "朝阳区",
  "value": "220104" },

{
  "label": "二道区",
  "value": "220105" },

{
  "label": "绿园区",
  "value": "220106" },

{
  "label": "双阳区",
  "value": "220112" },

{
  "label": "九台区",
  "value": "220113" },

{
  "label": "农安县",
  "value": "220122" },

{
  "label": "长春经济技术开发区",
  "value": "220171" },

{
  "label": "长春净月高新技术产业开发区",
  "value": "220172" },

{
  "label": "长春高新技术产业开发区",
  "value": "220173" },

{
  "label": "长春汽车经济技术开发区",
  "value": "220174" },

{
  "label": "榆树市",
  "value": "220182" },

{
  "label": "德惠市",
  "value": "220183" }],


[{
  "label": "昌邑区",
  "value": "220202" },

{
  "label": "龙潭区",
  "value": "220203" },

{
  "label": "船营区",
  "value": "220204" },

{
  "label": "丰满区",
  "value": "220211" },

{
  "label": "永吉县",
  "value": "220221" },

{
  "label": "吉林经济开发区",
  "value": "220271" },

{
  "label": "吉林高新技术产业开发区",
  "value": "220272" },

{
  "label": "吉林中国新加坡食品区",
  "value": "220273" },

{
  "label": "蛟河市",
  "value": "220281" },

{
  "label": "桦甸市",
  "value": "220282" },

{
  "label": "舒兰市",
  "value": "220283" },

{
  "label": "磐石市",
  "value": "220284" }],


[{
  "label": "铁西区",
  "value": "220302" },

{
  "label": "铁东区",
  "value": "220303" },

{
  "label": "梨树县",
  "value": "220322" },

{
  "label": "伊通满族自治县",
  "value": "220323" },

{
  "label": "公主岭市",
  "value": "220381" },

{
  "label": "双辽市",
  "value": "220382" }],


[{
  "label": "龙山区",
  "value": "220402" },

{
  "label": "西安区",
  "value": "220403" },

{
  "label": "东丰县",
  "value": "220421" },

{
  "label": "东辽县",
  "value": "220422" }],


[{
  "label": "东昌区",
  "value": "220502" },

{
  "label": "二道江区",
  "value": "220503" },

{
  "label": "通化县",
  "value": "220521" },

{
  "label": "辉南县",
  "value": "220523" },

{
  "label": "柳河县",
  "value": "220524" },

{
  "label": "梅河口市",
  "value": "220581" },

{
  "label": "集安市",
  "value": "220582" }],


[{
  "label": "浑江区",
  "value": "220602" },

{
  "label": "江源区",
  "value": "220605" },

{
  "label": "抚松县",
  "value": "220621" },

{
  "label": "靖宇县",
  "value": "220622" },

{
  "label": "长白朝鲜族自治县",
  "value": "220623" },

{
  "label": "临江市",
  "value": "220681" }],


[{
  "label": "宁江区",
  "value": "220702" },

{
  "label": "前郭尔罗斯蒙古族自治县",
  "value": "220721" },

{
  "label": "长岭县",
  "value": "220722" },

{
  "label": "乾安县",
  "value": "220723" },

{
  "label": "吉林松原经济开发区",
  "value": "220771" },

{
  "label": "扶余市",
  "value": "220781" }],


[{
  "label": "洮北区",
  "value": "220802" },

{
  "label": "镇赉县",
  "value": "220821" },

{
  "label": "通榆县",
  "value": "220822" },

{
  "label": "吉林白城经济开发区",
  "value": "220871" },

{
  "label": "洮南市",
  "value": "220881" },

{
  "label": "大安市",
  "value": "220882" }],


[{
  "label": "延吉市",
  "value": "222401" },

{
  "label": "图们市",
  "value": "222402" },

{
  "label": "敦化市",
  "value": "222403" },

{
  "label": "珲春市",
  "value": "222404" },

{
  "label": "龙井市",
  "value": "222405" },

{
  "label": "和龙市",
  "value": "222406" },

{
  "label": "汪清县",
  "value": "222424" },

{
  "label": "安图县",
  "value": "222426" }]],



[
[{
  "label": "道里区",
  "value": "230102" },

{
  "label": "南岗区",
  "value": "230103" },

{
  "label": "道外区",
  "value": "230104" },

{
  "label": "平房区",
  "value": "230108" },

{
  "label": "松北区",
  "value": "230109" },

{
  "label": "香坊区",
  "value": "230110" },

{
  "label": "呼兰区",
  "value": "230111" },

{
  "label": "阿城区",
  "value": "230112" },

{
  "label": "双城区",
  "value": "230113" },

{
  "label": "依兰县",
  "value": "230123" },

{
  "label": "方正县",
  "value": "230124" },

{
  "label": "宾县",
  "value": "230125" },

{
  "label": "巴彦县",
  "value": "230126" },

{
  "label": "木兰县",
  "value": "230127" },

{
  "label": "通河县",
  "value": "230128" },

{
  "label": "延寿县",
  "value": "230129" },

{
  "label": "尚志市",
  "value": "230183" },

{
  "label": "五常市",
  "value": "230184" }],


[{
  "label": "龙沙区",
  "value": "230202" },

{
  "label": "建华区",
  "value": "230203" },

{
  "label": "铁锋区",
  "value": "230204" },

{
  "label": "昂昂溪区",
  "value": "230205" },

{
  "label": "富拉尔基区",
  "value": "230206" },

{
  "label": "碾子山区",
  "value": "230207" },

{
  "label": "梅里斯达斡尔族区",
  "value": "230208" },

{
  "label": "龙江县",
  "value": "230221" },

{
  "label": "依安县",
  "value": "230223" },

{
  "label": "泰来县",
  "value": "230224" },

{
  "label": "甘南县",
  "value": "230225" },

{
  "label": "富裕县",
  "value": "230227" },

{
  "label": "克山县",
  "value": "230229" },

{
  "label": "克东县",
  "value": "230230" },

{
  "label": "拜泉县",
  "value": "230231" },

{
  "label": "讷河市",
  "value": "230281" }],


[{
  "label": "鸡冠区",
  "value": "230302" },

{
  "label": "恒山区",
  "value": "230303" },

{
  "label": "滴道区",
  "value": "230304" },

{
  "label": "梨树区",
  "value": "230305" },

{
  "label": "城子河区",
  "value": "230306" },

{
  "label": "麻山区",
  "value": "230307" },

{
  "label": "鸡东县",
  "value": "230321" },

{
  "label": "虎林市",
  "value": "230381" },

{
  "label": "密山市",
  "value": "230382" }],


[{
  "label": "向阳区",
  "value": "230402" },

{
  "label": "工农区",
  "value": "230403" },

{
  "label": "南山区",
  "value": "230404" },

{
  "label": "兴安区",
  "value": "230405" },

{
  "label": "东山区",
  "value": "230406" },

{
  "label": "兴山区",
  "value": "230407" },

{
  "label": "萝北县",
  "value": "230421" },

{
  "label": "绥滨县",
  "value": "230422" }],


[{
  "label": "尖山区",
  "value": "230502" },

{
  "label": "岭东区",
  "value": "230503" },

{
  "label": "四方台区",
  "value": "230505" },

{
  "label": "宝山区",
  "value": "230506" },

{
  "label": "集贤县",
  "value": "230521" },

{
  "label": "友谊县",
  "value": "230522" },

{
  "label": "宝清县",
  "value": "230523" },

{
  "label": "饶河县",
  "value": "230524" }],


[{
  "label": "萨尔图区",
  "value": "230602" },

{
  "label": "龙凤区",
  "value": "230603" },

{
  "label": "让胡路区",
  "value": "230604" },

{
  "label": "红岗区",
  "value": "230605" },

{
  "label": "大同区",
  "value": "230606" },

{
  "label": "肇州县",
  "value": "230621" },

{
  "label": "肇源县",
  "value": "230622" },

{
  "label": "林甸县",
  "value": "230623" },

{
  "label": "杜尔伯特蒙古族自治县",
  "value": "230624" },

{
  "label": "大庆高新技术产业开发区",
  "value": "230671" }],


[{
  "label": "伊春区",
  "value": "230702" },

{
  "label": "南岔区",
  "value": "230703" },

{
  "label": "友好区",
  "value": "230704" },

{
  "label": "西林区",
  "value": "230705" },

{
  "label": "翠峦区",
  "value": "230706" },

{
  "label": "新青区",
  "value": "230707" },

{
  "label": "美溪区",
  "value": "230708" },

{
  "label": "金山屯区",
  "value": "230709" },

{
  "label": "五营区",
  "value": "230710" },

{
  "label": "乌马河区",
  "value": "230711" },

{
  "label": "汤旺河区",
  "value": "230712" },

{
  "label": "带岭区",
  "value": "230713" },

{
  "label": "乌伊岭区",
  "value": "230714" },

{
  "label": "红星区",
  "value": "230715" },

{
  "label": "上甘岭区",
  "value": "230716" },

{
  "label": "嘉荫县",
  "value": "230722" },

{
  "label": "铁力市",
  "value": "230781" }],


[{
  "label": "向阳区",
  "value": "230803" },

{
  "label": "前进区",
  "value": "230804" },

{
  "label": "东风区",
  "value": "230805" },

{
  "label": "郊区",
  "value": "230811" },

{
  "label": "桦南县",
  "value": "230822" },

{
  "label": "桦川县",
  "value": "230826" },

{
  "label": "汤原县",
  "value": "230828" },

{
  "label": "同江市",
  "value": "230881" },

{
  "label": "富锦市",
  "value": "230882" },

{
  "label": "抚远市",
  "value": "230883" }],


[{
  "label": "新兴区",
  "value": "230902" },

{
  "label": "桃山区",
  "value": "230903" },

{
  "label": "茄子河区",
  "value": "230904" },

{
  "label": "勃利县",
  "value": "230921" }],


[{
  "label": "东安区",
  "value": "231002" },

{
  "label": "阳明区",
  "value": "231003" },

{
  "label": "爱民区",
  "value": "231004" },

{
  "label": "西安区",
  "value": "231005" },

{
  "label": "林口县",
  "value": "231025" },

{
  "label": "牡丹江经济技术开发区",
  "value": "231071" },

{
  "label": "绥芬河市",
  "value": "231081" },

{
  "label": "海林市",
  "value": "231083" },

{
  "label": "宁安市",
  "value": "231084" },

{
  "label": "穆棱市",
  "value": "231085" },

{
  "label": "东宁市",
  "value": "231086" }],


[{
  "label": "爱辉区",
  "value": "231102" },

{
  "label": "嫩江县",
  "value": "231121" },

{
  "label": "逊克县",
  "value": "231123" },

{
  "label": "孙吴县",
  "value": "231124" },

{
  "label": "北安市",
  "value": "231181" },

{
  "label": "五大连池市",
  "value": "231182" }],


[{
  "label": "北林区",
  "value": "231202" },

{
  "label": "望奎县",
  "value": "231221" },

{
  "label": "兰西县",
  "value": "231222" },

{
  "label": "青冈县",
  "value": "231223" },

{
  "label": "庆安县",
  "value": "231224" },

{
  "label": "明水县",
  "value": "231225" },

{
  "label": "绥棱县",
  "value": "231226" },

{
  "label": "安达市",
  "value": "231281" },

{
  "label": "肇东市",
  "value": "231282" },

{
  "label": "海伦市",
  "value": "231283" }],


[{
  "label": "加格达奇区",
  "value": "232701" },

{
  "label": "松岭区",
  "value": "232702" },

{
  "label": "新林区",
  "value": "232703" },

{
  "label": "呼中区",
  "value": "232704" },

{
  "label": "呼玛县",
  "value": "232721" },

{
  "label": "塔河县",
  "value": "232722" },

{
  "label": "漠河县",
  "value": "232723" }]],



[
[{
  "label": "黄浦区",
  "value": "310101" },

{
  "label": "徐汇区",
  "value": "310104" },

{
  "label": "长宁区",
  "value": "310105" },

{
  "label": "静安区",
  "value": "310106" },

{
  "label": "普陀区",
  "value": "310107" },

{
  "label": "虹口区",
  "value": "310109" },

{
  "label": "杨浦区",
  "value": "310110" },

{
  "label": "闵行区",
  "value": "310112" },

{
  "label": "宝山区",
  "value": "310113" },

{
  "label": "嘉定区",
  "value": "310114" },

{
  "label": "浦东新区",
  "value": "310115" },

{
  "label": "金山区",
  "value": "310116" },

{
  "label": "松江区",
  "value": "310117" },

{
  "label": "青浦区",
  "value": "310118" },

{
  "label": "奉贤区",
  "value": "310120" },

{
  "label": "崇明区",
  "value": "310151" }]],



[
[{
  "label": "玄武区",
  "value": "320102" },

{
  "label": "秦淮区",
  "value": "320104" },

{
  "label": "建邺区",
  "value": "320105" },

{
  "label": "鼓楼区",
  "value": "320106" },

{
  "label": "浦口区",
  "value": "320111" },

{
  "label": "栖霞区",
  "value": "320113" },

{
  "label": "雨花台区",
  "value": "320114" },

{
  "label": "江宁区",
  "value": "320115" },

{
  "label": "六合区",
  "value": "320116" },

{
  "label": "溧水区",
  "value": "320117" },

{
  "label": "高淳区",
  "value": "320118" }],


[{
  "label": "锡山区",
  "value": "320205" },

{
  "label": "惠山区",
  "value": "320206" },

{
  "label": "滨湖区",
  "value": "320211" },

{
  "label": "梁溪区",
  "value": "320213" },

{
  "label": "新吴区",
  "value": "320214" },

{
  "label": "江阴市",
  "value": "320281" },

{
  "label": "宜兴市",
  "value": "320282" }],


[{
  "label": "鼓楼区",
  "value": "320302" },

{
  "label": "云龙区",
  "value": "320303" },

{
  "label": "贾汪区",
  "value": "320305" },

{
  "label": "泉山区",
  "value": "320311" },

{
  "label": "铜山区",
  "value": "320312" },

{
  "label": "丰县",
  "value": "320321" },

{
  "label": "沛县",
  "value": "320322" },

{
  "label": "睢宁县",
  "value": "320324" },

{
  "label": "徐州经济技术开发区",
  "value": "320371" },

{
  "label": "新沂市",
  "value": "320381" },

{
  "label": "邳州市",
  "value": "320382" }],


[{
  "label": "天宁区",
  "value": "320402" },

{
  "label": "钟楼区",
  "value": "320404" },

{
  "label": "新北区",
  "value": "320411" },

{
  "label": "武进区",
  "value": "320412" },

{
  "label": "金坛区",
  "value": "320413" },

{
  "label": "溧阳市",
  "value": "320481" }],


[{
  "label": "虎丘区",
  "value": "320505" },

{
  "label": "吴中区",
  "value": "320506" },

{
  "label": "相城区",
  "value": "320507" },

{
  "label": "姑苏区",
  "value": "320508" },

{
  "label": "吴江区",
  "value": "320509" },

{
  "label": "苏州工业园区",
  "value": "320571" },

{
  "label": "常熟市",
  "value": "320581" },

{
  "label": "张家港市",
  "value": "320582" },

{
  "label": "昆山市",
  "value": "320583" },

{
  "label": "太仓市",
  "value": "320585" }],


[{
  "label": "崇川区",
  "value": "320602" },

{
  "label": "港闸区",
  "value": "320611" },

{
  "label": "通州区",
  "value": "320612" },

{
  "label": "海安县",
  "value": "320621" },

{
  "label": "如东县",
  "value": "320623" },

{
  "label": "南通经济技术开发区",
  "value": "320671" },

{
  "label": "启东市",
  "value": "320681" },

{
  "label": "如皋市",
  "value": "320682" },

{
  "label": "海门市",
  "value": "320684" }],


[{
  "label": "连云区",
  "value": "320703" },

{
  "label": "海州区",
  "value": "320706" },

{
  "label": "赣榆区",
  "value": "320707" },

{
  "label": "东海县",
  "value": "320722" },

{
  "label": "灌云县",
  "value": "320723" },

{
  "label": "灌南县",
  "value": "320724" },

{
  "label": "连云港经济技术开发区",
  "value": "320771" },

{
  "label": "连云港高新技术产业开发区",
  "value": "320772" }],


[{
  "label": "淮安区",
  "value": "320803" },

{
  "label": "淮阴区",
  "value": "320804" },

{
  "label": "清江浦区",
  "value": "320812" },

{
  "label": "洪泽区",
  "value": "320813" },

{
  "label": "涟水县",
  "value": "320826" },

{
  "label": "盱眙县",
  "value": "320830" },

{
  "label": "金湖县",
  "value": "320831" },

{
  "label": "淮安经济技术开发区",
  "value": "320871" }],


[{
  "label": "亭湖区",
  "value": "320902" },

{
  "label": "盐都区",
  "value": "320903" },

{
  "label": "大丰区",
  "value": "320904" },

{
  "label": "响水县",
  "value": "320921" },

{
  "label": "滨海县",
  "value": "320922" },

{
  "label": "阜宁县",
  "value": "320923" },

{
  "label": "射阳县",
  "value": "320924" },

{
  "label": "建湖县",
  "value": "320925" },

{
  "label": "盐城经济技术开发区",
  "value": "320971" },

{
  "label": "东台市",
  "value": "320981" }],


[{
  "label": "广陵区",
  "value": "321002" },

{
  "label": "邗江区",
  "value": "321003" },

{
  "label": "江都区",
  "value": "321012" },

{
  "label": "宝应县",
  "value": "321023" },

{
  "label": "扬州经济技术开发区",
  "value": "321071" },

{
  "label": "仪征市",
  "value": "321081" },

{
  "label": "高邮市",
  "value": "321084" }],


[{
  "label": "京口区",
  "value": "321102" },

{
  "label": "润州区",
  "value": "321111" },

{
  "label": "丹徒区",
  "value": "321112" },

{
  "label": "镇江新区",
  "value": "321171" },

{
  "label": "丹阳市",
  "value": "321181" },

{
  "label": "扬中市",
  "value": "321182" },

{
  "label": "句容市",
  "value": "321183" }],


[{
  "label": "海陵区",
  "value": "321202" },

{
  "label": "高港区",
  "value": "321203" },

{
  "label": "姜堰区",
  "value": "321204" },

{
  "label": "泰州医药高新技术产业开发区",
  "value": "321271" },

{
  "label": "兴化市",
  "value": "321281" },

{
  "label": "靖江市",
  "value": "321282" },

{
  "label": "泰兴市",
  "value": "321283" }],


[{
  "label": "宿城区",
  "value": "321302" },

{
  "label": "宿豫区",
  "value": "321311" },

{
  "label": "沭阳县",
  "value": "321322" },

{
  "label": "泗阳县",
  "value": "321323" },

{
  "label": "泗洪县",
  "value": "321324" },

{
  "label": "宿迁经济技术开发区",
  "value": "321371" }]],



[
[{
  "label": "上城区",
  "value": "330102" },

{
  "label": "下城区",
  "value": "330103" },

{
  "label": "江干区",
  "value": "330104" },

{
  "label": "拱墅区",
  "value": "330105" },

{
  "label": "西湖区",
  "value": "330106" },

{
  "label": "滨江区",
  "value": "330108" },

{
  "label": "萧山区",
  "value": "330109" },

{
  "label": "余杭区",
  "value": "330110" },

{
  "label": "富阳区",
  "value": "330111" },

{
  "label": "临安区",
  "value": "330112" },

{
  "label": "桐庐县",
  "value": "330122" },

{
  "label": "淳安县",
  "value": "330127" },

{
  "label": "建德市",
  "value": "330182" }],


[{
  "label": "海曙区",
  "value": "330203" },

{
  "label": "江北区",
  "value": "330205" },

{
  "label": "北仑区",
  "value": "330206" },

{
  "label": "镇海区",
  "value": "330211" },

{
  "label": "鄞州区",
  "value": "330212" },

{
  "label": "奉化区",
  "value": "330213" },

{
  "label": "象山县",
  "value": "330225" },

{
  "label": "宁海县",
  "value": "330226" },

{
  "label": "余姚市",
  "value": "330281" },

{
  "label": "慈溪市",
  "value": "330282" }],


[{
  "label": "鹿城区",
  "value": "330302" },

{
  "label": "龙湾区",
  "value": "330303" },

{
  "label": "瓯海区",
  "value": "330304" },

{
  "label": "洞头区",
  "value": "330305" },

{
  "label": "永嘉县",
  "value": "330324" },

{
  "label": "平阳县",
  "value": "330326" },

{
  "label": "苍南县",
  "value": "330327" },

{
  "label": "文成县",
  "value": "330328" },

{
  "label": "泰顺县",
  "value": "330329" },

{
  "label": "温州经济技术开发区",
  "value": "330371" },

{
  "label": "瑞安市",
  "value": "330381" },

{
  "label": "乐清市",
  "value": "330382" }],


[{
  "label": "南湖区",
  "value": "330402" },

{
  "label": "秀洲区",
  "value": "330411" },

{
  "label": "嘉善县",
  "value": "330421" },

{
  "label": "海盐县",
  "value": "330424" },

{
  "label": "海宁市",
  "value": "330481" },

{
  "label": "平湖市",
  "value": "330482" },

{
  "label": "桐乡市",
  "value": "330483" }],


[{
  "label": "吴兴区",
  "value": "330502" },

{
  "label": "南浔区",
  "value": "330503" },

{
  "label": "德清县",
  "value": "330521" },

{
  "label": "长兴县",
  "value": "330522" },

{
  "label": "安吉县",
  "value": "330523" }],


[{
  "label": "越城区",
  "value": "330602" },

{
  "label": "柯桥区",
  "value": "330603" },

{
  "label": "上虞区",
  "value": "330604" },

{
  "label": "新昌县",
  "value": "330624" },

{
  "label": "诸暨市",
  "value": "330681" },

{
  "label": "嵊州市",
  "value": "330683" }],


[{
  "label": "婺城区",
  "value": "330702" },

{
  "label": "金东区",
  "value": "330703" },

{
  "label": "武义县",
  "value": "330723" },

{
  "label": "浦江县",
  "value": "330726" },

{
  "label": "磐安县",
  "value": "330727" },

{
  "label": "兰溪市",
  "value": "330781" },

{
  "label": "义乌市",
  "value": "330782" },

{
  "label": "东阳市",
  "value": "330783" },

{
  "label": "永康市",
  "value": "330784" }],


[{
  "label": "柯城区",
  "value": "330802" },

{
  "label": "衢江区",
  "value": "330803" },

{
  "label": "常山县",
  "value": "330822" },

{
  "label": "开化县",
  "value": "330824" },

{
  "label": "龙游县",
  "value": "330825" },

{
  "label": "江山市",
  "value": "330881" }],


[{
  "label": "定海区",
  "value": "330902" },

{
  "label": "普陀区",
  "value": "330903" },

{
  "label": "岱山县",
  "value": "330921" },

{
  "label": "嵊泗县",
  "value": "330922" }],


[{
  "label": "椒江区",
  "value": "331002" },

{
  "label": "黄岩区",
  "value": "331003" },

{
  "label": "路桥区",
  "value": "331004" },

{
  "label": "三门县",
  "value": "331022" },

{
  "label": "天台县",
  "value": "331023" },

{
  "label": "仙居县",
  "value": "331024" },

{
  "label": "温岭市",
  "value": "331081" },

{
  "label": "临海市",
  "value": "331082" },

{
  "label": "玉环市",
  "value": "331083" }],


[{
  "label": "莲都区",
  "value": "331102" },

{
  "label": "青田县",
  "value": "331121" },

{
  "label": "缙云县",
  "value": "331122" },

{
  "label": "遂昌县",
  "value": "331123" },

{
  "label": "松阳县",
  "value": "331124" },

{
  "label": "云和县",
  "value": "331125" },

{
  "label": "庆元县",
  "value": "331126" },

{
  "label": "景宁畲族自治县",
  "value": "331127" },

{
  "label": "龙泉市",
  "value": "331181" }]],



[
[{
  "label": "瑶海区",
  "value": "340102" },

{
  "label": "庐阳区",
  "value": "340103" },

{
  "label": "蜀山区",
  "value": "340104" },

{
  "label": "包河区",
  "value": "340111" },

{
  "label": "长丰县",
  "value": "340121" },

{
  "label": "肥东县",
  "value": "340122" },

{
  "label": "肥西县",
  "value": "340123" },

{
  "label": "庐江县",
  "value": "340124" },

{
  "label": "合肥高新技术产业开发区",
  "value": "340171" },

{
  "label": "合肥经济技术开发区",
  "value": "340172" },

{
  "label": "合肥新站高新技术产业开发区",
  "value": "340173" },

{
  "label": "巢湖市",
  "value": "340181" }],


[{
  "label": "镜湖区",
  "value": "340202" },

{
  "label": "弋江区",
  "value": "340203" },

{
  "label": "鸠江区",
  "value": "340207" },

{
  "label": "三山区",
  "value": "340208" },

{
  "label": "芜湖县",
  "value": "340221" },

{
  "label": "繁昌县",
  "value": "340222" },

{
  "label": "南陵县",
  "value": "340223" },

{
  "label": "无为县",
  "value": "340225" },

{
  "label": "芜湖经济技术开发区",
  "value": "340271" },

{
  "label": "安徽芜湖长江大桥经济开发区",
  "value": "340272" }],


[{
  "label": "龙子湖区",
  "value": "340302" },

{
  "label": "蚌山区",
  "value": "340303" },

{
  "label": "禹会区",
  "value": "340304" },

{
  "label": "淮上区",
  "value": "340311" },

{
  "label": "怀远县",
  "value": "340321" },

{
  "label": "五河县",
  "value": "340322" },

{
  "label": "固镇县",
  "value": "340323" },

{
  "label": "蚌埠市高新技术开发区",
  "value": "340371" },

{
  "label": "蚌埠市经济开发区",
  "value": "340372" }],


[{
  "label": "大通区",
  "value": "340402" },

{
  "label": "田家庵区",
  "value": "340403" },

{
  "label": "谢家集区",
  "value": "340404" },

{
  "label": "八公山区",
  "value": "340405" },

{
  "label": "潘集区",
  "value": "340406" },

{
  "label": "凤台县",
  "value": "340421" },

{
  "label": "寿县",
  "value": "340422" }],


[{
  "label": "花山区",
  "value": "340503" },

{
  "label": "雨山区",
  "value": "340504" },

{
  "label": "博望区",
  "value": "340506" },

{
  "label": "当涂县",
  "value": "340521" },

{
  "label": "含山县",
  "value": "340522" },

{
  "label": "和县",
  "value": "340523" }],


[{
  "label": "杜集区",
  "value": "340602" },

{
  "label": "相山区",
  "value": "340603" },

{
  "label": "烈山区",
  "value": "340604" },

{
  "label": "濉溪县",
  "value": "340621" }],


[{
  "label": "铜官区",
  "value": "340705" },

{
  "label": "义安区",
  "value": "340706" },

{
  "label": "郊区",
  "value": "340711" },

{
  "label": "枞阳县",
  "value": "340722" }],


[{
  "label": "迎江区",
  "value": "340802" },

{
  "label": "大观区",
  "value": "340803" },

{
  "label": "宜秀区",
  "value": "340811" },

{
  "label": "怀宁县",
  "value": "340822" },

{
  "label": "潜山县",
  "value": "340824" },

{
  "label": "太湖县",
  "value": "340825" },

{
  "label": "宿松县",
  "value": "340826" },

{
  "label": "望江县",
  "value": "340827" },

{
  "label": "岳西县",
  "value": "340828" },

{
  "label": "安徽安庆经济开发区",
  "value": "340871" },

{
  "label": "桐城市",
  "value": "340881" }],


[{
  "label": "屯溪区",
  "value": "341002" },

{
  "label": "黄山区",
  "value": "341003" },

{
  "label": "徽州区",
  "value": "341004" },

{
  "label": "歙县",
  "value": "341021" },

{
  "label": "休宁县",
  "value": "341022" },

{
  "label": "黟县",
  "value": "341023" },

{
  "label": "祁门县",
  "value": "341024" }],


[{
  "label": "琅琊区",
  "value": "341102" },

{
  "label": "南谯区",
  "value": "341103" },

{
  "label": "来安县",
  "value": "341122" },

{
  "label": "全椒县",
  "value": "341124" },

{
  "label": "定远县",
  "value": "341125" },

{
  "label": "凤阳县",
  "value": "341126" },

{
  "label": "苏滁现代产业园",
  "value": "341171" },

{
  "label": "滁州经济技术开发区",
  "value": "341172" },

{
  "label": "天长市",
  "value": "341181" },

{
  "label": "明光市",
  "value": "341182" }],


[{
  "label": "颍州区",
  "value": "341202" },

{
  "label": "颍东区",
  "value": "341203" },

{
  "label": "颍泉区",
  "value": "341204" },

{
  "label": "临泉县",
  "value": "341221" },

{
  "label": "太和县",
  "value": "341222" },

{
  "label": "阜南县",
  "value": "341225" },

{
  "label": "颍上县",
  "value": "341226" },

{
  "label": "阜阳合肥现代产业园区",
  "value": "341271" },

{
  "label": "阜阳经济技术开发区",
  "value": "341272" },

{
  "label": "界首市",
  "value": "341282" }],


[{
  "label": "埇桥区",
  "value": "341302" },

{
  "label": "砀山县",
  "value": "341321" },

{
  "label": "萧县",
  "value": "341322" },

{
  "label": "灵璧县",
  "value": "341323" },

{
  "label": "泗县",
  "value": "341324" },

{
  "label": "宿州马鞍山现代产业园区",
  "value": "341371" },

{
  "label": "宿州经济技术开发区",
  "value": "341372" }],


[{
  "label": "金安区",
  "value": "341502" },

{
  "label": "裕安区",
  "value": "341503" },

{
  "label": "叶集区",
  "value": "341504" },

{
  "label": "霍邱县",
  "value": "341522" },

{
  "label": "舒城县",
  "value": "341523" },

{
  "label": "金寨县",
  "value": "341524" },

{
  "label": "霍山县",
  "value": "341525" }],


[{
  "label": "谯城区",
  "value": "341602" },

{
  "label": "涡阳县",
  "value": "341621" },

{
  "label": "蒙城县",
  "value": "341622" },

{
  "label": "利辛县",
  "value": "341623" }],


[{
  "label": "贵池区",
  "value": "341702" },

{
  "label": "东至县",
  "value": "341721" },

{
  "label": "石台县",
  "value": "341722" },

{
  "label": "青阳县",
  "value": "341723" }],


[{
  "label": "宣州区",
  "value": "341802" },

{
  "label": "郎溪县",
  "value": "341821" },

{
  "label": "广德县",
  "value": "341822" },

{
  "label": "泾县",
  "value": "341823" },

{
  "label": "绩溪县",
  "value": "341824" },

{
  "label": "旌德县",
  "value": "341825" },

{
  "label": "宣城市经济开发区",
  "value": "341871" },

{
  "label": "宁国市",
  "value": "341881" }]],



[
[{
  "label": "鼓楼区",
  "value": "350102" },

{
  "label": "台江区",
  "value": "350103" },

{
  "label": "仓山区",
  "value": "350104" },

{
  "label": "马尾区",
  "value": "350105" },

{
  "label": "晋安区",
  "value": "350111" },

{
  "label": "闽侯县",
  "value": "350121" },

{
  "label": "连江县",
  "value": "350122" },

{
  "label": "罗源县",
  "value": "350123" },

{
  "label": "闽清县",
  "value": "350124" },

{
  "label": "永泰县",
  "value": "350125" },

{
  "label": "平潭县",
  "value": "350128" },

{
  "label": "福清市",
  "value": "350181" },

{
  "label": "长乐市",
  "value": "350182" }],


[{
  "label": "思明区",
  "value": "350203" },

{
  "label": "海沧区",
  "value": "350205" },

{
  "label": "湖里区",
  "value": "350206" },

{
  "label": "集美区",
  "value": "350211" },

{
  "label": "同安区",
  "value": "350212" },

{
  "label": "翔安区",
  "value": "350213" }],


[{
  "label": "城厢区",
  "value": "350302" },

{
  "label": "涵江区",
  "value": "350303" },

{
  "label": "荔城区",
  "value": "350304" },

{
  "label": "秀屿区",
  "value": "350305" },

{
  "label": "仙游县",
  "value": "350322" }],


[{
  "label": "梅列区",
  "value": "350402" },

{
  "label": "三元区",
  "value": "350403" },

{
  "label": "明溪县",
  "value": "350421" },

{
  "label": "清流县",
  "value": "350423" },

{
  "label": "宁化县",
  "value": "350424" },

{
  "label": "大田县",
  "value": "350425" },

{
  "label": "尤溪县",
  "value": "350426" },

{
  "label": "沙县",
  "value": "350427" },

{
  "label": "将乐县",
  "value": "350428" },

{
  "label": "泰宁县",
  "value": "350429" },

{
  "label": "建宁县",
  "value": "350430" },

{
  "label": "永安市",
  "value": "350481" }],


[{
  "label": "鲤城区",
  "value": "350502" },

{
  "label": "丰泽区",
  "value": "350503" },

{
  "label": "洛江区",
  "value": "350504" },

{
  "label": "泉港区",
  "value": "350505" },

{
  "label": "惠安县",
  "value": "350521" },

{
  "label": "安溪县",
  "value": "350524" },

{
  "label": "永春县",
  "value": "350525" },

{
  "label": "德化县",
  "value": "350526" },

{
  "label": "金门县",
  "value": "350527" },

{
  "label": "石狮市",
  "value": "350581" },

{
  "label": "晋江市",
  "value": "350582" },

{
  "label": "南安市",
  "value": "350583" }],


[{
  "label": "芗城区",
  "value": "350602" },

{
  "label": "龙文区",
  "value": "350603" },

{
  "label": "云霄县",
  "value": "350622" },

{
  "label": "漳浦县",
  "value": "350623" },

{
  "label": "诏安县",
  "value": "350624" },

{
  "label": "长泰县",
  "value": "350625" },

{
  "label": "东山县",
  "value": "350626" },

{
  "label": "南靖县",
  "value": "350627" },

{
  "label": "平和县",
  "value": "350628" },

{
  "label": "华安县",
  "value": "350629" },

{
  "label": "龙海市",
  "value": "350681" }],


[{
  "label": "延平区",
  "value": "350702" },

{
  "label": "建阳区",
  "value": "350703" },

{
  "label": "顺昌县",
  "value": "350721" },

{
  "label": "浦城县",
  "value": "350722" },

{
  "label": "光泽县",
  "value": "350723" },

{
  "label": "松溪县",
  "value": "350724" },

{
  "label": "政和县",
  "value": "350725" },

{
  "label": "邵武市",
  "value": "350781" },

{
  "label": "武夷山市",
  "value": "350782" },

{
  "label": "建瓯市",
  "value": "350783" }],


[{
  "label": "新罗区",
  "value": "350802" },

{
  "label": "永定区",
  "value": "350803" },

{
  "label": "长汀县",
  "value": "350821" },

{
  "label": "上杭县",
  "value": "350823" },

{
  "label": "武平县",
  "value": "350824" },

{
  "label": "连城县",
  "value": "350825" },

{
  "label": "漳平市",
  "value": "350881" }],


[{
  "label": "蕉城区",
  "value": "350902" },

{
  "label": "霞浦县",
  "value": "350921" },

{
  "label": "古田县",
  "value": "350922" },

{
  "label": "屏南县",
  "value": "350923" },

{
  "label": "寿宁县",
  "value": "350924" },

{
  "label": "周宁县",
  "value": "350925" },

{
  "label": "柘荣县",
  "value": "350926" },

{
  "label": "福安市",
  "value": "350981" },

{
  "label": "福鼎市",
  "value": "350982" }]],



[
[{
  "label": "东湖区",
  "value": "360102" },

{
  "label": "西湖区",
  "value": "360103" },

{
  "label": "青云谱区",
  "value": "360104" },

{
  "label": "湾里区",
  "value": "360105" },

{
  "label": "青山湖区",
  "value": "360111" },

{
  "label": "新建区",
  "value": "360112" },

{
  "label": "南昌县",
  "value": "360121" },

{
  "label": "安义县",
  "value": "360123" },

{
  "label": "进贤县",
  "value": "360124" }],


[{
  "label": "昌江区",
  "value": "360202" },

{
  "label": "珠山区",
  "value": "360203" },

{
  "label": "浮梁县",
  "value": "360222" },

{
  "label": "乐平市",
  "value": "360281" }],


[{
  "label": "安源区",
  "value": "360302" },

{
  "label": "湘东区",
  "value": "360313" },

{
  "label": "莲花县",
  "value": "360321" },

{
  "label": "上栗县",
  "value": "360322" },

{
  "label": "芦溪县",
  "value": "360323" }],


[{
  "label": "濂溪区",
  "value": "360402" },

{
  "label": "浔阳区",
  "value": "360403" },

{
  "label": "柴桑区",
  "value": "360404" },

{
  "label": "武宁县",
  "value": "360423" },

{
  "label": "修水县",
  "value": "360424" },

{
  "label": "永修县",
  "value": "360425" },

{
  "label": "德安县",
  "value": "360426" },

{
  "label": "都昌县",
  "value": "360428" },

{
  "label": "湖口县",
  "value": "360429" },

{
  "label": "彭泽县",
  "value": "360430" },

{
  "label": "瑞昌市",
  "value": "360481" },

{
  "label": "共青城市",
  "value": "360482" },

{
  "label": "庐山市",
  "value": "360483" }],


[{
  "label": "渝水区",
  "value": "360502" },

{
  "label": "分宜县",
  "value": "360521" }],


[{
  "label": "月湖区",
  "value": "360602" },

{
  "label": "余江县",
  "value": "360622" },

{
  "label": "贵溪市",
  "value": "360681" }],


[{
  "label": "章贡区",
  "value": "360702" },

{
  "label": "南康区",
  "value": "360703" },

{
  "label": "赣县区",
  "value": "360704" },

{
  "label": "信丰县",
  "value": "360722" },

{
  "label": "大余县",
  "value": "360723" },

{
  "label": "上犹县",
  "value": "360724" },

{
  "label": "崇义县",
  "value": "360725" },

{
  "label": "安远县",
  "value": "360726" },

{
  "label": "龙南县",
  "value": "360727" },

{
  "label": "定南县",
  "value": "360728" },

{
  "label": "全南县",
  "value": "360729" },

{
  "label": "宁都县",
  "value": "360730" },

{
  "label": "于都县",
  "value": "360731" },

{
  "label": "兴国县",
  "value": "360732" },

{
  "label": "会昌县",
  "value": "360733" },

{
  "label": "寻乌县",
  "value": "360734" },

{
  "label": "石城县",
  "value": "360735" },

{
  "label": "瑞金市",
  "value": "360781" }],


[{
  "label": "吉州区",
  "value": "360802" },

{
  "label": "青原区",
  "value": "360803" },

{
  "label": "吉安县",
  "value": "360821" },

{
  "label": "吉水县",
  "value": "360822" },

{
  "label": "峡江县",
  "value": "360823" },

{
  "label": "新干县",
  "value": "360824" },

{
  "label": "永丰县",
  "value": "360825" },

{
  "label": "泰和县",
  "value": "360826" },

{
  "label": "遂川县",
  "value": "360827" },

{
  "label": "万安县",
  "value": "360828" },

{
  "label": "安福县",
  "value": "360829" },

{
  "label": "永新县",
  "value": "360830" },

{
  "label": "井冈山市",
  "value": "360881" }],


[{
  "label": "袁州区",
  "value": "360902" },

{
  "label": "奉新县",
  "value": "360921" },

{
  "label": "万载县",
  "value": "360922" },

{
  "label": "上高县",
  "value": "360923" },

{
  "label": "宜丰县",
  "value": "360924" },

{
  "label": "靖安县",
  "value": "360925" },

{
  "label": "铜鼓县",
  "value": "360926" },

{
  "label": "丰城市",
  "value": "360981" },

{
  "label": "樟树市",
  "value": "360982" },

{
  "label": "高安市",
  "value": "360983" }],


[{
  "label": "临川区",
  "value": "361002" },

{
  "label": "东乡区",
  "value": "361003" },

{
  "label": "南城县",
  "value": "361021" },

{
  "label": "黎川县",
  "value": "361022" },

{
  "label": "南丰县",
  "value": "361023" },

{
  "label": "崇仁县",
  "value": "361024" },

{
  "label": "乐安县",
  "value": "361025" },

{
  "label": "宜黄县",
  "value": "361026" },

{
  "label": "金溪县",
  "value": "361027" },

{
  "label": "资溪县",
  "value": "361028" },

{
  "label": "广昌县",
  "value": "361030" }],


[{
  "label": "信州区",
  "value": "361102" },

{
  "label": "广丰区",
  "value": "361103" },

{
  "label": "上饶县",
  "value": "361121" },

{
  "label": "玉山县",
  "value": "361123" },

{
  "label": "铅山县",
  "value": "361124" },

{
  "label": "横峰县",
  "value": "361125" },

{
  "label": "弋阳县",
  "value": "361126" },

{
  "label": "余干县",
  "value": "361127" },

{
  "label": "鄱阳县",
  "value": "361128" },

{
  "label": "万年县",
  "value": "361129" },

{
  "label": "婺源县",
  "value": "361130" },

{
  "label": "德兴市",
  "value": "361181" }]],



[
[{
  "label": "历下区",
  "value": "370102" },

{
  "label": "市中区",
  "value": "370103" },

{
  "label": "槐荫区",
  "value": "370104" },

{
  "label": "天桥区",
  "value": "370105" },

{
  "label": "历城区",
  "value": "370112" },

{
  "label": "长清区",
  "value": "370113" },

{
  "label": "章丘区",
  "value": "370114" },

{
  "label": "平阴县",
  "value": "370124" },

{
  "label": "济阳县",
  "value": "370125" },

{
  "label": "商河县",
  "value": "370126" },

{
  "label": "济南高新技术产业开发区",
  "value": "370171" }],


[{
  "label": "市南区",
  "value": "370202" },

{
  "label": "市北区",
  "value": "370203" },

{
  "label": "黄岛区",
  "value": "370211" },

{
  "label": "崂山区",
  "value": "370212" },

{
  "label": "李沧区",
  "value": "370213" },

{
  "label": "城阳区",
  "value": "370214" },

{
  "label": "即墨区",
  "value": "370215" },

{
  "label": "青岛高新技术产业开发区",
  "value": "370271" },

{
  "label": "胶州市",
  "value": "370281" },

{
  "label": "平度市",
  "value": "370283" },

{
  "label": "莱西市",
  "value": "370285" }],


[{
  "label": "淄川区",
  "value": "370302" },

{
  "label": "张店区",
  "value": "370303" },

{
  "label": "博山区",
  "value": "370304" },

{
  "label": "临淄区",
  "value": "370305" },

{
  "label": "周村区",
  "value": "370306" },

{
  "label": "桓台县",
  "value": "370321" },

{
  "label": "高青县",
  "value": "370322" },

{
  "label": "沂源县",
  "value": "370323" }],


[{
  "label": "市中区",
  "value": "370402" },

{
  "label": "薛城区",
  "value": "370403" },

{
  "label": "峄城区",
  "value": "370404" },

{
  "label": "台儿庄区",
  "value": "370405" },

{
  "label": "山亭区",
  "value": "370406" },

{
  "label": "滕州市",
  "value": "370481" }],


[{
  "label": "东营区",
  "value": "370502" },

{
  "label": "河口区",
  "value": "370503" },

{
  "label": "垦利区",
  "value": "370505" },

{
  "label": "利津县",
  "value": "370522" },

{
  "label": "广饶县",
  "value": "370523" },

{
  "label": "东营经济技术开发区",
  "value": "370571" },

{
  "label": "东营港经济开发区",
  "value": "370572" }],


[{
  "label": "芝罘区",
  "value": "370602" },

{
  "label": "福山区",
  "value": "370611" },

{
  "label": "牟平区",
  "value": "370612" },

{
  "label": "莱山区",
  "value": "370613" },

{
  "label": "长岛县",
  "value": "370634" },

{
  "label": "烟台高新技术产业开发区",
  "value": "370671" },

{
  "label": "烟台经济技术开发区",
  "value": "370672" },

{
  "label": "龙口市",
  "value": "370681" },

{
  "label": "莱阳市",
  "value": "370682" },

{
  "label": "莱州市",
  "value": "370683" },

{
  "label": "蓬莱市",
  "value": "370684" },

{
  "label": "招远市",
  "value": "370685" },

{
  "label": "栖霞市",
  "value": "370686" },

{
  "label": "海阳市",
  "value": "370687" }],


[{
  "label": "潍城区",
  "value": "370702" },

{
  "label": "寒亭区",
  "value": "370703" },

{
  "label": "坊子区",
  "value": "370704" },

{
  "label": "奎文区",
  "value": "370705" },

{
  "label": "临朐县",
  "value": "370724" },

{
  "label": "昌乐县",
  "value": "370725" },

{
  "label": "潍坊滨海经济技术开发区",
  "value": "370772" },

{
  "label": "青州市",
  "value": "370781" },

{
  "label": "诸城市",
  "value": "370782" },

{
  "label": "寿光市",
  "value": "370783" },

{
  "label": "安丘市",
  "value": "370784" },

{
  "label": "高密市",
  "value": "370785" },

{
  "label": "昌邑市",
  "value": "370786" }],


[{
  "label": "任城区",
  "value": "370811" },

{
  "label": "兖州区",
  "value": "370812" },

{
  "label": "微山县",
  "value": "370826" },

{
  "label": "鱼台县",
  "value": "370827" },

{
  "label": "金乡县",
  "value": "370828" },

{
  "label": "嘉祥县",
  "value": "370829" },

{
  "label": "汶上县",
  "value": "370830" },

{
  "label": "泗水县",
  "value": "370831" },

{
  "label": "梁山县",
  "value": "370832" },

{
  "label": "济宁高新技术产业开发区",
  "value": "370871" },

{
  "label": "曲阜市",
  "value": "370881" },

{
  "label": "邹城市",
  "value": "370883" }],


[{
  "label": "泰山区",
  "value": "370902" },

{
  "label": "岱岳区",
  "value": "370911" },

{
  "label": "宁阳县",
  "value": "370921" },

{
  "label": "东平县",
  "value": "370923" },

{
  "label": "新泰市",
  "value": "370982" },

{
  "label": "肥城市",
  "value": "370983" }],


[{
  "label": "环翠区",
  "value": "371002" },

{
  "label": "文登区",
  "value": "371003" },

{
  "label": "威海火炬高技术产业开发区",
  "value": "371071" },

{
  "label": "威海经济技术开发区",
  "value": "371072" },

{
  "label": "威海临港经济技术开发区",
  "value": "371073" },

{
  "label": "荣成市",
  "value": "371082" },

{
  "label": "乳山市",
  "value": "371083" }],


[{
  "label": "东港区",
  "value": "371102" },

{
  "label": "岚山区",
  "value": "371103" },

{
  "label": "五莲县",
  "value": "371121" },

{
  "label": "莒县",
  "value": "371122" },

{
  "label": "日照经济技术开发区",
  "value": "371171" },

{
  "label": "日照国际海洋城",
  "value": "371172" }],


[{
  "label": "莱城区",
  "value": "371202" },

{
  "label": "钢城区",
  "value": "371203" }],


[{
  "label": "兰山区",
  "value": "371302" },

{
  "label": "罗庄区",
  "value": "371311" },

{
  "label": "河东区",
  "value": "371312" },

{
  "label": "沂南县",
  "value": "371321" },

{
  "label": "郯城县",
  "value": "371322" },

{
  "label": "沂水县",
  "value": "371323" },

{
  "label": "兰陵县",
  "value": "371324" },

{
  "label": "费县",
  "value": "371325" },

{
  "label": "平邑县",
  "value": "371326" },

{
  "label": "莒南县",
  "value": "371327" },

{
  "label": "蒙阴县",
  "value": "371328" },

{
  "label": "临沭县",
  "value": "371329" },

{
  "label": "临沂高新技术产业开发区",
  "value": "371371" },

{
  "label": "临沂经济技术开发区",
  "value": "371372" },

{
  "label": "临沂临港经济开发区",
  "value": "371373" }],


[{
  "label": "德城区",
  "value": "371402" },

{
  "label": "陵城区",
  "value": "371403" },

{
  "label": "宁津县",
  "value": "371422" },

{
  "label": "庆云县",
  "value": "371423" },

{
  "label": "临邑县",
  "value": "371424" },

{
  "label": "齐河县",
  "value": "371425" },

{
  "label": "平原县",
  "value": "371426" },

{
  "label": "夏津县",
  "value": "371427" },

{
  "label": "武城县",
  "value": "371428" },

{
  "label": "德州经济技术开发区",
  "value": "371471" },

{
  "label": "德州运河经济开发区",
  "value": "371472" },

{
  "label": "乐陵市",
  "value": "371481" },

{
  "label": "禹城市",
  "value": "371482" }],


[{
  "label": "东昌府区",
  "value": "371502" },

{
  "label": "阳谷县",
  "value": "371521" },

{
  "label": "莘县",
  "value": "371522" },

{
  "label": "茌平县",
  "value": "371523" },

{
  "label": "东阿县",
  "value": "371524" },

{
  "label": "冠县",
  "value": "371525" },

{
  "label": "高唐县",
  "value": "371526" },

{
  "label": "临清市",
  "value": "371581" }],


[{
  "label": "滨城区",
  "value": "371602" },

{
  "label": "沾化区",
  "value": "371603" },

{
  "label": "惠民县",
  "value": "371621" },

{
  "label": "阳信县",
  "value": "371622" },

{
  "label": "无棣县",
  "value": "371623" },

{
  "label": "博兴县",
  "value": "371625" },

{
  "label": "邹平县",
  "value": "371626" }],


[{
  "label": "牡丹区",
  "value": "371702" },

{
  "label": "定陶区",
  "value": "371703" },

{
  "label": "曹县",
  "value": "371721" },

{
  "label": "单县",
  "value": "371722" },

{
  "label": "成武县",
  "value": "371723" },

{
  "label": "巨野县",
  "value": "371724" },

{
  "label": "郓城县",
  "value": "371725" },

{
  "label": "鄄城县",
  "value": "371726" },

{
  "label": "东明县",
  "value": "371728" },

{
  "label": "菏泽经济技术开发区",
  "value": "371771" },

{
  "label": "菏泽高新技术开发区",
  "value": "371772" }]],



[
[{
  "label": "中原区",
  "value": "410102" },

{
  "label": "二七区",
  "value": "410103" },

{
  "label": "管城回族区",
  "value": "410104" },

{
  "label": "金水区",
  "value": "410105" },

{
  "label": "上街区",
  "value": "410106" },

{
  "label": "惠济区",
  "value": "410108" },

{
  "label": "中牟县",
  "value": "410122" },

{
  "label": "郑州经济技术开发区",
  "value": "410171" },

{
  "label": "郑州高新技术产业开发区",
  "value": "410172" },

{
  "label": "郑州航空港经济综合实验区",
  "value": "410173" },

{
  "label": "巩义市",
  "value": "410181" },

{
  "label": "荥阳市",
  "value": "410182" },

{
  "label": "新密市",
  "value": "410183" },

{
  "label": "新郑市",
  "value": "410184" },

{
  "label": "登封市",
  "value": "410185" }],


[{
  "label": "龙亭区",
  "value": "410202" },

{
  "label": "顺河回族区",
  "value": "410203" },

{
  "label": "鼓楼区",
  "value": "410204" },

{
  "label": "禹王台区",
  "value": "410205" },

{
  "label": "祥符区",
  "value": "410212" },

{
  "label": "杞县",
  "value": "410221" },

{
  "label": "通许县",
  "value": "410222" },

{
  "label": "尉氏县",
  "value": "410223" },

{
  "label": "兰考县",
  "value": "410225" }],


[{
  "label": "老城区",
  "value": "410302" },

{
  "label": "西工区",
  "value": "410303" },

{
  "label": "瀍河回族区",
  "value": "410304" },

{
  "label": "涧西区",
  "value": "410305" },

{
  "label": "吉利区",
  "value": "410306" },

{
  "label": "洛龙区",
  "value": "410311" },

{
  "label": "孟津县",
  "value": "410322" },

{
  "label": "新安县",
  "value": "410323" },

{
  "label": "栾川县",
  "value": "410324" },

{
  "label": "嵩县",
  "value": "410325" },

{
  "label": "汝阳县",
  "value": "410326" },

{
  "label": "宜阳县",
  "value": "410327" },

{
  "label": "洛宁县",
  "value": "410328" },

{
  "label": "伊川县",
  "value": "410329" },

{
  "label": "洛阳高新技术产业开发区",
  "value": "410371" },

{
  "label": "偃师市",
  "value": "410381" }],


[{
  "label": "新华区",
  "value": "410402" },

{
  "label": "卫东区",
  "value": "410403" },

{
  "label": "石龙区",
  "value": "410404" },

{
  "label": "湛河区",
  "value": "410411" },

{
  "label": "宝丰县",
  "value": "410421" },

{
  "label": "叶县",
  "value": "410422" },

{
  "label": "鲁山县",
  "value": "410423" },

{
  "label": "郏县",
  "value": "410425" },

{
  "label": "平顶山高新技术产业开发区",
  "value": "410471" },

{
  "label": "平顶山市新城区",
  "value": "410472" },

{
  "label": "舞钢市",
  "value": "410481" },

{
  "label": "汝州市",
  "value": "410482" }],


[{
  "label": "文峰区",
  "value": "410502" },

{
  "label": "北关区",
  "value": "410503" },

{
  "label": "殷都区",
  "value": "410505" },

{
  "label": "龙安区",
  "value": "410506" },

{
  "label": "安阳县",
  "value": "410522" },

{
  "label": "汤阴县",
  "value": "410523" },

{
  "label": "滑县",
  "value": "410526" },

{
  "label": "内黄县",
  "value": "410527" },

{
  "label": "安阳高新技术产业开发区",
  "value": "410571" },

{
  "label": "林州市",
  "value": "410581" }],


[{
  "label": "鹤山区",
  "value": "410602" },

{
  "label": "山城区",
  "value": "410603" },

{
  "label": "淇滨区",
  "value": "410611" },

{
  "label": "浚县",
  "value": "410621" },

{
  "label": "淇县",
  "value": "410622" },

{
  "label": "鹤壁经济技术开发区",
  "value": "410671" }],


[{
  "label": "红旗区",
  "value": "410702" },

{
  "label": "卫滨区",
  "value": "410703" },

{
  "label": "凤泉区",
  "value": "410704" },

{
  "label": "牧野区",
  "value": "410711" },

{
  "label": "新乡县",
  "value": "410721" },

{
  "label": "获嘉县",
  "value": "410724" },

{
  "label": "原阳县",
  "value": "410725" },

{
  "label": "延津县",
  "value": "410726" },

{
  "label": "封丘县",
  "value": "410727" },

{
  "label": "长垣县",
  "value": "410728" },

{
  "label": "新乡高新技术产业开发区",
  "value": "410771" },

{
  "label": "新乡经济技术开发区",
  "value": "410772" },

{
  "label": "新乡市平原城乡一体化示范区",
  "value": "410773" },

{
  "label": "卫辉市",
  "value": "410781" },

{
  "label": "辉县市",
  "value": "410782" }],


[{
  "label": "解放区",
  "value": "410802" },

{
  "label": "中站区",
  "value": "410803" },

{
  "label": "马村区",
  "value": "410804" },

{
  "label": "山阳区",
  "value": "410811" },

{
  "label": "修武县",
  "value": "410821" },

{
  "label": "博爱县",
  "value": "410822" },

{
  "label": "武陟县",
  "value": "410823" },

{
  "label": "温县",
  "value": "410825" },

{
  "label": "焦作城乡一体化示范区",
  "value": "410871" },

{
  "label": "沁阳市",
  "value": "410882" },

{
  "label": "孟州市",
  "value": "410883" }],


[{
  "label": "华龙区",
  "value": "410902" },

{
  "label": "清丰县",
  "value": "410922" },

{
  "label": "南乐县",
  "value": "410923" },

{
  "label": "范县",
  "value": "410926" },

{
  "label": "台前县",
  "value": "410927" },

{
  "label": "濮阳县",
  "value": "410928" },

{
  "label": "河南濮阳工业园区",
  "value": "410971" },

{
  "label": "濮阳经济技术开发区",
  "value": "410972" }],


[{
  "label": "魏都区",
  "value": "411002" },

{
  "label": "建安区",
  "value": "411003" },

{
  "label": "鄢陵县",
  "value": "411024" },

{
  "label": "襄城县",
  "value": "411025" },

{
  "label": "许昌经济技术开发区",
  "value": "411071" },

{
  "label": "禹州市",
  "value": "411081" },

{
  "label": "长葛市",
  "value": "411082" }],


[{
  "label": "源汇区",
  "value": "411102" },

{
  "label": "郾城区",
  "value": "411103" },

{
  "label": "召陵区",
  "value": "411104" },

{
  "label": "舞阳县",
  "value": "411121" },

{
  "label": "临颍县",
  "value": "411122" },

{
  "label": "漯河经济技术开发区",
  "value": "411171" }],


[{
  "label": "湖滨区",
  "value": "411202" },

{
  "label": "陕州区",
  "value": "411203" },

{
  "label": "渑池县",
  "value": "411221" },

{
  "label": "卢氏县",
  "value": "411224" },

{
  "label": "河南三门峡经济开发区",
  "value": "411271" },

{
  "label": "义马市",
  "value": "411281" },

{
  "label": "灵宝市",
  "value": "411282" }],


[{
  "label": "宛城区",
  "value": "411302" },

{
  "label": "卧龙区",
  "value": "411303" },

{
  "label": "南召县",
  "value": "411321" },

{
  "label": "方城县",
  "value": "411322" },

{
  "label": "西峡县",
  "value": "411323" },

{
  "label": "镇平县",
  "value": "411324" },

{
  "label": "内乡县",
  "value": "411325" },

{
  "label": "淅川县",
  "value": "411326" },

{
  "label": "社旗县",
  "value": "411327" },

{
  "label": "唐河县",
  "value": "411328" },

{
  "label": "新野县",
  "value": "411329" },

{
  "label": "桐柏县",
  "value": "411330" },

{
  "label": "南阳高新技术产业开发区",
  "value": "411371" },

{
  "label": "南阳市城乡一体化示范区",
  "value": "411372" },

{
  "label": "邓州市",
  "value": "411381" }],


[{
  "label": "梁园区",
  "value": "411402" },

{
  "label": "睢阳区",
  "value": "411403" },

{
  "label": "民权县",
  "value": "411421" },

{
  "label": "睢县",
  "value": "411422" },

{
  "label": "宁陵县",
  "value": "411423" },

{
  "label": "柘城县",
  "value": "411424" },

{
  "label": "虞城县",
  "value": "411425" },

{
  "label": "夏邑县",
  "value": "411426" },

{
  "label": "豫东综合物流产业聚集区",
  "value": "411471" },

{
  "label": "河南商丘经济开发区",
  "value": "411472" },

{
  "label": "永城市",
  "value": "411481" }],


[{
  "label": "浉河区",
  "value": "411502" },

{
  "label": "平桥区",
  "value": "411503" },

{
  "label": "罗山县",
  "value": "411521" },

{
  "label": "光山县",
  "value": "411522" },

{
  "label": "新县",
  "value": "411523" },

{
  "label": "商城县",
  "value": "411524" },

{
  "label": "固始县",
  "value": "411525" },

{
  "label": "潢川县",
  "value": "411526" },

{
  "label": "淮滨县",
  "value": "411527" },

{
  "label": "息县",
  "value": "411528" },

{
  "label": "信阳高新技术产业开发区",
  "value": "411571" }],


[{
  "label": "川汇区",
  "value": "411602" },

{
  "label": "扶沟县",
  "value": "411621" },

{
  "label": "西华县",
  "value": "411622" },

{
  "label": "商水县",
  "value": "411623" },

{
  "label": "沈丘县",
  "value": "411624" },

{
  "label": "郸城县",
  "value": "411625" },

{
  "label": "淮阳县",
  "value": "411626" },

{
  "label": "太康县",
  "value": "411627" },

{
  "label": "鹿邑县",
  "value": "411628" },

{
  "label": "河南周口经济开发区",
  "value": "411671" },

{
  "label": "项城市",
  "value": "411681" }],


[{
  "label": "驿城区",
  "value": "411702" },

{
  "label": "西平县",
  "value": "411721" },

{
  "label": "上蔡县",
  "value": "411722" },

{
  "label": "平舆县",
  "value": "411723" },

{
  "label": "正阳县",
  "value": "411724" },

{
  "label": "确山县",
  "value": "411725" },

{
  "label": "泌阳县",
  "value": "411726" },

{
  "label": "汝南县",
  "value": "411727" },

{
  "label": "遂平县",
  "value": "411728" },

{
  "label": "新蔡县",
  "value": "411729" },

{
  "label": "河南驻马店经济开发区",
  "value": "411771" }],


[{
  "label": "济源市",
  "value": "419001" }]],


[
[{
  "label": "江岸区",
  "value": "420102" },

{
  "label": "江汉区",
  "value": "420103" },

{
  "label": "硚口区",
  "value": "420104" },

{
  "label": "汉阳区",
  "value": "420105" },

{
  "label": "武昌区",
  "value": "420106" },

{
  "label": "青山区",
  "value": "420107" },

{
  "label": "洪山区",
  "value": "420111" },

{
  "label": "东西湖区",
  "value": "420112" },

{
  "label": "汉南区",
  "value": "420113" },

{
  "label": "蔡甸区",
  "value": "420114" },

{
  "label": "江夏区",
  "value": "420115" },

{
  "label": "黄陂区",
  "value": "420116" },

{
  "label": "新洲区",
  "value": "420117" }],


[{
  "label": "黄石港区",
  "value": "420202" },

{
  "label": "西塞山区",
  "value": "420203" },

{
  "label": "下陆区",
  "value": "420204" },

{
  "label": "铁山区",
  "value": "420205" },

{
  "label": "阳新县",
  "value": "420222" },

{
  "label": "大冶市",
  "value": "420281" }],


[{
  "label": "茅箭区",
  "value": "420302" },

{
  "label": "张湾区",
  "value": "420303" },

{
  "label": "郧阳区",
  "value": "420304" },

{
  "label": "郧西县",
  "value": "420322" },

{
  "label": "竹山县",
  "value": "420323" },

{
  "label": "竹溪县",
  "value": "420324" },

{
  "label": "房县",
  "value": "420325" },

{
  "label": "丹江口市",
  "value": "420381" }],


[{
  "label": "西陵区",
  "value": "420502" },

{
  "label": "伍家岗区",
  "value": "420503" },

{
  "label": "点军区",
  "value": "420504" },

{
  "label": "猇亭区",
  "value": "420505" },

{
  "label": "夷陵区",
  "value": "420506" },

{
  "label": "远安县",
  "value": "420525" },

{
  "label": "兴山县",
  "value": "420526" },

{
  "label": "秭归县",
  "value": "420527" },

{
  "label": "长阳土家族自治县",
  "value": "420528" },

{
  "label": "五峰土家族自治县",
  "value": "420529" },

{
  "label": "宜都市",
  "value": "420581" },

{
  "label": "当阳市",
  "value": "420582" },

{
  "label": "枝江市",
  "value": "420583" }],


[{
  "label": "襄城区",
  "value": "420602" },

{
  "label": "樊城区",
  "value": "420606" },

{
  "label": "襄州区",
  "value": "420607" },

{
  "label": "南漳县",
  "value": "420624" },

{
  "label": "谷城县",
  "value": "420625" },

{
  "label": "保康县",
  "value": "420626" },

{
  "label": "老河口市",
  "value": "420682" },

{
  "label": "枣阳市",
  "value": "420683" },

{
  "label": "宜城市",
  "value": "420684" }],


[{
  "label": "梁子湖区",
  "value": "420702" },

{
  "label": "华容区",
  "value": "420703" },

{
  "label": "鄂城区",
  "value": "420704" }],


[{
  "label": "东宝区",
  "value": "420802" },

{
  "label": "掇刀区",
  "value": "420804" },

{
  "label": "京山县",
  "value": "420821" },

{
  "label": "沙洋县",
  "value": "420822" },

{
  "label": "钟祥市",
  "value": "420881" }],


[{
  "label": "孝南区",
  "value": "420902" },

{
  "label": "孝昌县",
  "value": "420921" },

{
  "label": "大悟县",
  "value": "420922" },

{
  "label": "云梦县",
  "value": "420923" },

{
  "label": "应城市",
  "value": "420981" },

{
  "label": "安陆市",
  "value": "420982" },

{
  "label": "汉川市",
  "value": "420984" }],


[{
  "label": "沙市区",
  "value": "421002" },

{
  "label": "荆州区",
  "value": "421003" },

{
  "label": "公安县",
  "value": "421022" },

{
  "label": "监利县",
  "value": "421023" },

{
  "label": "江陵县",
  "value": "421024" },

{
  "label": "荆州经济技术开发区",
  "value": "421071" },

{
  "label": "石首市",
  "value": "421081" },

{
  "label": "洪湖市",
  "value": "421083" },

{
  "label": "松滋市",
  "value": "421087" }],


[{
  "label": "黄州区",
  "value": "421102" },

{
  "label": "团风县",
  "value": "421121" },

{
  "label": "红安县",
  "value": "421122" },

{
  "label": "罗田县",
  "value": "421123" },

{
  "label": "英山县",
  "value": "421124" },

{
  "label": "浠水县",
  "value": "421125" },

{
  "label": "蕲春县",
  "value": "421126" },

{
  "label": "黄梅县",
  "value": "421127" },

{
  "label": "龙感湖管理区",
  "value": "421171" },

{
  "label": "麻城市",
  "value": "421181" },

{
  "label": "武穴市",
  "value": "421182" }],


[{
  "label": "咸安区",
  "value": "421202" },

{
  "label": "嘉鱼县",
  "value": "421221" },

{
  "label": "通城县",
  "value": "421222" },

{
  "label": "崇阳县",
  "value": "421223" },

{
  "label": "通山县",
  "value": "421224" },

{
  "label": "赤壁市",
  "value": "421281" }],


[{
  "label": "曾都区",
  "value": "421303" },

{
  "label": "随县",
  "value": "421321" },

{
  "label": "广水市",
  "value": "421381" }],


[{
  "label": "恩施市",
  "value": "422801" },

{
  "label": "利川市",
  "value": "422802" },

{
  "label": "建始县",
  "value": "422822" },

{
  "label": "巴东县",
  "value": "422823" },

{
  "label": "宣恩县",
  "value": "422825" },

{
  "label": "咸丰县",
  "value": "422826" },

{
  "label": "来凤县",
  "value": "422827" },

{
  "label": "鹤峰县",
  "value": "422828" }],


[{
  "label": "仙桃市",
  "value": "429004" },

{
  "label": "潜江市",
  "value": "429005" },

{
  "label": "天门市",
  "value": "429006" },

{
  "label": "神农架林区",
  "value": "429021" }]],



[
[{
  "label": "芙蓉区",
  "value": "430102" },

{
  "label": "天心区",
  "value": "430103" },

{
  "label": "岳麓区",
  "value": "430104" },

{
  "label": "开福区",
  "value": "430105" },

{
  "label": "雨花区",
  "value": "430111" },

{
  "label": "望城区",
  "value": "430112" },

{
  "label": "长沙县",
  "value": "430121" },

{
  "label": "浏阳市",
  "value": "430181" },

{
  "label": "宁乡市",
  "value": "430182" }],


[{
  "label": "荷塘区",
  "value": "430202" },

{
  "label": "芦淞区",
  "value": "430203" },

{
  "label": "石峰区",
  "value": "430204" },

{
  "label": "天元区",
  "value": "430211" },

{
  "label": "株洲县",
  "value": "430221" },

{
  "label": "攸县",
  "value": "430223" },

{
  "label": "茶陵县",
  "value": "430224" },

{
  "label": "炎陵县",
  "value": "430225" },

{
  "label": "云龙示范区",
  "value": "430271" },

{
  "label": "醴陵市",
  "value": "430281" }],


[{
  "label": "雨湖区",
  "value": "430302" },

{
  "label": "岳塘区",
  "value": "430304" },

{
  "label": "湘潭县",
  "value": "430321" },

{
  "label": "湖南湘潭高新技术产业园区",
  "value": "430371" },

{
  "label": "湘潭昭山示范区",
  "value": "430372" },

{
  "label": "湘潭九华示范区",
  "value": "430373" },

{
  "label": "湘乡市",
  "value": "430381" },

{
  "label": "韶山市",
  "value": "430382" }],


[{
  "label": "珠晖区",
  "value": "430405" },

{
  "label": "雁峰区",
  "value": "430406" },

{
  "label": "石鼓区",
  "value": "430407" },

{
  "label": "蒸湘区",
  "value": "430408" },

{
  "label": "南岳区",
  "value": "430412" },

{
  "label": "衡阳县",
  "value": "430421" },

{
  "label": "衡南县",
  "value": "430422" },

{
  "label": "衡山县",
  "value": "430423" },

{
  "label": "衡东县",
  "value": "430424" },

{
  "label": "祁东县",
  "value": "430426" },

{
  "label": "衡阳综合保税区",
  "value": "430471" },

{
  "label": "湖南衡阳高新技术产业园区",
  "value": "430472" },

{
  "label": "湖南衡阳松木经济开发区",
  "value": "430473" },

{
  "label": "耒阳市",
  "value": "430481" },

{
  "label": "常宁市",
  "value": "430482" }],


[{
  "label": "双清区",
  "value": "430502" },

{
  "label": "大祥区",
  "value": "430503" },

{
  "label": "北塔区",
  "value": "430511" },

{
  "label": "邵东县",
  "value": "430521" },

{
  "label": "新邵县",
  "value": "430522" },

{
  "label": "邵阳县",
  "value": "430523" },

{
  "label": "隆回县",
  "value": "430524" },

{
  "label": "洞口县",
  "value": "430525" },

{
  "label": "绥宁县",
  "value": "430527" },

{
  "label": "新宁县",
  "value": "430528" },

{
  "label": "城步苗族自治县",
  "value": "430529" },

{
  "label": "武冈市",
  "value": "430581" }],


[{
  "label": "岳阳楼区",
  "value": "430602" },

{
  "label": "云溪区",
  "value": "430603" },

{
  "label": "君山区",
  "value": "430611" },

{
  "label": "岳阳县",
  "value": "430621" },

{
  "label": "华容县",
  "value": "430623" },

{
  "label": "湘阴县",
  "value": "430624" },

{
  "label": "平江县",
  "value": "430626" },

{
  "label": "岳阳市屈原管理区",
  "value": "430671" },

{
  "label": "汨罗市",
  "value": "430681" },

{
  "label": "临湘市",
  "value": "430682" }],


[{
  "label": "武陵区",
  "value": "430702" },

{
  "label": "鼎城区",
  "value": "430703" },

{
  "label": "安乡县",
  "value": "430721" },

{
  "label": "汉寿县",
  "value": "430722" },

{
  "label": "澧县",
  "value": "430723" },

{
  "label": "临澧县",
  "value": "430724" },

{
  "label": "桃源县",
  "value": "430725" },

{
  "label": "石门县",
  "value": "430726" },

{
  "label": "常德市西洞庭管理区",
  "value": "430771" },

{
  "label": "津市市",
  "value": "430781" }],


[{
  "label": "永定区",
  "value": "430802" },

{
  "label": "武陵源区",
  "value": "430811" },

{
  "label": "慈利县",
  "value": "430821" },

{
  "label": "桑植县",
  "value": "430822" }],


[{
  "label": "资阳区",
  "value": "430902" },

{
  "label": "赫山区",
  "value": "430903" },

{
  "label": "南县",
  "value": "430921" },

{
  "label": "桃江县",
  "value": "430922" },

{
  "label": "安化县",
  "value": "430923" },

{
  "label": "益阳市大通湖管理区",
  "value": "430971" },

{
  "label": "湖南益阳高新技术产业园区",
  "value": "430972" },

{
  "label": "沅江市",
  "value": "430981" }],


[{
  "label": "北湖区",
  "value": "431002" },

{
  "label": "苏仙区",
  "value": "431003" },

{
  "label": "桂阳县",
  "value": "431021" },

{
  "label": "宜章县",
  "value": "431022" },

{
  "label": "永兴县",
  "value": "431023" },

{
  "label": "嘉禾县",
  "value": "431024" },

{
  "label": "临武县",
  "value": "431025" },

{
  "label": "汝城县",
  "value": "431026" },

{
  "label": "桂东县",
  "value": "431027" },

{
  "label": "安仁县",
  "value": "431028" },

{
  "label": "资兴市",
  "value": "431081" }],


[{
  "label": "零陵区",
  "value": "431102" },

{
  "label": "冷水滩区",
  "value": "431103" },

{
  "label": "祁阳县",
  "value": "431121" },

{
  "label": "东安县",
  "value": "431122" },

{
  "label": "双牌县",
  "value": "431123" },

{
  "label": "道县",
  "value": "431124" },

{
  "label": "江永县",
  "value": "431125" },

{
  "label": "宁远县",
  "value": "431126" },

{
  "label": "蓝山县",
  "value": "431127" },

{
  "label": "新田县",
  "value": "431128" },

{
  "label": "江华瑶族自治县",
  "value": "431129" },

{
  "label": "永州经济技术开发区",
  "value": "431171" },

{
  "label": "永州市金洞管理区",
  "value": "431172" },

{
  "label": "永州市回龙圩管理区",
  "value": "431173" }],


[{
  "label": "鹤城区",
  "value": "431202" },

{
  "label": "中方县",
  "value": "431221" },

{
  "label": "沅陵县",
  "value": "431222" },

{
  "label": "辰溪县",
  "value": "431223" },

{
  "label": "溆浦县",
  "value": "431224" },

{
  "label": "会同县",
  "value": "431225" },

{
  "label": "麻阳苗族自治县",
  "value": "431226" },

{
  "label": "新晃侗族自治县",
  "value": "431227" },

{
  "label": "芷江侗族自治县",
  "value": "431228" },

{
  "label": "靖州苗族侗族自治县",
  "value": "431229" },

{
  "label": "通道侗族自治县",
  "value": "431230" },

{
  "label": "怀化市洪江管理区",
  "value": "431271" },

{
  "label": "洪江市",
  "value": "431281" }],


[{
  "label": "娄星区",
  "value": "431302" },

{
  "label": "双峰县",
  "value": "431321" },

{
  "label": "新化县",
  "value": "431322" },

{
  "label": "冷水江市",
  "value": "431381" },

{
  "label": "涟源市",
  "value": "431382" }],


[{
  "label": "吉首市",
  "value": "433101" },

{
  "label": "泸溪县",
  "value": "433122" },

{
  "label": "凤凰县",
  "value": "433123" },

{
  "label": "花垣县",
  "value": "433124" },

{
  "label": "保靖县",
  "value": "433125" },

{
  "label": "古丈县",
  "value": "433126" },

{
  "label": "永顺县",
  "value": "433127" },

{
  "label": "龙山县",
  "value": "433130" },

{
  "label": "湖南吉首经济开发区",
  "value": "433172" },

{
  "label": "湖南永顺经济开发区",
  "value": "433173" }]],



[
[{
  "label": "荔湾区",
  "value": "440103" },

{
  "label": "越秀区",
  "value": "440104" },

{
  "label": "海珠区",
  "value": "440105" },

{
  "label": "天河区",
  "value": "440106" },

{
  "label": "白云区",
  "value": "440111" },

{
  "label": "黄埔区",
  "value": "440112" },

{
  "label": "番禺区",
  "value": "440113" },

{
  "label": "花都区",
  "value": "440114" },

{
  "label": "南沙区",
  "value": "440115" },

{
  "label": "从化区",
  "value": "440117" },

{
  "label": "增城区",
  "value": "440118" }],


[{
  "label": "武江区",
  "value": "440203" },

{
  "label": "浈江区",
  "value": "440204" },

{
  "label": "曲江区",
  "value": "440205" },

{
  "label": "始兴县",
  "value": "440222" },

{
  "label": "仁化县",
  "value": "440224" },

{
  "label": "翁源县",
  "value": "440229" },

{
  "label": "乳源瑶族自治县",
  "value": "440232" },

{
  "label": "新丰县",
  "value": "440233" },

{
  "label": "乐昌市",
  "value": "440281" },

{
  "label": "南雄市",
  "value": "440282" }],


[{
  "label": "罗湖区",
  "value": "440303" },

{
  "label": "福田区",
  "value": "440304" },

{
  "label": "南山区",
  "value": "440305" },

{
  "label": "宝安区",
  "value": "440306" },

{
  "label": "龙岗区",
  "value": "440307" },

{
  "label": "盐田区",
  "value": "440308" },

{
  "label": "龙华区",
  "value": "440309" },

{
  "label": "坪山区",
  "value": "440310" }],


[{
  "label": "香洲区",
  "value": "440402" },

{
  "label": "斗门区",
  "value": "440403" },

{
  "label": "金湾区",
  "value": "440404" }],


[{
  "label": "龙湖区",
  "value": "440507" },

{
  "label": "金平区",
  "value": "440511" },

{
  "label": "濠江区",
  "value": "440512" },

{
  "label": "潮阳区",
  "value": "440513" },

{
  "label": "潮南区",
  "value": "440514" },

{
  "label": "澄海区",
  "value": "440515" },

{
  "label": "南澳县",
  "value": "440523" }],


[{
  "label": "禅城区",
  "value": "440604" },

{
  "label": "南海区",
  "value": "440605" },

{
  "label": "顺德区",
  "value": "440606" },

{
  "label": "三水区",
  "value": "440607" },

{
  "label": "高明区",
  "value": "440608" }],


[{
  "label": "蓬江区",
  "value": "440703" },

{
  "label": "江海区",
  "value": "440704" },

{
  "label": "新会区",
  "value": "440705" },

{
  "label": "台山市",
  "value": "440781" },

{
  "label": "开平市",
  "value": "440783" },

{
  "label": "鹤山市",
  "value": "440784" },

{
  "label": "恩平市",
  "value": "440785" }],


[{
  "label": "赤坎区",
  "value": "440802" },

{
  "label": "霞山区",
  "value": "440803" },

{
  "label": "坡头区",
  "value": "440804" },

{
  "label": "麻章区",
  "value": "440811" },

{
  "label": "遂溪县",
  "value": "440823" },

{
  "label": "徐闻县",
  "value": "440825" },

{
  "label": "廉江市",
  "value": "440881" },

{
  "label": "雷州市",
  "value": "440882" },

{
  "label": "吴川市",
  "value": "440883" }],


[{
  "label": "茂南区",
  "value": "440902" },

{
  "label": "电白区",
  "value": "440904" },

{
  "label": "高州市",
  "value": "440981" },

{
  "label": "化州市",
  "value": "440982" },

{
  "label": "信宜市",
  "value": "440983" }],


[{
  "label": "端州区",
  "value": "441202" },

{
  "label": "鼎湖区",
  "value": "441203" },

{
  "label": "高要区",
  "value": "441204" },

{
  "label": "广宁县",
  "value": "441223" },

{
  "label": "怀集县",
  "value": "441224" },

{
  "label": "封开县",
  "value": "441225" },

{
  "label": "德庆县",
  "value": "441226" },

{
  "label": "四会市",
  "value": "441284" }],


[{
  "label": "惠城区",
  "value": "441302" },

{
  "label": "惠阳区",
  "value": "441303" },

{
  "label": "博罗县",
  "value": "441322" },

{
  "label": "惠东县",
  "value": "441323" },

{
  "label": "龙门县",
  "value": "441324" }],


[{
  "label": "梅江区",
  "value": "441402" },

{
  "label": "梅县区",
  "value": "441403" },

{
  "label": "大埔县",
  "value": "441422" },

{
  "label": "丰顺县",
  "value": "441423" },

{
  "label": "五华县",
  "value": "441424" },

{
  "label": "平远县",
  "value": "441426" },

{
  "label": "蕉岭县",
  "value": "441427" },

{
  "label": "兴宁市",
  "value": "441481" }],


[{
  "label": "城区",
  "value": "441502" },

{
  "label": "海丰县",
  "value": "441521" },

{
  "label": "陆河县",
  "value": "441523" },

{
  "label": "陆丰市",
  "value": "441581" }],


[{
  "label": "源城区",
  "value": "441602" },

{
  "label": "紫金县",
  "value": "441621" },

{
  "label": "龙川县",
  "value": "441622" },

{
  "label": "连平县",
  "value": "441623" },

{
  "label": "和平县",
  "value": "441624" },

{
  "label": "东源县",
  "value": "441625" }],


[{
  "label": "江城区",
  "value": "441702" },

{
  "label": "阳东区",
  "value": "441704" },

{
  "label": "阳西县",
  "value": "441721" },

{
  "label": "阳春市",
  "value": "441781" }],


[{
  "label": "清城区",
  "value": "441802" },

{
  "label": "清新区",
  "value": "441803" },

{
  "label": "佛冈县",
  "value": "441821" },

{
  "label": "阳山县",
  "value": "441823" },

{
  "label": "连山壮族瑶族自治县",
  "value": "441825" },

{
  "label": "连南瑶族自治县",
  "value": "441826" },

{
  "label": "英德市",
  "value": "441881" },

{
  "label": "连州市",
  "value": "441882" }],


[{
  "label": "东莞市",
  "value": "441900" }],

[{
  "label": "中山市",
  "value": "442000" }],

[{
  "label": "湘桥区",
  "value": "445102" },

{
  "label": "潮安区",
  "value": "445103" },

{
  "label": "饶平县",
  "value": "445122" }],


[{
  "label": "榕城区",
  "value": "445202" },

{
  "label": "揭东区",
  "value": "445203" },

{
  "label": "揭西县",
  "value": "445222" },

{
  "label": "惠来县",
  "value": "445224" },

{
  "label": "普宁市",
  "value": "445281" }],


[{
  "label": "云城区",
  "value": "445302" },

{
  "label": "云安区",
  "value": "445303" },

{
  "label": "新兴县",
  "value": "445321" },

{
  "label": "郁南县",
  "value": "445322" },

{
  "label": "罗定市",
  "value": "445381" }]],



[
[{
  "label": "兴宁区",
  "value": "450102" },

{
  "label": "青秀区",
  "value": "450103" },

{
  "label": "江南区",
  "value": "450105" },

{
  "label": "西乡塘区",
  "value": "450107" },

{
  "label": "良庆区",
  "value": "450108" },

{
  "label": "邕宁区",
  "value": "450109" },

{
  "label": "武鸣区",
  "value": "450110" },

{
  "label": "隆安县",
  "value": "450123" },

{
  "label": "马山县",
  "value": "450124" },

{
  "label": "上林县",
  "value": "450125" },

{
  "label": "宾阳县",
  "value": "450126" },

{
  "label": "横县",
  "value": "450127" }],


[{
  "label": "城中区",
  "value": "450202" },

{
  "label": "鱼峰区",
  "value": "450203" },

{
  "label": "柳南区",
  "value": "450204" },

{
  "label": "柳北区",
  "value": "450205" },

{
  "label": "柳江区",
  "value": "450206" },

{
  "label": "柳城县",
  "value": "450222" },

{
  "label": "鹿寨县",
  "value": "450223" },

{
  "label": "融安县",
  "value": "450224" },

{
  "label": "融水苗族自治县",
  "value": "450225" },

{
  "label": "三江侗族自治县",
  "value": "450226" }],


[{
  "label": "秀峰区",
  "value": "450302" },

{
  "label": "叠彩区",
  "value": "450303" },

{
  "label": "象山区",
  "value": "450304" },

{
  "label": "七星区",
  "value": "450305" },

{
  "label": "雁山区",
  "value": "450311" },

{
  "label": "临桂区",
  "value": "450312" },

{
  "label": "阳朔县",
  "value": "450321" },

{
  "label": "灵川县",
  "value": "450323" },

{
  "label": "全州县",
  "value": "450324" },

{
  "label": "兴安县",
  "value": "450325" },

{
  "label": "永福县",
  "value": "450326" },

{
  "label": "灌阳县",
  "value": "450327" },

{
  "label": "龙胜各族自治县",
  "value": "450328" },

{
  "label": "资源县",
  "value": "450329" },

{
  "label": "平乐县",
  "value": "450330" },

{
  "label": "荔浦县",
  "value": "450331" },

{
  "label": "恭城瑶族自治县",
  "value": "450332" }],


[{
  "label": "万秀区",
  "value": "450403" },

{
  "label": "长洲区",
  "value": "450405" },

{
  "label": "龙圩区",
  "value": "450406" },

{
  "label": "苍梧县",
  "value": "450421" },

{
  "label": "藤县",
  "value": "450422" },

{
  "label": "蒙山县",
  "value": "450423" },

{
  "label": "岑溪市",
  "value": "450481" }],


[{
  "label": "海城区",
  "value": "450502" },

{
  "label": "银海区",
  "value": "450503" },

{
  "label": "铁山港区",
  "value": "450512" },

{
  "label": "合浦县",
  "value": "450521" }],


[{
  "label": "港口区",
  "value": "450602" },

{
  "label": "防城区",
  "value": "450603" },

{
  "label": "上思县",
  "value": "450621" },

{
  "label": "东兴市",
  "value": "450681" }],


[{
  "label": "钦南区",
  "value": "450702" },

{
  "label": "钦北区",
  "value": "450703" },

{
  "label": "灵山县",
  "value": "450721" },

{
  "label": "浦北县",
  "value": "450722" }],


[{
  "label": "港北区",
  "value": "450802" },

{
  "label": "港南区",
  "value": "450803" },

{
  "label": "覃塘区",
  "value": "450804" },

{
  "label": "平南县",
  "value": "450821" },

{
  "label": "桂平市",
  "value": "450881" }],


[{
  "label": "玉州区",
  "value": "450902" },

{
  "label": "福绵区",
  "value": "450903" },

{
  "label": "容县",
  "value": "450921" },

{
  "label": "陆川县",
  "value": "450922" },

{
  "label": "博白县",
  "value": "450923" },

{
  "label": "兴业县",
  "value": "450924" },

{
  "label": "北流市",
  "value": "450981" }],


[{
  "label": "右江区",
  "value": "451002" },

{
  "label": "田阳县",
  "value": "451021" },

{
  "label": "田东县",
  "value": "451022" },

{
  "label": "平果县",
  "value": "451023" },

{
  "label": "德保县",
  "value": "451024" },

{
  "label": "那坡县",
  "value": "451026" },

{
  "label": "凌云县",
  "value": "451027" },

{
  "label": "乐业县",
  "value": "451028" },

{
  "label": "田林县",
  "value": "451029" },

{
  "label": "西林县",
  "value": "451030" },

{
  "label": "隆林各族自治县",
  "value": "451031" },

{
  "label": "靖西市",
  "value": "451081" }],


[{
  "label": "八步区",
  "value": "451102" },

{
  "label": "平桂区",
  "value": "451103" },

{
  "label": "昭平县",
  "value": "451121" },

{
  "label": "钟山县",
  "value": "451122" },

{
  "label": "富川瑶族自治县",
  "value": "451123" }],


[{
  "label": "金城江区",
  "value": "451202" },

{
  "label": "宜州区",
  "value": "451203" },

{
  "label": "南丹县",
  "value": "451221" },

{
  "label": "天峨县",
  "value": "451222" },

{
  "label": "凤山县",
  "value": "451223" },

{
  "label": "东兰县",
  "value": "451224" },

{
  "label": "罗城仫佬族自治县",
  "value": "451225" },

{
  "label": "环江毛南族自治县",
  "value": "451226" },

{
  "label": "巴马瑶族自治县",
  "value": "451227" },

{
  "label": "都安瑶族自治县",
  "value": "451228" },

{
  "label": "大化瑶族自治县",
  "value": "451229" }],


[{
  "label": "兴宾区",
  "value": "451302" },

{
  "label": "忻城县",
  "value": "451321" },

{
  "label": "象州县",
  "value": "451322" },

{
  "label": "武宣县",
  "value": "451323" },

{
  "label": "金秀瑶族自治县",
  "value": "451324" },

{
  "label": "合山市",
  "value": "451381" }],


[{
  "label": "江州区",
  "value": "451402" },

{
  "label": "扶绥县",
  "value": "451421" },

{
  "label": "宁明县",
  "value": "451422" },

{
  "label": "龙州县",
  "value": "451423" },

{
  "label": "大新县",
  "value": "451424" },

{
  "label": "天等县",
  "value": "451425" },

{
  "label": "凭祥市",
  "value": "451481" }]],



[
[{
  "label": "秀英区",
  "value": "460105" },

{
  "label": "龙华区",
  "value": "460106" },

{
  "label": "琼山区",
  "value": "460107" },

{
  "label": "美兰区",
  "value": "460108" }],


[{
  "label": "海棠区",
  "value": "460202" },

{
  "label": "吉阳区",
  "value": "460203" },

{
  "label": "天涯区",
  "value": "460204" },

{
  "label": "崖州区",
  "value": "460205" }],


[{
  "label": "西沙群岛",
  "value": "460321" },

{
  "label": "南沙群岛",
  "value": "460322" },

{
  "label": "中沙群岛的岛礁及其海域",
  "value": "460323" }],


[{
  "label": "儋州市",
  "value": "460400" }],

[{
  "label": "五指山市",
  "value": "469001" },

{
  "label": "琼海市",
  "value": "469002" },

{
  "label": "文昌市",
  "value": "469005" },

{
  "label": "万宁市",
  "value": "469006" },

{
  "label": "东方市",
  "value": "469007" },

{
  "label": "定安县",
  "value": "469021" },

{
  "label": "屯昌县",
  "value": "469022" },

{
  "label": "澄迈县",
  "value": "469023" },

{
  "label": "临高县",
  "value": "469024" },

{
  "label": "白沙黎族自治县",
  "value": "469025" },

{
  "label": "昌江黎族自治县",
  "value": "469026" },

{
  "label": "乐东黎族自治县",
  "value": "469027" },

{
  "label": "陵水黎族自治县",
  "value": "469028" },

{
  "label": "保亭黎族苗族自治县",
  "value": "469029" },

{
  "label": "琼中黎族苗族自治县",
  "value": "469030" }]],



[
[{
  "label": "万州区",
  "value": "500101" },

{
  "label": "涪陵区",
  "value": "500102" },

{
  "label": "渝中区",
  "value": "500103" },

{
  "label": "大渡口区",
  "value": "500104" },

{
  "label": "江北区",
  "value": "500105" },

{
  "label": "沙坪坝区",
  "value": "500106" },

{
  "label": "九龙坡区",
  "value": "500107" },

{
  "label": "南岸区",
  "value": "500108" },

{
  "label": "北碚区",
  "value": "500109" },

{
  "label": "綦江区",
  "value": "500110" },

{
  "label": "大足区",
  "value": "500111" },

{
  "label": "渝北区",
  "value": "500112" },

{
  "label": "巴南区",
  "value": "500113" },

{
  "label": "黔江区",
  "value": "500114" },

{
  "label": "长寿区",
  "value": "500115" },

{
  "label": "江津区",
  "value": "500116" },

{
  "label": "合川区",
  "value": "500117" },

{
  "label": "永川区",
  "value": "500118" },

{
  "label": "南川区",
  "value": "500119" },

{
  "label": "璧山区",
  "value": "500120" },

{
  "label": "铜梁区",
  "value": "500151" },

{
  "label": "潼南区",
  "value": "500152" },

{
  "label": "荣昌区",
  "value": "500153" },

{
  "label": "开州区",
  "value": "500154" },

{
  "label": "梁平区",
  "value": "500155" },

{
  "label": "武隆区",
  "value": "500156" }],


[{
  "label": "城口县",
  "value": "500229" },

{
  "label": "丰都县",
  "value": "500230" },

{
  "label": "垫江县",
  "value": "500231" },

{
  "label": "忠县",
  "value": "500233" },

{
  "label": "云阳县",
  "value": "500235" },

{
  "label": "奉节县",
  "value": "500236" },

{
  "label": "巫山县",
  "value": "500237" },

{
  "label": "巫溪县",
  "value": "500238" },

{
  "label": "石柱土家族自治县",
  "value": "500240" },

{
  "label": "秀山土家族苗族自治县",
  "value": "500241" },

{
  "label": "酉阳土家族苗族自治县",
  "value": "500242" },

{
  "label": "彭水苗族土家族自治县",
  "value": "500243" }]],



[
[{
  "label": "锦江区",
  "value": "510104" },

{
  "label": "青羊区",
  "value": "510105" },

{
  "label": "金牛区",
  "value": "510106" },

{
  "label": "武侯区",
  "value": "510107" },

{
  "label": "成华区",
  "value": "510108" },

{
  "label": "龙泉驿区",
  "value": "510112" },

{
  "label": "青白江区",
  "value": "510113" },

{
  "label": "新都区",
  "value": "510114" },

{
  "label": "温江区",
  "value": "510115" },

{
  "label": "双流区",
  "value": "510116" },

{
  "label": "郫都区",
  "value": "510117" },

{
  "label": "金堂县",
  "value": "510121" },

{
  "label": "大邑县",
  "value": "510129" },

{
  "label": "蒲江县",
  "value": "510131" },

{
  "label": "新津县",
  "value": "510132" },

{
  "label": "都江堰市",
  "value": "510181" },

{
  "label": "彭州市",
  "value": "510182" },

{
  "label": "邛崃市",
  "value": "510183" },

{
  "label": "崇州市",
  "value": "510184" },

{
  "label": "简阳市",
  "value": "510185" }],


[{
  "label": "自流井区",
  "value": "510302" },

{
  "label": "贡井区",
  "value": "510303" },

{
  "label": "大安区",
  "value": "510304" },

{
  "label": "沿滩区",
  "value": "510311" },

{
  "label": "荣县",
  "value": "510321" },

{
  "label": "富顺县",
  "value": "510322" }],


[{
  "label": "东区",
  "value": "510402" },

{
  "label": "西区",
  "value": "510403" },

{
  "label": "仁和区",
  "value": "510411" },

{
  "label": "米易县",
  "value": "510421" },

{
  "label": "盐边县",
  "value": "510422" }],


[{
  "label": "江阳区",
  "value": "510502" },

{
  "label": "纳溪区",
  "value": "510503" },

{
  "label": "龙马潭区",
  "value": "510504" },

{
  "label": "泸县",
  "value": "510521" },

{
  "label": "合江县",
  "value": "510522" },

{
  "label": "叙永县",
  "value": "510524" },

{
  "label": "古蔺县",
  "value": "510525" }],


[{
  "label": "旌阳区",
  "value": "510603" },

{
  "label": "罗江区",
  "value": "510604" },

{
  "label": "中江县",
  "value": "510623" },

{
  "label": "广汉市",
  "value": "510681" },

{
  "label": "什邡市",
  "value": "510682" },

{
  "label": "绵竹市",
  "value": "510683" }],


[{
  "label": "涪城区",
  "value": "510703" },

{
  "label": "游仙区",
  "value": "510704" },

{
  "label": "安州区",
  "value": "510705" },

{
  "label": "三台县",
  "value": "510722" },

{
  "label": "盐亭县",
  "value": "510723" },

{
  "label": "梓潼县",
  "value": "510725" },

{
  "label": "北川羌族自治县",
  "value": "510726" },

{
  "label": "平武县",
  "value": "510727" },

{
  "label": "江油市",
  "value": "510781" }],


[{
  "label": "利州区",
  "value": "510802" },

{
  "label": "昭化区",
  "value": "510811" },

{
  "label": "朝天区",
  "value": "510812" },

{
  "label": "旺苍县",
  "value": "510821" },

{
  "label": "青川县",
  "value": "510822" },

{
  "label": "剑阁县",
  "value": "510823" },

{
  "label": "苍溪县",
  "value": "510824" }],


[{
  "label": "船山区",
  "value": "510903" },

{
  "label": "安居区",
  "value": "510904" },

{
  "label": "蓬溪县",
  "value": "510921" },

{
  "label": "射洪县",
  "value": "510922" },

{
  "label": "大英县",
  "value": "510923" }],


[{
  "label": "市中区",
  "value": "511002" },

{
  "label": "东兴区",
  "value": "511011" },

{
  "label": "威远县",
  "value": "511024" },

{
  "label": "资中县",
  "value": "511025" },

{
  "label": "内江经济开发区",
  "value": "511071" },

{
  "label": "隆昌市",
  "value": "511083" }],


[{
  "label": "市中区",
  "value": "511102" },

{
  "label": "沙湾区",
  "value": "511111" },

{
  "label": "五通桥区",
  "value": "511112" },

{
  "label": "金口河区",
  "value": "511113" },

{
  "label": "犍为县",
  "value": "511123" },

{
  "label": "井研县",
  "value": "511124" },

{
  "label": "夹江县",
  "value": "511126" },

{
  "label": "沐川县",
  "value": "511129" },

{
  "label": "峨边彝族自治县",
  "value": "511132" },

{
  "label": "马边彝族自治县",
  "value": "511133" },

{
  "label": "峨眉山市",
  "value": "511181" }],


[{
  "label": "顺庆区",
  "value": "511302" },

{
  "label": "高坪区",
  "value": "511303" },

{
  "label": "嘉陵区",
  "value": "511304" },

{
  "label": "南部县",
  "value": "511321" },

{
  "label": "营山县",
  "value": "511322" },

{
  "label": "蓬安县",
  "value": "511323" },

{
  "label": "仪陇县",
  "value": "511324" },

{
  "label": "西充县",
  "value": "511325" },

{
  "label": "阆中市",
  "value": "511381" }],


[{
  "label": "东坡区",
  "value": "511402" },

{
  "label": "彭山区",
  "value": "511403" },

{
  "label": "仁寿县",
  "value": "511421" },

{
  "label": "洪雅县",
  "value": "511423" },

{
  "label": "丹棱县",
  "value": "511424" },

{
  "label": "青神县",
  "value": "511425" }],


[{
  "label": "翠屏区",
  "value": "511502" },

{
  "label": "南溪区",
  "value": "511503" },

{
  "label": "宜宾县",
  "value": "511521" },

{
  "label": "江安县",
  "value": "511523" },

{
  "label": "长宁县",
  "value": "511524" },

{
  "label": "高县",
  "value": "511525" },

{
  "label": "珙县",
  "value": "511526" },

{
  "label": "筠连县",
  "value": "511527" },

{
  "label": "兴文县",
  "value": "511528" },

{
  "label": "屏山县",
  "value": "511529" }],


[{
  "label": "广安区",
  "value": "511602" },

{
  "label": "前锋区",
  "value": "511603" },

{
  "label": "岳池县",
  "value": "511621" },

{
  "label": "武胜县",
  "value": "511622" },

{
  "label": "邻水县",
  "value": "511623" },

{
  "label": "华蓥市",
  "value": "511681" }],


[{
  "label": "通川区",
  "value": "511702" },

{
  "label": "达川区",
  "value": "511703" },

{
  "label": "宣汉县",
  "value": "511722" },

{
  "label": "开江县",
  "value": "511723" },

{
  "label": "大竹县",
  "value": "511724" },

{
  "label": "渠县",
  "value": "511725" },

{
  "label": "达州经济开发区",
  "value": "511771" },

{
  "label": "万源市",
  "value": "511781" }],


[{
  "label": "雨城区",
  "value": "511802" },

{
  "label": "名山区",
  "value": "511803" },

{
  "label": "荥经县",
  "value": "511822" },

{
  "label": "汉源县",
  "value": "511823" },

{
  "label": "石棉县",
  "value": "511824" },

{
  "label": "天全县",
  "value": "511825" },

{
  "label": "芦山县",
  "value": "511826" },

{
  "label": "宝兴县",
  "value": "511827" }],


[{
  "label": "巴州区",
  "value": "511902" },

{
  "label": "恩阳区",
  "value": "511903" },

{
  "label": "通江县",
  "value": "511921" },

{
  "label": "南江县",
  "value": "511922" },

{
  "label": "平昌县",
  "value": "511923" },

{
  "label": "巴中经济开发区",
  "value": "511971" }],


[{
  "label": "雁江区",
  "value": "512002" },

{
  "label": "安岳县",
  "value": "512021" },

{
  "label": "乐至县",
  "value": "512022" }],


[{
  "label": "马尔康市",
  "value": "513201" },

{
  "label": "汶川县",
  "value": "513221" },

{
  "label": "理县",
  "value": "513222" },

{
  "label": "茂县",
  "value": "513223" },

{
  "label": "松潘县",
  "value": "513224" },

{
  "label": "九寨沟县",
  "value": "513225" },

{
  "label": "金川县",
  "value": "513226" },

{
  "label": "小金县",
  "value": "513227" },

{
  "label": "黑水县",
  "value": "513228" },

{
  "label": "壤塘县",
  "value": "513230" },

{
  "label": "阿坝县",
  "value": "513231" },

{
  "label": "若尔盖县",
  "value": "513232" },

{
  "label": "红原县",
  "value": "513233" }],


[{
  "label": "康定市",
  "value": "513301" },

{
  "label": "泸定县",
  "value": "513322" },

{
  "label": "丹巴县",
  "value": "513323" },

{
  "label": "九龙县",
  "value": "513324" },

{
  "label": "雅江县",
  "value": "513325" },

{
  "label": "道孚县",
  "value": "513326" },

{
  "label": "炉霍县",
  "value": "513327" },

{
  "label": "甘孜县",
  "value": "513328" },

{
  "label": "新龙县",
  "value": "513329" },

{
  "label": "德格县",
  "value": "513330" },

{
  "label": "白玉县",
  "value": "513331" },

{
  "label": "石渠县",
  "value": "513332" },

{
  "label": "色达县",
  "value": "513333" },

{
  "label": "理塘县",
  "value": "513334" },

{
  "label": "巴塘县",
  "value": "513335" },

{
  "label": "乡城县",
  "value": "513336" },

{
  "label": "稻城县",
  "value": "513337" },

{
  "label": "得荣县",
  "value": "513338" }],


[{
  "label": "西昌市",
  "value": "513401" },

{
  "label": "木里藏族自治县",
  "value": "513422" },

{
  "label": "盐源县",
  "value": "513423" },

{
  "label": "德昌县",
  "value": "513424" },

{
  "label": "会理县",
  "value": "513425" },

{
  "label": "会东县",
  "value": "513426" },

{
  "label": "宁南县",
  "value": "513427" },

{
  "label": "普格县",
  "value": "513428" },

{
  "label": "布拖县",
  "value": "513429" },

{
  "label": "金阳县",
  "value": "513430" },

{
  "label": "昭觉县",
  "value": "513431" },

{
  "label": "喜德县",
  "value": "513432" },

{
  "label": "冕宁县",
  "value": "513433" },

{
  "label": "越西县",
  "value": "513434" },

{
  "label": "甘洛县",
  "value": "513435" },

{
  "label": "美姑县",
  "value": "513436" },

{
  "label": "雷波县",
  "value": "513437" }]],



[
[{
  "label": "南明区",
  "value": "520102" },

{
  "label": "云岩区",
  "value": "520103" },

{
  "label": "花溪区",
  "value": "520111" },

{
  "label": "乌当区",
  "value": "520112" },

{
  "label": "白云区",
  "value": "520113" },

{
  "label": "观山湖区",
  "value": "520115" },

{
  "label": "开阳县",
  "value": "520121" },

{
  "label": "息烽县",
  "value": "520122" },

{
  "label": "修文县",
  "value": "520123" },

{
  "label": "清镇市",
  "value": "520181" }],


[{
  "label": "钟山区",
  "value": "520201" },

{
  "label": "六枝特区",
  "value": "520203" },

{
  "label": "水城县",
  "value": "520221" },

{
  "label": "盘州市",
  "value": "520281" }],


[{
  "label": "红花岗区",
  "value": "520302" },

{
  "label": "汇川区",
  "value": "520303" },

{
  "label": "播州区",
  "value": "520304" },

{
  "label": "桐梓县",
  "value": "520322" },

{
  "label": "绥阳县",
  "value": "520323" },

{
  "label": "正安县",
  "value": "520324" },

{
  "label": "道真仡佬族苗族自治县",
  "value": "520325" },

{
  "label": "务川仡佬族苗族自治县",
  "value": "520326" },

{
  "label": "凤冈县",
  "value": "520327" },

{
  "label": "湄潭县",
  "value": "520328" },

{
  "label": "余庆县",
  "value": "520329" },

{
  "label": "习水县",
  "value": "520330" },

{
  "label": "赤水市",
  "value": "520381" },

{
  "label": "仁怀市",
  "value": "520382" }],


[{
  "label": "西秀区",
  "value": "520402" },

{
  "label": "平坝区",
  "value": "520403" },

{
  "label": "普定县",
  "value": "520422" },

{
  "label": "镇宁布依族苗族自治县",
  "value": "520423" },

{
  "label": "关岭布依族苗族自治县",
  "value": "520424" },

{
  "label": "紫云苗族布依族自治县",
  "value": "520425" }],


[{
  "label": "七星关区",
  "value": "520502" },

{
  "label": "大方县",
  "value": "520521" },

{
  "label": "黔西县",
  "value": "520522" },

{
  "label": "金沙县",
  "value": "520523" },

{
  "label": "织金县",
  "value": "520524" },

{
  "label": "纳雍县",
  "value": "520525" },

{
  "label": "威宁彝族回族苗族自治县",
  "value": "520526" },

{
  "label": "赫章县",
  "value": "520527" }],


[{
  "label": "碧江区",
  "value": "520602" },

{
  "label": "万山区",
  "value": "520603" },

{
  "label": "江口县",
  "value": "520621" },

{
  "label": "玉屏侗族自治县",
  "value": "520622" },

{
  "label": "石阡县",
  "value": "520623" },

{
  "label": "思南县",
  "value": "520624" },

{
  "label": "印江土家族苗族自治县",
  "value": "520625" },

{
  "label": "德江县",
  "value": "520626" },

{
  "label": "沿河土家族自治县",
  "value": "520627" },

{
  "label": "松桃苗族自治县",
  "value": "520628" }],


[{
  "label": "兴义市",
  "value": "522301" },

{
  "label": "兴仁县",
  "value": "522322" },

{
  "label": "普安县",
  "value": "522323" },

{
  "label": "晴隆县",
  "value": "522324" },

{
  "label": "贞丰县",
  "value": "522325" },

{
  "label": "望谟县",
  "value": "522326" },

{
  "label": "册亨县",
  "value": "522327" },

{
  "label": "安龙县",
  "value": "522328" }],


[{
  "label": "凯里市",
  "value": "522601" },

{
  "label": "黄平县",
  "value": "522622" },

{
  "label": "施秉县",
  "value": "522623" },

{
  "label": "三穗县",
  "value": "522624" },

{
  "label": "镇远县",
  "value": "522625" },

{
  "label": "岑巩县",
  "value": "522626" },

{
  "label": "天柱县",
  "value": "522627" },

{
  "label": "锦屏县",
  "value": "522628" },

{
  "label": "剑河县",
  "value": "522629" },

{
  "label": "台江县",
  "value": "522630" },

{
  "label": "黎平县",
  "value": "522631" },

{
  "label": "榕江县",
  "value": "522632" },

{
  "label": "从江县",
  "value": "522633" },

{
  "label": "雷山县",
  "value": "522634" },

{
  "label": "麻江县",
  "value": "522635" },

{
  "label": "丹寨县",
  "value": "522636" }],


[{
  "label": "都匀市",
  "value": "522701" },

{
  "label": "福泉市",
  "value": "522702" },

{
  "label": "荔波县",
  "value": "522722" },

{
  "label": "贵定县",
  "value": "522723" },

{
  "label": "瓮安县",
  "value": "522725" },

{
  "label": "独山县",
  "value": "522726" },

{
  "label": "平塘县",
  "value": "522727" },

{
  "label": "罗甸县",
  "value": "522728" },

{
  "label": "长顺县",
  "value": "522729" },

{
  "label": "龙里县",
  "value": "522730" },

{
  "label": "惠水县",
  "value": "522731" },

{
  "label": "三都水族自治县",
  "value": "522732" }]],



[
[{
  "label": "五华区",
  "value": "530102" },

{
  "label": "盘龙区",
  "value": "530103" },

{
  "label": "官渡区",
  "value": "530111" },

{
  "label": "西山区",
  "value": "530112" },

{
  "label": "东川区",
  "value": "530113" },

{
  "label": "呈贡区",
  "value": "530114" },

{
  "label": "晋宁区",
  "value": "530115" },

{
  "label": "富民县",
  "value": "530124" },

{
  "label": "宜良县",
  "value": "530125" },

{
  "label": "石林彝族自治县",
  "value": "530126" },

{
  "label": "嵩明县",
  "value": "530127" },

{
  "label": "禄劝彝族苗族自治县",
  "value": "530128" },

{
  "label": "寻甸回族彝族自治县",
  "value": "530129" },

{
  "label": "安宁市",
  "value": "530181" }],


[{
  "label": "麒麟区",
  "value": "530302" },

{
  "label": "沾益区",
  "value": "530303" },

{
  "label": "马龙县",
  "value": "530321" },

{
  "label": "陆良县",
  "value": "530322" },

{
  "label": "师宗县",
  "value": "530323" },

{
  "label": "罗平县",
  "value": "530324" },

{
  "label": "富源县",
  "value": "530325" },

{
  "label": "会泽县",
  "value": "530326" },

{
  "label": "宣威市",
  "value": "530381" }],


[{
  "label": "红塔区",
  "value": "530402" },

{
  "label": "江川区",
  "value": "530403" },

{
  "label": "澄江县",
  "value": "530422" },

{
  "label": "通海县",
  "value": "530423" },

{
  "label": "华宁县",
  "value": "530424" },

{
  "label": "易门县",
  "value": "530425" },

{
  "label": "峨山彝族自治县",
  "value": "530426" },

{
  "label": "新平彝族傣族自治县",
  "value": "530427" },

{
  "label": "元江哈尼族彝族傣族自治县",
  "value": "530428" }],


[{
  "label": "隆阳区",
  "value": "530502" },

{
  "label": "施甸县",
  "value": "530521" },

{
  "label": "龙陵县",
  "value": "530523" },

{
  "label": "昌宁县",
  "value": "530524" },

{
  "label": "腾冲市",
  "value": "530581" }],


[{
  "label": "昭阳区",
  "value": "530602" },

{
  "label": "鲁甸县",
  "value": "530621" },

{
  "label": "巧家县",
  "value": "530622" },

{
  "label": "盐津县",
  "value": "530623" },

{
  "label": "大关县",
  "value": "530624" },

{
  "label": "永善县",
  "value": "530625" },

{
  "label": "绥江县",
  "value": "530626" },

{
  "label": "镇雄县",
  "value": "530627" },

{
  "label": "彝良县",
  "value": "530628" },

{
  "label": "威信县",
  "value": "530629" },

{
  "label": "水富县",
  "value": "530630" }],


[{
  "label": "古城区",
  "value": "530702" },

{
  "label": "玉龙纳西族自治县",
  "value": "530721" },

{
  "label": "永胜县",
  "value": "530722" },

{
  "label": "华坪县",
  "value": "530723" },

{
  "label": "宁蒗彝族自治县",
  "value": "530724" }],


[{
  "label": "思茅区",
  "value": "530802" },

{
  "label": "宁洱哈尼族彝族自治县",
  "value": "530821" },

{
  "label": "墨江哈尼族自治县",
  "value": "530822" },

{
  "label": "景东彝族自治县",
  "value": "530823" },

{
  "label": "景谷傣族彝族自治县",
  "value": "530824" },

{
  "label": "镇沅彝族哈尼族拉祜族自治县",
  "value": "530825" },

{
  "label": "江城哈尼族彝族自治县",
  "value": "530826" },

{
  "label": "孟连傣族拉祜族佤族自治县",
  "value": "530827" },

{
  "label": "澜沧拉祜族自治县",
  "value": "530828" },

{
  "label": "西盟佤族自治县",
  "value": "530829" }],


[{
  "label": "临翔区",
  "value": "530902" },

{
  "label": "凤庆县",
  "value": "530921" },

{
  "label": "云县",
  "value": "530922" },

{
  "label": "永德县",
  "value": "530923" },

{
  "label": "镇康县",
  "value": "530924" },

{
  "label": "双江拉祜族佤族布朗族傣族自治县",
  "value": "530925" },

{
  "label": "耿马傣族佤族自治县",
  "value": "530926" },

{
  "label": "沧源佤族自治县",
  "value": "530927" }],


[{
  "label": "楚雄市",
  "value": "532301" },

{
  "label": "双柏县",
  "value": "532322" },

{
  "label": "牟定县",
  "value": "532323" },

{
  "label": "南华县",
  "value": "532324" },

{
  "label": "姚安县",
  "value": "532325" },

{
  "label": "大姚县",
  "value": "532326" },

{
  "label": "永仁县",
  "value": "532327" },

{
  "label": "元谋县",
  "value": "532328" },

{
  "label": "武定县",
  "value": "532329" },

{
  "label": "禄丰县",
  "value": "532331" }],


[{
  "label": "个旧市",
  "value": "532501" },

{
  "label": "开远市",
  "value": "532502" },

{
  "label": "蒙自市",
  "value": "532503" },

{
  "label": "弥勒市",
  "value": "532504" },

{
  "label": "屏边苗族自治县",
  "value": "532523" },

{
  "label": "建水县",
  "value": "532524" },

{
  "label": "石屏县",
  "value": "532525" },

{
  "label": "泸西县",
  "value": "532527" },

{
  "label": "元阳县",
  "value": "532528" },

{
  "label": "红河县",
  "value": "532529" },

{
  "label": "金平苗族瑶族傣族自治县",
  "value": "532530" },

{
  "label": "绿春县",
  "value": "532531" },

{
  "label": "河口瑶族自治县",
  "value": "532532" }],


[{
  "label": "文山市",
  "value": "532601" },

{
  "label": "砚山县",
  "value": "532622" },

{
  "label": "西畴县",
  "value": "532623" },

{
  "label": "麻栗坡县",
  "value": "532624" },

{
  "label": "马关县",
  "value": "532625" },

{
  "label": "丘北县",
  "value": "532626" },

{
  "label": "广南县",
  "value": "532627" },

{
  "label": "富宁县",
  "value": "532628" }],


[{
  "label": "景洪市",
  "value": "532801" },

{
  "label": "勐海县",
  "value": "532822" },

{
  "label": "勐腊县",
  "value": "532823" }],


[{
  "label": "大理市",
  "value": "532901" },

{
  "label": "漾濞彝族自治县",
  "value": "532922" },

{
  "label": "祥云县",
  "value": "532923" },

{
  "label": "宾川县",
  "value": "532924" },

{
  "label": "弥渡县",
  "value": "532925" },

{
  "label": "南涧彝族自治县",
  "value": "532926" },

{
  "label": "巍山彝族回族自治县",
  "value": "532927" },

{
  "label": "永平县",
  "value": "532928" },

{
  "label": "云龙县",
  "value": "532929" },

{
  "label": "洱源县",
  "value": "532930" },

{
  "label": "剑川县",
  "value": "532931" },

{
  "label": "鹤庆县",
  "value": "532932" }],


[{
  "label": "瑞丽市",
  "value": "533102" },

{
  "label": "芒市",
  "value": "533103" },

{
  "label": "梁河县",
  "value": "533122" },

{
  "label": "盈江县",
  "value": "533123" },

{
  "label": "陇川县",
  "value": "533124" }],


[{
  "label": "泸水市",
  "value": "533301" },

{
  "label": "福贡县",
  "value": "533323" },

{
  "label": "贡山独龙族怒族自治县",
  "value": "533324" },

{
  "label": "兰坪白族普米族自治县",
  "value": "533325" }],


[{
  "label": "香格里拉市",
  "value": "533401" },

{
  "label": "德钦县",
  "value": "533422" },

{
  "label": "维西傈僳族自治县",
  "value": "533423" }]],



[
[{
  "label": "城关区",
  "value": "540102" },

{
  "label": "堆龙德庆区",
  "value": "540103" },

{
  "label": "林周县",
  "value": "540121" },

{
  "label": "当雄县",
  "value": "540122" },

{
  "label": "尼木县",
  "value": "540123" },

{
  "label": "曲水县",
  "value": "540124" },

{
  "label": "达孜县",
  "value": "540126" },

{
  "label": "墨竹工卡县",
  "value": "540127" },

{
  "label": "格尔木藏青工业园区",
  "value": "540171" },

{
  "label": "拉萨经济技术开发区",
  "value": "540172" },

{
  "label": "西藏文化旅游创意园区",
  "value": "540173" },

{
  "label": "达孜工业园区",
  "value": "540174" }],


[{
  "label": "桑珠孜区",
  "value": "540202" },

{
  "label": "南木林县",
  "value": "540221" },

{
  "label": "江孜县",
  "value": "540222" },

{
  "label": "定日县",
  "value": "540223" },

{
  "label": "萨迦县",
  "value": "540224" },

{
  "label": "拉孜县",
  "value": "540225" },

{
  "label": "昂仁县",
  "value": "540226" },

{
  "label": "谢通门县",
  "value": "540227" },

{
  "label": "白朗县",
  "value": "540228" },

{
  "label": "仁布县",
  "value": "540229" },

{
  "label": "康马县",
  "value": "540230" },

{
  "label": "定结县",
  "value": "540231" },

{
  "label": "仲巴县",
  "value": "540232" },

{
  "label": "亚东县",
  "value": "540233" },

{
  "label": "吉隆县",
  "value": "540234" },

{
  "label": "聂拉木县",
  "value": "540235" },

{
  "label": "萨嘎县",
  "value": "540236" },

{
  "label": "岗巴县",
  "value": "540237" }],


[{
  "label": "卡若区",
  "value": "540302" },

{
  "label": "江达县",
  "value": "540321" },

{
  "label": "贡觉县",
  "value": "540322" },

{
  "label": "类乌齐县",
  "value": "540323" },

{
  "label": "丁青县",
  "value": "540324" },

{
  "label": "察雅县",
  "value": "540325" },

{
  "label": "八宿县",
  "value": "540326" },

{
  "label": "左贡县",
  "value": "540327" },

{
  "label": "芒康县",
  "value": "540328" },

{
  "label": "洛隆县",
  "value": "540329" },

{
  "label": "边坝县",
  "value": "540330" }],


[{
  "label": "巴宜区",
  "value": "540402" },

{
  "label": "工布江达县",
  "value": "540421" },

{
  "label": "米林县",
  "value": "540422" },

{
  "label": "墨脱县",
  "value": "540423" },

{
  "label": "波密县",
  "value": "540424" },

{
  "label": "察隅县",
  "value": "540425" },

{
  "label": "朗县",
  "value": "540426" }],


[{
  "label": "乃东区",
  "value": "540502" },

{
  "label": "扎囊县",
  "value": "540521" },

{
  "label": "贡嘎县",
  "value": "540522" },

{
  "label": "桑日县",
  "value": "540523" },

{
  "label": "琼结县",
  "value": "540524" },

{
  "label": "曲松县",
  "value": "540525" },

{
  "label": "措美县",
  "value": "540526" },

{
  "label": "洛扎县",
  "value": "540527" },

{
  "label": "加查县",
  "value": "540528" },

{
  "label": "隆子县",
  "value": "540529" },

{
  "label": "错那县",
  "value": "540530" },

{
  "label": "浪卡子县",
  "value": "540531" }],


[{
  "label": "那曲县",
  "value": "542421" },

{
  "label": "嘉黎县",
  "value": "542422" },

{
  "label": "比如县",
  "value": "542423" },

{
  "label": "聂荣县",
  "value": "542424" },

{
  "label": "安多县",
  "value": "542425" },

{
  "label": "申扎县",
  "value": "542426" },

{
  "label": "索县",
  "value": "542427" },

{
  "label": "班戈县",
  "value": "542428" },

{
  "label": "巴青县",
  "value": "542429" },

{
  "label": "尼玛县",
  "value": "542430" },

{
  "label": "双湖县",
  "value": "542431" }],


[{
  "label": "普兰县",
  "value": "542521" },

{
  "label": "札达县",
  "value": "542522" },

{
  "label": "噶尔县",
  "value": "542523" },

{
  "label": "日土县",
  "value": "542524" },

{
  "label": "革吉县",
  "value": "542525" },

{
  "label": "改则县",
  "value": "542526" },

{
  "label": "措勤县",
  "value": "542527" }]],



[
[{
  "label": "新城区",
  "value": "610102" },

{
  "label": "碑林区",
  "value": "610103" },

{
  "label": "莲湖区",
  "value": "610104" },

{
  "label": "灞桥区",
  "value": "610111" },

{
  "label": "未央区",
  "value": "610112" },

{
  "label": "雁塔区",
  "value": "610113" },

{
  "label": "阎良区",
  "value": "610114" },

{
  "label": "临潼区",
  "value": "610115" },

{
  "label": "长安区",
  "value": "610116" },

{
  "label": "高陵区",
  "value": "610117" },

{
  "label": "鄠邑区",
  "value": "610118" },

{
  "label": "蓝田县",
  "value": "610122" },

{
  "label": "周至县",
  "value": "610124" }],


[{
  "label": "王益区",
  "value": "610202" },

{
  "label": "印台区",
  "value": "610203" },

{
  "label": "耀州区",
  "value": "610204" },

{
  "label": "宜君县",
  "value": "610222" }],


[{
  "label": "渭滨区",
  "value": "610302" },

{
  "label": "金台区",
  "value": "610303" },

{
  "label": "陈仓区",
  "value": "610304" },

{
  "label": "凤翔县",
  "value": "610322" },

{
  "label": "岐山县",
  "value": "610323" },

{
  "label": "扶风县",
  "value": "610324" },

{
  "label": "眉县",
  "value": "610326" },

{
  "label": "陇县",
  "value": "610327" },

{
  "label": "千阳县",
  "value": "610328" },

{
  "label": "麟游县",
  "value": "610329" },

{
  "label": "凤县",
  "value": "610330" },

{
  "label": "太白县",
  "value": "610331" }],


[{
  "label": "秦都区",
  "value": "610402" },

{
  "label": "杨陵区",
  "value": "610403" },

{
  "label": "渭城区",
  "value": "610404" },

{
  "label": "三原县",
  "value": "610422" },

{
  "label": "泾阳县",
  "value": "610423" },

{
  "label": "乾县",
  "value": "610424" },

{
  "label": "礼泉县",
  "value": "610425" },

{
  "label": "永寿县",
  "value": "610426" },

{
  "label": "彬县",
  "value": "610427" },

{
  "label": "长武县",
  "value": "610428" },

{
  "label": "旬邑县",
  "value": "610429" },

{
  "label": "淳化县",
  "value": "610430" },

{
  "label": "武功县",
  "value": "610431" },

{
  "label": "兴平市",
  "value": "610481" }],


[{
  "label": "临渭区",
  "value": "610502" },

{
  "label": "华州区",
  "value": "610503" },

{
  "label": "潼关县",
  "value": "610522" },

{
  "label": "大荔县",
  "value": "610523" },

{
  "label": "合阳县",
  "value": "610524" },

{
  "label": "澄城县",
  "value": "610525" },

{
  "label": "蒲城县",
  "value": "610526" },

{
  "label": "白水县",
  "value": "610527" },

{
  "label": "富平县",
  "value": "610528" },

{
  "label": "韩城市",
  "value": "610581" },

{
  "label": "华阴市",
  "value": "610582" }],


[{
  "label": "宝塔区",
  "value": "610602" },

{
  "label": "安塞区",
  "value": "610603" },

{
  "label": "延长县",
  "value": "610621" },

{
  "label": "延川县",
  "value": "610622" },

{
  "label": "子长县",
  "value": "610623" },

{
  "label": "志丹县",
  "value": "610625" },

{
  "label": "吴起县",
  "value": "610626" },

{
  "label": "甘泉县",
  "value": "610627" },

{
  "label": "富县",
  "value": "610628" },

{
  "label": "洛川县",
  "value": "610629" },

{
  "label": "宜川县",
  "value": "610630" },

{
  "label": "黄龙县",
  "value": "610631" },

{
  "label": "黄陵县",
  "value": "610632" }],


[{
  "label": "汉台区",
  "value": "610702" },

{
  "label": "南郑区",
  "value": "610703" },

{
  "label": "城固县",
  "value": "610722" },

{
  "label": "洋县",
  "value": "610723" },

{
  "label": "西乡县",
  "value": "610724" },

{
  "label": "勉县",
  "value": "610725" },

{
  "label": "宁强县",
  "value": "610726" },

{
  "label": "略阳县",
  "value": "610727" },

{
  "label": "镇巴县",
  "value": "610728" },

{
  "label": "留坝县",
  "value": "610729" },

{
  "label": "佛坪县",
  "value": "610730" }],


[{
  "label": "榆阳区",
  "value": "610802" },

{
  "label": "横山区",
  "value": "610803" },

{
  "label": "府谷县",
  "value": "610822" },

{
  "label": "靖边县",
  "value": "610824" },

{
  "label": "定边县",
  "value": "610825" },

{
  "label": "绥德县",
  "value": "610826" },

{
  "label": "米脂县",
  "value": "610827" },

{
  "label": "佳县",
  "value": "610828" },

{
  "label": "吴堡县",
  "value": "610829" },

{
  "label": "清涧县",
  "value": "610830" },

{
  "label": "子洲县",
  "value": "610831" },

{
  "label": "神木市",
  "value": "610881" }],


[{
  "label": "汉滨区",
  "value": "610902" },

{
  "label": "汉阴县",
  "value": "610921" },

{
  "label": "石泉县",
  "value": "610922" },

{
  "label": "宁陕县",
  "value": "610923" },

{
  "label": "紫阳县",
  "value": "610924" },

{
  "label": "岚皋县",
  "value": "610925" },

{
  "label": "平利县",
  "value": "610926" },

{
  "label": "镇坪县",
  "value": "610927" },

{
  "label": "旬阳县",
  "value": "610928" },

{
  "label": "白河县",
  "value": "610929" }],


[{
  "label": "商州区",
  "value": "611002" },

{
  "label": "洛南县",
  "value": "611021" },

{
  "label": "丹凤县",
  "value": "611022" },

{
  "label": "商南县",
  "value": "611023" },

{
  "label": "山阳县",
  "value": "611024" },

{
  "label": "镇安县",
  "value": "611025" },

{
  "label": "柞水县",
  "value": "611026" }]],



[
[{
  "label": "城关区",
  "value": "620102" },

{
  "label": "七里河区",
  "value": "620103" },

{
  "label": "西固区",
  "value": "620104" },

{
  "label": "安宁区",
  "value": "620105" },

{
  "label": "红古区",
  "value": "620111" },

{
  "label": "永登县",
  "value": "620121" },

{
  "label": "皋兰县",
  "value": "620122" },

{
  "label": "榆中县",
  "value": "620123" },

{
  "label": "兰州新区",
  "value": "620171" }],


[{
  "label": "嘉峪关市",
  "value": "620201" }],

[{
  "label": "金川区",
  "value": "620302" },

{
  "label": "永昌县",
  "value": "620321" }],


[{
  "label": "白银区",
  "value": "620402" },

{
  "label": "平川区",
  "value": "620403" },

{
  "label": "靖远县",
  "value": "620421" },

{
  "label": "会宁县",
  "value": "620422" },

{
  "label": "景泰县",
  "value": "620423" }],


[{
  "label": "秦州区",
  "value": "620502" },

{
  "label": "麦积区",
  "value": "620503" },

{
  "label": "清水县",
  "value": "620521" },

{
  "label": "秦安县",
  "value": "620522" },

{
  "label": "甘谷县",
  "value": "620523" },

{
  "label": "武山县",
  "value": "620524" },

{
  "label": "张家川回族自治县",
  "value": "620525" }],


[{
  "label": "凉州区",
  "value": "620602" },

{
  "label": "民勤县",
  "value": "620621" },

{
  "label": "古浪县",
  "value": "620622" },

{
  "label": "天祝藏族自治县",
  "value": "620623" }],


[{
  "label": "甘州区",
  "value": "620702" },

{
  "label": "肃南裕固族自治县",
  "value": "620721" },

{
  "label": "民乐县",
  "value": "620722" },

{
  "label": "临泽县",
  "value": "620723" },

{
  "label": "高台县",
  "value": "620724" },

{
  "label": "山丹县",
  "value": "620725" }],


[{
  "label": "崆峒区",
  "value": "620802" },

{
  "label": "泾川县",
  "value": "620821" },

{
  "label": "灵台县",
  "value": "620822" },

{
  "label": "崇信县",
  "value": "620823" },

{
  "label": "华亭县",
  "value": "620824" },

{
  "label": "庄浪县",
  "value": "620825" },

{
  "label": "静宁县",
  "value": "620826" },

{
  "label": "平凉工业园区",
  "value": "620871" }],


[{
  "label": "肃州区",
  "value": "620902" },

{
  "label": "金塔县",
  "value": "620921" },

{
  "label": "瓜州县",
  "value": "620922" },

{
  "label": "肃北蒙古族自治县",
  "value": "620923" },

{
  "label": "阿克塞哈萨克族自治县",
  "value": "620924" },

{
  "label": "玉门市",
  "value": "620981" },

{
  "label": "敦煌市",
  "value": "620982" }],


[{
  "label": "西峰区",
  "value": "621002" },

{
  "label": "庆城县",
  "value": "621021" },

{
  "label": "环县",
  "value": "621022" },

{
  "label": "华池县",
  "value": "621023" },

{
  "label": "合水县",
  "value": "621024" },

{
  "label": "正宁县",
  "value": "621025" },

{
  "label": "宁县",
  "value": "621026" },

{
  "label": "镇原县",
  "value": "621027" }],


[{
  "label": "安定区",
  "value": "621102" },

{
  "label": "通渭县",
  "value": "621121" },

{
  "label": "陇西县",
  "value": "621122" },

{
  "label": "渭源县",
  "value": "621123" },

{
  "label": "临洮县",
  "value": "621124" },

{
  "label": "漳县",
  "value": "621125" },

{
  "label": "岷县",
  "value": "621126" }],


[{
  "label": "武都区",
  "value": "621202" },

{
  "label": "成县",
  "value": "621221" },

{
  "label": "文县",
  "value": "621222" },

{
  "label": "宕昌县",
  "value": "621223" },

{
  "label": "康县",
  "value": "621224" },

{
  "label": "西和县",
  "value": "621225" },

{
  "label": "礼县",
  "value": "621226" },

{
  "label": "徽县",
  "value": "621227" },

{
  "label": "两当县",
  "value": "621228" }],


[{
  "label": "临夏市",
  "value": "622901" },

{
  "label": "临夏县",
  "value": "622921" },

{
  "label": "康乐县",
  "value": "622922" },

{
  "label": "永靖县",
  "value": "622923" },

{
  "label": "广河县",
  "value": "622924" },

{
  "label": "和政县",
  "value": "622925" },

{
  "label": "东乡族自治县",
  "value": "622926" },

{
  "label": "积石山保安族东乡族撒拉族自治县",
  "value": "622927" }],


[{
  "label": "合作市",
  "value": "623001" },

{
  "label": "临潭县",
  "value": "623021" },

{
  "label": "卓尼县",
  "value": "623022" },

{
  "label": "舟曲县",
  "value": "623023" },

{
  "label": "迭部县",
  "value": "623024" },

{
  "label": "玛曲县",
  "value": "623025" },

{
  "label": "碌曲县",
  "value": "623026" },

{
  "label": "夏河县",
  "value": "623027" }]],



[
[{
  "label": "城东区",
  "value": "630102" },

{
  "label": "城中区",
  "value": "630103" },

{
  "label": "城西区",
  "value": "630104" },

{
  "label": "城北区",
  "value": "630105" },

{
  "label": "大通回族土族自治县",
  "value": "630121" },

{
  "label": "湟中县",
  "value": "630122" },

{
  "label": "湟源县",
  "value": "630123" }],


[{
  "label": "乐都区",
  "value": "630202" },

{
  "label": "平安区",
  "value": "630203" },

{
  "label": "民和回族土族自治县",
  "value": "630222" },

{
  "label": "互助土族自治县",
  "value": "630223" },

{
  "label": "化隆回族自治县",
  "value": "630224" },

{
  "label": "循化撒拉族自治县",
  "value": "630225" }],


[{
  "label": "门源回族自治县",
  "value": "632221" },

{
  "label": "祁连县",
  "value": "632222" },

{
  "label": "海晏县",
  "value": "632223" },

{
  "label": "刚察县",
  "value": "632224" }],


[{
  "label": "同仁县",
  "value": "632321" },

{
  "label": "尖扎县",
  "value": "632322" },

{
  "label": "泽库县",
  "value": "632323" },

{
  "label": "河南蒙古族自治县",
  "value": "632324" }],


[{
  "label": "共和县",
  "value": "632521" },

{
  "label": "同德县",
  "value": "632522" },

{
  "label": "贵德县",
  "value": "632523" },

{
  "label": "兴海县",
  "value": "632524" },

{
  "label": "贵南县",
  "value": "632525" }],


[{
  "label": "玛沁县",
  "value": "632621" },

{
  "label": "班玛县",
  "value": "632622" },

{
  "label": "甘德县",
  "value": "632623" },

{
  "label": "达日县",
  "value": "632624" },

{
  "label": "久治县",
  "value": "632625" },

{
  "label": "玛多县",
  "value": "632626" }],


[{
  "label": "玉树市",
  "value": "632701" },

{
  "label": "杂多县",
  "value": "632722" },

{
  "label": "称多县",
  "value": "632723" },

{
  "label": "治多县",
  "value": "632724" },

{
  "label": "囊谦县",
  "value": "632725" },

{
  "label": "曲麻莱县",
  "value": "632726" }],


[{
  "label": "格尔木市",
  "value": "632801" },

{
  "label": "德令哈市",
  "value": "632802" },

{
  "label": "乌兰县",
  "value": "632821" },

{
  "label": "都兰县",
  "value": "632822" },

{
  "label": "天峻县",
  "value": "632823" },

{
  "label": "大柴旦行政委员会",
  "value": "632857" },

{
  "label": "冷湖行政委员会",
  "value": "632858" },

{
  "label": "茫崖行政委员会",
  "value": "632859" }]],



[
[{
  "label": "兴庆区",
  "value": "640104" },

{
  "label": "西夏区",
  "value": "640105" },

{
  "label": "金凤区",
  "value": "640106" },

{
  "label": "永宁县",
  "value": "640121" },

{
  "label": "贺兰县",
  "value": "640122" },

{
  "label": "灵武市",
  "value": "640181" }],


[{
  "label": "大武口区",
  "value": "640202" },

{
  "label": "惠农区",
  "value": "640205" },

{
  "label": "平罗县",
  "value": "640221" }],


[{
  "label": "利通区",
  "value": "640302" },

{
  "label": "红寺堡区",
  "value": "640303" },

{
  "label": "盐池县",
  "value": "640323" },

{
  "label": "同心县",
  "value": "640324" },

{
  "label": "青铜峡市",
  "value": "640381" }],


[{
  "label": "原州区",
  "value": "640402" },

{
  "label": "西吉县",
  "value": "640422" },

{
  "label": "隆德县",
  "value": "640423" },

{
  "label": "泾源县",
  "value": "640424" },

{
  "label": "彭阳县",
  "value": "640425" }],


[{
  "label": "沙坡头区",
  "value": "640502" },

{
  "label": "中宁县",
  "value": "640521" },

{
  "label": "海原县",
  "value": "640522" }]],



[
[{
  "label": "天山区",
  "value": "650102" },

{
  "label": "沙依巴克区",
  "value": "650103" },

{
  "label": "新市区",
  "value": "650104" },

{
  "label": "水磨沟区",
  "value": "650105" },

{
  "label": "头屯河区",
  "value": "650106" },

{
  "label": "达坂城区",
  "value": "650107" },

{
  "label": "米东区",
  "value": "650109" },

{
  "label": "乌鲁木齐县",
  "value": "650121" },

{
  "label": "乌鲁木齐经济技术开发区",
  "value": "650171" },

{
  "label": "乌鲁木齐高新技术产业开发区",
  "value": "650172" }],


[{
  "label": "独山子区",
  "value": "650202" },

{
  "label": "克拉玛依区",
  "value": "650203" },

{
  "label": "白碱滩区",
  "value": "650204" },

{
  "label": "乌尔禾区",
  "value": "650205" }],


[{
  "label": "高昌区",
  "value": "650402" },

{
  "label": "鄯善县",
  "value": "650421" },

{
  "label": "托克逊县",
  "value": "650422" }],


[{
  "label": "伊州区",
  "value": "650502" },

{
  "label": "巴里坤哈萨克自治县",
  "value": "650521" },

{
  "label": "伊吾县",
  "value": "650522" }],


[{
  "label": "昌吉市",
  "value": "652301" },

{
  "label": "阜康市",
  "value": "652302" },

{
  "label": "呼图壁县",
  "value": "652323" },

{
  "label": "玛纳斯县",
  "value": "652324" },

{
  "label": "奇台县",
  "value": "652325" },

{
  "label": "吉木萨尔县",
  "value": "652327" },

{
  "label": "木垒哈萨克自治县",
  "value": "652328" }],


[{
  "label": "博乐市",
  "value": "652701" },

{
  "label": "阿拉山口市",
  "value": "652702" },

{
  "label": "精河县",
  "value": "652722" },

{
  "label": "温泉县",
  "value": "652723" }],


[{
  "label": "库尔勒市",
  "value": "652801" },

{
  "label": "轮台县",
  "value": "652822" },

{
  "label": "尉犁县",
  "value": "652823" },

{
  "label": "若羌县",
  "value": "652824" },

{
  "label": "且末县",
  "value": "652825" },

{
  "label": "焉耆回族自治县",
  "value": "652826" },

{
  "label": "和静县",
  "value": "652827" },

{
  "label": "和硕县",
  "value": "652828" },

{
  "label": "博湖县",
  "value": "652829" },

{
  "label": "库尔勒经济技术开发区",
  "value": "652871" }],


[{
  "label": "阿克苏市",
  "value": "652901" },

{
  "label": "温宿县",
  "value": "652922" },

{
  "label": "库车县",
  "value": "652923" },

{
  "label": "沙雅县",
  "value": "652924" },

{
  "label": "新和县",
  "value": "652925" },

{
  "label": "拜城县",
  "value": "652926" },

{
  "label": "乌什县",
  "value": "652927" },

{
  "label": "阿瓦提县",
  "value": "652928" },

{
  "label": "柯坪县",
  "value": "652929" }],


[{
  "label": "阿图什市",
  "value": "653001" },

{
  "label": "阿克陶县",
  "value": "653022" },

{
  "label": "阿合奇县",
  "value": "653023" },

{
  "label": "乌恰县",
  "value": "653024" }],


[{
  "label": "喀什市",
  "value": "653101" },

{
  "label": "疏附县",
  "value": "653121" },

{
  "label": "疏勒县",
  "value": "653122" },

{
  "label": "英吉沙县",
  "value": "653123" },

{
  "label": "泽普县",
  "value": "653124" },

{
  "label": "莎车县",
  "value": "653125" },

{
  "label": "叶城县",
  "value": "653126" },

{
  "label": "麦盖提县",
  "value": "653127" },

{
  "label": "岳普湖县",
  "value": "653128" },

{
  "label": "伽师县",
  "value": "653129" },

{
  "label": "巴楚县",
  "value": "653130" },

{
  "label": "塔什库尔干塔吉克自治县",
  "value": "653131" }],


[{
  "label": "和田市",
  "value": "653201" },

{
  "label": "和田县",
  "value": "653221" },

{
  "label": "墨玉县",
  "value": "653222" },

{
  "label": "皮山县",
  "value": "653223" },

{
  "label": "洛浦县",
  "value": "653224" },

{
  "label": "策勒县",
  "value": "653225" },

{
  "label": "于田县",
  "value": "653226" },

{
  "label": "民丰县",
  "value": "653227" }],


[{
  "label": "伊宁市",
  "value": "654002" },

{
  "label": "奎屯市",
  "value": "654003" },

{
  "label": "霍尔果斯市",
  "value": "654004" },

{
  "label": "伊宁县",
  "value": "654021" },

{
  "label": "察布查尔锡伯自治县",
  "value": "654022" },

{
  "label": "霍城县",
  "value": "654023" },

{
  "label": "巩留县",
  "value": "654024" },

{
  "label": "新源县",
  "value": "654025" },

{
  "label": "昭苏县",
  "value": "654026" },

{
  "label": "特克斯县",
  "value": "654027" },

{
  "label": "尼勒克县",
  "value": "654028" }],


[{
  "label": "塔城市",
  "value": "654201" },

{
  "label": "乌苏市",
  "value": "654202" },

{
  "label": "额敏县",
  "value": "654221" },

{
  "label": "沙湾县",
  "value": "654223" },

{
  "label": "托里县",
  "value": "654224" },

{
  "label": "裕民县",
  "value": "654225" },

{
  "label": "和布克赛尔蒙古自治县",
  "value": "654226" }],


[{
  "label": "阿勒泰市",
  "value": "654301" },

{
  "label": "布尔津县",
  "value": "654321" },

{
  "label": "富蕴县",
  "value": "654322" },

{
  "label": "福海县",
  "value": "654323" },

{
  "label": "哈巴河县",
  "value": "654324" },

{
  "label": "青河县",
  "value": "654325" },

{
  "label": "吉木乃县",
  "value": "654326" }],


[{
  "label": "石河子市",
  "value": "659001" },

{
  "label": "阿拉尔市",
  "value": "659002" },

{
  "label": "图木舒克市",
  "value": "659003" },

{
  "label": "五家渠市",
  "value": "659004" },

{
  "label": "铁门关市",
  "value": "659006" }]],



[
[{
  "label": "台北",
  "value": "660101" }],

[{
  "label": "高雄",
  "value": "660201" }],

[{
  "label": "基隆",
  "value": "660301" }],

[{
  "label": "台中",
  "value": "660401" }],

[{
  "label": "台南",
  "value": "660501" }],

[{
  "label": "新竹",
  "value": "660601" }],

[{
  "label": "嘉义",
  "value": "660701" }],

[{
  "label": "宜兰",
  "value": "660801" }],

[{
  "label": "桃园",
  "value": "660901" }],

[{
  "label": "苗栗",
  "value": "661001" }],

[{
  "label": "彰化",
  "value": "661101" }],

[{
  "label": "南投",
  "value": "661201" }],

[{
  "label": "云林",
  "value": "661301" }],

[{
  "label": "屏东",
  "value": "661401" }],

[{
  "label": "台东",
  "value": "661501" }],

[{
  "label": "花莲",
  "value": "661601" }],

[{
  "label": "澎湖",
  "value": "661701" }]],


[
[{
  "label": "香港岛",
  "value": "670101" }],

[{
  "label": "九龙",
  "value": "670201" }],

[{
  "label": "新界",
  "value": "670301" }]],


[
[{
  "label": "澳门半岛",
  "value": "680101" }],

[{
  "label": "氹仔岛",
  "value": "680201" }],

[{
  "label": "路环岛",
  "value": "680301" }],

[{
  "label": "路氹城",
  "value": "680401" }]]];var _default =



areaData;exports.default = _default;

/***/ }),

/***/ 381:
/*!***********************************************!*\
  !*** F:/kxsz/components/w-picker/w-picker.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var forMatNum = function forMatNum(num) {
  return num < 10 ? '0' + num : num + '';
};
var initPicker = {
  //日期
  date: {
    init: function init(start, end) {var mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "date";var step = arguments.length > 3 ? arguments[3] : undefined;var value = arguments.length > 4 ? arguments[4] : undefined;var flag = arguments.length > 5 ? arguments[5] : undefined;var disabled = arguments.length > 6 ? arguments[6] : undefined;
      var aToday = new Date();
      var tYear,tMonth,tDay,tHours,tMinutes,tSeconds,defaultVal = [];
      var initstartDate = new Date(start);
      var endDate = new Date(end);
      if (start > end) {
        initstartDate = new Date(end);
        endDate = new Date(start);
      };
      var startYear = initstartDate.getFullYear();
      var startMonth = initstartDate.getMonth() + 1;
      var endYear = endDate.getFullYear();
      var years = [],months = [],days = [],hours = [],minutes = [],seconds = [],areas = [],returnArr = [];
      var curMonth = flag ? value[1] * 1 : value[1] + 1;
      var dYear = aToday.getFullYear();
      var dMonth = aToday.getMonth() + 1;
      var dDate = aToday.getDate();
      var totalDays = new Date(startYear, curMonth, 0).getDate();
      for (var s = startYear; s <= endYear; s++) {
        years.push(s + '');
      };
      var curYear = years[value[0]];
      switch (mode) {
        case "half":
        case "date":
        case "yearMonth":
          if (disabled && curYear == dYear) {
            for (var m = 1; m <= dMonth; m++) {
              months.push(forMatNum(m));
            };
            for (var d = 1; d <= dDate; d++) {
              days.push(forMatNum(d));
            }
          } else {
            for (var _m = 1; _m <= 12; _m++) {
              months.push(forMatNum(_m));
            };
            for (var _d = 1; _d <= totalDays; _d++) {
              days.push(forMatNum(_d));
            }
          };
          break;
        default:
          for (var _m2 = 1; _m2 <= 12; _m2++) {
            months.push(forMatNum(_m2));
          };
          for (var _d2 = 1; _d2 <= totalDays; _d2++) {
            days.push(forMatNum(_d2));
          }
          break;}

      for (var h = 0; h < 24; h++) {
        hours.push(forMatNum(h));
      }
      for (var _m3 = 0; _m3 < 60; _m3 += step * 1) {
        minutes.push(forMatNum(_m3));
      }
      for (var _s = 0; _s < 60; _s++) {
        seconds.push(forMatNum(_s));
      }
      if (flag) {
        returnArr = [
        years.indexOf(value[0]),
        months.indexOf(value[1]),
        days.indexOf(value[2]),
        hours.indexOf(value[3]),
        minutes.indexOf(value[4]) == -1 ? 0 : minutes.indexOf(value[4]),
        seconds.indexOf(value[5])];

      };
      switch (mode) {
        case "range":
          if (flag) {
            defaultVal = [returnArr[0], returnArr[1], returnArr[2], 0, returnArr[0], returnArr[1], returnArr[2]];
            return { years: years, months: months, days: days, defaultVal: defaultVal };
          } else {
            return { years: years, months: months, days: days };
          }
          break;
        case "date":
          if (flag) {
            defaultVal = [returnArr[0], returnArr[1], returnArr[2]];
            return { years: years, months: months, days: days, defaultVal: defaultVal };
          } else {
            return { years: years, months: months, days: days };
          }
          break;
        case "half":
          areas = [{
            label: "上午",
            value: 0 },
          {
            label: "下午",
            value: 1 }];

          if (flag) {
            defaultVal = [returnArr[0], returnArr[1], returnArr[2], returnArr[3]];
            return { years: years, months: months, days: days, areas: areas, defaultVal: defaultVal };
          } else {
            return { years: years, months: months, days: days, areas: areas };
          }
          break;
        case "yearMonth":
          if (flag) {
            defaultVal = [returnArr[0], returnArr[1]];
            return { years: years, months: months, defaultVal: defaultVal };
          } else {
            return { years: years, months: months };
          }
          break;
        case "dateTime":
          if (flag) {
            defaultVal = returnArr;
            return { years: years, months: months, days: days, hours: hours, minutes: minutes, seconds: seconds, defaultVal: defaultVal };
          } else {
            return { years: years, months: months, days: days, hours: hours, minutes: minutes, seconds: seconds };
          }
          break;
        case "time":
          if (flag) {
            defaultVal = [returnArr[3], returnArr[4], returnArr[5]];
            return { hours: hours, minutes: minutes, seconds: seconds, defaultVal: defaultVal };
          } else {
            return { hours: hours, minutes: minutes, seconds: seconds };
          }
          break;}

    },
    initMonths: function initMonths(year, disabled) {
      var aDate = new Date();
      var dYear = aDate.getFullYear();
      var dMonth = aDate.getMonth() + 1;
      var dDate = aDate.getDate();
      var flag = dYear == year ? true : false;
      var months = [];
      if (flag && disabled) {
        for (var m = 1; m <= dMonth; m++) {
          months.push(forMatNum(m));
        };
      } else {
        for (var _m4 = 1; _m4 <= 12; _m4++) {
          months.push(forMatNum(_m4));
        };
      };
      return months;
    },
    initDays: function initDays(year, month, disabled) {
      var aDate = new Date();
      var dYear = aDate.getFullYear();
      var dMonth = aDate.getMonth() + 1;
      var dDate = aDate.getDate();
      var flag = dYear == year && dMonth == month ? true : false;
      var totalDays = new Date(year, month, 0).getDate();
      var dates = [];
      if (flag && disabled) {
        for (var d = 1; d <= dDate; d++) {
          dates.push(forMatNum(d));
        };
      } else {
        for (var _d3 = 1; _d3 <= totalDays; _d3++) {
          dates.push(forMatNum(_d3));
        };
      };
      return dates;
    } },

  //短期日期上下午
  limitHour: {
    init: function init() {var dayStep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 7;
      var startDate = new Date();
      var date = [],areas = [],hours = [];
      var hour = new Date().getHours();
      var weeks = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
      var arrs = [];
      for (var i = 0; i < dayStep; i++) {
        var year = void 0,month = void 0,day = void 0,weekday = void 0;
        year = startDate.getFullYear();
        month = forMatNum(startDate.getMonth() + 1);
        day = forMatNum(startDate.getDate());
        weekday = weeks[startDate.getDay()];
        var label = "";
        switch (i) {
          case 0:
            label = "今天";
            break;
          case 1:
            label = "明天";
            break;
          case 2:
            label = "后天";
            break;
          default:
            label = month + "月" + day + "日" + " " + weekday;
            break;}

        date.push({
          label: label,
          value: year + "-" + month + "-" + day,
          today: i == 0 ? true : false });

        startDate.setDate(startDate.getDate() + 1);
      }
      if (hour > 12) {
        areas = [{
          label: "下午",
          value: 1 }];

      } else {
        areas = [{
          label: "上午",
          value: 0 },
        {
          label: "下午",
          value: 1 }];

      };
      for (var k = hour > 12 ? hour - 12 : hour; k <= 12; k++) {
        hours.push({
          label: forMatNum(k),
          value: forMatNum(hour > 12 ? k + 12 : k) });

      };
      return { date: date, areas: areas, hours: hours };
    },
    initAreas: function initAreas(date) {
      var areas = [];
      var hour = new Date().getHours();
      if (date.today) {
        if (hour > 12) {
          areas = [{
            label: "下午",
            value: 1 }];

        } else {
          areas = [{
            label: "上午",
            value: 0 },
          {
            label: "下午",
            value: 1 }];

        };
      } else {
        areas = [{
          label: "上午",
          value: 0 },
        {
          label: "下午",
          value: 1 }];

      }
      return areas;areas = [{
        label: "上午",
        value: 0 },
      {
        label: "下午",
        value: 1 }];

    },
    initHours: function initHours(dateCol, hourCol) {
      var hours = [];
      var hour = new Date().getHours();
      if (dateCol.today) {
        if (hourCol.value == 1 && hour <= 12) {
          for (var k = 1; k <= 12; k++) {
            hours.push({
              label: forMatNum(k),
              value: forMatNum(hourCol.value == 1 ? k + 12 : k) });

          };
        } else {
          for (var _k = hour > 12 ? hour - 12 : hour; _k <= 12; _k++) {
            hours.push({
              label: forMatNum(_k),
              value: forMatNum(hourCol.value == 1 ? _k + 12 : _k) });

          };
        }

      } else {
        for (var _k2 = 1; _k2 <= 12; _k2++) {
          hours.push({
            label: forMatNum(_k2),
            value: forMatNum(hourCol.value == 1 ? _k2 + 12 : _k2) });

        };
      };
      return hours;
    } },

  //短期日期时间初始化
  limit: {
    init: function init() {var dayStep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 7;var startHour = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;var endHour = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;var minuteStep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;var afterStep = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 30;
      var startDate = new Date();
      var bsDate = new Date(new Date().getTime() + afterStep * 60 * 1000);
      var date = [],hours = [],minutes = [];
      var hour = bsDate.getHours();
      var minute = Math.floor(bsDate.getMinutes() / minuteStep) * minuteStep;
      var weeks = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
      for (var i = 0; i < dayStep; i++) {
        var year = void 0,month = void 0,day = void 0,weekday = void 0;
        year = startDate.getFullYear();
        month = forMatNum(startDate.getMonth() + 1);
        day = forMatNum(startDate.getDate());
        weekday = weeks[startDate.getDay()];
        var label = "";
        switch (i) {
          case 0:
            label = "今天";
            break;
          case 1:
            label = "明天";
            break;
          case 2:
            label = "后天";
            break;
          default:
            label = month + "月" + day + "日" + " " + weekday;
            break;}

        date.push({
          label: label,
          value: year + "-" + month + "-" + day,
          flag: i == 0 ? true : false });

        startDate.setDate(startDate.getDate() + 1);
      }
      if (hour < startHour) {
        hour = startHour;
      };
      if (hour > endHour) {
        hour = endHour;
      };
      for (var k = hour * 1; k <= endHour * 1; k++) {
        hours.push({
          label: forMatNum(k),
          value: forMatNum(k),
          flag: k == hour ? true : false });

      };
      for (var j = minute; j < 60; j += minuteStep * 1) {
        minutes.push({
          label: forMatNum(j),
          value: forMatNum(j) });

      }
      return { date: date, hours: hours, minutes: minutes };
    },
    initHours: function initHours() {var startHour = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;var endHour = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;var minuteStep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;var afterStep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 30;var date = arguments.length > 4 ? arguments[4] : undefined;
      var hours = [];
      var arr = date.split("-");
      var aDate = new Date();
      var dYear = aDate.getFullYear();
      var dMonth = aDate.getMonth() + 1;
      var dDate = aDate.getDate();
      var bsDate = new Date(new Date().getTime() + afterStep * 60 * 1000);
      var hour = bsDate.getHours();
      var flag = dYear == arr[0] && dMonth == arr[1] && dDate == arr[2] ? true : false;
      if (hour > endHour) {
        hour = endHour;
      };
      if (flag) {
        for (var k = hour * 1; k <= endHour * 1; k++) {
          hours.push({
            label: forMatNum(k),
            value: forMatNum(k),
            flag: k == hour ? true : false });

        };
      } else {
        for (var _k3 = startHour * 1; _k3 <= endHour * 1; _k3++) {
          hours.push({
            label: forMatNum(_k3),
            value: forMatNum(_k3),
            flag: false });

        }
      };
      return hours;
    },
    initMinutes: function initMinutes() {var startHour = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;var endHour = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;var minuteStep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;var afterStep = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 30;var date = arguments.length > 4 ? arguments[4] : undefined;var hour = arguments.length > 5 ? arguments[5] : undefined;
      var minutes = [];
      var bsDate = new Date(new Date().getTime() + afterStep * 60 * 1000);
      var arr = date.split("-");
      var aDate = new Date();
      var dYear = aDate.getFullYear();
      var dMonth = aDate.getMonth() + 1;
      var dDate = aDate.getDate();
      var dHour = bsDate.getHours();;
      var minute = Math.floor(bsDate.getMinutes() / minuteStep) * minuteStep;
      var flag = dYear == arr[0] && dMonth == arr[1] && dDate == arr[2] ? true : false;
      if (flag) {
        if (hour == dHour) {
          for (var j = minute; j < 60; j += minuteStep * 1) {
            minutes.push({
              label: forMatNum(j),
              value: forMatNum(j) });

          }
        } else {
          for (var _j = 0; _j < 60; _j += minuteStep * 1) {
            minutes.push({
              label: forMatNum(_j),
              value: forMatNum(_j) });

          }
        }

      } else {
        for (var _j2 = 0; _j2 < 60; _j2 += minuteStep * 1) {
          minutes.push({
            label: forMatNum(_j2),
            value: forMatNum(_j2) });

        }
      }
      return minutes;
    } },

  //选择区间初始化
  range: {
    init: function init(start, end, value, flag) {
      var aToday = new Date();
      var tYear,tMonth,tDay,tHours,tMinutes,tSeconds,defaultVal = [];
      var initstartDate = new Date(start);
      var endDate = new Date(end);
      if (start > end) {
        initstartDate = new Date(end);
        endDate = new Date(start);
      };
      var startYear = initstartDate.getFullYear();
      var startMonth = initstartDate.getMonth() + 1;
      var endYear = endDate.getFullYear();
      var fyears = [],fmonths = [],fdays = [],tyears = [],tmonths = [],tdays = [],returnArr = [];
      var curMonth = flag ? value[1] * 1 : value[1] + 1;
      var totalDays = new Date(startYear, curMonth, 0).getDate();
      for (var s = startYear; s <= endYear; s++) {
        fyears.push(s + '');
      };
      for (var m = 1; m <= 12; m++) {
        fmonths.push(forMatNum(m));
      };
      for (var d = 1; d <= totalDays; d++) {
        fdays.push(forMatNum(d));
      };
      for (var _s2 = startYear; _s2 <= endYear; _s2++) {
        tyears.push(_s2 + '');
      };
      for (var _m5 = 1; _m5 <= 12; _m5++) {
        tmonths.push(forMatNum(_m5));
      };
      for (var _d4 = 1; _d4 <= totalDays; _d4++) {
        tdays.push(forMatNum(_d4));
      };
      if (flag) {
        defaultVal = [
        fyears.indexOf(value[0]),
        fmonths.indexOf(value[1]),
        fdays.indexOf(value[2]),
        0,
        tyears.indexOf(value[0]),
        tmonths.indexOf(value[1]),
        tdays.indexOf(value[2])];

        return {
          fyears: fyears,
          fmonths: fmonths,
          fdays: fdays,
          tyears: tyears,
          tmonths: tmonths,
          tdays: tdays,
          defaultVal: defaultVal };

      } else {
        return {
          fyears: fyears,
          fmonths: fmonths,
          fdays: fdays,
          tyears: tyears,
          tmonths: tmonths,
          tdays: tdays };

      }
    },
    initDays: function initDays(year, month) {
      var totalDays = new Date(year, month, 0).getDate();
      var dates = [];
      for (var d = 1; d <= totalDays; d++) {
        dates.push(forMatNum(d));
      };
      return dates;
    } } };var _default =



initPicker;exports.default = _default;

/***/ }),

/***/ 4:
/*!**************************!*\
  !*** F:/kxsz/pages.json ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 5:
/*!*******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {var _package = __webpack_require__(/*! ../package.json */ 6);function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}

var STAT_VERSION = _package.version;
var STAT_URL = 'https://tongji.dcloud.io/uni/stat';
var STAT_H5_URL = 'https://tongji.dcloud.io/uni/stat.gif';
var PAGE_PVER_TIME = 1800;
var APP_PVER_TIME = 300;
var OPERATING_TIME = 10;

var UUID_KEY = '__DC_STAT_UUID';
var UUID_VALUE = '__DC_UUID_VALUE';

function getUuid() {
  var uuid = '';
  if (getPlatformName() === 'n') {
    try {
      uuid = plus.runtime.getDCloudId();
    } catch (e) {
      uuid = '';
    }
    return uuid;
  }

  try {
    uuid = uni.getStorageSync(UUID_KEY);
  } catch (e) {
    uuid = UUID_VALUE;
  }

  if (!uuid) {
    uuid = Date.now() + '' + Math.floor(Math.random() * 1e7);
    try {
      uni.setStorageSync(UUID_KEY, uuid);
    } catch (e) {
      uni.setStorageSync(UUID_KEY, UUID_VALUE);
    }
  }
  return uuid;
}

var getSgin = function getSgin(statData) {
  var arr = Object.keys(statData);
  var sortArr = arr.sort();
  var sgin = {};
  var sginStr = '';
  for (var i in sortArr) {
    sgin[sortArr[i]] = statData[sortArr[i]];
    sginStr += sortArr[i] + '=' + statData[sortArr[i]] + '&';
  }
  // const options = sginStr.substr(0, sginStr.length - 1)
  // sginStr = sginStr.substr(0, sginStr.length - 1) + '&key=' + STAT_KEY;
  // const si = crypto.createHash('md5').update(sginStr).digest('hex');
  return {
    sign: '',
    options: sginStr.substr(0, sginStr.length - 1) };

};

var getSplicing = function getSplicing(data) {
  var str = '';
  for (var i in data) {
    str += i + '=' + data[i] + '&';
  }
  return str.substr(0, str.length - 1);
};

var getTime = function getTime() {
  return parseInt(new Date().getTime() / 1000);
};

var getPlatformName = function getPlatformName() {
  var platformList = {
    'app-plus': 'n',
    'h5': 'h5',
    'mp-weixin': 'wx',
    'mp-alipay': 'ali',
    'mp-baidu': 'bd',
    'mp-toutiao': 'tt',
    'mp-qq': 'qq' };

  return platformList["mp-weixin"];
};

var getPackName = function getPackName() {
  var packName = '';
  if (getPlatformName() === 'wx' || getPlatformName() === 'qq') {
    // 兼容微信小程序低版本基础库
    if (uni.canIUse('getAccountInfoSync')) {
      packName = uni.getAccountInfoSync().miniProgram.appId || '';
    }
  }
  return packName;
};

var getVersion = function getVersion() {
  return getPlatformName() === 'n' ? plus.runtime.version : '';
};

var getChannel = function getChannel() {
  var platformName = getPlatformName();
  var channel = '';
  if (platformName === 'n') {
    channel = plus.runtime.channel;
  }
  return channel;
};

var getScene = function getScene(options) {
  var platformName = getPlatformName();
  var scene = '';
  if (options) {
    return options;
  }
  if (platformName === 'wx') {
    scene = uni.getLaunchOptionsSync().scene;
  }
  return scene;
};
var First__Visit__Time__KEY = 'First__Visit__Time';
var Last__Visit__Time__KEY = 'Last__Visit__Time';

var getFirstVisitTime = function getFirstVisitTime() {
  var timeStorge = uni.getStorageSync(First__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = getTime();
    uni.setStorageSync(First__Visit__Time__KEY, time);
    uni.removeStorageSync(Last__Visit__Time__KEY);
  }
  return time;
};

var getLastVisitTime = function getLastVisitTime() {
  var timeStorge = uni.getStorageSync(Last__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = '';
  }
  uni.setStorageSync(Last__Visit__Time__KEY, getTime());
  return time;
};


var PAGE_RESIDENCE_TIME = '__page__residence__time';
var First_Page_residence_time = 0;
var Last_Page_residence_time = 0;


var setPageResidenceTime = function setPageResidenceTime() {
  First_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    uni.setStorageSync(PAGE_RESIDENCE_TIME, getTime());
  }
  return First_Page_residence_time;
};

var getPageResidenceTime = function getPageResidenceTime() {
  Last_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    First_Page_residence_time = uni.getStorageSync(PAGE_RESIDENCE_TIME);
  }
  return Last_Page_residence_time - First_Page_residence_time;
};
var TOTAL__VISIT__COUNT = 'Total__Visit__Count';
var getTotalVisitCount = function getTotalVisitCount() {
  var timeStorge = uni.getStorageSync(TOTAL__VISIT__COUNT);
  var count = 1;
  if (timeStorge) {
    count = timeStorge;
    count++;
  }
  uni.setStorageSync(TOTAL__VISIT__COUNT, count);
  return count;
};

var GetEncodeURIComponentOptions = function GetEncodeURIComponentOptions(statData) {
  var data = {};
  for (var prop in statData) {
    data[prop] = encodeURIComponent(statData[prop]);
  }
  return data;
};

var Set__First__Time = 0;
var Set__Last__Time = 0;

var getFirstTime = function getFirstTime() {
  var time = new Date().getTime();
  Set__First__Time = time;
  Set__Last__Time = 0;
  return time;
};


var getLastTime = function getLastTime() {
  var time = new Date().getTime();
  Set__Last__Time = time;
  return time;
};


var getResidenceTime = function getResidenceTime(type) {
  var residenceTime = 0;
  if (Set__First__Time !== 0) {
    residenceTime = Set__Last__Time - Set__First__Time;
  }

  residenceTime = parseInt(residenceTime / 1000);
  residenceTime = residenceTime < 1 ? 1 : residenceTime;
  if (type === 'app') {
    var overtime = residenceTime > APP_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: overtime };

  }
  if (type === 'page') {
    var _overtime = residenceTime > PAGE_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: _overtime };

  }

  return {
    residenceTime: residenceTime };


};

var getRoute = function getRoute() {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;

  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is;
  } else {
    return _self.$scope && _self.$scope.route || _self.$mp && _self.$mp.page.route;
  }
};

var getPageRoute = function getPageRoute(self) {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;
  var query = self._query;
  var str = query && JSON.stringify(query) !== '{}' ? '?' + JSON.stringify(query) : '';
  // clear
  self._query = '';
  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is + str;
  } else {
    return _self.$scope && _self.$scope.route + str || _self.$mp && _self.$mp.page.route + str;
  }
};

var getPageTypes = function getPageTypes(self) {
  if (self.mpType === 'page' || self.$mp && self.$mp.mpType === 'page' || self.$options.mpType === 'page') {
    return true;
  }
  return false;
};

var calibration = function calibration(eventName, options) {
  //  login 、 share 、pay_success 、pay_fail 、register 、title
  if (!eventName) {
    console.error("uni.report \u7F3A\u5C11 [eventName] \u53C2\u6570");
    return true;
  }
  if (typeof eventName !== 'string') {
    console.error("uni.report [eventName] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u7C7B\u578B");
    return true;
  }
  if (eventName.length > 255) {
    console.error("uni.report [eventName] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (typeof options !== 'string' && typeof options !== 'object') {
    console.error("uni.report [options] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u6216 Object \u7C7B\u578B");
    return true;
  }

  if (typeof options === 'string' && options.length > 255) {
    console.error("uni.report [options] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (eventName === 'title' && typeof options !== 'string') {
    console.error('uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型');
    return true;
  }
};

var PagesJson = __webpack_require__(/*! uni-pages?{"type":"style"} */ 7).default;
var statConfig = __webpack_require__(/*! uni-stat-config */ 8).default || __webpack_require__(/*! uni-stat-config */ 8);

var resultOptions = uni.getSystemInfoSync();var

Util = /*#__PURE__*/function () {
  function Util() {_classCallCheck(this, Util);
    this.self = '';
    this._retry = 0;
    this._platform = '';
    this._query = {};
    this._navigationBarTitle = {
      config: '',
      page: '',
      report: '',
      lt: '' };

    this._operatingTime = 0;
    this._reportingRequestData = {
      '1': [],
      '11': [] };

    this.__prevent_triggering = false;

    this.__licationHide = false;
    this.__licationShow = false;
    this._lastPageRoute = '';
    this.statData = {
      uuid: getUuid(),
      ut: getPlatformName(),
      mpn: getPackName(),
      ak: statConfig.appid,
      usv: STAT_VERSION,
      v: getVersion(),
      ch: getChannel(),
      cn: '',
      pn: '',
      ct: '',
      t: getTime(),
      tt: '',
      p: resultOptions.platform === 'android' ? 'a' : 'i',
      brand: resultOptions.brand || '',
      md: resultOptions.model,
      sv: resultOptions.system.replace(/(Android|iOS)\s/, ''),
      mpsdk: resultOptions.SDKVersion || '',
      mpv: resultOptions.version || '',
      lang: resultOptions.language,
      pr: resultOptions.pixelRatio,
      ww: resultOptions.windowWidth,
      wh: resultOptions.windowHeight,
      sw: resultOptions.screenWidth,
      sh: resultOptions.screenHeight };


  }_createClass(Util, [{ key: "_applicationShow", value: function _applicationShow()

    {
      if (this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('app');
        if (time.overtime) {
          var options = {
            path: this._lastPageRoute,
            scene: this.statData.sc };

          this._sendReportRequest(options);
        }
        this.__licationHide = false;
      }
    } }, { key: "_applicationHide", value: function _applicationHide(

    self, type) {

      this.__licationHide = true;
      getLastTime();
      var time = getResidenceTime();
      getFirstTime();
      var route = getPageRoute(this);
      this._sendHideRequest({
        urlref: route,
        urlref_ts: time.residenceTime },
      type);
    } }, { key: "_pageShow", value: function _pageShow()

    {
      var route = getPageRoute(this);
      var routepath = getRoute();
      this._navigationBarTitle.config = PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].titleNView &&
      PagesJson.pages[routepath].titleNView.titleText ||
      PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].navigationBarTitleText || '';

      if (this.__licationShow) {
        getFirstTime();
        this.__licationShow = false;
        // console.log('这是 onLauch 之后执行的第一次 pageShow ，为下次记录时间做准备');
        this._lastPageRoute = route;
        return;
      }

      getLastTime();
      this._lastPageRoute = route;
      var time = getResidenceTime('page');
      if (time.overtime) {
        var options = {
          path: this._lastPageRoute,
          scene: this.statData.sc };

        this._sendReportRequest(options);
      }
      getFirstTime();
    } }, { key: "_pageHide", value: function _pageHide()

    {
      if (!this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('page');
        this._sendPageRequest({
          url: this._lastPageRoute,
          urlref: this._lastPageRoute,
          urlref_ts: time.residenceTime });

        this._navigationBarTitle = {
          config: '',
          page: '',
          report: '',
          lt: '' };

        return;
      }
    } }, { key: "_login", value: function _login()

    {
      this._sendEventRequest({
        key: 'login' },
      0);
    } }, { key: "_share", value: function _share()

    {
      this._sendEventRequest({
        key: 'share' },
      0);
    } }, { key: "_payment", value: function _payment(
    key) {
      this._sendEventRequest({
        key: key },
      0);
    } }, { key: "_sendReportRequest", value: function _sendReportRequest(
    options) {

      this._navigationBarTitle.lt = '1';
      var query = options.query && JSON.stringify(options.query) !== '{}' ? '?' + JSON.stringify(options.query) : '';
      this.statData.lt = '1';
      this.statData.url = options.path + query || '';
      this.statData.t = getTime();
      this.statData.sc = getScene(options.scene);
      this.statData.fvts = getFirstVisitTime();
      this.statData.lvts = getLastVisitTime();
      this.statData.tvc = getTotalVisitCount();
      if (getPlatformName() === 'n') {
        this.getProperty();
      } else {
        this.getNetworkInfo();
      }
    } }, { key: "_sendPageRequest", value: function _sendPageRequest(

    opt) {var

      url =


      opt.url,urlref = opt.urlref,urlref_ts = opt.urlref_ts;
      this._navigationBarTitle.lt = '11';
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '11',
        ut: this.statData.ut,
        url: url,
        tt: this.statData.tt,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "_sendHideRequest", value: function _sendHideRequest(

    opt, type) {var

      urlref =

      opt.urlref,urlref_ts = opt.urlref_ts;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '3',
        ut: this.statData.ut,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options, type);
    } }, { key: "_sendEventRequest", value: function _sendEventRequest()



    {var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref$key = _ref.key,key = _ref$key === void 0 ? '' : _ref$key,_ref$value = _ref.value,value = _ref$value === void 0 ? "" : _ref$value;
      var route = this._lastPageRoute;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '21',
        ut: this.statData.ut,
        url: route,
        ch: this.statData.ch,
        e_n: key,
        e_v: typeof value === 'object' ? JSON.stringify(value) : value.toString(),
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "getNetworkInfo", value: function getNetworkInfo()

    {var _this = this;
      uni.getNetworkType({
        success: function success(result) {
          _this.statData.net = result.networkType;
          _this.getLocation();
        } });

    } }, { key: "getProperty", value: function getProperty()

    {var _this2 = this;
      plus.runtime.getProperty(plus.runtime.appid, function (wgtinfo) {
        _this2.statData.v = wgtinfo.version || '';
        _this2.getNetworkInfo();
      });
    } }, { key: "getLocation", value: function getLocation()

    {var _this3 = this;
      if (statConfig.getLocation) {
        uni.getLocation({
          type: 'wgs84',
          geocode: true,
          success: function success(result) {
            if (result.address) {
              _this3.statData.cn = result.address.country;
              _this3.statData.pn = result.address.province;
              _this3.statData.ct = result.address.city;
            }

            _this3.statData.lat = result.latitude;
            _this3.statData.lng = result.longitude;
            _this3.request(_this3.statData);
          } });

      } else {
        this.statData.lat = 0;
        this.statData.lng = 0;
        this.request(this.statData);
      }
    } }, { key: "request", value: function request(

    data, type) {var _this4 = this;
      var time = getTime();
      var title = this._navigationBarTitle;
      data.ttn = title.page;
      data.ttpj = title.config;
      data.ttc = title.report;

      var requestData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        requestData = uni.getStorageSync('__UNI__STAT__DATA') || {};
      }
      if (!requestData[data.lt]) {
        requestData[data.lt] = [];
      }
      requestData[data.lt].push(data);

      if (getPlatformName() === 'n') {
        uni.setStorageSync('__UNI__STAT__DATA', requestData);
      }
      if (getPageResidenceTime() < OPERATING_TIME && !type) {
        return;
      }
      var uniStatData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        uniStatData = uni.getStorageSync('__UNI__STAT__DATA');
      }
      // 时间超过，重新获取时间戳
      setPageResidenceTime();
      var firstArr = [];
      var contentArr = [];
      var lastArr = [];var _loop = function _loop(

      i) {
        var rd = uniStatData[i];
        rd.forEach(function (elm) {
          var newData = getSplicing(elm);
          if (i === 0) {
            firstArr.push(newData);
          } else if (i === 3) {
            lastArr.push(newData);
          } else {
            contentArr.push(newData);
          }
        });};for (var i in uniStatData) {_loop(i);
      }

      firstArr.push.apply(firstArr, contentArr.concat(lastArr));
      var optionsData = {
        usv: STAT_VERSION, //统计 SDK 版本号
        t: time, //发送请求时的时间戮
        requests: JSON.stringify(firstArr) };


      this._reportingRequestData = {};
      if (getPlatformName() === 'n') {
        uni.removeStorageSync('__UNI__STAT__DATA');
      }

      if (data.ut === 'h5') {
        this.imageRequest(optionsData);
        return;
      }

      if (getPlatformName() === 'n' && this.statData.p === 'a') {
        setTimeout(function () {
          _this4._sendRequest(optionsData);
        }, 200);
        return;
      }
      this._sendRequest(optionsData);
    } }, { key: "_sendRequest", value: function _sendRequest(
    optionsData) {var _this5 = this;
      uni.request({
        url: STAT_URL,
        method: 'POST',
        // header: {
        //   'content-type': 'application/json' // 默认值
        // },
        data: optionsData,
        success: function success() {
          // if (process.env.NODE_ENV === 'development') {
          //   console.log('stat request success');
          // }
        },
        fail: function fail(e) {
          if (++_this5._retry < 3) {
            setTimeout(function () {
              _this5._sendRequest(optionsData);
            }, 1000);
          }
        } });

    }
    /**
       * h5 请求
       */ }, { key: "imageRequest", value: function imageRequest(
    data) {
      var image = new Image();
      var options = getSgin(GetEncodeURIComponentOptions(data)).options;
      image.src = STAT_H5_URL + '?' + options;
    } }, { key: "sendEvent", value: function sendEvent(

    key, value) {
      // 校验 type 参数
      if (calibration(key, value)) return;

      if (key === 'title') {
        this._navigationBarTitle.report = value;
        return;
      }
      this._sendEventRequest({
        key: key,
        value: typeof value === 'object' ? JSON.stringify(value) : value },
      1);
    } }]);return Util;}();var



Stat = /*#__PURE__*/function (_Util) {_inherits(Stat, _Util);_createClass(Stat, null, [{ key: "getInstance", value: function getInstance()
    {
      if (!this.instance) {
        this.instance = new Stat();
      }
      return this.instance;
    } }]);
  function Stat() {var _this6;_classCallCheck(this, Stat);
    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(Stat).call(this));
    _this6.instance = null;
    // 注册拦截器
    if (typeof uni.addInterceptor === 'function' && "development" !== 'development') {
      _this6.addInterceptorInit();
      _this6.interceptLogin();
      _this6.interceptShare(true);
      _this6.interceptRequestPayment();
    }return _this6;
  }_createClass(Stat, [{ key: "addInterceptorInit", value: function addInterceptorInit()

    {
      var self = this;
      uni.addInterceptor('setNavigationBarTitle', {
        invoke: function invoke(args) {
          self._navigationBarTitle.page = args.title;
        } });

    } }, { key: "interceptLogin", value: function interceptLogin()

    {
      var self = this;
      uni.addInterceptor('login', {
        complete: function complete() {
          self._login();
        } });

    } }, { key: "interceptShare", value: function interceptShare(

    type) {
      var self = this;
      if (!type) {
        self._share();
        return;
      }
      uni.addInterceptor('share', {
        success: function success() {
          self._share();
        },
        fail: function fail() {
          self._share();
        } });

    } }, { key: "interceptRequestPayment", value: function interceptRequestPayment()

    {
      var self = this;
      uni.addInterceptor('requestPayment', {
        success: function success() {
          self._payment('pay_success');
        },
        fail: function fail() {
          self._payment('pay_fail');
        } });

    } }, { key: "report", value: function report(

    options, self) {
      this.self = self;
      // if (process.env.NODE_ENV === 'development') {
      //   console.log('report init');
      // }
      setPageResidenceTime();
      this.__licationShow = true;
      this._sendReportRequest(options, true);
    } }, { key: "load", value: function load(

    options, self) {
      if (!self.$scope && !self.$mp) {
        var page = getCurrentPages();
        self.$scope = page[page.length - 1];
      }
      this.self = self;
      this._query = options;
    } }, { key: "show", value: function show(

    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageShow(self);
      } else {
        this._applicationShow(self);
      }
    } }, { key: "ready", value: function ready(

    self) {
      // this.self = self;
      // if (getPageTypes(self)) {
      //   this._pageShow(self);
      // }
    } }, { key: "hide", value: function hide(
    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageHide(self);
      } else {
        this._applicationHide(self, true);
      }
    } }, { key: "error", value: function error(
    em) {
      if (this._platform === 'devtools') {
        if (true) {
          console.info('当前运行环境为开发者工具，不上报数据。');
        }
        // return;
      }
      var emVal = '';
      if (!em.message) {
        emVal = JSON.stringify(em);
      } else {
        emVal = em.stack;
      }
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '31',
        ut: this.statData.ut,
        ch: this.statData.ch,
        mpsdk: this.statData.mpsdk,
        mpv: this.statData.mpv,
        v: this.statData.v,
        em: emVal,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }]);return Stat;}(Util);


var stat = Stat.getInstance();
var isHide = false;
var lifecycle = {
  onLaunch: function onLaunch(options) {
    stat.report(options, this);
  },
  onReady: function onReady() {
    stat.ready(this);
  },
  onLoad: function onLoad(options) {
    stat.load(options, this);
    // 重写分享，获取分享上报事件
    if (this.$scope && this.$scope.onShareAppMessage) {
      var oldShareAppMessage = this.$scope.onShareAppMessage;
      this.$scope.onShareAppMessage = function (options) {
        stat.interceptShare(false);
        return oldShareAppMessage.call(this, options);
      };
    }
  },
  onShow: function onShow() {
    isHide = false;
    stat.show(this);
  },
  onHide: function onHide() {
    isHide = true;
    stat.hide(this);
  },
  onUnload: function onUnload() {
    if (isHide) {
      isHide = false;
      return;
    }
    stat.hide(this);
  },
  onError: function onError(e) {
    stat.error(e);
  } };


function main() {
  if (true) {
    uni.report = function (type, options) {};
  } else { var Vue; }
}

main();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 6:
/*!******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/package.json ***!
  \******************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, deprecated, description, devDependencies, files, gitHead, homepage, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = {"_from":"@dcloudio/uni-stat@alpha","_id":"@dcloudio/uni-stat@2.0.0-alpha-25720200116005","_inBundle":false,"_integrity":"sha512-RZFw3WAaS/CZTzzv9JPaWvmoNitojD/06vPdHSzlqZi8GbuE222lFuyochEjrGkG8rPPrWHAnwfoPBuQVtkfdg==","_location":"/@dcloudio/uni-stat","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"@dcloudio/uni-stat@alpha","name":"@dcloudio/uni-stat","escapedName":"@dcloudio%2funi-stat","scope":"@dcloudio","rawSpec":"alpha","saveSpec":null,"fetchSpec":"alpha"},"_requiredBy":["#USER","/","/@dcloudio/vue-cli-plugin-uni"],"_resolved":"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-alpha-25720200116005.tgz","_shasum":"08bb17aba91c84a981f33d74153aa3dd07b578ad","_spec":"@dcloudio/uni-stat@alpha","_where":"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli","author":"","bugs":{"url":"https://github.com/dcloudio/uni-app/issues"},"bundleDependencies":false,"deprecated":false,"description":"","devDependencies":{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5","eslint":"^6.1.0","rollup":"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},"files":["dist","package.json","LICENSE"],"gitHead":"a129bde60de35f7ef497f43d5a45b4556231995c","homepage":"https://github.com/dcloudio/uni-app#readme","license":"Apache-2.0","main":"dist/index.js","name":"@dcloudio/uni-stat","repository":{"type":"git","url":"git+https://github.com/dcloudio/uni-app.git","directory":"packages/uni-stat"},"scripts":{"build":"NODE_ENV=production rollup -c rollup.config.js","dev":"NODE_ENV=development rollup -w -c rollup.config.js"},"version":"2.0.0-alpha-25720200116005"};

/***/ }),

/***/ 7:
/*!*******************************************!*\
  !*** F:/kxsz/pages.json?{"type":"style"} ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { "pages": { "pages/index/index": { "navigationBarTitleText": "首页" }, "pages/my/my": { "navigationBarTitleText": "我的" }, "pages/my/jifenguize/jifenguize": { "navigationBarTitleText": "积分规则", "navigationBarBackgroundColor": "#008800", "navigationBarTextStyle": "white" }, "pages/my/huiyuantequan/huiyuantequan": { "navigationBarTitleText": "我的特权", "navigationBarBackgroundColor": "#008800", "navigationBarTextStyle": "white" }, "pages/online_Teach/onlineTeach": { "navigationBarTitleText": "教材同步学习教学", "enablePullDownRefresh": false }, "pages/onlinestore/onlinestore": { "navigationStyle": "custom" }, "pages/myPublished/myPublished": { "navigationBarTitleText": "我的发表" }, "pages/my/daySignin/daySignin": { "navigationBarTitleText": "每日签到" }, "pages/onlinestore/myOrder/myOrder": { "navigationBarTitleText": "我的订单" }, "pages/my/huiyuanxinxi/huiyuanxinxi": { "navigationBarTitleText": "会员信息" }, "pages/my/huiyuanjifen/huiyuanjifen": { "navigationBarTitleText": "会员积分" }, "pages/my/mycollect/mycollect": { "navigationBarTitleText": "我的收藏" }, "pages/my/lstgjl/lstgjl": { "navigationBarTitleText": "历史投稿记录" }, "pages/publishedDiary/publishedDiary": { "navigationBarTitleText": "发表记录" }, "pages/chat/chat": { "navigationBarTitleText": "消息" }, "pages/chat/chatContent/chatContent": {}, "pages/freeTeaching/freeTeaching": { "navigationBarTitleText": "在线教学" }, "pages/login/login": { "navigationStyle": "custom" }, "pages/reg/reg": { "navigationBarTitleText": "开心书写" }, "pages/hncjiaoxue_mulu/hncjiaoxue_mulu": { "navigationBarTitleText": "功能尺使用教学" }, "pages/Copyright/Copyright": { "navigationBarTitleText": "版权声明" }, "pages/my/shengjihuiyuan/shengjihuiyuan": { "navigationBarTitleText": "升级会员" }, "pages/growthDiary/growthDiary": { "navigationBarTitleText": "个人日记" }, "pages/hncjiaoxue_intro/hncjiaoxue_intro": { "navigationBarTitleText": "金木水火土" }, "pages/my/mydiscount/mydiscount": { "navigationBarTitleText": "优惠券" }, "pages/my/signature/signature": { "navigationBarTitleText": "个性签名" }, "pages/my/videoGift/videoGift": { "navigationBarTitleText": "视频礼包" }, "pages/my/activeCode/activeCode": { "navigationBarTitleText": "激活码" }, "pages/message/message": { "navigationBarTitleText": "首页" }, "pages/my/follow/follow": { "navigationBarTitleText": "关注的人" }, "pages/my/fans/fans": { "navigationBarTitleText": "粉丝" }, "pages/userInfo/userInfo": { "navigationBarTitleText": "用户信息" }, "pages/feedback/feedback": { "navigationBarTitleText": "意见反馈" }, "pages/about/about": { "navigationBarTitleText": "关于我们" }, "pages/assemble/assemble": { "navigationBarTitleText": "拼团详情" }, "pages/freeTeaching/pen/pen": { "navigationBarTitleText": "笔画+思政" }, "pages/freeTeaching/sitting-posture/setting-posture": { "navigationBarTitleText": "坐姿握笔" }, "pages/freeTeaching/text-decoding/text-decoding": { "navigationBarTextStyle": "white" }, "pages/freeTeaching/expanded-teach/expanded-teach": { "navigationBarTitleText": "扩展教学" }, "pages/ruler-buy/ruler-buy": { "navigationBarTitleText": "书法尺购买" }, "pages/jifen-shop/jifen-shop": { "navigationBarTitleText": "积分商城", "navigationBarBackgroundColor": "#FFFFFF", "navigationBarTextStyle": "black" }, "pages/product-detail/product-detail": { "navigationBarBackgroundColor": "#FFFFFF", "navigationBarTextStyle": "black" } }, "globalStyle": { "backgroundTextStyle": "light", "navigationBarBackgroundColor": "#008800", "navigationBarTextStyle": "white" } };exports.default = _default;

/***/ }),

/***/ 8:
/*!******************************************!*\
  !*** F:/kxsz/pages.json?{"type":"stat"} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { "appid": "__UNI__261BBA2" };exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map
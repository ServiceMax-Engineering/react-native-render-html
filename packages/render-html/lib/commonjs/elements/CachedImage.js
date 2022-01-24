"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomCachedImage = exports.CachedImageBackground = exports.CachedImage = exports.BaseCachedImage = exports.ImageCache = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _reactNativeFetchBlob = _interopRequireDefault(require("react-native-fetch-blob"));

var _IMGElementContentAlt = _interopRequireDefault(require("./IMGElementContentAlt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const SHA1 = require("crypto-js/sha1");

const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

const BASE_DIR = _reactNativeFetchBlob.default.fs.dirs.CacheDir + "/react-native-img-cache";
const FILE_PREFIX = _reactNative.Platform.OS === "ios" ? "" : "file://";

class ImageCache {
  getPath(uri, immutable) {
    let path = uri.substring(uri.lastIndexOf("/"));
    path = path.indexOf("?") === -1 ? path : path.substring(path.lastIndexOf("."), path.indexOf("?"));
    const ext = path.indexOf(".") === -1 ? ".jpg" : path.substring(path.indexOf("."));

    if (immutable === true) {
      return BASE_DIR + "/" + SHA1(uri) + ext;
    } else {
      return BASE_DIR + "/" + s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4() + ext;
    }
  }

  constructor() {
    _defineProperty(this, "cache", {});
  }

  static get() {
    if (!ImageCache.instance) {
      ImageCache.instance = new ImageCache();
    }

    return ImageCache.instance;
  }

  clear() {
    this.cache = {};
    return _reactNativeFetchBlob.default.fs.unlink(BASE_DIR);
  }

  on(source, handler, immutable = true) {
    const {
      uri
    } = source;

    if (!this.cache[uri]) {
      this.cache[uri] = {
        source,
        downloading: false,
        handlers: [],
        immutable: immutable === true,
        path: immutable === true ? this.getPath(uri, immutable) : undefined
      };

      if (handler) {
        this.cache[uri].handlers = [handler];
      }
    } else {
      handler && this.cache[uri].handlers.push(handler);
    }

    this.get(uri);
  }

  getCachedImagePath(uri) {
    return this.cache[uri];
  }

  dispose(uri, handler) {
    const cache = this.cache[uri];

    if (cache && cache.handlers) {
      cache.handlers.forEach((h, index) => {
        if (h === handler) {
          cache.handlers.splice(index, 1);
        }
      });
    }
  }

  bust(uri) {
    const cache = this.cache[uri];

    if (cache !== undefined && !cache.immutable) {
      cache.path = undefined;
      this.get(uri);
    }
  }

  cancel(uri) {
    const cache = this.cache[uri];

    if (cache && cache.downloading) {
      cache.task.cancel();
    }
  }

  download(cache) {
    const {
      source
    } = cache;
    const {
      uri
    } = source;

    if (!cache.downloading) {
      const path = this.getPath(uri, cache.immutable);
      cache.downloading = true;
      const method = source.method ? source.method : "GET";
      cache.task = _reactNativeFetchBlob.default.config({
        path
      }).fetch(method, uri, source.headers);
      cache.task.then(resp => {
        if (resp.respInfo.status == 401) {
          // Unauthorized
          this.cache[uri].path = undefined;
          cache.downloading = false;
          cache.authorizationError = true;

          _reactNativeFetchBlob.default.fs.unlink(path);

          this.notify(uri);
        } else {
          cache.downloading = false;
          cache.path = path;
          this.notify(uri);
        }
      }).catch(() => {
        cache.downloading = false;

        _reactNativeFetchBlob.default.fs.unlink(path);
      });
    }
  }

  get(uri) {
    const cache = this.cache[uri];

    if (cache.path) {
      // We check here if IOS didn't delete the cache content
      _reactNativeFetchBlob.default.fs.exists(cache.path).then(exists => {
        if (exists) {
          this.notify(uri);
        } else {
          this.download(cache);
        }
      });
    } else {
      this.download(cache);
    }
  }

  notify(uri) {
    const handlers = this.cache[uri].handlers;
    handlers && handlers.forEach(handler => {
      handler(this.cache[uri].path);
    });
  }

}

exports.ImageCache = ImageCache;

_defineProperty(ImageCache, "instance", void 0);

class BaseCachedImage extends _react.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "uri", void 0);

    _defineProperty(this, "handler", path => {
      if (path === undefined) {
        this.props.onError && this.props.onError({
          nativeEvent: {
            error: new Error("unauthorized")
          },
          currentTarget: 1,
          target: 1,
          bubbles: false,
          cancelable: false,
          defaultPrevented: false,
          eventPhase: 0,
          isTrusted: false,
          preventDefault: function () {},
          isDefaultPrevented: function () {
            return false;
          },
          stopPropagation: function () {},
          isPropagationStopped: function () {
            return false;
          },
          persist: function () {},
          timeStamp: 0,
          type: ""
        });
        this.setState({
          error: true,
          key: Math.random()
        });
      } else {
        this.setState({
          path,
          error: false,
          key: Math.random()
        });
      }
    });
  }

  dispose() {
    if (this.uri) {
      ImageCache.get().dispose(this.uri, this.handler);
    }
  }

  observe(source, mutable) {
    if (source.uri !== this.uri) {
      this.dispose();
      this.uri = source.uri;
      ImageCache.get().on(source, this.handler, !mutable);
    }
  }

  getProps() {
    const props = {};
    Object.keys(this.props).forEach(prop => {
      if (prop === "source" && this.props.source.uri) {
        props["source"] = this.state.path ? {
          uri: FILE_PREFIX + this.state.path
        } : {};
      } else if (["mutable", "component"].indexOf(prop) === -1) {
        props[prop] = this.props[prop];
      }
    });
    return props;
  }

  checkSource(source) {
    if (Array.isArray(source)) {
      throw new Error(`Giving multiple URIs to CachedImage is not yet supported.
            If you want to see this feature supported, please file and issue at
             https://github.com/wcandillon/react-native-img-cache`);
    }

    return source;
  }

  componentWillMount() {
    const {
      mutable
    } = this.props;
    const source = this.checkSource(this.props.source);
    this.setState({
      path: undefined
    });

    if (typeof source !== "number" && source.uri) {
      this.observe(source, mutable === true);
    }
  }

  componentWillReceiveProps(nextProps) {
    const {
      mutable
    } = nextProps;
    const source = this.checkSource(nextProps.source);

    if (typeof source !== "number" && source.uri) {
      this.observe(source, mutable === true);
    }
  }

  componentWillUnmount() {
    this.dispose();
  }

}

exports.BaseCachedImage = BaseCachedImage;

class CachedImage extends BaseCachedImage {
  render() {
    const props = this.getProps();
    const {
      error,
      key
    } = this.state;
    const ownProps = this.props;

    if (error) {
      return /*#__PURE__*/_react.default.createElement(_IMGElementContentAlt.default, _extends({}, ownProps, {
        source: {
          uri: ''
        },
        testID: "image-error"
      }));
    }

    if (_react.default.Children.count(this.props.children) > 0) {
      console.warn("Using <CachedImage> with children is deprecated, use <CachedImageBackground> instead.");
    }

    return /*#__PURE__*/_react.default.createElement(_reactNative.Image, _extends({}, props, {
      key: key
    }), this.props.children);
  }

}

exports.CachedImage = CachedImage;

class CachedImageBackground extends BaseCachedImage {
  render() {
    const props = this.getProps();
    return /*#__PURE__*/_react.default.createElement(_reactNative.ImageBackground, props, this.props.children);
  }

}

exports.CachedImageBackground = CachedImageBackground;

class CustomCachedImage extends BaseCachedImage {
  render() {
    const {
      component
    } = this.props;
    const props = this.getProps();
    const Component = component;
    return /*#__PURE__*/_react.default.createElement(Component, props, this.props.children);
  }

}

exports.CustomCachedImage = CustomCachedImage;
//# sourceMappingURL=CachedImage.js.map
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __commonJS = (cb, mod) => () => (mod || cb((mod = {exports: {}}).exports, mod), mod.exports);
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? {get: () => module2.default, enumerable: true} : {value: module2, enumerable: true})), module2);
};

// node_modules/cookie/index.js
var require_cookie = __commonJS((exports) => {
  "use strict";
  exports.parse = parse;
  exports.serialize = serialize;
  var decode = decodeURIComponent;
  var encode = encodeURIComponent;
  var pairSplitRegExp = /; */;
  var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
  function parse(str, options2) {
    if (typeof str !== "string") {
      throw new TypeError("argument str must be a string");
    }
    var obj = {};
    var opt = options2 || {};
    var pairs = str.split(pairSplitRegExp);
    var dec = opt.decode || decode;
    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i];
      var eq_idx = pair.indexOf("=");
      if (eq_idx < 0) {
        continue;
      }
      var key = pair.substr(0, eq_idx).trim();
      var val = pair.substr(++eq_idx, pair.length).trim();
      if (val[0] == '"') {
        val = val.slice(1, -1);
      }
      if (obj[key] == void 0) {
        obj[key] = tryDecode(val, dec);
      }
    }
    return obj;
  }
  function serialize(name, val, options2) {
    var opt = options2 || {};
    var enc = opt.encode || encode;
    if (typeof enc !== "function") {
      throw new TypeError("option encode is invalid");
    }
    if (!fieldContentRegExp.test(name)) {
      throw new TypeError("argument name is invalid");
    }
    var value = enc(val);
    if (value && !fieldContentRegExp.test(value)) {
      throw new TypeError("argument val is invalid");
    }
    var str = name + "=" + value;
    if (opt.maxAge != null) {
      var maxAge = opt.maxAge - 0;
      if (isNaN(maxAge) || !isFinite(maxAge)) {
        throw new TypeError("option maxAge is invalid");
      }
      str += "; Max-Age=" + Math.floor(maxAge);
    }
    if (opt.domain) {
      if (!fieldContentRegExp.test(opt.domain)) {
        throw new TypeError("option domain is invalid");
      }
      str += "; Domain=" + opt.domain;
    }
    if (opt.path) {
      if (!fieldContentRegExp.test(opt.path)) {
        throw new TypeError("option path is invalid");
      }
      str += "; Path=" + opt.path;
    }
    if (opt.expires) {
      if (typeof opt.expires.toUTCString !== "function") {
        throw new TypeError("option expires is invalid");
      }
      str += "; Expires=" + opt.expires.toUTCString();
    }
    if (opt.httpOnly) {
      str += "; HttpOnly";
    }
    if (opt.secure) {
      str += "; Secure";
    }
    if (opt.sameSite) {
      var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
      switch (sameSite) {
        case true:
          str += "; SameSite=Strict";
          break;
        case "lax":
          str += "; SameSite=Lax";
          break;
        case "strict":
          str += "; SameSite=Strict";
          break;
        case "none":
          str += "; SameSite=None";
          break;
        default:
          throw new TypeError("option sameSite is invalid");
      }
    }
    return str;
  }
  function tryDecode(str, decode2) {
    try {
      return decode2(str);
    } catch (e) {
      return str;
    }
  }
});

// node_modules/style-vendorizer/dist/cjs/bundle.min.js
var require_bundle_min = __commonJS((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", {value: true});
  var r = new Map([["align-self", "-ms-grid-row-align"], ["color-adjust", "-webkit-print-color-adjust"], ["column-gap", "grid-column-gap"], ["gap", "grid-gap"], ["grid-template-columns", "-ms-grid-columns"], ["grid-template-rows", "-ms-grid-rows"], ["justify-self", "-ms-grid-column-align"], ["margin-inline-end", "-webkit-margin-end"], ["margin-inline-start", "-webkit-margin-start"], ["overflow-wrap", "word-wrap"], ["padding-inline-end", "-webkit-padding-end"], ["padding-inline-start", "-webkit-padding-start"], ["row-gap", "grid-row-gap"], ["scroll-margin-bottom", "scroll-snap-margin-bottom"], ["scroll-margin-left", "scroll-snap-margin-left"], ["scroll-margin-right", "scroll-snap-margin-right"], ["scroll-margin-top", "scroll-snap-margin-top"], ["scroll-margin", "scroll-snap-margin"], ["text-combine-upright", "-ms-text-combine-horizontal"]]);
  exports.cssPropertyAlias = function(i) {
    return r.get(i);
  }, exports.cssPropertyPrefixFlags = function(r2) {
    var i = /^(?:(text-(?:decoration$|e|or|si)|back(?:ground-cl|d|f)|box-d|(?:mask(?:$|-[ispro]|-cl)))|(tab-|column(?!-s)|text-align-l)|(ap)|(u|hy))/i.exec(r2);
    return i ? i[1] ? 1 : i[2] ? 2 : i[3] ? 3 : 5 : 0;
  }, exports.cssValuePrefixFlags = function(r2, i) {
    var t = /^(?:(pos)|(background-i)|((?:max-|min-)?(?:block-s|inl|he|widt))|(dis))/i.exec(r2);
    return t ? t[1] ? /^sti/i.test(i) ? 1 : 0 : t[2] ? /^image-/i.test(i) ? 1 : 0 : t[3] ? i[3] === "-" ? 2 : 0 : /^(inline-)?grid$/i.test(i) ? 4 : 0 : 0;
  };
});

// node_modules/twind/twind.cjs
var require_twind = __commonJS((exports) => {
  var __create2 = Object.create;
  var __defProp2 = Object.defineProperty;
  var __getProtoOf2 = Object.getPrototypeOf;
  var __hasOwnProp2 = Object.prototype.hasOwnProperty;
  var __getOwnPropNames2 = Object.getOwnPropertyNames;
  var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __assign = Object.assign;
  var __markAsModule2 = (target) => __defProp2(target, "__esModule", {value: true});
  var __rest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp2.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var __export2 = (target, all) => {
    for (var name in all)
      __defProp2(target, name, {get: all[name], enumerable: true});
  };
  var __exportStar = (target, module22, desc) => {
    if (module22 && typeof module22 === "object" || typeof module22 === "function") {
      for (let key of __getOwnPropNames2(module22))
        if (!__hasOwnProp2.call(target, key) && key !== "default")
          __defProp2(target, key, {get: () => module22[key], enumerable: !(desc = __getOwnPropDesc2(module22, key)) || desc.enumerable});
    }
    return target;
  };
  var __toModule2 = (module22) => {
    return __exportStar(__markAsModule2(__defProp2(module22 != null ? __create2(__getProtoOf2(module22)) : {}, "default", module22 && module22.__esModule && "default" in module22 ? {get: () => module22.default, enumerable: true} : {value: module22, enumerable: true})), module22);
  };
  __markAsModule2(exports);
  __export2(exports, {
    apply: () => apply2,
    autoprefix: () => autoprefix2,
    create: () => create2,
    cssomSheet: () => cssomSheet2,
    directive: () => directive2,
    hash: () => cyrb32,
    mode: () => mode2,
    noprefix: () => noprefix2,
    setup: () => setup2,
    silent: () => silent2,
    strict: () => strict2,
    theme: () => theme2,
    tw: () => tw2,
    voidSheet: () => voidSheet2,
    warn: () => warn2
  });
  var import_url2 = __toModule2(require("url"));
  var shim_import_meta_url = (0, import_url2.pathToFileURL)(__filename);
  var includes = (value, search) => !!~value.indexOf(search);
  var join = (parts, separator = "-") => parts.join(separator);
  var joinTruthy = (parts, separator) => join(parts.filter(Boolean), separator);
  var tail = (array, startIndex = 1) => array.slice(startIndex);
  var identity2 = (value) => value;
  var noop3 = () => {
  };
  var capitalize = (value) => value[0].toUpperCase() + tail(value);
  var hyphenate = (value) => value.replace(/[A-Z]/g, "-$&").toLowerCase();
  var evalThunk = (value, context) => {
    while (typeof value == "function") {
      value = value(context);
    }
    return value;
  };
  var ensureMaxSize = (map, max) => {
    if (map.size > max) {
      map.delete(map.keys().next().value);
    }
  };
  var isCSSProperty = (key, value) => !includes("@:&", key[0]) && (includes("rg", (typeof value)[5]) || Array.isArray(value));
  var merge = (target, source, context) => source ? Object.keys(source).reduce((target2, key) => {
    const value = evalThunk(source[key], context);
    if (isCSSProperty(key, value)) {
      target2[hyphenate(key)] = value;
    } else {
      target2[key] = key[0] == "@" && includes("figa", key[1]) ? (target2[key] || []).concat(value) : merge(target2[key] || {}, value, context);
    }
    return target2;
  }, target) : target;
  var escape3 = typeof CSS !== "undefined" && CSS.escape || ((className) => className.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& "));
  var buildMediaQuery = (screen) => {
    if (!Array.isArray(screen)) {
      screen = [screen];
    }
    return "@media " + join(screen.map((screen2) => {
      if (typeof screen2 == "string") {
        screen2 = {min: screen2};
      }
      return screen2.raw || join(Object.keys(screen2).map((feature) => `(${feature}-width:${screen2[feature]})`), " and ");
    }), ",");
  };
  var cyrb32 = (value) => {
    for (var h = 9, index2 = value.length; index2--; ) {
      h = Math.imul(h ^ value.charCodeAt(index2), 1597334677);
    }
    return "tw-" + ((h ^ h >>> 9) >>> 0).toString(36);
  };
  var sortedInsertionIndex = (array, element) => {
    let high = array.length;
    if (high == 0)
      return 0;
    for (let low = 0; low < high; ) {
      const pivot = high + low >> 1;
      if (array[pivot] <= element) {
        low = pivot + 1;
      } else {
        high = pivot;
      }
    }
    return high;
  };
  var groupings;
  var rules;
  var startGrouping = (value = "") => {
    groupings.push(value);
    return "";
  };
  var endGrouping = (isWhitespace) => {
    groupings.length = Math.max(groupings.lastIndexOf("") + ~~isWhitespace, 0);
  };
  var onlyPrefixes = (s2) => s2 && !includes("!:", s2[0]);
  var onlyVariants = (s2) => s2[0] == ":";
  var addRule = (directive22, negate) => {
    rules.push({
      v: groupings.filter(onlyVariants),
      d: directive22,
      n: negate,
      i: includes(groupings, "!"),
      $: ""
    });
  };
  var saveRule = (buffer) => {
    const negate = buffer[0] == "-";
    if (negate) {
      buffer = tail(buffer);
    }
    const prefix = join(groupings.filter(onlyPrefixes));
    addRule(buffer == "&" ? prefix : (prefix && prefix + "-") + buffer, negate);
    return "";
  };
  var parseString = (token, isVariant) => {
    let buffer = "";
    for (let char, dynamic = false, position2 = 0; char = token[position2++]; ) {
      if (dynamic || char == "[") {
        buffer += char;
        dynamic = char != "]";
        continue;
      }
      switch (char) {
        case ":":
          buffer = buffer && startGrouping(":" + (token[position2] == char ? token[position2++] : "") + buffer);
          break;
        case "(":
          buffer = buffer && startGrouping(buffer);
          startGrouping();
          break;
        case "!":
          startGrouping(char);
          break;
        case ")":
        case " ":
        case "	":
        case "\n":
        case "\r":
          buffer = buffer && saveRule(buffer);
          endGrouping(char !== ")");
          break;
        default:
          buffer += char;
      }
    }
    if (buffer) {
      if (isVariant) {
        startGrouping(":" + buffer);
      } else if (buffer.slice(-1) == "-") {
        startGrouping(buffer.slice(0, -1));
      } else {
        saveRule(buffer);
      }
    }
  };
  var parseGroupedToken = (token) => {
    startGrouping();
    parseToken(token);
    endGrouping();
  };
  var parseGroup = (key, token) => {
    if (token) {
      startGrouping();
      const isVariant = includes("tbu", (typeof token)[1]);
      parseString(key, isVariant);
      if (isVariant) {
        parseGroupedToken(token);
      }
      endGrouping();
    }
  };
  var parseToken = (token) => {
    switch (typeof token) {
      case "string":
        parseString(token);
        break;
      case "function":
        addRule(token);
        break;
      case "object":
        if (Array.isArray(token)) {
          token.forEach(parseGroupedToken);
        } else if (token) {
          Object.keys(token).forEach((key) => {
            parseGroup(key, token[key]);
          });
        }
    }
  };
  var staticsCaches = new WeakMap();
  var buildStatics = (strings) => {
    let statics = staticsCaches.get(strings);
    if (!statics) {
      let slowModeIndex = NaN;
      let buffer = "";
      statics = strings.map((token, index2) => {
        if (slowModeIndex !== slowModeIndex && (token.slice(-1) == "[" || includes(":-(", (strings[index2 + 1] || "")[0]))) {
          slowModeIndex = index2;
        }
        if (index2 >= slowModeIndex) {
          return (interpolation) => {
            if (index2 == slowModeIndex) {
              buffer = "";
            }
            buffer += token;
            if (includes("rg", (typeof interpolation)[5])) {
              buffer += interpolation;
            } else if (interpolation) {
              parseString(buffer);
              buffer = "";
              parseToken(interpolation);
            }
            if (index2 == strings.length - 1) {
              parseString(buffer);
            }
          };
        }
        const staticRules = rules = [];
        parseString(token);
        const activeGroupings = [...groupings];
        rules = [];
        return (interpolation) => {
          rules.push(...staticRules);
          groupings = [...activeGroupings];
          if (interpolation) {
            parseToken(interpolation);
          }
        };
      });
      staticsCaches.set(strings, statics);
    }
    return statics;
  };
  var parse = (tokens) => {
    groupings = [];
    rules = [];
    if (Array.isArray(tokens[0]) && Array.isArray(tokens[0].raw)) {
      buildStatics(tokens[0]).forEach((apply22, index2) => apply22(tokens[index2 + 1]));
    } else {
      parseToken(tokens);
    }
    return rules;
  };
  var isFunctionFree;
  var detectFunction = (key, value) => {
    if (typeof value == "function") {
      isFunctionFree = false;
    }
    return value;
  };
  var stringify = (data) => {
    isFunctionFree = true;
    const key = JSON.stringify(data, detectFunction);
    return isFunctionFree && key;
  };
  var cacheByFactory = new WeakMap();
  var directive2 = (factory, data) => {
    const key = stringify(data);
    let directive22;
    if (key) {
      var cache = cacheByFactory.get(factory);
      if (!cache) {
        cacheByFactory.set(factory, cache = new Map());
      }
      directive22 = cache.get(key);
    }
    if (!directive22) {
      directive22 = Object.defineProperty((params, context) => {
        context = Array.isArray(params) ? context : params;
        return evalThunk(factory(data, context), context);
      }, "toJSON", {
        value: () => key || data
      });
      if (cache) {
        cache.set(key, directive22);
        ensureMaxSize(cache, 1e4);
      }
    }
    return directive22;
  };
  var applyFactory = (tokens, {css: css2}) => css2(parse(tokens));
  var apply2 = (...tokens) => directive2(applyFactory, tokens);
  var positions = (resolve2) => (value, position2, prefix, suffix) => {
    if (value) {
      const properties = position2 && resolve2(position2);
      if (properties && properties.length > 0) {
        return properties.reduce((declarations, property2) => {
          declarations[joinTruthy([prefix, property2, suffix])] = value;
          return declarations;
        }, {});
      }
    }
  };
  var corners = /* @__PURE__ */ positions((key) => ({
    t: ["top-left", "top-right"],
    r: ["top-right", "bottom-right"],
    b: ["bottom-left", "bottom-right"],
    l: ["bottom-left", "top-left"],
    tl: ["top-left"],
    tr: ["top-right"],
    bl: ["bottom-left"],
    br: ["bottom-right"]
  })[key]);
  var expandEdges = (key) => {
    const parts = ({x: "lr", y: "tb"}[key] || key || "").split("").sort();
    for (let index2 = parts.length; index2--; ) {
      if (!(parts[index2] = {
        t: "top",
        r: "right",
        b: "bottom",
        l: "left"
      }[parts[index2]]))
        return;
    }
    if (parts.length)
      return parts;
  };
  var edges = /* @__PURE__ */ positions(expandEdges);
  var _;
  var __;
  var $;
  var toColumnsOrRows = (x) => x == "cols" ? "columns" : "rows";
  var property = (property2) => (params, context, id) => ({
    [property2]: id + ((_ = join(params)) && "-" + _)
  });
  var propertyValue = (property2, separator) => (params, context, id) => (_ = join(params, separator)) && {
    [property2 || id]: _
  };
  var themeProperty = (section) => (params, {theme: theme22}, id) => (_ = theme22(section || id, params)) && {
    [section || id]: _
  };
  var themePropertyFallback = (section, separator) => (params, {theme: theme22}, id) => (_ = theme22(section || id, params, join(params, separator))) && {
    [section || id]: _
  };
  var alias = (handler, name) => (params, context) => handler(params, context, name);
  var display = property("display");
  var position = property("position");
  var textTransform = property("textTransform");
  var textDecoration = property("textDecoration");
  var fontStyle = property("fontStyle");
  var fontVariantNumeric = (key) => (params, context, id) => ({
    ["--tw-" + key]: id,
    fontVariantNumeric: "var(--tw-ordinal,/*!*/ /*!*/) var(--tw-slashed-zero,/*!*/ /*!*/) var(--tw-numeric-figure,/*!*/ /*!*/) var(--tw-numeric-spacing,/*!*/ /*!*/) var(--tw-numeric-fraction,/*!*/ /*!*/)"
  });
  var inset = (params, {theme: theme22}, id) => (_ = theme22("inset", params)) && {[id]: _};
  var opacityProperty = (params, theme22, id, section = id) => (_ = theme22(section + "Opacity", tail(params))) && {
    [`--tw-${id}-opacity`]: _
  };
  var parseColorComponent = (chars2, factor) => Math.round(parseInt(chars2, 16) * factor);
  var asRGBA = (color, opacityProperty2, opacityDefault) => {
    if (color && color[0] == "#" && (_ = (color.length - 1) / 3) && ($ = [17, 1, 0.062272][_ - 1])) {
      return `rgba(${parseColorComponent(color.substr(1, _), $)},${parseColorComponent(color.substr(1 + _, _), $)},${parseColorComponent(color.substr(1 + 2 * _, _), $)},${opacityProperty2 ? `var(--tw-${opacityProperty2}${opacityDefault ? "," + opacityDefault : ""})` : opacityDefault || 1})`;
    }
    return color;
  };
  var withOpacityFallback = (property2, kind, color) => color && typeof color == "string" ? (_ = asRGBA(color, kind + "-opacity")) && _ !== color ? {
    [`--tw-${kind}-opacity`]: "1",
    [property2]: [color, _]
  } : {[property2]: color} : void 0;
  var transparentTo = (color) => ($ = asRGBA(color, "", "0")) == _ ? "transparent" : $;
  var reversableEdge = (params, {theme: theme22}, id, section, prefix, suffix) => (_ = {x: ["right", "left"], y: ["bottom", "top"]}[params[0]]) && ($ = `--tw-${id}-${params[0]}-reverse`) ? params[1] == "reverse" ? {
    [$]: "1"
  } : {
    [$]: "0",
    [joinTruthy([prefix, _[0], suffix])]: (__ = theme22(section, tail(params))) && `calc(${__} * var(${$}))`,
    [joinTruthy([prefix, _[1], suffix])]: __ && [__, `calc(${__} * calc(1 - var(${$})))`]
  } : void 0;
  var placeHelper = (property2, params) => params[0] && {
    [property2]: (includes("wun", (params[0] || "")[3]) ? "space-" : "") + params[0]
  };
  var contentPluginFor = (property2) => (params) => includes(["start", "end"], params[0]) ? {[property2]: "flex-" + params[0]} : placeHelper(property2, params);
  var gridPlugin = (kind) => (params, {theme: theme22}) => {
    if (_ = theme22("grid" + capitalize(kind), params, "")) {
      return {["grid-" + kind]: _};
    }
    switch (params[0]) {
      case "span":
        return params[1] && {
          ["grid-" + kind]: `span ${params[1]} / span ${params[1]}`
        };
      case "start":
      case "end":
        return (_ = theme22("grid" + capitalize(kind) + capitalize(params[0]), tail(params), join(tail(params)))) && {
          [`grid-${kind}-${params[0]}`]: _
        };
    }
  };
  var border = (params, {theme: theme22}, id) => {
    switch (params[0]) {
      case "solid":
      case "dashed":
      case "dotted":
      case "double":
      case "none":
        return propertyValue("borderStyle")(params);
      case "collapse":
      case "separate":
        return propertyValue("borderCollapse")(params);
      case "opacity":
        return opacityProperty(params, theme22, id);
    }
    return (_ = theme22(id + "Width", params, "")) ? {borderWidth: _} : withOpacityFallback("borderColor", id, theme22(id + "Color", params));
  };
  var transform = (gpu) => (gpu ? "translate3d(var(--tw-translate-x,0),var(--tw-translate-y,0),0)" : "translateX(var(--tw-translate-x,0)) translateY(var(--tw-translate-y,0))") + " rotate(var(--tw-rotate,0)) skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1))";
  var transformXYFunction = (params, context, id) => params[0] && (_ = context.theme(id, params[1] || params[0])) && {
    [`--tw-${id}-x`]: params[0] !== "y" && _,
    [`--tw-${id}-y`]: params[0] !== "x" && _,
    transform: [`${id}${params[1] ? params[0].toUpperCase() : ""}(${_})`, transform()]
  };
  var edgesPluginFor = (key) => (params, context, id) => id[1] ? edges(context.theme(key, params), id[1], key) : themeProperty(key)(params, context, id);
  var padding = edgesPluginFor("padding");
  var margin = edgesPluginFor("margin");
  var minMax = (params, {theme: theme22}, id) => (_ = {w: "width", h: "height"}[params[0]]) && {
    [_ = `${id}${capitalize(_)}`]: theme22(_, tail(params))
  };
  var filter = (params, {theme: theme22}, id) => {
    const parts = id.split("-");
    const prefix = parts[0] == "backdrop" ? parts[0] + "-" : "";
    if (!prefix) {
      params.unshift(...parts);
    }
    if (params[0] == "filter") {
      const filters = [
        "blur",
        "brightness",
        "contrast",
        "grayscale",
        "hue-rotate",
        "invert",
        prefix && "opacity",
        "saturate",
        "sepia",
        !prefix && "drop-shadow"
      ].filter(Boolean);
      return params[1] == "none" ? {filter: "none"} : filters.reduce((css2, key) => {
        css2["--tw-" + prefix + key] = "var(--tw-empty,/*!*/ /*!*/)";
        return css2;
      }, {
        filter: filters.map((key) => `var(--tw-${prefix}${key})`).join(" ")
      });
    }
    $ = params.shift();
    if (includes(["hue", "drop"], $))
      $ += capitalize(params.shift());
    return (_ = theme22(prefix ? "backdrop" + capitalize($) : $, params)) && {
      ["--tw-" + prefix + $]: (Array.isArray(_) ? _ : [_]).map((_4) => `${hyphenate($)}(${_4})`).join(" ")
    };
  };
  var corePlugins = {
    group: (params, {tag}, id) => tag(join([id, ...params])),
    hidden: alias(display, "none"),
    inline: display,
    block: display,
    contents: display,
    flow: display,
    table: (params, context, id) => includes(["auto", "fixed"], params[0]) ? {tableLayout: params[0]} : display(params, context, id),
    flex(params, context, id) {
      switch (params[0]) {
        case "row":
        case "col":
          return {
            flexDirection: join(params[0] == "col" ? ["column", ...tail(params)] : params)
          };
        case "nowrap":
        case "wrap":
          return {flexWrap: join(params)};
        case "grow":
        case "shrink":
          _ = context.theme("flex" + capitalize(params[0]), tail(params), params[1] || 1);
          return _ != null && {
            ["flex-" + params[0]]: "" + _
          };
      }
      return (_ = context.theme("flex", params, "")) ? {flex: _} : display(params, context, id);
    },
    grid(params, context, id) {
      switch (params[0]) {
        case "cols":
        case "rows":
          return (_ = context.theme("gridTemplate" + capitalize(toColumnsOrRows(params[0])), tail(params), params.length == 2 && Number(params[1]) ? `repeat(${params[1]},minmax(0,1fr))` : join(tail(params)))) && {
            ["gridTemplate-" + toColumnsOrRows(params[0])]: _
          };
        case "flow":
          return params.length > 1 && {
            gridAutoFlow: join(params[1] == "col" ? ["column", ...tail(params, 2)] : tail(params), " ")
          };
      }
      return display(params, context, id);
    },
    auto: (params, {theme: theme22}) => includes(["cols", "rows"], params[0]) && (_ = theme22("gridAuto" + capitalize(toColumnsOrRows(params[0])), tail(params), join(tail(params)))) && {
      ["gridAuto-" + toColumnsOrRows(params[0])]: _
    },
    static: position,
    fixed: position,
    absolute: position,
    relative: position,
    sticky: position,
    visible: {visibility: "visible"},
    invisible: {visibility: "hidden"},
    antialiased: {
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale"
    },
    "subpixel-antialiased": {
      WebkitFontSmoothing: "auto",
      MozOsxFontSmoothing: "auto"
    },
    truncate: {
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis"
    },
    "sr-only": {
      position: "absolute",
      width: "1px",
      height: "1px",
      padding: "0",
      margin: "-1px",
      overflow: "hidden",
      whiteSpace: "nowrap",
      clip: "rect(0,0,0,0)",
      borderWidth: "0"
    },
    "not-sr-only": {
      position: "static",
      width: "auto",
      height: "auto",
      padding: "0",
      margin: "0",
      overflow: "visible",
      whiteSpace: "normal",
      clip: "auto"
    },
    resize: (params) => ({
      resize: {x: "vertical", y: "horizontal"}[params[0]] || params[0] || "both"
    }),
    box: (params) => params[0] && {boxSizing: params[0] + "-box"},
    appearance: propertyValue(),
    cursor: themePropertyFallback(),
    float: propertyValue(),
    clear: propertyValue(),
    decoration: propertyValue("boxDecorationBreak"),
    isolate: {isolation: "isolate"},
    isolation: propertyValue(),
    "mix-blend": propertyValue("mixBlendMode"),
    top: inset,
    right: inset,
    bottom: inset,
    left: inset,
    inset: (params, {theme: theme22}) => (_ = expandEdges(params[0])) ? edges(theme22("inset", tail(params)), params[0]) : (_ = theme22("inset", params)) && {
      top: _,
      right: _,
      bottom: _,
      left: _
    },
    underline: textDecoration,
    "line-through": textDecoration,
    "no-underline": alias(textDecoration, "none"),
    "text-underline": alias(textDecoration, "underline"),
    "text-no-underline": alias(textDecoration, "none"),
    "text-line-through": alias(textDecoration, "line-through"),
    uppercase: textTransform,
    lowercase: textTransform,
    capitalize: textTransform,
    "normal-case": alias(textTransform, "none"),
    "text-normal-case": alias(textTransform, "none"),
    italic: fontStyle,
    "not-italic": alias(fontStyle, "normal"),
    "font-italic": alias(fontStyle, "italic"),
    "font-not-italic": alias(fontStyle, "normal"),
    font: (params, context, id) => (_ = context.theme("fontFamily", params, "")) ? {fontFamily: _} : themeProperty("fontWeight")(params, context, id),
    items: (params) => params[0] && {
      alignItems: includes(["start", "end"], params[0]) ? "flex-" + params[0] : join(params)
    },
    "justify-self": propertyValue(),
    "justify-items": propertyValue(),
    justify: contentPluginFor("justifyContent"),
    content: contentPluginFor("alignContent"),
    self: contentPluginFor("alignSelf"),
    place: (params) => params[0] && placeHelper("place-" + params[0], tail(params)),
    overscroll: (params) => params[0] && {
      ["overscrollBehavior" + (params[1] ? "-" + params[0] : "")]: params[1] || params[0]
    },
    col: gridPlugin("column"),
    row: gridPlugin("row"),
    duration: themeProperty("transitionDuration"),
    delay: themeProperty("transitionDelay"),
    tracking: themeProperty("letterSpacing"),
    leading: themeProperty("lineHeight"),
    z: themeProperty("zIndex"),
    opacity: themeProperty(),
    ease: themeProperty("transitionTimingFunction"),
    p: padding,
    py: padding,
    px: padding,
    pt: padding,
    pr: padding,
    pb: padding,
    pl: padding,
    m: margin,
    my: margin,
    mx: margin,
    mt: margin,
    mr: margin,
    mb: margin,
    ml: margin,
    w: themeProperty("width"),
    h: themeProperty("height"),
    min: minMax,
    max: minMax,
    fill: themeProperty(),
    order: themeProperty(),
    origin: themePropertyFallback("transformOrigin", " "),
    select: propertyValue("userSelect"),
    "pointer-events": propertyValue(),
    align: propertyValue("verticalAlign"),
    whitespace: propertyValue("whiteSpace"),
    "normal-nums": {fontVariantNumeric: "normal"},
    ordinal: fontVariantNumeric("ordinal"),
    "slashed-zero": fontVariantNumeric("slashed-zero"),
    "lining-nums": fontVariantNumeric("numeric-figure"),
    "oldstyle-nums": fontVariantNumeric("numeric-figure"),
    "proportional-nums": fontVariantNumeric("numeric-spacing"),
    "tabular-nums": fontVariantNumeric("numeric-spacing"),
    "diagonal-fractions": fontVariantNumeric("numeric-fraction"),
    "stacked-fractions": fontVariantNumeric("numeric-fraction"),
    overflow: (params, context, id) => includes(["ellipsis", "clip"], params[0]) ? propertyValue("textOverflow")(params) : params[1] ? {["overflow-" + params[0]]: params[1]} : propertyValue()(params, context, id),
    transform: (params) => params[0] == "none" ? {transform: "none"} : {
      "--tw-translate-x": "0",
      "--tw-translate-y": "0",
      "--tw-rotate": "0",
      "--tw-skew-x": "0",
      "--tw-skew-y": "0",
      "--tw-scale-x": "1",
      "--tw-scale-y": "1",
      transform: transform(params[0] == "gpu")
    },
    rotate: (params, {theme: theme22}) => (_ = theme22("rotate", params)) && {
      "--tw-rotate": _,
      transform: [`rotate(${_})`, transform()]
    },
    scale: transformXYFunction,
    translate: transformXYFunction,
    skew: transformXYFunction,
    gap: (params, context, id) => (_ = {x: "column", y: "row"}[params[0]]) ? {[_ + "Gap"]: context.theme("gap", tail(params))} : themeProperty("gap")(params, context, id),
    stroke: (params, context, id) => (_ = context.theme("stroke", params, "")) ? {stroke: _} : themeProperty("strokeWidth")(params, context, id),
    outline: (params, {theme: theme22}) => (_ = theme22("outline", params)) && {
      outline: _[0],
      outlineOffset: _[1]
    },
    "break-normal": {
      wordBreak: "normal",
      overflowWrap: "normal"
    },
    "break-words": {overflowWrap: "break-word"},
    "break-all": {wordBreak: "break-all"},
    text(params, {theme: theme22}, id) {
      switch (params[0]) {
        case "left":
        case "center":
        case "right":
        case "justify":
          return {textAlign: params[0]};
        case "uppercase":
        case "lowercase":
        case "capitalize":
          return textTransform([], _, params[0]);
        case "opacity":
          return opacityProperty(params, theme22, id);
      }
      const fontSize = theme22("fontSize", params, "");
      if (fontSize) {
        return typeof fontSize == "string" ? {fontSize} : __assign({
          fontSize: fontSize[0]
        }, typeof fontSize[1] == "string" ? {lineHeight: fontSize[1]} : fontSize[1]);
      }
      return withOpacityFallback("color", "text", theme22("textColor", params));
    },
    bg(params, {theme: theme22}, id) {
      switch (params[0]) {
        case "fixed":
        case "local":
        case "scroll":
          return propertyValue("backgroundAttachment", ",")(params);
        case "bottom":
        case "center":
        case "left":
        case "right":
        case "top":
          return propertyValue("backgroundPosition", " ")(params);
        case "no":
          return params[1] == "repeat" && propertyValue("backgroundRepeat")(params);
        case "repeat":
          return includes("xy", params[1]) ? propertyValue("backgroundRepeat")(params) : {backgroundRepeat: params[1] || params[0]};
        case "opacity":
          return opacityProperty(params, theme22, id, "background");
        case "clip":
        case "origin":
          return params[1] && {
            ["background-" + params[0]]: params[1] + (params[1] == "text" ? "" : "-box")
          };
        case "blend":
          return propertyValue("background-blend-mode")(tail(params));
        case "gradient":
          if (params[1] == "to" && (_ = expandEdges(params[2]))) {
            return {
              backgroundImage: `linear-gradient(to ${join(_, " ")},var(--tw-gradient-stops))`
            };
          }
      }
      return (_ = theme22("backgroundPosition", params, "")) ? {backgroundPosition: _} : (_ = theme22("backgroundSize", params, "")) ? {backgroundSize: _} : (_ = theme22("backgroundImage", params, "")) ? {backgroundImage: _} : withOpacityFallback("backgroundColor", "bg", theme22("backgroundColor", params));
    },
    from: (params, {theme: theme22}) => (_ = theme22("gradientColorStops", params)) && {
      "--tw-gradient-from": _,
      "--tw-gradient-stops": `var(--tw-gradient-from),var(--tw-gradient-to,${transparentTo(_)})`
    },
    via: (params, {theme: theme22}) => (_ = theme22("gradientColorStops", params)) && {
      "--tw-gradient-stops": `var(--tw-gradient-from),${_},var(--tw-gradient-to,${transparentTo(_)})`
    },
    to: (params, {theme: theme22}) => (_ = theme22("gradientColorStops", params)) && {
      "--tw-gradient-to": _
    },
    border: (params, context, id) => expandEdges(params[0]) ? edges(context.theme("borderWidth", tail(params)), params[0], "border", "width") : border(params, context, id),
    divide: (params, context, id) => (_ = reversableEdge(params, context, id, "divideWidth", "border", "width") || border(params, context, id)) && {
      "&>:not([hidden])~:not([hidden])": _
    },
    space: (params, context, id) => (_ = reversableEdge(params, context, id, "space", "margin")) && {
      "&>:not([hidden])~:not([hidden])": _
    },
    placeholder: (params, {theme: theme22}, id) => (_ = params[0] == "opacity" ? opacityProperty(params, theme22, id) : withOpacityFallback("color", "placeholder", theme22("placeholderColor", params))) && {
      "&::placeholder": _
    },
    shadow: (params, {theme: theme22}) => (_ = theme22("boxShadow", params)) && {
      ":global": {
        "*": {
          "--tw-shadow": "0 0 transparent"
        }
      },
      "--tw-shadow": _ == "none" ? "0 0 transparent" : _,
      boxShadow: [
        _,
        `var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)`
      ]
    },
    animate: (params, {theme: theme22, tag}) => {
      if ($ = theme22("animation", params)) {
        const parts = $.split(" ");
        if ((_ = theme22("keyframes", parts[0], __ = {})) !== __) {
          return ($ = tag(parts[0])) && {
            animation: $ + " " + join(tail(parts), " "),
            ["@keyframes " + $]: _
          };
        }
        return {animation: $};
      }
    },
    ring(params, {theme: theme22}, id) {
      switch (params[0]) {
        case "inset":
          return {"--tw-ring-inset": "inset"};
        case "opacity":
          return opacityProperty(params, theme22, id);
        case "offset":
          return (_ = theme22("ringOffsetWidth", tail(params), "")) ? {
            "--tw-ring-offset-width": _
          } : {
            "--tw-ring-offset-color": theme22("ringOffsetColor", tail(params))
          };
      }
      return (_ = theme22("ringWidth", params, "")) ? {
        "--tw-ring-offset-shadow": `var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`,
        "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(${_} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
        boxShadow: `var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent)`,
        ":global": {
          "*": {
            "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
            "--tw-ring-offset-width": theme22("ringOffsetWidth", "", "0px"),
            "--tw-ring-offset-color": theme22("ringOffsetColor", "", "#fff"),
            "--tw-ring-color": asRGBA(theme22("ringColor", "", "#93c5fd"), "ring-opacity", theme22("ringOpacity", "", "0.5")),
            "--tw-ring-offset-shadow": "0 0 transparent",
            "--tw-ring-shadow": "0 0 transparent"
          }
        }
      } : {
        "--tw-ring-opacity": "1",
        "--tw-ring-color": asRGBA(theme22("ringColor", params), "ring-opacity")
      };
    },
    object: (params, context, id) => includes(["contain", "cover", "fill", "none", "scale-down"], join(params)) ? {objectFit: join(params)} : themePropertyFallback("objectPosition", " ")(params, context, id),
    list: (params, context, id) => join(params) == "item" ? display(params, context, id) : includes(["inside", "outside"], join(params)) ? {listStylePosition: params[0]} : themePropertyFallback("listStyleType")(params, context, id),
    rounded: (params, context, id) => corners(context.theme("borderRadius", tail(params), ""), params[0], "border", "radius") || themeProperty("borderRadius")(params, context, id),
    "transition-none": {transitionProperty: "none"},
    transition: (params, {theme: theme22}) => ({
      transitionProperty: theme22("transitionProperty", params),
      transitionTimingFunction: theme22("transitionTimingFunction", ""),
      transitionDuration: theme22("transitionDuration", "")
    }),
    container: (params, {theme: theme22}) => {
      const {screens = theme22("screens"), center, padding: padding2} = theme22("container");
      const paddingFor = (screen) => (_ = padding2 && (typeof padding2 == "string" ? padding2 : padding2[screen] || padding2.DEFAULT)) ? {
        paddingRight: _,
        paddingLeft: _
      } : {};
      return Object.keys(screens).reduce((rules2, screen) => {
        if (($ = screens[screen]) && typeof $ == "string") {
          rules2[buildMediaQuery($)] = {
            "&": __assign({
              "max-width": $
            }, paddingFor(screen))
          };
        }
        return rules2;
      }, __assign(__assign({
        width: "100%"
      }, center ? {marginRight: "auto", marginLeft: "auto"} : {}), paddingFor("xs")));
    },
    filter,
    blur: filter,
    brightness: filter,
    contrast: filter,
    grayscale: filter,
    "hue-rotate": filter,
    invert: filter,
    saturate: filter,
    sepia: filter,
    "drop-shadow": filter,
    backdrop: filter
  };
  var createPreflight = (theme22) => ({
    ":root": {tabSize: 4},
    "body,blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre,fieldset,ol,ul": {margin: "0"},
    button: {backgroundColor: "transparent", backgroundImage: "none"},
    'button,[type="button"],[type="reset"],[type="submit"]': {WebkitAppearance: "button"},
    "button:focus": {outline: ["1px dotted", "5px auto -webkit-focus-ring-color"]},
    "fieldset,ol,ul,legend": {padding: "0"},
    "ol,ul": {listStyle: "none"},
    html: {
      lineHeight: "1.5",
      WebkitTextSizeAdjust: "100%",
      fontFamily: theme22("fontFamily.sans", "ui-sans-serif,system-ui,sans-serif")
    },
    body: {fontFamily: "inherit", lineHeight: "inherit"},
    "*,::before,::after": {
      boxSizing: "border-box",
      border: `0 solid ${theme22("borderColor.DEFAULT", "currentColor")}`
    },
    hr: {height: "0", color: "inherit", borderTopWidth: "1px"},
    img: {borderStyle: "solid"},
    textarea: {resize: "vertical"},
    "input::placeholder,textarea::placeholder": {
      opacity: "1",
      color: theme22("placeholderColor.DEFAULT", theme22("colors.gray.400", "#a1a1aa"))
    },
    'button,[role="button"]': {cursor: "pointer"},
    table: {textIndent: "0", borderColor: "inherit", borderCollapse: "collapse"},
    "h1,h2,h3,h4,h5,h6": {fontSize: "inherit", fontWeight: "inherit"},
    a: {color: "inherit", textDecoration: "inherit"},
    "button,input,optgroup,select,textarea": {
      fontFamily: "inherit",
      fontSize: "100%",
      margin: "0",
      padding: "0",
      lineHeight: "inherit",
      color: "inherit"
    },
    "button,select": {textTransform: "none"},
    "::-moz-focus-inner": {borderStyle: "none", padding: "0"},
    ":-moz-focusring": {outline: "1px dotted ButtonText"},
    ":-moz-ui-invalid": {boxShadow: "none"},
    progress: {verticalAlign: "baseline"},
    "::-webkit-inner-spin-button,::-webkit-outer-spin-button": {height: "auto"},
    '[type="search"]': {WebkitAppearance: "textfield", outlineOffset: "-2px"},
    "::-webkit-search-decoration": {WebkitAppearance: "none"},
    "::-webkit-file-upload-button": {WebkitAppearance: "button", font: "inherit"},
    summary: {display: "list-item"},
    "abbr[title]": {textDecoration: "underline dotted"},
    "b,strong": {fontWeight: "bolder"},
    "pre,code,kbd,samp": {
      fontFamily: theme22("fontFamily", "mono", "ui-monospace,monospace"),
      fontSize: "1em"
    },
    "sub,sup": {fontSize: "75%", lineHeight: "0", position: "relative", verticalAlign: "baseline"},
    sub: {bottom: "-0.25em"},
    sup: {top: "-0.5em"},
    "img,svg,video,canvas,audio,iframe,embed,object": {display: "block", verticalAlign: "middle"},
    "img,video": {maxWidth: "100%", height: "auto"}
  });
  var coreVariants = {
    dark: "@media (prefers-color-scheme:dark)",
    sticky: "@supports ((position: -webkit-sticky) or (position:sticky))",
    "motion-reduce": "@media (prefers-reduced-motion:reduce)",
    "motion-safe": "@media (prefers-reduced-motion:no-preference)",
    first: "&:first-child",
    last: "&:last-child",
    even: "&:nth-child(2n)",
    odd: "&:nth-child(odd)",
    children: "&>*",
    siblings: "&~*",
    sibling: "&+*",
    override: "&&"
  };
  var STYLE_ELEMENT_ID = "__twind";
  var getStyleElement = (nonce) => {
    let element = self[STYLE_ELEMENT_ID];
    if (!element) {
      element = document.head.appendChild(document.createElement("style"));
      element.id = STYLE_ELEMENT_ID;
      nonce && (element.nonce = nonce);
      element.appendChild(document.createTextNode(""));
    }
    return element;
  };
  var cssomSheet2 = ({
    nonce,
    target = getStyleElement(nonce).sheet
  } = {}) => {
    const offset = target.cssRules.length;
    return {
      target,
      insert: (rule, index2) => target.insertRule(rule, offset + index2)
    };
  };
  var voidSheet2 = () => ({
    target: null,
    insert: noop3
  });
  var mode2 = (report) => ({
    unknown(section, key = [], optional, context) {
      if (!optional) {
        this.report({id: "UNKNOWN_THEME_VALUE", key: section + "." + join(key)}, context);
      }
    },
    report(_a) {
      var {id} = _a, info = __rest(_a, ["id"]);
      const message = `[${id}] ${JSON.stringify(info)}`;
      const stack = (new Error(message).stack || message).split("at ");
      for (let frame; (frame = stack.splice(1, 1)[0]) && !/(^|\.)(tw|setup) /.test(frame); ) {
      }
      return report(join(stack, "at "));
    }
  });
  var warn2 = /* @__PURE__ */ mode2((message) => console.warn(message));
  var strict2 = /* @__PURE__ */ mode2((message) => {
    throw new Error(message);
  });
  var silent2 = /* @__PURE__ */ mode2(noop3);
  var import_style_vendorizer = __toModule2(require_bundle_min());
  var noprefix2 = (property2, value, important) => `${property2}:${value}${important ? " !important" : ""}`;
  var autoprefix2 = (property2, value, important) => {
    let cssText = "";
    const propertyAlias = (0, import_style_vendorizer.cssPropertyAlias)(property2);
    if (propertyAlias)
      cssText += `${noprefix2(propertyAlias, value, important)};`;
    let flags = (0, import_style_vendorizer.cssPropertyPrefixFlags)(property2);
    if (flags & 1)
      cssText += `-webkit-${noprefix2(property2, value, important)};`;
    if (flags & 2)
      cssText += `-moz-${noprefix2(property2, value, important)};`;
    if (flags & 4)
      cssText += `-ms-${noprefix2(property2, value, important)};`;
    flags = (0, import_style_vendorizer.cssValuePrefixFlags)(property2, value);
    if (flags & 1)
      cssText += `${noprefix2(property2, `-webkit-${value}`, important)};`;
    if (flags & 2)
      cssText += `${noprefix2(property2, `-moz-${value}`, important)};`;
    if (flags & 4)
      cssText += `${noprefix2(property2, `-ms-${value}`, important)};`;
    cssText += noprefix2(property2, value, important);
    return cssText;
  };
  var ratios = (start, end) => {
    const result = {};
    do {
      for (let dividend = 1; dividend < start; dividend++) {
        result[`${dividend}/${start}`] = Number((dividend / start * 100).toFixed(6)) + "%";
      }
    } while (++start <= end);
    return result;
  };
  var exponential = (stop, unit, start = 0) => {
    const result = {};
    for (; start <= stop; start = start * 2 || 1) {
      result[start] = start + unit;
    }
    return result;
  };
  var linear = (stop, unit = "", divideBy = 1, start = 0, step = 1, result = {}) => {
    for (; start <= stop; start += step) {
      result[start] = start / divideBy + unit;
    }
    return result;
  };
  var alias2 = (section) => (theme22) => theme22(section);
  var themeFactory = (args, {theme: theme22}) => theme22(...args);
  var theme2 = (...args) => directive2(themeFactory, args);
  var defaultTheme = {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px"
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827"
      },
      red: {
        50: "#fef2f2",
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#7f1d1d"
      },
      yellow: {
        50: "#fffbeb",
        100: "#fef3c7",
        200: "#fde68a",
        300: "#fcd34d",
        400: "#fbbf24",
        500: "#f59e0b",
        600: "#d97706",
        700: "#b45309",
        800: "#92400e",
        900: "#78350f"
      },
      green: {
        50: "#ecfdf5",
        100: "#d1fae5",
        200: "#a7f3d0",
        300: "#6ee7b7",
        400: "#34d399",
        500: "#10b981",
        600: "#059669",
        700: "#047857",
        800: "#065f46",
        900: "#064e3b"
      },
      blue: {
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
        900: "#1e3a8a"
      },
      indigo: {
        50: "#eef2ff",
        100: "#e0e7ff",
        200: "#c7d2fe",
        300: "#a5b4fc",
        400: "#818cf8",
        500: "#6366f1",
        600: "#4f46e5",
        700: "#4338ca",
        800: "#3730a3",
        900: "#312e81"
      },
      purple: {
        50: "#f5f3ff",
        100: "#ede9fe",
        200: "#ddd6fe",
        300: "#c4b5fd",
        400: "#a78bfa",
        500: "#8b5cf6",
        600: "#7c3aed",
        700: "#6d28d9",
        800: "#5b21b6",
        900: "#4c1d95"
      },
      pink: {
        50: "#fdf2f8",
        100: "#fce7f3",
        200: "#fbcfe8",
        300: "#f9a8d4",
        400: "#f472b6",
        500: "#ec4899",
        600: "#db2777",
        700: "#be185d",
        800: "#9d174d",
        900: "#831843"
      }
    },
    spacing: __assign(__assign(__assign(__assign(__assign({
      px: "1px",
      0: "0px"
    }, /* @__PURE__ */ linear(4, "rem", 4, 0.5, 0.5)), /* @__PURE__ */ linear(12, "rem", 4, 5)), {
      14: "3.5rem"
    }), /* @__PURE__ */ linear(64, "rem", 4, 16, 4)), {
      72: "18rem",
      80: "20rem",
      96: "24rem"
    }),
    durations: {
      75: "75ms",
      100: "100ms",
      150: "150ms",
      200: "200ms",
      300: "300ms",
      500: "500ms",
      700: "700ms",
      1e3: "1000ms"
    },
    animation: {
      none: "none",
      spin: "spin 1s linear infinite",
      ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      bounce: "bounce 1s infinite"
    },
    backdropBlur: /* @__PURE__ */ alias2("blur"),
    backdropBrightness: /* @__PURE__ */ alias2("brightness"),
    backdropContrast: /* @__PURE__ */ alias2("contrast"),
    backdropGrayscale: /* @__PURE__ */ alias2("grayscale"),
    backdropHueRotate: /* @__PURE__ */ alias2("hueRotate"),
    backdropInvert: /* @__PURE__ */ alias2("invert"),
    backdropOpacity: /* @__PURE__ */ alias2("opacity"),
    backdropSaturate: /* @__PURE__ */ alias2("saturate"),
    backdropSepia: /* @__PURE__ */ alias2("sepia"),
    backgroundColor: /* @__PURE__ */ alias2("colors"),
    backgroundImage: {
      none: "none"
    },
    backgroundOpacity: /* @__PURE__ */ alias2("opacity"),
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain"
    },
    blur: {
      0: "0",
      sm: "4px",
      DEFAULT: "8px",
      md: "12px",
      lg: "16px",
      xl: "24px",
      "2xl": "40px",
      "3xl": "64px"
    },
    brightness: __assign(__assign(__assign({}, /* @__PURE__ */ linear(200, "", 100, 0, 50)), /* @__PURE__ */ linear(110, "", 100, 90, 5)), {
      75: "0.75",
      125: "1.25"
    }),
    borderColor: (theme22) => __assign(__assign({}, theme22("colors")), {
      DEFAULT: theme22("colors.gray.200", "currentColor")
    }),
    borderOpacity: /* @__PURE__ */ alias2("opacity"),
    borderRadius: {
      none: "0px",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      "1/2": "50%",
      full: "9999px"
    },
    borderWidth: __assign({
      DEFAULT: "1px"
    }, /* @__PURE__ */ exponential(8, "px")),
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none"
    },
    contrast: __assign(__assign({}, /* @__PURE__ */ linear(200, "", 100, 0, 50)), {
      75: "0.75",
      125: "1.25"
    }),
    divideColor: /* @__PURE__ */ alias2("borderColor"),
    divideOpacity: /* @__PURE__ */ alias2("borderOpacity"),
    divideWidth: /* @__PURE__ */ alias2("borderWidth"),
    dropShadow: {
      sm: "0 1px 1px rgba(0,0,0,0.05)",
      DEFAULT: ["0 1px 2px rgba(0, 0, 0, 0.1)", "0 1px 1px rgba(0, 0, 0, 0.06)"],
      md: ["0 4px 3px rgba(0, 0, 0, 0.07)", "0 2px 2px rgba(0, 0, 0, 0.06)"],
      lg: ["0 10px 8px rgba(0, 0, 0, 0.04)", "0 4px 3px rgba(0, 0, 0, 0.1)"],
      xl: ["0 20px 13px rgba(0, 0, 0, 0.03)", "0 8px 5px rgba(0, 0, 0, 0.08)"],
      "2xl": "0 25px 25px rgba(0, 0, 0, 0.15)",
      none: "0 0 #0000"
    },
    fill: {current: "currentColor"},
    grayscale: {
      0: "0",
      DEFAULT: "100%"
    },
    hueRotate: {
      0: "0deg",
      15: "15deg",
      30: "30deg",
      60: "60deg",
      90: "90deg",
      180: "180deg"
    },
    invert: {
      0: "0",
      DEFAULT: "100%"
    },
    flex: {
      1: "1 1 0%",
      auto: "1 1 auto",
      initial: "0 1 auto",
      none: "none"
    },
    fontFamily: {
      sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","),
      serif: 'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","),
      mono: 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",")
    },
    fontSize: {
      xs: ["0.75rem", "1rem"],
      sm: ["0.875rem", "1.25rem"],
      base: ["1rem", "1.5rem"],
      lg: ["1.125rem", "1.75rem"],
      xl: ["1.25rem", "1.75rem"],
      "2xl": ["1.5rem", "2rem"],
      "3xl": ["1.875rem", "2.25rem"],
      "4xl": ["2.25rem", "2.5rem"],
      "5xl": ["3rem", "1"],
      "6xl": ["3.75rem", "1"],
      "7xl": ["4.5rem", "1"],
      "8xl": ["6rem", "1"],
      "9xl": ["8rem", "1"]
    },
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900"
    },
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridAutoColumns: {
      min: "min-content",
      max: "max-content",
      fr: "minmax(0,1fr)"
    },
    gridAutoRows: {
      min: "min-content",
      max: "max-content",
      fr: "minmax(0,1fr)"
    },
    gridColumn: {
      auto: "auto",
      "span-full": "1 / -1"
    },
    gridRow: {
      auto: "auto",
      "span-full": "1 / -1"
    },
    gap: /* @__PURE__ */ alias2("spacing"),
    gradientColorStops: /* @__PURE__ */ alias2("colors"),
    height: (theme22) => __assign(__assign(__assign({
      auto: "auto"
    }, theme22("spacing")), ratios(2, 6)), {
      full: "100%",
      screen: "100vh"
    }),
    inset: (theme22) => __assign(__assign(__assign({
      auto: "auto"
    }, theme22("spacing")), ratios(2, 4)), {
      full: "100%"
    }),
    keyframes: {
      spin: {
        from: {
          transform: "rotate(0deg)"
        },
        to: {
          transform: "rotate(360deg)"
        }
      },
      ping: {
        "0%": {
          transform: "scale(1)",
          opacity: "1"
        },
        "75%,100%": {
          transform: "scale(2)",
          opacity: "0"
        }
      },
      pulse: {
        "0%,100%": {
          opacity: "1"
        },
        "50%": {
          opacity: ".5"
        }
      },
      bounce: {
        "0%, 100%": {
          transform: "translateY(-25%)",
          animationTimingFunction: "cubic-bezier(0.8,0,1,1)"
        },
        "50%": {
          transform: "none",
          animationTimingFunction: "cubic-bezier(0,0,0.2,1)"
        }
      }
    },
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0em",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em"
    },
    lineHeight: __assign({
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2"
    }, /* @__PURE__ */ linear(10, "rem", 4, 3)),
    margin: (theme22) => __assign({
      auto: "auto"
    }, theme22("spacing")),
    maxHeight: (theme22) => __assign(__assign({}, theme22("spacing")), {
      full: "100%",
      screen: "100vh"
    }),
    maxWidth: (theme22, {breakpoints}) => __assign({
      none: "none",
      0: "0rem",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem",
      full: "100%",
      min: "min-content",
      max: "max-content",
      prose: "65ch"
    }, breakpoints(theme22("screens"))),
    minHeight: {
      0: "0px",
      full: "100%",
      screen: "100vh"
    },
    minWidth: {
      0: "0px",
      full: "100%",
      min: "min-content",
      max: "max-content"
    },
    opacity: __assign(__assign({}, /* @__PURE__ */ linear(100, "", 100, 0, 10)), {
      5: "0.05",
      25: "0.25",
      75: "0.75",
      95: "0.95"
    }),
    order: __assign({
      first: "-9999",
      last: "9999",
      none: "0"
    }, /* @__PURE__ */ linear(12, "", 1, 1)),
    outline: {
      none: ["2px solid transparent", "2px"],
      white: ["2px dotted white", "2px"],
      black: ["2px dotted black", "2px"]
    },
    padding: /* @__PURE__ */ alias2("spacing"),
    placeholderColor: /* @__PURE__ */ alias2("colors"),
    placeholderOpacity: /* @__PURE__ */ alias2("opacity"),
    ringColor: (theme22) => __assign({
      DEFAULT: theme22("colors.blue.500", "#3b82f6")
    }, theme22("colors")),
    ringOffsetColor: /* @__PURE__ */ alias2("colors"),
    ringOffsetWidth: /* @__PURE__ */ exponential(8, "px"),
    ringOpacity: (theme22) => __assign({
      DEFAULT: "0.5"
    }, theme22("opacity")),
    ringWidth: __assign({
      DEFAULT: "3px"
    }, /* @__PURE__ */ exponential(8, "px")),
    rotate: __assign(__assign(__assign({}, /* @__PURE__ */ exponential(2, "deg")), /* @__PURE__ */ exponential(12, "deg", 3)), /* @__PURE__ */ exponential(180, "deg", 45)),
    saturate: /* @__PURE__ */ linear(200, "", 100, 0, 50),
    scale: __assign(__assign(__assign({}, /* @__PURE__ */ linear(150, "", 100, 0, 50)), /* @__PURE__ */ linear(110, "", 100, 90, 5)), {
      75: "0.75",
      125: "1.25"
    }),
    sepia: {
      0: "0",
      DEFAULT: "100%"
    },
    skew: __assign(__assign({}, /* @__PURE__ */ exponential(2, "deg")), /* @__PURE__ */ exponential(12, "deg", 3)),
    space: /* @__PURE__ */ alias2("spacing"),
    stroke: {
      current: "currentColor"
    },
    strokeWidth: /* @__PURE__ */ linear(2),
    textColor: /* @__PURE__ */ alias2("colors"),
    textOpacity: /* @__PURE__ */ alias2("opacity"),
    transitionDuration: (theme22) => __assign({
      DEFAULT: "150ms"
    }, theme22("durations")),
    transitionDelay: /* @__PURE__ */ alias2("durations"),
    transitionProperty: {
      none: "none",
      all: "all",
      DEFAULT: "background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter",
      colors: "background-color,border-color,color,fill,stroke",
      opacity: "opacity",
      shadow: "box-shadow",
      transform: "transform"
    },
    transitionTimingFunction: {
      DEFAULT: "cubic-bezier(0.4,0,0.2,1)",
      linear: "linear",
      in: "cubic-bezier(0.4,0,1,1)",
      out: "cubic-bezier(0,0,0.2,1)",
      "in-out": "cubic-bezier(0.4,0,0.2,1)"
    },
    translate: (theme22) => __assign(__assign(__assign({}, theme22("spacing")), ratios(2, 4)), {
      full: "100%"
    }),
    width: (theme22) => __assign(__assign(__assign(__assign({
      auto: "auto"
    }, theme22("spacing")), ratios(2, 6)), ratios(12, 12)), {
      screen: "100vw",
      full: "100%",
      min: "min-content",
      max: "max-content"
    }),
    zIndex: __assign({
      auto: "auto"
    }, /* @__PURE__ */ linear(50, "", 1, 0, 10))
  };
  var flattenColorPalette = (colors2, target = {}, prefix = []) => {
    Object.keys(colors2).forEach((property2) => {
      const value = colors2[property2];
      if (property2 == "DEFAULT") {
        target[join(prefix)] = value;
        target[join(prefix, ".")] = value;
      }
      const key = [...prefix, property2];
      target[join(key)] = value;
      target[join(key, ".")] = value;
      if (value && typeof value == "object") {
        flattenColorPalette(value, target, key);
      }
    }, target);
    return target;
  };
  var resolveContext = {
    negative: () => ({}),
    breakpoints: (screens) => Object.keys(screens).filter((key) => typeof screens[key] == "string").reduce((target, key) => {
      target["screen-" + key] = screens[key];
      return target;
    }, {})
  };
  var handleArbitraryValues = (section, key) => (key = key[0] == "[" && key.slice(-1) == "]" && key.slice(1, -1)) && includes(section, "olor") == /^(#|(hsl|rgb)a?\(|[a-z]+$)/.test(key) && (includes(key, "calc(") ? key.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 ") : key);
  var makeThemeResolver = (config) => {
    const cache = new Map();
    const theme22 = __assign(__assign({}, defaultTheme), config);
    const deref = (theme3, section) => {
      const base = theme3 && theme3[section];
      const value = typeof base == "function" ? base(resolve2, resolveContext) : base;
      return value && section == "colors" ? flattenColorPalette(value) : value;
    };
    const resolve2 = (section, key, defaultValue) => {
      const keypath = section.split(".");
      section = keypath[0];
      if (keypath.length > 1) {
        defaultValue = key;
        key = join(tail(keypath), ".");
      }
      let base = cache.get(section);
      if (!base) {
        cache.set(section, base = __assign({}, deref(theme22, section)));
        Object.assign(base, deref(theme22.extend, section));
      }
      if (key != null) {
        key = (Array.isArray(key) ? join(key) : key) || "DEFAULT";
        const value = handleArbitraryValues(section, key) || base[key];
        return value == null ? defaultValue : Array.isArray(value) && !includes(["fontSize", "outline", "dropShadow"], section) ? join(value, ",") : value;
      }
      return base;
    };
    return resolve2;
  };
  var translate = (plugins, context) => (rule, isTranslating) => {
    if (typeof rule.d == "function") {
      return rule.d(context);
    }
    const parameters = rule.d.split(/-(?![^[]*])/g);
    if (!isTranslating && parameters[0] == "tw" && rule.$ == rule.d) {
      return rule.$;
    }
    for (let index2 = parameters.length; index2; index2--) {
      const id = join(parameters.slice(0, index2));
      const plugin = plugins[id];
      if (plugin) {
        return typeof plugin == "function" ? plugin(tail(parameters, index2), context, id) : typeof plugin == "string" ? context[isTranslating ? "css" : "tw"](plugin) : plugin;
      }
    }
  };
  var _2;
  var GROUP_RE = /^:(group(?:(?!-focus).+?)*)-(.+)$/;
  var NOT_PREFIX_RE = /^(:not)-(.+)/;
  var prepareVariantSelector = (variant) => variant[1] == "[" ? tail(variant) : variant;
  var decorate = (darkMode, variants, {theme: theme22, tag}) => {
    const applyVariant = (translation, variant) => {
      if (_2 = theme22("screens", tail(variant), "")) {
        return {[buildMediaQuery(_2)]: translation};
      }
      if (variant == ":dark" && darkMode == "class") {
        return {".dark &": translation};
      }
      if (_2 = GROUP_RE.exec(variant)) {
        return {[`.${escape3(tag(_2[1]))}:${_2[2]} &`]: translation};
      }
      return {
        [variants[tail(variant)] || "&" + variant.replace(NOT_PREFIX_RE, (_4, not, variant2) => not + "(" + prepareVariantSelector(":" + variant2) + ")")]: translation
      };
    };
    return (translation, rule) => rule.v.reduceRight(applyVariant, translation);
  };
  var _3;
  var responsivePrecedence = (css2) => (((_3 = /(?:^|min-width: *)(\d+(?:.\d+)?)(p)?/.exec(css2)) ? +_3[1] / (_3[2] ? 15 : 1) / 10 : 0) & 31) << 22;
  var seperatorPrecedence = (string) => {
    _3 = 0;
    for (let index2 = string.length; index2--; ) {
      _3 += includes("-:,", string[index2]);
    }
    return _3;
  };
  var atRulePresedence = (css2) => (seperatorPrecedence(css2) & 15) << 18;
  var PRECEDENCES_BY_PSEUDO_CLASS = [
    "rst",
    "st",
    "en",
    "d",
    "nk",
    "sited",
    "pty",
    "ecked",
    "cus-w",
    "ver",
    "cus",
    "cus-v",
    "tive",
    "sable",
    "ad-on",
    "tiona",
    "quire"
  ];
  var pseudoPrecedence = (pseudoClass) => 1 << (~(_3 = PRECEDENCES_BY_PSEUDO_CLASS.indexOf(pseudoClass.replace(GROUP_RE, ":$2").slice(3, 8))) ? _3 : 17);
  var makeVariantPresedenceCalculator = (theme22, variants) => (presedence, variant) => presedence | ((_3 = theme22("screens", tail(variant), "")) ? 1 << 27 | responsivePrecedence(buildMediaQuery(_3)) : variant == ":dark" ? 1 << 30 : (_3 = variants[variant] || variant.replace(NOT_PREFIX_RE, ":$2"))[0] == "@" ? atRulePresedence(_3) : pseudoPrecedence(variant));
  var declarationPropertyPrecedence = (property2) => property2[0] == "-" ? 0 : seperatorPrecedence(property2) + ((_3 = /^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.exec(property2)) ? +!!_3[1] || -!!_3[2] : 0) + 1;
  var stringifyBlock = (body, selector) => selector + "{" + body + "}";
  var serialize = (prefix, variants, context) => {
    const {theme: theme22, tag} = context;
    const tagVar = (_4, property2) => "--" + tag(property2);
    const tagVars = (value) => `${value}`.replace(/--(tw-[\w-]+)\b/g, tagVar);
    const stringifyDeclaration = (property2, value, important) => {
      property2 = tagVars(property2);
      return Array.isArray(value) ? join(value.filter(Boolean).map((value2) => prefix(property2, tagVars(value2), important)), ";") : prefix(property2, tagVars(value), important);
    };
    let rules2;
    const stringify3 = (atRules, selector, presedence, css2, important) => {
      if (Array.isArray(css2)) {
        css2.forEach((css22) => css22 && stringify3(atRules, selector, presedence, css22, important));
        return;
      }
      let declarations = "";
      let maxPropertyPresedence = 0;
      let numberOfDeclarations = 0;
      if (css2["@apply"]) {
        css2 = merge(evalThunk(apply2(css2["@apply"]), context), __assign(__assign({}, css2), {"@apply": void 0}), context);
      }
      Object.keys(css2).forEach((key) => {
        const value = evalThunk(css2[key], context);
        if (isCSSProperty(key, value)) {
          if (value !== "" && key.length > 1) {
            const property2 = hyphenate(key);
            numberOfDeclarations += 1;
            maxPropertyPresedence = Math.max(maxPropertyPresedence, declarationPropertyPrecedence(property2));
            declarations = (declarations && declarations + ";") + stringifyDeclaration(property2, value, important);
          }
        } else if (value) {
          if (key == ":global") {
            key = "@global";
          }
          if (key[0] == "@") {
            if (key[1] == "g") {
              stringify3([], "", 0, value, important);
            } else if (key[1] == "f") {
              stringify3([], key, 0, value, important);
            } else if (key[1] == "k") {
              const currentSize = rules2.length;
              stringify3([], "", 0, value, important);
              const waypoints = rules2.splice(currentSize, rules2.length - currentSize);
              rules2.push({
                r: stringifyBlock(join(waypoints.map((p) => p.r), ""), key),
                p: waypoints.reduce((sum, p) => sum + p.p, 0)
              });
            } else if (key[1] == "i") {
              ;
              (Array.isArray(value) ? value : [value]).forEach((value2) => value2 && rules2.push({p: 0, r: `${key} ${value2};`}));
            } else {
              if (key[2] == "c") {
                key = buildMediaQuery(context.theme("screens", tail(key, 8).trim()));
              }
              stringify3([...atRules, key], selector, presedence | responsivePrecedence(key) | atRulePresedence(key), value, important);
            }
          } else {
            stringify3(atRules, selector ? join(selector.split(/,(?![^[]*])/g).map((selectorPart) => join(key.split(/,(?![^[]*])/g).map((keyPart) => includes(keyPart, "&") ? keyPart.replace(/&/g, selectorPart) : (selectorPart && selectorPart + " ") + keyPart), ",")), ",") : key, presedence, value, important);
          }
        }
      });
      if (numberOfDeclarations) {
        rules2.push({
          r: atRules.reduceRight(stringifyBlock, stringifyBlock(declarations, selector)),
          p: presedence * (1 << 8) + ((Math.max(0, 15 - numberOfDeclarations) & 15) << 4 | (maxPropertyPresedence || 15) & 15)
        });
      }
    };
    const variantPresedence = makeVariantPresedenceCalculator(theme22, variants);
    return (css2, className, rule, layer = 0) => {
      layer <<= 28;
      rules2 = [];
      stringify3([], className ? "." + escape3(className) : "", rule ? rule.v.reduceRight(variantPresedence, layer) : layer, css2, rule && rule.i);
      return rules2;
    };
  };
  var inject = (sheet, mode22, init2, context) => {
    let sortedPrecedences;
    init2((value = []) => sortedPrecedences = value);
    let insertedRules;
    init2((value = new Set()) => insertedRules = value);
    return ({r: css2, p: presedence}) => {
      if (!insertedRules.has(css2)) {
        insertedRules.add(css2);
        const index2 = sortedInsertionIndex(sortedPrecedences, presedence);
        try {
          sheet.insert(css2, index2);
          sortedPrecedences.splice(index2, 0, presedence);
        } catch (error2) {
          if (!/:-[mwo]/.test(css2)) {
            mode22.report({id: "INJECT_CSS_ERROR", css: css2, error: error2}, context);
          }
        }
      }
    };
  };
  var sanitize = (value, defaultValue, disabled, enabled = defaultValue) => value === false ? disabled : value === true ? enabled : value || defaultValue;
  var loadMode = (mode22) => (typeof mode22 == "string" ? {t: strict2, a: warn2, i: silent2}[mode22[1]] : mode22) || warn2;
  var stringifyVariant = (selector, variant) => selector + (variant[1] == ":" ? tail(variant, 2) + ":" : tail(variant)) + ":";
  var stringify2 = (rule, directive22 = rule.d) => typeof directive22 == "function" ? "" : rule.v.reduce(stringifyVariant, "") + (rule.i ? "!" : "") + (rule.n ? "-" : "") + directive22;
  var COMPONENT_PROPS = {_: {value: "", writable: true}};
  var configure = (config = {}) => {
    const theme22 = makeThemeResolver(config.theme);
    const mode22 = loadMode(config.mode);
    const hash4 = sanitize(config.hash, false, false, cyrb32);
    const important = config.important;
    let activeRule = {v: []};
    let translateDepth = 0;
    const lastTranslations = [];
    const context = {
      tw: (...tokens) => process2(tokens),
      theme: (section, key, defaultValue) => {
        var _a;
        const value = (_a = theme22(section, key, defaultValue)) != null ? _a : mode22.unknown(section, key == null || Array.isArray(key) ? key : key.split("."), defaultValue != null, context);
        return activeRule.n && value && includes("rg", (typeof value)[5]) ? `calc(${value} * -1)` : value;
      },
      tag: (value) => hash4 ? hash4(value) : value,
      css: (rules2) => {
        translateDepth++;
        const lastTranslationsIndex = lastTranslations.length;
        try {
          ;
          (typeof rules2 == "string" ? parse([rules2]) : rules2).forEach(convert);
          const css2 = Object.create(null, COMPONENT_PROPS);
          for (let index2 = lastTranslationsIndex; index2 < lastTranslations.length; index2++) {
            const translation = lastTranslations[index2];
            if (translation) {
              switch (typeof translation) {
                case "object":
                  merge(css2, translation, context);
                  break;
                case "string":
                  css2._ += (css2._ && " ") + translation;
              }
            }
          }
          return css2;
        } finally {
          lastTranslations.length = lastTranslationsIndex;
          translateDepth--;
        }
      }
    };
    const translate2 = translate(__assign(__assign({}, corePlugins), config.plugins), context);
    const doTranslate = (rule) => {
      const parentRule = activeRule;
      activeRule = rule;
      try {
        return evalThunk(translate2(rule), context);
      } finally {
        activeRule = parentRule;
      }
    };
    const variants = __assign(__assign({}, coreVariants), config.variants);
    const decorate2 = decorate(config.darkMode || "media", variants, context);
    const serialize2 = serialize(sanitize(config.prefix, autoprefix2, noprefix2), variants, context);
    const sheet = config.sheet || (typeof window == "undefined" ? voidSheet2() : cssomSheet2(config));
    const {init: init2 = (callback) => callback()} = sheet;
    const inject2 = inject(sheet, mode22, init2, context);
    let idToClassName;
    init2((value = new Map()) => idToClassName = value);
    const inlineDirectiveName = new WeakMap();
    const evaluateFunctions = (key, value) => key == "_" ? void 0 : typeof value == "function" ? JSON.stringify(evalThunk(value, context), evaluateFunctions) : value;
    const convert = (rule) => {
      if (!translateDepth && activeRule.v.length) {
        rule = __assign(__assign({}, rule), {v: [...activeRule.v, ...rule.v], $: ""});
      }
      if (!rule.$) {
        rule.$ = stringify2(rule, inlineDirectiveName.get(rule.d));
      }
      let className = translateDepth ? null : idToClassName.get(rule.$);
      if (className == null) {
        let translation = doTranslate(rule);
        if (!rule.$) {
          rule.$ = cyrb32(JSON.stringify(translation, evaluateFunctions));
          inlineDirectiveName.set(rule.d, rule.$);
          rule.$ = stringify2(rule, rule.$);
        }
        if (translation && typeof translation == "object") {
          rule.v = rule.v.map(prepareVariantSelector);
          if (important)
            rule.i = important;
          translation = decorate2(translation, rule);
          if (translateDepth) {
            lastTranslations.push(translation);
          } else {
            const layer = typeof rule.d == "function" ? typeof translation._ == "string" ? 1 : 3 : 2;
            className = hash4 || typeof rule.d == "function" ? (hash4 || cyrb32)(layer + rule.$) : rule.$;
            serialize2(translation, className, rule, layer).forEach(inject2);
            if (translation._) {
              className += " " + translation._;
            }
          }
        } else {
          if (typeof translation == "string") {
            className = translation;
          } else {
            className = rule.$;
            mode22.report({id: "UNKNOWN_DIRECTIVE", rule: className}, context);
          }
          if (translateDepth && typeof rule.d !== "function") {
            lastTranslations.push(className);
          }
        }
        if (!translateDepth) {
          idToClassName.set(rule.$, className);
          ensureMaxSize(idToClassName, 3e4);
        }
      }
      return className;
    };
    const process2 = (tokens) => join(parse(tokens).map(convert).filter(Boolean), " ");
    const preflight = sanitize(config.preflight, identity2, false);
    if (preflight) {
      const css2 = createPreflight(theme22);
      const styles = serialize2(typeof preflight == "function" ? evalThunk(preflight(css2, context), context) || css2 : __assign(__assign({}, css2), preflight));
      init2((injected = (styles.forEach(inject2), true)) => injected);
    }
    return {
      init: () => mode22.report({id: "LATE_SETUP_CALL"}, context),
      process: process2
    };
  };
  var create2 = (config) => {
    let process2 = (tokens) => {
      init2();
      return process2(tokens);
    };
    let init2 = (config2) => {
      ;
      ({process: process2, init: init2} = configure(config2));
    };
    if (config)
      init2(config);
    let context;
    const fromContext = (key) => () => {
      if (!context) {
        process2([
          (_4) => {
            context = _4;
            return "";
          }
        ]);
      }
      return context[key];
    };
    return {
      tw: Object.defineProperties((...tokens) => process2(tokens), {
        theme: {
          get: fromContext("theme")
        }
      }),
      setup: (config2) => init2(config2)
    };
  };
  var {tw: tw2, setup: setup2} = /* @__PURE__ */ create2();
});

// node_modules/twind/colors/colors.cjs
var require_colors = __commonJS((exports) => {
  var __create2 = Object.create;
  var __defProp2 = Object.defineProperty;
  var __getProtoOf2 = Object.getPrototypeOf;
  var __hasOwnProp2 = Object.prototype.hasOwnProperty;
  var __getOwnPropNames2 = Object.getOwnPropertyNames;
  var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
  var __markAsModule2 = (target) => __defProp2(target, "__esModule", {value: true});
  var __export2 = (target, all) => {
    for (var name in all)
      __defProp2(target, name, {get: all[name], enumerable: true});
  };
  var __exportStar = (target, module22, desc) => {
    if (module22 && typeof module22 === "object" || typeof module22 === "function") {
      for (let key of __getOwnPropNames2(module22))
        if (!__hasOwnProp2.call(target, key) && key !== "default")
          __defProp2(target, key, {get: () => module22[key], enumerable: !(desc = __getOwnPropDesc2(module22, key)) || desc.enumerable});
    }
    return target;
  };
  var __toModule2 = (module22) => {
    return __exportStar(__markAsModule2(__defProp2(module22 != null ? __create2(__getProtoOf2(module22)) : {}, "default", module22 && module22.__esModule && "default" in module22 ? {get: () => module22.default, enumerable: true} : {value: module22, enumerable: true})), module22);
  };
  __markAsModule2(exports);
  __export2(exports, {
    amber: () => amber2,
    black: () => black2,
    blue: () => blue2,
    blueGray: () => blueGray2,
    coolGray: () => coolGray2,
    cyan: () => cyan2,
    emerald: () => emerald2,
    fuchsia: () => fuchsia2,
    gray: () => gray2,
    green: () => green2,
    indigo: () => indigo2,
    lightBlue: () => lightBlue2,
    lime: () => lime2,
    orange: () => orange2,
    pink: () => pink2,
    purple: () => purple2,
    red: () => red2,
    rose: () => rose2,
    teal: () => teal2,
    trueGray: () => trueGray2,
    violet: () => violet2,
    warmGray: () => warmGray2,
    white: () => white2,
    yellow: () => yellow2
  });
  var import_url2 = __toModule2(require("url"));
  var shim_import_meta_url = (0, import_url2.pathToFileURL)(__filename);
  var black2 = "#000";
  var white2 = "#fff";
  var rose2 = {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337"
  };
  var pink2 = {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843"
  };
  var fuchsia2 = {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75"
  };
  var purple2 = {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87"
  };
  var violet2 = {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95"
  };
  var indigo2 = {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81"
  };
  var blue2 = {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a"
  };
  var lightBlue2 = {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e"
  };
  var cyan2 = {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63"
  };
  var teal2 = {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a"
  };
  var emerald2 = {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b"
  };
  var green2 = {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d"
  };
  var lime2 = {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314"
  };
  var yellow2 = {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12"
  };
  var amber2 = {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f"
  };
  var orange2 = {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12"
  };
  var red2 = {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d"
  };
  var warmGray2 = {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917"
  };
  var trueGray2 = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717"
  };
  var gray2 = {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b"
  };
  var coolGray2 = {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827"
  };
  var blueGray2 = {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a"
  };
});

// .svelte/vercel/entry.js
__markAsModule(exports);
__export(exports, {
  default: () => entry_default
});

// node_modules/@sveltejs/kit/dist/http.js
function getRawBody(req) {
  return new Promise((fulfil, reject) => {
    const h = req.headers;
    if (!h["content-type"]) {
      fulfil(null);
      return;
    }
    req.on("error", reject);
    const length = Number(h["content-length"]);
    let data;
    if (!isNaN(length)) {
      data = new Uint8Array(length);
      let i = 0;
      req.on("data", (chunk) => {
        for (let j = 0; j < chunk.length; j += 1) {
          data[i++] = chunk[j];
        }
      });
    } else {
      if (h["transfer-encoding"] === void 0) {
        fulfil(null);
        return;
      }
      data = new Uint8Array(0);
      req.on("data", (chunk) => {
        const new_data = new Uint8Array(data.length + chunk.length);
        for (let i = 0; i < data.length; i += 1) {
          new_data[i] = data[i];
        }
        for (let i = 0; i < chunk.length; i += 1) {
          new_data[i + data.length] = chunk[i];
        }
        data = new_data;
      });
    }
    req.on("end", () => {
      const [type] = h["content-type"].split(/;\s*/);
      if (type === "application/octet-stream") {
        fulfil(data.buffer);
      }
      const decoder = new TextDecoder(h["content-encoding"] || "utf-8");
      fulfil(decoder.decode(data));
    });
  });
}

// node_modules/@sveltejs/kit/dist/install-fetch.js
var import_http = __toModule(require("http"));
var import_https = __toModule(require("https"));
var import_zlib = __toModule(require("zlib"));
var import_stream = __toModule(require("stream"));
var import_util = __toModule(require("util"));
var import_crypto = __toModule(require("crypto"));
var import_url = __toModule(require("url"));
function dataUriToBuffer(uri) {
  if (!/^data:/i.test(uri)) {
    throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');
  }
  uri = uri.replace(/\r?\n/g, "");
  const firstComma = uri.indexOf(",");
  if (firstComma === -1 || firstComma <= 4) {
    throw new TypeError("malformed data: URI");
  }
  const meta = uri.substring(5, firstComma).split(";");
  let charset = "";
  let base64 = false;
  const type = meta[0] || "text/plain";
  let typeFull = type;
  for (let i = 1; i < meta.length; i++) {
    if (meta[i] === "base64") {
      base64 = true;
    } else {
      typeFull += `;${meta[i]}`;
      if (meta[i].indexOf("charset=") === 0) {
        charset = meta[i].substring(8);
      }
    }
  }
  if (!meta[0] && !charset.length) {
    typeFull += ";charset=US-ASCII";
    charset = "US-ASCII";
  }
  const encoding = base64 ? "base64" : "ascii";
  const data = unescape(uri.substring(firstComma + 1));
  const buffer = Buffer.from(data, encoding);
  buffer.type = type;
  buffer.typeFull = typeFull;
  buffer.charset = charset;
  return buffer;
}
var src = dataUriToBuffer;
var {Readable} = import_stream.default;
var wm = new WeakMap();
async function* read(parts) {
  for (const part of parts) {
    if ("stream" in part) {
      yield* part.stream();
    } else {
      yield part;
    }
  }
}
var Blob = class {
  constructor(blobParts = [], options2 = {type: ""}) {
    let size = 0;
    const parts = blobParts.map((element) => {
      let buffer;
      if (element instanceof Buffer) {
        buffer = element;
      } else if (ArrayBuffer.isView(element)) {
        buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
      } else if (element instanceof ArrayBuffer) {
        buffer = Buffer.from(element);
      } else if (element instanceof Blob) {
        buffer = element;
      } else {
        buffer = Buffer.from(typeof element === "string" ? element : String(element));
      }
      size += buffer.length || buffer.size || 0;
      return buffer;
    });
    const type = options2.type === void 0 ? "" : String(options2.type).toLowerCase();
    wm.set(this, {
      type: /[^\u0020-\u007E]/.test(type) ? "" : type,
      size,
      parts
    });
  }
  get size() {
    return wm.get(this).size;
  }
  get type() {
    return wm.get(this).type;
  }
  async text() {
    return Buffer.from(await this.arrayBuffer()).toString();
  }
  async arrayBuffer() {
    const data = new Uint8Array(this.size);
    let offset = 0;
    for await (const chunk of this.stream()) {
      data.set(chunk, offset);
      offset += chunk.length;
    }
    return data.buffer;
  }
  stream() {
    return Readable.from(read(wm.get(this).parts));
  }
  slice(start = 0, end = this.size, type = "") {
    const {size} = this;
    let relativeStart = start < 0 ? Math.max(size + start, 0) : Math.min(start, size);
    let relativeEnd = end < 0 ? Math.max(size + end, 0) : Math.min(end, size);
    const span = Math.max(relativeEnd - relativeStart, 0);
    const parts = wm.get(this).parts.values();
    const blobParts = [];
    let added = 0;
    for (const part of parts) {
      const size2 = ArrayBuffer.isView(part) ? part.byteLength : part.size;
      if (relativeStart && size2 <= relativeStart) {
        relativeStart -= size2;
        relativeEnd -= size2;
      } else {
        const chunk = part.slice(relativeStart, Math.min(size2, relativeEnd));
        blobParts.push(chunk);
        added += ArrayBuffer.isView(chunk) ? chunk.byteLength : chunk.size;
        relativeStart = 0;
        if (added >= span) {
          break;
        }
      }
    }
    const blob = new Blob([], {type});
    Object.assign(wm.get(blob), {size: span, parts: blobParts});
    return blob;
  }
  get [Symbol.toStringTag]() {
    return "Blob";
  }
  static [Symbol.hasInstance](object) {
    return typeof object === "object" && typeof object.stream === "function" && object.stream.length === 0 && typeof object.constructor === "function" && /^(Blob|File)$/.test(object[Symbol.toStringTag]);
  }
};
Object.defineProperties(Blob.prototype, {
  size: {enumerable: true},
  type: {enumerable: true},
  slice: {enumerable: true}
});
var fetchBlob = Blob;
var FetchBaseError = class extends Error {
  constructor(message, type) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
    this.type = type;
  }
  get name() {
    return this.constructor.name;
  }
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
};
var FetchError = class extends FetchBaseError {
  constructor(message, type, systemError) {
    super(message, type);
    if (systemError) {
      this.code = this.errno = systemError.code;
      this.erroredSysCall = systemError.syscall;
    }
  }
};
var NAME = Symbol.toStringTag;
var isURLSearchParameters = (object) => {
  return typeof object === "object" && typeof object.append === "function" && typeof object.delete === "function" && typeof object.get === "function" && typeof object.getAll === "function" && typeof object.has === "function" && typeof object.set === "function" && typeof object.sort === "function" && object[NAME] === "URLSearchParams";
};
var isBlob = (object) => {
  return typeof object === "object" && typeof object.arrayBuffer === "function" && typeof object.type === "string" && typeof object.stream === "function" && typeof object.constructor === "function" && /^(Blob|File)$/.test(object[NAME]);
};
function isFormData(object) {
  return typeof object === "object" && typeof object.append === "function" && typeof object.set === "function" && typeof object.get === "function" && typeof object.getAll === "function" && typeof object.delete === "function" && typeof object.keys === "function" && typeof object.values === "function" && typeof object.entries === "function" && typeof object.constructor === "function" && object[NAME] === "FormData";
}
var isAbortSignal = (object) => {
  return typeof object === "object" && object[NAME] === "AbortSignal";
};
var carriage = "\r\n";
var dashes = "-".repeat(2);
var carriageLength = Buffer.byteLength(carriage);
var getFooter = (boundary) => `${dashes}${boundary}${dashes}${carriage.repeat(2)}`;
function getHeader(boundary, name, field) {
  let header = "";
  header += `${dashes}${boundary}${carriage}`;
  header += `Content-Disposition: form-data; name="${name}"`;
  if (isBlob(field)) {
    header += `; filename="${field.name}"${carriage}`;
    header += `Content-Type: ${field.type || "application/octet-stream"}`;
  }
  return `${header}${carriage.repeat(2)}`;
}
var getBoundary = () => (0, import_crypto.randomBytes)(8).toString("hex");
async function* formDataIterator(form, boundary) {
  for (const [name, value] of form) {
    yield getHeader(boundary, name, value);
    if (isBlob(value)) {
      yield* value.stream();
    } else {
      yield value;
    }
    yield carriage;
  }
  yield getFooter(boundary);
}
function getFormDataLength(form, boundary) {
  let length = 0;
  for (const [name, value] of form) {
    length += Buffer.byteLength(getHeader(boundary, name, value));
    if (isBlob(value)) {
      length += value.size;
    } else {
      length += Buffer.byteLength(String(value));
    }
    length += carriageLength;
  }
  length += Buffer.byteLength(getFooter(boundary));
  return length;
}
var INTERNALS$2 = Symbol("Body internals");
var Body = class {
  constructor(body, {
    size = 0
  } = {}) {
    let boundary = null;
    if (body === null) {
      body = null;
    } else if (isURLSearchParameters(body)) {
      body = Buffer.from(body.toString());
    } else if (isBlob(body))
      ;
    else if (Buffer.isBuffer(body))
      ;
    else if (import_util.types.isAnyArrayBuffer(body)) {
      body = Buffer.from(body);
    } else if (ArrayBuffer.isView(body)) {
      body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
    } else if (body instanceof import_stream.default)
      ;
    else if (isFormData(body)) {
      boundary = `NodeFetchFormDataBoundary${getBoundary()}`;
      body = import_stream.default.Readable.from(formDataIterator(body, boundary));
    } else {
      body = Buffer.from(String(body));
    }
    this[INTERNALS$2] = {
      body,
      boundary,
      disturbed: false,
      error: null
    };
    this.size = size;
    if (body instanceof import_stream.default) {
      body.on("error", (err) => {
        const error2 = err instanceof FetchBaseError ? err : new FetchError(`Invalid response body while trying to fetch ${this.url}: ${err.message}`, "system", err);
        this[INTERNALS$2].error = error2;
      });
    }
  }
  get body() {
    return this[INTERNALS$2].body;
  }
  get bodyUsed() {
    return this[INTERNALS$2].disturbed;
  }
  async arrayBuffer() {
    const {buffer, byteOffset, byteLength} = await consumeBody(this);
    return buffer.slice(byteOffset, byteOffset + byteLength);
  }
  async blob() {
    const ct = this.headers && this.headers.get("content-type") || this[INTERNALS$2].body && this[INTERNALS$2].body.type || "";
    const buf = await this.buffer();
    return new fetchBlob([buf], {
      type: ct
    });
  }
  async json() {
    const buffer = await consumeBody(this);
    return JSON.parse(buffer.toString());
  }
  async text() {
    const buffer = await consumeBody(this);
    return buffer.toString();
  }
  buffer() {
    return consumeBody(this);
  }
};
Object.defineProperties(Body.prototype, {
  body: {enumerable: true},
  bodyUsed: {enumerable: true},
  arrayBuffer: {enumerable: true},
  blob: {enumerable: true},
  json: {enumerable: true},
  text: {enumerable: true}
});
async function consumeBody(data) {
  if (data[INTERNALS$2].disturbed) {
    throw new TypeError(`body used already for: ${data.url}`);
  }
  data[INTERNALS$2].disturbed = true;
  if (data[INTERNALS$2].error) {
    throw data[INTERNALS$2].error;
  }
  let {body} = data;
  if (body === null) {
    return Buffer.alloc(0);
  }
  if (isBlob(body)) {
    body = body.stream();
  }
  if (Buffer.isBuffer(body)) {
    return body;
  }
  if (!(body instanceof import_stream.default)) {
    return Buffer.alloc(0);
  }
  const accum = [];
  let accumBytes = 0;
  try {
    for await (const chunk of body) {
      if (data.size > 0 && accumBytes + chunk.length > data.size) {
        const err = new FetchError(`content size at ${data.url} over limit: ${data.size}`, "max-size");
        body.destroy(err);
        throw err;
      }
      accumBytes += chunk.length;
      accum.push(chunk);
    }
  } catch (error2) {
    if (error2 instanceof FetchBaseError) {
      throw error2;
    } else {
      throw new FetchError(`Invalid response body while trying to fetch ${data.url}: ${error2.message}`, "system", error2);
    }
  }
  if (body.readableEnded === true || body._readableState.ended === true) {
    try {
      if (accum.every((c) => typeof c === "string")) {
        return Buffer.from(accum.join(""));
      }
      return Buffer.concat(accum, accumBytes);
    } catch (error2) {
      throw new FetchError(`Could not create Buffer from response body for ${data.url}: ${error2.message}`, "system", error2);
    }
  } else {
    throw new FetchError(`Premature close of server response while trying to fetch ${data.url}`);
  }
}
var clone = (instance, highWaterMark) => {
  let p1;
  let p2;
  let {body} = instance;
  if (instance.bodyUsed) {
    throw new Error("cannot clone body after it is used");
  }
  if (body instanceof import_stream.default && typeof body.getBoundary !== "function") {
    p1 = new import_stream.PassThrough({highWaterMark});
    p2 = new import_stream.PassThrough({highWaterMark});
    body.pipe(p1);
    body.pipe(p2);
    instance[INTERNALS$2].body = p1;
    body = p2;
  }
  return body;
};
var extractContentType = (body, request) => {
  if (body === null) {
    return null;
  }
  if (typeof body === "string") {
    return "text/plain;charset=UTF-8";
  }
  if (isURLSearchParameters(body)) {
    return "application/x-www-form-urlencoded;charset=UTF-8";
  }
  if (isBlob(body)) {
    return body.type || null;
  }
  if (Buffer.isBuffer(body) || import_util.types.isAnyArrayBuffer(body) || ArrayBuffer.isView(body)) {
    return null;
  }
  if (body && typeof body.getBoundary === "function") {
    return `multipart/form-data;boundary=${body.getBoundary()}`;
  }
  if (isFormData(body)) {
    return `multipart/form-data; boundary=${request[INTERNALS$2].boundary}`;
  }
  if (body instanceof import_stream.default) {
    return null;
  }
  return "text/plain;charset=UTF-8";
};
var getTotalBytes = (request) => {
  const {body} = request;
  if (body === null) {
    return 0;
  }
  if (isBlob(body)) {
    return body.size;
  }
  if (Buffer.isBuffer(body)) {
    return body.length;
  }
  if (body && typeof body.getLengthSync === "function") {
    return body.hasKnownLength && body.hasKnownLength() ? body.getLengthSync() : null;
  }
  if (isFormData(body)) {
    return getFormDataLength(request[INTERNALS$2].boundary);
  }
  return null;
};
var writeToStream = (dest, {body}) => {
  if (body === null) {
    dest.end();
  } else if (isBlob(body)) {
    body.stream().pipe(dest);
  } else if (Buffer.isBuffer(body)) {
    dest.write(body);
    dest.end();
  } else {
    body.pipe(dest);
  }
};
var validateHeaderName = typeof import_http.default.validateHeaderName === "function" ? import_http.default.validateHeaderName : (name) => {
  if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(name)) {
    const err = new TypeError(`Header name must be a valid HTTP token [${name}]`);
    Object.defineProperty(err, "code", {value: "ERR_INVALID_HTTP_TOKEN"});
    throw err;
  }
};
var validateHeaderValue = typeof import_http.default.validateHeaderValue === "function" ? import_http.default.validateHeaderValue : (name, value) => {
  if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(value)) {
    const err = new TypeError(`Invalid character in header content ["${name}"]`);
    Object.defineProperty(err, "code", {value: "ERR_INVALID_CHAR"});
    throw err;
  }
};
var Headers = class extends URLSearchParams {
  constructor(init2) {
    let result = [];
    if (init2 instanceof Headers) {
      const raw = init2.raw();
      for (const [name, values] of Object.entries(raw)) {
        result.push(...values.map((value) => [name, value]));
      }
    } else if (init2 == null)
      ;
    else if (typeof init2 === "object" && !import_util.types.isBoxedPrimitive(init2)) {
      const method = init2[Symbol.iterator];
      if (method == null) {
        result.push(...Object.entries(init2));
      } else {
        if (typeof method !== "function") {
          throw new TypeError("Header pairs must be iterable");
        }
        result = [...init2].map((pair) => {
          if (typeof pair !== "object" || import_util.types.isBoxedPrimitive(pair)) {
            throw new TypeError("Each header pair must be an iterable object");
          }
          return [...pair];
        }).map((pair) => {
          if (pair.length !== 2) {
            throw new TypeError("Each header pair must be a name/value tuple");
          }
          return [...pair];
        });
      }
    } else {
      throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");
    }
    result = result.length > 0 ? result.map(([name, value]) => {
      validateHeaderName(name);
      validateHeaderValue(name, String(value));
      return [String(name).toLowerCase(), String(value)];
    }) : void 0;
    super(result);
    return new Proxy(this, {
      get(target, p, receiver) {
        switch (p) {
          case "append":
          case "set":
            return (name, value) => {
              validateHeaderName(name);
              validateHeaderValue(name, String(value));
              return URLSearchParams.prototype[p].call(receiver, String(name).toLowerCase(), String(value));
            };
          case "delete":
          case "has":
          case "getAll":
            return (name) => {
              validateHeaderName(name);
              return URLSearchParams.prototype[p].call(receiver, String(name).toLowerCase());
            };
          case "keys":
            return () => {
              target.sort();
              return new Set(URLSearchParams.prototype.keys.call(target)).keys();
            };
          default:
            return Reflect.get(target, p, receiver);
        }
      }
    });
  }
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
  toString() {
    return Object.prototype.toString.call(this);
  }
  get(name) {
    const values = this.getAll(name);
    if (values.length === 0) {
      return null;
    }
    let value = values.join(", ");
    if (/^content-encoding$/i.test(name)) {
      value = value.toLowerCase();
    }
    return value;
  }
  forEach(callback) {
    for (const name of this.keys()) {
      callback(this.get(name), name);
    }
  }
  *values() {
    for (const name of this.keys()) {
      yield this.get(name);
    }
  }
  *entries() {
    for (const name of this.keys()) {
      yield [name, this.get(name)];
    }
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  raw() {
    return [...this.keys()].reduce((result, key) => {
      result[key] = this.getAll(key);
      return result;
    }, {});
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return [...this.keys()].reduce((result, key) => {
      const values = this.getAll(key);
      if (key === "host") {
        result[key] = values[0];
      } else {
        result[key] = values.length > 1 ? values : values[0];
      }
      return result;
    }, {});
  }
};
Object.defineProperties(Headers.prototype, ["get", "entries", "forEach", "values"].reduce((result, property) => {
  result[property] = {enumerable: true};
  return result;
}, {}));
function fromRawHeaders(headers = []) {
  return new Headers(headers.reduce((result, value, index2, array) => {
    if (index2 % 2 === 0) {
      result.push(array.slice(index2, index2 + 2));
    }
    return result;
  }, []).filter(([name, value]) => {
    try {
      validateHeaderName(name);
      validateHeaderValue(name, String(value));
      return true;
    } catch {
      return false;
    }
  }));
}
var redirectStatus = new Set([301, 302, 303, 307, 308]);
var isRedirect = (code) => {
  return redirectStatus.has(code);
};
var INTERNALS$1 = Symbol("Response internals");
var Response2 = class extends Body {
  constructor(body = null, options2 = {}) {
    super(body, options2);
    const status = options2.status || 200;
    const headers = new Headers(options2.headers);
    if (body !== null && !headers.has("Content-Type")) {
      const contentType = extractContentType(body);
      if (contentType) {
        headers.append("Content-Type", contentType);
      }
    }
    this[INTERNALS$1] = {
      url: options2.url,
      status,
      statusText: options2.statusText || "",
      headers,
      counter: options2.counter,
      highWaterMark: options2.highWaterMark
    };
  }
  get url() {
    return this[INTERNALS$1].url || "";
  }
  get status() {
    return this[INTERNALS$1].status;
  }
  get ok() {
    return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
  }
  get redirected() {
    return this[INTERNALS$1].counter > 0;
  }
  get statusText() {
    return this[INTERNALS$1].statusText;
  }
  get headers() {
    return this[INTERNALS$1].headers;
  }
  get highWaterMark() {
    return this[INTERNALS$1].highWaterMark;
  }
  clone() {
    return new Response2(clone(this, this.highWaterMark), {
      url: this.url,
      status: this.status,
      statusText: this.statusText,
      headers: this.headers,
      ok: this.ok,
      redirected: this.redirected,
      size: this.size
    });
  }
  static redirect(url, status = 302) {
    if (!isRedirect(status)) {
      throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
    }
    return new Response2(null, {
      headers: {
        location: new URL(url).toString()
      },
      status
    });
  }
  get [Symbol.toStringTag]() {
    return "Response";
  }
};
Object.defineProperties(Response2.prototype, {
  url: {enumerable: true},
  status: {enumerable: true},
  ok: {enumerable: true},
  redirected: {enumerable: true},
  statusText: {enumerable: true},
  headers: {enumerable: true},
  clone: {enumerable: true}
});
var getSearch = (parsedURL) => {
  if (parsedURL.search) {
    return parsedURL.search;
  }
  const lastOffset = parsedURL.href.length - 1;
  const hash4 = parsedURL.hash || (parsedURL.href[lastOffset] === "#" ? "#" : "");
  return parsedURL.href[lastOffset - hash4.length] === "?" ? "?" : "";
};
var INTERNALS = Symbol("Request internals");
var isRequest = (object) => {
  return typeof object === "object" && typeof object[INTERNALS] === "object";
};
var Request = class extends Body {
  constructor(input, init2 = {}) {
    let parsedURL;
    if (isRequest(input)) {
      parsedURL = new URL(input.url);
    } else {
      parsedURL = new URL(input);
      input = {};
    }
    let method = init2.method || input.method || "GET";
    method = method.toUpperCase();
    if ((init2.body != null || isRequest(input)) && input.body !== null && (method === "GET" || method === "HEAD")) {
      throw new TypeError("Request with GET/HEAD method cannot have body");
    }
    const inputBody = init2.body ? init2.body : isRequest(input) && input.body !== null ? clone(input) : null;
    super(inputBody, {
      size: init2.size || input.size || 0
    });
    const headers = new Headers(init2.headers || input.headers || {});
    if (inputBody !== null && !headers.has("Content-Type")) {
      const contentType = extractContentType(inputBody, this);
      if (contentType) {
        headers.append("Content-Type", contentType);
      }
    }
    let signal = isRequest(input) ? input.signal : null;
    if ("signal" in init2) {
      signal = init2.signal;
    }
    if (signal !== null && !isAbortSignal(signal)) {
      throw new TypeError("Expected signal to be an instanceof AbortSignal");
    }
    this[INTERNALS] = {
      method,
      redirect: init2.redirect || input.redirect || "follow",
      headers,
      parsedURL,
      signal
    };
    this.follow = init2.follow === void 0 ? input.follow === void 0 ? 20 : input.follow : init2.follow;
    this.compress = init2.compress === void 0 ? input.compress === void 0 ? true : input.compress : init2.compress;
    this.counter = init2.counter || input.counter || 0;
    this.agent = init2.agent || input.agent;
    this.highWaterMark = init2.highWaterMark || input.highWaterMark || 16384;
    this.insecureHTTPParser = init2.insecureHTTPParser || input.insecureHTTPParser || false;
  }
  get method() {
    return this[INTERNALS].method;
  }
  get url() {
    return (0, import_url.format)(this[INTERNALS].parsedURL);
  }
  get headers() {
    return this[INTERNALS].headers;
  }
  get redirect() {
    return this[INTERNALS].redirect;
  }
  get signal() {
    return this[INTERNALS].signal;
  }
  clone() {
    return new Request(this);
  }
  get [Symbol.toStringTag]() {
    return "Request";
  }
};
Object.defineProperties(Request.prototype, {
  method: {enumerable: true},
  url: {enumerable: true},
  headers: {enumerable: true},
  redirect: {enumerable: true},
  clone: {enumerable: true},
  signal: {enumerable: true}
});
var getNodeRequestOptions = (request) => {
  const {parsedURL} = request[INTERNALS];
  const headers = new Headers(request[INTERNALS].headers);
  if (!headers.has("Accept")) {
    headers.set("Accept", "*/*");
  }
  let contentLengthValue = null;
  if (request.body === null && /^(post|put)$/i.test(request.method)) {
    contentLengthValue = "0";
  }
  if (request.body !== null) {
    const totalBytes = getTotalBytes(request);
    if (typeof totalBytes === "number" && !Number.isNaN(totalBytes)) {
      contentLengthValue = String(totalBytes);
    }
  }
  if (contentLengthValue) {
    headers.set("Content-Length", contentLengthValue);
  }
  if (!headers.has("User-Agent")) {
    headers.set("User-Agent", "node-fetch");
  }
  if (request.compress && !headers.has("Accept-Encoding")) {
    headers.set("Accept-Encoding", "gzip,deflate,br");
  }
  let {agent} = request;
  if (typeof agent === "function") {
    agent = agent(parsedURL);
  }
  if (!headers.has("Connection") && !agent) {
    headers.set("Connection", "close");
  }
  const search = getSearch(parsedURL);
  const requestOptions = {
    path: parsedURL.pathname + search,
    pathname: parsedURL.pathname,
    hostname: parsedURL.hostname,
    protocol: parsedURL.protocol,
    port: parsedURL.port,
    hash: parsedURL.hash,
    search: parsedURL.search,
    query: parsedURL.query,
    href: parsedURL.href,
    method: request.method,
    headers: headers[Symbol.for("nodejs.util.inspect.custom")](),
    insecureHTTPParser: request.insecureHTTPParser,
    agent
  };
  return requestOptions;
};
var AbortError = class extends FetchBaseError {
  constructor(message, type = "aborted") {
    super(message, type);
  }
};
var supportedSchemas = new Set(["data:", "http:", "https:"]);
async function fetch2(url, options_) {
  return new Promise((resolve2, reject) => {
    const request = new Request(url, options_);
    const options2 = getNodeRequestOptions(request);
    if (!supportedSchemas.has(options2.protocol)) {
      throw new TypeError(`node-fetch cannot load ${url}. URL scheme "${options2.protocol.replace(/:$/, "")}" is not supported.`);
    }
    if (options2.protocol === "data:") {
      const data = src(request.url);
      const response2 = new Response2(data, {headers: {"Content-Type": data.typeFull}});
      resolve2(response2);
      return;
    }
    const send = (options2.protocol === "https:" ? import_https.default : import_http.default).request;
    const {signal} = request;
    let response = null;
    const abort = () => {
      const error2 = new AbortError("The operation was aborted.");
      reject(error2);
      if (request.body && request.body instanceof import_stream.default.Readable) {
        request.body.destroy(error2);
      }
      if (!response || !response.body) {
        return;
      }
      response.body.emit("error", error2);
    };
    if (signal && signal.aborted) {
      abort();
      return;
    }
    const abortAndFinalize = () => {
      abort();
      finalize();
    };
    const request_ = send(options2);
    if (signal) {
      signal.addEventListener("abort", abortAndFinalize);
    }
    const finalize = () => {
      request_.abort();
      if (signal) {
        signal.removeEventListener("abort", abortAndFinalize);
      }
    };
    request_.on("error", (err) => {
      reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, "system", err));
      finalize();
    });
    request_.on("response", (response_) => {
      request_.setTimeout(0);
      const headers = fromRawHeaders(response_.rawHeaders);
      if (isRedirect(response_.statusCode)) {
        const location = headers.get("Location");
        const locationURL = location === null ? null : new URL(location, request.url);
        switch (request.redirect) {
          case "error":
            reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, "no-redirect"));
            finalize();
            return;
          case "manual":
            if (locationURL !== null) {
              try {
                headers.set("Location", locationURL);
              } catch (error2) {
                reject(error2);
              }
            }
            break;
          case "follow": {
            if (locationURL === null) {
              break;
            }
            if (request.counter >= request.follow) {
              reject(new FetchError(`maximum redirect reached at: ${request.url}`, "max-redirect"));
              finalize();
              return;
            }
            const requestOptions = {
              headers: new Headers(request.headers),
              follow: request.follow,
              counter: request.counter + 1,
              agent: request.agent,
              compress: request.compress,
              method: request.method,
              body: request.body,
              signal: request.signal,
              size: request.size
            };
            if (response_.statusCode !== 303 && request.body && options_.body instanceof import_stream.default.Readable) {
              reject(new FetchError("Cannot follow redirect with body being a readable stream", "unsupported-redirect"));
              finalize();
              return;
            }
            if (response_.statusCode === 303 || (response_.statusCode === 301 || response_.statusCode === 302) && request.method === "POST") {
              requestOptions.method = "GET";
              requestOptions.body = void 0;
              requestOptions.headers.delete("content-length");
            }
            resolve2(fetch2(new Request(locationURL, requestOptions)));
            finalize();
            return;
          }
        }
      }
      response_.once("end", () => {
        if (signal) {
          signal.removeEventListener("abort", abortAndFinalize);
        }
      });
      let body = (0, import_stream.pipeline)(response_, new import_stream.PassThrough(), (error2) => {
        reject(error2);
      });
      if (process.version < "v12.10") {
        response_.on("aborted", abortAndFinalize);
      }
      const responseOptions = {
        url: request.url,
        status: response_.statusCode,
        statusText: response_.statusMessage,
        headers,
        size: request.size,
        counter: request.counter,
        highWaterMark: request.highWaterMark
      };
      const codings = headers.get("Content-Encoding");
      if (!request.compress || request.method === "HEAD" || codings === null || response_.statusCode === 204 || response_.statusCode === 304) {
        response = new Response2(body, responseOptions);
        resolve2(response);
        return;
      }
      const zlibOptions = {
        flush: import_zlib.default.Z_SYNC_FLUSH,
        finishFlush: import_zlib.default.Z_SYNC_FLUSH
      };
      if (codings === "gzip" || codings === "x-gzip") {
        body = (0, import_stream.pipeline)(body, import_zlib.default.createGunzip(zlibOptions), (error2) => {
          reject(error2);
        });
        response = new Response2(body, responseOptions);
        resolve2(response);
        return;
      }
      if (codings === "deflate" || codings === "x-deflate") {
        const raw = (0, import_stream.pipeline)(response_, new import_stream.PassThrough(), (error2) => {
          reject(error2);
        });
        raw.once("data", (chunk) => {
          if ((chunk[0] & 15) === 8) {
            body = (0, import_stream.pipeline)(body, import_zlib.default.createInflate(), (error2) => {
              reject(error2);
            });
          } else {
            body = (0, import_stream.pipeline)(body, import_zlib.default.createInflateRaw(), (error2) => {
              reject(error2);
            });
          }
          response = new Response2(body, responseOptions);
          resolve2(response);
        });
        return;
      }
      if (codings === "br") {
        body = (0, import_stream.pipeline)(body, import_zlib.default.createBrotliDecompress(), (error2) => {
          reject(error2);
        });
        response = new Response2(body, responseOptions);
        resolve2(response);
        return;
      }
      response = new Response2(body, responseOptions);
      resolve2(response);
    });
    writeToStream(request_, request);
  });
}
globalThis.fetch = fetch2;
globalThis.Response = Response2;
globalThis.Request = Request;
globalThis.Headers = Headers;

// node_modules/@sveltejs/kit/dist/ssr.js
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped$1 = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function devalue(value) {
  var counts = new Map();
  function walk(thing) {
    if (typeof thing === "function") {
      throw new Error("Cannot stringify a function");
    }
    if (counts.has(thing)) {
      counts.set(thing, counts.get(thing) + 1);
      return;
    }
    counts.set(thing, 1);
    if (!isPrimitive(thing)) {
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach(walk);
          break;
        case "Set":
        case "Map":
          Array.from(thing).forEach(walk);
          break;
        default:
          var proto = Object.getPrototypeOf(thing);
          if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== objectProtoOwnPropertyNames) {
            throw new Error("Cannot stringify arbitrary non-POJOs");
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new Error("Cannot stringify POJOs with symbolic keys");
          }
          Object.keys(thing).forEach(function(key) {
            return walk(thing[key]);
          });
      }
    }
  }
  walk(value);
  var names = new Map();
  Array.from(counts).filter(function(entry) {
    return entry[1] > 1;
  }).sort(function(a, b) {
    return b[1] - a[1];
  }).forEach(function(entry, i) {
    names.set(entry[0], getName(i));
  });
  function stringify(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (isPrimitive(thing)) {
      return stringifyPrimitive(thing);
    }
    var type = getType(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return "Object(" + stringify(thing.valueOf()) + ")";
      case "RegExp":
        return "new RegExp(" + stringifyString(thing.source) + ', "' + thing.flags + '")';
      case "Date":
        return "new Date(" + thing.getTime() + ")";
      case "Array":
        var members = thing.map(function(v, i) {
          return i in thing ? stringify(v) : "";
        });
        var tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return "[" + members.join(",") + tail + "]";
      case "Set":
      case "Map":
        return "new " + type + "([" + Array.from(thing).map(stringify).join(",") + "])";
      default:
        var obj = "{" + Object.keys(thing).map(function(key) {
          return safeKey(key) + ":" + stringify(thing[key]);
        }).join(",") + "}";
        var proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? "Object.assign(Object.create(null)," + obj + ")" : "Object.create(null)";
        }
        return obj;
    }
  }
  var str = stringify(value);
  if (names.size) {
    var params_1 = [];
    var statements_1 = [];
    var values_1 = [];
    names.forEach(function(name, thing) {
      params_1.push(name);
      if (isPrimitive(thing)) {
        values_1.push(stringifyPrimitive(thing));
        return;
      }
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values_1.push("Object(" + stringify(thing.valueOf()) + ")");
          break;
        case "RegExp":
          values_1.push(thing.toString());
          break;
        case "Date":
          values_1.push("new Date(" + thing.getTime() + ")");
          break;
        case "Array":
          values_1.push("Array(" + thing.length + ")");
          thing.forEach(function(v, i) {
            statements_1.push(name + "[" + i + "]=" + stringify(v));
          });
          break;
        case "Set":
          values_1.push("new Set");
          statements_1.push(name + "." + Array.from(thing).map(function(v) {
            return "add(" + stringify(v) + ")";
          }).join("."));
          break;
        case "Map":
          values_1.push("new Map");
          statements_1.push(name + "." + Array.from(thing).map(function(_a) {
            var k = _a[0], v = _a[1];
            return "set(" + stringify(k) + ", " + stringify(v) + ")";
          }).join("."));
          break;
        default:
          values_1.push(Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}");
          Object.keys(thing).forEach(function(key) {
            statements_1.push("" + name + safeProp(key) + "=" + stringify(thing[key]));
          });
      }
    });
    statements_1.push("return " + str);
    return "(function(" + params_1.join(",") + "){" + statements_1.join(";") + "}(" + values_1.join(",") + "))";
  } else {
    return str;
  }
}
function getName(num) {
  var name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? name + "_" : name;
}
function isPrimitive(thing) {
  return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
  if (typeof thing === "string")
    return stringifyString(thing);
  if (thing === void 0)
    return "void 0";
  if (thing === 0 && 1 / thing < 0)
    return "-0";
  var str = String(thing);
  if (typeof thing === "number")
    return str.replace(/^(-)?0\./, "$1.");
  return str;
}
function getType(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
  return escaped$1[c] || c;
}
function escapeUnsafeChars(str) {
  return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? "." + key : "[" + escapeUnsafeChars(JSON.stringify(key)) + "]";
}
function stringifyString(str) {
  var result = '"';
  for (var i = 0; i < str.length; i += 1) {
    var char = str.charAt(i);
    var code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped$1) {
      result += escaped$1[char];
    } else if (code >= 55296 && code <= 57343) {
      var next = str.charCodeAt(i + 1);
      if (code <= 56319 && (next >= 56320 && next <= 57343)) {
        result += char + str[++i];
      } else {
        result += "\\u" + code.toString(16).toUpperCase();
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}
function noop() {
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
var subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = [];
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (let i = 0; i < subscribers.length; i += 1) {
          const s2 = subscribers[i];
          s2[1]();
          subscriber_queue.push(s2, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.push(subscriber);
    if (subscribers.length === 1) {
      stop = start(set) || noop;
    }
    run2(value);
    return () => {
      const index2 = subscribers.indexOf(subscriber);
      if (index2 !== -1) {
        subscribers.splice(index2, 1);
      }
      if (subscribers.length === 0) {
        stop();
        stop = null;
      }
    };
  }
  return {set, update, subscribe: subscribe2};
}
var s$1 = JSON.stringify;
async function render_response({
  options: options2,
  $session,
  page_config,
  status,
  error: error2,
  branch,
  page: page2
}) {
  const css2 = new Set(options2.entry.css);
  const js = new Set(options2.entry.js);
  const styles = new Set();
  const serialized_data = [];
  let rendered;
  let is_private = false;
  let maxage;
  if (error2) {
    error2.stack = options2.get_stack(error2);
  }
  if (branch) {
    branch.forEach(({node, loaded, fetched, uses_credentials}) => {
      if (node.css)
        node.css.forEach((url) => css2.add(url));
      if (node.js)
        node.js.forEach((url) => js.add(url));
      if (node.styles)
        node.styles.forEach((content) => styles.add(content));
      if (fetched && page_config.hydrate)
        serialized_data.push(...fetched);
      if (uses_credentials)
        is_private = true;
      maxage = loaded.maxage;
    });
    const session = writable($session);
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        session
      },
      page: page2,
      components: branch.map(({node}) => node.module.default)
    };
    for (let i = 0; i < branch.length; i += 1) {
      props[`props_${i}`] = await branch[i].loaded.props;
    }
    let session_tracking_active = false;
    const unsubscribe = session.subscribe(() => {
      if (session_tracking_active)
        is_private = true;
    });
    session_tracking_active = true;
    try {
      rendered = options2.root.render(props);
    } finally {
      unsubscribe();
    }
  } else {
    rendered = {head: "", html: "", css: ""};
  }
  const include_js = page_config.router || page_config.hydrate;
  if (!include_js)
    js.clear();
  const links = options2.amp ? styles.size > 0 ? `<style amp-custom>${Array.from(styles).join("\n")}</style>` : "" : [
    ...Array.from(js).map((dep) => `<link rel="modulepreload" href="${dep}">`),
    ...Array.from(css2).map((dep) => `<link rel="stylesheet" href="${dep}">`)
  ].join("\n		");
  let init2 = "";
  if (options2.amp) {
    init2 = `
		<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style>
		<noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
		<script async src="https://cdn.ampproject.org/v0.js"></script>`;
  } else if (include_js) {
    init2 = `<script type="module">
			import { start } from ${s$1(options2.entry.file)};
			start({
				target: ${options2.target ? `document.querySelector(${s$1(options2.target)})` : "document.body"},
				paths: ${s$1(options2.paths)},
				session: ${try_serialize($session, (error3) => {
      throw new Error(`Failed to serialize session data: ${error3.message}`);
    })},
				host: ${page2 && page2.host ? s$1(page2.host) : "location.host"},
				route: ${!!page_config.router},
				spa: ${!page_config.ssr},
				hydrate: ${page_config.ssr && page_config.hydrate ? `{
					status: ${status},
					error: ${serialize_error(error2)},
					nodes: [
						${branch.map(({node}) => `import(${s$1(node.entry)})`).join(",\n						")}
					],
					page: {
						host: ${page2.host ? s$1(page2.host) : "location.host"}, // TODO this is redundant
						path: ${s$1(page2.path)},
						query: new URLSearchParams(${s$1(page2.query.toString())}),
						params: ${s$1(page2.params)}
					}
				}` : "null"}
			});
		</script>`;
  }
  const head = [
    rendered.head,
    styles.size && !options2.amp ? `<style data-svelte>${Array.from(styles).join("\n")}</style>` : "",
    links,
    init2
  ].join("\n\n		");
  const body = options2.amp ? rendered.html : `${rendered.html}

			${serialized_data.map(({url, json}) => `<script type="svelte-data" url="${url}">${json}</script>`).join("\n\n			")}
		`.replace(/^\t{2}/gm, "");
  const headers = {
    "content-type": "text/html"
  };
  if (maxage) {
    headers["cache-control"] = `${is_private ? "private" : "public"}, max-age=${maxage}`;
  }
  return {
    status,
    headers,
    body: options2.template({head, body})
  };
}
function try_serialize(data, fail) {
  try {
    return devalue(data);
  } catch (err) {
    if (fail)
      fail(err);
    return null;
  }
}
function serialize_error(error2) {
  if (!error2)
    return null;
  let serialized = try_serialize(error2);
  if (!serialized) {
    const {name, message, stack} = error2;
    serialized = try_serialize({name, message, stack});
  }
  if (!serialized) {
    serialized = "{}";
  }
  return serialized;
}
function normalize(loaded) {
  if (loaded.error) {
    const error2 = typeof loaded.error === "string" ? new Error(loaded.error) : loaded.error;
    const status = loaded.status;
    if (!(error2 instanceof Error)) {
      return {
        status: 500,
        error: new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof error2}"`)
      };
    }
    if (!status || status < 400 || status > 599) {
      console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500');
      return {status: 500, error: error2};
    }
    return {status, error: error2};
  }
  if (loaded.redirect) {
    if (!loaded.status || Math.floor(loaded.status / 100) !== 3) {
      return {
        status: 500,
        error: new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')
      };
    }
    if (typeof loaded.redirect !== "string") {
      return {
        status: 500,
        error: new Error('"redirect" property returned from load() must be a string')
      };
    }
  }
  return loaded;
}
function resolve(base, path) {
  const baseparts = path[0] === "/" ? [] : base.slice(1).split("/");
  const pathparts = path[0] === "/" ? path.slice(1).split("/") : path.split("/");
  baseparts.pop();
  for (let i = 0; i < pathparts.length; i += 1) {
    const part = pathparts[i];
    if (part === ".")
      continue;
    else if (part === "..")
      baseparts.pop();
    else
      baseparts.push(part);
  }
  return `/${baseparts.join("/")}`;
}
var s = JSON.stringify;
async function load_node({
  request,
  options: options2,
  state,
  route,
  page: page2,
  node,
  $session,
  context,
  is_leaf,
  is_error,
  status,
  error: error2
}) {
  const {module: module2} = node;
  let uses_credentials = false;
  const fetched = [];
  let loaded;
  if (module2.load) {
    const load_input = {
      page: page2,
      get session() {
        uses_credentials = true;
        return $session;
      },
      fetch: async (resource, opts = {}) => {
        let url;
        if (typeof resource === "string") {
          url = resource;
        } else {
          url = resource.url;
          opts = {
            method: resource.method,
            headers: resource.headers,
            body: resource.body,
            mode: resource.mode,
            credentials: resource.credentials,
            cache: resource.cache,
            redirect: resource.redirect,
            referrer: resource.referrer,
            integrity: resource.integrity,
            ...opts
          };
        }
        if (options2.read && url.startsWith(options2.paths.assets)) {
          url = url.replace(options2.paths.assets, "");
        }
        if (url.startsWith("//")) {
          throw new Error(`Cannot request protocol-relative URL (${url}) in server-side fetch`);
        }
        let response;
        if (/^[a-zA-Z]+:/.test(url)) {
          response = await fetch(url, opts);
        } else {
          const [path, search] = url.split("?");
          const resolved = resolve(request.path, path);
          const filename = resolved.slice(1);
          const filename_html = `${filename}/index.html`;
          const asset = options2.manifest.assets.find((d2) => d2.file === filename || d2.file === filename_html);
          if (asset) {
            if (options2.read) {
              response = new Response(options2.read(asset.file), {
                headers: {
                  "content-type": asset.type
                }
              });
            } else {
              response = await fetch(`http://${page2.host}/${asset.file}`, opts);
            }
          }
          if (!response) {
            const headers = {...opts.headers};
            if (opts.credentials !== "omit") {
              uses_credentials = true;
              headers.cookie = request.headers.cookie;
              if (!headers.authorization) {
                headers.authorization = request.headers.authorization;
              }
            }
            const rendered = await respond({
              host: request.host,
              method: opts.method || "GET",
              headers,
              path: resolved,
              rawBody: opts.body,
              query: new URLSearchParams(search)
            }, options2, {
              fetched: url,
              initiator: route
            });
            if (rendered) {
              if (state.prerender) {
                state.prerender.dependencies.set(resolved, rendered);
              }
              response = new Response(rendered.body, {
                status: rendered.status,
                headers: rendered.headers
              });
            }
          }
        }
        if (response) {
          const proxy = new Proxy(response, {
            get(response2, key, receiver) {
              async function text() {
                const body = await response2.text();
                const headers = {};
                for (const [key2, value] of response2.headers) {
                  if (key2 !== "etag" && key2 !== "set-cookie")
                    headers[key2] = value;
                }
                fetched.push({
                  url,
                  json: `{"status":${response2.status},"statusText":${s(response2.statusText)},"headers":${s(headers)},"body":${escape(body)}}`
                });
                return body;
              }
              if (key === "text") {
                return text;
              }
              if (key === "json") {
                return async () => {
                  return JSON.parse(await text());
                };
              }
              return Reflect.get(response2, key, response2);
            }
          });
          return proxy;
        }
        return response || new Response("Not found", {
          status: 404
        });
      },
      context: {...context}
    };
    if (is_error) {
      load_input.status = status;
      load_input.error = error2;
    }
    loaded = await module2.load.call(null, load_input);
  } else {
    loaded = {};
  }
  if (!loaded && is_leaf && !is_error)
    return;
  return {
    node,
    loaded: normalize(loaded),
    context: loaded.context || context,
    fetched,
    uses_credentials
  };
}
var escaped = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
function escape(str) {
  let result = '"';
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);
    const code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped) {
      result += escaped[char];
    } else if (code >= 55296 && code <= 57343) {
      const next = str.charCodeAt(i + 1);
      if (code <= 56319 && next >= 56320 && next <= 57343) {
        result += char + str[++i];
      } else {
        result += `\\u${code.toString(16).toUpperCase()}`;
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}
async function respond_with_error({request, options: options2, state, $session, status, error: error2}) {
  const default_layout = await options2.load_component(options2.manifest.layout);
  const default_error = await options2.load_component(options2.manifest.error);
  const page2 = {
    host: request.host,
    path: request.path,
    query: request.query,
    params: {}
  };
  const loaded = await load_node({
    request,
    options: options2,
    state,
    route: null,
    page: page2,
    node: default_layout,
    $session,
    context: {},
    is_leaf: false,
    is_error: false
  });
  const branch = [
    loaded,
    await load_node({
      request,
      options: options2,
      state,
      route: null,
      page: page2,
      node: default_error,
      $session,
      context: loaded.context,
      is_leaf: false,
      is_error: true,
      status,
      error: error2
    })
  ];
  try {
    return await render_response({
      options: options2,
      $session,
      page_config: {
        hydrate: options2.hydrate,
        router: options2.router,
        ssr: options2.ssr
      },
      status,
      error: error2,
      branch,
      page: page2
    });
  } catch (error3) {
    options2.handle_error(error3);
    return {
      status: 500,
      headers: {},
      body: error3.stack
    };
  }
}
async function respond$1({request, options: options2, state, $session, route}) {
  const match = route.pattern.exec(request.path);
  const params = route.params(match);
  const page2 = {
    host: request.host,
    path: request.path,
    query: request.query,
    params
  };
  let nodes;
  try {
    nodes = await Promise.all(route.a.map((id) => id && options2.load_component(id)));
  } catch (error3) {
    options2.handle_error(error3);
    return await respond_with_error({
      request,
      options: options2,
      state,
      $session,
      status: 500,
      error: error3
    });
  }
  const leaf = nodes[nodes.length - 1].module;
  const page_config = {
    ssr: "ssr" in leaf ? leaf.ssr : options2.ssr,
    router: "router" in leaf ? leaf.router : options2.router,
    hydrate: "hydrate" in leaf ? leaf.hydrate : options2.hydrate
  };
  if (!leaf.prerender && state.prerender && !state.prerender.all) {
    return {
      status: 204,
      headers: {},
      body: null
    };
  }
  let branch;
  let status = 200;
  let error2;
  ssr:
    if (page_config.ssr) {
      let context = {};
      branch = [];
      for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i];
        let loaded;
        if (node) {
          try {
            loaded = await load_node({
              request,
              options: options2,
              state,
              route,
              page: page2,
              node,
              $session,
              context,
              is_leaf: i === nodes.length - 1,
              is_error: false
            });
            if (!loaded)
              return;
            if (loaded.loaded.redirect) {
              return {
                status: loaded.loaded.status,
                headers: {
                  location: loaded.loaded.redirect
                }
              };
            }
            if (loaded.loaded.error) {
              ({status, error: error2} = loaded.loaded);
            }
          } catch (e) {
            options2.handle_error(e);
            status = 500;
            error2 = e;
          }
          if (error2) {
            while (i--) {
              if (route.b[i]) {
                const error_node = await options2.load_component(route.b[i]);
                let error_loaded;
                let node_loaded;
                let j = i;
                while (!(node_loaded = branch[j])) {
                  j -= 1;
                }
                try {
                  error_loaded = await load_node({
                    request,
                    options: options2,
                    state,
                    route,
                    page: page2,
                    node: error_node,
                    $session,
                    context: node_loaded.context,
                    is_leaf: false,
                    is_error: true,
                    status,
                    error: error2
                  });
                  if (error_loaded.loaded.error) {
                    continue;
                  }
                  branch = branch.slice(0, j + 1).concat(error_loaded);
                  break ssr;
                } catch (e) {
                  options2.handle_error(e);
                  continue;
                }
              }
            }
            return await respond_with_error({
              request,
              options: options2,
              state,
              $session,
              status,
              error: error2
            });
          }
        }
        branch.push(loaded);
        if (loaded && loaded.loaded.context) {
          context = {
            ...context,
            ...loaded.loaded.context
          };
        }
      }
    }
  try {
    return await render_response({
      options: options2,
      $session,
      page_config,
      status,
      error: error2,
      branch: branch && branch.filter(Boolean),
      page: page2
    });
  } catch (error3) {
    options2.handle_error(error3);
    return await respond_with_error({
      request,
      options: options2,
      state,
      $session,
      status: 500,
      error: error3
    });
  }
}
async function render_page(request, route, options2, state) {
  if (state.initiator === route) {
    return {
      status: 404,
      headers: {},
      body: `Not found: ${request.path}`
    };
  }
  const $session = await options2.hooks.getSession({context: request.context});
  if (route) {
    const response = await respond$1({
      request,
      options: options2,
      state,
      $session,
      route
    });
    if (response) {
      return response;
    }
    if (state.fetched) {
      return {
        status: 500,
        headers: {},
        body: `Bad request in load function: failed to fetch ${state.fetched}`
      };
    }
  } else {
    return await respond_with_error({
      request,
      options: options2,
      state,
      $session,
      status: 404,
      error: new Error(`Not found: ${request.path}`)
    });
  }
}
async function render_route(request, route) {
  const mod = await route.load();
  const handler = mod[request.method.toLowerCase().replace("delete", "del")];
  if (handler) {
    const match = route.pattern.exec(request.path);
    const params = route.params(match);
    const response = await handler({...request, params});
    if (response) {
      if (typeof response !== "object") {
        return {
          status: 500,
          body: `Invalid response from route ${request.path}; 
						 expected an object, got ${typeof response}`,
          headers: {}
        };
      }
      let {status = 200, body, headers = {}} = response;
      headers = lowercase_keys(headers);
      if (typeof body === "object" && !("content-type" in headers) || headers["content-type"] === "application/json") {
        headers = {...headers, "content-type": "application/json"};
        body = JSON.stringify(body);
      }
      return {status, body, headers};
    }
  }
}
function lowercase_keys(obj) {
  const clone2 = {};
  for (const key in obj) {
    clone2[key.toLowerCase()] = obj[key];
  }
  return clone2;
}
function read_only_form_data() {
  const map = new Map();
  return {
    append(key, value) {
      if (map.has(key)) {
        map.get(key).push(value);
      } else {
        map.set(key, [value]);
      }
    },
    data: new ReadOnlyFormData(map)
  };
}
var ReadOnlyFormData = class {
  #map;
  constructor(map) {
    this.#map = map;
  }
  get(key) {
    const value = this.#map.get(key);
    return value && value[0];
  }
  getAll(key) {
    return this.#map.get(key);
  }
  has(key) {
    return this.#map.has(key);
  }
  *[Symbol.iterator]() {
    for (const [key, value] of this.#map) {
      for (let i = 0; i < value.length; i += 1) {
        yield [key, value[i]];
      }
    }
  }
  *entries() {
    for (const [key, value] of this.#map) {
      for (let i = 0; i < value.length; i += 1) {
        yield [key, value[i]];
      }
    }
  }
  *keys() {
    for (const [key, value] of this.#map) {
      for (let i = 0; i < value.length; i += 1) {
        yield key;
      }
    }
  }
  *values() {
    for (const [, value] of this.#map) {
      for (let i = 0; i < value.length; i += 1) {
        yield value;
      }
    }
  }
};
function parse_body(req) {
  const raw = req.rawBody;
  if (!raw)
    return raw;
  const [type, ...directives] = req.headers["content-type"].split(/;\s*/);
  if (typeof raw === "string") {
    switch (type) {
      case "text/plain":
        return raw;
      case "application/json":
        return JSON.parse(raw);
      case "application/x-www-form-urlencoded":
        return get_urlencoded(raw);
      case "multipart/form-data": {
        const boundary = directives.find((directive2) => directive2.startsWith("boundary="));
        if (!boundary)
          throw new Error("Missing boundary");
        return get_multipart(raw, boundary.slice("boundary=".length));
      }
      default:
        throw new Error(`Invalid Content-Type ${type}`);
    }
  }
  return raw;
}
function get_urlencoded(text) {
  const {data, append} = read_only_form_data();
  text.replace(/\+/g, " ").split("&").forEach((str) => {
    const [key, value] = str.split("=");
    append(decodeURIComponent(key), decodeURIComponent(value));
  });
  return data;
}
function get_multipart(text, boundary) {
  const parts = text.split(`--${boundary}`);
  const nope = () => {
    throw new Error("Malformed form data");
  };
  if (parts[0] !== "" || parts[parts.length - 1].trim() !== "--") {
    nope();
  }
  const {data, append} = read_only_form_data();
  parts.slice(1, -1).forEach((part) => {
    const match = /\s*([\s\S]+?)\r\n\r\n([\s\S]*)\s*/.exec(part);
    const raw_headers = match[1];
    const body = match[2].trim();
    let key;
    raw_headers.split("\r\n").forEach((str) => {
      const [raw_header, ...raw_directives] = str.split("; ");
      let [name, value] = raw_header.split(": ");
      name = name.toLowerCase();
      const directives = {};
      raw_directives.forEach((raw_directive) => {
        const [name2, value2] = raw_directive.split("=");
        directives[name2] = JSON.parse(value2);
      });
      if (name === "content-disposition") {
        if (value !== "form-data")
          nope();
        if (directives.filename) {
          throw new Error("File upload is not yet implemented");
        }
        if (directives.name) {
          key = directives.name;
        }
      }
    });
    if (!key)
      nope();
    append(key, body);
  });
  return data;
}
async function respond(incoming, options2, state = {}) {
  if (incoming.path.endsWith("/") && incoming.path !== "/") {
    const q = incoming.query.toString();
    return {
      status: 301,
      headers: {
        location: incoming.path.slice(0, -1) + (q ? `?${q}` : "")
      }
    };
  }
  const incoming_with_body = {
    ...incoming,
    body: parse_body(incoming)
  };
  const context = await options2.hooks.getContext(incoming_with_body) || {};
  try {
    return await options2.hooks.handle({
      request: {
        ...incoming_with_body,
        params: null,
        context
      },
      render: async (request) => {
        if (state.prerender && state.prerender.fallback) {
          return await render_response({
            options: options2,
            $session: await options2.hooks.getSession({context}),
            page_config: {ssr: false, router: true, hydrate: true},
            status: 200,
            error: null,
            branch: [],
            page: null
          });
        }
        for (const route of options2.manifest.routes) {
          if (!route.pattern.test(request.path))
            continue;
          const response = route.type === "endpoint" ? await render_route(request, route) : await render_page(request, route, options2, state);
          if (response) {
            if (response.status === 200) {
              if (!/(no-store|immutable)/.test(response.headers["cache-control"])) {
                const etag = `"${hash2(response.body)}"`;
                if (request.headers["if-none-match"] === etag) {
                  return {
                    status: 304,
                    headers: {},
                    body: null
                  };
                }
                response.headers["etag"] = etag;
              }
            }
            return response;
          }
        }
        return await render_page(request, null, options2, state);
      }
    });
  } catch (e) {
    options2.handle_error(e);
    return {
      status: 500,
      headers: {},
      body: options2.dev ? e.stack : e.message
    };
  }
}
function hash2(str) {
  let hash4 = 5381, i = str.length;
  while (i)
    hash4 = hash4 * 33 ^ str.charCodeAt(--i);
  return (hash4 >>> 0).toString(36);
}

// node_modules/svelte/internal/index.mjs
function noop2() {
}
function run(fn) {
  return fn();
}
function blank_object() {
  return Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function is_function(thing) {
  return typeof thing === "function";
}
function safe_not_equal2(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
function is_empty(obj) {
  return Object.keys(obj).length === 0;
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop2;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function null_to_empty(value) {
  return value == null ? "" : value;
}
var is_client = typeof window !== "undefined";
var now = is_client ? () => window.performance.now() : () => Date.now();
var raf = is_client ? (cb) => requestAnimationFrame(cb) : noop2;
var tasks = new Set();
function run_tasks(now2) {
  tasks.forEach((task) => {
    if (!task.c(now2)) {
      tasks.delete(task);
      task.f();
    }
  });
  if (tasks.size !== 0)
    raf(run_tasks);
}
function loop(callback) {
  let task;
  if (tasks.size === 0)
    raf(run_tasks);
  return {
    promise: new Promise((fulfill) => {
      tasks.add(task = {c: callback, f: fulfill});
    }),
    abort() {
      tasks.delete(task);
    }
  };
}
var active_docs = new Set();
var current_component;
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}
function afterUpdate(fn) {
  get_current_component().$$.after_update.push(fn);
}
function setContext(key, context) {
  get_current_component().$$.context.set(key, context);
}
function getContext(key) {
  return get_current_component().$$.context.get(key);
}
var resolved_promise = Promise.resolve();
var seen_callbacks = new Set();
var outroing = new Set();
var globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : global;
var boolean_attributes = new Set([
  "allowfullscreen",
  "allowpaymentrequest",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "hidden",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected"
]);
var escaped2 = {
  '"': "&quot;",
  "'": "&#39;",
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;"
};
function escape2(html) {
  return String(html).replace(/["'&<>]/g, (match) => escaped2[match]);
}
function each(items, fn) {
  let str = "";
  for (let i = 0; i < items.length; i += 1) {
    str += fn(items[i], i);
  }
  return str;
}
var missing_component = {
  $$render: () => ""
};
function validate_component(component, name) {
  if (!component || !component.$$render) {
    if (name === "svelte:component")
      name += " this={...}";
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
  }
  return component;
}
var on_destroy;
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(parent_component ? parent_component.$$.context : context || []),
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({$$});
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, {$$slots = {}, context = new Map()} = {}) => {
      on_destroy = [];
      const result = {title: "", head: "", css: new Set()};
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css2) => css2.code).join("\n"),
          map: null
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
function add_attribute(name, value, boolean) {
  if (value == null || boolean && !value)
    return "";
  return ` ${name}${value === true ? "" : `=${typeof value === "string" ? JSON.stringify(escape2(value)) : `"${value}"`}`}`;
}
function destroy_component(component, detaching) {
  const $$ = component.$$;
  if ($$.fragment !== null) {
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching);
    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}
var SvelteElement;
if (typeof HTMLElement === "function") {
  SvelteElement = class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode: "open"});
    }
    connectedCallback() {
      const {on_mount} = this.$$;
      this.$$.on_disconnect = on_mount.map(run).filter(is_function);
      for (const key in this.$$.slotted) {
        this.appendChild(this.$$.slotted[key]);
      }
    }
    attributeChangedCallback(attr, _oldValue, newValue) {
      this[attr] = newValue;
    }
    disconnectedCallback() {
      run_all(this.$$.on_disconnect);
    }
    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop2;
    }
    $on(type, callback) {
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index2 = callbacks.indexOf(callback);
        if (index2 !== -1)
          callbacks.splice(index2, 1);
      };
    }
    $set($$props) {
      if (this.$$set && !is_empty($$props)) {
        this.$$.skip_bound = true;
        this.$$set($$props);
        this.$$.skip_bound = false;
      }
    }
  };
}

// .svelte/output/server/app.js
var import_cookie = __toModule(require_cookie());

// node_modules/@lukeed/uuid/dist/index.mjs
var IDX = 256;
var HEX = [];
var BUFFER;
while (IDX--)
  HEX[IDX] = (IDX + 256).toString(16).substring(1);
function v4() {
  var i = 0, num, out = "";
  if (!BUFFER || IDX + 16 > 256) {
    BUFFER = Array(i = 256);
    while (i--)
      BUFFER[i] = 256 * Math.random() | 0;
    i = IDX = 0;
  }
  for (; i < 16; i++) {
    num = BUFFER[IDX + i];
    if (i == 6)
      out += HEX[num & 15 | 64];
    else if (i == 8)
      out += HEX[num & 63 | 128];
    else
      out += HEX[num];
    if (i & 1 && i > 1 && i < 11)
      out += "-";
  }
  IDX++;
  return out;
}

// node_modules/twind/twind.mjs
var import_twind = __toModule(require_twind());
var {apply, autoprefix, create, cssomSheet, directive, hash: hash3, mode, noprefix, setup, silent, strict, theme, tw, voidSheet, warn} = import_twind.default;

// node_modules/twind/colors/colors.mjs
var import_colors = __toModule(require_colors());
var {amber, black, blue, blueGray, coolGray, cyan, emerald, fuchsia, gray, green, indigo, lightBlue, lime, orange, pink, purple, red, rose, teal, trueGray, violet, warmGray, white, yellow} = import_colors.default;

// node_modules/svelte/store/index.mjs
var subscriber_queue2 = [];
function writable2(value, start = noop2) {
  let stop;
  const subscribers = [];
  function set(new_value) {
    if (safe_not_equal2(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue2.length;
        for (let i = 0; i < subscribers.length; i += 1) {
          const s2 = subscribers[i];
          s2[1]();
          subscriber_queue2.push(s2, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue2.length; i += 2) {
            subscriber_queue2[i][0](subscriber_queue2[i + 1]);
          }
          subscriber_queue2.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop2) {
    const subscriber = [run2, invalidate];
    subscribers.push(subscriber);
    if (subscribers.length === 1) {
      stop = start(set) || noop2;
    }
    run2(value);
    return () => {
      const index2 = subscribers.indexOf(subscriber);
      if (index2 !== -1) {
        subscribers.splice(index2, 1);
      }
      if (subscribers.length === 0) {
        stop();
        stop = null;
      }
    };
  }
  return {set, update, subscribe: subscribe2};
}

// node_modules/svelte/motion/index.mjs
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function tick_spring(ctx, last_value, current_value, target_value) {
  if (typeof current_value === "number" || is_date(current_value)) {
    const delta = target_value - current_value;
    const velocity = (current_value - last_value) / (ctx.dt || 1 / 60);
    const spring2 = ctx.opts.stiffness * delta;
    const damper = ctx.opts.damping * velocity;
    const acceleration = (spring2 - damper) * ctx.inv_mass;
    const d2 = (velocity + acceleration) * ctx.dt;
    if (Math.abs(d2) < ctx.opts.precision && Math.abs(delta) < ctx.opts.precision) {
      return target_value;
    } else {
      ctx.settled = false;
      return is_date(current_value) ? new Date(current_value.getTime() + d2) : current_value + d2;
    }
  } else if (Array.isArray(current_value)) {
    return current_value.map((_, i) => tick_spring(ctx, last_value[i], current_value[i], target_value[i]));
  } else if (typeof current_value === "object") {
    const next_value = {};
    for (const k in current_value) {
      next_value[k] = tick_spring(ctx, last_value[k], current_value[k], target_value[k]);
    }
    return next_value;
  } else {
    throw new Error(`Cannot spring ${typeof current_value} values`);
  }
}
function spring(value, opts = {}) {
  const store = writable2(value);
  const {stiffness = 0.15, damping = 0.8, precision = 0.01} = opts;
  let last_time;
  let task;
  let current_token;
  let last_value = value;
  let target_value = value;
  let inv_mass = 1;
  let inv_mass_recovery_rate = 0;
  let cancel_task = false;
  function set(new_value, opts2 = {}) {
    target_value = new_value;
    const token = current_token = {};
    if (value == null || opts2.hard || spring2.stiffness >= 1 && spring2.damping >= 1) {
      cancel_task = true;
      last_time = now();
      last_value = new_value;
      store.set(value = target_value);
      return Promise.resolve();
    } else if (opts2.soft) {
      const rate = opts2.soft === true ? 0.5 : +opts2.soft;
      inv_mass_recovery_rate = 1 / (rate * 60);
      inv_mass = 0;
    }
    if (!task) {
      last_time = now();
      cancel_task = false;
      task = loop((now2) => {
        if (cancel_task) {
          cancel_task = false;
          task = null;
          return false;
        }
        inv_mass = Math.min(inv_mass + inv_mass_recovery_rate, 1);
        const ctx = {
          inv_mass,
          opts: spring2,
          settled: true,
          dt: (now2 - last_time) * 60 / 1e3
        };
        const next_value = tick_spring(ctx, last_value, value, target_value);
        last_time = now2;
        last_value = value;
        store.set(value = next_value);
        if (ctx.settled) {
          task = null;
        }
        return !ctx.settled;
      });
    }
    return new Promise((fulfil) => {
      task.promise.then(() => {
        if (token === current_token)
          fulfil();
      });
    });
  }
  const spring2 = {
    set,
    update: (fn, opts2) => set(fn(target_value, value), opts2),
    subscribe: store.subscribe,
    stiffness,
    damping,
    precision
  };
  return spring2;
}

// .svelte/output/server/app.js
var css$3 = {
  code: "#svelte-announcer.svelte-1j55zn5{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}",
  map: `{"version":3,"file":"root.svelte","sources":["root.svelte"],"sourcesContent":["<!-- This file is generated by @sveltejs/kit \u2014 do not edit it! -->\\n<script>\\n\\timport { setContext, afterUpdate, onMount } from 'svelte';\\n\\n\\t// stores\\n\\texport let stores;\\n\\texport let page;\\n\\n\\texport let components;\\n\\texport let props_0 = null;\\n\\texport let props_1 = null;\\n\\texport let props_2 = null;\\n\\n\\tsetContext('__svelte__', stores);\\n\\n\\t$: stores.page.set(page);\\n\\tafterUpdate(stores.page.notify);\\n\\n\\tlet mounted = false;\\n\\tlet navigated = false;\\n\\tlet title = null;\\n\\n\\tonMount(() => {\\n\\t\\tconst unsubscribe = stores.page.subscribe(() => {\\n\\t\\t\\tif (mounted) {\\n\\t\\t\\t\\tnavigated = true;\\n\\t\\t\\t\\ttitle = document.title || 'untitled page';\\n\\t\\t\\t}\\n\\t\\t});\\n\\n\\t\\tmounted = true;\\n\\t\\treturn unsubscribe;\\n\\t});\\n</script>\\n\\n<svelte:component this={components[0]} {...(props_0 || {})}>\\n\\t{#if components[1]}\\n\\t\\t<svelte:component this={components[1]} {...(props_1 || {})}>\\n\\t\\t\\t{#if components[2]}\\n\\t\\t\\t\\t<svelte:component this={components[2]} {...(props_2 || {})}/>\\n\\t\\t\\t{/if}\\n\\t\\t</svelte:component>\\n\\t{/if}\\n</svelte:component>\\n\\n{#if mounted}\\n\\t<div id=\\"svelte-announcer\\" aria-live=\\"assertive\\" aria-atomic=\\"true\\">\\n\\t\\t{#if navigated}\\n\\t\\t\\tNavigated to {title}\\n\\t\\t{/if}\\n\\t</div>\\n{/if}\\n\\n<style>\\n\\t#svelte-announcer {\\n\\t\\tposition: absolute;\\n\\t\\tleft: 0;\\n\\t\\ttop: 0;\\n\\t\\tclip: rect(0 0 0 0);\\n\\t\\tclip-path: inset(50%);\\n\\t\\toverflow: hidden;\\n\\t\\twhite-space: nowrap;\\n\\t\\twidth: 1px;\\n\\t\\theight: 1px;\\n\\t}\\n</style>"],"names":[],"mappings":"AAsDC,iBAAiB,eAAC,CAAC,AAClB,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,CAAC,CACP,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CACnB,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,QAAQ,CAAE,MAAM,CAChB,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,AACZ,CAAC"}`
};
var Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {stores} = $$props;
  let {page: page2} = $$props;
  let {components} = $$props;
  let {props_0 = null} = $$props;
  let {props_1 = null} = $$props;
  let {props_2 = null} = $$props;
  setContext("__svelte__", stores);
  afterUpdate(stores.page.notify);
  let mounted = false;
  let navigated = false;
  let title = null;
  onMount(() => {
    const unsubscribe = stores.page.subscribe(() => {
      if (mounted) {
        navigated = true;
        title = document.title || "untitled page";
      }
    });
    mounted = true;
    return unsubscribe;
  });
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page2 !== void 0)
    $$bindings.page(page2);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.props_0 === void 0 && $$bindings.props_0 && props_0 !== void 0)
    $$bindings.props_0(props_0);
  if ($$props.props_1 === void 0 && $$bindings.props_1 && props_1 !== void 0)
    $$bindings.props_1(props_1);
  if ($$props.props_2 === void 0 && $$bindings.props_2 && props_2 !== void 0)
    $$bindings.props_2(props_2);
  $$result.css.add(css$3);
  {
    stores.page.set(page2);
  }
  return `


${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, Object.assign(props_0 || {}), {}, {
    default: () => `${components[1] ? `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, Object.assign(props_1 || {}), {}, {
      default: () => `${components[2] ? `${validate_component(components[2] || missing_component, "svelte:component").$$render($$result, Object.assign(props_2 || {}), {}, {})}` : ``}`
    })}` : ``}`
  })}

${mounted ? `<div id="${"svelte-announcer"}" aria-live="${"assertive"}" aria-atomic="${"true"}" class="${"svelte-1j55zn5"}">${navigated ? `Navigated to ${escape2(title)}` : ``}</div>` : ``}`;
});
function set_paths(paths) {
}
function set_prerendering(value) {
}
var getContext2 = (request) => {
  const cookies = import_cookie.default.parse(request.headers.cookie || "");
  return {
    is_new: !cookies.userid,
    userid: cookies.userid || v4()
  };
};
var handle = async ({request, render: render2}) => {
  const response = await render2({
    ...request,
    method: (request.query.get("_method") || request.method).toUpperCase()
  });
  const {is_new, userid} = request.context;
  if (is_new) {
    return {
      ...response,
      headers: {
        ...response.headers,
        "set-cookie": `userid=${userid}; Path=/; HttpOnly`
      }
    };
  }
  return response;
};
var user_hooks = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  getContext: getContext2,
  handle
});
var template = ({head, body}) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<link rel="icon" href="/favicon.ico" />\n		<meta name="viewport" content="width=device-width, initial-scale=1" />\n\n		' + head + '\n	</head>\n	<body>\n		<div id="svelte">' + body + "</div>\n	</body>\n</html>\n";
var options = null;
function init(settings) {
  set_paths(settings.paths);
  set_prerendering(settings.prerendering || false);
  options = {
    amp: false,
    dev: false,
    entry: {
      file: "/./_app/start-efc90fad.js",
      css: ["/./_app/assets/start-a8cd1609.css"],
      js: ["/./_app/start-efc90fad.js", "/./_app/chunks/vendor-09aebf70.js"]
    },
    fetched: void 0,
    get_component_path: (id) => "/./_app/" + entry_lookup[id],
    get_stack: (error2) => String(error2),
    handle_error: (error2) => {
      console.error(error2.stack);
      error2.stack = options.get_stack(error2);
    },
    hooks: get_hooks(user_hooks),
    hydrate: true,
    initiator: void 0,
    load_component,
    manifest,
    paths: settings.paths,
    read: settings.read,
    root: Root,
    router: true,
    ssr: true,
    target: "#svelte",
    template
  };
}
var d = decodeURIComponent;
var empty = () => ({});
var manifest = {
  assets: [{file: "favicon.ico", size: 1150, type: "image/vnd.microsoft.icon"}, {file: "robots.txt", size: 67, type: "text/plain"}, {file: "svelte-welcome.png", size: 360807, type: "image/png"}, {file: "svelte-welcome.webp", size: 115470, type: "image/webp"}],
  layout: "src/routes/$layout.svelte",
  error: ".svelte/build/components/error.svelte",
  routes: [
    {
      type: "page",
      pattern: /^\/$/,
      params: empty,
      a: ["src/routes/$layout.svelte", "src/routes/index.svelte"],
      b: [".svelte/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/champions\/?$/,
      params: empty,
      a: ["src/routes/$layout.svelte", "src/routes/champions.svelte"],
      b: [".svelte/build/components/error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/summoners\/([^/]+?)\/?$/,
      params: (m) => ({summonerName: d(m[1])}),
      a: ["src/routes/$layout.svelte", "src/routes/summoners/[summonerName].svelte"],
      b: [".svelte/build/components/error.svelte"]
    },
    {
      type: "endpoint",
      pattern: /^\/api\/ddragon\/([^/]+?)\/data\/([^/]+?)\/champion\/?$/,
      params: (m) => ({version: d(m[1]), locale: d(m[2])}),
      load: () => Promise.resolve().then(function() {
        return champion;
      })
    },
    {
      type: "endpoint",
      pattern: /^\/api\/lol\/champion-mastery\/v4\/champion-masteries\/by-summoner\/([^/]+?)\/?$/,
      params: (m) => ({encryptedSummonerID: d(m[1])}),
      load: () => Promise.resolve().then(function() {
        return index$6;
      })
    },
    {
      type: "endpoint",
      pattern: /^\/api\/lol\/champion-mastery\/v4\/champion-masteries\/by-summoner\/([^/]+?)\/by-champion\/([^/]+?)\/?$/,
      params: (m) => ({encryptedSummonerID: d(m[1]), championId: d(m[2])}),
      load: () => Promise.resolve().then(function() {
        return _championId_;
      })
    },
    {
      type: "endpoint",
      pattern: /^\/api\/lol\/champion-mastery\/v4\/scores\/by-summoner\/([^/]+?)\/?$/,
      params: (m) => ({encryptedSummonerID: d(m[1])}),
      load: () => Promise.resolve().then(function() {
        return _encryptedSummonerID_$3;
      })
    },
    {
      type: "endpoint",
      pattern: /^\/api\/lol\/third-party-code\/v4\/third-party-code\/by-summoner\/([^/]+?)\/?$/,
      params: (m) => ({encryptedSummonerID: d(m[1])}),
      load: () => Promise.resolve().then(function() {
        return _encryptedSummonerID_$2;
      })
    },
    {
      type: "endpoint",
      pattern: /^\/api\/lol\/league-exp\/v4\/entries\/([^/]+?)\/([^/]+?)\/([^/]+?)\/?$/,
      params: (m) => ({queue: d(m[1]), tier: d(m[2]), division: d(m[3])}),
      load: () => Promise.resolve().then(function() {
        return index$5;
      })
    },
    {
      type: "endpoint",
      pattern: /^\/api\/lol\/spectator\/v4\/featured-games\/?$/,
      params: empty,
      load: () => Promise.resolve().then(function() {
        return featuredGames;
      })
    },
    {
      type: "endpoint",
      pattern: /^\/api\/lol\/spectator\/v4\/active-games\/by-summoner\/([^/]+?)\/?$/,
      params: (m) => ({encryptedSummonerID: d(m[1])}),
      load: () => Promise.resolve().then(function() {
        return _encryptedSummonerID_$1;
      })
    },
    {
      type: "endpoint",
      pattern: /^\/api\/lol\/champion\/v3\/champion-rotations\/?$/,
      params: empty,
      load: () => Promise.resolve().then(function() {
        return championRotations;
      })
    },
    {
      type: "endpoint",
      pattern: /^\/api\/lol\/summoner\/v4\/summoners\/by-account\/([^/]+?)\/?$/,
      params: (m) => ({encryptedAccountID: d(m[1])}),
      load: () => Promise.resolve().then(function() {
        return _encryptedAccountID_$1;
      })
    },
    {
      type: "endpoint",
      pattern: /^\/api\/lol\/summoner\/v4\/summoners\/by-puuid\/([^/]+?)\/?$/,
      params: (m) => ({encryptedPUUID: d(m[1])}),
      load: () => Promise.resolve().then(function() {
        return _encryptedPUUID_;
      })
    },
    {
      type: "endpoint",
      pattern: /^\/api\/lol\/summoner\/v4\/summoners\/by-name\/([^/]+?)\/?$/,
      params: (m) => ({summonerName: d(m[1])}),
      load: () => Promise.resolve().then(function() {
        return _summonerName_$1;
      })
    },
    {
      type: "endpoint",
      pattern: /^\/api\/lol\/summoner\/v4\/summoners\/([^/]+?)\/?$/,
      params: (m) => ({encryptedSummonerID: d(m[1])}),
      load: () => Promise.resolve().then(function() {
        return index$4;
      })
    },
    {
      type: "endpoint",
      pattern: /^\/api\/lol\/league\/v4\/grandmasterleagues\/([^/]+?)\/?$/,
      params: (m) => ({queue: d(m[1])}),
      load: () => Promise.resolve().then(function() {
        return _queue_$2;
      })
    },
    {
      type: "endpoint",
      pattern: /^\/api\/lol\/league\/v4\/challengerleagues\/by-queue\/([^/]+?)\/?$/,
      params: (m) => ({queue: d(m[1])}),
      load: () => Promise.resolve().then(function() {
        return _queue_$1;
      })
    },
    {
      type: "endpoint",
      pattern: /^\/api\/lol\/league\/v4\/masterleagues\/([^/]+?)\/?$/,
      params: (m) => ({queue: d(m[1])}),
      load: () => Promise.resolve().then(function() {
        return _queue_;
      })
    },
    {
      type: "endpoint",
      pattern: /^\/api\/lol\/league\/v4\/entries\/by-summoner\/([^/]+?)\/?$/,
      params: (m) => ({encryptedSummonerID: d(m[1])}),
      load: () => Promise.resolve().then(function() {
        return _encryptedSummonerID_;
      })
    },
    {
      type: "endpoint",
      pattern: /^\/api\/lol\/league\/v4\/entries\/([^/]+?)\/([^/]+?)\/([^/]+?)\/?$/,
      params: (m) => ({queue: d(m[1]), tier: d(m[2]), division: d(m[3])}),
      load: () => Promise.resolve().then(function() {
        return index$3;
      })
    },
    {
      type: "endpoint",
      pattern: /^\/api\/lol\/league\/v4\/leagues\/([^/]+?)\/?$/,
      params: (m) => ({leagueId: d(m[1])}),
      load: () => Promise.resolve().then(function() {
        return _leagueId_;
      })
    },
    {
      type: "endpoint",
      pattern: /^\/api\/lol\/status\/v3\/shard-data\/?$/,
      params: empty,
      load: () => Promise.resolve().then(function() {
        return shardData;
      })
    },
    {
      type: "endpoint",
      pattern: /^\/api\/lol\/match\/v4\/matchlists\/by-account\/([^/]+?)\/?$/,
      params: (m) => ({encryptedAccountID: d(m[1])}),
      load: () => Promise.resolve().then(function() {
        return _encryptedAccountID_;
      })
    },
    {
      type: "endpoint",
      pattern: /^\/api\/lol\/match\/v4\/timelines\/by-match\/([^/]+?)\/?$/,
      params: (m) => ({matchId: d(m[1])}),
      load: () => Promise.resolve().then(function() {
        return _matchId_;
      })
    },
    {
      type: "endpoint",
      pattern: /^\/api\/lol\/match\/v4\/matches\/by-tournament-code\/([^/]+?)\/ids\/?$/,
      params: (m) => ({tournamentCode: d(m[1])}),
      load: () => Promise.resolve().then(function() {
        return index$2;
      })
    },
    {
      type: "endpoint",
      pattern: /^\/api\/lol\/match\/v4\/matches\/([^/]+?)\/?$/,
      params: (m) => ({matchId: d(m[1])}),
      load: () => Promise.resolve().then(function() {
        return index$1;
      })
    },
    {
      type: "endpoint",
      pattern: /^\/api\/lol\/match\/v4\/matches\/([^/]+?)\/by-tournament-code\/([^/]+?)\/?$/,
      params: (m) => ({matchId: d(m[1]), tournamentCode: d(m[2])}),
      load: () => Promise.resolve().then(function() {
        return _tournamentCode_;
      })
    }
  ]
};
var get_hooks = (hooks) => ({
  getContext: hooks.getContext || (() => ({})),
  getSession: hooks.getSession || (() => ({})),
  handle: hooks.handle || (({request, render: render2}) => render2(request))
});
var module_lookup = {
  "src/routes/$layout.svelte": () => Promise.resolve().then(function() {
    return $layout$1;
  }),
  ".svelte/build/components/error.svelte": () => Promise.resolve().then(function() {
    return error;
  }),
  "src/routes/index.svelte": () => Promise.resolve().then(function() {
    return index;
  }),
  "src/routes/champions.svelte": () => Promise.resolve().then(function() {
    return champions;
  }),
  "src/routes/summoners/[summonerName].svelte": () => Promise.resolve().then(function() {
    return _summonerName_;
  })
};
var metadata_lookup = {"src/routes/$layout.svelte": {entry: "/./_app/pages/$layout.svelte-2c01aa56.js", css: ["/./_app/assets/pages/$layout.svelte-fef7bb48.css"], js: ["/./_app/pages/$layout.svelte-2c01aa56.js", "/./_app/chunks/vendor-09aebf70.js"], styles: null}, ".svelte/build/components/error.svelte": {entry: "/./_app/error.svelte-7bb94a9d.js", css: [], js: ["/./_app/error.svelte-7bb94a9d.js", "/./_app/chunks/vendor-09aebf70.js"], styles: null}, "src/routes/index.svelte": {entry: "/./_app/pages/index.svelte-347fe96b.js", css: ["/./_app/assets/pages/index.svelte-806ed064.css"], js: ["/./_app/pages/index.svelte-347fe96b.js", "/./_app/chunks/vendor-09aebf70.js"], styles: null}, "src/routes/champions.svelte": {entry: "/./_app/pages/champions.svelte-619f5cf2.js", css: [], js: ["/./_app/pages/champions.svelte-619f5cf2.js", "/./_app/chunks/vendor-09aebf70.js"], styles: null}, "src/routes/summoners/[summonerName].svelte": {entry: "/./_app/pages/summoners/[summonerName].svelte-591d910c.js", css: [], js: ["/./_app/pages/summoners/[summonerName].svelte-591d910c.js", "/./_app/chunks/vendor-09aebf70.js"], styles: null}};
async function load_component(file) {
  return {
    module: await module_lookup[file](),
    ...metadata_lookup[file]
  };
}
init({paths: {base: "", assets: "/."}});
function render(request, {
  prerender: prerender2
} = {}) {
  const host = request.headers["host"];
  return respond({...request, host}, options, {prerender: prerender2});
}
var URL$n = "http://ddragon.leagueoflegends.com/cdn/";
var OPTIONS$o = {
  method: "GET",
  withCredentials: true,
  headers: {
    "X-Riot-Token": "RGAPI-f36e6fb6-12ee-4a41-82af-07b56867cc3d",
    "Content-Type": "application/json"
  }
};
async function get$o({
  params
}) {
  const {version, locale} = params;
  const res = await fetch(`${URL$n}${version}/data/${locale}/champion.json`, OPTIONS$o);
  if (res.ok) {
    const champions2 = await res.json();
    return {
      body: champions2
    };
  }
  return {
    status: res.status,
    statusText: res.statusText
  };
}
var champion = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  get: get$o
});
var END_POINT$m = "/lol/champion-mastery/v4/champion-masteries/by-summoner/";
var URL$m = "https://euw1.api.riotgames.com" + END_POINT$m;
var OPTIONS$n = {
  method: "GET",
  withCredentials: true,
  headers: {
    "X-Riot-Token": "RGAPI-f36e6fb6-12ee-4a41-82af-07b56867cc3d",
    "Content-Type": "application/json"
  }
};
async function get$n({
  params
}) {
  const {encryptedSummonerID} = params;
  const res = await fetch(URL$m + encryptedSummonerID, OPTIONS$n);
  if (res.ok) {
    const leagues = await res.json();
    return {
      body: leagues
    };
  }
  return {
    status: res.status,
    statusText: res.statusText
  };
}
var index$6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  get: get$n
});
var OPTIONS$m = {
  method: "GET",
  withCredentials: true,
  headers: {
    "X-Riot-Token": "RGAPI-f36e6fb6-12ee-4a41-82af-07b56867cc3d",
    "Content-Type": "application/json"
  }
};
async function get$m({
  params
}) {
  const {encryptedSummonerID, championId} = params;
  const res = await fetch("https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/" + encryptedSummonerID + "/by-champion/" + championId, OPTIONS$m);
  if (res.ok) {
    const leagues = await res.json();
    return {
      body: leagues
    };
  }
  return {
    status: res.status,
    statusText: res.statusText
  };
}
var _championId_ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  get: get$m
});
var END_POINT$l = "/lol/champion-mastery/v4/scores/by-summoner/";
var URL$l = "https://euw1.api.riotgames.com" + END_POINT$l;
var OPTIONS$l = {
  method: "GET",
  withCredentials: true,
  headers: {
    "X-Riot-Token": "RGAPI-f36e6fb6-12ee-4a41-82af-07b56867cc3d",
    "Content-Type": "application/json"
  }
};
async function get$l({
  params
}) {
  const {encryptedSummonerID} = params;
  const res = await fetch(URL$l + encryptedSummonerID, OPTIONS$l);
  if (res.ok) {
    const score = await res.json();
    return {
      body: String(score)
    };
  }
  return {
    status: res.status,
    statusText: res.statusText
  };
}
var _encryptedSummonerID_$3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  get: get$l
});
var END_POINT$k = "/lol/platform/v4/third-party-code/by-summoner/";
var URL$k = "https://euw1.api.riotgames.com" + END_POINT$k;
var OPTIONS$k = {
  method: "GET",
  withCredentials: true,
  headers: {
    "X-Riot-Token": "RGAPI-f36e6fb6-12ee-4a41-82af-07b56867cc3d",
    "Content-Type": "application/json"
  }
};
async function get$k({
  params
}) {
  const {encryptedSummonerID} = params;
  const res = await fetch(URL$k + encryptedSummonerID, OPTIONS$k);
  if (res.ok) {
    const leagues = await res.json();
    return {
      body: leagues
    };
  }
  return {
    status: res.status,
    statusText: res.statusText
  };
}
var _encryptedSummonerID_$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  get: get$k
});
var END_POINT$j = "/lol/league-exp/v4/entries/";
var URL$j = "https://euw1.api.riotgames.com" + END_POINT$j;
var OPTIONS$j = {
  method: "GET",
  withCredentials: true,
  headers: {
    "X-Riot-Token": "RGAPI-f36e6fb6-12ee-4a41-82af-07b56867cc3d",
    "Content-Type": "application/json"
  }
};
async function get$j({
  params
}) {
  const {queue, tier, division} = params;
  const res = await fetch(URL$j + queue + "/" + tier + "/" + division, OPTIONS$j);
  if (res.ok) {
    const leagues = await res.json();
    return {
      body: leagues
    };
  }
  return {
    status: res.status,
    statusText: res.statusText
  };
}
var index$5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  get: get$j
});
var END_POINT$i = "/lol/spectator/v4/featured-games";
var URL$i = "https://euw1.api.riotgames.com" + END_POINT$i;
var OPTIONS$i = {
  method: "GET",
  withCredentials: true,
  headers: {
    "X-Riot-Token": "RGAPI-f36e6fb6-12ee-4a41-82af-07b56867cc3d",
    "Content-Type": "application/json"
  }
};
async function get$i() {
  const res = await fetch(URL$i, OPTIONS$i);
  if (res.ok) {
    const championRotations2 = await res.json();
    return {
      body: championRotations2
    };
  }
  return {
    status: res.status,
    statusText: res.statusText
  };
}
var featuredGames = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  get: get$i
});
var END_POINT$h = "/lol/spectator/v4/active-games/by-summoner/";
var URL$h = "https://euw1.api.riotgames.com" + END_POINT$h;
var OPTIONS$h = {
  method: "GET",
  withCredentials: true,
  headers: {
    "X-Riot-Token": "RGAPI-f36e6fb6-12ee-4a41-82af-07b56867cc3d",
    "Content-Type": "application/json"
  }
};
async function get$h({
  params
}) {
  const {encryptedSummonerID} = params;
  const res = await fetch(URL$h + encryptedSummonerID, OPTIONS$h);
  if (res.ok) {
    const leagues = await res.json();
    return {
      body: leagues
    };
  }
  return {
    status: res.status,
    statusText: res.statusText
  };
}
var _encryptedSummonerID_$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  get: get$h
});
var END_POINT$g = "/lol/platform/v3/champion-rotations";
var URL$g = "https://euw1.api.riotgames.com" + END_POINT$g;
var OPTIONS$g = {
  method: "GET",
  withCredentials: true,
  headers: {
    "X-Riot-Token": "RGAPI-f36e6fb6-12ee-4a41-82af-07b56867cc3d",
    "Content-Type": "application/json"
  }
};
async function get$g() {
  const res = await fetch(URL$g, OPTIONS$g);
  if (res.ok) {
    const championRotations2 = await res.json();
    return {
      body: championRotations2
    };
  }
  return {
    status: res.status,
    statusText: res.statusText
  };
}
var championRotations = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  get: get$g
});
var END_POINT$f = "/lol/summoner/v4/summoners/by-account/";
var URL$f = "https://euw1.api.riotgames.com" + END_POINT$f;
var OPTIONS$f = {
  method: "GET",
  withCredentials: true,
  headers: {
    "X-Riot-Token": "RGAPI-f36e6fb6-12ee-4a41-82af-07b56867cc3d",
    "Content-Type": "application/json"
  }
};
async function get$f({
  params
}) {
  const {encryptedAccountID} = params;
  const res = await fetch(URL$f + encryptedAccountID, OPTIONS$f);
  if (res.ok) {
    const leagues = await res.json();
    return {
      body: leagues
    };
  }
  return {
    status: res.status,
    statusText: res.statusText
  };
}
var _encryptedAccountID_$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  get: get$f
});
var END_POINT$e = "/lol/summoner/v4/summoners/by-puuid/";
var URL$e = "https://euw1.api.riotgames.com" + END_POINT$e;
var OPTIONS$e = {
  method: "GET",
  withCredentials: true,
  headers: {
    "X-Riot-Token": "RGAPI-f36e6fb6-12ee-4a41-82af-07b56867cc3d",
    "Content-Type": "application/json"
  }
};
async function get$e({
  params
}) {
  const {encryptedPUUID} = params;
  const res = await fetch(URL$e + encryptedPUUID, OPTIONS$e);
  if (res.ok) {
    const leagues = await res.json();
    return {
      body: leagues
    };
  }
  return {
    status: res.status,
    statusText: res.statusText
  };
}
var _encryptedPUUID_ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  get: get$e
});
var END_POINT$d = "/lol/summoner/v4/summoners/by-name/";
var URL$d = "https://euw1.api.riotgames.com" + END_POINT$d;
var OPTIONS$d = {
  method: "GET",
  withCredentials: true,
  headers: {
    "X-Riot-Token": "RGAPI-f36e6fb6-12ee-4a41-82af-07b56867cc3d",
    "Content-Type": "application/json"
  }
};
async function get$d({
  params
}) {
  const {summonerName} = params;
  const res = await fetch(URL$d + summonerName, OPTIONS$d);
  if (res.ok) {
    const leagues = await res.json();
    return {
      body: leagues
    };
  }
  return {
    status: res.status,
    statusText: res.statusText
  };
}
var _summonerName_$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  get: get$d
});
var END_POINT$c = "/lol/summoner/v4/summoners/";
var URL$c = "https://euw1.api.riotgames.com" + END_POINT$c;
var OPTIONS$c = {
  method: "GET",
  withCredentials: true,
  headers: {
    "X-Riot-Token": "RGAPI-f36e6fb6-12ee-4a41-82af-07b56867cc3d",
    "Content-Type": "application/json"
  }
};
async function get$c({
  params
}) {
  const {encryptedSummonerID} = params;
  const res = await fetch(URL$c + encryptedSummonerID, OPTIONS$c);
  if (res.ok) {
    const leagues = await res.json();
    return {
      body: leagues
    };
  }
  return {
    status: res.status,
    statusText: res.statusText
  };
}
var index$4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  get: get$c
});
var END_POINT$b = "/lol/league/v4/challengerleagues/by-queue/";
var URL$b = "https://euw1.api.riotgames.com" + END_POINT$b;
var OPTIONS$b = {
  method: "GET",
  withCredentials: true,
  headers: {
    "X-Riot-Token": "RGAPI-f36e6fb6-12ee-4a41-82af-07b56867cc3d",
    "Content-Type": "application/json"
  }
};
async function get$b({
  params
}) {
  const {queue} = params;
  const res = await fetch(URL$b + queue, OPTIONS$b);
  if (res.ok) {
    const leagues = await res.json();
    return {
      body: leagues
    };
  }
  return {
    status: res.status,
    statusText: res.statusText
  };
}
var _queue_$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  get: get$b
});
var END_POINT$a = "/lol/league/v4/grandmasterleagues/by-queue/";
var URL$a = "https://euw1.api.riotgames.com" + END_POINT$a;
var OPTIONS$a = {
  method: "GET",
  withCredentials: true,
  headers: {
    "X-Riot-Token": "RGAPI-f36e6fb6-12ee-4a41-82af-07b56867cc3d",
    "Content-Type": "application/json"
  }
};
async function get$a({
  params
}) {
  const {queue} = params;
  const res = await fetch(URL$a + queue, OPTIONS$a);
  if (res.ok) {
    const leagues = await res.json();
    return {
      body: leagues
    };
  }
  return {
    status: res.status,
    statusText: res.statusText
  };
}
var _queue_$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  get: get$a
});
var END_POINT$9 = "/lol/league/v4/masterleagues/by-queue/";
var URL$9 = "https://euw1.api.riotgames.com" + END_POINT$9;
var OPTIONS$9 = {
  method: "GET",
  withCredentials: true,
  headers: {
    "X-Riot-Token": "RGAPI-f36e6fb6-12ee-4a41-82af-07b56867cc3d",
    "Content-Type": "application/json"
  }
};
async function get$9({
  params
}) {
  const {queue} = params;
  const res = await fetch(URL$9 + queue, OPTIONS$9);
  if (res.ok) {
    const leagues = await res.json();
    return {
      body: leagues
    };
  }
  return {
    status: res.status,
    statusText: res.statusText
  };
}
var _queue_ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  get: get$9
});
var END_POINT$8 = "/lol/league/v4/entries/by-summoner/";
var URL$8 = "https://euw1.api.riotgames.com" + END_POINT$8;
var OPTIONS$8 = {
  method: "GET",
  withCredentials: true,
  headers: {
    "X-Riot-Token": "RGAPI-f36e6fb6-12ee-4a41-82af-07b56867cc3d",
    "Content-Type": "application/json"
  }
};
async function get$8({
  params
}) {
  const {encryptedSummonerID} = params;
  const res = await fetch(URL$8 + encryptedSummonerID, OPTIONS$8);
  if (res.ok) {
    const entryBySummoner = await res.json();
    return {
      body: entryBySummoner
    };
  }
  return {
    status: res.status,
    statusText: res.statusText
  };
}
var _encryptedSummonerID_ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  get: get$8
});
var END_POINT$7 = "/lol/league/v4/entries/";
var URL$7 = "https://euw1.api.riotgames.com" + END_POINT$7;
var OPTIONS$7 = {
  method: "GET",
  withCredentials: true,
  headers: {
    "X-Riot-Token": "RGAPI-f36e6fb6-12ee-4a41-82af-07b56867cc3d",
    "Content-Type": "application/json"
  }
};
async function get$7({
  params,
  query
}) {
  const {queue, tier, division} = params;
  const res = await fetch(URL$7 + queue + "/" + tier + "/" + division + "?" + query.toString(), OPTIONS$7);
  if (res.ok) {
    const leagues = await res.json();
    return {
      body: leagues
    };
  }
  return {
    status: res.status,
    statusText: res.statusText
  };
}
var index$3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  get: get$7
});
var END_POINT$6 = "/lol/league/v4/leagues/";
var URL$6 = "https://euw1.api.riotgames.com" + END_POINT$6;
var OPTIONS$6 = {
  method: "GET",
  withCredentials: true,
  headers: {
    "X-Riot-Token": "RGAPI-f36e6fb6-12ee-4a41-82af-07b56867cc3d",
    "Content-Type": "application/json"
  }
};
async function get$6({
  params
}) {
  const {leagueId} = params;
  const res = await fetch(URL$6 + leagueId, OPTIONS$6);
  if (res.ok) {
    const league = await res.json();
    return {
      body: league
    };
  }
  return {
    status: res.status,
    statusText: res.statusText
  };
}
var _leagueId_ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  get: get$6
});
var END_POINT$5 = "/lol/status/v3/shard-data";
var URL$5 = "https://euw1.api.riotgames.com" + END_POINT$5;
var OPTIONS$5 = {
  method: "GET",
  withCredentials: true,
  headers: {
    "X-Riot-Token": "RGAPI-f36e6fb6-12ee-4a41-82af-07b56867cc3d",
    "Content-Type": "application/json"
  }
};
async function get$5() {
  const res = await fetch(URL$5, OPTIONS$5);
  if (res.ok) {
    const status = await res.json();
    return {
      body: status
    };
  }
  return {
    status: res.status,
    statusText: res.statusText
  };
}
var shardData = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  get: get$5
});
var END_POINT$4 = "/lol/match/v4/matchlists/by-account/";
var URL$4 = "https://euw1.api.riotgames.com" + END_POINT$4;
var OPTIONS$4 = {
  method: "GET",
  withCredentials: true,
  headers: {
    "X-Riot-Token": "RGAPI-f36e6fb6-12ee-4a41-82af-07b56867cc3d",
    "Content-Type": "application/json"
  }
};
async function get$4({
  params,
  query
}) {
  const {encryptedAccountId} = params;
  const res = await fetch(URL$4 + encryptedAccountId + "?" + query, OPTIONS$4);
  if (res.ok) {
    const leagues = await res.json();
    return {
      body: leagues
    };
  }
  return {
    status: res.status,
    statusText: res.statusText
  };
}
var _encryptedAccountID_ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  get: get$4
});
var END_POINT$3 = "/lol/match/v4/timelines/by-match/";
var URL$3 = "https://euw1.api.riotgames.com" + END_POINT$3;
var OPTIONS$3 = {
  method: "GET",
  withCredentials: true,
  headers: {
    "X-Riot-Token": "RGAPI-f36e6fb6-12ee-4a41-82af-07b56867cc3d",
    "Content-Type": "application/json"
  }
};
async function get$3({
  params
}) {
  const {matchId} = params;
  const res = await fetch(URL$3 + matchId, OPTIONS$3);
  if (res.ok) {
    const leagues = await res.json();
    return {
      body: leagues
    };
  }
  return {
    status: res.status,
    statusText: res.statusText
  };
}
var _matchId_ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  get: get$3
});
var END_POINT$2 = "/lol/match/v4/matches/by-tournament-code/";
var URL$2 = "https://euw1.api.riotgames.com" + END_POINT$2;
var OPTIONS$2 = {
  method: "GET",
  withCredentials: true,
  headers: {
    "X-Riot-Token": "RGAPI-f36e6fb6-12ee-4a41-82af-07b56867cc3d",
    "Content-Type": "application/json"
  }
};
async function get$2({
  params
}) {
  const {tournamentCode} = params;
  const res = await fetch(URL$2 + tournamentCode + "/ids", OPTIONS$2);
  if (res.ok) {
    const leagues = await res.json();
    return {
      body: leagues
    };
  }
  return {
    status: res.status,
    statusText: res.statusText
  };
}
var index$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  get: get$2
});
var END_POINT$1 = "/lol/match/v4/matches/";
var URL$1 = "https://euw1.api.riotgames.com" + END_POINT$1;
var OPTIONS$1 = {
  method: "GET",
  withCredentials: true,
  headers: {
    "X-Riot-Token": "RGAPI-f36e6fb6-12ee-4a41-82af-07b56867cc3d",
    "Content-Type": "application/json"
  }
};
async function get$1({
  params
}) {
  const {matchId} = params;
  const res = await fetch(URL$1 + matchId, OPTIONS$1);
  if (res.ok) {
    const leagues = await res.json();
    return {
      body: leagues
    };
  }
  return {
    status: res.status,
    statusText: res.statusText
  };
}
var index$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  get: get$1
});
var END_POINT = "/lol/match/v4/timelines/by-match/";
var URL2 = "https://euw1.api.riotgames.com" + END_POINT;
var OPTIONS = {
  method: "GET",
  withCredentials: true,
  headers: {
    "X-Riot-Token": "RGAPI-f36e6fb6-12ee-4a41-82af-07b56867cc3d",
    "Content-Type": "application/json"
  }
};
async function get({
  params
}) {
  const {matchId, tournamentCode} = params;
  const res = await fetch(URL2 + matchId + "/by-tournament-code/" + tournamentCode, OPTIONS);
  if (res.ok) {
    const leagues = await res.json();
    return {
      body: leagues
    };
  }
  return {
    status: res.status,
    statusText: res.statusText
  };
}
var _tournamentCode_ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  get
});
var getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session
  };
};
var page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var logo = "/_app/assets/svelte-logo.87df40b8.svg";
var css$2 = {
  code: "li.svelte-11fl9je.svelte-11fl9je{position:relative;height:100%}li.active.svelte-11fl9je.svelte-11fl9je::before{--size:6px;content:'';width:0;height:0;position:absolute;top:0;left:calc(50% - var(--size));border:var(--size) solid transparent;border-top:var(--size) solid var(--accent-color)}nav.svelte-11fl9je a.svelte-11fl9je{display:flex;height:100%;align-items:center;padding:0 1em;color:var(--heading-color);font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:10%;text-decoration:none;transition:color 0.2s linear}a.svelte-11fl9je.svelte-11fl9je:hover{color:var(--accent-color)}",
  map: `{"version":3,"file":"index.svelte","sources":["index.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { tw } from 'twind';\\nimport { page } from '$app/stores';\\nimport logo from './svelte-logo.svg';\\n</script>\\n\\n<header class={tw\`flex justify-between\`}>\\n\\t<div class={tw\`h-8 w-8\`}>\\n\\t\\t<a class=\\"flex items-center justify-center w-full h-full\\" href=\\"https://kit.svelte.dev\\">\\n\\t\\t\\t<img class=\\"h-8 w-8 object-contain\\" src={logo} alt=\\"SvelteKit\\" />\\n\\t\\t</a>\\n\\t</div>\\n\\n\\t<nav class=\\"flex justify-center bg-gray-200\\">\\n\\t\\t<ul class=\\"relative p-0 m-0 h-12 flex items-center list-none\\">\\n\\t\\t\\t<li class:active={$page.path === '/'}><a sveltekit:prefetch href=\\"/\\">Home</a></li>\\n\\t\\t\\t<li class:active={$page.path === '/champions'}>\\n\\t\\t\\t\\t<a sveltekit:prefetch href=\\"/champions\\">Champions</a>\\n\\t\\t\\t</li>\\n\\t\\t\\t<li class:active={$page.path === '/summoners/Doublelift'}>\\n\\t\\t\\t\\t<a sveltekit:prefetch href=\\"/summoners/Doublelift\\">Summoners</a>\\n\\t\\t\\t</li>\\n\\t\\t</ul>\\n\\t\\t<svg viewBox=\\"0 0 2 3\\" aria-hidden=\\"true\\">\\n\\t\\t\\t<path d=\\"M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z\\" />\\n\\t\\t</svg>\\n\\t</nav>\\n\\n\\t<div class={tw\`h-8 w-8\`}>\\n\\t\\t<!-- TODO put something else here? github link? -->\\n\\t</div>\\n</header>\\n\\n<style>\\n\\tli {\\n\\t\\tposition: relative;\\n\\t\\theight: 100%;\\n\\t}\\n\\n\\tli.active::before {\\n\\t\\t--size: 6px;\\n\\t\\tcontent: '';\\n\\t\\twidth: 0;\\n\\t\\theight: 0;\\n\\t\\tposition: absolute;\\n\\t\\ttop: 0;\\n\\t\\tleft: calc(50% - var(--size));\\n\\t\\tborder: var(--size) solid transparent;\\n\\t\\tborder-top: var(--size) solid var(--accent-color);\\n\\t}\\n\\n\\tnav a {\\n\\t\\tdisplay: flex;\\n\\t\\theight: 100%;\\n\\t\\talign-items: center;\\n\\t\\tpadding: 0 1em;\\n\\t\\tcolor: var(--heading-color);\\n\\t\\tfont-weight: 700;\\n\\t\\tfont-size: 0.8rem;\\n\\t\\ttext-transform: uppercase;\\n\\t\\tletter-spacing: 10%;\\n\\t\\ttext-decoration: none;\\n\\t\\ttransition: color 0.2s linear;\\n\\t}\\n\\n\\ta:hover {\\n\\t\\tcolor: var(--accent-color);\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAiCC,EAAE,8BAAC,CAAC,AACH,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,IAAI,AACb,CAAC,AAED,EAAE,qCAAO,QAAQ,AAAC,CAAC,AAClB,MAAM,CAAE,GAAG,CACX,OAAO,CAAE,EAAE,CACX,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,CAAC,CACT,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,KAAK,GAAG,CAAC,CAAC,CAAC,IAAI,MAAM,CAAC,CAAC,CAC7B,MAAM,CAAE,IAAI,MAAM,CAAC,CAAC,KAAK,CAAC,WAAW,CACrC,UAAU,CAAE,IAAI,MAAM,CAAC,CAAC,KAAK,CAAC,IAAI,cAAc,CAAC,AAClD,CAAC,AAED,kBAAG,CAAC,CAAC,eAAC,CAAC,AACN,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,IAAI,CACZ,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,CAAC,CAAC,GAAG,CACd,KAAK,CAAE,IAAI,eAAe,CAAC,CAC3B,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,MAAM,CACjB,cAAc,CAAE,SAAS,CACzB,cAAc,CAAE,GAAG,CACnB,eAAe,CAAE,IAAI,CACrB,UAAU,CAAE,KAAK,CAAC,IAAI,CAAC,MAAM,AAC9B,CAAC,AAED,+BAAC,MAAM,AAAC,CAAC,AACR,KAAK,CAAE,IAAI,cAAc,CAAC,AAC3B,CAAC"}`
};
var Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$2);
  $$unsubscribe_page();
  return `<header${add_attribute("class", tw`flex justify-between`, 0)}><div${add_attribute("class", tw`h-8 w-8`, 0)}><a class="${"flex items-center justify-center w-full h-full svelte-11fl9je"}" href="${"https://kit.svelte.dev"}"><img class="${"h-8 w-8 object-contain"}"${add_attribute("src", logo, 0)} alt="${"SvelteKit"}"></a></div>

	<nav class="${"flex justify-center bg-gray-200 svelte-11fl9je"}"><ul class="${"relative p-0 m-0 h-12 flex items-center list-none"}"><li class="${["svelte-11fl9je", $page.path === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-11fl9je"}">Home</a></li>
			<li class="${["svelte-11fl9je", $page.path === "/champions" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/champions"}" class="${"svelte-11fl9je"}">Champions</a></li>
			<li class="${["svelte-11fl9je", $page.path === "/summoners/Doublelift" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/summoners/Doublelift"}" class="${"svelte-11fl9je"}">Summoners</a></li></ul>
		<svg viewBox="${"0 0 2 3"}" aria-hidden="${"true"}"><path d="${"M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"}"></path></svg></nav>

	<div${add_attribute("class", tw`h-8 w-8`, 0)}></div>
</header>`;
});
var css$1 = {
  code: "@media(min-width: 480px){footer.svelte-t281jf{padding:40px 0}}",
  map: `{"version":3,"file":"$layout.svelte","sources":["$layout.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { tw } from 'twind';\\nimport Header from '$lib/Header/index.svelte';\\nimport '../app.css';\\n</script>\\n\\n<Header />\\n\\n<main class={tw\`flex(& 1 col) p-4 container mx-auto my-0 box-border\`}>\\n\\t<slot />\\n</main>\\n\\n<footer class={tw\`flex(& col) justify-center items-center p-[40px]\`}>\\n\\t<p>Kim Skovhus Andersen &copy; 2021</p>\\n</footer>\\n\\n<style>\\n\\t@media (min-width: 480px) {\\n\\t\\tfooter {\\n\\t\\t\\tpadding: 40px 0;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAgBC,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAC1B,MAAM,cAAC,CAAC,AACP,OAAO,CAAE,IAAI,CAAC,CAAC,AAChB,CAAC,AACF,CAAC"}`
};
var $layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

<main${add_attribute("class", tw`flex(& 1 col) p-4 container mx-auto my-0 box-border`, 0)}>${slots.default ? slots.default({}) : ``}</main>

<footer class="${escape2(null_to_empty(tw`flex(& col) justify-center items-center p-[40px]`)) + " svelte-t281jf"}"><p>Kim Skovhus Andersen \xA9 2021</p>
</footer>`;
});
var $layout$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: $layout
});
function load$2({error: error2, status}) {
  return {props: {error: error2, status}};
}
var Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {status} = $$props;
  let {error: error2} = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.error === void 0 && $$bindings.error && error2 !== void 0)
    $$bindings.error(error2);
  return `<h1>${escape2(status)}</h1>

<p>${escape2(error2.message)}</p>


${error2.stack ? `<pre>${escape2(error2.stack)}</pre>` : ``}`;
});
var error = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: Error$1,
  load: load$2
});
var css = {
  code: ".counter.svelte-8u4zcv.svelte-8u4zcv{display:flex;border-top:1px solid rgba(0, 0, 0, 0.1);border-bottom:1px solid rgba(0, 0, 0, 0.1);margin:1rem 0}.counter.svelte-8u4zcv button.svelte-8u4zcv{width:2em;padding:0;display:flex;align-items:center;justify-content:center;border:0;background-color:transparent;color:var(--text-color);font-size:2rem}.counter.svelte-8u4zcv button.svelte-8u4zcv:hover{background-color:var(--secondary-color)}svg.svelte-8u4zcv.svelte-8u4zcv{width:25%;height:25%}path.svelte-8u4zcv.svelte-8u4zcv{vector-effect:non-scaling-stroke;stroke-width:2px;stroke:var(--text-color)}.counter-viewport.svelte-8u4zcv.svelte-8u4zcv{width:8em;height:4em;overflow:hidden;text-align:center;position:relative}.counter-viewport.svelte-8u4zcv strong.svelte-8u4zcv{position:absolute;display:block;width:100%;height:100%;font-weight:400;color:var(--accent-color);font-size:4rem;display:flex;align-items:center;justify-content:center}.counter-digits.svelte-8u4zcv.svelte-8u4zcv{position:absolute;width:100%;height:100%}",
  map: `{"version":3,"file":"index.svelte","sources":["index.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { spring } from 'svelte/motion';\\nlet count = 0;\\nconst displayed_count = spring();\\n$: displayed_count.set(count);\\n$: offset = modulo($displayed_count, 1);\\nfunction modulo(n, m) {\\n    // handle negative numbers\\n    return ((n % m) + m) % m;\\n}\\n</script>\\n\\n<div class=\\"counter\\">\\n\\t<button on:click={() => (count -= 1)} aria-label=\\"Decrease the counter by one\\">\\n\\t\\t<svg aria-hidden=\\"true\\" viewBox=\\"0 0 1 1\\">\\n\\t\\t\\t<path d=\\"M0,0.5 L1,0.5\\" />\\n\\t\\t</svg>\\n\\t</button>\\n\\n\\t<div class=\\"counter-viewport\\">\\n\\t\\t<div class=\\"counter-digits\\" style=\\"transform: translate(0, {100 * offset}%)\\">\\n\\t\\t\\t<strong style=\\"top: -100%\\" aria-hidden=\\"true\\">{Math.floor($displayed_count + 1)}</strong>\\n\\t\\t\\t<strong>{Math.floor($displayed_count)}</strong>\\n\\t\\t</div>\\n\\t</div>\\n\\n\\t<button on:click={() => (count += 1)} aria-label=\\"Increase the counter by one\\">\\n\\t\\t<svg aria-hidden=\\"true\\" viewBox=\\"0 0 1 1\\">\\n\\t\\t\\t<path d=\\"M0,0.5 L1,0.5 M0.5,0 L0.5,1\\" />\\n\\t\\t</svg>\\n\\t</button>\\n</div>\\n\\n<style>\\n\\t.counter {\\n\\t\\tdisplay: flex;\\n\\t\\tborder-top: 1px solid rgba(0, 0, 0, 0.1);\\n\\t\\tborder-bottom: 1px solid rgba(0, 0, 0, 0.1);\\n\\t\\tmargin: 1rem 0;\\n\\t}\\n\\n\\t.counter button.disabled {\\n\\t\\topacity: 0.3;\\n\\t}\\n\\n\\t.counter button {\\n\\t\\twidth: 2em;\\n\\t\\tpadding: 0;\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: center;\\n\\t\\tborder: 0;\\n\\t\\tbackground-color: transparent;\\n\\t\\tcolor: var(--text-color);\\n\\t\\tfont-size: 2rem;\\n\\t}\\n\\n\\t.counter button:hover {\\n\\t\\tbackground-color: var(--secondary-color);\\n\\t}\\n\\n\\tsvg {\\n\\t\\twidth: 25%;\\n\\t\\theight: 25%;\\n\\t}\\n\\n\\tpath {\\n\\t\\tvector-effect: non-scaling-stroke;\\n\\t\\tstroke-width: 2px;\\n\\t\\tstroke: var(--text-color);\\n\\t}\\n\\n\\t.counter-viewport {\\n\\t\\twidth: 8em;\\n\\t\\theight: 4em;\\n\\t\\toverflow: hidden;\\n\\t\\ttext-align: center;\\n\\t\\tposition: relative;\\n\\t}\\n\\n\\t.counter-viewport strong {\\n\\t\\tposition: absolute;\\n\\t\\tdisplay: block;\\n\\t\\twidth: 100%;\\n\\t\\theight: 100%;\\n\\t\\tfont-weight: 400;\\n\\t\\tcolor: var(--accent-color);\\n\\t\\tfont-size: 4rem;\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: center;\\n\\t}\\n\\n\\t.counter-digits {\\n\\t\\tposition: absolute;\\n\\t\\twidth: 100%;\\n\\t\\theight: 100%;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAiCC,QAAQ,4BAAC,CAAC,AACT,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACxC,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAC3C,MAAM,CAAE,IAAI,CAAC,CAAC,AACf,CAAC,AAMD,sBAAQ,CAAC,MAAM,cAAC,CAAC,AAChB,KAAK,CAAE,GAAG,CACV,OAAO,CAAE,CAAC,CACV,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,MAAM,CAAE,CAAC,CACT,gBAAgB,CAAE,WAAW,CAC7B,KAAK,CAAE,IAAI,YAAY,CAAC,CACxB,SAAS,CAAE,IAAI,AAChB,CAAC,AAED,sBAAQ,CAAC,oBAAM,MAAM,AAAC,CAAC,AACtB,gBAAgB,CAAE,IAAI,iBAAiB,CAAC,AACzC,CAAC,AAED,GAAG,4BAAC,CAAC,AACJ,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,AACZ,CAAC,AAED,IAAI,4BAAC,CAAC,AACL,aAAa,CAAE,kBAAkB,CACjC,YAAY,CAAE,GAAG,CACjB,MAAM,CAAE,IAAI,YAAY,CAAC,AAC1B,CAAC,AAED,iBAAiB,4BAAC,CAAC,AAClB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,CACX,QAAQ,CAAE,MAAM,CAChB,UAAU,CAAE,MAAM,CAClB,QAAQ,CAAE,QAAQ,AACnB,CAAC,AAED,+BAAiB,CAAC,MAAM,cAAC,CAAC,AACzB,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,IAAI,cAAc,CAAC,CAC1B,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,AACxB,CAAC,AAED,eAAe,4BAAC,CAAC,AAChB,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,AACb,CAAC"}`
};
function modulo(n, m) {
  return (n % m + m) % m;
}
create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let offset;
  let $displayed_count, $$unsubscribe_displayed_count;
  let count = 0;
  const displayed_count = spring();
  $$unsubscribe_displayed_count = subscribe(displayed_count, (value) => $displayed_count = value);
  $$result.css.add(css);
  {
    displayed_count.set(count);
  }
  offset = modulo($displayed_count, 1);
  $$unsubscribe_displayed_count();
  return `<div class="${"counter svelte-8u4zcv"}"><button aria-label="${"Decrease the counter by one"}" class="${"svelte-8u4zcv"}"><svg aria-hidden="${"true"}" viewBox="${"0 0 1 1"}" class="${"svelte-8u4zcv"}"><path d="${"M0,0.5 L1,0.5"}" class="${"svelte-8u4zcv"}"></path></svg></button>

	<div class="${"counter-viewport svelte-8u4zcv"}"><div class="${"counter-digits svelte-8u4zcv"}" style="${"transform: translate(0, " + escape2(100 * offset) + "%)"}"><strong style="${"top: -100%"}" aria-hidden="${"true"}" class="${"svelte-8u4zcv"}">${escape2(Math.floor($displayed_count + 1))}</strong>
			<strong class="${"svelte-8u4zcv"}">${escape2(Math.floor($displayed_count))}</strong></div></div>

	<button aria-label="${"Increase the counter by one"}" class="${"svelte-8u4zcv"}"><svg aria-hidden="${"true"}" viewBox="${"0 0 1 1"}" class="${"svelte-8u4zcv"}"><path d="${"M0,0.5 L1,0.5 M0.5,0 L0.5,1"}" class="${"svelte-8u4zcv"}"></path></svg></button>
</div>`;
});
var prerender = true;
setup({
  mode: "strict",
  hash: false,
  theme: {
    colors: {
      gray: coolGray,
      blue: lightBlue,
      red: rose,
      pink: fuchsia
    },
    fontFamily: {
      sans: ["Lato", "sans-serif"],
      serif: ["Merriweather", "serif"]
    }
  }
});
var Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Home</title>`, ""}`, ""}

<section${add_attribute("class", tw`flex(& 1 col) justify-center items-center`, 0)}><p${add_attribute("class", tw`text-red-600 text-lg`, 0)}>hihi</p></section>`;
});
var index = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: Routes,
  prerender
});
async function load$1({fetch: fetch22}) {
  const res = await fetch22("/api/ddragon/11.9.1/data/en_US/champion");
  if (res.ok) {
    const jsonRes = await res.json();
    const data = Object.values(jsonRes.data);
    return {props: {champions: data}};
  }
  return {
    status: res.status,
    error: new Error(res.statusText)
  };
}
var Champions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {champions: champions2} = $$props;
  if ($$props.champions === void 0 && $$bindings.champions && champions2 !== void 0)
    $$bindings.champions(champions2);
  return `<main${add_attribute("class", tw`flex(& wrap) justify-center`, 0)}>${each(champions2, (champion2) => `<div${add_attribute("class", tw`flex border p-2`, 0)}><img${add_attribute("class", tw`h-20 max-w-max object-contain mr-4`, 0)}${add_attribute("src", `${"http://ddragon.leagueoflegends.com/cdn/"}11.9.1/img/champion/${champion2.id}.png`, 0)}${add_attribute("alt", champion2.name, 0)}>
			<div${add_attribute("class", tw`flex(& col)`, 0)}><h2${add_attribute("class", tw`text(lg blue-500)`, 0)}>${escape2(champion2.name)}</h2>
				<p${add_attribute("class", tw`text(sm gray-600)`, 0)}>${escape2(champion2.title)}</p>
				<p${add_attribute("class", tw`text(md gray-900)`, 0)}>${escape2(champion2.blurb)}</p></div>
		</div>`)}</main>`;
});
var champions = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: Champions,
  load: load$1
});
async function load({fetch: fetch22, page: page2}) {
  const {summonerName} = page2.params;
  const res = await fetch22(`/api/lol/summoner/v4/summoners/by-name/${summonerName}`);
  if (res.ok)
    return {props: {summoner: await res.json()}};
  return {status: res.status, error: new Error()};
}
var U5BsummonerNameu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let {summoner} = $$props;
  if ($$props.summoner === void 0 && $$bindings.summoner && summoner !== void 0)
    $$bindings.summoner(summoner);
  return `<main${add_attribute("class", tw`m-2 p-2 text-gray-500 justify-center shadow-lg`, 0)}><div${add_attribute("class", tw`flex`, 0)}><div${add_attribute("class", tw`flex(& col) w-full`, 0)}><div${add_attribute("class", tw`my-2`, 0)}><div>badge 1</div></div>
			<div${add_attribute("class", tw`flex`, 0)}><div><img${add_attribute("class", tw`h-20 max-w-max object-contain mr-4`, 0)}${add_attribute("src", `${"http://ddragon.leagueoflegends.com/cdn/"}11.9.1/img/profileicon/${summoner.profileIconId}.png`, 0)}${add_attribute("alt", summoner.astName, 0)}></div>
				<div${add_attribute("class", tw`flex(& col)`, 0)}><div><h1${add_attribute("class", tw`text-xl text-indigo-900`, 0)}>${escape2(summoner.name)}</h1>
						<p>Ladder rank</p></div></div></div></div></div></main>`;
});
var _summonerName_ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: U5BsummonerNameu5D,
  load
});

// .svelte/vercel/entry.js
var entry_default = async (req, res) => {
  const {pathname, searchParams} = new URL(req.url || "", "http://localhost");
  const rendered = await render({
    method: req.method,
    headers: req.headers,
    path: pathname,
    query: searchParams,
    rawBody: await getRawBody(req)
  });
  if (rendered) {
    const {status, headers, body} = rendered;
    return res.writeHead(status, headers).end(body);
  }
  return res.writeHead(404).end();
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

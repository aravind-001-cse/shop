'use strict';



;define("shopping-cart/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("shopping-cart/adapters/products", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  // import JSONAPIAdapter from '@ember-data/adapter/json-api';
  // export default class ProductsAdapter extends JSONAPIAdapter {
  // }
  var _default = _emberData.default.RESTAdapter.extend({
    host: 'https://dummyjson.com',
    pathForType() {
      return 'products';
    }
  });
  _exports.default = _default;
});
;define("shopping-cart/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "shopping-cart/config/environment"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  class App extends _application.default {
    constructor() {
      super(...arguments);
      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);
      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);
      _defineProperty(this, "Resolver", _emberResolver.default);
    }
  }
  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("shopping-cart/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("shopping-cart/components/quantity", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@glimmer/tracking", "@ember/object", "@ember/service"], function (_exports, _component, _templateFactory, _component2, _tracking, _object, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _class, _descriptor, _descriptor2;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <button type="button" {{action "plus" @id}}>+</button>{{this.count}} <button type="button" {{action "minus" @id}}>-</button>
  */
  {
    "id": "Uv8BheJA",
    "block": "[[[11,\"button\"],[24,4,\"button\"],[4,[38,0],[[30,0],\"plus\",[30,1]],null],[12],[1,\"+\"],[13],[1,[30,0,[\"count\"]]],[1,\" \"],[11,\"button\"],[24,4,\"button\"],[4,[38,0],[[30,0],\"minus\",[30,1]],null],[12],[1,\"-\"],[13]],[\"@id\"],false,[\"action\"]]",
    "moduleName": "shopping-cart/components/quantity.hbs",
    "isStrictMode": false
  });
  let QuantityComponent = (_dec = (0, _service.inject)('shoppingcart'), (_class = class QuantityComponent extends _component2.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "cart", _descriptor, this);
      _initializerDefineProperty(this, "count", _descriptor2, this);
    }
    plus(product) {
      let tempItem;
      console.log(product);
      if (this.count < 7) {
        this.count += 1;
      } else {
        alert('you"e reached maximum quantity');
      }
      this.cart.itemList.forEach(item => {
        if (item.id === product.id && this.count > 1) {
          item.total = 0;
          item.total = item.price * this.count;
          tempItem = item;
        }
      });
      // let tempListItem = this.cart.itemList;
      // console.log(tempListItem);
      this.cart.removeItem(product);
      this.cart.addItem(tempItem);
      // console.log(this.cart.itemList);
    }

    minus(product) {
      let flag = false;
      let tempItem;
      if (this.count > 1) {
        this.count -= 1;
        flag = true;
      } else {
        alert('can"t decrease quantity');
      }
      if (flag) {
        this.cart.itemList.forEach(item => {
          if (item.id === product.id) {
            item.total = item.total - item.price;
            tempItem = item;
          }
        });
        this.cart.removeItem(product);
        this.cart.addItem(tempItem);
      }
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "cart", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "count", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 1;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "plus", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "plus"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "minus", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "minus"), _class.prototype)), _class));
  _exports.default = QuantityComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, QuantityComponent);
});
;define("shopping-cart/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("shopping-cart/controllers/cart", ["exports", "@ember/controller", "@ember/service", "@ember/object"], function (_exports, _controller, _service, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _class, _descriptor;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  let CartController = (_dec = (0, _service.inject)('shoppingcart'), (_class = class CartController extends _controller.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "cart", _descriptor, this);
    }
    clearItem() {
      alert('order placed successfully');
      this.cart.clearAll();
    }
    get total() {
      // console.log(this.cart.totalPrice);
      return this.cart.totalPrice;
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "cart", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "clearItem", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "clearItem"), _class.prototype)), _class));
  _exports.default = CartController;
});
;define("shopping-cart/controllers/index", ["exports", "ember"], function (_exports, _ember) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  // import Controller from '@ember/controller';
  // export default class IndexController extends Controller {}
  var _default = _ember.default.Controller.extend({
    name: '',
    password: '',
    actions: {
      loginUser() {
        console.log(this.name + ' ' + this.password);
        let that = this;
        $.ajax({
          url: 'http://localhost:8080/shoppingcart/login',
          data: {
            username: this.name,
            userpassword: this.password
          },
          success: function (responsesText) {
            if (responsesText === 'success\r\n') {
              that.transitionToRoute('products');
            } else {
              alert('Login failed');
            }
          }
        });
      }
    }
  });
  _exports.default = _default;
});
;define("shopping-cart/controllers/products", ["exports", "@ember/controller", "@ember/object", "@ember/service"], function (_exports, _controller, _object, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _dec, _class, _descriptor;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  let ProductsController = (_dec = (0, _service.inject)('shoppingcart'), (_class = class ProductsController extends _controller.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "cart", _descriptor, this);
    }
    addCart(product) {
      console.log(product);
      product.total = product.price;
      this.cart.addItem(product);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "cart", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "addCart", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "addCart"), _class.prototype)), _class));
  _exports.default = ProductsController;
});
;define("shopping-cart/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("shopping-cart/helpers/app-version", ["exports", "@ember/component/helper", "shopping-cart/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _helper, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;
  function appVersion(_) {
    let hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;
    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }
  var _default = (0, _helper.helper)(appVersion);
  _exports.default = _default;
});
;define("shopping-cart/helpers/ensure-safe-component", ["exports", "@embroider/util"], function (_exports, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _util.EnsureSafeComponentHelper;
    }
  });
});
;define("shopping-cart/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pageTitle.default;
  _exports.default = _default;
});
;define("shopping-cart/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("shopping-cart/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("shopping-cart/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "shopping-cart/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }
  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("shopping-cart/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',
    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
    }
  };
  _exports.default = _default;
});
;define("shopping-cart/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("shopping-cart/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("shopping-cart/initializers/export-application-global", ["exports", "ember", "shopping-cart/config/environment"], function (_exports, _ember, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }
      var value = _environment.default.exportApplicationGlobal;
      var globalName;
      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember.default.String.classify(_environment.default.modulePrefix);
      }
      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }
  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("shopping-cart/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',
    initialize() {}
  };
  _exports.default = _default;
});
;define("shopping-cart/models/products", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  let ProductsModel = (_class = class ProductsModel extends _model.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "title", _descriptor, this);
      _initializerDefineProperty(this, "description", _descriptor2, this);
      _initializerDefineProperty(this, "price", _descriptor3, this);
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "title", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "description", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "price", [_model.attr], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
  _exports.default = ProductsModel;
});
;define("shopping-cart/router", ["exports", "@ember/routing/router", "shopping-cart/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  class Router extends _router.default {
    constructor() {
      super(...arguments);
      _defineProperty(this, "location", _environment.default.locationType);
      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }
  }
  _exports.default = Router;
  Router.map(function () {
    this.route('products');
    this.route('cart');
  });
});
;define("shopping-cart/routes/cart", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  class CartRoute extends _route.default {}
  _exports.default = CartRoute;
});
;define("shopping-cart/routes/index", ["exports", "ember"], function (_exports, _ember) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  // import Route from '@ember/routing/route';
  // export default class IndexRoute extends Route {}
  var _default = _ember.default.Route.extend({});
  _exports.default = _default;
});
;define("shopping-cart/routes/products", ["exports", "@ember/routing/route"], function (_exports, _route) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  // import { inject as service } from '@ember/service';

  class ProductsRoute extends _route.default {
    // @service store;
    async model() {
      // console.log(params.auth);
      // return this.store.findAll('products');
      let response = await fetch('/shop/api/shopping.json'); // https://dummyjson.com/products
      let products = await response.json();
      return products;
    }
  }
  _exports.default = ProductsRoute;
});
;define("shopping-cart/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("shopping-cart/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("shopping-cart/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("shopping-cart/serializers/products", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  // import JSONAPISerializer from '@ember-data/serializer/json-api';
  // export default class ProductsSerializer extends JSONAPISerializer {}
  var _default = _emberData.default.RESTSerializer.extend({});
  _exports.default = _default;
});
;define("shopping-cart/services/-ensure-registered", ["exports", "@embroider/util/services/ensure-registered"], function (_exports, _ensureRegistered) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ensureRegistered.default;
    }
  });
});
;define("shopping-cart/services/page-title-list", ["exports", "ember-page-title/services/page-title-list"], function (_exports, _pageTitleList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitleList.default;
    }
  });
});
;define("shopping-cart/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
});
;define("shopping-cart/services/shoppingcart", ["exports", "@ember/service", "@glimmer/tracking", "@ember/object"], function (_exports, _service, _tracking, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
  let ShoppingcartService = (_class = class ShoppingcartService extends _service.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "itemList", _descriptor, this);
    }
    addItem(product) {
      // console.log(product);
      this.itemList.pushObject(product);
    }
    removeItem(product) {
      console.log(product);
      this.itemList.removeObject(product);
    }
    clearAll() {
      console.log('hois');
      this.itemList.clear();
    }
    get totalPrice() {
      let total = 0;
      this.itemList.forEach(item => {
        total = total + item.total;
      });
      return total;
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "itemList", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _applyDecoratedDescriptor(_class.prototype, "addItem", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "addItem"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "removeItem", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "removeItem"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "clearAll", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "clearAll"), _class.prototype)), _class);
  _exports.default = ShoppingcartService;
});
;define("shopping-cart/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("shopping-cart/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "App9eq4n",
    "block": "[[[1,[28,[35,0],[\"ShoppingCart\"],null]],[1,\"\\n\"],[46,[28,[37,2],null,null],null,null,null]],[],false,[\"page-title\",\"component\",\"-outlet\"]]",
    "moduleName": "shopping-cart/templates/application.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("shopping-cart/templates/cart", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "C14FIwGT",
    "block": "[[[1,[28,[35,0],[\"Cart\"],null]],[1,\"\\n\"],[10,0],[14,0,\"nav-container\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"home-cart\"],[12],[8,[39,1],[[24,0,\"nav-home\"]],[[\"@route\"],[\"products\"]],[[\"default\"],[[[[1,\"Home\"]],[]]]]],[13],[1,\"\\n  \"],[10,0],[14,0,\"current-cart\"],[12],[1,\"Cart\"],[13],[1,\"\\n\"],[13],[1,\"\\n\"],[11,\"button\"],[24,0,\"clear-item\"],[24,4,\"button\"],[4,[38,2],[[30,0],[30,0,[\"clearItem\"]]],null],[12],[1,\"place Order\"],[13],[1,\"\\n\"],[10,0],[14,0,\"list-item\"],[12],[1,\"\\n\"],[42,[28,[37,4],[[28,[37,4],[[30,0,[\"cart\",\"itemList\"]]],null]],null],null,[[[10,0],[14,0,\"item-view\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"image-box\"],[12],[10,\"img\"],[14,0,\"cart-page\"],[15,\"src\",[30,1,[\"thumbnail\"]]],[14,\"alt\",\"not found\"],[12],[13],[13],[1,\"\\n  \"],[10,0],[14,0,\"title-box\"],[12],[1,[30,1,[\"title\"]]],[13],[1,\"\\n  \"],[10,0],[14,0,\"price-box\"],[12],[1,\"$ \"],[1,[30,1,[\"price\"]]],[13],[1,\"\\n  \"],[10,0],[14,0,\"button\"],[12],[1,\"\\n    \"],[8,[39,5],null,[[\"@id\"],[[30,1]]],null],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n \\n\"]],[1]],null],[13],[1,\"\\n\"],[10,0],[14,0,\"total\"],[12],[1,\"\\n  total amount: \"],[1,[30,0,[\"total\"]]],[1,\"\\n\"],[13],[1,\"\\n\"],[46,[28,[37,7],null,null],null,null,null]],[\"item\"],false,[\"page-title\",\"link-to\",\"action\",\"each\",\"-track-array\",\"quantity\",\"component\",\"-outlet\"]]",
    "moduleName": "shopping-cart/templates/cart.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("shopping-cart/templates/index", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "APXnNpGr",
    "block": "[[[1,[28,[35,0],[\"Index\"],null]],[1,\"\\n\"],[10,0],[14,0,\"container\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"col-md-4\"],[12],[1,\"\\n    \"],[10,\"label\"],[14,\"for\",\"validationCustom01\"],[14,0,\"form-label\"],[12],[1,\"User Name\"],[13],[1,\"\\n    \"],[8,[39,1],[[24,0,\"form-control\"],[24,1,\"validationCustom01\"],[24,\"required\",\"\"]],[[\"@type\",\"@value\"],[\"text\",[30,0,[\"name\"]]]],null],[1,\"\\n    \"],[10,0],[14,0,\"valid-feedback\"],[12],[1,\"\\n      Looks good!\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,0],[14,0,\"col-md-4\"],[12],[1,\"\\n    \"],[10,\"label\"],[14,\"for\",\"validationCustom02\"],[14,0,\"form-label\"],[12],[1,\"Password\"],[13],[1,\"\\n    \"],[8,[39,1],[[24,0,\"form-control\"],[24,1,\"validationCustom02\"],[24,\"required\",\"\"]],[[\"@type\",\"@value\"],[\"password\",[30,0,[\"password\"]]]],null],[1,\"\\n    \"],[10,0],[14,0,\"valid-feedback\"],[12],[1,\"\\n      Looks good!\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,0],[14,0,\"col-12\"],[12],[1,\"\\n    \"],[11,\"button\"],[24,0,\"btn btn-primary\"],[24,4,\"submit\"],[4,[38,2],[[30,0],\"loginUser\"],null],[12],[1,\"Login\"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"],[46,[28,[37,4],null,null],null,null,null]],[],false,[\"page-title\",\"input\",\"action\",\"component\",\"-outlet\"]]",
    "moduleName": "shopping-cart/templates/index.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("shopping-cart/templates/products", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "igL+aW1d",
    "block": "[[[1,[28,[35,0],[\"Products\"],null]],[1,\"\\n\"],[8,[39,1],[[24,0,\"cart-icon\"]],[[\"@route\"],[\"cart\"]],[[\"default\"],[[[[1,\"\\n\"],[10,\"i\"],[14,0,\"fa fa-shopping-cart\"],[12],[13],[10,1],[14,0,\"count\"],[12],[1,[30,0,[\"cart\",\"itemList\",\"length\"]]],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\"],[10,0],[14,0,\"container\"],[12],[1,\"\\n\"],[42,[28,[37,3],[[28,[37,3],[[30,1,[\"products\"]]],null]],null],null,[[[1,\"    \"],[10,0],[14,0,\"item\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"image\"],[12],[10,\"img\"],[15,\"src\",[30,2,[\"thumbnail\"]]],[15,\"alt\",[30,2,[\"title\"]]],[12],[13],[13],[1,\"\\n      \"],[10,0],[14,0,\"details\"],[12],[1,\"\\n        \"],[10,\"ul\"],[12],[1,\"\\n          \"],[10,\"li\"],[12],[10,1],[12],[1,\"Title: \"],[13],[1,[30,2,[\"id\"]]],[13],[1,\"\\n          \"],[10,\"li\"],[12],[10,1],[12],[1,\"Description: \"],[13],[1,[30,2,[\"description\"]]],[13],[1,\"\\n          \"],[10,\"li\"],[12],[10,1],[12],[1,\"price: \"],[13],[1,\"₹ \"],[1,[30,2,[\"price\"]]],[13],[1,\"\\n          \"],[10,\"li\"],[12],[10,1],[12],[1,\"discountPercentage: \"],[13],[1,[30,2,[\"discountPercentage\"]]],[1,\"%\"],[13],[1,\"\\n          \"],[10,\"li\"],[12],[10,1],[12],[1,\"stock: \"],[13],[1,[30,2,[\"stock\"]]],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[11,\"button\"],[24,0,\"button-class\"],[24,4,\"button\"],[4,[38,4],[[30,0],[30,0,[\"addCart\"]],[30,2]],null],[12],[10,\"i\"],[14,0,\"fa fa-shopping-cart\"],[12],[13],[1,\" Add Cart\"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\\n\"]],[2]],null],[13],[1,\"\\n\\n\"],[46,[28,[37,6],null,null],null,null,null]],[\"@model\",\"product\"],false,[\"page-title\",\"link-to\",\"each\",\"-track-array\",\"action\",\"component\",\"-outlet\"]]",
    "moduleName": "shopping-cart/templates/products.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("shopping-cart/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("shopping-cart/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("shopping-cart/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("shopping-cart/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;

;define('shopping-cart/config/environment', [], function() {
  var prefix = 'shopping-cart';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("shopping-cart/app")["default"].create({"name":"shopping-cart","version":"0.0.0"});
          }
        
//# sourceMappingURL=shopping-cart.map

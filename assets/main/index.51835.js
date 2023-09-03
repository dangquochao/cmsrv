window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  ActiveChildren: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "953f4fTgXFABIu4rF+KtMGs", "ActiveChildren");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ActiveChildren = function(_super) {
      __extends(ActiveChildren, _super);
      function ActiveChildren() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.indexActive = 0;
        _this._isAt = false;
        return _this;
      }
      Object.defineProperty(ActiveChildren.prototype, "isAt", {
        get: function() {
          return this._isAt;
        },
        set: function(value) {
          this._isAt = value;
          this.indexActive < 0 ? this.node.children.forEach(function(v) {
            v.active = value;
          }) : this.node.children[this.indexActive].active = value;
        },
        enumerable: false,
        configurable: true
      });
      __decorate([ property({
        type: cc.Integer,
        tooltip: "-1 l\xe0 set active t\u1ea5t c\u1ea3"
      }) ], ActiveChildren.prototype, "indexActive", void 0);
      __decorate([ property(cc.Boolean) ], ActiveChildren.prototype, "isAt", null);
      ActiveChildren = __decorate([ ccclass ], ActiveChildren);
      return ActiveChildren;
    }(cc.Component);
    exports.default = ActiveChildren;
    cc._RF.pop();
  }, {} ],
  AudioManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "29483itIxdEG7fkS4/bZacr", "AudioManager");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ViewModel_1 = require("../Lib/VM/ViewModel");
    var Windown_1 = require("../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AudioManager = function(_super) {
      __extends(AudioManager, _super);
      function AudioManager() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.idTiengNo = -1;
        _this.audios = [];
        _this.backgroundMusicAudio = null;
        _this._isActiveSound = false;
        _this.mapAudioId = new Map();
        _this._isActiveMusic = false;
        return _this;
      }
      Object.defineProperty(AudioManager.prototype, "isActiveSound", {
        get: function() {
          return this._isActiveSound;
        },
        set: function(value) {
          if (value != this._isActiveSound) {
            this._isActiveSound = value;
            if (value) Windown_1.Windown.setLocalStorage("sound", "on"); else {
              Windown_1.Windown.setLocalStorage("sound", "off");
              this.stopSound();
            }
          }
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(AudioManager.prototype, "isActiveMusic", {
        get: function() {
          return this._isActiveMusic;
        },
        set: function(value) {
          if (value != this._isActiveMusic) {
            this._isActiveMusic = value;
            if (value) {
              Windown_1.Windown.setLocalStorage("music", "on");
              this.playMusic();
            } else {
              Windown_1.Windown.setLocalStorage("music", "off");
              this.stopMusic();
            }
          }
        },
        enumerable: false,
        configurable: true
      });
      AudioManager.prototype.onLoad = function() {
        ViewModel_1.VM.bindPath("user.isOnSound", this.onChangeSound, this);
        ViewModel_1.VM.bindPath("user.isOnMusic", this.onChangeMusic, this);
        Windown_1.Windown.AudioManager = this;
      };
      AudioManager.prototype.onChangeSound = function(newValue) {
        this.isActiveSound = newValue;
      };
      AudioManager.prototype.onChangeMusic = function(newValue) {
        this.isActiveMusic = newValue;
      };
      AudioManager.prototype.onEnable = function() {
        this.isActiveMusic = Windown_1.Windown.User.isOnMusic;
        this.isActiveSound = Windown_1.Windown.User.isOnSound;
        cc.log("gia tri actimusci: " + this.isActiveMusic);
        this.isActiveMusic && this.playMusic();
      };
      AudioManager.prototype.playMusic = function() {
        cc.log("play audio");
        if (Windown_1.Windown.BotController) return;
        if (this.isActiveMusic && this.backgroundMusicAudio) {
          cc.audioEngine.playMusic(this.backgroundMusicAudio, true);
          cc.audioEngine.setMusicVolume(.7);
        }
      };
      AudioManager.prototype.stopMusic = function() {
        this.backgroundMusicAudio && cc.audioEngine.stopMusic();
      };
      AudioManager.prototype.onDestroy = function() {
        this.stopSound();
        this.stopMusic();
        Windown_1.Windown.AudioManager = null;
        ViewModel_1.VM.targetOff(this);
      };
      AudioManager.prototype.stopSound = function() {
        cc.audioEngine.stopAllEffects();
      };
      AudioManager.prototype.playEffect = function(audioclip, volum, isLoop) {
        void 0 === volum && (volum = 1);
        void 0 === isLoop && (isLoop = false);
        if (!audioclip) return;
        if (Windown_1.Windown.BotController) return -1;
        if (!this.isActiveSound) return -1;
        var obj = this.getObjSound(audioclip.name);
        if (!obj.canStop) return;
        obj && obj.audioId && cc.audioEngine.stopEffect(obj.audioId);
        var audioId = cc.audioEngine.playEffect(audioclip, isLoop);
        cc.audioEngine.setVolume(audioId, volum);
        obj.audioId = audioId;
        obj.canStop = false;
        obj.timeOutId = setTimeout(function() {
          obj.canStop = true;
        }, 75);
        return audioId;
      };
      AudioManager.prototype.playEffectNoStop = function(audioclip, volum, isLoop) {
        void 0 === volum && (volum = 1);
        void 0 === isLoop && (isLoop = false);
        if (Windown_1.Windown.BotController) return -1;
        if (!this.isActiveSound) return -1;
        var audioId = cc.audioEngine.playEffect(audioclip, isLoop);
        cc.audioEngine.setVolume(audioId, volum);
        if (isLoop) {
          var obj = this.getObjSound(audioclip.name);
          obj.audioId = audioId;
          obj.canStop = false;
        }
        return audioId;
      };
      AudioManager.prototype.playEffectSync = function(audioclip, volum, timeCall) {
        void 0 === volum && (volum = 1);
        Windown_1.Windown.BotController && (volum = 0);
        this.isActiveSound || (volum = 0);
        return new Promise(function(resolve, reject) {
          var audioId = cc.audioEngine.playEffect(audioclip, false);
          cc.audioEngine.setVolume(audioId, volum);
          cc.audioEngine.setFinishCallback(audioId, resolve);
          timeCall && setTimeout(resolve, 1e3 * timeCall);
        });
      };
      AudioManager.prototype.playTiengNo = function() {};
      AudioManager.prototype.getObjSound = function(nameClip) {
        var obj = this.mapAudioId.get(nameClip);
        if (void 0 == obj) {
          obj = Object.create(null);
          obj.name = nameClip;
          obj.timeOutId = -1;
          obj.canStop = true;
          this.mapAudioId.set(nameClip, obj);
        }
        return obj;
      };
      AudioManager.prototype.stopEffect = function(audioclip, isEffect) {
        void 0 === isEffect && (isEffect = false);
        if (void 0 == audioclip || null == audioclip) return;
        var obj = this.mapAudioId.get(audioclip.name);
        if (void 0 != obj && null != obj.audioId) if (isEffect) {
          var objAction = Object.create(null);
          objAction.volum = cc.audioEngine.getVolume(obj.audioId);
          cc.tween(objAction).to(.3, {
            volum: {
              value: 0,
              progress: function(start, end, current, ratio) {
                var _current = start + (end - start) * ratio;
                cc.audioEngine.setVolume(obj.audioId, _current);
                0 == _current && cc.audioEngine.stopEffect(obj.audioId);
                return _current;
              }
            }
          }).start();
        } else cc.audioEngine.stopEffect(obj.audioId);
      };
      AudioManager.prototype.reset = function() {
        this.mapAudioId.forEach(function(v, k) {
          v && v.audioId && cc.audioEngine.stopEffect(v.audioId);
        });
      };
      __decorate([ property([ cc.AudioClip ]) ], AudioManager.prototype, "audios", void 0);
      __decorate([ property(cc.AudioClip) ], AudioManager.prototype, "backgroundMusicAudio", void 0);
      __decorate([ property ], AudioManager.prototype, "isActiveMusic", null);
      AudioManager = __decorate([ ccclass ], AudioManager);
      return AudioManager;
    }(cc.Component);
    exports.default = AudioManager;
    cc._RF.pop();
  }, {
    "../Lib/VM/ViewModel": "ViewModel",
    "../Windown": "Windown"
  } ],
  BUNDLE: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7135e6e261DmLFizmcpIXsb", "BUNDLE");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BUNDLE = void 0;
    var BUNDLE;
    (function(BUNDLE) {
      BUNDLE["Main"] = "main";
      BUNDLE["FishCaMap"] = "31";
      BUNDLE["Neko"] = "37";
      BUNDLE["MatTroi"] = "39";
    })(BUNDLE = exports.BUNDLE || (exports.BUNDLE = {}));
    cc._RF.pop();
  }, {} ],
  BaseCuaHang: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b1c2e4WOBBMtbLXsYzYV0JY", "BaseCuaHang");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Windown_1 = require("../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BaseCuaHang = function(_super) {
      __extends(BaseCuaHang, _super);
      function BaseCuaHang() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.listSFItem = [];
        _this.listSFItemSpecial = [];
        _this.spAuto = null;
        _this.spGunSet = null;
        _this.nodeInfo = null;
        _this.parentItem = null;
        _this.isInit = false;
        return _this;
      }
      BaseCuaHang.prototype.getSFByType = function(type) {
        if (type < 5) return this.listSFItem[type - 1];
        if (1e3 == type) return this.spGunSet;
        if (1001 == type) return this.spAuto;
        return this.listSFItemSpecial[type - 100];
      };
      BaseCuaHang.prototype.onClickClose = function() {
        var _this = this;
        Windown_1.Windown.actionEffectClose(this.node, function() {
          _this.node.parent = null;
        });
      };
      __decorate([ property(cc.SpriteFrame) ], BaseCuaHang.prototype, "listSFItem", void 0);
      __decorate([ property(cc.SpriteFrame) ], BaseCuaHang.prototype, "listSFItemSpecial", void 0);
      __decorate([ property(cc.SpriteFrame) ], BaseCuaHang.prototype, "spAuto", void 0);
      __decorate([ property(cc.SpriteFrame) ], BaseCuaHang.prototype, "spGunSet", void 0);
      __decorate([ property(cc.Node) ], BaseCuaHang.prototype, "nodeInfo", void 0);
      __decorate([ property(cc.Node) ], BaseCuaHang.prototype, "parentItem", void 0);
      BaseCuaHang = __decorate([ ccclass ], BaseCuaHang);
      return BaseCuaHang;
    }(cc.Component);
    exports.default = BaseCuaHang;
    cc._RF.pop();
  }, {
    "../Windown": "Windown"
  } ],
  BaseEditbox: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "24409kKZQlHAY7HY5EIIe/x", "BaseEditbox");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Windown_1 = require("../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BaseEditbox = function(_super) {
      __extends(BaseEditbox, _super);
      function BaseEditbox() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodeMove = null;
        return _this;
      }
      BaseEditbox.prototype.initNodeMove = function(node) {
        if (!cc.sys.isNative) return;
        this.nodeMove = node;
      };
      BaseEditbox.prototype.resignEdb = function(edb) {
        if (!cc.sys.isNative || null == edb) return;
        var eventBegan = new cc.Component.EventHandler();
        eventBegan.target = this.node;
        eventBegan.component = "BaseEditbox";
        eventBegan.handler = "editBegan";
        eventBegan.customEventData = "";
        edb.editingDidBegan.push(eventBegan);
        var eventEnd = new cc.Component.EventHandler();
        eventEnd.target = this.node;
        eventEnd.component = "BaseEditbox";
        eventEnd.handler = "editEnd";
        eventEnd.customEventData = "";
        edb.editingDidEnded.push(eventEnd);
      };
      BaseEditbox.prototype.resignNext = function(edb, edbNext) {
        void 0 === edbNext && (edbNext = "");
        if (!cc.sys.isNative || null == edb) return;
        var eventNext = new cc.Component.EventHandler();
        eventNext.target = this.node;
        eventNext.component = "BaseEditbox";
        eventNext.handler = "editNext";
        eventNext.customEventData = edbNext;
        edb.editingReturn.push(eventNext);
        edb.returnType = 5;
      };
      BaseEditbox.prototype.resetEmitNext = function(edb) {
        if (!cc.sys.isNative || null == edb) return;
        edb.editingReturn.length = 0;
      };
      BaseEditbox.prototype.editBegan = function(event, data) {
        Windown_1.Windown.EDBController.checkAndChangePositionEDB(event, this.nodeMove || this.node);
      };
      BaseEditbox.prototype.editEnd = function() {
        Windown_1.Windown.EDBController.endNodeEDB();
      };
      BaseEditbox.prototype.editNext = function(event, data) {
        var _this = this;
        if (!cc.sys.isNative) return;
        this.scheduleOnce(function() {
          var edbNext = _this[data];
          edbNext && edbNext.focus();
        }, .4);
      };
      BaseEditbox = __decorate([ ccclass ], BaseEditbox);
      return BaseEditbox;
    }(cc.Component);
    exports.default = BaseEditbox;
    cc._RF.pop();
  }, {
    "../Windown": "Windown"
  } ],
  BaseScrollView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "65d20PGXAxEpZqR+kJ25zRs", "BaseScrollView");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var TemplateType = cc.Enum({
      NODE: 1,
      PREFAB: 2
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.templateType = TemplateType.PREFAB;
        _this.itemTemplateNode = null;
        _this.itemTemplate = null;
        _this.nameComponentItem = "";
        _this.funtionSetInfo = "initItem";
        _this.scrollView = null;
        _this.spawnCount = 5;
        _this.spacing = 0;
        _this.isViewBottomFirt = false;
        _this.items = [];
        _this._listInfo = [];
        _this.content = null;
        _this._sumHeight = 0;
        _this._isStateWatting = false;
        _this._init = false;
        _this.updateTimer = 0;
        _this.updateInterval = .05;
        _this.lastContentPosY = 0;
        _this.bufferZone = 0;
        _this.itemPool = null;
        _this.firtHeight = 0;
        _this.totalCount = 0;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        this._init = true;
        this.scrollView = this.getComponent(cc.ScrollView);
        this.content = this.scrollView.content;
        this.items = [];
        this.updateTimer = 0;
        this.updateInterval = .05;
        this.lastContentPosY = 0;
        this._sumHeight = 0;
        this.bufferZone = 0;
        this.itemPool = new cc.NodePool();
        this.itemTemplate = this.templateType == TemplateType.PREFAB ? this.itemTemplate : this.itemTemplateNode;
      };
      NewClass.prototype.getItemPool = function() {
        if (this.itemPool.size() > 0) return this.itemPool.get();
        var node = cc.instantiate(this.itemTemplate);
        node.active = true;
        return node;
      };
      NewClass.prototype.resetScr = function() {
        if (!this._init) return;
        var length = this.content.childrenCount;
        var childs = this.content.children;
        for (var i = 0; i < length; i++) this.itemPool.put(childs[0]);
        this.items.length = 0;
        this._listInfo = [];
      };
      NewClass.prototype.init = function(list, sumHeightToTal, _firtHeight) {
        void 0 === sumHeightToTal && (sumHeightToTal = null);
        void 0 === _firtHeight && (_firtHeight = null);
        _firtHeight = this.getItemPool().height;
        sumHeightToTal = list.length * _firtHeight;
        this.items.length = 0;
        var length = list.length;
        this._listInfo = list;
        var firtHeight = 0;
        length > 0 && (firtHeight = this._listInfo[0].height || _firtHeight);
        this.firtHeight = firtHeight;
        var spawn = this.spawnCount;
        spawn = spawn < length ? spawn : length;
        this.bufferZone = this.scrollView.node.height / 2 + firtHeight;
        this.totalCount = length;
        this._sumHeight = 0;
        var contentHeight = this.totalCount * this.spacing - this.spacing + sumHeightToTal;
        this.content.height = contentHeight;
        var content = this.content;
        if (this.isViewBottomFirt) {
          this._isStateWatting = false;
          var offsetPositin = contentHeight - this.scrollView.node.height / 2;
          offsetPositin > 0 && (content.y = offsetPositin);
          var start = length - spawn;
          start < 0 && (start = 0);
          var lastNodeHeight = null;
          var lastNodeY = null;
          for (var i = length - 1; i >= start; i--) {
            var data = this._listInfo[i];
            var item = this.getItemPool();
            content.insertChild(item, 0);
            var itemCp = item.getComponent(this.nameComponentItem);
            itemCp.itemID = i;
            itemCp[this.funtionSetInfo](data);
            this.items.push(item);
            i == length - 1 ? item.setPosition(0, item.height / 2 - contentHeight) : item.setPosition(0, lastNodeY + lastNodeHeight / 2 + item.height / 2 + this.spacing);
            lastNodeHeight = item.height;
            lastNodeY = item.y;
            this._sumHeight += item.height + this.spacing;
          }
        } else {
          this._isStateWatting = true;
          var lastNodeHeight = null;
          var lastNodeY = null;
          content.y = this.scrollView.node.height / 2;
          for (var i = 0; i < spawn; ++i) {
            var data = this._listInfo[i];
            var item = this.getItemPool();
            content.addChild(item);
            var itemCp = item.getComponent(this.nameComponentItem);
            itemCp.itemID = i;
            itemCp[this.funtionSetInfo](data);
            this.items.push(item);
            0 == i ? item.setPosition(0, -item.height / 2) : item.setPosition(0, lastNodeY - lastNodeHeight / 2 - item.height / 2 - this.spacing);
            lastNodeHeight = item.height;
            lastNodeY = item.y;
            this._sumHeight += item.height + this.spacing;
          }
        }
      };
      NewClass.prototype.getPositionInView = function(item) {
        var worldPos = item.parent.convertToWorldSpaceAR(item.position);
        var viewPos = this.scrollView.node.convertToNodeSpaceAR(worldPos);
        return viewPos;
      };
      NewClass.prototype.update = function(dt) {
        this.updateTimer += dt;
        if (this.updateTimer < this.updateInterval) return;
        this.updateTimer = 0;
        var items = this.items;
        var buffer = this.bufferZone;
        var isDown = this.content.y < this.lastContentPosY;
        var offset = this._sumHeight;
        var contentHeight = this.content.height;
        this.content.y >= contentHeight - this.scrollView.node.height / 2 - 10 ? this._isStateWatting = false : this._isStateWatting = true;
        for (var i = 0; i < items.length; ++i) {
          var viewPos = this.getPositionInView(items[i]);
          if (isDown) {
            if (viewPos.y < -buffer && items[i].y + offset < 0) {
              var firtItem = this.content.children[0];
              var id = firtItem.getComponent(this.nameComponentItem).itemID;
              if (id > 0) {
                items[i].setSiblingIndex(0);
                this._sumHeight -= items[i].height;
                var item = items[i].getComponent(this.nameComponentItem);
                var itemId = id - 1;
                item.itemID = itemId;
                item[this.funtionSetInfo](this._listInfo[itemId]);
                items[i].y = firtItem.y + firtItem.height / 2 + items[i].height / 2 + this.spacing;
                this._sumHeight += items[i].height;
              }
            }
          } else if (viewPos.y > buffer && items[i].y - offset > -contentHeight) {
            var lastNode = this.content.children[this.content.childrenCount - 1];
            var id = lastNode.getComponent(this.nameComponentItem).itemID;
            if (id < this.totalCount - 1) {
              items[i].setSiblingIndex(this.content.childrenCount - 1);
              this._sumHeight -= items[i].height;
              var item = items[i].getComponent(this.nameComponentItem);
              var itemId = id + 1;
              item.itemID = itemId;
              item[this.funtionSetInfo](this._listInfo[itemId]);
              items[i].y = lastNode.y - lastNode.height / 2 - items[i].height / 2 - this.spacing;
              this._sumHeight += items[i].height;
            }
          }
        }
        this.lastContentPosY = this.scrollView.content.y;
      };
      NewClass.prototype.addItem = function(info) {
        var add = 0;
        add = null != info.height ? info.height : this.firtHeight;
        this._listInfo.push(info);
        this.content.height += add + this.spacing;
        this.totalCount += 1;
        if (!this._isStateWatting) {
          var nodeSet = null;
          var lastNode = this.content.children[this.content.childrenCount - 1];
          if (this.content.childrenCount < this.spawnCount) {
            nodeSet = this.getItemPool();
            this.content.addChild(nodeSet);
          } else nodeSet = this.content.children[0];
          if (null == lastNode) {
            var id = 0;
            nodeSet.setSiblingIndex(this.content.childrenCount - 1);
            this._sumHeight -= nodeSet.height;
            var item = nodeSet.getComponent(this.nameComponentItem);
            var itemId = id + 1;
            item.itemID = itemId;
            item[this.funtionSetInfo](info);
            nodeSet.y = -nodeSet.height / 2;
            this._sumHeight += nodeSet.height;
          } else {
            var id = lastNode.getComponent(this.nameComponentItem).itemID;
            nodeSet.setSiblingIndex(this.content.childrenCount - 1);
            this._sumHeight -= nodeSet.height;
            var item = nodeSet.getComponent(this.nameComponentItem);
            var itemId = id + 1;
            item.itemID = itemId;
            item[this.funtionSetInfo](info);
            nodeSet.y = lastNode.y - lastNode.height / 2 - nodeSet.height / 2 - this.spacing;
            this._sumHeight += nodeSet.height;
          }
          this.scrollView.stopAutoScroll();
          this.scrollView.scrollToBottom(.2);
        }
      };
      NewClass.prototype.updateAllItemInView = function() {
        var list = this.getListItemCpInView();
        for (var i = 0, l = list.length; i < l; i++) {
          var item = list[i];
          var info = this._listInfo[item.itemID];
          item[this.funtionSetInfo](info);
        }
      };
      NewClass.prototype.getListItemCpInView = function() {
        return this.content.getComponentsInChildren(this.nameComponentItem);
      };
      NewClass.prototype.addListItem = function(listItem, heights) {
        var length = listItem.length;
        this.content.height += this.spacing * length + heights;
        this.totalCount += length;
        this._listInfo = this._listInfo.concat(listItem);
      };
      NewClass.prototype.getItemAtBottom = function() {
        var item = this.items[0];
        for (var i = 1; i < this.items.length; ++i) item.y > this.items[i].y && (item = this.items[i]);
        return item;
      };
      NewClass.prototype.scrollToFixedPosition = function() {
        this.scrollView.scrollToOffset(cc.v2(0, 500), 2);
      };
      NewClass.prototype.onDestroy = function() {
        this.itemPool.clear();
      };
      __decorate([ property({
        type: TemplateType
      }) ], NewClass.prototype, "templateType", void 0);
      __decorate([ property({
        type: cc.Node,
        visible: function() {
          var bool = this.templateType == TemplateType.NODE;
          bool || (this.tmpNode = null);
          return bool;
        }
      }) ], NewClass.prototype, "itemTemplateNode", void 0);
      __decorate([ property({
        type: cc.Prefab,
        visible: function() {
          var bool = this.templateType == TemplateType.PREFAB;
          bool || (this.tmpPrefab = null);
          return bool;
        }
      }) ], NewClass.prototype, "itemTemplate", void 0);
      __decorate([ property(cc.String) ], NewClass.prototype, "nameComponentItem", void 0);
      __decorate([ property(cc.String) ], NewClass.prototype, "funtionSetInfo", void 0);
      __decorate([ property(cc.Integer) ], NewClass.prototype, "spawnCount", void 0);
      __decorate([ property(cc.Integer) ], NewClass.prototype, "spacing", void 0);
      __decorate([ property(cc.Boolean) ], NewClass.prototype, "isViewBottomFirt", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  BhvButtonGroup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "478974WiLROooVAdyAvLtPW", "BhvButtonGroup");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
    var PARAM_TYPE;
    (function(PARAM_TYPE) {
      PARAM_TYPE[PARAM_TYPE["CHILDREN_INDEX"] = 0] = "CHILDREN_INDEX";
      PARAM_TYPE[PARAM_TYPE["CHILDREN_NAME"] = 1] = "CHILDREN_NAME";
    })(PARAM_TYPE || (PARAM_TYPE = {}));
    var BhvButtonGroup = function(_super) {
      __extends(BhvButtonGroup, _super);
      function BhvButtonGroup() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.transition = cc.Button.Transition.NONE;
        _this.hoverColor = cc.color(255, 255, 255);
        _this.normalColor = cc.color(214, 214, 214);
        _this.pressedColor = cc.color(211, 211, 211);
        _this.disabledColor = cc.color(124, 124, 124);
        _this.normalSprite = null;
        _this.pressedSprite = null;
        _this.hoverSprite = null;
        _this.disabledSprite = null;
        _this.duration = 1;
        _this.zoomScale = 1.1;
        _this.paramType = PARAM_TYPE.CHILDREN_INDEX;
        _this.touchEvents = [];
        return _this;
      }
      BhvButtonGroup.prototype.onLoad = function() {
        var _this = this;
        console.log("nhay vao onload ne");
        this.node.children.forEach(function(node, nodeIndex) {
          var comp = node.getComponent(cc.Button);
          comp || (comp = node.addComponent(cc.Button));
          comp.target = node;
          comp.transition = _this.transition;
          comp.zoomScale = _this.zoomScale;
          comp.disabledSprite = _this.disabledSprite;
          comp.hoverSprite = _this.hoverSprite;
          comp.normalSprite = _this.normalSprite;
          comp.pressedSprite = _this.pressedSprite;
          comp.hoverColor = _this.hoverColor;
          comp.normalColor = _this.normalColor;
          comp.pressedColor = _this.pressedColor;
          comp.disabledColor = _this.disabledColor;
          _this.touchEvents.forEach(function(event) {
            var hd = new cc.Component.EventHandler();
            hd.target = event.target;
            hd.handler = event.handler;
            hd.component = event.component;
            hd["_componentId"] = event["_componentId"];
            _this.paramType === PARAM_TYPE.CHILDREN_INDEX ? hd.customEventData = nodeIndex.toString() : hd.customEventData = node.name;
            comp.clickEvents.push(hd);
          });
        });
      };
      __decorate([ property({
        type: cc.Enum(cc.Button.Transition)
      }) ], BhvButtonGroup.prototype, "transition", void 0);
      __decorate([ property({
        visible: function() {
          return this.transition === cc.Button.Transition.COLOR;
        }
      }) ], BhvButtonGroup.prototype, "hoverColor", void 0);
      __decorate([ property({
        visible: function() {
          return this.transition === cc.Button.Transition.COLOR;
        }
      }) ], BhvButtonGroup.prototype, "normalColor", void 0);
      __decorate([ property({
        visible: function() {
          return this.transition === cc.Button.Transition.COLOR;
        }
      }) ], BhvButtonGroup.prototype, "pressedColor", void 0);
      __decorate([ property({
        visible: function() {
          return this.transition === cc.Button.Transition.COLOR;
        }
      }) ], BhvButtonGroup.prototype, "disabledColor", void 0);
      __decorate([ property({
        type: cc.SpriteFrame,
        visible: function() {
          return this.transition === cc.Button.Transition.SPRITE;
        }
      }) ], BhvButtonGroup.prototype, "normalSprite", void 0);
      __decorate([ property({
        type: cc.SpriteFrame,
        visible: function() {
          return this.transition === cc.Button.Transition.SPRITE;
        }
      }) ], BhvButtonGroup.prototype, "pressedSprite", void 0);
      __decorate([ property({
        type: cc.SpriteFrame,
        visible: function() {
          return this.transition === cc.Button.Transition.SPRITE;
        }
      }) ], BhvButtonGroup.prototype, "hoverSprite", void 0);
      __decorate([ property({
        type: cc.SpriteFrame,
        visible: function() {
          return this.transition === cc.Button.Transition.SPRITE;
        }
      }) ], BhvButtonGroup.prototype, "disabledSprite", void 0);
      __decorate([ property({
        visible: function() {
          return this.transition === cc.Button.Transition.SCALE || this.transition === cc.Button.Transition.COLOR;
        }
      }) ], BhvButtonGroup.prototype, "duration", void 0);
      __decorate([ property({
        visible: function() {
          return this.transition === cc.Button.Transition.SCALE;
        }
      }) ], BhvButtonGroup.prototype, "zoomScale", void 0);
      __decorate([ property({
        type: cc.Enum(PARAM_TYPE)
      }) ], BhvButtonGroup.prototype, "paramType", void 0);
      __decorate([ property([ cc.Component.EventHandler ]) ], BhvButtonGroup.prototype, "touchEvents", void 0);
      BhvButtonGroup = __decorate([ ccclass, menu("BHV/Input/Button Group(\u4e00\u7ec4\u6309\u94ae\u63a7\u5236)") ], BhvButtonGroup);
      return BhvButtonGroup;
    }(cc.Component);
    exports.default = BhvButtonGroup;
    cc._RF.pop();
  }, {} ],
  BhvFrameIndex: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8d8e0a/sBZG2KBfyST2hRLo", "BhvFrameIndex");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode, requireComponent = _a.requireComponent, menu = _a.menu;
    var BhvFrameIndex = function(_super) {
      __extends(BhvFrameIndex, _super);
      function BhvFrameIndex() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.spriteFrames = [ null ];
        _this.changeEvents = [];
        _this._index = 0;
        return _this;
      }
      Object.defineProperty(BhvFrameIndex.prototype, "index", {
        get: function() {
          return this._index;
        },
        set: function(value) {
          if (value < 0) return;
          this._index = value % this.spriteFrames.length;
          var sprite = this.node.getComponent(cc.Sprite);
          sprite.spriteFrame != this.spriteFrames[this._index] && this.changeEvents.forEach(function(v) {
            v.emit([]);
          });
          sprite.spriteFrame = this.spriteFrames[this._index];
        },
        enumerable: false,
        configurable: true
      });
      BhvFrameIndex.prototype.setName = function(name) {
        var index = this.spriteFrames.findIndex(function(v) {
          return v.name == name;
        });
        index < 0 && cc.error("frameIndex \u0111\u1eb7t kh\xf4ng t\u1ed3n t\u1ea1iname:", name);
        this.index = index || 0;
      };
      BhvFrameIndex.prototype.random = function(min, max) {
        if (!this.spriteFrames) return;
        var frameMax = this.spriteFrames.length;
        (null == min || min < 0) && (min = 0);
        (null == max || max > frameMax) && (max = frameMax);
        this.index = Math.floor(Math.random() * (max - min) + min);
      };
      BhvFrameIndex.prototype.next = function() {
        this.index++;
      };
      BhvFrameIndex.prototype.previous = function() {
        this.index--;
      };
      __decorate([ property({
        type: [ cc.SpriteFrame ],
        tooltip: "sprite h\xecnh \u1ea3nh khung s\u1ebd \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng"
      }) ], BhvFrameIndex.prototype, "spriteFrames", void 0);
      __decorate([ property({
        type: [ cc.Component.EventHandler ],
        tooltip: "Event change spriteFrame if dif old sprite frame"
      }) ], BhvFrameIndex.prototype, "changeEvents", void 0);
      __decorate([ property({
        tooltip: "khung hi\u1ec7n \u0111ang hi\u1ec3n th\u1ecb",
        type: cc.Integer
      }) ], BhvFrameIndex.prototype, "index", null);
      __decorate([ property ], BhvFrameIndex.prototype, "_index", void 0);
      BhvFrameIndex = __decorate([ ccclass, executeInEditMode, requireComponent(cc.Sprite), menu("BHV/UI/Frame Index(\u5e27\u56fe\u6539\u53d8)") ], BhvFrameIndex);
      return BhvFrameIndex;
    }(cc.Component);
    exports.default = BhvFrameIndex;
    cc._RF.pop();
  }, {} ],
  BhvRollNumber: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c0c3abOOmVM8Z9659VAp1Vo", "BhvRollNumber");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
    var VALUE_TYPE;
    (function(VALUE_TYPE) {
      VALUE_TYPE[VALUE_TYPE["INTEGER"] = 0] = "INTEGER";
      VALUE_TYPE[VALUE_TYPE["FIXED_2"] = 1] = "FIXED_2";
      VALUE_TYPE[VALUE_TYPE["TIMER"] = 2] = "TIMER";
      VALUE_TYPE[VALUE_TYPE["PERCENTAGE"] = 3] = "PERCENTAGE";
      VALUE_TYPE[VALUE_TYPE["KMBT_FIXED2"] = 4] = "KMBT_FIXED2";
      VALUE_TYPE[VALUE_TYPE["CUSTOMER"] = 5] = "CUSTOMER";
    })(VALUE_TYPE || (VALUE_TYPE = {}));
    var BhvRollNumber = function(_super) {
      __extends(BhvRollNumber, _super);
      function BhvRollNumber() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.value = 0;
        _this.showPlusSymbol = false;
        _this._targetValue = 100;
        _this.lerp = .1;
        _this.playAtStart = true;
        _this.runWaitTimer = 0;
        _this.valueType = VALUE_TYPE.INTEGER;
        _this._custom_callback = null;
        _this.isScrolling = false;
        _this._lastLabelText = "";
        return _this;
      }
      Object.defineProperty(BhvRollNumber.prototype, "targetValue", {
        get: function() {
          return this._targetValue;
        },
        set: function(v) {
          this._targetValue = v;
          this.scroll();
        },
        enumerable: false,
        configurable: true
      });
      BhvRollNumber.prototype.onLoad = function() {
        void 0 == this.label && (this.label = this.node.getComponent(cc.Label));
        if (this.playAtStart) {
          this.updateLabel();
          this.scroll();
        }
      };
      BhvRollNumber.prototype.scroll = function() {
        var _this = this;
        if (this.isScrolling) return;
        this.runWaitTimer > 0 ? this.scheduleOnce(function() {
          _this.isScrolling = true;
        }, this.runWaitTimer) : this.isScrolling = true;
      };
      BhvRollNumber.prototype.stop = function() {
        this.value = this.targetValue;
        this.isScrolling = false;
        this.updateLabel();
      };
      BhvRollNumber.prototype.init = function(value, target, lerp) {
        this.targetValue = target || 0;
        this.value = value || 0;
        this.lerp = lerp || .1;
      };
      BhvRollNumber.prototype.scrollTo = function(target) {
        if (null === target || void 0 === target) return;
        this.targetValue = target;
      };
      BhvRollNumber.prototype.updateLabel = function() {
        var value = this.value;
        var string = "";
        switch (this.valueType) {
         case VALUE_TYPE.INTEGER:
          string = Math.round(value) + "";
          break;

         case VALUE_TYPE.FIXED_2:
          string = value.toFixed(2);
          break;

         case VALUE_TYPE.TIMER:
          string = parseTimer(value);
          break;

         case VALUE_TYPE.PERCENTAGE:
          string = Math.round(100 * value) + "%";
          break;

         case VALUE_TYPE.KMBT_FIXED2:
          string = value >= Number.MAX_VALUE ? "MAX" : value > 1e12 ? (value / 1e12).toFixed(2) + "T" : value > 1e9 ? (value / 1e9).toFixed(2) + "B" : value > 1e6 ? (value / 1e6).toFixed(2) + "M" : value > 1e3 ? (value / 1e3).toFixed(2) + "K" : Math.round(value).toString();
          break;

         case VALUE_TYPE.CUSTOMER:
          this._custom_callback && (string = this._custom_callback(this.value, this.targetValue));
        }
        this.showPlusSymbol && (value > 0 ? string = "+" + string : value < 0 && (string = "-" + string));
        if (this.label) {
          if (string === this.label.string) return;
          this.label.string = string;
        }
      };
      BhvRollNumber.prototype.update = function(dt) {
        if (false == this.isScrolling) return;
        this.value = cc.misc.lerp(this.value, this.targetValue, this.lerp);
        this.updateLabel();
        if (Math.abs(this.value - this.targetValue) <= 1e-4) {
          this.value = this.targetValue;
          this.isScrolling = false;
          return;
        }
      };
      __decorate([ property({
        type: cc.Label,
        tooltip: "C\u1ea7n cu\u1ed9n Label Th\xe0nh ph\u1ea7n, n\u1ebfu kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1eb7t, n\xf3 s\u1ebd t\u1ef1 \u0111\u1ed9ng \u0111\u01b0\u1ee3c t\xecm ki\u1ebfm t\u1eeb n\xfat ri\xeang c\u1ee7a n\xf3"
      }) ], BhvRollNumber.prototype, "label", void 0);
      __decorate([ property({
        tooltip: "Gi\xe1 tr\u1ecb cu\u1ed9n hi\u1ec7n t\u1ea1i (gi\xe1 tr\u1ecb cu\u1ed9n b\u1eaft \u0111\u1ea7u)"
      }) ], BhvRollNumber.prototype, "value", void 0);
      __decorate([ property({
        tooltip: "C\xf3 hi\u1ec3n th\u1ecb c\xe1c bi\u1ec3u t\u01b0\u1ee3ng t\xedch c\u1ef1c v\xe0 ti\xeau c\u1ef1c hay kh\xf4ng"
      }) ], BhvRollNumber.prototype, "showPlusSymbol", void 0);
      __decorate([ property({
        tooltip: "gi\xe1 tr\u1ecb m\u1ee5c ti\xeau l\u0103n"
      }) ], BhvRollNumber.prototype, "targetValue", null);
      __decorate([ property ], BhvRollNumber.prototype, "_targetValue", void 0);
      __decorate([ property({
        tooltip: "s\u1ef1 kh\xe1c bi\u1ec7t tuy\u1ebfn t\xednh l\u0103n",
        step: .01,
        max: 1,
        min: 0
      }) ], BhvRollNumber.prototype, "lerp", void 0);
      __decorate([ property({
        tooltip: "c\xf3 n\xean ch\u01a1i ngay t\u1eeb \u0111\u1ea7u kh\xf4ng"
      }) ], BhvRollNumber.prototype, "playAtStart", void 0);
      __decorate([ property({
        tooltip: "s\u1ebd \u0111\u1ee3i v\xe0i gi\xe2y tr\u01b0\u1edbc khi cu\u1ed9n",
        step: .1,
        max: 1,
        min: 0
      }) ], BhvRollNumber.prototype, "runWaitTimer", void 0);
      __decorate([ property({
        type: cc.Enum(VALUE_TYPE),
        tooltip: "c\xf3 n\xean ch\u01a1i ngay t\u1eeb \u0111\u1ea7u kh\xf4ng"
      }) ], BhvRollNumber.prototype, "valueType", void 0);
      BhvRollNumber = __decorate([ ccclass, menu("BHV/UI/Roll Number") ], BhvRollNumber);
      return BhvRollNumber;
    }(cc.Component);
    exports.default = BhvRollNumber;
    function parseTimer(timer, isFullTimer) {
      void 0 === timer && (timer = 0);
      void 0 === isFullTimer && (isFullTimer = true);
      var t = Math.floor(timer);
      var hours = Math.floor(t / 3600);
      var mins = Math.floor(t % 3600 / 60);
      var secs = t % 60;
      var m = "" + mins;
      var s = "" + secs;
      secs < 10 && (s = "0" + secs);
      if (isFullTimer) {
        mins < 10 && (m = "0" + mins);
        return hours + ":" + m + ":" + s;
      }
      m = "" + (mins + 60 * hours);
      mins < 10 && (m = "0" + mins);
      return m + ":" + s;
    }
    cc._RF.pop();
  }, {} ],
  BhvSwitchPage: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2a010mi2MNG5Yy50Gu8rA3G", "BhvSwitchPage");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode, menu = _a.menu;
    var BhvSwitchPage = function(_super) {
      __extends(BhvSwitchPage, _super);
      function BhvSwitchPage() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.isLoopPage = false;
        _this._index = 0;
        _this.preIndex = 0;
        _this._isChanging = false;
        return _this;
      }
      Object.defineProperty(BhvSwitchPage.prototype, "index", {
        get: function() {
          return this._index;
        },
        set: function(v) {
          if (this.isChanging) return;
          v = Math.round(v);
          var count = this.node.childrenCount - 1;
          if (this.isLoopPage) {
            v > count && (v = 0);
            v < 0 && (v = count);
          } else {
            v > count && (v = count);
            v < 0 && (v = 0);
          }
          this.preIndex = this._index;
          this._index = v;
          false;
          this._updatePage(v);
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(BhvSwitchPage.prototype, "isChanging", {
        get: function() {
          return this._isChanging;
        },
        enumerable: false,
        configurable: true
      });
      BhvSwitchPage.prototype.onLoad = function() {
        this.preIndex = this.index;
      };
      BhvSwitchPage.prototype._updateEditorPage = function(page) {
        true;
        return;
        var children;
        var i;
        var node;
      };
      BhvSwitchPage.prototype._updatePage = function(page) {
        var children = this.node.children;
        var preIndex = this.preIndex;
        var curIndex = this.index;
        if (preIndex === curIndex) return;
        var preNode = children[preIndex];
        var showNode = children[curIndex];
        preNode.active = false;
        showNode.active = true;
      };
      BhvSwitchPage.prototype.next = function() {
        if (this.isChanging) return false;
        this.index++;
        return true;
      };
      BhvSwitchPage.prototype.previous = function() {
        if (this.isChanging) return false;
        this.index--;
        return true;
      };
      BhvSwitchPage.prototype.setEventIndex = function(e, index) {
        if (this.index >= 0 && null != this.index && false === this.isChanging) {
          this.index = index;
          return true;
        }
        return false;
      };
      __decorate([ property ], BhvSwitchPage.prototype, "isLoopPage", void 0);
      __decorate([ property ], BhvSwitchPage.prototype, "_index", void 0);
      __decorate([ property({
        type: cc.Integer
      }) ], BhvSwitchPage.prototype, "index", null);
      BhvSwitchPage = __decorate([ ccclass, executeInEditMode, menu("BHV/UI/Switch Page (\u5207\u6362\u9875\u9762)") ], BhvSwitchPage);
      return BhvSwitchPage;
    }(cc.Component);
    exports.default = BhvSwitchPage;
    cc._RF.pop();
  }, {} ],
  BotControler: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a6eab8+bRtJUJ78JrOE/JeJ", "BotControler");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EVENT_MANAGER_1 = require("../DefineTs/EVENT_MANAGER");
    var REQUEST_CODE_1 = require("../DefineTs/REQUEST_CODE");
    var ConectManager_1 = require("../Network/ConectManager");
    var Windown_1 = require("../Windown");
    var CreatBot_1 = require("./CreatBot");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BotController = function(_super) {
      __extends(BotController, _super);
      function BotController() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.funPing = null;
        _this.funDelayListBot = null;
        _this.bot = new CreatBot_1.default();
        _this.isBotTaiXiu = false;
        return _this;
      }
      BotController.prototype.onLoad = function() {
        Windown_1.Windown.BotController = this;
        cc.renderer.render = function() {};
        cc.game.addPersistRootNode(this.node);
        var url = new URL(window.location.toString());
        var searchParams = new URLSearchParams(url.search);
        var token = searchParams.get("taiXiu");
        null != token && "" != token && (this.isBotTaiXiu = true);
      };
      BotController.prototype.onDestroy = function() {
        Windown_1.Windown.BotController = null;
      };
      BotController.prototype.start = function() {
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.onConnect, this.onServerConect, this);
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.onDisconnect, this.onServerDisconnect, this);
        var node = new cc.Node();
        var lb = node.addComponent(cc.Label);
        lb.string = "IsBot";
        node.color = cc.Color.BLACK;
        node.parent = this.node;
      };
      BotController.prototype.onServerConect = function() {
        ConectManager_1.ConectManager.getIns().sendRequestToCallback(REQUEST_CODE_1.REQUEST_CODE.GetListBot, null, this.responseListBot.bind(this));
        this.scheduleOnce(this.funDelayListBot = function() {
          Windown_1.Windown.restartGame();
        }, 120);
      };
      BotController.prototype.responseListBot = function(SFSObject) {
        this.unschedule(this.funDelayListBot);
        var sfsArray = SFSObject.getSFSArray("arrayInfoLogin");
        if (sfsArray.size() < 1) {
          this.bot.sendSignUp();
          cc.log("nhay vao creat acoumnt");
        } else {
          var sfsInfoLogin = sfsArray.getSFSObject(Windown_1.Windown.RandomNumber(0, sfsArray.size()));
          this.bot.sendLogin(sfsInfoLogin.getUtfString("userName"), sfsInfoLogin.getUtfString("userPass"));
        }
      };
      BotController.prototype.onServerDisconnect = function() {
        this.unschedule(this.funPing);
        this.scheduleOnce(function() {
          Windown_1.Windown.restartGame();
        }, 5);
      };
      BotController.prototype.onLogin = function() {
        cc.log("leven user la: " + Windown_1.Windown.User.currentLevel);
        this.scheduleOnce(function() {
          Windown_1.Windown.restartGame();
        }, Windown_1.Windown.RandomNumber(1800, 3600));
        this.isBotTaiXiu || Windown_1.Windown.MainView.scheduleOnce(function() {
          Windown_1.Windown.MainView.onClickJoinBongDem(null, null, false);
        }, 5);
        Windown_1.Windown.BtnMiniGame.onClick(null, null, true);
      };
      BotController.prototype.onLeaveRoomFish = function() {
        this.isBotTaiXiu || Windown_1.Windown.MainView.scheduleOnce(function() {
          var cardAmout = 65e4;
          var count = parseInt(Windown_1.Windown.User.userAg / cardAmout);
          var moneyConLai = Windown_1.Windown.User.userAg % cardAmout;
          if (1 == count && moneyConLai > Windown_1.Windown.RandomNumber(5e4, 2e5)) {
            var SFSObject = ConectManager_1.ConectManager.getIns().getSFSObj();
            SFSObject.putInt("moneyCash", count * cardAmout);
            ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.CashOutCard, SFSObject);
            Windown_1.Windown.MainView.scheduleOnce(function() {
              cc.log("onclick 1");
              Windown_1.Windown.MainView && Windown_1.Windown.MainView.onClickJoinBongDem(null, null, false);
            }, Windown_1.Windown.RandomNumber(15, 60));
          } else if (count > 1) {
            var SFSObject = ConectManager_1.ConectManager.getIns().getSFSObj();
            SFSObject.putInt("moneyCash", count * cardAmout);
            ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.CashOutCard, SFSObject);
            Windown_1.Windown.MainView.scheduleOnce(function() {
              Windown_1.Windown.MainView && Windown_1.Windown.MainView.onClickJoinBongDem(null, null, false);
            }, Windown_1.Windown.RandomNumber(15, 60));
          } else Windown_1.Windown.MainView.scheduleOnce(function() {
            Windown_1.Windown.MainView && Windown_1.Windown.MainView.onClickJoinBongDem(null, null, false);
          }, Windown_1.Windown.RandomNumber(0, 5));
        }, 2);
      };
      BotController = __decorate([ ccclass ], BotController);
      return BotController;
    }(cc.Component);
    exports.default = BotController;
    cc._RF.pop();
  }, {
    "../DefineTs/EVENT_MANAGER": "EVENT_MANAGER",
    "../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../Network/ConectManager": "ConectManager",
    "../Windown": "Windown",
    "./CreatBot": "CreatBot"
  } ],
  BtnMiniGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "34c3fl19vhH/4zYj16zUswQ", "BtnMiniGame");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var DownloadProgress_1 = require("../Bundle/DownloadProgress");
    var EVENT_MANAGER_1 = require("../DefineTs/EVENT_MANAGER");
    var REQUEST_CODE_1 = require("../DefineTs/REQUEST_CODE");
    var GAME_TYPE_1 = require("../Game/GAME_TYPE");
    var Windown_1 = require("../Windown");
    var DragMiniGame_1 = require("./DragMiniGame");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodeTimeTx = null;
        _this.nodeResultTx = null;
        _this._isTouch = false;
        _this._isMoveBtnMiniGame = false;
        _this._listShowed = [];
        _this._v2OffsetChange = null;
        _this._vecStart = null;
        _this.lbTimeTx = cc.Label;
        _this.contentTime = cc.Node;
        _this.btnTaiXiu = cc.Node;
        _this.nodeBg = cc.Node;
        _this.height = 0;
        _this.width = 0;
        _this.funCd = null;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        var _this = this;
        Windown_1.Windown.BtnMiniGame = this;
        this.height = cc.winSize.height / 2;
        this.width = cc.winSize.width / 2;
        this.node.on(cc.Node.EventType.TOUCH_START, function(touch) {
          var v2Touch = cc.v2(touch.getLocation());
          var target = v2Touch.subSelf(cc.v2(_this.width, _this.height));
          _this._vecStart = target;
          _this._v2OffsetChange = _this.node.getPosition().subSelf(target);
          _this._isMoveBtnMiniGame = false;
          _this._isTouch = true;
        });
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function(touch) {
          if (_this._isTouch) {
            var v2Touch = cc.v2(touch.getLocation());
            var target = v2Touch.subSelf(cc.v2(_this.width, _this.height));
            _this.node.setPosition(target.addSelf(_this._v2OffsetChange));
            _this._isMoveBtnMiniGame = true;
          }
        });
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, function(touch) {
          _this._isTouch = false;
          _this.checkPosition();
          _this._isMoveBtnMiniGame || _this.onClick(null, null, null);
        });
        this.node.on(cc.Node.EventType.TOUCH_END, function(touch) {
          _this._isTouch = false;
          var v2Touch = cc.v2(touch.getLocation());
          var target = v2Touch.subSelf(cc.v2(_this.width, _this.height));
          target.subSelf(_this._vecStart).mag() < 15 ? _this.onClick(null, null, null) : _this.checkPosition();
        });
        this.node.active = false;
        this.nodeResultTx.opacity = 0;
        this.nodeTimeTx.opacity = 0;
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.LOGIN, function() {
          _this.node.active = true;
        }, this);
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.onDisconnect, function() {
          _this.node.active = false;
        }, this);
        cc.systemEvent.on(REQUEST_CODE_1.REQUEST_CODE.TXstartGame, this.startGameTx, this);
        cc.systemEvent.on(REQUEST_CODE_1.REQUEST_CODE.TXendGame, this.endGameTx, this);
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.CHANG_ROTATION, this.onChangRotate, this);
      };
      NewClass.prototype.onChangRotate = function(isVertical) {
        if (isVertical) {
          this.node.rotation = -90;
          this.node.scale = .9;
        } else {
          this.node.rotation = 0;
          this.node.scale = 1;
        }
      };
      NewClass.prototype.startGameTx = function(SFSObject) {
        var _this = this;
        this.nodeTimeTx.opacity = 255;
        this.nodeResultTx.opacity = 0;
        var time = SFSObject.get("time");
        this.unschedule(this.funCd);
        this.schedule(this.funCd = function() {
          _this.nodeTimeTx.getComponentInChildren(cc.Label).string = time;
          time--;
        }, 1, time, .01);
      };
      NewClass.prototype.endGameTx = function(SFSObject) {
        this.nodeTimeTx.opacity = 0;
        this.nodeResultTx.opacity = 255;
        var views = JSON.parse(SFSObject.get("view"));
        var time = SFSObject.get("time");
        var sum = 0;
        views.forEach(function(v) {
          sum += v;
        });
        var spine = this.nodeResultTx.getComponentInChildren(sp.Skeleton);
        if (sum > 10) {
          spine.node.x = -17;
          spine.setAnimation(0, "AnimTai", true);
        } else {
          spine.node.x = 17;
          spine.setAnimation(0, "AnimXiu", true);
        }
        null == Windown_1.Windown.TaiXiu && Windown_1.Windown.MoneyUser.endGameMOney(GAME_TYPE_1.default.TaiXiu);
      };
      NewClass.prototype.onActiveTx = function() {
        this.nodeResultTx.active = false;
        this.nodeTimeTx.active = false;
      };
      NewClass.prototype.onDeActiveTx = function() {
        this.nodeResultTx.active = true;
        this.nodeTimeTx.active = true;
      };
      NewClass.prototype.onClick = function(event, data, isForcePlay) {
        return __awaiter(this, void 0, void 0, function() {
          var funNex, isReturn, nodeProgress_2, listNode, per_1, funPro, pre, node, _i, nodeProgress_1, temp;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              Windown_1.Windown.UIManager.checkAndShowDangNhap();
              if (Windown_1.Windown.TaiXiu) {
                Windown_1.Windown.TaiXiu.getComponent(DragMiniGame_1.default).nomalSize();
                Windown_1.Windown.TaiXiu.node.setPosition(0, 0);
                Windown_1.Windown.TaiXiu.isDelayLeave = false;
                Windown_1.Windown.TaiXiu.node.active = true;
                return [ 2 ];
              }
              funNex = null;
              isForcePlay && (funNex = function() {
                Windown_1.Windown.MainView.onClickTaiXiu(null, null, null);
              });
              isReturn = Windown_1.Windown.UIManager.onClickOpenBigGame(GAME_TYPE_1.default.TaiXiu, funNex);
              if (!!isReturn) return [ 3, 3 ];
              Windown_1.Windown.UIManager.objGameWating[GAME_TYPE_1.default.TaiXiu] = true;
              return [ 4, Windown_1.Windown.loadBundle(GAME_TYPE_1.default.TaiXiu.toString()) ];

             case 1:
              _a.sent();
              nodeProgress_2 = [];
              listNode = Windown_1.Windown.BtnMiniGame.getIconByType(GAME_TYPE_1.default.TaiXiu);
              listNode.forEach(function(node) {
                var temp = cc.instantiate(Windown_1.Windown.UIManager.prefabDownload).getComponent(DownloadProgress_1.default);
                temp.node.name = "ProgressDownload";
                temp.node.active = true;
                temp.node.scale = .7;
                node.addChild(temp.node);
                nodeProgress_2.push(temp);
              });
              per_1 = 0;
              funPro = function(count, total) {
                for (var _i = 0, nodeProgress_3 = nodeProgress_2; _i < nodeProgress_3.length; _i++) {
                  var temp = nodeProgress_3[_i];
                  temp.setPercent(per_1);
                  count / total > per_1 && (per_1 = count / total);
                }
              };
              return [ 4, Windown_1.Windown.loadRes(GAME_TYPE_1.default.TaiXiu.toString(), "TaiXiu", cc.Prefab, funPro) ];

             case 2:
              pre = _a.sent();
              node = cc.instantiate(pre);
              node.parent = Windown_1.Windown.UIManager.parentMiniGame;
              Windown_1.Windown.UIManager.objGameWating[GAME_TYPE_1.default.TaiXiu] = false;
              for (_i = 0, nodeProgress_1 = nodeProgress_2; _i < nodeProgress_1.length; _i++) {
                temp = nodeProgress_1[_i];
                temp.node.destroy();
              }
              _a.label = 3;

             case 3:
              return [ 2 ];
            }
          });
        });
      };
      NewClass.prototype.checkPosition = function() {
        return;
        var X;
        var Y;
        var posTarget;
      };
      NewClass.prototype.getIconByType = function(gameType) {
        var listNode = [];
        var node = cc.find(gameType.toString(), this.node);
        node && listNode.push(node);
        return listNode;
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "nodeTimeTx", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "nodeResultTx", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../Bundle/DownloadProgress": "DownloadProgress",
    "../DefineTs/EVENT_MANAGER": "EVENT_MANAGER",
    "../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../Game/GAME_TYPE": "GAME_TYPE",
    "../Windown": "Windown",
    "./DragMiniGame": "DragMiniGame"
  } ],
  1: [ function(require, module, exports) {
    "use strict";
    exports.byteLength = byteLength;
    exports.toByteArray = toByteArray;
    exports.fromByteArray = fromByteArray;
    var lookup = [];
    var revLookup = [];
    var Arr = "undefined" !== typeof Uint8Array ? Uint8Array : Array;
    var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (var i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i];
      revLookup[code.charCodeAt(i)] = i;
    }
    revLookup["-".charCodeAt(0)] = 62;
    revLookup["_".charCodeAt(0)] = 63;
    function getLens(b64) {
      var len = b64.length;
      if (len % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
      var validLen = b64.indexOf("=");
      -1 === validLen && (validLen = len);
      var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
      return [ validLen, placeHoldersLen ];
    }
    function byteLength(b64) {
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      return 3 * (validLen + placeHoldersLen) / 4 - placeHoldersLen;
    }
    function _byteLength(b64, validLen, placeHoldersLen) {
      return 3 * (validLen + placeHoldersLen) / 4 - placeHoldersLen;
    }
    function toByteArray(b64) {
      var tmp;
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
      var curByte = 0;
      var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
      var i;
      for (i = 0; i < len; i += 4) {
        tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = 255 & tmp;
      }
      if (2 === placeHoldersLen) {
        tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = 255 & tmp;
      }
      if (1 === placeHoldersLen) {
        tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = 255 & tmp;
      }
      return arr;
    }
    function tripletToBase64(num) {
      return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[63 & num];
    }
    function encodeChunk(uint8, start, end) {
      var tmp;
      var output = [];
      for (var i = start; i < end; i += 3) {
        tmp = (uint8[i] << 16 & 16711680) + (uint8[i + 1] << 8 & 65280) + (255 & uint8[i + 2]);
        output.push(tripletToBase64(tmp));
      }
      return output.join("");
    }
    function fromByteArray(uint8) {
      var tmp;
      var len = uint8.length;
      var extraBytes = len % 3;
      var parts = [];
      var maxChunkLength = 16383;
      for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
      if (1 === extraBytes) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==");
      } else if (2 === extraBytes) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "=");
      }
      return parts.join("");
    }
  }, {} ],
  2: [ function(require, module, exports) {
    (function(global) {
      "use strict";
      var base64 = require("base64-js");
      var ieee754 = require("ieee754");
      var isArray = require("isarray");
      exports.Buffer = Buffer;
      exports.SlowBuffer = SlowBuffer;
      exports.INSPECT_MAX_BYTES = 50;
      Buffer.TYPED_ARRAY_SUPPORT = void 0 !== global.TYPED_ARRAY_SUPPORT ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();
      exports.kMaxLength = kMaxLength();
      function typedArraySupport() {
        try {
          var arr = new Uint8Array(1);
          arr.__proto__ = {
            __proto__: Uint8Array.prototype,
            foo: function() {
              return 42;
            }
          };
          return 42 === arr.foo() && "function" === typeof arr.subarray && 0 === arr.subarray(1, 1).byteLength;
        } catch (e) {
          return false;
        }
      }
      function kMaxLength() {
        return Buffer.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      }
      function createBuffer(that, length) {
        if (kMaxLength() < length) throw new RangeError("Invalid typed array length");
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          that = new Uint8Array(length);
          that.__proto__ = Buffer.prototype;
        } else {
          null === that && (that = new Buffer(length));
          that.length = length;
        }
        return that;
      }
      function Buffer(arg, encodingOrOffset, length) {
        if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) return new Buffer(arg, encodingOrOffset, length);
        if ("number" === typeof arg) {
          if ("string" === typeof encodingOrOffset) throw new Error("If encoding is specified then the first argument must be a string");
          return allocUnsafe(this, arg);
        }
        return from(this, arg, encodingOrOffset, length);
      }
      Buffer.poolSize = 8192;
      Buffer._augment = function(arr) {
        arr.__proto__ = Buffer.prototype;
        return arr;
      };
      function from(that, value, encodingOrOffset, length) {
        if ("number" === typeof value) throw new TypeError('"value" argument must not be a number');
        if ("undefined" !== typeof ArrayBuffer && value instanceof ArrayBuffer) return fromArrayBuffer(that, value, encodingOrOffset, length);
        if ("string" === typeof value) return fromString(that, value, encodingOrOffset);
        return fromObject(that, value);
      }
      Buffer.from = function(value, encodingOrOffset, length) {
        return from(null, value, encodingOrOffset, length);
      };
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        Buffer.prototype.__proto__ = Uint8Array.prototype;
        Buffer.__proto__ = Uint8Array;
        "undefined" !== typeof Symbol && Symbol.species && Buffer[Symbol.species] === Buffer && Object.defineProperty(Buffer, Symbol.species, {
          value: null,
          configurable: true
        });
      }
      function assertSize(size) {
        if ("number" !== typeof size) throw new TypeError('"size" argument must be a number');
        if (size < 0) throw new RangeError('"size" argument must not be negative');
      }
      function alloc(that, size, fill, encoding) {
        assertSize(size);
        if (size <= 0) return createBuffer(that, size);
        if (void 0 !== fill) return "string" === typeof encoding ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
        return createBuffer(that, size);
      }
      Buffer.alloc = function(size, fill, encoding) {
        return alloc(null, size, fill, encoding);
      };
      function allocUnsafe(that, size) {
        assertSize(size);
        that = createBuffer(that, size < 0 ? 0 : 0 | checked(size));
        if (!Buffer.TYPED_ARRAY_SUPPORT) for (var i = 0; i < size; ++i) that[i] = 0;
        return that;
      }
      Buffer.allocUnsafe = function(size) {
        return allocUnsafe(null, size);
      };
      Buffer.allocUnsafeSlow = function(size) {
        return allocUnsafe(null, size);
      };
      function fromString(that, string, encoding) {
        "string" === typeof encoding && "" !== encoding || (encoding = "utf8");
        if (!Buffer.isEncoding(encoding)) throw new TypeError('"encoding" must be a valid string encoding');
        var length = 0 | byteLength(string, encoding);
        that = createBuffer(that, length);
        var actual = that.write(string, encoding);
        actual !== length && (that = that.slice(0, actual));
        return that;
      }
      function fromArrayLike(that, array) {
        var length = array.length < 0 ? 0 : 0 | checked(array.length);
        that = createBuffer(that, length);
        for (var i = 0; i < length; i += 1) that[i] = 255 & array[i];
        return that;
      }
      function fromArrayBuffer(that, array, byteOffset, length) {
        array.byteLength;
        if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError("'offset' is out of bounds");
        if (array.byteLength < byteOffset + (length || 0)) throw new RangeError("'length' is out of bounds");
        array = void 0 === byteOffset && void 0 === length ? new Uint8Array(array) : void 0 === length ? new Uint8Array(array, byteOffset) : new Uint8Array(array, byteOffset, length);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          that = array;
          that.__proto__ = Buffer.prototype;
        } else that = fromArrayLike(that, array);
        return that;
      }
      function fromObject(that, obj) {
        if (Buffer.isBuffer(obj)) {
          var len = 0 | checked(obj.length);
          that = createBuffer(that, len);
          if (0 === that.length) return that;
          obj.copy(that, 0, 0, len);
          return that;
        }
        if (obj) {
          if ("undefined" !== typeof ArrayBuffer && obj.buffer instanceof ArrayBuffer || "length" in obj) {
            if ("number" !== typeof obj.length || isnan(obj.length)) return createBuffer(that, 0);
            return fromArrayLike(that, obj);
          }
          if ("Buffer" === obj.type && isArray(obj.data)) return fromArrayLike(that, obj.data);
        }
        throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
      }
      function checked(length) {
        if (length >= kMaxLength()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + kMaxLength().toString(16) + " bytes");
        return 0 | length;
      }
      function SlowBuffer(length) {
        +length != length && (length = 0);
        return Buffer.alloc(+length);
      }
      Buffer.isBuffer = function isBuffer(b) {
        return !!(null != b && b._isBuffer);
      };
      Buffer.compare = function compare(a, b) {
        if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError("Arguments must be Buffers");
        if (a === b) return 0;
        var x = a.length;
        var y = b.length;
        for (var i = 0, len = Math.min(x, y); i < len; ++i) if (a[i] !== b[i]) {
          x = a[i];
          y = b[i];
          break;
        }
        if (x < y) return -1;
        if (y < x) return 1;
        return 0;
      };
      Buffer.isEncoding = function isEncoding(encoding) {
        switch (String(encoding).toLowerCase()) {
         case "hex":
         case "utf8":
         case "utf-8":
         case "ascii":
         case "latin1":
         case "binary":
         case "base64":
         case "ucs2":
         case "ucs-2":
         case "utf16le":
         case "utf-16le":
          return true;

         default:
          return false;
        }
      };
      Buffer.concat = function concat(list, length) {
        if (!isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (0 === list.length) return Buffer.alloc(0);
        var i;
        if (void 0 === length) {
          length = 0;
          for (i = 0; i < list.length; ++i) length += list[i].length;
        }
        var buffer = Buffer.allocUnsafe(length);
        var pos = 0;
        for (i = 0; i < list.length; ++i) {
          var buf = list[i];
          if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
          buf.copy(buffer, pos);
          pos += buf.length;
        }
        return buffer;
      };
      function byteLength(string, encoding) {
        if (Buffer.isBuffer(string)) return string.length;
        if ("undefined" !== typeof ArrayBuffer && "function" === typeof ArrayBuffer.isView && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) return string.byteLength;
        "string" !== typeof string && (string = "" + string);
        var len = string.length;
        if (0 === len) return 0;
        var loweredCase = false;
        for (;;) switch (encoding) {
         case "ascii":
         case "latin1":
         case "binary":
          return len;

         case "utf8":
         case "utf-8":
         case void 0:
          return utf8ToBytes(string).length;

         case "ucs2":
         case "ucs-2":
         case "utf16le":
         case "utf-16le":
          return 2 * len;

         case "hex":
          return len >>> 1;

         case "base64":
          return base64ToBytes(string).length;

         default:
          if (loweredCase) return utf8ToBytes(string).length;
          encoding = ("" + encoding).toLowerCase();
          loweredCase = true;
        }
      }
      Buffer.byteLength = byteLength;
      function slowToString(encoding, start, end) {
        var loweredCase = false;
        (void 0 === start || start < 0) && (start = 0);
        if (start > this.length) return "";
        (void 0 === end || end > this.length) && (end = this.length);
        if (end <= 0) return "";
        end >>>= 0;
        start >>>= 0;
        if (end <= start) return "";
        encoding || (encoding = "utf8");
        while (true) switch (encoding) {
         case "hex":
          return hexSlice(this, start, end);

         case "utf8":
         case "utf-8":
          return utf8Slice(this, start, end);

         case "ascii":
          return asciiSlice(this, start, end);

         case "latin1":
         case "binary":
          return latin1Slice(this, start, end);

         case "base64":
          return base64Slice(this, start, end);

         case "ucs2":
         case "ucs-2":
         case "utf16le":
         case "utf-16le":
          return utf16leSlice(this, start, end);

         default:
          if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
          encoding = (encoding + "").toLowerCase();
          loweredCase = true;
        }
      }
      Buffer.prototype._isBuffer = true;
      function swap(b, n, m) {
        var i = b[n];
        b[n] = b[m];
        b[m] = i;
      }
      Buffer.prototype.swap16 = function swap16() {
        var len = this.length;
        if (len % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (var i = 0; i < len; i += 2) swap(this, i, i + 1);
        return this;
      };
      Buffer.prototype.swap32 = function swap32() {
        var len = this.length;
        if (len % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (var i = 0; i < len; i += 4) {
          swap(this, i, i + 3);
          swap(this, i + 1, i + 2);
        }
        return this;
      };
      Buffer.prototype.swap64 = function swap64() {
        var len = this.length;
        if (len % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (var i = 0; i < len; i += 8) {
          swap(this, i, i + 7);
          swap(this, i + 1, i + 6);
          swap(this, i + 2, i + 5);
          swap(this, i + 3, i + 4);
        }
        return this;
      };
      Buffer.prototype.toString = function toString() {
        var length = 0 | this.length;
        if (0 === length) return "";
        if (0 === arguments.length) return utf8Slice(this, 0, length);
        return slowToString.apply(this, arguments);
      };
      Buffer.prototype.equals = function equals(b) {
        if (!Buffer.isBuffer(b)) throw new TypeError("Argument must be a Buffer");
        if (this === b) return true;
        return 0 === Buffer.compare(this, b);
      };
      Buffer.prototype.inspect = function inspect() {
        var str = "";
        var max = exports.INSPECT_MAX_BYTES;
        if (this.length > 0) {
          str = this.toString("hex", 0, max).match(/.{2}/g).join(" ");
          this.length > max && (str += " ... ");
        }
        return "<Buffer " + str + ">";
      };
      Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
        if (!Buffer.isBuffer(target)) throw new TypeError("Argument must be a Buffer");
        void 0 === start && (start = 0);
        void 0 === end && (end = target ? target.length : 0);
        void 0 === thisStart && (thisStart = 0);
        void 0 === thisEnd && (thisEnd = this.length);
        if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError("out of range index");
        if (thisStart >= thisEnd && start >= end) return 0;
        if (thisStart >= thisEnd) return -1;
        if (start >= end) return 1;
        start >>>= 0;
        end >>>= 0;
        thisStart >>>= 0;
        thisEnd >>>= 0;
        if (this === target) return 0;
        var x = thisEnd - thisStart;
        var y = end - start;
        var len = Math.min(x, y);
        var thisCopy = this.slice(thisStart, thisEnd);
        var targetCopy = target.slice(start, end);
        for (var i = 0; i < len; ++i) if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i];
          y = targetCopy[i];
          break;
        }
        if (x < y) return -1;
        if (y < x) return 1;
        return 0;
      };
      function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
        if (0 === buffer.length) return -1;
        if ("string" === typeof byteOffset) {
          encoding = byteOffset;
          byteOffset = 0;
        } else byteOffset > 2147483647 ? byteOffset = 2147483647 : byteOffset < -2147483648 && (byteOffset = -2147483648);
        byteOffset = +byteOffset;
        isNaN(byteOffset) && (byteOffset = dir ? 0 : buffer.length - 1);
        byteOffset < 0 && (byteOffset = buffer.length + byteOffset);
        if (byteOffset >= buffer.length) {
          if (dir) return -1;
          byteOffset = buffer.length - 1;
        } else if (byteOffset < 0) {
          if (!dir) return -1;
          byteOffset = 0;
        }
        "string" === typeof val && (val = Buffer.from(val, encoding));
        if (Buffer.isBuffer(val)) {
          if (0 === val.length) return -1;
          return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
        }
        if ("number" === typeof val) {
          val &= 255;
          if (Buffer.TYPED_ARRAY_SUPPORT && "function" === typeof Uint8Array.prototype.indexOf) return dir ? Uint8Array.prototype.indexOf.call(buffer, val, byteOffset) : Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
          return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir);
        }
        throw new TypeError("val must be string, number or Buffer");
      }
      function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
        var indexSize = 1;
        var arrLength = arr.length;
        var valLength = val.length;
        if (void 0 !== encoding) {
          encoding = String(encoding).toLowerCase();
          if ("ucs2" === encoding || "ucs-2" === encoding || "utf16le" === encoding || "utf-16le" === encoding) {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
          }
        }
        function read(buf, i) {
          return 1 === indexSize ? buf[i] : buf.readUInt16BE(i * indexSize);
        }
        var i;
        if (dir) {
          var foundIndex = -1;
          for (i = byteOffset; i < arrLength; i++) if (read(arr, i) === read(val, -1 === foundIndex ? 0 : i - foundIndex)) {
            -1 === foundIndex && (foundIndex = i);
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
          } else {
            -1 !== foundIndex && (i -= i - foundIndex);
            foundIndex = -1;
          }
        } else {
          byteOffset + valLength > arrLength && (byteOffset = arrLength - valLength);
          for (i = byteOffset; i >= 0; i--) {
            var found = true;
            for (var j = 0; j < valLength; j++) if (read(arr, i + j) !== read(val, j)) {
              found = false;
              break;
            }
            if (found) return i;
          }
        }
        return -1;
      }
      Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
        return -1 !== this.indexOf(val, byteOffset, encoding);
      };
      Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
      };
      Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
        return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
      };
      function hexWrite(buf, string, offset, length) {
        offset = Number(offset) || 0;
        var remaining = buf.length - offset;
        if (length) {
          length = Number(length);
          length > remaining && (length = remaining);
        } else length = remaining;
        var strLen = string.length;
        if (strLen % 2 !== 0) throw new TypeError("Invalid hex string");
        length > strLen / 2 && (length = strLen / 2);
        for (var i = 0; i < length; ++i) {
          var parsed = parseInt(string.substr(2 * i, 2), 16);
          if (isNaN(parsed)) return i;
          buf[offset + i] = parsed;
        }
        return i;
      }
      function utf8Write(buf, string, offset, length) {
        return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
      }
      function asciiWrite(buf, string, offset, length) {
        return blitBuffer(asciiToBytes(string), buf, offset, length);
      }
      function latin1Write(buf, string, offset, length) {
        return asciiWrite(buf, string, offset, length);
      }
      function base64Write(buf, string, offset, length) {
        return blitBuffer(base64ToBytes(string), buf, offset, length);
      }
      function ucs2Write(buf, string, offset, length) {
        return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
      }
      Buffer.prototype.write = function write(string, offset, length, encoding) {
        if (void 0 === offset) {
          encoding = "utf8";
          length = this.length;
          offset = 0;
        } else if (void 0 === length && "string" === typeof offset) {
          encoding = offset;
          length = this.length;
          offset = 0;
        } else {
          if (!isFinite(offset)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
          offset |= 0;
          if (isFinite(length)) {
            length |= 0;
            void 0 === encoding && (encoding = "utf8");
          } else {
            encoding = length;
            length = void 0;
          }
        }
        var remaining = this.length - offset;
        (void 0 === length || length > remaining) && (length = remaining);
        if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        encoding || (encoding = "utf8");
        var loweredCase = false;
        for (;;) switch (encoding) {
         case "hex":
          return hexWrite(this, string, offset, length);

         case "utf8":
         case "utf-8":
          return utf8Write(this, string, offset, length);

         case "ascii":
          return asciiWrite(this, string, offset, length);

         case "latin1":
         case "binary":
          return latin1Write(this, string, offset, length);

         case "base64":
          return base64Write(this, string, offset, length);

         case "ucs2":
         case "ucs-2":
         case "utf16le":
         case "utf-16le":
          return ucs2Write(this, string, offset, length);

         default:
          if (loweredCase) throw new TypeError("Unknown encoding: " + encoding);
          encoding = ("" + encoding).toLowerCase();
          loweredCase = true;
        }
      };
      Buffer.prototype.toJSON = function toJSON() {
        return {
          type: "Buffer",
          data: Array.prototype.slice.call(this._arr || this, 0)
        };
      };
      function base64Slice(buf, start, end) {
        return 0 === start && end === buf.length ? base64.fromByteArray(buf) : base64.fromByteArray(buf.slice(start, end));
      }
      function utf8Slice(buf, start, end) {
        end = Math.min(buf.length, end);
        var res = [];
        var i = start;
        while (i < end) {
          var firstByte = buf[i];
          var codePoint = null;
          var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
          if (i + bytesPerSequence <= end) {
            var secondByte, thirdByte, fourthByte, tempCodePoint;
            switch (bytesPerSequence) {
             case 1:
              firstByte < 128 && (codePoint = firstByte);
              break;

             case 2:
              secondByte = buf[i + 1];
              if (128 === (192 & secondByte)) {
                tempCodePoint = (31 & firstByte) << 6 | 63 & secondByte;
                tempCodePoint > 127 && (codePoint = tempCodePoint);
              }
              break;

             case 3:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              if (128 === (192 & secondByte) && 128 === (192 & thirdByte)) {
                tempCodePoint = (15 & firstByte) << 12 | (63 & secondByte) << 6 | 63 & thirdByte;
                tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343) && (codePoint = tempCodePoint);
              }
              break;

             case 4:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              fourthByte = buf[i + 3];
              if (128 === (192 & secondByte) && 128 === (192 & thirdByte) && 128 === (192 & fourthByte)) {
                tempCodePoint = (15 & firstByte) << 18 | (63 & secondByte) << 12 | (63 & thirdByte) << 6 | 63 & fourthByte;
                tempCodePoint > 65535 && tempCodePoint < 1114112 && (codePoint = tempCodePoint);
              }
            }
          }
          if (null === codePoint) {
            codePoint = 65533;
            bytesPerSequence = 1;
          } else if (codePoint > 65535) {
            codePoint -= 65536;
            res.push(codePoint >>> 10 & 1023 | 55296);
            codePoint = 56320 | 1023 & codePoint;
          }
          res.push(codePoint);
          i += bytesPerSequence;
        }
        return decodeCodePointsArray(res);
      }
      var MAX_ARGUMENTS_LENGTH = 4096;
      function decodeCodePointsArray(codePoints) {
        var len = codePoints.length;
        if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints);
        var res = "";
        var i = 0;
        while (i < len) res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
        return res;
      }
      function asciiSlice(buf, start, end) {
        var ret = "";
        end = Math.min(buf.length, end);
        for (var i = start; i < end; ++i) ret += String.fromCharCode(127 & buf[i]);
        return ret;
      }
      function latin1Slice(buf, start, end) {
        var ret = "";
        end = Math.min(buf.length, end);
        for (var i = start; i < end; ++i) ret += String.fromCharCode(buf[i]);
        return ret;
      }
      function hexSlice(buf, start, end) {
        var len = buf.length;
        (!start || start < 0) && (start = 0);
        (!end || end < 0 || end > len) && (end = len);
        var out = "";
        for (var i = start; i < end; ++i) out += toHex(buf[i]);
        return out;
      }
      function utf16leSlice(buf, start, end) {
        var bytes = buf.slice(start, end);
        var res = "";
        for (var i = 0; i < bytes.length; i += 2) res += String.fromCharCode(bytes[i] + 256 * bytes[i + 1]);
        return res;
      }
      Buffer.prototype.slice = function slice(start, end) {
        var len = this.length;
        start = ~~start;
        end = void 0 === end ? len : ~~end;
        if (start < 0) {
          start += len;
          start < 0 && (start = 0);
        } else start > len && (start = len);
        if (end < 0) {
          end += len;
          end < 0 && (end = 0);
        } else end > len && (end = len);
        end < start && (end = start);
        var newBuf;
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          newBuf = this.subarray(start, end);
          newBuf.__proto__ = Buffer.prototype;
        } else {
          var sliceLen = end - start;
          newBuf = new Buffer(sliceLen, void 0);
          for (var i = 0; i < sliceLen; ++i) newBuf[i] = this[i + start];
        }
        return newBuf;
      };
      function checkOffset(offset, ext, length) {
        if (offset % 1 !== 0 || offset < 0) throw new RangeError("offset is not uint");
        if (offset + ext > length) throw new RangeError("Trying to access beyond buffer length");
      }
      Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
        offset |= 0;
        byteLength |= 0;
        noAssert || checkOffset(offset, byteLength, this.length);
        var val = this[offset];
        var mul = 1;
        var i = 0;
        while (++i < byteLength && (mul *= 256)) val += this[offset + i] * mul;
        return val;
      };
      Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
        offset |= 0;
        byteLength |= 0;
        noAssert || checkOffset(offset, byteLength, this.length);
        var val = this[offset + --byteLength];
        var mul = 1;
        while (byteLength > 0 && (mul *= 256)) val += this[offset + --byteLength] * mul;
        return val;
      };
      Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
        noAssert || checkOffset(offset, 1, this.length);
        return this[offset];
      };
      Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
        noAssert || checkOffset(offset, 2, this.length);
        return this[offset] | this[offset + 1] << 8;
      };
      Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
        noAssert || checkOffset(offset, 2, this.length);
        return this[offset] << 8 | this[offset + 1];
      };
      Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
        noAssert || checkOffset(offset, 4, this.length);
        return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + 16777216 * this[offset + 3];
      };
      Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
        noAssert || checkOffset(offset, 4, this.length);
        return 16777216 * this[offset] + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
      };
      Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
        offset |= 0;
        byteLength |= 0;
        noAssert || checkOffset(offset, byteLength, this.length);
        var val = this[offset];
        var mul = 1;
        var i = 0;
        while (++i < byteLength && (mul *= 256)) val += this[offset + i] * mul;
        mul *= 128;
        val >= mul && (val -= Math.pow(2, 8 * byteLength));
        return val;
      };
      Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
        offset |= 0;
        byteLength |= 0;
        noAssert || checkOffset(offset, byteLength, this.length);
        var i = byteLength;
        var mul = 1;
        var val = this[offset + --i];
        while (i > 0 && (mul *= 256)) val += this[offset + --i] * mul;
        mul *= 128;
        val >= mul && (val -= Math.pow(2, 8 * byteLength));
        return val;
      };
      Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
        noAssert || checkOffset(offset, 1, this.length);
        if (!(128 & this[offset])) return this[offset];
        return -1 * (255 - this[offset] + 1);
      };
      Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
        noAssert || checkOffset(offset, 2, this.length);
        var val = this[offset] | this[offset + 1] << 8;
        return 32768 & val ? 4294901760 | val : val;
      };
      Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
        noAssert || checkOffset(offset, 2, this.length);
        var val = this[offset + 1] | this[offset] << 8;
        return 32768 & val ? 4294901760 | val : val;
      };
      Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
        noAssert || checkOffset(offset, 4, this.length);
        return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
      };
      Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
        noAssert || checkOffset(offset, 4, this.length);
        return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
      };
      Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
        noAssert || checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, true, 23, 4);
      };
      Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
        noAssert || checkOffset(offset, 4, this.length);
        return ieee754.read(this, offset, false, 23, 4);
      };
      Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
        noAssert || checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, true, 52, 8);
      };
      Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
        noAssert || checkOffset(offset, 8, this.length);
        return ieee754.read(this, offset, false, 52, 8);
      };
      function checkInt(buf, value, offset, ext, max, min) {
        if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
        if (offset + ext > buf.length) throw new RangeError("Index out of range");
      }
      Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
        value = +value;
        offset |= 0;
        byteLength |= 0;
        if (!noAssert) {
          var maxBytes = Math.pow(2, 8 * byteLength) - 1;
          checkInt(this, value, offset, byteLength, maxBytes, 0);
        }
        var mul = 1;
        var i = 0;
        this[offset] = 255 & value;
        while (++i < byteLength && (mul *= 256)) this[offset + i] = value / mul & 255;
        return offset + byteLength;
      };
      Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
        value = +value;
        offset |= 0;
        byteLength |= 0;
        if (!noAssert) {
          var maxBytes = Math.pow(2, 8 * byteLength) - 1;
          checkInt(this, value, offset, byteLength, maxBytes, 0);
        }
        var i = byteLength - 1;
        var mul = 1;
        this[offset + i] = 255 & value;
        while (--i >= 0 && (mul *= 256)) this[offset + i] = value / mul & 255;
        return offset + byteLength;
      };
      Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 1, 255, 0);
        Buffer.TYPED_ARRAY_SUPPORT || (value = Math.floor(value));
        this[offset] = 255 & value;
        return offset + 1;
      };
      function objectWriteUInt16(buf, value, offset, littleEndian) {
        value < 0 && (value = 65535 + value + 1);
        for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) buf[offset + i] = (value & 255 << 8 * (littleEndian ? i : 1 - i)) >>> 8 * (littleEndian ? i : 1 - i);
      }
      Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 2, 65535, 0);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset] = 255 & value;
          this[offset + 1] = value >>> 8;
        } else objectWriteUInt16(this, value, offset, true);
        return offset + 2;
      };
      Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 2, 65535, 0);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset] = value >>> 8;
          this[offset + 1] = 255 & value;
        } else objectWriteUInt16(this, value, offset, false);
        return offset + 2;
      };
      function objectWriteUInt32(buf, value, offset, littleEndian) {
        value < 0 && (value = 4294967295 + value + 1);
        for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) buf[offset + i] = value >>> 8 * (littleEndian ? i : 3 - i) & 255;
      }
      Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 4, 4294967295, 0);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset + 3] = value >>> 24;
          this[offset + 2] = value >>> 16;
          this[offset + 1] = value >>> 8;
          this[offset] = 255 & value;
        } else objectWriteUInt32(this, value, offset, true);
        return offset + 4;
      };
      Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 4, 4294967295, 0);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset] = value >>> 24;
          this[offset + 1] = value >>> 16;
          this[offset + 2] = value >>> 8;
          this[offset + 3] = 255 & value;
        } else objectWriteUInt32(this, value, offset, false);
        return offset + 4;
      };
      Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
        value = +value;
        offset |= 0;
        if (!noAssert) {
          var limit = Math.pow(2, 8 * byteLength - 1);
          checkInt(this, value, offset, byteLength, limit - 1, -limit);
        }
        var i = 0;
        var mul = 1;
        var sub = 0;
        this[offset] = 255 & value;
        while (++i < byteLength && (mul *= 256)) {
          value < 0 && 0 === sub && 0 !== this[offset + i - 1] && (sub = 1);
          this[offset + i] = (value / mul >> 0) - sub & 255;
        }
        return offset + byteLength;
      };
      Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
        value = +value;
        offset |= 0;
        if (!noAssert) {
          var limit = Math.pow(2, 8 * byteLength - 1);
          checkInt(this, value, offset, byteLength, limit - 1, -limit);
        }
        var i = byteLength - 1;
        var mul = 1;
        var sub = 0;
        this[offset + i] = 255 & value;
        while (--i >= 0 && (mul *= 256)) {
          value < 0 && 0 === sub && 0 !== this[offset + i + 1] && (sub = 1);
          this[offset + i] = (value / mul >> 0) - sub & 255;
        }
        return offset + byteLength;
      };
      Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 1, 127, -128);
        Buffer.TYPED_ARRAY_SUPPORT || (value = Math.floor(value));
        value < 0 && (value = 255 + value + 1);
        this[offset] = 255 & value;
        return offset + 1;
      };
      Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 2, 32767, -32768);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset] = 255 & value;
          this[offset + 1] = value >>> 8;
        } else objectWriteUInt16(this, value, offset, true);
        return offset + 2;
      };
      Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 2, 32767, -32768);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset] = value >>> 8;
          this[offset + 1] = 255 & value;
        } else objectWriteUInt16(this, value, offset, false);
        return offset + 2;
      };
      Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 4, 2147483647, -2147483648);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset] = 255 & value;
          this[offset + 1] = value >>> 8;
          this[offset + 2] = value >>> 16;
          this[offset + 3] = value >>> 24;
        } else objectWriteUInt32(this, value, offset, true);
        return offset + 4;
      };
      Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
        value = +value;
        offset |= 0;
        noAssert || checkInt(this, value, offset, 4, 2147483647, -2147483648);
        value < 0 && (value = 4294967295 + value + 1);
        if (Buffer.TYPED_ARRAY_SUPPORT) {
          this[offset] = value >>> 24;
          this[offset + 1] = value >>> 16;
          this[offset + 2] = value >>> 8;
          this[offset + 3] = 255 & value;
        } else objectWriteUInt32(this, value, offset, false);
        return offset + 4;
      };
      function checkIEEE754(buf, value, offset, ext, max, min) {
        if (offset + ext > buf.length) throw new RangeError("Index out of range");
        if (offset < 0) throw new RangeError("Index out of range");
      }
      function writeFloat(buf, value, offset, littleEndian, noAssert) {
        noAssert || checkIEEE754(buf, value, offset, 4, 34028234663852886e22, -34028234663852886e22);
        ieee754.write(buf, value, offset, littleEndian, 23, 4);
        return offset + 4;
      }
      Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
        return writeFloat(this, value, offset, true, noAssert);
      };
      Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
        return writeFloat(this, value, offset, false, noAssert);
      };
      function writeDouble(buf, value, offset, littleEndian, noAssert) {
        noAssert || checkIEEE754(buf, value, offset, 8, 17976931348623157e292, -17976931348623157e292);
        ieee754.write(buf, value, offset, littleEndian, 52, 8);
        return offset + 8;
      }
      Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
        return writeDouble(this, value, offset, true, noAssert);
      };
      Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
        return writeDouble(this, value, offset, false, noAssert);
      };
      Buffer.prototype.copy = function copy(target, targetStart, start, end) {
        start || (start = 0);
        end || 0 === end || (end = this.length);
        targetStart >= target.length && (targetStart = target.length);
        targetStart || (targetStart = 0);
        end > 0 && end < start && (end = start);
        if (end === start) return 0;
        if (0 === target.length || 0 === this.length) return 0;
        if (targetStart < 0) throw new RangeError("targetStart out of bounds");
        if (start < 0 || start >= this.length) throw new RangeError("sourceStart out of bounds");
        if (end < 0) throw new RangeError("sourceEnd out of bounds");
        end > this.length && (end = this.length);
        target.length - targetStart < end - start && (end = target.length - targetStart + start);
        var len = end - start;
        var i;
        if (this === target && start < targetStart && targetStart < end) for (i = len - 1; i >= 0; --i) target[i + targetStart] = this[i + start]; else if (len < 1e3 || !Buffer.TYPED_ARRAY_SUPPORT) for (i = 0; i < len; ++i) target[i + targetStart] = this[i + start]; else Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
        return len;
      };
      Buffer.prototype.fill = function fill(val, start, end, encoding) {
        if ("string" === typeof val) {
          if ("string" === typeof start) {
            encoding = start;
            start = 0;
            end = this.length;
          } else if ("string" === typeof end) {
            encoding = end;
            end = this.length;
          }
          if (1 === val.length) {
            var code = val.charCodeAt(0);
            code < 256 && (val = code);
          }
          if (void 0 !== encoding && "string" !== typeof encoding) throw new TypeError("encoding must be a string");
          if ("string" === typeof encoding && !Buffer.isEncoding(encoding)) throw new TypeError("Unknown encoding: " + encoding);
        } else "number" === typeof val && (val &= 255);
        if (start < 0 || this.length < start || this.length < end) throw new RangeError("Out of range index");
        if (end <= start) return this;
        start >>>= 0;
        end = void 0 === end ? this.length : end >>> 0;
        val || (val = 0);
        var i;
        if ("number" === typeof val) for (i = start; i < end; ++i) this[i] = val; else {
          var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
          var len = bytes.length;
          for (i = 0; i < end - start; ++i) this[i + start] = bytes[i % len];
        }
        return this;
      };
      var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;
      function base64clean(str) {
        str = stringtrim(str).replace(INVALID_BASE64_RE, "");
        if (str.length < 2) return "";
        while (str.length % 4 !== 0) str += "=";
        return str;
      }
      function stringtrim(str) {
        if (str.trim) return str.trim();
        return str.replace(/^\s+|\s+$/g, "");
      }
      function toHex(n) {
        if (n < 16) return "0" + n.toString(16);
        return n.toString(16);
      }
      function utf8ToBytes(string, units) {
        units = units || Infinity;
        var codePoint;
        var length = string.length;
        var leadSurrogate = null;
        var bytes = [];
        for (var i = 0; i < length; ++i) {
          codePoint = string.charCodeAt(i);
          if (codePoint > 55295 && codePoint < 57344) {
            if (!leadSurrogate) {
              if (codePoint > 56319) {
                (units -= 3) > -1 && bytes.push(239, 191, 189);
                continue;
              }
              if (i + 1 === length) {
                (units -= 3) > -1 && bytes.push(239, 191, 189);
                continue;
              }
              leadSurrogate = codePoint;
              continue;
            }
            if (codePoint < 56320) {
              (units -= 3) > -1 && bytes.push(239, 191, 189);
              leadSurrogate = codePoint;
              continue;
            }
            codePoint = 65536 + (leadSurrogate - 55296 << 10 | codePoint - 56320);
          } else leadSurrogate && (units -= 3) > -1 && bytes.push(239, 191, 189);
          leadSurrogate = null;
          if (codePoint < 128) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
          } else if (codePoint < 2048) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 6 | 192, 63 & codePoint | 128);
          } else if (codePoint < 65536) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, 63 & codePoint | 128);
          } else {
            if (!(codePoint < 1114112)) throw new Error("Invalid code point");
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, 63 & codePoint | 128);
          }
        }
        return bytes;
      }
      function asciiToBytes(str) {
        var byteArray = [];
        for (var i = 0; i < str.length; ++i) byteArray.push(255 & str.charCodeAt(i));
        return byteArray;
      }
      function utf16leToBytes(str, units) {
        var c, hi, lo;
        var byteArray = [];
        for (var i = 0; i < str.length; ++i) {
          if ((units -= 2) < 0) break;
          c = str.charCodeAt(i);
          hi = c >> 8;
          lo = c % 256;
          byteArray.push(lo);
          byteArray.push(hi);
        }
        return byteArray;
      }
      function base64ToBytes(str) {
        return base64.toByteArray(base64clean(str));
      }
      function blitBuffer(src, dst, offset, length) {
        for (var i = 0; i < length; ++i) {
          if (i + offset >= dst.length || i >= src.length) break;
          dst[i + offset] = src[i];
        }
        return i;
      }
      function isnan(val) {
        return val !== val;
      }
    }).call(this, "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {});
  }, {
    "base64-js": 1,
    ieee754: 4,
    isarray: 3
  } ],
  3: [ function(require, module, exports) {
    var toString = {}.toString;
    module.exports = Array.isArray || function(arr) {
      return "[object Array]" == toString.call(arr);
    };
  }, {} ],
  4: [ function(require, module, exports) {
    exports.read = function(buffer, offset, isLE, mLen, nBytes) {
      var e, m;
      var eLen = 8 * nBytes - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i = isLE ? nBytes - 1 : 0;
      var d = isLE ? -1 : 1;
      var s = buffer[offset + i];
      i += d;
      e = s & (1 << -nBits) - 1;
      s >>= -nBits;
      nBits += eLen;
      for (;nBits > 0; e = 256 * e + buffer[offset + i], i += d, nBits -= 8) ;
      m = e & (1 << -nBits) - 1;
      e >>= -nBits;
      nBits += mLen;
      for (;nBits > 0; m = 256 * m + buffer[offset + i], i += d, nBits -= 8) ;
      if (0 === e) e = 1 - eBias; else {
        if (e === eMax) return m ? NaN : Infinity * (s ? -1 : 1);
        m += Math.pow(2, mLen);
        e -= eBias;
      }
      return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
    };
    exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
      var e, m, c;
      var eLen = 8 * nBytes - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = 23 === mLen ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
      var i = isLE ? 0 : nBytes - 1;
      var d = isLE ? 1 : -1;
      var s = value < 0 || 0 === value && 1 / value < 0 ? 1 : 0;
      value = Math.abs(value);
      if (isNaN(value) || Infinity === value) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
      } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }
        value += e + eBias >= 1 ? rt / c : rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
          e++;
          c /= 2;
        }
        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = (value * c - 1) * Math.pow(2, mLen);
          e += eBias;
        } else {
          m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
          e = 0;
        }
      }
      for (;mLen >= 8; buffer[offset + i] = 255 & m, i += d, m /= 256, mLen -= 8) ;
      e = e << mLen | m;
      eLen += mLen;
      for (;eLen > 0; buffer[offset + i] = 255 & e, i += d, e /= 256, eLen -= 8) ;
      buffer[offset + i - d] |= 128 * s;
    };
  }, {} ],
  CanvasControl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f23a8Cl8gpAKoL9DleE3cPq", "CanvasControl");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        this.funUpdate();
        cc.view.on("canvas-resize", this.funUpdate, this);
        window.addEventListener("orientationchange", this.funUpdate.bind(this));
      },
      funUpdate: function funUpdate() {
        var tile = cc.winSize.width / cc.winSize.height;
        if (tile >= 16 / 9) {
          cc.Canvas.instance.fitHeight = true;
          cc.Canvas.instance.fitWidth = false;
        } else {
          cc.Canvas.instance.fitHeight = false;
          cc.Canvas.instance.fitWidth = true;
        }
      },
      onDestroy: function onDestroy() {
        cc.view.targetOff(this);
        window.removeEventListener("orientationchange", this.funUpdate);
      }
    });
    cc._RF.pop();
  }, {} ],
  CapNhatTaiKhoan: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e06e31f6b9F/Y5eAi57k/d8", "CapNhatTaiKhoan");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EVENT_MANAGER_1 = require("../../DefineTs/EVENT_MANAGER");
    var TextDefine_1 = require("../../DefineTs/TextDefine");
    var ConectManager_1 = require("../../Network/ConectManager");
    var BaseEditbox_1 = require("../../Parent/BaseEditbox");
    var Windown_1 = require("../../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CapNhatTaiKhoan = function(_super) {
      __extends(CapNhatTaiKhoan, _super);
      function CapNhatTaiKhoan() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.edbUserName = null;
        _this.edbNickName = null;
        _this.edbUserPass = null;
        _this.edbUserRePass = null;
        return _this;
      }
      CapNhatTaiKhoan.prototype.onLoad = function() {
        Windown_1.Windown.CapNhatTaiKhoan = this;
      };
      CapNhatTaiKhoan.prototype.start = function() {
        ConectManager_1.ConectManager.getIns().checkConnectAndConnect();
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.onEnter, this.onClickDangKy, this);
        this.resignEdb(this.edbUserName);
        this.resignEdb(this.edbNickName);
        this.resignEdb(this.edbUserPass);
        this.resignEdb(this.edbUserRePass);
        this.resignNext(this.edbUserName, "edbNickName");
        this.resignNext(this.edbNickName, "edbUserPass");
        this.resignNext(this.edbUserPass, "edbUserRePass");
      };
      CapNhatTaiKhoan.prototype.show = function() {
        Windown_1.Windown.actionEffectOpen(this.node);
      };
      CapNhatTaiKhoan.prototype.onClickDangKy = function() {
        if (this.edbUserName.string.length < 6) {
          Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.DangNhapNhoHon6);
          return;
        }
        if ("" != this.edbNickName.string && this.edbNickName.string.length < 6) {
          Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.NickNameNhoHon6);
          return;
        }
        if (this.edbUserPass.string.length < 6) {
          Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.MatKhauNhoHon6);
          return;
        }
        if (this.edbUserPass.string != this.edbUserRePass.string) {
          Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.MatKhauKhongTrung);
          return;
        }
        var sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
        sfsObj.putUtfString("username", this.edbUserName.string);
        "" != this.edbNickName.string && sfsObj.putUtfString("nickname", this.edbNickName.string);
        sfsObj.putUtfString("password", this.edbUserPass.string);
        ConectManager_1.ConectManager.getIns().sendUpdateTaiKhoan(sfsObj);
      };
      CapNhatTaiKhoan.prototype.onDestroy = function() {
        Windown_1.Windown.CapNhatTaiKhoan = null;
        cc.systemEvent.off(EVENT_MANAGER_1.EVENT_MANAGER.onEnter, this.onClickDangKy, this);
      };
      CapNhatTaiKhoan.prototype.clickRefeshCaptcha = function() {
        Windown_1.Windown.CapchaController.requestCapcha();
      };
      CapNhatTaiKhoan.prototype.onClickClose = function() {
        var _this = this;
        Windown_1.Windown.actionEffectClose(this.node, function() {
          _this.node.parent = null;
        });
      };
      __decorate([ property(cc.EditBox) ], CapNhatTaiKhoan.prototype, "edbUserName", void 0);
      __decorate([ property(cc.EditBox) ], CapNhatTaiKhoan.prototype, "edbNickName", void 0);
      __decorate([ property(cc.EditBox) ], CapNhatTaiKhoan.prototype, "edbUserPass", void 0);
      __decorate([ property(cc.EditBox) ], CapNhatTaiKhoan.prototype, "edbUserRePass", void 0);
      CapNhatTaiKhoan = __decorate([ ccclass ], CapNhatTaiKhoan);
      return CapNhatTaiKhoan;
    }(BaseEditbox_1.default);
    exports.default = CapNhatTaiKhoan;
    cc._RF.pop();
  }, {
    "../../DefineTs/EVENT_MANAGER": "EVENT_MANAGER",
    "../../DefineTs/TextDefine": "TextDefine",
    "../../Network/ConectManager": "ConectManager",
    "../../Parent/BaseEditbox": "BaseEditbox",
    "../../Windown": "Windown"
  } ],
  CaptchaController: [ function(require, module, exports) {
    (function(Buffer) {
      "use strict";
      cc._RF.push(module, "ff9dd69bo5KXKG4LlQT6611", "CaptchaController");
      "use strict";
      var __extends = this && this.__extends || function() {
        var extendStatics = function(d, b) {
          extendStatics = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function(d, b) {
            d.__proto__ = b;
          } || function(d, b) {
            for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
          };
          return extendStatics(d, b);
        };
        return function(d, b) {
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var REQUEST_CODE_1 = require("../DefineTs/REQUEST_CODE");
      var ConectManager_1 = require("../Network/ConectManager");
      var Windown_1 = require("../Windown");
      var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
      var CaptchaController = function(_super) {
        __extends(CaptchaController, _super);
        function CaptchaController() {
          var _this = null !== _super && _super.apply(this, arguments) || this;
          _this.base64 = "";
          _this.listSpriteCapcha = [];
          _this.spriteFrameCacha = null;
          return _this;
        }
        CaptchaController.prototype.requestCapcha = function() {
          ConectManager_1.ConectManager.getIns().sendRequestToCallback(REQUEST_CODE_1.REQUEST_CODE.RequestCaptcha, null, this.responseServer.bind(this));
        };
        CaptchaController.prototype.onLoad = function() {
          cc.game.addPersistRootNode(this.node);
          Windown_1.Windown.CapchaController = this;
        };
        CaptchaController.prototype.start = function() {
          cc.log("co capcha ne");
        };
        CaptchaController.prototype.onDestroy = function() {
          this.spriteFrameCacha = null;
          Windown_1.Windown.CapchaController = null;
        };
        CaptchaController.prototype.responseServer = function(SFSObject) {
          this.base64 = SFSObject.getUtfString("captcha");
          this.getCapcha(this.base64);
        };
        CaptchaController.prototype.emitNewCacha = function() {
          if (null == this.spriteFrameCacha) return;
          for (var i = 0, l = this.listSpriteCapcha.length; i < l; i++) this.listSpriteCapcha[i].spriteFrame = this.spriteFrameCacha.clone();
        };
        CaptchaController.prototype.dangKy = function(component) {
          this.listSpriteCapcha.includes(component) || this.listSpriteCapcha.push(component);
          this.spriteFrameCacha && component.spriteFrame && (component.spriteFrame = this.spriteFrameCacha.clone());
        };
        CaptchaController.prototype.huyDangKy = function(component) {
          var index = this.listSpriteCapcha.indexOf(component);
          index > -1 && this.listSpriteCapcha.splice(index, 1);
        };
        CaptchaController.prototype.getCapcha = function(base64) {
          var _this = this;
          if (cc.sys.isNative) {
            this.spriteFrameCacha = null;
            var buffer = new Buffer(base64, "base64");
            var len = buffer.length;
            var bytes = new Uint8Array(len);
            for (var i = 0; i < len; i++) bytes[i] = buffer[i];
            var extName = "png";
            var randomFileName = "base64_img." + extName;
            var dir_1 = "" + jsb.fileUtils.getWritablePath() + randomFileName;
            cc.loader.release(dir_1);
            jsb.fileUtils.writeDataToFile(bytes, dir_1) && cc.loader.load(dir_1, function(err, texture) {
              if (!err && texture) {
                _this.spriteFrameCacha = new cc.SpriteFrame(texture);
                _this.emitNewCacha();
                jsb.fileUtils.removeFile(dir_1);
              }
            });
          } else {
            var src = "data:image/png;base64," + base64;
            var imgElement = new Image();
            imgElement.src = src;
            setTimeout(function() {
              var sprite = new cc.Texture2D();
              sprite.initWithElement(imgElement);
              sprite.handleLoadedTexture();
              _this.spriteFrameCacha = new cc.SpriteFrame(sprite);
              _this.emitNewCacha();
            }, 10);
          }
        };
        CaptchaController = __decorate([ ccclass ], CaptchaController);
        return CaptchaController;
      }(cc.Component);
      exports.default = CaptchaController;
      cc._RF.pop();
    }).call(this, require("buffer").Buffer);
  }, {
    "../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../Network/ConectManager": "ConectManager",
    "../Windown": "Windown",
    buffer: 2
  } ],
  CaptchaItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a2595sv7PBBRqClGtm5M/Gc", "CaptchaItem");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Windown_1 = require("../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CaptchaItem = function(_super) {
      __extends(CaptchaItem, _super);
      function CaptchaItem() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      CaptchaItem.prototype.start = function() {
        Windown_1.Windown.CapchaController.dangKy(this.getComponent(cc.Sprite));
      };
      CaptchaItem.prototype.onDestroy = function() {
        Windown_1.Windown.CapchaController.huyDangKy(this.getComponent(cc.Sprite));
      };
      CaptchaItem = __decorate([ ccclass ], CaptchaItem);
      return CaptchaItem;
    }(cc.Component);
    exports.default = CaptchaItem;
    cc._RF.pop();
  }, {
    "../Windown": "Windown"
  } ],
  CheckUserTab: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5794eVVRI9L5KJLRzpUgf/z", "CheckUserTab");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var REQUEST_CODE_1 = require("../../DefineTs/REQUEST_CODE");
    var ConectManager_1 = require("../../Network/ConectManager");
    var Windown_1 = require("../../Windown");
    var ItemInfoUser_1 = require("./ItemInfoUser");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CheckUserTab = function(_super) {
      __extends(CheckUserTab, _super);
      function CheckUserTab() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.edbUserId = null;
        _this.typeSearch = "idPlayer";
        _this.lbTypeSearch = null;
        _this.itemInfoUser = null;
        return _this;
      }
      CheckUserTab.prototype.start = function() {};
      CheckUserTab.prototype.onClickFindUser = function() {
        if ("" == this.edbUserId.string.trim()) {
          Windown_1.Windown.UIManager.showAlertMini("Vui l\xf2ng nh\u1eadp th\xf4ng tin User");
          return;
        }
        var SFSObject = ConectManager_1.ConectManager.getIns().getSFSObj();
        "idPlayer" == this.typeSearch ? SFSObject.putInt(this.typeSearch, JSON.parse(this.edbUserId.string)) : SFSObject.putUtfString(this.typeSearch, this.edbUserId.string);
        ConectManager_1.ConectManager.getIns().sendRequestToCallback(REQUEST_CODE_1.REQUEST_CODE.GET_INFO_USER, SFSObject, this.responeCheckUser.bind(this));
      };
      CheckUserTab.prototype.responeCheckUser = function(SFSObject) {
        cc.log("GET_INFO_USER:", Windown_1.Windown.SFSObjToJson(SFSObject));
        var dataUser = JSON.parse(Windown_1.Windown.SFSObjToJson(SFSObject));
        if (dataUser.hasOwnProperty("errorMessage")) Windown_1.Windown.UIManager.showAlertMini(dataUser["errorMessage"]); else {
          this.itemInfoUser.node.active = true;
          this.itemInfoUser.setInfo(dataUser);
        }
      };
      CheckUserTab.prototype.changeTypeSearch = function(even, type) {
        this.typeSearch = type;
        this.lbTypeSearch.string = "nn" == type ? "Nickname" : "idPlayer" == type ? "UserID" : "UserName";
      };
      __decorate([ property(cc.EditBox) ], CheckUserTab.prototype, "edbUserId", void 0);
      __decorate([ property ], CheckUserTab.prototype, "typeSearch", void 0);
      __decorate([ property(cc.Label) ], CheckUserTab.prototype, "lbTypeSearch", void 0);
      __decorate([ property(ItemInfoUser_1.default) ], CheckUserTab.prototype, "itemInfoUser", void 0);
      CheckUserTab = __decorate([ ccclass ], CheckUserTab);
      return CheckUserTab;
    }(cc.Component);
    exports.default = CheckUserTab;
    cc._RF.pop();
  }, {
    "../../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../../Network/ConectManager": "ConectManager",
    "../../Windown": "Windown",
    "./ItemInfoUser": "ItemInfoUser"
  } ],
  ClearCacheBase64: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "927c2cG+fZPp71Nv79Ab04d", "ClearCacheBase64");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
    var ClearCacheBase64 = function(_super) {
      __extends(ClearCacheBase64, _super);
      function ClearCacheBase64() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.isEmitDisble = false;
        return _this;
      }
      ClearCacheBase64.prototype.onDisable = function() {
        if (!this.isEmitDisble) return;
        this.onClear();
      };
      ClearCacheBase64.prototype.onClear = function() {
        var sprite = this.getComponent(cc.Sprite);
        if (sprite.spriteFrame && cc.path.basename(sprite.spriteFrame.getTexture().nativeUrl).indexOf("base64") - -1) {
          cc.log("xoa dc roi nay");
          cc.assetManager.releaseAsset(sprite.spriteFrame.getTexture());
          cc.assetManager.releaseAsset(sprite.spriteFrame);
          sprite.spriteFrame = null;
        }
      };
      ClearCacheBase64.prototype.onDestroy = function() {
        this.onClear();
      };
      __decorate([ property(cc.Boolean) ], ClearCacheBase64.prototype, "isEmitDisble", void 0);
      ClearCacheBase64 = __decorate([ ccclass, menu("ClearCacheBase64") ], ClearCacheBase64);
      return ClearCacheBase64;
    }(cc.Component);
    exports.default = ClearCacheBase64;
    cc._RF.pop();
  }, {} ],
  ConectManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4e64bkzZ+VOY4JtwMW0v4tz", "ConectManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ConectManager = void 0;
    var EVENT_MANAGER_1 = require("../DefineTs/EVENT_MANAGER");
    var PlayerPP_1 = require("../DefineTs/PlayerPP");
    var REQUEST_CODE_1 = require("../DefineTs/REQUEST_CODE");
    var TextDefine_1 = require("../DefineTs/TextDefine");
    var InfoERR_1 = require("../InfoERR");
    var Windown_1 = require("../Windown");
    var ConectManager = function() {
      function ConectManager() {
        this.objHandle = null;
        this.userNameCache = "";
        this.userPassCache = "";
        this.currentHost = "";
      }
      ConectManager.getIns = function() {
        null == ConectManager.instance && (ConectManager.instance = new ConectManager());
        return ConectManager.instance;
      };
      ConectManager.prototype.init = function() {
        this.objHandle = {};
        this.sfs = new SFS2X.SmartFox();
        this.sfs.addEventListener(SFS2X.SFSEvent.CONNECTION, this.onConnection, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.CONNECTION_LOST, this.onConnectionLost, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.LOGIN, this.onLogin, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.LOGIN_ERROR, this.onLoginError, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.onExtensionResponse, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.LOGOUT, this.onLogOut, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.PING_PONG, this.pingPong, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.ADMIN_MESSAGE, this.messageAdmin, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.MODERATOR_MESSAGE, this.messageMode, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.OBJECT_MESSAGE, this.messageObject, this);
        this.sfs.addEventListener(SFS2X.SFSEvent.PUBLIC_MESSAGE, this.messagePublic, this);
      };
      ConectManager.prototype.messageMode = function(obj) {
        Windown_1.Windown.Dialog.showLog(obj.message);
      };
      ConectManager.prototype.messageAdmin = function(obj) {
        Windown_1.Windown.Dialog.showLog(obj.message);
      };
      ConectManager.prototype.messageObject = function(obj) {
        Windown_1.Windown.Dialog.showLog(obj.message);
      };
      ConectManager.prototype.messagePublic = function(obj) {
        Windown_1.Windown.Dialog.showLog(obj.message);
      };
      ConectManager.prototype.connectToServer = function() {
        cc.log("connectToServer:" + Windown_1.Windown.Define.configNetwork.hostHttps);
        Windown_1.Windown.UIManager.showLoading();
        if (cc.sys.isNative) {
          cc.log("connectToServer native");
          this.sfs.connect(Windown_1.Windown.Define.configNetwork.hostHttps, 8443, true);
          this.currentHost = Windown_1.Windown.Define.configNetwork.hostHttps;
        } else {
          this.sfs.connect(Windown_1.Windown.Define.configNetwork.hostHttps, Windown_1.Windown.Define.configNetwork.portWebSServer, true);
          this.currentHost = Windown_1.Windown.Define.configNetwork.hostHttps;
        }
      };
      ConectManager.prototype.pingPong = function(evtParams) {
        Windown_1.Windown.LagValue = evtParams.lagValue / 1e3 / 2;
      };
      ConectManager.prototype.onConnection = function(evtParams) {
        if (evtParams.success) this.sfs.send(new SFS2X.LoginRequest("", "", null, Windown_1.Windown.Define.configNetwork.zoneLogin)); else {
          Windown_1.Windown.UIManager.hideLoading();
          Windown_1.Windown.Dialog.showLog("Kh\xf4ng th\u1ec3 k\u1ebft n\u1ed1i");
          Windown_1.Windown.BotController && Windown_1.Windown.restartGame();
        }
      };
      ConectManager.prototype.onConnectionLost = function(evtParams) {
        cc.log("connect lost");
        this.objHandle = {};
        Windown_1.Windown.UIManager.showAlertMini("M\u1ea5t k\u1ebft n\u1ed1i");
        this.emitOnDisconnect();
      };
      ConectManager.prototype.onLogin = function(evtParams) {
        this.objHandle = {};
        Windown_1.Windown.UIManager.hideLoading();
        this.emitOnConnect();
      };
      ConectManager.prototype.emitOnConnect = function() {
        cc.systemEvent.emit(EVENT_MANAGER_1.EVENT_MANAGER.onConnect);
      };
      ConectManager.prototype.emitOnDisconnect = function() {
        cc.systemEvent.emit(EVENT_MANAGER_1.EVENT_MANAGER.onDisconnect);
        if (null == Windown_1.Windown.MainView) {
          cc.director.loadScene("main");
          cc.log("loadScene main");
        }
      };
      ConectManager.prototype.onLoginError = function(evtParams) {
        this.emitOnDisconnect();
      };
      ConectManager.prototype.getValibleRoomName = function() {
        var name = this.makeId(8);
        while (this.sfs.roomManager.containsRoom(name)) name = this.makeId(8);
        return name;
      };
      ConectManager.prototype.makeId = function(length) {
        var result = "";
        var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) result += characters.charAt(Math.floor(Math.random() * charactersLength));
        return result;
      };
      ConectManager.prototype.onExtensionResponse = function(evtParams) {
        var code = evtParams.cmd;
        var SFSObject = evtParams.params;
        if (this.objHandle[code]) {
          this.objHandle[code](SFSObject);
          this.objHandle[code] = null;
          delete this.objHandle[code];
        }
        var data = null;
        switch (code) {
         case REQUEST_CODE_1.REQUEST_CODE.ForceRestart:
          cc.sys.isNative, Windown_1.Windown.restartGame();
          return;

         case REQUEST_CODE_1.REQUEST_CODE.Dialog:
          Windown_1.Windown.Dialog.showLog(SFSObject.getUtfString("msg"));
          return;

         case REQUEST_CODE_1.REQUEST_CODE.ActiveAutoFish:
          cc.log("nhay vao fish auto ne");
          var tyeActive_1 = SFSObject.getInt("isActive");
          Windown_1.Windown.User.isAutoFish = 0 != tyeActive_1;
          return;

         case REQUEST_CODE_1.REQUEST_CODE.ActiveGunSet:
          var tyeActive = SFSObject.getInt("isActive");
          Windown_1.Windown.User.isGunSet = 0 != tyeActive;
          return;

         case REQUEST_CODE_1.REQUEST_CODE.ListRoom:
         case REQUEST_CODE_1.REQUEST_CODE.Dangky:
         case REQUEST_CODE_1.REQUEST_CODE.Login:
          return;

         case REQUEST_CODE_1.REQUEST_CODE.Logout:
          Windown_1.Windown.Dialog.checkAndShowLog(SFSObject, true);
          this.sfs.enableLagMonitor(false);
          this.emitOnDisconnect();
          return;

         case REQUEST_CODE_1.REQUEST_CODE.BuyIn:
          SFSObject.isNull("data") || (data = SFSObject.getUtfString("data"));
          var data1 = JSON.parse(data);
          if (100 != data1.errorCode) Windown_1.Windown.Dialog.showLog(data1.msg); else {
            Windown_1.Windown.User.userAg += data1.ag;
            Windown_1.Windown.Dialog.showLog(data.msg);
          }
          return;

         case REQUEST_CODE_1.REQUEST_CODE.RequestCaptcha:
          return;

         case REQUEST_CODE_1.REQUEST_CODE.GiftCode:
          SFSObject.isNull("errorMessage") || cc.log(SFSObject.getUtfString("errorMessage"));
          SFSObject.isNull("message") || cc.log(SFSObject.getUtfString("message"));
          return;

         case REQUEST_CODE_1.REQUEST_CODE.GetAccountBlance:
          Windown_1.Windown.MoneyUser.moneyCache = SFSObject.getLong("AccountBalance");
          Windown_1.Windown.MoneyUser.updateMoney();
          return;

         case REQUEST_CODE_1.REQUEST_CODE.NotiJackpotFish:
          Windown_1.Windown.UIManager.showNotiNoHu(SFSObject);
          return;

         case REQUEST_CODE_1.REQUEST_CODE.InfoJackpot:
          return;

         case REQUEST_CODE_1.REQUEST_CODE.LvlUp:
          Windown_1.Windown.UIManager.showLvlUp(SFSObject);
          return;

         case REQUEST_CODE_1.REQUEST_CODE.ReviceListItem:
          Windown_1.Windown.UIManager.showReviceItem(SFSObject);
          return;

         case REQUEST_CODE_1.REQUEST_CODE.GetInfo:
          Windown_1.Windown.Dialog.checkAndShowLog(SFSObject, false);
          Windown_1.Windown.UIManager.showThongTin(SFSObject.getSFSObject("info"));
          return;

         case REQUEST_CODE_1.REQUEST_CODE.UpdateAccount:
          this.responseUpdateTaiKhoan(SFSObject);
          return;

         case REQUEST_CODE_1.REQUEST_CODE.GETLISTMARKGAME:
          cc.log(Windown_1.Windown.SFSObjToJson(SFSObject));
          Windown_1.Windown.UIManager.onShowLobbyView(Windown_1.Windown.SFSObjToJson(SFSObject), Windown_1.Windown.UIManager.currentGameId);
          return;
        }
        cc.systemEvent.emit(code, SFSObject);
      };
      ConectManager.prototype.onLogOut = function(evtParams) {
        console.log("logout roi=== ");
        this.objHandle = {};
        this.emitOnDisconnect();
      };
      ConectManager.prototype.sendLogout = function() {
        var obj = new SFS2X.SFSObject();
        this.sendRequest(REQUEST_CODE_1.REQUEST_CODE.Logout, obj);
      };
      ConectManager.prototype.sendJoinRoom = function(id, pass) {
        this.sfs.send(new SFS2X.JoinRoomRequest(id, pass));
      };
      ConectManager.prototype.sendLeaveRoom = function(room) {
        if (!this.sfs.roomManager.containsRoom(room.id) || !this.sfs.getJoinedRooms().includes(room)) throw new InfoERR_1.InfoErr("");
        this.sfs.send(new SFS2X.LeaveRoomRequest(room));
      };
      ConectManager.prototype.sendSignUp = function(userName, nickName, userPass, captcha) {
        Windown_1.Windown.UIManager.showLoading();
        var params = ConectManager.getIns().getSFSObj();
        params.putUtfString("username", userName);
        params.putUtfString("password", userPass);
        params.putUtfString("captcha", captcha);
        params.putInt("deviceOS", Windown_1.Windown.getOS());
        params.putUtfString("deviceID", Windown_1.Windown.getDeviceID());
        params.putUtfString("deviceName", Windown_1.Windown.getDeviceName());
        params.putUtfString("ip", Windown_1.Windown.User.ipAddress);
        null != nickName && "" != nickName && params.putUtfString("nickname", nickName);
        ConectManager.getIns().sendRequestToCallback(REQUEST_CODE_1.REQUEST_CODE.SignUp, params, this.responseSignUp.bind(this));
        ConectManager.getIns().dangKyCallBackByCode(REQUEST_CODE_1.REQUEST_CODE.Login, this.responseLogin.bind(this));
      };
      ConectManager.prototype.sendLogin = function(userName, userPass, captcha) {
        Windown_1.Windown.UIManager.showLoading();
        var SFSObject = ConectManager.getIns().getSFSObj();
        SFSObject.putUtfString("username", userName);
        SFSObject.putUtfString("password", Windown_1.Windown.getMD5(userPass));
        SFSObject.putUtfString("captcha", captcha);
        SFSObject.putInt("deviceOS", Windown_1.Windown.getOS());
        SFSObject.putUtfString("deviceID", Windown_1.Windown.getDeviceID());
        SFSObject.putUtfString("deviceName", Windown_1.Windown.getDeviceName());
        this.userNameCache = userName;
        this.userPassCache = userPass;
        cc.log("DataLogin:", Windown_1.Windown.SFSObjToJson(SFSObject));
        ConectManager.getIns().sendRequestToCallback(REQUEST_CODE_1.REQUEST_CODE.Login, SFSObject, this.responseLogin.bind(this));
        Windown_1.Windown.UIManager.showLoading();
      };
      ConectManager.prototype.loginFb = function(data) {
        Windown_1.Windown.UIManager.showLoading();
        try {
          var sfs = ConectManager.getIns().getSFSObj();
          data.id && sfs.putUtfString("id", data.id);
          data.token && sfs.putUtfString("token", data.token);
          data.tokenInWeb && sfs.putUtfString("tokenInWeb", data.tokenInWeb);
          sfs.putInt("deviceOS", Windown_1.Windown.getOS());
          sfs.putUtfString("deviceID", Windown_1.Windown.getDeviceID());
          sfs.putUtfString("deviceName", Windown_1.Windown.getDeviceName());
          ConectManager.getIns().sendRequestToCallback(REQUEST_CODE_1.REQUEST_CODE.LoginFb, sfs, this.responseLoginFaceBook.bind(this));
        } catch (e) {
          Windown_1.Windown.UIManager.hideLoading();
          Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.ErrorDeviceId);
        }
      };
      ConectManager.prototype.loginGuest = function() {
        try {
          var sfs = ConectManager.getIns().getSFSObj();
          sfs.putInt("deviceOS", Windown_1.Windown.getOS());
          sfs.putUtfString("deviceID", Windown_1.Windown.getDeviceID());
          sfs.putUtfString("deviceName", Windown_1.Windown.getDeviceName());
          sfs.putUtfString("ip", Windown_1.Windown.User.ipAddress);
          ConectManager.getIns().sendRequestToCallback(REQUEST_CODE_1.REQUEST_CODE.LoginPlaynow, sfs, this.responseLoginPlayNow.bind(this));
        } catch (e) {
          Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.ErrorDeviceId);
        }
      };
      ConectManager.prototype.sendUpdateTaiKhoan = function(SFSObject) {
        ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.UpdateAccount, SFSObject);
      };
      ConectManager.prototype.responseSignUp = function(SFSObject) {
        if (Windown_1.Windown.DangKy && !SFSObject.isNull("activeCaptcha")) {
          Windown_1.Windown.DangKy.edbCaptcha.node.active = true;
          Windown_1.Windown.UIManager.hideLoading();
        }
        if (SFSObject.containsKey("errorMessage")) {
          Windown_1.Windown.Dialog.showLog(SFSObject.getUtfString("errorMessage"));
          Windown_1.Windown.UIManager.hideLoading();
        } else Windown_1.Windown.DangKy.node.destroy();
      };
      ConectManager.prototype.responseLogin = function(SFSObject) {
        Windown_1.Windown.UIManager.hideLoading();
        if (Windown_1.Windown.DangNhap) {
          if (SFSObject.containsKey("activeCaptcha")) {
            Windown_1.Windown.DangNhap.edbCaptcha.node.active = true;
            Windown_1.Windown.CapchaController.requestCapcha();
          }
          if (Windown_1.Windown.DangNhap.toggleAuto.isChecked) {
            Windown_1.Windown.setLocalStorage("userName", this.userNameCache);
            Windown_1.Windown.setLocalStorage("userPass", this.userPassCache);
          }
        }
        if (SFSObject.containsKey(PlayerPP_1.PlayerPP.ERR_MESSAGE)) {
          Windown_1.Windown.Dialog.showLog(SFSObject.getUtfString(PlayerPP_1.PlayerPP.ERR_MESSAGE));
          Windown_1.Windown.setLocalStorage("autoLogin", "false");
          Windown_1.Windown.BotController && Windown_1.Windown.UIManager.scheduleOnce(function() {
            Windown_1.Windown.restartGame();
          }, 10);
          return;
        }
        Windown_1.Windown.DangNhap && Windown_1.Windown.DangNhap.node.destroy();
        Windown_1.Windown.DangKy && Windown_1.Windown.DangKy.node && Windown_1.Windown.DangKy.node.destroy();
        ConectManager.getIns().sfs.enableLagMonitor(true);
        Windown_1.Windown.initUser(SFSObject);
        Windown_1.Windown.MainView.initUIUser();
        var isSigup = SFSObject.getBool("isSigup");
        cc.systemEvent.emit(EVENT_MANAGER_1.EVENT_MANAGER.LOGIN);
      };
      ConectManager.prototype.responseLoginFaceBook = function(SFSObject) {
        Windown_1.Windown.DangNhap && Windown_1.Windown.DangNhap.node.destroy();
        Windown_1.Windown.DangKy && Windown_1.Windown.DangKy.node && Windown_1.Windown.DangKy.node.destroy();
        if (SFSObject.containsKey(PlayerPP_1.PlayerPP.ERR_MESSAGE)) {
          cc.log(SFSObject.get("tk"));
          Windown_1.Windown.MainView && Windown_1.Windown.MainView.listTkErr.push(SFSObject.get("tk"));
        }
        Windown_1.Windown.Dialog.checkAndShowLog(SFSObject, false);
        ConectManager.getIns().sfs.enableLagMonitor(true);
        Windown_1.Windown.initUser(SFSObject);
        Windown_1.Windown.initConfig();
        Windown_1.Windown.initGameConfig(SFSObject.getUtfString("gameConfig"));
        Windown_1.Windown.MainView.initUIUser();
        var isSigup = SFSObject.getBool("isSigup");
        cc.systemEvent.emit(EVENT_MANAGER_1.EVENT_MANAGER.LOGIN);
        Windown_1.Windown.setLocalStorage("isLogInFb", "true");
      };
      ConectManager.prototype.responseLoginPlayNow = function(SFSObject) {
        Windown_1.Windown.DangNhap && Windown_1.Windown.DangNhap.node.destroy();
        Windown_1.Windown.DangKy && Windown_1.Windown.DangKy.node && Windown_1.Windown.DangKy.node.destroy();
        Windown_1.Windown.Dialog.checkAndShowLog(SFSObject, false);
        ConectManager.getIns().sfs.enableLagMonitor(true);
        Windown_1.Windown.initUser(SFSObject);
        Windown_1.Windown.initConfig();
        Windown_1.Windown.initGameConfig(SFSObject.getUtfString("gameConfig"));
        Windown_1.Windown.MainView.initUIUser();
        var isSigup = SFSObject.getBool("isSigup");
        Windown_1.Windown.setLocalStorage("isLogInPlayNow", "true");
        cc.systemEvent.emit(EVENT_MANAGER_1.EVENT_MANAGER.LOGIN);
      };
      ConectManager.prototype.responseUpdateTaiKhoan = function(SFSObject) {
        Windown_1.Windown.Dialog.checkAndShowLog(SFSObject, true);
        Windown_1.Windown.CapNhatTaiKhoan && Windown_1.Windown.CapNhatTaiKhoan.onClickClose();
        if (Windown_1.Windown.ThongTin && Windown_1.Windown.ThongTin.node.parent && Windown_1.Windown.MainView) {
          var sfsObj = ConectManager.getIns().getSFSObj();
          sfsObj.putInt("Id", Windown_1.Windown.User.userId);
          ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.GetInfo, sfsObj);
        }
        Windown_1.Windown.initUser(SFSObject);
        Windown_1.Windown.MainView && Windown_1.Windown.MainView.initUIUser();
      };
      ConectManager.prototype.getRoomById = function(roomId) {
        var room = this.sfs.roomManager.getRoomById(roomId);
        return room;
      };
      ConectManager.prototype.getMD5 = function(string) {
        var r = function() {
          this.hexcase = 0, this.b64pad = "";
        };
        r.prototype = {}, r.prototype.hex_md5 = function(e) {
          return this.rstr2hex(this.rstr_md5(this.str2rstr_utf8(e)));
        }, r.prototype.b64_md5 = function(e) {
          return this.rstr2b64(this.rstr_md5(this.str2rstr_utf8(e)));
        }, r.prototype.any_md5 = function(e, t) {
          return this.rstr2any(this.rstr_md5(this.str2rstr_utf8(e)), t);
        }, r.prototype.hex_hmac_md5 = function(e, t) {
          return this.rstr2hex(this.rstr_hmac_md5(this.str2rstr_utf8(e), this.str2rstr_utf8(t)));
        }, r.prototype.b64_hmac_md5 = function(e, t) {
          return this.rstr2b64(this.rstr_hmac_md5(this.str2rstr_utf8(e), this.str2rstr_utf8(t)));
        }, r.prototype.any_hmac_md5 = function(e, t, n) {
          return this.rstr2any(this.rstr_hmac_md5(this.str2rstr_utf8(e), this.str2rstr_utf8(t)), n);
        }, r.prototype.md5_vm_test = function() {
          return "900150983cd24fb0d6963f7d28e17f72" == this.hex_md5("abc").toLowerCase();
        }, r.prototype.rstr_md5 = function(e) {
          return this.binl2rstr(this.binl_md5(this.rstr2binl(e), 8 * e.length));
        }, r.prototype.rstr_hmac_md5 = function(e, t) {
          var n = this.rstr2binl(e);
          n.length > 16 && (n = this.binl_md5(n, 8 * e.length));
          for (var r = Array(16), i = Array(16), o = 0; o < 16; o++) r[o] = 909522486 ^ n[o], 
          i[o] = 1549556828 ^ n[o];
          var s = this.binl_md5(r.concat(this.rstr2binl(t)), 512 + 8 * t.length);
          return this.binl2rstr(this.binl_md5(i.concat(s), 640));
        }, r.prototype.rstr2hex = function(e) {
          try {
            this.hexcase;
          } catch (e) {
            this.hexcase = 0;
          }
          for (var t, n = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef", r = "", i = 0; i < e.length; i++) t = e.charCodeAt(i), 
          r += n.charAt(t >>> 4 & 15) + n.charAt(15 & t);
          return r;
        }, r.prototype.rstr2b64 = function(e) {
          try {
            this.b64pad;
          } catch (e) {
            this.b64pad = "";
          }
          for (var t = "", n = e.length, r = 0; r < n; r += 3) for (var i = e.charCodeAt(r) << 16 | (r + 1 < n ? e.charCodeAt(r + 1) << 8 : 0) | (r + 2 < n ? e.charCodeAt(r + 2) : 0), o = 0; o < 4; o++) 8 * r + 6 * o > 8 * e.length ? t += this.b64pad : t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(i >>> 6 * (3 - o) & 63);
          return t;
        }, r.prototype.rstr2any = function(e, t) {
          var n, r, i, o, s, a = t.length, u = Array(Math.ceil(e.length / 2));
          for (n = 0; n < u.length; n++) u[n] = e.charCodeAt(2 * n) << 8 | e.charCodeAt(2 * n + 1);
          var c = Math.ceil(8 * e.length / (Math.log(t.length) / Math.log(2))), l = Array(c);
          for (r = 0; r < c; r++) {
            for (s = Array(), o = 0, n = 0; n < u.length; n++) o = (o << 16) + u[n], o -= (i = Math.floor(o / a)) * a, 
            (s.length > 0 || i > 0) && (s[s.length] = i);
            l[r] = o, u = s;
          }
          var f = "";
          for (n = l.length - 1; n >= 0; n--) f += t.charAt(l[n]);
          return f;
        }, r.prototype.str2rstr_utf8 = function(e) {
          for (var t, n, r = "", i = -1; ++i < e.length; ) t = e.charCodeAt(i), n = i + 1 < e.length ? e.charCodeAt(i + 1) : 0, 
          55296 <= t && t <= 56319 && 56320 <= n && n <= 57343 && (t = 65536 + ((1023 & t) << 10) + (1023 & n), 
          i++), t <= 127 ? r += String.fromCharCode(t) : t <= 2047 ? r += String.fromCharCode(192 | t >>> 6 & 31, 128 | 63 & t) : t <= 65535 ? r += String.fromCharCode(224 | t >>> 12 & 15, 128 | t >>> 6 & 63, 128 | 63 & t) : t <= 2097151 && (r += String.fromCharCode(240 | t >>> 18 & 7, 128 | t >>> 12 & 63, 128 | t >>> 6 & 63, 128 | 63 & t));
          return r;
        }, r.prototype.str2rstr_utf16le = function(e) {
          for (var t = "", n = 0; n < e.length; n++) t += String.fromCharCode(255 & e.charCodeAt(n), e.charCodeAt(n) >>> 8 & 255);
          return t;
        }, r.prototype.str2rstr_utf16be = function(e) {
          for (var t = "", n = 0; n < e.length; n++) t += String.fromCharCode(e.charCodeAt(n) >>> 8 & 255, 255 & e.charCodeAt(n));
          return t;
        }, r.prototype.rstr2binl = function(e) {
          for (var t = Array(e.length >> 2), n = 0; n < t.length; n++) t[n] = 0;
          for (n = 0; n < 8 * e.length; n += 8) t[n >> 5] |= (255 & e.charCodeAt(n / 8)) << n % 32;
          return t;
        }, r.prototype.binl2rstr = function(e) {
          for (var t = "", n = 0; n < 32 * e.length; n += 8) t += String.fromCharCode(e[n >> 5] >>> n % 32 & 255);
          return t;
        }, r.prototype.binl_md5 = function(e, t) {
          e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
          for (var n = 1732584193, r = -271733879, i = -1732584194, o = 271733878, s = 0; s < e.length; s += 16) {
            var a = n, u = r, c = i, l = o;
            n = this.md5_ff(n, r, i, o, e[s + 0], 7, -680876936), o = this.md5_ff(o, n, r, i, e[s + 1], 12, -389564586), 
            i = this.md5_ff(i, o, n, r, e[s + 2], 17, 606105819), r = this.md5_ff(r, i, o, n, e[s + 3], 22, -1044525330), 
            n = this.md5_ff(n, r, i, o, e[s + 4], 7, -176418897), o = this.md5_ff(o, n, r, i, e[s + 5], 12, 1200080426), 
            i = this.md5_ff(i, o, n, r, e[s + 6], 17, -1473231341), r = this.md5_ff(r, i, o, n, e[s + 7], 22, -45705983), 
            n = this.md5_ff(n, r, i, o, e[s + 8], 7, 1770035416), o = this.md5_ff(o, n, r, i, e[s + 9], 12, -1958414417), 
            i = this.md5_ff(i, o, n, r, e[s + 10], 17, -42063), r = this.md5_ff(r, i, o, n, e[s + 11], 22, -1990404162), 
            n = this.md5_ff(n, r, i, o, e[s + 12], 7, 1804603682), o = this.md5_ff(o, n, r, i, e[s + 13], 12, -40341101), 
            i = this.md5_ff(i, o, n, r, e[s + 14], 17, -1502002290), r = this.md5_ff(r, i, o, n, e[s + 15], 22, 1236535329), 
            n = this.md5_gg(n, r, i, o, e[s + 1], 5, -165796510), o = this.md5_gg(o, n, r, i, e[s + 6], 9, -1069501632), 
            i = this.md5_gg(i, o, n, r, e[s + 11], 14, 643717713), r = this.md5_gg(r, i, o, n, e[s + 0], 20, -373897302), 
            n = this.md5_gg(n, r, i, o, e[s + 5], 5, -701558691), o = this.md5_gg(o, n, r, i, e[s + 10], 9, 38016083), 
            i = this.md5_gg(i, o, n, r, e[s + 15], 14, -660478335), r = this.md5_gg(r, i, o, n, e[s + 4], 20, -405537848), 
            n = this.md5_gg(n, r, i, o, e[s + 9], 5, 568446438), o = this.md5_gg(o, n, r, i, e[s + 14], 9, -1019803690), 
            i = this.md5_gg(i, o, n, r, e[s + 3], 14, -187363961), r = this.md5_gg(r, i, o, n, e[s + 8], 20, 1163531501), 
            n = this.md5_gg(n, r, i, o, e[s + 13], 5, -1444681467), o = this.md5_gg(o, n, r, i, e[s + 2], 9, -51403784), 
            i = this.md5_gg(i, o, n, r, e[s + 7], 14, 1735328473), r = this.md5_gg(r, i, o, n, e[s + 12], 20, -1926607734), 
            n = this.md5_hh(n, r, i, o, e[s + 5], 4, -378558), o = this.md5_hh(o, n, r, i, e[s + 8], 11, -2022574463), 
            i = this.md5_hh(i, o, n, r, e[s + 11], 16, 1839030562), r = this.md5_hh(r, i, o, n, e[s + 14], 23, -35309556), 
            n = this.md5_hh(n, r, i, o, e[s + 1], 4, -1530992060), o = this.md5_hh(o, n, r, i, e[s + 4], 11, 1272893353), 
            i = this.md5_hh(i, o, n, r, e[s + 7], 16, -155497632), r = this.md5_hh(r, i, o, n, e[s + 10], 23, -1094730640), 
            n = this.md5_hh(n, r, i, o, e[s + 13], 4, 681279174), o = this.md5_hh(o, n, r, i, e[s + 0], 11, -358537222), 
            i = this.md5_hh(i, o, n, r, e[s + 3], 16, -722521979), r = this.md5_hh(r, i, o, n, e[s + 6], 23, 76029189), 
            n = this.md5_hh(n, r, i, o, e[s + 9], 4, -640364487), o = this.md5_hh(o, n, r, i, e[s + 12], 11, -421815835), 
            i = this.md5_hh(i, o, n, r, e[s + 15], 16, 530742520), r = this.md5_hh(r, i, o, n, e[s + 2], 23, -995338651), 
            n = this.md5_ii(n, r, i, o, e[s + 0], 6, -198630844), o = this.md5_ii(o, n, r, i, e[s + 7], 10, 1126891415), 
            i = this.md5_ii(i, o, n, r, e[s + 14], 15, -1416354905), r = this.md5_ii(r, i, o, n, e[s + 5], 21, -57434055), 
            n = this.md5_ii(n, r, i, o, e[s + 12], 6, 1700485571), o = this.md5_ii(o, n, r, i, e[s + 3], 10, -1894986606), 
            i = this.md5_ii(i, o, n, r, e[s + 10], 15, -1051523), r = this.md5_ii(r, i, o, n, e[s + 1], 21, -2054922799), 
            n = this.md5_ii(n, r, i, o, e[s + 8], 6, 1873313359), o = this.md5_ii(o, n, r, i, e[s + 15], 10, -30611744), 
            i = this.md5_ii(i, o, n, r, e[s + 6], 15, -1560198380), r = this.md5_ii(r, i, o, n, e[s + 13], 21, 1309151649), 
            n = this.md5_ii(n, r, i, o, e[s + 4], 6, -145523070), o = this.md5_ii(o, n, r, i, e[s + 11], 10, -1120210379), 
            i = this.md5_ii(i, o, n, r, e[s + 2], 15, 718787259), r = this.md5_ii(r, i, o, n, e[s + 9], 21, -343485551), 
            n = this.safe_add(n, a), r = this.safe_add(r, u), i = this.safe_add(i, c), o = this.safe_add(o, l);
          }
          return Array(n, r, i, o);
        }, r.prototype.md5_cmn = function(e, t, n, r, i, o) {
          return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(t, e), this.safe_add(r, o)), i), n);
        }, r.prototype.md5_ff = function(e, t, n, r, i, o, s) {
          return this.md5_cmn(t & n | ~t & r, e, t, i, o, s);
        }, r.prototype.md5_gg = function(e, t, n, r, i, o, s) {
          return this.md5_cmn(t & r | n & ~r, e, t, i, o, s);
        }, r.prototype.md5_hh = function(e, t, n, r, i, o, s) {
          return this.md5_cmn(t ^ n ^ r, e, t, i, o, s);
        }, r.prototype.md5_ii = function(e, t, n, r, i, o, s) {
          return this.md5_cmn(n ^ (t | ~r), e, t, i, o, s);
        }, r.prototype.safe_add = function(e, t) {
          var n = (65535 & e) + (65535 & t);
          return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n;
        }, r.prototype.bit_rol = function(e, t) {
          return e << t | e >>> 32 - t;
        };
        return new r().hex_md5(string);
      };
      ConectManager.prototype.sendRequest = function(code, SFSObject, SFSRoom) {
        void 0 === SFSRoom && (SFSRoom = null);
        SFSObject || (SFSObject = this.getSFSObj());
        if (!this.sfs.isConnected) {
          this.emitOnDisconnect();
          return;
        }
        cc.log("sendRequest code=" + code);
        this.sfs.send(new SFS2X.ExtensionRequest(code, SFSObject, SFSRoom));
      };
      ConectManager.prototype.sendRequestToCallback = function(code, SFSObject, callback, SFSRoom) {
        void 0 === SFSObject && (SFSObject = this.getSFSObj());
        void 0 === callback && (callback = null);
        void 0 === SFSRoom && (SFSRoom = null);
        callback && (this.objHandle[code] = callback);
        if (!this.sfs.isConnected) {
          this.emitOnDisconnect();
          return;
        }
        this.sfs.send(new SFS2X.ExtensionRequest(code, SFSObject, SFSRoom));
      };
      ConectManager.prototype.dangKyCallBackByCode = function(code, callback) {
        void 0 === callback && (callback = null);
        callback && (this.objHandle[code] = callback);
      };
      ConectManager.prototype.checkConnectAndConnect = function() {
        this.sfs.isConnected || this.connectToServer();
      };
      ConectManager.prototype.sendBuyIn = function(seri, pin, net, price) {
        var obj = new SFS2X.SFSObject();
        obj.putUtfString("seri", seri);
        obj.putUtfString("mathe", pin);
        obj.putInt("idplayer", 19);
        obj.putInt("amount", price);
        obj.putInt("chonmang", net);
        this.sendRequest(REQUEST_CODE_1.REQUEST_CODE.BuyIn, obj);
      };
      ConectManager.prototype.getSFSObj = function() {
        return new SFS2X.SFSObject();
      };
      ConectManager.prototype.getSFSArray = function() {
        return new SFS2X.SFSArray();
      };
      ConectManager.instance = null;
      return ConectManager;
    }();
    exports.ConectManager = ConectManager;
    cc._RF.pop();
  }, {
    "../DefineTs/EVENT_MANAGER": "EVENT_MANAGER",
    "../DefineTs/PlayerPP": "PlayerPP",
    "../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../DefineTs/TextDefine": "TextDefine",
    "../InfoERR": "InfoERR",
    "../Windown": "Windown"
  } ],
  ConfigScence: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "48992TPY3JKm61NZslGflvJ", "ConfigScence");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Windown_1 = require("./Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ConfgScence = function(_super) {
      __extends(ConfgScence, _super);
      function ConfgScence() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.spBanNgay = null;
        _this.spBanDem = null;
        _this.spMain = null;
        _this.manifest = null;
        _this.json = null;
        _this.globalGameStoragePath = "";
        _this._am = null;
        _this.currentVersion = "";
        _this.newVersion = "";
        _this.countFail = 0;
        _this.listVerCheck = [];
        return _this;
      }
      ConfgScence.prototype.start = function() {
        Windown_1.Windown.keyEncrytps = "funMainLvd";
        var now = new Date();
        var hour = now.getHours();
        this.spMain.spriteFrame = hour >= 19 || hour < 5 ? this.spBanDem : this.spBanNgay;
        !cc.sys.isNative || cc.sys.os != cc.sys.OS_ANDROID && cc.sys.os != cc.sys.OS_IOS || this.initUrl(Windown_1.Windown.linkFull.replace("%s", Windown_1.Windown.Define.configNetwork.hostHttps));
        this.initConfigBundle(null);
      };
      ConfgScence.prototype.finish = function() {
        Windown_1.Windown.UIManager.showLoadingData();
        (cc.sys.os == cc.sys.OS_WINDOWS && false, cc.sys.isNative) || (Windown_1.Windown.IsSafe = true);
        cc.director.preloadScene("main", function(count, total) {
          Windown_1.Windown.UIManager.setPerData(count / total);
        }, function(err) {
          if (err) return;
          Windown_1.Windown.UIManager.hideLoadingData();
          Windown_1.Windown.UIManager.showLoading();
          cc.director.loadScene("main");
          Windown_1.Windown.getDeviceID();
        });
      };
      ConfgScence.prototype.getConfigLink = function() {};
      ConfgScence.prototype.funGetConfigErr = function() {
        var _this = this;
        if (cc.sys.isBrowser) {
          Windown_1.Windown.Define.configNetwork.hostHttps = "rongvang68.com";
          this.finish();
          return;
        }
        this.scheduleOnce(function() {
          var String = '{"Server":"caxeng.win","BundleUrl":"http://bundlecaxeng.com/","Ver":["1.0.0","1.0.1"],"ServerNew":"caxeng.com"}';
          var data = JSON.parse(String);
          _this.getConfigBundle(data.BundleUrl);
          if (cc.sys.isNative && true) {
            Windown_1.Windown.linkBundle = Windown_1.Windown.linkBundle.replace("%s", data.BundleUrl);
            Windown_1.Windown.linkFull = Windown_1.Windown.linkFull.replace("%s", data.BundleUrl);
            Windown_1.Windown.linkConfig = Windown_1.Windown.linkConfig.replace("%s", data.BundleUrl);
            Windown_1.Windown.Define.configNetwork.hostHttps = data.ServerNew;
            _this.initUrl(Windown_1.Windown.linkFull);
          }
        }, 1);
      };
      ConfgScence.prototype.initConfigBundle = function(data) {
        if (null != data && "" != data) {
          var obj = JSON.parse(data);
          Windown_1.Windown.verChildGame = obj.VerGame || Windown_1.Windown.verChildGame;
          Windown_1.Windown.LIST_REMOVE_BUNDLE_GAME = obj.ListRemoveBundleGame || {};
          Windown_1.Windown.LIST_VERSION_REMOVE = obj.ListVersionRemove || [];
          this.listVerCheck = obj.VerCheckUpdate;
          this.checkListVerRemove();
        } else this.checkGameVersionGlobal();
      };
      ConfgScence.prototype.getConfigBundle = function(linkConfig) {
        var _this = this;
        if (!cc.sys.isNative) return;
        linkConfig += "ConfigBundle.txt";
        var http = new XMLHttpRequest();
        http.open("GET", linkConfig, true);
        http.setRequestHeader("Content-Type", "application/json");
        http.onreadystatechange = function() {
          if (4 === http.readyState && http.status >= 200 && http.status < 300) {
            var obj = JSON.parse(http.responseText);
            if (null == obj) return;
            _this.initConfigBundle(http.responseText);
          }
        };
        http.send();
      };
      ConfgScence.prototype.versionCompareHandle = function(versionA, versionB) {
        this.currentVersion = "v" + versionA;
        this.newVersion = "v" + versionB;
        console.log("JS Custom Version Compare: version A is " + versionA + ", version B is " + versionB);
        var vA = versionA.split(".");
        var vB = versionB.split(".");
        for (var i = 0; i < vA.length; ++i) {
          var a = parseInt(vA[i]);
          var b = parseInt(vB[i] || 0);
          if (a === b) continue;
          return a - b;
        }
        return vB.length > vA.length ? -1 : 0;
      };
      ConfgScence.prototype.globalCheckCb = function(event) {
        console.log("GGGG Code: " + event.getEventCode());
        switch (event.getEventCode()) {
         case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
          this._am.setEventCallback(null);
          console.log("ERROR_NO_LOCAL_MANIFEST");
          jsb.fileUtils.removeDirectory(this.globalGameStoragePath);
          setTimeout(function() {
            cc.audioEngine.stopAll();
            Windown_1.Windown.restartGame();
          }, 1e3);
          break;

         case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
         case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
          console.log("ERROR_DOWNLOAD_MANIFEST , ERROR_PARSE_MANIFEST");
          this._am.setEventCallback(null);
          this.finish();
          break;

         case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
         case jsb.EventAssetsManager.UPDATE_FINISHED:
          console.log("GGGG checkCb : Already up to date with the latest remote version.");
          this._am.setEventCallback(null);
          this.finish();
          break;

         case jsb.EventAssetsManager.NEW_VERSION_FOUND:
          console.log("NEW_VERSION_FOUND");
          this._am.setEventCallback(null);
          this.globalUpdateGame();
          break;

         default:
          return;
        }
      };
      ConfgScence.prototype.globalUpdateGame = function() {
        console.log("GGG globalUpdateGame ");
        if (this._am) {
          console.log("GGG globalUpdateGame OK");
          this._am.setEventCallback(this.globalUpdateCb.bind(this));
          if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
            var manifest = new jsb.Manifest(JSON.stringify(this.json), this.globalGameStoragePath);
            this._am.loadLocalManifest(manifest, this.globalGameStoragePath);
          }
          this._am.update();
          Windown_1.Windown.UIManager.showLoadingData(this.currentVersion + "->" + this.newVersion);
        }
      };
      ConfgScence.prototype.globalUpdateCb = function(event) {
        var needRestart = false;
        var failed = false;
        switch (event.getEventCode()) {
         case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
          console.log("GGGG updateCb :No local manifest file found, hot update skipped.");
          failed = true;
          break;

         case jsb.EventAssetsManager.UPDATE_PROGRESSION:
          Windown_1.Windown.UIManager.setPerData(event.getPercent());
          break;

         case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
         case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
          console.log("GGGG updateCb Fail to download manifest file, hot update skipped.");
          failed = true;
          break;

         case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
          console.log("GGGG updateCb Already up to date with the latest remote version.");
          failed = true;
          break;

         case jsb.EventAssetsManager.UPDATE_FINISHED:
          console.log("GGGG updateCb Update finished.");
          needRestart = true;
          break;

         case jsb.EventAssetsManager.UPDATE_FAILED:
          console.log("GGGG updateCb Update failed. : " + event.getMessage());
          this._am.downloadFailedAssets();
          break;

         case jsb.EventAssetsManager.ERROR_UPDATING:
          console.log("GGGG updateCb Asset update error: " + event.getAssetId() + ", " + event.getMessage());
          break;

         case jsb.EventAssetsManager.ERROR_DECOMPRESS:
          console.log("GGGG updateCb ERROR_DECOMPRESS : " + event.getMessage());
        }
        if (failed) {
          this._am.setEventCallback(null);
          this.finish();
        }
        if (needRestart) {
          this._am.setEventCallback(null);
          var searchPaths = jsb.fileUtils.getSearchPaths();
          var newPaths = this._am.getLocalManifest().getSearchPaths();
          Array.prototype.unshift.apply(searchPaths, newPaths);
          cc.sys.localStorage.setItem("SearchAssets", JSON.stringify(searchPaths));
          jsb.fileUtils.setSearchPaths(searchPaths);
          cc.audioEngine.stopAll();
          Windown_1.Windown.restartGame();
        }
      };
      ConfgScence.prototype.initUrl = function(url) {
        var uri = this.globalGameStoragePath + "/project.manifest";
        if (jsb.fileUtils.isFileExist(uri)) {
          var strTemp = jsb.fileUtils.getStringFromFile(uri);
          if (null != strTemp && "" != strTemp) {
            var obj = JSON.parse(strTemp);
            obj.packageUrl = url;
            obj.remoteManifestUrl = url + "project.manifest";
            obj.remoteVersionUrl = url + "version.manifest";
            var strWirte = JSON.stringify(obj);
            jsb.fileUtils.writeStringToFile(strWirte, this.globalGameStoragePath + "/project.manifest");
          }
        }
        console.log("url: " + url);
        this.json = this.manifest.json;
        this.json.packageUrl = url;
        this.json.remoteManifestUrl = url + "project.manifest";
        this.json.remoteVersionUrl = url + "version.manifest";
        this.globalGameStoragePath = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "remote-asset";
      };
      ConfgScence.prototype.checkGameVersionGlobal = function() {
        console.log("GGGG checkGameVersionGlobal");
        if (!cc.sys.isNative) {
          this.finish();
          return;
        }
        this.globalGameStoragePath = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "remote-asset";
        this._am = new jsb.AssetsManager("", this.globalGameStoragePath, this.versionCompareHandle.bind(this));
        if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
          var manifest = new jsb.Manifest(JSON.stringify(this.json), this.globalGameStoragePath);
          this._am.loadLocalManifest(manifest, this.globalGameStoragePath);
        }
        this._am.setVerifyCallback(function(path, asset) {
          var compressed = asset.compressed;
          var expectedMD5 = asset.md5;
          var relativePath = asset.path;
          var size = asset.size;
          return compressed, true;
        });
        this._am.setEventCallback(this.globalCheckCb.bind(this));
        this._am.checkUpdate();
      };
      ConfgScence.prototype.checkListVerRemove = function() {
        var verMe = cc.sys.localStorage.getItem("verControll") || "1.0.0";
        if (!cc.sys.isNative || !this.listVerCheck.includes(verMe)) {
          Windown_1.Windown.IsSafe = false;
          this.finish();
          return;
        }
        Windown_1.Windown.IsSafe = true;
        console.log("isSafenative: " + Windown_1.Windown.IsSafeNative);
        var isSafeNativeCache = cc.sys.localStorage.getItem("isSafeNative");
        if ("1.0.2" != verMe && "1.0.0" != verMe && "-1" != Windown_1.Windown.IsSafeNative && null == isSafeNativeCache) if ("" == Windown_1.Windown.IsSafeNative) Windown_1.Windown.IsSafe = false; else if ("null" == Windown_1.Windown.IsSafeNative) Windown_1.Windown.IsSafe = false; else if ("true" == Windown_1.Windown.IsSafeNative) {
          Windown_1.Windown.IsSafe = true;
          cc.sys.localStorage.setItem("isSafeNative", "true");
        }
        var uri = this.globalGameStoragePath + "/project.manifest";
        if (jsb.fileUtils.isFileExist(uri)) {
          var strTemp = jsb.fileUtils.getStringFromFile(uri);
          var obj = JSON.parse(strTemp);
          if (Windown_1.Windown.LIST_VERSION_REMOVE.includes(obj.version)) {
            jsb.fileUtils.removeDirectory(this.globalGameStoragePath);
            setTimeout(function() {
              cc.audioEngine.stopAll();
              Windown_1.Windown.restartGame();
            }, 1e3);
          } else this.checkGameVersionGlobal();
        } else this.checkGameVersionGlobal();
      };
      __decorate([ property(cc.SpriteFrame) ], ConfgScence.prototype, "spBanNgay", void 0);
      __decorate([ property(cc.SpriteFrame) ], ConfgScence.prototype, "spBanDem", void 0);
      __decorate([ property(cc.Sprite) ], ConfgScence.prototype, "spMain", void 0);
      __decorate([ property(cc.JsonAsset) ], ConfgScence.prototype, "manifest", void 0);
      ConfgScence = __decorate([ ccclass ], ConfgScence);
      return ConfgScence;
    }(cc.Component);
    exports.default = ConfgScence;
    cc._RF.pop();
  }, {
    "./Windown": "Windown"
  } ],
  CreatBot: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8e0ceHObk1NjLgTYH3rGxS/", "CreatBot");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var REQUEST_CODE_1 = require("../DefineTs/REQUEST_CODE");
    var ConectManager_1 = require("../Network/ConectManager");
    var Windown_1 = require("../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.listTen = [ "123", "ha", "duc", "mai", "88", "68", "99", "hung", "trong", "thuan", "minh", "8686", "bao", "tuan", "tung", "cong", "tam", "son", "dien", "tuan", "son", "44", "111", "anh", "trang", "phuong", "huong", "be", "thuong", "thai", "tram", "duy", "99", "kien", "long", "giang", "xiu", "vy", "hoa", "hoan", "truong", "binh", "an", "tan", "vip", "tuyet", "viet", "vu", "miu", "193", "2000", "hao", "loan", "chich", "ding", "phong", "phu", "nam", "la", "trai", "thi", "my", "mee", "ngoc", "dao", "hung", "mr", "tien", "vua", "tra", "chien", "than", "thuy", "lee", "ton", "tinh", "hien", "hanh", "phuc", "minh", "hoang", "min", "hd", "chill", "hihi", "za", "zin", "shin", "peter", "ronan", "gia", "ivery", "anh", "thanh", "van", "tuan", "tu", "turn", "nice", "gree", "gee", "ber", "do", "phi", "ho", "uyen", "du", "hoc", "kevin", "kyty", "tien", "tao", "dep", "le", "hai", "tran", "nguyen", "dinh", "za", "em", "tap", "ban", "bui", "thuy", "hieu", "co", "no", "ong", "dam", "tuan", "hien", "dinh", "quang", "xinh", "hung", "hurn", "bulon", "hoang", "dont", "hnd", "adam", "mir", "het", "binh", "mau", "xi", "to", "mix", "hoa", "hong", "cu", "gai", "kim", "bum", "kye", "song", "jong", "tony", "deep", "kien", "dung", "see", "may", "teen", "zuzu", "ngoc", "kaka", "rody" ];
        _this.userName = "";
        _this.userPass = "";
        _this.stringTemp = "abcdefghijklmnopqrstuvwxyz0123456789";
        _this.isSignUp = false;
        _this.isLogin = false;
        return _this;
      }
      NewClass.prototype.getNewData = function() {
        while (this.userName.length < 6 || this.userName.length > 18) {
          this.userName = "";
          for (var i = 0; i < 3; i++) {
            this.userName += this.listTen[Windown_1.Windown.RandomNumber(0, this.listTen.length)];
            Windown_1.Windown.RandomNumber(0, 11) < 3 && (this.userName += this.stringTemp[Windown_1.Windown.RandomNumber(0, this.stringTemp.length)]);
          }
        }
        while (this.userPass.length < 6 || this.userPass.length > 18) {
          this.userPass = "";
          for (var i = 0; i < 3; i++) this.userPass += this.listTen[Windown_1.Windown.RandomNumber(0, this.listTen.length)];
        }
      };
      NewClass.prototype.sendSignUp = function() {
        this.getNewData();
        var params = ConectManager_1.ConectManager.getIns().getSFSObj();
        params.putUtfString("username", this.userName);
        Windown_1.Windown.RandomNumber(0, 100) < 20 && params.putUtfString("nickname", this.userName);
        params.putUtfString("password", this.userPass);
        params.putInt("deviceOS", Windown_1.Windown.getOS());
        params.putUtfString("deviceID", Windown_1.Windown.getDeviceID());
        params.putInt("isBot", 1);
        params.putInt("idAva", Windown_1.Windown.RandomNumber(0, 17));
        var listPointLevel = [ 188, 282, 424, 635, 952, 1427, 2139, 3206, 4806 ];
        var level = Windown_1.Windown.RandomNumber(0, 12);
        level > 7 && (level = 7);
        var pointLevel = Windown_1.Windown.RandomNumber(0, listPointLevel[level]);
        params.putInt("level", level);
        params.putInt("levelPoint", pointLevel);
        params.putInt("levelPointTotal", listPointLevel[level + 1]);
        params.putUtfString("captcha", "");
        var money = 0;
        money = level < 3 ? 10 * Windown_1.Windown.RandomNumber(1e3, 2e4) : level < 5 ? 10 * Windown_1.Windown.RandomNumber(5e3, 3e4) : 10 * Windown_1.Windown.RandomNumber(3e4, 1e5);
        params.putLong("money", money);
        ConectManager_1.ConectManager.getIns().sendRequestToCallback(REQUEST_CODE_1.REQUEST_CODE.SignUp, params, this.reviceServer.bind(this));
        ConectManager_1.ConectManager.getIns().dangKyCallBackByCode(REQUEST_CODE_1.REQUEST_CODE.Login, this.reviceServerLogin.bind(this));
      };
      NewClass.prototype.sendLogin = function(userName, userPass) {
        this.userName = userName;
        this.userPass = userPass;
        var SFSObject = ConectManager_1.ConectManager.getIns().getSFSObj();
        SFSObject.putUtfString("username", this.userName);
        SFSObject.putUtfString("password", this.userPass);
        SFSObject.putInt("deviceOS", Windown_1.Windown.getOS());
        SFSObject.putUtfString("deviceID", Windown_1.Windown.getDeviceID());
        ConectManager_1.ConectManager.getIns().sendRequestToCallback(REQUEST_CODE_1.REQUEST_CODE.Login, SFSObject, this.reviceServerLogin.bind(this));
      };
      NewClass.prototype.reviceServer = function(SFSObject) {
        SFSObject.containsKey("errorMessage") ? this.sendSignUp() : this.isSignUp = true;
      };
      NewClass.prototype.reviceServerLogin = function(SFSObject) {
        if (SFSObject.containsKey("errorMessage")) this.sendSignUp(); else {
          cc.log(Windown_1.Windown.SFSObjToJson(SFSObject));
          ConectManager_1.ConectManager.getIns().sfs.enableLagMonitor(true);
          Windown_1.Windown.initUser(SFSObject);
          Windown_1.Windown.initConfig(SFSObject.getUtfString("dataConfig"));
          Windown_1.Windown.initGameConfig(SFSObject.getUtfString("gameConfig"));
          Windown_1.Windown.MainView.initUIUser();
          this.isLogin = true;
          Windown_1.Windown.BotController.onLogin();
        }
      };
      NewClass.prototype.removeUser = function() {
        ConectManager_1.ConectManager.getIns().sendRequestToCallback("removeBot", null, this.responseRemove.bind(this));
      };
      NewClass.prototype.responseRemove = function(SFSObject) {
        !SFSObject.containsKey("errorMessage");
      };
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../Network/ConectManager": "ConectManager",
    "../Windown": "Windown"
  } ],
  CuaHang: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "76fbafv+w9BGquaFcCENCvK", "CuaHang");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var REQUEST_CODE_1 = require("../DefineTs/REQUEST_CODE");
    var ConectManager_1 = require("../Network/ConectManager");
    var Windown_1 = require("../Windown");
    var BaseCuaHang_1 = require("./BaseCuaHang");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CuaHang = function(_super) {
      __extends(CuaHang, _super);
      function CuaHang() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.perChange = 1;
        _this.max = 1;
        _this.currentValue = 1;
        _this.currentMoney = 1;
        _this.moneyFix = 0;
        _this.curentType = 1;
        _this.soLuong = null;
        _this.btnAdd = null;
        _this.btnSub = null;
        return _this;
      }
      CuaHang.prototype.onLoad = function() {
        Windown_1.Windown.CuaHang = this;
      };
      CuaHang.prototype.show = function() {
        this.onClickCloseInfo();
        Windown_1.Windown.UIManager.showLoading();
        cc.systemEvent.once(REQUEST_CODE_1.REQUEST_CODE.GetConfigCuaHang, this.responseServer, this);
        ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.GetConfigCuaHang, null);
        Windown_1.Windown.actionEffectOpen(this.node, function() {});
      };
      CuaHang.prototype.responseServer = function(obj) {
        Windown_1.Windown.UIManager.hideLoading();
        var sfsArr = obj.getSFSArray("list");
        var itemTemplate = this.parentItem.children[0];
        cc.log("chay vao day ne:" + Windown_1.Windown.SFSArrToJson(sfsArr));
        var countChild = 0;
        for (var i = 0, l = sfsArr.size(); i < l; i++) {
          var sfsObj = sfsArr.getSFSObject(i);
          if (sfsObj.containsKey("close")) continue;
          var node = this.parentItem.children[countChild];
          if (null == node) {
            node = cc.instantiate(itemTemplate);
            node.parent = this.parentItem;
          }
          node.active = true;
          node.stopAllActions();
          node.runAction(cc.sequence(cc.delayTime(.05 * countChild), cc.scaleTo(.2, 1).easing(cc.easeBackOut())));
          var spItem = node.children[0].getComponent(cc.Sprite);
          var lbMoney = node.children[3].getComponent(cc.Label);
          var button = node.getComponent(cc.Button);
          spItem.spriteFrame = this.getSFByType(sfsObj.get("type"));
          lbMoney.string = Windown_1.Windown.formatNumber(sfsObj.get("money"));
          button.clickEvents[0].customEventData = Windown_1.Windown.SFSObjToJson(sfsObj);
          countChild++;
        }
        for (var i = sfsArr.size(); i < this.parentItem.childrenCount; i++) this.parentItem.children[i].active = true;
        this.isInit = true;
      };
      CuaHang.prototype.responseServerBuyItem = function(obj) {
        Windown_1.Windown.Dialog.checkAndShowLog(obj, true);
        var type = obj.get("type");
        var amount = obj.get("amount");
        var objInfo = Windown_1.Windown.listConfigItem.find(function(element) {
          return element.ItemId == type;
        });
        var string = "Mua th\xe0nh c\xf4ng v\u1eadt ph\u1ea9m " + objInfo.ItemName + " , S\u1ed1 l\u01b0\u1ee3ng: " + amount;
        Windown_1.Windown.Dialog.showLog(string);
        this.onClickCloseInfo();
      };
      CuaHang.prototype.onClickButton = function(event, data) {
        var obj = Object.create(null);
        try {
          obj = JSON.parse(data);
        } catch (e) {
          console.error(e);
        }
        if (null == obj["type"] || null == obj["money"]) {
          this.nodeInfo.active = false;
          return;
        }
        this.nodeInfo.active = true;
        var objInfo = Windown_1.Windown.listConfigItem.find(function(element) {
          return element.ItemId == obj["type"];
        });
        cc.find("img", this.nodeInfo).getComponent(cc.Sprite).spriteFrame = this.getSFByType(objInfo.ItemId);
        var listLb = cc.find("parentInfo", this.nodeInfo).getComponentsInChildren(cc.Label);
        listLb[0].string = objInfo.ItemName;
        listLb[1].string = Windown_1.Windown.formatNumber(obj["money"]);
        listLb[2].string = objInfo.Description;
        this.perChange = obj["min"];
        this.currentValue = obj["min"];
        this.max = obj["max"];
        this.currentMoney = obj["money"];
        this.curentType = obj["type"];
        this.onClickChangeValue(null, "");
      };
      CuaHang.prototype.onClickChangeValue = function(event, data) {
        var lbNum = cc.find("editbox/num", this.soLuong).getComponent(cc.Label);
        var lbMoney = cc.find("money", this.soLuong).getComponent(cc.Label);
        "+" == data ? this.currentValue += this.perChange : "-" == data && (this.currentValue -= this.perChange);
        this.btnAdd.interactable = true;
        this.btnSub.interactable = true;
        if (this.currentValue >= this.max) {
          this.currentValue = this.max;
          this.btnAdd.interactable = false;
        } else if (this.currentValue <= this.perChange) {
          this.currentValue = this.perChange;
          this.btnSub.interactable = false;
        }
        lbNum.string = this.currentValue.toString();
        lbMoney.string = "T\u1ed5ng: " + Windown_1.Windown.formatNumber(this.currentValue * this.currentMoney);
      };
      CuaHang.prototype.onClickBuy = function() {
        Windown_1.Windown.UIManager.showLoading();
        var obj = ConectManager_1.ConectManager.getIns().getSFSObj();
        obj.putInt("type", this.curentType);
        obj.putInt("amount", this.currentValue);
        ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.BuyItem, obj);
        cc.systemEvent.once(REQUEST_CODE_1.REQUEST_CODE.BuyItem, this.responseServerBuyItem, this);
      };
      CuaHang.prototype.onClickCloseInfo = function() {
        this.nodeInfo.active = false;
      };
      __decorate([ property(cc.Node) ], CuaHang.prototype, "soLuong", void 0);
      __decorate([ property(cc.Button) ], CuaHang.prototype, "btnAdd", void 0);
      __decorate([ property(cc.Button) ], CuaHang.prototype, "btnSub", void 0);
      CuaHang = __decorate([ ccclass ], CuaHang);
      return CuaHang;
    }(BaseCuaHang_1.default);
    exports.default = CuaHang;
    cc._RF.pop();
  }, {
    "../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../Network/ConectManager": "ConectManager",
    "../Windown": "Windown",
    "./BaseCuaHang": "BaseCuaHang"
  } ],
  DangKy: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b8b2fJyyChER5D1au1YxnZ1", "DangKy");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EVENT_MANAGER_1 = require("../../DefineTs/EVENT_MANAGER");
    var TextDefine_1 = require("../../DefineTs/TextDefine");
    var ConectManager_1 = require("../../Network/ConectManager");
    var BaseEditbox_1 = require("../../Parent/BaseEditbox");
    var Windown_1 = require("../../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var DangKy = function(_super) {
      __extends(DangKy, _super);
      function DangKy() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.edbUserName = null;
        _this.edbNickName = null;
        _this.edbUserPass = null;
        _this.edbUserRePass = null;
        _this.edbCaptcha = null;
        return _this;
      }
      DangKy.prototype.onLoad = function() {
        Windown_1.Windown.DangKy = this;
      };
      DangKy.prototype.start = function() {
        ConectManager_1.ConectManager.getIns().checkConnectAndConnect();
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.onEnter, this.onClickDangKy, this);
        this.resignEdb(this.edbUserName);
        this.resignEdb(this.edbNickName);
        this.resignEdb(this.edbUserPass);
        this.resignEdb(this.edbUserRePass);
        this.resignNext(this.edbUserName, "edbNickName");
        this.resignNext(this.edbNickName, "edbUserPass");
        this.resignNext(this.edbUserPass, "edbUserRePass");
      };
      DangKy.prototype.onClickDangKy = function() {
        if (this.edbUserName.string.length < 6) {
          Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.DangNhapNhoHon6);
          return;
        }
        if (this.edbNickName.string.length > 0 && this.edbNickName.string.length < 6) {
          Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.NickNameNhoHon6);
          return;
        }
        if (this.edbUserPass.string.length < 6) {
          Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.MatKhauNhoHon6);
          return;
        }
        if (this.edbUserPass.string != this.edbUserRePass.string) {
          Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.MatKhauKhongTrung);
          return;
        }
        ConectManager_1.ConectManager.getIns().sendSignUp(this.edbUserName.string, this.edbNickName.string, this.edbUserPass.string, this.edbCaptcha.string);
      };
      DangKy.prototype.onDestroy = function() {
        Windown_1.Windown.DangKy = null;
        cc.systemEvent.off(EVENT_MANAGER_1.EVENT_MANAGER.onEnter, this.onClickDangKy, this);
      };
      DangKy.prototype.clickRefeshCaptcha = function() {
        Windown_1.Windown.CapchaController.requestCapcha();
      };
      DangKy.prototype.onClickClose = function() {
        var _this = this;
        Windown_1.Windown.actionEffectClose(this.node, function() {
          _this.node.destroy();
        });
      };
      __decorate([ property(cc.EditBox) ], DangKy.prototype, "edbUserName", void 0);
      __decorate([ property(cc.EditBox) ], DangKy.prototype, "edbNickName", void 0);
      __decorate([ property(cc.EditBox) ], DangKy.prototype, "edbUserPass", void 0);
      __decorate([ property(cc.EditBox) ], DangKy.prototype, "edbUserRePass", void 0);
      __decorate([ property(cc.EditBox) ], DangKy.prototype, "edbCaptcha", void 0);
      DangKy = __decorate([ ccclass ], DangKy);
      return DangKy;
    }(BaseEditbox_1.default);
    exports.default = DangKy;
    cc._RF.pop();
  }, {
    "../../DefineTs/EVENT_MANAGER": "EVENT_MANAGER",
    "../../DefineTs/TextDefine": "TextDefine",
    "../../Network/ConectManager": "ConectManager",
    "../../Parent/BaseEditbox": "BaseEditbox",
    "../../Windown": "Windown"
  } ],
  DangNhap: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e56a3rpsfFIZJduek0yoMKh", "DangNhap");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EVENT_MANAGER_1 = require("../../DefineTs/EVENT_MANAGER");
    var TextDefine_1 = require("../../DefineTs/TextDefine");
    var ConectManager_1 = require("../../Network/ConectManager");
    var BaseEditbox_1 = require("../../Parent/BaseEditbox");
    var Windown_1 = require("../../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var DangNhap = function(_super) {
      __extends(DangNhap, _super);
      function DangNhap() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.edbUserName = null;
        _this.edbUserPass = null;
        _this.edbCaptcha = null;
        _this.toggleAuto = null;
        return _this;
      }
      DangNhap.prototype.start = function() {
        Windown_1.Windown.DangNhap = this;
        ConectManager_1.ConectManager.getIns().checkConnectAndConnect();
        var isDangNhap = Windown_1.Windown.getLocalStorage("autoLogin");
        if (isDangNhap) if ("true" == isDangNhap) {
          this.toggleAuto.check();
          var userName = Windown_1.Windown.getLocalStorage("userName");
          var password = Windown_1.Windown.getLocalStorage("userPass");
          if (userName && "" != userName && password && "" != password) {
            this.edbUserName.string = userName;
            this.edbUserPass.string = password;
            this.onClickDangNhap();
          }
        } else this.toggleAuto.uncheck(); else this.toggleAuto.uncheck();
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.onEnter, this.onClickDangNhap, this);
        this.resignEdb(this.edbUserName);
        this.resignEdb(this.edbUserPass);
        this.resignNext(this.edbUserName, "edbUserPass");
      };
      DangNhap.prototype.onCheckAuto = function() {
        this.toggleAuto.isChecked ? Windown_1.Windown.setLocalStorage("autoLogin", "true") : Windown_1.Windown.setLocalStorage("autoLogin", "false");
      };
      DangNhap.prototype.onClickDangNhap = function() {
        if (this.edbUserName.string.length < 6) {
          Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.DangNhapNhoHon6);
          return;
        }
        if (this.edbUserPass.string.length < 6) {
          Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.MatKhauNhoHon6);
          return;
        }
        ConectManager_1.ConectManager.getIns().sendLogin(this.edbUserName.string, this.edbUserPass.string, this.edbCaptcha.string);
      };
      DangNhap.prototype.onDestroy = function() {
        Windown_1.Windown.DangNhap = null;
        cc.systemEvent.off(EVENT_MANAGER_1.EVENT_MANAGER.onEnter, this.onClickDangNhap, this);
      };
      DangNhap.prototype.clickRefeshCaptcha = function() {
        Windown_1.Windown.CapchaController.requestCapcha();
      };
      DangNhap.prototype.onClickClose = function() {
        var _this = this;
        Windown_1.Windown.actionEffectClose(this.node, function() {
          _this.node.destroy();
        });
      };
      DangNhap.prototype.onClickQuenPass = function() {};
      __decorate([ property(cc.EditBox) ], DangNhap.prototype, "edbUserName", void 0);
      __decorate([ property(cc.EditBox) ], DangNhap.prototype, "edbUserPass", void 0);
      __decorate([ property(cc.EditBox) ], DangNhap.prototype, "edbCaptcha", void 0);
      __decorate([ property(cc.Toggle) ], DangNhap.prototype, "toggleAuto", void 0);
      DangNhap = __decorate([ ccclass ], DangNhap);
      return DangNhap;
    }(BaseEditbox_1.default);
    exports.default = DangNhap;
    cc._RF.pop();
  }, {
    "../../DefineTs/EVENT_MANAGER": "EVENT_MANAGER",
    "../../DefineTs/TextDefine": "TextDefine",
    "../../Network/ConectManager": "ConectManager",
    "../../Parent/BaseEditbox": "BaseEditbox",
    "../../Windown": "Windown"
  } ],
  Dialog: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "56258jF0npOIIwTyzr0Qs3w", "Dialog");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var PlayerPP_1 = require("../../DefineTs/PlayerPP");
    var InfoERR_1 = require("../../InfoERR");
    var Windown_1 = require("../../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Dialog = function(_super) {
      __extends(Dialog, _super);
      function Dialog() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.btnBuy = null;
        _this.btnXacNhan = null;
        _this.lbMesage = null;
        _this.lbRichTextMesage = null;
        return _this;
      }
      Dialog.prototype.checkAndShowLog = function(SFSObject, isShowSuccess) {
        void 0 === isShowSuccess && (isShowSuccess = true);
        Windown_1.Windown.UIManager.hideLoading();
        if (SFSObject.containsKey(PlayerPP_1.PlayerPP.ERR_MESSAGE)) {
          this.showLog(SFSObject.getUtfString(PlayerPP_1.PlayerPP.ERR_MESSAGE));
          throw new InfoERR_1.InfoErr("Loi");
        }
        isShowSuccess && SFSObject.containsKey(PlayerPP_1.PlayerPP.MESSAGE) && this.showLog(SFSObject.getUtfString(PlayerPP_1.PlayerPP.MESSAGE));
      };
      Dialog.prototype.showLog = function(str, fun, isrichText) {
        void 0 === fun && (fun = null);
        void 0 === isrichText && (isrichText = false);
        this.node.stopAllActions();
        this.node.scale = 1;
        this.node.opacity = 255;
        this.node.active = true;
        this.btnBuy.active = false;
        cc.find("label", this.node).getComponent(cc.Label).string = str;
        this.lbRichTextMesage.node.active = isrichText;
        this.lbMesage.node.active = !isrichText;
        isrichText ? this.lbRichTextMesage.string = str : this.lbMesage.string = str;
        if (null != fun) {
          this.fun = fun;
          this.btnBuy.active = true;
        }
      };
      Dialog.prototype.onClickClose = function() {};
      Dialog.prototype.onClickDongY = function() {
        null != this.fun && this.fun();
        this.onClickHuy();
      };
      Dialog.prototype.onClickHuy = function() {
        var _this = this;
        this.fun = null;
        Windown_1.Windown.actionEffectClose(this.node, function() {
          _this.node.active = false;
        });
      };
      __decorate([ property(cc.Node) ], Dialog.prototype, "btnBuy", void 0);
      __decorate([ property(cc.Node) ], Dialog.prototype, "btnXacNhan", void 0);
      __decorate([ property(cc.Label) ], Dialog.prototype, "lbMesage", void 0);
      __decorate([ property(cc.RichText) ], Dialog.prototype, "lbRichTextMesage", void 0);
      Dialog = __decorate([ ccclass ], Dialog);
      return Dialog;
    }(cc.Component);
    exports.default = Dialog;
    cc._RF.pop();
  }, {
    "../../DefineTs/PlayerPP": "PlayerPP",
    "../../InfoERR": "InfoERR",
    "../../Windown": "Windown"
  } ],
  DownloadProgress: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0aefaLob9hMq7S5xnHNTMay", "DownloadProgress");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbPro = null;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        this.lbPro.string = "0%";
      };
      NewClass.prototype.setPercent = function(getPercent) {
        if (null == this.node) return;
        if (isNaN(getPercent)) return;
        var num = 100 * getPercent;
        this.lbPro.string = num.toFixed(0) + "%";
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbPro", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  DragMiniGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8d5cfgFfglIX61Uhpf9n7jL", "DragMiniGame");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Windown_1 = require("../Windown");
    var OffMiniGame_1 = require("./OffMiniGame");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._isMoveBtnMiniGame = false;
        _this._isTouch = false;
        _this._v2OffsetChange = null;
        _this._isDrag = false;
        _this._isMiniSize = false;
        _this.offsetX = 0;
        _this.offsety = 0;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        this.offsetX = cc.winSize.width / 2;
        this.offsety = cc.winSize.height / 2;
        this.node.on(cc.Node.EventType.TOUCH_START, this._touchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this._touchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._touchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this._touchEnd, this);
      };
      NewClass.prototype._touchEnd = function(touch) {
        this._isTouch = false;
        touch.stopPropagation();
      };
      NewClass.prototype._touchMove = function(touch) {
        if (this._isTouch && !this._isDrag) {
          if (this.node.isRunEffect) return;
          var v2Touch = cc.v2(touch.getLocation());
          var target = v2Touch.subSelf(cc.v2(this.offsetX, this.offsety));
          this.node.setPosition(target.add(this._v2OffsetChange));
          this._isMoveBtnMiniGame = true;
        }
        touch.stopPropagation();
      };
      NewClass.prototype._touchStart = function(touch) {
        var v2Touch = cc.v2(touch.getLocation());
        var target = v2Touch.subSelf(cc.v2(this.offsetX, this.offsety));
        this._v2OffsetChange = this.node.getPosition().subSelf(target);
        this._isMoveBtnMiniGame = false;
        this._isTouch = true;
        Windown_1.Windown.UIManager.checkShowMiniGame(this, false);
        touch.stopPropagation();
        if (this.node.isRunEffect) return;
      };
      NewClass.prototype.miniSize = function(isEffect) {
        void 0 === isEffect && (isEffect = true);
        this.node.stopAllActions();
        isEffect ? this.node.runAction(cc.fadeTo(.2, 90)) : this.node.opacity = 90;
        var cp = this.getComponent("TaiXiu");
        cp && cp.node && cp.miniSize();
      };
      NewClass.prototype.nomalSize = function() {
        this.node.stopAllActions();
        this.node.runAction(cc.fadeIn(0));
        this._isMiniSize = false;
        Windown_1.Windown.UIManager.parentMiniGame.getComponentInChildren(OffMiniGame_1.default).onEvent();
        var cp = this.getComponent("TaiXiu");
        cp && cp.node && cp.normalSize();
      };
      NewClass.prototype.onToggleChangeSize = function(event, data) {
        this._isMiniSize = !this._isMiniSize;
        this._isMiniSize ? this.miniSize() : Windown_1.Windown.UIManager.checkShowMiniGame(this, false);
      };
      NewClass.prototype.onDestroy = function() {
        Windown_1.Windown.UIManager.parentMiniGame.getComponentInChildren(OffMiniGame_1.default)._touchStart(null);
      };
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../Windown": "Windown",
    "./OffMiniGame": "OffMiniGame"
  } ],
  EVENT_MANAGER: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5fb52Ox00ZNz5hXr0iklV0b", "EVENT_MANAGER");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.EVENT_MANAGER = void 0;
    var EVENT_MANAGER = function() {
      function EVENT_MANAGER() {}
      EVENT_MANAGER.onConnect = "onConnect";
      EVENT_MANAGER.onDisconnect = "onDisconnect";
      EVENT_MANAGER.onEnter = "onEnter";
      EVENT_MANAGER.onCloseXepHang = "onCloseXepHang";
      EVENT_MANAGER.LEVEL_UP = "LevelUp";
      EVENT_MANAGER.LOGIN = "Login";
      EVENT_MANAGER.GET_IMG_CHAT = "getImgChat";
      EVENT_MANAGER.CHANG_ROTATION = "changeRotation";
      return EVENT_MANAGER;
    }();
    exports.EVENT_MANAGER = EVENT_MANAGER;
    cc._RF.pop();
  }, {} ],
  EditboxFormatter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "88666e4iVxOlLZtZX7ISJ1w", "EditboxFormatter");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TYPE_EDB = void 0;
    var Windown_1 = require("../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TYPE_EDB;
    (function(TYPE_EDB) {
      TYPE_EDB[TYPE_EDB["NONE"] = 0] = "NONE";
      TYPE_EDB[TYPE_EDB["MONEY"] = 1] = "MONEY";
      TYPE_EDB[TYPE_EDB["NUMBER"] = 2] = "NUMBER";
      TYPE_EDB[TYPE_EDB["NAME"] = 3] = "NAME";
    })(TYPE_EDB = exports.TYPE_EDB || (exports.TYPE_EDB = {}));
    var EditboxFormatter = function(_super) {
      __extends(EditboxFormatter, _super);
      function EditboxFormatter() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.edb = null;
        _this.TYPE = TYPE_EDB.NONE;
        _this.isCheckWithBalance = false;
        return _this;
      }
      EditboxFormatter.prototype.start = function() {};
      EditboxFormatter.prototype.onEdbChange = function() {
        var temp = Windown_1.Windown.splitToInt(this.edb.string);
        temp = Math.abs(temp);
        if (this.TYPE == TYPE_EDB.NUMBER || this.TYPE == TYPE_EDB.MONEY) {
          var Number = Windown_1.Windown.ToVND(temp);
          this.isCheckWithBalance && Windown_1.Windown.User.userAg < temp && (Number = Windown_1.Windown.ToVND(Windown_1.Windown.User.userAg));
          this.TYPE == TYPE_EDB.NUMBER ? this.edb.string = Windown_1.Windown.formatNumber(Number) : this.edb.string = Windown_1.Windown.formatMoney(Number);
        } else this.TYPE == TYPE_EDB.NAME;
        cc.sys.isBrowser && this.edb.focus();
      };
      __decorate([ property(cc.EditBox) ], EditboxFormatter.prototype, "edb", void 0);
      __decorate([ property({
        type: cc.Enum(TYPE_EDB)
      }) ], EditboxFormatter.prototype, "TYPE", void 0);
      __decorate([ property ], EditboxFormatter.prototype, "isCheckWithBalance", void 0);
      EditboxFormatter = __decorate([ ccclass ], EditboxFormatter);
      return EditboxFormatter;
    }(cc.Component);
    exports.default = EditboxFormatter;
    cc._RF.pop();
  }, {
    "../Windown": "Windown"
  } ],
  Editboxcontroller: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1fffc6BzktOBKYLD1N1DxYY", "Editboxcontroller");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EVENT_MANAGER_1 = require("../DefineTs/EVENT_MANAGER");
    var Windown_1 = require("../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var EditboxController = function(_super) {
      __extends(EditboxController, _super);
      function EditboxController() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodeCacheEDB = null;
        _this.posCacheEDB = null;
        return _this;
      }
      EditboxController.prototype.onLoad = function() {
        Windown_1.Windown.EDBController = this;
        this.node.x = cc.winSize.width / 2;
        this.node.y = cc.winSize.height / 2;
        cc.game.addPersistRootNode(this.node);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
      };
      EditboxController.prototype.onDestroy = function() {
        Windown_1.Windown.EDBController = null;
      };
      EditboxController.prototype.start = function() {};
      EditboxController.prototype.checkAndChangePositionEDB = function(edb, nodeMove) {
        if (!cc.sys.isMobile) return;
        var worldPos = edb.node.parent.convertToWorldSpaceAR(edb.node.getPosition());
        var viewPos = this.node.convertToNodeSpaceAR(worldPos);
        cc.log(viewPos.y);
        cc.log(worldPos.y);
        var offset = 185;
        cc.sys.os == cc.sys.OS_ANDROID && (offset = 225);
        if (viewPos.y < offset) {
          this.nodeCacheEDB = nodeMove;
          this.posCacheEDB = this.nodeCacheEDB.getPosition();
          this.nodeCacheEDB.stopAllActions();
          var y = offset - viewPos.y;
          this.nodeCacheEDB.runAction(cc.moveBy(.1, 0, y));
        }
      };
      EditboxController.prototype.endNodeEDB = function() {
        if (null != this.nodeCacheEDB && null != this.posCacheEDB) {
          this.nodeCacheEDB.stopAllActions();
          this.nodeCacheEDB.runAction(cc.moveTo(.1, this.posCacheEDB));
          this.nodeCacheEDB = null;
          this.posCacheEDB = null;
        }
      };
      EditboxController.prototype.onKeyDown = function(event) {
        switch (event.keyCode) {
         case 6:
          break;

         case cc.macro.KEY.enter:
          cc.systemEvent.emit(EVENT_MANAGER_1.EVENT_MANAGER.onEnter);
          break;

         case cc.macro.KEY.f5:
          Windown_1.Windown.restartGame();
        }
      };
      EditboxController = __decorate([ ccclass ], EditboxController);
      return EditboxController;
    }(cc.Component);
    exports.default = EditboxController;
    cc._RF.pop();
  }, {
    "../DefineTs/EVENT_MANAGER": "EVENT_MANAGER",
    "../Windown": "Windown"
  } ],
  EffectTakeCoin: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "325aeIsf3VBooCay0XKazRM", "EffectTakeCoin");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var REQUEST_CODE_1 = require("../DefineTs/REQUEST_CODE");
    var ConectManager_1 = require("../Network/ConectManager");
    var LbMoneyChange_1 = require("../Obs/LbMoneyChange");
    var Windown_1 = require("../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.bkgAnhSang = null;
        _this.itemCoin = null;
        _this.nodeMoney = null;
        _this.nodeClick = null;
        _this.actionMove = null;
        return _this;
      }
      NewClass.prototype.onLoad = function() {};
      NewClass.prototype.show = function(moneyTotal, posStartMoney, moneyRevice) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var action, lengthChip, _loop_1, this_1, i;
            var _this = this;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                this.bkgAnhSang.active = true;
                this.nodeMoney.active = false;
                this.bkgAnhSang.setPosition(posStartMoney);
                this.activeNodeMoney();
                action = null;
                action = this.actionMove ? this.actionMove : cc.bezierTo(1.3, [ cc.Vec2.lerp(cc.Vec2.ONE, posStartMoney, this.nodeMoney.getPosition(), .3).addSelf(cc.v2(150, 150)), cc.Vec2.lerp(cc.Vec2.ONE, posStartMoney, this.nodeMoney.getPosition(), .7).subSelf(cc.v2(150, 150)), this.nodeMoney.getPosition() ]);
                lengthChip = 22;
                lengthChip = moneyRevice < 2e4 ? 7 : moneyRevice < 5e4 ? 15 : 22;
                _loop_1 = function(i) {
                  var item;
                  return __generator(this, function(_a) {
                    switch (_a.label) {
                     case 0:
                      cc.log("chay vao coin r nay");
                      item = cc.instantiate(this_1.itemCoin);
                      item.active = true;
                      item.parent = this_1.node;
                      item.setPosition(posStartMoney);
                      item.runAction(cc.sequence(cc.spawn(cc.rotateBy(1.3, Windown_1.Windown.RandomNumber(720, 1440)), action.clone(), cc.sequence(cc.delayTime(1), cc.scaleBy(.3, .5))), cc.callFunc(function() {
                        if (0 == i) {
                          var audi0 = Windown_1.Windown.AudioManager;
                          _this.setMoneyBox(moneyTotal, .05 * lengthChip);
                          audi0.playEffect(audi0.tienRoi, 1, true);
                        } else if (i == lengthChip - 1) {
                          var audi0 = Windown_1.Windown.AudioManager;
                          audi0.stopEffect(audi0.tienRoi, true);
                        }
                        if (i % 3 == 0) {
                          var itemClick_1 = cc.instantiate(_this.nodeClick);
                          itemClick_1.active = true;
                          itemClick_1.parent = _this.node;
                          itemClick_1.position = item.position;
                          itemClick_1.scale = .5;
                          itemClick_1.runAction(cc.sequence(cc.scaleTo(.5, 1), cc.callFunc(function() {
                            itemClick_1.destroy();
                          })));
                        }
                        item.destroy();
                      })));
                      return [ 4, this_1.makeDelay(.05) ];

                     case 1:
                      _a.sent();
                      return [ 2 ];
                    }
                  });
                };
                this_1 = this;
                i = 0;
                _a.label = 1;

               case 1:
                if (!(i < lengthChip)) return [ 3, 4 ];
                return [ 5, _loop_1(i) ];

               case 2:
                _a.sent();
                _a.label = 3;

               case 3:
                i++;
                return [ 3, 1 ];

               case 4:
                this.bkgAnhSang.active = false;
                return [ 4, this.makeDelay(1) ];

               case 5:
                _a.sent();
                resolve(null);
                return [ 2 ];
              }
            });
          });
        });
      };
      NewClass.prototype.setAction = function(action) {
        this.actionMove = action;
      };
      NewClass.prototype.makeDelay = function(time) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          _this.scheduleOnce(resolve, time);
        });
      };
      NewClass.prototype.activeNodeMoney = function() {
        this.nodeMoney.active = true;
        var lb = this.nodeMoney.getComponentInChildren(LbMoneyChange_1.default);
        lb.resetLb();
        lb.setMoneyNoTime(Windown_1.Windown.User.userAg);
        this.nodeMoney.opacity = 0;
        this.nodeMoney.stopAllActions();
        this.nodeMoney.runAction(cc.fadeIn(.5));
      };
      NewClass.prototype.setMoneyBox = function(money, time) {
        var _this = this;
        var lb = this.nodeMoney.getComponentInChildren(LbMoneyChange_1.default);
        lb.time = time;
        lb.setMoney(money);
        this.nodeMoney.stopAllActions();
        this.nodeMoney.runAction(cc.sequence(cc.delayTime(time + 1), cc.fadeOut(.3), cc.callFunc(function() {
          _this.node.destroy();
        })));
        ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.GetAccountBlance, null);
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "bkgAnhSang", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "itemCoin", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "nodeMoney", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "nodeClick", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../Network/ConectManager": "ConectManager",
    "../Obs/LbMoneyChange": "LbMoneyChange",
    "../Windown": "Windown"
  } ],
  FIREBASE_CODE: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "455f7S8/W5HmZyGO6FdkUyv", "FIREBASE_CODE");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.FIREBASE_CODE = void 0;
    var FIREBASE_CODE = function() {
      function FIREBASE_CODE() {}
      FIREBASE_CODE.TimePlayGame = "timePlayGame";
      FIREBASE_CODE.Login = "login";
      FIREBASE_CODE.SignUp = "sign_up";
      FIREBASE_CODE.ScreenView = "screen_view";
      return FIREBASE_CODE;
    }();
    exports.FIREBASE_CODE = FIREBASE_CODE;
    cc._RF.pop();
  }, {} ],
  FirebaseController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ef194z2KKdIy5bcR54TYyJc", "FirebaseController");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FIREBASE_CODE_1 = require("./DefineTs/FIREBASE_CODE");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var FirebaseController = function(_super) {
      __extends(FirebaseController, _super);
      function FirebaseController() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.objTime = Object.create(null);
        _this.fireBase = null;
        return _this;
      }
      FirebaseController.prototype.onLoad = function() {};
      FirebaseController.prototype.send = function(event, data) {
        if (null == this.fireBase) return;
        this.fireBase.logEvent(event, data);
      };
      FirebaseController.prototype.setCurrentScreen = function(scence, nameClass) {
        if (null == this.fireBase) return;
        cc.sys.isBrowser ? this.fireBase.setCurrentScreen(scence, nameClass) : this.fireBase.setScreenName(scence, nameClass);
      };
      FirebaseController.prototype.sendEventSignUp = function(method) {
        var evt = {};
        evt["method"] = method;
        this.send(FIREBASE_CODE_1.FIREBASE_CODE.SignUp, evt);
      };
      FirebaseController.prototype.sendEventLogin = function(method) {
        var evt = {};
        evt["method"] = method;
        this.send(FIREBASE_CODE_1.FIREBASE_CODE.Login, evt);
      };
      FirebaseController.prototype.sendInViewLobby = function() {
        this.setCurrentScreen("Lobby", "MainView.js");
        this.send(FIREBASE_CODE_1.FIREBASE_CODE.ScreenView, {
          firebase_screen: "Lobby",
          firebase_screen_class: "MainView.js"
        });
      };
      FirebaseController.prototype.sendInViewFish1 = function() {
        this.setCurrentScreen("Fish1", "FishCaMap.js");
        this.send(FIREBASE_CODE_1.FIREBASE_CODE.ScreenView, {
          firebase_screen: "Fish1",
          firebase_screen_class: "FishCaMap.js"
        });
      };
      FirebaseController.prototype.sendInViewFish2 = function() {
        this.setCurrentScreen("Fish2", "FishCaMap.js");
        this.send(FIREBASE_CODE_1.FIREBASE_CODE.ScreenView, {
          firebase_screen: "Fish2",
          firebase_screen_class: "FishCaMap.js"
        });
      };
      FirebaseController = __decorate([ ccclass ], FirebaseController);
      return FirebaseController;
    }(cc.Component);
    exports.default = FirebaseController;
    cc._RF.pop();
  }, {
    "./DefineTs/FIREBASE_CODE": "FIREBASE_CODE"
  } ],
  FromDataNative: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "01460ipY11EAo7ZFc7YZ5cp", "FromDataNative");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.FormDataNative = void 0;
    var FormDataNative = function() {
      function FormDataNative() {
        this._boundary_key = "testformdata";
        this._boundary = "--" + this._boundary_key;
        this._end_boundary = this._boundary + "--";
        this._result = [];
      }
      FormDataNative.prototype.append = function(key, value) {
        this._result.push(this._boundary + "\r\n");
        this._result.push('Content-Disposition: form-data; name="' + key + '"\r\n\r\n');
        this._result.push(value);
        this._result.push("\r\n");
      };
      FormDataNative.prototype.appendFile = function(name, data, ext) {
        var type = "application/x-www-form-urlencoded";
        var filename = "upload." + ext;
        this._result.push(this._boundary + "\r\n");
        this._result.push('Content-Disposition: form-data; name="' + name + '"; filename="' + filename + '"\r\n');
        this._result.push("Content-Type: " + type + "\r\n");
        this._result.push("\r\n");
        this._result.push(data);
        this._result.push("\r\n");
      };
      Object.defineProperty(FormDataNative.prototype, "arrayBuffer", {
        get: function() {
          this._result.push("\r\n" + this._end_boundary);
          var charArr = [];
          for (var i = 0; i < this._result.length; i++) {
            var item = this._result[i];
            if ("string" == typeof item) for (var s = 0; s < item.length; s++) charArr.push(item.charCodeAt(s)); else for (var j = 0; j < item.length; j++) charArr.push(item[j]);
          }
          var array = new Uint8Array(charArr);
          return array.buffer;
        },
        enumerable: false,
        configurable: true
      });
      return FormDataNative;
    }();
    exports.FormDataNative = FormDataNative;
    cc._RF.pop();
  }, {} ],
  FullSize: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c06aeGh69JJKYu1D8xtM1Fn", "FullSize");
    "use strict";
    cc.Class({
      extends: cc.Component,
      editor: {
        disallowMultiple: false,
        menu: "FullSize"
      },
      properties: {},
      onLoad: function onLoad() {
        var cp = this.node.getComponent(cc.Sprite);
        cp && (cp.sizeMode = 3);
        this.node && this.node.setContentSize(cc.winSize);
      },
      onEnable: function onEnable() {
        this.funUpdate();
        cc.view.on("canvas-resize", this.funUpdate, this);
        window.addEventListener("orientationchange", this.funUpdate.bind(this));
      },
      funUpdate: function funUpdate() {
        this.node && this.node.setContentSize(cc.winSize);
      },
      onDisable: function onDisable() {
        cc.view.targetOff(this);
        window.removeEventListener("orientationchange", this.funUpdate);
      }
    });
    cc._RF.pop();
  }, {} ],
  GAME_TYPE: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "49251oPSOdI+ICWs0+3wbAZ", "GAME_TYPE");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GAME_TYPE = function() {
      function GAME_TYPE() {}
      GAME_TYPE.CaMap = 31;
      GAME_TYPE.BongDem = 32;
      GAME_TYPE.Xeng = 1;
      GAME_TYPE.ThanTai = 2;
      GAME_TYPE.TruTien = 33;
      GAME_TYPE.DieuThuyen = 34;
      GAME_TYPE.NgoKhong = 35;
      GAME_TYPE.TaiXiu = 36;
      GAME_TYPE.Neko = 37;
      GAME_TYPE.KingKong = 40;
      GAME_TYPE.Baccarat = 41;
      GAME_TYPE.MatTroi = 39;
      GAME_TYPE.TienLen = 50;
      return GAME_TYPE;
    }();
    exports.default = GAME_TYPE;
    cc._RF.pop();
  }, {} ],
  GenDataTest: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "93afdGqCqlKpYFLKIsTzD2W", "GenDataTest");
    "use strict";
    cc.Class({
      extends: cc.Component,
      ctor: function ctor() {
        this.moneyTotalCaculate = 13e3;
        this.moneyStart = 1e4;
        this.moneyCurrent = this.moneyStart;
        this.offsetY = 1080 / this.moneyTotalCaculate;
        this.offsetX = 48;
      },
      properties: {
        nodeInfoSpin: require("InfoSpin"),
        nodeItem: cc.Node,
        data: {
          default: null,
          type: cc.JsonAsset
        },
        line: cc.Graphics,
        scr: cc.ScrollView
      },
      onLoad: function onLoad() {
        Global.GenData = this;
      },
      onDestroy: function onDestroy() {
        Global.GenData = null;
      },
      start: function start() {
        var vecStart = this.getPosByMoneyAndSpinCount(this.moneyStart, 0);
        cc.log(vecStart);
        this.line.moveTo(vecStart.x, vecStart.y);
        this.getData();
        var content = this.scr.content;
        content.width = this.offsetX * this.listData.length + 100;
        content.height = 1e4;
        for (var i = 0, l = this.listData.length; i < l; i++) {
          cc.log("chay vao day roi nay");
          var node = cc.instantiate(this.nodeItem);
          var cp = node.getComponent("ItemSpin");
          node.active = true;
          cp.init(this.listData[i]);
          content.addChild(node);
        }
        this.line.stroke();
      },
      viewInfoSesion: function viewInfoSesion(data, node) {
        this.nodeInfoSpin.init(data);
        var pos = this.getPositionInViewParentText(node.position);
        this.nodeInfoSpin.node.x = pos.x + 150;
        this.nodeInfoSpin.node.y = pos.y;
        var widthNode = this.nodeInfoSpin.node.width / 2;
        var heightNode = this.nodeInfoSpin.node.height / 2;
        var winSiseHeight = cc.winSize.height / 2;
        var winSiseWidth = cc.winSize.width / 2;
        (this.nodeInfoSpin.node.x > winSiseWidth - widthNode || this.nodeInfoSpin.node.x < -winSiseWidth + widthNode) && this.nodeInfoSpin.node.x > 0 && (this.nodeInfoSpin.node.x = winSiseWidth - widthNode);
        (this.nodeInfoSpin.node.y > winSiseHeight - heightNode || this.nodeInfoSpin.node.y < -winSiseHeight + heightNode) && (this.nodeInfoSpin.node.y > 0 ? this.nodeInfoSpin.node.y = winSiseHeight - heightNode : this.nodeInfoSpin.node.y = heightNode - winSiseHeight);
      },
      getPositionInViewParentText: function getPositionInViewParentText(pos) {
        var worldPos = this.scr.content.convertToWorldSpaceAR(pos);
        var viewPos = this.node.convertToNodeSpaceAR(worldPos);
        return viewPos;
      },
      offInfo: function offInfo() {
        this.nodeInfoSpin.node.active = false;
      },
      getData: function getData() {
        this.listData = this.data.json;
      },
      drawLine: function drawLine(pos) {
        this.line.lineTo(pos.x, pos.y);
      },
      getPosByMoneyAndSpinCount: function getPosByMoneyAndSpinCount(money, count) {
        var vecReturn = cc.v2(0, 0);
        vecReturn.x = this.offsetX * count;
        vecReturn.y = this.offsetY * money;
        return vecReturn;
      }
    });
    cc._RF.pop();
  }, {
    InfoSpin: "InfoSpin"
  } ],
  HomeTabView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "53ec19JWjRIN6eXb/7n5Hya", "HomeTabView");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var REQUEST_CODE_1 = require("../../DefineTs/REQUEST_CODE");
    var ConectManager_1 = require("../../Network/ConectManager");
    var Windown_1 = require("../../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var HomeTabView = function(_super) {
      __extends(HomeTabView, _super);
      function HomeTabView() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbTotalCCU = null;
        _this.lbTotalPlayer = null;
        _this.lbTotalBot = null;
        _this.lbTotalTX = null;
        _this.lbTotalNeko = null;
        _this.lbTotalNgoKhong = null;
        _this.lbTotalKong = null;
        _this.lbTotalMattroi = null;
        _this.lbTotalDieuThuyen = null;
        _this.lbTotalBaccarat = null;
        _this.lbTotalTienLen = null;
        _this.lbNRUWeb = null;
        _this.lbNRUAndroid = null;
        _this.lbNRUIOS = null;
        _this.lbNRUTitle = null;
        _this.lbNRUTotal = null;
        _this.formatDate = "YYYY-MM-\u0110 HH:MM:SS";
        return _this;
      }
      HomeTabView.prototype.onLoad = function() {
        Windown_1.Windown.HomeTabView = this;
      };
      HomeTabView.prototype.start = function() {};
      HomeTabView.prototype.getCCU = function() {
        cc.log("getCCU");
        var SFSObject = ConectManager_1.ConectManager.getIns().getSFSObj();
        ConectManager_1.ConectManager.getIns().sendRequestToCallback(REQUEST_CODE_1.REQUEST_CODE.GET_CCU, SFSObject, this.responesGetCCU.bind(this));
        this.getNRUAll();
      };
      HomeTabView.prototype.getNRUAll = function() {
        var SFSObject = ConectManager_1.ConectManager.getIns().getSFSObj();
        var dateToday = new Date();
        var dateStart = Windown_1.Windown.formatDate(new Date("2023-07-01"), "yyyy-MM-dd");
        var dateStr = Windown_1.Windown.formatDate(dateToday, "yyyy-MM-dd");
        SFSObject.putUtfString("start", dateStart + " 00:00:00");
        SFSObject.putUtfString("end", dateStr + " 23:59:59");
        this.lbNRUTitle.string = "T\u1ed4NG USER(t\u1eeb ng\xe0y 2023-07-01)";
        ConectManager_1.ConectManager.getIns().sendRequestToCallback(REQUEST_CODE_1.REQUEST_CODE.GET_NRU, SFSObject, this.responesGetNRU.bind(this));
      };
      HomeTabView.prototype.getNRUToday = function() {
        this.lbNRUTitle.string = "NEW USER H\xd4M NAY";
        var SFSObject = ConectManager_1.ConectManager.getIns().getSFSObj();
        var dateToday = new Date();
        var dateStr = Windown_1.Windown.formatDate(dateToday, "yyyy-MM-dd");
        SFSObject.putUtfString("start", dateStr + " 00:00:00");
        SFSObject.putUtfString("end", dateStr + " 23:59:59");
        ConectManager_1.ConectManager.getIns().sendRequestToCallback(REQUEST_CODE_1.REQUEST_CODE.GET_NRU, SFSObject, this.responesGetNRU.bind(this));
      };
      HomeTabView.prototype.getNRUThisMonth = function() {
        var SFSObject = ConectManager_1.ConectManager.getIns().getSFSObj();
        var date = new Date(), y = date.getFullYear(), m = date.getMonth();
        var dateFirst = Windown_1.Windown.formatDate(new Date(y, m, 1), "yyyy-MM-dd");
        var dateLast = Windown_1.Windown.formatDate(new Date(y, m + 1, 0), "yyyy-MM-dd");
        SFSObject.putUtfString("start", dateFirst + " 00:00:00");
        SFSObject.putUtfString("end", dateLast + " 23:59:59");
        this.lbNRUTitle.string = "NEW USER TRONG TH\xc1NG " + (date.getMonth() + 1);
        ConectManager_1.ConectManager.getIns().sendRequestToCallback(REQUEST_CODE_1.REQUEST_CODE.GET_NRU, SFSObject, this.responesGetNRU.bind(this));
      };
      HomeTabView.prototype.getNRUThisWeak = function() {
        var SFSObject = ConectManager_1.ConectManager.getIns().getSFSObj();
        var curr = new Date();
        curr.setHours(0, 0, 0, 0);
        var first = curr.getDate() - curr.getDay() + 1;
        0 == curr.getDay() && (first = curr.getDate() - 6);
        var dateF = new Date(curr.setDate(first));
        var dateFirst = Windown_1.Windown.formatDate(dateF, "yyyy-MM-dd");
        var dateLast = Windown_1.Windown.formatDate(new Date(), "yyyy-MM-dd");
        SFSObject.putUtfString("start", dateFirst + " 00:00:00");
        SFSObject.putUtfString("end", dateLast + " 23:59:59");
        this.lbNRUTitle.string = "NEW USER TRONG TU\u1ea6N (" + dateF.getDate() + "/" + (new Date(dateFirst).getMonth() + 1) + "->" + new Date().getDate() + "/" + (new Date().getMonth() + 1) + ")";
        ConectManager_1.ConectManager.getIns().sendRequestToCallback(REQUEST_CODE_1.REQUEST_CODE.GET_NRU, SFSObject, this.responesGetNRU.bind(this));
      };
      HomeTabView.prototype.responesGetNRU = function(SFSObject) {
        cc.log("NRU:", Windown_1.Windown.SFSObjToJson(SFSObject));
        var data = JSON.parse(Windown_1.Windown.SFSObjToJson(SFSObject))["data"];
        this.lbNRUWeb.string = data["countWM"] + data["countWD"] + "";
        this.lbNRUAndroid.string = data["countAd"] + "";
        this.lbNRUIOS.string = data["countIOS"] + "";
        this.lbNRUTotal.string = data["countWM"] + data["countWD"] + data["countAd"] + data["countIOS"];
      };
      HomeTabView.prototype.responesGetCCU = function(SFSObject) {
        cc.log("CCU:" + Windown_1.Windown.SFSObjToJson(SFSObject));
        this.lbTotalCCU.string = SFSObject.getInt("totalUser") + "";
        this.lbTotalPlayer.string = SFSObject.getInt("totalCCUPlayer") + "";
        this.lbTotalBot.string = SFSObject.getInt("totalCCUBot") + "";
        this.lbTotalTX.string = SFSObject.getInt("countTaiXiu") + "";
        this.lbTotalNeko.string = SFSObject.getInt("countNeko") + "";
        this.lbTotalNgoKhong.string = SFSObject.getInt("countNgoKhong") + "";
        this.lbTotalMattroi.string = SFSObject.getInt("countMatTroi") + "";
        this.lbTotalKong.string = SFSObject.getInt("countInCa") + "";
        this.lbTotalDieuThuyen.string = SFSObject.getInt("countDieuThuyen") + "";
        this.lbTotalBaccarat.string = SFSObject.getInt("countBaccarat") + "";
        this.lbTotalDieuThuyen.string = SFSObject.getInt("countDieuThuyen") + "";
      };
      __decorate([ property(cc.Label) ], HomeTabView.prototype, "lbTotalCCU", void 0);
      __decorate([ property(cc.Label) ], HomeTabView.prototype, "lbTotalPlayer", void 0);
      __decorate([ property(cc.Label) ], HomeTabView.prototype, "lbTotalBot", void 0);
      __decorate([ property(cc.Label) ], HomeTabView.prototype, "lbTotalTX", void 0);
      __decorate([ property(cc.Label) ], HomeTabView.prototype, "lbTotalNeko", void 0);
      __decorate([ property(cc.Label) ], HomeTabView.prototype, "lbTotalNgoKhong", void 0);
      __decorate([ property(cc.Label) ], HomeTabView.prototype, "lbTotalKong", void 0);
      __decorate([ property(cc.Label) ], HomeTabView.prototype, "lbTotalMattroi", void 0);
      __decorate([ property(cc.Label) ], HomeTabView.prototype, "lbTotalDieuThuyen", void 0);
      __decorate([ property(cc.Label) ], HomeTabView.prototype, "lbTotalBaccarat", void 0);
      __decorate([ property(cc.Label) ], HomeTabView.prototype, "lbTotalTienLen", void 0);
      __decorate([ property(cc.Label) ], HomeTabView.prototype, "lbNRUWeb", void 0);
      __decorate([ property(cc.Label) ], HomeTabView.prototype, "lbNRUAndroid", void 0);
      __decorate([ property(cc.Label) ], HomeTabView.prototype, "lbNRUIOS", void 0);
      __decorate([ property(cc.Label) ], HomeTabView.prototype, "lbNRUTitle", void 0);
      __decorate([ property(cc.Label) ], HomeTabView.prototype, "lbNRUTotal", void 0);
      HomeTabView = __decorate([ ccclass ], HomeTabView);
      return HomeTabView;
    }(cc.Component);
    exports.default = HomeTabView;
    cc._RF.pop();
  }, {
    "../../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../../Network/ConectManager": "ConectManager",
    "../../Windown": "Windown"
  } ],
  Http: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dff945esZlLIrYD0vXj3HEe", "Http");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Windown_1 = require("../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Http = function() {
      function Http() {}
      Http.post = function(url, params, onFinished, isSendNormalParams, isShowBusy) {
        void 0 === isSendNormalParams && (isSendNormalParams = false);
        void 0 === isShowBusy && (isShowBusy = true);
        var xhr = new XMLHttpRequest();
        var _params = "";
        xhr.onreadystatechange = function() {
          if (4 === xhr.readyState) if (200 === xhr.status) {
            var data = null;
            var e = null;
            try {
              data = JSON.parse(xhr.responseText);
            } catch (ex) {
              e = ex;
            }
            Windown_1.Windown.UIManager.hideLoading();
            onFinished(e, data);
          } else {
            Windown_1.Windown.UIManager.hideLoading();
            onFinished(xhr.status, null);
          }
        };
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/json");
        isSendNormalParams ? xhr.send(JSON.stringify(params)) : xhr.send(_params);
      };
      Http.postNoToken = function(url, params, onFinished, isSendNormalParams, isShowBusy) {
        void 0 === isSendNormalParams && (isSendNormalParams = false);
        void 0 === isShowBusy && (isShowBusy = true);
        isShowBusy && Windown_1.Windown.UIManager.showLoading();
        var xhr = new XMLHttpRequest();
        var _params = "";
        xhr.onreadystatechange = function() {
          if (4 === xhr.readyState) if (200 === xhr.status) {
            var data = null;
            var e = null;
            try {
              data = JSON.parse(xhr.responseText);
            } catch (ex) {
              e = ex;
            }
            Windown_1.Windown.UIManager.hideLoading();
            onFinished(e, data);
          } else {
            Windown_1.Windown.UIManager.hideLoading();
            onFinished(xhr.status, null);
          }
        };
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/json");
        if (isSendNormalParams) {
          xhr.send(JSON.stringify(params));
          cc.log("params:", params);
        } else xhr.send(_params);
      };
      Http.get = function(url, params, onFinished, isShowBusy) {
        void 0 === isShowBusy && (isShowBusy = true);
        isShowBusy && Windown_1.Windown.UIManager.showLoading();
        var xhr = cc.loader.getXMLHttpRequest();
        var _params = "";
        params = params || {};
        if (null !== params) {
          var count = 0;
          var paramsLength = Object.keys(params).length;
          for (var key in params) if (params.hasOwnProperty(key)) {
            _params += key + "=" + params[key];
            count++ < paramsLength - 1 && (_params += "&");
          }
        }
        xhr.onreadystatechange = function() {
          if (4 === xhr.readyState) if (200 === xhr.status) {
            var data = null;
            var e = null;
            try {
              data = JSON.parse(xhr.responseText);
            } catch (ex) {
              e = ex;
            }
            Windown_1.Windown.UIManager.hideLoading();
            onFinished(e, data);
          } else {
            Windown_1.Windown.UIManager.hideLoading();
            onFinished(xhr.status, null);
          }
        };
        var link = url;
        cc.log("GET LINK:" + link);
        xhr.open("GET", link, true);
        xhr.send();
      };
      Http.getNoToken = function(url, params, onFinished, isShowBusy) {
        void 0 === isShowBusy && (isShowBusy = true);
        isShowBusy && Windown_1.Windown.UIManager.showLoading();
        var xhr = new XMLHttpRequest();
        var _params = "";
        params = params || {};
        if (null !== params) {
          var count = 0;
          var paramsLength = Object.keys(params).length;
          for (var key in params) if (params.hasOwnProperty(key)) {
            _params += key + "=" + params[key];
            count++ < paramsLength - 1 && (_params += "&");
          }
        }
        cc.log("getNoToken:" + _params);
        url = url + "?" + _params;
        xhr.onreadystatechange = function() {
          if (4 === xhr.readyState) if (200 === xhr.status) {
            var data = null;
            var e = null;
            try {
              data = JSON.parse(xhr.responseText);
            } catch (ex) {
              e = ex;
            }
            Windown_1.Windown.UIManager.hideLoading();
            onFinished(e, data);
          } else {
            Windown_1.Windown.UIManager.hideLoading();
            onFinished(xhr.status, null);
          }
        };
        var link = url;
        cc.log("GET LINK:" + link);
        xhr.open("GET", link, true);
        xhr.send();
      };
      Http.encryptData = function(data) {
        var strData = JSON.stringify(data);
        var list = [];
        for (var i = 0; i < strData.length; i++) list.push(strData.charCodeAt(i) + 12);
        list = list.reverse();
        var strRes = list.join("&");
        return {
          data: strRes
        };
      };
      Http.deencryptData = function(data) {
        var newarr = data.split("&");
        var new2Arr = [];
        for (var i = 0; i < newarr.length; i++) new2Arr.push(String.fromCharCode(parseInt(newarr[i]) - 12));
        new2Arr = new2Arr.reverse();
        return JSON.parse(new2Arr.join(""));
      };
      Http = __decorate([ ccclass ], Http);
      return Http;
    }();
    exports.default = Http;
    cc._RF.pop();
  }, {
    "../Windown": "Windown"
  } ],
  ImgChat: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "87641S8St5NtbIcLG7SJZBj", "ImgChat");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Windown_1 = require("../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ImgChat = function(_super) {
      __extends(ImgChat, _super);
      function ImgChat() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.spMain = null;
        return _this;
      }
      ImgChat.prototype.onLoad = function() {
        Windown_1.Windown.ImgChat = this;
      };
      ImgChat.prototype.onDestroy = function() {
        Windown_1.Windown.ImgChat = null;
      };
      ImgChat.prototype.show = function(sMain) {
        this.spMain.spriteFrame = sMain;
      };
      ImgChat.prototype.onClickClose = function() {
        this.node.parent = null;
      };
      __decorate([ property(cc.Sprite) ], ImgChat.prototype, "spMain", void 0);
      ImgChat = __decorate([ ccclass ], ImgChat);
      return ImgChat;
    }(cc.Component);
    exports.default = ImgChat;
    cc._RF.pop();
  }, {
    "../Windown": "Windown"
  } ],
  InfoERR: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0e682931mZNObUrtpJqFDJS", "InfoERR");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.InfoErr = void 0;
    var InfoErr = function(_super) {
      __extends(InfoErr, _super);
      function InfoErr(string) {
        var _this = _super.call(this) || this;
        _this.message = "lvd----" + string;
        return _this;
      }
      return InfoErr;
    }(Error);
    exports.InfoErr = InfoErr;
    cc._RF.pop();
  }, {} ],
  InfoSpin: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "68cf80iqGFLTbZfm0V8Yq6S", "InfoSpin");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        lbInfo: cc.Label,
        nodeHeader: cc.Node,
        nodeInfo: cc.Node
      },
      init: function init(data) {
        this.node.active = true;
        var dataRevice = data.modelMakebet;
        var dataNormal = dataRevice.makeBetNormal;
        var dataXanhDoVang = dataRevice.makebetXDV;
        var dataAnTruoc = dataRevice.makeBetAnTruoc;
        this.lbInfo.string = JSON.stringify(data);
        var listLabel = this.nodeHeader.getComponentsInChildren(cc.Label);
        listLabel[0].string = data.idSpin;
        listLabel[1].string = this.getNameByType(dataNormal.typeSpecial);
        var listBetXdv = [ data.modelByClient.red, data.modelByClient.yello, data.modelByClient.green ];
        listLabel[2].string = JSON.stringify(listBetXdv);
        listLabel[3].string = JSON.stringify(data.modelByClient.listBetItem);
        var moneyChinh = dataNormal.objReviceFirtItem.moneyRevice;
        var moneyPhu = dataAnTruoc.moneyRevice;
        var moneyReviceXanhDoVang = 0;
        for (var i = 0, l = dataNormal.ListObjReviceSub.length; i < l; i++) moneyPhu += dataNormal.ListObjReviceSub[i].moneyRevice;
        moneyReviceXanhDoVang += dataXanhDoVang.reviceXanh;
        moneyReviceXanhDoVang += dataXanhDoVang.reviceDo;
        moneyReviceXanhDoVang += dataXanhDoVang.reviceVang;
        var moneyTotal = moneyChinh + moneyPhu + moneyReviceXanhDoVang;
        listLabel[4].string = "ch\xednh: " + this.formatNumber(moneyChinh);
        listLabel[5].string = "ph\u1ee5: " + this.formatNumber(moneyPhu);
        listLabel[6].string = "T\u1ed5ng: " + this.formatNumber(moneyTotal);
        listLabel[7].string = "C\xf2n: " + this.formatNumber(data.moneyPlayer);
      },
      formatNumber: function formatNumber(number, width) {
        void 0 === width && (width = 3);
        return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
      },
      getNameByType: function getNameByType(type) {
        var str = "Null";
        switch (type) {
         case -1:
          str = "Th\u01b0\u1eddng";
          break;

         case 1:
          str = "X10";
          break;

         case 2:
          str = "Lucky X20";
          break;

         case 3:
          str = "Lucky X10";
          break;

         case 4:
          str = "Lucky X20 or X10";
          break;

         case 5:
          str = "\u0103n ng\u1eabu nhi\xean th\xeam 1 c\u1eeda x10-x20";
          break;

         case 6:
          str = "nghe nh\u1ea1c";
          break;

         case 7:
          str = "\u0111\u1eadp chu\u1ed9t";
          break;

         case 8:
          str = "X\u1ed5 S\u1ed1";
          break;

         case 9:
          str = "R\u1eafn 8 \u0111\u1ed1t";
          break;

         case 10:
          str = "Bar nh\u1ecf";
          break;

         case 11:
          str = "x10 - x20 -x10";
          break;

         case 12:
          str = "8Id ng\u1eabu nhi\xean";
          break;

         case 13:
          str = "ch\u1eef t\xe0u";
          break;

         case 14:
          str = "jackpot";
        }
        return str;
      },
      onClickMore: function onClickMore() {
        this.nodeHeader.active = false;
        this.nodeInfo.active = true;
      },
      onClickbackMore: function onClickbackMore() {
        this.nodeHeader.active = true;
        this.nodeInfo.active = false;
      },
      onClickHide: function onClickHide() {
        this.node.active = false;
      }
    });
    cc._RF.pop();
  }, {} ],
  ItemCoppy: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e5219Y+bIBD/JViJaFmdQEf", "ItemCoppy");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Windown_1 = require("../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent, menu = _a.menu;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      NewClass.prototype.onEnable = function() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClick, this);
      };
      NewClass.prototype.onDisable = function() {
        this.node.off(cc.Node.EventType.TOUCH_END, this.onClick, this);
      };
      NewClass.prototype.onClick = function() {
        Windown_1.Windown.coppyToClip(this.getComponent(cc.Label).string);
      };
      NewClass = __decorate([ ccclass, requireComponent(cc.Label), menu("ItemCoppy") ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../Windown": "Windown"
  } ],
  ItemIndicator: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c2b56lCaGRJKI16E9ydJssj", "ItemIndicator");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ItemIndicator = function(_super) {
      __extends(ItemIndicator, _super);
      function ItemIndicator() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbIndex = null;
        _this.nodeChecked = null;
        _this.pageData = null;
        _this.index = 0;
        return _this;
      }
      ItemIndicator.prototype.onEnable = function() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClick, this);
      };
      ItemIndicator.prototype.onDisable = function() {
        this.node.off(cc.Node.EventType.TOUCH_END, this.onClick, this);
      };
      ItemIndicator.prototype.setPage = function(page) {
        this.pageData = page;
      };
      ItemIndicator.prototype.initIndex = function(index) {
        this.index = index;
        -1 != this.index ? this.lbIndex.string = index.toString() : this.lbIndex.string = "...";
      };
      ItemIndicator.prototype.getIndex = function() {
        return this.index;
      };
      ItemIndicator.prototype.onClick = function(event, data) {
        if (-1 == this.index) return;
        this.pageData.onClickIndicator(this.index);
      };
      ItemIndicator.prototype.setCheck = function(bool) {
        this.nodeChecked.active = bool;
      };
      __decorate([ property(cc.Label) ], ItemIndicator.prototype, "lbIndex", void 0);
      __decorate([ property(cc.Node) ], ItemIndicator.prototype, "nodeChecked", void 0);
      ItemIndicator = __decorate([ ccclass ], ItemIndicator);
      return ItemIndicator;
    }(cc.Component);
    exports.default = ItemIndicator;
    cc._RF.pop();
  }, {} ],
  ItemInfoUser: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2358cgp0kBOVKjJQyNXUDHm", "ItemInfoUser");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Windown_1 = require("../../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ItemInfoUser = function(_super) {
      __extends(ItemInfoUser, _super);
      function ItemInfoUser() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbUserId = null;
        _this.lbNickName = null;
        _this.lbUserName = null;
        _this.lbBalance = null;
        _this.lbDateCreated = null;
        _this.lbTotalCashIn = null;
        _this.lbTotalCashOut = null;
        return _this;
      }
      ItemInfoUser.prototype.start = function() {};
      ItemInfoUser.prototype.setInfo = function(data) {
        this.lbUserId.string = data["id"];
        this.lbNickName.string = data["nickname"];
        this.lbUserName.string = data["username"];
        this.lbBalance.string = Windown_1.Windown.formatNumber(data["ag"]);
        this.lbDateCreated.string = Windown_1.Windown.formatDate(new Date(data["dangkytime"]), "dd/MM/yyyy");
        this.lbTotalCashIn.string = Windown_1.Windown.formatNumber(data["totalNap"]);
        this.lbTotalCashOut.string = Windown_1.Windown.formatNumber(data["totalDoi"]);
      };
      __decorate([ property(cc.Label) ], ItemInfoUser.prototype, "lbUserId", void 0);
      __decorate([ property(cc.Label) ], ItemInfoUser.prototype, "lbNickName", void 0);
      __decorate([ property(cc.Label) ], ItemInfoUser.prototype, "lbUserName", void 0);
      __decorate([ property(cc.Label) ], ItemInfoUser.prototype, "lbBalance", void 0);
      __decorate([ property(cc.Label) ], ItemInfoUser.prototype, "lbDateCreated", void 0);
      __decorate([ property(cc.Label) ], ItemInfoUser.prototype, "lbTotalCashIn", void 0);
      __decorate([ property(cc.Label) ], ItemInfoUser.prototype, "lbTotalCashOut", void 0);
      ItemInfoUser = __decorate([ ccclass ], ItemInfoUser);
      return ItemInfoUser;
    }(cc.Component);
    exports.default = ItemInfoUser;
    cc._RF.pop();
  }, {
    "../../Windown": "Windown"
  } ],
  ItemLevelController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b9369rk4e1FxYJBGRBXUD91", "ItemLevelController");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EVENT_MANAGER_1 = require("../DefineTs/EVENT_MANAGER");
    var TextDefine_1 = require("../DefineTs/TextDefine");
    var Windown_1 = require("../Windown");
    var GameType = cc.Enum({
      NONE: 0,
      BAN_CA: 32,
      XENG: 1
    });
    var TYPE = cc.Enum({
      GAME: 0,
      LEVEL: 1,
      ROOM: 2,
      GUNID: 3,
      CASH_OUT: 4
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
    var ItemLevelController = function(_super) {
      __extends(ItemLevelController, _super);
      function ItemLevelController() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.target = null;
        _this.type = TYPE.GAME;
        _this.gameType = GameType.NONE;
        _this.idRoom = 1;
        _this.imgLock = null;
        _this._isLock = false;
        _this.currentGunId = 0;
        _this.configCurrent = null;
        return _this;
      }
      Object.defineProperty(ItemLevelController.prototype, "isLock", {
        get: function() {
          return this._isLock;
        },
        set: function(value) {
          var cp = null == this.target ? null : this.target.getComponent(cc.Button);
          if (value && cp) {
            cp.interactable = false;
            this.onEvent();
          } else {
            cp && (cp.interactable = true);
            this.offEvent();
          }
          this.imgLock && (this.imgLock.node.active = value);
          this._isLock = value;
        },
        enumerable: false,
        configurable: true
      });
      ItemLevelController.prototype.onEvent = function() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onclick, this);
      };
      ItemLevelController.prototype.offEvent = function() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onclick, this);
      };
      ItemLevelController.prototype.onclick = function(event) {
        var str = "";
        if (this.type == TYPE.CASH_OUT) {
          var levelCashOut = Windown_1.Windown.getLevelCashOut();
          str = TextDefine_1.TextDefine.NEED_LEVEL_C_OUT.formatString(levelCashOut);
        } else str = TextDefine_1.TextDefine.NEED_LEVEL;
        Windown_1.Windown.Dialog.showLog(str);
        event.stopPropagation();
      };
      ItemLevelController.prototype.onLoad = function() {
        null == this.target && (this.target = this.node);
        this.isLock = false;
      };
      ItemLevelController.prototype.onEnable = function() {
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.LEVEL_UP, this.emitNewData, this);
        this.emitNewData();
      };
      ItemLevelController.prototype.onDisable = function() {
        cc.systemEvent.off(EVENT_MANAGER_1.EVENT_MANAGER.LEVEL_UP, this.emitNewData, this);
        this.offEvent();
      };
      ItemLevelController.prototype.emitNewData = function() {
        this.configCurrent = Windown_1.Windown.getConfigLevel();
        if (null == this.configCurrent) return;
        switch (this.type) {
         case TYPE.GAME:
          this.setGame();
          break;

         case TYPE.CASH_OUT:
          this.setCashOut();
          break;

         case TYPE.ROOM:
          this.setRoom(this.idRoom);
          break;

         case TYPE.GUNID:
          this.setGunId(this.currentGunId);
        }
      };
      ItemLevelController.prototype.updateLevelConfig = function() {
        null == this.configCurrent && (this.configCurrent = Windown_1.Windown.getConfigLevel());
      };
      ItemLevelController.prototype.setGame = function() {
        var configCurrent = this.configCurrent;
        var listConfigGame = configCurrent.GameUnlock;
        this.isLock = true;
        if (null == listConfigGame) {
          this.isLock = false;
          return;
        }
        for (var i = 0, l = listConfigGame.length; i < l; i++) {
          var info = listConfigGame[i];
          if (info.GameId == this.gameType) {
            null != info.RoomType && info.RoomType.length > 0 && (this.isLock = false);
            break;
          }
        }
      };
      ItemLevelController.prototype.setCashOut = function() {
        var configCurrent = this.configCurrent;
        configCurrent.IsCashout ? this.isLock = false : this.isLock = true;
      };
      ItemLevelController.prototype.setRoom = function(id) {
        if (0 == id) return;
        this.idRoom = id;
        var configCurrent = this.configCurrent;
        var listConfigGame = configCurrent.GameUnlock;
        this.isLock = true;
        if (null == listConfigGame) {
          this.isLock = false;
          return;
        }
        for (var i = 0, l = listConfigGame.length; i < l; i++) {
          var info = listConfigGame[i];
          if (info.GameId == this.gameType) {
            null != info.RoomType && info.RoomType.length > 0 && (0 == info.RoomType[0] || info.RoomType.includes(this.idRoom)) && (this.isLock = false);
            break;
          }
        }
      };
      ItemLevelController.prototype.setGunId = function(id) {
        this.currentGunId = id;
        var configCurrent = this.configCurrent;
        var listConfigGame = configCurrent.GameUnlock;
        this.isLock = true;
        if (null == listConfigGame) {
          this.isLock = false;
          return;
        }
        for (var i = 0, l = listConfigGame.length; i < l; i++) {
          var info = listConfigGame[i];
          if (info.GameId == GameType.BAN_CA) {
            1 == this.idRoom ? null != info.GunType1 && info.GunType1.length > 0 && (0 == info.GunType1[0] || info.GunType1.includes(this.currentGunId + 1)) && (this.isLock = false) : null != info.GunType2 && info.GunType2.length > 0 && (0 == info.GunType2[0] || info.GunType2.includes(this.currentGunId + 1)) && (this.isLock = false);
            break;
          }
        }
      };
      __decorate([ property(cc.Node) ], ItemLevelController.prototype, "target", void 0);
      __decorate([ property({
        type: TYPE
      }) ], ItemLevelController.prototype, "type", void 0);
      __decorate([ property({
        type: GameType,
        visible: function() {
          var bool = this.type == TYPE.GAME || this.type == TYPE.ROOM;
          return bool;
        }
      }) ], ItemLevelController.prototype, "gameType", void 0);
      __decorate([ property({
        type: cc.Integer,
        visible: function() {
          var bool = this.type == TYPE.ROOM;
          return bool;
        }
      }) ], ItemLevelController.prototype, "idRoom", void 0);
      __decorate([ property({
        type: cc.Sprite,
        visible: function() {
          var bool = true;
          this.type == TYPE.LEVEL && (bool = false);
          bool || (this.imgLock = null);
          return bool;
        }
      }) ], ItemLevelController.prototype, "imgLock", void 0);
      ItemLevelController = __decorate([ ccclass, menu("ItemLevelController") ], ItemLevelController);
      return ItemLevelController;
    }(cc.Component);
    exports.default = ItemLevelController;
    cc._RF.pop();
  }, {
    "../DefineTs/EVENT_MANAGER": "EVENT_MANAGER",
    "../DefineTs/TextDefine": "TextDefine",
    "../Windown": "Windown"
  } ],
  ItemLogGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "be13a/2g8FAppEn2d1lx7Wh", "ItemLogGame");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Windown_1 = require("../../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ItemLogGame = function(_super) {
      __extends(ItemLogGame, _super);
      function ItemLogGame() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbTime = null;
        _this.lbTransaction = null;
        _this.lbTotalIn = null;
        _this.lbTotalOut = null;
        _this.lbTotal = null;
        return _this;
      }
      ItemLogGame.prototype.initItem = function(data) {
        var time = Windown_1.Windown.formatDate(new Date(data.getLong("date")), "dd/MM/yy hh:mm:ss");
        this.lbTime.string = time.replace(" ", "\n");
        this.lbTransaction.string = this.getTypeLog(data.getInt("type"));
        this.lbTotalIn.string = Windown_1.Windown.formatNumber(data.getLong("moneyIn"));
        this.lbTotalOut.string = Windown_1.Windown.formatNumber(data.getLong("moneyOut"));
        this.lbTotal.string = Windown_1.Windown.formatNumber(data.getLong("moneyTotal"));
        this.lbTotal.node.color = data.getLong("moneyTotal") < 0 ? cc.Color.RED : cc.Color.WHITE;
      };
      ItemLogGame.prototype.getTypeLog = function(type) {
        switch (type) {
         case 34:
          return "\u0110i\xeau Thuy\u1ec1n";

         case 35:
          return "Wukong";

         case 37:
          return "Neko";

         case 40:
          return "Kong";

         case 38:
          return "T\xe0i X\u1ec9u";

         case 39:
          return "M\u1eb7t tr\u1eddi";

         case 41:
          return "Baccarat";

         case 50:
          return "Ti\u1ebfn L\xean";

         case 107:
          return "Admin Send";

         case 114:
          return "VQMM";

         case 105:
          return "SV get Cashout";

         case 104:
          return "Pay Momo";

         case 103:
          return "Pay Card";

         case 106:
          return "Refund Error Cashout";

         case 111:
          return "Verify Tele";

         case 115:
          return "Piggy";

         case 100:
          return "Giftcode";

         case 101:
          return "Nhi\u1ec7m V\u1ee5";
        }
      };
      __decorate([ property(cc.Label) ], ItemLogGame.prototype, "lbTime", void 0);
      __decorate([ property(cc.Label) ], ItemLogGame.prototype, "lbTransaction", void 0);
      __decorate([ property(cc.Label) ], ItemLogGame.prototype, "lbTotalIn", void 0);
      __decorate([ property(cc.Label) ], ItemLogGame.prototype, "lbTotalOut", void 0);
      __decorate([ property(cc.Label) ], ItemLogGame.prototype, "lbTotal", void 0);
      ItemLogGame = __decorate([ ccclass ], ItemLogGame);
      return ItemLogGame;
    }(cc.Component);
    exports.default = ItemLogGame;
    cc._RF.pop();
  }, {
    "../../Windown": "Windown"
  } ],
  ItemSafe: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "109f9In/yZIBqwvrTyzca69", "ItemSafe");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Windown_1 = require("../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.isRevert = false;
        return _this;
      }
      NewClass.prototype.onEnable = function() {
        cc.log("isSafe: " + Windown_1.Windown.IsSafe);
        Windown_1.Windown.IsSafe ? this.node.active = !this.isRevert : this.node.active = this.isRevert;
      };
      __decorate([ property(cc.Boolean) ], NewClass.prototype, "isRevert", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../Windown": "Windown"
  } ],
  ItemSpin: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "94a8bT/IL5HY52rh2w5C0Rh", "ItemSpin");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        imgType: cc.Node,
        imgTypeXDV: cc.Node
      },
      onLoad: function onLoad() {
        this.onEvent();
      },
      onEvent: function onEvent() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onClick, this);
      },
      offEvent: function offEvent() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onClick, this);
      },
      onClick: function onClick() {
        Global.GenData.viewInfoSesion(this.data, this.node);
      },
      init: function init(data) {
        this.data = data;
        var dataBet = data.modelByClient;
        var totalMoneyBet = dataBet.green + dataBet.red + dataBet.yello;
        for (var i = 0, l = dataBet.listBetItem.length; i < l; i++) totalMoneyBet += dataBet.listBetItem[i];
        Global.GenData.moneyCurrent -= totalMoneyBet;
        var dataRevice = data.modelMakebet;
        var dataNormal = dataRevice.makeBetNormal;
        var dataXDV = dataRevice.makebetXDV;
        var dataAnTruoc = dataRevice.makeBetAnTruoc;
        var totalMoneyRevice = dataNormal.objReviceFirtItem.moneyRevice;
        totalMoneyRevice += dataAnTruoc.moneyRevice;
        for (var _i = 0, _l = dataNormal.ListObjReviceSub.length; _i < _l; _i++) totalMoneyRevice += dataNormal.ListObjReviceSub[_i].moneyRevice;
        totalMoneyRevice += dataXDV.reviceXanh;
        totalMoneyRevice += dataXDV.reviceDo;
        totalMoneyRevice += dataXDV.reviceVang;
        Global.GenData.moneyCurrent += totalMoneyRevice;
        this.data.moneyPlayer = Global.GenData.moneyCurrent;
        var pos = Global.GenData.getPosByMoneyAndSpinCount(data.moneyPlayer, this.data.idSpin + 1);
        this.node.position = pos;
        Global.GenData.drawLine(pos);
        this.setColorType(dataNormal.typeSpecial);
        this.setColorTypeXDV(dataXDV.typeSpecial);
      },
      setColorType: function setColorType(type) {
        switch (type) {
         case 1:
         case 2:
         case 3:
         case 4:
         case 5:
          this.imgType.color = cc.Color.YELLOW;
          break;

         case 6:
         case 8:
         case 11:
         case 12:
         case 9:
         case 10:
         case 13:
         case 7:
          this.imgType.color = cc.Color.GREEN;
          break;

         case 14:
          this.imgType.color = cc.Color.RED;
          break;

         default:
          this.imgType.color = cc.Color.WHITE;
        }
      },
      setColorTypeXDV: function setColorTypeXDV(type) {
        switch (type) {
         case 1:
         case 2:
          this.imgTypeXDV.color = cc.Color.RED;
          break;

         case 3:
          this.imgTypeXDV.color = cc.Color.YELLOW;
          break;

         case 4:
          this.imgTypeXDV.color = cc.Color.GREEN;
          break;

         default:
          this.imgTypeXDV.color = cc.Color.WHITE;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  JackpotItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1d4ce28IO5Kw4d5hMM57gdA", "JackpotItem");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Windown_1 = require("../Windown");
    var LbMoneyChange_1 = require("./LbMoneyChange");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent;
    var GameType = cc.Enum({
      FISH: 32,
      THAN_TAI: 2,
      TRU_TIEN: 33
    });
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.index = 0;
        _this.gameType = GameType.FISH;
        _this.offsetStart = .8;
        _this.per = 1;
        _this.isFirt = true;
        _this.lbMoney = null;
        _this.mapMoneyCachePer = new Map();
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        this.lbMoney = this.getComponent(LbMoneyChange_1.default);
        this.lbMoney.time = 10;
      };
      NewClass.prototype.onEnable = function() {
        Windown_1.Windown.JackpotManager.dangKyLabel(this);
        this.emitNewData();
      };
      NewClass.prototype.onDisable = function() {
        Windown_1.Windown.JackpotManager.huyDangKyLabel(this);
      };
      NewClass.prototype.emitNewData = function() {
        if (null == Windown_1.Windown.JackpotManager.infoJackpot) return;
        if (this.gameType == GameType.FISH) {
          var str = "fish" + this.index;
          var money = Windown_1.Windown.JackpotManager.infoJackpot.getLong(str) * this.per;
          this.updateMoney(money);
        } else if (this.gameType == GameType.TRU_TIEN) {
          var str = "slot1";
          var money = Windown_1.Windown.JackpotManager.infoJackpot.getLong(str) * this.per;
          this.updateMoney(money);
        }
      };
      NewClass.prototype.changeIndex = function(index) {};
      NewClass.prototype.reset = function() {
        this.mapMoneyCachePer.clear();
        this.lbMoney._currentMonney = 0;
        this.lbMoney.resetLb();
        this.isFirt = true;
      };
      NewClass.prototype.changePer = function(per) {
        this.mapMoneyCachePer.set(this.per, this.lbMoney._currentMonney);
        var moneyLast = this.mapMoneyCachePer.get(per);
        cc.log(moneyLast);
        void 0 == moneyLast ? this.isFirt = true : this.lbMoney._currentMonney = moneyLast;
        this.per = per;
        this.emitNewData();
      };
      NewClass.prototype.updateMoney = function(money) {
        if (this.isFirt) {
          this.lbMoney._currentMonney = money * this.offsetStart;
          this.isFirt = false;
        }
        this.lbMoney.setMoney(money);
      };
      __decorate([ property(cc.Integer) ], NewClass.prototype, "index", void 0);
      __decorate([ property({
        type: GameType
      }) ], NewClass.prototype, "gameType", void 0);
      __decorate([ property(cc.Float) ], NewClass.prototype, "offsetStart", void 0);
      __decorate([ property(cc.Float) ], NewClass.prototype, "per", void 0);
      NewClass = __decorate([ ccclass, requireComponent(LbMoneyChange_1.default) ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../Windown": "Windown",
    "./LbMoneyChange": "LbMoneyChange"
  } ],
  JackpotManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "469caVIbu1HUKB3G7sYjDY8", "JackpotManager");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Windown_1 = require("../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var JackpotManager = function(_super) {
      __extends(JackpotManager, _super);
      function JackpotManager() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.infoJackpot = null;
        _this.listItems = [];
        _this.timeRunJackpot = 5;
        _this.timeRequestjackpot = 5;
        return _this;
      }
      JackpotManager.prototype.onLoad = function() {
        cc.game.addPersistRootNode(this.node);
        Windown_1.Windown.JackpotManager = this;
      };
      JackpotManager.prototype.onDestroy = function() {
        Windown_1.Windown.JackpotManager = this;
      };
      JackpotManager.prototype.start = function() {};
      JackpotManager.prototype.reviceData = function(data) {
        this.infoJackpot = data;
        this.listItems.forEach(function(v) {
          v.emitNewData();
        });
      };
      JackpotManager.prototype.sendGetJackpot = function() {};
      JackpotManager.prototype.dangKyLabel = function(component) {
        this.listItems.includes(component) || this.listItems.push(component);
      };
      JackpotManager.prototype.huyDangKyLabel = function(component) {
        var index = this.listItems.indexOf(component);
        index > -1 && this.listItems.splice(index, 1);
      };
      JackpotManager = __decorate([ ccclass ], JackpotManager);
      return JackpotManager;
    }(cc.Component);
    exports.default = JackpotManager;
    cc._RF.pop();
  }, {
    "../Windown": "Windown"
  } ],
  JsonOb: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "923404WNGhO26uVc8JpsOGk", "JsonOb");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.JsonOb = void 0;
    var OP = Object.prototype;
    var types = {
      obj: "[object Object]",
      array: "[object Array]"
    };
    var OAM = [ "push", "pop", "shift", "unshift", "sort", "reverse", "splice" ];
    var JsonOb = function() {
      function JsonOb(obj, callback) {
        OP.toString.call(obj) !== types.obj && OP.toString.call(obj) !== types.array && console.error("Vui l\xf2ng chuy\u1ec3n v\xe0o m\u1ed9t \u0111\u1ed1i t\u01b0\u1ee3ng ho\u1eb7c m\u1ea3ng");
        this._callback = callback;
        this.observe(obj);
      }
      JsonOb.prototype.observe = function(obj, path) {
        var _this = this;
        OP.toString.call(obj) === types.array && this.overrideArrayProto(obj, path);
        Object.keys(obj).forEach(function(key) {
          var self = _this;
          var oldVal = obj[key];
          var pathArray = path && path.slice();
          pathArray ? pathArray.push(key) : pathArray = [ key ];
          Object.defineProperty(obj, key, {
            get: function() {
              return oldVal;
            },
            set: function(newVal) {
              if (oldVal !== newVal) {
                "[object Object]" === OP.toString.call(newVal) && self.observe(newVal, pathArray);
                self._callback(newVal, oldVal, pathArray);
                oldVal = newVal;
              }
            }
          });
          OP.toString.call(obj[key]) !== types.obj && OP.toString.call(obj[key]) !== types.array || _this.observe(obj[key], pathArray);
        }, this);
      };
      JsonOb.prototype.overrideArrayProto = function(array, path) {
        var originalProto = Array.prototype;
        var overrideProto = Object.create(Array.prototype);
        var self = this;
        var result;
        OAM.forEach(function(method) {
          Object.defineProperty(overrideProto, method, {
            value: function() {
              var oldVal = this.slice();
              result = originalProto[method].apply(this, arguments);
              self.observe(this, path);
              self._callback(this, oldVal, path);
              return result;
            }
          });
        });
        array["__proto__"] = overrideProto;
      };
      return JsonOb;
    }();
    exports.JsonOb = JsonOb;
    cc._RF.pop();
  }, {} ],
  LayoutScale: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "96d27VGYElCzIc0dp2RQAoM", "LayoutScale");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LayoutScale = function(_super) {
      __extends(LayoutScale, _super);
      function LayoutScale() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.layoutHorizontal = null;
        _this.spacingX = 0;
        _this.totalChildSize = 0;
        return _this;
      }
      LayoutScale.prototype.onLoad = function() {
        this.designSize = cc.v2(1280, 720);
        this.containerSize = cc.v2(this.layoutHorizontal.node.width, this.layoutHorizontal.node.height);
        this.spacingX = this.layoutHorizontal.spacingX;
        this.totalChildSize = this.containerSize.x - (this.spacingX * this.layoutHorizontal.node.childrenCount - 1);
        cc.view.on("design-resolution-changed", this.onScreenSizeChange.bind(this));
      };
      LayoutScale.prototype.start = function() {
        this.onScreenSizeChange();
      };
      LayoutScale.prototype.onScreenSizeChange = function() {
        if (this.node) {
          cc.log("onScreenSizeChange:", this.node.name);
          var deltaSizeX = cc.winSize.width - this.designSize.x;
          var newSpacingX = (this.containerSize.x + deltaSizeX - this.totalChildSize) / this.layoutHorizontal.node.childrenCount;
          this.layoutHorizontal.spacingX = newSpacingX;
          cc.log("tile=", this.layoutHorizontal.spacingX);
        }
      };
      __decorate([ property(cc.Layout) ], LayoutScale.prototype, "layoutHorizontal", void 0);
      LayoutScale = __decorate([ ccclass ], LayoutScale);
      return LayoutScale;
    }(cc.Component);
    exports.default = LayoutScale;
    cc._RF.pop();
  }, {} ],
  LbMoneyChange: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "51285Z3WLtLkq3nj7qtpTPH", "LbMoneyChange");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Windown_1 = require("../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent;
    var LbMonneyChange = function(_super) {
      __extends(LbMonneyChange, _super);
      function LbMonneyChange() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.time = .5;
        _this.scaleEffect = false;
        _this.lb = null;
        _this.objEasing = null;
        _this._currentMonney = 0;
        _this._monney = 0;
        _this.formatMoney = false;
        _this.cb = null;
        return _this;
      }
      LbMonneyChange.prototype.onLoad = function() {
        this.lb = this.getComponent(cc.Label);
        this.objEasing = {};
      };
      LbMonneyChange.prototype.resetLb = function() {
        cc.Tween.stopAllByTarget(this);
        this.lb && (this.lb.string = "0");
        this._currentMonney = 0;
        this._monney = 0;
      };
      LbMonneyChange.prototype.setMoneyNoTime = function(money, formatMoney) {
        void 0 === formatMoney && (formatMoney = false);
        this.resetLb();
        this._currentMonney = money;
        this._monney = money;
        this.lb.string = formatMoney ? Windown_1.Windown.formatMoney(parseInt(this._currentMonney.toString())) : Windown_1.Windown.formatNumber(parseInt(this._currentMonney.toString()));
      };
      LbMonneyChange.prototype.onDisable = function() {
        cc.Tween.stopAllByTarget(this);
      };
      LbMonneyChange.prototype.setMoney = function(monney, isFormatMoney, frontString, isDot) {
        var _this = this;
        void 0 === isFormatMoney && (isFormatMoney = false);
        void 0 === frontString && (frontString = "");
        void 0 === isDot && (isDot = true);
        cc.Tween.stopAllByTarget(this);
        this.formatMoney = isFormatMoney;
        this._monney = monney;
        var a = {
          startNumber: this._currentMonney
        };
        cc.tween(a).to(this.time, {
          startNumber: this._monney
        }, {
          progress: function(start, end, current, ratio) {
            if (false == cc.isValid(_this.lb)) cc.Tween.stopAllByTarget(a); else {
              var _current = start + (end - start) * ratio;
              _this._currentMonney = _current;
              if (isFormatMoney) _this.lb.string = frontString + Windown_1.Windown.formatMoney(parseInt(_current), 1, 1e6); else {
                var str = frontString + Windown_1.Windown.formatNumber(parseInt(_current));
                isDot || (str = str.replace(/[.]/g, ""));
                _this.lb && (_this.lb.string = str);
              }
              if (parseInt(_current)) return _current;
            }
          }
        }).call(function() {
          if (null != _this.cb) {
            _this.cb();
            _this.cb = null;
          }
        }).start();
        this.scaleEffect && cc.tween(this.node).to(this.time / 2, {
          scale: 1.2 * this.node.scale
        }).to(this.time / 2, {
          scale: this.node.scale
        }).start();
      };
      __decorate([ property(cc.Float) ], LbMonneyChange.prototype, "time", void 0);
      __decorate([ property(cc.Boolean) ], LbMonneyChange.prototype, "scaleEffect", void 0);
      LbMonneyChange = __decorate([ ccclass, requireComponent(cc.Label) ], LbMonneyChange);
      return LbMonneyChange;
    }(cc.Component);
    exports.default = LbMonneyChange;
    cc._RF.pop();
  }, {
    "../Windown": "Windown"
  } ],
  LbMonoSpace: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ef6cdgak0JA7Klp9LwbTgyF", "LbMonoSpace");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Windown_1 = require("../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Type = cc.Enum({
      ATLAS: 0,
      LIST_SF: 1,
      BITMAP_FONT: 2
    });
    var LbMonoSpace = function(_super) {
      __extends(LbMonoSpace, _super);
      function LbMonoSpace() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.type = Type.ATLAS;
        _this.atlas = null;
        _this.tempReplaceAtlas = "ky-tu-replace";
        _this.isPrefix = false;
        _this.listFS = [ null, null, null, null, null, null, null, null, null, null, null, null ];
        _this.font = null;
        _this._string = "1.234.567";
        _this._maxWidth = 20;
        _this._maxWidthSpecialChar = 20;
        _this._offYSpeciChar = -10;
        _this._offYChar = -10;
        _this._scale = 1;
        _this.time = .5;
        _this.callBack = null;
        _this.objEasing = null;
        _this._currentMonney = 0;
        _this._monney = 0;
        _this.formatMoney = false;
        _this.pool = new cc.NodePool();
        return _this;
      }
      Object.defineProperty(LbMonoSpace.prototype, "string", {
        get: function() {
          return this._string;
        },
        set: function(value) {
          if (value == this._string) return;
          this._string = value;
          this._updateString();
          this._updateYalChar();
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(LbMonoSpace.prototype, "maxWidth", {
        get: function() {
          return this._maxWidth;
        },
        set: function(value) {
          if (value == this._maxWidth) return;
          this._maxWidth = value;
          this._updateWidth();
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(LbMonoSpace.prototype, "maxWidthSpecialChar", {
        get: function() {
          return this._maxWidthSpecialChar;
        },
        set: function(value) {
          if (value == this._maxWidthSpecialChar) return;
          this._maxWidthSpecialChar = value;
          this._updateWidth();
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(LbMonoSpace.prototype, "offYSpeciChar", {
        get: function() {
          return this._offYSpeciChar;
        },
        set: function(value) {
          if (value == this._offYSpeciChar) return;
          this._offYSpeciChar = value;
          this._updateYalChar;
          this._updateYSPecialChar();
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(LbMonoSpace.prototype, "offYChar", {
        get: function() {
          return this._offYChar;
        },
        set: function(value) {
          if (value == this._offYChar) return;
          this._offYChar = value;
          this._updateYalChar(), this._updateYSPecialChar();
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(LbMonoSpace.prototype, "scale", {
        get: function() {
          return this._scale;
        },
        set: function(value) {
          if (value == this._scale) return;
          this._scale = value;
          this._updateWidth();
        },
        enumerable: false,
        configurable: true
      });
      LbMonoSpace.prototype.resetLb = function() {
        cc.Tween.stopAllByTarget(this);
        this.string = "0";
        this._currentMonney = 0;
        this._monney = 0;
      };
      LbMonoSpace.prototype.setMoneyNoTime = function(money, formatMoney) {
        void 0 === formatMoney && (formatMoney = false);
        this.resetLb();
        this._currentMonney = money;
        this._monney = money;
        this.string = formatMoney ? Windown_1.Windown.formatMoney(parseInt(this._currentMonney.toString())) : Windown_1.Windown.formatNumber(parseInt(this._currentMonney.toString()));
      };
      LbMonoSpace.prototype.onDisable = function() {
        cc.Tween.stopAllByTarget(this);
      };
      LbMonoSpace.prototype.setMoney = function(monney, isFormatMoney, frontString, isDot) {
        var _this = this;
        void 0 === isFormatMoney && (isFormatMoney = false);
        void 0 === frontString && (frontString = "");
        void 0 === isDot && (isDot = true);
        cc.Tween.stopAllByTarget(this);
        this.formatMoney = isFormatMoney;
        this._monney = monney;
        cc.tween(this).to(this.time, {
          _currentMonney: {
            value: this._monney,
            progress: function(start, end, current, ratio) {
              var _current = start + (end - start) * ratio;
              if (isFormatMoney) _this.string = frontString + Windown_1.Windown.formatMoney(parseInt(_current), 1, 1e6); else {
                var str = frontString + Windown_1.Windown.formatNumber(parseInt(_current));
                isDot || (str = str.replace(/[.]/g, ""));
                _this.string = str;
              }
              if (null != _this.callBack && _current == _this._monney) {
                _this.callBack();
                _this.callBack = null;
              }
              return _current;
            }
          }
        }).start();
      };
      LbMonoSpace.prototype.getLb = function(isSpecialChar) {
        if (this.pool.size() > 0) return this.pool.get();
        var node = new cc.Node();
        node.anchorY = 0;
        node.width = isSpecialChar ? this.maxWidthSpecialChar : this.maxWidth;
        var nodeChild = new cc.Node();
        nodeChild.anchorY = 0;
        node.addChild(nodeChild);
        if (this.type == Type.BITMAP_FONT) {
          var lb = nodeChild.addComponent(cc.Label);
          lb.font = this.font;
        } else nodeChild.addComponent(cc.Sprite);
        return node;
      };
      LbMonoSpace.prototype.putLb = function(node) {
        this.pool.put(node);
      };
      LbMonoSpace.prototype.onLoad = function() {};
      LbMonoSpace.prototype.onDestroy = function() {
        this.pool.clear();
      };
      LbMonoSpace.prototype.start = function() {};
      LbMonoSpace.prototype.getSf = function(num) {
        if (this.type == Type.ATLAS) {
          switch (num) {
           case "x":
           case "X":
            num = "multiply";
            break;

           case ",":
            num = "comma";
            break;

           case ".":
            num = "decimal";
            break;

           default:
            num;
          }
          var strGet = this.isPrefix ? this.tempReplaceAtlas + num : num + this.tempReplaceAtlas;
          var sp = this.atlas.getSpriteFrame(strGet);
          null == sp && cc.warn("Kh\xf4ng th\u1ec3 t\xecm th\u1ea5y \u1ea3nh c\xf3 t\xean " + strGet + " trong atlas");
          return sp;
        }
        var numInt = Number(num);
        if (!isNaN(numInt)) return this.listFS[numInt];
        if ("." == num) return this.listFS[11];
        if ("," == num) return this.listFS[12];
        if ("x" == num || "X" == num) return this.listFS[10];
      };
      LbMonoSpace.prototype._updateString = function() {
        var children = this.node.children;
        while (this.node.childrenCount > 0) this.putLb(children[0]);
        var listChar = this._string.split("");
        for (var i = 0, l = listChar.length; i < l; i++) {
          var char = listChar[i];
          var node = this.getLb("." == char || "<" == char);
          node.name = char;
          if (this.type == Type.BITMAP_FONT) node.getComponentInChildren(cc.Label).string = char; else {
            var sp = node.getComponentInChildren(cc.Sprite);
            sp.spriteFrame = this.getSf(char);
          }
          this.node.addChild(node);
        }
        this._updateWidth();
        this._updateYSPecialChar();
        this._updateYalChar();
      };
      LbMonoSpace.prototype._updateWidth = function() {
        if (this._string.length < 1) return;
        var listChar = this._string.split("");
        var totalSpecial = listChar.filter(function(v) {
          return "," == v || "." == v;
        }).length;
        var totalLength = (listChar.length - totalSpecial) * this.maxWidth + totalSpecial * this.maxWidthSpecialChar;
        this.node.width = totalLength;
        var listChild = this.node.children;
        var lastNode = listChild[0];
        var nodeWidth = this._getWidthNodeByName(lastNode);
        lastNode.width = nodeWidth;
        lastNode.x = -totalLength / 2 + nodeWidth / 2;
        lastNode.scale = this._scale;
        for (var i = 1, l = listChild.length; i < l; i++) {
          var node = listChild[i];
          nodeWidth = this._getWidthNodeByName(node);
          node.width = nodeWidth;
          node.x = lastNode.x + (lastNode.width / 2 + nodeWidth / 2);
          lastNode = node;
          lastNode.scale = this._scale;
        }
      };
      LbMonoSpace.prototype._updateCustomWidth = function() {};
      LbMonoSpace.prototype._updateYSPecialChar = function() {
        for (var _i = 0, _a = this.node.children; _i < _a.length; _i++) {
          var node = _a[_i];
          "." == node.name || "," == node.name ? node.y = this._offYSpeciChar : "x" != node.name && "%" != node.name || (node.y = this._offYSpeciChar + 20);
        }
      };
      LbMonoSpace.prototype._updateYalChar = function() {
        for (var _i = 0, _a = this.node.children; _i < _a.length; _i++) {
          var node = _a[_i];
          "." != node.name && "," != node.name ? node.y = this._offYChar : node.y = this._offYSpeciChar;
        }
      };
      LbMonoSpace.prototype._getWidthNodeByName = function(node) {
        var name = node.name;
        if ("," == name || "." == name || "%" == name) return this._maxWidthSpecialChar;
        return this._maxWidth;
      };
      __decorate([ property({
        type: Type
      }) ], LbMonoSpace.prototype, "type", void 0);
      __decorate([ property({
        type: cc.SpriteAtlas,
        visible: function() {
          var bool = this.type == Type.ATLAS;
          return bool;
        }
      }) ], LbMonoSpace.prototype, "atlas", void 0);
      __decorate([ property({
        visible: function() {
          var bool = this.type == Type.ATLAS;
          return bool;
        },
        tooltip: 'L\xe0 k\xfd t\u1ef1 b\u1ecb thay th\u1ebf khi l\u1ea5y t\xean \u1ea3nh t\u1eeb atlas.\nV\xed d\u1ee5: "0_bule_font" th\xec k\xfd t\u1ef1 thay th\u1ebf l\xe0: _bule_font'
      }) ], LbMonoSpace.prototype, "tempReplaceAtlas", void 0);
      __decorate([ property({
        visible: function() {
          var bool = this.type == Type.ATLAS;
          return bool;
        },
        tooltip: "l\xe0 get k\xfd t\u1ef1 b\u1ecb thay th\u1ebf l\xe0 \u1edf \u0111\u1ea7u hay \u1edf \u0111u\xf4i.vd blueFont_0 l\xe0 \u1edf \u0111\u1ea7u,0_blueFont l\xe0 \u1edf cu\u1ed1i ok?"
      }) ], LbMonoSpace.prototype, "isPrefix", void 0);
      __decorate([ property({
        type: cc.SpriteFrame,
        visible: function() {
          var bool = this.type == Type.LIST_SF;
          return bool;
        },
        tooltip: "0-9.,"
      }) ], LbMonoSpace.prototype, "listFS", void 0);
      __decorate([ property({
        type: cc.Font,
        visible: function() {
          var bool = this.type == Type.BITMAP_FONT;
          return bool;
        }
      }) ], LbMonoSpace.prototype, "font", void 0);
      __decorate([ property ], LbMonoSpace.prototype, "_string", void 0);
      __decorate([ property ], LbMonoSpace.prototype, "string", null);
      __decorate([ property ], LbMonoSpace.prototype, "_maxWidth", void 0);
      __decorate([ property ], LbMonoSpace.prototype, "maxWidth", null);
      __decorate([ property ], LbMonoSpace.prototype, "_maxWidthSpecialChar", void 0);
      __decorate([ property ], LbMonoSpace.prototype, "maxWidthSpecialChar", null);
      __decorate([ property ], LbMonoSpace.prototype, "_offYSpeciChar", void 0);
      __decorate([ property ], LbMonoSpace.prototype, "offYSpeciChar", null);
      __decorate([ property ], LbMonoSpace.prototype, "_offYChar", void 0);
      __decorate([ property ], LbMonoSpace.prototype, "offYChar", null);
      __decorate([ property ], LbMonoSpace.prototype, "_scale", void 0);
      __decorate([ property ], LbMonoSpace.prototype, "scale", null);
      __decorate([ property(cc.Float) ], LbMonoSpace.prototype, "time", void 0);
      LbMonoSpace = __decorate([ ccclass ], LbMonoSpace);
      return LbMonoSpace;
    }(cc.Component);
    exports.default = LbMonoSpace;
    cc._RF.pop();
  }, {
    "../Windown": "Windown"
  } ],
  Loading: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5a2acfru5VIVqPR5Lg9kCxH", "Loading");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        return _this;
      }
      NewClass.prototype.start = function() {};
      __decorate([ property(cc.Label) ], NewClass.prototype, "label", void 0);
      __decorate([ property ], NewClass.prototype, "text", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  LogCashTabView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9781cdWxopHVZNngHVpU9wP", "LogCashTabView");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var REQUEST_CODE_1 = require("../../DefineTs/REQUEST_CODE");
    var ConectManager_1 = require("../../Network/ConectManager");
    var Windown_1 = require("../../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbTitleLogCash = null;
        _this.text = "hello";
        return _this;
      }
      NewClass.prototype.onEnable = function() {};
      NewClass.prototype.start = function() {};
      NewClass.prototype.getLogGameToday = function() {
        var SFSObject = ConectManager_1.ConectManager.getIns().getSFSObj();
        var dateToday = new Date();
        var dateStr = Windown_1.Windown.formatDate(dateToday, "yyyy-MM-dd");
        SFSObject.putUtfString("start", dateStr + " 00:00:00");
        SFSObject.putUtfString("end", dateStr + " 23:59:59");
        this.lbTitleLogCash.string = "LU\u1ed2NG N\u1ea0P H\xd4M NAY";
        cc.log("Send GET_LOG_GAME:", Windown_1.Windown.SFSObjToJson(SFSObject));
        ConectManager_1.ConectManager.getIns().sendRequestToCallback(REQUEST_CODE_1.REQUEST_CODE.GET_LOG_GAME, SFSObject, this.responeLogCash.bind(this));
      };
      NewClass.prototype.getLogCardToday = function() {
        var SFSObject = ConectManager_1.ConectManager.getIns().getSFSObj();
        var dateToday = new Date();
        var dateStr = Windown_1.Windown.formatDate(dateToday, "yyyy-MM-dd");
        SFSObject.putUtfString("start", "2023-07-01 00:00:00");
        SFSObject.putUtfString("end", dateStr + " 23:59:59");
        SFSObject.putInt("idPlayer", 0);
        this.lbTitleLogCash.string = "LU\u1ed2NG N\u1ea0P H\xd4M NAY";
        cc.log("Send GET_LOG_CASH:", Windown_1.Windown.SFSObjToJson(SFSObject));
        ConectManager_1.ConectManager.getIns().sendRequestToCallback(REQUEST_CODE_1.REQUEST_CODE.GET_LOG_NAP_THE, SFSObject, this.respineLogCard.bind(this));
      };
      NewClass.prototype.getLogCashOutToday = function() {
        var SFSObject = ConectManager_1.ConectManager.getIns().getSFSObj();
        var dateToday = new Date();
        var dateStr = Windown_1.Windown.formatDate(dateToday, "yyyy-MM-dd");
        SFSObject.putUtfString("start", "2023-07-01 00:00:00");
        SFSObject.putUtfString("end", dateStr + " 23:59:59");
        SFSObject.putInt("idPlayer", 0);
        this.lbTitleLogCash.string = "LU\u1ed2NG R\xdaT MOMO";
        cc.log("Send GET_LOG_CASH:", Windown_1.Windown.SFSObjToJson(SFSObject));
        ConectManager_1.ConectManager.getIns().sendRequestToCallback(REQUEST_CODE_1.REQUEST_CODE.GET_LOG_DOI, SFSObject, this.responeLogCashOut.bind(this));
      };
      NewClass.prototype.responeLogCashOut = function(SFSObject) {
        cc.log("GET_LOG_DOI:", Windown_1.Windown.SFSObjToJson(SFSObject));
      };
      NewClass.prototype.responeLogCash = function(SFSObject) {
        cc.log("GET_LOG_CASH:", Windown_1.Windown.SFSObjToJson(SFSObject));
        var dataUser = JSON.parse(Windown_1.Windown.SFSObjToJson(SFSObject));
      };
      NewClass.prototype.respineLogCard = function(SFSObject) {
        cc.log("GET_LOG_NAP_THE:", Windown_1.Windown.SFSObjToJson(SFSObject));
        var dataUser = JSON.parse(Windown_1.Windown.SFSObjToJson(SFSObject));
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbTitleLogCash", void 0);
      __decorate([ property ], NewClass.prototype, "text", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../../Network/ConectManager": "ConectManager",
    "../../Windown": "Windown"
  } ],
  LogGameTabView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "99aa9OVrudL/JtEyvgbhJxA", "LogGameTabView");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var REQUEST_CODE_1 = require("../../DefineTs/REQUEST_CODE");
    var ConectManager_1 = require("../../Network/ConectManager");
    var Windown_1 = require("../../Windown");
    var PageData_1 = require("../PageData/PageData");
    var ItemLogGame_1 = require("./ItemLogGame");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LogGameTabView = function(_super) {
      __extends(LogGameTabView, _super);
      function LogGameTabView() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbTitleLogCash = null;
        _this.lbTotalIn = null;
        _this.lbTotalOut = null;
        _this.lbTotal = null;
        _this.pageDate = null;
        _this.maxRow = 7;
        _this.nodeBtnSortType = null;
        _this.tglSortType = null;
        _this.edbStart = null;
        _this.edbEnd = null;
        return _this;
      }
      LogGameTabView.prototype.onEnable = function() {
        cc.log("getLogGameToday");
        this.getLogGameToday();
      };
      LogGameTabView.prototype.getLogGameToday = function() {
        var SFSObject = ConectManager_1.ConectManager.getIns().getSFSObj();
        var dateToday = new Date();
        var dateStr = Windown_1.Windown.formatDate(dateToday, "yyyy-MM-dd");
        SFSObject.putUtfString("start", dateStr + " 00:00:00");
        SFSObject.putUtfString("end", dateStr + " 23:59:59");
        this.lbTitleLogCash.string = "LOG GAME H\xd4M NAY";
        cc.log("Send GET_LOG_GAME:", Windown_1.Windown.SFSObjToJson(SFSObject));
        ConectManager_1.ConectManager.getIns().sendRequestToCallback(REQUEST_CODE_1.REQUEST_CODE.GET_LOG_GAME, SFSObject, this.responeLogGame.bind(this));
      };
      LogGameTabView.prototype.getLogYesterDay = function() {
        var SFSObject = ConectManager_1.ConectManager.getIns().getSFSObj();
        var dateToday = new Date();
        var dateEndStr = Windown_1.Windown.formatDate(dateToday, "yyyy-MM-dd");
        var dateYesterday = new Date(dateToday.setDate(dateToday.getDate() - 1));
        cc.log("dateYesterday:", dateYesterday.toString());
        var dateStartStr = Windown_1.Windown.formatDate(dateYesterday, "yyyy-MM-dd");
        SFSObject.putUtfString("start", dateStartStr + " 00:00:00");
        SFSObject.putUtfString("end", dateEndStr + " 23:59:59");
        this.lbTitleLogCash.string = "LOG GAME H\xd4M NAY";
        cc.log("Send GET_LOG_GAME:", Windown_1.Windown.SFSObjToJson(SFSObject));
        ConectManager_1.ConectManager.getIns().sendRequestToCallback(REQUEST_CODE_1.REQUEST_CODE.GET_LOG_GAME, SFSObject, this.responeLogGame.bind(this));
      };
      LogGameTabView.prototype.getLogWeek = function() {
        var SFSObject = ConectManager_1.ConectManager.getIns().getSFSObj();
        var dateToday = new Date();
        var first = dateToday.getDate() - dateToday.getDay() + 1;
        0 == dateToday.getDay() && (first = dateToday.getDate() - 6);
        var dateF = new Date(dateToday.setDate(first));
        var dateFirst = Windown_1.Windown.formatDate(dateF, "yyyy-MM-dd");
        var dateLast = Windown_1.Windown.formatDate(new Date(), "yyyy-MM-dd");
        SFSObject.putUtfString("start", dateFirst + " 00:00:00");
        SFSObject.putUtfString("end", dateLast + " 23:59:59");
        this.lbTitleLogCash.string = "Log Game Tu\u1ea7n N\xe0y(" + dateF.getDate() + "/" + (new Date(dateFirst).getMonth() + 1) + "->" + new Date().getDate() + "/" + (new Date().getMonth() + 1) + ")";
        ConectManager_1.ConectManager.getIns().sendRequestToCallback(REQUEST_CODE_1.REQUEST_CODE.GET_LOG_GAME, SFSObject, this.responeLogGame.bind(this));
      };
      LogGameTabView.prototype.getLogMonth = function() {
        var SFSObject = ConectManager_1.ConectManager.getIns().getSFSObj();
        var date = new Date(), y = date.getFullYear(), m = date.getMonth();
        var dateFirst = Windown_1.Windown.formatDate(new Date(y, m, 1), "yyyy-MM-dd");
        var dateLast = Windown_1.Windown.formatDate(new Date(y, m + 1, 0), "yyyy-MM-dd");
        SFSObject.putUtfString("start", dateFirst + " 00:00:00");
        SFSObject.putUtfString("end", dateLast + " 23:59:59");
        this.lbTitleLogCash.string = "NEW USER TRONG TH\xc1NG " + (date.getMonth() + 1);
        ConectManager_1.ConectManager.getIns().sendRequestToCallback(REQUEST_CODE_1.REQUEST_CODE.GET_LOG_GAME, SFSObject, this.responeLogGame.bind(this));
      };
      LogGameTabView.prototype.responeLogGame = function(SFSObject) {
        cc.log("GET_LOG_DOI:", Windown_1.Windown.SFSObjToJson(SFSObject));
        this.listData = SFSObject.getSFSArray("listData");
        this.listAllData = SFSObject.getSFSArray("listData");
        this.initWithListData(this.listData);
        cc.log("listData=" + this.listData.size());
      };
      LogGameTabView.prototype.initWithListData = function(listData) {
        var lengthRows = listData.size();
        var totalPage = Math.floor(lengthRows / this.maxRow);
        lengthRows % this.maxRow > 0 && totalPage++;
        0 == totalPage && (totalPage = 1);
        this.pageDate.setTotalPage(totalPage);
        this.onChangePage(1);
        var totalIn = 0;
        var totalOut = 0;
        var total = 0;
        for (var i = 0; i < this.listData.size(); i++) {
          var dataa = this.listData.getSFSObject(i);
          totalIn += dataa.getLong("moneyIn");
          totalOut += dataa.getLong("moneyOut");
          total += dataa.getLong("moneyTotal");
        }
        this.lbTotalIn.string = Windown_1.Windown.formatMoney(totalIn);
        this.lbTotalOut.string = Windown_1.Windown.formatMoney(totalOut);
        this.lbTotal.string = (total >= 0 ? "" : "-") + Windown_1.Windown.formatMoney(Math.abs(total));
        this.lbTotal.node.color = total >= 0 ? cc.Color.WHITE : cc.Color.RED;
      };
      LogGameTabView.prototype.onChangePage = function(index) {
        var parent = this.pageDate.content;
        var child = parent.children;
        var itemTemplate = child[0];
        var start = (index - 1) * this.maxRow;
        for (var i = 0, l = this.maxRow; i < l; i++) {
          var node = child[i];
          if (start < this.listData.size()) {
            if (null == node) {
              node = cc.instantiate(itemTemplate);
              parent.addChild(node);
              node.y = -(i + 1) * node.height + node.height / 2;
            }
            var sfsObj = this.listData.getSFSObject(start);
            node.getComponent(ItemLogGame_1.default).initItem(sfsObj);
            node.active = true;
            start++;
          } else {
            if (!node) break;
            node.active = false;
          }
        }
      };
      LogGameTabView.prototype.showSortTypeLog = function() {
        var listType = [ 34, 35, 37, 40, 38, 39, 41, 50, 107, 114, 105, 104, 103, 106, 111, 115, 100, 101 ];
        if (1 == this.nodeBtnSortType.childrenCount) for (var i = 0; i < listType.length; i++) {
          var item = this.nodeBtnSortType.children[i];
          if (!cc.isValid(item)) {
            item = cc.instantiate(this.nodeBtnSortType.children[0]);
            item.parent = this.nodeBtnSortType;
          }
          cc.find("Background/Label", item).getComponent(cc.Label).string = this.getTypeLog(listType[i]);
          item.getComponent(cc.Button).clickEvents[0].customEventData = listType[i] + "";
        }
      };
      LogGameTabView.prototype.onClickSortCustomTime = function() {
        if ("" == this.edbStart.string || "" == this.edbEnd.string) {
          Windown_1.Windown.UIManager.showAlertMini("Vui l\xf2ng nh\u1eadp \u0111\u1ee7 th\xf4ng tin!");
          return;
        }
        var SFSObject = ConectManager_1.ConectManager.getIns().getSFSObj();
        SFSObject.putUtfString("start", this.edbStart.string + " 00:00:00");
        SFSObject.putUtfString("end", this.edbEnd.string + " 23:59:59");
        this.lbTitleLogCash.string = "LOG GAME(" + this.edbStart.string + "->" + this.edbEnd.string + ")";
        cc.log("Send GET_LOG_GAME:", Windown_1.Windown.SFSObjToJson(SFSObject));
        ConectManager_1.ConectManager.getIns().sendRequestToCallback(REQUEST_CODE_1.REQUEST_CODE.GET_LOG_GAME, SFSObject, this.responeLogGame.bind(this));
      };
      LogGameTabView.prototype.getTypeLog = function(type) {
        switch (type) {
         case 34:
          return "\u0110i\xeau Thuy\u1ec1n";

         case 35:
          return "Wukong";

         case 37:
          return "Neko";

         case 40:
          return "Kong";

         case 38:
          return "T\xe0i X\u1ec9u";

         case 39:
          return "M\u1eb7t tr\u1eddi";

         case 41:
          return "Baccarat";

         case 50:
          return "Ti\u1ebfn L\xean";

         case 107:
          return "Admin Send";

         case 114:
          return "VQMM";

         case 105:
          return "SV get Cashout";

         case 104:
          return "Pay Momo";

         case 103:
          return "Pay Card";

         case 106:
          return "Refund Error Cashout";

         case 111:
          return "Verify Tele";

         case 115:
          return "Piggy";

         case 100:
          return "Giftcode";

         case 101:
          return "Nhi\u1ec7m V\u1ee5";
        }
      };
      LogGameTabView.prototype.onClickSort = function(even, data) {
        cc.log("dataSOrt=" + data);
        this.tglSortType.isChecked = false;
        var listSort = ConectManager_1.ConectManager.getIns().getSFSArray();
        for (var i = 0; i < this.listAllData.size(); i++) {
          var dataa = this.listAllData.getSFSObject(i);
          parseInt(data) == dataa.getInt("type") && listSort.addSFSObject(dataa);
        }
        this.listData = listSort;
        this.initWithListData(this.listData);
      };
      __decorate([ property(cc.Label) ], LogGameTabView.prototype, "lbTitleLogCash", void 0);
      __decorate([ property(cc.Label) ], LogGameTabView.prototype, "lbTotalIn", void 0);
      __decorate([ property(cc.Label) ], LogGameTabView.prototype, "lbTotalOut", void 0);
      __decorate([ property(cc.Label) ], LogGameTabView.prototype, "lbTotal", void 0);
      __decorate([ property(PageData_1.default) ], LogGameTabView.prototype, "pageDate", void 0);
      __decorate([ property(cc.Node) ], LogGameTabView.prototype, "nodeBtnSortType", void 0);
      __decorate([ property(cc.Toggle) ], LogGameTabView.prototype, "tglSortType", void 0);
      __decorate([ property(cc.EditBox) ], LogGameTabView.prototype, "edbStart", void 0);
      __decorate([ property(cc.EditBox) ], LogGameTabView.prototype, "edbEnd", void 0);
      LogGameTabView = __decorate([ ccclass ], LogGameTabView);
      return LogGameTabView;
    }(cc.Component);
    exports.default = LogGameTabView;
    cc._RF.pop();
  }, {
    "../../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../../Network/ConectManager": "ConectManager",
    "../../Windown": "Windown",
    "../PageData/PageData": "PageData",
    "./ItemLogGame": "ItemLogGame"
  } ],
  MainView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2e4aciY5iJFhZZI8ZQ9Q4KF", "MainView");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EVENT_MANAGER_1 = require("./DefineTs/EVENT_MANAGER");
    var REQUEST_CODE_1 = require("./DefineTs/REQUEST_CODE");
    var ConectManager_1 = require("./Network/ConectManager");
    var Windown_1 = require("./Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MainView = function(_super) {
      __extends(MainView, _super);
      function MainView() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.TabHome = null;
        _this.TabCheckUser = null;
        _this.TabLogGame = null;
        _this.TabLogCash = null;
        _this.lbName = null;
        _this.btnLogout = null;
        _this.nodeLogin = null;
        _this.imgAvatar = null;
        _this.spBanNgay = null;
        _this.spBanDem = null;
        _this.spMain = null;
        _this.listTkErr = [];
        return _this;
      }
      MainView.prototype.onDisable = function() {};
      MainView.prototype.onLoad = function() {
        Windown_1.Windown.MainView = this;
        cc.find("info", this.node).active = false;
        this.showNodeLogin();
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.onConnect, this.onConnect, this);
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.onDisconnect, this.onLogout, this);
        this.TabHome.active = true;
        this.TabCheckUser.active = this.TabLogGame.active = this.TabLogCash.active = false;
      };
      MainView.prototype.onDestroy = function() {
        cc.systemEvent.targetOff(this);
        Windown_1.Windown.MainView = null;
      };
      MainView.prototype.start = function() {
        var now = new Date();
        var hour = now.getHours();
        this.spMain.spriteFrame = hour >= 19 || hour < 5 ? this.spBanDem : this.spBanNgay;
        this.node.setContentSize(cc.winSize);
        null != Windown_1.Windown.getDeviceID() && ConectManager_1.ConectManager.getIns().checkConnectAndConnect();
        var list = [];
        Windown_1.Windown.User.isLogin ? this.initUIUser() : null != Windown_1.Windown.getDeviceID() && ConectManager_1.ConectManager.getIns().checkConnectAndConnect();
      };
      MainView.prototype.initUIUser = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            this.lbName.string = Windown_1.Windown.User.nickName;
            this.hideNodeLogin();
            cc.find("info", this.node).active = true;
            this.updateAvatar(Windown_1.Windown.SFSInfouser);
            cc.systemEvent.emit(EVENT_MANAGER_1.EVENT_MANAGER.LEVEL_UP);
            ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.GetAccountBlance, null);
            Windown_1.Windown.HomeTabView.node.active = true;
            Windown_1.Windown.HomeTabView.getCCU();
            return [ 2 ];
          });
        });
      };
      MainView.prototype.onConnect = function() {
        if (Windown_1.Windown.isFirtConnect && null == Windown_1.Windown.BotController) {
          var isDangNhap = Windown_1.Windown.getLocalStorage("autoLogin");
          if (isDangNhap && "true" == isDangNhap) {
            var userName = Windown_1.Windown.getLocalStorage("userName");
            var password = Windown_1.Windown.getLocalStorage("userPass");
            userName && "" != userName && password && "" != password && ConectManager_1.ConectManager.getIns().sendLogin(userName, password, "");
          }
        }
        Windown_1.Windown.isFirtConnect = false;
      };
      MainView.prototype.showNodeLogin = function() {
        this.nodeLogin.active = true;
        var container = this.nodeLogin.getChildByName("Container");
        cc.Tween.stopAllByTarget(container);
        cc.tween(container).to(.3, {
          x: -cc.winSize.width / 2 + container.width
        }, {
          easing: cc.easing.sineOut
        }).call(function() {}).start();
      };
      MainView.prototype.hideNodeLogin = function() {
        var _this = this;
        var container = this.nodeLogin.getChildByName("Container");
        cc.Tween.stopAllByTarget(container);
        cc.tween(container).to(.3, {
          x: -cc.winSize.width / 2
        }, {
          easing: cc.easing.sineIn
        }).call(function() {
          _this.nodeLogin.active = false;
        }).start();
      };
      MainView.prototype.updateAvatar = function(Object) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            Windown_1.Windown.updateAvatar(Object, this.imgAvatar);
            return [ 2 ];
          });
        });
      };
      MainView.prototype.onLogout = function() {
        Windown_1.Windown.UIManager.hideLoading();
        Windown_1.Windown.UIManager.hideLoadingData();
        cc.find("info", this.node).active = false;
        this.btnLogout.active = false;
        this.showNodeLogin();
      };
      MainView.prototype.onClickDangNhap = function() {
        Windown_1.Windown.UIManager.showDangNhap();
      };
      MainView.prototype.onClickDangKy = function() {
        Windown_1.Windown.getDeviceID();
        Windown_1.Windown.UIManager.showDangKy();
      };
      MainView.prototype.onClickTuiDo = function() {
        Windown_1.Windown.UIManager.showTuiDo();
      };
      MainView.prototype.onClickCuaHang = function() {
        Windown_1.Windown.UIManager.showCuaHang();
      };
      MainView.prototype.onClickThoat = function() {
        if (cc.sys.isNative) ; else {
          var url = new URL(window.location.toString());
          var searchParams = new URLSearchParams(url.search);
          var token = searchParams.get("token");
          null == token || "" == token || this.listTkErr.includes(token) || this.listTkErr.push(token);
        }
        Windown_1.Windown.isClickBtnLogout = true;
        Windown_1.Windown.setLocalStorage("userName", "");
        Windown_1.Windown.setLocalStorage("userPass", "");
        Windown_1.Windown.setLocalStorage("isLogInPlayNow", "false");
        Windown_1.Windown.setLocalStorage("isLogInFb", "false");
        ConectManager_1.ConectManager.getIns().sendLogout();
      };
      MainView.prototype.onClickJoinLobbyView = function(event, data, isForcePlay) {
        return __awaiter(this, void 0, void 0, function() {
          var sfsObj;
          return __generator(this, function(_a) {
            sfsObj = ConectManager_1.ConectManager.getIns().getSFSObj();
            sfsObj.putInt("gameType", parseInt(data));
            Windown_1.Windown.UIManager.currentGameId = parseInt(data);
            ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.GETLISTMARKGAME, sfsObj);
            return [ 2 ];
          });
        });
      };
      MainView.prototype.onClickTab = function(even, data) {
        this.TabHome.active = this.TabCheckUser.active = this.TabLogGame.active = this.TabLogCash.active = false;
        switch (data) {
         case "TabHome":
          this.TabHome.active = true;
          break;

         case "TabCheckUser":
          this.TabCheckUser.active = true;
          break;

         case "TabLogGame":
          this.TabLogGame.active = true;
          break;

         case "TabLogCash":
          this.TabLogCash.active = true;
        }
      };
      __decorate([ property(cc.Node) ], MainView.prototype, "TabHome", void 0);
      __decorate([ property(cc.Node) ], MainView.prototype, "TabCheckUser", void 0);
      __decorate([ property(cc.Node) ], MainView.prototype, "TabLogGame", void 0);
      __decorate([ property(cc.Node) ], MainView.prototype, "TabLogCash", void 0);
      __decorate([ property(cc.Label) ], MainView.prototype, "lbName", void 0);
      __decorate([ property(cc.Node) ], MainView.prototype, "btnLogout", void 0);
      __decorate([ property(cc.Node) ], MainView.prototype, "nodeLogin", void 0);
      __decorate([ property(cc.Sprite) ], MainView.prototype, "imgAvatar", void 0);
      __decorate([ property(cc.SpriteFrame) ], MainView.prototype, "spBanNgay", void 0);
      __decorate([ property(cc.SpriteFrame) ], MainView.prototype, "spBanDem", void 0);
      __decorate([ property(cc.Sprite) ], MainView.prototype, "spMain", void 0);
      MainView = __decorate([ ccclass ], MainView);
      return MainView;
    }(cc.Component);
    exports.default = MainView;
    cc._RF.pop();
  }, {
    "./DefineTs/EVENT_MANAGER": "EVENT_MANAGER",
    "./DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "./Network/ConectManager": "ConectManager",
    "./Windown": "Windown"
  } ],
  MakeDelay: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "00435LXTBZF2bxZ8m0r8djZ", "MakeDelay");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ObjMakeDelay_1 = require("./ObjMakeDelay");
    var MakeDelay = function() {
      function MakeDelay(node) {
        this.mapMakeDelay = null;
        this.target = node;
        this.mapMakeDelay = new Map();
      }
      MakeDelay.prototype.getDelay = function(time) {
        var _this = this;
        var id = Date.now() + this.mapMakeDelay.size;
        var handle = function(resolve, rejects) {
          var fun = function() {
            resolve();
            _this.mapMakeDelay.delete(id);
          };
          _this.mapMakeDelay.set(id, fun);
          _this.target.scheduleOnce(fun, time);
        };
        return new ObjMakeDelay_1.default(this, new Promise(handle), id);
      };
      MakeDelay.prototype.cancaleDelay = function(id, isComplet) {
        var fun = this.mapMakeDelay.get(id);
        if (void 0 != fun) {
          this.target.unschedule(fun);
          isComplet && fun();
        }
      };
      MakeDelay.prototype.clear = function() {
        var _this = this;
        this.mapMakeDelay.forEach(function(v) {
          _this.target.unschedule(v);
        });
        this.mapMakeDelay.clear();
      };
      return MakeDelay;
    }();
    exports.default = MakeDelay;
    cc._RF.pop();
  }, {
    "./ObjMakeDelay": "ObjMakeDelay"
  } ],
  ModelLevel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3d27btqTYFIvLRg9fEQRkK4", "ModelLevel");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  MoneyUserController: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8ea7bDdjEBE4oJPmxGKeL9V", "MoneyUserController");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Windown_1 = require("../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MoneyUserController = function(_super) {
      __extends(MoneyUserController, _super);
      function MoneyUserController() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.listLabel = [];
        _this.moneyCache = 0;
        _this.objDelay = new Map();
        _this.listHandleNewMoney = [];
        return _this;
      }
      MoneyUserController.prototype.onLoad = function() {
        cc.game.addPersistRootNode(this.node);
        Windown_1.Windown.MoneyUser = this;
      };
      MoneyUserController.prototype.onDestroy = function() {
        Windown_1.Windown.MoneyUser = null;
      };
      MoneyUserController.prototype.emitNewMonney = function() {
        for (var i = 0, l = this.listLabel.length; i < l; i++) this.listLabel[i].emitNewMoney();
        this.listHandleNewMoney.forEach(function(v) {
          v["fun"].call(v["target"], Windown_1.Windown.User.userAg);
        });
      };
      MoneyUserController.prototype.dangKy = function(component) {
        this.listLabel.includes(component) || this.listLabel.push(component);
      };
      MoneyUserController.prototype.huyDangKy = function(component) {
        var index = this.listLabel.indexOf(component);
        index > -1 && this.listLabel.splice(index, 1);
      };
      MoneyUserController.prototype.subMoney = function(money, moneyPlayer) {
        this.moneyCache = moneyPlayer;
        this.updateMoney();
      };
      MoneyUserController.prototype.dangKyHandle = function(fun, target) {
        var obj = Object.create(null);
        obj.fun = fun;
        obj.target = target;
        this.listHandleNewMoney.push(obj);
      };
      MoneyUserController.prototype.removeHandle = function(fun, target) {
        var listFun = this.listHandleNewMoney.filter(function(e) {
          return e["target"] == target;
        });
        for (var i = 0; i < listFun.length; i++) if (listFun[i] == fun) {
          listFun.splice(i, 1);
          i--;
        }
      };
      MoneyUserController.prototype.targetOff = function(target) {
        var index = this.listHandleNewMoney.findIndex(function(v) {
          return v["target"] == target;
        });
        index > -1 && this.listHandleNewMoney.splice(index, 1);
      };
      MoneyUserController.prototype.pushDelayMoney = function(gameType, totalMoney, moneyAdd) {
        this.moneyCache = parseInt(totalMoney);
        var MoneyCacheByGame = this.objDelay.get(gameType);
        void 0 == MoneyCacheByGame && (MoneyCacheByGame = 0);
        this.objDelay.set(gameType, MoneyCacheByGame + moneyAdd);
        Windown_1.Windown.User.userAg = this.getMoneyCurrentWhitDelay();
      };
      MoneyUserController.prototype.removeDelay = function(gameType, isUpdate) {
        void 0 === isUpdate && (isUpdate = true);
        this.objDelay.delete(gameType);
        isUpdate && this.updateMoney();
      };
      MoneyUserController.prototype.getMoneyDelay = function(gameType) {
        return this.objDelay.get(gameType) || 0;
      };
      MoneyUserController.prototype.getMoneyCurrentWhitDelay = function() {
        var moneyDelay = 0;
        this.objDelay.forEach(function(v, k) {
          moneyDelay += v;
        });
        return this.moneyCache - moneyDelay;
      };
      MoneyUserController.prototype.updateMoney = function() {
        this.setMoneyUser(this.getMoneyCurrentWhitDelay());
      };
      MoneyUserController.prototype.endGameMOney = function(gameType) {
        this.removeDelay(gameType);
      };
      MoneyUserController.prototype.setMoneyUser = function(money) {
        Windown_1.Windown.User.userAg = money;
        this.emitNewMonney();
      };
      MoneyUserController = __decorate([ ccclass ], MoneyUserController);
      return MoneyUserController;
    }(cc.Component);
    exports.default = MoneyUserController;
    cc._RF.pop();
  }, {
    "../Windown": "Windown"
  } ],
  MoneyUser: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f9533HWoDRDeo/SqOYrNOro", "MoneyUser");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Windown_1 = require("../Windown");
    var LbMoneyChange_1 = require("./LbMoneyChange");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent;
    var MoneyUser = function(_super) {
      __extends(MoneyUser, _super);
      function MoneyUser() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbMoney = null;
        return _this;
      }
      MoneyUser.prototype.onLoad = function() {
        this.lbMoney = this.getComponent(LbMoneyChange_1.default);
        Windown_1.Windown.MoneyUser.dangKy(this);
      };
      MoneyUser.prototype.onDestroy = function() {
        Windown_1.Windown.MoneyUser && Windown_1.Windown.MoneyUser.huyDangKy(this);
      };
      MoneyUser.prototype.start = function() {
        cc.log("tien user la " + Windown_1.Windown.User.userAg);
        this.emitNewMoney();
      };
      MoneyUser.prototype.emitNewMoney = function() {
        this.lbMoney.setMoney(Windown_1.Windown.User.userAg);
      };
      MoneyUser = __decorate([ ccclass, requireComponent(LbMoneyChange_1.default) ], MoneyUser);
      return MoneyUser;
    }(cc.Component);
    exports.default = MoneyUser;
    cc._RF.pop();
  }, {
    "../Windown": "Windown",
    "./LbMoneyChange": "LbMoneyChange"
  } ],
  NativeCallJs: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5bdcdAH2d9OSZ/JQfjqimKA", "NativeCallJs");
    "use strict";
    cc._RF.pop();
  }, {} ],
  NotiNoHu: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f3d2a4TjIxICr0b4NyO33FZ", "NotiNoHu");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EVENT_MANAGER_1 = require("./DefineTs/EVENT_MANAGER");
    var PlayerPP_1 = require("./DefineTs/PlayerPP");
    var GAME_TYPE_1 = require("./Game/GAME_TYPE");
    var Windown_1 = require("./Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lbNickName = null;
        _this.lbTitle = null;
        _this.lbGold = null;
        _this.nodeMove = null;
        _this.vecStart = cc.v2(0, 446.454);
        _this.vecEnd = cc.v2(0, 272.254);
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        Windown_1.Windown.NotiNoHu = this;
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.CHANG_ROTATION, this.changeRotation, this);
      };
      NewClass.prototype.start = function() {
        this.changeRotation();
      };
      NewClass.prototype.changeRotation = function() {
        cc.log("nhay vao chan");
        if (Windown_1.Windown.UIManager.isVertical) {
          var offSet = (cc.winSize.width - 1280) / 2;
          this.node.x = -283.497 - offSet;
          this.node.y = 0;
          this.node.angle = 90;
        } else {
          var offSet = (cc.winSize.height - 720) / 2;
          this.node.y = offSet;
          this.node.x = 0;
          this.node.angle = 0;
        }
      };
      NewClass.prototype.show = function(SFSObject) {
        var _this = this;
        var money = SFSObject.getLong("MoneyRevice");
        var name = SFSObject.getUtfString(PlayerPP_1.PlayerPP.NickName);
        var gameTye = SFSObject.get("gameType");
        if (name == Windown_1.Windown.User.nickName) return;
        gameTye == GAME_TYPE_1.default.TruTien ? this.lbTitle.string = "N\u1ed5 H\u0169 Tru Ti\xean" : gameTye == GAME_TYPE_1.default.CaMap && (this.lbTitle.string = "N\u1ed5 H\u0169 Game C\xe1");
        this.nodeMove.active = true;
        this.lbNickName.string = name;
        this.lbGold.string = Windown_1.Windown.formatNumber(money);
        var nodeAc = this.nodeMove;
        nodeAc.stopAllActions();
        nodeAc.opacity = 0;
        nodeAc.setPosition(this.vecStart);
        nodeAc.runAction(cc.sequence(cc.spawn(cc.fadeIn(.5).easing(cc.easeSineIn()), cc.moveTo(.5, this.vecEnd).easing(cc.easeBackOut())), cc.delayTime(3), cc.fadeOut(1), cc.callFunc(function() {
          _this.nodeMove.active = false;
        })));
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbNickName", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbTitle", void 0);
      __decorate([ property(cc.Label) ], NewClass.prototype, "lbGold", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "nodeMove", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "./DefineTs/EVENT_MANAGER": "EVENT_MANAGER",
    "./DefineTs/PlayerPP": "PlayerPP",
    "./Game/GAME_TYPE": "GAME_TYPE",
    "./Windown": "Windown"
  } ],
  OSDefine: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8cb2c3okH5IBpHvDOVq+99E", "OSDefine");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var OSDefine = function() {
      function OSDefine() {}
      OSDefine.ANDROID = 1;
      OSDefine.IOS = 2;
      OSDefine.WEB_PC = 3;
      OSDefine.WEB_MOBILE = 4;
      OSDefine.OTHER = 5;
      return OSDefine;
    }();
    exports.default = OSDefine;
    cc._RF.pop();
  }, {} ],
  ObjMakeDelay: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fd6b9uFHRREBJcLo0LpzhKl", "ObjMakeDelay");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ObjMakeDelay = function() {
      function ObjMakeDelay(main, prosime, id) {
        this.id = null;
        this.main = main;
        this.prosime = prosime;
        this.id = id;
      }
      ObjMakeDelay.prototype.cancle = function(isComplet) {
        this.main.cancaleDelay(this.id, isComplet);
      };
      return ObjMakeDelay;
    }();
    exports.default = ObjMakeDelay;
    cc._RF.pop();
  }, {} ],
  OffMiniGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "774eeI3stFBorDJuC9anzCP", "OffMiniGame");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Windown_1 = require("../Windown");
    var DragMiniGame_1 = require("./DragMiniGame");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._isMoveBtnMiniGame = false;
        _this._isTouch = false;
        _this._v2OffsetChange = null;
        _this._isDrag = false;
        _this._isMiniSize = false;
        _this.offsetX = 0;
        _this.offsety = 0;
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        this.offsetX = cc.winSize.width / 2;
        this.offsety = cc.winSize.height / 2;
        this.node && this.node.setContentSize(cc.winSize);
      };
      NewClass.prototype._touchStart = function(touch) {
        Windown_1.Windown.UIManager.parentMiniGame.children.forEach(function(v) {
          var cp = v.getComponent(DragMiniGame_1.default);
          cp && cp.miniSize(false);
        });
        this.node.active = false;
      };
      NewClass.prototype.onEvent = function() {
        this.node.active = true;
        this.node.once(cc.Node.EventType.TOUCH_START, this._touchStart, this);
      };
      NewClass.prototype.onEnable = function() {
        this.funUpdate();
        cc.view.on("canvas-resize", this.funUpdate, this);
        window.addEventListener("orientationchange", this.funUpdate.bind(this));
      };
      NewClass.prototype.funUpdate = function() {
        this.node && this.node.setContentSize(cc.winSize);
      };
      NewClass.prototype.onDisable = function() {
        cc.view.targetOff(this);
        window.removeEventListener("orientationchange", this.funUpdate);
      };
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../Windown": "Windown",
    "./DragMiniGame": "DragMiniGame"
  } ],
  OpenDefaultAnimClip: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d97deEjoZFDkLh2lwo4b+w6", "OpenDefaultAnimClip");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.openClipName = "";
        return _this;
      }
      NewClass.prototype.start = function() {};
      NewClass.prototype.onEnable = function() {
        this.getComponent(cc.Animation).play(this.openClipName);
      };
      __decorate([ property ], NewClass.prototype, "openClipName", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  PageData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "23251wgkaFKa7D+TbypjVkG", "PageData");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ItemIndicator_1 = require("./ItemIndicator");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.parentIndicator = null;
        _this.content = null;
        _this.clickEvents = [];
        _this.currentIndexPage = 0;
        _this.totalPage = 0;
        _this.listItemIndecator = [];
        return _this;
      }
      NewClass.prototype.onLoad = function() {
        var _this = this;
        this.listItemIndecator = this.parentIndicator.getComponentsInChildren(ItemIndicator_1.default);
        this.listItemIndecator.forEach(function(v) {
          return v.setPage(_this);
        });
      };
      NewClass.prototype.start = function() {};
      NewClass.prototype.setTotalPage = function(numberTotalPage, isClickLast) {
        void 0 === isClickLast && (isClickLast = false);
        if (this.totalPage == numberTotalPage) return;
        this.totalPage = numberTotalPage;
        this.currentIndexPage = 1;
        var list = this.getListInvalitorValible();
        list[0].initIndex(1);
        list[list.length - 1].initIndex(this.totalPage);
        this.resetAllIndicator();
        this.setupIndicator();
        this.setCheckItem();
        this.checkTotalPage();
        isClickLast && this.listItemIndecator[this.listItemIndecator.length - 1].onClick(null, null);
      };
      NewClass.prototype.getListInvalitorValible = function() {
        return this.totalPage < 7 ? this.listItemIndecator.slice(0, this.totalPage) : this.listItemIndecator;
      };
      NewClass.prototype.checkTotalPage = function() {
        this.listItemIndecator.forEach(function(v) {
          return v.node.active = true;
        });
        if (this.totalPage < 7) for (var i = this.totalPage, l = this.listItemIndecator.length; i < l; i++) this.listItemIndecator[i].node.active = false; else this.listItemIndecator.forEach(function(v) {
          return v.node.active = true;
        });
      };
      NewClass.prototype.setupIndicator = function() {
        var list = this.getListInvalitorValible();
        if (this.totalPage < 7) {
          var count_1 = 1;
          list.forEach(function(v) {
            v.initIndex(count_1);
            count_1++;
          });
        } else {
          var listTemp = list.slice(1, 6);
          var indexStart = this.currentIndexPage - 2;
          indexStart < 2 && (indexStart = 2);
          indexStart + 5 > this.totalPage - 1 && (indexStart = this.totalPage - 5);
          for (var i = 0, l = listTemp.length; i < l; i++) {
            var v = listTemp[i];
            0 == i ? indexStart > 2 ? v.initIndex(-1) : v.initIndex(indexStart) : i == l - 1 && indexStart < this.totalPage - 1 ? v.initIndex(-1) : v.initIndex(indexStart);
            indexStart++;
          }
        }
      };
      NewClass.prototype.setCheckItem = function() {
        for (var temp in this.listItemIndecator) {
          var v = this.listItemIndecator[temp];
          if (v.getIndex() == this.currentIndexPage) {
            v.setCheck(true);
            break;
          }
        }
      };
      NewClass.prototype.resetAllIndicator = function() {
        this.listItemIndecator.forEach(function(v) {
          return v.setCheck(false);
        });
      };
      NewClass.prototype.onClickIndicator = function(index) {
        if (-1 == index) return;
        index > this.totalPage ? index = this.totalPage : index < 1 && (index = 1);
        if (this.currentIndexPage == index) return;
        this.currentIndexPage = index;
        cc.Component.EventHandler.emitEvents(this.clickEvents, this.currentIndexPage);
        this.resetAllIndicator();
        this.setupIndicator();
        this.setCheckItem();
      };
      NewClass.prototype.reset = function() {
        this.currentIndexPage = 1;
      };
      NewClass.prototype.onClickNext = function() {
        this.onClickIndicator(this.currentIndexPage + 1);
      };
      NewClass.prototype.onClickPre = function() {
        this.onClickIndicator(this.currentIndexPage - 1);
      };
      __decorate([ property(cc.Node) ], NewClass.prototype, "parentIndicator", void 0);
      __decorate([ property(cc.Node) ], NewClass.prototype, "content", void 0);
      __decorate([ property(cc.Component.EventHandler) ], NewClass.prototype, "clickEvents", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "./ItemIndicator": "ItemIndicator"
  } ],
  PageViewEvent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8396bFSQlRCuYH+Y5GCxSPB", "PageViewEvent");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Windown_1 = require("../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.pageView = null;
        _this.funScroolPage = null;
        return _this;
      }
      NewClass.prototype.start = function() {
        this.funChangePage();
      };
      NewClass.prototype.funChangePage = function() {
        var _this = this;
        var indexNext = this.pageView.getCurrentPageIndex() + 1;
        indexNext >= this.pageView.getPages().length && (indexNext = 0);
        this.unschedule(this.funScroolPage);
        this.scheduleOnce(this.funScroolPage = function() {
          _this.pageView.scrollToPage(indexNext, .5);
        }, 5);
      };
      NewClass.prototype.onChangePage = function(event, data) {
        this.funChangePage();
      };
      NewClass.prototype.onClick = function() {
        if (0 == this.pageView.getCurrentPageIndex()) {
          cc.log("chay vao day na");
          cc.sys.openURL(Windown_1.Windown.LinkEventfanpage);
        } else Windown_1.Windown.UIManager.showSuKien(this.pageView.getCurrentPageIndex() + 1);
      };
      __decorate([ property(cc.PageView) ], NewClass.prototype, "pageView", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../Windown": "Windown"
  } ],
  PathResource: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c04a2ckdZFFVL3KuPJqmogw", "PathResource");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PathResource = void 0;
    var PathResource = function() {
      function PathResource() {}
      PathResource.ItemLobbyView = "PrefabsItemPopup/ItemLobbyView";
      PathResource.LobbyView = "Popup/LobbyView";
      PathResource.BtnGame = "PrefabsPopup/BtnGame";
      PathResource.QuestItem = "Img/Qeust/%d";
      PathResource.Avatar = "Img/Avatar/%d";
      PathResource.DangNhap = "Popup/DangNhap";
      PathResource.DangKy = "Popup/DangKy";
      PathResource.HomThu = "Popup/HomThu";
      PathResource.NhiemVu = "Popup/NhiemVu";
      PathResource.SuKien = "Popup/SuKien";
      PathResource.ThongTin = "Popup/ThongTin";
      PathResource.DoiAva = "Popup/DoiAvatar";
      PathResource.DoiTrangThai = "Popup/DoiTrangThai";
      PathResource.CaiDat = "Popup/CaiDat";
      PathResource.TangCap = "Popup/TangCap";
      PathResource.ReviceItem = "Popup/ReviceItem";
      PathResource.BonusNap = "Popup/BonusNap";
      PathResource.ShopView = "Popup/Shop";
      PathResource.XepHang = "Popup/XepHang";
      PathResource.CropImgAva = "Popup/CropImgAva";
      PathResource.HoTro = "Popup/HoTro";
      PathResource.CapNhatTaiKhoan = "Popup/CapNhatTaiKhoan";
      PathResource.LichSuGiaoDich = "Popup/LichSuGiaoDich";
      PathResource.WindownChat = "Popup/WindownChat";
      PathResource.ItemMoveIconChat = "Popup/ItemMoveIconChat";
      PathResource.ItemRemoveChat = "Popup/ItemRemoveChat";
      PathResource.XacThucTele = "Popup/XacThucTele";
      PathResource.VongQuay = "Popup/VongQuay";
      PathResource.ImgChat = "Popup/ImgChat";
      PathResource.QuickShop = "Popup/QuickShop";
      PathResource.TietKiem = "Popup/TietKiem";
      PathResource.TuiDo = "Popup/TuiDo";
      PathResource.CuaHang = "Popup/CuaHang";
      PathResource.EffectTakeCoin = "Popup/NodeTakeCoin";
      PathResource.HelpCaMap = "Prefabs/HelpCaMap";
      PathResource.CamMay = "Prefabs/CamMay";
      PathResource.MenuIngame = "Popup/MenuInGame";
      PathResource.QuickChat = "Popup/QuickChat";
      PathResource.BubbleChat = "Popup/BubbleChat";
      PathResource.InfoPlayerView = "Popup/InGame/InfoPlayerView";
      return PathResource;
    }();
    exports.PathResource = PathResource;
    cc._RF.pop();
  }, {} ],
  PathSound: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0313bMypgNFUrKjVcboztmN", "PathSound");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PathSound = void 0;
    var PathSound = function() {
      function PathSound() {}
      PathSound.EndToNho = "Sound/SangHao";
      PathSound.Hu = "Sound/Hu'";
      PathSound.NenToNho = "Sound/NhacNenToNho";
      PathSound.RandomNumber = "Sound/RandomSo";
      PathSound.TiengCuoi = "Sound/TiengCuoi";
      PathSound.NhacVeVang = "Sound/NhacVeVang";
      PathSound.CauNoiKhiVeVang = "Sound/CauNoiKhiVeVang";
      PathSound.TiengNo = "Sound/TiengNo";
      PathSound.ToNhoX7mp3 = "Sound/ToNhoX7mp3";
      PathSound.TuNaiXa = "Sound/TuNaiXa`";
      PathSound.StartXmutilToNho = "Sound/StartXmutilToNho";
      PathSound.Ting = "Sound/Ting";
      PathSound.Ting2 = "Sound/Ting2";
      PathSound.SpinNormal = "Sound/SpinNormal";
      PathSound.SpinSpecial = "Sound/SpinSpecial";
      PathSound.NextSoXo = "Sound/NextSoXo";
      PathSound.BatDauQuayTraDiem = "Sound/BatDauQuayTraDiem";
      PathSound.CauNoiTraDiem = "Sound/CauNoiTraDiem";
      PathSound.CauNoiTraDiemXong = "Sound/CauNoiTraDiemXong";
      PathSound.NhacNenTraDiem = "Sound/NhacNenTraDiem";
      PathSound.NhacQuayXoSo = "Sound/NhacQuayXoSo";
      PathSound.ShowResultXoSo = "Sound/ShowResultXoSo";
      PathSound.ShowHeSoRandom = "Sound/ShowHeSoRandom";
      PathSound.MauDo = "Sound/MauDo";
      PathSound.MauVang = "Sound/MauVang";
      PathSound.MauXanhLa = "Sound/MauXanhLa";
      PathSound.XaPe = "Sound/XaPe";
      PathSound.MiOLa = "Sound/MiOLa";
      PathSound.CuocKhungHoang = "Sound/CuocKhungHoang";
      PathSound.VuiMung = "Sound/VuiMung";
      PathSound.DonDap = "Sound/DonDap";
      PathSound.Gong = "Sound/Gong";
      PathSound.Yabe = "Sound/Yabe";
      PathSound.CongTien = "Sound/CongTien";
      PathSound.XiPe = "Sound/XiPe";
      PathSound.CauNoiX3Luon = "Sound/CauNoiX3Luon";
      PathSound.AtOhh = "Sound/AtOhh";
      PathSound.Item = [ "Sound/Item/ItemTao", "Sound/Item/ItemCam", "Sound/Item/ItemMangCau", "Sound/Item/ItemChuong", "Sound/Item/ItemDua", "Sound/Item/ItemSao", "Sound/Item/ItemSeven", "Sound/Item/ItemBar", "Sound/Item/ItemBar" ];
      PathSound.NoLienTuc = "Sound/NoLienTuc";
      PathSound.EffectAnRandomItemNhoSau = "Sound/EffectAnRandomItemNhoSau";
      PathSound.CauNoiAnTruoc1CuaX30 = "Sound/CauNoiAnTruoc1CuaX30";
      PathSound.TiengKen2 = "Sound/TiengKen2";
      PathSound.TiengKen1 = "Sound/TiengKen1";
      PathSound.Bip = "Sound/Bip";
      PathSound.CauNoiShowResultAnTruocX30 = "Sound/CauNoiShowResultAnTruocX30";
      PathSound.ItemChay1Vong = "Sound/ItemChay1Vong";
      PathSound.TiengNoVaChemKiem = "Sound/TiengNoVaChemKiem";
      PathSound.TiengRandomHesoAnTruocX30 = "Sound/TiengRandomHesoAnTruocX30";
      PathSound.StartDapChuot = "Sound/StartDapChuot";
      return PathSound;
    }();
    exports.PathSound = PathSound;
    cc._RF.pop();
  }, {} ],
  PlayerPP: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b865czr2ABA7oPB3fVGmqqG", "PlayerPP");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PlayerPP = void 0;
    var PlayerPP = function() {
      function PlayerPP() {}
      PlayerPP.AccountBalance = "AccountBalance";
      PlayerPP.IsLogin = "IsLogin";
      PlayerPP.CurrentGunId = "CurrentGunId";
      PlayerPP.SittingId = "SittingId";
      PlayerPP.AccountId = "AccountId";
      PlayerPP.LastLoginTime = "LastLoginTime";
      PlayerPP.UserName = "UserName";
      PlayerPP.NickName = "NickName";
      PlayerPP.ItemFish = "ItemFish";
      PlayerPP.Lucky = "Lucky";
      PlayerPP.Captcha = "Captcha";
      PlayerPP.ERR_MESSAGE = "errorMessage";
      PlayerPP.MESSAGE = "message";
      return PlayerPP;
    }();
    exports.PlayerPP = PlayerPP;
    cc._RF.pop();
  }, {} ],
  REQUEST_BONG_DEM: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9aef7Suul9KvYYyZ4ls/U7K", "REQUEST_BONG_DEM");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var REQUEST_BONG_DEM = function() {
      function REQUEST_BONG_DEM() {}
      REQUEST_BONG_DEM.CreatFish = "creatFishBongDem";
      REQUEST_BONG_DEM.ChangeGun = "chanGuneBongDem";
      return REQUEST_BONG_DEM;
    }();
    exports.default = REQUEST_BONG_DEM;
    cc._RF.pop();
  }, {} ],
  REQUEST_CODE: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cf5e0J4viBMnYhCLyYoW10x", "REQUEST_CODE");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.REQUEST_CODE = void 0;
    var REQUEST_CODE = function() {
      function REQUEST_CODE() {}
      REQUEST_CODE.SignUp = "signUp";
      REQUEST_CODE.Login = "login";
      REQUEST_CODE.LoginFb = "loginFb";
      REQUEST_CODE.LoginPlaynow = "loginPlaynow";
      REQUEST_CODE.UpdateAccount = "updateAccount";
      REQUEST_CODE.Logout = "forceLogout";
      REQUEST_CODE.BuyIn = "buyIn";
      REQUEST_CODE.JoinRoom = "joinRoom";
      REQUEST_CODE.GetIdJoinRoom = "getIdJoinRoom";
      REQUEST_CODE.JoinFishRoom = "joinFishRoom";
      REQUEST_CODE.OtherJoinFishRoom = "otherJoinFishRoom";
      REQUEST_CODE.PlayerLeaveFishRoom = "playerLeaveFishRoom";
      REQUEST_CODE.PlayerUsingItemFish = "playerUsingItemFish";
      REQUEST_CODE.IceAllFish = "iceAllFish";
      REQUEST_CODE.ChangeGunFish = "changeGunFish";
      REQUEST_CODE.LeaveRoom = "leaveRoom";
      REQUEST_CODE.BetToNho = "betToNho";
      REQUEST_CODE.MakeBet = "makeBet";
      REQUEST_CODE.GetListRoom = "getListRooms";
      REQUEST_CODE.SetConfig = "setConfig";
      REQUEST_CODE.GetTime = "getTime";
      REQUEST_CODE.GunAtack = "gunAtack";
      REQUEST_CODE.ChangeAvaInRoom = "changeAvaInRoom";
      REQUEST_CODE.FishColision = "fishColision";
      REQUEST_CODE.CreatFish = "creatFish";
      REQUEST_CODE.PingFish = "pingFish";
      REQUEST_CODE.RemoveListFish = "removeListFish";
      REQUEST_CODE.SetTimeFishEffect = "setTimeFishEffect";
      REQUEST_CODE.TakeGunSpecial = "takeGunSpecial";
      REQUEST_CODE.UsingGunSpecial = "usingGunSpecial";
      REQUEST_CODE.FishSpecialColision = "fishSpecialColision";
      REQUEST_CODE.InfoFishRoom = "infoFishRoom";
      REQUEST_CODE.NotFindFish = "notFindFish";
      REQUEST_CODE.RequestCaptcha = "requestCaptcha";
      REQUEST_CODE.GiftCode = "giftCode";
      REQUEST_CODE.GetAccountBlance = "getAccountBlance";
      REQUEST_CODE.Upacingame = "upacingame";
      REQUEST_CODE.GetEvent = "getEvent";
      REQUEST_CODE.GetQuest = "getQuestAll";
      REQUEST_CODE.GetQuestFinish = "getRewardQuest";
      REQUEST_CODE.Dialog = "dialog";
      REQUEST_CODE.ForceRestart = "forceRestart";
      REQUEST_CODE.Dangky = "$SignUp.Submit";
      REQUEST_CODE.ListRoom = "listRoom";
      REQUEST_CODE.OtherJoinRoom = "otherJoinRoom";
      REQUEST_CODE.OtherLeaveRoom = "otherLeaveRoom";
      REQUEST_CODE.GetMail = "getMail";
      REQUEST_CODE.GetAvatar = "getAvatar";
      REQUEST_CODE.DeleteMail = "delMail";
      REQUEST_CODE.ReadMail = "readMail";
      REQUEST_CODE.ChangeAvatar = "changeAvatar";
      REQUEST_CODE.ChangeStatus = "changeStatus";
      REQUEST_CODE.NotiJackpotFish = "notiJackpotFish";
      REQUEST_CODE.InfoJackpot = "infoJackpot";
      REQUEST_CODE.LvlUp = "lvlUp";
      REQUEST_CODE.GetInfo = "getInfoPlayer";
      REQUEST_CODE.GetConfigTranfer = "getConfigTranfer";
      REQUEST_CODE.GetConfigMomo = "getConfigMomo";
      REQUEST_CODE.GetConfigMomoTuan = "getConfigMomoTuan";
      REQUEST_CODE.GetConfigBank = "getConfigBank";
      REQUEST_CODE.GetListBank = "getListBank";
      REQUEST_CODE.HuyMomo = "huyMomo";
      REQUEST_CODE.HuyBank = "huyBank";
      REQUEST_CODE.GetRankWeek = "getRankWeek";
      REQUEST_CODE.GetRankMonth = "getRankMonth";
      REQUEST_CODE.GetRankLobby = "getRankLobby";
      REQUEST_CODE.CashInCardTuan = "cashInCardTuan";
      REQUEST_CODE.CashInCardNew = "cashInCardNew";
      REQUEST_CODE.CashOutCard = "cashOutCard";
      REQUEST_CODE.GetTranscationsShop = "getTranscationsShop";
      REQUEST_CODE.ReviceListItem = "reviceListItem";
      REQUEST_CODE.AddMail = "addMail";
      REQUEST_CODE.PING = "ping";
      REQUEST_CODE.GetHistoryRank = "getHistoryRank";
      REQUEST_CODE.UpdateQuest = "updateQuest";
      REQUEST_CODE.GetListAdminOnline = "getListAdminOnline";
      REQUEST_CODE.SendMessageToAdmin = "sendMessageToAdmin";
      REQUEST_CODE.GetListChat = "getListChat";
      REQUEST_CODE.VeryPhoneTele = "veryPhoneTele";
      REQUEST_CODE.TimeOutPlay = "timeOutPlay";
      REQUEST_CODE.LeaveRoomXeng = "leaveRoomXeng";
      REQUEST_CODE.SetMutiXeng = "setMutilXeng";
      REQUEST_CODE.GetConfigShopVip = "getConfigShopVip";
      REQUEST_CODE.ActiveAutoFish = "activeAutoFish";
      REQUEST_CODE.ActiveGunSet = "activeGunSet";
      REQUEST_CODE.TakeFirtLogin = "TFLI";
      REQUEST_CODE.SpinTruTien = "spinTruTien";
      REQUEST_CODE.SpinDieuThuyen = "spinDieuThuyen";
      REQUEST_CODE.SpinNgoKhong = "spinNgoKhong";
      REQUEST_CODE.SpinNeko = "spinNeKo";
      REQUEST_CODE.SpinInCa = "spinInCa";
      REQUEST_CODE.HistoryTruTien = "historyTruTien";
      REQUEST_CODE.HistoryDieuThuyen = "historyDieuThuyen";
      REQUEST_CODE.HistoryNgoKhong = "historyNgoKhong";
      REQUEST_CODE.HistoryNeko = "historyNeKo";
      REQUEST_CODE.HistoryInCa = "historyInCa";
      REQUEST_CODE.HistoryChiTietNeko = "historyInfoNeKo";
      REQUEST_CODE.HistoryChiTietInCa = "historyInfoInCa";
      REQUEST_CODE.REQUEST_GET_LastSpin_SLOT = "1_2";
      REQUEST_CODE.SelectTypeFree = "selectTypeFree";
      REQUEST_CODE.HuyDoiThe = "huyDoiThe";
      REQUEST_CODE.GetListBot = "getListBot";
      REQUEST_CODE.GetTietKiem = "getTietKiem";
      REQUEST_CODE.TakeTietKiem = "takeTietKiem";
      REQUEST_CODE.GetListBigWin = "getListBigWin";
      REQUEST_CODE.AddBigWin = "addBigWin";
      REQUEST_CODE.GetTuiDo = "getTuiDo";
      REQUEST_CODE.GetConfigCuaHang = "getConfigCuaHang";
      REQUEST_CODE.BuyItem = "buyItem";
      REQUEST_CODE.TXstartGame = "startGameTX";
      REQUEST_CODE.TXendGame = "andGameTX";
      REQUEST_CODE.TXbet = "betTX";
      REQUEST_CODE.TXinfoRoundBetOld = "infoRoundBetOldTX";
      REQUEST_CODE.TXhistoryGame = "historyGameTX";
      REQUEST_CODE.TXhistoryBet = "historyBetTX";
      REQUEST_CODE.TXtopGame = "topGameTX";
      REQUEST_CODE.TXinfoCurrentRoom = "infoCurrentRoomTX";
      REQUEST_CODE.TXinfoRoom = "infoRoomTX";
      REQUEST_CODE.TXChat = "chat";
      REQUEST_CODE.BCRPlayerInfo = "d7v";
      REQUEST_CODE.BCRInfoRoom = "infoRoom";
      REQUEST_CODE.BCRStartGame = "startGameB";
      REQUEST_CODE.BCREndGame = "endGameB";
      REQUEST_CODE.BCRBet = "bet";
      REQUEST_CODE.BCRHistoryBet = "historyBetBa";
      REQUEST_CODE.BCAutoExit = "atS";
      REQUEST_CODE.SpinMatTroi = "spinMatTroi";
      REQUEST_CODE.HistoryMatTroi = "historyMatTroi";
      REQUEST_CODE.HistoryChiTietMatTroi = "historyInfoMatTroi";
      REQUEST_CODE.GETLISTMARKGAME = "getListMarkGame";
      REQUEST_CODE.CREATETABLE = "crt";
      REQUEST_CODE.JOINPLAYNOW = "idr";
      REQUEST_CODE.FINDTABLE = "jid";
      REQUEST_CODE.INFOR_ROOM = "infoRoom";
      REQUEST_CODE.GET_CCU = "getCCU";
      REQUEST_CODE.GET_NRU = "getNRU";
      REQUEST_CODE.GET_INFO_USER = "findInfoUser";
      REQUEST_CODE.GET_LOG_GAME = "getLogGame";
      REQUEST_CODE.GET_LOG_NAP_THE = "getLogNapThe";
      REQUEST_CODE.GET_LOG_DOI = "getLogDoiThe";
      return REQUEST_CODE;
    }();
    exports.REQUEST_CODE = REQUEST_CODE;
    cc._RF.pop();
  }, {} ],
  SYSTEM_EVENT: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "da4e6bb4qxPg4WiDLPIpztl", "SYSTEM_EVENT");
    cc._RF.pop();
  }, {} ],
  SceneFish: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8ba71RWellO3os6akxryIo6", "SceneFish");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Windown_1 = require("../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      NewClass.prototype.start = function() {
        var _this = this;
        var gameType = Windown_1.Windown.User.currentGameId;
        var url = "";
        var componentGlobal = "";
        switch (gameType) {
         case Windown_1.Windown.GAME_TYPE.FISH_CA_MAP:
          url = "FishCaMap";
          componentGlobal = "FishCaMap";
          gameType = Windown_1.Windown.GAME_TYPE.FISH_CA_MAP;
        }
        cc.assetManager.loadBundle(gameType + "", function(err, bundle) {
          if (err) return;
          bundle.load(url, cc.Prefab, function(count, total) {
            Windown_1.Windown.UIManager.setPerData(count / total);
          }, function(err2, prefab) {
            Windown_1.Windown.UIManager.hideLoadingData();
            if (err2 || null == _this.node) return;
            var gameView = cc.instantiate(prefab);
            _this.node.addChild(gameView);
          });
        });
      };
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../Windown": "Windown"
  } ],
  ScrollViewControl: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d3bf2ynYYNEAq3Y2qXEUfH1", "ScrollViewControl");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var DIRECTION = cc.Enum({
      HORIZONTAL: 1,
      VERTICAL: 2
    });
    var ScrollViewControl = function(_super) {
      __extends(ScrollViewControl, _super);
      function ScrollViewControl() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.direction = DIRECTION.VERTICAL;
        _this.itemTemplate = null;
        _this.itemNodeTemplate = null;
        _this.scrollView = null;
        _this.itemHeight = 80;
        _this.itemWidth = 80;
        _this.spacing = 5;
        _this.totalCount = 0;
        _this.initCount = 20;
        _this.bufferZone = 500;
        _this.isLazyInit = false;
        _this.items = [];
        _this.updateTimer = 0;
        _this.updateInterval = .05;
        _this.lastContentPosY = 0;
        _this.lastContentPosX = 0;
        _this.initHeight = 0;
        _this.listItemRemove = [];
        _this.idKeys = [];
        _this.updateCallback = null;
        _this.setDataCb = null;
        _this.listItemData = [];
        return _this;
      }
      ScrollViewControl.prototype.onLoad = function() {};
      ScrollViewControl.prototype.start = function() {
        this.direction == DIRECTION.HORIZONTAL && (this.initCount = Math.floor(this.initCount * (cc.winSize.width / 1920)));
        if (null != this.itemNodeTemplate) {
          this.itemHeight = this.itemNodeTemplate.height;
          this.itemWidth = this.itemNodeTemplate.width;
        }
        this.initialize();
      };
      ScrollViewControl.prototype.setDataList = function(_updateCallback, _listItemData) {
        var _this = this;
        cc.log("setDataList");
        this.setDataCb = function() {
          _this.setDataList(_updateCallback, _listItemData);
        };
        this.updateCallback = _updateCallback;
        this.listItemData = _listItemData;
        this.totalCount = this.listItemData.length;
        this.direction == DIRECTION.VERTICAL ? this.scrollView.content.height = this.totalCount * (this.itemHeight + this.spacing) + this.spacing : this.scrollView.content.width = this.totalCount * (this.itemWidth + this.spacing) + this.spacing;
        if (0 === this.totalCount || this.totalCount <= this.items.length) for (var i = this.totalCount; i < this.items.length; i++) {
          this.listItemRemove.push(this.items[i]);
          this.items[i].parent = null;
          this.items.splice(i, 1);
          i--;
        } else for (var i = 0; i < this.listItemRemove.length; i++) {
          this.listItemRemove[i].active = false;
          this.items.push(this.listItemRemove[i]);
          this.listItemRemove[i].parent = this.scrollView.content;
          this.listItemRemove.splice(i, 1);
          i--;
        }
        if (this.direction == DIRECTION.VERTICAL) for (var i = 0; i < this.items.length; i++) {
          this.items[i].setPosition(0, -this.items[i].height * (.5 + i) - this.spacing * (i + 1));
          this.items[i].itemID = i;
          if (null !== this.updateCallback && i < this.listItemData.length) {
            this.listItemData[i]["index"] = i;
            this.updateCallback(this.items[i], this.listItemData[i]);
          }
        } else for (var i = 0; i < this.items.length; i++) {
          this.items[i].setPosition(this.items[i].width * (.5 + i) + this.spacing * (i + 1), 0);
          this.items[i].itemID = i;
          null !== this.updateCallback && null != this.listItemData[i] && this.updateCallback(this.items[i], this.listItemData[i]);
        }
      };
      ScrollViewControl.prototype.updateDataList = function(_listItemData) {
        this.listItemData = _listItemData;
        this.totalCount = this.listItemData.length;
        this.direction == DIRECTION.VERTICAL ? this.scrollView.content.height = this.totalCount * (this.itemHeight + this.spacing) + this.spacing : this.scrollView.content.width = this.totalCount * (this.itemWidth + this.spacing) + this.spacing;
      };
      ScrollViewControl.prototype.initialize = function() {
        this.direction == DIRECTION.VERTICAL ? this.scrollView.content.height = this.totalCount * (this.itemHeight + this.spacing) + this.spacing : this.scrollView.content.width = this.totalCount * (this.itemWidth + this.spacing) + this.spacing;
        for (var i = 0; i < this.initCount; ++i) {
          var item = void 0;
          if (cc.isValid(this.itemTemplate)) {
            item = cc.instantiate(this.itemTemplate);
            this.scrollView.content.addChild(item);
          } else if (0 == i) item = this.itemNodeTemplate; else if (cc.isValid(this.scrollView.content.children[i])) item = this.scrollView.content.children[i]; else {
            item = cc.instantiate(this.itemNodeTemplate);
            this.scrollView.content.addChild(item);
          }
          this.direction == DIRECTION.VERTICAL ? item.setPosition(0, -item.height * (.5 + i) - this.spacing * (i + 1)) : item.setPosition(item.width * (.5 + i) + this.spacing * (i + 1), 0);
          item["itemID"] = i;
          this.items.push(item);
        }
        this.listItemData.length > 0 && this.setDataCb();
      };
      ScrollViewControl.prototype.getPositionInView = function(item) {
        var worldPos = item.parent.convertToWorldSpaceAR(item.getPosition());
        var viewPos = this.scrollView.node.convertToNodeSpaceAR(worldPos);
        return viewPos;
      };
      ScrollViewControl.prototype.update = function(dt) {
        if (this.listItemData.length <= this.initCount) return;
        this.updateTimer += dt;
        if (this.updateTimer < this.updateInterval) return;
        this.updateTimer = 0;
        var items = this.items;
        var buffer = this.bufferZone;
        var isDown = false;
        var offset;
        if (this.direction == DIRECTION.VERTICAL) {
          isDown = this.scrollView.content.y < this.lastContentPosY;
          offset = (this.itemHeight + this.spacing) * items.length;
        } else {
          isDown = this.scrollView.content.x > this.lastContentPosX;
          offset = (this.itemWidth + this.spacing) * items.length;
        }
        for (var i = 0; i < items.length; ++i) {
          var viewPos = this.getPositionInView(items[i]);
          if (isDown) {
            if (this.direction == DIRECTION.VERTICAL) {
              if (viewPos.y < -buffer && items[i].y + offset < 0) {
                items[i].y = items[i].y + offset;
                var itemId = items[i].itemID - items.length;
                items[i].itemID = itemId;
                null !== this.updateCallback && this.updateCallback(items[i], this.listItemData[itemId]);
              }
            } else if (viewPos.x > buffer && items[i].x - offset > 0) {
              items[i].x = items[i].x - offset;
              var itemId = items[i].itemID - items.length;
              items[i].itemID = itemId;
              null !== this.updateCallback && this.updateCallback(items[i], this.listItemData[itemId]);
            }
          } else if (this.direction === DIRECTION.VERTICAL) {
            if (viewPos.y > buffer && items[i].y - offset > -this.scrollView.content.height) {
              items[i].y = items[i].y - offset;
              var itemId = items[i].itemID + items.length;
              items[i].itemID = itemId;
              null !== this.updateCallback && this.updateCallback(items[i], this.listItemData[itemId]);
            }
          } else if (viewPos.x < -buffer && items[i].x + offset < this.scrollView.content.width) {
            items[i].x = items[i].x + offset;
            var itemId = items[i].itemID + items.length;
            items[i].itemID = itemId;
            null !== this.updateCallback && this.updateCallback(items[i], this.listItemData[itemId]);
          }
        }
        this.lastContentPosY = this.scrollView.content.y;
        this.lastContentPosX = this.scrollView.content.x;
      };
      ScrollViewControl.prototype.setStateItem = function(state) {
        this.scrollView.content.children.forEach(function(item) {
          item.active = state;
        });
      };
      __decorate([ property({
        type: DIRECTION
      }) ], ScrollViewControl.prototype, "direction", void 0);
      __decorate([ property(cc.Prefab) ], ScrollViewControl.prototype, "itemTemplate", void 0);
      __decorate([ property(cc.Node) ], ScrollViewControl.prototype, "itemNodeTemplate", void 0);
      __decorate([ property(cc.ScrollView) ], ScrollViewControl.prototype, "scrollView", void 0);
      __decorate([ property ], ScrollViewControl.prototype, "itemHeight", void 0);
      __decorate([ property ], ScrollViewControl.prototype, "itemWidth", void 0);
      __decorate([ property ], ScrollViewControl.prototype, "spacing", void 0);
      __decorate([ property ], ScrollViewControl.prototype, "initCount", void 0);
      __decorate([ property ], ScrollViewControl.prototype, "bufferZone", void 0);
      __decorate([ property ], ScrollViewControl.prototype, "isLazyInit", void 0);
      ScrollViewControl = __decorate([ ccclass ], ScrollViewControl);
      return ScrollViewControl;
    }(cc.Component);
    exports.default = ScrollViewControl;
    cc._RF.pop();
  }, {} ],
  SoundLobby: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a71e1ecbjxLzYuT+K9IqjT1", "SoundLobby");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var AudioManager_1 = require("./Parent/AudioManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.coinVeTui = null;
        _this.tienRoi = null;
        _this.takeMoney = null;
        _this.cachCach = null;
        return _this;
      }
      NewClass.prototype.playClick = function() {
        this.playEffect(this.audios[0]);
      };
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "coinVeTui", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "tienRoi", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "takeMoney", void 0);
      __decorate([ property(cc.AudioClip) ], NewClass.prototype, "cachCach", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(AudioManager_1.default);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "./Parent/AudioManager": "AudioManager"
  } ],
  SoundManager1: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a3a7dXxeN1P3KfDtzqS3ipB", "SoundManager1");
    "use strict";
    exports.__esModule = true;
    exports["default"] = void 0;
    var objAudioClip = {};
    var objInterVal = {};
    var objAudioClipLoop = {};
    var listGameTypeOffMusic = [];
    var listGameTypeOffSound = [];
    var SoundManager1 = cc.Class({
      extends: cc.Component,
      properties: {
        isPlayingMusic: false
      },
      statics: {
        getIns: function getIns() {
          null == this.self && (this.self = new SoundManager1());
          return this.self;
        }
      },
      stopMusicBackground: function stopMusicBackground() {
        this.isPlayingMusic = false;
        if (null != this.currentCipMusicBackGround) {
          cc.log("Stop Bg Music======>DOne");
          cc.audioEngine.stop(this.currentCipMusicBackGround);
        }
      },
      playMusicBackground: function playMusicBackground(ResDefine, volume) {
        var _this = this;
        void 0 === volume && (volume = 1);
        this.isPlayingMusic = true;
        cc.loader.loadRes(ResDefine, cc.AudioClip, function(err, clip) {
          if (err) return;
          null != _this.currentCipMusicBackGround && cc.audioEngine.stop(_this.currentCipMusicBackGround);
          _this.isPlayingMusic && (_this.currentCipMusicBackGround = cc.audioEngine.play(clip, true, volume));
        });
      },
      playEffect: function playEffect(ResDefine, isLoop, volume) {
        var _this2 = this;
        void 0 === isLoop && (isLoop = false);
        void 0 === volume && (volume = 1);
        null == objInterVal[ResDefine] && (objInterVal[ResDefine] = true);
        var isCanStop = objInterVal[ResDefine];
        if (!isCanStop) return;
        cc.loader.loadRes(ResDefine, cc.AudioClip, function(err, clip) {
          if (err) return;
          null != objAudioClip[ResDefine] && cc.audioEngine.stop(objAudioClip[ResDefine]);
          clearTimeout(_this2.funInter);
          objAudioClip[ResDefine] = cc.audioEngine.play(clip, isLoop, volume);
          objInterVal[ResDefine] = false;
          _this2.funInter = setTimeout(function() {
            objInterVal[ResDefine] = true;
          }, 75);
        });
      },
      playEffectWithCallback: function playEffectWithCallback(ResDefine, callback, volume) {
        var _this3 = this;
        null == objInterVal[ResDefine] && (objInterVal[ResDefine] = true);
        var isCanStop = objInterVal[ResDefine];
        if (!isCanStop) return;
        cc.loader.loadRes(ResDefine, cc.AudioClip, function(err, clip) {
          if (err) {
            callback();
            return;
          }
          null != objAudioClip[ResDefine] && cc.audioEngine.stop(objAudioClip[ResDefine]);
          clearTimeout(_this3.funInter);
          objAudioClip[ResDefine] = cc.audioEngine.play(clip, false, volume);
          cc.audioEngine.setFinishCallback(objAudioClip[ResDefine], callback);
          objInterVal[ResDefine] = false;
          _this3.funInter = setTimeout(function() {
            objInterVal[ResDefine] = true;
          }, 75);
        });
      },
      stopEffect: function stopEffect(ResDefine) {
        null != objAudioClip[ResDefine] && cc.audioEngine.stop(objAudioClip[ResDefine]);
      },
      pasauseEffect: function pasauseEffect(ResDefine) {
        null != objAudioClip[ResDefine] && cc.audioEngine.pause(objAudioClip[ResDefine]);
      },
      resumeEffect: function resumeEffect(ResDefine) {
        null != objAudioClip[ResDefine] && cc.audioEngine.resume(objAudioClip[ResDefine]);
      },
      stopAll: function stopAll() {
        cc.audioEngine.stopAll();
        objAudioClip = {};
        objInterVal = {};
      }
    });
    var _default = SoundManager1;
    exports["default"] = _default;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {} ],
  StateReelSlot: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "86206jyhURJxJ5Y3BdhbxMb", "StateReelSlot");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var StateReelSlot = function() {
      function StateReelSlot() {}
      StateReelSlot.WAITING = 0;
      StateReelSlot.RUN = 1;
      StateReelSlot.CAN_STOP = 2;
      StateReelSlot.SHOW_EFFECT = 3;
      StateReelSlot.STOP = 4;
      StateReelSlot.NORMAL = 15;
      StateReelSlot.MAX_SPEED = 16;
      StateReelSlot.AUTO_SPIN = 17;
      StateReelSlot.FREE_SPIN = 18;
      return StateReelSlot;
    }();
    exports.default = StateReelSlot;
    cc._RF.pop();
  }, {} ],
  StringFormat: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ea42dti/DxEp7qU7N247527", "StringFormat");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.StringFormatFunction = void 0;
    var StringFormat = function() {
      function StringFormat() {}
      StringFormat.prototype.deal = function(value, format) {
        if ("" === format) return value;
        format = format.toLowerCase().trim();
        var match_func = format.match(/^[a-z|A-Z]+/gi);
        var match_num = format.match(/\d+$/gi);
        var func = "";
        var num;
        var res = "";
        match_func && (func = match_func[0]);
        match_num && (num = parseInt(match_num[0]));
        if ("number" == typeof value) switch (func) {
         case "int":
          res = this.int(value);
          break;

         case "fix":
          res = this.fix(value, num);
          break;

         case "kmbt":
          res = this.KMBT(value, null, num);
          break;

         case "per":
          res = this.per(value, num);
          break;

         case "sep":
          res = this.sep(value, num);
        } else {
          switch (func) {
           case "limit":
            res = this.limit(value, num);
          }
          res = value;
        }
        return res;
      };
      StringFormat.prototype.sep = function(value, isDot) {
        var num = Math.round(value).toString();
        return isDot ? num.replace(new RegExp("(\\d)(?=(\\d{3})+$)", "ig"), "$1.") : num.replace(new RegExp("(\\d)(?=(\\d{3})+$)", "ig"), "$1,");
      };
      StringFormat.prototype.time_m = function(value) {};
      StringFormat.prototype.time_s = function(value) {};
      StringFormat.prototype.time_ms = function(value) {};
      StringFormat.prototype.timeStamp = function(value) {
        return new Date(value).toString();
      };
      StringFormat.prototype.per = function(value, fd) {
        return Math.round(100 * value).toFixed(fd);
      };
      StringFormat.prototype.int = function(value) {
        return Math.round(value);
      };
      StringFormat.prototype.fix = function(value, fd) {
        return value.toFixed(fd);
      };
      StringFormat.prototype.limit = function(value, count) {
        return value.substring(0, count);
      };
      StringFormat.prototype.KMBT = function(value, lang, num) {
        void 0 === lang && (lang = "en");
        void 0 === num && (num = 2);
        var counts = [ 1e3, 1e6, 1e9, 1e12 ];
        var units = [ "", "K", "M", "B", "T" ];
        switch (lang) {
         case "zh":
          var counts_1 = [ 1e4, 1e8, 1e12, 1e16 ];
          var units_1 = [ "", "\u4e07", "\u4ebf", "\u5146", "\u4eac" ];
        }
        return this.compressUnit(value, counts, units, num);
      };
      StringFormat.prototype.compressUnit = function(value, valueArr, unitArr, fixNum) {
        void 0 === fixNum && (fixNum = 2);
        var counts = valueArr;
        var units = unitArr;
        var res;
        var index;
        for (index = 0; index < counts.length; index++) {
          var e = counts[index];
          if (value < e) {
            res = index > 0 ? (value / counts[index - 1]).toFixed(fixNum) : value.toFixed(0);
            break;
          }
        }
        return res + units[index];
      };
      return StringFormat;
    }();
    exports.StringFormatFunction = new StringFormat();
    cc._RF.pop();
  }, {} ],
  "Test - 001": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d0113hG7DxAjo6KhhPN6262", "Test - 001");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        return _this;
      }
      NewClass.prototype.start = function() {};
      __decorate([ property(cc.Label) ], NewClass.prototype, "label", void 0);
      __decorate([ property ], NewClass.prototype, "text", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  TestTS: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "03cdcAxQW1CIKmvBSMJ5lM5", "TestTS");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TestTs = function(_super) {
      __extends(TestTs, _super);
      function TestTs() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nodeMain = null;
        _this.nodeVongQuay = null;
        return _this;
      }
      TestTs.prototype.start = function() {};
      TestTs.prototype.onClickTest = function() {};
      __decorate([ property(cc.Node) ], TestTs.prototype, "nodeMain", void 0);
      __decorate([ property(cc.Node) ], TestTs.prototype, "nodeVongQuay", void 0);
      TestTs = __decorate([ ccclass ], TestTs);
      return TestTs;
    }(cc.Component);
    exports.default = TestTs;
    cc._RF.pop();
  }, {} ],
  TextDefine: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "56e78scXuZFwYdiMpP1sznW", "TextDefine");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TextDefine = void 0;
    String.prototype.formatString = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
      var retStr = this;
      for (var l = args.length, i = 0; i < l; i++) {
        var arg = args[i];
        retStr = retStr.replace("%s", arg);
      }
      return retStr;
    };
    var TextDefine = function() {
      function TextDefine() {}
      TextDefine.NeedLogin = "B\u1ea1n C\u1ea7n \u0110\u0103ng Nh\u1eadp \u0110\u1ec3\nX\u1eed D\u1ee5ng Ch\u1ee9c N\u0103ng N\xe0y";
      TextDefine.FailCapcha = "T\u1ea3i Captcha L\u1ed7i! Vui L\xf2ng Th\u1eed L\u1ea1i";
      TextDefine.NeedOTP = "B\u1ea1n C\u1ea7n \u0110\u0103ng K\xfd OTP";
      TextDefine.Error = "L\u1ed7i! Vui L\xf2ng Th\u1eed L\u1ea1i";
      TextDefine.ErrorDeviceId = "C\xf3 s\u1ef1 c\u1ed1! Vui l\xf2ng \u0111\u0103ng nh\u1eadp l\u1ea1i!";
      TextDefine.TienNhapLonHon0 = "S\u1ed1 Ti\u1ec1n Ph\u1ea3i L\u1edbn H\u01a1n 0";
      TextDefine.KhongDuocTrong = "Kh\xf4ng \u0110\u01b0\u1ee3c \u0110\u1ec3 Tr\u1ed1ng %n";
      TextDefine.UpdatePhoneSuccess = "C\u1eadp Nh\u1eadt S\u1ed1 \u0110i\u1ec7n Tho\u1ea1i Th\xe0nh C\xf4ng";
      TextDefine.ClearPhoneSuccess = "X\xf3a S\u1ed1 \u0110i\u1ec7n Tho\u1ea1i Th\xe0nh C\xf4ng";
      TextDefine.NeedGoldDoi = "S\u1ed1 D\u01b0 C\u1ee7a B\u1ea1n Kh\xf4ng \u0110\u1ee7";
      TextDefine.TranferSuccess = "Giao D\u1ecbch Th\xe0nh C\xf4ng";
      TextDefine.MatKhauKhongTrung = "M\u1eadt Kh\u1ea9u Kh\xf4ng Gi\u1ed1ng Nhau";
      TextDefine.RequestNewPassSucces = "\u0110\u1ed5i M\u1eadt Kh\u1ea9u Th\xe0nh C\xf4ng. Vui L\xf2ng \u0110\u0103ng Nh\u1eadp L\u1ea1i!";
      TextDefine.NeedNetwork = "Vui L\xf2ng Ki\u1ec3m Tra L\u1ea1i Internet";
      TextDefine.ErrTranfer = "S\u1ed1 Ti\u1ec1n Nh\u1eadp Kh\xf4ng H\u1ee3p L\u1ec7";
      TextDefine.NickNameNhoHon6 = "T\xean hi\u1ec3n th\u1ecb c\xf3 \u0111\u1ed9 d\xe0i 6-16 k\xfd t\u1ef1";
      TextDefine.MatKhauNhoHon6 = "M\u1eadt Kh\u1ea9u c\xf3 \u0111\u1ed9 d\xe0i 6-16 k\xfd t\u1ef1";
      TextDefine.DangNhapNhoHon6 = "T\xean \u0111\u0103ng nh\u1eadp c\xf3 \u0111\u1ed9 d\xe0i 6-16 k\xfd t\u1ef1";
      TextDefine.HetNangLuongFish = "B\u1ea1n \u0110\xe3 H\u1ebft N\u0103ng L\u01b0\u1ee3ng !";
      TextDefine.MinJoinRoom = "B\u1ea1n c\u1ea7n t\u1ed1i thi\u1ec3u %n \u0111\u1ec3 v\xe0o ph\xf2ng";
      TextDefine.UpVip = "Ch\xfac m\u1eebng b\u1ea1n \u0111\xe3 t\u0103ng c\u1ea5p Vip %n";
      TextDefine.OpenURL = "X\xe1c nh\u1eadn m\u1edf li\xean k\u1ebft giao d\u1ecbch?";
      TextDefine.XoaMaGioiThieu = "B\u1ea1n c\xf3 mu\u1ed1n x\xf3a m\xe3 gi\u1edbi thi\u1ec7u?";
      TextDefine.KhongDuocNhanQuaX2 = "B\u1ea1n ch\u01b0a tham gia s\u1ef1 ki\u1ec7n n\xe0y!";
      TextDefine.DaNhanQuaX2 = "B\u1ea1n \u0111\xe3 nh\u1eadn qu\xe0 n\xe0y!";
      TextDefine.NullCaptcha = "Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng Captcha";
      TextDefine.NullTrangThai = "Kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng tr\u1ea1ng th\xe1i";
      TextDefine.Quest_ChuaXong = "L\xe0m";
      TextDefine.Quest_Xong = "Nh\u1eadn";
      TextDefine.Quest_DaNhan = "\u0110\xe3 nh\u1eadn";
      TextDefine.Quest_ChuaNhan = "Ch\u01b0a nh\u1eadn";
      TextDefine.NullPhone = "Th\xeam S\u0110T t\u1eb7ng 10k";
      TextDefine.NotMoneyFish = "B\u1ea1n kh\xf4ng \u0111\u1ee7 v\xe0ng \u0111\u1ec3 s\u1eed d\u1ee5ng s\xfang n\xe0y";
      TextDefine.AutoChangeGun = "T\u1ef1 \u0111\u1ed9ng ch\u1ecdn m\u1ee9c \u0111\u1ea1n ph\xf9 h\u1ee3p";
      TextDefine.PrivatePhone = "S\u0110T \u0111\xe3 b\u1ecb \u1ea9n";
      TextDefine.NullMenhGia = "Vui l\xf2ng ch\u1ecdn m\u1ec7nh gi\xe1!";
      TextDefine.NullBank = "Vui l\xf2ng ch\u1ecdn ng\xe2n h\xe0ng n\u1ea1p!";
      TextDefine.NullSeri = "Vui l\xf2ng nh\u1eadp seri th\u1ebb!";
      TextDefine.BoiSo10000 = "Ti\u1ec1n n\u1ea1p l\xe0 b\u1ed9i s\u1ed1 c\u1ee7a 10.000";
      TextDefine.LonHon10000 = "S\u1ed1 ti\u1ec1n n\u1ea1p l\u1edbn h\u01a1n 10.000";
      TextDefine.NullMaThe = "Vui l\xf2ng nh\u1eadp m\xe3 th\u1ebb!";
      TextDefine.NullTtkMomo = "Vui l\xf2ng nh\u1eadp t\xean t\xe0i kho\u1ea3n MOMO nh\u1eadn!";
      TextDefine.NullSdtMomo = "Vui l\xf2ng nh\u1eadp s\xf4 \u0111i\u1ec7n tho\u1ea1i MOMO nh\u1eadn!";
      TextDefine.NullTtkBANK = "Vui l\xf2ng nh\u1eadp t\xean t\xe0i kho\u1ea3n BANK nh\u1eadn!";
      TextDefine.NullSdtBANK = "Vui l\xf2ng nh\u1eadp s\xf4 t\xe0i kho\u1ea3n BANK nh\u1eadn!";
      TextDefine.NullBANK = "Vui l\xf2ng ch\u1ecdn BANK nh\u1eadn!";
      TextDefine.RateBonusMomo = "N\u1ea1p tr\xean %s th\xec \u0111\u01b0\u1ee3c th\u01b0\u1edfng th\xeam %s%";
      TextDefine.NEED_OFF_AUTO_FISH = "Vui l\xf2ng t\u1eaft t\xednh n\u0103ng C\u1eaeM M\xc1Y";
      TextDefine.END_TIME_AUTO = "H\u1ebft th\u1eddi gian c\u1eafm m\xe1y !";
      TextDefine.NEED_LEVEL = "B\u1ea1n c\u1ea7n \u0111\u1ea1t c\u1ea5p \u0111\u1ed9 cao h\u01a1n \u0111\u1ec3 s\u1eed d\u1ee5ng ch\u1ee9c n\u0103ng n\xe0y";
      TextDefine.NEED_LEVEL_C_OUT = "B\u1ea1n c\u1ea7n \u0111\u1ea1t c\u1ea5p \u0111\u1ed9 %s h\u01a1n \u0111\u1ec3 s\u1eed d\u1ee5ng ch\u1ee9c n\u0103ng n\xe0y";
      TextDefine.ERR_CROP_IMG = "Dung l\u01b0\u1ee3ng \u1ea3nh kh\xf4ng \u0111\u01b0\u1ee3c v\u01b0\u1ee3t qu\xe1 5MB";
      TextDefine.ERR_IMG_TYPE = "Vui l\xf2ng ch\u1ecdn t\u1ec7p l\xe0 \u1ea3nh";
      TextDefine.NullDeviceId = "Kh\xf4ng th\u1ec3 x\xe1c \u0111\u1ecbnh! Vui l\xf2ng m\u1edf l\u1ea1i app";
      TextDefine.CapNhatTk = "C\u1eadp nh\u1eadt t\xe0i kho\u1ea3n \u0111\u1ec3 \u0111\u01b0\u1ee3c h\u1ed7 tr\u1ee3 t\u1ed1t h\u01a1n !";
      TextDefine.ClickDeNhan = "Click \u0111\u1ec3 nh\u1eadn!";
      TextDefine.DefaultMessageAdmin = "T\xf4i c\u1ea7n h\u1ed7 tr\u1ee3 !";
      TextDefine.ERR_CODE_VERY = "Sai m\xe3 code";
      TextDefine.NOTI_REMOVE_BUNDLE = "X\xf3a game %s";
      TextDefine.ERR_JOIN_ROOM = "Kh\xf4ng th\u1ec3 v\xe0o ph\xf2ng ! Vui l\xf2ng th\u1eed l\u1ea1i";
      TextDefine.CONFIRM_CARD = "<color=#FFFFFF>(X\xe1c nh\u1eadn th\xf4ng tin)<br/><color=#FFFFFF>Nh\xe0 m\u1ea1ng: </c><color=#00FF52><b>%s</b></c><br/><color=#FFFFFF>M\u1ec7nh gi\xe1: </color><color=#FF0000><b>%s</b></c><br/><color=#FFFFFF>S\u1ed1 seri: </c><color=#8500FF><b>%s</b></c><br/><color=#FFFFFF>S\u1ed1 th\u1ebb: </c><color=#8500FF><b>%s</b></c>";
      TextDefine.ERR_VONGQUAY = "B\u1ea1n kh\xf4ng c\xf3 l\u01b0\u1ee3t quay n\xe0o!";
      TextDefine.ERR_CHANGE_BET_FS = "Kh\xf4ng \u0111\u01b0\u1ee3c thay \u0111\u1ed5i m\u1ee9c c\u01b0\u1ee3c khi \u0111ang \u0111\u01b0\u1ee3c FREE SPIN";
      TextDefine.ERR_QUICK_JOIN_GAME = "B\u1ea1n c\u1ea7n tho\xe1t game hi\u1ec7n t\u1ea1i \u0111\u1ec3 th\u1ef1c hi\u1ec7n thao t\xe1c n\xe0y!";
      TextDefine.ERR_TIET_KIEM = "Ch\u01b0a \u0111\u1ee7 \u0111i\u1ec3m t\xedch l\u0169y !";
      return TextDefine;
    }();
    exports.TextDefine = TextDefine;
    cc._RF.pop();
  }, {} ],
  TuiDo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fde17JoP7tP+7FSV20WRmTo", "TuiDo");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var REQUEST_CODE_1 = require("../DefineTs/REQUEST_CODE");
    var ConectManager_1 = require("../Network/ConectManager");
    var Windown_1 = require("../Windown");
    var BaseCuaHang_1 = require("./BaseCuaHang");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TuiDo = function(_super) {
      __extends(TuiDo, _super);
      function TuiDo() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      TuiDo.prototype.onLoad = function() {
        Windown_1.Windown.TuiDo = this;
      };
      TuiDo.prototype.show = function() {
        var _this = this;
        Windown_1.Windown.UIManager.showLoading();
        Windown_1.Windown.actionEffectOpen(this.node, function() {
          cc.systemEvent.once(REQUEST_CODE_1.REQUEST_CODE.GetTuiDo, _this.responseServer, _this);
          ConectManager_1.ConectManager.getIns().sendRequest(REQUEST_CODE_1.REQUEST_CODE.GetTuiDo, null);
        });
      };
      TuiDo.prototype.responseServer = function(obj) {
        Windown_1.Windown.UIManager.hideLoading();
        var sfsArr = obj.getSFSArray("list");
        var itemTemplate = this.parentItem.children[0];
        var objFirt = "{}";
        var countChild = 0;
        for (var i = 0; i < this.parentItem.childrenCount; i++) this.parentItem.children[i].active = false;
        for (var i = 0, l = sfsArr.size(); i < l; i++) {
          var sfsObj = sfsArr.getSFSObject(i);
          if (sfsObj.get("amount") < 1) continue;
          var node = this.parentItem.children[countChild];
          if (null == node) {
            node = cc.instantiate(itemTemplate);
            node.parent = this.parentItem;
          }
          node.active = true;
          if (1 != node.scale) {
            node.stopAllActions();
            node.runAction(cc.sequence(cc.delayTime(.05 * countChild), cc.scaleTo(.2, 1).easing(cc.easeBackOut())));
          }
          var spItem = node.getComponentInChildren(cc.Sprite);
          var lbCount = node.getComponentInChildren(cc.Label);
          var button = node.getComponent(cc.Button);
          spItem.spriteFrame = this.getSFByType(sfsObj.get("type"));
          lbCount.string = sfsObj.get("amount");
          button.clickEvents[0].customEventData = Windown_1.Windown.SFSObjToJson(sfsObj);
          countChild++;
        }
        sfsArr.size() > 0 && (objFirt = Windown_1.Windown.SFSObjToJson(sfsArr.getSFSObject(0)));
        this.isInit || this.onClickButton({
          target: itemTemplate
        }, objFirt);
        this.isInit = true;
      };
      TuiDo.prototype.onClickButton = function(event, data) {
        var obj = Object.create(null);
        try {
          obj = JSON.parse(data);
        } catch (e) {
          console.error(e);
        }
        if (null == obj["type"] || null == obj["amount"]) {
          this.nodeInfo.active = false;
          return;
        }
        this.nodeInfo.active = true;
        var objInfo = Windown_1.Windown.listConfigItem.find(function(element) {
          return element.ItemId == obj["type"];
        });
        cc.find("img", this.nodeInfo).getComponent(cc.Sprite).spriteFrame = this.getSFByType(objInfo.ItemId);
        var listLb = cc.find("parentInfo", this.nodeInfo).getComponentsInChildren(cc.Label);
        listLb[0].string = objInfo.ItemName;
        listLb[1].string = obj["amount"];
        listLb[2].string = objInfo.Description;
        var node = event.target;
        node.color = cc.Color.fromHEX(new cc.Color(), "#FFC200");
        this.parentItem.children.forEach(function(v) {
          v != node && (v.color = cc.Color.WHITE);
        });
      };
      TuiDo.prototype.getSFByType = function(type) {
        if (type < 5) return this.listSFItem[type - 1];
        if (1e3 == type) return this.spGunSet;
        if (1001 == type) return this.spAuto;
        return this.listSFItemSpecial[type - 100];
      };
      TuiDo.prototype.onClickClose = function() {
        var _this = this;
        Windown_1.Windown.actionEffectClose(this.node, function() {
          _this.node.parent = null;
        });
      };
      TuiDo = __decorate([ ccclass ], TuiDo);
      return TuiDo;
    }(BaseCuaHang_1.default);
    exports.default = TuiDo;
    cc._RF.pop();
  }, {
    "../DefineTs/REQUEST_CODE": "REQUEST_CODE",
    "../Network/ConectManager": "ConectManager",
    "../Windown": "Windown",
    "./BaseCuaHang": "BaseCuaHang"
  } ],
  UIManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2fb31HuB+RA47Q8Vm6XG7D+", "UIManager");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BUNDLE_1 = require("./DefineTs/BUNDLE");
    var EVENT_MANAGER_1 = require("./DefineTs/EVENT_MANAGER");
    var PathResource_1 = require("./DefineTs/PathResource");
    var TextDefine_1 = require("./DefineTs/TextDefine");
    var InfoERR_1 = require("./InfoERR");
    var ConectManager_1 = require("./Network/ConectManager");
    var Http_1 = require("./Network/Http");
    var EffectTakeCoin_1 = require("./Popup/EffectTakeCoin");
    var Util_1 = require("./Util");
    var Windown_1 = require("./Windown");
    window.Global = {};
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var UIManager = function(_super) {
      __extends(UIManager, _super);
      function UIManager() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.funLoading = null;
        _this.preLoad = 0;
        _this.loading = null;
        _this.loadingData = null;
        _this.loadingPerData = null;
        _this.parentPopup = null;
        _this.parentMiniGame = null;
        _this.prarentgame = null;
        _this.timeHide = 0;
        _this.nodeAlertMini = null;
        _this.prefabDownload = null;
        _this.spBanNgay = null;
        _this.spBanDem = null;
        _this.CA = null;
        _this.isHideTab = false;
        _this.handleClickNoti = null;
        _this.funPing = null;
        _this.listFunShowFirtLogin = null;
        _this.objGameWating = {};
        _this.isVertical = false;
        _this.currentGameId = -1;
        return _this;
      }
      UIManager.prototype.onLoad = function() {
        cc.log("type bors: " + cc.sys.os);
        cc.Toggle._triggerEventInScript_check = true;
        var now = new Date();
        var hour = now.getHours();
        this.loadingData.getComponent(cc.Sprite).spriteFrame = hour >= 19 || hour < 5 ? this.spBanDem : this.spBanNgay;
        Windown_1.Windown.UIManager = this;
        cc.game.addPersistRootNode(this.node);
        ConectManager_1.ConectManager.getIns().init();
        Windown_1.Windown.Dialog = cc.find("Dialog", this.node).getComponent("Dialog");
        cc.game.on(cc.game.EVENT_HIDE, this.eventHide, this);
        cc.game.on(cc.game.EVENT_SHOW, this.eventShow, this);
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.onDisconnect, this.handleDisconnect, this);
        cc.systemEvent.on(EVENT_MANAGER_1.EVENT_MANAGER.LOGIN, this.handleLogin, this);
        cc.sys.isNative || window.addEventListener("orientationchange", this.evenResize.bind(this));
        Windown_1.Windown.init();
        Windown_1.Windown.BotController && !cc.sys.isNative && (window.onerror = function(envet, source, line, colno, err) {
          window.location = window.location;
          window.onerror = null;
        });
        Http_1.default.get("https://api.ipify.org?format=json", {}, function(err, res) {
          console.log("Respone getIP =", res);
          if (null != err) {
            cc.log("Respone getIP err =", err);
            return;
          }
          Windown_1.Windown.User.ipAddress = res["ip"];
          cc.log("Windown.User.ipAddres:" + Windown_1.Windown.User.ipAddress);
        }, false);
        Util_1.Util.onGetDeviceId();
      };
      UIManager.prototype.test = function() {
        return __awaiter(this, void 0, void 0, function() {
          var num;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, this.getNum() ];

             case 1:
              num = _a.sent();
              cc.log("numla " + num);
              return [ 2 ];
            }
          });
        });
      };
      UIManager.prototype.getNum = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              reject(null);
              return [ 2 ];
            });
          });
        });
      };
      UIManager.prototype.getPro = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                return [ 4, this.getNum() ];

               case 1:
                _a.sent();
                setTimeout(resolve, 2e3, 2);
                return [ 2 ];
              }
            });
          });
        });
      };
      UIManager.prototype.evenResize = function() {
        this.node.position = cc.v3(cc.winSize.width / 2, cc.winSize.height / 2, 0);
      };
      UIManager.prototype.changeRotation = function(isVertical) {
        if (cc.sys.isMobile) {
          this.isVertical = isVertical;
          if (isVertical) {
            this.parentPopup.angle = 90;
            this.parentPopup.scale = .7;
            Windown_1.Windown.Dialog.node.angle = 90;
            this.nodeAlertMini.parent.angle = 90;
          } else {
            this.parentPopup.angle = 0;
            this.parentPopup.scale = 1;
            Windown_1.Windown.Dialog.node.angle = 0;
            this.nodeAlertMini.parent.angle = 0;
          }
          cc.systemEvent.emit(EVENT_MANAGER_1.EVENT_MANAGER.CHANG_ROTATION, this.isVertical);
        }
      };
      UIManager.prototype.checkShowMiniGame = function(cp, isResetPosition) {
        var length = this.parentMiniGame.childrenCount;
        var isReturn = false;
        for (var i = 0; i < length; i++) if (this.parentMiniGame.children[i] == cp.node) isReturn = true; else {
          var cp_1 = this.parentMiniGame.children[i].getComponent("DragMiniGame");
          cp_1 && cp_1.miniSize();
        }
        cp._isMiniSize || cp.nomalSize();
        null != cp.node.parent && cp.node.setSiblingIndex(length - 1);
        isResetPosition && (cp.node.position = cc.v2(0, 0));
        return isReturn;
      };
      UIManager.prototype.eventHide = function() {
        this.timeHide = Date.now();
        this.isHideTab = true;
      };
      UIManager.prototype.eventShow = function() {
        this.isHideTab = false;
        if (this.timeHide < 1) return;
        var now = Date.now();
        var timeTotalHided = now - this.timeHide;
        timeTotalHided > 36e5 && Windown_1.Windown.restartGame();
        cc.systemEvent.emit(cc.game.EVENT_SHOW, timeTotalHided / 1e3);
        this.timeHide = 0;
      };
      UIManager.prototype.handleLogin = function() {
        this.unschedule(this.funPing);
        this.schedule(this.funPing = function() {
          ConectManager_1.ConectManager.getIns().sendRequest("ping", null, null);
        }, 120);
      };
      UIManager.prototype.showFunFirtLogin = function() {
        var fun = this.listFunShowFirtLogin.shift();
        void 0 != fun && fun.call(this);
      };
      UIManager.prototype.checkAndShowSuggestDangKy = function() {
        if (Windown_1.Windown.User.isPlayNow) {
          var keySignUp_1 = "signUp_" + Windown_1.Windown.User.userId;
          var lastSignUp = Windown_1.Windown.getLocalStorage(keySignUp_1);
          var dateNow_1 = new Date().getDate();
          null == lastSignUp ? Windown_1.Windown.setLocalStorage(keySignUp_1, dateNow_1.toString()) : lastSignUp != dateNow_1 && Windown_1.Windown.Dialog.showLog(TextDefine_1.TextDefine.CapNhatTk, function() {
            Windown_1.Windown.UIManager.showCapNhatTaiKhoan();
            Windown_1.Windown.setLocalStorage(keySignUp_1, dateNow_1.toString());
          });
        }
      };
      UIManager.prototype.canclePing = function() {
        this.unschedule(this.funPing);
      };
      UIManager.prototype.handleDisconnect = function() {
        this.canclePing();
        Windown_1.Windown.disconect();
        this.parentPopup.removeAllChildren();
      };
      UIManager.prototype.showLoadingData = function(stringVer) {
        this.preLoad = 0;
        this.loadingData.active = true;
        this.loadingPerData.getComponent(cc.Sprite).fillRange = 0;
        cc.find("LoadingPro/per", this.loadingData).getComponent(cc.Label).string = "\u0110ang t\u1ea3i game: 0%";
        if (stringVer) {
          var lbVer = cc.find("lbVer", this.loadingData).getComponent(cc.Label);
          lbVer.node.active = true;
          lbVer.string = "\u0110ang t\u1ea3i game: " + stringVer;
        }
      };
      UIManager.prototype.hideLoadingData = function() {
        this.loadingData.active = false;
        this.preLoad = 0;
      };
      UIManager.prototype.setPerData = function(per) {
        if (per) {
          if (per <= this.preLoad) return;
          this.preLoad = per;
          var max = 1161 * per;
          this.loadingPerData.getComponent(cc.Sprite).fillRange = per;
          per = Math.round(100 * per);
          cc.find("LoadingPro/per", this.loadingData).getComponent(cc.Label).string = "\u0110ang t\u1ea3i game: " + per + "%";
        }
      };
      UIManager.prototype.showLoading = function(showTime) {
        var _this = this;
        void 0 === showTime && (showTime = 15);
        this.loading.active = true;
        this.scheduleOnce(this.funLoading = function() {
          _this.loading.active = false;
        }, showTime);
      };
      UIManager.prototype.hideLoading = function() {
        this.loading.active = false;
        this.unschedule(this.funLoading);
      };
      UIManager.prototype.onHideMainView = function() {
        Windown_1.Windown.MainView.node.removeFromParent();
      };
      UIManager.prototype.onShowMainView = function() {
        null == Windown_1.Windown.MainView.node.parent && cc.director.getScene().getChildByName("Canvas").insertChild(Windown_1.Windown.MainView.node, 1);
      };
      UIManager.prototype.showNotiNoHu = function(SFSObject) {
        Windown_1.Windown.NotiNoHu.show(SFSObject);
      };
      UIManager.prototype.getNodeEffectTextCoin = function() {
        var _this = this;
        return new Promise(function(resolve, reject) {
          return __awaiter(_this, void 0, void 0, function() {
            var pre, nodeEff;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                return [ 4, Windown_1.Windown.getPrefabRes(PathResource_1.PathResource.EffectTakeCoin) ];

               case 1:
                pre = _a.sent();
                nodeEff = cc.instantiate(pre).getComponent(EffectTakeCoin_1.default);
                nodeEff.node.parent = Windown_1.Windown.UIManager.parentPopup;
                resolve(nodeEff);
                return [ 2 ];
              }
            });
          });
        });
      };
      UIManager.prototype.showAlertMini = function(string) {
        var _this = this;
        this.nodeAlertMini.getComponentInChildren(cc.Label).string = string;
        this.nodeAlertMini.opacity = 255;
        this.nodeAlertMini.scale = 1;
        this.nodeAlertMini.active = true;
        cc.Tween.stopAllByTarget(this.nodeAlertMini);
        cc.tween(this.nodeAlertMini).set({
          y: 0,
          scaleX: 0
        }).to(.3, {
          scaleX: 1
        }, {
          easing: "backOut"
        }).delay(2).to(.3, {
          scaleX: 0
        }, {
          easing: "backIn"
        }).call(function() {
          _this.nodeAlertMini.active = false;
        }).start();
      };
      UIManager.prototype.showDangNhap = function() {
        return __awaiter(this, void 0, void 0, function() {
          var pre;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.showLoading();
              return [ 4, Windown_1.Windown.getPrefabRes(PathResource_1.PathResource.DangNhap) ];

             case 1:
              pre = _a.sent();
              this.parentPopup.addChild(cc.instantiate(pre));
              this.hideLoading();
              return [ 2 ];
            }
          });
        });
      };
      UIManager.prototype.showDangKy = function() {
        return __awaiter(this, void 0, void 0, function() {
          var pre;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.showLoading();
              return [ 4, Windown_1.Windown.getPrefabRes(PathResource_1.PathResource.DangKy) ];

             case 1:
              pre = _a.sent();
              this.parentPopup.addChild(cc.instantiate(pre));
              this.hideLoading();
              return [ 2 ];
            }
          });
        });
      };
      UIManager.prototype.showTuiDo = function() {
        return __awaiter(this, void 0, void 0, function() {
          var pre;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.checkAndShowDangNhap();
              this.showLoading();
              if (!(null == Windown_1.Windown.TuiDo)) return [ 3, 2 ];
              return [ 4, Windown_1.Windown.getPrefabRes(PathResource_1.PathResource.TuiDo) ];

             case 1:
              pre = _a.sent();
              this.parentPopup.addChild(cc.instantiate(pre));
              _a.label = 2;

             case 2:
              Windown_1.Windown.TuiDo.node.parent = this.parentPopup;
              Windown_1.Windown.TuiDo.show();
              this.hideLoading();
              return [ 2 ];
            }
          });
        });
      };
      UIManager.prototype.showCuaHang = function() {
        return __awaiter(this, void 0, void 0, function() {
          var pre;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.checkAndShowDangNhap();
              this.showLoading();
              if (!(null == Windown_1.Windown.CuaHang)) return [ 3, 2 ];
              return [ 4, Windown_1.Windown.getPrefabRes(PathResource_1.PathResource.CuaHang) ];

             case 1:
              pre = _a.sent();
              this.parentPopup.addChild(cc.instantiate(pre));
              _a.label = 2;

             case 2:
              Windown_1.Windown.CuaHang.node.parent = this.parentPopup;
              Windown_1.Windown.CuaHang.show();
              this.hideLoading();
              return [ 2 ];
            }
          });
        });
      };
      UIManager.prototype.showDoiTrangThai = function() {
        return __awaiter(this, void 0, void 0, function() {
          var pre;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.checkAndShowDangNhap();
              this.showLoading();
              return [ 4, Windown_1.Windown.getPrefabRes(PathResource_1.PathResource.DoiTrangThai) ];

             case 1:
              pre = _a.sent();
              this.parentPopup.addChild(cc.instantiate(pre));
              this.hideLoading();
              return [ 2 ];
            }
          });
        });
      };
      UIManager.prototype.showInfoTranfer = function() {
        return __awaiter(this, void 0, void 0, function() {
          var pre;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.checkAndShowDangNhap();
              this.showLoading();
              if (!(null == Windown_1.Windown.LichSuGiaoDich)) return [ 3, 2 ];
              return [ 4, Windown_1.Windown.getPrefabRes(PathResource_1.PathResource.LichSuGiaoDich) ];

             case 1:
              pre = _a.sent();
              this.parentPopup.addChild(cc.instantiate(pre));
              _a.label = 2;

             case 2:
              Windown_1.Windown.LichSuGiaoDich.node.parent = this.parentPopup;
              Windown_1.Windown.LichSuGiaoDich.show();
              return [ 2 ];
            }
          });
        });
      };
      UIManager.prototype.showCapNhatTaiKhoan = function() {
        return __awaiter(this, void 0, void 0, function() {
          var pre;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.checkAndShowDangNhap();
              this.showLoading();
              if (!(null == Windown_1.Windown.CapNhatTaiKhoan)) return [ 3, 2 ];
              return [ 4, Windown_1.Windown.getPrefabRes(PathResource_1.PathResource.CapNhatTaiKhoan) ];

             case 1:
              pre = _a.sent();
              this.parentPopup.addChild(cc.instantiate(pre));
              _a.label = 2;

             case 2:
              Windown_1.Windown.CapNhatTaiKhoan.node.parent = this.parentPopup;
              Windown_1.Windown.CapNhatTaiKhoan.show();
              this.hideLoading();
              return [ 2 ];
            }
          });
        });
      };
      UIManager.prototype.showImgChat = function(spMain) {
        return __awaiter(this, void 0, void 0, function() {
          var pre;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.checkAndShowDangNhap();
              this.showLoading();
              if (!(null == Windown_1.Windown.ImgChat)) return [ 3, 2 ];
              return [ 4, Windown_1.Windown.getPrefabRes(PathResource_1.PathResource.ImgChat) ];

             case 1:
              pre = _a.sent();
              this.parentPopup.addChild(cc.instantiate(pre));
              _a.label = 2;

             case 2:
              Windown_1.Windown.ImgChat.node.parent = this.parentPopup;
              Windown_1.Windown.ImgChat.show(spMain);
              this.hideLoading();
              return [ 2 ];
            }
          });
        });
      };
      UIManager.prototype.playSoundWithUrl = function(url) {
        return __awaiter(this, void 0, void 0, function() {
          var audioClip;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, Windown_1.Windown.loadRes(BUNDLE_1.BUNDLE.Main, url, cc.AudioClip) ];

             case 1:
              audioClip = _a.sent();
              cc.audioEngine.play(audioClip, false, 1);
              return [ 2 ];
            }
          });
        });
      };
      UIManager.prototype.checkAndShowDangNhap = function() {
        if (!Windown_1.Windown.User.isLogin) {
          this.showDangNhap();
          throw new InfoERR_1.InfoErr("Need Login");
        }
      };
      UIManager.prototype.checkAndSendLogCrash = function() {
        var strErr = cc.sys.localStorage.getItem("err");
        if (null != strErr && "" != strErr) {
          var http = cc.loader.getXMLHttpRequest();
          var data = Object.create(null);
          data.err = strErr;
          data.id = Windown_1.Windown.User.userId;
          var url = "http://207.148.90.121:3000/api/crash";
          http.open("POST", url, true);
          http.setRequestHeader("Content-Type", "application/json");
          http.onreadystatechange = function() {
            4 === http.readyState && http.status >= 200 && http.status < 300;
          };
          http.send(JSON.stringify(data));
          cc.sys.localStorage.setItem("err", "");
          Util_1.Util.resetListBug();
        }
      };
      UIManager.prototype.initConfig = function() {};
      __decorate([ property(cc.Node) ], UIManager.prototype, "loading", void 0);
      __decorate([ property(cc.Node) ], UIManager.prototype, "loadingData", void 0);
      __decorate([ property(cc.Node) ], UIManager.prototype, "loadingPerData", void 0);
      __decorate([ property(cc.Node) ], UIManager.prototype, "parentPopup", void 0);
      __decorate([ property(cc.Node) ], UIManager.prototype, "parentMiniGame", void 0);
      __decorate([ property(cc.Node) ], UIManager.prototype, "prarentgame", void 0);
      __decorate([ property(cc.Node) ], UIManager.prototype, "nodeAlertMini", void 0);
      __decorate([ property(cc.Node) ], UIManager.prototype, "prefabDownload", void 0);
      __decorate([ property(cc.SpriteFrame) ], UIManager.prototype, "spBanNgay", void 0);
      __decorate([ property(cc.SpriteFrame) ], UIManager.prototype, "spBanDem", void 0);
      __decorate([ property(cc.Asset) ], UIManager.prototype, "CA", void 0);
      UIManager = __decorate([ ccclass ], UIManager);
      return UIManager;
    }(cc.Component);
    exports.default = UIManager;
    cc._RF.pop();
  }, {
    "./DefineTs/BUNDLE": "BUNDLE",
    "./DefineTs/EVENT_MANAGER": "EVENT_MANAGER",
    "./DefineTs/PathResource": "PathResource",
    "./DefineTs/TextDefine": "TextDefine",
    "./InfoERR": "InfoERR",
    "./Network/ConectManager": "ConectManager",
    "./Network/Http": "Http",
    "./Popup/EffectTakeCoin": "EffectTakeCoin",
    "./Util": "Util",
    "./Windown": "Windown"
  } ],
  UpdateAssetManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "91c19bZx8NC/6Q+IGkg5aUO", "UpdateAssetManager");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Windown_1 = require("../Windown");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var UpdateAssetManager = function(_super) {
      __extends(UpdateAssetManager, _super);
      function UpdateAssetManager() {
        var _this_1 = null !== _super && _super.apply(this, arguments) || this;
        _this_1.isInitAssets = true;
        _this_1.ForcedUpdate = true;
        _this_1.countFail = 0;
        _this_1.isFirtInit = true;
        _this_1.funProgress = null;
        _this_1.funFinish = null;
        _this_1._am = null;
        _this_1._updating = false;
        _this_1._failCount = 0;
        _this_1._storagePath = null;
        _this_1.customManifestStr = {
          packageUrl: "",
          remoteManifestUrl: "",
          remoteVersionUrl: "",
          version: "1.0.0",
          assets: {},
          searchPaths: []
        };
        _this_1.verBCache = "1.0.0";
        _this_1.gameType = null;
        return _this_1;
      }
      UpdateAssetManager.prototype.onDestroyClass = function() {
        console.log("chay me vao destroy class update manager");
        this._am && this._am.setEventCallback(null);
      };
      UpdateAssetManager.prototype.dynamicUpdate = function() {
        if (this._am && !this._updating) {
          this._am.setEventCallback(this.updateCb.bind(this));
          if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
            var manifest = new jsb.Manifest(JSON.stringify(this.customManifestStr), this._storagePath);
            this._am.loadLocalManifest(manifest, this._storagePath);
          }
          this._failCount = 0;
          this._am.update();
          this._updating = true;
        } else {
          var _this_2 = this;
          this.scheduleOnce(function() {
            _this_2.dynamicUpdate();
          }, .5);
        }
      };
      UpdateAssetManager.prototype.checkUpdate = function() {
        console.log("Check Update");
        if (this._updating) {
          console.log("Checking or updating ...");
          return;
        }
        if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
          var manifest = new jsb.Manifest(JSON.stringify(this.customManifestStr), this._storagePath);
          this._am.loadLocalManifest(manifest, this._storagePath);
        }
        if (!this._am.getLocalManifest() || !this._am.getLocalManifest().isLoaded()) {
          console.log("Failed to load local manifest ...");
          return;
        }
        this._am.setEventCallback(this.checkCb.bind(this));
        this._am.checkUpdate();
        this._updating = true;
      };
      UpdateAssetManager.prototype.getManifest = function() {
        var urlChidl = Windown_1.Windown.linkBundle;
        var uri = this._storagePath + "/project.manifest";
        var verCurrent = "1.0.0";
        if (jsb.fileUtils.isFileExist(uri)) {
          urlChidl = urlChidl.replace("%n", this.gameType + "full");
          this.isFirtInit = false;
          var strTemp = jsb.fileUtils.getStringFromFile(uri);
          var obj = JSON.parse(strTemp);
          obj.packageUrl = urlChidl;
          obj.remoteManifestUrl = urlChidl + "project.manifest";
          obj.remoteVersionUrl = urlChidl + "version.manifest";
          var strWirte = JSON.stringify(obj);
          jsb.fileUtils.writeStringToFile(strWirte, this._storagePath + "/project.manifest");
          verCurrent = obj.version;
        } else urlChidl = urlChidl.replace("%n", this.gameType.toString());
        var verInServer = Windown_1.Windown.verChildGame[this.gameType];
        this.customManifestStr.packageUrl = urlChidl;
        this.customManifestStr.remoteManifestUrl = urlChidl + "project.manifest";
        this.customManifestStr.remoteVersionUrl = urlChidl + "version.manifest";
        var isReturn = !(this.versionCompareHandleCheck(verCurrent, verInServer) >= 0);
        return isReturn;
      };
      UpdateAssetManager.prototype.updateCb = function(event) {
        var needRestart = false;
        var failed = false;
        switch (event.getEventCode()) {
         case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
          failed = true;
          break;

         case jsb.EventAssetsManager.UPDATE_PROGRESSION:
          var getPercent = event.getPercent();
          isNaN(getPercent) && (getPercent = 0);
          getPercent > 1 && (getPercent = 1);
          this.funProgress && this.funProgress(getPercent);
          var msg = event.getMessage();
          msg && console.log("Updated file: " + msg);
          break;

         case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
         case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
          console.log("lo down load == bo qua");
          failed = true;
          break;

         case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
          console.log("phien ban moi nhat");
          failed = true;
          break;

         case jsb.EventAssetsManager.UPDATE_FINISHED:
          console.log("Update finished. " + event.getMessage());
          needRestart = true;
          break;

         case jsb.EventAssetsManager.UPDATE_FAILED:
          console.log("Update failed. " + event.getMessage());
          this.countFail++;
          if (this.countFail < 5) {
            this._am.downloadFailedAssets();
            this._updating = false;
          } else {
            jsb.fileUtils.removeDirectory(this._storagePath);
            failed = true;
            this.countFail = 0;
          }
          break;

         case jsb.EventAssetsManager.ERROR_UPDATING:
          console.log("Asset update error: " + event.getAssetId() + ", " + event.getMessage());
          break;

         case jsb.EventAssetsManager.ERROR_DECOMPRESS:
          console.log("loi la==>" + event.getMessage());
          failed = true;
        }
        if (failed) {
          this._am.setEventCallback(null);
          this._updating = false;
          this.funFinish();
        }
        if (needRestart) {
          if (this.isFirtInit) {
            var strProjectManifestTemp = this._storagePath + "/assets/project.manifest";
            if (jsb.fileUtils.isFileExist(strProjectManifestTemp)) {
              var strTemp = jsb.fileUtils.getStringFromFile(strProjectManifestTemp);
              jsb.fileUtils.writeStringToFile(strTemp, this._storagePath + "/project.manifest");
            }
          }
          var searchPaths = jsb.fileUtils.getSearchPaths();
          var newPaths = this._am.getLocalManifest().getSearchPaths();
          Array.prototype.unshift.apply(searchPaths, newPaths);
          cc.sys.localStorage.setItem("SearchAssets", JSON.stringify(searchPaths));
          var str = "updateResource" + this.gameType;
          cc.sys.localStorage.setItem(str, false);
          jsb.fileUtils.setSearchPaths(searchPaths);
          this._am.setEventCallback(null);
          this.funFinish();
        }
      };
      UpdateAssetManager.prototype.checkCb = function(event) {
        var str = "updateResource" + this.gameType;
        console.log("Code: " + event.getEventCode());
        switch (event.getEventCode()) {
         case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
          console.log("ko tim thay mainfest file");
          this.funFinish && this.funFinish();
          break;

         case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
         case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
          this.funFinish && this.funFinish();
          break;

         case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
          console.log("Phien ban moi nhat " + this.verBCache);
          Windown_1.Windown.verChildGame[this.gameType] = this.verBCache;
          cc.sys.localStorage.setItem(str, false);
          this.funFinish && this.funFinish();
          break;

         case jsb.EventAssetsManager.NEW_VERSION_FOUND:
          console.log("bat dau update");
          this.dynamicUpdate();
          break;

         case jsb.EventAssetsManager.UPDATE_FINISHED:
          console.log("ko co gi thay doi ca");
          this.funFinish && this.funFinish();
          break;

         default:
          return;
        }
        this._am.setEventCallback(null);
        this._updating = false;
      };
      UpdateAssetManager.prototype.initProgress = function(funProgress, funFinish) {
        this.funProgress = funProgress;
        this.funFinish = funFinish;
      };
      UpdateAssetManager.prototype.versionCompareHandle = function(versionA, versionB) {
        console.log("JS Custom Version Compare: version A is " + versionA + ", version B is " + versionB);
        var vA = versionA.split(".");
        var vB = versionB.split(".");
        this.verBCache = versionB;
        for (var i = 0; i < vA.length; ++i) {
          var a = parseInt(vA[i]);
          var b = parseInt(vB[i] || 0);
          if (a === b) continue;
          return a - b;
        }
        return vB.length > vA.length ? -1 : 0;
      };
      UpdateAssetManager.prototype.versionCompareHandleCheck = function(versionA, versionB) {
        console.log("JS Custom Version Compare: version A is " + versionA + ", version B is " + versionB);
        var vA = versionA.split(".");
        var vB = versionB.split(".");
        for (var i = 0; i < vA.length; ++i) {
          var a = parseInt(vA[i]);
          var b = parseInt(vB[i] || 0);
          if (a === b) continue;
          return a - b;
        }
        return vB.length > vA.length ? -1 : 0;
      };
      UpdateAssetManager.prototype.updateAsset = function(gameType) {
        this.gameType = gameType;
        this._storagePath = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "AllGame/" + gameType;
        var urlFixloi = this._storagePath + "/project.manifest";
        if (jsb.fileUtils.isFileExist(urlFixloi)) {
          var str = jsb.fileUtils.getStringFromFile(urlFixloi);
          var obj = JSON.parse(str);
          var ver = obj.version;
          var listCheck = ver.split(".");
          listCheck.length < 3 && console.log("game nay bi loi " + jsb.fileUtils.removeDirectory(this._storagePath));
        }
        var objRemove = Windown_1.Windown.LIST_REMOVE_BUNDLE_GAME;
        var versionRemove = objRemove[gameType];
        if (null != versionRemove) {
          var url = this._storagePath + "/project.manifest";
          if (jsb.fileUtils.isFileExist(url)) {
            var str = jsb.fileUtils.getStringFromFile(url);
            var obj = JSON.parse(str);
            versionRemove == obj.version && console.log("gia tri la " + jsb.fileUtils.removeDirectory(this._storagePath));
          }
        }
        var isReturn = this.getManifest();
        if (!isReturn) return false;
        this._am = new jsb.AssetsManager("", this._storagePath, this.versionCompareHandle);
        this._am.setVerifyCallback(function(path, asset) {
          var compressed = asset.compressed;
          var expectedMD5 = asset.md5;
          var relativePath = asset.path;
          var size = asset.size;
          if (compressed) {
            console.log("Verification passed : " + relativePath);
            return true;
          }
          console.log("Verification passed : " + relativePath + " (" + expectedMD5 + ")");
          return true;
        });
        return true;
      };
      UpdateAssetManager.prototype.getIsSuccesUpdate = function() {
        console.log("hahaha vao destroy class");
      };
      UpdateAssetManager = __decorate([ ccclass ], UpdateAssetManager);
      return UpdateAssetManager;
    }(cc.Component);
    exports.default = UpdateAssetManager;
    cc._RF.pop();
  }, {
    "../Windown": "Windown"
  } ],
  UserModel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "78320P8Yc5NQLTIb+a+eEZw", "UserModel");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UserData = exports.UIGame = exports.GlobalData = void 0;
    var ViewModel_1 = require("../Lib/VM/ViewModel");
    var GlobalData = function() {
      function GlobalData() {
        this.isNative = false;
      }
      return GlobalData;
    }();
    exports.GlobalData = GlobalData;
    var UIGame = function() {
      function UIGame() {
        this.rank = {
          type: 3,
          curentType: 0
        };
        this.doi = {
          cur: "20 P"
        };
        this.nhiemVu = {
          cur: "choiGame",
          count: {
            choiGame: 0,
            napNgay: 0,
            tanThu: 0
          }
        };
      }
      return UIGame;
    }();
    exports.UIGame = UIGame;
    var UserData = function() {
      function UserData() {
        this.nickName = "";
        this.userName = "";
        this.userAg = 0;
        this.userId = 0;
        this.email = "";
        this.phoneNumber = "null";
        this.numMailNotRead = 0;
        this.numQuestDone = 0;
        this.isReadMessAd = false;
        this.isLogin = false;
        this.currentGameId = 0;
        this.currentRoomType = 0;
        this.currentRoomId = 0;
        this.status = "";
        this.typeAvarta = 0;
        this.avatrId = -1;
        this.currentLevel = 0;
        this.currentLevelPoint = 0;
        this.totalLevelPoint = 0;
        this.currentVipPoint = 0;
        this.tokenFacebook = "";
        this.tietKiem = 0;
        this.maxPigy = 0;
        this.isPlayNow = false;
        this.isFirtNap = false;
        this.isFirtLogin = false;
        this.isOnMusic = true;
        this.isOnSound = true;
      }
      return UserData;
    }();
    exports.UserData = UserData;
    var player = new UserData();
    var global = new GlobalData();
    var ui = new UIGame();
    ViewModel_1.VM.add(player, "user");
    ViewModel_1.VM.add(global, "global");
    ViewModel_1.VM.add(ui, "ui");
    cc._RF.pop();
  }, {
    "../Lib/VM/ViewModel": "ViewModel"
  } ],
  Util: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2ffa84HMcZDQrgkoz2Y4DtG", "Util");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Util = void 0;
    var EVENT_MANAGER_1 = require("./DefineTs/EVENT_MANAGER");
    var InfoERR_1 = require("./InfoERR");
    var Windown_1 = require("./Windown");
    var GET_ANDROID_ID = "1";
    var UNZIP = "2";
    var GET_VERSION_ID = "3";
    var LOGIN_FACEBOOK = "4";
    var VEYRY_PHONE = "6";
    var CHAT_ADMIN = "7";
    var DEVICE_VERSION = "8";
    var LOGIN_FACEBOOK_CANCEL = "9";
    var LOGIN_FACEBOOK_ERROR = "10";
    var BUY_IAP = "11";
    var SEND_SMS = "12";
    var OPEN_FANPAGE = "14";
    var OPEN_GROUP = "15";
    var CHECK_NETWORK = "16";
    var CARRIER_NAME = "19";
    var CHECK1SIM = "20";
    var CHECK2SIM = "21";
    var HIDESPLASH = "22";
    var CALL_PHONE = "24";
    var COPPY_TO_CLIP = "27";
    var IAP_PURCHASE = "28";
    var IAP_INIT = "29";
    var IAP_PURCHASE_SUCCESS = "30";
    var IAP_PURCHASE_ERROR = "31";
    var IAP_PURCHASE_CANCEL = "32";
    var VERY_OTP = "VERY_OTP";
    var RESEND_OTP = "RESEND_OTP";
    var ERR_SHOW = "ERR_SHOW";
    var GET_IMG_LIBARY = "GET_IMG_LIBARY";
    var CROP_IMG = "CROP_IMG";
    var GET_IMG_LIBARY_CHAT = "GET_IMG_LIBARY_CHAT";
    var SCALE_IMG_CHAT = "SCALE_IMG_CHAT";
    var SET_INFO_SCACLE = "SET_INFO_SCACLE";
    var GET_ISSAFE = "GET_ISSAFE";
    var listBug = [];
    function checkContainsBug(model) {
      for (var _i = 0, listBug_1 = listBug; _i < listBug_1.length; _i++) {
        var v = listBug_1[_i];
        if (v.localtion == model.localtion && v.message == model.message && v.stack == model.stack) return true;
      }
      return false;
    }
    cc.NativeCallJS = function(evt, params) {
      cc.log("iNativeCallJS------------------------\x3e   DEMO " + evt + "     " + params);
      switch (evt) {
       case GET_ANDROID_ID:
        Windown_1.Windown.deviceId = params;
        Windown_1.Windown.setLocalStorage("GEN_DEVICEID", params);
        console.log("Windown.deviceId====" + Windown_1.Windown.deviceId);
        break;

       case UNZIP:
        var paObj = JSON.parse(params);
        Windown_1.Windown.loadNativeBundleCallback(paObj);
        break;

       case COPPY_TO_CLIP:
        Windown_1.Windown.UIManager.showAlertMini("\u0110\xe3 Sao Ch\xe9p");
        break;

       case ERR_SHOW:
        var list = params.split("---ABC---");
        if (-1 != list[1].indexOf("lvd----")) return;
        var model = Object.create(null);
        Windown_1.Windown.User.isLogin ? model.idP = Windown_1.Windown.User.userId : model.idP = null;
        model.localtion = list[0];
        model.message = list[1];
        model.stack = list[2];
        cc.sys.os == cc.sys.OS_WINDOWS && (Windown_1.Windown.BotController ? model.os = "WIN_BOT" : model.os = "WIN");
        if (!checkContainsBug(model)) {
          model.time = new Date().toLocaleString();
          listBug.push(model);
          cc.sys.localStorage.setItem("err", JSON.stringify(listBug));
        }
        break;

       case GET_IMG_LIBARY:
        Windown_1.Windown.UIManager.showCropImg(params);
        break;

       case CROP_IMG:
        Windown_1.Windown.DoiAva && Windown_1.Windown.DoiAva.reviecNewBase64ToAddCustom(params);
        break;

       case GET_IMG_LIBARY_CHAT:
        cc.systemEvent.emit(EVENT_MANAGER_1.EVENT_MANAGER.GET_IMG_CHAT, params);
        break;

       case SCALE_IMG_CHAT:
        break;

       case GET_ISSAFE:
        Windown_1.Windown.IsSafeNative = params;
      }
    };
    var Util = function() {
      function Util() {}
      Util.onCallNative = function(evt, params) {
        cc.log("onCallNative:" + evt);
        cc.sys.os === cc.sys.OS_ANDROID && cc.sys.isNative ? jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "onCallFromJavascript", "(Ljava/lang/String;Ljava/lang/String;)V", evt, params) : cc.sys.os === cc.sys.OS_IOS && cc.sys.isNative && jsb.reflection.callStaticMethod("AppController", "onCallFromJavaScript:andParams:", evt, params);
      };
      Util.unzipFilePath = function(distName, version, path) {
        Util.onCallNative(UNZIP, JSON.stringify({
          name: distName,
          path: path,
          version: version
        }));
      };
      Util.resetListBug = function() {
        listBug = [];
      };
      Util.onCoppyToClip = function(str) {
        Util.onCallNative(COPPY_TO_CLIP, str);
      };
      Util.onGetDeviceId = function() {
        Util.onCallNative(GET_ANDROID_ID, "");
      };
      Util.onGetImgInLibary = function() {
        Util.onCallNative(GET_IMG_LIBARY, "");
      };
      Util.onGetImgInLibaryChat = function() {
        if (cc.sys.isNative) Util.onCallNative(GET_IMG_LIBARY_CHAT, ""); else {
          var fileUploader = null;
          false;
          fileUploader = document.getElementById("file-uploader");
          fileUploader.addEventListener("change", function(e) {
            var file = e.target.files[0];
            var blobURL = URL.createObjectURL(file);
            var img = new Image();
            img.src = blobURL;
            img.onerror = function() {
              URL.revokeObjectURL(this.src);
              console.log("Cannot load image");
            };
            img.onload = function() {
              URL.revokeObjectURL(this.src);
              var canvas = document.createElement("canvas");
              var width = img.width;
              var height = img.height;
              var newWidth = width;
              var newHeight = height;
              var max = 650;
              var min = 150;
              if (width > height) {
                if (width > max) {
                  var scacle = max / width;
                  newWidth = width * scacle;
                  newHeight = height * scacle;
                } else if (width < min) {
                  var scacle = min / width;
                  newWidth = width * scacle;
                  newHeight = height * scacle;
                }
              } else if (height > max) {
                var scacle = max / height;
                newWidth = width * scacle;
                newHeight = height * scacle;
              } else if (height < min) {
                var scacle = min / height;
                newWidth = width * scacle;
                newHeight = height * scacle;
              }
              canvas.width = newWidth;
              canvas.height = newHeight;
              var ctx = canvas.getContext("2d");
              ctx.drawImage(img, 0, 0, newWidth, newHeight);
              var str = canvas.toDataURL("image/jpeg");
              str = str.replace("data:", "").replace(/^.+,/, "");
              cc.systemEvent.emit(EVENT_MANAGER_1.EVENT_MANAGER.GET_IMG_CHAT, str);
            };
          });
          fileUploader.click();
        }
      };
      Util.onSetInfoScale = function(str) {
        Util.onCallNative(SET_INFO_SCACLE, str);
      };
      Util.getImgMiniChat = function(str) {
        Util.onCallNative(SCALE_IMG_CHAT, str);
      };
      Util.onCropImg = function(str) {
        Util.onCallNative(CROP_IMG, str);
      };
      Util.getIsSafe = function() {
        Util.onCallNative(GET_ISSAFE, "");
      };
      Util.ThrowErrProsime = function(e) {
        if (e && e.stack) {
          if (cc.sys.isNative) {
            var erro = e.stack;
            erro = erro.replace(/[\n]/g, "--");
            var string = "null---ABC---null---ABC---" + erro;
            cc.NativeCallJS(ERR_SHOW, string);
          } else cc.error(e);
          throw new InfoERR_1.InfoErr("loi await");
        }
        console.error(e);
      };
      return Util;
    }();
    exports.Util = Util;
    cc._RF.pop();
  }, {
    "./DefineTs/EVENT_MANAGER": "EVENT_MANAGER",
    "./InfoERR": "InfoERR",
    "./Windown": "Windown"
  } ],
  VMBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f4df1c0uM5DR6YArjUAH5JL", "VMBase");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ViewModel_1 = require("./ViewModel");
    var DEBUG_WATCH_PATH = false;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var VMBase = function(_super) {
      __extends(VMBase, _super);
      function VMBase() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.watchPath = "";
        _this.watchPathArr = [];
        _this.templateMode = false;
        _this.templateValueArr = [];
        _this.VM = ViewModel_1.VM;
        return _this;
      }
      VMBase.prototype.onLoad = function() {
        var _this = this;
        false;
        var paths = this.watchPath.split(".");
        for (var i = 1; i < paths.length; i++) {
          var p = paths[i];
          if ("*" == p) {
            var index = this.node.getParent().children.findIndex(function(n) {
              return n === _this.node;
            });
            index <= 0 && (index = 0);
            paths[i] = index.toString();
            break;
          }
        }
        this.watchPath = paths.join(".");
        var pathArr = this.watchPathArr;
        if (pathArr.length >= 1) for (var i = 0; i < pathArr.length; i++) {
          var path = pathArr[i];
          var paths_1 = path.split(".");
          for (var i_1 = 1; i_1 < paths_1.length; i_1++) {
            var p = paths_1[i_1];
            if ("*" == p) {
              var index = this.node.getParent().children.findIndex(function(n) {
                return n === _this.node;
              });
              index <= 0 && (index = 0);
              paths_1[i_1] = index.toString();
              break;
            }
          }
          this.watchPathArr[i] = paths_1.join(".");
        }
        DEBUG_WATCH_PATH && true && cc.log("All Path", this.watchPath ? [ this.watchPath ] : this.watchPathArr, "<<", this.node.getParent().name + "." + this.node.name);
        "" == this.watchPath && "" == this.watchPathArr.join("") && cc.log("M\u1ed9t n\xfat c\xf3 th\u1ec3 kh\xf4ng c\xf3 b\u1ed9 \u0111\u01b0\u1eddng d\u1eabn:", this.node.getParent().name + "." + this.node.name);
      };
      VMBase.prototype.onEnable = function() {
        false;
        this.templateMode ? this.setMultPathEvent(true) : "" != this.watchPath && this.VM.bindPath(this.watchPath, this.onValueChanged, this);
        this.onValueInit();
      };
      VMBase.prototype.onDisable = function() {
        false;
        this.templateMode ? this.setMultPathEvent(false) : "" != this.watchPath && this.VM.unbindPath(this.watchPath, this.onValueChanged, this);
      };
      VMBase.prototype.setMultPathEvent = function(enabled) {
        void 0 === enabled && (enabled = true);
        false;
        var arr = this.watchPathArr;
        for (var i = 0; i < arr.length; i++) {
          var path = arr[i];
          enabled ? this.VM.bindPath(path, this.onValueChanged, this) : this.VM.unbindPath(path, this.onValueChanged, this);
        }
      };
      VMBase.prototype.onValueInit = function() {};
      VMBase.prototype.onValueChanged = function(n, o, pathArr) {};
      VMBase = __decorate([ ccclass ], VMBase);
      return VMBase;
    }(cc.Component);
    exports.default = VMBase;
    cc._RF.pop();
  }, {
    "./ViewModel": "ViewModel"
  } ],
  VMCompsEdit: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fc818c0B+JOp4ioOo+taD13", "VMCompsEdit");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode, menu = _a.menu, help = _a.help;
    var ACTION_MODE;
    (function(ACTION_MODE) {
      ACTION_MODE[ACTION_MODE["SEARCH_COMPONENT"] = 0] = "SEARCH_COMPONENT";
      ACTION_MODE[ACTION_MODE["ENABLE_COMPONENT"] = 1] = "ENABLE_COMPONENT";
      ACTION_MODE[ACTION_MODE["REPLACE_WATCH_PATH"] = 2] = "REPLACE_WATCH_PATH";
      ACTION_MODE[ACTION_MODE["DELETE_COMPONENT"] = 3] = "DELETE_COMPONENT";
    })(ACTION_MODE || (ACTION_MODE = {}));
    var MVCompsEdit = function(_super) {
      __extends(MVCompsEdit, _super);
      function MVCompsEdit() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.findList = [ "VMBase", "VMParent" ];
        _this.actionType = ACTION_MODE.SEARCH_COMPONENT;
        _this.allowDelete = false;
        _this.targetPath = "game";
        _this.replacePath = "*";
        _this.canCollectNodes = false;
        _this.collectNodes = [];
        return _this;
      }
      Object.defineProperty(MVCompsEdit.prototype, "findTrigger", {
        get: function() {
          return false;
        },
        set: function(v) {
          this.setComponents(0);
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MVCompsEdit.prototype, "enableTrigger", {
        get: function() {
          return false;
        },
        set: function(v) {
          this.setComponents(1);
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MVCompsEdit.prototype, "disableTrigger", {
        get: function() {
          return false;
        },
        set: function(v) {
          this.setComponents(2);
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MVCompsEdit.prototype, "deleteTrigger", {
        get: function() {
          return false;
        },
        set: function(v) {
          this.setComponents(3);
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(MVCompsEdit.prototype, "replaceTrigger", {
        get: function() {
          return false;
        },
        set: function(v) {
          this.setComponents(4);
        },
        enumerable: false,
        configurable: true
      });
      MVCompsEdit.prototype.onLoad = function() {
        true;
        var path = this.getNodePath(this.node);
        console.error("you forget delete MVEditFinder,[path]", path);
      };
      MVCompsEdit.prototype.setComponents = function(state) {
        var _this = this;
        var array = this.findList;
        var title = "T\xecm ki\u1ebfm c\xe1c th\xe0nh ph\u1ea7n d\u01b0\u1edbi n\xfat hi\u1ec7n t\u1ea1i";
        switch (state) {
         case 0:
          title = "T\xecm ki\u1ebfm c\xe1c th\xe0nh ph\u1ea7n d\u01b0\u1edbi n\xfat hi\u1ec7n t\u1ea1i";
          break;

         case 1:
          title = "K\xedch ho\u1ea1t c\xe1c th\xe0nh ph\u1ea7n c\u1ee7a c\xe1c n\xfat sau";
          break;

         case 2:
          title = "T\u1eaft c\xe1c th\xe0nh ph\u1ea7n c\u1ee7a c\xe1c n\xfat sau";
          break;

         case 3:
          title = "Lo\u1ea1i b\u1ecf c\xe1c th\xe0nh ph\u1ea7n c\u1ee7a c\xe1c n\xfat sau";
          break;

         case 4:
          title = "Thay th\u1ebf \u0111\u01b0\u1eddng d\u1eabn c\u1ee7a c\xe1c n\xfat sau";
        }
        cc.log(title);
        cc.log("______________________");
        array.forEach(function(name) {
          _this.searchComponent(name, state);
        });
        cc.log("______________________");
      };
      MVCompsEdit.prototype.searchComponent = function(className, state) {
        var _this = this;
        void 0 === state && (state = 0);
        this.collectNodes = [];
        var comps = this.node.getComponentsInChildren(className);
        if (null == comps || comps.length < 1) return;
        cc.log("[" + className + "]:");
        comps.forEach(function(v) {
          var ext = "";
          state <= 3 && (ext = true === v.templateMode ? v.watchPathArr ? ":[Path:" + v.watchPathArr.join("|") + "]" : "" : v.watchPath ? ":[Path:" + v.watchPath + "]" : "");
          cc.log(_this.getNodePath(v.node) + ext);
          switch (state) {
           case 0:
            _this.canCollectNodes && -1 === _this.collectNodes.indexOf(v.node) && _this.collectNodes.push(v.node);
            break;

           case 1:
            v.enabled = true;
            break;

           case 2:
            v.enabled = false;
            break;

           case 3:
            v.node.removeComponent(v);
            break;

           case 4:
            var targetPath = _this.targetPath;
            var replacePath = _this.replacePath;
            if (true === v.templateMode) for (var i = 0; i < v.watchPathArr.length; i++) {
              var path = v.watchPathArr[i];
              v.watchPathArr[i] = _this.replaceNodePath(path, targetPath, replacePath);
            } else v.watchPath = _this.replaceNodePath(v.watchPath, targetPath, replacePath);
          }
        });
      };
      MVCompsEdit.prototype.replaceNodePath = function(path, search, replace) {
        var pathArr = path.split(".");
        var searchArr = search.split(".");
        var replaceArr = replace.split(".");
        var match = true;
        for (var i = 0; i < searchArr.length; i++) if (pathArr[i] !== searchArr[i]) {
          match = false;
          break;
        }
        if (true === match) {
          for (var i = 0; i < replaceArr.length; i++) pathArr[i] = replaceArr[i];
          cc.log("c\u1eadp nh\u1eadt \u0111\u01b0\u1eddng d\u1eabn:", path, ">>>", pathArr.join("."));
        }
        return pathArr.join(".");
      };
      MVCompsEdit.prototype.getNodePath = function(node) {
        var parent = node;
        var array = [];
        while (parent) {
          var p = parent.getParent();
          if (!p) break;
          array.push(parent.name);
          parent = p;
        }
        return array.reverse().join("/");
      };
      __decorate([ property({
        type: [ cc.String ]
      }) ], MVCompsEdit.prototype, "findList", void 0);
      __decorate([ property({
        type: cc.Enum(ACTION_MODE)
      }) ], MVCompsEdit.prototype, "actionType", void 0);
      __decorate([ property({
        tooltip: "Check xong s\u1ebd t\u1ef1 \u0111\u1ed9ng t\xecm linh ki\u1ec7n \u0111\xe3 \u0111i\u1ec1n trong find list",
        visible: function() {
          return this.actionType === ACTION_MODE.SEARCH_COMPONENT;
        }
      }) ], MVCompsEdit.prototype, "findTrigger", null);
      __decorate([ property({
        tooltip: "Sau khi ki\u1ec3m tra, c\xe1c th\xe0nh ph\u1ea7n \u0111i\u1ec1n v\xe0o danh s\xe1ch t\xecm ki\u1ebfm s\u1ebd \u0111\u01b0\u1ee3c k\xedch ho\u1ea1t h\xe0ng lo\u1ea1t",
        visible: function() {
          return this.actionType === ACTION_MODE.ENABLE_COMPONENT;
        }
      }) ], MVCompsEdit.prototype, "enableTrigger", null);
      __decorate([ property({
        tooltip: "Sau khi ki\u1ec3m tra, c\xe1c th\xe0nh ph\u1ea7n \u0111i\u1ec1n v\xe0o danh s\xe1ch t\xecm ki\u1ebfm s\u1ebd \u0111\u01b0\u1ee3c \u0111\xf3ng l\u1ea1i theo \u0111\u1ee3t",
        visible: function() {
          return this.actionType === ACTION_MODE.ENABLE_COMPONENT;
        }
      }) ], MVCompsEdit.prototype, "disableTrigger", null);
      __decorate([ property({
        tooltip: "\u0110\u01b0\u1ee3c ph\xe9p x\xf3a c\xe1c th\xe0nh ph\u1ea7n c\u1ee7a n\xfat, n\u1ebfu c\u1ea7n x\xf3a vui l\xf2ng ki\u1ec3m tra l\u1ea1i \u0111\u1ec3 tr\xe1nh b\u1ecb l\u1ee3i d\u1ee5ng",
        visible: function() {
          return this.actionType === ACTION_MODE.DELETE_COMPONENT;
        }
      }) ], MVCompsEdit.prototype, "allowDelete", void 0);
      __decorate([ property({
        tooltip: "Sau khi ki\u1ec3m tra, c\xe1c th\xe0nh ph\u1ea7n \u0111i\u1ec1n v\xe0o danh s\xe1ch t\xecm ki\u1ebfm s\u1ebd b\u1ecb x\xf3a h\xe0ng lo\u1ea1t",
        displayName: "[ X DELETE X ]",
        visible: function() {
          return this.allowDelete && this.actionType === ACTION_MODE.DELETE_COMPONENT;
        }
      }) ], MVCompsEdit.prototype, "deleteTrigger", null);
      __decorate([ property({
        tooltip: "Sau khi ki\u1ec3m tra, c\xe1c \u0111\u01b0\u1eddng d\u1eabn \u0111\u01b0\u1ee3c ch\u1ec9 \u0111\u1ecbnh s\u1ebd \u0111\u01b0\u1ee3c thay th\u1ebf h\xe0ng lo\u1ea1t",
        visible: function() {
          return this.actionType === ACTION_MODE.REPLACE_WATCH_PATH;
        }
      }) ], MVCompsEdit.prototype, "replaceTrigger", null);
      __decorate([ property({
        tooltip: "\u0110\u01b0\u1eddng d\u1eabn ph\xf9 h\u1ee3p, quy t\u1eafc ph\xf9 h\u1ee3p: t\xecm ki\u1ebfm \u0111\u01b0\u1eddng d\u1eabn b\u1eaft \u0111\u1ea7u b\u1eb1ng game",
        visible: function() {
          return this.actionType === ACTION_MODE.REPLACE_WATCH_PATH;
        }
      }) ], MVCompsEdit.prototype, "targetPath", void 0);
      __decorate([ property({
        tooltip: "\u0110\u01b0\u1eddng d\u1eabn \u0111\u1ec3 thay th\u1ebf, thay th\u1ebf \u0111\u01b0\u1eddng d\u1eabn ph\xf9 h\u1ee3p",
        visible: function() {
          return this.actionType === ACTION_MODE.REPLACE_WATCH_PATH;
        }
      }) ], MVCompsEdit.prototype, "replacePath", void 0);
      __decorate([ property({
        tooltip: "C\xf3 thu th\u1eadp c\xe1c n\xfat \u0111\u01b0\u1ee3c li\xean k\u1ebft v\u1edbi c\xe1c th\xe0nh ph\u1ea7n VM hay kh\xf4ng?",
        visible: function() {
          return this.actionType === ACTION_MODE.SEARCH_COMPONENT;
        }
      }) ], MVCompsEdit.prototype, "canCollectNodes", void 0);
      __decorate([ property({
        type: [ cc.Node ],
        readonly: true,
        tooltip: "C\xe1c n\xfat li\xean quan \u0111\u1ebfn c\xe1c th\xe0nh ph\u1ea7n VM \u0111\u01b0\u1ee3c thu th\u1eadp v\xe0 b\u1ea1n c\xf3 th\u1ec3 t\u1ef1 chuy\u1ec3n \u0111\u1ebfn ch\xfang",
        visible: function() {
          return this.canCollectNodes && this.actionType === ACTION_MODE.SEARCH_COMPONENT;
        }
      }) ], MVCompsEdit.prototype, "collectNodes", void 0);
      MVCompsEdit = __decorate([ ccclass, executeInEditMode, menu("ModelViewer/Edit-Comps"), help("https://github.com/wsssheep/cocos_creator_mvvm_tools/blob/master/docs/VMCompsEdit.md") ], MVCompsEdit);
      return MVCompsEdit;
    }(cc.Component);
    exports.default = MVCompsEdit;
    cc._RF.pop();
  }, {} ],
  VMCustom: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f4744MZtP5MS4KqpjY4uLQc", "VMCustom");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var VMBase_1 = require("./VMBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode, menu = _a.menu, help = _a.help;
    var COMP_ARRAY_CHECK = [ [ "BhvFrameIndex", "index", false ], [ "BhvGroupToggle", "index", false ], [ "BhvRollNumber", "targetValue", false ], [ "cc.Label", "string", false ], [ "cc.RichText", "string", false ], [ "cc.EditBox", "string", true ], [ "cc.Slider", "progress", true ], [ "cc.ProgressBar", "progress", false ], [ "cc.Toggle", "isChecked", true ] ];
    var VMCustom = function(_super) {
      __extends(VMCustom, _super);
      function VMCustom() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.controller = false;
        _this.watchPath = "";
        _this.componentName = "";
        _this.componentProperty = "";
        _this.refreshRate = .1;
        _this._timer = 0;
        _this._watchComponent = null;
        _this._canWatchComponent = false;
        _this._oldValue = null;
        return _this;
      }
      VMCustom.prototype.onLoad = function() {
        _super.prototype.onLoad.call(this);
        this.checkEditorComponent();
        true;
        this._watchComponent = this.node.getComponent(this.componentName);
        this.checkComponentState();
      };
      VMCustom.prototype.onRestore = function() {
        this.checkEditorComponent();
      };
      VMCustom.prototype.start = function() {
        this.onValueInit();
      };
      VMCustom.prototype.checkEditorComponent = function() {
        var checkArray;
        var i;
        var params;
        var comp;
        false;
      };
      VMCustom.prototype.checkComponentState = function() {
        this._canWatchComponent = false;
        if (!this._watchComponent) {
          console.error("Th\xe0nh ph\u1ea7n c\u1ea7n \u0111\u01b0\u1ee3c gi\xe1m s\xe1t ch\u01b0a \u0111\u01b0\u1ee3c \u0111\u1eb7t");
          return;
        }
        if (!this.componentProperty) {
          console.error("Thu\u1ed9c t\xednh c\u1ee7a th\xe0nh ph\u1ea7n c\u1ea7n \u0111\u01b0\u1ee3c gi\xe1m s\xe1t kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1eb7t");
          return;
        }
        if (this.componentProperty in this._watchComponent === false) {
          console.error("Thu\u1ed9c t\xednh c\u1ee7a th\xe0nh ph\u1ea7n c\u1ea7n \u0111\u01b0\u1ee3c theo d\xf5i kh\xf4ng t\u1ed3n t\u1ea1i");
          return;
        }
        this._canWatchComponent = true;
      };
      VMCustom.prototype.getComponentValue = function() {
        return this._watchComponent[this.componentProperty];
      };
      VMCustom.prototype.setComponentValue = function(value) {
        if ("cc.Toggle" == this.componentName) {
          true == value && this.node.getComponent(cc.Toggle).check();
          false == value && this.node.getComponent(cc.Toggle).uncheck();
        } else this._watchComponent[this.componentProperty] = value;
      };
      VMCustom.prototype.onValueInit = function() {
        false;
        this.setComponentValue(this.VM.getValue(this.watchPath));
      };
      VMCustom.prototype.onValueController = function(newValue, oldValue) {
        this.VM.setValue(this.watchPath, newValue);
      };
      VMCustom.prototype.onValueChanged = function(n, o, pathArr) {
        this.setComponentValue(n);
      };
      VMCustom.prototype.update = function(dt) {
        false;
        if (!this.controller) return;
        if (!this._canWatchComponent || false === this._watchComponent["enabled"]) return;
        this._timer += dt;
        if (this._timer < this.refreshRate) return;
        this._timer = 0;
        var oldValue = this._oldValue;
        var newValue = this.getComponentValue();
        if (this._oldValue === newValue) return;
        this._oldValue = this.getComponentValue();
        this.onValueController(newValue, oldValue);
      };
      __decorate([ property({
        tooltip: "k\xedch ho\u1ea1t controller,\u0111\u1ec3 b\u1eadt li\xean k\u1ebft hai chi\u1ec1u, n\u1ebfu kh\xf4ng th\xec ch\u1ec9 c\xf3 th\u1ec3 nh\u1eadn \u0111\u01b0\u1ee3c tin nh\u1eafn"
      }) ], VMCustom.prototype, "controller", void 0);
      __decorate([ property ], VMCustom.prototype, "watchPath", void 0);
      __decorate([ property({
        tooltip: "T\xean c\u1ee7a th\xe0nh ph\u1ea7n r\xe0ng bu\u1ed9c"
      }) ], VMCustom.prototype, "componentName", void 0);
      __decorate([ property({
        tooltip: "C\xe1c thu\u1ed9c t\xednh c\u1ea7n \u0111\u01b0\u1ee3c gi\xe1m s\xe1t tr\xean th\xe0nh ph\u1ea7n"
      }) ], VMCustom.prototype, "componentProperty", void 0);
      __decorate([ property({
        tooltip: "L\xe0m m\u1edbi t\u1ea7n s\u1ed1 kho\u1ea3ng th\u1eddi gian (ch\u1ec9 \u1ea3nh h\u01b0\u1edfng \u0111\u1ebfn t\u1ea7n su\u1ea5t ki\u1ec3m tra b\u1ea9n)",
        step: .01,
        range: [ 0, 1 ],
        visible: function() {
          return true === this.controller;
        }
      }) ], VMCustom.prototype, "refreshRate", void 0);
      VMCustom = __decorate([ ccclass, executeInEditMode, menu("ModelViewer/VM-Custom"), help("https://github.com/wsssheep/cocos_creator_mvvm_tools/blob/master/docs/VMCustom.md") ], VMCustom);
      return VMCustom;
    }(VMBase_1.default);
    exports.default = VMCustom;
    cc._RF.pop();
  }, {
    "./VMBase": "VMBase"
  } ],
  VMEvent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a3ac79FE+RGVqLNzALmPs8J", "VMEvent");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var VMBase_1 = require("./VMBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode, menu = _a.menu, help = _a.help;
    var FILTER_MODE;
    (function(FILTER_MODE) {
      FILTER_MODE[FILTER_MODE["none"] = 0] = "none";
      FILTER_MODE[FILTER_MODE["=="] = 1] = "==";
      FILTER_MODE[FILTER_MODE["!="] = 2] = "!=";
      FILTER_MODE[FILTER_MODE[">"] = 3] = ">";
      FILTER_MODE[FILTER_MODE[">="] = 4] = ">=";
      FILTER_MODE[FILTER_MODE["<"] = 5] = "<";
      FILTER_MODE[FILTER_MODE["<="] = 6] = "<=";
    })(FILTER_MODE || (FILTER_MODE = {}));
    var VMEvent = function(_super) {
      __extends(VMEvent, _super);
      function VMEvent() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.templateMode = false;
        _this.watchPath = "";
        _this.triggerOnce = false;
        _this.triggerInit = false;
        _this.watchPathArr = [];
        _this.filterMode = FILTER_MODE.none;
        _this.compareValue = "";
        _this.changeEvents = [];
        return _this;
      }
      VMEvent.prototype.onValueInit = function() {
        if (this.triggerInit) {
          var value = this.VM.getValue(this.watchPath);
          this.onValueChanged(value, value, this.watchPath.split("."));
        }
      };
      VMEvent.prototype.onValueChanged = function(newVar, oldVar, pathArr) {
        var res = this.conditionCheck(newVar, this.compareValue);
        if (!res) return;
        Array.isArray(this.changeEvents) && this.changeEvents.forEach(function(v) {
          v.emit([ newVar, oldVar, pathArr ]);
        });
        true === this.triggerOnce && (this.enabled = false);
      };
      VMEvent.prototype.conditionCheck = function(a, b) {
        var cod = FILTER_MODE;
        switch (this.filterMode) {
         case cod.none:
          return true;

         case cod["=="]:
          if (a == b) return true;
          break;

         case cod["!="]:
          if (a != b) return true;
          break;

         case cod["<"]:
          if (a < b) return true;
          break;

         case cod[">"]:
          if (a > b) return true;
          break;

         case cod[">="]:
          if (a >= b) return true;
          break;

         case cod["<"]:
          if (a < b) return true;
          break;

         case cod["<="]:
          if (a <= b) return true;
        }
        return false;
      };
      __decorate([ property({
        tooltip: "S\u1eed d\u1ee5ng ch\u1ebf \u0111\u1ed9 m\u1eabu, b\u1ea1n c\xf3 th\u1ec3 s\u1eed d\u1ee5ng gi\xe1m s\xe1t nhi\u1ec1u \u0111\u01b0\u1eddng"
      }) ], VMEvent.prototype, "templateMode", void 0);
      __decorate([ property({
        tooltip: "L\u1eafng nghe \u0111\u01b0\u1eddng d\u1eabn \u0111\u1ec3 nh\u1eadn gi\xe1 tr\u1ecb",
        visible: function() {
          return false === this.templateMode;
        }
      }) ], VMEvent.prototype, "watchPath", void 0);
      __decorate([ property({
        tooltip: "S\u1ef1 ki\u1ec7n s\u1ebd t\u1ef1 \u0111\u1ed9ng \u0111\xf3ng sau khi \u0111\u01b0\u1ee3c k\xedch ho\u1ea1t m\u1ed9t l\u1ea7n"
      }) ], VMEvent.prototype, "triggerOnce", void 0);
      __decorate([ property({
        tooltip: "S\u1ef1 ki\u1ec7n \u0111\u01b0\u1ee3c k\xedch ho\u1ea1t khi kh\u1edfi t\u1ea1o"
      }) ], VMEvent.prototype, "triggerInit", void 0);
      __decorate([ property({
        tooltip: "Nghe nhi\u1ec1u \u0111\u01b0\u1eddng d\u1eabn \u0111\u1ec3 l\u1ea5y gi\xe1 tr\u1ecb. S\u1ef1 thay \u0111\u1ed5i c\u1ee7a c\xe1c gi\xe1 tr\u1ecb n\xe0y s\u1ebd \u0111\u01b0\u1ee3c g\u1ecdi l\u1ea1i th\xf4ng qua h\xe0m n\xe0y. Vui l\xf2ng s\u1eed d\u1ee5ng pathArr \u0111\u1ec3 ph\xe2n bi\u1ec7t c\xe1c gi\xe1 tr\u1ecb thu \u0111\u01b0\u1ee3c ",
        type: [ cc.String ],
        visible: function() {
          return true === this.templateMode;
        }
      }) ], VMEvent.prototype, "watchPathArr", void 0);
      __decorate([ property({
        tooltip: "Ch\u1ebf \u0111\u1ed9 l\u1ecdc, s\u1ebd l\u1ecdc ra c\xe1c tr\xecnh k\xedch ho\u1ea1t th\u1eddi gian d\u1ef1a tr\xean c\xe1c \u0111i\u1ec1u ki\u1ec7n",
        type: cc.Enum(FILTER_MODE)
      }) ], VMEvent.prototype, "filterMode", void 0);
      __decorate([ property({
        visible: function() {
          return this.filterMode !== FILTER_MODE.none;
        }
      }) ], VMEvent.prototype, "compareValue", void 0);
      __decorate([ property([ cc.Component.EventHandler ]) ], VMEvent.prototype, "changeEvents", void 0);
      VMEvent = __decorate([ ccclass, executeInEditMode, menu("ModelViewer/VM-EventCall"), help("https://github.com/wsssheep/cocos_creator_mvvm_tools/blob/master/docs/VMEvent.md") ], VMEvent);
      return VMEvent;
    }(VMBase_1.default);
    exports.default = VMEvent;
    cc._RF.pop();
  }, {
    "./VMBase": "VMBase"
  } ],
  VMLabel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b1d4fwY7tFBVZ83/r/4fH6Z", "VMLabel");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var VMBase_1 = require("./VMBase");
    var StringFormat_1 = require("./StringFormat");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu, executeInEditMode = _a.executeInEditMode, help = _a.help;
    var LABEL_TYPE = {
      CC_LABEL: "cc.Label",
      CC_RICH_TEXT: "cc.RichText",
      CC_EDIT_BOX: "cc.EditBox"
    };
    var VMLabel = function(_super) {
      __extends(VMLabel, _super);
      function VMLabel() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.watchPath = "";
        _this.labelType = LABEL_TYPE.CC_LABEL;
        _this.templateMode = false;
        _this.watchPathArr = [];
        _this.templateValueArr = [];
        _this.templateFormatArr = [];
        _this.originText = null;
        return _this;
      }
      VMLabel.prototype.onRestore = function() {
        this.checkLabel();
      };
      VMLabel.prototype.onLoad = function() {
        _super.prototype.onLoad.call(this);
        this.checkLabel();
        true;
        if (this.templateMode) {
          this.originText = this.getLabelValue();
          this.parseTemplate();
        }
      };
      VMLabel.prototype.start = function() {
        false;
        this.onValueInit();
      };
      VMLabel.prototype.parseTemplate = function() {
        var regexAll = /\{\{(.+?)\}\}/g;
        var regex = /\{\{(.+?)\}\}/;
        var res = this.originText.match(regexAll);
        if (null == res) return;
        for (var i = 0; i < res.length; i++) {
          var e = res[i];
          var arr = e.match(regex);
          var matchName = arr[1];
          var matchInfo = matchName.split(":")[1] || "";
          this.templateFormatArr[i] = matchInfo;
        }
      };
      VMLabel.prototype.getReplaceText = function() {
        if (!this.originText) return "";
        var regexAll = /\{\{(.+?)\}\}/g;
        var regex = /\{\{(.+?)\}\}/;
        var res = this.originText.match(regexAll);
        if (null == res) return "";
        var str = this.originText;
        for (var i = 0; i < res.length; i++) {
          var e = res[i];
          var getValue = void 0;
          var arr = e.match(regex);
          var indexNum = parseInt(arr[1] || "0") || 0;
          var format = this.templateFormatArr[i];
          getValue = this.templateValueArr[indexNum];
          str = str.replace(e, this.getValueFromFormat(getValue, format));
        }
        return str;
      };
      VMLabel.prototype.getValueFromFormat = function(value, format) {
        return StringFormat_1.StringFormatFunction.deal(value, format);
      };
      VMLabel.prototype.onValueInit = function() {
        if (false === this.templateMode) this.setLabelValue(this.VM.getValue(this.watchPath)); else {
          var max = this.watchPathArr.length;
          for (var i = 0; i < max; i++) this.templateValueArr[i] = this.VM.getValue(this.watchPathArr[i], "?");
          this.setLabelValue(this.getReplaceText());
        }
      };
      VMLabel.prototype.onValueChanged = function(n, o, pathArr) {
        if (false === this.templateMode) this.setLabelValue(n); else {
          var path_1 = pathArr.join(".");
          var index = this.watchPathArr.findIndex(function(v) {
            return v === path_1;
          });
          if (index >= 0) {
            this.templateValueArr[index] = n;
            this.setLabelValue(this.getReplaceText());
          }
        }
      };
      VMLabel.prototype.setLabelValue = function(value) {
        this.getComponent(this.labelType).string = value + "";
      };
      VMLabel.prototype.getLabelValue = function() {
        return this.getComponent(this.labelType).string;
      };
      VMLabel.prototype.checkLabel = function() {
        var checkArray = [ "cc.Label", "cc.RichText", "cc.EditBox" ];
        for (var i = 0; i < checkArray.length; i++) {
          var e = checkArray[i];
          var comp = this.node.getComponent(e);
          if (comp) {
            this.labelType = e;
            return true;
          }
        }
        cc.error("Kh\xf4ng c\xf3 th\xe0nh ph\u1ea7n label n\xe0o \u0111\u01b0\u1ee3c g\u1eafn");
        return false;
      };
      __decorate([ property({
        visible: function() {
          return false === this.templateMode;
        }
      }) ], VMLabel.prototype, "watchPath", void 0);
      __decorate([ property({
        readonly: true
      }) ], VMLabel.prototype, "labelType", void 0);
      __decorate([ property({
        tooltip: "Vi\u1ec7c c\xf3 b\u1eadt m\xe3 m\u1eabu hay kh\xf4ng ch\u1ec9 c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c \u0111\u1eb7t tr\u01b0\u1edbc th\u1eddi gian ch\u1ea1y, \n s\u1ebd t\u1ef1 \u0111\u1ed9ng ph\xe2n t\xedch c\xfa ph\xe1p m\u1eabu {{0}} v\xe0 t\u1ef1 \u0111\u1ed9ng \u0111\u1eb7t \u0111\u01b0\u1eddng d\u1eabn gi\xe1m s\xe1t"
      }) ], VMLabel.prototype, "templateMode", void 0);
      __decorate([ property({
        type: [ cc.String ],
        visible: function() {
          return true === this.templateMode;
        }
      }) ], VMLabel.prototype, "watchPathArr", void 0);
      VMLabel = __decorate([ ccclass, executeInEditMode, menu("ModelViewer/VM-Label"), help("https://github.com/wsssheep/cocos_creator_mvvm_tools/blob/master/docs/VMLabel.md") ], VMLabel);
      return VMLabel;
    }(VMBase_1.default);
    exports.default = VMLabel;
    cc._RF.pop();
  }, {
    "./StringFormat": "StringFormat",
    "./VMBase": "VMBase"
  } ],
  VMModify: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "26e6bfZGHNEQr5MSKX1DV90", "VMModify");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var VMBase_1 = require("./VMBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu, help = _a.help;
    var CLAMP_MODE;
    (function(CLAMP_MODE) {
      CLAMP_MODE[CLAMP_MODE["MIN"] = 0] = "MIN";
      CLAMP_MODE[CLAMP_MODE["MAX"] = 1] = "MAX";
      CLAMP_MODE[CLAMP_MODE["MIN_MAX"] = 2] = "MIN_MAX";
    })(CLAMP_MODE || (CLAMP_MODE = {}));
    var VMModify = function(_super) {
      __extends(VMModify, _super);
      function VMModify() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.watchPath = "";
        _this.valueClamp = false;
        _this.valueClampMode = CLAMP_MODE.MIN_MAX;
        _this.valueMin = 0;
        _this.valueMax = 1;
        return _this;
      }
      VMModify.prototype.start = function() {};
      VMModify.prototype.clampValue = function(res) {
        var min = this.valueMin;
        var max = this.valueMax;
        if (false == this.valueClamp) return res;
        switch (this.valueClampMode) {
         case CLAMP_MODE.MIN_MAX:
          res > max && (res = max);
          res < min && (res = min);
          break;

         case CLAMP_MODE.MIN:
          res < min && (res = min);
          break;

         case CLAMP_MODE.MAX:
          res > max && (res = max);
        }
        return res;
      };
      VMModify.prototype.vAddInt = function(e, data) {
        this.vAdd(e, data, true);
      };
      VMModify.prototype.vSubInt = function(e, data) {
        this.vSub(e, data, true);
      };
      VMModify.prototype.vMulInt = function(e, data) {
        this.vMul(e, data, true);
      };
      VMModify.prototype.vDivInt = function(e, data) {
        this.vDiv(e, data, true);
      };
      VMModify.prototype.vAdd = function(e, data, int) {
        void 0 === int && (int = false);
        if (!this.enabled) return;
        var a = parseFloat(data);
        var res = this.VM.getValue(this.watchPath, 0) + a;
        int && (res = Math.round(res));
        this.VM.setValue(this.watchPath, this.clampValue(res));
      };
      VMModify.prototype.vSub = function(e, data, int) {
        void 0 === int && (int = false);
        if (!this.enabled) return;
        var a = parseFloat(data);
        var res = this.VM.getValue(this.watchPath, 0) - a;
        int && (res = Math.round(res));
        this.VM.setValue(this.watchPath, this.clampValue(res));
      };
      VMModify.prototype.vMul = function(e, data, int) {
        void 0 === int && (int = false);
        if (!this.enabled) return;
        var a = parseFloat(data);
        var res = this.VM.getValue(this.watchPath, 0) * a;
        int && (res = Math.round(res));
        this.VM.setValue(this.watchPath, this.clampValue(res));
      };
      VMModify.prototype.vDiv = function(e, data, int) {
        void 0 === int && (int = false);
        if (!this.enabled) return;
        var a = parseFloat(data);
        var res = this.VM.getValue(this.watchPath, 0) / a;
        int && (res = Math.round(res));
        this.VM.setValue(this.watchPath, this.clampValue(res));
      };
      VMModify.prototype.vString = function(e, data) {
        if (!this.enabled) return;
        var a = data;
        this.VM.setValue(this.watchPath, a);
      };
      VMModify.prototype.vNumberInt = function(e, data) {
        if (!this.enabled) return;
        this.vNumber(e, data, true);
      };
      VMModify.prototype.vNumber = function(e, data, int) {
        void 0 === int && (int = false);
        if (!this.enabled) return;
        var a = parseFloat(data);
        int && (a = Math.round(a));
        this.VM.setValue(this.watchPath, this.clampValue(a));
      };
      __decorate([ property ], VMModify.prototype, "watchPath", void 0);
      __decorate([ property() ], VMModify.prototype, "valueClamp", void 0);
      __decorate([ property({
        type: cc.Enum(CLAMP_MODE),
        visible: function() {
          return true === this.valueClamp;
        }
      }) ], VMModify.prototype, "valueClampMode", void 0);
      __decorate([ property({
        visible: function() {
          return true === this.valueClamp && this.valueClampMode !== CLAMP_MODE.MAX;
        }
      }) ], VMModify.prototype, "valueMin", void 0);
      __decorate([ property({
        visible: function() {
          return true === this.valueClamp && this.valueClampMode !== CLAMP_MODE.MIN;
        }
      }) ], VMModify.prototype, "valueMax", void 0);
      VMModify = __decorate([ ccclass, menu("ModelViewer/VM-Modify"), help("https://github.com/wsssheep/cocos_creator_mvvm_tools/blob/master/docs/VMModify.md") ], VMModify);
      return VMModify;
    }(VMBase_1.default);
    exports.default = VMModify;
    cc._RF.pop();
  }, {
    "./VMBase": "VMBase"
  } ],
  VMParent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b672aemUs9KSZbLKGfm7hd/", "VMParent");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ViewModel_1 = require("./ViewModel");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, help = _a.help, executionOrder = _a.executionOrder;
    var VMParent = function(_super) {
      __extends(VMParent, _super);
      function VMParent() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.tag = "_temp";
        _this.data = {};
        _this.VM = ViewModel_1.VM;
        return _this;
      }
      VMParent.prototype.onLoad = function() {
        if (null == this.data) return;
        this.tag = "_temp<" + this.node.uuid.replace(".", "") + ">";
        ViewModel_1.VM.add(this.data, this.tag);
        var comps = this.getVMComponents();
        for (var i = 0; i < comps.length; i++) {
          var comp = comps[i];
          this.replaceVMPath(comp, this.tag);
        }
        this.onBind();
      };
      VMParent.prototype.onBind = function() {};
      VMParent.prototype.onUnBind = function() {};
      VMParent.prototype.replaceVMPath = function(comp, tag) {
        var path = comp["watchPath"];
        if (true == comp["templateMode"]) {
          var pathArr = comp["watchPathArr"];
          if (pathArr) for (var i = 0; i < pathArr.length; i++) {
            var path_1 = pathArr[i];
            pathArr[i] = path_1.replace("*", tag);
          }
        } else "*" === path.split(".")[0] && (comp["watchPath"] = path.replace("*", tag));
      };
      VMParent.prototype.getVMComponents = function() {
        var _this = this;
        var comps = this.node.getComponentsInChildren("VMBase");
        var parents = this.node.getComponentsInChildren("VMParent").filter(function(v) {
          return v.uuid !== _this.uuid;
        });
        var filters = [];
        parents.forEach(function(node) {
          filters = filters.concat(node.getComponentsInChildren("VMBase"));
        });
        comps = comps.filter(function(v) {
          return filters.indexOf(v) < 0;
        });
        return comps;
      };
      VMParent.prototype.onDestroy = function() {
        this.onUnBind();
        ViewModel_1.VM.remove(this.tag);
        this.data = null;
      };
      VMParent = __decorate([ ccclass, executionOrder(-1), help("https://github.com/wsssheep/cocos_creator_mvvm_tools/blob/master/docs/VMParent.md") ], VMParent);
      return VMParent;
    }(cc.Component);
    exports.default = VMParent;
    cc._RF.pop();
  }, {
    "./ViewModel": "ViewModel"
  } ],
  VMProgress: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2e079QGKD9ORJrfxDSZKZ/t", "VMProgress");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var VMCustom_1 = require("./VMCustom");
    var StringFormat_1 = require("./StringFormat");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu, help = _a.help;
    var VMProgress = function(_super) {
      __extends(VMProgress, _super);
      function VMProgress() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.watchPath = "";
        _this.watchPathArr = [ "[min]", "[max]" ];
        _this.templateMode = true;
        _this.stringFormat = "";
        return _this;
      }
      VMProgress.prototype.onLoad = function() {
        (this.watchPathArr.length < 2 || "[min]" == this.watchPathArr[0] || "[max]" == this.watchPathArr[1]) && console.error("VMProgress must have two values!");
        _super.prototype.onLoad.call(this);
      };
      VMProgress.prototype.start = function() {
        true;
        this.onValueInit();
      };
      VMProgress.prototype.onValueInit = function() {
        var max = this.watchPathArr.length;
        for (var i = 0; i < max; i++) this.templateValueArr[i] = this.VM.getValue(this.watchPathArr[i]);
        var value = this.templateValueArr[0] / this.templateValueArr[1];
        this.setComponentValue(value);
      };
      VMProgress.prototype.setComponentValue = function(value) {
        if ("" !== this.stringFormat) {
          var res = StringFormat_1.StringFormatFunction.deal(value, this.stringFormat);
          _super.prototype.setComponentValue.call(this, res);
        } else _super.prototype.setComponentValue.call(this, value);
      };
      VMProgress.prototype.onValueController = function(n, o) {
        var value = Math.round(n * this.templateValueArr[1]);
        Number.isNaN(value) && (value = 0);
        this.VM.setValue(this.watchPathArr[0], value);
      };
      VMProgress.prototype.onValueChanged = function(n, o, pathArr) {
        if (false === this.templateMode) return;
        var path = pathArr.join(".");
        var index = this.watchPathArr.findIndex(function(v) {
          return v === path;
        });
        index >= 0 && (this.templateValueArr[index] = n);
        var value = this.templateValueArr[0] / this.templateValueArr[1];
        value > 1 && (value = 1);
        (value < 0 || Number.isNaN(value)) && (value = 0);
        this.setComponentValue(value);
      };
      __decorate([ property({
        visible: false,
        override: true
      }) ], VMProgress.prototype, "watchPath", void 0);
      __decorate([ property({
        type: [ cc.String ],
        tooltip: "Gi\xe1 tr\u1ecb \u0111\u1ea7u ti\xean l\xe0 gi\xe1 tr\u1ecb t\u1ed1i thi\u1ec3u, gi\xe1 tr\u1ecb th\u1ee9 hai l\xe0 gi\xe1 tr\u1ecb t\u1ed1i \u0111a v\xe0 t\u1ef7 l\u1ec7 c\u1ee7a hai gi\xe1 tr\u1ecb n\xe0y s\u1ebd \u0111\u01b0\u1ee3c t\xednh to\xe1n"
      }) ], VMProgress.prototype, "watchPathArr", void 0);
      __decorate([ property({
        visible: function() {
          return "string" === this.componentProperty;
        },
        tooltip: "\u0110\u1ecbnh d\u1ea1ng chu\u1ed7i, gi\u1ed1ng nh\u01b0 c\xe1c tr\u01b0\u1eddng c\u1ee7a VMLabel, b\u1ea1n c\u1ea7n \u0111i\u1ec1n chu\u1ed7i \u0111\u1ecbnh d\u1ea1ng t\u01b0\u01a1ng \u1ee9ng"
      }) ], VMProgress.prototype, "stringFormat", void 0);
      VMProgress = __decorate([ ccclass, menu("ModelViewer/VM-Progress"), help("https://github.com/wsssheep/cocos_creator_mvvm_tools/blob/master/docs/VMProgress.md") ], VMProgress);
      return VMProgress;
    }(VMCustom_1.default);
    exports.default = VMProgress;
    cc._RF.pop();
  }, {
    "./StringFormat": "StringFormat",
    "./VMCustom": "VMCustom"
  } ],
  VMState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "16c5cz80VdP+rQ+147diMLZ", "VMState");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ViewModel_1 = require("./ViewModel");
    var VMBase_1 = require("./VMBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu, help = _a.help;
    var CONDITION;
    (function(CONDITION) {
      CONDITION[CONDITION["=="] = 0] = "==";
      CONDITION[CONDITION["!="] = 1] = "!=";
      CONDITION[CONDITION[">"] = 2] = ">";
      CONDITION[CONDITION[">="] = 3] = ">=";
      CONDITION[CONDITION["<"] = 4] = "<";
      CONDITION[CONDITION["<="] = 5] = "<=";
      CONDITION[CONDITION["range"] = 6] = "range";
    })(CONDITION || (CONDITION = {}));
    var ACTION;
    (function(ACTION) {
      ACTION[ACTION["NODE_ACTIVE"] = 0] = "NODE_ACTIVE";
      ACTION[ACTION["NODE_VISIBLE"] = 1] = "NODE_VISIBLE";
      ACTION[ACTION["NODE_OPACITY"] = 2] = "NODE_OPACITY";
      ACTION[ACTION["NODE_COLOR"] = 3] = "NODE_COLOR";
      ACTION[ACTION["COMPONENT_CUSTOM"] = 4] = "COMPONENT_CUSTOM";
    })(ACTION || (ACTION = {}));
    var CHILD_MODE_TYPE;
    (function(CHILD_MODE_TYPE) {
      CHILD_MODE_TYPE[CHILD_MODE_TYPE["NODE_INDEX"] = 0] = "NODE_INDEX";
      CHILD_MODE_TYPE[CHILD_MODE_TYPE["NODE_NAME"] = 1] = "NODE_NAME";
    })(CHILD_MODE_TYPE || (CHILD_MODE_TYPE = {}));
    var VMState = function(_super) {
      __extends(VMState, _super);
      function VMState() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.watchPath = "";
        _this.foreachChildMode = false;
        _this.condition = CONDITION["=="];
        _this.foreachChildType = CHILD_MODE_TYPE.NODE_INDEX;
        _this.valueA = "0";
        _this.valueB = "0";
        _this.valueAction = ACTION.NODE_ACTIVE;
        _this.valueActionOpacity = 0;
        _this.valueActionColor = cc.color(155, 155, 155);
        _this.valueComponentName = "";
        _this.valueComponentProperty = "";
        _this.valueComponentDefaultValue = "";
        _this.valueComponentActionValue = "";
        _this.watchNodes = [];
        return _this;
      }
      VMState.prototype.onLoad = function() {
        _super.prototype.onLoad.call(this);
        if (0 == this.watchNodes.length) {
          this.valueAction !== ACTION.NODE_ACTIVE && false === this.foreachChildMode && this.watchNodes.push(this.node);
          this.watchNodes = this.watchNodes.concat(this.node.children);
        }
      };
      VMState.prototype.start = function() {
        this.enabled && this.onValueInit();
      };
      VMState.prototype.onValueInit = function() {
        var value = ViewModel_1.VM.getValue(this.watchPath);
        this.checkNodeFromValue(value);
      };
      VMState.prototype.onValueChanged = function(newVar, oldVar, pathArr) {
        this.checkNodeFromValue(newVar);
      };
      VMState.prototype.checkNodeFromValue = function(value) {
        var _this = this;
        if (this.foreachChildMode) this.watchNodes.forEach(function(node, index) {
          var v = _this.foreachChildType === CHILD_MODE_TYPE.NODE_INDEX ? index : node.name;
          var check = _this.conditionCheck(value, v);
          _this.setNodeState(node, check);
        }); else {
          var check = this.conditionCheck(value, this.valueA, this.valueB);
          this.setNodesStates(check);
        }
      };
      VMState.prototype.setNodesStates = function(checkState) {
        var _this = this;
        var nodes = this.watchNodes;
        var check = checkState;
        nodes.forEach(function(node) {
          _this.setNodeState(node, check);
        });
      };
      VMState.prototype.setNodeState = function(node, checkState) {
        var n = this.valueAction;
        var check = checkState;
        var a = ACTION;
        switch (n) {
         case a.NODE_ACTIVE:
          node.active = !!check;
          break;

         case a.NODE_VISIBLE:
          node.opacity = check ? 255 : 0;
          break;

         case a.NODE_COLOR:
          node.color = check ? this.valueActionColor : cc.color(255, 255, 255);
          break;

         case a.NODE_OPACITY:
          node.opacity = check ? this.valueActionOpacity : 255;
          break;

         case a.COMPONENT_CUSTOM:
          var comp = node.getComponent(this.valueComponentName);
          if (null == comp) return;
          if (this.valueComponentProperty in comp) {
            if ("boolean" == typeof comp[this.valueComponentProperty]) {
              this.valueComponentActionValue = parseInt(this.valueComponentActionValue);
              this.valueComponentDefaultValue = parseInt(this.valueComponentDefaultValue);
            }
            comp[this.valueComponentProperty] = check ? this.valueComponentActionValue : this.valueComponentDefaultValue;
          }
        }
      };
      VMState.prototype.conditionCheck = function(v, a, b) {
        var cod = CONDITION;
        switch (this.condition) {
         case cod["=="]:
          if (v == a) return true;
          break;

         case cod["!="]:
          if (v != a) return true;
          break;

         case cod["<"]:
          if (v < a) return true;
          break;

         case cod[">"]:
          if (v > a) return true;
          break;

         case cod[">="]:
          if (v >= a) return true;
          break;

         case cod["<"]:
          if (v < a) return true;
          break;

         case cod["<="]:
          if (v <= a) return true;
          break;

         case cod["range"]:
          if (v >= a && v <= b) return true;
        }
        return false;
      };
      __decorate([ property ], VMState.prototype, "watchPath", void 0);
      __decorate([ property({
        tooltip: "Duy\u1ec7t qua c\xe1c n\xfat con, chuy\u1ec3n \u0111\u1ed5i t\xean ho\u1eb7c t\xean c\u1ee7a n\xfat con th\xe0nh m\u1ed9t gi\xe1 tr\u1ecb v\xe0 \u0111\xe1nh gi\xe1 r\u1eb1ng gi\xe1 tr\u1ecb th\u1ecfa m\xe3n \u0111i\u1ec1u ki\u1ec7n \u0111\u1ec3 k\xedch ho\u1ea1t"
      }) ], VMState.prototype, "foreachChildMode", void 0);
      __decorate([ property({
        type: cc.Enum(CONDITION)
      }) ], VMState.prototype, "condition", void 0);
      __decorate([ property({
        type: cc.Enum(CHILD_MODE_TYPE),
        tooltip: "Duy\u1ec7t qua c\xe1c n\xfat con, chuy\u1ec3n \u0111\u1ed5i t\xean c\u1ee7a n\xfat con th\xe0nh m\u1ed9t gi\xe1 tr\u1ecb v\xe0 \u0111\xe1nh gi\xe1 r\u1eb1ng gi\xe1 tr\u1ecb th\u1ecfa m\xe3n \u0111i\u1ec1u ki\u1ec7n \u0111\u1ec3 k\xedch ho\u1ea1t",
        visible: function() {
          return true === this.foreachChildMode;
        }
      }) ], VMState.prototype, "foreachChildType", void 0);
      __decorate([ property({
        displayName: "Value: a",
        visible: function() {
          return false === this.foreachChildMode;
        }
      }) ], VMState.prototype, "valueA", void 0);
      __decorate([ property({
        displayName: "Value: b",
        visible: function() {
          return false === this.foreachChildMode && this.condition === CONDITION.range;
        }
      }) ], VMState.prototype, "valueB", void 0);
      __decorate([ property({
        type: cc.Enum(ACTION),
        tooltip: "Th\u1ef1c hi\u1ec7n m\u1ed9t h\xe0nh \u0111\u1ed9ng tr\xean m\u1ed9t n\xfat khi m\u1ed9t \u0111i\u1ec1u ki\u1ec7n \u0111\u01b0\u1ee3c \u0111\xe1p \u1ee9ng"
      }) ], VMState.prototype, "valueAction", void 0);
      __decorate([ property({
        visible: function() {
          return this.valueAction === ACTION.NODE_OPACITY;
        },
        range: [ 0, 255 ],
        type: cc.Integer,
        displayName: "Action Opacity"
      }) ], VMState.prototype, "valueActionOpacity", void 0);
      __decorate([ property({
        visible: function() {
          return this.valueAction === ACTION.NODE_COLOR;
        },
        displayName: "Action Color"
      }) ], VMState.prototype, "valueActionColor", void 0);
      __decorate([ property({
        visible: function() {
          return this.valueAction === ACTION.COMPONENT_CUSTOM;
        },
        displayName: "Component Name"
      }) ], VMState.prototype, "valueComponentName", void 0);
      __decorate([ property({
        visible: function() {
          return this.valueAction === ACTION.COMPONENT_CUSTOM;
        },
        tooltip: "N\u1ebfu type l\xe0 boolean th\xec value l\xe0 0:false,1:true",
        displayName: "Component Property"
      }) ], VMState.prototype, "valueComponentProperty", void 0);
      __decorate([ property({
        visible: function() {
          return this.valueAction === ACTION.COMPONENT_CUSTOM;
        },
        displayName: "Default Value"
      }) ], VMState.prototype, "valueComponentDefaultValue", void 0);
      __decorate([ property({
        visible: function() {
          return this.valueAction === ACTION.COMPONENT_CUSTOM;
        },
        displayName: "Action Value"
      }) ], VMState.prototype, "valueComponentActionValue", void 0);
      __decorate([ property({
        type: [ cc.Node ],
        tooltip: "N\xfat c\u1ea7n th\u1ef1c hi\u1ec7n \u0111i\u1ec1u ki\u1ec7n, n\u1ebfu n\xf3 kh\xf4ng \u0111\u01b0\u1ee3c \u0111i\u1ec1n th\xec tr\u1ea1ng th\xe1i c\u1ee7a n\xfat n\xe0y v\xe0 t\u1ea5t c\u1ea3 c\xe1c n\xfat con c\u1ee7a n\xfat n\xe0y s\u1ebd \u0111\u01b0\u1ee3c th\u1ef1c thi theo m\u1eb7c \u0111\u1ecbnh."
      }) ], VMState.prototype, "watchNodes", void 0);
      VMState = __decorate([ ccclass, menu("ModelViewer/VM-State"), help("https://github.com/wsssheep/cocos_creator_mvvm_tools/blob/master/docs/VMState.md") ], VMState);
      return VMState;
    }(VMBase_1.default);
    exports.default = VMState;
    cc._RF.pop();
  }, {
    "./VMBase": "VMBase",
    "./ViewModel": "ViewModel"
  } ],
  ViewModel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cdc6cugj1JDY5xrguYpwUms", "ViewModel");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.VM = void 0;
    var JsonOb_1 = require("./JsonOb");
    var VM_EMIT_HEAD = "VC:";
    var DEBUG_SHOW_PATH = false;
    function setValueFromPath(obj, path, value, tag) {
      void 0 === tag && (tag = "");
      var props = path.split(".");
      for (var i = 0; i < props.length; i++) {
        var propName = props[i];
        if (propName in obj === false) {
          console.error("[" + propName + "] not find in " + tag + "." + path);
          break;
        }
        i == props.length - 1 ? obj[propName] = value : obj = obj[propName];
      }
    }
    function getValueFromPath(obj, path, def, tag) {
      void 0 === tag && (tag = "");
      var props = path.split(".");
      for (var i = 0; i < props.length; i++) {
        var propName = props[i];
        if (propName in obj === false) {
          console.error("[" + propName + "] not find in " + tag + "." + path);
          return def;
        }
        obj = obj[propName];
      }
      null !== obj && "undefined" !== typeof obj || (obj = def);
      return obj;
    }
    var ViewModel = function() {
      function ViewModel(data, tag) {
        this._tag = null;
        this.active = true;
        this.emitToRootPath = false;
        new JsonOb_1.JsonOb(data, this._callback.bind(this));
        this.$data = data;
        this._tag = tag;
      }
      ViewModel.prototype._callback = function(n, o, path) {
        if (true == this.active) {
          var name = VM_EMIT_HEAD + this._tag + "." + path.join(".");
          DEBUG_SHOW_PATH && cc.log(">>", n, o, path);
          cc.director.emit(name, n, o, [ this._tag ].concat(path));
          this.emitToRootPath && cc.director.emit(VM_EMIT_HEAD + this._tag, n, o, path);
          if (path.length >= 2) for (var i = 0; i < path.length - 1; i++) var e = path[i];
        }
      };
      ViewModel.prototype.setValue = function(path, value) {
        setValueFromPath(this.$data, path, value, this._tag);
      };
      ViewModel.prototype.getValue = function(path, def) {
        return getValueFromPath(this.$data, path, def, this._tag);
      };
      return ViewModel;
    }();
    var VMManager = function() {
      function VMManager() {
        this._mvs = [];
        this.EMIT_HEAD = VM_EMIT_HEAD;
        this.setObjValue = setValueFromPath;
        this.getObjValue = getValueFromPath;
      }
      VMManager.prototype.add = function(data, tag, activeRootObject) {
        void 0 === tag && (tag = "global");
        void 0 === activeRootObject && (activeRootObject = false);
        var vm = new ViewModel(data, tag);
        var has = this._mvs.find(function(v) {
          return v.tag === tag;
        });
        if (tag.includes(".")) {
          console.error("cant write . in tag:", tag);
          return;
        }
        if (has) {
          console.error("already set VM tag:" + tag);
          return;
        }
        vm.emitToRootPath = activeRootObject;
        this._mvs.push({
          tag: tag,
          vm: vm
        });
      };
      VMManager.prototype.remove = function(tag) {
        var index = this._mvs.findIndex(function(v) {
          return v.tag === tag;
        });
        index >= 0 && this._mvs.splice(index, 1);
      };
      VMManager.prototype.get = function(tag) {
        var res = this._mvs.find(function(v) {
          return v.tag === tag;
        });
        if (null != res) return res.vm;
        console.error("cant find VM from:", tag);
      };
      VMManager.prototype.addValue = function(path, value) {
        path = path.trim();
        var rs = path.split(".");
        rs.length < 2 && console.error("Cant find path:" + path);
        var vm = this.get(rs[0]);
        if (!vm) {
          console.error("Cant Set VM:" + rs[0]);
          return;
        }
        var resPath = rs.slice(1).join(".");
        vm.setValue(resPath, vm.getValue(resPath) + value);
      };
      VMManager.prototype.getValue = function(path, def) {
        path = path.trim();
        var rs = path.split(".");
        if (rs.length < 2) {
          console.error("Get Value Cant find path:" + path);
          return;
        }
        var vm = this.get(rs[0]);
        if (!vm) {
          console.error("Cant Get VM:" + rs[0]);
          return;
        }
        return vm.getValue(rs.slice(1).join("."), def);
      };
      VMManager.prototype.setValue = function(path, value) {
        path = path.trim();
        var rs = path.split(".");
        if (rs.length < 2) {
          console.error("Set Value Cant find path:" + path);
          return;
        }
        var vm = this.get(rs[0]);
        if (!vm) {
          console.error("Cant Set VM:" + rs[0]);
          return;
        }
        vm.setValue(rs.slice(1).join("."), value);
      };
      VMManager.prototype.bindPath = function(path, callback, target, useCapture) {
        path = path.trim();
        if ("" == path) {
          console.error(target.node.name, "\u8282\u70b9\u7ed1\u5b9a\u7684\u8def\u5f84\u4e3a\u7a7a");
          return;
        }
        if ("*" === path.split(".")[0]) {
          console.error(path, "\u8def\u5f84\u4e0d\u5408\u6cd5,\u53ef\u80fd\u9519\u8bef\u8986\u76d6\u4e86 VMParent \u7684onLoad \u65b9\u6cd5, \u6216\u8005\u7236\u8282\u70b9\u5e76\u672a\u6302\u8f7d VMParent \u76f8\u5173\u7684\u7ec4\u4ef6\u811a\u672c");
          return;
        }
        cc.director.on(VM_EMIT_HEAD + path, callback, target, useCapture);
      };
      VMManager.prototype.unbindPath = function(path, callback, target) {
        path = path.trim();
        if ("*" === path.split(".")[0]) {
          console.error(path, "\u8def\u5f84\u4e0d\u5408\u6cd5,\u53ef\u80fd\u9519\u8bef\u8986\u76d6\u4e86 VMParent \u7684onLoad \u65b9\u6cd5, \u6216\u8005\u7236\u8282\u70b9\u5e76\u672a\u6302\u8f7d VMParent \u76f8\u5173\u7684\u7ec4\u4ef6\u811a\u672c");
          return;
        }
        cc.director.off(VM_EMIT_HEAD + path, callback, target);
      };
      VMManager.prototype.targetOff = function(target) {
        cc.director.targetOff(target);
      };
      VMManager.prototype.inactive = function() {
        this._mvs.forEach(function(mv) {
          mv.vm.active = false;
        });
      };
      VMManager.prototype.active = function() {
        this._mvs.forEach(function(mv) {
          mv.vm.active = true;
        });
      };
      return VMManager;
    }();
    exports.VM = new VMManager();
    cc._RF.pop();
  }, {
    "./JsonOb": "JsonOb"
  } ],
  Windown: [ function(require, module, exports) {
    (function(Buffer) {
      "use strict";
      cc._RF.push(module, "70fbfvU6xtMqozUP9dWV/S/", "Windown");
      "use strict";
      var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      var __generator = this && this.__generator || function(thisArg, body) {
        var _ = {
          label: 0,
          sent: function() {
            if (1 & t[0]) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        }, f, y, t, g;
        return g = {
          next: verb(0),
          throw: verb(1),
          return: verb(2)
        }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([ n, v ]);
          };
        }
        function step(op) {
          if (f) throw new TypeError("Generator is already executing.");
          while (_) try {
            if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
            0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            (y = 0, t) && (op = [ 2 & op[0], t.value ]);
            switch (op[0]) {
             case 0:
             case 1:
              t = op;
              break;

             case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

             case 5:
              _.label++;
              y = op[1];
              op = [ 0 ];
              continue;

             case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;

             default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
                _ = 0;
                continue;
              }
              if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (6 === op[0] && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              t[2] && _.ops.pop();
              _.trys.pop();
              continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [ 6, e ];
            y = 0;
          } finally {
            f = t = 0;
          }
          if (5 & op[0]) throw op[1];
          return {
            value: op[0] ? op[1] : void 0,
            done: true
          };
        }
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Windown = void 0;
      var ConectManager_1 = require("./Network/ConectManager");
      var PathResource_1 = require("./DefineTs/PathResource");
      var Util_1 = require("./Util");
      var BUNDLE_1 = require("./DefineTs/BUNDLE");
      var OSDefine_1 = require("./DefineTs/OSDefine");
      var InfoERR_1 = require("./InfoERR");
      var GAME_TYPE_1 = require("./Game/GAME_TYPE");
      var Http_1 = require("./Network/Http");
      var objLevel = {
        1: {
          LevelId: 0,
          GameUnlock: [ {
            GameId: 32,
            RoomType: [ 1 ],
            GunType1: [ 1 ],
            GunType2: [],
            IdGunUnlock: 10
          } ],
          IsCashout: true
        },
        2: {
          LevelId: 1,
          GameUnlock: [ {
            GameId: 32,
            RoomType: [ 1 ],
            GunType1: [ 1, 2 ],
            GunType2: [],
            IdGunUnlock: 50
          } ],
          IsCashout: true
        },
        3: {
          LevelId: 2,
          GameUnlock: [ {
            GameId: 32,
            RoomType: [ 1 ],
            GunType1: [ 1, 2, 3 ],
            GunType2: [],
            IdGunUnlock: 100
          } ],
          IsCashout: true
        },
        4: {
          LevelId: 3,
          GameUnlock: [ {
            GameId: 32,
            RoomType: [ 1 ],
            GunType1: [ 1, 2, 3, 4 ],
            GunType2: [],
            IdGunUnlock: 200
          } ],
          IsCashout: true
        },
        5: {
          LevelId: 4,
          GameUnlock: [ {
            GameId: 32,
            RoomType: [ 1 ],
            GunType1: [ 1, 2, 3, 4, 5 ],
            GunType2: [],
            IdGunUnlock: 300
          } ],
          IsCashout: true
        },
        6: {
          LevelId: 5,
          GameUnlock: [ {
            GameId: 32,
            RoomType: [ 1 ],
            GunType1: [ 1, 2, 3, 4, 5, 6 ],
            GunType2: [],
            IdGunUnlock: 500
          } ],
          IsCashout: true
        },
        7: {
          LevelId: 6,
          GameUnlock: [ {
            GameId: 32,
            RoomType: [ 1 ],
            GunType1: [ 1, 2, 3, 4, 5, 6, 7 ],
            GunType2: [],
            IdGunUnlock: 1e3
          } ],
          IsCashout: true
        },
        8: {
          LevelId: 7,
          GameUnlock: [ {
            GameId: 32,
            RoomType: [ 1 ],
            GunType1: [ 1, 2, 3, 4, 5, 6, 7, 8 ],
            GunType2: [],
            IdGunUnlock: 2e3
          } ],
          IsCashout: true
        },
        9: {
          LevelId: 8,
          GameUnlock: [ {
            GameId: 32,
            RoomType: [ 1 ],
            GunType1: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
            GunType2: [],
            IdGunUnlock: 3e3
          } ],
          IsCashout: true
        },
        10: {
          LevelId: 9,
          GameUnlock: [ {
            GameId: 32,
            RoomType: [ 1 ],
            GunType1: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
            GunType2: [],
            IdGunUnlock: 5e3
          } ],
          IsCashout: true
        },
        11: {
          LevelId: 10,
          GameUnlock: [ {
            GameId: 32,
            RoomType: [ 1 ],
            GunType1: [ 0 ],
            GunType2: [],
            IdGunUnlock: 1e4
          } ],
          IsCashout: true
        },
        12: {
          LevelId: 11,
          GameUnlock: [ {
            GameId: 32,
            RoomType: [ 1 ],
            GunType1: [ 0 ],
            GunType2: [],
            IdGunUnlock: 0
          } ],
          IsCashout: true
        },
        13: {
          LevelId: 12,
          GameUnlock: [ {
            GameId: 32,
            RoomType: [ 1 ],
            GunType1: [ 0 ],
            GunType2: [],
            IdGunUnlock: 0
          } ],
          IsCashout: true
        },
        14: {
          LevelId: 13,
          GameUnlock: null,
          IsCashout: true
        }
      };
      var Windown = function() {
        function Windown() {}
        Windown.init = function() {};
        Windown.initUser = function(Object) {
          this.SFSInfouser = Object;
          var base64Ava = this.SFSInfouser.get("base64Ava");
          base64Ava && ("" != base64Ava && "null" != base64Ava || this.SFSInfouser.putNull("base64Ava"));
          this.User.isLogin = true;
          this.User.userName = Object.getUtfString("username");
          this.User.userAg = Object.getLong("ag");
          this.MoneyUser.moneyCache = this.User.userAg;
          this.User.nickName = Object.getUtfString("nickname");
          this.User.userId = Object.getInt("id");
          this.User.phoneNumber = Object.getUtfString("phonenumber");
          this.User.avatrId = Object.getInt("idava");
          this.User.typeAvarta = Object.getInt("typeava");
          this.User.status = Object.getUtfString("status");
          this.User.currentLevel = Object.getInt("currentlevel");
          this.User.totalLevelPoint = Object.getInt("totallevelpoint");
          this.User.currentLevelPoint = Object.getInt("currentlevelpoint");
          this.User.currentVipPoint = Object.getInt("currentvippoint");
          this.User.tokenFacebook = Object.getUtfString("tokenfacebook");
          this.User.isPlayNow = Object.getBool("isPlayNow");
          this.User.isFirtLogin = Object.getBool("isFirtLogin");
          this.MoneyUser.emitNewMonney();
        };
        Windown.disconect = function() {
          cc.log("disconnect windown");
          this.SFSInfouser = null;
          this.User = {
            userName: "",
            nickName: "",
            userAg: 0,
            userId: 0,
            email: "",
            phoneNumber: "",
            numMailNotRead: 0,
            isLogin: false,
            currentGameId: 0,
            currentRoomId: 0,
            currentRoomType: 0,
            status: "",
            typeAvarta: 0,
            avatrId: -1,
            currentLevel: 0,
            currentLevelPoint: 0,
            totalLevelPoint: 0,
            currentVipPoint: 0,
            tokenFacebook: "",
            isPlayNow: false,
            isFirtNap: false,
            isAutoFish: false,
            isGunSet: false,
            isFirtLogin: false
          };
        };
        Windown.restartGame = function() {
          cc.log("RestartGame");
          cc.sys.isNative ? cc.sys.os == cc.sys.OS_WINDOWS && true ? jsb.resetGame() : cc.game.restart() : cc.sys.isMobile ? cc.game.restart() : (Windown.BotController, 
          window.location = window.location);
        };
        Windown.getConfigLevel = function() {
          var obj = objLevel[14];
          var currentLevel = Windown.User.currentLevel;
          for (var temp in objLevel) if (Number.parseInt(temp) == currentLevel) {
            obj = objLevel[temp];
            break;
          }
          return obj;
        };
        Windown.getUnLockGunLevelUp = function() {
          var objLevel = this.getConfigLevel();
          var list = objLevel.GameUnlock;
          if (list) for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var temp = list_1[_i];
            if (temp.GameId == GAME_TYPE_1.default.BongDem) {
              var listRoom1 = temp.GunType1;
              var listRoom2 = temp.GunType2;
              var idGunUnlock = temp.IdGunUnlock;
              if (0 == idGunUnlock) return null;
              if (listRoom2.length > 0) return idGunUnlock;
              if (listRoom1.length > 0) return idGunUnlock;
              return null;
            }
          }
          return null;
        };
        Windown.convertNodeInOtherNode = function(node, otherNode) {
          var worldPos = node.parent.convertToWorldSpaceAR(node.getPosition());
          var viewPos = otherNode.convertToNodeSpaceAR(worldPos);
          return viewPos;
        };
        Windown.convertPosInOtherNode = function(vec, parent, otherNode) {
          var worldPos = parent.convertToWorldSpaceAR(vec);
          var viewPos = otherNode.convertToNodeSpaceAR(worldPos);
          return viewPos;
        };
        Windown.getLevelCashOut = function() {
          for (var temp in objLevel) if (objLevel[temp].IsCashout) return Number.parseInt(temp);
          return 0;
        };
        Windown.initConfig = function() {
          var list = [ {
            Description: "S\u1eed d\u1ee5ng \u0111\u1ec3 \u0111\xf3ng b\u0103ng c\xe1 trong 10 gi\xe2y",
            ItemName: "\u0110\xf3ng B\u0103ng",
            ItemId: 1,
            Duration: 10
          }, {
            Description: "S\u1eed d\u1ee5ng \u0111\u1ec3 t\u0103ng t\u1ed1c \u0111\u1ed9 b\u1eafn s\xfang trong 15 gi\xe2y",
            ItemName: "T\u0103ng t\u1ed1c",
            ItemId: 2,
            Duration: 15
          }, {
            Description: "S\u1eed d\u1ee5ng \u0111\u1ec3 x\xe1c \u0111\u1ecbnh m\u1ee5c ti\xeau trong 15 gi\xe2y",
            ItemName: "M\u1ee5c Ti\xeau",
            ItemId: 3,
            Duration: 15
          }, {
            Description: "Tri\u1ec7u h\u1ed3i c\xe1 \u0111\u1eb7c bi\u1ec7t(khi c\xe1 \u0111\u1eb7c bi\u1ec7t b\u1ecb ti\xeau di\u1ec7t s\u1ebd ng\u1eabu nhi\xean nh\u1eadn \u0111\u01b0\u1ee3c v\u1eadt ph\u1ea9m nh\u01b0 BOOM,M\u1eaft Th\u1ea7n, v.v.. )",
            ItemName: "Tri\u1ec7u H\u1ed3i",
            ItemId: 4,
            Duration: .2
          }, {
            Description: "S\u1eed d\u1ee5ng BOOM Nguy\xean T\u1eed \u0111\u1ec3 ti\xeau di\u1ec7t c\xe1 nh\u1eadn t\u1eeb 50.000 - 150.000 v\xe0ng",
            ItemName: "BOOM Nguy\xean T\u1eed",
            ItemId: 100,
            Duration: 0
          }, {
            Description: "Tri\u1ec7u h\u1ed3i M\u1eaeT TH\u1ea6N \u0111\u1ec3 ti\xeau di\u1ec7t c\xe1 nh\u1eadn t\u1eeb 50.000 - 150.000 v\xe0ng",
            ItemName: "M\u1eaft Th\u1ea7n",
            ItemId: 101,
            Duration: 0
          }, {
            Description: "S\u1eed d\u1ee5ng \u0110INH BA \u0111\u1ec3 ti\xeau di\u1ec7t c\xe1 nh\u1eadn t\u1eeb 50.000 - 350.000 v\xe0ng",
            ItemName: "\u0110inh Ba",
            ItemId: 102,
            Duration: 0
          }, {
            Description: "S\xfang s\xe9t kh\xf3a m\u1ee5c ti\xeau, t\u0103ng t\u1ed1c \u0111\u1ed9 b\u1eafn 20%, c\xf3 t\u1ec9 l\u1ec7 l\xe0m cho\xe1ng c\xe1 1 gi\xe2y (th\xedch h\u1ee3p s\u0103n BOSS)",
            ItemName: "S\xfang S\xe9t",
            ItemId: 1e3,
            Duration: 0
          }, {
            Description: "T\u1ef1 \u0111\u1ed9ng ch\u1ecdn c\xe1 m\u1ee5c ti\xeau v\xe0 b\u1eafn",
            ItemName: "Auto B\u1eafn",
            ItemId: 1001,
            Duration: 0
          } ];
          this.listConfigItem = list;
        };
        Windown.initGameConfig = function(strConfig) {
          var obj = JSON.parse(LZString.decompressFromBase64(strConfig));
          var info = JSON.parse(obj.info);
          Windown.LinkFanpage = info.Fanpage;
          Windown.LinkTele = info.Tele;
          Windown.LinkCSKH = info.cskh;
          Windown.LinkHotline = info.Hotline;
          Windown.LinkMessage = info.Mesenger;
          Windown.LinkVeryTele = info.VeryTele;
          Windown.LinkResetPass = info.ResetPass;
          Windown.LinkEventfanpage = info.EventFanpage;
          cc.log("initGameConfig:", info);
        };
        Windown.test = function() {
          cc.log("test thanh con");
        };
        Windown.formatMoney = function(num, digits, maxNum) {
          void 0 === digits && (digits = 1);
          void 0 === maxNum && (maxNum = 1e4);
          if (Math.abs(num) < Math.abs(maxNum)) return this.formatNumber(num);
          var si = [ {
            value: 1,
            symbol: ""
          }, {
            value: 1e3,
            symbol: "K"
          }, {
            value: 1e6,
            symbol: "M"
          }, {
            value: 1e9,
            symbol: "B"
          }, {
            value: 1e12,
            symbol: "T"
          }, {
            value: 1e15,
            symbol: "P"
          }, {
            value: 1e18,
            symbol: "E"
          } ];
          var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
          var i;
          for (i = si.length - 1; i > 0; i--) if (num >= si[i].value) break;
          return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
        };
        Windown.getFullTime = function(time) {
          var data = new Date(time);
          var ngay = data.getDate();
          ngay < 10 && (ngay = "0" + ngay);
          var thang = data.getMonth() + 1;
          thang < 10 && (thang = "0" + thang);
          var nam = data.getFullYear();
          var gio = data.getHours();
          gio < 10 && (gio = "0" + gio);
          var phut = data.getMinutes();
          phut < 10 && (phut = "0" + phut);
          var giay = data.getSeconds();
          giay < 10 && (giay = "0" + giay);
          return ngay + "/" + thang + "/" + nam + " " + gio + ":" + phut + ":" + giay;
        };
        Windown.getShortTime = function(time) {
          var data = new Date(time);
          var ngay = data.getDate();
          ngay < 10 && (ngay = "0" + ngay);
          var thang = data.getMonth() + 1;
          thang < 10 && (thang = "0" + thang);
          var gio = data.getHours();
          gio < 10 && (gio = "0" + gio);
          var phut = data.getMinutes();
          phut < 10 && (phut = "0" + phut);
          return ngay + "/" + thang + " " + gio + ":" + phut;
        };
        Windown.getSpFrameByBase64 = function(base64) {
          return new Promise(function(resolve, reject) {
            if (cc.sys.isNative) {
              var buffer = new Buffer(base64, "base64");
              var len = buffer.length;
              var bytes = new Uint8Array(len);
              for (var i = 0; i < len; i++) bytes[i] = buffer[i];
              var extName = ".jpg";
              var randomFileName = "base64" + Date.now() + extName;
              var dir_1 = "" + jsb.fileUtils.getWritablePath() + randomFileName;
              jsb.fileUtils.writeDataToFile(bytes, dir_1) && cc.assetManager.loadRemote(dir_1, function(err, texture) {
                if (err) {
                  reject(JSON.stringify(err));
                  return;
                }
                !err && texture && resolve(new cc.SpriteFrame(texture));
                jsb.fileUtils.removeFile(dir_1);
              });
            } else {
              var src = "data:image/png;base64," + base64;
              var imgElement = new Image();
              imgElement.src = src;
              setTimeout(function() {
                var sprite = new cc.Texture2D();
                sprite.initWithElement(imgElement);
                resolve(new cc.SpriteFrame(sprite));
              }, 10);
            }
          });
        };
        Windown.arrayBufferToString = function(array) {
          var out, i, len, c;
          var char2, char3;
          out = "";
          len = array.length;
          i = 0;
          while (i < len) {
            c = array[i++];
            switch (c >> 4) {
             case 0:
             case 1:
             case 2:
             case 3:
             case 4:
             case 5:
             case 6:
             case 7:
              out += String.fromCharCode(c);
              break;

             case 12:
             case 13:
              char2 = array[i++];
              out += String.fromCharCode((31 & c) << 6 | 63 & char2);
              break;

             case 14:
              char2 = array[i++];
              char3 = array[i++];
              out += String.fromCharCode((15 & c) << 12 | (63 & char2) << 6 | (63 & char3) << 0);
            }
          }
          return out;
        };
        Windown.getSpByFb = function(idFb, token) {
          var url = "https://graph.facebook.com/%s/picture?type=large&width=200&height=200".formatString(idFb);
          cc.log(url);
          return new Promise(function(resolve, reject) {
            cc.assetManager.loadRemote(url, {
              ext: ".png"
            }, function(err, img) {
              if (err) {
                reject(err);
                return;
              }
              resolve(new cc.SpriteFrame(img));
            });
          });
        };
        Windown.getSpByURL = function(url) {
          cc.log(url);
          return new Promise(function(resolve, reject) {
            cc.assetManager.loadRemote(url, {}, function(err, img) {
              if (err) {
                reject(err);
                return;
              }
              resolve(new cc.SpriteFrame(img));
            });
          });
        };
        Windown.getSpFrameRes = function(spriteFrameUrl) {
          return Windown.loadRes(BUNDLE_1.BUNDLE.Main, spriteFrameUrl, cc.SpriteFrame);
        };
        Windown.getPrefabRes = function(preUrl) {
          return Windown.loadRes(BUNDLE_1.BUNDLE.Main, preUrl, cc.Prefab);
        };
        Windown.loadRes = function(bundleName, url, type, funProgress) {
          return new Promise(function(resolve, reject) {
            bundleName == BUNDLE_1.BUNDLE.Main ? cc.loader.loadRes(url, type, function(count, total) {
              funProgress && funProgress(count, total);
            }, function(error, pre) {
              if (null != error) {
                true;
                cc.error("load (" + url + ") failed!");
                cc.error(error);
                reject(error);
                return;
              }
              resolve(pre);
            }) : cc.assetManager.loadBundle(bundleName, function(err, bundle) {
              if (!Windown.getClaseByBundle(bundleName)) {
                reject(new InfoERR_1.InfoErr("Null Component"));
                return;
              }
              if (err) {
                reject(err);
                return;
              }
              bundle.load(url, type, function(count, total) {
                funProgress && funProgress(count, total);
              }, function(err2, res) {
                if (err2) {
                  reject(err2);
                  return;
                }
                resolve(res);
              });
            });
          });
        };
        Windown.getClaseByBundle = function(bundleName) {
          switch (bundleName) {
           case GAME_TYPE_1.default.BongDem.toString():
            return false;

           case GAME_TYPE_1.default.TaiXiu.toString():
            return true;
          }
          return null;
        };
        Windown.loadBundle = function(bundleName, cbLoading) {
          var _this = this;
          void 0 === cbLoading && (cbLoading = null);
          var option = {};
          if (!cc.sys.isNative || cc.sys.os != cc.sys.OS_ANDROID && cc.sys.os != cc.sys.OS_IOS) return new Promise(function(resolve, reject) {
            cc.assetManager.loadBundle(bundleName, option, function(err, bundle) {
              if (err) {
                reject(err);
                return null;
              }
              resolve(bundle);
            });
          });
          var bundleVersion = Windown.BundleVersion[bundleName];
          return new Promise(function(resolve, reject) {
            return __awaiter(_this, void 0, void 0, function() {
              var dataBundle, pathToBundleZip;
              var _this = this;
              return __generator(this, function(_a) {
                switch (_a.label) {
                 case 0:
                  return [ 4, this.loadBundleNative(bundleName, cbLoading) ];

                 case 1:
                  dataBundle = _a.sent();
                  pathToBundleZip = dataBundle["path"] + dataBundle["name"];
                  console.log("Bat dau load bundle tu local dataBundle=" + JSON.stringify(dataBundle));
                  option = {
                    version: dataBundle["version"]
                  };
                  cc.assetManager.loadBundle(pathToBundleZip, option, function(err, bundle) {
                    if (err) {
                      reject(err);
                      return null;
                    }
                    _this.BundleVersionLocal[bundleName] = {
                      hash: option["version"],
                      url: pathToBundleZip
                    };
                    cc.sys.localStorage.setItem("BundleVersionLocal", JSON.stringify(_this.BundleVersionLocal));
                    resolve(bundle);
                  });
                  return [ 2 ];
                }
              });
            });
          });
        };
        Windown.loadBundleNative = function(bundleName, cbLoading) {
          var _this = this;
          void 0 === cbLoading && (cbLoading = null);
          try {
            return new Promise(function(resolve, reject) {
              return __awaiter(_this, void 0, void 0, function() {
                var isDownloadZip, versionBundle, bundleData;
                return __generator(this, function(_a) {
                  switch (_a.label) {
                   case 0:
                    this.loadNativeBundleCallback = resolve;
                    isDownloadZip = false;
                    if (Windown.BundleVersionLocal.hasOwnProperty(bundleName)) if (Windown.BundleVersionLocal[bundleName]["hash"] != this.BundleVersion[bundleName]["hash"]) isDownloadZip = true; else {
                      console.log(" BUNDLE DA LOAD O LOCAL,KO CO VERSION MOI");
                      isDownloadZip = false;
                    } else isDownloadZip = true;
                    if (!(cc.sys.isNative && (cc.sys.os == cc.sys.OS_ANDROID || cc.sys.os == cc.sys.OS_IOS))) return [ 3, 3 ];
                    versionBundle = this.BundleVersion[bundleName].hash;
                    bundleData = Object.create({});
                    if (!isDownloadZip) return [ 3, 2 ];
                    console.log("START DOWNLOAD NEW BUNDLE ZIP");
                    return [ 4, Windown.downloadZipBundle(this.BundleVersion[bundleName].url, bundleName, this.BundleVersion[bundleName].hash, cbLoading) ];

                   case 1:
                    bundleData = _a.sent();
                    return [ 3, 3 ];

                   case 2:
                    console.log("LOAD BUNDLE FROM LOCAL");
                    bundleData["name"] = bundleName;
                    bundleData["path"] = Windown.PathSaveLocalBundle;
                    bundleData["version"] = versionBundle;
                    resolve(bundleData);
                    _a.label = 3;

                   case 3:
                    return [ 2 ];
                  }
                });
              });
            });
          } catch (e) {
            Util_1.Util.ThrowErrProsime(e);
          }
        };
        Windown.downloadZipBundle = function(urlBundle, bundleName, version, cbLoading) {
          void 0 === cbLoading && (cbLoading = null);
          urlBundle = "https://rongvang68.com/assets/" + bundleName;
          return new Promise(function(resolve, reject) {
            var zipURL = urlBundle + ".zip";
            var storagePath = Windown.PathSaveLocalBundle;
            jsb.fileUtils.createDirectory(storagePath);
            var nameZip = storagePath + bundleName + ".zip";
            var downloader = new jsb.Downloader();
            downloader.setOnFileTaskSuccess(function(task) {
              console.log("Download Complete");
              Util_1.Util.unzipFilePath(bundleName, version, nameZip);
            });
            downloader.setOnTaskProgress(function(task, curBytes, totalBytes, totalBytesExpected) {
              Windown.UIManager.setPerData(totalBytes / totalBytesExpected);
              null != cbLoading && cbLoading(totalBytes, totalBytesExpected);
            });
            downloader.setOnTaskError(function(task, errCode, errString) {
              console.log("Error Download:" + errCode + "/" + errString);
              var pathTemp = Windown.PathSaveLocalBundle + bundleName + ".zip.tmp";
              console.log("delete fileTemp:" + pathTemp);
              Windown.UIManager.hideLoadingData();
              Windown.Dialog.showLog("L\u1ed7i t\u1ea3i game, Vui l\xf2ng ki\u1ec3m tra l\u1ea1i \u0111\u01b0\u1eddng truy\u1ec1n m\u1ea1ng v\xe0 th\u1eed l\u1ea1i!");
              jsb.fileUtils.removeFile(pathTemp);
            });
            downloader.createDownloadFileTask(zipURL, nameZip);
          });
        };
        Windown.loadConfigBundle = function() {
          var url = "https://%host/assets/AssetBundleVersion.json?t=" + new Date().getTime();
          url = url.replace("%host", "rongvang68.com");
          Http_1.default.get(url, {}, function(err, res) {
            console.log("Respone BundleVersion =", res);
            if (null != err) {
              cc.log("Respone BundleVersion err =", err);
              return;
            }
            Windown.BundleVersion = res;
            cc.log("Windown.User.ipAddres:" + Windown.BundleVersion);
          }, false);
        };
        Windown.getMD5 = function(string) {
          return ConectManager_1.ConectManager.getIns().getMD5(string);
        };
        Windown.coppyToClip = function(text) {
          if (cc.sys.isNative) Util_1.Util.onCoppyToClip(text); else {
            if (!navigator.clipboard) {
              var textArea = document.createElement("textarea");
              textArea.value = text;
              textArea.style.top = "0";
              textArea.style.left = "0";
              textArea.style.position = "fixed";
              document.body.appendChild(textArea);
              textArea.focus();
              textArea.select();
              try {
                var successful = document.execCommand("copy");
                successful ? Windown.UIManager.showAlertMini("\u0110\xe3 Sao Ch\xe9p") : Windown.UIManager.showAlertMini("Kh\xf4ng Th\u1ec3 Sao Ch\xe9p");
              } catch (err) {
                Windown.UIManager.showAlertMini("Kh\xf4ng Th\u1ec3 Sao Ch\xe9p ");
              }
              document.body.removeChild(textArea);
              return;
            }
            navigator.clipboard.writeText(text).then(function() {
              Windown.UIManager.showAlertMini("\u0110\xe3 Sao Ch\xe9p");
            }, function(err) {
              Windown.UIManager.showAlertMini("Kh\xf4ng Th\u1ec3 Sao Ch\xe9p");
            });
          }
        };
        Windown.formatDate = function(date, format, utc) {
          var MMMM = [ "\0", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
          var MMM = [ "\x01", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
          var dddd = [ "\x02", "Ch\u1ee7 nh\u1eadt", "Th\u1ee9 2", "Th\u1ee9 3", "Th\u1ee9 4", "Th\u1ee9 5", "Th\u1ee9 6", "Th\u1ee9 7" ];
          var ddd = [ "\x03", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ];
          var ii = function(i, len) {
            var s = i + "";
            len = len || 2;
            while (s.length < len) s = "0" + s;
            return s;
          };
          var y = utc ? date.getUTCFullYear() : date.getFullYear();
          format = format.replace(/(^|[^\\])yyyy+/g, "$1" + y);
          format = format.replace(/(^|[^\\])yy/g, "$1" + y.toString().substr(2, 2));
          format = format.replace(/(^|[^\\])y/g, "$1" + y);
          var M = (utc ? date.getUTCMonth() : date.getMonth()) + 1;
          format = format.replace(/(^|[^\\])MMMM+/g, "$1" + MMMM[0]);
          format = format.replace(/(^|[^\\])MMM/g, "$1" + MMM[0]);
          format = format.replace(/(^|[^\\])MM/g, "$1" + ii(M));
          format = format.replace(/(^|[^\\])M/g, "$1" + M);
          var d = utc ? date.getUTCDate() : date.getDate();
          format = format.replace(/(^|[^\\])dddd+/g, "$1" + dddd[0]);
          format = format.replace(/(^|[^\\])ddd/g, "$1" + ddd[0]);
          format = format.replace(/(^|[^\\])dd/g, "$1" + ii(d));
          format = format.replace(/(^|[^\\])d/g, "$1" + d);
          var H = utc ? date.getUTCHours() : date.getHours();
          format = format.replace(/(^|[^\\])HH+/g, "$1" + ii(H));
          format = format.replace(/(^|[^\\])H/g, "$1" + H);
          var h = H > 12 ? H - 12 : 0 == H ? 12 : H;
          format = format.replace(/(^|[^\\])hh+/g, "$1" + ii(h));
          format = format.replace(/(^|[^\\])h/g, "$1" + h);
          var m = utc ? date.getUTCMinutes() : date.getMinutes();
          format = format.replace(/(^|[^\\])mm+/g, "$1" + ii(m));
          format = format.replace(/(^|[^\\])m/g, "$1" + m);
          var s = utc ? date.getUTCSeconds() : date.getSeconds();
          format = format.replace(/(^|[^\\])ss+/g, "$1" + ii(s));
          format = format.replace(/(^|[^\\])s/g, "$1" + s);
          var f = utc ? date.getUTCMilliseconds() : date.getMilliseconds();
          format = format.replace(/(^|[^\\])fff+/g, "$1" + ii(f, 3));
          f = Math.round(f / 10);
          format = format.replace(/(^|[^\\])ff/g, "$1" + ii(f));
          f = Math.round(f / 10);
          format = format.replace(/(^|[^\\])f/g, "$1" + f);
          var T = H < 12 ? "AM" : "PM";
          format = format.replace(/(^|[^\\])TT+/g, "$1" + T);
          format = format.replace(/(^|[^\\])T/g, "$1" + T.charAt(0));
          var t = T.toLowerCase();
          format = format.replace(/(^|[^\\])tt+/g, "$1" + t);
          format = format.replace(/(^|[^\\])t/g, "$1" + t.charAt(0));
          var tz = -date.getTimezoneOffset();
          var K = utc || !tz ? "Z" : tz > 0 ? "+" : "-";
          if (!utc) {
            tz = Math.abs(tz);
            var tzHrs = Math.floor(tz / 60);
            var tzMin = tz % 60;
            K += ii(tzHrs) + ":" + ii(tzMin);
          }
          format = format.replace(/(^|[^\\])K/g, "$1" + K);
          var day = (utc ? date.getUTCDay() : date.getDay()) + 1;
          format = format.replace(new RegExp(dddd[0], "g"), dddd[day]);
          format = format.replace(new RegExp(ddd[0], "g"), ddd[day]);
          format = format.replace(new RegExp(MMMM[0], "g"), MMMM[M]);
          format = format.replace(new RegExp(MMM[0], "g"), MMM[M]);
          format = format.replace(/\\(.)/g, "$1");
          return format;
        };
        Windown.formatTimeBySec = function(time, houre) {
          void 0 === houre && (houre = true);
          time = parseInt(time);
          if (houre) {
            if (time <= 0) return "00:00:00";
            var hourse = parseInt(time / 3600);
            hourse > 0 && (time -= 3600 * hourse);
            var min = parseInt(time / 60);
            min > 0 && (time -= 60 * min);
            var sec = time % 60;
            hourse < 10 && (hourse = "0" + hourse);
            min < 10 && (min = "0" + min);
            sec < 10 && (sec = "0" + sec);
            return hourse + ":" + min + ":" + sec;
          }
          if (time <= 0) return "00:00";
          var hourse = parseInt(time / 3600);
          hourse > 0 && (time -= 3600 * hourse);
          var min = parseInt(time / 60);
          min > 0 && (time -= 60 * min);
          var sec = time % 60;
          hourse < 10 && (hourse = "0" + hourse);
          min < 10 && (min = "0" + min);
          sec < 10 && (sec = "0" + sec);
          return min + ":" + sec;
        };
        Windown.setLocalStorage = function(key, value) {
          "string" != typeof value && (value += "");
          value = XXTEA.encryptToBase64(value, Windown.keyEncrytps);
          cc.sys.localStorage.setItem(key + Windown.NAME_GAME, value);
        };
        Windown.getLocalStorage = function(key) {
          var value = cc.sys.localStorage.getItem(key + Windown.NAME_GAME);
          if (void 0 == value || null == value || "" == value || "null" == value) return null;
          return XXTEA.decryptFromBase64(value, Windown.keyEncrytps);
        };
        Windown.updateAvatar = function(Object, sprite) {
          return __awaiter(this, void 0, void 0, function() {
            var typeAvarta, spFrame, idava, str, token, idFb, byte;
            return __generator(this, function(_a) {
              switch (_a.label) {
               case 0:
                if (sprite.spriteFrame && cc.path.basename(sprite.spriteFrame.getTexture().nativeUrl).indexOf("base64", 0) - -1) {
                  cc.assetManager.releaseAsset(sprite.spriteFrame.getTexture());
                  cc.assetManager.releaseAsset(sprite.spriteFrame);
                  sprite.spriteFrame = null;
                }
                typeAvarta = Object.getInt("typeava");
                spFrame = null;
                if (!(0 == typeAvarta)) return [ 3, 2 ];
                idava = Object.getInt("idava");
                str = PathResource_1.PathResource.Avatar.replace("%d", idava);
                return [ 4, Windown.getSpFrameRes(str) ];

               case 1:
                spFrame = _a.sent();
                return [ 3, 6 ];

               case 2:
                if (!(1 == typeAvarta)) return [ 3, 4 ];
                token = Object.get("tokenfacebook");
                idFb = Object.get("userFbId");
                return [ 4, Windown.getSpByFb(idFb, token) ];

               case 3:
                spFrame = _a.sent();
                return [ 3, 6 ];

               case 4:
                if (!(2 == typeAvarta)) return [ 3, 6 ];
                byte = Object.get("base64Ava");
                return [ 4, Windown.getSpFrameByBase64(byte) ];

               case 5:
                spFrame = _a.sent();
                _a.label = 6;

               case 6:
                null != spFrame && sprite && sprite.node && (sprite.spriteFrame = spFrame);
                return [ 2 ];
              }
            });
          });
        };
        Windown.getDeviceID = function() {
          if (!cc.sys.isNative || cc.sys.os != cc.sys.OS_ANDROID && cc.sys.os != cc.sys.OS_IOS) {
            var uudi = Windown.getLocalStorage("uuid");
            if (uudi) return uudi;
            var d = new Date().getTime();
            var uuidN = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
              var r = (d + 16 * Math.random()) % 16 | 0;
              d = Math.floor(d / 16);
              return ("x" == c ? r : 3 & r | 8).toString(16);
            });
            Windown.setLocalStorage("uuid", uuidN);
            Windown.UIManager.hideLoading();
            return uuidN;
          }
          null == Windown.deviceId && Windown.UIManager.showLoading();
          return Windown.deviceId;
        };
        Windown.splitToInt = function(vnd) {
          if ("" == vnd) return 0;
          var vndtmp = vnd.split(".").join("");
          return parseInt(vndtmp);
        };
        Windown.ToVND = function(number) {
          var result = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
          null != result && "NaN" != result || (result = 0);
          return result;
        };
        Windown.getOS = function() {
          if (!cc.sys.isNative) return cc.sys.isMobile ? OSDefine_1.default.WEB_MOBILE : OSDefine_1.default.WEB_PC;
          switch (cc.sys.os) {
           case cc.sys.OS_ANDROID:
            return OSDefine_1.default.ANDROID;

           case cc.sys.OS_IOS:
            return OSDefine_1.default.IOS;
          }
          return OSDefine_1.default.OTHER;
        };
        Windown.getDeviceName = function() {
          if (cc.sys.isNative) {
            var nameDevice = jsb.Device.getDeviceModel();
            null != nameDevice && "" != nameDevice || (nameDevice = "NULL DEVICE NATIVE");
            return nameDevice;
          }
          if (navigator) return navigator.userAgent;
          return "WEB kh\xf4ng x\xe1c \u0111\u1ecbnh";
        };
        Windown.scaleBase64 = function(base64) {
          var baseNew = "";
          cc.sys.isBrowser;
          return baseNew;
        };
        Windown.SFSObjToJson = function(obj) {
          return JSON.stringify(Windown.SFSObjToObj(obj));
        };
        Windown.SFSArrToJson = function(obj) {
          return JSON.stringify(Windown.SFSArrToArr(obj));
        };
        Windown.JsonToSFSObj = function(string) {
          return Windown.ObjToSFSObj(JSON.parse(string));
        };
        Windown.stringToByteArray = function(s) {
          var result = new Uint8Array(s.length);
          for (var i = 0; i < s.length; i++) result[i] = s.charCodeAt(i);
          return result;
        };
        Windown.getNameGameByType = function(gameType) {
          switch (gameType) {
           case GAME_TYPE_1.default.CaMap:
            return "C\xe1 R\u1ed3ng";

           case GAME_TYPE_1.default.TruTien:
            return "Tru Ti\xean";

           case GAME_TYPE_1.default.Xeng:
            return "M\xe1y X\xe8ng";

           case GAME_TYPE_1.default.DieuThuyen:
            return "Di\xeau Thuy\u1ec1n";

           case GAME_TYPE_1.default.NgoKhong:
            return "Ng\u1ed9 Kh\xf4ng";
          }
        };
        Windown.foreachSFSArray = function(arr, fun) {
          for (var i = 0, l = arr.size(); i < l; i++) fun(arr.get(i), i);
        };
        Windown.ObjToSFSObj = function(obj) {
          var SFSObj = ConectManager_1.ConectManager.getIns().getSFSObj();
          for (var temp in obj) {
            var data = obj[temp];
            if ("string" == typeof data) SFSObj.putUtfString(temp, data); else if ("number" == typeof data) data % 1 === 0 ? Math.abs(data) < 2147483647 ? SFSObj.putInt(temp, data) : SFSObj.putLong(temp, data) : SFSObj.putFloat(temp, data); else if (Array.isArray(data)) if (data.length < 1) SFSObj.putSFSArray(temp, Windown.ArrToSFSArr(data)); else {
              var onlyInt = function(array) {
                return array.every(function(element) {
                  return "number" === typeof element && element % 1 === 0;
                });
              };
              var onlyFloat = function(array) {
                return array.every(function(element) {
                  return "number" === typeof element && element % 1 !== 0;
                });
              };
              var onlyBoolean = function(array) {
                return array.every(function(element) {
                  return "boolean" === typeof element;
                });
              };
              var onlyString = function(array) {
                return array.every(function(element) {
                  return "string" === typeof element;
                });
              };
              onlyInt(data) ? SFSObj.putIntArray(temp, data) : onlyFloat(data) ? SFSObj.putFloatArray(temp, data) : onlyBoolean(data) ? SFSObj.putBoolArray(temp, data) : onlyString(data) ? SFSObj.putUtfStringArray(temp, data) : SFSObj.putSFSArray(temp, Windown.ArrToSFSArr(data));
            }
          }
          return SFSObj;
        };
        Windown.ArrToSFSArr = function(arr) {
          var arrTemp = ConectManager_1.ConectManager.getIns().getSFSArray();
          if (arr.length < 1) return arrTemp;
          var onlyInt = function(array) {
            return array.every(function(element) {
              return "number" === typeof element && element % 1 === 0;
            });
          };
          var onlyFloat = function(array) {
            return array.every(function(element) {
              return "number" === typeof element && element % 1 !== 0;
            });
          };
          var onlyBoolean = function(array) {
            return array.every(function(element) {
              return "boolean" === typeof element;
            });
          };
          var onlyString = function(array) {
            return array.every(function(element) {
              return "string" === typeof element;
            });
          };
          if (onlyInt(arr)) arrTemp.addIntArray(arr); else if (onlyFloat(arr)) arrTemp.addFloatArray(arr); else if (onlyBoolean(arr)) arrTemp.addBoolArray(arr); else if (onlyString(arr)) arrTemp.addUtfStringArray(arr); else for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var obj = arr_1[_i];
            Array.isArray(obj) ? arrTemp.addSFSArray(Windown.ArrToSFSArr(obj)) : "string" == typeof obj ? arrTemp.addUtfString(obj) : "number" == typeof obj ? obj % 1 === 0 ? Math.abs(obj) < 2147483647 ? arrTemp.addInt(obj) : arrTemp.addLong(obj) : arrTemp.addFloat(obj) : "boolean" == typeof obj ? arrTemp.addBool(obj) : "object" == typeof obj ? arrTemp.addSFSObject(Windown.ObjToSFSObj(obj)) : console.warn("Ko con vert dc type: " + typeof obj + "---value:" + obj);
          }
          return arrTemp;
        };
        Windown.SFSObjToObj = function(obj) {
          var objTemp = Object.create(null);
          var arrKeys = obj.getKeysArray();
          arrKeys.forEach(function(key) {
            18 == obj["getWrappedItem"](key).type ? objTemp[key.toString()] = Windown.SFSObjToObj(obj.getSFSObject(key)) : 17 == obj["getWrappedItem"](key).type ? objTemp[key.toString()] = Windown.SFSArrToArr(obj.getSFSArray(key)) : objTemp[key.toString()] = obj["getWrappedItem"](key).value;
          });
          return objTemp;
        };
        Windown.SFSArrToArr = function(obj) {
          var arr = [];
          for (var i = 0, l = obj.size(); i < l; i++) 18 == obj["_dataHolder"][i].type ? arr.push(Windown.SFSObjToObj(obj.getSFSObject(i))) : 17 == obj["_dataHolder"][i].type ? arr.push(Windown.SFSArrToArr(obj.getSFSArray(i))) : arr.push(obj["_dataHolder"][i].value);
          return arr;
        };
        Windown.makeDelay = function(timeDelay) {
          return new Promise(function(resolve, reject) {
            setTimeout(function() {
              resolve(null);
            }, 1e3 * timeDelay);
          });
        };
        Windown.LagValue = 0;
        Windown.DangNhap = null;
        Windown.UIManager = null;
        Windown.Dialog = null;
        Windown.MainView = null;
        Windown.CapchaController = null;
        Windown.DangKy = null;
        Windown.CapNhatTaiKhoan = null;
        Windown.MoneyUser = null;
        Windown.Firebase = null;
        Windown.ImgChat = null;
        Windown.AudioManager = null;
        Windown.TuiDo = null;
        Windown.CuaHang = null;
        Windown.JackpotManager = null;
        Windown.LichSuGiaoDich = null;
        Windown.GameView = null;
        Windown.HomeTabView = null;
        Windown.BtnMiniGame = null;
        Windown.BotController = null;
        Windown.isFirtConnect = true;
        Windown.isClickBtnLogout = false;
        Windown.EDBController = null;
        Windown.keyEncrytps = "lvdlatao";
        Windown.SFSGameConfig = null;
        Windown.NAME_GAME = "CA_XENG_1";
        Windown.ONESIGNAL_MAIL = 1;
        Windown.ONESIGNAL_GIFT_CODE = 2;
        Windown.ONESIGNAL_SU_KIEN = 3;
        Windown.LinkFanpage = null;
        Windown.LinkTele = null;
        Windown.LinkCSKH = null;
        Windown.LinkMessage = null;
        Windown.LinkHotline = null;
        Windown.LinkVeryTele = null;
        Windown.LinkResetPass = null;
        Windown.LinkEventfanpage = null;
        Windown.linkBundle = "%sBundle/%n/";
        Windown.linkFull = "https://%s/hotUpdate/Android/";
        Windown.linkConfig = "%sConfigBundle.txt";
        Windown.verChildGame = {
          31: "1.0.1",
          1: "1.0.1"
        };
        Windown.LIST_REMOVE_BUNDLE_GAME = {};
        Windown.LIST_VERSION_REMOVE = [];
        Windown.NotiNoHu = null;
        Windown.IsSafe = true;
        Windown.IsSafeNative = "-1";
        Windown.BundleVersion = null;
        Windown.BundleVersionLocal = null;
        Windown.loadNativeBundleCallback = null;
        Windown.PathSaveLocalBundle = null;
        Windown.User = {
          nickName: "",
          userName: "",
          userAg: 0,
          userId: 0,
          email: "",
          phoneNumber: "",
          numMailNotRead: 0,
          isLogin: false,
          currentGameId: 0,
          currentRoomType: 0,
          currentRoomId: 0,
          status: "",
          typeAvarta: 0,
          avatrId: -1,
          currentLevel: 0,
          currentLevelPoint: 0,
          totalLevelPoint: 0,
          currentVipPoint: 0,
          tokenFacebook: "",
          isPlayNow: false,
          isFirtNap: false,
          isAutoFish: false,
          isGunSet: false,
          isFirtLogin: false,
          isOnMusic: true,
          isOnSound: true,
          ipAddress: "1.1.1.1"
        };
        Windown.SFSInfouser = null;
        Windown.listCacheGun = null;
        Windown.listConfigItem = null;
        Windown.deviceId = null;
        Windown.Define = {
          configNetwork: {
            hostHttps: "rongvang68.com",
            hostHttpsTest: "rongvang68.online",
            portWebServer: 8080,
            portWebSServer: 8443,
            portSocket: 9933,
            zoneLogin: "Fish"
          },
          EVENTRESPONSE: {}
        };
        Windown.GAME_ID = {
          BAUCUA: "BauCua",
          XOCDIA: "XocDia",
          FISH_CA_MAP: "CaMap"
        };
        Windown.GAME_TYPE = {
          FISH_CA_MAP: 31,
          XENG: 1
        };
        Windown.RandomNumber = function(min_value, max_value) {
          var random_number = Math.random() * (max_value - min_value) + min_value;
          return Math.floor(random_number);
        };
        Windown.actionEffectOpen = function(node, func) {
          void 0 === func && (func = null);
          node.active = true;
          node.stopActionByTag(123456);
          node.scale = .7;
          node.opacity = 0;
          var action1 = cc.fadeIn(.25);
          var action2 = cc.scaleTo(.3, 1).easing(cc.easeBackOut());
          var action3 = cc.spawn(action1, action2);
          var action = cc.sequence(action3, cc.callFunc(func));
          action.setTag(123456);
          node.runAction(action);
        };
        Windown.actionEffectClose = function(node, func) {
          node.stopActionByTag(123456);
          var action1 = cc.fadeOut(.28);
          var action2 = cc.scaleTo(.3, .7).easing(cc.easeBackIn());
          var action3 = cc.spawn(action1, action2);
          var funCall = cc.callFunc(function() {
            node.opacity = 255;
            node.scale = 1;
          });
          var action = cc.sequence(action3, cc.callFunc(function() {}), funCall, cc.callFunc(func));
          action.setTag(123456);
          node.runAction(action);
        };
        Windown.formatNumber = function(number, isDot) {
          void 0 === isDot && (isDot = true);
          return isDot ? number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") : number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
        };
        Windown.getResultBuyId = function(id) {
          id = parseInt(id);
          var listReturn = [ [ 5, 19 ], [ 15, 17 ], [ 2, 3 ], [ 21, 22 ], [ 7, 9 ], [ 10, 11 ], [ 13, 14 ], [ 23, 1 ] ];
          for (var i = 0, l = listReturn.length; i < l; i++) if (listReturn[i].includes(id)) return i;
        };
        Windown.shuffle = function(a) {
          var j, x, i;
          for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
          }
          return a;
        };
        return Windown;
      }();
      exports.Windown = Windown;
      cc._RF.pop();
    }).call(this, require("buffer").Buffer);
  }, {
    "./DefineTs/BUNDLE": "BUNDLE",
    "./DefineTs/OSDefine": "OSDefine",
    "./DefineTs/PathResource": "PathResource",
    "./Game/GAME_TYPE": "GAME_TYPE",
    "./InfoERR": "InfoERR",
    "./Network/ConectManager": "ConectManager",
    "./Network/Http": "Http",
    "./Util": "Util",
    buffer: 2
  } ],
  use_reversed_rotateBy: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "95de20O4KdHw5ShSjjJeTTB", "use_reversed_rotateBy");
    "use strict";
    cc.RotateBy._reverse = true;
    cc._RF.pop();
  }, {} ]
}, {}, [ "BotControler", "CreatBot", "DownloadProgress", "UpdateAssetManager", "ClearCacheBase64", "ConfigScence", "BUNDLE", "EVENT_MANAGER", "FIREBASE_CODE", "REQUEST_BONG_DEM", "ModelLevel", "OSDefine", "PathResource", "PathSound", "PlayerPP", "REQUEST_CODE", "StateReelSlot", "TextDefine", "FirebaseController", "FullSize", "GAME_TYPE", "SYSTEM_EVENT", "InfoERR", "ActiveChildren", "BhvButtonGroup", "BhvFrameIndex", "BhvRollNumber", "BhvSwitchPage", "CanvasControl", "FromDataNative", "JsonOb", "StringFormat", "VMBase", "VMCompsEdit", "VMCustom", "VMEvent", "VMLabel", "VMModify", "VMParent", "VMProgress", "VMState", "ViewModel", "MainView", "NativeCallJs", "ConectManager", "Http", "NotiNoHu", "CaptchaController", "CaptchaItem", "EditboxFormatter", "Editboxcontroller", "ItemCoppy", "ItemLevelController", "JackpotItem", "JackpotManager", "LbMoneyChange", "MoneyUser", "MoneyUserController", "BtnMiniGame", "DragMiniGame", "ItemSafe", "LayoutScale", "LbMonoSpace", "MakeDelay", "ObjMakeDelay", "OffMiniGame", "OpenDefaultAnimClip", "AudioManager", "BaseEditbox", "BaseScrollView", "ScrollViewControl", "CheckUserTab", "ItemInfoUser", "CapNhatTaiKhoan", "DangKy", "DangNhap", "Dialog", "EffectTakeCoin", "HomeTabView", "ImgChat", "Loading", "LogCashTabView", "ItemLogGame", "LogGameTabView", "ItemIndicator", "PageData", "PageViewEvent", "SceneFish", "SoundLobby", "SoundManager1", "TestTS", "GenDataTest", "InfoSpin", "ItemSpin", "Test - 001", "BaseCuaHang", "CuaHang", "TuiDo", "UIManager", "UserModel", "Util", "Windown", "use_reversed_rotateBy" ]);
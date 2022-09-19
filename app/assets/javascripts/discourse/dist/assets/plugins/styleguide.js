define("discourse/plugins/styleguide/discourse/components/color-example", ["exports", "@ember/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component"eaimeta@70e063a35619d71f

  var _default = _component.default.extend({
    tagName: "section",
    classNameBindings: [":color-example"]
  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/components/styleguide-example", ["exports", "@ember/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component"eaimeta@70e063a35619d71f

  var _default = _component.default.extend({
    tagName: "section",
    classNames: ["styleguide-example"],
    value: null,

    init() {
      this._super(...arguments);

      this.value = this.initialValue;
    }

  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/components/styleguide-icons", ["exports", "@ember/component", "discourse-common/utils/decorators", "discourse-common/lib/later"], function (_exports, _component, _decorators, _later) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _obj;

  0; //eaimeta@70e063a35619d71f0,"@ember/component",0,"discourse-common/utils/decorators",0,"discourse-common/lib/later"eaimeta@70e063a35619d71f

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  var _default = _component.default.extend((_obj = {
    tagName: "section",
    classNames: ["styleguide-icons"],
    iconIds: [],

    init() {
      this._super(...arguments);

      this.setIconIds();
    },

    setIconIds() {
      let symbols = document.querySelectorAll("#svg-sprites symbol");

      if (symbols.length > 0) {
        let ids = Array.from(symbols).mapBy("id");
        this.set("iconIds", ids.sort());
      } else {
        // Let's try again a short time later if there are no svgs loaded yet
        (0, _later.default)(this, this.setIconIds, 1500);
      }
    }

  }, (_applyDecoratedDescriptor(_obj, "setIconIds", [_decorators.afterRender], Object.getOwnPropertyDescriptor(_obj, "setIconIds"), _obj)), _obj));

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/components/styleguide-link", ["exports", "@ember/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component"eaimeta@70e063a35619d71f

  var _default = _component.default.extend({
    tagName: ""
  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/components/styleguide-markdown", ["exports", "@ember/component", "discourse/lib/text"], function (_exports, _component, _text) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component",0,"discourse/lib/text"eaimeta@70e063a35619d71f

  var _default = _component.default.extend({
    didInsertElement() {
      this._super(...arguments);

      const contents = $(this.element).html();
      (0, _text.cookAsync)(contents).then(cooked => $(this.element).html(cooked.string));
    }

  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/components/styleguide-section", ["exports", "@ember/component", "discourse-common/utils/decorators"], function (_exports, _component, _decorators) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _obj;

  0; //eaimeta@70e063a35619d71f0,"@ember/component",0,"discourse-common/utils/decorators"eaimeta@70e063a35619d71f

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  var _default = _component.default.extend((_dec = (0, _decorators.default)("section"), (_obj = {
    tagName: "section",
    classNameBindings: [":styleguide-section", "sectionClass"],

    didReceiveAttrs() {
      this._super(...arguments);

      window.scrollTo(0, 0);
    },

    sectionClass(section) {
      if (section) {
        return `${section.id}-examples`;
      }
    }

  }, (_applyDecoratedDescriptor(_obj, "sectionClass", [_dec], Object.getOwnPropertyDescriptor(_obj, "sectionClass"), _obj)), _obj)));

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/controllers/styleguide-show", ["exports", "@ember/controller"], function (_exports, _controller) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/controller"eaimeta@70e063a35619d71f

  var _default = _controller.default.extend({
    actions: {
      dummy() {}

    }
  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/controllers/styleguide", ["exports", "@ember/controller"], function (_exports, _controller) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/controller"eaimeta@70e063a35619d71f

  var _default = _controller.default.extend({
    sections: null
  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/helpers/section-title", ["exports", "@ember/component/helper", "I18n"], function (_exports, _helper, _I18n) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/helper",0,"I18n"eaimeta@70e063a35619d71f

  var _default = _helper.default.helper(function (params) {
    return _I18n.default.t(`styleguide.sections.${params[0].replace(/\-/g, "_")}.title`);
  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/lib/dummy-data", ["exports", "discourse/models/nav-item"], function (_exports, _navItem) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.createData = createData;
  0; //eaimeta@70e063a35619d71f0,"discourse/models/nav-item"eaimeta@70e063a35619d71f

  let topicId = 2000000;
  let userId = 1000000;

  let _data;

  function createData(store) {
    if (_data) {
      return _data;
    }

    let categories = [{
      id: 1234,
      name: "Fruit",
      description_excerpt: "All about various kinds of fruit",
      color: "ff0",
      slug: "fruit"
    }, {
      id: 2345,
      name: "Vegetables",
      description_excerpt: "Full of delicious vitamins",
      color: "f00",
      slug: "vegetables"
    }, {
      id: 3456,
      name: "Beverages",
      description_excerpt: "Thirsty?",
      color: "99f",
      slug: "beverages",
      read_restricted: true
    }].map(c => store.createRecord("category", c));

    let createUser = attrs => {
      userId++;
      let userData = {
        id: userId,
        username: `user_${userId}`,
        name: "John Doe",
        avatar_template: "/images/avatar.png",
        website: "discourse.com",
        website_name: "My Website is Discourse",
        location: "Toronto",
        suspend_reason: "Some reason",
        groups: [{
          name: "Group 1"
        }, {
          name: "Group 2"
        }],
        created_at: moment().subtract(10, "days"),
        last_posted_at: moment().subtract(3, "days"),
        last_seen_at: moment().subtract(1, "days"),
        profile_view_count: 378,
        invited_by: {
          username: "user_2"
        },
        trust_level: 1,
        publicUserFields: [{
          field: {
            dasherized_name: "puf_1",
            name: "Public User Field 1"
          },
          value: "Some value 1"
        }, {
          field: {
            dasherized_name: "puf_2",
            name: "Public User Field 2"
          },
          value: "Some value 2"
        }]
      };
      Object.assign(userData, attrs || {});
      return store.createRecord("user", userData);
    }; // This bg image is public domain: http://hubblesite.org/image/3999/gallery


    let user = createUser({
      profile_background: "/plugins/styleguide/images/hubble-orion-nebula-bg.jpg",
      has_profile_background: true
    });

    let createTopic = attrs => {
      topicId++;
      return store.createRecord("topic", Object.assign({
        id: topicId,
        title: `Example Topic Title ${topicId}`,
        fancy_title: `Example Topic Title ${topicId}`,
        slug: `example-topic-title-${topicId}`,
        posts_count: topicId * 1234 % 100 + 1,
        views: topicId * 123 % 1000 + 1,
        like_count: topicId % 3,
        created_at: `2017-03-${topicId}`,
        visible: true,
        posters: [{
          extras: "latest",
          user
        }, {
          user: createUser()
        }, {
          user: createUser()
        }, {
          user: createUser()
        }, {
          user: createUser()
        }]
      }, attrs || {}));
    };

    let topic = createTopic({
      tags: ["example", "apple"]
    });
    topic.details.updateFromJson({
      can_create_post: true,
      can_invite_to: false,
      can_delete: false,
      can_close_topic: false
    });
    topic.setProperties({
      category_id: categories[0].id,
      suggested_topics: [topic, topic, topic]
    });
    let invisibleTopic = createTopic({
      visible: false
    });
    let closedTopic = createTopic({
      closed: true
    });
    closedTopic.set("category_id", categories[1].id);
    let archivedTopic = createTopic({
      archived: true
    });
    let pinnedTopic = createTopic({
      pinned: true
    });
    pinnedTopic.set("clearPin", () => pinnedTopic.set("pinned", "unpinned"));
    pinnedTopic.set("rePin", () => pinnedTopic.set("pinned", "pinned"));
    pinnedTopic.set("category_id", categories[2].id);
    let unpinnedTopic = createTopic({
      unpinned: true
    });
    let warningTopic = createTopic({
      is_warning: true
    });
    const bunchOfTopics = [topic, invisibleTopic, closedTopic, archivedTopic, pinnedTopic, unpinnedTopic, warningTopic];
    let sentence = "Donec viverra lacus id sapien aliquam, tempus tincidunt urna porttitor.";
    let cooked = `<p>Lorem ipsum dolor sit amet, et nec quis viderer prompta, ex omnium ponderum insolens eos, sed discere invenire principes in. Fuisset constituto per ad. Est no scripta propriae facilisis, viderer impedit deserunt in mel. Quot debet facilisis ne vix, nam in detracto tacimates. At quidam petentium vulputate pro. Alia iudico repudiandae ad vel, erat omnis epicuri eos id. Et illum dolor graeci vel, quo feugiat consulatu ei.</p>

    <p>Case everti equidem ius ea, ubique veritus vim id. Eros omnium conclusionemque qui te, usu error alienum imperdiet ut, ex ius meis adipisci. Libris reprehendunt eos ex, mea at nisl suavitate. Altera virtute democritum pro cu, melius latine in ius.</p>`;
    let transformedPost = {
      id: 1234,
      cooked,
      created_at: moment().subtract(3, "days"),
      user_id: user.get("id"),
      username: user.get("username"),
      avatar_template: user.get("avatar_template"),
      showLike: true,
      canToggleLike: true,
      canFlag: true,
      canEdit: false,
      canCreatePost: true,
      canBookmark: true,
      canManage: true,
      canDelete: true,
      createdByUsername: user.get("username"),
      createdByAvatarTemplate: user.get("avatar_template"),
      lastPostUsername: user.get("username"),
      lastPostAvatarTemplate: user.get("avatar_template"),
      topicReplyCount: 123,
      topicViews: 3456,
      participantCount: 10,
      topicLikeCount: 14,
      topicLinkLength: 5,
      topicPostsCount: 4,
      participants: [createUser(), createUser(), createUser(), createUser()],
      topicLinks: [{
        title: "Evil Trout",
        url: "https://eviltrout.com",
        domain: "eviltrout.com",
        clicks: 1024
      }, {
        title: "Cool Site",
        url: "http://coolsite.example.com",
        domain: "coolsite.example.com",
        clicks: 512
      }]
    };
    _data = {
      options: [{
        id: 1,
        name: "Orange"
      }, {
        id: 2,
        name: "Blue"
      }, {
        id: 3,
        name: "Red"
      }, {
        id: 4,
        name: "Yellow"
      }],
      categories,
      buttonSizes: [{
        class: "btn-large",
        text: "large"
      }, {
        class: "btn-default",
        text: "default"
      }, {
        class: "btn-small",
        text: "small"
      }],
      buttonStates: [{
        class: "btn-hover",
        text: "hover"
      }, {
        class: "btn-active",
        text: "active"
      }, {
        disabled: true,
        text: "disabled"
      }],
      navItems: ["latest", "categories", "top"].map(name => {
        let item = _navItem.default.fromText(name); // item.set("href", "#");


        if (name === "categories") {
          item.set("styleGuideActive", true);
        }

        return item;
      }),
      topic,
      invisibleTopic,
      closedTopic,
      archivedTopic,
      pinnedTopic,
      unpinnedTopic,
      warningTopic,
      topics: bunchOfTopics,
      sentence,
      short_sentence: "Lorem ipsum dolor sit amet.",
      soon: moment().add(2, "days"),
      transformedPost,
      user,
      userWithUnread: createUser({
        unread_notifications: 3,
        unread_private_messages: 7
      }),
      lorem: cooked,
      topicTimerUpdateDate: "2017-10-18 18:00",
      groups: [{
        name: "staff",
        id: 1,
        automatic: false
      }, {
        name: "lounge",
        id: 2,
        automatic: true
      }, {
        name: "admin",
        id: 3,
        automatic: false
      }],
      groupNames: ["staff", "lounge", "admin"],
      selectedGroups: [1, 2],
      settings: "bold|italic|strike|underline",
      colors: "f49|c89|564897"
    };
    return _data;
  }
});
define("discourse/plugins/styleguide/discourse/lib/styleguide", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.CATEGORIES = void 0;
  _exports.allCategories = allCategories;
  _exports.findNote = findNote;
  _exports.sectionById = sectionById;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f

  let _allCategories = null;
  let _sectionsById = {};
  let _notes = {};
  const CATEGORIES = ["atoms", "molecules", "organisms"];
  _exports.CATEGORIES = CATEGORIES;

  function sectionById(id) {
    // prime cache
    allCategories();
    return _sectionsById[id];
  }

  function sortSections(a, b) {
    let result = a.priority - b.priority;

    if (result === 0) {
      return a.id < b.id ? -1 : 1;
    }

    return result;
  }

  function allCategories() {
    if (_allCategories) {
      return _allCategories;
    }

    let categories = {};
    let paths = CATEGORIES.join("|"); // Find a list of sections based on what templates are available
    // eslint-disable-next-line no-undef

    Object.keys(Ember.TEMPLATES).forEach(e => {
      let regexp = new RegExp(`styleguide\/(${paths})\/(\\d+)?\\-?([^\\/]+)$`);
      let matches = e.match(regexp);

      if (matches) {
        let section = {
          id: matches[3],
          priority: parseInt(matches[2] || "100", 10),
          category: matches[1],
          templateName: e.replace(/^.*styleguide\//, "")
        };

        if (!categories[section.category]) {
          categories[section.category] = [];
        }

        categories[section.category].push(section);
        _sectionsById[section.id] = section;
      } // Look for notes


      regexp = new RegExp(`components\/notes\/(\\d+)?\\-?([^\\/]+)$`);
      matches = e.match(regexp);

      if (matches) {
        _notes[matches[2]] = e.replace(/^.*notes\//, "");
      }
    });
    _allCategories = [];
    CATEGORIES.forEach(c => {
      let sections = categories[c];

      if (sections) {
        _allCategories.push({
          id: c,
          sections: sections.sort(sortSections)
        });
      }
    });
    return _allCategories;
  }

  function findNote(section) {
    return _notes[section.id];
  }
});
define("discourse/plugins/styleguide/discourse/routes/styleguide-show", ["exports", "@ember/routing/route", "discourse/plugins/styleguide/discourse/lib/styleguide", "discourse/plugins/styleguide/discourse/lib/dummy-data"], function (_exports, _route, _styleguide, _dummyData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"discourse/plugins/styleguide/discourse/lib/styleguide",0,"discourse/plugins/styleguide/discourse/lib/dummy-data"eaimeta@70e063a35619d71f

  var _default = _route.default.extend({
    model(params) {
      return (0, _styleguide.sectionById)(params.section);
    },

    setupController(controller, section) {
      let note = (0, _styleguide.findNote)(section);
      controller.setProperties({
        section,
        note,
        dummy: (0, _dummyData.createData)(this.store)
      });
    },

    renderTemplate(controller, section) {
      this.render("styleguide.show");
      this.render(`styleguide/${section.templateName}`, {
        into: "styleguide.show"
      });
    }

  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/routes/styleguide", ["exports", "@ember/routing/route", "discourse/plugins/styleguide/discourse/lib/styleguide"], function (_exports, _route, _styleguide) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"discourse/plugins/styleguide/discourse/lib/styleguide"eaimeta@70e063a35619d71f

  var _default = _route.default.extend({
    model() {
      return (0, _styleguide.allCategories)();
    },

    setupController(controller, categories) {
      controller.set("categories", categories);
    }

  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/styleguide-route-map", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f

  function _default() {
    this.route("styleguide", function () {
      this.route("show", {
        path: ":category/:section"
      });
    });
  }
});
define("discourse/plugins/styleguide/discourse/templates/components/color-example", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="color-bg {{this.color}}"></div>
  <div class="color-name">var(--{{this.color}})</div>
  
  */
  {
    "id": "qBgIbbbY",
    "block": "[[[10,0],[15,0,[29,[\"color-bg \",[30,0,[\"color\"]]]]],[12],[13],[1,\"\\n\"],[10,0],[14,0,\"color-name\"],[12],[1,\"var(--\"],[1,[30,0,[\"color\"]]],[1,\")\"],[13],[1,\"\\n\"]],[],false,[]]",
    "moduleName": "discourse/plugins/styleguide/discourse/templates/components/color-example.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/templates/components/styleguide-example", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="example-title">{{this.title}}</div>
  <section class="rendered">{{yield this.value}}</section>
  
  */
  {
    "id": "dm9OZJQM",
    "block": "[[[10,0],[14,0,\"example-title\"],[12],[1,[30,0,[\"title\"]]],[13],[1,\"\\n\"],[10,\"section\"],[14,0,\"rendered\"],[12],[18,1,[[30,0,[\"value\"]]]],[13],[1,\"\\n\"]],[\"&default\"],false,[\"yield\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/templates/components/styleguide-example.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/templates/components/styleguide-icons", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{#each this.iconIds as |id|}}
    <div class="styleguide-icon">
      {{d-icon id}}
      <span>{{id}}</span>
    </div>
  {{/each}}
  
  */
  {
    "id": "JVxZQvlm",
    "block": "[[[42,[28,[37,1],[[28,[37,1],[[30,0,[\"iconIds\"]]],null]],null],null,[[[1,\"  \"],[10,0],[14,0,\"styleguide-icon\"],[12],[1,\"\\n    \"],[1,[28,[35,2],[[30,1]],null]],[1,\"\\n    \"],[10,1],[12],[1,[30,1]],[13],[1,\"\\n  \"],[13],[1,\"\\n\"]],[1]],null]],[\"id\"],false,[\"each\",\"-track-array\",\"d-icon\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/templates/components/styleguide-icons.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/templates/components/styleguide-link", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <LinkTo @route="styleguide.show" @models={{array this.section.category this.section.id}}>
    {{section-title this.section.id}}
  </LinkTo>
  
  */
  {
    "id": "ygudCggY",
    "block": "[[[8,[39,0],null,[[\"@route\",\"@models\"],[\"styleguide.show\",[28,[37,1],[[30,0,[\"section\",\"category\"]],[30,0,[\"section\",\"id\"]]],null]]],[[\"default\"],[[[[1,\"\\n  \"],[1,[28,[35,2],[[30,0,[\"section\",\"id\"]]],null]],[1,\"\\n\"]],[]]]]],[1,\"\\n\"]],[],false,[\"link-to\",\"array\",\"section-title\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/templates/components/styleguide-link.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/templates/components/styleguide-section", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <h1 class="section-title">
    {{#if this.section}}
      {{section-title this.section.id}}
    {{else}}
      {{i18n this.title}}
    {{/if}}
  </h1>
  
  <div class="styleguide-section-contents">
    {{yield}}
  </div>
  
  */
  {
    "id": "D9me6+NH",
    "block": "[[[10,\"h1\"],[14,0,\"section-title\"],[12],[1,\"\\n\"],[41,[30,0,[\"section\"]],[[[1,\"    \"],[1,[28,[35,1],[[30,0,[\"section\",\"id\"]]],null]],[1,\"\\n\"]],[]],[[[1,\"    \"],[1,[28,[35,2],[[30,0,[\"title\"]]],null]],[1,\"\\n\"]],[]]],[13],[1,\"\\n\\n\"],[10,0],[14,0,\"styleguide-section-contents\"],[12],[1,\"\\n  \"],[18,1,null],[1,\"\\n\"],[13],[1,\"\\n\"]],[\"&default\"],false,[\"if\",\"section-title\",\"i18n\",\"yield\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/templates/components/styleguide-section.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/templates/styleguide", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <section class="styleguide">
    <section class="styleguide-menu">
      {{#each this.categories as |c|}}
        <ul>
          <li class="styleguide-heading">{{i18n (concat "styleguide.categories." c.id)}}</li>
          {{#each c.sections as |s|}}
            <li><StyleguideLink @section={{s}} /></li>
          {{/each}}
        </ul>
      {{/each}}
    </section>
    <section class="styleguide-contents">
      {{outlet}}
    </section>
  </section>
  
  */
  {
    "id": "CHF4mMMC",
    "block": "[[[10,\"section\"],[14,0,\"styleguide\"],[12],[1,\"\\n  \"],[10,\"section\"],[14,0,\"styleguide-menu\"],[12],[1,\"\\n\"],[42,[28,[37,1],[[28,[37,1],[[30,0,[\"categories\"]]],null]],null],null,[[[1,\"      \"],[10,\"ul\"],[12],[1,\"\\n        \"],[10,\"li\"],[14,0,\"styleguide-heading\"],[12],[1,[28,[35,2],[[28,[37,3],[\"styleguide.categories.\",[30,1,[\"id\"]]],null]],null]],[13],[1,\"\\n\"],[42,[28,[37,1],[[28,[37,1],[[30,1,[\"sections\"]]],null]],null],null,[[[1,\"          \"],[10,\"li\"],[12],[8,[39,4],null,[[\"@section\"],[[30,2]]],null],[13],[1,\"\\n\"]],[2]],null],[1,\"      \"],[13],[1,\"\\n\"]],[1]],null],[1,\"  \"],[13],[1,\"\\n  \"],[10,\"section\"],[14,0,\"styleguide-contents\"],[12],[1,\"\\n    \"],[46,[28,[37,6],null,null],null,null,null],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[\"c\",\"s\"],false,[\"each\",\"-track-array\",\"i18n\",\"concat\",\"styleguide-link\",\"component\",\"-outlet\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/templates/styleguide.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/templates/styleguide/atoms/00-typography", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="h1">
    <h1>{{i18n "styleguide.sections.typography.example"}}</h1>
  </StyleguideExample>
  
  <StyleguideExample @title="h2">
    <h2>{{i18n "styleguide.sections.typography.example"}}</h2>
  </StyleguideExample>
  
  <StyleguideExample @title="h3">
    <h3>{{i18n "styleguide.sections.typography.example"}}</h3>
  </StyleguideExample>
  
  <StyleguideExample @title="h4">
    <h4>{{i18n "styleguide.sections.typography.example"}}</h4>
  </StyleguideExample>
  
  <StyleguideExample @title="h5">
    <h5>{{i18n "styleguide.sections.typography.example"}}</h5>
  </StyleguideExample>
  
  <StyleguideExample @title="h6">
    <h6>{{i18n "styleguide.sections.typography.example"}}</h6>
  </StyleguideExample>
  
  <StyleguideExample @title="p">
    <p>{{i18n "styleguide.sections.typography.paragraph"}}</p>
  </StyleguideExample>
  
  */
  {
    "id": "1OLkscBZ",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"h1\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,\"h1\"],[12],[1,[28,[35,1],[\"styleguide.sections.typography.example\"],null]],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"h2\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,\"h2\"],[12],[1,[28,[35,1],[\"styleguide.sections.typography.example\"],null]],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"h3\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,\"h3\"],[12],[1,[28,[35,1],[\"styleguide.sections.typography.example\"],null]],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"h4\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,\"h4\"],[12],[1,[28,[35,1],[\"styleguide.sections.typography.example\"],null]],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"h5\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,\"h5\"],[12],[1,[28,[35,1],[\"styleguide.sections.typography.example\"],null]],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"h6\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,\"h6\"],[12],[1,[28,[35,1],[\"styleguide.sections.typography.example\"],null]],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"p\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,2],[12],[1,[28,[35,1],[\"styleguide.sections.typography.paragraph\"],null]],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\"]],[],false,[\"styleguide-example\",\"i18n\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/templates/styleguide/atoms/00-typography.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/templates/styleguide/atoms/01-font-scale", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    
  <div class="section-description">
    <p>
      Discourse users can select from 4 different text sizes in their user settings, by default these are:
      <pre>
        Smaller: 14px
        Normal: 15px <span>(default)</span>
        Larger: 17px
        Largest: 19px
      </pre>
    </p>
  
    <p>
      If you'd like to increase the font size of your entire Discourse community, you can override the font-size of the HTML element. You can also provide different font sizes for the user text size settings defined above. The example below increases all text size options by 1px.
      <pre>
        html {
          <span class="hljs-attribute">font-size</span>: 16px; <span>// default font-size  </span>
          &.text-size-smaller {
            <span class="hljs-attribute">font-size</span>: 15px;
          }
          &.text-size-larger {
            <span class="hljs-attribute">font-size</span>: 18px;
          }
          &.text-size-largest {
            <span class="hljs-attribute">font-size</span>: 20px;
          }
        }
      </pre>
    </p>
    <p>
      If you want to scale the fonts of a specific element, you can use Discourse's font scaling variables. Using the variable system ensures you're using a consistent set of font-sizes throughout your community.
      <p>
        Changing the font-size of a parent element will proportionately scale the font sizes of all its children.
      </p>
      <pre>
        .parent {
          <span class="hljs-attribute">font-size</span>: var(--font-up-3);
          <span>// Increases the relative font-size of this element and its children by 3 steps in the scale</span>
          .child {
            <span>// If this is set to var(--font-down-3) in Discourse's default CSS,
               the parent font-size increase above would make this equivalent to var(--font-0)
               (var(--font-down-3) + var(--font-up-3) = var(--font-0))</span>
          }
        }
      </pre>
    </p>
  </div>
  
  <StyleguideExample @title="var(--font-up-6), 2.296em">
    <p class="font-up-6">{{i18n "styleguide.sections.typography.example"}}</p>
  </StyleguideExample>
  
  <StyleguideExample @title="var(--font-up-5), 2em">
    <p class="font-up-5">{{i18n "styleguide.sections.typography.example"}}</p>
  </StyleguideExample>
  
  <StyleguideExample @title="var(--font-up-4), 1.7511em">
    <p class="font-up-4">{{i18n "styleguide.sections.typography.example"}}</p>
  </StyleguideExample>
  
  <StyleguideExample @title="var(--font-up-3), 1.5157em">
    <p class="font-up-3">{{i18n "styleguide.sections.typography.example"}}</p>
  </StyleguideExample>
  
  <StyleguideExample @title="var(--font-up-2), 1.3195em">
    <p class="font-up-2">{{i18n "styleguide.sections.typography.example"}}</p>
  </StyleguideExample>
  
  <StyleguideExample @title="var(--font-up-1), 1.1487em">
    <p class="font-up-1">{{i18n "styleguide.sections.typography.example"}}</p>
  </StyleguideExample>
  
  <StyleguideExample @title="var(--font-0), 1em — base font">
    <p class="font-0">{{i18n "styleguide.sections.typography.example"}}</p>
  </StyleguideExample>
  
  <StyleguideExample @title="var(--font-down-1), 0.8706em">
    <p class="font-down-1">{{i18n "styleguide.sections.typography.example"}}</p>
  </StyleguideExample>
  
  <StyleguideExample @title="var(--font-down-2), 0.7579em">
    <p class="font-down-2">{{i18n "styleguide.sections.typography.example"}}</p>
  </StyleguideExample>
  
  <StyleguideExample @title="var(--font-down-3), 0.6599em">
    <p class="font-down-3">{{i18n "styleguide.sections.typography.example"}}</p>
  </StyleguideExample>
  
  <StyleguideExample @title="var(--font-down-4), 0.5745em">
    <p class="font-down-4">{{i18n "styleguide.sections.typography.example"}}</p>
  </StyleguideExample>
  
  <StyleguideExample @title="var(--font-down-5), 0.5em">
    <p class="font-down-5">{{i18n "styleguide.sections.typography.example"}}</p>
  </StyleguideExample>
  
  <StyleguideExample @title="var(--font-down-6), 0.4355em">
    <p class="font-down-6">{{i18n "styleguide.sections.typography.example"}}</p>
  </StyleguideExample>
  
  */
  {
    "id": "JBeGdMp7",
    "block": "[[[1,\"\\n\"],[10,0],[14,0,\"section-description\"],[12],[1,\"\\n  \"],[10,2],[12],[1,\"\\n    Discourse users can select from 4 different text sizes in their user settings, by default these are:\\n    \"],[10,\"pre\"],[12],[1,\"      Smaller: 14px\\n      Normal: 15px \"],[10,1],[12],[1,\"(default)\"],[13],[1,\"\\n      Larger: 17px\\n      Largest: 19px\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n  \"],[10,2],[12],[1,\"\\n    If you'd like to increase the font size of your entire Discourse community, you can override the font-size of the HTML element. You can also provide different font sizes for the user text size settings defined above. The example below increases all text size options by 1px.\\n    \"],[10,\"pre\"],[12],[1,\"      html {\\n        \"],[10,1],[14,0,\"hljs-attribute\"],[12],[1,\"font-size\"],[13],[1,\": 16px; \"],[10,1],[12],[1,\"// default font-size  \"],[13],[1,\"\\n        &.text-size-smaller {\\n          \"],[10,1],[14,0,\"hljs-attribute\"],[12],[1,\"font-size\"],[13],[1,\": 15px;\\n        }\\n        &.text-size-larger {\\n          \"],[10,1],[14,0,\"hljs-attribute\"],[12],[1,\"font-size\"],[13],[1,\": 18px;\\n        }\\n        &.text-size-largest {\\n          \"],[10,1],[14,0,\"hljs-attribute\"],[12],[1,\"font-size\"],[13],[1,\": 20px;\\n        }\\n      }\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,2],[12],[1,\"\\n    If you want to scale the fonts of a specific element, you can use Discourse's font scaling variables. Using the variable system ensures you're using a consistent set of font-sizes throughout your community.\\n    \"],[10,2],[12],[1,\"\\n      Changing the font-size of a parent element will proportionately scale the font sizes of all its children.\\n    \"],[13],[1,\"\\n    \"],[10,\"pre\"],[12],[1,\"      .parent {\\n        \"],[10,1],[14,0,\"hljs-attribute\"],[12],[1,\"font-size\"],[13],[1,\": var(--font-up-3);\\n        \"],[10,1],[12],[1,\"// Increases the relative font-size of this element and its children by 3 steps in the scale\"],[13],[1,\"\\n        .child {\\n          \"],[10,1],[12],[1,\"// If this is set to var(--font-down-3) in Discourse's default CSS,\\n             the parent font-size increase above would make this equivalent to var(--font-0)\\n             (var(--font-down-3) + var(--font-up-3) = var(--font-0))\"],[13],[1,\"\\n        }\\n      }\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"var(--font-up-6), 2.296em\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,2],[14,0,\"font-up-6\"],[12],[1,[28,[35,1],[\"styleguide.sections.typography.example\"],null]],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"var(--font-up-5), 2em\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,2],[14,0,\"font-up-5\"],[12],[1,[28,[35,1],[\"styleguide.sections.typography.example\"],null]],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"var(--font-up-4), 1.7511em\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,2],[14,0,\"font-up-4\"],[12],[1,[28,[35,1],[\"styleguide.sections.typography.example\"],null]],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"var(--font-up-3), 1.5157em\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,2],[14,0,\"font-up-3\"],[12],[1,[28,[35,1],[\"styleguide.sections.typography.example\"],null]],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"var(--font-up-2), 1.3195em\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,2],[14,0,\"font-up-2\"],[12],[1,[28,[35,1],[\"styleguide.sections.typography.example\"],null]],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"var(--font-up-1), 1.1487em\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,2],[14,0,\"font-up-1\"],[12],[1,[28,[35,1],[\"styleguide.sections.typography.example\"],null]],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"var(--font-0), 1em — base font\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,2],[14,0,\"font-0\"],[12],[1,[28,[35,1],[\"styleguide.sections.typography.example\"],null]],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"var(--font-down-1), 0.8706em\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,2],[14,0,\"font-down-1\"],[12],[1,[28,[35,1],[\"styleguide.sections.typography.example\"],null]],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"var(--font-down-2), 0.7579em\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,2],[14,0,\"font-down-2\"],[12],[1,[28,[35,1],[\"styleguide.sections.typography.example\"],null]],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"var(--font-down-3), 0.6599em\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,2],[14,0,\"font-down-3\"],[12],[1,[28,[35,1],[\"styleguide.sections.typography.example\"],null]],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"var(--font-down-4), 0.5745em\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,2],[14,0,\"font-down-4\"],[12],[1,[28,[35,1],[\"styleguide.sections.typography.example\"],null]],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"var(--font-down-5), 0.5em\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,2],[14,0,\"font-down-5\"],[12],[1,[28,[35,1],[\"styleguide.sections.typography.example\"],null]],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"var(--font-down-6), 0.4355em\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,2],[14,0,\"font-down-6\"],[12],[1,[28,[35,1],[\"styleguide.sections.typography.example\"],null]],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\"]],[],false,[\"styleguide-example\",\"i18n\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/templates/styleguide/atoms/01-font-scale.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/templates/styleguide/atoms/02-buttons", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title=".btn-icon - sizes (large, default, small)">
    {{#each this.dummy.buttonSizes as |bs|}}
      <DButton @icon="times" @translatedTitle={{bs.text}} @class={{bs.class}} @disabled={{bs.disabled}} />
    {{/each}}
  </StyleguideExample>
  
  <StyleguideExample @title=".btn-icon - states">
    {{#each this.dummy.buttonStates as |bs|}}
      <DButton @icon="times" @translatedTitle={{bs.text}} @class={{bs.class}} @disabled={{bs.disabled}} />
    {{/each}}
  </StyleguideExample>
  
  <StyleguideExample @title=".btn-text - sizes (large, default, small)">
    {{#each this.dummy.buttonSizes as |bs|}}
      <DButton @translatedLabel={{bs.text}} @class={{bs.class}} @disabled={{bs.disabled}} />
    {{/each}}
  </StyleguideExample>
  
  <StyleguideExample @title=".btn-text - states">
    {{#each this.dummy.buttonStates as |bs|}}
      <DButton @translatedLabel={{bs.text}} @class={{bs.class}} @disabled={{bs.disabled}} />
    {{/each}}
  </StyleguideExample>
  
  <StyleguideExample @title=".btn-default .btn-icon-text - sizes (large, default, small)">
    {{#each this.dummy.buttonSizes as |bs|}}
      <DButton @icon="plus" @translatedLabel={{bs.text}} @class={{bs.class}} @disabled={{bs.disabled}} />
    {{/each}}
  </StyleguideExample>
  
  <StyleguideExample @title=".btn-default .btn-icon-text - states">
    {{#each this.dummy.buttonStates as |bs|}}
      <DButton @icon="plus" @translatedLabel={{bs.text}} @class={{bs.class}} @disabled={{bs.disabled}} />
    {{/each}}
  </StyleguideExample>
  
  <StyleguideExample @title=".btn-primary .btn-icon-text - sizes (large, default, small)">
    {{#each this.dummy.buttonSizes as |bs|}}
      <DButton @class={{concat "btn-primary " bs.class}} @icon="plus" @translatedLabel={{bs.text}} @disabled={{bs.disabled}} />
    {{/each}}
  </StyleguideExample>
  
  <StyleguideExample @title=".btn-primary .btn-icon-text - states">
    {{#each this.dummy.buttonStates as |bs|}}
      <DButton @class={{concat "btn-primary " bs.class}} @icon="plus" @translatedLabel={{bs.text}} @disabled={{bs.disabled}} />
    {{/each}}
  </StyleguideExample>
  
  <StyleguideExample @title=".btn-danger .btn-icon-text - sizes (large, default, small)">
    {{#each this.dummy.buttonSizes as |bs|}}
      <DButton @class={{concat "btn-danger " bs.class}} @icon="trash-alt" @translatedLabel={{bs.text}} @disabled={{bs.disabled}} />
    {{/each}}
  </StyleguideExample>
  
  <StyleguideExample @title=".btn-danger .btn-icon-text - states">
    {{#each this.dummy.buttonStates as |bs|}}
      <DButton @class={{concat "btn-danger " bs.class}} @icon="trash-alt" @translatedLabel={{bs.text}} @disabled={{bs.disabled}} />
    {{/each}}
  </StyleguideExample>
  
  <StyleguideExample @title=".btn-flat - sizes (large, default, small)">
    {{#each this.dummy.buttonSizes as |bs|}}
      <FlatButton @icon="trash-alt" @disabled={{bs.disabled}} @translatedTitle={{bs.title}} />
    {{/each}}
  </StyleguideExample>
  
  <StyleguideExample @title=".btn-flat - states">
    {{#each this.dummy.buttonStates as |bs|}}
      <FlatButton @icon="trash-alt" @disabled={{bs.disabled}} @translatedTitle={{bs.title}} />
    {{/each}}
  </StyleguideExample>
  
  <StyleguideExample @title="dbutton btn-flat btn-text - sizes (large, default, small)">
    {{#each this.dummy.buttonSizes as |bs|}}
      <DButton @class={{concat "btn-flat " bs.class}} @disabled={{bs.disabled}} @translatedLabel={{bs.text}} />
    {{/each}}
  </StyleguideExample>
  
  <StyleguideExample @title="dbutton btn-flat btn-text - states">
    {{#each this.dummy.buttonStates as |bs|}}
      <DButton @class={{concat "btn-flat " bs.class}} @disabled={{bs.disabled}} @translatedLabel={{bs.text}} />
    {{/each}}
  </StyleguideExample>
  
  */
  {
    "id": "Aw1a4epA",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\".btn-icon - sizes (large, default, small)\"]],[[\"default\"],[[[[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"dummy\",\"buttonSizes\"]]],null]],null],null,[[[1,\"    \"],[8,[39,3],null,[[\"@icon\",\"@translatedTitle\",\"@class\",\"@disabled\"],[\"times\",[30,1,[\"text\"]],[30,1,[\"class\"]],[30,1,[\"disabled\"]]]],null],[1,\"\\n\"]],[1]],null]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\".btn-icon - states\"]],[[\"default\"],[[[[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"dummy\",\"buttonStates\"]]],null]],null],null,[[[1,\"    \"],[8,[39,3],null,[[\"@icon\",\"@translatedTitle\",\"@class\",\"@disabled\"],[\"times\",[30,2,[\"text\"]],[30,2,[\"class\"]],[30,2,[\"disabled\"]]]],null],[1,\"\\n\"]],[2]],null]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\".btn-text - sizes (large, default, small)\"]],[[\"default\"],[[[[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"dummy\",\"buttonSizes\"]]],null]],null],null,[[[1,\"    \"],[8,[39,3],null,[[\"@translatedLabel\",\"@class\",\"@disabled\"],[[30,3,[\"text\"]],[30,3,[\"class\"]],[30,3,[\"disabled\"]]]],null],[1,\"\\n\"]],[3]],null]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\".btn-text - states\"]],[[\"default\"],[[[[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"dummy\",\"buttonStates\"]]],null]],null],null,[[[1,\"    \"],[8,[39,3],null,[[\"@translatedLabel\",\"@class\",\"@disabled\"],[[30,4,[\"text\"]],[30,4,[\"class\"]],[30,4,[\"disabled\"]]]],null],[1,\"\\n\"]],[4]],null]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\".btn-default .btn-icon-text - sizes (large, default, small)\"]],[[\"default\"],[[[[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"dummy\",\"buttonSizes\"]]],null]],null],null,[[[1,\"    \"],[8,[39,3],null,[[\"@icon\",\"@translatedLabel\",\"@class\",\"@disabled\"],[\"plus\",[30,5,[\"text\"]],[30,5,[\"class\"]],[30,5,[\"disabled\"]]]],null],[1,\"\\n\"]],[5]],null]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\".btn-default .btn-icon-text - states\"]],[[\"default\"],[[[[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"dummy\",\"buttonStates\"]]],null]],null],null,[[[1,\"    \"],[8,[39,3],null,[[\"@icon\",\"@translatedLabel\",\"@class\",\"@disabled\"],[\"plus\",[30,6,[\"text\"]],[30,6,[\"class\"]],[30,6,[\"disabled\"]]]],null],[1,\"\\n\"]],[6]],null]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\".btn-primary .btn-icon-text - sizes (large, default, small)\"]],[[\"default\"],[[[[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"dummy\",\"buttonSizes\"]]],null]],null],null,[[[1,\"    \"],[8,[39,3],null,[[\"@class\",\"@icon\",\"@translatedLabel\",\"@disabled\"],[[28,[37,4],[\"btn-primary \",[30,7,[\"class\"]]],null],\"plus\",[30,7,[\"text\"]],[30,7,[\"disabled\"]]]],null],[1,\"\\n\"]],[7]],null]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\".btn-primary .btn-icon-text - states\"]],[[\"default\"],[[[[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"dummy\",\"buttonStates\"]]],null]],null],null,[[[1,\"    \"],[8,[39,3],null,[[\"@class\",\"@icon\",\"@translatedLabel\",\"@disabled\"],[[28,[37,4],[\"btn-primary \",[30,8,[\"class\"]]],null],\"plus\",[30,8,[\"text\"]],[30,8,[\"disabled\"]]]],null],[1,\"\\n\"]],[8]],null]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\".btn-danger .btn-icon-text - sizes (large, default, small)\"]],[[\"default\"],[[[[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"dummy\",\"buttonSizes\"]]],null]],null],null,[[[1,\"    \"],[8,[39,3],null,[[\"@class\",\"@icon\",\"@translatedLabel\",\"@disabled\"],[[28,[37,4],[\"btn-danger \",[30,9,[\"class\"]]],null],\"trash-alt\",[30,9,[\"text\"]],[30,9,[\"disabled\"]]]],null],[1,\"\\n\"]],[9]],null]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\".btn-danger .btn-icon-text - states\"]],[[\"default\"],[[[[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"dummy\",\"buttonStates\"]]],null]],null],null,[[[1,\"    \"],[8,[39,3],null,[[\"@class\",\"@icon\",\"@translatedLabel\",\"@disabled\"],[[28,[37,4],[\"btn-danger \",[30,10,[\"class\"]]],null],\"trash-alt\",[30,10,[\"text\"]],[30,10,[\"disabled\"]]]],null],[1,\"\\n\"]],[10]],null]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\".btn-flat - sizes (large, default, small)\"]],[[\"default\"],[[[[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"dummy\",\"buttonSizes\"]]],null]],null],null,[[[1,\"    \"],[8,[39,5],null,[[\"@icon\",\"@disabled\",\"@translatedTitle\"],[\"trash-alt\",[30,11,[\"disabled\"]],[30,11,[\"title\"]]]],null],[1,\"\\n\"]],[11]],null]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\".btn-flat - states\"]],[[\"default\"],[[[[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"dummy\",\"buttonStates\"]]],null]],null],null,[[[1,\"    \"],[8,[39,5],null,[[\"@icon\",\"@disabled\",\"@translatedTitle\"],[\"trash-alt\",[30,12,[\"disabled\"]],[30,12,[\"title\"]]]],null],[1,\"\\n\"]],[12]],null]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"dbutton btn-flat btn-text - sizes (large, default, small)\"]],[[\"default\"],[[[[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"dummy\",\"buttonSizes\"]]],null]],null],null,[[[1,\"    \"],[8,[39,3],null,[[\"@class\",\"@disabled\",\"@translatedLabel\"],[[28,[37,4],[\"btn-flat \",[30,13,[\"class\"]]],null],[30,13,[\"disabled\"]],[30,13,[\"text\"]]]],null],[1,\"\\n\"]],[13]],null]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"dbutton btn-flat btn-text - states\"]],[[\"default\"],[[[[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"dummy\",\"buttonStates\"]]],null]],null],null,[[[1,\"    \"],[8,[39,3],null,[[\"@class\",\"@disabled\",\"@translatedLabel\"],[[28,[37,4],[\"btn-flat \",[30,14,[\"class\"]]],null],[30,14,[\"disabled\"]],[30,14,[\"text\"]]]],null],[1,\"\\n\"]],[14]],null]],[]]]]],[1,\"\\n\"]],[\"bs\",\"bs\",\"bs\",\"bs\",\"bs\",\"bs\",\"bs\",\"bs\",\"bs\",\"bs\",\"bs\",\"bs\",\"bs\",\"bs\"],false,[\"styleguide-example\",\"each\",\"-track-array\",\"d-button\",\"concat\",\"flat-button\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/templates/styleguide/atoms/02-buttons.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/templates/styleguide/atoms/03-colors", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="primary">
    <section class="color-row">
      <ColorExample @color="primary-very-low" />
      <ColorExample @color="primary-low" />
      <ColorExample @color="primary-low-mid" />
    </section>
    <section class="color-row">
      <ColorExample @color="primary-medium" />
      <ColorExample @color="primary-high" />
      <ColorExample @color="primary" />
    </section>
  </StyleguideExample>
  
  <StyleguideExample @title="primary-100">
    <section class="color-row">
      <ColorExample @color="primary-50" />
      <ColorExample @color="primary-100" />
      <ColorExample @color="primary-200" />
      <ColorExample @color="primary-300" />
      <ColorExample @color="primary-400" />
      <ColorExample @color="primary-500" />
    </section>
    <section class="color-row">
      <ColorExample @color="primary-600" />
      <ColorExample @color="primary-700" />
      <ColorExample @color="primary-800" />
      <ColorExample @color="primary-900" />
      <ColorExample @color="primary" />
    </section>
  </StyleguideExample>
  
  <StyleguideExample @title="secondary">
    <section class="color-row">
      <ColorExample @color="secondary-low" />
      <ColorExample @color="secondary-medium" />
      <ColorExample @color="secondary-high" />
      <ColorExample @color="secondary" />
    </section>
  </StyleguideExample>
  
  <StyleguideExample @title="tertiary">
    <section class="color-row">
      <ColorExample @color="tertiary-low" />
      <ColorExample @color="tertiary-medium" />
      <ColorExample @color="tertiary-high" />
      <ColorExample @color="tertiary" />
    </section>
  </StyleguideExample>
  
  <StyleguideExample @title="tertiary-100">
    <section class="color-row">
      <ColorExample @color="tertiary-50" />
      <ColorExample @color="tertiary-100" />
      <ColorExample @color="tertiary-200" />
      <ColorExample @color="tertiary-300" />
      <ColorExample @color="tertiary-400" />
      <ColorExample @color="tertiary-500" />
    </section>
    <section class="color-row">
      <ColorExample @color="tertiary-600" />
      <ColorExample @color="tertiary-700" />
      <ColorExample @color="tertiary-800" />
      <ColorExample @color="tertiary-900" />
      <ColorExample @color="tertiary" />
    </section>
  </StyleguideExample>
  
  <StyleguideExample @title="quaternary">
    <section class="color-row">
      <ColorExample @color="quaternary-low" />
      <ColorExample @color="quaternary" />
    </section>
  </StyleguideExample>
  
  <StyleguideExample @title="highlight">
    <section class="color-row">
      <ColorExample @color="highlight-low" />
      <ColorExample @color="highlight-medium" />
      <ColorExample @color="highlight" />
      <ColorExample @color="highlight-high" />
    </section>
  </StyleguideExample>
  
  <StyleguideExample @title="danger">
    <section class="color-row">
      <ColorExample @color="danger-low" />
      <ColorExample @color="danger-low-mid" />
      <ColorExample @color="danger-medium" />
      <ColorExample @color="danger" />
    </section>
  </StyleguideExample>
  
  <StyleguideExample @title="success">
    <section class="color-row">
      <ColorExample @color="success-low" />
      <ColorExample @color="success-medium" />
      <ColorExample @color="success" />
    </section>
  </StyleguideExample>
  
  <StyleguideExample @title="love">
    <section class="color-row">
      <ColorExample @color="love-low" />
      <ColorExample @color="love" />
    </section>
  </StyleguideExample>
  
  <StyleguideExample @title="header_primary">
    <section class="color-row">
      <ColorExample @color="header_background" />
    </section>
    <section class="color-row">
      <ColorExample @color="header_primary" />
      <ColorExample @color="header_primary-very-high" />
      <ColorExample @color="header_primary-high" />
    </section>
    <section class="color-row">
      <ColorExample @color="header_primary-medium" />
      <ColorExample @color="header_primary-low-mid" />
      <ColorExample @color="header_primary-low" />
    </section>
  </StyleguideExample>
  
  */
  {
    "id": "qkZkX8V4",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"primary\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,\"section\"],[14,0,\"color-row\"],[12],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"primary-very-low\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"primary-low\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"primary-low-mid\"]],null],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"section\"],[14,0,\"color-row\"],[12],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"primary-medium\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"primary-high\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"primary\"]],null],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"primary-100\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,\"section\"],[14,0,\"color-row\"],[12],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"primary-50\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"primary-100\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"primary-200\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"primary-300\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"primary-400\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"primary-500\"]],null],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"section\"],[14,0,\"color-row\"],[12],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"primary-600\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"primary-700\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"primary-800\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"primary-900\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"primary\"]],null],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"secondary\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,\"section\"],[14,0,\"color-row\"],[12],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"secondary-low\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"secondary-medium\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"secondary-high\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"secondary\"]],null],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"tertiary\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,\"section\"],[14,0,\"color-row\"],[12],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"tertiary-low\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"tertiary-medium\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"tertiary-high\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"tertiary\"]],null],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"tertiary-100\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,\"section\"],[14,0,\"color-row\"],[12],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"tertiary-50\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"tertiary-100\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"tertiary-200\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"tertiary-300\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"tertiary-400\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"tertiary-500\"]],null],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"section\"],[14,0,\"color-row\"],[12],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"tertiary-600\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"tertiary-700\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"tertiary-800\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"tertiary-900\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"tertiary\"]],null],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"quaternary\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,\"section\"],[14,0,\"color-row\"],[12],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"quaternary-low\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"quaternary\"]],null],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"highlight\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,\"section\"],[14,0,\"color-row\"],[12],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"highlight-low\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"highlight-medium\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"highlight\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"highlight-high\"]],null],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"danger\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,\"section\"],[14,0,\"color-row\"],[12],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"danger-low\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"danger-low-mid\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"danger-medium\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"danger\"]],null],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"success\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,\"section\"],[14,0,\"color-row\"],[12],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"success-low\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"success-medium\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"success\"]],null],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"love\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,\"section\"],[14,0,\"color-row\"],[12],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"love-low\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"love\"]],null],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"header_primary\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,\"section\"],[14,0,\"color-row\"],[12],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"header_background\"]],null],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"section\"],[14,0,\"color-row\"],[12],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"header_primary\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"header_primary-very-high\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"header_primary-high\"]],null],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"section\"],[14,0,\"color-row\"],[12],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"header_primary-medium\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"header_primary-low-mid\"]],null],[1,\"\\n    \"],[8,[39,1],null,[[\"@color\"],[\"header_primary-low\"]],null],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\"]],[],false,[\"styleguide-example\",\"color-example\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/templates/styleguide/atoms/03-colors.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/templates/styleguide/atoms/04-icons", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="section-description">
    <p>Discourse uses a free set of SVG icons from Font Awesome (<a href="https://fontawesome.com/icons?d=gallery&m=free">{{i18n "styleguide.sections.icons.full_list"}}</a>).</p>
    <p>Plugins and themes can add SVG icons to the SVG spritesheet, or replace existing icons entirely.</p>
    <p>
      <ul>
        <li><a href="https://meta.discourse.org/t/introducing-font-awesome-5-and-svg-icons/101643">How to use SVG icons in your plugin or theme</a></li>
        <li><a href="https://meta.discourse.org/t/replace-discourses-default-svg-icons-with-custom-icons-in-a-theme/115736/1">How to replace Discourse's default icons in a theme</a></li>
      </ul>
    </p>
    <p>By default, all icons have the <pre class="pre-inline">.d-icon</pre> class applied along with a class containing the name of the icon (e.g., <pre class="pre-inline">.d-icon-link</pre>)</p>
  </div>
  
  <StyleguideExample @title="d-icon - all available icons">
    <StyleguideIcons />
  </StyleguideExample>
  
  */
  {
    "id": "vKpnT0/N",
    "block": "[[[10,0],[14,0,\"section-description\"],[12],[1,\"\\n  \"],[10,2],[12],[1,\"Discourse uses a free set of SVG icons from Font Awesome (\"],[10,3],[14,6,\"https://fontawesome.com/icons?d=gallery&m=free\"],[12],[1,[28,[35,0],[\"styleguide.sections.icons.full_list\"],null]],[13],[1,\").\"],[13],[1,\"\\n  \"],[10,2],[12],[1,\"Plugins and themes can add SVG icons to the SVG spritesheet, or replace existing icons entirely.\"],[13],[1,\"\\n  \"],[10,2],[12],[1,\"\\n    \"],[10,\"ul\"],[12],[1,\"\\n      \"],[10,\"li\"],[12],[10,3],[14,6,\"https://meta.discourse.org/t/introducing-font-awesome-5-and-svg-icons/101643\"],[12],[1,\"How to use SVG icons in your plugin or theme\"],[13],[13],[1,\"\\n      \"],[10,\"li\"],[12],[10,3],[14,6,\"https://meta.discourse.org/t/replace-discourses-default-svg-icons-with-custom-icons-in-a-theme/115736/1\"],[12],[1,\"How to replace Discourse's default icons in a theme\"],[13],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,2],[12],[1,\"By default, all icons have the \"],[10,\"pre\"],[14,0,\"pre-inline\"],[12],[1,\".d-icon\"],[13],[1,\" class applied along with a class containing the name of the icon (e.g., \"],[10,\"pre\"],[14,0,\"pre-inline\"],[12],[1,\".d-icon-link\"],[13],[1,\")\"],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[8,[39,1],null,[[\"@title\"],[\"d-icon - all available icons\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,2],null,null,null],[1,\"\\n\"]],[]]]]],[1,\"\\n\"]],[],false,[\"i18n\",\"styleguide-example\",\"styleguide-icons\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/templates/styleguide/atoms/04-icons.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/templates/styleguide/atoms/05-input-fields", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="text-field">
    <TextField @placeholder="Placeholder" />
  </StyleguideExample>
  
  <StyleguideExample @title="password">
    <PasswordField @type="password" @placeholder="Placeholder" />
  </StyleguideExample>
  
  <StyleguideExample @title="textarea">
    <Textarea placeholder="Placeholder" />
  </StyleguideExample>
  
  <StyleguideExample @title="inline-form">
    <div class="inline-form">
      <TextField @placeholder="Placeholder" />
      <DButton @class="btn-primary" @icon="search" @type="submit" @translatedLabel="Submit" />
    </div>
  </StyleguideExample>
  
  <StyleguideExample @title="inline-form with icon button">
    <div class="inline-form">
      <TextField @placeholder="Placeholder" />
      <DButton @class="btn-primary" @icon="search" @type="submit" />
    </div>
  </StyleguideExample>
  
  <StyleguideExample @title="full-width inline-form with single input">
    <div class="inline-form full-width">
      <TextField @placeholder="Placeholder" />
    </div>
  </StyleguideExample>
  
  <StyleguideExample @title="full-width inline-form with input and icon button">
    <div class="inline-form full-width">
      <TextField @placeholder="Placeholder" />
      <DButton @class="btn-primary" @icon="search" @type="submit" />
    </div>
  </StyleguideExample>
  
  <StyleguideExample @title="inline-form with combo-box" @initialValue={{this.dummy.options.[0].name}} as |value|>
    <div class="inline-form">
      <TextField @placeholder="Placeholder" />
      <ComboBox @content={{this.dummy.options}} @value={{value}} @onChange={{fn (mut value)}} />
      <DButton @class="btn-primary" @icon="search" @type="submit" @translatedLabel="Submit" />
    </div>
  </StyleguideExample>
  
  <StyleguideExample @title="inline-form with multi-select">
    <div class="inline-form">
      <TextField />
      <MultiSelect @content={{this.dummy.options}} @onChange={{action "dummy"}} />
      <DButton @class="btn-primary" @icon="search" @type="submit" @translatedLabel="Submit" />
    </div>
  </StyleguideExample>
  
  <StyleguideExample @title="inline-form with multi-select and label">
    <div class="inline-form">
      <label>Text:</label>
      <TextField />
      <MultiSelect @content={{this.dummy.options}} @onChange={{action "dummy"}} />
      <DButton @class="btn-primary" @icon="search" @type="submit" @translatedLabel="Submit" />
    </div>
  </StyleguideExample>
  
  <StyleguideExample @title="full-width inline-form with search type input">
    <div class="inline-form full-width">
      <Input placeholder="Search type input" @type="search" />
    </div>
  </StyleguideExample>
  
  <StyleguideExample @title="category-notifications-button and regular button">
    <div class="inline-form">
      <CategoryNotificationsButton @category={{this.dummy.categories.[0]}} @value={{1}} @onChange={{action "dummy"}} />
      <DButton @icon="reply" @type="submit" @translatedLabel="Button" />
    </div>
  </StyleguideExample>
  
  */
  {
    "id": "lpuliA98",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"text-field\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@placeholder\"],[\"Placeholder\"]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"password\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,2],null,[[\"@type\",\"@placeholder\"],[\"password\",\"Placeholder\"]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"textarea\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,3],[[24,\"placeholder\",\"Placeholder\"]],null,null],[1,\"\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"inline-form\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"inline-form\"],[12],[1,\"\\n    \"],[8,[39,1],null,[[\"@placeholder\"],[\"Placeholder\"]],null],[1,\"\\n    \"],[8,[39,4],null,[[\"@class\",\"@icon\",\"@type\",\"@translatedLabel\"],[\"btn-primary\",\"search\",\"submit\",\"Submit\"]],null],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"inline-form with icon button\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"inline-form\"],[12],[1,\"\\n    \"],[8,[39,1],null,[[\"@placeholder\"],[\"Placeholder\"]],null],[1,\"\\n    \"],[8,[39,4],null,[[\"@class\",\"@icon\",\"@type\"],[\"btn-primary\",\"search\",\"submit\"]],null],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"full-width inline-form with single input\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"inline-form full-width\"],[12],[1,\"\\n    \"],[8,[39,1],null,[[\"@placeholder\"],[\"Placeholder\"]],null],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"full-width inline-form with input and icon button\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"inline-form full-width\"],[12],[1,\"\\n    \"],[8,[39,1],null,[[\"@placeholder\"],[\"Placeholder\"]],null],[1,\"\\n    \"],[8,[39,4],null,[[\"@class\",\"@icon\",\"@type\"],[\"btn-primary\",\"search\",\"submit\"]],null],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\",\"@initialValue\"],[\"inline-form with combo-box\",[30,0,[\"dummy\",\"options\",\"0\",\"name\"]]]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"inline-form\"],[12],[1,\"\\n    \"],[8,[39,1],null,[[\"@placeholder\"],[\"Placeholder\"]],null],[1,\"\\n    \"],[8,[39,5],null,[[\"@content\",\"@value\",\"@onChange\"],[[30,0,[\"dummy\",\"options\"]],[30,1],[28,[37,6],[[28,[37,7],[[30,1]],null]],null]]],null],[1,\"\\n    \"],[8,[39,4],null,[[\"@class\",\"@icon\",\"@type\",\"@translatedLabel\"],[\"btn-primary\",\"search\",\"submit\",\"Submit\"]],null],[1,\"\\n  \"],[13],[1,\"\\n\"]],[1]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"inline-form with multi-select\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"inline-form\"],[12],[1,\"\\n    \"],[8,[39,1],null,null,null],[1,\"\\n    \"],[8,[39,8],null,[[\"@content\",\"@onChange\"],[[30,0,[\"dummy\",\"options\"]],[28,[37,9],[[30,0],\"dummy\"],null]]],null],[1,\"\\n    \"],[8,[39,4],null,[[\"@class\",\"@icon\",\"@type\",\"@translatedLabel\"],[\"btn-primary\",\"search\",\"submit\",\"Submit\"]],null],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"inline-form with multi-select and label\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"inline-form\"],[12],[1,\"\\n    \"],[10,\"label\"],[12],[1,\"Text:\"],[13],[1,\"\\n    \"],[8,[39,1],null,null,null],[1,\"\\n    \"],[8,[39,8],null,[[\"@content\",\"@onChange\"],[[30,0,[\"dummy\",\"options\"]],[28,[37,9],[[30,0],\"dummy\"],null]]],null],[1,\"\\n    \"],[8,[39,4],null,[[\"@class\",\"@icon\",\"@type\",\"@translatedLabel\"],[\"btn-primary\",\"search\",\"submit\",\"Submit\"]],null],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"full-width inline-form with search type input\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"inline-form full-width\"],[12],[1,\"\\n    \"],[8,[39,10],[[24,\"placeholder\",\"Search type input\"]],[[\"@type\"],[\"search\"]],null],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"category-notifications-button and regular button\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"inline-form\"],[12],[1,\"\\n    \"],[8,[39,11],null,[[\"@category\",\"@value\",\"@onChange\"],[[30,0,[\"dummy\",\"categories\",\"0\"]],1,[28,[37,9],[[30,0],\"dummy\"],null]]],null],[1,\"\\n    \"],[8,[39,4],null,[[\"@icon\",\"@type\",\"@translatedLabel\"],[\"reply\",\"submit\",\"Button\"]],null],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\"]],[\"value\"],false,[\"styleguide-example\",\"text-field\",\"password-field\",\"textarea\",\"d-button\",\"combo-box\",\"fn\",\"mut\",\"multi-select\",\"action\",\"input\",\"category-notifications-button\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/templates/styleguide/atoms/05-input-fields.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/templates/styleguide/atoms/06-spinners", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="spinner - small">
    <div class="spinner small"></div>
  </StyleguideExample>
  
  <StyleguideExample @title="spinner - regular">
    <div class="spinner"></div>
  </StyleguideExample>
  
  */
  {
    "id": "thsAzXbd",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"spinner - small\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"spinner small\"],[12],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"spinner - regular\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"spinner\"],[12],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\"]],[],false,[\"styleguide-example\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/templates/styleguide/atoms/06-spinners.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/templates/styleguide/atoms/date-time-inputs", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="time-input">
    <TimeInput />
  </StyleguideExample>
  
  <StyleguideExample @title="date-input">
    <DateInput />
  </StyleguideExample>
  
  <StyleguideExample @title="date-time-input">
    <DateTimeInput @clearable={{true}} />
  </StyleguideExample>
  
  <StyleguideExample @title="date-time-input-range">
    <DateTimeInputRange />
  </StyleguideExample>
  
  <StyleguideExample @title="date-time-input-range">
    <DateTimeInputRange @showFromTime={{false}} @showToTime={{false}} />
  </StyleguideExample>
  
  <StyleguideExample @title="future-date-input">
    <FutureDateInput @displayLabelIcon="far-clock" @clearable={{true}} />
  </StyleguideExample>
  
  <StyleguideExample @title="date-picker">
    <DatePicker @defaultDate="YYYY-MM-DD" />
  </StyleguideExample>
  
  
  */
  {
    "id": "KH9UhNUT",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"time-input\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,null,null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"date-input\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,2],null,null,null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"date-time-input\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,3],null,[[\"@clearable\"],[true]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"date-time-input-range\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,4],null,null,null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"date-time-input-range\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,4],null,[[\"@showFromTime\",\"@showToTime\"],[false,false]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"future-date-input\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,5],null,[[\"@displayLabelIcon\",\"@clearable\"],[\"far-clock\",true]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"date-picker\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,6],null,[[\"@defaultDate\"],[\"YYYY-MM-DD\"]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"]],[],false,[\"styleguide-example\",\"time-input\",\"date-input\",\"date-time-input\",\"date-time-input-range\",\"future-date-input\",\"date-picker\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/templates/styleguide/atoms/date-time-inputs.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/templates/styleguide/atoms/dropdowns", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="combo-box" @initialValue={{this.dummy.options.[0].name}} as |value|>
    <ComboBox @content={{this.dummy.options}} @value={{value}} @onChange={{fn (mut value)}} />
  </StyleguideExample>
  
  <StyleguideExample @title="filterable combo-box" @initialValue={{this.dummy.categories.[0].name}} as |value|>
    <ComboBox @content={{this.dummy.categories}} @value={{value}} @options={{hash filterable=true}} @onChange={{fn (mut value)}} />
  </StyleguideExample>
  
  <StyleguideExample @title="combo-box with a default state" @initialValue={{this.dummy.options.[0].name}} as |value|>
    <ComboBox @content={{this.dummy.options}} @value={{value}} @options={{hash none="category.none"}} @onChange={{fn (mut value)}} />
  </StyleguideExample>
  
  <StyleguideExample @title="combo-box clearable" @initialValue={{this.dummy.options.[0].name}} as |value|>
    <ComboBox @content={{this.dummy.options}} @clearable={{true}} @value={{value}} @options={{hash none="category.none"}} @onChange={{fn (mut value)}} />
  </StyleguideExample>
  
  <StyleguideExample @title="topic-notifications-options" @initialValue={{1}} as |value|>
    <TopicNotificationsOptions @topic={{this.dummy.topic}} @value={{value}} @onChange={{fn (mut value)}} />
  </StyleguideExample>
  
  <StyleguideExample @title="topic-footer-mobile-dropdown">
    <TopicFooterMobileDropdown @topic={{this.dummy.topic}} />
  </StyleguideExample>
  
  <StyleguideExample @title="category-chooser" @initialValue={{this.categories.[0].name}} as |value|>
    <CategoryChooser @value={{value}} @onChange={{fn (mut value)}} />
  </StyleguideExample>
  
  <StyleguideExample @title="pinned-button">
    <PinnedButton @topic={{this.dummy.pinnedTopic}} />
  </StyleguideExample>
  
  <StyleguideExample @title="pinned-options">
    <PinnedOptions @topic={{this.dummy.pinnedTopic}} />
  </StyleguideExample>
  
  <StyleguideExample @title="categories-admin-dropdown">
    <CategoriesAdminDropdown @onChange={{action "dummy"}} />
  </StyleguideExample>
  
  <StyleguideExample @title="category-notifications-button">
    <CategoryNotificationsButton @category={{this.dummy.categories.[0]}} @value={{1}} @onChange={{action "dummy"}} />
  </StyleguideExample>
  
  <StyleguideExample @title="notifications-button">
    <NotificationsButton @options={{hash i18nPrefix="groups.notifications"}} @value={{2}} @onChange={{action "dummy"}} />
  </StyleguideExample>
  
  <StyleguideExample @title="dropdown-select-box">
    <DropdownSelectBox @content={{this.dummy.options}} @onChange={{action "dummy"}} @options={{hash
        translatedNone="Something"
      }} />
  </StyleguideExample>
  
  <StyleguideExample @title="future-date-input-selector">
    <FutureDateInputSelector @input={{this.dummy.topicTimerUpdateDate}} @includeWeekend={{true}} @includeForever={{true}} @options={{hash none="time_shortcut.select_timeframe"}} />
  </StyleguideExample>
  
  <StyleguideExample @title="multi-select">
    <MultiSelect @content={{this.dummy.options}} @onChange={{action "dummy"}} />
  </StyleguideExample>
  
  <StyleguideExample @title="admin group-chooser">
    <GroupChooser @selected={{this.dummy.selectedGroups}} @content={{this.dummy.groups}} @onChange={{action "dummy"}} />
  </StyleguideExample>
  
  <StyleguideExample @title="list-setting">
    <ListSetting @settingValue={{this.dummy.settings}} @onChange={{action "dummy"}} />
  </StyleguideExample>
  
  <StyleguideExample @title="list-setting with colors">
    <ListSetting @settingValue={{this.dummy.colors}} @nameProperty="color" @onChange={{action "dummy"}} />
  </StyleguideExample>
  
  <StyleguideExample @title="user-notifications-dropdown">
    <UserNotificationsDropdown @user={{this.currentUser}} @value="changeToNormal" />
  </StyleguideExample>
  
  */
  {
    "id": "XSyTRLB/",
    "block": "[[[8,[39,0],null,[[\"@title\",\"@initialValue\"],[\"combo-box\",[30,0,[\"dummy\",\"options\",\"0\",\"name\"]]]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@content\",\"@value\",\"@onChange\"],[[30,0,[\"dummy\",\"options\"]],[30,1],[28,[37,2],[[28,[37,3],[[30,1]],null]],null]]],null],[1,\"\\n\"]],[1]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\",\"@initialValue\"],[\"filterable combo-box\",[30,0,[\"dummy\",\"categories\",\"0\",\"name\"]]]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@content\",\"@value\",\"@options\",\"@onChange\"],[[30,0,[\"dummy\",\"categories\"]],[30,2],[28,[37,4],null,[[\"filterable\"],[true]]],[28,[37,2],[[28,[37,3],[[30,2]],null]],null]]],null],[1,\"\\n\"]],[2]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\",\"@initialValue\"],[\"combo-box with a default state\",[30,0,[\"dummy\",\"options\",\"0\",\"name\"]]]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@content\",\"@value\",\"@options\",\"@onChange\"],[[30,0,[\"dummy\",\"options\"]],[30,3],[28,[37,4],null,[[\"none\"],[\"category.none\"]]],[28,[37,2],[[28,[37,3],[[30,3]],null]],null]]],null],[1,\"\\n\"]],[3]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\",\"@initialValue\"],[\"combo-box clearable\",[30,0,[\"dummy\",\"options\",\"0\",\"name\"]]]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@content\",\"@clearable\",\"@value\",\"@options\",\"@onChange\"],[[30,0,[\"dummy\",\"options\"]],true,[30,4],[28,[37,4],null,[[\"none\"],[\"category.none\"]]],[28,[37,2],[[28,[37,3],[[30,4]],null]],null]]],null],[1,\"\\n\"]],[4]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\",\"@initialValue\"],[\"topic-notifications-options\",1]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,5],null,[[\"@topic\",\"@value\",\"@onChange\"],[[30,0,[\"dummy\",\"topic\"]],[30,5],[28,[37,2],[[28,[37,3],[[30,5]],null]],null]]],null],[1,\"\\n\"]],[5]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"topic-footer-mobile-dropdown\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,6],null,[[\"@topic\"],[[30,0,[\"dummy\",\"topic\"]]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\",\"@initialValue\"],[\"category-chooser\",[30,0,[\"categories\",\"0\",\"name\"]]]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,7],null,[[\"@value\",\"@onChange\"],[[30,6],[28,[37,2],[[28,[37,3],[[30,6]],null]],null]]],null],[1,\"\\n\"]],[6]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"pinned-button\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,8],null,[[\"@topic\"],[[30,0,[\"dummy\",\"pinnedTopic\"]]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"pinned-options\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,9],null,[[\"@topic\"],[[30,0,[\"dummy\",\"pinnedTopic\"]]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"categories-admin-dropdown\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,10],null,[[\"@onChange\"],[[28,[37,11],[[30,0],\"dummy\"],null]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"category-notifications-button\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,12],null,[[\"@category\",\"@value\",\"@onChange\"],[[30,0,[\"dummy\",\"categories\",\"0\"]],1,[28,[37,11],[[30,0],\"dummy\"],null]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"notifications-button\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,13],null,[[\"@options\",\"@value\",\"@onChange\"],[[28,[37,4],null,[[\"i18nPrefix\"],[\"groups.notifications\"]]],2,[28,[37,11],[[30,0],\"dummy\"],null]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"dropdown-select-box\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,14],null,[[\"@content\",\"@onChange\",\"@options\"],[[30,0,[\"dummy\",\"options\"]],[28,[37,11],[[30,0],\"dummy\"],null],[28,[37,4],null,[[\"translatedNone\"],[\"Something\"]]]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"future-date-input-selector\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,15],null,[[\"@input\",\"@includeWeekend\",\"@includeForever\",\"@options\"],[[30,0,[\"dummy\",\"topicTimerUpdateDate\"]],true,true,[28,[37,4],null,[[\"none\"],[\"time_shortcut.select_timeframe\"]]]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"multi-select\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,16],null,[[\"@content\",\"@onChange\"],[[30,0,[\"dummy\",\"options\"]],[28,[37,11],[[30,0],\"dummy\"],null]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"admin group-chooser\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,17],null,[[\"@selected\",\"@content\",\"@onChange\"],[[30,0,[\"dummy\",\"selectedGroups\"]],[30,0,[\"dummy\",\"groups\"]],[28,[37,11],[[30,0],\"dummy\"],null]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"list-setting\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,18],null,[[\"@settingValue\",\"@onChange\"],[[30,0,[\"dummy\",\"settings\"]],[28,[37,11],[[30,0],\"dummy\"],null]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"list-setting with colors\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,18],null,[[\"@settingValue\",\"@nameProperty\",\"@onChange\"],[[30,0,[\"dummy\",\"colors\"]],\"color\",[28,[37,11],[[30,0],\"dummy\"],null]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"user-notifications-dropdown\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,19],null,[[\"@user\",\"@value\"],[[30,0,[\"currentUser\"]],\"changeToNormal\"]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\"]],[\"value\",\"value\",\"value\",\"value\",\"value\",\"value\"],false,[\"styleguide-example\",\"combo-box\",\"fn\",\"mut\",\"hash\",\"topic-notifications-options\",\"topic-footer-mobile-dropdown\",\"category-chooser\",\"pinned-button\",\"pinned-options\",\"categories-admin-dropdown\",\"action\",\"category-notifications-button\",\"notifications-button\",\"dropdown-select-box\",\"future-date-input-selector\",\"multi-select\",\"group-chooser\",\"list-setting\",\"user-notifications-dropdown\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/templates/styleguide/atoms/dropdowns.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/templates/styleguide/atoms/topic-link", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="topic-link">
    {{topic-link this.dummy.topic}}
  </StyleguideExample>
  
  */
  {
    "id": "Rz9JbL+d",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"topic-link\"]],[[\"default\"],[[[[1,\"\\n  \"],[1,[28,[35,1],[[30,0,[\"dummy\",\"topic\"]]],null]],[1,\"\\n\"]],[]]]]],[1,\"\\n\"]],[],false,[\"styleguide-example\",\"topic-link\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/templates/styleguide/atoms/topic-link.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/templates/styleguide/atoms/topic-statuses", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="invisible">
    <TopicStatus @topic={{this.dummy.invisibleTopic}} />
  </StyleguideExample>
  
  <StyleguideExample @title="closed">
    <TopicStatus @topic={{this.dummy.closedTopic}} />
  </StyleguideExample>
  
  <StyleguideExample @title="pinned">
    <TopicStatus @topic={{this.dummy.pinnedTopic}} />
  </StyleguideExample>
  
  <StyleguideExample @title="unpinned">
    <TopicStatus @topic={{this.dummy.unpinnedTopic}} />
  </StyleguideExample>
  
  <StyleguideExample @title="archived">
    <TopicStatus @topic={{this.dummy.archivedTopic}} />
  </StyleguideExample>
  
  <StyleguideExample @title="warning">
    <TopicStatus @topic={{this.dummy.warningTopic}} />
  </StyleguideExample>
  
  <StyleguideExample @title="no status">
    <TopicStatus @topic={{this.dummy.topic}} />
  </StyleguideExample>
  
  */
  {
    "id": "fqrLBfWD",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"invisible\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@topic\"],[[30,0,[\"dummy\",\"invisibleTopic\"]]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"closed\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@topic\"],[[30,0,[\"dummy\",\"closedTopic\"]]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"pinned\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@topic\"],[[30,0,[\"dummy\",\"pinnedTopic\"]]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"unpinned\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@topic\"],[[30,0,[\"dummy\",\"unpinnedTopic\"]]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"archived\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@topic\"],[[30,0,[\"dummy\",\"archivedTopic\"]]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"warning\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@topic\"],[[30,0,[\"dummy\",\"warningTopic\"]]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"no status\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@topic\"],[[30,0,[\"dummy\",\"topic\"]]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\"]],[],false,[\"styleguide-example\",\"topic-status\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/templates/styleguide/atoms/topic-statuses.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/templates/styleguide/index", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideSection @title="styleguide.title">
    <div class="description">
      {{i18n "styleguide.welcome"}}
    </div>
  </StyleguideSection>
  
  */
  {
    "id": "VxpeBGPI",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"styleguide.title\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"description\"],[12],[1,\"\\n    \"],[1,[28,[35,1],[\"styleguide.welcome\"],null]],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\"]],[],false,[\"styleguide-section\",\"i18n\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/templates/styleguide/index.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/templates/styleguide/molecules/bread-crumbs", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="category-breadcrumbs">
    <BreadCrumbs @categories={{this.dummy.categories}} @showTags={{false}} />
  </StyleguideExample>
  
  {{#if this.siteSettings.tagging_enabled}}
    <StyleguideExample @title="category-breadcrumbs - tags">
      <BreadCrumbs @categories={{this.dummy.categories}} @showTags={{true}} />
    </StyleguideExample>
  {{/if}}
  
  */
  {
    "id": "1NGDI/7m",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"category-breadcrumbs\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@categories\",\"@showTags\"],[[30,0,[\"dummy\",\"categories\"]],false]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[41,[30,0,[\"siteSettings\",\"tagging_enabled\"]],[[[1,\"  \"],[8,[39,0],null,[[\"@title\"],[\"category-breadcrumbs - tags\"]],[[\"default\"],[[[[1,\"\\n    \"],[8,[39,1],null,[[\"@categories\",\"@showTags\"],[[30,0,[\"dummy\",\"categories\"]],true]],null],[1,\"\\n  \"]],[]]]]],[1,\"\\n\"]],[]],null]],[],false,[\"styleguide-example\",\"bread-crumbs\",\"if\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/templates/styleguide/molecules/bread-crumbs.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/templates/styleguide/molecules/categories", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="category-badge - bullet">
    {{#each this.dummy.categories as |c|}}
      {{category-badge c categoryStyle="bullet"}}
    {{/each}}
  </StyleguideExample>
  
  <StyleguideExample @title="category-badge - bar">
    {{#each this.dummy.categories as |c|}}
      {{category-badge c categoryStyle="bar"}}
    {{/each}}
  </StyleguideExample>
  
  <StyleguideExample @title="category-badge - box">
    {{#each this.dummy.categories as |c|}}
      {{category-badge c categoryStyle="box"}}
    {{/each}}
  </StyleguideExample>
  
  <StyleguideExample @title="category-badge - none">
    {{#each this.dummy.categories as |c|}}
      {{category-badge c categoryStyle="none"}}
    {{/each}}
  </StyleguideExample>
  
  */
  {
    "id": "PfAP1Wol",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"category-badge - bullet\"]],[[\"default\"],[[[[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"dummy\",\"categories\"]]],null]],null],null,[[[1,\"    \"],[1,[28,[35,3],[[30,1]],[[\"categoryStyle\"],[\"bullet\"]]]],[1,\"\\n\"]],[1]],null]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"category-badge - bar\"]],[[\"default\"],[[[[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"dummy\",\"categories\"]]],null]],null],null,[[[1,\"    \"],[1,[28,[35,3],[[30,2]],[[\"categoryStyle\"],[\"bar\"]]]],[1,\"\\n\"]],[2]],null]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"category-badge - box\"]],[[\"default\"],[[[[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"dummy\",\"categories\"]]],null]],null],null,[[[1,\"    \"],[1,[28,[35,3],[[30,3]],[[\"categoryStyle\"],[\"box\"]]]],[1,\"\\n\"]],[3]],null]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"category-badge - none\"]],[[\"default\"],[[[[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"dummy\",\"categories\"]]],null]],null],null,[[[1,\"    \"],[1,[28,[35,3],[[30,4]],[[\"categoryStyle\"],[\"none\"]]]],[1,\"\\n\"]],[4]],null]],[]]]]],[1,\"\\n\"]],[\"c\",\"c\",\"c\",\"c\"],false,[\"styleguide-example\",\"each\",\"-track-array\",\"category-badge\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/templates/styleguide/molecules/categories.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/templates/styleguide/molecules/empty-state", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="empty-state">
    <EmptyState @title={{this.dummy.sentence}} @body={{this.dummy.short_sentence}} />
  </StyleguideExample>
  
  */
  {
    "id": "QvJ79XFd",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"empty-state\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@title\",\"@body\"],[[30,0,[\"dummy\",\"sentence\"]],[30,0,[\"dummy\",\"short_sentence\"]]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\"]],[],false,[\"styleguide-example\",\"empty-state\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/templates/styleguide/molecules/empty-state.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/templates/styleguide/molecules/footer-message", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="footer-message - default">
    <FooterMessage @education={{this.dummy.sentence}} @message={{this.dummy.short_sentence}} />
  </StyleguideExample>
  
  <StyleguideExample @title="footer-message - latest">
    <FooterMessage @education={{this.dummy.sentence}} @message={{this.dummy.short_sentence}} @latest={{true}} @canCreateTopicOnCategory={{true}} @createTopic={{action "dummy"}} />
  </StyleguideExample>
  
  <StyleguideExample @title="footer-message - top">
    <FooterMessage @education={{this.dummy.sentence}} @message={{this.dummy.short_sentence}} @top={{true}} @changePeriod={{action "dummy"}} />
  </StyleguideExample>
  
  
  */
  {
    "id": "v5niu3e4",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"footer-message - default\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@education\",\"@message\"],[[30,0,[\"dummy\",\"sentence\"]],[30,0,[\"dummy\",\"short_sentence\"]]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"footer-message - latest\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@education\",\"@message\",\"@latest\",\"@canCreateTopicOnCategory\",\"@createTopic\"],[[30,0,[\"dummy\",\"sentence\"]],[30,0,[\"dummy\",\"short_sentence\"]],true,true,[28,[37,2],[[30,0],\"dummy\"],null]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"footer-message - top\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@education\",\"@message\",\"@top\",\"@changePeriod\"],[[30,0,[\"dummy\",\"sentence\"]],[30,0,[\"dummy\",\"short_sentence\"]],true,[28,[37,2],[[30,0],\"dummy\"],null]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"]],[],false,[\"styleguide-example\",\"footer-message\",\"action\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/templates/styleguide/molecules/footer-message.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/templates/styleguide/molecules/header-icons", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="header-icons">
    <MountWidget @widget="header-icons" />
  </StyleguideExample>
  
  <StyleguideExample @title="header-icons - user">
    <MountWidget @widget="header-icons" @args={{hash user=this.dummy.user}} />
  </StyleguideExample>
  
  <StyleguideExample @title="header-icons - notifications">
    <MountWidget @widget="header-icons" @args={{hash user=this.dummy.userWithUnread flagCount=5}} />
  </StyleguideExample>
  
  */
  {
    "id": "crg7eg8I",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"header-icons\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@widget\"],[\"header-icons\"]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"header-icons - user\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@widget\",\"@args\"],[\"header-icons\",[28,[37,2],null,[[\"user\"],[[30,0,[\"dummy\",\"user\"]]]]]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"header-icons - notifications\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@widget\",\"@args\"],[\"header-icons\",[28,[37,2],null,[[\"user\",\"flagCount\"],[[30,0,[\"dummy\",\"userWithUnread\"]],5]]]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\"]],[],false,[\"styleguide-example\",\"mount-widget\",\"hash\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/templates/styleguide/molecules/header-icons.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/templates/styleguide/molecules/navigation-bar", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="navigation-bar">
    <NavigationBar @navItems={{this.dummy.navItems}} @filterMode="latest" />
  </StyleguideExample>
  
  <StyleguideExample @title=".user-main .nav-pills">
    <MobileNav @class="main-nav" @desktopClass="nav nav-pills user-nav">
      {{#each this.dummy.navItems as |ni|}}
        <li><a href={{ni.href}} class={{if ni.styleGuideActive "active"}}>{{ni.displayName}}</a></li>
      {{/each}}
    </MobileNav>
  </StyleguideExample>
  
  <StyleguideExample @title="group page navigation-bar">
    <MobileNav @class="group-nav" @desktopClass="nav nav-pills">
      <li class="group-dropdown">
        <GroupDropdown @groups={{this.dummy.groupNames}} @value="staff" />
      </li>
  
      {{#each this.dummy.navItems as |ni|}}
        <li><a href={{ni.href}} class={{if ni.styleGuideActive "active"}}>{{ni.displayName}}</a></li>
      {{/each}}
    </MobileNav>
  </StyleguideExample>
  
  */
  {
    "id": "q+lYrpzq",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"navigation-bar\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@navItems\",\"@filterMode\"],[[30,0,[\"dummy\",\"navItems\"]],\"latest\"]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\".user-main .nav-pills\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,2],null,[[\"@class\",\"@desktopClass\"],[\"main-nav\",\"nav nav-pills user-nav\"]],[[\"default\"],[[[[1,\"\\n\"],[42,[28,[37,4],[[28,[37,4],[[30,0,[\"dummy\",\"navItems\"]]],null]],null],null,[[[1,\"      \"],[10,\"li\"],[12],[10,3],[15,6,[30,1,[\"href\"]]],[15,0,[52,[30,1,[\"styleGuideActive\"]],\"active\"]],[12],[1,[30,1,[\"displayName\"]]],[13],[13],[1,\"\\n\"]],[1]],null],[1,\"  \"]],[]]]]],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"group page navigation-bar\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,2],null,[[\"@class\",\"@desktopClass\"],[\"group-nav\",\"nav nav-pills\"]],[[\"default\"],[[[[1,\"\\n    \"],[10,\"li\"],[14,0,\"group-dropdown\"],[12],[1,\"\\n      \"],[8,[39,6],null,[[\"@groups\",\"@value\"],[[30,0,[\"dummy\",\"groupNames\"]],\"staff\"]],null],[1,\"\\n    \"],[13],[1,\"\\n\\n\"],[42,[28,[37,4],[[28,[37,4],[[30,0,[\"dummy\",\"navItems\"]]],null]],null],null,[[[1,\"      \"],[10,\"li\"],[12],[10,3],[15,6,[30,2,[\"href\"]]],[15,0,[52,[30,2,[\"styleGuideActive\"]],\"active\"]],[12],[1,[30,2,[\"displayName\"]]],[13],[13],[1,\"\\n\"]],[2]],null],[1,\"  \"]],[]]]]],[1,\"\\n\"]],[]]]]],[1,\"\\n\"]],[\"ni\",\"ni\"],false,[\"styleguide-example\",\"navigation-bar\",\"mobile-nav\",\"each\",\"-track-array\",\"if\",\"group-dropdown\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/templates/styleguide/molecules/navigation-bar.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/templates/styleguide/molecules/navigation-stacked", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title=".nav-stacked" class="half-size">
    <MobileNav @class="preferences-nav" @desktopClass="preferences-list action-list nav-stacked">
      {{#each this.dummy.navItems as |ni|}}
        <li><a href={{ni.href}} class={{if ni.styleGuideActive "active"}}>{{ni.displayName}}</a></li>
      {{/each}}
    </MobileNav>
  </StyleguideExample>
  
  <StyleguideExample @title=".user-navigation .nav-stacked" class="half-size">
    <DSection @class="user-navigation">
      <MobileNav @class="preferences-nav" @desktopClass="preferences-list action-list nav-stacked">
        {{#each this.dummy.navItems as |ni|}}
          <li><a href={{ni.href}} class={{if ni.styleGuideActive "active"}}>{{ni.displayName}}</a></li>
        {{/each}}
      </MobileNav>
    </DSection>
  </StyleguideExample>
  
  */
  {
    "id": "rodHBAQq",
    "block": "[[[8,[39,0],[[24,0,\"half-size\"]],[[\"@title\"],[\".nav-stacked\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@class\",\"@desktopClass\"],[\"preferences-nav\",\"preferences-list action-list nav-stacked\"]],[[\"default\"],[[[[1,\"\\n\"],[42,[28,[37,3],[[28,[37,3],[[30,0,[\"dummy\",\"navItems\"]]],null]],null],null,[[[1,\"      \"],[10,\"li\"],[12],[10,3],[15,6,[30,1,[\"href\"]]],[15,0,[52,[30,1,[\"styleGuideActive\"]],\"active\"]],[12],[1,[30,1,[\"displayName\"]]],[13],[13],[1,\"\\n\"]],[1]],null],[1,\"  \"]],[]]]]],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],[[24,0,\"half-size\"]],[[\"@title\"],[\".user-navigation .nav-stacked\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,5],null,[[\"@class\"],[\"user-navigation\"]],[[\"default\"],[[[[1,\"\\n    \"],[8,[39,1],null,[[\"@class\",\"@desktopClass\"],[\"preferences-nav\",\"preferences-list action-list nav-stacked\"]],[[\"default\"],[[[[1,\"\\n\"],[42,[28,[37,3],[[28,[37,3],[[30,0,[\"dummy\",\"navItems\"]]],null]],null],null,[[[1,\"        \"],[10,\"li\"],[12],[10,3],[15,6,[30,2,[\"href\"]]],[15,0,[52,[30,2,[\"styleGuideActive\"]],\"active\"]],[12],[1,[30,2,[\"displayName\"]]],[13],[13],[1,\"\\n\"]],[2]],null],[1,\"    \"]],[]]]]],[1,\"\\n  \"]],[]]]]],[1,\"\\n\"]],[]]]]],[1,\"\\n\"]],[\"ni\",\"ni\"],false,[\"styleguide-example\",\"mobile-nav\",\"each\",\"-track-array\",\"if\",\"d-section\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/templates/styleguide/molecules/navigation-stacked.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/templates/styleguide/molecules/post-menu", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="post-menu">
    <MountWidget @widget="post-menu" @args={{this.dummy.transformedPost}} />
  </StyleguideExample>
  
  */
  {
    "id": "Saz9YGhn",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"post-menu\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@widget\",\"@args\"],[\"post-menu\",[30,0,[\"dummy\",\"transformedPost\"]]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\"]],[],false,[\"styleguide-example\",\"mount-widget\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/templates/styleguide/molecules/post-menu.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/templates/styleguide/molecules/rich-tooltip", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="rich-tooltip">
    <DButton>
      {{i18n "styleguide.sections.rich_tooltip.hover_to_see"}}
      <DTooltip>
        <h3>{{i18n "styleguide.sections.rich_tooltip.header"}}</h3>
        {{i18n "styleguide.sections.rich_tooltip.description"}}
      </DTooltip>
    </DButton>
  </StyleguideExample>
  
  */
  {
    "id": "Q4KG4WlH",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"rich-tooltip\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,null,[[\"default\"],[[[[1,\"\\n    \"],[1,[28,[35,2],[\"styleguide.sections.rich_tooltip.hover_to_see\"],null]],[1,\"\\n    \"],[8,[39,3],null,null,[[\"default\"],[[[[1,\"\\n      \"],[10,\"h3\"],[12],[1,[28,[35,2],[\"styleguide.sections.rich_tooltip.header\"],null]],[13],[1,\"\\n      \"],[1,[28,[35,2],[\"styleguide.sections.rich_tooltip.description\"],null]],[1,\"\\n    \"]],[]]]]],[1,\"\\n  \"]],[]]]]],[1,\"\\n\"]],[]]]]],[1,\"\\n\"]],[],false,[\"styleguide-example\",\"d-button\",\"i18n\",\"d-tooltip\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/templates/styleguide/molecules/rich-tooltip.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/templates/styleguide/molecules/signup-cta", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="signup-cta">
    <SignupCta />
  </StyleguideExample>
  
  
  */
  {
    "id": "IMcGJO2p",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"signup-cta\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,null,null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"]],[],false,[\"styleguide-example\",\"signup-cta\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/templates/styleguide/molecules/signup-cta.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/templates/styleguide/molecules/topic-list-item", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="topic list item">
    <table class="topic-list">
      <tbody>
        <TopicListItem @topic={{this.dummy.topic}} @showPosters={{true}} />
      </tbody>
    </table>
  </StyleguideExample>
  
  <StyleguideExample @title="topic list item - hide category">
    <table class="topic-list">
      <tbody>
        <TopicListItem @topic={{this.dummy.topic}} @hideCategory={{true}} @showPosters={{true}} />
      </tbody>
    </table>
  </StyleguideExample>
  
  <StyleguideExample @title="topic list item - show likes">
    <table class="topic-list">
      <tbody>
        <TopicListItem @topic={{this.dummy.topic}} @showLikes={{true}} @showPosters={{true}} />
      </tbody>
    </table>
  </StyleguideExample>
  
  <StyleguideExample @title="topic list item - latest" class="half-size">
    <LatestTopicListItem @topic={{this.dummy.topic}} />
  </StyleguideExample>
  
  */
  {
    "id": "ezumD0fq",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"topic list item\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,\"table\"],[14,0,\"topic-list\"],[12],[1,\"\\n    \"],[10,\"tbody\"],[12],[1,\"\\n      \"],[8,[39,1],null,[[\"@topic\",\"@showPosters\"],[[30,0,[\"dummy\",\"topic\"]],true]],null],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"topic list item - hide category\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,\"table\"],[14,0,\"topic-list\"],[12],[1,\"\\n    \"],[10,\"tbody\"],[12],[1,\"\\n      \"],[8,[39,1],null,[[\"@topic\",\"@hideCategory\",\"@showPosters\"],[[30,0,[\"dummy\",\"topic\"]],true,true]],null],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"topic list item - show likes\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,\"table\"],[14,0,\"topic-list\"],[12],[1,\"\\n    \"],[10,\"tbody\"],[12],[1,\"\\n      \"],[8,[39,1],null,[[\"@topic\",\"@showLikes\",\"@showPosters\"],[[30,0,[\"dummy\",\"topic\"]],true,true]],null],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],[[24,0,\"half-size\"]],[[\"@title\"],[\"topic list item - latest\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,2],null,[[\"@topic\"],[[30,0,[\"dummy\",\"topic\"]]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\"]],[],false,[\"styleguide-example\",\"topic-list-item\",\"latest-topic-list-item\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/templates/styleguide/molecules/topic-list-item.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/templates/styleguide/molecules/topic-notifications", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="topic-notifications-button">
    <TopicNotificationsButton @topic={{this.dummy.topic}} />
  </StyleguideExample>
  
  */
  {
    "id": "ynXxn3pX",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"topic-notifications-button\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@topic\"],[[30,0,[\"dummy\",\"topic\"]]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\"]],[],false,[\"styleguide-example\",\"topic-notifications-button\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/templates/styleguide/molecules/topic-notifications.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/templates/styleguide/molecules/topic-timer-info", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="topic-timer-info">
    <TopicTimerInfo @statusType="reminder" @executeAt={{this.dummy.soon}} />
  </StyleguideExample>
  
  */
  {
    "id": "XWBgyTT9",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"topic-timer-info\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@statusType\",\"@executeAt\"],[\"reminder\",[30,0,[\"dummy\",\"soon\"]]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\"]],[],false,[\"styleguide-example\",\"topic-timer-info\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/templates/styleguide/molecules/topic-timer-info.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/templates/styleguide/organisms/00-post", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="post">
    <MountWidget @widget="post" @args={{this.dummy.transformedPost}} />
  </StyleguideExample>
  
  */
  {
    "id": "W5FGKZVf",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"post\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@widget\",\"@args\"],[\"post\",[30,0,[\"dummy\",\"transformedPost\"]]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\"]],[],false,[\"styleguide-example\",\"mount-widget\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/templates/styleguide/organisms/00-post.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/templates/styleguide/organisms/01-topic-map", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="topic-map">
    <MountWidget @widget="topic-map" @args={{this.dummy.transformedPost}} />
  </StyleguideExample>
  
  */
  {
    "id": "GifbWHKh",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"topic-map\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@widget\",\"@args\"],[\"topic-map\",[30,0,[\"dummy\",\"transformedPost\"]]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\"]],[],false,[\"styleguide-example\",\"mount-widget\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/templates/styleguide/organisms/01-topic-map.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/templates/styleguide/organisms/03-topic-footer-buttons", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="topic-footer-buttons - logged in">
    <TopicFooterButtons @topic={{this.dummy.topic}} />
  </StyleguideExample>
  
  <StyleguideExample @title="topic-footer-buttons - anonymous">
    <div id="topic-footer-buttons">
      <DButton @icon="reply" @class="btn-primary pull-right" @label="topic.reply.title" />
    </div>
  </StyleguideExample>
  
  */
  {
    "id": "e6/8kMXW",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"topic-footer-buttons - logged in\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@topic\"],[[30,0,[\"dummy\",\"topic\"]]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"topic-footer-buttons - anonymous\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,1,\"topic-footer-buttons\"],[12],[1,\"\\n    \"],[8,[39,2],null,[[\"@icon\",\"@class\",\"@label\"],[\"reply\",\"btn-primary pull-right\",\"topic.reply.title\"]],null],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\"]],[],false,[\"styleguide-example\",\"topic-footer-buttons\",\"d-button\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/templates/styleguide/organisms/03-topic-footer-buttons.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/templates/styleguide/organisms/04-topic-list", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="topic-list">
    <TopicList @topics={{this.dummy.topics}} @showPosters={{true}} />
  </StyleguideExample>
  
  <StyleguideExample @title="topic-list - hide posters">
    <TopicList @topics={{this.dummy.topics}} @showPosters={{false}} />
  </StyleguideExample>
  
  */
  {
    "id": "XTkNnirY",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"topic-list\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@topics\",\"@showPosters\"],[[30,0,[\"dummy\",\"topics\"]],true]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\"topic-list - hide posters\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@topics\",\"@showPosters\"],[[30,0,[\"dummy\",\"topics\"]],false]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\"]],[],false,[\"styleguide-example\",\"topic-list\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/templates/styleguide/organisms/04-topic-list.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/templates/styleguide/organisms/basic-topic-list", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="basic-topic-list" class="half-size">
    <BasicTopicList @topics={{this.dummy.topics}} />
  </StyleguideExample>
  
  */
  {
    "id": "+RH01LLO",
    "block": "[[[8,[39,0],[[24,0,\"half-size\"]],[[\"@title\"],[\"basic-topic-list\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@topics\"],[[30,0,[\"dummy\",\"topics\"]]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\"]],[],false,[\"styleguide-example\",\"basic-topic-list\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/templates/styleguide/organisms/basic-topic-list.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/templates/styleguide/organisms/categories-list", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="categories-only">
    <CategoriesOnly @categories={{this.dummy.categories}} />
  </StyleguideExample>
  
  */
  {
    "id": "0TLRW7WE",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"categories-only\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@categories\"],[[30,0,[\"dummy\",\"categories\"]]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\"]],[],false,[\"styleguide-example\",\"categories-only\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/templates/styleguide/organisms/categories-list.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/templates/styleguide/organisms/modal", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="d-modal">
    <DModal @closeModal={{action "dummy"}} @modalStyle="inline-modal" @title={{i18n "styleguide.sections.modal.header"}}>
      <DModalBody>
        {{html-safe this.dummy.lorem}}
      </DModalBody>
      <div class="modal-footer">
        {{i18n "styleguide.sections.modal.footer"}}
      </div>
    </DModal>
  </StyleguideExample>
  
  */
  {
    "id": "iK8PVWlp",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"d-modal\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@closeModal\",\"@modalStyle\",\"@title\"],[[28,[37,2],[[30,0],\"dummy\"],null],\"inline-modal\",[28,[37,3],[\"styleguide.sections.modal.header\"],null]]],[[\"default\"],[[[[1,\"\\n    \"],[8,[39,4],null,null,[[\"default\"],[[[[1,\"\\n      \"],[1,[28,[35,5],[[30,0,[\"dummy\",\"lorem\"]]],null]],[1,\"\\n    \"]],[]]]]],[1,\"\\n    \"],[10,0],[14,0,\"modal-footer\"],[12],[1,\"\\n      \"],[1,[28,[35,3],[\"styleguide.sections.modal.footer\"],null]],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\"]],[]]]]],[1,\"\\n\"]],[],false,[\"styleguide-example\",\"d-modal\",\"action\",\"i18n\",\"d-modal-body\",\"html-safe\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/templates/styleguide/organisms/modal.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/templates/styleguide/organisms/navigation", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="navigation">
    <div class="list-controls">
      <div class="container">
        <DSection @class="navigation-container">
          <BreadCrumbs @categories={{this.dummy.categories}} />
          <NavigationBar @navItems={{this.dummy.navItems}} @filterMode="latest" />
          <div class="navigation-controls">
            <CategoriesAdminDropdown />
            <CreateTopicButton @canCreateTopic={{true}} />
          </div>
        </DSection>
      </div>
    </div>
  </StyleguideExample>
  
  */
  {
    "id": "jRVtrQUT",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"navigation\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"list-controls\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"container\"],[12],[1,\"\\n      \"],[8,[39,1],null,[[\"@class\"],[\"navigation-container\"]],[[\"default\"],[[[[1,\"\\n        \"],[8,[39,2],null,[[\"@categories\"],[[30,0,[\"dummy\",\"categories\"]]]],null],[1,\"\\n        \"],[8,[39,3],null,[[\"@navItems\",\"@filterMode\"],[[30,0,[\"dummy\",\"navItems\"]],\"latest\"]],null],[1,\"\\n        \"],[10,0],[14,0,\"navigation-controls\"],[12],[1,\"\\n          \"],[8,[39,4],null,null,null],[1,\"\\n          \"],[8,[39,5],null,[[\"@canCreateTopic\"],[true]],null],[1,\"\\n        \"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\"]],[],false,[\"styleguide-example\",\"d-section\",\"bread-crumbs\",\"navigation-bar\",\"categories-admin-dropdown\",\"create-topic-button\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/templates/styleguide/organisms/navigation.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/templates/styleguide/organisms/site-header", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="site header - in topic - scrolled">
    <div class="d-header-wrap">
      <header class="d-header">
        <div class="wrap">
          <div class="contents">
            <MountWidget @widget="home-logo" @args={{hash minimized=true}} />
            <MountWidget @widget="header-topic-info" @args={{this.dummy}} />
            <div class="panel clearfix">
              <MountWidget @widget="header-icons" @args={{hash user=this.dummy.user}} />
            </div>
          </div>
        </div>
      </header>
    </div>
  </StyleguideExample>
  
  
  */
  {
    "id": "ankB9vkd",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"site header - in topic - scrolled\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"d-header-wrap\"],[12],[1,\"\\n    \"],[10,\"header\"],[14,0,\"d-header\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"wrap\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"contents\"],[12],[1,\"\\n          \"],[8,[39,1],null,[[\"@widget\",\"@args\"],[\"home-logo\",[28,[37,2],null,[[\"minimized\"],[true]]]]],null],[1,\"\\n          \"],[8,[39,1],null,[[\"@widget\",\"@args\"],[\"header-topic-info\",[30,0,[\"dummy\"]]]],null],[1,\"\\n          \"],[10,0],[14,0,\"panel clearfix\"],[12],[1,\"\\n            \"],[8,[39,1],null,[[\"@widget\",\"@args\"],[\"header-icons\",[28,[37,2],null,[[\"user\"],[[30,0,[\"dummy\",\"user\"]]]]]]],null],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"]],[],false,[\"styleguide-example\",\"mount-widget\",\"hash\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/templates/styleguide/organisms/site-header.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/templates/styleguide/organisms/suggested-topics", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title="suggested-topics">
    <SuggestedTopics @topic={{this.dummy.topic}} />
  </StyleguideExample>
  
  */
  {
    "id": "Cxsb73/1",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"suggested-topics\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@topic\"],[[30,0,[\"dummy\",\"topic\"]]]],null],[1,\"\\n\"]],[]]]]],[1,\"\\n\"]],[],false,[\"styleguide-example\",\"suggested-topics\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/templates/styleguide/organisms/suggested-topics.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/templates/styleguide/organisms/user-about", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideExample @title=".user-main .about.collapsed-info.no-background">
    <DSection @class="user-main">
      <section class="collapsed-info about no-background">
        <div class="profile-image"></div>
        <div class="details">
          <div class="primary">
            {{bound-avatar this.dummy.user "huge"}}
            <section class="controls">
              <ul>
                <li>
                  <a class="btn btn-primary">
                    {{d-icon "envelope"}}
                    {{i18n "user.private_message"}}
                  </a>
                </li>
                <li><a href={{this.dummy.user.adminPath}} class="btn">{{d-icon "wrench"}}{{i18n "admin.user.show_admin_profile"}}</a></li>
                <li><a href="#" class="btn">{{d-icon "angle-double-down"}}{{i18n "user.expand_profile"}}</a></li>
              </ul>
            </section>
  
            <div class="primary-textual">
              <h1 class="username">{{this.dummy.user.username}} {{d-icon "shield-alt"}}</h1>
              <h2 class="full-name">{{this.dummy.user.name}}</h2>
              <h3>{{this.dummy.user.title}}</h3>
            </div>
          </div>
          <div style="clear: both"></div>
        </div>
      </section>
    </DSection>
  </StyleguideExample>
  
  <StyleguideExample @title=".user-main .about.collapsed-info.has-background">
    <DSection @class="user-main">
      <section class="collapsed-info about has-background"  style={{this.dummy.user.profileBackground}}>
        <div class="profile-image"></div>
        <div class="details">
          <div class="primary">
            {{bound-avatar this.dummy.user "huge"}}
            <section class="controls">
              <ul>
                <li>
                  <a class="btn btn-primary">
                    {{d-icon "envelope"}}
                    {{i18n "user.private_message"}}
                  </a>
                </li>
                <li><a href={{this.dummy.user.adminPath}} class="btn">{{d-icon "wrench"}}{{i18n "admin.user.show_admin_profile"}}</a></li>
                <li><a href="#" class="btn">{{d-icon "angle-double-down"}}{{i18n "user.expand_profile"}}</a></li>
              </ul>
            </section>
  
            <div class="primary-textual">
              <h1 class="username">{{this.dummy.user.username}} {{d-icon "shield-alt"}}</h1>
              <h2 class="full-name">{{this.dummy.user.name}}</h2>
              <h3>{{this.dummy.user.title}}</h3>
            </div>
          </div>
          <div style="clear: both"></div>
        </div>
      </section>
    </DSection>
  </StyleguideExample>
  
  <StyleguideExample @title=".user-main .about.no-background">
    <DSection @class="user-main">
      <section class="about no-background">
  
        <div class="staff-counters">
          <div><span class="helpful-flags">{{this.dummy.user.number_of_flags_given}}</span>&nbsp;{{i18n "user.staff_counters.flags_given"}}</div>
          <div>
            <a href="#">
              <span class="flagged-posts">{{this.dummy.user.number_of_flagged_posts}}</span>&nbsp;{{i18n "user.staff_counters.flagged_posts"}}
            </a>
          </div>
          <div>
            <a href="#">
              <span class="deleted-posts">{{this.dummy.user.number_of_deleted_posts}}</span>&nbsp;{{i18n "user.staff_counters.deleted_posts"}}
            </a>
          </div>
          <div><span class="suspensions">{{this.dummy.user.number_of_suspensions}}</span>&nbsp;{{i18n "user.staff_counters.suspensions"}}</div>
          <div><span class="warnings-received">{{this.dummy.user.warnings_received_count}}</span>&nbsp;{{i18n "user.staff_counters.warnings_received"}}</div>
        </div>
  
        <div class="profile-image"></div>
        <div class="details">
          <div class="primary">
            {{bound-avatar this.dummy.user "huge"}}
            <section class="controls">
              <ul>
                <li>
                  <a class="btn btn-primary">
                    {{d-icon "envelope"}}
                    {{i18n "user.private_message"}}
                  </a>
                </li>
                <li><a href={{this.dummy.user.adminPath}} class="btn">{{d-icon "wrench"}}{{i18n "admin.user.show_admin_profile"}}</a></li>
              </ul>
            </section>
  
            <div class="primary-textual">
              <h1 class="username">{{this.dummy.user.username}} {{d-icon "shield-alt"}}</h1>
              <h2 class="full-name">{{this.dummy.user.name}}</h2>
              <h3>{{this.dummy.user.title}}</h3>
              <h3>
                {{d-icon "map-marker-alt"}} {{this.dummy.user.location}}
                {{d-icon "globe"}}
                <a href={{this.dummy.user.website}} rel="nofollow noopener noreferrer" target="_blank">{{this.dummy.user.website_name}}</a>
              </h3>
  
              <div class="bio">
                <div class="suspended">
                  {{d-icon "ban"}}
                  <b>{{i18n "user.suspended_notice" date=this.dummy.user.suspendedTillDate}}</b><br>
                  <b>{{i18n "user.suspended_reason"}}</b> {{this.dummy.user.suspend_reason}}
                </div>
                {{html-safe this.dummy.user.bio_cooked}}
              </div>
  
              <div class="public-user-fields">
                {{#each this.dummy.user.publicUserFields as |uf|}}
                  {{#if uf.value}}
                    <div class="public-user-field {{uf.field.dasherized_name}}">
                      <span class="user-field-name">{{uf.field.name}}</span>:
                      <span class="user-field-value">{{uf.value}}</span>
                    </div>
                  {{/if}}
                {{/each}}
              </div>
            </div>
          </div>
          <div style="clear: both"></div>
        </div>
  
        <div class="secondary">
          <dl>
            <dt>{{i18n "user.created"}}</dt><dd>{{bound-date this.dummy.user.created_at}}</dd>
            <dt>{{i18n "user.last_posted"}}</dt><dd>{{bound-date this.dummy.user.last_posted_at}}</dd>
            <dt>{{i18n "user.last_seen"}}</dt><dd>{{bound-date this.dummy.user.last_seen_at}}</dd>
            <dt>{{i18n "views"}}</dt><dd>{{this.dummy.user.profile_view_count}}</dd>
            <dt class="invited-by">{{i18n "user.invited_by"}}</dt><dd class="invited-by"><a href="#">{{this.dummy.user.invited_by.username}}</a></dd>
            <dt class="trust-level">{{i18n "user.trust_level"}}</dt><dd class="trust-level">{{this.dummy.user.trustLevel.name}}</dd>
            <dt>{{i18n "user.email.title"}}</dt>
            <dd title={{this.dummy.user.email}}>
              <DButton @icon="far-envelope" @label="admin.users.check_email.text" @class="btn-primary" />
            </dd>
            <dt class="groups">{{i18n "groups.title" count=this.dummy.user.displayGroups.length}}</dt>
            <dd class="groups">
              {{#each this.dummy.user.displayGroups as |group|}}
                <span><a href="#" class="group-link">{{group.name}}</a></span>
              {{/each}}
            </dd>
            <DButton @icon="exclamation-triangle" @label="user.admin_delete" @class="btn-danger" />
          </dl>
        </div>
      </section>
    </DSection>
  </StyleguideExample>
  
  <StyleguideExample @title=".user-main .about.has-background">
    <DSection @class="user-main">
      <section class="about has-background"  style={{this.dummy.user.profileBackground}}>
        <div class="staff-counters">
          <div><span class="helpful-flags">{{this.dummy.user.number_of_flags_given}}</span>&nbsp;{{i18n "user.staff_counters.flags_given"}}</div>
          <div>
            <a href="#">
              <span class="flagged-posts">{{this.dummy.user.number_of_flagged_posts}}</span>&nbsp;{{i18n "user.staff_counters.flagged_posts"}}
            </a>
          </div>
          <div>
            <a href="#">
              <span class="deleted-posts">{{this.dummy.user.number_of_deleted_posts}}</span>&nbsp;{{i18n "user.staff_counters.deleted_posts"}}
            </a>
          </div>
          <div><span class="suspensions">{{this.dummy.user.number_of_suspensions}}</span>&nbsp;{{i18n "user.staff_counters.suspensions"}}</div>
          <div><span class="warnings-received">{{this.dummy.user.warnings_received_count}}</span>&nbsp;{{i18n "user.staff_counters.warnings_received"}}</div>
        </div>
  
        <div class="profile-image"></div>
        <div class="details">
          <div class="primary">
            {{bound-avatar this.dummy.user "huge"}}
            <section class="controls">
              <ul>
                <li>
                  <a class="btn btn-primary">
                    {{d-icon "envelope"}}
                    {{i18n "user.private_message"}}
                  </a>
                </li>
                <li><a href={{this.dummy.user.adminPath}} class="btn">{{d-icon "wrench"}}{{i18n "admin.user.show_admin_profile"}}</a></li>
              </ul>
            </section>
  
            <div class="primary-textual">
              <h1 class="username">{{this.dummy.user.username}} {{d-icon "shield-alt"}}</h1>
              <h2 class="full-name">{{this.dummy.user.name}}</h2>
              <h3>{{this.dummy.user.title}}</h3>
              <h3>
                {{d-icon "map-marker-alt"}} {{this.dummy.user.location}}
                {{d-icon "globe"}}
                <a href={{this.dummy.user.website}} rel="nofollow noopener noreferrer" target="_blank">{{this.dummy.user.website_name}}</a>
              </h3>
  
              <div class="bio">
                <div class="suspended">
                  {{d-icon "ban"}}
                  <b>{{i18n "user.suspended_notice" date=this.dummy.user.suspendedTillDate}}</b><br>
                  <b>{{i18n "user.suspended_reason"}}</b> {{this.dummy.user.suspend_reason}}
                </div>
                {{html-safe this.dummy.user.bio_cooked}}
              </div>
  
              <div class="public-user-fields">
                {{#each this.dummy.user.publicUserFields as |uf|}}
                  {{#if uf.value}}
                    <div class="public-user-field {{uf.field.dasherized_name}}">
                      <span class="user-field-name">{{uf.field.name}}</span>:
                      <span class="user-field-value">{{uf.value}}</span>
                    </div>
                  {{/if}}
                {{/each}}
              </div>
  
            </div>
          </div>
          <div style="clear: both"></div>
        </div>
  
        <div class="secondary">
          <dl>
            <dt>{{i18n "user.created"}}</dt><dd>{{bound-date this.dummy.user.created_at}}</dd>
            <dt>{{i18n "user.last_posted"}}</dt><dd>{{bound-date this.dummy.user.last_posted_at}}</dd>
            <dt>{{i18n "user.last_seen"}}</dt><dd>{{bound-date this.dummy.user.last_seen_at}}</dd>
            <dt>{{i18n "views"}}</dt><dd>{{this.dummy.user.profile_view_count}}</dd>
            <dt class="invited-by">{{i18n "user.invited_by"}}</dt><dd class="invited-by"><a href="#">{{this.dummy.user.invited_by.username}}</a></dd>
            <dt class="trust-level">{{i18n "user.trust_level"}}</dt><dd class="trust-level">{{this.dummy.user.trustLevel.name}}</dd>
            <dt>{{i18n "user.email.title"}}</dt>
            <dd title={{this.dummy.user.email}}>
              <DButton @icon="far-envelope" @label="admin.users.check_email.text" @class="btn-primary" />
            </dd>
            <dt class="groups">{{i18n "groups.title" count=this.dummy.user.displayGroups.length}}</dt>
            <dd class="groups">
              {{#each this.dummy.user.displayGroups as |group|}}
                <span><a href="#" class="group-link">{{group.name}}</a></span>
              {{/each}}
            </dd>
            <DButton @icon="exclamation-triangle" @label="user.admin_delete" @class="btn-danger" />
          </dl>
        </div>
      </section>
    </DSection>
  </StyleguideExample>
  
  */
  {
    "id": "bApU6MbN",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\".user-main .about.collapsed-info.no-background\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@class\"],[\"user-main\"]],[[\"default\"],[[[[1,\"\\n    \"],[10,\"section\"],[14,0,\"collapsed-info about no-background\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"profile-image\"],[12],[13],[1,\"\\n      \"],[10,0],[14,0,\"details\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"primary\"],[12],[1,\"\\n          \"],[1,[28,[35,2],[[30,0,[\"dummy\",\"user\"]],\"huge\"],null]],[1,\"\\n          \"],[10,\"section\"],[14,0,\"controls\"],[12],[1,\"\\n            \"],[10,\"ul\"],[12],[1,\"\\n              \"],[10,\"li\"],[12],[1,\"\\n                \"],[10,3],[14,0,\"btn btn-primary\"],[12],[1,\"\\n                  \"],[1,[28,[35,3],[\"envelope\"],null]],[1,\"\\n                  \"],[1,[28,[35,4],[\"user.private_message\"],null]],[1,\"\\n                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n              \"],[10,\"li\"],[12],[10,3],[15,6,[30,0,[\"dummy\",\"user\",\"adminPath\"]]],[14,0,\"btn\"],[12],[1,[28,[35,3],[\"wrench\"],null]],[1,[28,[35,4],[\"admin.user.show_admin_profile\"],null]],[13],[13],[1,\"\\n              \"],[10,\"li\"],[12],[10,3],[14,6,\"#\"],[14,0,\"btn\"],[12],[1,[28,[35,3],[\"angle-double-down\"],null]],[1,[28,[35,4],[\"user.expand_profile\"],null]],[13],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n\\n          \"],[10,0],[14,0,\"primary-textual\"],[12],[1,\"\\n            \"],[10,\"h1\"],[14,0,\"username\"],[12],[1,[30,0,[\"dummy\",\"user\",\"username\"]]],[1,\" \"],[1,[28,[35,3],[\"shield-alt\"],null]],[13],[1,\"\\n            \"],[10,\"h2\"],[14,0,\"full-name\"],[12],[1,[30,0,[\"dummy\",\"user\",\"name\"]]],[13],[1,\"\\n            \"],[10,\"h3\"],[12],[1,[30,0,[\"dummy\",\"user\",\"title\"]]],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,5,\"clear: both\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\".user-main .about.collapsed-info.has-background\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@class\"],[\"user-main\"]],[[\"default\"],[[[[1,\"\\n    \"],[10,\"section\"],[14,0,\"collapsed-info about has-background\"],[15,5,[30,0,[\"dummy\",\"user\",\"profileBackground\"]]],[12],[1,\"\\n      \"],[10,0],[14,0,\"profile-image\"],[12],[13],[1,\"\\n      \"],[10,0],[14,0,\"details\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"primary\"],[12],[1,\"\\n          \"],[1,[28,[35,2],[[30,0,[\"dummy\",\"user\"]],\"huge\"],null]],[1,\"\\n          \"],[10,\"section\"],[14,0,\"controls\"],[12],[1,\"\\n            \"],[10,\"ul\"],[12],[1,\"\\n              \"],[10,\"li\"],[12],[1,\"\\n                \"],[10,3],[14,0,\"btn btn-primary\"],[12],[1,\"\\n                  \"],[1,[28,[35,3],[\"envelope\"],null]],[1,\"\\n                  \"],[1,[28,[35,4],[\"user.private_message\"],null]],[1,\"\\n                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n              \"],[10,\"li\"],[12],[10,3],[15,6,[30,0,[\"dummy\",\"user\",\"adminPath\"]]],[14,0,\"btn\"],[12],[1,[28,[35,3],[\"wrench\"],null]],[1,[28,[35,4],[\"admin.user.show_admin_profile\"],null]],[13],[13],[1,\"\\n              \"],[10,\"li\"],[12],[10,3],[14,6,\"#\"],[14,0,\"btn\"],[12],[1,[28,[35,3],[\"angle-double-down\"],null]],[1,[28,[35,4],[\"user.expand_profile\"],null]],[13],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n\\n          \"],[10,0],[14,0,\"primary-textual\"],[12],[1,\"\\n            \"],[10,\"h1\"],[14,0,\"username\"],[12],[1,[30,0,[\"dummy\",\"user\",\"username\"]]],[1,\" \"],[1,[28,[35,3],[\"shield-alt\"],null]],[13],[1,\"\\n            \"],[10,\"h2\"],[14,0,\"full-name\"],[12],[1,[30,0,[\"dummy\",\"user\",\"name\"]]],[13],[1,\"\\n            \"],[10,\"h3\"],[12],[1,[30,0,[\"dummy\",\"user\",\"title\"]]],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,5,\"clear: both\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\".user-main .about.no-background\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@class\"],[\"user-main\"]],[[\"default\"],[[[[1,\"\\n    \"],[10,\"section\"],[14,0,\"about no-background\"],[12],[1,\"\\n\\n      \"],[10,0],[14,0,\"staff-counters\"],[12],[1,\"\\n        \"],[10,0],[12],[10,1],[14,0,\"helpful-flags\"],[12],[1,[30,0,[\"dummy\",\"user\",\"number_of_flags_given\"]]],[13],[1,\" \"],[1,[28,[35,4],[\"user.staff_counters.flags_given\"],null]],[13],[1,\"\\n        \"],[10,0],[12],[1,\"\\n          \"],[10,3],[14,6,\"#\"],[12],[1,\"\\n            \"],[10,1],[14,0,\"flagged-posts\"],[12],[1,[30,0,[\"dummy\",\"user\",\"number_of_flagged_posts\"]]],[13],[1,\" \"],[1,[28,[35,4],[\"user.staff_counters.flagged_posts\"],null]],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[12],[1,\"\\n          \"],[10,3],[14,6,\"#\"],[12],[1,\"\\n            \"],[10,1],[14,0,\"deleted-posts\"],[12],[1,[30,0,[\"dummy\",\"user\",\"number_of_deleted_posts\"]]],[13],[1,\" \"],[1,[28,[35,4],[\"user.staff_counters.deleted_posts\"],null]],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[12],[10,1],[14,0,\"suspensions\"],[12],[1,[30,0,[\"dummy\",\"user\",\"number_of_suspensions\"]]],[13],[1,\" \"],[1,[28,[35,4],[\"user.staff_counters.suspensions\"],null]],[13],[1,\"\\n        \"],[10,0],[12],[10,1],[14,0,\"warnings-received\"],[12],[1,[30,0,[\"dummy\",\"user\",\"warnings_received_count\"]]],[13],[1,\" \"],[1,[28,[35,4],[\"user.staff_counters.warnings_received\"],null]],[13],[1,\"\\n      \"],[13],[1,\"\\n\\n      \"],[10,0],[14,0,\"profile-image\"],[12],[13],[1,\"\\n      \"],[10,0],[14,0,\"details\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"primary\"],[12],[1,\"\\n          \"],[1,[28,[35,2],[[30,0,[\"dummy\",\"user\"]],\"huge\"],null]],[1,\"\\n          \"],[10,\"section\"],[14,0,\"controls\"],[12],[1,\"\\n            \"],[10,\"ul\"],[12],[1,\"\\n              \"],[10,\"li\"],[12],[1,\"\\n                \"],[10,3],[14,0,\"btn btn-primary\"],[12],[1,\"\\n                  \"],[1,[28,[35,3],[\"envelope\"],null]],[1,\"\\n                  \"],[1,[28,[35,4],[\"user.private_message\"],null]],[1,\"\\n                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n              \"],[10,\"li\"],[12],[10,3],[15,6,[30,0,[\"dummy\",\"user\",\"adminPath\"]]],[14,0,\"btn\"],[12],[1,[28,[35,3],[\"wrench\"],null]],[1,[28,[35,4],[\"admin.user.show_admin_profile\"],null]],[13],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n\\n          \"],[10,0],[14,0,\"primary-textual\"],[12],[1,\"\\n            \"],[10,\"h1\"],[14,0,\"username\"],[12],[1,[30,0,[\"dummy\",\"user\",\"username\"]]],[1,\" \"],[1,[28,[35,3],[\"shield-alt\"],null]],[13],[1,\"\\n            \"],[10,\"h2\"],[14,0,\"full-name\"],[12],[1,[30,0,[\"dummy\",\"user\",\"name\"]]],[13],[1,\"\\n            \"],[10,\"h3\"],[12],[1,[30,0,[\"dummy\",\"user\",\"title\"]]],[13],[1,\"\\n            \"],[10,\"h3\"],[12],[1,\"\\n              \"],[1,[28,[35,3],[\"map-marker-alt\"],null]],[1,\" \"],[1,[30,0,[\"dummy\",\"user\",\"location\"]]],[1,\"\\n              \"],[1,[28,[35,3],[\"globe\"],null]],[1,\"\\n              \"],[10,3],[15,6,[30,0,[\"dummy\",\"user\",\"website\"]]],[14,\"rel\",\"nofollow noopener noreferrer\"],[14,\"target\",\"_blank\"],[12],[1,[30,0,[\"dummy\",\"user\",\"website_name\"]]],[13],[1,\"\\n            \"],[13],[1,\"\\n\\n            \"],[10,0],[14,0,\"bio\"],[12],[1,\"\\n              \"],[10,0],[14,0,\"suspended\"],[12],[1,\"\\n                \"],[1,[28,[35,3],[\"ban\"],null]],[1,\"\\n                \"],[10,\"b\"],[12],[1,[28,[35,4],[\"user.suspended_notice\"],[[\"date\"],[[30,0,[\"dummy\",\"user\",\"suspendedTillDate\"]]]]]],[13],[10,\"br\"],[12],[13],[1,\"\\n                \"],[10,\"b\"],[12],[1,[28,[35,4],[\"user.suspended_reason\"],null]],[13],[1,\" \"],[1,[30,0,[\"dummy\",\"user\",\"suspend_reason\"]]],[1,\"\\n              \"],[13],[1,\"\\n              \"],[1,[28,[35,5],[[30,0,[\"dummy\",\"user\",\"bio_cooked\"]]],null]],[1,\"\\n            \"],[13],[1,\"\\n\\n            \"],[10,0],[14,0,\"public-user-fields\"],[12],[1,\"\\n\"],[42,[28,[37,7],[[28,[37,7],[[30,0,[\"dummy\",\"user\",\"publicUserFields\"]]],null]],null],null,[[[41,[30,1,[\"value\"]],[[[1,\"                  \"],[10,0],[15,0,[29,[\"public-user-field \",[30,1,[\"field\",\"dasherized_name\"]]]]],[12],[1,\"\\n                    \"],[10,1],[14,0,\"user-field-name\"],[12],[1,[30,1,[\"field\",\"name\"]]],[13],[1,\":\\n                    \"],[10,1],[14,0,\"user-field-value\"],[12],[1,[30,1,[\"value\"]]],[13],[1,\"\\n                  \"],[13],[1,\"\\n\"]],[]],null]],[1]],null],[1,\"            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,5,\"clear: both\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n\\n      \"],[10,0],[14,0,\"secondary\"],[12],[1,\"\\n        \"],[10,\"dl\"],[12],[1,\"\\n          \"],[10,\"dt\"],[12],[1,[28,[35,4],[\"user.created\"],null]],[13],[10,\"dd\"],[12],[1,[28,[35,9],[[30,0,[\"dummy\",\"user\",\"created_at\"]]],null]],[13],[1,\"\\n          \"],[10,\"dt\"],[12],[1,[28,[35,4],[\"user.last_posted\"],null]],[13],[10,\"dd\"],[12],[1,[28,[35,9],[[30,0,[\"dummy\",\"user\",\"last_posted_at\"]]],null]],[13],[1,\"\\n          \"],[10,\"dt\"],[12],[1,[28,[35,4],[\"user.last_seen\"],null]],[13],[10,\"dd\"],[12],[1,[28,[35,9],[[30,0,[\"dummy\",\"user\",\"last_seen_at\"]]],null]],[13],[1,\"\\n          \"],[10,\"dt\"],[12],[1,[28,[35,4],[\"views\"],null]],[13],[10,\"dd\"],[12],[1,[30,0,[\"dummy\",\"user\",\"profile_view_count\"]]],[13],[1,\"\\n          \"],[10,\"dt\"],[14,0,\"invited-by\"],[12],[1,[28,[35,4],[\"user.invited_by\"],null]],[13],[10,\"dd\"],[14,0,\"invited-by\"],[12],[10,3],[14,6,\"#\"],[12],[1,[30,0,[\"dummy\",\"user\",\"invited_by\",\"username\"]]],[13],[13],[1,\"\\n          \"],[10,\"dt\"],[14,0,\"trust-level\"],[12],[1,[28,[35,4],[\"user.trust_level\"],null]],[13],[10,\"dd\"],[14,0,\"trust-level\"],[12],[1,[30,0,[\"dummy\",\"user\",\"trustLevel\",\"name\"]]],[13],[1,\"\\n          \"],[10,\"dt\"],[12],[1,[28,[35,4],[\"user.email.title\"],null]],[13],[1,\"\\n          \"],[10,\"dd\"],[15,\"title\",[30,0,[\"dummy\",\"user\",\"email\"]]],[12],[1,\"\\n            \"],[8,[39,10],null,[[\"@icon\",\"@label\",\"@class\"],[\"far-envelope\",\"admin.users.check_email.text\",\"btn-primary\"]],null],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,\"dt\"],[14,0,\"groups\"],[12],[1,[28,[35,4],[\"groups.title\"],[[\"count\"],[[30,0,[\"dummy\",\"user\",\"displayGroups\",\"length\"]]]]]],[13],[1,\"\\n          \"],[10,\"dd\"],[14,0,\"groups\"],[12],[1,\"\\n\"],[42,[28,[37,7],[[28,[37,7],[[30,0,[\"dummy\",\"user\",\"displayGroups\"]]],null]],null],null,[[[1,\"              \"],[10,1],[12],[10,3],[14,6,\"#\"],[14,0,\"group-link\"],[12],[1,[30,2,[\"name\"]]],[13],[13],[1,\"\\n\"]],[2]],null],[1,\"          \"],[13],[1,\"\\n          \"],[8,[39,10],null,[[\"@icon\",\"@label\",\"@class\"],[\"exclamation-triangle\",\"user.admin_delete\",\"btn-danger\"]],null],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[8,[39,0],null,[[\"@title\"],[\".user-main .about.has-background\"]],[[\"default\"],[[[[1,\"\\n  \"],[8,[39,1],null,[[\"@class\"],[\"user-main\"]],[[\"default\"],[[[[1,\"\\n    \"],[10,\"section\"],[14,0,\"about has-background\"],[15,5,[30,0,[\"dummy\",\"user\",\"profileBackground\"]]],[12],[1,\"\\n      \"],[10,0],[14,0,\"staff-counters\"],[12],[1,\"\\n        \"],[10,0],[12],[10,1],[14,0,\"helpful-flags\"],[12],[1,[30,0,[\"dummy\",\"user\",\"number_of_flags_given\"]]],[13],[1,\" \"],[1,[28,[35,4],[\"user.staff_counters.flags_given\"],null]],[13],[1,\"\\n        \"],[10,0],[12],[1,\"\\n          \"],[10,3],[14,6,\"#\"],[12],[1,\"\\n            \"],[10,1],[14,0,\"flagged-posts\"],[12],[1,[30,0,[\"dummy\",\"user\",\"number_of_flagged_posts\"]]],[13],[1,\" \"],[1,[28,[35,4],[\"user.staff_counters.flagged_posts\"],null]],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[12],[1,\"\\n          \"],[10,3],[14,6,\"#\"],[12],[1,\"\\n            \"],[10,1],[14,0,\"deleted-posts\"],[12],[1,[30,0,[\"dummy\",\"user\",\"number_of_deleted_posts\"]]],[13],[1,\" \"],[1,[28,[35,4],[\"user.staff_counters.deleted_posts\"],null]],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[12],[10,1],[14,0,\"suspensions\"],[12],[1,[30,0,[\"dummy\",\"user\",\"number_of_suspensions\"]]],[13],[1,\" \"],[1,[28,[35,4],[\"user.staff_counters.suspensions\"],null]],[13],[1,\"\\n        \"],[10,0],[12],[10,1],[14,0,\"warnings-received\"],[12],[1,[30,0,[\"dummy\",\"user\",\"warnings_received_count\"]]],[13],[1,\" \"],[1,[28,[35,4],[\"user.staff_counters.warnings_received\"],null]],[13],[1,\"\\n      \"],[13],[1,\"\\n\\n      \"],[10,0],[14,0,\"profile-image\"],[12],[13],[1,\"\\n      \"],[10,0],[14,0,\"details\"],[12],[1,\"\\n        \"],[10,0],[14,0,\"primary\"],[12],[1,\"\\n          \"],[1,[28,[35,2],[[30,0,[\"dummy\",\"user\"]],\"huge\"],null]],[1,\"\\n          \"],[10,\"section\"],[14,0,\"controls\"],[12],[1,\"\\n            \"],[10,\"ul\"],[12],[1,\"\\n              \"],[10,\"li\"],[12],[1,\"\\n                \"],[10,3],[14,0,\"btn btn-primary\"],[12],[1,\"\\n                  \"],[1,[28,[35,3],[\"envelope\"],null]],[1,\"\\n                  \"],[1,[28,[35,4],[\"user.private_message\"],null]],[1,\"\\n                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n              \"],[10,\"li\"],[12],[10,3],[15,6,[30,0,[\"dummy\",\"user\",\"adminPath\"]]],[14,0,\"btn\"],[12],[1,[28,[35,3],[\"wrench\"],null]],[1,[28,[35,4],[\"admin.user.show_admin_profile\"],null]],[13],[13],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n\\n          \"],[10,0],[14,0,\"primary-textual\"],[12],[1,\"\\n            \"],[10,\"h1\"],[14,0,\"username\"],[12],[1,[30,0,[\"dummy\",\"user\",\"username\"]]],[1,\" \"],[1,[28,[35,3],[\"shield-alt\"],null]],[13],[1,\"\\n            \"],[10,\"h2\"],[14,0,\"full-name\"],[12],[1,[30,0,[\"dummy\",\"user\",\"name\"]]],[13],[1,\"\\n            \"],[10,\"h3\"],[12],[1,[30,0,[\"dummy\",\"user\",\"title\"]]],[13],[1,\"\\n            \"],[10,\"h3\"],[12],[1,\"\\n              \"],[1,[28,[35,3],[\"map-marker-alt\"],null]],[1,\" \"],[1,[30,0,[\"dummy\",\"user\",\"location\"]]],[1,\"\\n              \"],[1,[28,[35,3],[\"globe\"],null]],[1,\"\\n              \"],[10,3],[15,6,[30,0,[\"dummy\",\"user\",\"website\"]]],[14,\"rel\",\"nofollow noopener noreferrer\"],[14,\"target\",\"_blank\"],[12],[1,[30,0,[\"dummy\",\"user\",\"website_name\"]]],[13],[1,\"\\n            \"],[13],[1,\"\\n\\n            \"],[10,0],[14,0,\"bio\"],[12],[1,\"\\n              \"],[10,0],[14,0,\"suspended\"],[12],[1,\"\\n                \"],[1,[28,[35,3],[\"ban\"],null]],[1,\"\\n                \"],[10,\"b\"],[12],[1,[28,[35,4],[\"user.suspended_notice\"],[[\"date\"],[[30,0,[\"dummy\",\"user\",\"suspendedTillDate\"]]]]]],[13],[10,\"br\"],[12],[13],[1,\"\\n                \"],[10,\"b\"],[12],[1,[28,[35,4],[\"user.suspended_reason\"],null]],[13],[1,\" \"],[1,[30,0,[\"dummy\",\"user\",\"suspend_reason\"]]],[1,\"\\n              \"],[13],[1,\"\\n              \"],[1,[28,[35,5],[[30,0,[\"dummy\",\"user\",\"bio_cooked\"]]],null]],[1,\"\\n            \"],[13],[1,\"\\n\\n            \"],[10,0],[14,0,\"public-user-fields\"],[12],[1,\"\\n\"],[42,[28,[37,7],[[28,[37,7],[[30,0,[\"dummy\",\"user\",\"publicUserFields\"]]],null]],null],null,[[[41,[30,3,[\"value\"]],[[[1,\"                  \"],[10,0],[15,0,[29,[\"public-user-field \",[30,3,[\"field\",\"dasherized_name\"]]]]],[12],[1,\"\\n                    \"],[10,1],[14,0,\"user-field-name\"],[12],[1,[30,3,[\"field\",\"name\"]]],[13],[1,\":\\n                    \"],[10,1],[14,0,\"user-field-value\"],[12],[1,[30,3,[\"value\"]]],[13],[1,\"\\n                  \"],[13],[1,\"\\n\"]],[]],null]],[3]],null],[1,\"            \"],[13],[1,\"\\n\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,5,\"clear: both\"],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n\\n      \"],[10,0],[14,0,\"secondary\"],[12],[1,\"\\n        \"],[10,\"dl\"],[12],[1,\"\\n          \"],[10,\"dt\"],[12],[1,[28,[35,4],[\"user.created\"],null]],[13],[10,\"dd\"],[12],[1,[28,[35,9],[[30,0,[\"dummy\",\"user\",\"created_at\"]]],null]],[13],[1,\"\\n          \"],[10,\"dt\"],[12],[1,[28,[35,4],[\"user.last_posted\"],null]],[13],[10,\"dd\"],[12],[1,[28,[35,9],[[30,0,[\"dummy\",\"user\",\"last_posted_at\"]]],null]],[13],[1,\"\\n          \"],[10,\"dt\"],[12],[1,[28,[35,4],[\"user.last_seen\"],null]],[13],[10,\"dd\"],[12],[1,[28,[35,9],[[30,0,[\"dummy\",\"user\",\"last_seen_at\"]]],null]],[13],[1,\"\\n          \"],[10,\"dt\"],[12],[1,[28,[35,4],[\"views\"],null]],[13],[10,\"dd\"],[12],[1,[30,0,[\"dummy\",\"user\",\"profile_view_count\"]]],[13],[1,\"\\n          \"],[10,\"dt\"],[14,0,\"invited-by\"],[12],[1,[28,[35,4],[\"user.invited_by\"],null]],[13],[10,\"dd\"],[14,0,\"invited-by\"],[12],[10,3],[14,6,\"#\"],[12],[1,[30,0,[\"dummy\",\"user\",\"invited_by\",\"username\"]]],[13],[13],[1,\"\\n          \"],[10,\"dt\"],[14,0,\"trust-level\"],[12],[1,[28,[35,4],[\"user.trust_level\"],null]],[13],[10,\"dd\"],[14,0,\"trust-level\"],[12],[1,[30,0,[\"dummy\",\"user\",\"trustLevel\",\"name\"]]],[13],[1,\"\\n          \"],[10,\"dt\"],[12],[1,[28,[35,4],[\"user.email.title\"],null]],[13],[1,\"\\n          \"],[10,\"dd\"],[15,\"title\",[30,0,[\"dummy\",\"user\",\"email\"]]],[12],[1,\"\\n            \"],[8,[39,10],null,[[\"@icon\",\"@label\",\"@class\"],[\"far-envelope\",\"admin.users.check_email.text\",\"btn-primary\"]],null],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,\"dt\"],[14,0,\"groups\"],[12],[1,[28,[35,4],[\"groups.title\"],[[\"count\"],[[30,0,[\"dummy\",\"user\",\"displayGroups\",\"length\"]]]]]],[13],[1,\"\\n          \"],[10,\"dd\"],[14,0,\"groups\"],[12],[1,\"\\n\"],[42,[28,[37,7],[[28,[37,7],[[30,0,[\"dummy\",\"user\",\"displayGroups\"]]],null]],null],null,[[[1,\"              \"],[10,1],[12],[10,3],[14,6,\"#\"],[14,0,\"group-link\"],[12],[1,[30,4,[\"name\"]]],[13],[13],[1,\"\\n\"]],[4]],null],[1,\"          \"],[13],[1,\"\\n          \"],[8,[39,10],null,[[\"@icon\",\"@label\",\"@class\"],[\"exclamation-triangle\",\"user.admin_delete\",\"btn-danger\"]],null],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"]],[]]]]],[1,\"\\n\"]],[]]]]],[1,\"\\n\"]],[\"uf\",\"group\",\"uf\",\"group\"],false,[\"styleguide-example\",\"d-section\",\"bound-avatar\",\"d-icon\",\"i18n\",\"html-safe\",\"each\",\"-track-array\",\"if\",\"bound-date\",\"d-button\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/templates/styleguide/organisms/user-about.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/styleguide/discourse/templates/styleguide/show", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <StyleguideSection @section={{this.section}}>
    {{#if this.note}}
      <div class="styleguide-note">
        {{component (concat "notes/" this.note)}}
      </div>
    {{/if}}
  
    {{outlet}}
  </StyleguideSection>
  
  */
  {
    "id": "TsiDzH6M",
    "block": "[[[8,[39,0],null,[[\"@section\"],[[30,0,[\"section\"]]]],[[\"default\"],[[[[1,\"\\n\"],[41,[30,0,[\"note\"]],[[[1,\"    \"],[10,0],[14,0,\"styleguide-note\"],[12],[1,\"\\n      \"],[46,[28,[37,3],[\"notes/\",[30,0,[\"note\"]]],null],null,null,null],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]],null],[1,\"\\n  \"],[46,[28,[37,4],null,null],null,null,null],[1,\"\\n\"]],[]]]]],[1,\"\\n\"]],[],false,[\"styleguide-section\",\"if\",\"component\",\"concat\",\"-outlet\"]]",
    "moduleName": "discourse/plugins/styleguide/discourse/templates/styleguide/show.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});//# sourceMappingURL=styleguide.map

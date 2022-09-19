define("discourse/plugins/discourse-code-review/discourse/activity-route-map", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f

  var _default = {
    resource: "user.userActivity",

    map() {
      this.route("approval-given");
      this.route("approval-pending");
    }

  };
  _exports.default = _default;
});
define("discourse/plugins/discourse-code-review/discourse/code-review-route-map", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f

  var _default = {
    resource: "admin.adminPlugins",
    path: "/plugins",

    map() {
      this.route("code-review");
    }

  };
  _exports.default = _default;
});
define("discourse/plugins/discourse-code-review/discourse/connectors/user-preferences-notifications/notify-code-review", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f

  var _default = {
    setupComponent(args, component) {
      const user = args.model;
      this.set("notifyOnCodeReviews", user.custom_fields.notify_on_code_reviews !== false);
      component.addObserver("notifyOnCodeReviews", () => {
        user.set("custom_fields.notify_on_code_reviews", component.get("notifyOnCodeReviews"));
      });
    },

    shouldRender(args, component) {
      return component.currentUser && component.currentUser.admin;
    }

  };
  _exports.default = _default;
});
define("discourse/plugins/discourse-code-review/discourse/controllers/admin-plugins-code-review", ["exports", "discourse/lib/ajax", "rsvp", "discourse-common/utils/decorators", "discourse/lib/ajax-error", "@ember/controller", "@ember/object", "@ember/array"], function (_exports, _ajax, _rsvp, _decorators, _ajaxError, _controller, _object, _array) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _obj;

  0; //eaimeta@70e063a35619d71f0,"discourse/lib/ajax",0,"rsvp",0,"discourse-common/utils/decorators",0,"discourse/lib/ajax-error",0,"@ember/controller",0,"@ember/object",0,"@ember/array"eaimeta@70e063a35619d71f

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  const prefix = "/admin/plugins/code-review";

  var _default = _controller.default.extend((_dec = (0, _decorators.default)("loadError"), (_obj = {
    organizations: null,
    loading: true,

    async loadOrganizations() {
      try {
        let orgNames = await (0, _ajax.ajax)(`${prefix}/organizations.json`);
        this.set("organizations", (0, _array.A)([]));

        for (const orgName of orgNames) {
          let organization = _object.default.create({
            name: orgName,
            repos: (0, _array.A)([])
          });

          this.organizations.pushObject(organization);
        }

        await _rsvp.Promise.all(this.organizations.map(this.loadOrganizationRepos.bind(this)));
      } catch (error) {
        this.set("organizationReposLoadFailed", true);
      } finally {
        this.set("loading", false);
      }
    },

    async loadOrganizationRepos(organization) {
      try {
        let repoNames = await (0, _ajax.ajax)(`${prefix}/organizations/${organization.name}/repos.json`);

        for (const repoName of repoNames) {
          let repo = _object.default.create({
            name: repoName,
            hasConfiguredWebhook: null,
            receivedWebhookState: false
          });

          organization.repos.pushObject(repo);
        } // No point continuing doing requests for the webhooks if there
        // is an error with the first request, the token permissions must be fixed first


        await this.hasConfiguredWebhook(organization.name, organization.repos[0]);
        await _rsvp.Promise.all(organization.repos.map(repo => this.hasConfiguredWebhook(organization.name, repo)));
      } catch (response) {
        this.set("loadError", true);
        (0, _ajaxError.popupAjaxError)(response);
      } finally {
        this.set("loading", false);
      }
    },

    async hasConfiguredWebhook(orgName, repo) {
      if (repo.receivedWebhookState) {
        return true;
      }

      let response = await (0, _ajax.ajax)(`${prefix}/organizations/${orgName}/repos/${repo.name}/has-configured-webhook.json`);
      repo.set("receivedWebhookState", true);
      repo.set("hasConfiguredWebhook", response["has_configured_webhook"]);
    },

    configureWebhooksTitle(loadError) {
      if (!loadError) {
        return "";
      }

      return "code_review.webhooks_load_error";
    },

    actions: {
      async configureWebhook(organization, repo) {
        if (repo.hasConfiguredWebhook === false) {
          let response = await (0, _ajax.ajax)(`${prefix}/organizations/${organization.name}/repos/${repo.name}/configure-webhook.json`, {
            type: "POST"
          });
          repo.set("hasConfiguredWebhook", response["has_configured_webhook"]);
        }
      },

      async configureWebhooks() {
        for (const organization of this.organizations) {
          for (const repo of organization.repos) {
            if (repo.hasConfiguredWebhook === false) {
              let response = await (0, _ajax.ajax)(`${prefix}/organizations/${organization.name}/repos/${repo.name}/configure-webhook.json`, {
                type: "POST"
              });
              repo.set("hasConfiguredWebhook", response["has_configured_webhook"]);
            }
          }
        }
      }

    }
  }, (_applyDecoratedDescriptor(_obj, "configureWebhooksTitle", [_dec], Object.getOwnPropertyDescriptor(_obj, "configureWebhooksTitle"), _obj)), _obj)));

  _exports.default = _default;
});
define("discourse/plugins/discourse-code-review/discourse/initializers/init-code-review", ["exports", "discourse/lib/plugin-api", "discourse/lib/ajax", "discourse/lib/ajax-error", "discourse/lib/url", "discourse/models/login-method", "@ember/object", "I18n", "@ember/template"], function (_exports, _pluginApi, _ajax, _ajaxError, _url, _loginMethod, _object, _I18n, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"discourse/lib/plugin-api",0,"discourse/lib/ajax",0,"discourse/lib/ajax-error",0,"discourse/lib/url",0,"discourse/models/login-method",0,"@ember/object",0,"I18n",0,"@ember/template"eaimeta@70e063a35619d71f

  const PLUGIN_ID = "discourse-code-review";

  async function actOnCommit(topic, action) {
    try {
      let result = await (0, _ajax.ajax)(`/code-review/${action}.json`, {
        type: "POST",
        data: {
          topic_id: topic.id
        }
      });

      if (result.next_topic_url) {
        _url.default.routeTo(result.next_topic_url);
      } else {
        _url.default.routeTo("/");
      }
    } catch (error) {
      (0, _ajaxError.popupAjaxError)(error);
    }
  }

  function initialize(api) {
    api.addPostSmallActionIcon("followup", "far-clock");
    api.addPostSmallActionIcon("approved", "thumbs-up");
    api.addPostSmallActionIcon("followed_up", "backward");
    api.addPostSmallActionIcon("pr_merge_info", "info-circle"); // we need to allow unconditional association even with 2fa
    // core hides this section if 2fa is on for a user
    //
    // note there are slightly cleaner ways of doing this but we would need
    // to amend core for the plugin which is not feeling right

    api.modifyClass("controller:preferences/account", {
      pluginId: PLUGIN_ID,
      canUpdateAssociatedAccounts: (0, _object.computed)("authProviders", function () {
        return (0, _loginMethod.findAll)().length > 0;
      })
    });
    api.modifyClass("controller:preferences/notifications", {
      pluginId: PLUGIN_ID,

      init() {
        this._super(...arguments);

        this.saveAttrNames.push("custom_fields");
      }

    });

    function allowSkip(currentUser, topic, siteSettings) {
      return allowApprove(currentUser, topic, siteSettings);
    }

    function allowApprove(currentUser, topic, siteSettings) {
      if (!currentUser) {
        return false;
      }

      const allowSelfApprove = siteSettings.code_review_allow_self_approval;
      const approvedTag = siteSettings.code_review_approved_tag;
      const pendingTag = siteSettings.code_review_pending_tag;
      const followupTag = siteSettings.code_review_followup_tag;
      const tags = topic.tags || [];
      return (allowSelfApprove || currentUser.id !== topic.user_id) && !tags.includes(approvedTag) && (tags.includes(pendingTag) || tags.includes(followupTag));
    }

    function allowFollowupButton(topic, siteSettings) {
      if (!siteSettings.code_review_allow_manual_followup) {
        return false;
      }

      const approvedTag = siteSettings.code_review_approved_tag;
      const pendingTag = siteSettings.code_review_pending_tag;
      const followupTag = siteSettings.code_review_followup_tag;
      const tags = topic.tags || [];
      return !tags.includes(followupTag) && (tags.includes(pendingTag) || tags.includes(approvedTag));
    }

    function allowFollowedUpButton(currentUser, topic, siteSettings) {
      const followupTag = siteSettings.code_review_followup_tag;
      const tags = topic.tags || [];
      return currentUser.id === topic.user_id && tags.includes(followupTag);
    }

    api.registerTopicFooterButton({
      id: "approve",
      icon: "thumbs-up",
      priority: 260,
      label: "code_review.approve.label",
      title: "code_review.approve.title",

      action() {
        actOnCommit(this.topic, "approve");
      },

      dropdown() {
        return this.site.mobileView;
      },

      classNames: ["approve"],
      dependentKeys: ["topic.tags"],

      displayed() {
        return this.get("currentUser.can_review_code") && allowApprove(this.currentUser, this.topic, this.siteSettings);
      }

    });
    api.registerTopicFooterButton({
      id: "skip",
      icon: "angle-double-right",
      priority: 250,
      label: "code_review.skip.label",
      title: "code_review.skip.title",

      action() {
        actOnCommit(this.topic, "skip");
      },

      dropdown() {
        return this.site.mobileView;
      },

      classNames: ["skip"],
      dependentKeys: ["topic.tags"],

      displayed() {
        return this.get("currentUser.can_review_code") && allowSkip(this.currentUser, this.topic, this.siteSettings);
      }

    });
    api.registerTopicFooterButton({
      id: "followup",
      icon: "far-clock",
      priority: 240,
      label: "code_review.followup.label",
      title: "code_review.followup.title",

      action() {
        actOnCommit(this.topic, "followup");
      },

      dropdown() {
        return this.site.mobileView;
      },

      classNames: ["followup"],
      dependentKeys: ["topic.tags"],

      displayed() {
        return this.get("currentUser.can_review_code") && allowFollowupButton(this.topic, this.siteSettings);
      }

    });
    api.registerTopicFooterButton({
      id: "followed_up",
      icon: "history",
      priority: 240,
      label: "code_review.followed_up.label",
      title: "code_review.followed_up.title",

      action() {
        actOnCommit(this.topic, "followed_up");
      },

      dropdown() {
        return this.site.mobileView;
      },

      classNames: ["followup"],
      dependentKeys: ["topic.tags"],

      displayed() {
        return this.get("currentUser.can_review_code") && allowFollowedUpButton(this.currentUser, this.topic, this.siteSettings);
      }

    });
    api.replaceIcon("notification.code_review_commit_approved", "check");

    if (api.registerNotificationTypeRenderer) {
      api.registerNotificationTypeRenderer("code_review_commit_approved", NotificationTypeBase => {
        return class extends NotificationTypeBase {
          get linkTitle() {
            return _I18n.default.t("notifications.code_review.commit_approved.title");
          }

          get icon() {
            return "check";
          }

          get linkHref() {
            return super.linkHref || (0, _url.userPath)(`${this.currentUser.username}/activity/approval-given`);
          }

          get label() {
            const numApprovedCommits = this.notification.data.num_approved_commits;

            if (numApprovedCommits > 1) {
              return _I18n.default.t("notifications.code_review.commit_approved.multiple", {
                count: numApprovedCommits
              });
            } else {
              return (0, _template.htmlSafe)(_I18n.default.t("notifications.code_review.commit_approved.single", {
                topicTitle: this.notification.fancy_title
              }));
            }
          }

          get description() {
            return null;
          }

        };
      });
    }
  }

  var _default = {
    name: "discourse-code-review",

    initialize() {
      (0, _pluginApi.withPluginApi)("0.8.28", initialize);
    }

  };
  _exports.default = _default;
});
define("discourse/plugins/discourse-code-review/discourse/routes/admin-plugins-code-review", ["exports", "discourse/routes/discourse"], function (_exports, _discourse) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"discourse/routes/discourse"eaimeta@70e063a35619d71f

  var _default = _discourse.default.extend({
    controllerName: "admin-plugins-code-review",

    activate() {
      this.controllerFor(this.controllerName).loadOrganizations();
    }

  });

  _exports.default = _default;
});
define("discourse/plugins/discourse-code-review/discourse/routes/user-activity-approval-given", ["exports", "discourse/routes/user-topic-list", "I18n"], function (_exports, _userTopicList, _I18n) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"discourse/routes/user-topic-list",0,"I18n"eaimeta@70e063a35619d71f

  var _default = _userTopicList.default.extend({
    model() {
      const username = this.modelFor("user").username_lower;
      return this.store.findFiltered("topicList", {
        filter: `topics/approval-given/${username}`
      }).then(model => {
        // andrei: we agreed that this is an anti pattern,
        // it's better to avoid mutating a rest model like this
        // this place we'll be refactored later
        // see https://github.com/discourse/discourse/pull/14313#discussion_r708784704
        model.set("emptyState", this.emptyState());
        return model;
      });
    },

    emptyState() {
      const title = _I18n.default.t("code_review.approval_given_empty_state_title");

      const body = "";
      return {
        title,
        body
      };
    }

  });

  _exports.default = _default;
});
define("discourse/plugins/discourse-code-review/discourse/routes/user-activity-approval-pending", ["exports", "discourse/routes/user-topic-list", "I18n"], function (_exports, _userTopicList, _I18n) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"discourse/routes/user-topic-list",0,"I18n"eaimeta@70e063a35619d71f

  var _default = _userTopicList.default.extend({
    model() {
      const username = this.modelFor("user").username_lower;
      return this.store.findFiltered("topicList", {
        filter: `topics/approval-pending/${username}`
      }).then(model => {
        // andrei: we agreed that this is an anti pattern,
        // it's better to avoid mutating a rest model like this
        // this place we'll be refactored later
        // see https://github.com/discourse/discourse/pull/14313#discussion_r708784704
        model.set("emptyState", this.emptyState());
        return model;
      });
    },

    emptyState() {
      const title = _I18n.default.t("code_review.approval_pending_empty_state_title");

      const body = "";
      return {
        title,
        body
      };
    }

  });

  _exports.default = _default;
});
define("discourse/plugins/discourse-code-review/discourse/templates/admin/plugins-code-review", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <h1>{{i18n "code_review.github_webhooks"}}</h1>
  
  {{#if this.organizations}}
    <div class="alert alert-warning">
      {{html-safe (i18n "code_review.configure_webhooks_warning")}}
    </div>
  
    {{d-button
      action=(action "configureWebhooks")
      label="code_review.configure_webhooks"
      class="code-review-configure-webhooks-button"
      disabled=loadError
      title=configureWebhooksTitle
    }}
  {{else}}
    {{html-safe (i18n "code_review.no_organizations_configured")}}
  {{/if}}
  
  {{#conditional-loading-spinner condition=loading}}
    <div class="code-review-webhook-tree">
      {{#each this.organizations as |organization|}}
        <div class="code-review-webhook-org">
          <h2>{{organization.name}}</h2>
  
          {{#each organization.repos as |repo|}}
            <div class="code-review-webhook-repo">
              <h3>{{repo.name}}</h3>
  
              {{#if repo.receivedWebhookState}}
                {{#if repo.hasConfiguredWebhook}}
                  <div class="code-review-webhook-configured">
                    {{d-icon "check"}}
                  </div>
                {{else}}
                  <div class="code-review-webhook-not-configured">
                    {{d-icon "times"}}
                    {{d-button
                      action=(action "configureWebhook" organization repo)
                      label="code_review.configure_webhook"
                    }}
                  </div>
                {{/if}}
              {{/if}}
            </div>
          {{/each}}
        </div>
      {{/each}}
    </div>
  {{/conditional-loading-spinner}}
  
  */
  {
    "id": "pwI2lcZw",
    "block": "[[[10,\"h1\"],[12],[1,[28,[35,0],[\"code_review.github_webhooks\"],null]],[13],[1,\"\\n\\n\"],[41,[30,0,[\"organizations\"]],[[[1,\"  \"],[10,0],[14,0,\"alert alert-warning\"],[12],[1,\"\\n    \"],[1,[28,[35,2],[[28,[37,0],[\"code_review.configure_webhooks_warning\"],null]],null]],[1,\"\\n  \"],[13],[1,\"\\n\\n  \"],[1,[28,[35,3],null,[[\"action\",\"label\",\"class\",\"disabled\",\"title\"],[[28,[37,4],[[30,0],\"configureWebhooks\"],null],\"code_review.configure_webhooks\",\"code-review-configure-webhooks-button\",[33,5],[33,6]]]]],[1,\"\\n\"]],[]],[[[1,\"  \"],[1,[28,[35,2],[[28,[37,0],[\"code_review.no_organizations_configured\"],null]],null]],[1,\"\\n\"]],[]]],[1,\"\\n\"],[6,[39,7],null,[[\"condition\"],[[33,8]]],[[\"default\"],[[[[1,\"  \"],[10,0],[14,0,\"code-review-webhook-tree\"],[12],[1,\"\\n\"],[42,[28,[37,10],[[28,[37,10],[[30,0,[\"organizations\"]]],null]],null],null,[[[1,\"      \"],[10,0],[14,0,\"code-review-webhook-org\"],[12],[1,\"\\n        \"],[10,\"h2\"],[12],[1,[30,1,[\"name\"]]],[13],[1,\"\\n\\n\"],[42,[28,[37,10],[[28,[37,10],[[30,1,[\"repos\"]]],null]],null],null,[[[1,\"          \"],[10,0],[14,0,\"code-review-webhook-repo\"],[12],[1,\"\\n            \"],[10,\"h3\"],[12],[1,[30,2,[\"name\"]]],[13],[1,\"\\n\\n\"],[41,[30,2,[\"receivedWebhookState\"]],[[[41,[30,2,[\"hasConfiguredWebhook\"]],[[[1,\"                \"],[10,0],[14,0,\"code-review-webhook-configured\"],[12],[1,\"\\n                  \"],[1,[28,[35,11],[\"check\"],null]],[1,\"\\n                \"],[13],[1,\"\\n\"]],[]],[[[1,\"                \"],[10,0],[14,0,\"code-review-webhook-not-configured\"],[12],[1,\"\\n                  \"],[1,[28,[35,11],[\"times\"],null]],[1,\"\\n                  \"],[1,[28,[35,3],null,[[\"action\",\"label\"],[[28,[37,4],[[30,0],\"configureWebhook\",[30,1],[30,2]],null],\"code_review.configure_webhook\"]]]],[1,\"\\n                \"],[13],[1,\"\\n\"]],[]]]],[]],null],[1,\"          \"],[13],[1,\"\\n\"]],[2]],null],[1,\"      \"],[13],[1,\"\\n\"]],[1]],null],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]]],[\"organization\",\"repo\"],false,[\"i18n\",\"if\",\"html-safe\",\"d-button\",\"action\",\"loadError\",\"configureWebhooksTitle\",\"conditional-loading-spinner\",\"loading\",\"each\",\"-track-array\",\"d-icon\"]]",
    "moduleName": "discourse/plugins/discourse-code-review/discourse/templates/admin/plugins-code-review.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/discourse-code-review/discourse/templates/connectors/user-activity-bottom/approval-given-button", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <li>
    {{#link-to "userActivity.approval-given"}}
      {{i18n "code_review.approval_given"}}
    {{/link-to}}
  </li>
  
  */
  {
    "id": "x6AaeN5P",
    "block": "[[[10,\"li\"],[12],[1,\"\\n\"],[6,[39,0],null,[[\"route\"],[\"userActivity.approval-given\"]],[[\"default\"],[[[[1,\"    \"],[1,[28,[35,1],[\"code_review.approval_given\"],null]],[1,\"\\n\"]],[]]]]],[13],[1,\"\\n\"]],[],false,[\"link-to\",\"i18n\"]]",
    "moduleName": "discourse/plugins/discourse-code-review/discourse/templates/connectors/user-activity-bottom/approval-given-button.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/discourse-code-review/discourse/templates/connectors/user-activity-bottom/approval-pending-button", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <li>
    {{#link-to "userActivity.approval-pending"}}
      {{i18n "code_review.approval_pending"}}
    {{/link-to}}
  </li>
  
  */
  {
    "id": "KfVvZJXm",
    "block": "[[[10,\"li\"],[12],[1,\"\\n\"],[6,[39,0],null,[[\"route\"],[\"userActivity.approval-pending\"]],[[\"default\"],[[[[1,\"    \"],[1,[28,[35,1],[\"code_review.approval_pending\"],null]],[1,\"\\n\"]],[]]]]],[13],[1,\"\\n\"]],[],false,[\"link-to\",\"i18n\"]]",
    "moduleName": "discourse/plugins/discourse-code-review/discourse/templates/connectors/user-activity-bottom/approval-pending-button.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/discourse-code-review/discourse/templates/connectors/user-preferences-notifications/notify-code-review", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="control-group">
    <label class="control-label">{{i18n "code_review.title"}}</label>
    <div class="controls">
      {{preference-checkbox
        labelKey="code_review.notify_on_approval"
        checked=notifyOnCodeReviews
      }}
    </div>
  </div>
  
  */
  {
    "id": "od9RJ8q2",
    "block": "[[[10,0],[14,0,\"control-group\"],[12],[1,\"\\n  \"],[10,\"label\"],[14,0,\"control-label\"],[12],[1,[28,[35,0],[\"code_review.title\"],null]],[13],[1,\"\\n  \"],[10,0],[14,0,\"controls\"],[12],[1,\"\\n    \"],[1,[28,[35,1],null,[[\"labelKey\",\"checked\"],[\"code_review.notify_on_approval\",[33,2]]]]],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[\"i18n\",\"preference-checkbox\",\"notifyOnCodeReviews\"]]",
    "moduleName": "discourse/plugins/discourse-code-review/discourse/templates/connectors/user-preferences-notifications/notify-code-review.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/discourse-code-review/discourse/widgets/code-review-commit-approved-notification-item", ["discourse/widgets/widget", "discourse/widgets/default-notification-item", "discourse/lib/utilities", "discourse/lib/url", "I18n"], function (_widget, _defaultNotificationItem, _utilities, _url, _I18n) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"discourse/widgets/widget",0,"discourse/widgets/default-notification-item",0,"discourse/lib/utilities",0,"discourse/lib/url",0,"I18n"eaimeta@70e063a35619d71f

  (0, _widget.createWidgetFrom)(_defaultNotificationItem.DefaultNotificationItem, "code-review-commit-approved-notification-item", {
    notificationTitle() {
      return _I18n.default.t("notifications.code_review.commit_approved.title");
    },

    text(notificationName, data) {
      const numApprovedCommits = data.num_approved_commits;

      if (numApprovedCommits === 1) {
        return _I18n.default.t("notifications.code_review.commit_approved.single", {
          topicTitle: this.attrs.fancy_title
        });
      } else {
        return _I18n.default.t("notifications.code_review.commit_approved.multiple", {
          count: numApprovedCommits
        });
      }
    },

    url() {
      const topicId = this.attrs.topic_id;

      if (topicId) {
        return (0, _utilities.postUrl)(this.attrs.slug, topicId, 1);
      } else {
        return (0, _url.userPath)(`${this.currentUser.username}/activity/approval-given`);
      }
    }

  });
});//# sourceMappingURL=discourse-code-review.map

define("discourse/plugins/discourse-narrative-bot/initializers/new-user-narrative", ["exports", "discourse/lib/ajax", "discourse-common/lib/debounce", "discourse/lib/offset-calculator", "discourse/lib/is-element-in-viewport", "discourse/lib/plugin-api"], function (_exports, _ajax, _debounce, _offsetCalculator, _isElementInViewport, _pluginApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"discourse/lib/ajax",0,"discourse-common/lib/debounce",0,"discourse/lib/offset-calculator",0,"discourse/lib/is-element-in-viewport",0,"discourse/lib/plugin-api"eaimeta@70e063a35619d71f

  const PLUGIN_ID = "new-user-narrative";

  function initialize(api) {
    const messageBus = api.container.lookup("service:message-bus");
    const currentUser = api.getCurrentUser();
    const appEvents = api.container.lookup("service:app-events");
    api.modifyClass("component:site-header", {
      pluginId: PLUGIN_ID,

      didInsertElement() {
        this._super(...arguments);

        this.dispatch("header:search-context-trigger", "header");
      }

    });
    api.modifyClass("controller:topic", {
      pluginId: PLUGIN_ID,

      _modifyBookmark(bookmark, post) {
        // if we are talking to discobot then any bookmarks should just
        // be created without reminder options, to streamline the new user
        // narrative.
        const discobotUserId = -2;

        if (post && post.user_id === discobotUserId && !post.bookmarked) {
          return (0, _ajax.ajax)("/bookmarks", {
            type: "POST",
            data: {
              post_id: post.id
            }
          }).then(response => {
            post.setProperties({
              "topic.bookmarked": true,
              bookmarked: true,
              bookmark_id: response.id
            });
            post.appEvents.trigger("post-stream:refresh", {
              id: this.id
            });
          });
        }

        return this._super(bookmark, post);
      },

      subscribe() {
        this._super(...arguments);

        this.messageBus.subscribe(`/topic/${this.model.id}`, data => {
          const topic = this.model; // scroll only for discobot (-2 is discobot id)

          if (topic.isPrivateMessage && this.currentUser && this.currentUser.id !== data.user_id && data.user_id === -2 && data.type === "created") {
            const postNumber = data.post_number;
            const notInPostStream = topic.get("highest_post_number") <= postNumber;
            const postNumberDifference = postNumber - topic.currentPost;

            if (notInPostStream && postNumberDifference > 0 && postNumberDifference < 7) {
              this._scrollToDiscobotPost(data.post_number);
            }
          }
        }); // No need to unsubscribe, core unsubscribes /topic/* routes
      },

      _scrollToDiscobotPost(postNumber) {
        (0, _debounce.default)(this, function () {
          const post = document.querySelector(`.topic-post article#post_${postNumber}`);

          if (!post || (0, _isElementInViewport.default)(post)) {
            return;
          }

          const viewportOffset = post.getBoundingClientRect();
          window.scrollTo({
            top: window.scrollY + viewportOffset.top - (0, _offsetCalculator.headerOffset)(),
            behavior: "smooth"
          });
        }, postNumber, 500);
      }

    });
    api.attachWidgetAction("header", "headerSearchContextTrigger", function () {
      if (this.site.mobileView) {
        this.state.skipSearchContext = false;
      } else {
        this.state.contextEnabled = true;
        this.state.searchContextType = "topic";
      }
    });

    if (messageBus && currentUser) {
      messageBus.subscribe(`/new_user_narrative/tutorial_search`, () => {
        appEvents.trigger("header:search-context-trigger");
      });
    }
  }

  var _default = {
    name: "new-user-narrative",

    initialize(container) {
      const siteSettings = container.lookup("service:site-settings");

      if (siteSettings.discourse_narrative_bot_enabled) {
        (0, _pluginApi.withPluginApi)("0.8.7", initialize);
      }
    }

  };
  _exports.default = _default;
});//# sourceMappingURL=discourse-narrative-bot.map

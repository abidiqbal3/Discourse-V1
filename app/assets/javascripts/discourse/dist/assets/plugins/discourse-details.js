define("discourse/plugins/discourse-details/initializers/apply-details", ["exports", "I18n", "discourse/lib/plugin-api"], function (_exports, _I18n, _pluginApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"I18n",0,"discourse/lib/plugin-api"eaimeta@70e063a35619d71f

  function initializeDetails(api) {
    api.decorateCooked($elem => $("details", $elem), {
      id: "discourse-details"
    });
    api.addToolbarPopupMenuOptionsCallback(() => {
      return {
        action: "insertDetails",
        icon: "caret-right",
        label: "details.title"
      };
    });
    api.modifyClass("controller:composer", {
      pluginId: "discourse-details",
      actions: {
        insertDetails() {
          this.toolbarEvent.applySurround("\n" + `[details="${_I18n.default.t("composer.details_title")}"]` + "\n", "\n[/details]\n", "details_text", {
            multiline: false
          });
        }

      }
    });
  }

  var _default = {
    name: "apply-details",

    initialize() {
      (0, _pluginApi.withPluginApi)("0.8.7", initializeDetails);
    }

  };
  _exports.default = _default;
});
define("discourse/plugins/discourse-details/lib/discourse-markdown/details", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setup = setup;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f

  const rule = {
    tag: "details",

    before(state, tagInfo) {
      const attrs = tagInfo.attrs;
      state.push("bbcode_open", "details", 1);
      state.push("bbcode_open", "summary", 1);
      let token = state.push("text", "", 0);
      token.content = attrs["_default"] || "";
      state.push("bbcode_close", "summary", -1);
    },

    after(state) {
      state.push("bbcode_close", "details", -1);
    }

  };

  function setup(helper) {
    helper.allowList(["summary", "summary[title]", "details", "details[open]", "details.elided"]);
    helper.registerPlugin(md => {
      md.block.bbcode.ruler.push("details", rule);
    });
  }
});//# sourceMappingURL=discourse-details.map

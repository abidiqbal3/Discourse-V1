if ('define' in window) {
define("discourse/theme-2/initializers/initialize-github-status", ["exports", "discourse/lib/plugin-api"], function (_exports, _pluginApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const settings = require("discourse/lib/theme-settings-store").getObjectForTheme(2);

  const themePrefix = key => "theme_translations.2.".concat(key);

  var _default = {
    name: "initialize-github-status",

    initialize() {
      (0, _pluginApi.withPluginApi)("0.8.7", api => {
        var _api$decorateChatMess;

        api.decorateCookedElement(this.addStatusIndicators, {
          id: "github-status"
        });
        (_api$decorateChatMess = api.decorateChatMessage) === null || _api$decorateChatMess === void 0 ? void 0 : _api$decorateChatMess.call(api, this.addStatusIndicators, {
          id: "github-status"
        });
      });
    },

    addStatusIndicators(element) {
      const oneboxes = element.querySelectorAll(".onebox.githubpullrequest, .onebox.githubissue");
      oneboxes.forEach(onebox => {
        const link = onebox.querySelector(".source a");

        if (!link) {
          return;
        }

        const href = link.getAttribute("href");
        const parts = href.match(/https:\/\/github\.com\/([\w-]+)\/([\w-]+)\/(pull|issues)\/(\d+)/);

        if (!parts) {
          return;
        }

        let linkType = parts[3];

        if (linkType === "pull") {
          linkType = "pulls";
        }

        const imageSrc = "https://img.shields.io/github/".concat(linkType, "/detail/state/").concat(parts[1], "/").concat(parts[2], "/").concat(parts[4], "?label=&style=flat-square");
        const image = document.createElement("img");
        image.setAttribute("src", imageSrc);
        image.classList.add("github-status-indicator");
        const info = onebox.querySelector(".github-info");

        if (info) {
          info.appendChild(image);
        }
      });
    }

  };
  _exports.default = _default;
});
}


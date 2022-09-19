define("wizard/components/homepage-preview", ["exports", "wizard/lib/preview"], function (_exports, _preview) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"wizard/lib/preview"eaimeta@70e063a35619d71f

  var _default = (0, _preview.createPreviewComponent)(628, 322, {
    logo: null,
    avatar: null,

    didUpdateAttrs() {
      this._super(...arguments);

      this.triggerRepaint();
    },

    images() {
      return {
        logo: this.wizard.getLogoUrl(),
        avatar: "/images/wizard/trout.png"
      };
    },

    paint(_ref) {
      let {
        ctx,
        colors,
        font,
        width,
        height
      } = _ref;
      this.drawFullHeader(colors, font, this.logo);

      if (this.get("step.fieldsById.homepage_style.value") === "latest") {
        this.drawPills(colors, font, height * 0.15);
        this.renderLatest(ctx, colors, font, width, height);
      } else if (["categories_only", "categories_with_featured_topics"].includes(this.get("step.fieldsById.homepage_style.value"))) {
        this.drawPills(colors, font, height * 0.15, {
          categories: true
        });
        this.renderCategories(ctx, colors, font, width, height);
      } else if (["categories_boxes", "categories_boxes_with_topics"].includes(this.get("step.fieldsById.homepage_style.value"))) {
        this.drawPills(colors, font, height * 0.15, {
          categories: true
        });
        const topics = this.get("step.fieldsById.homepage_style.value") === "categories_boxes_with_topics";
        this.renderCategoriesBoxes(ctx, colors, font, width, height, {
          topics
        });
      } else {
        this.drawPills(colors, font, height * 0.15, {
          categories: true
        });
        this.renderCategoriesWithTopics(ctx, colors, font, width, height);
      }
    },

    renderCategoriesBoxes(ctx, colors, font, width, height, opts) {
      opts = opts || {};
      const borderColor = (0, _preview.darkLightDiff)(colors.primary, colors.secondary, 90, -75);
      const textColor = (0, _preview.darkLightDiff)(colors.primary, colors.secondary, 50, 50);
      const margin = height * 0.03;
      const bodyFontSize = height / 440.0;
      const boxHeight = height * 0.7 - margin * 2;
      const descriptions = this.getDescriptions();
      const boxesSpacing = 15;
      const boxWidth = (width - margin * 2 - boxesSpacing * 2) / 3;
      this.categories().forEach((category, index) => {
        const boxStartX = margin + index * boxWidth + index * boxesSpacing;
        const boxStartY = height * 0.33;
        this.drawSquare(ctx, {
          x: boxStartX,
          y: boxStartY
        }, {
          x: boxStartX + boxWidth,
          y: boxStartY + boxHeight
        }, [{
          color: borderColor
        }, {
          color: borderColor
        }, {
          color: borderColor
        }, {
          color: category.color,
          width: 5
        }]);
        ctx.font = `Bold ${bodyFontSize * 1.3}em '${font}'`;
        ctx.fillStyle = colors.primary;
        ctx.textAlign = "center";
        ctx.fillText(category.name, boxStartX + boxWidth / 2, boxStartY + 25);
        ctx.textAlign = "left";

        if (opts.topics) {
          let startY = boxStartY + 60;
          this.getTitles().forEach(title => {
            ctx.font = `${bodyFontSize * 1}em '${font}'`;
            ctx.fillStyle = colors.tertiary;
            startY += this.fillTextMultiLine(ctx, title.split("\n").join(" "), boxStartX + 10, startY, 13, boxWidth * 0.95) + 8;
          });
        } else {
          ctx.font = `${bodyFontSize * 1}em '${font}'`;
          ctx.fillStyle = textColor;
          ctx.textAlign = "center";
          this.fillTextMultiLine(ctx, descriptions[index], boxStartX + boxWidth / 2, boxStartY + 60, 13, boxWidth * 0.8);
          ctx.textAlign = "left";
        }
      });
    },

    renderCategories(ctx, colors, font, width, height) {
      const textColor = (0, _preview.darkLightDiff)(colors.primary, colors.secondary, 50, 50);
      const margin = height * 0.03;
      const bodyFontSize = height / 440.0;
      const titles = this.getTitles();
      let categoryHeight = height / 6;

      const drawLine = (x, y) => {
        ctx.beginPath();
        ctx.strokeStyle = (0, _preview.darkLightDiff)(colors.primary, colors.secondary, 90, -75);
        ctx.moveTo(margin + x, y);
        ctx.lineTo(width - margin, y);
        ctx.stroke();
      };

      const cols = [0.025, 0.45, 0.53, 0.58, 0.94, 0.96].map(c => c * width);
      const headingY = height * 0.33;
      ctx.font = `${bodyFontSize * 0.9}em '${font}'`;
      ctx.fillStyle = textColor;
      ctx.fillText("Category", cols[0], headingY);

      if (this.get("step.fieldsById.homepage_style.value") === "categories_only") {
        ctx.fillText("Topics", cols[4], headingY);
      } else {
        ctx.fillText("Topics", cols[1], headingY);
        ctx.fillText("Latest", cols[2], headingY);
        categoryHeight = height / 5;
      }

      let y = headingY + bodyFontSize * 12;
      ctx.lineWidth = 2;
      drawLine(0, y);
      drawLine(width / 2, y); // Categories

      this.categories().forEach(category => {
        const textPos = y + categoryHeight * 0.35;
        ctx.font = `Bold ${bodyFontSize * 1.1}em '${font}'`;
        ctx.fillStyle = colors.primary;
        ctx.fillText(category.name, cols[0], textPos);
        ctx.font = `${bodyFontSize * 0.8}em '${font}'`;
        ctx.fillStyle = textColor;
        ctx.fillText(titles[0], cols[0] - margin * 0.25, textPos + categoryHeight * 0.36);
        ctx.beginPath();
        ctx.moveTo(margin, y);
        ctx.strokeStyle = category.color;
        ctx.lineWidth = 3.5;
        ctx.lineTo(margin, y + categoryHeight);
        ctx.stroke();

        if (this.get("step.fieldsById.homepage_style.value") === "categories_with_featured_topics") {
          ctx.font = `${bodyFontSize}em '${font}'`;
          ctx.fillText(Math.floor(Math.random() * 90) + 10, cols[1] + 15, textPos);
        } else {
          ctx.font = `${bodyFontSize}em '${font}'`;
          ctx.fillText(Math.floor(Math.random() * 90) + 10, cols[5], textPos);
        }

        y += categoryHeight;
        ctx.lineWidth = 1;
        drawLine(0, y);
      }); // Featured Topics

      if (this.get("step.fieldsById.homepage_style.value") === "categories_with_featured_topics") {
        const topicHeight = height / 15;
        y = headingY + bodyFontSize * 22;
        ctx.lineWidth = 1;
        ctx.fillStyle = colors.tertiary;
        titles.forEach(title => {
          ctx.font = `${bodyFontSize}em '${font}'`;
          const textPos = y + topicHeight * 0.35;
          ctx.fillStyle = colors.tertiary;
          ctx.fillText(`${title}`, cols[2], textPos);
          y += topicHeight;
        });
      }
    },

    renderCategoriesWithTopics(ctx, colors, font, width, height) {
      const textColor = (0, _preview.darkLightDiff)(colors.primary, colors.secondary, 50, 50);
      const margin = height * 0.03;
      const bodyFontSize = height / 440.0;

      const drawLine = (x, y) => {
        ctx.beginPath();
        ctx.strokeStyle = (0, _preview.darkLightDiff)(colors.primary, colors.secondary, 90, -75);
        ctx.moveTo(margin + x, y);
        ctx.lineTo(margin + x + width * 0.9 / 2, y);
        ctx.stroke();
      };

      const cols = [0.025, 0.42, 0.53, 0.58, 0.94].map(c => c * width);
      const headingY = height * 0.33;
      ctx.font = `${bodyFontSize * 0.9}em '${font}'`;
      ctx.fillStyle = textColor;
      ctx.fillText("Category", cols[0], headingY);
      ctx.fillText("Topics", cols[1], headingY);

      if (this.get("step.fieldsById.homepage_style.value") === "categories_and_latest_topics") {
        ctx.fillText("Latest", cols[2], headingY);
      } else {
        ctx.fillText("Top", cols[2], headingY);
      }

      let y = headingY + bodyFontSize * 12;
      ctx.lineWidth = 2;
      drawLine(0, y);
      drawLine(width / 2, y);
      const categoryHeight = height / 6;
      const titles = this.getTitles(); // Categories

      this.categories().forEach(category => {
        const textPos = y + categoryHeight * 0.35;
        ctx.font = `Bold ${bodyFontSize * 1.1}em '${font}'`;
        ctx.fillStyle = colors.primary;
        ctx.fillText(category.name, cols[0], textPos);
        ctx.font = `${bodyFontSize * 0.8}em '${font}'`;
        ctx.fillStyle = textColor;
        ctx.fillText(titles[0], cols[0] - margin * 0.25, textPos + categoryHeight * 0.36);
        ctx.beginPath();
        ctx.moveTo(margin, y);
        ctx.strokeStyle = category.color;
        ctx.lineWidth = 3.5;
        ctx.lineTo(margin, y + categoryHeight);
        ctx.stroke();
        ctx.font = `${bodyFontSize}em '${font}'`;
        ctx.fillText(Math.floor(Math.random() * 90) + 10, cols[1] + 15, textPos);
        y += categoryHeight;
        ctx.lineWidth = 1;
        drawLine(0, y);
      }); // Latest/Top Topics

      const topicHeight = height / 8;
      const avatarSize = topicHeight * 0.7;
      y = headingY + bodyFontSize * 12;
      ctx.lineWidth = 1;
      ctx.fillStyle = textColor;
      titles.forEach(title => {
        const category = this.categories()[0];
        ctx.font = `${bodyFontSize}em '${font}'`;
        const textPos = y + topicHeight * 0.45;
        ctx.fillStyle = textColor;
        this.scaleImage(this.avatar, cols[2], y + margin * 0.6, avatarSize, avatarSize);
        ctx.fillText(title, cols[3], textPos);
        ctx.font = `Bold ${bodyFontSize}em '${font}'`;
        ctx.fillText(Math.floor(Math.random() * 90) + 10, cols[4], textPos);
        ctx.font = `${bodyFontSize}em '${font}'`;
        ctx.fillText(`1h`, cols[4], textPos + topicHeight * 0.4);
        ctx.beginPath();
        ctx.fillStyle = category.color;
        const badgeSize = topicHeight * 0.1;
        ctx.font = `Bold ${bodyFontSize * 0.5}em '${font}'`;
        ctx.rect(cols[3] + margin * 0.5, y + topicHeight * 0.65, badgeSize, badgeSize);
        ctx.fill();
        ctx.fillStyle = colors.primary;
        ctx.fillText(category.name, cols[3] + badgeSize * 3, y + topicHeight * 0.76);
        y += topicHeight;
        drawLine(width / 2, y);
      });
    },

    getTitles() {
      return _preview.LOREM.split(".").slice(0, 8).map(t => t.substring(0, 40));
    },

    getDescriptions() {
      return _preview.LOREM.split(".");
    },

    renderLatest(ctx, colors, font, width, height) {
      const rowHeight = height / 6.6; // accounts for hard-set color variables in solarized themes

      const textColor = colors.primary_medium || (0, _preview.darkLightDiff)(colors.primary, colors.secondary, 50, 50);
      const bodyFontSize = height / 440.0;
      ctx.font = `${bodyFontSize}em '${font}'`;
      const margin = height * 0.03;

      const drawLine = y => {
        ctx.beginPath(); // accounts for hard-set color variables in solarized themes

        ctx.strokeStyle = colors.primary_low || (0, _preview.darkLightDiff)(colors.primary, colors.secondary, 90, -75);
        ctx.moveTo(margin, y);
        ctx.lineTo(width - margin, y);
        ctx.stroke();
      };

      const cols = [0.02, 0.66, 0.8, 0.87, 0.93].map(c => c * width); // Headings

      const headingY = height * 0.33;
      ctx.fillStyle = textColor;
      ctx.font = `${bodyFontSize * 0.9}em '${font}'`;
      ctx.fillText("Topic", cols[0], headingY);
      ctx.fillText("Replies", cols[2], headingY);
      ctx.fillText("Views", cols[3], headingY);
      ctx.fillText("Activity", cols[4], headingY); // Topics

      let y = headingY + rowHeight / 2.6;
      ctx.lineWidth = 2;
      drawLine(y);
      ctx.font = `${bodyFontSize}em '${font}'`;
      ctx.lineWidth = 1;
      this.getTitles().forEach(title => {
        const textPos = y + rowHeight * 0.4;
        ctx.fillStyle = textColor;
        ctx.fillText(title, cols[0], textPos);
        const category = this.categories()[0];
        ctx.beginPath();
        ctx.fillStyle = category.color;
        const badgeSize = rowHeight * 0.15;
        ctx.font = `Bold ${bodyFontSize * 0.75}em '${font}'`;
        ctx.rect(cols[0] + 4, y + rowHeight * 0.6, badgeSize, badgeSize);
        ctx.fill();
        ctx.fillStyle = colors.primary;
        ctx.fillText(category.name, cols[0] + badgeSize * 2, y + rowHeight * 0.73);
        this.scaleImage(this.avatar, cols[1], y + rowHeight * 0.25, rowHeight * 0.5, rowHeight * 0.5);
        ctx.fillStyle = textColor;
        ctx.font = `${bodyFontSize}em '${font}'`;

        for (let j = 2; j <= 4; j++) {
          ctx.fillText(j === 4 ? "1h" : Math.floor(Math.random() * 90) + 10, cols[j] + margin, y + rowHeight * 0.6);
        }

        drawLine(y + rowHeight * 1);
        y += rowHeight;
      });
    },

    fillTextMultiLine(ctx, text, x, y, lineHeight, maxWidth) {
      const words = text.split(" ").filter(f => f);
      let line = "";
      let totalHeight = 0;
      words.forEach(word => {
        if (ctx.measureText(`${line} ${word} `).width >= maxWidth) {
          ctx.fillText(line, x, y + totalHeight);
          totalHeight += lineHeight;
          line = word.trim();
        } else {
          line = `${line} ${word}`.trim();
        }
      });
      ctx.fillText(line, x, y + totalHeight);
      totalHeight += lineHeight;
      return totalHeight;
    },

    // Edges expected in this order: NW to NE -> NE to SE -> SE to SW -> SW to NW
    drawSquare(ctx, from, to) {
      let edges = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

      const edgeConfiguration = index => {
        const edge = edges[index] || {};
        return {
          width: edge.width || 1,
          color: edge.color || "#333"
        };
      };

      [{
        from: {
          x: from.x,
          y: from.y
        },
        to: {
          x: to.x,
          y: from.y
        }
      }, {
        from: {
          x: to.x,
          y: from.y
        },
        to: {
          x: to.x,
          y: to.y
        }
      }, {
        from: {
          x: to.x,
          y: to.y
        },
        to: {
          x: from.x,
          y: to.y
        }
      }, {
        from: {
          x: from.x,
          y: to.y
        },
        to: {
          x: from.x,
          y: from.y
        }
      }].forEach((path, index) => {
        const configuration = edgeConfiguration(index);
        ctx.beginPath();
        ctx.moveTo(path.from.x, path.from.y);
        ctx.strokeStyle = configuration.color;
        ctx.lineWidth = configuration.width;
        ctx.lineTo(path.to.x, path.to.y);
        ctx.stroke();
      });
    }

  });

  _exports.default = _default;
});
define("wizard/components/image-preview-favicon", ["exports", "wizard/lib/preview", "discourse-common/utils/decorators"], function (_exports, _preview, _decorators) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _obj;

  0; //eaimeta@70e063a35619d71f0,"wizard/lib/preview",0,"discourse-common/utils/decorators"eaimeta@70e063a35619d71f

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  var _default = (0, _preview.createPreviewComponent)(371, 124, (_dec = (0, _decorators.observes)("field.value"), (_obj = {
    tab: null,
    image: null,

    imageChanged() {
      this.reload();
    },

    images() {
      return {
        tab: "/images/wizard/tab.png",
        image: this.get("field.value")
      };
    },

    paint(options) {
      const {
        ctx,
        width,
        height
      } = options;
      this.scaleImage(this.tab, 0, 0, width, height);
      this.scaleImage(this.image, 40, 25, 30, 30);
      ctx.font = `20px 'Arial'`;
      ctx.fillStyle = "#000";
      let title = this.wizard.getTitle();

      if (title.length > 20) {
        title = title.substring(0, 20) + "...";
      }

      ctx.fillText(title, 80, 48);
    }

  }, (_applyDecoratedDescriptor(_obj, "imageChanged", [_dec], Object.getOwnPropertyDescriptor(_obj, "imageChanged"), _obj)), _obj)));

  _exports.default = _default;
});
define("wizard/components/image-preview-large-icon", ["exports", "wizard/lib/preview", "discourse-common/utils/decorators"], function (_exports, _preview, _decorators) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _obj;

  0; //eaimeta@70e063a35619d71f0,"wizard/lib/preview",0,"discourse-common/utils/decorators"eaimeta@70e063a35619d71f

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  var _default = (0, _preview.createPreviewComponent)(325, 125, (_dec = (0, _decorators.observes)("field.value"), (_obj = {
    ios: null,
    image: null,

    imageChanged() {
      this.reload();
    },

    images() {
      return {
        ios: "/images/wizard/apple-mask.png",
        image: this.get("field.value")
      };
    },

    paint(options) {
      const {
        width,
        height
      } = options;
      this.scaleImage(this.image, 10, 8, 87, 87);
      this.scaleImage(this.ios, 0, 0, width, height);
    }

  }, (_applyDecoratedDescriptor(_obj, "imageChanged", [_dec], Object.getOwnPropertyDescriptor(_obj, "imageChanged"), _obj)), _obj)));

  _exports.default = _default;
});
define("wizard/components/image-preview-logo-small", ["exports", "wizard/lib/preview", "discourse-common/utils/decorators"], function (_exports, _preview, _decorators) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _obj;

  0; //eaimeta@70e063a35619d71f0,"wizard/lib/preview",0,"discourse-common/utils/decorators"eaimeta@70e063a35619d71f

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  var _default = (0, _preview.createPreviewComponent)(375, 100, (_dec = (0, _decorators.observes)("field.value"), (_obj = {
    image: null,

    imageChanged() {
      this.reload();
    },

    images() {
      return {
        image: this.get("field.value")
      };
    },

    paint(options) {
      const {
        ctx,
        colors,
        font,
        headingFont,
        width,
        height
      } = options;
      const headerHeight = height / 2;
      (0, _preview.drawHeader)(ctx, colors, width, headerHeight);
      const image = this.image;
      const headerMargin = headerHeight * 0.2;
      const maxWidth = headerHeight - headerMargin * 2.0;
      let imageWidth = image.width;
      let ratio = 1.0;

      if (imageWidth > maxWidth) {
        ratio = maxWidth / imageWidth;
        imageWidth = maxWidth;
      }

      this.scaleImage(image, headerMargin, headerMargin, imageWidth, image.height * ratio);
      const afterLogo = headerMargin * 1.7 + imageWidth;
      const fontSize = Math.round(headerHeight * 0.4);
      ctx.font = `Bold ${fontSize}px '${headingFont}'`;
      ctx.fillStyle = colors.primary;

      const title = _preview.LOREM.substring(0, 27);

      ctx.fillText(title, headerMargin + imageWidth, headerHeight - fontSize * 1.1);
      const category = this.categories()[0];
      const badgeSize = height / 13.0;
      ctx.beginPath();
      ctx.fillStyle = category.color;
      ctx.rect(afterLogo, headerHeight * 0.7, badgeSize, badgeSize);
      ctx.fill();
      ctx.font = `Bold ${badgeSize * 1.2}px '${font}'`;
      ctx.fillStyle = colors.primary;
      ctx.fillText(category.name, afterLogo + badgeSize * 1.5, headerHeight * 0.7 + badgeSize * 0.9);
      const LINE_HEIGHT = 12;
      ctx.font = `${LINE_HEIGHT}px '${font}'`;

      const lines = _preview.LOREM.split("\n");

      for (let i = 0; i < 10; i++) {
        const line = height * 0.55 + i * (LINE_HEIGHT * 1.5);
        ctx.fillText(lines[i], afterLogo, line);
      }
    }

  }, (_applyDecoratedDescriptor(_obj, "imageChanged", [_dec], Object.getOwnPropertyDescriptor(_obj, "imageChanged"), _obj)), _obj)));

  _exports.default = _default;
});
define("wizard/components/image-preview-logo", ["exports", "wizard/lib/preview", "discourse-common/utils/decorators"], function (_exports, _preview, _decorators) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _obj;

  0; //eaimeta@70e063a35619d71f0,"wizard/lib/preview",0,"discourse-common/utils/decorators"eaimeta@70e063a35619d71f

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  var _default = (0, _preview.createPreviewComponent)(400, 100, (_dec = (0, _decorators.observes)("field.value"), (_obj = {
    image: null,

    imageChanged() {
      this.reload();
    },

    images() {
      return {
        image: this.get("field.value")
      };
    },

    paint(_ref) {
      let {
        ctx,
        colors,
        font,
        width,
        height
      } = _ref;
      const headerHeight = height / 2;
      (0, _preview.drawHeader)(ctx, colors, width, headerHeight);
      const image = this.image;
      const headerMargin = headerHeight * 0.2;
      const imageHeight = headerHeight - headerMargin * 2;
      const ratio = imageHeight / image.height;
      this.scaleImage(image, headerMargin, headerMargin, image.width * ratio, imageHeight);
      this.drawPills(colors, font, height / 2);
    }

  }, (_applyDecoratedDescriptor(_obj, "imageChanged", [_dec], Object.getOwnPropertyDescriptor(_obj, "imageChanged"), _obj)), _obj)));

  _exports.default = _default;
});
define("wizard/components/styling-preview", ["exports", "wizard/lib/preview", "I18n", "discourse-common/utils/decorators", "@ember/object"], function (_exports, _preview, _I18n, _decorators, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _obj;

  0; //eaimeta@70e063a35619d71f0,"wizard/lib/preview",0,"I18n",0,"discourse-common/utils/decorators",0,"@ember/object"eaimeta@70e063a35619d71f

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  const LOREM = `
Lorem ipsum dolor sit amet, consectetur adipiscing.
Nullam eget sem non elit tincidunt rhoncus. Fusce
velit nisl, porttitor sed nisl ac, consectetur interdum
metus. Fusce in consequat augue, vel facilisis felis.`;

  var _default = (0, _preview.createPreviewComponent)(628, 322, (_dec = (0, _decorators.observes)("previewTopic"), (_obj = {
    logo: null,
    avatar: null,
    previewTopic: true,
    draggingActive: false,
    startX: 0,
    scrollLeft: 0,

    init() {
      this._super(...arguments);

      this.wizard.on("homepageStyleChanged", this.onHomepageStyleChange);
    },

    willDestroy() {
      this._super(...arguments);

      this.wizard.off("homepageStyleChanged", this.onHomepageStyleChange);
    },

    didInsertElement() {
      this._super(...arguments);

      this.element.addEventListener("mouseleave", this.handleMouseLeave);
      this.element.addEventListener("mousemove", this.handleMouseMove);
    },

    willDestroyElement() {
      this._super(...arguments);

      this.element.removeEventListener("mouseleave", this.handleMouseLeave);
      this.element.removeEventListener("mousemove", this.handleMouseMove);
    },

    mouseDown(e) {
      const slider = this.element.querySelector(".previews");
      this.setProperties({
        draggingActive: true,
        startX: e.pageX - slider.offsetLeft,
        scrollLeft: slider.scrollLeft
      });
    },

    handleMouseLeave() {
      this.set("draggingActive", false);
    },

    mouseUp() {
      this.set("draggingActive", false);
    },

    handleMouseMove(e) {
      if (!this.draggingActive) {
        return;
      }

      e.preventDefault();
      const slider = this.element.querySelector(".previews"),
            x = e.pageX - slider.offsetLeft,
            walk = (x - this.startX) * 1.5;
      slider.scrollLeft = this.scrollLeft - walk;

      if (slider.scrollLeft < 50) {
        this.set("previewTopic", true);
      }

      if (slider.scrollLeft > slider.offsetWidth) {
        this.set("previewTopic", false);
      }
    },

    didUpdateAttrs() {
      this._super(...arguments);

      this.triggerRepaint();
    },

    onHomepageStyleChange() {
      this.set("previewTopic", false);
    },

    scrollPreviewArea() {
      const el = this.element.querySelector(".previews");
      el.scrollTo({
        top: 0,
        left: this.previewTopic ? 0 : el.scrollWidth - el.offsetWidth,
        behavior: "smooth"
      });
    },

    images() {
      return {
        logo: this.wizard.getLogoUrl(),
        avatar: "/images/wizard/trout.png"
      };
    },

    paint(_ref) {
      let {
        ctx,
        colors,
        font,
        headingFont,
        width,
        height
      } = _ref;
      const headerHeight = height * 0.3;
      this.drawFullHeader(colors, headingFont, this.logo);
      const margin = 20;
      const avatarSize = height * 0.15;
      const lineHeight = height / 14; // Draw a fake topic

      this.scaleImage(this.avatar, margin, headerHeight + height * 0.09, avatarSize, avatarSize);
      const titleFontSize = headerHeight / 55;
      ctx.beginPath();
      ctx.fillStyle = colors.primary;
      ctx.font = `bold ${titleFontSize}em '${headingFont}'`;
      ctx.fillText(_I18n.default.t("wizard.previews.topic_title"), margin, height * 0.3);
      const bodyFontSize = height / 330.0;
      ctx.font = `${bodyFontSize}em '${font}'`;
      let line = 0;
      const lines = LOREM.split("\n");

      for (let i = 0; i < 5; i++) {
        line = height * 0.35 + i * lineHeight;
        ctx.fillText(lines[i], margin + avatarSize + margin, line);
      } // Share Button


      const shareButtonWidth = _I18n.default.t("wizard.previews.share_button").length * 11;
      ctx.beginPath();
      ctx.rect(margin, line + lineHeight, shareButtonWidth, height * 0.1); // accounts for hard-set color variables in solarized themes

      ctx.fillStyle = colors.primary_low || (0, _preview.darkLightDiff)(colors.primary, colors.secondary, 90, 65);
      ctx.fillStyle = (0, _preview.chooseDarker)(colors.primary, colors.secondary);
      ctx.font = `${bodyFontSize}em '${font}'`;
      ctx.fillText(_I18n.default.t("wizard.previews.share_button"), margin + 10, line + lineHeight * 1.9); // Reply Button

      const replyButtonWidth = _I18n.default.t("wizard.previews.reply_button").length * 11;
      ctx.beginPath();
      ctx.rect(shareButtonWidth + margin + 10, line + lineHeight, replyButtonWidth, height * 0.1);
      ctx.fillStyle = colors.tertiary;
      ctx.fill();
      ctx.fillStyle = colors.secondary;
      ctx.font = `${bodyFontSize}em '${font}'`;
      ctx.fillText(_I18n.default.t("wizard.previews.reply_button"), shareButtonWidth + margin + 20, line + lineHeight * 1.9); // Draw Timeline

      const timelineX = width * 0.86;
      ctx.beginPath();
      ctx.strokeStyle = colors.tertiary;
      ctx.lineWidth = 0.5;
      ctx.moveTo(timelineX, height * 0.3);
      ctx.lineTo(timelineX, height * 0.7);
      ctx.stroke(); // Timeline

      ctx.beginPath();
      ctx.strokeStyle = colors.tertiary;
      ctx.lineWidth = 2;
      ctx.moveTo(timelineX, height * 0.3);
      ctx.lineTo(timelineX, height * 0.4);
      ctx.stroke();
      ctx.font = `Bold ${bodyFontSize}em ${font}`;
      ctx.fillStyle = colors.primary;
      ctx.fillText("1 / 20", timelineX + margin, height * 0.3 + margin * 1.5);
    },

    setPreviewHomepage() {
      this.set("previewTopic", false);
    },

    setPreviewTopic() {
      this.set("previewTopic", true);
    }

  }, (_applyDecoratedDescriptor(_obj, "handleMouseLeave", [_decorators.bind], Object.getOwnPropertyDescriptor(_obj, "handleMouseLeave"), _obj), _applyDecoratedDescriptor(_obj, "handleMouseMove", [_decorators.bind], Object.getOwnPropertyDescriptor(_obj, "handleMouseMove"), _obj), _applyDecoratedDescriptor(_obj, "onHomepageStyleChange", [_decorators.bind], Object.getOwnPropertyDescriptor(_obj, "onHomepageStyleChange"), _obj), _applyDecoratedDescriptor(_obj, "scrollPreviewArea", [_dec], Object.getOwnPropertyDescriptor(_obj, "scrollPreviewArea"), _obj), _applyDecoratedDescriptor(_obj, "setPreviewHomepage", [_object.action], Object.getOwnPropertyDescriptor(_obj, "setPreviewHomepage"), _obj), _applyDecoratedDescriptor(_obj, "setPreviewTopic", [_object.action], Object.getOwnPropertyDescriptor(_obj, "setPreviewTopic"), _obj)), _obj)));

  _exports.default = _default;
});
define("wizard/components/theme-preview", ["exports", "@ember/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component"eaimeta@70e063a35619d71f

  var _default = _component.default.extend({});

  _exports.default = _default;
});
define("wizard/components/wizard-canvas", ["exports", "discourse-common/utils/decorators", "@ember/component"], function (_exports, _decorators, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _obj;

  0; //eaimeta@70e063a35619d71f0,"discourse-common/utils/decorators",0,"@ember/component"eaimeta@70e063a35619d71f

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  const MAX_PARTICLES = 150;
  const SIZE = 144;
  let width, height;
  const COLORS = ["#BF1E2E", "#F1592A", "#F7941D", "#9EB83B", "#3AB54A", "#12A89D", "#25AAE2", "#0E76BD", "#652D90", "#92278F", "#ED207B", "#8C6238"];

  class Particle {
    constructor() {
      this.reset();
      this.y = Math.random() * (height + SIZE) - SIZE;
    }

    reset() {
      this.y = -SIZE;
      this.origX = Math.random() * (width + SIZE);
      this.speed = 1 + Math.random();
      this.ang = Math.random() * 2 * Math.PI;
      this.scale = Math.random() * 0.4 + 0.2;
      this.radius = Math.random() * 25 + 25;
      this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      this.flipped = Math.random() > 0.5 ? 1 : -1;
    }

    move() {
      this.y += this.speed;

      if (this.y > height + SIZE) {
        this.reset();
      }

      this.ang += this.speed / 30.0;

      if (this.ang > 2 * Math.PI) {
        this.ang = 0;
      }

      this.x = this.origX + this.radius * Math.sin(this.ang);
    }

  }

  var _default = _component.default.extend((_obj = {
    classNames: ["wizard-canvas"],
    tagName: "canvas",
    ctx: null,
    ready: false,
    particles: null,

    didInsertElement() {
      this._super(...arguments);

      const canvas = this.element;
      this.ctx = canvas.getContext("2d");
      this.resized();
      this.particles = [];

      for (let i = 0; i < MAX_PARTICLES; i++) {
        this.particles.push(new Particle());
      }

      this.ready = true;
      this.paint();
      window.addEventListener("resize", this.resized);
    },

    willDestroyElement() {
      this._super(...arguments);

      window.removeEventListener("resize", this.resized);
    },

    resized() {
      width = window.innerWidth;
      height = window.innerHeight;
      const canvas = this.element;
      canvas.width = width;
      canvas.height = height;
    },

    paint() {
      if (this.isDestroying || this.isDestroyed || !this.ready) {
        return;
      }

      const {
        ctx
      } = this;
      ctx.clearRect(0, 0, width, height);
      this.particles.forEach(particle => {
        particle.move();
        this.drawParticle(particle);
      });
      window.requestAnimationFrame(() => this.paint());
    },

    drawParticle(p) {
      const c = this.ctx;
      c.save();
      c.translate(p.x - SIZE, p.y - SIZE);
      c.scale(p.scale * p.flipped, p.scale);
      c.fillStyle = p.color;
      c.strokeStyle = p.color;
      c.globalAlpha = "1.0";
      c.lineWidth = "1";
      c.lineCap = "butt";
      c.lineJoin = "round";
      c.mitterLimit = "1";
      c.beginPath();
      c.moveTo(97.9, 194.9);
      c.lineTo(103.5, 162.9);
      c.bezierCurveTo(88.7, 152, 84.2, 139.7, 90.2, 126.3);
      c.bezierCurveTo(99.5, 105.6, 124.6, 89.6, 159.7, 100.4);
      c.lineTo(159.7, 100.4);
      c.bezierCurveTo(175.9, 105.4, 186.4, 111.2, 192.6, 118.5);
      c.bezierCurveTo(200, 127.2, 201.6, 138.4, 197.5, 152.7);
      c.bezierCurveTo(194, 165, 187.4, 173.6, 177.9, 178.3);
      c.bezierCurveTo(165.6, 184.4, 148.4, 183.7, 129.4, 176.3);
      c.bezierCurveTo(127.7, 175.6, 126, 174.9, 124.4, 174.2);
      c.lineTo(97.9, 194.9);
      c.closePath();
      c.moveTo(138, 99.3);
      c.bezierCurveTo(115.4, 99.3, 99.3, 111.9, 92.4, 127.3);
      c.bezierCurveTo(86.8, 139.7, 91.2, 151.2, 105.5, 161.5);
      c.lineTo(106.1, 161.9);
      c.lineTo(101.2, 189.4);
      c.lineTo(124, 171.7);
      c.lineTo(124.6, 172);
      c.bezierCurveTo(126.4, 172.8, 128.3, 173.6, 130.2, 174.3);
      c.bezierCurveTo(148.6, 181.4, 165.1, 182.2, 176.8, 176.4);
      c.bezierCurveTo(185.7, 172, 191.9, 163.9, 195.2, 152.2);
      c.bezierCurveTo(202.4, 127.2, 191.9, 112.8, 159, 102.7);
      c.lineTo(159, 102.7);
      c.bezierCurveTo(151.6, 100.3, 144.5, 99.3, 138, 99.3);
      c.closePath();
      c.fill();
      c.stroke();
      c.beginPath();
      c.moveTo(115.7, 136.2);
      c.bezierCurveTo(115.7, 137.9, 115, 139.3, 113.3, 139.3);
      c.bezierCurveTo(111.6, 139.3, 110.2, 137.9, 110.2, 136.2);
      c.bezierCurveTo(110.2, 134.5, 111.6, 133.1, 113.3, 133.1);
      c.bezierCurveTo(115, 133, 115.7, 134.4, 115.7, 136.2);
      c.closePath();
      c.fill();
      c.stroke();
      c.beginPath();
      c.moveTo(145.8, 141.6);
      c.bezierCurveTo(145.8, 143.3, 144.4, 144.1, 142.7, 144.1);
      c.bezierCurveTo(141, 144.1, 139.6, 143.4, 139.6, 141.6);
      c.bezierCurveTo(139.6, 141.6, 141, 138.5, 142.7, 138.5);
      c.bezierCurveTo(144.4, 138.5, 145.8, 139.9, 145.8, 141.6);
      c.closePath();
      c.fill();
      c.stroke();
      c.beginPath();
      c.moveTo(171.6, 146.8);
      c.bezierCurveTo(171.6, 148.5, 171, 149.9, 169.2, 149.9);
      c.bezierCurveTo(167.5, 149.9, 166.1, 148.5, 166.1, 146.8);
      c.bezierCurveTo(166.1, 145.1, 167.5, 143.7, 169.2, 143.7);
      c.bezierCurveTo(171, 143.6, 171.6, 145, 171.6, 146.8);
      c.closePath();
      c.fill();
      c.stroke();
      c.restore();
    }

  }, (_applyDecoratedDescriptor(_obj, "resized", [_decorators.bind], Object.getOwnPropertyDescriptor(_obj, "resized"), _obj)), _obj));

  _exports.default = _default;
});
define("wizard/components/wizard-field-checkbox", ["exports", "@ember/component"], function (_exports, _component) {
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
define("wizard/components/wizard-field-checkboxes", ["exports", "@ember/component", "@ember/object"], function (_exports, _component, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _obj;

  0; //eaimeta@70e063a35619d71f0,"@ember/component",0,"@ember/object"eaimeta@70e063a35619d71f

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  var _default = _component.default.extend((_obj = {
    init() {
      this._super(...arguments);

      this.set("field.value", this.field.value || []);

      for (let choice of this.field.choices) {
        if (this.field.value.includes(choice.id)) {
          (0, _object.set)(choice, "checked", true);
        }
      }
    },

    changed(checkbox) {
      let newFieldValue = this.field.value;
      const checkboxValue = checkbox.parentElement.getAttribute("value").toLowerCase();

      if (checkbox.checked) {
        newFieldValue.push(checkboxValue);
      } else {
        const index = newFieldValue.indexOf(checkboxValue);

        if (index > -1) {
          newFieldValue.splice(index, 1);
        }
      }

      this.set("field.value", newFieldValue);
    }

  }, (_applyDecoratedDescriptor(_obj, "changed", [_object.action], Object.getOwnPropertyDescriptor(_obj, "changed"), _obj)), _obj));

  _exports.default = _default;
});
define("wizard/components/wizard-field-dropdown", ["exports", "@ember/component", "discourse-common/utils/decorators", "@ember/object"], function (_exports, _component, _decorators, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _obj;

  0; //eaimeta@70e063a35619d71f0,"@ember/component",0,"discourse-common/utils/decorators",0,"@ember/object"eaimeta@70e063a35619d71f

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  var _default = _component.default.extend((_dec = (0, _decorators.default)("field.id"), (_obj = {
    init() {
      this._super(...arguments);

      if (this.field.id === "color_scheme") {
        for (let choice of this.field.choices) {
          if (choice?.data?.colors) {
            (0, _object.set)(choice, "colors", choice.data.colors);
          }
        }
      }
    },

    componentName(id) {
      return id === "color_scheme" ? "color-palettes" : "combo-box";
    },

    keyPress(e) {
      e.stopPropagation();
    },

    onChangeValue(value) {
      this.set("field.value", value);

      if (this.field.id === "homepage_style") {
        this.wizard.trigger("homepageStyleChanged");
      }
    }

  }, (_applyDecoratedDescriptor(_obj, "componentName", [_dec], Object.getOwnPropertyDescriptor(_obj, "componentName"), _obj), _applyDecoratedDescriptor(_obj, "onChangeValue", [_object.action], Object.getOwnPropertyDescriptor(_obj, "onChangeValue"), _obj)), _obj)));

  _exports.default = _default;
});
define("wizard/components/wizard-field-image", ["exports", "@ember/component", "@ember/debug", "I18n", "@ember/string", "discourse-common/utils/decorators", "discourse-common/lib/get-owner", "discourse-common/lib/get-url", "@uppy/core", "@uppy/drop-target", "@uppy/xhr-upload"], function (_exports, _component, _debug, _I18n, _string, _decorators, _getOwner, _getUrl, _core, _dropTarget, _xhrUpload) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _obj;

  0; //eaimeta@70e063a35619d71f0,"@ember/component",0,"@ember/debug",0,"I18n",0,"@ember/string",0,"discourse-common/utils/decorators",0,"discourse-common/lib/get-owner",0,"discourse-common/lib/get-url",0,"@uppy/core",0,"@uppy/drop-target",0,"@uppy/xhr-upload"eaimeta@70e063a35619d71f

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  var _default = _component.default.extend((_dec = (0, _decorators.default)("field.id"), (_obj = {
    classNames: ["wizard-container__image-upload"],
    uploading: false,

    previewComponent(id) {
      const componentName = `image-preview-${(0, _string.dasherize)(id)}`;
      const exists = (0, _getOwner.getOwner)(this).lookup(`component:${componentName}`);
      return exists ? componentName : "wizard-image-preview";
    },

    didInsertElement() {
      this._super(...arguments);

      this.setupUploads();
    },

    setupUploads() {
      const id = this.get("field.id");
      this._uppyInstance = new _core.default({
        id: `wizard-field-image-${id}`,
        meta: {
          upload_type: `wizard_${id}`
        },
        autoProceed: true
      });

      this._uppyInstance.use(_xhrUpload.default, {
        endpoint: (0, _getUrl.default)("/uploads.json"),
        headers: {
          "X-CSRF-Token": this.session.csrfToken
        }
      });

      this._uppyInstance.use(_dropTarget.default, {
        target: this.element
      });

      this._uppyInstance.on("upload", () => {
        this.set("uploading", true);
      });

      this._uppyInstance.on("upload-success", (file, response) => {
        this.set("field.value", response.body.url);
        this.set("uploading", false);
      });

      this._uppyInstance.on("upload-error", (file, error, response) => {
        let message = _I18n.default.t("wizard.upload_error");

        if (response.body.errors) {
          message = response.body.errors.join("\n");
        }

        window.bootbox.alert(message);
        this.set("uploading", false);
      });

      this.element.querySelector(".wizard-hidden-upload-field").addEventListener("change", event => {
        const files = Array.from(event.target.files);
        files.forEach(file => {
          try {
            this._uppyInstance.addFile({
              source: `${this.id} file input`,
              name: file.name,
              type: file.type,
              data: file
            });
          } catch (err) {
            (true && (0, _debug.warn)(`error adding files to uppy: ${err}`, {
              id: "discourse.upload.uppy-add-files-error"
            }));
          }
        });
      });
    }

  }, (_applyDecoratedDescriptor(_obj, "previewComponent", [_dec], Object.getOwnPropertyDescriptor(_obj, "previewComponent"), _obj)), _obj)));

  _exports.default = _default;
});
define("wizard/components/wizard-field-text", ["exports", "@ember/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component"eaimeta@70e063a35619d71f

  var _default = _component.default.extend({});

  _exports.default = _default;
});
define("wizard/components/wizard-field", ["exports", "@ember/component", "@ember/string", "discourse-common/utils/decorators"], function (_exports, _component, _string, _decorators) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _obj, _init, _init2;

  0; //eaimeta@70e063a35619d71f0,"@ember/component",0,"@ember/string",0,"discourse-common/utils/decorators"eaimeta@70e063a35619d71f

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  var _default = _component.default.extend((_dec = (0, _decorators.default)("field.type", "field.id"), _dec2 = (0, _decorators.default)("field.id"), _dec3 = (0, _decorators.default)("field.type", "field.id"), (_obj = {
    classNameBindings: [":wizard-container__field", "typeClasses", "field.invalid", "field.disabled"],
    typeClasses: (type, id) => `${(0, _string.dasherize)(type)}-field ${(0, _string.dasherize)(type)}-${(0, _string.dasherize)(id)}`,
    fieldClass: id => `field-${(0, _string.dasherize)(id)} wizard-focusable`,

    inputComponentName(type, id) {
      return type === "component" ? (0, _string.dasherize)(id) : `wizard-field-${type}`;
    }

  }, (_applyDecoratedDescriptor(_obj, "typeClasses", [_dec], (_init = Object.getOwnPropertyDescriptor(_obj, "typeClasses"), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function () {
      return _init;
    }
  }), _obj), _applyDecoratedDescriptor(_obj, "fieldClass", [_dec2], (_init2 = Object.getOwnPropertyDescriptor(_obj, "fieldClass"), _init2 = _init2 ? _init2.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function () {
      return _init2;
    }
  }), _obj), _applyDecoratedDescriptor(_obj, "inputComponentName", [_dec3], Object.getOwnPropertyDescriptor(_obj, "inputComponentName"), _obj)), _obj)));

  _exports.default = _default;
});
define("wizard/components/wizard-image-preview", ["exports", "@ember/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component"eaimeta@70e063a35619d71f

  var _default = _component.default.extend({
    classNameBindings: [":wizard-image-preview", "fieldClass"]
  });

  _exports.default = _default;
});
define("wizard/components/wizard-step-form", ["exports", "@ember/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component"eaimeta@70e063a35619d71f

  var _default = _component.default.extend({
    classNameBindings: [":wizard-container__step-form"]
  });

  _exports.default = _default;
});
define("wizard/components/wizard-step", ["exports", "discourse-common/utils/decorators", "@ember/component", "I18n", "@ember/template", "@ember/runloop", "@ember/object", "@ember/service"], function (_exports, _decorators, _component, _I18n, _template, _runloop, _object, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _obj;

  0; //eaimeta@70e063a35619d71f0,"discourse-common/utils/decorators",0,"@ember/component",0,"I18n",0,"@ember/template",0,"@ember/runloop",0,"@ember/object",0,"@ember/service"eaimeta@70e063a35619d71f

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  const alreadyWarned = {};

  var _default = _component.default.extend((_dec = (0, _decorators.default)("step.index"), _dec2 = (0, _decorators.default)("step.displayIndex", "wizard.totalSteps"), _dec3 = (0, _decorators.default)("step.id"), _dec4 = (0, _decorators.default)("step.id"), _dec5 = (0, _decorators.default)("step.id"), _dec6 = (0, _decorators.default)("step.id"), _dec7 = (0, _decorators.default)("step.id"), _dec8 = (0, _decorators.default)("step.id"), _dec9 = (0, _decorators.default)("step.id"), _dec10 = (0, _decorators.default)("step.banner"), _dec11 = (0, _decorators.default)(), _dec12 = (0, _decorators.observes)("step.id"), _dec13 = (0, _decorators.default)("step.index", "wizard.totalSteps"), _dec14 = (0, _decorators.default)("step.fields"), (_obj = {
    router: (0, _service.inject)(),
    classNameBindings: [":wizard-container__step", "stepClass"],
    saving: null,

    didInsertElement() {
      this._super(...arguments);

      this.autoFocus();
    },

    showBackButton(index) {
      return index > 0;
    },

    showNextButton(current, total) {
      return current < total;
    },

    nextButtonLabel(step) {
      return `wizard.${step === "ready" ? "configure_more" : "next"}`;
    },

    nextButtonClass(step) {
      return step === "ready" ? "configure-more" : "next";
    },

    showJumpInButton(step) {
      return ["ready", "styling", "branding"].includes(step);
    },

    jumpInButtonLabel(step) {
      return `wizard.${step === "ready" ? "jump_in" : "finish"}`;
    },

    jumpInButtonClass(step) {
      return step === "ready" ? "jump-in" : "finish";
    },

    showFinishButton(step) {
      return step === "corporate";
    },

    stepClass(step) {
      return step;
    },

    bannerImage(bannerName) {
      if (!bannerName) {
        return;
      }

      return bannerName;
    },

    bannerAndDescriptionClass() {
      return `wizard-container__step-banner`;
    },

    _stepChanged() {
      this.set("saving", false);
      this.autoFocus();
    },

    keyPress(event) {
      if (event.key === "Enter") {
        if (this.showJumpInButton) {
          this.send("quit");
        } else {
          this.send("nextStep");
        }
      }
    },

    barStyle(displayIndex, totalSteps) {
      let ratio = parseFloat(displayIndex) / parseFloat(totalSteps - 1);

      if (ratio < 0) {
        ratio = 0;
      }

      if (ratio > 1) {
        ratio = 1;
      }

      return (0, _template.htmlSafe)(`width: ${ratio * 200}px`);
    },

    includeSidebar(fields) {
      return !!fields.findBy("show_in_sidebar");
    },

    autoFocus() {
      (0, _runloop.schedule)("afterRender", () => {
        const $invalid = $(".wizard-container__input.invalid:nth-of-type(1) .wizard-focusable");

        if ($invalid.length) {
          return $invalid.focus();
        }

        $(".wizard-focusable:nth-of-type(1)").focus();
      });
    },

    advance() {
      this.set("saving", true);
      this.step.save().then(response => this.goNext(response)).finally(() => this.set("saving", false));
    },

    quit() {
      this.router.transitionTo("discovery.latest");
    },

    exitEarly() {
      const step = this.step;
      step.validate();

      if (step.get("valid")) {
        this.set("saving", true);
        step.save().then(response => this.goNext(response)).finally(() => this.set("saving", false));
      } else {
        this.autoFocus();
      }
    },

    backStep() {
      if (this.saving) {
        return;
      }

      this.goBack();
    },

    nextStep() {
      if (this.saving) {
        return;
      }

      const step = this.step;
      const result = step.validate();

      if (result.warnings.length) {
        const unwarned = result.warnings.filter(w => !alreadyWarned[w]);

        if (unwarned.length) {
          unwarned.forEach(w => alreadyWarned[w] = true);
          return window.bootbox.confirm(unwarned.map(w => _I18n.default.t(`wizard.${w}`)).join("\n"), _I18n.default.t("no_value"), _I18n.default.t("yes_value"), confirmed => {
            if (confirmed) {
              this.advance();
            }
          });
        }
      }

      if (step.get("valid")) {
        this.advance();
      } else {
        this.autoFocus();
      }
    }

  }, (_applyDecoratedDescriptor(_obj, "showBackButton", [_dec], Object.getOwnPropertyDescriptor(_obj, "showBackButton"), _obj), _applyDecoratedDescriptor(_obj, "showNextButton", [_dec2], Object.getOwnPropertyDescriptor(_obj, "showNextButton"), _obj), _applyDecoratedDescriptor(_obj, "nextButtonLabel", [_dec3], Object.getOwnPropertyDescriptor(_obj, "nextButtonLabel"), _obj), _applyDecoratedDescriptor(_obj, "nextButtonClass", [_dec4], Object.getOwnPropertyDescriptor(_obj, "nextButtonClass"), _obj), _applyDecoratedDescriptor(_obj, "showJumpInButton", [_dec5], Object.getOwnPropertyDescriptor(_obj, "showJumpInButton"), _obj), _applyDecoratedDescriptor(_obj, "jumpInButtonLabel", [_dec6], Object.getOwnPropertyDescriptor(_obj, "jumpInButtonLabel"), _obj), _applyDecoratedDescriptor(_obj, "jumpInButtonClass", [_dec7], Object.getOwnPropertyDescriptor(_obj, "jumpInButtonClass"), _obj), _applyDecoratedDescriptor(_obj, "showFinishButton", [_dec8], Object.getOwnPropertyDescriptor(_obj, "showFinishButton"), _obj), _applyDecoratedDescriptor(_obj, "stepClass", [_dec9], Object.getOwnPropertyDescriptor(_obj, "stepClass"), _obj), _applyDecoratedDescriptor(_obj, "bannerImage", [_dec10], Object.getOwnPropertyDescriptor(_obj, "bannerImage"), _obj), _applyDecoratedDescriptor(_obj, "bannerAndDescriptionClass", [_dec11], Object.getOwnPropertyDescriptor(_obj, "bannerAndDescriptionClass"), _obj), _applyDecoratedDescriptor(_obj, "_stepChanged", [_dec12], Object.getOwnPropertyDescriptor(_obj, "_stepChanged"), _obj), _applyDecoratedDescriptor(_obj, "barStyle", [_dec13], Object.getOwnPropertyDescriptor(_obj, "barStyle"), _obj), _applyDecoratedDescriptor(_obj, "includeSidebar", [_dec14], Object.getOwnPropertyDescriptor(_obj, "includeSidebar"), _obj), _applyDecoratedDescriptor(_obj, "quit", [_object.action], Object.getOwnPropertyDescriptor(_obj, "quit"), _obj), _applyDecoratedDescriptor(_obj, "exitEarly", [_object.action], Object.getOwnPropertyDescriptor(_obj, "exitEarly"), _obj), _applyDecoratedDescriptor(_obj, "backStep", [_object.action], Object.getOwnPropertyDescriptor(_obj, "backStep"), _obj), _applyDecoratedDescriptor(_obj, "nextStep", [_object.action], Object.getOwnPropertyDescriptor(_obj, "nextStep"), _obj)), _obj)));

  _exports.default = _default;
});
define("wizard/controllers/wizard-step", ["exports", "discourse-common/lib/get-url", "@ember/controller", "@ember/object"], function (_exports, _getUrl, _controller, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _obj;

  0; //eaimeta@70e063a35619d71f0,"discourse-common/lib/get-url",0,"@ember/controller",0,"@ember/object"eaimeta@70e063a35619d71f

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  var _default = _controller.default.extend((_obj = {
    wizard: null,
    step: null,

    goNext(response) {
      const next = this.get("step.next");

      if (response?.refresh_required) {
        document.location = (0, _getUrl.default)(`/wizard/steps/${next}`);
      } else if (response?.success && next) {
        this.transitionToRoute("wizard.step", next);
      } else if (response?.success) {
        this.transitionToRoute("discovery.latest");
      }
    },

    goBack() {
      this.transitionToRoute("wizard.step", this.step.previous);
    }

  }, (_applyDecoratedDescriptor(_obj, "goNext", [_object.action], Object.getOwnPropertyDescriptor(_obj, "goNext"), _obj), _applyDecoratedDescriptor(_obj, "goBack", [_object.action], Object.getOwnPropertyDescriptor(_obj, "goBack"), _obj)), _obj));

  _exports.default = _default;
});
define("wizard/lib/preview", ["exports", "@ember/component", "rsvp", "discourse-common/lib/get-url", "@ember/template", "@ember/runloop", "discourse-common/utils/decorators"], function (_exports, _component, _rsvp, _getUrl, _template, _runloop, _decorators) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.LOREM = void 0;
  _exports.brightness = brightness;
  _exports.chooseBrighter = chooseBrighter;
  _exports.chooseDarker = chooseDarker;
  _exports.createPreviewComponent = createPreviewComponent;
  _exports.darkLightDiff = darkLightDiff;
  _exports.drawHeader = drawHeader;
  _exports.lighten = lighten;
  _exports.parseColor = parseColor;
  0; //eaimeta@70e063a35619d71f0,"@ember/component",0,"rsvp",0,"discourse-common/lib/get-url",0,"@ember/template",0,"@ember/runloop",0,"discourse-common/utils/decorators"eaimeta@70e063a35619d71f

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  const LOREM = `
Lorem ipsum dolor sit amet,
consectetur adipiscing elit.
Nullam eget sem non elit
tincidunt rhoncus. Fusce
velit nisl, porttitor sed
nisl ac, consectetur interdum
metus. Fusce in consequat
augue, vel facilisis felis.`;
  _exports.LOREM = LOREM;
  const scaled = {};

  function canvasFor(image, w, h) {
    w = Math.ceil(w);
    h = Math.ceil(h);
    const scale = window.devicePixelRatio;
    const can = document.createElement("canvas");
    can.width = w * scale;
    can.height = h * scale;
    const ctx = can.getContext("2d");
    ctx.scale(scale, scale);
    ctx.drawImage(image, 0, 0, w, h);
    return can;
  }

  function createPreviewComponent(width, height, obj) {
    var _dec, _obj;

    const scale = window.devicePixelRatio;
    return _component.default.extend((_dec = (0, _decorators.observes)("step.fieldsById.{color_scheme,body_font,heading_font,homepage_style}.value"), (_obj = {
      layoutName: "components/theme-preview",
      width,
      height,
      elementWidth: width * scale,
      elementHeight: height * scale,
      canvasStyle: (0, _template.htmlSafe)(`width:${width}px;height:${height}px`),
      ctx: null,
      loaded: false,

      didInsertElement() {
        this._super(...arguments);

        const c = this.element.querySelector("canvas");
        this.ctx = c.getContext("2d");
        this.ctx.scale(scale, scale);
        this.reload();
      },

      themeChanged() {
        this.triggerRepaint();
      },

      images() {},

      loadFonts() {
        return document.fonts.ready;
      },

      loadImages() {
        const images = this.images();

        if (images) {
          return _rsvp.Promise.all(Object.keys(images).map(id => {
            return loadImage(images[id]).then(img => this[id] = img);
          }));
        }

        return _rsvp.Promise.resolve();
      },

      reload() {
        _rsvp.Promise.all([this.loadFonts(), this.loadImages()]).then(() => {
          this.loaded = true;
          this.triggerRepaint();
        });
      },

      triggerRepaint() {
        (0, _runloop.scheduleOnce)("afterRender", this, "repaint");
      },

      repaint() {
        if (!this.loaded) {
          return false;
        }

        const colorsArray = this.wizard.currentColors;

        if (!colorsArray) {
          return;
        }

        let colors = {};
        colorsArray.forEach(function (c) {
          const name = c.name;
          colors[name] = `#${c.hex}`;
        });
        const {
          font,
          headingFont
        } = this.wizard;

        if (!font) {
          return;
        }

        const {
          ctx
        } = this;
        ctx.fillStyle = colors.secondary;
        ctx.fillRect(0, 0, width, height);
        const options = {
          ctx,
          colors,
          font,
          headingFont,
          width: this.width,
          height: this.height
        };
        this.paint(options);
      },

      categories() {
        return [{
          name: "consecteteur",
          color: "#652D90"
        }, {
          name: "ultrices",
          color: "#3AB54A"
        }, {
          name: "placerat",
          color: "#25AAE2"
        }];
      },

      scaleImage(image, x, y, w, h) {
        w = Math.floor(w);
        h = Math.floor(h);
        const {
          ctx
        } = this;
        const key = `${image.src}-${w}-${h}`;

        if (!scaled[key]) {
          let copy = image;
          let ratio = copy.width / copy.height;
          let newH = copy.height * 0.5;

          while (newH > h) {
            copy = canvasFor(copy, ratio * newH, newH);
            newH = newH * 0.5;
          }

          scaled[key] = copy;
        }

        ctx.drawImage(scaled[key], x, y, w, h);
      },

      drawFullHeader(colors, font, logo) {
        const {
          ctx
        } = this;
        const headerHeight = height * 0.15;
        drawHeader(ctx, colors, width, headerHeight);
        const avatarSize = height * 0.1;
        const headerMargin = headerHeight * 0.2;

        if (logo) {
          const logoHeight = headerHeight - headerMargin * 2;
          const ratio = logoHeight / logo.height;
          this.scaleImage(logo, headerMargin, headerMargin, logo.width * ratio, logoHeight);
          this.scaleImage(logo, width, headerMargin);
        } // Top right menu


        this.scaleImage(this.avatar, width - avatarSize - headerMargin, headerMargin, avatarSize, avatarSize); // accounts for hard-set color variables in solarized themes

        ctx.fillStyle = colors.primary_low_mid || darkLightDiff(colors.primary, colors.secondary, 45, 55);
        const pathScale = headerHeight / 1200; // search icon SVG path

        const searchIcon = new Path2D("M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"); // hamburger icon

        const hamburgerIcon = new Path2D("M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z");
        ctx.save(); // Save the previous state for translation and scale

        ctx.translate(width - avatarSize * 3 - headerMargin * 0.5, avatarSize / 2); // need to scale paths otherwise they're too large

        ctx.scale(pathScale, pathScale);
        ctx.fill(searchIcon);
        ctx.restore();
        ctx.save();
        ctx.translate(width - avatarSize * 2 - headerMargin * 0.5, avatarSize / 2);
        ctx.scale(pathScale, pathScale);
        ctx.fill(hamburgerIcon);
        ctx.restore();
      },

      drawPills(colors, font, headerHeight, opts) {
        opts = opts || {};
        const {
          ctx
        } = this;
        const categoriesSize = headerHeight * 2;
        const badgeHeight = categoriesSize * 0.25;
        const headerMargin = headerHeight * 0.2;
        ctx.beginPath();
        ctx.strokeStyle = colors.primary;
        ctx.lineWidth = 0.5;
        ctx.rect(headerMargin, headerHeight + headerMargin, categoriesSize, badgeHeight);
        ctx.stroke();
        const fontSize = Math.round(badgeHeight * 0.5);
        ctx.font = `${fontSize}px '${font}'`;
        ctx.fillStyle = colors.primary;
        ctx.fillText("all categories", headerMargin * 1.5, headerHeight + headerMargin * 1.4 + fontSize);
        const pathScale = badgeHeight / 1000; // caret icon

        const caretIcon = new Path2D("M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z");
        ctx.save();
        ctx.translate(categoriesSize - headerMargin / 4, headerHeight + headerMargin + badgeHeight / 4);
        ctx.scale(pathScale, pathScale);
        ctx.fill(caretIcon);
        ctx.restore();
        const text = opts.categories ? "Categories" : "Latest";
        const activeWidth = categoriesSize * (opts.categories ? 0.8 : 0.55);
        ctx.beginPath();
        ctx.fillStyle = colors.quaternary;
        ctx.rect(headerMargin * 2 + categoriesSize, headerHeight + headerMargin, activeWidth, badgeHeight);
        ctx.fill();
        ctx.font = `${fontSize}px '${font}'`;
        ctx.fillStyle = colors.secondary;
        let x = headerMargin * 3.0 + categoriesSize;
        ctx.fillText(text, x - headerMargin * 0.1, headerHeight + headerMargin * 1.5 + fontSize);
        ctx.fillStyle = colors.primary;
        x += categoriesSize * (opts.categories ? 0.8 : 0.6);
        ctx.fillText("New", x, headerHeight + headerMargin * 1.5 + fontSize);
        x += categoriesSize * 0.4;
        ctx.fillText("Unread", x, headerHeight + headerMargin * 1.5 + fontSize);
        x += categoriesSize * 0.6;
        ctx.fillText("Top", x, headerHeight + headerMargin * 1.5 + fontSize);
      }

    }, (_applyDecoratedDescriptor(_obj, "themeChanged", [_dec], Object.getOwnPropertyDescriptor(_obj, "themeChanged"), _obj)), _obj)), obj);
  }

  function loadImage(src) {
    if (!src) {
      return _rsvp.Promise.resolve();
    }

    const img = new Image();
    img.src = (0, _getUrl.default)(src);
    return new _rsvp.Promise(resolve => img.onload = () => resolve(img));
  }

  function parseColor(color) {
    const m = color.match(/^#([0-9a-f]{6})$/i);

    if (m) {
      const c = m[1];
      return [parseInt(c.slice(0, 2), 16), parseInt(c.slice(2, 4), 16), parseInt(c.slice(4, 6), 16)];
    }

    return [0, 0, 0];
  }

  function brightness(color) {
    return color[0] * 0.299 + color[1] * 0.587 + color[2] * 0.114;
  }

  function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    let max = Math.max(r, g, b),
        min = Math.min(r, g, b);
    let h,
        s,
        l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;

        case g:
          h = (b - r) / d + 2;
          break;

        case b:
          h = (r - g) / d + 4;
          break;
      }

      h /= 6;
    }

    return [h, s, l];
  }

  function hue2rgb(p, q, t) {
    if (t < 0) {
      t += 1;
    }

    if (t > 1) {
      t -= 1;
    }

    if (t < 1 / 6) {
      return p + (q - p) * 6 * t;
    }

    if (t < 1 / 2) {
      return q;
    }

    if (t < 2 / 3) {
      return p + (q - p) * (2 / 3 - t) * 6;
    }

    return p;
  }

  function hslToRgb(h, s, l) {
    let r, g, b;

    if (s === 0) {
      r = g = b = l; // achromatic
    } else {
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }

    return [r * 255, g * 255, b * 255];
  }

  function lighten(color, percent) {
    const hsl = rgbToHsl(color[0], color[1], color[2]);
    const scale = percent / 100.0;
    const diff = scale > 0 ? 1.0 - hsl[2] : hsl[2];
    hsl[2] = hsl[2] + diff * scale;
    color = hslToRgb(hsl[0], hsl[1], hsl[2]);
    return "#" + (0 | (1 << 8) + color[0]).toString(16).slice(1) + (0 | (1 << 8) + color[1]).toString(16).slice(1) + (0 | (1 << 8) + color[2]).toString(16).slice(1);
  }

  function chooseBrighter(primary, secondary) {
    const primaryCol = parseColor(primary);
    const secondaryCol = parseColor(secondary);
    return brightness(primaryCol) < brightness(secondaryCol) ? secondary : primary;
  }

  function chooseDarker(primary, secondary) {
    if (chooseBrighter(primary, secondary) === primary) {
      return secondary;
    } else {
      return primary;
    }
  }

  function darkLightDiff(adjusted, comparison, lightness, darkness) {
    const adjustedCol = parseColor(adjusted);
    const comparisonCol = parseColor(comparison);
    return lighten(adjustedCol, brightness(adjustedCol) < brightness(comparisonCol) ? lightness : darkness);
  }

  function drawHeader(ctx, colors, width, headerHeight) {
    ctx.save();
    ctx.beginPath();
    ctx.rect(0, 0, width, headerHeight);
    ctx.fillStyle = colors.header_background;
    ctx.shadowColor = "rgba(0, 0, 0, 0.25)";
    ctx.shadowBlur = 2;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 2;
    ctx.fill();
    ctx.restore();
  }
});
define("wizard/mixins/valid-state", ["exports", "discourse-common/utils/decorators"], function (_exports, _decorators) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.States = void 0;

  var _dec, _dec2, _dec3, _obj, _init, _init2, _init3;

  0; //eaimeta@70e063a35619d71f0,"discourse-common/utils/decorators"eaimeta@70e063a35619d71f

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  const States = {
    UNCHECKED: 0,
    INVALID: 1,
    VALID: 2
  };
  _exports.States = States;

  var _default = (_dec = (0, _decorators.default)("_validState"), _dec2 = (0, _decorators.default)("_validState"), _dec3 = (0, _decorators.default)("_validState"), (_obj = {
    _validState: null,
    errorDescription: null,

    init() {
      this._super(...arguments);

      this.set("_validState", States.UNCHECKED);
    },

    valid: state => state === States.VALID,
    invalid: state => state === States.INVALID,
    unchecked: state => state === States.UNCHECKED,

    setValid(valid, description) {
      this.set("_validState", valid ? States.VALID : States.INVALID);

      if (!valid && description && description.length) {
        this.set("errorDescription", description);
      } else {
        this.set("errorDescription", null);
      }
    }

  }, (_applyDecoratedDescriptor(_obj, "valid", [_dec], (_init = Object.getOwnPropertyDescriptor(_obj, "valid"), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function () {
      return _init;
    }
  }), _obj), _applyDecoratedDescriptor(_obj, "invalid", [_dec2], (_init2 = Object.getOwnPropertyDescriptor(_obj, "invalid"), _init2 = _init2 ? _init2.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function () {
      return _init2;
    }
  }), _obj), _applyDecoratedDescriptor(_obj, "unchecked", [_dec3], (_init3 = Object.getOwnPropertyDescriptor(_obj, "unchecked"), _init3 = _init3 ? _init3.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function () {
      return _init3;
    }
  }), _obj)), _obj));

  _exports.default = _default;
});
define("wizard/models/step", ["exports", "@ember/object", "wizard/mixins/valid-state", "discourse/lib/ajax", "discourse-common/utils/decorators"], function (_exports, _object, _validState, _ajax, _decorators) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _obj;

  0; //eaimeta@70e063a35619d71f0,"@ember/object",0,"wizard/mixins/valid-state",0,"discourse/lib/ajax",0,"discourse-common/utils/decorators"eaimeta@70e063a35619d71f

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  var _default = _object.default.extend(_validState.default, (_dec = (0, _decorators.default)("index"), _dec2 = (0, _decorators.default)("fields.[]"), (_obj = {
    id: null,

    displayIndex(index) {
      return index + 1;
    },

    fieldsById(fields) {
      const lookup = {};
      fields.forEach(field => lookup[field.get("id")] = field);
      return lookup;
    },

    validate() {
      let allValid = true;
      const result = {
        warnings: []
      };
      this.fields.forEach(field => {
        allValid = allValid && field.check();
        const warning = field.get("warning");

        if (warning) {
          result.warnings.push(warning);
        }
      });
      this.setValid(allValid);
      return result;
    },

    fieldError(id, description) {
      const field = this.fields.findBy("id", id);

      if (field) {
        field.setValid(false, description);
      }
    },

    save() {
      const fields = {};
      this.fields.forEach(f => fields[f.id] = f.value);
      return (0, _ajax.ajax)({
        url: `/wizard/steps/${this.id}`,
        type: "PUT",
        data: {
          fields
        }
      }).catch(error => {
        error.jqXHR.responseJSON.errors.forEach(err => this.fieldError(err.field, err.description));
      });
    }

  }, (_applyDecoratedDescriptor(_obj, "displayIndex", [_dec], Object.getOwnPropertyDescriptor(_obj, "displayIndex"), _obj), _applyDecoratedDescriptor(_obj, "fieldsById", [_dec2], Object.getOwnPropertyDescriptor(_obj, "fieldsById"), _obj)), _obj)));

  _exports.default = _default;
});
define("wizard/models/wizard-field", ["exports", "@ember/object", "wizard/mixins/valid-state"], function (_exports, _object, _validState) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/object",0,"wizard/mixins/valid-state"eaimeta@70e063a35619d71f

  var _default = _object.default.extend(_validState.default, {
    id: null,
    type: null,
    value: null,
    required: null,
    warning: null,

    check() {
      if (!this.required) {
        this.setValid(true);
        return true;
      }

      const val = this.value;
      const valid = val && val.length > 0;
      this.setValid(valid);
      return valid;
    }

  });

  _exports.default = _default;
});
define("wizard/models/wizard", ["exports", "@ember/object", "@ember/object/evented", "wizard/models/step", "wizard/models/wizard-field", "discourse/lib/ajax", "@ember/object/computed"], function (_exports, _object, _evented, _step, _wizardField, _ajax, _computed) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.findWizard = findWizard;
  0; //eaimeta@70e063a35619d71f0,"@ember/object",0,"@ember/object/evented",0,"wizard/models/step",0,"wizard/models/wizard-field",0,"discourse/lib/ajax",0,"@ember/object/computed"eaimeta@70e063a35619d71f

  const Wizard = _object.default.extend(_evented.default, {
    totalSteps: (0, _computed.readOnly)("steps.length"),

    getTitle() {
      const titleStep = this.steps.findBy("id", "forum-title");

      if (!titleStep) {
        return;
      }

      return titleStep.get("fieldsById.title.value");
    },

    getLogoUrl() {
      const logoStep = this.steps.findBy("id", "logos");

      if (!logoStep) {
        return;
      }

      return logoStep.get("fieldsById.logo.value");
    },

    get currentColors() {
      const colorStep = this.steps.findBy("id", "styling");

      if (!colorStep) {
        return this.current_color_scheme;
      }

      const themeChoice = colorStep.fieldsById.color_scheme;

      if (!themeChoice) {
        return;
      }

      return themeChoice.choices?.findBy("id", themeChoice.value)?.data.colors;
    },

    get font() {
      const fontChoice = this.steps.findBy("id", "styling")?.fieldsById?.body_font;
      return fontChoice.choices?.findBy("id", fontChoice.value)?.label;
    },

    get headingFont() {
      const fontChoice = this.steps.findBy("id", "styling")?.fieldsById?.heading_font;
      return fontChoice.choices?.findBy("id", fontChoice.value)?.label;
    }

  });

  function findWizard() {
    return (0, _ajax.ajax)({
      url: "/wizard.json"
    }).then(_ref => {
      let {
        wizard
      } = _ref;
      wizard.steps = wizard.steps.map(step => {
        const stepObj = _step.default.create(step);

        stepObj.fields = stepObj.fields.map(f => _wizardField.default.create(f));
        return stepObj;
      });
      return Wizard.create(wizard);
    });
  }
});
define("wizard/routes/wizard-index", ["exports", "discourse/routes/discourse"], function (_exports, _discourse) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"discourse/routes/discourse"eaimeta@70e063a35619d71f

  var _default = _discourse.default.extend({
    beforeModel() {
      const appModel = this.modelFor("wizard");
      this.replaceWith("wizard.step", appModel.start);
    }

  });

  _exports.default = _default;
});
define("wizard/routes/wizard-route-map", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f

  function _default() {
    this.route("wizard", function () {
      this.route("step", {
        path: "/steps/:step_id"
      });
    });
  }
});
define("wizard/routes/wizard-step", ["exports", "discourse/routes/discourse"], function (_exports, _discourse) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"discourse/routes/discourse"eaimeta@70e063a35619d71f

  var _default = _discourse.default.extend({
    model(params) {
      const allSteps = this.modelFor("wizard").steps;
      const step = allSteps.findBy("id", params.step_id);
      return step || allSteps[0];
    },

    setupController(controller, step) {
      const wizard = this.modelFor("wizard");
      this.controllerFor("wizard").set("currentStepId", step.id);
      controller.setProperties({
        step,
        wizard
      });
    }

  });

  _exports.default = _default;
});
define("wizard/routes/wizard", ["exports", "@ember/routing/route", "wizard/models/wizard"], function (_exports, _route, _wizard) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"wizard/models/wizard"eaimeta@70e063a35619d71f

  var _default = _route.default.extend({
    model() {
      return (0, _wizard.findWizard)();
    },

    activate() {
      document.body.classList.add("wizard");
      this.controllerFor("application").setProperties({
        showTop: false,
        showFooter: false
      });
    },

    deactivate() {
      document.body.classList.remove("wizard");
      this.controllerFor("application").set("showTop", true);
    }

  });

  _exports.default = _default;
});
define("wizard/templates/components/discourse-logo", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 385 104">
    <g id="discourse-logo-large" fill="none" fill-rule="nonzero">
      <path class="logo-contour" fill="var(--primary)"
        d="M117.4 22.22c1.649399-.0222812 3.233299.6446239 4.37 1.84 1.192379 1.1784439 1.850092 2.7938161 1.82 4.47.02983 1.6575188-.620685 3.2548933-1.8 4.42-1.119242 1.1834351-2.681214 1.8466391-4.31 1.83-1.662331.023056-3.258247-.6515814-4.4-1.86-1.195146-1.1971019-1.852129-2.8287301-1.82-4.52-.000018-3.3998017 2.750216-6.1589796 6.15-6.17l-.01-.01zm-4.84 21.05h9.68v40.36h-9.68V43.27zm42.1 6.39l-6 6C146.22 53.22 144 52 142 52c-.902316-.0524313-1.79724.1897247-2.55.69-.573152.3850847-.91784 1.0295007-.92 1.72.003314.536265.210697 1.0511472.58 1.44.861614.7548917 1.836939 1.3691103 2.89 1.82l3.55 1.77c3.733333 1.8466667 6.3 3.7266667 7.7 5.64 3.339481 4.8109001 2.622713 11.3471474-1.68 15.32-2.52 2.2933333-5.896667 3.44-10.13 3.44-5.290881.1460857-10.315591-2.3176674-13.44-6.59l6-6.49c1.120876 1.3107131 2.47767 2.3995407 4 3.21 1.21567.7242383 2.587439 1.1460572 4 1.23 1.104873.0554814 2.195409-.2692091 3.09-.92.709238-.481083 1.144441-1.2733748 1.17-2.13 0-1.4933333-1.406667-2.9466667-4.22-4.36l-3.26-1.63c-6.24-3.1466667-9.36-7.0833333-9.36-11.81-.023382-2.9974288 1.266494-5.8548879 3.53-7.82 2.467571-2.2051994 5.69282-3.3698724 9-3.25 5.010194-.0274064 9.731027 2.3441612 12.7 6.38h.01zm45.1 2.41l-8.06 4.43c-1.254605-1.396184-2.782926-2.5194486-4.49-3.3-1.65594-.6457398-3.423024-.9583778-5.2-.92-3.245832-.1417919-6.412693 1.0255155-8.79 3.24-2.246347 2.1649992-3.467702 5.1820368-3.36 8.3-.097501 3.0024572 1.075175 5.9069195 3.23 8 2.288229 2.1569486 5.347819 3.3029432 8.49 3.18 4.333333 0 7.706667-1.4766667 10.12-4.43l7.64 5.23c-4.14 5.38-9.98 8.07-17.52 8.07-6.786667 0-12.1-2-15.94-6-4.48358-4.5067211-6.564271-10.8726791-5.60785-17.1574451C161.22857 54.4277889 165.108765 48.968963 170.73 46c3.46735-1.8431696 7.343542-2.7821229 11.27-2.73 3.572088-.0575569 7.107523.7269532 10.32 2.29 2.995764 1.4982625 5.557329 3.739632 7.44 6.51zm23.85-8.8c3.604029-.010417 7.146863.9313491 10.27 2.73 6.327234 3.5564862 10.231011 10.261796 10.2 17.52.015895 3.5831575-.919258 7.106371-2.71 10.21-1.735583 3.1031601-4.283385 5.6751605-7.37 7.44-3.142134 1.7910684-6.703421 2.7158986-10.32 2.68-5.33854.0803277-10.470647-2.0601629-14.17-5.91-3.845791-3.7732443-5.968786-8.9631898-5.87-14.35-.050183-11.1185605 8.882044-20.1937022 20-20.32h-.03zm.16 9.12c-2.835339-.0656442-5.565196 1.0757341-7.51 3.14-2.022565 2.1625471-3.101902 5.0407776-3 8-.123784 3.0105402.955639 5.946572 3 8.16 1.941671 2.0665463 4.675583 3.202339 7.51 3.12 2.859128.0777168 5.61469-1.0725573 7.57-3.16 2.041067-2.199383 3.120812-5.1218929 3-8.12.116275-2.9824439-.963763-5.8877463-3-8.07-1.971249-2.0543004-4.724691-3.1709538-7.57-3.07zM250 44.27h9.79v18.58c-.125272 2.5360436.124076 5.0766997.74 7.54.433835 1.3191993 1.273923 2.467319 2.4 3.28 1.199326.8094698 2.623894 1.2189893 4.07 1.17 1.455597.0478904 2.890629-.3536395 4.11-1.15 1.176822-.8333654 2.056319-2.0212119 2.51-3.39.4-1.1133333.6-3.49.6-7.13v-18.9h9.68v16.35c0 6.74-.533333 11.35-1.6 13.83-1.155092 2.8668191-3.162099 5.3101316-5.75 7-2.915931 1.72144-6.266549 2.5651706-9.65 2.43-4.233333 0-7.656667-.9466667-10.27-2.84-2.656958-1.9585935-4.593682-4.7388994-5.51-7.91-.746667-2.36-1.12-6.6266667-1.12-12.8V44.27zm40.31 0h8.3v4.86c.767489-1.7562415 2.006682-3.2654259 3.58-4.36 1.442665-.9779714 3.147113-1.4973227 4.89-1.49 1.372409.0285016 2.720114.3705587 3.94 1l-3 8.34c-.858779-.4874025-1.815195-.7777428-2.8-.85-1.493333 0-2.753333.9233333-3.78 2.77-1.026667 1.8466667-1.54 5.4633333-1.54 10.85v17.47h-9.61l.02-38.59zm48.12 5.39l-6 6c-2.433333-2.44-4.643333-3.66-6.63-3.66-.902316-.0524313-1.79724.1897247-2.55.69-.573152.3850847-.91784 1.0295007-.92 1.72.003314.536265.210697 1.0511472.58 1.44.86418.7436068 1.839282 1.3475632 2.89 1.79l3.55 1.77c3.733333 1.8466667 6.3 3.7266667 7.7 5.64 3.334996 4.8120386 2.618581 11.3450638-1.68 15.32-2.52 2.2933333-5.896667 3.44-10.13 3.44-5.306684.1570903-10.34968-2.3120323-13.48-6.6l6-6.49c1.120544 1.311055 2.477408 2.3999384 4 3.21 1.234508.7295857 2.627813 1.1482637 4.06 1.22 1.104873.0554814 2.195409-.2692091 3.09-.92.665094-.487764 1.067432-1.2555276 1.09-2.08 0-1.4933333-1.406667-2.9466667-4.22-4.36l-3.26-1.63c-6.24-3.1466667-9.36-7.0833333-9.36-11.81-.023382-2.9974288 1.266494-5.8548879 3.53-7.82 2.468114-2.2042903 5.692983-3.3688266 9-3.25 5.010194-.0274064 9.731027 2.3441612 12.7 6.38h.04zm45.99 16.7h-31.1c.344633 2.5519358 1.628201 4.8837517 3.6 6.54 2.119278 1.6772588 4.769524 2.5393871 7.47 2.43 3.495035.0528887 6.861918-1.3147949 9.33-3.79l8.16 3.83c-1.849704 2.7229701-4.366447 4.9264112-7.31 6.4-3.168167 1.4515868-6.626273 2.1596264-10.11 2.07-6.053333 0-10.983333-1.91-14.79-5.73-3.778418-3.794868-5.828939-8.9772248-5.67-14.33-.169883-5.4590569 1.883549-10.7532295 5.69-14.67 3.730211-3.86226 8.912541-5.978015 14.28-5.83 6.073333 0 11.016667 1.9433333 14.83 5.83s5.716667 9.0233333 5.71 15.41l-.09 1.84zm-9.68-7.63c-.614521-2.121145-1.933733-3.9694522-3.74-5.24-1.914891-1.3466635-4.209472-2.0472991-6.55-2-2.555466-.0480087-5.055132.7500564-7.11 2.27-1.575496 1.3502917-2.794648 3.0674061-3.55 5l20.95-.03zM51.87 0C23.71 0 0 22.83 0 51v52.81l51.86-.05c28.16 0 51-23.71 51-51.87C102.86 23.73 80 0 51.87 0z">
      </path>
      <path fill="#FFF9AE"
        d="M52.37 19.74c-11.1380058.0065739-21.451097 5.8725864-27.1495582 15.4424743C19.5219805 44.7523623 19.2787009 56.6145192 24.58 66.41l-5.72 18.4 20.54-4.64c11.7619991 5.29926 25.5640682 2.9191757 34.8718647-6.0134445 9.3077965-8.9326201 12.2534008-22.6251484 7.4422692-34.5951021C76.9030023 27.5914997 65.3006488 19.7462906 52.4 19.74h-.03z">
      </path>
      <path fill="#00AEEF"
        d="M77.0874282 70.9138623C68.1087341 82.2404672 52.5895354 86.0314364 39.4 80.12l-20.54 4.7 20.91-2.47c13.8618885 8.120188 31.6101861 4.5474373 41.2505109-8.3037707C90.6608357 61.1950214 89.1246004 43.1559917 77.45 32.12c8.7654246 11.4924434 8.6161222 27.4672575-.3625718 38.7938623z">
      </path>
      <path fill="#00A94F"
        d="M75.3191226 64.9088434C67.572355 77.1106513 52.5344195 82.5013605 38.8 78l-19.94 6.82 20.54-4.65c14.6285181 6.6078894 31.8869319 1.1988304 40.1270438-12.5764482C87.7671557 53.8182732 84.370682 36.05385 71.63 26.29c9.9167741 10.5144718 11.4358902 26.4170355 3.6891226 38.6188434z">
      </path>
      <path fill="#F15D22"
        d="M26.47 67.11c-5.7247169-13.7992006-1.0069753-29.722128 11.3108878-38.1755635C50.0987509 20.4810011 66.6529755 21.8055203 77.47 32.11c-10.0181769-13.1470907-28.4736729-16.3561915-42.3417564-7.3625203C21.26016 33.7411508 16.6624984 51.9005882 24.58 66.41l-5.72 18.4 7.61-17.7z">
      </path>
      <path fill="#D0232B"
        d="M24.58 66.41c-7.1032817-13.1205259-4.0652056-29.4212778 7.2876929-39.1020065C43.2205913 17.6272648 59.7966078 17.2028861 71.63 26.29c-11.3513195-11.9524832-29.9818586-13.1756566-42.7984647-2.8098996C16.0149293 33.8458575 13.3153477 52.3203102 22.63 65.92l-3.76 18.9 5.71-18.41z">
      </path>
    </g>
  </svg>
  
  */
  {
    "id": "bA+wzBrf",
    "block": "[[[10,\"svg\"],[14,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[14,\"viewBox\",\"0 0 385 104\"],[12],[1,\"\\n  \"],[10,\"g\"],[14,1,\"discourse-logo-large\"],[14,\"fill\",\"none\"],[14,\"fill-rule\",\"nonzero\"],[12],[1,\"\\n    \"],[10,\"path\"],[14,0,\"logo-contour\"],[14,\"fill\",\"var(--primary)\"],[14,\"d\",\"M117.4 22.22c1.649399-.0222812 3.233299.6446239 4.37 1.84 1.192379 1.1784439 1.850092 2.7938161 1.82 4.47.02983 1.6575188-.620685 3.2548933-1.8 4.42-1.119242 1.1834351-2.681214 1.8466391-4.31 1.83-1.662331.023056-3.258247-.6515814-4.4-1.86-1.195146-1.1971019-1.852129-2.8287301-1.82-4.52-.000018-3.3998017 2.750216-6.1589796 6.15-6.17l-.01-.01zm-4.84 21.05h9.68v40.36h-9.68V43.27zm42.1 6.39l-6 6C146.22 53.22 144 52 142 52c-.902316-.0524313-1.79724.1897247-2.55.69-.573152.3850847-.91784 1.0295007-.92 1.72.003314.536265.210697 1.0511472.58 1.44.861614.7548917 1.836939 1.3691103 2.89 1.82l3.55 1.77c3.733333 1.8466667 6.3 3.7266667 7.7 5.64 3.339481 4.8109001 2.622713 11.3471474-1.68 15.32-2.52 2.2933333-5.896667 3.44-10.13 3.44-5.290881.1460857-10.315591-2.3176674-13.44-6.59l6-6.49c1.120876 1.3107131 2.47767 2.3995407 4 3.21 1.21567.7242383 2.587439 1.1460572 4 1.23 1.104873.0554814 2.195409-.2692091 3.09-.92.709238-.481083 1.144441-1.2733748 1.17-2.13 0-1.4933333-1.406667-2.9466667-4.22-4.36l-3.26-1.63c-6.24-3.1466667-9.36-7.0833333-9.36-11.81-.023382-2.9974288 1.266494-5.8548879 3.53-7.82 2.467571-2.2051994 5.69282-3.3698724 9-3.25 5.010194-.0274064 9.731027 2.3441612 12.7 6.38h.01zm45.1 2.41l-8.06 4.43c-1.254605-1.396184-2.782926-2.5194486-4.49-3.3-1.65594-.6457398-3.423024-.9583778-5.2-.92-3.245832-.1417919-6.412693 1.0255155-8.79 3.24-2.246347 2.1649992-3.467702 5.1820368-3.36 8.3-.097501 3.0024572 1.075175 5.9069195 3.23 8 2.288229 2.1569486 5.347819 3.3029432 8.49 3.18 4.333333 0 7.706667-1.4766667 10.12-4.43l7.64 5.23c-4.14 5.38-9.98 8.07-17.52 8.07-6.786667 0-12.1-2-15.94-6-4.48358-4.5067211-6.564271-10.8726791-5.60785-17.1574451C161.22857 54.4277889 165.108765 48.968963 170.73 46c3.46735-1.8431696 7.343542-2.7821229 11.27-2.73 3.572088-.0575569 7.107523.7269532 10.32 2.29 2.995764 1.4982625 5.557329 3.739632 7.44 6.51zm23.85-8.8c3.604029-.010417 7.146863.9313491 10.27 2.73 6.327234 3.5564862 10.231011 10.261796 10.2 17.52.015895 3.5831575-.919258 7.106371-2.71 10.21-1.735583 3.1031601-4.283385 5.6751605-7.37 7.44-3.142134 1.7910684-6.703421 2.7158986-10.32 2.68-5.33854.0803277-10.470647-2.0601629-14.17-5.91-3.845791-3.7732443-5.968786-8.9631898-5.87-14.35-.050183-11.1185605 8.882044-20.1937022 20-20.32h-.03zm.16 9.12c-2.835339-.0656442-5.565196 1.0757341-7.51 3.14-2.022565 2.1625471-3.101902 5.0407776-3 8-.123784 3.0105402.955639 5.946572 3 8.16 1.941671 2.0665463 4.675583 3.202339 7.51 3.12 2.859128.0777168 5.61469-1.0725573 7.57-3.16 2.041067-2.199383 3.120812-5.1218929 3-8.12.116275-2.9824439-.963763-5.8877463-3-8.07-1.971249-2.0543004-4.724691-3.1709538-7.57-3.07zM250 44.27h9.79v18.58c-.125272 2.5360436.124076 5.0766997.74 7.54.433835 1.3191993 1.273923 2.467319 2.4 3.28 1.199326.8094698 2.623894 1.2189893 4.07 1.17 1.455597.0478904 2.890629-.3536395 4.11-1.15 1.176822-.8333654 2.056319-2.0212119 2.51-3.39.4-1.1133333.6-3.49.6-7.13v-18.9h9.68v16.35c0 6.74-.533333 11.35-1.6 13.83-1.155092 2.8668191-3.162099 5.3101316-5.75 7-2.915931 1.72144-6.266549 2.5651706-9.65 2.43-4.233333 0-7.656667-.9466667-10.27-2.84-2.656958-1.9585935-4.593682-4.7388994-5.51-7.91-.746667-2.36-1.12-6.6266667-1.12-12.8V44.27zm40.31 0h8.3v4.86c.767489-1.7562415 2.006682-3.2654259 3.58-4.36 1.442665-.9779714 3.147113-1.4973227 4.89-1.49 1.372409.0285016 2.720114.3705587 3.94 1l-3 8.34c-.858779-.4874025-1.815195-.7777428-2.8-.85-1.493333 0-2.753333.9233333-3.78 2.77-1.026667 1.8466667-1.54 5.4633333-1.54 10.85v17.47h-9.61l.02-38.59zm48.12 5.39l-6 6c-2.433333-2.44-4.643333-3.66-6.63-3.66-.902316-.0524313-1.79724.1897247-2.55.69-.573152.3850847-.91784 1.0295007-.92 1.72.003314.536265.210697 1.0511472.58 1.44.86418.7436068 1.839282 1.3475632 2.89 1.79l3.55 1.77c3.733333 1.8466667 6.3 3.7266667 7.7 5.64 3.334996 4.8120386 2.618581 11.3450638-1.68 15.32-2.52 2.2933333-5.896667 3.44-10.13 3.44-5.306684.1570903-10.34968-2.3120323-13.48-6.6l6-6.49c1.120544 1.311055 2.477408 2.3999384 4 3.21 1.234508.7295857 2.627813 1.1482637 4.06 1.22 1.104873.0554814 2.195409-.2692091 3.09-.92.665094-.487764 1.067432-1.2555276 1.09-2.08 0-1.4933333-1.406667-2.9466667-4.22-4.36l-3.26-1.63c-6.24-3.1466667-9.36-7.0833333-9.36-11.81-.023382-2.9974288 1.266494-5.8548879 3.53-7.82 2.468114-2.2042903 5.692983-3.3688266 9-3.25 5.010194-.0274064 9.731027 2.3441612 12.7 6.38h.04zm45.99 16.7h-31.1c.344633 2.5519358 1.628201 4.8837517 3.6 6.54 2.119278 1.6772588 4.769524 2.5393871 7.47 2.43 3.495035.0528887 6.861918-1.3147949 9.33-3.79l8.16 3.83c-1.849704 2.7229701-4.366447 4.9264112-7.31 6.4-3.168167 1.4515868-6.626273 2.1596264-10.11 2.07-6.053333 0-10.983333-1.91-14.79-5.73-3.778418-3.794868-5.828939-8.9772248-5.67-14.33-.169883-5.4590569 1.883549-10.7532295 5.69-14.67 3.730211-3.86226 8.912541-5.978015 14.28-5.83 6.073333 0 11.016667 1.9433333 14.83 5.83s5.716667 9.0233333 5.71 15.41l-.09 1.84zm-9.68-7.63c-.614521-2.121145-1.933733-3.9694522-3.74-5.24-1.914891-1.3466635-4.209472-2.0472991-6.55-2-2.555466-.0480087-5.055132.7500564-7.11 2.27-1.575496 1.3502917-2.794648 3.0674061-3.55 5l20.95-.03zM51.87 0C23.71 0 0 22.83 0 51v52.81l51.86-.05c28.16 0 51-23.71 51-51.87C102.86 23.73 80 0 51.87 0z\"],[12],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"path\"],[14,\"fill\",\"#FFF9AE\"],[14,\"d\",\"M52.37 19.74c-11.1380058.0065739-21.451097 5.8725864-27.1495582 15.4424743C19.5219805 44.7523623 19.2787009 56.6145192 24.58 66.41l-5.72 18.4 20.54-4.64c11.7619991 5.29926 25.5640682 2.9191757 34.8718647-6.0134445 9.3077965-8.9326201 12.2534008-22.6251484 7.4422692-34.5951021C76.9030023 27.5914997 65.3006488 19.7462906 52.4 19.74h-.03z\"],[12],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"path\"],[14,\"fill\",\"#00AEEF\"],[14,\"d\",\"M77.0874282 70.9138623C68.1087341 82.2404672 52.5895354 86.0314364 39.4 80.12l-20.54 4.7 20.91-2.47c13.8618885 8.120188 31.6101861 4.5474373 41.2505109-8.3037707C90.6608357 61.1950214 89.1246004 43.1559917 77.45 32.12c8.7654246 11.4924434 8.6161222 27.4672575-.3625718 38.7938623z\"],[12],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"path\"],[14,\"fill\",\"#00A94F\"],[14,\"d\",\"M75.3191226 64.9088434C67.572355 77.1106513 52.5344195 82.5013605 38.8 78l-19.94 6.82 20.54-4.65c14.6285181 6.6078894 31.8869319 1.1988304 40.1270438-12.5764482C87.7671557 53.8182732 84.370682 36.05385 71.63 26.29c9.9167741 10.5144718 11.4358902 26.4170355 3.6891226 38.6188434z\"],[12],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"path\"],[14,\"fill\",\"#F15D22\"],[14,\"d\",\"M26.47 67.11c-5.7247169-13.7992006-1.0069753-29.722128 11.3108878-38.1755635C50.0987509 20.4810011 66.6529755 21.8055203 77.47 32.11c-10.0181769-13.1470907-28.4736729-16.3561915-42.3417564-7.3625203C21.26016 33.7411508 16.6624984 51.9005882 24.58 66.41l-5.72 18.4 7.61-17.7z\"],[12],[1,\"\\n    \"],[13],[1,\"\\n    \"],[10,\"path\"],[14,\"fill\",\"#D0232B\"],[14,\"d\",\"M24.58 66.41c-7.1032817-13.1205259-4.0652056-29.4212778 7.2876929-39.1020065C43.2205913 17.6272648 59.7966078 17.2028861 71.63 26.29c-11.3513195-11.9524832-29.9818586-13.1756566-42.7984647-2.8098996C16.0149293 33.8458575 13.3153477 52.3203102 22.63 65.92l-3.76 18.9 5.71-18.41z\"],[12],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[]]",
    "moduleName": "wizard/templates/components/discourse-logo.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("wizard/templates/components/illustration-finished", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 867.69 783.72">
    <defs>
      {{! template-lint-disable no-forbidden-elements }}
      <style>.cls-3{fill:#f9000a}.cls-4{fill:#fff9a3}.cls-5,.cls-7{fill:#ff5d10}.cls-10{fill:#00aff4}.cls-12,.cls-13{fill:#17b5ef}.cls-14,.cls-15,.cls-16{stroke-linecap:round;stroke-linejoin:round}.cls-10,.cls-13,.cls-14,.cls-7{fill-rule:evenodd}.cls-15{stroke:#241f20;stroke-width:7px}.cls-14,.cls-16{stroke-width:8.75px}.cls-14,.cls-15,.cls-16{fill:none}.cls-14,.cls-16{stroke:var(--primary)}</style>
    </defs>
    <path class="cls-4" d="m250.9 343.35-4.11 5.73-8.45 11.62-8.45 11.71c-2.83 3.9-5.63 7.82-8.42 11.75-11.21 15.71-22.19 31.46-32.68 47.38s-20.52 31.86-29.8 47.95-17.84 32.22-25.2 48.44a290.69 290.69 0 0 0-17.2 48.5c-1.97 7.78-3.42 15.67-4.35 23.64-.85 7.55-1.09 15.16-.73 22.75.22 3.7.61 7.37 1.18 11 .55 3.61 1.3 7.19 2.26 10.72.95 3.56 2.1 7.06 3.44 10.49 1.34 3.52 2.9 6.96 4.65 10.3 1.8 3.45 3.81 6.79 6 10 2.24 3.37 4.65 6.62 7.22 9.74 2.63 3.18 5.41 6.33 8.45 9.35 1.47 1.55 3.08 3 4.63 4.51s3.21 3 4.92 4.37c6.89 5.92 14.19 11.34 21.84 16.24l5.82 3.72c1 .63 1.92 1.22 2.9 1.8s1.94 1.19 2.92 1.74c3.93 2.28 7.94 4.36 12 6.33a137.711 137.711 0 0 0 80.59 12.41c9.5-1.42 18.85-3.7 27.94-6.8 18.43-6.21 36.11-15.7 52.57-27.15 8.25-5.79 16.21-11.99 23.85-18.57 7.68-6.6 15-13.61 22.17-20.85a440.37 440.37 0 0 0 39.45-46.79 517.599 517.599 0 0 0 33.32-51.57c5-8.93 9.82-18 14.28-27.19 2.25-4.6 4.41-9.24 6.47-13.91 1.02-2.34 2.02-4.67 3-7 1-2.33 1.95-4.74 2.78-7 1.06-2.7 4.11-4.02 6.81-2.96a5.255 5.255 0 0 1 3.05 6.56c-.07.2-.15.39-.25.57-2.41 4.77-4.74 9.34-7.23 13.93s-4.89 9.15-7.38 13.7c-5 9.08-10.09 18.09-15.35 27-10.49 17.84-21.49 35.38-33.24 52.46a607.873 607.873 0 0 1-37.78 49.47c-6.72 8-13.78 15.69-21.1 23.21s-15 14.72-23 21.66c-16 13.8-33.54 26.38-53 36.46-9.81 5.12-20.01 9.46-30.5 13a195.754 195.754 0 0 1-33 7.91c-11.43 1.69-23 2.33-34.55 1.91-5.82-.18-11.63-.66-17.42-1.39s-11.43-1.66-17.19-2.84-11.4-2.59-17-4.22c-1.41-.39-2.79-.83-4.19-1.25s-2.79-.85-4.17-1.31-2.78-.9-4.14-1.39l-4-1.48a261.426 261.426 0 0 1-31.74-14.34c-2.63-1.36-5.21-2.9-7.82-4.37s-5.17-3.08-7.71-4.77c-5.12-3.26-10.13-6.86-15.05-10.68a180.928 180.928 0 0 1-27.57-26.5 176.773 176.773 0 0 1-35.98-70.51 207.57 207.57 0 0 1-6.05-38.7c-.39-6.42-.52-12.8-.44-19.12s.4-12.59 1-18.77c2.15-24.78 7.46-48.32 14.44-70.71a450.273 450.273 0 0 1 25.7-64 545.833 545.833 0 0 1 33.25-58.25 592.503 592.503 0 0 1 39.03-53.25c3.51-4.22 7.06-8.4 10.65-12.55 3.65-4.1 7.28-8.22 11.06-12.23s7.59-8 11.52-11.95c2-2 4-3.92 6-5.88l3.14-3 6.37 32.57 8.17 9.07-62.16 64.24-7.06 11.02v8.68l9.86 8.06 11.04-1.44 69.56-67.47"/>
    <path class="cls-4" d="m254.4 338.41-.11.15-.44.64"/>
    <path class="cls-7" d="M243.47 302.71c24.02 24.56 46.57 23.76 46.57 23.76l-43.18 23.82s-19.1-1.96-36.12-13.27m-23.31-28.8c-9.67-17.17-11.76-31.16-11.76-31.16l20.92-41.14s7.14 21.76 23.48 43.23"/>
    <path class="cls-14" d="m340.28 299.04 1.51 68.19s-98.78 118.74-105.52 107.54-25-51.41-6.14-90.86c7.05-14.77 19.08-29.89 28.83-40.31m-82.29-72.34c-22.09 22.22-70.2 59.13-125.07 29.99 0 0 37.91-67.73 111.76-118l67.39-2.88"/>
    <circle class="cls-3" cx="97.24" cy="74.71" r="47.7"/>
    <circle class="cls-16" cx="671.5" cy="53.06" r="48.69"/>
    <circle cx="216.01" cy="24.19" r="17.86" fill="#00a850"/>
    <circle class="cls-5" cx="780.46" cy="206.63" r="17.86"/>
    <circle class="cls-12" cx="42.4" cy="175.74" r="19.83"/>
    <circle class="cls-12" cx="445.42" cy="296" r="17.23"/>
    <path d="M436.62 193.55c-28-113.32-114.55-102.81-115.8-102.65 39.08-27.81 85.48-46.35 138.46-43.1 7.37.45 13.16 6.47 13.32 13.85.48 22.95-2.93 74.37-35.98 131.9Z" stroke="#ff5d10" stroke-width="8.75" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" fill="#ff5d10"/>
    <path class="cls-14" d="M189.5 311.77c-12.17-18.68-13.82-34.76-13.82-34.76s51.69-119.47 145.11-186.08h0c1.28-.16 87.88-10.67 115.83 102.61-31 54-89 110.31-193.15 156.7-14.14-2.55-23.73-5.91-32.73-13.23"/>
    <path class="cls-16" d="M246.85 304.77c13.35 10.36 29.62 18.01 49.07 19.25m-98.13-89.74s7.17 21.06 22.85 42.79"/>
    <circle class="cls-5" cx="580.2" cy="150.96" r="14.67"/>
    <path class="cls-16" d="M418.38 146.55s31.13-28.06 50.3-87.23a6.354 6.354 0 0 0-4.06-8.01c-1.2-.39-2.5-.42-3.72-.07C418.32 63.11 375.28 103 375.28 103"/>
    <path d="M646.68 512.68v-.47c0-.15.28-.51.42-.77l-.42 1.24Z" fill-rule="evenodd" fill="#00a850"/>
    <path class="cls-13" d="M703.9 413.55c-2.12 6.62-2.34 12-3.1 18.86-.6 5.48-4.33 8.43-9.4 10.34-6.33 2.38-9.32 2.18-15.32-.74-6.22-3-10.24-4.39-16.92-1.13-12.24 6-3.16 12.56 1.17 21 1.27 2.45 2.57 5.68.85 8.16-3.09 4.5-8 2.61-12 2.27-9-.78-12.88 14.44-7.76 20.18 3 3.32 9 4.92 10.17 9.58 1.39 5.39-4.72 5.81-4.89 10.18-2.5 4.81-5.43 9.39-8.76 13.67-4.77 6.07-9.62 12-11.07 19.75-1.33 7.12.24 16.71.92 24.07.83 9 3.86 21.05 13.11 24.37 4.29 1.54 9.42 1.65 14 1.25 6.83-.59 8.49-5.1 14.18-7.39 2.61-1 8-.9 10.31 1.16s2.28 6.94 2.88 9.81c2.23 10.63 2.87 23.15.26 33.79-2.28 9.26-12.74 12.7-14.93 22.12s-2.25 17.26-1 26.84c.51 3.95 1.59 7.86 2 11.84a187.933 187.933 0 0 1-40.83 23.66c-23.68 9.82-50.45 17.28-77.68 17.28s-53.45-8.78-77.13-18.6c-24.54-10.18-44.61-27.47-63.11-46s-34.5-39.1-44.68-63.65c-9.81-23.68-12.46-49.36-12.46-76.59v-.52c1.53.55 2.99 1.28 4.35 2.18 7 5.1 7.89 15.55 12.68 22.51 5.42 7.89 13.61 11.9 23.13 13s14.69 4.59 22.13 10.78c6.29 5.23 14.27 15 23.53 14v-.41c1.46 2.91 5.82 3.08 7 7.25 1.52 5.29-.55 10.94-1.88 16-.67 2.6-2.42 6-2.28 8.7s2 4.39 2.82 6.84c1.9 5.37 2 10.57 5.67 15.51 4.59 6.13 10.06 8 17.55 8 6.6 0 9.64 2.11 12.41 8.37 4.81 10.87 5.06 22.7 9.5 33.61 2.68 6.56 7.95 10.74 11.09 17 2 3.92 5.18 14.72 11.22 13.31l10.75 3.72c.92-.37 1.62-1.13 1.92-2.08-6.67-5.11-16.1-13.74-10.94-23.45 2.62-4.93 8.71-8.21 12.3-12.34 4.16-4.79 5.19-10.95 8.49-16.09 2.59-4 4.92-6.3 9.45-7.23 4.29-.88 9.15-1.56 12.16-5.33 2.56-3.2 1.54-7.34 2.16-11.16.75-4.59 2.76-9.08 6.91-11.58 4.87-2.93 6.64-3.79 9.17-9.1 2.36-4.94 2.92-9.14-2-13.12-8.76-7.15-23.95-3.58-34-8.37-4.83-2.3-6.2-5.68-9-9.78-4.07-5.87-8-4.71-14.19-4.66-11.77.1-15.78-9.57-25.41-14-4.53-2.07-10.4-2.49-14.55-5.11-2.54-1.61-3.39-4.45-6.23-5.35-1.55-.5-4.18 0-5.76.34-4.23.83-7.36 3.82-11 5.82-2 1.1-6.05 4.49-8.31 4.14-.1-.42 0-.76-.06-1.18l-.83.83c-11.26-2.11-10.29-9.63-11.55-19-.6-4.4-1.65-8-5.8-9.41-2.57-.87-6.78-1.9-9.5-1.75v1.03c-5-2.26-10.47-3.65-15.17-6.39-6.35-3.69-5.66-7.37-6.94-13.86-1-5-1.88-9.49 3.21-12.39 4.69-2.69 11.07-1.48 15.24 1.77 4.39 3.43 4.53 9.07 8.57 12.82 10.74 10 11.72-5.32 12-12.83.45-10.31-2.09-22.11 3.79-31.32 3.31-5.19 9.94-7.89 14.62-11.69 4.15-3.5 8.7-6.49 13.55-8.92 4.67-2.28 8-4.5 9.32-9.8 1.13-4.6 1.52-8.37 7.19-10s9.19 3.3 14.28 3.4c3.71.07 9.63-2.07 11.41-5.29 3.11-5.64-2.26-10.65-4.77-15.35s-2.32-9.44-6.32-13.32c-2-2-3.88-3.27-5.29-5.59-1-1.66-.83-3.06-2.63-4.43-2.44-1.85-7-2.74-9.86-1.79-4 1.36-6.19 5.88-9.47 8.29s-7.82 3.61-9.92 7.17-1.85 6.83-5.83 9.28c-3.22 2-6 2-9.47.39-1.42-.68-3.17-2.8-4.56-3-1.75-.3-2.05.92-3.64 1.13-4.09.55-7.42-.8-8.78-5a9.625 9.625 0 0 1 1.77-8.78c2.06-2.67 3.52-4.8 5.38-7.64 3.49-5.31 11-5.3 17-5.59 6.63-.32 15 2.22 19.73-4.12 1.85-2.48 1.07-3.84 1.64-6.64.47-2.32 2.09-4.21 1.62-6.79-1.53-8.43-10.77-4.92-15.75-3.2-7.4 2.54-13-.27-16.45-6.89-1.76-3.34-4.54-5.12-7.26-7.07 11.68-10 24.27-18.83 38.73-24.82 1.1-.46 2.21-.91 3.32-1.34 1.35 1.69 2.97 3.14 4.79 4.29 5.95 2.94 15.83 0 20.95 3.93 2.71 2.07 3.35 6.29 6 8.86 3.36 3.25 5.31 3.36 9.82 4.11 9.7 1.62 15.14 12.61 10.85 21.52-1.81 3.75-6.67 7-6.22 11.14.29 2.71 3.8 8.83 5.83 10.76 3.75 3.54 7.27 3.92 9.38 9.51 1.8 4.76 4.82 7.92 10.43 3.73 8.37-6.25-5.73-19.26 5.75-25.58 4.47-2.45 10.24-1.74 15-4.29s8.63-6.64 13.32-9.41c5.84-3.46 10-8.68 8.18-16-1.88-7.65-7.88-8.3-3.67-16.8 2.66-5.36 5.87-9.28 4.08-15.53v-.06a252.73 252.73 0 0 1 36.23 12.06 289.75 289.75 0 0 1 36 17.54c-4.27 3.58-8.94 7-9.88 12.54-.86 5.11 5.16 7.5 4 13.19-1 5.18-4 10.15-5.18 15.31-1.09 4.57-1.26 10.61 2.77 13.72 4.27 3.31 9.53 0 14.4 1.65 5.23 1.82 7.62 10.39 14.12 8.94 8.46-1.89 2.62-11.92.84-16.46-2.34-6-4.13-10.08.74-14.9 3.77-3.74 7.57-5.59 12.92-4.54 1.03.2 2.01.59 2.89 1.16 1.14 1.34 2.23 2.69 3.3 4.08 2.28 5.13 1.65 12.58.19 17.13Z"/>
    <path class="cls-13" d="M746.79 521.14c-3.06-1.46-4.48-2.94-7.24-6.44s-5.91-4.79-10.3-4.09c-6.14 1-5 4.26-9 7.65-9.33 7.77-15.58-6.55-20.67-12.13-2.84-3.13-3.92-8.6-7.2-11.06-3-2.28-7.09-.74-10.52-.56-4.66.24-8.48.67-9.11-4.27-.6-4.67 1.85-8.79 4.53-12.32s4.55-5.89 9.11-5.75c4.11.15 8.15 1.14 11.87 2.9 3.56 1.72 8 3.79 9.24 7.63.88 2.63-1 8.1.83 10.14 2.28 2.5 8.25-.71 10.28-2.37 3.12-2.57 3.13-5.6 2.93-9.64-.17-3.25-.54-7 .37-10.25 1.22-4.39 3.43-4.33 7.38-5.32 2.77-.69 5.55-1.23 8.26-2 6.09 18.28 8.7 37.53 9.24 57.88Z"/>
    <path d="M651.56 502.02c-1.21-4.66-7.21-6.26-10.17-9.58-5.12-5.74-1.25-21 7.76-20.18 4 .34 8.94 2.23 12-2.27 1.72-2.48.42-5.71-.85-8.16-4.33-8.39-13.41-15-1.17-21 6.68-3.26 10.7-1.89 16.92 1.13 6 2.92 9 3.12 15.32.74 5.07-1.91 8.8-4.86 9.4-10.34.76-6.86 1-12.24 3.1-18.86 1.46-4.56 2.09-12-.17-17.12 13 16.81 21.84 37.05 30.12 57 1.33 3.24 2.55 6.51 3.66 9.81-2.71.77-5.49 1.31-8.26 2-4 1-6.16.93-7.38 5.32-.91 3.27-.54 7-.37 10.25.2 4 .19 7.07-2.93 9.64-2 1.66-8 4.87-10.28 2.37-1.86-2 0-7.51-.83-10.14-1.27-3.84-5.68-5.91-9.24-7.63a30.354 30.354 0 0 0-11.87-2.9c-4.56-.14-6.4 2.19-9.11 5.75s-5.13 7.65-4.53 12.32c.63 4.94 4.45 4.51 9.11 4.27 3.43-.18 7.49-1.72 10.52.56 3.28 2.46 4.36 7.93 7.2 11.06 5.09 5.58 11.34 19.9 20.67 12.13 4.08-3.39 2.9-6.67 9-7.65 4.39-.7 7.45.49 10.3 4.09s4.18 5 7.24 6.44c.07 2.8.11 5.61.11 8.46 0 27.23-4.55 51.93-14.36 75.61-10.18 24.54-21.32 48.62-39.81 67.12-7.58 7.6-15.67 14.66-24.23 21.14-.36-4-1.44-7.89-2-11.84-1.26-9.58-1.22-17.33 1-26.84s12.65-12.86 14.93-22.12c2.61-10.64 2-23.16-.26-33.79-.6-2.87-.58-7.74-2.88-9.81s-7.7-2.21-10.31-1.16c-5.69 2.29-7.35 6.8-14.18 7.39-4.55.4-9.68.29-14-1.25-9.25-3.32-12.28-15.42-13.11-24.37-.68-7.36-2.25-16.95-.92-24.07 1.45-7.78 6.3-13.68 11.07-19.75 3.33-4.28 6.26-8.86 8.76-13.67" fill="#00aff4"/>
    <path class="cls-15" d="M668.5 693.49c-.36-4-1.44-7.89-2-11.84-1.26-9.58-1.22-17.33 1-26.84s12.65-12.86 14.93-22.12c2.61-10.64 2-23.16-.26-33.79-.6-2.87-.58-7.74-2.88-9.81s-7.7-2.21-10.31-1.16c-5.69 2.29-7.35 6.8-14.18 7.39-4.55.4-9.68.29-14-1.25-9.25-3.32-12.28-15.42-13.11-24.37-.68-7.36-2.25-16.95-.92-24.07 1.45-7.78 6.3-13.68 11.07-19.75 3.33-4.28 6.26-8.86 8.76-13.67m90.91-48.94c-2.71.77-5.49 1.31-8.26 2-4 1-6.16.93-7.38 5.32-.91 3.27-.54 7-.37 10.25.2 4 .19 7.07-2.93 9.64-2 1.66-8 4.87-10.28 2.37-1.86-2 0-7.51-.83-10.14-1.27-3.84-5.68-5.91-9.24-7.63a30.354 30.354 0 0 0-11.87-2.9c-4.56-.14-6.4 2.19-9.11 5.75s-5.13 7.65-4.53 12.32c.63 4.94 4.45 4.51 9.11 4.27 3.43-.18 7.49-1.72 10.52.56 3.28 2.46 4.36 7.93 7.2 11.06 5.09 5.58 11.34 19.9 20.67 12.13 4.08-3.39 2.9-6.67 9-7.65 4.39-.7 7.45.49 10.3 4.09s4.18 5 7.24 6.44m-95.19-19.13c-1.21-4.66-7.21-6.26-10.17-9.58-5.12-5.74-1.25-21 7.76-20.18 4 .34 8.94 2.23 12-2.27 1.72-2.48.42-5.71-.85-8.16-4.33-8.39-13.41-15-1.17-21 6.68-3.26 10.7-1.89 16.92 1.13 6 2.92 9 3.12 15.32.74 5.07-1.91 8.8-4.86 9.4-10.34.76-6.86 1-12.24 3.1-18.86 1.46-4.56 2.09-12-.17-17.12"/>
    <path class="cls-10" d="M573.93 631.24c-2.53 5.31-4.3 6.17-9.17 9.1-4.15 2.5-6.16 7-6.91 11.58-.62 3.82.4 8-2.16 11.16-3 3.77-7.87 4.45-12.16 5.33-4.53.93-6.86 3.21-9.45 7.23-3.3 5.14-4.33 11.3-8.49 16.09-3.59 4.13-9.68 7.41-12.3 12.34-5.16 9.71 4.27 18.34 10.94 23.45-.3.95-1 1.71-1.92 2.08l-10.75-3.72c-6 1.41-9.26-9.39-11.22-13.31-3.14-6.28-8.41-10.46-11.09-17-4.44-10.91-4.69-22.74-9.5-33.61-2.77-6.26-5.81-8.35-12.41-8.37-7.49 0-13-1.92-17.55-8-3.7-4.94-3.77-10.14-5.67-15.51-.86-2.45-2.67-4.18-2.82-6.84s1.61-6.1 2.28-8.7c1.33-5.1 3.4-10.75 1.88-16-1.21-4.17-5.57-4.34-7-7.25v.26c-9.26.92-17.24-8.81-23.53-14-7.44-6.19-12.65-9.71-22.13-10.78s-17.71-5.09-23.13-13c-4.79-7-5.66-17.41-12.68-22.51-1.36-.9-2.82-1.63-4.35-2.18 0-27-.43-53.85 9.33-77.38 10.18-24.54 30.15-43 48.65-61.51 7.6-7.6 15.31-15.17 23.47-22.16 2.72 1.95 5.5 3.73 7.26 7.07 3.5 6.62 9.05 9.43 16.45 6.89 5-1.72 14.22-5.23 15.75 3.2.47 2.58-1.15 4.47-1.62 6.79-.57 2.8.21 4.16-1.64 6.64-4.74 6.34-13.1 3.8-19.73 4.12-6 .29-13.56.28-17 5.59-1.86 2.84-3.32 5-5.38 7.64-2 2.46-2.66 5.74-1.77 8.78 1.36 4.23 4.69 5.58 8.78 5 1.59-.21 1.89-1.43 3.64-1.13 1.39.23 3.14 2.35 4.56 3 3.42 1.64 6.25 1.59 9.47-.39 4-2.45 3.73-5.72 5.83-9.28s6.7-4.79 9.92-7.17 5.43-6.93 9.47-8.29c2.84-.95 7.42-.06 9.86 1.79 1.8 1.37 1.62 2.77 2.63 4.43 1.41 2.32 3.26 3.62 5.29 5.59 4 3.88 3.74 8.56 6.28 13.31s7.88 9.71 4.77 15.35c-1.78 3.22-7.7 5.36-11.41 5.29-5.09-.1-8.51-5-14.28-3.4s-6.06 5.38-7.19 10c-1.31 5.3-4.65 7.52-9.32 9.8-4.85 2.43-9.4 5.42-13.55 8.92-4.68 3.8-11.31 6.5-14.62 11.69-5.88 9.21-3.34 21-3.79 31.32-.33 7.51-1.31 22.8-12 12.83-4-3.75-4.18-9.39-8.57-12.82-4.17-3.25-10.55-4.46-15.24-1.77-5.09 2.9-4.18 7.41-3.21 12.39 1.28 6.49.59 10.17 6.94 13.86 4.7 2.74 10.19 4.13 15.17 6.39v-.83c2.72-.15 6.93.88 9.5 1.75 4.15 1.41 5.2 5 5.8 9.41 1.26 9.37.29 16.89 11.55 19l.83-.83c.07.42 0 .76.06 1.18 2.26.35 6.28-3 8.31-4.14 3.69-2 6.82-5 11-5.82 1.58-.32 4.21-.84 5.76-.34 2.84.9 3.69 3.74 6.23 5.35 4.15 2.62 10 3 14.55 5.11 9.63 4.38 13.64 14.05 25.41 14 6.17 0 10.12-1.21 14.19 4.66 2.84 4.1 4.21 7.48 9 9.78 10 4.79 25.22 1.22 34 8.37 4.82 3.99 4.26 8.19 1.9 13.13Z"/>
    <path class="cls-15" d="M434.06 368.05c2.72 1.95 5.5 3.73 7.26 7.07 3.5 6.62 9.05 9.43 16.45 6.89 5-1.72 14.22-5.23 15.75 3.2.47 2.58-1.15 4.47-1.62 6.79-.57 2.8.21 4.16-1.64 6.64-4.74 6.34-13.1 3.8-19.73 4.12-6 .29-13.56.28-17 5.59-1.86 2.84-3.32 5-5.38 7.64-2 2.46-2.66 5.74-1.77 8.78 1.36 4.23 4.69 5.58 8.78 5 1.59-.21 1.89-1.43 3.64-1.13 1.39.23 3.14 2.35 4.56 3 3.42 1.64 6.25 1.59 9.47-.39 4-2.45 3.73-5.72 5.83-9.28s6.7-4.79 9.92-7.17 5.43-6.93 9.47-8.29c2.84-.95 7.42-.06 9.86 1.79 1.8 1.37 1.62 2.77 2.63 4.43 1.41 2.32 3.26 3.62 5.29 5.59 4 3.88 3.74 8.56 6.28 13.31s7.88 9.71 4.77 15.35c-1.78 3.22-7.7 5.36-11.41 5.29-5.09-.1-8.51-5-14.28-3.4s-6.06 5.38-7.19 10c-1.31 5.3-4.65 7.52-9.32 9.8-4.85 2.43-9.4 5.42-13.55 8.92-4.68 3.8-11.31 6.5-14.62 11.69-5.88 9.21-3.34 21-3.79 31.32-.33 7.51-1.31 22.8-12 12.83-4-3.75-4.18-9.39-8.57-12.82-4.17-3.25-10.55-4.46-15.24-1.77-5.09 2.9-4.18 7.41-3.21 12.39 1.28 6.49.59 10.17 6.94 13.86 4.7 2.74 10.19 4.13 15.17 6.39v-.83c2.72-.15 6.93.88 9.5 1.75 4.15 1.41 5.2 5 5.8 9.41 1.26 9.37.29 16.89 11.55 19l.83-.83c.07.42 0 .76.06 1.18 2.26.35 6.28-3 8.31-4.14 3.69-2 6.82-5 11-5.82 1.58-.32 4.21-.84 5.76-.34 2.84.9 3.69 3.74 6.23 5.35 4.15 2.62 10 3 14.55 5.11 9.63 4.38 13.64 14.05 25.41 14 6.17 0 10.12-1.21 14.19 4.66 2.84 4.1 4.21 7.48 9 9.78 10 4.79 25.22 1.22 34 8.37 4.88 4 4.32 8.18 2 13.12-2.53 5.31-4.3 6.17-9.17 9.1-4.15 2.5-6.16 7-6.91 11.58-.62 3.82.4 8-2.16 11.16-3 3.77-7.87 4.45-12.16 5.33-4.53.93-6.86 3.21-9.45 7.23-3.3 5.14-4.33 11.3-8.49 16.09-3.59 4.13-9.68 7.41-12.3 12.34-5.16 9.71 4.27 18.34 10.94 23.45-.3.95-1 1.71-1.92 2.08l-10.75-3.72c-6 1.41-9.26-9.39-11.22-13.31-3.14-6.28-8.41-10.46-11.09-17-4.44-10.91-4.69-22.74-9.5-33.61-2.77-6.26-5.81-8.35-12.41-8.37-7.49 0-13-1.92-17.55-8-3.7-4.94-3.77-10.14-5.67-15.51-.86-2.45-2.67-4.18-2.82-6.84s1.61-6.1 2.28-8.7c1.33-5.1 3.4-10.75 1.88-16-1.21-4.17-5.57-4.34-7-7.25v.25c-9.26.92-17.24-8.81-23.53-14-7.44-6.19-12.65-9.71-22.13-10.78s-17.71-5.09-23.13-13c-4.79-7-5.66-17.41-12.68-22.51-1.36-.9-2.82-1.63-4.35-2.18"/>
    <path class="cls-10" d="M590.19 364.44c1.81 7.34-2.34 12.56-8.18 16-4.69 2.77-8.42 6.79-13.32 9.41s-10.54 1.84-15 4.29c-11.48 6.32 2.62 19.33-5.75 25.58-5.61 4.19-8.63 1-10.43-3.73-2.11-5.59-5.63-6-9.38-9.51-2-1.93-5.54-8.05-5.83-10.76-.45-4.13 4.41-7.39 6.22-11.14 4.29-8.91-1.15-19.9-10.85-21.52-4.51-.75-6.46-.86-9.82-4.11-2.64-2.57-3.28-6.79-6-8.86-5.12-3.93-15-1-20.95-3.93-1.82-1.15-3.44-2.6-4.79-4.29 22.8-9.07 47.92-15 73.88-15 13.69.08 27.32 1.83 40.59 5.19v.06c1.79 6.25-1.42 10.17-4.08 15.53-4.19 8.49 1.81 9.14 3.69 16.79Z"/>
    <path class="cls-15" d="M590.6 332.1c1.79 6.25-1.42 10.17-4.08 15.53-4.21 8.5 1.79 9.15 3.67 16.8 1.81 7.34-2.34 12.56-8.18 16-4.69 2.77-8.42 6.79-13.32 9.41s-10.54 1.84-15 4.29c-11.48 6.32 2.62 19.33-5.75 25.58-5.61 4.19-8.63 1-10.43-3.73-2.11-5.59-5.63-6-9.38-9.51-2-1.93-5.54-8.05-5.83-10.76-.45-4.13 4.41-7.39 6.22-11.14 4.29-8.91-1.15-19.9-10.85-21.52-4.51-.75-6.46-.86-9.82-4.11-2.64-2.57-3.28-6.79-6-8.86-5.12-3.93-15-1-20.95-3.93-1.82-1.15-3.44-2.6-4.79-4.29"/>
    <path d="M700.41 392.34c-.88-.57-1.86-.96-2.89-1.16-5.35-1.05-9.15.8-12.92 4.54-4.87 4.82-3.08 8.91-.74 14.9 1.78 4.54 7.62 14.57-.84 16.46-6.5 1.45-8.89-7.12-14.12-8.94-4.87-1.69-10.13 1.66-14.4-1.65-4-3.11-3.86-9.15-2.77-13.72 1.22-5.16 4.17-10.13 5.18-15.31 1.11-5.69-4.91-8.08-4-13.19.94-5.52 5.61-9 9.88-12.54" stroke="#241f20" stroke-width="7" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" fill="#00aff4"/>
    <path class="cls-14" d="m266.62 232.08-142.24 147c-5.59 5.77-5.45 14.98.33 20.57.74.72 1.55 1.35 2.42 1.9.37.22.74.43 1.14.63 5.59 2.86 12.39 1.8 16.84-2.63l152.68-150.49"/>
    <circle class="cls-16" cx="301.85" cy="535.64" r="14.93"/>
    <circle class="cls-3" cx="832.43" cy="371.31" r="35.26"/>
    <circle class="cls-16" cx="708.48" cy="279.06" r="14.73"/>
    <circle class="cls-16" cx="526.08" cy="262.4" r="15.33"/>
    <path class="cls-16" d="M143.49 90.62c25.57 22.85 41 41.29 37.29 46.1-5.21 6.78-46.6-16.26-92.44-51.46s-78.79-69.25-73.58-76c3.78-4.92 26.6 5.85 56.35 25.58"/>
    <path class="cls-7" d="M310.79 159.01c-29.43 0-53.28 23.86-53.27 53.29 0 29.43 23.86 53.28 53.29 53.27 29.42 0 53.27-23.86 53.27-53.28s-23.85-53.28-53.28-53.28Zm0 84.41c-17.19 0-31.13-13.94-31.13-31.13s13.94-31.13 31.13-31.13 31.13 13.94 31.13 31.13-13.94 31.13-31.13 31.13Z"/>
    <path class="cls-16" d="M170.81 280.35C146.2 297.7 35.57 384.48 5.27 561.06"/>
    <path d="M496.62 229.02c7 0 7-10.94 0-10.94s-7.05 10.94 0 10.94ZM257.48 554.3c7 0 7.05-10.94 0-10.94s-7.05 10.94 0 10.94Zm348.44-342.21c7 0 7-10.94 0-10.94s-7 10.94 0 10.94Zm0 43.18c7 0 7-10.94 0-10.94s-7 10.94 0 10.94ZM257.48 47.55c7 0 7.05-10.94 0-10.94s-7.05 10.94 0 10.94Zm-41.47 483.94c7 0 7-10.94 0-10.94s-7.05 10.94 0 10.94ZM209 86.74c7 0 7.05-10.94 0-10.94s-7 10.94 0 10.94ZM5.27 143.37c7 0 7.05-10.94 0-10.94s-7 10.94 0 10.94Z" fill="#241f20"/>
    <circle class="cls-16" cx="310.76" cy="212.28" r="31" transform="rotate(-80.78 310.775 212.283)"/>
    <path class="cls-16" d="M261.28 232.08s5.1 21.67 30.82 30.83M86.32 654.55c1.89 34 97.58 193.31 283.35 71.79M62.71 713.69c-21-36.73-37.27-123.1 14.16-215.91"/>
    <path class="cls-3" d="M61.26 43.4S78.53 27 81.27 31.97c5.68 10.3-9.68 13.88-9.68 13.88l-10.33-2.46Zm82.78 36.45s.96 10.11-6.5 19.4-7.57-6.43-7.57-6.43l14.07-12.97Z"/>
  </svg>
  
  */
  {
    "id": "Zre0+PuG",
    "block": "[[[10,\"svg\"],[14,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[14,1,\"Layer_1\"],[14,\"viewBox\",\"0 0 867.69 783.72\"],[12],[1,\"\\n  \"],[10,\"defs\"],[12],[1,\"\\n\"],[1,\"    \"],[10,\"style\"],[12],[1,\".cls-3{fill:#f9000a}.cls-4{fill:#fff9a3}.cls-5,.cls-7{fill:#ff5d10}.cls-10{fill:#00aff4}.cls-12,.cls-13{fill:#17b5ef}.cls-14,.cls-15,.cls-16{stroke-linecap:round;stroke-linejoin:round}.cls-10,.cls-13,.cls-14,.cls-7{fill-rule:evenodd}.cls-15{stroke:#241f20;stroke-width:7px}.cls-14,.cls-16{stroke-width:8.75px}.cls-14,.cls-15,.cls-16{fill:none}.cls-14,.cls-16{stroke:var(--primary)}\"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-4\"],[14,\"d\",\"m250.9 343.35-4.11 5.73-8.45 11.62-8.45 11.71c-2.83 3.9-5.63 7.82-8.42 11.75-11.21 15.71-22.19 31.46-32.68 47.38s-20.52 31.86-29.8 47.95-17.84 32.22-25.2 48.44a290.69 290.69 0 0 0-17.2 48.5c-1.97 7.78-3.42 15.67-4.35 23.64-.85 7.55-1.09 15.16-.73 22.75.22 3.7.61 7.37 1.18 11 .55 3.61 1.3 7.19 2.26 10.72.95 3.56 2.1 7.06 3.44 10.49 1.34 3.52 2.9 6.96 4.65 10.3 1.8 3.45 3.81 6.79 6 10 2.24 3.37 4.65 6.62 7.22 9.74 2.63 3.18 5.41 6.33 8.45 9.35 1.47 1.55 3.08 3 4.63 4.51s3.21 3 4.92 4.37c6.89 5.92 14.19 11.34 21.84 16.24l5.82 3.72c1 .63 1.92 1.22 2.9 1.8s1.94 1.19 2.92 1.74c3.93 2.28 7.94 4.36 12 6.33a137.711 137.711 0 0 0 80.59 12.41c9.5-1.42 18.85-3.7 27.94-6.8 18.43-6.21 36.11-15.7 52.57-27.15 8.25-5.79 16.21-11.99 23.85-18.57 7.68-6.6 15-13.61 22.17-20.85a440.37 440.37 0 0 0 39.45-46.79 517.599 517.599 0 0 0 33.32-51.57c5-8.93 9.82-18 14.28-27.19 2.25-4.6 4.41-9.24 6.47-13.91 1.02-2.34 2.02-4.67 3-7 1-2.33 1.95-4.74 2.78-7 1.06-2.7 4.11-4.02 6.81-2.96a5.255 5.255 0 0 1 3.05 6.56c-.07.2-.15.39-.25.57-2.41 4.77-4.74 9.34-7.23 13.93s-4.89 9.15-7.38 13.7c-5 9.08-10.09 18.09-15.35 27-10.49 17.84-21.49 35.38-33.24 52.46a607.873 607.873 0 0 1-37.78 49.47c-6.72 8-13.78 15.69-21.1 23.21s-15 14.72-23 21.66c-16 13.8-33.54 26.38-53 36.46-9.81 5.12-20.01 9.46-30.5 13a195.754 195.754 0 0 1-33 7.91c-11.43 1.69-23 2.33-34.55 1.91-5.82-.18-11.63-.66-17.42-1.39s-11.43-1.66-17.19-2.84-11.4-2.59-17-4.22c-1.41-.39-2.79-.83-4.19-1.25s-2.79-.85-4.17-1.31-2.78-.9-4.14-1.39l-4-1.48a261.426 261.426 0 0 1-31.74-14.34c-2.63-1.36-5.21-2.9-7.82-4.37s-5.17-3.08-7.71-4.77c-5.12-3.26-10.13-6.86-15.05-10.68a180.928 180.928 0 0 1-27.57-26.5 176.773 176.773 0 0 1-35.98-70.51 207.57 207.57 0 0 1-6.05-38.7c-.39-6.42-.52-12.8-.44-19.12s.4-12.59 1-18.77c2.15-24.78 7.46-48.32 14.44-70.71a450.273 450.273 0 0 1 25.7-64 545.833 545.833 0 0 1 33.25-58.25 592.503 592.503 0 0 1 39.03-53.25c3.51-4.22 7.06-8.4 10.65-12.55 3.65-4.1 7.28-8.22 11.06-12.23s7.59-8 11.52-11.95c2-2 4-3.92 6-5.88l3.14-3 6.37 32.57 8.17 9.07-62.16 64.24-7.06 11.02v8.68l9.86 8.06 11.04-1.44 69.56-67.47\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-4\"],[14,\"d\",\"m254.4 338.41-.11.15-.44.64\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-7\"],[14,\"d\",\"M243.47 302.71c24.02 24.56 46.57 23.76 46.57 23.76l-43.18 23.82s-19.1-1.96-36.12-13.27m-23.31-28.8c-9.67-17.17-11.76-31.16-11.76-31.16l20.92-41.14s7.14 21.76 23.48 43.23\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-14\"],[14,\"d\",\"m340.28 299.04 1.51 68.19s-98.78 118.74-105.52 107.54-25-51.41-6.14-90.86c7.05-14.77 19.08-29.89 28.83-40.31m-82.29-72.34c-22.09 22.22-70.2 59.13-125.07 29.99 0 0 37.91-67.73 111.76-118l67.39-2.88\"],[12],[13],[1,\"\\n  \"],[10,\"circle\"],[14,0,\"cls-3\"],[14,\"cx\",\"97.24\"],[14,\"cy\",\"74.71\"],[14,\"r\",\"47.7\"],[12],[13],[1,\"\\n  \"],[10,\"circle\"],[14,0,\"cls-16\"],[14,\"cx\",\"671.5\"],[14,\"cy\",\"53.06\"],[14,\"r\",\"48.69\"],[12],[13],[1,\"\\n  \"],[10,\"circle\"],[14,\"cx\",\"216.01\"],[14,\"cy\",\"24.19\"],[14,\"r\",\"17.86\"],[14,\"fill\",\"#00a850\"],[12],[13],[1,\"\\n  \"],[10,\"circle\"],[14,0,\"cls-5\"],[14,\"cx\",\"780.46\"],[14,\"cy\",\"206.63\"],[14,\"r\",\"17.86\"],[12],[13],[1,\"\\n  \"],[10,\"circle\"],[14,0,\"cls-12\"],[14,\"cx\",\"42.4\"],[14,\"cy\",\"175.74\"],[14,\"r\",\"19.83\"],[12],[13],[1,\"\\n  \"],[10,\"circle\"],[14,0,\"cls-12\"],[14,\"cx\",\"445.42\"],[14,\"cy\",\"296\"],[14,\"r\",\"17.23\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,\"d\",\"M436.62 193.55c-28-113.32-114.55-102.81-115.8-102.65 39.08-27.81 85.48-46.35 138.46-43.1 7.37.45 13.16 6.47 13.32 13.85.48 22.95-2.93 74.37-35.98 131.9Z\"],[14,\"stroke\",\"#ff5d10\"],[14,\"stroke-width\",\"8.75\"],[14,\"fill-rule\",\"evenodd\"],[14,\"stroke-linecap\",\"round\"],[14,\"stroke-linejoin\",\"round\"],[14,\"fill\",\"#ff5d10\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-14\"],[14,\"d\",\"M189.5 311.77c-12.17-18.68-13.82-34.76-13.82-34.76s51.69-119.47 145.11-186.08h0c1.28-.16 87.88-10.67 115.83 102.61-31 54-89 110.31-193.15 156.7-14.14-2.55-23.73-5.91-32.73-13.23\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-16\"],[14,\"d\",\"M246.85 304.77c13.35 10.36 29.62 18.01 49.07 19.25m-98.13-89.74s7.17 21.06 22.85 42.79\"],[12],[13],[1,\"\\n  \"],[10,\"circle\"],[14,0,\"cls-5\"],[14,\"cx\",\"580.2\"],[14,\"cy\",\"150.96\"],[14,\"r\",\"14.67\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-16\"],[14,\"d\",\"M418.38 146.55s31.13-28.06 50.3-87.23a6.354 6.354 0 0 0-4.06-8.01c-1.2-.39-2.5-.42-3.72-.07C418.32 63.11 375.28 103 375.28 103\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,\"d\",\"M646.68 512.68v-.47c0-.15.28-.51.42-.77l-.42 1.24Z\"],[14,\"fill-rule\",\"evenodd\"],[14,\"fill\",\"#00a850\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-13\"],[14,\"d\",\"M703.9 413.55c-2.12 6.62-2.34 12-3.1 18.86-.6 5.48-4.33 8.43-9.4 10.34-6.33 2.38-9.32 2.18-15.32-.74-6.22-3-10.24-4.39-16.92-1.13-12.24 6-3.16 12.56 1.17 21 1.27 2.45 2.57 5.68.85 8.16-3.09 4.5-8 2.61-12 2.27-9-.78-12.88 14.44-7.76 20.18 3 3.32 9 4.92 10.17 9.58 1.39 5.39-4.72 5.81-4.89 10.18-2.5 4.81-5.43 9.39-8.76 13.67-4.77 6.07-9.62 12-11.07 19.75-1.33 7.12.24 16.71.92 24.07.83 9 3.86 21.05 13.11 24.37 4.29 1.54 9.42 1.65 14 1.25 6.83-.59 8.49-5.1 14.18-7.39 2.61-1 8-.9 10.31 1.16s2.28 6.94 2.88 9.81c2.23 10.63 2.87 23.15.26 33.79-2.28 9.26-12.74 12.7-14.93 22.12s-2.25 17.26-1 26.84c.51 3.95 1.59 7.86 2 11.84a187.933 187.933 0 0 1-40.83 23.66c-23.68 9.82-50.45 17.28-77.68 17.28s-53.45-8.78-77.13-18.6c-24.54-10.18-44.61-27.47-63.11-46s-34.5-39.1-44.68-63.65c-9.81-23.68-12.46-49.36-12.46-76.59v-.52c1.53.55 2.99 1.28 4.35 2.18 7 5.1 7.89 15.55 12.68 22.51 5.42 7.89 13.61 11.9 23.13 13s14.69 4.59 22.13 10.78c6.29 5.23 14.27 15 23.53 14v-.41c1.46 2.91 5.82 3.08 7 7.25 1.52 5.29-.55 10.94-1.88 16-.67 2.6-2.42 6-2.28 8.7s2 4.39 2.82 6.84c1.9 5.37 2 10.57 5.67 15.51 4.59 6.13 10.06 8 17.55 8 6.6 0 9.64 2.11 12.41 8.37 4.81 10.87 5.06 22.7 9.5 33.61 2.68 6.56 7.95 10.74 11.09 17 2 3.92 5.18 14.72 11.22 13.31l10.75 3.72c.92-.37 1.62-1.13 1.92-2.08-6.67-5.11-16.1-13.74-10.94-23.45 2.62-4.93 8.71-8.21 12.3-12.34 4.16-4.79 5.19-10.95 8.49-16.09 2.59-4 4.92-6.3 9.45-7.23 4.29-.88 9.15-1.56 12.16-5.33 2.56-3.2 1.54-7.34 2.16-11.16.75-4.59 2.76-9.08 6.91-11.58 4.87-2.93 6.64-3.79 9.17-9.1 2.36-4.94 2.92-9.14-2-13.12-8.76-7.15-23.95-3.58-34-8.37-4.83-2.3-6.2-5.68-9-9.78-4.07-5.87-8-4.71-14.19-4.66-11.77.1-15.78-9.57-25.41-14-4.53-2.07-10.4-2.49-14.55-5.11-2.54-1.61-3.39-4.45-6.23-5.35-1.55-.5-4.18 0-5.76.34-4.23.83-7.36 3.82-11 5.82-2 1.1-6.05 4.49-8.31 4.14-.1-.42 0-.76-.06-1.18l-.83.83c-11.26-2.11-10.29-9.63-11.55-19-.6-4.4-1.65-8-5.8-9.41-2.57-.87-6.78-1.9-9.5-1.75v1.03c-5-2.26-10.47-3.65-15.17-6.39-6.35-3.69-5.66-7.37-6.94-13.86-1-5-1.88-9.49 3.21-12.39 4.69-2.69 11.07-1.48 15.24 1.77 4.39 3.43 4.53 9.07 8.57 12.82 10.74 10 11.72-5.32 12-12.83.45-10.31-2.09-22.11 3.79-31.32 3.31-5.19 9.94-7.89 14.62-11.69 4.15-3.5 8.7-6.49 13.55-8.92 4.67-2.28 8-4.5 9.32-9.8 1.13-4.6 1.52-8.37 7.19-10s9.19 3.3 14.28 3.4c3.71.07 9.63-2.07 11.41-5.29 3.11-5.64-2.26-10.65-4.77-15.35s-2.32-9.44-6.32-13.32c-2-2-3.88-3.27-5.29-5.59-1-1.66-.83-3.06-2.63-4.43-2.44-1.85-7-2.74-9.86-1.79-4 1.36-6.19 5.88-9.47 8.29s-7.82 3.61-9.92 7.17-1.85 6.83-5.83 9.28c-3.22 2-6 2-9.47.39-1.42-.68-3.17-2.8-4.56-3-1.75-.3-2.05.92-3.64 1.13-4.09.55-7.42-.8-8.78-5a9.625 9.625 0 0 1 1.77-8.78c2.06-2.67 3.52-4.8 5.38-7.64 3.49-5.31 11-5.3 17-5.59 6.63-.32 15 2.22 19.73-4.12 1.85-2.48 1.07-3.84 1.64-6.64.47-2.32 2.09-4.21 1.62-6.79-1.53-8.43-10.77-4.92-15.75-3.2-7.4 2.54-13-.27-16.45-6.89-1.76-3.34-4.54-5.12-7.26-7.07 11.68-10 24.27-18.83 38.73-24.82 1.1-.46 2.21-.91 3.32-1.34 1.35 1.69 2.97 3.14 4.79 4.29 5.95 2.94 15.83 0 20.95 3.93 2.71 2.07 3.35 6.29 6 8.86 3.36 3.25 5.31 3.36 9.82 4.11 9.7 1.62 15.14 12.61 10.85 21.52-1.81 3.75-6.67 7-6.22 11.14.29 2.71 3.8 8.83 5.83 10.76 3.75 3.54 7.27 3.92 9.38 9.51 1.8 4.76 4.82 7.92 10.43 3.73 8.37-6.25-5.73-19.26 5.75-25.58 4.47-2.45 10.24-1.74 15-4.29s8.63-6.64 13.32-9.41c5.84-3.46 10-8.68 8.18-16-1.88-7.65-7.88-8.3-3.67-16.8 2.66-5.36 5.87-9.28 4.08-15.53v-.06a252.73 252.73 0 0 1 36.23 12.06 289.75 289.75 0 0 1 36 17.54c-4.27 3.58-8.94 7-9.88 12.54-.86 5.11 5.16 7.5 4 13.19-1 5.18-4 10.15-5.18 15.31-1.09 4.57-1.26 10.61 2.77 13.72 4.27 3.31 9.53 0 14.4 1.65 5.23 1.82 7.62 10.39 14.12 8.94 8.46-1.89 2.62-11.92.84-16.46-2.34-6-4.13-10.08.74-14.9 3.77-3.74 7.57-5.59 12.92-4.54 1.03.2 2.01.59 2.89 1.16 1.14 1.34 2.23 2.69 3.3 4.08 2.28 5.13 1.65 12.58.19 17.13Z\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-13\"],[14,\"d\",\"M746.79 521.14c-3.06-1.46-4.48-2.94-7.24-6.44s-5.91-4.79-10.3-4.09c-6.14 1-5 4.26-9 7.65-9.33 7.77-15.58-6.55-20.67-12.13-2.84-3.13-3.92-8.6-7.2-11.06-3-2.28-7.09-.74-10.52-.56-4.66.24-8.48.67-9.11-4.27-.6-4.67 1.85-8.79 4.53-12.32s4.55-5.89 9.11-5.75c4.11.15 8.15 1.14 11.87 2.9 3.56 1.72 8 3.79 9.24 7.63.88 2.63-1 8.1.83 10.14 2.28 2.5 8.25-.71 10.28-2.37 3.12-2.57 3.13-5.6 2.93-9.64-.17-3.25-.54-7 .37-10.25 1.22-4.39 3.43-4.33 7.38-5.32 2.77-.69 5.55-1.23 8.26-2 6.09 18.28 8.7 37.53 9.24 57.88Z\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,\"d\",\"M651.56 502.02c-1.21-4.66-7.21-6.26-10.17-9.58-5.12-5.74-1.25-21 7.76-20.18 4 .34 8.94 2.23 12-2.27 1.72-2.48.42-5.71-.85-8.16-4.33-8.39-13.41-15-1.17-21 6.68-3.26 10.7-1.89 16.92 1.13 6 2.92 9 3.12 15.32.74 5.07-1.91 8.8-4.86 9.4-10.34.76-6.86 1-12.24 3.1-18.86 1.46-4.56 2.09-12-.17-17.12 13 16.81 21.84 37.05 30.12 57 1.33 3.24 2.55 6.51 3.66 9.81-2.71.77-5.49 1.31-8.26 2-4 1-6.16.93-7.38 5.32-.91 3.27-.54 7-.37 10.25.2 4 .19 7.07-2.93 9.64-2 1.66-8 4.87-10.28 2.37-1.86-2 0-7.51-.83-10.14-1.27-3.84-5.68-5.91-9.24-7.63a30.354 30.354 0 0 0-11.87-2.9c-4.56-.14-6.4 2.19-9.11 5.75s-5.13 7.65-4.53 12.32c.63 4.94 4.45 4.51 9.11 4.27 3.43-.18 7.49-1.72 10.52.56 3.28 2.46 4.36 7.93 7.2 11.06 5.09 5.58 11.34 19.9 20.67 12.13 4.08-3.39 2.9-6.67 9-7.65 4.39-.7 7.45.49 10.3 4.09s4.18 5 7.24 6.44c.07 2.8.11 5.61.11 8.46 0 27.23-4.55 51.93-14.36 75.61-10.18 24.54-21.32 48.62-39.81 67.12-7.58 7.6-15.67 14.66-24.23 21.14-.36-4-1.44-7.89-2-11.84-1.26-9.58-1.22-17.33 1-26.84s12.65-12.86 14.93-22.12c2.61-10.64 2-23.16-.26-33.79-.6-2.87-.58-7.74-2.88-9.81s-7.7-2.21-10.31-1.16c-5.69 2.29-7.35 6.8-14.18 7.39-4.55.4-9.68.29-14-1.25-9.25-3.32-12.28-15.42-13.11-24.37-.68-7.36-2.25-16.95-.92-24.07 1.45-7.78 6.3-13.68 11.07-19.75 3.33-4.28 6.26-8.86 8.76-13.67\"],[14,\"fill\",\"#00aff4\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-15\"],[14,\"d\",\"M668.5 693.49c-.36-4-1.44-7.89-2-11.84-1.26-9.58-1.22-17.33 1-26.84s12.65-12.86 14.93-22.12c2.61-10.64 2-23.16-.26-33.79-.6-2.87-.58-7.74-2.88-9.81s-7.7-2.21-10.31-1.16c-5.69 2.29-7.35 6.8-14.18 7.39-4.55.4-9.68.29-14-1.25-9.25-3.32-12.28-15.42-13.11-24.37-.68-7.36-2.25-16.95-.92-24.07 1.45-7.78 6.3-13.68 11.07-19.75 3.33-4.28 6.26-8.86 8.76-13.67m90.91-48.94c-2.71.77-5.49 1.31-8.26 2-4 1-6.16.93-7.38 5.32-.91 3.27-.54 7-.37 10.25.2 4 .19 7.07-2.93 9.64-2 1.66-8 4.87-10.28 2.37-1.86-2 0-7.51-.83-10.14-1.27-3.84-5.68-5.91-9.24-7.63a30.354 30.354 0 0 0-11.87-2.9c-4.56-.14-6.4 2.19-9.11 5.75s-5.13 7.65-4.53 12.32c.63 4.94 4.45 4.51 9.11 4.27 3.43-.18 7.49-1.72 10.52.56 3.28 2.46 4.36 7.93 7.2 11.06 5.09 5.58 11.34 19.9 20.67 12.13 4.08-3.39 2.9-6.67 9-7.65 4.39-.7 7.45.49 10.3 4.09s4.18 5 7.24 6.44m-95.19-19.13c-1.21-4.66-7.21-6.26-10.17-9.58-5.12-5.74-1.25-21 7.76-20.18 4 .34 8.94 2.23 12-2.27 1.72-2.48.42-5.71-.85-8.16-4.33-8.39-13.41-15-1.17-21 6.68-3.26 10.7-1.89 16.92 1.13 6 2.92 9 3.12 15.32.74 5.07-1.91 8.8-4.86 9.4-10.34.76-6.86 1-12.24 3.1-18.86 1.46-4.56 2.09-12-.17-17.12\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-10\"],[14,\"d\",\"M573.93 631.24c-2.53 5.31-4.3 6.17-9.17 9.1-4.15 2.5-6.16 7-6.91 11.58-.62 3.82.4 8-2.16 11.16-3 3.77-7.87 4.45-12.16 5.33-4.53.93-6.86 3.21-9.45 7.23-3.3 5.14-4.33 11.3-8.49 16.09-3.59 4.13-9.68 7.41-12.3 12.34-5.16 9.71 4.27 18.34 10.94 23.45-.3.95-1 1.71-1.92 2.08l-10.75-3.72c-6 1.41-9.26-9.39-11.22-13.31-3.14-6.28-8.41-10.46-11.09-17-4.44-10.91-4.69-22.74-9.5-33.61-2.77-6.26-5.81-8.35-12.41-8.37-7.49 0-13-1.92-17.55-8-3.7-4.94-3.77-10.14-5.67-15.51-.86-2.45-2.67-4.18-2.82-6.84s1.61-6.1 2.28-8.7c1.33-5.1 3.4-10.75 1.88-16-1.21-4.17-5.57-4.34-7-7.25v.26c-9.26.92-17.24-8.81-23.53-14-7.44-6.19-12.65-9.71-22.13-10.78s-17.71-5.09-23.13-13c-4.79-7-5.66-17.41-12.68-22.51-1.36-.9-2.82-1.63-4.35-2.18 0-27-.43-53.85 9.33-77.38 10.18-24.54 30.15-43 48.65-61.51 7.6-7.6 15.31-15.17 23.47-22.16 2.72 1.95 5.5 3.73 7.26 7.07 3.5 6.62 9.05 9.43 16.45 6.89 5-1.72 14.22-5.23 15.75 3.2.47 2.58-1.15 4.47-1.62 6.79-.57 2.8.21 4.16-1.64 6.64-4.74 6.34-13.1 3.8-19.73 4.12-6 .29-13.56.28-17 5.59-1.86 2.84-3.32 5-5.38 7.64-2 2.46-2.66 5.74-1.77 8.78 1.36 4.23 4.69 5.58 8.78 5 1.59-.21 1.89-1.43 3.64-1.13 1.39.23 3.14 2.35 4.56 3 3.42 1.64 6.25 1.59 9.47-.39 4-2.45 3.73-5.72 5.83-9.28s6.7-4.79 9.92-7.17 5.43-6.93 9.47-8.29c2.84-.95 7.42-.06 9.86 1.79 1.8 1.37 1.62 2.77 2.63 4.43 1.41 2.32 3.26 3.62 5.29 5.59 4 3.88 3.74 8.56 6.28 13.31s7.88 9.71 4.77 15.35c-1.78 3.22-7.7 5.36-11.41 5.29-5.09-.1-8.51-5-14.28-3.4s-6.06 5.38-7.19 10c-1.31 5.3-4.65 7.52-9.32 9.8-4.85 2.43-9.4 5.42-13.55 8.92-4.68 3.8-11.31 6.5-14.62 11.69-5.88 9.21-3.34 21-3.79 31.32-.33 7.51-1.31 22.8-12 12.83-4-3.75-4.18-9.39-8.57-12.82-4.17-3.25-10.55-4.46-15.24-1.77-5.09 2.9-4.18 7.41-3.21 12.39 1.28 6.49.59 10.17 6.94 13.86 4.7 2.74 10.19 4.13 15.17 6.39v-.83c2.72-.15 6.93.88 9.5 1.75 4.15 1.41 5.2 5 5.8 9.41 1.26 9.37.29 16.89 11.55 19l.83-.83c.07.42 0 .76.06 1.18 2.26.35 6.28-3 8.31-4.14 3.69-2 6.82-5 11-5.82 1.58-.32 4.21-.84 5.76-.34 2.84.9 3.69 3.74 6.23 5.35 4.15 2.62 10 3 14.55 5.11 9.63 4.38 13.64 14.05 25.41 14 6.17 0 10.12-1.21 14.19 4.66 2.84 4.1 4.21 7.48 9 9.78 10 4.79 25.22 1.22 34 8.37 4.82 3.99 4.26 8.19 1.9 13.13Z\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-15\"],[14,\"d\",\"M434.06 368.05c2.72 1.95 5.5 3.73 7.26 7.07 3.5 6.62 9.05 9.43 16.45 6.89 5-1.72 14.22-5.23 15.75 3.2.47 2.58-1.15 4.47-1.62 6.79-.57 2.8.21 4.16-1.64 6.64-4.74 6.34-13.1 3.8-19.73 4.12-6 .29-13.56.28-17 5.59-1.86 2.84-3.32 5-5.38 7.64-2 2.46-2.66 5.74-1.77 8.78 1.36 4.23 4.69 5.58 8.78 5 1.59-.21 1.89-1.43 3.64-1.13 1.39.23 3.14 2.35 4.56 3 3.42 1.64 6.25 1.59 9.47-.39 4-2.45 3.73-5.72 5.83-9.28s6.7-4.79 9.92-7.17 5.43-6.93 9.47-8.29c2.84-.95 7.42-.06 9.86 1.79 1.8 1.37 1.62 2.77 2.63 4.43 1.41 2.32 3.26 3.62 5.29 5.59 4 3.88 3.74 8.56 6.28 13.31s7.88 9.71 4.77 15.35c-1.78 3.22-7.7 5.36-11.41 5.29-5.09-.1-8.51-5-14.28-3.4s-6.06 5.38-7.19 10c-1.31 5.3-4.65 7.52-9.32 9.8-4.85 2.43-9.4 5.42-13.55 8.92-4.68 3.8-11.31 6.5-14.62 11.69-5.88 9.21-3.34 21-3.79 31.32-.33 7.51-1.31 22.8-12 12.83-4-3.75-4.18-9.39-8.57-12.82-4.17-3.25-10.55-4.46-15.24-1.77-5.09 2.9-4.18 7.41-3.21 12.39 1.28 6.49.59 10.17 6.94 13.86 4.7 2.74 10.19 4.13 15.17 6.39v-.83c2.72-.15 6.93.88 9.5 1.75 4.15 1.41 5.2 5 5.8 9.41 1.26 9.37.29 16.89 11.55 19l.83-.83c.07.42 0 .76.06 1.18 2.26.35 6.28-3 8.31-4.14 3.69-2 6.82-5 11-5.82 1.58-.32 4.21-.84 5.76-.34 2.84.9 3.69 3.74 6.23 5.35 4.15 2.62 10 3 14.55 5.11 9.63 4.38 13.64 14.05 25.41 14 6.17 0 10.12-1.21 14.19 4.66 2.84 4.1 4.21 7.48 9 9.78 10 4.79 25.22 1.22 34 8.37 4.88 4 4.32 8.18 2 13.12-2.53 5.31-4.3 6.17-9.17 9.1-4.15 2.5-6.16 7-6.91 11.58-.62 3.82.4 8-2.16 11.16-3 3.77-7.87 4.45-12.16 5.33-4.53.93-6.86 3.21-9.45 7.23-3.3 5.14-4.33 11.3-8.49 16.09-3.59 4.13-9.68 7.41-12.3 12.34-5.16 9.71 4.27 18.34 10.94 23.45-.3.95-1 1.71-1.92 2.08l-10.75-3.72c-6 1.41-9.26-9.39-11.22-13.31-3.14-6.28-8.41-10.46-11.09-17-4.44-10.91-4.69-22.74-9.5-33.61-2.77-6.26-5.81-8.35-12.41-8.37-7.49 0-13-1.92-17.55-8-3.7-4.94-3.77-10.14-5.67-15.51-.86-2.45-2.67-4.18-2.82-6.84s1.61-6.1 2.28-8.7c1.33-5.1 3.4-10.75 1.88-16-1.21-4.17-5.57-4.34-7-7.25v.25c-9.26.92-17.24-8.81-23.53-14-7.44-6.19-12.65-9.71-22.13-10.78s-17.71-5.09-23.13-13c-4.79-7-5.66-17.41-12.68-22.51-1.36-.9-2.82-1.63-4.35-2.18\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-10\"],[14,\"d\",\"M590.19 364.44c1.81 7.34-2.34 12.56-8.18 16-4.69 2.77-8.42 6.79-13.32 9.41s-10.54 1.84-15 4.29c-11.48 6.32 2.62 19.33-5.75 25.58-5.61 4.19-8.63 1-10.43-3.73-2.11-5.59-5.63-6-9.38-9.51-2-1.93-5.54-8.05-5.83-10.76-.45-4.13 4.41-7.39 6.22-11.14 4.29-8.91-1.15-19.9-10.85-21.52-4.51-.75-6.46-.86-9.82-4.11-2.64-2.57-3.28-6.79-6-8.86-5.12-3.93-15-1-20.95-3.93-1.82-1.15-3.44-2.6-4.79-4.29 22.8-9.07 47.92-15 73.88-15 13.69.08 27.32 1.83 40.59 5.19v.06c1.79 6.25-1.42 10.17-4.08 15.53-4.19 8.49 1.81 9.14 3.69 16.79Z\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-15\"],[14,\"d\",\"M590.6 332.1c1.79 6.25-1.42 10.17-4.08 15.53-4.21 8.5 1.79 9.15 3.67 16.8 1.81 7.34-2.34 12.56-8.18 16-4.69 2.77-8.42 6.79-13.32 9.41s-10.54 1.84-15 4.29c-11.48 6.32 2.62 19.33-5.75 25.58-5.61 4.19-8.63 1-10.43-3.73-2.11-5.59-5.63-6-9.38-9.51-2-1.93-5.54-8.05-5.83-10.76-.45-4.13 4.41-7.39 6.22-11.14 4.29-8.91-1.15-19.9-10.85-21.52-4.51-.75-6.46-.86-9.82-4.11-2.64-2.57-3.28-6.79-6-8.86-5.12-3.93-15-1-20.95-3.93-1.82-1.15-3.44-2.6-4.79-4.29\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,\"d\",\"M700.41 392.34c-.88-.57-1.86-.96-2.89-1.16-5.35-1.05-9.15.8-12.92 4.54-4.87 4.82-3.08 8.91-.74 14.9 1.78 4.54 7.62 14.57-.84 16.46-6.5 1.45-8.89-7.12-14.12-8.94-4.87-1.69-10.13 1.66-14.4-1.65-4-3.11-3.86-9.15-2.77-13.72 1.22-5.16 4.17-10.13 5.18-15.31 1.11-5.69-4.91-8.08-4-13.19.94-5.52 5.61-9 9.88-12.54\"],[14,\"stroke\",\"#241f20\"],[14,\"stroke-width\",\"7\"],[14,\"fill-rule\",\"evenodd\"],[14,\"stroke-linecap\",\"round\"],[14,\"stroke-linejoin\",\"round\"],[14,\"fill\",\"#00aff4\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-14\"],[14,\"d\",\"m266.62 232.08-142.24 147c-5.59 5.77-5.45 14.98.33 20.57.74.72 1.55 1.35 2.42 1.9.37.22.74.43 1.14.63 5.59 2.86 12.39 1.8 16.84-2.63l152.68-150.49\"],[12],[13],[1,\"\\n  \"],[10,\"circle\"],[14,0,\"cls-16\"],[14,\"cx\",\"301.85\"],[14,\"cy\",\"535.64\"],[14,\"r\",\"14.93\"],[12],[13],[1,\"\\n  \"],[10,\"circle\"],[14,0,\"cls-3\"],[14,\"cx\",\"832.43\"],[14,\"cy\",\"371.31\"],[14,\"r\",\"35.26\"],[12],[13],[1,\"\\n  \"],[10,\"circle\"],[14,0,\"cls-16\"],[14,\"cx\",\"708.48\"],[14,\"cy\",\"279.06\"],[14,\"r\",\"14.73\"],[12],[13],[1,\"\\n  \"],[10,\"circle\"],[14,0,\"cls-16\"],[14,\"cx\",\"526.08\"],[14,\"cy\",\"262.4\"],[14,\"r\",\"15.33\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-16\"],[14,\"d\",\"M143.49 90.62c25.57 22.85 41 41.29 37.29 46.1-5.21 6.78-46.6-16.26-92.44-51.46s-78.79-69.25-73.58-76c3.78-4.92 26.6 5.85 56.35 25.58\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-7\"],[14,\"d\",\"M310.79 159.01c-29.43 0-53.28 23.86-53.27 53.29 0 29.43 23.86 53.28 53.29 53.27 29.42 0 53.27-23.86 53.27-53.28s-23.85-53.28-53.28-53.28Zm0 84.41c-17.19 0-31.13-13.94-31.13-31.13s13.94-31.13 31.13-31.13 31.13 13.94 31.13 31.13-13.94 31.13-31.13 31.13Z\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-16\"],[14,\"d\",\"M170.81 280.35C146.2 297.7 35.57 384.48 5.27 561.06\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,\"d\",\"M496.62 229.02c7 0 7-10.94 0-10.94s-7.05 10.94 0 10.94ZM257.48 554.3c7 0 7.05-10.94 0-10.94s-7.05 10.94 0 10.94Zm348.44-342.21c7 0 7-10.94 0-10.94s-7 10.94 0 10.94Zm0 43.18c7 0 7-10.94 0-10.94s-7 10.94 0 10.94ZM257.48 47.55c7 0 7.05-10.94 0-10.94s-7.05 10.94 0 10.94Zm-41.47 483.94c7 0 7-10.94 0-10.94s-7.05 10.94 0 10.94ZM209 86.74c7 0 7.05-10.94 0-10.94s-7 10.94 0 10.94ZM5.27 143.37c7 0 7.05-10.94 0-10.94s-7 10.94 0 10.94Z\"],[14,\"fill\",\"#241f20\"],[12],[13],[1,\"\\n  \"],[10,\"circle\"],[14,0,\"cls-16\"],[14,\"cx\",\"310.76\"],[14,\"cy\",\"212.28\"],[14,\"r\",\"31\"],[14,\"transform\",\"rotate(-80.78 310.775 212.283)\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-16\"],[14,\"d\",\"M261.28 232.08s5.1 21.67 30.82 30.83M86.32 654.55c1.89 34 97.58 193.31 283.35 71.79M62.71 713.69c-21-36.73-37.27-123.1 14.16-215.91\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-3\"],[14,\"d\",\"M61.26 43.4S78.53 27 81.27 31.97c5.68 10.3-9.68 13.88-9.68 13.88l-10.33-2.46Zm82.78 36.45s.96 10.11-6.5 19.4-7.57-6.43-7.57-6.43l14.07-12.97Z\"],[12],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[]]",
    "moduleName": "wizard/templates/components/illustration-finished.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("wizard/templates/components/illustration-members", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <svg xmlns="http://www.w3.org/2000/svg" id="wizard-members-illustration" viewBox="0 0 891.79 761.94">
    <defs>
      <pattern id="Unnamed_Pattern_2" x="0" y="0" width="144" height="144" patternTransform="matrix(1.3 0 0 -.96 405.71 -15766.98)" patternUnits="userSpaceOnUse">
        <path class="cls-1" d="M0 0h144v144H0z"/>
        <path class="cls-1" d="M0 0h144v144H0z"/>
        <path fill="#fef7b8" d="M0 0h144v144H0z"/>
      </pattern>
      {{! template-lint-disable no-forbidden-elements }}
      <style>.cls-1,.cls-2{fill:none}.cls-3{fill:#00ac43}.cls-4{fill:#f9000a}.cls-7{fill:#ff5d10}.cls-10{fill:#00aff4}.cls-2{stroke:var(--primary);stroke-linecap:round;stroke-linejoin:round;stroke-width:8.75px}</style>
    </defs>
    <rect class="cls-3" x="565.81" y="229.93" width="194.54" height="46.05" rx="23.02" ry="23.02"/>
    <path class="cls-2" d="M271.42 434.36c4.99-12.76 20.17-26.82 38.23-35.03"/>
    <path class="cls-3" d="M538.32 438.29s21.75-37.26 45.83-39.8 31-7.82 51 17.86 27.92 85.85 27.92 85.85l-102 9.77-22.75-73.68Z"/>
    <path class="cls-2" d="M628.29 725.31 607.34 587.6M272.43 731.77l15.88-146.71"/>
    <path class="cls-1" d="m175.12 663.62-50.93 10.4v21.5c0 5.85 4.75 10.59 10.6 10.6h56c6.43.01 11.66-5.19 11.67-11.63 0-3.22-1.32-6.31-3.67-8.51l-23.67-22.36Z"/>
    <path class="cls-3" d="m175.12 663.67-.65-.64-1.62-57.41c2.53-24.51-4.9-32.88-27.35-43.05l-47.63-21.54-1.39-2.36c-7.51 8.9-14.2 15.56-21.32 22.41-4.41 8.73-7.46 16.91-16.84 26.3-9.82 9.85-24.05 14.7-38.59 16.06-.53.07-1.06.14-1.59.18a58.373 58.373 0 0 0 44.71 20.8h61.34v49.61l50.93-10.36Z"/>
    <path class="cls-2" d="M43.49 460.07h0c-37.14 0-35.45 50.43-39.12 71.6v34.22c0 32.3 26.18 58.48 58.48 58.48h61.34v71.11c0 5.85 4.75 10.59 10.6 10.6h56c6.44.01 11.67-5.2 11.68-11.64v-.02h0c0-3.21-1.33-6.28-3.67-8.48l-24.32-22.92"/>
    <path class="cls-10" d="M803.42 464.11c-8.3 14.93-16.49 34.58-16.49 54.06 0 2.82-.3 5.45-.85 7.91-1.77 7.9 40.33-6.96 34.71-2.34 8.78 5 13 3.6 15.94 6.23 2.18 1.95 2.41 8.69 9.77 8.37 17.91-.78 28.31.99 36.36 17.17 1.38 2.77-13.15 18.25-13.73 26.04-.38 5.13 12.66 3.49 14.16 4.81 1.01.95 2.1 1.82 3.25 2.6.6-2.94.9-5.94.9-8.94l-.02-68.77c-12.56-48.81-28.25-57.05-28.25-57.05l-11.12 17.67-18.24 2.87-20.46-7.09-5.93-3.54Zm-90.23 207.58-19.27 20.62c-3.93 4.19-3.72 10.78.47 14.71a10.45 10.45 0 0 0 7.14 2.82h53.35c8.13 0 14.72-6.58 14.73-14.71v-20.68l-50.54-11.19a36.243 36.243 0 0 1-5.88 8.43Z"/>
    <path class="cls-10" d="M883.26 586.37c-10.21-9.01-36.42-9.73-48.22-15.56-7.85-3.88-.6-14.84-9.78-14.44-17.28.75-35.69-3-51-11.72-17.1 14.07-45.49 15-45.49 15l-6 89.8c-.32 4.8-1.6 9.5-3.76 13.8l50.55 11.19v-50.06h73.51c21.05 0 39.2-14.79 43.45-35.41-1.16-.78-2.25-1.64-3.26-2.6Zm-35.22-85.51v25.86c12.73 6.76 26.91 13.89 36 24.59.91-3.74 1.54-7.55 1.9-11.38l-.03-25.9"/>
    <circle class="cls-4" cx="44.74" cy="445.2" r="33.11"/>
    <circle cx="44.74" cy="445.2" r="33.11" stroke="var(--primary)" stroke-miterlimit="10" stroke-width="8" fill="#f9000a"/>
    <path class="cls-2" d="M63.07 472.79c-15.23 10.13-35.79 5.98-45.92-9.25a33.16 33.16 0 0 1-5.18-13.51"/>
    <path d="m796.69 523.98-12.61 3.87-5.3 8.18 1.02 9.93 13.17 3.75 18.8-1.04 12.51 3.77c-16.56 35.23-138.77 63.72-297.1 70.43-3.44.15.41-16.02-3.8-27.6-7.73-21.27-23.96-44.3-30.44-44.14s-17.59-10.14-29.4-11.27c-13.46-1.28-27.72 6.59-35.33 6.59-17.05 0-40.34 30.58-44.33 45.2-2.29 8.41 3.82 31.41-4.69 31.03-168.32-7.59-294.76-39.82-294.76-78.44s118.85-68.88 279.48-77.68l4.61 18.51 5.27-.88 24.76-19.14c18.5-.61 37.46-.93 56.76-.93 168.4 0 310.59 24.25 355.84 57.47" fill="url(#Unnamed_Pattern_2)"/>
    <path class="cls-2" d="M375.99 622.54c-117.18-5.52-213.67-23-260.67-46.23m691.44-6.39c-41.86 26.76-147.39 47.19-277.65 52.87M262.8 329.99h-53.99l-98.31 97.68a1.64 1.64 0 0 1-2.04 1.1 1.65 1.65 0 0 1-1.17-1.55l40-97.23h-13.7c-13.93 0-25.22-11.29-25.22-25.22h0v-36c0-13.93 11.29-25.22 25.22-25.22h98.54m45.56 0h97.74c13.93 0 25.22 11.29 25.22 25.22h0v36c0 13.93-11.29 25.22-25.22 25.22h-90.04"/>
    <path class="cls-4" d="M278.44 265.92h47.42c10.61 0 19.22 8.61 19.22 19.22s-8.61 19.22-19.22 19.22h-43.24m-30.39 0h-89.88c-10.61 0-19.22-8.61-19.22-19.22s8.61-19.22 19.22-19.22h73.64"/>
    <path class="cls-2" d="M510.58 245.83h-59.9c-9.69 0-39.83 0-39.83 54.09 0 40.45 50.23 66.71 75.59 77.39 1.44.6 2.12 2.26 1.52 3.7a2.84 2.84 0 0 1-2.62 1.74h-9.27c-41.74 0-78.62-20.82-100.81-52.65m76.66-257.08h240.16c16.97 0 30.73 13.75 30.74 30.72h0v77.49"/>
    <path class="cls-7" d="M448.88 104.11h217.34c12.71 0 23.02 10.31 23.02 23.02 0 12.72-10.31 23.03-23.02 23.03H448.88"/>
    <path class="cls-2" d="M278.4 232.73c-4.53 58.89 3.81 90.65 12.24 113 .87 2.32-.3 4.91-2.62 5.78-1.68.63-3.58.2-4.83-1.1-40.93-43.2-49.64-90.68-52.44-118.11-.93-9.29-8.75-16.36-18.08-16.36h-48c-24.89 0-45.06-20.18-45.06-45.07V49.43c0-24.88 20.18-45.05 45.06-45.06h237.55c24.88 0 45.05 20.18 45.06 45.06v121.43c0 24.89-20.17 45.06-45.06 45.07h-105.7c-9.5 0-17.39 7.33-18.12 16.8Zm533.38-30.61V307.3c0 11.54-9.35 20.89-20.89 20.89h-85.17c-23 0 40.45 59.24 47 79.77.69 2.13-.49 4.42-2.62 5.11-1.04.34-2.18.24-3.15-.28-30.43-15.72-104.35-84.6-111.69-84.6H531.49c-11.54 0-20.89-9.34-20.9-20.88h0V202.12c0-11.54 9.35-20.89 20.89-20.89h259.4c11.54 0 20.89 9.34 20.9 20.88h0Z"/>
    <circle class="cls-7" cx="456.74" cy="485.07" r="33.11"/>
    <circle cx="456.74" cy="485.07" r="33.11" fill="#00ad43" stroke="var(--primary)" stroke-linecap="round" stroke-linejoin="round" stroke-width="8.75"/>
    <path d="M452.95 539.86c-57.21 0-70.44 50.56-70.44 50.56l-1-.98c0-19.55-2.76-84.5 75.23-84.5 0 0 72.79-4.18 70.38 92.4 0 0-11.55-53.06-73.21-57.48" stroke="var(--primary)" stroke-linecap="round" stroke-linejoin="round" stroke-width="8.75" fill="#ff5d10"/>
    <path class="cls-2" d="M4.38 482.14v221.93m170.11-41.06-50.3 11.85m256.52 10.88v-72.67c0-40.43 32.78-73.21 73.21-73.21h0c40.43 0 73.21 32.78 73.21 73.21h0v70s-38.8 24.22-72.31 24.22-74.11-21.55-74.11-21.55Zm0 71.82v-81.82m146.41 81.82v-84.51m360.29-207.97v244.77m-168.22-46.84 50.42 11.85"/>
    <path class="cls-10" d="M400.67 88.91c0 12.7-10.3 23-23 23h-48.11c-12.7 0-23 10.3-23 23s-10.3 23-23 23H183.41c-12.7 0-23-10.3-23-23v-46c0-12.7 10.3-23 23-23h194.24c12.7-.01 23.01 10.28 23.02 22.98v.02Z"/>
    <path class="cls-2" d="M4.38 624.37h119.81v79.7m763.22-79.7H772.19v85.49"/>
    <path class="cls-10" d="M359.84 458.42a91.653 91.653 0 0 0-18.19 6.75c-10.91 5.47-17.74 16.9-16.58 29.05 1.42 14.92 13.28 15.75 13.28 15.75 15-2.88 19.1-22 19.1-22 4.89-.65 9.74-1.63 14.5-2.93-.41-9.77-4.56-19.96-12.11-26.62Zm-86.87-15.63c-.94-4.95-1.93-10.39-2.93-16.24-4.75-27.63-27.11-23.44-27.11-23.44-20.07 3.37-22.94 13.39-22.88 18.13.14 12 9.81 11.08 9.81 11.08l6.73-1.09c4.2-.67 8.15 2.2 8.81 6.4.04.23.06.46.08.69l.87 13.15c9.37 2.04 20.41-1.77 26.62-8.68Z"/>
    <path class="cls-1" d="M279.25 472.75s-2.78-11.55-6.28-30c-6.21 6.91-17.25 10.72-26.62 8.68l1.92 29 30.98-7.68Z"/>
    <path class="cls-2" d="M340.6 393.1s23.39 1.7 44.77 21.66 17.19 48.42 17.19 48.42-4.57 19.26-45.12 24.84c0 0-4.06 19.07-19.1 22 0 0-11.86-.83-13.28-15.75-1.16-12.15 5.68-23.58 16.58-29.05a97.563 97.563 0 0 1 34.68-9.63m-128.04 24.85-2.79-42.13c-.28-4.24-3.95-7.45-8.2-7.17a8.1 8.1 0 0 0-.69.08l-6.73 1.09s-9.67.94-9.81-11.08c-.06-4.74 2.81-14.76 22.88-18.13 0 0 22.36-4.19 27.11 23.44 4.75 27.63 9.21 46.21 9.21 46.21"/>
    <path class="cls-3" d="M658.29 426.76c-15.92-25.12-52.56-32.38-52.56-32.38l32.18 51.91c1.26 2.53 2.27 5.18 3 7.91 8.38-4.88 18.21-8.89 27.59-9-3-6.36-6.41-12.52-10.21-18.44Z"/>
    <path class="cls-7" d="M668.54 445.17c-9.38.15-19.21 4.16-27.59 9 5.1 19.55-16.38 18.53-16.38 18.53-14.66 1.7-24.71 5.32-24.79 10.74s5.95 5.25 5.95 5.25c6.33 6.14 20.59 5.33 20.59 5.33 12 1.83 19.81-4 19.81-4 13.76.2 21.35-3.28 25.43-6.59 2.95-2.45 4.56-6.17 4.31-10-.48-8.19-1.9-16.57-7.33-28.26Z"/>
    <path class="cls-2" d="M658.29 426.76c14.19 22.4 16.89 34.73 17.58 46.64.25 3.83-1.35 7.55-4.3 10-4.09 3.3-33.22 10.46-45.25 8.63 0 0-14.26 5.81-20.59-.33 0 0-8-3.82-7.95-9.25.06-4.46 6.86-9.72 17.4-12.4 3.6-.87 7.3-1.21 11-1 7.28.35 22.3-1.31 11.77-22.8"/>
    <path class="cls-7" d="M618.28 488.89c-1.44-6.13-10.18-16-21-16.16l-29.87-4.53a6.416 6.416 0 0 1-3.57-4.58 61.77 61.77 0 0 1-1.22-12.13c-8.83-3.68-19.47-6.31-27.75-2.2-2.1 22.23.28 30.12.28 30.12s1.81 12.2 21.38 17.77c2.86.8 5.82 1.13 8.78 1 7.32-.31 23.64-.84 33.18 0 1.58.16 3.16.24 4.75.24 5.42.06 16.26-4.3 15.04-9.53Z"/>
    <path class="cls-3" d="M562.67 451.49c0-2.75.28-5.49.84-8.18l-6.43-36.79s-19.31 15.57-21.89 40c-.11 1-.2 1.89-.28 2.81 8.29-4.15 18.93-1.52 27.76 2.16Z"/>
    <path class="cls-2" d="M535.19 446.48c-2.59 24.38 0 32.93 0 32.93s1.19 8 12 14c6.53 3.52 13.96 5 21.34 4.24 8.73-.83 23.61-2 32.11-1.19 1.61.15 3 .23 4.31.24 8.18.07 17.49-4.89 13.28-11.91-2.58-4.3-7.55-11.82-21-12.07l-29.87-4.53a6.416 6.416 0 0 1-3.57-4.58c-.89-4.45-2-12.75-.38-20.31"/>
    <path class="cls-4" d="M149.5 496.49c-23.63-10.36-39.28 2.79-39.28 2.79l-28.48 22.87 4.15 11.17 4.51-1.3c4.65-5.58 11.72-19.72 31.16-13.84 13.49 4.08 32.11-3 36.86-6.93s-8.92-14.76-8.92-14.76Z"/>
    <path class="cls-2" d="m80.71 520.49 29.5-21.21s15.65-13.15 39.28-2.79c0 0 13.66 10.82 8.92 14.76s-23.47 11.33-36.86 6.93"/>
    <path class="cls-4" d="M107.07 532.9s-10.79-2.35-32.6 5.75c-1.68 8.85 0 18.8 4.56 26.11 4.46-1.77 8.59-4.27 12.23-7.4 0 0 20.74 4 36.53.72 0 0 7.28-5.36 8-11.62.06 0-9.24-12.86-28.72-13.56Z"/>
    <path class="cls-2" d="M20.88 501.27s2.55 36.37 20.6 62.15a16.939 16.939 0 0 0 16.39 7c9.74-1.49 24.44-5 33.41-13 0 0 20.74 4 36.53.72 0 0 7.28-5.36 8-11.62 0 0-9.3-12.86-28.77-13.56 0 0-11.46-2.5-34.63 6.52a8.003 8.003 0 0 1-10.36-4.55l-.12-.33"/>
    <path d="M292.15 402.63c-4.26-17.78 6.7-35.65 24.48-39.92 17.78-4.26 35.65 6.7 39.92 24.48 4.26 17.78-6.7 35.65-24.48 39.92-2.53.61-5.12.91-7.73.91-15.3 0-28.6-10.47-32.19-25.34" stroke-miterlimit="10" stroke-width="8" stroke="var(--primary)" fill="#00aff4"/>
    <path class="cls-2" d="M324.34 361.76c18.29 0 33.11 14.83 33.11 33.11 0 18.29-14.83 33.11-33.11 33.11-15.3 0-28.6-10.48-32.19-25.35"/>
    <path d="M292.15 402.63c-.61-2.54-.91-5.15-.91-7.76 0-2.09.19-4.17.58-6.22" stroke="var(--primary)" stroke-linecap="round" stroke-linejoin="round" stroke-width="8.75" fill="#00aff4"/>
    <circle cx="576.03" cy="390.79" r="33.11" stroke="#ff5d10" stroke-miterlimit="10" stroke-width="8" fill="#ff5d10"/>
    <path class="cls-2" d="M608.9 386.8c2.15 18.16-10.83 34.62-28.99 36.77a33.102 33.102 0 0 1-30.83-13.63m311.4 44.17s25.43 28.24 25.43 59.87v25.86s-2.94 39.87-27 39.87c-15 0-28.72-10-33.21-21.32a15.538 15.538 0 0 0-16.89-9.53c-7.6 1.17-17.33 1.71-25.8-.86a7.075 7.075 0 0 1-5-7.57c.5-4.6 2-10.72 6.07-12.58 8.18-3.69 16.38-5 26.79-4.8 14.45-.6 28.3 5.81 37.2 17.2v-39.48"/>
    <circle class="cls-2" cx="829.8" cy="441.63" r="33.11"/>
    <path class="cls-2" d="M363.91 434.36s3.77 15.61 0 22.35M71.22 503.56l10.79 30.5"/>
  </svg>
  
  */
  {
    "id": "SvcTZ6nn",
    "block": "[[[10,\"svg\"],[14,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[14,1,\"wizard-members-illustration\"],[14,\"viewBox\",\"0 0 891.79 761.94\"],[12],[1,\"\\n  \"],[10,\"defs\"],[12],[1,\"\\n    \"],[10,\"pattern\"],[14,1,\"Unnamed_Pattern_2\"],[14,\"x\",\"0\"],[14,\"y\",\"0\"],[14,\"width\",\"144\"],[14,\"height\",\"144\"],[14,\"patternTransform\",\"matrix(1.3 0 0 -.96 405.71 -15766.98)\"],[14,\"patternUnits\",\"userSpaceOnUse\"],[12],[1,\"\\n      \"],[10,\"path\"],[14,0,\"cls-1\"],[14,\"d\",\"M0 0h144v144H0z\"],[12],[13],[1,\"\\n      \"],[10,\"path\"],[14,0,\"cls-1\"],[14,\"d\",\"M0 0h144v144H0z\"],[12],[13],[1,\"\\n      \"],[10,\"path\"],[14,\"fill\",\"#fef7b8\"],[14,\"d\",\"M0 0h144v144H0z\"],[12],[13],[1,\"\\n    \"],[13],[1,\"\\n\"],[1,\"    \"],[10,\"style\"],[12],[1,\".cls-1,.cls-2{fill:none}.cls-3{fill:#00ac43}.cls-4{fill:#f9000a}.cls-7{fill:#ff5d10}.cls-10{fill:#00aff4}.cls-2{stroke:var(--primary);stroke-linecap:round;stroke-linejoin:round;stroke-width:8.75px}\"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"rect\"],[14,0,\"cls-3\"],[14,\"x\",\"565.81\"],[14,\"y\",\"229.93\"],[14,\"width\",\"194.54\"],[14,\"height\",\"46.05\"],[14,\"rx\",\"23.02\"],[14,\"ry\",\"23.02\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-2\"],[14,\"d\",\"M271.42 434.36c4.99-12.76 20.17-26.82 38.23-35.03\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-3\"],[14,\"d\",\"M538.32 438.29s21.75-37.26 45.83-39.8 31-7.82 51 17.86 27.92 85.85 27.92 85.85l-102 9.77-22.75-73.68Z\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-2\"],[14,\"d\",\"M628.29 725.31 607.34 587.6M272.43 731.77l15.88-146.71\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-1\"],[14,\"d\",\"m175.12 663.62-50.93 10.4v21.5c0 5.85 4.75 10.59 10.6 10.6h56c6.43.01 11.66-5.19 11.67-11.63 0-3.22-1.32-6.31-3.67-8.51l-23.67-22.36Z\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-3\"],[14,\"d\",\"m175.12 663.67-.65-.64-1.62-57.41c2.53-24.51-4.9-32.88-27.35-43.05l-47.63-21.54-1.39-2.36c-7.51 8.9-14.2 15.56-21.32 22.41-4.41 8.73-7.46 16.91-16.84 26.3-9.82 9.85-24.05 14.7-38.59 16.06-.53.07-1.06.14-1.59.18a58.373 58.373 0 0 0 44.71 20.8h61.34v49.61l50.93-10.36Z\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-2\"],[14,\"d\",\"M43.49 460.07h0c-37.14 0-35.45 50.43-39.12 71.6v34.22c0 32.3 26.18 58.48 58.48 58.48h61.34v71.11c0 5.85 4.75 10.59 10.6 10.6h56c6.44.01 11.67-5.2 11.68-11.64v-.02h0c0-3.21-1.33-6.28-3.67-8.48l-24.32-22.92\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-10\"],[14,\"d\",\"M803.42 464.11c-8.3 14.93-16.49 34.58-16.49 54.06 0 2.82-.3 5.45-.85 7.91-1.77 7.9 40.33-6.96 34.71-2.34 8.78 5 13 3.6 15.94 6.23 2.18 1.95 2.41 8.69 9.77 8.37 17.91-.78 28.31.99 36.36 17.17 1.38 2.77-13.15 18.25-13.73 26.04-.38 5.13 12.66 3.49 14.16 4.81 1.01.95 2.1 1.82 3.25 2.6.6-2.94.9-5.94.9-8.94l-.02-68.77c-12.56-48.81-28.25-57.05-28.25-57.05l-11.12 17.67-18.24 2.87-20.46-7.09-5.93-3.54Zm-90.23 207.58-19.27 20.62c-3.93 4.19-3.72 10.78.47 14.71a10.45 10.45 0 0 0 7.14 2.82h53.35c8.13 0 14.72-6.58 14.73-14.71v-20.68l-50.54-11.19a36.243 36.243 0 0 1-5.88 8.43Z\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-10\"],[14,\"d\",\"M883.26 586.37c-10.21-9.01-36.42-9.73-48.22-15.56-7.85-3.88-.6-14.84-9.78-14.44-17.28.75-35.69-3-51-11.72-17.1 14.07-45.49 15-45.49 15l-6 89.8c-.32 4.8-1.6 9.5-3.76 13.8l50.55 11.19v-50.06h73.51c21.05 0 39.2-14.79 43.45-35.41-1.16-.78-2.25-1.64-3.26-2.6Zm-35.22-85.51v25.86c12.73 6.76 26.91 13.89 36 24.59.91-3.74 1.54-7.55 1.9-11.38l-.03-25.9\"],[12],[13],[1,\"\\n  \"],[10,\"circle\"],[14,0,\"cls-4\"],[14,\"cx\",\"44.74\"],[14,\"cy\",\"445.2\"],[14,\"r\",\"33.11\"],[12],[13],[1,\"\\n  \"],[10,\"circle\"],[14,\"cx\",\"44.74\"],[14,\"cy\",\"445.2\"],[14,\"r\",\"33.11\"],[14,\"stroke\",\"var(--primary)\"],[14,\"stroke-miterlimit\",\"10\"],[14,\"stroke-width\",\"8\"],[14,\"fill\",\"#f9000a\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-2\"],[14,\"d\",\"M63.07 472.79c-15.23 10.13-35.79 5.98-45.92-9.25a33.16 33.16 0 0 1-5.18-13.51\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,\"d\",\"m796.69 523.98-12.61 3.87-5.3 8.18 1.02 9.93 13.17 3.75 18.8-1.04 12.51 3.77c-16.56 35.23-138.77 63.72-297.1 70.43-3.44.15.41-16.02-3.8-27.6-7.73-21.27-23.96-44.3-30.44-44.14s-17.59-10.14-29.4-11.27c-13.46-1.28-27.72 6.59-35.33 6.59-17.05 0-40.34 30.58-44.33 45.2-2.29 8.41 3.82 31.41-4.69 31.03-168.32-7.59-294.76-39.82-294.76-78.44s118.85-68.88 279.48-77.68l4.61 18.51 5.27-.88 24.76-19.14c18.5-.61 37.46-.93 56.76-.93 168.4 0 310.59 24.25 355.84 57.47\"],[14,\"fill\",\"url(#Unnamed_Pattern_2)\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-2\"],[14,\"d\",\"M375.99 622.54c-117.18-5.52-213.67-23-260.67-46.23m691.44-6.39c-41.86 26.76-147.39 47.19-277.65 52.87M262.8 329.99h-53.99l-98.31 97.68a1.64 1.64 0 0 1-2.04 1.1 1.65 1.65 0 0 1-1.17-1.55l40-97.23h-13.7c-13.93 0-25.22-11.29-25.22-25.22h0v-36c0-13.93 11.29-25.22 25.22-25.22h98.54m45.56 0h97.74c13.93 0 25.22 11.29 25.22 25.22h0v36c0 13.93-11.29 25.22-25.22 25.22h-90.04\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-4\"],[14,\"d\",\"M278.44 265.92h47.42c10.61 0 19.22 8.61 19.22 19.22s-8.61 19.22-19.22 19.22h-43.24m-30.39 0h-89.88c-10.61 0-19.22-8.61-19.22-19.22s8.61-19.22 19.22-19.22h73.64\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-2\"],[14,\"d\",\"M510.58 245.83h-59.9c-9.69 0-39.83 0-39.83 54.09 0 40.45 50.23 66.71 75.59 77.39 1.44.6 2.12 2.26 1.52 3.7a2.84 2.84 0 0 1-2.62 1.74h-9.27c-41.74 0-78.62-20.82-100.81-52.65m76.66-257.08h240.16c16.97 0 30.73 13.75 30.74 30.72h0v77.49\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-7\"],[14,\"d\",\"M448.88 104.11h217.34c12.71 0 23.02 10.31 23.02 23.02 0 12.72-10.31 23.03-23.02 23.03H448.88\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-2\"],[14,\"d\",\"M278.4 232.73c-4.53 58.89 3.81 90.65 12.24 113 .87 2.32-.3 4.91-2.62 5.78-1.68.63-3.58.2-4.83-1.1-40.93-43.2-49.64-90.68-52.44-118.11-.93-9.29-8.75-16.36-18.08-16.36h-48c-24.89 0-45.06-20.18-45.06-45.07V49.43c0-24.88 20.18-45.05 45.06-45.06h237.55c24.88 0 45.05 20.18 45.06 45.06v121.43c0 24.89-20.17 45.06-45.06 45.07h-105.7c-9.5 0-17.39 7.33-18.12 16.8Zm533.38-30.61V307.3c0 11.54-9.35 20.89-20.89 20.89h-85.17c-23 0 40.45 59.24 47 79.77.69 2.13-.49 4.42-2.62 5.11-1.04.34-2.18.24-3.15-.28-30.43-15.72-104.35-84.6-111.69-84.6H531.49c-11.54 0-20.89-9.34-20.9-20.88h0V202.12c0-11.54 9.35-20.89 20.89-20.89h259.4c11.54 0 20.89 9.34 20.9 20.88h0Z\"],[12],[13],[1,\"\\n  \"],[10,\"circle\"],[14,0,\"cls-7\"],[14,\"cx\",\"456.74\"],[14,\"cy\",\"485.07\"],[14,\"r\",\"33.11\"],[12],[13],[1,\"\\n  \"],[10,\"circle\"],[14,\"cx\",\"456.74\"],[14,\"cy\",\"485.07\"],[14,\"r\",\"33.11\"],[14,\"fill\",\"#00ad43\"],[14,\"stroke\",\"var(--primary)\"],[14,\"stroke-linecap\",\"round\"],[14,\"stroke-linejoin\",\"round\"],[14,\"stroke-width\",\"8.75\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,\"d\",\"M452.95 539.86c-57.21 0-70.44 50.56-70.44 50.56l-1-.98c0-19.55-2.76-84.5 75.23-84.5 0 0 72.79-4.18 70.38 92.4 0 0-11.55-53.06-73.21-57.48\"],[14,\"stroke\",\"var(--primary)\"],[14,\"stroke-linecap\",\"round\"],[14,\"stroke-linejoin\",\"round\"],[14,\"stroke-width\",\"8.75\"],[14,\"fill\",\"#ff5d10\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-2\"],[14,\"d\",\"M4.38 482.14v221.93m170.11-41.06-50.3 11.85m256.52 10.88v-72.67c0-40.43 32.78-73.21 73.21-73.21h0c40.43 0 73.21 32.78 73.21 73.21h0v70s-38.8 24.22-72.31 24.22-74.11-21.55-74.11-21.55Zm0 71.82v-81.82m146.41 81.82v-84.51m360.29-207.97v244.77m-168.22-46.84 50.42 11.85\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-10\"],[14,\"d\",\"M400.67 88.91c0 12.7-10.3 23-23 23h-48.11c-12.7 0-23 10.3-23 23s-10.3 23-23 23H183.41c-12.7 0-23-10.3-23-23v-46c0-12.7 10.3-23 23-23h194.24c12.7-.01 23.01 10.28 23.02 22.98v.02Z\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-2\"],[14,\"d\",\"M4.38 624.37h119.81v79.7m763.22-79.7H772.19v85.49\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-10\"],[14,\"d\",\"M359.84 458.42a91.653 91.653 0 0 0-18.19 6.75c-10.91 5.47-17.74 16.9-16.58 29.05 1.42 14.92 13.28 15.75 13.28 15.75 15-2.88 19.1-22 19.1-22 4.89-.65 9.74-1.63 14.5-2.93-.41-9.77-4.56-19.96-12.11-26.62Zm-86.87-15.63c-.94-4.95-1.93-10.39-2.93-16.24-4.75-27.63-27.11-23.44-27.11-23.44-20.07 3.37-22.94 13.39-22.88 18.13.14 12 9.81 11.08 9.81 11.08l6.73-1.09c4.2-.67 8.15 2.2 8.81 6.4.04.23.06.46.08.69l.87 13.15c9.37 2.04 20.41-1.77 26.62-8.68Z\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-1\"],[14,\"d\",\"M279.25 472.75s-2.78-11.55-6.28-30c-6.21 6.91-17.25 10.72-26.62 8.68l1.92 29 30.98-7.68Z\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-2\"],[14,\"d\",\"M340.6 393.1s23.39 1.7 44.77 21.66 17.19 48.42 17.19 48.42-4.57 19.26-45.12 24.84c0 0-4.06 19.07-19.1 22 0 0-11.86-.83-13.28-15.75-1.16-12.15 5.68-23.58 16.58-29.05a97.563 97.563 0 0 1 34.68-9.63m-128.04 24.85-2.79-42.13c-.28-4.24-3.95-7.45-8.2-7.17a8.1 8.1 0 0 0-.69.08l-6.73 1.09s-9.67.94-9.81-11.08c-.06-4.74 2.81-14.76 22.88-18.13 0 0 22.36-4.19 27.11 23.44 4.75 27.63 9.21 46.21 9.21 46.21\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-3\"],[14,\"d\",\"M658.29 426.76c-15.92-25.12-52.56-32.38-52.56-32.38l32.18 51.91c1.26 2.53 2.27 5.18 3 7.91 8.38-4.88 18.21-8.89 27.59-9-3-6.36-6.41-12.52-10.21-18.44Z\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-7\"],[14,\"d\",\"M668.54 445.17c-9.38.15-19.21 4.16-27.59 9 5.1 19.55-16.38 18.53-16.38 18.53-14.66 1.7-24.71 5.32-24.79 10.74s5.95 5.25 5.95 5.25c6.33 6.14 20.59 5.33 20.59 5.33 12 1.83 19.81-4 19.81-4 13.76.2 21.35-3.28 25.43-6.59 2.95-2.45 4.56-6.17 4.31-10-.48-8.19-1.9-16.57-7.33-28.26Z\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-2\"],[14,\"d\",\"M658.29 426.76c14.19 22.4 16.89 34.73 17.58 46.64.25 3.83-1.35 7.55-4.3 10-4.09 3.3-33.22 10.46-45.25 8.63 0 0-14.26 5.81-20.59-.33 0 0-8-3.82-7.95-9.25.06-4.46 6.86-9.72 17.4-12.4 3.6-.87 7.3-1.21 11-1 7.28.35 22.3-1.31 11.77-22.8\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-7\"],[14,\"d\",\"M618.28 488.89c-1.44-6.13-10.18-16-21-16.16l-29.87-4.53a6.416 6.416 0 0 1-3.57-4.58 61.77 61.77 0 0 1-1.22-12.13c-8.83-3.68-19.47-6.31-27.75-2.2-2.1 22.23.28 30.12.28 30.12s1.81 12.2 21.38 17.77c2.86.8 5.82 1.13 8.78 1 7.32-.31 23.64-.84 33.18 0 1.58.16 3.16.24 4.75.24 5.42.06 16.26-4.3 15.04-9.53Z\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-3\"],[14,\"d\",\"M562.67 451.49c0-2.75.28-5.49.84-8.18l-6.43-36.79s-19.31 15.57-21.89 40c-.11 1-.2 1.89-.28 2.81 8.29-4.15 18.93-1.52 27.76 2.16Z\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-2\"],[14,\"d\",\"M535.19 446.48c-2.59 24.38 0 32.93 0 32.93s1.19 8 12 14c6.53 3.52 13.96 5 21.34 4.24 8.73-.83 23.61-2 32.11-1.19 1.61.15 3 .23 4.31.24 8.18.07 17.49-4.89 13.28-11.91-2.58-4.3-7.55-11.82-21-12.07l-29.87-4.53a6.416 6.416 0 0 1-3.57-4.58c-.89-4.45-2-12.75-.38-20.31\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-4\"],[14,\"d\",\"M149.5 496.49c-23.63-10.36-39.28 2.79-39.28 2.79l-28.48 22.87 4.15 11.17 4.51-1.3c4.65-5.58 11.72-19.72 31.16-13.84 13.49 4.08 32.11-3 36.86-6.93s-8.92-14.76-8.92-14.76Z\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-2\"],[14,\"d\",\"m80.71 520.49 29.5-21.21s15.65-13.15 39.28-2.79c0 0 13.66 10.82 8.92 14.76s-23.47 11.33-36.86 6.93\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-4\"],[14,\"d\",\"M107.07 532.9s-10.79-2.35-32.6 5.75c-1.68 8.85 0 18.8 4.56 26.11 4.46-1.77 8.59-4.27 12.23-7.4 0 0 20.74 4 36.53.72 0 0 7.28-5.36 8-11.62.06 0-9.24-12.86-28.72-13.56Z\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-2\"],[14,\"d\",\"M20.88 501.27s2.55 36.37 20.6 62.15a16.939 16.939 0 0 0 16.39 7c9.74-1.49 24.44-5 33.41-13 0 0 20.74 4 36.53.72 0 0 7.28-5.36 8-11.62 0 0-9.3-12.86-28.77-13.56 0 0-11.46-2.5-34.63 6.52a8.003 8.003 0 0 1-10.36-4.55l-.12-.33\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,\"d\",\"M292.15 402.63c-4.26-17.78 6.7-35.65 24.48-39.92 17.78-4.26 35.65 6.7 39.92 24.48 4.26 17.78-6.7 35.65-24.48 39.92-2.53.61-5.12.91-7.73.91-15.3 0-28.6-10.47-32.19-25.34\"],[14,\"stroke-miterlimit\",\"10\"],[14,\"stroke-width\",\"8\"],[14,\"stroke\",\"var(--primary)\"],[14,\"fill\",\"#00aff4\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-2\"],[14,\"d\",\"M324.34 361.76c18.29 0 33.11 14.83 33.11 33.11 0 18.29-14.83 33.11-33.11 33.11-15.3 0-28.6-10.48-32.19-25.35\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,\"d\",\"M292.15 402.63c-.61-2.54-.91-5.15-.91-7.76 0-2.09.19-4.17.58-6.22\"],[14,\"stroke\",\"var(--primary)\"],[14,\"stroke-linecap\",\"round\"],[14,\"stroke-linejoin\",\"round\"],[14,\"stroke-width\",\"8.75\"],[14,\"fill\",\"#00aff4\"],[12],[13],[1,\"\\n  \"],[10,\"circle\"],[14,\"cx\",\"576.03\"],[14,\"cy\",\"390.79\"],[14,\"r\",\"33.11\"],[14,\"stroke\",\"#ff5d10\"],[14,\"stroke-miterlimit\",\"10\"],[14,\"stroke-width\",\"8\"],[14,\"fill\",\"#ff5d10\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-2\"],[14,\"d\",\"M608.9 386.8c2.15 18.16-10.83 34.62-28.99 36.77a33.102 33.102 0 0 1-30.83-13.63m311.4 44.17s25.43 28.24 25.43 59.87v25.86s-2.94 39.87-27 39.87c-15 0-28.72-10-33.21-21.32a15.538 15.538 0 0 0-16.89-9.53c-7.6 1.17-17.33 1.71-25.8-.86a7.075 7.075 0 0 1-5-7.57c.5-4.6 2-10.72 6.07-12.58 8.18-3.69 16.38-5 26.79-4.8 14.45-.6 28.3 5.81 37.2 17.2v-39.48\"],[12],[13],[1,\"\\n  \"],[10,\"circle\"],[14,0,\"cls-2\"],[14,\"cx\",\"829.8\"],[14,\"cy\",\"441.63\"],[14,\"r\",\"33.11\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-2\"],[14,\"d\",\"M363.91 434.36s3.77 15.61 0 22.35M71.22 503.56l10.79 30.5\"],[12],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[]]",
    "moduleName": "wizard/templates/components/illustration-members.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("wizard/templates/components/illustration-welcome", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <svg xmlns="http://www.w3.org/2000/svg" id="wizard-welcome-illustration" viewBox="0 0 941.69 730.8">
    <defs>
      {{! template-lint-disable no-forbidden-elements }}
      <style>.cls-1{fill:#00ac43}.cls-3{fill:#f9000a}.cls-4{fill:#fff9a3}.cls-5{fill:#ff5d10}.cls-7{fill:#00aff4}.cls-10{stroke:var(--primary);stroke-linecap:round;stroke-linejoin:round;stroke-width:8.75px;fill:none}</style>
    </defs>
    <path class="cls-1" d="M575.12 627.96c1.62 10.85 5.09 25.81 12.47 37.62 1.77 2.82 3.35 5.75 4.73 8.78h-70.23c-.31-2.63-1.57-5.06-3.53-6.84-9.8-8.94-26.52-26.37-26-40.87.39-11 3.81-16.75 6.91-19.77 5.59-.88 11.04-2.49 16.21-4.77 30.1-13.35 75-54.89 60.22-126a67.107 67.107 0 0 1 17.54 14.37c3.42 3.99 6.62 8.17 9.6 12.5 22.41 32.81 14.63 86.28-17.16 110.12l-1.55 1.16c-6.96 5.22-10.51 5.1-9.21 13.7Z"/>
    <path class="cls-3" d="M281.65 471.55c-71.27 74.43-140 16.21-140 16.21-27-41.2-32-93-32.53-120.72-.08-4-.07-7.44 0-10.31-8.29-1.88-16.38-4.56-24.15-8-14.83-6.74-27.16-16.83-36.11-32.94a98.627 98.627 0 0 1-7.25-16.55c4.11-17.76 14.48-39.93 39.16-59.53 1.32 2.3 2.73 4.69 4.22 7.14 25.91 42.7 78.4 105.63 155.51 87.63-2.91 14.82-5.76 44.76 12.23 66.44a54.15 54.15 0 0 1-8 1.27s24.56 34.08 36.92 69.36Z"/>
    <path class="cls-1" d="M345.19 307.87c-24 63.33-63.33 84.21-85 91.06l-1.21.37c-2.35.71-4.47 1.25-6.31 1.66-18-21.68-15.14-51.62-12.23-66.44 1.37-.31 2.75-.66 4.14-1 7.63-2.06 15.09-4.74 22.29-8 40.45-18.23 64.46-21.63 78.32-17.65Zm160.33 296.32c-5 20.94-20.3 18.79-32.47 22-7.08 1.89-11.58 8.83-10.42 16.07.78 4.65 1.99 9.21 3.62 13.63 2.26 6.29 4.12 12.44 6 18.35l-72.07-3.7c-.22-5.04-1.47-9.97-3.67-14.51-8.45-18.83-19.16-34.53-21.55-47.07-3.43-18.46 8.75-36.21 27.21-39.64 1.01-.19 2.03-.33 3.06-.43l23-2.18 18.21 22.67 36.42 16.78 22.66-1.97Z"/>
    <path class="cls-7" d="M102.19 637.62c-8.77 38-48.24 24.86-48.24 24.86-29.32-6.64-43.15-16.1-49.58-24.18-3.9-4.88-3.1-11.99 1.77-15.88a11.3 11.3 0 0 1 4.5-2.18 110.456 110.456 0 0 0 44.06-21.29c3.07-2.48 5.36-5.81 6.57-9.57l40.92 48.24Zm180.21 72.12c-18.74 15.53-60.82 17.8-80.78 17.8-22.66 0-20.47-13.89-13.88-17.54 3.8-2.13 14.46-10.12 22.77-16.47 1.2-.91 2.19-2.06 2.92-3.37l45.6-52.54c5 7.32 10.13 14.56 14.23 21.2 9.45 15.29 13.08 28.37 14.48 36.17a15.563 15.563 0 0 1-5.34 14.75Z"/>
    <path d="M277.39 487.79a80.63 80.63 0 0 1 2.47 18.29c.18 35.68-16.5 52.12-29.9 65.33-4.68 4.61-9.1 9-12.39 13.7-11 15.85.7 36.94 10.47 51.82l-29.8 34.34c-.5-.53-1.03-1.04-1.59-1.51-4.32-3.68-9.35-7.26-14.21-10.71-11.83-8.42-24.07-17.12-26.7-27.28-3.06-11.77 4.39-24.92 11.6-37.63 2.35-4.15 4.78-8.44 6.79-12.62.11-.22.21-.44.31-.67 4.62-10.14.14-22.1-10-26.72a20.09 20.09 0 0 0-8.29-1.81c-2.24 0-4.46.38-6.58 1.1a54.274 54.274 0 0 1-17.44 2.59c-2 0-4-.08-6-.23-.93-.08-1.88-.11-2.81-.11-15 0-28.4 9.38-33.51 23.49-4.54 12.68-8.89 28.23-11.92 39.8l-27.1-31.94c.32-2.34.34-4.72.08-7.07-3.53-31.46.9-53.71 5.25-66.83 3.29-9.94 12.59-16.66 23.06-16.64h39.5c7.85 5.81 32.25 21.67 64.7 21.67 26.25 0 51.09-10.22 74-30.39m4.27-16.24c-27.78 29.05-55.14 37.96-78.27 37.96-36.13 0-61.7-21.67-61.7-21.67h-42.5c-14.25-.04-26.92 9.08-31.41 22.61-5.06 15.3-9.23 38.58-5.64 70.55.32 2.85.03 5.73-.85 8.46l40.92 48.24s7.68-32.82 15.81-55.51a26.733 26.733 0 0 1 25.27-17.69c.71 0 1.42 0 2.13.08 2.13.16 4.38.26 6.71.26 6.87.1 13.71-.91 20.26-3 5.93-2.08 12.43 1.03 14.51 6.96.97 2.77.84 5.81-.38 8.49-.06.14-.12.28-.19.42-8.2 17-24.13 36.55-19 56.29 4.71 18.2 28.89 29.83 43.71 42.45 2.52 2.14 3.94 5.3 3.85 8.61-.02.72.55 1.31 1.27 1.33h.05c.38 0 .75-.16 1-.45l41.91-48.29c-11.88-17.55-22.53-35.65-14.28-47.52 11.7-16.81 44.13-32.16 43.86-84.07-.06-10.82-2.83-22.72-7-34.48l-.04-.03Z" fill="var(--primary)"/>
    <path class="cls-1" d="M80.76 239.74c-24.68 19.6-35 41.77-39.16 59.53-2.24-6.67-3.98-13.49-5.21-20.42-9.91-54 2.81-84.54 14.91-100.51l15 32.36c4.21 9.97 9.04 19.67 14.46 29.04Z"/>
    <path class="cls-10" d="M135.92 478.21s13.8 29.29 29.88 49.76m32.31-129.09s30.46 8.47 60.92.42"/>
    <path class="cls-7" d="m811.27 401.62 10.6-10.58 37.26 48.13-38.39 29.59-38 29.26-.1.06c-2.79 1.65-56.57 32.61-71.52-29.32h28.68c6.92.04 13.24-3.95 16.16-10.23 1.46-3.41 3.62-6.47 6.33-9 6-5.33 27.48-26.5 48.76-47.73"/>
    <path class="cls-4" d="M937.32 472.56c-71.19 44.44-116.58-3.8-116.58-3.8l38.39-29.59-37.26-48.13-10.6 10.58-31.76-42.59 47.93-49.4c16.51 16.02 42.89 15.62 58.91-.89.84-.86 1.63-1.76 2.39-2.69 17.74 17.26 37.2 41.8 42.44 69.86 6.52 34.89 10.07 64.15 6.14 96.65Z"/>
    <path class="cls-3" d="M937.32 472.56c-2.24 18.57-6.94 38.2-14.91 60.52-13.29 37.21-29.52 91.58-40.26 128.66-29.54-21-67.36-14.61-67.36-14.61 4.16-11.14 5.09-48.9 5.27-71.08.05-6.15-2.14-3.14-6.48 1.21l-95.86 84.48c11.7-40.93-14.61-65.79-14.61-65.79 2.9-3.62 78.48-96.48 79.66-97.93l38-29.26s45.36 48.24 116.55 3.8Z"/>
    <path class="cls-7" d="M811.08 401.8c-21.28 21.23-42.72 42.4-48.76 47.73a26.686 26.686 0 0 0-6.33 9 17.705 17.705 0 0 1-16.16 10.23h-25.75c-1.31 0-2.37-1.07-2.36-2.38 0-.17.02-.33.05-.49l10.35-47.69 56.39-58.13.47-.49c10.38 13.9 23.39 30.9 32.1 42.22Z"/>
    <path class="cls-10" d="M811.27 401.62c-.06.07-.12.13-.19.18m-55.1 54.11c20.59-20.56 104.29-103.43 104.29-103.43m-38.68 38.84 34.87 46m54.98-38.44-52.32 40.29m-80.63-79.09 30.66 43.66M482.85 79.03l99.63 149.95M688.47 87.16l-2.62 41.45M509.22 50.24l63.02 116.6m-23.39-97.96 65.62 123.99M564.3 23.49l56.19 120.69m-42.43 232.46 77.47-102.34M435.75 130.88s64.57 4.47 76-8.29m-110.71 83.02a77.1 77.1 0 0 0 2.15-44.28c-1.27-4.95-4.83-8.13-8.67-7.72-5.31.58-12.27 2.69-13.46 9.71-1 5.9 1.75 11.12 4.68 14.82 1.71 2.15.91 6-1.37 6.61-4.25 1.2-8.86 4-9.21 10.3-.42 7.66 8.8 13.42 15.47 16.56 4.08 1.93 8.56-.69 10.41-6Zm-63.46-97.07s12.67-21.06 7.8-45.26m-101.04 87.88 2.92 18.2s36.9-5.1 64.32-6.92c10.43-.68 19.44 7.23 20.12 17.66.03.41.04.82.04 1.23h0c0 3.61 2.92 6.54 6.53 6.55h.11c5.94 0 10.85-4.62 11.24-10.54.6-8.64 2.19-19.48 6.48-19.68h.22c8.07-.38 14.41-7.03 14.4-15.11v-2c0-4.35-3.37-7.97-7.71-8.27-21.01-1.45-80.2-3.25-118.67 18.88Zm16.9-96.17-12.34 67.6s34.11 3.56 36.06-27.63M78.81 108.54s65.79-22.36 57.51-97.89m-4.4 97.89s69.72-26.06 61.42-103.41m-10.48 123.66s66-20.25 61.49-108.4"/>
    <circle class="cls-1" cx="120.48" cy="326.94" r="41.67"/>
    <path d="M146.89 359.17c-17.76 14.64-44.02 12.11-58.66-5.65-11.76-14.27-12.71-34.57-2.34-49.88" stroke="var(--primary)" stroke-linecap="round" stroke-linejoin="round" stroke-width="8.75" fill="#00ac43"/>
    <path class="cls-10" d="M522.1 674.36h-.01m-56.24 32.42c-22.3 9.52-50.31 13.82-69.53 11.55-24.86-2.92-27.05-9.8-19.74-18.58 3.53-4.23 11.14-10.87 18-16.6 4-3.32 5.53-7.78 5.5-12.61l72.07 3.7c1.11 3.62 2.22 7.15 3.4 10.56 3.04 8.74-1.2 18.34-9.7 21.98Zm122.87 2.7c-14.63 5.07-43.78 12.44-74.93 5-6.4-1.52-10.35-7.95-8.82-14.35.58-2.44 1.92-4.64 3.82-6.27l.38-.32a68.18 68.18 0 0 0 10.74-11.2 10.88 10.88 0 0 0 2.14-8h70.23a71.853 71.853 0 0 1 5.79 19.78c.92 6.69-2.98 13.11-9.35 15.36Zm232.01-240.72s47.33 49 116.58 3.8"/>
    <path class="cls-7" d="M898.11 279.72c0 23.01-18.65 41.67-41.66 41.68-23.01 0-41.67-18.65-41.68-41.66 0-23.01 18.65-41.67 41.66-41.68h.01c22.91-.11 41.56 18.38 41.67 41.29v.37Z"/>
    <path d="M888.74 306.05c-14.54 17.83-40.78 20.51-58.61 5.97-.93-.76-1.83-1.56-2.69-2.39" stroke="var(--primary)" stroke-linecap="round" stroke-linejoin="round" stroke-width="8.75" fill="#00aff4"/>
    <path class="cls-5" d="m717.72 661.74-26.21 26.23c-3.36 3.36-8.82 3.36-12.18 0a8.522 8.522 0 0 1-1.53-2.09c-10.1-19.25-30.3-61.5-29.2-89.43.16-6.07 5.22-10.87 11.29-10.7 2.18.06 4.29.76 6.07 2.02 2.96 2.11 5.63 4.62 7.91 7.45 15.35 18.27 26.32 4.39 29.25.73 0 0 26.3 24.86 14.6 65.79Zm164.43 0c-2.88 10-5.38 18.71-7.3 25.51-2.62 9.19-10.86 15.64-20.41 16l-69 2.62c-6.19.25-11.4-4.56-11.65-10.75-.07-1.71.26-3.42.95-4.99 1.46-3.25 4.09-5.84 7.37-7.23 13.16-5.85 26.72-19.74 32.73-35.81-.05.04 37.77-6.3 67.31 14.65Z"/>
    <path class="cls-10" d="M691.5 687.97c-3.36 3.36-8.82 3.36-12.18 0a8.522 8.522 0 0 1-1.53-2.09c-10.1-19.25-30.3-61.5-29.2-89.43m54.51-.5s26.31 24.86 14.61 65.79m97.08-14.61s37.82-6.34 67.36 14.61M33.33 232.34s-9.29 88.14 51.64 116.42m-44 255.43 9.09 13.32-20.8-6.18 6.5 10.08-16.57-4.55m189.74 73.1 4.87 13.32s-12.3-5.2-12.3-4.22 1.62 8.12 1.62 8.12l-10.4-1.3m586.74 1.62h81.9M4.38 638.3s26.51 29.24 76.22 24.37m111.11 63.35s49.79 4.46 90.68-16.28M544.55 597.1s-94.38 4.86-26 70.42M803.1 44.4 759 456.45"/>
    <path class="cls-4" d="M49 138.6s-23.6-40.4 41.71 33.74 62.31 116.72 120.31 106.93c43.02-7.26 43.49 50.21 112.21-19.59 19.07-19.37 0 72.91 125.54-3.99 20.91-12.81-.39-8.42-1.26 10.79s27.88 69.2 40.62 66.11 25.64 38.05 43.92 19.89 121.64-8.61 129.83 7.71c4.09 8.15 108.14-6.23 104.52 27.28-1.73 15.96-.49 14.23-3.29 30.73-4.67 27.49-7.11 50.76-7.11 50.76l-68.39-5.06-25.51-19.68-9.67-25.82-25.73-15.43-28.85-1.98-5.44 55.66-22.31 16.46-18.66-16.46 34.55-99.71-62.67 35.74-40.76 23-20.15 1.89-47.81-119.68-14.45-2.92-53.64 36.82-45.63 5.14-28.34 15.75-52.86 8.49-48.63-12.21-78.79-52.46-45.95-73.62 2.71-84.28Z"/>
    <path class="cls-10" d="M575.91 476.11s16.75-6.33 16.42-26.62 5.51-48.7 5.51-48.7 34.11-7.35 54.58 17.37v12c0 6.19 3.86 11.73 9.67 13.86l11.77 4.46v.69c0 7.76 6 14.19 13.74 14.73l57.74 4c6.88.48 12.92-4.56 13.67-11.42l44.09-412c.76-7.05-4.35-13.38-11.4-14.14h-.03l-58.83-6.16a16.253 16.253 0 0 0-16.73 10l-5 12.12-1-.11c-8.8-1.04-16.8 5.16-18 13.94l-3.6 27.03s-33.16 25.32-44.86 6.82l-12-44.23a30.86 30.86 0 0 0-23.64-22.21c-23.51-4.71-59-6.13-72.53.16-14.16 6.56-51.32 49.33-71.77 73.71a47.425 47.425 0 0 1-36.31 16.94h-1.21c-3.97 0-7.72-1.83-10.18-4.94-5-6.31-13.05-17-15-22.35-2.93-7.8-35.58-35.58-55.56-27.78 0 0-19.87-32.68-67.18-26.15a34.603 34.603 0 0 1-22.41-4.32 23.284 23.284 0 0 1-7.39-6.57c-6.34-9.26-53.12-33.14-112.09-15.59s-92.12 61.89-89.3 111.11c.32 4.5.96 8.98 1.91 13.39a99.51 99.51 0 0 1 .31 35.6c-2.9 16.87-4.54 42.5 4.65 67.3 15.34 41.43 135.38 178.48 246.91 98.68 3.56-2.54 7.92-3.69 12.27-3.25 10.7 1.1 31.57 1.9 43.3-6.54 16.24-11.7 36.06-31.2 43.7-32.17s14.45 2.92 14.45 2.92 40.92 83.12 41.92 120.51"/>
    <path class="cls-10" d="m242.71 259.68 4.23-66.81s30.21 8.12 29.89 33.4m23.39 86.69c.32-1.29 32-35.87 20.47-82.19m-198.83-74.08s58.28 45.31 26.87 139.62m54.35 19.48S234 216.42 156.5 129.57m57.21 203.02s39.56 30.41 74.77 12.1m181.62 7.83 188.4-208.34M500.6 381.91 655.53 210.7m-240.94 86.99s51.66.74 75.79 13.16"/>
    <path class="cls-10" d="M463.91 303.09c1.32 7.52 5.62 23.33 18.94 29.5M746.1 25.49l-50.31 437.42m15.36-416.69-37.3 402.91m-21.44-30.93 9.46-61.46M82.22 131.64s-30.71 13.47-31.91 31.52m365.67-49.75s18.1 15.2 30.52 27.07c8 7.73 17.53 35.09 16.81 52.35-.35 8.42-6.78 16.24-6.58 24.41.43 17.36 3.66 38.75-20.47 50.44s-44.54 31.28-44.54 31.28m123.96 301.71a65.72 65.72 0 0 1-16.18 4.77c-29.05 4.72-56.65-14.47-71-34.94-22-31.43-13.93-62.51-19.65-109-5.54-45.09-2.56-47.52-2.56-47.52s19.11-4.2 46.39.83a71.986 71.986 0 0 0 56.82-13.57l.9-.69c4.23-3.25 8.51-6.46 12.9-9.51 17.59 5.63 31.35 26.61 30.41 52.16h0c-4.5 9.25-.64 20.4 8.61 24.9.43.21.88.4 1.33.58 2.1.83 4.24 1.75 6.37 2.79h.06c3.74 1.82 6.36 5.36 7 9.48 10.93 67.32-32.21 106.78-61.4 119.72Z"/>
    <path d="M623.41 372.26c-3.26 7.33-7.32 14.28-12.11 20.71a138.21 138.21 0 0 1-35.07 33.23c-4.75 3.15-10.7 7.2-16.7 11.54-2.49 1.78-4.5 4.15-5.85 6.9.94-25.55-12.82-46.53-30.41-52.16 7.86-5.63 16.23-10.51 25-14.59 39.31-17.82 39.86-22.51 56.41-41.8 3.54-4.17 9.79-4.69 13.97-1.15a9.7 9.7 0 0 1 1.89 2.15c5.1 7.99 9.32 20.24 2.87 35.17Z" stroke="var(--primary)" stroke-linecap="round" stroke-linejoin="round" stroke-width="8.75" fill="#ff5d10"/>
    <circle class="cls-5" cx="424.73" cy="431.81" r="41.67"/>
    <path class="cls-10" d="m643.65 93.98 19.43 59.33a70.213 70.213 0 0 1 3.43 21.76v9c0 3.75-2.2 7.16-5.63 8.69h0a9.51 9.51 0 0 0-5.63 9c.53 18.44 1.81 71.92-.19 92.34 0 .35-.07.7-.1 1a99.551 99.551 0 0 1-17.25 46.57m-199.9 50.71c21.77 7.47 33.35 31.18 25.88 52.94-7.47 21.77-31.18 33.35-52.94 25.88a41.71 41.71 0 0 1-9.18-4.47"/>
  </svg>
  
  */
  {
    "id": "K06jLD//",
    "block": "[[[10,\"svg\"],[14,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[14,1,\"wizard-welcome-illustration\"],[14,\"viewBox\",\"0 0 941.69 730.8\"],[12],[1,\"\\n  \"],[10,\"defs\"],[12],[1,\"\\n\"],[1,\"    \"],[10,\"style\"],[12],[1,\".cls-1{fill:#00ac43}.cls-3{fill:#f9000a}.cls-4{fill:#fff9a3}.cls-5{fill:#ff5d10}.cls-7{fill:#00aff4}.cls-10{stroke:var(--primary);stroke-linecap:round;stroke-linejoin:round;stroke-width:8.75px;fill:none}\"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-1\"],[14,\"d\",\"M575.12 627.96c1.62 10.85 5.09 25.81 12.47 37.62 1.77 2.82 3.35 5.75 4.73 8.78h-70.23c-.31-2.63-1.57-5.06-3.53-6.84-9.8-8.94-26.52-26.37-26-40.87.39-11 3.81-16.75 6.91-19.77 5.59-.88 11.04-2.49 16.21-4.77 30.1-13.35 75-54.89 60.22-126a67.107 67.107 0 0 1 17.54 14.37c3.42 3.99 6.62 8.17 9.6 12.5 22.41 32.81 14.63 86.28-17.16 110.12l-1.55 1.16c-6.96 5.22-10.51 5.1-9.21 13.7Z\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-3\"],[14,\"d\",\"M281.65 471.55c-71.27 74.43-140 16.21-140 16.21-27-41.2-32-93-32.53-120.72-.08-4-.07-7.44 0-10.31-8.29-1.88-16.38-4.56-24.15-8-14.83-6.74-27.16-16.83-36.11-32.94a98.627 98.627 0 0 1-7.25-16.55c4.11-17.76 14.48-39.93 39.16-59.53 1.32 2.3 2.73 4.69 4.22 7.14 25.91 42.7 78.4 105.63 155.51 87.63-2.91 14.82-5.76 44.76 12.23 66.44a54.15 54.15 0 0 1-8 1.27s24.56 34.08 36.92 69.36Z\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-1\"],[14,\"d\",\"M345.19 307.87c-24 63.33-63.33 84.21-85 91.06l-1.21.37c-2.35.71-4.47 1.25-6.31 1.66-18-21.68-15.14-51.62-12.23-66.44 1.37-.31 2.75-.66 4.14-1 7.63-2.06 15.09-4.74 22.29-8 40.45-18.23 64.46-21.63 78.32-17.65Zm160.33 296.32c-5 20.94-20.3 18.79-32.47 22-7.08 1.89-11.58 8.83-10.42 16.07.78 4.65 1.99 9.21 3.62 13.63 2.26 6.29 4.12 12.44 6 18.35l-72.07-3.7c-.22-5.04-1.47-9.97-3.67-14.51-8.45-18.83-19.16-34.53-21.55-47.07-3.43-18.46 8.75-36.21 27.21-39.64 1.01-.19 2.03-.33 3.06-.43l23-2.18 18.21 22.67 36.42 16.78 22.66-1.97Z\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-7\"],[14,\"d\",\"M102.19 637.62c-8.77 38-48.24 24.86-48.24 24.86-29.32-6.64-43.15-16.1-49.58-24.18-3.9-4.88-3.1-11.99 1.77-15.88a11.3 11.3 0 0 1 4.5-2.18 110.456 110.456 0 0 0 44.06-21.29c3.07-2.48 5.36-5.81 6.57-9.57l40.92 48.24Zm180.21 72.12c-18.74 15.53-60.82 17.8-80.78 17.8-22.66 0-20.47-13.89-13.88-17.54 3.8-2.13 14.46-10.12 22.77-16.47 1.2-.91 2.19-2.06 2.92-3.37l45.6-52.54c5 7.32 10.13 14.56 14.23 21.2 9.45 15.29 13.08 28.37 14.48 36.17a15.563 15.563 0 0 1-5.34 14.75Z\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,\"d\",\"M277.39 487.79a80.63 80.63 0 0 1 2.47 18.29c.18 35.68-16.5 52.12-29.9 65.33-4.68 4.61-9.1 9-12.39 13.7-11 15.85.7 36.94 10.47 51.82l-29.8 34.34c-.5-.53-1.03-1.04-1.59-1.51-4.32-3.68-9.35-7.26-14.21-10.71-11.83-8.42-24.07-17.12-26.7-27.28-3.06-11.77 4.39-24.92 11.6-37.63 2.35-4.15 4.78-8.44 6.79-12.62.11-.22.21-.44.31-.67 4.62-10.14.14-22.1-10-26.72a20.09 20.09 0 0 0-8.29-1.81c-2.24 0-4.46.38-6.58 1.1a54.274 54.274 0 0 1-17.44 2.59c-2 0-4-.08-6-.23-.93-.08-1.88-.11-2.81-.11-15 0-28.4 9.38-33.51 23.49-4.54 12.68-8.89 28.23-11.92 39.8l-27.1-31.94c.32-2.34.34-4.72.08-7.07-3.53-31.46.9-53.71 5.25-66.83 3.29-9.94 12.59-16.66 23.06-16.64h39.5c7.85 5.81 32.25 21.67 64.7 21.67 26.25 0 51.09-10.22 74-30.39m4.27-16.24c-27.78 29.05-55.14 37.96-78.27 37.96-36.13 0-61.7-21.67-61.7-21.67h-42.5c-14.25-.04-26.92 9.08-31.41 22.61-5.06 15.3-9.23 38.58-5.64 70.55.32 2.85.03 5.73-.85 8.46l40.92 48.24s7.68-32.82 15.81-55.51a26.733 26.733 0 0 1 25.27-17.69c.71 0 1.42 0 2.13.08 2.13.16 4.38.26 6.71.26 6.87.1 13.71-.91 20.26-3 5.93-2.08 12.43 1.03 14.51 6.96.97 2.77.84 5.81-.38 8.49-.06.14-.12.28-.19.42-8.2 17-24.13 36.55-19 56.29 4.71 18.2 28.89 29.83 43.71 42.45 2.52 2.14 3.94 5.3 3.85 8.61-.02.72.55 1.31 1.27 1.33h.05c.38 0 .75-.16 1-.45l41.91-48.29c-11.88-17.55-22.53-35.65-14.28-47.52 11.7-16.81 44.13-32.16 43.86-84.07-.06-10.82-2.83-22.72-7-34.48l-.04-.03Z\"],[14,\"fill\",\"var(--primary)\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-1\"],[14,\"d\",\"M80.76 239.74c-24.68 19.6-35 41.77-39.16 59.53-2.24-6.67-3.98-13.49-5.21-20.42-9.91-54 2.81-84.54 14.91-100.51l15 32.36c4.21 9.97 9.04 19.67 14.46 29.04Z\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-10\"],[14,\"d\",\"M135.92 478.21s13.8 29.29 29.88 49.76m32.31-129.09s30.46 8.47 60.92.42\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-7\"],[14,\"d\",\"m811.27 401.62 10.6-10.58 37.26 48.13-38.39 29.59-38 29.26-.1.06c-2.79 1.65-56.57 32.61-71.52-29.32h28.68c6.92.04 13.24-3.95 16.16-10.23 1.46-3.41 3.62-6.47 6.33-9 6-5.33 27.48-26.5 48.76-47.73\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-4\"],[14,\"d\",\"M937.32 472.56c-71.19 44.44-116.58-3.8-116.58-3.8l38.39-29.59-37.26-48.13-10.6 10.58-31.76-42.59 47.93-49.4c16.51 16.02 42.89 15.62 58.91-.89.84-.86 1.63-1.76 2.39-2.69 17.74 17.26 37.2 41.8 42.44 69.86 6.52 34.89 10.07 64.15 6.14 96.65Z\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-3\"],[14,\"d\",\"M937.32 472.56c-2.24 18.57-6.94 38.2-14.91 60.52-13.29 37.21-29.52 91.58-40.26 128.66-29.54-21-67.36-14.61-67.36-14.61 4.16-11.14 5.09-48.9 5.27-71.08.05-6.15-2.14-3.14-6.48 1.21l-95.86 84.48c11.7-40.93-14.61-65.79-14.61-65.79 2.9-3.62 78.48-96.48 79.66-97.93l38-29.26s45.36 48.24 116.55 3.8Z\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-7\"],[14,\"d\",\"M811.08 401.8c-21.28 21.23-42.72 42.4-48.76 47.73a26.686 26.686 0 0 0-6.33 9 17.705 17.705 0 0 1-16.16 10.23h-25.75c-1.31 0-2.37-1.07-2.36-2.38 0-.17.02-.33.05-.49l10.35-47.69 56.39-58.13.47-.49c10.38 13.9 23.39 30.9 32.1 42.22Z\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-10\"],[14,\"d\",\"M811.27 401.62c-.06.07-.12.13-.19.18m-55.1 54.11c20.59-20.56 104.29-103.43 104.29-103.43m-38.68 38.84 34.87 46m54.98-38.44-52.32 40.29m-80.63-79.09 30.66 43.66M482.85 79.03l99.63 149.95M688.47 87.16l-2.62 41.45M509.22 50.24l63.02 116.6m-23.39-97.96 65.62 123.99M564.3 23.49l56.19 120.69m-42.43 232.46 77.47-102.34M435.75 130.88s64.57 4.47 76-8.29m-110.71 83.02a77.1 77.1 0 0 0 2.15-44.28c-1.27-4.95-4.83-8.13-8.67-7.72-5.31.58-12.27 2.69-13.46 9.71-1 5.9 1.75 11.12 4.68 14.82 1.71 2.15.91 6-1.37 6.61-4.25 1.2-8.86 4-9.21 10.3-.42 7.66 8.8 13.42 15.47 16.56 4.08 1.93 8.56-.69 10.41-6Zm-63.46-97.07s12.67-21.06 7.8-45.26m-101.04 87.88 2.92 18.2s36.9-5.1 64.32-6.92c10.43-.68 19.44 7.23 20.12 17.66.03.41.04.82.04 1.23h0c0 3.61 2.92 6.54 6.53 6.55h.11c5.94 0 10.85-4.62 11.24-10.54.6-8.64 2.19-19.48 6.48-19.68h.22c8.07-.38 14.41-7.03 14.4-15.11v-2c0-4.35-3.37-7.97-7.71-8.27-21.01-1.45-80.2-3.25-118.67 18.88Zm16.9-96.17-12.34 67.6s34.11 3.56 36.06-27.63M78.81 108.54s65.79-22.36 57.51-97.89m-4.4 97.89s69.72-26.06 61.42-103.41m-10.48 123.66s66-20.25 61.49-108.4\"],[12],[13],[1,\"\\n  \"],[10,\"circle\"],[14,0,\"cls-1\"],[14,\"cx\",\"120.48\"],[14,\"cy\",\"326.94\"],[14,\"r\",\"41.67\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,\"d\",\"M146.89 359.17c-17.76 14.64-44.02 12.11-58.66-5.65-11.76-14.27-12.71-34.57-2.34-49.88\"],[14,\"stroke\",\"var(--primary)\"],[14,\"stroke-linecap\",\"round\"],[14,\"stroke-linejoin\",\"round\"],[14,\"stroke-width\",\"8.75\"],[14,\"fill\",\"#00ac43\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-10\"],[14,\"d\",\"M522.1 674.36h-.01m-56.24 32.42c-22.3 9.52-50.31 13.82-69.53 11.55-24.86-2.92-27.05-9.8-19.74-18.58 3.53-4.23 11.14-10.87 18-16.6 4-3.32 5.53-7.78 5.5-12.61l72.07 3.7c1.11 3.62 2.22 7.15 3.4 10.56 3.04 8.74-1.2 18.34-9.7 21.98Zm122.87 2.7c-14.63 5.07-43.78 12.44-74.93 5-6.4-1.52-10.35-7.95-8.82-14.35.58-2.44 1.92-4.64 3.82-6.27l.38-.32a68.18 68.18 0 0 0 10.74-11.2 10.88 10.88 0 0 0 2.14-8h70.23a71.853 71.853 0 0 1 5.79 19.78c.92 6.69-2.98 13.11-9.35 15.36Zm232.01-240.72s47.33 49 116.58 3.8\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-7\"],[14,\"d\",\"M898.11 279.72c0 23.01-18.65 41.67-41.66 41.68-23.01 0-41.67-18.65-41.68-41.66 0-23.01 18.65-41.67 41.66-41.68h.01c22.91-.11 41.56 18.38 41.67 41.29v.37Z\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,\"d\",\"M888.74 306.05c-14.54 17.83-40.78 20.51-58.61 5.97-.93-.76-1.83-1.56-2.69-2.39\"],[14,\"stroke\",\"var(--primary)\"],[14,\"stroke-linecap\",\"round\"],[14,\"stroke-linejoin\",\"round\"],[14,\"stroke-width\",\"8.75\"],[14,\"fill\",\"#00aff4\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-5\"],[14,\"d\",\"m717.72 661.74-26.21 26.23c-3.36 3.36-8.82 3.36-12.18 0a8.522 8.522 0 0 1-1.53-2.09c-10.1-19.25-30.3-61.5-29.2-89.43.16-6.07 5.22-10.87 11.29-10.7 2.18.06 4.29.76 6.07 2.02 2.96 2.11 5.63 4.62 7.91 7.45 15.35 18.27 26.32 4.39 29.25.73 0 0 26.3 24.86 14.6 65.79Zm164.43 0c-2.88 10-5.38 18.71-7.3 25.51-2.62 9.19-10.86 15.64-20.41 16l-69 2.62c-6.19.25-11.4-4.56-11.65-10.75-.07-1.71.26-3.42.95-4.99 1.46-3.25 4.09-5.84 7.37-7.23 13.16-5.85 26.72-19.74 32.73-35.81-.05.04 37.77-6.3 67.31 14.65Z\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-10\"],[14,\"d\",\"M691.5 687.97c-3.36 3.36-8.82 3.36-12.18 0a8.522 8.522 0 0 1-1.53-2.09c-10.1-19.25-30.3-61.5-29.2-89.43m54.51-.5s26.31 24.86 14.61 65.79m97.08-14.61s37.82-6.34 67.36 14.61M33.33 232.34s-9.29 88.14 51.64 116.42m-44 255.43 9.09 13.32-20.8-6.18 6.5 10.08-16.57-4.55m189.74 73.1 4.87 13.32s-12.3-5.2-12.3-4.22 1.62 8.12 1.62 8.12l-10.4-1.3m586.74 1.62h81.9M4.38 638.3s26.51 29.24 76.22 24.37m111.11 63.35s49.79 4.46 90.68-16.28M544.55 597.1s-94.38 4.86-26 70.42M803.1 44.4 759 456.45\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-4\"],[14,\"d\",\"M49 138.6s-23.6-40.4 41.71 33.74 62.31 116.72 120.31 106.93c43.02-7.26 43.49 50.21 112.21-19.59 19.07-19.37 0 72.91 125.54-3.99 20.91-12.81-.39-8.42-1.26 10.79s27.88 69.2 40.62 66.11 25.64 38.05 43.92 19.89 121.64-8.61 129.83 7.71c4.09 8.15 108.14-6.23 104.52 27.28-1.73 15.96-.49 14.23-3.29 30.73-4.67 27.49-7.11 50.76-7.11 50.76l-68.39-5.06-25.51-19.68-9.67-25.82-25.73-15.43-28.85-1.98-5.44 55.66-22.31 16.46-18.66-16.46 34.55-99.71-62.67 35.74-40.76 23-20.15 1.89-47.81-119.68-14.45-2.92-53.64 36.82-45.63 5.14-28.34 15.75-52.86 8.49-48.63-12.21-78.79-52.46-45.95-73.62 2.71-84.28Z\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-10\"],[14,\"d\",\"M575.91 476.11s16.75-6.33 16.42-26.62 5.51-48.7 5.51-48.7 34.11-7.35 54.58 17.37v12c0 6.19 3.86 11.73 9.67 13.86l11.77 4.46v.69c0 7.76 6 14.19 13.74 14.73l57.74 4c6.88.48 12.92-4.56 13.67-11.42l44.09-412c.76-7.05-4.35-13.38-11.4-14.14h-.03l-58.83-6.16a16.253 16.253 0 0 0-16.73 10l-5 12.12-1-.11c-8.8-1.04-16.8 5.16-18 13.94l-3.6 27.03s-33.16 25.32-44.86 6.82l-12-44.23a30.86 30.86 0 0 0-23.64-22.21c-23.51-4.71-59-6.13-72.53.16-14.16 6.56-51.32 49.33-71.77 73.71a47.425 47.425 0 0 1-36.31 16.94h-1.21c-3.97 0-7.72-1.83-10.18-4.94-5-6.31-13.05-17-15-22.35-2.93-7.8-35.58-35.58-55.56-27.78 0 0-19.87-32.68-67.18-26.15a34.603 34.603 0 0 1-22.41-4.32 23.284 23.284 0 0 1-7.39-6.57c-6.34-9.26-53.12-33.14-112.09-15.59s-92.12 61.89-89.3 111.11c.32 4.5.96 8.98 1.91 13.39a99.51 99.51 0 0 1 .31 35.6c-2.9 16.87-4.54 42.5 4.65 67.3 15.34 41.43 135.38 178.48 246.91 98.68 3.56-2.54 7.92-3.69 12.27-3.25 10.7 1.1 31.57 1.9 43.3-6.54 16.24-11.7 36.06-31.2 43.7-32.17s14.45 2.92 14.45 2.92 40.92 83.12 41.92 120.51\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-10\"],[14,\"d\",\"m242.71 259.68 4.23-66.81s30.21 8.12 29.89 33.4m23.39 86.69c.32-1.29 32-35.87 20.47-82.19m-198.83-74.08s58.28 45.31 26.87 139.62m54.35 19.48S234 216.42 156.5 129.57m57.21 203.02s39.56 30.41 74.77 12.1m181.62 7.83 188.4-208.34M500.6 381.91 655.53 210.7m-240.94 86.99s51.66.74 75.79 13.16\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-10\"],[14,\"d\",\"M463.91 303.09c1.32 7.52 5.62 23.33 18.94 29.5M746.1 25.49l-50.31 437.42m15.36-416.69-37.3 402.91m-21.44-30.93 9.46-61.46M82.22 131.64s-30.71 13.47-31.91 31.52m365.67-49.75s18.1 15.2 30.52 27.07c8 7.73 17.53 35.09 16.81 52.35-.35 8.42-6.78 16.24-6.58 24.41.43 17.36 3.66 38.75-20.47 50.44s-44.54 31.28-44.54 31.28m123.96 301.71a65.72 65.72 0 0 1-16.18 4.77c-29.05 4.72-56.65-14.47-71-34.94-22-31.43-13.93-62.51-19.65-109-5.54-45.09-2.56-47.52-2.56-47.52s19.11-4.2 46.39.83a71.986 71.986 0 0 0 56.82-13.57l.9-.69c4.23-3.25 8.51-6.46 12.9-9.51 17.59 5.63 31.35 26.61 30.41 52.16h0c-4.5 9.25-.64 20.4 8.61 24.9.43.21.88.4 1.33.58 2.1.83 4.24 1.75 6.37 2.79h.06c3.74 1.82 6.36 5.36 7 9.48 10.93 67.32-32.21 106.78-61.4 119.72Z\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,\"d\",\"M623.41 372.26c-3.26 7.33-7.32 14.28-12.11 20.71a138.21 138.21 0 0 1-35.07 33.23c-4.75 3.15-10.7 7.2-16.7 11.54-2.49 1.78-4.5 4.15-5.85 6.9.94-25.55-12.82-46.53-30.41-52.16 7.86-5.63 16.23-10.51 25-14.59 39.31-17.82 39.86-22.51 56.41-41.8 3.54-4.17 9.79-4.69 13.97-1.15a9.7 9.7 0 0 1 1.89 2.15c5.1 7.99 9.32 20.24 2.87 35.17Z\"],[14,\"stroke\",\"var(--primary)\"],[14,\"stroke-linecap\",\"round\"],[14,\"stroke-linejoin\",\"round\"],[14,\"stroke-width\",\"8.75\"],[14,\"fill\",\"#ff5d10\"],[12],[13],[1,\"\\n  \"],[10,\"circle\"],[14,0,\"cls-5\"],[14,\"cx\",\"424.73\"],[14,\"cy\",\"431.81\"],[14,\"r\",\"41.67\"],[12],[13],[1,\"\\n  \"],[10,\"path\"],[14,0,\"cls-10\"],[14,\"d\",\"m643.65 93.98 19.43 59.33a70.213 70.213 0 0 1 3.43 21.76v9c0 3.75-2.2 7.16-5.63 8.69h0a9.51 9.51 0 0 0-5.63 9c.53 18.44 1.81 71.92-.19 92.34 0 .35-.07.7-.1 1a99.551 99.551 0 0 1-17.25 46.57m-199.9 50.71c21.77 7.47 33.35 31.18 25.88 52.94-7.47 21.77-31.18 33.35-52.94 25.88a41.71 41.71 0 0 1-9.18-4.47\"],[12],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[]]",
    "moduleName": "wizard/templates/components/illustration-welcome.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("wizard/templates/components/styling-preview", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="previews {{if this.draggingActive "dragging"}}">
    <div class="wizard-container__preview topic-preview">
      <canvas width={{this.elementWidth}} height={{this.elementHeight}} style={{this.canvasStyle}}>
      </canvas>
    </div>
    <div class="wizard-container__preview homepage-preview">
      <HomepagePreview @wizard={{this.wizard}} @step={{this.step}} />
    </div>
  </div>
  
  <div class="preview-nav">
    <a href class="preview-nav-button {{if this.previewTopic "active"}}" {{action "setPreviewTopic"}}>
      {{i18n "wizard.previews.topic_preview"}}
    </a>
    <a href class="preview-nav-button {{unless this.previewTopic "active"}}" {{action "setPreviewHomepage"}}>
      {{i18n "wizard.previews.homepage_preview"}}
    </a>
  </div>
  
  */
  {
    "id": "6jiymW2b",
    "block": "[[[10,0],[15,0,[29,[\"previews \",[52,[30,0,[\"draggingActive\"]],\"dragging\"]]]],[12],[1,\"\\n  \"],[10,0],[14,0,\"wizard-container__preview topic-preview\"],[12],[1,\"\\n    \"],[10,\"canvas\"],[15,\"width\",[30,0,[\"elementWidth\"]]],[15,\"height\",[30,0,[\"elementHeight\"]]],[15,5,[30,0,[\"canvasStyle\"]]],[12],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,0],[14,0,\"wizard-container__preview homepage-preview\"],[12],[1,\"\\n    \"],[8,[39,1],null,[[\"@wizard\",\"@step\"],[[30,0,[\"wizard\"]],[30,0,[\"step\"]]]],null],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[10,0],[14,0,\"preview-nav\"],[12],[1,\"\\n  \"],[11,3],[24,6,\"\"],[16,0,[29,[\"preview-nav-button \",[52,[30,0,[\"previewTopic\"]],\"active\"]]]],[4,[38,2],[[30,0],\"setPreviewTopic\"],null],[12],[1,\"\\n    \"],[1,[28,[35,3],[\"wizard.previews.topic_preview\"],null]],[1,\"\\n  \"],[13],[1,\"\\n  \"],[11,3],[24,6,\"\"],[16,0,[29,[\"preview-nav-button \",[52,[51,[30,0,[\"previewTopic\"]]],\"active\"]]]],[4,[38,2],[[30,0],\"setPreviewHomepage\"],null],[12],[1,\"\\n    \"],[1,[28,[35,3],[\"wizard.previews.homepage_preview\"],null]],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[\"if\",\"homepage-preview\",\"action\",\"i18n\",\"unless\"]]",
    "moduleName": "wizard/templates/components/styling-preview.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("wizard/templates/components/theme-preview", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="wizard-container__preview">
    <canvas
      width={{this.elementWidth}}
      height={{this.elementHeight}}
      style={{this.canvasStyle}}
    >
    </canvas>
  </div>
  
  */
  {
    "id": "1suVWthr",
    "block": "[[[10,0],[14,0,\"wizard-container__preview\"],[12],[1,\"\\n  \"],[10,\"canvas\"],[15,\"width\",[30,0,[\"elementWidth\"]]],[15,\"height\",[30,0,[\"elementHeight\"]]],[15,5,[30,0,[\"canvasStyle\"]]],[12],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[]]",
    "moduleName": "wizard/templates/components/theme-preview.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("wizard/templates/components/wizard-field-checkbox", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <label class="wizard-container__label">
    <Input @type="checkbox" disabled={{this.field.disabled}} class="wizard-container__checkbox" @checked={{this.field.value}} />
    <span class="wizard-container__checkbox-slider"></span>
    {{#if this.field.icon}}
      {{d-icon this.field.icon}}
    {{/if}}
    <span class="wizard-container__checkbox-label">
      {{this.field.placeholder}}
    </span>
    <PluginOutlet @name="below-wizard-checkbox" @args={{hash disabled=this.field.disabled}} />
  </label>
  
  */
  {
    "id": "oXGIahnz",
    "block": "[[[10,\"label\"],[14,0,\"wizard-container__label\"],[12],[1,\"\\n  \"],[8,[39,0],[[16,\"disabled\",[30,0,[\"field\",\"disabled\"]]],[24,0,\"wizard-container__checkbox\"]],[[\"@type\",\"@checked\"],[\"checkbox\",[30,0,[\"field\",\"value\"]]]],null],[1,\"\\n  \"],[10,1],[14,0,\"wizard-container__checkbox-slider\"],[12],[13],[1,\"\\n\"],[41,[30,0,[\"field\",\"icon\"]],[[[1,\"    \"],[1,[28,[35,2],[[30,0,[\"field\",\"icon\"]]],null]],[1,\"\\n\"]],[]],null],[1,\"  \"],[10,1],[14,0,\"wizard-container__checkbox-label\"],[12],[1,\"\\n    \"],[1,[30,0,[\"field\",\"placeholder\"]]],[1,\"\\n  \"],[13],[1,\"\\n  \"],[8,[39,3],null,[[\"@name\",\"@args\"],[\"below-wizard-checkbox\",[28,[37,4],null,[[\"disabled\"],[[30,0,[\"field\",\"disabled\"]]]]]]],null],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[\"input\",\"if\",\"d-icon\",\"plugin-outlet\",\"hash\"]]",
    "moduleName": "wizard/templates/components/wizard-field-checkbox.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("wizard/templates/components/wizard-field-checkboxes", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{#each this.field.choices as |c|}}
    <div class="checkbox-field-choice {{this.fieldClass}}">
      <label id={{c.id}} value={{c.label}}>
        <Input @type="checkbox" class="wizard-container__checkbox" @checked={{c.checked}} {{on "click" (action "changed")}} />
        {{#if c.icon}}
          {{d-icon c.icon}}
        {{/if}}
        {{c.label}}
      </label>
    </div>
  {{/each}}
  
  */
  {
    "id": "kS5OcFJj",
    "block": "[[[42,[28,[37,1],[[28,[37,1],[[30,0,[\"field\",\"choices\"]]],null]],null],null,[[[1,\"  \"],[10,0],[15,0,[29,[\"checkbox-field-choice \",[30,0,[\"fieldClass\"]]]]],[12],[1,\"\\n    \"],[10,\"label\"],[15,1,[30,1,[\"id\"]]],[15,2,[30,1,[\"label\"]]],[12],[1,\"\\n      \"],[8,[39,2],[[24,0,\"wizard-container__checkbox\"],[4,[38,3],[\"click\",[28,[37,4],[[30,0],\"changed\"],null]],null]],[[\"@type\",\"@checked\"],[\"checkbox\",[30,1,[\"checked\"]]]],null],[1,\"\\n\"],[41,[30,1,[\"icon\"]],[[[1,\"        \"],[1,[28,[35,6],[[30,1,[\"icon\"]]],null]],[1,\"\\n\"]],[]],null],[1,\"      \"],[1,[30,1,[\"label\"]]],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"]],[1]],null]],[\"c\"],false,[\"each\",\"-track-array\",\"input\",\"on\",\"action\",\"if\",\"d-icon\"]]",
    "moduleName": "wizard/templates/components/wizard-field-checkboxes.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("wizard/templates/components/wizard-field-dropdown", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{component
    this.componentName
    class="wizard-container__dropdown"
    value=this.field.value
    content=this.field.choices
    nameProperty="label"
    tabindex="9"
    onChange=(action "onChangeValue")
    options=(hash
      translatedNone=false
    )
  }}
  
  */
  {
    "id": "Yxvt7R++",
    "block": "[[[46,[30,0,[\"componentName\"]],null,[[\"class\",\"value\",\"content\",\"nameProperty\",\"tabindex\",\"onChange\",\"options\"],[\"wizard-container__dropdown\",[30,0,[\"field\",\"value\"]],[30,0,[\"field\",\"choices\"]],\"label\",\"9\",[28,[37,1],[[30,0],\"onChangeValue\"],null],[28,[37,2],null,[[\"translatedNone\"],[false]]]]],null],[1,\"\\n\"]],[],false,[\"component\",\"action\",\"hash\"]]",
    "moduleName": "wizard/templates/components/wizard-field-dropdown.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("wizard/templates/components/wizard-field-image", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{#if this.field.value}}
    {{component this.previewComponent field=this.field fieldClass=this.fieldClass wizard=this.wizard}}
  {{/if}}
  
  <label class="wizard-container__button wizard-container__button-upload {{if this.uploading "disabled"}}">
    {{#if this.uploading}}
      {{i18n "wizard.uploading"}}
    {{else}}
      {{i18n "wizard.upload"}}
      {{d-icon "far-image"}}
    {{/if}}
  
    <input class="wizard-hidden-upload-field" disabled={{this.uploading}} type="file" accept="image/*">
  </label>
  
  */
  {
    "id": "Il4gVR2z",
    "block": "[[[41,[30,0,[\"field\",\"value\"]],[[[1,\"  \"],[46,[30,0,[\"previewComponent\"]],null,[[\"field\",\"fieldClass\",\"wizard\"],[[30,0,[\"field\"]],[30,0,[\"fieldClass\"]],[30,0,[\"wizard\"]]]],null],[1,\"\\n\"]],[]],null],[1,\"\\n\"],[10,\"label\"],[15,0,[29,[\"wizard-container__button wizard-container__button-upload \",[52,[30,0,[\"uploading\"]],\"disabled\"]]]],[12],[1,\"\\n\"],[41,[30,0,[\"uploading\"]],[[[1,\"    \"],[1,[28,[35,2],[\"wizard.uploading\"],null]],[1,\"\\n\"]],[]],[[[1,\"    \"],[1,[28,[35,2],[\"wizard.upload\"],null]],[1,\"\\n    \"],[1,[28,[35,3],[\"far-image\"],null]],[1,\"\\n\"]],[]]],[1,\"\\n  \"],[10,\"input\"],[14,0,\"wizard-hidden-upload-field\"],[15,\"disabled\",[30,0,[\"uploading\"]]],[14,\"accept\",\"image/*\"],[14,4,\"file\"],[12],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[\"if\",\"component\",\"i18n\",\"d-icon\"]]",
    "moduleName": "wizard/templates/components/wizard-field-image.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("wizard/templates/components/wizard-field-text", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <Input id={{this.field.id}} @value={{this.field.value}} class="wizard-container__text-input" placeholder={{this.field.placeholder}} tabindex="9" />
  
  */
  {
    "id": "tR1q7H8t",
    "block": "[[[8,[39,0],[[16,1,[30,0,[\"field\",\"id\"]]],[24,0,\"wizard-container__text-input\"],[16,\"placeholder\",[30,0,[\"field\",\"placeholder\"]]],[24,\"tabindex\",\"9\"]],[[\"@value\"],[[30,0,[\"field\",\"value\"]]]],null],[1,\"\\n\"]],[],false,[\"input\"]]",
    "moduleName": "wizard/templates/components/wizard-field-text.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("wizard/templates/components/wizard-field", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{#if this.field.label}}
    <label for={{this.field.id}}>
      <span class="wizard-container__label">
        {{this.field.label}}
      </span>
  
      {{#if this.field.required}}
        <span class="wizard-container__label required">*</span>
      {{/if}}
  
      {{#if this.field.description}}
        <div class="wizard-container__description">{{html-safe this.field.description}}</div>
      {{/if}}
    </label>
  {{/if}}
  
  <div class="wizard-container__input">
    {{component
      this.inputComponentName
      field=this.field
      step=this.step
      fieldClass=this.fieldClass
      wizard=this.wizard
    }}
  </div>
  
  {{#if this.field.errorDescription}}
    <div class="wizard-container__description error">{{html-safe this.field.errorDescription}}</div>
  {{/if}}
  
  {{#if this.field.extra_description}}
    <div class="wizard-container__description extra">{{html-safe this.field.extra_description}}</div>
  {{/if}}
  
  */
  {
    "id": "ZLLdSdPB",
    "block": "[[[41,[30,0,[\"field\",\"label\"]],[[[1,\"  \"],[10,\"label\"],[15,\"for\",[30,0,[\"field\",\"id\"]]],[12],[1,\"\\n    \"],[10,1],[14,0,\"wizard-container__label\"],[12],[1,\"\\n      \"],[1,[30,0,[\"field\",\"label\"]]],[1,\"\\n    \"],[13],[1,\"\\n\\n\"],[41,[30,0,[\"field\",\"required\"]],[[[1,\"      \"],[10,1],[14,0,\"wizard-container__label required\"],[12],[1,\"*\"],[13],[1,\"\\n\"]],[]],null],[1,\"\\n\"],[41,[30,0,[\"field\",\"description\"]],[[[1,\"      \"],[10,0],[14,0,\"wizard-container__description\"],[12],[1,[28,[35,1],[[30,0,[\"field\",\"description\"]]],null]],[13],[1,\"\\n\"]],[]],null],[1,\"  \"],[13],[1,\"\\n\"]],[]],null],[1,\"\\n\"],[10,0],[14,0,\"wizard-container__input\"],[12],[1,\"\\n  \"],[46,[30,0,[\"inputComponentName\"]],null,[[\"field\",\"step\",\"fieldClass\",\"wizard\"],[[30,0,[\"field\"]],[30,0,[\"step\"]],[30,0,[\"fieldClass\"]],[30,0,[\"wizard\"]]]],null],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[41,[30,0,[\"field\",\"errorDescription\"]],[[[1,\"  \"],[10,0],[14,0,\"wizard-container__description error\"],[12],[1,[28,[35,1],[[30,0,[\"field\",\"errorDescription\"]]],null]],[13],[1,\"\\n\"]],[]],null],[1,\"\\n\"],[41,[30,0,[\"field\",\"extra_description\"]],[[[1,\"  \"],[10,0],[14,0,\"wizard-container__description extra\"],[12],[1,[28,[35,1],[[30,0,[\"field\",\"extra_description\"]]],null]],[13],[1,\"\\n\"]],[]],null]],[],false,[\"if\",\"html-safe\",\"component\"]]",
    "moduleName": "wizard/templates/components/wizard-field.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("wizard/templates/components/wizard-image-preview", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <img src={{this.field.value}} class={{this.fieldClass}}>
  
  */
  {
    "id": "xrxKZAzD",
    "block": "[[[10,\"img\"],[15,\"src\",[30,0,[\"field\",\"value\"]]],[15,0,[30,0,[\"fieldClass\"]]],[12],[13],[1,\"\\n\"]],[],false,[]]",
    "moduleName": "wizard/templates/components/wizard-image-preview.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("wizard/templates/components/wizard-step", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="wizard-container__step-contents">
    {{#if this.step.title}}
      <h1 class="wizard-container__step-title">{{this.step.title}}</h1>
    {{/if}}
  
    <div class="wizard-container__step-container">
      {{#if this.step.fields}}
        <WizardStepForm @step={{this.step}}>
          {{#if this.includeSidebar}}
            <div class="wizard-container__sidebar">
              {{#each this.step.fields as |field|}}
                {{#if field.show_in_sidebar}}
                  <WizardField @field={{field}} @step={{this.step}} @wizard={{this.wizard}} />
                {{/if}}
              {{/each}}
            </div>
          {{/if}}
          <div class="wizard-container__fields">
            {{#each this.step.fields as |field|}}
              {{#unless field.show_in_sidebar}}
                <WizardField @field={{field}} @step={{this.step}} @wizard={{this.wizard}} />
              {{/unless}}
            {{/each}}
          </div>
        </WizardStepForm>
      {{/if}}
      {{#if (or this.bannerImage this.step.description)}}
        <div class={{this.bannerAndDescriptionClass}}>
          {{#if this.step.description}}
            <p class="wizard-container__step-description">{{html-safe this.step.description}}</p>
          {{/if}}
          {{#if this.bannerImage}}
            <div class="wizard-container__step-banner-image">
              {{#if (eq this.bannerImage "welcome-illustration")}}
                <IllustrationWelcome />
              {{else if (eq this.bannerImage "members-illustration")}}
                <IllustrationMembers />
              {{else if (eq this.bannerImage "finished-illustration")}}
                <IllustrationFinished />
              {{/if}}
            </div>
          {{/if}}
        </div>
      {{/if}}
    </div>
  </div>
  
  <div class="wizard-container__step-footer">
    <div class="wizard-container__buttons">
  
      {{#if this.showNextButton}}
        <button {{action "nextStep"}} disabled={{this.saving}} type="button" class="wizard-container__button primary {{this.nextButtonClass}}">
          {{i18n this.nextButtonLabel}}
        </button>
      {{/if}}
  
      {{#if this.showFinishButton}}
        <button {{action "exitEarly"}} disabled={{this.saving}} type="button" class="wizard-container__button jump-in">
          {{i18n "wizard.jump_in"}}
        </button>
      {{/if}}
  
      {{#if this.showJumpInButton}}
        <button {{action "quit"}} disabled={{this.saving}} type="button" class="wizard-container__button {{this.jumpInButtonClass}}">
          {{i18n this.jumpInButtonLabel}}
        </button>
      {{/if}}
    </div>
  
    <div class="wizard-container__step-progress">
      <a href {{action "backStep"}} class="wizard-container__link back {{unless this.showBackButton "inactive"}}">{{d-icon "chevron-left"}}</a>
  
      <span class="wizard-container__step-text">{{bound-i18n "wizard.step-text"}}</span>
      <span class="wizard-container__step-count">{{bound-i18n "wizard.step" current=this.step.displayIndex total=this.wizard.totalSteps}}</span>
  
      <a href {{action "nextStep"}} class="wizard-container__link {{unless this.showNextButton "inactive"}}">{{d-icon "chevron-right"}}</a>
  
    </div>
  
  </div>
  
  */
  {
    "id": "+2x8U7B/",
    "block": "[[[10,0],[14,0,\"wizard-container__step-contents\"],[12],[1,\"\\n\"],[41,[30,0,[\"step\",\"title\"]],[[[1,\"    \"],[10,\"h1\"],[14,0,\"wizard-container__step-title\"],[12],[1,[30,0,[\"step\",\"title\"]]],[13],[1,\"\\n\"]],[]],null],[1,\"\\n  \"],[10,0],[14,0,\"wizard-container__step-container\"],[12],[1,\"\\n\"],[41,[30,0,[\"step\",\"fields\"]],[[[1,\"      \"],[8,[39,1],null,[[\"@step\"],[[30,0,[\"step\"]]]],[[\"default\"],[[[[1,\"\\n\"],[41,[30,0,[\"includeSidebar\"]],[[[1,\"          \"],[10,0],[14,0,\"wizard-container__sidebar\"],[12],[1,\"\\n\"],[42,[28,[37,3],[[28,[37,3],[[30,0,[\"step\",\"fields\"]]],null]],null],null,[[[41,[30,1,[\"show_in_sidebar\"]],[[[1,\"                \"],[8,[39,4],null,[[\"@field\",\"@step\",\"@wizard\"],[[30,1],[30,0,[\"step\"]],[30,0,[\"wizard\"]]]],null],[1,\"\\n\"]],[]],null]],[1]],null],[1,\"          \"],[13],[1,\"\\n\"]],[]],null],[1,\"        \"],[10,0],[14,0,\"wizard-container__fields\"],[12],[1,\"\\n\"],[42,[28,[37,3],[[28,[37,3],[[30,0,[\"step\",\"fields\"]]],null]],null],null,[[[41,[51,[30,2,[\"show_in_sidebar\"]]],[[[1,\"              \"],[8,[39,4],null,[[\"@field\",\"@step\",\"@wizard\"],[[30,2],[30,0,[\"step\"]],[30,0,[\"wizard\"]]]],null],[1,\"\\n\"]],[]],null]],[2]],null],[1,\"        \"],[13],[1,\"\\n      \"]],[]]]]],[1,\"\\n\"]],[]],null],[41,[28,[37,6],[[30,0,[\"bannerImage\"]],[30,0,[\"step\",\"description\"]]],null],[[[1,\"      \"],[10,0],[15,0,[30,0,[\"bannerAndDescriptionClass\"]]],[12],[1,\"\\n\"],[41,[30,0,[\"step\",\"description\"]],[[[1,\"          \"],[10,2],[14,0,\"wizard-container__step-description\"],[12],[1,[28,[35,7],[[30,0,[\"step\",\"description\"]]],null]],[13],[1,\"\\n\"]],[]],null],[41,[30,0,[\"bannerImage\"]],[[[1,\"          \"],[10,0],[14,0,\"wizard-container__step-banner-image\"],[12],[1,\"\\n\"],[41,[28,[37,8],[[30,0,[\"bannerImage\"]],\"welcome-illustration\"],null],[[[1,\"              \"],[8,[39,9],null,null,null],[1,\"\\n\"]],[]],[[[41,[28,[37,8],[[30,0,[\"bannerImage\"]],\"members-illustration\"],null],[[[1,\"              \"],[8,[39,10],null,null,null],[1,\"\\n\"]],[]],[[[41,[28,[37,8],[[30,0,[\"bannerImage\"]],\"finished-illustration\"],null],[[[1,\"              \"],[8,[39,11],null,null,null],[1,\"\\n            \"]],[]],null]],[]]]],[]]],[1,\"          \"],[13],[1,\"\\n\"]],[]],null],[1,\"      \"],[13],[1,\"\\n\"]],[]],null],[1,\"  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[10,0],[14,0,\"wizard-container__step-footer\"],[12],[1,\"\\n  \"],[10,0],[14,0,\"wizard-container__buttons\"],[12],[1,\"\\n\\n\"],[41,[30,0,[\"showNextButton\"]],[[[1,\"      \"],[11,\"button\"],[16,\"disabled\",[30,0,[\"saving\"]]],[16,0,[29,[\"wizard-container__button primary \",[30,0,[\"nextButtonClass\"]]]]],[24,4,\"button\"],[4,[38,12],[[30,0],\"nextStep\"],null],[12],[1,\"\\n        \"],[1,[28,[35,13],[[30,0,[\"nextButtonLabel\"]]],null]],[1,\"\\n      \"],[13],[1,\"\\n\"]],[]],null],[1,\"\\n\"],[41,[30,0,[\"showFinishButton\"]],[[[1,\"      \"],[11,\"button\"],[16,\"disabled\",[30,0,[\"saving\"]]],[24,0,\"wizard-container__button jump-in\"],[24,4,\"button\"],[4,[38,12],[[30,0],\"exitEarly\"],null],[12],[1,\"\\n        \"],[1,[28,[35,13],[\"wizard.jump_in\"],null]],[1,\"\\n      \"],[13],[1,\"\\n\"]],[]],null],[1,\"\\n\"],[41,[30,0,[\"showJumpInButton\"]],[[[1,\"      \"],[11,\"button\"],[16,\"disabled\",[30,0,[\"saving\"]]],[16,0,[29,[\"wizard-container__button \",[30,0,[\"jumpInButtonClass\"]]]]],[24,4,\"button\"],[4,[38,12],[[30,0],\"quit\"],null],[12],[1,\"\\n        \"],[1,[28,[35,13],[[30,0,[\"jumpInButtonLabel\"]]],null]],[1,\"\\n      \"],[13],[1,\"\\n\"]],[]],null],[1,\"  \"],[13],[1,\"\\n\\n  \"],[10,0],[14,0,\"wizard-container__step-progress\"],[12],[1,\"\\n    \"],[11,3],[24,6,\"\"],[16,0,[29,[\"wizard-container__link back \",[52,[51,[30,0,[\"showBackButton\"]]],\"inactive\"]]]],[4,[38,12],[[30,0],\"backStep\"],null],[12],[1,[28,[35,14],[\"chevron-left\"],null]],[13],[1,\"\\n\\n    \"],[10,1],[14,0,\"wizard-container__step-text\"],[12],[1,[28,[35,15],[\"wizard.step-text\"],null]],[13],[1,\"\\n    \"],[10,1],[14,0,\"wizard-container__step-count\"],[12],[1,[28,[35,15],[\"wizard.step\"],[[\"current\",\"total\"],[[30,0,[\"step\",\"displayIndex\"]],[30,0,[\"wizard\",\"totalSteps\"]]]]]],[13],[1,\"\\n\\n    \"],[11,3],[24,6,\"\"],[16,0,[29,[\"wizard-container__link \",[52,[51,[30,0,[\"showNextButton\"]]],\"inactive\"]]]],[4,[38,12],[[30,0],\"nextStep\"],null],[12],[1,[28,[35,14],[\"chevron-right\"],null]],[13],[1,\"\\n\\n  \"],[13],[1,\"\\n\\n\"],[13],[1,\"\\n\"]],[\"field\",\"field\"],false,[\"if\",\"wizard-step-form\",\"each\",\"-track-array\",\"wizard-field\",\"unless\",\"or\",\"html-safe\",\"eq\",\"illustration-welcome\",\"illustration-members\",\"illustration-finished\",\"action\",\"i18n\",\"d-icon\",\"bound-i18n\"]]",
    "moduleName": "wizard/templates/components/wizard-step.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("wizard/templates/step", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <WizardStep @step={{this.step}} @wizard={{this.wizard}} @goNext={{action "goNext"}} @goBack={{action "goBack"}} />
  
  */
  {
    "id": "BNiS64D7",
    "block": "[[[8,[39,0],null,[[\"@step\",\"@wizard\",\"@goNext\",\"@goBack\"],[[30,0,[\"step\"]],[30,0,[\"wizard\"]],[28,[37,1],[[30,0],\"goNext\"],null],[28,[37,1],[[30,0],\"goBack\"],null]]],null],[1,\"\\n\"]],[],false,[\"wizard-step\",\"action\"]]",
    "moduleName": "wizard/templates/step.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("wizard/templates/wizard", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <div id="wizard-main">
    {{#if this.showCanvas}}
      <WizardCanvas />
    {{/if}}
  
    <div class="discourse-logo">
      <DiscourseLogo />
    </div>
  
    <div class="wizard-container">
      {{outlet}}
    </div>
  </div>
  
  */
  {
    "id": "Zuhh9ts5",
    "block": "[[[10,0],[14,1,\"wizard-main\"],[12],[1,\"\\n\"],[41,[30,0,[\"showCanvas\"]],[[[1,\"    \"],[8,[39,1],null,null,null],[1,\"\\n\"]],[]],null],[1,\"\\n  \"],[10,0],[14,0,\"discourse-logo\"],[12],[1,\"\\n    \"],[8,[39,2],null,null,null],[1,\"\\n  \"],[13],[1,\"\\n\\n  \"],[10,0],[14,0,\"wizard-container\"],[12],[1,\"\\n    \"],[46,[28,[37,4],null,null],null,null,null],[1,\"\\n  \"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[],false,[\"if\",\"wizard-canvas\",\"discourse-logo\",\"component\",\"-outlet\"]]",
    "moduleName": "wizard/templates/wizard.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("wizard/test-helpers/wizard-pretender", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f

  function _default(helpers) {
    const {
      parsePostData,
      response
    } = helpers;
    this.get("/wizard.json", () => {
      return response({
        wizard: {
          start: "hello-world",
          completed: true,
          steps: [{
            id: "hello-world",
            title: "hello there",
            index: 0,
            description: "hello!",
            fields: [{
              id: "full_name",
              type: "text",
              required: true,
              description: "Your name"
            }],
            next: "styling"
          }, {
            id: "styling",
            title: "Second step",
            index: 1,
            fields: [{
              id: "some_title",
              type: "text"
            }],
            previous: "hello-world",
            next: "corporate"
          }, {
            id: "corporate",
            index: 2,
            fields: [{
              id: "company_name",
              type: "text",
              required: true
            }, {
              id: "theme_preview",
              type: "component"
            }],
            previous: "styling"
          }]
        }
      });
    });
    this.put("/wizard/steps/:id", request => {
      const body = parsePostData(request.requestBody);

      if (body.fields.full_name === "Server Fail") {
        return response(422, {
          errors: [{
            field: "full_name",
            description: "Invalid name"
          }]
        });
      } else if (body.fields.company_name === "Server Fail") {
        return response(422, {
          errors: [{
            field: "company_name",
            description: "Invalid company name"
          }]
        });
      } else {
        return response(200, {
          success: true
        });
      }
    });
  }
});//# sourceMappingURL=wizard.map

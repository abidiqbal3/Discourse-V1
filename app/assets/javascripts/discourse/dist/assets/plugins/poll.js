define("discourse/plugins/poll/components/poll-breakdown-chart", ["exports", "@ember/component", "I18n", "discourse/plugins/poll/controllers/poll-ui-builder", "discourse-common/utils/decorators", "discourse/plugins/poll/lib/chart-colors", "@ember/template", "@ember/object/computed", "@ember/runloop"], function (_exports, _component, _I18n, _pollUiBuilder, _decorators, _chartColors, _template, _computed, _runloop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _obj;

  0; //eaimeta@70e063a35619d71f0,"@ember/component",0,"I18n",0,"discourse/plugins/poll/controllers/poll-ui-builder",0,"discourse-common/utils/decorators",0,"discourse/plugins/poll/lib/chart-colors",0,"@ember/template",0,"@ember/object/computed",0,"@ember/runloop"eaimeta@70e063a35619d71f

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  var _default = _component.default.extend((_dec = (0, _decorators.default)("optionColors", "index"), _dec2 = (0, _decorators.default)("data", "displayMode"), (_obj = {
    // Arguments:
    group: null,
    options: null,
    displayMode: null,
    highlightedOption: null,
    setHighlightedOption: null,
    classNames: "poll-breakdown-chart-container",
    _optionToSlice: null,
    _previousHighlightedSliceIndex: null,
    _previousDisplayMode: null,
    data: (0, _computed.mapBy)("options", "votes"),

    init() {
      this._super(...arguments);

      this._optionToSlice = {};
    },

    didInsertElement() {
      this._super(...arguments);

      const canvas = this.element.querySelector("canvas");
      this._chart = new window.Chart(canvas.getContext("2d"), this.chartConfig);
    },

    didReceiveAttrs() {
      this._super(...arguments);

      if (this._chart) {
        this._updateDisplayMode();

        this._updateHighlight();
      }
    },

    willDestroy() {
      this._super(...arguments);

      if (this._chart) {
        this._chart.destroy();
      }
    },

    colorStyle(optionColors, index) {
      return (0, _template.htmlSafe)(`background: ${optionColors[index]};`);
    },

    chartConfig(data, displayMode) {
      const transformedData = [];
      let counter = 0;
      this._optionToSlice = {};
      data.forEach((votes, index) => {
        if (votes > 0) {
          transformedData.push(votes);
          this._optionToSlice[index] = counter++;
        }
      });
      const totalVotes = transformedData.reduce((sum, votes) => sum + votes, 0);
      const colors = (0, _chartColors.getColors)(data.length).filter((color, index) => data[index] > 0);
      return {
        type: _pollUiBuilder.PIE_CHART_TYPE,
        plugins: [window.ChartDataLabels],
        data: {
          datasets: [{
            data: transformedData,
            backgroundColor: colors,
            // TODO: It's a workaround for Chart.js' terrible hover styling.
            // It will break on non-white backgrounds.
            // Should be updated after #10341 lands
            hoverBorderColor: "#fff"
          }]
        },
        options: {
          plugins: {
            tooltip: false,
            datalabels: {
              color: "#333",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              borderRadius: 2,
              font: {
                family: getComputedStyle(document.body).fontFamily,
                size: 16
              },
              padding: {
                top: 2,
                right: 6,
                bottom: 2,
                left: 6
              },

              formatter(votes) {
                if (displayMode !== "percentage") {
                  return votes;
                }

                const percent = _I18n.default.toNumber(votes / totalVotes * 100.0, {
                  precision: 1
                });

                return `${percent}%`;
              }

            }
          },
          responsive: true,
          aspectRatio: 1.1,
          animation: {
            duration: 0
          },
          // wrapping setHighlightedOption in next block as hover can create many events
          // prevents two sets to happen in the same computation
          onHover: (event, activeElements) => {
            if (!activeElements.length) {
              (0, _runloop.next)(() => {
                this.setHighlightedOption(null);
              });
              return;
            }

            const sliceIndex = activeElements[0]._index;
            const optionIndex = Object.keys(this._optionToSlice).find(option => this._optionToSlice[option] === sliceIndex); // Clear the array to avoid issues in Chart.js

            activeElements.length = 0;
            (0, _runloop.next)(() => {
              this.setHighlightedOption(Number(optionIndex));
            });
          }
        }
      };
    },

    _updateDisplayMode() {
      if (this.displayMode !== this._previousDisplayMode) {
        const config = this.chartConfig;
        this._chart.data.datasets = config.data.datasets;
        this._chart.options = config.options;

        this._chart.update();

        this._previousDisplayMode = this.displayMode;
      }
    },

    _updateHighlight() {
      const meta = this._chart.getDatasetMeta(0);

      if (this._previousHighlightedSliceIndex !== null) {
        const slice = meta.data[this._previousHighlightedSliceIndex];
        meta.controller.removeHoverStyle(slice);

        this._chart.draw();
      }

      if (this.highlightedOption === null) {
        this._previousHighlightedSliceIndex = null;
        return;
      }

      const sliceIndex = this._optionToSlice[this.highlightedOption];

      if (typeof sliceIndex === "undefined") {
        this._previousHighlightedSliceIndex = null;
        return;
      }

      const slice = meta.data[sliceIndex];
      this._previousHighlightedSliceIndex = sliceIndex;
      meta.controller.setHoverStyle(slice);

      this._chart.draw();
    }

  }, (_applyDecoratedDescriptor(_obj, "colorStyle", [_dec], Object.getOwnPropertyDescriptor(_obj, "colorStyle"), _obj), _applyDecoratedDescriptor(_obj, "chartConfig", [_dec2], Object.getOwnPropertyDescriptor(_obj, "chartConfig"), _obj)), _obj)));

  _exports.default = _default;
});
define("discourse/plugins/poll/components/poll-breakdown-option", ["exports", "@ember/component", "I18n", "@ember/object", "discourse-common/utils/decorators", "@ember/object/computed", "discourse/plugins/poll/lib/chart-colors", "@ember/template", "discourse/lib/computed"], function (_exports, _component, _I18n, _object, _decorators, _computed, _chartColors, _template, _computed2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _obj;

  0; //eaimeta@70e063a35619d71f0,"@ember/component",0,"I18n",0,"@ember/object",0,"discourse-common/utils/decorators",0,"@ember/object/computed",0,"discourse/plugins/poll/lib/chart-colors",0,"@ember/template",0,"discourse/lib/computed"eaimeta@70e063a35619d71f

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  var _default = _component.default.extend((_dec = (0, _decorators.default)("option.votes", "totalVotes"), _dec2 = (0, _decorators.default)("optionsCount"), _dec3 = (0, _decorators.default)("highlighted"), _dec4 = (0, _decorators.default)("highlighted", "optionColors", "index"), (_obj = {
    // Arguments:
    option: null,
    index: null,
    totalVotes: null,
    optionsCount: null,
    displayMode: null,
    highlightedOption: null,
    onMouseOver: null,
    onMouseOut: null,
    tagName: "",
    highlighted: (0, _computed2.propertyEqual)("highlightedOption", "index"),
    showPercentage: (0, _computed.equal)("displayMode", "percentage"),

    percent(votes, total) {
      return _I18n.default.toNumber(votes / total * 100.0, {
        precision: 1
      });
    },

    optionColors(optionsCount) {
      return (0, _chartColors.getColors)(optionsCount);
    },

    colorBackgroundStyle(highlighted) {
      if (highlighted) {
        // TODO: Use CSS variables (#10341)
        return (0, _template.htmlSafe)("background: rgba(0, 0, 0, 0.1);");
      }
    },

    colorPreviewStyle(highlighted, optionColors, index) {
      const color = highlighted ? window.Chart.helpers.getHoverColor(optionColors[index]) : optionColors[index];
      return (0, _template.htmlSafe)(`background: ${color};`);
    },

    onHover(active) {
      if (active) {
        this.onMouseOver();
      } else {
        this.onMouseOut();
      }
    }

  }, (_applyDecoratedDescriptor(_obj, "percent", [_dec], Object.getOwnPropertyDescriptor(_obj, "percent"), _obj), _applyDecoratedDescriptor(_obj, "optionColors", [_dec2], Object.getOwnPropertyDescriptor(_obj, "optionColors"), _obj), _applyDecoratedDescriptor(_obj, "colorBackgroundStyle", [_dec3], Object.getOwnPropertyDescriptor(_obj, "colorBackgroundStyle"), _obj), _applyDecoratedDescriptor(_obj, "colorPreviewStyle", [_dec4], Object.getOwnPropertyDescriptor(_obj, "colorPreviewStyle"), _obj), _applyDecoratedDescriptor(_obj, "onHover", [_object.action], Object.getOwnPropertyDescriptor(_obj, "onHover"), _obj)), _obj)));

  _exports.default = _default;
});
define("discourse/plugins/poll/controllers/poll-breakdown", ["exports", "@ember/controller", "I18n", "discourse/mixins/modal-functionality", "@ember/object", "discourse/lib/ajax", "@ember/string", "discourse-common/utils/decorators", "@ember/template", "discourse/lib/load-script", "discourse/lib/ajax-error", "bootbox"], function (_exports, _controller, _I18n, _modalFunctionality, _object, _ajax, _string, _decorators, _template, _loadScript, _ajaxError, _bootbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _obj;

  0; //eaimeta@70e063a35619d71f0,"@ember/controller",0,"I18n",0,"discourse/mixins/modal-functionality",0,"@ember/object",0,"discourse/lib/ajax",0,"@ember/string",0,"discourse-common/utils/decorators",0,"@ember/template",0,"discourse/lib/load-script",0,"discourse/lib/ajax-error",0,"bootbox"eaimeta@70e063a35619d71f

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  var _default = _controller.default.extend(_modalFunctionality.default, (_dec = (0, _decorators.default)("model.poll.title", "model.post.topic.title"), _dec2 = (0, _decorators.default)("model.groupableUserFields"), _dec3 = (0, _decorators.default)("model.poll.options"), (_obj = {
    model: null,
    charts: null,
    groupedBy: null,
    highlightedOption: null,
    displayMode: "percentage",

    title(pollTitle, topicTitle) {
      return pollTitle ? (0, _template.htmlSafe)(pollTitle) : topicTitle;
    },

    groupableUserFields(fields) {
      return fields.map(field => {
        const transformed = field.split("_").filter(Boolean);

        if (transformed.length > 1) {
          transformed[0] = (0, _string.classify)(transformed[0]);
        }

        return {
          id: field,
          label: transformed.join(" ")
        };
      });
    },

    totalVotes(options) {
      return options.reduce((sum, option) => sum + option.votes, 0);
    },

    onShow() {
      this.set("charts", null);
      this.set("displayMode", "percentage");
      this.set("groupedBy", this.model.groupableUserFields[0]);
      (0, _loadScript.default)("/javascripts/Chart.min.js").then(() => (0, _loadScript.default)("/javascripts/chartjs-plugin-datalabels.min.js")).then(() => {
        this.fetchGroupedPollData();
      });
    },

    fetchGroupedPollData() {
      return (0, _ajax.ajax)("/polls/grouped_poll_results.json", {
        data: {
          post_id: this.model.post.id,
          poll_name: this.model.poll.name,
          user_field_name: this.groupedBy
        }
      }).catch(error => {
        if (error) {
          (0, _ajaxError.popupAjaxError)(error);
        } else {
          _bootbox.default.alert(_I18n.default.t("poll.error_while_fetching_voters"));
        }
      }).then(result => {
        if (this.isDestroying || this.isDestroyed) {
          return;
        }

        this.set("charts", result.grouped_results);
      });
    },

    setGrouping(value) {
      this.set("groupedBy", value);
      this.fetchGroupedPollData();
    },

    onSelectPanel(panel) {
      this.set("displayMode", panel.id);
    }

  }, (_applyDecoratedDescriptor(_obj, "title", [_dec], Object.getOwnPropertyDescriptor(_obj, "title"), _obj), _applyDecoratedDescriptor(_obj, "groupableUserFields", [_dec2], Object.getOwnPropertyDescriptor(_obj, "groupableUserFields"), _obj), _applyDecoratedDescriptor(_obj, "totalVotes", [_dec3], Object.getOwnPropertyDescriptor(_obj, "totalVotes"), _obj), _applyDecoratedDescriptor(_obj, "setGrouping", [_object.action], Object.getOwnPropertyDescriptor(_obj, "setGrouping"), _obj), _applyDecoratedDescriptor(_obj, "onSelectPanel", [_object.action], Object.getOwnPropertyDescriptor(_obj, "onSelectPanel"), _obj)), _obj)));

  _exports.default = _default;
});
define("discourse/plugins/poll/controllers/poll-ui-builder", ["exports", "@ember/controller", "@ember/object", "@ember/object/computed", "@ember/runloop", "discourse-common/utils/decorators", "discourse/mixins/modal-functionality", "I18n"], function (_exports, _controller, _object, _computed, _runloop, _decorators, _modalFunctionality, _I18n) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.REGULAR_POLL_TYPE = _exports.PIE_CHART_TYPE = _exports.NUMBER_POLL_TYPE = _exports.MULTIPLE_POLL_TYPE = _exports.BAR_CHART_TYPE = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _obj;

  0; //eaimeta@70e063a35619d71f0,"@ember/controller",0,"@ember/object",0,"@ember/object/computed",0,"@ember/runloop",0,"discourse-common/utils/decorators",0,"discourse/mixins/modal-functionality",0,"I18n"eaimeta@70e063a35619d71f

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  const BAR_CHART_TYPE = "bar";
  _exports.BAR_CHART_TYPE = BAR_CHART_TYPE;
  const PIE_CHART_TYPE = "pie";
  _exports.PIE_CHART_TYPE = PIE_CHART_TYPE;
  const REGULAR_POLL_TYPE = "regular";
  _exports.REGULAR_POLL_TYPE = REGULAR_POLL_TYPE;
  const NUMBER_POLL_TYPE = "number";
  _exports.NUMBER_POLL_TYPE = NUMBER_POLL_TYPE;
  const MULTIPLE_POLL_TYPE = "multiple";
  _exports.MULTIPLE_POLL_TYPE = MULTIPLE_POLL_TYPE;
  const ALWAYS_POLL_RESULT = "always";
  const VOTE_POLL_RESULT = "on_vote";
  const CLOSED_POLL_RESULT = "on_close";
  const STAFF_POLL_RESULT = "staff_only";

  var _default = _controller.default.extend(_modalFunctionality.default, (_dec = (0, _decorators.default)("pollType"), _dec2 = (0, _decorators.default)("pollType"), _dec3 = (0, _decorators.default)("pollType"), _dec4 = (0, _decorators.default)("pollOptions.@each.value"), _dec5 = (0, _decorators.default)("site.groups"), _dec6 = (0, _decorators.default)("chartType", "pollType"), _dec7 = (0, _decorators.observes)("pollType", "pollOptionsCount"), _dec8 = (0, _decorators.default)("pollType", "pollResult", "publicPoll", "pollTitle", "pollOptions.@each.value", "pollMin", "pollMax", "pollStep", "pollGroups", "pollAutoClose", "chartType"), _dec9 = (0, _decorators.default)("isNumber", "pollOptionsCount"), _dec10 = (0, _decorators.default)("pollOptions.@each.value"), _dec11 = (0, _decorators.default)("isMultiple", "pollOptionsCount", "isNumber", "pollMin", "pollMax", "pollStep"), _dec12 = (0, _decorators.default)("minMaxValueValidation", "minNumOfOptionsValidation"), (_obj = {
    showAdvanced: false,
    pollType: REGULAR_POLL_TYPE,
    pollTitle: "",
    pollOptions: null,
    pollOptionsText: null,
    pollMin: 1,
    pollMax: 2,
    pollStep: 1,
    pollGroups: null,
    pollAutoClose: null,
    pollResult: ALWAYS_POLL_RESULT,
    chartType: BAR_CHART_TYPE,
    publicPoll: null,

    onShow() {
      this.setProperties({
        showAdvanced: false,
        pollType: REGULAR_POLL_TYPE,
        pollTitle: null,
        pollOptions: [_object.default.create({
          value: ""
        })],
        pollOptionsText: "",
        pollMin: 1,
        pollMax: 2,
        pollStep: 1,
        pollGroups: null,
        pollAutoClose: null,
        pollResult: ALWAYS_POLL_RESULT,
        chartType: BAR_CHART_TYPE,
        publicPoll: false
      });
    },

    pollResults() {
      const options = [{
        name: _I18n.default.t("poll.ui_builder.poll_result.always"),
        value: ALWAYS_POLL_RESULT
      }, {
        name: _I18n.default.t("poll.ui_builder.poll_result.vote"),
        value: VOTE_POLL_RESULT
      }, {
        name: _I18n.default.t("poll.ui_builder.poll_result.closed"),
        value: CLOSED_POLL_RESULT
      }];

      if (this.get("currentUser.staff")) {
        options.push({
          name: _I18n.default.t("poll.ui_builder.poll_result.staff"),
          value: STAFF_POLL_RESULT
        });
      }

      return options;
    },

    isRegular(pollType) {
      return pollType === REGULAR_POLL_TYPE;
    },

    isNumber(pollType) {
      return pollType === NUMBER_POLL_TYPE;
    },

    isMultiple(pollType) {
      return pollType === MULTIPLE_POLL_TYPE;
    },

    showNumber: (0, _computed.or)("showAdvanced", "isNumber"),

    pollOptionsCount(pollOptions) {
      return (pollOptions || []).filter(option => option.value.length > 0).length;
    },

    siteGroups(groups) {
      // prevents group "everyone" to be listed
      return groups.filter(g => g.id !== 0);
    },

    isPie(chartType, pollType) {
      return pollType !== NUMBER_POLL_TYPE && chartType === PIE_CHART_TYPE;
    },

    canRemoveOption: (0, _computed.gt)("pollOptions.length", 1),

    _setPollMinMax() {
      if (this.isMultiple) {
        if (this.pollMin <= 0 || this.pollMin >= this.pollMax || this.pollMin >= this.pollOptionsCount) {
          this.set("pollMin", this.pollOptionsCount > 0 ? 1 : 0);
        }

        if (this.pollMax <= 0 || this.pollMin >= this.pollMax || this.pollMax > this.pollOptionsCount) {
          this.set("pollMax", this.pollOptionsCount);
        }
      } else if (this.isNumber) {
        this.set("pollMax", this.siteSettings.poll_maximum_options);
      }
    },

    pollOutput(pollType, pollResult, publicPoll, pollTitle, pollOptions, pollMin, pollMax, pollStep, pollGroups, pollAutoClose, chartType) {
      let pollHeader = "[poll";
      let output = "";
      const match = this.toolbarEvent.getText().match(/\[poll(\s+name=[^\s\]]+)*.*\]/gim);

      if (match) {
        pollHeader += ` name=poll${match.length + 1}`;
      }

      let step = pollStep;

      if (step < 1) {
        step = 1;
      }

      if (pollType) {
        pollHeader += ` type=${pollType}`;
      }

      if (pollResult) {
        pollHeader += ` results=${pollResult}`;
      }

      if (pollMin && pollType !== REGULAR_POLL_TYPE) {
        pollHeader += ` min=${pollMin}`;
      }

      if (pollMax && pollType !== REGULAR_POLL_TYPE) {
        pollHeader += ` max=${pollMax}`;
      }

      if (pollType === NUMBER_POLL_TYPE) {
        pollHeader += ` step=${step}`;
      }

      if (publicPoll) {
        pollHeader += ` public=true`;
      }

      if (chartType && pollType !== NUMBER_POLL_TYPE) {
        pollHeader += ` chartType=${chartType}`;
      }

      if (pollGroups && pollGroups.length > 0) {
        pollHeader += ` groups=${pollGroups}`;
      }

      if (pollAutoClose) {
        pollHeader += ` close=${pollAutoClose.toISOString()}`;
      }

      pollHeader += "]";
      output += `${pollHeader}\n`;

      if (pollTitle) {
        output += `# ${pollTitle.trim()}\n`;
      }

      if (pollOptions.length > 0 && pollType !== NUMBER_POLL_TYPE) {
        pollOptions.forEach(option => {
          if (option.value.length > 0) {
            output += `* ${option.value.trim()}\n`;
          }
        });
      }

      output += "[/poll]\n";
      return output;
    },

    minNumOfOptionsValidation(isNumber, pollOptionsCount) {
      let options = {
        ok: true
      };

      if (!isNumber) {
        if (pollOptionsCount < 1) {
          return _object.default.create({
            failed: true,
            reason: _I18n.default.t("poll.ui_builder.help.options_min_count")
          });
        }

        if (pollOptionsCount > this.siteSettings.poll_maximum_options) {
          return _object.default.create({
            failed: true,
            reason: _I18n.default.t("poll.ui_builder.help.options_max_count", {
              count: this.siteSettings.poll_maximum_options
            })
          });
        }
      }

      return _object.default.create(options);
    },

    showMinNumOfOptionsValidation(pollOptions) {
      return pollOptions.length !== 1 || pollOptions[0].value !== "";
    },

    minMaxValueValidation(isMultiple, pollOptionsCount, isNumber, pollMin, pollMax, pollStep) {
      pollMin = parseInt(pollMin, 10) || 0;
      pollMax = parseInt(pollMax, 10) || 0;
      pollStep = parseInt(pollStep, 10) || 0;

      if (pollMin < 0) {
        return _object.default.create({
          failed: true,
          reason: _I18n.default.t("poll.ui_builder.help.invalid_min_value")
        });
      }

      if (pollMax < 0 || isMultiple && pollMax > pollOptionsCount) {
        return _object.default.create({
          failed: true,
          reason: _I18n.default.t("poll.ui_builder.help.invalid_max_value")
        });
      }

      if (pollMin > pollMax) {
        return _object.default.create({
          failed: true,
          reason: _I18n.default.t("poll.ui_builder.help.invalid_values")
        });
      }

      if (isNumber) {
        if (pollStep < 1) {
          return _object.default.create({
            failed: true,
            reason: _I18n.default.t("poll.ui_builder.help.min_step_value")
          });
        }

        const optionsCount = (pollMax - pollMin + 1) / pollStep;

        if (optionsCount < 1) {
          return _object.default.create({
            failed: true,
            reason: _I18n.default.t("poll.ui_builder.help.options_min_count")
          });
        }

        if (optionsCount > this.siteSettings.poll_maximum_options) {
          return _object.default.create({
            failed: true,
            reason: _I18n.default.t("poll.ui_builder.help.options_max_count", {
              count: this.siteSettings.poll_maximum_options
            })
          });
        }
      }

      return _object.default.create({
        ok: true
      });
    },

    disableInsert(minMaxValueValidation, minNumOfOptionsValidation) {
      return !minMaxValueValidation.ok || !minNumOfOptionsValidation.ok;
    },

    _comboboxOptions(startIndex, endIndex) {
      return [...Array(endIndex - startIndex).keys()].map(number => ({
        value: number + startIndex,
        name: number + startIndex
      }));
    },

    onOptionsTextChange(e) {
      let idx = 0;
      this.set("pollOptions", e.target.value.split("\n").map(value => _object.default.create({
        idx: idx++,
        value
      })));
    },

    insertPoll() {
      this.toolbarEvent.addText(this.pollOutput);
      this.send("closeModal");
    },

    toggleAdvanced() {
      this.toggleProperty("showAdvanced");

      if (this.showAdvanced) {
        this.set("pollOptionsText", this.pollOptions.map(x => x.value).join("\n"));
      }
    },

    addOption(beforeOption, value, e) {
      if (value !== "") {
        const idx = this.pollOptions.indexOf(beforeOption) + 1;

        const option = _object.default.create({
          value: ""
        });

        this.pollOptions.insertAt(idx, option);
        let lastOptionIdx = 0;
        this.pollOptions.forEach(o => o.set("idx", lastOptionIdx++));
        (0, _runloop.next)(() => {
          const pollOptions = document.getElementsByClassName("poll-options");

          if (pollOptions) {
            const inputs = pollOptions[0].getElementsByTagName("input");

            if (option.idx < inputs.length) {
              inputs[option.idx].focus();
            }
          }
        });
      }

      if (e) {
        e.preventDefault();
      }
    },

    removeOption(option) {
      this.pollOptions.removeObject(option);
    }

  }, (_applyDecoratedDescriptor(_obj, "pollResults", [_decorators.default], Object.getOwnPropertyDescriptor(_obj, "pollResults"), _obj), _applyDecoratedDescriptor(_obj, "isRegular", [_dec], Object.getOwnPropertyDescriptor(_obj, "isRegular"), _obj), _applyDecoratedDescriptor(_obj, "isNumber", [_dec2], Object.getOwnPropertyDescriptor(_obj, "isNumber"), _obj), _applyDecoratedDescriptor(_obj, "isMultiple", [_dec3], Object.getOwnPropertyDescriptor(_obj, "isMultiple"), _obj), _applyDecoratedDescriptor(_obj, "pollOptionsCount", [_dec4], Object.getOwnPropertyDescriptor(_obj, "pollOptionsCount"), _obj), _applyDecoratedDescriptor(_obj, "siteGroups", [_dec5], Object.getOwnPropertyDescriptor(_obj, "siteGroups"), _obj), _applyDecoratedDescriptor(_obj, "isPie", [_dec6], Object.getOwnPropertyDescriptor(_obj, "isPie"), _obj), _applyDecoratedDescriptor(_obj, "_setPollMinMax", [_dec7], Object.getOwnPropertyDescriptor(_obj, "_setPollMinMax"), _obj), _applyDecoratedDescriptor(_obj, "pollOutput", [_dec8], Object.getOwnPropertyDescriptor(_obj, "pollOutput"), _obj), _applyDecoratedDescriptor(_obj, "minNumOfOptionsValidation", [_dec9], Object.getOwnPropertyDescriptor(_obj, "minNumOfOptionsValidation"), _obj), _applyDecoratedDescriptor(_obj, "showMinNumOfOptionsValidation", [_dec10], Object.getOwnPropertyDescriptor(_obj, "showMinNumOfOptionsValidation"), _obj), _applyDecoratedDescriptor(_obj, "minMaxValueValidation", [_dec11], Object.getOwnPropertyDescriptor(_obj, "minMaxValueValidation"), _obj), _applyDecoratedDescriptor(_obj, "disableInsert", [_dec12], Object.getOwnPropertyDescriptor(_obj, "disableInsert"), _obj), _applyDecoratedDescriptor(_obj, "onOptionsTextChange", [_object.action], Object.getOwnPropertyDescriptor(_obj, "onOptionsTextChange"), _obj), _applyDecoratedDescriptor(_obj, "insertPoll", [_object.action], Object.getOwnPropertyDescriptor(_obj, "insertPoll"), _obj), _applyDecoratedDescriptor(_obj, "toggleAdvanced", [_object.action], Object.getOwnPropertyDescriptor(_obj, "toggleAdvanced"), _obj), _applyDecoratedDescriptor(_obj, "addOption", [_object.action], Object.getOwnPropertyDescriptor(_obj, "addOption"), _obj), _applyDecoratedDescriptor(_obj, "removeOption", [_object.action], Object.getOwnPropertyDescriptor(_obj, "removeOption"), _obj)), _obj)));

  _exports.default = _default;
});
define("discourse/plugins/poll/discourse/templates/components/poll-breakdown-chart", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <label class="poll-breakdown-chart-label">{{@group}}</label>
  <canvas class="poll-breakdown-chart-chart"></canvas>
  
  */
  {
    "id": "IU+EFALE",
    "block": "[[[10,\"label\"],[14,0,\"poll-breakdown-chart-label\"],[12],[1,[30,1]],[13],[1,\"\\n\"],[10,\"canvas\"],[14,0,\"poll-breakdown-chart-chart\"],[12],[13],[1,\"\\n\"]],[\"@group\"],false,[]]",
    "moduleName": "discourse/plugins/poll/discourse/templates/components/poll-breakdown-chart.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/poll/discourse/templates/components/poll-breakdown-option", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <li
    class="poll-breakdown-option"
    style={{this.colorBackgroundStyle}}
    {{on "mouseover" @onMouseOver}}
    {{on "mouseout" @onMouseOut}}
    role="button"
  >
    <span class="poll-breakdown-option-color" style={{this.colorPreviewStyle}}></span>
  
    <span class="poll-breakdown-option-count">
      {{#if this.showPercentage}}
        {{this.percent}}%
      {{else}}
        {{@option.votes}}
      {{/if}}
    </span>
    <span class="poll-breakdown-option-text">{{html-safe @option.html}}</span>
  </li>
  
  */
  {
    "id": "AH9K5QwE",
    "block": "[[[11,\"li\"],[24,0,\"poll-breakdown-option\"],[16,5,[30,0,[\"colorBackgroundStyle\"]]],[24,\"role\",\"button\"],[4,[38,0],[\"mouseover\",[30,1]],null],[4,[38,0],[\"mouseout\",[30,2]],null],[12],[1,\"\\n  \"],[10,1],[14,0,\"poll-breakdown-option-color\"],[15,5,[30,0,[\"colorPreviewStyle\"]]],[12],[13],[1,\"\\n\\n  \"],[10,1],[14,0,\"poll-breakdown-option-count\"],[12],[1,\"\\n\"],[41,[30,0,[\"showPercentage\"]],[[[1,\"      \"],[1,[30,0,[\"percent\"]]],[1,\"%\\n\"]],[]],[[[1,\"      \"],[1,[30,3,[\"votes\"]]],[1,\"\\n\"]],[]]],[1,\"  \"],[13],[1,\"\\n  \"],[10,1],[14,0,\"poll-breakdown-option-text\"],[12],[1,[28,[35,2],[[30,3,[\"html\"]]],null]],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[\"@onMouseOver\",\"@onMouseOut\",\"@option\"],false,[\"on\",\"if\",\"html-safe\"]]",
    "moduleName": "discourse/plugins/poll/discourse/templates/components/poll-breakdown-option.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/poll/discourse/templates/modal/poll-breakdown", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <DModalBody @title="poll.breakdown.title">
    <div class="poll-breakdown-sidebar">
      <p class="poll-breakdown-title">
        {{this.title}}
      </p>
  
      <div class="poll-breakdown-total-votes">{{i18n "poll.breakdown.votes" count=this.model.poll.voters}}</div>
  
      <ul class="poll-breakdown-options">
        {{#each this.model.poll.options as |option index|}}
          <PollBreakdownOption @option={{option}} @index={{index}} @totalVotes={{this.totalVotes}} @optionsCount={{this.model.poll.options.length}} @displayMode={{this.displayMode}} @highlightedOption={{this.highlightedOption}} @onMouseOver={{fn (mut this.highlightedOption) index}} @onMouseOut={{fn (mut this.highlightedOption) null}} />
        {{/each}}
      </ul>
    </div>
  
    <div class="poll-breakdown-body">
      <div class="poll-breakdown-body-header">
        <label class="poll-breakdown-body-header-label">{{i18n "poll.breakdown.breakdown"}}</label>
  
        <ComboBox @content={{this.groupableUserFields}} @value={{this.groupedBy}} @nameProperty="label" @class="poll-breakdown-dropdown" @onChange={{action this.setGrouping}} />
      </div>
  
      <div class="poll-breakdown-charts">
        {{#each this.charts as |chart|}}
          <PollBreakdownChart @group={{get chart "group"}} @options={{get chart "options"}} @displayMode={{this.displayMode}} @highlightedOption={{this.highlightedOption}} @setHighlightedOption={{fn (mut this.highlightedOption)}} />
        {{/each}}
      </div>
    </div>
  </DModalBody>
  
  */
  {
    "id": "jhkUWGMw",
    "block": "[[[8,[39,0],null,[[\"@title\"],[\"poll.breakdown.title\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"poll-breakdown-sidebar\"],[12],[1,\"\\n    \"],[10,2],[14,0,\"poll-breakdown-title\"],[12],[1,\"\\n      \"],[1,[30,0,[\"title\"]]],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[10,0],[14,0,\"poll-breakdown-total-votes\"],[12],[1,[28,[35,1],[\"poll.breakdown.votes\"],[[\"count\"],[[30,0,[\"model\",\"poll\",\"voters\"]]]]]],[13],[1,\"\\n\\n    \"],[10,\"ul\"],[14,0,\"poll-breakdown-options\"],[12],[1,\"\\n\"],[42,[28,[37,3],[[28,[37,3],[[30,0,[\"model\",\"poll\",\"options\"]]],null]],null],null,[[[1,\"        \"],[8,[39,4],null,[[\"@option\",\"@index\",\"@totalVotes\",\"@optionsCount\",\"@displayMode\",\"@highlightedOption\",\"@onMouseOver\",\"@onMouseOut\"],[[30,1],[30,2],[30,0,[\"totalVotes\"]],[30,0,[\"model\",\"poll\",\"options\",\"length\"]],[30,0,[\"displayMode\"]],[30,0,[\"highlightedOption\"]],[28,[37,5],[[28,[37,6],[[30,0,[\"highlightedOption\"]]],null],[30,2]],null],[28,[37,5],[[28,[37,6],[[30,0,[\"highlightedOption\"]]],null],null],null]]],null],[1,\"\\n\"]],[1,2]],null],[1,\"    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\\n  \"],[10,0],[14,0,\"poll-breakdown-body\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"poll-breakdown-body-header\"],[12],[1,\"\\n      \"],[10,\"label\"],[14,0,\"poll-breakdown-body-header-label\"],[12],[1,[28,[35,1],[\"poll.breakdown.breakdown\"],null]],[13],[1,\"\\n\\n      \"],[8,[39,7],null,[[\"@content\",\"@value\",\"@nameProperty\",\"@class\",\"@onChange\"],[[30,0,[\"groupableUserFields\"]],[30,0,[\"groupedBy\"]],\"label\",\"poll-breakdown-dropdown\",[28,[37,8],[[30,0],[30,0,[\"setGrouping\"]]],null]]],null],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[10,0],[14,0,\"poll-breakdown-charts\"],[12],[1,\"\\n\"],[42,[28,[37,3],[[28,[37,3],[[30,0,[\"charts\"]]],null]],null],null,[[[1,\"        \"],[8,[39,9],null,[[\"@group\",\"@options\",\"@displayMode\",\"@highlightedOption\",\"@setHighlightedOption\"],[[28,[37,10],[[30,3],\"group\"],null],[28,[37,10],[[30,3],\"options\"],null],[30,0,[\"displayMode\"]],[30,0,[\"highlightedOption\"]],[28,[37,5],[[28,[37,6],[[30,0,[\"highlightedOption\"]]],null]],null]]],null],[1,\"\\n\"]],[3]],null],[1,\"    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\"]],[\"option\",\"index\",\"chart\"],false,[\"d-modal-body\",\"i18n\",\"each\",\"-track-array\",\"poll-breakdown-option\",\"fn\",\"mut\",\"combo-box\",\"action\",\"poll-breakdown-chart\",\"get\"]]",
    "moduleName": "discourse/plugins/poll/discourse/templates/modal/poll-breakdown.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/poll/discourse/templates/modal/poll-ui-builder", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <DModalBody @title="poll.ui_builder.title" @class="poll-ui-builder">
    <div class="input-group poll-type">
      <a href {{action (mut this.pollType) "regular"}} class="poll-type-value {{if this.isRegular "active"}}">
        {{i18n "poll.ui_builder.poll_type.regular"}}
      </a>
  
      <a href {{action (mut this.pollType) "multiple"}} class="poll-type-value {{if this.isMultiple "active"}}">
        {{i18n "poll.ui_builder.poll_type.multiple"}}
      </a>
  
      {{#if this.showNumber}}
        <a href {{action (mut this.pollType) "number"}} class="poll-type-value {{if this.isNumber "active"}}">
          {{i18n "poll.ui_builder.poll_type.number"}}
        </a>
      {{/if}}
    </div>
  
    {{#if this.showAdvanced}}
      <div class="input-group poll-title">
        <label class="input-group-label">{{i18n "poll.ui_builder.poll_title.label"}}</label>
        <Input @value={{this.pollTitle}} />
      </div>
    {{/if}}
  
    {{#unless this.isNumber}}
      <div class="poll-options">
        {{#if this.showAdvanced}}
          <label class="input-group-label">{{i18n "poll.ui_builder.poll_options.label"}}</label>
          <Textarea @value={{this.pollOptionsText}} {{on "input" (action "onOptionsTextChange")}} />
          {{#if this.showMinNumOfOptionsValidation}}
            {{#unless this.minNumOfOptionsValidation.ok}}
              <InputTip @validation={{this.minNumOfOptionsValidation}} />
            {{/unless}}
          {{/if}}
        {{else}}
          {{#each this.pollOptions as |option|}}
            <div class="input-group poll-option-value">
              <Input @value={{option.value}} @enter={{action "addOption" option}} />
              {{#if this.canRemoveOption}}
                <DButton @icon="trash-alt" @action={{action "removeOption" option}} />
              {{/if}}
            </div>
          {{/each}}
  
          <div class="poll-option-controls">
            <DButton @class="btn-default" @icon="plus" @label="poll.ui_builder.poll_options.add" @action={{action "addOption" this.pollOptions.lastObject}} />
            {{#if (and this.showMinNumOfOptionsValidation (not this.minNumOfOptionsValidation.ok))}}
              <InputTip @validation={{this.minNumOfOptionsValidation}} />
            {{/if}}
          </div>
        {{/if}}
      </div>
    {{/unless}}
  
    {{#unless this.isRegular}}
      <div class="options">
        <div class="input-group poll-number">
          <label class="input-group-label">{{i18n "poll.ui_builder.poll_config.min"}}</label>
          <Input @type="number" @value={{this.pollMin}} class="poll-options-min" min="1" />
        </div>
  
        <div class="input-group poll-number">
          <label class="input-group-label">{{i18n "poll.ui_builder.poll_config.max"}}</label>
          <Input @type="number" @value={{this.pollMax}} class="poll-options-max" min="1" />
        </div>
  
        {{#if this.isNumber}}
          <div class="input-group poll-number">
            <label class="input-group-label">{{i18n "poll.ui_builder.poll_config.step"}}</label>
            <Input @type="number" @value={{this.pollStep}} min="1" class="poll-options-step" />
          </div>
        {{/if}}
      </div>
  
      {{#unless this.minMaxValueValidation.ok}}
        <InputTip @validation={{this.minMaxValueValidation}} />
      {{/unless}}
    {{/unless}}
  
    {{#if this.showAdvanced}}
      <div class="input-group poll-allowed-groups">
        <label class="input-group-label">{{i18n "poll.ui_builder.poll_groups.label"}}</label>
        <GroupChooser @content={{this.siteGroups}} @value={{this.pollGroups}} @onChange={{action (mut this.pollGroups)}} @labelProperty="name" @valueProperty="name" />
      </div>
  
      <div class="input-group poll-date">
        <label class="input-group-label">{{i18n "poll.ui_builder.automatic_close.label"}}</label>
        <DateTimeInput @date={{this.pollAutoClose}} @onChange={{action (mut this.pollAutoClose)}} @clearable={{true}} @useGlobalPickerContainer={{true}} />
      </div>
  
      <div class="input-group poll-select">
        <label class="input-group-label">{{i18n "poll.ui_builder.poll_result.label"}}</label>
        <ComboBox @content={{this.pollResults}} @value={{this.pollResult}} @class="poll-result" @valueProperty="value" @onChange={{action (mut this.pollResult)}} />
      </div>
  
      {{#unless this.isNumber}}
        <div class="input-group poll-select column">
          <label class="input-group-label">{{i18n "poll.ui_builder.poll_chart_type.label"}}</label>
  
          <div class="radio-group">
            <RadioButton @id="poll-chart-type-bar" @name="poll-chart-type" @value="bar" @selection={{this.chartType}} />
            <label for="poll-chart-type-bar">{{d-icon "chart-bar"}} {{i18n "poll.ui_builder.poll_chart_type.bar"}}</label>
          </div>
  
          <div class="radio-group">
            <RadioButton @id="poll-chart-type-pie" @name="poll-chart-type" @value="pie" @selection={{this.chartType}} />
            <label for="poll-chart-type-pie">{{d-icon "chart-pie"}} {{i18n "poll.ui_builder.poll_chart_type.pie"}}</label>
          </div>
        </div>
      {{/unless}}
  
      {{#unless this.isPie}}
        <div class="input-group poll-checkbox column">
          <label>
            <Input @type="checkbox" @checked={{this.publicPoll}} />
            {{i18n "poll.ui_builder.poll_public.label"}}
          </label>
        </div>
      {{/unless}}
    {{/if}}
  </DModalBody>
  
  <div class="modal-footer">
    <DButton @action={{action "insertPoll"}} @icon="chart-bar" @class="btn-primary" @label="poll.ui_builder.insert" @disabled={{this.disableInsert}} />
  
    <DButton @label="cancel" @class="btn-flat" @action={{route-action "closeModal"}} />
  
    <DButton @action={{action "toggleAdvanced"}} @class="btn-default show-advanced" @icon="cog" @title={{if this.showAdvanced "poll.ui_builder.hide_advanced" "poll.ui_builder.show_advanced"}} />
  </div>
  
  */
  {
    "id": "b81+RtdJ",
    "block": "[[[8,[39,0],null,[[\"@title\",\"@class\"],[\"poll.ui_builder.title\",\"poll-ui-builder\"]],[[\"default\"],[[[[1,\"\\n  \"],[10,0],[14,0,\"input-group poll-type\"],[12],[1,\"\\n    \"],[11,3],[24,6,\"\"],[16,0,[29,[\"poll-type-value \",[52,[30,0,[\"isRegular\"]],\"active\"]]]],[4,[38,2],[[30,0],[28,[37,3],[[30,0,[\"pollType\"]]],null],\"regular\"],null],[12],[1,\"\\n      \"],[1,[28,[35,4],[\"poll.ui_builder.poll_type.regular\"],null]],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[11,3],[24,6,\"\"],[16,0,[29,[\"poll-type-value \",[52,[30,0,[\"isMultiple\"]],\"active\"]]]],[4,[38,2],[[30,0],[28,[37,3],[[30,0,[\"pollType\"]]],null],\"multiple\"],null],[12],[1,\"\\n      \"],[1,[28,[35,4],[\"poll.ui_builder.poll_type.multiple\"],null]],[1,\"\\n    \"],[13],[1,\"\\n\\n\"],[41,[30,0,[\"showNumber\"]],[[[1,\"      \"],[11,3],[24,6,\"\"],[16,0,[29,[\"poll-type-value \",[52,[30,0,[\"isNumber\"]],\"active\"]]]],[4,[38,2],[[30,0],[28,[37,3],[[30,0,[\"pollType\"]]],null],\"number\"],null],[12],[1,\"\\n        \"],[1,[28,[35,4],[\"poll.ui_builder.poll_type.number\"],null]],[1,\"\\n      \"],[13],[1,\"\\n\"]],[]],null],[1,\"  \"],[13],[1,\"\\n\\n\"],[41,[30,0,[\"showAdvanced\"]],[[[1,\"    \"],[10,0],[14,0,\"input-group poll-title\"],[12],[1,\"\\n      \"],[10,\"label\"],[14,0,\"input-group-label\"],[12],[1,[28,[35,4],[\"poll.ui_builder.poll_title.label\"],null]],[13],[1,\"\\n      \"],[8,[39,5],null,[[\"@value\"],[[30,0,[\"pollTitle\"]]]],null],[1,\"\\n    \"],[13],[1,\"\\n\"]],[]],null],[1,\"\\n\"],[41,[51,[30,0,[\"isNumber\"]]],[[[1,\"    \"],[10,0],[14,0,\"poll-options\"],[12],[1,\"\\n\"],[41,[30,0,[\"showAdvanced\"]],[[[1,\"        \"],[10,\"label\"],[14,0,\"input-group-label\"],[12],[1,[28,[35,4],[\"poll.ui_builder.poll_options.label\"],null]],[13],[1,\"\\n        \"],[8,[39,7],[[4,[38,8],[\"input\",[28,[37,2],[[30,0],\"onOptionsTextChange\"],null]],null]],[[\"@value\"],[[30,0,[\"pollOptionsText\"]]]],null],[1,\"\"],[41,[30,0,[\"showMinNumOfOptionsValidation\"]],[[[41,[51,[30,0,[\"minNumOfOptionsValidation\",\"ok\"]]],[[[1,\"            \"],[8,[39,9],null,[[\"@validation\"],[[30,0,[\"minNumOfOptionsValidation\"]]]],null],[1,\"\\n\"]],[]],null]],[]],null]],[]],[[[42,[28,[37,11],[[28,[37,11],[[30,0,[\"pollOptions\"]]],null]],null],null,[[[1,\"          \"],[10,0],[14,0,\"input-group poll-option-value\"],[12],[1,\"\\n            \"],[8,[39,5],null,[[\"@value\",\"@enter\"],[[30,1,[\"value\"]],[28,[37,2],[[30,0],\"addOption\",[30,1]],null]]],null],[1,\"\\n\"],[41,[30,0,[\"canRemoveOption\"]],[[[1,\"              \"],[8,[39,12],null,[[\"@icon\",\"@action\"],[\"trash-alt\",[28,[37,2],[[30,0],\"removeOption\",[30,1]],null]]],null],[1,\"\\n\"]],[]],null],[1,\"          \"],[13],[1,\"\\n\"]],[1]],null],[1,\"\\n        \"],[10,0],[14,0,\"poll-option-controls\"],[12],[1,\"\\n          \"],[8,[39,12],null,[[\"@class\",\"@icon\",\"@label\",\"@action\"],[\"btn-default\",\"plus\",\"poll.ui_builder.poll_options.add\",[28,[37,2],[[30,0],\"addOption\",[30,0,[\"pollOptions\",\"lastObject\"]]],null]]],null],[1,\"\\n\"],[41,[28,[37,13],[[30,0,[\"showMinNumOfOptionsValidation\"]],[28,[37,14],[[30,0,[\"minNumOfOptionsValidation\",\"ok\"]]],null]],null],[[[1,\"            \"],[8,[39,9],null,[[\"@validation\"],[[30,0,[\"minNumOfOptionsValidation\"]]]],null],[1,\"\\n\"]],[]],null],[1,\"        \"],[13],[1,\"\\n\"]],[]]],[1,\"    \"],[13],[1,\"\\n\"]],[]],null],[1,\"\\n\"],[41,[51,[30,0,[\"isRegular\"]]],[[[1,\"    \"],[10,0],[14,0,\"options\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"input-group poll-number\"],[12],[1,\"\\n        \"],[10,\"label\"],[14,0,\"input-group-label\"],[12],[1,[28,[35,4],[\"poll.ui_builder.poll_config.min\"],null]],[13],[1,\"\\n        \"],[8,[39,5],[[24,0,\"poll-options-min\"],[24,\"min\",\"1\"]],[[\"@type\",\"@value\"],[\"number\",[30,0,[\"pollMin\"]]]],null],[1,\"\\n      \"],[13],[1,\"\\n\\n      \"],[10,0],[14,0,\"input-group poll-number\"],[12],[1,\"\\n        \"],[10,\"label\"],[14,0,\"input-group-label\"],[12],[1,[28,[35,4],[\"poll.ui_builder.poll_config.max\"],null]],[13],[1,\"\\n        \"],[8,[39,5],[[24,0,\"poll-options-max\"],[24,\"min\",\"1\"]],[[\"@type\",\"@value\"],[\"number\",[30,0,[\"pollMax\"]]]],null],[1,\"\\n      \"],[13],[1,\"\\n\\n\"],[41,[30,0,[\"isNumber\"]],[[[1,\"        \"],[10,0],[14,0,\"input-group poll-number\"],[12],[1,\"\\n          \"],[10,\"label\"],[14,0,\"input-group-label\"],[12],[1,[28,[35,4],[\"poll.ui_builder.poll_config.step\"],null]],[13],[1,\"\\n          \"],[8,[39,5],[[24,\"min\",\"1\"],[24,0,\"poll-options-step\"]],[[\"@type\",\"@value\"],[\"number\",[30,0,[\"pollStep\"]]]],null],[1,\"\\n        \"],[13],[1,\"\\n\"]],[]],null],[1,\"    \"],[13],[1,\"\\n\\n\"],[41,[51,[30,0,[\"minMaxValueValidation\",\"ok\"]]],[[[1,\"      \"],[8,[39,9],null,[[\"@validation\"],[[30,0,[\"minMaxValueValidation\"]]]],null],[1,\"\\n\"]],[]],null]],[]],null],[1,\"\\n\"],[41,[30,0,[\"showAdvanced\"]],[[[1,\"    \"],[10,0],[14,0,\"input-group poll-allowed-groups\"],[12],[1,\"\\n      \"],[10,\"label\"],[14,0,\"input-group-label\"],[12],[1,[28,[35,4],[\"poll.ui_builder.poll_groups.label\"],null]],[13],[1,\"\\n      \"],[8,[39,15],null,[[\"@content\",\"@value\",\"@onChange\",\"@labelProperty\",\"@valueProperty\"],[[30,0,[\"siteGroups\"]],[30,0,[\"pollGroups\"]],[28,[37,2],[[30,0],[28,[37,3],[[30,0,[\"pollGroups\"]]],null]],null],\"name\",\"name\"]],null],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[10,0],[14,0,\"input-group poll-date\"],[12],[1,\"\\n      \"],[10,\"label\"],[14,0,\"input-group-label\"],[12],[1,[28,[35,4],[\"poll.ui_builder.automatic_close.label\"],null]],[13],[1,\"\\n      \"],[8,[39,16],null,[[\"@date\",\"@onChange\",\"@clearable\",\"@useGlobalPickerContainer\"],[[30,0,[\"pollAutoClose\"]],[28,[37,2],[[30,0],[28,[37,3],[[30,0,[\"pollAutoClose\"]]],null]],null],true,true]],null],[1,\"\\n    \"],[13],[1,\"\\n\\n    \"],[10,0],[14,0,\"input-group poll-select\"],[12],[1,\"\\n      \"],[10,\"label\"],[14,0,\"input-group-label\"],[12],[1,[28,[35,4],[\"poll.ui_builder.poll_result.label\"],null]],[13],[1,\"\\n      \"],[8,[39,17],null,[[\"@content\",\"@value\",\"@class\",\"@valueProperty\",\"@onChange\"],[[30,0,[\"pollResults\"]],[30,0,[\"pollResult\"]],\"poll-result\",\"value\",[28,[37,2],[[30,0],[28,[37,3],[[30,0,[\"pollResult\"]]],null]],null]]],null],[1,\"\\n    \"],[13],[1,\"\\n\\n\"],[41,[51,[30,0,[\"isNumber\"]]],[[[1,\"      \"],[10,0],[14,0,\"input-group poll-select column\"],[12],[1,\"\\n        \"],[10,\"label\"],[14,0,\"input-group-label\"],[12],[1,[28,[35,4],[\"poll.ui_builder.poll_chart_type.label\"],null]],[13],[1,\"\\n\\n        \"],[10,0],[14,0,\"radio-group\"],[12],[1,\"\\n          \"],[8,[39,18],null,[[\"@id\",\"@name\",\"@value\",\"@selection\"],[\"poll-chart-type-bar\",\"poll-chart-type\",\"bar\",[30,0,[\"chartType\"]]]],null],[1,\"\\n          \"],[10,\"label\"],[14,\"for\",\"poll-chart-type-bar\"],[12],[1,[28,[35,19],[\"chart-bar\"],null]],[1,\" \"],[1,[28,[35,4],[\"poll.ui_builder.poll_chart_type.bar\"],null]],[13],[1,\"\\n        \"],[13],[1,\"\\n\\n        \"],[10,0],[14,0,\"radio-group\"],[12],[1,\"\\n          \"],[8,[39,18],null,[[\"@id\",\"@name\",\"@value\",\"@selection\"],[\"poll-chart-type-pie\",\"poll-chart-type\",\"pie\",[30,0,[\"chartType\"]]]],null],[1,\"\\n          \"],[10,\"label\"],[14,\"for\",\"poll-chart-type-pie\"],[12],[1,[28,[35,19],[\"chart-pie\"],null]],[1,\" \"],[1,[28,[35,4],[\"poll.ui_builder.poll_chart_type.pie\"],null]],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n\"]],[]],null],[1,\"\\n\"],[41,[51,[30,0,[\"isPie\"]]],[[[1,\"      \"],[10,0],[14,0,\"input-group poll-checkbox column\"],[12],[1,\"\\n        \"],[10,\"label\"],[12],[1,\"\\n          \"],[8,[39,5],null,[[\"@type\",\"@checked\"],[\"checkbox\",[30,0,[\"publicPoll\"]]]],null],[1,\"\\n          \"],[1,[28,[35,4],[\"poll.ui_builder.poll_public.label\"],null]],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n\"]],[]],null]],[]],null]],[]]]]],[1,\"\\n\\n\"],[10,0],[14,0,\"modal-footer\"],[12],[1,\"\\n  \"],[8,[39,12],null,[[\"@action\",\"@icon\",\"@class\",\"@label\",\"@disabled\"],[[28,[37,2],[[30,0],\"insertPoll\"],null],\"chart-bar\",\"btn-primary\",\"poll.ui_builder.insert\",[30,0,[\"disableInsert\"]]]],null],[1,\"\\n\\n  \"],[8,[39,12],null,[[\"@label\",\"@class\",\"@action\"],[\"cancel\",\"btn-flat\",[28,[37,20],[\"closeModal\"],null]]],null],[1,\"\\n\\n  \"],[8,[39,12],null,[[\"@action\",\"@class\",\"@icon\",\"@title\"],[[28,[37,2],[[30,0],\"toggleAdvanced\"],null],\"btn-default show-advanced\",\"cog\",[52,[30,0,[\"showAdvanced\"]],\"poll.ui_builder.hide_advanced\",\"poll.ui_builder.show_advanced\"]]],null],[1,\"\\n\"],[13],[1,\"\\n\"]],[\"option\"],false,[\"d-modal-body\",\"if\",\"action\",\"mut\",\"i18n\",\"input\",\"unless\",\"textarea\",\"on\",\"input-tip\",\"each\",\"-track-array\",\"d-button\",\"and\",\"not\",\"group-chooser\",\"date-time-input\",\"combo-box\",\"radio-button\",\"d-icon\",\"route-action\"]]",
    "moduleName": "discourse/plugins/poll/discourse/templates/modal/poll-ui-builder.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/poll/initializers/add-poll-ui-builder", ["exports", "discourse-common/utils/decorators", "discourse/lib/show-modal", "discourse/lib/plugin-api"], function (_exports, _decorators, _showModal, _pluginApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"discourse-common/utils/decorators",0,"discourse/lib/show-modal",0,"discourse/lib/plugin-api"eaimeta@70e063a35619d71f

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function initializePollUIBuilder(api) {
    var _dec, _obj;

    api.modifyClass("controller:composer", (_dec = (0, _decorators.default)("siteSettings.poll_enabled", "siteSettings.poll_minimum_trust_level_to_create", "model.topic.pm_with_non_human_user"), (_obj = {
      pluginId: "discourse-poll-ui-builder",

      canBuildPoll(pollEnabled, minimumTrustLevel, pmWithNonHumanUser) {
        return pollEnabled && (pmWithNonHumanUser || this.currentUser && (this.currentUser.staff || this.currentUser.trust_level >= minimumTrustLevel));
      },

      actions: {
        showPollBuilder() {
          (0, _showModal.default)("poll-ui-builder").set("toolbarEvent", this.toolbarEvent);
        }

      }
    }, (_applyDecoratedDescriptor(_obj, "canBuildPoll", [_dec], Object.getOwnPropertyDescriptor(_obj, "canBuildPoll"), _obj)), _obj)));
    api.addToolbarPopupMenuOptionsCallback(() => {
      return {
        action: "showPollBuilder",
        icon: "chart-bar",
        label: "poll.ui_builder.title",
        condition: "canBuildPoll"
      };
    });
  }

  var _default = {
    name: "add-poll-ui-builder",

    initialize() {
      (0, _pluginApi.withPluginApi)("0.8.7", initializePollUIBuilder);
    }

  };
  _exports.default = _default;
});
define("discourse/plugins/poll/initializers/extend-for-poll", ["exports", "@ember/object", "discourse/widgets/glue", "discourse-common/lib/get-owner", "discourse-common/utils/decorators", "discourse/lib/plugin-api"], function (_exports, _object, _glue, _getOwner, _decorators, _pluginApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/object",0,"discourse/widgets/glue",0,"discourse-common/lib/get-owner",0,"discourse-common/utils/decorators",0,"discourse/lib/plugin-api"eaimeta@70e063a35619d71f

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  const PLUGIN_ID = "discourse-poll";
  let _glued = [];
  let _interval = null;

  function rerender() {
    _glued.forEach(g => g.queueRerender());
  }

  function cleanUpPolls() {
    if (_interval) {
      clearInterval(_interval);
      _interval = null;
    }

    _glued.forEach(g => g.cleanUp());

    _glued = [];
  }

  function initializePolls(api) {
    var _dec, _obj;

    const register = (0, _getOwner.getRegister)(api),
          pollGroupableUserFields = api.container.lookup("service:site-settings").poll_groupable_user_fields;
    cleanUpPolls();
    api.modifyClass("controller:topic", {
      pluginId: PLUGIN_ID,

      subscribe() {
        this._super(...arguments);

        this.messageBus.subscribe(`/polls/${this.model.id}`, msg => {
          const post = this.get("model.postStream").findLoadedPost(msg.post_id);
          post?.set("polls", msg.polls);
        });
      },

      unsubscribe() {
        this.messageBus.unsubscribe("/polls/*");

        this._super(...arguments);
      }

    });
    api.modifyClass("model:post", (_dec = (0, _decorators.observes)("polls"), (_obj = {
      pluginId: PLUGIN_ID,
      _polls: null,
      pollsObject: null,

      pollsChanged() {
        const polls = this.polls;

        if (polls) {
          this._polls = this._polls || {};
          polls.forEach(p => {
            const existing = this._polls[p.name];

            if (existing) {
              this._polls[p.name].setProperties(p);
            } else {
              this._polls[p.name] = _object.default.create(p);
            }
          });
          this.set("pollsObject", this._polls);
          rerender();
        }
      }

    }, (_applyDecoratedDescriptor(_obj, "pollsChanged", [_dec], Object.getOwnPropertyDescriptor(_obj, "pollsChanged"), _obj)), _obj)));

    function attachPolls(elem, helper) {
      let pollNodes = [...elem.querySelectorAll(".poll")];
      pollNodes = pollNodes.filter(node => node.parentNode.tagName !== "BLOCKQUOTE");

      if (!pollNodes.length || !helper) {
        return;
      }

      const post = helper.getModel();
      api.preventCloak(post.id);
      post.pollsChanged();
      const polls = post.pollsObject || {};
      const votes = post.polls_votes || {};
      _interval = _interval || setInterval(rerender, 30000);
      pollNodes.forEach(pollNode => {
        const pollName = pollNode.dataset.pollName;
        let poll = polls[pollName];
        let pollPost = post;
        let vote = votes[pollName] || [];
        const quotedId = pollNode.closest(".expanded-quote")?.dataset.postId;

        if (quotedId && post.quoted[quotedId]) {
          pollPost = post.quoted[quotedId];
          pollPost = _object.default.create(pollPost);
          poll = _object.default.create(pollPost.polls.findBy("name", pollName));
          vote = pollPost.polls_votes || {};
          vote = vote[pollName] || [];
        }

        if (poll) {
          const titleElement = pollNode.querySelector(".poll-title");
          const attrs = {
            id: `${pollName}-${pollPost.id}`,
            post: pollPost,
            poll,
            vote,
            hasSavedVote: vote.length > 0,
            titleHTML: titleElement?.outerHTML,
            groupableUserFields: (pollGroupableUserFields || "").split("|").filter(Boolean)
          };
          const glue = new _glue.default("discourse-poll", register, attrs);
          glue.appendTo(pollNode);

          _glued.push(glue);
        }
      });
    }

    api.includePostAttributes("polls", "polls_votes");
    api.decorateCookedElement(attachPolls, {
      onlyStream: true,
      id: "discourse-poll"
    });
    api.cleanupStream(cleanUpPolls);
  }

  var _default = {
    name: "extend-for-poll",

    initialize() {
      (0, _pluginApi.withPluginApi)("0.8.7", initializePolls);
    }

  };
  _exports.default = _default;
});
define("discourse/plugins/poll/lib/chart-colors", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.getColors = getColors;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f

  function getColors(count, palette) {
    palette = palette || "cool";
    let gradient;

    switch (palette) {
      case "cool":
        gradient = {
          0: [255, 255, 255],
          25: [220, 237, 200],
          50: [66, 179, 213],
          75: [26, 39, 62],
          100: [0, 0, 0]
        };
        break;

      case "warm":
        gradient = {
          0: [255, 255, 255],
          25: [254, 235, 101],
          50: [228, 82, 27],
          75: [77, 52, 47],
          100: [0, 0, 0]
        };
        break;
    }

    let gradientKeys = Object.keys(gradient);
    let colors = [];
    let currentGradientValue;
    let previousGradientIndex;

    for (let colorIndex = 0; colorIndex < count; colorIndex++) {
      currentGradientValue = (colorIndex + 1) * (100 / (count + 1));
      previousGradientIndex = previousGradientIndex || 0;
      let baseGradientKeyIndex;

      for (let y = previousGradientIndex; y < gradientKeys.length; y++) {
        if (!gradientKeys[y + 1]) {
          baseGradientKeyIndex = y - 1;
          break;
        } else if (currentGradientValue >= gradientKeys[y] && currentGradientValue < gradientKeys[y + 1]) {
          baseGradientKeyIndex = y;
          break;
        }
      }

      let differenceMultiplier = (currentGradientValue - gradientKeys[baseGradientKeyIndex]) / (gradientKeys[baseGradientKeyIndex + 1] - gradientKeys[baseGradientKeyIndex]);
      let color = [];

      for (let k = 0; k < 3; k++) {
        color.push(Math.round(gradient[gradientKeys[baseGradientKeyIndex]][k] - (gradient[gradientKeys[baseGradientKeyIndex]][k] - gradient[gradientKeys[baseGradientKeyIndex + 1]][k]) * differenceMultiplier));
      }

      colors.push(`rgb(${color.toString()})`);
      previousGradientIndex = baseGradientKeyIndex;
    }

    return colors;
  }
});
define("discourse/plugins/poll/lib/discourse-markdown/poll", ["exports", "I18n"], function (_exports, _I18n) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setup = setup;
  0; //eaimeta@70e063a35619d71f0,"I18n"eaimeta@70e063a35619d71f

  const DATA_PREFIX = "data-poll-";
  const DEFAULT_POLL_NAME = "poll";
  const ALLOWED_ATTRIBUTES = ["close", "max", "min", "name", "order", "public", "results", "chartType", "groups", "status", "step", "type"];

  function replaceToken(tokens, target, list) {
    let pos = tokens.indexOf(target);
    let level = tokens[pos].level;
    tokens.splice(pos, 1, ...list);
    list[0].map = target.map; // resequence levels

    for (; pos < tokens.length; pos++) {
      let nesting = tokens[pos].nesting;

      if (nesting < 0) {
        level--;
      }

      tokens[pos].level = level;

      if (nesting > 0) {
        level++;
      }
    }
  } // analyzes the block to that we have poll options


  function getListItems(tokens, startToken) {
    let i = tokens.length - 1;
    let listItems = [];
    let buffer = [];

    for (; tokens[i] !== startToken; i--) {
      if (i === 0) {
        return;
      }

      let token = tokens[i];

      if (token.level === 0) {
        if (token.tag !== "ol" && token.tag !== "ul") {
          return;
        }
      }

      if (token.level === 1 && token.nesting === 1) {
        if (token.tag === "li") {
          listItems.push([token, buffer.reverse().join(" ")]);
        } else {
          return;
        }
      }

      if (token.level === 1 && token.nesting === 1 && token.tag === "li") {
        buffer = [];
      } else {
        if (token.type === "text" || token.type === "inline") {
          buffer.push(token.content);
        }
      }
    }

    return listItems.reverse();
  }

  function invalidPoll(state, tag) {
    let token = state.push("text", "", 0);
    token.content = "[/" + tag + "]";
  }

  function getTitle(tokens, startToken) {
    const startIndex = tokens.indexOf(startToken);

    if (startIndex === -1) {
      return;
    }

    const pollTokens = tokens.slice(startIndex);
    const open = pollTokens.findIndex(token => token.type === "heading_open");
    const close = pollTokens.findIndex(token => token.type === "heading_close");

    if (open === -1 || close === -1) {
      return;
    }

    const titleTokens = pollTokens.slice(open + 1, close); // Remove the heading element

    tokens.splice(startIndex + open, close - open + 1);
    return titleTokens;
  }

  const rule = {
    tag: "poll",

    before(state, tagInfo, raw) {
      let token = state.push("text", "", 0);
      token.content = raw;
      token.bbcode_attrs = tagInfo.attrs;
      token.bbcode_type = "poll_open";
    },

    after(state, openToken, raw) {
      const titleTokens = getTitle(state.tokens, openToken);
      let items = getListItems(state.tokens, openToken);

      if (!items) {
        return invalidPoll(state, raw);
      }

      const attrs = openToken.bbcode_attrs; // default poll attributes

      const attributes = [["class", "poll"]];

      if (!attrs["status"]) {
        attributes.push([DATA_PREFIX + "status", "open"]);
      }

      ALLOWED_ATTRIBUTES.forEach(name => {
        if (attrs[name]) {
          attributes.push([DATA_PREFIX + name, attrs[name]]);
        }
      });

      if (!attrs.name) {
        attributes.push([DATA_PREFIX + "name", DEFAULT_POLL_NAME]);
      } // we might need these values later...


      let min = parseInt(attrs["min"], 10);
      let max = parseInt(attrs["max"], 10);
      let step = parseInt(attrs["step"], 10); // infinite loop if step < 1

      if (step < 1) {
        step = 1;
      }

      let header = [];
      let token = new state.Token("poll_open", "div", 1);
      token.block = true;
      token.attrs = attributes;
      header.push(token);
      token = new state.Token("poll_open", "div", 1);
      token.block = true;
      header.push(token);
      token = new state.Token("poll_open", "div", 1);
      token.attrs = [["class", "poll-container"]];
      header.push(token);

      if (titleTokens) {
        token = new state.Token("title_open", "div", 1);
        token.attrs = [["class", "poll-title"]];
        header.push(token);
        header.push(...titleTokens);
        token = new state.Token("title_close", "div", -1);
        header.push(token);
      } // generate the options when the type is "number"


      if (attrs["type"] === "number") {
        // default values
        if (isNaN(min)) {
          min = 1;
        }

        if (isNaN(max)) {
          max = state.md.options.discourse.pollMaximumOptions;
        }

        if (isNaN(step)) {
          step = 1;
        }

        if (items.length > 0) {
          return invalidPoll(state, raw);
        } // dynamically generate options


        token = new state.Token("bullet_list_open", "ul", 1);
        header.push(token);

        for (let o = min; o <= max; o += step) {
          token = new state.Token("list_item_open", "li", 1);
          items.push([token, String(o)]);
          header.push(token);
          token = new state.Token("text", "", 0);
          token.content = String(o);
          header.push(token);
          token = new state.Token("list_item_close", "li", -1);
          header.push(token);
        }

        token = new state.Token("bullet_item_close", "", -1);
        header.push(token);
      } // flag items so we add hashes


      for (let o = 0; o < items.length; o++) {
        token = items[o][0];
        let text = items[o][1];
        token.attrs = token.attrs || [];
        let md5Hash = md5(JSON.stringify([text]));
        token.attrs.push([DATA_PREFIX + "option-id", md5Hash]);
      }

      replaceToken(state.tokens, openToken, header); // we got to correct the level on the state
      // we just resequenced

      state.level = state.tokens[state.tokens.length - 1].level;
      state.push("poll_close", "div", -1);
      token = state.push("poll_open", "div", 1);
      token.attrs = [["class", "poll-info"]];
      state.push("paragraph_open", "p", 1);
      token = state.push("span_open", "span", 1);
      token.block = false;
      token.attrs = [["class", "info-number"]];
      token = state.push("text", "", 0);
      token.content = "0";
      state.push("span_close", "span", -1);
      token = state.push("span_open", "span", 1);
      token.block = false;
      token.attrs = [["class", "info-label"]];
      token = state.push("text", "", 0);
      token.content = _I18n.default.t("poll.voters", {
        count: 0
      });
      state.push("span_close", "span", -1);
      state.push("paragraph_close", "p", -1);
      state.push("poll_close", "div", -1);
      state.push("poll_close", "div", -1);
      state.push("poll_close", "div", -1);
    }

  };

  function newApiInit(helper) {
    helper.registerOptions((opts, siteSettings) => {
      if (!siteSettings.poll_enabled) {
        opts.features.poll = false;
      }

      opts.pollMaximumOptions = siteSettings.poll_maximum_options;
    });
    helper.registerPlugin(md => {
      md.block.bbcode.ruler.push("poll", rule);
    });
  }

  function setup(helper) {
    helper.allowList(["div.poll", "div.poll-info", "div.poll-container", "div.poll-title", "div.poll-buttons", "div[data-*]", "span.info-number", "span.info-text", "span.info-label", "a.button.cast-votes", "a.button.toggle-results", "li[data-*]"]);
    newApiInit(helper);
  }
  /*!
   * Joseph Myer's md5() algorithm wrapped in a self-invoked function to prevent
   * global namespace pollution, modified to hash unicode characters as UTF-8.
   *
   * Copyright 1999-2010, Joseph Myers, Paul Johnston, Greg Holt, Will Bond <will@wbond.net>
   * http://www.myersdaily.org/joseph/javascript/md5-text.html
   * http://pajhome.org.uk/crypt/md5
   *
   * Released under the BSD license
   * http://www.opensource.org/licenses/bsd-license
   */


  function md5cycle(x, k) {
    let a = x[0],
        b = x[1],
        c = x[2],
        d = x[3];
    a = ff(a, b, c, d, k[0], 7, -680876936);
    d = ff(d, a, b, c, k[1], 12, -389564586);
    c = ff(c, d, a, b, k[2], 17, 606105819);
    b = ff(b, c, d, a, k[3], 22, -1044525330);
    a = ff(a, b, c, d, k[4], 7, -176418897);
    d = ff(d, a, b, c, k[5], 12, 1200080426);
    c = ff(c, d, a, b, k[6], 17, -1473231341);
    b = ff(b, c, d, a, k[7], 22, -45705983);
    a = ff(a, b, c, d, k[8], 7, 1770035416);
    d = ff(d, a, b, c, k[9], 12, -1958414417);
    c = ff(c, d, a, b, k[10], 17, -42063);
    b = ff(b, c, d, a, k[11], 22, -1990404162);
    a = ff(a, b, c, d, k[12], 7, 1804603682);
    d = ff(d, a, b, c, k[13], 12, -40341101);
    c = ff(c, d, a, b, k[14], 17, -1502002290);
    b = ff(b, c, d, a, k[15], 22, 1236535329);
    a = gg(a, b, c, d, k[1], 5, -165796510);
    d = gg(d, a, b, c, k[6], 9, -1069501632);
    c = gg(c, d, a, b, k[11], 14, 643717713);
    b = gg(b, c, d, a, k[0], 20, -373897302);
    a = gg(a, b, c, d, k[5], 5, -701558691);
    d = gg(d, a, b, c, k[10], 9, 38016083);
    c = gg(c, d, a, b, k[15], 14, -660478335);
    b = gg(b, c, d, a, k[4], 20, -405537848);
    a = gg(a, b, c, d, k[9], 5, 568446438);
    d = gg(d, a, b, c, k[14], 9, -1019803690);
    c = gg(c, d, a, b, k[3], 14, -187363961);
    b = gg(b, c, d, a, k[8], 20, 1163531501);
    a = gg(a, b, c, d, k[13], 5, -1444681467);
    d = gg(d, a, b, c, k[2], 9, -51403784);
    c = gg(c, d, a, b, k[7], 14, 1735328473);
    b = gg(b, c, d, a, k[12], 20, -1926607734);
    a = hh(a, b, c, d, k[5], 4, -378558);
    d = hh(d, a, b, c, k[8], 11, -2022574463);
    c = hh(c, d, a, b, k[11], 16, 1839030562);
    b = hh(b, c, d, a, k[14], 23, -35309556);
    a = hh(a, b, c, d, k[1], 4, -1530992060);
    d = hh(d, a, b, c, k[4], 11, 1272893353);
    c = hh(c, d, a, b, k[7], 16, -155497632);
    b = hh(b, c, d, a, k[10], 23, -1094730640);
    a = hh(a, b, c, d, k[13], 4, 681279174);
    d = hh(d, a, b, c, k[0], 11, -358537222);
    c = hh(c, d, a, b, k[3], 16, -722521979);
    b = hh(b, c, d, a, k[6], 23, 76029189);
    a = hh(a, b, c, d, k[9], 4, -640364487);
    d = hh(d, a, b, c, k[12], 11, -421815835);
    c = hh(c, d, a, b, k[15], 16, 530742520);
    b = hh(b, c, d, a, k[2], 23, -995338651);
    a = ii(a, b, c, d, k[0], 6, -198630844);
    d = ii(d, a, b, c, k[7], 10, 1126891415);
    c = ii(c, d, a, b, k[14], 15, -1416354905);
    b = ii(b, c, d, a, k[5], 21, -57434055);
    a = ii(a, b, c, d, k[12], 6, 1700485571);
    d = ii(d, a, b, c, k[3], 10, -1894986606);
    c = ii(c, d, a, b, k[10], 15, -1051523);
    b = ii(b, c, d, a, k[1], 21, -2054922799);
    a = ii(a, b, c, d, k[8], 6, 1873313359);
    d = ii(d, a, b, c, k[15], 10, -30611744);
    c = ii(c, d, a, b, k[6], 15, -1560198380);
    b = ii(b, c, d, a, k[13], 21, 1309151649);
    a = ii(a, b, c, d, k[4], 6, -145523070);
    d = ii(d, a, b, c, k[11], 10, -1120210379);
    c = ii(c, d, a, b, k[2], 15, 718787259);
    b = ii(b, c, d, a, k[9], 21, -343485551);
    x[0] = add32(a, x[0]);
    x[1] = add32(b, x[1]);
    x[2] = add32(c, x[2]);
    x[3] = add32(d, x[3]);
  }

  function cmn(q, a, b, x, s, t) {
    a = add32(add32(a, q), add32(x, t));
    return add32(a << s | a >>> 32 - s, b);
  }

  function ff(a, b, c, d, x, s, t) {
    return cmn(b & c | ~b & d, a, b, x, s, t);
  }

  function gg(a, b, c, d, x, s, t) {
    return cmn(b & d | c & ~d, a, b, x, s, t);
  }

  function hh(a, b, c, d, x, s, t) {
    return cmn(b ^ c ^ d, a, b, x, s, t);
  }

  function ii(a, b, c, d, x, s, t) {
    return cmn(c ^ (b | ~d), a, b, x, s, t);
  }

  function md51(s) {
    // Converts the string to UTF-8 "bytes"
    s = unescape(encodeURI(s));
    let n = s.length,
        state = [1732584193, -271733879, -1732584194, 271733878],
        i;

    for (i = 64; i <= s.length; i += 64) {
      md5cycle(state, md5blk(s.substring(i - 64, i)));
    }

    s = s.substring(i - 64);
    let tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (i = 0; i < s.length; i++) {
      tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
    }

    tail[i >> 2] |= 0x80 << (i % 4 << 3);

    if (i > 55) {
      md5cycle(state, tail);

      for (i = 0; i < 16; i++) {
        tail[i] = 0;
      }
    }

    tail[14] = n * 8;
    md5cycle(state, tail);
    return state;
  }

  function md5blk(s) {
    /* I figured global was faster.   */
    let md5blks = [],
        i;
    /* Andy King said do it this way. */

    for (i = 0; i < 64; i += 4) {
      md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
    }

    return md5blks;
  }

  let hex_chr = "0123456789abcdef".split("");

  function rhex(n) {
    let s = "",
        j = 0;

    for (; j < 4; j++) {
      s += hex_chr[n >> j * 8 + 4 & 0x0f] + hex_chr[n >> j * 8 & 0x0f];
    }

    return s;
  }

  function hex(x) {
    for (let i = 0; i < x.length; i++) {
      x[i] = rhex(x[i]);
    }

    return x.join("");
  }

  function add32(a, b) {
    return a + b & 0xffffffff;
  }

  function md5(s) {
    return hex(md51(s));
  }
});
define("discourse/plugins/poll/lib/even-round", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f

  // works as described on http://stackoverflow.com/a/13483710
  function sumsUpTo100(percentages) {
    return percentages.map(p => Math.floor(p)).reduce((a, b) => a + b) === 100;
  }

  function _default(percentages) {
    let decimals = percentages.map(a => a % 1);
    const sumOfDecimals = Math.ceil(decimals.reduce((a, b) => a + b)); // compensate error by adding 1 to n items with the greatest decimal part

    for (let i = 0, max = decimals.length; i < sumOfDecimals && i < max; i++) {
      // find the greatest item in the decimals array, set it to 0,
      // and increase the corresponding item in the percentages array by 1
      let greatest = 0;
      let index = 0;

      for (let j = 0; j < decimals.length; j++) {
        if (decimals[j] > greatest) {
          index = j;
          greatest = decimals[j];
        }
      }

      ++percentages[index];
      decimals[index] = 0; // quit early when there is a rounding issue

      if (sumsUpTo100(percentages)) {
        break;
      }
    }

    return percentages.map(p => Math.floor(p));
  }
});
define("discourse/plugins/poll/widgets/discourse-poll", ["exports", "I18n", "discourse/plugins/poll/controllers/poll-ui-builder", "discourse/widgets/raw-html", "discourse/lib/ajax", "discourse/widgets/post", "discourse/widgets/widget", "discourse/plugins/poll/lib/even-round", "discourse/plugins/poll/lib/chart-colors", "virtual-dom", "discourse-common/lib/icon-library", "discourse/lib/load-script", "discourse/lib/ajax-error", "discourse/lib/formatter", "discourse/lib/round", "discourse/lib/show-modal", "bootbox", "discourse/lib/local-dates"], function (_exports, _I18n, _pollUiBuilder, _rawHtml, _ajax, _post, _widget, _evenRound, _chartColors, _virtualDom, _iconLibrary, _loadScript, _ajaxError, _formatter, _round, _showModal, _bootbox, _localDates) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"I18n",0,"discourse/plugins/poll/controllers/poll-ui-builder",0,"discourse/widgets/raw-html",0,"discourse/lib/ajax",0,"discourse/widgets/post",0,"discourse/widgets/widget",0,"discourse/plugins/poll/lib/even-round",0,"discourse/plugins/poll/lib/chart-colors",0,"virtual-dom",0,"discourse-common/lib/icon-library",0,"discourse/lib/load-script",0,"discourse/lib/ajax-error",0,"discourse/lib/formatter",0,"discourse/lib/round",0,"discourse/lib/show-modal",0,"bootbox",0,"discourse/lib/local-dates"eaimeta@70e063a35619d71f

  const FETCH_VOTERS_COUNT = 25;

  function optionHtml(option) {
    let siteSettings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const el = document.createElement("span");
    el.innerHTML = option.html;
    (0, _localDates.applyLocalDates)(el.querySelectorAll(".discourse-local-date"), siteSettings);
    return new _rawHtml.default({
      html: `<span>${el.innerHTML}</span>`
    });
  }

  function infoTextHtml(text) {
    return new _rawHtml.default({
      html: `<span class="info-text">${text}</span>`
    });
  }

  function checkUserGroups(user, poll) {
    const pollGroups = poll && poll.groups && poll.groups.split(",").map(g => g.toLowerCase());

    if (!pollGroups) {
      return true;
    }

    const userGroups = user && user.groups && user.groups.map(g => g.name.toLowerCase());
    return userGroups && pollGroups.some(g => userGroups.includes(g));
  }

  (0, _widget.createWidget)("discourse-poll-option", {
    tagName: "li",

    buildAttributes(attrs) {
      return {
        tabindex: 0,
        "data-poll-option-id": attrs.option.id
      };
    },

    html(attrs) {
      const contents = [];
      const {
        option,
        vote
      } = attrs;
      const chosen = vote.includes(option.id);

      if (attrs.isMultiple) {
        contents.push((0, _iconLibrary.iconNode)(chosen ? "far-check-square" : "far-square"));
      } else {
        contents.push((0, _iconLibrary.iconNode)(chosen ? "circle" : "far-circle"));
      }

      contents.push(" ");
      contents.push(optionHtml(option, this.siteSettings));
      return contents;
    },

    click(e) {
      if (!e.target.closest("a")) {
        this.sendWidgetAction("toggleOption", this.attrs.option);
      }
    },

    keyDown(e) {
      if (e.key === "Enter") {
        this.click(e);
      }
    }

  });
  (0, _widget.createWidget)("discourse-poll-load-more", {
    tagName: "div.poll-voters-toggle-expand",
    buildKey: attrs => `load-more-${attrs.optionId}`,

    defaultState() {
      return {
        loading: false
      };
    },

    html(attrs, state) {
      return state.loading ? (0, _virtualDom.h)("div.spinner.small") : (0, _virtualDom.h)("a", (0, _iconLibrary.iconNode)("chevron-down"));
    },

    click() {
      const {
        state,
        attrs
      } = this;

      if (state.loading) {
        return;
      }

      state.loading = true;
      return this.sendWidgetAction("fetchVoters", attrs.optionId).finally(() => state.loading = false);
    }

  });
  (0, _widget.createWidget)("discourse-poll-voters", {
    tagName: "ul.poll-voters-list",
    buildKey: attrs => `poll-voters-${attrs.optionId}`,

    html(attrs) {
      const contents = attrs.voters.map(user => (0, _virtualDom.h)("li", [(0, _post.avatarFor)("tiny", {
        username: user.username,
        template: user.avatar_template
      }), " "]));

      if (attrs.voters.length < attrs.totalVotes) {
        contents.push(this.attach("discourse-poll-load-more", attrs));
      }

      return (0, _virtualDom.h)("div.poll-voters", contents);
    }

  });
  (0, _widget.createWidget)("discourse-poll-standard-results", {
    tagName: "ul.results",
    buildKey: attrs => `poll-standard-results-${attrs.id}`,

    html(attrs) {
      const {
        poll
      } = attrs;
      const options = poll.options;

      if (options) {
        const voters = poll.voters;
        const isPublic = poll.public;
        const ordered = [...options].sort((a, b) => {
          if (a.votes < b.votes) {
            return 1;
          } else if (a.votes === b.votes) {
            if (a.html < b.html) {
              return -1;
            } else {
              return 1;
            }
          } else {
            return -1;
          }
        });
        const percentages = voters === 0 ? Array(ordered.length).fill(0) : ordered.map(o => 100 * o.votes / voters);
        const rounded = attrs.isMultiple ? percentages.map(Math.floor) : (0, _evenRound.default)(percentages);
        return ordered.map((option, idx) => {
          const contents = [];
          const per = rounded[idx].toString();
          const chosen = (attrs.vote || []).includes(option.id);
          contents.push((0, _virtualDom.h)("div.option", (0, _virtualDom.h)("p", [(0, _virtualDom.h)("span.percentage", `${per}%`), optionHtml(option, this.siteSettings)])));
          contents.push((0, _virtualDom.h)("div.bar-back", (0, _virtualDom.h)("div.bar", {
            attributes: {
              style: `width:${per}%`
            }
          })));

          if (isPublic) {
            contents.push(this.attach("discourse-poll-voters", {
              postId: attrs.post.id,
              optionId: option.id,
              pollName: poll.name,
              totalVotes: option.votes,
              voters: attrs.voters && attrs.voters[option.id] || []
            }));
          }

          return (0, _virtualDom.h)("li", {
            className: `${chosen ? "chosen" : ""}`
          }, contents);
        });
      }
    }

  });
  (0, _widget.createWidget)("discourse-poll-number-results", {
    buildKey: attrs => `poll-number-results-${attrs.id}`,

    html(attrs) {
      const {
        poll
      } = attrs;
      const totalScore = poll.options.reduce((total, o) => {
        return total + parseInt(o.html, 10) * parseInt(o.votes, 10);
      }, 0);
      const voters = poll.voters;
      const average = voters === 0 ? 0 : (0, _round.default)(totalScore / voters, -2);

      const averageRating = _I18n.default.t("poll.average_rating", {
        average
      });

      const contents = [(0, _virtualDom.h)("div.poll-results-number-rating", new _rawHtml.default({
        html: `<span>${averageRating}</span>`
      }))];

      if (poll.public) {
        contents.push(this.attach("discourse-poll-voters", {
          totalVotes: poll.voters,
          voters: attrs.voters || [],
          postId: attrs.post.id,
          pollName: poll.name,
          pollType: poll.type
        }));
      }

      return contents;
    }

  });
  (0, _widget.createWidget)("discourse-poll-container", {
    tagName: "div.poll-container",
    buildKey: attrs => `poll-container-${attrs.id}`,

    defaultState() {
      return {
        voters: []
      };
    },

    html(attrs, state) {
      const {
        poll
      } = attrs;
      const options = poll.options;

      if (attrs.showResults) {
        const contents = [];

        if (attrs.titleHTML) {
          contents.push(new _rawHtml.default({
            html: attrs.titleHTML
          }));
        }

        if (poll.public) {
          state.voters = poll.preloaded_voters;
        }

        const type = poll.type === "number" ? "number" : "standard";
        const resultsWidget = type === "number" || attrs.poll.chart_type !== _pollUiBuilder.PIE_CHART_TYPE ? `discourse-poll-${type}-results` : "discourse-poll-pie-chart";
        contents.push(this.attach(resultsWidget, Object.assign({}, attrs, {
          voters: state.voters
        })));
        return contents;
      } else if (options) {
        const contents = [];

        if (attrs.titleHTML) {
          contents.push(new _rawHtml.default({
            html: attrs.titleHTML
          }));
        }

        if (!checkUserGroups(this.currentUser, poll)) {
          contents.push((0, _virtualDom.h)("div.alert.alert-danger", _I18n.default.t("poll.results.groups.title", {
            groups: poll.groups
          })));
        }

        contents.push((0, _virtualDom.h)("ul", options.map(option => {
          return this.attach("discourse-poll-option", {
            option,
            isMultiple: attrs.isMultiple,
            vote: attrs.vote
          });
        })));
        return contents;
      }
    },

    fetchVoters(optionId) {
      const {
        attrs,
        state
      } = this;
      let votersCount;

      if (optionId) {
        if (!state.voters) {
          state.voters = {};
        }

        if (!state.voters[optionId]) {
          state.voters[optionId] = [];
        }

        votersCount = state.voters[optionId].length;
      } else {
        if (!state.voters) {
          state.voters = [];
        }

        votersCount = state.voters.length;
      }

      return (0, _ajax.ajax)("/polls/voters.json", {
        data: {
          post_id: attrs.post.id,
          poll_name: attrs.poll.name,
          option_id: optionId,
          page: Math.floor(votersCount / FETCH_VOTERS_COUNT) + 1,
          limit: FETCH_VOTERS_COUNT
        }
      }).then(result => {
        const voters = optionId ? state.voters[optionId] : state.voters;
        const newVoters = optionId ? result.voters[optionId] : result.voters;
        const votersSet = new Set(voters.map(voter => voter.username));
        newVoters.forEach(voter => {
          if (!votersSet.has(voter.username)) {
            votersSet.add(voter.username);
            voters.push(voter);
          }
        }); // remove users who changed their vote

        if (attrs.poll.type === "regular") {
          Object.keys(state.voters).forEach(otherOptionId => {
            if (optionId !== otherOptionId) {
              state.voters[otherOptionId] = state.voters[otherOptionId].filter(voter => !votersSet.has(voter.username));
            }
          });
        }

        this.scheduleRerender();
      }).catch(error => {
        if (error) {
          (0, _ajaxError.popupAjaxError)(error);
        } else {
          _bootbox.default.alert(_I18n.default.t("poll.error_while_fetching_voters"));
        }
      });
    }

  });
  (0, _widget.createWidget)("discourse-poll-info", {
    tagName: "div.poll-info",

    multipleHelpText(min, max, options) {
      if (max > 0) {
        if (min === max) {
          if (min > 1) {
            return _I18n.default.t("poll.multiple.help.x_options", {
              count: min
            });
          }
        } else if (min > 1) {
          if (max < options) {
            return _I18n.default.t("poll.multiple.help.between_min_and_max_options", {
              min,
              max
            });
          } else {
            return _I18n.default.t("poll.multiple.help.at_least_min_options", {
              count: min
            });
          }
        } else if (max <= options) {
          return _I18n.default.t("poll.multiple.help.up_to_max_options", {
            count: max
          });
        }
      }
    },

    html(attrs) {
      const {
        poll
      } = attrs;
      const count = poll.voters;
      const contents = [(0, _virtualDom.h)("p", [(0, _virtualDom.h)("span.info-number", count.toString()), (0, _virtualDom.h)("span.info-label", _I18n.default.t("poll.voters", {
        count
      }))])];

      if (attrs.isMultiple) {
        if (attrs.showResults || attrs.isClosed) {
          const totalVotes = poll.options.reduce((total, o) => {
            return total + parseInt(o.votes, 10);
          }, 0);
          contents.push((0, _virtualDom.h)("p", [(0, _virtualDom.h)("span.info-number", totalVotes.toString()), (0, _virtualDom.h)("span.info-label", _I18n.default.t("poll.total_votes", {
            count: totalVotes
          }))]));
        } else {
          const help = this.multipleHelpText(attrs.min, attrs.max, poll.options.length);

          if (help) {
            contents.push(infoTextHtml(help));
          }
        }
      }

      if (!attrs.isClosed && !attrs.showResults && poll.public && poll.results !== "staff_only") {
        contents.push(infoTextHtml(_I18n.default.t("poll.public.title")));
      }

      return contents;
    }

  });

  function clearPieChart(id) {
    let el = document.querySelector(`#poll-results-chart-${id}`);
    el && el.parentNode.removeChild(el);
  }

  (0, _widget.createWidget)("discourse-poll-pie-canvas", {
    tagName: "canvas.poll-results-canvas",

    init(attrs) {
      (0, _loadScript.default)("/javascripts/Chart.min.js").then(() => {
        const data = attrs.poll.options.mapBy("votes");
        const labels = attrs.poll.options.mapBy("html");
        const config = pieChartConfig(data, labels, {
          legendContainerId: `poll-results-legend-${attrs.id}`
        });
        const el = document.getElementById(`poll-results-chart-${attrs.id}`); // eslint-disable-next-line no-undef

        this._chart = new Chart(el.getContext("2d"), config);
      });
    },

    willRerenderWidget() {
      this._chart?.destroy();
    },

    buildAttributes(attrs) {
      return {
        id: `poll-results-chart-${attrs.id}`
      };
    }

  });
  (0, _widget.createWidget)("discourse-poll-pie-chart", {
    tagName: "div.poll-results-chart",

    html(attrs) {
      const contents = [];

      if (!attrs.showResults) {
        clearPieChart(attrs.id);
        return contents;
      }

      const chart = this.attach("discourse-poll-pie-canvas", attrs);
      contents.push(chart);
      contents.push((0, _virtualDom.h)(`ul#poll-results-legend-${attrs.id}.pie-chart-legends`));
      return contents;
    }

  });
  const htmlLegendPlugin = {
    id: "htmlLegend",

    afterUpdate(chart, args, options) {
      const ul = document.getElementById(options.containerID);
      ul.innerHTML = "";
      const items = chart.options.plugins.legend.labels.generateLabels(chart);
      items.forEach(item => {
        const li = document.createElement("li");
        li.classList.add("legend");

        li.onclick = () => {
          chart.toggleDataVisibility(item.index);
          chart.update();
        };

        const boxSpan = document.createElement("span");
        boxSpan.classList.add("swatch");
        boxSpan.style.background = item.fillStyle;
        const textContainer = document.createElement("span");
        textContainer.style.color = item.fontColor;
        textContainer.innerHTML = item.text;

        if (!chart.getDataVisibility(item.index)) {
          li.style.opacity = 0.2;
        } else {
          li.style.opacity = 1.0;
        }

        li.appendChild(boxSpan);
        li.appendChild(textContainer);
        ul.appendChild(li);
      });
    }

  };

  function pieChartConfig(data, labels) {
    let opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    const aspectRatio = "aspectRatio" in opts ? opts.aspectRatio : 2.2;
    const strippedLabels = labels.map(l => stripHtml(l));
    return {
      type: _pollUiBuilder.PIE_CHART_TYPE,
      data: {
        datasets: [{
          data,
          backgroundColor: (0, _chartColors.getColors)(data.length)
        }],
        labels: strippedLabels
      },
      plugins: [htmlLegendPlugin],
      options: {
        responsive: true,
        aspectRatio,
        animation: {
          duration: 0
        },
        plugins: {
          legend: {
            labels: {
              generateLabels() {
                return labels.map((text, index) => {
                  return {
                    fillStyle: (0, _chartColors.getColors)(data.length)[index],
                    text,
                    index
                  };
                });
              }

            },
            display: false
          },
          htmlLegend: {
            containerID: opts?.legendContainerId
          }
        }
      }
    };
  }

  function stripHtml(html) {
    let doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  }

  (0, _widget.createWidget)("discourse-poll-buttons", {
    tagName: "div.poll-buttons",

    html(attrs) {
      const contents = [];
      const {
        poll,
        post
      } = attrs;
      const topicArchived = post.get("topic.archived");
      const closed = attrs.isClosed;
      const staffOnly = poll.results === "staff_only";
      const isStaff = this.currentUser && this.currentUser.staff;
      const isAdmin = this.currentUser && this.currentUser.admin;
      const isMe = this.currentUser && post.user_id === this.currentUser.id;
      const dataExplorerEnabled = this.siteSettings.data_explorer_enabled;
      const hideResultsDisabled = !staffOnly && (closed || topicArchived);
      const exportQueryID = this.siteSettings.poll_export_data_explorer_query_id;

      if (attrs.isMultiple && !hideResultsDisabled) {
        const castVotesDisabled = !attrs.canCastVotes;
        contents.push(this.attach("button", {
          className: `cast-votes ${castVotesDisabled ? "btn-default" : "btn-primary"}`,
          label: "poll.cast-votes.label",
          title: "poll.cast-votes.title",
          disabled: castVotesDisabled,
          action: "castVotes"
        }));
        contents.push(" ");
      }

      if (attrs.showResults || hideResultsDisabled) {
        contents.push(this.attach("button", {
          className: "btn-default toggle-results",
          label: "poll.hide-results.label",
          title: "poll.hide-results.title",
          icon: "far-eye-slash",
          disabled: hideResultsDisabled,
          action: "toggleResults"
        }));
      } else {
        let showResultsButton;
        let infoText;

        if (poll.results === "on_vote" && !attrs.hasVoted && !isMe) {
          infoText = infoTextHtml(_I18n.default.t("poll.results.vote.title"));
        } else if (poll.results === "on_close" && !closed) {
          infoText = infoTextHtml(_I18n.default.t("poll.results.closed.title"));
        } else if (poll.results === "staff_only" && !isStaff) {
          infoText = infoTextHtml(_I18n.default.t("poll.results.staff.title"));
        } else {
          showResultsButton = this.attach("button", {
            className: "btn-default toggle-results",
            label: "poll.show-results.label",
            title: "poll.show-results.title",
            icon: "far-eye",
            disabled: poll.voters === 0,
            action: "toggleResults"
          });
        }

        if (showResultsButton) {
          contents.push(showResultsButton);
        }

        if (attrs.hasSavedVote) {
          contents.push(this.attach("button", {
            className: "btn-default remove-vote",
            label: "poll.remove-vote.label",
            title: "poll.remove-vote.title",
            icon: "trash-alt",
            action: "removeVote"
          }));
        }

        if (infoText) {
          contents.push(infoText);
        }
      }

      if (attrs.groupableUserFields.length && poll.voters > 0) {
        const button = this.attach("button", {
          className: "btn-default poll-show-breakdown",
          label: "poll.group-results.label",
          title: "poll.group-results.title",
          icon: "far-eye",
          action: "showBreakdown"
        });
        contents.push(button);
      }

      if (isAdmin && dataExplorerEnabled && poll.voters > 0 && exportQueryID) {
        contents.push(this.attach("button", {
          className: "btn btn-default export-results",
          label: "poll.export-results.label",
          title: "poll.export-results.title",
          icon: "download",
          disabled: poll.voters === 0,
          action: "exportResults"
        }));
      }

      if (poll.close) {
        const closeDate = moment(poll.close);

        if (closeDate.isValid()) {
          const title = closeDate.format("LLL");
          let label;

          if (attrs.isAutomaticallyClosed) {
            const age = (0, _formatter.relativeAge)(closeDate.toDate(), {
              addAgo: true
            });
            label = _I18n.default.t("poll.automatic_close.age", {
              age
            });
          } else {
            const timeLeft = moment().to(closeDate, true);
            label = _I18n.default.t("poll.automatic_close.closes_in", {
              timeLeft
            });
          }

          contents.push(new _rawHtml.default({
            html: `<span class="info-text" title="${title}">${label}</span>`
          }));
        }
      }

      if (this.currentUser && (this.currentUser.id === post.user_id || isStaff) && !topicArchived) {
        if (closed) {
          if (!attrs.isAutomaticallyClosed) {
            contents.push(this.attach("button", {
              className: "btn-default toggle-status",
              label: "poll.open.label",
              title: "poll.open.title",
              icon: "unlock-alt",
              action: "toggleStatus"
            }));
          }
        } else {
          contents.push(this.attach("button", {
            className: "toggle-status btn-danger",
            label: "poll.close.label",
            title: "poll.close.title",
            icon: "lock",
            action: "toggleStatus"
          }));
        }
      }

      return contents;
    }

  });

  var _default = (0, _widget.createWidget)("discourse-poll", {
    tagName: "div",
    buildKey: attrs => `poll-${attrs.id}`,

    buildAttributes(attrs) {
      let cssClasses = "poll";

      if (attrs.poll.chart_type === _pollUiBuilder.PIE_CHART_TYPE) {
        cssClasses += " pie";
      }

      return {
        class: cssClasses,
        "data-poll-name": attrs.poll.name,
        "data-poll-type": attrs.poll.type
      };
    },

    defaultState(attrs) {
      const {
        poll
      } = attrs;
      const staffOnly = attrs.poll.results === "staff_only";
      const showResults = poll.results !== "on_close" && this.hasVoted() && !staffOnly;
      return {
        loading: false,
        showResults
      };
    },

    html(attrs, state) {
      const staffOnly = attrs.poll.results === "staff_only";
      const showResults = state.showResults || attrs.post.get("topic.archived") && !staffOnly || this.isClosed() && !staffOnly;
      const newAttrs = Object.assign({}, attrs, {
        canCastVotes: this.canCastVotes(),
        hasVoted: this.hasVoted(),
        isAutomaticallyClosed: this.isAutomaticallyClosed(),
        isClosed: this.isClosed(),
        isMultiple: this.isMultiple(),
        max: this.max(),
        min: this.min(),
        showResults
      });
      return (0, _virtualDom.h)("div", [this.attach("discourse-poll-container", newAttrs), this.attach("discourse-poll-info", newAttrs), this.attach("discourse-poll-buttons", newAttrs)]);
    },

    min() {
      let min = parseInt(this.attrs.poll.min, 10);

      if (isNaN(min) || min < 0) {
        min = 1;
      }

      return min;
    },

    max() {
      let max = parseInt(this.attrs.poll.max, 10);
      const numOptions = this.attrs.poll.options.length;

      if (isNaN(max) || max > numOptions) {
        max = numOptions;
      }

      return max;
    },

    isAutomaticallyClosed() {
      const {
        poll
      } = this.attrs;
      return poll.close && moment.utc(poll.close) <= moment();
    },

    isClosed() {
      const {
        poll
      } = this.attrs;
      return poll.status === "closed" || this.isAutomaticallyClosed();
    },

    isMultiple() {
      const {
        poll
      } = this.attrs;
      return poll.type === "multiple";
    },

    hasVoted() {
      const {
        vote
      } = this.attrs;
      return vote && vote.length > 0;
    },

    canCastVotes() {
      const {
        state,
        attrs
      } = this;

      if (this.isClosed() || state.showResults || state.loading) {
        return false;
      }

      const selectedOptionCount = attrs.vote.length;

      if (this.isMultiple()) {
        return selectedOptionCount >= this.min() && selectedOptionCount <= this.max();
      }

      return selectedOptionCount > 0;
    },

    toggleStatus() {
      const {
        state,
        attrs
      } = this;
      const {
        post,
        poll
      } = attrs;

      if (this.isAutomaticallyClosed()) {
        return;
      }

      _bootbox.default.confirm(_I18n.default.t(this.isClosed() ? "poll.open.confirm" : "poll.close.confirm"), _I18n.default.t("no_value"), _I18n.default.t("yes_value"), confirmed => {
        if (confirmed) {
          state.loading = true;
          const status = this.isClosed() ? "open" : "closed";
          (0, _ajax.ajax)("/polls/toggle_status", {
            type: "PUT",
            data: {
              post_id: post.id,
              poll_name: poll.name,
              status
            }
          }).then(() => {
            poll.set("status", status);

            if (poll.results === "on_close") {
              state.showResults = status === "closed";
            }

            this.scheduleRerender();
          }).catch(error => {
            if (error) {
              (0, _ajaxError.popupAjaxError)(error);
            } else {
              _bootbox.default.alert(_I18n.default.t("poll.error_while_toggling_status"));
            }
          }).finally(() => {
            state.loading = false;
          });
        }
      });
    },

    toggleResults() {
      this.state.showResults = !this.state.showResults;
    },

    removeVote() {
      const {
        attrs,
        state
      } = this;
      state.loading = true;
      return (0, _ajax.ajax)("/polls/vote", {
        type: "DELETE",
        data: {
          post_id: attrs.post.id,
          poll_name: attrs.poll.name
        }
      }).then(_ref => {
        let {
          poll
        } = _ref;
        attrs.poll.setProperties(poll);
        attrs.vote.length = 0;
        attrs.hasSavedVote = false;
        this.appEvents.trigger("poll:voted", poll, attrs.post, attrs.vote);
      }).catch(error => (0, _ajaxError.popupAjaxError)(error)).finally(() => {
        state.loading = false;
      });
    },

    exportResults() {
      const {
        attrs
      } = this;
      const queryID = this.siteSettings.poll_export_data_explorer_query_id; // This uses the Data Explorer plugin export as CSV route
      // There is detection to check if the plugin is enabled before showing the button

      (0, _ajax.ajax)(`/admin/plugins/explorer/queries/${queryID}/run.csv`, {
        type: "POST",
        data: {
          // needed for data-explorer route compatibility
          params: JSON.stringify({
            poll_name: attrs.poll.name,
            post_id: attrs.post.id.toString() // needed for data-explorer route compatibility

          }),
          explain: false,
          limit: 1000000,
          download: 1
        }
      }).then(csvContent => {
        const downloadLink = document.createElement("a");
        const blob = new Blob([csvContent], {
          type: "text/csv;charset=utf-8;"
        });
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.setAttribute("download", `poll-export-${attrs.poll.name}-${attrs.post.id}.csv`);
        downloadLink.click();
        downloadLink.remove();
      }).catch(error => {
        if (error) {
          (0, _ajaxError.popupAjaxError)(error);
        } else {
          _bootbox.default.alert(_I18n.default.t("poll.error_while_exporting_results"));
        }
      });
    },

    showLogin() {
      this.register.lookup("route:application").send("showLogin");
    },

    _toggleOption(option) {
      const {
        vote
      } = this.attrs;
      const chosenIdx = vote.indexOf(option.id);

      if (chosenIdx !== -1) {
        vote.splice(chosenIdx, 1);
      } else {
        vote.push(option.id);
      }
    },

    toggleOption(option) {
      const {
        attrs
      } = this;

      if (this.isClosed()) {
        return;
      }

      if (!this.currentUser) {
        return this.showLogin();
      }

      if (!checkUserGroups(this.currentUser, this.attrs.poll)) {
        return;
      }

      const {
        vote
      } = attrs;

      if (!this.isMultiple() && vote.length === 1 && vote[0] === option.id) {
        return this.removeVote();
      }

      if (!this.isMultiple()) {
        vote.length = 0;
      }

      this._toggleOption(option);

      if (!this.isMultiple()) {
        return this.castVotes().catch(() => this._toggleOption(option));
      }
    },

    castVotes() {
      if (!this.canCastVotes()) {
        return;
      }

      if (!this.currentUser) {
        return this.showLogin();
      }

      const {
        attrs,
        state
      } = this;
      state.loading = true;
      return (0, _ajax.ajax)("/polls/vote", {
        type: "PUT",
        data: {
          post_id: attrs.post.id,
          poll_name: attrs.poll.name,
          options: attrs.vote
        }
      }).then(_ref2 => {
        let {
          poll
        } = _ref2;
        attrs.hasSavedVote = true;
        attrs.poll.setProperties(poll);
        this.appEvents.trigger("poll:voted", poll, attrs.post, attrs.vote);

        if (attrs.poll.results !== "on_close") {
          state.showResults = true;
        }

        if (attrs.poll.results === "staff_only") {
          if (this.currentUser && this.currentUser.staff) {
            state.showResults = true;
          } else {
            state.showResults = false;
          }
        }
      }).catch(error => {
        if (error) {
          (0, _ajaxError.popupAjaxError)(error);
        } else {
          _bootbox.default.alert(_I18n.default.t("poll.error_while_casting_votes"));
        }
      }).finally(() => {
        state.loading = false;
      });
    },

    showBreakdown() {
      (0, _showModal.default)("poll-breakdown", {
        model: this.attrs,
        panels: [{
          id: "percentage",
          title: "poll.breakdown.percentage"
        }, {
          id: "count",
          title: "poll.breakdown.count"
        }]
      });
    }

  });

  _exports.default = _default;
});//# sourceMappingURL=poll.map

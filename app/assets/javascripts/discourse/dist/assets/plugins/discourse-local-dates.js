define("discourse/plugins/discourse-local-dates/discourse/components/discourse-local-dates-create-form", ["exports", "discourse-common/utils/decorators", "@ember/component", "@ember/object", "I18n", "discourse-common/config/environment", "rsvp", "discourse/lib/text", "discourse-common/lib/debounce", "@ember/utils", "discourse/lib/load-script", "@ember/object/computed", "discourse/lib/computed", "@ember/runloop", "discourse-common/lib/get-owner", "discourse/lib/local-dates", "discourse/plugins/discourse-local-dates/lib/local-date-markup-generator"], function (_exports, _decorators, _component, _object, _I18n, _environment, _rsvp, _text, _debounce, _utils, _loadScript, _computed, _computed2, _runloop, _getOwner, _localDates, _localDateMarkupGenerator) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _obj;

  0; //eaimeta@70e063a35619d71f0,"discourse-common/utils/decorators",0,"@ember/component",0,"@ember/object",0,"I18n",0,"discourse-common/config/environment",0,"rsvp",0,"discourse/lib/text",0,"discourse-common/lib/debounce",0,"@ember/utils",0,"discourse/lib/load-script",0,"@ember/object/computed",0,"discourse/lib/computed",0,"@ember/runloop",0,"discourse-common/lib/get-owner",0,"discourse/lib/local-dates",0,"discourse/plugins/discourse-local-dates/lib/local-date-markup-generator"eaimeta@70e063a35619d71f

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  var _default = _component.default.extend((_dec = (0, _decorators.observes)("computedConfig.{from,to,options}", "options", "isValid", "isRange"), _dec2 = (0, _decorators.default)("date", "toDate", "toTime"), _dec3 = (0, _decorators.default)("computedConfig", "isRange"), _dec4 = (0, _decorators.default)("date", "time", "isRange", "options.{format,timezone}"), _dec5 = (0, _decorators.default)("toDate", "toTime", "isRange", "options.{timezone,format}"), _dec6 = (0, _decorators.default)("recurring", "timezones", "timezone", "format"), _dec7 = (0, _decorators.default)("fromConfig.{date}", "toConfig.{date}", "options.{recurring,timezones,timezone,format}"), _dec8 = (0, _decorators.default)("currentUserTimezone"), _dec9 = (0, _decorators.default)("formats"), _dec10 = (0, _decorators.default)("advancedMode"), _dec11 = (0, _decorators.default)("computedConfig.{from,to,options}", "options", "isValid", "isRange"), _dec12 = (0, _decorators.default)("fromConfig.dateTime"), _dec13 = (0, _decorators.default)("toConfig.dateTime", "toSelected"), (_obj = {
    timeFormat: "HH:mm:ss",
    dateFormat: "YYYY-MM-DD",
    dateTimeFormat: "YYYY-MM-DD HH:mm:ss",
    date: null,
    toDate: null,
    time: null,
    toTime: null,
    format: null,
    formats: null,
    recurring: null,
    advancedMode: false,
    timezone: null,
    fromSelected: null,
    fromFilled: (0, _computed.notEmpty)("date"),
    toSelected: null,
    toFilled: (0, _computed.notEmpty)("toDate"),

    init() {
      this._super(...arguments);

      this._picker = null;
      this.setProperties({
        timezones: [],
        formats: (this.siteSettings.discourse_local_dates_default_formats || "").split("|").filter(f => f),
        timezone: moment.tz.guess(),
        date: moment().format(this.dateFormat)
      });
    },

    didInsertElement() {
      this._super(...arguments);

      this._setupPicker().then(picker => {
        this._picker = picker;
        this.send("focusFrom");
      });
    },

    _renderPreview() {
      (0, _debounce.default)(this, function () {
        const markup = this.markup;

        if (markup) {
          (0, _text.cookAsync)(markup).then(result => {
            this.set("currentPreview", result);
            (0, _runloop.schedule)("afterRender", () => {
              (0, _localDates.applyLocalDates)(document.querySelectorAll(".preview .discourse-local-date"), this.siteSettings);
            });
          });
        }
      }, _environment.INPUT_DELAY);
    },

    isRange(date, toDate, toTime) {
      return date && (toDate || toTime);
    },

    isValid(config, isRange) {
      const fromConfig = config.from;

      if (!config.from.dateTime || !config.from.dateTime.isValid()) {
        return false;
      }

      if (isRange) {
        const toConfig = config.to;

        if (!toConfig.dateTime || !toConfig.dateTime.isValid() || toConfig.dateTime.diff(fromConfig.dateTime) < 0) {
          return false;
        }
      }

      return true;
    },

    fromConfig(date, time, isRange) {
      let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      const timeInferred = time ? false : true;
      let dateTime;

      if (!timeInferred) {
        dateTime = moment.tz(`${date} ${time}`, options.timezone);
      } else {
        dateTime = moment.tz(date, options.timezone);
      }

      if (!timeInferred) {
        time = dateTime.format(this.timeFormat);
      }

      let format = options.format;

      if (timeInferred && this.formats.includes(format)) {
        format = "LL";
      }

      return _object.default.create({
        date: dateTime.format(this.dateFormat),
        time,
        dateTime,
        format,
        range: isRange ? "start" : false
      });
    },

    toConfig(date, time, isRange) {
      let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      const timeInferred = time ? false : true;

      if (time && !date) {
        date = moment().format(this.dateFormat);
      }

      let dateTime;

      if (!timeInferred) {
        dateTime = moment.tz(`${date} ${time}`, options.timezone);
      } else {
        dateTime = moment.tz(date, options.timezone).endOf("day");
      }

      if (!timeInferred) {
        time = dateTime.format(this.timeFormat);
      }

      let format = options.format;

      if (timeInferred && this.formats.includes(format)) {
        format = "LL";
      }

      return _object.default.create({
        date: dateTime.format(this.dateFormat),
        time,
        dateTime,
        format,
        range: isRange ? "end" : false
      });
    },

    options(recurring, timezones, timezone, format) {
      return _object.default.create({
        recurring,
        timezones,
        timezone,
        format
      });
    },

    computedConfig(fromConfig, toConfig, options) {
      return _object.default.create({
        from: fromConfig,
        to: toConfig,
        options
      });
    },

    currentUserTimezone() {
      return moment.tz.guess();
    },

    allTimezones() {
      return moment.tz.names();
    },

    timezoneIsDifferentFromUserTimezone: (0, _computed2.propertyNotEqual)("currentUserTimezone", "options.timezone"),

    formattedCurrentUserTimezone(timezone) {
      return timezone.replace("_", " ").replace("Etc/", "").replace("/", ", ");
    },

    previewedFormats(formats) {
      return formats.map(format => {
        return {
          format,
          preview: moment().format(format)
        };
      });
    },

    recurringOptions() {
      const key = "discourse_local_dates.create.form.recurring";
      return [{
        name: _I18n.default.t(`${key}.every_day`),
        id: "1.days"
      }, {
        name: _I18n.default.t(`${key}.every_week`),
        id: "1.weeks"
      }, {
        name: _I18n.default.t(`${key}.every_two_weeks`),
        id: "2.weeks"
      }, {
        name: _I18n.default.t(`${key}.every_month`),
        id: "1.months"
      }, {
        name: _I18n.default.t(`${key}.every_two_months`),
        id: "2.months"
      }, {
        name: _I18n.default.t(`${key}.every_three_months`),
        id: "3.months"
      }, {
        name: _I18n.default.t(`${key}.every_six_months`),
        id: "6.months"
      }, {
        name: _I18n.default.t(`${key}.every_year`),
        id: "1.years"
      }];
    },

    _generateDateMarkup(fromDateTime, options, isRange, toDateTime) {
      return (0, _localDateMarkupGenerator.default)(fromDateTime, options, isRange, toDateTime);
    },

    toggleModeBtnLabel(advancedMode) {
      return advancedMode ? "discourse_local_dates.create.form.simple_mode" : "discourse_local_dates.create.form.advanced_mode";
    },

    markup(config, options, isValid, isRange) {
      let text;

      if (isValid && config.from) {
        if (config.to && config.to.range) {
          text = this._generateDateMarkup(config.from, options, isRange, config.to);
        } else {
          text = this._generateDateMarkup(config.from, options, isRange);
        }
      }

      return text;
    },

    formattedFrom(dateTime) {
      return dateTime.format("LLLL");
    },

    formattedTo(dateTime, toSelected) {
      const emptyText = toSelected ? "&nbsp;" : _I18n.default.t("discourse_local_dates.create.form.until");
      return dateTime.isValid() ? dateTime.format("LLLL") : emptyText;
    },

    actions: {
      setTime(event) {
        this._setTimeIfValid(event.target.value, "time");
      },

      setToTime(event) {
        this._setTimeIfValid(event.target.value, "toTime");
      },

      eraseToDateTime() {
        this.setProperties({
          toDate: null,
          toTime: null
        });

        this._setPickerDate(null);
      },

      focusFrom() {
        this.setProperties({
          fromSelected: true,
          toSelected: false
        });

        this._setPickerDate(this.get("fromConfig.date"));

        this._setPickerMinDate(null);
      },

      focusTo() {
        this.setProperties({
          toSelected: true,
          fromSelected: false
        });

        this._setPickerDate(this.get("toConfig.date"));

        this._setPickerMinDate(this.get("fromConfig.date"));
      },

      advancedMode() {
        this.toggleProperty("advancedMode");
      },

      save() {
        const markup = this.markup;

        if (markup) {
          this._closeModal();

          this.insertDate(markup);
        }
      },

      cancel() {
        this._closeModal();
      }

    },

    _setTimeIfValid(time, key) {
      if ((0, _utils.isEmpty)(time)) {
        this.set(key, null);
        return;
      }

      if (/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(time)) {
        this.set(key, time);
      }
    },

    _setupPicker() {
      return new _rsvp.Promise(resolve => {
        (0, _loadScript.default)("/javascripts/pikaday.js").then(() => {
          const options = {
            field: this.element.querySelector(".fake-input"),
            container: this.element.querySelector(`#picker-container-${this.elementId}`),
            bound: false,
            format: "YYYY-MM-DD",
            reposition: false,
            firstDay: 1,
            setDefaultDate: true,
            keyboardInput: false,
            i18n: {
              previousMonth: _I18n.default.t("dates.previous_month"),
              nextMonth: _I18n.default.t("dates.next_month"),
              months: moment.months(),
              weekdays: moment.weekdays(),
              weekdaysShort: moment.weekdaysMin()
            },
            onSelect: date => {
              const formattedDate = moment(date).format("YYYY-MM-DD");

              if (this.fromSelected) {
                this.set("date", formattedDate);
              }

              if (this.toSelected) {
                this.set("toDate", formattedDate);
              }
            }
          };
          resolve(new Pikaday(options));
        });
      });
    },

    _setPickerMinDate(date) {
      (0, _runloop.schedule)("afterRender", () => {
        if (moment(date, this.dateFormat).isValid()) {
          this._picker.setMinDate(moment(date, this.dateFormat).toDate());
        } else {
          this._picker.setMinDate(null);
        }
      });
    },

    _setPickerDate(date) {
      (0, _runloop.schedule)("afterRender", () => {
        if (moment(date, this.dateFormat).isValid()) {
          this._picker.setDate(moment.utc(date), true);
        } else {
          this._picker.setDate(null);
        }
      });
    },

    _closeModal() {
      const composer = (0, _getOwner.getOwner)(this).lookup("controller:composer");
      composer.send("closeModal");
    }

  }, (_applyDecoratedDescriptor(_obj, "_renderPreview", [_dec], Object.getOwnPropertyDescriptor(_obj, "_renderPreview"), _obj), _applyDecoratedDescriptor(_obj, "isRange", [_dec2], Object.getOwnPropertyDescriptor(_obj, "isRange"), _obj), _applyDecoratedDescriptor(_obj, "isValid", [_dec3], Object.getOwnPropertyDescriptor(_obj, "isValid"), _obj), _applyDecoratedDescriptor(_obj, "fromConfig", [_dec4], Object.getOwnPropertyDescriptor(_obj, "fromConfig"), _obj), _applyDecoratedDescriptor(_obj, "toConfig", [_dec5], Object.getOwnPropertyDescriptor(_obj, "toConfig"), _obj), _applyDecoratedDescriptor(_obj, "options", [_dec6], Object.getOwnPropertyDescriptor(_obj, "options"), _obj), _applyDecoratedDescriptor(_obj, "computedConfig", [_dec7], Object.getOwnPropertyDescriptor(_obj, "computedConfig"), _obj), _applyDecoratedDescriptor(_obj, "currentUserTimezone", [_decorators.default], Object.getOwnPropertyDescriptor(_obj, "currentUserTimezone"), _obj), _applyDecoratedDescriptor(_obj, "allTimezones", [_decorators.default], Object.getOwnPropertyDescriptor(_obj, "allTimezones"), _obj), _applyDecoratedDescriptor(_obj, "formattedCurrentUserTimezone", [_dec8], Object.getOwnPropertyDescriptor(_obj, "formattedCurrentUserTimezone"), _obj), _applyDecoratedDescriptor(_obj, "previewedFormats", [_dec9], Object.getOwnPropertyDescriptor(_obj, "previewedFormats"), _obj), _applyDecoratedDescriptor(_obj, "recurringOptions", [_decorators.default], Object.getOwnPropertyDescriptor(_obj, "recurringOptions"), _obj), _applyDecoratedDescriptor(_obj, "toggleModeBtnLabel", [_dec10], Object.getOwnPropertyDescriptor(_obj, "toggleModeBtnLabel"), _obj), _applyDecoratedDescriptor(_obj, "markup", [_dec11], Object.getOwnPropertyDescriptor(_obj, "markup"), _obj), _applyDecoratedDescriptor(_obj, "formattedFrom", [_dec12], Object.getOwnPropertyDescriptor(_obj, "formattedFrom"), _obj), _applyDecoratedDescriptor(_obj, "formattedTo", [_dec13], Object.getOwnPropertyDescriptor(_obj, "formattedTo"), _obj)), _obj)));

  _exports.default = _default;
});
define("discourse/plugins/discourse-local-dates/discourse/controllers/discourse-local-dates-create-modal", ["exports", "@ember/controller", "discourse/mixins/modal-functionality", "@ember/runloop"], function (_exports, _controller, _modalFunctionality, _runloop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/controller",0,"discourse/mixins/modal-functionality",0,"@ember/runloop"eaimeta@70e063a35619d71f

  var _default = _controller.default.extend(_modalFunctionality.default, {
    onShow() {
      (0, _runloop.schedule)("afterRender", () => {
        const fromButton = document.getElementById("from-date-time");
        fromButton && fromButton.focus();
      });
    },

    onClose() {
      (0, _runloop.schedule)("afterRender", () => {
        const localDatesBtn = document.querySelector(".d-editor-button-bar .local-dates.btn");
        localDatesBtn && localDatesBtn.focus();
      });
    }

  });

  _exports.default = _default;
});
define("discourse/plugins/discourse-local-dates/discourse/templates/components/discourse-local-dates-create-form", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <DModalBody @title="discourse_local_dates.title" @class="discourse-local-dates-create-modal" @style="overflow: auto">
  
    <div class="form">
      {{#if this.isValid}}
        {{#if this.timezoneIsDifferentFromUserTimezone}}
          <div class="preview alert alert-info">
            {{i18n "discourse_local_dates.create.form.current_timezone"}}
            <b>{{this.formattedCurrentUserTimezone}}</b>{{this.currentPreview}}
          </div>
        {{/if}}
      {{else}}
        <div class="validation-error alert alert-error">
          {{i18n "discourse_local_dates.create.form.invalid_date"}}
        </div>
      {{/if}}
  
      {{this.computeDate}}
  
      <div class="date-time-configuration">
        <div class="inputs-panel">
          <div class="date-time-control from {{if this.fromSelected "is-selected"}} {{if this.fromFilled "is-filled"}}">
            {{d-icon "calendar-alt"}}
            <DButton
              @id="from-date-time"
              @action={{action "focusFrom"}}
              @translatedLabel={{this.formattedFrom}}
              @class="date-time" />
          </div>
  
          <div class="date-time-control to {{if this.toSelected "is-selected"}} {{if this.toFilled "is-filled"}}">
            {{d-icon "calendar-alt"}}
            <DButton
              @action={{action "focusTo"}}
              @translatedLabel={{this.formattedTo}}
              @class="date-time" />
            {{#if this.toFilled}}
              <DButton @icon="times" @action={{action "eraseToDateTime"}} @class="delete-to-date" />
            {{/if}}
          </div>
  
          {{#unless this.site.mobileView}}
            <TimezoneInput
              @options={{hash icon="globe"}}
              @value={{this.timezone}}
              @onChange={{action (mut this.timezone)}}
            />
          {{/unless}}
        </div>
  
        <div class="picker-panel">
          <Input class="fake-input" />
          <div class="date-picker" id="picker-container-{{this.elementId}}"></div>
  
          {{#if this.fromSelected}}
            <div class="time-pickers">
              {{d-icon "far-clock"}}
              <Input maxlength={{5}} placeholder="hh:mm" @type="time" @value={{this.time}} class="time-picker" {{on "input" (action "setTime")}} />
            </div>
          {{/if}}
  
          {{#if this.toSelected}}
            {{#if this.toDate}}
              <div class="time-pickers">
                {{d-icon "far-clock"}}
                <Input maxlength={{5}} placeholder="hh:mm" @type="time" @value={{this.toTime}} class="time-picker" {{on "input" (action "setToTime")}} />
              </div>
            {{/if}}
          {{/if}}
        </div>
  
        {{#if this.site.mobileView}}
          <TimezoneInput
            @value={{this.timezone}}
            @options={{hash icon="globe"}}
            @onChange={{action (mut this.timezone)}}
          />
        {{/if}}
      </div>
  
      {{#if this.advancedMode}}
        <div class="advanced-options">
          {{#unless this.isRange}}
            <div class="control-group recurrence">
              <label class="control-label">
                {{i18n "discourse_local_dates.create.form.recurring_title"}}
              </label>
              <p>{{html-safe (i18n "discourse_local_dates.create.form.recurring_description")}}</p>
              <div class="controls">
                <ComboBox
                  @content={{this.recurringOptions}}
                  @class="recurrence-input"
                  @value={{this.recurring}}
                  @onChange={{action (mut this.recurring)}}
                  @options={{hash
                    none="discourse_local_dates.create.form.recurring_none"
                  }}
                />
              </div>
            </div>
          {{/unless}}
  
          <div class="control-group format">
            <label>{{i18n "discourse_local_dates.create.form.format_title"}}</label>
            <p>
              {{i18n "discourse_local_dates.create.form.format_description"}}
              <a target="_blank" href="https://momentjs.com/docs/#/parsing/string-format/" rel="noopener noreferrer">
                {{d-icon "question-circle"}}
              </a>
            </p>
            <div class="controls">
              <TextField @value={{this.format}} @class="format-input" />
            </div>
          </div>
          <div class="control-group">
            <ul class="formats">
              {{#each this.previewedFormats as |previewedFormat|}}
                <li class="format">
                  <a class="moment-format" href {{action (mut this.format) previewedFormat.format}}>
                    {{previewedFormat.format}}
                  </a>
                  <span class="previewed-format">
                    {{previewedFormat.preview}}
                  </span>
                </li>
              {{/each}}
            </ul>
          </div>
  
          <div class="control-group timezones">
            <label>{{i18n "discourse_local_dates.create.form.timezones_title"}}</label>
            <p>{{i18n "discourse_local_dates.create.form.timezones_description"}}</p>
            <div class="controls">
              <MultiSelect
                @valueProperty={{null}}
                @nameProperty={{null}}
                @class="timezones-input"
                @content={{this.allTimezones}}
                @value={{this.timezones}}
                @options={{hash
                  allowAny=false
                  maximum=5
                }}
              />
            </div>
          </div>
        </div>
      {{/if}}
    </div>
  </DModalBody>
  
  <div class="modal-footer discourse-local-dates-create-modal-footer">
    {{#if this.isValid}}
      <DButton
        @class="btn-primary"
        @action={{action "save"}}
        @label="discourse_local_dates.create.form.insert" />
    {{/if}}
  
    <DButton
      @class="btn-flat"
      @action={{action "cancel"}}
      @translatedLabel={{i18n "cancel"}} />
  
    <DButton
      @class="btn-default advanced-mode-btn"
      @action={{action "advancedMode"}}
      @icon="cog"
      @label={{this.toggleModeBtnLabel}} />
  </div>
  
  */
  {
    "id": "eU1q72e5",
    "block": "[[[8,[39,0],null,[[\"@title\",\"@class\",\"@style\"],[\"discourse_local_dates.title\",\"discourse-local-dates-create-modal\",\"overflow: auto\"]],[[\"default\"],[[[[1,\"\\n\\n  \"],[10,0],[14,0,\"form\"],[12],[1,\"\\n\"],[41,[30,0,[\"isValid\"]],[[[41,[30,0,[\"timezoneIsDifferentFromUserTimezone\"]],[[[1,\"        \"],[10,0],[14,0,\"preview alert alert-info\"],[12],[1,\"\\n          \"],[1,[28,[35,2],[\"discourse_local_dates.create.form.current_timezone\"],null]],[1,\"\\n          \"],[10,\"b\"],[12],[1,[30,0,[\"formattedCurrentUserTimezone\"]]],[13],[1,[30,0,[\"currentPreview\"]]],[1,\"\\n        \"],[13],[1,\"\\n\"]],[]],null]],[]],[[[1,\"      \"],[10,0],[14,0,\"validation-error alert alert-error\"],[12],[1,\"\\n        \"],[1,[28,[35,2],[\"discourse_local_dates.create.form.invalid_date\"],null]],[1,\"\\n      \"],[13],[1,\"\\n\"]],[]]],[1,\"\\n    \"],[1,[30,0,[\"computeDate\"]]],[1,\"\\n\\n    \"],[10,0],[14,0,\"date-time-configuration\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"inputs-panel\"],[12],[1,\"\\n        \"],[10,0],[15,0,[29,[\"date-time-control from \",[52,[30,0,[\"fromSelected\"]],\"is-selected\"],\" \",[52,[30,0,[\"fromFilled\"]],\"is-filled\"]]]],[12],[1,\"\\n          \"],[1,[28,[35,3],[\"calendar-alt\"],null]],[1,\"\\n          \"],[8,[39,4],null,[[\"@id\",\"@action\",\"@translatedLabel\",\"@class\"],[\"from-date-time\",[28,[37,5],[[30,0],\"focusFrom\"],null],[30,0,[\"formattedFrom\"]],\"date-time\"]],null],[1,\"\\n        \"],[13],[1,\"\\n\\n        \"],[10,0],[15,0,[29,[\"date-time-control to \",[52,[30,0,[\"toSelected\"]],\"is-selected\"],\" \",[52,[30,0,[\"toFilled\"]],\"is-filled\"]]]],[12],[1,\"\\n          \"],[1,[28,[35,3],[\"calendar-alt\"],null]],[1,\"\\n          \"],[8,[39,4],null,[[\"@action\",\"@translatedLabel\",\"@class\"],[[28,[37,5],[[30,0],\"focusTo\"],null],[30,0,[\"formattedTo\"]],\"date-time\"]],null],[1,\"\\n\"],[41,[30,0,[\"toFilled\"]],[[[1,\"            \"],[8,[39,4],null,[[\"@icon\",\"@action\",\"@class\"],[\"times\",[28,[37,5],[[30,0],\"eraseToDateTime\"],null],\"delete-to-date\"]],null],[1,\"\\n\"]],[]],null],[1,\"        \"],[13],[1,\"\\n\\n\"],[41,[51,[30,0,[\"site\",\"mobileView\"]]],[[[1,\"          \"],[8,[39,7],null,[[\"@options\",\"@value\",\"@onChange\"],[[28,[37,8],null,[[\"icon\"],[\"globe\"]]],[30,0,[\"timezone\"]],[28,[37,5],[[30,0],[28,[37,9],[[30,0,[\"timezone\"]]],null]],null]]],null],[1,\"\\n\"]],[]],null],[1,\"      \"],[13],[1,\"\\n\\n      \"],[10,0],[14,0,\"picker-panel\"],[12],[1,\"\\n        \"],[8,[39,10],[[24,0,\"fake-input\"]],null,null],[1,\"\\n        \"],[10,0],[14,0,\"date-picker\"],[15,1,[29,[\"picker-container-\",[30,0,[\"elementId\"]]]]],[12],[13],[1,\"\\n\\n\"],[41,[30,0,[\"fromSelected\"]],[[[1,\"          \"],[10,0],[14,0,\"time-pickers\"],[12],[1,\"\\n            \"],[1,[28,[35,3],[\"far-clock\"],null]],[1,\"\\n            \"],[8,[39,10],[[16,\"maxlength\",5],[24,\"placeholder\",\"hh:mm\"],[24,0,\"time-picker\"],[4,[38,11],[\"input\",[28,[37,5],[[30,0],\"setTime\"],null]],null]],[[\"@type\",\"@value\"],[\"time\",[30,0,[\"time\"]]]],null],[1,\"\\n          \"],[13],[1,\"\\n\"]],[]],null],[1,\"\\n\"],[41,[30,0,[\"toSelected\"]],[[[41,[30,0,[\"toDate\"]],[[[1,\"            \"],[10,0],[14,0,\"time-pickers\"],[12],[1,\"\\n              \"],[1,[28,[35,3],[\"far-clock\"],null]],[1,\"\\n              \"],[8,[39,10],[[16,\"maxlength\",5],[24,\"placeholder\",\"hh:mm\"],[24,0,\"time-picker\"],[4,[38,11],[\"input\",[28,[37,5],[[30,0],\"setToTime\"],null]],null]],[[\"@type\",\"@value\"],[\"time\",[30,0,[\"toTime\"]]]],null],[1,\"\\n            \"],[13],[1,\"\\n\"]],[]],null]],[]],null],[1,\"      \"],[13],[1,\"\\n\\n\"],[41,[30,0,[\"site\",\"mobileView\"]],[[[1,\"        \"],[8,[39,7],null,[[\"@value\",\"@options\",\"@onChange\"],[[30,0,[\"timezone\"]],[28,[37,8],null,[[\"icon\"],[\"globe\"]]],[28,[37,5],[[30,0],[28,[37,9],[[30,0,[\"timezone\"]]],null]],null]]],null],[1,\"\\n\"]],[]],null],[1,\"    \"],[13],[1,\"\\n\\n\"],[41,[30,0,[\"advancedMode\"]],[[[1,\"      \"],[10,0],[14,0,\"advanced-options\"],[12],[1,\"\\n\"],[41,[51,[30,0,[\"isRange\"]]],[[[1,\"          \"],[10,0],[14,0,\"control-group recurrence\"],[12],[1,\"\\n            \"],[10,\"label\"],[14,0,\"control-label\"],[12],[1,\"\\n              \"],[1,[28,[35,2],[\"discourse_local_dates.create.form.recurring_title\"],null]],[1,\"\\n            \"],[13],[1,\"\\n            \"],[10,2],[12],[1,[28,[35,12],[[28,[37,2],[\"discourse_local_dates.create.form.recurring_description\"],null]],null]],[13],[1,\"\\n            \"],[10,0],[14,0,\"controls\"],[12],[1,\"\\n              \"],[8,[39,13],null,[[\"@content\",\"@class\",\"@value\",\"@onChange\",\"@options\"],[[30,0,[\"recurringOptions\"]],\"recurrence-input\",[30,0,[\"recurring\"]],[28,[37,5],[[30,0],[28,[37,9],[[30,0,[\"recurring\"]]],null]],null],[28,[37,8],null,[[\"none\"],[\"discourse_local_dates.create.form.recurring_none\"]]]]],null],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n\"]],[]],null],[1,\"\\n        \"],[10,0],[14,0,\"control-group format\"],[12],[1,\"\\n          \"],[10,\"label\"],[12],[1,[28,[35,2],[\"discourse_local_dates.create.form.format_title\"],null]],[13],[1,\"\\n          \"],[10,2],[12],[1,\"\\n            \"],[1,[28,[35,2],[\"discourse_local_dates.create.form.format_description\"],null]],[1,\"\\n            \"],[10,3],[14,\"target\",\"_blank\"],[14,6,\"https://momentjs.com/docs/#/parsing/string-format/\"],[14,\"rel\",\"noopener noreferrer\"],[12],[1,\"\\n              \"],[1,[28,[35,3],[\"question-circle\"],null]],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n          \"],[10,0],[14,0,\"controls\"],[12],[1,\"\\n            \"],[8,[39,14],null,[[\"@value\",\"@class\"],[[30,0,[\"format\"]],\"format-input\"]],null],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[10,0],[14,0,\"control-group\"],[12],[1,\"\\n          \"],[10,\"ul\"],[14,0,\"formats\"],[12],[1,\"\\n\"],[42,[28,[37,16],[[28,[37,16],[[30,0,[\"previewedFormats\"]]],null]],null],null,[[[1,\"              \"],[10,\"li\"],[14,0,\"format\"],[12],[1,\"\\n                \"],[11,3],[24,0,\"moment-format\"],[24,6,\"\"],[4,[38,5],[[30,0],[28,[37,9],[[30,0,[\"format\"]]],null],[30,1,[\"format\"]]],null],[12],[1,\"\\n                  \"],[1,[30,1,[\"format\"]]],[1,\"\\n                \"],[13],[1,\"\\n                \"],[10,1],[14,0,\"previewed-format\"],[12],[1,\"\\n                  \"],[1,[30,1,[\"preview\"]]],[1,\"\\n                \"],[13],[1,\"\\n              \"],[13],[1,\"\\n\"]],[1]],null],[1,\"          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n\\n        \"],[10,0],[14,0,\"control-group timezones\"],[12],[1,\"\\n          \"],[10,\"label\"],[12],[1,[28,[35,2],[\"discourse_local_dates.create.form.timezones_title\"],null]],[13],[1,\"\\n          \"],[10,2],[12],[1,[28,[35,2],[\"discourse_local_dates.create.form.timezones_description\"],null]],[13],[1,\"\\n          \"],[10,0],[14,0,\"controls\"],[12],[1,\"\\n            \"],[8,[39,17],null,[[\"@valueProperty\",\"@nameProperty\",\"@class\",\"@content\",\"@value\",\"@options\"],[null,null,\"timezones-input\",[30,0,[\"allTimezones\"]],[30,0,[\"timezones\"]],[28,[37,8],null,[[\"allowAny\",\"maximum\"],[false,5]]]]],null],[1,\"\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n      \"],[13],[1,\"\\n\"]],[]],null],[1,\"  \"],[13],[1,\"\\n\"]],[]]]]],[1,\"\\n\\n\"],[10,0],[14,0,\"modal-footer discourse-local-dates-create-modal-footer\"],[12],[1,\"\\n\"],[41,[30,0,[\"isValid\"]],[[[1,\"    \"],[8,[39,4],null,[[\"@class\",\"@action\",\"@label\"],[\"btn-primary\",[28,[37,5],[[30,0],\"save\"],null],\"discourse_local_dates.create.form.insert\"]],null],[1,\"\\n\"]],[]],null],[1,\"\\n  \"],[8,[39,4],null,[[\"@class\",\"@action\",\"@translatedLabel\"],[\"btn-flat\",[28,[37,5],[[30,0],\"cancel\"],null],[28,[37,2],[\"cancel\"],null]]],null],[1,\"\\n\\n  \"],[8,[39,4],null,[[\"@class\",\"@action\",\"@icon\",\"@label\"],[\"btn-default advanced-mode-btn\",[28,[37,5],[[30,0],\"advancedMode\"],null],\"cog\",[30,0,[\"toggleModeBtnLabel\"]]]],null],[1,\"\\n\"],[13],[1,\"\\n\"]],[\"previewedFormat\"],false,[\"d-modal-body\",\"if\",\"i18n\",\"d-icon\",\"d-button\",\"action\",\"unless\",\"timezone-input\",\"hash\",\"mut\",\"input\",\"on\",\"html-safe\",\"combo-box\",\"text-field\",\"each\",\"-track-array\",\"multi-select\"]]",
    "moduleName": "discourse/plugins/discourse-local-dates/discourse/templates/components/discourse-local-dates-create-form.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/discourse-local-dates/discourse/templates/modal/discourse-local-dates-create-modal", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f

  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    <DiscourseLocalDatesCreateForm @config={{this.config}} @insertDate={{this.insertDate}} />
  
  */
  {
    "id": "wXpaBb2R",
    "block": "[[[8,[39,0],null,[[\"@config\",\"@insertDate\"],[[30,0,[\"config\"]],[30,0,[\"insertDate\"]]]],null],[1,\"\\n\"]],[],false,[\"discourse-local-dates-create-form\"]]",
    "moduleName": "discourse/plugins/discourse-local-dates/discourse/templates/modal/discourse-local-dates-create-modal.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
define("discourse/plugins/discourse-local-dates/initializers/discourse-local-dates", ["exports", "discourse-common/lib/deprecated", "discourse-common/lib/get-owner", "discourse/plugins/discourse-local-dates/lib/local-date-builder", "discourse/lib/plugin-api", "discourse/lib/show-modal", "discourse/lib/download-calendar", "discourse-common/lib/icon-library", "I18n", "discourse/lib/d-popover", "discourse/lib/to-markdown", "discourse/plugins/discourse-local-dates/lib/local-date-markup-generator"], function (_exports, _deprecated, _getOwner, _localDateBuilder, _pluginApi, _showModal, _downloadCalendar, _iconLibrary, _I18n, _dPopover, _toMarkdown, _localDateMarkupGenerator) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.applyLocalDates = applyLocalDates;
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"discourse-common/lib/deprecated",0,"discourse-common/lib/get-owner",0,"discourse/plugins/discourse-local-dates/lib/local-date-builder",0,"discourse/lib/plugin-api",0,"discourse/lib/show-modal",0,"discourse/lib/download-calendar",0,"discourse-common/lib/icon-library",0,"I18n",0,"discourse/lib/d-popover",0,"discourse/lib/to-markdown",0,"discourse/plugins/discourse-local-dates/lib/local-date-markup-generator"eaimeta@70e063a35619d71f

  // Import applyLocalDates from discourse/lib/local-dates instead
  function applyLocalDates(dates, siteSettings) {
    if (!siteSettings.discourse_local_dates_enabled) {
      return;
    }

    const currentUserTZ = moment.tz.guess();
    dates.forEach(element => {
      const opts = buildOptionsFromElement(element, siteSettings);
      const localDateBuilder = new _localDateBuilder.default(opts, currentUserTZ).build();
      element.innerText = "";
      element.insertAdjacentHTML("beforeend", `
        <svg class="fa d-icon d-icon-globe-americas svg-icon" xmlns="http://www.w3.org/2000/svg">
          <use href="#globe-americas"></use>
        </svg>
        <span class="relative-time">${localDateBuilder.formatted}</span>
      `);
      element.setAttribute("aria-label", localDateBuilder.textPreview);
      const classes = ["cooked-date"];

      if (localDateBuilder.pastEvent) {
        classes.push("past");
      }

      element.classList.add(...classes);
    });
  }

  function buildOptionsFromElement(element, siteSettings) {
    const opts = {};
    const dataset = element.dataset;

    if (_rangeElements(element).length === 2) {
      opts.duration = _calculateDuration(element);
    }

    opts.time = dataset.time;
    opts.date = dataset.date;
    opts.recurring = dataset.recurring;
    opts.timezones = (dataset.timezones || siteSettings.discourse_local_dates_default_timezones || "Etc/UTC").split("|").filter(Boolean);
    opts.timezone = dataset.timezone;
    opts.calendar = (dataset.calendar || "on") === "on";
    opts.displayedTimezone = dataset.displayedTimezone;
    opts.format = dataset.format || (opts.time ? "LLL" : "LL");
    opts.countdown = dataset.countdown;
    return opts;
  }

  function buildOptionsFromMarkdownTag(element) {
    const opts = {}; // siteSettings defaults as used by buildOptionsFromElement are purposefully
    // ommitted to reproduce exactly what was on the original element

    opts.time = element.attributes["data-time"];
    opts.date = element.attributes["data-date"];
    opts.recurring = element.attributes["data-recurring"];
    opts.timezones = element.attributes["data-timezones"];
    opts.timezone = element.attributes["data-timezone"];
    opts.calendar = (element.attributes["data-calendar"] || "on") === "on";
    opts.displayedTimezone = element.attributes["data-displayed-timezone"];
    opts.format = element.attributes["data-format"];
    opts.countdown = element.attributes["data-countdown"];
    return opts;
  }

  function _rangeElements(element) {
    if (!element.parentElement) {
      return [];
    } // TODO: element.parentElement.children.length !== 2 is a fallback to old solution for ranges
    // Condition can be removed after migration to [date-range]


    if (element.dataset.range !== "true" && element.parentElement.children.length !== 2) {
      return [element];
    }

    return Array.from(element.parentElement.children).filter(span => span.dataset.date);
  }

  function initializeDiscourseLocalDates(api) {
    const siteSettings = api.container.lookup("service:site-settings");

    const defaultTitle = _I18n.default.t("discourse_local_dates.default_title", {
      site_name: siteSettings.title
    });

    api.decorateCookedElement((elem, helper) => {
      const dates = elem.querySelectorAll(".discourse-local-date");
      applyLocalDates(dates, siteSettings);
      const topicTitle = helper?.getModel()?.topic?.title;
      dates.forEach(date => {
        date.dataset.title = date.dataset.title || topicTitle || defaultTitle;
      });
    }, {
      id: "discourse-local-date"
    });
    api.onToolbarCreate(toolbar => {
      toolbar.addButton({
        title: "discourse_local_dates.title",
        id: "local-dates",
        group: "extras",
        icon: "calendar-alt",
        sendAction: event => toolbar.context.send("insertDiscourseLocalDate", event)
      });
    });
    api.modifyClass("component:d-editor", {
      pluginId: "discourse-local-dates",
      actions: {
        insertDiscourseLocalDate(toolbarEvent) {
          (0, _showModal.default)("discourse-local-dates-create-modal").setProperties({
            insertDate: markup => {
              toolbarEvent.addText(markup);
            }
          });
        }

      }
    });
    (0, _toMarkdown.addTextDecorateCallback)(function (text, nextElement, _previousElement, metadata) {
      if (metadata.discourseLocalDateStartRangeOpts && nextElement?.attributes.class?.includes("discourse-local-date") && text === "→") {
        return "";
      }
    });
    (0, _toMarkdown.addTagDecorateCallback)(function () {
      if (this.element.attributes.class?.includes("discourse-local-date")) {
        if (this.metadata.discourseLocalDateStartRangeOpts) {
          const startRangeOpts = this.metadata.discourseLocalDateStartRangeOpts;
          const endRangeOpts = buildOptionsFromMarkdownTag(this.element);
          const markup = (0, _localDateMarkupGenerator.default)({
            date: startRangeOpts.date,
            time: startRangeOpts.time,
            format: startRangeOpts.format
          }, endRangeOpts, true, {
            date: endRangeOpts.date,
            time: endRangeOpts.time,
            format: endRangeOpts.format
          });
          this.prefix = markup;
          this.metadata.discourseLocalDateStartRangeOpts = null;
          return "";
        }

        if (this.element.attributes["data-range"] === "true") {
          this.metadata.discourseLocalDateStartRangeOpts = buildOptionsFromMarkdownTag(this.element);
          return "";
        }

        const opts = buildOptionsFromMarkdownTag(this.element, siteSettings);
        const markup = (0, _localDateMarkupGenerator.default)({
          date: opts.date,
          time: opts.time,
          format: opts.format
        }, opts, false);
        this.prefix = markup;
        return "";
      }
    });
  }

  function buildHtmlPreview(element, siteSettings) {
    const opts = buildOptionsFromElement(element, siteSettings);
    const localDateBuilder = new _localDateBuilder.default(opts, moment.tz.guess()).build();
    const htmlPreviews = localDateBuilder.previews.map(preview => {
      const previewNode = document.createElement("div");
      previewNode.classList.add("preview");

      if (preview.current) {
        previewNode.classList.add("current");
      }

      const timezoneNode = document.createElement("span");
      timezoneNode.classList.add("timezone");
      timezoneNode.innerText = preview.timezone;
      previewNode.appendChild(timezoneNode);
      const dateTimeNode = document.createElement("span");
      dateTimeNode.classList.add("date-time");
      dateTimeNode.innerHTML = preview.formatted;
      previewNode.appendChild(dateTimeNode);
      return previewNode;
    });
    const previewsNode = document.createElement("div");
    previewsNode.classList.add("locale-dates-previews");
    htmlPreviews.forEach(htmlPreview => previewsNode.appendChild(htmlPreview));

    const calendarNode = _downloadCalendarNode(element);

    if (calendarNode) {
      previewsNode.appendChild(calendarNode);
    }

    return previewsNode.outerHTML;
  }

  function calculateStartAndEndDate(startDataset, endDataset) {
    let startDate, endDate;
    startDate = moment.tz(`${startDataset.date} ${startDataset.time || ""}`.trim(), startDataset.timezone);

    if (endDataset) {
      endDate = moment.tz(`${endDataset.date} ${endDataset.time || ""}`.trim(), endDataset.timezone);
    }

    return [startDate, endDate];
  }

  function _downloadCalendarNode(element) {
    const [startDataset, endDataset] = _rangeElements(element).map(dateElement => dateElement.dataset);

    const [startDate, endDate] = calculateStartAndEndDate(startDataset, endDataset);

    if (startDate < moment().tz(startDataset.timezone)) {
      return false;
    }

    const node = document.createElement("div");
    node.classList.add("download-calendar");
    node.innerHTML = `${(0, _iconLibrary.renderIcon)("string", "file")} ${_I18n.default.t("download_calendar.add_to_calendar")}`;
    node.setAttribute("data-starts-at", startDate.toISOString());

    if (endDataset) {
      node.setAttribute("data-ends-at", endDate.toISOString());
    }

    if (!startDataset.time && !endDataset) {
      node.setAttribute("data-ends-at", startDate.add(24, "hours").toISOString());
    }

    node.setAttribute("data-title", startDataset.title);
    return node;
  }

  function _calculateDuration(element) {
    const [startDataset, endDataset] = _rangeElements(element).map(dateElement => dateElement.dataset);

    const startDateTime = moment(`${startDataset.date} ${startDataset.time || ""}`.trim());
    const endDateTime = moment(`${endDataset.date} ${endDataset.time || ""}`.trim());
    const duration = endDateTime.diff(startDateTime, "minutes"); // negative duration is used when we calculate difference for end date from range

    return element.dataset === startDataset ? duration : -duration;
  }

  var _default = {
    name: "discourse-local-dates",

    showDatePopover(event) {
      const owner = (0, _getOwner.getOwner)(this);

      if (owner.isDestroyed || owner.isDestroying) {
        return;
      }

      if (event?.target?.classList?.contains("download-calendar")) {
        const dataset = event.target.dataset;
        (0, _downloadCalendar.downloadCalendar)(dataset.title, [{
          startsAt: dataset.startsAt,
          endsAt: dataset.endsAt
        }]); // TODO: remove this when rewriting preview as a component

        const parentPopover = event.target.closest("[data-tippy-root]");

        if (parentPopover?._tippy) {
          parentPopover._tippy.hide();
        }

        return;
      }

      if (!event?.target?.classList?.contains("discourse-local-date")) {
        return;
      }

      const siteSettings = owner.lookup("service:site-settings");
      (0, _dPopover.showPopover)(event, {
        trigger: "click",
        content: buildHtmlPreview(event.target, siteSettings),
        allowHTML: true,
        interactive: true,
        appendTo: "parent",
        onHidden: instance => {
          instance.destroy();
        }
      });
    },

    hideDatePopover(event) {
      (0, _dPopover.hidePopover)(event);
    },

    initialize(container) {
      window.addEventListener("click", this.showDatePopover);
      const siteSettings = container.lookup("service:site-settings");

      if (siteSettings.discourse_local_dates_enabled) {
        $.fn.applyLocalDates = function () {
          (0, _deprecated.default)("`$.applyLocalDates()` is deprecated, import and use `applyLocalDates()` instead.");
          return applyLocalDates(this.toArray(), siteSettings);
        };

        (0, _pluginApi.withPluginApi)("0.8.8", initializeDiscourseLocalDates);
      }
    },

    teardown() {
      window.removeEventListener("click", this.showDatePopover);
    }

  };
  _exports.default = _default;
});
define("discourse/plugins/discourse-local-dates/lib/date-with-zone-helper", ["exports", "@ember/object"], function (_exports, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/object"eaimeta@70e063a35619d71f

  /*
    DateWithZoneHelper provides a limited list of helpers
    to manipulate a moment object with timezones
  
    - add(count unit) adds a COUNT of UNITS to a date
    - subtract(count unit) subtracts a COUNT of UNITS to a date
    - format(format) formats a date with zone in a consistent way, optional moment format
    - isDST() allows to know if a date in a specified timezone is currently under DST
    - datetimeWithZone(timezone) returns a new moment object with timezone applied
    - datetime returns the moment object
    - unitRepetitionsBetweenDates(duration, date) return the number of repetitions of
    duration between two dates, eg for duration: "1.weeks", "2.months"...
  */
  class DateWithZoneHelper {
    static fromDatetime(datetime, timezone, localTimezone) {
      return new DateWithZoneHelper({
        year: datetime.year(),
        month: datetime.month(),
        day: datetime.date(),
        hour: datetime.hour(),
        minute: datetime.minute(),
        second: datetime.second(),
        timezone,
        localTimezone
      });
    }

    constructor() {
      let params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.timezone = params.timezone || "UTC";
      this.localTimezone = params.localTimezone || moment.tz.guess();
      this.datetime = moment.tz((0, _object.getProperties)(params, ["year", "month", "day", "hour", "minute", "second"]), this.timezone);
    }

    isDST() {
      return this.datetime.tz(this.localTimezone).isDST();
    }

    unitRepetitionsBetweenDates(duration, date) {
      const [count, unit] = duration.split("."); // get the diff in the specified units with decimals

      const diff = Math.abs(this.datetime.diff(date, unit, true)); // get integer count of duration in diff, eg: 4 hours diff is 2 for 2.hours duration

      const integer = Math.trunc(diff / count); // get fractional to define if we have to add one "duration"

      const fractional = diff / count % 1;
      return integer * parseInt(count, 10) + (fractional > 0 ? parseInt(count, 10) : 0);
    }

    add(count, unit) {
      return this._fromDatetime(this.datetime.clone().add(count, unit), this.timezone, this.localTimezone);
    }

    subtract(count, unit) {
      return this._fromDatetime(this.datetime.clone().subtract(count, unit), this.timezone, this.localTimezone);
    }

    datetimeWithZone(timezone) {
      return this.datetime.clone().tz(timezone);
    }

    format(format) {
      if (format) {
        return this.datetime.tz(this.localTimezone).format(format);
      }

      return this.datetime.tz(this.localTimezone).toISOString(true);
    }

    _fromDatetime(datetime, timezone, localTimezone) {
      return DateWithZoneHelper.fromDatetime(datetime, timezone, localTimezone);
    }

  }

  _exports.default = DateWithZoneHelper;
});
define("discourse/plugins/discourse-local-dates/lib/discourse-markdown/discourse-local-dates", ["exports", "pretty-text/engines/discourse-markdown/bbcode-block"], function (_exports, _bbcodeBlock) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setup = setup;
  0; //eaimeta@70e063a35619d71f0,"pretty-text/engines/discourse-markdown/bbcode-block"eaimeta@70e063a35619d71f

  const timezoneNames = moment.tz.names();

  function addSingleLocalDate(buffer, state, config) {
    let token = new state.Token("span_open", "span", 1);
    token.attrs = [["data-date", state.md.utils.escapeHtml(config.date)]];

    if (!config.date.match(/\d{4}-\d{2}-\d{2}/)) {
      closeBuffer(buffer, state, moment.invalid().format());
      return;
    }

    if (config.time && !config.time.match(/\d{2}:\d{2}(?::\d{2})?/)) {
      closeBuffer(buffer, state, moment.invalid().format());
      return;
    }

    let dateTime = config.date;

    if (config.time) {
      token.attrs.push(["data-time", state.md.utils.escapeHtml(config.time)]);
      dateTime = `${dateTime} ${config.time}`;
    }

    if (!moment(dateTime).isValid()) {
      closeBuffer(buffer, state, moment.invalid().format());
      return;
    }

    token.attrs.push(["class", "discourse-local-date"]);

    if (config.format) {
      token.attrs.push(["data-format", state.md.utils.escapeHtml(config.format)]);
    }

    if (config.countdown) {
      token.attrs.push(["data-countdown", state.md.utils.escapeHtml(config.countdown)]);
    }

    if (config.calendar) {
      token.attrs.push(["data-calendar", state.md.utils.escapeHtml(config.calendar)]);
    }

    if (config.range) {
      token.attrs.push(["data-range", true]);
    }

    if (config.displayedTimezone && timezoneNames.includes(config.displayedTimezone)) {
      token.attrs.push(["data-displayed-timezone", state.md.utils.escapeHtml(config.displayedTimezone)]);
    }

    if (config.timezones) {
      const timezones = config.timezones.split("|").filter(timezone => {
        return timezoneNames.includes(timezone);
      });
      token.attrs.push(["data-timezones", state.md.utils.escapeHtml(timezones.join("|"))]);
    }

    if (config.timezone && timezoneNames.includes(config.timezone)) {
      token.attrs.push(["data-timezone", state.md.utils.escapeHtml(config.timezone)]);
      dateTime = moment.tz(dateTime, config.timezone);
    } else {
      dateTime = moment.utc(dateTime);
    }

    if (config.recurring) {
      token.attrs.push(["data-recurring", state.md.utils.escapeHtml(config.recurring)]);
    }

    buffer.push(token);
    const formattedDateTime = dateTime.tz("Etc/UTC").format(state.md.options.discourse.datesEmailFormat || moment.defaultFormat);
    token.attrs.push(["data-email-preview", `${formattedDateTime} UTC`]);
    closeBuffer(buffer, state, dateTime.utc().format(config.format));
  }

  function defaultDateConfig() {
    return {
      date: null,
      time: null,
      timezone: null,
      format: null,
      timezones: null,
      displayedTimezone: null,
      countdown: null,
      range: false
    };
  }

  function parseTagAttributes(tag) {
    const matchString = tag.replace(/‘|’|„|“|«|»|”/g, '"');
    return (0, _bbcodeBlock.parseBBCodeTag)("[date date" + matchString + "]", 0, matchString.length + 12);
  }

  function addLocalDate(buffer, matches, state) {
    let config = defaultDateConfig();
    const parsed = parseTagAttributes(matches[1]);
    config.date = parsed.attrs.date;
    config.format = parsed.attrs.format;
    config.calendar = parsed.attrs.calendar;
    config.time = parsed.attrs.time;
    config.timezone = (parsed.attrs.timezone || "").trim();
    config.recurring = parsed.attrs.recurring;
    config.timezones = parsed.attrs.timezones;
    config.displayedTimezone = parsed.attrs.displayedTimezone;
    config.countdown = parsed.attrs.countdown;
    addSingleLocalDate(buffer, state, config);
  }

  function addLocalRange(buffer, matches, state) {
    let config = defaultDateConfig();
    let date, time;
    const parsed = parseTagAttributes(matches[1]);
    config.format = parsed.attrs.format;
    config.calendar = parsed.attrs.calendar;
    config.timezone = (parsed.attrs.timezone || "").trim();
    config.recurring = parsed.attrs.recurring;
    config.timezones = parsed.attrs.timezones;
    config.displayedTimezone = parsed.attrs.displayedTimezone;
    config.countdown = parsed.attrs.countdown;
    config.range = parsed.attrs.from && parsed.attrs.to;

    if (parsed.attrs.from) {
      [date, time] = parsed.attrs.from.split("T");
      config.date = date;
      config.time = time;
      addSingleLocalDate(buffer, state, config);
    }

    if (config.range) {
      closeBuffer(buffer, state, "→");
    }

    if (parsed.attrs.to) {
      [date, time] = parsed.attrs.to.split("T");
      config.date = date;
      config.time = time;
      addSingleLocalDate(buffer, state, config);
    }
  }

  function closeBuffer(buffer, state, text) {
    let token;
    token = new state.Token("text", "", 0);
    token.content = text;
    buffer.push(token);
    token = new state.Token("span_close", "span", -1);
    buffer.push(token);
  }

  function setup(helper) {
    helper.allowList(["span.discourse-local-date", "span[aria-label]", "span[data-date]", "span[data-time]", "span[data-format]", "span[data-countdown]", "span[data-calendar]", "span[data-displayed-timezone]", "span[data-timezone]", "span[data-timezones]", "span[data-recurring]", "span[data-email-preview]"]);
    helper.registerOptions((opts, siteSettings) => {
      opts.datesEmailFormat = siteSettings.discourse_local_dates_email_format;
      opts.features["discourse-local-dates"] = !!siteSettings.discourse_local_dates_enabled;
    });
    helper.registerPlugin(md => {
      const rule = {
        matcher: /\[date(=.+?)\]/,
        onMatch: addLocalDate
      };
      md.core.textPostProcess.ruler.push("discourse-local-dates", rule);
    });
    helper.registerPlugin(md => {
      const rule = {
        matcher: /\[date-range(.+?)\]/,
        onMatch: addLocalRange
      };
      md.core.textPostProcess.ruler.push("discourse-local-dates", rule);
    });
  }
});
define("discourse/plugins/discourse-local-dates/lib/local-date-builder", ["exports", "discourse/plugins/discourse-local-dates/lib/date-with-zone-helper", "I18n", "discourse-common/lib/icon-library"], function (_exports, _dateWithZoneHelper, _I18n, _iconLibrary) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"discourse/plugins/discourse-local-dates/lib/date-with-zone-helper",0,"I18n",0,"discourse-common/lib/icon-library"eaimeta@70e063a35619d71f

  const DATETIME_FORMAT = "LLL";
  const DATE_FORMAT = "LL";
  const FULL_DATETIME_FORMAT = "LLLL";
  const TIME_FORMAT = "h:mm A";
  const DAY_OF_THE_WEEK_FORMAT = "dddd";
  const RANGE_SEPARATOR = "→";
  const TIME_ICON = "clock";
  const SHORT_FORMAT_DAYS_PERIOD = 1;

  class LocalDateBuilder {
    constructor() {
      let params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      let localTimezone = arguments.length > 1 ? arguments[1] : undefined;
      this.time = params.time;
      this.date = params.date;
      this.recurring = params.recurring;
      this.timezones = Array.from(new Set((params.timezones || []).filter(Boolean)));
      this.timezone = params.timezone || "UTC";
      this.calendar = typeof params.calendar === "undefined" ? true : params.calendar;
      this.displayedTimezone = params.displayedTimezone;
      this.format = params.format || (this.time ? DATETIME_FORMAT : DATE_FORMAT);
      this.countdown = params.countdown;
      this.duration = params.duration;
      this.localTimezone = localTimezone;
    }

    build() {
      const [year, month, day] = this.date.split("-").map(x => parseInt(x, 10));
      const [hour, minute, second] = (this.time || "").split(":").map(x => x ? parseInt(x, 10) : undefined);
      let displayedTimezone;

      if (this.time) {
        displayedTimezone = this.displayedTimezone || this.localTimezone;
      } else {
        displayedTimezone = this.displayedTimezone || this.timezone || this.localTimezone;
      }

      let localDate = new _dateWithZoneHelper.default({
        year,
        month: month ? month - 1 : null,
        day,
        hour,
        minute,
        second,
        timezone: this.timezone,
        localTimezone: this.localTimezone
      });

      if (this.recurring && moment().isAfter(localDate.datetime)) {
        const type = this.recurring.split(".")[1];
        const repetitionsForType = localDate.unitRepetitionsBetweenDates(this.recurring, moment.tz(this.localTimezone));
        localDate = localDate.add(repetitionsForType, type);
      }

      const previews = this._generatePreviews(localDate, displayedTimezone);

      return {
        pastEvent: !this.recurring && moment.tz(this.localTimezone).isAfter(localDate.datetime),
        formatted: this._applyFormatting(localDate, displayedTimezone),
        previews,
        textPreview: this._generateTextPreviews(previews)
      };
    }

    _generateTextPreviews(previews) {
      return previews.map(preview => {
        const formattedZone = this._zoneWithoutPrefix(preview.timezone);

        return `${formattedZone} ${preview.formatted}`;
      }).join(", ");
    }

    _generatePreviews(localDate, displayedTimezone) {
      const previewedTimezones = [];
      const timezones = this.timezones.filter(timezone => !this._isEqualZones(timezone, this.localTimezone));
      previewedTimezones.push({
        timezone: this._zoneWithoutPrefix(this.localTimezone),
        current: true,
        formatted: this._createDateTimeRange(_dateWithZoneHelper.default.fromDatetime(localDate.datetime, localDate.timezone, this.localTimezone), this.time, this.duration)
      });

      if (this.timezone && displayedTimezone === this.localTimezone && this.timezone !== displayedTimezone && !this._isEqualZones(displayedTimezone, this.timezone) && !this.timezones.any(t => this._isEqualZones(t, this.timezone))) {
        timezones.unshift(this.timezone);
      }

      timezones.forEach(timezone => {
        if (this._isEqualZones(timezone, displayedTimezone)) {
          return;
        }

        if (this._isEqualZones(timezone, this.localTimezone)) {
          timezone = this.localTimezone;
        }

        previewedTimezones.push({
          timezone: this._zoneWithoutPrefix(timezone),
          formatted: this._createDateTimeRange(_dateWithZoneHelper.default.fromDatetime(localDate.datetime, localDate.timezone, timezone), this.time, this.duration)
        });
      });
      return previewedTimezones.uniqBy("timezone");
    }

    _isEqualZones(timezoneA, timezoneB) {
      if ((timezoneA || timezoneB) && (!timezoneA || !timezoneB)) {
        return false;
      }

      if (timezoneA.includes(timezoneB) || timezoneB.includes(timezoneA)) {
        return true;
      }

      return moment.tz(timezoneA).utcOffset() === moment.tz(timezoneB).utcOffset();
    }

    _createDateTimeRange(startRange, time, duration) {
      const [startDate, endDate] = this._calculateDatesForRange(startRange, time, duration);

      let formatElements = [startDate.format(`${DAY_OF_THE_WEEK_FORMAT}, ${DATE_FORMAT}`), this._optionalTimeIcon(startDate, endDate), startDate.format(TIME_FORMAT)];

      if (endDate) {
        formatElements = formatElements.concat([RANGE_SEPARATOR, endDate.format(this._endDateFormat(startDate, endDate))]);
      }

      return formatElements.filter(Boolean).join(" ");
    }

    _shortFormat(startDate, endDate) {
      return endDate.datetime.diff(startDate.datetime, "days") < SHORT_FORMAT_DAYS_PERIOD;
    }

    _optionalTimeIcon(startDate, endDate) {
      if (!endDate || this._shortFormat(startDate, endDate)) {
        return `<br />${(0, _iconLibrary.renderIcon)("string", TIME_ICON)}`;
      }
    }

    _endDateFormat(startDate, endDate) {
      return this._shortFormat(startDate, endDate) ? TIME_FORMAT : FULL_DATETIME_FORMAT;
    }

    _calculateDatesForRange(date, time, duration) {
      // if a time has been given we do not attempt to automatically create a range
      // instead we show only one date with a format showing the time
      if (time && !duration) {
        return [date];
      }

      const dates = [date, duration ? date.add(duration, "minutes") : date.add(24, "hours")];
      return duration < 0 ? dates.reverse() : dates;
    }

    _applyFormatting(localDate, displayedTimezone) {
      if (this.countdown) {
        const diffTime = moment.tz(this.localTimezone).diff(localDate.datetime);

        if (diffTime < 0) {
          return moment.duration(diffTime).humanize();
        } else {
          return _I18n.default.t("discourse_local_dates.relative_dates.countdown.passed");
        }
      }

      const sameTimezone = this._isEqualZones(displayedTimezone, this.localTimezone);

      if (this.calendar) {
        const inCalendarRange = moment.tz(this.localTimezone).isBetween(localDate.subtract(2, "day").datetime, localDate.add(1, "day").datetime.endOf("day"));

        if (inCalendarRange && sameTimezone) {
          const date = localDate.datetimeWithZone(this.localTimezone);

          if (date.hours() === 0 && date.minutes() === 0) {
            return date.format("dddd");
          }

          return date.calendar(moment.tz(localDate.timezone), this._calendarFormats(this.time ? this.time : null));
        }
      }

      if (!sameTimezone) {
        return this._formatWithZone(localDate, displayedTimezone, this.format);
      }

      return localDate.format(this.format);
    }

    _calendarFormats(time) {
      return {
        sameDay: this._translateCalendarKey(time, "today"),
        nextDay: this._translateCalendarKey(time, "tomorrow"),
        lastDay: this._translateCalendarKey(time, "yesterday"),
        sameElse: "L"
      };
    }

    _translateCalendarKey(time, key) {
      const translated = _I18n.default.t(`discourse_local_dates.relative_dates.${key}`, {
        time: "LT"
      });

      if (time) {
        return translated.split("LT").map(w => `[${w}]`).join("LT");
      } else {
        return `[${translated.replace(" LT", "")}]`;
      }
    }

    _formatTimezone(timezone) {
      return timezone.replace("_", " ").replace("Etc/", "").split("/");
    }

    _zoneWithoutPrefix(timezone) {
      const [part1, part2] = this._formatTimezone(timezone);

      return part2 || part1;
    }

    _formatWithZone(localDate, displayedTimezone, format) {
      let formatted = localDate.datetimeWithZone(displayedTimezone).format(format);
      return `${formatted} (${this._zoneWithoutPrefix(displayedTimezone)})`;
    }

  }

  _exports.default = LocalDateBuilder;
});
define("discourse/plugins/discourse-local-dates/lib/local-date-markup-generator", ["exports", "@ember/utils"], function (_exports, _utils) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = generateDateMarkup;
  0; //eaimeta@70e063a35619d71f0,"@ember/utils"eaimeta@70e063a35619d71f

  function generateDateMarkup(fromDateTime, options, isRange, toDateTime) {
    let text = ``;

    if (isRange) {
      let from = [fromDateTime.date, fromDateTime.time].filter(element => !(0, _utils.isEmpty)(element)).join("T");
      let to = [toDateTime.date, toDateTime.time].filter(element => !(0, _utils.isEmpty)(element)).join("T");
      text += `[date-range from=${from} to=${to}`;
    } else {
      text += `[date=${fromDateTime.date}`;
    }

    if (fromDateTime.time && !isRange) {
      text += ` time=${fromDateTime.time}`;
    }

    if (fromDateTime.format && fromDateTime.format.length) {
      text += ` format="${fromDateTime.format}"`;
    }

    if (options.timezone) {
      text += ` timezone="${options.timezone}"`;
    }

    if (options.countdown) {
      text += ` countdown="${options.countdown}"`;
    }

    if (options.displayedTimezone) {
      text += ` displayedTimezone="${options.displayedTimezone}"`;
    }

    if (options.timezones && options.timezones.length) {
      if (Array.isArray(options.timezones)) {
        text += ` timezones="${options.timezones.join("|")}"`;
      } else {
        text += ` timezones="${options.timezones}"`;
      }
    }

    if (options.recurring && !isRange) {
      text += ` recurring="${options.recurring}"`;
    }

    text += `]`;
    return text;
  }
});//# sourceMappingURL=discourse-local-dates.map

define("discourse/plugins/discourse-details/acceptance/details-button-test", ["discourse/tests/helpers/qunit-helpers", "I18n", "discourse/controllers/composer", "discourse/tests/helpers/select-kit-helper", "qunit", "@ember/test-helpers"], function (_qunitHelpers, _I18n, _composer, _selectKitHelper, _qunit, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"discourse/tests/helpers/qunit-helpers",0,"I18n",0,"discourse/controllers/composer",0,"discourse/tests/helpers/select-kit-helper",0,"qunit",0,"@ember/test-helpers"eaimeta@70e063a35619d71f

  (0, _qunitHelpers.acceptance)("Details Button", function (needs) {
    needs.user();
    needs.hooks.beforeEach(() => (0, _composer.clearPopupMenuOptionsCallback)());
    (0, _qunit.test)("details button", async function (assert) {
      const popupMenu = (0, _selectKitHelper.default)(".toolbar-popup-menu-options");
      await (0, _testHelpers.visit)("/");
      await (0, _testHelpers.click)("#create-topic");
      await popupMenu.expand();
      await popupMenu.selectRowByValue("insertDetails");
      assert.strictEqual((0, _qunitHelpers.query)(".d-editor-input").value, `\n[details="${_I18n.default.t("composer.details_title")}"]\n${_I18n.default.t("composer.details_text")}\n[/details]\n`, "it should contain the right output");
      await (0, _testHelpers.fillIn)(".d-editor-input", "This is my title");
      const textarea = (0, _qunitHelpers.query)(".d-editor-input");
      textarea.selectionStart = 0;
      textarea.selectionEnd = textarea.value.length;
      await popupMenu.expand();
      await popupMenu.selectRowByValue("insertDetails");
      assert.strictEqual((0, _qunitHelpers.query)(".d-editor-input").value, `\n[details="${_I18n.default.t("composer.details_title")}"]\nThis is my title\n[/details]\n`, "it should contain the right selected output");
      assert.strictEqual(textarea.selectionStart, 21, "it should start highlighting at the right position");
      assert.strictEqual(textarea.selectionEnd, 37, "it should end highlighting at the right position");
      await (0, _testHelpers.fillIn)(".d-editor-input", "Before some text in between After");
      textarea.selectionStart = 7;
      textarea.selectionEnd = 28;
      await popupMenu.expand();
      await popupMenu.selectRowByValue("insertDetails");
      assert.strictEqual((0, _qunitHelpers.query)(".d-editor-input").value, `Before \n[details="${_I18n.default.t("composer.details_title")}"]\nsome text in between\n[/details]\n After`, "it should contain the right output");
      assert.strictEqual(textarea.selectionStart, 28, "it should start highlighting at the right position");
      assert.strictEqual(textarea.selectionEnd, 48, "it should end highlighting at the right position");
      await (0, _testHelpers.fillIn)(".d-editor-input", "Before \nsome text in between\n After");
      textarea.selectionStart = 8;
      textarea.selectionEnd = 29;
      await popupMenu.expand();
      await popupMenu.selectRowByValue("insertDetails");
      assert.strictEqual((0, _qunitHelpers.query)(".d-editor-input").value, `Before \n\n[details="${_I18n.default.t("composer.details_title")}"]\nsome text in between\n[/details]\n\n After`, "it should contain the right output");
      assert.strictEqual(textarea.selectionStart, 29, "it should start highlighting at the right position");
      assert.strictEqual(textarea.selectionEnd, 49, "it should end highlighting at the right position");
    });
    (0, _qunit.test)("details button surrounds all selected text in a single details block", async function (assert) {
      const multilineInput = "first line\n\nsecond line\n\nthird line";
      const popupMenu = (0, _selectKitHelper.default)(".toolbar-popup-menu-options");
      await (0, _testHelpers.visit)("/");
      await (0, _testHelpers.click)("#create-topic");
      await (0, _testHelpers.fillIn)(".d-editor-input", multilineInput);
      const textarea = (0, _qunitHelpers.query)(".d-editor-input");
      textarea.selectionStart = 0;
      textarea.selectionEnd = textarea.value.length;
      await popupMenu.expand();
      await popupMenu.selectRowByValue("insertDetails");
      assert.strictEqual((0, _qunitHelpers.query)(".d-editor-input").value, `\n[details="${_I18n.default.t("composer.details_title")}"]\n${multilineInput}\n[/details]\n`, "it should contain the right output");
    });
  });
});
define("discourse/plugins/discourse-details/lib/details-cooked-test", ["pretty-text/pretty-text", "qunit"], function (_prettyText, _qunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"pretty-text/pretty-text",0,"qunit"eaimeta@70e063a35619d71f

  const defaultOpts = (0, _prettyText.buildOptions)({
    siteSettings: {
      enable_emoji: true,
      emoji_set: "google_classic",
      highlighted_languages: "json|ruby|javascript",
      default_code_lang: "auto"
    },
    censoredWords: "shucks|whiz|whizzer",
    getURL: url => url
  });
  (0, _qunit.module)("lib:details-cooked-test", function () {
    (0, _qunit.test)("details", function (assert) {
      const cooked = (input, expected, text) => {
        assert.strictEqual(new _prettyText.default(defaultOpts).cook(input), expected.replace(/\/>/g, ">"), text);
      };

      cooked(`<details><summary>Info</summary>coucou</details>`, `<details><summary>Info</summary>coucou</details>`, "manual HTML for details");
      cooked("[details=testing]\ntest\n[/details]", `<details>
<summary>
testing</summary>
<p>test</p>
</details>`);
    });
  });
});//# sourceMappingURL=discourse-details_tests.map

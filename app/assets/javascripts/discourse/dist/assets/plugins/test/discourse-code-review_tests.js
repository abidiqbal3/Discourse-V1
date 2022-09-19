define("discourse/plugins/discourse-code-review/acceptance/admin-webhook-configuration-test", ["discourse/tests/helpers/qunit-helpers", "@ember/test-helpers", "qunit"], function (_qunitHelpers, _testHelpers, _qunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"discourse/tests/helpers/qunit-helpers",0,"@ember/test-helpers",0,"qunit"eaimeta@70e063a35619d71f

  const restPrefix = "/admin/plugins/code-review";
  (0, _qunitHelpers.acceptance)("Github Webhook Configuration", function (needs) {
    needs.user();
    needs.pretender((server, helper) => {
      server.get(`${restPrefix}/organizations.json`, () => {
        return helper.response(["org1", "org2"]);
      });
      server.get(`${restPrefix}/organizations/org1/repos.json`, () => {
        return helper.response(["repo1"]);
      });
      server.get(`${restPrefix}/organizations/org2/repos.json`, () => {
        return helper.response(["repo2", "repo3"]);
      });
      server.get(`${restPrefix}/organizations/org1/repos/repo1/has-configured-webhook.json`, () => {
        return helper.response({
          has_configured_webhook: false
        });
      });
      server.get(`${restPrefix}/organizations/org2/repos/repo2/has-configured-webhook.json`, () => {
        return helper.response({
          has_configured_webhook: true
        });
      });
      server.get(`${restPrefix}/organizations/org2/repos/repo3/has-configured-webhook.json`, () => {
        return helper.response({
          has_configured_webhook: false
        });
      });
      server.post(`${restPrefix}/organizations/org1/repos/repo1/configure-webhook.json`, () => {
        return helper.response({
          has_configured_webhook: true
        });
      });
      server.post(`${restPrefix}/organizations/org2/repos/repo3/configure-webhook.json`, () => {
        return helper.response({
          has_configured_webhook: true
        });
      });
    });
    (0, _qunit.test)("Should display correctly", async assert => {
      await (0, _testHelpers.visit)("/admin/plugins/code-review");
      const tree = (0, _qunitHelpers.query)(".code-review-webhook-tree");
      const organizations = tree.querySelectorAll(".code-review-webhook-org");
      assert.equal(organizations.length, 2);
      const [org1, org2] = organizations;
      assert.equal(org1.querySelector("h2").innerText, "org1");
      assert.equal(org2.querySelector("h2").innerText, "org2");
      const org1Repos = org1.querySelectorAll(".code-review-webhook-repo");
      const org2Repos = org2.querySelectorAll(".code-review-webhook-repo");
      assert.equal(org1Repos.length, 1);
      assert.equal(org2Repos.length, 2);
      const repo1 = org1Repos[0];
      const [repo2, repo3] = org2Repos;
      assert.equal(repo1.querySelector("h3").innerText, "repo1");
      assert.equal(repo2.querySelector("h3").innerText, "repo2");
      assert.equal(repo3.querySelector("h3").innerText, "repo3");
      assert.equal(repo1.querySelectorAll(".code-review-webhook-not-configured").length, 1);
      assert.equal(repo2.querySelectorAll(".code-review-webhook-configured").length, 1);
      assert.equal(repo3.querySelectorAll(".code-review-webhook-not-configured").length, 1);
    });
    (0, _qunit.test)("Should send requests to change each unconfigured webhook", async assert => {
      await (0, _testHelpers.visit)("/admin/plugins/code-review");
      await (0, _testHelpers.click)(".code-review-configure-webhooks-button");
      assert.equal((0, _qunitHelpers.count)(".code-review-webhook-configured"), 3);
    });
  });
  (0, _qunitHelpers.acceptance)("GitHub Webhook Configuration - Repo List Error", function (needs) {
    needs.user();
    needs.pretender((server, helper) => {
      server.get(`${restPrefix}/organizations.json`, () => {
        return helper.response(["org1"]);
      });
      server.get(`${restPrefix}/organizations/org1/repos.json`, () => {
        return helper.response(401, {
          error: "credential error",
          failed: "FAILED"
        });
      });
    });
    (0, _qunit.test)("Should show an error message", async assert => {
      await (0, _testHelpers.visit)("/admin/plugins/code-review");
      assert.equal((0, _qunitHelpers.query)(".modal-body").innerText, "credential error");
      await (0, _testHelpers.click)(".modal-footer .btn-primary");
      assert.ok((0, _qunitHelpers.exists)(".code-review-configure-webhooks-button:disabled"));
    });
  });
  (0, _qunitHelpers.acceptance)("GitHub Webhook Configuration - Webhook Config Get Error", function (needs) {
    needs.user();
    needs.pretender((server, helper) => {
      server.get(`${restPrefix}/organizations.json`, () => {
        return helper.response(["org1"]);
      });
      server.get(`${restPrefix}/organizations/org1/repos.json`, () => {
        return helper.response(["repo1"]);
      });
      server.get(`${restPrefix}/organizations/org1/repos/repo1/has-configured-webhook.json`, () => {
        return helper.response(400, {
          error: "permissions error",
          failed: "FAILED"
        });
      });
    });
    (0, _qunit.test)("Should show an error message", async assert => {
      await (0, _testHelpers.visit)("/admin/plugins/code-review");
      assert.equal((0, _qunitHelpers.query)(".modal-body").innerText, "permissions error");
      await (0, _testHelpers.click)(".modal-footer .btn-primary");
      assert.ok((0, _qunitHelpers.exists)(".code-review-configure-webhooks-button:disabled"));
    });
  });
});
define("discourse/plugins/discourse-code-review/acceptance/commit-approved-notifications-test", ["discourse/tests/helpers/qunit-helpers", "qunit", "@ember/test-helpers", "I18n"], function (_qunitHelpers, _qunit, _testHelpers, _I18n) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"discourse/tests/helpers/qunit-helpers",0,"qunit",0,"@ember/test-helpers",0,"I18n"eaimeta@70e063a35619d71f

  (0, _qunitHelpers.acceptance)("Discourse Code Review - Notifications", function (needs) {
    needs.user({
      redesigned_user_menu_enabled: true
    });
    needs.pretender((server, helper) => {
      server.get("/notifications", () => {
        return helper.response({
          notifications: [{
            id: 801,
            user_id: 12,
            notification_type: 21,
            // code_review_commit_approved notification type
            read: true,
            high_priority: false,
            created_at: "2001-10-17 15:41:10 UTC",
            post_number: 1,
            topic_id: 883,
            fancy_title: "Osama's commit #1",
            slug: "osama-s-commit-1",
            data: {
              num_approved_commits: 1
            }
          }, {
            id: 389,
            user_id: 12,
            notification_type: 21,
            // code_review_commit_approved notification type
            read: true,
            high_priority: false,
            created_at: "2010-11-17 23:01:15 UTC",
            post_number: null,
            topic_id: null,
            fancy_title: null,
            slug: null,
            data: {
              num_approved_commits: 10
            }
          }]
        });
      });
    });
    (0, _qunit.test)("code review commit approved notifications", async function (assert) {
      await (0, _testHelpers.visit)("/");
      await (0, _testHelpers.click)(".d-header-icons .current-user");
      const notifications = (0, _qunitHelpers.queryAll)("#quick-access-all-notifications ul li.notification a");
      assert.strictEqual(notifications.length, 2);
      assert.strictEqual(notifications[0].textContent.replaceAll(/\s+/g, " ").trim(), _I18n.default.t("notifications.code_review.commit_approved.single", {
        topicTitle: "Osama's commit #1"
      }), "notification for a single commit approval has the right content");
      assert.ok(notifications[0].href.endsWith("/t/osama-s-commit-1/883"), "notification for a single commit approval links to the topic");
      assert.ok(notifications[0].querySelector(".d-icon-check"), "notification for a single commit approval has the right icon");
      assert.strictEqual(notifications[1].textContent.replaceAll(/\s+/g, " ").trim(), _I18n.default.t("notifications.code_review.commit_approved.multiple", {
        count: 10
      }), "notification for multiple commits approval has the right content");
      assert.ok(notifications[1].href.endsWith("/u/eviltrout/activity/approval-given"), "notification for multiple commits approval links to the user approval-given page");
      assert.ok(notifications[1].querySelector(".d-icon-check"), "notification for multiple commits approval has the right icon");
    });
  });
});
define("discourse/plugins/discourse-code-review/acceptance/self-approve-desktop-test", ["discourse/tests/helpers/qunit-helpers", "discourse/tests/fixtures/topic", "@ember/test-helpers", "qunit", "discourse-common/lib/object"], function (_qunitHelpers, _topic, _testHelpers, _qunit, _object) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"discourse/tests/helpers/qunit-helpers",0,"discourse/tests/fixtures/topic",0,"@ember/test-helpers",0,"qunit",0,"discourse-common/lib/object"eaimeta@70e063a35619d71f

  (0, _qunitHelpers.acceptance)("review desktop", function (needs) {
    needs.user({
      can_review_code: true
    });
    needs.settings({
      code_review_approved_tag: "approved",
      code_review_pending_tag: "pending",
      code_review_followup_tag: "followup"
    });
    needs.pretender(server => {
      const json = (0, _object.cloneJSON)(_topic.default["/t/280/1.json"]);
      json.tags = ["pending"];
      server.get("/t/281.json", () => {
        return [200, {
          "Content-Type": "application/json"
        }, json];
      });
    });
    (0, _qunit.test)("shows approve button by default", async assert => {
      await (0, _testHelpers.visit)("/t/internationalization-localization/281");
      assert.ok((0, _qunitHelpers.exists)("#topic-footer-button-approve"));
    });
    (0, _qunit.test)("hides approve button if user is self", async assert => {
      (0, _qunitHelpers.updateCurrentUser)({
        id: 1
      });
      await (0, _testHelpers.visit)("/t/this-is-a-test-topic/9/1");
      assert.ok(!(0, _qunitHelpers.exists)("#topic-footer-button-approve"));
    });
  });
});
define("discourse/plugins/discourse-code-review/acceptance/self-approve-mobile-test", ["discourse/tests/helpers/select-kit-helper", "discourse/tests/helpers/qunit-helpers", "discourse/tests/fixtures/topic", "@ember/test-helpers", "qunit", "discourse-common/lib/object"], function (_selectKitHelper, _qunitHelpers, _topic, _testHelpers, _qunit, _object) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"discourse/tests/helpers/select-kit-helper",0,"discourse/tests/helpers/qunit-helpers",0,"discourse/tests/fixtures/topic",0,"@ember/test-helpers",0,"qunit",0,"discourse-common/lib/object"eaimeta@70e063a35619d71f

  (0, _qunitHelpers.acceptance)("review mobile", function (needs) {
    needs.user({
      can_review_code: true
    });
    needs.mobileView();
    needs.settings({
      code_review_approved_tag: "approved",
      code_review_pending_tag: "pending",
      code_review_followup_tag: "followup"
    });
    needs.pretender(server => {
      const json = (0, _object.cloneJSON)(_topic.default["/t/280/1.json"]);
      json.tags = ["pending"];
      server.get("/t/281.json", () => {
        return [200, {
          "Content-Type": "application/json"
        }, json];
      });
    });
    (0, _qunit.test)("shows approve button by default", async assert => {
      await (0, _testHelpers.visit)("/t/internationalization-localization/281");
      const menu = (0, _selectKitHelper.default)(".topic-footer-mobile-dropdown");
      await menu.expand();
      assert.ok(menu.rowByValue("approve").exists());
    });
    (0, _qunit.test)("hides approve button if user is self", async assert => {
      (0, _qunitHelpers.updateCurrentUser)({
        id: 1
      });
      await (0, _testHelpers.visit)("/t/this-is-a-test-topic/9/1");
      const menu = (0, _selectKitHelper.default)(".topic-footer-mobile-dropdown");
      await menu.expand();
      assert.notOk(menu.rowByValue("approve").exists());
    });
  });
});
define("discourse/plugins/discourse-code-review/acceptance/use-activity-approval-pending-test", ["discourse/tests/helpers/qunit-helpers", "@ember/test-helpers", "qunit", "I18n"], function (_qunitHelpers, _testHelpers, _qunit, _I18n) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"discourse/tests/helpers/qunit-helpers",0,"@ember/test-helpers",0,"qunit",0,"I18n"eaimeta@70e063a35619d71f

  (0, _qunitHelpers.acceptance)("User Activity / Approval Pending - empty state", function (needs) {
    const currentUser = "eviltrout";
    needs.user();
    needs.pretender((server, helper) => {
      const emptyResponse = {
        topic_list: {
          topics: []
        }
      };
      server.get(`/topics/approval-pending/${currentUser}.json`, () => {
        return helper.response(emptyResponse);
      });
    });
    (0, _qunit.test)("Shows a blank page placeholder", async function (assert) {
      await (0, _testHelpers.visit)(`/u/${currentUser}/activity/approval-pending`);
      assert.equal((0, _qunitHelpers.query)("div.empty-state span.empty-state-title").innerText, _I18n.default.t("code_review.approval_pending_empty_state_title"));
    });
  });
});
define("discourse/plugins/discourse-code-review/acceptance/user-activity-approval-given-test", ["discourse/tests/helpers/qunit-helpers", "@ember/test-helpers", "qunit", "I18n"], function (_qunitHelpers, _testHelpers, _qunit, _I18n) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"discourse/tests/helpers/qunit-helpers",0,"@ember/test-helpers",0,"qunit",0,"I18n"eaimeta@70e063a35619d71f

  (0, _qunitHelpers.acceptance)("User Activity / Approval Given - empty state", function (needs) {
    const currentUser = "eviltrout";
    needs.user();
    needs.pretender((server, helper) => {
      const emptyResponse = {
        topic_list: {
          topics: []
        }
      };
      server.get(`/topics/approval-given/${currentUser}.json`, () => {
        return helper.response(emptyResponse);
      });
    });
    (0, _qunit.test)("Shows a blank page placeholder", async function (assert) {
      await (0, _testHelpers.visit)(`/u/${currentUser}/activity/approval-given`);
      assert.equal((0, _qunitHelpers.query)("div.empty-state span.empty-state-title").innerText, _I18n.default.t("code_review.approval_given_empty_state_title"));
    });
  });
});//# sourceMappingURL=discourse-code-review_tests.map

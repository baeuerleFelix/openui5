sap.ui.define([
	"sap/ui/thirdparty/qunit-2",
	"sap/ui/mdc/field/FieldBase",
	"sap/ui/mdc/field/content/ContentFactory",
	"sap/ui/mdc/field/content/DefaultContent",
	"sap/ui/mdc/field/content/LinkContent",
	"sap/ui/mdc/field/content/DateContent",
	"sap/ui/mdc/field/content/DateTimeContent",
	"sap/ui/mdc/field/content/TimeContent",
	"sap/ui/mdc/field/content/BooleanContent",
	"sap/ui/mdc/field/content/UnitContent",
	"sap/ui/mdc/field/content/SearchContent",
	"sap/ui/mdc/enum/EditMode",
	"sap/ui/mdc/enum/ContentMode",
	"sap/ui/mdc/Link",
	"sap/m/Text",
	"sap/m/ExpandableText",
	"sap/m/Link",
	"sap/ui/mdc/field/FieldInput",
	"sap/ui/mdc/field/FieldMultiInput",
	"sap/m/TextArea",
	"sap/m/DatePicker",
	"sap/m/DateRangeSelection",
	"sap/m/DateTimePicker",
	"sap/m/SearchField",
	"sap/m/TimePicker"
], function(QUnit, FieldBase, ContentFactory, DefaultContent, LinkContent, DateContent, DateTimeContent, TimeContent, BooleanContent, UnitContent, SearchContent, EditMode, ContentMode, MdcLink, Text, ExpandableText, Link, FieldInput, FieldMultiInput, TextArea, DatePicker, DateRangeSelection, DateTimePicker, SearchField, TimePicker) {
	"use strict";

	QUnit.test("Constructor", function(assert) {
		var oContentFactory = new ContentFactory({});
		assert.ok(oContentFactory, "ContentFactory created using constructor.");

		var oField = new FieldBase({});
		assert.ok(oField._oContentFactory, "ContentFactory created inside FieldBase.");
	});

	QUnit.module("Getters", {
		before: function() {
			this.oField = new FieldBase({});
			this.oContentFactory = this.oField._oContentFactory;
		},
		after: function() {
			delete this.oField;
		}
	});

	QUnit.test("_getEnabled", function(assert) {
		assert.notOk(ContentFactory._getEnabled(null), "Return FALSE if sEditMode = null");
		assert.notOk(ContentFactory._getEnabled(undefined), "Return FALSE if sEditMode = undefined");
		assert.notOk(ContentFactory._getEnabled("Disabled"), "Return FALSE if sEditMode = 'Disabled'");

		assert.ok(ContentFactory._getEnabled("Enabled"), "Return TRUE if sEditMode = 'Enabled'");
		assert.ok(ContentFactory._getEnabled("undefinedEditMode"), "Return TRUE if sEditMode !== 'Disabled'");
	});

	QUnit.test("_getEditable", function(assert) {
		assert.notOk(ContentFactory._getEditable(null), "Return FALSE if sEditMode = null");
		assert.notOk(ContentFactory._getEditable(undefined), "Return FALSE if sEditMode = undefined");
		assert.notOk(ContentFactory._getEditable("undefinedEditMode"), "Return FALSE if sEditMode is a random string");

		assert.ok(ContentFactory._getEditable("Editable"), "Return TRUE if sEditMode = 'Editable'");
		assert.ok(ContentFactory._getEditable("EditableReadOnly"), "Return TRUE if sEditMode = 'EditableReadOnly'");
		assert.ok(ContentFactory._getEditable("EditableDisplay"), "Return TRUE if sEditMode = 'EditableDisplay'");
	});

	QUnit.test("_getDisplayOnly", function(assert) {
		assert.notOk(ContentFactory._getDisplayOnly(null), "Return FALSE if sEditMode = null");
		assert.notOk(ContentFactory._getDisplayOnly(undefined), "Return FALSE if sEditMode = undefined");
		assert.notOk(ContentFactory._getDisplayOnly("Editable"), "Return FALSE if sEditMode = 'Editable'");

		assert.ok(ContentFactory._getDisplayOnly("undefinedEditMode"), "Return TRUE if sEditMode !== 'Editable'");
	});

	QUnit.test("_getEditableUnit", function(assert) {
		assert.notOk(ContentFactory._getEditableUnit(null), "Return FALSE if sEditMode = null");
		assert.notOk(ContentFactory._getEditableUnit(undefined), "Return FALSE if sEditMode = undefined");
		assert.notOk(ContentFactory._getEditableUnit("undefinedEditMode"), "Return FALSE if sEditMode is a random string");

		assert.ok(ContentFactory._getEditableUnit("Editable"), "Return TRUE if sEditMode = 'Editable'");
	});

	QUnit.test("getField", function(assert) {
		assert.equal(this.oContentFactory.getField(), this.oField, "Correct Field returned.");
	});

	QUnit.test("getFieldHelpIcon", function(assert) {
		assert.equal(this.oContentFactory.getFieldHelpIcon(), this.oField._getFieldHelpIcon(), "Correct FieldHelpIcon returned.");
	});

	QUnit.test("getConditionType", function(assert) {
		var done = assert.async();
		this.oField.awaitControlDelegate().then(function() {
			assert.notOk(this.oContentFactory.getConditionType(true), "No ConditionType returned.");
			assert.ok(this.oContentFactory.getConditionType(), "Correct ConditionType returned.");
			done();
		}.bind(this));
	});

	QUnit.test("getConditionsType", function(assert) {
		var done = assert.async();
		this.oField.awaitControlDelegate().then(function() {
			assert.notOk(this.oContentFactory.getConditionsType(true), "No ConditionsType returned.");
			assert.ok(this.oContentFactory.getConditionsType(), "Correct ConditionsType returned.");
			done();
		}.bind(this));
	});

	QUnit.test("getUnitConditionsType", function(assert) {
		var done = assert.async();
		this.oField.awaitControlDelegate().then(function() {
			assert.notOk(this.oContentFactory.getUnitConditionsType(true), "No UnitConditionsType returned.");
			assert.ok(this.oContentFactory.getUnitConditionsType(), "Correct UnitConditionsType returned.");
			done();
		}.bind(this));
	});

	/* Can't check if the handler is correct as it's a local function inside of FieldBase */
	QUnit.test("Event Handlers", function(assert) {
		assert.ok(typeof this.oContentFactory.getHandleTokenUpdate() === "function", "handleTokenUpdate function returned.");
		assert.ok(typeof this.oContentFactory.getHandleContentChange() === "function", "handleContentChange function returned.");
		assert.ok(typeof this.oContentFactory.getHandleContentLiveChange() === "function", "handleContentLiveChange function returned.");
		assert.ok(typeof this.oContentFactory.getHandleValueHelpRequest() === "function", "handleValueHelpRequest function returned.");
		assert.ok(typeof this.oContentFactory.getHandleEnter() === "function", "handleEnter function returned.");
		assert.ok(typeof this.oContentFactory.getHandleContentPress() === "function", "handleContentPress function returned.");
	});

	QUnit.test("getContentMode", function(assert) {
		/* ContentMode DisplayMultiValue */
		assert.equal(this.oContentFactory.getContentMode(null, EditMode.Display, -1, false, []), ContentMode.DisplayMultiValue, "ContentMode 'DisplayMultiValue' returned.");

		/* ContentMode DisplayMultiLine */
		assert.equal(this.oContentFactory.getContentMode(null, EditMode.Display, 1, true, []), ContentMode.DisplayMultiLine, "ContentMode 'DisplayMultiLine' returned.");

		/* ContentMode Display */
		assert.equal(this.oContentFactory.getContentMode(null, EditMode.Display, 1, false, []), ContentMode.Display, "ContentMode 'Display' returned.");

		/* ContentMode Edit */
		assert.equal(this.oContentFactory.getContentMode(null, null, 1, false, []), ContentMode.Edit, "ContentMode 'Edit' returned.");

		/* ContentMode EditMultiValue */
		assert.equal(this.oContentFactory.getContentMode(null, null, -1, false, []), ContentMode.EditMultiValue, "ContentMode 'EditMultiValue' returned.");

		/* ContentMode EditMultiLine */
		assert.equal(this.oContentFactory.getContentMode(null, null, 1, true, []), ContentMode.EditMultiLine, "ContentMode 'EditMultiLine' returned.");

		/* ContentMode EditOperator */
		assert.equal(this.oContentFactory.getContentMode(DateContent, null, 1, false, ["BT"]), ContentMode.EditOperator, "ContentMode 'EditOperator' returned.");
		assert.equal(this.oContentFactory.getContentMode(DateContent, null, 1, false, ["EQ"]), ContentMode.EditOperator, "ContentMode 'EditOperator' returned.");

		/* ContentMode EditForHelp */
		this.oField.setFieldHelp("X"); // just ID needed
		assert.equal(this.oContentFactory.getContentMode(null, EditMode.Editable, 1, false, []), ContentMode.EditForHelp, "ContentMode 'EditForHelp' returned.");
	});

	QUnit.test("getContentType", function(assert) {
		var done = assert.async();
		this.oField.awaitControlDelegate().then(function() {
			var sBaseType = "";
			var iMaxConditions = -1;

			/* DefaultContent */
			assert.equal(this.oContentFactory.getContentType(sBaseType, iMaxConditions, false), DefaultContent, "DefaultContent returned.");
			assert.equal(this.oContentFactory.getContentType(sBaseType, iMaxConditions, true), DefaultContent, "DefaultContent returned.");

			/* LinkContent */
			this.oField.setFieldInfo(new MdcLink({}));
			assert.ok(this.oField.getFieldInfo(), "FieldInfo set.");
			assert.equal(this.oContentFactory.getContentType(sBaseType, iMaxConditions, false), DefaultContent, "DefaultContent returned.");
			assert.equal(this.oContentFactory.getContentType(sBaseType, iMaxConditions, true), LinkContent, "LinkContent returned.");
			this.oField.destroyAggregation("fieldInfo");
			assert.notOk(this.oField.getFieldInfo(), "FieldInfo destroyed.");

			sBaseType = "Date";
			assert.equal(this.oContentFactory.getContentType(sBaseType, iMaxConditions, false), DateContent, "DateContent returned.");
			assert.equal(this.oContentFactory.getContentType(sBaseType, iMaxConditions, true), DateContent, "DateContent returned.");

			sBaseType = "DateTime";
			assert.equal(this.oContentFactory.getContentType(sBaseType, iMaxConditions, false), DateTimeContent, "DateTimeContent returned.");
			assert.equal(this.oContentFactory.getContentType(sBaseType, iMaxConditions, true), DateTimeContent, "DateTimeContent returned.");

			sBaseType = "Time";
			assert.equal(this.oContentFactory.getContentType(sBaseType, iMaxConditions, false), TimeContent, "TimeContent returned.");
			assert.equal(this.oContentFactory.getContentType(sBaseType, iMaxConditions, true), TimeContent, "TimeContent returned.");

			sBaseType = "Boolean";
			assert.equal(this.oContentFactory.getContentType(sBaseType, iMaxConditions, false), BooleanContent, "BooleanContent returned.");
			assert.equal(this.oContentFactory.getContentType(sBaseType, iMaxConditions, true), BooleanContent, "BooleanContent returned.");

			sBaseType = "Unit";
			assert.equal(this.oContentFactory.getContentType(sBaseType, iMaxConditions, false), UnitContent, "UnitContent returned.");
			assert.equal(this.oContentFactory.getContentType(sBaseType, iMaxConditions, true), UnitContent, "UnitContent returned.");

			sBaseType = "";
			iMaxConditions = 1;
			this.oField.getFieldPath = function() {
				return "*Name,Description*";
			};
			assert.equal(this.oContentFactory.getContentType(sBaseType, iMaxConditions, false), SearchContent, "SearchContent returned.");
			assert.equal(this.oContentFactory.getContentType(sBaseType, iMaxConditions, true), SearchContent, "SearchContent returned.");

			done();
		}.bind(this));
	});

	QUnit.module("Other", {
		before: function() {
			this.oField = new FieldBase({});
			this.oContentFactory = this.oField._oContentFactory;
		},
		after: function() {
			delete this.oField;
		}
	});

	QUnit.test("setBoundProperty", function(assert) {
		assert.equal(this.oContentFactory.getBoundProperty(), undefined, "Correct initial sBoundProperty.");

		var sBoundProperty = "test";
		this.oContentFactory.setBoundProperty(sBoundProperty);
		assert.equal(this.oContentFactory.getBoundProperty(), sBoundProperty, "sBoundProperty changed correctly.");
	});

	QUnit.test("_updateLink", function(assert) {
		var oLink = new Link({
			href: "",
			target: "_self"
		});

		assert.equal(oLink.getHref(), "", "Initial Href correct.");
		assert.equal(oLink.getTarget(), "_self", "Initial Target correct.");

		var oLinkItem = {
			href: "test",
			target: "_blank"
		};

		ContentFactory._updateLink(oLink, oLinkItem);

		assert.equal(oLink.getHref(), "test", "Href changed correctly.");
		assert.equal(oLink.getTarget(), "_blank", "Target changed correctly.");
	});

	var fnCreateAllContents = function(oContentType, sContentTypeName) {
		var oCreateDisplayPromise = this.oContentFactory.createContent(oContentType, ContentMode.Display, sContentTypeName + "-" + ContentMode.Display);
		var oCreateDisplayMultiValuePromise = this.oContentFactory.createContent(oContentType, ContentMode.DisplayMultiValue, sContentTypeName + "-" + ContentMode.DisplayMultiValue);
		var oCreateDisplayMultiLinePromise = this.oContentFactory.createContent(oContentType, ContentMode.DisplayMultiLine, sContentTypeName + "-" + ContentMode.DisplayMultiLine);
		var oCreateEditPromise = this.oContentFactory.createContent(oContentType, ContentMode.Edit, sContentTypeName + "-" + ContentMode.Edit);
		var oCreateEditMultiValuePromise = this.oContentFactory.createContent(oContentType, ContentMode.EditMultiValue, sContentTypeName + "-" + ContentMode.EditMultiValue);
		var oCreateEditMutliLinePromise = this.oContentFactory.createContent(oContentType, ContentMode.EditMultiLine, sContentTypeName + "-" + ContentMode.EditMultiLine);
		this.oContentFactory._sOperator = "EQ";
		var oCreateEditOperatorEQPromise = this.oContentFactory.createContent(oContentType, ContentMode.EditOperator, sContentTypeName + "-" + ContentMode.EditOperator + "EQ");
		this.oContentFactory._sOperator = "BT";
		var oCreateEditOperatorBTPromise = this.oContentFactory.createContent(oContentType, ContentMode.EditOperator, sContentTypeName + "-" + ContentMode.EditOperator + "BT");
		var oCreateEditForHelpPromise = this.oContentFactory.createContent(oContentType, ContentMode.EditForHelp, sContentTypeName + "-" + ContentMode.EditForHelp);

		return [
			oCreateDisplayPromise,
			oCreateDisplayMultiValuePromise,
			oCreateDisplayMultiLinePromise,
			oCreateEditPromise,
			oCreateEditMultiValuePromise,
			oCreateEditMutliLinePromise,
			oCreateEditOperatorEQPromise,
			oCreateEditOperatorBTPromise,
			oCreateEditForHelpPromise
		];
	};

	var fnCheckCreatedContent = function(oExpectedContentControl, assert, done) {
		var aContentModes = [
			ContentMode.Display,
			ContentMode.DisplayMultiValue,
			ContentMode.DisplayMultiLine,
			ContentMode.Edit,
			ContentMode.EditMultiValue,
			ContentMode.EditMultiLine,
			ContentMode.EditOperator + " (EQ)",
			ContentMode.EditOperator + " (BT)",
			ContentMode.EditForHelp
		];
		var oContentType = oExpectedContentControl.contentType;
		var sContentTypeName = oExpectedContentControl.contentTypeName;
		var aExpectedControlArrays = oExpectedContentControl.expectedControls;

		var aCreateContentPromises = fnCreateAllContents.call(this, oContentType, sContentTypeName);

		Promise.all(aCreateContentPromises).then(function(aCreatedControlsArrays) {
			aCreatedControlsArrays.forEach(function(aCreatedControls, iIndex) {
				var aExpectedControls = aExpectedControlArrays[iIndex];
				var sContentMode = aContentModes[iIndex];

				aCreatedControls.forEach(function(oCreatedControl) {
					var oExpectedControl = aExpectedControls[aCreatedControls.indexOf(oCreatedControl)];
					assert.ok(oExpectedControl && oCreatedControl instanceof oExpectedControl, "Correct controls returned for ContentType '" + sContentTypeName + "' in ContentMode '" + sContentMode + "'");
				});
			});
			done();
		});
	};

	QUnit.test("createContent", function(assert) {
		var aExpectedContentControls = [
			{
				contentType: BooleanContent,
				contentTypeName: "BooleanContent",
				expectedControls: [
					[Text], // Display
					[null], // DisplayMultiValue
					[null], // DisplayMultiLine
					[FieldInput], // Edit
					[null], // EditMultiValue
					[null], // EditMultiLine
					[null], // EditOperator EQ
					[null], // EditOperator BT
					[FieldInput] // EditForHelp
				]
			},
			{
				contentType: DateContent,
				contentTypeName: "DateContent",
				expectedControls: [
					[Text],
					[ExpandableText],
					[ExpandableText],
					[FieldInput],
					[FieldMultiInput],
					[null],
					[DatePicker],
					[DateRangeSelection],
					[FieldInput]
				]
			},
			{
				contentType: DateTimeContent,
				contentTypeName: "DateTimeContent",
				expectedControls: [
					[Text],
					[ExpandableText],
					[ExpandableText],
					[FieldInput],
					[FieldMultiInput],
					[null],
					[DateTimePicker],
					[null],
					[FieldInput]
				]
			},
			{
				contentType: DefaultContent,
				contentTypeName: "DefaultContent",
				expectedControls: [
					[Text],
					[ExpandableText],
					[ExpandableText],
					[FieldInput],
					[FieldMultiInput],
					[TextArea],
					[null],
					[null],
					[FieldInput]
				]
			},
			{
				contentType: LinkContent,
				contentTypeName: "LinkContent",
				expectedControls: [
					[Link],
					[null],
					[Link],
					[FieldInput],
					[FieldMultiInput],
					[TextArea],
					[null],
					[null],
					[FieldInput]
				]
			},
			{
				contentType: SearchContent,
				contentTypeName: "SearchContent",
				expectedControls: [
					[Text],
					[ExpandableText],
					[ExpandableText],
					[SearchField],
					[null],
					[null],
					[null],
					[null],
					[null]
				]
			},
			{
				contentType: TimeContent,
				contentTypeName: "TimeContent",
				expectedControls: [
					[Text],
					[ExpandableText],
					[ExpandableText],
					[FieldInput],
					[FieldMultiInput],
					[null],
					[TimePicker],
					[DateRangeSelection],
					[FieldInput]
				]
			},
			{
				contentType: UnitContent,
				contentTypeName: "UnitContent",
				expectedControls: [
					[Text],
					[ExpandableText],
					[ExpandableText],
					[FieldInput, FieldInput],
					[FieldMultiInput, FieldInput],
					[null],
					[null],
					[null],
					[FieldInput, FieldInput]
				]
			}
		];
		var done = assert.async(aExpectedContentControls.length);

		this.oField.awaitControlDelegate().then(function() {

			aExpectedContentControls.forEach(function(oExpectedContentControl) {
				fnCheckCreatedContent.call(this, oExpectedContentControl, assert, done);
			}.bind(this));

		}.bind(this));
	});

	QUnit.test("createContent error handling", function(assert) {
		var DefaultContentError = Object.assign({}, DefaultContent);

		DefaultContentError.createDisplay = function () {
			throw new Error("Test Error");
		};

		DefaultContentError.getDisplay = function() {
			return ["sap/ui/mdc/Link"];
		};

		var oExpectedContentControl = {
			contentType: DefaultContentError,
			contentTypeName: "DefaultContent",
			expectedControls: [
				[Text],
				[ExpandableText],
				[ExpandableText],
				[FieldInput],
				[FieldMultiInput],
				[TextArea],
				[null],
				[null],
				[FieldInput]
		]
		};
		var done = assert.async(2);

		this.oField.awaitControlDelegate().then(function() {
			var oContentType = oExpectedContentControl.contentType;
			var sContentTypeName = oExpectedContentControl.contentTypeName;

			assert.throws(
				function() {
					this.oContentFactory.createContent(oContentType, ContentMode.Display, sContentTypeName + "-" + ContentMode.Display + "-ErrorCase");
				},
				/Test Error/,
				"createContent forwards error when module is loaded synchronious.");
			done();

			DefaultContentError.getDisplay = function() {
				return ["sap/ui/mdc/ActionToolbar"];
			};

			this.oContentFactory.createContent(oContentType, ContentMode.Display, sContentTypeName + "-" + ContentMode.Display + "-ErrorCase").catch(function(oError) {
				assert.equal(oError.message, "Test Error", "createContent forwards error when module is loaded asynchronious.");
				done();
			});

		}.bind(this));
	});

	QUnit.start();
});
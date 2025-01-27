/*!
 * ${copyright}
 */
sap.ui.define([
	"sap/base/Log",
	"sap/ui/model/SimpleType",
	"sap/ui/model/odata/type/ODataType"
], function (Log, SimpleType, ODataType) {
	/*global QUnit */
	"use strict";

	//*********************************************************************************************
	QUnit.module("sap.ui.model.odata.type.ODataType", {
		beforeEach : function () {
			this.oLogMock = this.mock(Log);
			this.oLogMock.expects("warning").never();
			this.oLogMock.expects("error").never();
		}
	});

	//*********************************************************************************************
	QUnit.test("basics", function (assert) {
		var oType = new ODataType();

		assert.ok(oType instanceof ODataType, "is an ODataType");
		assert.ok(oType instanceof SimpleType, "is a SimpleType");
		assert.strictEqual(oType.getName(), undefined, "no type name is set");
		assert.strictEqual(oType.sName, undefined, "no sName");

		assert.strictEqual(oType.hasOwnProperty("oFormatOptions"), false, "no format options");
		assert.strictEqual(oType.hasOwnProperty("oConstraints"), false, "no constraints");

		assert.ok(ODataType.prototype.setConstraints !==
			SimpleType.prototype.setConstraints, "type overwrites setConstraints");
		oType.setConstraints({foo : "bar"});
		assert.strictEqual(oType.oConstraints, undefined, "no constraints");

		assert.ok(ODataType.prototype.setFormatOptions !==
			SimpleType.prototype.setFormatOptions, "type overwrites setFormatOptions");
		oType.setFormatOptions({foo : "bar"});
		assert.strictEqual(oType.oFormatOptions, undefined, "no format options");
	});

	//*********************************************************************************************
	QUnit.test("getPlaceholderText", function (assert) {
		var oType = new ODataType();

		// code under test
		assert.strictEqual(oType.getPlaceholderText(), undefined);

		oType.getFormat = function () {};
		var oTypeMock = this.mock(oType);
		oTypeMock.expects("getFormat").withExactArgs().returns({/*format has no getPlaceholderText*/});

		// code under test
		assert.strictEqual(oType.getPlaceholderText(), undefined);

		var oFormat = {getPlaceholderText: function () {}};
		oTypeMock.expects("getFormat").withExactArgs().twice().returns(oFormat);
		this.mock(oFormat).expects("getPlaceholderText").withExactArgs().returns("~placeholder");

		// code under test
		assert.strictEqual(oType.getPlaceholderText(), "~placeholder");
	});
});
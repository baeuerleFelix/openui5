/*!
 * ${copyright}
 */
sap.ui.define([
	"sap/ui/mdc/field/content/DefaultContent",
	"sap/ui/mdc/enum/BaseType",
	"sap/ui/mdc/util/DateUtil",
	"sap/ui/mdc/condition/FilterOperatorUtil",
	"sap/ui/mdc/condition/Operator",
	"sap/ui/core/library",
	"sap/ui/model/Filter"
], function(
	DefaultContent,
	BaseType,
	DateUtil,
	FilterOperatorUtil,
	Operator,
	coreLibrary,
	Filter) {
	"use strict";

	var CalendarType = coreLibrary.CalendarType;
	var StandardDynamicDateRangeKeys;
	var DynamicDateFormat;

	/**
	 * Object-based definition of the date content type that is used in the {@link sap.ui.mdc.field.content.ContentFactory}.
	 * This defines which controls to load and create for a given {@link sap.ui.mdc.enum.ContentMode}.
	 * @namespace
	 * @author SAP SE
	 * @private
	 * @ui5-restricted sap.ui.mdc
	 * @experimental As of version 1.87
	 * @since 1.87
	 * @alias sap.ui.mdc.field.content.DateContent
	 * @extends sap.ui.mdc.field.content.DefaultContent
	 */
	var DateContent = Object.assign({}, DefaultContent, {
		getEditMultiLine: function() {
			return [null];
		},
		getEdit: function() {
			return ["sap/m/DynamicDateRange", "sap/ui/mdc/condition/OperatorDynamicDateOption", "sap/ui/mdc/field/DynamicDateRangeConditionsType", "sap/m/library", "sap/m/DynamicDateFormat"];
		},
		getEditOperator: function() {
			return {
				"EQ": { name: "sap/m/DatePicker", create: this._createDatePickerControl }, // TODO: how to check custom operators
				"BT": { name: "sap/m/DateRangeSelection", create: this._createDateRangePickerControl }
			};
		},
		getEditForHelp: function() {
			return DefaultContent.getEdit.apply(this, arguments);
		},
		getUseDefaultFieldHelp: function() {
			return { name: "defineConditions", oneOperatorSingle: false, oneOperatorMulti: true, single: false, multi: true };
		},
		createEditMultiLine: function() {
			throw new Error("sap.ui.mdc.field.content.DateContent - createEditMultiLine not defined!");
		},
		_createDatePickerControl: function(oContentFactory, aControlClasses, sId) {
			var DatePicker = aControlClasses[0];
			var oConditionsType = oContentFactory.getConditionsType();
			oContentFactory.setHideOperator(true);

			this._adjustDataTypeForDate(oContentFactory);

			var oDatePicker = new DatePicker(sId, {
				value: { path: "$field>/conditions", type: oConditionsType },
				displayFormat: oContentFactory.getDisplayFormat(),
				valueFormat: oContentFactory.getValueFormat(),
				placeholder: "{$field>/placeholder}",
				textAlign: "{$field>/textAlign}",
				textDirection: "{$field>/textDirection}",
				required: "{$field>/required}",
				editable: { path: "$field>/editMode", formatter: oContentFactory.getMetadata()._oClass._getEditable },
				enabled: { path: "$field>/editMode", formatter: oContentFactory.getMetadata()._oClass._getEnabled },
				valueState: "{$field>/valueState}", // TODO: own ValueState handling?
				valueStateText: "{$field>/valueStateText}",
				width: "100%",
				tooltip: "{$field>/tooltip}",
				liveChange: oContentFactory.getHandleContentLiveChange(),
				change: oContentFactory.getHandleContentChange()
			});

			if (oDatePicker.setDisplayFormatType) {
				// TimePicker has no displayFormatType
				oDatePicker.setDisplayFormatType(oContentFactory.getCalendarType());
			}

			if (oDatePicker.setSecondaryCalendarType) {
				oDatePicker.setSecondaryCalendarType(oContentFactory.getSecondaryCalendarType());
			}

			oDatePicker._setPreferUserInteraction(true);
			oContentFactory.setAriaLabelledBy(oDatePicker);

			return [oDatePicker];
		},
		_createDateRangePickerControl: function(oContentFactory, aControlClasses, sId) {
			var DateRangeSelection = aControlClasses[0];
			var oConditionsType = oContentFactory.getConditionsType();
			this._adjustDataTypeForDate(oContentFactory);

			var oDateRangeSelection = new DateRangeSelection(sId, {
				value: { path: "$field>/conditions", type: oConditionsType },
				displayFormat: oContentFactory.getDisplayFormat(),
				valueFormat: oContentFactory.getValueFormat(),
				delimiter: "...",
				displayFormatType: oContentFactory.getCalendarType(),
				secondaryCalendarType: oContentFactory.getSecondaryCalendarType(),
				placeholder: "{$field>/placeholder}",
				textAlign: "{$field>/textAlign}",
				textDirection: "{$field>/textDirection}",
				required: "{$field>/required}",
				editable: { path: "$field>/editMode", formatter: oContentFactory.getMetadata()._oClass._getEditable },
				enabled: { path: "$field>/editMode", formatter: oContentFactory.getMetadata()._oClass._getEnabled },
				valueState: "{$field>/valueState}", // TODO: own ValueState handling?
				valueStateText: "{$field>/valueStateText}",
				width: "100%",
				tooltip: "{$field>/tooltip}",
				liveChange: oContentFactory.getHandleContentLiveChange(),
				change: oContentFactory.getHandleContentChange()
			});

			oDateRangeSelection._setPreferUserInteraction(true);
			oContentFactory.setAriaLabelledBy(oDateRangeSelection);

			return [oDateRangeSelection];
		},
		_adjustDataTypeForDate: function(oContentFactory) {
			var oType = oContentFactory.retrieveDataType();
			var oFormatOptions = oType.getFormatOptions();

			// if type is used from binding (Field) or format options are not set correctly -> create new type
			this._getDatePattern(oContentFactory, oFormatOptions); // to determine pattern
			if (!oFormatOptions || oFormatOptions.style ||
				!oFormatOptions.pattern || oFormatOptions.pattern !== oContentFactory.getValueFormat() ||
				!oFormatOptions.calendarType || oFormatOptions.calendarType !== CalendarType.Gregorian) {
				oContentFactory.setDateOriginalType(oContentFactory.getDataType());
				oContentFactory.setDataType(DateUtil.createInternalType(oType, oContentFactory.getValueFormat()));
				oContentFactory.updateConditionType();
			}
		},
		/*
		 * To avoid data loss for DatePicker (e.g. in short Year number foe 1918) use ISO format as ValueFormat in DatePickers
		 */
		_getDatePattern: function(oContentFactory, oFormatOptions) {
			var sBaseType = oContentFactory.getField().getBaseType();

			switch (sBaseType) {
				case BaseType.Date:
					oContentFactory.setValueFormat("yyyy-MM-dd");
					break;

				case BaseType.DateTime:
					oContentFactory.setValueFormat("yyyy-MM-dd'T'HH:mm:ss");
					break;

				case BaseType.Time:
					oContentFactory.setValueFormat("HH:mm:ss");
					break;

				default:
					return;
			}

			// TODO: move this logic to delegate???
			oContentFactory.setDisplayFormat("medium");
			if (oFormatOptions) {
				if (oFormatOptions.style) {
					oContentFactory.setDisplayFormat(oFormatOptions.style);
				} else if (oFormatOptions.pattern) {
					oContentFactory.setDisplayFormat(oFormatOptions.pattern);
				}
				if (oFormatOptions.calendarType) {
					oContentFactory.setCalendarType(oFormatOptions.calendarType);
				}
				if (oFormatOptions.secondaryCalendarType) {
					oContentFactory.setSecondaryCalendarType(oFormatOptions.secondaryCalendarType);
				}
			}
		},
		createEdit: function(oContentFactory, aControlClasses, sId) {

			var DynamicDateRange = aControlClasses[0];
			var OperatorDynamicDateOption = aControlClasses[1];
			var DynamicDateRangeConditionsType = aControlClasses[2];
			var mLibrary = aControlClasses[3];

			if (!StandardDynamicDateRangeKeys || !DynamicDateFormat) {
				StandardDynamicDateRangeKeys = mLibrary.StandardDynamicDateRangeKeys;
				DynamicDateFormat = aControlClasses[4];
			}

			var oConditionsType = oContentFactory.getConditionsType(false, DynamicDateRangeConditionsType);
			var fnGetDateRangeStandardOptions = function (aOperators) {
				return this._getDateRangeStandardOptions(aOperators, oContentFactory);
			}.bind(this);
			var oCustomOperatorFilter = new Filter({
				path: "/",
				test: function (sOperator) {
					var sBaseType = oContentFactory.getField().getBaseType();
					return !this._getDateRangeStandardOption(sOperator, sBaseType);
				}.bind(this)
			});
			var fnCreateDateRangeCustomOptions = function (sAggegationId, oBindingContext) {
				var sBaseType = oContentFactory.getField().getBaseType();
				var sOperator = oBindingContext.getObject();
				return this._createOperatorDynamicDateOption(sOperator, oContentFactory, OperatorDynamicDateOption, sBaseType, sId);
			}.bind(this);

			var oDynamicDateRange = new DynamicDateRange(sId, {
				value: { path: "$field>/conditions", type: oConditionsType },
				formatter: this._getDateRangeFormatter(oContentFactory),
				placeholder: "{$field>/placeholder}",
//				textAlign: "{$field>/textAlign}",	// this is currently not supported by the DynamicDateRange
//				textDirection: "{$field>/textDirection}", // this is currently not supported by the DynamicDateRange
				required: "{$field>/required}",
				editable: { path: "$field>/editMode", formatter: oContentFactory.getMetadata()._oClass._getEditable },
				enabled: { path: "$field>/editMode", formatter: oContentFactory.getMetadata()._oClass._getEnabled },
				valueState: "{$field>/valueState}",
				valueStateText: "{$field>/valueStateText}",
				width: "100%",
				tooltip: "{$field>/tooltip}",
				// enableGroupHeaders: false,	// disable the grouping of the options
				standardOptions: {path: "$field>/_operators", formatter: fnGetDateRangeStandardOptions},
				customOptions: {path: "$field>/_operators", filters: oCustomOperatorFilter, factory: fnCreateDateRangeCustomOptions},
				// liveChange: oContentFactory.getHandleContentLiveChange(), this event does not exist for DynamicDateRange
				change: oContentFactory.getHandleContentChange()
			});

			oContentFactory.setAriaLabelledBy(DynamicDateRange);

			return [oDynamicDateRange];

		},
		createEditForHelp: function(oContentFactory, aControlClasses, sId) {
			return DefaultContent.createEdit.apply(this, arguments);
		},

		_getDateRangeStandardOptions: function(aOperators, oContentFactory) {
			if (!aOperators || aOperators.length === 0) {
				aOperators = oContentFactory.getField().getSupportedOperators(); // to use default operators if none given
			}
			var aOptions = [];
			var sBaseType = oContentFactory.getField().getBaseType();

			for (var i = 0; i < aOperators.length; i++) {
				var sOperator = aOperators[i];
				var sOption = this._getDateRangeStandardOption(sOperator, sBaseType);
				if (sOption) {
					aOptions.push(sOption);
				}
			}

			return aOptions;
		},

		_getDateRangeStandardOption: function(sOperator, sBaseType) {
			var oOperator = FilterOperatorUtil.getOperator(sOperator);
			return FilterOperatorUtil.getDynamicDateOptionForOperator(oOperator, StandardDynamicDateRangeKeys, sBaseType);
		},

		_createOperatorDynamicDateOption: function(sOperator, oContentFactory, OperatorDynamicDateOption, sBaseType, sId) {
			var oOperator = FilterOperatorUtil.getOperator(sOperator);
			var oOption;

			if (oOperator) {
				var sOption = FilterOperatorUtil.getCustomDynamicDateOptionForOperator(oOperator, sBaseType);
				var oType = oContentFactory.retrieveDataType(); // TODO: do we need to create data type right now?
				var aValueTypes = [];

				for (var i = 0; i < oOperator.valueTypes.length; i++) {
					if (oOperator.valueTypes[i] && oOperator.valueTypes[i] !== Operator.ValueType.Static) {
						aValueTypes.push("custom"); // provide value as it is to use type to format and parse // TODO: only if custom control?
					}
				}

				oOption = new OperatorDynamicDateOption(sId + "--" + sOption, {key: sOption, operator: oOperator, type: oType, baseType: sBaseType, valueTypes: aValueTypes});
			}
			return oOption;
		},

		_getDateRangeFormatter: function(oContentFactory) {
			var oType = oContentFactory.retrieveDataType(); // TODO: do we need to create data type right now?
			var sBaseType = oContentFactory.getField().getBaseType();
			var oFormatOptions = oType.getFormatOptions();
			var oUsedFormatOptions = {};
			var oDateRangeFormatOptions = {};

			if (oFormatOptions.style) {
				oUsedFormatOptions.style = oFormatOptions.style;
			} else if (oFormatOptions.pattern) {
				oUsedFormatOptions.pattern = oFormatOptions.pattern;
			}

			if (sBaseType === BaseType.DateTime) {
				oDateRangeFormatOptions.datetime = oUsedFormatOptions;
			}

			// use Date FormatOptions anyhow for Operations supporting only dates
			oDateRangeFormatOptions.date = oUsedFormatOptions;

			return DynamicDateFormat.getInstance(oDateRangeFormatOptions);
		}
	});

	return DateContent;
});
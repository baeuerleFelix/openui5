/*!
 * ${copyright}
 */
sap.ui.define([
	"sap/ui/mdc/AggregationBaseDelegate"
], function (AggregationBaseDelegate) {
	"use strict";

	/**
	 * @class Base Delegate for {@link sap.ui.mdc.Chart Chart}. Extend this object in your project to use all functionalities of the {@link sap.ui.mdc.Chart Chart}.<br>
	 * This class provides method calls, that are called by the <code>Chart</code> for specific operations and overwrite the internal behavior.
	 *
	 * @author SAP SE
	 * @namespace
	 * @alias module:sap/ui/mdc/ChartDelegate
	 * @extends module:sap/ui/mdc/AggregationBaseDelegate
	 * @since 1.88
	 * @private
	 * @ui5-restricted sap.fe
	 * @MDC_PUBLIC_CANDIDATE
	 *
	 */
	var ChartDelegate = Object.assign({}, AggregationBaseDelegate);

	/**
	 * Notifies the inner chart to zoom in.
	 * @param {sap.ui.mdc.Chart} oMDCChart Reference to the chart
	 *
	 * @private
	 * @ui5-restricted sap.fe, sap.ui.mdc
	 * @MDC_PUBLIC_CANDIDATE
	 */
	ChartDelegate.zoomIn = function (oMDCChart) {
	};

	/**
	 * Notifies the inner chart to zoom out.
	 * @param {sap.ui.mdc.Chart} oMDCChart Reference to the chart
	 *
	 * @private
	 * @ui5-restricted sap.fe, sap.ui.mdc
	 * @MDC_PUBLIC_CANDIDATE
	 */
	ChartDelegate.zoomOut = function (oMDCChart) {
	};

	/**
	 * Chart <code>ZoomState</code> type.
	 *
	 * @typedef {object} sap.ui.mdc.chart.ZoomState
	 * @property {boolean} enabled Zooming is enabled if set to <code>true</code>
	 * @property {number} currentZoomLevel Current zoom level of the chart in percent (between 0 and 1)
	 *
	 * @private
	 * @ui5-restricted sap.fe, sap.ui.mdc
	 * @MDC_PUBLIC_CANDIDATE
	 */

	/**
	 * Gets the current zooming information for the inner chart.
	 * @param {sap.ui.mdc.Chart} oMDCChart Reference to the chart
	 * @returns {sap.ui.mdc.chart.ZoomState} Current <code>ZoomState</code> of the inner chart
	 *
	 * @private
	 * @ui5-restricted sap.fe, sap.ui.mdc
	 * @MDC_PUBLIC_CANDIDATE
	 */
	ChartDelegate.getZoomState = function (oMDCChart) {
		// return { enable: false, currentZoomLevel: 1 };
	};

	/**
	 * Returns the filter delegate of the chart that provides basic filter functionality, such as adding filter fields.
	 * <b>Note:</b> The functionality provided in this delegate acts as a subset of a <code>FilterBarDelegate</code> to enable the chart for inbuilt
	 * filtering.
	 *
	 * @example <caption>Example usage of <code>getFilterDelegate</code></caption>
	 * oFilterDelegate = {
	 * 		addItem: function() {
	 * 			var oFilterFieldPromise = new Promise(...);
	 * 			return oFilterFieldPromise;
	 * 		}
	 * }
	 * @returns {{addItem: (function(string, sap.ui.mdc.Table): Promise<sap.ui.mdc.FilterField>)}} Object for the chart filter personalization
	 * @protected
	 */
	ChartDelegate.getFilterDelegate = function () {
		return {

			/**
			 * Creates an instance of a <code>sap.ui.mdc.FilterField</code>.
			 *
			 * @param {string} sPropertyName The property name
			 * @param {sap.ui.mdc.Control} oControl Instance of the control
			 * @returns {Promise<sap.ui.mdc.FilterField>} <code>Promise</code> that resolves with an instance of a <code>sap.ui.mdc.FilterField</code>.
			 * @see sap.ui.mdc.AggregationBaseDelegate#addItem
			 */
			addItem: function (sPropertyName, oControl) {
				return Promise.resolve();
			},

			/**
             * This method is called when an <code>AddCondition</code> change is applied by the personalization.
             * It can be used to perform tasks, such as caching information or modifying the control.
             *
             * @param {string} sPropertyName Name of a property
             * @param {sap.ui.mdc.Control} oControl Instance of the control
             * @param {Object} mPropertyBag Instance of property bag from the SAPUI5 flexibility API
             * @returns {Promise} <code>Promise</code> that resolves once the properyInfo property has been updated
             *
             * @experimental
             * @private
             * @ui5-restricted sap.fe, sap.ui.mdc
             */
			addCondition: function (sPropertyName, oControl, mPropertyBag) {
				return Promise.resolve();
			},

            /**
             * This method is called when a <code>RemoveCondition</code> change is applied by the personalization.
             * It can be used to perform tasks, such as caching information or modifying the control.
             *
             * @param {string} sPropertyName Name of a property
             * @param {sap.ui.mdc.Control} oControl Instance of the control
             * @param {Object} mPropertyBag Instance of property bag from the SAPUI5 flexibility API
             * @returns {Promise} <code>Promise</code> that resolves once the properyInfo property has been updated
             *
             * @experimental
             * @private
             * @ui5-restricted sap.fe, sap.ui.mdc
             */
			removeCondition: function (sPropertyName, oControl, mPropertyBag) {
				return Promise.resolve();
			}
		};
	};

	/**
	 * Creates a new chart item for a given property name and updates the inner chart.<br>
	 * <b>Note:</b> This does <b>not</b> add the chart item to the <code>Items</code> aggregation of the chart.
	 * Called and used by <code>p13n</code>.
	 * @param {string} sPropertyName The name of the property added
	 * @param {sap.ui.mdc.Chart} oMDCChart Reference to the chart to add the property to
	 * @param {object} mPropertyBag The property bag containing useful information about the change
	 * @param {string} [sRole] New role for given item
	 * @returns {Promise} <code>Promise</code> that resolves with new chart <code>Item</code> as parameter
	 *
	 * @private
	 * @ui5-restricted sap.fe, sap.ui.mdc
	 * @MDC_PUBLIC_CANDIDATE
	 */
	ChartDelegate.addItem = function (sPropertyName, oMDCChart, mPropertyBag, sRole) {
	};

	/**
	 * Removes an existing chart item for a given property name and updates the inner chart.
	 * Called and used by <code>p13n</code>.
	 * @param {string} oProperty Name of the property removed
	 * @param {sap.ui.mdc.Chart} oMDCChart Reference to the chart from which property is removed
	 * @returns {Promise<boolean>} <code>Promise</code> containing information whether the item was deleted
	 *
	 * @private
	 * @ui5-restricted sap.fe, sap.ui.mdc
	 * @MDC_PUBLIC_CANDIDATE
	 */
	ChartDelegate.removeItem = function (oProperty, oMDCChart) {
		return Promise.resolve(true);
	};

    /**
     * Event handler for <code>SelectionDetails</code> popover.
     *
     * @typedef {object} sap.ui.mdc.chart.SelectionDetails
     * @property {string} eventId  ID of the selection event
     * @property {sap.ui.core.Control} listener Reference to inner chart
     *
     * @private
     * @ui5-restricted sap.fe, sap.ui.mdc
     * @MDC_PUBLIC_CANDIDATE
     */

	/**
	 * Returns the event handler for <code>SelectionDetails</code> as an object.
	 *
	 * @param {sap.ui.mdc.Chart} oMDCChart Reference to the chart
	 * @returns {sap.ui.mdc.chart.SelectionDetails} Event handler for SelectionDetails
	 *
	 * @private
	 * @ui5-restricted sap.fe, sap.ui.mdc
	 * @MDC_PUBLIC_CANDIDATE
	 */
	ChartDelegate.getInnerChartSelectionHandler = function (oMDCChart) {
	};

	/**
	 * Sets the visibility of the legend.
	 * <b>Note:</b> This function is called by the chart only. You must not call it directly but use {@link sap.ui.mdc.Chart#setLegendVisible LegendVisible} instead.
	 *
	 * @param {sap.ui.mdc.Chart} oMDCChart Chart for which the legend visibility is set
	 * @param {boolean} bVisible Shows legend, if set to <code>true</code>
	 *
	 * @private
	 * @ui5-restricted sap.fe, sap.ui.mdc
	 * @MDC_PUBLIC_CANDIDATE
	 */
	ChartDelegate.setLegendVisible = function (oMDCChart, bVisible) {
	};

	/**
	 * Inserts a chart item (measure / dimension for <code>sap.chart.Chart</code>) into the inner chart.<br>
	 * This function is called by the chart for a change of the <code>Items</code> aggregation.<br>
	 * <b>Note:</b> Do not call this yourself, as it would not be synced with the chart, but insert the item into the chart instead.
	 *
	 * @param {sap.ui.mdc.Chart} oMDCChart Chart into which the item is insert
	 * @param {sap.ui.mdc.chart.Item} oMDCChartItem Chart item that is inserted into the inner chart
	 * @param {int} iIndex The index into which the chart item is inserted
	 *
	 * @private
	 * @ui5-restricted sap.fe, sap.ui.mdc
	 * @MDC_PUBLIC_CANDIDATE
	 */
	ChartDelegate.insertItemToInnerChart = function (oMDCChart, oMDCChartItem, iIndex) {
	};

	/**
	 * Removes a chart item (measure / dimension for <code>sap.chart.Chart</code>) from the inner chart.<br>
	 * This function is called by the chart for a change of the <code>Items</code> aggregation.<br>
	 * <b>Note:</b> Do not call this yourself, as it would not be synced with the chart, but remove the item from the chart instead.
	 *
	 * @param {sap.ui.mdc.Chart} oMDCChart Chart from which the item is removed
	 * @param {sap.ui.mdc.chart.Item} oMDCChartItem Chart item that is removed from the inner chart
	 *
	 * @private
	 * @ui5-restricted sap.fe, sap.ui.mdc
	 * @MDC_PUBLIC_CANDIDATE
	*/
	ChartDelegate.removeItemFromInnerChart = function (oMDCChart, oMDCChartItem) {
	};

	/**
	 * Loads the required libraries and creates the inner chart.
	 *
	 * @param {sap.ui.mdc.Chart} oMDCChart Reference to the chart
	 * @returns {Promise} Resolved once the inner chart has been initialized
	 *
	 * @private
	 * @ui5-restricted sap.fe, sap.ui.mdc
	 * @MDC_PUBLIC_CANDIDATE
	 */
	ChartDelegate.initializeInnerChart = function (oMDCChart) {
	};

	/**
	 * Creates the initial content for the chart before the metadata is retrieved.<br>
	 * This can be used by chart libraries that can already show some information without the actual data (for example, axis labels, legend, ...).
	 *
	 * @param {sap.ui.mdc.Chart} oMDCChart Reference to the chart
	 *
	 * @private
	 * @ui5-restricted sap.fe, sap.ui.mdc
	 * @MDC_PUBLIC_CANDIDATE
	 */
	ChartDelegate.createInitialChartContent = function (oMDCChart) {
	};

	/**
	 * Returns the instance of the inner chart.
	 *
	 * @returns {sap.core.Control} Instance of the inner chart
	 *
	 * @private
	 * @ui5-restricted sap.fe, sap.ui.mdc
	 * @MDC_PUBLIC_CANDIDATE
	 */
	ChartDelegate.getInnerChart = function () {
	};

	/**
	 * Chart <code>ChartTypeObject</code> type.
	 *
	 * @typedef {object} sap.ui.mdc.chart.ChartTypeObject
	 * @property {string} key Unique key of the chart type
	 * @property {sap.ui.core.URI} icon URI for the icon for the current chart type
	 * @property {string} text Name of the current chart type
	 * @property {boolean} selected Whether the chart type is the one currently used
	 *
	 * @private
	 * @ui5-restricted sap.fe, sap.ui.mdc
	 * @MDC_PUBLIC_CANDIDATE
	 */

	/**
	 * Returns the current chart type.
	 *
	 * @returns {sap.ui.mdc.chart.ChartTypeObject[]} Information about the current chart type
	 * @throws {Error} Error thrown if inner chart is not initialized yet
	 *
	 * @private
	 * @ui5-restricted sap.fe, sap.ui.mdc
	 * @MDC_PUBLIC_CANDIDATE
	 */
	ChartDelegate.getChartTypeInfo = function () {
	};

	/**
	 * Gets the available chart types for the current state of the inner chart.
	 *
	 * @param {sap.ui.mdc.Chart} oMDCChart Reference to the chart
	 * @returns {sap.ui.mdc.chart.ChartTypeObject[]} Array containing the currently available chart types
	 *
	 * @private
	 * @ui5-restricted sap.fe, sap.ui.mdc
	 * @MDC_PUBLIC_CANDIDATE
	 */
	ChartDelegate.getAvailableChartTypes = function (oMDCChart) {
	};


	/**
	 * Char <code>ChartTypeLayoutConfig</code> type.
	 *
	 * @typedef {object} sap.ui.mdc.chart.ChartTypeLayoutConfig
	 * @property {string} key identifier for the chart type
	 * @property {string[]} allowedLayoutOptions Layout configuration of chart type
	 *
	 * @private
	 * @ui5-restricted sap.fe, sap.ui.mdc
	 * @MDC_PUBLIC_CANDIDATE
	 */

	/**
	 * This function is used by <code>P13n</code> to determine which chart type supports which layout options.
	 * There might be chart types that do not support certain layout options (for example, "Axis3").
	 *
	 * @returns {sap.ui.mdc.chart.ChartTypeLayoutConfig[]} chart type layout config
	 *
	 * @private
	 * @ui5-restricted sap.fe, sap.ui.mdc
	 * @MDC_PUBLIC_CANDIDATE
	 */
	ChartDelegate.getChartTypeLayoutConfig = function () {
	};

	/**
	 * Returns the current drilling stack of the inner chart.<br>
	 * The returned objects need at least a <code>label</code> and a <code>name</code> property.<br>
	 * Also, a <code>dimension</code> array containing the dimension drill stack at the current level is required.
	 *
	 * @param {sap.ui.mdc.Chart} oMDCChart Reference to the chart
	 * @returns {array} Array containing the drill stack
	 *
	 * @private
	 * @ui5-restricted sap.fe, sap.ui.mdc
	 * @MDC_PUBLIC_CANDIDATE
	 */
	ChartDelegate.getDrillStack = function (oMDCChart) {
	};

	/**
	 * Returns all sorted dimensions of an inner chart.
	 * This is used to determine possible drill-down dimensions in the drill-down popover of the chart.
	 *
	 * @param {sap.ui.mdc.Chart} oMDCChart Reference to the chart
	 * @returns {Promise<sap.ui.mdc.chart.Item[]>} <code>Promise</code> containing an array of dimensions that is sorted
	 *
	 * @private
	 * @ui5-restricted sap.fe, sap.ui.mdc
	 * @MDC_PUBLIC_CANDIDATE
	 */
	ChartDelegate.getSortedDimensions = function (oMDCChart) {
	};

	/**
	 * Determines which MDC items are drillable and returns them.
	 * This function is used by the breadcrumb navigation.
	 *
	 * @param {sap.ui.mdc.Chart} oMDCChart Reference to the chart
	 * @returns {sap.ui.mdc.chart.Item[]} Array of MDC items that are drillable
	 *
	 * @private
	 * @ui5-restricted sap.fe, sap.ui.mdc
	 * @MDC_PUBLIC_CANDIDATE
	 */
	ChartDelegate.getDrillableItems = function (oMDCChart) {
	};

	/**
	 * Sets the chart type of the inner chart.
	 * This function is called by the chart when the <code>chartType</code> property is updated.
	 *  <b>Note:</b> This function is called by the chart only. You must not call it directly but use {@link sap.ui.mdc.Chart#setChartType setChartType} instead.
	 *
	 * @param {string} sChartType New chart type
	 *
	 * @private
	 * @ui5-restricted sap.fe, sap.ui.mdc
	 * @MDC_PUBLIC_CANDIDATE
	 */
	ChartDelegate.setChartType = function (sChartType) {
	};

	/**
	 * This method is called to update the no data structure.
	 *
	 * @param {sap.ui.mdc.Chart} oMDCChart Reference to the chart
	 *
	 * @private
	 * @ui5-restricted sap.fe, sap.ui.mdc
	 * @MDC_PUBLIC_CANDIDATE
	 */
	ChartDelegate.changedNoDataStruct = function (oMDCChart) {
	};

	/**
	 * Sets a "No Data" text for the inner chart.
	 *
	 * @param {sap.ui.mdc.Chart} oMDCChart Reference to chart
	 * @param {string} sText Text to show when there is no data displayed in the chart
	 *
	 * @private
	 * @ui5-restricted sap.fe, sap.ui.mdc
	 * @MDC_PUBLIC_CANDIDATE
	 */
	ChartDelegate.setNoDataText = function (oMDCChart, sText) {
	};

	/**
	 * Binds the inner chart to the back-end data and creates the inner chart content.
	 *
	 * @param {sap.ui.mdc.Chart} oMDCChart Reference to the chart
	 * @param {function} fnCallbackDataLoaded Callback function when data is loaded
	 *
	 * @private
	 * @ui5-restricted sap.fe, sap.ui.mdc
	 * @MDC_PUBLIC_CANDIDATE
	 */
	ChartDelegate.createInnerChartContent = function (oMDCChart, fnCallbackDataLoaded) {
	};


	/**
	 * Checks the binding of the chart and rebinds it if required.
	 *
	 * @param {sap.ui.mdc.Chart} oMDCChart Reference to the chart
	 * @param {sap.ui.base.ManagedObject.AggregationBindingInfo} oBindingInfo BindingInfo of the chart
	 *
	 * @private
	 * @ui5-restricted sap.fe, sap.ui.mdc
	 * @MDC_PUBLIC_CANDIDATE
	 */
	ChartDelegate.rebind = function (oMDCChart, oBindingInfo) {
	};

	/**
	 * Returns the information whether the inner chart is currently bound.
	 *
	 * @param {sap.ui.mdc.Chart} oMDCChart Reference to the chart
	 * @returns {boolean} <code>true</code> if inner chart is bound; <code>false</code> if not
	 *
	 * @private
	 * @ui5-restricted sap.fe, sap.ui.mdc
	 * @MDC_PUBLIC_CANDIDATE
	 */
	ChartDelegate.getInnerChartBound = function (oMDCChart) {
	};


	/**
	 * Returns the binding info for given chart.
	 *
	 * @param {sap.ui.mdc.Chart} oMDCChart Reference to the chart
	 * @returns {sap.ui.base.ManagedObject.AggregationBindingInfo} BindingInfo object
	 *
	 * @private
	 * @ui5-restricted sap.fe, sap.ui.mdc
	 * @MDC_PUBLIC_CANDIDATE
	 */
	ChartDelegate.getBindingInfo = function (oMDCChart) {
	};

	/**
	 * Updates the binding info with the relevant filters.
	 *
	 * @param {sap.ui.mdc.Chart} oMDCChart Reference to the chart
	 * @param {sap.ui.base.ManagedObject.AggregationBindingInfo} oBindingInfo Binding info of the chart
	 *
	 * @private
	 * @ui5-restricted sap.fe, sap.ui.mdc
	 * @MDC_PUBLIC_CANDIDATE
	 */
	ChartDelegate.updateBindingInfo = function (oMDCChart, oBindingInfo) {
	};

	/**
	 * Sets tooltips to visible/invisible for the inner chart.
	 * <b>Note:</b> This function is called by the chart only. You must not call it directly but use {@link sap.ui.mdc.Chart#setShowChartTooltip setShowChartTooltip} instead.
	 *
	 * @param {sap.ui.mdc.Chart} oMDCChart Reference to the chart
	 * @param {boolean} bVisible <code>true</code> for visible, <code>false</code> for invisible
	 *
	 * @private
	 * @ui5-restricted sap.fe, sap.ui.mdc
	 * @MDC_PUBLIC_CANDIDATE
	 */
	ChartDelegate.setChartTooltipVisibility = function (oMDCChart, bVisible) {
	};

	/**
	 * This function returns an ID that should be used in the internal chart for the Measure/Dimension.<br>
	 * For standard cases, this is just the ID of the property.<br>
	 * If it is necessary to use another ID internally inside the chart (for example, for duplicate property IDs) this method can be overwritten.<br>
	 * In this case, <code>getPropertyFromNameAndKind</code> needs to be overwritten as well.
	 *
	 * @param {string} sName ID of the property
	 * @param {string} sKind Type of the property (Measure/Dimension)
	 * @param {sap.ui.mdc.Chart} oMDCChart Reference to the chart
	 * @returns {string} Internal ID for the sap.chart.Chart
	 *
	 * @private
	 * @ui5-restricted sap.fe, sap.ui.mdc
	 * @MDC_PUBLIC_CANDIDATE
	 */
	ChartDelegate.getInternalChartNameFromPropertyNameAndKind = function (sName, sKind, oMDCChart) {
	};

	/**
	 * Maps an ID of an internal chart dimension/measure and type of a property to its corresponding property entry.
	 *
	 * @param {string} sName ID of internal chart measure/dimension
	 * @param {string} sKind Kind of the property
	 * @param {sap.ui.mdc.Chart} oMDCChart Reference to the chart
	 * @returns {sap.ui.mdc.chart.PropertyInfo} PropertyInfo object
	 *
	 * @private
	 * @ui5-restricted sap.fe, sap.ui.mdc
	 * @MDC_PUBLIC_CANDIDATE
	 */
	ChartDelegate.getPropertyFromNameAndKind = function (sName, sKind, oMDCChart) {
	};

    /**
     * Returns the relevant property info based on the metadata used with the chart instance.
     *
     * @param {sap.ui.mdc.Chart} oMDCChart Reference to the chart
     * @returns {Promise<sap.ui.mdc.chart.PropertyInfo[]>} Array of the property infos that is used within the chart
     *
     * @private
     * @ui5-restricted sap.fe, sap.ui.mdc
     * @MDC_PUBLIC_CANDIDATE
     */
	ChartDelegate.fetchProperties = function (oMDCChart) {
	};

    /**
     * Adds/Removes the busy overlay shown above the inner chart.
     *
     * @param {sap.ui.mdc.Chart} oMDCChart Reference to the chart
     * @param {boolean} bShow Shows overlay if set to <code>true</code>
     *
     * @private
     * @ui5-restricted sap.fe, sap.ui.mdc
     * @MDC_PUBLIC_CANDIDATE
     */
	ChartDelegate.showOverlay = function (oMDCChart, bShow) {
	};

	return ChartDelegate;
});

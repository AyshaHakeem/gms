// Copyright (c) 2023, Aysha and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Revenue Report"] = {
	"filters": [
		{
			"fieldname": "from",
			"label": "From Date",
			"fieldtype": "Date",
			"width": 200
		},
		{
			"fieldname": "to",
			"label": "To Date",
			"fieldtype": "Date",
			"width": 200
		}

	]
};
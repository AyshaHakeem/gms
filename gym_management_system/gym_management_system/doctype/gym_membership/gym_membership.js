// Copyright (c) 2023, Aysha and contributors
// For license information, please see license.txt
let months = 0;
frappe.ui.form.on('Gym Membership', {
	// refresh(frm) {
    
	// },
	before_submit: frm => {
		frappe.call({
			method: 'gym_management_system.services.rest.create_revenue_report',
			args: {
				'doc_name': frm.doc.name,
				'customer' : frm.doc.gym_member,
				'plan' : frm.doc.plan,
				'total': frm.doc.membership_fee
			},
			callback: r => {

			}
		})
	},
	number_of_months: (frm) => {

		// Set plan fee
		months = frm.doc.number_of_months
		let planTotal = months * frm.doc.monthly_fee
		console.log()
		frm.set_value("plan_total", planTotal)
		frm.refresh_field("plan_total")

		// set expiration date
		let dt = new Date(),
			result = dt.setMonth(dt.getMonth() + months),
			expiry = new Date(result).toJSON().slice(0, 10)
		frm.set_value("expiration_date", expiry)
    },
	cardio: frm =>{

		let cardioFee = 0.00
		frm.doc.cardio == 'Yes' ? cardioFee = 200.00 : cardioFee = 0.00
		frm.doc.cardio_fee = cardioFee
		frm.refresh_field("cardio_fee")

		// let months = frm.doc.number_of_months,
		let	cardioTotal = months * cardioFee
		frm.set_value("cardio_total", cardioTotal)
		frm.refresh_field("cardio_total")	
	},
	gym_trainer: frm =>{
		let fee = 0.00
		frm.doc.gym_trainer ? fee = 300.00 : fee =0.00
		frm.set_value("trainer_fee", fee)
		frm.refresh_field("trainer_fee")	
	},
	plan_total: (frm) => {
        calculate_total(frm);
    },
    cardio_total: (frm) => {
        calculate_total(frm);
    },
	trainer_fee: (frm) => {
        calculate_total(frm);
    }
});

// total memberhsip fee

let calculate_total = frm => {
    let plan = frm.doc.plan_total,
    	cardio = frm.doc.cardio_total,
		trainer= frm.doc.trainer_fee,
		total = plan + cardio + trainer
    frm.set_value("membership_fee", total);
    frm.refresh_field("membership_fee");
}


// only list lockers with status of open
frappe.ui.form.on("Gym Membership", "onload", function(frm) {
    frm.set_query("gym_locker", function() {
        return {
            "filters": {
                "status": "Open"
            }
        };
    });
});




// Copyright (c) 2023, Aysha and contributors
// For license information, please see license.txt
frappe.ui.form.on('Gym Member', {
	refresh: function(frm) {
		
	}
});





frappe.ui.form.on('Gym Member', function(){
	
});

/*
let lockers = ['Locker-01', 'Locker-02', 'Locker-03', 'Locker-04', 'Locker-05']
frappe.ui.form.on('Gym Member', {
	refresh: function(frm) {
		let my_select_array = [];
		lockers.forEach( l => my_select_array.push(l) )
		frappe.meta.get_docfield("Gym Member", "locker_no", frm.doc.name).options = my_select_array;
		frm.refresh_field("locker_no");
	},

	on_submit(frm){
		let rm_locker = lockers.indexOf(frm.doc.locker_no)
		lockers.splice(rm_locker, 1)
	}
});
*/
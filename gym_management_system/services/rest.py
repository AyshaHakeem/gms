import frappe
@frappe.whitelist()
def update_locker_doc(locker_name, gym_member):
    pass

import frappe

@frappe.whitelist()
def create_revenue_report( customer, plan, total):
    
    gym_invoice = frappe.get_doc({
        "doctype": "Gym Invoice",
        "customer": customer,
        "plan_name": plan,
        "total_amount": total,
    })
    # add invoice record to databse
    gym_invoice.insert().submit()
    frappe.db.commit()

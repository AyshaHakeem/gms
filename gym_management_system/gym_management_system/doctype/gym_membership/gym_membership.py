# Copyright (c) 2023, Aysha and contributors
# For license information, please see license.txt
from __future__ import unicode_literals

import frappe
from frappe.model.document import Document


class GymMembership(Document):
    
	# update locker document to set status and allocated_to fields

    def on_update(self):
        if self.gym_locker != '' :
            frappe.db.set_value("Gym Locker", self.gym_locker, "status", "Booked")  
            frappe.db.commit()
        			
    def on_update(self):
        if self.gym_locker != '' :
            
            gym_locker_booking= frappe.get_doc({
            "doctype": "Gym Locker Booking",
            "locker_name": self.gym_locker,
            "allocated_to": self.gym_member,
            "expiry": self.expiration_date
            })

            gym_locker_booking.insert().submit()
            frappe.db.commit() 

    def on_update(self):
        if self.gym_trainer != '' :
            
            trainer_subscription = frappe.get_doc({
            "doctype": "Trainer Subscription",
            "gym_member": self.gym_member,
            "gym_trainer": self.gym_trainer,
            "expiry": self.expiration_date
            })

            trainer_subscription.insert().submit()
            frappe.db.commit()            

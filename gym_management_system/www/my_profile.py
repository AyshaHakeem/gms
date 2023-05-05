import frappe
import datetime
def get_context(context):

    name = frappe.session.user
    profile = {}
    if name!='Guest' and name!='Administrator':
        details = frappe.db.get_value('Gym Membership', name, ['plan', 'expiration_date', 'gym_trainer'])
        today = datetime.date.today()
        if today<details[1]:
            remaining = details[1]-today
            active = details[0]
            trainer = details[2]
            profile = [active, remaining.days, trainer]
            context.data = profile
        else:
            context.data = "You have no active plans"
    else:
        frappe.throw( ("You have to login as a member access this page"), frappe.PermissionError)
   
    return context
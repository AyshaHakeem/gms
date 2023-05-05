# Copyright (c) 2023, Aysha and Contributors
# See license.txt

import frappe
import unittest

class TestGymMembership(unittest.TestCase):
	def test_gym_membership(self):
		test_entry = frappe.get_doc({
			"doctype": "Gym Membership",
			"gym_member": "Sara May-018"
		}).insert()



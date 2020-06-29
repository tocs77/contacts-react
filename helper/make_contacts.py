# Script to build contact JSON

import json
import random

CONTACTS_AMOUNT = 500


def makePhone(length=10, format=True):
    phone = ''
    for n in range(length):
        phone += str(random.randint(0, 9))

    if format:
        phone = "({}){}-{}-{}".format(phone[:3], phone[3:6], phone[6:8], phone[8:])

    return phone


first_names = [name.strip() for name in open('firstNames.txt')]
second_names = [name.strip() for name in open('secondNames.txt')]
emails = ['gmail.com', 'hotmail.com', 'yahoo.com', 'mail.ru']

contacts = []

for i in range(CONTACTS_AMOUNT):
    first_name = random.choice(first_names)
    second_name = random.choice(second_names)
    email = "{}{}@{}".format(first_name[0].lower(), second_name.lower(),
                             random.choice(emails))
    phone = makePhone()
    contact = {'firstName': first_name, 'secondName': second_name,
               'email': email, 'phone': phone, 'id': i}
    contacts.append(contact)

data = {'contacts': contacts, 'user': {'name': 'test', 'password': 'test'}}

with open("data.json", "w") as write_file:
    json.dump(data, write_file, indent=4)

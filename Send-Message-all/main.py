from twilio.rest import Client

# Your Twilio account SID and auth token
account_sid = 'ACc3dc1590a626e267f98d25b2515749bb'
auth_token = '78e4d202b00dfe411bd246d2e27525dd'

# Create a Twilio client object
client = Client(account_sid, auth_token)

# The phone number to send the SMS to
to_phone_number = '+821087668162'  # Replace with the recipient's phone number

# The phone number to send the SMS from (must be a Twilio phone number)
from_phone_number = '+821029973213'  # Replace with your Twilio phone number

# The body of the SMS message
message_body = 'Hello!'

# Send the SMS message using the Twilio client
message = client.messages.create(
    body=message_body,
    from_=from_phone_number,
    to=to_phone_number
)

print('SMS message sent with message ID:', message.sid)

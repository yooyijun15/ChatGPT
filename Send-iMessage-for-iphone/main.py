from py_imessage import imessage
import time

# List of recipients
to_list = ['+821055673213', '+821029973213']

# iMessage information
message_text = 'Hello~~'

# Send the message
try:
    for recipient in to_list:
        imessage.send(recipient, message_text)
        time.sleep(1) # wait for 1 second between each message
    print('Message sent successfully.')
except:
    print('Error sending message.')

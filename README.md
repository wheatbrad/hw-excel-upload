# Homewerks Excel Upload Feature

Offer template to user.
Will need to have 3 distinct columns for HWW Model #, GTIN, and Vendor Number
User will enter HWW Model #

Front end

- handle drag and drop
- handle button click
- post file to server
- ask user to pick between multiple products
  - keep file in js store and resend w / picks if need user to make a selection
    so don't clear store state until we've got a "good-to-go" message
- handle display of verious status messages

Back end

- receive and read file
- determine if have "object pick" data if so we have enough info to pull correct object
- if need more info from client send response
- pull the required objects and write to file
- send to client
- new feature of pulling all store SKUs for each product and making columns for each

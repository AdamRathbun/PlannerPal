# PlannerPal

PlannerPal is a full-stack daily planning app with login/auth, note creation, note sharing between users on the platform, mark complete/incomplete, and note deletion. Built with a #100Devs team.

## How It's Made:

**Tech used:** JavaScript, Node, Express, Passport, MongoDB, EJS, Bcrypt, Validator, HTML and CSS

This was a good learning experience on login and authentication. The sharing function was done by changing the user id of each item to an array, then pushing targetted user ids upon share. There was a hiccup with the item id, but it was resolved when we reconfigured it to grab the item id correctly.

## Optimizations

It would be amazing add styling and other frontend amenities. Also, we would've liked to add time markers to better track the notes, as well as better sorting funtionality.

# Instruction

`npm install` 
make a .env file with port and database link

# Packages/Dependencies used 

bcrypt, connect-mongo, dotenv, ejs, express, express-flash, express-session, mongodb, mongoose, morgan, nodemon, passport, passport-local, validator, method-override

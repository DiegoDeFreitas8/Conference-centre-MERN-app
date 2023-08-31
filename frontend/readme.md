## Software requirements documentation:
system architecture:
I used the MERN stack to develop this application as this is what I know and have learnt. I will deploy this app using digital ocean, 
because it is easy to use and very user friendly. When it comes to creating the front-end side of the app, I used Create React App 
as that is what I feel most comfortable using and it's what I feel like I know better than other react frameworks at the moment. I didnt really use tools to style the application, besides react-bootstrap and normal css. I decided to go that route because I am not too familiar with many tools yet and I stuck with what I know.


## system requirements specifications:
My application will work like this. A normal end user will go onto the website to view upcoming events at a conference centre, with the need to register and sign in as they just need to know what the event is, when it is and what time it is. Now an admin will also be able to register and/or sign in. When the admin signs in, they will be able to view the upcoming events as well as add an event, update an event or cancel/delete an event. The specific users that will use this application will be people that are interested in attending conferences for their benefit. These users will benefit from using this application because it will save alot of time and effort as they would normally ask around to find out what event is when and what time. There are other softwares that do a similar thing to this application, but not for this conference centre and this will help alot of people by saving a lot of time and effort. This application will posibbly be the most simple to use application you know as all you need to do as a normal end user is register or sign in if already registered and the upcoming events will appear. As an admin it is similar to the end user as all you need to do is register or sign in and from a click of a button/buttons you will be able to create an event, update an event or cancel an event.

## user stories:
as a user I want to sign in to view upcoming events
as an admin I want to sign in to view upcoming events to make sure everything is correct
as an admin I want to sign in to create an upcoming event
as an admin I want to sign in to update an upcoming event
as an admin I want to sign in to cancel an upcoming event

## functional requirements:
Register and sign in function so a user or admin can login to their account
A read function to view all the upcoming events for user and admin
A create function for admin so they can add an upcoming event
An update function so the admin can update an upcoming event
A delete function for the admin so they can cancel an upcoming event


## non-functional requirements
USABILITY: The user interface of this application will be one of the easiest to use and very simple as for a normal end user its just a register/sign in function and thats it. There is a little bit more functionality when it comes to the admin side as they would also have to sign in/ register and then they have the ability to create, update and delete an upcoming event.

RELIABILITY: If there is any incorrect processing the application will give admins and users error messages to do what is required and will be easy to follow. There is also a delete function so if there is some incorrect processing the admin can easily just delete what is incorrect or edit what is wrong. In case of a service outage a simple refresh of the webpage will help and the user/admin might just need to sign in again and continue with what they were doing.

PERFORMANCE: The response time of this application will be almost instant as with react the data gets fetched before the page loads. When it comes to storing, updating and deleting data it will also be quick and no limit on the amount of data getting stored.

SECURITY: The data related to the application will be secured and protected as we will be using MongoDB to store the necessary data
needed for this application. it is a simple and easy to use database that fetches and delivers data quick. MongoDB will be the database that stores the user and admins logins and all the upcoming events that are added, updated or deleted. The user and admins logins will be secure using JWT to sign and verify which user has what access.

## How to use the application

use the link provided 
to use the app all you need to do is follow the webpage like a normal user, click on the "sign in" button and it will display a form asking you to sign in. If you do not have login details you can click on the "register" button and a new form will pop up. Then enter details needed to create a login and click submit. Once that is done, you can now sign in by clicking sign in and entering the details you provided before in the register form. once you have signed in you should see a "display events" button and if you click that a table of information about upcoming events will appear. There should also be a "logout" button and if you click that the app will log you out and thats it for a normal end user.

if you want to login as an admin you can use the admin login provided to sign in and you sign in the same way as a normal end user. Once signed in the same two buttons should appear and they both do the same thing. The only differenct is that when the admin user clicks on the button "display events" an "add event" button appears and if you click that the admin user is now able to add an event by filling in the form on the pop up that appears after clicking "add event". Next to each event in the table there should be an "edit" and a "delete" button and if the admin user clicks on the "edit" button they are presented with another pop up and they can edit information about that event by filling out the form. if the admin user clicks on "delete" it simply deletes that specific event from the table. 

## How to install, test and run the app

If you do not have Node.js installed:

follow this link for windows: https://nodejs.org/en/download
follow this link and instructions for linux/wsl users: 
https://heynode.com/tutorial/install-nodejs-locally-nvm/
follow this link and instructions for mac users: 
https://formulae.brew.sh/formula/node

Instructions for linux/WSL:

follow instructions from link

Instructions for mac:

follow instructions from link and once your terminal is open type
'brew install node'

Instructions for windows:

after clicking the link you will be presented with a set of download
options, you need to choose the windows installer and depending
on the system you running, you must choose either 64bit or
32bit.

once downloaded you need to open the file and you just need to accept and click next
on the pages that show up.

now that everything is installed, you can follow the next instruction in this README.

How to install and run app:

To install and run this project you will need to download the entire
project off GitHub

Once the folder has been downloaded, open command prompt on your
local machine and type 
'cd (and the directory path to the folder called backend in the folder you downloaded)'
you can get that directory by opening the folder and copying the path

Once that is done all you need to do is type 'npm run start' or 'npm start'

and in a new command prompt window you need to type
'cd (and the directory path to the folder called frontend in the folder you downloaded)'
Once that is done all you need to do is type 'npm start'

## How to modify the mongoDB uri

to use the app with mongo DB you would need to change the mongo db uri
to do that you would need to create a database on mongo db and click connect and the the connection string 
to connect to an application (if you do not know how to do this, a quick google search will help)
so once you now have your own uri, replace mine in the file called index.js in the backend folder and replace the username password and database name. It should look something like this:
mongodb+srv://<YOUR USERNAME HERE>:<YOUR PASSWORD HERE>@events.vsmlohb.mongodb.net/<DATABASE NAME HERE>?retryWrites=true&w=majority

## Security
this app is secure as i have used JWT and when a user logs in and trys to view the events i have a middleware function that checks and verifys if those login details matches a user in the database and if it does the events will display if the user tries to view it 

## Deployment
This app is deployed on digital ocean as it is easy to use and super user friendly
this app will also be on my github and links to both will be provided below.

## Links

## Admin Login Details
here is an admin login to use as i didnt see that it was necessary to have an admin user register an account on the website.
here it is:
username: abcde
password: abcde

if you want you can register to be a normal end user or use this login for a normal end user:
username: abcd
password: abcd
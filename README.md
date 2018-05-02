# react-nodejs-app
This is my personal code for the course Node with React: Fullstack Web Development in Udemy.


# About 
This is a simple project of a feedback email system that can create surveys for a company users. You can login with google account (not saved any critical data, only id), can be tested on Heroku: https://emaily-production-vinipachecov.herokuapp.com/

![image](https://user-images.githubusercontent.com/2838834/39490798-6c0b2648-4d60-11e8-8329-10f90d69ee48.png)

# Purpose 
The idea is to explore the React framework combining the routing of the Express.js Framework to have a more holistic view of the web development with both techonologies. Axios Library is very usefull to send requests that the client receives and need some help of backend server(Express).

# Running

## Google API
If you desire to run you will need to create a dev.js file inside the config folder and put a Google+ Api Key (check https://console.developers.google.com) and to allow routes from http://localhost:3000 and 5000 just like the image below:

![image](https://user-images.githubusercontent.com/2838834/39519868-ded6b0f6-4dde-11e8-8a93-6ed3132ce418.png)

After that get the secret Key and googleClientId and put it just like the prod.js file. 

## MongoLab
Create a Mlab account and put the MongoURI with the username and password inside the dev.js file. For more information check:
https://mlab.com

## Stripe
The payment system I used in this project is stripe. You will need to create an account and do the same steps as you did before for Google API. You will have to add both keys provided for stripe and add it to the dev.js and also change the .env.development REACT_APP_STRIPE_KEY client constant with the secret key provided by stripe.

## Commands
After that you can actually run the program with the following command that will start both server and client:
```
npm run dev
```


# React Food Delivery App

This project is a basic react app that implements the ability to pick from a list of menu items and add them to cart.
Upon loading the application, a "Menu" is loaded from the backend to be displayed in a selection form, so users can add items 
to their cart. Once the desired items are added to the cart the user can then "submit" their order like you would do on a variety of
food order app. The order is then sent off to the backend to be stored in a database.

## Motivation

Developing this basic application was sparked by the desire to exercise the skills learned in a 
[Udemy React Course](https://www.udemy.com/course/react-the-complete-guide-incl-redux/) in which I have been learning how 
to develop and deploy React based applications. Many of the features/improvements that have been added or are planned 
(Seen in the project’s issues) are a result of progressing through this course and implementing the new features and design patters 
that are being introduced.

# Application Stack
## FrontEnd

### Available Scripts
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
In the project directory, you can run:

#### `npm install`

Installs all app dependencies described in the package.json file.

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Backend
The backend capabilities of this app are handled by a Firebase project.

### Firebase Endpoints
The Menu of this application is pulled from Firebase via a **GET** request from the `/Menu.json` endpoint.

The Orders submitted from this application are sent to Firebase via a **POST** request to the `/Orders.json` endpoint.

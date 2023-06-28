# Film Application Setup and Development Guide

This README provides instructions on how to run the application and complete development tasks.

## Running the Application

To run the application, simply open the `index.html` file in a web browser.

## Development Tasks

Below are the tasks that need to be completed:

### Task 1: Update the Show Films Function

1. Update the `showFilms` function so that all elements in the `films` array are added to their own `div` element when the button is pressed on the front end.

### Task 2: Beautify the Front End

1. Work on the front end to make it more presentable by using CSS styles.

### Task 3: Setup the Back End

1. Install [Node.js](https://nodejs.org/) on your machine.
2. Open a terminal and navigate to the `api` folder using `cd api`.
3. Run the command `npm i` to install the necessary packages.
4. Create an account on [Postman](https://www.postman.com/).

### Task 4: Extract JSON Data from the Database

1. Look through the [Express.js documentation](https://expressjs.com/) and write a GET function to extract the JSON data from `db.json`.

### Task 5: Connect Front End to API

1. When you click the button on the front end, make a GET fetch request to call your API and retrieve the data.

## Stretch Goals

### Stretch Goal Task 1: Create an Input Form

1. Create a form that takes a title, release date, and rating as inputs.

### Stretch Goal Task 2: Write an API Endpoint for POST Request

1. In Express, write an API endpoint similar to your GET function, but this time make a POST request to post data to your database.

### Stretch Goal Task 3: Call API on Form Submission

1. When the form is submitted, make a POST fetch request to call your API endpoint and view your data in the database.

### Stretch Goal Task 4: Write a DELETE Endpoint

1. Write a DELETE endpoint in your Express server to remove an element from your database.

### Stretch Goal Task 5: Write a PUT Endpoint

1. Write a PUT endpoint in your Express server to update an element in your database.

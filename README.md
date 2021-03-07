This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Introduction and Technology Used
For this project, my goal was to get more practice with Redux for state management, as well as with pulling data from an API, adding a twist to the typical ecommerce project. 

Redux is used to keep track of the shopping cart of coins, with add to cart and remove from cart functionality. The checkout page calculates the sum subtotal of the cart. I used the CoinGecko API for prices and stats.  This app pulls in the top 100 coins by market cap.

The searchbar at the top dynamically filters the coins, using the useState hook. I used React Router for page navigation, and Firebase for Google authentication for user login. I also used Firebase for hosting the project.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

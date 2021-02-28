# SoftDrinkVendingMachine

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.1.

## Development server

Run `npm install` to install all dependencies and then `npm start` to start a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Features

_As a vendor, I want the vending machine to accept coins so I can collect money from the customer._

- The vending machine accepts valid coins (10 cents, 20 cents, 50 cents, 1 dollar and 2 dollars).
- User inserts coins by clicking on the coin image.
- When there are no coin inserted, the machine will display a message 'Please click on image to insert coins'.
- When user clicks on the coin image, the current balance will be updated and displayed on the screen.

_As a vendor, I want customers to see the items that are in stock on the screen._

- The machine displays the number of soft drink in stock.
- If current stock is 0, dispalys 'out of stock' image on the screen.
- If current stock is no more than 10, then the number of soft drink displayed on the screen matches the number of stock.
- If current stock is more than 10, then displays 10 cans of drink.

_As a vendor, I want customers to be able to purchase and collect drinks._

- Purchase button is disabled on Purchase page until user inputs the number to purchase.
- An error message will be displayed if user clicks purchase button when:
  - The drink is out of stock.
  - The number to purchase is greater than the current stock.
  - Current balance is not enough to purchase the required number of drinks
- If the purchase is successful, then a message will be displayed to inform user the number of drinks that are purchased and the change. In the meanwhile, current balance will be set to $0 and current stock will be updated too.

_As a vendor, I want to be able to resupply drinks to vending machine._

- Vendor will be redirected to resupply stock page if clicks "To Resupply" button on Purchase page.
- Vendor is able to see the total number of sold drinks.
- Resupply button is disabled by default and will be enabled if number to resupply is greater than 0.
- Maximum stock number is 100, if (number to resupply + current stock) is greater than maximum stock number, then resupply will fail and an error message will be displayed on screen.
- If the operation succeeds, a message will be displayed to inform vendor and the current stock will be updated.

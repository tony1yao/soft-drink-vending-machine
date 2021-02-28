export interface Coin {
  url: string;
  value: string;
  name: string;
}

/** The max number of stock the vending machine can hold */
export const MAX_STOCK_LIMIT = 100;

/** The max number of drink displayed on screen */
export const MAX_NUMBER_TO_DISPLAY = 10;

/** The price of each can of drink is $1.2 */
export const VALUE_PER_CAN = 1.2;

export const ERROR_OUT_OF_STOCK = 'Failed to purchase, out of stock.';

export const ERROR_INSUFFICIENT_MONEY = 'Failed to purchase, insufficent money.';

export const ERROR_NOT_ENOUGH_STOCK = 'Failed to purchase, not enough in stock.';

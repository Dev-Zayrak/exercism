//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {

  #balance;
  #isOpen;

  constructor() {
    this.#balance = 0;
    this.#isOpen = false; 
  }

  open() {
    if (!this.#isOpen){
      this.#isOpen = true;
    }
    else {
      throw new ValueError();
    }
  }

  close() {
    if (this.#isOpen){
      this.#isOpen = false;
      this.#balance = 0;
    }
    else {
      throw new ValueError();
    }
  }

  deposit(money) {
    if (this.#isOpen && money > 0){
      this.#balance += money;
    }
    else {
      throw new ValueError();
    }
  }

  withdraw(money) {
    if (this.#isOpen && money > 0 && this.#balance >= money){
      this.#balance -= money;
    }
    else {
      throw new ValueError();
    }
  }

  get balance() {
    if (this.#isOpen){
      return this.#balance;
    }
    else {
      throw new ValueError();
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}

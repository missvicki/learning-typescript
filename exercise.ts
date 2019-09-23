type Bankaccount = { money: number; deposit: (val: number) => void };

let bankAccount: Bankaccount = {
  money: 2000,
  deposit(value: number): void {
    this.money += value;
  }
};

let myself: {
  name: string;
  bankAccount: Bankaccount;
  hobbies: string[];
} = {
  name: "Vicki",
  bankAccount: bankAccount,
  hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);
console.log(myself);

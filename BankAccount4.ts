class BankAccount {
    ownerName: string;
    balance: number;
    constructor(ownerName: string, balance: number) {
        this.ownerName = ownerName;
        this.balance = balance;
    }
    displayBalance() {
        console.log(`Account: ${this.ownerName}, Balance: $${this.balance}`);
    }
}
const myAccount = new BankAccount("Alice Smith", 1500);
myAccount.displayBalance();
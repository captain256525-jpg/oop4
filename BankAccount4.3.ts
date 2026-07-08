class BankAccount4_3 {
    ownerName: string;
    balance: number;

    constructor(ownerName: string, balance: number) {
        this.ownerName = ownerName;
        this.balance = balance;
    }

    displayBalance() {
        console.log(`Account: ${this.ownerName}, Balance: $${this.balance}`);
    }
    deposit(amount: number) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited: $${amount}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }
    withdraw(amount: number) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        } else if (amount <= 0) {
            console.log("Withdrawal amount must be positive.");
        } else {
            this.balance -= amount;
            console.log(`Withdrew: $${amount}`);
        }
    }
}

const alexAccount = new BankAccount4_3("Alex", 500);
alexAccount.displayBalance(); 


alexAccount.deposit(200);     
alexAccount.displayBalance();

alexAccount.withdraw(1000);   
alexAccount.displayBalance(); 
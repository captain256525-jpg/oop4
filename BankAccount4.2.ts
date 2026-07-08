class BankAccount4_2 {
    ownerName: string;
    balance: number;

    constructor(ownerName: string, balance: number) {
        this.ownerName = ownerName;
        this.balance = balance;
    }

    displayBalance() {
        console.log(`Account: ${this.ownerName}, Balance: $${this.balance}`);
    }

    // Deposits money into the account
    deposit(amount: number) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited: $${amount}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    // Withdraws money after checking for sufficient funds
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

// --- Test Scenario ---

// 1. Initialize account with $500
const account = new BankAccount4_2("Alex", 500);
account.displayBalance(); // Output: Account: Alex, Balance: $500

// 2. Try depositing $200
account.deposit(200);     // Output: Deposited: $200
account.displayBalance(); // Output: Account: Alex, Balance: $700

// 3. Try withdrawing $1,000 (Should trigger validation)
account.withdraw(1000);   // Output: Insufficient funds
account.displayBalance();
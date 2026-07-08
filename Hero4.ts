class Hero {
    // Properties
    name: string;
    hp: number;
    attackPower: number;

    // Constructor to initialize state
    constructor(name: string, hp: number, attackPower: number) {
        this.name = name;           // string
        this.hp = hp;               // number
        this.attackPower = attackPower; // number
    }

    // Method to attack another Hero instance
    attack(target: Hero) {
        // Ensure the attacker can't attack if they are already fainted (optional safety check)
        if (this.hp <= 0) {
            console.log(`${this.name} is too exhausted to fight!`);
            return;
        }

        // Reduce the target's HP by the attacker's attack power
        target.hp -= this.attackPower;

        // Print the attack action
        console.log(`${this.name} attacks ${target.name} for ${this.attackPower} damage!`);

        // Bonus Logic: Check if the target has fainted
        if (target.hp <= 0) {
            target.hp = 0; // Normalize HP so it doesn't display negative values
            console.log(`${target.name} has fainted!`);
        } else {
            console.log(`${target.name} has ${target.hp} HP remaining.`);
        }
    }
}

// --- Test Battle Simulation ---

// Create two heroes
const warrior = new Hero("Arthur", 100, 40);
const goblin = new Hero("Grumble", 70, 15);

console.log("--- The Battle Begins ---");

// Round 1
warrior.attack(goblin); 
// Output: Arthur attacks Grumble for 40 damage!
// Output: Grumble has 30 HP remaining.

console.log("-------------------------");

// Round 2
goblin.attack(warrior);
// Output: Grumble attacks Arthur for 15 damage!
// Output: Arthur has 85 HP remaining.

console.log("-------------------------");

// Round 3 (Finishing Blow)
warrior.attack(goblin);
// Output: Arthur attacks Grumble for 40 damage!
// Output: Grumble has fainted!
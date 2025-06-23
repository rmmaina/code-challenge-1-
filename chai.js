
const readline = require('readline');

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateChaiIngredients(numberOfCups) {
  // Calculate ingredient quantities
  const water = numberOfCups * 200;      // in ml
  const milk = numberOfCups * 50;        // in ml
  const teaLeaves = numberOfCups;        // in tablespoons
  const sugar = numberOfCups * 2;        // in teaspoons

  // Output the results
  console.log(`\nTo make ${numberOfCups} cups of Kenyan Chai, you will need:`);
  console.log(`Water: ${water} ml`);
  console.log(`Milk: ${milk} ml`);
  console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoon(s)`);
  console.log(`Sugar (Sukari): ${sugar} teaspoon(s)`);
  console.log("\nEnjoy your Chai Bora!");

  // Close the readline interface
  rl.close();
}

// Prompt user input
rl.question("Karibu! How many cups of Chai Bora would you like to make? ", (input) => {
  const numberOfCups = Number(input);

  // Validate input
  if (isNaN(numberOfCups) || numberOfCups <= 0) {
    console.log("Please enter a valid number of cups.");
    rl.close();
  } else {
    calculateChaiIngredients(numberOfCups);
  }
});


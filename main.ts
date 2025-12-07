/**
 * @author Joshua Adeyemi
 * @version 1.0.0
 * @date 2025-12-07
 * @fileoverview This program prompts the user to enter the names of 
 * 10 provinces, 3 territories, and their capitals, then displays them in columns.
 */

// Arrays to store provinces/territories and capitals
const locations: string[] = [];
const capitals: string[] = [];

// INPUT: Provinces
for (let i = 1; i <= 10; i++) {
  const province: string | null = prompt(`Enter province #${i}:`);
  const capital: string | null = prompt(`Enter capital for ${province}:`);

  locations.push(province || `Province${i}`);
  capitals.push(capital || `Capital${i}`);
}

// INPUT: Territories
for (let i = 1; i <= 3; i++) {
  const territory: string | null = prompt(`Enter territory #${i}:`);
  const capital: string | null = prompt(`Enter capital for ${territory}:`);

  locations.push(territory || `Territory${i}`);
  capitals.push(capital || `CapitalT${i}`);
}

// OUTPUT: Display table header
console.log("Province/Territory            Capital");

// OUTPUT: Display all provinces/territories with capitals
for (let i = 0; i < locations.length; i++) {
  // padEnd ensures alignment
  const locationCol = locations[i].padEnd(30, " ");
  console.log(locationCol + capitals[i]);
}

console.log("\nDone.");
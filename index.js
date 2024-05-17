// # [JSL04] Submission: Monster Ternary Operator

// #### Challenge 1: Flavor Selection

let userPreference = "Sugar-free"; 
function getPreferredFlavor() {
  if (userPreference === "Regular") {
    return userPreference;
  } else if (userPreference === "Sugar-free") {
    return userPreference;
  } else {
    return "Unknown-flavor";
  }
}

console.log(`User prefers: ${getPreferredFlavor()}`);

// Variable: 'userPreference', stores the users flavor choice: "Regular", "Sugar-free". or undefined
// Function: 'userPreferredFlavor', checks the value of 'userPreference'. If "regular", return "regular". Is "sugar-free", return "sugar-free. For any other value(including undefined) return "Unknown flavor


// #### Challenge 2: Stock Check

let cansLeft = 3; 
const stockStatus = cansLeft <= 5 ? "Time to restock!" : "We're stocked!";
console.log(stockStatus);

// Variable: 'cansLeft': Stores the number of cans in stock
// Constant: 'stockStatus': Uses a ternary operator to check if 'cansLeft' is five or less
// If true, assign "Time to restock!", If false, assign "We're stocked!"


// #### Challenge 3: Workout Intensity

let heartRate = 95; 
const workoutIntensity = heartRate < 100 ? "Boost needed!" : "Energy levels are high!";
console.log(workoutIntensity);

// Variable: 'heartRate': Stores the current heartrate measured in beats per minute
// Constant: 'workoutIntensity': Uses a ternary operator to determine the intesity of workout on 'heartRate'
// If 'heartRate' is less than 100, 'workoutIntensity' set to "Boost needed!"
// If 'heartRate is 100 or higher', 'workoutIntensity' set to "Energy levels are high!"


// #### Challenge 4: Temperature Suitability

let currentTemp = 4; 
const tempSuitability = currentTemp >= 5 ? "Needs a cooler!" : "Chilled to perfection!";
console.log(tempSuitability);

// Variable 'cuurentTemp': Stores the current temperature in degrees Celsius
// Constant 'tempSuitability': Uses a ternary operator to check if 'currentTemp' is 5 or higher
// If true, assign "Needs a cooler!". If false, assign "Chilled to perfection!"


// #### Challenge 5: Late Night Coding Session

const currentDate = new Date(); 
let currentHour = currentDate.getHours();

const codingTimeMessage = (currentHour >= 7 && currentHour <= 23)
  ? "Unleash the beast!"
  : "Better stick to water.";
console.log(codingTimeMessage);

// Constant 'currentDate': Creates a new Date object with the current date and time
// Variable 'currentHour': Extracts the current hour from 'currentDate'
// Constant 'codingTimeMessage': Uses a ternary operator to check if current hour is set between 7am and 11pm
// If true, assign "Unleash the beast!". If false, assign "Better stick to water."

//### Overall Though Process
// Each challenge uses ternary operators / 'if-else' statements to determine the output based on variable values
// Each challenge ends by logging the result to the console, giving feedback based on the conditions defined


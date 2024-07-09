// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   let word = input.question("Let's play some scrabble! Enter a word: ");
   // console.log(oldScrabbleScorer(word)) // Task 1
   return word;
};

let newPointStructure;

let simpleScorer = function(word){
   // for each letter in word, return 1 point
   return word.length
};

let vowelBonusScorer = function(word){
   word = word.toLowerCase();
   // add 1 point for each vowel in word
   let vowelList = ['a','e','i','o','u'];
   let pointCounter = 0;
   // for each letter in word, if letter is in vowel list, increment point counter by 1
   for (let i = 0; i < word.length; i++){
      if (vowelList.includes(word[i])){
         pointCounter+=3;
      }
      else{
         pointCounter+=1;
      }
   }
   return pointCounter;
};

let scrabbleScorer;

// create each object for scoringAlgorithms array
let scoringAlgorithm1 = {
   name: 'Simple Score',
   description: 'Each letter is worth 1 point.',
   scorerFunction: simpleScorer
};

let scoringAlgorithm2 = {
   name: 'Simple Score',
   description: 'Vowels are 3 pts, consonants are 1 pt.',
   scorerFunction: vowelBonusScorer
};

let scoringAlgorithm3 = {
   name: 'Scrabble',
   description: 'The traditional scoring algorithm.',
   scorerFunction: oldScrabbleScorer
};

const scoringAlgorithms = [scoringAlgorithm1, scoringAlgorithm2, scoringAlgorithm3];

function scorerPrompt(word) {
   let result;

   console.log("Which scoring algorithm would you like to use?\n");
   console.log("0 - Simple One point per character\n");
   console.log("1 - Vowel Bonus: Vowels are worth 3 points\n");
   console.log("2 - Scrabble: Uses scrabble point system\n");
   let algorithmSelection = input.question("Enter 0, 1, or 2: ");
   if (algorithmSelection == 0){
      // Simple scoring
      result = scoringAlgorithms[0].scorerFunction(word);
   }
   else if (algorithmSelection == 1) {
      // Vowel Bonus
      result = scoringAlgorithms[1].scorerFunction(word)
   }
   else if (algorithmSelection == 2){
      // Scrabble
      result = scoringAlgorithms[2].scorerFunction(word)
   }

   console.log(`Score for '${word}': ${result}`);

}

function transform() {};

function runProgram() {
   let word = initialPrompt();
   scorerPrompt(word);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

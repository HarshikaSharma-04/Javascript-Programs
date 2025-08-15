let sentence = prompt("Enter a sentence : ");

sentence = sentence.replace(/[.,?!]/g, ""); //Removing punctuations
let words = sentence.split(" ");

let longest_word = words[0]; //assume word at index 0 as longest word

for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest_word.length) {
        longest_word = words[i];
    }
}

console.log(`The longest word in the sentence is ${longest_word} and it's length is ${longest_word.length}`);
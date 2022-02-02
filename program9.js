const prompt=require('prompt-sync')();
var string= prompt("Enter a string: ");
function Count(string) {

    var vowels = (consonant = digit = space = 0);
    var stringSmall = string.toLowerCase();

    for (var i = 0; i < stringSmall.length; i++) {
      if (
        stringSmall[i] == "a" ||
        stringSmall[i] == "e" ||
        stringSmall[i] == "i" ||
        stringSmall[i] == "o" ||
        stringSmall[i] == "u"
      ) {
        vowels++;
      } else if (stringSmall[i] >= "a" && stringSmall[i] <= "z") {
        consonant++;
      } else if (stringSmall[i] >= "0" && stringSmall[i] <= "9") {
        digit++;
      } else if (stringSmall[i] == " ") {
        space++;
      }
    }
    console.log(`${string} contains ${vowels} vowels, ${consonant} consonants, ${digit} digits and ${space} spaces.`)
  }
  Count(string);
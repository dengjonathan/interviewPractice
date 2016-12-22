const longestPalindrome = string => {
  if (string.isMultipleWords()) {
    let longest = string.split(' ').map(word => longestPalindrome(word));
    // return max length of array
    };
    // add whitespace to longest string;



  }
};

String.prototype.isMultipleWords = () => this.toString().indexOf(' ') > -1;

String.prototype.isPalin = () => this.toString().split('').reverse().join('') === this.toString();


let a = longestPalindrome(('aaaa level eye redivider'));
console.log('hello '.isMultipleWords());
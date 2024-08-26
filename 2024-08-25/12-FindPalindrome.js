/*
Exp:- find palindrome
Like:- mam, madam == true
vikas == false
*/

function findPalindrome(str) {
    let outputOne = str.split("").reverse().join('');
    if(str === outputOne){
        return 'This is palindrome string'
    }else{
        return 'This is not palindrome string'
    }
}
console.log('----->', findPalindrome('vikas'));


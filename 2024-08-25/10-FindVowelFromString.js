// Exp:- find vowels from string (a,e,i,o,u)

let string = 'h';
string = string.toLocaleLowerCase()
function findVowels(para) {
    if(para == 'a' || para == 'e' || para == 'i' || para == 'o' || para == 'u') {
        console.log('This is vowels');
    }else{
        console.log('this is not vowels');
        
    }
    
}
console.log(findVowels(string));

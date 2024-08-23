function isPalindrome(str) { 
    console.log("str====>", str);
    const cleanStr = str.toLowerCase(); 
    console.log("cleanStr====>", cleanStr);
  
    const reversedStr = cleanStr.split("").reverse().join(""); 
  
    return cleanStr === reversedStr; 
  
  } 

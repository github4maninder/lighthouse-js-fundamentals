function palindrome(str){
  let i = 0;
  let j = str.length - 1;
  while(i < j) {
    if (str[i]== str[j]){
      i++;
      j--;
    }else{
      return false;
    }
  }
  return true;
}

console.log(palindrome('racecar'));
console.log(palindrome('madam'));
console.log(palindrome('dad'));
console.log(palindrome('mom'));
console.log(palindrome('test'));
console.log(palindrome ('is si'));
function disemvowel(str) {

  let vowels = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];  // caps too
  let array = str.split(""); 
  let newArray = array.filter(letter => !vowels.includes(letter) );
  return newArray.join('')
}
 
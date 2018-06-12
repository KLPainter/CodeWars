// SOLUTION 1: convert to array
function solution(str){

    array = str.split('');
    array.reverse();
    return array.join('');
    
  }

// SOLUTION 2: iterate backwards
function solution(str){

    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
    
  }
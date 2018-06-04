function insertDash(num) {
   
    let numAsStr = num.toString();
    let dashed = '';
    
    for (let i = 0; i < numAsStr.length; i++) {
      let num1 = numAsStr[i];
      let num2 = numAsStr[i + 1];
      dashed += num1;
      if (num1 % 2 && num2 % 2) {
        dashed += '-';
      }
    }
    
    return dashed; 
 }
 
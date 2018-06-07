function isNice(arr){

    if (arr.length === 0) { return false; }
    
    for (let i = 0; i < arr.length; i++) {
        if (!arr.includes(number + 1) && !arr.includes(number - 1)) {
            return false;
        }
    }   
    return true; 
  }
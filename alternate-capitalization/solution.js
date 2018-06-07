function capitalize(s){

    let s1 = '', s2 = '';
    for (let i = 0; i < s.length; i++) {
      if(i % 2) {
        s1 += s[i].toLowerCase();
        s2 += s[i].toUpperCase();
      } else {
        s1 += s[i].toUpperCase();
        s2 += s[i].toLowerCase();
      }
    }
    return [s1, s2];
    
  };
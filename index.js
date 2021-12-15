function shortcut(string){
    let word = ''
    for (let i = 0; i < string.length; i++) {     
      if (string[i] == 'q' | string[i] == 'e' | string[i] == 'y' | string[i] == 'u' | string[i] == 'i' | string[i] == 'o' | string[i] == 'a') 
      continue
      else {word += string[i]}      
      
  }
    return word
  } 

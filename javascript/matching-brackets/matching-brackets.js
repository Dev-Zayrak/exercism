export const isPaired = (text) => {

  const texts = text.split("");
  const symbols = ['{', '}', '[', ']', '(', ')'];
  const results = texts.filter(item => symbols.includes(item));
  
  for(let i = 0; i < results.length; i++){
    
    let y = results.length-1
    
    if(results[0] === ')' || results[0] === '}' ||results[0] === ']') {
    return false
  }
    
    if(results[i] === '{') {
      if(results[i+1] === '}'){
        results.shift()
        results.shift()
        i--
      }
      else if(results[y] === '}'){
        results.shift()
        results.pop()
        i--
      }
      else{
        return false
      }
    }
    
    if(results[i] === '[') {
      if(results[i+1] === ']'){
        results.shift()
        results.shift()
        i--
      }
      else if(results[y] === ']'){
        results.shift()
        results.pop()
        i--
      }
      else{
        return false
      }
    }

    if(results[i] === '(') {
      if(results[i+1] === ')'){
        results.shift()
        results.shift()
        i--
      }
      else if(results[y] === ')'){
        results.shift()
        results.pop()
        i--
      }
      else{
        return false
      }
    }
  }
  return true  
};
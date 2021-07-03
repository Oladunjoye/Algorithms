function canConstruct(target, wordBank){

  if(target == "")return true

  for(let word of wordBank){
    if(target.startsWith(word)){
      let newTarget = target.slice(word.length)
      if(canConstruct(newTarget, wordBank) == true){
        return true
      } 

    }


  }

  return false
}




console.log(canConstruct("skateboard", ["bo","d","ate", "t", "ska", "sk", "boar"]))
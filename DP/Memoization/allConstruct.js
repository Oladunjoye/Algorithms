function allConstruct(target,wordBank){
if(target == "") return [[]]

let result = []

for(let word of wordBank){
if(target.startsWith(word)){
  let newTarget = target.slice(word.length)
  let combination  = allConstruct(newTarget, wordBank)
let newWay = combination.map((way)=>  [word,...way])

result.push(...newWay)


}

}
}


console.log(allConstruct("", [""]))
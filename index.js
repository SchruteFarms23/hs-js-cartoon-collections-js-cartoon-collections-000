function dwarfRollCall(dwarves) {
  var arrTwo=[];
  for(var i=0;i<dwarves.length;i++){
    arrTwo.push(`${i+1}. ${dwarves[i]} `)
  }
  return `${arrTwo.join("")}`
}

function summonCaptainPlanet(planeteerCalls){
  var arrTwo=[];
  for(var i=0;i<planeteerCalls.length;i++){
    arrTwo.push(`${planeteerCalls[i].toUpperCase()}!`)
  }
  return arrTwo
}

function longPlaneteerCalls(words) {
  for(var i=0;i<words.length;i++){
    if(words[i].length>4){
      return true
    }
    else{
      return false
    }
  }
}

function findTheCheese (foods) {
  var cheese=["cheddar","gouda","camembert"];
  for(var i=0;i<cheese.length;i++){
    if(foods.includes(cheese[i])===true){
      return cheese[i]
    }
    else{
      return "no cheese!"
    }
  }
}

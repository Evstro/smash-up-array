


let factions = [];

class FactionsAvailable {
    constructor(id, array) {
      this.id = id;
      this.array = array;
    }
    constructFaction(factions) {
      return factions.concat(this.array);
    }
  };

//event listener to create a list of factions based on sets
const createFactionList = document.getElementById('createfactionlist');
createFactionList.addEventListener('click', e => {
    e.preventDefault();
    factions = [];
    var setsChecks = document.querySelectorAll('input[type="checkbox"]');
    for (let i = 0; i < setsChecks.length; i++) {
            let set = setsChecks[i];
            let facts = set.id.slice(3).charAt(0).toLowerCase() + set.id.slice(4);
            if(setsChecks[i].checked && setFactions.has(facts)) {
                factions = new FactionsAvailable(set.id, setFactions.get(facts)).constructFaction(factions);    
            };
        };
console.log(factions);
});

//event listener to run functions to get two random factions
const randomButton = document.getElementById('random');
randomButton.addEventListener('click', e => {
    e.preventDefault;
    randomFactionOne();
    console.log(`Your first faction is ${factionOne}!`)
    randomFactionTwo();
    if(factionOne === factionTwo) {
        randomFactionTwo();
        console.log('rerolling second faction');
        console.log(`Your second faction is ${factionTwo}!`)
    } else {
        console.log(`Your second faction is ${factionTwo}!`)
    }
})

//functions to generate two random factions
const randomFactionOne = () => {
    randomFaction = Math.floor(Math.random() * factions.length);
    factionOne = factions[randomFaction];
    
    return factionOne;
}

const randomFactionTwo = () => {
    randomFaction = Math.floor(Math.random() * factions.length);
    factionTwo = factions[randomFaction];
    
    return factionOne;
}

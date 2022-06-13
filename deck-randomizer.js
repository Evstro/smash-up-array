//event listener to run functions to get two random factions
const randomButton = document.getElementById('random');

randomButton.addEventListener('click', e => {
    e.preventDefault;
    randomFactions();
    if(factions.length === 0) {
        console.log('Please create faction list first')
    } else {
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
    };
 
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

//function to randomize decks for X amount of players
const numOfPlayers = document.getElementById('numberofplayers');
const randomFactions = () => {
    for(let i = 0; i < numOfPlayers; i++) {
        console.log('success', i);
    }
};
//event listener to run functions to get two random factions
const randomButton = document.getElementById('random');

// const availableFactions = factions.filter((item) => item!=='factionOnePlayerOne');
// randomButton.addEventListener('click', e => {
//     e.preventDefault;
//     if(factions.length === 0) {
//         console.log('Please create faction list first')
//     } else {
//     randomFactionOne();
//     console.log(`Your first faction is ${factionOne}!`)
//     randomFactionTwo();
//     if(factionOne === factionTwo) {
//         randomFactionTwo();
//         console.log('rerolling second faction');
//         console.log(`Your second faction is ${factionTwo}!`)
//     } else {
//         console.log(`Your second faction is ${factionTwo}!`)
//     }
//     };
 
// });

//functions to generate two random factions
const randomFactionOne = () => {
    randomFaction = Math.floor(Math.random() * factions.length);
    factionOne = factions[randomFaction];
    
    return factionOne;
}

const randomFactionTwo = () => {
    randomFaction = Math.floor(Math.random() * factions.length);
    factionTwo = factions[randomFaction];
    
    return factionTwo;
}

//function to randomize decks for X amount of players
// const numOfPlayers = document.getElementById('numberofplayers');
// const randomFactions = () => {
//     for(let i = 0; i < numOfPlayers; i++) {
//         console.log('success', i);
//     }
// };

//functions to generate random factions for each player


randomButton.addEventListener('click', e => {
    e.preventDefault;
    //return 1st random faction for player one
    randomFactionOnePlayerOne();
    console.log(factions);
    console.log(`Player One's first faction is ${factionOnePlayerOne}!`);

    //remove player one's first faction    
    const availableFactionsP1F1 = factions.filter((item) => item!==factionOnePlayerOne);
    console.log(availableFactionsP1F1);

    //function to choose an available  2nd faction for player one
    const randomFactionTwoPlayerOne = () => {
        randomFaction = Math.floor(Math.random() * availableFactionsP1F1.length);
        factionTwoPlayerOne = availableFactionsP1F1[randomFaction];
        
        return factionTwoPlayerOne;
    };

    //return 2nd random faction for player one
    randomFactionTwoPlayerOne();
    console.log(`Player One's second faction is ${factionTwoPlayerOne}!`);

    //remove player one's 2nd faction
    const availableFactionsP1F2 = availableFactionsP1F1.filter((item) => item!==factionTwoPlayerOne);
    console.log(availableFactionsP1F2);

    //function to choose an available 1st faction for player two
    const randomFactionOnePlayerTwo = () => {
        randomFaction = Math.floor(Math.random() * availableFactionsP1F2.length);
        factionOnePlayerTwo = availableFactionsP1F2[randomFaction];
        
        return factionOnePlayerTwo;
    };

    //return 1st random faction for player two
    randomFactionOnePlayerTwo();
    console.log(`Player Two's first faction is ${factionOnePlayerTwo}!`);

    //remove player two's first faction
    const availableFactionsP2F1 = availableFactionsP1F2.filter((item) => item!==factionOnePlayerTwo);
    console.log(availableFactionsP2F1);

    //function to choose an available 2nd faction for player two
    const randomFactionTwoPlayerTwo = () => {
        randomFaction = Math.floor(Math.random() * availableFactionsP2F1.length);
        factionTwoPlayerTwo = availableFactionsP2F1[randomFaction];
        
        return factionTwoPlayerTwo;
    };
    
    //return 2nd random faction for player two
    randomFactionTwoPlayerTwo();
    console.log(`Player Two's 2nd faction is ${factionTwoPlayerTwo}!`);
    
    //remove player two's 2nd faction
    const availableFactionsP2F2 = availableFactionsP2F1.filter((item) => item!==factionTwoPlayerTwo);
    console.log(availableFactionsP2F2);

    //function to choose an available 1st faction for player three
    const randomFactionOnePlayerThree = () => {
        randomFaction = Math.floor(Math.random() * availableFactionsP2F2.length);
        factionOnePlayerThree = availableFactionsP2F2[randomFaction];
        
        return factionOnePlayerThree;
    };
    
    //return 1st random faction for player three
    randomFactionOnePlayerThree();
    console.log(`Player Three's 1st faction is ${factionOnePlayerThree}!`);
    
    //remove player three's 1st faction
    const availableFactionsP3F1 = availableFactionsP2F2.filter((item) => item!==factionOnePlayerThree);
    console.log(availableFactionsP3F1);

    //function to choose an available 2nd faction for player two
    const randomFactionTwoPlayerThree = () => {
        randomFaction = Math.floor(Math.random() * availableFactionsP3F1.length);
        factionTwoPlayerThree = availableFactionsP3F1[randomFaction];
        
        return factionTwoPlayerThree;
    };
    
    //return 2nd random faction for player three
    randomFactionTwoPlayerThree();
    console.log(`Player Three's 2nd faction is ${factionTwoPlayerThree}!`);
    
    //remove player three's 2nd faction
    const availableFactionsP3F2 = availableFactionsP3F1.filter((item) => item!==factionTwoPlayerThree);
    console.log(availableFactionsP3F2);

    //function to choose an available 1st faction for player four
    const randomFactionOnePlayerFour = () => {
        randomFaction = Math.floor(Math.random() * availableFactionsP3F2.length);
        factionOnePlayerFour = availableFactionsP3F2[randomFaction];
        
        return factionOnePlayerFour;
    };
    
    //return 1st random faction for player four
    randomFactionOnePlayerFour();
    console.log(`Player Four's 1st faction is ${factionOnePlayerFour}!`);
    
    //remove player four's 1st faction
    const availableFactionsP4F1 = availableFactionsP3F2.filter((item) => item!==factionOnePlayerFour);
    console.log(availableFactionsP4F1);

    //function to choose an available 2nd faction for player four
    const randomFactionTwoPlayerFour = () => {
        randomFaction = Math.floor(Math.random() * availableFactionsP4F1.length);
        factionTwoPlayerFour = availableFactionsP4F1[randomFaction];
        
        return factionTwoPlayerFour;
    };
    
    //return 2nd random faction for player four
    randomFactionTwoPlayerFour();
    console.log(`Player Four's 2nd faction is ${factionTwoPlayerFour}!`);
    
    //remove player fours's 2nd faction
    const availableFactionsP4F2 = availableFactionsP4F1.filter((item) => item!==factionTwoPlayerFour);
    console.log(availableFactionsP4F2);


    // if(factionOnePlayerOne === factionTwoPlayerOne) {
    //     console.log('rerolling faction two');
    //     randomFactionTwoPlayerOne();
    //     console.log(`Your second faction is ${factionTwoPlayerOne}!`)
    // } else {
    //     console.log(`Your second faction is ${factionTwoPlayerOne}!`)
    // }
    // randomFactionsPlayerOne();
    // randomFactionsPlayerTwo();
//     if(factions.length === 0) {
//         console.log('Please create faction list first')
//     } else {
//     randomFactionOnePlayerOne();
//     console.log(`Your first faction is ${factionOnePlayerOne}!`)
//     randomFactionTwoPlayerOne();
//     if(factionOnePlayerOne === factionTwoPlayerOne) {
//         randomFactionTwoPlayerOne();
//         console.log('rerolling second faction');
//         console.log(`Your second faction is ${factionTwoPlayerOne}!`)
//     } else {
//         console.log(`Your second faction is ${factionTwoPlayerOne}!`)
//     }
    // };
 
});

// functions to choose 2 random factions for player one
const randomFactionOnePlayerOne = () => {
    randomFaction = Math.floor(Math.random() * factions.length);
    factionOnePlayerOne = factions[randomFaction];
    
    return factionOnePlayerOne;
};

// const randomFactionTwoPlayerOne = () => {
//     randomFaction = Math.floor(Math.random() * factions.length);
//     factionTwoPlayerOne = availableFactionsP1F1[randomFaction];
    
//     return factionTwoPlayerOne;
// }

const randomFactionsPlayerOne = () => {
    if(factions.length === 0) {
        console.log('Please create faction list first')
    } else {
        randomFactionOnePlayerOne();
        console.log(`Player One's first faction is ${factionOnePlayerOne}!`)
        randomFactionTwoPlayerOne();
        if(factionOnePlayerOne === factionTwoPlayerOne) {
            randomFactionTwoPlayerOne();
            console.log('rerolling second faction');
            console.log(`Player One's second faction is ${factionTwoPlayerOne}!`)
        } else {
            console.log(`Player One's second faction is ${factionTwoPlayerOne}!`)
        }
        };
};


//functions to choose 2 random factions for player two
const randomFactionOnePlayerTwo = () => {
    randomFaction = Math.floor(Math.random() * factions.length);
    factionOnePlayerTwo = factions[randomFaction];
    
    return factionOnePlayerTwo;
};

const randomFactionTwoPlayerTwo = () => {
    randomFaction = Math.floor(Math.random() * factions.length);
    factionTwoPlayerTwo = factions[randomFaction];
    
    return factionTwoPlayerTwo;
}

const randomFactionsPlayerTwo = () => {
    randomFactionOnePlayerTwo();
    if(factionOnePlayerTwo === factionOnePlayerOne || factionTwoPlayerOne) {
        console.log('rerolling first faction');    
        console.log(`Player Two's first faction is ${factionOnePlayerTwo}!`);
        randomFactionOnePlayerTwo();
    } else {
        console.log(`Player Two's first faction is ${factionOnePlayerTwo}!`)
    } 
};
    
    
    
//     (factionTwoPlayerTwo === factionOnePlayerTwo || factionOnePlayerOne || factionTwoPlayerOne) {
//         randomFactionTwoPlayerTwo();
//         console.log('rerolling second faction');
//         console.log(`Player Two's second faction is ${factionTwoPlayerTwo}!`)
//     } else {
//         console.log(`Player Two's second faction is ${factionTwoPlayerTwo}!`)
//     }
//     };
// };
//variables for event listeners
const twoPlayers = document.getElementById('2players');
const threePlayers = document.getElementById('3players');
const fourPlayers = document.getElementById('4players');

//variable and function to remove list of available factions and
//replace with a list of chosen factions for each player
const draft = document.getElementById('draft');

const draftResults = document.getElementById('results');

// const p1Draft = document.getElementById('p1');
// const p1f1 = document.createElement('li');
// p1f1.textContent = `${factionOnePlayerOne}`;
// p1Draft.append(p1f1);


//functions to generate random factions for two players
twoPlayers.addEventListener('click', e => {
    e.preventDefault;
    //function to choose an available 1st faction for player one
    const randomFactionOnePlayerOne = () => {
        randomFaction = Math.floor(Math.random() * factions.length);
        factionOnePlayerOne = factions[randomFaction];
        
        return factionOnePlayerOne;
    };

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


    //append factions for player one to html
    const p1Draft = document.getElementById('p1');
    const p1f1 = document.createElement('li');
    p1f1.textContent = `${factionOnePlayerOne}`;
    p1Draft.append(p1f1);

    const p1f2 = document.createElement('li');
    p1f2.textContent = `${factionTwoPlayerOne}`;
    p1Draft.append(p1f2);

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

        //append factions for player one to html
        const p2Draft = document.getElementById('p2');
        const p2f1 = document.createElement('li');
        p2f1.textContent = `${factionOnePlayerTwo}`;
        p2Draft.append(p2f1);
    
        const p2f2 = document.createElement('li');
        p2f2.textContent = `${factionTwoPlayerTwo}`;
        p2Draft.append(p2f2);
    
    
    //remove player two's 2nd faction
    const availableFactionsP2F2 = availableFactionsP2F1.filter((item) => item!==factionTwoPlayerTwo);
    console.log(availableFactionsP2F2);
});

//functions to generate random factions for three players
threePlayers.addEventListener('click', e => {
    e.preventDefault;
    //function to choose an available 1st faction for player one
    //return 1st random faction for player one
    const randomFactionOnePlayerOne = () => {
        randomFaction = Math.floor(Math.random() * factions.length);
        factionOnePlayerOne = factions[randomFaction];
        
        return factionOnePlayerOne;
    };
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
});

//functions to generate random factions for four players
fourPlayers.addEventListener('click', e => {
    e.preventDefault;
    //function to choose an available 1st faction for player one
    const randomFactionOnePlayerOne = () => {
        randomFaction = Math.floor(Math.random() * factions.length);
        factionOnePlayerOne = factions[randomFaction];
        
        return factionOnePlayerOne;
    };
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
});

// functions to choose 2 random factions for player one
// const randomFactionOnePlayerOne = () => {
//     randomFaction = Math.floor(Math.random() * factions.length);
//     factionOnePlayerOne = factions[randomFaction];
    
//     return factionOnePlayerOne;
// };
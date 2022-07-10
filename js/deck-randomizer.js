//variables for event listeners
const twoPlayers = document.getElementById('twoplayers');
const threePlayers = document.getElementById('threeplayers');
const fourPlayers = document.getElementById('fourplayers');

//variable and function to remove list of available factions and
//replace with a list of chosen factions for each player
const draft = document.getElementById('draft');

//variable to get ul of all players factions
const playerOneList = document.getElementById('p1');
const playerTwoList = document.getElementById('p2');
const playerThreeList = document.getElementById('p3');
const playerFourList = document.getElementById('p4');

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

    // function to make player faction results viewable
    if(draftResults.classList.contains('d-none')){
        draftResults.classList.remove('d-none');
        draftResults.classList.add('d-flex');
    };

    //make factions to lowercase
        //player 1
        const f1p1LC = factionOnePlayerOne.toLowerCase();
        const f2p1LC = factionTwoPlayerOne.toLowerCase();

        //player 2
        const f1p2LC = factionOnePlayerTwo.toLowerCase();
        const f2p2LC = factionTwoPlayerTwo.toLowerCase();

    //replace spaces with "-"
        //player 1
        const f1p1Logo = f1p1LC.replace(/\s/g, "-")
        .replace(/\./g, "");
        const f2p1Logo = f2p1LC.replace(/\s/g, "-")
        .replace(/\./g, "");
        console.log(f1p1Logo);
        console.log(f2p1Logo);

        //player 2
        const f1p2Logo = f1p2LC.replace(/\s/g, "-")
        .replace(/\./g, "");
        const f2p2Logo = f2p2LC.replace(/\s/g, "-")
        .replace(/\./g, "");
        console.log(f1p2Logo);
        console.log(f2p2Logo);

        //get container for each player's draft results
        const p1Results = document.getElementById('p1-container');
        const p2Results = document.getElementById('p2-container');
        const p3Results = document.getElementById('p3-container');
        const p4Results = document.getElementById('p4-container');

        //add results for p1 to html
        p1Results.innerHTML = `
        <div class="">
            <div class="text-center fw-bold">Player 1</div>
        </div>
    
        <div id="p1" class="d-flex justify-content-around">      
            <div class="d-flex flex-column justify-content-space-between">
                <img class="faclogo rounded mx-auto d-block" src="img/logo/${f1p1Logo}-logo.png" alt="">
                <div id="p1f1-test" class="facname text-center">${factionOnePlayerOne}</div>
            </div>
    
            <div class="d-flex flex-column justify-content-space-between">
                <img class="faclogo rounded mx-auto d-block" src="img/logo/${f2p1Logo}-logo.png" alt="">
                <div id="p1f2-test" class="facname text-center">${factionTwoPlayerOne}</div>
            </div>
        </div>
        `;

        //add results for p2 to html
        p2Results.innerHTML = `
        <div class="">
            <div class="text-center fw-bold">Player 2</div>
        </div>
    
        <div id="p2" class="d-flex justify-content-around">      
            <div class="d-flex flex-column justify-content-space-between">
                <img class="faclogo rounded mx-auto d-block" src="img/logo/${f1p2Logo}-logo.png" alt="">
                <div id="p2f1" class="facname text-center">${factionOnePlayerTwo}</div>
            </div>
    
            <div class="d-flex flex-column justify-content-space-between">
                <img class="faclogo rounded mx-auto d-block" src="img/logo/${f2p2Logo}-logo.png" alt="">
                <div id="p2f2" class="facname text-center">${factionTwoPlayerTwo}</div>
            </div>
        </div>
        `;

        //clear results for p3
        p3Results.innerHTML = '';

        //clear results for p4
        p4Results.innerHTML = '';
    
    //function to make faction list have a display of none
    factionList.classList.remove('d-flex');
    factionList.classList.add('d-none');
});

//functions to generate random factions for three players
threePlayers.addEventListener('click', e => {
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

    // function to make player faction results viewable
    if(draftResults.classList.contains('d-none')){
        draftResults.classList.remove('d-none');
        draftResults.classList.add('d-flex');
    };
    //make factions to lowercase
        //player 1
        const f1p1LC = factionOnePlayerOne.toLowerCase();
        const f2p1LC = factionTwoPlayerOne.toLowerCase();

        //player 2
        const f1p2LC = factionOnePlayerTwo.toLowerCase();
        const f2p2LC = factionTwoPlayerTwo.toLowerCase();

        //player 3
        const f1p3LC = factionOnePlayerThree.toLowerCase();
        const f2p3LC = factionTwoPlayerThree.toLowerCase();

    //replace spaces with "-"
        //player 1
        const f1p1Logo = f1p1LC.replace(/\s/g, "-")
        .replace(/\./g, "");
        const f2p1Logo = f2p1LC.replace(/\s/g, "-")
        .replace(/\./g, "");
        console.log(f1p1Logo);
        console.log(f2p1Logo);

        //player 2
        const f1p2Logo = f1p2LC.replace(/\s/g, "-")
        .replace(/\./g, "");
        const f2p2Logo = f2p2LC.replace(/\s/g, "-")
        .replace(/\./g, "");
        console.log(f1p2Logo);
        console.log(f2p2Logo);

        //player 3
        const f1p3Logo = f1p3LC.replace(/\s/g, "-")
        .replace(/\./g, "");
        const f2p3Logo = f2p3LC.replace(/\s/g, "-")
        .replace(/\./g, "");
        console.log(f1p3Logo);
        console.log(f2p3Logo);

        //get container for each player's draft results
        const p1Results = document.getElementById('p1-container');
        const p2Results = document.getElementById('p2-container');
        const p3Results = document.getElementById('p3-container');
        const p4Results = document.getElementById('p4-container');

        //add results for p1 to html
        p1Results.innerHTML = `
        <div class="">
            <div class="text-center fw-bold">Player 1</div>
        </div>
    
        <div id="p1" class="d-flex justify-content-around">      
            <div class="d-flex flex-column justify-content-space-between">
                <img class="faclogo rounded mx-auto d-block" src="img/logo/${f1p1Logo}-logo.png" alt="">
                <div id="p1f1-test" class="facname text-center">${factionOnePlayerOne}</div>
            </div>
    
            <div class="d-flex flex-column justify-content-space-between">
                <img class="faclogo rounded mx-auto d-block" src="img/logo/${f2p1Logo}-logo.png" alt="">
                <div id="p1f2-test" class="facname text-center">${factionTwoPlayerOne}</div>
            </div>
        </div>
        `;

        //add results for p2 to html
        p2Results.innerHTML = `
        <div class="">
            <div class="text-center fw-bold">Player 2</div>
        </div>
    
        <div id="p2" class="d-flex justify-content-around">      
            <div class="d-flex flex-column justify-content-space-between">
                <img class="faclogo rounded mx-auto d-block" src="img/logo/${f1p2Logo}-logo.png" alt="">
                <div id="p2f1" class="facname text-center">${factionOnePlayerTwo}</div>
            </div>
    
            <div class="d-flex flex-column justify-content-space-between">
                <img class="faclogo rounded mx-auto d-block" src="img/logo/${f2p2Logo}-logo.png" alt="">
                <div id="p2f2" class="facname text-center">${factionTwoPlayerTwo}</div>
            </div>
        </div>
        `;

        //add results for p3 to html
        p3Results.innerHTML = `
        <div class="">
            <div class="text-center fw-bold">Player 3</div>
        </div>
    
        <div id="p3" class="d-flex justify-content-around">      
            <div class="d-flex flex-column justify-content-space-between">
                <img class="faclogo rounded mx-auto d-block" src="img/logo/${f1p3Logo}-logo.png" alt="">
                <div id="p3f1" class="facname text-center">${factionOnePlayerThree}</div>
            </div>
    
            <div class="d-flex flex-column justify-content-space-between">
                <img class="faclogo rounded mx-auto d-block" src="img/logo/${f2p3Logo}-logo.png" alt="">
                <div id="p3f2" class="facname text-center">${factionTwoPlayerThree}</div>
            </div>
        </div>
        `;

        //clear results for p4
        p4Results.innerHTML = '';

    //function to make extra player faction results display none
    // playerFourList.style.display = 'none';
    
    //function to make faction list have a display of none
    factionList.classList.remove('d-flex');
    factionList.classList.add('d-none');
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

    // function to make player faction results viewable
    if(draftResults.classList.contains('d-none')){
        draftResults.classList.remove('d-none');
        draftResults.classList.add('d-flex');
    };

    
    //function to make faction list have a display of none
    factionList.classList.remove('d-flex');
    factionList.classList.add('d-none');

    //make factions to lowercase
        //player 1
        const f1p1LC = factionOnePlayerOne.toLowerCase();
        const f2p1LC = factionTwoPlayerOne.toLowerCase();

        //player 2
        const f1p2LC = factionOnePlayerTwo.toLowerCase();
        const f2p2LC = factionTwoPlayerTwo.toLowerCase();

        //player 3
        const f1p3LC = factionOnePlayerThree.toLowerCase();
        const f2p3LC = factionTwoPlayerThree.toLowerCase();

        //player 4
        const f1p4LC = factionOnePlayerFour.toLowerCase();
        const f2p4LC = factionTwoPlayerFour.toLowerCase();

    //replace spaces with "-"
            //player 1
            const f1p1Logo = f1p1LC.replace(/\s/g, "-")
            .replace(/\./g, "");
            const f2p1Logo = f2p1LC.replace(/\s/g, "-")
            .replace(/\./g, "");
            console.log(f1p1Logo);
            console.log(f2p1Logo);
    
            //player 2
            const f1p2Logo = f1p2LC.replace(/\s/g, "-")
            .replace(/\./g, "");
            const f2p2Logo = f2p2LC.replace(/\s/g, "-")
            .replace(/\./g, "");
            console.log(f1p2Logo);
            console.log(f2p2Logo);
    
            //player 3
            const f1p3Logo = f1p3LC.replace(/\s/g, "-")
            .replace(/\./g, "");
            const f2p3Logo = f2p3LC.replace(/\s/g, "-")
            .replace(/\./g, "");
            console.log(f1p3Logo);
            console.log(f2p3Logo);
    
            //player 4
            const f1p4Logo = f1p4LC.replace(/\s/g, "-")
            .replace(/\./g, "");
            const f2p4Logo = f2p4LC.replace(/\s/g, "-")
            .replace(/\./g, "");
            console.log(f1p4Logo);
            console.log(f2p4Logo);

        //get container for each player's draft results
        const p1Results = document.getElementById('p1-container');
        const p2Results = document.getElementById('p2-container');
        const p3Results = document.getElementById('p3-container');
        const p4Results = document.getElementById('p4-container');

        //add results for p1 to html
        p1Results.innerHTML = `
        <div class="">
            <div class="text-center fw-bold">Player 1</div>
        </div>
    
        <div id="p1" class="d-flex justify-content-around">      
            <div class="d-flex flex-column justify-content-space-between">
                <img class="faclogo rounded mx-auto d-block" src="img/logo/${f1p1Logo}-logo.png" alt="">
                <div id="p1f1-test" class="facname text-center">${factionOnePlayerOne}</div>
            </div>
    
            <div class="d-flex flex-column justify-content-space-between">
                <img class="faclogo rounded mx-auto d-block" src="img/logo/${f2p1Logo}-logo.png" alt="">
                <div id="p1f2-test" class="facname text-center">${factionTwoPlayerOne}</div>
            </div>
        </div>
        `;

        //add results for p2 to html
        p2Results.innerHTML = `
        <div class="">
            <div class="text-center fw-bold">Player 2</div>
        </div>
    
        <div id="p2" class="d-flex justify-content-around">      
            <div class="d-flex flex-column justify-content-space-between">
                <img class="faclogo rounded mx-auto d-block" src="img/logo/${f1p2Logo}-logo.png" alt="">
                <div id="p2f1" class="facname text-center">${factionOnePlayerTwo}</div>
            </div>
    
            <div class="d-flex flex-column justify-content-space-between">
                <img class="faclogo rounded mx-auto d-block" src="img/logo/${f2p2Logo}-logo.png" alt="">
                <div id="p2f2" class="facname text-center">${factionTwoPlayerTwo}</div>
            </div>
        </div>
        `;

        //add results for p3 to html
        p3Results.innerHTML = `
        <div class="">
            <div class="text-center fw-bold">Player 3</div>
        </div>
    
        <div id="p3" class="d-flex justify-content-around">      
            <div class="d-flex flex-column justify-content-space-between">
                <img class="faclogo rounded mx-auto d-block" src="img/logo/${f1p3Logo}-logo.png" alt="">
                <div id="p3f1" class="facname text-center">${factionOnePlayerThree}</div>
            </div>
    
            <div class="d-flex flex-column justify-content-space-between">
                <img class="faclogo rounded mx-auto d-block" src="img/logo/${f2p3Logo}-logo.png" alt="">
                <div id="p3f2" class="facname text-center">${factionTwoPlayerThree}</div>
            </div>
        </div>
        `;

        //add results for p4 to html
        p4Results.innerHTML = `
        <div class="">
            <div class="text-center fw-bold">Player 4</div>
        </div>
    
        <div id="p4" class="d-flex justify-content-around">      
            <div class="d-flex flex-column justify-content-space-between">
                <img class="faclogo rounded mx-auto d-block" src="img/logo/${f1p4Logo}-logo.png" alt="">
                <div id="p4f1" class="facname text-center">${factionOnePlayerFour}</div>
            </div>
    
            <div class="d-flex flex-column justify-content-space-between">
                <img class="faclogo rounded mx-auto d-block" src="img/logo/${f2p4Logo}-logo.png" alt="">
                <div id="p4f2" class="facname text-center">${factionTwoPlayerFour}</div>
            </div>
        </div>
        `;

});

// functions to choose 2 random factions for player one
// const randomFactionOnePlayerOne = () => {
//     randomFaction = Math.floor(Math.random() * factions.length);
//     factionOnePlayerOne = factions[randomFaction];
    
//     return factionOnePlayerOne;
// };
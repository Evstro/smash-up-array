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

//event listener and function to create a list of factions based on sets
const factionList = document.getElementById('factionlistcontainer');
const createFactionList = document.getElementById('createfactionlist');
const draftBox = document.getElementById('draft');

const twoPlayer = document.getElementById('twoplayers');
const threePlayer = document.getElementById('threeplayers');
const fourPlayer = document.getElementById('fourplayers');

createFactionList.addEventListener('click', e => {
    e.preventDefault();
    //variable to convert string maxPlayers to a 
    //number variable called maxNumPlayers
    const maxNumPlayers = Number(maxPlayers);
    console.log(maxNumPlayers);

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
        
//this function will replace the set selection box if
//more than two factions are in the faction array
    if(factions.length < maxPlayers * 2) {
        alert('Please select more sets');
    } else if(factions.length >= maxPlayers * 2) {
        setBox.remove();
        //function to display draft buttons
        // draftBox.style.display ='block'
        
        if(draftBox.classList.contains('d-none')){
            draftBox.classList.remove('d-none');
            draftBox.classList.add('d-flex');
        }
        // factionList.style.display = 'block';
        if(factionList.classList.contains('d-none')){
            factionList.classList.remove('d-none');
            factionList.classList.add('d-flex');
        }
        factions.forEach((item) => {
            let li = document.createElement('li');
            li.classList.add('list-inline-item')
            li.innerText = item;
            factionList.appendChild(li);
        });

        
    };

    // functions to only display the max amount of players
    const twoPlayerDis = () => {
    threePlayers.style.display = 'none';
    fourPlayers.style.display = 'none';
    console.log('two players')
    };

    const threePlayerDis = () => {
        fourPlayers.style.display = 'none';
        console.log('three players')
        };


    // if statements to run functions based on the max amount of players
    if(maxNumPlayers === 2) {
        twoPlayerDis();
    } else if(maxNumPlayers === 3) {
        threePlayerDis();
    } else if (maxNumPlayers === 4) {
        console.log('four players')
    }


});

//function to give the user an option to refresh the page to select new sets
const setBox = document.getElementById('setboxcontainer');
function refreshPage(){
    window.location.reload();
};

//function to allow user to select all sets
function toggle(source) {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] != source)
            checkboxes[i].checked = source.checked;
    }
};


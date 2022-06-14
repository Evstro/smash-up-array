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
const factionList = document.getElementById('factionlist');
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
    // const availableFactions = factions.filter((item) => item!=='Aliens');
    // console.log(availableFactions);
//this function will replace the set selection box if
//more than two factions are in the faction array
    if(factions.length > 2) {
        setBox.remove();
        factionList.style.display = 'block'
        factions.forEach((item) => {
            let li = document.createElement('li');
            li.innerText = item;
            factionList.appendChild(li);
        });
    } else {
        alert('Please select more sets');
    };
});

//function to give the user an option to refresh the page to select new sets
const setBox = document.getElementById('setbox');
function refreshPage(){
    window.location.reload();
}

//function to allow user to select all sets
function toggle(source) {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] != source)
            checkboxes[i].checked = source.checked;
    }
}
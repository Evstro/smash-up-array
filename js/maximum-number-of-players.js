const maxNumberPlayersBox = document.getElementById('maxnumberplayersbox');
const submitMaxNumPlayers = document.getElementById('submitmaxnumofplayers');

submitMaxNumPlayers.addEventListener('click' , e => {
    e.preventDefault;
    const maxPlayersForm = document.forms.maxplayersform;
    const checked = maxPlayersForm.querySelector('input[name=maxplayers]:checked');
    maxNumberPlayersBox.style.display = 'none';
    // setBox.style.display = 'block';
    if(setBox.classList.contains('d-none')){
        setBox.classList.remove('d-none');
    };
    maxPlayers = checked.value;
    console.log(maxPlayers);
    return maxPlayers;
});

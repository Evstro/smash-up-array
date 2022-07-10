const maxNumberPlayersBox = document.getElementById('maxnumberplayersbox');
const submitMaxNumPlayers = document.getElementById('submitmaxnumofplayers');

submitMaxNumPlayers.addEventListener('click' , e => {
    e.preventDefault;
    const maxPlayersForm = document.forms.maxplayersform;
    const checked = maxPlayersForm.querySelector('input[name=maxplayers]:checked');
    maxNumberPlayersBox.classList.remove('d-flex');
    maxNumberPlayersBox.classList.add('d-none');
    // setBox.style.display = 'block';
    setBox.classList.remove('d-none');
    setBox.classList.add('d-flex')
    maxPlayers = checked.value;
    console.log(maxPlayers);
    return maxPlayers;
});

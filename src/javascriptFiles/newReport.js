let mainArea = document.getElementById('mainContent');
let startButton = document.getElementById('startButton')



function clear(){
    mainArea.innerHTML = '';
}

startButton.addEventListener('click', ()=> {
    clear()
})
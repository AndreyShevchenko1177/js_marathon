alert('Fight...');

let player1 = {
    name: 'Vasya',
    hp: 90,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['arm', 'leg', 'knife', 'bit'],
    attack() { console.log(this.name + ' Fight...'); }
};

let player2 = {
    name: 'Kolya',
    hp: 60,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['arm', 'leg', 'gun', 'spear'],
    attack() { console.log(this.name + ' Fight...'); }
};

const createPlayer = function (playerClassNmae, playerObj) {

    let $player = document.createElement('div');
    $player.className = playerClassNmae;

    let $life = document.createElement('div');
    $life.className = 'life';
    $life.style.width = `${playerObj.hp}%`;

    let $name = document.createElement('div');
    $name.className = 'name';
    $name.innerHTML = playerObj.name;

    let $progressbar = document.createElement('div');
    $progressbar.className = 'progressbar';

    let $character = document.createElement('div');
    $character.className = 'character';

    let $img = document.createElement('img');
    $img.src = playerObj.img;

    $player.append($progressbar);
    $player.append($character);

    $progressbar.append($life);
    $progressbar.append($name);

    $character.append($img);

    document.querySelector('div.arenas').append($player);

};

createPlayer('player1', player1);
createPlayer('player2', player2);
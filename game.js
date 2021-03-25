let weapons = {
    sword: {
        name: 'sword',
        modifier: 15,
        description: 'tis but a scratch!'
    },
    gun: {
        name: 'gun',
        modifier: 50,
        description: 'this is my boomstick!'
    },
    shtick: {
        name: 'shtick',
        modifier: 5,
        description: 'get hit by my ugly shtick!'
    }
}
let result = "Smashed Steve"

let modifer = 0

let target = {
    steve: {
        health: 100,
        hit: 0,
        items: [],
        attacks: {
            slap: 1,
            punch: 15,
            kick: 10
        }
    }
}

function giveWeapon(type) {
    target.steve.items.push(weapons[type])
}

function attack(type) {
    target.steve.health -= target.steve.attacks[type] + addMods()
    target.steve.hit++
    update()
}


// function giveSword() {
//     target.steve.items.push(sword)
// }
// function giveGun() {
//     target.steve.items.push(gun)
// }
// function giveShtick() {
//     target.steve.items.push(shtick)
// }

function addMods() {
    let total = 0
    for (let i = 0; i < target.steve.items.length; i++) {
        const item = target.steve.items[i];
        total += item.modifier
    }
    return total
}


// function slap() {
//     target.steve.health -= 1 + addMods()
//     target.steve.hit++
//     update()
// }
// function kick() {
//     target.steve.health -= 10 + addMods()
//     target.steve.hit++
//     update()
// }
// function punch() {
//     target.steve.health -= 5 + addMods()
//     target.steve.hit++
//     update()
// }

function playerName(name) {
}

function minimumHealth() {
    if (target.steve.health <= 0) {
        document.getElementById('health').innerText = "You Died"
    }
}

function update() {
    document.getElementById('name').innerText = `${'Steve'}`
    document.getElementById('health').innerText = ` ${target.steve.health}`
    document.getElementById('hit').innerText = `${target.steve.hit}`
    minimumHealth()
}
playerName()
update()
//IF STATEMENT FOR AFTER CHOOSING WHICH TYPE YOU AND THE COMP WILL USE TO DECIDE THE MODIFIER IE. WATER VS FIRE 1.5X?
var damage = 1
var allModsEnemy = 1
var allModsPlayer = 1
var enemy = new Target('Enemy', 100)
var player = new Target('You', 200)

function Items(name, modifier, description) { //<--Constructor to build items.
    this.name = name
    this.modifier = modifier
    this.description = description
}
function Target(name, health) {              //<--Constructor to build enemies.
    this.name = name
    this.health = health
    this.hits = 0
    this.equipment = []
    //this.hasMods = ['reserved']
}
var inventory = {                           //Possible item choices.
    shield: new Items("Shield", -0.3, "This is an awesome shield!"),//Item objects
    maul: new Items("Maul", 0.5, "IT'S HAMMERTIME!"),               //made with
    armorPot: new Items("Armor Potion", -0.4, "It's medicinal")     //a constructor.
}
function healthCheckEnemy() {               //function to stop health going below 0.
    if (enemy.health < 0) {
        enemy.health = 0
    }
}
function healthCheckPlayer() {               //function to stop health going below 0.
    if (player.health < 0) {
        player.health = 0
    }
}
function slapPlayer() {                           //function for the slap attack.
    player.health -= damage * allModsPlayer
    player.hits++
    healthCheckEnemy()
    update()
}
function punchPlayer() {                          //function for punch attack.
    player.health -= (damage * 5) * allModsPlayer
    player.hits++
    healthCheckEnemy()
    update()
}
function kickPlayer() {                           //function for kick attack.
    player.health -= (damage * 10) * allModsPlayer
    player.hits++
    healthCheckEnemy()
    update()
}
function slapEnemy() {                           //function for the slap attack.
    enemy.health -= damage * allModsEnemy
    enemy.hits++
    healthCheckEnemy()
    update()
}
function punchEnemy() {                          //function for punch attack.
    enemy.health -= (damage * 5) * allModsEnemy
    enemy.hits++
    healthCheckEnemy()
    update()
}
function kickEnemy() {                           //function for kick attack.
    enemy.health -= (damage * 10) * allModsEnemy
    enemy.hits++
    healthCheckEnemy()
    update()
}
function update() {                         //function that updates info on page.
    document.getElementById('enemyName').innerText = enemy.name
    document.getElementById('enemyHealth').innerText = enemy.health.toFixed(2)
    document.getElementById('enemyHits').innerText = enemy.hits

    document.getElementById('playerName').innerText = player.name
    document.getElementById('playerHealth').innerText = player.health.toFixed(2)
    document.getElementById('playerHits').innerText = player.hits
}
function giveItems(item, target) {
    for (var i = 0; i < target.equipment.length; i++) {
        // var target = array[i];
        if(target.equipment[i].name == item.name)
        return
    }
    target.equipment.push(item)
    addModsEnemy()
}
function addModsEnemy() {            //function to apply item modifiers.
    var out = 1
    for (var i = 0; i < enemy.equipment.length; i++) {
        out += enemy.equipment[i].modifier
    }
    allModsEnemy = out.toFixed(2)
}
function addModsPlayer() {                        //function to apply item modifiers.
    var out = 1
    for (var i = 0; i < player.equipment.length; i++) {
        
        out += player.equipment[i].modifier
    }
    allModsPlayer = out.toFixed(2)
}
update()
console.log(enemy)
console.log(player)
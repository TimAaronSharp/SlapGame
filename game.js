//IF STATEMENT FOR AFTER CHOOSING WHICH TYPE YOU AND THE COMP WILL USE TO DECIDE THE MODIFIER IE. WATER VS FIRE 1.5X?
var damage = 1
var allMods = 1
// var toolBelt = enemy.equipment
function Items(name, modifier, description) {
    this.name = name
    this.modifier = modifier
    this.description = description
}

function Target(name, health) {
    this.name = name
    this.health = health
    this.hits = 0
    this.equipment = []
}

var inventory = {
    shield: new Items("Shield", -0.3, "This is an awesome shield!"),
    maul: new Items("Maul", 0.5, "IT'S HAMMERTIME!"),
    armorPot: new Items("Armor Potion", -0.4, "It's medicinal")
}
//console.log(inventory)
var enemy = new Target('Whatever Name You Chose', 100)
// console.log(enemy)
function healthCheck() {
    if (enemy.health < 0) {
        enemy.health = 0
    }
}
function slap() {
    addMods()
    enemy.health -= damage * allMods
    enemy.hits++
    healthCheck()
    update()
}
console.log(damage * allMods)
function punch() {
    addMods()
    enemy.health -= (damage * 5) * allMods
    enemy.hits++
    healthCheck()
    update()
}
console.log((damage * 5) * allMods)
function kick() {
    addMods()
    enemy.health -= (damage * 10) * allMods
    enemy.hits++
    healthCheck()
    update()
}
console.log((damage * 10) * allMods)
function update() {
    document.getElementById('name').innerText = enemy.name
    document.getElementById('health').innerText = enemy.health.toFixed(2)
    document.getElementById('hits').innerText = enemy.hits
}
function giveShield(inventory) {
    enemy.equipment.push(inventory.shield)
}
function giveMaul(inventory) {
    enemy.equipment.push(inventory.maul)
}
function giveArmorPot(inventory) {
    enemy.equipment.push(inventory.armorPot)
}
function addMods() {
    var out = 1
    for (var i = 0; i < enemy.equipment.length; i++) {
        out += enemy.equipment[i].modifier
        // console.log(out)
    }
    allMods = out.toFixed(2)
    // console.log(allMods)
}
// function addItems(giveShield, giveMaul, giveArmorPot){
//     document.getElementById("giveShield").onclick = giveShield(inventory)
//     document.getElementById("giveMaul").onclick = giveMaul(inventory)
//     document.getElementById("giveArmorPot").onclick = giveArmorPot(inventory)
// }
console.log(enemy)
update()
// giveShield(inventory)
// giveMaul(inventory)
// giveArmorPot(inventory)

// x = 1
// console.log(x.toFixed(2))


/*INCASE REFACTORING WRECKS MY CODE
var health = 100
var name = 'Whatever Name You Chose'
var hits = 0
function healthCheck() {
    if (health < 0) {
        health = 0
    }
}
function slap() {
    health -= 1
    hits++
    healthCheck()
    update()
}
//slap()
//punch()
//kick()
function punch() {
    health -= 5
    hits++
    healthCheck()
    update()
}
function kick() {
    health -= 10
    hits++
    healthCheck()
    update()
}
function update() {
    document.getElementById('name').innerText = name
    document.getElementById('health').innerText = health
    document.getElementById('hits').innerText = hits
}
update() */
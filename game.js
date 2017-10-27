//IF STATEMENT FOR AFTER CHOOSING WHICH TYPE YOU AND THE COMP WILL USE TO DECIDE THE MODIFIER IE. WATER VS FIRE 1.5X?
var damage = 1
var allMods = 1
var enemy = new Target('Whatever Name You Chose', 100)

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
}
var inventory = {                           //Possible item choices.
    shield: new Items("Shield", -0.3, "This is an awesome shield!"),//Item objects
    maul: new Items("Maul", 0.5, "IT'S HAMMERTIME!"),               //made with
    armorPot: new Items("Armor Potion", -0.4, "It's medicinal")     //a constructor.
}

function healthCheck() {                    //function to stop health going below 0.
    if (enemy.health < 0) {
        enemy.health = 0
    }
}
function slap() {                           //function for the slap attack.
    addMods()
    enemy.health -= damage * allMods
    enemy.hits++
    healthCheck()
    update()
}
function punch() {                          //function for punch attack.
    addMods()
    enemy.health -= (damage * 5) * allMods
    enemy.hits++
    healthCheck()
    update()
}
function kick() {                           //function for kick attack.
    addMods()
    enemy.health -= (damage * 10) * allMods
    enemy.hits++
    healthCheck()
    update()
}
function update() {                         //function that updates info on page.
    document.getElementById('name').innerText = enemy.name
    document.getElementById('health').innerText = enemy.health.toFixed(2)
    document.getElementById('hits').innerText = enemy.hits
}
function giveShield(inventory) {            //function to give shield to enemy.
    enemy.equipment.push(inventory.shield)
}
function giveMaul(inventory) {              //function to give to maul to enemy.
    enemy.equipment.push(inventory.maul)
}
function giveArmorPot(inventory) {          //function to give armor pot to enemy.
    enemy.equipment.push(inventory.armorPot)
}
function addMods() {                        //function to apply item modifiers.
    var out = 1
    for (var i = 0; i < enemy.equipment.length; i++) {
        out += enemy.equipment[i].modifier 
    }
    allMods = out.toFixed(2)
}
update()
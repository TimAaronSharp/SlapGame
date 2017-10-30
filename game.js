//IF STATEMENT FOR AFTER CHOOSING WHICH TYPE YOU AND THE COMP WILL USE TO DECIDE THE MODIFIER IE. WATER VS FIRE 1.5X?
var damage = 1
var allModsEnemy = 1
var allModsPlayer = 1
var enemy = new Target('Enemy', 150)
var player = new Target('You', 100)

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
    push: new Items("Github Push", -0.3, "Push every 5 min!"),//Item objects
    badCode: new Items("Bad Code", 0.5, "YOU'RE CODE IS CRAP!"),               //made with
    pull: new Items("Pull Working Build", -0.4, "Good thing you made a backup!")     //a constructor.
}
function healthCheckEnemy() {               //function to stop health going below 0.
    if (enemy.health > 150) {
        enemy.health = 150
    }
    if (enemy.health < 0) {
        enemy.health = 0
    }
}
function healthCheckPlayer() {               //function to stop health going below 0.
    if (player.health > 100) {
        player.health = 100
    }
    if (player.health < 0) {
        player.health = 0
    }
}
function slapPlayer() {                           //function for the slap attack.
    player.health -= damage * allModsPlayer
    player.hits++
    healthCheckPlayer()
    healthCheckEnemy()
    update()
}
function punchPlayer() {                          //function for punch attack.
    player.health -= (damage * 5) * allModsPlayer
    player.hits++
    healthCheckPlayer()
    healthCheckEnemy()
    update()
}
function kickPlayer() {                           //function for kick attack.
    player.health -= (damage * 10) * allModsPlayer
    player.hits++
    healthCheckPlayer()
    healthCheckEnemy()
    update()
}
function slapEnemy() {                           //function for the slap attack.
    enemy.health -= damage * allModsEnemy
    enemy.hits++
    healthCheckPlayer()
    healthCheckEnemy()
    enemyAttack()
    update()
}
function punchEnemy() {                          //function for punch attack.
    enemy.health -= (damage * 5) * allModsEnemy
    enemy.hits++
    healthCheckPlayer()
    healthCheckEnemy()
    enemyAttack()
    update()
}
function kickEnemy() {                           //function for kick attack.
    enemy.health -= (damage * 10) * allModsEnemy
    enemy.hits++
    healthCheckPlayer()
    healthCheckEnemy()
    enemyAttack()
    update()
}
function heal(target) {
    target.health += 25
    healthCheckPlayer()
    healthCheckEnemy()
    enemyAttack()
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
        if (target.equipment[i].name == item.name)
            return
    }
    target.equipment.push(item)
    addModsEnemy()
    addModsPlayer()
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
//update()

function startButton() {
    document.getElementById("start").style.display = "none"
    document.getElementById("fight").style.zIndex = 0
    document.getElementById("fight-button").style.zIndex = 1
    document.getElementById("glory").style.right = -100
    document.getElementById("lassy").style.left = 800
}
function throwLassMonster() {
    document.getElementById("lassy").style.left = 2800
    document.getElementById("fight-button").style.display = "none"
    document.getElementById("lass-dudetrio").style.display = "inline"
}
function throwPlayerMonster() {
    document.getElementById("dudes-pic").style.zIndex = 2
    document.getElementById("glory").style.right = 1900
    document.getElementById("lass-dudetrio").style.display = "none"
    document.getElementById("you-codemaster").style.display = "inline"
}
function fightBegins() {
    document.getElementById("code-pic").style.zIndex = 1
    document.getElementById("you-codemaster").style.display = "none"
    document.getElementById("empty-box").style.display = "inline"
    document.getElementById("declare").style.display = "inline"
    document.getElementById("invoke").style.display = "inline"
    document.getElementById("chain").style.display = "inline"
    document.getElementById("givebadCode").style.display = "inline"
    document.getElementById("givepushEnemy").style.display = "inline"
    document.getElementById("givepullEnemy").style.display = "inline"
    document.getElementById("itemSpot").style.display = "inline"
    document.getElementById("moveSpot").style.display = "inline"
}

function enemyAttack() {
    var firstChoice = Math.floor(Math.random() * 10)
    if (firstChoice < 4) {
        var itemChoice = Math.floor(Math.random() * 10)
        if (itemChoice < 3) {
            giveItems(inventory.push, enemy)
        } else if (itemChoice > 2 && itemChoice < 6) {
            giveItems(inventory.badCode, player)
        } else {
            heal(enemy)
        }
    } else {
        var attackChoice = Math.floor(Math.random() * 10)
        if (attackChoice < 3) {
            slapPlayer()
        } else if (attackChoice > 2 && attackChoice < 6) {
            punchPlayer()
        } else {
            kickPlayer()
        }
    }
    console.log(enemyAttack)
}
console.log(enemy)
console.log(player)
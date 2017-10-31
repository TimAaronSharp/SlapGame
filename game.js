//IF STATEMENT FOR AFTER CHOOSING WHICH TYPE YOU AND THE COMP WILL USE TO DECIDE THE MODIFIER IE. WATER VS FIRE 1.5X?
var damage = 1
var allMods = 1
// var allModsEnemy = 1
// var allModsPlayer = 1
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
    badCode: new Items("Bad Code", 0.5, "YOU'RE CODE IS CRAP!"),    
    pull: new Items("Pull Working Build", -0.4, "Good thing you made a backup!")     //made with a constructor.
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
function attack(target, type){
    if(type == 'declare'){
        target.health -= damage * allMods
        target.hits++
    }else if(type == 'invoke'){
        target.health -= (damage * 5) * allMods
        target.hits++
    }else if(type == 'chain'){
        target.health -= (damage * 10) * allMods
        target.hits++
    }
    enemyAttack()
    healthCheckPlayer()
    healthCheckEnemy()
    update()
}
function heal(target) {
    target.health += 25
    healthCheckPlayer()
    healthCheckEnemy()
    enemyAttack()
    update()
}
// function slapPlayer() {                           //function for the slap attack.
    
// }
// function punchPlayer() {                          //function for punch attack.
    
// }
// function kickPlayer() {                           //function for kick attack.
    
// }
// function slapEnemy() {                           //function for the slap attack.
//     enemy.health -= damage * allModsEnemy
//     enemy.hits++
//     healthCheckPlayer()
//     healthCheckEnemy()
//     enemyAttack()
//     update()
// }
// function punchEnemy() {                          //function for punch attack.
//     enemy.health -= (damage * 5) * allModsEnemy
//     enemy.hits++
//     healthCheckPlayer()
//     healthCheckEnemy()
//     enemyAttack()
//     update()
// }
// function kickEnemy() {                           //function for kick attack.
//     enemy.health -= (damage * 10) * allModsEnemy
//     enemy.hits++
//     healthCheckPlayer()
//     healthCheckEnemy()
//     enemyAttack()
//     update()
// }

function update() {                         //function that updates info on page.
    document.getElementsByClassName('enemyName')[0].innerText = enemy.name
    document.getElementsByClassName('enemyHealth')[0].innerText = enemy.health.toFixed(2)
    document.getElementsByClassName('enemyHits')[0].innerText = enemy.hits

    document.getElementsByClassName('playerName')[0].innerText = player.name
    document.getElementsByClassName('playerHealth')[0].innerText = player.health.toFixed(2)
    document.getElementsByClassName('playerHits')[0].innerText = player.hits
}
function giveItems(item, target) {
    for (var i = 0; i < target.equipment.length; i++) {
        // var target = array[i];
        if (target.equipment[i].name == item.name)
            return
    }
    target.equipment.push(item)
    addMods(target)
}
function addMods(target){
    var out = 1
    for (var i = 0; i < target.equipment.length; i++) {
        out += target.equipment[i].modifier
        allMods = out.toFixed(2);
    }
    return allMods
}
// function addModsEnemy() {            //function to apply item modifiers.
//     var out = 1
//     for (var i = 0; i < enemy.equipment.length; i++) {
//         out += enemy.equipment[i].modifier
//     }
//     allModsEnemy = out.toFixed(2)
// }
// function addModsPlayer() {                        //function to apply item modifiers.
//     var out = 1
//     for (var i = 0; i < player.equipment.length; i++) {

//         out += player.equipment[i].modifier
//     }
//     allModsPlayer = out.toFixed(2)
// }
//update()

function startButton() {
    document.getElementsByClassName("start")[0].style.display = "none"
    document.getElementsByClassName("fight")[0].style.zIndex = 0
    document.getElementsByClassName("fight-button")[0].style.zIndex = 1
    document.getElementsByClassName("glory")[0].style.right = -100
    document.getElementsByClassName("lassy")[0].style.left = 800
    document.getElementsByClassName("heads")[0].style.left = 860
}
function throwLassMonster() {
    document.getElementsByClassName("heads")[0].style.left = 2860
    document.getElementsByClassName("lassy")[0].style.left = 2800
    document.getElementsByClassName("fight-button")[0].style.display = "none"
    document.getElementsByClassName("lass-dudetrio")[0].style.display = "inline"
}
function throwPlayerMonster() {
    document.getElementsByClassName("dudes-pic")[0].style.zIndex = 2
    document.getElementsByClassName("glory")[0].style.right = 1900
    document.getElementsByClassName("lass-dudetrio")[0].style.display = "none"
    document.getElementsByClassName("you-codemaster")[0].style.display = "inline"
}
function fightBegins() {
    document.getElementsByClassName("code-pic")[0].style.zIndex = 1
    document.getElementsByClassName("you-codemaster")[0].style.display = "none"
    document.getElementsByClassName("empty-box")[0].style.display = "inline"
    document.getElementsByClassName("declare")[0].style.display = "inline"
    document.getElementsByClassName("invoke")[0].style.display = "inline"
    document.getElementsByClassName("chain")[0].style.display = "inline"
    document.getElementsByClassName("givebadCode")[0].style.display = "inline"
    document.getElementsByClassName("givepushEnemy")[0].style.display = "inline"
    document.getElementsByClassName("givepullEnemy")[0].style.display = "inline"
    document.getElementsByClassName("itemSpot")[0].style.display = "inline"
    document.getElementsByClassName("moveSpot")[0].style.display = "inline"
    document.getElementsByClassName("yourName")[0].style.display = "inline"
    document.getElementsByClassName("enemyMonsterName")[0].style.display = "inline"
    document.getElementsByClassName("shoety")[0].style.display = "inline"
    document.getElementsByClassName("officeHead")[0].style.display = "inline"
    document.getElementsByClassName("short-message")[0].style.display = "inline"
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
            player.health -= damage * allMods
            player.hits++
            //slapPlayer()
        } else if (attackChoice > 2 && attackChoice < 6) {
            player.health -= (damage * 5) * allMods
            player.hits++
            //punchPlayer()
        } else {
            player.health -= (damage * 10) * allMods
            player.hits++
            //kickPlayer()
        }
    }
}
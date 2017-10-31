function SlapService(){
    //-----------------PRIVATE----------------
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
    function healthCheckEnemy() {           //function to stop health going below 0.
        if (enemy.health > 150) {
            enemy.health = 150
        }
        if (enemy.health < 0) {
            enemy.health = 0
        }
    }
    function healthCheckPlayer() {         //function to stop health going below 0.
        if (player.health > 100) {
            player.health = 100
        }
        if (player.health < 0) {
            player.health = 0
        }
    }
    //^^^^^^^^^^^^^^^^^^^^^^^^^PRIVATE^^^^^^^^^^^^^^^^^^^^^^^^
    //-------------------------PUBLIC-------------------------
    this.attack function slapPlayer() {                           //function for the slap attack.
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
    //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^PUBLIC^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
}
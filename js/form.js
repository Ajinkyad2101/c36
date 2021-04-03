class Form{
    constructor(){

    }
    display(){
        var title=createElement("h1")
        title.html("car racing game")
        title.position(130,50)
        var input=createInput("enter your name")
        input.position(130,150)
        var button=createButton('Play')
        button.position(250,200)

        var greeting=createElement("h3")
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name=input.value()
            playerCount++
            player.update(name)
            player.updateCount(playerCount)
            greeting.html("hello "+name+" welcome! to the game . lets wait for other players to join")
            greeting.position(130,160)
            
        })
    }
}
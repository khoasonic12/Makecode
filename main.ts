controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(-1)
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    info.changeLifeBy(1)
    sprites.destroy(otherSprite)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    game.gameOver(true)
})
let mySprite2: Sprite = null
let coin: Sprite = null
let mySprite: Sprite = null
story.showPlayerChoices("play", "exit")
if (story.checkLastAnswer("play")) {
    scene.setBackgroundColor(9)
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . f . . . 
        . . . . . . . . . . . . f f . . 
        . . . . . . . . . . . . f 5 f . 
        f f f f f f f f f f f f f f f . 
        . . . . f f f f f f f f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f . f . . f . f . . . . 
        . . . . f . f . . f . f . . . . 
        . . . . f . f . . f . f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(mySprite, 100, 0)
    tiles.setCurrentTilemap(tilemap`level1`)
    scene.cameraFollowSprite(mySprite)
    mySprite.ay = 200
    info.setLife(3)
    for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
        coin = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . f 5 5 5 5 5 5 5 5 5 f . . . 
            . f 5 5 5 e e e e 5 5 5 5 f . . 
            . f 5 5 e 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 e 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 e 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 e 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 e 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 5 e e e e 5 5 5 5 f . . 
            . . f 5 5 5 5 5 5 5 5 5 f . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        tiles.placeOnTile(coin, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . f 5 5 5 5 5 5 5 5 5 f . . . 
            . f 5 5 5 4 4 4 4 5 5 5 5 f . . 
            . f 5 5 5 4 5 5 5 5 5 5 5 f . . 
            . f 5 5 5 4 5 5 5 5 5 5 5 f . . 
            . f 5 4 4 4 4 4 5 5 5 5 5 f . . 
            . f 5 5 5 4 5 5 5 5 5 5 5 f . . 
            . f 5 5 5 4 5 5 5 5 5 5 5 f . . 
            . f 5 5 5 4 5 5 5 5 5 5 5 f . . 
            . . f 5 5 5 5 5 5 5 5 5 f . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        tiles.placeOnTile(mySprite2, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}

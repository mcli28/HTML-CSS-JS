var player = new Sprite(32, 32);
player.image = game.assets['player.png'];

var enemy = new Sprite(32, 32);
enemy.image = game.assets['enemy.png'];

var scene = game.currentScene;
scene.addChild(player);
scene.addChild(enemy);


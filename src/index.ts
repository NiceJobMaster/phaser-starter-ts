import * as Phaser from 'phaser';
import SimpleScene from './scenes/simple-scene';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  scene: SimpleScene,
};

export const game = new Phaser.Game(config);

window.addEventListener('resize', () => {
  return game.scale.resize(window.innerWidth, window.innerHeight);
});

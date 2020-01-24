import * as Phaser from 'phaser';

export default class SimpleScene extends Phaser.Scene {
  public preload() {
    this.load.image('cokecan', 'assets/cokecan.png');
  }

  public create() {
    this.add.text(100, 100, 'Hello Phaser!', { fill: '#0f0' });
    this.add.image(100, 200, 'cokecan');
  }
}

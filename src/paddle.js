export default class Paddle {
  constructor(gameWidht, gameHeight) {
    this.width = 150;
    this.height = 30;

    this.position = {
      x: gameWidht / 2 - this.width / 2,
      y: gameHeight - this.height - 10
    };
  }

  draw(ctx) {
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

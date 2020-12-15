export class Block {
  readonly hp: number

  constructor(args: { hp: number }) {
    if (args.hp <= 0) {
      throw new Error('hp must be number greater than zero')
    }
    this.hp = args.hp
  }
}

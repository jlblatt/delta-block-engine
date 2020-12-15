import { Block } from './Block'

let id = 1

export class DeltaBlockEngine {
  readonly id: number
  readonly name: string
  readonly size: number
  readonly bpm: number

  readonly offset: number // +/- audio delay

  readonly blocks: Block[] = []

  constructor(args: { name?: string; size: number; bpm: number; offset?: number }) {
    this.id = id++

    this.name = args?.name || `unknown_engine_${Math.floor(Math.random())}`

    if (args.size <= 0) {
      throw new Error('size must be number greater than zero')
    }
    this.size = args.size

    if (args.bpm <= 0) {
      throw new Error('bpm must be number greater than zero')
    }
    this.bpm = args.bpm

    if (args.offset && args.offset <= 0) {
      throw new Error('offset must be number greater than zero')
    }
    this.offset = args.offset || 0
  } // /constructor

  // :)
}

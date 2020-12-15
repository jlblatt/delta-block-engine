import { Block } from './Block'

const testArgs = {
  hp: 1,
}

test('has a hp that is greater than zero', () => {
  const dbe1 = new Block(testArgs)
  expect(typeof dbe1.hp).toBe('number')
  expect(() => {
    const dbe2 = new Block({ ...testArgs, hp: -1 })
  }).toThrow()
})

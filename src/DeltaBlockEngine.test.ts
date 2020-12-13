import { DeltaBlockEngine } from './DeltaBlockEngine'

const testArgs = {
  size: 10,
  bpm: 120,
}

test("can instantiate multiple DeltaBlockEngine's which have unique ids counting up from 1", () => {
  const dbe1 = new DeltaBlockEngine(testArgs)
  const dbe2 = new DeltaBlockEngine(testArgs)
  const dbe3 = new DeltaBlockEngine(testArgs)
  expect(dbe1.id).toBe(1)
  expect(dbe2.id).toBe(2)
  expect(dbe3.id).toBe(3)
})

test('has a size that is greater than zero', () => {
  const dbe1 = new DeltaBlockEngine(testArgs)
  expect(typeof dbe1.size).toBe('number')
  expect(() => {
    const dbe2 = new DeltaBlockEngine({ ...testArgs, size: -1 })
  }).toThrow()
})

test('has a bpm that is greater than zero', () => {
  const dbe1 = new DeltaBlockEngine(testArgs)
  expect(typeof dbe1.bpm).toBe('number')
  expect(() => {
    const dbe2 = new DeltaBlockEngine({ ...testArgs, bpm: -1 })
  }).toThrow()
})

test('has an array of blocks', () => {
  const dbe = new DeltaBlockEngine(testArgs)
  expect(Array.isArray(dbe.blocks)).toBe(true)
})

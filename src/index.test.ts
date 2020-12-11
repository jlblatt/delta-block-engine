import DeltaBlockEngine from '.'

test('can instantiate multiple DeltaBlockEngine\'s which have unique ids counting up from 1', () => {
  const dbe1 = new DeltaBlockEngine()
  const dbe2 = new DeltaBlockEngine()
  const dbe3 = new DeltaBlockEngine()
  expect(dbe1.id).toBe(1)
  expect(dbe2.id).toBe(2)
})

import includeCommonTests from '../src'

// include the common tests
includeCommonTests(`${__dirname}/fixture`)

// ensure that we run 2 tests from the included ones for a total of 3 tests
let testCount = 0
afterEach(() => {
  testCount++
})
afterAll(() => {
  expect(testCount).toBe(3)
})

// add a custom test so jest always has something to run (even in failure)
describe('custom test', () => {
  it('should pass', () => {
    expect(true).toBe(true)
  })
})

// write tests here
describe('Quotes App', () => {

  // schedule somethign to happen before each test
  // before each test we navigate to http://localhost:1234
  beforeEach(() => {
    cy.visit('http://localhost:1234')
  })

  // use the 'it' keyword for tests
  it('sanity checks', () => {
    // assertion(s)
    expect(5).to.equal(5)
  })
})

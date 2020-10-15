// write tests here
describe('Quotes App', () => {

  // schedule somethign to happen before each test
  // before each test we navigate to http://localhost:1234
  // EACH TEST NEEDS FRESH STATE
  beforeEach(() => {
    cy.visit('http://localhost:1234')
  })

  // helpers to avoid tons of repetition
  const textInput = () => cy.get('input[name="text"]')
  const authorInput = () => cy.get('input[name="author"]')
  const submitBtn = () => cy.get('button[id=submitBtn]')
  const cancelBtn = () => cy.get('#cancelBtn')
  const gagaBtn = () => cy.get('input[name=gaga]')

  // use the 'it' keyword for tests
  it('sanity checks', () => {
    // assertion(s)
    expect(5).to.equal(5)
    expect(1 + 2).to.equal(3)
    expect({}).to.eql({})
    expect({}).to.not.equal({})
  })

  it('the proper elements exist', () => {
    // sanity checking that the elements that should exist are there
    textInput().should('exist')
    authorInput().should('exist')
    submitBtn().should('exist')
    cancelBtn().should('exist')
    gagaBtn().should('not.exist')
  })

})

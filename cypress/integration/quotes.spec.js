// write tests here
describe('Quotes App', () => {

  // schedule somethign to happen before each test
  // before each test we navigate to http://localhost:1234
  beforeEach(() => {
    cy.visit('http://localhost:1234')
  })

  const textInput = () => cy.get('input[name="text"]')
  const authorInput = () => cy.get('input[name="author"]')
  const submitBtn = () => cy.get('button[id=submitBtn]')
  const cancelBtn = () => cy.get('#cancelBtn')

  // use the 'it' keyword for tests
  it('sanity checks', () => {
    // assertion(s)
    expect(5).to.equal(5)
    expect(1 + 2).to.equal(3)
    expect({}).to.eql({})
    expect({}).to.not.equal({})
  })

  it('the proper elements exist', () => {
    textInput().should('exist')
    authorInput().should('exist')
    submitBtn().should('exist')
    cancelBtn().should('exist')
  })

})

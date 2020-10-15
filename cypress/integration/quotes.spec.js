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
    expect(1 + 2).to.equal(3)
    expect({}).to.eql({})
    expect({}).to.not.equal({})
  })

  it('the proper elements exist', () => {
    cy.get('input[name="text"]').should('exist')
    cy.get('input[name="gaga"]').should('not.exist')
    cy.get('button[id=submitBtn]').should('exist')
    cy.get('#cancelBtn').should('exist')
  })

})

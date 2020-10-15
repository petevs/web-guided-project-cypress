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

  describe('Filling out inputs and cancelling', () => {
    it('submit button is disabled', () => {
      submitBtn().should('be.disabled')
    })

    it('can type inside the inputs', () => {
      textInput()
        .should('have.value', '')
        .type('Be nice to your CSS specialist!')
        .should('have.value', 'Be nice to your CSS specialist!')

      authorInput()
        .should('have.value', '')
        .type('Brendan')
        .should('have.value', 'Brendan')
    })

    it('the submit button enables if we type on boths inputs', () => {
      textInput().type('foo')
      authorInput().type('bar')
      submitBtn().should('not.be.disabled')
    })

    it('the cancel button can reset inputs and disable button', () => {
      textInput().type('We are typing')
      authorInput().type('I have typed')
      cancelBtn().click()
      textInput().should('have.value', '')
      authorInput().should('have.value', '')
      submitBtn().should('not.be.enabled')
    })
  })


  describe('Adding a new quote and deleting it', () => {
    it('can submit and delete', () => {
      // assert that an elemtn with some text isn't
      cy.contains(/have fun/i).should('not.exist')
    })
  })

})

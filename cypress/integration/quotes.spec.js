// write tests here
describe('Quotes App Testing', () => {
    beforeEach(() => {
        cy.visit('http://localhost:1234');
    });

    // helpers to select elements
    const textInput = () => cy.get('input[name=text]');
    const submitBtn = () => cy.get('button[id="submitBtn"]');
    const authorInput = () => cy.get('input[name=author]')
    const cancelBtn = () => cy.get('button[id="cancelBtn"]')

    it('should do some basic math', () => {
        expect(1+1).to.equal(2);
        expect(1+2).not.to.equal(4);
        expect({}).not.to.equal({});
    });

    it('should display the expected elements', () => {
        textInput().should('exist');
        submitBtn().should('exist');
        authorInput().should('exist');
        cancelBtn().should('exist');

        cy.contains('Submit Quote').should('exist');
        cy.contains(/submit quote/i).should('exist');
    });

    describe('Filling out inputs and cancelling', () => {
        it('can get to the correct url', () => {
            cy.url().should('include', 'localhost');
        });

        it('submit button should be disabled on initial load', () => {
            submitBtn().should('be.disabled')
        })

        it('should type stuff in the inputs', () => {
            textInput()
                .should('have.value', '')
                .type('Hi how are you?')
                .should('have.value', 'Hi how are you?')
            authorInput()
                .should('have.value', '')
                .type('What is up?')
                .should('have.value', 'What is up?')
        })
        
        it('should enable submit with both inputs filled in', () => {
            textInput().type('Pete');
            authorInput().type('VS');
            submitBtn().should('not.be.disabled');
        })

        it('should cancel the values in the input when clicking cancel button', () => {
            textInput().type('Pete')
            authorInput().type('VS');
            cancelBtn().click();
            textInput().should('have.value', '');
            authorInput().should('have.value', '');
            submitBtn().should('be.disabled')
        });
    });
        

    describe('Adding quotes', () => {
        it('can submit and delete a quote', () => {
            textInput().type('Pete');
            authorInput().type('VS');
            submitBtn().click();

            cy.contains('Pete').siblings('button:nth-of-type(2)').click();
            cy.contains('Pete').should('not.exist')
        })
    })

    describe('Editing quotes', () => {
        it('can edit a quote', () => {
            //submit the initial quote
            textInput().type('Pete2');
            authorInput().type('VS2');
            submitBtn().click();

            // hit the edit button and check that inputs are as expected
            cy.contains('Pete2').siblings('button:nth-of-type(1)').click();
            textInput().should('have.value', 'Pete2')
            authorInput().should('have.value', 'VS2')

            // edit the quote and submit changes
            textInput().clear().type('I am cool');
            authorInput().clear().type('Very much so');
            submitBtn().click();

            //check that the changes were submitted properly
            cy.contains('I am cool').next().next().click()
            cy.contains('I am cool').should('not.exist')

        })
    })


})

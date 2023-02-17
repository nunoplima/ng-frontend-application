describe('Quest List', () => {
  beforeEach(() => {
    cy.visit(`http://localhost:3000/quests`)
  })

  it('renders the quests', () => {
    cy.contains(/iphone 9/i)
    cy.contains(/iphone x/i)
    cy.contains(/samsung universe 9/i)
  })

  it('navigates to the selected quest', () => {
    cy.get('[data-testid="quest-1"]').click()

    cy.url().should('include', 'quests/1')
  })
})

export {}
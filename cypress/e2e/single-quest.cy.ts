describe('Single Quest', () => {
  beforeEach(() => {
    cy.visit(`http://localhost:3000/quests/1`)
  })

  it('renders the quest', () => {
    cy.contains(/iphone 9/i)
  })

  it('navigates back to quests on x click', () => {
    cy.get('[data-testid="x"]').click({ force: true })

    cy.url().should('not.include', 'quests/1')
    cy.url().should('include', 'quests')
  })

  it('navigates back to quests on back button click', () => {
    cy.get("a:contains(go back)").click()

    cy.url().should('not.include', 'quests/1')
    cy.url().should('include', 'quests')
  })
})

export {}
describe('cypress-log-to-terminal', () => {
  it('outputs a single string message to the terminal', () => {
    cy.logToTerminal('Hello world')
  })

  it('outputs a single object message to the terminal', () => {
    cy.logToTerminal({ foo: 123 })
  })

  it('outputs multiple messages to the terminal', () => {
    cy.logToTerminal('catJAM', 9001, 'Foo', ['Bar', 'Bar'])
  })
})

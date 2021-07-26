/* eslint-disable @typescript-eslint/no-namespace */

declare global {
  namespace Cypress {
    interface Chainable {
      /** Output all arguments to the terminal */
      logToTerminal(...args: Array<unknown>): void
    }
  }
}

export function addLogToTerminalCommand() {
  Cypress.Commands.add('logToTerminal', function (...args: Array<unknown>) {
    cy.task('logToTerminal', args)
  })
}

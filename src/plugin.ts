export function addLogToTerminalPlugin(
  on: Cypress.PluginEvents,
  config?: Cypress.PluginConfigOptions // eslint-disable-line @typescript-eslint/no-unused-vars
) {
  on('task', {
    logToTerminal: (args) => logToTerminal(args),
  })
}

function logToTerminal(args: Array<unknown>) {
  // Print the arguments to the terminal
  console.log(...args)

  // We have to return null here to signal to Cypress that the plugin is done
  return null
}

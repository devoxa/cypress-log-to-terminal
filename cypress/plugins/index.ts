import { addLogToTerminalPlugin } from '../../plugin'

export default (on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) => {
  addLogToTerminalPlugin(on, config)
  return config
}

# :no_entry: DEPRECATED :no_entry:

### This package has been archived and is no longer maintained. While we will not provide any updates or support, the code is still available for reference. If you need this package for your project, we encourage you to fork & republish the code following the license terms.

---

<!-- Title -->
<h1 align="center">
  cypress-log-to-terminal
</h1>

<!-- Description -->
<h4 align="center">
  Output messages to the terminal during headless Cypress runs.
</h4>

<!-- Badges -->
<p align="center">
  <a href="https://www.npmjs.com/package/@devoxa/cypress-log-to-terminal">
    <img
      src="https://img.shields.io/npm/v/@devoxa/cypress-log-to-terminal?style=flat-square"
      alt="Package Version"
    />
  </a>

  <a href="https://github.com/devoxa/cypress-log-to-terminal/actions?query=branch%3Amaster+workflow%3A%22Continuous+Integration%22">
    <img
      src="https://img.shields.io/github/actions/workflow/status/devoxa/cypress-log-to-terminal/push.yml?branch=master&style=flat-square"
      alt="Build Status"
    />
  </a>
</p>

<!-- Quicklinks -->
<p align="center">
  <a href="#installation">Installation</a> •
  <a href="#usage">Usage</a> •
  <a href="#contributors">Contributors</a> •
  <a href="#license">License</a>
</p>

<br>

## Installation

1. Install the package

```bash
yarn add --dev @devoxa/cypress-log-to-terminal
```

2. Import the command in `cypress/support/commands.ts`:

```ts
import { addLogToTerminalCommand } from '@devoxa/cypress-log-to-terminal/command'
addLogToTerminalCommand()
```

3. Import the plugin in `cypress/plugins/index.ts`:

```ts
import { addLogToTerminalPlugin } from '@devoxa/cypress-log-to-terminal/plugin'

export default (on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) => {
  addLogToTerminalPlugin(on, config)
  return config
}
```

## Usage

```ts
describe('SignInPage', () => {
  it('renders the page successfully', () => {
    cy.visit('/sign-in')

    cy.logToTerminal('This message will show up in the terminal', { andThis: 'too' })
  })
})
```

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.david-reess.de"><img src="https://avatars3.githubusercontent.com/u/4615516?v=4" width="75px;" alt=""/><br /><sub><b>David Reeß</b></sub></a><br /><a href="https://github.com/devoxa/cypress-log-to-terminal/commits?author=queicherius" title="Code">💻</a> <a href="https://github.com/devoxa/cypress-log-to-terminal/commits?author=queicherius" title="Documentation">📖</a> <a href="https://github.com/devoxa/cypress-log-to-terminal/commits?author=queicherius" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors)
specification. Contributions of any kind welcome!

## License

MIT

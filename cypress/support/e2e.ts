import 'cypress-axe';
import '@testing-library/cypress/add-commands';

Cypress.Commands.add('checkA11yPage', () => {
  cy.injectAxe();
  cy.checkA11y(undefined, {
    runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa'] },
  });
});

declare global {
  namespace Cypress {
    interface Chainable {
      checkA11yPage(): Chainable<void>;
    }
  }
}

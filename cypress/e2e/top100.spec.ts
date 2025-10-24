
describe('Top 100 page (SSR)', () => {
  it('renders the list or the empty state', () => {
    cy.visit('/album/top-100');

    cy.findByTestId('album-list').should('exist');

    cy.findAllByTestId('album-card').then(($cards) => {
      if ($cards.length === 0) {
        cy.findByTestId('album-empty').should('be.visible');
      } else {
        expect($cards.length).to.be.greaterThan(0);
      }
    });
  });
});

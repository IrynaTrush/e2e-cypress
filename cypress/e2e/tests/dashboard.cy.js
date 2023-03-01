describe('example to-do app', () => {
  const S = {
    title: '[data-cy="title"]',
    menuLink: '.p-menuitem-link',
  };

  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('Test welcome page', () => {
    cy.get(S.title).should('have.text', 'welcome!');
    cy.url().should('include', '/home');
  });
  it.skip('should check navigation labels', () => {
    cy.get(S.menuLink).should('have.text', ['Home', 'Todo list', 'Posts', 'Gallery', 'About']);
    // .should('have.attr', 'href').and('include', 'contact')
  });

  it('Verify todo items', () => {
    cy.visit('http://localhost:4200/todo');
  });
});

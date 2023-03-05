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

  it('Check todo page title', () => {
    cy.visit('/todo');
    cy.get(S.title).should('have.text', 'Todo list');
  });

  it('Check posts page title', () => {
    cy.visit('/posts');
    cy.get(S.title).should('have.text', 'Posts');
  });

  it('Check gallery page title', () => {
    cy.visit('/gallery');
    cy.get(S.title).should('have.text', 'Gallery');
  });

  it('Check about page title', () => {
    cy.visit('http://localhost:4200/about');
    cy.get(S.title).should('have.text', 'About');
  });
});

describe('example to-do app todo page', () => {
  const S = {
    listInput: '[data-cy="todo-text"]',
    addButton: '[data-cy="add-btn"]',
    deleteButton: '[data-cy="delete-btn"]',
    editButton: '[data-cy="edit-btn"]',
    saveButton: '[data-cy="save-btn"]',
    editInput: '[data-cy="edit-text"]',
    todoItem: '[data-cy="todo-item"]',
  };

  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('todo change items quantity', () => {
    cy.visit('/todo');
    cy.get(S.listInput).type('Cook');
    cy.get(S.addButton).click();
    cy.get(S.listInput).type('Sleep');
    cy.get(S.addButton).click();
    cy.get(S.listInput).type('Eat');
    cy.get(S.addButton).click();
    cy.get(S.todoItem).should('have.length', 3);
    cy.get(S.deleteButton).last().click();
    cy.get(S.todoItem).should('have.length', 2);
  });

  it('todo edit first todo item', () => {
    cy.visit('/todo');
    cy.get(S.listInput).type('Cook');
    cy.get(S.addButton).click();
    cy.get(S.listInput).type('Sleep');
    cy.get(S.addButton).click();
    cy.get(S.editButton).first().click();
    cy.get(S.editInput).type('ing');
    cy.get(S.saveButton).click();
    cy.get(S.todoItem).first().should('have.text', 'Cooking');
  });
});

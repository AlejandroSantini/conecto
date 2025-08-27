describe('Threaded Comments', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the comments section', () => {
    cy.contains('Comentarios').should('exist');
  });

  it('should open and close the reply form when clicking the reply button', () => {
    cy.get('.comment-card').first().find('button').last().click();
    cy.get('.reply-form-container').should('exist');
    cy.get('.comment-card').first().find('button').last().click();
    cy.get('.reply-form-container').should('not.exist');
  });
});

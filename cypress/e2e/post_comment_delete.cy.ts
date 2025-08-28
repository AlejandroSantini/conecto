describe('Flujo completo: crear post, comentar, eliminar comentario y post', () => {
  const postTitle = `Test Post ${Date.now()}`;
  const postContent = 'Contenido de prueba para el post';
  const commentText = 'Comentario de prueba';
  const userName = 'Tester';

  it('Flujo completo en un solo test', () => {
    cy.visit('/');

    cy.intercept('POST', '**/post*').as('createPost');
    cy.get('input[placeholder="Nombre"]').clear().type(userName);
    cy.get('input[placeholder="Titulo"]').clear().type(postTitle);
    cy.get('textarea[placeholder="Contenido..."]').clear().type(postContent);
    
    cy.get('button[type="submit"]').should('not.be.disabled');
    cy.get('button[type="submit"]').contains('Publicar').click();
    cy.wait('@createPost');
    cy.contains(postTitle, { timeout: 15000 }).should('exist');

    cy.contains(postTitle).click();
    cy.contains(postContent, { timeout: 10000 }).should('exist');

    cy.intercept('POST', '**/comment*').as('createComment');
    cy.get('input[placeholder="Nombre"]').clear().type(userName);
    cy.get('textarea[placeholder="Escribe un comentario..."]').clear().type(commentText);
    
    cy.get('button[type="submit"]').should('not.be.disabled');
    cy.get('button[type="submit"]').contains('Comentar').click();
    cy.wait('@createComment');
    
    cy.contains(commentText, { timeout: 15000 }).should('exist');

    cy.intercept('DELETE', '**/comment/**').as('deleteComment');
    
    cy.contains(commentText)
      .parent()
      .parent()
      .find('.delete-btn')
      .click();
    
    cy.wait('@deleteComment');
    cy.contains(commentText).should('not.exist');

    cy.visit('/');
    cy.contains(postTitle, { timeout: 10000 }).should('exist');
    
    cy.contains(postTitle)
      .parent()
      .parent()
      .find('.delete-btn')
      .click();
    
    cy.contains(postTitle).should('not.exist');
  });
});

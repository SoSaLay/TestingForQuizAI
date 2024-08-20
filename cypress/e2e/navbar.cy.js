describe('Navbar Navigation', () => {
  it('should navigate to the Quiz Generation page when the link is clicked', () => {
    // Visit the home page
    cy.visit('http://localhost:3000/');

    // Click on the "Quiz Generation" link
    cy.contains('Quiz Generation').click();

    // Check if the URL is correct
    cy.url().should('include', '/quizgeneration');

    // Check if the correct content is displayed
    cy.contains('Quiz Generation Options'); 
  });

  it('should navigate to the Account page when the link is clicked', () => {
    // Visit the home page
    cy.visit('http://localhost:3000/');

    // Click on the "Account" link
    cy.contains('Account').click();

    // Check if the URL is correct
    cy.url().should('include', '/account');

    // Check if the correct content is displayed
    cy.contains('You have a streak of 5 days!'); 
  });
});

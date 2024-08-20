describe('Quiz Generation and Question Navigation', () => {
    it('should generate the quiz and navigate through questions', () => {
      cy.visit('http://localhost:3000/quizgeneration'); // Adjust the URL if necessary
  
      // Set up the quiz options
      cy.get('select#topic').select('javascript');
      cy.get('select#difficulty').select('novice');
      cy.get('button[type="submit"]').click();
  
      // Wait for the quiz to be generated and the first question to appear
      cy.contains('Question', { timeout: 15000 }).should('be.visible');
  
      // Answer the first question
      cy.get('input[placeholder="Type your answer here"]').type('test answer');
      cy.get('button').contains('SUBMIT ANSWER').click();
  
      // Wait for the evaluation to appear after submission
      cy.get('.evaluation', { timeout: 15000 }).should('be.visible').and('contain', 'Verner\'s Evaluation');
  
      // Move to the next question
      cy.get('button').contains('NEXT').click();
  
      // Wait for the next question to appear
      cy.contains('Question').should('be.visible');
  
      // Repeat the steps above for each question
    });
  });
  
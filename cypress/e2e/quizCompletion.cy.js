describe('Quiz Completion', () => {
  it('should display the results after completing the quiz', () => {
    cy.visit('http://localhost:3000/quizgeneration');


    // Set up the quiz options
    cy.get('select#topic').select('javascript');
    cy.get('select#difficulty').select('novice');
    cy.get('button[type="submit"]').click();

    // Wait for the quiz to be generated and the first question to appear
    cy.contains('Question', { timeout: 15000 }).should('be.visible');

    // Loop through and answer each question
    const numQuestions = 5; // Assuming there are 5 questions

    for (let i = 0; i < numQuestions; i++) {
      // Answer the current question
      cy.get('input[placeholder="Type your answer here"]').type('test answer');
      cy.get('button').contains('SUBMIT ANSWER').click();

      // Wait for the evaluation to appear after submission
      cy.get('.evaluation', { timeout: 15000 }).should('be.visible').and('contain', 'Verner\'s Evaluation');

      // If it's not the last question, move to the next question
      if (i < numQuestions - 1) {
        cy.get('button').contains('NEXT').click();
        cy.contains('Question', { timeout: 15000 }).should('be.visible');
      } else {
        // On the last question, click "NEXT" and check for the "Quiz Completed!" message
        cy.get('button').contains('NEXT').click({ force: true });

        // Wait for the "Quiz Completed!" message
        cy.contains('Quiz Completed!', { timeout: 15000 }).should('be.visible');
      }
    }

    // Check the results
    cy.contains('Correct Answers').should('be.visible');

    // Optionally check the exact text for correct answers (e.g., "Correct Answers: 5 out of 5")
    cy.get('.quiz-results').should('contain', 'Correct Answers:');
  });
});
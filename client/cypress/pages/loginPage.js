class LoginPage {

    loginSuccess(email,password) {
        cy.visit('/heroes');

        cy.contains('Login').click();
        // Fill in the login form
        cy.get("[data-cy='email']").type(email);
        cy.get("[data-cy='password']").type(password);
        cy.get('.bg-blue-700').click();
        cy.url().should('include', '/heroes');
        }

    loginFailure(email, password) {
        cy.visit('/heroes');

        cy.contains('Login').click();
        // Fill in the login form
        cy.get("[data-cy='email']").type(email);
        cy.get("[data-cy='password']").type(password);
        cy.get('.bg-blue-700').click();
        cy.get('.text-red-500').should('contain', 'Email is not valid');
    }
}


export default LoginPage
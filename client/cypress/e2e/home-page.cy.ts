import Prisma from '@prisma/client';

describe('Login', () => {
  it('should login successfully with valid credentials', () => {
    cy.visit('/heroes');

    cy.contains('Login').click();
    // Fill in the login form
    cy.get("[data-cy='email']").type('admin@test.com');
    cy.get("[data-cy='password']").type('test123');
    cy.get('.bg-blue-700').click();

    cy.url().should('include', '/heroes');
  });

  it('should not login with invalid credentials', () => {
    cy.visit('/heroes');

    cy.contains('Login').click();
    // Fill in the login form
    cy.get("[data-cy='email']").type('test@test.com');
    cy.get("[data-cy='password']").type('test');
    cy.get('.bg-blue-700').click();
    cy.get('.text-red-500').should('contain', 'Invalid email or password');
  });
});
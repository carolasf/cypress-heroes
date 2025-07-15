import Prisma from '@prisma/client';
import LoginPage from '../pages/loginPage';
import userData from '../fixtures/userData.json';

const loginPage = new LoginPage();

describe('Login', () => {

  it('should login with valid credentials', () => {
    loginPage.loginSuccess(userData.userSuccess.email, userData.userSuccess.password);
      });
  

  it('should not login with invalid credentials', () => {
    loginPage.loginFailure(userData.userFail.email, userData.userFail.password);
  });
  
});

describe('Create New Hero', () => {
  it('should create a new hero', () => {
    loginPage.loginSuccess(userData.userSuccess.email, userData.userSuccess.password);

    cy.contains('Create New Hero').click();
    // // Fill in the hero form
    // cy.get("[data-cy='name']").type('New Hero');
    // cy.get("[data-cy='power']").type('Super Strength');
    // cy.get("[data-cy='description']").type('A hero with super strength');
    // cy.get('.bg-blue-700').click();

    // cy.url().should('include', '/heroes');
    // cy.contains('New Hero').should('exist');
  });
});
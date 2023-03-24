//const { beforeEach } = require("mocha")

describe('login process', () => {
  beforeEach(() => {
   // cy.visit('http://localhost:3000')
    cy.visit('/')
  })

  it('logins successfully with correct credentials', () => {
    cy.login('test@test.com', 'test')
    cy.contains('Добро пожаловать test@test.com').should('be.visible')
  })

  
  it('shows error when login is not entered',() => {
    cy.login(null, 'test')
    cy.get('#mail').then((el) => {
      return el[0].checkValidity()
    }).should('be.false')
    cy.get('#mail').then((el) => {
      return el[0].validationMessage
    }).should('contain', 'Заполните это поле.')
  })

  it("show error when password is not entered", () => {
    cy.login('test@test.com', '')
    cy.get('#pass').then((el) => {
      return el[0].checkValidity()
    }).should('be.false')
    cy.get('#pass').then((el) => {
      return el[0].validationMessage
    }).should('contain', 'Заполните это поле.')
  });
})
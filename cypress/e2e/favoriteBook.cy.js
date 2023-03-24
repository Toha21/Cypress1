const bookFirst = {
  title: "Кладбище домашних животных",
  description: "Роман",
  author: "Стивен Кинг",
};

const bookSecond = {
  title: "Сияние",
  description: "Роман",
  author: "Стивен Кинг",
};

const bookThird = {
  title: "Ночной Дозор",
  description: "Роман",
  author: "Сергей Лукьяненко",
};

describe('favorite book spec', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.login('test@test.com', 'test')
    })
    it('add a new book', () => {
        cy.addNewBook(bookFirst);
        cy.get(".card-title").should("contain.text", bookFirst.title);
  
    })

    it ('add a new book to favorites', () => {
        cy.addBookToFavorite(bookSecond);
        cy.get(".card-title").should("contain.text", bookSecond.title); 
    })

    it ('delete a book from favorites', () => {
        cy.visit('/favorites')
        cy.contains(bookSecond.title).should('be.visible').within(() => 
        cy.get('.card-footer > .btn').click())
        cy.contains(bookSecond.title).should('not.exist')
    })
});
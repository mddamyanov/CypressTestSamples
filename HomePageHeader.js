//Home Page Header Functionalities check

describe('Home Page Header Functionalities check', function () {
    it('Home Page load through Header Chiquito Logo', function () {
        cy.visit('https://www.chiquito.co.uk/');
        cy.get('.header__logo-img').click();
        cy.url()
            .should('equal', 'https://www.chiquito.co.uk/');
    });

    it('Home Page load through Home button', function () {
        cy.visit('https://www.chiquito.co.uk/');
        cy.get(':nth-child(1) > .header__action-item__link').click();
        cy.url()
            .should('equal', 'https://www.chiquito.co.uk/');
    });

    it('Find&Book page load', function () {
        cy.visit('https://www.chiquito.co.uk/');
        cy.get(':nth-child(2) > .header__action-item__link').click();
        cy.url()
            .should('include', '/restaurants/search');
    });

    it('Our Menu page load', function () {
        cy.visit('https://www.chiquito.co.uk/');
        cy.get(':nth-child(3) > .header__action-item__link').click();
        cy.url()
            .should('include', '/menu');
    });

    it('Takeaway page load', function () {
        cy.visit('https://www.chiquito.co.uk/');
        cy.get(':nth-child(4) > .header__action-item__link').click();
        cy.url()
            .should('include', '/takeaway');
    });

    it('Christmas page load', function () {
        cy.visit('https://www.chiquito.co.uk/');
        cy.get(':nth-child(5) > .header__action-item__link').click();
        cy.url()
            .should('include', '/christmas');
    });

    it('Covid updates page load', function () {
        cy.visit('https://www.chiquito.co.uk/');
        cy.get(':nth-child(6) > .header__action-item__link').click();
        cy.url()
            .should('include', '/covid-19-faq');
    });

    it('Offers page load', function () {
        cy.visit('https://www.chiquito.co.uk/');
        cy.get(':nth-child(7) > .header__action-item__link').click();
        cy.url()
            .should('include', '/offers');
    });

    it('Gift vouchers page load', function () {
        cy.visit('https://www.chiquito.co.uk/');
        cy.get(':nth-child(8) > .header__action-item__link').click();
        cy.url()
            .should('include', '/giftvouchers');
    });

    it('Book now page load', function () {
        cy.visit('https://www.chiquito.co.uk/');
        cy.get('.header__action-item__cta').click();
        cy.url()
            .should('include', '/book');
    });
});
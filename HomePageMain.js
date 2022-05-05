//Home Page Main Functionalities check
describe('Home Page Main Functionalities check', function () {

    it('Load PROD environment', function () {
        cy.visit('https://www.chiquito.co.uk/');
    });

    it('Enable default cookies', function () {
        cy.visit('https://www.chiquito.co.uk/');
        cy.getCookie('OptanonConsent').should('exist');
    });

    it('Enable all cookies', function () {
        cy.visit('https://www.chiquito.co.uk/');
        cy.get('#onetrust-accept-btn-handler').click();
        cy.getCookie('OptanonAlertBoxClosed').should('exist');
    });

    it('Close onetrust banner', function () {
        cy.visit('https://www.chiquito.co.uk/');
        cy.get('.onetrust-close-btn-handler').click();
        cy.getCookie('OptanonAlertBoxClosed').should('exist');
    });

    it('Slide - Go to Book Now page', function () {
        cy.visit('https://www.chiquito.co.uk/');
        cy.get('.header__action-item__cta').click();
        cy.url()
            .should('include', '/book');
    });

    it('Card 1 - Go to Menu page', function () {
        cy.visit('https://www.chiquito.co.uk/');
        cy.get(':nth-child(3) > .header__action-item__link').click();
        cy.url()
            .should('include', '/menu');
    });

    it('Card 2 - Successful Sign up message with valid mail', function () {
        cy.visit('https://www.chiquito.co.uk/');
        cy.get('.onetrust-close-btn-handler').click();
        cy.get('.tile-grid--desktop-only > .tile-grid__container > :nth-child(2) > .newsletter-card > .newsletter-card__text-container > .sign-up-card__form > .sign-up-card__input')
            .type('fakeinput@fakeinput.com').should('have.value', 'fakeinput@fakeinput.com');
        cy.get('.tile-grid--desktop-only > .tile-grid__container > :nth-child(2) > .newsletter-card > .newsletter-card__text-container > .sign-up-card__form > .sign-up-card__submit-btn-wrapper > .sign-up-card__submit-btn').click();
        cy.get('.flash-message').should('contain', 'You have been signed up!');
    });

    it('Card 2 - Unsuccessful Sign up message with invalid mail', function () {
        cy.visit('https://www.chiquito.co.uk/');
        cy.get('.onetrust-close-btn-handler').click();
        cy.get('.tile-grid--desktop-only > .tile-grid__container > :nth-child(2) > .newsletter-card > .newsletter-card__text-container > .sign-up-card__form > .sign-up-card__input')
            .type('fakeinput').should('have.value', 'fakeinput');
        cy.get('.tile-grid--desktop-only > .tile-grid__container > :nth-child(2) > .newsletter-card > .newsletter-card__text-container > .sign-up-card__form > .sign-up-card__submit-btn-wrapper > .sign-up-card__submit-btn').click();
        cy.get('.flash-message').should('contain', 'Please enter a valid email address');
        cy.get('.close').click();
    });

    it('Card 3 - Go to Order Now page', function () {
        cy.visit('https://www.chiquito.co.uk/');
        cy.get('.header__actions > :nth-child(4)').click();
        cy.url()
            .should('include', '/takeaway');
    });

    it('Card 4 - Find a Chiquito near me with location button - Location Enabling', function () {
        cy.visit('https://www.chiquito.co.uk/');
        cy.mockGeolocation();
        cy.get('.header__actions > :nth-child(4)').click();
        cy.get('[data-component="location-services"]');
        cy.get('.cta').click();
        cy.url()
            .should('include', '/restaurants/search');
    });

    it('Card 4 - Find a Chiquito near me with location button - Location Disabling', function () {
        cy.visit('https://www.chiquito.co.uk/');
        cy.get('.header__actions > :nth-child(4)').click();
        cy.get('[data-component="location-services"]');
        cy.get('.close-icon').click();
        cy.get('.message').should('contain', 'You need to allow location permissions in order to use this functionality');
    });

    it('Card 4 - Find a Chiquito near me with location typing and pressing Enter', function () {
        cy.visit('https://www.chiquito.co.uk/takeaway');
        cy.get('.onetrust-close-btn-handler').click();
        cy.get('input').type('location{enter}').should('have.value', 'location');
        cy.url()
            .should('include', '/restaurants/search?q=location');
    });

    it('Card 4 - Find a Chiquito near me with location typing and clicking Search button', function () {
        cy.visit('https://www.chiquito.co.uk/takeaway');
        cy.get('.onetrust-close-btn-handler').click();
        cy.get('input').type('location').should('have.value', 'location');
        cy.get('.input-icon').click();
        cy.url()
            .should('include', '/restaurants/search?q=location');
    });
});
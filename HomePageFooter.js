//Home Page Footer Functionalities check

describe('Home Page Footer Functionalities check', function () {
    it('Home Page load through Footer Chiquito logo', function () {
        cy.visit('https://www.chiquito.co.uk/');
        cy.get('.footer__logo').click();
        cy.url()
            .should('equal', 'https://www.chiquito.co.uk/');
    });

    it('Careers - Jobs page load', function () {
        cy.visit('https://www.chiquito.co.uk/');
        cy.get(':nth-child(1) > .footer__secondary-list > :nth-child(1) > .footer__secondary-link')
            .should('have.prop', 'href')
            .and('equal', 'https://www.trgplc.com/careers/');
    });

    it('Careers - Gender Pay Gap Report page load', function () {
        cy.visit('https://www.chiquito.co.uk/');
        cy.get(':nth-child(1) > .footer__secondary-list > :nth-child(2) > .footer__secondary-link')
            .should('have.prop', 'href')
            .and('equal', 'https://assets.ctfassets.net/8n6yne00qg20/1gduSeRmdhQHBhwPGk6fqp/e3773615a9e75f44ad0d2e126e0e1edb/Gender_Pay_Gap_Report.pdf');
    });

    it('Careers - Modern Slavery Statement page load', function () {
        cy.visit('https://www.chiquito.co.uk/');
        cy.get(':nth-child(3) > .footer__secondary-link')
            .should('have.prop', 'href')
            .and('equal', 'https://assets.ctfassets.net/8n6yne00qg20/1lDzyKp1QqQneBI5X6ToyE/91fad298a04e8dc0ad1dc6badd30d617/TRGPLC-Modern-Slavery-Statement-2020__website__NEW.pdf');
    });

    it('Careers - Tip Policy page load', function () {
        cy.visit('https://www.chiquito.co.uk/');
        cy.get(':nth-child(4) > .footer__secondary-link')
            .should('have.prop', 'href')
            .and('equal', 'https://assets.ctfassets.net/8n6yne00qg20/2ClrDEPhZDdcOhOCP9pSrw/6b27d14111c5ffef084cec7722550c3c/Tip_Policy.pdf');
    });

    it('About - Our story page load', function () {
        cy.visit('https://www.chiquito.co.uk/');
        cy.get(':nth-child(2) > .footer__secondary-list > :nth-child(1) > .footer__secondary-link').click();
        cy.url()
            .should('include', '/about-us');
    });

    it('About - Sustainability page load', function () {
        cy.visit('https://www.chiquito.co.uk/');
        cy.get(':nth-child(2) > .footer__secondary-list > :nth-child(2) > .footer__secondary-link').click();
        cy.url()
            .should('include', '/sustainability');
    });

    it('FAQs page load', function () {
        cy.visit('https://www.chiquito.co.uk/');
        cy.get(':nth-child(3) > .footer__primary-link').click();
        cy.url()
            .should('include', '/faqs');
    });

    it('Terms & Conditions page load', function () {
        cy.visit('https://www.chiquito.co.uk/');
        cy.get(':nth-child(4) > .footer__primary-link').click();
        cy.url()
            .should('include', '/terms');
    });

    it('Privacy Notice page load', function () {
        cy.visit('https://www.chiquito.co.uk/');
        cy.get(':nth-child(5) > .footer__primary-link').click();
        cy.url()
            .should('include', '/privacy-policy');
    });

    //it('PRESS button load', function () {
    //cy.visit('https://www.chiquito.co.uk/')
    //cy.get(':nth-child(6) > .footer__primary-link').click()
    //})

    it('Social networks - links', function () {
        cy.visit('https://www.chiquito.co.uk/');
        cy.get('.footer__social-links a')
            .should('have.length', 3);
    });

    it('Facebook redirect - Chiquito Page', function () {
        cy.visit('https://www.chiquito.co.uk/');
        cy.get('.footer__social-links a').each(($e1, index, $list) => {
            if ($e1.text() === "Social Link - Facebook") {
                $e1.should('equal', 'Social Link - Facebook');
            }
        });
    });

    it('Instagram redirect - Chiquito Page', function () {
        cy.visit('https://www.chiquito.co.uk/');
        cy.get('.footer__social-links a').each(($e1, index, $list) => {
            if ($e1.text() === "Social Link - Instagram") {
                $e1.should('equal', 'Social Link - Instagram');
            }
        });
    });

    it('Twitter redirect - Chiquito Page', function () {
        cy.visit('https://www.chiquito.co.uk/');
        cy.get('.footer__social-links a').each(($e1, index, $list) => {
            if ($e1.text() === "Social Link - Twitter") {
                $e1.should('equal', 'Social Link - Twitter');
            }
        });
    });
});
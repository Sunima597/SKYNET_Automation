// const PlacementLisitingpage = require("../PageElements/GetChannelListPage.json")

export function visitPlacementUploaderPage() {
    const baseUrl = Cypress.env("PlacementUploaderPageUrl").url;
    const ListingPage = `${baseUrl}/youtubeplacement`;

    cy.visit(ListingPage);
    // cy.url().should("contains", "omgskynet");
}

let testCaseCounter = 1;

export function generateTestCaseId() {
    return `Test Case ${testCaseCounter++}:`;
}

export function VisitPalcementListingPage() {
    visitPlacementUploaderPage();
    cy.wait(2000)
    cy.get('[data-testid="sf-button"]').click({ multiple: true })
}
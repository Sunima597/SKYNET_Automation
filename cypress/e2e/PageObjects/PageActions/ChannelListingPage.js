const ChannelListingPage = require("../PageElements/GetChannelListPage.json")

export function VisitChannelListingPage() {
    const baseUrl = Cypress.env("YoutubeAnalyticsPageUrl").url;
    const ListingPage = `${baseUrl}/youtubeuniverse`;

    cy.visit(ListingPage);
    cy.url().should("contains", "omgskynet");
}

let testCaseCounter = 1;

export function generateTestCaseId() {
    return `Test Case ${testCaseCounter++}:`;
}

export function VisitSummaryPage() {
    VisitChannelListingPage();
    cy.wait(2000)
    cy.get('[data-testid="yt-universe-tab-Summary"]').click()
}

export function VisitchannelTab() {
    VisitChannelListingPage();

    cy.wait(8000)
    cy.get('[data-testid="yt-universe-tab-Channels"]').click();


}

export function VisitLanguageTab() {
    VisitChannelListingPage();
    cy.wait(8000)
    cy.get('[data-testid="yt-universe-tab-Languages"]').click();
}
export function VisitCategoriesTab() {
    VisitChannelListingPage();
    cy.wait(5000)
    cy.get('[data-testid="yt-universe-tab-Categories"]').click();
}

import { visitPlacementUploaderPage, generateTestCaseId, VisitPalcementListingPage } from "../PageObjects/PageActions/PlacementListingpage"

describe("Test Suite for Placementuploading Page", () => {
    beforeEach(() => {
        cy.session('userSession', () => {
            cy.login({ project: "PlacementUploaderPageUrl" });
            cy.wait(5000)
          
        });
    });

    it(`${generateTestCaseId()} Verify Placement Uploader Page `, () => {
             VisitPalcementListingPage();
            cy.wait(2000)
            cy.get('[data-testid="sf-button"]').click({ multiple: true })
        });
});

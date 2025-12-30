import { VisitChannelListingPage, generateTestCaseId, VisitSummaryPage, VisitchannelTab, VisitLanguageTab,VisitCategoriesTab } from "../PageObjects/PageActions/ChannelListingPage"

describe("Test Suite for ChannelListing Page", () => {
    beforeEach(() => {
        cy.session('userSession', () => {
            cy.login({ project: "YoutubeAnalyticsPageUrl" });
            cy.wait(5000)
            //cy.title().should("contains", "Skynet|Dashboard");
        });
    });
    
    it(`${generateTestCaseId()} Verify Summary Page `, () => {
        VisitSummaryPage();
        cy.wait(2000)
        cy.get('[data-testid="yt-universe-tab-Summary"]').click()
    });

    it(`${generateTestCaseId()}  Verify using api intercept for summary page `, () => {
        VisitchannelTab();
        cy.intercept('GET', '/api/v1/youtube-universe/analytics/summary').as('get summary details ');
    });
    

    it(`${generateTestCaseId()} Visit ChannelListing page`, () => {
        VisitchannelTab();
        cy.wait(8000);
        cy.get('[data-testid="yt-universe-tab-Channels"]').click({force: true});

    });


    it(`${generateTestCaseId()}Verifying Table header`, () => {
        VisitchannelTab();
        cy.wait(5000)
        const expectedHeaders = [
            "",
            "Channel Name",
            "Channel Theme",
            "Language",
            "Subscribers Count",
            "Current Placement",
            "",
        ];

        cy.get("table thead tr th").should("have.length", expectedHeaders.length);

        expectedHeaders.forEach((header, index) => {

            cy.get("table thead tr th").eq(index).should("have.text", header);
        });



    });

    it(`${generateTestCaseId()}  Verify using api intercept for channels`, () => {
        VisitchannelTab();
        cy.intercept('POST', '/api/v1/youtube-universe/channels').as('getChannelList');
    });

    it(`${generateTestCaseId()} Visiting Language tab `, () => {
        VisitLanguageTab();
        cy.wait(8000)
        cy.get('[data-testid="yt-universe-tab-Languages"]').click();


    })


    it(`${generateTestCaseId()}  Verifying  API intercept for Language tab`, () => {
        VisitLanguageTab();
        cy.intercept('GET', 'api/dashboard/feature-list-dashboard').as('Get configuration for Language distribution')
        cy.intercept('GET','/api/v1/youtube-universe/analytics/language-distribution?date=2025-05-01').as('Language Distribution for a given date')
    });


    it(`${generateTestCaseId()} Visiting Categories tab `, () => {
        VisitCategoriesTab();
        cy.wait(8000)
        cy.get('[data-testid="yt-universe-tab-Categories"]').click();


    })

    it(`${generateTestCaseId()} Verifying API intercept for  Categories tab `,()=>{
        VisitCategoriesTab();
        cy.wait(5000)
        cy.intercept('GET','/api/v1/youtube-universe/configuration/category-distribution').as('Get configuration for Categories distribution')
        cy.intercept('GEt','/api/v1/youtube-universe/analytics/category-distribution?date=2025-05-0').as(' Categories Distribution for given date')
        

    })


});
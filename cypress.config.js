const { defineConfig } = require("Cypress");

module.exports = defineConfig({
  video: true,
  screenshotsFolder: "cypress/screenshots",
  videosFolder: "cypress/videos",
  videoCompression: 32,
  videoUploadOnPasses: false,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
    timestamp: "mmddyyyy_HHMMss",
    charts: true,
    reportPageTitle: "Cypress Test Report",
    embeddedScreenshots: true,
    inlineAssets: true,
    metadata: {
      browser: { name: "chrome", version: "latest" }, 
      platform: { name: process.platform },
      executed: process.env.CI ? "CI/CD Pipeline" : "Local",
      project: "SkyNet QA",
      tester: process.env.TESTER || "Sunima Chhetri",
    },
  },
  e2e: {
    experimentalSessionAndOrigin: true,
    baseUrl: "https://dev.omgskynet.io",
    env:{
      YoutubeAnalyticsPageUrl: {
        url: 'https://dev.omgskynet.io',
        username: 'skynet-bp-admin@yopmail.com',
        password: 'Admin@1234',  //cy.login({ project: "projectA" }); this is how you call login in test
      },
      PlacementUploaderPageUrl:{
         url: 'https://dev.omgskynet.io',
        username: 'skynet-bp-admin@yopmail.com',
        password: 'Admin@1234', 
      },
     
    },
    //fixturesFolder: "cypress/e2e/CampaignMangerE2E/fixtures",
    fixturesFolder: "cypress/fixtures",



  },
});

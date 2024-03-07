describe("Navigation", () => {
  it("should navigate to the about page", () => {
    // Start from the sitemap page
    cy.visit("/sitemap");

    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="/Solutions/Technology-Stack"]')
      .invoke("removeAttr", "target")
      .click();

    // The new url should include "/solutions/technology-stack" and wait for the page to load before so that it dont throw error
    cy.url().should("include", "/solutions/technology-stack");
  });
});

describe("Get candidates", () => {
  it("Gets candidates and renders the accurate count of candidates on the page", () => {
    cy.visit("http://localhost:3000");
    cy.request("http://private-041255-sakura3.apiary-mock.com/applicants").then(
      (request) => {
        let length = request.body.length;
        cy.get(".candidate-cards-container")
          .children()
          .should("have.length", length);
      }
    );
  });
});

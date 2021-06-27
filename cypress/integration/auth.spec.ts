describe("add a song", function () {
  it("should login and redirect", function () {
    cy.visit("http://localhost:3000");
    cy.findByLabelText("email").type("damien.herv@gmail.com");
    cy.findByLabelText("password").type("password");
    cy.findByText("login").click();
    cy.url().should("include", "/songs");
  });

  it("should signup and redirect", function () {
    cy.visit("http://localhost:3000");
    cy.findByText("need an account").click();
    cy.findByLabelText("name").type("damien");
    cy.findByLabelText("email").type("damien.herv@gmail.com");
    cy.findByLabelText("password").type("password");
    cy.findByText("login").click();
    cy.url().should("include", "/songs");
  });
});

export {};

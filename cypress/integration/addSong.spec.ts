describe("add a song", function () {
  it("should add a song to the list", function () {
    cy.visit("http://localhost:3000");
    cy.findByLabelText("email").type("damien.herv@gmail.com")
    cy.findByLabelText("password").type("password")
    cy.findByText("login").click()
    cy.url().should('include', '/songs')

    cy.findByLabelText(/add a song/i).type("hello");
    cy.findByRole("button").click();
    cy.findByText("hello").should("exists");

    // clear song
  });
});

export {};

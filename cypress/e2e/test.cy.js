describe("test", () => {
    it("hp", () => {
        cy.visit("http://localhost:5173")
        cy.contains("h1", "Testovací aplikace Vue + Jest + Cypress")
    })
})

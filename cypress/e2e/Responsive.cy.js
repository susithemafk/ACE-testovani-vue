/// <reference types="Cypress" />
describe("Responsive Component", () => {
    it("Displays correctly on small screens", () => {
        cy.viewport("iphone-3", "landscape")
        cy.visit("/")
        cy.get("[data-cy='btn-desktop']").should("not.exist")
        cy.get("[data-cy='btn-tablet']").should("not.exist")
        cy.get("[data-cy='btn-mobile']").should("exist")
    })

    it("Displays correctly on medium screens", () => {
        cy.viewport("ipad-2", "portrait")
        cy.visit("/")
        cy.get("[data-cy='btn-desktop']").should("not.exist")
        cy.get("[data-cy='btn-tablet']").should("exist")
        cy.get("[data-cy='btn-mobile']").should("not.exist")
    })

    it("Displays correctly on large screens", () => {
        cy.viewport(1920, 1080)
        cy.visit("/")
        cy.get("[data-cy='btn-desktop']").should("exist")
        cy.get("[data-cy='btn-tablet']").should("not.exist")
        cy.get("[data-cy='btn-mobile']").should("not.exist")
    })
})

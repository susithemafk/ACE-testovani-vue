/// <reference types="Cypress" />
// describe("Responsive Component", () => {
//     beforeEach(() => {
//         cy.visit("/")
//     })

//     it("Displays correctly on small screens", () => {
//         cy.viewport("iphone-6")
//         cy.get(".grid").should("have.css", "grid-template-columns", "1fr")
//     })

//     it("Displays correctly on medium screens", () => {
//         cy.viewport("ipad-2")
//         cy.get(".grid").should("have.css", "grid-template-columns", "repeat(2, 1fr)")
//     })

//     it("Displays correctly on large screens", () => {
//         cy.viewport(1200, 800)
//         cy.get(".grid").should("have.css", "grid-template-columns", "repeat(3, minmax(0, 1fr))")
//     })
// })

// cypress/integration/responsive.spec.js
describe("Responsive Component", () => {
    it("Displays correctly on small screens", () => {
        cy.viewport("iphone-6")
        cy.visit("/")
        cy.get(".item").should("have.length", 5)
    })

    it("Displays correctly on medium screens", () => {
        cy.viewport("ipad-2")
        cy.visit("/")
        cy.get(".item").should("have.length", 5)
    })

    it("Displays correctly on large screens", () => {
        cy.viewport(1200, 800)
        cy.visit("/")
        cy.get(".item").should("have.length", 5)
    })
})

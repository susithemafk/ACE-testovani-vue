/// <reference types="Cypress" />
describe("Form Component", () => {
    beforeEach(() => {
        cy.visit("/")
    })

    it("Displays form fields and button", () => {
        cy.get("#name").should("exist")
        cy.get("#email").should("exist")
        cy.get("[data-cy='submit']").contains("Submit").should("exist")
    })

    it("Validates name input", () => {
        cy.get("#name").type("John")
        cy.get("#name-help").should("not.exist")

        cy.get("#name").clear().type("123")
        cy.get("#name-help").should("contain", "Invalid name")
    })

    it("Validates email input", () => {
        cy.get("#email").type("john@example.com")
        cy.get("#email-help").should("not.exist")

        cy.get("#email").clear().type("invalid-email")
        cy.get("#email-help").should("contain", "Invalid email")
    })

    it("Submits form with valid inputs", () => {
        cy.get("#name").type("John")
        cy.get("#email").type("john@example.com")

        cy.get("[data-cy='submit']").contains("Submit").click()
    })

    it("Submits form with valid inputs, clear inputs then", () => {
        cy.get("#name").type("John")
        cy.get("#email").type("john@example.com")

        cy.get("[data-cy='form']").submit()

        cy.on("window:alert", (alertText) => {
            expect(alertText).to.not.be.empty
        })

        cy.get("#name").should("have.value", "")
        cy.get("#email").should("have.value", "")
    })

    it("Prevents form submission with invalid inputs", () => {
        cy.get("#name").type("32 ---- *** ///")
        cy.get("#email").type("john@example.com")

        cy.get("[data-cy='submit']").contains("Submit").should("be.disabled")
    })
})

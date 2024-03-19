/// <reference types="Cypress" />
describe("API Call Component", () => {
    beforeEach(() => {
        cy.visit("/")
        cy.request("https://official-joke-api.appspot.com/jokes/ten").as("jokesRequest")
    })

    it("Is API working?", () => {
        cy.get("@jokesRequest").its("status").should("eq", 200)
    })

    it("Check API and its structure", () => {
        cy.get("@jokesRequest").its("body").should("have.length", 10)
        cy.get("@jokesRequest")
            .its("body")
            .then((body) => {
                expect(body.length).to.be.greaterThan(0)
            })
        cy.get("@jokesRequest")
            .its("body")
            .then((body) => {
                expect(body).to.have.length(10)
            })
        cy.get("@jokesRequest")
            .its("body")
            .each((joke) => {
                expect(joke).to.have.property("type")
                expect(joke).to.have.property("setup")
                expect(joke).to.have.property("punchline")
                expect(joke).to.have.property("id")

                expect(joke).to.have.all.keys("type", "setup", "punchline", "id")
            })
    })

    it("Displays jokes fetched from API", () => {
        cy.get('[data-cy="joke-setup"]').should("have.length.above", 0)
        cy.get("@jokesRequest").then((response) => {
            const jokes = response.body
            jokes.forEach(() => {
                cy.get('[data-cy="joke-setup"]').should("exist")
                cy.get('[data-cy="joke-punchline"]').should("exist")
            })
        })
    })
})

<script setup lang="ts">
// import MathFunctions from "./components/MathFunctions.vue"
import Paragraph from "./components/Paragraph.vue"
// import Input from "./components/Input.vue"
// import Parent from "./components/Parent.vue"
import Form from "./components/Form.vue"
import Joke from "./components/Joke.vue"
import Responsive from "./components/Responsive.vue"

import Accordion from "primevue/accordion"
import AccordionTab from "primevue/accordiontab"

const accordionClasses = "border-solid border rounded-lg mb-6"
</script>

<template>
    <div class="container">
        <h1 class="text-center mb-8">Testovací aplikace Vue + Jest + Cypress</h1>

        <Accordion :active-index="0" :class="accordionClasses">
            <AccordionTab header="Formulář">
                <Form></Form>
            </AccordionTab>
        </Accordion>

        <Accordion :active-index="0" :class="accordionClasses">
            <AccordionTab header="API">
                <Joke :fetchingUrl="'../../cypress/fixtures/jokes.json'" />
            </AccordionTab>
        </Accordion>

        <Accordion :active-index="0" :class="accordionClasses">
            <AccordionTab header="Skrytí odstavce">
                <Paragraph :initialText="'Toto je odstavec!'" />
            </AccordionTab>
        </Accordion>

        <Accordion :active-index="0" :class="accordionClasses">
            <AccordionTab header="Responzivita">
                <Responsive />
            </AccordionTab>
        </Accordion>
    </div>
</template>

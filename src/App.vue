<script setup lang="ts">
import Paragraph from "./components/Paragraph.vue"
import Form from "./components/Form.vue"
import Joke from "./components/Joke.vue"
import Responsive from "./components/Responsive.vue"

import Accordion from "primevue/accordion"
import AccordionTab from "primevue/accordiontab"
import { marked } from "marked"
import { ref, onMounted } from "vue"

// import "prismjs/prism"
// import "prismjs/themes/prism.css"
// import Prism from "vue-prism-component"
// import Prism from "prismjs"

import hljs from "highlight.js/lib/core"
import "highlight.js/styles/default.css"
import javascript from "highlight.js/lib/languages/javascript"

hljs.registerLanguage("javascript", javascript)

const accordionClasses = "border-solid border rounded-lg mb-6"

const unitTestMarkdown = ref("")

const highlightCodeBlocks = () => {
    const renderer = new marked.Renderer()
    renderer.code = (code, lang) => {
        const validLang = hljs.getLanguage(lang) ? lang : "plaintext"
        const highlightedCode = hljs.highlight(validLang, code).value
        return `<pre><code class="hljs language-${validLang}">${highlightedCode}</code></pre>`
    }
    const html = marked(unitTestMarkdown, { renderer })
    document.querySelector(".markdown-section").innerHTML = html
}

onMounted(async () => {
    const res = await import("../unittest.md" as unknown as string)
    const response = await fetch(res.default)
    const text = await response.text()
    unitTestMarkdown.value = text
    highlightCodeBlocks()
})
</script>

<template>
    <div class="container">
        <h1 class="text-center mb-8">Testovací aplikace Vue + Jest + Cypress</h1>

        <section id="unit" class="mb-24">
            <h2 id="unit">Unit testy</h2>
            <Accordion :active-index="0" :class="accordionClasses">
                <AccordionTab header="Unit testy">
                    <!-- <div v-html="marked(unitTestMarkdown)" class="markdown-section"></div> -->
                    <div v-html="marked(unitTestMarkdown)" class="markdown-section"></div>
                </AccordionTab>
            </Accordion>
        </section>

        <section id="e2e" class="mb-24">
            <h2>E2E</h2>
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
        </section>
    </div>
</template>

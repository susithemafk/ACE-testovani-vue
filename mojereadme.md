
<!-- https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet -->
# Unit testy s Jest

Soubory k testování se pojmují .test.jsx


dobry letsgo

## Funkce
shallowMount - mountuje pouze komponentu a ne její potomky, kvůli rychlosti

když je potřeba aby se updatnul dom pro změnu, je potřeba přidat await
await bud takto

wrapper.find("button").trigger("click")
await wrapper.vm.$nextTick()

nebo takto
await wrapper.find("button").trigger("click")

### Unit testování
testuje části kódu, funkce, komponenty

### Integration testování
testuje jak spolu komunikují jednotlivé části kódu, komponenty
tz. chci vidět jak se chová komponenta když se změní stav jiné komponenty

### End to end testování
testuje jak se chová aplikace jako celek, jak se chová když uživatel kliká na různé věci
spouští se v simulovaném prohlížeči a interaguje s aplikací

pro tailwind je potreba vscode rozsireni Tailwind CSS IntelliSense

docs cypress
https://docs.cypress.io/guides/references/Assertions

<!-- https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet -->
# Unit testy s Jest
## Instalace
```
npm install --save-dev jest
npm install @testing-library/vue --save-dev
npm install ts-jest @types/jest --save-dev
npm install ts-node @testing-library/jest-dom --save-dev
npm install jest-environment-jsdom
npm install identity-obj-proxy --save-dev
npm install --save-dev @jest/globals

https://hung.dev/posts/jest-vite
https://gist.github.com/rettigd/b797a60a4677f66bc528b217df8bb194

```
a do package.json přidat
```
"scripts": {
	"test": "jest"
  }
```

In your root directory, create a jest.config.ts file and add the following to it
export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    // process `*.tsx` files with `ts-jest`
    },
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__ mocks __/fileMock.js',
    },
}

##
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

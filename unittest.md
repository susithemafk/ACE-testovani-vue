### Základní info
Unit testy testují části kódu, funkce, komponenty, jestli správně fungují, renderují se, obsahují potřebná data atd.

Příklady užití:
Interakce s tlačítky a kontrola očekávaných změn po jejich stisku
Změna hodnoty proměnné v komponentě a kontrola, zda se změna správně projevila
Kontrola dat komponenty po zadání určitých props
Kontrola zda emit metoda emituje správné hodnoty
Kontrola zda jiná komponenta přijímá emit a správně na něj reaguje

Jak na to?
Nainstaluje se do projektu Jest, je to s Vite složitější, ale to proberu níže

### Konfigurace Jestu

přidáme konfiguraci Jestu buď do package.json

    "scripts": {...},
    "jest": {
        "testEnvironment": "jsdom",
        "testEnvironmentOptions": {
            "customExportConditions": [
                "node",
                "node-addons"
            ]
        },
        "moduleFileExtensions": [
            "js",
            "json",
            "vue"
        ],
        "transform": {
            "^.+\\.js$": "babel-jest",
            "^.+\\.vue$": "@vue/vue3-jest"
        }
    },
    "dependencies": {...},
    ...

nebo vytvoříme soubor jest.config.js
module.exports = {
testEnvironment: "jsdom",
testEnvironmentOptions: {
customExportConditions: ["node", "node-addons"],
},
moduleFileExtensions: ["js", "json", "vue"],
transform: {
"^.+\\.js$": "babel-jest",
			"^.+\\.vue$": "@vue/vue3-jest",
},
}

### Nastavení VS Codu

intellisense funguje díky balícku @types/jest

### Spuštění testů

do package.json přidáme script
"scripts": {
...,
"test:unit": "jest --verbose ./jest",
},

--verbose zobrazí testy detailnějí
./jest je složka ve které testy hledá
--watch sleduje změny v souborech a spouští testy automaticky
oba parametry jsou volitelné

### Vytvoření testu

Vytvoříme soubor s koncovkou .test.js nebo jinak, dle konfigurace
v tomto projektu je soubor Basics.test.js
prázdné testovací soubory vrací chybu

## Syntaxe Jestu

Bloky testu se vytváří pomocí

```javascript
describe("Test funkcí v App.vue", () => {})
```

Testy se vytváří pomocí funkce

```javascript
test("Test funkce add", () => {})
```

nebo

```javascript
it("Test funkce add", () => {})
```

Přeskočení testu

```javascript
xit("Přeskoč tento test", () => {})
```

### Důležité funkce Jestu

expect - očekává něco

```javascript
const condition = false
expect(condition).toBeFalsy()
expect(condition).not.toBeTruthy()
expect(condition).not.toBe(true)
expect(condition).toBe(false)
```

mount - mountuje celou komponentu

```javascript
const wrapper = mount(App)

// s props
const wrapper = mount(App, {
    props: {
        propName: "value",
    },
})
```

shallowMount - mountuje pouze komponentu a ne její potomky, kvůli rychlosti

```javascript
const wrapper = shallowMount(App)
```

find - najde element v komponentě pomocí selektoru

```javascript
const button = wrapper.find("button")
const button = wrapper.find(".button")
const button = wrapper.find("#button")
const button = wrapper.find("[data-test='button']")
```

trigger - spustí událost na elementu

```javascript
button.trigger("click")
```

vm - získá instanci Vue a může pracovat s proměnnými a funkcemi komponenty

```javascript
console.log(wrapper.vm.myArray)
console.log(wrapper.vm.myFunc())
```

nextTick - počká na update DOM

```javascript
button.trigger("click")
await wrapper.vm.$nextTick()

// ale funguje i toto
await button.trigger("click")
```

beforeEach - spustí se před každým testem v daném bloku

```javascript
let wrapper
beforeEach(() => {
    wrapper = shallowMount(App, {
        props: {
            propName: "value",
        },
    })
})
```

### Příklady testů

Jest má spoustu funkcí, které najdeme v dokumentaci:
https://jestjs.io/docs/api
výše jsem sepsal ty hlavní, které se používají nejčastěji

pojďme na příklady!

#### Test props

```javascript
describe("Props", () => {
    it("Check initial value", () => {
        const wrapper = mount(Paragraph)
        expect(wrapper.props().initialText).toBe("Text")
    })

    it("Check updated value", () => {
        const wrapper = mount(Paragraph, {
            props: {
                initialText: "Hello world",
            },
        })
        expect(wrapper.props().initialText).toBe("Hello world")
    })
})
```

#### Test inputů

```javascript
describe("Inputs", () => {
    it("Check input value", () => {
        const wrapper = mount(Input)
        const input = wrapper.find("input")
        expect(input.element.value).toBe("")
    })

    it("Change input value", () => {
        const wrapper = mount(Input)
        const input = wrapper.find("input")

        input.setValue("example1")
        expect(input.element.value).toBe("example1")

        input.element.value = "example2"
        expect(input.element.value).toBe("example2")
    })
})
```

#### Test emitu

```javascript
it("Check if child component emits", async () => {
    const parent = mount(Parent)
    const child = parent.getComponent({ name: "Child" })
    await child.vm.$emit("childEvent", "emitting from child")
    expect(child.emitted().childEvent[0][0]).toBe("emitting from child")
    console.log(child.emitted().childEvent)
    //[ [ 'emitting from child' ] ]
})
```

#### Test funkcí komponenty a beforeEach

```javascript
describe("Math functions from component", () => {
    let wrapper

    beforeEach(() => {
        wrapper = mount(MathFunctions, {
            props: {
                initialValue: 10,
                num: 10,
            },
        })
    })

    it("adds two numbers", () => {
        wrapper.vm.add()
        expect(wrapper.vm.result).toBe(20)
    })

    it("subtracts two numbers", () => {
        wrapper.vm.subtract()
        expect(wrapper.vm.result).toBe(0)
    })
})
```

import { mount } from "@vue/test-utils"
import Paragraph from "../src/components/Paragraph.vue"
import Input from "../src/components/Input.vue"
import Button from "../src/components/Button.vue"
import MathFunctions from "../src/components/MathFunctions.vue"
import Parent from "../src/components/Parent.vue"
import Child from "../src/components/Child.vue"

// testy se obaluji do bloku describe
describe("Basics", () => {
    // it je testovací funkce
    it("1 + 1 = 2", () => {
        // očekávám
        expect(1 + 1)
            // že bude
            .toBe(2)
    })

    // Pokud chci skipnout test, mohu použít xit nebo xtest
    xit("Skipped test", () => {
        expect(1 + 1).toBe(150)
    })

    // Podmínky
    it("Conditions", () => {
        const condition = false
        expect(condition).toBeFalsy()
        expect(condition).not.toBeTruthy()
        expect(condition).not.toBe(true)
        expect(condition).toBe(false)
    })

    // Loopy
    it("Looping", () => {
        const array = [1, 2, 3]
        array.forEach((item, index) => {
            expect(item).toBe(index + 1)
        })
    })
})

// hledání elementu
describe("Find element", () => {
    it("Check if element exists", () => {
        const wrapper = mount(Paragraph)
        const element = wrapper.find("p")
        expect(element.exists()).toBeTruthy()
    })

    it("Check initial text in element", () => {
        const wrapper = mount(Paragraph)
        const element = wrapper.find(".text")
        expect(element.text()).toBe("Text")
    })

    it("Check text with props", () => {
        const wrapper = mount(Paragraph, {
            props: {
                initialText: "Hello world",
            },
        })
        const element = wrapper.find("#text")
        expect(element.text()).toBe("Hello world")
    })
})

// hledání komponent
describe("Find component", () => {
    it("Check if component exists", () => {
        const parent = mount(Parent)
        const child = parent.findComponent(Child)
        expect(child.exists()).toBeTruthy()
    })

    it("Check if component has child", () => {
        const parent = mount(Parent)
        const child = parent.getComponent({ name: "Child" })
        expect(child.exists()).toBeTruthy()

        if (expect(child.exists()).toBeTruthy()) {
            const paragraph = child.find("p")
            expect(paragraph.text()).toBe("I am child")
        }
    })
    // findComponent vs getComponent
    // getComponent - throwne error, pokud nenajde komponentu
})

// testování props
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

// testování inputů a nastavení hodnoty
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

// emitování
describe("Emitting", () => {
    it("When clicked, button emits 'valueChanged'", async () => {
        const wrapper = mount(Button)
        console.log(wrapper.emitted())
        wrapper.find("button").trigger("click")
        console.log(wrapper.emitted())
        /**
		 * console.log
			{ valueChanged: [ [ 'New value' ] ], testEmit: [ [ 123 ] ] }
		 */
        expect(wrapper.emitted().valueChanged).toBeTruthy()
        expect(wrapper.emitted().valueChanged[0]).toEqual(["New value"])
    })

    it("Custom named event call", () => {
        const wrapper = mount(Button)
        console.log(wrapper.emitted())
        wrapper.find(".btn").trigger("myevent")
        console.log(wrapper.emitted())
        expect(wrapper.emitted().test).toBeTruthy()
    })

    it("Renders initial value", () => {
        const wrapper = mount(Button)
        expect(wrapper.find("p").text()).toBe("Default value")
    })

    it("Renders the updated value after clicking the button", async () => {
        const wrapper = mount(Button)
        await wrapper.find("button").trigger("click")
        expect(wrapper.find("p").text()).toBe("New value")
    })
})

// math
describe("Math", () => {
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

    it("multiplies two numbers", () => {
        wrapper.vm.multiply()
        expect(wrapper.vm.result).toBe(100)
    })

    it("divides two numbers", () => {
        wrapper.vm.divide()
        expect(wrapper.vm.result).toBe(1)
    })
})

// triggers

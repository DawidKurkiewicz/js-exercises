
import { getStats, getValueFromInput } from './logic.js'

export default class App {
    constructor(selector) {
        this.container = document.querySelector(selector || 'body')
        this.inputElement = null
        this.buttonElement = null
        this.paragraphElement = null

        this.resultText = ''

        this.init()
    }

    init() {
        this.render()
    }

    render() {
        this.container.innerHTML = ''

        this.inputElement = document.createElement('input')
        this.buttonElement = document.createElement('button')
        this.paragraphElement = document.createElement('p')

        this.inputElement.classList.add('input')
        this.buttonElement.classList.add('button')
        this.paragraphElement.classList.add('result')

        this.buttonElement.innerText = 'Click'

        this.paragraphElement.innerHTML = this.resultText

        this.addEventsListeners()

        this.container.appendChild(this.inputElement)
        this.container.appendChild(this.buttonElement)
        this.container.appendChild(this.paragraphElement)
    }

    buttonClickHandler() {
        const stats = getStats(
            getValueFromInput(
                this.inputElement
            )
        )


        this.resultText = `
        <p>MIN: ${stats.min}</p>
        <p>MAX: ${stats.max}</p>
        <p>AVG: ${stats.avg}</p>
        <p>MED: ${stats.median}</p>
    `

        this.render()
    }

    addEventsListeners() {
        this.buttonElement.addEventListener(
            'click',
            this.buttonClickHandler.bind(this)
        )
    }
}
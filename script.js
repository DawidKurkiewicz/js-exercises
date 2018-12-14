
import { getStats, getValueFromInput } from './logic.js'

export default function App(selector) {
  this.container = document.querySelector(selector || 'body')
  this.inputElement = null
  this.buttonElement = null
  this.paragraphElement = null

  this.resultText = ''

  this.init()
}

App.prototype.init = function () {
  this.render()
}

App.prototype.render = function () {
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

App.prototype.buttonClickHandler = function () {
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

App.prototype.addEventsListeners = function () {
  this.buttonElement.addEventListener(
    'click',
    this.buttonClickHandler.bind(this)
  )
}
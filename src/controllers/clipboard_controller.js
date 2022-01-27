import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  
  static targets = [ "source" ]

  static classes = [ "supported" ]
  //when we have a button
  // copy() {
  //   navigator.clipboard.writeText(this.sourceTarget.value)
  // }

  //copy action could be attached to a link as well a button element
  copy(event) {
    event.preventDefault()
    this.sourceTarget.select()
    document.execCommand("copy")
  }

  connect() {
    navigator.permissions.query({ name: 'clipboard-write' }).then( (result) => {
      if (result.state == "granted") {
        this.element.classList.add(this.supportedClass)
      }
    })
  }
}
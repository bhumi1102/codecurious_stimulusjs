import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "slide" ]

  //static values = {index: Number}

  static values = { index: {type: Number, default: 1} }

  // We don't even need an initialize life-cycle call-back
  // after adding the indexValueChanged() method.
  // initialize() {
  //   console.log(this.indexValue)
  //   console.log(typeof this.indexValue)
  //   this.showCurrentSlide()
  // }

  next() {
    this.indexValue++
  }

  previous() {
    this.indexValue--
  }

  //this method is automatically called at initialziation
  //and in response any change to the data-slideshow-index-value attribute.
  indexValueChanged() {
    this.showCurrentSlide()
  }

  showCurrentSlide() {
    this.slideTargets.forEach((element, index) => {
      element.hidden = index != this.indexValue
    })
  }
}
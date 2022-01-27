import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = { url: String, refreshInterval: Number }

  connect() {
    this.load()

    if (this.hasRefreshIntervalValue) {
      this.startRefreshing()
    }
  }

  disconnect() {
    this.stopRefreshing()
  }

  // original load method for when url-value attribute is on the 
  //div where the controller is attached
  load() {
    fetch(this.urlValue)
      .then(response => response.text())
      .then(html => this.element.innerHTML = html)
  }

  // For when two elements have a url-param (not a url-value at the controller level.
  // Note: The html associated with this is commented out, otherwise it'll
  // interfere with the connect() and load() and start loading
  // infinitely due to the timer. weird stuff.
  // load( {params} ) {
  //   console.log(params)
  //   fetch(params.url)
  //     .then(response => response.text())
  //     .then(html => this.element.innerHTML = html)
  // }

  startRefreshing() {
    this.refreshTimer = setInterval( () => {
      this.load()
    }, this.refreshIntervalValue)
  }

  stopRefreshing() {
    if (this.refreshTimer) {
      clearInterval(this.refreshTimer)
    }
  }

}
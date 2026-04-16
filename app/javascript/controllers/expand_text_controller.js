import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["text", "toggle"]
  static values = { words: { type: Number, default: 20 } }

  connect() {
    this.fullText = this.textTarget.textContent.trim()
    this.truncated = this.#truncate(this.fullText, this.wordsValue)

    if (this.truncated === this.fullText) {
      this.toggleTarget.hidden = true
      return
    }

    this.#collapse()
  }

  toggle() {
    this.expanded ? this.#collapse() : this.#expand()
  }

  #expand() {
    this.expanded = true
    this.textTarget.textContent = this.fullText
    this.toggleTarget.textContent = "See less"
    this.toggleTarget.setAttribute("aria-expanded", "true")
  }

  #collapse() {
    this.expanded = false
    this.textTarget.textContent = this.truncated
    this.toggleTarget.textContent = "See more"
    this.toggleTarget.setAttribute("aria-expanded", "false")
  }

  #truncate(text, wordCount) {
    const words = text.split(/\s+/)
    if (words.length <= wordCount) return text
    return words.slice(0, wordCount).join(" ") + "\u2026"
  }
}

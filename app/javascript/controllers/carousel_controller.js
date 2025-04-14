import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["slide"]
  static values = {
    index: Number,
    interval: Number,
    autoplay: Boolean
  }

  connect() {
    console.log("CarouselController connected");
    
    this.indexValue ||= 0
    this.showCurrentSlide()

    if (this.autoplayValue) {
      this.startAutoplay()
    }
  }

  disconnect() {
    this.stopAutoplay()
  }

  showCurrentSlide() {
    this.slideTargets.forEach((el, i) => {
      el.classList.toggle("hidden", i !== this.indexValue)
    })
  }

  next() {
    this.indexValue = (this.indexValue + 1) % this.slideTargets.length
    this.showCurrentSlide()
  }

  previous() {
    this.indexValue =
      (this.indexValue - 1 + this.slideTargets.length) %
      this.slideTargets.length
    this.showCurrentSlide()
  }

  startAutoplay() {
    this.timer = setInterval(() => this.next(), this.intervalValue || 3000)
  }

  stopAutoplay() {
    if (this.timer) clearInterval(this.timer)
  }
}
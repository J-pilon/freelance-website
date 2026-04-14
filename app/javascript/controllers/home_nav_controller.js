import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["link"]

  connect() {
    this.positionBelowNavbar()
    this.setupObserver()
  }

  disconnect() {
    if (this.observer) this.observer.disconnect()
  }

  scrollTo(event) {
    event.preventDefault()
    const sectionId = event.currentTarget.dataset.section
    const section = document.getElementById(sectionId)
    if (!section) return

    // Compute the sticky offset from the live bounding rect of this element
    // so it works correctly regardless of the exact navbar/TOC bar pixel height.
    const offset = this.element.getBoundingClientRect().bottom
    const top = section.getBoundingClientRect().top + window.scrollY - offset

    window.scrollTo({ top, behavior: "smooth" })
  }

  // Dynamically set `top` so this bar always sits flush below the main navbar,
  // regardless of its rendered height.
  positionBelowNavbar() {
    const navbar = document.querySelector("[data-main-navbar]")
    if (navbar) {
      this.element.style.top = `${navbar.offsetHeight}px`
    }
  }

  setupObserver() {
    const sections = this.linkTargets
      .map(link => document.getElementById(link.dataset.section))
      .filter(Boolean)

    // Fire when a section's top crosses the 20%-from-top threshold.
    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) this.setActive(entry.target.id)
        })
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    )

    sections.forEach(section => this.observer.observe(section))
  }

  setActive(sectionId) {
    this.linkTargets.forEach(link => {
      const active = link.dataset.section === sectionId
      // !text-primary uses Tailwind's important modifier to override the base
      // `a { color: blue }` rule when the link is active.
      link.classList.toggle("!text-primary", active)
      link.classList.toggle("bg-primary/10", active)
    })
  }
}

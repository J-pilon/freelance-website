import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["contactInfo"];

  connect() {
    console.log("ScrollIntoViewController connected");
  }

  scrollToElement() {
    this.contactInfoTarget.scrollIntoView({ behavior: "smooth" });
  }
}

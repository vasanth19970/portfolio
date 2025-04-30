// Navbar scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector("header")
  if (window.scrollY > 50) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }
})

// Mobile menu toggle
const hamburger = document.querySelector(".hamburger")
const navbar = document.getElementById("navbar")

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active")
  hamburger.classList.toggle("active")
})

// Close mobile menu when clicking on a nav link
const navLinks = document.querySelectorAll("nav ul li a")
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active")
    hamburger.classList.remove("active")
  })
})

// Active link on scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section")
  const navLinks = document.querySelectorAll("nav ul li a")

  let current = ""

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight

    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
})

// Form submission
const contactForm = document.getElementById("contactForm")
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form values
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const subject = document.getElementById("subject").value
    const message = document.getElementById("message").value

    // Here you would typically send the form data to a server
    // For now, we'll just log it and show a success message
    console.log({
      name,
      email,
      subject,
      message,
    })

    // Show success message
    alert("Thank you for your message! I will get back to you soon.")

    // Reset form
    contactForm.reset()
  })
}

// Animation on scroll (simple version)
window.addEventListener("scroll", () => {
  const animatedElements = document.querySelectorAll(".project-card, .resume-item, .certificate-item")

  animatedElements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top
    const screenPosition = window.innerHeight / 1.3

    if (elementPosition < screenPosition) {
      element.style.opacity = "1"
      element.style.transform = "translateY(0)"
    }
  })
})

// Initialize animations
document.addEventListener("DOMContentLoaded", () => {
  const projectCards = document.querySelectorAll(".project-card")
  const resumeItems = document.querySelectorAll(".resume-item")
  const certificateItems = document.querySelectorAll(".certificate-item")

  // Set initial styles for animation
  ;[...projectCards, ...resumeItems, ...certificateItems].forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(20px)"
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
  })

  // Trigger scroll event to animate elements in view on page load
  window.dispatchEvent(new Event("scroll"))
})

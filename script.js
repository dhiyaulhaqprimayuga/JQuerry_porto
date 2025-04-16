// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Get elements
  const hamburgerBtn = document.querySelector(".hamburger-btn")
  const navMenu = document.querySelector(".nav-menu")
  const navLinks = document.querySelectorAll(".nav-menu a")

  // Toggle menu when hamburger button is clicked
  hamburgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    console.log("Hamburger clicked, menu toggled")
  })

  // Close menu when a nav link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active")
      console.log("Link clicked, menu closed")
    })
  })

  // Log to check if script is running
  console.log("Hamburger menu script loaded")
})

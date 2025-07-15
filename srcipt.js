// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle - FIXED
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const navMenu = document.getElementById("navMenu")

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active")
      mobileMenuBtn.classList.toggle("active")
    })

    // Close mobile menu when clicking on nav links
    const navLinks = navMenu.querySelectorAll("a")
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active")
        mobileMenuBtn.classList.remove("active")
      })
    })

    // Close mobile menu when clicking outside
    document.addEventListener("click", (event) => {
      if (!mobileMenuBtn.contains(event.target) && !navMenu.contains(event.target)) {
        navMenu.classList.remove("active")
        mobileMenuBtn.classList.remove("active")
      }
    })
  }

  // Smooth scrolling for CTA button
  const ctaButton = document.querySelector(".cta-button")
  if (ctaButton) {
    ctaButton.addEventListener("click", (e) => {
      e.preventDefault()
      const bookingSection = document.querySelector("#booking")
      if (bookingSection) {
        bookingSection.scrollIntoView({
          behavior: "smooth",
        })
      }
    })
  }

  // Scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated")
      }
    })
  }, observerOptions)

  // Observe all elements with animate-on-scroll class
  const animateElements = document.querySelectorAll(".animate-on-scroll")
  animateElements.forEach((el) => {
    observer.observe(el)
  })

  // Form input interactions
  const form = document.querySelector("#appointmentForm")
  if (form) {
    const inputs = form.querySelectorAll("input, select, textarea")

    inputs.forEach((input) => {
      input.addEventListener("focus", function () {
        this.parentElement.classList.add("focused")
      })

      input.addEventListener("blur", function () {
        if (!this.value) {
          this.parentElement.classList.remove("focused")
        }
      })
    })

    // Form submission
    form.addEventListener("submit", (e) => {
      e.preventDefault()
      alert("Appointment booked successfully! We will contact you soon.")
    })
  }

  // Time slot click interaction - FIXED
  const timeSlots = document.querySelectorAll(".slot.available")
  const timeSelect = document.getElementById("time")

  if (timeSlots.length > 0 && timeSelect) {
    timeSlots.forEach((slot) => {
      slot.addEventListener("click", function () {
        // Remove selected class from all slots
        document.querySelectorAll(".slot.selected").forEach((s) => {
          s.classList.remove("selected")
        })

        // Add selected class to clicked slot
        this.classList.add("selected")

        // Get time value from data attribute
        const timeValue = this.getAttribute("data-time")
        if (timeValue && timeSelect) {
          timeSelect.value = timeValue

          // Trigger change event
          const changeEvent = new Event("change", { bubbles: true })
          timeSelect.dispatchEvent(changeEvent)
        }
      })
    })
  }

  // Set today's date as minimum in date input
  const dateInput = document.getElementById("date")
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0]
    dateInput.min = today

    // Set today as default value if empty
    if (!dateInput.value) {
      dateInput.value = today
    }
  }

  // Navbar scroll effect
  let lastScrollTop = 0
  const navbar = document.querySelector(".navbar")

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scrolling down
      navbar.style.transform = "translateY(-100%)"
    } else {
      // Scrolling up
      navbar.style.transform = "translateY(0)"
    }

    lastScrollTop = scrollTop
  })

  // Add loading animation
  window.addEventListener("load", () => {
    document.body.classList.add("loaded")
  })

  // Responsive navigation handling
  function handleResize() {
    if (window.innerWidth > 768) {
      navMenu.classList.remove("active")
      mobileMenuBtn.classList.remove("active")
    }
  }

  window.addEventListener("resize", handleResize)
})

// Additional utility functions
function smoothScrollTo(element) {
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

// Enhanced form validation
function validateForm() {
  const form = document.getElementById("appointmentForm")
  const inputs = form.querySelectorAll("input[required], select[required]")
  let isValid = true

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      input.style.borderColor = "#ff4444"
      isValid = false
    } else {
      input.style.borderColor = "#e9ecef"
    }
  })

  return isValid
}

// Phone number formatting
function formatPhoneNumber(input) {
  let value = input.value.replace(/\D/g, "")
  if (value.length >= 10) {
    value = value.substring(0, 10)
    input.value = value.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")
  }
}

// Add phone formatting to phone input
document.addEventListener("DOMContentLoaded", () => {
  const phoneInput = document.getElementById("phone")
  if (phoneInput) {
    phoneInput.addEventListener("input", function () {
      formatPhoneNumber(this)
    })
  }
})

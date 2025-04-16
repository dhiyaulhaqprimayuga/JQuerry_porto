$(document).ready(() => {
  // Character counter
  $("input, textarea").on("input", function () {
    const maxChars = $(this).data("max-chars")
    const currentLength = $(this).val().length
    const fieldId = $(this).attr("id")

    $(`#${fieldId}Count`).text(currentLength)

    // Visual feedback when approaching limit
    if (currentLength >= maxChars * 0.8) {
      $(`#${fieldId}Count`).css("color", "#ff9800")
    } else {
      $(`#${fieldId}Count`).css("color", "")
    }

    if (currentLength >= maxChars) {
      $(`#${fieldId}Count`).css("color", "#ff4d4d")
    }
  })

  // Form validation
  $("#contactForm").on("submit", (e) => {
    e.preventDefault()

    let isValid = true

    // Reset previous errors
    $(".error-message").text("")
    $("input, textarea").removeClass("error")

    // Validate Name
    const name = $("#name").val().trim()
    if (name === "") {
      $("#nameError").text("Nama wajib diisi")
      $("#name").addClass("error")
      isValid = false
    } else if (name.length > 50) {
      $("#nameError").text("Nama tidak boleh lebih dari 50 karakter")
      $("#name").addClass("error")
      isValid = false
    }

    // Validate Email
    const email = $("#email").val().trim()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (email === "") {
      $("#emailError").text("Email wajib diisi")
      $("#email").addClass("error")
      isValid = false
    } else if (!emailRegex.test(email)) {
      $("#emailError").text("Format email tidak valid")
      $("#email").addClass("error")
      isValid = false
    } else if (email.length > 50) {
      $("#emailError").text("Email tidak boleh lebih dari 50 karakter")
      $("#email").addClass("error")
      isValid = false
    }

    // Validate Message
    const message = $("#message").val().trim()
    if (message === "") {
      $("#messageError").text("Pesan wajib diisi")
      $("#message").addClass("error")
      isValid = false
    } else if (message.length > 200) {
      $("#messageError").text("Pesan tidak boleh lebih dari 200 karakter")
      $("#message").addClass("error")
      isValid = false
    }

    // If valid, submit the form (or show success message for demo)
    if (isValid) {
      // For demo purposes, we'll just show a success message
      // In a real application, you would submit the form to the server
      $("#contactForm").hide()
      $("#formSuccess").fadeIn()

      // Uncomment this to actually submit the form
      // this.submit();
    }
  })

  // Real-time validation as user types
  $("#email").on("blur", function () {
    const email = $(this).val().trim()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (email !== "" && !emailRegex.test(email)) {
      $("#emailError").text("Format email tidak valid")
      $(this).addClass("error")
    } else {
      $("#emailError").text("")
      $(this).removeClass("error")
    }
  })

  // Clear error when user starts typing again
  $("input, textarea").on("focus", function () {
    const fieldId = $(this).attr("id")
    $(`#${fieldId}Error`).text("")
    $(this).removeClass("error")
  })
})

document.addEventListener("DOMContentLoaded", function () {
  // Initialize Flatpickr calendar
  flatpickr("#calendar", {
    minDate: "today", // Ensures the user cannot select past dates
    dateFormat: "Y-m-d", // Sets the date format to YYYY-MM-DD
  });

  const form = document.getElementById("bookingForm");
  const confirmation = document.getElementById("confirmation");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const contact = document.getElementById("contact").value.trim();
    const details = document.getElementById("details").value.trim();
    const date = document.getElementById("calendar").value.trim();

    // Validate all fields are filled
    if (!name || !email || !contact || !details || !date) {
      alert("Please fill in all fields, including date.");
      return;
    }

    // Validate email format using a regular expression
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Display confirmation message
    confirmation.textContent = `Thank you, ${name}. Your booking for ${date} has been submitted!`;
    confirmation.classList.remove("hidden");

    // Reset form fields
    form.reset();
  });
});

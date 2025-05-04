// Basic form submission (this does not send email, just shows a confirmation)
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contact-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = form.querySelector("input[name='name']").value;
      const email = form.querySelector("input[name='email']").value;
      const message = form.querySelector("textarea[name='message']").value;

      if (name && email && message) {
        alert("Thank you for contacting Saint Lex Tech Solutions, " + name + "! We'll get back to you shortly.");
        form.reset();
      } else {
        alert("Please fill in all fields.");
      }
    });
  }
});
let modalShown = false;

function closeModal() {
  document.getElementById("newsletter-modal").style.display = "none";
}

function showModal() {
  document.getElementById("newsletter-modal").style.display = "flex";
}

document.addEventListener("mouseleave", function (e) {
  if (e.clientY < 10 && !modalShown) {
    showModal();
    modalShown = true;
  }
});

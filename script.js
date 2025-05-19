function showRegister() {
  document.getElementById("landingPage").classList.add("hidden");
  document.getElementById("registerPage").classList.remove("hidden");
}

document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("registerPage").classList.add("hidden");
  document.getElementById("paymentPage").classList.remove("hidden");
});

function showReview() {
  document.getElementById("paymentPage").classList.add("hidden");
  document.getElementById("reviewPage").classList.remove("hidden");
}
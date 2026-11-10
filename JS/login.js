const passwordInput = document.getElementById("password");
const toggleButton = document.querySelector(".toggle-password");

toggleButton.addEventListener("click", function () {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleButton.classList.add("is-visible");
        toggleButton.setAttribute("aria-label", "Hide Password");
    } else {
        passwordInput.type = "password";
        toggleButton.classList.remove("is-visible");
        toggleButton.setAttribute("aria-label", "Show Password");
    }
});
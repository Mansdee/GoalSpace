const toggleButtons = document.querySelectorAll(".toggle-password");

toggleButtons.forEach(function (button) {
    const input = button.closest(".input-wrapper").querySelector("input");

    button.addEventListener("click", function () {
        if (input.type === "password") {
            input.type = "text";
            button.classList.add("is-visible");
            button.setAttribute("aria-label", "Hide Password");
        } else {
            input.type = "password";
            button.classList.remove("is-visible");
            button,setAttribute("aria-label", "Show Password");
        }
    })
});
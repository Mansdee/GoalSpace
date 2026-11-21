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
            button.setAttribute("aria-label", "Show Password");
        }
    })
});

const authForm = document.querySelector("form[data-redirect]");

if (authForm) {
    const submitButton = authForm.querySelector(".btn-primary");
    const loadingOverlay = document.getElementById("loading-overlay");

    const setLoading = function (isLoading) {
        loadingOverlay.classList.toggle("is-active", isLoading);
        submitButton.disabled = isLoading;
    };

    authForm.addEventListener("submit", function (event) {
        event.preventDefault();
        setLoading(true);

        setTimeout(function () {
            window.location.href = authForm.dataset.redirect;
        }, 1200);
    });

    window.addEventListener("pageshow", function () {
        setLoading(false);
    });
}
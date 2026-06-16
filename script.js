console.log("SCRIPT LOADED");

document
.querySelectorAll(".curriculum-button")
.forEach(button => {

    button.addEventListener("click", () => {

        const content =
        button.nextElementSibling;

        content.classList.toggle("open");

    });

});

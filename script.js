console.log("SCRIPT LOADED");

const curriculumButtons =
document.querySelectorAll(".curriculum-button");

console.log("Buttons found:", curriculumButtons.length);

curriculumButtons.forEach(button => {

    button.addEventListener("click", () => {

        console.log("BUTTON CLICKED");

        const content =
        button.nextElementSibling;

        content.classList.toggle("open");

    });

});

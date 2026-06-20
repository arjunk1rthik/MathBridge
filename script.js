// =========================
// MOBILE MENU
// =========================

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {

    hamburger.addEventListener("click", () => {

        navLinks.classList.toggle("mobile-active");

    });

}

// =========================
// CURRICULUM ACCORDION
// =========================

const curriculumButtons =
document.querySelectorAll(".curriculum-button");

curriculumButtons.forEach(button => {

    button.addEventListener("click", () => {

        const content =
        button.nextElementSibling;

        document
        .querySelectorAll(".curriculum-content")
        .forEach(section => {

            if (
                section !== content
            ) {

                section.classList.remove(
                "open"
                );

            }

        });

        content.classList.toggle(
        "open"
        );

    });

});

// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (
        window.scrollY > 50
    ) {

        navbar.style.background =
        "rgba(124,77,255,.4)";

        navbar.style.padding =
        "15px 8%";

        navbar.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.25)";

    }

    else {

        navbar.style.background =
        "rgba(124,77,255,.4)";

        navbar.style.padding =
        "20px 8%";

        navbar.style.boxShadow =
        "none";

    }

});

// =========================
// ACTIVE NAVIGATION LINKS
// =========================

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 150;

        const sectionHeight =
        section.offsetHeight;

        if (

            pageYOffset >= sectionTop &&

            pageYOffset <
            sectionTop + sectionHeight

        ) {

            current =
            section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove(
        "active-link"
        );

        if (

            link.getAttribute("href")
            === "#" + current

        ) {

            link.classList.add(
            "active-link"
            );

        }

    });

});

// =========================
// SCROLL REVEAL ANIMATIONS
// =========================

const revealElements =
document.querySelectorAll(

".achievement-box, .feature-card, .pricing-card, .contact-card, .stat-card"

);

const revealObserver =
new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if (

            entry.isIntersecting

        ) {

            entry.target.classList.add(
            "show"
            );

        }

    });

},

{
    threshold:0.15
}

);

revealElements.forEach(element => {

    element.classList.add(
    "hidden"
    );

    revealObserver.observe(
    element
    );

});

// =========================
// SMOOTH SCROLL
// =========================

document
.querySelectorAll(
'a[href^="#"]'
)
.forEach(anchor => {

    anchor.addEventListener(

        "click",

        function(e){

            e.preventDefault();

            const target =
            document.querySelector(

                this.getAttribute(
                "href"
                )

            );

            if (
                target
            ) {

                target.scrollIntoView({

                    behavior:
                    "smooth",

                    block:
                    "start"

                });

            }

        }

    );

});

// =========================
// CLOSE MOBILE MENU
// =========================

document
.querySelectorAll(
".nav-links a"
)
.forEach(link => {

    link.addEventListener(

        "click",

        () => {

            navLinks.classList.remove(
            "mobile-active"
            );

        }

    );

});

// =========================
// PAGE LOAD
// =========================

window.addEventListener(

"load",

() => {

    document.body.classList.add(
    "loaded"
    );

}

);

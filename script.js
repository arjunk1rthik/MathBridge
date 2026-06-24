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
        "20px 8%";

        navbar.style.boxShadow =
        "none";

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
// =========================
// JULY SCHEDULE DROPDOWN
// Add this to the bottom of script.js
// =========================

// Each option: which days are active, and which time slots appear on each day.
// Days: Mon, Tue, Wed, Thu, Fri
// Slots map to these time windows from the spreadsheet:
//   "10:00–11:00 AM", "11:00 AM–12:00 PM",
//   "3:00–4:00 PM",  "6:00–7:00 PM", "7:00–8:00 PM"
// Level labels match the 1A–5A rows in the spreadsheet.

const SCHEDULE_OPTIONS = {
  "1": [
    { day: "Monday",    slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] },
    { day: "Wednesday", slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] },
    { day: "Friday",    slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] }
  ],
  "2": [
    { day: "Monday",   slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] },
    { day: "Tuesday",  slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] },
    { day: "Thursday", slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] }
  ],
  "3": [
    { day: "Monday",    slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] },
    { day: "Tuesday",   slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] },
    { day: "Wednesday", slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] }
  ],
  "4": [
    { day: "Monday",  slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] },
    { day: "Tuesday", slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] },
    { day: "Friday",  slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] }
  ],
  "5": [
    { day: "Monday",    slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] },
    { day: "Wednesday", slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] },
    { day: "Thursday",  slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] }
  ],
  "6": [
    { day: "Monday",   slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] },
    { day: "Thursday", slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] },
    { day: "Friday",   slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] }
  ],
  "7": [
    { day: "Tuesday",   slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] },
    { day: "Wednesday", slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] },
    { day: "Thursday",  slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] }
  ],
  "8": [
    { day: "Tuesday",   slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] },
    { day: "Wednesday", slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] },
    { day: "Friday",    slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] }
  ],
  "9": [
    { day: "Tuesday",  slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] },
    { day: "Thursday", slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] },
    { day: "Friday",   slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] }
  ],
  "10": [
    { day: "Wednesday", slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] },
    { day: "Thursday",  slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] },
    { day: "Friday",    slots: ["10:00–11:00 AM","11:00 AM–12:00 PM","3:00–4:00 PM","6:00–7:00 PM","7:00–8:00 PM"], levels: ["Level 1A","Level 2A","Level 3A","Level 4A","Level 5A"] }
  ]
};

const DAY_ICONS = {
  "Monday":    "fa-m",
  "Tuesday":   "fa-t",
  "Wednesday": "fa-w",
  "Thursday":  "fa-calendar-day",
  "Friday":    "fa-f"
};

const scheduleDropdown = document.getElementById("schedule-dropdown");
const scheduleDisplay  = document.getElementById("schedule-display");
const schedulePlaceholder = document.getElementById("schedule-placeholder");
const scheduleDaysGrid = document.getElementById("schedule-days-grid");

if (scheduleDropdown) {

    scheduleDropdown.addEventListener("change", function () {

        const val = this.value;

        if (!val) {
            scheduleDisplay.style.display  = "none";
            schedulePlaceholder.style.display = "block";
            return;
        }

        const days = SCHEDULE_OPTIONS[val];

        scheduleDaysGrid.innerHTML = days.map(function (dayData) {

            const slotsHTML = dayData.slots.map(function (slot, i) {
                return `
                <div class="schedule-time-slot">
                    <i class="fas fa-clock"></i>
                    <span>${slot}</span>
                    <span class="schedule-level-badge">${dayData.levels[i]}</span>
                </div>`;
            }).join("");

            return `
            <div class="schedule-day-card">
                <h4>
                    <i class="fas fa-calendar-day"></i>
                    ${dayData.day}
                </h4>
                ${slotsHTML}
            </div>`;

        }).join("");

        scheduleDisplay.style.display  = "block";
        schedulePlaceholder.style.display = "none";

    });

}

/* =====================================================
   LANDING → TEAMS
===================================================== */

const exploreBtn = document.getElementById("exploreBtn");
const teamsSection = document.getElementById("teams");

exploreBtn.addEventListener("click", function () {

    teamsSection.scrollIntoView({
        behavior: "smooth"
    });

});


/* =====================================================
   TEAM MATCHER MODAL
===================================================== */

const startMatcher = document.getElementById("startMatcher");
const matcherModal = document.getElementById("matcherModal");
const closeMatcher = document.getElementById("closeMatcher");

startMatcher.addEventListener("click", function () {

    matcherModal.style.display = "flex";

});

closeMatcher.addEventListener("click", function () {

    matcherModal.style.display = "none";

});


/* Close modal if user clicks outside the box */

matcherModal.addEventListener("click", function (event) {

    if (event.target === matcherModal) {

        matcherModal.style.display = "none";

    }

});


/* =====================================================
   TEAM MATCHER LOGIC
===================================================== */

let scores = {

    web: 0,
    sponsorship: 0,
    media: 0,
    community: 0,
    creative: 0,
    writing: 0,
    events: 0

};


const answers = document.querySelectorAll(".answer");

answers.forEach(function (answer) {

    answer.addEventListener("click", function () {

        /*
        Find the question containing
        the clicked answer
        */

        const question = answer.parentElement;


        /*
        Remove previous selection
        from the same question
        */

        const buttons =
            question.querySelectorAll(".answer");

        buttons.forEach(function (button) {

            button.classList.remove("selected");

        });


        /*
        Highlight selected answer
        */

        answer.classList.add("selected");


        /*
        Store selected team
        */

        question.dataset.selectedTeam =
            answer.dataset.team;

    });

});


/* =====================================================
   GET TEAM MATCH
===================================================== */

const getResult =
    document.getElementById("getResult");

const quizContent =
    document.getElementById("quizContent");

const result =
    document.getElementById("result");


getResult.addEventListener("click", function () {


    /* Reset scores */

    scores = {

        web: 0,
        sponsorship: 0,
        media: 0,
        community: 0,
        creative: 0,
        writing: 0,
        events: 0

    };


    /* Get all questions */

    const questions =
        document.querySelectorAll(".question");


    /*
    Check selected answer
    from every question
    */

    questions.forEach(function (question) {

        const selectedTeam =
            question.dataset.selectedTeam;


        if (selectedTeam) {

            scores[selectedTeam]++;

        }

    });


    /* =================================================
       FIND HIGHEST SCORE
    ================================================= */

    let recommendedTeam = "web";

    let highestScore = scores.web;


    for (let team in scores) {

        if (scores[team] > highestScore) {

            highestScore = scores[team];

            recommendedTeam = team;

        }

    }


    /* =================================================
       TEAM NAMES
    ================================================= */

    const teamNames = {

        web:
            "Web Development",

        sponsorship:
            "Sponsorship & Strategic Alliance",

        media:
            "Media & Communication",

        community:
            "Community & Delegate Affairs",

        creative:
            "Creative Strategy & Design",

        writing:
            "Content & Writing",

        events:
            "Events, Brands & People"

    };


    /* =================================================
       TEAM DESCRIPTIONS
    ================================================= */

    const teamDescriptions = {

        web:
            "Your answers suggest that you enjoy technology, problem-solving and building digital experiences.",

        sponsorship:
            "Your answers suggest that you enjoy networking, negotiation and building meaningful partnerships.",

        media:
            "Your answers suggest that you enjoy communication, social media and connecting ideas with people.",

        community:
            "Your answers suggest that you enjoy meeting people, building relationships and creating communities.",

        creative:
            "Your answers suggest that you enjoy creativity, visual thinking and turning ideas into engaging experiences.",

        writing:
            "Your answers suggest that you enjoy writing, storytelling, research and expressing ideas.",

        events:
            "Your answers suggest that you enjoy organisation, teamwork, coordination and bringing experiences to life."

    };


    /* =================================================
       DISPLAY RESULT
    ================================================= */

    result.innerHTML = `

        <div class="team-icon">
            🎯
        </div>

        <h2>
            Your Match:
            ${teamNames[recommendedTeam]}
        </h2>

        <p>
            ${teamDescriptions[recommendedTeam]}
        </p>

        <button
            id="applyFromResult"
            class="primary-btn"
        >
            Continue to Application →
        </button>

    `;


    /* Hide quiz */

    quizContent.style.display = "none";


    /* Show result */

    result.style.display = "block";


    /* =================================================
       CONTINUE TO APPLICATION
    ================================================= */

    document
        .getElementById("applyFromResult")
        .addEventListener("click", function () {

            matcherModal.style.display = "none";


            document
                .getElementById("preferences")
                .scrollIntoView({
                    behavior: "smooth"
                });

        });

});


/* =====================================================
   PREFERENCES
===================================================== */

const preference1 =
    document.getElementById("preference1");

const preference2 =
    document.getElementById("preference2");


const startApplication =
    document.getElementById("startApplication");


const preferenceError =
    document.getElementById("preferenceError");


const application =
    document.getElementById("application");


startApplication.addEventListener("click", function () {


    preferenceError.textContent = "";


    /* First preference is required */

    if (preference1.value === "") {

        preferenceError.textContent =
            "Please select your first preference.";

        return;

    }


    /* Both preferences cannot be same */

    if (
        preference2.value !== "" &&
        preference1.value === preference2.value
    ) {

        preferenceError.textContent =
            "Your two preferences must be different.";

        return;

    }


    /* Show application */

    application.style.display = "block";


    application.scrollIntoView({
        behavior: "smooth"
    });

});


/* =====================================================
   PROGRESS BAR
===================================================== */

const form =
    document.getElementById("applicationForm");


const progressFill =
    document.getElementById("progressFill");


const progressText =
    document.getElementById("progressText");


const formInputs =
    form.querySelectorAll(
        "input, select, textarea"
    );


function updateProgress() {

    let completed = 0;


    formInputs.forEach(function (input) {

        if (input.value.trim() !== "") {

            completed++;

        }

    });


    const percentage =
        Math.round(
            (completed / formInputs.length) * 100
        );


    progressFill.style.width =
        percentage + "%";


    progressText.textContent =
        percentage + "%";

}


formInputs.forEach(function (input) {

    input.addEventListener("input", function () {

        updateProgress();

        saveApplication();

    });

});


/* =====================================================
   LOCAL STORAGE
===================================================== */

function saveApplication() {

    const applicationData = {

        name:
            document.getElementById("name").value,

        email:
            document.getElementById("email").value,

        year:
            document.getElementById("year").value,

        branch:
            document.getElementById("branch").value,

        why:
            document.getElementById("why").value,

        experience:
            document.getElementById("experience").value,

        portfolio:
            document.getElementById("portfolio").value,

        preference1:
            preference1.value,

        preference2:
            preference2.value

    };


    localStorage.setItem(
        "tedxApplication",
        JSON.stringify(applicationData)
    );

}


/* =====================================================
   LOAD SAVED DATA
===================================================== */

function loadApplication() {

    const savedData =
        localStorage.getItem("tedxApplication");


    if (!savedData) {

        return;

    }


    const data =
        JSON.parse(savedData);


    document.getElementById("name").value =
        data.name || "";


    document.getElementById("email").value =
        data.email || "";


    document.getElementById("year").value =
        data.year || "";


    document.getElementById("branch").value =
        data.branch || "";


    document.getElementById("why").value =
        data.why || "";


    document.getElementById("experience").value =
        data.experience || "";


    document.getElementById("portfolio").value =
        data.portfolio || "";


    preference1.value =
        data.preference1 || "";


    preference2.value =
        data.preference2 || "";


    updateProgress();

}


loadApplication();


/* =====================================================
   FORM SUBMISSION
===================================================== */

const confirmation =
    document.getElementById("confirmation");


form.addEventListener("submit", function (event) {

    event.preventDefault();


    /* Save application */

    saveApplication();


    /* Hide application */

    application.style.display = "none";


    /* Show confirmation */

    confirmation.style.display = "flex";


    confirmation.scrollIntoView({
        behavior: "smooth"
    });

});


/* =====================================================
   BACK HOME
===================================================== */

const backHome =
    document.getElementById("backHome");


backHome.addEventListener("click", function () {

    confirmation.style.display = "none";


    document
        .getElementById("landing")
        .scrollIntoView({
            behavior: "smooth"
        });

});
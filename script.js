const futureJob = document.getElementById("future-job");

const q1 = document.getElementById("q-1");
const a1 = document.getElementById("a-1");
const q2 = document.getElementById("q-2");
const a2 = document.getElementById("a-2");
const q3 = document.getElementById("q-3");
const a3 = document.getElementById("a-3");
const q4 = document.getElementById("q-4");
const a4 = document.getElementById("a-4");
const q5 = document.getElementById("q-5");
const a5 = document.getElementById("a-5");
const q6 = document.getElementById("q-6");
const a6 = document.getElementById("a-6");

const firstSet = document.getElementById("first-set");
const secondSet = document.getElementById("second-set");
const thirdSet = document.getElementById("third-set");

const htmlDetails = document.getElementById("html-details");
const cssDetails = document.getElementById("css-details");
const jsDetails = document.getElementById("js-details");
const reactDetails = document.getElementById("react-details");
const cppDetails = document.getElementById("cpp-details");
const pythonDetails = document.getElementById("python-details");
const skillDetails = document.querySelectorAll(".skill-details");

const form = document.getElementById("form");
const result = document.getElementById("result");
const resultContainer = document.getElementById("result-container");

const jobText = "a Future Junior Frontend Developer";
let i = 0;
let typing = true;

function animateText() {
    if (typing) {
        if (i < jobText.length) {
            futureJob.textContent += jobText.charAt(i);
            i++;
            setTimeout(animateText, 100);
        }
        else {
            typing = false;
            setTimeout(animateText, 2000);
        }
    }
}

animateText();

q1.addEventListener("click", () => {
    a1.classList.toggle("open");
    q1.classList.toggle("active");
});

q2.addEventListener("click", () => {
    a2.classList.toggle("open");
    q2.classList.toggle("active");
});

q3.addEventListener("click", () => {
    a3.classList.toggle("open");
    q3.classList.toggle("active");
});

q4.addEventListener("click", () => {
    a4.classList.toggle("open");
    q4.classList.toggle("active");
});

q5.addEventListener("click", () => {
    a5.classList.toggle("open");
    q5.classList.toggle("active");
});

q6.addEventListener("click", () => {
    a6.classList.toggle("open");
    q6.classList.toggle("active");
});

function openHtmlDetails() {
    firstSet.style.display = "none";
    secondSet.style.display = "none";
    thirdSet.style.display = "none";
    htmlDetails.classList.remove("none");
    htmlDetails.classList.add("show");
}

function openCssDetails() {
    firstSet.style.display = "none";
    secondSet.style.display = "none";
    thirdSet.style.display = "none";
    cssDetails.classList.remove("none");
    cssDetails.classList.add("show");
}

function openJsDetails() {
    firstSet.style.display = "none";
    secondSet.style.display = "none";
    thirdSet.style.display = "none";
    jsDetails.classList.remove("none");
    jsDetails.classList.add("show");
}

function openReactDetails() {
    firstSet.style.display = "none";
    secondSet.style.display = "none";
    thirdSet.style.display = "none";
    reactDetails.classList.remove("none");
    reactDetails.classList.add("show");
}

function openCppDetails() {
    firstSet.style.display = "none";
    secondSet.style.display = "none";
    thirdSet.style.display = "none";
    cppDetails.classList.remove("none");
    cppDetails.classList.add("show");
}

function openPythonDetails() {
    firstSet.style.display = "none";
    secondSet.style.display = "none";
    thirdSet.style.display = "none";
    pythonDetails.classList.remove("none");
    pythonDetails.classList.add("show");
}

function closeHtmlDetails() {
    htmlDetails.classList.add("none");
    firstSet.style.display = "flex";
    secondSet.style.display = "flex";
    thirdSet.style.display = "flex";
}

function closeCssDetails() {
    cssDetails.classList.add("none");
    firstSet.style.display = "flex";
    secondSet.style.display = "flex";
    thirdSet.style.display = "flex";
}

function closeJsDetails() {
    jsDetails.classList.add("none");
    firstSet.style.display = "flex";
    secondSet.style.display = "flex";
    thirdSet.style.display = "flex";
}

function closeReactDetails() {
    reactDetails.classList.add("none");
    firstSet.style.display = "flex";
    secondSet.style.display = "flex";
    thirdSet.style.display = "flex";
}

function closeCppDetails() {
    cppDetails.classList.add("none");
    firstSet.style.display = "flex";
    secondSet.style.display = "flex";
    thirdSet.style.display = "flex";
}

function closePythonDetails() {
    pythonDetails.classList.add("none");
    firstSet.style.display = "flex";
    secondSet.style.display = "flex";
    thirdSet.style.display = "flex";
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    resultContainer.style.display = "flex";
    result.innerHTML = "Please wait...";

    fetch('https://formspree.io/f/mwpqjjpy', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
    })
    .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
            result.innerHTML = "Form submitted successfully";
        } else {
            console.log(response);
            result.innerHTML = json.message;
        }
    })
    .catch(error => {
        console.log(error);
        result.innerHTML = "Something went wrong!";
    })
    .then(function() {
        form.reset();
        setTimeout(() => {
            resultContainer.style.display = "none";
        }, 3000);
    });
});

// Mobile version

const body = document.getElementById("body");
const menu = document.getElementById("menu");
const header = document.getElementById("header");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const btn = document.getElementById("btn");
const mobileLinks = document.querySelectorAll(".head-mobile-links");

function openMenu() {
    menuBtn.style.display = "none";
    closeBtn.style.display = "block";
    header.style.width = "100vw";
    header.style.height = "100%";
    header.style.flexDirection = "column";
    menu.style.display = "flex";
    body.style.overflowY = "hidden";
}

function closeMenu() {
    closeBtn.style.display = "none";
    menuBtn.style.display = "block";
    header.style.width = "100%";
    header.style.height = "70px";
    header.style.flexDirection = "row";
    menu.style.display = "none";
    body.style.overflowY = "auto";
}

mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
        closeMenu();
    });
})
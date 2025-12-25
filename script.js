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
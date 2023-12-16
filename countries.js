
let country = "";
let score = 0;
const countries = document.querySelectorAll(".country");


const guidelines = document.querySelector("#guidelines");
const scores = document.querySelector("#scores");

//when country name is submitted
const form = document.querySelector("#entername-form");
const input = document.querySelector("#countryname");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    country = input.value;
    checkMatch(country);
    console.log(score);
    input.value = ""; //clears form
});



/* Function checking if an entry matches any of the countries in the table */
const checkMatch = function (entry) {
    const scoreDisplay = document.querySelector("#score-display");
    //strips entry of spaces and words 'the', 'of' and 'and'
    entry = entry.toLowerCase().trim().replace(" and", "").replace(" of", "").replace(" the", "").replace(/\s/g, "-");
    console.log(`entry: ${entry}`)

    if (entry !== "") {
        let guessed = document.querySelector(`#${entry}`);
        if (guessed) {
            if (guessed.classList.contains("invisible")) {
                let paths = document.querySelectorAll(`.${entry}`);
                for (let path of paths) {
                    path.style.fill = "#C2F9BB";
                }
                guessed.classList.remove("invisible");
                score++;
                scoreDisplay.textContent = score;
            }
            else {
                let text = document.querySelector("#message-text");
                text.textContent = "ALREADY GUESSED";
                text.style.color = "#57A773";
                setTimeout(() => {
                    text.textContent = "";
                }, 1000);
            }
        }
        //alternative names for some countries
        else {
            switch (entry) {
                case ("antigua"):
                    paths = document.querySelectorAll(`.antigua-barbuda`);
                    for (let path of paths) {
                        path.style.fill = "#C2F9BB";
                    }
                    document.querySelector("#antigua-barbuda").classList.remove("invisible");
                    score++;
                    scoreDisplay.textContent = score;
                    break;
                case ("bosnia-herzegovina"):
                    paths = document.querySelectorAll(`.bosnia`);
                    for (let path of paths) {
                        path.style.fill = "#C2F9BB";
                    }
                    document.querySelector("#bosnia").classList.remove("invisible");
                    score++;
                    scoreDisplay.textContent = score;
                    break;
                case ("burma"):
                    paths = document.querySelectorAll(`.myanmar`);
                    for (let path of paths) {
                        path.style.fill = "#C2F9BB";
                    }
                    document.querySelector("#myanmar").classList.remove("invisible");
                    score++;
                    scoreDisplay.textContent = score;
                    break;
                case ("costarica"):
                    paths = document.querySelectorAll(`.costa-rica`);
                    for (let path of paths) {
                        path.style.fill = "#C2F9BB";
                    }
                    document.querySelector("#costa-rica").classList.remove("invisible");
                    score++;
                    scoreDisplay.textContent = score;
                    break;
                case ("czech-republic"):
                    paths = document.querySelectorAll(`.czechia`);
                    for (let path of paths) {
                        path.style.fill = "#C2F9BB";
                    }
                    document.querySelector("#czechia").classList.remove("invisible");
                    score++;
                    scoreDisplay.textContent = score;
                    break;
                case ("north-macedonia"):
                    paths = document.querySelectorAll(`.macedonia`);
                    for (let path of paths) {
                        path.style.fill = "#C2F9BB";
                    }
                    document.querySelector("#macedonia").classList.remove("invisible");
                    score++;
                    scoreDisplay.textContent = score;
                    break;
                case ("uae"):
                    paths = document.querySelectorAll(`.united-arab-emirates`);
                    for (let path of paths) {
                        path.style.fill = "#C2F9BB";
                    }
                    document.querySelector("#united-arab-emirates").classList.remove("invisible");
                    score++;
                    scoreDisplay.textContent = score;
                    break;
                case ("usa"):
                    paths = document.querySelectorAll(`.united-states`);
                    for (let path of paths) {
                        path.style.fill = "#C2F9BB";
                    }
                    document.querySelector("#united-states").classList.remove("invisible");
                    score++;
                    scoreDisplay.textContent = score;
                    break;
                case ("uk"):
                    paths = document.querySelectorAll(`.united-kingdom`);
                    for (let path of paths) {
                        path.style.fill = "#C2F9BB";
                    }
                    document.querySelector("#united-kingdom").classList.remove("invisible");
                    score++;
                    scoreDisplay.textContent = score;
                    break;
                case ("sao-tome"):
                    paths = document.querySelectorAll(`.sao-tome-principe`);
                    for (let path of paths) {
                        path.style.fill = "#C2F9BB";
                    }
                    document.querySelector("#sao-tome-principe").classList.remove("invisible");
                    score++;
                    scoreDisplay.textContent = score;
                    break;
                case ("salvador"):
                    paths = document.querySelectorAll(`.el-salvador`);
                    for (let path of paths) {
                        path.style.fill = "#C2F9BB";
                    }
                    document.querySelector("#el-salvador").classList.remove("invisible");
                    score++;
                    scoreDisplay.textContent = score;
                    break;
                case ("st-lucia"):
                    paths = document.querySelectorAll(`.saint-lucia`);
                    for (let path of paths) {
                        path.style.fill = "#C2F9BB";
                    }
                case ("saint-kitts"):
                case ("st-kitts"):
                case ("st-kitts-nevis"):
                    paths = document.querySelectorAll(`.saint-kitts-nevis`);
                    for (let path of paths) {
                        path.style.fill = "#C2F9BB";
                    }
                    document.querySelector("#saint-kitts-nevis").classList.remove("invisible");
                    score++;
                    scoreDisplay.textContent = score;
                    break;
                case ("saint-vincent"):
                case ("st-vincent"):
                case ("st-vincent-grenadines"):
                    paths = document.querySelectorAll(`.saint-vincent-grenadines`);
                    for (let path of paths) {
                        path.style.fill = "#C2F9BB";
                    }
                    document.querySelector("#saint-vincent-grenadines").classList.remove("invisible");
                    score++;
                    break;
                case ("swaziland"):
                    paths = document.querySelectorAll(`.eswatini`);
                    for (let path of paths) {
                        path.style.fill = "#C2F9BB";
                    }
                    document.querySelector("#eswatini").classList.remove("invisible");
                    score++;
                    break;
                case ("trinidad"):
                    paths = document.querySelectorAll(`.trinidad-tobago`);
                    for (let path of paths) {
                        path.style.fill = "#C2F9BB";
                    }
                    document.querySelector("#trinidad-tobago").classList.remove("invisible");
                    score++;
                    scoreDisplay.textContent = score;
                    break;
                case ("turkiye"):
                    paths = document.querySelectorAll(`.turkey`);
                    for (let path of paths) {
                        path.style.fill = "#C2F9BB";
                    }
                    document.querySelector("#turkey").classList.remove("invisible");
                    score++;
                    scoreDisplay.textContent = score;
                    break;
                case ("vatican-city"):
                    paths = document.querySelectorAll(`.vatican`);
                    for (let path of paths) {
                        path.style.fill = "#C2F9BB";
                    }
                    document.querySelector("#vatican").classList.remove("invisible");
                    score++;
                    scoreDisplay.textContent = score;
                    break;
                case ("congo"):
                    paths = document.querySelectorAll(`.republic-congo`);
                    for (let path of paths) {
                        path.style.fill = "#C2F9BB";
                    }
                    paths = document.querySelectorAll(`.democratic-republic-congo`);
                    for (let path of paths) {
                        path.style.fill = "#C2F9BB";
                    }
                    //congo passes as both DRC and Republic of Congo
                    document.querySelector("#republic-congo").classList.remove("invisible");
                    document.querySelector("#democratic-republic-congo").classList.remove("invisible");
                    score += 2;
                    scoreDisplay.textContent = score;
                    break;

                default:
                    let text = document.querySelector("#message-text");
                    text.textContent = "NOT A VALID COUNTRY NAME";
                    text.style.color = "#EE6352";
                    setTimeout(() => {
                        text.textContent = "";
                    }, 1000);
            }
        }
    }
}
/* Controls the start and stop buttons
*/
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
startBtn.addEventListener("click", function (e) {
    startBtn.disabled = true;
    startBtn.classList.toggle("active");
    stopBtn.disabled = false;
    stopBtn.classList.toggle("active");
    input.disabled = false;
    countdown();
})
stopBtn.addEventListener("click", function (e) {
    stopBtn.disabled = true;
    stopBtn.classList.toggle("active");
    input.disabled = true;
})

//controls the timer
const countdown = function () {
    const timerDisplay = document.querySelector("#time-left");
    const start = new Date();
    const timeStart = start.getTime();
    const stop = new Date();
    const timeStop = timeStart + 900000; //+15 minutes
    stop.setTime(timeStop);
    let minutes, seconds;
    let timer = setInterval(function () {
        let current = new Date().getTime();
        let timeLeft = stop - current;
        let min = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        let sec = Math.floor((timeLeft % (1000 * 60)) / 1000);
        if (min < 10) {
            min = `0${min}`
        }
        if (sec < 10) {
            sec = `0${sec}`
        }
        if (min >= 0) {
            timerDisplay.textContent = `${min}:${sec}`;
        }
        //stops timer and displays final message when time gets to 0
        else {
            clearInterval(this);
            displayFinal("time's up!", score, minutes, seconds);
            displayAll();
        }
        minutes = min;
        seconds = sec;
    }, 1000)
    timer;
    //stop timer with the "give up" button
    stopBtn.addEventListener("click", function (e) {
        clearInterval(timer);
        displayFinal("you quit!", score, minutes, seconds);
        displayAll();
        score = 0;
    })
}
//replaces guidelines with the final score display
const displayFinal = function (displayText, score, minutes, seconds) {
    guidelines.style.display = "none";
    scores.style.display = "flex";
    const finalMessage = document.querySelector("#final-message");
    finalMessage.textContent = displayText;
    const scoreDisplay = document.querySelector("#country-score");
    scoreDisplay.textContent = `You have guessed ${score} out of 196 countries.`;
    const timeDisplay = document.querySelector("#time-score");
    //if minutes and seconds are not undefined
    if (minutes && seconds) {
        let minutesPassed = 14 - parseInt(minutes);
        let secondsPassed = 60 - parseInt(seconds);
        if (minutesPassed <= 0) {
            if (secondsPassed !== 1) {
                timeDisplay.textContent = `It took you ${secondsPassed} seconds to finish.`
            }
            else {
                timeDisplay.textContend = `It took you 1 second to finish`
            }

        }
        else {
            timeDisplay.textContent = `It took you ${minutesPassed} minutes and ${secondsPassed} seconds to finish.`
        }

    }
    //in case timer is stopped before registering time that passed
    else {
        timeDisplay.textContent = `It took you 0 seconds to finish.`
    }
}

//displays not guessed countries in the table and on the map 
const displayAll = function () {
    const countries = document.querySelectorAll(".country");
    for (let country of countries) {
        if (country.classList.contains("invisible")) {
            country.classList.remove("invisible");
            country.style.backgroundColor = "#F9CDC7";
            const id = country.id;
            const allPaths = document.querySelectorAll(`.${id}`);
            for (path of allPaths) {
                path.style.fill = "#F9CDC7";
            }
        }
    }
}

//controls the 'try again' button
const tryAgain = document.querySelector("#try-again-btn");
tryAgain.addEventListener("click", function (e) {
    const scoreDisplay = document.querySelector("#score-display");
    const timeDisplay = document.querySelector("#time-left");
    guidelines.style.display = "flex";
    scores.style.display = "none";
    startBtn.disabled = false;
    startBtn.classList.toggle("active");
    scoreDisplay.textContent = 0;
    timeDisplay.textContent = "15:00"
    //resets the tables
    for (country of countries) {
        country.classList.add("invisible");
        const id = country.id;
        const allPaths = document.querySelectorAll(`.${id}`);
        for (path of allPaths) {
            path.style.fill = "#EBE4F1";
        }
    }

})



// ===== PROJECT STARDUST =====

const startBtn = document.getElementById("startBtn");
const loadingScreen = document.getElementById("loadingScreen");

startBtn.addEventListener("click", () => {

    loadingScreen.classList.add("fadeOut");

    setTimeout(() => {

        loadingScreen.innerHTML = `
        <section id="story">
            <div class="storyBox">
                <h3>Hello Geet ❤️</h3>
                <h1>Welcome to Your Universe</h1>
                <p id="storyText"></p>
                <button id="nextStory">Continue ✨</button>
            </div>
        </section>
        `;

        startStory();

    },1800);

});

function startStory(){

    const lines = [
        "Some people come into our lives for a reason...",
        "Some become unforgettable...",
        "Even though miles separate us...",
        "Today, every star in this universe shines for you...",
        "Happy 14th Birthday, Geet ❤️"
    ];

    let index = 0;

    const text = document.getElementById("storyText");
    const btn = document.getElementById("nextStory");

    text.innerHTML = lines[index];

    btn.onclick = () => {

        index++;

        if(index < lines.length){

            text.innerHTML = lines[index];

        }else{

            showBirthdayRoom();

        }

    };

}

function showBirthdayRoom(){

    document.body.innerHTML = `
    <section id="birthdayRoom">

        <div class="room">

            <h1>🎉 Happy 14th Birthday Geet ❤️</h1>

            <p>
                Today isn't just another day...
                <br>
                It's your special universe.
            </p>

            <div class="cake">

                <div class="plate"></div>

                <div class="layer layer1"></div>
                <div class="layer layer2"></div>
                <div class="layer layer3"></div>

                <div class="candle">
                    <div class="flame" id="flame"></div>
                </div>

            </div>

            <button id="blowBtn">
                💨 Blow Candle
            </button>

        </div>

    </section>
    `;

    document
        .getElementById("blowBtn")
        .onclick = blowCandle;

}

function blowCandle(){

    document.getElementById("flame").style.opacity = "0";

    setTimeout(()=>{

        alert("🎆 Fireworks Coming Next!");

    },700);

} 

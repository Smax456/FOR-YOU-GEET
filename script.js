const startBtn = document.getElementById("startBtn");

startBtn.onclick = function () {

    const loadingScreen = document.getElementById("loadingScreen");

    loadingScreen.style.transition = "opacity 1.5s";
    loadingScreen.style.opacity = "0";

    setTimeout(() => {

        loadingScreen.innerHTML = `
        <div class="storyPage">

            <h1>Hello Geet ❤️</h1>

            <p id="story"></p>

            <button id="nextBtn" style="display:none;">
                Continue ✨
            </button>

        </div>
        `;

        loadingScreen.style.opacity = "1";

        const message =
        "Some people become family not because of blood... but because of the place they earn in our hearts.";

        let i = 0;

        const story = document.getElementById("story");

        const interval = setInterval(() => {

            story.innerHTML += message[i];

            i++;

            if(i >= message.length){

                clearInterval(interval);

                document.getElementById("nextBtn").style.display = "inline-block";

            }

        },40);

        document.getElementById("nextBtn").onclick = birthdayRoom;

    },1500);

}

function birthdayRoom(){

document.body.innerHTML = `
<div class="birthdayRoom">

<h1>🎂 Happy Birthday Geet ❤️</h1>

<p>Your magical birthday journey has begun.</p>

<div class="cake">
🍰
</div>

<button id="cakeBtn">
Blow Candle 💨
</button>

</div>
`;

document.getElementById("cakeBtn").onclick=function(){

alert("🎉 Candle Blown! Fireworks coming next!");

}

}

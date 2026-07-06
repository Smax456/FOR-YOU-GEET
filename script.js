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

<div class="balloons">
    <div class="balloon b1"></div>
    <div class="balloon b2"></div>
    <div class="balloon b3"></div>
    <div class="balloon b4"></div>
    <div class="balloon b5"></div>
</div>

<h1>🎂 Happy Birthday Geet ❤️</h1>

<p>Your magical birthday journey has begun.</p>

<div class="cake">

<div class="plate"></div>

<div class="cake-base"></div>

<div class="cake-middle"></div>

<div class="cake-top"></div>

<div class="icing"></div>

<div class="drip drip1"></div>
<div class="drip drip2"></div>
<div class="drip drip3"></div>
<div class="controls">

<button id="cherryBtn">🍒 Cherries</button>

<button id="chocoBtn">🍫 Chocolate</button>

<button id="sprinkleBtn">✨ Sprinkles</button>

<button id="flowerBtn">🌸 Flowers</button>

</div>

<p id="statusText">
Decorate your birthday cake...
</p>

<div id="decorations"></div>

<div class="candle"><div class="flame"></div></div>
<div class="candle"><div class="flame"></div></div>
<div class="candle"><div class="flame"></div></div>
<div class="candle"><div class="flame"></div></div>
<div class="candle"><div class="flame"></div></div>
<div class="candle"><div class="flame"></div></div>
<div class="candle"><div class="flame"></div></div>

<div class="candle"><div class="flame"></div></div>
<div class="candle"><div class="flame"></div></div>
<div class="candle"><div class="flame"></div></div>
<div class="candle"><div class="flame"></div></div>
<div class="candle"><div class="flame"></div></div>
<div class="candle"><div class="flame"></div></div>
<div class="candle"><div class="flame"></div></div>

</div>

</div>

let decorated = 0;

function checkDecorations(){

    if(decorated === 4){

        document.getElementById("statusText").innerHTML =
        "✨ Beautiful! Time to light your birthday candles...";

        setTimeout(showCandles,1500);

    }

}

document.addEventListener("click",(e)=>{

    const deco=document.getElementById("decorations");

    if(!deco) return;

    if(e.target.id==="cherryBtn"){

        deco.innerHTML += "<span class='deco'>🍒</span>";
        e.target.disabled=true;
        decorated++;
        checkDecorations();

    }

    if(e.target.id==="chocoBtn"){

        deco.innerHTML += "<span class='deco'>🍫</span>";
        e.target.disabled=true;
        decorated++;
        checkDecorations();

    }

    if(e.target.id==="sprinkleBtn"){

        deco.innerHTML += "<span class='deco'>✨</span>";
        e.target.disabled=true;
        decorated++;
        checkDecorations();

    }

    if(e.target.id==="flowerBtn"){

        deco.innerHTML += "<span class='deco'>🌸</span>";
        e.target.disabled=true;
        decorated++;
        checkDecorations();

    }

});

function showCandles(){

    alert("🕯️ Next: 14 Candles!");

}

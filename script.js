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

                <button id="nextStory">
                    Continue ✨
                </button>

            </div>

        </section>

        `;

        startStory();

    },1800);

});

function startStory(){

const lines=[

"Some people come into our lives for a reason...",

"Some become unforgettable...",

"Even though miles separate us...",

"Today, every star in this universe shines for you...",

"Happy 14th Birthday, Geet ❤️"

];

let index=0;

const text=document.getElementById("storyText");
const btn=document.getElementById("nextStory");

text.innerHTML=lines[index];

btn.onclick=()=>{

index++;

if(index<lines.length){

text.innerHTML=lines[index];

}else{

alert("🎂 Next: The Birthday Room (coming next!)");

}

}

          }

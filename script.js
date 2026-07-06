/* ==========================
   SECTIONS
========================== */

const sections = document.querySelectorAll(".section");
const nextButtons = document.querySelectorAll(".nextBtn");

let current = 0;

nextButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        if (current < sections.length - 1) {

            sections[current].classList.remove("active");

            current++;

            sections[current].classList.add("active");

            window.scrollTo(0, 0);

            if (current === 1) {

                startTyping();

            }

            if (current === sections.length - 1) {

                launchConfetti();

            }

        }

    });

});

/* ==========================
   TYPEWRITER
========================== */

const letter = `Dear Geet,

Today is not just another day...

It's the day someone truly special came into this world.

I hope your smile always stays as bright as the stars.

May every dream you have slowly become reality.

Thank you for being such an amazing sister.

No matter how old we grow,

you'll always be my little sister.

Happy Birthday ❤️

— Minnu`;

const typing = document.getElementById("typing");

let index = 0;

function startTyping(){

    if(index !== 0) return;

    function type(){

        if(index < letter.length){

            typing.textContent += letter.charAt(index);

            index++;

            setTimeout(type,35);

        }

    }

    type();

}

/* ==========================
   MUSIC
========================== */

const music = document.getElementById("music");
const playBtn = document.getElementById("playMusic");

if(playBtn){

playBtn.addEventListener("click",()=>{

if(music.paused){

music.play();

playBtn.innerHTML="⏸ Pause Voice";

}else{

music.pause();

playBtn.innerHTML="▶ Play Voice";

}

});

}

/* ==========================
   SIMPLE CONFETTI
========================== */

function launchConfetti(){

for(let i=0;i<80;i++){

const confetti=document.createElement("div");

confetti.className="confetti";

confetti.style.left=Math.random()*100+"vw";

confetti.style.animationDelay=Math.random()*3+"s";

confetti.style.background=

`hsl(${Math.random()*360},100%,65%)`;

document.body.appendChild(confetti);

}

}

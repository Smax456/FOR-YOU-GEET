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

const letter = `Dear Geet,6-7 6-7 hehe happy birthday to you geet,

nenu neeku chaala vishyallo sorry cheppali andulokati nenu late ayipoyanu but naa intention neeku oka memorable ga wish cheyyalanade ,

i hope you understood me,

Today is not just another day...

It's the day someone truly special came into this world.

I hope your smile always stays as bright as the stars.

May every dream you have slowly become reality.

Thank you for being such an amazing sister.

No matter how old we grow,

you'll always be my little sister.

Once again Happy Birthday to you geet❤️

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
/* ==========================
   SHOOTING STARS
========================== */

function createShootingStar() {

    const star = document.createElement("div");

    star.className = "shooting-star";

    star.style.top = Math.random() * 40 + "%";
    star.style.left = "-150px";

    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 2500);

}

setInterval(createShootingStar, 5000);


/* ==========================
   FLOATING HEARTS
========================== */

function createHeart() {

    if (current !== sections.length - 1) return;

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (18 + Math.random() * 20) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);

}

setInterval(createHeart, 700);


/* ==========================
   FINAL MESSAGE ANIMATION
========================== */

const finalCard = document.querySelector(".finalCard");

if(finalCard){

    finalCard.style.opacity = "0";

}

function showFinalCard(){

    if(current === sections.length - 1){

        setTimeout(()=>{

            finalCard.style.transition="1.5s";

            finalCard.style.opacity="1";

            finalCard.style.transform="scale(1)";

        },800);

    }

}

nextButtons.forEach(btn=>{

btn.addEventListener("click",showFinalCard);

});

/* ==========================
   SWIPE SUPPORT (MOBILE)
========================== */

let startX = 0;

document.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

document.addEventListener("touchend", (e) => {

    let endX = e.changedTouches[0].clientX;

    if (startX - endX > 80) {
        if (current < sections.length - 1) {
            nextButtons[current].click();
        }
    }

});

/* ==========================
   FADE BETWEEN SECTIONS
========================== */

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "scale(.98)";

});

sections[0].style.opacity = "1";
sections[0].style.transform = "scale(1)";

nextButtons.forEach(btn=>{

btn.addEventListener("click",()=>{

sections.forEach(sec=>{

sec.style.opacity="0";
sec.style.transform="scale(.98)";

});

sections[current].style.opacity="1";
sections[current].style.transform="scale(1)";

});

});

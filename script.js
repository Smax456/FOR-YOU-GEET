const screens = {
loading: document.getElementById("loading"),
story: document.getElementById("story"),
cake: document.getElementById("cake"),
final: document.getElementById("final")
};

function showScreen(name){
Object.values(screens).forEach(s => s.classList.remove("active"));
screens[name].classList.add("active");
}

/* ========== START ========== */

document.getElementById("startBtn").onclick = () => {
showScreen("story");
startStory();
};

/* ========== TYPEWRITER ========== */

function startStory(){

const text = "Some people become family not because of blood... but because of the place they earn in our hearts.";

let i = 0;
const el = document.getElementById("storyText");

el.textContent = "";

const timer = setInterval(() => {

el.textContent += text[i];
i++;

if(i >= text.length){
clearInterval(timer);
document.getElementById("storyNext").classList.remove("hidden");
}

},40);

document.getElementById("storyNext").onclick = () => {
showScreen("cake");
};
}

/* ========== CAKE INTERACTION ========== */

document.getElementById("blowBtn").onclick = () => {

document.getElementById("flame").style.opacity = "0";

startFireworks();

setTimeout(() => {
showScreen("final");
},2000);

};

/* ========== FIREWORKS (CANVAS) ========== */

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function startFireworks(){

for(let i=0;i<80;i++){

particles.push({
x:canvas.width/2,
y:canvas.height/2,
vx:(Math.random()-0.5)*6,
vy:(Math.random()-0.5)*6,
alpha:1
});

}

animate();
}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p => {

p.x += p.vx;
p.y += p.vy;
p.alpha -= 0.01;

ctx.fillStyle = `rgba(255,100,200,${p.alpha})`;
ctx.fillRect(p.x,p.y,3,3);

});

particles = particles.filter(p => p.alpha > 0);

if(particles.length > 0){
requestAnimationFrame(animate);
}
}

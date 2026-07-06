// State Manager Engine
const StateEngine = {
    currentPhase: 'loadingScreen',
    
    transition(nextPhaseId) {
        const current = document.getElementById(this.currentPhase);
        const next = document.getElementById(nextPhaseId);
        
        if(current) {
            current.style.opacity = '0';
            setTimeout(() => {
                current.classList.add('hidden');
                current.classList.remove('active');
                
                next.classList.remove('hidden');
                setTimeout(() => {
                    next.classList.add('active');
                }, 50);
            }, 1200);
        }
        this.currentPhase = nextPhaseId;
    }
};

// Phase 1 Launch Setup
document.getElementById('startBtn').addEventListener('click', () => {
    StateEngine.transition('storyScreen');
    startTypewriter();
});

// Phase 2 Typewriter Implementation
function startTypewriter() {
    const textStr = "Some people become family not because of blood... but because of the place they earn in our hearts.";
    let idx = 0;
    const container = document.getElementById('storyText');
    
    const writer = setInterval(() => {
        container.innerHTML += textStr[idx];
        idx++;
        if(idx >= textStr.length) {
            clearInterval(writer);
            const btn = document.getElementById('nextBtn');
            btn.style.opacity = '1';
            btn.onclick = () => StateEngine.transition('birthdayRoom');
        }
    }, 50);
}

// Phase 3 Decorating & Light Management 
let uniqueDecorationsCount = 0;
const totalNeededDecorations = 4;

document.querySelectorAll('.deco-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const type = e.target.getAttribute('data-item');
        const layer = document.getElementById('decorations-layer');
        
        // Spawn decoration dynamically onto the top area of your cake layer
        const itemSpan = document.createElement('span');
        itemSpan.className = 'deco pop-item';
        itemSpan.innerText = type;
        itemSpan.style.left = `${Math.random() * 60 + 20}%`;
        layer.appendChild(itemSpan);
        
        e.target.disabled = true;
        uniqueDecorationsCount++;
        
        if(uniqueDecorationsCount === totalNeededDecorations) {
            handleDecorationComplete();
        }
    });
});

function handleDecorationComplete() {
    document.getElementById('statusText').innerText = "✨ Truly Beautiful! Time to step up to the candles...";
    const grid = document.querySelector('.candles-grid');
    grid.classList.remove('hidden');
    
    // Fill the grid automatically with your 14 structural candles
    grid.innerHTML = Array(14).fill('<div class="candle"><div class="flame"></div></div>').join('');
    
    const actionBtn = document.getElementById('actionBtn');
    actionBtn.classList.remove('hidden');
    actionBtn.onclick = blowCandlesOut;
}

function blowCandlesOut() {
    // Extinguish all flames smoothly
    document.querySelectorAll('.flame').forEach(flame => {
        flame.style.animation = 'none';
        flame.style.opacity = '0';
        flame.style.transition = 'opacity 0.6s ease';
    });
    
    document.getElementById('statusText').innerText = "Make a wish, Geet! 🌌";
    
    // Launch Fireworks Canvas Engine
    initFireworks();
    
    setTimeout(() => {
        StateEngine.transition('giftScreen');
        setupGiftInteraction();
    }, 3000);
}

// Lightweight HTML5 High-Performance Particle Canvas Engine
function initFireworks() {
    const canvas = document.getElementById('fireworksCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    let particles = [];
    
    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.destX = Math.random() * 6 - 3;
            this.destY = Math.random() * 6 - 3;
            this.color = `hsl(${Math.random() * 360}, 100%, 60%)`;
            this.alpha = 1;
        }
        draw() {
            ctx.save();
            ctx.globalAlpha = this.alpha;
            ctx.beginPath();
            ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.restore();
        }
        update() {
            this.x += this.destX;
            this.y += this.destY;
            this.alpha -= 0.015;
        }
    }
    
    // Create random point bursts
    for(let burst=0; burst<5; burst++) {
        setTimeout(() => {
            const rx = Math.random() * canvas.width;
            const ry = Math.random() * (canvas.height * 0.6);
            for(let p=0; p<60; p++) particles.push(new Particle(rx, ry));
        }, burst * 400);
    }
    
    function renderLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles = particles.filter(p => p.alpha > 0);
        particles.forEach(p => { p.update(); p.draw(); });
        if(particles.length > 0) requestAnimationFrame(renderLoop);
    }
    renderLoop();
}

// Phase 4 Present Box Reveal Control Mechanics
function setupGiftInteraction() {
    const box = document.querySelector('.gift-box');
    box.onclick = () => {
        if(!box.classList.contains('open')) {
            box.classList.add('open');
            setTimeout(() => {
                const letter = document.querySelector('.letter-wrapper');
                letter.classList.remove('hidden');
                letter.style.opacity = '1';
                letter.style.transition = 'opacity 1s ease';
            }, 800);
        }
    };
}

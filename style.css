*{
margin:0;
padding:0;
box-sizing:border-box;
}

body{
font-family:Poppins;
background:#02040d;
overflow:hidden;
}

/* ========== SCREEN SYSTEM ========== */

.screen{
position:absolute;
inset:0;
display:none;
justify-content:center;
align-items:center;
flex-direction:column;
text-align:center;
color:white;
}

.screen.active{
display:flex;
animation:fadeIn 1s ease;
}

@keyframes fadeIn{
from{opacity:0; transform:scale(1.05);}
to{opacity:1; transform:scale(1);}
}

/* ========== LOADING ========== */

#loading{
background:radial-gradient(circle,#16214d,#050712,#000);
}

.moon{
position:absolute;
top:-120px;
right:-100px;
width:300px;
height:300px;
border-radius:50%;
background:radial-gradient(circle,#fff,#8aa4ff33,transparent);
filter:blur(10px);
animation:float 6s infinite;
}

@keyframes float{
50%{transform:translateY(20px);}
}

.stars{
position:absolute;
inset:0;
background-image:radial-gradient(#fff 1px,transparent 1px);
background-size:80px 80px;
opacity:.6;
}

.shooting{
position:absolute;
width:200px;
height:2px;
background:linear-gradient(90deg,#fff,transparent);
transform:rotate(-20deg);
animation:shoot 5s infinite;
top:100px;
left:-200px;
}

@keyframes shoot{
100%{left:120%; top:400px;}
}

/* ========== CENTER TEXT ========== */

.center h1{
font-size:48px;
}

.center span{
display:block;
font-family:Great Vibes;
font-size:60px;
color:#ff4fa0;
}

button{
margin-top:25px;
padding:14px 32px;
border:none;
border-radius:40px;
cursor:pointer;
font-size:18px;
background:linear-gradient(45deg,#8b5cf6,#ff4fa0);
color:white;
}

/* ========== STORY ========== */

.storyBox{
max-width:600px;
padding:30px;
background:rgba(255,255,255,0.08);
border-radius:20px;
}

#storyText{
margin:20px 0;
font-size:20px;
min-height:80px;
}

/* ========== CAKE ========== */

.cake{
position:relative;
width:220px;
height:220px;
margin:30px auto;
}

.plate{
position:absolute;
bottom:0;
width:240px;
height:20px;
background:#ddd;
border-radius:50%;
left:50%;
transform:translateX(-50%);
}

.base,.middle,.top{
position:absolute;
left:50%;
transform:translateX(-50%);
border-radius:12px;
}

.base{bottom:20px;width:200px;height:70px;background:#c97a3a;}
.middle{bottom:85px;width:160px;height:60px;background:#b5652d;}
.top{bottom:140px;width:120px;height:50px;background:#9c4a1a;}

.candle{
position:absolute;
bottom:190px;
left:50%;
transform:translateX(-50%);
width:10px;
height:40px;
background:white;
}

.flame{
position:absolute;
top:-18px;
left:50%;
transform:translateX(-50%);
width:14px;
height:14px;
background:orange;
border-radius:50%;
box-shadow:0 0 20px orange;
animation:flicker .2s infinite;
}

@keyframes flicker{
50%{transform:translateX(-50%) scale(1.2);}
}

/* ========== FINAL ========== */

.finalBox h1{
font-size:42px;
}

canvas{
position:absolute;
inset:0;
pointer-events:none;
}

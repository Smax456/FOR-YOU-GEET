const startBtn = document.getElementById("startBtn");

startBtn.onclick = function () {

    document.body.innerHTML = `
    <div style="
        width:100vw;
        height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        background:#050816;
        color:white;
        font-size:40px;
        font-family:Poppins,sans-serif;
        text-align:center;
    ">
        Hello Geet ❤️<br>
        Project STARDUST is working! 🚀
    </div>
    `;

};

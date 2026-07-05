const startBtn = document.getElementById("startBtn");

startBtn.onclick = function () {

    const loadingScreen = document.getElementById("loadingScreen");

    loadingScreen.style.transition = "opacity 1.5s ease";
    loadingScreen.style.opacity = "0";

    setTimeout(() => {

        loadingScreen.innerHTML = `
        <div style="
            width:100%;
            height:100vh;
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
            background:#050816;
            color:white;
            font-family:Poppins,sans-serif;
            text-align:center;
            padding:30px;
        ">
            <h1>Hello Geet ❤️</h1>

            <p style="margin-top:20px;font-size:22px;">
                Welcome to your universe...
            </p>

            <button id="continueBtn"
            style="
            margin-top:40px;
            padding:15px 30px;
            border:none;
            border-radius:40px;
            background:#ff4fa0;
            color:white;
            font-size:18px;
            cursor:pointer;
            ">
                Continue ✨
            </button>
        </div>
        `;

        loadingScreen.style.opacity = "1";

    },1500);

};

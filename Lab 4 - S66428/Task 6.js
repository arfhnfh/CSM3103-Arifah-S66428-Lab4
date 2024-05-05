document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container");
    const square1 = document.getElementById("square1");
    const square2 = document.getElementById("square2");
    const startBtn = document.getElementById("startBtn");
    const stopBtn = document.getElementById("stopBtn");
    let animationInterval;

    function getRandomPosition() {
        const maxWidth = container.offsetWidth - square1.offsetWidth;
        const maxHeight = container.offsetHeight - square1.offsetHeight;
        const x = Math.floor(Math.random() * maxWidth);
        const y = Math.floor(Math.random() * maxHeight);
        return { x, y };
    }

    function moveSquares() {
        const pos1 = getRandomPosition();
        const pos2 = getRandomPosition();
        square1.style.left = pos1.x + "px";
        square1.style.top = pos1.y + "px";
        square2.style.left = pos2.x + "px";
        square2.style.top = pos2.y + "px";
    }

    function startAnimation() {
        moveSquares();
        animationInterval = setInterval(moveSquares, 1000);
    }

    function stopAnimation() {
        clearInterval(animationInterval);
        console.log("Animation stopped"); // Check if this log appears
    }

    startBtn.addEventListener("click", startAnimation);
    stopBtn.addEventListener("click", stopAnimation);
});

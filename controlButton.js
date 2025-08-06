document.addEventListener("keydown", function (e) {
    let key = e.key;

    if (key === "ArrowUp") triggerButton("up");
    else if (key === "ArrowDown") triggerButton("down");
    else if (key === "ArrowLeft") triggerButton("left");
    else if (key === "ArrowRight") triggerButton("right");
});

function triggerButton(id) {
    const btn = document.getElementById(id);
    btn.classList.add("active");


    setTimeout(() => {
        btn.classList.remove("active");
    }, 300);
}

const buttons = document.querySelectorAll("#twinkle");

function addShineEffect(el) {
  const shine = document.createElement("div");
  shine.classList.add("twinkle-effect");
  el.appendChild(shine);

  shine.animate(
    [
      {
        transform: "rotate(-45deg) scale(1)",
        top: "-50%",
        left: "-100%",
        opacity: 0,
      },
      {
        transform: "rotate(-45deg) scale(3)",
        top: "-50%",
        left: "-50%",
        opacity: 0.5,
      },
      {
        transform: "rotate(-45deg) scale(6)",
        top: "-50%",
        left: "0%",
        opacity: 1,
      },
      {
        transform: "rotate(-45deg) scale(9)",
        top: "0%",
        left: "50%",
        opacity: 0.5,
      },
      {
        transform: "rotate(-45deg) scale(12)",
        top: "50%",
        left: "150%",
        opacity: 0,
      },
    ],
    {
      duration: 500,
      easing: "ease-in-out",
      fill: "forwards",
    }
  );

  setTimeout(() => {
    el.removeChild(shine);
  }, 2000);
}

// Run the shine effect on all .twinkle elements every 2 seconds
setInterval(() => {
  buttons.forEach((el) => addShineEffect(el));
}, 2000);

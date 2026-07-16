for(let i = 0; i < 150; i++){

    let particle = document.createElement("div");

    particle.className = "particle";

    particle.style.left =
    Math.random() * 100 + "vw";

    particle.style.top =
    Math.random() * 100 + "vh";

    particle.style.animationDelay =
    Math.random() * 6 + "s";

    document.body.appendChild(particle);

}

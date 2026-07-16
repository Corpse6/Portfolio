function awaken(){

alert(
"☠ GRIMOIRE AWAKENED ☠\n\nCorpse Starlight has begun his journey."
);

}


for(let i = 0; i < 150; i++){

    let particle = document.createElement("div");

    particle.className = "particle";


    particle.style.left =
    Math.random() * window.innerWidth + "px";


    particle.style.top =
    Math.random() * window.innerHeight + "px";


    particle.style.animationDelay =
    Math.random() * 8 + "s";


    document.body.appendChild(particle);

}

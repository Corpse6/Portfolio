console.log("Corpse Starlight awakened");


for(let i = 0; i < 50; i++){

    let particle = document.createElement("div");

    particle.className = "particle";

    particle.style.left = Math.random() * 100 + "vw";
    particle.style.top = Math.random() * 100 + "vh";

    document.body.appendChild(particle);

}

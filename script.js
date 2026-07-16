function awaken(){

alert(
"☠ GRIMOIRE AWAKENED ☠\n\nCorpse Starlight has begun his journey."
);

}



for(let i=0;i<120;i++){

let particle=document.createElement("div");

particle.className="particle";

particle.style.left=
Math.random()*100+"%";


particle.style.animationDelay=
Math.random()*5+"s";


document.body.appendChild(particle);

}

console.log("☠ Corpse Starlight Grimoire Awakened ☠");



function awaken(){

alert(
"☠ GRIMOIRE AWAKENED ☠\n\n" +
"Corpse Starlight begins his journey.\n" +
"New summons will be created."
);

}





// SOUL PARTICLES


for(let i = 0; i < 150; i++){


    let particle=document.createElement("div");


    particle.className="particle";


    particle.style.left =
    Math.random()*100+"vw";


    particle.style.top =
    Math.random()*100+"vh";



    particle.style.animationDelay =
    Math.random()*6+"s";



    particle.style.animationDuration =
    (4+Math.random()*6)+"s";



    document.body.appendChild(particle);


}

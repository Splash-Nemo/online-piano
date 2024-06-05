const pianoKeys = document.querySelectorAll(".key");

let audio = new Audio("./Sounds/a.wav");

function playSound(key){
    audio.src = `./Sounds/${key}.wav`;
    audio.play();

    const abc = document.querySelector(`[data-key="${key}"]`);
    abc.classList.add("active");
    
    setTimeout( () => {
        abc.classList.toggle("active");
    },150)
}

function clickedKey(key) {
    audio.src = `./Sounds/${key}.wav`;
    audio.play();
    const abc = document.querySelector(`[data-key="${key}"]`);
    abc.classList.add("active");
    
    setTimeout( () => {
        abc.classList.toggle("active");
    },150)
}

pianoKeys.forEach(key => {
    console.log(key.dataset.key)
    key.addEventListener("click", () => playSound(key.dataset.key));
})

document.addEventListener("keydown", (e) => {
    clickedKey(e.key);
}) 

const keysToggler = document.querySelector(".toggler");

keysToggler.addEventListener("click", () => {
    const keys = document.querySelectorAll(".key span");
    keys.forEach(key => {
        key.classList.toggle("hide");
    });
});
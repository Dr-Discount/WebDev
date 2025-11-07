var slides = [];
slides[0] = "Images/doom.png";
slides[1] = "Images/minecraft.png";
slides[2] = "Images/repo.png";
slides[3] = "Images/silksong.png";

var step = 0;
let slider = () => {
    document.slideshow.src = slides[step];
    if (step < slides.length - 1) {
        step++;
    } else {
        step = 0;
    }
    setTimeout("slider()", 5000);
}

window.onload = slider;
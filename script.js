let noButton = document.getElementById("no");
let yesButton = document.getElementById("yes");
let popup = document.getElementById("popup");
let noMessages = ["Are you sure?", "Please?", "Think again!", "Really??", "Last chance!"];
let noClickCount = 0;
let scaleFactor = 1;
//variables above 
noButton.addEventListener("click", function() {
    if (noClickCount < noMessages.length) {
        noButton.textContent = noMessages[noClickCount];
        noClickCount++;
    } else {
        noButton.style.display = "none";
    }
});

yesButton.addEventListener("click", function() {
    popup.style.display = "block";
    scaleImage();
});

function scaleImage() {
    scaleFactor = scaleFactor === 1 ? 0.8 : 1;
    popup.style.transform = `translate(-50%, -50%) scale(${scaleFactor})`;
}
//makes the image move lowkey 

function closePopup() {
    popup.style.display = "none";
}
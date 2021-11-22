const cards = document.querySelectorAll(".card");   // we got a nodeList it is like an alternating word for array so we can loop through it
console.log(cards);

const points = document.getElementById("score");

// console.log(points.innerHTML);



// variables
var isFlipped = false;
var firstCard;
var secondCard;         // or can also be initialize them with null or undefined
var count = 0;

cards.forEach((card) => card.addEventListener("click", flip))    // getting a click listener on each card flip

function flip() {
    // console.log("card flipped");
    // console.log(this);        // this points towards the current card on which we just clicked
    this.classList.add("flip");     // adding flip class which defines under css
    if(!isFlipped) {
        isFlipped = true;   // bcoz it is already clicked now
        firstCard = this;    // keeping track of first card using the this (points to the current card)
    } else {
        secondCard = this;
        console.log(firstCard);  // now on running it on browser we see that we can compare the emojis on the basis of data-image
        console.log(secondCard);  // so we can grab these data attributes through dataset refer to checkIt function
        checkIt();
    }
}

function checkIt() {
    // console.log("Checking...");
    if (firstCard.dataset.image === secondCard.dataset.image) {
        success();
        count = count+10;
        points.innerText = count;
    } else {
        fail();
        count--;
        points.innerText = count;
    }
}


function success() {
    // console.log("Success");
    firstCard.removeEventListener('click', flip);
    secondCard.removeEventListener('click', flip);
    reset();
}


function fail() {
    // console.log("Failed");
    setTimeout((c) => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        reset();
    }, 1000);
}


function reset() {
    isFlipped = false;
    firstCard = null;
    secondCard = null;   // use null here bcoz we have to reset the value inside card variables
}


//TODO: shuffle

(function shuffle() {
    cards.forEach((card) => {
        var index = Math.floor(Math.random() * 16);   // generating a random number between 0 to 15
        card.style.order = index;        // using a flex box property style.order
    });
})();

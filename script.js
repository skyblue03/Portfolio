document.addEventListener("DOMContentLoaded", function() {
    // Wrap every letter in a span
    var textWrapper = document.querySelector('.ml12');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, function(letter) {
        return "<span class='letter'>" + letter + "</span>";
    });

    // Define the animation sequence using Anime.js
    anime.timeline({loop: false})  // Set loop to false if you want the animation to only happen once
        .add({
            targets: '.ml12 .letter',
            translateX: [40,0],
            translateZ: 0,
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 1200,
            delay: function(el, i) { return 500 + 30 * i; }
        });
        // The part that causes fade-out has been removed to keep the text visible
});

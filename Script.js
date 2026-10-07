let images = document.querySelectorAll(".thumbnails img");
let largeImage = document.querySelector("#largeImage");

images.forEach(function(image) {

    image.addEventListener("dragend", function() {

        largeImage.src = image.src;

        largeImage.style.display = "block";

    });

});

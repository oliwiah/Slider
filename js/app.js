document.addEventListener('DOMContentLoaded', function() {

    var next = document.getElementById("nextPicture");
    var prev = document.getElementById("prevPicture");
    var pics = document.querySelectorAll(".slider li");
    var picIndex = 0;
    console.log(next);
    console.log(prev);
    console.log(pics);
    console.log("Picture index: " + picIndex);

    pics[0].classList.add("visible");

    next.addEventListener("click", function() {
        pics[picIndex].classList.remove("visible");
        picIndex++;

        if (picIndex === pics.length) {
            picIndex = 0;
        }
        console.log(picIndex);
        pics[picIndex].classList.add("visible");
        });

    prev.addEventListener("click", function() {
        pics[picIndex].classList.remove("visible");
        picIndex--;

        if (picIndex < 0) {
            picIndex = pics.length-1;
        }
        console.log(picIndex);
        pics[picIndex].classList.add("visible");
    })



});

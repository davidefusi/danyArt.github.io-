
var dd1 = document.getElementById("main");
var dd2 = document.getElementById("headback");
var dd3 = document.getElementById("CANAS");
var dd4 = document.getElementById("ABOT");
var dd5 = document.getElementById("WALL");
var dd6 = document.getElementById("FACE");

function abt() {
  globalThis.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  dd4.style.display = "block";
  dd1.style.display = "none";
  dd2.innerHTML =
    '<input id="goBack" type="button" value="Go Back to Home Page" onclick="back()">';
}

function back() {
  dd1.style.display = "block";
  dd3.style.display = "none";
  dd4.style.display = "none";
  dd5.style.display = "none";
  dd6.style.display = "none";
  dd2.innerHTML = " ";
}

function cavs1() {
  globalThis.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  dd3.style.display = "block";
  dd1.style.display = "none";
  dd2.innerHTML =
    '<input id="goBack" type="button" value="Go Back to Home Page" onclick="back()">';
}

function wll() {
  globalThis.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  dd5.style.display = "block";
  dd1.style.display = "none";
  dd2.innerHTML =
    '<input id="goBack" type="button" value="Go Back to Home Page" onclick="back()">';
}

function face() {
  globalThis.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  dd6.style.display = "block";
  dd1.style.display = "none";
  dd2.innerHTML =
    '<input id="goBack" type="button" value="Go Back to Home Page" onclick="back()">';
}

var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

function enlarge(obj) {
  modal.style.display = "block";
  modalImg.src = obj.src;
  captionText.innerHTML = obj.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

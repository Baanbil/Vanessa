const btn = document.getElementById("click");
const div = document.getElementById("div");

btn.onclick = function(){
  div.style.display = "block";
  btn.style.display ="none"
}
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
  /*var y1 = document.getElementsByClassName("topnav-left")[0];
  if (y1.className === "topnav-left") {
    y1.className += " responsive";
  }
  var y2 = document.getElementsByClassName("topnav-centered")[0];
  if (y2.className === "topnav-centered") {
    y2.className += " responsive";
  }*/
}

// Get the container element
var btnContainer = document.getElementById("myTopnav");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByTagName("a");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    if(this.className !== "icon") {
      this.className += " active";
    }
  });
}
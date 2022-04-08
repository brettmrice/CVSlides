
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var date = new Date();
/*if((date.getDate() - 1) > 0) {
  document.getElementById('shift-current').innerHTML = 'Shifts - ' + months[date.getMonth()];
  document.getElementById('shift-previous').innerHTML = 'Shifts - ' + months[date.getMonth() - 1];
} else {
  document.getElementById('shift-current').innerHTML = 'Shifts - ' + months[date.getMonth() - 1];
  document.getElementById('shift-previous').innerHTML = 'Shifts - ' + months[date.getMonth() - 2];
}*/

document.getElementById('loadImg').style.display = "none";
  

// change menu item to active

// Get all buttons with class="btn" inside the container
var btns = document.getElementById("myNAVdiv").querySelectorAll('a[target]');
var dropDown = 'no';

  
// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    iframeHide();
    
    // 1. remove active class from last selected menu item
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    
    // 2. make top menu item active if sub item selected
    // 3. change name of top menu item to show sub item selected
    if (this.parentElement.className === "dropdown-content") {
      parent = this.parentElement.parentElement.querySelector('a');
      topName = parent.innerHTML.split(' |')[0];
      clickName = this.innerHTML;
      parent.innerHTML = topName + ' | ' + clickName;
      parent.className += " active";
      
      // 4. fix top menu item name if new horizontal item selected
      if (dropDown == 'yes') {
        if(lastParent_topName != topName) {
          lastParent.innerHTML = lastParent_topName;
        }
        // record current top menu item and element to compare in future
        lastParent = parent;
        lastParent_topName = topName;
      } else {
        lastParent = parent;
        lastParent_topName = topName;
      }
      // record an initial dropdown selection
      dropDown = 'yes';
    } else {
      this.className += " active";
      
      // 4. fix top menu item name if new horizontal item selected
      if (dropDown == 'yes' & this.innerHTML != lastParent_topName) {
        lastParent.innerHTML = lastParent_topName;
      }
    }
  });
}

iframeShow = function() {
  //document.getElementsByTagName('iframe')[0].style.display = "inherit";
  document.getElementsByClassName('holds-the-iframe')[0].style.visibility = "visible";
  document.getElementById('loadImg').style.display = "none";
};

iframeHide = function() {
  //document.getElementsByTagName('iframe')[0].style.display = "none";
  document.getElementById('loadImg').style.display = "inline";
  document.getElementsByClassName('holds-the-iframe')[0].style.visibility = "hidden";
}
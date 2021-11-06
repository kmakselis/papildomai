function changeTab(target, name){
  var tabs = document.getElementsByClassName("tab");
  var tab = document.getElementById(name);
  var buttons = document.getElementsByTagName("button");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
    tab.style.display = "block";
    buttons[i].classList.remove("active");
  }
  target.currentTarget.className = "active";
}

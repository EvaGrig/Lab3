setInterval(function(){
  var cd = new Date();
  var clockdat = document.getElementById("clockdat");
  clockdat.innerHTML = cd.toLocaleTimeString();
}, 1000);
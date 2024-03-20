var styles = ['./style1/style1.css', './style2/style2.css'];
var currentIndex = 0;

function changeStyle() {
    var stylesheet = document.getElementById('stylesheet');
    currentIndex = (currentIndex + 1) % styles.length;
    stylesheet.href = styles[currentIndex];
}

setInterval(changeStyle, 3000);
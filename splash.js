function splash_off()
{
    splash = document.getElementById("splash").style.webkitTransform = "translate3d(0,-100%,0)"
}

setTimeout(splash_off, 500)

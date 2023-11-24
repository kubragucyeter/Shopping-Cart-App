const half = document.querySelector(".half")
const headerMain = document.getElementById("headerMain")
const headHeight= headerMain?.offsetHeight

half?.setAttribute("style", "padding-top:" + headHeight?.toString() + "px")
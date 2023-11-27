const half = document.querySelector("#halfDiv")
const headerMain = document.getElementById("headMain")
const amount = document.querySelector(".amount")
const headHeight = headerMain?.offsetHeight

half?.setAttribute("style", "padding-top:" + headHeight + "px")
amount?.setAttribute("style", "padding-top:" + headHeight + "px")

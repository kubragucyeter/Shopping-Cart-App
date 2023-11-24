const slider = document.querySelector(".slider")
const headerMain = document.getElementById("headMain")
const headHeight = headerMain?.offsetHeight //headerMain' in yüksekliği alındı

slider?.setAttribute("style", "padding-top:" + headHeight?.toString() + "px") //slidera üstten padding verildi
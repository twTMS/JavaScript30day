const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// 畫筆的顏色
ctx.strokeStyle = "#BADA55";
// 線條連結樣式
ctx.lineJoin = "round";
ctx.lineCap = "round";
// 線條的寬度
ctx.lineWidth = 100;

// ctx.beginPath();
// // start from
// ctx.moveTo(100, 100);
// // go to
// ctx.lineTo(200, 200);
// ctx.stroke();

canvas.addEventListener("mousedown", e => {
  ctx.beginPath();
  // start from
  ctx.moveTo(e.offsetX, e.offsetY);
});
canvas.addEventListener("mousemove", function(e) {
  console.log(e);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
});

// 取得方向 DOM
const arrow = document.querySelector(".arrow");
// 取得速度 DOM
const speed = document.querySelector(".speed-value");

navigator.geolocation.watchPosition(
  data => {
    console.log(data);
    speed.textContent = data.coords.speed;
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
  },
  err => {
    console.error(err);
  }
);

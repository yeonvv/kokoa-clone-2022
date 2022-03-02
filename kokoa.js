const clock = document.getElementById("kokoa-clock");

function getTime() {
  const date = new Date();
  clock.innerHTML = `${date.getHours()}:${date.getMinutes()}`;
}
getTime();
setInterval(getTime, 1000);

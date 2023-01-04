const coffeeimage = document.querySelector(".news");
const btn = document.querySelector("button");
function getdata() {
  fetch("https://developer.ap.org/")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      news.innerHTML = `<img class="img-fluid image" src="${data.image}" alt="Placeholder image">`;
    })
    .catch((error) => {
      console.log(error);
    });
}
btn.addEventListener("click", getdata);
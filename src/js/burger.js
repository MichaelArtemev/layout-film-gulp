const burgerFunc = () => {
  const burger = document.querySelector(".hero__burger");
  const menu = document.querySelector(".hero__right-header");
  const body = document.querySelector("body");
  const wrapp = document.querySelector(".header-wrapp");
  const img = document.querySelector(".main-page__img-wrapper");
  const ulList = document.querySelector(".hero__list").children;

  let count = 0;
  while (count <= 4) {
    ulList[count].onclick = closeBurger;
    count++;
  }

  let checker = 0;

  function closeBurger() {
    img.style.display = "block";
    body.classList.remove("lock");
    menu.style.animation = "1.2s hideanim";
    setTimeout(() => {
      burger.classList.remove("active");
      menu.classList.remove("hero__right-header-active");
    }, 1000);
    checker = 0;
  }

  burger.onclick = function (e) {
    if (checker === 0) {
      img.style.display = "none";
      burger.classList.add("active");
      menu.style.animation = "1s opacity";
      menu.className += " hero__right-header-active";
      body.classList.add("lock");
      checker = 1;
    } else {
      closeBurger()
    }
  };
}
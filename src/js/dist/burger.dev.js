"use strict";

var burgerFunc = function burgerFunc() {
  var burger = document.querySelector(".hero__burger");
  var menu = document.querySelector(".hero__right-header");
  var body = document.querySelector("body");
  var wrapp = document.querySelector(".header-wrapp");
  var img = document.querySelector(".main-page__img-wrapper");
  var ulList = document.querySelector(".hero__list").children;
  var count = 0;

  while (count <= 4) {
    ulList[count].onclick = closeBurger;
    count++;
  }

  var checker = 0;

  function closeBurger() {
    img.style.display = "block";
    body.classList.remove("lock");
    menu.style.animation = "1.2s hideanim";
    setTimeout(function () {
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
      closeBurger();
    }
  };
};
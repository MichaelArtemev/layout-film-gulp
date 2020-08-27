"use strict";

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor(t / 1000 % 60);
  var minutes = Math.floor(t / 1000 / 60 % 60);
  var hours = Math.floor(t / (1000 * 60 * 60) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);

  function updateClock() {
    var t = getTimeRemaining(endtime);
    clock.innerHTML = "".concat(t.days, " days ").concat(("0" + t.hours).slice(-2), " hours ").concat(("0" + t.minutes).slice(-2), " minutes ").concat(("0" + t.seconds).slice(-2), " seconds");

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = "January 01 2021 00:00:00 GMT+0300"; // var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer

initializeClock("timer", deadline);
var burger = document.querySelector(".hero__burger");
var menu = document.querySelector(".hero__right-header");
var body = document.querySelector("body");
var wrapp = document.querySelector(".header-wrapp");
var img = document.querySelector(".main-page__img-wrapper");
var checker = 0;

burger.onclick = function (e) {
  if (checker === 0) {
    img.style.display = "none";
    burger.classList.add("active");
    menu.style.animation = "1s opacity";
    menu.className += " hero__right-header-active";
    body.classList.add("lock");
    checker = 1;
  } else {
    img.style.display = "block";
    body.classList.remove("lock");
    menu.style.animation = "1.2s hideanim";
    setTimeout(function () {
      burger.classList.remove("active");
      menu.classList.remove("hero__right-header-active");
    }, 1000);
    checker = 0;
  }
};
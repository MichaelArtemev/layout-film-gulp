"use strict";

var sliderFunc = function sliderFunc() {
  function sliderCheck() {
    if (document.documentElement.clientWidth <= 458) {
      if (sliderRunTime === 458) {
        return;
      } else {
        sliderRunTime = 458;
        clearInterval(autoPlaySlider);
        slider(1);
      }
    } else if (document.documentElement.clientWidth <= 718 && document.documentElement.clientWidth > 458) {
      if (sliderRunTime === 718) {
        return;
      } else {
        sliderRunTime = 718;
        clearInterval(autoPlaySlider);
        slider(2);
      }
    } else if (document.documentElement.clientWidth <= 1200 && document.documentElement.clientWidth > 718) {
      if (sliderRunTime === 1200) {
        return;
      } else {
        sliderRunTime = 1200;
        clearInterval(autoPlaySlider);
        slider(3);
      }
    } else {
      if (sliderRunTime > 1250) {
        return;
      } else {
        sliderRunTime = 1300;
        clearInterval(autoPlaySlider);
        slider(5);
      }
    }
  }

  var checkTimer = setInterval(function () {
    sliderCheck();
  }, 1000);
  var sliderRunTime = 0;
  var autoPlaySlider = null;

  function slider(showCouner) {
    var position = 0;
    var slidesToShow = showCouner;
    var slidesToScroll = 1;
    var container = document.querySelector(".slider-container");
    var track = document.querySelector(".slider-track");
    var btnPrev = document.querySelector(".prev");
    var btnNext = document.querySelector(".next");
    var items = document.querySelectorAll(".slider-item");
    track.style.transform = 'translateX(0px)';
    var play = false;
    var timeoutKiller = null;
    var itemsCount = items.length;
    var itemWidth = 240;
    var movePosition = slidesToScroll * itemWidth;
    btnNext.addEventListener('click', function () {
      var itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
      position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
      clearInterval(autoPlaySlider); // if (play === false) {
      //   play = true;
      //   timeoutKiller = setTimeout(() => {
      //     autoPlay(2000);
      //   }, 5000)
      // }

      setPosition();
      checkBtns();
    });
    btnPrev.addEventListener('click', function () {
      var itemsLeft = Math.abs(position) / itemWidth;
      position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
      clearInterval(autoPlaySlider); // if (play === false) {
      //   play = true;
      //   timeoutKiller = setTimeout(() => {
      //     autoPlay(2000);
      //   }, 5000)
      // }

      setPosition();
      checkBtns();
    });

    var setPosition = function setPosition() {
      track.style.transform = "translateX(".concat(position, "px)");
    };

    var checkBtns = function checkBtns() {
      btnPrev.disabled = position === 0;
      btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
    };

    var autoPlay = function autoPlay(iterval) {
      play = false;
      autoPlaySlider = setInterval(function () {
        if (document.documentElement.clientWidth <= 458) {
          if (sliderRunTime === 458) {
            if (position === -2160) {
              position = 0;
            }
          }
        } else if (document.documentElement.clientWidth <= 718 && document.documentElement.clientWidth > 458) {
          if (sliderRunTime === 718) {
            if (position === -1920) {
              position = 0;
            }
          }
        } else if (document.documentElement.clientWidth <= 1200 && document.documentElement.clientWidth > 718) {
          if (sliderRunTime === 1200) {
            if (position === -1680) {
              position = 0;
            }
          }
        } else if (document.documentElement.clientWidth > 1200) {
          if (sliderRunTime > 1250) {
            if (position === -1200) {
              position = 0;
            }
          }
        }

        var itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
        position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
        setPosition();
        checkBtns();
      }, iterval);
    };

    checkBtns();
    autoPlay(2000);
  }
};
const sliderFunc = () => {
  function sliderCheck() {
    if (document.documentElement.clientWidth <= 458) {
      if (sliderRunTime === 458) {
        return
      } else {
        sliderRunTime = 458;

        clearInterval(autoPlaySlider);
        slider(1);
      }
    } else if (document.documentElement.clientWidth <= 718 && document.documentElement.clientWidth > 458) {
      if (sliderRunTime === 718) {
        return
      } else {
        sliderRunTime = 718;

        clearInterval(autoPlaySlider);
        slider(2);
      }
    } else if (document.documentElement.clientWidth <= 1200 && document.documentElement.clientWidth > 718) {
      if (sliderRunTime === 1200) {
        return
      } else {
        sliderRunTime = 1200;

        clearInterval(autoPlaySlider);
        slider(3);
      }
    } else {
      if (sliderRunTime > 1250) {
        return
      } else {
        sliderRunTime = 1300;

        clearInterval(autoPlaySlider);
        slider(5);
      }
    }
  }

  const checkTimer = setInterval(() => {
    sliderCheck()
  }, 1000);

  let sliderRunTime = 0;
  let autoPlaySlider = null;

  function slider(showCouner) {
    let position = 0;
    const slidesToShow = showCouner;
    const slidesToScroll = 1;
    const container = document.querySelector(".slider-container");
    const track = document.querySelector(".slider-track");
    const btnPrev = document.querySelector(".prev");
    const btnNext = document.querySelector(".next");
    const items = document.querySelectorAll(".slider-item");
    track.style.transform = 'translateX(0px)';
    let play = false;
    let timeoutKiller = null;


    const itemsCount = items.length;
    const itemWidth = 240;
    const movePosition = slidesToScroll * itemWidth;


    btnNext.addEventListener('click', () => {
      const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
      position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
      clearInterval(autoPlaySlider);
      // if (play === false) {
      //   play = true;
      //   timeoutKiller = setTimeout(() => {
      //     autoPlay(2000);
      //   }, 5000)
      // }
      setPosition();
      checkBtns();
    });

    btnPrev.addEventListener('click', () => {
      const itemsLeft = Math.abs(position) / itemWidth;

      position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
      clearInterval(autoPlaySlider);
      // if (play === false) {
      //   play = true;
      //   timeoutKiller = setTimeout(() => {
      //     autoPlay(2000);
      //   }, 5000)
      // }
      setPosition();
      checkBtns();
    });

    const setPosition = () => {
      track.style.transform = `translateX(${position}px)`;
    }
    const checkBtns = () => {
      btnPrev.disabled = position === 0;
      btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
    }
    const autoPlay = (iterval) => {
      play = false;
      autoPlaySlider = setInterval(() => {
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

        const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
        position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;       
        setPosition();
        checkBtns();
      }, iterval);
    }
    checkBtns();
    autoPlay(2000);
  }
}
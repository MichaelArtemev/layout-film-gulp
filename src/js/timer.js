const clockFunc = () => {
  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function initializeClock(id, endtime) {
    const clock = document.getElementById(id);

    function updateClock() {
      const t = getTimeRemaining(endtime);

      clock.innerHTML = `${t.days} days ${("0" + t.hours).slice(-2)} hours ${(
          "0" + t.minutes
        ).slice(-2)} minutes ${("0" + t.seconds).slice(-2)} seconds`;

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }

  const deadline = "January 01 2021 00:00:00 GMT+0300";
  // var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
  initializeClock("timer", deadline);
}